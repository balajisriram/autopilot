#!/usr/bin/python2.7

'''
Drives the Raspberry Pi

Sets up & coordinates the multiple threads needed to function as a standalone taskontrol client
    -State Control: Managing box I/O and the state matrix
    -Audio Server
    -Communication w/ home terminal via TCP/IP

To Do (Initial, 6/22/16):
    -Build initialization method that does first setup to store location of host terminal, data, etc.
    -Build calibration method
    -Build in threading/multiprocessing
    -Sounds should be a) parameterized in the protocol file, and b) handled/defined in the sounds file
        -So the mouse object is saved with the parameters for the protocol, then RPilot loads the task template w/ those
        parameters so it is the child of RPilot, then the functions in the task template have access to RPilot methods.
'''

__version__ = '0.1'
__author__ = 'Jonny Saunders <jsaunder@uoregon.edu>'

import os
import sys
import subprocess
import datetime
import logging
import json
import argparse
# import RPi.GPIO as GPIO
import pyo
import threading
import tables
import time
import zmq
import multiprocessing
from zmq.eventloop.ioloop import IOLoop
from zmq.eventloop.zmqstream import ZMQStream

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from networking import Pilot_Networking
import tasks

class RPilot:

    def __init__(self, prefs=None):
        # If we weren't handed prefs, try to load them from the default location
        if not prefs:
            prefs_file = '/usr/rpilot/prefs.json'
            if not os.path.exists(prefs_file):
                raise RuntimeError("No prefs file passed and none found in {}".format(prefs_file))

            with open(prefs_file) as prefs_file_open:
                prefs = json.load(prefs_file_open)
                raise Warning('No prefs file passed, loaded from default location. Should pass explicitly')

        self.prefs = prefs
        self.name = self.prefs['NAME']


        # Start Logging
        timestr = datetime.datetime.now().strftime('%y%m%d_%H%M%S')
        log_file = os.path.join(self.prefs['LOGDIR'], 'Pilots_Log_{}.log'.format(timestr))

        self.logger = logging.getLogger('main')
        self.log_handler = logging.FileHandler(log_file)
        self.log_formatter = logging.Formatter("%(asctime)s %(levelname)s : %(message)s")
        self.log_handler.setFormatter(self.log_formatter)
        self.logger.addHandler(self.log_handler)
        self.logger.setLevel(logging.INFO)
        self.logger.info('Pilot Logging Initiated')

        # Open .h5 used to store local copies of data
        # NOTE: THESE ARE NOT TO BE RELIED ON FOR STORAGE,
        # Their purpose is to compare with the terminal at the end of running a task
        # in case the terminal missed us sending any events.
        local_file = os.path.join(self.prefs['DATADIR'], 'local.h5')
        self.h5f = tables.open_file(local_file, mode='a')
        self.logger.info('Local file opened: {}'.format(local_file))

        #self.data = dict() # Temporary storage of trial data before flushing to h5f
        #self.triggers = dict()
        #self.timers = dict()
        #self.next_triggers = dict() # Precomputed triggers/times for next stage, kept separate so triggers/timers can be assigned under control of timers/locks/etc.
        #self.next_timers = dict()
        # self.init_pins()
        # self.init_pyo()
        #self.protocol_ready = 0

        # Locks, etc. for threading
        #self.threads = dict()
        #self.pin = None # Which pin was triggered? Set by pin_cb()
        self.running = threading.Event() # Are we running a task?
        self.stage_block = threading.Event() # Are we waiting on stage triggers?
        #self.stage_lock = threading.Condition()
        #self.trigger_lock = threading.Condition()
        #self.timer_block = threading.Event()
        #self.timer_block.set()

        # Init pyo server
        self.init_pyo()

        # Init Networking
        self.spawn_network()
        self.init_network()

        # Set and update state
        self.state = 'IDLE' # or 'Running'
        self.update_state()



        # Synchronize system clock w/ time from terminal.
        # Send message back to terminal that we're all good.


    #################################################################
    # Networking
    #################################################################

    def spawn_network(self):
        # Spawn the networking object as a separate process
        self.networking = Pilot_Networking()
        self.networking.start()

    def init_network(self):
        # Start internal communications
        self.context = zmq.Context()
        self.loop = IOLoop.instance()

        # Pusher sends messages to the network object
        # Message in receives them
        self.pusher = self.context.socket(zmq.PUSH)
        self.message_in  = self.context.socket(zmq.PULL)

        self.pusher.connect('tcp://localhost:{}'.format(self.prefs['MSGINPORT']))
        self.message_in.connect('tcp://localhost:{}'.format(self.prefs['MSGOUTPORT']))

        # Setup message_in for looping
        self.message_in = ZMQStream(self.message_in, self.loop)
        self.message_in.on_recv(self.handle_message)

        # Listen dictionary - what do we do when we receive different messages?
        self.messages = {
            'START': self.l_start, # We are being passed a task and asked to start it
            'STOP' : self.l_stop # We are being asked to stop running our task

        }

        # Start IOLoop in daemon thread
        self.loop_thread = threading.Thread(target=self.loop.start)
        self.loop_thread.daemon = True
        self.loop_thread.start()

        self.logger.info("Networking Initialized")

    def handle_message(self, msg):
        # Messages are single part json-encoded messages
        msg = json.loads(msg[0])
        if isinstance(msg, unicode or basestring):
            msg = json.loads(msg)

        if not all(i in msg.keys() for i in ['key', 'value']):
            self.logger.warning('MESSAGE Improperly formatted: {}'.format(msg))
            return

        self.logger.info('MESSAGE - KEY: {}, VALUE: {}'.format(msg['key'], msg['value']))

        message_funk = self.messages[msg['key']]
        message_thread = threading.Thread(target=message_funk, args=(msg['value'],))
        message_thread.start()

    def send_message(self, key, target='', value=''):
        msg = {'key':key, 'target':target, 'value':value}

        msg_thread = threading.Thread(target=self.pusher.send_json, args=(json.dumps(msg),))
        msg_thread.start()

        self.logger.info("MESSAGE SENT - Target: {}, Key: {}, Value: {}".format(key, target, value))


    def l_start(self, value):
        # TODO: If any of the sounds are 'file,' make sure we have them. If not, request them.
        # TODO: We should also update the system time here
        # Value should be a dict of protocol params

        # Get the task object by its type
        task_class = tasks.TASK_LIST[value['task_type']]
        # Instantiate the task
        self.task = task_class(prefs=self.prefs, stage_block=self.stage_block, **value)

        # Setup a table to store data locally
        # Get data table descriptor
        table_descriptor = self.task.DataTypes

        # Make a group for this mouse if we don't already have one
        mouse_name = value['mouse']
        if not mouse_name in self.h5f.root:
            self.h5f.create_group("/", mouse_name, "Local Data for {}".format(mouse_name))
        mouse_group = self.h5f.get_node('/', mouse_name)

        # Make a table for today's data, appending a conflict-avoidance int if one already exists
        datestring = datetime.date.today().isoformat()
        conflict_avoid = 0
        while datestring in mouse_group:
            conflict_avoid += 1
            datestring = datetime.date.today().isoformat() + '-' + str(conflict_avoid)

        self.table = self.h5f.create_table(mouse_group, datestring, table_descriptor,
                                           "Mouse {} on {}".format(mouse_name, datestring))

        # The Row object is what we write data into as it comes in
        self.row = self.table.row

        # Run the task and tell the terminal we have
        self.running.set()
        threading.Thread(target=self.run_task).start()

        self.state = 'RUNNING'
        self.update_state()



    def l_stop(self, value):
        # We just clear the stage block and reset the running flag here
        # and call the cleanup routine from run_task so it can exit cleanly
        self.running.clear()
        self.stage_block.set()


        # Let the terminal know we're stopping
        # (not stopped yet because we'll still have to sync data, etc.)
        self.state = 'STOPPING'
        self.update_state()

    def update_state(self):
        self.send_message('STATE', target='T', value = self.state)
    #################################################################
    # Hardware Init
    #################################################################

    def init_pyo(self):
        # Jackd should already be running from the launch script created by setup_pilot, we we just
        # self.pyo_server = pyo.Server(audio='jack', nchnls=int(self.prefs['NCHANNELS']), duplex=0)
        # self.pyo_server.setOutputDevice(0)
        # self.pyo_server.deactivateMidi()
        # self.pyo_server.setVerbosity(8)
        #
        # # We have to set pyo to not automatically try to connect to inputs when there aren't any
        # self.pyo_server.setJackAuto(False, True)
        #
        # # Then boot and start
        # self.pyo_server.boot()
        # self.pyo_server.start()
        # self.logger.info("pyo server started")

        self.server_process = Pyo_Process()
        self.server_process.start()
        self.pyo_server = self.server_process.server

    #################################################################
    # Trial Running and Management
    #################################################################
    def run_task(self):
        # Run as a separate thread, just keeps calling next() and shoveling data
        while True:
            # Calculate next stage data and prep triggers
            data = self.task.stages.next()() # Double parens because next just gives us the function, we still have to call it

            # Send data back to terminal
            self.send_message('DATA', target='T', value=data)

            # Store a local copy
            # the task class has a class variable DATA that lets us know which data the row is expecting
            for k, v in data.items():
                if k in self.task.DATA.keys():
                    self.row[k] = v

            # If the trial is over (either completed or bailed), flush the row
            if 'TRIAL_END' in data.keys():
                self.row.append()
                self.table.flush()

            # Wait on the stage lock to clear
            print('pre-block')
            self.stage_block.wait()
            print('post-block')
            # If the running
            if not self.running.is_set():
                # TODO: Call task shutdown method
                self.row.append()
                self.table.flush()
                break








    def run_task_old(self):
        """
        Make threads for running task, start running task.
        Refresher on the terminology that's been adopted: a "Protocol" is a collection of "Steps", each of which is a "Task" with promotion criteria to the next step.
            Each task is composed of "stages" which are the individual points of decision and response that the RPi and mouse engage in.
        Tasks are run "stagewise," where the run function calls next() on the iterator that contains the stage functions.
            Tasks are only recognized as such when an "end_trial" trigger is returned by the stage function, prompting the
            RPilot to save the trial's data. Otherwise they are run continuously.
        Each run cycle proceeds:
            -check_ready(): checks if everything has been prepared for the trial. The Task should provide a list of things to check (not implemented yet)
            -subject.task.next(): computes the logic for the next trial stage, returns data, triggers, and timers.
            -handle_triggers(): if triggers aren't returned as callable functions (rewards, for example, can't be
                returned as functions b/c the task doesn't know about the reward hardware), we make them callable.
            -

        pin passes the triggered pin (if any) back to the task class
        """


        if not self.check_ready():
            # TODO Make more verbose as check_ready is populated
            raise Exception("Our check didn't turn out which is weird because it doesn't check anything yet")

        self.is_running.set() # Set is_running threading.Event object, clearing will stop running trials.

        # Keeps shit rolling indefinitely, stops when is_running is clear()-ed.
        self.threads['stage'] = threading.Thread(target=self.run_stages)
        # TODO spawn threads for run_triggers and run_timers
        # TODO have triggers and timers spawn as threads as well waiting for a condition given by pin_cb



        # Calculate the next stage
        self.stage_num,stage_function = self.subject.task.stages.next()
        data, triggers, timers = stage_function(pin)
        # Check if our triggers are functions or need to be made functions
        for k,v in triggers.items():
            if not callable(v):
                triggers[k] = self.wrap_triggers(v)

        # Set up a timer thread to handle timers -
            # for example, a too early timer would replace the triggers with the too_early_sound until the dur. of the stim is up
            # then change it back when the time is up.
            # wrap sound trigger in function that sets an event when the sound is finished playing
                #trig = tabobj['trig'], trigfunc(trig, switch_trigs)

        self.handle_timers(timers)

        # TODO Check if any of our triggers ask us to wait before making the next stage's triggers available (eg. punish delay)

        # like make the function a new thread, and then check for the thread's completion before assigning the next round's triggers

        # Make triggers available to pin_cb function - which will do the calling in a separate thread
        # Check if we are waiting on something else to finish before making the triggers available
        self.trigger_lock.wait() # will pass if trigger_lock set(), otherwise will wait for it to be set.
        self.triggers = triggers

        # Add returned data to trial data dict. If this is the last stage in the trial, save the data.
        if self.stage_num == (self.subject.task.num_stages-1):
            self.data.update(data)
            self.subject.save_trial(self.data)
            self.data = dict() # Clear trial data
            self.triggers = dict()
            self.timers = dict()
            self.run() # Run next trial. # TODO remember this makes all 'last stages' triggerless.
        else:
            self.data.update(data)

        # TODO Implement the 'immediate' timer to immediately call next stage
        # TODO stop timers when they're no longer relevant

        # We then implicitly wait for run to get called again by pin_cb()

    def stop_running(self):
        self.is_running.clear()
        # Stop timers, clear triggers, make sure we release any locks.
        if not self.stage_lock.is_owned():
            self.stage_lock.acquire()
            self.stage_lock.notify()
            self.stage_lock.release()


    def run_stages(self):
        """
        Calculate next stage whenever the conditional lock is .notify()-ed and .release()-d by the appropriate thread.
        :param lock:
        :return:
        """
        while True:
            self.stage_lock.acquire() # Prevents anyone else from taking control

            # Compute next stage
            self.stage_num, stage_function = self.subject.task.stages.next()
            data, triggers, timers = stage_function(self.pin) # self.pin is set by pin_cb() whenever needed

            # Last stage should always be triggerless and only used for end-of-trial calcs.
            # As such, if we're on it, save data and clear everything for next round
            if self.stage_num == (self.subject.task.num_stages-1):
                self.data.update(data)
                self.subject.save_trial(self.data)
                self.data = dict()
                self.triggers = dict() # TODO Make sure these work with whatever thread implementation
                self.timers = dict() # TODO Definitely will have to stop the timers
                continue # skips the wait, if there's a hanging timers, still want to calc. next stage, delay handled elsewhere
            else:
                self.data.update(data)
                self.next_triggers = triggers
                self.next_timers = timers

            # Let run_triggers know we're done with this round's triggers
            self.trigger_lock.acquire()
            self.trigger_lock.notify()
            self.trigger_lock.release()

            # Wait until pin_cb tells us it's time for the next stage
            self.stage_lock.wait()
            self.stage_lock.release()

            if not self.is_running.is_set():
                self.subject.save_trial(self.data)
                break

    def run_triggers(self):
        """
        Handle triggers when run_stages has them, assigns to self.triggers so accessible to pin_cb
        """
        while True:
            # Wait until run_stages activates us
            self.trigger_lock.acquire()
            self.trigger_lock.wait()

            # Wait if there is a timer block. If timer_block is .set(), will pass. otherwise will wait.
            self.timer_block.wait()

            for k, v in self.next_triggers.items():
                if not callable(v):
                    self.triggers[k] = self.wrap_triggers(v)
                else:
                    self.triggers[k] = v

            self.trigger_lock.release()
            if not self.is_running.is_set():
                break




    def check_ready(self):
        # Put preflight error checking here as needed.
        # Return True if good to go, for now we'll hardcode it
        return True

    def pin_cb(self,pin):
        # Call the appropriate trigger
        # TODO make sure we are handling the locks after a pin is registered.
        try:
            if not callable(self.triggers[self.licks_inv[pin]]):
                self.handle_triggers(self.triggers[self.licks_inv[pin]])
            else:
                self.triggers[self.licks_inv[pin]]()

            self.triggers[self.licks_inv[pin]] = None # clear triggers so no double taps
            self.run(self.licks_inv[pin])
        except:
            # If the port doesn't have a trigger assigned to it...
            pass

    def bail_trial(self,sound=None):
        # got a timeout, or something that made us reset the trial
        if sound:
            sound()
        self.data.update({'bailed':1})
        self.subject.save_trial(self.data)
        self.data = dict()
        self.triggers = dict()
        self.timers = dict()
        self.subject.task.reset_stages() # TODO: Inform folks they need this method in their task
        self.run()



    def terminal_interpreter(self):
        #an arg in needs to be the command sent by the network
        #this is the callback for the RPi.GPIO interrupt that handles whatever message is sent
        pass

    def wait(self):
        #after init, wait for connection from the terminal
        #set up a TCP interrupt with RPi.GPIO
        pass

    def network_sync(self):
        # If the terminal requests it, we resync
        pass

    def rename_pilot(self):
        # If the terminal renames us, change in prefs
        pass

class Pyo_Process(multiprocessing.Process):
    def __init__(self, channels=2):
        super(Pyo_Process, self).__init__()
        self.channels = channels
        self.daemon = False
        self.kill_event = multiprocessing.Event()
        self.server = None

    def run(self):
        self.start_server()
        #self.keep_alive_thread = threading.Thread(target=self.keep_alive)
        #self.keep_alive_thread.start()
        #self.keep_alive_thread.join()
        while not self.kill_event.is_set():
            time.sleep(1)

        self.server.stop()
        print('pyo server process has been killed')


    def start_server(self):
        self.server = pyo.Server(audio='jack', nchnls=self.channels, duplex=0)
        self.server.setJackAuto(False, True)
        self.server.boot()
        self.server.start()
        # keep alive
        #threading.Timer(1, self.keep_alive).start()
        #self.live_thread = threading.Thread(target=self.keep_alive)
        #self.live_thread.start()

        #while not self.kill:
        #    time.sleep(1)

    def keep_alive(self):
        while not self.kill_event.is_set():
            time.sleep(1)

    def kill(self):
        self.kill_event.set()






if __name__ == '__main__':
    # Parse arguments - this should have been called with a .json prefs file passed
    # We'll try to look in the default location first
    parser = argparse.ArgumentParser(description="Run an RPilot")
    parser.add_argument('-f', '--prefs', help="Location of .json prefs file (created during setup_terminal.py)")
    args = parser.parse_args()

    if not args.prefs:
        prefs_file = '/usr/rpilot/prefs.json'

        if not os.path.exists(prefs_file):
            raise Exception("No Prefs file passed, and file not in default location")

        raise Warning('No prefs file passed, loaded from default location. Should pass explicitly with -p')

    else:
        prefs_file = args.prefs

    with open(prefs_file) as prefs_file_open:
        prefs = json.load(prefs_file_open)

    a = RPilot(prefs)








