KAdefine("third_party/javascript-khansrc/live-editor/build/js/live-editor.shared.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../../../javascript/shared-package/i18n.js");
__KA_require("../../../../../javascript/node_modules/jquery/index.js");
__KA_require("../../../../../javascript/node_modules/underscore/index.js");
__KA_require("../../../../../javascript/node_modules/backbone/index.js");
__KA_require("../../../handlebars/handlebars.runtime.js");
__KA_require("../../../../../javascript/shared-package/i18n.js");
__KA_require("../../../../../javascript/shared-package/console.js");
window.AllImages=[{groupName:"animals",images:["birds_rainbow-lorakeets","boxer-getting-tan","boxer-laying-down","boxer-wagging-tongue","butterfly","butterfly_monarch","cat","cheetah","collies","crocodiles","dog_sleeping-puppy","dogs_collies","fox","horse","kangaroos","komodo-dragon","penguins","rabbit","retriever","shark","sleeping-puppy","snake_green-tree-boa","spider"]},{groupName:"avatars",images:["Hopper-jumping.gif","Thumbs.db","aqualine-sapling","aqualine-seed","aqualine-seedling","aqualine-tree","aqualine-ultimate","avatar-team","cs-hopper-cool","cs-hopper-happy","cs-hopper-jumping","cs-ohnoes","cs-winston-baby","cs-winston","duskpin-sapling","duskpin-seed","duskpin-seedling","duskpin-tree","duskpin-ultimate","leaf-blue","leaf-green","leaf-grey","leaf-orange","leaf-red","leaf-yellow","leafers-sapling","leafers-seed","leafers-seedling","leafers-tree","leafers-ultimate","marcimus-orange","marcimus-purple","marcimus-red","marcimus","mr-pants-green","mr-pants-idle.gif","mr-pants-orange","mr-pants-pink","mr-pants-purple","mr-pants-with-hat","mr-pants","mr-pink-green","mr-pink-orange","mr-pink","mystery-1","mystery-2","old-spice-man-blue","old-spice-man","orange-juice-squid","piceratops-sapling","piceratops-seed","piceratops-seedling","piceratops-tree","piceratops-ultimate","primosaur-sapling","primosaur-seed","primosaur-seedling","primosaur-tree","primosaur-ultimate","purple-pi-pink","purple-pi-teal","purple-pi","questionmark","robot_female_1","robot_female_2","robot_female_3","robot_male_1","robot_male_2","robot_male_3","spunky-sam-green","spunky-sam-orange","spunky-sam-red","spunky-sam","starky-sapling","starky-seed","starky-seedling","starky-tree","starky-ultimate"]},{groupName:"creatures",images:["BabyWinston","Hopper-Cool","Hopper-Happy","Hopper-Jumping","OhNoes","Winston"]},{groupName:"cute",images:["Blank","BrownBlock","CharacterBoy","CharacterCatGirl","CharacterHornGirl","CharacterPinkGirl","CharacterPrincessGirl","ChestClosed","ChestLid","ChestOpen","DirtBlock","DoorTallClosed","DoorTallOpen","EnemyBug","GemBlue","GemGreen","GemOrange","GrassBlock","Heart","Key","None","PlainBlock","RampEast","RampNorth","RampSouth","RampWest","Rock","RoofEast","RoofNorth","RoofNorthEast","RoofNorthWest","RoofSouth","RoofSouthEast","RoofSouthWest","RoofWest","Selector","ShadowEast","ShadowNorth","ShadowNorthEast","ShadowNorthWest","ShadowSideWest","ShadowSouth","ShadowSouthEast","ShadowSouthWest","ShadowWest","Star","StoneBlock","StoneBlockTall","TreeShort","TreeTall","TreeUgly","WallBlock","WallBlockTall","WaterBlock","WindowTall","WoodBlock"]},{groupName:"food",images:["bananas","berries","broccoli","brussels-sprouts","cake","chocolates","coffee-beans","croissant","dumplings","fish_grilled-snapper","fruits","grapes","hamburger","ice-cream","mushroom","oysters","pasta","potato-chips","potatoes","shish-kebab","strawberries","sushi","tomatoes"]},{groupName:"insideout",images:["layer0blur0","layer0blur10","layer0blur20","layer0blur40","layer0blur80","layer1blur0","layer1blur10","layer1blur20","layer1blur40","layer1blur80","layer2blur0","layer2blur10","layer2blur20","layer2blur40","layer2blur80","layer3blur0","layer3blur10","layer3blur100","layer3blur20","layer3blur40","layer3blur80","shot1_layer0blur0","shot1_layer0blur10","shot1_layer0blur20","shot1_layer0blur40","shot1_layer0blur80","shot1_layer1blur0","shot1_layer1blur10","shot1_layer1blur20","shot1_layer1blur40","shot1_layer1blur80","shot1_layer2blur0","shot1_layer2blur10","shot1_layer2blur20","shot1_layer2blur40","shot1_layer2blur80","shot1_layer3blur0","shot1_layer3blur10","shot1_layer3blur20","shot1_layer3blur40","shot1_layer3blur80","shot1_layer4blur0","shot1_layer4blur10","shot1_layer4blur20","shot1_layer4blur40","shot1_layer4blur80","shot1_layer5blur0","shot1_layer5blur10","shot1_layer5blur20","shot1_layer5blur40","shot1_layer5blur80","shot2_layer0blur0","shot2_layer0blur10","shot2_layer0blur20","shot2_layer0blur40","shot2_layer0blur80","shot2_layer1blur0","shot2_layer1blur10","shot2_layer1blur20","shot2_layer1blur40","shot2_layer1blur80","shot2_layer2blur0","shot2_layer2blur10","shot2_layer2blur20","shot2_layer2blur40","shot2_layer2blur80","shot2_layer3blur0","shot2_layer3blur10","shot2_layer3blur20","shot2_layer3blur40","shot2_layer3blur80","shot2_layer4blur0","shot2_layer4blur10","shot2_layer4blur20","shot2_layer4blur40","shot2_layer4blur80"]},{groupName:"landscapes",images:["beach-at-dusk","beach-in-hawaii","beach-sunset","beach-waves-at-sunset","beach-waves-at-sunset2","beach-waves-daytime","beach-with-palm-trees","beach","clouds-from-plane","crop-circle","fields-of-grain","fields-of-wine","lake-steam-rising","lake","lava","lotus-garden","mountain_matterhorn","mountains-and-lake","mountains-in-hawaii","mountains-sunset","sand-dunes","waterfall_niagara-falls"]},{groupName:"misc",images:["boxmodel","tim-berners-lee-webpage","tim-berners-lee"]},{groupName:"pixar",images:["army1","army2","bedspread","bopeep","buzz","floorplanes","ham","lamp","luxoball"]},{groupName:"scratchpads",images:["colorpicker_background","colorpicker_hex","colorpicker_hsb_b","colorpicker_hsb_h","colorpicker_hsb_s","colorpicker_indic","colorpicker_overlay","colorpicker_rgb_b","colorpicker_rgb_g","colorpicker_rgb_r","colorpicker_select","colorpicker_submit","cool-critter","error-buddy","happy-critter","jumping-critter","leaf-green","leaf-orange","leaf-red","leaf-yellow","select","simple-button-green-loader.gif","speech-arrow","topic-animation","topic-drawing","topic-programming-basics","topic-user-interaction","ui-icons_808080_256x240"]},{groupName:"seasonal",images:["disco-ball","father-winston","fireworks-2015","fireworks-in-sky","fireworks-over-harbor","fireworks-scattered","gingerbread-family","gingerbread-house","gingerbread-houses","gingerbread-man","hannukah-dreidel","hannukah-menorah","hopper-elfer","hopper-partying","hopper-reindeer","house-with-lights","penguin-with-presents","red-nosed-winston","reindeer-with-hat","reindeer","santa-with-bag","snow-crystal1","snow-crystal2","snow-crystal3","snowman","snownoes","snowy-slope-with-trees","stocking-empty","xmas-cookies","xmas-ornament-boat","xmas-ornament-on-tree","xmas-ornaments","xmas-presents","xmas-scene-holly-border","xmas-tree-with-presents","xmas-tree","xmas-wreath"]},{groupName:"space",images:["0","1","2","3","4","5","6","7","8","9","background","beetleship","collisioncircle","girl1","girl2","girl3","girl4","girl5","healthheart","minus","octopus","planet","plus","rocketship","star"]}]
if(!i18n._){i18n._=function(e){return e}}window.OutputImages=[{groupName:"avatars",images:"leaf-blue leaf-green leaf-grey leaf-orange leaf-red leaf-yellow leafers-seed leafers-seedling leafers-sapling leafers-tree leafers-ultimate marcimus mr-pants mr-pink piceratops-seed piceratops-seedling piceratops-sapling piceratops-tree piceratops-ultimate old-spice-man orange-juice-squid aqualine-seed aqualine-seedling aqualine-sapling aqualine-tree aqualine-ultimate purple-pi questionmark robot_female_1 robot_female_2 robot_female_3 robot_male_1 robot_male_2 robot_male_3 spunky-sam".split(" ")},{groupName:"creatures",images:"Hopper-Happy Hopper-Cool Hopper-Jumping OhNoes BabyWinston Winston".split(" ")},{groupName:"cute",images:"Blank BrownBlock CharacterBoy CharacterCatGirl CharacterHornGirl CharacterPinkGirl CharacterPrincessGirl ChestClosed ChestLid ChestOpen DirtBlock DoorTallClosed DoorTallOpen EnemyBug GemBlue GemGreen GemOrange GrassBlock Heart Key PlainBlock RampEast RampNorth RampSouth RampWest Rock RoofEast RoofNorth RoofNorthEast RoofNorthWest RoofSouth RoofSouthEast RoofSouthWest RoofWest Selector ShadowEast ShadowNorth ShadowNorthEast ShadowNorthWest ShadowSideWest ShadowSouth ShadowSouthEast ShadowSouthWest ShadowWest Star StoneBlock StoneBlockTall TreeShort TreeTall TreeUgly WallBlock WallBlockTall WaterBlock WindowTall WoodBlock".split(" "),cite:i18n._("'Planet Cute' art by Daniel Cook (Lostgarden.com)"),citeLink:"http://lostgarden.com/2007/05/dancs-miraculously-flexible-game.html"},{groupName:"space",images:"background beetleship collisioncircle girl1 girl2 girl3 girl4 girl5 healthheart minus octopus planet plus rocketship star 0 1 2 3 4 5 6 7 8 9".split(" "),cite:i18n._("'Space Cute' art by Daniel Cook (Lostgarden.com)"),citeLink:"http://lostgarden.com/2007/03/spacecute-prototyping-challenge.html"}]
window.ExtendedOutputImages=[{className:"Clipart",groups:OutputImages},{className:"Photos",groups:[{groupName:"animals",thumbsDir:"/thumbs",images:"birds_rainbow-lorakeets butterfly butterfly_monarch cat cheetah crocodiles dog_sleeping-puppy dogs_collies fox horse kangaroos komodo-dragon penguins rabbit retriever shark snake_green-tree-boa spider".split(" ")},{groupName:"landscapes",thumbsDir:"/thumbs",images:"beach-at-dusk beach-in-hawaii beach-sunset beach-waves-at-sunset beach-waves-daytime beach-with-palm-trees beach clouds-from-plane crop-circle fields-of-grain fields-of-wine lake lava lotus-garden mountain_matterhorn mountains-and-lake mountains-in-hawaii mountains-sunset sand-dunes waterfall_niagara-falls".split(" ")},{groupName:"food",thumbsDir:"/thumbs",images:"bananas berries broccoli brussels-sprouts cake chocolates coffee-beans croissant dumplings fish_grilled-snapper fruits grapes hamburger ice-cream mushroom oysters pasta potato-chips potatoes shish-kebab strawberries sushi tomatoes".split(" ")}]},{className:"Holiday ☃",groups:[{groupName:"seasonal",thumbsDir:"/thumbs",images:"father-winston fireworks-2015 fireworks-in-sky fireworks-over-harbor fireworks-scattered gingerbread-family gingerbread-house gingerbread-houses gingerbread-man hannukah-dreidel hannukah-menorah hopper-elfer hopper-partying hopper-reindeer house-with-lights reindeer snow-crystal1 snow-crystal2 snow-crystal3 snownoes snowy-slope-with-trees stocking-empty xmas-cookies xmas-ornament-boat xmas-ornament-on-tree xmas-ornaments xmas-presents xmas-scene-holly-border xmas-tree-with-presents xmas-tree xmas-wreath".split(" ")}]}]
if(!i18n._){i18n._=function(e){return e}}window.OutputSounds=[{className:"Sound effects",groups:[{groupName:"rpg",sounds:"battle-magic battle-spell battle-swing coin-jingle door-open giant-hyah giant-no giant-yah hit-clop hit-splat hit-thud hit-whack metal-chime metal-clink step-heavy water-bubble water-slosh".split(" "),cite:i18n._("'RPG Sound Effects' sounds by artisticdude"),citeLink:"http://opengameart.org/content/rpg-sound-pack"},{groupName:"retro",sounds:"boom1 boom2 coin hit1 hit2 jump1 jump2 laser1 laser2 laser3 laser4 rumble thruster-short thruster-long whistle1 whistle2".split(" "),cite:i18n._("'Retro Game Sounds' sounds by spongejr"),citeLink:"https://www.khanacademy.org/profile/spongejr/"}]}]
window.ScratchpadRecord=Backbone.Model.extend({initialize:function e(){this.handlers={seek:function e(){}}
this.seekCache={}
this.seekCacheInterval=20
this.initData={}
this.seekCachers={}
this.allSavedCommands=[]},setActualInitData:function t(e){this.actualInitData=e},hasNoChunks:function r(){return _.isEmpty(this.allSavedCommands)},numChunksSaved:function n(){return this.allSavedCommands.length},startRecordChunk:function i(e){e=Math.max(e,t())
this._resetForNewChunk()
this.record(e)
function t(){var e=0
if(this.allSavedCommands&&this.allSavedCommands.length>0){if(_.last(this.allSavedCommands).length>0){e=_.last(_.last(this.allSavedCommands))[0]}}return e}},stopRecordChunk:function s(){this.stopRecord()},saveRecordChunk:function o(){this.allSavedCommands.push(this.commands)
this._resetForNewChunk()},discardRecordChunk:function a(){this._resetForNewChunk()},_resetForNewChunk:function u(){this.commands=[]
this.initData={}},record:function c(e){e=e||0
if(!this.recording){this.commands=[]
this.recording=true
this.startTime=(new Date).getTime()-e
this.trigger("recordStarted")}},stopRecord:function l(){if(this.recording){this.recording=false
this.recorded=true
this.trigger("recordEnded")}},loadRecording:function f(e){var t=1
if(e&&e.commands&&e.init){this.initData=e.init
t=e.multiplier
e=e.commands}if(t!==1){for(var r=0;r<e.length;r++){e[r][0]=Math.floor(e[r][0]*t)}}this.commands=e
this.seekCacheInterval=Math.ceil(e.length/50)},dumpRecording:function h(){if(this.actualInitData){this.initData=this.actualInitData
this.commands=_.flatten(this.allSavedCommands,true)}return{init:this.initData,commands:this.commands}},getVersion:function d(){return this.initData.configVersion||0},seekTo:function p(e){this.pauseTime=(new Date).getTime()
this.playStart=this.pauseTime-e
this.cache(-1*this.seekCacheInterval)
var t=this.commands.length-1
for(var r=0;r<this.commands.length;r++){if(this.commands[r][0]>e){t=r-1
break}}this.playPos=t+1
this.trigger("runSeek")
var n=Math.floor(t/this.seekCacheInterval)
var i=null
var s=0
for(var r=n;r>=0;r--){if(this.seekCache[r]){i=r
break}}if(i!==null){this.cacheRestore(i)
s=i*this.seekCacheInterval+1}else{this.cacheRestore(-1*this.seekCacheInterval)}for(var r=s;r<=t;r++){this.runCommand(this.commands[r])
this.cache(r)}this.trigger("seekDone")},cache:function g(e){if(e%this.seekCacheInterval===0){var t=Math.floor(e/this.seekCacheInterval)
if(!this.seekCache[t]){this.seekCache[t]={}
_.each(this.seekCachers,function(e,r){this.seekCache[t][r]=e.getState()},this)}}},cacheRestore:function m(e){if(this.seekCache[e]){_.each(this.seekCachers,function(t,r){var n=this.seekCache[e][r]
if(n){t.restoreState(n)}},this)}},play:function y(){if(this.recording||this.playing||!this.commands||this.commands.length===0){return}this.trigger("playInit")
var e=this.playStart?this.pauseTime-this.playStart:0
this.playing=true
this.playPos=this.playPos||0
this.playStart=(new Date).getTime()-e
this.playInterval=setInterval(_.bind(function(){var e=this.commands[this.playPos]
while(e&&this.currentTime()>=e[0]){this.runCommand(e)
this.cache(this.playPos)
this.playPos+=1
if(this.playPos===this.commands.length){this.stopPlayback(true)
this.trigger("playEnded")
return}e=this.commands[this.playPos]}},this),5)
this.trigger("playStarted",e>0)
this.seekTo(e)},pausePlayback:function v(e){clearInterval(this.playInterval)
this.playing=false
this.playInterval=null
this.pauseTime=(new Date).getTime()
if(!e){this.trigger("playPaused")}},stopPlayback:function w(e){this.pausePlayback(e)
if(!e){this.trigger("playStopped")}this.playPos=null
this.playStart=null
this.pauseTime=null},reset:function k(){this.initData={}
this.commands=[]
this.seekCache={}
this.playPos=null
this.playStart=null
this.pauseTime=null
this.playing=false
this.recording=false
this.recorded=false},currentTime:function S(){return(new Date).getTime()-this.playStart},runCommand:function x(e){var t=this.handlers[e[1]]
if(t){return t.apply(this.handlers,e.slice(2))}console.error("Command not found:",e[1])},log:function j(){if(!this.playing&&this.recording&&this.commands){if(this.synchronizedTime===undefined){this.synchronizedTime=Math.floor((new Date).getTime()-this.startTime)
setTimeout(function(){this.synchronizedTime=undefined}.bind(this),0)}var e=Array.prototype.slice.call(arguments,0)
e.unshift(this.synchronizedTime)
this.commands.push(e)
return true}},pauseLog:function O(){this.oldRecording=this.recording
this.recording=false},resumeLog:function E(){this.recording=this.oldRecording}})
var ScratchpadConfig=Backbone.Model.extend({version:null,initialize:function C(e){this.version=e.version
this.useDebugger=e.useDebugger
if(this.version!=null){this.version=this.latestVersion()}},runCurVersion:function P(e){var t=Array.prototype.slice.call(arguments,0)
t.unshift(this.curVersion())
return this.runVersion.apply(this,t)},runVersion:function D(e,t){var r=Array.prototype.slice.call(arguments,2)
for(var n=0;n<=e;n++){var i=this.versions[n][t]
if(i){i.apply(this,r)}}},switchVersion:function N(e){if(e!==this.curVersion()){this.version=e
this.trigger("versionSwitched",e)}},curVersion:function I(){if(this.version!=null){return this.version}return this.latestVersion()},latestVersion:function T(){return this.versions.length-1},autoCompleteBehavior:{autoBrace:false,braceIndent:true,equalsInsert:true},bindAutoComplete:function F(e,t){t=t||this.autoCompleteBehavior
var r=e.getSession().getMode().$behaviour
r.add("parens","insertion",function(){})
r.add("parens","deletion",function(){})
r.add("brackets","insertion",function(){})
r.add("brackets","deletion",function(){})
r.add("string_dquotes","insertion",function(){})
r.add("string_dquotes","deletion",function(){})
r.add("braces","insertion",function(e,r,n,i,s){var o=n.getCursorPosition()
var a=i.doc.getLine(o.row)
if(s==="{"){var u=n.getSelectionRange()
var c=i.doc.getTextRange(u)
if(t.autoBrace){if(c!==""){return{text:"{"+c+"}",selection:false}}else{return{text:"{}",selection:[1,1]}}}else if(t.braceIndent){var l=/=\s*function/.test(a)?";":""
var f=this.getNextLineIndent(e,a.substring(0,a.length-1),i.getTabString())
var h=this.$getIndent(i.doc.getLine(o.row))
if(f===h){f+=i.getTabString()}return{text:"{\n"+f+c+"\n"+h+"}"+l,selection:[1,f.length,1,f.length]}}}else if(s==="}"){var d=a.substring(o.column,o.column+1)
if(d==="}"){var p=i.$findOpeningBracket("}",{column:o.column+1,row:o.row})
if(p!==null){return{text:"",selection:[1,1]}}}}else if(s==="\n"){var d=a.substring(o.column,o.column+1)
if(d==="}"){var g=i.findMatchingBracket({row:o.row,column:o.column+1})
if(!g){return null}var f=this.getNextLineIndent(e,a.substring(0,a.length-1),i.getTabString())
var h=this.$getIndent(i.doc.getLine(g.row))
return{text:"\n"+f+"\n"+h,selection:[1,f.length,1,f.length]}}}})
r.add("equals","insertion",function(e,r,n,i,s){if(!t.equalsInsert){return}var o=n.getCursorPosition()
var a=i.doc.getLine(o.row)
if(s==="="&&/\bdraw\s*$/.test(a)){var u=n.getSelectionRange()
var c=i.doc.getTextRange(u)
var l=this.getNextLineIndent(e,a.substring(0,a.length-1),i.getTabString())
var f=this.$getIndent(i.doc.getLine(o.row))
if(l===f){l+=i.getTabString()}return{text:"= function() {\n"+l+c+"\n"+f+"};",selection:[1,l.length,1,l.length]}}})},versions:[{name:"Initial Configuration",ace_pjs_editor:function L(e){var t=e.editor
t.session.setOption("useWorker",false)
t.setHighlightActiveLine(false)
t.$highlightBrackets=function(){}
t.renderer.setHScrollBarAlwaysVisible(false)
var r=t.getSession()
r.setUseWrapMode(true)
r.setUseSoftTabs(true)
r.setUseWorker(false)
t.setFontSize("14px")
t.setHighlightSelectedWord(false)
t.renderer.setShowGutter(true)
t.renderer.setShowPrintMargin(false)
r.setMode("ace/mode/javascript")
t.setTheme("ace/theme/textmate")
this.bindAutoComplete(e.editor,{autoBrace:false,braceIndent:false,equalsInsert:true})},ace_webpage_editor:function A(e){var t=e.editor
t.session.setOption("useWorker",false)
t.setHighlightActiveLine(false)
t.renderer.setHScrollBarAlwaysVisible(false)
var r=t.getSession()
r.setUseWrapMode(true)
r.setUseSoftTabs(true)
t.setFontSize("14px")
t.setHighlightSelectedWord(false)
t.renderer.setShowGutter(true)
t.renderer.setShowPrintMargin(false)
r.setMode("ace/mode/html")
var n=r.getMode().$behaviour.getBehaviours()
var i=n.autoclosing.insertion
n.autoclosing.insertion=function(e,t,r,n,s){var o=r.getCursorPosition()
var a=n.getLine(o.row)
if(a.slice(o.column).trim()===""){return i.apply(this,arguments)}}
t.setTheme("ace/theme/textmate")},ace_sql_editor:function M(e){var t=e.editor
t.setHighlightActiveLine(false)
t.renderer.setHScrollBarAlwaysVisible(false)
var r=t.getSession()
r.setUseWrapMode(true)
r.setUseSoftTabs(true)
t.setFontSize("14px")
t.setHighlightSelectedWord(false)
t.renderer.setShowGutter(true)
t.renderer.setShowPrintMargin(false)
r.setMode("ace/mode/sql")
t.setTheme("ace/theme/textmate")},jshint:function R(e){e.JSHint={undef:true,noempty:true,plusplus:true,noarg:true,latedef:true,eqeqeq:true,curly:true,shadow:true,smarttabs:true}},processing:function W(e){e.size(400,400)
e.frameRate(30)
e.angleMode="radians"}},{name:"Switch to Degress from Radians",processing:function B(e){e.angleMode="degrees"}},{name:"Brace Autocompletion Changes",ace_pjs_editor:function G(e){}},{name:"Disable Un-needed JSHint Rules",jshint:function q(e){delete e.JSHint.noempty
delete e.JSHint.plusplus}},{name:"version 4 placeholder"}]});(function(){window.visibly={q:document,p:undefined,prefixes:["webkit","ms","o","moz","khtml"],props:["VisibilityState","visibilitychange","Hidden"],m:["focus","blur"],visibleCallbacks:[],hiddenCallbacks:[],genericCallbacks:[],_callbacks:[],cachedPrefix:"",fn:null,onVisible:function(e){if(typeof e=="function"){this.visibleCallbacks.push(e)}},onHidden:function(e){if(typeof e=="function"){this.hiddenCallbacks.push(e)}},getPrefix:function(){if(!this.cachedPrefix){for(var e=0;b=this.prefixes[e++];){if(b+this.props[2]in this.q){this.cachedPrefix=b
return this.cachedPrefix}}}},visibilityState:function(){return this._getProp(0)},hidden:function(){return this._getProp(2)},visibilitychange:function(e){if(typeof e=="function"){this.genericCallbacks.push(e)}var t=this.genericCallbacks.length
if(t){if(this.cachedPrefix){while(t--){this.genericCallbacks[t].call(this,this.visibilityState())}}else{while(t--){this.genericCallbacks[t].call(this,arguments[0])}}}},isSupported:function(e){return this._getPropName(2)in this.q},_getPropName:function(e){return this.cachedPrefix==""?this.props[e].substring(0,1).toLowerCase()+this.props[e].substring(1):this.cachedPrefix+this.props[e]},_getProp:function(e){return this.q[this._getPropName(e)]},_execute:function(e){if(e){this._callbacks=e==1?this.visibleCallbacks:this.hiddenCallbacks
var t=this._callbacks.length
while(t--){this._callbacks[t]()}}},_visible:function(){window.visibly._execute(1)
window.visibly.visibilitychange.call(window.visibly,"visible")},_hidden:function(){window.visibly._execute(2)
window.visibly.visibilitychange.call(window.visibly,"hidden")},_nativeSwitch:function(){this[this._getProp(2)?"_hidden":"_visible"]()},_listen:function(){try{if(!this.isSupported()){if(this.q.addEventListener){window.addEventListener(this.m[0],this._visible,false)
window.addEventListener(this.m[1],this._hidden,false)}else{if(this.q.attachEvent){this.q.attachEvent("onfocusin",this._visible)
this.q.attachEvent("onfocusout",this._hidden)}}}else{this.q.addEventListener(this._getPropName(1),function(){window.visibly._nativeSwitch.apply(window.visibly,arguments)},1)}}catch(e){}},init:function(){this.getPrefix()
this._listen()}}
this.visibly.init()})();(function H(e,t,r){function n(s,o){if(!t[s]){if(!e[s]){var a=typeof require=="function"&&require
if(!o&&a)return a(s,!0)
if(i)return i(s,!0)
var u=new Error("Cannot find module '"+s+"'")
throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}}
e[s][0].call(c.exports,function(t){var r=e[s][1][t]
return n(r?r:t)},c,c.exports,H,e,t,r)}return t[s].exports}var i=typeof require=="function"&&require
for(var s=0;s<r.length;s++)n(r[s])
return n})({1:[function(e,t,r){(function(r){"use strict"
var n=e("./tools/protect.js")
var i=s(n)
e("core-js/shim")
e("regenerator/runtime")
i["default"](t)
function s(e){return e&&e.__esModule?e:{"default":e}}if(r._babelPolyfill){throw new Error("only one instance of babel/polyfill is allowed")}r._babelPolyfill=true}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./tools/protect.js":2,"core-js/shim":93,"regenerator/runtime":94}],2:[function(e,t,r){(function(n){"use strict"
r.__esModule=true
function i(e){return e&&e.__esModule?e:{"default":e}}var s=e("path")
var o=i(s)
var a=o["default"].resolve(n,"../../../")
r["default"]=function(e){if(e.parent&&e.parent.filename.indexOf(a)!==0){throw new Error("Don't hotlink internal Babel files.")}}
t.exports=r["default"]}).call(this,"/lib/babel/tools")},{path:3}],3:[function(e,t,r){(function(e){function t(e,t){var r=0
for(var n=e.length-1;n>=0;n--){var i=e[n]
if(i==="."){e.splice(n,1)}else if(i===".."){e.splice(n,1)
r++}else if(r){e.splice(n,1)
r--}}if(t){for(;r--;r){e.unshift("..")}}return e}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
var i=function(e){return n.exec(e).slice(1)}
r.resolve=function(){var r="",n=false
for(var i=arguments.length-1;i>=-1&&!n;i--){var o=i>=0?arguments[i]:e.cwd()
if(typeof o!=="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!o){continue}r=o+"/"+r
n=o.charAt(0)==="/"}r=t(s(r.split("/"),function(e){return!!e}),!n).join("/")
return(n?"/":"")+r||"."}
r.normalize=function(e){var n=r.isAbsolute(e),i=o(e,-1)==="/"
e=t(s(e.split("/"),function(e){return!!e}),!n).join("/")
if(!e&&!n){e="."}if(e&&i){e+="/"}return(n?"/":"")+e}
r.isAbsolute=function(e){return e.charAt(0)==="/"}
r.join=function(){var e=Array.prototype.slice.call(arguments,0)
return r.normalize(s(e,function(e,t){if(typeof e!=="string"){throw new TypeError("Arguments to path.join must be strings")}return e}).join("/"))}
r.relative=function(e,t){e=r.resolve(e).substr(1)
t=r.resolve(t).substr(1)
function n(e){var t=0
for(;t<e.length;t++){if(e[t]!=="")break}var r=e.length-1
for(;r>=0;r--){if(e[r]!=="")break}if(t>r)return[]
return e.slice(t,r-t+1)}var i=n(e.split("/"))
var s=n(t.split("/"))
var o=Math.min(i.length,s.length)
var a=o
for(var u=0;u<o;u++){if(i[u]!==s[u]){a=u
break}}var c=[]
for(var u=a;u<i.length;u++){c.push("..")}c=c.concat(s.slice(a))
return c.join("/")}
r.sep="/"
r.delimiter=":"
r.dirname=function(e){var t=i(e),r=t[0],n=t[1]
if(!r&&!n){return"."}if(n){n=n.substr(0,n.length-1)}return r+n}
r.basename=function(e,t){var r=i(e)[2]
if(t&&r.substr(-1*t.length)===t){r=r.substr(0,r.length-t.length)}return r}
r.extname=function(e){return i(e)[3]}
function s(e,t){if(e.filter)return e.filter(t)
var r=[]
for(var n=0;n<e.length;n++){if(t(e[n],n,e))r.push(e[n])}return r}var o="ab".substr(-1)==="b"?function(e,t,r){return e.substr(t,r)}:function(e,t,r){if(t<0)t=e.length+t
return e.substr(t,r)}}).call(this,e("_process"))},{_process:4}],4:[function(e,t,r){var n=t.exports={}
var i=[]
var s=false
function o(){if(s){return}s=true
var e
var t=i.length
while(t){e=i
i=[]
var r=-1
while(++r<t){e[r]()}t=i.length}s=false}n.nextTick=function(e){i.push(e)
if(!s){setTimeout(o,0)}}
n.title="browser"
n.browser=true
n.env={}
n.argv=[]
n.version=""
n.versions={}
function a(){}n.on=a
n.addListener=a
n.once=a
n.off=a
n.removeListener=a
n.removeAllListeners=a
n.emit=a
n.binding=function(e){throw new Error("process.binding is not supported")}
n.cwd=function(){return"/"}
n.chdir=function(e){throw new Error("process.chdir is not supported")}
n.umask=function(){return 0}},{}],5:[function(e,t,r){var $=e("./$")
t.exports=function(e){return function(t,r,n){var i=$.toObject(t),s=$.toLength(i.length),o=$.toIndex(n,s),a
if(e&&r!=r)while(s>o){a=i[o++]
if(a!=a)return true}else for(;s>o;o++)if(e||o in i){if(i[o]===r)return e||o}return!e&&-1}}},{"./$":26}],6:[function(e,t,r){var $=e("./$"),n=e("./$.ctx")
t.exports=function(e){var t=e==1,r=e==2,i=e==3,s=e==4,o=e==6,a=e==5||o
return function(u,c,l){var f=Object($.assertDefined(u)),h=$.ES5Object(f),d=n(c,l,3),p=$.toLength(h.length),g=0,m=t?Array(p):r?[]:undefined,y,v
for(;p>g;g++)if(a||g in h){y=h[g]
v=d(y,g,f)
if(e){if(t)m[g]=v
else if(v)switch(e){case 3:return true
case 5:return y
case 6:return g
case 2:m.push(y)}else if(s)return false}}return o?-1:i||s?s:m}}},{"./$":26,"./$.ctx":14}],7:[function(e,t,r){var $=e("./$")
function n(e,t,r){if(!e)throw TypeError(r?t+r:t)}n.def=$.assertDefined
n.fn=function(e){if(!$.isFunction(e))throw TypeError(e+" is not a function!")
return e}
n.obj=function(e){if(!$.isObject(e))throw TypeError(e+" is not an object!")
return e}
n.inst=function(e,t,r){if(!(e instanceof t))throw TypeError(r+": use the 'new' operator!")
return e}
t.exports=n},{"./$":26}],8:[function(e,t,r){var $=e("./$"),n=e("./$.enum-keys")
t.exports=Object.assign||function i(e,t){var r=Object($.assertDefined(e)),i=arguments.length,s=1
while(i>s){var o=$.ES5Object(arguments[s++]),a=n(o),u=a.length,c=0,l
while(u>c)r[l=a[c++]]=o[l]}return r}},{"./$":26,"./$.enum-keys":17}],9:[function(e,t,r){var $=e("./$"),n=e("./$.wks")("toStringTag"),i={}.toString
function s(e){return i.call(e).slice(8,-1)}s.classof=function(e){var t,r
return e==undefined?e===undefined?"Undefined":"Null":typeof(r=(t=Object(e))[n])=="string"?r:s(t)}
s.set=function(e,t,r){if(e&&!$.has(e=r?e:e.prototype,n))$.hide(e,n,t)}
t.exports=s},{"./$":26,"./$.wks":44}],10:[function(e,t,r){"use strict"
var $=e("./$"),n=e("./$.ctx"),i=e("./$.uid").safe,s=e("./$.assert"),o=e("./$.for-of"),a=e("./$.iter").step,u=$.has,c=$.set,l=$.isObject,f=$.hide,h=Object.isExtensible||l,d=i("id"),p=i("O1"),g=i("last"),m=i("first"),y=i("iter"),v=$.DESC?i("size"):"size",b=0
function w(e,t){if(!l(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e
if(!u(e,d)){if(!h(e))return"F"
if(!t)return"E"
f(e,d,++b)}return"O"+e[d]}function k(e,t){var r=w(t),n
if(r!=="F")return e[p][r]
for(n=e[m];n;n=n.n){if(n.k==t)return n}}t.exports={getConstructor:function(t,r,i,a){var u=t(function(e,t){s.inst(e,u,r)
c(e,p,$.create(null))
c(e,v,0)
c(e,g,undefined)
c(e,m,undefined)
if(t!=undefined)o(t,i,e[a],e)})
e("./$.mix")(u.prototype,{clear:function l(){for(var e=this,t=e[p],r=e[m];r;r=r.n){r.r=true
if(r.p)r.p=r.p.n=undefined
delete t[r.i]}e[m]=e[g]=undefined
e[v]=0},"delete":function(e){var t=this,r=k(t,e)
if(r){var n=r.n,i=r.p
delete t[p][r.i]
r.r=true
if(i)i.n=n
if(n)n.p=i
if(t[m]==r)t[m]=n
if(t[g]==r)t[g]=i
t[v]--}return!!r},forEach:function f(e){var t=n(e,arguments[1],3),r
while(r=r?r.n:this[m]){t(r.v,r.k,this)
while(r&&r.r)r=r.p}},has:function h(e){return!!k(this,e)}})
if($.DESC)$.setDesc(u.prototype,"size",{get:function(){return s.def(this[v])}})
return u},def:function(e,t,r){var n=k(e,t),i,s
if(n){n.v=r}else{e[g]=n={i:s=w(t,true),k:t,v:r,p:i=e[g],n:undefined,r:false}
if(!e[m])e[m]=n
if(i)i.n=n
e[v]++
if(s!=="F")e[p][s]=n}return e},getEntry:k,setIter:function(t,r,n){e("./$.iter-define")(t,r,function(e,t){c(this,y,{o:e,k:t})},function(){var e=this[y],t=e.k,r=e.l
while(r&&r.r)r=r.p
if(!e.o||!(e.l=r=r?r.n:e.o[m])){e.o=undefined
return a(1)}if(t=="keys")return a(0,r.k)
if(t=="values")return a(0,r.v)
return a(0,[r.k,r.v])},n?"entries":"values",!n,true)}}},{"./$":26,"./$.assert":7,"./$.ctx":14,"./$.for-of":18,"./$.iter":25,"./$.iter-define":23,"./$.mix":28,"./$.uid":42}],11:[function(e,t,r){var n=e("./$.def"),i=e("./$.for-of")
t.exports=function(e){n(n.P,e,{toJSON:function t(){var e=[]
i(this,false,e.push,e)
return e}})}},{"./$.def":15,"./$.for-of":18}],12:[function(e,t,r){"use strict"
var $=e("./$"),n=e("./$.uid").safe,i=e("./$.assert"),s=e("./$.for-of"),o=$.has,a=$.isObject,u=$.hide,c=Object.isExtensible||a,l=0,f=n("id"),h=n("weak"),d=n("leak"),p=e("./$.array-methods"),g=p(5),m=p(6)
function y(e,t){return g(e.array,function(e){return e[0]===t})}function v(e){return e[d]||u(e,d,{array:[],get:function(e){var t=y(this,e)
if(t)return t[1]},has:function(e){return!!y(this,e)},set:function(e,t){var r=y(this,e)
if(r)r[1]=t
else this.array.push([e,t])},"delete":function(e){var t=m(this.array,function(t){return t[0]===e})
if(~t)this.array.splice(t,1)
return!!~t}})[d]}t.exports={getConstructor:function(t,r,n,u){var d=t(function(e,t){$.set(i.inst(e,d,r),f,l++)
if(t!=undefined)s(t,n,e[u],e)})
e("./$.mix")(d.prototype,{"delete":function(e){if(!a(e))return false
if(!c(e))return v(this)["delete"](e)
return o(e,h)&&o(e[h],this[f])&&delete e[h][this[f]]},has:function p(e){if(!a(e))return false
if(!c(e))return v(this).has(e)
return o(e,h)&&o(e[h],this[f])}})
return d},def:function(e,t,r){if(!c(i.obj(t))){v(e).set(t,r)}else{o(t,h)||u(t,h,{})
t[h][e[f]]=r}return e},leakStore:v,WEAK:h,ID:f}},{"./$":26,"./$.array-methods":6,"./$.assert":7,"./$.for-of":18,"./$.mix":28,"./$.uid":42}],13:[function(e,t,r){"use strict"
var $=e("./$"),n=e("./$.def"),i=e("./$.iter").BUGGY,s=e("./$.for-of"),o=e("./$.species"),a=e("./$.assert").inst
t.exports=function(t,r,u,c,l,f){var h=$.g[t],d=h,p=l?"set":"add",g=d&&d.prototype,m={}
function y(t){var r=g[t]
e("./$.redef")(g,t,t=="delete"?function(e){return r.call(this,e===0?0:e)}:t=="has"?function n(e){return r.call(this,e===0?0:e)}:t=="get"?function i(e){return r.call(this,e===0?0:e)}:t=="add"?function s(e){r.call(this,e===0?0:e)
return this}:function o(e,t){r.call(this,e===0?0:e,t)
return this})}if(!$.isFunction(d)||!(f||!i&&g.forEach&&g.entries)){d=c.getConstructor(r,t,l,p)
e("./$.mix")(d.prototype,u)}else{var v=new d,b=v[p](f?{}:-0,1),w
if(!e("./$.iter-detect")(function(e){new d(e)})){d=r(function(e,r){a(e,d,t)
var n=new h
if(r!=undefined)s(r,l,n[p],n)
return n})
d.prototype=g
g.constructor=d}f||v.forEach(function(e,t){w=1/t===-Infinity})
if(w){y("delete")
y("has")
l&&y("get")}if(w||b!==v)y(p)}e("./$.cof").set(d,t)
m[t]=d
n(n.G+n.W+n.F*(d!=h),m)
o(d)
o($.core[t])
if(!f)c.setIter(d,t,l)
return d}},{"./$":26,"./$.assert":7,"./$.cof":9,"./$.def":15,"./$.for-of":18,"./$.iter":25,"./$.iter-detect":24,"./$.mix":28,"./$.redef":31,"./$.species":36}],14:[function(e,t,r){var n=e("./$.assert").fn
t.exports=function(e,t,r){n(e)
if(~r&&t===undefined)return e
switch(r){case 1:return function(r){return e.call(t,r)}
case 2:return function(r,n){return e.call(t,r,n)}
case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},{"./$.assert":7}],15:[function(e,t,r){var $=e("./$"),n=$.g,i=$.core,s=$.isFunction,o=e("./$.redef")
function a(e,t){return function(){return e.apply(t,arguments)}}n.core=i
u.F=1
u.G=2
u.S=4
u.P=8
u.B=16
u.W=32
function u(e,t,r){var c,l,f,h,d=e&u.G,p=e&u.P,g=d?n:e&u.S?n[t]:(n[t]||{}).prototype,m=d?i:i[t]||(i[t]={})
if(d)r=t
for(c in r){l=!(e&u.F)&&g&&c in g
f=(l?g:r)[c]
if(e&u.B&&l)h=a(f,n)
else h=p&&s(f)?a(Function.call,f):f
if(g&&!l)o(g,c,f)
if(m[c]!=f)$.hide(m,c,h)
if(p)(m.prototype||(m.prototype={}))[c]=f}}t.exports=u},{"./$":26,"./$.redef":31}],16:[function(e,t,r){var $=e("./$"),n=$.g.document,i=$.isObject,s=i(n)&&i(n.createElement)
t.exports=function(e){return s?n.createElement(e):{}}},{"./$":26}],17:[function(e,t,r){var $=e("./$")
t.exports=function(e){var t=$.getKeys(e),r=$.getDesc,n=$.getSymbols
if(n)$.each.call(n(e),function(n){if(r(e,n).enumerable)t.push(n)})
return t}},{"./$":26}],18:[function(e,t,r){var n=e("./$.ctx"),i=e("./$.iter").get,s=e("./$.iter-call")
t.exports=function(e,t,r,o){var a=i(e),u=n(r,o,t?2:1),c
while(!(c=a.next()).done){if(s(a,u,c.value,t)===false){return s.close(a)}}}},{"./$.ctx":14,"./$.iter":25,"./$.iter-call":22}],19:[function(e,t,r){t.exports=function($){$.FW=true
$.path=$.g
return $}},{}],20:[function(e,t,r){var $=e("./$"),n={}.toString,i=$.getNames
var s=typeof window=="object"&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[]
function o(e){try{return i(e)}catch(t){return s.slice()}}t.exports.get=function a(e){if(s&&n.call(e)=="[object Window]")return o(e)
return i($.toObject(e))}},{"./$":26}],21:[function(e,t,r){t.exports=function(e,t,r){var n=r===undefined
switch(t.length){case 0:return n?e():e.call(r)
case 1:return n?e(t[0]):e.call(r,t[0])
case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1])
case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2])
case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])
case 5:return n?e(t[0],t[1],t[2],t[3],t[4]):e.call(r,t[0],t[1],t[2],t[3],t[4])}return e.apply(r,t)}},{}],22:[function(e,t,r){var n=e("./$.assert").obj
function i(e){var t=e["return"]
if(t!==undefined)n(t.call(e))}function s(e,t,r,s){try{return s?t(n(r)[0],r[1]):t(r)}catch(o){i(e)
throw o}}s.close=i
t.exports=s},{"./$.assert":7}],23:[function(e,t,r){var n=e("./$.def"),i=e("./$.redef"),$=e("./$"),s=e("./$.cof"),o=e("./$.iter"),a=e("./$.wks")("iterator"),u="@@iterator",c="keys",l="values",f=o.Iterators
t.exports=function(e,t,r,h,d,p,g){o.create(r,t,h)
function m(e){function t(t){return new r(t,e)}switch(e){case c:return function n(){return t(this)}
case l:return function i(){return t(this)}}return function s(){return t(this)}}var y=t+" Iterator",v=e.prototype,b=v[a]||v[u]||d&&v[d],w=b||m(d),k,S
if(b){var _=$.getProto(w.call(new e))
s.set(_,y,true)
if($.FW&&$.has(v,u))o.set(_,$.that)}if($.FW||g)o.set(v,w)
f[t]=w
f[y]=$.that
if(d){k={keys:p?w:m(c),values:d==l?w:m(l),entries:d!=l?w:m("entries")}
if(g)for(S in k){if(!(S in v))i(v,S,k[S])}else n(n.P+n.F*o.BUGGY,t,k)}}},{"./$":26,"./$.cof":9,"./$.def":15,"./$.iter":25,"./$.redef":31,"./$.wks":44}],24:[function(e,t,r){var n=e("./$.wks")("iterator"),i=false
try{var s=[7][n]()
s["return"]=function(){i=true}
Array.from(s,function(){throw 2})}catch(o){}t.exports=function(e){if(!i)return false
var t=false
try{var r=[7],s=r[n]()
s.next=function(){t=true}
r[n]=function(){return s}
e(r)}catch(o){}return t}},{"./$.wks":44}],25:[function(e,t,r){"use strict"
var $=e("./$"),n=e("./$.cof"),i=n.classof,s=e("./$.assert"),o=s.obj,a=e("./$.wks")("iterator"),u="@@iterator",c=e("./$.shared")("iterators"),l={}
f(l,$.that)
function f(e,t){$.hide(e,a,t)
if(u in[])$.hide(e,u,t)}t.exports={BUGGY:"keys"in[]&&!("next"in[].keys()),Iterators:c,step:function(e,t){return{value:t,done:!!e}},is:function(e){var t=Object(e),r=$.g.Symbol
return(r&&r.iterator||u)in t||a in t||$.has(c,i(t))},get:function(e){var t=$.g.Symbol,r
if(e!=undefined){r=e[t&&t.iterator||u]||e[a]||c[i(e)]}s($.isFunction(r),e," is not iterable!")
return o(r.call(e))},set:f,create:function(e,t,r,i){e.prototype=$.create(i||l,{next:$.desc(1,r)})
n.set(e,t+" Iterator")}}},{"./$":26,"./$.assert":7,"./$.cof":9,"./$.shared":35,"./$.wks":44}],26:[function(e,t,r){"use strict"
var n=typeof self!="undefined"?self:Function("return this")(),i={},s=Object.defineProperty,o={}.hasOwnProperty,a=Math.ceil,u=Math.floor,c=Math.max,l=Math.min
var f=!!function(){try{return s({},"a",{get:function(){return 2}}).a==2}catch(e){}}()
var h=m(1)
function d(e){return isNaN(e=+e)?0:(e>0?u:a)(e)}function p(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}}function g(e,t,r){e[t]=r
return e}function m(e){return f?function(t,r,n){return $.setDesc(t,r,p(e,n))}:g}function y(e){return e!==null&&(typeof e=="object"||typeof e=="function")}function v(e){return typeof e=="function"}function b(e){if(e==undefined)throw TypeError("Can't call method on  "+e)
return e}var $=t.exports=e("./$.fw")({g:n,core:i,html:n.document&&document.documentElement,isObject:y,isFunction:v,that:function(){return this},toInteger:d,toLength:function(e){return e>0?l(d(e),9007199254740991):0},toIndex:function(e,t){e=d(e)
return e<0?c(e+t,0):l(e,t)},has:function(e,t){return o.call(e,t)},create:Object.create,getProto:Object.getPrototypeOf,DESC:f,desc:p,getDesc:Object.getOwnPropertyDescriptor,setDesc:s,setDescs:Object.defineProperties,getKeys:Object.keys,getNames:Object.getOwnPropertyNames,getSymbols:Object.getOwnPropertySymbols,assertDefined:b,ES5Object:Object,toObject:function(e){return $.ES5Object(b(e))},hide:h,def:m(0),set:n.Symbol?g:h,each:[].forEach})
if(typeof __e!="undefined")__e=i
if(typeof __g!="undefined")__g=n},{"./$.fw":19}],27:[function(e,t,r){var $=e("./$")
t.exports=function(e,t){var r=$.toObject(e),n=$.getKeys(r),i=n.length,s=0,o
while(i>s)if(r[o=n[s++]]===t)return o}},{"./$":26}],28:[function(e,t,r){var n=e("./$.redef")
t.exports=function(e,t){for(var r in t)n(e,r,t[r])
return e}},{"./$.redef":31}],29:[function(e,t,r){var $=e("./$"),n=e("./$.assert").obj
t.exports=function i(e){n(e)
var t=$.getNames(e),r=$.getSymbols
return r?t.concat(r(e)):t}},{"./$":26,"./$.assert":7}],30:[function(e,t,r){"use strict"
var $=e("./$"),n=e("./$.invoke"),i=e("./$.assert").fn
t.exports=function(){var e=i(this),t=arguments.length,r=Array(t),s=0,o=$.path._,a=false
while(t>s)if((r[s]=arguments[s++])===o)a=true
return function(){var i=this,s=arguments.length,u=0,c=0,l
if(!a&&!s)return n(e,r,i)
l=r.slice()
if(a)for(;t>u;u++)if(l[u]===o)l[u]=arguments[c++]
while(s>c)l.push(arguments[c++])
return n(e,l,i)}}},{"./$":26,"./$.assert":7,"./$.invoke":21}],31:[function(e,t,r){var $=e("./$"),n=String({}.hasOwnProperty),i=e("./$.uid").safe("src"),s=Function.toString
function o(e,t,r,s){if($.isFunction(r)){var o=e[t]
$.hide(r,i,o?String(o):n.replace(/hasOwnProperty/,String(t)))
if(!("name"in r))r.name=t}if(e===$.g){e[t]=r}else{if(!s)delete e[t]
$.hide(e,t,r)}}o(Function.prototype,"toString",function a(){return $.has(this,i)?this[i]:s.call(this)})
$.core.inspectSource=function(e){return s.call(e)}
t.exports=o},{"./$":26,"./$.uid":42}],32:[function(e,t,r){"use strict"
t.exports=function(e,t,r){var n=t===Object(t)?function(e){return t[e]}:t
return function(t){return String(r?t:this).replace(e,n)}}},{}],33:[function(e,t,r){t.exports=Object.is||function n(e,t){return e===t?e!==0||1/e===1/t:e!=e&&t!=t}},{}],34:[function(e,t,r){var $=e("./$"),n=e("./$.assert")
function i(e,t){n.obj(e)
n(t===null||$.isObject(t),t,": can't set as prototype!")}t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r){try{r=e("./$.ctx")(Function.call,$.getDesc(Object.prototype,"__proto__").set,2)
r({},[])}catch(n){t=true}return function s(e,n){i(e,n)
if(t)e.__proto__=n
else r(e,n)
return e}}():undefined),check:i}},{"./$":26,"./$.assert":7,"./$.ctx":14}],35:[function(e,t,r){var $=e("./$"),n="__core-js_shared__",i=$.g[n]||($.g[n]={})
t.exports=function(e){return i[e]||(i[e]={})}},{"./$":26}],36:[function(e,t,r){var $=e("./$"),n=e("./$.wks")("species")
t.exports=function(e){if($.DESC&&!(n in e))$.setDesc(e,n,{configurable:true,get:$.that})}},{"./$":26,"./$.wks":44}],37:[function(e,t,r){var $=e("./$")
t.exports=function(e){return function(t,r){var n=String($.assertDefined(t)),i=$.toInteger(r),s=n.length,o,a
if(i<0||i>=s)return e?"":undefined
o=n.charCodeAt(i)
return o<55296||o>56319||i+1===s||(a=n.charCodeAt(i+1))<56320||a>57343?e?n.charAt(i):o:e?n.slice(i,i+2):(o-55296<<10)+(a-56320)+65536}}},{"./$":26}],38:[function(e,t,r){var $=e("./$"),n=e("./$.string-repeat")
t.exports=function(e,t,r,i){var s=String($.assertDefined(e))
if(t===undefined)return s
var o=$.toInteger(t)
var a=o-s.length
if(a<0||a===Infinity){throw new RangeError("Cannot satisfy string length "+t+" for string: "+s)}var u=r===undefined?" ":String(r)
var c=n.call(u,Math.ceil(a/u.length))
if(c.length>a)c=i?c.slice(c.length-a):c.slice(0,a)
return i?c.concat(s):s.concat(c)}},{"./$":26,"./$.string-repeat":39}],39:[function(e,t,r){"use strict"
var $=e("./$")
t.exports=function n(e){var t=String($.assertDefined(this)),r="",n=$.toInteger(e)
if(n<0||n==Infinity)throw RangeError("Count can't be negative")
for(;n>0;(n>>>=1)&&(t+=t))if(n&1)r+=t
return r}},{"./$":26}],40:[function(e,t,r){"use strict"
var $=e("./$"),n=e("./$.ctx"),i=e("./$.cof"),s=e("./$.invoke"),o=e("./$.dom-create"),a=$.g,u=$.isFunction,c=$.html,l=a.process,f=a.setImmediate,h=a.clearImmediate,d=a.MessageChannel,p=0,g={},m="onreadystatechange",y,v,b
function w(){var e=+this
if($.has(g,e)){var t=g[e]
delete g[e]
t()}}function k(e){w.call(e.data)}if(!u(f)||!u(h)){f=function(e){var t=[],r=1
while(arguments.length>r)t.push(arguments[r++])
g[++p]=function(){s(u(e)?e:Function(e),t)}
y(p)
return p}
h=function(e){delete g[e]}
if(i(l)=="process"){y=function(e){l.nextTick(n(w,e,1))}}else if(a.addEventListener&&u(a.postMessage)&&!a.importScripts){y=function(e){a.postMessage(e,"*")}
a.addEventListener("message",k,false)}else if(u(d)){v=new d
b=v.port2
v.port1.onmessage=k
y=n(b.postMessage,b,1)}else if(m in o("script")){y=function(e){c.appendChild(o("script"))[m]=function(){c.removeChild(this)
w.call(e)}}}else{y=function(e){setTimeout(n(w,e,1),0)}}}t.exports={set:f,clear:h}},{"./$":26,"./$.cof":9,"./$.ctx":14,"./$.dom-create":16,"./$.invoke":21}],41:[function(e,t,r){t.exports=function(e){try{e()
return false}catch(t){return true}}},{}],42:[function(e,t,r){var n=0
function i(e){return"Symbol(".concat(e===undefined?"":e,")_",(++n+Math.random()).toString(36))}i.safe=e("./$").g.Symbol||i
t.exports=i},{"./$":26}],43:[function(e,t,r){var n=e("./$.wks")("unscopables")
if(!(n in[]))e("./$").hide(Array.prototype,n,{})
t.exports=function(e){[][n][e]=true}},{"./$":26,"./$.wks":44}],44:[function(e,t,r){var n=e("./$").g,i=e("./$.shared")("wks")
t.exports=function(t){return i[t]||(i[t]=n.Symbol&&n.Symbol[t]||e("./$.uid").safe("Symbol."+t))}},{"./$":26,"./$.shared":35,"./$.uid":42}],45:[function(e,t,r){var $=e("./$"),n=e("./$.dom-create"),i=e("./$.cof"),s=e("./$.def"),o=e("./$.invoke"),a=e("./$.array-methods"),u=e("./$.uid").safe("__proto__"),c=e("./$.assert"),l=c.obj,f=Object.prototype,h=$.html,d=[],p=d.slice,g=d.join,m=i.classof,y=$.has,v=$.setDesc,b=$.getDesc,w=$.setDescs,k=$.isFunction,S=$.isObject,_=$.toObject,x=$.toLength,j=$.toIndex,O=false,E=e("./$.array-includes")(false),C=a(0),P=a(1),D=a(2),N=a(3),I=a(4)
if(!$.DESC){try{O=v(n("div"),"x",{get:function(){return 8}}).x==8}catch(T){}$.setDesc=function(e,t,r){if(O)try{return v(e,t,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!")
if("value"in r)l(e)[t]=r.value
return e}
$.getDesc=function(e,t){if(O)try{return b(e,t)}catch(r){}if(y(e,t))return $.desc(!f.propertyIsEnumerable.call(e,t),e[t])}
$.setDescs=w=function(e,t){l(e)
var r=$.getKeys(t),n=r.length,i=0,s
while(n>i)$.setDesc(e,s=r[i++],t[s])
return e}}s(s.S+s.F*!$.DESC,"Object",{getOwnPropertyDescriptor:$.getDesc,defineProperty:$.setDesc,defineProperties:w})
var F=("constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,"+"toLocaleString,toString,valueOf").split(","),L=F.concat("length","prototype"),A=F.length
var M=function(){var e=n("iframe"),t=A,r=">",i
e.style.display="none"
h.appendChild(e)
e.src="javascript:"
i=e.contentWindow.document
i.open()
i.write("<script>document.F=Object</script"+r)
i.close()
M=i.F
while(t--)delete M.prototype[F[t]]
return M()}
function R(e,t){return function(r){var n=_(r),i=0,s=[],o
for(o in n)if(o!=u)y(n,o)&&s.push(o)
while(t>i)if(y(n,o=e[i++])){~E(s,o)||s.push(o)}return s}}function W(){}s(s.S,"Object",{getPrototypeOf:$.getProto=$.getProto||function(e){e=Object(c.def(e))
if(y(e,u))return e[u]
if(k(e.constructor)&&e instanceof e.constructor){return e.constructor.prototype}return e instanceof Object?f:null},getOwnPropertyNames:$.getNames=$.getNames||R(L,L.length,true),create:$.create=$.create||function(e,t){var r
if(e!==null){W.prototype=l(e)
r=new W
W.prototype=null
r[u]=e}else r=M()
return t===undefined?r:w(r,t)},keys:$.getKeys=$.getKeys||R(F,A,false),seal:function U(e){return e},freeze:function V(e){return e},preventExtensions:function K(e){return e},isSealed:function J(e){return!S(e)},isFrozen:function Y(e){return!S(e)},isExtensible:function X(e){return S(e)}})
s(s.P,"Function",{bind:function(e){var t=c.fn(this),r=p.call(arguments,1)
function n(){var i=r.concat(p.call(arguments)),s=this instanceof n,a=s?$.create(t.prototype):e,u=o(t,i,a)
return s?a:u}if(t.prototype)n.prototype=t.prototype
return n}})
if(!(0 in Object("z")&&"z"[0]=="z")){$.ES5Object=function(e){return i(e)=="String"?e.split(""):Object(e)}}var B=true
try{if(h)p.call(h)
B=false}catch(T){}s(s.P+s.F*B,"Array",{slice:function Z(e,t){var r=x(this.length),n=i(this)
t=t===undefined?r:t
if(n=="Array")return p.call(this,e,t)
var s=j(e,r),o=j(t,r),a=x(o-s),u=Array(a),c=0
for(;c<a;c++)u[c]=n=="String"?this.charAt(s+c):this[s+c]
return u}})
s(s.P+s.F*($.ES5Object!=Object),"Array",{join:function Q(){return g.apply($.ES5Object(this),arguments)}})
s(s.S,"Array",{isArray:function(e){return i(e)=="Array"}})
function G(e){return function(t,r){c.fn(t)
var n=_(this),i=x(n.length),s=e?i-1:0,o=e?-1:1
if(arguments.length<2)for(;;){if(s in n){r=n[s]
s+=o
break}s+=o
c(e?s>=0:i>s,"Reduce of empty array with no initial value")}for(;e?s>=0:i>s;s+=o)if(s in n){r=t(r,n[s],s,this)}return r}}s(s.P,"Array",{forEach:$.each=$.each||function et(e){return C(this,e,arguments[1])},map:function tt(e){return P(this,e,arguments[1])},filter:function rt(e){return D(this,e,arguments[1])},some:function nt(e){return N(this,e,arguments[1])},every:function it(e){return I(this,e,arguments[1])},reduce:G(false),reduceRight:G(true),indexOf:function st(e){return E(this,e,arguments[1])},lastIndexOf:function(e,t){var r=_(this),n=x(r.length),i=n-1
if(arguments.length>1)i=Math.min(i,$.toInteger(t))
if(i<0)i=x(n+i)
for(;i>=0;i--)if(i in r)if(r[i]===e)return i
return-1}})
s(s.P,"String",{trim:e("./$.replacer")(/^\s*([\s\S]*\S)?\s*$/,"$1")})
s(s.S,"Date",{now:function(){return+new Date}})
function q(e){return e>9?e:"0"+e}var H=new Date(-5e13-1),z=!(H.toISOString&&H.toISOString()=="0385-07-25T07:06:39.999Z"&&e("./$.throws")(function(){new Date(NaN).toISOString()}))
s(s.P+s.F*z,"Date",{toISOString:function(){if(!isFinite(this))throw RangeError("Invalid time value")
var e=this,t=e.getUTCFullYear(),r=e.getUTCMilliseconds(),n=t<0?"-":t>9999?"+":""
return n+("00000"+Math.abs(t)).slice(n?-6:-4)+"-"+q(e.getUTCMonth()+1)+"-"+q(e.getUTCDate())+"T"+q(e.getUTCHours())+":"+q(e.getUTCMinutes())+":"+q(e.getUTCSeconds())+"."+(r>99?r:"0"+q(r))+"Z"}})
if(m(function(){return arguments}())=="Object")i.classof=function(e){var t=m(e)
return t=="Object"&&k(e.callee)?"Arguments":t}},{"./$":26,"./$.array-includes":5,"./$.array-methods":6,"./$.assert":7,"./$.cof":9,"./$.def":15,"./$.dom-create":16,"./$.invoke":21,"./$.replacer":32,"./$.throws":41,"./$.uid":42}],46:[function(e,t,r){"use strict"
var $=e("./$"),n=e("./$.def"),i=$.toIndex
n(n.P,"Array",{copyWithin:function s(e,t){var r=Object($.assertDefined(this)),n=$.toLength(r.length),s=i(e,n),o=i(t,n),a=arguments[2],u=a===undefined?n:i(a,n),c=Math.min(u-o,n-s),l=1
if(o<s&&s<o+c){l=-1
o=o+c-1
s=s+c-1}while(c-->0){if(o in r)r[s]=r[o]
else delete r[s]
s+=l
o+=l}return r}})
e("./$.unscope")("copyWithin")},{"./$":26,"./$.def":15,"./$.unscope":43}],47:[function(e,t,r){"use strict"
var $=e("./$"),n=e("./$.def"),i=$.toIndex
n(n.P,"Array",{fill:function s(e){var t=Object($.assertDefined(this)),r=$.toLength(t.length),n=i(arguments[1],r),s=arguments[2],o=s===undefined?r:i(s,r)
while(o>n)t[n++]=e
return t}})
e("./$.unscope")("fill")},{"./$":26,"./$.def":15,"./$.unscope":43}],48:[function(e,t,r){"use strict"
var n="findIndex",i=e("./$.def"),s=true,o=e("./$.array-methods")(6)
if(n in[])Array(1)[n](function(){s=false})
i(i.P+i.F*s,"Array",{findIndex:function a(e){return o(this,e,arguments[1])}})
e("./$.unscope")(n)},{"./$.array-methods":6,"./$.def":15,"./$.unscope":43}],49:[function(e,t,r){"use strict"
var n="find",i=e("./$.def"),s=true,o=e("./$.array-methods")(5)
if(n in[])Array(1)[n](function(){s=false})
i(i.P+i.F*s,"Array",{find:function a(e){return o(this,e,arguments[1])}})
e("./$.unscope")(n)},{"./$.array-methods":6,"./$.def":15,"./$.unscope":43}],50:[function(e,t,r){var $=e("./$"),n=e("./$.ctx"),i=e("./$.def"),s=e("./$.iter"),o=e("./$.iter-call")
i(i.S+i.F*!e("./$.iter-detect")(function(e){Array.from(e)}),"Array",{from:function a(e){var t=Object($.assertDefined(e)),r=arguments[1],i=r!==undefined,a=i?n(r,arguments[2],2):undefined,u=0,c,l,f,h
if(s.is(t)){h=s.get(t)
l=new(typeof this=="function"?this:Array)
for(;!(f=h.next()).done;u++){l[u]=i?o(h,a,[f.value,u],true):f.value}}else{l=new(typeof this=="function"?this:Array)(c=$.toLength(t.length))
for(;c>u;u++){l[u]=i?a(t[u],u):t[u]}}l.length=u
return l}})},{"./$":26,"./$.ctx":14,"./$.def":15,"./$.iter":25,"./$.iter-call":22,"./$.iter-detect":24}],51:[function(e,t,r){var $=e("./$"),n=e("./$.unscope"),i=e("./$.uid").safe("iter"),s=e("./$.iter"),o=s.step,a=s.Iterators
e("./$.iter-define")(Array,"Array",function(e,t){$.set(this,i,{o:$.toObject(e),i:0,k:t})},function(){var e=this[i],t=e.o,r=e.k,n=e.i++
if(!t||n>=t.length){e.o=undefined
return o(1)}if(r=="keys")return o(0,n)
if(r=="values")return o(0,t[n])
return o(0,[n,t[n]])},"values")
a.Arguments=a.Array
n("keys")
n("values")
n("entries")},{"./$":26,"./$.iter":25,"./$.iter-define":23,"./$.uid":42,"./$.unscope":43}],52:[function(e,t,r){var n=e("./$.def")
n(n.S,"Array",{of:function i(){var e=0,t=arguments.length,r=new(typeof this=="function"?this:Array)(t)
while(t>e)r[e]=arguments[e++]
r.length=t
return r}})},{"./$.def":15}],53:[function(e,t,r){e("./$.species")(Array)},{"./$.species":36}],54:[function(e,t,r){var $=e("./$"),n=e("./$.wks")("hasInstance"),i=Function.prototype
if(!(n in i))$.setDesc(i,n,{value:function(e){if(!$.isFunction(this)||!$.isObject(e))return false
if(!$.isObject(this.prototype))return e instanceof this
while(e=$.getProto(e))if(this.prototype===e)return true
return false}})},{"./$":26,"./$.wks":44}],55:[function(e,t,r){"use strict"
var $=e("./$"),n="name",i=$.setDesc,s=Function.prototype
n in s||$.FW&&$.DESC&&i(s,n,{configurable:true,get:function(){var e=String(this).match(/^\s*function ([^ (]*)/),t=e?e[1]:""
$.has(this,n)||i(this,n,$.desc(5,t))
return t},set:function(e){$.has(this,n)||i(this,n,$.desc(0,e))}})},{"./$":26}],56:[function(e,t,r){"use strict"
var n=e("./$.collection-strong")
e("./$.collection")("Map",function(e){return function t(){return e(this,arguments[0])}},{get:function i(e){var t=n.getEntry(this,e)
return t&&t.v},set:function s(e,t){return n.def(this,e===0?0:e,t)}},n,true)},{"./$.collection":13,"./$.collection-strong":10}],57:[function(e,t,r){var n=1/0,i=e("./$.def"),s=Math.E,o=Math.pow,a=Math.abs,u=Math.exp,c=Math.log,l=Math.sqrt,f=Math.ceil,h=Math.floor,d=o(2,-52),p=o(2,-23),g=o(2,127)*(2-p),m=o(2,-126)
function y(e){return e+1/d-1/d}function v(e){return(e=+e)==0||e!=e?e:e<0?-1:1}function b(e){return!isFinite(e=+e)||e==0?e:e<0?-b(-e):c(e+l(e*e+1))}function w(e){return(e=+e)==0?e:e>-1e-6&&e<1e-6?e+e*e/2:u(e)-1}i(i.S,"Math",{acosh:function k(e){return(e=+e)<1?NaN:isFinite(e)?c(e/s+l(e+1)*l(e-1)/s)+1:e},asinh:b,atanh:function S(e){return(e=+e)==0?e:c((1+e)/(1-e))/2},cbrt:function _(e){return v(e=+e)*o(a(e),1/3)},clz32:function x(e){return(e>>>=0)?31-h(c(e+.5)*Math.LOG2E):32},cosh:function j(e){return(u(e=+e)+u(-e))/2},expm1:w,fround:function O(e){var t=a(e),r=v(e),i,s
if(t<m)return r*y(t/m/p)*m*p
i=(1+p/d)*t
s=i-(i-t)
if(s>g||s!=s)return r*n
return r*s},hypot:function E(e,t){var r=0,i=0,s=arguments.length,o=0,u,c
while(i<s){u=a(arguments[i++])
if(o<u){c=o/u
r=r*c*c+1
o=u}else if(u>0){c=u/o
r+=c*c}else r+=u}return o===n?n:o*l(r)},imul:function C(e,t){var r=65535,n=+e,i=+t,s=r&n,o=r&i
return 0|s*o+((r&n>>>16)*o+s*(r&i>>>16)<<16>>>0)},log1p:function P(e){return(e=+e)>-1e-8&&e<1e-8?e-e*e/2:c(1+e)},log10:function D(e){return c(e)/Math.LN10},log2:function N(e){return c(e)/Math.LN2},sign:v,sinh:function I(e){return a(e=+e)<1?(w(e)-w(-e))/2:(u(e-1)-u(-e-1))*(s/2)},tanh:function T(e){var t=w(e=+e),r=w(-e)
return t==n?1:r==n?-1:(t-r)/(u(e)+u(-e))},trunc:function F(e){return(e>0?h:f)(e)}})},{"./$.def":15}],58:[function(e,t,r){"use strict"
var $=e("./$"),n=$.isObject,i=$.isFunction,s="Number",o=$.g[s],a=o,u=o.prototype
function c(e){var t,r
if(i(t=e.valueOf)&&!n(r=t.call(e)))return r
if(i(t=e.toString)&&!n(r=t.call(e)))return r
throw TypeError("Can't convert object to number")}function l(e){if(n(e))e=c(e)
if(typeof e=="string"&&e.length>2&&e.charCodeAt(0)==48){var t=false
switch(e.charCodeAt(1)){case 66:case 98:t=true
case 79:case 111:return parseInt(e.slice(2),t?2:8)}}return+e}if($.FW&&!(o("0o1")&&o("0b1"))){o=function f(e){return this instanceof o?new a(l(e)):l(e)}
$.each.call($.DESC?$.getNames(a):("MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,"+"EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,"+"MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger").split(","),function(e){if($.has(a,e)&&!$.has(o,e)){$.setDesc(o,e,$.getDesc(a,e))}})
o.prototype=u
u.constructor=o
e("./$.redef")($.g,s,o)}},{"./$":26,"./$.redef":31}],59:[function(e,t,r){var $=e("./$"),n=e("./$.def"),i=Math.abs,s=Math.floor,o=$.g.isFinite,a=9007199254740991
function u(e){return!$.isObject(e)&&o(e)&&s(e)===e}n(n.S,"Number",{EPSILON:Math.pow(2,-52),isFinite:function c(e){return typeof e=="number"&&o(e)},isInteger:u,isNaN:function l(e){return e!=e},isSafeInteger:function f(e){return u(e)&&i(e)<=a},MAX_SAFE_INTEGER:a,MIN_SAFE_INTEGER:-a,parseFloat:parseFloat,parseInt:parseInt})},{"./$":26,"./$.def":15}],60:[function(e,t,r){var n=e("./$.def")
n(n.S,"Object",{assign:e("./$.assign")})},{"./$.assign":8,"./$.def":15}],61:[function(e,t,r){var n=e("./$.def")
n(n.S,"Object",{is:e("./$.same")})},{"./$.def":15,"./$.same":33}],62:[function(e,t,r){var n=e("./$.def")
n(n.S,"Object",{setPrototypeOf:e("./$.set-proto").set})},{"./$.def":15,"./$.set-proto":34}],63:[function(e,t,r){var $=e("./$"),n=e("./$.def"),i=$.isObject,s=$.toObject
$.each.call(("freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,"+"getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames").split(","),function(t,r){var o=($.core.Object||{})[t]||Object[t],a=0,u={}
u[t]=r==0?function l(e){return i(e)?o(e):e}:r==1?function f(e){return i(e)?o(e):e}:r==2?function h(e){return i(e)?o(e):e}:r==3?function d(e){return i(e)?o(e):true}:r==4?function p(e){return i(e)?o(e):true}:r==5?function g(e){return i(e)?o(e):false}:r==6?function m(e,t){return o(s(e),t)}:r==7?function y(e){return o(Object($.assertDefined(e)))}:r==8?function v(e){return o(s(e))}:e("./$.get-names").get
try{o("z")}catch(c){a=1}n(n.S+n.F*a,"Object",u)})},{"./$":26,"./$.def":15,"./$.get-names":20}],64:[function(e,t,r){"use strict"
var n=e("./$.cof"),i={}
i[e("./$.wks")("toStringTag")]="z"
if(e("./$").FW&&n(i)!="z"){e("./$.redef")(Object.prototype,"toString",function s(){return"[object "+n.classof(this)+"]"},true)}},{"./$":26,"./$.cof":9,"./$.redef":31,"./$.wks":44}],65:[function(e,t,r){"use strict"
var $=e("./$"),n=e("./$.ctx"),i=e("./$.cof"),s=e("./$.def"),o=e("./$.assert"),a=e("./$.for-of"),u=e("./$.set-proto").set,c=e("./$.same"),l=e("./$.species"),f=e("./$.wks")("species"),h=e("./$.uid").safe("record"),d="Promise",p=$.g,g=p.process,m=i(g)=="process",y=g&&g.nextTick||e("./$.task").set,v=p[d],b=$.isFunction,w=$.isObject,k=o.fn,S=o.obj,_
function x(e){var t=new v(function(){})
if(e)t.constructor=Object
return v.resolve(t)===t}var j=function(){var e=false
function t(e){var r=new v(e)
u(r,t.prototype)
return r}try{e=b(v)&&b(v.resolve)&&x()
u(t,v)
t.prototype=$.create(v.prototype,{constructor:{value:t}})
if(!(t.resolve(5).then(function(){})instanceof t)){e=false}if(e&&$.DESC){var r=false
v.resolve($.setDesc({},"then",{get:function(){r=true}}))
e=r}}catch(n){e=false}return e}()
function O(e){return w(e)&&(j?i.classof(e)=="Promise":h in e)}function E(e,t){if(!$.FW&&e===v&&t===_)return true
return c(e,t)}function C(e){var t=S(e)[f]
return t!=undefined?t:e}function P(e){var t
if(w(e))t=e.then
return b(t)?t:false}function D(e){var t=e.c
if(t.length)y.call(p,function(){var r=e.v,n=e.s==1,i=0
function s(t){var i=n?t.ok:t.fail,s,o
try{if(i){if(!n)e.h=true
s=i===true?r:i(r)
if(s===t.P){t.rej(TypeError("Promise-chain cycle"))}else if(o=P(s)){o.call(s,t.res,t.rej)}else t.res(s)}else t.rej(r)}catch(a){t.rej(a)}}while(t.length>i)s(t[i++])
t.length=0})}function N(e){var t=e[h],r=t.a||t.c,n=0,i
if(t.h)return false
while(r.length>n){i=r[n++]
if(i.fail||!N(i.P))return false}return true}function I(e){var t=this,r
if(t.d)return
t.d=true
t=t.r||t
t.v=e
t.s=2
t.a=t.c.slice()
setTimeout(function(){y.call(p,function(){if(N(r=t.p)){if(m){g.emit("unhandledRejection",e,r)}else if(p.console&&console.error){console.error("Unhandled promise rejection",e)}}t.a=undefined})},1)
D(t)}function T(e){var t=this,r
if(t.d)return
t.d=true
t=t.r||t
try{if(r=P(e)){y.call(p,function(){var i={r:t,d:false}
try{r.call(e,n(T,i,1),n(I,i,1))}catch(s){I.call(i,s)}})}else{t.v=e
t.s=1
D(t)}}catch(i){I.call({r:t,d:false},i)}}if(!j){v=function F(e){k(e)
var t={p:o.inst(this,v,d),c:[],a:undefined,s:0,d:false,v:undefined,h:false}
$.hide(this,h,t)
try{e(n(T,t,1),n(I,t,1))}catch(r){I.call(t,r)}}
e("./$.mix")(v.prototype,{then:function L(e,t){var r=S(S(this).constructor)[f]
var n={ok:b(e)?e:true,fail:b(t)?t:false}
var i=n.P=new(r!=undefined?r:v)(function(e,t){n.res=k(e)
n.rej=k(t)})
var s=this[h]
s.c.push(n)
if(s.a)s.a.push(n)
if(s.s)D(s)
return i},"catch":function(e){return this.then(undefined,e)}})}s(s.G+s.W+s.F*!j,{Promise:v})
i.set(v,d)
l(v)
l(_=$.core[d])
s(s.S+s.F*!j,d,{reject:function A(e){return new(C(this))(function(t,r){r(e)})}})
s(s.S+s.F*(!j||x(true)),d,{resolve:function M(e){return O(e)&&E(e.constructor,this)?e:new this(function(t){t(e)})}})
s(s.S+s.F*!(j&&e("./$.iter-detect")(function(e){v.all(e)["catch"](function(){})})),d,{all:function R(e){var t=C(this),r=[]
return new t(function(n,i){a(e,false,r.push,r)
var s=r.length,o=Array(s)
if(s)$.each.call(r,function(e,r){t.resolve(e).then(function(e){o[r]=e;--s||n(o)},i)})
else n(o)})},race:function W(e){var t=C(this)
return new t(function(r,n){a(e,false,function(e){t.resolve(e).then(r,n)})})}})},{"./$":26,"./$.assert":7,"./$.cof":9,"./$.ctx":14,"./$.def":15,"./$.for-of":18,"./$.iter-detect":24,"./$.mix":28,"./$.same":33,"./$.set-proto":34,"./$.species":36,"./$.task":40,"./$.uid":42,"./$.wks":44}],66:[function(e,t,r){var $=e("./$"),n=e("./$.def"),i=e("./$.set-proto"),s=e("./$.iter"),o=e("./$.wks")("iterator"),a=e("./$.uid").safe("iter"),u=s.step,c=e("./$.assert"),l=$.isObject,f=$.getProto,h=$.g.Reflect,d=Function.apply,p=c.obj,g=Object.isExtensible||l,m=Object.preventExtensions,y=!(h&&h.enumerate&&o in h.enumerate({}))
function v(e){$.set(this,a,{o:e,k:undefined,i:0})}s.create(v,"Object",function(){var e=this[a],t=e.k,r
if(t==undefined){e.k=t=[]
for(r in e.o)t.push(r)}do{if(e.i>=t.length)return u(1)}while(!((r=t[e.i++])in e.o))
return u(0,r)})
var b={apply:function w(e,t,r){return d.call(e,t,r)},construct:function k(e,t){var r=c.fn(arguments.length<3?e:arguments[2]).prototype,n=$.create(l(r)?r:Object.prototype),i=d.call(e,n,t)
return l(i)?i:n},defineProperty:function S(e,t,r){p(e)
try{$.setDesc(e,t,r)
return true}catch(n){return false}},deleteProperty:function _(e,t){var r=$.getDesc(p(e),t)
return r&&!r.configurable?false:delete e[t]},get:function x(e,t){var r=arguments.length<3?e:arguments[2],n=$.getDesc(p(e),t),i
if(n)return $.has(n,"value")?n.value:n.get===undefined?undefined:n.get.call(r)
return l(i=f(e))?x(i,t,r):undefined},getOwnPropertyDescriptor:function j(e,t){return $.getDesc(p(e),t)},getPrototypeOf:function O(e){return f(p(e))},has:function E(e,t){return t in e},isExtensible:function C(e){return g(p(e))},ownKeys:e("./$.own-keys"),preventExtensions:function P(e){p(e)
try{if(m)m(e)
return true}catch(t){return false}},set:function D(e,t,r){var n=arguments.length<4?e:arguments[3],i=$.getDesc(p(e),t),s,o
if(!i){if(l(o=f(e))){return D(o,t,r,n)}i=$.desc(0)}if($.has(i,"value")){if(i.writable===false||!l(n))return false
s=$.getDesc(n,t)||$.desc(0)
s.value=r
$.setDesc(n,t,s)
return true}return i.set===undefined?false:(i.set.call(n,r),true)}}
if(i)b.setPrototypeOf=function N(e,t){i.check(e,t)
try{i.set(e,t)
return true}catch(r){return false}}
n(n.G,{Reflect:{}})
n(n.S+n.F*y,"Reflect",{enumerate:function I(e){return new v(p(e))}})
n(n.S,"Reflect",b)},{"./$":26,"./$.assert":7,"./$.def":15,"./$.iter":25,"./$.own-keys":29,"./$.set-proto":34,"./$.uid":42,"./$.wks":44}],67:[function(e,t,r){var $=e("./$"),n=e("./$.cof"),i=$.g.RegExp,s=i,o=i.prototype,a=/a/g,u=new i(a)!==a,c=function(){try{return i(a,"i")=="/a/i"}catch(e){}}()
if($.FW&&$.DESC){if(!u||!c){i=function l(e,t){var r=n(e)=="RegExp",o=t===undefined
if(!(this instanceof i)&&r&&o)return e
return u?new s(r&&!o?e.source:e,t):new s(r?e.source:e,r&&o?e.flags:t)}
$.each.call($.getNames(s),function(e){e in i||$.setDesc(i,e,{configurable:true,get:function(){return s[e]},set:function(t){s[e]=t}})})
o.constructor=i
i.prototype=o
e("./$.redef")($.g,"RegExp",i)}if(/./g.flags!="g")$.setDesc(o,"flags",{configurable:true,get:e("./$.replacer")(/^.*\/(\w*)$/,"$1")})}e("./$.species")(i)},{"./$":26,"./$.cof":9,"./$.redef":31,"./$.replacer":32,"./$.species":36}],68:[function(e,t,r){"use strict"
var n=e("./$.collection-strong")
e("./$.collection")("Set",function(e){return function t(){return e(this,arguments[0])}},{add:function i(e){return n.def(this,e=e===0?0:e,e)}},n)},{"./$.collection":13,"./$.collection-strong":10}],69:[function(e,t,r){"use strict"
var n=e("./$.def"),i=e("./$.string-at")(false)
n(n.P,"String",{codePointAt:function s(e){return i(this,e)}})},{"./$.def":15,"./$.string-at":37}],70:[function(e,t,r){"use strict"
var $=e("./$"),n=e("./$.cof"),i=e("./$.def"),s=$.toLength
i(i.P+i.F*!e("./$.throws")(function(){"q".endsWith(/./)}),"String",{endsWith:function o(e){if(n(e)=="RegExp")throw TypeError()
var t=String($.assertDefined(this)),r=arguments[1],i=s(t.length),o=r===undefined?i:Math.min(s(r),i)
e+=""
return t.slice(o-e.length,o)===e}})},{"./$":26,"./$.cof":9,"./$.def":15,"./$.throws":41}],71:[function(e,t,r){var n=e("./$.def"),i=e("./$").toIndex,s=String.fromCharCode,o=String.fromCodePoint
n(n.S+n.F*(!!o&&o.length!=1),"String",{fromCodePoint:function a(e){var t=[],r=arguments.length,n=0,o
while(r>n){o=+arguments[n++]
if(i(o,1114111)!==o)throw RangeError(o+" is not a valid code point")
t.push(o<65536?s(o):s(((o-=65536)>>10)+55296,o%1024+56320))}return t.join("")}})},{"./$":26,"./$.def":15}],72:[function(e,t,r){"use strict"
var $=e("./$"),n=e("./$.cof"),i=e("./$.def")
i(i.P,"String",{includes:function s(e){if(n(e)=="RegExp")throw TypeError()
return!!~String($.assertDefined(this)).indexOf(e,arguments[1])}})},{"./$":26,"./$.cof":9,"./$.def":15}],73:[function(e,t,r){var n=e("./$").set,i=e("./$.string-at")(true),s=e("./$.uid").safe("iter"),o=e("./$.iter"),a=o.step
e("./$.iter-define")(String,"String",function(e){n(this,s,{o:String(e),i:0})},function(){var e=this[s],t=e.o,r=e.i,n
if(r>=t.length)return a(1)
n=i(t,r)
e.i+=n.length
return a(0,n)})},{"./$":26,"./$.iter":25,"./$.iter-define":23,"./$.string-at":37,"./$.uid":42}],74:[function(e,t,r){var $=e("./$"),n=e("./$.def")
n(n.S,"String",{raw:function i(e){var t=$.toObject(e.raw),r=$.toLength(t.length),n=arguments.length,i=[],s=0
while(r>s){i.push(String(t[s++]))
if(s<n)i.push(String(arguments[s]))}return i.join("")}})},{"./$":26,"./$.def":15}],75:[function(e,t,r){var n=e("./$.def")
n(n.P,"String",{repeat:e("./$.string-repeat")})},{"./$.def":15,"./$.string-repeat":39}],76:[function(e,t,r){"use strict"
var $=e("./$"),n=e("./$.cof"),i=e("./$.def")
i(i.P+i.F*!e("./$.throws")(function(){"q".startsWith(/./)}),"String",{startsWith:function s(e){if(n(e)=="RegExp")throw TypeError()
var t=String($.assertDefined(this)),r=$.toLength(Math.min(arguments[1],t.length))
e+=""
return t.slice(r,r+e.length)===e}})},{"./$":26,"./$.cof":9,"./$.def":15,"./$.throws":41}],77:[function(e,t,r){"use strict"
var $=e("./$"),n=e("./$.cof").set,i=e("./$.uid"),s=e("./$.shared"),o=e("./$.def"),a=e("./$.redef"),u=e("./$.keyof"),c=e("./$.enum-keys"),l=e("./$.assert").obj,f=Object.prototype,h=$.DESC,d=$.has,p=$.create,g=$.getDesc,m=$.setDesc,y=$.desc,v=e("./$.get-names"),b=v.get,w=$.toObject,k=$.g.Symbol,S=false,_=i("tag"),x=i("hidden"),j={}.propertyIsEnumerable,O=s("symbol-registry"),E=s("symbols"),C=$.isFunction(k)
var P=h?function(){try{return p(m({},x,{get:function(){return m(this,x,{value:false})[x]}}))[x]||m}catch(e){return function(e,t,r){var n=g(f,t)
if(n)delete f[t]
m(e,t,r)
if(n&&e!==f)m(f,t,n)}}}():m
function D(e){var t=E[e]=$.set(p(k.prototype),_,e)
h&&S&&P(f,e,{configurable:true,set:function(t){if(d(this,x)&&d(this[x],e))this[x][e]=false
P(this,e,y(1,t))}})
return t}function N(e,t,r){if(r&&d(E,t)){if(!r.enumerable){if(!d(e,x))m(e,x,y(1,{}))
e[x][t]=true}else{if(d(e,x)&&e[x][t])e[x][t]=false
r=p(r,{enumerable:y(0,false)})}return P(e,t,r)}return m(e,t,r)}function I(e,t){l(e)
var r=c(t=w(t)),n=0,i=r.length,s
while(i>n)N(e,s=r[n++],t[s])
return e}function T(e,t){return t===undefined?p(e):I(p(e),t)}function F(e){var t=j.call(this,e)
return t||!d(this,e)||!d(E,e)||d(this,x)&&this[x][e]?t:true}function L(e,t){var r=g(e=w(e),t)
if(r&&d(E,t)&&!(d(e,x)&&e[x][t]))r.enumerable=true
return r}function A(e){var t=b(w(e)),r=[],n=0,i
while(t.length>n)if(!d(E,i=t[n++])&&i!=x)r.push(i)
return r}function M(e){var t=b(w(e)),r=[],n=0,i
while(t.length>n)if(d(E,i=t[n++]))r.push(E[i])
return r}if(!C){k=function W(){if(this instanceof k)throw TypeError("Symbol is not a constructor")
return D(i(arguments[0]))}
a(k.prototype,"toString",function(){return this[_]})
$.create=T
$.setDesc=N
$.getDesc=L
$.setDescs=I
$.getNames=v.get=A
$.getSymbols=M
if($.DESC&&$.FW)a(f,"propertyIsEnumerable",F,true)}var R={"for":function(e){return d(O,e+="")?O[e]:O[e]=k(e)},keyFor:function B(e){return u(O,e)},useSetter:function(){S=true},useSimple:function(){S=false}}
$.each.call(("hasInstance,isConcatSpreadable,iterator,match,replace,search,"+"species,split,toPrimitive,toStringTag,unscopables").split(","),function(t){var r=e("./$.wks")(t)
R[t]=C?r:D(r)})
S=true
o(o.G+o.W,{Symbol:k})
o(o.S,"Symbol",R)
o(o.S+o.F*!C,"Object",{create:T,defineProperty:N,defineProperties:I,getOwnPropertyDescriptor:L,getOwnPropertyNames:A,getOwnPropertySymbols:M})
n(k,"Symbol")
n(Math,"Math",true)
n($.g.JSON,"JSON",true)},{"./$":26,"./$.assert":7,"./$.cof":9,"./$.def":15,"./$.enum-keys":17,"./$.get-names":20,"./$.keyof":27,"./$.redef":31,"./$.shared":35,"./$.uid":42,"./$.wks":44}],78:[function(e,t,r){"use strict"
var $=e("./$"),n=e("./$.collection-weak"),i=n.leakStore,s=n.ID,o=n.WEAK,a=$.has,u=$.isObject,c=Object.isExtensible||u,l={}
var f=e("./$.collection")("WeakMap",function(e){return function t(){return e(this,arguments[0])}},{get:function h(e){if(u(e)){if(!c(e))return i(this).get(e)
if(a(e,o))return e[o][this[s]]}},set:function d(e,t){return n.def(this,e,t)}},n,true,true)
if((new f).set((Object.freeze||Object)(l),7).get(l)!=7){$.each.call(["delete","has","get","set"],function(t){var r=f.prototype,n=r[t]
e("./$.redef")(r,t,function(e,r){if(u(e)&&!c(e)){var s=i(this)[t](e,r)
return t=="set"?this:s}return n.call(this,e,r)})})}},{"./$":26,"./$.collection":13,"./$.collection-weak":12,"./$.redef":31}],79:[function(e,t,r){"use strict"
var n=e("./$.collection-weak")
e("./$.collection")("WeakSet",function(e){return function t(){return e(this,arguments[0])}},{add:function i(e){return n.def(this,e,true)}},n,false,true)},{"./$.collection":13,"./$.collection-weak":12}],80:[function(e,t,r){"use strict"
var n=e("./$.def"),i=e("./$.array-includes")(true)
n(n.P,"Array",{includes:function s(e){return i(this,e,arguments[1])}})
e("./$.unscope")("includes")},{"./$.array-includes":5,"./$.def":15,"./$.unscope":43}],81:[function(e,t,r){e("./$.collection-to-json")("Map")},{"./$.collection-to-json":11}],82:[function(e,t,r){var $=e("./$"),n=e("./$.def"),i=e("./$.own-keys")
n(n.S,"Object",{getOwnPropertyDescriptors:function s(e){var t=$.toObject(e),r={}
$.each.call(i(t),function(e){$.setDesc(r,e,$.desc(0,$.getDesc(t,e)))})
return r}})},{"./$":26,"./$.def":15,"./$.own-keys":29}],83:[function(e,t,r){var $=e("./$"),n=e("./$.def")
function i(e){return function(t){var r=$.toObject(t),n=$.getKeys(r),i=n.length,s=0,o=Array(i),a
if(e)while(i>s)o[s]=[a=n[s++],r[a]]
else while(i>s)o[s]=r[n[s++]]
return o}}n(n.S,"Object",{values:i(false),entries:i(true)})},{"./$":26,"./$.def":15}],84:[function(e,t,r){var n=e("./$.def")
n(n.S,"RegExp",{escape:e("./$.replacer")(/[\\^$*+?.()|[\]{}]/g,"\\$&",true)})},{"./$.def":15,"./$.replacer":32}],85:[function(e,t,r){e("./$.collection-to-json")("Set")},{"./$.collection-to-json":11}],86:[function(e,t,r){"use strict"
var n=e("./$.def"),i=e("./$.string-at")(true)
n(n.P,"String",{at:function s(e){return i(this,e)}})},{"./$.def":15,"./$.string-at":37}],87:[function(e,t,r){"use strict"
var n=e("./$.def"),i=e("./$.string-pad")
n(n.P,"String",{lpad:function s(e){return i(this,e,arguments[1],true)}})},{"./$.def":15,"./$.string-pad":38}],88:[function(e,t,r){"use strict"
var n=e("./$.def"),i=e("./$.string-pad")
n(n.P,"String",{rpad:function s(e){return i(this,e,arguments[1],false)}})},{"./$.def":15,"./$.string-pad":38}],89:[function(e,t,r){var $=e("./$"),n=e("./$.def"),i=$.core.Array||Array,s={}
function o(t,r){$.each.call(t.split(","),function(t){if(r==undefined&&t in i)s[t]=i[t]
else if(t in[])s[t]=e("./$.ctx")(Function.call,[][t],r)})}o("pop,reverse,shift,keys,values,entries",1)
o("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3)
o("join,slice,concat,push,splice,unshift,sort,lastIndexOf,"+"reduce,reduceRight,copyWithin,fill,turn")
n(n.S,"Array",s)},{"./$":26,"./$.ctx":14,"./$.def":15}],90:[function(e,t,r){e("./es6.array.iterator")
var $=e("./$"),n=e("./$.iter").Iterators,i=e("./$.wks")("iterator"),s=n.Array,o=$.g.NodeList,a=$.g.HTMLCollection,u=o&&o.prototype,c=a&&a.prototype
if($.FW){if(o&&!(i in u))$.hide(u,i,s)
if(a&&!(i in c))$.hide(c,i,s)}n.NodeList=n.HTMLCollection=s},{"./$":26,"./$.iter":25,"./$.wks":44,"./es6.array.iterator":51}],91:[function(e,t,r){var n=e("./$.def"),i=e("./$.task")
n(n.G+n.B,{setImmediate:i.set,clearImmediate:i.clear})},{"./$.def":15,"./$.task":40}],92:[function(e,t,r){var $=e("./$"),n=e("./$.def"),i=e("./$.invoke"),s=e("./$.partial"),o=$.g.navigator,a=!!o&&/MSIE .\./.test(o.userAgent)
function u(e){return a?function(t,r){return e(i(s,[].slice.call(arguments,2),$.isFunction(t)?t:Function(t)),r)}:e}n(n.G+n.B+n.F*a,{setTimeout:u($.g.setTimeout),setInterval:u($.g.setInterval)})},{"./$":26,"./$.def":15,"./$.invoke":21,"./$.partial":30}],93:[function(e,t,r){e("./modules/es5")
e("./modules/es6.symbol")
e("./modules/es6.object.assign")
e("./modules/es6.object.is")
e("./modules/es6.object.set-prototype-of")
e("./modules/es6.object.to-string")
e("./modules/es6.object.statics-accept-primitives")
e("./modules/es6.function.name")
e("./modules/es6.function.has-instance")
e("./modules/es6.number.constructor")
e("./modules/es6.number.statics")
e("./modules/es6.math")
e("./modules/es6.string.from-code-point")
e("./modules/es6.string.raw")
e("./modules/es6.string.iterator")
e("./modules/es6.string.code-point-at")
e("./modules/es6.string.ends-with")
e("./modules/es6.string.includes")
e("./modules/es6.string.repeat")
e("./modules/es6.string.starts-with")
e("./modules/es6.array.from")
e("./modules/es6.array.of")
e("./modules/es6.array.iterator")
e("./modules/es6.array.species")
e("./modules/es6.array.copy-within")
e("./modules/es6.array.fill")
e("./modules/es6.array.find")
e("./modules/es6.array.find-index")
e("./modules/es6.regexp")
e("./modules/es6.promise")
e("./modules/es6.map")
e("./modules/es6.set")
e("./modules/es6.weak-map")
e("./modules/es6.weak-set")
e("./modules/es6.reflect")
e("./modules/es7.array.includes")
e("./modules/es7.string.at")
e("./modules/es7.string.lpad")
e("./modules/es7.string.rpad")
e("./modules/es7.regexp.escape")
e("./modules/es7.object.get-own-property-descriptors")
e("./modules/es7.object.to-array")
e("./modules/es7.map.to-json")
e("./modules/es7.set.to-json")
e("./modules/js.array.statics")
e("./modules/web.timers")
e("./modules/web.immediate")
e("./modules/web.dom.iterable")
t.exports=e("./modules/$").core},{"./modules/$":26,"./modules/es5":45,"./modules/es6.array.copy-within":46,"./modules/es6.array.fill":47,"./modules/es6.array.find":49,"./modules/es6.array.find-index":48,"./modules/es6.array.from":50,"./modules/es6.array.iterator":51,"./modules/es6.array.of":52,"./modules/es6.array.species":53,"./modules/es6.function.has-instance":54,"./modules/es6.function.name":55,"./modules/es6.map":56,"./modules/es6.math":57,"./modules/es6.number.constructor":58,"./modules/es6.number.statics":59,"./modules/es6.object.assign":60,"./modules/es6.object.is":61,"./modules/es6.object.set-prototype-of":62,"./modules/es6.object.statics-accept-primitives":63,"./modules/es6.object.to-string":64,"./modules/es6.promise":65,"./modules/es6.reflect":66,"./modules/es6.regexp":67,"./modules/es6.set":68,"./modules/es6.string.code-point-at":69,"./modules/es6.string.ends-with":70,"./modules/es6.string.from-code-point":71,"./modules/es6.string.includes":72,"./modules/es6.string.iterator":73,"./modules/es6.string.raw":74,"./modules/es6.string.repeat":75,"./modules/es6.string.starts-with":76,"./modules/es6.symbol":77,"./modules/es6.weak-map":78,"./modules/es6.weak-set":79,"./modules/es7.array.includes":80,"./modules/es7.map.to-json":81,"./modules/es7.object.get-own-property-descriptors":82,"./modules/es7.object.to-array":83,"./modules/es7.regexp.escape":84,"./modules/es7.set.to-json":85,"./modules/es7.string.at":86,"./modules/es7.string.lpad":87,"./modules/es7.string.rpad":88,"./modules/js.array.statics":89,"./modules/web.dom.iterable":90,"./modules/web.immediate":91,"./modules/web.timers":92}],94:[function(e,t,r){(function(e,r){!function(r){"use strict"
var n=Object.prototype.hasOwnProperty
var i
var s=typeof Symbol==="function"&&Symbol.iterator||"@@iterator"
var o=typeof t==="object"
var a=r.regeneratorRuntime
if(a){if(o){t.exports=a}return}a=r.regeneratorRuntime=o?t.exports:{}
function u(e,t,r,n){var i=Object.create((t||g).prototype)
i._invoke=S(e,r||null,new j(n||[]))
return i}a.wrap=u
function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}var l="suspendedStart"
var f="suspendedYield"
var h="executing"
var d="completed"
var p={}
function g(){}function m(){}function y(){}var v=y.prototype=g.prototype
m.prototype=v.constructor=y
y.constructor=m
m.displayName="GeneratorFunction"
function b(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}a.isGeneratorFunction=function(e){var t=typeof e==="function"&&e.constructor
return t?t===m||(t.displayName||t.name)==="GeneratorFunction":false}
a.mark=function(e){e.__proto__=y
e.prototype=Object.create(v)
return e}
a.awrap=function(e){return new w(e)}
function w(e){this.arg=e}function k(t){function r(e,r){var s=t[e](r)
var o=s.value
return o instanceof w?Promise.resolve(o.arg).then(n,i):Promise.resolve(o).then(function(e){s.value=e
return s})}if(typeof e==="object"&&e.domain){r=e.domain.bind(r)}var n=r.bind(t,"next")
var i=r.bind(t,"throw")
var s=r.bind(t,"return")
var o
function a(e,t){var n=o?o.then(function(){return r(e,t)}):new Promise(function(n){n(r(e,t))})
o=n["catch"](function(e){})
return n}this._invoke=a}b(k.prototype)
a.async=function(e,t,r,n){var i=new k(u(e,t,r,n))
return a.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})}
function S(e,t,r){var n=l
return function s(o,a){if(n===h){throw new Error("Generator is already running")}if(n===d){if(o==="throw"){throw a}return E()}while(true){var u=r.delegate
if(u){if(o==="return"||o==="throw"&&u.iterator[o]===i){r.delegate=null
var g=u.iterator["return"]
if(g){var m=c(g,u.iterator,a)
if(m.type==="throw"){o="throw"
a=m.arg
continue}}if(o==="return"){continue}}var m=c(u.iterator[o],u.iterator,a)
if(m.type==="throw"){r.delegate=null
o="throw"
a=m.arg
continue}o="next"
a=i
var y=m.arg
if(y.done){r[u.resultName]=y.value
r.next=u.nextLoc}else{n=f
return y}r.delegate=null}if(o==="next"){if(n===f){r.sent=a}else{r.sent=i}}else if(o==="throw"){if(n===l){n=d
throw a}if(r.dispatchException(a)){o="next"
a=i}}else if(o==="return"){r.abrupt("return",a)}n=h
var m=c(e,t,r)
if(m.type==="normal"){n=r.done?d:f
var y={value:m.arg,done:r.done}
if(m.arg===p){if(r.delegate&&o==="next"){a=i}}else{return y}}else if(m.type==="throw"){n=d
o="throw"
a=m.arg}}}}b(v)
v[s]=function(){return this}
v.toString=function(){return"[object Generator]"}
function _(e){var t={tryLoc:e[0]}
if(1 in e){t.catchLoc=e[1]}if(2 in e){t.finallyLoc=e[2]
t.afterLoc=e[3]}this.tryEntries.push(t)}function x(e){var t=e.completion||{}
t.type="normal"
delete t.arg
e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}]
e.forEach(_,this)
this.reset(true)}a.keys=function(e){var t=[]
for(var r in e){t.push(r)}t.reverse()
return function n(){while(t.length){var r=t.pop()
if(r in e){n.value=r
n.done=false
return n}}n.done=true
return n}}
function O(e){if(e){var t=e[s]
if(t){return t.call(e)}if(typeof e.next==="function"){return e}if(!isNaN(e.length)){var r=-1,o=function a(){while(++r<e.length){if(n.call(e,r)){a.value=e[r]
a.done=false
return a}}a.value=i
a.done=true
return a}
return o.next=o}}return{next:E}}a.values=O
function E(){return{value:i,done:true}}j.prototype={constructor:j,reset:function(e){this.prev=0
this.next=0
this.sent=i
this.done=false
this.delegate=null
this.tryEntries.forEach(x)
if(!e){for(var t in this){if(t.charAt(0)==="t"&&n.call(this,t)&&!isNaN(+t.slice(1))){this[t]=i}}}},stop:function(){this.done=true
var e=this.tryEntries[0]
var t=e.completion
if(t.type==="throw"){throw t.arg}return this.rval},dispatchException:function(e){if(this.done){throw e}var t=this
function r(r,n){o.type="throw"
o.arg=e
t.next=r
return!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i]
var o=s.completion
if(s.tryLoc==="root"){return r("end")}if(s.tryLoc<=this.prev){var a=n.call(s,"catchLoc")
var u=n.call(s,"finallyLoc")
if(a&&u){if(this.prev<s.catchLoc){return r(s.catchLoc,true)}else if(this.prev<s.finallyLoc){return r(s.finallyLoc)}}else if(a){if(this.prev<s.catchLoc){return r(s.catchLoc,true)}}else if(u){if(this.prev<s.finallyLoc){return r(s.finallyLoc)}}else{throw new Error("try statement without catch or finally")}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r]
if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i
break}}if(s&&(e==="break"||e==="continue")&&s.tryLoc<=t&&t<=s.finallyLoc){s=null}var o=s?s.completion:{}
o.type=e
o.arg=t
if(s){this.next=s.finallyLoc}else{this.complete(o)}return p},complete:function(e,t){if(e.type==="throw"){throw e.arg}if(e.type==="break"||e.type==="continue"){this.next=e.arg}else if(e.type==="return"){this.rval=e.arg
this.next="end"}else if(e.type==="normal"&&t){this.next=t}},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.finallyLoc===e){this.complete(r.completion,r.afterLoc)
x(r)
return p}}},"catch":function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.tryLoc===e){var n=r.completion
if(n.type==="throw"){var i=n.arg
x(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){this.delegate={iterator:O(e),resultName:t,nextLoc:r}
return p}}}(typeof r==="object"?r:typeof window==="object"?window:typeof self==="object"?self:this)}).call(this,e("_process"),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{_process:4}]},{},[1])
__KA_exports.OutputImages = OutputImages;
__KA_exports.ScratchpadRecord = ScratchpadRecord;
__KA_exports.ScratchpadConfig = ScratchpadConfig;
this.ScratchpadConfig = ScratchpadConfig;
this.OutputImages = OutputImages;
this.ScratchpadRecord = ScratchpadRecord;
});
KAdefine("third_party/javascript-khansrc/live-editor/build/js/live-editor.output.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../../../javascript/shared-package/i18n.js");
__KA_require("../../../../../javascript/node_modules/jquery/index.js");
__KA_require("../../../../../javascript/node_modules/underscore/index.js");
__KA_require("../../../../../javascript/node_modules/backbone/index.js");
__KA_require("../../../handlebars/handlebars.runtime.js");
__KA_require("./live-editor.shared.js");
var PooledWorker=function t(e,s){this.pool=[]
this.curID=0
this.filename=e
this.onExec=s||function(){}}
PooledWorker.prototype.getURL=function(){return this.workersDir+this.filename+"?cachebust=G"+(new Date).toDateString()}
PooledWorker.prototype.getWorkerFromPool=function(){var t=this.pool.shift()
if(!t){t=new window.Worker(this.getURL())}this.curID+=1
t.id=this.curID
return t}
PooledWorker.prototype.isCurrentWorker=function(t){return this.curID===t.id}
PooledWorker.prototype.addWorkerToPool=function(t){this.pool.push(t)}
PooledWorker.prototype.exec=function(){this.onExec.apply(this,arguments)}
PooledWorker.prototype.kill=function(){this.pool.forEach(function(t){t.terminate()},this)
this.pool=[]}
window.OutputTester=function(){}
OutputTester.prototype={initialize:function e(t){var e=this
this.tests=[]
this.testContext={}
for(var s in this.testMethods){if(this.testMethods.hasOwnProperty(s)){this.testContext[s]=this.testMethods[s]}}for(var s in this.defaultTestContext){if(!(s in this.testContext)){this.testContext[s]=this.defaultTestContext[s]}}if(typeof PooledWorker==="undefined"){return}this.testWorker=new PooledWorker(t.workerFile,function(t,s,i,r){var n=this
try{e.exec(s)}catch(o){if(window.console){console.warn(o.message)}return}if(!window.Worker||i.length>0){return e.test(t,s,i,r)}var u=this.getWorkerFromPool()
u.onmessage=function(t){if(t.data.type==="test"){n.addWorkerToPool(u)
if(n.isCurrentWorker(u)){var e=t.data.message
r(e.errors,e.testResults)}}}
u.postMessage({code:t,validate:s,errors:i,externalsDir:this.externalsDir})})},bindTestContext:function s(t){t=t||this.testContext
for(var e in t){if(typeof t[e]==="object"){this.bindTestContext(t[e])}else if(typeof t[e]==="function"){t[e]=t[e].bind(this)}}},test:function i(t,e,s,r){var n=[]
s=this.errors=s||[]
this.userCode=t
this.tests=[]
this.exec(e)
this.curTask=null
this.curTest=null
for(var o=0;o<this.tests.length;o++){n.push(this.runTest(this.tests[o],o))}r(s,n)},runTest:function r(t,e){var s={name:t.name,state:"pass",results:[]}
this.curTest=s
t.fn.call(this)
this.curTest=null
return s},exec:function n(t){if(!t){return true}t="with(arguments[0]){\n"+t+"\n}"
new Function(t).call({},this.testContext)
return true},defaultTestContext:{test:function o(t,e,s){if(!e){e=t
t=i18n._("Test Case")}this.tests.push({name:t,type:s||"default",fn:function i(){try{return e.apply(this,arguments)}catch(t){if(window.console){console.warn(t)}}}})},staticTest:function u(t,e){this.testContext.test(t,e,"static")},log:function a(t,e,s,i,r){i=i||"info"
var n={type:i,msg:t,state:e,expected:s,meta:r||{}}
if(this.curTest){if(e!=="pass"){this.curTest.state=e}this.curTest.results.push(n)}return n},task:function h(t,e){this.curTask=this.testContext.log(t,"pass",e,"task")
this.curTask.results=[]},endTask:function l(){this.curTask=null},assert:function f(t,e,s,i){t=!!t
this.testContext.log(e,t?"pass":"fail",s,"assertion",i)
return t},isEqual:function c(t,e,s){return this.testContext.assert(t===e,s,[t,e])},pass:function p(t){return{success:true,message:t}},fail:function d(t){return{success:false,message:t}},anyPass:function m(){return _.find(arguments,this.testContext.passes)||arguments[0]||this.testContext.fail()},allPass:function g(){return _.find(arguments,this.testContext.fails)||arguments[0]||this.testContext.pass()},passes:function y(t){return t.success},fails:function v(t){return!t.success}}}
$._=i18n._
window.LiveEditorOutput=Backbone.View.extend({recording:false,loaded:false,outputs:{},lintErrors:[],runtimeErrors:[],lintWarnings:[],initialize:function T(t){this.render()
this.setPaths(t)
this.config=new ScratchpadConfig({useDebugger:t.useDebugger})
if(t.outputType){this.setOutput(t.outputType,true,t.loopProtectTimeouts)}this.lintErrors.timestamp=0
this.runtimeErrors.timestamp=0
this.lintWarnings.timestamp=0
this.bind()},render:function w(){this.$el.html('<div class="output"></div>')},bind:function k(){window.addEventListener("message",this.handleMessage.bind(this),false)},setOutput:function P(t,e,s){var i=this.outputs[t]
this.output=new i({el:this.$el.find(".output"),config:this.config,output:this,type:t,enableLoopProtect:e,loopProtectTimeouts:s})},setPaths:function x(t){if(t.workersDir){this.workersDir=this._qualifyURL(t.workersDir)
PooledWorker.prototype.workersDir=this.workersDir}if(t.externalsDir){this.externalsDir=this._qualifyURL(t.externalsDir)
PooledWorker.prototype.externalsDir=this.externalsDir}if(t.imagesDir){this.imagesDir=this._qualifyURL(t.imagesDir)}if(t.soundsDir){this.soundsDir=this._qualifyURL(t.soundsDir)}if(t.redirectUrl){this.redirectUrl=t.redirectUrl}if(t.jshintFile){this.jshintFile=this._qualifyURL(t.jshintFile)
PooledWorker.prototype.jshintFile=this.jshintFile}},_qualifyURL:function D(t){var e=document.createElement("a")
e.href=t
return e.href},handleMessage:function C(t){var e
this.frameSource=t.source
this.frameOrigin=t.origin
this.notifyActive()
if(typeof t.data==="object"){return}try{e=JSON.parse(t.data)}catch(s){return}if(!this.output){var i=e.outputType||_.keys(this.outputs)[0]
var r=true
if(e.enableLoopProtect!=null){r=e.enableLoopProtect}var n={initialTimeout:2e3,frameTimeout:500}
if(e.loopProtectTimeouts!=null){n=e.loopProtectTimeouts}this.setOutput(i,r,n)}if(e.type==="debugger"){return}this.setPaths(e)
if(e.validate!=null){this.initTests(e.validate)}if(e.settings!=null){this.settings=e.settings}if(e.code!=null){this.config.switchVersion(e.version)
this.runCode(e.code,undefined,e.noLint)}if(e.onlyRunTests!=null){this.onlyRunTests=!!e.onlyRunTests}else{this.onlyRunTests=false}if(e.restart){this.restart()}if(e.recording!=null){this.recording=e.recording}if(e.screenshot!=null){var o=e.screenshotSize||200
this.output.getScreenshot(o,function(t){this.postParent(t)}.bind(this))}if(this.output.messageHandlers){for(var u in e){if(u in this.output.messageHandlers){this.output.messageHandlers[u].call(this.output,e)}}}},postParent:function W(t){if(this.frameSource){this.frameSource.postMessage(typeof t==="string"?t:JSON.stringify(t),this.frameOrigin)}},notifyActive:_.once(function(){this.postParent({active:true})}),initTests:function b(t){if(this.validate===t){return}this.validate=t},jsonifyError:function E(t){if(typeof t!=="object"||$.isPlainObject(t)){return t}else{return{row:t.lineno?t.lineno-2:-1,column:0,text:t.message,type:"error",source:"native",priority:3}}},runCode:function L(t,e,s){this.currentCode=t
var i=Date.now()
this.results={timestamp:i,code:t,errors:[],assertions:[],warnings:[]}
var r=s&&this.firstLint
this.output.lint(t,r).then(function(e){this.lintErrors=e.errors
this.lintErrors.timestamp=i
this.lintWarnings=e.warnings
this.lintWarnings.timestamp=i
return this.lintDone(t,i)}.bind(this)).then(function(){this.buildDone(t,e)}.bind(this))
this.firstLint=true},lintDone:function O(t,e){var s=$.Deferred()
if(this.lintErrors.length>0||this.onlyRunTests){s.resolve()
return s}try{this.output.runCode(t,function(t){this.runtimeErrors=t
this.runtimeErrors.timestamp=e
s.resolve()}.bind(this))}catch(i){if(this.outputs.hasOwnProperty("pjs")){this.runtimeErrors=[i]}s.resolve()}return s},buildDone:function R(t,e){var s=[]
var i=[]
if(this.results.timestamp===this.lintErrors.timestamp){s=s.concat(this.lintErrors)}if(this.results.timestamp===this.runtimeErrors.timestamp){s=s.concat(this.runtimeErrors)}if(this.results.timestamp===this.lintWarnings.timestamp){i=i.concat(this.lintWarnings)}s=s||[]
s=s.map(this.jsonifyError)
if(!this.loaded){this.postParent({loaded:true})
this.loaded=true}this.results.errors=s
this.results.warnings=i
this.phoneHome()
this.toggle(!s.length)
if(e){this._test(t,this.validate,s,function(t,s){e(t,s)})}else{if(this.validate!==""){this.test(t,this.validate,s,function(t,e){this.results.errors=t
this.results.tests=e
this.phoneHome()}.bind(this))}}},phoneHome:function U(){this.postParent({results:this.results})},test:_.throttle(function(){this._test.apply(this,arguments)},200),_test:function j(t,e,s,i){this.output.test(t,e,s,i)},lint:function F(t,e){this.output.lint(t,e)},getUserCode:function S(){return this.currentCode||""},toggle:function q(t){if(this.output.toggle){this.output.toggle(t)}},restart:function M(){if(!this.output){return}if(this.output.restart){this.output.restart()}this.runCode(this.getUserCode())}})
LiveEditorOutput.registerOutput=function(t,e){LiveEditorOutput.prototype.outputs[t]=e}
__KA_exports.LiveEditorOutput = LiveEditorOutput;
__KA_exports.OutputTester = OutputTester;
__KA_exports.PooledWorker = PooledWorker;
this.LiveEditorOutput = LiveEditorOutput;
this.PooledWorker = PooledWorker;
this.OutputTester = OutputTester;
});
