Search.setIndex({docnames:["autopilot.core","autopilot.core.gui","autopilot.core.hardware","autopilot.core.networking","autopilot.core.pilot","autopilot.core.plots","autopilot.core.subject","autopilot.core.terminal","autopilot.core.utils","autopilot.prefs","autopilot.setup","autopilot.setup.setup_pilot","autopilot.setup.setup_scale","autopilot.setup.setup_terminal","autopilot.stim","autopilot.stim.managers","autopilot.stim.sound","autopilot.stim.sound.jackclient","autopilot.stim.sound.pyoserver","autopilot.stim.sound.sounds","autopilot.tasks","autopilot.tasks.free_water","autopilot.tasks.graduation","autopilot.tasks.nafc","autopilot.tasks.task","autopilot.viz","autopilot.viz.trial_viewer","guide.hardware","guide.installation","guide.installation.pilot","guide.installation.terminal","guide.overview","guide.task","guide.training","index","todo"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:54},filenames:["autopilot.core.rst","autopilot.core.gui.rst","autopilot.core.hardware.rst","autopilot.core.networking.rst","autopilot.core.pilot.rst","autopilot.core.plots.rst","autopilot.core.subject.rst","autopilot.core.terminal.rst","autopilot.core.utils.rst","autopilot.prefs.rst","autopilot.setup.rst","autopilot.setup.setup_pilot.rst","autopilot.setup.setup_scale.rst","autopilot.setup.setup_terminal.rst","autopilot.stim.rst","autopilot.stim.managers.rst","autopilot.stim.sound.rst","autopilot.stim.sound.jackclient.rst","autopilot.stim.sound.pyoserver.rst","autopilot.stim.sound.sounds.rst","autopilot.tasks.rst","autopilot.tasks.free_water.rst","autopilot.tasks.graduation.rst","autopilot.tasks.nafc.rst","autopilot.tasks.task.rst","autopilot.viz.rst","autopilot.viz.trial_viewer.rst","guide.hardware.rst","guide.installation.rst","guide.installation.pilot.rst","guide.installation.terminal.rst","guide.overview.rst","guide.task.rst","guide.training.rst","index.rst","todo.rst"],objects:{"autopilot.core":{hardware:[2,0,0,"-"],networking:[3,0,0,"-"],utils:[8,0,0,"-"]},"autopilot.core.hardware":{BCM_TO_BOARD:[2,1,1,""],BOARD_TO_BCM:[2,1,1,""],Beambreak:[2,2,1,""],Digital_Out:[2,2,1,""],Flag:[2,2,1,""],Hardware:[2,2,1,""],LED_RGB:[2,2,1,""],Pull:[2,2,1,""],Scale:[2,2,1,""],Solenoid:[2,2,1,""],Wheel:[2,2,1,""]},"autopilot.core.hardware.Beambreak":{assign_cb:[2,3,1,""],clear_cb:[2,3,1,""],input:[2,4,1,""],release:[2,3,1,""],trigger:[2,4,1,""],type:[2,4,1,""]},"autopilot.core.hardware.Digital_Out":{output:[2,4,1,""],pulse:[2,3,1,""],release:[2,3,1,""],type:[2,4,1,""]},"autopilot.core.hardware.Flag":{trigger:[2,4,1,""]},"autopilot.core.hardware.Hardware":{assign_cb:[2,3,1,""],get_name:[2,3,1,""],input:[2,4,1,""],output:[2,4,1,""],pin:[2,4,1,""],release:[2,3,1,""],trigger:[2,4,1,""],type:[2,4,1,""]},"autopilot.core.hardware.LED_RGB":{color_series:[2,3,1,""],flash:[2,3,1,""],output:[2,4,1,""],release:[2,3,1,""],set_color:[2,3,1,""],threaded_color_series:[2,3,1,""],type:[2,4,1,""]},"autopilot.core.hardware.Pull":{release:[2,3,1,""]},"autopilot.core.hardware.Scale":{MODEL:[2,4,1,""]},"autopilot.core.hardware.Solenoid":{dur_from_vol:[2,3,1,""],mode:[2,4,1,""],open:[2,3,1,""],output:[2,4,1,""],release:[2,3,1,""],type:[2,4,1,""]},"autopilot.core.hardware.Wheel":{MODES:[2,4,1,""],MOVE_DTYPE:[2,4,1,""],THRESH_TYPES:[2,4,1,""],assign_cb:[2,3,1,""],calc_move:[2,3,1,""],check_thresh:[2,3,1,""],input:[2,4,1,""],l_clear:[2,3,1,""],l_measure:[2,3,1,""],l_stop:[2,3,1,""],release:[2,3,1,""],start:[2,3,1,""],thresh_trig:[2,3,1,""],trigger:[2,4,1,""],type:[2,4,1,""]},"autopilot.core.networking":{Message:[3,2,1,""],Net_Node:[3,2,1,""],Pilot_Station:[3,2,1,""],Station:[3,2,1,""],Terminal_Station:[3,2,1,""]},"autopilot.core.networking.Message":{__contains__:[3,3,1,""],__delitem__:[3,3,1,""],__getitem__:[3,3,1,""],__setitem__:[3,3,1,""],flags:[3,4,1,""],get_timestamp:[3,3,1,""],id:[3,4,1,""],key:[3,4,1,""],sender:[3,4,1,""],serialize:[3,3,1,""],timestamp:[3,4,1,""],to:[3,4,1,""],ttl:[3,4,1,""],validate:[3,3,1,""],value:[3,4,1,""]},"autopilot.core.networking.Net_Node":{context:[3,4,1,""],do_logging:[3,4,1,""],handle_listen:[3,3,1,""],id:[3,4,1,""],init_logging:[3,3,1,""],init_networking:[3,3,1,""],l_confirm:[3,3,1,""],listens:[3,4,1,""],log_formatter:[3,4,1,""],log_handler:[3,4,1,""],logger:[3,4,1,""],loop:[3,4,1,""],loop_thread:[3,4,1,""],outbox:[3,4,1,""],port:[3,4,1,""],prepare_message:[3,3,1,""],repeat:[3,3,1,""],repeat_interval:[3,4,1,""],send:[3,3,1,""],sock:[3,4,1,""],threaded_loop:[3,3,1,""],timers:[3,4,1,""],upstream:[3,4,1,""]},"autopilot.core.networking.Pilot_Station":{l_change:[3,3,1,""],l_child:[3,3,1,""],l_cohere:[3,3,1,""],l_continuous:[3,3,1,""],l_file:[3,3,1,""],l_forward:[3,3,1,""],l_noop:[3,3,1,""],l_ping:[3,3,1,""],l_start:[3,3,1,""],l_state:[3,3,1,""],l_stop:[3,3,1,""]},"autopilot.core.networking.Station":{child:[3,4,1,""],ctx:[3,4,1,""],do_logging:[3,4,1,""],get_ip:[3,3,1,""],handle_listen:[3,3,1,""],id:[3,4,1,""],init_logging:[3,3,1,""],ip:[3,4,1,""],l_confirm:[3,3,1,""],listen_port:[3,4,1,""],listener:[3,4,1,""],listens:[3,4,1,""],log_formatter:[3,4,1,""],log_handler:[3,4,1,""],logger:[3,4,1,""],loop:[3,4,1,""],prepare_message:[3,3,1,""],push:[3,3,1,""],push_id:[3,4,1,""],push_ip:[3,4,1,""],push_outbox:[3,4,1,""],push_port:[3,4,1,""],pusher:[3,4,1,""],repeat:[3,3,1,""],repeat_interval:[3,4,1,""],routes:[3,4,1,""],run:[3,3,1,""],send:[3,3,1,""],send_outbox:[3,4,1,""],senders:[3,4,1,""],set_logging:[3,3,1,""],timers:[3,4,1,""]},"autopilot.core.networking.Terminal_Station":{l_change:[3,3,1,""],l_data:[3,3,1,""],l_file:[3,3,1,""],l_handshake:[3,3,1,""],l_init:[3,3,1,""],l_kill:[3,3,1,""],l_ping:[3,3,1,""],l_state:[3,3,1,""],l_stopall:[3,3,1,""]},"autopilot.core.utils":{InvokeEvent:[8,2,1,""],Invoker:[8,2,1,""],Param:[8,2,1,""],ReturnThread:[8,2,1,""],list_subjects:[8,5,1,""],load_pilotdb:[8,5,1,""]},"autopilot.core.utils.InvokeEvent":{EVENT_TYPE:[8,4,1,""]},"autopilot.core.utils.Invoker":{event:[8,3,1,""],staticMetaObject:[8,4,1,""]},"autopilot.core.utils.Param":{__contains__:[8,3,1,""],__delitem__:[8,3,1,""],__getitem__:[8,3,1,""],__setitem__:[8,3,1,""],tag:[8,4,1,""],type:[8,4,1,""],types:[8,4,1,""]},"autopilot.core.utils.ReturnThread":{join:[8,3,1,""],run:[8,3,1,""]},"autopilot.setup":{setup_terminal:[13,0,0,"-"]},"autopilot.setup.setup_terminal":{SetupApp:[13,2,1,""],TerminalSetupForm:[13,2,1,""],make_dir:[13,5,1,""],unfold_values:[13,5,1,""]},"autopilot.setup.setup_terminal.SetupApp":{onStart:[13,3,1,""]},"autopilot.setup.setup_terminal.TerminalSetupForm":{afterEditing:[13,3,1,""],create:[13,3,1,""]},"autopilot.stim":{managers:[15,0,0,"-"]},"autopilot.stim.managers":{Bias_Correction:[15,2,1,""],Proportional:[15,2,1,""],Stim_Manager:[15,2,1,""],init_manager:[15,5,1,""]},"autopilot.stim.managers.Bias_Correction":{next_bias:[15,3,1,""],thresholded_linear:[15,3,1,""],update:[15,3,1,""]},"autopilot.stim.managers.Proportional":{init_sounds:[15,3,1,""],next_stim:[15,3,1,""],set_triggers:[15,3,1,""],store_groups:[15,3,1,""]},"autopilot.stim.managers.Stim_Manager":{compute_correction:[15,3,1,""],do_bias:[15,3,1,""],do_correction:[15,3,1,""],end:[15,3,1,""],init_sounds:[15,3,1,""],make_punishment:[15,3,1,""],next_stim:[15,3,1,""],play_punishment:[15,3,1,""],set_triggers:[15,3,1,""],update:[15,3,1,""]},"autopilot.stim.sound":{jackclient:[17,0,0,"-"],pyoserver:[18,0,0,"-"],sounds:[19,0,0,"-"]},"autopilot.stim.sound.jackclient":{BLOCKSIZE:[17,1,1,""],FS:[17,1,1,""],JackClient:[17,2,1,""],PLAY:[17,1,1,""],QUEUE:[17,1,1,""],Q_LOCK:[17,1,1,""],SERVER:[17,1,1,""],STOP:[17,1,1,""]},"autopilot.stim.sound.jackclient.JackClient":{boot_server:[17,3,1,""],process:[17,3,1,""],quit:[17,3,1,""],run:[17,3,1,""]},"autopilot.stim.sound.pyoserver":{pyo_server:[18,5,1,""]},"autopilot.stim.sound.sounds":{File:[19,2,1,""],Jack_Sound:[19,2,1,""],Noise:[19,2,1,""],Pyo_Sound:[19,2,1,""],SOUND_LIST:[19,1,1,""],STRING_PARAMS:[19,1,1,""],Speech:[19,2,1,""],Tone:[19,2,1,""],int_to_float:[19,5,1,""]},"autopilot.stim.sound.sounds.File":{PARAMS:[19,4,1,""],init_sound:[19,3,1,""],type:[19,4,1,""]},"autopilot.stim.sound.sounds.Jack_Sound":{PARAMS:[19,4,1,""],buffer:[19,3,1,""],chunk:[19,3,1,""],end:[19,3,1,""],get_nsamples:[19,3,1,""],play:[19,3,1,""],server_type:[19,4,1,""],set_trigger:[19,3,1,""],type:[19,4,1,""],wait_trigger:[19,3,1,""]},"autopilot.stim.sound.sounds.Noise":{PARAMS:[19,4,1,""],init_sound:[19,3,1,""],type:[19,4,1,""]},"autopilot.stim.sound.sounds.Pyo_Sound":{play:[19,3,1,""],set_trigger:[19,3,1,""],table_wrap:[19,3,1,""]},"autopilot.stim.sound.sounds.Speech":{PARAMS:[19,4,1,""],type:[19,4,1,""]},"autopilot.stim.sound.sounds.Tone":{PARAMS:[19,4,1,""],init_sound:[19,3,1,""],type:[19,4,1,""]},"autopilot.tasks":{free_water:[21,0,0,"-"],graduation:[22,0,0,"-"],task:[24,0,0,"-"]},"autopilot.tasks.free_water":{Free_Water:[21,2,1,""]},"autopilot.tasks.free_water.Free_Water":{DATA:[21,4,1,""],HARDWARE:[21,4,1,""],PARAMS:[21,4,1,""],PLOT:[21,4,1,""],STAGE_NAMES:[21,4,1,""],TrialData:[21,2,1,""],end:[21,3,1,""],response:[21,3,1,""],water:[21,3,1,""]},"autopilot.tasks.free_water.Free_Water.TrialData":{columns:[21,4,1,""]},"autopilot.tasks.graduation":{Accuracy:[22,2,1,""],GRAD_LIST:[22,1,1,""],Graduation:[22,2,1,""],NTrials:[22,2,1,""]},"autopilot.tasks.graduation.Accuracy":{COLS:[22,4,1,""],PARAMS:[22,4,1,""],update:[22,3,1,""]},"autopilot.tasks.graduation.Graduation":{COLS:[22,4,1,""],PARAMS:[22,4,1,""],update:[22,3,1,""]},"autopilot.tasks.graduation.NTrials":{PARAMS:[22,4,1,""],update:[22,3,1,""]},"autopilot.tasks.task":{Task:[24,2,1,""]},"autopilot.tasks.task.Task":{HARDWARE:[24,4,1,""],PARAMS:[24,4,1,""],PLOT:[24,4,1,""],STAGE_NAMES:[24,4,1,""],TrialData:[24,4,1,""],end:[24,3,1,""],flash_leds:[24,3,1,""],handle_trigger:[24,3,1,""],init_hardware:[24,3,1,""],set_leds:[24,3,1,""],set_reward:[24,3,1,""]},autopilot:{core:[0,0,0,"-"],viz:[25,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","data","Python data"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:data","2":"py:class","3":"py:method","4":"py:attribute","5":"py:function"},terms:{"2000m":29,"20m":33,"2afc":33,"8mb":29,"boolean":32,"break":[3,33],"class":[2,3,8,11,13,15,17,19,21,22,24,29,33,34,35],"default":[2,3,11,13,17,29,32,33],"final":[32,33,35],"float":[2,8,15,19,22,24,32],"function":[1,2,3,4,5,6,7,8,9,11,13,15,18,19,20,23,24,26,29,32,35],"import":[9,32],"int":[2,3,8,15,17,19,21,22,24,32],"long":2,"new":[3,15,32,33],"return":[2,3,8,9,15,18,19,21,22,24,32],"short":32,"static":29,"super":32,"switch":[28,33],"true":[2,3,15,18,22,24,32,33],"try":[3,8,32],"var":[32,33],"while":[29,32],Adding:33,And:[9,29,32],Are:[2,15,29],For:[2,15,33,34],NOT:[9,17],Not:[2,3,8,12,15],One:15,Pis:[33,34],That:33,The:[2,3,8,11,15,17,19,21,29,30,33],Then:[3,32],There:[3,32],These:[3,19,28,29,32,33],Use:[18,19,24,29,30],Used:[3,32],Uses:2,Was:15,Yes:33,__contains__:[3,8],__del__:2,__delitem__:[3,8],__dict__:3,__getitem__:[3,8],__init__:[2,32],__setitem__:[3,8],_event:3,_mous:32,_record:32,abbrevi:32,abl:2,about:19,abov:[2,15,17,22,29,32,33],accept:[2,8],access:[17,29,32,33],accord:[3,15],accordingli:3,accur:[2,32],accuraci:[22,33],across:[29,32,35],activ:[2,8,17,32],actual:33,add:[2,9,15,29,32,33],added:[3,19,33],adding:[2,33],addit:[2,29],addition:32,address:[3,11,29,32,33],addus:29,adir:[11,13],admin:29,advanc:[29,32],advis:33,after:[2,3,8,9,17,19,22,29,30,32,33],afteredit:[11,13],afterward:21,agent:[9,28,30],alert:[3,21],align:32,aliv:[2,3,8,17],all:[2,3,13,15,19,21,22,24,28,29,30,32,33],allcap:9,alloc:29,allow:[21,29,32,33,35],allow_repeat:21,along:[3,19,32],alongsid:24,alreadi:[3,29],alsa:29,alsafil:29,also:[2,8,29,32],altern:33,alwai:[2,3,8,19,29],amount:[17,30],amp:[2,29],amplifi:29,amplitud:[19,33],angl:32,ani:[2,3,8,9,11,13,17,19,21,22,24,28,29,32,33,34],anim:33,anod:2,anoth:[2,3,32],answer:[15,33],anyth:2,api:34,aplai:29,apnpsapplicationmanag:[11,13],appear:33,append:30,appropri:[3,9,32,33],apt:29,arab:29,arbitrari:15,archiv:30,arena:33,arg:[3,8,11,13,21,32],argument:[2,8,21,32],arm:29,around:[2,32],arrai:[2,17,19,32],asctim:3,ask:[3,11,32],asound:29,assign:[24,32,33],assign_cb:2,assum:32,astunpars:29,astyp:19,attempt:[3,8,33],attribut:[2,3,8,19,21,22,24],attributeerror:32,audibl:29,audio:[2,11,17,18,19,28,35],audioserv:[9,11,19],autom:30,automat:33,autopilot:[2,3,8,9,11,13,15,17,18,19,21,22,24,28,29,30,32,33,35],avail:[29,32],avoid:[19,29],awar:33,axi:32,b64:3,b64encod:3,back:[2,3,24,32],backend:29,bad:[2,32],bail:[24,32],bar:[24,32],base64:3,base:[2,3,8,11,13,15,17,19,21,22,24,29,30,33],base_dir:[29,30],basedir:[11,13,33],bash:2,basic:[15,29,30,31,32,33],bcm:[2,24],bcm_number:2,bcm_to_board:2,bdist_wheel:30,beam:33,beambreak:[2,11,21,24,29,32],becaus:[2,32,33],been:[2,3,8,19,28,29,30,32],befor:[2,8,9,17,29,32],begin:[32,33],behav:32,behavior:31,behind:3,being:[2,3,32],below:[2,30,32,33],better:[19,29],between:[2,3,15,21,22,28,29,32],beyond:29,bia:[15,32],bias:15,bias_correct:15,bias_mod:[32,33],bias_threshold:32,bidi:29,binari:[11,30],bind:29,biograph:33,bit:[19,32],blank:[3,32],blink:2,block:[2,8,32],blocksiz:[17,19],blue:[2,32],bluealsa:29,bluetooth:29,board:[2,11],board_to_bcm:2,bodi:3,bool:[2,3,8,15,18,19,21,22,24,32],boolcol:32,boot:[11,17,18,24,29],boot_serv:17,both:[29,30,32],bother:19,bound:3,brew:30,bridg:2,bring:2,broadcom:2,buffer:[17,19,29,32],build:[29,30,32,33],built:15,button:33,cach:[17,32],calc_mov:2,calcul:[2,15,32],calibr:[2,9,19,30],calibrate_port:2,call:[2,3,8,11,13,15,17,19,24,28,29,32,33],callabl:[2,8,15,19,21,32],callback:[2,15,24,32],callback_fn:2,can:[2,3,8,15,17,19,29,30,32,33],cancel:[2,32],captur:32,card:29,care:[2,29],carri:21,categori:33,cathod:2,caus:[8,17,29],ceil:19,center:[32,33],certain:32,cffi:29,cfg:29,challeng:33,chanc:15,chance_bar:[24,32],chance_level:32,chang:[2,3,19,29,32,33,35],change_to_blu:32,channel:[11,17,29],charact:32,check:[2,3,29,32],check_thresh:[2,32],checkbox:32,child:[3,29],childid:32,children:[3,32],children_list:32,chip:2,choic:[15,33],choos:[15,29,32],chunk:19,circular:32,cleanup:2,clear:[2,17,19,32],clear_cb:2,click:33,client:[2,17,19,29],clietn:19,clock:29,clone:[29,30],close:33,cmake:29,cmake_cmd:30,code:32,coffe:30,coher:8,col:[2,22,32],collect:[15,24,32,33],color:[2,11,24,29,32],color_dict:24,color_seri:2,column:[19,21,22,32,33],com:[2,8,29,30],combin:19,come:[19,32,33],command:[11,13,29,33],comment:[29,30],commit:9,common:[2,33],commonli:32,commun:3,compil:[28,29],compile_guid:29,complet:[19,24,32],complex:[3,32],comput:[2,3,15,32],compute_calibr:9,compute_correct:15,concept:32,conf:29,config:[29,35],configobj:29,configur:[11,29,30,32,33,35],confin:32,confirm:3,confus:34,confusingli:29,connect:[2,3,11,17,29,32],consid:22,consist:33,conson:19,construct:32,constructor:8,consum:33,contain:[3,21],context:3,continu:[2,15,24,32,35],continuousdata:32,contribut:32,control:[11,29,30,32,33,35],conveni:2,convert:[2,19],cool_new_step:33,copi:[3,29],core:[2,3,8,21,29,32,33,34],correct:[15,21,22,24,29,32,33],correction_pct:[15,32],correction_tri:[15,32],correctli:33,correspond:[22,29,33],count:[3,21,22,32],counter:[3,22],cpu:29,cpufreq:29,creat:[2,3,11,13,19,28,29,30,32,35],creation:3,credenti:29,credit:29,criteria:[22,33],critic:29,cross:32,ctl:29,ctrl:29,ctx:3,cup:30,current:[2,3,8,9,11,15,19,21,28,29,32,33],current_stag:32,current_tri:[21,22,32],custom:[19,29],cycl:[21,32],cycle_widget:11,dac:29,dacplu:29,dacplusndtoverlai:29,daemon:[2,3,32,33],dalsa:[11,29],dalternative_qt_include_dir:30,data:[2,3,9,13,17,19,21,22,24,29,30,33,35],datadir:13,datetim:32,dc_timestamp:[24,32],dcmake_cxx_flag:30,deadlock:8,dealer:3,debug:[18,30,32],decid:[8,15],decod:3,decreas:29,decrement:3,def:32,defin:[2,3,11,19,22,24,32],definit:31,delai:32,delayed_set:32,delin:32,deliv:32,deliveri:[2,32],demand:[2,29],demo:30,demonstr:32,denot:32,dep:29,depend:[2,15,19,29,32,35],deprec:29,depth:[29,32],dequ:15,deriv:[11,13],describ:[2,15,32,33],descript:[3,21,24,32],descriptor:32,design:[2,32,34],desir:2,detail:32,detect:33,determin:[3,17],dev:29,develop:[2,29,30,32],devic:[2,3,29,32],dflt:21,dhw:[11,29],dialog:33,dict:[2,3,8,9,11,13,15,21,24,32],dictionari:[3,8,9,15,21,24,29,32,33],did:22,die:3,differ:[3,15,22,28,29,30,32],digi_out:[2,32],digit:[2,12,29],digital_out:[2,32],dir:2,direct:[2,15,29],directli:[3,17,29,32],directori:[9,11,13,29,30,33],disabl:[2,29,30,33],discourag:[18,19],discret:2,discrim_plai:32,discrimin:33,discuss:32,disk2:29,disk:[29,32],diskutil:29,dispens:[21,29],displai:33,dist:[2,30,32],distanc:[2,32],distractor:[15,32],distribut:3,distutil:29,do_bia:[15,32],do_correct:[15,32],do_log:3,do_return:9,do_trigg:32,doc:[2,9,11,29],document:[32,34],doe:[3,28,29,30,32,33],doesn:[11,13,30,32,33],doing:[15,19,22],don:[2,3,29,32],doubl:3,down:[2,11,21,32],download:[29,30],dpkg:29,draft:15,draw:[24,32],draw_line_at:13,drawn:32,drift:32,driver:29,drop:3,dropdown:35,dropout:[18,19],dtoverlai:29,dtparam:29,due:[18,19],dump:[17,19,29],dur_from_vol:2,durat:[2,15,19,21,24,32,33],dure:[2,15,24],each:[2,3,11,17,19,24,28,30,32,33],earli:32,earlier:33,easier:[2,28,30],echo:29,edit:[29,33],effect:[17,32],eft:[32,33],egregi:32,either:[2,3,8,29,32,33],elaps:32,element:32,els:[19,22,30,32],elsewher:19,empti:17,enabl:[29,33],encod:3,end:[2,15,17,19,21,24,32,33],end_thread:2,endless:32,enforc:17,enorm:30,ensur:32,enter:32,entir:29,entri:[3,32,33],environ:28,equal:2,error:[8,34],esprima:29,essenti:[28,29],etc:[2,3,29,30,32,33,35],even:2,event:[2,3,8,17,19,21,24,32],event_typ:8,everi:[2,3,33],everyon:3,everyth:[24,28],evil:32,evok:8,exampl:[2,9,19,29,30,32,33],except:[8,32,33],exist:[3,11,13,32,33],exit:[2,29,35],expect:32,experi:[2,29,31,34],experiment:29,explain:32,explic:33,explicitli:[2,32],extend:[29,32],extens:32,extern:3,extract:[32,33],extran:19,face:[3,30],fakekm:29,fall:32,fals:[2,3,8,9,11,15,18,21,22,24,32,33],far:2,faster:[2,29],fastest:29,favor:15,fbdev:29,fdisk:29,featur:2,few:[2,29,30,32,33],field:[2,3,33],figur:31,file:[3,9,11,19,28,29,30,32,33],file_block:3,file_db:8,file_nam:8,filehandl:3,filesystem:29,fill:[17,33],filter:19,find:3,finish:32,first:[15,17,21,32,33],fit:32,fix:[2,29,32],fixat:32,flag:[2,3,29,30,32],flash:[2,24,32],flash_block:2,flash_l:[24,32],flexibl:[2,29],float32col:32,float64col:32,fmform:[11,13],follow:[11,13,15,29,30,32],forc:33,forev:29,form:11,format:[3,15,32,33],formatt:3,formdefault:11,forward:3,found:[30,33],fraction:8,frame:[11,17,29],framework:[30,32,34],free:33,free_wat:20,freeli:33,freetyp:29,freq:32,frequenc:[2,15,19,32,33],from:[2,3,8,9,11,13,15,17,19,21,22,29,30,32,33],further:[2,3,32],futur:[3,8,28,29,32,33],gabor:32,gather:32,gave:32,gener:[2,3,9,15,18,19,24,32,33],genotyp:33,get:[2,9,22,24,29,30,32],get_ip:3,get_nam:2,get_nsampl:19,get_timestamp:3,getattr:32,gevent:29,git:[9,13,29,30],git_vers:9,github:[29,30],gitlab:29,gitpython:29,give:[3,15,29,32,33],given:[2,3,8,15,19,22,29,32],glfw:29,glitch:29,global:9,glossari:31,gnueabihf:29,going:32,gonna:32,gonogo:32,good:[29,32],got:29,govern:28,governor:29,gpio:[2,11,24,29,32],gpu:29,grab:29,grad_list:22,graduat:[20,33,35],graphic:[29,32],grate:32,green:[2,32],group:[8,15,29],group_nam:15,guarante:2,guess:2,gui:[0,30,32,35],guid:34,had:32,half:19,handl:[2,3,17,32,35],handle_listen:3,handle_trigg:[2,24,32],handler:3,handshak:33,happen:8,hard:2,hardcod:[9,32,33],hardwar:[0,3,11,21,24,29,33,34],hardwareform:11,has:[2,3,8,15,19,21,29,30,32,33],hash:9,have:[2,3,15,19,21,22,28,29,30,32,33,35],haven:3,hciuart:29,hdf5:[30,33],header:29,headers_dir:30,headless:29,height:32,held:19,help:[11,29],here:[2,9,11,13,22,29,31,32,33],hifi:29,hifiberri:[2,29],high:[2,24,29,33],higher:29,highli:32,histori:[15,32,33],hold:[3,9],hole:33,horizont:32,how:[15,19,24,29,32,33],howev:[2,33],html:29,http:[8,29,30],human:[19,32],humbl:19,i2c1:29,i2c:29,i2c_arm:29,i2s:29,i32:21,ideal:29,ident:[3,29,32,33],identifi:[3,29,32],ight:[32,33],ignor:[22,29],imag:[29,30],img:29,immatur:32,immedi:32,implement:[2,3,8,12,15,19,22,32],implicitli:33,improv:28,includ:[3,29,30,32,33],incom:3,incomplet:34,incorpor:[15,28],incorrect:[15,22],incorrectli:15,increas:[29,30],indefinit:21,independ:[2,3],index:[3,19,34],indic:29,individu:32,info:[30,32],inform:[3,33],infrastructur:32,ing:3,inherit:[2,19,32],init:[2,3,9,29,32],init_hardwar:[24,32],init_log:3,init_manag:[15,32],init_network:3,init_sound:[15,19],initi:[3,9,15,17,21,29,33],initialis:[11,13],input:[2,3,17,29,30,32],insid:2,instal:[33,34],instanc:[3,29,32],instanti:[2,3,15,19,24,32],instead:[2,3,11,32],instruct:28,int32col:[21,24,32],int_to_float:19,integ:[19,32],integrate_dur:[2,32],intend:3,intens:2,intention:19,interact:29,interfac:[17,29],intern:[2,3,15,29,32],internet:33,interv:32,introduc:33,invers:2,invok:[8,28],invokeev:8,ioloop:[3,32],ipv4:3,is_set:32,isal:8,isdescript:[21,24,32],isequ:30,isoformat:[21,32],issu:[18,19,29,30,34],item:32,items:21,iter:[15,21,24,32],itertool:[3,21,22,32],its:[2,3,8,11,13,15,28,29,32,33],itself:17,j10:30,jack2:29,jack:[11,17,19,29],jack_client:[17,19],jack_sound:19,jackaudio:29,jackclient:[14,16,19,29],jackd:[11,17,29],jackdstr:11,joan2937:29,join:[3,8,13],jonni:19,journalctl:33,json:[3,9,13,28,29,32,33],json_trick:29,juic:29,just:[3,15,17,21,29,32,33],keep:[3,15,29,32],kei:[3,8,19,29,32,33],kept:[2,3,17],keyboard:29,keyword:[8,11,13],kick:29,know:[3,32,33],known:[2,3],kwarg:[3,8,15,19,21,22,32],l_chang:3,l_child:[3,32],l_clear:[2,32],l_coher:3,l_confirm:3,l_continu:3,l_data:3,l_file:3,l_forward:3,l_handshak:3,l_init:3,l_kill:3,l_measur:[2,32],l_noop:3,l_ping:3,l_start:3,l_state:3,l_stop:[2,3,32],l_stopal:3,lambda:32,larg:[2,3],laser:32,last:15,last_stim:15,last_was_correct:15,latenc:29,latest:29,launch:[28,29,30,33],launch_pilot:29,launch_termin:30,layer:32,ldconfig:29,learn:33,learnopencv:29,least:[3,19],leav:[29,32,33],led:[2,11,21,24,29,32,33],led_rgb:[2,11,21,29,32],left:[2,15,19,29,33],leftmost:33,length:[2,32],less:[15,29,32],let:[29,32,33],letter:24,level:[17,19,24,31],levelnam:3,lib:[29,30],libasound:29,libdir:29,libffi:29,libhdf5:29,liblo:29,libportmidi:29,librari:[29,30],libreadlin:29,libsamplerate0:29,libsndfile1:29,libzmq:[29,30],lick:32,life:29,light:[2,21,24,32],like:[2,3,15,24,28,29,31,32],limit:[29,33],line:[11,13,29,30,32],lineag:[29,32],linear:15,linearli:15,link:[9,29],linux:[28,29],list:[2,3,8,15,19,22,24,29,31,32,33],list_subject:8,listen:[3,13,32],listen_port:3,lite:29,liter:19,literatur:33,littl:[17,32],live:3,load:[8,17,19,29,35],load_pilotdb:8,local:[3,13,29,30],localhost:3,locat:[13,30],lock:[17,19,32],log:[3,13,24,29,33],log_formatt:3,log_handl:3,logdir:[3,13],logger:[3,24],logic:[2,15,29,32],login:29,look:29,loop:3,loop_thread:3,low:[2,24,29,33],lower:29,mac:30,machin:29,maco:[28,29],made:[3,8],mai:[8,33],main:[3,8,24,32],maintain:[2,32],mainten:30,make:[2,11,13,15,28,29,30,32],make_dir:[11,13],make_punish:15,manag:[2,8,14,17,29,32,33,35],mani:[3,8,19,29,34],manpag:[11,29],manual:28,manual_trigg:2,map:[2,11,15,21,22,24,29,32],mark:24,mask:11,match:[3,32],matter:2,max:3,maximum:29,maxus:8,mayb:33,mean:[15,32],measur:[2,32],measure_evt:32,memlock:29,memori:29,menu:[29,33],mere:33,mesa:29,mess:29,messag:[3,8,29,30,32,33],meta:34,metaclass:[2,19,24],meth:2,method:[2,3,8,11,13,15,17,19,21,22,24],mice:32,microsd:29,microsecond:32,might:[3,19],millisecond:32,mind:29,minim:[2,3],minor:30,mirror:9,misalign:32,miscallan:21,mmap:29,mmapndtoverlai:29,mmapndtparam:29,mode:[2,15,29,32],model:2,modifi:15,modul:[9,11,13,15,17,18,19,29,34],monitor:32,more:[2,15,29,31,32],most:32,motiv:34,mount:30,mous:[0,2,32,33],mouse_idx:[2,32],move:[2,22,32,33],move_dtyp:2,movement:[2,32],moviepi:29,msg:3,msg_counter:3,msgpack:29,msgport:[11,13,30,32],much:[2,32,34],muddi:2,multipl:[3,17,32,35],multiprocess:[3,17,19],must:[2,3,8,17,19,30,32],mute:2,n_trial:22,nafc:[20,33],name:[2,3,8,9,11,15,17,19,24,29,30,32,33],nano:29,natur:33,nchannel:[11,17],nctl:29,ncurs:[29,35],ndarrai:[17,19],ndtoverlai:29,necessari:[2,24,29,32],necessarili:3,need:[2,3,11,15,19,22,24,28,29,32,33],neither:29,nest:[11,13],net_nod:[3,32],network:[0,11,29,32],neutral:2,next:[15,24,29,30,32],next_bia:15,next_stim:[15,32],nix:28,node:[3,29,32],nois:[19,32],non:32,none:[2,3,8,9,11,13,15,17,19,21,24,32],noop:32,normal:[8,29,32,33],nosepok:33,note:[2,3,28,29,30,32],noth:[19,32],notic:33,now:[15,17,24,32],nowtim:32,nperiod:29,npsappmanag:[11,13],npyscreen:[11,13,29,30],nsampl:19,ntrial:22,num_stag:21,number:[2,3,8,11,15,17,19,21,22,24,29,32],numer:32,numpi:[9,17,19,29,30,32],nut:2,object:[2,3,8,11,15,19,21,22,24,29,32,33],obsess:2,obviat:29,obvious:29,occur:[8,24],odict:[24,32],off:[2,21,24,29,32],on_recv:3,onboard:29,onc:[3,24,29,32,33],one:[3,15,17,21,29,32,33,34],ongo:32,onli:[2,3,17,24,28,29,32,33],onndtparam:29,onstart:[11,13],opac:[18,19],open:[2,3,21,24,29,32],opencv:29,opengl:[29,30],opensourc:30,oper:[2,8,28,29,30,32,33],opportun:29,optim:30,option:[3,8,28,30,32,33,35],order:[2,3,32,33],ordereddict:24,org:29,organ:15,origin:3,other:[2,3,9,15,19,29,32],otherwis:[2,15,17,19,24,32],our:[2,3,11,13,15,19,29,32,33,34],ourselv:19,out:[8,15,19,29,33],outbox:3,outcom:15,outport:17,output:[2,11,17,29,32],outsid:32,over:[2,11,13,15,21,22,24,29,32],overlai:29,overrid:[2,8,11,13],overrun:29,overview:[31,34],own:[2,3,11,15,28,29,32,33],p16:[11,29],p75:[11,29],packag:[17,29,30],page:34,pair:[3,32],panda:[29,30],panel:33,param:[2,8,9,11,13,19,21,22,24,33],param_1:33,paramet:[2,3,8,9,11,13,15,17,18,19,21,22,24,29,32,33,35],parameter:29,parent:[29,32],parent_pilot:32,parentapp:11,parentid:32,parentip:32,parentport:32,part:28,particular:[2,15,33],pass:[2,3,8,32],passag:32,passwd:29,password:[29,33],past:22,path:[3,9,11,13,19,29],pcm512x:29,pcm:29,pct_correct:33,per:[3,17,32],percent:[15,22],percentag:32,perform:[11,13,28,32,34],period:[3,29],permiss:[11,13],phototransistor:2,physic:2,pi3:29,piec:3,piecem:29,pig:2,pigpio:[2,11,24,29,32],pigpiod:2,pigpiomask:11,pillow:29,pilot:[0,2,3,11,13,21,28,30,32],pilot_db:[8,13,33],pilot_st:[3,32],pilotsetupform:11,pin2:24,pin:[2,11,21,24,29,32],pin_id:24,ping:3,pinout:2,pip:[29,30],pipe:17,place:[2,32],plai:[17,19,29,32,33],plan:30,play_evt:[17,19],play_punish:[15,32],playback:[29,32],pleas:34,plot:[0,3,21,24,33],plot_list:32,plu:33,plug:24,point:[8,21,24,32],poke:[2,11,21,24,29,32,33],polar:2,pool:29,pop:3,popul:[13,22,35],port:[2,3,11,13,15,17,21,24,29,30,32,33],port_id:24,pos:21,posit:2,possibl:32,practic:32,preced:2,precis:[2,32],precompil:30,precomput:32,pref:[2,3,13,17,19,24,28,29,33,34,35],prefdict:9,prefer:[9,29],prefix:32,prefs_fil:9,prei:33,preinstal:28,prepar:[28,32],prepare_messag:3,prerequisit:28,present:[8,15,29,32,33],presetup:28,presetup_pilot:29,presetup_termin:30,press:33,pretti:[30,32],previou:[2,32],previous:29,primarili:2,primit:32,print:33,prior:15,prioriti:29,privileg:29,pro:30,process:[3,17,32],produc:[29,32],product_id:2,program:33,programm:[11,13],programmat:32,progress:34,project:30,prompt:[11,13,29],proport:[15,19,32],protocol:[13,22,31,35],protocol_script:33,protocoldir:13,provid:[2,3,30,32],psychopi:29,psychopy3:29,pud:2,pull:[2,11,17],pull_ud:2,pulldown:11,pullup:11,puls:[2,32],pulse_width:2,punish:[24,32],punish_block:[24,32],punish_dir:24,punish_dur:[32,33],punish_sound:33,punish_stim:[24,32],purpos:[2,32],push:[3,29],push_id:3,push_ip:3,push_outbox:3,push_port:3,pusher:3,pushport:11,put:[22,32],pwm:29,pyglet:29,pyo:[11,18,19,29],pyo_serv:18,pyo_sound:19,pyoaudio:19,pyopengl:29,pyoserv:[14,16],pyparallel:29,pyqtgraph:30,pyseri:29,pysid:[8,28,35],pytabl:32,python2:29,python3:29,python:[2,29,30,34],pyyaml:29,pyzmq:[29,30],q_lock:[17,19],qevent:8,qmake:30,qmetaobject:8,qobject:8,qt4:28,qt5:[30,35],qtcore:8,qtinfo:30,qualit:30,queue:[17,19,32],quit:[17,29],quit_evt:[17,32],rais:[8,29],random:[15,32],randomli:[15,21],randomnumbersandlett:29,rang:[2,32],rare:15,rasbian:28,raspberri:[2,29,32,33,34],raspberrypi:29,raspbian:28,raspi:29,rate:[11,15,17,19,29,32],rather:[3,19,29,32],rdisk:29,read:32,readabl:[19,32],readi:32,realli:29,realtim:29,reason:29,reassign:3,reboot:29,rebuild:35,receiv:[3,29,30,32,33],recent:32,reclass:2,recommend:[29,32],reconfigur:29,record:19,recurs:[11,13],recv:3,red:[2,24,32],redefin:[2,15],reduc:29,redund:32,ref:[32,33],refer:[22,24,32],refrain:32,refresh:33,regardless:2,regimen:33,regist:[17,32,33],rel:[3,19,33],relat:33,releas:[2,19,21,24,30,32],relev:[3,33],reli:32,reliabl:29,remain:33,remov:[30,35],repeat:[3,21],repeat_interv:3,repeatedli:32,replac:[29,30],repo:13,repo_dir:9,repo_directori:29,repodir:13,report:[21,32,33],repositori:[9,30],repres:8,req_reward:[24,32,33],request:[3,24,33],requir:[2,3,11,28,29,30,32,33],resampl:19,rescal:19,resend:3,resent:3,reshap:29,resiz:29,resourc:[2,19,32],respect:8,respond:[3,15,32,33],respons:[15,21,24,29,32],rest:3,restor:2,result:[2,32],retriev:33,returnthread:8,revers:[2,8,24,29,32],reward:[2,21,24,29,32,33,35],reward_manag:33,rfs:[11,29],rgb:[2,29],ride:[11,13],right:[15,17,29,33],rightmost:33,role:28,roll:[24,32],roll_window:[24,32],rollmean:[24,32],root:[11,13],round:32,rout:3,router:[3,11,13],routin:[9,28,29,30,32],row:[22,32],rpi:29,rq_timestamp:[24,32],rsa:[29,33],rtprio:29,rule:15,run:[2,3,8,11,13,17,24,29,30,32],runtim:28,runtimeerror:8,ryanjdillon:9,s26:21,sadon:3,safe:2,same:[3,8,15,29,32],sampl:[11,17,19,29],save:[3,32,33],scale:[2,12],scaling_governor:29,schema:33,scheme:2,scientist:2,scipi:[19,30],scrappi:15,scratch:32,screen:[29,33],screenshot:[32,33],screwi:17,script:[2,11,28],search:34,second:[8,19,32,33],second_group:15,section:[32,33],secur:29,sed:29,see:[2,8,11,28,29,30,32,33,34],segment:[24,32],select:[3,15,33,35],self:[2,15,19,24,30,32],send:[2,3,8,30,32,33],send_outbox:3,sender:3,sensor:[2,32,33],sent:[3,32],separ:[30,32],sequenti:8,seri:[2,32],serial:[3,33],serializ:3,serv:32,server:[11,17,18,19,29],server_typ:19,servic:[2,11,28,29,30],set:[2,3,11,13,15,17,19,24,28,29,30,32,33],set_color:[2,32],set_l:[24,32],set_log:3,set_reward:[24,32],set_trigg:[15,19,32],setattr:32,setup:[2,9,11,12,13,28,32,33,34,35],setup_pilot:[2,10,29,33],setup_scal:10,setup_termin:[10,30],setupapp:[11,13],setupform:[11,13],setverbos:18,sever:32,shade:32,shape:[21,33],shift:32,shot:33,shoudl:29,should:[2,3,8,9,11,13,15,19,22,28,29,32,33,35],shouldn:[17,30,32],show:2,shown:32,shut:[21,32],side:[15,33,35],signal:[2,3,8,21,24,32],similar:32,similarli:15,simpli:[2,32],simplifi:3,sin:19,sinc:[24,29,30,32],sine:19,singl:[2,17,32],size:32,skeleton:2,skew:15,sleep:2,slightli:29,slow:32,slower:29,smoothli:32,snd_rpi_hifiberry_dacplu:29,sndrpihifiberri:[11,29],sock:3,socket:3,soft:29,softwar:2,solenoid:[2,11,21,24,29,32,33],solidifi:32,solut:2,some:[2,3,9,15,19,22,24,29,32],someth:29,song:3,sorri:29,soul:29,sound:[13,14,15,17,18,29,32,33],sound_dict:15,sound_info:32,sound_list:[15,19],sound_stim:15,sound_widget:32,soundcard:29,sounddevic:29,sounddir:[3,13,19],soundfil:29,sourc:[2,3,8,9,11,13,15,17,18,19,21,22,24],spawn:[3,8],speak:29,speaker:[19,29],spec:2,specif:[32,33,35],specifi:[2,3,8,21,24,29,30,32,33],speech:[19,33],speed:[29,30],spill:2,split:[3,19,29,35],splitform:[11,13],ssh:[29,33],stabil:30,stack:33,stackoverflow:8,stage:[2,21,22,24,31,33],stage_block:[21,24,32],stage_list:32,stage_nam:[21,24,32],stamp:2,standalon:30,standard:8,start:[2,3,8,9,11,17,18,21,22,29,30,32,33],startup:29,stash:[2,3,32],state:[2,3,33],staticmetaobject:8,station:[3,29,32],statu:[3,15,29],steadi:[2,32],step:[28,30,33],step_3:33,step_nam:33,still:[8,29,32],stim:[15,17,18,19,32,33,35],stim_end:32,stim_manag:[15,32],stim_start:32,stimuli:[15,29,32,33,34],stimulu:[15,24,32,33,35],stimulus_manag:33,stolen:[9,29],stop:[2,3,17,19,32],stop_evt:[17,19],storag:32,store:[2,9,15,17,24,29,30,32,33],store_group:15,stored_color:2,str:[2,3,9,11,13,17,19],stream:29,strictli:29,string:[11,19,22,29,32,33],string_param:19,stringcol:[21,24,32],strongli:[29,33],structur:[2,15,29,30,32,33,34],stuck:33,stuff:2,sub:3,subclass:[3,8,15,19,32],subconfigur:32,subdevic:29,subdict:24,subdictionari:32,subdir:30,subject:[8,15,21,32,34,35],submillisecond:2,submit:34,subwidget:35,sudo:[29,30],suffici:2,sum:15,sunk:29,support:[17,30,32,33],suppos:33,sure:29,swarm:29,synchron:3,synthesi:29,sys:29,system:[2,3,8,28,29,32,33],systemctl:29,systemd:[2,11,29,30],t2000:[11,29],tab:35,tabl:[3,19,21,24,29,30,32,33],table_wrap:19,tableread:19,tag:[8,21,24,32],take:[2,29,30,32],taken:[2,8,32],target:[8,15,21,24,32],task:[2,3,11,21,22,29,30,31,34],task_list:33,task_typ:[32,33],taught:33,teach:33,tee:29,tell:[3,24,32],tempor:33,term:33,termin:[0,2,3,8,11,13,17,21,28,29,32,33],terminal_ip:33,terminal_st:3,terminalip:11,terminalsetupform:13,test:[28,29,32],than:[2,3,15,19,29,32],thei:[3,15,19,24,28,32,33],them:[2,3,8,15,29,32,33,35],thereof:8,thi:[2,3,8,11,13,15,17,19,22,24,29,30,31,32,33,34],thin:32,thing:[15,28,32],those:29,though:[3,32],thread:[2,3,8,19,21,24,32],threaded_color_seri:2,threaded_loop:3,threadsaf:2,three:[32,33],thresh:[2,15,32],thresh_trig:[2,32],thresh_typ:[2,32],thresh_val:2,threshold:[2,15,22,32,33],thresholded_linear:15,through:[2,3,8,21,29,32,33],thu:[2,28,29,32],thx:8,tick:[24,32],time:[2,3,8,15,17,22,29,30,32,33],timeout:[8,29,32],timer:[3,32],timestamp:[2,3,21,32],todo:29,token:19,told:32,tone1:15,tone1_param:15,tone2:15,tone2_param:15,tone3:15,tone3_param:15,tone4:15,tone4_param:15,tone:[15,19,33],too:[2,29],tool:[29,34],topolog:3,tornado:[3,29,30,32],torrent:29,total:2,trace:33,track:32,train:[2,32,34],transfer:29,transit:2,transmit:32,transpar:32,tree:3,treelik:29,tri:[2,8],trial:[15,21,22,24,32,33],trial_count:[21,32],trial_data:24,trial_end:32,trial_num:[21,24,32],trial_view:25,trialdata:[21,24,32],trig_fn:[15,19],trigger:[2,17,19,21,22,24,32],trigger_fn:2,trigger_ud:2,trio:2,trivial:[2,32],ttl:3,tupl:[2,15],turn:[2,21,24,29,32],two:[2,3,21,28,29,30,32,33],txt:29,type:[2,3,8,9,11,15,17,19,21,22,24,29,32,33,35],typic:[2,3,13,30],ubuntu:28,umount:29,under:[29,32],underrun:29,undocu:[2,19],unfold:[11,13],unfold_valu:[11,13],unfortun:32,unhandl:8,unicod:9,unif:33,unifi:[3,28,32,35],uniqu:[3,29,32],unit:33,univers:[29,33],unless:[3,24],unlik:3,unload:2,unmount:29,unmountdisk:29,unnecessari:19,unpack:32,until:[3,8,15,17,29,32],unus:17,unzip:[29,30],updat:[2,3,15,22,29,32,33],update_dur:32,upgrad:[29,30,35],upon:[3,17],upstream:[3,11,29,32],usb:[2,29,32],use:[2,3,11,13,19,29,30,32],used:[2,3,11,13,17,19,21,29,30,32],user:[11,13,29,30,32,33,34],usernam:29,userpref:29,uses:[2,3,15,29,30,32],using:[2,3,15,19,29,30,32,33],usr:[9,11,13,29,30],usual:[2,30,32],util:[0,29],valid:3,valu:[2,3,8,9,11,13,15,24,32,33,35],value_1:33,valv:2,variabl:[2,3,9,15,17,19,21,22,24,32],vel:2,vel_tot:[2,32],veloc:32,vendor_id:2,verbos:8,veri:[2,29,34],versa:[2,19],version:[3,28,29,32,33],via:[3,15,29,32,33],vice:[2,19],video:28,view:33,virtu:33,visual:[29,32,34,35],vol:[2,24],voltag:[2,32],volum:[2,24,33],vowel:19,waf:29,wai:[2,29],wait:[2,8,17,19,21,32],wait_trigg:19,wall:33,want:[2,3,29,32,35],warn:2,wasn:15,water:[2,21,29,33],wav:[3,19],wave:19,waveform:2,wavfil:19,webkit:30,weigh:2,weight:15,well:[30,32,33],were:32,whacki:30,what:[2,3,15,24,32],whatev:29,wheel:[2,29,30],wheel_0:32,wheel_:32,wheel_child:32,when:[2,3,8,15,17,19,21,24,29,32,33],whenev:32,where:[3,15,32,33],whether:[2,8,15,21,29,32],which:[2,3,11,15,19,28,29,30,32,33,35],white:[19,32],whitepap:[29,32,34],whl:30,whose:[8,32],why:2,widget:[11,13,33],widget_list:11,width:2,window:[15,22,24,33],wintyp:29,within:[3,28,29,32,33],without:[2,3,33],won:[2,32],wonder:2,work:[2,31,32,34],would:[2,3,8],wrap:8,wrapper:[2,8,29,32],write:[29,34],writer:17,written:32,www:29,x11:29,x_vel:32,xinit:29,xorg:29,xserver:29,y_vel:32,yes:[29,33],yet:[12,32],yield:[15,32],you:[2,8,15,29,32,33],young:34,your:[29,33],your_disk:29,zero:[17,21,22],zero_arr:17,zeromq:[3,29,30],zip:30,zmq:[3,30]},titles:["core","gui","hardware","networking","pilot","plots","mouse","terminal","utils","prefs","setup","setup_pilot","setup_scale","setup_terminal","stim","managers","sound","jackclient","pyoserver","sounds","tasks","free_water","graduation","nafc","task","viz","trial_viewer","Writing a Hardware Class","Installation","Pilot Setup","Terminal Setup","Concepts and Terms in Autopilot","Writing a Task","Training a Subject","Autopilot - Distributed Behavior","To-Do"],titleterms:{"class":[27,32],The:32,Using:[32,33],addit:32,agent:32,attribut:32,audio:29,autopilot:[31,34],behavior:34,child:32,compil:30,concept:31,connect:33,core:0,creat:33,creation:33,data:32,debug:33,discrim:32,distribut:[32,34],four:32,free_wat:21,graduat:22,gui:1,hardwar:[2,27,32],improv:29,indic:34,initi:32,instal:[28,29,30],jackclient:17,linux:30,maco:30,manag:15,manual:[29,30,33],method:32,mous:6,nafc:[23,32],network:3,option:29,param:32,parameter:32,perform:29,pilot:[4,29,33],plot:[5,32],pref:[9,32],preinstal:29,prerequisit:30,presetup:30,protocol:33,pyoserv:18,pysid:30,qt4:30,rasbian:29,raspbian:29,reinforc:32,request:32,run:33,script:[29,30],setup:[10,29,30],setup_pilot:11,setup_scal:12,setup_termin:13,smart:32,sound:[16,19],stage:32,step:29,stim:14,subject:33,tabl:34,task:[20,24,32,33],term:31,termin:[7,30],todo:[2,3,15,19,32,33],train:33,trial_view:26,util:8,veri:32,video:29,viz:25,wheel:32,wizard:33,write:[27,32]}})