KAdefine("third_party/javascript-khansrc/live-editor/build/js/live-editor.output_pjs_deps.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../../../javascript/shared-package/i18n.js");
__KA_require("../../../../../javascript/node_modules/underscore/index.js");
(function(e,t,n,r){var i=function(){}
var a=function(){if("console"in e){return function(t){e.console.log("Processing.js: "+t)}}return i()}()
var s=function(e){var t=new XMLHttpRequest
t.open("GET",e,false)
if(t.overrideMimeType){t.overrideMimeType("text/plain")}t.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT")
t.send(null)
if(t.status!==200&&t.status!==0){throw"XMLHttpRequest failed, status code "+t.status}return t.responseText}
var o="document"in this&&!("fake"in this.document)
t.head=t.head||t.getElementsByTagName("head")[0]
function l(t,n){if(t in e){return e[t]}if(typeof e[n]==="function"){return e[n]}return function(e){if(e instanceof Array){return e}if(typeof e==="number"){var t=[]
t.length=e
return t}}}var u=l("Float32Array","WebGLFloatArray"),f=l("Int32Array","WebGLIntArray"),c=l("Uint16Array","WebGLUnsignedShortArray"),h=l("Uint8Array","WebGLUnsignedByteArray")
var p={NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:1e-4,MAX_FLOAT:3.4028235e38,MIN_FLOAT:-3.4028235e38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:n.PI,TWO_PI:2*n.PI,HALF_PI:n.PI/2,THIRD_PI:n.PI/3,QUARTER_PI:n.PI/4,DEG_TO_RAD:n.PI/180,RAD_TO_DEG:180/n.PI,WHITESPACE:" 	\n\r\f ",RGB:1,ARGB:2,HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1<<0,ADD:1<<1,SUBTRACT:1<<2,LIGHTEST:1<<3,DARKEST:1<<4,DIFFERENCE:1<<5,EXCLUSION:1<<6,MULTIPLY:1<<7,SCREEN:1<<8,OVERLAY:1<<9,HARD_LIGHT:1<<10,SOFT_LIGHT:1<<11,DODGE:1<<12,BURN:1<<13,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:1<<15,PREC_MAXVAL:(1<<15)-1,PREC_ALPHA_SHIFT:24-15,PREC_RED_SHIFT:16-15,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8}
function m(e){if(typeof e==="string"){var t=0
for(var i=0;i<e.length;++i){t=t*31+e.charCodeAt(i)&4294967295}return t}if(typeof e!=="object"){return e&4294967295}if(e.hashCode instanceof Function){return e.hashCode()}if(e.$id===r){e.$id=n.floor(n.random()*65536)-32768<<16|n.floor(n.random()*65536)}return e.$id}function d(e,t){if(e===null||t===null){return e===null&&t===null}if(typeof e==="string"){return e===t}if(typeof e!=="object"){return e===t}if(e.equals instanceof Function){return e.equals(t)}return e===t}var g=function(e){if(e.iterator instanceof Function){return e.iterator()}if(e instanceof Array){var t=-1
this.hasNext=function(){return++t<e.length}
this.next=function(){return e[t]}}else{throw"Unable to iterate: "+e}}
var v=function(){function e(e){var t=0
this.hasNext=function(){return t<e.length}
this.next=function(){return e[t++]}
this.remove=function(){e.splice(t,1)}}function t(){var n
if(arguments.length===0){n=[]}else if(arguments.length>0&&typeof arguments[0]!=="number"){n=arguments[0].toArray()}else{n=[]
n.length=0|arguments[0]}this.get=function(e){return n[e]}
this.contains=function(e){return this.indexOf(e)>-1}
this.indexOf=function(e){for(var t=0,r=n.length;t<r;++t){if(d(e,n[t])){return t}}return-1}
this.add=function(){if(arguments.length===1){n.push(arguments[0])}else if(arguments.length===2){var e=arguments[0]
if(typeof e==="number"){if(e>=0&&e<=n.length){n.splice(e,0,arguments[1])}else{throw e+" is not a valid index"}}else{throw typeof e+" is not a number"}}else{throw"Please use the proper number of parameters."}}
this.addAll=function(e,t){var r
if(typeof e==="number"){if(e<0||e>n.length){throw"Index out of bounds for addAll: "+e+" greater or equal than "+n.length}r=new g(t)
while(r.hasNext()){n.splice(e++,0,r.next())}}else{r=new g(e)
while(r.hasNext()){n.push(r.next())}}}
this.set=function(){if(arguments.length===2){var e=arguments[0]
if(typeof e==="number"){if(e>=0&&e<n.length){n.splice(e,1,arguments[1])}else{throw e+" is not a valid index."}}else{throw typeof e+" is not a number"}}else{throw"Please use the proper number of parameters."}}
this.size=function(){return n.length}
this.clear=function(){n.length=0}
this.remove=function(e){if(typeof e==="number"){return n.splice(e,1)[0]}e=this.indexOf(e)
if(e>-1){n.splice(e,1)
return true}return false}
this.isEmpty=function(){return!n.length}
this.clone=function(){return new t(this)}
this.toArray=function(){return n.slice(0)}
this.iterator=function(){return new e(n)}}return t}()
var y=function(){function e(){if(arguments.length===1&&arguments[0]instanceof e){return arguments[0].clone()}var t=arguments.length>0?arguments[0]:16
var n=arguments.length>1?arguments[1]:.75
var i=[]
i.length=t
var a=0
var s=this
function o(e){var t=m(e)%i.length
return t<0?i.length+t:t}function l(){if(a<=n*i.length){return}var e=[]
for(var t=0;t<i.length;++t){if(i[t]!==r){e=e.concat(i[t])}}var s=i.length*2
i=[]
i.length=s
for(var l=0;l<e.length;++l){var u=o(e[l].key)
var f=i[u]
if(f===r){i[u]=f=[]}f.push(e[l])}}function u(e,t){var n=0
var a=-1
var s=false
function o(){while(!s){++a
if(n>=i.length){s=true}else if(i[n]===r||a>=i[n].length){a=-1;++n}else{return}}}this.hasNext=function(){return!s}
this.next=function(){var t=e(i[n][a])
o()
return t}
this.remove=function(){t(this.next());--a}
o()}function f(e,t,n){this.clear=function(){s.clear()}
this.contains=function(e){return t(e)}
this.containsAll=function(e){var t=e.iterator()
while(t.hasNext()){if(!this.contains(t.next())){return false}}return true}
this.isEmpty=function(){return s.isEmpty()}
this.iterator=function(){return new u(e,n)}
this.remove=function(e){if(this.contains(e)){n(e)
return true}return false}
this.removeAll=function(e){var t=e.iterator()
var r=false
while(t.hasNext()){var i=t.next()
if(this.contains(i)){n(i)
r=true}}return true}
this.retainAll=function(e){var t=this.iterator()
var r=[]
while(t.hasNext()){var i=t.next()
if(!e.contains(i)){r.push(i)}}for(var a=0;a<r.length;++a){n(r[a])}return r.length>0}
this.size=function(){return s.size()}
this.toArray=function(){var e=[]
var t=this.iterator()
while(t.hasNext()){e.push(t.next())}return e}}function c(e){this._isIn=function(t){return t===s&&e.removed===r}
this.equals=function(t){return d(e.key,t.getKey())}
this.getKey=function(){return e.key}
this.getValue=function(){return e.value}
this.hashCode=function(t){return m(e.key)}
this.setValue=function(t){var n=e.value
e.value=t
return n}}this.clear=function(){a=0
i=[]
i.length=t}
this.clone=function(){var t=new e
t.putAll(this)
return t}
this.containsKey=function(e){var t=o(e)
var n=i[t]
if(n===r){return false}for(var a=0;a<n.length;++a){if(d(n[a].key,e)){return true}}return false}
this.containsValue=function(e){for(var t=0;t<i.length;++t){var n=i[t]
if(n===r){continue}for(var a=0;a<n.length;++a){if(d(n[a].value,e)){return true}}}return false}
this.entrySet=function(){return new f(function(e){return new c(e)},function(e){return e instanceof c&&e._isIn(s)},function(e){return s.remove(e.getKey())})}
this.get=function(e){var t=o(e)
var n=i[t]
if(n===r){return null}for(var a=0;a<n.length;++a){if(d(n[a].key,e)){return n[a].value}}return null}
this.isEmpty=function(){return a===0}
this.keySet=function(){return new f(function(e){return e.key},function(e){return s.containsKey(e)},function(e){return s.remove(e)})}
this.values=function(){return new f(function(e){return e.value},function(e){return s.containsValue(e)},function(e){return s.removeByValue(e)})}
this.put=function(e,t){var n=o(e)
var s=i[n]
if(s===r){++a
i[n]=[{key:e,value:t}]
l()
return null}for(var u=0;u<s.length;++u){if(d(s[u].key,e)){var f=s[u].value
s[u].value=t
return f}}++a
s.push({key:e,value:t})
l()
return null}
this.putAll=function(e){var t=e.entrySet().iterator()
while(t.hasNext()){var n=t.next()
this.put(n.getKey(),n.getValue())}}
this.remove=function(e){var t=o(e)
var n=i[t]
if(n===r){return null}for(var s=0;s<n.length;++s){if(d(n[s].key,e)){--a
var l=n[s].value
n[s].removed=true
if(n.length>1){n.splice(s,1)}else{i[t]=r}return l}}return null}
this.removeByValue=function(e){var t,n,r,a
for(t in i){if(i.hasOwnProperty(t)){for(n=0,r=i[t].length;n<r;n++){a=i[t][n]
if(a.value===e){i[t].splice(n,1)
return true}}}}return false}
this.size=function(){return a}}return e}()
function b(){}b.prototype=p
var x=new b
x.ArrayList=v
x.HashMap=y
x.ObjectIterator=g
x.PConstants=p
x.defineProperty=function(e,t,n){if("defineProperty"in Object){Object.defineProperty(e,t,n)}else{if(n.hasOwnProperty("get")){e.__defineGetter__(t,n.get)}if(n.hasOwnProperty("set")){e.__defineSetter__(t,n.set)}}}
function k(e,t){function n(n){x.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},enumerable:true})}var r=[]
for(var i in t){if(typeof t[i]==="function"){if(!e.hasOwnProperty(i)){e[i]=t[i]}}else if(i.charAt(0)!=="$"&&!(i in e)){r.push(i)}}while(r.length>0){n(r.shift())}}x.extendClassChain=function(e){var t=[e]
for(var n=e.$upcast;n;n=n.$upcast){k(n,e)
t.push(n)
e=n}while(t.length>0){t.pop().$self=e}}
x.extendStaticMembers=function(e,t){k(e,t)}
x.extendInterfaceMembers=function(e,t){k(e,t)}
x.addMethod=function(e,t,n,r){if(e[t]){var i=n.length,a=e[t]
e[t]=function(){if(arguments.length===i){return n.apply(this,arguments)}return a.apply(this,arguments)}}else{e[t]=n}}
x.createJavaArray=function(e,t){var n=null
if(typeof t[0]==="number"){var r=0|t[0]
if(t.length<=1){n=[]
n.length=r
for(var i=0;i<r;++i){n[i]=0}}else{n=[]
var a=t.slice(1)
for(var s=0;s<r;++s){n.push(x.createJavaArray(e,a))}}}return n}
var w={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};(function(e){var t=("open() createOutput() createInput() BufferedReader selectFolder() "+"dataPath() createWriter() selectOutput() beginRecord() "+"saveStream() endRecord() selectInput() saveBytes() createReader() "+"beginRaw() endRaw() PrintWriter delay()").split(" "),n=t.length,r,i
function a(e){return function(){throw"Processing.js does not support "+e+"."}}while(n--){r=t[n]
i=r.replace("()","")
e[i]=a(r)}})(x)
x.defineProperty(x,"screenWidth",{get:function(){return e.innerWidth}})
x.defineProperty(x,"screenHeight",{get:function(){return e.innerHeight}})
var E=[]
var S={}
var A=function(e){E.splice(S[e],1)
delete S[e]}
var _=function(e){if(e.externals.canvas.id===r||!e.externals.canvas.id.length){e.externals.canvas.id="__processing"+E.length}S[e.externals.canvas.id]=E.length
E.push(e)}
function C(e){this.maxSize=e
this.size=0
this.cache={}
this.useIndex={}
this.useReverse={}
this.mostRecent=-1
this.leastRecent=0}C.prototype.get=function(e){e=e+""
if(!this.cache[e]){return}this._makeMostRecent(e)
return this.cache[e]}
C.prototype.set=function(e,t){e=e+""
if(!this.cache[e]){this.size+=1}this.cache[e]=t
this._makeMostRecent(e)
if(this.size>this.maxSize){this._pop()}}
C.prototype._makeMostRecent=function(e){var t=this.useReverse[e]
if(t===this.mostRecent){return}else if(t){delete this.useIndex[t]}this.mostRecent+=1
var n=this.mostRecent
this.useIndex[n]=e
this.useReverse[e]=n}
C.prototype._pop=function(){while(this.leastRecent<this.mostRecent){var e=this.useIndex[this.leastRecent]
if(!e){this.leastRecent+=1
continue}delete this.useIndex[this.leastRecent]
delete this.useReverse[e]
delete this.cache[e]
this.leastRecent+=1
this.size-=1
return}}
function T(e){var r=250,a=e.size/r,s=t.createElement("canvas")
s.width=2*r
s.height=2*r
s.style.opacity=0
var o=e.getCSSDefinition(r+"px","normal"),l=s.getContext("2d")
l.font=o
e.context2d=l
var u="dbflkhyjqpg"
s.width=l.measureText(u).width
l.font=o
var f=t.createElement("div")
f.style.position="absolute"
f.style.opacity=0
f.style.fontFamily='"'+e.name+'"'
f.style.fontSize=r+"px"
f.innerHTML=u+"<br/>"+u
t.body.appendChild(f)
var c=s.width,h=s.height,p=h/2
l.fillStyle="white"
l.fillRect(0,0,c,h)
l.fillStyle="black"
l.fillText(u,0,p)
var m=l.getImageData(0,0,c,h).data
var d=0,g=c*4,v=m.length
while(++d<v&&m[d]===255){i()}var y=n.round(d/g)
d=v-1
while(--d>0&&m[d]===255){i()}var b=n.round(d/g)
e.ascent=a*(p-y)
e.descent=a*(b-p)
if(t.defaultView.getComputedStyle){var x=t.defaultView.getComputedStyle(f,null).getPropertyValue("height")
x=a*x.replace("px","")
if(x>=e.size*2){e.leading=n.round(x/2)}}t.body.removeChild(f)}function I(e,t){if(e===r){e=""}this.name=e
if(t===r){t=0}this.size=t
this.glyph=false
this.ascent=0
this.descent=0
this.leading=1.2*t
var n=e.indexOf(" Italic Bold")
if(n!==-1){e=e.substring(0,n)}this.style="normal"
var i=e.indexOf(" Italic")
if(i!==-1){e=e.substring(0,i)
this.style="italic"}this.weight="normal"
var a=e.indexOf(" Bold")
if(a!==-1){e=e.substring(0,a)
this.weight="bold"}this.family="sans-serif"
if(e!==r){switch(e){case"sans-serif":case"serif":case"monospace":case"fantasy":case"cursive":this.family=e
break
default:this.family='"'+e+'", sans-serif'
break}}this.context2d=null
T(this)
this.css=this.getCSSDefinition()
this.context2d.font=this.css}I.prototype.getCSSDefinition=function(e,t){if(e===r){e=this.size+"px"}if(t===r){t=this.leading+"px"}var n=[this.style,"normal",this.weight,e+"/"+t,this.family]
return n.join(" ")}
I.prototype.measureTextWidth=function(e){return this.context2d.measureText(e).width}
I.PFontCache=new C(100)
I.get=function(e,t){var n=I.PFontCache
var r=e+"/"+t
var i=n.get(r)
if(!i){i=new I(e,t)
n.set(r,i)}return i}
I.list=function(){return["sans-serif","serif","monospace","fantasy","cursive"]}
I.preloading={template:{},initialized:false,initialize:function(){var e=function(){var e="#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm"+"7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3"+"AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG"+"9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3"+"#yld0xg32QAB77#E777773B#E3C#I#Q77773E#"+"Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#"+"E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#"+"Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#"
var t=function(e){return"AAAAAAAA".substr(~~e?7-e:6)}
return e.replace(/[#237]/g,t)}
var n=t.createElement("style")
n.setAttribute("type","text/css")
n.innerHTML="@font-face {\n"+'  font-family: "PjsEmptyFont";'+"\n"+"  src: url('data:application/x-font-ttf;base64,"+e()+"')\n"+"       format('truetype');\n"+"}"
t.head.appendChild(n)
var r=t.createElement("span")
r.style.cssText='position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;'
r.innerHTML="AAAAAAAA"
t.body.appendChild(r)
this.template=r
this.initialized=true},getElementWidth:function(e){return t.defaultView.getComputedStyle(e,"").getPropertyValue("width")},timeAttempted:0,pending:function(e){if(!this.initialized){this.initialize()}var n,r,i=this.getElementWidth(this.template)
for(var a=0;a<this.fontList.length;a++){n=this.fontList[a]
r=this.getElementWidth(n)
if(this.timeAttempted<4e3&&r===i){this.timeAttempted+=e
return true}else{t.body.removeChild(n)
this.fontList.splice(a--,1)
this.timeAttempted=0}}if(this.fontList.length===0){return false}return true},fontList:[],addedList:{},add:function(e){if(!this.initialized){this.initialize()}var n=typeof e==="object"?e.fontFace:e,r=typeof e==="object"?e.url:e
if(this.addedList[n]){return}var i=t.createElement("style")
i.setAttribute("type","text/css")
i.innerHTML="@font-face{\n  font-family: '"+n+"';\n  src:  url('"+r+"');\n}\n"
t.head.appendChild(i)
this.addedList[n]=true
var a=t.createElement("span")
a.style.cssText="position: absolute; top: 0; left: 0; opacity: 0;"
a.style.fontFamily='"'+n+'", "PjsEmptyFont", fantasy'
a.innerHTML="AAAAAAAA"
t.body.appendChild(a)
this.fontList.push(a)}}
x.PFont=I
var P=this.Processing=function(a,o){if(!(this instanceof P)){throw"called Processing constructor as if it were a function: missing 'new'."}var l,d=a===r&&o===r
if(d){l=t.createElement("canvas")}else{l=typeof a==="string"?t.getElementById(a):a}if(!(l instanceof HTMLCanvasElement)){throw"called Processing constructor without passing canvas element reference or id."}function g(e){P.debug("Unimplemented - "+e)}var v=this
v.externals={canvas:l,context:r,sketch:r}
v.name="Processing.js Instance"
v.use3DContext=false
v.focused=false
v.breakShape=false
v.glyphTable={}
v.pmouseX=0
v.pmouseY=0
v.mouseX=0
v.mouseY=0
v.mouseButton=0
v.mouseScroll=0
v.mouseClicked=r
v.mouseDragged=r
v.mouseMoved=r
v.mousePressed=r
v.mouseReleased=r
v.mouseScrolled=r
v.mouseOver=r
v.mouseOut=r
v.touchStart=r
v.touchEnd=r
v.touchMove=r
v.touchCancel=r
v.key=r
v.keyCode=r
v.keyPressed=i
v.keyReleased=i
v.keyTyped=i
v.draw=r
v.setup=r
v.__mousePressed=false
v.__keyPressed=false
v.__frameRate=60
v.mouseIsPressed=false
v.keyIsPressed=false
v.frameCount=0
v.width=100
v.height=100
v.angleMode="radians"
var y=v.PVector=function(){function e(e,t,n){this.x=e||0
this.y=t||0
this.z=n||0}e.fromAngle=function(t,n){if(n===r||n===null){n=new e}n.x=v.cos(t)
n.y=v.sin(t)
return n}
e.random2D=function(t){return e.fromAngle(n.random()*360,t)}
e.random3D=function(t){var i=n.random()*360
var a=n.random()*2-1
var s=n.sqrt(1-a*a)
var o=s*v.cos(i)
var l=s*v.sin(i)
if(t===r||t===null){t=new e(o,l,a)}else{t.set(o,l,a)}return t}
e.dist=function(e,t){return e.dist(t)}
e.dot=function(e,t){return e.dot(t)}
e.cross=function(e,t){return e.cross(t)}
e.sub=function(t,n){return new e(t.x-n.x,t.y-n.y,t.z-n.z)}
e.angleBetween=function(e,t){return v.acos(e.dot(t)/(e.mag()*t.mag()))}
e.lerp=function(t,n,r){var i=new e(t.x,t.y,t.z)
i.lerp(n,r)
return i}
e.prototype={set:function(e,t,n){if(arguments.length===1){this.set(e.x||e[0]||0,e.y||e[1]||0,e.z||e[2]||0)}else{this.x=e||0
this.y=t||0
this.z=n||0}},get:function(){return new e(this.x,this.y,this.z)},mag:function(){var e=this.x,t=this.y,r=this.z
return n.sqrt(e*e+t*t+r*r)},magSq:function(){var e=this.x,t=this.y,n=this.z
return e*e+t*t+n*n},setMag:function(e,t){if(t===r){t=e
this.normalize()
this.mult(t)}else{var n=e
n.normalize()
n.mult(t)
return n}},add:function(e,t,n){if(arguments.length===1){this.x+=e.x
this.y+=e.y
this.z+=e.z}else{this.x+=e
this.y+=t
this.z+=n}},sub:function(e,t,n){if(arguments.length===1){this.x-=e.x
this.y-=e.y
this.z-=e.z}else{this.x-=e
this.y-=t
this.z-=n}},mult:function(e){if(typeof e==="number"){this.x*=e
this.y*=e
this.z*=e}else{this.x*=e.x
this.y*=e.y
this.z*=e.z}},div:function(e){if(typeof e==="number"){this.x/=e
this.y/=e
this.z/=e}else{this.x/=e.x
this.y/=e.y
this.z/=e.z}},rotate:function(e){var t=this.x
var n=v.cos(e)
var r=v.sin(e)
this.x=n*this.x-r*this.y
this.y=r*t+n*this.y},dist:function(e){var t=this.x-e.x,r=this.y-e.y,i=this.z-e.z
return n.sqrt(t*t+r*r+i*i)},dot:function(e,t,n){if(arguments.length===1){return this.x*e.x+this.y*e.y+this.z*e.z}return this.x*e+this.y*t+this.z*n},cross:function(t){var n=this.x,r=this.y,i=this.z
return new e(r*t.z-t.y*i,i*t.x-t.z*n,n*t.y-t.x*r)},lerp:function(e,t,n,r){var i=function(e,t,n){return e+(t-e)*n}
var a,s
if(arguments.length===2){r=t
a=e.x
s=e.y
n=e.z}else{a=e
s=t}this.x=i(this.x,a,r)
this.y=i(this.y,s,r)
this.z=i(this.z,n,r)},normalize:function(){var e=this.mag()
if(e>0){this.div(e)}},limit:function(e){if(this.mag()>e){this.normalize()
this.mult(e)}},heading:function(){return-v.atan2(-this.y,this.x)},heading2D:function(){return this.heading()},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"},array:function(){return[this.x,this.y,this.z]}}
function t(e){return function(t,n){var r=t.get()
r[e](n)
return r}}for(var i in e.prototype){if(e.prototype.hasOwnProperty(i)&&!e.hasOwnProperty(i)&&i!=="toString"){e[i]=t(i)}}return e}()
var b,k,E,S=true,C=true,T=[1,1,1,1],L=4294967295,R=true,O=true,M=[0,0,0,1],N=4278190080,D=true,F=1,W=false,B=false,G=true,V=0,U=p.CORNER,z=p.CENTER,j=0,H=0,q=0,K=p.NORMAL_MODE_AUTO,X=60,Y=1e3/X,Z=p.ARROW,J=l.style.cursor,Q=p.POLYGON,et=0,tt=[],nt=0,rt=20,it=false,at=-3355444,st=20,ot=255,lt=255,ut=255,ft=255,ct=false,ht=false,pt=0,mt=0,dt=p.RGB,gt=null,vt=null,yt=false,bt=Date.now(),xt=bt,kt=0,wt,Et,St,At,_t,Ct,Tt,It={attributes:{},locations:{}},Pt,Lt,Rt,Ot,Mt,Nt,Dt,Ft,Wt,Bt,Gt,Vt,Ut,zt,jt,$t,Ht,qt={width:0,height:0},Kt=p.IMAGE,Xt=false,Yt,Zt,Jt,Qt=p.LEFT,en=p.BASELINE,tn=p.MODEL,nn="Arial",rn=12,an=9,sn=2,on=14,ln=I.get(nn,rn),un,fn=null,cn=false,hn,pn=1e3,mn=[],dn=null,gn=[p.SHIFT,p.CONTROL,p.ALT,p.CAPSLK,p.PGUP,p.PGDN,p.END,p.HOME,p.LEFT,p.UP,p.RIGHT,p.DOWN,p.NUMLK,p.INSERT,p.F1,p.F2,p.F3,p.F4,p.F5,p.F6,p.F7,p.F8,p.F9,p.F10,p.F11,p.F12,p.META]
var vn,yn,bn,xn
if(t.defaultView&&t.defaultView.getComputedStyle){vn=parseInt(t.defaultView.getComputedStyle(l,null)["paddingLeft"],10)||0
yn=parseInt(t.defaultView.getComputedStyle(l,null)["paddingTop"],10)||0
bn=parseInt(t.defaultView.getComputedStyle(l,null)["borderLeftWidth"],10)||0
xn=parseInt(t.defaultView.getComputedStyle(l,null)["borderTopWidth"],10)||0}var kn=0
var wn=0,En=0,Sn=[],An=[],_n=[],Cn=new u(p.SINCOS_LENGTH),Tn=new u(p.SINCOS_LENGTH),In,Pn
var Ln,Rn,On,Mn,Nn,Dn,Fn,Wn,Bn=false,Gn=false,Vn=60*(n.PI/180),Un=v.width/2,zn=v.height/2,jn=zn/n.tan(Vn/2),$n=jn/10,Hn=jn*10,qn=v.width/v.height
var Kn=[],Xn=[],Yn=0,Zn=false,Jn=false,Qn=true
var er=p.CORNER
var tr=[]
var nr=new u([.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,.5,.5,.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,.5])
var rr=new u([.5,.5,.5,.5,-.5,.5,.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5])
var ir=new u([0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0])
var ar=new u([0,0,0,0,1,0,1,1,0,1,0,0])
var sr=new u([0,0,1,0,0,1,0,0,1,0,0,1])
var or="varying vec4 frontColor;"+"attribute vec3 aVertex;"+"attribute vec4 aColor;"+"uniform mat4 uView;"+"uniform mat4 uProjection;"+"uniform float pointSize;"+"void main(void) {"+"  frontColor = aColor;"+"  gl_PointSize = pointSize;"+"  gl_Position = uProjection * uView * vec4(aVertex, 1.0);"+"}"
var lr="#ifdef GL_ES\n"+"precision highp float;\n"+"#endif\n"+"varying vec4 frontColor;"+"void main(void){"+"  gl_FragColor = frontColor;"+"}"
var ur="varying vec4 frontColor;"+"attribute vec3 Vertex;"+"attribute vec2 aTextureCoord;"+"uniform vec4 color;"+"uniform mat4 model;"+"uniform mat4 view;"+"uniform mat4 projection;"+"uniform float pointSize;"+"varying vec2 vTextureCoord;"+"void main(void) {"+"  gl_PointSize = pointSize;"+"  frontColor = color;"+"  gl_Position = projection * view * model * vec4(Vertex, 1.0);"+"  vTextureCoord = aTextureCoord;"+"}"
var fr="#ifdef GL_ES\n"+"precision highp float;\n"+"#endif\n"+"varying vec4 frontColor;"+"varying vec2 vTextureCoord;"+"uniform sampler2D uSampler;"+"uniform int picktype;"+"void main(void){"+"  if(picktype == 0){"+"    gl_FragColor = frontColor;"+"  }"+"  else if(picktype == 1){"+"    float alpha = texture2D(uSampler, vTextureCoord).a;"+"    gl_FragColor = vec4(frontColor.rgb*alpha, alpha);\n"+"  }"+"}"
var cr=/Windows/.test(navigator.userAgent)
var hr="varying vec4 frontColor;"+"attribute vec3 Vertex;"+"attribute vec3 Normal;"+"attribute vec4 aColor;"+"attribute vec2 aTexture;"+"varying   vec2 vTexture;"+"uniform vec4 color;"+"uniform bool usingMat;"+"uniform vec3 specular;"+"uniform vec3 mat_emissive;"+"uniform vec3 mat_ambient;"+"uniform vec3 mat_specular;"+"uniform float shininess;"+"uniform mat4 model;"+"uniform mat4 view;"+"uniform mat4 projection;"+"uniform mat4 normalTransform;"+"uniform int lightCount;"+"uniform vec3 falloff;"+"struct Light {"+"  int type;"+"  vec3 color;"+"  vec3 position;"+"  vec3 direction;"+"  float angle;"+"  vec3 halfVector;"+"  float concentration;"+"};"+"uniform Light lights0;"+"uniform Light lights1;"+"uniform Light lights2;"+"uniform Light lights3;"+"uniform Light lights4;"+"uniform Light lights5;"+"uniform Light lights6;"+"uniform Light lights7;"+"Light getLight(int index){"+"  if(index == 0) return lights0;"+"  if(index == 1) return lights1;"+"  if(index == 2) return lights2;"+"  if(index == 3) return lights3;"+"  if(index == 4) return lights4;"+"  if(index == 5) return lights5;"+"  if(index == 6) return lights6;"+"  return lights7;"+"}"+"void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {"+"  float d = length( light.position - ecPos );"+"  float attenuation = 1.0 / ( falloff[0] + ( falloff[1] * d ) + ( falloff[2] * d * d ));"+"  totalAmbient += light.color * attenuation;"+"}"+"void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {"+"  float powerfactor = 0.0;"+"  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));"+"  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));"+"  if( nDotVP != 0.0 ){"+"    powerfactor = pow( nDotVH, shininess );"+"  }"+"  col += light.color * nDotVP;"+"  spec += specular * powerfactor;"+"}"+"void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {"+"  float powerfactor;"+"   vec3 VP = light.position - ecPos;"+"  float d = length( VP ); "+"  VP = normalize( VP );"+"  float attenuation = 1.0 / ( falloff[0] + ( falloff[1] * d ) + ( falloff[2] * d * d ));"+"  float nDotVP = max( 0.0, dot( vertNormal, VP ));"+"  vec3 halfVector = normalize( VP - normalize(ecPos) );"+"  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));"+"  if( nDotVP == 0.0) {"+"    powerfactor = 0.0;"+"  }"+"  else{"+"    powerfactor = pow( nDotHV, shininess );"+"  }"+"  spec += specular * powerfactor * attenuation;"+"  col += light.color * nDotVP * attenuation;"+"}"+"void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {"+"  float spotAttenuation;"+"  float powerfactor;"+"  vec3 VP = light.position - ecPos; "+"  vec3 ldir = normalize( -light.direction );"+"  float d = length( VP );"+"  VP = normalize( VP );"+"  float attenuation = 1.0 / ( falloff[0] + ( falloff[1] * d ) + ( falloff[2] * d * d ) );"+"  float spotDot = dot( VP, ldir );"+(cr?"  spotAttenuation = 1.0; ":"  if( spotDot > cos( light.angle ) ) {"+"    spotAttenuation = pow( spotDot, light.concentration );"+"  }"+"  else{"+"    spotAttenuation = 0.0;"+"  }"+"  attenuation *= spotAttenuation;"+"")+"  float nDotVP = max( 0.0, dot( vertNormal, VP ));"+"  vec3 halfVector = normalize( VP - normalize(ecPos) );"+"  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));"+"  if( nDotVP == 0.0 ) {"+"    powerfactor = 0.0;"+"  }"+"  else {"+"    powerfactor = pow( nDotHV, shininess );"+"  }"+"  spec += specular * powerfactor * attenuation;"+"  col += light.color * nDotVP * attenuation;"+"}"+"void main(void) {"+"  vec3 finalAmbient = vec3( 0.0, 0.0, 0.0 );"+"  vec3 finalDiffuse = vec3( 0.0, 0.0, 0.0 );"+"  vec3 finalSpecular = vec3( 0.0, 0.0, 0.0 );"+"  vec4 col = color;"+"  if(color[0] == -1.0){"+"    col = aColor;"+"  }"+"  vec3 norm = normalize(vec3( normalTransform * vec4( Normal, 0.0 ) ));"+"  vec4 ecPos4 = view * model * vec4(Vertex,1.0);"+"  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;"+"  if( lightCount == 0 ) {"+"    frontColor = col + vec4(mat_specular,1.0);"+"  }"+"  else {"+"    for( int i = 0; i < 8; i++ ) {"+"      Light l = getLight(i);"+"      if( i >= lightCount ){"+"        break;"+"      }"+"      if( l.type == 0 ) {"+"        AmbientLight( finalAmbient, ecPos, l );"+"      }"+"      else if( l.type == 1 ) {"+"        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );"+"      }"+"      else if( l.type == 2 ) {"+"        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );"+"      }"+"      else {"+"        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );"+"      }"+"    }"+"   if( usingMat == false ) {"+"     frontColor = vec4("+"       vec3(col) * finalAmbient +"+"       vec3(col) * finalDiffuse +"+"       vec3(col) * finalSpecular,"+"       col[3] );"+"   }"+"   else{"+"     frontColor = vec4( "+"       mat_emissive + "+"       (vec3(col) * mat_ambient * finalAmbient) + "+"       (vec3(col) * finalDiffuse) + "+"       (mat_specular * finalSpecular), "+"       col[3] );"+"    }"+"  }"+"  vTexture.xy = aTexture.xy;"+"  gl_Position = projection * view * model * vec4( Vertex, 1.0 );"+"}"
var pr="#ifdef GL_ES\n"+"precision highp float;\n"+"#endif\n"+"varying vec4 frontColor;"+"uniform sampler2D sampler;"+"uniform bool usingTexture;"+"varying vec2 vTexture;"+"void main(void){"+"  if(usingTexture){"+"    gl_FragColor = vec4(texture2D(sampler, vTexture.xy)) * frontColor;"+"  }"+"  else{"+"    gl_FragColor = frontColor;"+"  }"+"}"
function mr(e,t,n,i){var a=It.locations[e]
if(a===r){a=b.getUniformLocation(t,n)
It.locations[e]=a}if(a!==null){if(i.length===4){b.uniform4fv(a,i)}else if(i.length===3){b.uniform3fv(a,i)}else if(i.length===2){b.uniform2fv(a,i)}else{b.uniform1f(a,i)}}}function dr(e,t,n,i){var a=It.locations[e]
if(a===r){a=b.getUniformLocation(t,n)
It.locations[e]=a}if(a!==null){if(i.length===4){b.uniform4iv(a,i)}else if(i.length===3){b.uniform3iv(a,i)}else if(i.length===2){b.uniform2iv(a,i)}else{b.uniform1i(a,i)}}}function gr(e,t,n,i,a){var s=It.locations[e]
if(s===r){s=b.getUniformLocation(t,n)
It.locations[e]=s}if(s!==-1){if(a.length===16){b.uniformMatrix4fv(s,i,a)}else if(a.length===9){b.uniformMatrix3fv(s,i,a)}else{b.uniformMatrix2fv(s,i,a)}}}function vr(e,t,n,i,a){var s=It.attributes[e]
if(s===r){s=b.getAttribLocation(t,n)
It.attributes[e]=s}if(s!==-1){b.bindBuffer(b.ARRAY_BUFFER,a)
b.vertexAttribPointer(s,i,b.FLOAT,false,0,0)
b.enableVertexAttribArray(s)}}function yr(e,t,n){var i=It.attributes[e]
if(i===r){i=b.getAttribLocation(t,n)
It.attributes[e]=i}if(i!==-1){b.disableVertexAttribArray(i)}}var br=function(e,t,n){var r=e.createShader(e.VERTEX_SHADER)
e.shaderSource(r,t)
e.compileShader(r)
if(!e.getShaderParameter(r,e.COMPILE_STATUS)){throw e.getShaderInfoLog(r)}var i=e.createShader(e.FRAGMENT_SHADER)
e.shaderSource(i,n)
e.compileShader(i)
if(!e.getShaderParameter(i,e.COMPILE_STATUS)){throw e.getShaderInfoLog(i)}var a=e.createProgram()
e.attachShader(a,r)
e.attachShader(a,i)
e.linkProgram(a)
if(!e.getProgramParameter(a,e.LINK_STATUS)){throw"Error linking shaders."}return a}
var xr=function(e,t,n,r,i){return{x:e,y:t,w:n,h:r}}
var kr=xr
var wr=function(e,t,n,r,i){return{x:e,y:t,w:i?n:n-e,h:i?r:r-t}}
var Er=function(e,t,n,r,i){return{x:e-n/2,y:t-r/2,w:n,h:r}}
var Sr=function(){}
var Ar=function(){}
var _r=function(){}
var Cr=function(){}
Ar.prototype=new Sr
Ar.prototype.constructor=Ar
_r.prototype=new Sr
_r.prototype.constructor=_r
Cr.prototype=new Sr
Cr.prototype.constructor=Cr
Sr.prototype.a3DOnlyFunction=i
var Tr={}
var Ir=v.Character=function(e){if(typeof e==="string"&&e.length===1){this.code=e.charCodeAt(0)}else if(typeof e==="number"){this.code=e}else if(e instanceof Ir){this.code=e}else{this.code=NaN}return Tr[this.code]===r?Tr[this.code]=this:Tr[this.code]}
Ir.prototype.toString=function(){return String.fromCharCode(this.code)}
Ir.prototype.valueOf=function(){return this.code}
var Pr=v.PShape=function(e){this.family=e||p.GROUP
this.visible=true
this.style=true
this.children=[]
this.nameTable=[]
this.params=[]
this.name=""
this.image=null
this.matrix=null
this.kind=null
this.close=null
this.width=null
this.height=null
this.parent=null}
Pr.prototype={isVisible:function(){return this.visible},setVisible:function(e){this.visible=e},disableStyle:function(){this.style=false
for(var e=0,t=this.children.length;e<t;e++){this.children[e].disableStyle()}},enableStyle:function(){this.style=true
for(var e=0,t=this.children.length;e<t;e++){this.children[e].enableStyle()}},getFamily:function(){return this.family},getWidth:function(){return this.width},getHeight:function(){return this.height},setName:function(e){this.name=e},getName:function(){return this.name},draw:function(){if(this.visible){this.pre()
this.drawImpl()
this.post()}},drawImpl:function(){if(this.family===p.GROUP){this.drawGroup()}else if(this.family===p.PRIMITIVE){this.drawPrimitive()}else if(this.family===p.GEOMETRY){this.drawGeometry()}else if(this.family===p.PATH){this.drawPath()}},drawPath:function(){var e,t
if(this.vertices.length===0){return}v.beginShape()
if(this.vertexCodes.length===0){if(this.vertices[0].length===2){for(e=0,t=this.vertices.length;e<t;e++){v.vertex(this.vertices[e][0],this.vertices[e][1])}}else{for(e=0,t=this.vertices.length;e<t;e++){v.vertex(this.vertices[e][0],this.vertices[e][1],this.vertices[e][2])}}}else{var n=0
if(this.vertices[0].length===2){for(e=0,t=this.vertexCodes.length;e<t;e++){if(this.vertexCodes[e]===p.VERTEX){v.vertex(this.vertices[n][0],this.vertices[n][1])
if(this.vertices[n]["moveTo"]===true){Kn[Kn.length-1]["moveTo"]=true}else if(this.vertices[n]["moveTo"]===false){Kn[Kn.length-1]["moveTo"]=false}v.breakShape=false
n++}else if(this.vertexCodes[e]===p.BEZIER_VERTEX){v.bezierVertex(this.vertices[n+0][0],this.vertices[n+0][1],this.vertices[n+1][0],this.vertices[n+1][1],this.vertices[n+2][0],this.vertices[n+2][1])
n+=3}else if(this.vertexCodes[e]===p.CURVE_VERTEX){v.curveVertex(this.vertices[n][0],this.vertices[n][1])
n++}else if(this.vertexCodes[e]===p.BREAK){v.breakShape=true}}}else{for(e=0,t=this.vertexCodes.length;e<t;e++){if(this.vertexCodes[e]===p.VERTEX){v.vertex(this.vertices[n][0],this.vertices[n][1],this.vertices[n][2])
if(this.vertices[n]["moveTo"]===true){Kn[Kn.length-1]["moveTo"]=true}else if(this.vertices[n]["moveTo"]===false){Kn[Kn.length-1]["moveTo"]=false}v.breakShape=false}else if(this.vertexCodes[e]===p.BEZIER_VERTEX){v.bezierVertex(this.vertices[n+0][0],this.vertices[n+0][1],this.vertices[n+0][2],this.vertices[n+1][0],this.vertices[n+1][1],this.vertices[n+1][2],this.vertices[n+2][0],this.vertices[n+2][1],this.vertices[n+2][2])
n+=3}else if(this.vertexCodes[e]===p.CURVE_VERTEX){v.curveVertex(this.vertices[n][0],this.vertices[n][1],this.vertices[n][2])
n++}else if(this.vertexCodes[e]===p.BREAK){v.breakShape=true}}}}v.endShape(this.close?p.CLOSE:p.OPEN)},drawGeometry:function(){var e,t
v.beginShape(this.kind)
if(this.style){for(e=0,t=this.vertices.length;e<t;e++){v.vertex(this.vertices[e])}}else{for(e=0,t=this.vertices.length;e<t;e++){var n=this.vertices[e]
if(n[2]===0){v.vertex(n[0],n[1])}else{v.vertex(n[0],n[1],n[2])}}}v.endShape()},drawGroup:function(){for(var e=0,t=this.children.length;e<t;e++){this.children[e].draw()}},drawPrimitive:function(){if(this.kind===p.POINT){v.point(this.params[0],this.params[1])}else if(this.kind===p.LINE){if(this.params.length===4){v.line(this.params[0],this.params[1],this.params[2],this.params[3])}else{v.line(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])}}else if(this.kind===p.TRIANGLE){v.triangle(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])}else if(this.kind===p.QUAD){v.quad(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5],this.params[6],this.params[7])}else if(this.kind===p.RECT){if(this.image!==null){v.imageMode(p.CORNER)
v.image(this.image,this.params[0],this.params[1],this.params[2],this.params[3])}else{v.rectMode(p.CORNER)
v.rect(this.params[0],this.params[1],this.params[2],this.params[3])}}else if(this.kind===p.ELLIPSE){v.ellipseMode(p.CORNER)
v.ellipse(this.params[0],this.params[1],this.params[2],this.params[3])}else if(this.kind===p.ARC){v.ellipseMode(p.CORNER)
v.arc(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])}else if(this.kind===p.BOX){if(this.params.length===1){v.box(this.params[0])}else{v.box(this.params[0],this.params[1],this.params[2])}}else if(this.kind===p.SPHERE){v.sphere(this.params[0])}},pre:function(){if(this.matrix){v.pushMatrix()
b.transform(this.matrix.elements[0],this.matrix.elements[3],this.matrix.elements[1],this.matrix.elements[4],this.matrix.elements[2],this.matrix.elements[5])}if(this.style){v.pushStyle()
this.styles()}},post:function(){if(this.matrix){v.popMatrix()}if(this.style){v.popStyle()}},styles:function(){if(this.stroke){v.stroke(this.strokeColor)
v.strokeWeight(this.strokeWeight)
v.strokeCap(this.strokeCap)
v.strokeJoin(this.strokeJoin)}else{v.noStroke()}if(this.fill){v.fill(this.fillColor)}else{v.noFill()}},getChild:function(e){var t,n
if(typeof e==="number"){return this.children[e]}var r
if(e===""||this.name===e){return this}if(this.nameTable.length>0){for(t=0,n=this.nameTable.length;t<n||r;t++){if(this.nameTable[t].getName===e){r=this.nameTable[t]
break}}if(r){return r}}for(t=0,n=this.children.length;t<n;t++){r=this.children[t].getChild(e)
if(r){return r}}return null},getChildCount:function(){return this.children.length},addChild:function(e){this.children.push(e)
e.parent=this
if(e.getName()!==null){this.addName(e.getName(),e)}},addName:function(e,t){if(this.parent!==null){this.parent.addName(e,t)}else{this.nameTable.push([e,t])}},translate:function(){if(arguments.length===2){this.checkMatrix(2)
this.matrix.translate(arguments[0],arguments[1])}else{this.checkMatrix(3)
this.matrix.translate(arguments[0],arguments[1],0)}},checkMatrix:function(e){if(this.matrix===null){if(e===2){this.matrix=new v.PMatrix2D}else{this.matrix=new v.PMatrix3D}}else if(e===3&&this.matrix instanceof v.PMatrix2D){this.matrix=new v.PMatrix3D}},rotateX:function(e){this.rotate(e,1,0,0)},rotateY:function(e){this.rotate(e,0,1,0)},rotateZ:function(e){this.rotate(e,0,0,1)},rotate:function(){if(arguments.length===1){this.checkMatrix(2)
this.matrix.rotate(arguments[0])}else{this.checkMatrix(3)
this.matrix.rotate(arguments[0],arguments[1],arguments[2],arguments[3])}},scale:function(){if(arguments.length===2){this.checkMatrix(2)
this.matrix.scale(arguments[0],arguments[1])}else if(arguments.length===3){this.checkMatrix(2)
this.matrix.scale(arguments[0],arguments[1],arguments[2])}else{this.checkMatrix(2)
this.matrix.scale(arguments[0])}},resetMatrix:function(){this.checkMatrix(2)
this.matrix.reset()},applyMatrix:function(e){if(arguments.length===1){this.applyMatrix(e.elements[0],e.elements[1],0,e.elements[2],e.elements[3],e.elements[4],0,e.elements[5],0,0,1,0,0,0,0,1)}else if(arguments.length===6){this.checkMatrix(2)
this.matrix.apply(arguments[0],arguments[1],arguments[2],0,arguments[3],arguments[4],arguments[5],0,0,0,1,0,0,0,0,1)}else if(arguments.length===16){this.checkMatrix(3)
this.matrix.apply(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11],arguments[12],arguments[13],arguments[14],arguments[15])}}}
var Lr=v.PShapeSVG=function(){v.PShape.call(this)
if(arguments.length===1){this.element=arguments[0]
this.vertexCodes=[]
this.vertices=[]
this.opacity=1
this.stroke=false
this.strokeColor=p.ALPHA_MASK
this.strokeWeight=1
this.strokeCap=p.SQUARE
this.strokeJoin=p.MITER
this.strokeGradient=null
this.strokeGradientPaint=null
this.strokeName=null
this.strokeOpacity=1
this.fill=true
this.fillColor=p.ALPHA_MASK
this.fillGradient=null
this.fillGradientPaint=null
this.fillName=null
this.fillOpacity=1
if(this.element.getName()!=="svg"){throw"root is not <svg>, it's <"+this.element.getName()+">"}}else if(arguments.length===2){if(typeof arguments[1]==="string"){if(arguments[1].indexOf(".svg")>-1){this.element=new v.XMLElement(null,arguments[1])
this.vertexCodes=[]
this.vertices=[]
this.opacity=1
this.stroke=false
this.strokeColor=p.ALPHA_MASK
this.strokeWeight=1
this.strokeCap=p.SQUARE
this.strokeJoin=p.MITER
this.strokeGradient=""
this.strokeGradientPaint=""
this.strokeName=""
this.strokeOpacity=1
this.fill=true
this.fillColor=p.ALPHA_MASK
this.fillGradient=null
this.fillGradientPaint=null
this.fillOpacity=1}}else{if(arguments[0]){this.element=arguments[1]
this.vertexCodes=arguments[0].vertexCodes.slice()
this.vertices=arguments[0].vertices.slice()
this.stroke=arguments[0].stroke
this.strokeColor=arguments[0].strokeColor
this.strokeWeight=arguments[0].strokeWeight
this.strokeCap=arguments[0].strokeCap
this.strokeJoin=arguments[0].strokeJoin
this.strokeGradient=arguments[0].strokeGradient
this.strokeGradientPaint=arguments[0].strokeGradientPaint
this.strokeName=arguments[0].strokeName
this.fill=arguments[0].fill
this.fillColor=arguments[0].fillColor
this.fillGradient=arguments[0].fillGradient
this.fillGradientPaint=arguments[0].fillGradientPaint
this.fillName=arguments[0].fillName
this.strokeOpacity=arguments[0].strokeOpacity
this.fillOpacity=arguments[0].fillOpacity
this.opacity=arguments[0].opacity}}}this.name=this.element.getStringAttribute("id")
var e=this.element.getStringAttribute("display","inline")
this.visible=e!=="none"
var t=this.element.getAttribute("transform")
if(t){this.matrix=this.parseMatrix(t)}var n=this.element.getStringAttribute("viewBox")
if(n!==null){var r=n.split(" ")
this.width=r[2]
this.height=r[3]}var i=this.element.getStringAttribute("width")
var a=this.element.getStringAttribute("height")
if(i!==null){this.width=this.parseUnitSize(i)
this.height=this.parseUnitSize(a)}else{if(this.width===0||this.height===0){this.width=1
this.height=1
throw"The width and/or height is not "+"readable in the <svg> tag of this file."}}this.parseColors(this.element)
this.parseChildren(this.element)}
Lr.prototype=new Pr
Lr.prototype.parseMatrix=function(){function e(e){var t=[]
e.replace(/\((.*?)\)/,function(){return function(e,n){t=n.replace(/,+/g," ").split(/\s+/)}}())
return t}return function(t){this.checkMatrix(2)
var n=[]
t.replace(/\s*(\w+)\((.*?)\)/g,function(e){n.push(v.trim(e))})
if(n.length===0){return null}for(var r=0,i=n.length;r<i;r++){var a=e(n[r])
if(n[r].indexOf("matrix")!==-1){this.matrix.set(a[0],a[2],a[4],a[1],a[3],a[5])}else if(n[r].indexOf("translate")!==-1){var s=a[0]
var o=a.length===2?a[1]:0
this.matrix.translate(s,o)}else if(n[r].indexOf("scale")!==-1){var l=a[0]
var u=a.length===2?a[1]:a[0]
this.matrix.scale(l,u)}else if(n[r].indexOf("rotate")!==-1){var f=a[0]
if(a.length===1){this.matrix.rotate(v.angleMode==="degrees"?f:v.radians(f))}else if(a.length===3){this.matrix.translate(a[1],a[2])
this.matrix.rotate(v.angleMode==="degrees"?a[0]:v.radians(a[0]))
this.matrix.translate(-a[1],-a[2])}}else if(n[r].indexOf("skewX")!==-1){this.matrix.skewX(parseFloat(a[0]))}else if(n[r].indexOf("skewY")!==-1){this.matrix.skewY(a[0])}}return this.matrix}}()
Lr.prototype.parseChildren=function(e){var t=e.getChildren()
var n=new v.PShape
for(var r=0,i=t.length;r<i;r++){var a=this.parseChild(t[r])
if(a){n.addChild(a)}}this.children.push(n)}
Lr.prototype.getName=function(){return this.name}
Lr.prototype.parseChild=function(e){var t=e.getName()
var n
if(t==="g"){n=new Lr(this,e)}else if(t==="defs"){n=new Lr(this,e)}else if(t==="line"){n=new Lr(this,e)
n.parseLine()}else if(t==="circle"){n=new Lr(this,e)
n.parseEllipse(true)}else if(t==="ellipse"){n=new Lr(this,e)
n.parseEllipse(false)}else if(t==="rect"){n=new Lr(this,e)
n.parseRect()}else if(t==="polygon"){n=new Lr(this,e)
n.parsePoly(true)}else if(t==="polyline"){n=new Lr(this,e)
n.parsePoly(false)}else if(t==="path"){n=new Lr(this,e)
n.parsePath()}else if(t==="radialGradient"){g("PShapeSVG.prototype.parseChild, name = radialGradient")}else if(t==="linearGradient"){g("PShapeSVG.prototype.parseChild, name = linearGradient")}else if(t==="text"){g("PShapeSVG.prototype.parseChild, name = text")}else if(t==="filter"){g("PShapeSVG.prototype.parseChild, name = filter")}else if(t==="mask"){g("PShapeSVG.prototype.parseChild, name = mask")}else{i()}return n}
Lr.prototype.parsePath=function(){this.family=p.PATH
this.kind=0
var e=[]
var t
var n=v.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g," "))
if(n===null){return}n=v.__toCharArray(n)
var r=0,i=0,a=0,s=0,o=0,l=0,u=0,f=0,c=0,h=0,m=0,d=0,g=0,y=0,b=0,x=0
var k=""
var w=[]
var E=false
var S
var A
var _,C
while(b<n.length){x=n[b].valueOf()
if(x>=65&&x<=90||x>=97&&x<=122){_=b
b++
if(b<n.length){w=[]
x=n[b].valueOf()
while(!(x>=65&&x<=90||x>=97&&x<=100||x>=102&&x<=122)&&E===false){if(x===32){if(k!==""){w.push(parseFloat(k))
k=""}b++}else if(x===45){if(n[b-1].valueOf()===101){k+=n[b].toString()
b++}else{if(k!==""){w.push(parseFloat(k))}k=n[b].toString()
b++}}else{k+=n[b].toString()
b++}if(b===n.length){E=true}else{x=n[b].valueOf()}}}if(k!==""){w.push(parseFloat(k))
k=""}A=n[_]
x=A.valueOf()
if(x===77){if(w.length>=2&&w.length%2===0){r=w[0]
i=w[1]
this.parsePathMoveto(r,i)
if(w.length>2){for(_=2,C=w.length;_<C;_+=2){r=w[_]
i=w[_+1]
this.parsePathLineto(r,i)}}}}else if(x===109){if(w.length>=2&&w.length%2===0){r+=w[0]
i+=w[1]
this.parsePathMoveto(r,i)
if(w.length>2){for(_=2,C=w.length;_<C;_+=2){r+=w[_]
i+=w[_+1]
this.parsePathLineto(r,i)}}}}else if(x===76){if(w.length>=2&&w.length%2===0){for(_=0,C=w.length;_<C;_+=2){r=w[_]
i=w[_+1]
this.parsePathLineto(r,i)}}}else if(x===108){if(w.length>=2&&w.length%2===0){for(_=0,C=w.length;_<C;_+=2){r+=w[_]
i+=w[_+1]
this.parsePathLineto(r,i)}}}else if(x===72){for(_=0,C=w.length;_<C;_++){r=w[_]
this.parsePathLineto(r,i)}}else if(x===104){for(_=0,C=w.length;_<C;_++){r+=w[_]
this.parsePathLineto(r,i)}}else if(x===86){for(_=0,C=w.length;_<C;_++){i=w[_]
this.parsePathLineto(r,i)}}else if(x===118){for(_=0,C=w.length;_<C;_++){i+=w[_]
this.parsePathLineto(r,i)}}else if(x===67){if(w.length>=6&&w.length%6===0){for(_=0,C=w.length;_<C;_+=6){o=w[_]
u=w[_+1]
l=w[_+2]
f=w[_+3]
c=w[_+4]
h=w[_+5]
this.parsePathCurveto(o,u,l,f,c,h)
r=c
i=h}}}else if(x===99){if(w.length>=6&&w.length%6===0){for(_=0,C=w.length;_<C;_+=6){o=r+w[_]
u=i+w[_+1]
l=r+w[_+2]
f=i+w[_+3]
c=r+w[_+4]
h=i+w[_+5]
this.parsePathCurveto(o,u,l,f,c,h)
r=c
i=h}}}else if(x===83){if(w.length>=4&&w.length%4===0){for(_=0,C=w.length;_<C;_+=4){if(S.toLowerCase()==="c"||S.toLowerCase()==="s"){m=this.vertices[this.vertices.length-2][0]
d=this.vertices[this.vertices.length-2][1]
g=this.vertices[this.vertices.length-1][0]
y=this.vertices[this.vertices.length-1][1]
o=g+(g-m)
u=y+(y-d)}else{o=this.vertices[this.vertices.length-1][0]
u=this.vertices[this.vertices.length-1][1]}l=w[_]
f=w[_+1]
c=w[_+2]
h=w[_+3]
this.parsePathCurveto(o,u,l,f,c,h)
r=c
i=h}}}else if(x===115){if(w.length>=4&&w.length%4===0){for(_=0,C=w.length;_<C;_+=4){if(S.toLowerCase()==="c"||S.toLowerCase()==="s"){m=this.vertices[this.vertices.length-2][0]
d=this.vertices[this.vertices.length-2][1]
g=this.vertices[this.vertices.length-1][0]
y=this.vertices[this.vertices.length-1][1]
o=g+(g-m)
u=y+(y-d)}else{o=this.vertices[this.vertices.length-1][0]
u=this.vertices[this.vertices.length-1][1]}l=r+w[_]
f=i+w[_+1]
c=r+w[_+2]
h=i+w[_+3]
this.parsePathCurveto(o,u,l,f,c,h)
r=c
i=h}}}else if(x===81){if(w.length>=4&&w.length%4===0){for(_=0,C=w.length;_<C;_+=4){a=w[_]
s=w[_+1]
c=w[_+2]
h=w[_+3]
this.parsePathQuadto(r,i,a,s,c,h)
r=c
i=h}}}else if(x===113){if(w.length>=4&&w.length%4===0){for(_=0,C=w.length;_<C;_+=4){a=r+w[_]
s=i+w[_+1]
c=r+w[_+2]
h=i+w[_+3]
this.parsePathQuadto(r,i,a,s,c,h)
r=c
i=h}}}else if(x===84){if(w.length>=2&&w.length%2===0){for(_=0,C=w.length;_<C;_+=2){if(S.toLowerCase()==="q"||S.toLowerCase()==="t"){m=this.vertices[this.vertices.length-2][0]
d=this.vertices[this.vertices.length-2][1]
g=this.vertices[this.vertices.length-1][0]
y=this.vertices[this.vertices.length-1][1]
a=g+(g-m)
s=y+(y-d)}else{a=r
s=i}c=w[_]
h=w[_+1]
this.parsePathQuadto(r,i,a,s,c,h)
r=c
i=h}}}else if(x===116){if(w.length>=2&&w.length%2===0){for(_=0,C=w.length;_<C;_+=2){if(S.toLowerCase()==="q"||S.toLowerCase()==="t"){m=this.vertices[this.vertices.length-2][0]
d=this.vertices[this.vertices.length-2][1]
g=this.vertices[this.vertices.length-1][0]
y=this.vertices[this.vertices.length-1][1]
a=g+(g-m)
s=y+(y-d)}else{a=r
s=i}c=r+w[_]
h=i+w[_+1]
this.parsePathQuadto(r,i,a,s,c,h)
r=c
i=h}}}else if(x===90||x===122){this.close=true}S=A.toString()}else{b++}}}
Lr.prototype.parsePathQuadto=function(e,t,n,r,i,a){if(this.vertices.length>0){this.parsePathCode(p.BEZIER_VERTEX)
this.parsePathVertex(e+(n-e)*2/3,t+(r-t)*2/3)
this.parsePathVertex(i+(n-i)*2/3,a+(r-a)*2/3)
this.parsePathVertex(i,a)}else{throw"Path must start with M/m"}}
Lr.prototype.parsePathCurveto=function(e,t,n,r,i,a){if(this.vertices.length>0){this.parsePathCode(p.BEZIER_VERTEX)
this.parsePathVertex(e,t)
this.parsePathVertex(n,r)
this.parsePathVertex(i,a)}else{throw"Path must start with M/m"}}
Lr.prototype.parsePathLineto=function(e,t){if(this.vertices.length>0){this.parsePathCode(p.VERTEX)
this.parsePathVertex(e,t)
this.vertices[this.vertices.length-1]["moveTo"]=false}else{throw"Path must start with M/m"}}
Lr.prototype.parsePathMoveto=function(e,t){if(this.vertices.length>0){this.parsePathCode(p.BREAK)}this.parsePathCode(p.VERTEX)
this.parsePathVertex(e,t)
this.vertices[this.vertices.length-1]["moveTo"]=true}
Lr.prototype.parsePathVertex=function(e,t){var n=[]
n[0]=e
n[1]=t
this.vertices.push(n)}
Lr.prototype.parsePathCode=function(e){this.vertexCodes.push(e)}
Lr.prototype.parsePoly=function(e){this.family=p.PATH
this.close=e
var t=v.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g," "))
if(t!==null){var n=t.split(" ")
if(n.length%2===0){for(var r=0,i=n.length;r<i;r++){var a=[]
a[0]=n[r]
a[1]=n[++r]
this.vertices.push(a)}}else{throw"Error parsing polygon points: odd number of coordinates provided"}}}
Lr.prototype.parseRect=function(){this.kind=p.RECT
this.family=p.PRIMITIVE
this.params=[]
this.params[0]=this.element.getFloatAttribute("x")
this.params[1]=this.element.getFloatAttribute("y")
this.params[2]=this.element.getFloatAttribute("width")
this.params[3]=this.element.getFloatAttribute("height")
if(this.params[2]<0||this.params[3]<0){throw"svg error: negative width or height found while parsing <rect>"}}
Lr.prototype.parseEllipse=function(e){this.kind=p.ELLIPSE
this.family=p.PRIMITIVE
this.params=[]
this.params[0]=this.element.getFloatAttribute("cx")|0
this.params[1]=this.element.getFloatAttribute("cy")|0
var t,n
if(e){t=n=this.element.getFloatAttribute("r")
if(t<0){throw"svg error: negative radius found while parsing <circle>"}}else{t=this.element.getFloatAttribute("rx")
n=this.element.getFloatAttribute("ry")
if(t<0||n<0){throw"svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>"}}this.params[0]-=t
this.params[1]-=n
this.params[2]=t*2
this.params[3]=n*2}
Lr.prototype.parseLine=function(){this.kind=p.LINE
this.family=p.PRIMITIVE
this.params=[]
this.params[0]=this.element.getFloatAttribute("x1")
this.params[1]=this.element.getFloatAttribute("y1")
this.params[2]=this.element.getFloatAttribute("x2")
this.params[3]=this.element.getFloatAttribute("y2")}
Lr.prototype.parseColors=function(e){if(e.hasAttribute("opacity")){this.setOpacity(e.getAttribute("opacity"))}if(e.hasAttribute("stroke")){this.setStroke(e.getAttribute("stroke"))}if(e.hasAttribute("stroke-width")){this.setStrokeWeight(e.getAttribute("stroke-width"))}if(e.hasAttribute("stroke-linejoin")){this.setStrokeJoin(e.getAttribute("stroke-linejoin"))}if(e.hasAttribute("stroke-linecap")){this.setStrokeCap(e.getStringAttribute("stroke-linecap"))}if(e.hasAttribute("fill")){this.setFill(e.getStringAttribute("fill"))}if(e.hasAttribute("style")){var t=e.getStringAttribute("style")
var n=t.toString().split(";")
for(var r=0,i=n.length;r<i;r++){var a=v.trim(n[r].split(":"))
if(a[0]==="fill"){this.setFill(a[1])}else if(a[0]==="fill-opacity"){this.setFillOpacity(a[1])}else if(a[0]==="stroke"){this.setStroke(a[1])}else if(a[0]==="stroke-width"){this.setStrokeWeight(a[1])}else if(a[0]==="stroke-linecap"){this.setStrokeCap(a[1])}else if(a[0]==="stroke-linejoin"){this.setStrokeJoin(a[1])}else if(a[0]==="stroke-opacity"){this.setStrokeOpacity(a[1])}else if(a[0]==="opacity"){this.setOpacity(a[1])}}}}
Lr.prototype.setFillOpacity=function(e){this.fillOpacity=parseFloat(e)
this.fillColor=this.fillOpacity*255<<24|this.fillColor&16777215}
Lr.prototype.setFill=function(e){var t=this.fillColor&4278190080
if(e==="none"){this.fill=false}else if(e.indexOf("#")===0){this.fill=true
if(e.length===4){e=e.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")}this.fillColor=t|parseInt(e.substring(1),16)&16777215}else if(e.indexOf("rgb")===0){this.fill=true
this.fillColor=t|this.parseRGB(e)}else if(e.indexOf("url(#")===0){this.fillName=e.substring(5,e.length-1)}else if(w[e]){this.fill=true
this.fillColor=t|parseInt(w[e].substring(1),16)&16777215}}
Lr.prototype.setOpacity=function(e){this.strokeColor=parseFloat(e)*255<<24|this.strokeColor&16777215
this.fillColor=parseFloat(e)*255<<24|this.fillColor&16777215}
Lr.prototype.setStroke=function(e){var t=this.strokeColor&4278190080
if(e==="none"){this.stroke=false}else if(e.charAt(0)==="#"){this.stroke=true
if(e.length===4){e=e.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")}this.strokeColor=t|parseInt(e.substring(1),16)&16777215}else if(e.indexOf("rgb")===0){this.stroke=true
this.strokeColor=t|this.parseRGB(e)}else if(e.indexOf("url(#")===0){this.strokeName=e.substring(5,e.length-1)}else if(w[e]){this.stroke=true
this.strokeColor=t|parseInt(w[e].substring(1),16)&16777215}}
Lr.prototype.setStrokeWeight=function(e){this.strokeWeight=this.parseUnitSize(e)}
Lr.prototype.setStrokeJoin=function(e){if(e==="miter"){this.strokeJoin=p.MITER}else if(e==="round"){this.strokeJoin=p.ROUND}else if(e==="bevel"){this.strokeJoin=p.BEVEL}}
Lr.prototype.setStrokeCap=function(e){if(e==="butt"){this.strokeCap=p.SQUARE}else if(e==="round"){this.strokeCap=p.ROUND}else if(e==="square"){this.strokeCap=p.PROJECT}}
Lr.prototype.setStrokeOpacity=function(e){this.strokeOpacity=parseFloat(e)
this.strokeColor=this.strokeOpacity*255<<24|this.strokeColor&16777215}
Lr.prototype.parseRGB=function(e){var t=e.substring(e.indexOf("(")+1,e.indexOf(")"))
var n=t.split(", ")
return n[0]<<16|n[1]<<8|n[2]}
Lr.prototype.parseUnitSize=function(e){var t=e.length-2
if(t<0){return e}if(e.indexOf("pt")===t){return parseFloat(e.substring(0,t))*1.25}if(e.indexOf("pc")===t){return parseFloat(e.substring(0,t))*15}if(e.indexOf("mm")===t){return parseFloat(e.substring(0,t))*3.543307}if(e.indexOf("cm")===t){return parseFloat(e.substring(0,t))*35.43307}if(e.indexOf("in")===t){return parseFloat(e.substring(0,t))*90}if(e.indexOf("px")===t){return parseFloat(e.substring(0,t))}return parseFloat(e)}
v.shape=function(e,t,n,r,i){if(arguments.length>=1&&arguments[0]!==null){if(e.isVisible()){v.pushMatrix()
if(er===p.CENTER){if(arguments.length===5){v.translate(t-r/2,n-i/2)
v.scale(r/e.getWidth(),i/e.getHeight())}else if(arguments.length===3){v.translate(t-e.getWidth()/2,-e.getHeight()/2)}else{v.translate(-e.getWidth()/2,-e.getHeight()/2)}}else if(er===p.CORNER){if(arguments.length===5){v.translate(t,n)
v.scale(r/e.getWidth(),i/e.getHeight())}else if(arguments.length===3){v.translate(t,n)}}else if(er===p.CORNERS){if(arguments.length===5){r-=t
i-=n
v.translate(t,n)
v.scale(r/e.getWidth(),i/e.getHeight())}else if(arguments.length===3){v.translate(t,n)}}e.draw()
if(arguments.length===1&&er===p.CENTER||arguments.length>1){v.popMatrix()}}}}
v.shapeMode=function(e){er=e}
v.loadShape=function(e){if(arguments.length===1){if(e.indexOf(".svg")>-1){return new Lr(null,e)}}return null}
var Rr=function(e,t,n,r,i){this.fullName=e||""
this.name=t||""
this.namespace=n||""
this.value=r
this.type=i}
Rr.prototype={getName:function(){return this.name},getFullName:function(){return this.fullName},getNamespace:function(){return this.namespace},getValue:function(){return this.value},getType:function(){return this.type},setValue:function(e){this.value=e}}
var Or=v.XMLElement=function(){this.attributes=[]
this.children=[]
this.fullName=null
this.name=null
this.namespace=""
this.content=null
this.parent=null
this.lineNr=""
this.systemID=""
this.type="ELEMENT"
if(arguments.length===4){this.fullName=arguments[0]||""
if(arguments[1]){this.name=arguments[1]}else{var e=this.fullName.indexOf(":")
if(e>=0){this.name=this.fullName.substring(e+1)}else{this.name=this.fullName}}this.namespace=arguments[1]
this.lineNr=arguments[3]
this.systemID=arguments[2]}else if(arguments.length===2&&arguments[1].indexOf(".")>-1){this.parse(arguments[arguments.length-1])}else if(arguments.length===1&&typeof arguments[0]==="string"){this.parse(arguments[0])}}
Or.prototype={parse:function(e){var t
try{var n=e.substring(e.length-4)
if(n===".xml"||n===".svg"){e=s(e)}t=(new DOMParser).parseFromString(e,"text/xml")
var r=t.documentElement
if(r){this.parseChildrenRecursive(null,r)}else{throw"Error loading document"}return this}catch(i){throw i}},parseChildrenRecursive:function(e,t){var n,r,i,a,s,o
if(!e){this.fullName=t.localName
this.name=t.nodeName
n=this}else{n=new Or(t.localName,t.nodeName,"","")
n.parent=e}if(t.nodeType===3&&t.textContent!==""){return this.createPCDataElement(t.textContent)}for(a=0,s=t.attributes.length;a<s;a++){i=t.attributes[a]
r=new Rr(i.getname,i.nodeName,i.namespaceURI,i.nodeValue,i.nodeType)
n.attributes.push(r)}for(a=0,s=t.childNodes.length;a<s;a++){var l=t.childNodes[a]
if(l.nodeType===1||l.nodeType===3){o=n.parseChildrenRecursive(n,l)
if(o!==null){n.children.push(o)}}}return n},createElement:function(){if(arguments.length===2){return new Or(arguments[0],arguments[1],null,null)}return new Or(arguments[0],arguments[1],arguments[2],arguments[3])},createPCDataElement:function(e){if(e.replace(/^\s+$/g,"")===""){return null}var t=new Or
t.content=e
t.type="TEXT"
return t},hasAttribute:function(){if(arguments.length===1){return this.getAttribute(arguments[0])!==null}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])!==null}},equals:function(e){if(!(e instanceof Or)){return false}var t,n
if(this.name!==e.getLocalName()){return false}if(this.attributes.length!==e.getAttributeCount()){return false}if(this.attributes.length!==e.attributes.length){return false}var r,i,a,s,o
for(t=0,n=this.attributes.length;t<n;t++){r=this.attributes[t].getName()
i=this.attributes[t].getNamespace()
o=e.findAttribute(r,i)
if(o===null){return false}if(this.attributes[t].getValue()!==o.getValue()){return false}if(this.attributes[t].getType()!==o.getType()){return false}}if(this.children.length!==e.getChildCount()){return false}if(this.children.length>0){var l,u
for(t=0,n=this.children.length;t<n;t++){l=this.getChild(t)
u=e.getChild(t)
if(!l.equals(u)){return false}}return true}return this.content===e.content},getContent:function(){if(this.type==="TEXT"){return this.content}var e=this.children
if(e.length===1&&e[0].type==="TEXT"){return e[0].content}return null},getAttribute:function(){var e
if(arguments.length===2){e=this.findAttribute(arguments[0])
if(e){return e.getValue()}return arguments[1]}else if(arguments.length===1){e=this.findAttribute(arguments[0])
if(e){return e.getValue()}return null}else if(arguments.length===3){e=this.findAttribute(arguments[0],arguments[1])
if(e){return e.getValue()}return arguments[2]}},getStringAttribute:function(){if(arguments.length===1){return this.getAttribute(arguments[0])}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])}return this.getAttribute(arguments[0],arguments[1],arguments[2])},getString:function(e){return this.getStringAttribute(e)},getFloatAttribute:function(){if(arguments.length===1){return parseFloat(this.getAttribute(arguments[0],0))}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])}return this.getAttribute(arguments[0],arguments[1],arguments[2])},getFloat:function(e){return this.getFloatAttribute(e)},getIntAttribute:function(){if(arguments.length===1){return this.getAttribute(arguments[0],0)}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])}return this.getAttribute(arguments[0],arguments[1],arguments[2])},getInt:function(e){return this.getIntAttribute(e)},hasChildren:function(){return this.children.length>0},addChild:function(e){if(e!==null){e.parent=this
this.children.push(e)}},insertChild:function(e,t){if(e){if(e.getLocalName()===null&&!this.hasChildren()){var n=this.children[this.children.length-1]
if(n.getLocalName()===null){n.setContent(n.getContent()+e.getContent())
return}}e.parent=this
this.children.splice(t,0,e)}},getChild:function(){if(typeof arguments[0]==="number"){return this.children[arguments[0]]}if(arguments[0].indexOf("/")!==-1){this.getChildRecursive(arguments[0].split("/"),0)
return null}var e,t
for(var n=0,r=this.getChildCount();n<r;n++){e=this.getChild(n)
t=e.getName()
if(t!==null&&t===arguments[0]){return e}}return null},getChildren:function(){if(arguments.length===1){if(typeof arguments[0]==="number"){return this.getChild(arguments[0])}if(arguments[0].indexOf("/")!==-1){return this.getChildrenRecursive(arguments[0].split("/"),0)}var e=[]
var t,n
for(var r=0,i=this.getChildCount();r<i;r++){t=this.getChild(r)
n=t.getName()
if(n!==null&&n===arguments[0]){e.push(t)}}return e}return this.children},getChildCount:function(){return this.children.length},getChildRecursive:function(e,t){var n,r
for(var i=0,a=this.getChildCount();i<a;i++){n=this.getChild(i)
r=n.getName()
if(r!==null&&r===e[t]){if(t===e.length-1){return n}t+=1
return n.getChildRecursive(e,t)}}return null},getChildrenRecursive:function(e,t){if(t===e.length-1){return this.getChildren(e[t])}var n=this.getChildren(e[t])
var r=[]
for(var i=0;i<n.length;i++){r=r.concat(n[i].getChildrenRecursive(e,t+1))}return r},isLeaf:function(){return!this.hasChildren()},listChildren:function(){var e=[]
for(var t=0,n=this.children.length;t<n;t++){e.push(this.getChild(t).getName())}return e},removeAttribute:function(e,t){this.namespace=t||""
for(var n=0,r=this.attributes.length;n<r;n++){if(this.attributes[n].getName()===e&&this.attributes[n].getNamespace()===this.namespace){this.attributes.splice(n,1)
break}}},removeChild:function(e){if(e){for(var t=0,n=this.children.length;t<n;t++){if(this.children[t].equals(e)){this.children.splice(t,1)
break}}}},removeChildAtIndex:function(e){if(this.children.length>e){this.children.splice(e,1)}},findAttribute:function(e,t){this.namespace=t||""
for(var n=0,r=this.attributes.length;n<r;n++){if(this.attributes[n].getName()===e&&this.attributes[n].getNamespace()===this.namespace){return this.attributes[n]}}return null},setAttribute:function(){var e
if(arguments.length===3){var t=arguments[0].indexOf(":")
var n=arguments[0].substring(t+1)
e=this.findAttribute(n,arguments[1])
if(e){e.setValue(arguments[2])}else{e=new Rr(arguments[0],n,arguments[1],arguments[2],"CDATA")
this.attributes.push(e)}}else{e=this.findAttribute(arguments[0])
if(e){e.setValue(arguments[1])}else{e=new Rr(arguments[0],arguments[0],null,arguments[1],"CDATA")
this.attributes.push(e)}}},setString:function(e,t){this.setAttribute(e,t)},setInt:function(e,t){this.setAttribute(e,t)},setFloat:function(e,t){this.setAttribute(e,t)},setContent:function(e){if(this.children.length>0){P.debug("Tried to set content for XMLElement with children")}this.content=e},setName:function(){if(arguments.length===1){this.name=arguments[0]
this.fullName=arguments[0]
this.namespace=null}else{var e=arguments[0].indexOf(":")
if(arguments[1]===null||e<0){this.name=arguments[0]}else{this.name=arguments[0].substring(e+1)}this.fullName=arguments[0]
this.namespace=arguments[1]}},getName:function(){return this.fullName},getLocalName:function(){return this.name},getAttributeCount:function(){return this.attributes.length},toString:function(){if(this.type==="TEXT"){return this.content}var e=(this.namespace!==""&&this.namespace!==this.name?this.namespace+":":"")+this.name
var t="<"+e
var n,r
for(n=0;n<this.attributes.length;n++){var i=this.attributes[n]
t+=" "+i.getName()+"="+'"'+i.getValue()+'"'}if(this.children.length===0){if(this.content===""){t+="/>"}else{t+=">"+this.content+"</"+e+">"}}else{t+=">"
for(r=0;r<this.children.length;r++){t+=this.children[r].toString()}t+="</"+e+">"}return t}}
Or.parse=function(e){var t=new Or
t.parse(e)
return t}
var Mr=function(e){var t=0
for(var r=0;r<e.length;r++){if(r!==0){t=n.max(t,n.abs(e[r]))}else{t=n.abs(e[r])}}var i=(t+"").indexOf(".")
if(i===0){i=1}else if(i===-1){i=(t+"").length}return i}
var Nr=v.PMatrix2D=function(){if(arguments.length===0){this.reset()}else if(arguments.length===1&&arguments[0]instanceof Nr){this.set(arguments[0].array())}else if(arguments.length===6){this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}}
Nr.prototype={set:function(){if(arguments.length===6){var e=arguments
this.set([e[0],e[1],e[2],e[3],e[4],e[5]])}else if(arguments.length===1&&arguments[0]instanceof Nr){this.elements=arguments[0].array()}else if(arguments.length===1&&arguments[0]instanceof Array){this.elements=arguments[0].slice()}},get:function(){var e=new Nr
e.set(this.elements)
return e},reset:function(){this.set([1,0,0,0,1,0])},array:function la(){return this.elements.slice()},translate:function(e,t){this.elements[2]=e*this.elements[0]+t*this.elements[1]+this.elements[2]
this.elements[5]=e*this.elements[3]+t*this.elements[4]+this.elements[5]},invTranslate:function(e,t){this.translate(-e,-t)},transpose:function(){},mult:function(e,t){var n,r
if(e instanceof y){n=e.x
r=e.y
if(!t){t=new y}}else if(e instanceof Array){n=e[0]
r=e[1]
if(!t){t=[]}}if(t instanceof Array){t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2]
t[1]=this.elements[3]*n+this.elements[4]*r+this.elements[5]}else if(t instanceof y){t.x=this.elements[0]*n+this.elements[1]*r+this.elements[2]
t.y=this.elements[3]*n+this.elements[4]*r+this.elements[5]
t.z=0}return t},multX:function(e,t){return e*this.elements[0]+t*this.elements[1]+this.elements[2]},multY:function(e,t){return e*this.elements[3]+t*this.elements[4]+this.elements[5]},skewX:function(e){this.apply(1,0,1,e,0,0)},skewY:function(e){this.apply(1,0,1,0,e,0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var e=this.determinant()
if(n.abs(e)>p.MIN_INT){var t=this.elements[0]
var r=this.elements[1]
var i=this.elements[2]
var a=this.elements[3]
var s=this.elements[4]
var o=this.elements[5]
this.elements[0]=s/e
this.elements[3]=-a/e
this.elements[1]=-r/e
this.elements[4]=t/e
this.elements[2]=(r*o-s*i)/e
this.elements[5]=(a*i-t*o)/e
return true}return false},scale:function(e,t){if(e&&!t){t=e}if(e&&t){this.elements[0]*=e
this.elements[1]*=t
this.elements[3]*=e
this.elements[4]*=t}},invScale:function(e,t){if(e&&!t){t=e}this.scale(1/e,1/t)},apply:function(){var e
if(arguments.length===1&&arguments[0]instanceof Nr){e=arguments[0].array()}else if(arguments.length===6){e=Array.prototype.slice.call(arguments)}else if(arguments.length===1&&arguments[0]instanceof Array){e=arguments[0]}var t=[0,0,this.elements[2],0,0,this.elements[5]]
var n=0
for(var r=0;r<2;r++){for(var i=0;i<3;i++,n++){t[n]+=this.elements[r*3+0]*e[i+0]+this.elements[r*3+1]*e[i+3]}}this.elements=t.slice()},preApply:function(){var e
if(arguments.length===1&&arguments[0]instanceof Nr){e=arguments[0].array()}else if(arguments.length===6){e=Array.prototype.slice.call(arguments)}else if(arguments.length===1&&arguments[0]instanceof Array){e=arguments[0]}var t=[0,0,e[2],0,0,e[5]]
t[2]=e[2]+this.elements[2]*e[0]+this.elements[5]*e[1]
t[5]=e[5]+this.elements[2]*e[3]+this.elements[5]*e[4]
t[0]=this.elements[0]*e[0]+this.elements[3]*e[1]
t[3]=this.elements[0]*e[3]+this.elements[3]*e[4]
t[1]=this.elements[1]*e[0]+this.elements[4]*e[1]
t[4]=this.elements[1]*e[3]+this.elements[4]*e[4]
this.elements=t.slice()},rotate:function(e){var t=v.cos(e)
var n=v.sin(e)
var r=this.elements[0]
var i=this.elements[1]
this.elements[0]=t*r+n*i
this.elements[1]=-n*r+t*i
r=this.elements[3]
i=this.elements[4]
this.elements[3]=t*r+n*i
this.elements[4]=-n*r+t*i},rotateZ:function(e){this.rotate(e)},invRotateZ:function(e){this.rotateZ(e-(v.angleMode==="degrees"?180:n.PI))},print:function(){var e=Mr(this.elements)
var t=""+v.nfs(this.elements[0],e,4)+" "+v.nfs(this.elements[1],e,4)+" "+v.nfs(this.elements[2],e,4)+"\n"+v.nfs(this.elements[3],e,4)+" "+v.nfs(this.elements[4],e,4)+" "+v.nfs(this.elements[5],e,4)+"\n\n"
v.println(t)}}
var Dr=v.PMatrix3D=function(){this.reset()}
Dr.prototype={set:function(){if(arguments.length===16){this.elements=Array.prototype.slice.call(arguments)}else if(arguments.length===1&&arguments[0]instanceof Dr){this.elements=arguments[0].array()}else if(arguments.length===1&&arguments[0]instanceof Array){this.elements=arguments[0].slice()}},get:function(){var e=new Dr
e.set(this.elements)
return e},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function ua(){return this.elements.slice()},translate:function(e,t,n){if(n===r){n=0}this.elements[3]+=e*this.elements[0]+t*this.elements[1]+n*this.elements[2]
this.elements[7]+=e*this.elements[4]+t*this.elements[5]+n*this.elements[6]
this.elements[11]+=e*this.elements[8]+t*this.elements[9]+n*this.elements[10]
this.elements[15]+=e*this.elements[12]+t*this.elements[13]+n*this.elements[14]},transpose:function(){var e=this.elements[4]
this.elements[4]=this.elements[1]
this.elements[1]=e
e=this.elements[8]
this.elements[8]=this.elements[2]
this.elements[2]=e
e=this.elements[6]
this.elements[6]=this.elements[9]
this.elements[9]=e
e=this.elements[3]
this.elements[3]=this.elements[12]
this.elements[12]=e
e=this.elements[7]
this.elements[7]=this.elements[13]
this.elements[13]=e
e=this.elements[11]
this.elements[11]=this.elements[14]
this.elements[14]=e},mult:function(e,t){var n,r,i,a
if(e instanceof y){n=e.x
r=e.y
i=e.z
a=1
if(!t){t=new y}}else if(e instanceof Array){n=e[0]
r=e[1]
i=e[2]
a=e[3]||1
if(!t||t.length!==3&&t.length!==4){t=[0,0,0]}}if(t instanceof Array){if(t.length===3){t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3]
t[1]=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7]
t[2]=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]}else if(t.length===4){t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3]*a
t[1]=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7]*a
t[2]=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]*a
t[3]=this.elements[12]*n+this.elements[13]*r+this.elements[14]*i+this.elements[15]*a}}if(t instanceof y){t.x=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3]
t.y=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7]
t.z=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]}return t},preApply:function(){var e
if(arguments.length===1&&arguments[0]instanceof Dr){e=arguments[0].array()}else if(arguments.length===16){e=Array.prototype.slice.call(arguments)}else if(arguments.length===1&&arguments[0]instanceof Array){e=arguments[0]}var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var n=0
for(var r=0;r<4;r++){for(var i=0;i<4;i++,n++){t[n]+=this.elements[i+0]*e[r*4+0]+this.elements[i+4]*e[r*4+1]+this.elements[i+8]*e[r*4+2]+this.elements[i+12]*e[r*4+3]}}this.elements=t.slice()},apply:function(){var e
if(arguments.length===1&&arguments[0]instanceof Dr){e=arguments[0].array()}else if(arguments.length===16){e=Array.prototype.slice.call(arguments)}else if(arguments.length===1&&arguments[0]instanceof Array){e=arguments[0]}var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var n=0
for(var r=0;r<4;r++){for(var i=0;i<4;i++,n++){t[n]+=this.elements[r*4+0]*e[i+0]+this.elements[r*4+1]*e[i+4]+this.elements[r*4+2]*e[i+8]+this.elements[r*4+3]*e[i+12]}}this.elements=t.slice()},rotate:function(e,t,n,r){if(!n){this.rotateZ(e)}else{var i=v.cos(e)
var a=v.sin(e)
var s=1-i
this.apply(s*t*t+i,s*t*n-a*r,s*t*r+a*n,0,s*t*n+a*r,s*n*n+i,s*n*r-a*t,0,s*t*r-a*n,s*n*r+a*t,s*r*r+i,0,0,0,0,1)}},invApply:function(){if(Fn===r){Fn=new Dr}var e=arguments
Fn.set(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])
if(!Fn.invert()){return false}this.preApply(Fn)
return true},rotateX:function(e){var t=v.cos(e)
var n=v.sin(e)
this.apply([1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1])},rotateY:function(e){var t=v.cos(e)
var n=v.sin(e)
this.apply([t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1])},rotateZ:function(e){var t=v.cos(e)
var n=v.sin(e)
this.apply([t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1])},scale:function(e,t,n){if(e&&!t&&!n){t=n=e}else if(e&&t&&!n){n=1}if(e&&t&&n){this.elements[0]*=e
this.elements[1]*=t
this.elements[2]*=n
this.elements[4]*=e
this.elements[5]*=t
this.elements[6]*=n
this.elements[8]*=e
this.elements[9]*=t
this.elements[10]*=n
this.elements[12]*=e
this.elements[13]*=t
this.elements[14]*=n}},skewX:function(e){var t=v.tan(e)
this.apply(1,t,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(e){var t=v.tan(e)
this.apply(1,0,0,0,t,1,0,0,0,0,1,0,0,0,0,1)},multX:function(e,t,n,r){if(!n){return this.elements[0]*e+this.elements[1]*t+this.elements[3]}if(!r){return this.elements[0]*e+this.elements[1]*t+this.elements[2]*n+this.elements[3]}return this.elements[0]*e+this.elements[1]*t+this.elements[2]*n+this.elements[3]*r},multY:function(e,t,n,r){if(!n){return this.elements[4]*e+this.elements[5]*t+this.elements[7]}if(!r){return this.elements[4]*e+this.elements[5]*t+this.elements[6]*n+this.elements[7]}return this.elements[4]*e+this.elements[5]*t+this.elements[6]*n+this.elements[7]*r},multZ:function(e,t,n,r){if(!r){return this.elements[8]*e+this.elements[9]*t+this.elements[10]*n+this.elements[11]}return this.elements[8]*e+this.elements[9]*t+this.elements[10]*n+this.elements[11]*r},multW:function(e,t,n,r){if(!r){return this.elements[12]*e+this.elements[13]*t+this.elements[14]*n+this.elements[15]}return this.elements[12]*e+this.elements[13]*t+this.elements[14]*n+this.elements[15]*r},invert:function(){var e=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4]
var t=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4]
var r=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4]
var i=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5]
var a=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5]
var s=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6]
var o=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12]
var l=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12]
var u=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12]
var f=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13]
var c=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13]
var h=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14]
var p=e*h-t*c+r*f+i*u-a*l+s*o
if(n.abs(p)<=1e-9){return false}var m=[]
m[0]=+this.elements[5]*h-this.elements[6]*c+this.elements[7]*f
m[4]=-this.elements[4]*h+this.elements[6]*u-this.elements[7]*l
m[8]=+this.elements[4]*c-this.elements[5]*u+this.elements[7]*o
m[12]=-this.elements[4]*f+this.elements[5]*l-this.elements[6]*o
m[1]=-this.elements[1]*h+this.elements[2]*c-this.elements[3]*f
m[5]=+this.elements[0]*h-this.elements[2]*u+this.elements[3]*l
m[9]=-this.elements[0]*c+this.elements[1]*u-this.elements[3]*o
m[13]=+this.elements[0]*f-this.elements[1]*l+this.elements[2]*o
m[2]=+this.elements[13]*s-this.elements[14]*a+this.elements[15]*i
m[6]=-this.elements[12]*s+this.elements[14]*r-this.elements[15]*t
m[10]=+this.elements[12]*a-this.elements[13]*r+this.elements[15]*e
m[14]=-this.elements[12]*i+this.elements[13]*t-this.elements[14]*e
m[3]=-this.elements[9]*s+this.elements[10]*a-this.elements[11]*i
m[7]=+this.elements[8]*s-this.elements[10]*r+this.elements[11]*t
m[11]=-this.elements[8]*a+this.elements[9]*r-this.elements[11]*e
m[15]=+this.elements[8]*i-this.elements[9]*t+this.elements[10]*e
var d=1/p
m[0]*=d
m[1]*=d
m[2]*=d
m[3]*=d
m[4]*=d
m[5]*=d
m[6]*=d
m[7]*=d
m[8]*=d
m[9]*=d
m[10]*=d
m[11]*=d
m[12]*=d
m[13]*=d
m[14]*=d
m[15]*=d
this.elements=m.slice()
return true},toString:function(){var e=""
for(var t=0;t<15;t++){e+=this.elements[t]+", "}e+=this.elements[15]
return e},print:function(){var e=Mr(this.elements)
var t=""+v.nfs(this.elements[0],e,4)+" "+v.nfs(this.elements[1],e,4)+" "+v.nfs(this.elements[2],e,4)+" "+v.nfs(this.elements[3],e,4)+"\n"+v.nfs(this.elements[4],e,4)+" "+v.nfs(this.elements[5],e,4)+" "+v.nfs(this.elements[6],e,4)+" "+v.nfs(this.elements[7],e,4)+"\n"+v.nfs(this.elements[8],e,4)+" "+v.nfs(this.elements[9],e,4)+" "+v.nfs(this.elements[10],e,4)+" "+v.nfs(this.elements[11],e,4)+"\n"+v.nfs(this.elements[12],e,4)+" "+v.nfs(this.elements[13],e,4)+" "+v.nfs(this.elements[14],e,4)+" "+v.nfs(this.elements[15],e,4)+"\n\n"
v.println(t)},invTranslate:function(e,t,n){this.preApply(1,0,0,-e,0,1,0,-t,0,0,1,-n,0,0,0,1)},invRotateX:function(e){var t=v.cos(-e)
var n=v.sin(-e)
this.preApply([1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1])},invRotateY:function(e){var t=v.cos(-e)
var n=v.sin(-e)
this.preApply([t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1])},invRotateZ:function(e){var t=v.cos(-e)
var n=v.sin(-e)
this.preApply([t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1])},invScale:function(e,t,n){this.preApply([1/e,0,0,0,0,1/t,0,0,0,0,1/n,0,0,0,0,1])}}
var Fr=v.PMatrixStack=function(){this.matrixStack=[]}
Fr.prototype.load=function(){var e=E.$newPMatrix()
if(arguments.length===1){e.set(arguments[0])}else{e.set(arguments)}this.matrixStack.push(e)}
Ar.prototype.$newPMatrix=function(){return new Nr}
_r.prototype.$newPMatrix=function(){return new Dr}
Fr.prototype.push=function(){this.matrixStack.push(this.peek())}
Fr.prototype.pop=function(){return this.matrixStack.pop()}
Fr.prototype.peek=function(){var e=E.$newPMatrix()
e.set(this.matrixStack[this.matrixStack.length-1])
return e}
Fr.prototype.mult=function(e){this.matrixStack[this.matrixStack.length-1].apply(e)}
v.split=function(e,t){return e.split(t)}
v.splitTokens=function(e,t){if(arguments.length===1){t="\n	\r\f "}t="["+t+"]"
var n=[]
var i=0
var a=e.search(t)
while(a>=0){if(a===0){e=e.substring(1)}else{n[i]=e.substring(0,a)
i++
e=e.substring(a)}a=e.search(t)}if(e.length>0){n[i]=e}if(n.length===0){n=r}return n}
v.append=function(e,t){e[e.length]=t
return e}
v.concat=function(e,t){return e.concat(t)}
v.sort=function(e,t){var n=[]
if(e.length>0){var r=t>0?t:e.length
for(var i=0;i<r;i++){n.push(e[i])}if(typeof e[0]==="string"){n.sort()}else{n.sort(function(e,t){return e-t})}if(t>0){for(var a=n.length;a<e.length;a++){n.push(e[a])}}}return n}
v.splice=function(e,t,n){if(t.length===0){return e}if(t instanceof Array){for(var r=0,i=n;r<t.length;i++,r++){e.splice(i,0,t[r])}}else{e.splice(n,0,t)}return e}
v.subset=function(e,t,n){var i=n!==r?t+n:e.length
return e.slice(t,i)}
v.join=function(e,t){return e.join(t)}
v.shorten=function(e){var t=[]
var n=e.length
for(var r=0;r<n;r++){t[r]=e[r]}t.pop()
return t}
v.expand=function(e,t){var n=e.slice(0),r=t||e.length*2
n.length=r
return n}
v.arrayCopy=function(){var e,t=0,n,i=0,a
if(arguments.length===2){e=arguments[0]
n=arguments[1]
a=e.length}else if(arguments.length===3){e=arguments[0]
n=arguments[1]
a=arguments[2]}else if(arguments.length===5){e=arguments[0]
t=arguments[1]
n=arguments[2]
i=arguments[3]
a=arguments[4]}for(var s=t,o=i;s<a+t;s++,o++){if(n[o]!==r){n[o]=e[s]}else{throw"array index out of bounds exception"}}}
v.reverse=function(e){return e.reverse()}
v.mix=function(e,t,n){return e+((t-e)*n>>8)}
v.peg=function(e){return e<0?0:e>255?255:e}
v.modes=function(){var e=p.ALPHA_MASK,t=p.RED_MASK,r=p.GREEN_MASK,i=p.BLUE_MASK,a=n.min,s=n.max
function o(e,t,n,r,i,s,o,l,u,f,c){var h=a(((e&4278190080)>>>24)+t,255)<<24
var p=n+((u-n)*t>>8)
p=(p<0?0:p>255?255:p)<<16
var m=r+((f-r)*t>>8)
m=(m<0?0:m>255?255:m)<<8
var d=i+((c-i)*t>>8)
d=d<0?0:d>255?255:d
return h|p|m|d}return{replace:function(e,t){return t},blend:function(n,s){var o=(s&e)>>>24,l=n&t,u=n&r,f=n&i,c=s&t,h=s&r,p=s&i
return a(((n&e)>>>24)+o,255)<<24|l+((c-l)*o>>8)&t|u+((h-u)*o>>8)&r|f+((p-f)*o>>8)&i},add:function(n,s){var o=(s&e)>>>24
return a(((n&e)>>>24)+o,255)<<24|a((n&t)+((s&t)>>8)*o,t)&t|a((n&r)+((s&r)>>8)*o,r)&r|a((n&i)+((s&i)*o>>8),i)},subtract:function(n,o){var l=(o&e)>>>24
return a(((n&e)>>>24)+l,255)<<24|s((n&t)-((o&t)>>8)*l,r)&t|s((n&r)-((o&r)>>8)*l,i)&r|s((n&i)-((o&i)*l>>8),0)},lightest:function(n,o){var l=(o&e)>>>24
return a(((n&e)>>>24)+l,255)<<24|s(n&t,((o&t)>>8)*l)&t|s(n&r,((o&r)>>8)*l)&r|s(n&i,(o&i)*l>>8)},darkest:function(n,s){var o=(s&e)>>>24,l=n&t,u=n&r,f=n&i,c=a(n&t,((s&t)>>8)*o),h=a(n&r,((s&r)>>8)*o),p=a(n&i,(s&i)*o>>8)
return a(((n&e)>>>24)+o,255)<<24|l+((c-l)*o>>8)&t|u+((h-u)*o>>8)&r|f+((p-f)*o>>8)&i},difference:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i,m=l>c?l-c:c-l,d=u>h?u-h:h-u,g=f>p?f-p:p-f
return o(n,s,l,u,f,c,h,p,m,d,g)},exclusion:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i,m=l+c-(l*c>>7),d=u+h-(u*h>>7),g=f+p-(f*p>>7)
return o(n,s,l,u,f,c,h,p,m,d,g)},multiply:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i,m=l*c>>8,d=u*h>>8,g=f*p>>8
return o(n,s,l,u,f,c,h,p,m,d,g)},screen:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i,m=255-((255-l)*(255-c)>>8),d=255-((255-u)*(255-h)>>8),g=255-((255-f)*(255-p)>>8)
return o(n,s,l,u,f,c,h,p,m,d,g)},hard_light:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i,m=c<128?l*c>>7:255-((255-l)*(255-c)>>7),d=h<128?u*h>>7:255-((255-u)*(255-h)>>7),g=p<128?f*p>>7:255-((255-f)*(255-p)>>7)
return o(n,s,l,u,f,c,h,p,m,d,g)},soft_light:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i,m=(l*c>>7)+(l*l>>8)-(l*l*c>>15),d=(u*h>>7)+(u*u>>8)-(u*u*h>>15),g=(f*p>>7)+(f*f>>8)-(f*f*p>>15)
return o(n,s,l,u,f,c,h,p,m,d,g)},overlay:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i,m=l<128?l*c>>7:255-((255-l)*(255-c)>>7),d=u<128?u*h>>7:255-((255-u)*(255-h)>>7),g=f<128?f*p>>7:255-((255-f)*(255-p)>>7)
return o(n,s,l,u,f,c,h,p,m,d,g)},dodge:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i
var m=255
if(c!==255){m=(l<<8)/(255-c)
m=m<0?0:m>255?255:m}var d=255
if(h!==255){d=(u<<8)/(255-h)
d=d<0?0:d>255?255:d}var g=255
if(p!==255){g=(f<<8)/(255-p)
g=g<0?0:g>255?255:g}return o(n,s,l,u,f,c,h,p,m,d,g)},burn:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i
var m=0
if(c!==0){m=(255-l<<8)/c
m=255-(m<0?0:m>255?255:m)}var d=0
if(h!==0){d=(255-u<<8)/h
d=255-(d<0?0:d>255?255:d)}var g=0
if(p!==0){g=(255-f<<8)/p
g=255-(g<0?0:g>255?255:g)}return o(n,s,l,u,f,c,h,p,m,d,g)}}}()
function Wr(e,t,r,i){var a,s,o,l
if(dt===p.HSB){var u=v.color.toRGB(e,t,r)
a=u[0]
s=u[1]
o=u[2]}else{a=n.round(255*(e/lt))
s=n.round(255*(t/ut))
o=n.round(255*(r/ft))}l=n.round(255*(i/ot))
a=a<0?0:a
s=s<0?0:s
o=o<0?0:o
l=l<0?0:l
a=a>255?255:a
s=s>255?255:s
o=o>255?255:o
l=l>255?255:l
return l<<24&p.ALPHA_MASK|a<<16&p.RED_MASK|s<<8&p.GREEN_MASK|o&p.BLUE_MASK}function Br(e,t){var r
if(e&p.ALPHA_MASK){r=n.round(255*(t/ot))
r=r>255?255:r
r=r<0?0:r
return e-(e&p.ALPHA_MASK)+(r<<24&p.ALPHA_MASK)}if(dt===p.RGB){return Wr(e,e,e,t)}if(dt===p.HSB){return Wr(0,0,e/lt*ft,t)}}function Gr(e){if(e<=lt&&e>=0){if(dt===p.RGB){return Wr(e,e,e,ot)}if(dt===p.HSB){return Wr(0,0,e/lt*ft,ot)}}if(e){if(e>2147483647){e-=4294967296}return e}}v.color=function(e,t,n,i){if(e!==r&&t!==r&&n!==r&&i!==r){return Wr(e,t,n,i)}if(e!==r&&t!==r&&n!==r){return Wr(e,t,n,ot)}if(e!==r&&t!==r){return Br(e,t)}if(typeof e==="number"){return Gr(e)}return Wr(lt,ut,ft,ot)}
v.color.toString=function(e){return"rgba("+((e&p.RED_MASK)>>>16)+","+((e&p.GREEN_MASK)>>>8)+","+(e&p.BLUE_MASK)+","+((e&p.ALPHA_MASK)>>>24)/255+")"}
v.color.toInt=function(e,t,n,r){return r<<24&p.ALPHA_MASK|e<<16&p.RED_MASK|t<<8&p.GREEN_MASK|n&p.BLUE_MASK}
v.color.toArray=function(e){return[(e&p.RED_MASK)>>>16,(e&p.GREEN_MASK)>>>8,e&p.BLUE_MASK,(e&p.ALPHA_MASK)>>>24]}
v.color.toGLArray=function(e){return[((e&p.RED_MASK)>>>16)/255,((e&p.GREEN_MASK)>>>8)/255,(e&p.BLUE_MASK)/255,((e&p.ALPHA_MASK)>>>24)/255]}
v.color.toRGB=function(e,t,r){e=e>lt?lt:e
t=t>ut?ut:t
r=r>ft?ft:r
e=e/lt*360
t=t/ut*100
r=r/ft*100
var i=n.round(r/100*255)
if(t===0){return[i,i,i]}var a=e%360
var s=a%60
var o=n.round(r*(100-t)/1e4*255)
var l=n.round(r*(6e3-t*s)/6e5*255)
var u=n.round(r*(6e3-t*(60-s))/6e5*255)
switch(n.floor(a/60)){case 0:return[i,u,o]
case 1:return[l,i,o]
case 2:return[o,i,u]
case 3:return[o,l,i]
case 4:return[u,o,i]
case 5:return[i,o,l]}}
function Vr(e){var t,n,r
t=((e&p.RED_MASK)>>>16)/255
n=((e&p.GREEN_MASK)>>>8)/255
r=(e&p.BLUE_MASK)/255
var i=v.max(v.max(t,n),r),a=v.min(v.min(t,n),r),s,o
if(a===i){return[0,0,i*ft]}o=(i-a)/i
if(t===i){s=(n-r)/(i-a)}else if(n===i){s=2+(r-t)/(i-a)}else{s=4+(t-n)/(i-a)}s/=6
if(s<0){s+=1}else if(s>1){s-=1}return[s*lt,o*ut,i*ft]}v.brightness=function(e){return Vr(e)[2]}
v.saturation=function(e){return Vr(e)[1]}
v.hue=function(e){return Vr(e)[0]}
v.red=function(e){return((e&p.RED_MASK)>>>16)/255*lt}
v.green=function(e){return((e&p.GREEN_MASK)>>>8)/255*ut}
v.blue=function(e){return(e&p.BLUE_MASK)/255*ft}
v.alpha=function(e){return((e&p.ALPHA_MASK)>>>24)/255*ot}
v.lerpColor=function(e,t,n){var r,i,a,s,o,l,u,f,c,h,m,d
var g,y,b,x,k
var w=v.color(e)
var E=v.color(t)
if(dt===p.HSB){g=Vr(w)
f=((w&p.ALPHA_MASK)>>>24)/ot
y=Vr(E)
d=((E&p.ALPHA_MASK)>>>24)/ot
x=v.lerp(g[0],y[0],n)
k=v.lerp(g[1],y[1],n)
a=v.lerp(g[2],y[2],n)
b=v.color.toRGB(x,k,a)
s=v.lerp(f,d,n)*ot
return s<<24&p.ALPHA_MASK|b[0]<<16&p.RED_MASK|b[1]<<8&p.GREEN_MASK|b[2]&p.BLUE_MASK}o=(w&p.RED_MASK)>>>16
l=(w&p.GREEN_MASK)>>>8
u=w&p.BLUE_MASK
f=((w&p.ALPHA_MASK)>>>24)/ot
c=(E&p.RED_MASK)>>>16
h=(E&p.GREEN_MASK)>>>8
m=E&p.BLUE_MASK
d=((E&p.ALPHA_MASK)>>>24)/ot
r=v.lerp(o,c,n)|0
i=v.lerp(l,h,n)|0
a=v.lerp(u,m,n)|0
s=v.lerp(f,d,n)*ot
return s<<24&p.ALPHA_MASK|r<<16&p.RED_MASK|i<<8&p.GREEN_MASK|a&p.BLUE_MASK}
v.colorMode=function(){dt=arguments[0]
if(arguments.length>1){lt=arguments[1]
ut=arguments[2]||arguments[1]
ft=arguments[3]||arguments[1]
ot=arguments[4]||arguments[1]}}
v.blendColor=function(e,t,n){if(n===p.REPLACE){return v.modes.replace(e,t)}else if(n===p.BLEND){return v.modes.blend(e,t)}else if(n===p.ADD){return v.modes.add(e,t)}else if(n===p.SUBTRACT){return v.modes.subtract(e,t)}else if(n===p.LIGHTEST){return v.modes.lightest(e,t)}else if(n===p.DARKEST){return v.modes.darkest(e,t)}else if(n===p.DIFFERENCE){return v.modes.difference(e,t)}else if(n===p.EXCLUSION){return v.modes.exclusion(e,t)}else if(n===p.MULTIPLY){return v.modes.multiply(e,t)}else if(n===p.SCREEN){return v.modes.screen(e,t)}else if(n===p.HARD_LIGHT){return v.modes.hard_light(e,t)}else if(n===p.SOFT_LIGHT){return v.modes.soft_light(e,t)}else if(n===p.OVERLAY){return v.modes.overlay(e,t)}else if(n===p.DODGE){return v.modes.dodge(e,t)}else if(n===p.BURN){return v.modes.burn(e,t)}}
function Ur(){b.save()}function zr(){b.restore()
D=true
R=true}v.printMatrix=function(){On.print()}
Ar.prototype.translate=function(e,t){On.translate(e,t)
Mn.invTranslate(e,t)
b.translate(e,t)}
_r.prototype.translate=function(e,t,n){On.translate(e,t,n)
Mn.invTranslate(e,t,n)}
Ar.prototype.scale=function(e,t){On.scale(e,t)
Mn.invScale(e,t)
b.scale(e,t||e)}
_r.prototype.scale=function(e,t,n){On.scale(e,t,n)
Mn.invScale(e,t,n)}
Ar.prototype.pushMatrix=function(){Nn.load(On)
Dn.load(Mn)
Ur()}
_r.prototype.pushMatrix=function(){Nn.load(On)
Dn.load(Mn)}
Ar.prototype.popMatrix=function(){On.set(Nn.pop())
Mn.set(Dn.pop())
zr()}
_r.prototype.popMatrix=function(){On.set(Nn.pop())
Mn.set(Dn.pop())}
Ar.prototype.resetMatrix=function(){On.reset()
Mn.reset()
b.setTransform(1,0,0,1,0,0)}
_r.prototype.resetMatrix=function(){On.reset()
Mn.reset()}
Sr.prototype.applyMatrix=function(){var e=arguments
On.apply(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])
Mn.invApply(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}
Ar.prototype.applyMatrix=function(){var e=arguments
for(var t=e.length;t<16;t++){e[t]=0}e[10]=e[15]=1
Sr.prototype.applyMatrix.apply(this,e)}
v.rotateX=function(e){On.rotateX(e)
Mn.invRotateX(e)}
Ar.prototype.rotateZ=function(){throw"rotateZ() is not supported in 2D mode. Use rotate(float) instead."}
_r.prototype.rotateZ=function(e){On.rotateZ(e)
Mn.invRotateZ(e)}
v.rotateY=function(e){On.rotateY(e)
Mn.invRotateY(e)}
Ar.prototype.rotate=function(e){On.rotateZ(e)
Mn.invRotateZ(e)
b.rotate(v.convertToRadians(e))}
_r.prototype.rotate=function(e){v.rotateZ(e)}
v.pushStyle=function(){Ur()
v.pushMatrix()
var e={doFill:C,currentFillColor:L,doStroke:O,currentStrokeColor:N,curTint:gt,curRectMode:U,curColorMode:dt,colorModeX:lt,colorModeZ:ft,colorModeY:ut,colorModeA:ot,curTextFont:ln,horizontalTextAlignment:Qt,verticalTextAlignment:en,textMode:tn,curFontName:nn,curTextSize:rn,curTextAscent:an,curTextDescent:sn,curTextLeading:on}
tr.push(e)}
v.popStyle=function(){var e=tr.pop()
if(e){zr()
v.popMatrix()
C=e.doFill
L=e.currentFillColor
O=e.doStroke
N=e.currentStrokeColor
gt=e.curTint
U=e.curRectmode
dt=e.curColorMode
lt=e.colorModeX
ft=e.colorModeZ
ut=e.colorModeY
ot=e.colorModeA
ln=e.curTextFont
nn=e.curFontName
rn=e.curTextSize
Qt=e.horizontalTextAlignment
en=e.verticalTextAlignment
tn=e.textMode
an=e.curTextAscent
sn=e.curTextDescent
on=e.curTextLeading}else{throw"Too many popStyle() without enough pushStyle()"}}
v.year=function(){return(new Date).getFullYear()}
v.month=function(){return(new Date).getMonth()+1}
v.day=function(){return(new Date).getDate()}
v.hour=function(){return(new Date).getHours()}
v.minute=function(){return(new Date).getMinutes()}
v.second=function(){return(new Date).getSeconds()}
v.millis=function(){return Date.now()-bt}
function jr(){var e=(Date.now()-xt)/1e3
kt++
var t=kt/e
if(e>.5){xt=Date.now()
kt=0
v.__frameRate=t}v.frameCount++}Ar.prototype.redraw=function(){jr()
b.lineWidth=F
var e=v.pmouseX,t=v.pmouseY
v.pmouseX=pt
v.pmouseY=mt
Ur()
v.draw()
zr()
pt=v.mouseX
mt=v.mouseY
v.pmouseX=e
v.pmouseY=t
v.mouseIsPressed=v.__mousePressed}
_r.prototype.redraw=function(){jr()
var e=v.pmouseX,t=v.pmouseY
v.pmouseX=pt
v.pmouseY=mt
b.clear(b.DEPTH_BUFFER_BIT)
It={attributes:{},locations:{}}
v.noLights()
v.lightFalloff(1,0,0)
v.shininess(1)
v.ambient(255,255,255)
v.specular(0,0,0)
v.emissive(0,0,0)
v.camera()
v.draw()
pt=v.mouseX
mt=v.mouseY
v.pmouseX=e
v.pmouseY=t
v.mouseIsPressed=v.__mousePressed}
v.noLoop=function(){G=false
W=false
clearInterval(V)
k.onPause()}
v.loop=function(){if(W){return}xt=Date.now()
kt=0
V=e.setInterval(function(){try{k.onFrameStart()
v.redraw()
k.onFrameEnd()}catch(t){e.clearInterval(V)
throw t}},Y)
G=true
W=true
k.onLoop()}
v.frameRate=function(e){X=e
Y=1e3/X
if(G){v.noLoop()
v.loop()}}
var $r=[]
function Hr(e,t,n){if(e.addEventListener){e.addEventListener(t,n,false)}else{e.attachEvent("on"+t,n)}$r.push({elem:e,type:t,fn:n})}function qr(e){var t=e.elem,n=e.type,r=e.fn
if(t.removeEventListener){t.removeEventListener(n,r,false)}else if(t.detachEvent){t.detachEvent("on"+n,r)}}v.exit=function(){e.clearInterval(V)
A(v.externals.canvas.id)
for(var t in P.lib){if(P.lib.hasOwnProperty(t)){if(P.lib[t].hasOwnProperty("detach")){P.lib[t].detach(v)}}}var n=$r.length
while(n--){qr($r[n])}k.onExit()}
v.cursor=function(){if(arguments.length>1||arguments.length===1&&arguments[0]instanceof v.PImage){var e=arguments[0],t,n
if(arguments.length>=3){t=arguments[1]
n=arguments[2]
if(t<0||n<0||n>=e.height||t>=e.width){throw"x and y must be non-negative and less than the dimensions of the image"}}else{t=e.width>>>1
n=e.height>>>1}var r=e.toDataURL()
var i='url("'+r+'") '+t+" "+n+", default"
Z=l.style.cursor=i}else if(arguments.length===1){var a=arguments[0]
Z=l.style.cursor=a}else{Z=l.style.cursor=J}}
v.noCursor=function(){Z=l.style.cursor=p.NOCURSOR}
v.link=function(t,n){if(n!==r){e.open(t,n)}else{e.location=t}}
v.beginDraw=i
v.endDraw=i
Ar.prototype.toImageData=function(e,t,n,i){e=e!==r?e:0
t=t!==r?t:0
n=n!==r?n:v.width
i=i!==r?i:v.height
return b.getImageData(e,t,n,i)}
_r.prototype.toImageData=function(e,i,a,s){e=e!==r?e:0
i=i!==r?i:0
a=a!==r?a:v.width
s=s!==r?s:v.height
var o=t.createElement("canvas"),l=o.getContext("2d"),u=l.createImageData(a,s),f=new h(a*s*4)
b.readPixels(e,i,a,s,b.RGBA,b.UNSIGNED_BYTE,f)
for(var c=0,p=f.length,m=u.data;c<p;c++){m[c]=f[(s-1-n.floor(c/4/a))*a*4+c%(a*4)]}return u}
v.status=function(t){e.status=t}
v.binary=function(e,t){var n
if(t>0){n=t}else if(e instanceof Ir){n=16
e|=0}else{n=32
while(n>1&&!(e>>>n-1&1)){n--}}var r=""
while(n>0){r+=e>>>--n&1?"1":"0"}return r}
v.unbinary=function(e){var t=e.length-1,n=1,r=0
while(t>=0){var i=e[t--]
if(i!=="0"&&i!=="1"){throw"the value passed into unbinary was not an 8 bit binary number"}if(i==="1"){r+=n}n<<=1}return r}
function Kr(e,t,i,a,s,o){var l=e<0?i:t
var u=s===0
var f=s===r||s<0?0:s
var c=n.abs(e)
if(u){f=1
c*=10
while(n.abs(n.round(c)-c)>1e-6&&f<7){++f
c*=10}}else if(f!==0){c*=n.pow(10,f)}var h,p=c*2
if(n.floor(c)===c){h=c}else if(n.floor(p)===p){var m=n.floor(c)
h=m+m%2}else{h=n.round(c)}var d=""
var g=a+f
while(g>0||h>0){g--
d=""+h%10+d
h=n.floor(h/10)}if(o!==r){var v=d.length-3-f
while(v>0){d=d.substring(0,v)+o+d.substring(v)
v-=3}}if(f>0){return l+d.substring(0,d.length-f)+"."+d.substring(d.length-f,d.length)}return l+d}function Xr(e,t,n,r,i,a){if(e instanceof Array){var s=[]
for(var o=0,l=e.length;o<l;o++){s.push(Kr(e[o],t,n,r,i,a))}return s}return Kr(e,t,n,r,i,a)}v.nf=function(e,t,n){return Xr(e,"","-",t,n)}
v.nfs=function(e,t,n){return Xr(e," ","-",t,n)}
v.nfp=function(e,t,n){return Xr(e,"+","-",t,n)}
v.nfc=function(e,t,n){return Xr(e,"","-",t,n,",")}
var Yr=function(e,t){t=t===r||t===null?t=8:t
if(e<0){e=4294967295+e+1}var n=Number(e).toString(16).toUpperCase()
while(n.length<t){n="0"+n}if(n.length>=t){n=n.substring(n.length-t,n.length)}return n}
v.hex=function(e,t){if(arguments.length===1){if(e instanceof Ir){t=4}else{t=8}}return Yr(e,t)}
function Zr(e){var t=parseInt("0x"+e,16)
if(t>2147483647){t-=4294967296}return t}v.unhex=function(e){if(e instanceof Array){var t=[]
for(var n=0;n<e.length;n++){t.push(Zr(e[n]))}return t}return Zr(e)}
v.loadStrings=function(e){if(localStorage[e]){return localStorage[e].split("\n")}var t=s(e)
if(typeof t!=="string"||t===""){return[]}t=t.replace(/(\r\n?)/g,"\n").replace(/\n$/,"")
return t.split("\n")}
v.saveStrings=function(e,t){localStorage[e]=t.join("\n")}
v.loadBytes=function(e){var t=s(e)
var n=[]
for(var r=0;r<t.length;r++){n.push(t.charCodeAt(r))}return n}
function Jr(e){return Array.prototype.slice.call(e,1)}v.matchAll=function(e,t){var n=[],r
var i=new RegExp(t,"g")
while((r=i.exec(e))!==null){n.push(r)
if(r[0].length===0){++i.lastIndex}}return n.length>0?n:null}
v.__contains=function(e,t){if(typeof e!=="string"){return e.contains.apply(e,Jr(arguments))}return e!==null&&t!==null&&typeof t==="string"&&e.indexOf(t)>-1}
v.__replaceAll=function(e,t,n){if(typeof e!=="string"){return e.replaceAll.apply(e,Jr(arguments))}return e.replace(new RegExp(t,"g"),n)}
v.__replaceFirst=function(e,t,n){if(typeof e!=="string"){return e.replaceFirst.apply(e,Jr(arguments))}return e.replace(new RegExp(t,""),n)}
v.__replace=function(e,t,n){if(typeof e!=="string"){return e.replace.apply(e,Jr(arguments))}if(t instanceof RegExp){return e.replace(t,n)}if(typeof t!=="string"){t=t.toString()}if(t===""){return e}var r=e.indexOf(t)
if(r<0){return e}var i=0,a=""
do{a+=e.substring(i,r)+n
i=r+t.length}while((r=e.indexOf(t,i))>=0)
return a+e.substring(i)}
v.__equals=function(e,t){if(e.equals instanceof Function){return e.equals.apply(e,Jr(arguments))}return e.valueOf()===t.valueOf()}
v.__equalsIgnoreCase=function(e,t){if(typeof e!=="string"){return e.equalsIgnoreCase.apply(e,Jr(arguments))}return e.toLowerCase()===t.toLowerCase()}
v.__toCharArray=function(e){if(typeof e!=="string"){return e.toCharArray.apply(e,Jr(arguments))}var t=[]
for(var n=0,r=e.length;n<r;++n){t[n]=new Ir(e.charAt(n))}return t}
v.__split=function(e,t,n){if(typeof e!=="string"){return e.split.apply(e,Jr(arguments))}var i=new RegExp(t)
if(n===r||n<1){return e.split(i)}var a=[],s=e,o
while((o=s.search(i))!==-1&&a.length<n-1){var l=i.exec(s).toString()
a.push(s.substring(0,o))
s=s.substring(o+l.length)}if(o!==-1||s!==""){a.push(s)}return a}
v.__codePointAt=function(e,t){var n=e.charCodeAt(t),r,i
if(55296<=n&&n<=56319){r=n
i=e.charCodeAt(t+1)
return(r-55296)*1024+(i-56320)+65536}return n}
v.match=function(e,t){return e.match(t)}
v.__startsWith=function(e,t,n){if(typeof e!=="string"){return e.startsWith.apply(e,Jr(arguments))}n=n||0
if(n<0||n>e.length){return false}return t===""||t===e?true:e.indexOf(t)===n}
v.__endsWith=function(e,t){if(typeof e!=="string"){return e.endsWith.apply(e,Jr(arguments))}var n=t?t.length:0
return t===""||t===e?true:e.indexOf(t)===e.length-n}
v.__hashCode=function(e){if(e.hashCode instanceof Function){return e.hashCode.apply(e,Jr(arguments))}return m(e)}
v.__printStackTrace=function(e){v.println("Exception: "+e.toString())}
v._clearLogs=function(){if(P.logger.clear){P.logger.clear()}}
var Qr=[]
v.println=function(e){var t=Qr.length
if(t){P.logger.log(Qr.join(""))
Qr.length=0}if(arguments.length===0&&t===0){P.logger.log("")}else if(arguments.length!==0){P.logger.log(e)}}
v.print=function(e){Qr.push(e)}
v.str=function(e){if(e instanceof Array){var t=[]
for(var n=0;n<e.length;n++){t.push(e[n].toString()+"")}return t}return e.toString()+""}
v.trim=function(e){if(e instanceof Array){var t=[]
for(var n=0;n<e.length;n++){t.push(e[n].replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,""))}return t}return e.replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,"")}
function ei(e){if(typeof e==="number"){return e!==0}if(typeof e==="boolean"){return e}if(typeof e==="string"){return e.toLowerCase()==="true"}if(e instanceof Ir){return e.code===49||e.code===84||e.code===116}}v.parseBoolean=function(e){if(e instanceof Array){var t=[]
for(var n=0;n<e.length;n++){t.push(ei(e[n]))}return t}return ei(e)}
v.parseByte=function(e){if(e instanceof Array){var t=[]
for(var n=0;n<e.length;n++){t.push(0-(e[n]&128)|e[n]&127)}return t}return 0-(e&128)|e&127}
v.parseChar=function(e){if(typeof e==="number"){return new Ir(String.fromCharCode(e&65535))}if(e instanceof Array){var t=[]
for(var n=0;n<e.length;n++){t.push(new Ir(String.fromCharCode(e[n]&65535)))}return t}throw"char() may receive only one argument of type int, byte, int[], or byte[]."}
function ti(e){if(typeof e==="number"){return e}if(typeof e==="boolean"){return e?1:0}if(typeof e==="string"){return parseFloat(e)}if(e instanceof Ir){return e.code}}v.parseFloat=function(e){if(e instanceof Array){var t=[]
for(var n=0;n<e.length;n++){t.push(ti(e[n]))}return t}return ti(e)}
function ni(e,t){if(typeof e==="number"){return e&4294967295}if(typeof e==="boolean"){return e?1:0}if(typeof e==="string"){var n=parseInt(e,t||10)
return n&4294967295}if(e instanceof Ir){return e.code}}v.parseInt=function(e,t){if(e instanceof Array){var n=[]
for(var r=0;r<e.length;r++){if(typeof e[r]==="string"&&!/^\s*[+\-]?\d+\s*$/.test(e[r])){n.push(0)}else{n.push(ni(e[r],t))}}return n}return ni(e,t)}
v.__int_cast=function(e){return 0|e}
v.__instanceof=function(e,t){if(typeof t!=="function"){throw"Function is expected as type argument for instanceof operator"}if(typeof e==="string"){return t===Object||t===String}if(e instanceof t){return true}if(typeof e!=="object"||e===null){return false}var n=e.constructor
if(t.$isInterface){var r=[]
while(n){if(n.$interfaces){r=r.concat(n.$interfaces)}n=n.$base}while(r.length>0){var i=r.shift()
if(i===t){return true}if(i.$interfaces){r=r.concat(i.$interfaces)}}return false}while(n.hasOwnProperty("$base")){n=n.$base
if(n===t){return true}}return false}
v.abs=n.abs
v.ceil=n.ceil
v.constrain=function(e,t,n){return e>n?n:e<t?t:e}
v.dist=function(){var e,t,r
if(arguments.length===4){e=arguments[0]-arguments[2]
t=arguments[1]-arguments[3]
return n.sqrt(e*e+t*t)}if(arguments.length===6){e=arguments[0]-arguments[3]
t=arguments[1]-arguments[4]
r=arguments[2]-arguments[5]
return n.sqrt(e*e+t*t+r*r)}}
v.exp=n.exp
v.floor=n.floor
v.lerp=function(e,t,n){return(t-e)*n+e}
v.log=n.log
v.mag=function(e,t,r){if(r){return n.sqrt(e*e+t*t+r*r)}return n.sqrt(e*e+t*t)}
v.map=function(e,t,n,r,i){return r+(i-r)*((e-t)/(n-t))}
v.max=function(){if(arguments.length===2){return arguments[0]<arguments[1]?arguments[1]:arguments[0]}var e=arguments.length===1?arguments[0]:arguments
if(!("length"in e&&e.length>0)){throw"Non-empty array is expected"}var t=e[0],n=e.length
for(var r=1;r<n;++r){if(t<e[r]){t=e[r]}}return t}
v.min=function(){if(arguments.length===2){return arguments[0]<arguments[1]?arguments[0]:arguments[1]}var e=arguments.length===1?arguments[0]:arguments
if(!("length"in e&&e.length>0)){throw"Non-empty array is expected"}var t=e[0],n=e.length
for(var r=1;r<n;++r){if(t>e[r]){t=e[r]}}return t}
v.norm=function(e,t,n){return(e-t)/(n-t)}
v.pow=n.pow
v.round=n.round
v.sq=function(e){return e*e}
v.sqrt=n.sqrt
v.convertToDegrees=function(e){return v.angleMode==="degrees"?v.degrees(e):e}
v.convertToRadians=function(e){return v.angleMode==="degrees"?v.radians(e):e}
var ri=function(){var e=arguments
return function(){var t=arguments
for(var n=0;n<e.length;n++){t=[e[n].apply(e[n],t)]}return t[0]}}
v.acos=ri(n.acos,v.convertToDegrees)
v.asin=ri(n.asin,v.convertToDegrees)
v.atan=ri(n.atan,v.convertToDegrees)
v.atan2=ri(n.atan2,v.convertToDegrees)
v.cos=ri(v.convertToRadians,n.cos)
v.degrees=function(e){return e*180/n.PI}
v.radians=function(e){return e/180*n.PI}
v.sin=ri(v.convertToRadians,n.sin)
v.tan=ri(v.convertToRadians,n.tan)
Vn=v.angleMode==="degrees"?60:v.radians(60)
jn=zn/v.tan(Vn/2)
var ii=n.random
v.random=function(){if(arguments.length===0){return ii()}if(arguments.length===1){return ii()*arguments[0]}var e=arguments[0],t=arguments[1]
return ii()*(t-e)+e}
function ai(e,t){var n=e||362436069,r=t||521288629
var i=function(){n=36969*(n&65535)+(n>>>16)&4294967295
r=18e3*(r&65535)+(r>>>16)&4294967295
return((n&65535)<<16|r&65535)&4294967295}
this.nextDouble=function(){var e=i()/4294967296
return e<0?1+e:e}
this.nextInt=i}ai.createRandomized=function(){var e=new Date
return new ai(e/6e4&4294967295,e&4294967295)}
v.randomSeed=function(e){ii=new ai(e).nextDouble}
v.Random=function(e){var t=false,i,a
this.nextGaussian=function(){if(t){t=false
return i}var e,r,s
do{e=2*a()-1
r=2*a()-1
s=e*e+r*r}while(s>=1||s===0)
var o=n.sqrt(-2*n.log(s)/s)
i=r*o
t=true
return e*o}
a=e===r?n.random:new ai(e).nextDouble}
function si(e){var t=e!==r?new ai(e):ai.createRandomized()
var i,a
var s=new h(512)
for(i=0;i<256;++i){s[i]=i}for(i=0;i<256;++i){var o=s[a=t.nextInt()&255]
s[a]=s[i]
s[i]=o}for(i=0;i<256;++i){s[i+256]=s[i]}function l(e,t,n,r){var i=e&15
var a=i<8?t:n,s=i<4?n:i===12||i===14?t:r
return((i&1)===0?a:-a)+((i&2)===0?s:-s)}function u(e,t,n){var r=(e&1)===0?t:n
return(e&2)===0?-r:r}function f(e,t){return(e&1)===0?-t:t}function c(e,t,n){return t+e*(n-t)}this.noise3d=function(e,t,r){var i=n.floor(e)&255,a=n.floor(t)&255,o=n.floor(r)&255
e-=n.floor(e)
t-=n.floor(t)
r-=n.floor(r)
var u=(3-2*e)*e*e,f=(3-2*t)*t*t,h=(3-2*r)*r*r
var p=s[i]+a,m=s[p]+o,d=s[p+1]+o,g=s[i+1]+a,v=s[g]+o,y=s[g+1]+o
return c(h,c(f,c(u,l(s[m],e,t,r),l(s[v],e-1,t,r)),c(u,l(s[d],e,t-1,r),l(s[y],e-1,t-1,r))),c(f,c(u,l(s[m+1],e,t,r-1),l(s[v+1],e-1,t,r-1)),c(u,l(s[d+1],e,t-1,r-1),l(s[y+1],e-1,t-1,r-1))))}
this.noise2d=function(e,t){var r=n.floor(e)&255,i=n.floor(t)&255
e-=n.floor(e)
t-=n.floor(t)
var a=(3-2*e)*e*e,o=(3-2*t)*t*t
var l=s[r]+i,f=s[r+1]+i
return c(o,c(a,u(s[l],e,t),u(s[f],e-1,t)),c(a,u(s[l+1],e,t-1),u(s[f+1],e-1,t-1)))}
this.noise1d=function(e){var t=n.floor(e)&255
e-=n.floor(e)
var r=(3-2*e)*e*e
return c(r,f(s[t],e),f(s[t+1],e-1))}}var oi={generator:r,octaves:4,fallout:.5,seed:r}
v.noise=function(e,t,n){if(oi.generator===r){oi.generator=new si(oi.seed)}var i=oi.generator
var a=1,s=1,o=0
for(var l=0;l<oi.octaves;++l){a*=oi.fallout
switch(arguments.length){case 1:o+=a*(1+i.noise1d(s*e))/2
break
case 2:o+=a*(1+i.noise2d(s*e,s*t))/2
break
case 3:o+=a*(1+i.noise3d(s*e,s*t,s*n))/2
break}s*=2}return o}
v.noiseDetail=function(e,t){oi.octaves=e
if(t!==r){oi.fallout=t}}
v.noiseSeed=function(e){oi.seed=e
oi.generator=r}
Sr.prototype.size=function(e,t,r){if(O){v.stroke(0)}if(C){v.fill(255)}var i={fillStyle:b.fillStyle,strokeStyle:b.strokeStyle,lineCap:b.lineCap,lineJoin:b.lineJoin}
if(l.style.length>0){l.style.removeProperty("width")
l.style.removeProperty("height")}l.width=v.width=e||100
l.height=v.height=t||100
for(var a in i){if(i.hasOwnProperty(a)){b[a]=i[a]}}v.textFont(ln)
v.background()
pn=n.max(1e3,e*t*.05)
v.externals.context=b
for(var s=0;s<p.SINCOS_LENGTH;s++){Cn[s]=v.sin(v.angleMode==="degrees"?s:v.radians(s))
Tn[s]=v.cos(v.angleMode==="degrees"?s:v.radians(s))}}
Ar.prototype.size=function(e,t,n){if(b===r){b=l.getContext("2d")
Nn=new Fr
Dn=new Fr
On=new Nr
Mn=new Nr}Sr.prototype.size.apply(this,arguments)}
_r.prototype.size=function(){var e=false
return function t(n,r,i){if(e){throw"Multiple calls to size() for 3D renders are not allowed."}e=true
function a(e){var t=["experimental-webgl","webgl","webkit-3d"],n
for(var r=0,i=t.length;r<i;r++){n=e.getContext(t[r],{antialias:false})
if(n){break}}return n}try{l.width=v.width=n||100
l.height=v.height=r||100
b=a(l)
$t=b.createTexture()
Ht=b.createTexture()}catch(s){P.debug(s)}if(!b){throw"WebGL context is not supported on this browser."}b.viewport(0,0,l.width,l.height)
b.enable(b.DEPTH_TEST)
b.enable(b.BLEND)
b.blendFunc(b.SRC_ALPHA,b.ONE_MINUS_SRC_ALPHA)
Lt=br(b,ur,fr)
Rt=br(b,or,lr)
v.strokeWeight(1)
Pt=br(b,hr,pr)
b.useProgram(Pt)
dr("usingTexture3d",Pt,"usingTexture",Xt)
v.lightFalloff(1,0,0)
v.shininess(1)
v.ambient(255,255,255)
v.specular(0,0,0)
v.emissive(0,0,0)
Ot=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Ot)
b.bufferData(b.ARRAY_BUFFER,nr,b.STATIC_DRAW)
Mt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Mt)
b.bufferData(b.ARRAY_BUFFER,ir,b.STATIC_DRAW)
Nt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Nt)
b.bufferData(b.ARRAY_BUFFER,rr,b.STATIC_DRAW)
Dt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Dt)
b.bufferData(b.ARRAY_BUFFER,ar,b.STATIC_DRAW)
Ft=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Ft)
b.bufferData(b.ARRAY_BUFFER,sr,b.STATIC_DRAW)
Wt=b.createBuffer()
Bt=b.createBuffer()
Gt=b.createBuffer()
Vt=b.createBuffer()
Ut=b.createBuffer()
jt=b.createBuffer()
zt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,zt)
b.bufferData(b.ARRAY_BUFFER,new u([0,0,0]),b.STATIC_DRAW)
Yt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Yt)
b.bufferData(b.ARRAY_BUFFER,new u([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),b.STATIC_DRAW)
Zt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Zt)
b.bufferData(b.ARRAY_BUFFER,new u([0,0,1,0,1,1,0,1]),b.STATIC_DRAW)
Jt=b.createBuffer()
b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,Jt)
b.bufferData(b.ELEMENT_ARRAY_BUFFER,new c([0,1,2,2,3,0]),b.STATIC_DRAW)
Ln=new Dr
Rn=new Dr
On=new Dr
Mn=new Dr
Wn=new Dr
v.camera()
v.perspective()
Nn=new Fr
Dn=new Fr
Et=new Dr
St=new Dr
At=new Dr
_t=new Dr
Ct=new Dr
Tt=new Dr
Tt.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0)
Sr.prototype.size.apply(this,arguments)}}()
Ar.prototype.ambientLight=Sr.prototype.a3DOnlyFunction
_r.prototype.ambientLight=function(e,t,n,r,i,a){if(kn===p.MAX_LIGHTS){throw"can only create "+p.MAX_LIGHTS+" lights"}var s=new y(r,i,a)
var o=new Dr
o.scale(1,-1,1)
o.apply(On.array())
o.mult(s,s)
var l=Wr(e,t,n,0)
var u=[((l&p.RED_MASK)>>>16)/255,((l&p.GREEN_MASK)>>>8)/255,(l&p.BLUE_MASK)/255]
b.useProgram(Pt)
mr("lights.color.3d."+kn,Pt,"lights"+kn+".color",u)
mr("lights.position.3d."+kn,Pt,"lights"+kn+".position",s.array())
dr("lights.type.3d."+kn,Pt,"lights"+kn+".type",0)
dr("lightCount3d",Pt,"lightCount",++kn)}
Ar.prototype.directionalLight=Sr.prototype.a3DOnlyFunction
_r.prototype.directionalLight=function(e,t,n,r,i,a){if(kn===p.MAX_LIGHTS){throw"can only create "+p.MAX_LIGHTS+" lights"}b.useProgram(Pt)
var s=new Dr
s.scale(1,-1,1)
s.apply(On.array())
s=s.array()
var o=[s[0]*r+s[4]*i+s[8]*a,s[1]*r+s[5]*i+s[9]*a,s[2]*r+s[6]*i+s[10]*a]
var l=Wr(e,t,n,0)
var u=[((l&p.RED_MASK)>>>16)/255,((l&p.GREEN_MASK)>>>8)/255,(l&p.BLUE_MASK)/255]
mr("lights.color.3d."+kn,Pt,"lights"+kn+".color",u)
mr("lights.position.3d."+kn,Pt,"lights"+kn+".position",o)
dr("lights.type.3d."+kn,Pt,"lights"+kn+".type",1)
dr("lightCount3d",Pt,"lightCount",++kn)}
Ar.prototype.lightFalloff=Sr.prototype.a3DOnlyFunction
_r.prototype.lightFalloff=function(e,t,n){b.useProgram(Pt)
mr("falloff3d",Pt,"falloff",[e,t,n])}
Ar.prototype.lightSpecular=Sr.prototype.a3DOnlyFunction
_r.prototype.lightSpecular=function(e,t,n){var r=Wr(e,t,n,0)
var i=[((r&p.RED_MASK)>>>16)/255,((r&p.GREEN_MASK)>>>8)/255,(r&p.BLUE_MASK)/255]
b.useProgram(Pt)
mr("specular3d",Pt,"specular",i)}
v.lights=function(){v.ambientLight(128,128,128)
v.directionalLight(128,128,128,0,0,-1)
v.lightFalloff(1,0,0)
v.lightSpecular(0,0,0)}
Ar.prototype.pointLight=Sr.prototype.a3DOnlyFunction
_r.prototype.pointLight=function(e,t,n,r,i,a){if(kn===p.MAX_LIGHTS){throw"can only create "+p.MAX_LIGHTS+" lights"}var s=new y(r,i,a)
var o=new Dr
o.scale(1,-1,1)
o.apply(On.array())
o.mult(s,s)
var l=Wr(e,t,n,0)
var u=[((l&p.RED_MASK)>>>16)/255,((l&p.GREEN_MASK)>>>8)/255,(l&p.BLUE_MASK)/255]
b.useProgram(Pt)
mr("lights.color.3d."+kn,Pt,"lights"+kn+".color",u)
mr("lights.position.3d."+kn,Pt,"lights"+kn+".position",s.array())
dr("lights.type.3d."+kn,Pt,"lights"+kn+".type",2)
dr("lightCount3d",Pt,"lightCount",++kn)}
Ar.prototype.noLights=Sr.prototype.a3DOnlyFunction
_r.prototype.noLights=function(){kn=0
b.useProgram(Pt)
dr("lightCount3d",Pt,"lightCount",kn)}
Ar.prototype.spotLight=Sr.prototype.a3DOnlyFunction
_r.prototype.spotLight=function(e,t,n,r,i,a,s,o,l,u,f){if(kn===p.MAX_LIGHTS){throw"can only create "+p.MAX_LIGHTS+" lights"}b.useProgram(Pt)
var c=new y(r,i,a)
var h=new Dr
h.scale(1,-1,1)
h.apply(On.array())
h.mult(c,c)
h=h.array()
var m=[h[0]*s+h[4]*o+h[8]*l,h[1]*s+h[5]*o+h[9]*l,h[2]*s+h[6]*o+h[10]*l]
var d=Wr(e,t,n,0)
var g=[((d&p.RED_MASK)>>>16)/255,((d&p.GREEN_MASK)>>>8)/255,(d&p.BLUE_MASK)/255]
mr("lights.color.3d."+kn,Pt,"lights"+kn+".color",g)
mr("lights.position.3d."+kn,Pt,"lights"+kn+".position",c.array())
mr("lights.direction.3d."+kn,Pt,"lights"+kn+".direction",m)
mr("lights.concentration.3d."+kn,Pt,"lights"+kn+".concentration",f)
mr("lights.angle.3d."+kn,Pt,"lights"+kn+".angle",u)
dr("lights.type.3d."+kn,Pt,"lights"+kn+".type",3)
dr("lightCount3d",Pt,"lightCount",++kn)}
Ar.prototype.beginCamera=function(){throw"beginCamera() is not available in 2D mode"}
_r.prototype.beginCamera=function(){if(Bn){throw"You cannot call beginCamera() again before calling endCamera()"}Bn=true
On=Rn
Mn=Ln}
Ar.prototype.endCamera=function(){throw"endCamera() is not available in 2D mode"}
_r.prototype.endCamera=function(){if(!Bn){throw"You cannot call endCamera() before calling beginCamera()"}On.set(Ln)
Mn.set(Rn)
Bn=false}
v.camera=function(e,t,n,i,a,s,o,l,u){if(e===r){Un=v.width/2
zn=v.height/2
jn=zn/v.tan(Vn/2)
e=Un
t=zn
n=jn
i=Un
a=zn
s=0
o=0
l=1
u=0}var f=new y(e-i,t-a,n-s)
var c=new y(o,l,u)
f.normalize()
var h=y.cross(c,f)
c=y.cross(f,h)
h.normalize()
c.normalize()
var p=h.x,m=h.y,d=h.z
var g=c.x,b=c.y,x=c.z
var k=f.x,w=f.y,E=f.z
Ln.set(p,m,d,0,g,b,x,0,k,w,E,0,0,0,0,1)
Ln.translate(-e,-t,-n)
Rn.reset()
Rn.invApply(p,m,d,0,g,b,x,0,k,w,E,0,0,0,0,1)
Rn.translate(e,t,n)
On.set(Ln)
Mn.set(Rn)}
v.perspective=function(e,t,n,r){if(arguments.length===0){zn=l.height/2
jn=zn/v.tan(Vn/2)
$n=jn/10
Hn=jn*10
qn=v.width/v.height
e=Vn
t=qn
n=$n
r=Hn}var i,a,s,o
i=n*v.tan(e/2)
a=-i
s=i*t
o=a*t
v.frustum(o,s,a,i,n,r)}
Ar.prototype.frustum=function(){throw"Processing.js: frustum() is not supported in 2D mode"}
_r.prototype.frustum=function(e,t,n,r,i,a){Gn=true
Wn=new Dr
Wn.set(2*i/(t-e),0,(t+e)/(t-e),0,0,2*i/(r-n),(r+n)/(r-n),0,0,0,-(a+i)/(a-i),-(2*a*i)/(a-i),0,0,-1,0)
var s=new Dr
s.set(Wn)
s.transpose()
b.useProgram(Lt)
gr("projection2d",Lt,"projection",false,s.array())
b.useProgram(Pt)
gr("projection3d",Pt,"projection",false,s.array())
b.useProgram(Rt)
gr("uProjectionUS",Rt,"uProjection",false,s.array())}
v.ortho=function(e,t,n,r,i,a){if(arguments.length===0){e=0
t=v.width
n=0
r=v.height
i=-10
a=10}var s=2/(t-e)
var o=2/(r-n)
var l=-2/(a-i)
var u=-(t+e)/(t-e)
var f=-(r+n)/(r-n)
var c=-(a+i)/(a-i)
Wn=new Dr
Wn.set(s,0,0,u,0,o,0,f,0,0,l,c,0,0,0,1)
var h=new Dr
h.set(Wn)
h.transpose()
b.useProgram(Lt)
gr("projection2d",Lt,"projection",false,h.array())
b.useProgram(Pt)
gr("projection3d",Pt,"projection",false,h.array())
b.useProgram(Rt)
gr("uProjectionUS",Rt,"uProjection",false,h.array())
Gn=false}
v.printProjection=function(){Wn.print()}
v.printCamera=function(){Ln.print()}
Ar.prototype.box=Sr.prototype.a3DOnlyFunction
_r.prototype.box=function(e,t,n){if(!t||!n){t=n=e}var r=new Dr
r.scale(e,t,n)
var i=new Dr
i.scale(1,-1,1)
i.apply(On.array())
i.transpose()
if(C){b.useProgram(Pt)
gr("model3d",Pt,"model",false,r.array())
gr("view3d",Pt,"view",false,i.array())
b.enable(b.POLYGON_OFFSET_FILL)
b.polygonOffset(1,1)
mr("color3d",Pt,"color",T)
if(kn>0){var a=new Dr
a.set(i)
var s=new Dr
s.set(r)
a.mult(s)
var o=new Dr
o.set(a)
o.invert()
o.transpose()
gr("normalTransform3d",Pt,"normalTransform",false,o.array())
vr("normal3d",Pt,"Normal",3,Mt)}else{yr("normal3d",Pt,"Normal")}vr("vertex3d",Pt,"Vertex",3,Ot)
yr("aColor3d",Pt,"aColor")
yr("aTexture3d",Pt,"aTexture")
b.drawArrays(b.TRIANGLES,0,nr.length/3)
b.disable(b.POLYGON_OFFSET_FILL)}if(F>0&&O){b.useProgram(Lt)
gr("model2d",Lt,"model",false,r.array())
gr("view2d",Lt,"view",false,i.array())
mr("color2d",Lt,"color",M)
dr("picktype2d",Lt,"picktype",0)
vr("vertex2d",Lt,"Vertex",3,Nt)
yr("aTextureCoord2d",Lt,"aTextureCoord")
b.drawArrays(b.LINES,0,rr.length/3)}}
var li=function(){var e
In=[]
for(e=0;e<En;e++){In.push(0)
In.push(-1)
In.push(0)
In.push(Sn[e])
In.push(An[e])
In.push(_n[e])}In.push(0)
In.push(-1)
In.push(0)
In.push(Sn[0])
In.push(An[0])
In.push(_n[0])
var t,n,r
var i=0
for(e=2;e<wn;e++){t=n=i
i+=En
r=i
for(var a=0;a<En;a++){In.push(Sn[t])
In.push(An[t])
In.push(_n[t++])
In.push(Sn[r])
In.push(An[r])
In.push(_n[r++])}t=n
r=i
In.push(Sn[t])
In.push(An[t])
In.push(_n[t])
In.push(Sn[r])
In.push(An[r])
In.push(_n[r])}for(e=0;e<En;e++){r=i+e
In.push(Sn[r])
In.push(An[r])
In.push(_n[r])
In.push(0)
In.push(1)
In.push(0)}In.push(Sn[i])
In.push(An[i])
In.push(_n[i])
In.push(0)
In.push(1)
In.push(0)
b.bindBuffer(b.ARRAY_BUFFER,Wt)
b.bufferData(b.ARRAY_BUFFER,new u(In),b.STATIC_DRAW)}
v.sphereDetail=function(e,t){var n
if(arguments.length===1){e=t=arguments[0]}if(e<3){e=3}if(t<2){t=2}if(e===En&&t===wn){return}var r=p.SINCOS_LENGTH/e
var i=new u(e)
var a=new u(e)
for(n=0;n<e;n++){i[n]=Tn[n*r%p.SINCOS_LENGTH|0]
a[n]=Cn[n*r%p.SINCOS_LENGTH|0]}var s=e*(t-1)+2
var o=0
Sn=new u(s)
An=new u(s)
_n=new u(s)
var l=p.SINCOS_LENGTH*.5/t
var f=l
for(n=1;n<t;n++){var c=Cn[f%p.SINCOS_LENGTH|0]
var h=-Tn[f%p.SINCOS_LENGTH|0]
for(var m=0;m<e;m++){Sn[o]=i[m]*c
An[o]=h
_n[o++]=a[m]*c}f+=l}En=e
wn=t
li()}
Ar.prototype.sphere=Sr.prototype.a3DOnlyFunction
_r.prototype.sphere=function(){var e=arguments[0]
if(En<3||wn<2){v.sphereDetail(30)}var t=new Dr
t.scale(e,e,e)
var n=new Dr
n.scale(1,-1,1)
n.apply(On.array())
n.transpose()
if(C){if(kn>0){var r=new Dr
r.set(n)
var i=new Dr
i.set(t)
r.mult(i)
var a=new Dr
a.set(r)
a.invert()
a.transpose()
gr("normalTransform3d",Pt,"normalTransform",false,a.array())
vr("normal3d",Pt,"Normal",3,Wt)}else{yr("normal3d",Pt,"Normal")}b.useProgram(Pt)
yr("aTexture3d",Pt,"aTexture")
gr("model3d",Pt,"model",false,t.array())
gr("view3d",Pt,"view",false,n.array())
vr("vertex3d",Pt,"Vertex",3,Wt)
yr("aColor3d",Pt,"aColor")
b.enable(b.POLYGON_OFFSET_FILL)
b.polygonOffset(1,1)
mr("color3d",Pt,"color",T)
b.drawArrays(b.TRIANGLE_STRIP,0,In.length/3)
b.disable(b.POLYGON_OFFSET_FILL)}if(F>0&&O){b.useProgram(Lt)
gr("model2d",Lt,"model",false,t.array())
gr("view2d",Lt,"view",false,n.array())
vr("vertex2d",Lt,"Vertex",3,Wt)
yr("aTextureCoord2d",Lt,"aTextureCoord")
mr("color2d",Lt,"color",M)
dr("picktype2d",Lt,"picktype",0)
b.drawArrays(b.LINE_STRIP,0,In.length/3)}}
v.modelX=function(e,t,n){var r=On.array()
var i=Rn.array()
var a=r[0]*e+r[1]*t+r[2]*n+r[3]
var s=r[4]*e+r[5]*t+r[6]*n+r[7]
var o=r[8]*e+r[9]*t+r[10]*n+r[11]
var l=r[12]*e+r[13]*t+r[14]*n+r[15]
var u=i[0]*a+i[1]*s+i[2]*o+i[3]*l
var f=i[12]*a+i[13]*s+i[14]*o+i[15]*l
return f!==0?u/f:u}
v.modelY=function(e,t,n){var r=On.array()
var i=Rn.array()
var a=r[0]*e+r[1]*t+r[2]*n+r[3]
var s=r[4]*e+r[5]*t+r[6]*n+r[7]
var o=r[8]*e+r[9]*t+r[10]*n+r[11]
var l=r[12]*e+r[13]*t+r[14]*n+r[15]
var u=i[4]*a+i[5]*s+i[6]*o+i[7]*l
var f=i[12]*a+i[13]*s+i[14]*o+i[15]*l
return f!==0?u/f:u}
v.modelZ=function(e,t,n){var r=On.array()
var i=Rn.array()
var a=r[0]*e+r[1]*t+r[2]*n+r[3]
var s=r[4]*e+r[5]*t+r[6]*n+r[7]
var o=r[8]*e+r[9]*t+r[10]*n+r[11]
var l=r[12]*e+r[13]*t+r[14]*n+r[15]
var u=i[8]*a+i[9]*s+i[10]*o+i[11]*l
var f=i[12]*a+i[13]*s+i[14]*o+i[15]*l
return f!==0?u/f:u}
Ar.prototype.ambient=Sr.prototype.a3DOnlyFunction
_r.prototype.ambient=function(e,t,n){b.useProgram(Pt)
dr("usingMat3d",Pt,"usingMat",true)
var r=v.color(e,t,n)
mr("mat_ambient3d",Pt,"mat_ambient",v.color.toGLArray(r).slice(0,3))}
Ar.prototype.emissive=Sr.prototype.a3DOnlyFunction
_r.prototype.emissive=function(e,t,n){b.useProgram(Pt)
dr("usingMat3d",Pt,"usingMat",true)
var r=v.color(e,t,n)
mr("mat_emissive3d",Pt,"mat_emissive",v.color.toGLArray(r).slice(0,3))}
Ar.prototype.shininess=Sr.prototype.a3DOnlyFunction
_r.prototype.shininess=function(e){b.useProgram(Pt)
dr("usingMat3d",Pt,"usingMat",true)
mr("shininess3d",Pt,"shininess",e)}
Ar.prototype.specular=Sr.prototype.a3DOnlyFunction
_r.prototype.specular=function(e,t,n){b.useProgram(Pt)
dr("usingMat3d",Pt,"usingMat",true)
var r=v.color(e,t,n)
mr("mat_specular3d",Pt,"mat_specular",v.color.toGLArray(r).slice(0,3))}
v.screenX=function(e,t,n){var r=On.array()
if(r.length===16){var i=r[0]*e+r[1]*t+r[2]*n+r[3]
var a=r[4]*e+r[5]*t+r[6]*n+r[7]
var s=r[8]*e+r[9]*t+r[10]*n+r[11]
var o=r[12]*e+r[13]*t+r[14]*n+r[15]
var l=Wn.array()
var u=l[0]*i+l[1]*a+l[2]*s+l[3]*o
var f=l[12]*i+l[13]*a+l[14]*s+l[15]*o
if(f!==0){u/=f}return v.width*(1+u)/2}return On.multX(e,t)}
v.screenY=function fa(e,t,n){var r=On.array()
if(r.length===16){var i=r[0]*e+r[1]*t+r[2]*n+r[3]
var a=r[4]*e+r[5]*t+r[6]*n+r[7]
var s=r[8]*e+r[9]*t+r[10]*n+r[11]
var o=r[12]*e+r[13]*t+r[14]*n+r[15]
var l=Wn.array()
var u=l[4]*i+l[5]*a+l[6]*s+l[7]*o
var f=l[12]*i+l[13]*a+l[14]*s+l[15]*o
if(f!==0){u/=f}return v.height*(1+u)/2}return On.multY(e,t)}
v.screenZ=function ca(e,t,n){var r=On.array()
if(r.length!==16){return 0}var i=Wn.array()
var a=r[0]*e+r[1]*t+r[2]*n+r[3]
var s=r[4]*e+r[5]*t+r[6]*n+r[7]
var o=r[8]*e+r[9]*t+r[10]*n+r[11]
var l=r[12]*e+r[13]*t+r[14]*n+r[15]
var u=i[8]*a+i[9]*s+i[10]*o+i[11]*l
var f=i[12]*a+i[13]*s+i[14]*o+i[15]*l
if(f!==0){u/=f}return(u+1)/2}
Sr.prototype.fill=function(){var e=v.color(arguments[0],arguments[1],arguments[2],arguments[3])
if(e===L&&C){return}C=true
L=e}
Ar.prototype.fill=function(){Sr.prototype.fill.apply(this,arguments)
R=true}
_r.prototype.fill=function(){Sr.prototype.fill.apply(this,arguments)
T=v.color.toGLArray(L)}
function ui(){if(C){if(R){b.fillStyle=v.color.toString(L)
R=false}b.fill()}}v.noFill=function(){C=false}
Sr.prototype.stroke=function(){var e=v.color(arguments[0],arguments[1],arguments[2],arguments[3])
if(e===N&&O){return}O=true
N=e}
Ar.prototype.stroke=function(){Sr.prototype.stroke.apply(this,arguments)
D=true}
_r.prototype.stroke=function(){Sr.prototype.stroke.apply(this,arguments)
M=v.color.toGLArray(N)}
function fi(){if(O){if(D){b.strokeStyle=v.color.toString(N)
D=false}b.stroke()}}v.noStroke=function(){O=false}
Sr.prototype.strokeWeight=function(e){F=e}
Ar.prototype.strokeWeight=function(e){Sr.prototype.strokeWeight.apply(this,arguments)
b.lineWidth=e}
_r.prototype.strokeWeight=function(e){Sr.prototype.strokeWeight.apply(this,arguments)
b.useProgram(Lt)
mr("pointSize2d",Lt,"pointSize",e)
b.useProgram(Rt)
mr("pointSizeUnlitShape",Rt,"pointSize",e)
b.lineWidth(e)}
v.strokeCap=function(e){E.$ensureContext().lineCap=e}
v.strokeJoin=function(e){E.$ensureContext().lineJoin=e}
Ar.prototype.smooth=function(){B=true
var e=l.style
e.setProperty("image-rendering","optimizeQuality","important")
e.setProperty("-ms-interpolation-mode","bicubic","important")
if(b.hasOwnProperty("mozImageSmoothingEnabled")){b.mozImageSmoothingEnabled=true}}
_r.prototype.smooth=i
Ar.prototype.noSmooth=function(){B=false
var e=l.style
e.setProperty("image-rendering","optimizeSpeed","important")
e.setProperty("image-rendering","-moz-crisp-edges","important")
e.setProperty("image-rendering","-webkit-optimize-contrast","important")
e.setProperty("image-rendering","optimize-contrast","important")
e.setProperty("-ms-interpolation-mode","nearest-neighbor","important")
if(b.hasOwnProperty("mozImageSmoothingEnabled")){b.mozImageSmoothingEnabled=false}}
_r.prototype.noSmooth=i
Ar.prototype.point=function(e,t){if(!O){return}if(!B){e=n.round(e)
t=n.round(t)}b.fillStyle=v.color.toString(N)
R=true
if(F>1){b.beginPath()
b.arc(e,t,F/2,0,p.TWO_PI,false)
b.fill()}else{b.fillRect(e,t,1,1)}}
_r.prototype.point=function(e,t,n){var r=new Dr
r.translate(e,t,n||0)
r.transpose()
var i=new Dr
i.scale(1,-1,1)
i.apply(On.array())
i.transpose()
b.useProgram(Lt)
gr("model2d",Lt,"model",false,r.array())
gr("view2d",Lt,"view",false,i.array())
if(F>0&&O){mr("color2d",Lt,"color",M)
dr("picktype2d",Lt,"picktype",0)
vr("vertex2d",Lt,"Vertex",3,zt)
yr("aTextureCoord2d",Lt,"aTextureCoord")
b.drawArrays(b.POINTS,0,1)}}
v.beginShape=function(e){Q=e
tt=[]
Kn=[]}
Ar.prototype.vertex=function(e,t,n,r){var i=[]
if(Qn){Qn=false}i["isVert"]=true
i[0]=e
i[1]=t
i[2]=0
i[3]=n
i[4]=r
i[5]=L
i[6]=N
Kn.push(i)}
_r.prototype.vertex=function(e,t,n,i,a){var s=[]
if(Qn){Qn=false}s["isVert"]=true
if(a===r&&Xt){a=i
i=n
n=0}if(i!==r&&a!==r){if(Kt===p.IMAGE){i/=qt.width
a/=qt.height}i=i>1?1:i
i=i<0?0:i
a=a>1?1:a
a=a<0?0:a}s[0]=e
s[1]=t
s[2]=n||0
s[3]=i||0
s[4]=a||0
s[5]=T[0]
s[6]=T[1]
s[7]=T[2]
s[8]=T[3]
s[9]=M[0]
s[10]=M[1]
s[11]=M[2]
s[12]=M[3]
s[13]=j
s[14]=H
s[15]=q
Kn.push(s)}
var ci=function(e,t){var n=new Dr
n.scale(1,-1,1)
n.apply(On.array())
n.transpose()
b.useProgram(Rt)
gr("uViewUS",Rt,"uView",false,n.array())
vr("aVertexUS",Rt,"aVertex",3,zt)
b.bufferData(b.ARRAY_BUFFER,new u(e),b.STREAM_DRAW)
vr("aColorUS",Rt,"aColor",4,Vt)
b.bufferData(b.ARRAY_BUFFER,new u(t),b.STREAM_DRAW)
b.drawArrays(b.POINTS,0,e.length/3)}
var hi=function(e,t,n){var r
if(t==="LINES"){r=b.LINES}else if(t==="LINE_LOOP"){r=b.LINE_LOOP}else{r=b.LINE_STRIP}var i=new Dr
i.scale(1,-1,1)
i.apply(On.array())
i.transpose()
b.useProgram(Rt)
gr("uViewUS",Rt,"uView",false,i.array())
vr("aVertexUS",Rt,"aVertex",3,Bt)
b.bufferData(b.ARRAY_BUFFER,new u(e),b.STREAM_DRAW)
vr("aColorUS",Rt,"aColor",4,Ut)
b.bufferData(b.ARRAY_BUFFER,new u(n),b.STREAM_DRAW)
b.drawArrays(r,0,e.length/3)}
var pi=function(e,t,n,r){var i
if(t==="TRIANGLES"){i=b.TRIANGLES}else if(t==="TRIANGLE_FAN"){i=b.TRIANGLE_FAN}else{i=b.TRIANGLE_STRIP}var a=new Dr
a.scale(1,-1,1)
a.apply(On.array())
a.transpose()
b.useProgram(Pt)
gr("model3d",Pt,"model",false,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])
gr("view3d",Pt,"view",false,a.array())
b.enable(b.POLYGON_OFFSET_FILL)
b.polygonOffset(1,1)
mr("color3d",Pt,"color",[-1,0,0,0])
vr("vertex3d",Pt,"Vertex",3,Gt)
b.bufferData(b.ARRAY_BUFFER,new u(e),b.STREAM_DRAW)
if(Xt&&gt!==null){vt(n)}vr("aColor3d",Pt,"aColor",4,Vt)
b.bufferData(b.ARRAY_BUFFER,new u(n),b.STREAM_DRAW)
yr("normal3d",Pt,"Normal")
if(Xt){dr("usingTexture3d",Pt,"usingTexture",Xt)
vr("aTexture3d",Pt,"aTexture",2,jt)
b.bufferData(b.ARRAY_BUFFER,new u(r),b.STREAM_DRAW)}b.drawArrays(i,0,e.length/3)
b.disable(b.POLYGON_OFFSET_FILL)}
function mi(){ui()
fi()
b.closePath()}Ar.prototype.endShape=function(e){if(Kn.length===0){return}var t=e===p.CLOSE
if(t){Kn.push(Kn[0])}var n=[]
var i=[]
var a=[]
var s=[]
var o=[]
var l
Qn=true
var u,f,c
var h=Kn.length
for(u=0;u<h;u++){l=Kn[u]
for(f=0;f<3;f++){i.push(l[f])}}for(u=0;u<h;u++){l=Kn[u]
for(f=5;f<9;f++){a.push(l[f])}}for(u=0;u<h;u++){l=Kn[u]
for(f=9;f<13;f++){s.push(l[f])}}for(u=0;u<h;u++){l=Kn[u]
o.push(l[3])
o.push(l[4])}if(Zn&&(Q===p.POLYGON||Q===r)){if(h>3){var m=[],d=1-nt
b.beginPath()
b.moveTo(Kn[1][0],Kn[1][1])
for(u=1;u+2<h;u++){l=Kn[u]
m[0]=[l[0],l[1]]
m[1]=[l[0]+(d*Kn[u+1][0]-d*Kn[u-1][0])/6,l[1]+(d*Kn[u+1][1]-d*Kn[u-1][1])/6]
m[2]=[Kn[u+1][0]+(d*Kn[u][0]-d*Kn[u+2][0])/6,Kn[u+1][1]+(d*Kn[u][1]-d*Kn[u+2][1])/6]
m[3]=[Kn[u+1][0],Kn[u+1][1]]
b.bezierCurveTo(m[1][0],m[1][1],m[2][0],m[2][1],m[3][0],m[3][1])}mi()}}else if(Jn&&(Q===p.POLYGON||Q===r)){b.beginPath()
for(u=0;u<h;u++){l=Kn[u]
if(Kn[u]["isVert"]){if(Kn[u]["moveTo"]){b.moveTo(l[0],l[1])}else{b.lineTo(l[0],l[1])}}else{b.bezierCurveTo(Kn[u][0],Kn[u][1],Kn[u][2],Kn[u][3],Kn[u][4],Kn[u][5])}}mi()}else{if(Q===p.POINTS){for(u=0;u<h;u++){l=Kn[u]
if(O){v.stroke(l[6])}v.point(l[0],l[1])}}else if(Q===p.LINES){for(u=0;u+1<h;u+=2){l=Kn[u]
if(O){v.stroke(Kn[u+1][6])}v.line(l[0],l[1],Kn[u+1][0],Kn[u+1][1])}}else if(Q===p.TRIANGLES){for(u=0;u+2<h;u+=3){l=Kn[u]
b.beginPath()
b.moveTo(l[0],l[1])
b.lineTo(Kn[u+1][0],Kn[u+1][1])
b.lineTo(Kn[u+2][0],Kn[u+2][1])
b.lineTo(l[0],l[1])
if(C){v.fill(Kn[u+2][5])
ui()}if(O){v.stroke(Kn[u+2][6])
fi()}b.closePath()}}else if(Q===p.TRIANGLE_STRIP){for(u=0;u+1<h;u++){l=Kn[u]
b.beginPath()
b.moveTo(Kn[u+1][0],Kn[u+1][1])
b.lineTo(l[0],l[1])
if(O){v.stroke(Kn[u+1][6])}if(C){v.fill(Kn[u+1][5])}if(u+2<h){b.lineTo(Kn[u+2][0],Kn[u+2][1])
if(O){v.stroke(Kn[u+2][6])}if(C){v.fill(Kn[u+2][5])}}mi()}}else if(Q===p.TRIANGLE_FAN){if(h>2){b.beginPath()
b.moveTo(Kn[0][0],Kn[0][1])
b.lineTo(Kn[1][0],Kn[1][1])
b.lineTo(Kn[2][0],Kn[2][1])
if(C){v.fill(Kn[2][5])
ui()}if(O){v.stroke(Kn[2][6])
fi()}b.closePath()
for(u=3;u<h;u++){l=Kn[u]
b.beginPath()
b.moveTo(Kn[0][0],Kn[0][1])
b.lineTo(Kn[u-1][0],Kn[u-1][1])
b.lineTo(l[0],l[1])
if(C){v.fill(l[5])
ui()}if(O){v.stroke(l[6])
fi()}b.closePath()}}}else if(Q===p.QUADS){for(u=0;u+3<h;u+=4){l=Kn[u]
b.beginPath()
b.moveTo(l[0],l[1])
for(f=1;f<4;f++){b.lineTo(Kn[u+f][0],Kn[u+f][1])}b.lineTo(l[0],l[1])
if(C){v.fill(Kn[u+3][5])
ui()}if(O){v.stroke(Kn[u+3][6])
fi()}b.closePath()}}else if(Q===p.QUAD_STRIP){if(h>3){for(u=0;u+1<h;u+=2){l=Kn[u]
b.beginPath()
if(u+3<h){b.moveTo(Kn[u+2][0],Kn[u+2][1])
b.lineTo(l[0],l[1])
b.lineTo(Kn[u+1][0],Kn[u+1][1])
b.lineTo(Kn[u+3][0],Kn[u+3][1])
if(C){v.fill(Kn[u+3][5])}if(O){v.stroke(Kn[u+3][6])}}else{b.moveTo(l[0],l[1])
b.lineTo(Kn[u+1][0],Kn[u+1][1])}mi()}}}else{b.beginPath()
b.moveTo(Kn[0][0],Kn[0][1])
for(u=1;u<h;u++){l=Kn[u]
if(l["isVert"]){if(l["moveTo"]){b.moveTo(l[0],l[1])}else{b.lineTo(l[0],l[1])}}}mi()}}Zn=false
Jn=false
Xn=[]
Yn=0
if(t){Kn.pop()}}
_r.prototype.endShape=function(e){if(Kn.length===0){return}var t=e===p.CLOSE
var n=[]
var i=[]
var a=[]
var s=[]
var o=[]
var l
Qn=true
var u,f,c
var h=Kn.length
for(u=0;u<h;u++){l=Kn[u]
for(f=0;f<3;f++){i.push(l[f])}}for(u=0;u<h;u++){l=Kn[u]
for(f=5;f<9;f++){a.push(l[f])}}for(u=0;u<h;u++){l=Kn[u]
for(f=9;f<13;f++){s.push(l[f])}}for(u=0;u<h;u++){l=Kn[u]
o.push(l[3])
o.push(l[4])}if(t){i.push(Kn[0][0])
i.push(Kn[0][1])
i.push(Kn[0][2])
for(u=5;u<9;u++){a.push(Kn[0][u])}for(u=9;u<13;u++){s.push(Kn[0][u])}o.push(Kn[0][3])
o.push(Kn[0][4])}if(Zn&&(Q===p.POLYGON||Q===r)){n=i
if(O){hi(n,null,s)}if(C){pi(i,null,a)}}else if(Jn&&(Q===p.POLYGON||Q===r)){n=i
n.splice(n.length-3)
s.splice(s.length-4)
if(O){hi(n,null,s)}if(C){pi(i,"TRIANGLES",a)}}else{if(Q===p.POINTS){for(u=0;u<h;u++){l=Kn[u]
for(f=0;f<3;f++){n.push(l[f])}}ci(n,s)}else if(Q===p.LINES){for(u=0;u<h;u++){l=Kn[u]
for(f=0;f<3;f++){n.push(l[f])}}for(u=0;u<h;u++){l=Kn[u]
for(f=5;f<9;f++){a.push(l[f])}}hi(n,"LINES",s)}else if(Q===p.TRIANGLES){if(h>2){for(u=0;u+2<h;u+=3){i=[]
o=[]
n=[]
a=[]
s=[]
for(f=0;f<3;f++){for(c=0;c<3;c++){n.push(Kn[u+f][c])
i.push(Kn[u+f][c])}}for(f=0;f<3;f++){for(c=3;c<5;c++){o.push(Kn[u+f][c])}}for(f=0;f<3;f++){for(c=5;c<9;c++){a.push(Kn[u+f][c])
s.push(Kn[u+f][c+4])}}if(O){hi(n,"LINE_LOOP",s)}if(C||Xt){pi(i,"TRIANGLES",a,o)}}}}else if(Q===p.TRIANGLE_STRIP){if(h>2){for(u=0;u+2<h;u++){n=[]
i=[]
s=[]
a=[]
o=[]
for(f=0;f<3;f++){for(c=0;c<3;c++){n.push(Kn[u+f][c])
i.push(Kn[u+f][c])}}for(f=0;f<3;f++){for(c=3;c<5;c++){o.push(Kn[u+f][c])}}for(f=0;f<3;f++){for(c=5;c<9;c++){s.push(Kn[u+f][c+4])
a.push(Kn[u+f][c])}}if(C||Xt){pi(i,"TRIANGLE_STRIP",a,o)}if(O){hi(n,"LINE_LOOP",s)}}}}else if(Q===p.TRIANGLE_FAN){if(h>2){for(u=0;u<3;u++){l=Kn[u]
for(f=0;f<3;f++){n.push(l[f])}}for(u=0;u<3;u++){l=Kn[u]
for(f=9;f<13;f++){s.push(l[f])}}if(O){hi(n,"LINE_LOOP",s)}for(u=2;u+1<h;u++){n=[]
s=[]
n.push(Kn[0][0])
n.push(Kn[0][1])
n.push(Kn[0][2])
s.push(Kn[0][9])
s.push(Kn[0][10])
s.push(Kn[0][11])
s.push(Kn[0][12])
for(f=0;f<2;f++){for(c=0;c<3;c++){n.push(Kn[u+f][c])}}for(f=0;f<2;f++){for(c=9;c<13;c++){s.push(Kn[u+f][c])}}if(O){hi(n,"LINE_STRIP",s)}}if(C||Xt){pi(i,"TRIANGLE_FAN",a,o)}}}else if(Q===p.QUADS){for(u=0;u+3<h;u+=4){n=[]
for(f=0;f<4;f++){l=Kn[u+f]
for(c=0;c<3;c++){n.push(l[c])}}if(O){hi(n,"LINE_LOOP",s)}if(C){i=[]
a=[]
o=[]
for(f=0;f<3;f++){i.push(Kn[u][f])}for(f=5;f<9;f++){a.push(Kn[u][f])}for(f=0;f<3;f++){i.push(Kn[u+1][f])}for(f=5;f<9;f++){a.push(Kn[u+1][f])}for(f=0;f<3;f++){i.push(Kn[u+3][f])}for(f=5;f<9;f++){a.push(Kn[u+3][f])}for(f=0;f<3;f++){i.push(Kn[u+2][f])}for(f=5;f<9;f++){a.push(Kn[u+2][f])}if(Xt){o.push(Kn[u+0][3])
o.push(Kn[u+0][4])
o.push(Kn[u+1][3])
o.push(Kn[u+1][4])
o.push(Kn[u+3][3])
o.push(Kn[u+3][4])
o.push(Kn[u+2][3])
o.push(Kn[u+2][4])}pi(i,"TRIANGLE_STRIP",a,o)}}}else if(Q===p.QUAD_STRIP){var m=[]
if(h>3){for(u=0;u<2;u++){l=Kn[u]
for(f=0;f<3;f++){n.push(l[f])}}for(u=0;u<2;u++){l=Kn[u]
for(f=9;f<13;f++){s.push(l[f])}}hi(n,"LINE_STRIP",s)
if(h>4&&h%2>0){m=i.splice(i.length-3)
Kn.pop()}for(u=0;u+3<h;u+=2){n=[]
s=[]
for(f=0;f<3;f++){n.push(Kn[u+1][f])}for(f=0;f<3;f++){n.push(Kn[u+3][f])}for(f=0;f<3;f++){n.push(Kn[u+2][f])}for(f=0;f<3;f++){n.push(Kn[u+0][f])}for(f=9;f<13;f++){s.push(Kn[u+1][f])}for(f=9;f<13;f++){s.push(Kn[u+3][f])}for(f=9;f<13;f++){s.push(Kn[u+2][f])}for(f=9;f<13;f++){s.push(Kn[u+0][f])}if(O){hi(n,"LINE_STRIP",s)}}if(C||Xt){pi(i,"TRIANGLE_LIST",a,o)}}}else{if(h===1){for(f=0;f<3;f++){n.push(Kn[0][f])}for(f=9;f<13;f++){s.push(Kn[0][f])}ci(n,s)}else{for(u=0;u<h;u++){l=Kn[u]
for(f=0;f<3;f++){n.push(l[f])}for(f=5;f<9;f++){s.push(l[f])}}if(O&&t){hi(n,"LINE_LOOP",s)}else if(O&&!t){hi(n,"LINE_STRIP",s)}if(C||Xt){pi(i,"TRIANGLE_FAN",a,o)}}}Xt=false
b.useProgram(Pt)
dr("usingTexture3d",Pt,"usingTexture",Xt)}Zn=false
Jn=false
Xn=[]
Yn=0}
var di=function(e,t){var n=1/e
var r=n*n
var i=r*n
t.set(0,0,0,1,i,r,n,0,6*i,2*r,0,0,6*i,0,0,0)}
var gi=function(){if(!At){Et=new Dr
At=new Dr
it=true}var e=nt
Et.set((e-1)/2,(e+3)/2,(-3-e)/2,(1-e)/2,1-e,(-5-e)/2,e+2,(e-1)/2,(e-1)/2,0,(1-e)/2,0,0,1,0,0)
di(rt,At)
if(!Ct){St=new Dr}St.set(Et)
St.preApply(Ct)
At.apply(Et)}
Ar.prototype.bezierVertex=function(){Jn=true
var e=[]
if(Qn){throw"vertex() must be used at least once before calling bezierVertex()"}for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}Kn.push(e)
Kn[Kn.length-1]["isVert"]=false}
_r.prototype.bezierVertex=function(){Jn=true
var e=[]
if(Qn){throw"vertex() must be used at least once before calling bezierVertex()"}if(arguments.length===9){if(_t===r){_t=new Dr}var t=Kn.length-1
di(st,_t)
_t.apply(Tt)
var n=_t.array()
var i=Kn[t][0],a=Kn[t][1],s=Kn[t][2]
var o=n[4]*i+n[5]*arguments[0]+n[6]*arguments[3]+n[7]*arguments[6]
var l=n[8]*i+n[9]*arguments[0]+n[10]*arguments[3]+n[11]*arguments[6]
var u=n[12]*i+n[13]*arguments[0]+n[14]*arguments[3]+n[15]*arguments[6]
var f=n[4]*a+n[5]*arguments[1]+n[6]*arguments[4]+n[7]*arguments[7]
var c=n[8]*a+n[9]*arguments[1]+n[10]*arguments[4]+n[11]*arguments[7]
var h=n[12]*a+n[13]*arguments[1]+n[14]*arguments[4]+n[15]*arguments[7]
var p=n[4]*s+n[5]*arguments[2]+n[6]*arguments[5]+n[7]*arguments[8]
var m=n[8]*s+n[9]*arguments[2]+n[10]*arguments[5]+n[11]*arguments[8]
var d=n[12]*s+n[13]*arguments[2]+n[14]*arguments[5]+n[15]*arguments[8]
for(var g=0;g<st;g++){i+=o
o+=l
l+=u
a+=f
f+=c
c+=h
s+=p
p+=m
m+=d
v.vertex(i,a,s)}v.vertex(arguments[6],arguments[7],arguments[8])}}
v.texture=function(e){var n=E.$ensureContext()
if(e.__texture){n.bindTexture(n.TEXTURE_2D,e.__texture)}else if(e.localName==="canvas"){n.bindTexture(n.TEXTURE_2D,$t)
n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e)
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR)
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR)
n.generateMipmap(n.TEXTURE_2D)
qt.width=e.width
qt.height=e.height}else{var r=n.createTexture(),i=t.createElement("canvas"),a=i.getContext("2d"),s
if(e.width&e.width-1===0){i.width=e.width}else{s=1
while(s<e.width){s*=2}i.width=s}if(e.height&e.height-1===0){i.height=e.height}else{s=1
while(s<e.height){s*=2}i.height=s}a.drawImage(e.sourceImg,0,0,e.width,e.height,0,0,i.width,i.height)
n.bindTexture(n.TEXTURE_2D,r)
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR)
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR)
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)
n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i)
n.generateMipmap(n.TEXTURE_2D)
e.__texture=r
qt.width=e.width
qt.height=e.height}Xt=true
n.useProgram(Pt)
dr("usingTexture3d",Pt,"usingTexture",Xt)}
v.textureMode=function(e){Kt=e}
var vi=function(e,t,n,r,i,a,s,o,l,u,f,c){var h=r
var p=i
var m=a
var d=At.array()
var g=d[4]*e+d[5]*r+d[6]*s+d[7]*u
var y=d[8]*e+d[9]*r+d[10]*s+d[11]*u
var b=d[12]*e+d[13]*r+d[14]*s+d[15]*u
var x=d[4]*t+d[5]*i+d[6]*o+d[7]*f
var k=d[8]*t+d[9]*i+d[10]*o+d[11]*f
var w=d[12]*t+d[13]*i+d[14]*o+d[15]*f
var E=d[4]*n+d[5]*a+d[6]*l+d[7]*c
var S=d[8]*n+d[9]*a+d[10]*l+d[11]*c
var A=d[12]*n+d[13]*a+d[14]*l+d[15]*c
v.vertex(h,p,m)
for(var _=0;_<rt;_++){h+=g
g+=y
y+=b
p+=x
x+=k
k+=w
m+=E
E+=S
S+=A
v.vertex(h,p,m)}}
Ar.prototype.curveVertex=function(e,t){Zn=true
v.vertex(e,t)}
_r.prototype.curveVertex=function(e,t,n){Zn=true
if(!it){gi()}var r=[]
r[0]=e
r[1]=t
r[2]=n
Xn.push(r)
Yn++
if(Yn>3){vi(Xn[Yn-4][0],Xn[Yn-4][1],Xn[Yn-4][2],Xn[Yn-3][0],Xn[Yn-3][1],Xn[Yn-3][2],Xn[Yn-2][0],Xn[Yn-2][1],Xn[Yn-2][2],Xn[Yn-1][0],Xn[Yn-1][1],Xn[Yn-1][2])}}
Ar.prototype.curve=function(){if(arguments.length===8){v.beginShape()
v.curveVertex(arguments[0],arguments[1])
v.curveVertex(arguments[2],arguments[3])
v.curveVertex(arguments[4],arguments[5])
v.curveVertex(arguments[6],arguments[7])
v.endShape()}}
_r.prototype.curve=function(){if(arguments.length===12){v.beginShape()
v.curveVertex(arguments[0],arguments[1],arguments[2])
v.curveVertex(arguments[3],arguments[4],arguments[5])
v.curveVertex(arguments[6],arguments[7],arguments[8])
v.curveVertex(arguments[9],arguments[10],arguments[11])
v.endShape()}}
v.curveTightness=function(e){nt=e}
v.curveDetail=function(e){rt=e
gi()}
v.rectMode=function(e){U=e}
v.imageMode=function(e){switch(e){case p.CORNER:kr=xr
break
case p.CORNERS:kr=wr
break
case p.CENTER:kr=Er
break
default:throw"Invalid imageMode"}}
v.ellipseMode=function(e){z=e}
v.arc=function(e,t,n,r,i,a){if(n<=0||a<i){return}i=v.convertToRadians(i)
a=v.convertToRadians(a)
if(z===p.CORNERS){n=n-e
r=r-t}else if(z===p.RADIUS){e=e-n
t=t-r
n=n*2
r=r*2}else if(z===p.CENTER){e=e-n/2
t=t-r/2}while(i<0){i+=p.TWO_PI
a+=p.TWO_PI}if(a-i>p.TWO_PI){i=0
a=p.TWO_PI}var s=n/2
var o=r/2
var l=e+s
var u=t+o
var f=0|-.5+i*v.RAD_TO_DEG
var c=0|.5+a*v.RAD_TO_DEG
var h,m
if(C){var d=O
O=false
v.beginShape()
v.vertex(l,u)
for(h=f;h<=c;h++){m=h%p.SINCOS_LENGTH
v.vertex(l+Tn[m]*s,u+Cn[m]*o)}v.endShape(p.CLOSE)
O=d}if(O){var g=C
C=false
v.beginShape()
for(h=f;h<=c;h++){m=h%p.SINCOS_LENGTH
v.vertex(l+Tn[m]*s,u+Cn[m]*o)}v.endShape()
C=g}}
Ar.prototype.line=function(e,t,i,a){if(!O){return}if(!B){e=n.round(e)
i=n.round(i)
t=n.round(t)
a=n.round(a)}if(e===i&&t===a){v.point(e,t)
return}var s=r,o=r,l=true,u=On.array(),f=[1,0,0,0,1,0]
for(var c=0;c<6&&l;c++){l=u[c]===f[c]}if(l){if(e===i){if(t>a){s=t
t=a
a=s}a++
if(F%2===1){b.translate(.5,0)}}else if(t===a){if(e>i){s=e
e=i
i=s}i++
if(F%2===1){b.translate(0,.5)}}if(F===1){o=b.lineCap
b.lineCap="butt"}}b.beginPath()
b.moveTo(e||0,t||0)
b.lineTo(i||0,a||0)
fi()
if(l){if(e===i&&F%2===1){b.translate(-.5,0)}else if(t===a&&F%2===1){b.translate(0,-.5)}if(F===1){b.lineCap=o}}}
_r.prototype.line=function(e,t,n,i,a,s){if(a===r||s===r){s=0
a=i
i=n
n=0}if(e===i&&t===a&&n===s){v.point(e,t,n)
return}var o=[e,t,n,i,a,s]
var l=new Dr
l.scale(1,-1,1)
l.apply(On.array())
l.transpose()
if(F>0&&O){b.useProgram(Lt)
gr("model2d",Lt,"model",false,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])
gr("view2d",Lt,"view",false,l.array())
mr("color2d",Lt,"color",M)
dr("picktype2d",Lt,"picktype",0)
vr("vertex2d",Lt,"Vertex",3,Bt)
yr("aTextureCoord2d",Lt,"aTextureCoord")
b.bufferData(b.ARRAY_BUFFER,new u(o),b.STREAM_DRAW)
b.drawArrays(b.LINES,0,2)}}
Ar.prototype.bezier=function(){if(arguments.length!==8){throw"You must use 8 parameters for bezier() in 2D mode"}v.beginShape()
v.vertex(arguments[0],arguments[1])
v.bezierVertex(arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7])
v.endShape()}
_r.prototype.bezier=function(){if(arguments.length!==12){throw"You must use 12 parameters for bezier() in 3D mode"}v.beginShape()
v.vertex(arguments[0],arguments[1],arguments[2])
v.bezierVertex(arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11])
v.endShape()}
v.bezierDetail=function(e){st=e}
v.bezierPoint=function(e,t,n,r,i){return(1-i)*(1-i)*(1-i)*e+3*(1-i)*(1-i)*i*t+3*(1-i)*i*i*n+i*i*i*r}
v.bezierTangent=function(e,t,n,r,i){return 3*i*i*(-e+3*t-3*n+r)+6*i*(e-2*t+n)+3*(-e+t)}
v.curvePoint=function(e,t,n,r,i){return.5*(2*t+(-e+n)*i+(2*e-5*t+4*n-r)*i*i+(-e+3*t-3*n+r)*i*i*i)}
v.curveTangent=function(e,t,n,r,i){return.5*(-e+n+2*(2*e-5*t+4*n-r)*i+3*(-e+3*t-3*n+r)*i*i)}
v.triangle=function(e,t,n,r,i,a){v.beginShape(p.TRIANGLES)
v.vertex(e,t,0)
v.vertex(n,r,0)
v.vertex(i,a,0)
v.endShape()}
v.quad=function(e,t,n,r,i,a,s,o){v.beginShape(p.QUADS)
v.vertex(e,t,0)
v.vertex(n,r,0)
v.vertex(i,a,0)
v.vertex(s,o,0)
v.endShape()}
var yi=function(e,t,i,a,s,o,l,u){if(u===r){o=s
l=s
u=s}var f=i/2,c=a/2
if(s>f||s>c){s=n.min(f,c)}if(o>f||o>c){o=n.min(f,c)}if(l>f||l>c){l=n.min(f,c)}if(u>f||u>c){u=n.min(f,c)}if(!C||O){b.translate(.5,.5)}b.beginPath()
b.moveTo(e+s,t)
b.lineTo(e+i-o,t)
b.quadraticCurveTo(e+i,t,e+i,t+o)
b.lineTo(e+i,t+a-l)
b.quadraticCurveTo(e+i,t+a,e+i-l,t+a)
b.lineTo(e+u,t+a)
b.quadraticCurveTo(e,t+a,e,t+a-u)
b.lineTo(e,t+s)
b.quadraticCurveTo(e,t,e+s,t)
if(!C||O){b.translate(-.5,-.5)}ui()
fi()}
Ar.prototype.rect=function(e,t,i,a,s,o,l,u){if(!i&&!a){return}if(U===p.CORNERS){i-=e
a-=t}else if(U===p.RADIUS){i*=2
a*=2
e-=i/2
t-=a/2}else if(U===p.CENTER){e-=i/2
t-=a/2}if(!B){e=n.round(e)
t=n.round(t)
i=n.round(i)
a=n.round(a)}if(s!==r){yi(e,t,i,a,s,o,l,u)
return}if(O&&F%2===1){b.translate(.5,.5)}b.beginPath()
b.rect(e,t,i,a)
ui()
fi()
if(O&&F%2===1){b.translate(-.5,-.5)}}
_r.prototype.rect=function(e,t,n,i,a,s,o,l){if(a!==r){throw"rect() with rounded corners is not supported in 3D mode"}if(U===p.CORNERS){n-=e
i-=t}else if(U===p.RADIUS){n*=2
i*=2
e-=n/2
t-=i/2}else if(U===p.CENTER){e-=n/2
t-=i/2}var u=new Dr
u.translate(e,t,0)
u.scale(n,i,1)
u.transpose()
var f=new Dr
f.scale(1,-1,1)
f.apply(On.array())
f.transpose()
if(F>0&&O){b.useProgram(Lt)
gr("model2d",Lt,"model",false,u.array())
gr("view2d",Lt,"view",false,f.array())
mr("color2d",Lt,"color",M)
dr("picktype2d",Lt,"picktype",0)
vr("vertex2d",Lt,"Vertex",3,Dt)
yr("aTextureCoord2d",Lt,"aTextureCoord")
b.drawArrays(b.LINE_LOOP,0,ar.length/3)}if(C){b.useProgram(Pt)
gr("model3d",Pt,"model",false,u.array())
gr("view3d",Pt,"view",false,f.array())
b.enable(b.POLYGON_OFFSET_FILL)
b.polygonOffset(1,1)
mr("color3d",Pt,"color",T)
if(kn>0){var c=new Dr
c.set(f)
var h=new Dr
h.set(u)
c.mult(h)
var m=new Dr
m.set(c)
m.invert()
m.transpose()
gr("normalTransform3d",Pt,"normalTransform",false,m.array())
vr("normal3d",Pt,"Normal",3,Ft)}else{yr("normal3d",Pt,"Normal")}vr("vertex3d",Pt,"Vertex",3,Dt)
b.drawArrays(b.TRIANGLE_FAN,0,ar.length/3)
b.disable(b.POLYGON_OFFSET_FILL)}}
Ar.prototype.ellipse=function(e,t,n,r){e=e||0
t=t||0
if(n<=0&&r<=0){return}if(z===p.RADIUS){n*=2
r*=2}else if(z===p.CORNERS){n=n-e
r=r-t
e+=n/2
t+=r/2}else if(z===p.CORNER){e+=n/2
t+=r/2}if(n===r){b.beginPath()
b.arc(e,t,n/2,0,p.TWO_PI,false)
ui()
fi()}else{var i=n/2,a=r/2,s=.5522847498307933,o=s*i,l=s*a
v.beginShape()
v.vertex(e+i,t)
v.bezierVertex(e+i,t-l,e+o,t-a,e,t-a)
v.bezierVertex(e-o,t-a,e-i,t-l,e-i,t)
v.bezierVertex(e-i,t+l,e-o,t+a,e,t+a)
v.bezierVertex(e+o,t+a,e+i,t+l,e+i,t)
v.endShape()}}
_r.prototype.ellipse=function(e,t,n,r){e=e||0
t=t||0
if(n<=0&&r<=0){return}if(z===p.RADIUS){n*=2
r*=2}else if(z===p.CORNERS){n=n-e
r=r-t
e+=n/2
t+=r/2}else if(z===p.CORNER){e+=n/2
t+=r/2}var i=n/2,a=r/2,s=.5522847498307933,o=s*i,l=s*a
v.beginShape()
v.vertex(e+i,t)
v.bezierVertex(e+i,t-l,0,e+o,t-a,0,e,t-a,0)
v.bezierVertex(e-o,t-a,0,e-i,t-l,0,e-i,t,0)
v.bezierVertex(e-i,t+l,0,e-o,t+a,0,e,t+a,0)
v.bezierVertex(e+o,t+a,0,e+i,t+l,0,e+i,t,0)
v.endShape()
if(C){var u=0,f=0,c,h
for(c=0;c<Kn.length;c++){u+=Kn[c][0]
f+=Kn[c][1]}u/=Kn.length
f/=Kn.length
var m=[],d=[],g=[]
m[0]=u
m[1]=f
m[2]=0
m[3]=0
m[4]=0
m[5]=T[0]
m[6]=T[1]
m[7]=T[2]
m[8]=T[3]
m[9]=M[0]
m[10]=M[1]
m[11]=M[2]
m[12]=M[3]
m[13]=j
m[14]=H
m[15]=q
Kn.unshift(m)
for(c=0;c<Kn.length;c++){for(h=0;h<3;h++){d.push(Kn[c][h])}for(h=5;h<9;h++){g.push(Kn[c][h])}}pi(d,"TRIANGLE_FAN",g)}}
v.normal=function(e,t,n){if(arguments.length!==3||!(typeof e==="number"&&typeof t==="number"&&typeof n==="number")){throw"normal() requires three numeric arguments."}j=e
H=t
q=n
if(Q!==0){if(K===p.NORMAL_MODE_AUTO){K=p.NORMAL_MODE_SHAPE}else if(K===p.NORMAL_MODE_SHAPE){K=p.NORMAL_MODE_VERTEX}}}
v.save=function(t,n){if(n!==r){return e.open(n.toDataURL(),"_blank")}return e.open(v.externals.canvas.toDataURL(),"_blank")}
var bi=0
v.saveFrame=function(e){if(e===r){e="screen-####.png"}var t=e.replace(/#+/,function(e){var t=""+bi++
while(t.length<e.length){t="0"+t}return t})
v.save(t)}
var xi=t.createElement("canvas").getContext("2d")
var ki=[r,r,r]
function wi(e,n,i){var a=ki.shift()
if(a===r){a={}
a.canvas=t.createElement("canvas")
a.context=a.canvas.getContext("2d")}ki.push(a)
var s=a.canvas,o=a.context,l=n||e.width,u=i||e.height
s.width=l
s.height=u
if(!e){o.clearRect(0,0,l,u)}else if("data"in e){o.putImageData(e,0,0)}else{o.clearRect(0,0,l,u)
o.drawImage(e,0,0,l,u)}return a}function Ei(e){return{getLength:function(e){return function(){if(e.isRemote){throw"Image is loaded remotely. Cannot get length."}else{return e.imageData.data.length?e.imageData.data.length/4:0}}}(e),getPixel:function(e){return function(t){var n=t*4,r=e.imageData.data
if(e.isRemote){throw"Image is loaded remotely. Cannot get pixels."}return r[n+3]<<24&p.ALPHA_MASK|r[n]<<16&p.RED_MASK|r[n+1]<<8&p.GREEN_MASK|r[n+2]&p.BLUE_MASK}}(e),setPixel:function(e){return function(t,n){var r=t*4,i=e.imageData.data
if(e.isRemote){throw"Image is loaded remotely. Cannot set pixel."}i[r+0]=(n&p.RED_MASK)>>>16
i[r+1]=(n&p.GREEN_MASK)>>>8
i[r+2]=n&p.BLUE_MASK
i[r+3]=(n&p.ALPHA_MASK)>>>24
e.__isDirty=true}}(e),toArray:function(e){return function(){var t=[],n=e.imageData.data,r=e.width*e.height
if(e.isRemote){throw"Image is loaded remotely. Cannot get pixels."}for(var i=0,a=0;i<r;i++,a+=4){t.push(n[a+3]<<24&p.ALPHA_MASK|n[a]<<16&p.RED_MASK|n[a+1]<<8&p.GREEN_MASK|n[a+2]&p.BLUE_MASK)}return t}}(e),set:function(e){return function(t){var n,r,i
if(this.isRemote){throw"Image is loaded remotely. Cannot set pixels."}r=e.imageData.data
for(var a=0,s=t.length;a<s;a++){i=t[a]
n=a*4
r[n+0]=(i&p.RED_MASK)>>>16
r[n+1]=(i&p.GREEN_MASK)>>>8
r[n+2]=i&p.BLUE_MASK
r[n+3]=(i&p.ALPHA_MASK)>>>24}e.__isDirty=true}}(e)}}var Si=function(e,n,r){this.__isDirty=false
if(e instanceof HTMLImageElement){this.fromHTMLImageData(e)}else if(n||r){this.width=e||1
this.height=n||1
var i=this.sourceImg=t.createElement("canvas")
i.width=this.width
i.height=this.height
this.format=r===p.ARGB||r===p.ALPHA?r:p.RGB}else{this.width=0
this.height=0
this.format=p.ARGB}}
Si.prototype={__isPImage:true,updatePixels:function(){var e=this.sourceImg
if(e&&e instanceof HTMLCanvasElement&&this.__isDirty){e.getContext("2d").putImageData(this.imageData,0,0)}this.__isDirty=false},fromHTMLImageData:function(e){var t=wi(e)
if(e.width&&e.height){this.isRemote=true
this.width=e.width
this.height=e.height}this.sourceImg=e},get:function(e,t,n,r){if(!arguments.length){return v.get(this)}if(arguments.length===2){return v.get(e,t,this)}if(arguments.length===4){return v.get(e,t,n,r,this)}},set:function(e,t,n){v.set(e,t,n,this)
this.__isDirty=true},blend:function(e,t,n,r,i,a,s,o,l,u){if(arguments.length===9){v.blend(this,e,t,n,r,i,a,s,o,l,this)}else if(arguments.length===10){v.blend(e,t,n,r,i,a,s,o,l,u,this)}delete this.sourceImg},copy:function(e,t,n,r,i,a,s,o,l){if(arguments.length===8){v.blend(this,e,t,n,r,i,a,s,o,p.REPLACE,this)}else if(arguments.length===9){v.blend(e,t,n,r,i,a,s,o,l,p.REPLACE,this)}delete this.sourceImg},filter:function(e,t){if(arguments.length===2){v.filter(e,t,this)}else if(arguments.length===1){v.filter(e,null,this)}delete this.sourceImg},save:function(e){v.save(e,this)},resize:function(e,t){if(this.isRemote){throw"Image is loaded remotely. Cannot resize."}if(this.width!==0||this.height!==0){if(e===0&&t!==0){e=n.floor(this.width/this.height*t)}else if(t===0&&e!==0){t=n.floor(this.height/this.width*e)}var r=wi(this.imageData).canvas
var i=wi(r,e,t).context.getImageData(0,0,e,t)
this.fromImageData(i)}},mask:function(e){var t=this.toImageData(),n,r
if(e instanceof Si||e.__isPImage){if(e.width===this.width&&e.height===this.height){e=e.toImageData()
for(n=2,r=this.width*this.height*4;n<r;n+=4){t.data[n+1]=e.data[n]}}else{throw"mask must have the same dimensions as PImage."}}else if(e instanceof Array){if(this.width*this.height===e.length){for(n=0,r=e.length;n<r;++n){t.data[n*4+3]=e[n]}}else{throw"mask array must be the same length as PImage pixels array."}}this.fromImageData(t)},loadPixels:i,toImageData:function(){if(this.isRemote){return this.sourceImg}if(!this.__isDirty){return this.imageData}var e=wi(this.imageData)
return e.context.getImageData(0,0,this.width,this.height)},toDataURL:function(){if(this.isRemote){throw"Image is loaded remotely. Cannot create dataURI."}var e=wi(this.imageData)
return e.canvas.toDataURL()},fromImageData:function(e){var n=e.width,r=e.height,i=t.createElement("canvas"),a=i.getContext("2d")
this.width=i.width=n
this.height=i.height=r
a.putImageData(e,0,0)
this.format=p.ARGB
this.imageData=e
this.sourceImg=i}}
v.PImage=Si
v.createImage=function(e,t,n){return new Si(e,t,n)}
v.loadImage=function(e,n,r){if(n){e=e+"."+n}var i
if(k.imageCache.images[e]){i=new Si(k.imageCache.images[e])
i.loaded=true
return i}i=new Si
var a=t.createElement("img")
i.sourceImg=a
a.onload=function(e,t,n){var r=e
var i=t
var a=n
return function(){i.fromHTMLImageData(r)
i.loaded=true
if(a){a()}}}(a,i,r)
a.src=e
return i}
v.requestImage=v.loadImage
function Ai(e,t){var n
if(e>=v.width||e<0||t<0||t>=v.height){return 0}if(cn){var r=((0|e)+v.width*(0|t))*4
n=v.imageData.data
return n[r+3]<<24&p.ALPHA_MASK|n[r]<<16&p.RED_MASK|n[r+1]<<8&p.GREEN_MASK|n[r+2]&p.BLUE_MASK}n=v.toImageData(0|e,0|t,1,1).data
return n[3]<<24&p.ALPHA_MASK|n[0]<<16&p.RED_MASK|n[1]<<8&p.GREEN_MASK|n[2]&p.BLUE_MASK}function _i(e,t,n){if(n.isRemote){throw"Image is loaded remotely. Cannot get x,y."}var r=t*n.width*4+e*4,i=n.imageData.data
return i[r+3]<<24&p.ALPHA_MASK|i[r]<<16&p.RED_MASK|i[r+1]<<8&p.GREEN_MASK|i[r+2]&p.BLUE_MASK}function Ci(e,t,n,r){var i=new Si(n,r,p.ARGB)
i.fromImageData(v.toImageData(e,t,n,r))
return i}function Ti(e,t,r,i,a){if(a.isRemote){throw"Image is loaded remotely. Cannot get x,y,w,h."}var s=new Si(r,i,p.ARGB),o=s.imageData.data,l=a.width,u=a.height,f=a.imageData.data
var c=n.max(0,-t),h=n.max(0,-e),m=n.min(i,u-t),d=n.min(r,l-e)
for(var g=c;g<m;++g){var v=((t+g)*l+(e+h))*4
var y=(g*r+h)*4
for(var b=h;b<d;++b){o[y++]=f[v++]
o[y++]=f[v++]
o[y++]=f[v++]
o[y++]=f[v++]}}s.__isDirty=true
return s}v.get=function(e,t,n,r,i){if(i!==undefined){return Ti(e,t,n,r,i)}if(r!==undefined){return Ci(e,t,n,r)}if(n!==undefined){return _i(e,t,n)}if(t!==undefined){return Ai(e,t)}if(e!==undefined){return Ti(0,0,e.width,e.height,e)}return Ci(0,0,v.width,v.height)}
v.createGraphics=function(e,t,n){var r=new P
r.size(e,t,n)
return r}
function Ii(){if(cn){b=un
cn=false
v.updatePixels()}}function Pi(){function e(e,t){function n(){Ii()
b[t].apply(b,arguments)}e[t]=n}function t(e,t){function n(){Ii()
return b[t]}function r(e){Ii()
b[t]=e}v.defineProperty(e,t,{get:n,set:r})}for(var n in b){if(typeof b[n]==="function"){e(this,n)}else{t(this,n)}}}function Li(){if(cn){return}v.loadPixels()
if(fn===null){un=b
fn=new Pi}cn=true
b=fn
hn=0}function Ri(e,t,n){if(e<v.width&&e>=0&&t>=0&&t<v.height){Li()
v.pixels.setPixel((0|e)+v.width*(0|t),n)
if(++hn>pn){Ii()}}}function Oi(e,t,n,r){if(r.isRemote){throw"Image is loaded remotely. Cannot set x,y."}var i=v.color.toArray(n)
var a=t*r.width*4+e*4
var s=r.imageData.data
s[a]=i[0]
s[a+1]=i[1]
s[a+2]=i[2]
s[a+3]=i[3]}v.set=function(e,t,n,r){var i,a
if(arguments.length===3){if(typeof n==="number"){Ri(e,t,n)}else if(n instanceof Si||n.__isPImage){v.image(n,e,t)}}else if(arguments.length===4){Oi(e,t,n,r)}}
v.imageData={}
v.pixels={getLength:function(){return v.imageData.data.length?v.imageData.data.length/4:0},getPixel:function(e){var t=e*4,n=v.imageData.data
return n[t+3]<<24&4278190080|n[t+0]<<16&16711680|n[t+1]<<8&65280|n[t+2]&255},setPixel:function(e,t){var n=e*4,r=v.imageData.data
r[n+0]=(t&16711680)>>>16
r[n+1]=(t&65280)>>>8
r[n+2]=t&255
r[n+3]=(t&4278190080)>>>24},toArray:function(){var e=[],t=v.imageData.width*v.imageData.height,n=v.imageData.data
for(var r=0,i=0;r<t;r++,i+=4){e.push(n[i+3]<<24&4278190080|n[i+0]<<16&16711680|n[i+1]<<8&65280|n[i+2]&255)}return e},set:function(e){for(var t=0,n=e.length;t<n;t++){this.setPixel(t,e[t])}}}
v.loadPixels=function(){v.imageData=E.$ensureContext().getImageData(0,0,v.width,v.height)}
v.updatePixels=function(){if(v.imageData){E.$ensureContext().putImageData(v.imageData,0,0)}}
v.hint=function(e){var t=E.$ensureContext()
if(e===p.DISABLE_DEPTH_TEST){t.disable(t.DEPTH_TEST)
t.depthMask(false)
t.clear(t.DEPTH_BUFFER_BIT)}else if(e===p.ENABLE_DEPTH_TEST){t.enable(t.DEPTH_TEST)
t.depthMask(true)}}
var Mi=function(e,t,n,r){var i
if(e instanceof Si||e.__isPImage){i=e
if(!i.loaded){throw"Error using image in background(): PImage not loaded."}if(i.width!==v.width||i.height!==v.height){throw"Background image must be the same dimensions as the canvas."}}else{i=v.color(e,t,n,r)}at=i}
Ar.prototype.background=function(e,t,n,i){if(e!==r){Mi(e,t,n,i)}if(at instanceof Si||at.__isPImage){Ur()
b.setTransform(1,0,0,1,0,0)
v.image(at,0,0)
zr()}else{Ur()
b.setTransform(1,0,0,1,0,0)
if(v.alpha(at)!==ot){b.clearRect(0,0,v.width,v.height)}b.fillStyle=v.color.toString(at)
b.fillRect(0,0,v.width,v.height)
R=true
zr()}}
_r.prototype.background=function(e,t,n,r){if(arguments.length>0){Mi(e,t,n,r)}var i=v.color.toGLArray(at)
b.clearColor(i[0],i[1],i[2],i[3])
b.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT)}
Ar.prototype.image=function(e,t,r,i,a){t=n.round(t)
r=n.round(r)
if(e.width>0){var s=i||e.width
var o=a||e.height
var l=kr(t||0,r||0,i||e.width,a||e.height,arguments.length<4)
var u=!!e.sourceImg&&gt===null
if(u){var f=e.sourceImg
if(e.__isDirty){e.updatePixels()}b.drawImage(f,0,0,f.width,f.height,l.x,l.y,l.w,l.h)}else{var c=e.toImageData()
if(gt!==null){gt(c)
e.__isDirty=true}b.drawImage(wi(c).canvas,0,0,e.width,e.height,l.x,l.y,l.w,l.h)}}}
_r.prototype.image=function(e,t,r,i,a){if(e.width>0){t=n.round(t)
r=n.round(r)
i=i||e.width
a=a||e.height
v.beginShape(v.QUADS)
v.texture(e)
v.vertex(t,r,0,0,0)
v.vertex(t,r+a,0,0,a)
v.vertex(t+i,r+a,0,i,a)
v.vertex(t+i,r,0,i,0)
v.endShape()}}
v.tint=function(e,t,n,r){var i=v.color(e,t,n,r)
var a=v.red(i)/lt
var s=v.green(i)/ut
var o=v.blue(i)/ft
var l=v.alpha(i)/ot
gt=function(e){var t=e.data,n=4*e.width*e.height
for(var r=0;r<n;){t[r++]*=a
t[r++]*=s
t[r++]*=o
t[r++]*=l}}
vt=function(e){for(var t=0;t<e.length;){e[t++]=a
e[t++]=s
e[t++]=o
e[t++]=l}}}
v.noTint=function(){gt=null
vt=null}
v.copy=function(e,t,n,i,a,s,o,l,u){if(u===r){u=l
l=o
o=s
s=a
a=i
i=n
n=t
t=e
e=v}v.blend(e,t,n,i,a,s,o,l,u,p.REPLACE)}
v.blend=function(e,t,n,i,a,s,o,l,u,f,c){if(e.isRemote){throw"Image is loaded remotely. Cannot blend image."}if(f===r){f=u
u=l
l=o
o=s
s=a
a=i
i=n
n=t
t=e
e=v}var h=t+i,p=n+a,m=s+l,d=o+u,g=c||v
if(c===r||f===r){v.loadPixels()}e.loadPixels()
if(e===v&&v.intersect(t,n,h,p,s,o,m,d)){v.blit_resize(v.get(t,n,h-t,p-n),0,0,h-t-1,p-n-1,g.imageData.data,g.width,g.height,s,o,m,d,f)}else{v.blit_resize(e,t,n,h,p,g.imageData.data,g.width,g.height,s,o,m,d,f)}if(c===r){v.updatePixels()}}
var Ni=function(e){var t=v.floor(e*3.5),n,r
t=t<1?1:t<248?t:248
if(v.shared.blurRadius!==t){v.shared.blurRadius=t
v.shared.blurKernelSize=1+(v.shared.blurRadius<<1)
v.shared.blurKernel=new u(v.shared.blurKernelSize)
var i=v.shared.blurKernel
var a=v.shared.blurKernelSize
var s=v.shared.blurRadius
for(n=0;n<a;n++){i[n]=0}var o=(t-1)*(t-1)
for(n=1;n<t;n++){i[t+n]=i[r]=o}i[t]=t*t}}
var Di=function(e,t){var n,r,i,a,s,o,l
var f,c,h,p,m
var d=t.pixels.getLength()
var g=new u(d)
var y=new u(d)
var b=new u(d)
var x=new u(d)
var k=0
var w,E,S,A
Ni(e)
var _=t.height
var C=t.width
var T=v.shared.blurKernelSize
var I=v.shared.blurRadius
var P=v.shared.blurKernel
var L=t.imageData.data
for(E=0;E<_;E++){for(w=0;w<C;w++){a=i=r=s=n=0
f=w-I
if(f<0){m=-f
f=0}else{if(f>=C){break}m=0}for(S=m;S<T;S++){if(f>=C){break}A=(f+k)*4
l=P[S]
s+=l*L[A+3]
r+=l*L[A]
i+=l*L[A+1]
a+=l*L[A+2]
n+=l
f++}c=k+w
x[c]=s/n
g[c]=r/n
y[c]=i/n
b[c]=a/n}k+=C}k=0
h=-I
p=h*C
for(E=0;E<_;E++){for(w=0;w<C;w++){a=i=r=s=n=0
if(h<0){m=c=-h
f=w}else{if(h>=_){break}m=0
c=h
f=w+p}for(S=m;S<T;S++){if(c>=_){break}l=P[S]
s+=l*x[f]
r+=l*g[f]
i+=l*y[f]
a+=l*b[f]
n+=l
c++
f+=C}A=(w+k)*4
L[A]=r/n
L[A+1]=i/n
L[A+2]=a/n
L[A+3]=s/n}k+=C
p+=C
h++}}
var Fi=function(e,t){var n=0
var r=t.pixels.getLength()
var i=new f(r)
var a,s,o,l,u
var c,h,p,m,d,g,v,y,b,x,k,w
if(!e){while(n<r){a=n
s=n+t.width
while(n<s){o=l=t.pixels.getPixel(n)
h=n-1
c=n+1
p=n-t.width
m=n+t.width
if(h<a){h=n}if(c>=s){c=n}if(p<0){p=0}if(m>=r){m=n}v=t.pixels.getPixel(p)
g=t.pixels.getPixel(h)
y=t.pixels.getPixel(m)
d=t.pixels.getPixel(c)
u=77*(o>>16&255)+151*(o>>8&255)+28*(o&255)
x=77*(g>>16&255)+151*(g>>8&255)+28*(g&255)
b=77*(d>>16&255)+151*(d>>8&255)+28*(d&255)
k=77*(v>>16&255)+151*(v>>8&255)+28*(v&255)
w=77*(y>>16&255)+151*(y>>8&255)+28*(y&255)
if(x>u){l=g
u=x}if(b>u){l=d
u=b}if(k>u){l=v
u=k}if(w>u){l=y
u=w}i[n++]=l}}}else{while(n<r){a=n
s=n+t.width
while(n<s){o=l=t.pixels.getPixel(n)
h=n-1
c=n+1
p=n-t.width
m=n+t.width
if(h<a){h=n}if(c>=s){c=n}if(p<0){p=0}if(m>=r){m=n}v=t.pixels.getPixel(p)
g=t.pixels.getPixel(h)
y=t.pixels.getPixel(m)
d=t.pixels.getPixel(c)
u=77*(o>>16&255)+151*(o>>8&255)+28*(o&255)
x=77*(g>>16&255)+151*(g>>8&255)+28*(g&255)
b=77*(d>>16&255)+151*(d>>8&255)+28*(d&255)
k=77*(v>>16&255)+151*(v>>8&255)+28*(v&255)
w=77*(y>>16&255)+151*(y>>8&255)+28*(y&255)
if(x<u){l=g
u=x}if(b<u){l=d
u=b}if(k<u){l=v
u=k}if(w<u){l=y
u=w}i[n++]=l}}}t.pixels.set(i)}
v.filter=function(e,t,n){var i,a,s,o
if(arguments.length===3){n.loadPixels()
i=n}else{v.loadPixels()
i=v}if(t===r){t=null}if(i.isRemote){throw"Image is loaded remotely. Cannot filter image."}var l=i.pixels.getLength()
switch(e){case p.BLUR:var u=t||1
Di(u,i)
break
case p.GRAY:if(i.format===p.ALPHA){for(o=0;o<l;o++){a=255-i.pixels.getPixel(o)
i.pixels.setPixel(o,4278190080|a<<16|a<<8|a)}i.format=p.RGB}else{for(o=0;o<l;o++){a=i.pixels.getPixel(o)
s=77*(a>>16&255)+151*(a>>8&255)+28*(a&255)>>8
i.pixels.setPixel(o,a&p.ALPHA_MASK|s<<16|s<<8|s)}}break
case p.INVERT:for(o=0;o<l;o++){i.pixels.setPixel(o,i.pixels.getPixel(o)^16777215)}break
case p.POSTERIZE:if(t===null){throw"Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)"}var f=v.floor(t)
if(f<2||f>255){throw"Levels must be between 2 and 255 for filter(POSTERIZE, levels)"}var c=f-1
for(o=0;o<l;o++){var h=i.pixels.getPixel(o)>>16&255
var m=i.pixels.getPixel(o)>>8&255
var d=i.pixels.getPixel(o)&255
h=(h*f>>8)*255/c
m=(m*f>>8)*255/c
d=(d*f>>8)*255/c
i.pixels.setPixel(o,4278190080&i.pixels.getPixel(o)|h<<16|m<<8|d)}break
case p.OPAQUE:for(o=0;o<l;o++){i.pixels.setPixel(o,i.pixels.getPixel(o)|4278190080)}i.format=p.RGB
break
case p.THRESHOLD:if(t===null){t=.5}if(t<0||t>1){throw"Level must be between 0 and 1 for filter(THRESHOLD, level)"}var g=v.floor(t*255)
for(o=0;o<l;o++){var y=v.max((i.pixels.getPixel(o)&p.RED_MASK)>>16,v.max((i.pixels.getPixel(o)&p.GREEN_MASK)>>8,i.pixels.getPixel(o)&p.BLUE_MASK))
i.pixels.setPixel(o,i.pixels.getPixel(o)&p.ALPHA_MASK|(y<g?0:16777215))}break
case p.ERODE:Fi(true,i)
break
case p.DILATE:Fi(false,i)
break}i.updatePixels()}
v.shared={fracU:0,ifU:0,fracV:0,ifV:0,u1:0,u2:0,v1:0,v2:0,sX:0,sY:0,iw:0,iw1:0,ih1:0,ul:0,ll:0,ur:0,lr:0,cUL:0,cLL:0,cUR:0,cLR:0,srcXOffset:0,srcYOffset:0,r:0,g:0,b:0,a:0,srcBuffer:null,blurRadius:0,blurKernelSize:0,blurKernel:null}
v.intersect=function(e,t,n,r,i,a,s,o){var l=n-e+1
var u=r-t+1
var f=s-i+1
var c=o-a+1
if(i<e){f+=i-e
if(f>l){f=l}}else{var h=l+e-i
if(f>h){f=h}}if(a<t){c+=a-t
if(c>u){c=u}}else{var p=u+t-a
if(c>p){c=p}}return!(f<=0||c<=0)}
var Wi={}
Wi[p.BLEND]=v.modes.blend
Wi[p.ADD]=v.modes.add
Wi[p.SUBTRACT]=v.modes.subtract
Wi[p.LIGHTEST]=v.modes.lightest
Wi[p.DARKEST]=v.modes.darkest
Wi[p.REPLACE]=v.modes.replace
Wi[p.DIFFERENCE]=v.modes.difference
Wi[p.EXCLUSION]=v.modes.exclusion
Wi[p.MULTIPLY]=v.modes.multiply
Wi[p.SCREEN]=v.modes.screen
Wi[p.OVERLAY]=v.modes.overlay
Wi[p.HARD_LIGHT]=v.modes.hard_light
Wi[p.SOFT_LIGHT]=v.modes.soft_light
Wi[p.DODGE]=v.modes.dodge
Wi[p.BURN]=v.modes.burn
v.blit_resize=function(e,t,r,i,a,s,o,l,u,f,c,h,m){var d,g
if(t<0){t=0}if(r<0){r=0}if(i>=e.width){i=e.width-1}if(a>=e.height){a=e.height-1}var y=i-t
var b=a-r
var x=c-u
var k=h-f
if(x<=0||k<=0||y<=0||b<=0||u>=o||f>=l||t>=e.width||r>=e.height){return}var w=n.floor(y/x*p.PRECISIONF)
var E=n.floor(b/k*p.PRECISIONF)
var S=v.shared
S.srcXOffset=n.floor(u<0?-u*w:t*p.PRECISIONF)
S.srcYOffset=n.floor(f<0?-f*E:r*p.PRECISIONF)
if(u<0){x+=u
u=0}if(f<0){k+=f
f=0}x=n.min(x,o-u)
k=n.min(k,l-f)
var A=f*o+u
var _
S.srcBuffer=e.imageData.data
S.iw=e.width
S.iw1=e.width-1
S.ih1=e.height-1
var C=v.filter_bilinear,T=v.filter_new_scanline,I=Wi[m],P,L,R,O,M,N,D=p.ALPHA_MASK,F=p.RED_MASK,W=p.GREEN_MASK,B=p.BLUE_MASK,G=p.PREC_MAXVAL,V=p.PRECISIONB,U=p.PREC_RED_SHIFT,z=p.PREC_ALPHA_SHIFT,j=S.srcBuffer,H=n.min
for(g=0;g<k;g++){S.sX=S.srcXOffset
S.fracV=S.srcYOffset&G
S.ifV=G-S.fracV
S.v1=(S.srcYOffset>>V)*S.iw
S.v2=H((S.srcYOffset>>V)+1,S.ih1)*S.iw
for(d=0;d<x;d++){L=(A+d)*4
_=s[L+3]<<24&D|s[L]<<16&F|s[L+1]<<8&W|s[L+2]&B
S.fracU=S.sX&G
S.ifU=G-S.fracU
S.ul=S.ifU*S.ifV>>V
S.ll=S.ifU*S.fracV>>V
S.ur=S.fracU*S.ifV>>V
S.lr=S.fracU*S.fracV>>V
S.u1=S.sX>>V
S.u2=H(S.u1+1,S.iw1)
R=(S.v1+S.u1)*4
O=(S.v1+S.u2)*4
M=(S.v2+S.u1)*4
N=(S.v2+S.u2)*4
S.cUL=j[R+3]<<24&D|j[R]<<16&F|j[R+1]<<8&W|j[R+2]&B
S.cUR=j[O+3]<<24&D|j[O]<<16&F|j[O+1]<<8&W|j[O+2]&B
S.cLL=j[M+3]<<24&D|j[M]<<16&F|j[M+1]<<8&W|j[M+2]&B
S.cLR=j[N+3]<<24&D|j[N]<<16&F|j[N+1]<<8&W|j[N+2]&B
S.r=S.ul*((S.cUL&F)>>16)+S.ll*((S.cLL&F)>>16)+S.ur*((S.cUR&F)>>16)+S.lr*((S.cLR&F)>>16)<<U&F
S.g=S.ul*(S.cUL&W)+S.ll*(S.cLL&W)+S.ur*(S.cUR&W)+S.lr*(S.cLR&W)>>>V&W
S.b=S.ul*(S.cUL&B)+S.ll*(S.cLL&B)+S.ur*(S.cUR&B)+S.lr*(S.cLR&B)>>>V
S.a=S.ul*((S.cUL&D)>>>24)+S.ll*((S.cLL&D)>>>24)+S.ur*((S.cUR&D)>>>24)+S.lr*((S.cLR&D)>>>24)<<z&D
P=I(_,S.a|S.r|S.g|S.b)
s[L]=(P&F)>>>16
s[L+1]=(P&W)>>>8
s[L+2]=P&B
s[L+3]=(P&D)>>>24
S.sX+=w}A+=o
S.srcYOffset+=E}}
v.loadFont=function(e,t){if(e===r){throw"font name required in loadFont."}if(e.indexOf(".svg")===-1){if(t===r){t=ln.size}return I.get(e,t)}var n=v.loadGlyphs(e)
return{name:e,css:"12px sans-serif",glyph:true,units_per_em:n.units_per_em,horiz_adv_x:1/n.units_per_em*n.horiz_adv_x,ascent:n.ascent,descent:n.descent,width:function(t){var n=0
var r=t.length
for(var i=0;i<r;i++){try{n+=parseFloat(v.glyphLook(v.glyphTable[e],t[i]).horiz_adv_x)}catch(a){P.debug(a)}}return n/v.glyphTable[e].units_per_em}}}
v.createFont=function(e,t){return v.loadFont(e,t)}
v.textFont=function(e,t){if(t!==r){if(!e.glyph){e=I.get(e.name,t)}rn=t}ln=e
nn=ln.name
an=ln.ascent
sn=ln.descent
on=ln.leading
var n=E.$ensureContext()
n.font=ln.css}
v.textSize=function(e){if(e!==rn){e=n.round(10*e)/10
ln=I.get(nn,e)
rn=e
an=ln.ascent
sn=ln.descent
on=ln.leading
var t=E.$ensureContext()
t.font=ln.css}}
v.textAscent=function(){return an}
v.textDescent=function(){return sn}
v.textLeading=function(e){on=e}
v.textAlign=function(e,t){Qt=e
en=t||p.BASELINE}
function Bi(e){if(e instanceof String){return e}if(typeof e==="number"){if(e===(0|e)){return e.toString()}return v.nf(e,0,3)}if(e===null||e===r){return""}return e.toString()}Ar.prototype.textWidth=function(e){var t=Bi(e).split(/\r?\n/g),r=0
var i,a=t.length
b.font=ln.css
for(i=0;i<a;++i){r=n.max(r,ln.measureTextWidth(t[i]))}return r|0}
_r.prototype.textWidth=function(e){var i=Bi(e).split(/\r?\n/g),a=0
var s,o=i.length
if(wt===r){wt=t.createElement("canvas")}var l=wt.getContext("2d")
l.font=ln.css
for(s=0;s<o;++s){a=n.max(a,l.measureText(i[s]).width)}return a|0}
v.glyphLook=function(e,t){try{switch(t){case"1":return e.one
case"2":return e.two
case"3":return e.three
case"4":return e.four
case"5":return e.five
case"6":return e.six
case"7":return e.seven
case"8":return e.eight
case"9":return e.nine
case"0":return e.zero
case" ":return e.space
case"$":return e.dollar
case"!":return e.exclam
case'"':return e.quotedbl
case"#":return e.numbersign
case"%":return e.percent
case"&":return e.ampersand
case"'":return e.quotesingle
case"(":return e.parenleft
case")":return e.parenright
case"*":return e.asterisk
case"+":return e.plus
case",":return e.comma
case"-":return e.hyphen
case".":return e.period
case"/":return e.slash
case"_":return e.underscore
case":":return e.colon
case";":return e.semicolon
case"<":return e.less
case"=":return e.equal
case">":return e.greater
case"?":return e.question
case"@":return e.at
case"[":return e.bracketleft
case"\\":return e.backslash
case"]":return e.bracketright
case"^":return e.asciicircum
case"`":return e.grave
case"{":return e.braceleft
case"|":return e.bar
case"}":return e.braceright
case"~":return e.asciitilde
default:return e[t]}}catch(n){P.debug(n)}}
Ar.prototype.text$line=function(e,t,n,r,i){var a=0,s=0
if(!ln.glyph){if(e&&"fillText"in b){if(R){b.fillStyle=v.color.toString(L)
R=false}if(i===p.RIGHT||i===p.CENTER){a=ln.measureTextWidth(e)
if(i===p.RIGHT){s=-a}else{s=-a/2}}b.fillText(e,t+s,n)}}else{var o=v.glyphTable[nn]
Ur()
b.translate(t,n+rn)
if(i===p.RIGHT||i===p.CENTER){a=o.width(e)
if(i===p.RIGHT){s=-a}else{s=-a/2}}var l=o.units_per_em,u=1/l*rn
b.scale(u,u)
for(var f=0,c=e.length;f<c;f++){try{v.glyphLook(o,e[f]).draw()}catch(h){P.debug(h)}}zr()}}
_r.prototype.text$line=function(e,n,i,a,s){if(wt===r){wt=t.createElement("canvas")}var o=b
b=wt.getContext("2d")
b.font=ln.css
var l=ln.measureTextWidth(e)
wt.width=l
wt.height=rn
b=wt.getContext("2d")
b.font=ln.css
b.textBaseline="top"
Ar.prototype.text$line(e,0,0,0,p.LEFT)
var u=wt.width/wt.height
b=o
b.bindTexture(b.TEXTURE_2D,Ht)
b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,wt)
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR)
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR)
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE)
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE)
var f=0
if(s===p.RIGHT){f=-l}else if(s===p.CENTER){f=-l/2}var c=new Dr
var h=rn*.5
c.translate(n+f-h/2,i-h,a)
c.scale(-u*h,-h,h)
c.translate(-1,-1,-1)
c.transpose()
var m=new Dr
m.scale(1,-1,1)
m.apply(On.array())
m.transpose()
b.useProgram(Lt)
vr("vertex2d",Lt,"Vertex",3,Yt)
vr("aTextureCoord2d",Lt,"aTextureCoord",2,Zt)
dr("uSampler2d",Lt,"uSampler",[0])
dr("picktype2d",Lt,"picktype",1)
gr("model2d",Lt,"model",false,c.array())
gr("view2d",Lt,"view",false,m.array())
mr("color2d",Lt,"color",T)
b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,Jt)
b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0)}
function Gi(e,t,n,r){var i,a
if(e.indexOf("\n")<0){i=[e]
a=1}else{i=e.split(/\r?\n/g)
a=i.length}var s=0
if(en===p.TOP){s=an+sn}else if(en===p.CENTER){s=an/2-(a-1)*on/2}else if(en===p.BOTTOM){s=-(sn+(a-1)*on)}for(var o=0;o<a;++o){var l=i[o]
E.text$line(l,t,n+s,r,Qt)
s+=on}}function Vi(e,t,r,i,a,s){if(e.length===0||i===0||a===0){return}if(rn>a){return}var o=-1
var l=0
var u=0
var f=[]
for(var c=0,h=e.length;c<h;c++){var m=e[c]
var d=m===" "
var g=ln.measureTextWidth(m)
if(m!=="\n"&&u+g<=i){if(d){o=c}u+=g}else{if(o+1===l){if(c>0){o=c}else{return}}if(m==="\n"){f.push({text:e.substring(l,c),width:u})
l=c+1}else{f.push({text:e.substring(l,o+1),width:u})
l=o+1}u=0
c=l-1}}if(l<h){f.push({text:e.substring(l),width:u})}var v=1,y=an
if(Qt===p.CENTER){v=i/2}else if(Qt===p.RIGHT){v=i}var b=f.length,x=n.min(b,n.floor(a/on))
if(en===p.TOP){y=an+sn}else if(en===p.CENTER){y=a/2-on*(x/2-1)}else if(en===p.BOTTOM){y=sn+on}var k,w,S
for(k=0;k<b;k++){S=k*on
if(y+S>a-sn){break}w=f[k]
E.text$line(w.text,t+v,r+y+S,s,Qt)}}v.text=function(){if(b.font!==ln.css){b.font=ln.css}if(tn===p.SHAPE){return}if(arguments.length===3){Gi(Bi(arguments[0]),arguments[1],arguments[2],0)}else if(arguments.length===4){Gi(Bi(arguments[0]),arguments[1],arguments[2],arguments[3])}else if(arguments.length===5){Vi(Bi(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],0)}else if(arguments.length===6){Vi(Bi(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}}
v.textMode=function(e){tn=e}
v.loadGlyphs=function(i){var a,s,o,l,u,f,c,h,p,m,d,g="[0-9\\-]+",y
var b=function(e,t){var n=0,r=[],i,a=new RegExp(e,"g")
i=r[n]=a.exec(t)
while(i){n++
i=r[n]=a.exec(t)}return r}
var x=function(e){var t=b("[A-Za-z][0-9\\- ]+|Z",e)
var r=function(){Ur()
return E.$ensureContext()}
var i=function(){ui()
fi()
zr()}
y="return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();"
a=0
s=0
o=0
l=0
u=0
f=0
e=0
h=0
p=""
m=t.length-1
for(var c=0;c<m;c++){var x=t[c][0],k=b(g,x)
switch(x[0]){case"M":a=parseFloat(k[0][0])
s=parseFloat(k[1][0])
y+="curContext.moveTo("+a+","+-s+");"
break
case"L":a=parseFloat(k[0][0])
s=parseFloat(k[1][0])
y+="curContext.lineTo("+a+","+-s+");"
break
case"H":a=parseFloat(k[0][0])
y+="curContext.lineTo("+a+","+-s+");"
break
case"V":s=parseFloat(k[0][0])
y+="curContext.lineTo("+a+","+-s+");"
break
case"T":u=parseFloat(k[0][0])
f=parseFloat(k[1][0])
if(p==="Q"||p==="T"){e=n.sqrt(n.pow(a-o,2)+n.pow(l-s,2))
h=(v.angleMode==="degrees"?180:n.PI)+v.atan2(o-a,l-s)
o=a+v.sin(h)*e
l=s+v.cos(h)*e}else{o=a
l=s}y+="curContext.quadraticCurveTo("+o+","+-l+","+u+","+-f+");"
a=u
s=f
break
case"Q":o=parseFloat(k[0][0])
l=parseFloat(k[1][0])
u=parseFloat(k[2][0])
f=parseFloat(k[3][0])
y+="curContext.quadraticCurveTo("+o+","+-l+","+u+","+-f+");"
a=u
s=f
break
case"Z":y+="curContext.closePath();"
break}p=x[0]}y+="afterPathDraw();"
y+="curContext.translate("+d+",0);"
y+="}}"
return new Function("beforePathDraw","afterPathDraw",y)(r,i)}
var k=function(e){var t=e.getElementsByTagName("font")
v.glyphTable[i].horiz_adv_x=t[0].getAttribute("horiz-adv-x")
var n=e.getElementsByTagName("font-face")[0]
v.glyphTable[i].units_per_em=parseFloat(n.getAttribute("units-per-em"))
v.glyphTable[i].ascent=parseFloat(n.getAttribute("ascent"))
v.glyphTable[i].descent=parseFloat(n.getAttribute("descent"))
var a=e.getElementsByTagName("glyph"),s=a.length
for(var o=0;o<s;o++){var l=a[o].getAttribute("unicode")
var u=a[o].getAttribute("glyph-name")
d=a[o].getAttribute("horiz-adv-x")
if(d===null){d=v.glyphTable[i].horiz_adv_x}c=a[o].getAttribute("d")
if(c!==r){y=x(c)
v.glyphTable[i][u]={name:u,unicode:l,horiz_adv_x:d,draw:y.draw}}}}
var w=function(){var n
try{n=t.implementation.createDocument("","",null)}catch(r){P.debug(r.message)
return}try{n.async=false
n.load(i)
k(n.getElementsByTagName("svg")[0])}catch(a){P.debug(a)
try{var s=new e.XMLHttpRequest
s.open("GET",i,false)
s.send(null)
k(s.responseXML.documentElement)}catch(o){P.debug(a)}}}
v.glyphTable[i]={}
w(i)
return v.glyphTable[i]}
v.param=function(e){var t="data-processing-"+e
if(l.hasAttribute(t)){return l.getAttribute(t)}for(var n=0,r=l.childNodes.length;n<r;++n){var i=l.childNodes.item(n)
if(i.nodeType!==1||i.tagName.toLowerCase()!=="param"){continue}if(i.getAttribute("name")===e){return i.getAttribute("value")}}if(k.params.hasOwnProperty(e)){return k.params[e]}return null}
function Ui(e){if(e==="3D"){E=new _r}else if(e==="2D"){E=new Ar}else{E=new Cr}for(var t in Cr.prototype){if(Cr.prototype.hasOwnProperty(t)&&t.indexOf("$")<0){v[t]=E[t]}}E.$init()}function zi(e){return function(){Ui("2D")
return E[e].apply(this,arguments)}}Cr.prototype.translate=zi("translate")
Cr.prototype.scale=zi("scale")
Cr.prototype.pushMatrix=zi("pushMatrix")
Cr.prototype.popMatrix=zi("popMatrix")
Cr.prototype.resetMatrix=zi("resetMatrix")
Cr.prototype.applyMatrix=zi("applyMatrix")
Cr.prototype.rotate=zi("rotate")
Cr.prototype.rotateZ=zi("rotateZ")
Cr.prototype.redraw=zi("redraw")
Cr.prototype.toImageData=zi("toImageData")
Cr.prototype.ambientLight=zi("ambientLight")
Cr.prototype.directionalLight=zi("directionalLight")
Cr.prototype.lightFalloff=zi("lightFalloff")
Cr.prototype.lightSpecular=zi("lightSpecular")
Cr.prototype.pointLight=zi("pointLight")
Cr.prototype.noLights=zi("noLights")
Cr.prototype.spotLight=zi("spotLight")
Cr.prototype.beginCamera=zi("beginCamera")
Cr.prototype.endCamera=zi("endCamera")
Cr.prototype.frustum=zi("frustum")
Cr.prototype.box=zi("box")
Cr.prototype.sphere=zi("sphere")
Cr.prototype.ambient=zi("ambient")
Cr.prototype.emissive=zi("emissive")
Cr.prototype.shininess=zi("shininess")
Cr.prototype.specular=zi("specular")
Cr.prototype.fill=zi("fill")
Cr.prototype.stroke=zi("stroke")
Cr.prototype.strokeWeight=zi("strokeWeight")
Cr.prototype.smooth=zi("smooth")
Cr.prototype.noSmooth=zi("noSmooth")
Cr.prototype.point=zi("point")
Cr.prototype.vertex=zi("vertex")
Cr.prototype.endShape=zi("endShape")
Cr.prototype.bezierVertex=zi("bezierVertex")
Cr.prototype.curveVertex=zi("curveVertex")
Cr.prototype.curve=zi("curve")
Cr.prototype.line=zi("line")
Cr.prototype.bezier=zi("bezier")
Cr.prototype.rect=zi("rect")
Cr.prototype.ellipse=zi("ellipse")
Cr.prototype.background=zi("background")
Cr.prototype.image=zi("image")
Cr.prototype.textWidth=zi("textWidth")
Cr.prototype.text$line=zi("text$line")
Cr.prototype.$ensureContext=zi("$ensureContext")
Cr.prototype.$newPMatrix=zi("$newPMatrix")
Cr.prototype.size=function(e,t,n){Ui(n===p.WEBGL?"3D":"2D")
v.size(e,t,n)}
Cr.prototype.$init=i
Ar.prototype.$init=function(){v.size(v.width,v.height)
b.lineCap="round"
v.noSmooth()
v.disableContextMenu()}
_r.prototype.$init=function(){v.use3DContext=true}
Sr.prototype.$ensureContext=function(){return b}
function ji(t,n){var r=t,i=0,a=0
v.pmouseX=v.mouseX
v.pmouseY=v.mouseY
if(r.offsetParent){do{i+=r.offsetLeft
a+=r.offsetTop}while(!!(r=r.offsetParent))}r=t
do{i-=r.scrollLeft||0
a-=r.scrollTop||0}while(!!(r=r.parentNode))
i+=vn
a+=yn
i+=bn
a+=xn
i+=e.pageXOffset
a+=e.pageYOffset
return{X:i,Y:a}}function $i(e,t){var n=ji(e,t)
v.mouseX=t.pageX-n.X
v.mouseY=t.pageY-n.Y}function Hi(e){var t=ji(e.changedTouches[0].target,e.changedTouches[0]),n
for(n=0;n<e.touches.length;n++){var r=e.touches[n]
r.offsetX=r.pageX-t.X
r.offsetY=r.pageY-t.Y}for(n=0;n<e.targetTouches.length;n++){var i=e.targetTouches[n]
i.offsetX=i.pageX-t.X
i.offsetY=i.pageY-t.Y}for(n=0;n<e.changedTouches.length;n++){var a=e.changedTouches[n]
a.offsetX=a.pageX-t.X
a.offsetY=a.pageY-t.Y}return e}Hr(l,"touchstart",function(e){l.setAttribute("style","-webkit-user-select: none")
l.setAttribute("onclick","void(0)")
l.setAttribute("style","-webkit-tap-highlight-color:rgba(0,0,0,0)")
for(var t=0,n=$r.length;t<n;t++){var i=$r[t].type
if(i==="mouseout"||i==="mousemove"||i==="mousedown"||i==="mouseup"||i==="DOMMouseScroll"||i==="mousewheel"||i==="touchstart"){qr($r[t])}}if(v.touchStart!==r||v.touchMove!==r||v.touchEnd!==r||v.touchCancel!==r){Hr(l,"touchstart",function(e){if(v.touchStart!==r){e=Hi(e)
v.touchStart(e)}})
Hr(l,"touchmove",function(e){if(v.touchMove!==r){e.preventDefault()
e=Hi(e)
v.touchMove(e)}})
Hr(l,"touchend",function(e){if(v.touchEnd!==r){e=Hi(e)
v.touchEnd(e)}})
Hr(l,"touchcancel",function(e){if(v.touchCancel!==r){e=Hi(e)
v.touchCancel(e)}})}else{Hr(l,"touchstart",function(e){$i(l,e.touches[0])
v.mouseIsPressed=v.__mousePressed=true
v.mouseDragging=false
v.mouseButton=p.LEFT
if(typeof v.mousePressed==="function"){v.mousePressed()}})
Hr(l,"touchmove",function(e){e.preventDefault()
$i(l,e.touches[0])
if(typeof v.mouseMoved==="function"&&!v.__mousePressed){v.mouseMoved()}if(typeof v.mouseDragged==="function"&&v.__mousePressed){v.mouseDragged()
v.mouseDragging=true}})
Hr(l,"touchend",function(e){v.__mousePressed=false
if(typeof v.mouseClicked==="function"&&!v.mouseDragging){v.mouseClicked()}if(typeof v.mouseReleased==="function"){v.mouseReleased()}})}l.dispatchEvent(e)});(function(){var e=true,t=function(e){e.preventDefault()
e.stopPropagation()}
v.disableContextMenu=function(){if(!e){return}Hr(l,"contextmenu",t)
e=false}
v.enableContextMenu=function(){if(e){return}qr({elem:l,type:"contextmenu",fn:t})
e=true}})()
var qi=false
Hr(l,"mousemove",function(e){if(qi){qi=false}else{$i(l,e)}if(typeof v.mouseMoved==="function"&&!v.__mousePressed){v.mouseMoved()}if(typeof v.mouseDragged==="function"&&v.__mousePressed){v.mouseDragged()
v.mouseDragging=true}})
Hr(l,"mouseout",function(e){if(typeof v.mouseOut==="function"){v.mouseOut()}})
Hr(l,"mouseover",function(e){qi=true
$i(l,e)
if(typeof v.mouseOver==="function"){v.mouseOver()}})
Hr(l,"mousedown",function(e){v.mouseIsPressed=v.__mousePressed=true
v.mouseDragging=false
switch(e.which){case 1:v.mouseButton=p.LEFT
break
case 2:v.mouseButton=p.CENTER
break
case 3:v.mouseButton=p.RIGHT
break}if(typeof v.mousePressed==="function"){v.mousePressed()}})
Hr(l,"mouseup",function(e){v.__mousePressed=false
if(typeof v.mouseClicked==="function"&&!v.mouseDragging){v.mouseClicked()}if(typeof v.mouseReleased==="function"){v.mouseReleased()}})
var Ki=function(t){var n=0
if(t.wheelDelta){n=t.wheelDelta/120
if(e.opera){n=-n}}else if(t.detail){n=-t.detail/3}v.mouseScroll=n
if(n&&typeof v.mouseScrolled==="function"){v.mouseScrolled()}}
Hr(t,"DOMMouseScroll",Ki)
Hr(t,"mousewheel",Ki)
if(typeof l==="string"){l=t.getElementById(l)}if(!l.getAttribute("tabindex")){l.setAttribute("tabindex",0)}function Xi(e){var t=e.which||e.keyCode
switch(t){case 13:return 10
case 91:case 93:case 224:return 157
case 57392:return 17
case 46:return 127
case 45:return 155}return t}function Yi(e){var t=e.which||e.keyCode
var n=e.shiftKey||e.ctrlKey||e.altKey||e.metaKey
switch(t){case 13:t=n?13:10
break
case 8:t=n?127:8
break}return new Ir(t)}function Zi(e){if(typeof e.preventDefault==="function"){e.preventDefault()}else if(typeof e.stopPropagation==="function"){e.stopPropagation()}return false}function Ji(){var e
for(e in mn){if(mn.hasOwnProperty(e)){v.keyIsPressed=v.__keyPressed=true
return}}v.keyIsPressed=v.__keyPressed=false}function Qi(){v.keyIsPressed=v.__keyPressed=false
mn=[]
dn=null}function ea(e,t){mn[e]=t
dn=null
v.key=t
v.keyCode=e
v.keyPressed()
if(!v.__usingDebugger){v.keyCode=0}v.keyTyped()
Ji()}function ta(e){var t=Xi(e)
if(t===p.DELETE||t===p.BACKSPACE){ea(t,new Ir(t))
return Zi(e)}if(gn.indexOf(t)<0){dn=t
return}var n=new Ir(p.CODED)
v.key=n
v.keyCode=t
mn[t]=n
v.keyPressed()
dn=null
Ji()
return Zi(e)}function na(e){if(dn===null){return}var t=dn,n=Yi(e)
ea(t,n)
return Zi(e)}function ra(e){var t=Xi(e),n=mn[t]
if(n===r){return}v.key=n
v.keyCode=t
v.keyReleased()
delete mn[t]
Ji()}if(!d){if(o instanceof P.Sketch){k=o}else if(typeof o==="function"){k=new P.Sketch(o)}else if(!o){k=new P.Sketch(function(){})}else{k=P.compile(o)}v.externals.sketch=k
Ui()
l.onfocus=function(){v.focused=true}
l.onblur=function(){v.focused=false
if(!k.options.globalKeyEvents){Qi()}}
if(k.options.pauseOnBlur){Hr(e,"focus",function(){if(G){v.loop()}})
Hr(e,"blur",function(){if(G&&W){v.noLoop()
G=true}Qi()})}var ia=k.options.globalKeyEvents?e:l
Hr(ia,"keydown",ta)
Hr(ia,"keypress",na)
Hr(ia,"keyup",ra)
for(var aa in P.lib){if(P.lib.hasOwnProperty(aa)){if(P.lib[aa].hasOwnProperty("attach")){P.lib[aa].attach(v)}else if(P.lib[aa]instanceof Function){P.lib[aa].call(this)}}}var sa=100
var oa=function(n){if(!(k.imageCache.pending||I.preloading.pending(sa))){if(e.opera){var r,i,a=k.imageCache.operaCache
for(r in a){if(a.hasOwnProperty(r)){i=a[r]
if(i!==null){t.body.removeChild(i)}delete a[r]}}}k.attach(n,x)
k.onLoad(n)
if(n.setup){n.setup()
n.resetMatrix()
k.onSetup()}Ii()
if(n.draw){if(!G){n.redraw()}else{n.loop()}}}else{e.setTimeout(function(){oa(n)},sa)}}
_(this)
oa(v)}else{k=new P.Sketch
Ui()
v.size=function(e,t,n){if(n&&n===p.WEBGL){Ui("3D")}else{Ui("2D")}v.size(e,t,n)}}}
P.debug=a
P.prototype=x
function L(){var e=["abs","acos","alpha","ambient","ambientLight","append","applyMatrix","arc","arrayCopy","asin","atan","atan2","background","beginCamera","beginDraw","beginShape","bezier","bezierDetail","bezierPoint","bezierTangent","bezierVertex","binary","blend","blendColor","blit_resize","blue","box","breakShape","brightness","camera","ceil","Character","color","colorMode","concat","constrain","copy","cos","createFont","createGraphics","createImage","cursor","curve","curveDetail","curvePoint","curveTangent","curveTightness","curveVertex","day","degrees","directionalLight","disableContextMenu","dist","draw","ellipse","ellipseMode","emissive","enableContextMenu","endCamera","endDraw","endShape","exit","exp","expand","externals","fill","filter","floor","focused","frameCount","frameRate","frustum","get","glyphLook","glyphTable","green","height","hex","hint","hour","hue","image","imageMode","intersect","join","key","keyCode","keyPressed","keyReleased","keyTyped","lerp","lerpColor","lightFalloff","lights","lightSpecular","line","link","loadBytes","loadFont","loadGlyphs","loadImage","loadPixels","loadShape","loadStrings","log","loop","mag","map","match","matchAll","max","millis","min","minute","mix","modelX","modelY","modelZ","modes","month","mouseButton","mouseClicked","mouseDragged","mouseMoved","mouseOut","mouseOver","mousePressed","mouseReleased","mouseScroll","mouseScrolled","mouseX","mouseY","name","nf","nfc","nfp","nfs","noCursor","noFill","noise","noiseDetail","noiseSeed","noLights","noLoop","norm","normal","noSmooth","noStroke","noTint","ortho","param","parseBoolean","parseByte","parseChar","parseFloat","parseInt","peg","perspective","PImage","pixels","PMatrix2D","PMatrix3D","PMatrixStack","pmouseX","pmouseY","point","pointLight","popMatrix","popStyle","pow","print","printCamera","println","printMatrix","printProjection","PShape","PShapeSVG","pushMatrix","pushStyle","quad","radians","random","Random","randomSeed","rect","rectMode","red","redraw","requestImage","resetMatrix","reverse","rotate","rotateX","rotateY","rotateZ","round","saturation","save","saveFrame","saveStrings","scale","screenX","screenY","screenZ","second","set","setup","shape","shapeMode","shared","shininess","shorten","sin","size","smooth","sort","specular","sphere","sphereDetail","splice","split","splitTokens","spotLight","sq","sqrt","status","str","stroke","strokeCap","strokeJoin","strokeWeight","subset","tan","text","textAlign","textAscent","textDescent","textFont","textLeading","textMode","textSize","texture","textureMode","textWidth","tint","toImageData","touchCancel","touchEnd","touchMove","touchStart","translate","triangle","trim","unbinary","unhex","updatePixels","use3DContext","vertex","width","XMLElement","year","__contains","__equals","__equalsIgnoreCase","__frameRate","__hashCode","__int_cast","mouseIsPressed","keyIsPressed","__instanceof","__keyPressed","__mousePressed","__printStackTrace","__replace","__replaceAll","__replaceFirst","__toCharArray","__split","__codePointAt","__startsWith","__endsWith"]
var t={}
var n,r
for(n=0,r=e.length;n<r;++n){t[e[n]]=null}for(var i in P.lib){if(P.lib.hasOwnProperty(i)){if(P.lib[i].exports){var a=P.lib[i].exports
for(n=0,r=a.length;n<r;++n){t[a[n]]=null}}}}return t}function R(e){var t=L()
function n(e){var t=[]
var n=e.split(/([\{\[\(\)\]\}])/)
var r=n[0]
var i=[]
for(var a=1;a<n.length;a+=2){var s=n[a]
if(s==="["||s==="{"||s==="("){i.push(r)
r=s}else if(s==="]"||s==="}"||s===")"){var o=s==="}"?"A":s===")"?"B":"C"
var l=t.length
t.push(r+s)
r=i.pop()+'"'+o+(l+1)+'"'}r+=n[a+1]}t.unshift(r)
return t}function i(e,t){return e.replace(/'(\d+)'/g,function(e,n){var r=t[n]
if(r.charAt(0)==="/"){return r}return/^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(r)?"(new $p.Character("+r+"))":r})}function a(e){var t=/^\s*/.exec(e),n
if(t[0].length===e.length){n={left:t[0],middle:"",right:""}}else{var r=/\s*$/.exec(e)
n={left:t[0],middle:e.substring(t[0].length,r.index),right:r[0]}}n.untrim=function(e){return this.left+e+this.right}
return n}function s(e){return e.replace(/^\s+/,"").replace(/\s+$/,"")}function o(e,t){for(var n=0,r=t.length;n<r;++n){e[t[n]]=null}return e}function l(e){for(var t in e){if(e.hasOwnProperty(t)){return false}}return true}function u(e){return e.substring(2,e.length-1)}var f=e.replace(/\r\n?|\n\r/g,"\n")
var c=[]
var h=f.replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g,function(e,t,n,r,i,a,s,o){var l
if(t||n){l=c.length
c.push(e)
return"'"+l+"'"}if(r){l=c.length
c.push(a)
return i+"'"+l+"'"}return o!==""?" ":"\n"})
var m
var d=h
var g=function(e,t,n,r){if(!!t||!!r){return e}m=true
return""}
do{m=false
d=d.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g,g)}while(m)
var v=n(d)
var y
var b={},k,w=0
function E(e,t){var n=v.length
v.push(e)
return'"'+t+n+'"'}function S(){return"class"+ ++w}function A(e,t,n){e.classId=t
e.scopeId=n
b[t]=e}var _,C,T,I,P,R
var O=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g
var M=/\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g
var N=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/
var D=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g
var F=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/
var W=/\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g
function B(e){var t=e
t=t.replace(O,function(e){return E(e,"E")})
t=t.replace(M,function(e){return E(e,"D")})
t=t.replace(W,function(e){return E(e,"H")})
return t}function G(e,t){var n=e.replace(D,function(e,n,r,i,a,s){if(r!==t){return e}return E(e,"G")})
return n}function V(e){this.name=e}V.prototype.toString=function(){return this.name}
function U(e){this.params=e}U.prototype.getNames=function(){var e=[]
for(var t=0,n=this.params.length;t<n;++t){e.push(this.params[t].name)}return e}
U.prototype.toString=function(){if(this.params.length===0){return"()"}var e="("
for(var t=0,n=this.params.length;t<n;++t){e+=this.params[t]+", "}return e.substring(0,e.length-2)+")"}
function z(e){var t=s(e.substring(1,e.length-1))
var n=[]
if(t!==""){var r=t.split(",")
for(var i=0;i<r.length;++i){var a=/\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(r[i])
n.push(new V(a[1]))}}return new U(n)}function j(e){var t=e
t=t.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g,function(e,t,n){return n})
t=t.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g,function(e,t,n){return E(e,"F")})
t=t.replace(W,function(e){return E(e,"H")})
t=t.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,function(e,t,n){var r=n.replace(/"C(\d+)"/g,function(e,t){return v[t]}).replace(/\[\s*\]/g,"[null]").replace(/\s*\]\s*\[\s*/g,", ")
var i="{"+r.substring(1,r.length-1)+"}"
var a="('"+t+"', "+E(i,"A")+")"
return"$p.createJavaArray"+E(a,"B")})
t=t.replace(/(\.\s*length)\s*"B\d+"/g,"$1")
t=t.replace(/#([0-9A-Fa-f]{6})\b/g,function(e,t){return"0xFF"+t})
t=t.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g,function(e,t,n){var r=v[t]
if(!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(r)){return e}if(/^\(\s*int\s*\)$/.test(r)){return"(int)"+n}var i=r.split(/"C(\d+)"/g)
if(i.length>1){if(!/^\[\s*\]$/.test(v[i[1]])){return e}}return""+n})
t=t.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g,function(e,t){var n=a(t)
return n.untrim("__int_cast("+n.middle+")")})
t=t.replace(/\bsuper(\s*"B\d+")/g,"$$superCstr$1").replace(/\bsuper(\s*\.)/g,"$$super$1")
t=t.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/,function(e,t,n){if(t===n){return e}return n===""?"0"+t:t})
t=t.replace(/\b(\.?\d+\.?)[fF]\b/g,"$1")
t=t.replace(/([^\s])%([^=\s])/g,"$1 % $2")
t=t.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g,"__$1")
t=t.replace(/\b(boolean|byte|char|float|int)\s*"B/g,function(e,t){return"parse"+t.substring(0,1).toUpperCase()+t.substring(1)+'"B'})
t=t.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g,function(e,t,n,r,i,a){if(n){var s=v[r]
if(i){return"pixels.setPixel"+E("("+s.substring(1,s.length-1)+","+a+")","B")}return"pixels.getPixel"+E("("+s.substring(1,s.length-1)+")","B")}if(t){return"pixels.getLength"+E("()","B")}if(i){return"pixels.set"+E("("+a+")","B")}return"pixels.toArray"+E("()","B")})
var n
function r(e,t,r,i){var s=v[i]
n=true
var o=a(s.substring(1,s.length-1))
return"__"+r+(o.middle===""?E("("+t.replace(/\.\s*$/,"")+")","B"):E("("+t.replace(/\.\s*$/,"")+","+o.middle+")","B"))}do{n=false
t=t.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt)\s*"B(\d+)"/g,r)}while(n)
function i(e,t,r){n=true
return"__instanceof"+E("("+t+", "+r+")","B")}do{n=false
t=t.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g,i)}while(n)
t=t.replace(/\bthis(\s*"B\d+")/g,"$$constr$1")
return t}function H(e,t){this.baseInterfaceName=e
this.body=t
t.owner=this}H.prototype.toString=function(){return"new ("+this.body+")"}
function q(e){var t=new RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/).exec(e)
var n=k,r=S()
k=r
var i=t[1]+"$"+r
var a=new H(i,_(v[t[2]],i,"","implements "+t[1]))
A(a,r,n)
k=n
return a}function K(e,t,n){this.name=e
this.params=t
this.body=n}K.prototype.toString=function(){var e=y
var t=o({"this":null},this.params.getNames())
y=function(n){return t.hasOwnProperty(n.name)?n.name:e(n)}
var n="function"
if(this.name){n+=" "+this.name}n+=this.params+" "+this.body
y=e
return n}
function X(e){var t=new RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/).exec(e)
return new K(t[1]!=="function"?t[1]:null,z(v[t[2]]),T(v[t[3]]))}function Y(e){this.members=e}Y.prototype.toString=function(){var e=y
y=function(t){return t.name==="this"?"this":e(t)}
var t=""
for(var n=0,r=this.members.length;n<r;++n){if(this.members[n].label){t+=this.members[n].label+": "}t+=this.members[n].value.toString()+", "}y=e
return t.substring(0,t.length-2)}
function Z(e){var t=e.split(",")
for(var n=0;n<t.length;++n){var r=t[n].indexOf(":")
if(r<0){t[n]={value:R(t[n])}}else{t[n]={label:s(t[n].substring(0,r)),value:R(s(t[n].substring(r+1)))}}}return new Y(t)}function J(e){if(e.charAt(0)==="("||e.charAt(0)==="["){return e.charAt(0)+J(e.substring(1,e.length-1))+e.charAt(e.length-1)}if(e.charAt(0)==="{"){if(/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(e)){return"{"+E(e.substring(1,e.length-1),"I")+"}"}return"["+J(e.substring(1,e.length-1))+"]"}var t=a(e)
var n=j(t.middle)
n=n.replace(/"[ABC](\d+)"/g,function(e,t){return J(v[t])})
return t.untrim(n)}function Q(e){return e.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g,function(e,t,n,i,a,s){if(t){return e}var o={name:n,member:a,callSign:!!s}
return y(o)+(i===r?"":i)})}function et(e,t){this.expr=e
this.transforms=t}et.prototype.toString=function(){var e=this.transforms
var t=Q(this.expr)
return t.replace(/"!(\d+)"/g,function(t,n){return e[n].toString()})}
R=function(e){var t=[]
var n=J(e)
n=n.replace(/"H(\d+)"/g,function(e,n){t.push(X(v[n]))
return'"!'+(t.length-1)+'"'})
n=n.replace(/"F(\d+)"/g,function(e,n){t.push(q(v[n]))
return'"!'+(t.length-1)+'"'})
n=n.replace(/"I(\d+)"/g,function(e,n){t.push(Z(v[n]))
return'"!'+(t.length-1)+'"'})
return new et(n,t)}
function tt(e,t,n){this.name=e
this.value=t
this.isDefault=n}tt.prototype.toString=function(){return this.name+" = "+this.value}
function nt(e,t){var n=e.indexOf("=")
var r,i,a
if(n<0){r=e
i=t
a=true}else{r=e.substring(0,n)
i=R(e.substring(n+1))
a=false}return new tt(s(r.replace(/(\s*"C\d+")+/g,"")),i,a)}function rt(e){if(e==="int"||e==="float"){return"0"}if(e==="boolean"){return"false"}if(e==="color"){return"0x00000000"}return"null"}function it(e,t){this.definitions=e
this.varType=t}it.prototype.getNames=function(){var e=[]
for(var t=0,n=this.definitions.length;t<n;++t){e.push(this.definitions[t].name)}return e}
it.prototype.toString=function(){return"var "+this.definitions.join(",")}
function at(e){this.expression=e}at.prototype.toString=function(){return this.expression.toString()}
function st(e){if(N.test(e)){var t=F.exec(e)
var n=e.substring(t[0].length).split(",")
var r=rt(t[2])
for(var i=0;i<n.length;++i){n[i]=nt(n[i],r)}return new it(n,t[2])}return new at(R(e))}function ot(e,t,n){this.initStatement=e
this.condition=t
this.step=n}ot.prototype.toString=function(){return"("+this.initStatement+"; "+this.condition+"; "+this.step+")"}
function lt(e,t){this.initStatement=e
this.container=t}lt.prototype.toString=function(){var e=this.initStatement.toString()
if(e.indexOf("=")>=0){e=e.substring(0,e.indexOf("="))}return"("+e+" in "+this.container+")"}
function ut(e,t){this.initStatement=e
this.container=t}ut.iteratorId=0
ut.prototype.toString=function(){var e=this.initStatement.toString()
var t="$it"+ut.iteratorId++
var n=e.replace(/^\s*var\s*/,"").split("=")[0]
var r="var "+t+" = new $p.ObjectIterator("+this.container+"), "+n+" = void(0)"
var i=t+".hasNext() && (("+n+" = "+t+".next()) || true)"
return"("+r+"; "+i+";)"}
function ft(e){var t
if(/\bin\b/.test(e)){t=e.substring(1,e.length-1).split(/\bin\b/g)
return new lt(st(s(t[0])),R(t[1]))}if(e.indexOf(":")>=0&&e.indexOf(";")<0){t=e.substring(1,e.length-1).split(":")
return new ut(st(s(t[0])),R(t[1]))}t=e.substring(1,e.length-1).split(";")
return new ot(st(s(t[0])),R(t[1]),R(t[2]))}function ct(e){e.sort(function(e,t){return t.weight-e.weight})}function ht(e,t,n){this.name=e
this.body=t
this.isStatic=n
t.owner=this}ht.prototype.toString=function(){return""+this.body}
function pt(e,t,n){this.name=e
this.body=t
this.isStatic=n
t.owner=this}pt.prototype.toString=function(){return""+this.body}
function mt(e){var t=O.exec(e)
O.lastIndex=0
var n=t[1].indexOf("static")>=0
var r=v[u(t[6])],i
var a=k,s=S()
k=s
if(t[2]==="interface"){i=new ht(t[3],C(r,t[3],t[4]),n)}else{i=new pt(t[3],_(r,t[3],t[4],t[5]),n)}A(i,s,a)
k=a
return i}function dt(e,t,n,r){this.name=e
this.params=t
this.body=n
this.isStatic=r}dt.prototype.toString=function(){var e=o({},this.params.getNames())
var t=y
y=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)}
var n="function "+this.methodId+this.params+" "+this.body+"\n"
y=t
return n}
function gt(e){var t=M.exec(e)
M.lastIndex=0
var n=t[1].indexOf("static")>=0
var r=t[6]!==";"?v[u(t[6])]:"{}"
return new dt(t[3],z(v[u(t[4])]),T(r),n)}function vt(e,t,n){this.definitions=e
this.fieldType=t
this.isStatic=n}vt.prototype.getNames=function(){var e=[]
for(var t=0,n=this.definitions.length;t<n;++t){e.push(this.definitions[t].name)}return e}
vt.prototype.toString=function(){var e=y({name:"[this]"})
if(this.isStatic){var t=this.owner.name
var n=[]
for(var r=0,i=this.definitions.length;r<i;++r){var a=this.definitions[r]
var s=a.name,o=t+"."+s
var l="if("+o+" === void(0)) {\n"+" "+o+" = "+a.value+"; }\n"+"$p.defineProperty("+e+", "+"'"+s+"', { get: function(){return "+o+";}, "+"set: function(val){"+o+" = val;} });\n"
n.push(l)}return n.join("")}return e+"."+this.definitions.join("; "+e+".")}
function yt(e){var t=F.exec(e)
var n=t[1].indexOf("static")>=0
var r=e.substring(t[0].length).split(/,\s*/g)
var i=rt(t[2])
for(var a=0;a<r.length;++a){r[a]=nt(r[a],i)}return new vt(r,t[2],n)}function bt(e,t){this.params=e
this.body=t}bt.prototype.toString=function(){var e=o({},this.params.getNames())
var t=y
y=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)}
var n="function $constr_"+this.params.params.length+this.params.toString()
var r=this.body.toString()
if(!/\$(superCstr|constr)\b/.test(r)){r="{\n$superCstr();\n"+r.substring(1)}y=t
return n+r+"\n"}
function xt(e){var t=new RegExp(/"B(\d+)"\s*"A(\d+)"/).exec(e)
var n=z(v[t[1]])
return new bt(n,T(v[t[2]]))}function kt(e,t,n,r,i,a){var s,o
this.name=e
this.interfacesNames=t
this.methodsNames=n
this.fields=r
this.innerClasses=i
this.misc=a
for(s=0,o=r.length;s<o;++s){r[s].owner=this}}kt.prototype.getMembers=function(e,t,n){if(this.owner.base){this.owner.base.body.getMembers(e,t,n)}var r,i,a,s
for(r=0,a=this.fields.length;r<a;++r){var o=this.fields[r].getNames()
for(i=0,s=o.length;i<s;++i){e[o[i]]=this.fields[r]}}for(r=0,a=this.methodsNames.length;r<a;++r){var l=this.methodsNames[r]
t[l]=true}for(r=0,a=this.innerClasses.length;r<a;++r){var u=this.innerClasses[r]
n[u.name]=u}}
kt.prototype.toString=function(){function e(e){var t=0
while(e){++t
e=e.scope}return t}var t=e(this.owner)
var n=this.name
var r=""
var i=""
var a={},s={},o={}
this.getMembers(a,s,o)
var l,u,f,c
if(this.owner.interfaces){var h=[],p
for(l=0,u=this.interfacesNames.length;l<u;++l){if(!this.owner.interfaces[l]){continue}p=y({name:this.interfacesNames[l]})
h.push(p)
r+="$p.extendInterfaceMembers("+n+", "+p+");\n"}i+=n+".$interfaces = ["+h.join(", ")+"];\n"}i+=n+".$isInterface = true;\n"
i+=n+".$methods = ['"+this.methodsNames.join("', '")+"'];\n"
ct(this.innerClasses)
for(l=0,u=this.innerClasses.length;l<u;++l){var m=this.innerClasses[l]
if(m.isStatic){r+=n+"."+m.name+" = "+m+";\n"}}for(l=0,u=this.fields.length;l<u;++l){var d=this.fields[l]
if(d.isStatic){r+=n+"."+d.definitions.join(";\n"+n+".")+";\n"}}return"(function() {\n"+"function "+n+"() { throw 'Unable to create the interface'; }\n"+r+i+"return "+n+";\n"+"})()"}
C=function(e,t,n){var i=e.substring(1,e.length-1)
i=B(i)
i=G(i,t)
var s=[],o=[]
i=i.replace(/"([DE])(\d+)"/g,function(e,t,n){if(t==="D"){s.push(n)}else if(t==="E"){o.push(n)}return""})
var l=i.split(/;(?:\s*;)*/g)
var u
var f,c
if(n!==r){u=n.replace(/^\s*extends\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g)}for(f=0,c=s.length;f<c;++f){var h=gt(v[s[f]])
s[f]=h.name}for(f=0,c=l.length-1;f<c;++f){var p=a(l[f])
l[f]=yt(p.middle)}var m=l.pop()
for(f=0,c=o.length;f<c;++f){o[f]=mt(v[o[f]])}return new kt(t,u,s,l,o,{tail:m})}
function wt(e,t,n,r,i,a,s,o,l){var u,f
this.name=e
this.baseClassName=t
this.interfacesNames=n
this.functions=r
this.methods=i
this.fields=a
this.cstrs=s
this.innerClasses=o
this.misc=l
for(u=0,f=a.length;u<f;++u){a[u].owner=this}}wt.prototype.getMembers=function(e,t,n){if(this.owner.base){this.owner.base.body.getMembers(e,t,n)}var r,i,a,s
for(r=0,a=this.fields.length;r<a;++r){var o=this.fields[r].getNames()
for(i=0,s=o.length;i<s;++i){e[o[i]]=this.fields[r]}}for(r=0,a=this.methods.length;r<a;++r){var l=this.methods[r]
t[l.name]=l}for(r=0,a=this.innerClasses.length;r<a;++r){var u=this.innerClasses[r]
n[u.name]=u}}
wt.prototype.toString=function(){function e(e){var t=0
while(e){++t
e=e.scope}return t}var t=e(this.owner)
var n="$this_"+t
var r=this.name
var i="var "+n+" = this;\n"
var a=""
var o=""
var l={},u={},f={}
this.getMembers(l,u,f)
var c=y
y=function(e){var t=e.name
if(t==="this"){return e.callSign||!e.member?n+".$self":n}if(l.hasOwnProperty(t)){return l[t].isStatic?r+"."+t:n+"."+t}if(f.hasOwnProperty(t)){return n+"."+t}if(u.hasOwnProperty(t)){return u[t].isStatic?r+"."+t:n+".$self."+t}return c(e)}
var h
if(this.baseClassName){h=c({name:this.baseClassName})
i+="var $super = { $upcast: "+n+" };\n"
i+="function $superCstr(){"+h+".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n"
o+=r+".$base = "+h+";\n"}else{i+="function $superCstr(){$p.extendClassChain("+n+")}\n"}if(this.owner.base){a+="$p.extendStaticMembers("+r+", "+h+");\n"}var p,m,d,g
if(this.owner.interfaces){var v=[],b
for(p=0,m=this.interfacesNames.length;p<m;++p){if(!this.owner.interfaces[p]){continue}b=c({name:this.interfacesNames[p]})
v.push(b)
a+="$p.extendInterfaceMembers("+r+", "+b+");\n"}o+=r+".$interfaces = ["+v.join(", ")+"];\n"}if(this.functions.length>0){i+=this.functions.join("\n")+"\n"}ct(this.innerClasses)
for(p=0,m=this.innerClasses.length;p<m;++p){var x=this.innerClasses[p]
if(x.isStatic){a+=r+"."+x.name+" = "+x+";\n"
i+=n+"."+x.name+" = "+r+"."+x.name+";\n"}else{i+=n+"."+x.name+" = "+x+";\n"}}for(p=0,m=this.fields.length;p<m;++p){var k=this.fields[p]
if(k.isStatic){a+=r+"."+k.definitions.join(";\n"+r+".")+";\n"
for(d=0,g=k.definitions.length;d<g;++d){var w=k.definitions[d].name,E=r+"."+w
i+="$p.defineProperty("+n+", '"+w+"', {"+"get: function(){return "+E+"}, "+"set: function(val){"+E+" = val}});\n"}}else{i+=n+"."+k.definitions.join(";\n"+n+".")+";\n"}}var S={}
for(p=0,m=this.methods.length;p<m;++p){var A=this.methods[p]
var _=S[A.name]
var C=A.name+"$"+A.params.params.length
if(_){++_
C+="_"+_}else{_=1}A.methodId=C
S[A.name]=_
if(A.isStatic){a+=A
a+="$p.addMethod("+r+", '"+A.name+"', "+C+");\n"
i+="$p.addMethod("+n+", '"+A.name+"', "+C+");\n"}else{i+=A
i+="$p.addMethod("+n+", '"+A.name+"', "+C+");\n"}}i+=s(this.misc.tail)
if(this.cstrs.length>0){i+=this.cstrs.join("\n")+"\n"}i+="function $constr() {\n"
var T=[]
for(p=0,m=this.cstrs.length;p<m;++p){var I=this.cstrs[p].params.params.length
T.push("if(arguments.length === "+I+") { "+"$constr_"+I+".apply("+n+", arguments); }")}if(T.length>0){i+=T.join(" else ")+" else "}i+="$superCstr();\n}\n"
i+="$constr.apply(null, arguments);\n"
y=c
return"(function() {\n"+"function "+r+"() {\n"+i+"}\n"+a+o+"return "+r+";\n"+"})()"}
_=function(e,t,n,i){var s=e.substring(1,e.length-1)
s=B(s)
s=G(s,t)
var o=[],l=[],u=[],f=[]
s=s.replace(/"([DEGH])(\d+)"/g,function(e,t,n){if(t==="D"){o.push(n)}else if(t==="E"){l.push(n)}else if(t==="H"){f.push(n)}else{u.push(n)}return""})
var c=s.replace(/^(?:\s*;)+/,"").split(/;(?:\s*;)*/g)
var h,p
var m
if(n!==r){h=n.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g,"$1")}if(i!==r){p=i.replace(/^\s*implements\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g)}for(m=0;m<f.length;++m){f[m]=X(v[f[m]])}for(m=0;m<o.length;++m){o[m]=gt(v[o[m]])}for(m=0;m<c.length-1;++m){var d=a(c[m])
c[m]=yt(d.middle)}var g=c.pop()
for(m=0;m<u.length;++m){u[m]=xt(v[u[m]])}for(m=0;m<l.length;++m){l[m]=mt(v[l[m]])}return new wt(t,h,p,f,o,c,u,l,{tail:g})}
function Et(e,t){this.name=e
this.body=t
t.owner=this}Et.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n"+"$p."+this.name+" = "+this.name+";\n"}
function St(e,t){this.name=e
this.body=t
t.owner=this}St.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n"+"$p."+this.name+" = "+this.name+";\n"}
function At(e){var t=O.exec(e)
O.lastIndex=0
var n=v[u(t[6])]
var r=k,i=S()
k=i
var a
if(t[2]==="interface"){a=new Et(t[3],C(n,t[3],t[4]))}else{a=new St(t[3],_(n,t[3],t[4],t[5]))}A(a,i,r)
k=r
return a}function _t(e,t,n){this.name=e
this.params=t
this.body=n}_t.prototype.toString=function(){var e=o({},this.params.getNames())
var t=y
y=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)}
var n="function "+this.name+this.params+" "+this.body+"\n"+"$p."+this.name+" = "+this.name+";"
y=t
return n}
function Ct(e){var t=M.exec(e)
var n=M.lastIndex=0
return new _t(t[3],z(v[u(t[4])]),T(v[u(t[6])]))}function Tt(e){var t=e
t=t.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g,"$1")
return t}function It(e,t){this.argument=e
this.misc=t}It.prototype.toString=function(){return this.misc.prefix+this.argument.toString()}
function Pt(e,t){this.argument=e
this.misc=t}Pt.prototype.toString=function(){return this.misc.prefix+this.argument.toString()}
function Lt(e,t,n){this.name=e
this.argument=t
this.misc=n}Lt.prototype.toString=function(){var e=this.misc.prefix
if(this.argument!==r){e+=this.argument.toString()}return e}
function Rt(e){this.expr=e}Rt.prototype.toString=function(){return"case "+this.expr+":"}
function Ot(e){this.label=e}Ot.prototype.toString=function(){return this.label}
I=function(e,t,n){var i=new RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g)
var o=[]
e=Tt(e)
var l=0,u,f
while((u=i.exec(e))!==null){if(u[1]!==r){var c=e.lastIndexOf('"B',i.lastIndex)
var h=e.substring(l,c)
if(u[1]==="for"){o.push(new It(ft(v[u[2]]),{prefix:h}))}else if(u[1]==="catch"){o.push(new Pt(z(v[u[2]]),{prefix:h}))}else{o.push(new Lt(u[1],R(v[u[2]]),{prefix:h}))}}else if(u[3]!==r){o.push(new Lt(u[3],r,{prefix:e.substring(l,i.lastIndex)}))}else if(u[4]!==r){f=e.substring(l,i.lastIndex-u[4].length)
if(s(f).length!==0){continue}o.push(f)
var p=u[4].charAt(1),m=u[5]
if(p==="D"){o.push(t(v[m]))}else if(p==="E"){o.push(n(v[m]))}else if(p==="H"){o.push(X(v[m]))}else{o.push(T(v[m]))}}else if(u[6]!==r){o.push(new Rt(R(s(u[7]))))}else if(u[8]!==r){f=e.substring(l,i.lastIndex-u[8].length)
if(s(f).length!==0){continue}o.push(new Ot(e.substring(l,i.lastIndex)))}else{var d=a(e.substring(l,i.lastIndex-1))
o.push(d.left)
o.push(st(d.middle))
o.push(d.right+";")}l=i.lastIndex}var g=a(e.substring(l))
o.push(g.left)
if(g.middle!==""){o.push(st(g.middle))
o.push(";"+g.right)}return o}
function Mt(e){var t=[]
for(var n=0,r=e.length;n<r;++n){var i=e[n]
if(i instanceof it){t=t.concat(i.getNames())}else if(i instanceof It&&i.argument.initStatement instanceof it){t=t.concat(i.argument.initStatement.getNames())}else if(i instanceof ht||i instanceof pt||i instanceof Et||i instanceof St||i instanceof _t||i instanceof K){t.push(i.name)}}return o({},t)}function Nt(e){this.statements=e}Nt.prototype.toString=function(){var e=Mt(this.statements)
var t=y
if(!l(e)){y=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)}}var n="{\n"+this.statements.join("")+"\n}"
y=t
return n}
T=function(e){var t=a(e.substring(1,e.length-1))
return new Nt(I(t.middle))}
function Dt(e){this.statements=e}Dt.prototype.toString=function(){var e=[],n=[],r
for(var i=0,a=this.statements.length;i<a;++i){r=this.statements[i]
if(r instanceof St||r instanceof Et){e.push(r)}else{n.push(r)}}ct(e)
var s=Mt(this.statements)
y=function(e){var n=e.name
if(s.hasOwnProperty(n)){return n}if(t.hasOwnProperty(n)||p.hasOwnProperty(n)||x.hasOwnProperty(n)){return"$p."+n}return n}
var o="// this code was autogenerated from PJS\n"+"(function($p) {\n"+e.join("")+"\n"+n.join("")+"\n})"
y=null
return o}
P=function(){var e=B(v[0])
e=e.replace(/\bimport\s+[^;]+;/g,"")
return new Dt(I(e,Ct,At))}
function Ft(e){var t={}
var n,i
for(n in b){if(b.hasOwnProperty(n)){i=b[n]
var a=i.scopeId,s=i.name
if(a){var o=b[a]
i.scope=o
if(o.inScope===r){o.inScope={}}o.inScope[s]=i}else{t[s]=i}}}function l(e,n){var i=n.split(".")
var a=e.scope,s
while(a){if(a.hasOwnProperty(i[0])){s=a[i[0]]
break}a=a.scope}if(s===r){s=t[i[0]]}for(var o=1,l=i.length;o<l&&s;++o){s=s.inScope[i[o]]}return s}for(n in b){if(b.hasOwnProperty(n)){i=b[n]
var u=i.body.baseClassName
if(u){var f=l(i,u)
if(f){i.base=f
if(!f.derived){f.derived=[]}f.derived.push(i)}}var c=i.body.interfacesNames,h=[],p,m
if(c&&c.length>0){for(p=0,m=c.length;p<m;++p){var d=l(i,c[p])
h.push(d)
if(!d){continue}if(!d.derived){d.derived=[]}d.derived.push(i)}if(h.length>0){i.interfaces=h}}}}}function Wt(e){var t=[],n={}
var r,i,a
for(r in b){if(b.hasOwnProperty(r)){a=b[r]
if(!a.inScope&&!a.derived){t.push(r)
a.weight=0}else{var s=[]
if(a.inScope){for(i in a.inScope){if(a.inScope.hasOwnProperty(i)){s.push(a.inScope[i])}}}if(a.derived){s=s.concat(a.derived)}n[r]=s}}}function o(e,t){var r=n[e]
if(!r){return false}var i=r.indexOf(t)
if(i<0){return false}r.splice(i,1)
if(r.length>0){return false}delete n[e]
return true}while(t.length>0){r=t.shift()
a=b[r]
if(a.scopeId&&o(a.scopeId,a)){t.push(a.scopeId)
b[a.scopeId].weight=a.weight+1}if(a.base&&o(a.base.classId,a)){t.push(a.base.classId)
a.base.weight=a.weight+1}if(a.interfaces){var l,u
for(l=0,u=a.interfaces.length;l<u;++l){if(!a.interfaces[l]||!o(a.interfaces[l].classId,a)){continue}t.push(a.interfaces[l].classId)
a.interfaces[l].weight=a.weight+1}}}}var Bt=P()
Ft(Bt)
Wt(Bt)
var Gt=Bt.toString()
Gt=Gt.replace(/\s*\n(?:[\t ]*\n)+/g,"\n\n")
return i(Gt,c)}function O(e,t){var n=new RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g).exec(e)
if(n&&n.length===2){var r=[],i=n.splice(1,2)[0].replace(/\{([\s\S]*?)\}/g,function(){return function(e,t){r.push(t)
return"{"+(r.length-1)+"}"}}()).replace("\n","").replace("\r","").split(";")
var a=function(e){return e.replace(/^\s*["']?/,"").replace(/["']?\s*$/,"")}
for(var s=0,o=i.length;s<o;s++){var l=i[s].split("=")
if(l&&l.length===2){var u=a(l[0]),f=a(l[1]),c=[]
if(u==="preload"){c=f.split(",")
for(var h=0,p=c.length;h<p;h++){var m=a(c[h])
t.imageCache.add(m)}}else if(u==="font"){c=f.split(",")
for(var d=0,g=c.length;d<g;d++){var v=a(c[d]),y=/^\{(\d*?)\}$/.exec(v)
I.preloading.add(y?JSON.parse("{"+r[y[1]]+"}"):v)}}else if(u==="pauseOnBlur"){t.options.pauseOnBlur=f==="true"}else if(u==="globalKeyEvents"){t.options.globalKeyEvents=f==="true"}else if(u.substring(0,6)==="param-"){t.params[u.substring(6)]=f}else{t.options[u]=f}}}}return e}P.compile=function(e){var t=new P.Sketch
var n=O(e,t)
var r=R(n)
t.sourceCode=r
return t}
var M=function(){"use strict"
var e={},n="undefined",r="function",i=!1,a=!0,s=512,o="log"
if(typeof tinylog!==n&&typeof tinylog[o]===r){e[o]=tinylog[o]}else if(typeof t!==n&&!t.fake){(function(){var n=t,r="div",l="style",u="title",f={zIndex:1e4,position:"fixed",bottom:"0px",width:"100%",height:"15%",fontFamily:"sans-serif",color:"#ccc",backgroundColor:"black",paddingBottom:"5px"},c={position:"relative",fontFamily:"monospace",overflow:"auto",height:"100%",paddingTop:"5px"},h={height:"5px",marginTop:"-5px",cursor:"n-resize",backgroundColor:"darkgrey"},p={position:"absolute",top:"5px",right:"20px",color:"#111",MozBorderRadius:"4px",webkitBorderRadius:"4px",borderRadius:"4px",cursor:"pointer",fontWeight:"normal",textAlign:"center",padding:"3px 5px",backgroundColor:"#333",fontSize:"12px"},m={minHeight:"16px"},d={fontSize:"12px",margin:"0 8px 0 8px",maxWidth:"100%",whiteSpace:"pre-wrap",overflow:"auto"},g=n.defaultView,v=n.body||n.documentElement,y=v[l],b=function(){var e=arguments.length,t,n,r
while(e--){n=arguments[e--]
t=arguments[e][l]
for(r in n){if(n.hasOwnProperty(r)){t[r]=n[r]}}}},x=function(e,t,n){if(e.addEventListener){e.addEventListener(t,n,i)}else if(e.attachEvent){e.attachEvent("on"+t,n)}return[e,t,n]},k=function(e,t,n){if(e.removeEventListener){e.removeEventListener(t,n,i)}else if(e.detachEvent){e.detachEvent("on"+t,n)}},w=function(e){var t=e.childNodes,n=t.length
while(n--){e.removeChild(t.item(0))}},E=function(e,t){return e.appendChild(t)},S=function(e){return n.createElement(e)},A=function(e){return n.createTextNode(e)},_=e[o]=function(t){var C,T=y.paddingBottom,I=S(r),P=I[l],L=E(I,S(r)),R=E(I,S(r)),O=E(I,S(r)),M=i,N=i,D=i,F=0,W=function(){y.paddingBottom=I.clientHeight+"px"},B=function(e){var t=g.innerHeight,n=L.clientHeight
if(e<0){e=0}else if(e+n>t){e=t-n}P.height=e/t*100+"%"
W()},G=[x(n,"mousemove",function(e){if(M){B(g.innerHeight-e.clientY)
R.scrollTop=D}}),x(n,"mouseup",function(){if(M){M=D=i}}),x(L,"dblclick",function(e){e.preventDefault()
if(N){B(N)
N=i}else{N=I.clientHeight
P.height="0px"}}),x(L,"mousedown",function(e){e.preventDefault()
M=a
D=R.scrollTop}),x(L,"contextmenu",function(){M=i}),x(O,"click",function(){C()})]
C=function(){var t=G.length
while(t--){k.apply(e,G[t])}v.removeChild(I)
y.paddingBottom=T
w(R)
w(I)
e[o]=_}
b(I,f,R,c,L,h,O,p)
O[u]="Close Log"
E(O,A("✖"))
L[u]="Double-click to toggle log minimization"
v.insertBefore(I,v.firstChild)
e[o]=function(e){if(F===s){R.removeChild(R.firstChild)}else{F++}var t=E(R,S(r)),n=E(t,S(r))
t[u]=(new Date).toLocaleTimeString()
b(t,m,n,d)
E(n,A(e))
R.scrollTop=R.scrollHeight}
e.clear=function(){F=0
w(R)}
e[o](t)
W()}})()}else if(typeof print===r){e[o]=print}return e}()
P.logger=M
P.version="@VERSION@"
P.lib={}
P.registerLibrary=function(e,t){P.lib[e]=t
if(t.hasOwnProperty("init")){t.init(x)}}
P.instances=E
P.getInstanceById=function(e){return E[S[e]]}
P.Sketch=function(n){this.attachFunction=n
this.options={pauseOnBlur:false,globalKeyEvents:false}
this.onLoad=i
this.onSetup=i
this.onPause=i
this.onLoop=i
this.onFrameStart=i
this.onFrameEnd=i
this.onExit=i
this.params={}
this.imageCache={pending:0,images:{},operaCache:{},add:function(n,r){if(this.images[n]){return}if(!o){this.images[n]=null}if(!r){r=new Image
r.onload=function(e){return function(){e.pending--}}(this)
this.pending++
r.src=n}this.images[n]=r
if(e.opera){var i=t.createElement("div")
i.appendChild(r)
i.style.position="absolute"
i.style.opacity=0
i.style.width="1px"
i.style.height="1px"
if(!this.operaCache[n]){t.body.appendChild(i)
this.operaCache[n]=i}}}}
this.sourceCode=undefined
this.attach=function(e){if(typeof this.attachFunction==="function"){this.attachFunction(e)}else if(this.sourceCode){var t=new Function("return ("+this.sourceCode+");")()
t(e)
this.attachFunction=t}else{throw"Unable to attach sketch to the processing instance"}}
this.toString=function(){var e
var t="((function(Sketch) {\n"
t+="var sketch = new Sketch(\n"+this.sourceCode+");\n"
for(e in this.options){if(this.options.hasOwnProperty(e)){var n=this.options[e]
t+="sketch.options."+e+" = "+(typeof n==="string"?'"'+n+'"':""+n)+";\n"}}for(e in this.imageCache){if(this.options.hasOwnProperty(e)){t+='sketch.imageCache.add("'+e+'");\n'}}t+="return sketch;\n})(Processing.Sketch))"
return t}}
var N=function(n,r){var i=[],a=[],s=r.length,o=0
function l(t,n){var r=new XMLHttpRequest
r.onreadystatechange=function(){if(r.readyState===4){var t
if(r.status!==200&&r.status!==0){t="Invalid XHR status "+r.status}else if(r.responseText===""){if("withCredentials"in new XMLHttpRequest&&(new XMLHttpRequest).withCredentials===false&&e.location.protocol==="file:"){t="XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions."}else{t="File is empty."}}n(r.responseText,t)}}
r.open("GET",t,true)
if(r.overrideMimeType){r.overrideMimeType("application/json")}r.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT")
r.send(null)}function u(e,r){function u(t,l){i[e]=t;++o
if(l){a.push(r+" ==> "+l)}if(o===s){if(a.length===0){try{return new P(n,i.join("\n"))}catch(u){throw"Processing.js: Unable to execute pjs sketch: "+u}}else{throw"Processing.js: Unable to load pjs sketch files: "+a.join("\n")}}}if(r.charAt(0)==="#"){var f=t.getElementById(r.substring(1))
if(f){u(f.text||f.textContent)}else{u("","Unable to load pjs sketch: element with id '"+r.substring(1)+"' was not found")}return}l(r,u)}for(var f=0;f<s;++f){u(f,r[f])}}
var D=function(){t.removeEventListener("DOMContentLoaded",D,false)
var e=t.getElementsByTagName("canvas"),n
for(var i=0,a=e.length;i<a;i++){var s=e[i].getAttribute("data-processing-sources")
if(s===null){s=e[i].getAttribute("data-src")
if(s===null){s=e[i].getAttribute("datasrc")}}if(s){n=s.split(" ")
for(var o=0;o<n.length;){if(n[o]){o++}else{n.splice(o,1)}}N(e[i],n)}}var l=t.getElementsByTagName("script")
var u,f,c
for(u=0;u<l.length;u++){var h=l[u]
if(!h.getAttribute){continue}var p=h.getAttribute("type")
if(p&&(p.toLowerCase()==="text/processing"||p.toLowerCase()==="application/processing")){var m=h.getAttribute("data-processing-target")
e=r
if(m){e=t.getElementById(m)}else{var d=h.nextSibling
while(d&&d.nodeType!==1){d=d.nextSibling}if(d.nodeName.toLowerCase()==="canvas"){e=d}}if(e){if(h.getAttribute("src")){n=h.getAttribute("src").split(/\s+/)
N(e,n)
continue}f=h.textContent||h.text
c=new P(e,f)}}}}
P.loadSketchFromSources=N
P.disableInit=function(){if(o){t.removeEventListener("DOMContentLoaded",D,false)}}
if(o){e["Processing"]=P
t.addEventListener("DOMContentLoaded",D,false)}else{this.Processing=P}})(window,window.document,Math)
var JSHINT
if(typeof window==="undefined")window={};(function(){var e
e=function t(n,r,i){function a(o,l){if(!r[o]){if(!n[o]){var u=typeof e=="function"&&e
if(!l&&u)return u(o,!0)
if(s)return s(o,!0)
throw new Error("Cannot find module '"+o+"'")}var f=r[o]={exports:{}}
n[o][0].call(f.exports,function(e){var t=n[o][1][e]
return a(t?t:e)},f,f.exports,t,n,r,i)}return r[o].exports}var s=typeof e=="function"&&e
for(var o=0;o<i.length;o++)a(i[o])
return a}({1:[function(e,t,n){var r=[]
for(var i=0;i<128;i++){r[i]=i===36||i>=65&&i<=90||i===95||i>=97&&i<=122}var a=[]
for(var i=0;i<128;i++){a[i]=r[i]||i>=48&&i<=57}t.exports={asciiIdentifierStartTable:r,asciiIdentifierPartTable:a}},{}],2:[function(e,t,n){t.exports=[768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,1155,1156,1157,1158,1159,1425,1426,1427,1428,1429,1430,1431,1432,1433,1434,1435,1436,1437,1438,1439,1440,1441,1442,1443,1444,1445,1446,1447,1448,1449,1450,1451,1452,1453,1454,1455,1456,1457,1458,1459,1460,1461,1462,1463,1464,1465,1466,1467,1468,1469,1471,1473,1474,1476,1477,1479,1552,1553,1554,1555,1556,1557,1558,1559,1560,1561,1562,1611,1612,1613,1614,1615,1616,1617,1618,1619,1620,1621,1622,1623,1624,1625,1626,1627,1628,1629,1630,1631,1632,1633,1634,1635,1636,1637,1638,1639,1640,1641,1648,1750,1751,1752,1753,1754,1755,1756,1759,1760,1761,1762,1763,1764,1767,1768,1770,1771,1772,1773,1776,1777,1778,1779,1780,1781,1782,1783,1784,1785,1809,1840,1841,1842,1843,1844,1845,1846,1847,1848,1849,1850,1851,1852,1853,1854,1855,1856,1857,1858,1859,1860,1861,1862,1863,1864,1865,1866,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,2027,2028,2029,2030,2031,2032,2033,2034,2035,2070,2071,2072,2073,2075,2076,2077,2078,2079,2080,2081,2082,2083,2085,2086,2087,2089,2090,2091,2092,2093,2137,2138,2139,2276,2277,2278,2279,2280,2281,2282,2283,2284,2285,2286,2287,2288,2289,2290,2291,2292,2293,2294,2295,2296,2297,2298,2299,2300,2301,2302,2304,2305,2306,2307,2362,2363,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2385,2386,2387,2388,2389,2390,2391,2402,2403,2406,2407,2408,2409,2410,2411,2412,2413,2414,2415,2433,2434,2435,2492,2494,2495,2496,2497,2498,2499,2500,2503,2504,2507,2508,2509,2519,2530,2531,2534,2535,2536,2537,2538,2539,2540,2541,2542,2543,2561,2562,2563,2620,2622,2623,2624,2625,2626,2631,2632,2635,2636,2637,2641,2662,2663,2664,2665,2666,2667,2668,2669,2670,2671,2672,2673,2677,2689,2690,2691,2748,2750,2751,2752,2753,2754,2755,2756,2757,2759,2760,2761,2763,2764,2765,2786,2787,2790,2791,2792,2793,2794,2795,2796,2797,2798,2799,2817,2818,2819,2876,2878,2879,2880,2881,2882,2883,2884,2887,2888,2891,2892,2893,2902,2903,2914,2915,2918,2919,2920,2921,2922,2923,2924,2925,2926,2927,2946,3006,3007,3008,3009,3010,3014,3015,3016,3018,3019,3020,3021,3031,3046,3047,3048,3049,3050,3051,3052,3053,3054,3055,3073,3074,3075,3134,3135,3136,3137,3138,3139,3140,3142,3143,3144,3146,3147,3148,3149,3157,3158,3170,3171,3174,3175,3176,3177,3178,3179,3180,3181,3182,3183,3202,3203,3260,3262,3263,3264,3265,3266,3267,3268,3270,3271,3272,3274,3275,3276,3277,3285,3286,3298,3299,3302,3303,3304,3305,3306,3307,3308,3309,3310,3311,3330,3331,3390,3391,3392,3393,3394,3395,3396,3398,3399,3400,3402,3403,3404,3405,3415,3426,3427,3430,3431,3432,3433,3434,3435,3436,3437,3438,3439,3458,3459,3530,3535,3536,3537,3538,3539,3540,3542,3544,3545,3546,3547,3548,3549,3550,3551,3570,3571,3633,3636,3637,3638,3639,3640,3641,3642,3655,3656,3657,3658,3659,3660,3661,3662,3664,3665,3666,3667,3668,3669,3670,3671,3672,3673,3761,3764,3765,3766,3767,3768,3769,3771,3772,3784,3785,3786,3787,3788,3789,3792,3793,3794,3795,3796,3797,3798,3799,3800,3801,3864,3865,3872,3873,3874,3875,3876,3877,3878,3879,3880,3881,3893,3895,3897,3902,3903,3953,3954,3955,3956,3957,3958,3959,3960,3961,3962,3963,3964,3965,3966,3967,3968,3969,3970,3971,3972,3974,3975,3981,3982,3983,3984,3985,3986,3987,3988,3989,3990,3991,3993,3994,3995,3996,3997,3998,3999,4e3,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016,4017,4018,4019,4020,4021,4022,4023,4024,4025,4026,4027,4028,4038,4139,4140,4141,4142,4143,4144,4145,4146,4147,4148,4149,4150,4151,4152,4153,4154,4155,4156,4157,4158,4160,4161,4162,4163,4164,4165,4166,4167,4168,4169,4182,4183,4184,4185,4190,4191,4192,4194,4195,4196,4199,4200,4201,4202,4203,4204,4205,4209,4210,4211,4212,4226,4227,4228,4229,4230,4231,4232,4233,4234,4235,4236,4237,4239,4240,4241,4242,4243,4244,4245,4246,4247,4248,4249,4250,4251,4252,4253,4957,4958,4959,5906,5907,5908,5938,5939,5940,5970,5971,6002,6003,6068,6069,6070,6071,6072,6073,6074,6075,6076,6077,6078,6079,6080,6081,6082,6083,6084,6085,6086,6087,6088,6089,6090,6091,6092,6093,6094,6095,6096,6097,6098,6099,6109,6112,6113,6114,6115,6116,6117,6118,6119,6120,6121,6155,6156,6157,6160,6161,6162,6163,6164,6165,6166,6167,6168,6169,6313,6432,6433,6434,6435,6436,6437,6438,6439,6440,6441,6442,6443,6448,6449,6450,6451,6452,6453,6454,6455,6456,6457,6458,6459,6470,6471,6472,6473,6474,6475,6476,6477,6478,6479,6576,6577,6578,6579,6580,6581,6582,6583,6584,6585,6586,6587,6588,6589,6590,6591,6592,6600,6601,6608,6609,6610,6611,6612,6613,6614,6615,6616,6617,6679,6680,6681,6682,6683,6741,6742,6743,6744,6745,6746,6747,6748,6749,6750,6752,6753,6754,6755,6756,6757,6758,6759,6760,6761,6762,6763,6764,6765,6766,6767,6768,6769,6770,6771,6772,6773,6774,6775,6776,6777,6778,6779,6780,6783,6784,6785,6786,6787,6788,6789,6790,6791,6792,6793,6800,6801,6802,6803,6804,6805,6806,6807,6808,6809,6912,6913,6914,6915,6916,6964,6965,6966,6967,6968,6969,6970,6971,6972,6973,6974,6975,6976,6977,6978,6979,6980,6992,6993,6994,6995,6996,6997,6998,6999,7e3,7001,7019,7020,7021,7022,7023,7024,7025,7026,7027,7040,7041,7042,7073,7074,7075,7076,7077,7078,7079,7080,7081,7082,7083,7084,7085,7088,7089,7090,7091,7092,7093,7094,7095,7096,7097,7142,7143,7144,7145,7146,7147,7148,7149,7150,7151,7152,7153,7154,7155,7204,7205,7206,7207,7208,7209,7210,7211,7212,7213,7214,7215,7216,7217,7218,7219,7220,7221,7222,7223,7232,7233,7234,7235,7236,7237,7238,7239,7240,7241,7248,7249,7250,7251,7252,7253,7254,7255,7256,7257,7376,7377,7378,7380,7381,7382,7383,7384,7385,7386,7387,7388,7389,7390,7391,7392,7393,7394,7395,7396,7397,7398,7399,7400,7405,7410,7411,7412,7616,7617,7618,7619,7620,7621,7622,7623,7624,7625,7626,7627,7628,7629,7630,7631,7632,7633,7634,7635,7636,7637,7638,7639,7640,7641,7642,7643,7644,7645,7646,7647,7648,7649,7650,7651,7652,7653,7654,7676,7677,7678,7679,8204,8205,8255,8256,8276,8400,8401,8402,8403,8404,8405,8406,8407,8408,8409,8410,8411,8412,8417,8421,8422,8423,8424,8425,8426,8427,8428,8429,8430,8431,8432,11503,11504,11505,11647,11744,11745,11746,11747,11748,11749,11750,11751,11752,11753,11754,11755,11756,11757,11758,11759,11760,11761,11762,11763,11764,11765,11766,11767,11768,11769,11770,11771,11772,11773,11774,11775,12330,12331,12332,12333,12334,12335,12441,12442,42528,42529,42530,42531,42532,42533,42534,42535,42536,42537,42607,42612,42613,42614,42615,42616,42617,42618,42619,42620,42621,42655,42736,42737,43010,43014,43019,43043,43044,43045,43046,43047,43136,43137,43188,43189,43190,43191,43192,43193,43194,43195,43196,43197,43198,43199,43200,43201,43202,43203,43204,43216,43217,43218,43219,43220,43221,43222,43223,43224,43225,43232,43233,43234,43235,43236,43237,43238,43239,43240,43241,43242,43243,43244,43245,43246,43247,43248,43249,43264,43265,43266,43267,43268,43269,43270,43271,43272,43273,43302,43303,43304,43305,43306,43307,43308,43309,43335,43336,43337,43338,43339,43340,43341,43342,43343,43344,43345,43346,43347,43392,43393,43394,43395,43443,43444,43445,43446,43447,43448,43449,43450,43451,43452,43453,43454,43455,43456,43472,43473,43474,43475,43476,43477,43478,43479,43480,43481,43561,43562,43563,43564,43565,43566,43567,43568,43569,43570,43571,43572,43573,43574,43587,43596,43597,43600,43601,43602,43603,43604,43605,43606,43607,43608,43609,43643,43696,43698,43699,43700,43703,43704,43710,43711,43713,43755,43756,43757,43758,43759,43765,43766,44003,44004,44005,44006,44007,44008,44009,44010,44012,44013,44016,44017,44018,44019,44020,44021,44022,44023,44024,44025,64286,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65056,65057,65058,65059,65060,65061,65062,65075,65076,65101,65102,65103,65296,65297,65298,65299,65300,65301,65302,65303,65304,65305,65343]},{}],3:[function(e,t,n){t.exports=[170,181,186,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,710,711,712,713,714,715,716,717,718,719,720,721,736,737,738,739,740,748,750,880,881,882,883,884,886,887,890,891,892,893,902,904,905,906,908,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1e3,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1369,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415,1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1520,1521,1522,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1646,1647,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,1711,1712,1713,1714,1715,1716,1717,1718,1719,1720,1721,1722,1723,1724,1725,1726,1727,1728,1729,1730,1731,1732,1733,1734,1735,1736,1737,1738,1739,1740,1741,1742,1743,1744,1745,1746,1747,1749,1765,1766,1774,1775,1786,1787,1788,1791,1808,1810,1811,1812,1813,1814,1815,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1833,1834,1835,1836,1837,1838,1839,1869,1870,1871,1872,1873,1874,1875,1876,1877,1878,1879,1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1969,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2036,2037,2042,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062,2063,2064,2065,2066,2067,2068,2069,2074,2084,2088,2112,2113,2114,2115,2116,2117,2118,2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2133,2134,2135,2136,2208,2210,2211,2212,2213,2214,2215,2216,2217,2218,2219,2220,2308,2309,2310,2311,2312,2313,2314,2315,2316,2317,2318,2319,2320,2321,2322,2323,2324,2325,2326,2327,2328,2329,2330,2331,2332,2333,2334,2335,2336,2337,2338,2339,2340,2341,2342,2343,2344,2345,2346,2347,2348,2349,2350,2351,2352,2353,2354,2355,2356,2357,2358,2359,2360,2361,2365,2384,2392,2393,2394,2395,2396,2397,2398,2399,2400,2401,2417,2418,2419,2420,2421,2422,2423,2425,2426,2427,2428,2429,2430,2431,2437,2438,2439,2440,2441,2442,2443,2444,2447,2448,2451,2452,2453,2454,2455,2456,2457,2458,2459,2460,2461,2462,2463,2464,2465,2466,2467,2468,2469,2470,2471,2472,2474,2475,2476,2477,2478,2479,2480,2482,2486,2487,2488,2489,2493,2510,2524,2525,2527,2528,2529,2544,2545,2565,2566,2567,2568,2569,2570,2575,2576,2579,2580,2581,2582,2583,2584,2585,2586,2587,2588,2589,2590,2591,2592,2593,2594,2595,2596,2597,2598,2599,2600,2602,2603,2604,2605,2606,2607,2608,2610,2611,2613,2614,2616,2617,2649,2650,2651,2652,2654,2674,2675,2676,2693,2694,2695,2696,2697,2698,2699,2700,2701,2703,2704,2705,2707,2708,2709,2710,2711,2712,2713,2714,2715,2716,2717,2718,2719,2720,2721,2722,2723,2724,2725,2726,2727,2728,2730,2731,2732,2733,2734,2735,2736,2738,2739,2741,2742,2743,2744,2745,2749,2768,2784,2785,2821,2822,2823,2824,2825,2826,2827,2828,2831,2832,2835,2836,2837,2838,2839,2840,2841,2842,2843,2844,2845,2846,2847,2848,2849,2850,2851,2852,2853,2854,2855,2856,2858,2859,2860,2861,2862,2863,2864,2866,2867,2869,2870,2871,2872,2873,2877,2908,2909,2911,2912,2913,2929,2947,2949,2950,2951,2952,2953,2954,2958,2959,2960,2962,2963,2964,2965,2969,2970,2972,2974,2975,2979,2980,2984,2985,2986,2990,2991,2992,2993,2994,2995,2996,2997,2998,2999,3e3,3001,3024,3077,3078,3079,3080,3081,3082,3083,3084,3086,3087,3088,3090,3091,3092,3093,3094,3095,3096,3097,3098,3099,3100,3101,3102,3103,3104,3105,3106,3107,3108,3109,3110,3111,3112,3114,3115,3116,3117,3118,3119,3120,3121,3122,3123,3125,3126,3127,3128,3129,3133,3160,3161,3168,3169,3205,3206,3207,3208,3209,3210,3211,3212,3214,3215,3216,3218,3219,3220,3221,3222,3223,3224,3225,3226,3227,3228,3229,3230,3231,3232,3233,3234,3235,3236,3237,3238,3239,3240,3242,3243,3244,3245,3246,3247,3248,3249,3250,3251,3253,3254,3255,3256,3257,3261,3294,3296,3297,3313,3314,3333,3334,3335,3336,3337,3338,3339,3340,3342,3343,3344,3346,3347,3348,3349,3350,3351,3352,3353,3354,3355,3356,3357,3358,3359,3360,3361,3362,3363,3364,3365,3366,3367,3368,3369,3370,3371,3372,3373,3374,3375,3376,3377,3378,3379,3380,3381,3382,3383,3384,3385,3386,3389,3406,3424,3425,3450,3451,3452,3453,3454,3455,3461,3462,3463,3464,3465,3466,3467,3468,3469,3470,3471,3472,3473,3474,3475,3476,3477,3478,3482,3483,3484,3485,3486,3487,3488,3489,3490,3491,3492,3493,3494,3495,3496,3497,3498,3499,3500,3501,3502,3503,3504,3505,3507,3508,3509,3510,3511,3512,3513,3514,3515,3517,3520,3521,3522,3523,3524,3525,3526,3585,3586,3587,3588,3589,3590,3591,3592,3593,3594,3595,3596,3597,3598,3599,3600,3601,3602,3603,3604,3605,3606,3607,3608,3609,3610,3611,3612,3613,3614,3615,3616,3617,3618,3619,3620,3621,3622,3623,3624,3625,3626,3627,3628,3629,3630,3631,3632,3634,3635,3648,3649,3650,3651,3652,3653,3654,3713,3714,3716,3719,3720,3722,3725,3732,3733,3734,3735,3737,3738,3739,3740,3741,3742,3743,3745,3746,3747,3749,3751,3754,3755,3757,3758,3759,3760,3762,3763,3773,3776,3777,3778,3779,3780,3782,3804,3805,3806,3807,3840,3904,3905,3906,3907,3908,3909,3910,3911,3913,3914,3915,3916,3917,3918,3919,3920,3921,3922,3923,3924,3925,3926,3927,3928,3929,3930,3931,3932,3933,3934,3935,3936,3937,3938,3939,3940,3941,3942,3943,3944,3945,3946,3947,3948,3976,3977,3978,3979,3980,4096,4097,4098,4099,4100,4101,4102,4103,4104,4105,4106,4107,4108,4109,4110,4111,4112,4113,4114,4115,4116,4117,4118,4119,4120,4121,4122,4123,4124,4125,4126,4127,4128,4129,4130,4131,4132,4133,4134,4135,4136,4137,4138,4159,4176,4177,4178,4179,4180,4181,4186,4187,4188,4189,4193,4197,4198,4206,4207,4208,4213,4214,4215,4216,4217,4218,4219,4220,4221,4222,4223,4224,4225,4238,4256,4257,4258,4259,4260,4261,4262,4263,4264,4265,4266,4267,4268,4269,4270,4271,4272,4273,4274,4275,4276,4277,4278,4279,4280,4281,4282,4283,4284,4285,4286,4287,4288,4289,4290,4291,4292,4293,4295,4301,4304,4305,4306,4307,4308,4309,4310,4311,4312,4313,4314,4315,4316,4317,4318,4319,4320,4321,4322,4323,4324,4325,4326,4327,4328,4329,4330,4331,4332,4333,4334,4335,4336,4337,4338,4339,4340,4341,4342,4343,4344,4345,4346,4348,4349,4350,4351,4352,4353,4354,4355,4356,4357,4358,4359,4360,4361,4362,4363,4364,4365,4366,4367,4368,4369,4370,4371,4372,4373,4374,4375,4376,4377,4378,4379,4380,4381,4382,4383,4384,4385,4386,4387,4388,4389,4390,4391,4392,4393,4394,4395,4396,4397,4398,4399,4400,4401,4402,4403,4404,4405,4406,4407,4408,4409,4410,4411,4412,4413,4414,4415,4416,4417,4418,4419,4420,4421,4422,4423,4424,4425,4426,4427,4428,4429,4430,4431,4432,4433,4434,4435,4436,4437,4438,4439,4440,4441,4442,4443,4444,4445,4446,4447,4448,4449,4450,4451,4452,4453,4454,4455,4456,4457,4458,4459,4460,4461,4462,4463,4464,4465,4466,4467,4468,4469,4470,4471,4472,4473,4474,4475,4476,4477,4478,4479,4480,4481,4482,4483,4484,4485,4486,4487,4488,4489,4490,4491,4492,4493,4494,4495,4496,4497,4498,4499,4500,4501,4502,4503,4504,4505,4506,4507,4508,4509,4510,4511,4512,4513,4514,4515,4516,4517,4518,4519,4520,4521,4522,4523,4524,4525,4526,4527,4528,4529,4530,4531,4532,4533,4534,4535,4536,4537,4538,4539,4540,4541,4542,4543,4544,4545,4546,4547,4548,4549,4550,4551,4552,4553,4554,4555,4556,4557,4558,4559,4560,4561,4562,4563,4564,4565,4566,4567,4568,4569,4570,4571,4572,4573,4574,4575,4576,4577,4578,4579,4580,4581,4582,4583,4584,4585,4586,4587,4588,4589,4590,4591,4592,4593,4594,4595,4596,4597,4598,4599,4600,4601,4602,4603,4604,4605,4606,4607,4608,4609,4610,4611,4612,4613,4614,4615,4616,4617,4618,4619,4620,4621,4622,4623,4624,4625,4626,4627,4628,4629,4630,4631,4632,4633,4634,4635,4636,4637,4638,4639,4640,4641,4642,4643,4644,4645,4646,4647,4648,4649,4650,4651,4652,4653,4654,4655,4656,4657,4658,4659,4660,4661,4662,4663,4664,4665,4666,4667,4668,4669,4670,4671,4672,4673,4674,4675,4676,4677,4678,4679,4680,4682,4683,4684,4685,4688,4689,4690,4691,4692,4693,4694,4696,4698,4699,4700,4701,4704,4705,4706,4707,4708,4709,4710,4711,4712,4713,4714,4715,4716,4717,4718,4719,4720,4721,4722,4723,4724,4725,4726,4727,4728,4729,4730,4731,4732,4733,4734,4735,4736,4737,4738,4739,4740,4741,4742,4743,4744,4746,4747,4748,4749,4752,4753,4754,4755,4756,4757,4758,4759,4760,4761,4762,4763,4764,4765,4766,4767,4768,4769,4770,4771,4772,4773,4774,4775,4776,4777,4778,4779,4780,4781,4782,4783,4784,4786,4787,4788,4789,4792,4793,4794,4795,4796,4797,4798,4800,4802,4803,4804,4805,4808,4809,4810,4811,4812,4813,4814,4815,4816,4817,4818,4819,4820,4821,4822,4824,4825,4826,4827,4828,4829,4830,4831,4832,4833,4834,4835,4836,4837,4838,4839,4840,4841,4842,4843,4844,4845,4846,4847,4848,4849,4850,4851,4852,4853,4854,4855,4856,4857,4858,4859,4860,4861,4862,4863,4864,4865,4866,4867,4868,4869,4870,4871,4872,4873,4874,4875,4876,4877,4878,4879,4880,4882,4883,4884,4885,4888,4889,4890,4891,4892,4893,4894,4895,4896,4897,4898,4899,4900,4901,4902,4903,4904,4905,4906,4907,4908,4909,4910,4911,4912,4913,4914,4915,4916,4917,4918,4919,4920,4921,4922,4923,4924,4925,4926,4927,4928,4929,4930,4931,4932,4933,4934,4935,4936,4937,4938,4939,4940,4941,4942,4943,4944,4945,4946,4947,4948,4949,4950,4951,4952,4953,4954,4992,4993,4994,4995,4996,4997,4998,4999,5e3,5001,5002,5003,5004,5005,5006,5007,5024,5025,5026,5027,5028,5029,5030,5031,5032,5033,5034,5035,5036,5037,5038,5039,5040,5041,5042,5043,5044,5045,5046,5047,5048,5049,5050,5051,5052,5053,5054,5055,5056,5057,5058,5059,5060,5061,5062,5063,5064,5065,5066,5067,5068,5069,5070,5071,5072,5073,5074,5075,5076,5077,5078,5079,5080,5081,5082,5083,5084,5085,5086,5087,5088,5089,5090,5091,5092,5093,5094,5095,5096,5097,5098,5099,5100,5101,5102,5103,5104,5105,5106,5107,5108,5121,5122,5123,5124,5125,5126,5127,5128,5129,5130,5131,5132,5133,5134,5135,5136,5137,5138,5139,5140,5141,5142,5143,5144,5145,5146,5147,5148,5149,5150,5151,5152,5153,5154,5155,5156,5157,5158,5159,5160,5161,5162,5163,5164,5165,5166,5167,5168,5169,5170,5171,5172,5173,5174,5175,5176,5177,5178,5179,5180,5181,5182,5183,5184,5185,5186,5187,5188,5189,5190,5191,5192,5193,5194,5195,5196,5197,5198,5199,5200,5201,5202,5203,5204,5205,5206,5207,5208,5209,5210,5211,5212,5213,5214,5215,5216,5217,5218,5219,5220,5221,5222,5223,5224,5225,5226,5227,5228,5229,5230,5231,5232,5233,5234,5235,5236,5237,5238,5239,5240,5241,5242,5243,5244,5245,5246,5247,5248,5249,5250,5251,5252,5253,5254,5255,5256,5257,5258,5259,5260,5261,5262,5263,5264,5265,5266,5267,5268,5269,5270,5271,5272,5273,5274,5275,5276,5277,5278,5279,5280,5281,5282,5283,5284,5285,5286,5287,5288,5289,5290,5291,5292,5293,5294,5295,5296,5297,5298,5299,5300,5301,5302,5303,5304,5305,5306,5307,5308,5309,5310,5311,5312,5313,5314,5315,5316,5317,5318,5319,5320,5321,5322,5323,5324,5325,5326,5327,5328,5329,5330,5331,5332,5333,5334,5335,5336,5337,5338,5339,5340,5341,5342,5343,5344,5345,5346,5347,5348,5349,5350,5351,5352,5353,5354,5355,5356,5357,5358,5359,5360,5361,5362,5363,5364,5365,5366,5367,5368,5369,5370,5371,5372,5373,5374,5375,5376,5377,5378,5379,5380,5381,5382,5383,5384,5385,5386,5387,5388,5389,5390,5391,5392,5393,5394,5395,5396,5397,5398,5399,5400,5401,5402,5403,5404,5405,5406,5407,5408,5409,5410,5411,5412,5413,5414,5415,5416,5417,5418,5419,5420,5421,5422,5423,5424,5425,5426,5427,5428,5429,5430,5431,5432,5433,5434,5435,5436,5437,5438,5439,5440,5441,5442,5443,5444,5445,5446,5447,5448,5449,5450,5451,5452,5453,5454,5455,5456,5457,5458,5459,5460,5461,5462,5463,5464,5465,5466,5467,5468,5469,5470,5471,5472,5473,5474,5475,5476,5477,5478,5479,5480,5481,5482,5483,5484,5485,5486,5487,5488,5489,5490,5491,5492,5493,5494,5495,5496,5497,5498,5499,5500,5501,5502,5503,5504,5505,5506,5507,5508,5509,5510,5511,5512,5513,5514,5515,5516,5517,5518,5519,5520,5521,5522,5523,5524,5525,5526,5527,5528,5529,5530,5531,5532,5533,5534,5535,5536,5537,5538,5539,5540,5541,5542,5543,5544,5545,5546,5547,5548,5549,5550,5551,5552,5553,5554,5555,5556,5557,5558,5559,5560,5561,5562,5563,5564,5565,5566,5567,5568,5569,5570,5571,5572,5573,5574,5575,5576,5577,5578,5579,5580,5581,5582,5583,5584,5585,5586,5587,5588,5589,5590,5591,5592,5593,5594,5595,5596,5597,5598,5599,5600,5601,5602,5603,5604,5605,5606,5607,5608,5609,5610,5611,5612,5613,5614,5615,5616,5617,5618,5619,5620,5621,5622,5623,5624,5625,5626,5627,5628,5629,5630,5631,5632,5633,5634,5635,5636,5637,5638,5639,5640,5641,5642,5643,5644,5645,5646,5647,5648,5649,5650,5651,5652,5653,5654,5655,5656,5657,5658,5659,5660,5661,5662,5663,5664,5665,5666,5667,5668,5669,5670,5671,5672,5673,5674,5675,5676,5677,5678,5679,5680,5681,5682,5683,5684,5685,5686,5687,5688,5689,5690,5691,5692,5693,5694,5695,5696,5697,5698,5699,5700,5701,5702,5703,5704,5705,5706,5707,5708,5709,5710,5711,5712,5713,5714,5715,5716,5717,5718,5719,5720,5721,5722,5723,5724,5725,5726,5727,5728,5729,5730,5731,5732,5733,5734,5735,5736,5737,5738,5739,5740,5743,5744,5745,5746,5747,5748,5749,5750,5751,5752,5753,5754,5755,5756,5757,5758,5759,5761,5762,5763,5764,5765,5766,5767,5768,5769,5770,5771,5772,5773,5774,5775,5776,5777,5778,5779,5780,5781,5782,5783,5784,5785,5786,5792,5793,5794,5795,5796,5797,5798,5799,5800,5801,5802,5803,5804,5805,5806,5807,5808,5809,5810,5811,5812,5813,5814,5815,5816,5817,5818,5819,5820,5821,5822,5823,5824,5825,5826,5827,5828,5829,5830,5831,5832,5833,5834,5835,5836,5837,5838,5839,5840,5841,5842,5843,5844,5845,5846,5847,5848,5849,5850,5851,5852,5853,5854,5855,5856,5857,5858,5859,5860,5861,5862,5863,5864,5865,5866,5870,5871,5872,5888,5889,5890,5891,5892,5893,5894,5895,5896,5897,5898,5899,5900,5902,5903,5904,5905,5920,5921,5922,5923,5924,5925,5926,5927,5928,5929,5930,5931,5932,5933,5934,5935,5936,5937,5952,5953,5954,5955,5956,5957,5958,5959,5960,5961,5962,5963,5964,5965,5966,5967,5968,5969,5984,5985,5986,5987,5988,5989,5990,5991,5992,5993,5994,5995,5996,5998,5999,6e3,6016,6017,6018,6019,6020,6021,6022,6023,6024,6025,6026,6027,6028,6029,6030,6031,6032,6033,6034,6035,6036,6037,6038,6039,6040,6041,6042,6043,6044,6045,6046,6047,6048,6049,6050,6051,6052,6053,6054,6055,6056,6057,6058,6059,6060,6061,6062,6063,6064,6065,6066,6067,6103,6108,6176,6177,6178,6179,6180,6181,6182,6183,6184,6185,6186,6187,6188,6189,6190,6191,6192,6193,6194,6195,6196,6197,6198,6199,6200,6201,6202,6203,6204,6205,6206,6207,6208,6209,6210,6211,6212,6213,6214,6215,6216,6217,6218,6219,6220,6221,6222,6223,6224,6225,6226,6227,6228,6229,6230,6231,6232,6233,6234,6235,6236,6237,6238,6239,6240,6241,6242,6243,6244,6245,6246,6247,6248,6249,6250,6251,6252,6253,6254,6255,6256,6257,6258,6259,6260,6261,6262,6263,6272,6273,6274,6275,6276,6277,6278,6279,6280,6281,6282,6283,6284,6285,6286,6287,6288,6289,6290,6291,6292,6293,6294,6295,6296,6297,6298,6299,6300,6301,6302,6303,6304,6305,6306,6307,6308,6309,6310,6311,6312,6314,6320,6321,6322,6323,6324,6325,6326,6327,6328,6329,6330,6331,6332,6333,6334,6335,6336,6337,6338,6339,6340,6341,6342,6343,6344,6345,6346,6347,6348,6349,6350,6351,6352,6353,6354,6355,6356,6357,6358,6359,6360,6361,6362,6363,6364,6365,6366,6367,6368,6369,6370,6371,6372,6373,6374,6375,6376,6377,6378,6379,6380,6381,6382,6383,6384,6385,6386,6387,6388,6389,6400,6401,6402,6403,6404,6405,6406,6407,6408,6409,6410,6411,6412,6413,6414,6415,6416,6417,6418,6419,6420,6421,6422,6423,6424,6425,6426,6427,6428,6480,6481,6482,6483,6484,6485,6486,6487,6488,6489,6490,6491,6492,6493,6494,6495,6496,6497,6498,6499,6500,6501,6502,6503,6504,6505,6506,6507,6508,6509,6512,6513,6514,6515,6516,6528,6529,6530,6531,6532,6533,6534,6535,6536,6537,6538,6539,6540,6541,6542,6543,6544,6545,6546,6547,6548,6549,6550,6551,6552,6553,6554,6555,6556,6557,6558,6559,6560,6561,6562,6563,6564,6565,6566,6567,6568,6569,6570,6571,6593,6594,6595,6596,6597,6598,6599,6656,6657,6658,6659,6660,6661,6662,6663,6664,6665,6666,6667,6668,6669,6670,6671,6672,6673,6674,6675,6676,6677,6678,6688,6689,6690,6691,6692,6693,6694,6695,6696,6697,6698,6699,6700,6701,6702,6703,6704,6705,6706,6707,6708,6709,6710,6711,6712,6713,6714,6715,6716,6717,6718,6719,6720,6721,6722,6723,6724,6725,6726,6727,6728,6729,6730,6731,6732,6733,6734,6735,6736,6737,6738,6739,6740,6823,6917,6918,6919,6920,6921,6922,6923,6924,6925,6926,6927,6928,6929,6930,6931,6932,6933,6934,6935,6936,6937,6938,6939,6940,6941,6942,6943,6944,6945,6946,6947,6948,6949,6950,6951,6952,6953,6954,6955,6956,6957,6958,6959,6960,6961,6962,6963,6981,6982,6983,6984,6985,6986,6987,7043,7044,7045,7046,7047,7048,7049,7050,7051,7052,7053,7054,7055,7056,7057,7058,7059,7060,7061,7062,7063,7064,7065,7066,7067,7068,7069,7070,7071,7072,7086,7087,7098,7099,7100,7101,7102,7103,7104,7105,7106,7107,7108,7109,7110,7111,7112,7113,7114,7115,7116,7117,7118,7119,7120,7121,7122,7123,7124,7125,7126,7127,7128,7129,7130,7131,7132,7133,7134,7135,7136,7137,7138,7139,7140,7141,7168,7169,7170,7171,7172,7173,7174,7175,7176,7177,7178,7179,7180,7181,7182,7183,7184,7185,7186,7187,7188,7189,7190,7191,7192,7193,7194,7195,7196,7197,7198,7199,7200,7201,7202,7203,7245,7246,7247,7258,7259,7260,7261,7262,7263,7264,7265,7266,7267,7268,7269,7270,7271,7272,7273,7274,7275,7276,7277,7278,7279,7280,7281,7282,7283,7284,7285,7286,7287,7288,7289,7290,7291,7292,7293,7401,7402,7403,7404,7406,7407,7408,7409,7413,7414,7424,7425,7426,7427,7428,7429,7430,7431,7432,7433,7434,7435,7436,7437,7438,7439,7440,7441,7442,7443,7444,7445,7446,7447,7448,7449,7450,7451,7452,7453,7454,7455,7456,7457,7458,7459,7460,7461,7462,7463,7464,7465,7466,7467,7468,7469,7470,7471,7472,7473,7474,7475,7476,7477,7478,7479,7480,7481,7482,7483,7484,7485,7486,7487,7488,7489,7490,7491,7492,7493,7494,7495,7496,7497,7498,7499,7500,7501,7502,7503,7504,7505,7506,7507,7508,7509,7510,7511,7512,7513,7514,7515,7516,7517,7518,7519,7520,7521,7522,7523,7524,7525,7526,7527,7528,7529,7530,7531,7532,7533,7534,7535,7536,7537,7538,7539,7540,7541,7542,7543,7544,7545,7546,7547,7548,7549,7550,7551,7552,7553,7554,7555,7556,7557,7558,7559,7560,7561,7562,7563,7564,7565,7566,7567,7568,7569,7570,7571,7572,7573,7574,7575,7576,7577,7578,7579,7580,7581,7582,7583,7584,7585,7586,7587,7588,7589,7590,7591,7592,7593,7594,7595,7596,7597,7598,7599,7600,7601,7602,7603,7604,7605,7606,7607,7608,7609,7610,7611,7612,7613,7614,7615,7680,7681,7682,7683,7684,7685,7686,7687,7688,7689,7690,7691,7692,7693,7694,7695,7696,7697,7698,7699,7700,7701,7702,7703,7704,7705,7706,7707,7708,7709,7710,7711,7712,7713,7714,7715,7716,7717,7718,7719,7720,7721,7722,7723,7724,7725,7726,7727,7728,7729,7730,7731,7732,7733,7734,7735,7736,7737,7738,7739,7740,7741,7742,7743,7744,7745,7746,7747,7748,7749,7750,7751,7752,7753,7754,7755,7756,7757,7758,7759,7760,7761,7762,7763,7764,7765,7766,7767,7768,7769,7770,7771,7772,7773,7774,7775,7776,7777,7778,7779,7780,7781,7782,7783,7784,7785,7786,7787,7788,7789,7790,7791,7792,7793,7794,7795,7796,7797,7798,7799,7800,7801,7802,7803,7804,7805,7806,7807,7808,7809,7810,7811,7812,7813,7814,7815,7816,7817,7818,7819,7820,7821,7822,7823,7824,7825,7826,7827,7828,7829,7830,7831,7832,7833,7834,7835,7836,7837,7838,7839,7840,7841,7842,7843,7844,7845,7846,7847,7848,7849,7850,7851,7852,7853,7854,7855,7856,7857,7858,7859,7860,7861,7862,7863,7864,7865,7866,7867,7868,7869,7870,7871,7872,7873,7874,7875,7876,7877,7878,7879,7880,7881,7882,7883,7884,7885,7886,7887,7888,7889,7890,7891,7892,7893,7894,7895,7896,7897,7898,7899,7900,7901,7902,7903,7904,7905,7906,7907,7908,7909,7910,7911,7912,7913,7914,7915,7916,7917,7918,7919,7920,7921,7922,7923,7924,7925,7926,7927,7928,7929,7930,7931,7932,7933,7934,7935,7936,7937,7938,7939,7940,7941,7942,7943,7944,7945,7946,7947,7948,7949,7950,7951,7952,7953,7954,7955,7956,7957,7960,7961,7962,7963,7964,7965,7968,7969,7970,7971,7972,7973,7974,7975,7976,7977,7978,7979,7980,7981,7982,7983,7984,7985,7986,7987,7988,7989,7990,7991,7992,7993,7994,7995,7996,7997,7998,7999,8e3,8001,8002,8003,8004,8005,8008,8009,8010,8011,8012,8013,8016,8017,8018,8019,8020,8021,8022,8023,8025,8027,8029,8031,8032,8033,8034,8035,8036,8037,8038,8039,8040,8041,8042,8043,8044,8045,8046,8047,8048,8049,8050,8051,8052,8053,8054,8055,8056,8057,8058,8059,8060,8061,8064,8065,8066,8067,8068,8069,8070,8071,8072,8073,8074,8075,8076,8077,8078,8079,8080,8081,8082,8083,8084,8085,8086,8087,8088,8089,8090,8091,8092,8093,8094,8095,8096,8097,8098,8099,8100,8101,8102,8103,8104,8105,8106,8107,8108,8109,8110,8111,8112,8113,8114,8115,8116,8118,8119,8120,8121,8122,8123,8124,8126,8130,8131,8132,8134,8135,8136,8137,8138,8139,8140,8144,8145,8146,8147,8150,8151,8152,8153,8154,8155,8160,8161,8162,8163,8164,8165,8166,8167,8168,8169,8170,8171,8172,8178,8179,8180,8182,8183,8184,8185,8186,8187,8188,8305,8319,8336,8337,8338,8339,8340,8341,8342,8343,8344,8345,8346,8347,8348,8450,8455,8458,8459,8460,8461,8462,8463,8464,8465,8466,8467,8469,8473,8474,8475,8476,8477,8484,8486,8488,8490,8491,8492,8493,8495,8496,8497,8498,8499,8500,8501,8502,8503,8504,8505,8508,8509,8510,8511,8517,8518,8519,8520,8521,8526,8544,8545,8546,8547,8548,8549,8550,8551,8552,8553,8554,8555,8556,8557,8558,8559,8560,8561,8562,8563,8564,8565,8566,8567,8568,8569,8570,8571,8572,8573,8574,8575,8576,8577,8578,8579,8580,8581,8582,8583,8584,11264,11265,11266,11267,11268,11269,11270,11271,11272,11273,11274,11275,11276,11277,11278,11279,11280,11281,11282,11283,11284,11285,11286,11287,11288,11289,11290,11291,11292,11293,11294,11295,11296,11297,11298,11299,11300,11301,11302,11303,11304,11305,11306,11307,11308,11309,11310,11312,11313,11314,11315,11316,11317,11318,11319,11320,11321,11322,11323,11324,11325,11326,11327,11328,11329,11330,11331,11332,11333,11334,11335,11336,11337,11338,11339,11340,11341,11342,11343,11344,11345,11346,11347,11348,11349,11350,11351,11352,11353,11354,11355,11356,11357,11358,11360,11361,11362,11363,11364,11365,11366,11367,11368,11369,11370,11371,11372,11373,11374,11375,11376,11377,11378,11379,11380,11381,11382,11383,11384,11385,11386,11387,11388,11389,11390,11391,11392,11393,11394,11395,11396,11397,11398,11399,11400,11401,11402,11403,11404,11405,11406,11407,11408,11409,11410,11411,11412,11413,11414,11415,11416,11417,11418,11419,11420,11421,11422,11423,11424,11425,11426,11427,11428,11429,11430,11431,11432,11433,11434,11435,11436,11437,11438,11439,11440,11441,11442,11443,11444,11445,11446,11447,11448,11449,11450,11451,11452,11453,11454,11455,11456,11457,11458,11459,11460,11461,11462,11463,11464,11465,11466,11467,11468,11469,11470,11471,11472,11473,11474,11475,11476,11477,11478,11479,11480,11481,11482,11483,11484,11485,11486,11487,11488,11489,11490,11491,11492,11499,11500,11501,11502,11506,11507,11520,11521,11522,11523,11524,11525,11526,11527,11528,11529,11530,11531,11532,11533,11534,11535,11536,11537,11538,11539,11540,11541,11542,11543,11544,11545,11546,11547,11548,11549,11550,11551,11552,11553,11554,11555,11556,11557,11559,11565,11568,11569,11570,11571,11572,11573,11574,11575,11576,11577,11578,11579,11580,11581,11582,11583,11584,11585,11586,11587,11588,11589,11590,11591,11592,11593,11594,11595,11596,11597,11598,11599,11600,11601,11602,11603,11604,11605,11606,11607,11608,11609,11610,11611,11612,11613,11614,11615,11616,11617,11618,11619,11620,11621,11622,11623,11631,11648,11649,11650,11651,11652,11653,11654,11655,11656,11657,11658,11659,11660,11661,11662,11663,11664,11665,11666,11667,11668,11669,11670,11680,11681,11682,11683,11684,11685,11686,11688,11689,11690,11691,11692,11693,11694,11696,11697,11698,11699,11700,11701,11702,11704,11705,11706,11707,11708,11709,11710,11712,11713,11714,11715,11716,11717,11718,11720,11721,11722,11723,11724,11725,11726,11728,11729,11730,11731,11732,11733,11734,11736,11737,11738,11739,11740,11741,11742,11823,12293,12294,12295,12321,12322,12323,12324,12325,12326,12327,12328,12329,12337,12338,12339,12340,12341,12344,12345,12346,12347,12348,12353,12354,12355,12356,12357,12358,12359,12360,12361,12362,12363,12364,12365,12366,12367,12368,12369,12370,12371,12372,12373,12374,12375,12376,12377,12378,12379,12380,12381,12382,12383,12384,12385,12386,12387,12388,12389,12390,12391,12392,12393,12394,12395,12396,12397,12398,12399,12400,12401,12402,12403,12404,12405,12406,12407,12408,12409,12410,12411,12412,12413,12414,12415,12416,12417,12418,12419,12420,12421,12422,12423,12424,12425,12426,12427,12428,12429,12430,12431,12432,12433,12434,12435,12436,12437,12438,12445,12446,12447,12449,12450,12451,12452,12453,12454,12455,12456,12457,12458,12459,12460,12461,12462,12463,12464,12465,12466,12467,12468,12469,12470,12471,12472,12473,12474,12475,12476,12477,12478,12479,12480,12481,12482,12483,12484,12485,12486,12487,12488,12489,12490,12491,12492,12493,12494,12495,12496,12497,12498,12499,12500,12501,12502,12503,12504,12505,12506,12507,12508,12509,12510,12511,12512,12513,12514,12515,12516,12517,12518,12519,12520,12521,12522,12523,12524,12525,12526,12527,12528,12529,12530,12531,12532,12533,12534,12535,12536,12537,12538,12540,12541,12542,12543,12549,12550,12551,12552,12553,12554,12555,12556,12557,12558,12559,12560,12561,12562,12563,12564,12565,12566,12567,12568,12569,12570,12571,12572,12573,12574,12575,12576,12577,12578,12579,12580,12581,12582,12583,12584,12585,12586,12587,12588,12589,12593,12594,12595,12596,12597,12598,12599,12600,12601,12602,12603,12604,12605,12606,12607,12608,12609,12610,12611,12612,12613,12614,12615,12616,12617,12618,12619,12620,12621,12622,12623,12624,12625,12626,12627,12628,12629,12630,12631,12632,12633,12634,12635,12636,12637,12638,12639,12640,12641,12642,12643,12644,12645,12646,12647,12648,12649,12650,12651,12652,12653,12654,12655,12656,12657,12658,12659,12660,12661,12662,12663,12664,12665,12666,12667,12668,12669,12670,12671,12672,12673,12674,12675,12676,12677,12678,12679,12680,12681,12682,12683,12684,12685,12686,12704,12705,12706,12707,12708,12709,12710,12711,12712,12713,12714,12715,12716,12717,12718,12719,12720,12721,12722,12723,12724,12725,12726,12727,12728,12729,12730,12784,12785,12786,12787,12788,12789,12790,12791,12792,12793,12794,12795,12796,12797,12798,12799,13312,13313,13314,13315,13316,13317,13318,13319,13320,13321,13322,13323,13324,13325,13326,13327,13328,13329,13330,13331,13332,13333,13334,13335,13336,13337,13338,13339,13340,13341,13342,13343,13344,13345,13346,13347,13348,13349,13350,13351,13352,13353,13354,13355,13356,13357,13358,13359,13360,13361,13362,13363,13364,13365,13366,13367,13368,13369,13370,13371,13372,13373,13374,13375,13376,13377,13378,13379,13380,13381,13382,13383,13384,13385,13386,13387,13388,13389,13390,13391,13392,13393,13394,13395,13396,13397,13398,13399,13400,13401,13402,13403,13404,13405,13406,13407,13408,13409,13410,13411,13412,13413,13414,13415,13416,13417,13418,13419,13420,13421,13422,13423,13424,13425,13426,13427,13428,13429,13430,13431,13432,13433,13434,13435,13436,13437,13438,13439,13440,13441,13442,13443,13444,13445,13446,13447,13448,13449,13450,13451,13452,13453,13454,13455,13456,13457,13458,13459,13460,13461,13462,13463,13464,13465,13466,13467,13468,13469,13470,13471,13472,13473,13474,13475,13476,13477,13478,13479,13480,13481,13482,13483,13484,13485,13486,13487,13488,13489,13490,13491,13492,13493,13494,13495,13496,13497,13498,13499,13500,13501,13502,13503,13504,13505,13506,13507,13508,13509,13510,13511,13512,13513,13514,13515,13516,13517,13518,13519,13520,13521,13522,13523,13524,13525,13526,13527,13528,13529,13530,13531,13532,13533,13534,13535,13536,13537,13538,13539,13540,13541,13542,13543,13544,13545,13546,13547,13548,13549,13550,13551,13552,13553,13554,13555,13556,13557,13558,13559,13560,13561,13562,13563,13564,13565,13566,13567,13568,13569,13570,13571,13572,13573,13574,13575,13576,13577,13578,13579,13580,13581,13582,13583,13584,13585,13586,13587,13588,13589,13590,13591,13592,13593,13594,13595,13596,13597,13598,13599,13600,13601,13602,13603,13604,13605,13606,13607,13608,13609,13610,13611,13612,13613,13614,13615,13616,13617,13618,13619,13620,13621,13622,13623,13624,13625,13626,13627,13628,13629,13630,13631,13632,13633,13634,13635,13636,13637,13638,13639,13640,13641,13642,13643,13644,13645,13646,13647,13648,13649,13650,13651,13652,13653,13654,13655,13656,13657,13658,13659,13660,13661,13662,13663,13664,13665,13666,13667,13668,13669,13670,13671,13672,13673,13674,13675,13676,13677,13678,13679,13680,13681,13682,13683,13684,13685,13686,13687,13688,13689,13690,13691,13692,13693,13694,13695,13696,13697,13698,13699,13700,13701,13702,13703,13704,13705,13706,13707,13708,13709,13710,13711,13712,13713,13714,13715,13716,13717,13718,13719,13720,13721,13722,13723,13724,13725,13726,13727,13728,13729,13730,13731,13732,13733,13734,13735,13736,13737,13738,13739,13740,13741,13742,13743,13744,13745,13746,13747,13748,13749,13750,13751,13752,13753,13754,13755,13756,13757,13758,13759,13760,13761,13762,13763,13764,13765,13766,13767,13768,13769,13770,13771,13772,13773,13774,13775,13776,13777,13778,13779,13780,13781,13782,13783,13784,13785,13786,13787,13788,13789,13790,13791,13792,13793,13794,13795,13796,13797,13798,13799,13800,13801,13802,13803,13804,13805,13806,13807,13808,13809,13810,13811,13812,13813,13814,13815,13816,13817,13818,13819,13820,13821,13822,13823,13824,13825,13826,13827,13828,13829,13830,13831,13832,13833,13834,13835,13836,13837,13838,13839,13840,13841,13842,13843,13844,13845,13846,13847,13848,13849,13850,13851,13852,13853,13854,13855,13856,13857,13858,13859,13860,13861,13862,13863,13864,13865,13866,13867,13868,13869,13870,13871,13872,13873,13874,13875,13876,13877,13878,13879,13880,13881,13882,13883,13884,13885,13886,13887,13888,13889,13890,13891,13892,13893,13894,13895,13896,13897,13898,13899,13900,13901,13902,13903,13904,13905,13906,13907,13908,13909,13910,13911,13912,13913,13914,13915,13916,13917,13918,13919,13920,13921,13922,13923,13924,13925,13926,13927,13928,13929,13930,13931,13932,13933,13934,13935,13936,13937,13938,13939,13940,13941,13942,13943,13944,13945,13946,13947,13948,13949,13950,13951,13952,13953,13954,13955,13956,13957,13958,13959,13960,13961,13962,13963,13964,13965,13966,13967,13968,13969,13970,13971,13972,13973,13974,13975,13976,13977,13978,13979,13980,13981,13982,13983,13984,13985,13986,13987,13988,13989,13990,13991,13992,13993,13994,13995,13996,13997,13998,13999,14e3,14001,14002,14003,14004,14005,14006,14007,14008,14009,14010,14011,14012,14013,14014,14015,14016,14017,14018,14019,14020,14021,14022,14023,14024,14025,14026,14027,14028,14029,14030,14031,14032,14033,14034,14035,14036,14037,14038,14039,14040,14041,14042,14043,14044,14045,14046,14047,14048,14049,14050,14051,14052,14053,14054,14055,14056,14057,14058,14059,14060,14061,14062,14063,14064,14065,14066,14067,14068,14069,14070,14071,14072,14073,14074,14075,14076,14077,14078,14079,14080,14081,14082,14083,14084,14085,14086,14087,14088,14089,14090,14091,14092,14093,14094,14095,14096,14097,14098,14099,14100,14101,14102,14103,14104,14105,14106,14107,14108,14109,14110,14111,14112,14113,14114,14115,14116,14117,14118,14119,14120,14121,14122,14123,14124,14125,14126,14127,14128,14129,14130,14131,14132,14133,14134,14135,14136,14137,14138,14139,14140,14141,14142,14143,14144,14145,14146,14147,14148,14149,14150,14151,14152,14153,14154,14155,14156,14157,14158,14159,14160,14161,14162,14163,14164,14165,14166,14167,14168,14169,14170,14171,14172,14173,14174,14175,14176,14177,14178,14179,14180,14181,14182,14183,14184,14185,14186,14187,14188,14189,14190,14191,14192,14193,14194,14195,14196,14197,14198,14199,14200,14201,14202,14203,14204,14205,14206,14207,14208,14209,14210,14211,14212,14213,14214,14215,14216,14217,14218,14219,14220,14221,14222,14223,14224,14225,14226,14227,14228,14229,14230,14231,14232,14233,14234,14235,14236,14237,14238,14239,14240,14241,14242,14243,14244,14245,14246,14247,14248,14249,14250,14251,14252,14253,14254,14255,14256,14257,14258,14259,14260,14261,14262,14263,14264,14265,14266,14267,14268,14269,14270,14271,14272,14273,14274,14275,14276,14277,14278,14279,14280,14281,14282,14283,14284,14285,14286,14287,14288,14289,14290,14291,14292,14293,14294,14295,14296,14297,14298,14299,14300,14301,14302,14303,14304,14305,14306,14307,14308,14309,14310,14311,14312,14313,14314,14315,14316,14317,14318,14319,14320,14321,14322,14323,14324,14325,14326,14327,14328,14329,14330,14331,14332,14333,14334,14335,14336,14337,14338,14339,14340,14341,14342,14343,14344,14345,14346,14347,14348,14349,14350,14351,14352,14353,14354,14355,14356,14357,14358,14359,14360,14361,14362,14363,14364,14365,14366,14367,14368,14369,14370,14371,14372,14373,14374,14375,14376,14377,14378,14379,14380,14381,14382,14383,14384,14385,14386,14387,14388,14389,14390,14391,14392,14393,14394,14395,14396,14397,14398,14399,14400,14401,14402,14403,14404,14405,14406,14407,14408,14409,14410,14411,14412,14413,14414,14415,14416,14417,14418,14419,14420,14421,14422,14423,14424,14425,14426,14427,14428,14429,14430,14431,14432,14433,14434,14435,14436,14437,14438,14439,14440,14441,14442,14443,14444,14445,14446,14447,14448,14449,14450,14451,14452,14453,14454,14455,14456,14457,14458,14459,14460,14461,14462,14463,14464,14465,14466,14467,14468,14469,14470,14471,14472,14473,14474,14475,14476,14477,14478,14479,14480,14481,14482,14483,14484,14485,14486,14487,14488,14489,14490,14491,14492,14493,14494,14495,14496,14497,14498,14499,14500,14501,14502,14503,14504,14505,14506,14507,14508,14509,14510,14511,14512,14513,14514,14515,14516,14517,14518,14519,14520,14521,14522,14523,14524,14525,14526,14527,14528,14529,14530,14531,14532,14533,14534,14535,14536,14537,14538,14539,14540,14541,14542,14543,14544,14545,14546,14547,14548,14549,14550,14551,14552,14553,14554,14555,14556,14557,14558,14559,14560,14561,14562,14563,14564,14565,14566,14567,14568,14569,14570,14571,14572,14573,14574,14575,14576,14577,14578,14579,14580,14581,14582,14583,14584,14585,14586,14587,14588,14589,14590,14591,14592,14593,14594,14595,14596,14597,14598,14599,14600,14601,14602,14603,14604,14605,14606,14607,14608,14609,14610,14611,14612,14613,14614,14615,14616,14617,14618,14619,14620,14621,14622,14623,14624,14625,14626,14627,14628,14629,14630,14631,14632,14633,14634,14635,14636,14637,14638,14639,14640,14641,14642,14643,14644,14645,14646,14647,14648,14649,14650,14651,14652,14653,14654,14655,14656,14657,14658,14659,14660,14661,14662,14663,14664,14665,14666,14667,14668,14669,14670,14671,14672,14673,14674,14675,14676,14677,14678,14679,14680,14681,14682,14683,14684,14685,14686,14687,14688,14689,14690,14691,14692,14693,14694,14695,14696,14697,14698,14699,14700,14701,14702,14703,14704,14705,14706,14707,14708,14709,14710,14711,14712,14713,14714,14715,14716,14717,14718,14719,14720,14721,14722,14723,14724,14725,14726,14727,14728,14729,14730,14731,14732,14733,14734,14735,14736,14737,14738,14739,14740,14741,14742,14743,14744,14745,14746,14747,14748,14749,14750,14751,14752,14753,14754,14755,14756,14757,14758,14759,14760,14761,14762,14763,14764,14765,14766,14767,14768,14769,14770,14771,14772,14773,14774,14775,14776,14777,14778,14779,14780,14781,14782,14783,14784,14785,14786,14787,14788,14789,14790,14791,14792,14793,14794,14795,14796,14797,14798,14799,14800,14801,14802,14803,14804,14805,14806,14807,14808,14809,14810,14811,14812,14813,14814,14815,14816,14817,14818,14819,14820,14821,14822,14823,14824,14825,14826,14827,14828,14829,14830,14831,14832,14833,14834,14835,14836,14837,14838,14839,14840,14841,14842,14843,14844,14845,14846,14847,14848,14849,14850,14851,14852,14853,14854,14855,14856,14857,14858,14859,14860,14861,14862,14863,14864,14865,14866,14867,14868,14869,14870,14871,14872,14873,14874,14875,14876,14877,14878,14879,14880,14881,14882,14883,14884,14885,14886,14887,14888,14889,14890,14891,14892,14893,14894,14895,14896,14897,14898,14899,14900,14901,14902,14903,14904,14905,14906,14907,14908,14909,14910,14911,14912,14913,14914,14915,14916,14917,14918,14919,14920,14921,14922,14923,14924,14925,14926,14927,14928,14929,14930,14931,14932,14933,14934,14935,14936,14937,14938,14939,14940,14941,14942,14943,14944,14945,14946,14947,14948,14949,14950,14951,14952,14953,14954,14955,14956,14957,14958,14959,14960,14961,14962,14963,14964,14965,14966,14967,14968,14969,14970,14971,14972,14973,14974,14975,14976,14977,14978,14979,14980,14981,14982,14983,14984,14985,14986,14987,14988,14989,14990,14991,14992,14993,14994,14995,14996,14997,14998,14999,15e3,15001,15002,15003,15004,15005,15006,15007,15008,15009,15010,15011,15012,15013,15014,15015,15016,15017,15018,15019,15020,15021,15022,15023,15024,15025,15026,15027,15028,15029,15030,15031,15032,15033,15034,15035,15036,15037,15038,15039,15040,15041,15042,15043,15044,15045,15046,15047,15048,15049,15050,15051,15052,15053,15054,15055,15056,15057,15058,15059,15060,15061,15062,15063,15064,15065,15066,15067,15068,15069,15070,15071,15072,15073,15074,15075,15076,15077,15078,15079,15080,15081,15082,15083,15084,15085,15086,15087,15088,15089,15090,15091,15092,15093,15094,15095,15096,15097,15098,15099,15100,15101,15102,15103,15104,15105,15106,15107,15108,15109,15110,15111,15112,15113,15114,15115,15116,15117,15118,15119,15120,15121,15122,15123,15124,15125,15126,15127,15128,15129,15130,15131,15132,15133,15134,15135,15136,15137,15138,15139,15140,15141,15142,15143,15144,15145,15146,15147,15148,15149,15150,15151,15152,15153,15154,15155,15156,15157,15158,15159,15160,15161,15162,15163,15164,15165,15166,15167,15168,15169,15170,15171,15172,15173,15174,15175,15176,15177,15178,15179,15180,15181,15182,15183,15184,15185,15186,15187,15188,15189,15190,15191,15192,15193,15194,15195,15196,15197,15198,15199,15200,15201,15202,15203,15204,15205,15206,15207,15208,15209,15210,15211,15212,15213,15214,15215,15216,15217,15218,15219,15220,15221,15222,15223,15224,15225,15226,15227,15228,15229,15230,15231,15232,15233,15234,15235,15236,15237,15238,15239,15240,15241,15242,15243,15244,15245,15246,15247,15248,15249,15250,15251,15252,15253,15254,15255,15256,15257,15258,15259,15260,15261,15262,15263,15264,15265,15266,15267,15268,15269,15270,15271,15272,15273,15274,15275,15276,15277,15278,15279,15280,15281,15282,15283,15284,15285,15286,15287,15288,15289,15290,15291,15292,15293,15294,15295,15296,15297,15298,15299,15300,15301,15302,15303,15304,15305,15306,15307,15308,15309,15310,15311,15312,15313,15314,15315,15316,15317,15318,15319,15320,15321,15322,15323,15324,15325,15326,15327,15328,15329,15330,15331,15332,15333,15334,15335,15336,15337,15338,15339,15340,15341,15342,15343,15344,15345,15346,15347,15348,15349,15350,15351,15352,15353,15354,15355,15356,15357,15358,15359,15360,15361,15362,15363,15364,15365,15366,15367,15368,15369,15370,15371,15372,15373,15374,15375,15376,15377,15378,15379,15380,15381,15382,15383,15384,15385,15386,15387,15388,15389,15390,15391,15392,15393,15394,15395,15396,15397,15398,15399,15400,15401,15402,15403,15404,15405,15406,15407,15408,15409,15410,15411,15412,15413,15414,15415,15416,15417,15418,15419,15420,15421,15422,15423,15424,15425,15426,15427,15428,15429,15430,15431,15432,15433,15434,15435,15436,15437,15438,15439,15440,15441,15442,15443,15444,15445,15446,15447,15448,15449,15450,15451,15452,15453,15454,15455,15456,15457,15458,15459,15460,15461,15462,15463,15464,15465,15466,15467,15468,15469,15470,15471,15472,15473,15474,15475,15476,15477,15478,15479,15480,15481,15482,15483,15484,15485,15486,15487,15488,15489,15490,15491,15492,15493,15494,15495,15496,15497,15498,15499,15500,15501,15502,15503,15504,15505,15506,15507,15508,15509,15510,15511,15512,15513,15514,15515,15516,15517,15518,15519,15520,15521,15522,15523,15524,15525,15526,15527,15528,15529,15530,15531,15532,15533,15534,15535,15536,15537,15538,15539,15540,15541,15542,15543,15544,15545,15546,15547,15548,15549,15550,15551,15552,15553,15554,15555,15556,15557,15558,15559,15560,15561,15562,15563,15564,15565,15566,15567,15568,15569,15570,15571,15572,15573,15574,15575,15576,15577,15578,15579,15580,15581,15582,15583,15584,15585,15586,15587,15588,15589,15590,15591,15592,15593,15594,15595,15596,15597,15598,15599,15600,15601,15602,15603,15604,15605,15606,15607,15608,15609,15610,15611,15612,15613,15614,15615,15616,15617,15618,15619,15620,15621,15622,15623,15624,15625,15626,15627,15628,15629,15630,15631,15632,15633,15634,15635,15636,15637,15638,15639,15640,15641,15642,15643,15644,15645,15646,15647,15648,15649,15650,15651,15652,15653,15654,15655,15656,15657,15658,15659,15660,15661,15662,15663,15664,15665,15666,15667,15668,15669,15670,15671,15672,15673,15674,15675,15676,15677,15678,15679,15680,15681,15682,15683,15684,15685,15686,15687,15688,15689,15690,15691,15692,15693,15694,15695,15696,15697,15698,15699,15700,15701,15702,15703,15704,15705,15706,15707,15708,15709,15710,15711,15712,15713,15714,15715,15716,15717,15718,15719,15720,15721,15722,15723,15724,15725,15726,15727,15728,15729,15730,15731,15732,15733,15734,15735,15736,15737,15738,15739,15740,15741,15742,15743,15744,15745,15746,15747,15748,15749,15750,15751,15752,15753,15754,15755,15756,15757,15758,15759,15760,15761,15762,15763,15764,15765,15766,15767,15768,15769,15770,15771,15772,15773,15774,15775,15776,15777,15778,15779,15780,15781,15782,15783,15784,15785,15786,15787,15788,15789,15790,15791,15792,15793,15794,15795,15796,15797,15798,15799,15800,15801,15802,15803,15804,15805,15806,15807,15808,15809,15810,15811,15812,15813,15814,15815,15816,15817,15818,15819,15820,15821,15822,15823,15824,15825,15826,15827,15828,15829,15830,15831,15832,15833,15834,15835,15836,15837,15838,15839,15840,15841,15842,15843,15844,15845,15846,15847,15848,15849,15850,15851,15852,15853,15854,15855,15856,15857,15858,15859,15860,15861,15862,15863,15864,15865,15866,15867,15868,15869,15870,15871,15872,15873,15874,15875,15876,15877,15878,15879,15880,15881,15882,15883,15884,15885,15886,15887,15888,15889,15890,15891,15892,15893,15894,15895,15896,15897,15898,15899,15900,15901,15902,15903,15904,15905,15906,15907,15908,15909,15910,15911,15912,15913,15914,15915,15916,15917,15918,15919,15920,15921,15922,15923,15924,15925,15926,15927,15928,15929,15930,15931,15932,15933,15934,15935,15936,15937,15938,15939,15940,15941,15942,15943,15944,15945,15946,15947,15948,15949,15950,15951,15952,15953,15954,15955,15956,15957,15958,15959,15960,15961,15962,15963,15964,15965,15966,15967,15968,15969,15970,15971,15972,15973,15974,15975,15976,15977,15978,15979,15980,15981,15982,15983,15984,15985,15986,15987,15988,15989,15990,15991,15992,15993,15994,15995,15996,15997,15998,15999,16e3,16001,16002,16003,16004,16005,16006,16007,16008,16009,16010,16011,16012,16013,16014,16015,16016,16017,16018,16019,16020,16021,16022,16023,16024,16025,16026,16027,16028,16029,16030,16031,16032,16033,16034,16035,16036,16037,16038,16039,16040,16041,16042,16043,16044,16045,16046,16047,16048,16049,16050,16051,16052,16053,16054,16055,16056,16057,16058,16059,16060,16061,16062,16063,16064,16065,16066,16067,16068,16069,16070,16071,16072,16073,16074,16075,16076,16077,16078,16079,16080,16081,16082,16083,16084,16085,16086,16087,16088,16089,16090,16091,16092,16093,16094,16095,16096,16097,16098,16099,16100,16101,16102,16103,16104,16105,16106,16107,16108,16109,16110,16111,16112,16113,16114,16115,16116,16117,16118,16119,16120,16121,16122,16123,16124,16125,16126,16127,16128,16129,16130,16131,16132,16133,16134,16135,16136,16137,16138,16139,16140,16141,16142,16143,16144,16145,16146,16147,16148,16149,16150,16151,16152,16153,16154,16155,16156,16157,16158,16159,16160,16161,16162,16163,16164,16165,16166,16167,16168,16169,16170,16171,16172,16173,16174,16175,16176,16177,16178,16179,16180,16181,16182,16183,16184,16185,16186,16187,16188,16189,16190,16191,16192,16193,16194,16195,16196,16197,16198,16199,16200,16201,16202,16203,16204,16205,16206,16207,16208,16209,16210,16211,16212,16213,16214,16215,16216,16217,16218,16219,16220,16221,16222,16223,16224,16225,16226,16227,16228,16229,16230,16231,16232,16233,16234,16235,16236,16237,16238,16239,16240,16241,16242,16243,16244,16245,16246,16247,16248,16249,16250,16251,16252,16253,16254,16255,16256,16257,16258,16259,16260,16261,16262,16263,16264,16265,16266,16267,16268,16269,16270,16271,16272,16273,16274,16275,16276,16277,16278,16279,16280,16281,16282,16283,16284,16285,16286,16287,16288,16289,16290,16291,16292,16293,16294,16295,16296,16297,16298,16299,16300,16301,16302,16303,16304,16305,16306,16307,16308,16309,16310,16311,16312,16313,16314,16315,16316,16317,16318,16319,16320,16321,16322,16323,16324,16325,16326,16327,16328,16329,16330,16331,16332,16333,16334,16335,16336,16337,16338,16339,16340,16341,16342,16343,16344,16345,16346,16347,16348,16349,16350,16351,16352,16353,16354,16355,16356,16357,16358,16359,16360,16361,16362,16363,16364,16365,16366,16367,16368,16369,16370,16371,16372,16373,16374,16375,16376,16377,16378,16379,16380,16381,16382,16383,16384,16385,16386,16387,16388,16389,16390,16391,16392,16393,16394,16395,16396,16397,16398,16399,16400,16401,16402,16403,16404,16405,16406,16407,16408,16409,16410,16411,16412,16413,16414,16415,16416,16417,16418,16419,16420,16421,16422,16423,16424,16425,16426,16427,16428,16429,16430,16431,16432,16433,16434,16435,16436,16437,16438,16439,16440,16441,16442,16443,16444,16445,16446,16447,16448,16449,16450,16451,16452,16453,16454,16455,16456,16457,16458,16459,16460,16461,16462,16463,16464,16465,16466,16467,16468,16469,16470,16471,16472,16473,16474,16475,16476,16477,16478,16479,16480,16481,16482,16483,16484,16485,16486,16487,16488,16489,16490,16491,16492,16493,16494,16495,16496,16497,16498,16499,16500,16501,16502,16503,16504,16505,16506,16507,16508,16509,16510,16511,16512,16513,16514,16515,16516,16517,16518,16519,16520,16521,16522,16523,16524,16525,16526,16527,16528,16529,16530,16531,16532,16533,16534,16535,16536,16537,16538,16539,16540,16541,16542,16543,16544,16545,16546,16547,16548,16549,16550,16551,16552,16553,16554,16555,16556,16557,16558,16559,16560,16561,16562,16563,16564,16565,16566,16567,16568,16569,16570,16571,16572,16573,16574,16575,16576,16577,16578,16579,16580,16581,16582,16583,16584,16585,16586,16587,16588,16589,16590,16591,16592,16593,16594,16595,16596,16597,16598,16599,16600,16601,16602,16603,16604,16605,16606,16607,16608,16609,16610,16611,16612,16613,16614,16615,16616,16617,16618,16619,16620,16621,16622,16623,16624,16625,16626,16627,16628,16629,16630,16631,16632,16633,16634,16635,16636,16637,16638,16639,16640,16641,16642,16643,16644,16645,16646,16647,16648,16649,16650,16651,16652,16653,16654,16655,16656,16657,16658,16659,16660,16661,16662,16663,16664,16665,16666,16667,16668,16669,16670,16671,16672,16673,16674,16675,16676,16677,16678,16679,16680,16681,16682,16683,16684,16685,16686,16687,16688,16689,16690,16691,16692,16693,16694,16695,16696,16697,16698,16699,16700,16701,16702,16703,16704,16705,16706,16707,16708,16709,16710,16711,16712,16713,16714,16715,16716,16717,16718,16719,16720,16721,16722,16723,16724,16725,16726,16727,16728,16729,16730,16731,16732,16733,16734,16735,16736,16737,16738,16739,16740,16741,16742,16743,16744,16745,16746,16747,16748,16749,16750,16751,16752,16753,16754,16755,16756,16757,16758,16759,16760,16761,16762,16763,16764,16765,16766,16767,16768,16769,16770,16771,16772,16773,16774,16775,16776,16777,16778,16779,16780,16781,16782,16783,16784,16785,16786,16787,16788,16789,16790,16791,16792,16793,16794,16795,16796,16797,16798,16799,16800,16801,16802,16803,16804,16805,16806,16807,16808,16809,16810,16811,16812,16813,16814,16815,16816,16817,16818,16819,16820,16821,16822,16823,16824,16825,16826,16827,16828,16829,16830,16831,16832,16833,16834,16835,16836,16837,16838,16839,16840,16841,16842,16843,16844,16845,16846,16847,16848,16849,16850,16851,16852,16853,16854,16855,16856,16857,16858,16859,16860,16861,16862,16863,16864,16865,16866,16867,16868,16869,16870,16871,16872,16873,16874,16875,16876,16877,16878,16879,16880,16881,16882,16883,16884,16885,16886,16887,16888,16889,16890,16891,16892,16893,16894,16895,16896,16897,16898,16899,16900,16901,16902,16903,16904,16905,16906,16907,16908,16909,16910,16911,16912,16913,16914,16915,16916,16917,16918,16919,16920,16921,16922,16923,16924,16925,16926,16927,16928,16929,16930,16931,16932,16933,16934,16935,16936,16937,16938,16939,16940,16941,16942,16943,16944,16945,16946,16947,16948,16949,16950,16951,16952,16953,16954,16955,16956,16957,16958,16959,16960,16961,16962,16963,16964,16965,16966,16967,16968,16969,16970,16971,16972,16973,16974,16975,16976,16977,16978,16979,16980,16981,16982,16983,16984,16985,16986,16987,16988,16989,16990,16991,16992,16993,16994,16995,16996,16997,16998,16999,17e3,17001,17002,17003,17004,17005,17006,17007,17008,17009,17010,17011,17012,17013,17014,17015,17016,17017,17018,17019,17020,17021,17022,17023,17024,17025,17026,17027,17028,17029,17030,17031,17032,17033,17034,17035,17036,17037,17038,17039,17040,17041,17042,17043,17044,17045,17046,17047,17048,17049,17050,17051,17052,17053,17054,17055,17056,17057,17058,17059,17060,17061,17062,17063,17064,17065,17066,17067,17068,17069,17070,17071,17072,17073,17074,17075,17076,17077,17078,17079,17080,17081,17082,17083,17084,17085,17086,17087,17088,17089,17090,17091,17092,17093,17094,17095,17096,17097,17098,17099,17100,17101,17102,17103,17104,17105,17106,17107,17108,17109,17110,17111,17112,17113,17114,17115,17116,17117,17118,17119,17120,17121,17122,17123,17124,17125,17126,17127,17128,17129,17130,17131,17132,17133,17134,17135,17136,17137,17138,17139,17140,17141,17142,17143,17144,17145,17146,17147,17148,17149,17150,17151,17152,17153,17154,17155,17156,17157,17158,17159,17160,17161,17162,17163,17164,17165,17166,17167,17168,17169,17170,17171,17172,17173,17174,17175,17176,17177,17178,17179,17180,17181,17182,17183,17184,17185,17186,17187,17188,17189,17190,17191,17192,17193,17194,17195,17196,17197,17198,17199,17200,17201,17202,17203,17204,17205,17206,17207,17208,17209,17210,17211,17212,17213,17214,17215,17216,17217,17218,17219,17220,17221,17222,17223,17224,17225,17226,17227,17228,17229,17230,17231,17232,17233,17234,17235,17236,17237,17238,17239,17240,17241,17242,17243,17244,17245,17246,17247,17248,17249,17250,17251,17252,17253,17254,17255,17256,17257,17258,17259,17260,17261,17262,17263,17264,17265,17266,17267,17268,17269,17270,17271,17272,17273,17274,17275,17276,17277,17278,17279,17280,17281,17282,17283,17284,17285,17286,17287,17288,17289,17290,17291,17292,17293,17294,17295,17296,17297,17298,17299,17300,17301,17302,17303,17304,17305,17306,17307,17308,17309,17310,17311,17312,17313,17314,17315,17316,17317,17318,17319,17320,17321,17322,17323,17324,17325,17326,17327,17328,17329,17330,17331,17332,17333,17334,17335,17336,17337,17338,17339,17340,17341,17342,17343,17344,17345,17346,17347,17348,17349,17350,17351,17352,17353,17354,17355,17356,17357,17358,17359,17360,17361,17362,17363,17364,17365,17366,17367,17368,17369,17370,17371,17372,17373,17374,17375,17376,17377,17378,17379,17380,17381,17382,17383,17384,17385,17386,17387,17388,17389,17390,17391,17392,17393,17394,17395,17396,17397,17398,17399,17400,17401,17402,17403,17404,17405,17406,17407,17408,17409,17410,17411,17412,17413,17414,17415,17416,17417,17418,17419,17420,17421,17422,17423,17424,17425,17426,17427,17428,17429,17430,17431,17432,17433,17434,17435,17436,17437,17438,17439,17440,17441,17442,17443,17444,17445,17446,17447,17448,17449,17450,17451,17452,17453,17454,17455,17456,17457,17458,17459,17460,17461,17462,17463,17464,17465,17466,17467,17468,17469,17470,17471,17472,17473,17474,17475,17476,17477,17478,17479,17480,17481,17482,17483,17484,17485,17486,17487,17488,17489,17490,17491,17492,17493,17494,17495,17496,17497,17498,17499,17500,17501,17502,17503,17504,17505,17506,17507,17508,17509,17510,17511,17512,17513,17514,17515,17516,17517,17518,17519,17520,17521,17522,17523,17524,17525,17526,17527,17528,17529,17530,17531,17532,17533,17534,17535,17536,17537,17538,17539,17540,17541,17542,17543,17544,17545,17546,17547,17548,17549,17550,17551,17552,17553,17554,17555,17556,17557,17558,17559,17560,17561,17562,17563,17564,17565,17566,17567,17568,17569,17570,17571,17572,17573,17574,17575,17576,17577,17578,17579,17580,17581,17582,17583,17584,17585,17586,17587,17588,17589,17590,17591,17592,17593,17594,17595,17596,17597,17598,17599,17600,17601,17602,17603,17604,17605,17606,17607,17608,17609,17610,17611,17612,17613,17614,17615,17616,17617,17618,17619,17620,17621,17622,17623,17624,17625,17626,17627,17628,17629,17630,17631,17632,17633,17634,17635,17636,17637,17638,17639,17640,17641,17642,17643,17644,17645,17646,17647,17648,17649,17650,17651,17652,17653,17654,17655,17656,17657,17658,17659,17660,17661,17662,17663,17664,17665,17666,17667,17668,17669,17670,17671,17672,17673,17674,17675,17676,17677,17678,17679,17680,17681,17682,17683,17684,17685,17686,17687,17688,17689,17690,17691,17692,17693,17694,17695,17696,17697,17698,17699,17700,17701,17702,17703,17704,17705,17706,17707,17708,17709,17710,17711,17712,17713,17714,17715,17716,17717,17718,17719,17720,17721,17722,17723,17724,17725,17726,17727,17728,17729,17730,17731,17732,17733,17734,17735,17736,17737,17738,17739,17740,17741,17742,17743,17744,17745,17746,17747,17748,17749,17750,17751,17752,17753,17754,17755,17756,17757,17758,17759,17760,17761,17762,17763,17764,17765,17766,17767,17768,17769,17770,17771,17772,17773,17774,17775,17776,17777,17778,17779,17780,17781,17782,17783,17784,17785,17786,17787,17788,17789,17790,17791,17792,17793,17794,17795,17796,17797,17798,17799,17800,17801,17802,17803,17804,17805,17806,17807,17808,17809,17810,17811,17812,17813,17814,17815,17816,17817,17818,17819,17820,17821,17822,17823,17824,17825,17826,17827,17828,17829,17830,17831,17832,17833,17834,17835,17836,17837,17838,17839,17840,17841,17842,17843,17844,17845,17846,17847,17848,17849,17850,17851,17852,17853,17854,17855,17856,17857,17858,17859,17860,17861,17862,17863,17864,17865,17866,17867,17868,17869,17870,17871,17872,17873,17874,17875,17876,17877,17878,17879,17880,17881,17882,17883,17884,17885,17886,17887,17888,17889,17890,17891,17892,17893,17894,17895,17896,17897,17898,17899,17900,17901,17902,17903,17904,17905,17906,17907,17908,17909,17910,17911,17912,17913,17914,17915,17916,17917,17918,17919,17920,17921,17922,17923,17924,17925,17926,17927,17928,17929,17930,17931,17932,17933,17934,17935,17936,17937,17938,17939,17940,17941,17942,17943,17944,17945,17946,17947,17948,17949,17950,17951,17952,17953,17954,17955,17956,17957,17958,17959,17960,17961,17962,17963,17964,17965,17966,17967,17968,17969,17970,17971,17972,17973,17974,17975,17976,17977,17978,17979,17980,17981,17982,17983,17984,17985,17986,17987,17988,17989,17990,17991,17992,17993,17994,17995,17996,17997,17998,17999,18e3,18001,18002,18003,18004,18005,18006,18007,18008,18009,18010,18011,18012,18013,18014,18015,18016,18017,18018,18019,18020,18021,18022,18023,18024,18025,18026,18027,18028,18029,18030,18031,18032,18033,18034,18035,18036,18037,18038,18039,18040,18041,18042,18043,18044,18045,18046,18047,18048,18049,18050,18051,18052,18053,18054,18055,18056,18057,18058,18059,18060,18061,18062,18063,18064,18065,18066,18067,18068,18069,18070,18071,18072,18073,18074,18075,18076,18077,18078,18079,18080,18081,18082,18083,18084,18085,18086,18087,18088,18089,18090,18091,18092,18093,18094,18095,18096,18097,18098,18099,18100,18101,18102,18103,18104,18105,18106,18107,18108,18109,18110,18111,18112,18113,18114,18115,18116,18117,18118,18119,18120,18121,18122,18123,18124,18125,18126,18127,18128,18129,18130,18131,18132,18133,18134,18135,18136,18137,18138,18139,18140,18141,18142,18143,18144,18145,18146,18147,18148,18149,18150,18151,18152,18153,18154,18155,18156,18157,18158,18159,18160,18161,18162,18163,18164,18165,18166,18167,18168,18169,18170,18171,18172,18173,18174,18175,18176,18177,18178,18179,18180,18181,18182,18183,18184,18185,18186,18187,18188,18189,18190,18191,18192,18193,18194,18195,18196,18197,18198,18199,18200,18201,18202,18203,18204,18205,18206,18207,18208,18209,18210,18211,18212,18213,18214,18215,18216,18217,18218,18219,18220,18221,18222,18223,18224,18225,18226,18227,18228,18229,18230,18231,18232,18233,18234,18235,18236,18237,18238,18239,18240,18241,18242,18243,18244,18245,18246,18247,18248,18249,18250,18251,18252,18253,18254,18255,18256,18257,18258,18259,18260,18261,18262,18263,18264,18265,18266,18267,18268,18269,18270,18271,18272,18273,18274,18275,18276,18277,18278,18279,18280,18281,18282,18283,18284,18285,18286,18287,18288,18289,18290,18291,18292,18293,18294,18295,18296,18297,18298,18299,18300,18301,18302,18303,18304,18305,18306,18307,18308,18309,18310,18311,18312,18313,18314,18315,18316,18317,18318,18319,18320,18321,18322,18323,18324,18325,18326,18327,18328,18329,18330,18331,18332,18333,18334,18335,18336,18337,18338,18339,18340,18341,18342,18343,18344,18345,18346,18347,18348,18349,18350,18351,18352,18353,18354,18355,18356,18357,18358,18359,18360,18361,18362,18363,18364,18365,18366,18367,18368,18369,18370,18371,18372,18373,18374,18375,18376,18377,18378,18379,18380,18381,18382,18383,18384,18385,18386,18387,18388,18389,18390,18391,18392,18393,18394,18395,18396,18397,18398,18399,18400,18401,18402,18403,18404,18405,18406,18407,18408,18409,18410,18411,18412,18413,18414,18415,18416,18417,18418,18419,18420,18421,18422,18423,18424,18425,18426,18427,18428,18429,18430,18431,18432,18433,18434,18435,18436,18437,18438,18439,18440,18441,18442,18443,18444,18445,18446,18447,18448,18449,18450,18451,18452,18453,18454,18455,18456,18457,18458,18459,18460,18461,18462,18463,18464,18465,18466,18467,18468,18469,18470,18471,18472,18473,18474,18475,18476,18477,18478,18479,18480,18481,18482,18483,18484,18485,18486,18487,18488,18489,18490,18491,18492,18493,18494,18495,18496,18497,18498,18499,18500,18501,18502,18503,18504,18505,18506,18507,18508,18509,18510,18511,18512,18513,18514,18515,18516,18517,18518,18519,18520,18521,18522,18523,18524,18525,18526,18527,18528,18529,18530,18531,18532,18533,18534,18535,18536,18537,18538,18539,18540,18541,18542,18543,18544,18545,18546,18547,18548,18549,18550,18551,18552,18553,18554,18555,18556,18557,18558,18559,18560,18561,18562,18563,18564,18565,18566,18567,18568,18569,18570,18571,18572,18573,18574,18575,18576,18577,18578,18579,18580,18581,18582,18583,18584,18585,18586,18587,18588,18589,18590,18591,18592,18593,18594,18595,18596,18597,18598,18599,18600,18601,18602,18603,18604,18605,18606,18607,18608,18609,18610,18611,18612,18613,18614,18615,18616,18617,18618,18619,18620,18621,18622,18623,18624,18625,18626,18627,18628,18629,18630,18631,18632,18633,18634,18635,18636,18637,18638,18639,18640,18641,18642,18643,18644,18645,18646,18647,18648,18649,18650,18651,18652,18653,18654,18655,18656,18657,18658,18659,18660,18661,18662,18663,18664,18665,18666,18667,18668,18669,18670,18671,18672,18673,18674,18675,18676,18677,18678,18679,18680,18681,18682,18683,18684,18685,18686,18687,18688,18689,18690,18691,18692,18693,18694,18695,18696,18697,18698,18699,18700,18701,18702,18703,18704,18705,18706,18707,18708,18709,18710,18711,18712,18713,18714,18715,18716,18717,18718,18719,18720,18721,18722,18723,18724,18725,18726,18727,18728,18729,18730,18731,18732,18733,18734,18735,18736,18737,18738,18739,18740,18741,18742,18743,18744,18745,18746,18747,18748,18749,18750,18751,18752,18753,18754,18755,18756,18757,18758,18759,18760,18761,18762,18763,18764,18765,18766,18767,18768,18769,18770,18771,18772,18773,18774,18775,18776,18777,18778,18779,18780,18781,18782,18783,18784,18785,18786,18787,18788,18789,18790,18791,18792,18793,18794,18795,18796,18797,18798,18799,18800,18801,18802,18803,18804,18805,18806,18807,18808,18809,18810,18811,18812,18813,18814,18815,18816,18817,18818,18819,18820,18821,18822,18823,18824,18825,18826,18827,18828,18829,18830,18831,18832,18833,18834,18835,18836,18837,18838,18839,18840,18841,18842,18843,18844,18845,18846,18847,18848,18849,18850,18851,18852,18853,18854,18855,18856,18857,18858,18859,18860,18861,18862,18863,18864,18865,18866,18867,18868,18869,18870,18871,18872,18873,18874,18875,18876,18877,18878,18879,18880,18881,18882,18883,18884,18885,18886,18887,18888,18889,18890,18891,18892,18893,18894,18895,18896,18897,18898,18899,18900,18901,18902,18903,18904,18905,18906,18907,18908,18909,18910,18911,18912,18913,18914,18915,18916,18917,18918,18919,18920,18921,18922,18923,18924,18925,18926,18927,18928,18929,18930,18931,18932,18933,18934,18935,18936,18937,18938,18939,18940,18941,18942,18943,18944,18945,18946,18947,18948,18949,18950,18951,18952,18953,18954,18955,18956,18957,18958,18959,18960,18961,18962,18963,18964,18965,18966,18967,18968,18969,18970,18971,18972,18973,18974,18975,18976,18977,18978,18979,18980,18981,18982,18983,18984,18985,18986,18987,18988,18989,18990,18991,18992,18993,18994,18995,18996,18997,18998,18999,19e3,19001,19002,19003,19004,19005,19006,19007,19008,19009,19010,19011,19012,19013,19014,19015,19016,19017,19018,19019,19020,19021,19022,19023,19024,19025,19026,19027,19028,19029,19030,19031,19032,19033,19034,19035,19036,19037,19038,19039,19040,19041,19042,19043,19044,19045,19046,19047,19048,19049,19050,19051,19052,19053,19054,19055,19056,19057,19058,19059,19060,19061,19062,19063,19064,19065,19066,19067,19068,19069,19070,19071,19072,19073,19074,19075,19076,19077,19078,19079,19080,19081,19082,19083,19084,19085,19086,19087,19088,19089,19090,19091,19092,19093,19094,19095,19096,19097,19098,19099,19100,19101,19102,19103,19104,19105,19106,19107,19108,19109,19110,19111,19112,19113,19114,19115,19116,19117,19118,19119,19120,19121,19122,19123,19124,19125,19126,19127,19128,19129,19130,19131,19132,19133,19134,19135,19136,19137,19138,19139,19140,19141,19142,19143,19144,19145,19146,19147,19148,19149,19150,19151,19152,19153,19154,19155,19156,19157,19158,19159,19160,19161,19162,19163,19164,19165,19166,19167,19168,19169,19170,19171,19172,19173,19174,19175,19176,19177,19178,19179,19180,19181,19182,19183,19184,19185,19186,19187,19188,19189,19190,19191,19192,19193,19194,19195,19196,19197,19198,19199,19200,19201,19202,19203,19204,19205,19206,19207,19208,19209,19210,19211,19212,19213,19214,19215,19216,19217,19218,19219,19220,19221,19222,19223,19224,19225,19226,19227,19228,19229,19230,19231,19232,19233,19234,19235,19236,19237,19238,19239,19240,19241,19242,19243,19244,19245,19246,19247,19248,19249,19250,19251,19252,19253,19254,19255,19256,19257,19258,19259,19260,19261,19262,19263,19264,19265,19266,19267,19268,19269,19270,19271,19272,19273,19274,19275,19276,19277,19278,19279,19280,19281,19282,19283,19284,19285,19286,19287,19288,19289,19290,19291,19292,19293,19294,19295,19296,19297,19298,19299,19300,19301,19302,19303,19304,19305,19306,19307,19308,19309,19310,19311,19312,19313,19314,19315,19316,19317,19318,19319,19320,19321,19322,19323,19324,19325,19326,19327,19328,19329,19330,19331,19332,19333,19334,19335,19336,19337,19338,19339,19340,19341,19342,19343,19344,19345,19346,19347,19348,19349,19350,19351,19352,19353,19354,19355,19356,19357,19358,19359,19360,19361,19362,19363,19364,19365,19366,19367,19368,19369,19370,19371,19372,19373,19374,19375,19376,19377,19378,19379,19380,19381,19382,19383,19384,19385,19386,19387,19388,19389,19390,19391,19392,19393,19394,19395,19396,19397,19398,19399,19400,19401,19402,19403,19404,19405,19406,19407,19408,19409,19410,19411,19412,19413,19414,19415,19416,19417,19418,19419,19420,19421,19422,19423,19424,19425,19426,19427,19428,19429,19430,19431,19432,19433,19434,19435,19436,19437,19438,19439,19440,19441,19442,19443,19444,19445,19446,19447,19448,19449,19450,19451,19452,19453,19454,19455,19456,19457,19458,19459,19460,19461,19462,19463,19464,19465,19466,19467,19468,19469,19470,19471,19472,19473,19474,19475,19476,19477,19478,19479,19480,19481,19482,19483,19484,19485,19486,19487,19488,19489,19490,19491,19492,19493,19494,19495,19496,19497,19498,19499,19500,19501,19502,19503,19504,19505,19506,19507,19508,19509,19510,19511,19512,19513,19514,19515,19516,19517,19518,19519,19520,19521,19522,19523,19524,19525,19526,19527,19528,19529,19530,19531,19532,19533,19534,19535,19536,19537,19538,19539,19540,19541,19542,19543,19544,19545,19546,19547,19548,19549,19550,19551,19552,19553,19554,19555,19556,19557,19558,19559,19560,19561,19562,19563,19564,19565,19566,19567,19568,19569,19570,19571,19572,19573,19574,19575,19576,19577,19578,19579,19580,19581,19582,19583,19584,19585,19586,19587,19588,19589,19590,19591,19592,19593,19594,19595,19596,19597,19598,19599,19600,19601,19602,19603,19604,19605,19606,19607,19608,19609,19610,19611,19612,19613,19614,19615,19616,19617,19618,19619,19620,19621,19622,19623,19624,19625,19626,19627,19628,19629,19630,19631,19632,19633,19634,19635,19636,19637,19638,19639,19640,19641,19642,19643,19644,19645,19646,19647,19648,19649,19650,19651,19652,19653,19654,19655,19656,19657,19658,19659,19660,19661,19662,19663,19664,19665,19666,19667,19668,19669,19670,19671,19672,19673,19674,19675,19676,19677,19678,19679,19680,19681,19682,19683,19684,19685,19686,19687,19688,19689,19690,19691,19692,19693,19694,19695,19696,19697,19698,19699,19700,19701,19702,19703,19704,19705,19706,19707,19708,19709,19710,19711,19712,19713,19714,19715,19716,19717,19718,19719,19720,19721,19722,19723,19724,19725,19726,19727,19728,19729,19730,19731,19732,19733,19734,19735,19736,19737,19738,19739,19740,19741,19742,19743,19744,19745,19746,19747,19748,19749,19750,19751,19752,19753,19754,19755,19756,19757,19758,19759,19760,19761,19762,19763,19764,19765,19766,19767,19768,19769,19770,19771,19772,19773,19774,19775,19776,19777,19778,19779,19780,19781,19782,19783,19784,19785,19786,19787,19788,19789,19790,19791,19792,19793,19794,19795,19796,19797,19798,19799,19800,19801,19802,19803,19804,19805,19806,19807,19808,19809,19810,19811,19812,19813,19814,19815,19816,19817,19818,19819,19820,19821,19822,19823,19824,19825,19826,19827,19828,19829,19830,19831,19832,19833,19834,19835,19836,19837,19838,19839,19840,19841,19842,19843,19844,19845,19846,19847,19848,19849,19850,19851,19852,19853,19854,19855,19856,19857,19858,19859,19860,19861,19862,19863,19864,19865,19866,19867,19868,19869,19870,19871,19872,19873,19874,19875,19876,19877,19878,19879,19880,19881,19882,19883,19884,19885,19886,19887,19888,19889,19890,19891,19892,19893,19968,19969,19970,19971,19972,19973,19974,19975,19976,19977,19978,19979,19980,19981,19982,19983,19984,19985,19986,19987,19988,19989,19990,19991,19992,19993,19994,19995,19996,19997,19998,19999,2e4,20001,20002,20003,20004,20005,20006,20007,20008,20009,20010,20011,20012,20013,20014,20015,20016,20017,20018,20019,20020,20021,20022,20023,20024,20025,20026,20027,20028,20029,20030,20031,20032,20033,20034,20035,20036,20037,20038,20039,20040,20041,20042,20043,20044,20045,20046,20047,20048,20049,20050,20051,20052,20053,20054,20055,20056,20057,20058,20059,20060,20061,20062,20063,20064,20065,20066,20067,20068,20069,20070,20071,20072,20073,20074,20075,20076,20077,20078,20079,20080,20081,20082,20083,20084,20085,20086,20087,20088,20089,20090,20091,20092,20093,20094,20095,20096,20097,20098,20099,20100,20101,20102,20103,20104,20105,20106,20107,20108,20109,20110,20111,20112,20113,20114,20115,20116,20117,20118,20119,20120,20121,20122,20123,20124,20125,20126,20127,20128,20129,20130,20131,20132,20133,20134,20135,20136,20137,20138,20139,20140,20141,20142,20143,20144,20145,20146,20147,20148,20149,20150,20151,20152,20153,20154,20155,20156,20157,20158,20159,20160,20161,20162,20163,20164,20165,20166,20167,20168,20169,20170,20171,20172,20173,20174,20175,20176,20177,20178,20179,20180,20181,20182,20183,20184,20185,20186,20187,20188,20189,20190,20191,20192,20193,20194,20195,20196,20197,20198,20199,20200,20201,20202,20203,20204,20205,20206,20207,20208,20209,20210,20211,20212,20213,20214,20215,20216,20217,20218,20219,20220,20221,20222,20223,20224,20225,20226,20227,20228,20229,20230,20231,20232,20233,20234,20235,20236,20237,20238,20239,20240,20241,20242,20243,20244,20245,20246,20247,20248,20249,20250,20251,20252,20253,20254,20255,20256,20257,20258,20259,20260,20261,20262,20263,20264,20265,20266,20267,20268,20269,20270,20271,20272,20273,20274,20275,20276,20277,20278,20279,20280,20281,20282,20283,20284,20285,20286,20287,20288,20289,20290,20291,20292,20293,20294,20295,20296,20297,20298,20299,20300,20301,20302,20303,20304,20305,20306,20307,20308,20309,20310,20311,20312,20313,20314,20315,20316,20317,20318,20319,20320,20321,20322,20323,20324,20325,20326,20327,20328,20329,20330,20331,20332,20333,20334,20335,20336,20337,20338,20339,20340,20341,20342,20343,20344,20345,20346,20347,20348,20349,20350,20351,20352,20353,20354,20355,20356,20357,20358,20359,20360,20361,20362,20363,20364,20365,20366,20367,20368,20369,20370,20371,20372,20373,20374,20375,20376,20377,20378,20379,20380,20381,20382,20383,20384,20385,20386,20387,20388,20389,20390,20391,20392,20393,20394,20395,20396,20397,20398,20399,20400,20401,20402,20403,20404,20405,20406,20407,20408,20409,20410,20411,20412,20413,20414,20415,20416,20417,20418,20419,20420,20421,20422,20423,20424,20425,20426,20427,20428,20429,20430,20431,20432,20433,20434,20435,20436,20437,20438,20439,20440,20441,20442,20443,20444,20445,20446,20447,20448,20449,20450,20451,20452,20453,20454,20455,20456,20457,20458,20459,20460,20461,20462,20463,20464,20465,20466,20467,20468,20469,20470,20471,20472,20473,20474,20475,20476,20477,20478,20479,20480,20481,20482,20483,20484,20485,20486,20487,20488,20489,20490,20491,20492,20493,20494,20495,20496,20497,20498,20499,20500,20501,20502,20503,20504,20505,20506,20507,20508,20509,20510,20511,20512,20513,20514,20515,20516,20517,20518,20519,20520,20521,20522,20523,20524,20525,20526,20527,20528,20529,20530,20531,20532,20533,20534,20535,20536,20537,20538,20539,20540,20541,20542,20543,20544,20545,20546,20547,20548,20549,20550,20551,20552,20553,20554,20555,20556,20557,20558,20559,20560,20561,20562,20563,20564,20565,20566,20567,20568,20569,20570,20571,20572,20573,20574,20575,20576,20577,20578,20579,20580,20581,20582,20583,20584,20585,20586,20587,20588,20589,20590,20591,20592,20593,20594,20595,20596,20597,20598,20599,20600,20601,20602,20603,20604,20605,20606,20607,20608,20609,20610,20611,20612,20613,20614,20615,20616,20617,20618,20619,20620,20621,20622,20623,20624,20625,20626,20627,20628,20629,20630,20631,20632,20633,20634,20635,20636,20637,20638,20639,20640,20641,20642,20643,20644,20645,20646,20647,20648,20649,20650,20651,20652,20653,20654,20655,20656,20657,20658,20659,20660,20661,20662,20663,20664,20665,20666,20667,20668,20669,20670,20671,20672,20673,20674,20675,20676,20677,20678,20679,20680,20681,20682,20683,20684,20685,20686,20687,20688,20689,20690,20691,20692,20693,20694,20695,20696,20697,20698,20699,20700,20701,20702,20703,20704,20705,20706,20707,20708,20709,20710,20711,20712,20713,20714,20715,20716,20717,20718,20719,20720,20721,20722,20723,20724,20725,20726,20727,20728,20729,20730,20731,20732,20733,20734,20735,20736,20737,20738,20739,20740,20741,20742,20743,20744,20745,20746,20747,20748,20749,20750,20751,20752,20753,20754,20755,20756,20757,20758,20759,20760,20761,20762,20763,20764,20765,20766,20767,20768,20769,20770,20771,20772,20773,20774,20775,20776,20777,20778,20779,20780,20781,20782,20783,20784,20785,20786,20787,20788,20789,20790,20791,20792,20793,20794,20795,20796,20797,20798,20799,20800,20801,20802,20803,20804,20805,20806,20807,20808,20809,20810,20811,20812,20813,20814,20815,20816,20817,20818,20819,20820,20821,20822,20823,20824,20825,20826,20827,20828,20829,20830,20831,20832,20833,20834,20835,20836,20837,20838,20839,20840,20841,20842,20843,20844,20845,20846,20847,20848,20849,20850,20851,20852,20853,20854,20855,20856,20857,20858,20859,20860,20861,20862,20863,20864,20865,20866,20867,20868,20869,20870,20871,20872,20873,20874,20875,20876,20877,20878,20879,20880,20881,20882,20883,20884,20885,20886,20887,20888,20889,20890,20891,20892,20893,20894,20895,20896,20897,20898,20899,20900,20901,20902,20903,20904,20905,20906,20907,20908,20909,20910,20911,20912,20913,20914,20915,20916,20917,20918,20919,20920,20921,20922,20923,20924,20925,20926,20927,20928,20929,20930,20931,20932,20933,20934,20935,20936,20937,20938,20939,20940,20941,20942,20943,20944,20945,20946,20947,20948,20949,20950,20951,20952,20953,20954,20955,20956,20957,20958,20959,20960,20961,20962,20963,20964,20965,20966,20967,20968,20969,20970,20971,20972,20973,20974,20975,20976,20977,20978,20979,20980,20981,20982,20983,20984,20985,20986,20987,20988,20989,20990,20991,20992,20993,20994,20995,20996,20997,20998,20999,21e3,21001,21002,21003,21004,21005,21006,21007,21008,21009,21010,21011,21012,21013,21014,21015,21016,21017,21018,21019,21020,21021,21022,21023,21024,21025,21026,21027,21028,21029,21030,21031,21032,21033,21034,21035,21036,21037,21038,21039,21040,21041,21042,21043,21044,21045,21046,21047,21048,21049,21050,21051,21052,21053,21054,21055,21056,21057,21058,21059,21060,21061,21062,21063,21064,21065,21066,21067,21068,21069,21070,21071,21072,21073,21074,21075,21076,21077,21078,21079,21080,21081,21082,21083,21084,21085,21086,21087,21088,21089,21090,21091,21092,21093,21094,21095,21096,21097,21098,21099,21100,21101,21102,21103,21104,21105,21106,21107,21108,21109,21110,21111,21112,21113,21114,21115,21116,21117,21118,21119,21120,21121,21122,21123,21124,21125,21126,21127,21128,21129,21130,21131,21132,21133,21134,21135,21136,21137,21138,21139,21140,21141,21142,21143,21144,21145,21146,21147,21148,21149,21150,21151,21152,21153,21154,21155,21156,21157,21158,21159,21160,21161,21162,21163,21164,21165,21166,21167,21168,21169,21170,21171,21172,21173,21174,21175,21176,21177,21178,21179,21180,21181,21182,21183,21184,21185,21186,21187,21188,21189,21190,21191,21192,21193,21194,21195,21196,21197,21198,21199,21200,21201,21202,21203,21204,21205,21206,21207,21208,21209,21210,21211,21212,21213,21214,21215,21216,21217,21218,21219,21220,21221,21222,21223,21224,21225,21226,21227,21228,21229,21230,21231,21232,21233,21234,21235,21236,21237,21238,21239,21240,21241,21242,21243,21244,21245,21246,21247,21248,21249,21250,21251,21252,21253,21254,21255,21256,21257,21258,21259,21260,21261,21262,21263,21264,21265,21266,21267,21268,21269,21270,21271,21272,21273,21274,21275,21276,21277,21278,21279,21280,21281,21282,21283,21284,21285,21286,21287,21288,21289,21290,21291,21292,21293,21294,21295,21296,21297,21298,21299,21300,21301,21302,21303,21304,21305,21306,21307,21308,21309,21310,21311,21312,21313,21314,21315,21316,21317,21318,21319,21320,21321,21322,21323,21324,21325,21326,21327,21328,21329,21330,21331,21332,21333,21334,21335,21336,21337,21338,21339,21340,21341,21342,21343,21344,21345,21346,21347,21348,21349,21350,21351,21352,21353,21354,21355,21356,21357,21358,21359,21360,21361,21362,21363,21364,21365,21366,21367,21368,21369,21370,21371,21372,21373,21374,21375,21376,21377,21378,21379,21380,21381,21382,21383,21384,21385,21386,21387,21388,21389,21390,21391,21392,21393,21394,21395,21396,21397,21398,21399,21400,21401,21402,21403,21404,21405,21406,21407,21408,21409,21410,21411,21412,21413,21414,21415,21416,21417,21418,21419,21420,21421,21422,21423,21424,21425,21426,21427,21428,21429,21430,21431,21432,21433,21434,21435,21436,21437,21438,21439,21440,21441,21442,21443,21444,21445,21446,21447,21448,21449,21450,21451,21452,21453,21454,21455,21456,21457,21458,21459,21460,21461,21462,21463,21464,21465,21466,21467,21468,21469,21470,21471,21472,21473,21474,21475,21476,21477,21478,21479,21480,21481,21482,21483,21484,21485,21486,21487,21488,21489,21490,21491,21492,21493,21494,21495,21496,21497,21498,21499,21500,21501,21502,21503,21504,21505,21506,21507,21508,21509,21510,21511,21512,21513,21514,21515,21516,21517,21518,21519,21520,21521,21522,21523,21524,21525,21526,21527,21528,21529,21530,21531,21532,21533,21534,21535,21536,21537,21538,21539,21540,21541,21542,21543,21544,21545,21546,21547,21548,21549,21550,21551,21552,21553,21554,21555,21556,21557,21558,21559,21560,21561,21562,21563,21564,21565,21566,21567,21568,21569,21570,21571,21572,21573,21574,21575,21576,21577,21578,21579,21580,21581,21582,21583,21584,21585,21586,21587,21588,21589,21590,21591,21592,21593,21594,21595,21596,21597,21598,21599,21600,21601,21602,21603,21604,21605,21606,21607,21608,21609,21610,21611,21612,21613,21614,21615,21616,21617,21618,21619,21620,21621,21622,21623,21624,21625,21626,21627,21628,21629,21630,21631,21632,21633,21634,21635,21636,21637,21638,21639,21640,21641,21642,21643,21644,21645,21646,21647,21648,21649,21650,21651,21652,21653,21654,21655,21656,21657,21658,21659,21660,21661,21662,21663,21664,21665,21666,21667,21668,21669,21670,21671,21672,21673,21674,21675,21676,21677,21678,21679,21680,21681,21682,21683,21684,21685,21686,21687,21688,21689,21690,21691,21692,21693,21694,21695,21696,21697,21698,21699,21700,21701,21702,21703,21704,21705,21706,21707,21708,21709,21710,21711,21712,21713,21714,21715,21716,21717,21718,21719,21720,21721,21722,21723,21724,21725,21726,21727,21728,21729,21730,21731,21732,21733,21734,21735,21736,21737,21738,21739,21740,21741,21742,21743,21744,21745,21746,21747,21748,21749,21750,21751,21752,21753,21754,21755,21756,21757,21758,21759,21760,21761,21762,21763,21764,21765,21766,21767,21768,21769,21770,21771,21772,21773,21774,21775,21776,21777,21778,21779,21780,21781,21782,21783,21784,21785,21786,21787,21788,21789,21790,21791,21792,21793,21794,21795,21796,21797,21798,21799,21800,21801,21802,21803,21804,21805,21806,21807,21808,21809,21810,21811,21812,21813,21814,21815,21816,21817,21818,21819,21820,21821,21822,21823,21824,21825,21826,21827,21828,21829,21830,21831,21832,21833,21834,21835,21836,21837,21838,21839,21840,21841,21842,21843,21844,21845,21846,21847,21848,21849,21850,21851,21852,21853,21854,21855,21856,21857,21858,21859,21860,21861,21862,21863,21864,21865,21866,21867,21868,21869,21870,21871,21872,21873,21874,21875,21876,21877,21878,21879,21880,21881,21882,21883,21884,21885,21886,21887,21888,21889,21890,21891,21892,21893,21894,21895,21896,21897,21898,21899,21900,21901,21902,21903,21904,21905,21906,21907,21908,21909,21910,21911,21912,21913,21914,21915,21916,21917,21918,21919,21920,21921,21922,21923,21924,21925,21926,21927,21928,21929,21930,21931,21932,21933,21934,21935,21936,21937,21938,21939,21940,21941,21942,21943,21944,21945,21946,21947,21948,21949,21950,21951,21952,21953,21954,21955,21956,21957,21958,21959,21960,21961,21962,21963,21964,21965,21966,21967,21968,21969,21970,21971,21972,21973,21974,21975,21976,21977,21978,21979,21980,21981,21982,21983,21984,21985,21986,21987,21988,21989,21990,21991,21992,21993,21994,21995,21996,21997,21998,21999,22e3,22001,22002,22003,22004,22005,22006,22007,22008,22009,22010,22011,22012,22013,22014,22015,22016,22017,22018,22019,22020,22021,22022,22023,22024,22025,22026,22027,22028,22029,22030,22031,22032,22033,22034,22035,22036,22037,22038,22039,22040,22041,22042,22043,22044,22045,22046,22047,22048,22049,22050,22051,22052,22053,22054,22055,22056,22057,22058,22059,22060,22061,22062,22063,22064,22065,22066,22067,22068,22069,22070,22071,22072,22073,22074,22075,22076,22077,22078,22079,22080,22081,22082,22083,22084,22085,22086,22087,22088,22089,22090,22091,22092,22093,22094,22095,22096,22097,22098,22099,22100,22101,22102,22103,22104,22105,22106,22107,22108,22109,22110,22111,22112,22113,22114,22115,22116,22117,22118,22119,22120,22121,22122,22123,22124,22125,22126,22127,22128,22129,22130,22131,22132,22133,22134,22135,22136,22137,22138,22139,22140,22141,22142,22143,22144,22145,22146,22147,22148,22149,22150,22151,22152,22153,22154,22155,22156,22157,22158,22159,22160,22161,22162,22163,22164,22165,22166,22167,22168,22169,22170,22171,22172,22173,22174,22175,22176,22177,22178,22179,22180,22181,22182,22183,22184,22185,22186,22187,22188,22189,22190,22191,22192,22193,22194,22195,22196,22197,22198,22199,22200,22201,22202,22203,22204,22205,22206,22207,22208,22209,22210,22211,22212,22213,22214,22215,22216,22217,22218,22219,22220,22221,22222,22223,22224,22225,22226,22227,22228,22229,22230,22231,22232,22233,22234,22235,22236,22237,22238,22239,22240,22241,22242,22243,22244,22245,22246,22247,22248,22249,22250,22251,22252,22253,22254,22255,22256,22257,22258,22259,22260,22261,22262,22263,22264,22265,22266,22267,22268,22269,22270,22271,22272,22273,22274,22275,22276,22277,22278,22279,22280,22281,22282,22283,22284,22285,22286,22287,22288,22289,22290,22291,22292,22293,22294,22295,22296,22297,22298,22299,22300,22301,22302,22303,22304,22305,22306,22307,22308,22309,22310,22311,22312,22313,22314,22315,22316,22317,22318,22319,22320,22321,22322,22323,22324,22325,22326,22327,22328,22329,22330,22331,22332,22333,22334,22335,22336,22337,22338,22339,22340,22341,22342,22343,22344,22345,22346,22347,22348,22349,22350,22351,22352,22353,22354,22355,22356,22357,22358,22359,22360,22361,22362,22363,22364,22365,22366,22367,22368,22369,22370,22371,22372,22373,22374,22375,22376,22377,22378,22379,22380,22381,22382,22383,22384,22385,22386,22387,22388,22389,22390,22391,22392,22393,22394,22395,22396,22397,22398,22399,22400,22401,22402,22403,22404,22405,22406,22407,22408,22409,22410,22411,22412,22413,22414,22415,22416,22417,22418,22419,22420,22421,22422,22423,22424,22425,22426,22427,22428,22429,22430,22431,22432,22433,22434,22435,22436,22437,22438,22439,22440,22441,22442,22443,22444,22445,22446,22447,22448,22449,22450,22451,22452,22453,22454,22455,22456,22457,22458,22459,22460,22461,22462,22463,22464,22465,22466,22467,22468,22469,22470,22471,22472,22473,22474,22475,22476,22477,22478,22479,22480,22481,22482,22483,22484,22485,22486,22487,22488,22489,22490,22491,22492,22493,22494,22495,22496,22497,22498,22499,22500,22501,22502,22503,22504,22505,22506,22507,22508,22509,22510,22511,22512,22513,22514,22515,22516,22517,22518,22519,22520,22521,22522,22523,22524,22525,22526,22527,22528,22529,22530,22531,22532,22533,22534,22535,22536,22537,22538,22539,22540,22541,22542,22543,22544,22545,22546,22547,22548,22549,22550,22551,22552,22553,22554,22555,22556,22557,22558,22559,22560,22561,22562,22563,22564,22565,22566,22567,22568,22569,22570,22571,22572,22573,22574,22575,22576,22577,22578,22579,22580,22581,22582,22583,22584,22585,22586,22587,22588,22589,22590,22591,22592,22593,22594,22595,22596,22597,22598,22599,22600,22601,22602,22603,22604,22605,22606,22607,22608,22609,22610,22611,22612,22613,22614,22615,22616,22617,22618,22619,22620,22621,22622,22623,22624,22625,22626,22627,22628,22629,22630,22631,22632,22633,22634,22635,22636,22637,22638,22639,22640,22641,22642,22643,22644,22645,22646,22647,22648,22649,22650,22651,22652,22653,22654,22655,22656,22657,22658,22659,22660,22661,22662,22663,22664,22665,22666,22667,22668,22669,22670,22671,22672,22673,22674,22675,22676,22677,22678,22679,22680,22681,22682,22683,22684,22685,22686,22687,22688,22689,22690,22691,22692,22693,22694,22695,22696,22697,22698,22699,22700,22701,22702,22703,22704,22705,22706,22707,22708,22709,22710,22711,22712,22713,22714,22715,22716,22717,22718,22719,22720,22721,22722,22723,22724,22725,22726,22727,22728,22729,22730,22731,22732,22733,22734,22735,22736,22737,22738,22739,22740,22741,22742,22743,22744,22745,22746,22747,22748,22749,22750,22751,22752,22753,22754,22755,22756,22757,22758,22759,22760,22761,22762,22763,22764,22765,22766,22767,22768,22769,22770,22771,22772,22773,22774,22775,22776,22777,22778,22779,22780,22781,22782,22783,22784,22785,22786,22787,22788,22789,22790,22791,22792,22793,22794,22795,22796,22797,22798,22799,22800,22801,22802,22803,22804,22805,22806,22807,22808,22809,22810,22811,22812,22813,22814,22815,22816,22817,22818,22819,22820,22821,22822,22823,22824,22825,22826,22827,22828,22829,22830,22831,22832,22833,22834,22835,22836,22837,22838,22839,22840,22841,22842,22843,22844,22845,22846,22847,22848,22849,22850,22851,22852,22853,22854,22855,22856,22857,22858,22859,22860,22861,22862,22863,22864,22865,22866,22867,22868,22869,22870,22871,22872,22873,22874,22875,22876,22877,22878,22879,22880,22881,22882,22883,22884,22885,22886,22887,22888,22889,22890,22891,22892,22893,22894,22895,22896,22897,22898,22899,22900,22901,22902,22903,22904,22905,22906,22907,22908,22909,22910,22911,22912,22913,22914,22915,22916,22917,22918,22919,22920,22921,22922,22923,22924,22925,22926,22927,22928,22929,22930,22931,22932,22933,22934,22935,22936,22937,22938,22939,22940,22941,22942,22943,22944,22945,22946,22947,22948,22949,22950,22951,22952,22953,22954,22955,22956,22957,22958,22959,22960,22961,22962,22963,22964,22965,22966,22967,22968,22969,22970,22971,22972,22973,22974,22975,22976,22977,22978,22979,22980,22981,22982,22983,22984,22985,22986,22987,22988,22989,22990,22991,22992,22993,22994,22995,22996,22997,22998,22999,23e3,23001,23002,23003,23004,23005,23006,23007,23008,23009,23010,23011,23012,23013,23014,23015,23016,23017,23018,23019,23020,23021,23022,23023,23024,23025,23026,23027,23028,23029,23030,23031,23032,23033,23034,23035,23036,23037,23038,23039,23040,23041,23042,23043,23044,23045,23046,23047,23048,23049,23050,23051,23052,23053,23054,23055,23056,23057,23058,23059,23060,23061,23062,23063,23064,23065,23066,23067,23068,23069,23070,23071,23072,23073,23074,23075,23076,23077,23078,23079,23080,23081,23082,23083,23084,23085,23086,23087,23088,23089,23090,23091,23092,23093,23094,23095,23096,23097,23098,23099,23100,23101,23102,23103,23104,23105,23106,23107,23108,23109,23110,23111,23112,23113,23114,23115,23116,23117,23118,23119,23120,23121,23122,23123,23124,23125,23126,23127,23128,23129,23130,23131,23132,23133,23134,23135,23136,23137,23138,23139,23140,23141,23142,23143,23144,23145,23146,23147,23148,23149,23150,23151,23152,23153,23154,23155,23156,23157,23158,23159,23160,23161,23162,23163,23164,23165,23166,23167,23168,23169,23170,23171,23172,23173,23174,23175,23176,23177,23178,23179,23180,23181,23182,23183,23184,23185,23186,23187,23188,23189,23190,23191,23192,23193,23194,23195,23196,23197,23198,23199,23200,23201,23202,23203,23204,23205,23206,23207,23208,23209,23210,23211,23212,23213,23214,23215,23216,23217,23218,23219,23220,23221,23222,23223,23224,23225,23226,23227,23228,23229,23230,23231,23232,23233,23234,23235,23236,23237,23238,23239,23240,23241,23242,23243,23244,23245,23246,23247,23248,23249,23250,23251,23252,23253,23254,23255,23256,23257,23258,23259,23260,23261,23262,23263,23264,23265,23266,23267,23268,23269,23270,23271,23272,23273,23274,23275,23276,23277,23278,23279,23280,23281,23282,23283,23284,23285,23286,23287,23288,23289,23290,23291,23292,23293,23294,23295,23296,23297,23298,23299,23300,23301,23302,23303,23304,23305,23306,23307,23308,23309,23310,23311,23312,23313,23314,23315,23316,23317,23318,23319,23320,23321,23322,23323,23324,23325,23326,23327,23328,23329,23330,23331,23332,23333,23334,23335,23336,23337,23338,23339,23340,23341,23342,23343,23344,23345,23346,23347,23348,23349,23350,23351,23352,23353,23354,23355,23356,23357,23358,23359,23360,23361,23362,23363,23364,23365,23366,23367,23368,23369,23370,23371,23372,23373,23374,23375,23376,23377,23378,23379,23380,23381,23382,23383,23384,23385,23386,23387,23388,23389,23390,23391,23392,23393,23394,23395,23396,23397,23398,23399,23400,23401,23402,23403,23404,23405,23406,23407,23408,23409,23410,23411,23412,23413,23414,23415,23416,23417,23418,23419,23420,23421,23422,23423,23424,23425,23426,23427,23428,23429,23430,23431,23432,23433,23434,23435,23436,23437,23438,23439,23440,23441,23442,23443,23444,23445,23446,23447,23448,23449,23450,23451,23452,23453,23454,23455,23456,23457,23458,23459,23460,23461,23462,23463,23464,23465,23466,23467,23468,23469,23470,23471,23472,23473,23474,23475,23476,23477,23478,23479,23480,23481,23482,23483,23484,23485,23486,23487,23488,23489,23490,23491,23492,23493,23494,23495,23496,23497,23498,23499,23500,23501,23502,23503,23504,23505,23506,23507,23508,23509,23510,23511,23512,23513,23514,23515,23516,23517,23518,23519,23520,23521,23522,23523,23524,23525,23526,23527,23528,23529,23530,23531,23532,23533,23534,23535,23536,23537,23538,23539,23540,23541,23542,23543,23544,23545,23546,23547,23548,23549,23550,23551,23552,23553,23554,23555,23556,23557,23558,23559,23560,23561,23562,23563,23564,23565,23566,23567,23568,23569,23570,23571,23572,23573,23574,23575,23576,23577,23578,23579,23580,23581,23582,23583,23584,23585,23586,23587,23588,23589,23590,23591,23592,23593,23594,23595,23596,23597,23598,23599,23600,23601,23602,23603,23604,23605,23606,23607,23608,23609,23610,23611,23612,23613,23614,23615,23616,23617,23618,23619,23620,23621,23622,23623,23624,23625,23626,23627,23628,23629,23630,23631,23632,23633,23634,23635,23636,23637,23638,23639,23640,23641,23642,23643,23644,23645,23646,23647,23648,23649,23650,23651,23652,23653,23654,23655,23656,23657,23658,23659,23660,23661,23662,23663,23664,23665,23666,23667,23668,23669,23670,23671,23672,23673,23674,23675,23676,23677,23678,23679,23680,23681,23682,23683,23684,23685,23686,23687,23688,23689,23690,23691,23692,23693,23694,23695,23696,23697,23698,23699,23700,23701,23702,23703,23704,23705,23706,23707,23708,23709,23710,23711,23712,23713,23714,23715,23716,23717,23718,23719,23720,23721,23722,23723,23724,23725,23726,23727,23728,23729,23730,23731,23732,23733,23734,23735,23736,23737,23738,23739,23740,23741,23742,23743,23744,23745,23746,23747,23748,23749,23750,23751,23752,23753,23754,23755,23756,23757,23758,23759,23760,23761,23762,23763,23764,23765,23766,23767,23768,23769,23770,23771,23772,23773,23774,23775,23776,23777,23778,23779,23780,23781,23782,23783,23784,23785,23786,23787,23788,23789,23790,23791,23792,23793,23794,23795,23796,23797,23798,23799,23800,23801,23802,23803,23804,23805,23806,23807,23808,23809,23810,23811,23812,23813,23814,23815,23816,23817,23818,23819,23820,23821,23822,23823,23824,23825,23826,23827,23828,23829,23830,23831,23832,23833,23834,23835,23836,23837,23838,23839,23840,23841,23842,23843,23844,23845,23846,23847,23848,23849,23850,23851,23852,23853,23854,23855,23856,23857,23858,23859,23860,23861,23862,23863,23864,23865,23866,23867,23868,23869,23870,23871,23872,23873,23874,23875,23876,23877,23878,23879,23880,23881,23882,23883,23884,23885,23886,23887,23888,23889,23890,23891,23892,23893,23894,23895,23896,23897,23898,23899,23900,23901,23902,23903,23904,23905,23906,23907,23908,23909,23910,23911,23912,23913,23914,23915,23916,23917,23918,23919,23920,23921,23922,23923,23924,23925,23926,23927,23928,23929,23930,23931,23932,23933,23934,23935,23936,23937,23938,23939,23940,23941,23942,23943,23944,23945,23946,23947,23948,23949,23950,23951,23952,23953,23954,23955,23956,23957,23958,23959,23960,23961,23962,23963,23964,23965,23966,23967,23968,23969,23970,23971,23972,23973,23974,23975,23976,23977,23978,23979,23980,23981,23982,23983,23984,23985,23986,23987,23988,23989,23990,23991,23992,23993,23994,23995,23996,23997,23998,23999,24e3,24001,24002,24003,24004,24005,24006,24007,24008,24009,24010,24011,24012,24013,24014,24015,24016,24017,24018,24019,24020,24021,24022,24023,24024,24025,24026,24027,24028,24029,24030,24031,24032,24033,24034,24035,24036,24037,24038,24039,24040,24041,24042,24043,24044,24045,24046,24047,24048,24049,24050,24051,24052,24053,24054,24055,24056,24057,24058,24059,24060,24061,24062,24063,24064,24065,24066,24067,24068,24069,24070,24071,24072,24073,24074,24075,24076,24077,24078,24079,24080,24081,24082,24083,24084,24085,24086,24087,24088,24089,24090,24091,24092,24093,24094,24095,24096,24097,24098,24099,24100,24101,24102,24103,24104,24105,24106,24107,24108,24109,24110,24111,24112,24113,24114,24115,24116,24117,24118,24119,24120,24121,24122,24123,24124,24125,24126,24127,24128,24129,24130,24131,24132,24133,24134,24135,24136,24137,24138,24139,24140,24141,24142,24143,24144,24145,24146,24147,24148,24149,24150,24151,24152,24153,24154,24155,24156,24157,24158,24159,24160,24161,24162,24163,24164,24165,24166,24167,24168,24169,24170,24171,24172,24173,24174,24175,24176,24177,24178,24179,24180,24181,24182,24183,24184,24185,24186,24187,24188,24189,24190,24191,24192,24193,24194,24195,24196,24197,24198,24199,24200,24201,24202,24203,24204,24205,24206,24207,24208,24209,24210,24211,24212,24213,24214,24215,24216,24217,24218,24219,24220,24221,24222,24223,24224,24225,24226,24227,24228,24229,24230,24231,24232,24233,24234,24235,24236,24237,24238,24239,24240,24241,24242,24243,24244,24245,24246,24247,24248,24249,24250,24251,24252,24253,24254,24255,24256,24257,24258,24259,24260,24261,24262,24263,24264,24265,24266,24267,24268,24269,24270,24271,24272,24273,24274,24275,24276,24277,24278,24279,24280,24281,24282,24283,24284,24285,24286,24287,24288,24289,24290,24291,24292,24293,24294,24295,24296,24297,24298,24299,24300,24301,24302,24303,24304,24305,24306,24307,24308,24309,24310,24311,24312,24313,24314,24315,24316,24317,24318,24319,24320,24321,24322,24323,24324,24325,24326,24327,24328,24329,24330,24331,24332,24333,24334,24335,24336,24337,24338,24339,24340,24341,24342,24343,24344,24345,24346,24347,24348,24349,24350,24351,24352,24353,24354,24355,24356,24357,24358,24359,24360,24361,24362,24363,24364,24365,24366,24367,24368,24369,24370,24371,24372,24373,24374,24375,24376,24377,24378,24379,24380,24381,24382,24383,24384,24385,24386,24387,24388,24389,24390,24391,24392,24393,24394,24395,24396,24397,24398,24399,24400,24401,24402,24403,24404,24405,24406,24407,24408,24409,24410,24411,24412,24413,24414,24415,24416,24417,24418,24419,24420,24421,24422,24423,24424,24425,24426,24427,24428,24429,24430,24431,24432,24433,24434,24435,24436,24437,24438,24439,24440,24441,24442,24443,24444,24445,24446,24447,24448,24449,24450,24451,24452,24453,24454,24455,24456,24457,24458,24459,24460,24461,24462,24463,24464,24465,24466,24467,24468,24469,24470,24471,24472,24473,24474,24475,24476,24477,24478,24479,24480,24481,24482,24483,24484,24485,24486,24487,24488,24489,24490,24491,24492,24493,24494,24495,24496,24497,24498,24499,24500,24501,24502,24503,24504,24505,24506,24507,24508,24509,24510,24511,24512,24513,24514,24515,24516,24517,24518,24519,24520,24521,24522,24523,24524,24525,24526,24527,24528,24529,24530,24531,24532,24533,24534,24535,24536,24537,24538,24539,24540,24541,24542,24543,24544,24545,24546,24547,24548,24549,24550,24551,24552,24553,24554,24555,24556,24557,24558,24559,24560,24561,24562,24563,24564,24565,24566,24567,24568,24569,24570,24571,24572,24573,24574,24575,24576,24577,24578,24579,24580,24581,24582,24583,24584,24585,24586,24587,24588,24589,24590,24591,24592,24593,24594,24595,24596,24597,24598,24599,24600,24601,24602,24603,24604,24605,24606,24607,24608,24609,24610,24611,24612,24613,24614,24615,24616,24617,24618,24619,24620,24621,24622,24623,24624,24625,24626,24627,24628,24629,24630,24631,24632,24633,24634,24635,24636,24637,24638,24639,24640,24641,24642,24643,24644,24645,24646,24647,24648,24649,24650,24651,24652,24653,24654,24655,24656,24657,24658,24659,24660,24661,24662,24663,24664,24665,24666,24667,24668,24669,24670,24671,24672,24673,24674,24675,24676,24677,24678,24679,24680,24681,24682,24683,24684,24685,24686,24687,24688,24689,24690,24691,24692,24693,24694,24695,24696,24697,24698,24699,24700,24701,24702,24703,24704,24705,24706,24707,24708,24709,24710,24711,24712,24713,24714,24715,24716,24717,24718,24719,24720,24721,24722,24723,24724,24725,24726,24727,24728,24729,24730,24731,24732,24733,24734,24735,24736,24737,24738,24739,24740,24741,24742,24743,24744,24745,24746,24747,24748,24749,24750,24751,24752,24753,24754,24755,24756,24757,24758,24759,24760,24761,24762,24763,24764,24765,24766,24767,24768,24769,24770,24771,24772,24773,24774,24775,24776,24777,24778,24779,24780,24781,24782,24783,24784,24785,24786,24787,24788,24789,24790,24791,24792,24793,24794,24795,24796,24797,24798,24799,24800,24801,24802,24803,24804,24805,24806,24807,24808,24809,24810,24811,24812,24813,24814,24815,24816,24817,24818,24819,24820,24821,24822,24823,24824,24825,24826,24827,24828,24829,24830,24831,24832,24833,24834,24835,24836,24837,24838,24839,24840,24841,24842,24843,24844,24845,24846,24847,24848,24849,24850,24851,24852,24853,24854,24855,24856,24857,24858,24859,24860,24861,24862,24863,24864,24865,24866,24867,24868,24869,24870,24871,24872,24873,24874,24875,24876,24877,24878,24879,24880,24881,24882,24883,24884,24885,24886,24887,24888,24889,24890,24891,24892,24893,24894,24895,24896,24897,24898,24899,24900,24901,24902,24903,24904,24905,24906,24907,24908,24909,24910,24911,24912,24913,24914,24915,24916,24917,24918,24919,24920,24921,24922,24923,24924,24925,24926,24927,24928,24929,24930,24931,24932,24933,24934,24935,24936,24937,24938,24939,24940,24941,24942,24943,24944,24945,24946,24947,24948,24949,24950,24951,24952,24953,24954,24955,24956,24957,24958,24959,24960,24961,24962,24963,24964,24965,24966,24967,24968,24969,24970,24971,24972,24973,24974,24975,24976,24977,24978,24979,24980,24981,24982,24983,24984,24985,24986,24987,24988,24989,24990,24991,24992,24993,24994,24995,24996,24997,24998,24999,25e3,25001,25002,25003,25004,25005,25006,25007,25008,25009,25010,25011,25012,25013,25014,25015,25016,25017,25018,25019,25020,25021,25022,25023,25024,25025,25026,25027,25028,25029,25030,25031,25032,25033,25034,25035,25036,25037,25038,25039,25040,25041,25042,25043,25044,25045,25046,25047,25048,25049,25050,25051,25052,25053,25054,25055,25056,25057,25058,25059,25060,25061,25062,25063,25064,25065,25066,25067,25068,25069,25070,25071,25072,25073,25074,25075,25076,25077,25078,25079,25080,25081,25082,25083,25084,25085,25086,25087,25088,25089,25090,25091,25092,25093,25094,25095,25096,25097,25098,25099,25100,25101,25102,25103,25104,25105,25106,25107,25108,25109,25110,25111,25112,25113,25114,25115,25116,25117,25118,25119,25120,25121,25122,25123,25124,25125,25126,25127,25128,25129,25130,25131,25132,25133,25134,25135,25136,25137,25138,25139,25140,25141,25142,25143,25144,25145,25146,25147,25148,25149,25150,25151,25152,25153,25154,25155,25156,25157,25158,25159,25160,25161,25162,25163,25164,25165,25166,25167,25168,25169,25170,25171,25172,25173,25174,25175,25176,25177,25178,25179,25180,25181,25182,25183,25184,25185,25186,25187,25188,25189,25190,25191,25192,25193,25194,25195,25196,25197,25198,25199,25200,25201,25202,25203,25204,25205,25206,25207,25208,25209,25210,25211,25212,25213,25214,25215,25216,25217,25218,25219,25220,25221,25222,25223,25224,25225,25226,25227,25228,25229,25230,25231,25232,25233,25234,25235,25236,25237,25238,25239,25240,25241,25242,25243,25244,25245,25246,25247,25248,25249,25250,25251,25252,25253,25254,25255,25256,25257,25258,25259,25260,25261,25262,25263,25264,25265,25266,25267,25268,25269,25270,25271,25272,25273,25274,25275,25276,25277,25278,25279,25280,25281,25282,25283,25284,25285,25286,25287,25288,25289,25290,25291,25292,25293,25294,25295,25296,25297,25298,25299,25300,25301,25302,25303,25304,25305,25306,25307,25308,25309,25310,25311,25312,25313,25314,25315,25316,25317,25318,25319,25320,25321,25322,25323,25324,25325,25326,25327,25328,25329,25330,25331,25332,25333,25334,25335,25336,25337,25338,25339,25340,25341,25342,25343,25344,25345,25346,25347,25348,25349,25350,25351,25352,25353,25354,25355,25356,25357,25358,25359,25360,25361,25362,25363,25364,25365,25366,25367,25368,25369,25370,25371,25372,25373,25374,25375,25376,25377,25378,25379,25380,25381,25382,25383,25384,25385,25386,25387,25388,25389,25390,25391,25392,25393,25394,25395,25396,25397,25398,25399,25400,25401,25402,25403,25404,25405,25406,25407,25408,25409,25410,25411,25412,25413,25414,25415,25416,25417,25418,25419,25420,25421,25422,25423,25424,25425,25426,25427,25428,25429,25430,25431,25432,25433,25434,25435,25436,25437,25438,25439,25440,25441,25442,25443,25444,25445,25446,25447,25448,25449,25450,25451,25452,25453,25454,25455,25456,25457,25458,25459,25460,25461,25462,25463,25464,25465,25466,25467,25468,25469,25470,25471,25472,25473,25474,25475,25476,25477,25478,25479,25480,25481,25482,25483,25484,25485,25486,25487,25488,25489,25490,25491,25492,25493,25494,25495,25496,25497,25498,25499,25500,25501,25502,25503,25504,25505,25506,25507,25508,25509,25510,25511,25512,25513,25514,25515,25516,25517,25518,25519,25520,25521,25522,25523,25524,25525,25526,25527,25528,25529,25530,25531,25532,25533,25534,25535,25536,25537,25538,25539,25540,25541,25542,25543,25544,25545,25546,25547,25548,25549,25550,25551,25552,25553,25554,25555,25556,25557,25558,25559,25560,25561,25562,25563,25564,25565,25566,25567,25568,25569,25570,25571,25572,25573,25574,25575,25576,25577,25578,25579,25580,25581,25582,25583,25584,25585,25586,25587,25588,25589,25590,25591,25592,25593,25594,25595,25596,25597,25598,25599,25600,25601,25602,25603,25604,25605,25606,25607,25608,25609,25610,25611,25612,25613,25614,25615,25616,25617,25618,25619,25620,25621,25622,25623,25624,25625,25626,25627,25628,25629,25630,25631,25632,25633,25634,25635,25636,25637,25638,25639,25640,25641,25642,25643,25644,25645,25646,25647,25648,25649,25650,25651,25652,25653,25654,25655,25656,25657,25658,25659,25660,25661,25662,25663,25664,25665,25666,25667,25668,25669,25670,25671,25672,25673,25674,25675,25676,25677,25678,25679,25680,25681,25682,25683,25684,25685,25686,25687,25688,25689,25690,25691,25692,25693,25694,25695,25696,25697,25698,25699,25700,25701,25702,25703,25704,25705,25706,25707,25708,25709,25710,25711,25712,25713,25714,25715,25716,25717,25718,25719,25720,25721,25722,25723,25724,25725,25726,25727,25728,25729,25730,25731,25732,25733,25734,25735,25736,25737,25738,25739,25740,25741,25742,25743,25744,25745,25746,25747,25748,25749,25750,25751,25752,25753,25754,25755,25756,25757,25758,25759,25760,25761,25762,25763,25764,25765,25766,25767,25768,25769,25770,25771,25772,25773,25774,25775,25776,25777,25778,25779,25780,25781,25782,25783,25784,25785,25786,25787,25788,25789,25790,25791,25792,25793,25794,25795,25796,25797,25798,25799,25800,25801,25802,25803,25804,25805,25806,25807,25808,25809,25810,25811,25812,25813,25814,25815,25816,25817,25818,25819,25820,25821,25822,25823,25824,25825,25826,25827,25828,25829,25830,25831,25832,25833,25834,25835,25836,25837,25838,25839,25840,25841,25842,25843,25844,25845,25846,25847,25848,25849,25850,25851,25852,25853,25854,25855,25856,25857,25858,25859,25860,25861,25862,25863,25864,25865,25866,25867,25868,25869,25870,25871,25872,25873,25874,25875,25876,25877,25878,25879,25880,25881,25882,25883,25884,25885,25886,25887,25888,25889,25890,25891,25892,25893,25894,25895,25896,25897,25898,25899,25900,25901,25902,25903,25904,25905,25906,25907,25908,25909,25910,25911,25912,25913,25914,25915,25916,25917,25918,25919,25920,25921,25922,25923,25924,25925,25926,25927,25928,25929,25930,25931,25932,25933,25934,25935,25936,25937,25938,25939,25940,25941,25942,25943,25944,25945,25946,25947,25948,25949,25950,25951,25952,25953,25954,25955,25956,25957,25958,25959,25960,25961,25962,25963,25964,25965,25966,25967,25968,25969,25970,25971,25972,25973,25974,25975,25976,25977,25978,25979,25980,25981,25982,25983,25984,25985,25986,25987,25988,25989,25990,25991,25992,25993,25994,25995,25996,25997,25998,25999,26e3,26001,26002,26003,26004,26005,26006,26007,26008,26009,26010,26011,26012,26013,26014,26015,26016,26017,26018,26019,26020,26021,26022,26023,26024,26025,26026,26027,26028,26029,26030,26031,26032,26033,26034,26035,26036,26037,26038,26039,26040,26041,26042,26043,26044,26045,26046,26047,26048,26049,26050,26051,26052,26053,26054,26055,26056,26057,26058,26059,26060,26061,26062,26063,26064,26065,26066,26067,26068,26069,26070,26071,26072,26073,26074,26075,26076,26077,26078,26079,26080,26081,26082,26083,26084,26085,26086,26087,26088,26089,26090,26091,26092,26093,26094,26095,26096,26097,26098,26099,26100,26101,26102,26103,26104,26105,26106,26107,26108,26109,26110,26111,26112,26113,26114,26115,26116,26117,26118,26119,26120,26121,26122,26123,26124,26125,26126,26127,26128,26129,26130,26131,26132,26133,26134,26135,26136,26137,26138,26139,26140,26141,26142,26143,26144,26145,26146,26147,26148,26149,26150,26151,26152,26153,26154,26155,26156,26157,26158,26159,26160,26161,26162,26163,26164,26165,26166,26167,26168,26169,26170,26171,26172,26173,26174,26175,26176,26177,26178,26179,26180,26181,26182,26183,26184,26185,26186,26187,26188,26189,26190,26191,26192,26193,26194,26195,26196,26197,26198,26199,26200,26201,26202,26203,26204,26205,26206,26207,26208,26209,26210,26211,26212,26213,26214,26215,26216,26217,26218,26219,26220,26221,26222,26223,26224,26225,26226,26227,26228,26229,26230,26231,26232,26233,26234,26235,26236,26237,26238,26239,26240,26241,26242,26243,26244,26245,26246,26247,26248,26249,26250,26251,26252,26253,26254,26255,26256,26257,26258,26259,26260,26261,26262,26263,26264,26265,26266,26267,26268,26269,26270,26271,26272,26273,26274,26275,26276,26277,26278,26279,26280,26281,26282,26283,26284,26285,26286,26287,26288,26289,26290,26291,26292,26293,26294,26295,26296,26297,26298,26299,26300,26301,26302,26303,26304,26305,26306,26307,26308,26309,26310,26311,26312,26313,26314,26315,26316,26317,26318,26319,26320,26321,26322,26323,26324,26325,26326,26327,26328,26329,26330,26331,26332,26333,26334,26335,26336,26337,26338,26339,26340,26341,26342,26343,26344,26345,26346,26347,26348,26349,26350,26351,26352,26353,26354,26355,26356,26357,26358,26359,26360,26361,26362,26363,26364,26365,26366,26367,26368,26369,26370,26371,26372,26373,26374,26375,26376,26377,26378,26379,26380,26381,26382,26383,26384,26385,26386,26387,26388,26389,26390,26391,26392,26393,26394,26395,26396,26397,26398,26399,26400,26401,26402,26403,26404,26405,26406,26407,26408,26409,26410,26411,26412,26413,26414,26415,26416,26417,26418,26419,26420,26421,26422,26423,26424,26425,26426,26427,26428,26429,26430,26431,26432,26433,26434,26435,26436,26437,26438,26439,26440,26441,26442,26443,26444,26445,26446,26447,26448,26449,26450,26451,26452,26453,26454,26455,26456,26457,26458,26459,26460,26461,26462,26463,26464,26465,26466,26467,26468,26469,26470,26471,26472,26473,26474,26475,26476,26477,26478,26479,26480,26481,26482,26483,26484,26485,26486,26487,26488,26489,26490,26491,26492,26493,26494,26495,26496,26497,26498,26499,26500,26501,26502,26503,26504,26505,26506,26507,26508,26509,26510,26511,26512,26513,26514,26515,26516,26517,26518,26519,26520,26521,26522,26523,26524,26525,26526,26527,26528,26529,26530,26531,26532,26533,26534,26535,26536,26537,26538,26539,26540,26541,26542,26543,26544,26545,26546,26547,26548,26549,26550,26551,26552,26553,26554,26555,26556,26557,26558,26559,26560,26561,26562,26563,26564,26565,26566,26567,26568,26569,26570,26571,26572,26573,26574,26575,26576,26577,26578,26579,26580,26581,26582,26583,26584,26585,26586,26587,26588,26589,26590,26591,26592,26593,26594,26595,26596,26597,26598,26599,26600,26601,26602,26603,26604,26605,26606,26607,26608,26609,26610,26611,26612,26613,26614,26615,26616,26617,26618,26619,26620,26621,26622,26623,26624,26625,26626,26627,26628,26629,26630,26631,26632,26633,26634,26635,26636,26637,26638,26639,26640,26641,26642,26643,26644,26645,26646,26647,26648,26649,26650,26651,26652,26653,26654,26655,26656,26657,26658,26659,26660,26661,26662,26663,26664,26665,26666,26667,26668,26669,26670,26671,26672,26673,26674,26675,26676,26677,26678,26679,26680,26681,26682,26683,26684,26685,26686,26687,26688,26689,26690,26691,26692,26693,26694,26695,26696,26697,26698,26699,26700,26701,26702,26703,26704,26705,26706,26707,26708,26709,26710,26711,26712,26713,26714,26715,26716,26717,26718,26719,26720,26721,26722,26723,26724,26725,26726,26727,26728,26729,26730,26731,26732,26733,26734,26735,26736,26737,26738,26739,26740,26741,26742,26743,26744,26745,26746,26747,26748,26749,26750,26751,26752,26753,26754,26755,26756,26757,26758,26759,26760,26761,26762,26763,26764,26765,26766,26767,26768,26769,26770,26771,26772,26773,26774,26775,26776,26777,26778,26779,26780,26781,26782,26783,26784,26785,26786,26787,26788,26789,26790,26791,26792,26793,26794,26795,26796,26797,26798,26799,26800,26801,26802,26803,26804,26805,26806,26807,26808,26809,26810,26811,26812,26813,26814,26815,26816,26817,26818,26819,26820,26821,26822,26823,26824,26825,26826,26827,26828,26829,26830,26831,26832,26833,26834,26835,26836,26837,26838,26839,26840,26841,26842,26843,26844,26845,26846,26847,26848,26849,26850,26851,26852,26853,26854,26855,26856,26857,26858,26859,26860,26861,26862,26863,26864,26865,26866,26867,26868,26869,26870,26871,26872,26873,26874,26875,26876,26877,26878,26879,26880,26881,26882,26883,26884,26885,26886,26887,26888,26889,26890,26891,26892,26893,26894,26895,26896,26897,26898,26899,26900,26901,26902,26903,26904,26905,26906,26907,26908,26909,26910,26911,26912,26913,26914,26915,26916,26917,26918,26919,26920,26921,26922,26923,26924,26925,26926,26927,26928,26929,26930,26931,26932,26933,26934,26935,26936,26937,26938,26939,26940,26941,26942,26943,26944,26945,26946,26947,26948,26949,26950,26951,26952,26953,26954,26955,26956,26957,26958,26959,26960,26961,26962,26963,26964,26965,26966,26967,26968,26969,26970,26971,26972,26973,26974,26975,26976,26977,26978,26979,26980,26981,26982,26983,26984,26985,26986,26987,26988,26989,26990,26991,26992,26993,26994,26995,26996,26997,26998,26999,27e3,27001,27002,27003,27004,27005,27006,27007,27008,27009,27010,27011,27012,27013,27014,27015,27016,27017,27018,27019,27020,27021,27022,27023,27024,27025,27026,27027,27028,27029,27030,27031,27032,27033,27034,27035,27036,27037,27038,27039,27040,27041,27042,27043,27044,27045,27046,27047,27048,27049,27050,27051,27052,27053,27054,27055,27056,27057,27058,27059,27060,27061,27062,27063,27064,27065,27066,27067,27068,27069,27070,27071,27072,27073,27074,27075,27076,27077,27078,27079,27080,27081,27082,27083,27084,27085,27086,27087,27088,27089,27090,27091,27092,27093,27094,27095,27096,27097,27098,27099,27100,27101,27102,27103,27104,27105,27106,27107,27108,27109,27110,27111,27112,27113,27114,27115,27116,27117,27118,27119,27120,27121,27122,27123,27124,27125,27126,27127,27128,27129,27130,27131,27132,27133,27134,27135,27136,27137,27138,27139,27140,27141,27142,27143,27144,27145,27146,27147,27148,27149,27150,27151,27152,27153,27154,27155,27156,27157,27158,27159,27160,27161,27162,27163,27164,27165,27166,27167,27168,27169,27170,27171,27172,27173,27174,27175,27176,27177,27178,27179,27180,27181,27182,27183,27184,27185,27186,27187,27188,27189,27190,27191,27192,27193,27194,27195,27196,27197,27198,27199,27200,27201,27202,27203,27204,27205,27206,27207,27208,27209,27210,27211,27212,27213,27214,27215,27216,27217,27218,27219,27220,27221,27222,27223,27224,27225,27226,27227,27228,27229,27230,27231,27232,27233,27234,27235,27236,27237,27238,27239,27240,27241,27242,27243,27244,27245,27246,27247,27248,27249,27250,27251,27252,27253,27254,27255,27256,27257,27258,27259,27260,27261,27262,27263,27264,27265,27266,27267,27268,27269,27270,27271,27272,27273,27274,27275,27276,27277,27278,27279,27280,27281,27282,27283,27284,27285,27286,27287,27288,27289,27290,27291,27292,27293,27294,27295,27296,27297,27298,27299,27300,27301,27302,27303,27304,27305,27306,27307,27308,27309,27310,27311,27312,27313,27314,27315,27316,27317,27318,27319,27320,27321,27322,27323,27324,27325,27326,27327,27328,27329,27330,27331,27332,27333,27334,27335,27336,27337,27338,27339,27340,27341,27342,27343,27344,27345,27346,27347,27348,27349,27350,27351,27352,27353,27354,27355,27356,27357,27358,27359,27360,27361,27362,27363,27364,27365,27366,27367,27368,27369,27370,27371,27372,27373,27374,27375,27376,27377,27378,27379,27380,27381,27382,27383,27384,27385,27386,27387,27388,27389,27390,27391,27392,27393,27394,27395,27396,27397,27398,27399,27400,27401,27402,27403,27404,27405,27406,27407,27408,27409,27410,27411,27412,27413,27414,27415,27416,27417,27418,27419,27420,27421,27422,27423,27424,27425,27426,27427,27428,27429,27430,27431,27432,27433,27434,27435,27436,27437,27438,27439,27440,27441,27442,27443,27444,27445,27446,27447,27448,27449,27450,27451,27452,27453,27454,27455,27456,27457,27458,27459,27460,27461,27462,27463,27464,27465,27466,27467,27468,27469,27470,27471,27472,27473,27474,27475,27476,27477,27478,27479,27480,27481,27482,27483,27484,27485,27486,27487,27488,27489,27490,27491,27492,27493,27494,27495,27496,27497,27498,27499,27500,27501,27502,27503,27504,27505,27506,27507,27508,27509,27510,27511,27512,27513,27514,27515,27516,27517,27518,27519,27520,27521,27522,27523,27524,27525,27526,27527,27528,27529,27530,27531,27532,27533,27534,27535,27536,27537,27538,27539,27540,27541,27542,27543,27544,27545,27546,27547,27548,27549,27550,27551,27552,27553,27554,27555,27556,27557,27558,27559,27560,27561,27562,27563,27564,27565,27566,27567,27568,27569,27570,27571,27572,27573,27574,27575,27576,27577,27578,27579,27580,27581,27582,27583,27584,27585,27586,27587,27588,27589,27590,27591,27592,27593,27594,27595,27596,27597,27598,27599,27600,27601,27602,27603,27604,27605,27606,27607,27608,27609,27610,27611,27612,27613,27614,27615,27616,27617,27618,27619,27620,27621,27622,27623,27624,27625,27626,27627,27628,27629,27630,27631,27632,27633,27634,27635,27636,27637,27638,27639,27640,27641,27642,27643,27644,27645,27646,27647,27648,27649,27650,27651,27652,27653,27654,27655,27656,27657,27658,27659,27660,27661,27662,27663,27664,27665,27666,27667,27668,27669,27670,27671,27672,27673,27674,27675,27676,27677,27678,27679,27680,27681,27682,27683,27684,27685,27686,27687,27688,27689,27690,27691,27692,27693,27694,27695,27696,27697,27698,27699,27700,27701,27702,27703,27704,27705,27706,27707,27708,27709,27710,27711,27712,27713,27714,27715,27716,27717,27718,27719,27720,27721,27722,27723,27724,27725,27726,27727,27728,27729,27730,27731,27732,27733,27734,27735,27736,27737,27738,27739,27740,27741,27742,27743,27744,27745,27746,27747,27748,27749,27750,27751,27752,27753,27754,27755,27756,27757,27758,27759,27760,27761,27762,27763,27764,27765,27766,27767,27768,27769,27770,27771,27772,27773,27774,27775,27776,27777,27778,27779,27780,27781,27782,27783,27784,27785,27786,27787,27788,27789,27790,27791,27792,27793,27794,27795,27796,27797,27798,27799,27800,27801,27802,27803,27804,27805,27806,27807,27808,27809,27810,27811,27812,27813,27814,27815,27816,27817,27818,27819,27820,27821,27822,27823,27824,27825,27826,27827,27828,27829,27830,27831,27832,27833,27834,27835,27836,27837,27838,27839,27840,27841,27842,27843,27844,27845,27846,27847,27848,27849,27850,27851,27852,27853,27854,27855,27856,27857,27858,27859,27860,27861,27862,27863,27864,27865,27866,27867,27868,27869,27870,27871,27872,27873,27874,27875,27876,27877,27878,27879,27880,27881,27882,27883,27884,27885,27886,27887,27888,27889,27890,27891,27892,27893,27894,27895,27896,27897,27898,27899,27900,27901,27902,27903,27904,27905,27906,27907,27908,27909,27910,27911,27912,27913,27914,27915,27916,27917,27918,27919,27920,27921,27922,27923,27924,27925,27926,27927,27928,27929,27930,27931,27932,27933,27934,27935,27936,27937,27938,27939,27940,27941,27942,27943,27944,27945,27946,27947,27948,27949,27950,27951,27952,27953,27954,27955,27956,27957,27958,27959,27960,27961,27962,27963,27964,27965,27966,27967,27968,27969,27970,27971,27972,27973,27974,27975,27976,27977,27978,27979,27980,27981,27982,27983,27984,27985,27986,27987,27988,27989,27990,27991,27992,27993,27994,27995,27996,27997,27998,27999,28e3,28001,28002,28003,28004,28005,28006,28007,28008,28009,28010,28011,28012,28013,28014,28015,28016,28017,28018,28019,28020,28021,28022,28023,28024,28025,28026,28027,28028,28029,28030,28031,28032,28033,28034,28035,28036,28037,28038,28039,28040,28041,28042,28043,28044,28045,28046,28047,28048,28049,28050,28051,28052,28053,28054,28055,28056,28057,28058,28059,28060,28061,28062,28063,28064,28065,28066,28067,28068,28069,28070,28071,28072,28073,28074,28075,28076,28077,28078,28079,28080,28081,28082,28083,28084,28085,28086,28087,28088,28089,28090,28091,28092,28093,28094,28095,28096,28097,28098,28099,28100,28101,28102,28103,28104,28105,28106,28107,28108,28109,28110,28111,28112,28113,28114,28115,28116,28117,28118,28119,28120,28121,28122,28123,28124,28125,28126,28127,28128,28129,28130,28131,28132,28133,28134,28135,28136,28137,28138,28139,28140,28141,28142,28143,28144,28145,28146,28147,28148,28149,28150,28151,28152,28153,28154,28155,28156,28157,28158,28159,28160,28161,28162,28163,28164,28165,28166,28167,28168,28169,28170,28171,28172,28173,28174,28175,28176,28177,28178,28179,28180,28181,28182,28183,28184,28185,28186,28187,28188,28189,28190,28191,28192,28193,28194,28195,28196,28197,28198,28199,28200,28201,28202,28203,28204,28205,28206,28207,28208,28209,28210,28211,28212,28213,28214,28215,28216,28217,28218,28219,28220,28221,28222,28223,28224,28225,28226,28227,28228,28229,28230,28231,28232,28233,28234,28235,28236,28237,28238,28239,28240,28241,28242,28243,28244,28245,28246,28247,28248,28249,28250,28251,28252,28253,28254,28255,28256,28257,28258,28259,28260,28261,28262,28263,28264,28265,28266,28267,28268,28269,28270,28271,28272,28273,28274,28275,28276,28277,28278,28279,28280,28281,28282,28283,28284,28285,28286,28287,28288,28289,28290,28291,28292,28293,28294,28295,28296,28297,28298,28299,28300,28301,28302,28303,28304,28305,28306,28307,28308,28309,28310,28311,28312,28313,28314,28315,28316,28317,28318,28319,28320,28321,28322,28323,28324,28325,28326,28327,28328,28329,28330,28331,28332,28333,28334,28335,28336,28337,28338,28339,28340,28341,28342,28343,28344,28345,28346,28347,28348,28349,28350,28351,28352,28353,28354,28355,28356,28357,28358,28359,28360,28361,28362,28363,28364,28365,28366,28367,28368,28369,28370,28371,28372,28373,28374,28375,28376,28377,28378,28379,28380,28381,28382,28383,28384,28385,28386,28387,28388,28389,28390,28391,28392,28393,28394,28395,28396,28397,28398,28399,28400,28401,28402,28403,28404,28405,28406,28407,28408,28409,28410,28411,28412,28413,28414,28415,28416,28417,28418,28419,28420,28421,28422,28423,28424,28425,28426,28427,28428,28429,28430,28431,28432,28433,28434,28435,28436,28437,28438,28439,28440,28441,28442,28443,28444,28445,28446,28447,28448,28449,28450,28451,28452,28453,28454,28455,28456,28457,28458,28459,28460,28461,28462,28463,28464,28465,28466,28467,28468,28469,28470,28471,28472,28473,28474,28475,28476,28477,28478,28479,28480,28481,28482,28483,28484,28485,28486,28487,28488,28489,28490,28491,28492,28493,28494,28495,28496,28497,28498,28499,28500,28501,28502,28503,28504,28505,28506,28507,28508,28509,28510,28511,28512,28513,28514,28515,28516,28517,28518,28519,28520,28521,28522,28523,28524,28525,28526,28527,28528,28529,28530,28531,28532,28533,28534,28535,28536,28537,28538,28539,28540,28541,28542,28543,28544,28545,28546,28547,28548,28549,28550,28551,28552,28553,28554,28555,28556,28557,28558,28559,28560,28561,28562,28563,28564,28565,28566,28567,28568,28569,28570,28571,28572,28573,28574,28575,28576,28577,28578,28579,28580,28581,28582,28583,28584,28585,28586,28587,28588,28589,28590,28591,28592,28593,28594,28595,28596,28597,28598,28599,28600,28601,28602,28603,28604,28605,28606,28607,28608,28609,28610,28611,28612,28613,28614,28615,28616,28617,28618,28619,28620,28621,28622,28623,28624,28625,28626,28627,28628,28629,28630,28631,28632,28633,28634,28635,28636,28637,28638,28639,28640,28641,28642,28643,28644,28645,28646,28647,28648,28649,28650,28651,28652,28653,28654,28655,28656,28657,28658,28659,28660,28661,28662,28663,28664,28665,28666,28667,28668,28669,28670,28671,28672,28673,28674,28675,28676,28677,28678,28679,28680,28681,28682,28683,28684,28685,28686,28687,28688,28689,28690,28691,28692,28693,28694,28695,28696,28697,28698,28699,28700,28701,28702,28703,28704,28705,28706,28707,28708,28709,28710,28711,28712,28713,28714,28715,28716,28717,28718,28719,28720,28721,28722,28723,28724,28725,28726,28727,28728,28729,28730,28731,28732,28733,28734,28735,28736,28737,28738,28739,28740,28741,28742,28743,28744,28745,28746,28747,28748,28749,28750,28751,28752,28753,28754,28755,28756,28757,28758,28759,28760,28761,28762,28763,28764,28765,28766,28767,28768,28769,28770,28771,28772,28773,28774,28775,28776,28777,28778,28779,28780,28781,28782,28783,28784,28785,28786,28787,28788,28789,28790,28791,28792,28793,28794,28795,28796,28797,28798,28799,28800,28801,28802,28803,28804,28805,28806,28807,28808,28809,28810,28811,28812,28813,28814,28815,28816,28817,28818,28819,28820,28821,28822,28823,28824,28825,28826,28827,28828,28829,28830,28831,28832,28833,28834,28835,28836,28837,28838,28839,28840,28841,28842,28843,28844,28845,28846,28847,28848,28849,28850,28851,28852,28853,28854,28855,28856,28857,28858,28859,28860,28861,28862,28863,28864,28865,28866,28867,28868,28869,28870,28871,28872,28873,28874,28875,28876,28877,28878,28879,28880,28881,28882,28883,28884,28885,28886,28887,28888,28889,28890,28891,28892,28893,28894,28895,28896,28897,28898,28899,28900,28901,28902,28903,28904,28905,28906,28907,28908,28909,28910,28911,28912,28913,28914,28915,28916,28917,28918,28919,28920,28921,28922,28923,28924,28925,28926,28927,28928,28929,28930,28931,28932,28933,28934,28935,28936,28937,28938,28939,28940,28941,28942,28943,28944,28945,28946,28947,28948,28949,28950,28951,28952,28953,28954,28955,28956,28957,28958,28959,28960,28961,28962,28963,28964,28965,28966,28967,28968,28969,28970,28971,28972,28973,28974,28975,28976,28977,28978,28979,28980,28981,28982,28983,28984,28985,28986,28987,28988,28989,28990,28991,28992,28993,28994,28995,28996,28997,28998,28999,29e3,29001,29002,29003,29004,29005,29006,29007,29008,29009,29010,29011,29012,29013,29014,29015,29016,29017,29018,29019,29020,29021,29022,29023,29024,29025,29026,29027,29028,29029,29030,29031,29032,29033,29034,29035,29036,29037,29038,29039,29040,29041,29042,29043,29044,29045,29046,29047,29048,29049,29050,29051,29052,29053,29054,29055,29056,29057,29058,29059,29060,29061,29062,29063,29064,29065,29066,29067,29068,29069,29070,29071,29072,29073,29074,29075,29076,29077,29078,29079,29080,29081,29082,29083,29084,29085,29086,29087,29088,29089,29090,29091,29092,29093,29094,29095,29096,29097,29098,29099,29100,29101,29102,29103,29104,29105,29106,29107,29108,29109,29110,29111,29112,29113,29114,29115,29116,29117,29118,29119,29120,29121,29122,29123,29124,29125,29126,29127,29128,29129,29130,29131,29132,29133,29134,29135,29136,29137,29138,29139,29140,29141,29142,29143,29144,29145,29146,29147,29148,29149,29150,29151,29152,29153,29154,29155,29156,29157,29158,29159,29160,29161,29162,29163,29164,29165,29166,29167,29168,29169,29170,29171,29172,29173,29174,29175,29176,29177,29178,29179,29180,29181,29182,29183,29184,29185,29186,29187,29188,29189,29190,29191,29192,29193,29194,29195,29196,29197,29198,29199,29200,29201,29202,29203,29204,29205,29206,29207,29208,29209,29210,29211,29212,29213,29214,29215,29216,29217,29218,29219,29220,29221,29222,29223,29224,29225,29226,29227,29228,29229,29230,29231,29232,29233,29234,29235,29236,29237,29238,29239,29240,29241,29242,29243,29244,29245,29246,29247,29248,29249,29250,29251,29252,29253,29254,29255,29256,29257,29258,29259,29260,29261,29262,29263,29264,29265,29266,29267,29268,29269,29270,29271,29272,29273,29274,29275,29276,29277,29278,29279,29280,29281,29282,29283,29284,29285,29286,29287,29288,29289,29290,29291,29292,29293,29294,29295,29296,29297,29298,29299,29300,29301,29302,29303,29304,29305,29306,29307,29308,29309,29310,29311,29312,29313,29314,29315,29316,29317,29318,29319,29320,29321,29322,29323,29324,29325,29326,29327,29328,29329,29330,29331,29332,29333,29334,29335,29336,29337,29338,29339,29340,29341,29342,29343,29344,29345,29346,29347,29348,29349,29350,29351,29352,29353,29354,29355,29356,29357,29358,29359,29360,29361,29362,29363,29364,29365,29366,29367,29368,29369,29370,29371,29372,29373,29374,29375,29376,29377,29378,29379,29380,29381,29382,29383,29384,29385,29386,29387,29388,29389,29390,29391,29392,29393,29394,29395,29396,29397,29398,29399,29400,29401,29402,29403,29404,29405,29406,29407,29408,29409,29410,29411,29412,29413,29414,29415,29416,29417,29418,29419,29420,29421,29422,29423,29424,29425,29426,29427,29428,29429,29430,29431,29432,29433,29434,29435,29436,29437,29438,29439,29440,29441,29442,29443,29444,29445,29446,29447,29448,29449,29450,29451,29452,29453,29454,29455,29456,29457,29458,29459,29460,29461,29462,29463,29464,29465,29466,29467,29468,29469,29470,29471,29472,29473,29474,29475,29476,29477,29478,29479,29480,29481,29482,29483,29484,29485,29486,29487,29488,29489,29490,29491,29492,29493,29494,29495,29496,29497,29498,29499,29500,29501,29502,29503,29504,29505,29506,29507,29508,29509,29510,29511,29512,29513,29514,29515,29516,29517,29518,29519,29520,29521,29522,29523,29524,29525,29526,29527,29528,29529,29530,29531,29532,29533,29534,29535,29536,29537,29538,29539,29540,29541,29542,29543,29544,29545,29546,29547,29548,29549,29550,29551,29552,29553,29554,29555,29556,29557,29558,29559,29560,29561,29562,29563,29564,29565,29566,29567,29568,29569,29570,29571,29572,29573,29574,29575,29576,29577,29578,29579,29580,29581,29582,29583,29584,29585,29586,29587,29588,29589,29590,29591,29592,29593,29594,29595,29596,29597,29598,29599,29600,29601,29602,29603,29604,29605,29606,29607,29608,29609,29610,29611,29612,29613,29614,29615,29616,29617,29618,29619,29620,29621,29622,29623,29624,29625,29626,29627,29628,29629,29630,29631,29632,29633,29634,29635,29636,29637,29638,29639,29640,29641,29642,29643,29644,29645,29646,29647,29648,29649,29650,29651,29652,29653,29654,29655,29656,29657,29658,29659,29660,29661,29662,29663,29664,29665,29666,29667,29668,29669,29670,29671,29672,29673,29674,29675,29676,29677,29678,29679,29680,29681,29682,29683,29684,29685,29686,29687,29688,29689,29690,29691,29692,29693,29694,29695,29696,29697,29698,29699,29700,29701,29702,29703,29704,29705,29706,29707,29708,29709,29710,29711,29712,29713,29714,29715,29716,29717,29718,29719,29720,29721,29722,29723,29724,29725,29726,29727,29728,29729,29730,29731,29732,29733,29734,29735,29736,29737,29738,29739,29740,29741,29742,29743,29744,29745,29746,29747,29748,29749,29750,29751,29752,29753,29754,29755,29756,29757,29758,29759,29760,29761,29762,29763,29764,29765,29766,29767,29768,29769,29770,29771,29772,29773,29774,29775,29776,29777,29778,29779,29780,29781,29782,29783,29784,29785,29786,29787,29788,29789,29790,29791,29792,29793,29794,29795,29796,29797,29798,29799,29800,29801,29802,29803,29804,29805,29806,29807,29808,29809,29810,29811,29812,29813,29814,29815,29816,29817,29818,29819,29820,29821,29822,29823,29824,29825,29826,29827,29828,29829,29830,29831,29832,29833,29834,29835,29836,29837,29838,29839,29840,29841,29842,29843,29844,29845,29846,29847,29848,29849,29850,29851,29852,29853,29854,29855,29856,29857,29858,29859,29860,29861,29862,29863,29864,29865,29866,29867,29868,29869,29870,29871,29872,29873,29874,29875,29876,29877,29878,29879,29880,29881,29882,29883,29884,29885,29886,29887,29888,29889,29890,29891,29892,29893,29894,29895,29896,29897,29898,29899,29900,29901,29902,29903,29904,29905,29906,29907,29908,29909,29910,29911,29912,29913,29914,29915,29916,29917,29918,29919,29920,29921,29922,29923,29924,29925,29926,29927,29928,29929,29930,29931,29932,29933,29934,29935,29936,29937,29938,29939,29940,29941,29942,29943,29944,29945,29946,29947,29948,29949,29950,29951,29952,29953,29954,29955,29956,29957,29958,29959,29960,29961,29962,29963,29964,29965,29966,29967,29968,29969,29970,29971,29972,29973,29974,29975,29976,29977,29978,29979,29980,29981,29982,29983,29984,29985,29986,29987,29988,29989,29990,29991,29992,29993,29994,29995,29996,29997,29998,29999,3e4,30001,30002,30003,30004,30005,30006,30007,30008,30009,30010,30011,30012,30013,30014,30015,30016,30017,30018,30019,30020,30021,30022,30023,30024,30025,30026,30027,30028,30029,30030,30031,30032,30033,30034,30035,30036,30037,30038,30039,30040,30041,30042,30043,30044,30045,30046,30047,30048,30049,30050,30051,30052,30053,30054,30055,30056,30057,30058,30059,30060,30061,30062,30063,30064,30065,30066,30067,30068,30069,30070,30071,30072,30073,30074,30075,30076,30077,30078,30079,30080,30081,30082,30083,30084,30085,30086,30087,30088,30089,30090,30091,30092,30093,30094,30095,30096,30097,30098,30099,30100,30101,30102,30103,30104,30105,30106,30107,30108,30109,30110,30111,30112,30113,30114,30115,30116,30117,30118,30119,30120,30121,30122,30123,30124,30125,30126,30127,30128,30129,30130,30131,30132,30133,30134,30135,30136,30137,30138,30139,30140,30141,30142,30143,30144,30145,30146,30147,30148,30149,30150,30151,30152,30153,30154,30155,30156,30157,30158,30159,30160,30161,30162,30163,30164,30165,30166,30167,30168,30169,30170,30171,30172,30173,30174,30175,30176,30177,30178,30179,30180,30181,30182,30183,30184,30185,30186,30187,30188,30189,30190,30191,30192,30193,30194,30195,30196,30197,30198,30199,30200,30201,30202,30203,30204,30205,30206,30207,30208,30209,30210,30211,30212,30213,30214,30215,30216,30217,30218,30219,30220,30221,30222,30223,30224,30225,30226,30227,30228,30229,30230,30231,30232,30233,30234,30235,30236,30237,30238,30239,30240,30241,30242,30243,30244,30245,30246,30247,30248,30249,30250,30251,30252,30253,30254,30255,30256,30257,30258,30259,30260,30261,30262,30263,30264,30265,30266,30267,30268,30269,30270,30271,30272,30273,30274,30275,30276,30277,30278,30279,30280,30281,30282,30283,30284,30285,30286,30287,30288,30289,30290,30291,30292,30293,30294,30295,30296,30297,30298,30299,30300,30301,30302,30303,30304,30305,30306,30307,30308,30309,30310,30311,30312,30313,30314,30315,30316,30317,30318,30319,30320,30321,30322,30323,30324,30325,30326,30327,30328,30329,30330,30331,30332,30333,30334,30335,30336,30337,30338,30339,30340,30341,30342,30343,30344,30345,30346,30347,30348,30349,30350,30351,30352,30353,30354,30355,30356,30357,30358,30359,30360,30361,30362,30363,30364,30365,30366,30367,30368,30369,30370,30371,30372,30373,30374,30375,30376,30377,30378,30379,30380,30381,30382,30383,30384,30385,30386,30387,30388,30389,30390,30391,30392,30393,30394,30395,30396,30397,30398,30399,30400,30401,30402,30403,30404,30405,30406,30407,30408,30409,30410,30411,30412,30413,30414,30415,30416,30417,30418,30419,30420,30421,30422,30423,30424,30425,30426,30427,30428,30429,30430,30431,30432,30433,30434,30435,30436,30437,30438,30439,30440,30441,30442,30443,30444,30445,30446,30447,30448,30449,30450,30451,30452,30453,30454,30455,30456,30457,30458,30459,30460,30461,30462,30463,30464,30465,30466,30467,30468,30469,30470,30471,30472,30473,30474,30475,30476,30477,30478,30479,30480,30481,30482,30483,30484,30485,30486,30487,30488,30489,30490,30491,30492,30493,30494,30495,30496,30497,30498,30499,30500,30501,30502,30503,30504,30505,30506,30507,30508,30509,30510,30511,30512,30513,30514,30515,30516,30517,30518,30519,30520,30521,30522,30523,30524,30525,30526,30527,30528,30529,30530,30531,30532,30533,30534,30535,30536,30537,30538,30539,30540,30541,30542,30543,30544,30545,30546,30547,30548,30549,30550,30551,30552,30553,30554,30555,30556,30557,30558,30559,30560,30561,30562,30563,30564,30565,30566,30567,30568,30569,30570,30571,30572,30573,30574,30575,30576,30577,30578,30579,30580,30581,30582,30583,30584,30585,30586,30587,30588,30589,30590,30591,30592,30593,30594,30595,30596,30597,30598,30599,30600,30601,30602,30603,30604,30605,30606,30607,30608,30609,30610,30611,30612,30613,30614,30615,30616,30617,30618,30619,30620,30621,30622,30623,30624,30625,30626,30627,30628,30629,30630,30631,30632,30633,30634,30635,30636,30637,30638,30639,30640,30641,30642,30643,30644,30645,30646,30647,30648,30649,30650,30651,30652,30653,30654,30655,30656,30657,30658,30659,30660,30661,30662,30663,30664,30665,30666,30667,30668,30669,30670,30671,30672,30673,30674,30675,30676,30677,30678,30679,30680,30681,30682,30683,30684,30685,30686,30687,30688,30689,30690,30691,30692,30693,30694,30695,30696,30697,30698,30699,30700,30701,30702,30703,30704,30705,30706,30707,30708,30709,30710,30711,30712,30713,30714,30715,30716,30717,30718,30719,30720,30721,30722,30723,30724,30725,30726,30727,30728,30729,30730,30731,30732,30733,30734,30735,30736,30737,30738,30739,30740,30741,30742,30743,30744,30745,30746,30747,30748,30749,30750,30751,30752,30753,30754,30755,30756,30757,30758,30759,30760,30761,30762,30763,30764,30765,30766,30767,30768,30769,30770,30771,30772,30773,30774,30775,30776,30777,30778,30779,30780,30781,30782,30783,30784,30785,30786,30787,30788,30789,30790,30791,30792,30793,30794,30795,30796,30797,30798,30799,30800,30801,30802,30803,30804,30805,30806,30807,30808,30809,30810,30811,30812,30813,30814,30815,30816,30817,30818,30819,30820,30821,30822,30823,30824,30825,30826,30827,30828,30829,30830,30831,30832,30833,30834,30835,30836,30837,30838,30839,30840,30841,30842,30843,30844,30845,30846,30847,30848,30849,30850,30851,30852,30853,30854,30855,30856,30857,30858,30859,30860,30861,30862,30863,30864,30865,30866,30867,30868,30869,30870,30871,30872,30873,30874,30875,30876,30877,30878,30879,30880,30881,30882,30883,30884,30885,30886,30887,30888,30889,30890,30891,30892,30893,30894,30895,30896,30897,30898,30899,30900,30901,30902,30903,30904,30905,30906,30907,30908,30909,30910,30911,30912,30913,30914,30915,30916,30917,30918,30919,30920,30921,30922,30923,30924,30925,30926,30927,30928,30929,30930,30931,30932,30933,30934,30935,30936,30937,30938,30939,30940,30941,30942,30943,30944,30945,30946,30947,30948,30949,30950,30951,30952,30953,30954,30955,30956,30957,30958,30959,30960,30961,30962,30963,30964,30965,30966,30967,30968,30969,30970,30971,30972,30973,30974,30975,30976,30977,30978,30979,30980,30981,30982,30983,30984,30985,30986,30987,30988,30989,30990,30991,30992,30993,30994,30995,30996,30997,30998,30999,31e3,31001,31002,31003,31004,31005,31006,31007,31008,31009,31010,31011,31012,31013,31014,31015,31016,31017,31018,31019,31020,31021,31022,31023,31024,31025,31026,31027,31028,31029,31030,31031,31032,31033,31034,31035,31036,31037,31038,31039,31040,31041,31042,31043,31044,31045,31046,31047,31048,31049,31050,31051,31052,31053,31054,31055,31056,31057,31058,31059,31060,31061,31062,31063,31064,31065,31066,31067,31068,31069,31070,31071,31072,31073,31074,31075,31076,31077,31078,31079,31080,31081,31082,31083,31084,31085,31086,31087,31088,31089,31090,31091,31092,31093,31094,31095,31096,31097,31098,31099,31100,31101,31102,31103,31104,31105,31106,31107,31108,31109,31110,31111,31112,31113,31114,31115,31116,31117,31118,31119,31120,31121,31122,31123,31124,31125,31126,31127,31128,31129,31130,31131,31132,31133,31134,31135,31136,31137,31138,31139,31140,31141,31142,31143,31144,31145,31146,31147,31148,31149,31150,31151,31152,31153,31154,31155,31156,31157,31158,31159,31160,31161,31162,31163,31164,31165,31166,31167,31168,31169,31170,31171,31172,31173,31174,31175,31176,31177,31178,31179,31180,31181,31182,31183,31184,31185,31186,31187,31188,31189,31190,31191,31192,31193,31194,31195,31196,31197,31198,31199,31200,31201,31202,31203,31204,31205,31206,31207,31208,31209,31210,31211,31212,31213,31214,31215,31216,31217,31218,31219,31220,31221,31222,31223,31224,31225,31226,31227,31228,31229,31230,31231,31232,31233,31234,31235,31236,31237,31238,31239,31240,31241,31242,31243,31244,31245,31246,31247,31248,31249,31250,31251,31252,31253,31254,31255,31256,31257,31258,31259,31260,31261,31262,31263,31264,31265,31266,31267,31268,31269,31270,31271,31272,31273,31274,31275,31276,31277,31278,31279,31280,31281,31282,31283,31284,31285,31286,31287,31288,31289,31290,31291,31292,31293,31294,31295,31296,31297,31298,31299,31300,31301,31302,31303,31304,31305,31306,31307,31308,31309,31310,31311,31312,31313,31314,31315,31316,31317,31318,31319,31320,31321,31322,31323,31324,31325,31326,31327,31328,31329,31330,31331,31332,31333,31334,31335,31336,31337,31338,31339,31340,31341,31342,31343,31344,31345,31346,31347,31348,31349,31350,31351,31352,31353,31354,31355,31356,31357,31358,31359,31360,31361,31362,31363,31364,31365,31366,31367,31368,31369,31370,31371,31372,31373,31374,31375,31376,31377,31378,31379,31380,31381,31382,31383,31384,31385,31386,31387,31388,31389,31390,31391,31392,31393,31394,31395,31396,31397,31398,31399,31400,31401,31402,31403,31404,31405,31406,31407,31408,31409,31410,31411,31412,31413,31414,31415,31416,31417,31418,31419,31420,31421,31422,31423,31424,31425,31426,31427,31428,31429,31430,31431,31432,31433,31434,31435,31436,31437,31438,31439,31440,31441,31442,31443,31444,31445,31446,31447,31448,31449,31450,31451,31452,31453,31454,31455,31456,31457,31458,31459,31460,31461,31462,31463,31464,31465,31466,31467,31468,31469,31470,31471,31472,31473,31474,31475,31476,31477,31478,31479,31480,31481,31482,31483,31484,31485,31486,31487,31488,31489,31490,31491,31492,31493,31494,31495,31496,31497,31498,31499,31500,31501,31502,31503,31504,31505,31506,31507,31508,31509,31510,31511,31512,31513,31514,31515,31516,31517,31518,31519,31520,31521,31522,31523,31524,31525,31526,31527,31528,31529,31530,31531,31532,31533,31534,31535,31536,31537,31538,31539,31540,31541,31542,31543,31544,31545,31546,31547,31548,31549,31550,31551,31552,31553,31554,31555,31556,31557,31558,31559,31560,31561,31562,31563,31564,31565,31566,31567,31568,31569,31570,31571,31572,31573,31574,31575,31576,31577,31578,31579,31580,31581,31582,31583,31584,31585,31586,31587,31588,31589,31590,31591,31592,31593,31594,31595,31596,31597,31598,31599,31600,31601,31602,31603,31604,31605,31606,31607,31608,31609,31610,31611,31612,31613,31614,31615,31616,31617,31618,31619,31620,31621,31622,31623,31624,31625,31626,31627,31628,31629,31630,31631,31632,31633,31634,31635,31636,31637,31638,31639,31640,31641,31642,31643,31644,31645,31646,31647,31648,31649,31650,31651,31652,31653,31654,31655,31656,31657,31658,31659,31660,31661,31662,31663,31664,31665,31666,31667,31668,31669,31670,31671,31672,31673,31674,31675,31676,31677,31678,31679,31680,31681,31682,31683,31684,31685,31686,31687,31688,31689,31690,31691,31692,31693,31694,31695,31696,31697,31698,31699,31700,31701,31702,31703,31704,31705,31706,31707,31708,31709,31710,31711,31712,31713,31714,31715,31716,31717,31718,31719,31720,31721,31722,31723,31724,31725,31726,31727,31728,31729,31730,31731,31732,31733,31734,31735,31736,31737,31738,31739,31740,31741,31742,31743,31744,31745,31746,31747,31748,31749,31750,31751,31752,31753,31754,31755,31756,31757,31758,31759,31760,31761,31762,31763,31764,31765,31766,31767,31768,31769,31770,31771,31772,31773,31774,31775,31776,31777,31778,31779,31780,31781,31782,31783,31784,31785,31786,31787,31788,31789,31790,31791,31792,31793,31794,31795,31796,31797,31798,31799,31800,31801,31802,31803,31804,31805,31806,31807,31808,31809,31810,31811,31812,31813,31814,31815,31816,31817,31818,31819,31820,31821,31822,31823,31824,31825,31826,31827,31828,31829,31830,31831,31832,31833,31834,31835,31836,31837,31838,31839,31840,31841,31842,31843,31844,31845,31846,31847,31848,31849,31850,31851,31852,31853,31854,31855,31856,31857,31858,31859,31860,31861,31862,31863,31864,31865,31866,31867,31868,31869,31870,31871,31872,31873,31874,31875,31876,31877,31878,31879,31880,31881,31882,31883,31884,31885,31886,31887,31888,31889,31890,31891,31892,31893,31894,31895,31896,31897,31898,31899,31900,31901,31902,31903,31904,31905,31906,31907,31908,31909,31910,31911,31912,31913,31914,31915,31916,31917,31918,31919,31920,31921,31922,31923,31924,31925,31926,31927,31928,31929,31930,31931,31932,31933,31934,31935,31936,31937,31938,31939,31940,31941,31942,31943,31944,31945,31946,31947,31948,31949,31950,31951,31952,31953,31954,31955,31956,31957,31958,31959,31960,31961,31962,31963,31964,31965,31966,31967,31968,31969,31970,31971,31972,31973,31974,31975,31976,31977,31978,31979,31980,31981,31982,31983,31984,31985,31986,31987,31988,31989,31990,31991,31992,31993,31994,31995,31996,31997,31998,31999,32e3,32001,32002,32003,32004,32005,32006,32007,32008,32009,32010,32011,32012,32013,32014,32015,32016,32017,32018,32019,32020,32021,32022,32023,32024,32025,32026,32027,32028,32029,32030,32031,32032,32033,32034,32035,32036,32037,32038,32039,32040,32041,32042,32043,32044,32045,32046,32047,32048,32049,32050,32051,32052,32053,32054,32055,32056,32057,32058,32059,32060,32061,32062,32063,32064,32065,32066,32067,32068,32069,32070,32071,32072,32073,32074,32075,32076,32077,32078,32079,32080,32081,32082,32083,32084,32085,32086,32087,32088,32089,32090,32091,32092,32093,32094,32095,32096,32097,32098,32099,32100,32101,32102,32103,32104,32105,32106,32107,32108,32109,32110,32111,32112,32113,32114,32115,32116,32117,32118,32119,32120,32121,32122,32123,32124,32125,32126,32127,32128,32129,32130,32131,32132,32133,32134,32135,32136,32137,32138,32139,32140,32141,32142,32143,32144,32145,32146,32147,32148,32149,32150,32151,32152,32153,32154,32155,32156,32157,32158,32159,32160,32161,32162,32163,32164,32165,32166,32167,32168,32169,32170,32171,32172,32173,32174,32175,32176,32177,32178,32179,32180,32181,32182,32183,32184,32185,32186,32187,32188,32189,32190,32191,32192,32193,32194,32195,32196,32197,32198,32199,32200,32201,32202,32203,32204,32205,32206,32207,32208,32209,32210,32211,32212,32213,32214,32215,32216,32217,32218,32219,32220,32221,32222,32223,32224,32225,32226,32227,32228,32229,32230,32231,32232,32233,32234,32235,32236,32237,32238,32239,32240,32241,32242,32243,32244,32245,32246,32247,32248,32249,32250,32251,32252,32253,32254,32255,32256,32257,32258,32259,32260,32261,32262,32263,32264,32265,32266,32267,32268,32269,32270,32271,32272,32273,32274,32275,32276,32277,32278,32279,32280,32281,32282,32283,32284,32285,32286,32287,32288,32289,32290,32291,32292,32293,32294,32295,32296,32297,32298,32299,32300,32301,32302,32303,32304,32305,32306,32307,32308,32309,32310,32311,32312,32313,32314,32315,32316,32317,32318,32319,32320,32321,32322,32323,32324,32325,32326,32327,32328,32329,32330,32331,32332,32333,32334,32335,32336,32337,32338,32339,32340,32341,32342,32343,32344,32345,32346,32347,32348,32349,32350,32351,32352,32353,32354,32355,32356,32357,32358,32359,32360,32361,32362,32363,32364,32365,32366,32367,32368,32369,32370,32371,32372,32373,32374,32375,32376,32377,32378,32379,32380,32381,32382,32383,32384,32385,32386,32387,32388,32389,32390,32391,32392,32393,32394,32395,32396,32397,32398,32399,32400,32401,32402,32403,32404,32405,32406,32407,32408,32409,32410,32411,32412,32413,32414,32415,32416,32417,32418,32419,32420,32421,32422,32423,32424,32425,32426,32427,32428,32429,32430,32431,32432,32433,32434,32435,32436,32437,32438,32439,32440,32441,32442,32443,32444,32445,32446,32447,32448,32449,32450,32451,32452,32453,32454,32455,32456,32457,32458,32459,32460,32461,32462,32463,32464,32465,32466,32467,32468,32469,32470,32471,32472,32473,32474,32475,32476,32477,32478,32479,32480,32481,32482,32483,32484,32485,32486,32487,32488,32489,32490,32491,32492,32493,32494,32495,32496,32497,32498,32499,32500,32501,32502,32503,32504,32505,32506,32507,32508,32509,32510,32511,32512,32513,32514,32515,32516,32517,32518,32519,32520,32521,32522,32523,32524,32525,32526,32527,32528,32529,32530,32531,32532,32533,32534,32535,32536,32537,32538,32539,32540,32541,32542,32543,32544,32545,32546,32547,32548,32549,32550,32551,32552,32553,32554,32555,32556,32557,32558,32559,32560,32561,32562,32563,32564,32565,32566,32567,32568,32569,32570,32571,32572,32573,32574,32575,32576,32577,32578,32579,32580,32581,32582,32583,32584,32585,32586,32587,32588,32589,32590,32591,32592,32593,32594,32595,32596,32597,32598,32599,32600,32601,32602,32603,32604,32605,32606,32607,32608,32609,32610,32611,32612,32613,32614,32615,32616,32617,32618,32619,32620,32621,32622,32623,32624,32625,32626,32627,32628,32629,32630,32631,32632,32633,32634,32635,32636,32637,32638,32639,32640,32641,32642,32643,32644,32645,32646,32647,32648,32649,32650,32651,32652,32653,32654,32655,32656,32657,32658,32659,32660,32661,32662,32663,32664,32665,32666,32667,32668,32669,32670,32671,32672,32673,32674,32675,32676,32677,32678,32679,32680,32681,32682,32683,32684,32685,32686,32687,32688,32689,32690,32691,32692,32693,32694,32695,32696,32697,32698,32699,32700,32701,32702,32703,32704,32705,32706,32707,32708,32709,32710,32711,32712,32713,32714,32715,32716,32717,32718,32719,32720,32721,32722,32723,32724,32725,32726,32727,32728,32729,32730,32731,32732,32733,32734,32735,32736,32737,32738,32739,32740,32741,32742,32743,32744,32745,32746,32747,32748,32749,32750,32751,32752,32753,32754,32755,32756,32757,32758,32759,32760,32761,32762,32763,32764,32765,32766,32767,32768,32769,32770,32771,32772,32773,32774,32775,32776,32777,32778,32779,32780,32781,32782,32783,32784,32785,32786,32787,32788,32789,32790,32791,32792,32793,32794,32795,32796,32797,32798,32799,32800,32801,32802,32803,32804,32805,32806,32807,32808,32809,32810,32811,32812,32813,32814,32815,32816,32817,32818,32819,32820,32821,32822,32823,32824,32825,32826,32827,32828,32829,32830,32831,32832,32833,32834,32835,32836,32837,32838,32839,32840,32841,32842,32843,32844,32845,32846,32847,32848,32849,32850,32851,32852,32853,32854,32855,32856,32857,32858,32859,32860,32861,32862,32863,32864,32865,32866,32867,32868,32869,32870,32871,32872,32873,32874,32875,32876,32877,32878,32879,32880,32881,32882,32883,32884,32885,32886,32887,32888,32889,32890,32891,32892,32893,32894,32895,32896,32897,32898,32899,32900,32901,32902,32903,32904,32905,32906,32907,32908,32909,32910,32911,32912,32913,32914,32915,32916,32917,32918,32919,32920,32921,32922,32923,32924,32925,32926,32927,32928,32929,32930,32931,32932,32933,32934,32935,32936,32937,32938,32939,32940,32941,32942,32943,32944,32945,32946,32947,32948,32949,32950,32951,32952,32953,32954,32955,32956,32957,32958,32959,32960,32961,32962,32963,32964,32965,32966,32967,32968,32969,32970,32971,32972,32973,32974,32975,32976,32977,32978,32979,32980,32981,32982,32983,32984,32985,32986,32987,32988,32989,32990,32991,32992,32993,32994,32995,32996,32997,32998,32999,33e3,33001,33002,33003,33004,33005,33006,33007,33008,33009,33010,33011,33012,33013,33014,33015,33016,33017,33018,33019,33020,33021,33022,33023,33024,33025,33026,33027,33028,33029,33030,33031,33032,33033,33034,33035,33036,33037,33038,33039,33040,33041,33042,33043,33044,33045,33046,33047,33048,33049,33050,33051,33052,33053,33054,33055,33056,33057,33058,33059,33060,33061,33062,33063,33064,33065,33066,33067,33068,33069,33070,33071,33072,33073,33074,33075,33076,33077,33078,33079,33080,33081,33082,33083,33084,33085,33086,33087,33088,33089,33090,33091,33092,33093,33094,33095,33096,33097,33098,33099,33100,33101,33102,33103,33104,33105,33106,33107,33108,33109,33110,33111,33112,33113,33114,33115,33116,33117,33118,33119,33120,33121,33122,33123,33124,33125,33126,33127,33128,33129,33130,33131,33132,33133,33134,33135,33136,33137,33138,33139,33140,33141,33142,33143,33144,33145,33146,33147,33148,33149,33150,33151,33152,33153,33154,33155,33156,33157,33158,33159,33160,33161,33162,33163,33164,33165,33166,33167,33168,33169,33170,33171,33172,33173,33174,33175,33176,33177,33178,33179,33180,33181,33182,33183,33184,33185,33186,33187,33188,33189,33190,33191,33192,33193,33194,33195,33196,33197,33198,33199,33200,33201,33202,33203,33204,33205,33206,33207,33208,33209,33210,33211,33212,33213,33214,33215,33216,33217,33218,33219,33220,33221,33222,33223,33224,33225,33226,33227,33228,33229,33230,33231,33232,33233,33234,33235,33236,33237,33238,33239,33240,33241,33242,33243,33244,33245,33246,33247,33248,33249,33250,33251,33252,33253,33254,33255,33256,33257,33258,33259,33260,33261,33262,33263,33264,33265,33266,33267,33268,33269,33270,33271,33272,33273,33274,33275,33276,33277,33278,33279,33280,33281,33282,33283,33284,33285,33286,33287,33288,33289,33290,33291,33292,33293,33294,33295,33296,33297,33298,33299,33300,33301,33302,33303,33304,33305,33306,33307,33308,33309,33310,33311,33312,33313,33314,33315,33316,33317,33318,33319,33320,33321,33322,33323,33324,33325,33326,33327,33328,33329,33330,33331,33332,33333,33334,33335,33336,33337,33338,33339,33340,33341,33342,33343,33344,33345,33346,33347,33348,33349,33350,33351,33352,33353,33354,33355,33356,33357,33358,33359,33360,33361,33362,33363,33364,33365,33366,33367,33368,33369,33370,33371,33372,33373,33374,33375,33376,33377,33378,33379,33380,33381,33382,33383,33384,33385,33386,33387,33388,33389,33390,33391,33392,33393,33394,33395,33396,33397,33398,33399,33400,33401,33402,33403,33404,33405,33406,33407,33408,33409,33410,33411,33412,33413,33414,33415,33416,33417,33418,33419,33420,33421,33422,33423,33424,33425,33426,33427,33428,33429,33430,33431,33432,33433,33434,33435,33436,33437,33438,33439,33440,33441,33442,33443,33444,33445,33446,33447,33448,33449,33450,33451,33452,33453,33454,33455,33456,33457,33458,33459,33460,33461,33462,33463,33464,33465,33466,33467,33468,33469,33470,33471,33472,33473,33474,33475,33476,33477,33478,33479,33480,33481,33482,33483,33484,33485,33486,33487,33488,33489,33490,33491,33492,33493,33494,33495,33496,33497,33498,33499,33500,33501,33502,33503,33504,33505,33506,33507,33508,33509,33510,33511,33512,33513,33514,33515,33516,33517,33518,33519,33520,33521,33522,33523,33524,33525,33526,33527,33528,33529,33530,33531,33532,33533,33534,33535,33536,33537,33538,33539,33540,33541,33542,33543,33544,33545,33546,33547,33548,33549,33550,33551,33552,33553,33554,33555,33556,33557,33558,33559,33560,33561,33562,33563,33564,33565,33566,33567,33568,33569,33570,33571,33572,33573,33574,33575,33576,33577,33578,33579,33580,33581,33582,33583,33584,33585,33586,33587,33588,33589,33590,33591,33592,33593,33594,33595,33596,33597,33598,33599,33600,33601,33602,33603,33604,33605,33606,33607,33608,33609,33610,33611,33612,33613,33614,33615,33616,33617,33618,33619,33620,33621,33622,33623,33624,33625,33626,33627,33628,33629,33630,33631,33632,33633,33634,33635,33636,33637,33638,33639,33640,33641,33642,33643,33644,33645,33646,33647,33648,33649,33650,33651,33652,33653,33654,33655,33656,33657,33658,33659,33660,33661,33662,33663,33664,33665,33666,33667,33668,33669,33670,33671,33672,33673,33674,33675,33676,33677,33678,33679,33680,33681,33682,33683,33684,33685,33686,33687,33688,33689,33690,33691,33692,33693,33694,33695,33696,33697,33698,33699,33700,33701,33702,33703,33704,33705,33706,33707,33708,33709,33710,33711,33712,33713,33714,33715,33716,33717,33718,33719,33720,33721,33722,33723,33724,33725,33726,33727,33728,33729,33730,33731,33732,33733,33734,33735,33736,33737,33738,33739,33740,33741,33742,33743,33744,33745,33746,33747,33748,33749,33750,33751,33752,33753,33754,33755,33756,33757,33758,33759,33760,33761,33762,33763,33764,33765,33766,33767,33768,33769,33770,33771,33772,33773,33774,33775,33776,33777,33778,33779,33780,33781,33782,33783,33784,33785,33786,33787,33788,33789,33790,33791,33792,33793,33794,33795,33796,33797,33798,33799,33800,33801,33802,33803,33804,33805,33806,33807,33808,33809,33810,33811,33812,33813,33814,33815,33816,33817,33818,33819,33820,33821,33822,33823,33824,33825,33826,33827,33828,33829,33830,33831,33832,33833,33834,33835,33836,33837,33838,33839,33840,33841,33842,33843,33844,33845,33846,33847,33848,33849,33850,33851,33852,33853,33854,33855,33856,33857,33858,33859,33860,33861,33862,33863,33864,33865,33866,33867,33868,33869,33870,33871,33872,33873,33874,33875,33876,33877,33878,33879,33880,33881,33882,33883,33884,33885,33886,33887,33888,33889,33890,33891,33892,33893,33894,33895,33896,33897,33898,33899,33900,33901,33902,33903,33904,33905,33906,33907,33908,33909,33910,33911,33912,33913,33914,33915,33916,33917,33918,33919,33920,33921,33922,33923,33924,33925,33926,33927,33928,33929,33930,33931,33932,33933,33934,33935,33936,33937,33938,33939,33940,33941,33942,33943,33944,33945,33946,33947,33948,33949,33950,33951,33952,33953,33954,33955,33956,33957,33958,33959,33960,33961,33962,33963,33964,33965,33966,33967,33968,33969,33970,33971,33972,33973,33974,33975,33976,33977,33978,33979,33980,33981,33982,33983,33984,33985,33986,33987,33988,33989,33990,33991,33992,33993,33994,33995,33996,33997,33998,33999,34e3,34001,34002,34003,34004,34005,34006,34007,34008,34009,34010,34011,34012,34013,34014,34015,34016,34017,34018,34019,34020,34021,34022,34023,34024,34025,34026,34027,34028,34029,34030,34031,34032,34033,34034,34035,34036,34037,34038,34039,34040,34041,34042,34043,34044,34045,34046,34047,34048,34049,34050,34051,34052,34053,34054,34055,34056,34057,34058,34059,34060,34061,34062,34063,34064,34065,34066,34067,34068,34069,34070,34071,34072,34073,34074,34075,34076,34077,34078,34079,34080,34081,34082,34083,34084,34085,34086,34087,34088,34089,34090,34091,34092,34093,34094,34095,34096,34097,34098,34099,34100,34101,34102,34103,34104,34105,34106,34107,34108,34109,34110,34111,34112,34113,34114,34115,34116,34117,34118,34119,34120,34121,34122,34123,34124,34125,34126,34127,34128,34129,34130,34131,34132,34133,34134,34135,34136,34137,34138,34139,34140,34141,34142,34143,34144,34145,34146,34147,34148,34149,34150,34151,34152,34153,34154,34155,34156,34157,34158,34159,34160,34161,34162,34163,34164,34165,34166,34167,34168,34169,34170,34171,34172,34173,34174,34175,34176,34177,34178,34179,34180,34181,34182,34183,34184,34185,34186,34187,34188,34189,34190,34191,34192,34193,34194,34195,34196,34197,34198,34199,34200,34201,34202,34203,34204,34205,34206,34207,34208,34209,34210,34211,34212,34213,34214,34215,34216,34217,34218,34219,34220,34221,34222,34223,34224,34225,34226,34227,34228,34229,34230,34231,34232,34233,34234,34235,34236,34237,34238,34239,34240,34241,34242,34243,34244,34245,34246,34247,34248,34249,34250,34251,34252,34253,34254,34255,34256,34257,34258,34259,34260,34261,34262,34263,34264,34265,34266,34267,34268,34269,34270,34271,34272,34273,34274,34275,34276,34277,34278,34279,34280,34281,34282,34283,34284,34285,34286,34287,34288,34289,34290,34291,34292,34293,34294,34295,34296,34297,34298,34299,34300,34301,34302,34303,34304,34305,34306,34307,34308,34309,34310,34311,34312,34313,34314,34315,34316,34317,34318,34319,34320,34321,34322,34323,34324,34325,34326,34327,34328,34329,34330,34331,34332,34333,34334,34335,34336,34337,34338,34339,34340,34341,34342,34343,34344,34345,34346,34347,34348,34349,34350,34351,34352,34353,34354,34355,34356,34357,34358,34359,34360,34361,34362,34363,34364,34365,34366,34367,34368,34369,34370,34371,34372,34373,34374,34375,34376,34377,34378,34379,34380,34381,34382,34383,34384,34385,34386,34387,34388,34389,34390,34391,34392,34393,34394,34395,34396,34397,34398,34399,34400,34401,34402,34403,34404,34405,34406,34407,34408,34409,34410,34411,34412,34413,34414,34415,34416,34417,34418,34419,34420,34421,34422,34423,34424,34425,34426,34427,34428,34429,34430,34431,34432,34433,34434,34435,34436,34437,34438,34439,34440,34441,34442,34443,34444,34445,34446,34447,34448,34449,34450,34451,34452,34453,34454,34455,34456,34457,34458,34459,34460,34461,34462,34463,34464,34465,34466,34467,34468,34469,34470,34471,34472,34473,34474,34475,34476,34477,34478,34479,34480,34481,34482,34483,34484,34485,34486,34487,34488,34489,34490,34491,34492,34493,34494,34495,34496,34497,34498,34499,34500,34501,34502,34503,34504,34505,34506,34507,34508,34509,34510,34511,34512,34513,34514,34515,34516,34517,34518,34519,34520,34521,34522,34523,34524,34525,34526,34527,34528,34529,34530,34531,34532,34533,34534,34535,34536,34537,34538,34539,34540,34541,34542,34543,34544,34545,34546,34547,34548,34549,34550,34551,34552,34553,34554,34555,34556,34557,34558,34559,34560,34561,34562,34563,34564,34565,34566,34567,34568,34569,34570,34571,34572,34573,34574,34575,34576,34577,34578,34579,34580,34581,34582,34583,34584,34585,34586,34587,34588,34589,34590,34591,34592,34593,34594,34595,34596,34597,34598,34599,34600,34601,34602,34603,34604,34605,34606,34607,34608,34609,34610,34611,34612,34613,34614,34615,34616,34617,34618,34619,34620,34621,34622,34623,34624,34625,34626,34627,34628,34629,34630,34631,34632,34633,34634,34635,34636,34637,34638,34639,34640,34641,34642,34643,34644,34645,34646,34647,34648,34649,34650,34651,34652,34653,34654,34655,34656,34657,34658,34659,34660,34661,34662,34663,34664,34665,34666,34667,34668,34669,34670,34671,34672,34673,34674,34675,34676,34677,34678,34679,34680,34681,34682,34683,34684,34685,34686,34687,34688,34689,34690,34691,34692,34693,34694,34695,34696,34697,34698,34699,34700,34701,34702,34703,34704,34705,34706,34707,34708,34709,34710,34711,34712,34713,34714,34715,34716,34717,34718,34719,34720,34721,34722,34723,34724,34725,34726,34727,34728,34729,34730,34731,34732,34733,34734,34735,34736,34737,34738,34739,34740,34741,34742,34743,34744,34745,34746,34747,34748,34749,34750,34751,34752,34753,34754,34755,34756,34757,34758,34759,34760,34761,34762,34763,34764,34765,34766,34767,34768,34769,34770,34771,34772,34773,34774,34775,34776,34777,34778,34779,34780,34781,34782,34783,34784,34785,34786,34787,34788,34789,34790,34791,34792,34793,34794,34795,34796,34797,34798,34799,34800,34801,34802,34803,34804,34805,34806,34807,34808,34809,34810,34811,34812,34813,34814,34815,34816,34817,34818,34819,34820,34821,34822,34823,34824,34825,34826,34827,34828,34829,34830,34831,34832,34833,34834,34835,34836,34837,34838,34839,34840,34841,34842,34843,34844,34845,34846,34847,34848,34849,34850,34851,34852,34853,34854,34855,34856,34857,34858,34859,34860,34861,34862,34863,34864,34865,34866,34867,34868,34869,34870,34871,34872,34873,34874,34875,34876,34877,34878,34879,34880,34881,34882,34883,34884,34885,34886,34887,34888,34889,34890,34891,34892,34893,34894,34895,34896,34897,34898,34899,34900,34901,34902,34903,34904,34905,34906,34907,34908,34909,34910,34911,34912,34913,34914,34915,34916,34917,34918,34919,34920,34921,34922,34923,34924,34925,34926,34927,34928,34929,34930,34931,34932,34933,34934,34935,34936,34937,34938,34939,34940,34941,34942,34943,34944,34945,34946,34947,34948,34949,34950,34951,34952,34953,34954,34955,34956,34957,34958,34959,34960,34961,34962,34963,34964,34965,34966,34967,34968,34969,34970,34971,34972,34973,34974,34975,34976,34977,34978,34979,34980,34981,34982,34983,34984,34985,34986,34987,34988,34989,34990,34991,34992,34993,34994,34995,34996,34997,34998,34999,35e3,35001,35002,35003,35004,35005,35006,35007,35008,35009,35010,35011,35012,35013,35014,35015,35016,35017,35018,35019,35020,35021,35022,35023,35024,35025,35026,35027,35028,35029,35030,35031,35032,35033,35034,35035,35036,35037,35038,35039,35040,35041,35042,35043,35044,35045,35046,35047,35048,35049,35050,35051,35052,35053,35054,35055,35056,35057,35058,35059,35060,35061,35062,35063,35064,35065,35066,35067,35068,35069,35070,35071,35072,35073,35074,35075,35076,35077,35078,35079,35080,35081,35082,35083,35084,35085,35086,35087,35088,35089,35090,35091,35092,35093,35094,35095,35096,35097,35098,35099,35100,35101,35102,35103,35104,35105,35106,35107,35108,35109,35110,35111,35112,35113,35114,35115,35116,35117,35118,35119,35120,35121,35122,35123,35124,35125,35126,35127,35128,35129,35130,35131,35132,35133,35134,35135,35136,35137,35138,35139,35140,35141,35142,35143,35144,35145,35146,35147,35148,35149,35150,35151,35152,35153,35154,35155,35156,35157,35158,35159,35160,35161,35162,35163,35164,35165,35166,35167,35168,35169,35170,35171,35172,35173,35174,35175,35176,35177,35178,35179,35180,35181,35182,35183,35184,35185,35186,35187,35188,35189,35190,35191,35192,35193,35194,35195,35196,35197,35198,35199,35200,35201,35202,35203,35204,35205,35206,35207,35208,35209,35210,35211,35212,35213,35214,35215,35216,35217,35218,35219,35220,35221,35222,35223,35224,35225,35226,35227,35228,35229,35230,35231,35232,35233,35234,35235,35236,35237,35238,35239,35240,35241,35242,35243,35244,35245,35246,35247,35248,35249,35250,35251,35252,35253,35254,35255,35256,35257,35258,35259,35260,35261,35262,35263,35264,35265,35266,35267,35268,35269,35270,35271,35272,35273,35274,35275,35276,35277,35278,35279,35280,35281,35282,35283,35284,35285,35286,35287,35288,35289,35290,35291,35292,35293,35294,35295,35296,35297,35298,35299,35300,35301,35302,35303,35304,35305,35306,35307,35308,35309,35310,35311,35312,35313,35314,35315,35316,35317,35318,35319,35320,35321,35322,35323,35324,35325,35326,35327,35328,35329,35330,35331,35332,35333,35334,35335,35336,35337,35338,35339,35340,35341,35342,35343,35344,35345,35346,35347,35348,35349,35350,35351,35352,35353,35354,35355,35356,35357,35358,35359,35360,35361,35362,35363,35364,35365,35366,35367,35368,35369,35370,35371,35372,35373,35374,35375,35376,35377,35378,35379,35380,35381,35382,35383,35384,35385,35386,35387,35388,35389,35390,35391,35392,35393,35394,35395,35396,35397,35398,35399,35400,35401,35402,35403,35404,35405,35406,35407,35408,35409,35410,35411,35412,35413,35414,35415,35416,35417,35418,35419,35420,35421,35422,35423,35424,35425,35426,35427,35428,35429,35430,35431,35432,35433,35434,35435,35436,35437,35438,35439,35440,35441,35442,35443,35444,35445,35446,35447,35448,35449,35450,35451,35452,35453,35454,35455,35456,35457,35458,35459,35460,35461,35462,35463,35464,35465,35466,35467,35468,35469,35470,35471,35472,35473,35474,35475,35476,35477,35478,35479,35480,35481,35482,35483,35484,35485,35486,35487,35488,35489,35490,35491,35492,35493,35494,35495,35496,35497,35498,35499,35500,35501,35502,35503,35504,35505,35506,35507,35508,35509,35510,35511,35512,35513,35514,35515,35516,35517,35518,35519,35520,35521,35522,35523,35524,35525,35526,35527,35528,35529,35530,35531,35532,35533,35534,35535,35536,35537,35538,35539,35540,35541,35542,35543,35544,35545,35546,35547,35548,35549,35550,35551,35552,35553,35554,35555,35556,35557,35558,35559,35560,35561,35562,35563,35564,35565,35566,35567,35568,35569,35570,35571,35572,35573,35574,35575,35576,35577,35578,35579,35580,35581,35582,35583,35584,35585,35586,35587,35588,35589,35590,35591,35592,35593,35594,35595,35596,35597,35598,35599,35600,35601,35602,35603,35604,35605,35606,35607,35608,35609,35610,35611,35612,35613,35614,35615,35616,35617,35618,35619,35620,35621,35622,35623,35624,35625,35626,35627,35628,35629,35630,35631,35632,35633,35634,35635,35636,35637,35638,35639,35640,35641,35642,35643,35644,35645,35646,35647,35648,35649,35650,35651,35652,35653,35654,35655,35656,35657,35658,35659,35660,35661,35662,35663,35664,35665,35666,35667,35668,35669,35670,35671,35672,35673,35674,35675,35676,35677,35678,35679,35680,35681,35682,35683,35684,35685,35686,35687,35688,35689,35690,35691,35692,35693,35694,35695,35696,35697,35698,35699,35700,35701,35702,35703,35704,35705,35706,35707,35708,35709,35710,35711,35712,35713,35714,35715,35716,35717,35718,35719,35720,35721,35722,35723,35724,35725,35726,35727,35728,35729,35730,35731,35732,35733,35734,35735,35736,35737,35738,35739,35740,35741,35742,35743,35744,35745,35746,35747,35748,35749,35750,35751,35752,35753,35754,35755,35756,35757,35758,35759,35760,35761,35762,35763,35764,35765,35766,35767,35768,35769,35770,35771,35772,35773,35774,35775,35776,35777,35778,35779,35780,35781,35782,35783,35784,35785,35786,35787,35788,35789,35790,35791,35792,35793,35794,35795,35796,35797,35798,35799,35800,35801,35802,35803,35804,35805,35806,35807,35808,35809,35810,35811,35812,35813,35814,35815,35816,35817,35818,35819,35820,35821,35822,35823,35824,35825,35826,35827,35828,35829,35830,35831,35832,35833,35834,35835,35836,35837,35838,35839,35840,35841,35842,35843,35844,35845,35846,35847,35848,35849,35850,35851,35852,35853,35854,35855,35856,35857,35858,35859,35860,35861,35862,35863,35864,35865,35866,35867,35868,35869,35870,35871,35872,35873,35874,35875,35876,35877,35878,35879,35880,35881,35882,35883,35884,35885,35886,35887,35888,35889,35890,35891,35892,35893,35894,35895,35896,35897,35898,35899,35900,35901,35902,35903,35904,35905,35906,35907,35908,35909,35910,35911,35912,35913,35914,35915,35916,35917,35918,35919,35920,35921,35922,35923,35924,35925,35926,35927,35928,35929,35930,35931,35932,35933,35934,35935,35936,35937,35938,35939,35940,35941,35942,35943,35944,35945,35946,35947,35948,35949,35950,35951,35952,35953,35954,35955,35956,35957,35958,35959,35960,35961,35962,35963,35964,35965,35966,35967,35968,35969,35970,35971,35972,35973,35974,35975,35976,35977,35978,35979,35980,35981,35982,35983,35984,35985,35986,35987,35988,35989,35990,35991,35992,35993,35994,35995,35996,35997,35998,35999,36e3,36001,36002,36003,36004,36005,36006,36007,36008,36009,36010,36011,36012,36013,36014,36015,36016,36017,36018,36019,36020,36021,36022,36023,36024,36025,36026,36027,36028,36029,36030,36031,36032,36033,36034,36035,36036,36037,36038,36039,36040,36041,36042,36043,36044,36045,36046,36047,36048,36049,36050,36051,36052,36053,36054,36055,36056,36057,36058,36059,36060,36061,36062,36063,36064,36065,36066,36067,36068,36069,36070,36071,36072,36073,36074,36075,36076,36077,36078,36079,36080,36081,36082,36083,36084,36085,36086,36087,36088,36089,36090,36091,36092,36093,36094,36095,36096,36097,36098,36099,36100,36101,36102,36103,36104,36105,36106,36107,36108,36109,36110,36111,36112,36113,36114,36115,36116,36117,36118,36119,36120,36121,36122,36123,36124,36125,36126,36127,36128,36129,36130,36131,36132,36133,36134,36135,36136,36137,36138,36139,36140,36141,36142,36143,36144,36145,36146,36147,36148,36149,36150,36151,36152,36153,36154,36155,36156,36157,36158,36159,36160,36161,36162,36163,36164,36165,36166,36167,36168,36169,36170,36171,36172,36173,36174,36175,36176,36177,36178,36179,36180,36181,36182,36183,36184,36185,36186,36187,36188,36189,36190,36191,36192,36193,36194,36195,36196,36197,36198,36199,36200,36201,36202,36203,36204,36205,36206,36207,36208,36209,36210,36211,36212,36213,36214,36215,36216,36217,36218,36219,36220,36221,36222,36223,36224,36225,36226,36227,36228,36229,36230,36231,36232,36233,36234,36235,36236,36237,36238,36239,36240,36241,36242,36243,36244,36245,36246,36247,36248,36249,36250,36251,36252,36253,36254,36255,36256,36257,36258,36259,36260,36261,36262,36263,36264,36265,36266,36267,36268,36269,36270,36271,36272,36273,36274,36275,36276,36277,36278,36279,36280,36281,36282,36283,36284,36285,36286,36287,36288,36289,36290,36291,36292,36293,36294,36295,36296,36297,36298,36299,36300,36301,36302,36303,36304,36305,36306,36307,36308,36309,36310,36311,36312,36313,36314,36315,36316,36317,36318,36319,36320,36321,36322,36323,36324,36325,36326,36327,36328,36329,36330,36331,36332,36333,36334,36335,36336,36337,36338,36339,36340,36341,36342,36343,36344,36345,36346,36347,36348,36349,36350,36351,36352,36353,36354,36355,36356,36357,36358,36359,36360,36361,36362,36363,36364,36365,36366,36367,36368,36369,36370,36371,36372,36373,36374,36375,36376,36377,36378,36379,36380,36381,36382,36383,36384,36385,36386,36387,36388,36389,36390,36391,36392,36393,36394,36395,36396,36397,36398,36399,36400,36401,36402,36403,36404,36405,36406,36407,36408,36409,36410,36411,36412,36413,36414,36415,36416,36417,36418,36419,36420,36421,36422,36423,36424,36425,36426,36427,36428,36429,36430,36431,36432,36433,36434,36435,36436,36437,36438,36439,36440,36441,36442,36443,36444,36445,36446,36447,36448,36449,36450,36451,36452,36453,36454,36455,36456,36457,36458,36459,36460,36461,36462,36463,36464,36465,36466,36467,36468,36469,36470,36471,36472,36473,36474,36475,36476,36477,36478,36479,36480,36481,36482,36483,36484,36485,36486,36487,36488,36489,36490,36491,36492,36493,36494,36495,36496,36497,36498,36499,36500,36501,36502,36503,36504,36505,36506,36507,36508,36509,36510,36511,36512,36513,36514,36515,36516,36517,36518,36519,36520,36521,36522,36523,36524,36525,36526,36527,36528,36529,36530,36531,36532,36533,36534,36535,36536,36537,36538,36539,36540,36541,36542,36543,36544,36545,36546,36547,36548,36549,36550,36551,36552,36553,36554,36555,36556,36557,36558,36559,36560,36561,36562,36563,36564,36565,36566,36567,36568,36569,36570,36571,36572,36573,36574,36575,36576,36577,36578,36579,36580,36581,36582,36583,36584,36585,36586,36587,36588,36589,36590,36591,36592,36593,36594,36595,36596,36597,36598,36599,36600,36601,36602,36603,36604,36605,36606,36607,36608,36609,36610,36611,36612,36613,36614,36615,36616,36617,36618,36619,36620,36621,36622,36623,36624,36625,36626,36627,36628,36629,36630,36631,36632,36633,36634,36635,36636,36637,36638,36639,36640,36641,36642,36643,36644,36645,36646,36647,36648,36649,36650,36651,36652,36653,36654,36655,36656,36657,36658,36659,36660,36661,36662,36663,36664,36665,36666,36667,36668,36669,36670,36671,36672,36673,36674,36675,36676,36677,36678,36679,36680,36681,36682,36683,36684,36685,36686,36687,36688,36689,36690,36691,36692,36693,36694,36695,36696,36697,36698,36699,36700,36701,36702,36703,36704,36705,36706,36707,36708,36709,36710,36711,36712,36713,36714,36715,36716,36717,36718,36719,36720,36721,36722,36723,36724,36725,36726,36727,36728,36729,36730,36731,36732,36733,36734,36735,36736,36737,36738,36739,36740,36741,36742,36743,36744,36745,36746,36747,36748,36749,36750,36751,36752,36753,36754,36755,36756,36757,36758,36759,36760,36761,36762,36763,36764,36765,36766,36767,36768,36769,36770,36771,36772,36773,36774,36775,36776,36777,36778,36779,36780,36781,36782,36783,36784,36785,36786,36787,36788,36789,36790,36791,36792,36793,36794,36795,36796,36797,36798,36799,36800,36801,36802,36803,36804,36805,36806,36807,36808,36809,36810,36811,36812,36813,36814,36815,36816,36817,36818,36819,36820,36821,36822,36823,36824,36825,36826,36827,36828,36829,36830,36831,36832,36833,36834,36835,36836,36837,36838,36839,36840,36841,36842,36843,36844,36845,36846,36847,36848,36849,36850,36851,36852,36853,36854,36855,36856,36857,36858,36859,36860,36861,36862,36863,36864,36865,36866,36867,36868,36869,36870,36871,36872,36873,36874,36875,36876,36877,36878,36879,36880,36881,36882,36883,36884,36885,36886,36887,36888,36889,36890,36891,36892,36893,36894,36895,36896,36897,36898,36899,36900,36901,36902,36903,36904,36905,36906,36907,36908,36909,36910,36911,36912,36913,36914,36915,36916,36917,36918,36919,36920,36921,36922,36923,36924,36925,36926,36927,36928,36929,36930,36931,36932,36933,36934,36935,36936,36937,36938,36939,36940,36941,36942,36943,36944,36945,36946,36947,36948,36949,36950,36951,36952,36953,36954,36955,36956,36957,36958,36959,36960,36961,36962,36963,36964,36965,36966,36967,36968,36969,36970,36971,36972,36973,36974,36975,36976,36977,36978,36979,36980,36981,36982,36983,36984,36985,36986,36987,36988,36989,36990,36991,36992,36993,36994,36995,36996,36997,36998,36999,37e3,37001,37002,37003,37004,37005,37006,37007,37008,37009,37010,37011,37012,37013,37014,37015,37016,37017,37018,37019,37020,37021,37022,37023,37024,37025,37026,37027,37028,37029,37030,37031,37032,37033,37034,37035,37036,37037,37038,37039,37040,37041,37042,37043,37044,37045,37046,37047,37048,37049,37050,37051,37052,37053,37054,37055,37056,37057,37058,37059,37060,37061,37062,37063,37064,37065,37066,37067,37068,37069,37070,37071,37072,37073,37074,37075,37076,37077,37078,37079,37080,37081,37082,37083,37084,37085,37086,37087,37088,37089,37090,37091,37092,37093,37094,37095,37096,37097,37098,37099,37100,37101,37102,37103,37104,37105,37106,37107,37108,37109,37110,37111,37112,37113,37114,37115,37116,37117,37118,37119,37120,37121,37122,37123,37124,37125,37126,37127,37128,37129,37130,37131,37132,37133,37134,37135,37136,37137,37138,37139,37140,37141,37142,37143,37144,37145,37146,37147,37148,37149,37150,37151,37152,37153,37154,37155,37156,37157,37158,37159,37160,37161,37162,37163,37164,37165,37166,37167,37168,37169,37170,37171,37172,37173,37174,37175,37176,37177,37178,37179,37180,37181,37182,37183,37184,37185,37186,37187,37188,37189,37190,37191,37192,37193,37194,37195,37196,37197,37198,37199,37200,37201,37202,37203,37204,37205,37206,37207,37208,37209,37210,37211,37212,37213,37214,37215,37216,37217,37218,37219,37220,37221,37222,37223,37224,37225,37226,37227,37228,37229,37230,37231,37232,37233,37234,37235,37236,37237,37238,37239,37240,37241,37242,37243,37244,37245,37246,37247,37248,37249,37250,37251,37252,37253,37254,37255,37256,37257,37258,37259,37260,37261,37262,37263,37264,37265,37266,37267,37268,37269,37270,37271,37272,37273,37274,37275,37276,37277,37278,37279,37280,37281,37282,37283,37284,37285,37286,37287,37288,37289,37290,37291,37292,37293,37294,37295,37296,37297,37298,37299,37300,37301,37302,37303,37304,37305,37306,37307,37308,37309,37310,37311,37312,37313,37314,37315,37316,37317,37318,37319,37320,37321,37322,37323,37324,37325,37326,37327,37328,37329,37330,37331,37332,37333,37334,37335,37336,37337,37338,37339,37340,37341,37342,37343,37344,37345,37346,37347,37348,37349,37350,37351,37352,37353,37354,37355,37356,37357,37358,37359,37360,37361,37362,37363,37364,37365,37366,37367,37368,37369,37370,37371,37372,37373,37374,37375,37376,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37387,37388,37389,37390,37391,37392,37393,37394,37395,37396,37397,37398,37399,37400,37401,37402,37403,37404,37405,37406,37407,37408,37409,37410,37411,37412,37413,37414,37415,37416,37417,37418,37419,37420,37421,37422,37423,37424,37425,37426,37427,37428,37429,37430,37431,37432,37433,37434,37435,37436,37437,37438,37439,37440,37441,37442,37443,37444,37445,37446,37447,37448,37449,37450,37451,37452,37453,37454,37455,37456,37457,37458,37459,37460,37461,37462,37463,37464,37465,37466,37467,37468,37469,37470,37471,37472,37473,37474,37475,37476,37477,37478,37479,37480,37481,37482,37483,37484,37485,37486,37487,37488,37489,37490,37491,37492,37493,37494,37495,37496,37497,37498,37499,37500,37501,37502,37503,37504,37505,37506,37507,37508,37509,37510,37511,37512,37513,37514,37515,37516,37517,37518,37519,37520,37521,37522,37523,37524,37525,37526,37527,37528,37529,37530,37531,37532,37533,37534,37535,37536,37537,37538,37539,37540,37541,37542,37543,37544,37545,37546,37547,37548,37549,37550,37551,37552,37553,37554,37555,37556,37557,37558,37559,37560,37561,37562,37563,37564,37565,37566,37567,37568,37569,37570,37571,37572,37573,37574,37575,37576,37577,37578,37579,37580,37581,37582,37583,37584,37585,37586,37587,37588,37589,37590,37591,37592,37593,37594,37595,37596,37597,37598,37599,37600,37601,37602,37603,37604,37605,37606,37607,37608,37609,37610,37611,37612,37613,37614,37615,37616,37617,37618,37619,37620,37621,37622,37623,37624,37625,37626,37627,37628,37629,37630,37631,37632,37633,37634,37635,37636,37637,37638,37639,37640,37641,37642,37643,37644,37645,37646,37647,37648,37649,37650,37651,37652,37653,37654,37655,37656,37657,37658,37659,37660,37661,37662,37663,37664,37665,37666,37667,37668,37669,37670,37671,37672,37673,37674,37675,37676,37677,37678,37679,37680,37681,37682,37683,37684,37685,37686,37687,37688,37689,37690,37691,37692,37693,37694,37695,37696,37697,37698,37699,37700,37701,37702,37703,37704,37705,37706,37707,37708,37709,37710,37711,37712,37713,37714,37715,37716,37717,37718,37719,37720,37721,37722,37723,37724,37725,37726,37727,37728,37729,37730,37731,37732,37733,37734,37735,37736,37737,37738,37739,37740,37741,37742,37743,37744,37745,37746,37747,37748,37749,37750,37751,37752,37753,37754,37755,37756,37757,37758,37759,37760,37761,37762,37763,37764,37765,37766,37767,37768,37769,37770,37771,37772,37773,37774,37775,37776,37777,37778,37779,37780,37781,37782,37783,37784,37785,37786,37787,37788,37789,37790,37791,37792,37793,37794,37795,37796,37797,37798,37799,37800,37801,37802,37803,37804,37805,37806,37807,37808,37809,37810,37811,37812,37813,37814,37815,37816,37817,37818,37819,37820,37821,37822,37823,37824,37825,37826,37827,37828,37829,37830,37831,37832,37833,37834,37835,37836,37837,37838,37839,37840,37841,37842,37843,37844,37845,37846,37847,37848,37849,37850,37851,37852,37853,37854,37855,37856,37857,37858,37859,37860,37861,37862,37863,37864,37865,37866,37867,37868,37869,37870,37871,37872,37873,37874,37875,37876,37877,37878,37879,37880,37881,37882,37883,37884,37885,37886,37887,37888,37889,37890,37891,37892,37893,37894,37895,37896,37897,37898,37899,37900,37901,37902,37903,37904,37905,37906,37907,37908,37909,37910,37911,37912,37913,37914,37915,37916,37917,37918,37919,37920,37921,37922,37923,37924,37925,37926,37927,37928,37929,37930,37931,37932,37933,37934,37935,37936,37937,37938,37939,37940,37941,37942,37943,37944,37945,37946,37947,37948,37949,37950,37951,37952,37953,37954,37955,37956,37957,37958,37959,37960,37961,37962,37963,37964,37965,37966,37967,37968,37969,37970,37971,37972,37973,37974,37975,37976,37977,37978,37979,37980,37981,37982,37983,37984,37985,37986,37987,37988,37989,37990,37991,37992,37993,37994,37995,37996,37997,37998,37999,38e3,38001,38002,38003,38004,38005,38006,38007,38008,38009,38010,38011,38012,38013,38014,38015,38016,38017,38018,38019,38020,38021,38022,38023,38024,38025,38026,38027,38028,38029,38030,38031,38032,38033,38034,38035,38036,38037,38038,38039,38040,38041,38042,38043,38044,38045,38046,38047,38048,38049,38050,38051,38052,38053,38054,38055,38056,38057,38058,38059,38060,38061,38062,38063,38064,38065,38066,38067,38068,38069,38070,38071,38072,38073,38074,38075,38076,38077,38078,38079,38080,38081,38082,38083,38084,38085,38086,38087,38088,38089,38090,38091,38092,38093,38094,38095,38096,38097,38098,38099,38100,38101,38102,38103,38104,38105,38106,38107,38108,38109,38110,38111,38112,38113,38114,38115,38116,38117,38118,38119,38120,38121,38122,38123,38124,38125,38126,38127,38128,38129,38130,38131,38132,38133,38134,38135,38136,38137,38138,38139,38140,38141,38142,38143,38144,38145,38146,38147,38148,38149,38150,38151,38152,38153,38154,38155,38156,38157,38158,38159,38160,38161,38162,38163,38164,38165,38166,38167,38168,38169,38170,38171,38172,38173,38174,38175,38176,38177,38178,38179,38180,38181,38182,38183,38184,38185,38186,38187,38188,38189,38190,38191,38192,38193,38194,38195,38196,38197,38198,38199,38200,38201,38202,38203,38204,38205,38206,38207,38208,38209,38210,38211,38212,38213,38214,38215,38216,38217,38218,38219,38220,38221,38222,38223,38224,38225,38226,38227,38228,38229,38230,38231,38232,38233,38234,38235,38236,38237,38238,38239,38240,38241,38242,38243,38244,38245,38246,38247,38248,38249,38250,38251,38252,38253,38254,38255,38256,38257,38258,38259,38260,38261,38262,38263,38264,38265,38266,38267,38268,38269,38270,38271,38272,38273,38274,38275,38276,38277,38278,38279,38280,38281,38282,38283,38284,38285,38286,38287,38288,38289,38290,38291,38292,38293,38294,38295,38296,38297,38298,38299,38300,38301,38302,38303,38304,38305,38306,38307,38308,38309,38310,38311,38312,38313,38314,38315,38316,38317,38318,38319,38320,38321,38322,38323,38324,38325,38326,38327,38328,38329,38330,38331,38332,38333,38334,38335,38336,38337,38338,38339,38340,38341,38342,38343,38344,38345,38346,38347,38348,38349,38350,38351,38352,38353,38354,38355,38356,38357,38358,38359,38360,38361,38362,38363,38364,38365,38366,38367,38368,38369,38370,38371,38372,38373,38374,38375,38376,38377,38378,38379,38380,38381,38382,38383,38384,38385,38386,38387,38388,38389,38390,38391,38392,38393,38394,38395,38396,38397,38398,38399,38400,38401,38402,38403,38404,38405,38406,38407,38408,38409,38410,38411,38412,38413,38414,38415,38416,38417,38418,38419,38420,38421,38422,38423,38424,38425,38426,38427,38428,38429,38430,38431,38432,38433,38434,38435,38436,38437,38438,38439,38440,38441,38442,38443,38444,38445,38446,38447,38448,38449,38450,38451,38452,38453,38454,38455,38456,38457,38458,38459,38460,38461,38462,38463,38464,38465,38466,38467,38468,38469,38470,38471,38472,38473,38474,38475,38476,38477,38478,38479,38480,38481,38482,38483,38484,38485,38486,38487,38488,38489,38490,38491,38492,38493,38494,38495,38496,38497,38498,38499,38500,38501,38502,38503,38504,38505,38506,38507,38508,38509,38510,38511,38512,38513,38514,38515,38516,38517,38518,38519,38520,38521,38522,38523,38524,38525,38526,38527,38528,38529,38530,38531,38532,38533,38534,38535,38536,38537,38538,38539,38540,38541,38542,38543,38544,38545,38546,38547,38548,38549,38550,38551,38552,38553,38554,38555,38556,38557,38558,38559,38560,38561,38562,38563,38564,38565,38566,38567,38568,38569,38570,38571,38572,38573,38574,38575,38576,38577,38578,38579,38580,38581,38582,38583,38584,38585,38586,38587,38588,38589,38590,38591,38592,38593,38594,38595,38596,38597,38598,38599,38600,38601,38602,38603,38604,38605,38606,38607,38608,38609,38610,38611,38612,38613,38614,38615,38616,38617,38618,38619,38620,38621,38622,38623,38624,38625,38626,38627,38628,38629,38630,38631,38632,38633,38634,38635,38636,38637,38638,38639,38640,38641,38642,38643,38644,38645,38646,38647,38648,38649,38650,38651,38652,38653,38654,38655,38656,38657,38658,38659,38660,38661,38662,38663,38664,38665,38666,38667,38668,38669,38670,38671,38672,38673,38674,38675,38676,38677,38678,38679,38680,38681,38682,38683,38684,38685,38686,38687,38688,38689,38690,38691,38692,38693,38694,38695,38696,38697,38698,38699,38700,38701,38702,38703,38704,38705,38706,38707,38708,38709,38710,38711,38712,38713,38714,38715,38716,38717,38718,38719,38720,38721,38722,38723,38724,38725,38726,38727,38728,38729,38730,38731,38732,38733,38734,38735,38736,38737,38738,38739,38740,38741,38742,38743,38744,38745,38746,38747,38748,38749,38750,38751,38752,38753,38754,38755,38756,38757,38758,38759,38760,38761,38762,38763,38764,38765,38766,38767,38768,38769,38770,38771,38772,38773,38774,38775,38776,38777,38778,38779,38780,38781,38782,38783,38784,38785,38786,38787,38788,38789,38790,38791,38792,38793,38794,38795,38796,38797,38798,38799,38800,38801,38802,38803,38804,38805,38806,38807,38808,38809,38810,38811,38812,38813,38814,38815,38816,38817,38818,38819,38820,38821,38822,38823,38824,38825,38826,38827,38828,38829,38830,38831,38832,38833,38834,38835,38836,38837,38838,38839,38840,38841,38842,38843,38844,38845,38846,38847,38848,38849,38850,38851,38852,38853,38854,38855,38856,38857,38858,38859,38860,38861,38862,38863,38864,38865,38866,38867,38868,38869,38870,38871,38872,38873,38874,38875,38876,38877,38878,38879,38880,38881,38882,38883,38884,38885,38886,38887,38888,38889,38890,38891,38892,38893,38894,38895,38896,38897,38898,38899,38900,38901,38902,38903,38904,38905,38906,38907,38908,38909,38910,38911,38912,38913,38914,38915,38916,38917,38918,38919,38920,38921,38922,38923,38924,38925,38926,38927,38928,38929,38930,38931,38932,38933,38934,38935,38936,38937,38938,38939,38940,38941,38942,38943,38944,38945,38946,38947,38948,38949,38950,38951,38952,38953,38954,38955,38956,38957,38958,38959,38960,38961,38962,38963,38964,38965,38966,38967,38968,38969,38970,38971,38972,38973,38974,38975,38976,38977,38978,38979,38980,38981,38982,38983,38984,38985,38986,38987,38988,38989,38990,38991,38992,38993,38994,38995,38996,38997,38998,38999,39e3,39001,39002,39003,39004,39005,39006,39007,39008,39009,39010,39011,39012,39013,39014,39015,39016,39017,39018,39019,39020,39021,39022,39023,39024,39025,39026,39027,39028,39029,39030,39031,39032,39033,39034,39035,39036,39037,39038,39039,39040,39041,39042,39043,39044,39045,39046,39047,39048,39049,39050,39051,39052,39053,39054,39055,39056,39057,39058,39059,39060,39061,39062,39063,39064,39065,39066,39067,39068,39069,39070,39071,39072,39073,39074,39075,39076,39077,39078,39079,39080,39081,39082,39083,39084,39085,39086,39087,39088,39089,39090,39091,39092,39093,39094,39095,39096,39097,39098,39099,39100,39101,39102,39103,39104,39105,39106,39107,39108,39109,39110,39111,39112,39113,39114,39115,39116,39117,39118,39119,39120,39121,39122,39123,39124,39125,39126,39127,39128,39129,39130,39131,39132,39133,39134,39135,39136,39137,39138,39139,39140,39141,39142,39143,39144,39145,39146,39147,39148,39149,39150,39151,39152,39153,39154,39155,39156,39157,39158,39159,39160,39161,39162,39163,39164,39165,39166,39167,39168,39169,39170,39171,39172,39173,39174,39175,39176,39177,39178,39179,39180,39181,39182,39183,39184,39185,39186,39187,39188,39189,39190,39191,39192,39193,39194,39195,39196,39197,39198,39199,39200,39201,39202,39203,39204,39205,39206,39207,39208,39209,39210,39211,39212,39213,39214,39215,39216,39217,39218,39219,39220,39221,39222,39223,39224,39225,39226,39227,39228,39229,39230,39231,39232,39233,39234,39235,39236,39237,39238,39239,39240,39241,39242,39243,39244,39245,39246,39247,39248,39249,39250,39251,39252,39253,39254,39255,39256,39257,39258,39259,39260,39261,39262,39263,39264,39265,39266,39267,39268,39269,39270,39271,39272,39273,39274,39275,39276,39277,39278,39279,39280,39281,39282,39283,39284,39285,39286,39287,39288,39289,39290,39291,39292,39293,39294,39295,39296,39297,39298,39299,39300,39301,39302,39303,39304,39305,39306,39307,39308,39309,39310,39311,39312,39313,39314,39315,39316,39317,39318,39319,39320,39321,39322,39323,39324,39325,39326,39327,39328,39329,39330,39331,39332,39333,39334,39335,39336,39337,39338,39339,39340,39341,39342,39343,39344,39345,39346,39347,39348,39349,39350,39351,39352,39353,39354,39355,39356,39357,39358,39359,39360,39361,39362,39363,39364,39365,39366,39367,39368,39369,39370,39371,39372,39373,39374,39375,39376,39377,39378,39379,39380,39381,39382,39383,39384,39385,39386,39387,39388,39389,39390,39391,39392,39393,39394,39395,39396,39397,39398,39399,39400,39401,39402,39403,39404,39405,39406,39407,39408,39409,39410,39411,39412,39413,39414,39415,39416,39417,39418,39419,39420,39421,39422,39423,39424,39425,39426,39427,39428,39429,39430,39431,39432,39433,39434,39435,39436,39437,39438,39439,39440,39441,39442,39443,39444,39445,39446,39447,39448,39449,39450,39451,39452,39453,39454,39455,39456,39457,39458,39459,39460,39461,39462,39463,39464,39465,39466,39467,39468,39469,39470,39471,39472,39473,39474,39475,39476,39477,39478,39479,39480,39481,39482,39483,39484,39485,39486,39487,39488,39489,39490,39491,39492,39493,39494,39495,39496,39497,39498,39499,39500,39501,39502,39503,39504,39505,39506,39507,39508,39509,39510,39511,39512,39513,39514,39515,39516,39517,39518,39519,39520,39521,39522,39523,39524,39525,39526,39527,39528,39529,39530,39531,39532,39533,39534,39535,39536,39537,39538,39539,39540,39541,39542,39543,39544,39545,39546,39547,39548,39549,39550,39551,39552,39553,39554,39555,39556,39557,39558,39559,39560,39561,39562,39563,39564,39565,39566,39567,39568,39569,39570,39571,39572,39573,39574,39575,39576,39577,39578,39579,39580,39581,39582,39583,39584,39585,39586,39587,39588,39589,39590,39591,39592,39593,39594,39595,39596,39597,39598,39599,39600,39601,39602,39603,39604,39605,39606,39607,39608,39609,39610,39611,39612,39613,39614,39615,39616,39617,39618,39619,39620,39621,39622,39623,39624,39625,39626,39627,39628,39629,39630,39631,39632,39633,39634,39635,39636,39637,39638,39639,39640,39641,39642,39643,39644,39645,39646,39647,39648,39649,39650,39651,39652,39653,39654,39655,39656,39657,39658,39659,39660,39661,39662,39663,39664,39665,39666,39667,39668,39669,39670,39671,39672,39673,39674,39675,39676,39677,39678,39679,39680,39681,39682,39683,39684,39685,39686,39687,39688,39689,39690,39691,39692,39693,39694,39695,39696,39697,39698,39699,39700,39701,39702,39703,39704,39705,39706,39707,39708,39709,39710,39711,39712,39713,39714,39715,39716,39717,39718,39719,39720,39721,39722,39723,39724,39725,39726,39727,39728,39729,39730,39731,39732,39733,39734,39735,39736,39737,39738,39739,39740,39741,39742,39743,39744,39745,39746,39747,39748,39749,39750,39751,39752,39753,39754,39755,39756,39757,39758,39759,39760,39761,39762,39763,39764,39765,39766,39767,39768,39769,39770,39771,39772,39773,39774,39775,39776,39777,39778,39779,39780,39781,39782,39783,39784,39785,39786,39787,39788,39789,39790,39791,39792,39793,39794,39795,39796,39797,39798,39799,39800,39801,39802,39803,39804,39805,39806,39807,39808,39809,39810,39811,39812,39813,39814,39815,39816,39817,39818,39819,39820,39821,39822,39823,39824,39825,39826,39827,39828,39829,39830,39831,39832,39833,39834,39835,39836,39837,39838,39839,39840,39841,39842,39843,39844,39845,39846,39847,39848,39849,39850,39851,39852,39853,39854,39855,39856,39857,39858,39859,39860,39861,39862,39863,39864,39865,39866,39867,39868,39869,39870,39871,39872,39873,39874,39875,39876,39877,39878,39879,39880,39881,39882,39883,39884,39885,39886,39887,39888,39889,39890,39891,39892,39893,39894,39895,39896,39897,39898,39899,39900,39901,39902,39903,39904,39905,39906,39907,39908,39909,39910,39911,39912,39913,39914,39915,39916,39917,39918,39919,39920,39921,39922,39923,39924,39925,39926,39927,39928,39929,39930,39931,39932,39933,39934,39935,39936,39937,39938,39939,39940,39941,39942,39943,39944,39945,39946,39947,39948,39949,39950,39951,39952,39953,39954,39955,39956,39957,39958,39959,39960,39961,39962,39963,39964,39965,39966,39967,39968,39969,39970,39971,39972,39973,39974,39975,39976,39977,39978,39979,39980,39981,39982,39983,39984,39985,39986,39987,39988,39989,39990,39991,39992,39993,39994,39995,39996,39997,39998,39999,4e4,40001,40002,40003,40004,40005,40006,40007,40008,40009,40010,40011,40012,40013,40014,40015,40016,40017,40018,40019,40020,40021,40022,40023,40024,40025,40026,40027,40028,40029,40030,40031,40032,40033,40034,40035,40036,40037,40038,40039,40040,40041,40042,40043,40044,40045,40046,40047,40048,40049,40050,40051,40052,40053,40054,40055,40056,40057,40058,40059,40060,40061,40062,40063,40064,40065,40066,40067,40068,40069,40070,40071,40072,40073,40074,40075,40076,40077,40078,40079,40080,40081,40082,40083,40084,40085,40086,40087,40088,40089,40090,40091,40092,40093,40094,40095,40096,40097,40098,40099,40100,40101,40102,40103,40104,40105,40106,40107,40108,40109,40110,40111,40112,40113,40114,40115,40116,40117,40118,40119,40120,40121,40122,40123,40124,40125,40126,40127,40128,40129,40130,40131,40132,40133,40134,40135,40136,40137,40138,40139,40140,40141,40142,40143,40144,40145,40146,40147,40148,40149,40150,40151,40152,40153,40154,40155,40156,40157,40158,40159,40160,40161,40162,40163,40164,40165,40166,40167,40168,40169,40170,40171,40172,40173,40174,40175,40176,40177,40178,40179,40180,40181,40182,40183,40184,40185,40186,40187,40188,40189,40190,40191,40192,40193,40194,40195,40196,40197,40198,40199,40200,40201,40202,40203,40204,40205,40206,40207,40208,40209,40210,40211,40212,40213,40214,40215,40216,40217,40218,40219,40220,40221,40222,40223,40224,40225,40226,40227,40228,40229,40230,40231,40232,40233,40234,40235,40236,40237,40238,40239,40240,40241,40242,40243,40244,40245,40246,40247,40248,40249,40250,40251,40252,40253,40254,40255,40256,40257,40258,40259,40260,40261,40262,40263,40264,40265,40266,40267,40268,40269,40270,40271,40272,40273,40274,40275,40276,40277,40278,40279,40280,40281,40282,40283,40284,40285,40286,40287,40288,40289,40290,40291,40292,40293,40294,40295,40296,40297,40298,40299,40300,40301,40302,40303,40304,40305,40306,40307,40308,40309,40310,40311,40312,40313,40314,40315,40316,40317,40318,40319,40320,40321,40322,40323,40324,40325,40326,40327,40328,40329,40330,40331,40332,40333,40334,40335,40336,40337,40338,40339,40340,40341,40342,40343,40344,40345,40346,40347,40348,40349,40350,40351,40352,40353,40354,40355,40356,40357,40358,40359,40360,40361,40362,40363,40364,40365,40366,40367,40368,40369,40370,40371,40372,40373,40374,40375,40376,40377,40378,40379,40380,40381,40382,40383,40384,40385,40386,40387,40388,40389,40390,40391,40392,40393,40394,40395,40396,40397,40398,40399,40400,40401,40402,40403,40404,40405,40406,40407,40408,40409,40410,40411,40412,40413,40414,40415,40416,40417,40418,40419,40420,40421,40422,40423,40424,40425,40426,40427,40428,40429,40430,40431,40432,40433,40434,40435,40436,40437,40438,40439,40440,40441,40442,40443,40444,40445,40446,40447,40448,40449,40450,40451,40452,40453,40454,40455,40456,40457,40458,40459,40460,40461,40462,40463,40464,40465,40466,40467,40468,40469,40470,40471,40472,40473,40474,40475,40476,40477,40478,40479,40480,40481,40482,40483,40484,40485,40486,40487,40488,40489,40490,40491,40492,40493,40494,40495,40496,40497,40498,40499,40500,40501,40502,40503,40504,40505,40506,40507,40508,40509,40510,40511,40512,40513,40514,40515,40516,40517,40518,40519,40520,40521,40522,40523,40524,40525,40526,40527,40528,40529,40530,40531,40532,40533,40534,40535,40536,40537,40538,40539,40540,40541,40542,40543,40544,40545,40546,40547,40548,40549,40550,40551,40552,40553,40554,40555,40556,40557,40558,40559,40560,40561,40562,40563,40564,40565,40566,40567,40568,40569,40570,40571,40572,40573,40574,40575,40576,40577,40578,40579,40580,40581,40582,40583,40584,40585,40586,40587,40588,40589,40590,40591,40592,40593,40594,40595,40596,40597,40598,40599,40600,40601,40602,40603,40604,40605,40606,40607,40608,40609,40610,40611,40612,40613,40614,40615,40616,40617,40618,40619,40620,40621,40622,40623,40624,40625,40626,40627,40628,40629,40630,40631,40632,40633,40634,40635,40636,40637,40638,40639,40640,40641,40642,40643,40644,40645,40646,40647,40648,40649,40650,40651,40652,40653,40654,40655,40656,40657,40658,40659,40660,40661,40662,40663,40664,40665,40666,40667,40668,40669,40670,40671,40672,40673,40674,40675,40676,40677,40678,40679,40680,40681,40682,40683,40684,40685,40686,40687,40688,40689,40690,40691,40692,40693,40694,40695,40696,40697,40698,40699,40700,40701,40702,40703,40704,40705,40706,40707,40708,40709,40710,40711,40712,40713,40714,40715,40716,40717,40718,40719,40720,40721,40722,40723,40724,40725,40726,40727,40728,40729,40730,40731,40732,40733,40734,40735,40736,40737,40738,40739,40740,40741,40742,40743,40744,40745,40746,40747,40748,40749,40750,40751,40752,40753,40754,40755,40756,40757,40758,40759,40760,40761,40762,40763,40764,40765,40766,40767,40768,40769,40770,40771,40772,40773,40774,40775,40776,40777,40778,40779,40780,40781,40782,40783,40784,40785,40786,40787,40788,40789,40790,40791,40792,40793,40794,40795,40796,40797,40798,40799,40800,40801,40802,40803,40804,40805,40806,40807,40808,40809,40810,40811,40812,40813,40814,40815,40816,40817,40818,40819,40820,40821,40822,40823,40824,40825,40826,40827,40828,40829,40830,40831,40832,40833,40834,40835,40836,40837,40838,40839,40840,40841,40842,40843,40844,40845,40846,40847,40848,40849,40850,40851,40852,40853,40854,40855,40856,40857,40858,40859,40860,40861,40862,40863,40864,40865,40866,40867,40868,40869,40870,40871,40872,40873,40874,40875,40876,40877,40878,40879,40880,40881,40882,40883,40884,40885,40886,40887,40888,40889,40890,40891,40892,40893,40894,40895,40896,40897,40898,40899,40900,40901,40902,40903,40904,40905,40906,40907,40908,40960,40961,40962,40963,40964,40965,40966,40967,40968,40969,40970,40971,40972,40973,40974,40975,40976,40977,40978,40979,40980,40981,40982,40983,40984,40985,40986,40987,40988,40989,40990,40991,40992,40993,40994,40995,40996,40997,40998,40999,41e3,41001,41002,41003,41004,41005,41006,41007,41008,41009,41010,41011,41012,41013,41014,41015,41016,41017,41018,41019,41020,41021,41022,41023,41024,41025,41026,41027,41028,41029,41030,41031,41032,41033,41034,41035,41036,41037,41038,41039,41040,41041,41042,41043,41044,41045,41046,41047,41048,41049,41050,41051,41052,41053,41054,41055,41056,41057,41058,41059,41060,41061,41062,41063,41064,41065,41066,41067,41068,41069,41070,41071,41072,41073,41074,41075,41076,41077,41078,41079,41080,41081,41082,41083,41084,41085,41086,41087,41088,41089,41090,41091,41092,41093,41094,41095,41096,41097,41098,41099,41100,41101,41102,41103,41104,41105,41106,41107,41108,41109,41110,41111,41112,41113,41114,41115,41116,41117,41118,41119,41120,41121,41122,41123,41124,41125,41126,41127,41128,41129,41130,41131,41132,41133,41134,41135,41136,41137,41138,41139,41140,41141,41142,41143,41144,41145,41146,41147,41148,41149,41150,41151,41152,41153,41154,41155,41156,41157,41158,41159,41160,41161,41162,41163,41164,41165,41166,41167,41168,41169,41170,41171,41172,41173,41174,41175,41176,41177,41178,41179,41180,41181,41182,41183,41184,41185,41186,41187,41188,41189,41190,41191,41192,41193,41194,41195,41196,41197,41198,41199,41200,41201,41202,41203,41204,41205,41206,41207,41208,41209,41210,41211,41212,41213,41214,41215,41216,41217,41218,41219,41220,41221,41222,41223,41224,41225,41226,41227,41228,41229,41230,41231,41232,41233,41234,41235,41236,41237,41238,41239,41240,41241,41242,41243,41244,41245,41246,41247,41248,41249,41250,41251,41252,41253,41254,41255,41256,41257,41258,41259,41260,41261,41262,41263,41264,41265,41266,41267,41268,41269,41270,41271,41272,41273,41274,41275,41276,41277,41278,41279,41280,41281,41282,41283,41284,41285,41286,41287,41288,41289,41290,41291,41292,41293,41294,41295,41296,41297,41298,41299,41300,41301,41302,41303,41304,41305,41306,41307,41308,41309,41310,41311,41312,41313,41314,41315,41316,41317,41318,41319,41320,41321,41322,41323,41324,41325,41326,41327,41328,41329,41330,41331,41332,41333,41334,41335,41336,41337,41338,41339,41340,41341,41342,41343,41344,41345,41346,41347,41348,41349,41350,41351,41352,41353,41354,41355,41356,41357,41358,41359,41360,41361,41362,41363,41364,41365,41366,41367,41368,41369,41370,41371,41372,41373,41374,41375,41376,41377,41378,41379,41380,41381,41382,41383,41384,41385,41386,41387,41388,41389,41390,41391,41392,41393,41394,41395,41396,41397,41398,41399,41400,41401,41402,41403,41404,41405,41406,41407,41408,41409,41410,41411,41412,41413,41414,41415,41416,41417,41418,41419,41420,41421,41422,41423,41424,41425,41426,41427,41428,41429,41430,41431,41432,41433,41434,41435,41436,41437,41438,41439,41440,41441,41442,41443,41444,41445,41446,41447,41448,41449,41450,41451,41452,41453,41454,41455,41456,41457,41458,41459,41460,41461,41462,41463,41464,41465,41466,41467,41468,41469,41470,41471,41472,41473,41474,41475,41476,41477,41478,41479,41480,41481,41482,41483,41484,41485,41486,41487,41488,41489,41490,41491,41492,41493,41494,41495,41496,41497,41498,41499,41500,41501,41502,41503,41504,41505,41506,41507,41508,41509,41510,41511,41512,41513,41514,41515,41516,41517,41518,41519,41520,41521,41522,41523,41524,41525,41526,41527,41528,41529,41530,41531,41532,41533,41534,41535,41536,41537,41538,41539,41540,41541,41542,41543,41544,41545,41546,41547,41548,41549,41550,41551,41552,41553,41554,41555,41556,41557,41558,41559,41560,41561,41562,41563,41564,41565,41566,41567,41568,41569,41570,41571,41572,41573,41574,41575,41576,41577,41578,41579,41580,41581,41582,41583,41584,41585,41586,41587,41588,41589,41590,41591,41592,41593,41594,41595,41596,41597,41598,41599,41600,41601,41602,41603,41604,41605,41606,41607,41608,41609,41610,41611,41612,41613,41614,41615,41616,41617,41618,41619,41620,41621,41622,41623,41624,41625,41626,41627,41628,41629,41630,41631,41632,41633,41634,41635,41636,41637,41638,41639,41640,41641,41642,41643,41644,41645,41646,41647,41648,41649,41650,41651,41652,41653,41654,41655,41656,41657,41658,41659,41660,41661,41662,41663,41664,41665,41666,41667,41668,41669,41670,41671,41672,41673,41674,41675,41676,41677,41678,41679,41680,41681,41682,41683,41684,41685,41686,41687,41688,41689,41690,41691,41692,41693,41694,41695,41696,41697,41698,41699,41700,41701,41702,41703,41704,41705,41706,41707,41708,41709,41710,41711,41712,41713,41714,41715,41716,41717,41718,41719,41720,41721,41722,41723,41724,41725,41726,41727,41728,41729,41730,41731,41732,41733,41734,41735,41736,41737,41738,41739,41740,41741,41742,41743,41744,41745,41746,41747,41748,41749,41750,41751,41752,41753,41754,41755,41756,41757,41758,41759,41760,41761,41762,41763,41764,41765,41766,41767,41768,41769,41770,41771,41772,41773,41774,41775,41776,41777,41778,41779,41780,41781,41782,41783,41784,41785,41786,41787,41788,41789,41790,41791,41792,41793,41794,41795,41796,41797,41798,41799,41800,41801,41802,41803,41804,41805,41806,41807,41808,41809,41810,41811,41812,41813,41814,41815,41816,41817,41818,41819,41820,41821,41822,41823,41824,41825,41826,41827,41828,41829,41830,41831,41832,41833,41834,41835,41836,41837,41838,41839,41840,41841,41842,41843,41844,41845,41846,41847,41848,41849,41850,41851,41852,41853,41854,41855,41856,41857,41858,41859,41860,41861,41862,41863,41864,41865,41866,41867,41868,41869,41870,41871,41872,41873,41874,41875,41876,41877,41878,41879,41880,41881,41882,41883,41884,41885,41886,41887,41888,41889,41890,41891,41892,41893,41894,41895,41896,41897,41898,41899,41900,41901,41902,41903,41904,41905,41906,41907,41908,41909,41910,41911,41912,41913,41914,41915,41916,41917,41918,41919,41920,41921,41922,41923,41924,41925,41926,41927,41928,41929,41930,41931,41932,41933,41934,41935,41936,41937,41938,41939,41940,41941,41942,41943,41944,41945,41946,41947,41948,41949,41950,41951,41952,41953,41954,41955,41956,41957,41958,41959,41960,41961,41962,41963,41964,41965,41966,41967,41968,41969,41970,41971,41972,41973,41974,41975,41976,41977,41978,41979,41980,41981,41982,41983,41984,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,41997,41998,41999,42e3,42001,42002,42003,42004,42005,42006,42007,42008,42009,42010,42011,42012,42013,42014,42015,42016,42017,42018,42019,42020,42021,42022,42023,42024,42025,42026,42027,42028,42029,42030,42031,42032,42033,42034,42035,42036,42037,42038,42039,42040,42041,42042,42043,42044,42045,42046,42047,42048,42049,42050,42051,42052,42053,42054,42055,42056,42057,42058,42059,42060,42061,42062,42063,42064,42065,42066,42067,42068,42069,42070,42071,42072,42073,42074,42075,42076,42077,42078,42079,42080,42081,42082,42083,42084,42085,42086,42087,42088,42089,42090,42091,42092,42093,42094,42095,42096,42097,42098,42099,42100,42101,42102,42103,42104,42105,42106,42107,42108,42109,42110,42111,42112,42113,42114,42115,42116,42117,42118,42119,42120,42121,42122,42123,42124,42192,42193,42194,42195,42196,42197,42198,42199,42200,42201,42202,42203,42204,42205,42206,42207,42208,42209,42210,42211,42212,42213,42214,42215,42216,42217,42218,42219,42220,42221,42222,42223,42224,42225,42226,42227,42228,42229,42230,42231,42232,42233,42234,42235,42236,42237,42240,42241,42242,42243,42244,42245,42246,42247,42248,42249,42250,42251,42252,42253,42254,42255,42256,42257,42258,42259,42260,42261,42262,42263,42264,42265,42266,42267,42268,42269,42270,42271,42272,42273,42274,42275,42276,42277,42278,42279,42280,42281,42282,42283,42284,42285,42286,42287,42288,42289,42290,42291,42292,42293,42294,42295,42296,42297,42298,42299,42300,42301,42302,42303,42304,42305,42306,42307,42308,42309,42310,42311,42312,42313,42314,42315,42316,42317,42318,42319,42320,42321,42322,42323,42324,42325,42326,42327,42328,42329,42330,42331,42332,42333,42334,42335,42336,42337,42338,42339,42340,42341,42342,42343,42344,42345,42346,42347,42348,42349,42350,42351,42352,42353,42354,42355,42356,42357,42358,42359,42360,42361,42362,42363,42364,42365,42366,42367,42368,42369,42370,42371,42372,42373,42374,42375,42376,42377,42378,42379,42380,42381,42382,42383,42384,42385,42386,42387,42388,42389,42390,42391,42392,42393,42394,42395,42396,42397,42398,42399,42400,42401,42402,42403,42404,42405,42406,42407,42408,42409,42410,42411,42412,42413,42414,42415,42416,42417,42418,42419,42420,42421,42422,42423,42424,42425,42426,42427,42428,42429,42430,42431,42432,42433,42434,42435,42436,42437,42438,42439,42440,42441,42442,42443,42444,42445,42446,42447,42448,42449,42450,42451,42452,42453,42454,42455,42456,42457,42458,42459,42460,42461,42462,42463,42464,42465,42466,42467,42468,42469,42470,42471,42472,42473,42474,42475,42476,42477,42478,42479,42480,42481,42482,42483,42484,42485,42486,42487,42488,42489,42490,42491,42492,42493,42494,42495,42496,42497,42498,42499,42500,42501,42502,42503,42504,42505,42506,42507,42508,42512,42513,42514,42515,42516,42517,42518,42519,42520,42521,42522,42523,42524,42525,42526,42527,42538,42539,42560,42561,42562,42563,42564,42565,42566,42567,42568,42569,42570,42571,42572,42573,42574,42575,42576,42577,42578,42579,42580,42581,42582,42583,42584,42585,42586,42587,42588,42589,42590,42591,42592,42593,42594,42595,42596,42597,42598,42599,42600,42601,42602,42603,42604,42605,42606,42623,42624,42625,42626,42627,42628,42629,42630,42631,42632,42633,42634,42635,42636,42637,42638,42639,42640,42641,42642,42643,42644,42645,42646,42647,42656,42657,42658,42659,42660,42661,42662,42663,42664,42665,42666,42667,42668,42669,42670,42671,42672,42673,42674,42675,42676,42677,42678,42679,42680,42681,42682,42683,42684,42685,42686,42687,42688,42689,42690,42691,42692,42693,42694,42695,42696,42697,42698,42699,42700,42701,42702,42703,42704,42705,42706,42707,42708,42709,42710,42711,42712,42713,42714,42715,42716,42717,42718,42719,42720,42721,42722,42723,42724,42725,42726,42727,42728,42729,42730,42731,42732,42733,42734,42735,42775,42776,42777,42778,42779,42780,42781,42782,42783,42786,42787,42788,42789,42790,42791,42792,42793,42794,42795,42796,42797,42798,42799,42800,42801,42802,42803,42804,42805,42806,42807,42808,42809,42810,42811,42812,42813,42814,42815,42816,42817,42818,42819,42820,42821,42822,42823,42824,42825,42826,42827,42828,42829,42830,42831,42832,42833,42834,42835,42836,42837,42838,42839,42840,42841,42842,42843,42844,42845,42846,42847,42848,42849,42850,42851,42852,42853,42854,42855,42856,42857,42858,42859,42860,42861,42862,42863,42864,42865,42866,42867,42868,42869,42870,42871,42872,42873,42874,42875,42876,42877,42878,42879,42880,42881,42882,42883,42884,42885,42886,42887,42888,42891,42892,42893,42894,42896,42897,42898,42899,42912,42913,42914,42915,42916,42917,42918,42919,42920,42921,42922,43e3,43001,43002,43003,43004,43005,43006,43007,43008,43009,43011,43012,43013,43015,43016,43017,43018,43020,43021,43022,43023,43024,43025,43026,43027,43028,43029,43030,43031,43032,43033,43034,43035,43036,43037,43038,43039,43040,43041,43042,43072,43073,43074,43075,43076,43077,43078,43079,43080,43081,43082,43083,43084,43085,43086,43087,43088,43089,43090,43091,43092,43093,43094,43095,43096,43097,43098,43099,43100,43101,43102,43103,43104,43105,43106,43107,43108,43109,43110,43111,43112,43113,43114,43115,43116,43117,43118,43119,43120,43121,43122,43123,43138,43139,43140,43141,43142,43143,43144,43145,43146,43147,43148,43149,43150,43151,43152,43153,43154,43155,43156,43157,43158,43159,43160,43161,43162,43163,43164,43165,43166,43167,43168,43169,43170,43171,43172,43173,43174,43175,43176,43177,43178,43179,43180,43181,43182,43183,43184,43185,43186,43187,43250,43251,43252,43253,43254,43255,43259,43274,43275,43276,43277,43278,43279,43280,43281,43282,43283,43284,43285,43286,43287,43288,43289,43290,43291,43292,43293,43294,43295,43296,43297,43298,43299,43300,43301,43312,43313,43314,43315,43316,43317,43318,43319,43320,43321,43322,43323,43324,43325,43326,43327,43328,43329,43330,43331,43332,43333,43334,43360,43361,43362,43363,43364,43365,43366,43367,43368,43369,43370,43371,43372,43373,43374,43375,43376,43377,43378,43379,43380,43381,43382,43383,43384,43385,43386,43387,43388,43396,43397,43398,43399,43400,43401,43402,43403,43404,43405,43406,43407,43408,43409,43410,43411,43412,43413,43414,43415,43416,43417,43418,43419,43420,43421,43422,43423,43424,43425,43426,43427,43428,43429,43430,43431,43432,43433,43434,43435,43436,43437,43438,43439,43440,43441,43442,43471,43520,43521,43522,43523,43524,43525,43526,43527,43528,43529,43530,43531,43532,43533,43534,43535,43536,43537,43538,43539,43540,43541,43542,43543,43544,43545,43546,43547,43548,43549,43550,43551,43552,43553,43554,43555,43556,43557,43558,43559,43560,43584,43585,43586,43588,43589,43590,43591,43592,43593,43594,43595,43616,43617,43618,43619,43620,43621,43622,43623,43624,43625,43626,43627,43628,43629,43630,43631,43632,43633,43634,43635,43636,43637,43638,43642,43648,43649,43650,43651,43652,43653,43654,43655,43656,43657,43658,43659,43660,43661,43662,43663,43664,43665,43666,43667,43668,43669,43670,43671,43672,43673,43674,43675,43676,43677,43678,43679,43680,43681,43682,43683,43684,43685,43686,43687,43688,43689,43690,43691,43692,43693,43694,43695,43697,43701,43702,43705,43706,43707,43708,43709,43712,43714,43739,43740,43741,43744,43745,43746,43747,43748,43749,43750,43751,43752,43753,43754,43762,43763,43764,43777,43778,43779,43780,43781,43782,43785,43786,43787,43788,43789,43790,43793,43794,43795,43796,43797,43798,43808,43809,43810,43811,43812,43813,43814,43816,43817,43818,43819,43820,43821,43822,43968,43969,43970,43971,43972,43973,43974,43975,43976,43977,43978,43979,43980,43981,43982,43983,43984,43985,43986,43987,43988,43989,43990,43991,43992,43993,43994,43995,43996,43997,43998,43999,44e3,44001,44002,44032,44033,44034,44035,44036,44037,44038,44039,44040,44041,44042,44043,44044,44045,44046,44047,44048,44049,44050,44051,44052,44053,44054,44055,44056,44057,44058,44059,44060,44061,44062,44063,44064,44065,44066,44067,44068,44069,44070,44071,44072,44073,44074,44075,44076,44077,44078,44079,44080,44081,44082,44083,44084,44085,44086,44087,44088,44089,44090,44091,44092,44093,44094,44095,44096,44097,44098,44099,44100,44101,44102,44103,44104,44105,44106,44107,44108,44109,44110,44111,44112,44113,44114,44115,44116,44117,44118,44119,44120,44121,44122,44123,44124,44125,44126,44127,44128,44129,44130,44131,44132,44133,44134,44135,44136,44137,44138,44139,44140,44141,44142,44143,44144,44145,44146,44147,44148,44149,44150,44151,44152,44153,44154,44155,44156,44157,44158,44159,44160,44161,44162,44163,44164,44165,44166,44167,44168,44169,44170,44171,44172,44173,44174,44175,44176,44177,44178,44179,44180,44181,44182,44183,44184,44185,44186,44187,44188,44189,44190,44191,44192,44193,44194,44195,44196,44197,44198,44199,44200,44201,44202,44203,44204,44205,44206,44207,44208,44209,44210,44211,44212,44213,44214,44215,44216,44217,44218,44219,44220,44221,44222,44223,44224,44225,44226,44227,44228,44229,44230,44231,44232,44233,44234,44235,44236,44237,44238,44239,44240,44241,44242,44243,44244,44245,44246,44247,44248,44249,44250,44251,44252,44253,44254,44255,44256,44257,44258,44259,44260,44261,44262,44263,44264,44265,44266,44267,44268,44269,44270,44271,44272,44273,44274,44275,44276,44277,44278,44279,44280,44281,44282,44283,44284,44285,44286,44287,44288,44289,44290,44291,44292,44293,44294,44295,44296,44297,44298,44299,44300,44301,44302,44303,44304,44305,44306,44307,44308,44309,44310,44311,44312,44313,44314,44315,44316,44317,44318,44319,44320,44321,44322,44323,44324,44325,44326,44327,44328,44329,44330,44331,44332,44333,44334,44335,44336,44337,44338,44339,44340,44341,44342,44343,44344,44345,44346,44347,44348,44349,44350,44351,44352,44353,44354,44355,44356,44357,44358,44359,44360,44361,44362,44363,44364,44365,44366,44367,44368,44369,44370,44371,44372,44373,44374,44375,44376,44377,44378,44379,44380,44381,44382,44383,44384,44385,44386,44387,44388,44389,44390,44391,44392,44393,44394,44395,44396,44397,44398,44399,44400,44401,44402,44403,44404,44405,44406,44407,44408,44409,44410,44411,44412,44413,44414,44415,44416,44417,44418,44419,44420,44421,44422,44423,44424,44425,44426,44427,44428,44429,44430,44431,44432,44433,44434,44435,44436,44437,44438,44439,44440,44441,44442,44443,44444,44445,44446,44447,44448,44449,44450,44451,44452,44453,44454,44455,44456,44457,44458,44459,44460,44461,44462,44463,44464,44465,44466,44467,44468,44469,44470,44471,44472,44473,44474,44475,44476,44477,44478,44479,44480,44481,44482,44483,44484,44485,44486,44487,44488,44489,44490,44491,44492,44493,44494,44495,44496,44497,44498,44499,44500,44501,44502,44503,44504,44505,44506,44507,44508,44509,44510,44511,44512,44513,44514,44515,44516,44517,44518,44519,44520,44521,44522,44523,44524,44525,44526,44527,44528,44529,44530,44531,44532,44533,44534,44535,44536,44537,44538,44539,44540,44541,44542,44543,44544,44545,44546,44547,44548,44549,44550,44551,44552,44553,44554,44555,44556,44557,44558,44559,44560,44561,44562,44563,44564,44565,44566,44567,44568,44569,44570,44571,44572,44573,44574,44575,44576,44577,44578,44579,44580,44581,44582,44583,44584,44585,44586,44587,44588,44589,44590,44591,44592,44593,44594,44595,44596,44597,44598,44599,44600,44601,44602,44603,44604,44605,44606,44607,44608,44609,44610,44611,44612,44613,44614,44615,44616,44617,44618,44619,44620,44621,44622,44623,44624,44625,44626,44627,44628,44629,44630,44631,44632,44633,44634,44635,44636,44637,44638,44639,44640,44641,44642,44643,44644,44645,44646,44647,44648,44649,44650,44651,44652,44653,44654,44655,44656,44657,44658,44659,44660,44661,44662,44663,44664,44665,44666,44667,44668,44669,44670,44671,44672,44673,44674,44675,44676,44677,44678,44679,44680,44681,44682,44683,44684,44685,44686,44687,44688,44689,44690,44691,44692,44693,44694,44695,44696,44697,44698,44699,44700,44701,44702,44703,44704,44705,44706,44707,44708,44709,44710,44711,44712,44713,44714,44715,44716,44717,44718,44719,44720,44721,44722,44723,44724,44725,44726,44727,44728,44729,44730,44731,44732,44733,44734,44735,44736,44737,44738,44739,44740,44741,44742,44743,44744,44745,44746,44747,44748,44749,44750,44751,44752,44753,44754,44755,44756,44757,44758,44759,44760,44761,44762,44763,44764,44765,44766,44767,44768,44769,44770,44771,44772,44773,44774,44775,44776,44777,44778,44779,44780,44781,44782,44783,44784,44785,44786,44787,44788,44789,44790,44791,44792,44793,44794,44795,44796,44797,44798,44799,44800,44801,44802,44803,44804,44805,44806,44807,44808,44809,44810,44811,44812,44813,44814,44815,44816,44817,44818,44819,44820,44821,44822,44823,44824,44825,44826,44827,44828,44829,44830,44831,44832,44833,44834,44835,44836,44837,44838,44839,44840,44841,44842,44843,44844,44845,44846,44847,44848,44849,44850,44851,44852,44853,44854,44855,44856,44857,44858,44859,44860,44861,44862,44863,44864,44865,44866,44867,44868,44869,44870,44871,44872,44873,44874,44875,44876,44877,44878,44879,44880,44881,44882,44883,44884,44885,44886,44887,44888,44889,44890,44891,44892,44893,44894,44895,44896,44897,44898,44899,44900,44901,44902,44903,44904,44905,44906,44907,44908,44909,44910,44911,44912,44913,44914,44915,44916,44917,44918,44919,44920,44921,44922,44923,44924,44925,44926,44927,44928,44929,44930,44931,44932,44933,44934,44935,44936,44937,44938,44939,44940,44941,44942,44943,44944,44945,44946,44947,44948,44949,44950,44951,44952,44953,44954,44955,44956,44957,44958,44959,44960,44961,44962,44963,44964,44965,44966,44967,44968,44969,44970,44971,44972,44973,44974,44975,44976,44977,44978,44979,44980,44981,44982,44983,44984,44985,44986,44987,44988,44989,44990,44991,44992,44993,44994,44995,44996,44997,44998,44999,45e3,45001,45002,45003,45004,45005,45006,45007,45008,45009,45010,45011,45012,45013,45014,45015,45016,45017,45018,45019,45020,45021,45022,45023,45024,45025,45026,45027,45028,45029,45030,45031,45032,45033,45034,45035,45036,45037,45038,45039,45040,45041,45042,45043,45044,45045,45046,45047,45048,45049,45050,45051,45052,45053,45054,45055,45056,45057,45058,45059,45060,45061,45062,45063,45064,45065,45066,45067,45068,45069,45070,45071,45072,45073,45074,45075,45076,45077,45078,45079,45080,45081,45082,45083,45084,45085,45086,45087,45088,45089,45090,45091,45092,45093,45094,45095,45096,45097,45098,45099,45100,45101,45102,45103,45104,45105,45106,45107,45108,45109,45110,45111,45112,45113,45114,45115,45116,45117,45118,45119,45120,45121,45122,45123,45124,45125,45126,45127,45128,45129,45130,45131,45132,45133,45134,45135,45136,45137,45138,45139,45140,45141,45142,45143,45144,45145,45146,45147,45148,45149,45150,45151,45152,45153,45154,45155,45156,45157,45158,45159,45160,45161,45162,45163,45164,45165,45166,45167,45168,45169,45170,45171,45172,45173,45174,45175,45176,45177,45178,45179,45180,45181,45182,45183,45184,45185,45186,45187,45188,45189,45190,45191,45192,45193,45194,45195,45196,45197,45198,45199,45200,45201,45202,45203,45204,45205,45206,45207,45208,45209,45210,45211,45212,45213,45214,45215,45216,45217,45218,45219,45220,45221,45222,45223,45224,45225,45226,45227,45228,45229,45230,45231,45232,45233,45234,45235,45236,45237,45238,45239,45240,45241,45242,45243,45244,45245,45246,45247,45248,45249,45250,45251,45252,45253,45254,45255,45256,45257,45258,45259,45260,45261,45262,45263,45264,45265,45266,45267,45268,45269,45270,45271,45272,45273,45274,45275,45276,45277,45278,45279,45280,45281,45282,45283,45284,45285,45286,45287,45288,45289,45290,45291,45292,45293,45294,45295,45296,45297,45298,45299,45300,45301,45302,45303,45304,45305,45306,45307,45308,45309,45310,45311,45312,45313,45314,45315,45316,45317,45318,45319,45320,45321,45322,45323,45324,45325,45326,45327,45328,45329,45330,45331,45332,45333,45334,45335,45336,45337,45338,45339,45340,45341,45342,45343,45344,45345,45346,45347,45348,45349,45350,45351,45352,45353,45354,45355,45356,45357,45358,45359,45360,45361,45362,45363,45364,45365,45366,45367,45368,45369,45370,45371,45372,45373,45374,45375,45376,45377,45378,45379,45380,45381,45382,45383,45384,45385,45386,45387,45388,45389,45390,45391,45392,45393,45394,45395,45396,45397,45398,45399,45400,45401,45402,45403,45404,45405,45406,45407,45408,45409,45410,45411,45412,45413,45414,45415,45416,45417,45418,45419,45420,45421,45422,45423,45424,45425,45426,45427,45428,45429,45430,45431,45432,45433,45434,45435,45436,45437,45438,45439,45440,45441,45442,45443,45444,45445,45446,45447,45448,45449,45450,45451,45452,45453,45454,45455,45456,45457,45458,45459,45460,45461,45462,45463,45464,45465,45466,45467,45468,45469,45470,45471,45472,45473,45474,45475,45476,45477,45478,45479,45480,45481,45482,45483,45484,45485,45486,45487,45488,45489,45490,45491,45492,45493,45494,45495,45496,45497,45498,45499,45500,45501,45502,45503,45504,45505,45506,45507,45508,45509,45510,45511,45512,45513,45514,45515,45516,45517,45518,45519,45520,45521,45522,45523,45524,45525,45526,45527,45528,45529,45530,45531,45532,45533,45534,45535,45536,45537,45538,45539,45540,45541,45542,45543,45544,45545,45546,45547,45548,45549,45550,45551,45552,45553,45554,45555,45556,45557,45558,45559,45560,45561,45562,45563,45564,45565,45566,45567,45568,45569,45570,45571,45572,45573,45574,45575,45576,45577,45578,45579,45580,45581,45582,45583,45584,45585,45586,45587,45588,45589,45590,45591,45592,45593,45594,45595,45596,45597,45598,45599,45600,45601,45602,45603,45604,45605,45606,45607,45608,45609,45610,45611,45612,45613,45614,45615,45616,45617,45618,45619,45620,45621,45622,45623,45624,45625,45626,45627,45628,45629,45630,45631,45632,45633,45634,45635,45636,45637,45638,45639,45640,45641,45642,45643,45644,45645,45646,45647,45648,45649,45650,45651,45652,45653,45654,45655,45656,45657,45658,45659,45660,45661,45662,45663,45664,45665,45666,45667,45668,45669,45670,45671,45672,45673,45674,45675,45676,45677,45678,45679,45680,45681,45682,45683,45684,45685,45686,45687,45688,45689,45690,45691,45692,45693,45694,45695,45696,45697,45698,45699,45700,45701,45702,45703,45704,45705,45706,45707,45708,45709,45710,45711,45712,45713,45714,45715,45716,45717,45718,45719,45720,45721,45722,45723,45724,45725,45726,45727,45728,45729,45730,45731,45732,45733,45734,45735,45736,45737,45738,45739,45740,45741,45742,45743,45744,45745,45746,45747,45748,45749,45750,45751,45752,45753,45754,45755,45756,45757,45758,45759,45760,45761,45762,45763,45764,45765,45766,45767,45768,45769,45770,45771,45772,45773,45774,45775,45776,45777,45778,45779,45780,45781,45782,45783,45784,45785,45786,45787,45788,45789,45790,45791,45792,45793,45794,45795,45796,45797,45798,45799,45800,45801,45802,45803,45804,45805,45806,45807,45808,45809,45810,45811,45812,45813,45814,45815,45816,45817,45818,45819,45820,45821,45822,45823,45824,45825,45826,45827,45828,45829,45830,45831,45832,45833,45834,45835,45836,45837,45838,45839,45840,45841,45842,45843,45844,45845,45846,45847,45848,45849,45850,45851,45852,45853,45854,45855,45856,45857,45858,45859,45860,45861,45862,45863,45864,45865,45866,45867,45868,45869,45870,45871,45872,45873,45874,45875,45876,45877,45878,45879,45880,45881,45882,45883,45884,45885,45886,45887,45888,45889,45890,45891,45892,45893,45894,45895,45896,45897,45898,45899,45900,45901,45902,45903,45904,45905,45906,45907,45908,45909,45910,45911,45912,45913,45914,45915,45916,45917,45918,45919,45920,45921,45922,45923,45924,45925,45926,45927,45928,45929,45930,45931,45932,45933,45934,45935,45936,45937,45938,45939,45940,45941,45942,45943,45944,45945,45946,45947,45948,45949,45950,45951,45952,45953,45954,45955,45956,45957,45958,45959,45960,45961,45962,45963,45964,45965,45966,45967,45968,45969,45970,45971,45972,45973,45974,45975,45976,45977,45978,45979,45980,45981,45982,45983,45984,45985,45986,45987,45988,45989,45990,45991,45992,45993,45994,45995,45996,45997,45998,45999,46e3,46001,46002,46003,46004,46005,46006,46007,46008,46009,46010,46011,46012,46013,46014,46015,46016,46017,46018,46019,46020,46021,46022,46023,46024,46025,46026,46027,46028,46029,46030,46031,46032,46033,46034,46035,46036,46037,46038,46039,46040,46041,46042,46043,46044,46045,46046,46047,46048,46049,46050,46051,46052,46053,46054,46055,46056,46057,46058,46059,46060,46061,46062,46063,46064,46065,46066,46067,46068,46069,46070,46071,46072,46073,46074,46075,46076,46077,46078,46079,46080,46081,46082,46083,46084,46085,46086,46087,46088,46089,46090,46091,46092,46093,46094,46095,46096,46097,46098,46099,46100,46101,46102,46103,46104,46105,46106,46107,46108,46109,46110,46111,46112,46113,46114,46115,46116,46117,46118,46119,46120,46121,46122,46123,46124,46125,46126,46127,46128,46129,46130,46131,46132,46133,46134,46135,46136,46137,46138,46139,46140,46141,46142,46143,46144,46145,46146,46147,46148,46149,46150,46151,46152,46153,46154,46155,46156,46157,46158,46159,46160,46161,46162,46163,46164,46165,46166,46167,46168,46169,46170,46171,46172,46173,46174,46175,46176,46177,46178,46179,46180,46181,46182,46183,46184,46185,46186,46187,46188,46189,46190,46191,46192,46193,46194,46195,46196,46197,46198,46199,46200,46201,46202,46203,46204,46205,46206,46207,46208,46209,46210,46211,46212,46213,46214,46215,46216,46217,46218,46219,46220,46221,46222,46223,46224,46225,46226,46227,46228,46229,46230,46231,46232,46233,46234,46235,46236,46237,46238,46239,46240,46241,46242,46243,46244,46245,46246,46247,46248,46249,46250,46251,46252,46253,46254,46255,46256,46257,46258,46259,46260,46261,46262,46263,46264,46265,46266,46267,46268,46269,46270,46271,46272,46273,46274,46275,46276,46277,46278,46279,46280,46281,46282,46283,46284,46285,46286,46287,46288,46289,46290,46291,46292,46293,46294,46295,46296,46297,46298,46299,46300,46301,46302,46303,46304,46305,46306,46307,46308,46309,46310,46311,46312,46313,46314,46315,46316,46317,46318,46319,46320,46321,46322,46323,46324,46325,46326,46327,46328,46329,46330,46331,46332,46333,46334,46335,46336,46337,46338,46339,46340,46341,46342,46343,46344,46345,46346,46347,46348,46349,46350,46351,46352,46353,46354,46355,46356,46357,46358,46359,46360,46361,46362,46363,46364,46365,46366,46367,46368,46369,46370,46371,46372,46373,46374,46375,46376,46377,46378,46379,46380,46381,46382,46383,46384,46385,46386,46387,46388,46389,46390,46391,46392,46393,46394,46395,46396,46397,46398,46399,46400,46401,46402,46403,46404,46405,46406,46407,46408,46409,46410,46411,46412,46413,46414,46415,46416,46417,46418,46419,46420,46421,46422,46423,46424,46425,46426,46427,46428,46429,46430,46431,46432,46433,46434,46435,46436,46437,46438,46439,46440,46441,46442,46443,46444,46445,46446,46447,46448,46449,46450,46451,46452,46453,46454,46455,46456,46457,46458,46459,46460,46461,46462,46463,46464,46465,46466,46467,46468,46469,46470,46471,46472,46473,46474,46475,46476,46477,46478,46479,46480,46481,46482,46483,46484,46485,46486,46487,46488,46489,46490,46491,46492,46493,46494,46495,46496,46497,46498,46499,46500,46501,46502,46503,46504,46505,46506,46507,46508,46509,46510,46511,46512,46513,46514,46515,46516,46517,46518,46519,46520,46521,46522,46523,46524,46525,46526,46527,46528,46529,46530,46531,46532,46533,46534,46535,46536,46537,46538,46539,46540,46541,46542,46543,46544,46545,46546,46547,46548,46549,46550,46551,46552,46553,46554,46555,46556,46557,46558,46559,46560,46561,46562,46563,46564,46565,46566,46567,46568,46569,46570,46571,46572,46573,46574,46575,46576,46577,46578,46579,46580,46581,46582,46583,46584,46585,46586,46587,46588,46589,46590,46591,46592,46593,46594,46595,46596,46597,46598,46599,46600,46601,46602,46603,46604,46605,46606,46607,46608,46609,46610,46611,46612,46613,46614,46615,46616,46617,46618,46619,46620,46621,46622,46623,46624,46625,46626,46627,46628,46629,46630,46631,46632,46633,46634,46635,46636,46637,46638,46639,46640,46641,46642,46643,46644,46645,46646,46647,46648,46649,46650,46651,46652,46653,46654,46655,46656,46657,46658,46659,46660,46661,46662,46663,46664,46665,46666,46667,46668,46669,46670,46671,46672,46673,46674,46675,46676,46677,46678,46679,46680,46681,46682,46683,46684,46685,46686,46687,46688,46689,46690,46691,46692,46693,46694,46695,46696,46697,46698,46699,46700,46701,46702,46703,46704,46705,46706,46707,46708,46709,46710,46711,46712,46713,46714,46715,46716,46717,46718,46719,46720,46721,46722,46723,46724,46725,46726,46727,46728,46729,46730,46731,46732,46733,46734,46735,46736,46737,46738,46739,46740,46741,46742,46743,46744,46745,46746,46747,46748,46749,46750,46751,46752,46753,46754,46755,46756,46757,46758,46759,46760,46761,46762,46763,46764,46765,46766,46767,46768,46769,46770,46771,46772,46773,46774,46775,46776,46777,46778,46779,46780,46781,46782,46783,46784,46785,46786,46787,46788,46789,46790,46791,46792,46793,46794,46795,46796,46797,46798,46799,46800,46801,46802,46803,46804,46805,46806,46807,46808,46809,46810,46811,46812,46813,46814,46815,46816,46817,46818,46819,46820,46821,46822,46823,46824,46825,46826,46827,46828,46829,46830,46831,46832,46833,46834,46835,46836,46837,46838,46839,46840,46841,46842,46843,46844,46845,46846,46847,46848,46849,46850,46851,46852,46853,46854,46855,46856,46857,46858,46859,46860,46861,46862,46863,46864,46865,46866,46867,46868,46869,46870,46871,46872,46873,46874,46875,46876,46877,46878,46879,46880,46881,46882,46883,46884,46885,46886,46887,46888,46889,46890,46891,46892,46893,46894,46895,46896,46897,46898,46899,46900,46901,46902,46903,46904,46905,46906,46907,46908,46909,46910,46911,46912,46913,46914,46915,46916,46917,46918,46919,46920,46921,46922,46923,46924,46925,46926,46927,46928,46929,46930,46931,46932,46933,46934,46935,46936,46937,46938,46939,46940,46941,46942,46943,46944,46945,46946,46947,46948,46949,46950,46951,46952,46953,46954,46955,46956,46957,46958,46959,46960,46961,46962,46963,46964,46965,46966,46967,46968,46969,46970,46971,46972,46973,46974,46975,46976,46977,46978,46979,46980,46981,46982,46983,46984,46985,46986,46987,46988,46989,46990,46991,46992,46993,46994,46995,46996,46997,46998,46999,47e3,47001,47002,47003,47004,47005,47006,47007,47008,47009,47010,47011,47012,47013,47014,47015,47016,47017,47018,47019,47020,47021,47022,47023,47024,47025,47026,47027,47028,47029,47030,47031,47032,47033,47034,47035,47036,47037,47038,47039,47040,47041,47042,47043,47044,47045,47046,47047,47048,47049,47050,47051,47052,47053,47054,47055,47056,47057,47058,47059,47060,47061,47062,47063,47064,47065,47066,47067,47068,47069,47070,47071,47072,47073,47074,47075,47076,47077,47078,47079,47080,47081,47082,47083,47084,47085,47086,47087,47088,47089,47090,47091,47092,47093,47094,47095,47096,47097,47098,47099,47100,47101,47102,47103,47104,47105,47106,47107,47108,47109,47110,47111,47112,47113,47114,47115,47116,47117,47118,47119,47120,47121,47122,47123,47124,47125,47126,47127,47128,47129,47130,47131,47132,47133,47134,47135,47136,47137,47138,47139,47140,47141,47142,47143,47144,47145,47146,47147,47148,47149,47150,47151,47152,47153,47154,47155,47156,47157,47158,47159,47160,47161,47162,47163,47164,47165,47166,47167,47168,47169,47170,47171,47172,47173,47174,47175,47176,47177,47178,47179,47180,47181,47182,47183,47184,47185,47186,47187,47188,47189,47190,47191,47192,47193,47194,47195,47196,47197,47198,47199,47200,47201,47202,47203,47204,47205,47206,47207,47208,47209,47210,47211,47212,47213,47214,47215,47216,47217,47218,47219,47220,47221,47222,47223,47224,47225,47226,47227,47228,47229,47230,47231,47232,47233,47234,47235,47236,47237,47238,47239,47240,47241,47242,47243,47244,47245,47246,47247,47248,47249,47250,47251,47252,47253,47254,47255,47256,47257,47258,47259,47260,47261,47262,47263,47264,47265,47266,47267,47268,47269,47270,47271,47272,47273,47274,47275,47276,47277,47278,47279,47280,47281,47282,47283,47284,47285,47286,47287,47288,47289,47290,47291,47292,47293,47294,47295,47296,47297,47298,47299,47300,47301,47302,47303,47304,47305,47306,47307,47308,47309,47310,47311,47312,47313,47314,47315,47316,47317,47318,47319,47320,47321,47322,47323,47324,47325,47326,47327,47328,47329,47330,47331,47332,47333,47334,47335,47336,47337,47338,47339,47340,47341,47342,47343,47344,47345,47346,47347,47348,47349,47350,47351,47352,47353,47354,47355,47356,47357,47358,47359,47360,47361,47362,47363,47364,47365,47366,47367,47368,47369,47370,47371,47372,47373,47374,47375,47376,47377,47378,47379,47380,47381,47382,47383,47384,47385,47386,47387,47388,47389,47390,47391,47392,47393,47394,47395,47396,47397,47398,47399,47400,47401,47402,47403,47404,47405,47406,47407,47408,47409,47410,47411,47412,47413,47414,47415,47416,47417,47418,47419,47420,47421,47422,47423,47424,47425,47426,47427,47428,47429,47430,47431,47432,47433,47434,47435,47436,47437,47438,47439,47440,47441,47442,47443,47444,47445,47446,47447,47448,47449,47450,47451,47452,47453,47454,47455,47456,47457,47458,47459,47460,47461,47462,47463,47464,47465,47466,47467,47468,47469,47470,47471,47472,47473,47474,47475,47476,47477,47478,47479,47480,47481,47482,47483,47484,47485,47486,47487,47488,47489,47490,47491,47492,47493,47494,47495,47496,47497,47498,47499,47500,47501,47502,47503,47504,47505,47506,47507,47508,47509,47510,47511,47512,47513,47514,47515,47516,47517,47518,47519,47520,47521,47522,47523,47524,47525,47526,47527,47528,47529,47530,47531,47532,47533,47534,47535,47536,47537,47538,47539,47540,47541,47542,47543,47544,47545,47546,47547,47548,47549,47550,47551,47552,47553,47554,47555,47556,47557,47558,47559,47560,47561,47562,47563,47564,47565,47566,47567,47568,47569,47570,47571,47572,47573,47574,47575,47576,47577,47578,47579,47580,47581,47582,47583,47584,47585,47586,47587,47588,47589,47590,47591,47592,47593,47594,47595,47596,47597,47598,47599,47600,47601,47602,47603,47604,47605,47606,47607,47608,47609,47610,47611,47612,47613,47614,47615,47616,47617,47618,47619,47620,47621,47622,47623,47624,47625,47626,47627,47628,47629,47630,47631,47632,47633,47634,47635,47636,47637,47638,47639,47640,47641,47642,47643,47644,47645,47646,47647,47648,47649,47650,47651,47652,47653,47654,47655,47656,47657,47658,47659,47660,47661,47662,47663,47664,47665,47666,47667,47668,47669,47670,47671,47672,47673,47674,47675,47676,47677,47678,47679,47680,47681,47682,47683,47684,47685,47686,47687,47688,47689,47690,47691,47692,47693,47694,47695,47696,47697,47698,47699,47700,47701,47702,47703,47704,47705,47706,47707,47708,47709,47710,47711,47712,47713,47714,47715,47716,47717,47718,47719,47720,47721,47722,47723,47724,47725,47726,47727,47728,47729,47730,47731,47732,47733,47734,47735,47736,47737,47738,47739,47740,47741,47742,47743,47744,47745,47746,47747,47748,47749,47750,47751,47752,47753,47754,47755,47756,47757,47758,47759,47760,47761,47762,47763,47764,47765,47766,47767,47768,47769,47770,47771,47772,47773,47774,47775,47776,47777,47778,47779,47780,47781,47782,47783,47784,47785,47786,47787,47788,47789,47790,47791,47792,47793,47794,47795,47796,47797,47798,47799,47800,47801,47802,47803,47804,47805,47806,47807,47808,47809,47810,47811,47812,47813,47814,47815,47816,47817,47818,47819,47820,47821,47822,47823,47824,47825,47826,47827,47828,47829,47830,47831,47832,47833,47834,47835,47836,47837,47838,47839,47840,47841,47842,47843,47844,47845,47846,47847,47848,47849,47850,47851,47852,47853,47854,47855,47856,47857,47858,47859,47860,47861,47862,47863,47864,47865,47866,47867,47868,47869,47870,47871,47872,47873,47874,47875,47876,47877,47878,47879,47880,47881,47882,47883,47884,47885,47886,47887,47888,47889,47890,47891,47892,47893,47894,47895,47896,47897,47898,47899,47900,47901,47902,47903,47904,47905,47906,47907,47908,47909,47910,47911,47912,47913,47914,47915,47916,47917,47918,47919,47920,47921,47922,47923,47924,47925,47926,47927,47928,47929,47930,47931,47932,47933,47934,47935,47936,47937,47938,47939,47940,47941,47942,47943,47944,47945,47946,47947,47948,47949,47950,47951,47952,47953,47954,47955,47956,47957,47958,47959,47960,47961,47962,47963,47964,47965,47966,47967,47968,47969,47970,47971,47972,47973,47974,47975,47976,47977,47978,47979,47980,47981,47982,47983,47984,47985,47986,47987,47988,47989,47990,47991,47992,47993,47994,47995,47996,47997,47998,47999,48e3,48001,48002,48003,48004,48005,48006,48007,48008,48009,48010,48011,48012,48013,48014,48015,48016,48017,48018,48019,48020,48021,48022,48023,48024,48025,48026,48027,48028,48029,48030,48031,48032,48033,48034,48035,48036,48037,48038,48039,48040,48041,48042,48043,48044,48045,48046,48047,48048,48049,48050,48051,48052,48053,48054,48055,48056,48057,48058,48059,48060,48061,48062,48063,48064,48065,48066,48067,48068,48069,48070,48071,48072,48073,48074,48075,48076,48077,48078,48079,48080,48081,48082,48083,48084,48085,48086,48087,48088,48089,48090,48091,48092,48093,48094,48095,48096,48097,48098,48099,48100,48101,48102,48103,48104,48105,48106,48107,48108,48109,48110,48111,48112,48113,48114,48115,48116,48117,48118,48119,48120,48121,48122,48123,48124,48125,48126,48127,48128,48129,48130,48131,48132,48133,48134,48135,48136,48137,48138,48139,48140,48141,48142,48143,48144,48145,48146,48147,48148,48149,48150,48151,48152,48153,48154,48155,48156,48157,48158,48159,48160,48161,48162,48163,48164,48165,48166,48167,48168,48169,48170,48171,48172,48173,48174,48175,48176,48177,48178,48179,48180,48181,48182,48183,48184,48185,48186,48187,48188,48189,48190,48191,48192,48193,48194,48195,48196,48197,48198,48199,48200,48201,48202,48203,48204,48205,48206,48207,48208,48209,48210,48211,48212,48213,48214,48215,48216,48217,48218,48219,48220,48221,48222,48223,48224,48225,48226,48227,48228,48229,48230,48231,48232,48233,48234,48235,48236,48237,48238,48239,48240,48241,48242,48243,48244,48245,48246,48247,48248,48249,48250,48251,48252,48253,48254,48255,48256,48257,48258,48259,48260,48261,48262,48263,48264,48265,48266,48267,48268,48269,48270,48271,48272,48273,48274,48275,48276,48277,48278,48279,48280,48281,48282,48283,48284,48285,48286,48287,48288,48289,48290,48291,48292,48293,48294,48295,48296,48297,48298,48299,48300,48301,48302,48303,48304,48305,48306,48307,48308,48309,48310,48311,48312,48313,48314,48315,48316,48317,48318,48319,48320,48321,48322,48323,48324,48325,48326,48327,48328,48329,48330,48331,48332,48333,48334,48335,48336,48337,48338,48339,48340,48341,48342,48343,48344,48345,48346,48347,48348,48349,48350,48351,48352,48353,48354,48355,48356,48357,48358,48359,48360,48361,48362,48363,48364,48365,48366,48367,48368,48369,48370,48371,48372,48373,48374,48375,48376,48377,48378,48379,48380,48381,48382,48383,48384,48385,48386,48387,48388,48389,48390,48391,48392,48393,48394,48395,48396,48397,48398,48399,48400,48401,48402,48403,48404,48405,48406,48407,48408,48409,48410,48411,48412,48413,48414,48415,48416,48417,48418,48419,48420,48421,48422,48423,48424,48425,48426,48427,48428,48429,48430,48431,48432,48433,48434,48435,48436,48437,48438,48439,48440,48441,48442,48443,48444,48445,48446,48447,48448,48449,48450,48451,48452,48453,48454,48455,48456,48457,48458,48459,48460,48461,48462,48463,48464,48465,48466,48467,48468,48469,48470,48471,48472,48473,48474,48475,48476,48477,48478,48479,48480,48481,48482,48483,48484,48485,48486,48487,48488,48489,48490,48491,48492,48493,48494,48495,48496,48497,48498,48499,48500,48501,48502,48503,48504,48505,48506,48507,48508,48509,48510,48511,48512,48513,48514,48515,48516,48517,48518,48519,48520,48521,48522,48523,48524,48525,48526,48527,48528,48529,48530,48531,48532,48533,48534,48535,48536,48537,48538,48539,48540,48541,48542,48543,48544,48545,48546,48547,48548,48549,48550,48551,48552,48553,48554,48555,48556,48557,48558,48559,48560,48561,48562,48563,48564,48565,48566,48567,48568,48569,48570,48571,48572,48573,48574,48575,48576,48577,48578,48579,48580,48581,48582,48583,48584,48585,48586,48587,48588,48589,48590,48591,48592,48593,48594,48595,48596,48597,48598,48599,48600,48601,48602,48603,48604,48605,48606,48607,48608,48609,48610,48611,48612,48613,48614,48615,48616,48617,48618,48619,48620,48621,48622,48623,48624,48625,48626,48627,48628,48629,48630,48631,48632,48633,48634,48635,48636,48637,48638,48639,48640,48641,48642,48643,48644,48645,48646,48647,48648,48649,48650,48651,48652,48653,48654,48655,48656,48657,48658,48659,48660,48661,48662,48663,48664,48665,48666,48667,48668,48669,48670,48671,48672,48673,48674,48675,48676,48677,48678,48679,48680,48681,48682,48683,48684,48685,48686,48687,48688,48689,48690,48691,48692,48693,48694,48695,48696,48697,48698,48699,48700,48701,48702,48703,48704,48705,48706,48707,48708,48709,48710,48711,48712,48713,48714,48715,48716,48717,48718,48719,48720,48721,48722,48723,48724,48725,48726,48727,48728,48729,48730,48731,48732,48733,48734,48735,48736,48737,48738,48739,48740,48741,48742,48743,48744,48745,48746,48747,48748,48749,48750,48751,48752,48753,48754,48755,48756,48757,48758,48759,48760,48761,48762,48763,48764,48765,48766,48767,48768,48769,48770,48771,48772,48773,48774,48775,48776,48777,48778,48779,48780,48781,48782,48783,48784,48785,48786,48787,48788,48789,48790,48791,48792,48793,48794,48795,48796,48797,48798,48799,48800,48801,48802,48803,48804,48805,48806,48807,48808,48809,48810,48811,48812,48813,48814,48815,48816,48817,48818,48819,48820,48821,48822,48823,48824,48825,48826,48827,48828,48829,48830,48831,48832,48833,48834,48835,48836,48837,48838,48839,48840,48841,48842,48843,48844,48845,48846,48847,48848,48849,48850,48851,48852,48853,48854,48855,48856,48857,48858,48859,48860,48861,48862,48863,48864,48865,48866,48867,48868,48869,48870,48871,48872,48873,48874,48875,48876,48877,48878,48879,48880,48881,48882,48883,48884,48885,48886,48887,48888,48889,48890,48891,48892,48893,48894,48895,48896,48897,48898,48899,48900,48901,48902,48903,48904,48905,48906,48907,48908,48909,48910,48911,48912,48913,48914,48915,48916,48917,48918,48919,48920,48921,48922,48923,48924,48925,48926,48927,48928,48929,48930,48931,48932,48933,48934,48935,48936,48937,48938,48939,48940,48941,48942,48943,48944,48945,48946,48947,48948,48949,48950,48951,48952,48953,48954,48955,48956,48957,48958,48959,48960,48961,48962,48963,48964,48965,48966,48967,48968,48969,48970,48971,48972,48973,48974,48975,48976,48977,48978,48979,48980,48981,48982,48983,48984,48985,48986,48987,48988,48989,48990,48991,48992,48993,48994,48995,48996,48997,48998,48999,49e3,49001,49002,49003,49004,49005,49006,49007,49008,49009,49010,49011,49012,49013,49014,49015,49016,49017,49018,49019,49020,49021,49022,49023,49024,49025,49026,49027,49028,49029,49030,49031,49032,49033,49034,49035,49036,49037,49038,49039,49040,49041,49042,49043,49044,49045,49046,49047,49048,49049,49050,49051,49052,49053,49054,49055,49056,49057,49058,49059,49060,49061,49062,49063,49064,49065,49066,49067,49068,49069,49070,49071,49072,49073,49074,49075,49076,49077,49078,49079,49080,49081,49082,49083,49084,49085,49086,49087,49088,49089,49090,49091,49092,49093,49094,49095,49096,49097,49098,49099,49100,49101,49102,49103,49104,49105,49106,49107,49108,49109,49110,49111,49112,49113,49114,49115,49116,49117,49118,49119,49120,49121,49122,49123,49124,49125,49126,49127,49128,49129,49130,49131,49132,49133,49134,49135,49136,49137,49138,49139,49140,49141,49142,49143,49144,49145,49146,49147,49148,49149,49150,49151,49152,49153,49154,49155,49156,49157,49158,49159,49160,49161,49162,49163,49164,49165,49166,49167,49168,49169,49170,49171,49172,49173,49174,49175,49176,49177,49178,49179,49180,49181,49182,49183,49184,49185,49186,49187,49188,49189,49190,49191,49192,49193,49194,49195,49196,49197,49198,49199,49200,49201,49202,49203,49204,49205,49206,49207,49208,49209,49210,49211,49212,49213,49214,49215,49216,49217,49218,49219,49220,49221,49222,49223,49224,49225,49226,49227,49228,49229,49230,49231,49232,49233,49234,49235,49236,49237,49238,49239,49240,49241,49242,49243,49244,49245,49246,49247,49248,49249,49250,49251,49252,49253,49254,49255,49256,49257,49258,49259,49260,49261,49262,49263,49264,49265,49266,49267,49268,49269,49270,49271,49272,49273,49274,49275,49276,49277,49278,49279,49280,49281,49282,49283,49284,49285,49286,49287,49288,49289,49290,49291,49292,49293,49294,49295,49296,49297,49298,49299,49300,49301,49302,49303,49304,49305,49306,49307,49308,49309,49310,49311,49312,49313,49314,49315,49316,49317,49318,49319,49320,49321,49322,49323,49324,49325,49326,49327,49328,49329,49330,49331,49332,49333,49334,49335,49336,49337,49338,49339,49340,49341,49342,49343,49344,49345,49346,49347,49348,49349,49350,49351,49352,49353,49354,49355,49356,49357,49358,49359,49360,49361,49362,49363,49364,49365,49366,49367,49368,49369,49370,49371,49372,49373,49374,49375,49376,49377,49378,49379,49380,49381,49382,49383,49384,49385,49386,49387,49388,49389,49390,49391,49392,49393,49394,49395,49396,49397,49398,49399,49400,49401,49402,49403,49404,49405,49406,49407,49408,49409,49410,49411,49412,49413,49414,49415,49416,49417,49418,49419,49420,49421,49422,49423,49424,49425,49426,49427,49428,49429,49430,49431,49432,49433,49434,49435,49436,49437,49438,49439,49440,49441,49442,49443,49444,49445,49446,49447,49448,49449,49450,49451,49452,49453,49454,49455,49456,49457,49458,49459,49460,49461,49462,49463,49464,49465,49466,49467,49468,49469,49470,49471,49472,49473,49474,49475,49476,49477,49478,49479,49480,49481,49482,49483,49484,49485,49486,49487,49488,49489,49490,49491,49492,49493,49494,49495,49496,49497,49498,49499,49500,49501,49502,49503,49504,49505,49506,49507,49508,49509,49510,49511,49512,49513,49514,49515,49516,49517,49518,49519,49520,49521,49522,49523,49524,49525,49526,49527,49528,49529,49530,49531,49532,49533,49534,49535,49536,49537,49538,49539,49540,49541,49542,49543,49544,49545,49546,49547,49548,49549,49550,49551,49552,49553,49554,49555,49556,49557,49558,49559,49560,49561,49562,49563,49564,49565,49566,49567,49568,49569,49570,49571,49572,49573,49574,49575,49576,49577,49578,49579,49580,49581,49582,49583,49584,49585,49586,49587,49588,49589,49590,49591,49592,49593,49594,49595,49596,49597,49598,49599,49600,49601,49602,49603,49604,49605,49606,49607,49608,49609,49610,49611,49612,49613,49614,49615,49616,49617,49618,49619,49620,49621,49622,49623,49624,49625,49626,49627,49628,49629,49630,49631,49632,49633,49634,49635,49636,49637,49638,49639,49640,49641,49642,49643,49644,49645,49646,49647,49648,49649,49650,49651,49652,49653,49654,49655,49656,49657,49658,49659,49660,49661,49662,49663,49664,49665,49666,49667,49668,49669,49670,49671,49672,49673,49674,49675,49676,49677,49678,49679,49680,49681,49682,49683,49684,49685,49686,49687,49688,49689,49690,49691,49692,49693,49694,49695,49696,49697,49698,49699,49700,49701,49702,49703,49704,49705,49706,49707,49708,49709,49710,49711,49712,49713,49714,49715,49716,49717,49718,49719,49720,49721,49722,49723,49724,49725,49726,49727,49728,49729,49730,49731,49732,49733,49734,49735,49736,49737,49738,49739,49740,49741,49742,49743,49744,49745,49746,49747,49748,49749,49750,49751,49752,49753,49754,49755,49756,49757,49758,49759,49760,49761,49762,49763,49764,49765,49766,49767,49768,49769,49770,49771,49772,49773,49774,49775,49776,49777,49778,49779,49780,49781,49782,49783,49784,49785,49786,49787,49788,49789,49790,49791,49792,49793,49794,49795,49796,49797,49798,49799,49800,49801,49802,49803,49804,49805,49806,49807,49808,49809,49810,49811,49812,49813,49814,49815,49816,49817,49818,49819,49820,49821,49822,49823,49824,49825,49826,49827,49828,49829,49830,49831,49832,49833,49834,49835,49836,49837,49838,49839,49840,49841,49842,49843,49844,49845,49846,49847,49848,49849,49850,49851,49852,49853,49854,49855,49856,49857,49858,49859,49860,49861,49862,49863,49864,49865,49866,49867,49868,49869,49870,49871,49872,49873,49874,49875,49876,49877,49878,49879,49880,49881,49882,49883,49884,49885,49886,49887,49888,49889,49890,49891,49892,49893,49894,49895,49896,49897,49898,49899,49900,49901,49902,49903,49904,49905,49906,49907,49908,49909,49910,49911,49912,49913,49914,49915,49916,49917,49918,49919,49920,49921,49922,49923,49924,49925,49926,49927,49928,49929,49930,49931,49932,49933,49934,49935,49936,49937,49938,49939,49940,49941,49942,49943,49944,49945,49946,49947,49948,49949,49950,49951,49952,49953,49954,49955,49956,49957,49958,49959,49960,49961,49962,49963,49964,49965,49966,49967,49968,49969,49970,49971,49972,49973,49974,49975,49976,49977,49978,49979,49980,49981,49982,49983,49984,49985,49986,49987,49988,49989,49990,49991,49992,49993,49994,49995,49996,49997,49998,49999,5e4,50001,50002,50003,50004,50005,50006,50007,50008,50009,50010,50011,50012,50013,50014,50015,50016,50017,50018,50019,50020,50021,50022,50023,50024,50025,50026,50027,50028,50029,50030,50031,50032,50033,50034,50035,50036,50037,50038,50039,50040,50041,50042,50043,50044,50045,50046,50047,50048,50049,50050,50051,50052,50053,50054,50055,50056,50057,50058,50059,50060,50061,50062,50063,50064,50065,50066,50067,50068,50069,50070,50071,50072,50073,50074,50075,50076,50077,50078,50079,50080,50081,50082,50083,50084,50085,50086,50087,50088,50089,50090,50091,50092,50093,50094,50095,50096,50097,50098,50099,50100,50101,50102,50103,50104,50105,50106,50107,50108,50109,50110,50111,50112,50113,50114,50115,50116,50117,50118,50119,50120,50121,50122,50123,50124,50125,50126,50127,50128,50129,50130,50131,50132,50133,50134,50135,50136,50137,50138,50139,50140,50141,50142,50143,50144,50145,50146,50147,50148,50149,50150,50151,50152,50153,50154,50155,50156,50157,50158,50159,50160,50161,50162,50163,50164,50165,50166,50167,50168,50169,50170,50171,50172,50173,50174,50175,50176,50177,50178,50179,50180,50181,50182,50183,50184,50185,50186,50187,50188,50189,50190,50191,50192,50193,50194,50195,50196,50197,50198,50199,50200,50201,50202,50203,50204,50205,50206,50207,50208,50209,50210,50211,50212,50213,50214,50215,50216,50217,50218,50219,50220,50221,50222,50223,50224,50225,50226,50227,50228,50229,50230,50231,50232,50233,50234,50235,50236,50237,50238,50239,50240,50241,50242,50243,50244,50245,50246,50247,50248,50249,50250,50251,50252,50253,50254,50255,50256,50257,50258,50259,50260,50261,50262,50263,50264,50265,50266,50267,50268,50269,50270,50271,50272,50273,50274,50275,50276,50277,50278,50279,50280,50281,50282,50283,50284,50285,50286,50287,50288,50289,50290,50291,50292,50293,50294,50295,50296,50297,50298,50299,50300,50301,50302,50303,50304,50305,50306,50307,50308,50309,50310,50311,50312,50313,50314,50315,50316,50317,50318,50319,50320,50321,50322,50323,50324,50325,50326,50327,50328,50329,50330,50331,50332,50333,50334,50335,50336,50337,50338,50339,50340,50341,50342,50343,50344,50345,50346,50347,50348,50349,50350,50351,50352,50353,50354,50355,50356,50357,50358,50359,50360,50361,50362,50363,50364,50365,50366,50367,50368,50369,50370,50371,50372,50373,50374,50375,50376,50377,50378,50379,50380,50381,50382,50383,50384,50385,50386,50387,50388,50389,50390,50391,50392,50393,50394,50395,50396,50397,50398,50399,50400,50401,50402,50403,50404,50405,50406,50407,50408,50409,50410,50411,50412,50413,50414,50415,50416,50417,50418,50419,50420,50421,50422,50423,50424,50425,50426,50427,50428,50429,50430,50431,50432,50433,50434,50435,50436,50437,50438,50439,50440,50441,50442,50443,50444,50445,50446,50447,50448,50449,50450,50451,50452,50453,50454,50455,50456,50457,50458,50459,50460,50461,50462,50463,50464,50465,50466,50467,50468,50469,50470,50471,50472,50473,50474,50475,50476,50477,50478,50479,50480,50481,50482,50483,50484,50485,50486,50487,50488,50489,50490,50491,50492,50493,50494,50495,50496,50497,50498,50499,50500,50501,50502,50503,50504,50505,50506,50507,50508,50509,50510,50511,50512,50513,50514,50515,50516,50517,50518,50519,50520,50521,50522,50523,50524,50525,50526,50527,50528,50529,50530,50531,50532,50533,50534,50535,50536,50537,50538,50539,50540,50541,50542,50543,50544,50545,50546,50547,50548,50549,50550,50551,50552,50553,50554,50555,50556,50557,50558,50559,50560,50561,50562,50563,50564,50565,50566,50567,50568,50569,50570,50571,50572,50573,50574,50575,50576,50577,50578,50579,50580,50581,50582,50583,50584,50585,50586,50587,50588,50589,50590,50591,50592,50593,50594,50595,50596,50597,50598,50599,50600,50601,50602,50603,50604,50605,50606,50607,50608,50609,50610,50611,50612,50613,50614,50615,50616,50617,50618,50619,50620,50621,50622,50623,50624,50625,50626,50627,50628,50629,50630,50631,50632,50633,50634,50635,50636,50637,50638,50639,50640,50641,50642,50643,50644,50645,50646,50647,50648,50649,50650,50651,50652,50653,50654,50655,50656,50657,50658,50659,50660,50661,50662,50663,50664,50665,50666,50667,50668,50669,50670,50671,50672,50673,50674,50675,50676,50677,50678,50679,50680,50681,50682,50683,50684,50685,50686,50687,50688,50689,50690,50691,50692,50693,50694,50695,50696,50697,50698,50699,50700,50701,50702,50703,50704,50705,50706,50707,50708,50709,50710,50711,50712,50713,50714,50715,50716,50717,50718,50719,50720,50721,50722,50723,50724,50725,50726,50727,50728,50729,50730,50731,50732,50733,50734,50735,50736,50737,50738,50739,50740,50741,50742,50743,50744,50745,50746,50747,50748,50749,50750,50751,50752,50753,50754,50755,50756,50757,50758,50759,50760,50761,50762,50763,50764,50765,50766,50767,50768,50769,50770,50771,50772,50773,50774,50775,50776,50777,50778,50779,50780,50781,50782,50783,50784,50785,50786,50787,50788,50789,50790,50791,50792,50793,50794,50795,50796,50797,50798,50799,50800,50801,50802,50803,50804,50805,50806,50807,50808,50809,50810,50811,50812,50813,50814,50815,50816,50817,50818,50819,50820,50821,50822,50823,50824,50825,50826,50827,50828,50829,50830,50831,50832,50833,50834,50835,50836,50837,50838,50839,50840,50841,50842,50843,50844,50845,50846,50847,50848,50849,50850,50851,50852,50853,50854,50855,50856,50857,50858,50859,50860,50861,50862,50863,50864,50865,50866,50867,50868,50869,50870,50871,50872,50873,50874,50875,50876,50877,50878,50879,50880,50881,50882,50883,50884,50885,50886,50887,50888,50889,50890,50891,50892,50893,50894,50895,50896,50897,50898,50899,50900,50901,50902,50903,50904,50905,50906,50907,50908,50909,50910,50911,50912,50913,50914,50915,50916,50917,50918,50919,50920,50921,50922,50923,50924,50925,50926,50927,50928,50929,50930,50931,50932,50933,50934,50935,50936,50937,50938,50939,50940,50941,50942,50943,50944,50945,50946,50947,50948,50949,50950,50951,50952,50953,50954,50955,50956,50957,50958,50959,50960,50961,50962,50963,50964,50965,50966,50967,50968,50969,50970,50971,50972,50973,50974,50975,50976,50977,50978,50979,50980,50981,50982,50983,50984,50985,50986,50987,50988,50989,50990,50991,50992,50993,50994,50995,50996,50997,50998,50999,51e3,51001,51002,51003,51004,51005,51006,51007,51008,51009,51010,51011,51012,51013,51014,51015,51016,51017,51018,51019,51020,51021,51022,51023,51024,51025,51026,51027,51028,51029,51030,51031,51032,51033,51034,51035,51036,51037,51038,51039,51040,51041,51042,51043,51044,51045,51046,51047,51048,51049,51050,51051,51052,51053,51054,51055,51056,51057,51058,51059,51060,51061,51062,51063,51064,51065,51066,51067,51068,51069,51070,51071,51072,51073,51074,51075,51076,51077,51078,51079,51080,51081,51082,51083,51084,51085,51086,51087,51088,51089,51090,51091,51092,51093,51094,51095,51096,51097,51098,51099,51100,51101,51102,51103,51104,51105,51106,51107,51108,51109,51110,51111,51112,51113,51114,51115,51116,51117,51118,51119,51120,51121,51122,51123,51124,51125,51126,51127,51128,51129,51130,51131,51132,51133,51134,51135,51136,51137,51138,51139,51140,51141,51142,51143,51144,51145,51146,51147,51148,51149,51150,51151,51152,51153,51154,51155,51156,51157,51158,51159,51160,51161,51162,51163,51164,51165,51166,51167,51168,51169,51170,51171,51172,51173,51174,51175,51176,51177,51178,51179,51180,51181,51182,51183,51184,51185,51186,51187,51188,51189,51190,51191,51192,51193,51194,51195,51196,51197,51198,51199,51200,51201,51202,51203,51204,51205,51206,51207,51208,51209,51210,51211,51212,51213,51214,51215,51216,51217,51218,51219,51220,51221,51222,51223,51224,51225,51226,51227,51228,51229,51230,51231,51232,51233,51234,51235,51236,51237,51238,51239,51240,51241,51242,51243,51244,51245,51246,51247,51248,51249,51250,51251,51252,51253,51254,51255,51256,51257,51258,51259,51260,51261,51262,51263,51264,51265,51266,51267,51268,51269,51270,51271,51272,51273,51274,51275,51276,51277,51278,51279,51280,51281,51282,51283,51284,51285,51286,51287,51288,51289,51290,51291,51292,51293,51294,51295,51296,51297,51298,51299,51300,51301,51302,51303,51304,51305,51306,51307,51308,51309,51310,51311,51312,51313,51314,51315,51316,51317,51318,51319,51320,51321,51322,51323,51324,51325,51326,51327,51328,51329,51330,51331,51332,51333,51334,51335,51336,51337,51338,51339,51340,51341,51342,51343,51344,51345,51346,51347,51348,51349,51350,51351,51352,51353,51354,51355,51356,51357,51358,51359,51360,51361,51362,51363,51364,51365,51366,51367,51368,51369,51370,51371,51372,51373,51374,51375,51376,51377,51378,51379,51380,51381,51382,51383,51384,51385,51386,51387,51388,51389,51390,51391,51392,51393,51394,51395,51396,51397,51398,51399,51400,51401,51402,51403,51404,51405,51406,51407,51408,51409,51410,51411,51412,51413,51414,51415,51416,51417,51418,51419,51420,51421,51422,51423,51424,51425,51426,51427,51428,51429,51430,51431,51432,51433,51434,51435,51436,51437,51438,51439,51440,51441,51442,51443,51444,51445,51446,51447,51448,51449,51450,51451,51452,51453,51454,51455,51456,51457,51458,51459,51460,51461,51462,51463,51464,51465,51466,51467,51468,51469,51470,51471,51472,51473,51474,51475,51476,51477,51478,51479,51480,51481,51482,51483,51484,51485,51486,51487,51488,51489,51490,51491,51492,51493,51494,51495,51496,51497,51498,51499,51500,51501,51502,51503,51504,51505,51506,51507,51508,51509,51510,51511,51512,51513,51514,51515,51516,51517,51518,51519,51520,51521,51522,51523,51524,51525,51526,51527,51528,51529,51530,51531,51532,51533,51534,51535,51536,51537,51538,51539,51540,51541,51542,51543,51544,51545,51546,51547,51548,51549,51550,51551,51552,51553,51554,51555,51556,51557,51558,51559,51560,51561,51562,51563,51564,51565,51566,51567,51568,51569,51570,51571,51572,51573,51574,51575,51576,51577,51578,51579,51580,51581,51582,51583,51584,51585,51586,51587,51588,51589,51590,51591,51592,51593,51594,51595,51596,51597,51598,51599,51600,51601,51602,51603,51604,51605,51606,51607,51608,51609,51610,51611,51612,51613,51614,51615,51616,51617,51618,51619,51620,51621,51622,51623,51624,51625,51626,51627,51628,51629,51630,51631,51632,51633,51634,51635,51636,51637,51638,51639,51640,51641,51642,51643,51644,51645,51646,51647,51648,51649,51650,51651,51652,51653,51654,51655,51656,51657,51658,51659,51660,51661,51662,51663,51664,51665,51666,51667,51668,51669,51670,51671,51672,51673,51674,51675,51676,51677,51678,51679,51680,51681,51682,51683,51684,51685,51686,51687,51688,51689,51690,51691,51692,51693,51694,51695,51696,51697,51698,51699,51700,51701,51702,51703,51704,51705,51706,51707,51708,51709,51710,51711,51712,51713,51714,51715,51716,51717,51718,51719,51720,51721,51722,51723,51724,51725,51726,51727,51728,51729,51730,51731,51732,51733,51734,51735,51736,51737,51738,51739,51740,51741,51742,51743,51744,51745,51746,51747,51748,51749,51750,51751,51752,51753,51754,51755,51756,51757,51758,51759,51760,51761,51762,51763,51764,51765,51766,51767,51768,51769,51770,51771,51772,51773,51774,51775,51776,51777,51778,51779,51780,51781,51782,51783,51784,51785,51786,51787,51788,51789,51790,51791,51792,51793,51794,51795,51796,51797,51798,51799,51800,51801,51802,51803,51804,51805,51806,51807,51808,51809,51810,51811,51812,51813,51814,51815,51816,51817,51818,51819,51820,51821,51822,51823,51824,51825,51826,51827,51828,51829,51830,51831,51832,51833,51834,51835,51836,51837,51838,51839,51840,51841,51842,51843,51844,51845,51846,51847,51848,51849,51850,51851,51852,51853,51854,51855,51856,51857,51858,51859,51860,51861,51862,51863,51864,51865,51866,51867,51868,51869,51870,51871,51872,51873,51874,51875,51876,51877,51878,51879,51880,51881,51882,51883,51884,51885,51886,51887,51888,51889,51890,51891,51892,51893,51894,51895,51896,51897,51898,51899,51900,51901,51902,51903,51904,51905,51906,51907,51908,51909,51910,51911,51912,51913,51914,51915,51916,51917,51918,51919,51920,51921,51922,51923,51924,51925,51926,51927,51928,51929,51930,51931,51932,51933,51934,51935,51936,51937,51938,51939,51940,51941,51942,51943,51944,51945,51946,51947,51948,51949,51950,51951,51952,51953,51954,51955,51956,51957,51958,51959,51960,51961,51962,51963,51964,51965,51966,51967,51968,51969,51970,51971,51972,51973,51974,51975,51976,51977,51978,51979,51980,51981,51982,51983,51984,51985,51986,51987,51988,51989,51990,51991,51992,51993,51994,51995,51996,51997,51998,51999,52e3,52001,52002,52003,52004,52005,52006,52007,52008,52009,52010,52011,52012,52013,52014,52015,52016,52017,52018,52019,52020,52021,52022,52023,52024,52025,52026,52027,52028,52029,52030,52031,52032,52033,52034,52035,52036,52037,52038,52039,52040,52041,52042,52043,52044,52045,52046,52047,52048,52049,52050,52051,52052,52053,52054,52055,52056,52057,52058,52059,52060,52061,52062,52063,52064,52065,52066,52067,52068,52069,52070,52071,52072,52073,52074,52075,52076,52077,52078,52079,52080,52081,52082,52083,52084,52085,52086,52087,52088,52089,52090,52091,52092,52093,52094,52095,52096,52097,52098,52099,52100,52101,52102,52103,52104,52105,52106,52107,52108,52109,52110,52111,52112,52113,52114,52115,52116,52117,52118,52119,52120,52121,52122,52123,52124,52125,52126,52127,52128,52129,52130,52131,52132,52133,52134,52135,52136,52137,52138,52139,52140,52141,52142,52143,52144,52145,52146,52147,52148,52149,52150,52151,52152,52153,52154,52155,52156,52157,52158,52159,52160,52161,52162,52163,52164,52165,52166,52167,52168,52169,52170,52171,52172,52173,52174,52175,52176,52177,52178,52179,52180,52181,52182,52183,52184,52185,52186,52187,52188,52189,52190,52191,52192,52193,52194,52195,52196,52197,52198,52199,52200,52201,52202,52203,52204,52205,52206,52207,52208,52209,52210,52211,52212,52213,52214,52215,52216,52217,52218,52219,52220,52221,52222,52223,52224,52225,52226,52227,52228,52229,52230,52231,52232,52233,52234,52235,52236,52237,52238,52239,52240,52241,52242,52243,52244,52245,52246,52247,52248,52249,52250,52251,52252,52253,52254,52255,52256,52257,52258,52259,52260,52261,52262,52263,52264,52265,52266,52267,52268,52269,52270,52271,52272,52273,52274,52275,52276,52277,52278,52279,52280,52281,52282,52283,52284,52285,52286,52287,52288,52289,52290,52291,52292,52293,52294,52295,52296,52297,52298,52299,52300,52301,52302,52303,52304,52305,52306,52307,52308,52309,52310,52311,52312,52313,52314,52315,52316,52317,52318,52319,52320,52321,52322,52323,52324,52325,52326,52327,52328,52329,52330,52331,52332,52333,52334,52335,52336,52337,52338,52339,52340,52341,52342,52343,52344,52345,52346,52347,52348,52349,52350,52351,52352,52353,52354,52355,52356,52357,52358,52359,52360,52361,52362,52363,52364,52365,52366,52367,52368,52369,52370,52371,52372,52373,52374,52375,52376,52377,52378,52379,52380,52381,52382,52383,52384,52385,52386,52387,52388,52389,52390,52391,52392,52393,52394,52395,52396,52397,52398,52399,52400,52401,52402,52403,52404,52405,52406,52407,52408,52409,52410,52411,52412,52413,52414,52415,52416,52417,52418,52419,52420,52421,52422,52423,52424,52425,52426,52427,52428,52429,52430,52431,52432,52433,52434,52435,52436,52437,52438,52439,52440,52441,52442,52443,52444,52445,52446,52447,52448,52449,52450,52451,52452,52453,52454,52455,52456,52457,52458,52459,52460,52461,52462,52463,52464,52465,52466,52467,52468,52469,52470,52471,52472,52473,52474,52475,52476,52477,52478,52479,52480,52481,52482,52483,52484,52485,52486,52487,52488,52489,52490,52491,52492,52493,52494,52495,52496,52497,52498,52499,52500,52501,52502,52503,52504,52505,52506,52507,52508,52509,52510,52511,52512,52513,52514,52515,52516,52517,52518,52519,52520,52521,52522,52523,52524,52525,52526,52527,52528,52529,52530,52531,52532,52533,52534,52535,52536,52537,52538,52539,52540,52541,52542,52543,52544,52545,52546,52547,52548,52549,52550,52551,52552,52553,52554,52555,52556,52557,52558,52559,52560,52561,52562,52563,52564,52565,52566,52567,52568,52569,52570,52571,52572,52573,52574,52575,52576,52577,52578,52579,52580,52581,52582,52583,52584,52585,52586,52587,52588,52589,52590,52591,52592,52593,52594,52595,52596,52597,52598,52599,52600,52601,52602,52603,52604,52605,52606,52607,52608,52609,52610,52611,52612,52613,52614,52615,52616,52617,52618,52619,52620,52621,52622,52623,52624,52625,52626,52627,52628,52629,52630,52631,52632,52633,52634,52635,52636,52637,52638,52639,52640,52641,52642,52643,52644,52645,52646,52647,52648,52649,52650,52651,52652,52653,52654,52655,52656,52657,52658,52659,52660,52661,52662,52663,52664,52665,52666,52667,52668,52669,52670,52671,52672,52673,52674,52675,52676,52677,52678,52679,52680,52681,52682,52683,52684,52685,52686,52687,52688,52689,52690,52691,52692,52693,52694,52695,52696,52697,52698,52699,52700,52701,52702,52703,52704,52705,52706,52707,52708,52709,52710,52711,52712,52713,52714,52715,52716,52717,52718,52719,52720,52721,52722,52723,52724,52725,52726,52727,52728,52729,52730,52731,52732,52733,52734,52735,52736,52737,52738,52739,52740,52741,52742,52743,52744,52745,52746,52747,52748,52749,52750,52751,52752,52753,52754,52755,52756,52757,52758,52759,52760,52761,52762,52763,52764,52765,52766,52767,52768,52769,52770,52771,52772,52773,52774,52775,52776,52777,52778,52779,52780,52781,52782,52783,52784,52785,52786,52787,52788,52789,52790,52791,52792,52793,52794,52795,52796,52797,52798,52799,52800,52801,52802,52803,52804,52805,52806,52807,52808,52809,52810,52811,52812,52813,52814,52815,52816,52817,52818,52819,52820,52821,52822,52823,52824,52825,52826,52827,52828,52829,52830,52831,52832,52833,52834,52835,52836,52837,52838,52839,52840,52841,52842,52843,52844,52845,52846,52847,52848,52849,52850,52851,52852,52853,52854,52855,52856,52857,52858,52859,52860,52861,52862,52863,52864,52865,52866,52867,52868,52869,52870,52871,52872,52873,52874,52875,52876,52877,52878,52879,52880,52881,52882,52883,52884,52885,52886,52887,52888,52889,52890,52891,52892,52893,52894,52895,52896,52897,52898,52899,52900,52901,52902,52903,52904,52905,52906,52907,52908,52909,52910,52911,52912,52913,52914,52915,52916,52917,52918,52919,52920,52921,52922,52923,52924,52925,52926,52927,52928,52929,52930,52931,52932,52933,52934,52935,52936,52937,52938,52939,52940,52941,52942,52943,52944,52945,52946,52947,52948,52949,52950,52951,52952,52953,52954,52955,52956,52957,52958,52959,52960,52961,52962,52963,52964,52965,52966,52967,52968,52969,52970,52971,52972,52973,52974,52975,52976,52977,52978,52979,52980,52981,52982,52983,52984,52985,52986,52987,52988,52989,52990,52991,52992,52993,52994,52995,52996,52997,52998,52999,53e3,53001,53002,53003,53004,53005,53006,53007,53008,53009,53010,53011,53012,53013,53014,53015,53016,53017,53018,53019,53020,53021,53022,53023,53024,53025,53026,53027,53028,53029,53030,53031,53032,53033,53034,53035,53036,53037,53038,53039,53040,53041,53042,53043,53044,53045,53046,53047,53048,53049,53050,53051,53052,53053,53054,53055,53056,53057,53058,53059,53060,53061,53062,53063,53064,53065,53066,53067,53068,53069,53070,53071,53072,53073,53074,53075,53076,53077,53078,53079,53080,53081,53082,53083,53084,53085,53086,53087,53088,53089,53090,53091,53092,53093,53094,53095,53096,53097,53098,53099,53100,53101,53102,53103,53104,53105,53106,53107,53108,53109,53110,53111,53112,53113,53114,53115,53116,53117,53118,53119,53120,53121,53122,53123,53124,53125,53126,53127,53128,53129,53130,53131,53132,53133,53134,53135,53136,53137,53138,53139,53140,53141,53142,53143,53144,53145,53146,53147,53148,53149,53150,53151,53152,53153,53154,53155,53156,53157,53158,53159,53160,53161,53162,53163,53164,53165,53166,53167,53168,53169,53170,53171,53172,53173,53174,53175,53176,53177,53178,53179,53180,53181,53182,53183,53184,53185,53186,53187,53188,53189,53190,53191,53192,53193,53194,53195,53196,53197,53198,53199,53200,53201,53202,53203,53204,53205,53206,53207,53208,53209,53210,53211,53212,53213,53214,53215,53216,53217,53218,53219,53220,53221,53222,53223,53224,53225,53226,53227,53228,53229,53230,53231,53232,53233,53234,53235,53236,53237,53238,53239,53240,53241,53242,53243,53244,53245,53246,53247,53248,53249,53250,53251,53252,53253,53254,53255,53256,53257,53258,53259,53260,53261,53262,53263,53264,53265,53266,53267,53268,53269,53270,53271,53272,53273,53274,53275,53276,53277,53278,53279,53280,53281,53282,53283,53284,53285,53286,53287,53288,53289,53290,53291,53292,53293,53294,53295,53296,53297,53298,53299,53300,53301,53302,53303,53304,53305,53306,53307,53308,53309,53310,53311,53312,53313,53314,53315,53316,53317,53318,53319,53320,53321,53322,53323,53324,53325,53326,53327,53328,53329,53330,53331,53332,53333,53334,53335,53336,53337,53338,53339,53340,53341,53342,53343,53344,53345,53346,53347,53348,53349,53350,53351,53352,53353,53354,53355,53356,53357,53358,53359,53360,53361,53362,53363,53364,53365,53366,53367,53368,53369,53370,53371,53372,53373,53374,53375,53376,53377,53378,53379,53380,53381,53382,53383,53384,53385,53386,53387,53388,53389,53390,53391,53392,53393,53394,53395,53396,53397,53398,53399,53400,53401,53402,53403,53404,53405,53406,53407,53408,53409,53410,53411,53412,53413,53414,53415,53416,53417,53418,53419,53420,53421,53422,53423,53424,53425,53426,53427,53428,53429,53430,53431,53432,53433,53434,53435,53436,53437,53438,53439,53440,53441,53442,53443,53444,53445,53446,53447,53448,53449,53450,53451,53452,53453,53454,53455,53456,53457,53458,53459,53460,53461,53462,53463,53464,53465,53466,53467,53468,53469,53470,53471,53472,53473,53474,53475,53476,53477,53478,53479,53480,53481,53482,53483,53484,53485,53486,53487,53488,53489,53490,53491,53492,53493,53494,53495,53496,53497,53498,53499,53500,53501,53502,53503,53504,53505,53506,53507,53508,53509,53510,53511,53512,53513,53514,53515,53516,53517,53518,53519,53520,53521,53522,53523,53524,53525,53526,53527,53528,53529,53530,53531,53532,53533,53534,53535,53536,53537,53538,53539,53540,53541,53542,53543,53544,53545,53546,53547,53548,53549,53550,53551,53552,53553,53554,53555,53556,53557,53558,53559,53560,53561,53562,53563,53564,53565,53566,53567,53568,53569,53570,53571,53572,53573,53574,53575,53576,53577,53578,53579,53580,53581,53582,53583,53584,53585,53586,53587,53588,53589,53590,53591,53592,53593,53594,53595,53596,53597,53598,53599,53600,53601,53602,53603,53604,53605,53606,53607,53608,53609,53610,53611,53612,53613,53614,53615,53616,53617,53618,53619,53620,53621,53622,53623,53624,53625,53626,53627,53628,53629,53630,53631,53632,53633,53634,53635,53636,53637,53638,53639,53640,53641,53642,53643,53644,53645,53646,53647,53648,53649,53650,53651,53652,53653,53654,53655,53656,53657,53658,53659,53660,53661,53662,53663,53664,53665,53666,53667,53668,53669,53670,53671,53672,53673,53674,53675,53676,53677,53678,53679,53680,53681,53682,53683,53684,53685,53686,53687,53688,53689,53690,53691,53692,53693,53694,53695,53696,53697,53698,53699,53700,53701,53702,53703,53704,53705,53706,53707,53708,53709,53710,53711,53712,53713,53714,53715,53716,53717,53718,53719,53720,53721,53722,53723,53724,53725,53726,53727,53728,53729,53730,53731,53732,53733,53734,53735,53736,53737,53738,53739,53740,53741,53742,53743,53744,53745,53746,53747,53748,53749,53750,53751,53752,53753,53754,53755,53756,53757,53758,53759,53760,53761,53762,53763,53764,53765,53766,53767,53768,53769,53770,53771,53772,53773,53774,53775,53776,53777,53778,53779,53780,53781,53782,53783,53784,53785,53786,53787,53788,53789,53790,53791,53792,53793,53794,53795,53796,53797,53798,53799,53800,53801,53802,53803,53804,53805,53806,53807,53808,53809,53810,53811,53812,53813,53814,53815,53816,53817,53818,53819,53820,53821,53822,53823,53824,53825,53826,53827,53828,53829,53830,53831,53832,53833,53834,53835,53836,53837,53838,53839,53840,53841,53842,53843,53844,53845,53846,53847,53848,53849,53850,53851,53852,53853,53854,53855,53856,53857,53858,53859,53860,53861,53862,53863,53864,53865,53866,53867,53868,53869,53870,53871,53872,53873,53874,53875,53876,53877,53878,53879,53880,53881,53882,53883,53884,53885,53886,53887,53888,53889,53890,53891,53892,53893,53894,53895,53896,53897,53898,53899,53900,53901,53902,53903,53904,53905,53906,53907,53908,53909,53910,53911,53912,53913,53914,53915,53916,53917,53918,53919,53920,53921,53922,53923,53924,53925,53926,53927,53928,53929,53930,53931,53932,53933,53934,53935,53936,53937,53938,53939,53940,53941,53942,53943,53944,53945,53946,53947,53948,53949,53950,53951,53952,53953,53954,53955,53956,53957,53958,53959,53960,53961,53962,53963,53964,53965,53966,53967,53968,53969,53970,53971,53972,53973,53974,53975,53976,53977,53978,53979,53980,53981,53982,53983,53984,53985,53986,53987,53988,53989,53990,53991,53992,53993,53994,53995,53996,53997,53998,53999,54e3,54001,54002,54003,54004,54005,54006,54007,54008,54009,54010,54011,54012,54013,54014,54015,54016,54017,54018,54019,54020,54021,54022,54023,54024,54025,54026,54027,54028,54029,54030,54031,54032,54033,54034,54035,54036,54037,54038,54039,54040,54041,54042,54043,54044,54045,54046,54047,54048,54049,54050,54051,54052,54053,54054,54055,54056,54057,54058,54059,54060,54061,54062,54063,54064,54065,54066,54067,54068,54069,54070,54071,54072,54073,54074,54075,54076,54077,54078,54079,54080,54081,54082,54083,54084,54085,54086,54087,54088,54089,54090,54091,54092,54093,54094,54095,54096,54097,54098,54099,54100,54101,54102,54103,54104,54105,54106,54107,54108,54109,54110,54111,54112,54113,54114,54115,54116,54117,54118,54119,54120,54121,54122,54123,54124,54125,54126,54127,54128,54129,54130,54131,54132,54133,54134,54135,54136,54137,54138,54139,54140,54141,54142,54143,54144,54145,54146,54147,54148,54149,54150,54151,54152,54153,54154,54155,54156,54157,54158,54159,54160,54161,54162,54163,54164,54165,54166,54167,54168,54169,54170,54171,54172,54173,54174,54175,54176,54177,54178,54179,54180,54181,54182,54183,54184,54185,54186,54187,54188,54189,54190,54191,54192,54193,54194,54195,54196,54197,54198,54199,54200,54201,54202,54203,54204,54205,54206,54207,54208,54209,54210,54211,54212,54213,54214,54215,54216,54217,54218,54219,54220,54221,54222,54223,54224,54225,54226,54227,54228,54229,54230,54231,54232,54233,54234,54235,54236,54237,54238,54239,54240,54241,54242,54243,54244,54245,54246,54247,54248,54249,54250,54251,54252,54253,54254,54255,54256,54257,54258,54259,54260,54261,54262,54263,54264,54265,54266,54267,54268,54269,54270,54271,54272,54273,54274,54275,54276,54277,54278,54279,54280,54281,54282,54283,54284,54285,54286,54287,54288,54289,54290,54291,54292,54293,54294,54295,54296,54297,54298,54299,54300,54301,54302,54303,54304,54305,54306,54307,54308,54309,54310,54311,54312,54313,54314,54315,54316,54317,54318,54319,54320,54321,54322,54323,54324,54325,54326,54327,54328,54329,54330,54331,54332,54333,54334,54335,54336,54337,54338,54339,54340,54341,54342,54343,54344,54345,54346,54347,54348,54349,54350,54351,54352,54353,54354,54355,54356,54357,54358,54359,54360,54361,54362,54363,54364,54365,54366,54367,54368,54369,54370,54371,54372,54373,54374,54375,54376,54377,54378,54379,54380,54381,54382,54383,54384,54385,54386,54387,54388,54389,54390,54391,54392,54393,54394,54395,54396,54397,54398,54399,54400,54401,54402,54403,54404,54405,54406,54407,54408,54409,54410,54411,54412,54413,54414,54415,54416,54417,54418,54419,54420,54421,54422,54423,54424,54425,54426,54427,54428,54429,54430,54431,54432,54433,54434,54435,54436,54437,54438,54439,54440,54441,54442,54443,54444,54445,54446,54447,54448,54449,54450,54451,54452,54453,54454,54455,54456,54457,54458,54459,54460,54461,54462,54463,54464,54465,54466,54467,54468,54469,54470,54471,54472,54473,54474,54475,54476,54477,54478,54479,54480,54481,54482,54483,54484,54485,54486,54487,54488,54489,54490,54491,54492,54493,54494,54495,54496,54497,54498,54499,54500,54501,54502,54503,54504,54505,54506,54507,54508,54509,54510,54511,54512,54513,54514,54515,54516,54517,54518,54519,54520,54521,54522,54523,54524,54525,54526,54527,54528,54529,54530,54531,54532,54533,54534,54535,54536,54537,54538,54539,54540,54541,54542,54543,54544,54545,54546,54547,54548,54549,54550,54551,54552,54553,54554,54555,54556,54557,54558,54559,54560,54561,54562,54563,54564,54565,54566,54567,54568,54569,54570,54571,54572,54573,54574,54575,54576,54577,54578,54579,54580,54581,54582,54583,54584,54585,54586,54587,54588,54589,54590,54591,54592,54593,54594,54595,54596,54597,54598,54599,54600,54601,54602,54603,54604,54605,54606,54607,54608,54609,54610,54611,54612,54613,54614,54615,54616,54617,54618,54619,54620,54621,54622,54623,54624,54625,54626,54627,54628,54629,54630,54631,54632,54633,54634,54635,54636,54637,54638,54639,54640,54641,54642,54643,54644,54645,54646,54647,54648,54649,54650,54651,54652,54653,54654,54655,54656,54657,54658,54659,54660,54661,54662,54663,54664,54665,54666,54667,54668,54669,54670,54671,54672,54673,54674,54675,54676,54677,54678,54679,54680,54681,54682,54683,54684,54685,54686,54687,54688,54689,54690,54691,54692,54693,54694,54695,54696,54697,54698,54699,54700,54701,54702,54703,54704,54705,54706,54707,54708,54709,54710,54711,54712,54713,54714,54715,54716,54717,54718,54719,54720,54721,54722,54723,54724,54725,54726,54727,54728,54729,54730,54731,54732,54733,54734,54735,54736,54737,54738,54739,54740,54741,54742,54743,54744,54745,54746,54747,54748,54749,54750,54751,54752,54753,54754,54755,54756,54757,54758,54759,54760,54761,54762,54763,54764,54765,54766,54767,54768,54769,54770,54771,54772,54773,54774,54775,54776,54777,54778,54779,54780,54781,54782,54783,54784,54785,54786,54787,54788,54789,54790,54791,54792,54793,54794,54795,54796,54797,54798,54799,54800,54801,54802,54803,54804,54805,54806,54807,54808,54809,54810,54811,54812,54813,54814,54815,54816,54817,54818,54819,54820,54821,54822,54823,54824,54825,54826,54827,54828,54829,54830,54831,54832,54833,54834,54835,54836,54837,54838,54839,54840,54841,54842,54843,54844,54845,54846,54847,54848,54849,54850,54851,54852,54853,54854,54855,54856,54857,54858,54859,54860,54861,54862,54863,54864,54865,54866,54867,54868,54869,54870,54871,54872,54873,54874,54875,54876,54877,54878,54879,54880,54881,54882,54883,54884,54885,54886,54887,54888,54889,54890,54891,54892,54893,54894,54895,54896,54897,54898,54899,54900,54901,54902,54903,54904,54905,54906,54907,54908,54909,54910,54911,54912,54913,54914,54915,54916,54917,54918,54919,54920,54921,54922,54923,54924,54925,54926,54927,54928,54929,54930,54931,54932,54933,54934,54935,54936,54937,54938,54939,54940,54941,54942,54943,54944,54945,54946,54947,54948,54949,54950,54951,54952,54953,54954,54955,54956,54957,54958,54959,54960,54961,54962,54963,54964,54965,54966,54967,54968,54969,54970,54971,54972,54973,54974,54975,54976,54977,54978,54979,54980,54981,54982,54983,54984,54985,54986,54987,54988,54989,54990,54991,54992,54993,54994,54995,54996,54997,54998,54999,55e3,55001,55002,55003,55004,55005,55006,55007,55008,55009,55010,55011,55012,55013,55014,55015,55016,55017,55018,55019,55020,55021,55022,55023,55024,55025,55026,55027,55028,55029,55030,55031,55032,55033,55034,55035,55036,55037,55038,55039,55040,55041,55042,55043,55044,55045,55046,55047,55048,55049,55050,55051,55052,55053,55054,55055,55056,55057,55058,55059,55060,55061,55062,55063,55064,55065,55066,55067,55068,55069,55070,55071,55072,55073,55074,55075,55076,55077,55078,55079,55080,55081,55082,55083,55084,55085,55086,55087,55088,55089,55090,55091,55092,55093,55094,55095,55096,55097,55098,55099,55100,55101,55102,55103,55104,55105,55106,55107,55108,55109,55110,55111,55112,55113,55114,55115,55116,55117,55118,55119,55120,55121,55122,55123,55124,55125,55126,55127,55128,55129,55130,55131,55132,55133,55134,55135,55136,55137,55138,55139,55140,55141,55142,55143,55144,55145,55146,55147,55148,55149,55150,55151,55152,55153,55154,55155,55156,55157,55158,55159,55160,55161,55162,55163,55164,55165,55166,55167,55168,55169,55170,55171,55172,55173,55174,55175,55176,55177,55178,55179,55180,55181,55182,55183,55184,55185,55186,55187,55188,55189,55190,55191,55192,55193,55194,55195,55196,55197,55198,55199,55200,55201,55202,55203,55216,55217,55218,55219,55220,55221,55222,55223,55224,55225,55226,55227,55228,55229,55230,55231,55232,55233,55234,55235,55236,55237,55238,55243,55244,55245,55246,55247,55248,55249,55250,55251,55252,55253,55254,55255,55256,55257,55258,55259,55260,55261,55262,55263,55264,55265,55266,55267,55268,55269,55270,55271,55272,55273,55274,55275,55276,55277,55278,55279,55280,55281,55282,55283,55284,55285,55286,55287,55288,55289,55290,55291,63744,63745,63746,63747,63748,63749,63750,63751,63752,63753,63754,63755,63756,63757,63758,63759,63760,63761,63762,63763,63764,63765,63766,63767,63768,63769,63770,63771,63772,63773,63774,63775,63776,63777,63778,63779,63780,63781,63782,63783,63784,63785,63786,63787,63788,63789,63790,63791,63792,63793,63794,63795,63796,63797,63798,63799,63800,63801,63802,63803,63804,63805,63806,63807,63808,63809,63810,63811,63812,63813,63814,63815,63816,63817,63818,63819,63820,63821,63822,63823,63824,63825,63826,63827,63828,63829,63830,63831,63832,63833,63834,63835,63836,63837,63838,63839,63840,63841,63842,63843,63844,63845,63846,63847,63848,63849,63850,63851,63852,63853,63854,63855,63856,63857,63858,63859,63860,63861,63862,63863,63864,63865,63866,63867,63868,63869,63870,63871,63872,63873,63874,63875,63876,63877,63878,63879,63880,63881,63882,63883,63884,63885,63886,63887,63888,63889,63890,63891,63892,63893,63894,63895,63896,63897,63898,63899,63900,63901,63902,63903,63904,63905,63906,63907,63908,63909,63910,63911,63912,63913,63914,63915,63916,63917,63918,63919,63920,63921,63922,63923,63924,63925,63926,63927,63928,63929,63930,63931,63932,63933,63934,63935,63936,63937,63938,63939,63940,63941,63942,63943,63944,63945,63946,63947,63948,63949,63950,63951,63952,63953,63954,63955,63956,63957,63958,63959,63960,63961,63962,63963,63964,63965,63966,63967,63968,63969,63970,63971,63972,63973,63974,63975,63976,63977,63978,63979,63980,63981,63982,63983,63984,63985,63986,63987,63988,63989,63990,63991,63992,63993,63994,63995,63996,63997,63998,63999,64e3,64001,64002,64003,64004,64005,64006,64007,64008,64009,64010,64011,64012,64013,64014,64015,64016,64017,64018,64019,64020,64021,64022,64023,64024,64025,64026,64027,64028,64029,64030,64031,64032,64033,64034,64035,64036,64037,64038,64039,64040,64041,64042,64043,64044,64045,64046,64047,64048,64049,64050,64051,64052,64053,64054,64055,64056,64057,64058,64059,64060,64061,64062,64063,64064,64065,64066,64067,64068,64069,64070,64071,64072,64073,64074,64075,64076,64077,64078,64079,64080,64081,64082,64083,64084,64085,64086,64087,64088,64089,64090,64091,64092,64093,64094,64095,64096,64097,64098,64099,64100,64101,64102,64103,64104,64105,64106,64107,64108,64109,64112,64113,64114,64115,64116,64117,64118,64119,64120,64121,64122,64123,64124,64125,64126,64127,64128,64129,64130,64131,64132,64133,64134,64135,64136,64137,64138,64139,64140,64141,64142,64143,64144,64145,64146,64147,64148,64149,64150,64151,64152,64153,64154,64155,64156,64157,64158,64159,64160,64161,64162,64163,64164,64165,64166,64167,64168,64169,64170,64171,64172,64173,64174,64175,64176,64177,64178,64179,64180,64181,64182,64183,64184,64185,64186,64187,64188,64189,64190,64191,64192,64193,64194,64195,64196,64197,64198,64199,64200,64201,64202,64203,64204,64205,64206,64207,64208,64209,64210,64211,64212,64213,64214,64215,64216,64217,64256,64257,64258,64259,64260,64261,64262,64275,64276,64277,64278,64279,64285,64287,64288,64289,64290,64291,64292,64293,64294,64295,64296,64298,64299,64300,64301,64302,64303,64304,64305,64306,64307,64308,64309,64310,64312,64313,64314,64315,64316,64318,64320,64321,64323,64324,64326,64327,64328,64329,64330,64331,64332,64333,64334,64335,64336,64337,64338,64339,64340,64341,64342,64343,64344,64345,64346,64347,64348,64349,64350,64351,64352,64353,64354,64355,64356,64357,64358,64359,64360,64361,64362,64363,64364,64365,64366,64367,64368,64369,64370,64371,64372,64373,64374,64375,64376,64377,64378,64379,64380,64381,64382,64383,64384,64385,64386,64387,64388,64389,64390,64391,64392,64393,64394,64395,64396,64397,64398,64399,64400,64401,64402,64403,64404,64405,64406,64407,64408,64409,64410,64411,64412,64413,64414,64415,64416,64417,64418,64419,64420,64421,64422,64423,64424,64425,64426,64427,64428,64429,64430,64431,64432,64433,64467,64468,64469,64470,64471,64472,64473,64474,64475,64476,64477,64478,64479,64480,64481,64482,64483,64484,64485,64486,64487,64488,64489,64490,64491,64492,64493,64494,64495,64496,64497,64498,64499,64500,64501,64502,64503,64504,64505,64506,64507,64508,64509,64510,64511,64512,64513,64514,64515,64516,64517,64518,64519,64520,64521,64522,64523,64524,64525,64526,64527,64528,64529,64530,64531,64532,64533,64534,64535,64536,64537,64538,64539,64540,64541,64542,64543,64544,64545,64546,64547,64548,64549,64550,64551,64552,64553,64554,64555,64556,64557,64558,64559,64560,64561,64562,64563,64564,64565,64566,64567,64568,64569,64570,64571,64572,64573,64574,64575,64576,64577,64578,64579,64580,64581,64582,64583,64584,64585,64586,64587,64588,64589,64590,64591,64592,64593,64594,64595,64596,64597,64598,64599,64600,64601,64602,64603,64604,64605,64606,64607,64608,64609,64610,64611,64612,64613,64614,64615,64616,64617,64618,64619,64620,64621,64622,64623,64624,64625,64626,64627,64628,64629,64630,64631,64632,64633,64634,64635,64636,64637,64638,64639,64640,64641,64642,64643,64644,64645,64646,64647,64648,64649,64650,64651,64652,64653,64654,64655,64656,64657,64658,64659,64660,64661,64662,64663,64664,64665,64666,64667,64668,64669,64670,64671,64672,64673,64674,64675,64676,64677,64678,64679,64680,64681,64682,64683,64684,64685,64686,64687,64688,64689,64690,64691,64692,64693,64694,64695,64696,64697,64698,64699,64700,64701,64702,64703,64704,64705,64706,64707,64708,64709,64710,64711,64712,64713,64714,64715,64716,64717,64718,64719,64720,64721,64722,64723,64724,64725,64726,64727,64728,64729,64730,64731,64732,64733,64734,64735,64736,64737,64738,64739,64740,64741,64742,64743,64744,64745,64746,64747,64748,64749,64750,64751,64752,64753,64754,64755,64756,64757,64758,64759,64760,64761,64762,64763,64764,64765,64766,64767,64768,64769,64770,64771,64772,64773,64774,64775,64776,64777,64778,64779,64780,64781,64782,64783,64784,64785,64786,64787,64788,64789,64790,64791,64792,64793,64794,64795,64796,64797,64798,64799,64800,64801,64802,64803,64804,64805,64806,64807,64808,64809,64810,64811,64812,64813,64814,64815,64816,64817,64818,64819,64820,64821,64822,64823,64824,64825,64826,64827,64828,64829,64848,64849,64850,64851,64852,64853,64854,64855,64856,64857,64858,64859,64860,64861,64862,64863,64864,64865,64866,64867,64868,64869,64870,64871,64872,64873,64874,64875,64876,64877,64878,64879,64880,64881,64882,64883,64884,64885,64886,64887,64888,64889,64890,64891,64892,64893,64894,64895,64896,64897,64898,64899,64900,64901,64902,64903,64904,64905,64906,64907,64908,64909,64910,64911,64914,64915,64916,64917,64918,64919,64920,64921,64922,64923,64924,64925,64926,64927,64928,64929,64930,64931,64932,64933,64934,64935,64936,64937,64938,64939,64940,64941,64942,64943,64944,64945,64946,64947,64948,64949,64950,64951,64952,64953,64954,64955,64956,64957,64958,64959,64960,64961,64962,64963,64964,64965,64966,64967,65008,65009,65010,65011,65012,65013,65014,65015,65016,65017,65018,65019,65136,65137,65138,65139,65140,65142,65143,65144,65145,65146,65147,65148,65149,65150,65151,65152,65153,65154,65155,65156,65157,65158,65159,65160,65161,65162,65163,65164,65165,65166,65167,65168,65169,65170,65171,65172,65173,65174,65175,65176,65177,65178,65179,65180,65181,65182,65183,65184,65185,65186,65187,65188,65189,65190,65191,65192,65193,65194,65195,65196,65197,65198,65199,65200,65201,65202,65203,65204,65205,65206,65207,65208,65209,65210,65211,65212,65213,65214,65215,65216,65217,65218,65219,65220,65221,65222,65223,65224,65225,65226,65227,65228,65229,65230,65231,65232,65233,65234,65235,65236,65237,65238,65239,65240,65241,65242,65243,65244,65245,65246,65247,65248,65249,65250,65251,65252,65253,65254,65255,65256,65257,65258,65259,65260,65261,65262,65263,65264,65265,65266,65267,65268,65269,65270,65271,65272,65273,65274,65275,65276,65313,65314,65315,65316,65317,65318,65319,65320,65321,65322,65323,65324,65325,65326,65327,65328,65329,65330,65331,65332,65333,65334,65335,65336,65337,65338,65345,65346,65347,65348,65349,65350,65351,65352,65353,65354,65355,65356,65357,65358,65359,65360,65361,65362,65363,65364,65365,65366,65367,65368,65369,65370,65382,65383,65384,65385,65386,65387,65388,65389,65390,65391,65392,65393,65394,65395,65396,65397,65398,65399,65400,65401,65402,65403,65404,65405,65406,65407,65408,65409,65410,65411,65412,65413,65414,65415,65416,65417,65418,65419,65420,65421,65422,65423,65424,65425,65426,65427,65428,65429,65430,65431,65432,65433,65434,65435,65436,65437,65438,65439,65440,65441,65442,65443,65444,65445,65446,65447,65448,65449,65450,65451,65452,65453,65454,65455,65456,65457,65458,65459,65460,65461,65462,65463,65464,65465,65466,65467,65468,65469,65470,65474,65475,65476,65477,65478,65479,65482,65483,65484,65485,65486,65487,65490,65491,65492,65493,65494,65495,65498,65499,65500]
},{}],4:[function(e,t,n){var r=e("util/")
var i=Array.prototype.slice
var a=Object.prototype.hasOwnProperty
var s=t.exports=c
s.AssertionError=function y(e){this.name="AssertionError"
this.actual=e.actual
this.expected=e.expected
this.operator=e.operator
if(e.message){this.message=e.message
this.generatedMessage=false}else{this.message=u(this)
this.generatedMessage=true}var t=e.stackStartFunction||f
if(Error.captureStackTrace){Error.captureStackTrace(this,t)}else{var n=new Error
if(n.stack){var r=n.stack
var i=t.name
var a=r.indexOf("\n"+i)
if(a>=0){var s=r.indexOf("\n",a+1)
r=r.substring(s+1)}this.stack=r}}}
r.inherits(s.AssertionError,Error)
function o(e,t){if(r.isUndefined(t)){return""+t}if(r.isNumber(t)&&(isNaN(t)||!isFinite(t))){return t.toString()}if(r.isFunction(t)||r.isRegExp(t)){return t.toString()}return t}function l(e,t){if(r.isString(e)){return e.length<t?e:e.slice(0,t)}else{return e}}function u(e){return l(JSON.stringify(e.actual,o),128)+" "+e.operator+" "+l(JSON.stringify(e.expected,o),128)}function f(e,t,n,r,i){throw new s.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:i})}s.fail=f
function c(e,t){if(!e)f(e,true,t,"==",s.ok)}s.ok=c
s.equal=function b(e,t,n){if(e!=t)f(e,t,n,"==",s.equal)}
s.notEqual=function x(e,t,n){if(e==t){f(e,t,n,"!=",s.notEqual)}}
s.deepEqual=function k(e,t,n){if(!h(e,t)){f(e,t,n,"deepEqual",s.deepEqual)}}
function h(e,t){if(e===t){return true}else if(r.isBuffer(e)&&r.isBuffer(t)){if(e.length!=t.length)return false
for(var n=0;n<e.length;n++){if(e[n]!==t[n])return false}return true}else if(r.isDate(e)&&r.isDate(t)){return e.getTime()===t.getTime()}else if(r.isRegExp(e)&&r.isRegExp(t)){return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase}else if(!r.isObject(e)&&!r.isObject(t)){return e==t}else{return m(e,t)}}function p(e){return Object.prototype.toString.call(e)=="[object Arguments]"}function m(e,t){if(r.isNullOrUndefined(e)||r.isNullOrUndefined(t))return false
if(e.prototype!==t.prototype)return false
if(p(e)){if(!p(t)){return false}e=i.call(e)
t=i.call(t)
return h(e,t)}try{var n=v(e),a=v(t),s,o}catch(l){return false}if(n.length!=a.length)return false
n.sort()
a.sort()
for(o=n.length-1;o>=0;o--){if(n[o]!=a[o])return false}for(o=n.length-1;o>=0;o--){s=n[o]
if(!h(e[s],t[s]))return false}return true}s.notDeepEqual=function w(e,t,n){if(h(e,t)){f(e,t,n,"notDeepEqual",s.notDeepEqual)}}
s.strictEqual=function E(e,t,n){if(e!==t){f(e,t,n,"===",s.strictEqual)}}
s.notStrictEqual=function S(e,t,n){if(e===t){f(e,t,n,"!==",s.notStrictEqual)}}
function d(e,t){if(!e||!t){return false}if(Object.prototype.toString.call(t)=="[object RegExp]"){return t.test(e)}else if(e instanceof t){return true}else if(t.call({},e)===true){return true}return false}function g(e,t,n,i){var a
if(r.isString(n)){i=n
n=null}try{t()}catch(s){a=s}i=(n&&n.name?" ("+n.name+").":".")+(i?" "+i:".")
if(e&&!a){f(a,n,"Missing expected exception"+i)}if(!e&&d(a,n)){f(a,n,"Got unwanted exception"+i)}if(e&&a&&n&&!d(a,n)||!e&&a){throw a}}s.throws=function(e,t,n){g.apply(this,[true].concat(i.call(arguments)))}
s.doesNotThrow=function(e,t){g.apply(this,[false].concat(i.call(arguments)))}
s.ifError=function(e){if(e){throw e}}
var v=Object.keys||function(e){var t=[]
for(var n in e){if(a.call(e,n))t.push(n)}return t}},{"util/":9}],5:[function(e,t,n){function r(){this._events=this._events||{}
this._maxListeners=this._maxListeners||undefined}t.exports=r
r.EventEmitter=r
r.prototype._events=undefined
r.prototype._maxListeners=undefined
r.defaultMaxListeners=10
r.prototype.setMaxListeners=function(e){if(!a(e)||e<0||isNaN(e))throw TypeError("n must be a positive number")
this._maxListeners=e
return this}
r.prototype.emit=function(e){var t,n,r,a,l,u
if(!this._events)this._events={}
if(e==="error"){if(!this._events.error||s(this._events.error)&&!this._events.error.length){t=arguments[1]
if(t instanceof Error){throw t}throw TypeError('Uncaught, unspecified "error" event.')}}n=this._events[e]
if(o(n))return false
if(i(n)){switch(arguments.length){case 1:n.call(this)
break
case 2:n.call(this,arguments[1])
break
case 3:n.call(this,arguments[1],arguments[2])
break
default:r=arguments.length
a=new Array(r-1)
for(l=1;l<r;l++)a[l-1]=arguments[l]
n.apply(this,a)}}else if(s(n)){r=arguments.length
a=new Array(r-1)
for(l=1;l<r;l++)a[l-1]=arguments[l]
u=n.slice()
r=u.length
for(l=0;l<r;l++)u[l].apply(this,a)}return true}
r.prototype.addListener=function(e,t){var n
if(!i(t))throw TypeError("listener must be a function")
if(!this._events)this._events={}
if(this._events.newListener)this.emit("newListener",e,i(t.listener)?t.listener:t)
if(!this._events[e])this._events[e]=t
else if(s(this._events[e]))this._events[e].push(t)
else this._events[e]=[this._events[e],t]
if(s(this._events[e])&&!this._events[e].warned){var n
if(!o(this._maxListeners)){n=this._maxListeners}else{n=r.defaultMaxListeners}if(n&&n>0&&this._events[e].length>n){this._events[e].warned=true
console.error("(node) warning: possible EventEmitter memory "+"leak detected. %d listeners added. "+"Use emitter.setMaxListeners() to increase limit.",this._events[e].length)
if(typeof console.trace==="function"){console.trace()}}}return this}
r.prototype.on=r.prototype.addListener
r.prototype.once=function(e,t){if(!i(t))throw TypeError("listener must be a function")
var n=false
function r(){this.removeListener(e,r)
if(!n){n=true
t.apply(this,arguments)}}r.listener=t
this.on(e,r)
return this}
r.prototype.removeListener=function(e,t){var n,r,a,o
if(!i(t))throw TypeError("listener must be a function")
if(!this._events||!this._events[e])return this
n=this._events[e]
a=n.length
r=-1
if(n===t||i(n.listener)&&n.listener===t){delete this._events[e]
if(this._events.removeListener)this.emit("removeListener",e,t)}else if(s(n)){for(o=a;o-->0;){if(n[o]===t||n[o].listener&&n[o].listener===t){r=o
break}}if(r<0)return this
if(n.length===1){n.length=0
delete this._events[e]}else{n.splice(r,1)}if(this._events.removeListener)this.emit("removeListener",e,t)}return this}
r.prototype.removeAllListeners=function(e){var t,n
if(!this._events)return this
if(!this._events.removeListener){if(arguments.length===0)this._events={}
else if(this._events[e])delete this._events[e]
return this}if(arguments.length===0){for(t in this._events){if(t==="removeListener")continue
this.removeAllListeners(t)}this.removeAllListeners("removeListener")
this._events={}
return this}n=this._events[e]
if(i(n)){this.removeListener(e,n)}else{while(n.length)this.removeListener(e,n[n.length-1])}delete this._events[e]
return this}
r.prototype.listeners=function(e){var t
if(!this._events||!this._events[e])t=[]
else if(i(this._events[e]))t=[this._events[e]]
else t=this._events[e].slice()
return t}
r.listenerCount=function(e,t){var n
if(!e._events||!e._events[t])n=0
else if(i(e._events[t]))n=1
else n=e._events[t].length
return n}
function i(e){return typeof e==="function"}function a(e){return typeof e==="number"}function s(e){return typeof e==="object"&&e!==null}function o(e){return e===void 0}},{}],6:[function(e,t,n){if(typeof Object.create==="function"){t.exports=function r(e,t){e.super_=t
e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})}}else{t.exports=function i(e,t){e.super_=t
var n=function(){}
n.prototype=t.prototype
e.prototype=new n
e.prototype.constructor=e}}},{}],7:[function(e,t,n){var r=t.exports={}
r.nextTick=function(){var e=typeof window!=="undefined"&&window.setImmediate
var t=typeof window!=="undefined"&&window.postMessage&&window.addEventListener
if(e){return function(e){return window.setImmediate(e)}}if(t){var n=[]
window.addEventListener("message",function(e){var t=e.source
if((t===window||t===null)&&e.data==="process-tick"){e.stopPropagation()
if(n.length>0){var r=n.shift()
r()}}},true)
return function r(e){n.push(e)
window.postMessage("process-tick","*")}}return function i(e){setTimeout(e,0)}}()
r.title="browser"
r.browser=true
r.env={}
r.argv=[]
function i(){}r.on=i
r.addListener=i
r.once=i
r.off=i
r.removeListener=i
r.removeAllListeners=i
r.emit=i
r.binding=function(e){throw new Error("process.binding is not supported")}
r.cwd=function(){return"/"}
r.chdir=function(e){throw new Error("process.chdir is not supported")}},{}],8:[function(e,t,n){t.exports=function r(e){return e&&typeof e==="object"&&typeof e.copy==="function"&&typeof e.fill==="function"&&typeof e.readUInt8==="function"}},{}],9:[function(e,t,n){(function(t,r){var i=/%[sdj%]/g
n.format=function(e){if(!w(e)){var t=[]
for(var n=0;n<arguments.length;n++){t.push(o(arguments[n]))}return t.join(" ")}var n=1
var r=arguments
var a=r.length
var s=String(e).replace(i,function(e){if(e==="%%")return"%"
if(n>=a)return e
switch(e){case"%s":return String(r[n++])
case"%d":return Number(r[n++])
case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}})
for(var l=r[n];n<a;l=r[++n]){if(b(l)||!_(l)){s+=" "+l}else{s+=" "+o(l)}}return s}
n.deprecate=function(e,i){if(S(r.process)){return function(){return n.deprecate(e,i).apply(this,arguments)}}if(t.noDeprecation===true){return e}var a=false
function s(){if(!a){if(t.throwDeprecation){throw new Error(i)}else if(t.traceDeprecation){console.trace(i)}else{console.error(i)}a=true}return e.apply(this,arguments)}return s}
var a={}
var s
n.debuglog=function(e){if(S(s))s=t.env.NODE_DEBUG||""
e=e.toUpperCase()
if(!a[e]){if(new RegExp("\\b"+e+"\\b","i").test(s)){var r=t.pid
a[e]=function(){var t=n.format.apply(n,arguments)
console.error("%s %d: %s",e,r,t)}}else{a[e]=function(){}}}return a[e]}
function o(e,t){var r={seen:[],stylize:u}
if(arguments.length>=3)r.depth=arguments[2]
if(arguments.length>=4)r.colors=arguments[3]
if(y(t)){r.showHidden=t}else if(t){n._extend(r,t)}if(S(r.showHidden))r.showHidden=false
if(S(r.depth))r.depth=2
if(S(r.colors))r.colors=false
if(S(r.customInspect))r.customInspect=true
if(r.colors)r.stylize=l
return c(r,e,r.depth)}n.inspect=o
o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]}
o.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"}
function l(e,t){var n=o.styles[t]
if(n){return"["+o.colors[n][0]+"m"+e+"["+o.colors[n][1]+"m"}else{return e}}function u(e,t){return e}function f(e){var t={}
e.forEach(function(e,n){t[e]=true})
return t}function c(e,t,r){if(e.customInspect&&t&&I(t.inspect)&&t.inspect!==n.inspect&&!(t.constructor&&t.constructor.prototype===t)){var i=t.inspect(r,e)
if(!w(i)){i=c(e,i,r)}return i}var a=h(e,t)
if(a){return a}var s=Object.keys(t)
var o=f(s)
if(e.showHidden){s=Object.getOwnPropertyNames(t)}if(T(t)&&(s.indexOf("message")>=0||s.indexOf("description")>=0)){return p(t)}if(s.length===0){if(I(t)){var l=t.name?": "+t.name:""
return e.stylize("[Function"+l+"]","special")}if(A(t)){return e.stylize(RegExp.prototype.toString.call(t),"regexp")}if(C(t)){return e.stylize(Date.prototype.toString.call(t),"date")}if(T(t)){return p(t)}}var u="",y=false,b=["{","}"]
if(v(t)){y=true
b=["[","]"]}if(I(t)){var x=t.name?": "+t.name:""
u=" [Function"+x+"]"}if(A(t)){u=" "+RegExp.prototype.toString.call(t)}if(C(t)){u=" "+Date.prototype.toUTCString.call(t)}if(T(t)){u=" "+p(t)}if(s.length===0&&(!y||t.length==0)){return b[0]+u+b[1]}if(r<0){if(A(t)){return e.stylize(RegExp.prototype.toString.call(t),"regexp")}else{return e.stylize("[Object]","special")}}e.seen.push(t)
var k
if(y){k=m(e,t,r,o,s)}else{k=s.map(function(n){return d(e,t,r,o,n,y)})}e.seen.pop()
return g(k,u,b)}function h(e,t){if(S(t))return e.stylize("undefined","undefined")
if(w(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'"
return e.stylize(n,"string")}if(k(t))return e.stylize(""+t,"number")
if(y(t))return e.stylize(""+t,"boolean")
if(b(t))return e.stylize("null","null")}function p(e){return"["+Error.prototype.toString.call(e)+"]"}function m(e,t,n,r,i){var a=[]
for(var s=0,o=t.length;s<o;++s){if(N(t,String(s))){a.push(d(e,t,n,r,String(s),true))}else{a.push("")}}i.forEach(function(i){if(!i.match(/^\d+$/)){a.push(d(e,t,n,r,i,true))}})
return a}function d(e,t,n,r,i,a){var s,o,l
l=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}
if(l.get){if(l.set){o=e.stylize("[Getter/Setter]","special")}else{o=e.stylize("[Getter]","special")}}else{if(l.set){o=e.stylize("[Setter]","special")}}if(!N(r,i)){s="["+i+"]"}if(!o){if(e.seen.indexOf(l.value)<0){if(b(n)){o=c(e,l.value,null)}else{o=c(e,l.value,n-1)}if(o.indexOf("\n")>-1){if(a){o=o.split("\n").map(function(e){return"  "+e}).join("\n").substr(2)}else{o="\n"+o.split("\n").map(function(e){return"   "+e}).join("\n")}}}else{o=e.stylize("[Circular]","special")}}if(S(s)){if(a&&i.match(/^\d+$/)){return o}s=JSON.stringify(""+i)
if(s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){s=s.substr(1,s.length-2)
s=e.stylize(s,"name")}else{s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'")
s=e.stylize(s,"string")}}return s+": "+o}function g(e,t,n){var r=0
var i=e.reduce(function(e,t){r++
if(t.indexOf("\n")>=0)r++
return e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)
if(i>60){return n[0]+(t===""?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]}return n[0]+t+" "+e.join(", ")+" "+n[1]}function v(e){return Array.isArray(e)}n.isArray=v
function y(e){return typeof e==="boolean"}n.isBoolean=y
function b(e){return e===null}n.isNull=b
function x(e){return e==null}n.isNullOrUndefined=x
function k(e){return typeof e==="number"}n.isNumber=k
function w(e){return typeof e==="string"}n.isString=w
function E(e){return typeof e==="symbol"}n.isSymbol=E
function S(e){return e===void 0}n.isUndefined=S
function A(e){return _(e)&&L(e)==="[object RegExp]"}n.isRegExp=A
function _(e){return typeof e==="object"&&e!==null}n.isObject=_
function C(e){return _(e)&&L(e)==="[object Date]"}n.isDate=C
function T(e){return _(e)&&(L(e)==="[object Error]"||e instanceof Error)}n.isError=T
function I(e){return typeof e==="function"}n.isFunction=I
function P(e){return e===null||typeof e==="boolean"||typeof e==="number"||typeof e==="string"||typeof e==="symbol"||typeof e==="undefined"}n.isPrimitive=P
n.isBuffer=e("./support/isBuffer")
function L(e){return Object.prototype.toString.call(e)}function R(e){return e<10?"0"+e.toString(10):e.toString(10)}var O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
function M(){var e=new Date
var t=[R(e.getHours()),R(e.getMinutes()),R(e.getSeconds())].join(":")
return[e.getDate(),O[e.getMonth()],t].join(" ")}n.log=function(){console.log("%s - %s",M(),n.format.apply(n,arguments))}
n.inherits=e("inherits")
n._extend=function(e,t){if(!t||!_(t))return e
var n=Object.keys(t)
var r=n.length
while(r--){e[n[r]]=t[n[r]]}return e}
function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}).call(this,e("FWaASH"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./support/isBuffer":8,FWaASH:7,inherits:6}],10:[function(e,t,n){(function(n){var r=e("util")
var i=e("assert")
var a=Array.prototype.slice
var s
var o={}
if(typeof n!=="undefined"&&n.console){s=n.console}else if(typeof window!=="undefined"&&window.console){s=window.console}else{s=window.console={}}var l=[[p,"log"],[m,"info"],[d,"warn"],[g,"error"],[v,"time"],[y,"timeEnd"],[b,"trace"],[x,"dir"],[i,"assert"]]
for(var u=0;u<l.length;u++){var f=l[u]
var c=f[0]
var h=f[1]
if(!s[h]){s[h]=c}}t.exports=s
function p(){}function m(){s.log.apply(s,arguments)}function d(){s.log.apply(s,arguments)}function g(){s.warn.apply(s,arguments)}function v(e){o[e]=Date.now()}function y(e){var t=o[e]
if(!t){throw new Error("No such label: "+e)}var n=Date.now()-t
s.log(e+": "+n+"ms")}function b(){var e=new Error
e.name="Trace"
e.message=r.format.apply(null,arguments)
s.error(e.stack)}function x(e){s.log(r.inspect(e)+"\n")}function i(e){if(!e){var t=a.call(arguments,1)
i.ok(false,r.format.apply(null,t))}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{assert:4,util:9}],fNbQ4d:[function(e,t,n){var r=e("events")
var i=e("./vars.js")
var a=e("./messages.js")
var s=e("./lex.js").Lexer
var o=e("./reg.js")
var l=e("./state.js").state
var u=e("./style.js")
var f=e("console-browserify")
var c=function(){"use strict"
var e,t,n={"<":true,"<=":true,"==":true,"===":true,"!==":true,"!=":true,">":true,">=":true,"+":true,"-":true,"*":true,"/":true,"%":true},f={asi:true,bitwise:true,boss:true,browser:true,camelcase:true,couch:true,curly:true,debug:true,devel:true,dojo:true,eqeqeq:true,eqnull:true,notypeof:true,es3:true,es5:true,esnext:true,moz:true,evil:true,expr:true,forin:true,funcscope:true,gcl:true,globalstrict:true,immed:true,iterator:true,jquery:true,lastsemic:true,laxbreak:true,laxcomma:true,loopfunc:true,mootools:true,multistr:true,freeze:true,newcap:true,noarg:true,node:true,noempty:true,nonew:true,nonstandard:true,nomen:true,onevar:true,passfail:true,phantom:true,plusplus:true,proto:true,prototypejs:true,rhino:true,shelljs:true,typed:true,undef:true,scripturl:true,smarttabs:true,strict:true,sub:true,supernew:true,trailing:true,validthis:true,withstmt:true,white:true,worker:true,wsh:true,yui:true,onecase:true,regexp:true,regexdash:true},h={maxlen:false,indent:false,maxerr:false,predef:false,globals:false,quotmark:false,scope:false,maxstatements:false,maxdepth:false,maxparams:false,maxcomplexity:false,shadow:false,unused:true,latedef:false,ignore:false},p={bitwise:true,forin:true,newcap:true,nomen:true,plusplus:true,regexp:true,undef:true,white:true,eqeqeq:true,onevar:true,strict:true},m={eqeq:"eqeqeq",vars:"onevar",windows:"wsh",sloppy:"strict"},d,g,v=["closure","exception","global","label","outer","unused","var"],y,b,x,k,w,E,S,A,_,C,T,I,P,L,R,O,M,N=[],D=new r.EventEmitter,F=Object.prototype.hasOwnProperty,W={}
W.has=function(e,t){return F.call(e,t)}
W.contains=function(e,t){if(e===null||e===undefined){return false}return e.indexOf(t)!==-1}
W.filter=function(e,t){var n=[]
for(var r=0;r<e.length;r++){if(t(e[r],r)){n.push(e[r])}}return n}
W.reject=function(e,t){return W.filter(e,function(e,n){return!t(e,n)})}
W.extend=function(e,t){for(var n in t){if(W.has(t,n)){e[n]=t[n]}}return e}
function B(e,t){e=e.trim()
if(/^[+-]W\d{3}$/g.test(e)){return true}if(h[e]===undefined&&f[e]===undefined){if(t.type!=="jslint"){Z("E001",t,e)
return false}}return true}function G(e){return Object.prototype.toString.call(e)==="[object String]"}function V(e,t){if(!e)return false
if(!e.identifier||e.value!==t)return false
return true}function U(e){if(!e.reserved){return false}var t=e.meta
if(t&&t.isFutureReservedWord&&l.option.inES5()){if(!t.es5){return false}if(t.strictOnly){if(!l.option.strict&&!l.directive["use strict"]){return false}}if(e.isProperty){return false}}return true}function z(e,t){return e.replace(/\{([^{}]*)\}/g,function(e,n){var r=t[n]
return typeof r==="string"||typeof r==="number"?r:e})}function j(e,t){Object.keys(t).forEach(function(n){if(c.blacklist.hasOwnProperty(n))return
e[n]=t[n]})}function H(){if(l.option.es5){X("I003")}if(l.option.couch){j(I,i.couch)}if(l.option.rhino){j(I,i.rhino)}if(l.option.shelljs){j(I,i.shelljs)
j(I,i.node)}if(l.option.typed){j(I,i.typed)}if(l.option.phantom){j(I,i.phantom)}if(l.option.prototypejs){j(I,i.prototypejs)}if(l.option.node){j(I,i.node)
j(I,i.typed)}if(l.option.devel){j(I,i.devel)}if(l.option.dojo){j(I,i.dojo)}if(l.option.browser){j(I,i.browser)
j(I,i.typed)}if(l.option.nonstandard){j(I,i.nonstandard)}if(l.option.jquery){j(I,i.jquery)}if(l.option.mootools){j(I,i.mootools)}if(l.option.worker){j(I,i.worker)}if(l.option.wsh){j(I,i.wsh)}if(l.option.globalstrict&&l.option.strict!==false){l.option.strict=true}if(l.option.yui){j(I,i.yui)}l.option.inMoz=function(e){if(e){return l.option.moz&&!l.option.esnext}return l.option.moz}
l.option.inESNext=function(e){if(e){return!l.option.moz&&l.option.esnext}return l.option.moz||l.option.esnext}
l.option.inES5=function(){return!l.option.es3}
l.option.inES3=function(e){if(e){return!l.option.moz&&!l.option.esnext&&l.option.es3}return l.option.es3}}function q(e,t,n){var r=Math.floor(t/l.lines.length*100)
var i=a.errors[e].desc
throw{name:"JSHintError",line:t,character:n,message:i+" ("+r+"% scanned).",raw:i,code:e}}function K(e,t,n,r){return c.undefs.push([e,t,n,r])}function X(e,t,n,r,i,s){var o,u,f,h
if(/^W\d{3}$/.test(e)){if(l.ignored[e])return
h=a.warnings[e]}else if(/E\d{3}/.test(e)){h=a.errors[e]}else if(/I\d{3}/.test(e)){h=a.info[e]}t=t||l.tokens.next
if(t.id==="(end)"){t=l.tokens.curr}u=t.line||0
o=t.from||0
f={id:"(error)",raw:h.desc,code:h.code,evidence:l.lines[u-1]||"",line:u,character:o,scope:c.scope,a:n,b:r,c:i,d:s}
f.reason=z(h.desc,f)
c.errors.push(f)
if(l.option.passfail){q("E042",u,o)}M+=1
if(M>=l.option.maxerr){q("E043",u,o)}return f}function Y(e,t,n,r,i,a,s){return X(e,{line:t,from:n},r,i,a,s)}function Z(e,t,n,r,i,a){X(e,t,n,r,i,a)}function J(e,t,n,r,i,a,s){return Z(e,{line:t,from:n},r,i,a,s)}function Q(e,t){var n
n={id:"(internal)",elem:e,value:t}
c.internals.push(n)
return n}function et(e,t){t=t||{}
var n=t.type
var r=t.token
var i=t.islet
if(n==="exception"){if(W.has(y["(context)"],e)){if(y[e]!==true&&!l.option.node){X("W002",l.tokens.next,e)}}}if(W.has(y,e)&&!y["(global)"]){if(y[e]===true){if(l.option.latedef){if(l.option.latedef===true&&W.contains([y[e],n],"unction")||!W.contains([y[e],n],"unction")){X("W003",l.tokens.next,e)}}}else{if((!l.option.shadow||W.contains(["inner","outer"],l.option.shadow))&&n!=="exception"||y["(blockscope)"].getlabel(e)){X("W004",l.tokens.next,e)}}}if(y["(context)"]&&W.has(y["(context)"],e)&&n!=="function"){if(l.option.shadow==="outer"){X("W123",l.tokens.next,e)}}if(i){y["(blockscope)"].current.add(e,n,l.tokens.curr)}else{y["(blockscope)"].shadow(e)
y[e]=n
if(r){y["(tokens)"][e]=r}Xt(y,e,{unused:t.unused||false})
if(y["(global)"]){x[e]=y
if(W.has(k,e)){if(l.option.latedef){if(l.option.latedef===true&&W.contains([y[e],n],"unction")||!W.contains([y[e],n],"unction")){X("W003",l.tokens.next,e)}}delete k[e]}}else{P[e]=y}}}function tt(){var e=l.tokens.next
var t=e.body.split(",").map(function(e){return e.trim()})
var n={}
if(e.type==="globals"){t.forEach(function(e){e=e.split(":")
var t=(e[0]||"").trim()
var r=(e[1]||"").trim()
if(t.charAt(0)==="-"){t=t.slice(1)
r=false
c.blacklist[t]=t
delete I[t]}else{n[t]=r==="true"}})
j(I,n)
for(var r in n){if(W.has(n,r)){d[r]=e}}}if(e.type==="exported"){t.forEach(function(e){g[e]=true})}if(e.type==="members"){C=C||{}
t.forEach(function(e){var t=e.charAt(0)
var n=e.charAt(e.length-1)
if(t===n&&(t==='"'||t==="'")){e=e.substr(1,e.length-2).replace('\\"','"')}C[e]=false})}var i=["maxstatements","maxparams","maxdepth","maxcomplexity","maxerr","maxlen","indent"]
if(e.type==="jshint"||e.type==="jslint"){t.forEach(function(t){t=t.split(":")
var n=(t[0]||"").trim()
var r=(t[1]||"").trim()
if(!B(n,e)){return}if(i.indexOf(n)>=0){if(r!=="false"){r=+r
if(typeof r!=="number"||!isFinite(r)||r<=0||Math.floor(r)!==r){Z("E032",e,t[1].trim())
return}if(n==="indent"){l.option["(explicitIndent)"]=true}l.option[n]=r}else{if(n==="indent"){l.option["(explicitIndent)"]=false}else{l.option[n]=false}}return}if(n==="validthis"){if(y["(global)"])return void Z("E009")
if(r!=="true"&&r!=="false")return void Z("E002",e)
l.option.validthis=r==="true"
return}if(n==="quotmark"){switch(r){case"true":case"false":l.option.quotmark=r==="true"
break
case"double":case"single":l.option.quotmark=r
break
default:Z("E002",e)}return}if(n==="shadow"){switch(r){case"true":l.option.shadow=true
break
case"outer":l.option.shadow="outer"
break
case"false":case"inner":l.option.shadow="inner"
break
default:Z("E002",e)}return}if(n==="unused"){switch(r){case"true":l.option.unused=true
break
case"false":l.option.unused=false
break
case"vars":case"strict":l.option.unused=r
break
default:Z("E002",e)}return}if(n==="latedef"){switch(r){case"true":l.option.latedef=true
break
case"false":l.option.latedef=false
break
case"nofunc":l.option.latedef="nofunc"
break
default:Z("E002",e)}return}if(n==="ignore"){switch(r){case"start":l.ignoreLinterErrors=true
break
case"end":l.ignoreLinterErrors=false
break
case"line":c.errors=W.reject(c.errors,function(t){return t.line===e.line})
break
default:Z("E002",e)}return}var a=/^([+-])(W\d{3})$/g.exec(n)
if(a){l.ignored[a[2]]=a[1]==="-"
return}var s
if(r==="true"||r==="false"){if(e.type==="jslint"){s=m[n]||n
l.option[s]=r==="true"
if(p[s]!==undefined){l.option[s]=!l.option[s]}}else{l.option[n]=r==="true"}if(n==="newcap"){l.option["(explicitNewcap)"]=true}return}Z("E002",e)})
H()}}function nt(e){var t=e||0,n=0,r
while(n<=t){r=S[n]
if(!r){r=S[n]=A.token()}n+=1}return r}function rt(t,n){switch(l.tokens.curr.id){case"(number)":if(l.tokens.next.id==="."){X("W005",l.tokens.curr)}break
case"-":if(l.tokens.next.id==="-"||l.tokens.next.id==="--"){X("W006")}break
case"+":if(l.tokens.next.id==="+"||l.tokens.next.id==="++"){X("W007")}break}if(l.tokens.curr.type==="(string)"||l.tokens.curr.identifier){e=l.tokens.curr.value}if(t&&l.tokens.next.id!==t){if(n){if(l.tokens.next.id==="(end)"){Z("E019",n,n.id)}else{Z("E020",l.tokens.next,t,n.id,n.line,l.tokens.next.value)}}else if(l.tokens.next.type!=="(identifier)"||l.tokens.next.value!==t){X("W116",l.tokens.next,t,l.tokens.next.value)}}l.tokens.prev=l.tokens.curr
l.tokens.curr=l.tokens.next
for(;;){l.tokens.next=S.shift()||A.token()
if(!l.tokens.next){q("E041",l.tokens.curr.line)}if(l.tokens.next.id==="(end)"||l.tokens.next.id==="(error)"){return}if(l.tokens.next.check){l.tokens.next.check()}if(l.tokens.next.isSpecial){tt()}else{if(l.tokens.next.id!=="(endline)"){break}}}}function it(e){return e.infix||!e.identifier&&!!e.led}function at(){var e=l.tokens.curr
var t=l.tokens.next
if(t.id===";"||t.id==="}"||t.id===":"){return true}if(it(t)===it(e)||e.id==="yield"&&l.option.inMoz(true)){return e.line!==t.line}return false}function st(t,n){var r,i=false,a=false,s=false
if(!n&&l.tokens.next.value==="let"&&nt(0).value==="("){if(!l.option.inMoz(true)){X("W118",l.tokens.next,"let expressions")}s=true
y["(blockscope)"].stack()
rt("let")
rt("(")
l.syntax["let"].fud.call(l.syntax["let"].fud,false)
rt(")")}if(l.tokens.next.id==="(end)")Z("E006",l.tokens.curr)
rt()
if(n){e="anonymous"
y["(verb)"]=l.tokens.curr.value}if(n===true&&l.tokens.curr.fud){r=l.tokens.curr.fud()}else{if(l.tokens.curr.nud){r=l.tokens.curr.nud()}else{if(l.tokens.curr.value===","){Z("E052",l.tokens.curr,l.tokens.curr.id)}else{Z("E030",l.tokens.curr,l.tokens.curr.id)}}while(t<l.tokens.next.lbp&&!at()){i=l.tokens.curr.value==="Array"
a=l.tokens.curr.value==="Object"
if(r&&(r.value||r.first&&r.first.value)){if(r.value!=="new"||r.first&&r.first.value&&r.first.value==="."){i=false
if(r.value!==l.tokens.curr.value){a=false}}}rt()
if(i&&l.tokens.curr.id==="("&&l.tokens.next.id===")"){X("W009",l.tokens.curr)}if(a&&l.tokens.curr.id==="("&&l.tokens.next.id===")"){X("W010",l.tokens.curr)}if(r&&l.tokens.curr.led){r=l.tokens.curr.led(r)}else{Z("E033",l.tokens.curr,l.tokens.curr.id)}}}if(s){y["(blockscope)"].unstack()}return r}function ot(e,t){e=e||l.tokens.curr
t=t||l.tokens.next
if(l.option.white){if(e.character!==t.from&&e.line===t.line){e.from+=e.character-e.from
X("W011",e,e.value)}}}function lt(e,t){e=e||l.tokens.curr
t=t||l.tokens.next
if(l.option.white&&(e.character!==t.from||e.line!==t.line)){X("W012",t,t.value)}}function ut(e,t){e=e||l.tokens.curr
t=t||l.tokens.next
if(l.option.white&&!e.comment){if(e.line===t.line){ot(e,t)}}}function ft(e,t){if(l.option.white){e=e||l.tokens.curr
t=t||l.tokens.next
if(e.value===";"&&t.value===";"){return}if(e.line===t.line&&e.character===t.from){e.from+=e.character-e.from
X("W013",e,e.value)}}}function ct(e,t){e=e||l.tokens.curr
t=t||l.tokens.next
if(!l.option.laxbreak&&e.line!==t.line){X("W014",t,t.value)}else if(l.option.white){e=e||l.tokens.curr
t=t||l.tokens.next
if(e.character===t.from){e.from+=e.character-e.from
X("W013",e,e.value)}}}function ht(e){if(!l.option.white&&!l.option["(explicitIndent)"]){return}if(l.tokens.next.id==="(end)"){return}var t=E+(e||0)
if(l.tokens.next.from!==t){X("W015",l.tokens.next,l.tokens.next.value,t,l.tokens.next.from)}}function pt(e){e=e||l.tokens.curr
if(e.line!==l.tokens.next.line){X("E022",e,e.value)}}function mt(e,t){if(e.line!==t.line){if(!l.option.laxcomma){if(dt.first){X("I001")
dt.first=false}X("W014",e,t.value)}}else if(!e.comment&&e.character!==t.from&&l.option.white){e.from+=e.character-e.from
X("W011",e,e.value)}}function dt(e){e=e||{}
if(!e.peek){mt(l.tokens.curr,l.tokens.next)
rt(",")}else{mt(l.tokens.prev,l.tokens.curr)}if(l.tokens.next.value!=="]"&&l.tokens.next.value!=="}"){ft(l.tokens.curr,l.tokens.next)}if(l.tokens.next.identifier&&!(e.property&&l.option.inES5())){switch(l.tokens.next.value){case"break":case"case":case"catch":case"continue":case"default":case"do":case"else":case"finally":case"for":case"if":case"in":case"instanceof":case"return":case"switch":case"throw":case"try":case"var":case"let":case"while":case"with":Z("E024",l.tokens.next,l.tokens.next.value)
return false}}if(l.tokens.next.type==="(punctuator)"){switch(l.tokens.next.value){case"}":case"]":case",":if(e.allowTrailing){return true}case")":var t="E024"
if(l.tokens.next.value===")"){t="E053"}else if(l.tokens.next.value===","){t="E052"}Z(t,l.tokens.next,l.tokens.next.value)
return false}}return true}function gt(e,t){var n=l.syntax[e]
if(!n||typeof n!=="object"){l.syntax[e]=n={id:e,lbp:t,value:e}}return n}function vt(e){return gt(e,0)}function yt(e,t){var n=vt(e)
n.identifier=n.reserved=true
n.fud=t
return n}function bt(e,t){var n=yt(e,t)
n.block=true
return n}function xt(e){var t=e.id.charAt(0)
if(t>="a"&&t<="z"||t>="A"&&t<="Z"){e.identifier=e.reserved=true}return e}function kt(e,t){var n=gt(e,150)
xt(n)
n.nud=typeof t==="function"?t:function(){this.right=st(150)
this.arity="unary"
if(this.id==="++"||this.id==="--"){if(l.option.plusplus){X("W016",this,this.id)}else if(this.right&&(!this.right.identifier||U(this.right))&&this.right.id!=="."&&this.right.id!=="["){X("W017",this)}}return this}
return n}function wt(e,t){var n=vt(e)
n.type=e
n.nud=t
return n}function Et(e,t){var n=wt(e,t)
n.identifier=true
n.reserved=true
return n}function St(e,t){var n=wt(e,t&&t.nud||function(){return this})
t=t||{}
t.isFutureReservedWord=true
n.value=e
n.identifier=true
n.reserved=true
n.meta=t
return n}function At(e,t){return Et(e,function(){if(typeof t==="function"){t(this)}return this})}function _t(e,t,n,r){var i=gt(e,n)
xt(i)
i.infix=true
i.led=function(i){if(!r){ct(l.tokens.prev,l.tokens.curr)
ft(l.tokens.curr,l.tokens.next)}if(e==="in"&&i.id==="!"){X("W018",i,"!")}if(typeof t==="function"){return t(i,this)}else{this.left=i
this.right=st(n)
return this}}
return i}function Ct(e){var t=gt(e,42)
t.led=function(e){if(!l.option.inESNext()){X("W104",l.tokens.curr,"arrow function syntax (=>)")}ct(l.tokens.prev,l.tokens.curr)
ft(l.tokens.curr,l.tokens.next)
this.left=e
this.right=Jt(undefined,undefined,false,e)
return this}
return t}function Tt(e,t){var n=gt(e,100)
n.led=function(e){ct(l.tokens.prev,l.tokens.curr)
ft(l.tokens.curr,l.tokens.next)
var n=st(100)
if(V(e,"NaN")||V(n,"NaN")){X("W019",this)}else if(t){t.apply(this,[e,n])}if(!e||!n){q("E041",l.tokens.curr.line)}if(e.id==="!"){X("W018",e,"!")}if(n.id==="!"){X("W018",n,"!")}this.left=e
this.right=n
return this}
return n}function It(e){return e&&(e.type==="(number)"&&+e.value===0||e.type==="(string)"&&e.value===""||e.type==="null"&&!l.option.eqnull||e.type==="true"||e.type==="false"||e.type==="undefined")}function Pt(e,t){if(l.option.notypeof)return false
if(!e||!t)return false
var n=["undefined","object","boolean","number","string","function","xml","object"]
if(t.type==="(identifier)"&&t.value==="typeof"&&e.type==="(string)")return!W.contains(n,e.value)
return false}function Lt(e){var t=["Array","ArrayBuffer","Boolean","Collator","DataView","Date","DateTimeFormat","Error","EvalError","Float32Array","Float64Array","Function","Infinity","Intl","Int16Array","Int32Array","Int8Array","Iterator","Number","NumberFormat","Object","RangeError","ReferenceError","RegExp","StopIteration","String","SyntaxError","TypeError","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray","URIError"]
function n(e){if(typeof e!=="object")return
return e.right==="prototype"?e:n(e.left)}function r(e){while(!e.identifier&&typeof e.left==="object")e=e.left
if(e.identifier&&t.indexOf(e.value)>=0)return e.value}var i=n(e)
if(i)return r(i)}function Rt(e,t,n){var r=_t(e,typeof t==="function"?t:function(e,t){t.left=e
if(e){if(l.option.freeze){var n=Lt(e)
if(n)X("W121",e,n)}if(I[e.value]===false&&P[e.value]["(global)"]===true){X("W020",e)}else if(e["function"]){X("W021",e,e.value)}if(y[e.value]==="const"){Z("E013",e,e.value)}if(e.id==="."){if(!e.left){X("E031",t)}else if(e.left.value==="arguments"&&!l.directive["use strict"]){X("E031",t)}t.right=st(10)
return t}else if(e.id==="["){if(l.tokens.curr.left.first){l.tokens.curr.left.first.forEach(function(e){if(y[e.value]==="const"){Z("E013",e,e.value)}})}else if(!e.left){X("E031",t)}else if(e.left.value==="arguments"&&!l.directive["use strict"]){X("E031",t)}t.right=st(10)
return t}else if(e.identifier&&!U(e)){if(y[e.value]==="exception"){X("W022",e)}t.right=st(10)
return t}if(e===l.syntax["function"]){X("W023",l.tokens.curr)}}Z("E031",t)},n)
r.exps=true
r.assign=true
return r}function Ot(e,t,n){var r=gt(e,n)
xt(r)
r.led=typeof t==="function"?t:function(e){if(l.option.bitwise){X("W016",this,this.id)}this.left=e
this.right=st(n)
return this}
return r}function Mt(e){return Rt(e,function(e,t){if(l.option.bitwise){X("W016",t,t.id)}ft(l.tokens.prev,l.tokens.curr)
ft(l.tokens.curr,l.tokens.next)
if(e){if(e.id==="."||e.id==="["||e.identifier&&!U(e)){st(10)
return t}if(e===l.syntax["function"]){X("W023",l.tokens.curr)}return t}Z("E031",t)},20)}function Nt(e){var t=gt(e,150)
t.led=function(e){if(l.option.plusplus){X("W016",this,this.id)}else if((!e.identifier||U(e))&&e.id!=="."&&e.id!=="["){X("W017",this)}this.left=e
return this}
return t}function Dt(e,n){if(!l.tokens.next.identifier){return}rt()
var r=l.tokens.curr
var i=l.tokens.curr.value
if(!U(r)){return i}if(n){if(l.option.inES5()){return i}}if(e&&i==="undefined"){return i}if(n&&!t.getCache("displayed:I002")){t.setCache("displayed:I002",true)
X("I002")}X("W024",l.tokens.curr,l.tokens.curr.id)
return i}function Ft(e,t){var n=Dt(e,t)
if(n){return n}if(l.tokens.curr.id==="function"&&l.tokens.next.id==="("){X("W025")}else{Z("E030",l.tokens.next,l.tokens.next.value)}}function Wt(e){var t=0,n
if(l.tokens.next.id!==";"||T){return}for(;;){do{n=nt(t)
t+=1}while(n.id!="(end)"&&n.id==="(comment)")
if(n.reach){return}if(n.id!=="(endline)"){if(n.id==="function"){if(l.option.latedef===true){X("W026",n)}break}X("W027",n,n.value,e)
break}}}function Bt(e){var t
var n=E,r,i=P,a=l.tokens.next
if(a.id===";"){rt(";")
return}var s=U(a)
if(s&&a.meta&&a.meta.isFutureReservedWord&&nt().id===":"){X("W024",a,a.id)
s=false}if(W.has(["[","{"],a.value)){if(fn().isDestAssign){if(!l.option.inESNext()){X("W104",l.tokens.curr,"destructuring expression")}t=nn()
t.forEach(function(e){K(y,"W117",e.token,e.id)})
rt("=")
rn(t,st(10,true))
rt(";")
return}}if(a.identifier&&!s&&nt().id===":"){rt()
rt(":")
P=Object.create(i)
et(a.value,{type:"label"})
if(!l.tokens.next.labelled&&l.tokens.next.value!=="{"){X("W028",l.tokens.next,a.value,l.tokens.next.value)}l.tokens.next.label=a.value
a=l.tokens.next}if(a.id==="{"){var o=y["(verb)"]==="case"&&l.tokens.curr.value===":"
Ut(true,true,false,false,o)
return}if(!e){ht()}r=st(0,true)
if(!a.block){if(!l.option.expr&&(!r||!r.exps)){X("W030",l.tokens.curr)}else if(l.option.nonew&&r&&r.left&&r.id==="("&&r.left.id==="new"){X("W031",a)}if(l.tokens.next.id!==";"){if(!l.option.asi){if(!l.option.lastsemic||l.tokens.next.id!=="}"||l.tokens.next.line!==l.tokens.curr.line){Y("W033",l.tokens.curr.line,l.tokens.curr.character)}}}else{ot(l.tokens.curr,l.tokens.next)
rt(";")
ft(l.tokens.curr,l.tokens.next)}}E=n
P=i
return r}function Gt(e){var t=[],n
while(!l.tokens.next.reach&&l.tokens.next.id!=="(end)"){if(l.tokens.next.id===";"){n=nt()
if(!n||n.id!=="("&&n.id!=="["){X("W032")}rt(";")}else{t.push(Bt(e===l.tokens.next.line))}}return t}function Vt(){var e,t,n
for(;;){if(l.tokens.next.id==="(string)"){t=nt(0)
if(t.id==="(endline)"){e=1
do{n=nt(e)
e=e+1}while(n.id==="(endline)")
if(n.id!==";"){if(n.id!=="(string)"&&n.id!=="(number)"&&n.id!=="(regexp)"&&n.identifier!==true&&n.id!=="}"){break}X("W033",l.tokens.next)}else{t=n}}else if(t.id==="}"){X("W033",t)}else if(t.id!==";"){break}ht()
rt()
if(l.directive[l.tokens.curr.value]){X("W034",l.tokens.curr,l.tokens.curr.value)}if(l.tokens.curr.value==="use strict"){if(!l.option["(explicitNewcap)"])l.option.newcap=true
l.option.undef=true}l.directive[l.tokens.curr.value]=true
if(t.id===";"){rt(";")}continue}break}}function Ut(e,t,n,r,i){var a,s=w,o=E,u,f=P,c,h,p
w=e
if(!e||!l.option.funcscope)P=Object.create(P)
ft(l.tokens.curr,l.tokens.next)
c=l.tokens.next
var m=y["(metrics)"]
m.nestedBlockDepth+=1
m.verifyMaxNestedBlockDepthPerFunction()
if(l.tokens.next.id==="{"){rt("{")
y["(blockscope)"].stack()
h=l.tokens.curr.line
if(l.tokens.next.id!=="}"){E+=l.option.indent
while(!e&&l.tokens.next.from>E){E+=l.option.indent}if(n){u={}
for(p in l.directive){if(W.has(l.directive,p)){u[p]=l.directive[p]}}Vt()
if(l.option.strict&&y["(context)"]["(global)"]){if(!u["use strict"]&&!l.directive["use strict"]){X("E007")}}}a=Gt(h)
m.statementCount+=a.length
if(n){l.directive=u}E-=l.option.indent
if(h!==l.tokens.next.line){ht()}}else if(h!==l.tokens.next.line){ht()}rt("}",c)
y["(blockscope)"].unstack()
E=o}else if(!e){if(n){u={}
if(t&&!r&&!l.option.inMoz(true)){Z("W118",l.tokens.curr,"function closure expressions")}if(!t){for(p in l.directive){if(W.has(l.directive,p)){u[p]=l.directive[p]}}}st(10)
if(l.option.strict&&y["(context)"]["(global)"]){if(!u["use strict"]&&!l.directive["use strict"]){X("E007")}}}else{Z("E021",l.tokens.next,"{",l.tokens.next.value)}}else{y["(nolet)"]=true
if(!t||l.option.curly){X("W116",l.tokens.next,"{",l.tokens.next.value)}T=true
E+=l.option.indent
a=[Bt(l.tokens.next.line===l.tokens.curr.line)]
E-=l.option.indent
T=false
delete y["(nolet)"]}if(!(i&&["break","return","throw"].indexOf(y["(verb)"])!=-1)){y["(verb)"]=null}if(!e||!l.option.funcscope)P=f
w=s
if(e&&l.option.noempty&&(!a||a.length===0)){X("W035")}m.nestedBlockDepth-=1
return a}function zt(e){if(C&&typeof C[e]!=="boolean"){X("W036",l.tokens.curr,e)}if(typeof _[e]==="number"){_[e]+=1}else{_[e]=1}}function jt(e){var t=e.value
var n=Object.getOwnPropertyDescriptor(k,t)
if(!n)k[t]=[e.line]
else n.value.push(e.line)}wt("(number)",function(){return this})
wt("(string)",function(){return this})
l.syntax["(identifier)"]={type:"(identifier)",lbp:0,identifier:true,nud:function(){var t=this.value
var n=P[t]
var r
var i
if(typeof n==="function"){n=undefined}else if(!y["(blockscope)"].current.has(t)&&typeof n==="boolean"){r=y
y=b[0]
et(t,{type:"var"})
n=y
y=r}i=y["(blockscope)"].getlabel(t)
if(y===n||i){switch(i?i[t]["(type)"]:y[t]){case"unused":if(i)i[t]["(type)"]="var"
else y[t]="var"
break
case"unction":if(i)i[t]["(type)"]="function"
else y[t]="function"
this["function"]=true
break
case"const":Xt(y,t,{unused:false})
break
case"function":this["function"]=true
break
case"label":X("W037",l.tokens.curr,t)
break}}else if(y["(global)"]){if(typeof I[t]!=="boolean"){if(!(e==="typeof"||e==="delete")||l.tokens.next&&(l.tokens.next.value==="."||l.tokens.next.value==="[")){if(!y["(comparray)"].check(t)){K(y,"W117",l.tokens.curr,t)}}}jt(l.tokens.curr)}else{switch(y[t]){case"closure":case"function":case"var":case"unused":X("W038",l.tokens.curr,t)
break
case"label":X("W037",l.tokens.curr,t)
break
case"outer":case"global":break
default:if(n===true){y[t]=true}else if(n===null){X("W039",l.tokens.curr,t)
jt(l.tokens.curr)}else if(typeof n!=="object"){if(!(e==="typeof"||e==="delete")||l.tokens.next&&(l.tokens.next.value==="."||l.tokens.next.value==="[")){K(y,"W117",l.tokens.curr,t)}y[t]=true
jt(l.tokens.curr)}else{switch(n[t]){case"function":case"unction":this["function"]=true
n[t]="closure"
y[t]=n["(global)"]?"global":"outer"
break
case"var":case"unused":n[t]="closure"
y[t]=n["(global)"]?"global":"outer"
break
case"const":Xt(n,t,{unused:false})
break
case"closure":y[t]=n["(global)"]?"global":"outer"
break
case"label":X("W037",l.tokens.curr,t)}}}}return this},led:function(){Z("E033",l.tokens.next,l.tokens.next.value)}}
wt("(regexp)",function(){return this})
vt("(endline)")
vt("(begin)")
vt("(end)").reach=true
vt("(error)").reach=true
vt("}").reach=true
vt(")")
vt("]")
vt('"').reach=true
vt("'").reach=true
vt(";")
vt(":").reach=true
vt("#")
Et("else")
Et("case").reach=true
Et("catch")
Et("default").reach=true
Et("finally")
At("arguments",function(e){if(l.directive["use strict"]&&y["(global)"]){X("E008",e)}})
At("eval")
At("false")
At("Infinity")
At("null")
At("this",function(e){if(l.directive["use strict"]&&!l.option.validthis&&(y["(statement)"]&&y["(name)"].charAt(0)>"Z"||y["(global)"])){X("W040",e)}})
At("true")
At("undefined")
Rt("=","assign",20)
Rt("+=","assignadd",20)
Rt("-=","assignsub",20)
Rt("*=","assignmult",20)
Rt("/=","assigndiv",20).nud=function(){Z("E014")}
Rt("%=","assignmod",20)
Mt("&=","assignbitand",20)
Mt("|=","assignbitor",20)
Mt("^=","assignbitxor",20)
Mt("<<=","assignshiftleft",20)
Mt(">>=","assignshiftright",20)
Mt(">>>=","assignshiftrightunsigned",20)
_t(",",function(e,t){var n
t.exprs=[e]
if(!dt({peek:true})){return t}while(true){if(!(n=st(10))){break}t.exprs.push(n)
if(l.tokens.next.value!==","||!dt()){break}}return t},10,true)
_t("?",function(e,t){en()
t.left=e
t.right=st(10)
rt(":")
t["else"]=st(10)
return t},30)
var $t=40
_t("||",function(e,t){en()
t.left=e
t.right=st($t)
return t},$t)
_t("&&","and",50)
Ot("|","bitor",70)
Ot("^","bitxor",80)
Ot("&","bitand",90)
Tt("==",function(e,t){var n=l.option.eqnull&&(e.value==="null"||t.value==="null")
switch(true){case!n&&l.option.eqeqeq:this.from=this.character
X("W116",this,"===","==")
break
case It(e):X("W041",this,"===",e.value)
break
case It(t):X("W041",this,"===",t.value)
break
case Pt(t,e):X("W122",this,t.value)
break
case Pt(e,t):X("W122",this,e.value)
break}return this})
Tt("===",function(e,t){if(Pt(t,e)){X("W122",this,t.value)}else if(Pt(e,t)){X("W122",this,e.value)}return this})
Tt("!=",function(e,t){var n=l.option.eqnull&&(e.value==="null"||t.value==="null")
if(!n&&l.option.eqeqeq){this.from=this.character
X("W116",this,"!==","!=")}else if(It(e)){X("W041",this,"!==",e.value)}else if(It(t)){X("W041",this,"!==",t.value)}else if(Pt(t,e)){X("W122",this,t.value)}else if(Pt(e,t)){X("W122",this,e.value)}return this})
Tt("!==",function(e,t){if(Pt(t,e)){X("W122",this,t.value)}else if(Pt(e,t)){X("W122",this,e.value)}return this})
Tt("<")
Tt(">")
Tt("<=")
Tt(">=")
Ot("<<","shiftleft",120)
Ot(">>","shiftright",120)
Ot(">>>","shiftrightunsigned",120)
_t("in","in",120)
_t("instanceof","instanceof",120)
_t("+",function(e,t){var n=st(130)
if(e&&n&&e.id==="(string)"&&n.id==="(string)"){e.value+=n.value
e.character=n.character
if(!l.option.scripturl&&o.javascriptURL.test(e.value)){X("W050",e)}return e}t.left=e
t.right=n
return t},130)
kt("+","num")
kt("+++",function(){X("W007")
this.right=st(150)
this.arity="unary"
return this})
_t("+++",function(e){X("W007")
this.left=e
this.right=st(130)
return this},130)
_t("-","sub",130)
kt("-","neg")
kt("---",function(){X("W006")
this.right=st(150)
this.arity="unary"
return this})
_t("---",function(e){X("W006")
this.left=e
this.right=st(130)
return this},130)
_t("*","mult",140)
_t("/","div",140)
_t("%","mod",140)
Nt("++","postinc")
kt("++","preinc")
l.syntax["++"].exps=true
Nt("--","postdec")
kt("--","predec")
l.syntax["--"].exps=true
kt("delete",function(){var e=st(10)
if(!e||e.id!=="."&&e.id!=="["){X("W051")}this.first=e
return this}).exps=true
kt("~",function(){if(l.option.bitwise){X("W052",this,"~")}st(150)
return this})
kt("...",function(){if(!l.option.inESNext()){X("W104",this,"spread/rest operator")}if(!l.tokens.next.identifier){Z("E030",l.tokens.next,l.tokens.next.value)}st(150)
return this})
kt("!",function(){this.right=st(150)
this.arity="unary"
if(!this.right){q("E041",this.line||0)}if(n[this.right.id]===true){X("W018",this,"!")}return this})
kt("typeof","typeof")
kt("new",function(){var e=st(155),t
if(e&&e.id!=="function"){if(e.identifier){e["new"]=true
switch(e.value){case"Number":case"String":case"Boolean":case"Math":case"JSON":X("W053",l.tokens.prev,e.value)
break
case"Function":if(!l.option.evil){X("W054")}break
case"Date":case"RegExp":case"this":break
default:if(e.id!=="function"){t=e.value.substr(0,1)
if(l.option.newcap&&(t<"A"||t>"Z")&&!W.has(x,e.value)){X("W055",l.tokens.curr)}}}}else{if(e.id!=="."&&e.id!=="["&&e.id!=="("){X("W056",l.tokens.curr)}}}else{if(!l.option.supernew)X("W057",this)}ot(l.tokens.curr,l.tokens.next)
if(l.tokens.next.id!=="("&&!l.option.supernew){X("W058",l.tokens.curr,l.tokens.curr.value)}this.first=e
return this})
l.syntax["new"].exps=true
kt("void").exps=true
_t(".",function(e,t){ot(l.tokens.prev,l.tokens.curr)
lt()
var n=Ft(false,true)
if(typeof n==="string"){zt(n)}t.left=e
t.right=n
if(n&&n==="hasOwnProperty"&&l.tokens.next.value==="="){X("W001")}if(e&&e.value==="arguments"&&(n==="callee"||n==="caller")){if(l.option.noarg)X("W059",e,n)
else if(l.directive["use strict"])Z("E008")}else if(!l.option.evil&&e&&e.value==="document"&&(n==="write"||n==="writeln")){X("W060",e)}if(!l.option.evil&&(n==="eval"||n==="execScript")){X("W061")}return t},160,true)
_t("(",function(e,t){if(l.tokens.prev.id!=="}"&&l.tokens.prev.id!==")"){lt(l.tokens.prev,l.tokens.curr)}ut()
if(l.option.immed&&e&&!e.immed&&e.id==="function"){X("W062")}var n=0
var r=[]
if(e){if(e.type==="(identifier)"){if(e.value.match(/^[A-Z]([A-Z0-9_$]*[a-z][A-Za-z0-9_$]*)?$/)){if("Number String Boolean Date Object".indexOf(e.value)===-1){if(e.value==="Math"){X("W063",e)}else if(l.option.newcap){X("W064",e)}}}}}if(l.tokens.next.id!==")"){for(;;){r[r.length]=st(10)
n+=1
if(l.tokens.next.id!==","){break}dt()}}rt(")")
ut(l.tokens.prev,l.tokens.curr)
if(typeof e==="object"){if(l.option.inES3()&&e.value==="parseInt"&&n===1){X("W065",l.tokens.curr)}if(!l.option.evil){if(e.value==="eval"||e.value==="Function"||e.value==="execScript"){X("W061",e)
if(r[0]&&[0].id==="(string)"){Q(e,r[0].value)}}else if(r[0]&&r[0].id==="(string)"&&(e.value==="setTimeout"||e.value==="setInterval")){X("W066",e)
Q(e,r[0].value)}else if(r[0]&&r[0].id==="(string)"&&e.value==="."&&e.left.value==="window"&&(e.right==="setTimeout"||e.right==="setInterval")){X("W066",e)
Q(e,r[0].value)}}if(!e.identifier&&e.id!=="."&&e.id!=="["&&e.id!=="("&&e.id!=="&&"&&e.id!=="||"&&e.id!=="?"){X("W067",e)}}t.left=e
return t},155,true).exps=true
kt("(",function(){ut()
var e,t=[]
var n,r,i=0
var a
do{n=nt(i)
i+=1
r=nt(i)
i+=1}while(n.value!==")"&&r.value!=="=>"&&r.value!==";"&&r.type!=="(end)")
if(l.tokens.next.id==="function"){l.tokens.next.immed=true}var s=[]
if(l.tokens.next.id!==")"){for(;;){if(r.value==="=>"&&l.tokens.next.value==="{"){e=l.tokens.next
e.left=nn()
t.push(e)
for(var o in e.left){s.push(e.left[o].token)}}else{s.push(st(10))}if(l.tokens.next.id!==","){break}dt()}}rt(")",this)
ut(l.tokens.prev,l.tokens.curr)
if(l.option.immed&&s[0]&&s[0].id==="function"){if(l.tokens.next.id!=="("&&(l.tokens.next.id!=="."||nt().value!=="call"&&nt().value!=="apply")){X("W068",this)}}if(l.tokens.next.value==="=>"){return s}if(!s.length){return}if(s.length>1){a=Object.create(l.syntax[","])
a.exprs=s}else{a=s[0]}if(a){a.paren=true}return a})
Ct("=>")
_t("[",function(e,t){lt(l.tokens.prev,l.tokens.curr)
ut()
var n=st(10),r
if(n&&n.type==="(string)"){if(!l.option.evil&&(n.value==="eval"||n.value==="execScript")){X("W061",t)}zt(n.value)
if(!l.option.sub&&o.identifier.test(n.value)){r=l.syntax[n.value]
if(!r||!U(r)){X("W069",l.tokens.prev,n.value)}}}rt("]",t)
if(n&&n.value==="hasOwnProperty"&&l.tokens.next.value==="="){X("W001")}ut(l.tokens.prev,l.tokens.curr)
t.left=e
t.right=n
return t},160,true)
function Ht(){var e={}
e.exps=true
y["(comparray)"].stack()
var t=false
if(l.tokens.next.value!=="for"){t=true
if(!l.option.inMoz(true)){X("W116",l.tokens.next,"for",l.tokens.next.value)}y["(comparray)"].setState("use")
e.right=st(10)}rt("for")
if(l.tokens.next.value==="each"){rt("each")
if(!l.option.inMoz(true)){X("W118",l.tokens.curr,"for each")}}rt("(")
y["(comparray)"].setState("define")
e.left=st(130)
if(W.contains(["in","of"],l.tokens.next.value)){rt()}else{Z("E045",l.tokens.curr)}y["(comparray)"].setState("generate")
st(10)
rt(")")
if(l.tokens.next.value==="if"){rt("if")
rt("(")
y["(comparray)"].setState("filter")
e.filter=st(10)
rt(")")}if(!t){y["(comparray)"].setState("use")
e.right=st(10)}rt("]")
y["(comparray)"].unstack()
return e}kt("[",function(){var e=fn(true)
if(e.isCompArray){if(!l.option.inESNext()){X("W119",l.tokens.curr,"array comprehension")}return Ht()}else if(e.isDestAssign&&!l.option.inESNext()){X("W104",l.tokens.curr,"destructuring assignment")}var t=l.tokens.curr.line!==l.tokens.next.line
this.first=[]
if(t){E+=l.option.indent
if(l.tokens.next.from===E+l.option.indent){E+=l.option.indent}}while(l.tokens.next.id!=="(end)"){while(l.tokens.next.id===","){if(!l.option.inES5())X("W070")
rt(",")}if(l.tokens.next.id==="]"){break}if(t&&l.tokens.curr.line!==l.tokens.next.line){ht()}this.first.push(st(10))
if(l.tokens.next.id===","){dt({allowTrailing:true})
if(l.tokens.next.id==="]"&&!l.option.inES5(true)){X("W070",l.tokens.curr)
break}}else{break}}if(t){E-=l.option.indent
ht()}rt("]",this)
return this},160)
function qt(){var e=Dt(false,true)
if(!e){if(l.tokens.next.id==="(string)"){e=l.tokens.next.value
rt()}else if(l.tokens.next.id==="(number)"){e=l.tokens.next.value.toString()
rt()}}if(e==="hasOwnProperty"){X("W001")}return e}function Kt(e){var t,n
var r=[]
var i
var a=[]
var s
var o=false
if(e){if(Array.isArray(e)){for(var u in e){t=e[u]
if(W.contains(["{","["],t.id)){for(s in t.left){s=a[s]
if(s.id){r.push(s.id)
et(s.id,{type:"unused",token:s.token})}}}else if(t.value==="..."){if(!l.option.inESNext()){X("W104",t,"spread/rest operator")}continue}else{r.push(t.value)
et(t.value,{type:"unused",token:t})}}return r}else{if(e.identifier===true){et(e.value,{type:"unused",token:e})
return[e]}}}n=l.tokens.next
rt("(")
ut()
if(l.tokens.next.id===")"){rt(")")
return}for(;;){if(W.contains(["{","["],l.tokens.next.id)){a=nn()
for(s in a){s=a[s]
if(s.id){r.push(s.id)
et(s.id,{type:"unused",token:s.token})}}}else if(l.tokens.next.value==="..."){if(!l.option.inESNext()){X("W104",l.tokens.next,"spread/rest operator")}rt("...")
ut()
i=Ft(true)
r.push(i)
et(i,{type:"unused",token:l.tokens.curr})}else{i=Ft(true)
r.push(i)
et(i,{type:"unused",token:l.tokens.curr})}if(o){if(l.tokens.next.id!=="="){Z("E051",l.tokens.current)}}if(l.tokens.next.id==="="){if(!l.option.inESNext()){X("W119",l.tokens.next,"default parameters")}rt("=")
o=true
st(10)}if(l.tokens.next.id===","){dt()}else{rt(")",n)
ut(l.tokens.prev,l.tokens.curr)
return r}}}function Xt(e,t,n){if(!e["(properties)"][t]){e["(properties)"][t]={unused:false}}W.extend(e["(properties)"][t],n)}function Yt(e,t,n){if(!e["(properties)"][t])return null
return e["(properties)"][t][n]||null}function Zt(e,t,n,r){var i={"(name)":e,"(breakage)":0,"(loopage)":0,"(scope)":n,"(tokens)":{},"(properties)":{},"(catch)":false,"(global)":false,"(line)":null,"(character)":null,"(metrics)":null,"(statement)":null,"(context)":null,"(blockscope)":null,"(comparray)":null,"(generator)":null,"(params)":null}
if(t){W.extend(i,{"(line)":t.line,"(character)":t.character,"(metrics)":Qt(t)})}W.extend(i,r)
if(i["(context)"]){i["(blockscope)"]=i["(context)"]["(blockscope)"]
i["(comparray)"]=i["(context)"]["(comparray)"]}return i}function Jt(t,n,r,i){var a
var s=l.option
var o=l.ignored
var u=P
l.option=Object.create(l.option)
l.ignored=Object.create(l.ignored)
P=Object.create(P)
y=Zt(t||'"'+e+'"',l.tokens.next,P,{"(statement)":n,"(context)":y,"(generator)":r?true:null})
a=y
l.tokens.curr.funct=y
b.push(y)
if(t){et(t,{type:"function"})}y["(params)"]=Kt(i)
y["(metrics)"].verifyMaxParametersPerFunction(y["(params)"])
c.undefs=W.filter(c.undefs,function(e){var t=Array.isArray(i)?i:[i]
return!W.contains(t,e[2])})
Ut(false,true,true,i?true:false)
if(r&&y["(generator)"]!=="yielded"){Z("E047",l.tokens.curr)}y["(metrics)"].verifyMaxStatementsPerFunction()
y["(metrics)"].verifyMaxComplexityPerFunction()
y["(unusedOption)"]=l.option.unused
P=u
l.option=s
l.ignored=o
y["(last)"]=l.tokens.curr.line
y["(lastcharacter)"]=l.tokens.curr.character
for(var f in y){if(f[0]==="(")continue
y["(blockscope)"].unshadow(f)}y=y["(context)"]
return a}function Qt(e){return{statementCount:0,nestedBlockDepth:-1,ComplexityCount:1,verifyMaxStatementsPerFunction:function(){if(l.option.maxstatements&&this.statementCount>l.option.maxstatements){X("W071",e,this.statementCount)}},verifyMaxParametersPerFunction:function(t){t=t||[]
if(l.option.maxparams&&t.length>l.option.maxparams){X("W072",e,t.length)}},verifyMaxNestedBlockDepthPerFunction:function(){if(l.option.maxdepth&&this.nestedBlockDepth>0&&this.nestedBlockDepth===l.option.maxdepth+1){X("W073",null,this.nestedBlockDepth)}},verifyMaxComplexityPerFunction:function(){var t=l.option.maxcomplexity
var n=this.ComplexityCount
if(t&&n>t){X("W074",e,n)}}}}function en(){y["(metrics)"].ComplexityCount+=1}function tn(e){var t,n
if(e){t=e.id
n=e.paren
if(t===","&&(e=e.exprs[e.exprs.length-1])){t=e.id
n=n||e.paren}}switch(t){case"=":if(!n&&!l.option.boss){X("W124")}break
case"+=":case"-=":case"*=":case"%=":case"&=":case"|=":case"^=":case"/=":if(!n&&!l.option.boss){X("W084")}}}(function(e){e.nud=function(e){var t,n,r,i,a,s
var o={}
var u=""
function f(e,t){if(o[e]&&W.has(o,e))X("W075",l.tokens.next,r)
else o[e]={}
o[e].basic=true
o[e].basictkn=t}function c(e,t){if(o[e]&&W.has(o,e)){if(o[e].basic||o[e].setter)X("W075",l.tokens.next,r)}else{o[e]={}}o[e].setter=true
o[e].setterToken=t}function h(e){if(o[e]&&W.has(o,e)){if(o[e].basic||o[e].getter)X("W075",l.tokens.next,r)}else{o[e]={}}o[e].getter=true
o[e].getterToken=l.tokens.curr}t=l.tokens.curr.line!==l.tokens.next.line
if(t){E+=l.option.indent
if(l.tokens.next.from===E+l.option.indent){E+=l.option.indent}}for(;;){if(l.tokens.next.id==="}"){break}if(t){ht()}if(e&&l.tokens.next.value==="static"){rt("static")
u="static "}if(l.tokens.next.value==="get"&&nt().id!==":"){rt("get")
if(!l.option.inES5(!e)){Z("E034")}r=qt()
if(!r&&!l.option.inESNext()){Z("E035")}if(e&&r==="constructor"){Z("E049",l.tokens.next,"class getter method",r)}if(r){h(u+r)}a=l.tokens.next
ot(l.tokens.curr,l.tokens.next)
n=Jt()
i=n["(params)"]
if(r&&i){X("W076",a,i[0],r)}ot(l.tokens.curr,l.tokens.next)}else if(l.tokens.next.value==="set"&&nt().id!==":"){rt("set")
if(!l.option.inES5(!e)){Z("E034")}r=qt()
if(!r&&!l.option.inESNext()){Z("E035")}if(e&&r==="constructor"){Z("E049",l.tokens.next,"class setter method",r)}if(r){c(u+r,l.tokens.next)}a=l.tokens.next
ot(l.tokens.curr,l.tokens.next)
n=Jt()
i=n["(params)"]
if(r&&(!i||i.length!==1)){X("W077",a,r)}}else{s=false
if(l.tokens.next.value==="*"&&l.tokens.next.type==="(punctuator)"){if(!l.option.inESNext()){X("W104",l.tokens.next,"generator functions")}rt("*")
s=true}r=qt()
f(u+r,l.tokens.next)
if(typeof r!=="string"){break}if(l.tokens.next.value==="("){if(!l.option.inESNext()){X("W104",l.tokens.curr,"concise methods")}Jt(r,undefined,s)}else if(!e){rt(":")
ft(l.tokens.curr,l.tokens.next)
st(10)}}if(e&&r==="prototype"){Z("E049",l.tokens.next,"class method",r)}zt(r)
if(e){u=""
continue}if(l.tokens.next.id===","){dt({allowTrailing:true,property:true})
if(l.tokens.next.id===","){X("W070",l.tokens.curr)}else if(l.tokens.next.id==="}"&&!l.option.inES5(true)){X("W070",l.tokens.curr)}}else{break}}if(t){E-=l.option.indent
ht()}rt("}",this)
if(l.option.inES5()){for(var p in o){if(W.has(o,p)&&o[p].setter&&!o[p].getter){X("W078",o[p].setterToken)}}}return this}
e.fud=function(){Z("E036",l.tokens.curr)}})(vt("{"))
function nn(){var e,t
var n=[]
if(!l.option.inESNext()){X("W104",l.tokens.curr,"destructuring expression")}var r=function(){var e
if(W.contains(["[","{"],l.tokens.next.value)){t=nn()
for(var r in t){r=t[r]
n.push({id:r.id,token:r.token})}}else if(l.tokens.next.value===","){n.push({id:null,token:l.tokens.curr})}else{e=Ft()
if(e)n.push({id:e,token:l.tokens.curr})}}
if(l.tokens.next.value==="["){rt("[")
r()
while(l.tokens.next.value!=="]"){rt(",")
r()}rt("]")}else if(l.tokens.next.value==="{"){rt("{")
e=Ft()
if(l.tokens.next.value===":"){rt(":")
r()}else{n.push({id:e,token:l.tokens.curr})}while(l.tokens.next.value!=="}"){rt(",")
e=Ft()
if(l.tokens.next.value===":"){rt(":")
r()}else{n.push({id:e,token:l.tokens.curr})}}rt("}")}return n}function rn(e,t){var n=t.first
if(!n)return
var r=Array.isArray(n)?n:[n]
for(var i=0;i<e.length&&i<r.length;i++){var a=e[i]
var s=r[i]
if(a&&s)a.first=s
else if(a&&a.first&&!s)X("W080",a.first,a.first.value)}}var an=yt("const",function(e){var t
var n
var r
if(!l.option.inESNext())X("W104",l.tokens.curr,"const")
this.first=[]
for(;;){var i=[]
ft(l.tokens.curr,l.tokens.next)
if(W.contains(["{","["],l.tokens.next.value)){t=nn()
r=false}else{t=[{id:Ft(),token:l.tokens.curr}]
r=true}for(var a in t){a=t[a]
if(y[a.id]==="const"){X("E011",null,a.id)}if(y["(global)"]&&I[a.id]===false){X("W079",a.token,a.id)}if(a.id){et(a.id,{token:a.token,type:"const",unused:true})
i.push(a.token)}}if(e){break}this.first=this.first.concat(i)
if(l.tokens.next.id!=="="){X("E012",l.tokens.curr,l.tokens.curr.value)}if(l.tokens.next.id==="="){ft(l.tokens.curr,l.tokens.next)
rt("=")
ft(l.tokens.curr,l.tokens.next)
if(l.tokens.next.id==="undefined"){X("W080",l.tokens.prev,l.tokens.prev.value)}if(nt(0).id==="="&&l.tokens.next.identifier){X("W120",l.tokens.next,l.tokens.next.value)}n=st(10)
if(r){t[0].first=n}else{rn(i,n)}}if(l.tokens.next.id!==","){break}dt()}return this})
an.exps=true
var sn=yt("var",function(e){var t,n,r
if(y["(onevar)"]&&l.option.onevar){X("W081")}else if(!y["(global)"]){y["(onevar)"]=true}this.first=[]
for(;;){var i=[]
ft(l.tokens.curr,l.tokens.next)
if(W.contains(["{","["],l.tokens.next.value)){t=nn()
n=false}else{t=[{id:Ft(),token:l.tokens.curr}]
n=true}for(var a in t){a=t[a]
if(l.option.inESNext()&&y[a.id]==="const"){X("E011",null,a.id)}if(y["(global)"]&&I[a.id]===false){X("W079",a.token,a.id)}if(a.id){et(a.id,{type:"unused",token:a.token})
i.push(a.token)}}if(e){break}this.first=this.first.concat(i)
if(l.tokens.next.id==="="){ft(l.tokens.curr,l.tokens.next)
rt("=")
ft(l.tokens.curr,l.tokens.next)
if(l.tokens.next.id==="undefined"){X("W080",l.tokens.prev,l.tokens.prev.value)}if(nt(0).id==="="&&l.tokens.next.identifier){X("W120",l.tokens.next,l.tokens.next.value)}r=st(10)
if(n){t[0].first=r}else{rn(i,r)}}if(l.tokens.next.id!==","){break}dt()}return this})
sn.exps=true
var on=yt("let",function(e){var t,n,r,i
if(!l.option.inESNext()){X("W104",l.tokens.curr,"let")}if(l.tokens.next.value==="("){if(!l.option.inMoz(true)){X("W118",l.tokens.next,"let block")}rt("(")
y["(blockscope)"].stack()
i=true}else if(y["(nolet)"]){Z("E048",l.tokens.curr)}if(y["(onevar)"]&&l.option.onevar){X("W081")}else if(!y["(global)"]){y["(onevar)"]=true}this.first=[]
for(;;){var a=[]
ft(l.tokens.curr,l.tokens.next)
if(W.contains(["{","["],l.tokens.next.value)){t=nn()
n=false}else{t=[{id:Ft(),token:l.tokens.curr.value}]
n=true}for(var s in t){s=t[s]
if(l.option.inESNext()&&y[s.id]==="const"){X("E011",null,s.id)}if(y["(global)"]&&I[s.id]===false){X("W079",s.token,s.id)}if(s.id&&!y["(nolet)"]){et(s.id,{type:"unused",token:s.token,islet:true})
a.push(s.token)}}if(e){break}this.first=this.first.concat(a)
if(l.tokens.next.id==="="){ft(l.tokens.curr,l.tokens.next)
rt("=")
ft(l.tokens.curr,l.tokens.next)
if(l.tokens.next.id==="undefined"){X("W080",l.tokens.prev,l.tokens.prev.value)}if(nt(0).id==="="&&l.tokens.next.identifier){X("W120",l.tokens.next,l.tokens.next.value)}r=st(10)
if(n){t[0].first=r}else{rn(a,r)}}if(l.tokens.next.id!==","){break}dt()}if(i){rt(")")
Ut(true,true)
this.block=true
y["(blockscope)"].unstack()}return this})
on.exps=true
bt("class",function(){return ln.call(this,true)})
function ln(e){if(!l.option.inESNext()){X("W104",l.tokens.curr,"class")}if(e){this.name=Ft()
et(this.name,{type:"unused",token:l.tokens.curr})}else if(l.tokens.next.identifier&&l.tokens.next.value!=="extends"){this.name=Ft()}un(this)
return this}function un(e){var t=l.directive["use strict"]
if(l.tokens.next.value==="extends"){rt("extends")
e.heritage=st(10)}l.directive["use strict"]=true
rt("{")
e.body=l.syntax["{"].nud(true)
l.directive["use strict"]=t}bt("function",function(){var e=false
if(l.tokens.next.value==="*"){rt("*")
if(l.option.inESNext(true)){e=true}else{X("W119",l.tokens.curr,"function*")}}if(w){X("W082",l.tokens.curr)}var t=Ft()
if(y[t]==="const"){X("E011",null,t)}ot(l.tokens.curr,l.tokens.next)
et(t,{type:"unction",token:l.tokens.curr})
Jt(t,{statement:true},e)
if(l.tokens.next.id==="("&&l.tokens.next.line===l.tokens.curr.line){Z("E039")}return this})
kt("function",function(){var e=false
if(l.tokens.next.value==="*"){if(!l.option.inESNext()){X("W119",l.tokens.curr,"function*")}rt("*")
e=true}var t=Dt()
if(t||l.option.gcl){ot(l.tokens.curr,l.tokens.next)}else{ft(l.tokens.curr,l.tokens.next)}Jt(t,undefined,e)
if(!l.option.loopfunc&&y["(loopage)"]){X("W083")}return this})
bt("if",function(){var e=l.tokens.next
en()
l.condition=true
rt("(")
ft(this,e)
ut()
tn(st(0))
rt(")",e)
l.condition=false
ut(l.tokens.prev,l.tokens.curr)
Ut(true,true)
if(l.tokens.next.id==="else"){ft(l.tokens.curr,l.tokens.next)
rt("else")
if(l.tokens.next.id==="if"||l.tokens.next.id==="switch"){Bt(true)}else{Ut(true,true)}}return this})
bt("try",function(){var e
function t(){var e=P
var t
rt("catch")
ft(l.tokens.curr,l.tokens.next)
rt("(")
P=Object.create(e)
t=l.tokens.next.value
if(l.tokens.next.type!=="(identifier)"){t=null
X("E030",l.tokens.next,t)}rt()
y=Zt("(catch)",l.tokens.next,P,{"(context)":y,"(breakage)":y["(breakage)"],"(loopage)":y["(loopage)"],"(statement)":false,"(catch)":true})
if(t){et(t,{type:"exception"})}if(l.tokens.next.value==="if"){if(!l.option.inMoz(true)){X("W118",l.tokens.curr,"catch filter")}rt("if")
st(0)}rt(")")
l.tokens.curr.funct=y
b.push(y)
Ut(false)
P=e
y["(last)"]=l.tokens.curr.line
y["(lastcharacter)"]=l.tokens.curr.character
y=y["(context)"]}Ut(true)
while(l.tokens.next.id==="catch"){en()
if(e&&!l.option.inMoz(true)){X("W118",l.tokens.next,"multiple catch blocks")}t()
e=true}if(l.tokens.next.id==="finally"){rt("finally")
Ut(true)
return}if(!e){Z("E021",l.tokens.next,"catch",l.tokens.next.value)}return this})
bt("while",function(){var e=l.tokens.next
y["(breakage)"]+=1
y["(loopage)"]+=1
en()
rt("(")
ft(this,e)
ut()
tn(st(0))
rt(")",e)
ut(l.tokens.prev,l.tokens.curr)
Ut(true,true)
y["(breakage)"]-=1
y["(loopage)"]-=1
return this}).labelled=true
bt("with",function(){var e=l.tokens.next
if(l.directive["use strict"]){Z("E010",l.tokens.curr)}else if(!l.option.withstmt){X("W085",l.tokens.curr)}rt("(")
ft(this,e)
ut()
st(0)
rt(")",e)
ut(l.tokens.prev,l.tokens.curr)
Ut(true,true)
return this})
bt("switch",function(){var e=l.tokens.next
var t=false
var n=false
y["(breakage)"]+=1
rt("(")
ft(this,e)
ut()
tn(st(0))
rt(")",e)
ut(l.tokens.prev,l.tokens.curr)
ft(l.tokens.curr,l.tokens.next)
e=l.tokens.next
rt("{")
ft(l.tokens.curr,l.tokens.next)
if(l.tokens.next.from===E)n=true
if(!n)E+=l.option.indent
this.cases=[]
for(;;){switch(l.tokens.next.id){case"case":switch(y["(verb)"]){case"yield":case"break":case"case":case"continue":case"return":case"switch":case"throw":break
default:if(!o.fallsThrough.test(l.lines[l.tokens.next.line-2])){X("W086",l.tokens.curr,"case")}}ht()
rt("case")
this.cases.push(st(20))
en()
t=true
rt(":")
y["(verb)"]="case"
break
case"default":switch(y["(verb)"]){case"yield":case"break":case"continue":case"return":case"throw":break
default:if(this.cases.length){if(!o.fallsThrough.test(l.lines[l.tokens.next.line-2])){X("W086",l.tokens.curr,"default")}}}ht()
rt("default")
t=true
rt(":")
break
case"}":if(!n)E-=l.option.indent
ht()
rt("}",e)
y["(breakage)"]-=1
y["(verb)"]=undefined
return
case"(end)":Z("E023",l.tokens.next,"}")
return
default:E+=l.option.indent
if(t){switch(l.tokens.curr.id){case",":Z("E040")
return
case":":t=false
Gt()
break
default:Z("E025",l.tokens.curr)
return}}else{if(l.tokens.curr.id===":"){rt(":")
Z("E024",l.tokens.curr,":")
Gt()}else{Z("E021",l.tokens.next,"case",l.tokens.next.value)
return}}E-=l.option.indent}}}).labelled=true
yt("debugger",function(){if(!l.option.debug){X("W087",this)}return this}).exps=true;(function(){var e=yt("do",function(){y["(breakage)"]+=1
y["(loopage)"]+=1
en()
this.first=Ut(true,true)
rt("while")
var e=l.tokens.next
ft(l.tokens.curr,e)
rt("(")
ut()
tn(st(0))
rt(")",e)
ut(l.tokens.prev,l.tokens.curr)
y["(breakage)"]-=1
y["(loopage)"]-=1
return this})
e.labelled=true
e.exps=true})()
bt("for",function(){var e,t=l.tokens.next
var n=false
var r=null
if(t.value==="each"){r=t
rt("each")
if(!l.option.inMoz(true)){X("W118",l.tokens.curr,"for each")}}y["(breakage)"]+=1
y["(loopage)"]+=1
en()
rt("(")
ft(this,t)
ut()
var i
var a=0
var s=["in","of"]
do{i=nt(a);++a}while(!W.contains(s,i.value)&&i.value!==";"&&i.type!=="(end)")
if(W.contains(s,i.value)){if(!l.option.inESNext()&&i.value==="of"){Z("W104",i,"for of")}if(l.tokens.next.id==="var"){rt("var")
l.syntax["var"].fud.call(l.syntax["var"].fud,true)}else if(l.tokens.next.id==="let"){rt("let")
n=true
y["(blockscope)"].stack()
l.syntax["let"].fud.call(l.syntax["let"].fud,true)}else{switch(y[l.tokens.next.value]){case"unused":y[l.tokens.next.value]="var"
break
case"var":break
default:if(!y["(blockscope)"].getlabel(l.tokens.next.value))X("W088",l.tokens.next,l.tokens.next.value)}rt()}rt(i.value)
st(20)
rt(")",t)
e=Ut(true,true)
if(l.option.forin&&e&&(e.length>1||typeof e[0]!=="object"||e[0].value!=="if")){X("W089",this)}y["(breakage)"]-=1
y["(loopage)"]-=1}else{if(r){Z("E045",r)}if(l.tokens.next.id!==";"){if(l.tokens.next.id==="var"){rt("var")
l.syntax["var"].fud.call(l.syntax["var"].fud)}else if(l.tokens.next.id==="let"){rt("let")
n=true
y["(blockscope)"].stack()
l.syntax["let"].fud.call(l.syntax["let"].fud)}else{for(;;){st(0,"for")
if(l.tokens.next.id!==","){break}dt()}}}pt(l.tokens.curr)
rt(";")
if(l.tokens.next.id!==";"){tn(st(0))}pt(l.tokens.curr)
rt(";")
if(l.tokens.next.id===";"){Z("E021",l.tokens.next,")",";")}if(l.tokens.next.id!==")"){for(;;){st(0,"for")
if(l.tokens.next.id!==","){break}dt()}}rt(")",t)
ut(l.tokens.prev,l.tokens.curr)
Ut(true,true)
y["(breakage)"]-=1
y["(loopage)"]-=1}if(n){y["(blockscope)"].unstack()}return this}).labelled=true
yt("break",function(){var e=l.tokens.next.value
if(y["(breakage)"]===0)X("W052",l.tokens.next,this.value)
if(!l.option.asi)pt(this)
if(l.tokens.next.id!==";"&&!l.tokens.next.reach){if(l.tokens.curr.line===l.tokens.next.line){if(y[e]!=="label"){X("W090",l.tokens.next,e)}else if(P[e]!==y){X("W091",l.tokens.next,e)}this.first=l.tokens.next
rt()}}Wt("break")
return this}).exps=true
yt("continue",function(){var e=l.tokens.next.value
if(y["(breakage)"]===0)X("W052",l.tokens.next,this.value)
if(!l.option.asi)pt(this)
if(l.tokens.next.id!==";"&&!l.tokens.next.reach){if(l.tokens.curr.line===l.tokens.next.line){if(y[e]!=="label"){X("W090",l.tokens.next,e)}else if(P[e]!==y){X("W091",l.tokens.next,e)}this.first=l.tokens.next
rt()}}else if(!y["(loopage)"]){X("W052",l.tokens.next,this.value)}Wt("continue")
return this}).exps=true
yt("return",function(){if(this.line===l.tokens.next.line){if(l.tokens.next.id==="(regexp)")X("W092")
if(l.tokens.next.id!==";"&&!l.tokens.next.reach){ft(l.tokens.curr,l.tokens.next)
this.first=st(0)
if(this.first&&this.first.type==="(punctuator)"&&this.first.value==="="&&!this.first.paren&&!l.option.boss){Y("W093",this.first.line,this.first.character)}}}else{if(l.tokens.next.type==="(punctuator)"&&["[","{","+","-"].indexOf(l.tokens.next.value)>-1){pt(this)}}Wt("return")
return this}).exps=true;(function(e){e.exps=true
e.lbp=25})(kt("yield",function(){var e=l.tokens.prev
if(l.option.inESNext(true)&&!y["(generator)"]){Z("E046",l.tokens.curr,"yield")}else if(!l.option.inESNext()){X("W104",l.tokens.curr,"yield")}y["(generator)"]="yielded"
if(this.line===l.tokens.next.line||!l.option.inMoz(true)){if(l.tokens.next.id==="(regexp)")X("W092")
if(l.tokens.next.id!==";"&&!l.tokens.next.reach&&l.tokens.next.nud){ct(l.tokens.curr,l.tokens.next)
this.first=st(10)
if(this.first.type==="(punctuator)"&&this.first.value==="="&&!this.first.paren&&!l.option.boss){Y("W093",this.first.line,this.first.character)}}if(l.option.inMoz(true)&&l.tokens.next.id!==")"&&(e.lbp>30||!e.assign&&!at()||e.id==="yield")){Z("E050",this)}}else if(!l.option.asi){pt(this)}return this}))
yt("throw",function(){pt(this)
ft(l.tokens.curr,l.tokens.next)
this.first=st(20)
Wt("throw")
return this}).exps=true
yt("import",function(){if(!l.option.inESNext()){X("W119",l.tokens.curr,"import")}if(l.tokens.next.identifier){this.name=Ft()
et(this.name,{type:"unused",token:l.tokens.curr})}else{rt("{")
for(;;){var e
if(l.tokens.next.type==="default"){e="default"
rt("default")}else{e=Ft()}if(l.tokens.next.value==="as"){rt("as")
e=Ft()}et(e,{type:"unused",token:l.tokens.curr})
if(l.tokens.next.value===","){rt(",")}else if(l.tokens.next.value==="}"){rt("}")
break}else{Z("E024",l.tokens.next,l.tokens.next.value)
break}}}rt("from")
rt("(string)")
return this}).exps=true
yt("export",function(){if(!l.option.inESNext()){X("W119",l.tokens.curr,"export")}if(l.tokens.next.type==="default"){rt("default")
if(l.tokens.next.id==="function"||l.tokens.next.id==="class"){this.block=true}this.exportee=st(10)
return this}if(l.tokens.next.value==="{"){rt("{")
for(;;){Ft()
if(l.tokens.next.value===","){rt(",")}else if(l.tokens.next.value==="}"){rt("}")
break}else{Z("E024",l.tokens.next,l.tokens.next.value)
break}}return this}if(l.tokens.next.id==="var"){rt("var")
l.syntax["var"].fud.call(l.syntax["var"].fud)}else if(l.tokens.next.id==="let"){rt("let")
l.syntax["let"].fud.call(l.syntax["let"].fud)}else if(l.tokens.next.id==="const"){rt("const")
l.syntax["const"].fud.call(l.syntax["const"].fud)}else if(l.tokens.next.id==="function"){this.block=true
rt("function")
l.syntax["function"].fud()}else if(l.tokens.next.id==="class"){this.block=true
rt("class")
l.syntax["class"].fud()}else{Z("E024",l.tokens.next,l.tokens.next.value)}return this}).exps=true
St("abstract")
St("boolean")
St("byte")
St("char")
St("class",{es5:true,nud:ln})
St("double")
St("enum",{es5:true})
St("export",{es5:true})
St("extends",{es5:true})
St("final")
St("float")
St("goto")
St("implements",{es5:true,strictOnly:true})
St("import",{es5:true})
St("int")
St("interface",{es5:true,strictOnly:true})
St("long")
St("native")
St("package",{es5:true,strictOnly:true})
St("private",{es5:true,strictOnly:true})
St("protected",{es5:true,strictOnly:true})
St("public",{es5:true,strictOnly:true})
St("short")
St("static",{es5:true,strictOnly:true})
St("super",{es5:true})
St("synchronized")
St("throws")
St("transient")
St("volatile")
var fn=function(){var e,t
var n=-1
var r=0
var i={}
if(W.contains(["[","{"],l.tokens.curr.value))r+=1
do{e=n===-1?l.tokens.next:nt(n)
t=nt(n+1)
n=n+1
if(W.contains(["[","{"],e.value)){r+=1}else if(W.contains(["]","}"],e.value)){r-=1}if(e.identifier&&e.value==="for"&&r===1){i.isCompArray=true
i.notJson=true
break}if(W.contains(["}","]"],e.value)&&t.value==="="&&r===0){i.isDestAssign=true
i.notJson=true
break}if(e.value===";"){i.isBlock=true
i.notJson=true}}while(r>0&&e.id!=="(end)"&&n<15)
return i}
function cn(){var e=fn()
if(e.notJson){if(!l.option.inESNext()&&e.isDestAssign){X("W104",l.tokens.curr,"destructuring assignment")}Gt()}else{l.option.laxbreak=true
l.jsonMode=true
pn()}}var hn=function(){var e=function(){this.mode="use"
this.variables=[]}
var t=[]
var n
function r(e){var t=n.variables.filter(function(t){if(t.value===e){t.undef=false
return e}}).length
return t!==0}function i(e){var t=n.variables.filter(function(t){if(t.value===e&&!t.undef){if(t.unused===true){t.unused=false}return e}}).length
return t===0}return{stack:function(){n=new e
t.push(n)},unstack:function(){n.variables.filter(function(e){if(e.unused)X("W098",e.token,e.value)
if(e.undef)K(e.funct,"W117",e.token,e.value)})
t.splice(-1,1)
n=t[t.length-1]},setState:function(e){if(W.contains(["use","define","generate","filter"],e))n.mode=e},check:function(e){if(!n){return}if(n&&n.mode==="use"){if(i(e)){n.variables.push({funct:y,token:l.tokens.curr,value:e,undef:true,unused:false})}return true}else if(n&&n.mode==="define"){if(!r(e)){n.variables.push({funct:y,token:l.tokens.curr,value:e,undef:false,unused:true})}return true}else if(n&&n.mode==="generate"){K(y,"W117",l.tokens.curr,e)
return true}else if(n&&n.mode==="filter"){if(i(e)){K(y,"W117",l.tokens.curr,e)}return true}return false}}}
function pn(){function e(){var e={},t=l.tokens.next
rt("{")
if(l.tokens.next.id!=="}"){for(;;){if(l.tokens.next.id==="(end)"){Z("E026",l.tokens.next,t.line)}else if(l.tokens.next.id==="}"){X("W094",l.tokens.curr)
break}else if(l.tokens.next.id===","){Z("E028",l.tokens.next)}else if(l.tokens.next.id!=="(string)"){X("W095",l.tokens.next,l.tokens.next.value)}if(e[l.tokens.next.value]===true){X("W075",l.tokens.next,l.tokens.next.value)}else if(l.tokens.next.value==="__proto__"&&!l.option.proto||l.tokens.next.value==="__iterator__"&&!l.option.iterator){X("W096",l.tokens.next,l.tokens.next.value)}else{e[l.tokens.next.value]=true}rt()
rt(":")
pn()
if(l.tokens.next.id!==","){break}rt(",")}}rt("}")}function t(){var e=l.tokens.next
rt("[")
if(l.tokens.next.id!=="]"){for(;;){if(l.tokens.next.id==="(end)"){Z("E027",l.tokens.next,e.line)}else if(l.tokens.next.id==="]"){X("W094",l.tokens.curr)
break}else if(l.tokens.next.id===","){Z("E028",l.tokens.next)}pn()
if(l.tokens.next.id!==","){break}rt(",")}}rt("]")}switch(l.tokens.next.id){case"{":e()
break
case"[":t()
break
case"true":case"false":case"null":case"(number)":case"(string)":rt()
break
case"-":rt("-")
if(l.tokens.curr.character!==l.tokens.next.from){X("W011",l.tokens.curr)}ot(l.tokens.curr,l.tokens.next)
rt("(number)")
break
default:Z("E003",l.tokens.next)}}var mn=function(){var e={}
var t=[e]
function n(){for(var t in e){if(e[t]["(type)"]==="unused"){if(l.option.unused){var n=e[t]["(token)"]
var r=n.line
var i=n.character
Y("W098",r,i,t)}}}}return{stack:function(){e={}
t.push(e)},unstack:function(){n()
t.splice(t.length-1,1)
e=t[t.length-1]},getlabel:function(e){for(var n=t.length-1;n>=0;--n){if(W.has(t[n],e)&&!t[n][e]["(shadowed)"]){return t[n]}}},shadow:function(e){for(var n=t.length-1;n>=0;n--){if(W.has(t[n],e)){t[n][e]["(shadowed)"]=true}}},unshadow:function(e){for(var n=t.length-1;n>=0;n--){if(W.has(t[n],e)){t[n][e]["(shadowed)"]=false}}},current:{has:function(t){return W.has(e,t)},add:function(t,n,r){e[t]={"(type)":n,"(token)":r,"(shadowed)":false}}}}}
var dn=function(e,n,r){var a,o,u
var f
var h={}
var p={}
n=W.extend({},n)
l.reset()
if(n&&n.scope){c.scope=n.scope}else{c.errors=[]
c.undefs=[]
c.internals=[]
c.blacklist={}
c.scope="(main)"}I=Object.create(null)
j(I,i.ecmaIdentifiers)
j(I,i.reservedVars)
j(I,r||{})
d=Object.create(null)
g=Object.create(null)
function m(e,t){if(!e)return
if(!Array.isArray(e)&&typeof e==="object")e=Object.keys(e)
e.forEach(t)}if(n){m(n.predef||null,function(e){var t,r
if(e[0]==="-"){t=e.slice(1)
c.blacklist[t]=t}else{r=Object.getOwnPropertyDescriptor(n.predef,e)
I[e]=r?r.value:false}})
m(n.exported||null,function(e){g[e]=true})
delete n.predef
delete n.exported
f=Object.keys(n)
for(u=0;u<f.length;u++){if(/^-W\d{3}$/g.test(f[u])){p[f[u].slice(1)]=true}else{h[f[u]]=n[f[u]]
if(f[u]==="newcap"&&n[f[u]]===false)h["(explicitNewcap)"]=true
if(f[u]==="indent")h["(explicitIndent)"]=n[f[u]]===false?false:true}}}l.option=h
l.ignored=p
l.option.indent=l.option.indent||4
l.option.maxerr=l.option.maxerr||50
E=1
x=Object.create(I)
P=x
y=Zt("(global)",null,P,{"(global)":true,"(blockscope)":mn(),"(comparray)":hn(),"(metrics)":Qt(l.tokens.next)})
b=[y]
O=[]
L=null
_={}
C=null
k={}
w=false
S=[]
M=0
R=[]
if(!G(e)&&!Array.isArray(e)){J("E004",0)
return false}t={get isJSON(){return l.jsonMode},getOption:function(e){return l.option[e]||null},getCache:function(e){return l.cache[e]},setCache:function(e,t){l.cache[e]=t},warn:function(e,t){Y.apply(null,[e,t.line,t.char].concat(t.data))},on:function(e,t){e.split(" ").forEach(function(e){D.on(e,t)}.bind(this))}}
D.removeAllListeners();(N||[]).forEach(function(e){e(t)})
l.tokens.prev=l.tokens.curr=l.tokens.next=l.syntax["(begin)"]
A=new s(e)
A.on("warning",function(e){Y.apply(null,[e.code,e.line,e.character].concat(e.data))})
A.on("error",function(e){J.apply(null,[e.code,e.line,e.character].concat(e.data))})
A.on("fatal",function(e){q("E041",e.line,e.from)})
A.on("Identifier",function(e){D.emit("Identifier",e)})
A.on("String",function(e){D.emit("String",e)})
A.on("Number",function(e){D.emit("Number",e)})
A.start()
for(var v in n){if(W.has(n,v)){B(v,l.tokens.curr)}}H()
j(I,r||{})
dt.first=true
try{rt()
switch(l.tokens.next.id){case"{":case"[":cn()
break
default:Vt()
if(l.directive["use strict"]){if(!l.option.globalstrict&&!(l.option.node||l.option.phantom)){X("W097",l.tokens.prev)}}else if(l.option.globalstrict&&l.option.strict){X("E007")}Gt()}rt(l.tokens.next&&l.tokens.next.value!=="."?"(end)":undefined)
y["(blockscope)"].unstack()
var T=function(e,t){do{if(typeof t[e]==="string"){if(t[e]==="unused")t[e]="var"
else if(t[e]==="unction")t[e]="closure"
return true}t=t["(context)"]}while(t)
return false}
var F=function(e,t){if(!k[e])return
var n=[]
for(var r=0;r<k[e].length;r+=1){if(k[e][r]!==t)n.push(k[e][r])}if(n.length===0)delete k[e]
else k[e]=n}
var V=function(e,t,n,r){var i=t.line
var a=t.character
if(r===undefined){r=l.option.unused}if(r===true){r="last-param"}var s={vars:["var"],"last-param":["var","param"],strict:["var","param","last-param"]}
if(r){if(s[r]&&s[r].indexOf(n)!==-1){Y("W098",i,a,e)}}R.push({name:e,line:i,character:a})}
var U=function(e,t){var n=e[t]
var r=e["(tokens)"][t]
if(t.charAt(0)==="(")return
if(n!=="unused"&&n!=="unction"&&n!=="const")return
if(e["(params)"]&&e["(params)"].indexOf(t)!==-1)return
if(e["(global)"]&&W.has(g,t))return
if(n==="const"&&!Yt(e,t,"unused"))return
V(t,r,"var")}
for(a=0;a<c.undefs.length;a+=1){o=c.undefs[a].slice(0)
if(T(o[2].value,o[0])){F(o[2].value,o[2].line)}else if(l.option.undef){X.apply(X,o.slice(1))}}b.forEach(function(e){if(e["(unusedOption)"]===false){return}for(var t in e){if(W.has(e,t)){U(e,t)}}if(!e["(params)"])return
var n=e["(params)"].slice()
var r=n.pop()
var i,a
while(r){i=e[r]
a=e["(unusedOption)"]||l.option.unused
a=a===true?"last-param":a
if(r==="undefined")return
if(i==="unused"||i==="unction"){V(r,e["(tokens)"][r],"param",e["(unusedOption)"])}else if(a==="last-param"){return}r=n.pop()}})
for(var z in d){if(W.has(d,z)&&!W.has(x,z)&&!W.has(g,z)){V(z,d[z],"var")}}}catch(K){if(K&&K.name==="JSHintError"){var Z=l.tokens.next||{}
c.errors.push({scope:"(main)",raw:K.raw,code:K.code,reason:K.message,line:K.line||Z.line,character:K.character||Z.from},null)}else{throw K}}if(c.scope==="(main)"){n=n||{}
for(a=0;a<c.internals.length;a+=1){o=c.internals[a]
n.scope=o.elem
dn(o.value,n,r)}}return c.errors.length===0}
dn.addModule=function(e){N.push(e)}
dn.addModule(u.register)
dn.data=function(){var e={functions:[],options:l.option}
var t=[]
var n=[]
var r,i,a,s,o,u
if(dn.errors.length){e.errors=dn.errors}if(l.jsonMode){e.json=true}for(o in k){if(W.has(k,o)){t.push({name:o,line:k[o]})}}if(t.length>0){e.implieds=t}if(O.length>0){e.urls=O}u=Object.keys(P)
if(u.length>0){e.globals=u}for(a=1;a<b.length;a+=1){i=b[a]
r={}
for(s=0;s<v.length;s+=1){r[v[s]]=[]}for(s=0;s<v.length;s+=1){if(r[v[s]].length===0){delete r[v[s]]}}r.name=i["(name)"]
r.param=i["(params)"]
r.line=i["(line)"]
r.character=i["(character)"]
r.last=i["(last)"]
r.lastcharacter=i["(lastcharacter)"]
r.metrics={complexity:i["(metrics)"].ComplexityCount,parameters:(i["(params)"]||[]).length,statements:i["(metrics)"].statementCount}
e.functions.push(r)}if(R.length>0){e.unused=R}n=[]
for(o in _){if(typeof _[o]==="number"){e.member=_
break}}return e}
dn.jshint=dn
return dn}()
if(typeof n==="object"&&n){n.JSHINT=c}},{"./lex.js":13,"./messages.js":14,"./reg.js":15,"./state.js":16,"./style.js":17,"./vars.js":18,"console-browserify":10,events:5}],jshint:[function(e,t,n){t.exports=e("fNbQ4d")},{}],13:[function(e,t,n){"use strict"
var r=e("events")
var i=e("./reg.js")
var a=e("./state.js").state
var s=e("../data/ascii-identifier-data.js")
var o=s.asciiIdentifierStartTable
var l=s.asciiIdentifierPartTable
var u=e("../data/non-ascii-identifier-start.js")
var f=e("../data/non-ascii-identifier-part-only.js")
var c={Identifier:1,Punctuator:2,NumericLiteral:3,StringLiteral:4,Comment:5,Keyword:6,NullLiteral:7,BooleanLiteral:8,RegExp:9}
function h(){var e=[]
return{push:function(t){e.push(t)},check:function(){for(var t=0;t<e.length;++t){e[t]()}e.splice(0,e.length)}}}function p(e){var t=e
if(typeof t==="string"){t=t.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split("\n")}if(t[0]&&t[0].substr(0,2)==="#!"){if(t[0].indexOf("node")!==-1){a.option.node=true}t[0]=""}this.emitter=new r.EventEmitter
this.source=e
this.setLines(t)
this.prereg=true
this.line=0
this.char=1
this.from=1
this.input=""
for(var n=0;n<a.option.indent;n+=1){a.tab+=" "}}p.prototype={_lines:[],getLines:function(){this._lines=a.lines
return this._lines},setLines:function(e){this._lines=e
a.lines=this._lines},peek:function(e){return this.input.charAt(e||0)},skip:function(e){e=e||1
this.char+=e
this.input=this.input.slice(e)},on:function(e,t){e.split(" ").forEach(function(e){this.emitter.on(e,t)}.bind(this))},trigger:function(){this.emitter.emit.apply(this.emitter,Array.prototype.slice.call(arguments))},triggerAsync:function(e,t,n,r){n.push(function(){if(r()){this.trigger(e,t)}}.bind(this))},scanPunctuator:function(){var e=this.peek()
var t,n,r
switch(e){case".":if(/^[0-9]$/.test(this.peek(1))){return null}if(this.peek(1)==="."&&this.peek(2)==="."){return{type:c.Punctuator,value:"..."}}case"(":case")":case";":case",":case"{":case"}":case"[":case"]":case":":case"~":case"?":return{type:c.Punctuator,value:e}
case"#":return{type:c.Punctuator,value:e}
case"":return null}t=this.peek(1)
n=this.peek(2)
r=this.peek(3)
if(e===">"&&t===">"&&n===">"&&r==="="){return{type:c.Punctuator,value:">>>="}}if(e==="="&&t==="="&&n==="="){return{type:c.Punctuator,value:"==="}}if(e==="!"&&t==="="&&n==="="){return{type:c.Punctuator,value:"!=="}}if(e===">"&&t===">"&&n===">"){return{type:c.Punctuator,value:">>>"}}if(e==="<"&&t==="<"&&n==="="){return{type:c.Punctuator,value:"<<="}}if(e===">"&&t===">"&&n==="="){return{type:c.Punctuator,value:">>="}}if(e==="="&&t===">"){return{type:c.Punctuator,value:e+t}}if(e===t&&"+-<>&|".indexOf(e)>=0){return{type:c.Punctuator,value:e+t}}if("<>=!+-*%&|^".indexOf(e)>=0){if(t==="="){return{type:c.Punctuator,value:e+t}}return{type:c.Punctuator,value:e}}if(e==="/"){if(t==="="&&/\/=(?!(\S*\/[gim]?))/.test(this.input)){return{type:c.Punctuator,value:"/="}}return{type:c.Punctuator,value:"/"}}return null},scanComments:function(){var e=this.peek()
var t=this.peek(1)
var n=this.input.substr(2)
var r=this.line
var i=this.char
function a(e,t,n){var r=["jshint","jslint","members","member","globals","global","exported"]
var i=false
var a=e+t
var s="plain"
n=n||{}
if(n.isMultiline){a+="*/"}r.forEach(function(n){if(i){return}if(e==="//"&&n!=="jshint"){return}if(t.substr(0,n.length)===n){i=true
e=e+n
t=t.substr(n.length)}if(!i&&t.charAt(0)===" "&&t.substr(1,n.length)===n){i=true
e=e+" "+n
t=t.substr(n.length+1)}if(!i){return}switch(n){case"member":s="members"
break
case"global":s="globals"
break
default:s=n}})
return{type:c.Comment,commentType:s,value:a,body:t,isSpecial:i,isMultiline:n.isMultiline||false,isMalformed:n.isMalformed||false}}if(e==="*"&&t==="/"){this.trigger("error",{code:"E018",line:r,character:i})
this.skip(2)
return null}if(e!=="/"||t!=="*"&&t!=="/"){return null}if(t==="/"){this.skip(this.input.length)
return a("//",n)}var s=""
if(t==="*"){this.skip(2)
while(this.peek()!=="*"||this.peek(1)!=="/"){if(this.peek()===""){s+="\n"
if(!this.nextLine()){this.trigger("error",{code:"E017",line:r,character:i})
return a("/*",s,{isMultiline:true,isMalformed:true})}}else{s+=this.peek()
this.skip()}}this.skip(2)
return a("/*",s,{isMultiline:true})}},scanKeyword:function(){var e=/^[a-zA-Z_$][a-zA-Z0-9_$]*/.exec(this.input)
var t=["if","in","do","var","for","new","try","let","this","else","case","void","with","enum","while","break","catch","throw","const","yield","class","super","return","typeof","delete","switch","export","import","default","finally","extends","function","continue","debugger","instanceof"]
if(e&&t.indexOf(e[0])>=0){return{type:c.Keyword,value:e[0]}}return null},scanIdentifier:function(){var e=""
var t=0
var n,r
function i(e){return u.indexOf(e)>-1}function a(e){return i(e)||f.indexOf(e)>-1}function s(e){return/^[0-9a-fA-F]$/.test(e)}var h=function(){t+=1
if(this.peek(t)!=="u"){return null}var e=this.peek(t+1)
var n=this.peek(t+2)
var r=this.peek(t+3)
var i=this.peek(t+4)
var o
if(s(e)&&s(n)&&s(r)&&s(i)){o=parseInt(e+n+r+i,16)
if(l[o]||a(o)){t+=5
return"\\u"+e+n+r+i}return null}return null}.bind(this)
var p=function(){var e=this.peek(t)
var n=e.charCodeAt(0)
if(n===92){return h()}if(n<128){if(o[n]){t+=1
return e}return null}if(i(n)){t+=1
return e}return null}.bind(this)
var m=function(){var e=this.peek(t)
var n=e.charCodeAt(0)
if(n===92){return h()}if(n<128){if(l[n]){t+=1
return e}return null}if(a(n)){t+=1
return e}return null}.bind(this)
r=p()
if(r===null){return null}e=r
for(;;){r=m()
if(r===null){break}e+=r}switch(e){case"true":case"false":n=c.BooleanLiteral
break
case"null":n=c.NullLiteral
break
default:n=c.Identifier}return{type:n,value:e}},scanNumericLiteral:function(){var e=0
var t=""
var n=this.input.length
var r=this.peek(e)
var i
function a(e){return/^[0-9]$/.test(e)}function s(e){return/^[0-7]$/.test(e)}function o(e){return/^[0-9a-fA-F]$/.test(e)}function l(e){return e==="$"||e==="_"||e==="\\"||e>="a"&&e<="z"||e>="A"&&e<="Z"}if(r!=="."&&!a(r)){return null}if(r!=="."){t=this.peek(e)
e+=1
r=this.peek(e)
if(t==="0"){if(r==="x"||r==="X"){e+=1
t+=r
while(e<n){r=this.peek(e)
if(!o(r)){break}t+=r
e+=1}if(t.length<=2){return{type:c.NumericLiteral,value:t,isMalformed:true}}if(e<n){r=this.peek(e)
if(l(r)){return null}}return{type:c.NumericLiteral,value:t,base:16,isMalformed:false}}if(s(r)){e+=1
t+=r
i=false
while(e<n){r=this.peek(e)
if(a(r)){i=true}else if(!s(r)){break}t+=r
e+=1}if(e<n){r=this.peek(e)
if(l(r)){return null}}return{type:c.NumericLiteral,value:t,base:8,isMalformed:false}}if(a(r)){e+=1
t+=r}}while(e<n){r=this.peek(e)
if(!a(r)){break}t+=r
e+=1}}if(r==="."){t+=r
e+=1
while(e<n){r=this.peek(e)
if(!a(r)){break}t+=r
e+=1}}if(r==="e"||r==="E"){t+=r
e+=1
r=this.peek(e)
if(r==="+"||r==="-"){t+=this.peek(e)
e+=1}r=this.peek(e)
if(a(r)){t+=r
e+=1
while(e<n){r=this.peek(e)
if(!a(r)){break}t+=r
e+=1}}else{return null}}if(e<n){r=this.peek(e)
if(l(r)){return null}}return{type:c.NumericLiteral,value:t,base:10,isMalformed:!isFinite(t)}},scanStringLiteral:function(e){var t=this.peek()
if(t!=='"'&&t!=="'"){return null}this.triggerAsync("warning",{code:"W108",line:this.line,character:this.char},e,function(){return a.jsonMode&&t!=='"'})
var n=""
var r=this.line
var i=this.char
var s=false
this.skip()
while(this.peek()!==t){while(this.peek()===""){if(!s){this.trigger("warning",{code:"W112",line:this.line,character:this.char})}else{s=false
this.triggerAsync("warning",{code:"W043",line:this.line,character:this.char},e,function(){return!a.option.multistr})
this.triggerAsync("warning",{code:"W042",line:this.line,character:this.char},e,function(){return a.jsonMode&&a.option.multistr})}if(!this.nextLine()){this.trigger("error",{code:"E029",line:r,character:i})
return{type:c.StringLiteral,value:n,isUnclosed:true,quote:t}}}s=false
var o=this.peek()
var l=1
if(o<" "){this.trigger("warning",{code:"W113",line:this.line,character:this.char,data:["<non-printable>"]})}if(o==="\\"){this.skip()
o=this.peek()
switch(o){case"'":this.triggerAsync("warning",{code:"W114",line:this.line,character:this.char,data:["\\'"]},e,function(){return a.jsonMode})
break
case"b":o="\\b"
break
case"f":o="\\f"
break
case"n":o="\\n"
break
case"r":o="\\r"
break
case"t":o="\\t"
break
case"0":o="\\0"
var u=parseInt(this.peek(1),10)
this.triggerAsync("warning",{code:"W115",line:this.line,character:this.char},e,function(){return u>=0&&u<=7&&a.directive["use strict"]})
break
case"u":o=String.fromCharCode(parseInt(this.input.substr(1,4),16))
l=5
break
case"v":this.triggerAsync("warning",{code:"W114",line:this.line,character:this.char,data:["\\v"]},e,function(){return a.jsonMode})
o=""
break
case"x":var f=parseInt(this.input.substr(1,2),16)
this.triggerAsync("warning",{code:"W114",line:this.line,character:this.char,data:["\\x-"]},e,function(){return a.jsonMode})
o=String.fromCharCode(f)
l=3
break
case"\\":o="\\\\"
break
case'"':o='\\"'
break
case"/":break
case"":s=true
o=""
break
case"!":if(n.slice(n.length-2)==="<"){break}default:this.trigger("warning",{code:"W044",line:this.line,character:this.char})}}n+=o
this.skip(l)}this.skip()
return{type:c.StringLiteral,value:n,isUnclosed:false,quote:t}},scanRegExp:function(){var e=0
var t=this.input.length
var n=this.peek()
var r=n
var i=""
var a=[]
var s=false
var o=false
var l
var u=function(){if(n<" "){s=true
this.trigger("warning",{code:"W048",line:this.line,character:this.char})}if(n==="<"){s=true
this.trigger("warning",{code:"W049",line:this.line,character:this.char,data:[n]})}}.bind(this)
if(!this.prereg||n!=="/"){return null}e+=1
l=false
while(e<t){n=this.peek(e)
r+=n
i+=n
if(o){if(n==="]"){if(this.peek(e-1)!=="\\"||this.peek(e-2)==="\\"){o=false}}if(n==="\\"){e+=1
n=this.peek(e)
i+=n
r+=n
u()}e+=1
continue}if(n==="\\"){e+=1
n=this.peek(e)
i+=n
r+=n
u()
if(n==="/"){e+=1
continue}if(n==="["){e+=1
continue}}if(n==="["){o=true
e+=1
continue}if(n==="/"){i=i.substr(0,i.length-1)
l=true
e+=1
break}e+=1}if(!l){this.trigger("error",{code:"E015",line:this.line,character:this.from})
return void this.trigger("fatal",{line:this.line,from:this.from})}while(e<t){n=this.peek(e)
if(!/[gim]/.test(n)){break}a.push(n)
r+=n
e+=1}try{new RegExp(i,a.join(""))}catch(f){s=true
this.trigger("error",{code:"E016",line:this.line,character:this.char,data:[f.message]})}return{type:c.RegExp,value:r,flags:a,isMalformed:s}},scanMixedSpacesAndTabs:function(){var e,t
if(a.option.smarttabs){t=this.input.match(/(\/\/|^\s?\*)? \t/)
e=t&&!t[1]?0:-1}else{e=this.input.search(/ \t|\t [^\*]/)}return e},scanUnsafeChars:function(){return this.input.search(i.unsafeChars)},next:function(e){this.from=this.char
var t
if(/\s/.test(this.peek())){t=this.char
while(/\s/.test(this.peek())){this.from+=1
this.skip()}if(this.peek()===""){if(!/^\s*$/.test(this.getLines()[this.line-1])&&a.option.trailing){this.trigger("warning",{code:"W102",line:this.line,character:t})}}}var n=this.scanComments()||this.scanStringLiteral(e)
if(n){return n}n=this.scanRegExp()||this.scanPunctuator()||this.scanKeyword()||this.scanIdentifier()||this.scanNumericLiteral()
if(n){this.skip(n.value.length)
return n}return null},nextLine:function(){var e
if(this.line>=this.getLines().length){return false}this.input=this.getLines()[this.line]
this.line+=1
this.char=1
this.from=1
var t=function(e){return this.indexOf(e)===0}
var n=function(e){return this.indexOf(e,this.length-e.length)!==-1}
var r=this.input.trim()
if(a.ignoreLinterErrors===true){if(!(t.call(r,"/*")||n.call(r,"*/"))){this.input=""}}e=this.scanMixedSpacesAndTabs()
if(e>=0){this.trigger("warning",{code:"W099",line:this.line,character:e+1})}this.input=this.input.replace(/\t/g,a.tab)
e=this.scanUnsafeChars()
if(e>=0){this.trigger("warning",{code:"W100",line:this.line,character:e})}if(a.option.maxlen&&a.option.maxlen<this.input.length){var s=a.tokens.curr.comment||t.call(r,"//")||t.call(r,"/*")
var o=!s||!i.maxlenException.test(r)
if(o){this.trigger("warning",{code:"W101",line:this.line,character:this.input.length})}}return true},start:function(){this.nextLine()},token:function(){var e=h()
var t
function n(e,t){if(!e.reserved){return false}var n=e.meta
if(n&&n.isFutureReservedWord&&a.option.inES5()){if(!n.es5){return false}if(n.strictOnly){if(!a.option.strict&&!a.directive["use strict"]){return false}}if(t){return false}}return true}var r=function(t,r,i){var s
if(t!=="(endline)"&&t!=="(end)"){this.prereg=false}if(t==="(punctuator)"){switch(r){case".":case")":case"~":case"#":case"]":this.prereg=false
break
default:this.prereg=true}s=Object.create(a.syntax[r]||a.syntax["(error)"])}if(t==="(identifier)"){if(r==="return"||r==="case"||r==="typeof"){this.prereg=true}if(a.syntax.hasOwnProperty(r)){s=Object.create(a.syntax[r]||a.syntax["(error)"])
if(!n(s,i&&t==="(identifier)")){s=null}}}if(!s){s=Object.create(a.syntax[t])}s.identifier=t==="(identifier)"
s.type=s.type||t
s.value=r
s.line=this.line
s.character=this.char
s.from=this.from
if(i&&s.identifier){s.isProperty=i}s.check=e.check
return s}.bind(this)
for(;;){if(!this.input.length){return r(this.nextLine()?"(endline)":"(end)","")}t=this.next(e)
if(!t){if(this.input.length){this.trigger("error",{code:"E024",line:this.line,character:this.char,data:[this.peek()]})
this.input=""}continue}switch(t.type){case c.StringLiteral:this.triggerAsync("String",{line:this.line,"char":this.char,from:this.from,value:t.value,quote:t.quote},e,function(){return true})
return r("(string)",t.value)
case c.Identifier:this.trigger("Identifier",{line:this.line,"char":this.char,from:this.form,name:t.value,isProperty:a.tokens.curr.id==="."})
case c.Keyword:case c.NullLiteral:case c.BooleanLiteral:return r("(identifier)",t.value,a.tokens.curr.id===".")
case c.NumericLiteral:if(t.isMalformed){this.trigger("warning",{code:"W045",line:this.line,character:this.char,data:[t.value]})}this.triggerAsync("warning",{code:"W114",line:this.line,character:this.char,data:["0x-"]},e,function(){return t.base===16&&a.jsonMode})
this.triggerAsync("warning",{code:"W115",line:this.line,character:this.char},e,function(){return a.directive["use strict"]&&t.base===8})
this.trigger("Number",{line:this.line,"char":this.char,from:this.from,value:t.value,base:t.base,isMalformed:t.malformed})
return r("(number)",t.value)
case c.RegExp:return r("(regexp)",t.value)
case c.Comment:a.tokens.curr.comment=true
if(t.isSpecial){return{id:"(comment)",value:t.value,body:t.body,type:t.commentType,isSpecial:t.isSpecial,line:this.line,character:this.char,from:this.from}}break
case"":break
default:return r("(punctuator)",t.value)}}}}
n.Lexer=p},{"../data/ascii-identifier-data.js":1,"../data/non-ascii-identifier-part-only.js":2,"../data/non-ascii-identifier-start.js":3,"./reg.js":15,"./state.js":16,events:5}],14:[function(e,t,n){"use strict"
var i18n={_:function(e){return e}}
var r={E001:i18n._("Bad option: '{a}'."),E002:i18n._("Bad option value."),E003:i18n._("Expected a JSON value."),E004:i18n._("Input is neither a string nor an array of strings."),E005:i18n._("Input is empty."),E006:i18n._("Unexpected early end of program."),E007:i18n._('Missing "use strict" statement.'),E008:i18n._("Strict violation."),E009:i18n._("Option 'validthis' can't be used in a global scope."),E010:i18n._("'with' is not allowed in strict mode."),E011:i18n._("const '{a}' has already been declared."),E012:i18n._("const '{a}' is initialized to 'undefined'."),E013:i18n._("Attempting to override '{a}' which is a constant."),E014:i18n._("A regular expression literal can be confused with '/='."),E015:i18n._("Unclosed regular expression."),E016:i18n._("Invalid regular expression."),E017:i18n._('It looks like your comment isn\'t closed. Use "*/" to end a multi-line comment.'),E018:i18n._("It looks like you never started your comment. "+'Use "/*" to start a multi-line comment.'),E019:i18n._('Unmatched "{a}".'),E020:i18n._('I thought you were going to type "{a}" to match "{b}" '+'from line {c} but you typed "{d}"'),E021:i18n._('I thought you were going to type "{a}" but you typed "{b}"!'),E022:i18n._("Line breaking error '{a}'."),E023:i18n._('I think you\'re missing a "{a}"!'),E024:i18n._('Unexpected "{a}".'),E025:i18n._("I think you're missing ':' on a case clause."),E026:i18n._("I think you're missing a '}' to match '{' from line {a}."),E027:i18n._("I think you're missing a ']' to match '[' from line {a}."),E028:i18n._("Illegal comma."),E029:i18n._("Unclosed string! Make sure you end your string with a quote."),E030:i18n._("I thought you were going to type an identifier but you typed '{a}'."),E031:i18n._("The left side of an assignment must be a single variable name, not an expression."),E032:i18n._("I thought you were going to type a number or 'false' but you typed '{a}'."),E033:i18n._("I thought you were going to type an operator but you typed '{a}'."),E034:i18n._("get/set are ES5 features."),E035:i18n._("I think you're missing a property name."),E036:i18n._("I thought you were going to type a statement but you typed a block instead."),E037:null,E038:null,E039:i18n._("Function declarations are not invocable. "+"Wrap the whole function invocation in parens."),E040:i18n._("Each value should have its own case label."),E041:i18n._("Unrecoverable syntax error."),E042:i18n._("Stopping."),E043:i18n._("Too many errors."),E044:null,E045:i18n._("Invalid for each loop."),E046:i18n._("A yield statement shall be within a generator function (with syntax: `function*`)"),E047:i18n._("A generator function shall contain a yield statement."),E048:i18n._("Let declaration not directly within block."),E049:i18n._("A {a} cannot be named '{b}'."),E050:i18n._("Mozilla requires the yield expression to be parenthesized here."),E051:i18n._("Regular parameters cannot come after default parameters."),E052:i18n._("I think you meant to type a value or variable name before that comma?"),E053:i18n._("I think you either have an extra comma or a missing argument?")}
var i={W001:i18n._("'hasOwnProperty' is a really bad name."),W002:i18n._("Value of '{a}' may be overwritten in IE 8 and earlier."),W003:i18n._("'{a}' was used before it was defined."),W004:i18n._("'{a}' is already defined."),W005:i18n._("A dot following a number can be confused with a decimal point."),W006:i18n._("Confusing minuses."),W007:i18n._("Confusing pluses."),W008:i18n._('Please put a 0 in front of the decimal point: "{a}"!'),W009:i18n._("The array literal notation [] is preferrable."),W010:i18n._("The object literal notation {} is preferrable."),W011:i18n._("Unexpected space after '{a}'."),W012:i18n._("Unexpected space before '{a}'."),W013:i18n._('I think you\'re missing a space after "{a}".'),W014:i18n._("Bad line breaking before '{a}'."),W015:i18n._("Expected '{a}' to have an indentation at {b} instead at {c}."),W016:i18n._("Unexpected use of '{a}'."),W017:i18n._("Bad operand."),W018:i18n._("Confusing use of '{a}'."),W019:i18n._("Use the isNaN function to compare with NaN."),W020:i18n._("Read only."),W021:i18n._("'{a}' is a function."),W022:i18n._("Do not assign to the exception parameter."),W023:i18n._("I thought you were going to type an identifier in an assignment "+"but you typed a function invocation instead."),W024:i18n._("I thought you were going to type an identifier but you typed '{a}' "+"(a reserved word)."),W025:i18n._("I think you're missing the name in your function declaration."),W026:i18n._("Inner functions should be listed at the top of the outer function."),W027:i18n._("Unreachable '{a}' after '{b}'."),W028:i18n._("Label '{a}' on {b} statement."),W030:i18n._("I thought you were going to type an assignment or function call "+"but you typed an expression instead."),W031:i18n._("Do not use 'new' for side effects."),W032:i18n._("It looks like you have an unnecessary semicolon."),W033:i18n._("It looks like you're missing a semicolon."),W034:i18n._('Unnecessary directive "{a}".'),W035:i18n._("Empty block."),W036:i18n._("Unexpected /*member '{a}'."),W037:i18n._("'{a}' is a statement label."),W038:i18n._("'{a}' used out of scope."),W039:i18n._("'{a}' is not allowed."),W040:i18n._("Possible strict violation."),W041:i18n._("Use '{a}' to compare with '{b}'."),W042:i18n._("Avoid EOL escaping."),W043:i18n._("Bad escaping of EOL. Use option multistr if needed."),W044:i18n._("Bad or unnecessary escaping."),W045:i18n._("Bad number '{a}'."),W046:i18n._('Don\'t use extra leading zeros "{a}".'),W047:i18n._("A trailing decimal point can be confused with a dot: '{a}'."),W048:i18n._("Unexpected control character in regular expression."),W049:i18n._("Unexpected escaped character '{a}' in regular expression."),W050:i18n._("JavaScript URL."),W051:i18n._("Variables should not be deleted."),W052:i18n._("Unexpected '{a}'."),W053:i18n._("Do not use {a} as a constructor."),W054:i18n._("The Function constructor is a form of eval."),W055:i18n._("A constructor name should start with an uppercase letter."),W056:i18n._("Bad constructor."),W057:i18n._("Weird construction. Is 'new' necessary?"),W058:i18n._('I think you\'re missing the "()" to invoke the constructor.'),W059:i18n._("Avoid arguments.{a}."),W060:i18n._("document.write can be a form of eval."),W061:i18n._("eval can be harmful."),W062:i18n._("Wrap an immediate function invocation in parens "+"to assist the reader in understanding that the expression "+"is the result of a function, and not the function itself."),W063:i18n._("Math is not a function."),W064:i18n._("I think you're missing using 'new' to call a constructor."),W065:i18n._("It looks like you're missing a radix parameter."),W066:i18n._("Implied eval. Consider passing a function instead of a string."),W067:i18n._("Bad invocation."),W068:i18n._("Wrapping non-IIFE function literals in parens is unnecessary."),W069:i18n._("['{a}'] is better written in dot notation."),W070:i18n._("Extra comma. (it breaks older versions of IE)"),W071:i18n._("This function has too many statements. ({a})"),W072:i18n._("This function has too many parameters. ({a})"),W073:i18n._("Blocks are nested too deeply. ({a})"),W074:i18n._("This function's cyclomatic complexity is too high. ({a})"),W075:i18n._("Duplicate key '{a}'."),W076:i18n._("Unexpected parameter '{a}' in get {b} function."),W077:i18n._("Expected a single parameter in set {a} function."),W078:i18n._("Setter is defined without getter."),W079:i18n._("Redefinition of '{a}'."),W080:i18n._("It's not necessary to initialize '{a}' to 'undefined'."),W081:i18n._("Too many var statements."),W082:i18n._("Function declarations should not be placed in blocks. "+"Use a function expression or move the statement to the top of "+"the outer function."),W083:i18n._("It's not a good idea to define functions within a loop. "+"Can you define them outside instead?"),W084:i18n._("I thought you were going to type a conditional expression "+"but you typed an assignment instead."),W085:i18n._("Don't use 'with'."),W086:i18n._("Did you forget a 'break' statement before '{a}'?"),W087:i18n._("Forgotten 'debugger' statement?"),W088:i18n._("Creating global 'for' variable. Should be 'for (var {a} ...'."),W089:i18n._("The body of a for in should be wrapped in an if statement to filter "+"unwanted properties from the prototype."),W090:i18n._("'{a}' is not a statement label."),W091:i18n._("'{a}' is out of scope."),W092:i18n._("Wrap the /regexp/ literal in parens to disambiguate the slash operator."),W093:i18n._("Did you mean to return a conditional instead of an assignment?"),W094:i18n._("Unexpected comma."),W095:i18n._("I thought you were going to type a string but you typed {a}."),W096:i18n._("The '{a}' key may produce unexpected results."),W097:i18n._('Use the function form of "use strict".'),W098:i18n._("'{a}' is defined but never used."),W099:i18n._("Mixed spaces and tabs."),W100:i18n._("This character may get silently deleted by one or more browsers."),W101:i18n._("Line is too long."),W102:i18n._("Trailing whitespace."),W103:i18n._("The '{a}' property is deprecated."),W104:i18n._("'{a}' is only available in ES6 which is not supported by "+"this environment."),W105:i18n._("Unexpected {a} in '{b}'."),W106:i18n._("Identifier '{a}' is not in camel case."),W107:i18n._("Script URL."),W108:i18n._("Strings must use doublequote."),W109:i18n._("Strings must use singlequote."),W110:i18n._("Mixed double and single quotes."),W112:i18n._("Unclosed string! Make sure you end your string with a quote."),W113:i18n._("Control character in string: {a}."),W114:i18n._("Avoid {a}."),W115:i18n._("Octal literals are not allowed in strict mode."),W116:i18n._('I thought you were going to type "{a}" but you typed "{b}".'),W117:i18n._('"{a}" is not defined. Make sure you\'re spelling it correctly '+"and that you declared it."),W118:i18n._("'{a}' is only available in Mozilla JavaScript extensions (use moz option)."),W119:i18n._("'{a}' is only available in ES6 which is not supported by "+"this environment."),W120:i18n._("You might be leaking a variable ({a}) here."),W121:i18n._("Extending prototype of native object: '{a}'."),W122:i18n._("Invalid typeof value '{a}'"),W123:i18n._("'{a}' is already defined in outer scope."),W124:i18n._("I thought you were going to type a conditional expression "+"but you typed an assignment instead. Maybe you meant to type === instead of =?")}
var a={I001:i18n._("Comma warnings can be turned off with 'laxcomma'."),I002:i18n._("Reserved words as properties can be used under the 'es5' option."),I003:i18n._("ES5 option is now set per default")}
n.errors={}
n.warnings={}
n.info={}
for(var s in r){n.errors[s]={code:s,desc:r[s]}}for(var s in i){n.warnings[s]={code:s,desc:i[s]}}for(var s in a){n.info[s]={code:s,desc:a[s]}}},{}],15:[function(e,t,n){"use string"
n.unsafeString=/@cc|<\/?|script|\]\s*\]|<\s*!|&lt/i
n.unsafeChars=/[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/
n.needEsc=/[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/
n.needEscGlobal=/[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
n.starSlash=/\*\//
n.identifier=/^([a-zA-Z_$][a-zA-Z0-9_$]*)$/
n.javascriptURL=/^(?:javascript|jscript|ecmascript|vbscript|mocha|livescript)\s*:/i
n.fallsThrough=/^\s*\/\*\s*falls?\sthrough\s*\*\/\s*$/
n.maxlenException=/^(?:(?:\/\/|\/\*|\*) ?)?[^ ]+$/},{}],16:[function(e,t,n){"use strict"
var r={syntax:{},reset:function(){this.tokens={prev:null,next:null,curr:null}
this.option={}
this.ignored={}
this.directive={}
this.jsonMode=false
this.jsonWarnings=[]
this.lines=[]
this.tab=""
this.cache={}
this.ignoreLinterErrors=false}}
n.state=r},{}],17:[function(e,t,n){"use strict"
n.register=function(e){e.on("Identifier",function t(n){if(e.getOption("proto")){return}if(n.name==="__proto__"){e.warn("W103",{line:n.line,"char":n.char,data:[n.name]})}})
e.on("Identifier",function n(t){if(e.getOption("iterator")){return}if(t.name==="__iterator__"){e.warn("W104",{line:t.line,"char":t.char,data:[t.name]})}})
e.on("Identifier",function r(t){if(!e.getOption("nomen")){return}if(t.name==="_"){return}if(e.getOption("node")){if(/^(__dirname|__filename)$/.test(t.name)&&!t.isProperty){return}}if(/^(_+.*|.*_+)$/.test(t.name)){e.warn("W105",{line:t.line,"char":t.from,data:["dangling '_'",t.name]})}})
e.on("Identifier",function i(t){if(!e.getOption("camelcase")){return}if(t.name.replace(/^_+|_+$/g,"").indexOf("_")>-1&&!t.name.match(/^[A-Z0-9_]*$/)){e.warn("W106",{line:t.line,"char":t.from,data:[t.name]})}})
e.on("String",function a(t){var n=e.getOption("quotmark")
var r
if(!n){return}if(n==="single"&&t.quote!=="'"){r="W109"}if(n==="double"&&t.quote!=='"'){r="W108"}if(n===true){if(!e.getCache("quotmark")){e.setCache("quotmark",t.quote)}if(e.getCache("quotmark")!==t.quote){r="W110"}}if(r){e.warn(r,{line:t.line,"char":t.char})}})
e.on("Number",function s(t){if(t.value.charAt(0)==="."){e.warn("W008",{line:t.line,"char":t.char,data:[t.value]})}if(t.value.substr(t.value.length-1)==="."){e.warn("W047",{line:t.line,"char":t.char,data:[t.value]})}if(/^00+/.test(t.value)){e.warn("W046",{line:t.line,"char":t.char,data:[t.value]})}})
e.on("String",function o(t){var n=/^(?:javascript|jscript|ecmascript|vbscript|mocha|livescript)\s*:/i
if(e.getOption("scripturl")){return}if(n.test(t.value)){e.warn("W107",{line:t.line,"char":t.char})}})}},{}],18:[function(e,t,n){"use strict"
n.reservedVars={arguments:false,NaN:false}
n.ecmaIdentifiers={Array:false,Boolean:false,Date:false,decodeURI:false,decodeURIComponent:false,encodeURI:false,encodeURIComponent:false,Error:false,eval:false,EvalError:false,Function:false,hasOwnProperty:false,isFinite:false,isNaN:false,JSON:false,Math:false,Map:false,Number:false,Object:false,parseInt:false,parseFloat:false,RangeError:false,ReferenceError:false,RegExp:false,Set:false,String:false,SyntaxError:false,TypeError:false,URIError:false,WeakMap:false}
n.browser={Audio:false,Blob:false,addEventListener:false,applicationCache:false,atob:false,blur:false,btoa:false,CanvasGradient:false,CanvasPattern:false,CanvasRenderingContext2D:false,clearInterval:false,clearTimeout:false,close:false,closed:false,CustomEvent:false,DOMParser:false,defaultStatus:false,document:false,Element:false,ElementTimeControl:false,event:false,FileReader:false,FormData:false,focus:false,frames:false,getComputedStyle:false,HTMLElement:false,HTMLAnchorElement:false,HTMLBaseElement:false,HTMLBlockquoteElement:false,HTMLBodyElement:false,HTMLBRElement:false,HTMLButtonElement:false,HTMLCanvasElement:false,HTMLDirectoryElement:false,HTMLDivElement:false,HTMLDListElement:false,HTMLFieldSetElement:false,HTMLFontElement:false,HTMLFormElement:false,HTMLFrameElement:false,HTMLFrameSetElement:false,HTMLHeadElement:false,HTMLHeadingElement:false,HTMLHRElement:false,HTMLHtmlElement:false,HTMLIFrameElement:false,HTMLImageElement:false,HTMLInputElement:false,HTMLIsIndexElement:false,HTMLLabelElement:false,HTMLLayerElement:false,HTMLLegendElement:false,HTMLLIElement:false,HTMLLinkElement:false,HTMLMapElement:false,HTMLMenuElement:false,HTMLMetaElement:false,HTMLModElement:false,HTMLObjectElement:false,HTMLOListElement:false,HTMLOptGroupElement:false,HTMLOptionElement:false,HTMLParagraphElement:false,HTMLParamElement:false,HTMLPreElement:false,HTMLQuoteElement:false,HTMLScriptElement:false,HTMLSelectElement:false,HTMLStyleElement:false,HTMLTableCaptionElement:false,HTMLTableCellElement:false,HTMLTableColElement:false,HTMLTableElement:false,HTMLTableRowElement:false,HTMLTableSectionElement:false,HTMLTextAreaElement:false,HTMLTitleElement:false,HTMLUListElement:false,HTMLVideoElement:false,history:false,Image:false,length:false,localStorage:false,location:false,MessageChannel:false,MessageEvent:false,MessagePort:false,MouseEvent:false,moveBy:false,moveTo:false,MutationObserver:false,name:false,Node:false,NodeFilter:false,navigator:false,onbeforeunload:true,onblur:true,onerror:true,onfocus:true,onload:true,onresize:true,onunload:true,open:false,openDatabase:false,opener:false,Option:false,parent:false,print:false,removeEventListener:false,resizeBy:false,resizeTo:false,screen:false,scroll:false,scrollBy:false,scrollTo:false,sessionStorage:false,setInterval:false,setTimeout:false,SharedWorker:false,status:false,SVGAElement:false,SVGAltGlyphDefElement:false,SVGAltGlyphElement:false,SVGAltGlyphItemElement:false,SVGAngle:false,SVGAnimateColorElement:false,SVGAnimateElement:false,SVGAnimateMotionElement:false,SVGAnimateTransformElement:false,SVGAnimatedAngle:false,SVGAnimatedBoolean:false,SVGAnimatedEnumeration:false,SVGAnimatedInteger:false,SVGAnimatedLength:false,SVGAnimatedLengthList:false,SVGAnimatedNumber:false,SVGAnimatedNumberList:false,SVGAnimatedPathData:false,SVGAnimatedPoints:false,SVGAnimatedPreserveAspectRatio:false,SVGAnimatedRect:false,SVGAnimatedString:false,SVGAnimatedTransformList:false,SVGAnimationElement:false,SVGCSSRule:false,SVGCircleElement:false,SVGClipPathElement:false,SVGColor:false,SVGColorProfileElement:false,SVGColorProfileRule:false,SVGComponentTransferFunctionElement:false,SVGCursorElement:false,SVGDefsElement:false,SVGDescElement:false,SVGDocument:false,SVGElement:false,SVGElementInstance:false,SVGElementInstanceList:false,SVGEllipseElement:false,SVGExternalResourcesRequired:false,SVGFEBlendElement:false,SVGFEColorMatrixElement:false,SVGFEComponentTransferElement:false,SVGFECompositeElement:false,SVGFEConvolveMatrixElement:false,SVGFEDiffuseLightingElement:false,SVGFEDisplacementMapElement:false,SVGFEDistantLightElement:false,SVGFEFloodElement:false,SVGFEFuncAElement:false,SVGFEFuncBElement:false,SVGFEFuncGElement:false,SVGFEFuncRElement:false,SVGFEGaussianBlurElement:false,SVGFEImageElement:false,SVGFEMergeElement:false,SVGFEMergeNodeElement:false,SVGFEMorphologyElement:false,SVGFEOffsetElement:false,SVGFEPointLightElement:false,SVGFESpecularLightingElement:false,SVGFESpotLightElement:false,SVGFETileElement:false,SVGFETurbulenceElement:false,SVGFilterElement:false,SVGFilterPrimitiveStandardAttributes:false,SVGFitToViewBox:false,SVGFontElement:false,SVGFontFaceElement:false,SVGFontFaceFormatElement:false,SVGFontFaceNameElement:false,SVGFontFaceSrcElement:false,SVGFontFaceUriElement:false,SVGForeignObjectElement:false,SVGGElement:false,SVGGlyphElement:false,SVGGlyphRefElement:false,SVGGradientElement:false,SVGHKernElement:false,SVGICCColor:false,SVGImageElement:false,SVGLangSpace:false,SVGLength:false,SVGLengthList:false,SVGLineElement:false,SVGLinearGradientElement:false,SVGLocatable:false,SVGMPathElement:false,SVGMarkerElement:false,SVGMaskElement:false,SVGMatrix:false,SVGMetadataElement:false,SVGMissingGlyphElement:false,SVGNumber:false,SVGNumberList:false,SVGPaint:false,SVGPathElement:false,SVGPathSeg:false,SVGPathSegArcAbs:false,SVGPathSegArcRel:false,SVGPathSegClosePath:false,SVGPathSegCurvetoCubicAbs:false,SVGPathSegCurvetoCubicRel:false,SVGPathSegCurvetoCubicSmoothAbs:false,SVGPathSegCurvetoCubicSmoothRel:false,SVGPathSegCurvetoQuadraticAbs:false,SVGPathSegCurvetoQuadraticRel:false,SVGPathSegCurvetoQuadraticSmoothAbs:false,SVGPathSegCurvetoQuadraticSmoothRel:false,SVGPathSegLinetoAbs:false,SVGPathSegLinetoHorizontalAbs:false,SVGPathSegLinetoHorizontalRel:false,SVGPathSegLinetoRel:false,SVGPathSegLinetoVerticalAbs:false,SVGPathSegLinetoVerticalRel:false,SVGPathSegList:false,SVGPathSegMovetoAbs:false,SVGPathSegMovetoRel:false,SVGPatternElement:false,SVGPoint:false,SVGPointList:false,SVGPolygonElement:false,SVGPolylineElement:false,SVGPreserveAspectRatio:false,SVGRadialGradientElement:false,SVGRect:false,SVGRectElement:false,SVGRenderingIntent:false,SVGSVGElement:false,SVGScriptElement:false,SVGSetElement:false,SVGStopElement:false,SVGStringList:false,SVGStylable:false,SVGStyleElement:false,SVGSwitchElement:false,SVGSymbolElement:false,SVGTRefElement:false,SVGTSpanElement:false,SVGTests:false,SVGTextContentElement:false,SVGTextElement:false,SVGTextPathElement:false,SVGTextPositioningElement:false,SVGTitleElement:false,SVGTransform:false,SVGTransformList:false,SVGTransformable:false,SVGURIReference:false,SVGUnitTypes:false,SVGUseElement:false,SVGVKernElement:false,SVGViewElement:false,SVGViewSpec:false,SVGZoomAndPan:false,TimeEvent:false,top:false,URL:false,WebSocket:false,window:false,Worker:false,XMLHttpRequest:false,XMLSerializer:false,XPathEvaluator:false,XPathException:false,XPathExpression:false,XPathNamespace:false,XPathNSResolver:false,XPathResult:false}
n.devel={alert:false,confirm:false,console:false,Debug:false,opera:false,prompt:false}
n.worker={importScripts:true,postMessage:true,self:true}
n.nonstandard={escape:false,unescape:false}
n.couch={require:false,respond:false,getRow:false,emit:false,send:false,start:false,sum:false,log:false,exports:false,module:false,provides:false}
n.node={__filename:false,__dirname:false,GLOBAL:false,global:false,module:false,require:false,Buffer:true,console:true,exports:true,process:true,setTimeout:true,clearTimeout:true,setInterval:true,clearInterval:true,setImmediate:true,clearImmediate:true}
n.phantom={phantom:true,require:true,WebPage:true,console:true,exports:true}
n.rhino={defineClass:false,deserialize:false,gc:false,help:false,importPackage:false,java:false,load:false,loadClass:false,print:false,quit:false,readFile:false,readUrl:false,runCommand:false,seal:false,serialize:false,spawn:false,sync:false,toint32:false,version:false}
n.shelljs={target:false,echo:false,exit:false,cd:false,pwd:false,ls:false,find:false,cp:false,rm:false,mv:false,mkdir:false,test:false,cat:false,sed:false,grep:false,which:false,dirs:false,pushd:false,popd:false,env:false,exec:false,chmod:false,config:false,error:false,tempdir:false}
n.typed={ArrayBuffer:false,ArrayBufferView:false,DataView:false,Float32Array:false,Float64Array:false,Int16Array:false,Int32Array:false,Int8Array:false,Uint16Array:false,Uint32Array:false,Uint8Array:false,Uint8ClampedArray:false}
n.wsh={ActiveXObject:true,Enumerator:true,GetObject:true,ScriptEngine:true,ScriptEngineBuildVersion:true,ScriptEngineMajorVersion:true,ScriptEngineMinorVersion:true,VBArray:true,WSH:true,WScript:true,XDomainRequest:true}
n.dojo={dojo:false,dijit:false,dojox:false,define:false,require:false}
n.jquery={$:false,jQuery:false}
n.mootools={$:false,$$:false,Asset:false,Browser:false,Chain:false,Class:false,Color:false,Cookie:false,Core:false,Document:false,DomReady:false,DOMEvent:false,DOMReady:false,Drag:false,Element:false,Elements:false,Event:false,Events:false,Fx:false,Group:false,Hash:false,HtmlTable:false,Iframe:false,IframeShim:false,InputValidator:false,instanceOf:false,Keyboard:false,Locale:false,Mask:false,MooTools:false,Native:false,Options:false,OverText:false,Request:false,Scroller:false,Slick:false,Slider:false,Sortables:false,Spinner:false,Swiff:false,Tips:false,Type:false,typeOf:false,URI:false,Window:false}
n.prototypejs={$:false,$$:false,$A:false,$F:false,$H:false,$R:false,$break:false,$continue:false,$w:false,Abstract:false,Ajax:false,Class:false,Enumerable:false,Element:false,Event:false,Field:false,Form:false,Hash:false,Insertion:false,ObjectRange:false,PeriodicalExecuter:false,Position:false,Prototype:false,Selector:false,Template:false,Toggle:false,Try:false,Autocompleter:false,Builder:false,Control:false,Draggable:false,Draggables:false,Droppables:false,Effect:false,Sortable:false,SortableObserver:false,Sound:false,Scriptaculous:false}
n.yui={YUI:false,Y:false,YUI_config:false}},{}]},{},["fNbQ4d"])
JSHINT=e("jshint").JSHINT
if(typeof exports==="object"&&exports)exports.JSHINT=JSHINT})();(function(e,t){"use strict"
if(typeof define==="function"&&define.amd){define(["exports"],t)}else if(typeof exports!=="undefined"){t(exports)}else{t(e.esprima={})}})(this,function(e){"use strict"
var t,n,r,i,a,s,o,l,u,f,c,h,p,m,d,g,v,y
t={BooleanLiteral:1,EOF:2,Identifier:3,Keyword:4,NullLiteral:5,NumericLiteral:6,Punctuator:7,StringLiteral:8,RegularExpression:9}
n={}
n[t.BooleanLiteral]="Boolean"
n[t.EOF]="<end>"
n[t.Identifier]="Identifier"
n[t.Keyword]="Keyword"
n[t.NullLiteral]="Null"
n[t.NumericLiteral]="Numeric"
n[t.Punctuator]="Punctuator"
n[t.StringLiteral]="String"
n[t.RegularExpression]="RegularExpression"
r=["(","{","[","in","typeof","instanceof","new","return","case","delete","throw","void","=","+=","-=","*=","/=","%=","<<=",">>=",">>>=","&=","|=","^=",",","+","-","*","/","%","++","--","<<",">>",">>>","&","|","^","!","~","&&","||","?",":","===","==",">=","<=","<",">","!=","!=="]
i={AssignmentExpression:"AssignmentExpression",ArrayExpression:"ArrayExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DoWhileStatement:"DoWhileStatement",DebuggerStatement:"DebuggerStatement",EmptyStatement:"EmptyStatement",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",Identifier:"Identifier",IfStatement:"IfStatement",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",Program:"Program",Property:"Property",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement"}
a={Data:1,Get:2,Set:4}
s={UnexpectedToken:"Unexpected token %0",UnexpectedNumber:"Unexpected number",UnexpectedString:"Unexpected string",UnexpectedIdentifier:"Unexpected identifier",UnexpectedReserved:"Unexpected reserved word",UnexpectedEOS:"Unexpected end of input",NewlineAfterThrow:"Illegal newline after throw",InvalidRegExp:"Invalid regular expression",UnterminatedRegExp:"Invalid regular expression: missing /",InvalidLHSInAssignment:"Invalid left-hand side in assignment",InvalidLHSInForIn:"Invalid left-hand side in for-in",MultipleDefaultsInSwitch:"More than one default clause in switch statement",NoCatchOrFinally:"Missing catch or finally after try",UnknownLabel:"Undefined label '%0'",Redeclaration:"%0 '%1' has already been declared",IllegalContinue:"Illegal continue statement",IllegalBreak:"Illegal break statement",IllegalReturn:"Illegal return statement",StrictModeWith:"Strict mode code may not include a with statement",StrictCatchVariable:"Catch variable may not be eval or arguments in strict mode",StrictVarName:"Variable name may not be eval or arguments in strict mode",StrictParamName:"Parameter name eval or arguments is not allowed in strict mode",StrictParamDupe:"Strict mode function may not have duplicate parameter names",StrictFunctionName:"Function name may not be eval or arguments in strict mode",StrictOctalLiteral:"Octal literals are not allowed in strict mode.",StrictDelete:"Delete of an unqualified identifier in strict mode.",StrictDuplicateProperty:"Duplicate data property in object literal not allowed in strict mode",AccessorDataProperty:"Object literal may not have data and accessor property with the same name",AccessorGetSet:"Object literal may not have multiple get/set accessors with the same name",StrictLHSAssignment:"Assignment to eval or arguments is not allowed in strict mode",StrictLHSPostfix:"Postfix increment/decrement may not have eval or arguments operand in strict mode",StrictLHSPrefix:"Prefix increment/decrement may not have eval or arguments operand in strict mode",StrictReservedWord:"Use of future reserved word in strict mode"}
o={NonAsciiIdentifierStart:new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"),NonAsciiIdentifierPart:new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԧԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠࢢ-ࢬࣤ-ࣾऀ-ॣ०-९ॱ-ॷॹ-ॿঁ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఁ-ఃఅ-ఌఎ-ఐఒ-నప-ళవ-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤜᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶᴀ-ᷦ᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚗꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺꩻꪀ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︦︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]")}
function b(e,t){if(!e){throw new Error("ASSERT: "+t)}}function x(e){return e>=48&&e<=57}function k(e){return"0123456789abcdefABCDEF".indexOf(e)>=0}function w(e){return"01234567".indexOf(e)>=0}function E(e){return e===32||e===9||e===11||e===12||e===160||e>=5760&&" ᠎             　﻿".indexOf(String.fromCharCode(e))>0}function S(e){return e===10||e===13||e===8232||e===8233}function A(e){return e===36||e===95||e>=65&&e<=90||e>=97&&e<=122||e===92||e>=128&&o.NonAsciiIdentifierStart.test(String.fromCharCode(e))}function _(e){return e===36||e===95||e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===92||e>=128&&o.NonAsciiIdentifierPart.test(String.fromCharCode(e))}function C(e){switch(e){case"class":case"enum":case"export":case"extends":case"import":case"super":return true
default:return false}}function T(e){switch(e){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"yield":case"let":return true
default:return false}}function I(e){return e==="eval"||e==="arguments"}function P(e){if(f&&T(e)){return true}switch(e.length){case 2:return e==="if"||e==="in"||e==="do"
case 3:return e==="var"||e==="for"||e==="new"||e==="try"||e==="let"
case 4:return e==="this"||e==="else"||e==="case"||e==="void"||e==="with"||e==="enum"
case 5:return e==="while"||e==="break"||e==="catch"||e==="throw"||e==="const"||e==="yield"||e==="class"||e==="super"
case 6:return e==="return"||e==="typeof"||e==="delete"||e==="switch"||e==="export"||e==="import"
case 7:return e==="default"||e==="finally"||e==="extends"
case 8:return e==="function"||e==="continue"||e==="debugger"
case 10:return e==="instanceof"
default:return false}}function L(e,t,n,r,i){var a
b(typeof n==="number","Comment must have valid position")
if(v.lastCommentStart>=n){return}v.lastCommentStart=n
a={type:e,value:t}
if(y.range){a.range=[n,r]}if(y.loc){a.loc=i}y.comments.push(a)}function R(){var e,t,n,r
e=c-2
t={start:{line:h,column:c-p-2}}
while(c<m){n=u.charCodeAt(c);++c
if(S(n)){if(y.comments){r=u.slice(e+2,c-1)
t.end={line:h,column:c-p-1}
L("Line",r,e,c-1,t)}if(n===13&&u.charCodeAt(c)===10){++c}++h
p=c
return}}if(y.comments){r=u.slice(e+2,c)
t.end={line:h,column:c-p}
L("Line",r,e,c,t)}}function O(){var e,t,n,r
if(y.comments){e=c-2
t={start:{line:h,column:c-p-2}}}while(c<m){n=u.charCodeAt(c)
if(S(n)){if(n===13&&u.charCodeAt(c+1)===10){++c}++h;++c
p=c
if(c>=m){et({},s.UnexpectedToken,"ILLEGAL")}}else if(n===42){if(u.charCodeAt(c+1)===47){++c;++c
if(y.comments){r=u.slice(e+2,c-2)
t.end={line:h,column:c-p}
L("Block",r,e,c,t)}return}++c}else{++c}}et({},s.UnexpectedToken,"ILLEGAL")}function M(){var e
while(c<m){e=u.charCodeAt(c)
if(E(e)){++c}else if(S(e)){++c
if(e===13&&u.charCodeAt(c)===10){++c}++h
p=c}else if(e===47){e=u.charCodeAt(c+1)
if(e===47){++c;++c
R()}else if(e===42){++c;++c
O()}else{break}}else{break}}}function N(e){var t,n,r,i=0
n=e==="u"?4:2
for(t=0;t<n;++t){if(c<m&&k(u[c])){r=u[c++]
i=i*16+"0123456789abcdef".indexOf(r.toLowerCase())}else{return""}}return String.fromCharCode(i)}function D(){var e,t
e=u.charCodeAt(c++)
t=String.fromCharCode(e)
if(e===92){if(u.charCodeAt(c)!==117){et({},s.UnexpectedToken,"ILLEGAL")}++c
e=N("u")
if(!e||e==="\\"||!A(e.charCodeAt(0))){et({},s.UnexpectedToken,"ILLEGAL")}t=e}while(c<m){e=u.charCodeAt(c)
if(!_(e)){break}++c
t+=String.fromCharCode(e)
if(e===92){t=t.substr(0,t.length-1)
if(u.charCodeAt(c)!==117){et({},s.UnexpectedToken,"ILLEGAL")}++c
e=N("u")
if(!e||e==="\\"||!_(e.charCodeAt(0))){et({},s.UnexpectedToken,"ILLEGAL")}t+=e}}return t}function F(){var e,t
e=c++
while(c<m){t=u.charCodeAt(c)
if(t===92){c=e
return D()}if(_(t)){++c}else{break}}return u.slice(e,c)}function W(){var e,n,r
e=c
n=u.charCodeAt(c)===92?D():F()
if(n.length===1){r=t.Identifier}else if(P(n)){r=t.Keyword}else if(n==="null"){r=t.NullLiteral}else if(n==="true"||n==="false"){r=t.BooleanLiteral}else{r=t.Identifier}return{type:r,value:n,lineNumber:h,lineStart:p,range:[e,c]}}function B(){var e=c,n=u.charCodeAt(c),r,i=u[c],a,o,l
switch(n){case 46:case 40:case 41:case 59:case 44:case 123:case 125:case 91:case 93:case 58:case 63:case 126:++c
if(y.tokenize){if(n===40){y.openParenToken=y.tokens.length}else if(n===123){y.openCurlyToken=y.tokens.length}}return{type:t.Punctuator,value:String.fromCharCode(n),lineNumber:h,lineStart:p,range:[e,c]}
default:r=u.charCodeAt(c+1)
if(r===61){switch(n){case 37:case 38:case 42:case 43:case 45:case 47:case 60:case 62:case 94:case 124:c+=2
return{type:t.Punctuator,value:String.fromCharCode(n)+String.fromCharCode(r),lineNumber:h,lineStart:p,range:[e,c]}
case 33:case 61:c+=2
if(u.charCodeAt(c)===61){++c}return{type:t.Punctuator,value:u.slice(e,c),lineNumber:h,lineStart:p,range:[e,c]}
default:break}}break}a=u[c+1]
o=u[c+2]
l=u[c+3]
if(i===">"&&a===">"&&o===">"){if(l==="="){c+=4
return{type:t.Punctuator,value:">>>=",lineNumber:h,lineStart:p,range:[e,c]}}}if(i===">"&&a===">"&&o===">"){c+=3
return{type:t.Punctuator,value:">>>",lineNumber:h,lineStart:p,range:[e,c]}}if(i==="<"&&a==="<"&&o==="="){c+=3
return{type:t.Punctuator,value:"<<=",lineNumber:h,lineStart:p,range:[e,c]}}if(i===">"&&a===">"&&o==="="){c+=3
return{type:t.Punctuator,value:">>=",lineNumber:h,lineStart:p,range:[e,c]}}if(i===a&&"+-<>&|".indexOf(i)>=0){c+=2
return{type:t.Punctuator,value:i+a,lineNumber:h,lineStart:p,range:[e,c]}}if("<>=!+-*%&|^/".indexOf(i)>=0){++c
return{type:t.Punctuator,value:i,lineNumber:h,lineStart:p,range:[e,c]}}et({},s.UnexpectedToken,"ILLEGAL")}function G(e){var n=""
while(c<m){if(!k(u[c])){break}n+=u[c++]}if(n.length===0){et({},s.UnexpectedToken,"ILLEGAL")}if(A(u.charCodeAt(c))){et({},s.UnexpectedToken,"ILLEGAL")}return{type:t.NumericLiteral,value:parseInt("0x"+n,16),lineNumber:h,lineStart:p,range:[e,c]}}function V(e){var n="0"+u[c++]
while(c<m){if(!w(u[c])){break}n+=u[c++]}if(A(u.charCodeAt(c))||x(u.charCodeAt(c))){et({},s.UnexpectedToken,"ILLEGAL")}return{type:t.NumericLiteral,value:parseInt(n,8),octal:true,lineNumber:h,lineStart:p,range:[e,c]}}function U(){var e,n,r
r=u[c]
b(x(r.charCodeAt(0))||r===".","Numeric literal must start with a decimal digit or a decimal point")
n=c
e=""
if(r!=="."){e=u[c++]
r=u[c]
if(e==="0"){if(r==="x"||r==="X"){++c
return G(n)}if(w(r)){return V(n)}if(r&&x(r.charCodeAt(0))){et({},s.UnexpectedToken,"ILLEGAL")}}while(x(u.charCodeAt(c))){e+=u[c++]}r=u[c]}if(r==="."){e+=u[c++]
while(x(u.charCodeAt(c))){e+=u[c++]}r=u[c]}if(r==="e"||r==="E"){e+=u[c++]
r=u[c]
if(r==="+"||r==="-"){e+=u[c++]}if(x(u.charCodeAt(c))){while(x(u.charCodeAt(c))){e+=u[c++]}}else{et({},s.UnexpectedToken,"ILLEGAL")}}if(A(u.charCodeAt(c))){et({},s.UnexpectedToken,"ILLEGAL")}return{type:t.NumericLiteral,value:parseFloat(e),lineNumber:h,lineStart:p,range:[n,c]}}function z(){var e="",n,r,i,a,o,l,f=false
n=u[c]
b(n==="'"||n==='"',"String literal must starts with a quote")
r=c;++c
while(c<m){i=u[c++]
if(i===n){n=""
break}else if(i==="\\"){i=u[c++]
if(!i||!S(i.charCodeAt(0))){switch(i){case"n":e+="\n"
break
case"r":e+="\r"
break
case"t":e+="	"
break
case"u":case"x":l=c
o=N(i)
if(o){e+=o}else{c=l
e+=i}break
case"b":e+="\b"
break
case"f":e+="\f"
break
case"v":e+=""
break
default:if(w(i)){a="01234567".indexOf(i)
if(a!==0){f=true}if(c<m&&w(u[c])){f=true
a=a*8+"01234567".indexOf(u[c++])
if("0123".indexOf(i)>=0&&c<m&&w(u[c])){a=a*8+"01234567".indexOf(u[c++])}}e+=String.fromCharCode(a)}else{e+=i}break}}else{++h
if(i==="\r"&&u[c]==="\n"){++c}}}else if(S(i.charCodeAt(0))){break}else{e+=i}}if(n!==""){et({},s.UnexpectedToken,"ILLEGAL")}return{type:t.StringLiteral,value:e,octal:f,lineNumber:h,lineStart:p,range:[r,c]}}function j(){var e,n,r,i,a,o,l=false,f,d=false
g=null
M()
r=c
n=u[c]
b(n==="/","Regular expression literal must start with a slash")
e=u[c++]
while(c<m){n=u[c++]
e+=n
if(l){if(n==="]"){l=false}}else{if(n==="\\"){n=u[c++]
if(S(n.charCodeAt(0))){et({},s.UnterminatedRegExp)}e+=n}else if(n==="/"){d=true
break}else if(n==="["){l=true}else if(S(n.charCodeAt(0))){et({},s.UnterminatedRegExp)}}}if(!d){et({},s.UnterminatedRegExp)}i=e.substr(1,e.length-2)
a=""
while(c<m){n=u[c]
if(!_(n.charCodeAt(0))){break}++c
if(n==="\\"&&c<m){n=u[c]
if(n==="u"){++c
f=c
n=N("u")
if(n){a+=n
for(e+="\\u";f<c;++f){e+=u[f]}}else{c=f
a+="u"
e+="\\u"}}else{e+="\\"}}else{a+=n
e+=n}}try{o=new RegExp(i,a)}catch(v){et({},s.InvalidRegExp)}J()
if(y.tokenize){return{type:t.RegularExpression,value:o,lineNumber:h,lineStart:p,range:[r,c]}}return{literal:e,value:o,range:[r,c]}}function H(){var e,t,n,r
M()
e=c
t={start:{line:h,column:c-p}}
n=j()
t.end={line:h,column:c-p}
if(!y.tokenize){if(y.tokens.length>0){r=y.tokens[y.tokens.length-1]
if(r.range[0]===e&&r.type==="Punctuator"){if(r.value==="/"||r.value==="/="){y.tokens.pop()}}}y.tokens.push({type:"RegularExpression",value:n.literal,range:[e,c],loc:t})}return n}function q(e){return e.type===t.Identifier||e.type===t.Keyword||e.type===t.BooleanLiteral||e.type===t.NullLiteral}function K(){var e,t
e=y.tokens[y.tokens.length-1]
if(!e){return H()}if(e.type==="Punctuator"){if(e.value===")"){t=y.tokens[y.openParenToken-1]
if(t&&t.type==="Keyword"&&(t.value==="if"||t.value==="while"||t.value==="for"||t.value==="with")){return H()}return B()}if(e.value==="}"){if(y.tokens[y.openCurlyToken-3]&&y.tokens[y.openCurlyToken-3].type==="Keyword"){t=y.tokens[y.openCurlyToken-4]
if(!t){return B()}}else if(y.tokens[y.openCurlyToken-4]&&y.tokens[y.openCurlyToken-4].type==="Keyword"){t=y.tokens[y.openCurlyToken-5]
if(!t){return H()}}else{return B()}if(r.indexOf(t.value)>=0){return B()}return H()}return H()}if(e.type==="Keyword"){return H()}return B()}function X(){var e
M()
if(c>=m){return{type:t.EOF,lineNumber:h,lineStart:p,range:[c,c]}}e=u.charCodeAt(c)
if(e===40||e===41||e===58){return B()}if(e===39||e===34){return z()}if(A(e)){return W()}if(e===46){if(x(u.charCodeAt(c+1))){return U()}return B()}if(x(e)){return U()}if(y.tokenize&&e===47){return K()}return B()}function Y(){var e,r,i,a,s
M()
e=c
r={start:{line:h,column:c-p}}
i=X()
r.end={line:h,column:c-p}
if(i.type!==t.EOF){a=[i.range[0],i.range[1]]
s=u.slice(i.range[0],i.range[1])
y.tokens.push({type:n[i.type],value:s,range:a,loc:r})}return i}function Z(){var e
e=g
c=e.range[1]
h=e.lineNumber
p=e.lineStart
g=typeof y.tokens!=="undefined"?Y():X()
c=e.range[1]
h=e.lineNumber
p=e.lineStart
return e}function J(){var e,t,n
e=c
t=h
n=p
g=typeof y.tokens!=="undefined"?Y():X()
c=e
h=t
p=n}l={name:"SyntaxTree",markStart:function(){if(y.loc){v.markerStack.push(c-p)
v.markerStack.push(h)}if(y.range){v.markerStack.push(c)}},markEnd:function(e){if(y.range){e.range=[v.markerStack.pop(),c]}if(y.loc){e.loc={start:{line:v.markerStack.pop(),column:v.markerStack.pop()},end:{line:h,column:c-p}}
this.postProcess(e)}return e},markEndIf:function(e){if(e.range||e.loc){if(y.loc){v.markerStack.pop()
v.markerStack.pop()}if(y.range){v.markerStack.pop()}}else{this.markEnd(e)}return e},postProcess:function(e){if(y.source){e.loc.source=y.source}return e},createArrayExpression:function(e){return{type:i.ArrayExpression,elements:e}},createAssignmentExpression:function(e,t,n){return{type:i.AssignmentExpression,operator:e,left:t,right:n}},createBinaryExpression:function(e,t,n){var r=e==="||"||e==="&&"?i.LogicalExpression:i.BinaryExpression
return{type:r,operator:e,left:t,right:n}},createBlockStatement:function(e){return{type:i.BlockStatement,body:e}},createBreakStatement:function(e){return{type:i.BreakStatement,label:e}},createCallExpression:function(e,t){return{type:i.CallExpression,callee:e,arguments:t}},createCatchClause:function(e,t){return{type:i.CatchClause,param:e,body:t}},createConditionalExpression:function(e,t,n){return{type:i.ConditionalExpression,test:e,consequent:t,alternate:n}},createContinueStatement:function(e){return{type:i.ContinueStatement,label:e}},createDebuggerStatement:function(){return{type:i.DebuggerStatement}},createDoWhileStatement:function(e,t){return{type:i.DoWhileStatement,body:e,test:t}},createEmptyStatement:function(){return{type:i.EmptyStatement}},createExpressionStatement:function(e){return{type:i.ExpressionStatement,expression:e}},createForStatement:function(e,t,n,r){return{type:i.ForStatement,init:e,test:t,update:n,body:r}},createForInStatement:function(e,t,n){return{type:i.ForInStatement,left:e,right:t,body:n,each:false}},createFunctionDeclaration:function(e,t,n,r){return{type:i.FunctionDeclaration,id:e,params:t,defaults:n,body:r,rest:null,generator:false,expression:false}},createFunctionExpression:function(e,t,n,r){return{type:i.FunctionExpression,id:e,params:t,defaults:n,body:r,rest:null,generator:false,expression:false}},createIdentifier:function(e){return{type:i.Identifier,name:e}},createIfStatement:function(e,t,n){return{type:i.IfStatement,test:e,consequent:t,alternate:n}},createLabeledStatement:function(e,t){return{type:i.LabeledStatement,label:e,body:t}},createLiteral:function(e){return{type:i.Literal,value:e.value,raw:u.slice(e.range[0],e.range[1])}},createMemberExpression:function(e,t,n){return{type:i.MemberExpression,computed:e==="[",object:t,property:n}},createNewExpression:function(e,t){return{type:i.NewExpression,callee:e,arguments:t}},createObjectExpression:function(e){return{type:i.ObjectExpression,properties:e}},createPostfixExpression:function(e,t){return{type:i.UpdateExpression,operator:e,argument:t,prefix:false}},createProgram:function(e){return{type:i.Program,body:e}},createProperty:function(e,t,n){return{type:i.Property,key:t,value:n,kind:e}},createReturnStatement:function(e){return{type:i.ReturnStatement,argument:e}},createSequenceExpression:function(e){return{type:i.SequenceExpression,expressions:e}},createSwitchCase:function(e,t){return{type:i.SwitchCase,test:e,consequent:t}},createSwitchStatement:function(e,t){return{type:i.SwitchStatement,discriminant:e,cases:t}},createThisExpression:function(){return{type:i.ThisExpression}},createThrowStatement:function(e){return{type:i.ThrowStatement,argument:e}},createTryStatement:function(e,t,n,r){return{type:i.TryStatement,block:e,guardedHandlers:t,handlers:n,finalizer:r}},createUnaryExpression:function(e,t){if(e==="++"||e==="--"){return{type:i.UpdateExpression,operator:e,argument:t,prefix:true}}return{type:i.UnaryExpression,operator:e,argument:t,prefix:true}},createVariableDeclaration:function(e,t){return{type:i.VariableDeclaration,declarations:e,kind:t}},createVariableDeclarator:function(e,t){return{type:i.VariableDeclarator,id:e,init:t}},createWhileStatement:function(e,t){return{type:i.WhileStatement,test:e,body:t}},createWithStatement:function(e,t){return{type:i.WithStatement,object:e,body:t}}}
function Q(){var e,t,n,r
e=c
t=h
n=p
M()
r=h!==t
c=e
h=t
p=n
return r}function et(e,t){var n,r=Array.prototype.slice.call(arguments,2),i=t.replace(/%(\d)/g,function(e,t){b(t<r.length,"Message reference must be in range")
return r[t]})
if(typeof e.lineNumber==="number"){n=new Error("Line "+e.lineNumber+": "+i)
n.index=e.range[0]
n.lineNumber=e.lineNumber
n.column=e.range[0]-p+1}else{n=new Error("Line "+h+": "+i)
n.index=c
n.lineNumber=h
n.column=c-p+1}n.description=i
throw n}function tt(){try{et.apply(null,arguments)}catch(e){if(y.errors){y.errors.push(e)}else{throw e}}}function nt(e){if(e.type===t.EOF){et(e,s.UnexpectedEOS)}if(e.type===t.NumericLiteral){et(e,s.UnexpectedNumber)}if(e.type===t.StringLiteral){et(e,s.UnexpectedString)}if(e.type===t.Identifier){et(e,s.UnexpectedIdentifier)}if(e.type===t.Keyword){if(C(e.value)){et(e,s.UnexpectedReserved)}else if(f&&T(e.value)){tt(e,s.StrictReservedWord)
return}et(e,s.UnexpectedToken,e.value)}et(e,s.UnexpectedToken,e.value)}function rt(e){var n=Z()
if(n.type!==t.Punctuator||n.value!==e){nt(n)}}function it(e){var n=Z()
if(n.type!==t.Keyword||n.value!==e){nt(n)}}function at(e){return g.type===t.Punctuator&&g.value===e}function st(e){return g.type===t.Keyword&&g.value===e}function ot(){var e
if(g.type!==t.Punctuator){return false}e=g.value
return e==="="||e==="*="||e==="/="||e==="%="||e==="+="||e==="-="||e==="<<="||e===">>="||e===">>>="||e==="&="||e==="^="||e==="|="}function lt(){var e
if(u.charCodeAt(c)===59){Z()
return}e=h
M()
if(h!==e){return}if(at(";")){Z()
return}if(g.type!==t.EOF&&!at("}")){nt(g)}}function ut(e){return e.type===i.Identifier||e.type===i.MemberExpression}function ft(){var e=[]
rt("[")
while(!at("]")){if(at(",")){Z()
e.push(null)}else{e.push(It())
if(!at("]")){rt(",")}}}rt("]")
return d.createArrayExpression(e)}function ct(e,t){var n,r
n=f
M()
d.markStart()
r=nn()
if(t&&f&&I(e[0].name)){tt(t,s.StrictParamName)}f=n
return d.markEnd(d.createFunctionExpression(null,e,[],r))}function ht(){var e
M()
d.markStart()
e=Z()
if(e.type===t.StringLiteral||e.type===t.NumericLiteral){if(f&&e.octal){tt(e,s.StrictOctalLiteral)}return d.markEnd(d.createLiteral(e))}return d.markEnd(d.createIdentifier(e.value))}function pt(){var e,n,r,i,a
e=g
M()
d.markStart()
if(e.type===t.Identifier){r=ht()
if(e.value==="get"&&!at(":")){n=ht()
rt("(")
rt(")")
i=ct([])
return d.markEnd(d.createProperty("get",n,i))}if(e.value==="set"&&!at(":")){n=ht()
rt("(")
e=g
if(e.type!==t.Identifier){rt(")")
tt(e,s.UnexpectedToken,e.value)
i=ct([])}else{a=[Ot()]
rt(")")
i=ct(a,e)}return d.markEnd(d.createProperty("set",n,i))}rt(":")
i=It()
return d.markEnd(d.createProperty("init",r,i))}if(e.type===t.EOF||e.type===t.Punctuator){nt(e)}else{n=ht()
rt(":")
i=It()
return d.markEnd(d.createProperty("init",n,i))}}function mt(){var e=[],t,n,r,o,l={},u=String
rt("{")
while(!at("}")){t=pt()
if(t.key.type===i.Identifier){n=t.key.name}else{n=u(t.key.value)}o=t.kind==="init"?a.Data:t.kind==="get"?a.Get:a.Set
r="$"+n
if(Object.prototype.hasOwnProperty.call(l,r)){if(l[r]===a.Data){if(f&&o===a.Data){tt({},s.StrictDuplicateProperty)}else if(o!==a.Data){tt({},s.AccessorDataProperty)}}else{if(o===a.Data){tt({},s.AccessorDataProperty)}else if(l[r]&o){tt({},s.AccessorGetSet)}}l[r]|=o}else{l[r]=o}e.push(t)
if(!at("}")){rt(",")}}rt("}")
return d.createObjectExpression(e)}function dt(){var e
rt("(")
e=Pt()
rt(")")
return e}function gt(){var e,n,r
if(at("(")){return dt()}e=g.type
d.markStart()
if(e===t.Identifier){r=d.createIdentifier(Z().value)}else if(e===t.StringLiteral||e===t.NumericLiteral){if(f&&g.octal){tt(g,s.StrictOctalLiteral)}r=d.createLiteral(Z())}else if(e===t.Keyword){if(st("this")){Z()
r=d.createThisExpression()}else if(st("function")){r=sn()}}else if(e===t.BooleanLiteral){n=Z()
n.value=n.value==="true"
r=d.createLiteral(n)}else if(e===t.NullLiteral){n=Z()
n.value=null
r=d.createLiteral(n)}else if(at("[")){r=ft()}else if(at("{")){r=mt()}else if(at("/")||at("/=")){if(typeof y.tokens!=="undefined"){r=d.createLiteral(H())}else{r=d.createLiteral(j())}}if(r){return d.markEnd(r)}nt(Z())}function vt(){var e=[]
rt("(")
if(!at(")")){while(c<m){e.push(It())
if(at(")")){break}rt(",")}}rt(")")
return e}function yt(){var e
d.markStart()
e=Z()
if(!q(e)){nt(e)}return d.markEnd(d.createIdentifier(e.value))}function bt(){rt(".")
return yt()}function xt(){var e
rt("[")
e=Pt()
rt("]")
return e}function kt(){var e,t
d.markStart()
it("new")
e=Et()
t=at("(")?vt():[]
return d.markEnd(d.createNewExpression(e,t))}function wt(){var e,t,n,r
e=hn()
t=st("new")?kt():gt()
while(at(".")||at("[")||at("(")){if(at("(")){n=vt()
t=d.createCallExpression(t,n)}else if(at("[")){r=xt()
t=d.createMemberExpression("[",t,r)}else{r=bt()
t=d.createMemberExpression(".",t,r)}if(e){e.end()
e.apply(t)}}return t}function Et(){var e,t,n
e=hn()
t=st("new")?kt():gt()
while(at(".")||at("[")){if(at("[")){n=xt()
t=d.createMemberExpression("[",t,n)}else{n=bt()
t=d.createMemberExpression(".",t,n)}if(e){e.end()
e.apply(t)}}return t}function St(){var e,n
d.markStart()
e=wt()
if(g.type===t.Punctuator){if((at("++")||at("--"))&&!Q()){if(f&&e.type===i.Identifier&&I(e.name)){tt({},s.StrictLHSPostfix)}if(!ut(e)){et({},s.InvalidLHSInAssignment)}n=Z()
e=d.createPostfixExpression(n.value,e)}}return d.markEndIf(e)}function At(){var e,n
d.markStart()
if(g.type!==t.Punctuator&&g.type!==t.Keyword){n=St()}else if(at("++")||at("--")){e=Z()
n=At()
if(f&&n.type===i.Identifier&&I(n.name)){tt({},s.StrictLHSPrefix)}if(!ut(n)){et({},s.InvalidLHSInAssignment)}n=d.createUnaryExpression(e.value,n)}else if(at("+")||at("-")||at("~")||at("!")){e=Z()
n=At()
n=d.createUnaryExpression(e.value,n)}else if(st("delete")||st("void")||st("typeof")){e=Z()
n=At()
n=d.createUnaryExpression(e.value,n)
if(f&&n.operator==="delete"&&n.argument.type===i.Identifier){tt({},s.StrictDelete)}}else{n=St()}return d.markEndIf(n)}function _t(e,n){var r=0
if(e.type!==t.Punctuator&&e.type!==t.Keyword){return 0}switch(e.value){case"||":r=1
break
case"&&":r=2
break
case"|":r=3
break
case"^":r=4
break
case"&":r=5
break
case"==":case"!=":case"===":case"!==":r=6
break
case"<":case">":case"<=":case">=":case"instanceof":r=7
break
case"in":r=n?7:0
break
case"<<":case">>":case">>>":r=8
break
case"+":case"-":r=9
break
case"*":case"/":case"%":r=11
break
default:break}return r}function Ct(){var e,t,n,r,i,a,s,o,l,u,f
a=v.allowIn
v.allowIn=true
e=hn()
u=At()
r=g
i=_t(r,a)
if(i===0){return u}r.prec=i
Z()
t=[e,hn()]
o=At()
s=[u,r,o]
while((i=_t(g,a))>0){while(s.length>2&&i<=s[s.length-2].prec){o=s.pop()
l=s.pop().value
u=s.pop()
n=d.createBinaryExpression(l,u,o)
t.pop()
e=t.pop()
if(e){e.end()
e.apply(n)}s.push(n)
t.push(e)}r=Z()
r.prec=i
s.push(r)
t.push(hn())
n=At()
s.push(n)}v.allowIn=a
f=s.length-1
n=s[f]
t.pop()
while(f>1){n=d.createBinaryExpression(s[f-1].value,s[f-2],n)
f-=2
e=t.pop()
if(e){e.end()
e.apply(n)}}return n}function Tt(){var e,t,n,r
d.markStart()
e=Ct()
if(at("?")){Z()
t=v.allowIn
v.allowIn=true
n=It()
v.allowIn=t
rt(":")
r=It()
e=d.markEnd(d.createConditionalExpression(e,n,r))}else{d.markEnd({})}return e}function It(){var e,t,n,r
e=g
d.markStart()
r=t=Tt()
if(ot()){if(!ut(t)){et({},s.InvalidLHSInAssignment)}if(f&&t.type===i.Identifier&&I(t.name)){tt(e,s.StrictLHSAssignment)}e=Z()
n=It()
r=d.createAssignmentExpression(e.value,t,n)}return d.markEndIf(r)}function Pt(){var e
d.markStart()
e=It()
if(at(",")){e=d.createSequenceExpression([e])
while(c<m){if(!at(",")){break}Z()
e.expressions.push(It())}}return d.markEndIf(e)}function Lt(){var e=[],t
while(c<m){if(at("}")){break}t=on()
if(typeof t==="undefined"){break}e.push(t)}return e}function Rt(){var e
M()
d.markStart()
rt("{")
e=Lt()
rt("}")
return d.markEnd(d.createBlockStatement(e))}function Ot(){var e
M()
d.markStart()
e=Z()
if(e.type!==t.Identifier){nt(e)}return d.markEnd(d.createIdentifier(e.value))}function Mt(e){var t=null,n
M()
d.markStart()
n=Ot()
if(f&&I(n.name)){tt({},s.StrictVarName)}if(e==="const"){rt("=")
t=It()}else if(at("=")){Z()
t=It()}return d.markEnd(d.createVariableDeclarator(n,t))}function Nt(e){var t=[]
do{t.push(Mt(e))
if(!at(",")){break}Z()}while(c<m)
return t}function Dt(){var e
it("var")
e=Nt()
lt()
return d.createVariableDeclaration(e,"var")}function Ft(e){var t
M()
d.markStart()
it(e)
t=Nt(e)
lt()
return d.markEnd(d.createVariableDeclaration(t,e))}function Wt(){rt(";")
return d.createEmptyStatement()}function Bt(){var e=Pt()
lt()
return d.createExpressionStatement(e)}function Gt(){var e,t,n
it("if")
rt("(")
e=Pt()
rt(")")
t=tn()
if(st("else")){Z()
n=tn()}else{n=null}return d.createIfStatement(e,t,n)}function Vt(){var e,t,n
it("do")
n=v.inIteration
v.inIteration=true
e=tn()
v.inIteration=n
it("while")
rt("(")
t=Pt()
rt(")")
if(at(";")){Z()}return d.createDoWhileStatement(e,t)}function Ut(){var e,t,n
it("while")
rt("(")
e=Pt()
rt(")")
n=v.inIteration
v.inIteration=true
t=tn()
v.inIteration=n
return d.createWhileStatement(e,t)}function zt(){var e,t
d.markStart()
e=Z()
t=Nt()
return d.markEnd(d.createVariableDeclaration(t,e.value))}function jt(){var e,t,n,r,i,a,o
e=t=n=null
it("for")
rt("(")
if(at(";")){Z()}else{if(st("var")||st("let")){v.allowIn=false
e=zt()
v.allowIn=true
if(e.declarations.length===1&&st("in")){Z()
r=e
i=Pt()
e=null}}else{v.allowIn=false
e=Pt()
v.allowIn=true
if(st("in")){if(!ut(e)){et({},s.InvalidLHSInForIn)}Z()
r=e
i=Pt()
e=null}}if(typeof r==="undefined"){rt(";")}}if(typeof r==="undefined"){if(!at(";")){t=Pt()}rt(";")
if(!at(")")){n=Pt()}}rt(")")
o=v.inIteration
v.inIteration=true
a=tn()
v.inIteration=o
return typeof r==="undefined"?d.createForStatement(e,t,n,a):d.createForInStatement(r,i,a)}function $t(){var e=null,n
it("continue")
if(u.charCodeAt(c)===59){Z()
if(!v.inIteration){et({},s.IllegalContinue)}return d.createContinueStatement(null)}if(Q()){if(!v.inIteration){et({},s.IllegalContinue)}return d.createContinueStatement(null)}if(g.type===t.Identifier){e=Ot()
n="$"+e.name
if(!Object.prototype.hasOwnProperty.call(v.labelSet,n)){et({},s.UnknownLabel,e.name)}}lt()
if(e===null&&!v.inIteration){et({},s.IllegalContinue)}return d.createContinueStatement(e)}function Ht(){var e=null,n
it("break")
if(u.charCodeAt(c)===59){Z()
if(!(v.inIteration||v.inSwitch)){et({},s.IllegalBreak)}return d.createBreakStatement(null)}if(Q()){if(!(v.inIteration||v.inSwitch)){et({},s.IllegalBreak)}return d.createBreakStatement(null)}if(g.type===t.Identifier){e=Ot()
n="$"+e.name
if(!Object.prototype.hasOwnProperty.call(v.labelSet,n)){et({},s.UnknownLabel,e.name)}}lt()
if(e===null&&!(v.inIteration||v.inSwitch)){et({},s.IllegalBreak)}return d.createBreakStatement(e)}function qt(){var e=null
it("return")
if(!v.inFunctionBody){tt({},s.IllegalReturn)}if(u.charCodeAt(c)===32){if(A(u.charCodeAt(c+1))){e=Pt()
lt()
return d.createReturnStatement(e)}}if(Q()){return d.createReturnStatement(null)}if(!at(";")){if(!at("}")&&g.type!==t.EOF){e=Pt()}}lt()
return d.createReturnStatement(e)}function Kt(){var e,t
if(f){tt({},s.StrictModeWith)}it("with")
rt("(")
e=Pt()
rt(")")
t=tn()
return d.createWithStatement(e,t)}function Xt(){var e,t=[],n
M()
d.markStart()
if(st("default")){Z()
e=null}else{it("case")
e=Pt()}rt(":")
while(c<m){if(at("}")||st("default")||st("case")){break}n=tn()
t.push(n)}return d.markEnd(d.createSwitchCase(e,t))}function Yt(){var e,t,n,r,i
it("switch")
rt("(")
e=Pt()
rt(")")
rt("{")
if(at("}")){Z()
return d.createSwitchStatement(e)}t=[]
r=v.inSwitch
v.inSwitch=true
i=false
while(c<m){if(at("}")){break}n=Xt()
if(n.test===null){if(i){et({},s.MultipleDefaultsInSwitch)}i=true}t.push(n)}v.inSwitch=r
rt("}")
return d.createSwitchStatement(e,t)}function Zt(){var e
it("throw")
if(Q()){et({},s.NewlineAfterThrow)}e=Pt()
lt()
return d.createThrowStatement(e)}function Jt(){var e,t
M()
d.markStart()
it("catch")
rt("(")
if(at(")")){nt(g)}e=Ot()
if(f&&I(e.name)){tt({},s.StrictCatchVariable)}rt(")")
t=Rt()
return d.markEnd(d.createCatchClause(e,t))}function Qt(){var e,t=[],n=null
it("try")
e=Rt()
if(st("catch")){t.push(Jt())}if(st("finally")){Z()
n=Rt()}if(t.length===0&&!n){et({},s.NoCatchOrFinally)}return d.createTryStatement(e,[],t,n)}function en(){it("debugger")
lt()
return d.createDebuggerStatement()}function tn(){var e=g.type,n,r,a
if(e===t.EOF){nt(g)}M()
d.markStart()
if(e===t.Punctuator){switch(g.value){case";":return d.markEnd(Wt())
case"{":return d.markEnd(Rt())
case"(":return d.markEnd(Bt())
default:break}}if(e===t.Keyword){switch(g.value){case"break":return d.markEnd(Ht())
case"continue":return d.markEnd($t())
case"debugger":return d.markEnd(en())
case"do":return d.markEnd(Vt())
case"for":return d.markEnd(jt())
case"function":return d.markEnd(an())
case"if":return d.markEnd(Gt())
case"return":return d.markEnd(qt())
case"switch":return d.markEnd(Yt())
case"throw":return d.markEnd(Zt())
case"try":return d.markEnd(Qt())
case"var":return d.markEnd(Dt())
case"while":return d.markEnd(Ut())
case"with":return d.markEnd(Kt())
default:break}}n=Pt()
if(n.type===i.Identifier&&at(":")){Z()
a="$"+n.name
if(Object.prototype.hasOwnProperty.call(v.labelSet,a)){et({},s.Redeclaration,"Label",n.name)}v.labelSet[a]=true
r=tn()
delete v.labelSet[a]
return d.markEnd(d.createLabeledStatement(n,r))}lt()
return d.markEnd(d.createExpressionStatement(n))}function nn(){var e,n=[],r,a,o,l,h,p,y
M()
d.markStart()
rt("{")
while(c<m){if(g.type!==t.StringLiteral){break}r=g
e=on()
n.push(e)
if(e.expression.type!==i.Literal){break}a=u.slice(r.range[0]+1,r.range[1]-1)
if(a==="use strict"){f=true
if(o){tt(o,s.StrictOctalLiteral)}}else{if(!o&&r.octal){o=r}}}l=v.labelSet
h=v.inIteration
p=v.inSwitch
y=v.inFunctionBody
v.labelSet={}
v.inIteration=false
v.inSwitch=false
v.inFunctionBody=true
while(c<m){if(at("}")){break}e=on()
if(typeof e==="undefined"){break}n.push(e)}rt("}")
v.labelSet=l
v.inIteration=h
v.inSwitch=p
v.inFunctionBody=y
return d.markEnd(d.createBlockStatement(n))}function rn(e){var t,n=[],r,i,a,o,l
rt("(")
if(!at(")")){a={}
while(c<m){r=g
t=Ot()
o="$"+r.value
if(f){if(I(r.value)){i=r
l=s.StrictParamName}if(Object.prototype.hasOwnProperty.call(a,o)){i=r
l=s.StrictParamDupe}}else if(!e){if(I(r.value)){e=r
l=s.StrictParamName}else if(T(r.value)){e=r
l=s.StrictReservedWord}else if(Object.prototype.hasOwnProperty.call(a,o)){e=r
l=s.StrictParamDupe}}n.push(t)
a[o]=true
if(at(")")){break}rt(",")}}rt(")")
return{params:n,stricted:i,firstRestricted:e,message:l}}function an(){var e,t=[],n,r,i,a,o,l,u
M()
d.markStart()
it("function")
r=g
e=Ot()
if(f){if(I(r.value)){tt(r,s.StrictFunctionName)}}else{if(I(r.value)){o=r
l=s.StrictFunctionName}else if(T(r.value)){o=r
l=s.StrictReservedWord}}a=rn(o)
t=a.params
i=a.stricted
o=a.firstRestricted
if(a.message){l=a.message}u=f
n=nn()
if(f&&o){et(o,l)}if(f&&i){tt(i,l)}f=u
return d.markEnd(d.createFunctionDeclaration(e,t,[],n))}function sn(){var e,t=null,n,r,i,a,o=[],l,u
d.markStart()
it("function")
if(!at("(")){e=g
t=Ot()
if(f){if(I(e.value)){tt(e,s.StrictFunctionName)}}else{if(I(e.value)){r=e
i=s.StrictFunctionName}else if(T(e.value)){r=e
i=s.StrictReservedWord}}}a=rn(r)
o=a.params
n=a.stricted
r=a.firstRestricted
if(a.message){i=a.message}u=f
l=nn()
if(f&&r){et(r,i)}if(f&&n){tt(n,i)}f=u
return d.markEnd(d.createFunctionExpression(t,o,[],l))}function on(){if(g.type===t.Keyword){switch(g.value){case"const":case"let":return Ft(g.value)
case"function":return an()
default:return tn()}}if(g.type!==t.EOF){return tn()}}function ln(){var e,n=[],r,a,o
while(c<m){r=g
if(r.type!==t.StringLiteral){break}e=on()
n.push(e)
if(e.expression.type!==i.Literal){break}a=u.slice(r.range[0]+1,r.range[1]-1)
if(a==="use strict"){f=true
if(o){tt(o,s.StrictOctalLiteral)}}else{if(!o&&r.octal){o=r}}}while(c<m){e=on()
if(typeof e==="undefined"){break}n.push(e)}return n}function un(){var e
M()
d.markStart()
f=false
J()
e=ln()
return d.markEnd(d.createProgram(e))}function fn(){var e,t,n,r=[]
for(e=0;e<y.tokens.length;++e){t=y.tokens[e]
n={type:t.type,value:t.value}
if(y.range){n.range=t.range}if(y.loc){n.loc=t.loc}r.push(n)}y.tokens=r}function cn(){this.marker=[c,h,c-p,0,0,0]}cn.prototype={constructor:cn,end:function(){this.marker[3]=c
this.marker[4]=h
this.marker[5]=c-p},apply:function(e){if(y.range){e.range=[this.marker[0],this.marker[3]]}if(y.loc){e.loc={start:{line:this.marker[1],column:this.marker[2]},end:{line:this.marker[4],column:this.marker[5]}}}e=d.postProcess(e)}}
function hn(){if(!y.loc&&!y.range){return null}M()
return new cn}function pn(e,n){var r,i,a
r=String
if(typeof e!=="string"&&!(e instanceof String)){e=r(e)}d=l
u=e
c=0
h=u.length>0?1:0
p=0
m=u.length
g=null
v={allowIn:true,labelSet:{},inFunctionBody:false,inIteration:false,inSwitch:false,lastCommentStart:-1}
y={}
n=n||{}
n.tokens=true
y.tokens=[]
y.tokenize=true
y.openParenToken=-1
y.openCurlyToken=-1
y.range=typeof n.range==="boolean"&&n.range
y.loc=typeof n.loc==="boolean"&&n.loc
if(typeof n.comment==="boolean"&&n.comment){y.comments=[]}if(typeof n.tolerant==="boolean"&&n.tolerant){y.errors=[]}if(m>0){if(typeof u[0]==="undefined"){if(e instanceof String){u=e.valueOf()}}}try{J()
if(g.type===t.EOF){return y.tokens}i=Z()
while(g.type!==t.EOF){try{i=Z()}catch(s){i=g
if(y.errors){y.errors.push(s)
break}else{throw s}}}fn()
a=y.tokens
if(typeof y.comments!=="undefined"){a.comments=y.comments}if(typeof y.errors!=="undefined"){a.errors=y.errors}}catch(o){throw o}finally{y={}}return a}function mn(e,t){var n,r
r=String
if(typeof e!=="string"&&!(e instanceof String)){e=r(e)}d=l
u=e
c=0
h=u.length>0?1:0
p=0
m=u.length
g=null
v={allowIn:true,labelSet:{},inFunctionBody:false,inIteration:false,inSwitch:false,lastCommentStart:-1,markerStack:[]}
y={}
if(typeof t!=="undefined"){y.range=typeof t.range==="boolean"&&t.range
y.loc=typeof t.loc==="boolean"&&t.loc
if(y.loc&&t.source!==null&&t.source!==undefined){y.source=r(t.source)}if(typeof t.tokens==="boolean"&&t.tokens){y.tokens=[]}if(typeof t.comment==="boolean"&&t.comment){y.comments=[]}if(typeof t.tolerant==="boolean"&&t.tolerant){y.errors=[]}}if(m>0){if(typeof u[0]==="undefined"){if(e instanceof String){u=e.valueOf()}}}try{n=un()
if(typeof y.comments!=="undefined"){n.comments=y.comments}if(typeof y.tokens!=="undefined"){fn()
n.tokens=y.tokens}if(typeof y.errors!=="undefined"){n.errors=y.errors}}catch(i){throw i}finally{y={}}return n}e.version="1.1.0-dev"
e.tokenize=pn
e.parse=mn
e.Syntax=function(){var e,t={}
if(typeof Object.create==="function"){t=Object.create(null)}for(e in i){if(i.hasOwnProperty(e)){t[e]=i[e]}}if(typeof Object.freeze==="function"){Object.freeze(t)}return t}()});(function(){var e=function(t,n){var r=e.resolve(t,n||"/")
var i=e.modules[r]
if(!i)throw new Error("Failed to resolve module "+t+", tried "+r)
var a=e.cache[r]
var s=a?a.exports:i()
return s}
e.paths=[]
e.modules={}
e.cache={}
e.extensions=[".js",".coffee",".json"]
e._core={assert:true,events:true,fs:true,path:true,vm:true}
e.resolve=function(){return function(t,n){if(!n)n="/"
if(e._core[t])return t
var r=e.modules.path()
n=r.resolve("/",n)
var i=n||"/"
if(t.match(/^(?:\.\.?\/|\/)/)){var a=o(r.resolve(i,t))||l(r.resolve(i,t))
if(a)return a}var s=u(t,i)
if(s)return s
throw new Error("Cannot find module '"+t+"'")
function o(t){t=r.normalize(t)
if(e.modules[t]){return t}for(var n=0;n<e.extensions.length;n++){var i=e.extensions[n]
if(e.modules[t+i])return t+i}}function l(t){t=t.replace(/\/+$/,"")
var n=r.normalize(t+"/package.json")
if(e.modules[n]){var i=e.modules[n]()
var a=i.browserify
if(typeof a==="object"&&a.main){var s=o(r.resolve(t,a.main))
if(s)return s}else if(typeof a==="string"){var s=o(r.resolve(t,a))
if(s)return s}else if(i.main){var s=o(r.resolve(t,i.main))
if(s)return s}}return o(t+"/index")}function u(e,t){var n=f(t)
for(var r=0;r<n.length;r++){var i=n[r]
var a=o(i+"/"+e)
if(a)return a
var s=l(i+"/"+e)
if(s)return s}var a=o(e)
if(a)return a}function f(e){var t
if(e==="/")t=[""]
else t=r.normalize(e).split("/")
var n=[]
for(var i=t.length-1;i>=0;i--){if(t[i]==="node_modules")continue
var a=t.slice(0,i+1).join("/")+"/node_modules"
n.push(a)}return n}}}()
e.alias=function(t,n){var r=e.modules.path()
var i=null
try{i=e.resolve(t+"/package.json","/")}catch(a){i=e.resolve(t,"/")}var s=r.dirname(i)
var o=(Object.keys||function(e){var t=[]
for(var n in e)t.push(n)
return t})(e.modules)
for(var l=0;l<o.length;l++){var u=o[l]
if(u.slice(0,s.length+1)===s+"/"){var f=u.slice(s.length)
e.modules[n+f]=e.modules[s+f]}else if(u===s){e.modules[n]=e.modules[s]}}};(function(){var t={}
var n=typeof window!=="undefined"?window:{}
var r=false
e.define=function(i,a){if(!r&&e.modules.__browserify_process){t=e.modules.__browserify_process()
r=true}var s=e._core[i]?"":e.modules.path().dirname(i)
var o=function(t){var n=e(t,s)
var r=e.cache[e.resolve(t,s)]
if(r&&r.parent===null){r.parent=l}return n}
o.resolve=function(t){return e.resolve(t,s)}
o.modules=e.modules
o.define=e.define
o.cache=e.cache
var l={id:i,filename:i,exports:{},loaded:false,parent:null}
e.modules[i]=function(){e.cache[i]=l
a.call(l.exports,o,l,l.exports,s,i,t,n)
l.loaded=true
return l.exports}}})()
e.define("path",function(e,t,n,r,i,a,s){function o(e,t){var n=[]
for(var r=0;r<e.length;r++){if(t(e[r],r,e))n.push(e[r])}return n}function l(e,t){var n=0
for(var r=e.length;r>=0;r--){var i=e[r]
if(i=="."){e.splice(r,1)}else if(i===".."){e.splice(r,1)
n++}else if(n){e.splice(r,1)
n--}}if(t){for(;n--;n){e.unshift("..")}}return e}var u=/^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/
n.resolve=function(){var e="",t=false
for(var n=arguments.length;n>=-1&&!t;n--){var r=n>=0?arguments[n]:a.cwd()
if(typeof r!=="string"||!r){continue}e=r+"/"+e
t=r.charAt(0)==="/"}e=l(o(e.split("/"),function(e){return!!e}),!t).join("/")
return(t?"/":"")+e||"."}
n.normalize=function(e){var t=e.charAt(0)==="/",n=e.slice(-1)==="/"
e=l(o(e.split("/"),function(e){return!!e}),!t).join("/")
if(!e&&!t){e="."}if(e&&n){e+="/"}return(t?"/":"")+e}
n.join=function(){var e=Array.prototype.slice.call(arguments,0)
return n.normalize(o(e,function(e,t){return e&&typeof e==="string"}).join("/"))}
n.dirname=function(e){var t=u.exec(e)[1]||""
var n=false
if(!t){return"."}else if(t.length===1||n&&t.length<=3&&t.charAt(1)===":"){return t}else{return t.substring(0,t.length-1)}}
n.basename=function(e,t){var n=u.exec(e)[2]||""
if(t&&n.substr(-1*t.length)===t){n=n.substr(0,n.length-t.length)}return n}
n.extname=function(e){return u.exec(e)[3]||""}
n.relative=function(e,t){e=n.resolve(e).substr(1)
t=n.resolve(t).substr(1)
function r(e){var t=0
for(;t<e.length;t++){if(e[t]!=="")break}var n=e.length-1
for(;n>=0;n--){if(e[n]!=="")break}if(t>n)return[]
return e.slice(t,n-t+1)}var i=r(e.split("/"))
var a=r(t.split("/"))
var s=Math.min(i.length,a.length)
var o=s
for(var l=0;l<s;l++){if(i[l]!==a[l]){o=l
break}}var u=[]
for(var l=o;l<i.length;l++){u.push("..")}u=u.concat(a.slice(o))
return u.join("/")}})
e.define("__browserify_process",function(e,t,n,r,i,a,s){var a=t.exports={}
a.nextTick=function(){var e=typeof window!=="undefined"&&window.setImmediate
var t=typeof window!=="undefined"&&window.postMessage&&window.addEventListener
if(e){return function(e){return window.setImmediate(e)}}if(t){var n=[]
window.addEventListener("message",function(e){if(e.source===window&&e.data==="browserify-tick"){e.stopPropagation()
if(n.length>0){var t=n.shift()
t()}}},true)
return function r(e){n.push(e)
window.postMessage("browserify-tick","*")}}return function i(e){setTimeout(e,0)}}()
a.title="browser"
a.browser=true
a.env={}
a.argv=[]
a.binding=function(t){if(t==="evals")return e("vm")
else throw new Error("No such module. (Possibly not yet loaded)")};(function(){var t="/"
var n
a.cwd=function(){return t}
a.chdir=function(r){if(!n)n=e("path")
t=n.resolve(r,t)}})()})
e.define("/package.json",function(e,t,n,r,i,a,s){t.exports={main:"escodegen.js"}})
e.define("/escodegen.js",function(e,t,n,r,i,a,s){(function(){"use strict"
var t,r,i,a,o,l,u,f,c,h,p,m,d,g,v,y,b,x,k,w,E,S,A,_,C
C=e("estraverse").traverse
t={AssignmentExpression:"AssignmentExpression",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ComprehensionBlock:"ComprehensionBlock",ComprehensionExpression:"ComprehensionExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DirectiveStatement:"DirectiveStatement",DoWhileStatement:"DoWhileStatement",DebuggerStatement:"DebuggerStatement",EmptyStatement:"EmptyStatement",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",Identifier:"Identifier",IfStatement:"IfStatement",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"}
r={Sequence:0,Assignment:1,Conditional:2,LogicalOR:3,LogicalAND:4,BitwiseOR:5,BitwiseXOR:6,BitwiseAND:7,Equality:8,Relational:9,BitwiseSHIFT:10,Additive:11,Multiplicative:12,Unary:13,Postfix:14,Call:15,New:16,Member:17,Primary:18}
i={"||":r.LogicalOR,"&&":r.LogicalAND,"|":r.BitwiseOR,"^":r.BitwiseXOR,"&":r.BitwiseAND,"==":r.Equality,"!=":r.Equality,"===":r.Equality,"!==":r.Equality,is:r.Equality,isnt:r.Equality,"<":r.Relational,">":r.Relational,"<=":r.Relational,">=":r.Relational,"in":r.Relational,"instanceof":r.Relational,"<<":r.BitwiseSHIFT,">>":r.BitwiseSHIFT,">>>":r.BitwiseSHIFT,"+":r.Additive,"-":r.Additive,"*":r.Multiplicative,"%":r.Multiplicative,"/":r.Multiplicative}
a={NonAsciiIdentifierPart:new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԧԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠࢢ-ࢬࣤ-ࣾऀ-ॣ०-९ॱ-ॷॹ-ॿঁ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఁ-ఃఅ-ఌఎ-ఐఒ-నప-ళవ-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤜᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶᴀ-ᷦ᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚗꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺꩻꪀ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︦︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]")}
function T(){return{indent:null,base:null,parse:null,comment:false,format:{indent:{style:"    ",base:0,adjustMultilineComment:false},json:false,renumber:false,hexadecimal:false,quotes:"single",escapeless:false,compact:false,parentheses:true,semicolons:true,safeConcatenation:false},moz:{starlessGenerator:false,parenthesizedComprehensionBlock:false},sourceMap:null,sourceMapRoot:null,sourceMapWithCode:false,directive:false,verbatim:null}}function I(e){var t=e.length,n=[],r
for(r=0;r<t;r+=1){n[r]=e.charAt(r)}return n}function P(e,t){var n=""
for(t|=0;t>0;t>>>=1,e+=e){if(t&1){n+=e}}return n}f=Array.isArray
if(!f){f=function ht(e){return Object.prototype.toString.call(e)==="[object Array]"}}function L(e,t,n,r){var i=[]
function a(e){var t,n
if(f(e)){for(t=0,n=e.length;t<n;++t){a(e[t])}}else if(e instanceof L){i.push(e)}else if(typeof e==="string"&&e){i.push(e)}}a(r)
this.children=i}L.prototype.toString=function pt(){var e="",t,n,r
for(t=0,n=this.children.length;t<n;++t){r=this.children[t]
if(r instanceof L){e+=r.toString()}else{e+=r}}return e}
L.prototype.replaceRight=function mt(e,t){var n=this.children[this.children.length-1]
if(n instanceof L){n.replaceRight(e,t)}else if(typeof n==="string"){this.children[this.children.length-1]=n.replace(e,t)}else{this.children.push("".replace(e,t))}return this}
L.prototype.join=function dt(e){var t,n,r
r=[]
n=this.children.length
if(n>0){for(t=0,n-=1;t<n;++t){r.push(this.children[t],e)}r.push(this.children[n])
this.children=r}return this}
function R(e){return/[\r\n]/g.test(e)}function O(e){var t=e.charAt(e.length-1)
return t==="\r"||t==="\n"}function M(e){var t={},n
for(n in e){if(e.hasOwnProperty(n)){t[n]=e[n]}}return t}function N(e){var t={},n,r
for(n in e){if(e.hasOwnProperty(n)){r=e[n]
if(typeof r==="object"&&r!==null){t[n]=N(r)}else{t[n]=r}}}return t}function D(e,t){var n,r
function i(e){return typeof e==="object"&&e instanceof Object&&!(e instanceof RegExp)}for(n in t){if(t.hasOwnProperty(n)){r=t[n]
if(i(r)){if(i(e[n])){D(e[n],r)}else{e[n]=D({},r)}}else{e[n]=r}}}return e}function F(e){var t,n,r,i,a
if(e!==e){throw new Error("Numeric literal whose value is NaN")}if(e<0||e===0&&1/e<0){throw new Error("Numeric literal whose value is negative")}if(e===1/0){return p?"null":m?"1e400":"1e+400"}t=""+e
if(!m||t.length<3){return t}n=t.indexOf(".")
if(!p&&t.charAt(0)==="0"&&n===1){n=0
t=t.slice(1)}r=t
t=t.replace("e+","e")
i=0
if((a=r.indexOf("e"))>0){i=+r.slice(a+1)
r=r.slice(0,a)}if(n>=0){i-=r.length-n-1
r=+(r.slice(0,n)+r.slice(n+1))+""}a=0
while(r.charAt(r.length+a-1)==="0"){a-=1}if(a!==0){i-=a
r=r.slice(0,a)}if(i!==0){r+="e"+i}if((r.length<t.length||d&&e>1e12&&Math.floor(e)===e&&(r="0x"+e.toString(16)).length<t.length)&&+r===e){t=r}return t}function W(e,t){var n=e.charCodeAt(0),r=n.toString(16),i="\\"
switch(e){case"\b":i+="b"
break
case"\f":i+="f"
break
case"	":i+="t"
break
default:if(p||n>255){i+="u"+"0000".slice(r.length)+r}else if(e==="\x00"&&"0123456789".indexOf(t)<0){i+="0"}else if(e===""){i+="v"}else{i+="x"+"00".slice(r.length)+r}break}return i}function B(e){var t="\\"
switch(e){case"\\":t+="\\"
break
case"\n":t+="n"
break
case"\r":t+="r"
break
case"\u2028":t+="u2028"
break
case"\u2029":t+="u2029"
break
default:throw new Error("Incorrectly classified character")}return t}function G(e){var t,n,r,i,a,s
a=e
if(typeof a[0]==="undefined"){a=I(a)}s=g==="double"?'"':"'"
for(t=0,n=a.length;t<n;t+=1){r=a[t]
if(r==="'"){s='"'
break}else if(r==='"'){s="'"
break}else if(r==="\\"){t+=1}}return s+e+s}function V(e){var t="",n,r,i,a,s=0,o=0,l
if(typeof e[0]==="undefined"){e=I(e)}for(n=0,r=e.length;n<r;n+=1){i=e[n]
if(i==="'"){s+=1}else if(i==='"'){o+=1}else if(i==="/"&&p){t+="\\"}else if("\\\n\r\u2028\u2029".indexOf(i)>=0){t+=B(i)
continue}else if(p&&i<" "||!(p||v||i>=" "&&i<="~")){t+=W(i,e[n+1])
continue}t+=i}l=!(g==="double"||g==="auto"&&o<s)
e=t
t=l?"'":'"'
if(typeof e[0]==="undefined"){e=I(e)}for(n=0,r=e.length;n<r;n+=1){i=e[n]
if(i==="'"&&l||i==='"'&&!l){t+="\\"}t+=i}return t+(l?"'":'"')}function U(e){return"	\f  ".indexOf(e)>=0||e.charCodeAt(0)>=5760&&" ᠎             　﻿".indexOf(e)>=0}function z(e){return"\n\r\u2028\u2029".indexOf(e)>=0}function j(e){return e==="$"||e==="_"||e==="\\"||e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e.charCodeAt(0)>=128&&a.NonAsciiIdentifierPart.test(e)}function H(e,t){if(t==null){if(e instanceof u){return e}else{t={}}}if(t.loc==null){return new u(null,null,_,e)}return new u(t.loc.start.line,t.loc.start.column,_===true?t.loc.source||null:_,e)}function q(e,t){var n=H(e).toString(),r=H(t).toString(),i=n.charAt(n.length-1),a=r.charAt(0)
if((i==="+"||i==="-")&&i===a||j(i)&&j(a)){return[e," ",t]}else if(U(i)||z(i)||U(a)||z(a)){return[e,t]}return[e,b,t]}function K(e){return[c,e]}function X(e){var t,n
t=c
c+=h
n=e.call(this,c)
c=t
return n}function Y(e){var t
for(t=e.length-1;t>=0;t-=1){if(z(e.charAt(t))){break}}return e.length-1-t}function Z(e,t){var n,r,i,a,s,o,l,u
n=e.split(/\r\n|[\r\n]/)
l=Number.MAX_VALUE
for(r=1,i=n.length;r<i;r+=1){a=n[r]
s=0
while(s<a.length&&U(a[s])){s+=1}if(l>s){l=s}}if(typeof t!=="undefined"){u=c
if(n[1][l]==="*"){t+=" "}c=t}else{if(l&1){l-=1}u=c}for(r=1,i=n.length;r<i;r+=1){n[r]=H(K(n[r].slice(l))).join("")}c=u
return n.join("\n")}function J(e,t){if(e.type==="Line"){if(O(e.value)){return"//"+e.value}else{return"//"+e.value+"\n"}}if(S.format.indent.adjustMultilineComment&&/[\n\r]/.test(e.value)){return Z("/*"+e.value+"*/",t)}return"/*"+e.value+"*/"}function Q(e,n){var r,i,a,s,o,l,u,f
if(e.leadingComments&&e.leadingComments.length>0){s=n
a=e.leadingComments[0]
n=[]
if(w&&e.type===t.Program&&e.body.length===0){n.push("\n")}n.push(J(a))
if(!O(H(n).toString())){n.push("\n")}for(r=1,i=e.leadingComments.length;r<i;r+=1){a=e.leadingComments[r]
f=[J(a)]
if(!O(H(f).toString())){f.push("\n")}n.push(K(f))}n.push(K(s))}if(e.trailingComments){l=!O(H(n).toString())
u=P(" ",Y(H([c,n,h]).toString()))
for(r=0,i=e.trailingComments.length;r<i;r+=1){a=e.trailingComments[r]
if(l){if(r===0){n=[n,h]}else{n=[n,u]}n.push(J(a,u))}else{n=[n,K(J(a))]}if(r!==i-1&&!O(H(n).toString())){n=[n,"\n"]}}}return n}function et(e,t,n){if(t<n){return["(",e,")"]}return e}function tt(e,n,r){var i,a
a=!S.comment||!e.leadingComments
if(e.type===t.BlockStatement&&a){return[b,st(e,{functionBody:r})]}if(e.type===t.EmptyStatement&&a){return";"}X(function(){i=[y,K(st(e,{semicolonOptional:n,functionBody:r}))]})
return i}function nt(e,n){var r=O(H(n).toString())
if(e.type===t.BlockStatement&&(!S.comment||!e.leadingComments)&&!r){return[n,b]}if(r){return[n,c]}return[n,y,c]}function rt(e,t){var n,i
i=e[S.verbatim].split(/\r\n|\n/)
for(n=1;n<i.length;n++){i[n]=y+c+i[n]}i=et(i,r.Sequence,t.precedence)
return H(i,e)}function it(e){var t,n,i,a
t=["("]
for(n=0,i=e.params.length;n<i;n+=1){t.push(e.params[n].name)
if(n+1<i){t.push(","+b)}}t.push(")")
if(e.expression){t.push(b)
a=at(e.body,{precedence:r.Assignment,allowIn:true,allowCall:true})
if(a.toString().charAt(0)==="{"){a=["(",a,")"]}t.push(a)}else{t.push(tt(e.body,false,true))}return t}function at(e,n){var a,s,o,l,u,f,h,p,m,d,g,v,k,w,E,_,C,T,I
s=n.precedence
w=n.allowIn
E=n.allowCall
o=e.type||n.type
if(S.verbatim&&e.hasOwnProperty(S.verbatim)){return rt(e,n)}switch(o){case t.SequenceExpression:a=[]
w|=r.Sequence<s
for(u=0,f=e.expressions.length;u<f;u+=1){a.push(at(e.expressions[u],{precedence:r.Assignment,allowIn:w,allowCall:true}))
if(u+1<f){a.push(","+b)}}a=et(a,r.Sequence,s)
break
case t.AssignmentExpression:w|=r.Assignment<s
a=et([at(e.left,{precedence:r.Call,allowIn:w,allowCall:true}),b+e.operator+b,at(e.right,{precedence:r.Assignment,allowIn:w,allowCall:true})],r.Assignment,s)
break
case t.ConditionalExpression:w|=r.Conditional<s
a=et([at(e.test,{precedence:r.LogicalOR,allowIn:w,allowCall:true}),b+"?"+b,at(e.consequent,{precedence:r.Assignment,allowIn:w,allowCall:true}),b+":"+b,at(e.alternate,{precedence:r.Assignment,allowIn:w,allowCall:true})],r.Conditional,s)
break
case t.LogicalExpression:case t.BinaryExpression:l=i[e.operator]
w|=l<s
a=q(at(e.left,{precedence:l,allowIn:w,allowCall:true}),e.operator)
p=at(e.right,{precedence:l+1,allowIn:w,allowCall:true})
if(e.operator==="/"&&p.toString().charAt(0)==="/"){a.push(" ",p)}else{a=q(a,p)}if(e.operator==="in"&&!w){a=["(",a,")"]}else{a=et(a,l,s)}break
case t.CallExpression:a=[at(e.callee,{precedence:r.Call,allowIn:true,allowCall:true,allowUnparenthesizedNew:false})]
a.push("(")
for(u=0,f=e["arguments"].length;u<f;u+=1){a.push(at(e["arguments"][u],{precedence:r.Assignment,allowIn:true,allowCall:true}))
if(u+1<f){a.push(","+b)}}a.push(")")
if(!E){a=["(",a,")"]}else{a=et(a,r.Call,s)}break
case t.NewExpression:f=e["arguments"].length
_=n.allowUnparenthesizedNew===undefined||n.allowUnparenthesizedNew
a=q("new",at(e.callee,{precedence:r.New,allowIn:true,allowCall:false,allowUnparenthesizedNew:_&&!x&&f===0}))
if(!_||x||f>0){a.push("(")
for(u=0;u<f;u+=1){a.push(at(e["arguments"][u],{precedence:r.Assignment,allowIn:true,allowCall:true}))
if(u+1<f){a.push(","+b)}}a.push(")")}a=et(a,r.New,s)
break
case t.MemberExpression:a=[at(e.object,{precedence:r.Call,allowIn:true,allowCall:E,allowUnparenthesizedNew:false})]
if(e.computed){a.push("[",at(e.property,{precedence:r.Sequence,allowIn:true,allowCall:E}),"]")}else{if(e.object.type===t.Literal&&typeof e.object.value==="number"){if(a.indexOf(".")<0){if(!/[eExX]/.test(a)&&!(a.length>=2&&a[0]==="0")){a.push(".")}}}a.push("."+e.property.name)}a=et(a,r.Member,s)
break
case t.UnaryExpression:p=at(e.argument,{precedence:r.Unary,allowIn:true,allowCall:true})
if(b===""){a=q(e.operator,p)}else{a=[e.operator]
if(e.operator.length>2){a=q(a,p)}else{g=H(a).toString()
d=g.charAt(g.length-1)
v=p.toString().charAt(0)
if((d==="+"||d==="-")&&d===v||j(d)&&j(v)){a.push(" ",p)}else{a.push(p)}}}a=et(a,r.Unary,s)
break
case t.YieldExpression:if(e.delegate){a="yield*"}else{a="yield"}if(e.argument){a=q(a,at(e.argument,{precedence:r.Assignment,allowIn:true,allowCall:true}))}break
case t.UpdateExpression:if(e.prefix){a=et([e.operator,at(e.argument,{precedence:r.Unary,allowIn:true,allowCall:true})],r.Unary,s)}else{a=et([at(e.argument,{precedence:r.Postfix,allowIn:true,allowCall:true}),e.operator],r.Postfix,s)}break
case t.FunctionExpression:a="function"
if(e.id){a+=" "+e.id.name}else{a+=b}a=[a,it(e)]
break
case t.ArrayPattern:case t.ArrayExpression:if(!e.elements.length){a="[]"
break}m=e.elements.length>1
a=["[",m?y:""]
X(function(t){for(u=0,f=e.elements.length;u<f;u+=1){if(!e.elements[u]){if(m){a.push(t)}if(u+1===f){a.push(",")}}else{a.push(m?t:"",at(e.elements[u],{precedence:r.Assignment,allowIn:true,allowCall:true}))}if(u+1<f){a.push(","+(m?y:b))}}})
if(m&&!O(H(a).toString())){a.push(y)}a.push(m?c:"","]")
break
case t.Property:if(e.kind==="get"||e.kind==="set"){a=[e.kind+" ",at(e.key,{precedence:r.Sequence,allowIn:true,allowCall:true}),it(e.value)]}else{if(e.shorthand){a=at(e.key,{precedence:r.Sequence,allowIn:true,allowCall:true})}else if(e.method){a=[]
if(e.value.generator){a.push("*")}a.push(at(e.key,{precedence:r.Sequence,allowIn:true,allowCall:true}),it(e.value))}else{a=[at(e.key,{precedence:r.Sequence,allowIn:true,allowCall:true}),":"+b,at(e.value,{precedence:r.Assignment,allowIn:true,allowCall:true})]}}break
case t.ObjectExpression:if(!e.properties.length){a="{}"
break}m=e.properties.length>1
X(function(n){p=at(e.properties[0],{precedence:r.Sequence,allowIn:true,allowCall:true,type:t.Property})})
if(!m){if(!R(H(p).toString())){a=["{",b,p,b,"}"]
break}}X(function(n){a=["{",y,n,p]
if(m){a.push(","+y)
for(u=1,f=e.properties.length;u<f;u+=1){a.push(n,at(e.properties[u],{precedence:r.Sequence,allowIn:true,allowCall:true,type:t.Property}))
if(u+1<f){a.push(","+y)}}}})
if(!O(H(a).toString())){a.push(y)}a.push(c,"}")
break
case t.ObjectPattern:if(!e.properties.length){a="{}"
break}m=false
if(e.properties.length===1){C=e.properties[0]
if(C.value.type!==t.Identifier){m=true}}else{for(u=0,f=e.properties.length;u<f;u+=1){C=e.properties[u]
if(!C.shorthand){m=true
break}}}a=["{",m?y:""]
X(function(t){for(u=0,f=e.properties.length;u<f;u+=1){a.push(m?t:"",at(e.properties[u],{precedence:r.Sequence,allowIn:true,allowCall:true}))
if(u+1<f){a.push(","+(m?y:b))}}})
if(m&&!O(H(a).toString())){a.push(y)}a.push(m?c:"","}")
break
case t.ThisExpression:a="this"
break
case t.Identifier:a=e.name
break
case t.Literal:if(e.hasOwnProperty("raw")&&A){try{h=A(e.raw).body[0].expression
if(h.type===t.Literal){if(h.value===e.value){a=e.raw
break}}}catch(P){}}if(e.value===null){a="null"
break}if(typeof e.value==="string"){a=V(e.value)
break}if(typeof e.value==="number"){a=F(e.value)
break}a=e.value.toString()
break
case t.ComprehensionExpression:a=["[",at(e.body,{precedence:r.Assignment,allowIn:true,allowCall:true})]
if(e.blocks){for(u=0,f=e.blocks.length;u<f;u+=1){p=at(e.blocks[u],{precedence:r.Sequence,allowIn:true,allowCall:true})
a=q(a,p)}}if(e.filter){a=q(a,"if"+b)
p=at(e.filter,{precedence:r.Sequence,allowIn:true,allowCall:true})
if(S.moz.parenthesizedComprehensionBlock){a=q(a,["(",p,")"])}else{a=q(a,p)}}a.push("]")
break
case t.ComprehensionBlock:if(e.left.type===t.VariableDeclaration){p=[e.left.kind+" ",st(e.left.declarations[0],{allowIn:false})]}else{p=at(e.left,{precedence:r.Call,allowIn:true,allowCall:true})}p=q(p,e.of?"of":"in")
p=q(p,at(e.right,{precedence:r.Sequence,allowIn:true,allowCall:true}))
if(S.moz.parenthesizedComprehensionBlock){a=["for"+b+"(",p,")"]}else{a=q("for"+b,p)}break
default:throw new Error("Unknown expression type: "+e.type)}return H(a,e)}function st(e,n){var i,a,s,o,l,u,f,c,h
l=true
h=";"
u=false
f=false
if(n){l=n.allowIn===undefined||n.allowIn
if(!k&&n.semicolonOptional===true){h=""}u=n.functionBody
f=n.directiveContext}switch(e.type){case t.BlockStatement:s=["{",y]
X(function(){for(i=0,a=e.body.length;i<a;i+=1){c=K(st(e.body[i],{semicolonOptional:i===a-1,directiveContext:u}))
s.push(c)
if(!O(H(c).toString())){s.push(y)}}})
s.push(K("}"))
break
case t.BreakStatement:if(e.label){s="break "+e.label.name+h}else{s="break"+h}break
case t.ContinueStatement:if(e.label){s="continue "+e.label.name+h}else{s="continue"+h}break
case t.DirectiveStatement:if(e.raw){s=e.raw+h}else{s=G(e.directive)+h}break
case t.DoWhileStatement:s=q("do",tt(e.body))
s=nt(e.body,s)
s=q(s,["while"+b+"(",at(e.test,{precedence:r.Sequence,allowIn:true,allowCall:true}),")"+h])
break
case t.CatchClause:X(function(){s=["catch"+b+"(",at(e.param,{precedence:r.Sequence,allowIn:true,allowCall:true}),")"]})
s.push(tt(e.body))
break
case t.DebuggerStatement:s="debugger"+h
break
case t.EmptyStatement:s=";"
break
case t.ExpressionStatement:s=[at(e.expression,{precedence:r.Sequence,allowIn:true,allowCall:true})]
if(s.toString().charAt(0)==="{"||s.toString().slice(0,8)==="function"&&" (".indexOf(s.toString().charAt(8))>=0||E&&f&&e.expression.type===t.Literal&&typeof e.expression.value==="string"){s=["(",s,")"+h]}else{s.push(h)}break
case t.VariableDeclarator:if(e.init){s=[at(e.id,{precedence:r.Assignment,allowIn:l,allowCall:true})+b+"="+b,at(e.init,{precedence:r.Assignment,allowIn:l,allowCall:true})]}else{s=e.id.name}break
case t.VariableDeclaration:s=[e.kind]
if(e.declarations.length===1&&e.declarations[0].init&&e.declarations[0].init.type===t.FunctionExpression){s.push(" ",st(e.declarations[0],{allowIn:l}))}else{X(function(){o=e.declarations[0]
if(S.comment&&o.leadingComments){s.push("\n",K(st(o,{allowIn:l})))}else{s.push(" ",st(o,{allowIn:l}))}for(i=1,a=e.declarations.length;i<a;i+=1){o=e.declarations[i]
if(S.comment&&o.leadingComments){s.push(","+y,K(st(o,{allowIn:l})))}else{s.push(","+b,st(o,{allowIn:l}))}}})}s.push(h)
break
case t.ThrowStatement:s=[q("throw",at(e.argument,{precedence:r.Sequence,allowIn:true,allowCall:true})),h]
break
case t.TryStatement:s=["try",tt(e.block)]
s=nt(e.block,s)
for(i=0,a=e.handlers.length;i<a;i+=1){s=q(s,st(e.handlers[i]))
if(e.finalizer||i+1!==a){s=nt(e.handlers[i].body,s)}}if(e.finalizer){s=q(s,["finally",tt(e.finalizer)])}break
case t.SwitchStatement:X(function(){s=["switch"+b+"(",at(e.discriminant,{precedence:r.Sequence,allowIn:true,allowCall:true}),")"+b+"{"+y]})
if(e.cases){for(i=0,a=e.cases.length;i<a;i+=1){c=K(st(e.cases[i],{semicolonOptional:i===a-1}))
s.push(c)
if(!O(H(c).toString())){s.push(y)}}}s.push(K("}"))
break
case t.SwitchCase:X(function(){if(e.test){s=[q("case",at(e.test,{precedence:r.Sequence,allowIn:true,allowCall:true})),":"]}else{s=["default:"]}i=0
a=e.consequent.length
if(a&&e.consequent[0].type===t.BlockStatement){c=tt(e.consequent[0])
s.push(c)
i=1}if(i!==a&&!O(H(s).toString())){s.push(y)}for(;i<a;i+=1){c=K(st(e.consequent[i],{semicolonOptional:i===a-1&&h===""}))
s.push(c)
if(i+1!==a&&!O(H(c).toString())){s.push(y)}}})
break
case t.IfStatement:X(function(){s=["if"+b+"(",at(e.test,{precedence:r.Sequence,allowIn:true,allowCall:true}),")"]})
if(e.alternate){s.push(tt(e.consequent))
s=nt(e.consequent,s)
if(e.alternate.type===t.IfStatement){s=q(s,["else ",st(e.alternate,{semicolonOptional:h===""})])}else{s=q(s,q("else",tt(e.alternate,h==="")))}}else{s.push(tt(e.consequent,h===""))}break
case t.ForStatement:X(function(){s=["for"+b+"("]
if(e.init){if(e.init.type===t.VariableDeclaration){s.push(st(e.init,{allowIn:false}))}else{s.push(at(e.init,{precedence:r.Sequence,allowIn:false,allowCall:true}),";")}}else{s.push(";")}if(e.test){s.push(b,at(e.test,{precedence:r.Sequence,allowIn:true,allowCall:true}),";")}else{s.push(";")}if(e.update){s.push(b,at(e.update,{precedence:r.Sequence,allowIn:true,allowCall:true}),")")}else{s.push(")")}})
s.push(tt(e.body,h===""))
break
case t.ForInStatement:s=["for"+b+"("]
X(function(){if(e.left.type===t.VariableDeclaration){X(function(){s.push(e.left.kind+" ",st(e.left.declarations[0],{allowIn:false}))})}else{s.push(at(e.left,{precedence:r.Call,allowIn:true,allowCall:true}))}s=q(s,"in")
s=[q(s,at(e.right,{precedence:r.Sequence,allowIn:true,allowCall:true})),")"]})
s.push(tt(e.body,h===""))
break
case t.LabeledStatement:s=[e.label.name+":",tt(e.body,h==="")]
break
case t.Program:a=e.body.length
s=[w&&a>0?"\n":""]
for(i=0;i<a;i+=1){c=K(st(e.body[i],{semicolonOptional:!w&&i===a-1,directiveContext:true}))
s.push(c)
if(i+1<a&&!O(H(c).toString())){s.push(y)}}break
case t.FunctionDeclaration:s=[(e.generator&&!S.moz.starlessGenerator?"function* ":"function ")+e.id.name,it(e)]
break
case t.ReturnStatement:if(e.argument){s=[q("return",at(e.argument,{precedence:r.Sequence,allowIn:true,allowCall:true})),h]}else{s=["return"+h]}break
case t.WhileStatement:X(function(){s=["while"+b+"(",at(e.test,{precedence:r.Sequence,allowIn:true,allowCall:true}),")"]})
s.push(tt(e.body,h===""))
break
case t.WithStatement:X(function(){s=["with"+b+"(",at(e.object,{precedence:r.Sequence,allowIn:true,allowCall:true}),")"]})
s.push(tt(e.body,h===""))
break
default:throw new Error("Unknown statement type: "+e.type)}if(S.comment){s=Q(e,s)}c=H(s).toString()
if(e.type===t.Program&&!w&&y===""&&c.charAt(c.length-1)==="\n"){s=H(s).replaceRight(/\s+$/,"")}return H(s,e)}function ot(i,a){var o=T(),l,f
if(a!=null){if(typeof a.indent==="string"){o.format.indent.style=a.indent}if(typeof a.base==="number"){o.format.indent.base=a.base}a=D(o,a)
h=a.format.indent.style
if(typeof a.base==="string"){c=a.base}else{c=P(h,a.format.indent.base)}}else{a=o
h=a.format.indent.style
c=P(h,a.format.indent.base)}p=a.format.json
m=a.format.renumber
d=p?false:a.format.hexadecimal
g=p?"double":a.format.quotes
v=a.format.escapeless
if(a.format.compact){y=b=h=c=""}else{y="\n"
b=" "}x=a.format.parentheses
k=a.format.semicolons
w=a.format.safeConcatenation
E=a.directive
A=p?null:a.parse
_=a.sourceMap
S=a
if(_){if(!n.browser){u=e("source-map").SourceNode}else{u=s.sourceMap.SourceNode}}else{u=L}switch(i.type){case t.BlockStatement:case t.BreakStatement:case t.CatchClause:case t.ContinueStatement:case t.DirectiveStatement:case t.DoWhileStatement:case t.DebuggerStatement:case t.EmptyStatement:case t.ExpressionStatement:case t.ForStatement:case t.ForInStatement:case t.FunctionDeclaration:case t.IfStatement:case t.LabeledStatement:case t.Program:case t.ReturnStatement:case t.SwitchStatement:case t.SwitchCase:case t.ThrowStatement:case t.TryStatement:case t.VariableDeclaration:case t.VariableDeclarator:case t.WhileStatement:case t.WithStatement:l=st(i)
break
case t.AssignmentExpression:case t.ArrayExpression:case t.ArrayPattern:case t.BinaryExpression:case t.CallExpression:case t.ConditionalExpression:case t.FunctionExpression:case t.Identifier:case t.Literal:case t.LogicalExpression:case t.MemberExpression:case t.NewExpression:case t.ObjectExpression:case t.ObjectPattern:case t.Property:case t.SequenceExpression:case t.ThisExpression:case t.UnaryExpression:case t.UpdateExpression:case t.YieldExpression:l=at(i,{precedence:r.Sequence,allowIn:true,allowCall:true})
break
default:throw new Error("Unknown node type: "+i.type)}if(!_){return l.toString()}f=l.toStringWithSourceMap({file:a.sourceMap,sourceRoot:a.sourceMapRoot})
if(a.sourceMapWithCode){return f}return f.map.toString()}o={AssignmentExpression:["left","right"],ArrayExpression:["elements"],ArrayPattern:["elements"],BlockStatement:["body"],BinaryExpression:["left","right"],BreakStatement:["label"],CallExpression:["callee","arguments"],CatchClause:["param","body"],ConditionalExpression:["test","consequent","alternate"],ContinueStatement:["label"],DirectiveStatement:[],DoWhileStatement:["body","test"],DebuggerStatement:[],EmptyStatement:[],ExpressionStatement:["expression"],ForStatement:["init","test","update","body"],ForInStatement:["left","right","body"],FunctionDeclaration:["id","params","body"],FunctionExpression:["id","params","body"],Identifier:[],IfStatement:["test","consequent","alternate"],Literal:[],LabeledStatement:["label","body"],LogicalExpression:["left","right"],MemberExpression:["object","property"],NewExpression:["callee","arguments"],ObjectExpression:["properties"],ObjectPattern:["properties"],Program:["body"],Property:["key","value"],ReturnStatement:["argument"],SequenceExpression:["expressions"],SwitchStatement:["discriminant","cases"],SwitchCase:["test","consequent"],ThisExpression:[],ThrowStatement:["argument"],TryStatement:["block","handlers","finalizer"],UnaryExpression:["argument"],UpdateExpression:["argument"],VariableDeclaration:["declarations"],VariableDeclarator:["id","init"],WhileStatement:["test","body"],WithStatement:["object","body"],YieldExpression:["argument"]}
l={Break:1,Skip:2}
function lt(e,t){var n,r,i,a
r=e.length
i=0
while(r){n=r>>>1
a=i+n
if(t(e[a])){r=n}else{i=a+1
r-=n+1}}return i}function ut(e,t){var n,r,i,a
r=e.length
i=0
while(r){n=r>>>1
a=i+n
if(t(e[a])){i=a+1
r-=n+1}else{r=n}}return i}function ft(e,t){var n,r
n=lt(t,function i(t){return t.range[0]>e.range[0]})
e.extendedRange=[e.range[0],e.range[1]]
if(n!==t.length){e.extendedRange[1]=t[n].range[0]}n-=1
if(n>=0){if(n<t.length){e.extendedRange[0]=t[n].range[1]}else if(r.length){e.extendedRange[1]=t[t.length-1].range[0]}}return e}function ct(e,t,n){var r=[],i,a,s
if(!e.range){throw new Error("attachComments needs range information")}if(!n.length){if(t.length){for(s=0,a=t.length;s<a;s+=1){i=N(t[s])
i.extendedRange=[0,e.range[0]]
r.push(i)}e.leadingComments=r}return e}for(s=0,a=t.length;s<a;s+=1){r.push(ft(N(t[s]),n))}C(e,{cursor:0,enter:function(e){var t
while(this.cursor<r.length){t=r[this.cursor]
if(t.extendedRange[1]>e.range[0]){break}if(t.extendedRange[1]===e.range[0]){if(!e.leadingComments){e.leadingComments=[]}e.leadingComments.push(t)
r.splice(this.cursor,1)}else{this.cursor+=1}}if(this.cursor===r.length){return l.Break}if(r[this.cursor].extendedRange[0]>e.range[1]){return l.Skip}}})
C(e,{cursor:0,leave:function(e){var t
while(this.cursor<r.length){t=r[this.cursor]
if(e.range[1]<t.extendedRange[0]){break}if(e.range[1]===t.extendedRange[0]){if(!e.trailingComments){e.trailingComments=[]}e.trailingComments.push(t)
r.splice(this.cursor,1)}else{this.cursor+=1}}if(this.cursor===r.length){return l.Break}if(r[this.cursor].extendedRange[0]>e.range[1]){return l.Skip}}})
return e}n.version="0.0.16-dev"
n.generate=ot
n.attachComments=ct
n.browser=false})()})
e.define("/node_modules/estraverse/package.json",function(e,t,n,r,i,a,s){t.exports={main:"estraverse.js"}})
e.define("/node_modules/estraverse/estraverse.js",function(e,t,n,r,i,a,s){(function(e){"use strict"
if(typeof define==="function"&&define.amd){define(["exports"],e)}else if(typeof n!=="undefined"){e(n)}else{e(window.estraverse={})}})(function(e){"use strict"
var t,n,r,i,a
t={AssignmentExpression:"AssignmentExpression",ArrayExpression:"ArrayExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DebuggerStatement:"DebuggerStatement",DirectiveStatement:"DirectiveStatement",DoWhileStatement:"DoWhileStatement",EmptyStatement:"EmptyStatement",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",Identifier:"Identifier",IfStatement:"IfStatement",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",Program:"Program",Property:"Property",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement"}
n=Array.isArray
if(!n){n=function l(e){return Object.prototype.toString.call(e)==="[object Array]"}}i={AssignmentExpression:["left","right"],ArrayExpression:["elements"],BlockStatement:["body"],BinaryExpression:["left","right"],BreakStatement:["label"],CallExpression:["callee","arguments"],CatchClause:["param","body"],ConditionalExpression:["test","consequent","alternate"],ContinueStatement:["label"],DebuggerStatement:[],DirectiveStatement:[],DoWhileStatement:["body","test"],EmptyStatement:[],ExpressionStatement:["expression"],ForStatement:["init","test","update","body"],ForInStatement:["left","right","body"],FunctionDeclaration:["id","params","body"],FunctionExpression:["id","params","body"],Identifier:[],IfStatement:["test","consequent","alternate"],Literal:[],LabeledStatement:["label","body"],LogicalExpression:["left","right"],MemberExpression:["object","property"],NewExpression:["callee","arguments"],ObjectExpression:["properties"],Program:["body"],Property:["key","value"],ReturnStatement:["argument"],SequenceExpression:["expressions"],SwitchStatement:["discriminant","cases"],SwitchCase:["test","consequent"],ThisExpression:[],ThrowStatement:["argument"],TryStatement:["block","handlers","finalizer"],UnaryExpression:["argument"],UpdateExpression:["argument"],VariableDeclaration:["declarations"],VariableDeclarator:["id","init"],WhileStatement:["test","body"],WithStatement:["object","body"]}
r={Break:1,Skip:2}
a={PropertyWrapper:"Property"}
function s(e,s){var o,l,u,f,c,h,p,m,d,g={}
o=[e]
l=[null]
while(o.length){u=o.pop()
f=u.type
if(u===g){u=l.pop()
if(s.leave){c=s.leave(u,l[l.length-1])}else{c=undefined}if(c===r.Break){return}}else if(u){if(a.hasOwnProperty(f)){u=u.node
f=a[f]}if(s.enter){c=s.enter(u,l[l.length-1])}else{c=undefined}if(c===r.Break){return}o.push(g)
l.push(u)
if(c!==r.Skip){m=i[f]
h=m.length
while((h-=1)>=0){d=u[m[h]]
if(d){if(n(d)){p=d.length
while((p-=1)>=0){if(d[p]){if(f===t.ObjectExpression&&"properties"===m[h]&&null==m[h].type){o.push({type:"PropertyWrapper",node:d[p]})}else{o.push(d[p])}}}}else{o.push(d)}}}}}}}function o(e,s){var o,l,u,f,c,h,p,m,d,g,v,y={},b
b={top:e}
h=[e,b,"top"]
o=[h]
l=[h]
function x(e){p=e}while(o.length){h=o.pop()
if(h===y){h=l.pop()
p=undefined
if(s.leave){u=h[0]
c=s.leave(h[0],l[l.length-1][0],x)
if(c!==undefined){u=c}h[1][h[2]]=u}if(p===r.Break){return b.top}}else if(h[0]){p=undefined
u=h[0]
f=u.type
if(a.hasOwnProperty(f)){h[0]=u=u.node
f=a[f]}if(s.enter){c=s.enter(h[0],l[l.length-1][0],x)
if(c!==undefined){u=c}h[1][h[2]]=u
h[0]=u}if(p===r.Break){return b.top}if(h[0]){o.push(y)
l.push(h)
if(p!==r.Skip){g=i[f]
m=g.length
while((m-=1)>=0){v=u[g[m]]
if(v){if(n(v)){d=v.length
while((d-=1)>=0){if(v[d]){if(f===t.ObjectExpression&&"properties"===g[m]&&null==g[m].type){o.push([{type:"PropertyWrapper",node:v[d]},v,d])}else{o.push([v[d],v,d])}}}}else{o.push([v,u,g[m]])}}}}}}}return b.top}e.version="0.0.4"
e.Syntax=t
e.traverse=s
e.replace=o
e.VisitorKeys=i
e.VisitorOption=r})})
e.define("/tools/entry-point.js",function(e,t,n,r,i,a,s){(function(){"use strict"
var t
t=s.escodegen=e("../escodegen")
t.browser=true})()})
e("/tools/entry-point.js")})();(function(e){var t
var n
var r
var i={}
var a
var s
if(typeof module!=="undefined"&&module.exports){t=module.exports={}
n=require("esprima")
r=require("underscore")}else{t=this.Structured={}
n=e.esprima
r=e._}if(!n||!r){throw"Error: Both Esprima and UnderscoreJS are required dependencies."}function o(e){var t=/^function [^\(]*\(([^\)]*)\)/.exec(e)[1]
var n=t.match(/[$_a-zA-z0-9]+/g)
for(var r in n){if(n[r][0]!=="$"){console.warn("Invalid parameter in constraint (should begin with a '$'): ",n[r])
return null}}return{variables:n,fn:e}}var l
function u(e,t,i){i=i||{}
var u=i.varCallbacks||[]
l=u
if(u instanceof Function||u.fn&&u.variables){u=[u]}if(u instanceof Array){for(var c in u){if(u[c]instanceof Function){u[c]=o(u[c])}}}else{var m=[]
for(var d in u){if(u.hasOwnProperty(d)&&d!=="failure"){m.push({variables:d.match(/[$_a-zA-z0-9]+/g),fn:u[d]})}}u=m}var g={order:[],skipData:{},values:{}}
var v=h(t,g)
var b=a===e?s:typeof e==="object"?E(e):n.parse(e)
a=e
s=b
p(b)
var x=v.body||v
var k=[]
if(r.isArray(v.body)){x=v.body[0]
k=v.body.slice(1)}var w
var S={_:[],vars:{}}
if(g.order.length===0||i.single){w=y(b,x,k,g,S,i)}else{w=A(0,g,u,S,i)}return w
function A(e,t,n,i,a){var s=t.order
t.skipData[s[e]]=0
do{for(var o=e+1;o<s.length;o+=1){t.skipData[s[o]]=0}if(e===s.length-1){r.each(t.values,function(e,n){r.each(t.values[n],function(e,r){delete t.values[n][r]})})
t.leftToSkip=r.extend({},t.skipData)
if(y(b,x,k.slice(),t,i,a)&&f(t,n)){return i}}else if(A(e+1,t,n,i,a)){return i}t.skipData[s[e]]+=1}while(!r.isEmpty(t.values[s[e]]))
return false}}function f(e,t){delete l.failure
for(var n in t){var i=t[n].variables
var a=r.map(i,function(t){t=o(t)
if(!r.has(e.values,t)){console.error("Callback var "+t+" doesn't exist")
return undefined}return E(e.values[t])})
var s=t[n].fn.apply(null,a)
if(!s||r.has(s,"failure")){if(r.has(s,"failure")){l.failure=s.failure}return false}}return true
function o(e){if(String.prototype.trim){return e.trim()}return e.replace(/^\s+|\s+$/g,"")}}function c(e){if(typeof e==="object"){return E(e)}if(i[e]){return JSON.parse(i[e])}var t=n.parse("("+e+")")
if(t.body[0].expression.type!=="FunctionExpression"||!t.body[0].expression.body){throw"Poorly formatted structure code"}var r=t.body[0].expression.body
i[e]=JSON.stringify(r)
return r}function h(e,t){var n=c(e)
p(n)
m(n,t)
return n}function p(e){for(var t in e){if(!e.hasOwnProperty(t)){continue}var i=e[t]
if(r.isObject(i)){p(i)
if(i.type==n.Syntax.UnaryExpression){var a=i.argument
if(a.type===n.Syntax.Literal&&r.isNumber(a.value)){if(i.operator==="-"){a.value=-a.value
e[t]=a}else if(i.operator==="+"){a.value=+a.value
e[t]=a}}}}}}function m(e,t){for(var i in e){if(!e.hasOwnProperty(i)){continue}if(r.isObject(e[i])){if(d(e[i])){e[i]=undefined}else if(g(e[i])){var a=e[i].name
if(!t.values[a]){t.values[a]={}
e[i]={wildcardVar:a}
t.order.push(a)
t.skipData[a]=0}else{e[i]=t.values[a]}}else if(e[i].type===n.Syntax.EmptyStatement){r.isArray(e)?e.splice(i,1):delete e[i]}else{m(e[i],t)}}}}function d(e){return e.name&&e.name==="_"}function g(e){return e.name&&r.isString(e.name)&&e.name.length>=2&&e.name[0]==="$"}function v(e){return e&&e.name&&(e.name==="glob_"&&"_"||e.name.indexOf("glob$")===0&&e.name.slice(5))||e&&e.expression&&v(e.expression)}function y(e,t,n,i,a,s){if(r.isArray(t)){console.error("toFind should never be an array.")
console.error(t)}if(e==undefined){if(t==undefined){a._.push(e)
return a}else{return false}}if(w(e,t,n,i,a,s)){return a}if(s.single){return false}for(var o in e){if(!e.hasOwnProperty(o)||!r.isObject(e[o])){continue}if(r.isArray(e[o])&&b(e[o],t,n,i,a,s)||!r.isArray(e[o])&&y(e[o],t,n,i,a,s)){return a}}return false}function b(e,t,n,r,i,a){var s
for(var o=0;o<e.length;o+=1){if(v(t)){if(!s){s=[]
var l=v(t)
if(l==="_"){i._.push(s)}else{i.vars[l]=s}}s.push(e[o])}else if(y(e[o],t,n,r,i,a)){if(!n||n.length===0){return i}else{t=n.shift()}}}if(s){return i}else if(v(t)){var l=v(t)
if(l==="_"){i._.push([])}else{i.vars[l]=[]}return i}return false}function x(e){return function(t,n,i,a,s,o){var l
for(l=0;l<a.order.length;l++){var u=a.values[a.order[l]]
if(r.isEmpty(u)){break}}var f=e(t,n,i,a,s,o)
if(!f){for(;l<a.order.length;l++){var u=a.values[a.order[l]]
if(!r.isEmpty(u)){r.each(u,function(e,t){delete u[t]})}else{break}}a._last=l}return f}}var k=x(function(e,t,n,r,i,a){var s
for(var o=0;o<e.length;o+=1){if(v(t)){if(!s){s=[]
var l=v(t)
if(l==="_"){i._.push(s)}else{i.vars[l]=s}}s.push(e[o])}else{if(y(e[o],t,n,r,i,a)){if(!n||n.length===0){return i}else{t=n.shift()}}else{return false}}}if(s){return i}else if(v(t)){var l=v(t)
if(l==="_"){i._.push([])}else{i.vars[l]=[]}return i}return false})
function w(e,t,n,i,a,s){var o
if(!a.root&&e.type!=="Program"){o=e}for(var l in t){if(!t.hasOwnProperty(l)||t[l]===null){continue}var u=t[l]
var f=e[l]
if(u===undefined){if(f==undefined){return false}else{a._.push(f)
continue}}if(f==null){if(l==="wildcardVar"){if(i.leftToSkip&&i.leftToSkip[u]>0){i.leftToSkip[u]-=1
return false}r.extend(i.values[u],e)
a.vars[u.slice(1)]=e
if(o){a.root=o}return a}return false}if(r.isObject(f)!==r.isObject(u)||r.isArray(f)!==r.isArray(u)||typeof f!==typeof u){return false}else if(r.isArray(f)){if(u.length===0){continue}var c=u[0]
var h=u.slice(1)
if(l==="params"||l==="arguments"){if(!k(f,c,h,i,a,s)){return false}}else if(!b(f,c,h,i,a,s)){return false}}else if(r.isObject(f)){if(!y(f,u,n,i,a,s)){return false}}else{if(f!==u){return false}}}if(t===undefined){a._.push(e)}if(o){a.root=o}return a}function E(e){return JSON.parse(JSON.stringify(e))}function S(e,t){if(!Rainbow){return e}Rainbow.color(e,"javascript",function(e){var n="<pre class='rainbowjs'>"+A(e)+"</pre>"
t(n)})}function A(e,t){if(!t){A.styleMap={}
A.counter=0}e=e.replace(/(^|[^A-Za-z0-9])_(?![A-Za-z0-9])/g,"$1<span class='structuredjs_blank'></span>")
var n=/(?:(^|[^\w])\$(\w+))|(?:\$<span class="function call">(\w+)<\/span>)/g
return e.replace(n,function(e,t,n,r){t=t||""
n=n||r
var i=A
if(!(n in i.styleMap)){i.styleMap[n]=i.counter<i.styles.length?i.styles[i.counter]:"extra"
i.counter+=1}return t+"<span class='structuredjs_var "+i.styleMap[n]+"'>"+"</span>"})}A.styles=["one","two","three","four","five","six","seven"]
A.styleMap={}
A.counter=0
function _(e,t){if(!e||e.type!=="Identifier"){return}if(e.name==="_"){if(!t._||t._.length===0){throw"No _ data available."}return t._.shift()}else if(e.name&&e.name.indexOf("$")===0){var n=e.name.slice(1)
if(!t.vars||!(n in t.vars)){throw"No vars available."}return t.vars[n]}}function C(e,t){var n=e&&e.expression||e
if(!n||n.type!=="Identifier"){return}if(n.name==="glob_"){if(!t._||t._.length===0){throw"No _ data available."}return t._.shift()}else if(n.name&&n.name.indexOf("glob$")===0){var r=n.name.slice(5)
if(!t.vars||!(r in t.vars)){throw"No vars available."}return t.vars[r]}}function T(e,t){if(!e){return e}for(var n in e){if(!e.hasOwnProperty(n)){continue}if(e[n]&&typeof e[n]==="object"&&"length"in e[n]){for(var r=0;r<e[n].length;r++){var i=C(e[n][r],t)
if(i){e[n].splice.apply(e[n],[r,1].concat(i))
break}else if(typeof e[n][r]==="object"){var a=_(e[n][r],t)
if(a){e[n][r]=a}else if(typeof e[n][r]==="object"){T(e[n][r],t)}}}}else{var a=_(e[n],t)
if(a){e[n]=a}else if(typeof e[n]==="object"){T(e[n],t)}}}return e}t.match=u
t.matchNode=function(e,t,n){n=n||{}
n.single=true
return u(e,t,n)}
t.injectData=function(e,t){e=c(e)
t=E(t)
return T(e,t)}
t.prettify=S})(typeof window!=="undefined"?window:global)
window.ASTBuilder={AssignmentExpression:function e(t,n,r){return{type:"AssignmentExpression",left:t,operator:n,right:r}},BinaryExpression:function t(e,n,r){return{type:"BinaryExpression",left:e,operator:n,right:r}},BlockStatement:function n(e){return{type:"BlockStatement",body:e}},CallExpression:function r(e,t){return{type:"CallExpression",callee:e,arguments:t}},ExpressionStatement:function i(e){return{type:"ExpressionStatement",expression:e}},Identifier:function a(e){return{type:"Identifier",name:e}},IfStatement:function s(e,t){var n=arguments.length<=2||arguments[2]===undefined?null:arguments[2]
return{type:"IfStatement",test:e,consequent:t,alternate:n}},Literal:function o(e){return{type:"Literal",value:e}},MemberExpression:function l(e,t){var n=arguments.length<=2||arguments[2]===undefined?false:arguments[2]
return{type:"MemberExpression",object:e,property:t,computed:n}},UpdateExpression:function u(e,t,n){return{type:"UpdateExpression",argument:e,operator:t,prefix:n}},VariableDeclaration:function f(e,t){return{type:"VariableDeclaration",declarations:e,kind:t}}}
window.walkAST=function(e,t,n){if(t===null){t=[e]}else{t.push(e)}n.forEach(function(n){if(n.enter){n.enter(e,t)}})
var r=true
var i=false
var a=undefined
try{for(var s=Object.keys(e)[Symbol.iterator](),o;!(r=(o=s.next()).done);r=true){var l=o.value
if(e.hasOwnProperty(l)&&e[l]instanceof Object){if(Array.isArray(e[l])){var u=0
while(u<e[l].length){var f=e[l][u]
u+=walkAST(f,t,n)}}else if(e[l].type){walkAST(e[l],t,n)}}}}catch(c){i=true
a=c}finally{try{if(!r&&s["return"]){s["return"]()}}finally{if(i){throw a}}}var h=1
n.forEach(function(n){if(n.leave){(function(){var r=n.leave(e,t)
if(r){if(r instanceof Array){var i=t[t.length-2]
if(i.body){var a=i.body.findIndex(function(t){return t===e})
Array.prototype.splice.apply(i.body,[a,1].concat(r))
h=r.length}}else{Object.keys(e).forEach(function(t){delete e[t]})
Object.keys(r).forEach(function(t){e[t]=r[t]})}}})()}})
t.pop()
return h}
window.LoopProtector=function(e,t,n){this.callback=e||function(){}
this.timeout=200
this.branchStartTime=0
this.loopCounts={}
this.reportLocation=n
this.loopBreak=esprima.parse("KAInfiniteLoopProtect()").body[0]
if(t){this.mainTimeout=t.initialTimeout
this.asyncTimeout=t.frameTimeout}this.KAInfiniteLoopProtect=this._KAInfiniteLoopProtect.bind(this)
this.KAInfiniteLoopSetTimeout=this._KAInfiniteLoopSetTimeout.bind(this)
visibly.onVisible(function(){this.visible=true
this.branchStartTime=0}.bind(this))
visibly.onHidden(function(){this.visible=false}.bind(this))
this.visible=!visibly.hidden()}
window.LoopProtector.prototype={_KAInfiniteLoopProtect:function c(e){var t=this
if(e){if(!this.loopCounts[e]){this.loopCounts[e]=0}this.loopCounts[e]+=1}var n=(new Date).getTime()
if(!this.branchStartTime){this.branchStartTime=n
setTimeout(function(){this.branchStartTime=0}.bind(this),0)}else if(n-this.branchStartTime>this.timeout){if(this.visible){(function(){if(!t.reportLocation){var e=new Error("KA_INFINITE_LOOP")
t.callback(e)
throw e}var n=0
var r=null
Object.keys(t.loopCounts).forEach(function(e){if(t.loopCounts[e]>n){n=t.loopCounts[e]
r=e}})
r=JSON.parse(r)
var i={infiniteLoopNodeType:r.type,row:r.loc.start.line-1}
t.callback(i)
throw i})()}}},_KAInfiniteLoopSetTimeout:function h(e){this.timeout=e
this.branchStartTime=0},riskyStatements:["DoWhileStatement","WhileStatement","ForStatement","FunctionExpression","FunctionDeclaration"],leave:function p(e){var t=window.ASTBuilder
if(this.riskyStatements.indexOf(e.type)!==-1){if(this.reportLocation){var n={type:e.type,loc:e.loc}
e.body.body.unshift(t.IfStatement(t.BinaryExpression(t.Identifier("KAInfiniteLoopCount"),">",t.Literal(1e3)),t.BlockStatement([t.ExpressionStatement(t.CallExpression(t.Identifier("KAInfiniteLoopProtect"),[t.Literal(JSON.stringify(n))])),t.ExpressionStatement(t.AssignmentExpression(t.Identifier("KAInfiniteLoopCount"),"=",t.Literal(0)))])))
e.body.body.unshift(t.ExpressionStatement(t.UpdateExpression(t.Identifier("KAInfiniteLoopCount"),"++",false)))}else{e.body.body.unshift(this.loopBreak)}}if(e.type==="Program"){if(this.mainTimeout){e.body.unshift(t.ExpressionStatement(t.CallExpression(t.Identifier("KAInfiniteLoopSetTimeout"),[t.Literal(this.mainTimeout)])))}if(this.asyncTimeout){e.body.push(t.ExpressionStatement(t.CallExpression(t.Identifier("KAInfiniteLoopSetTimeout"),[t.Literal(this.asyncTimeout)])))}}},protect:function m(e){var t=esprima.parse(e,{loc:true})
walkAST(t,null,[this])
return escodegen.generate(t)}}
window.ASTTransforms={}
var b=window.ASTBuilder
ASTTransforms.rewriteAssertEquals={leave:function d(e,t){if(e.type==="Identifier"&&e.name==="Program"){var n=t[t.length-2]
if(n.type==="MemberExpression"&&n.object===e&&n.property.type==="Identifier"&&n.property.name==="assertEqual"){var r=t[t.length-3]
if(r.type==="CallExpression"){r.arguments.push(b.Literal(r.loc.start.line),b.Literal(r.loc.start.column))}}}}}
var isReference=function g(e,t){if(t.type==="Property"&&t.key===e){return false}if(t.type==="VariableDeclarator"&&t.id===e){return false}var n=t.type==="MemberExpression"
var r=n&&t.property===e&&t.computed
var i=n&&t.object===e
return!n||r||i}
var drawLoopMethods=["draw","mouseClicked","mouseDragged","mouseMoved","mousePressed","mouseReleased","mouseScrolled","mouseOver","mouseOut","touchStart","touchEnd","touchMove","touchCancel","keyPressed","keyReleased","keyTyped"]
var scopes=[{}]
ASTTransforms.rewriteContextVariables=function(e,t){return{enter:function n(e,t){if(/^Function/.test(e.type)){(function(){var t={}
e.params.forEach(function(e){t[e.name]=true})
scopes.push(t)})()}if(e.type==="VariableDeclarator"){var n=scopes[scopes.length-1]
n[e.id.name]=true}},leave:function r(n,i){var a=i[i.length-2]
if(n.type==="Identifier"){if(isReference(n,a)){var s=-1
for(var o=scopes.length-1;o>-1;o--){if(scopes[o][n.name]){s=o
break}}var l=/^Function/.test(a.type)&&a.params.includes(n)
if(l){return}if(a.type==="CatchClause"){return}if(["undefined","Infinity","NaN","arguments"].includes(n.name)){return}if(n.name in t&&s===-1||s===0){return b.MemberExpression(b.Identifier(e),b.Identifier(n.name))}}}else if(n.type==="VariableDeclaration"){if(n.declarations.length===1){var u=n.declarations[0]
if(u.init===null&&a.type!=="ForInStatement"){return}if(scopes.length===1){if(["Program","BlockStatement","SwitchCase"].includes(a.type)){return b.ExpressionStatement(b.AssignmentExpression(b.MemberExpression(b.Identifier(e),b.Identifier(u.id.name)),"=",u.init))}else{if(["ForStatement"].includes(a.type)){return b.AssignmentExpression(b.MemberExpression(b.Identifier(e),b.Identifier(u.id.name)),"=",u.init)}else if(["ForInStatement"].includes(a.type)){return b.MemberExpression(b.Identifier(e),b.Identifier(u.id.name))}}}}else{if(scopes.length===1){if(["Program","BlockStatement"].includes(a.type)){return n.declarations.filter(function(e){return e.init!==null}).map(function(t){return b.ExpressionStatement(b.AssignmentExpression(b.MemberExpression(b.Identifier(e),b.Identifier(t.id.name)),"=",t.init))})}else{return{type:"SequenceExpression",expressions:n.declarations.map(function(t){return b.AssignmentExpression(b.MemberExpression(b.Identifier(e),b.Identifier(t.id.name)),"=",t.init)})}}}else if(n.declarations.some(function(e){return drawLoopMethods.includes(e.id.name)})){return n.declarations.filter(function(e){return e.init!==null}).map(function(e){return b.VariableDeclaration([e],n.kind)})}}}else if(/^Function/.test(n.type)){scopes.pop()}}}}
ASTTransforms.checkForBannedProps=function(e){return{leave:function t(n,r){if(n.type==="Identifier"&&e.includes(n.name)){throw{row:n.loc.start.line-1,html:"Use of <code>"+n.name+"</code> as an identifier is prohibited."}}}}}
ASTTransforms.findResources=function(e){return{leave:function t(n,r){if(n.type==="Literal"&&typeof n.value==="string"){AllImages.forEach(function(t){t.images.forEach(function(r){if(n.value.indexOf(r)!==-1){e[t.groupName+"/"+r+".png"]=true}})})
OutputSounds.forEach(function(t){t.groups.forEach(function(t){t.sounds.forEach(function(r){if(n.value.indexOf(r)!==-1){e[t.groupName+"/"+r+".mp3"]=true}})})})}}}}
var memberExpressionToString=function v(e){if(e.type==="Identifier"){return e.name}else if(e.type==="MemberExpression"){return v(e.object)+"."+e.property.name}}
ASTTransforms.rewriteNewExpressions=function(e){return{leave:function t(n,r){if(n.type==="NewExpression"){var i=memberExpressionToString(n.callee)
return b.CallExpression(b.CallExpression(b.MemberExpression(b.MemberExpression(b.Identifier(e),b.Identifier("PJSOutput")),b.Identifier("applyInstance")),[n.callee,b.Literal(i)]),n.arguments)}}}}
__KA_exports.Processing = Processing;
__KA_exports.JSHINT = JSHINT;
__KA_exports.esprima = esprima;
__KA_exports.Structured = Structured;
this.esprima = esprima;
this.Processing = Processing;
this.JSHINT = JSHINT;
this.Structured = Structured;
});
KAdefine("third_party/javascript-khansrc/live-editor/build/js/live-editor.output_pjs.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../../../javascript/shared-package/i18n.js");
__KA_require("../../../../../javascript/node_modules/jquery/index.js");
__KA_require("../../../../../javascript/node_modules/underscore/index.js");
__KA_require("../../../../../javascript/node_modules/backbone/index.js");
__KA_require("./live-editor.output.js");
__KA_require("./live-editor.output_pjs_deps.js");
window.PJSUtils={codeFromFunction:function e(t){var n=t.toString()
n=n.substr(n.indexOf("{")+1)
return n.substr(0,n.length-1)},cleanupCode:function t(e){var t=e.split("\n").filter(function(e){return e!==""})
var n=t[0].length-t[0].trim().length
return t.map(function(e){return e.substring(n)}).join("\n").trim()}}
var _slicedToArray=function(){function e(e,t){var n=[]
var r=true
var i=false
var s=undefined
try{for(var o=e[Symbol.iterator](),a;!(r=(a=o.next()).done);r=true){n.push(a.value)
if(t&&n.length===t)break}}catch(u){i=true
s=u}finally{try{if(!r&&o["return"])o["return"]()}finally{if(i)throw s}}return n}return function(t,n){if(Array.isArray(t)){return t}else if(Symbol.iterator in Object(t)){return e(t,n)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}()
var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n)
if(r)e(t,r)
return t}}()
function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var PJSCodeInjector=function(){function e(t){_classCallCheck(this,e)
var n={sandboxed:true,envName:"__env__"}
Object.assign(this,n,t)
this.DUMMY=this.processing.draw
this.seed=null
this.addMethods(this.additionalMethods)
this.reseedRandom()
this.drawLoopMethods=["draw","mouseClicked","mouseDragged","mouseMoved","mousePressed","mouseReleased","mouseScrolled","mouseOver","mouseOut","touchStart","touchEnd","touchMove","touchCancel","keyPressed","keyReleased","keyTyped"]
this.liveReset={background:[255,255,255],colorMode:[1],ellipseMode:[3],fill:[255,255,255],frameRate:[60],imageMode:[0],rectMode:[0],stroke:[0,0,0],strokeCap:["round"],strokeWeight:[1],textAlign:[37,0],textAscent:[9],textDescent:[12],textFont:["Arial",12],textLeading:[14],textSize:[12]}
this.idempotentCalls=["createFont"]
if(!this.props){this.initializeProps()}this.loopProtector=new LoopProtector(this.infiniteLoopCallback,this.loopProtectTimeouts,true)
this.hintWorker=new PooledWorker("pjs/jshint-worker.js",function(e,t){if(!window.Worker){JSHINT(e)
t(JSHINT.data(),JSHINT.errors)
return}var n=this.getWorkerFromPool()
n.onmessage=function(e){if(e.data.type==="jshint"){if(this.isCurrentWorker(n)){var r=e.data.message
t(r.hintData,r.hintErrors)}this.addWorkerToPool(n)}}.bind(this)
n.postMessage({code:e,externalsDir:this.externalsDir,jshintFile:this.jshintFile})})}_createClass(e,[{key:"addMethods",value:function t(e){var t=this
if(this.sandboxed){this.processing.Object=window.Object
this.processing.RegExp=window.RegExp
this.processing.Math=window.Math
this.processing.Array=window.Array
this.processing.String=window.String
this.processing.isNaN=window.isNaN}Object.assign(this.processing,{getImage:function n(e){return t.resourceCache.getImage(e)},loadImage:function r(e){throw{message:"Use getImage instead of loadImage."}},requestImage:function i(e){throw{message:"Use getImage instead of requestImage."}},link:function s(){throw{message:i18n._("link() method is disabled.")}},getSound:function o(e){return t.resourceCache.getSound(e)},playSound:function a(e){if(e&&e.audio&&e.audio.play){e.audio.currentTime=0
e.audio.play()}else{throw{message:i18n._("No sound file provided.")}}},debug:function u(){console.log.apply(console,arguments)}})
Object.assign(this.processing,e)}},{key:"initializeProps",value:function n(){var e=this.props={},t=this.safeCalls={}
for(var n in this.processing){if(n.indexOf("__")<0){var r=this.processing[n],i=typeof r==="function"
e[n]=!(/^[A-Z]/.test(n)||n==="height"||n==="width"||n==="key"||i&&n.indexOf("key")<0)
if(i){try{var s=String(r)
if(this.idempotentCalls.indexOf(n)!==-1||/native code/.test(s)||/return /.test(s)&&!/p\./.test(s)&&!/new P/.test(s)){t[n]=true}}catch(o){}}}}t.PVector=true
t.color=true
t.arc=true
t.createGraphics=true
e.draw=true}},{key:"restoreRandomSeed",value:function r(){this.processing.randomSeed(this.seed)}},{key:"reseedRandom",value:function i(){this.seed=Math.floor(Math.random()*4294967296)}},{key:"clear",value:function s(){var e=this
Object.keys(this.liveReset).forEach(function(t){e.processing[t].apply(e.processing,e.liveReset[t])})}},{key:"restart",value:function o(){this.lastGrab=null
this.lastGrabObj=null
this.reseedRandom()
this.processing.frameCount=0
this.processing._clearLogs()}},{key:"propListString",value:function a(e){var t={externals:true}
var n=[]
Object.keys(e).forEach(function(r){if(!t[r]){n.push(r+":"+e[r])}})
return n.join(",")}},{key:"lint",value:function u(e,t){var n=this
var r=$.Deferred()
if(t||!e){r.resolve([])
return r}var i="/*jshint "+this.propListString(this.JSHint)+" */"+("/*global "+this.propListString(this.props)+" */\n")+e
this.hintWorker.exec(i,function(e,t){n.globals=n.extractGlobals(e)
r.resolve(t)})
return r}},{key:"extractGlobals",value:function c(e){var t={}
var n=this.props
if(e&&e.globals){for(var r=0,i=e.globals.length;r<i;r++){var s=e.globals[r]
if(!n[s]&&!(s in this.processing)){this.processing[s]=undefined}t[s]=true}}return t}},{key:"objectExtract",value:function f(e,t,n){if(!this.processing[e]){if($.isArray(t)){this.processing[e]=[]}else if($.isFunction(t)){this.processing[e]=function(){}}else{this.processing[e]={}}}if(n){t=t[n]}for(var r in t){if(t.hasOwnProperty(r)&&r.indexOf("__")<0){if(typeof t[r]==="function"){this.grabObj[e+(n?"."+n:"")+"['"+r+"']"]=PJSOutput.stringify(t[r])}else{var i=this.processing[e]
if(n){i=i[n]}i[r]=t[r]}}}}},{key:"hasOrHadDrawLoop",value:function l(){for(var e=0,t=this.drawLoopMethods.length;e<t;e++){var n=this.drawLoopMethods[e]
if(this.globals[n]||this.lastGrab&&this.lastGrab[n]){return true}}return false}},{key:"drawLoopMethodDefined",value:function h(){for(var e=0,t=this.drawLoopMethods.length;e<t;e++){var n=this.drawLoopMethods[e]
if(this.processing[n]!==this.DUMMY&&this.processing[n]!==undefined){return true}}return false}},{key:"runCode",value:function d(e,t){var n=this
try{var r=PJSResourceCache.findResources(e)
this.resourceCache.cacheResources(r).then(function(){n.injectCode(e,t)})}catch(i){var s=i.message.split(":")
var o=_slicedToArray(s,2)
var a=o[0]
var u=o[1]
if(u.trim()==="Unexpected token ILLEGAL"){u=i18n._("Unexpected character.")}else{u=i18n._("Parser error.")}t([{type:"error",source:"esprima",column:0,row:parseInt(/[1-9][0-9]*/.exec(a),10)-1,text:u}])}}},{key:"injectCode",value:function p(e,t){var n=this
var r={}
var i=[]
var s=[]
var o=false
var a={}
var u={}
var c=this.props
var f=""
this.grabObj={}
PJSOutput.instances=[]
var l=this.hasOrHadDrawLoop()
if(l){_.each(this.globals,function(e,t){var n=this.processing[t]
r[t]=typeof n==="function"&&!this.safeCalls[t]?function(){if(typeof i!=="undefined"){i.push([t,arguments])}return 0}:n}.bind(this))
var h=this.exec(e,r)
if(h){return t([h])}_.each(r,function(e,t){if(typeof e==="function"){e.__name=t}})
for(var d=0,p=PJSOutput.instances.length;d<p;d++){u[PJSOutput.instances[d].constructor.__name]=true}if(this.oldInstances&&PJSOutput.stringifyArray(this.oldInstances)!==PJSOutput.stringifyArray(PJSOutput.instances)){o=true}if(/createGraphics[\s\n]*\(/.test(e)){o=true}this.oldInstances=PJSOutput.instances
PJSOutput.instances=[]
var g=function(e){v=Array.prototype.slice.call(i[e][1])
m=v.map(function(t,r){if(!_.isArray(t)&&_.isObject(t)){var s="__obj__"+i[e][0]+"__"+r
n.processing[s]=t
return s}else{return PJSOutput.stringify(t)}})
s.push(i[e][0]+"("+m.join(", ")+");")}
for(var d=0;d<i.length;d++){var v
var m
g(d)}_.each(r,function(e,t){if(/^KAInfiniteLoop/.test(t)){return}if(/^PJSOutput/.test(t)){return}try{r[t]=PJSOutput.stringify(r[t])
if(this.lastGrab&&c[t]!==false&&(!(t in this.lastGrab)||r[t]!==this.lastGrab[t])){if(typeof e==="function"){if(u[t]){o=true}a[t]=true
f+="var "+t+" = "+r[t]+";\n"
f+=t+".__name = '"+t+"';\n"}else{if(!_.isArray(e)&&_.isObject(e)&&!_.isArray(this.processing[t])&&_.isObject(this.processing[t])){for(var n in e){if(e.hasOwnProperty(n)){this.processing[t][n]=e[n]}}}else{this.processing[t]=e}}}if(typeof e==="function"&&c[t]!==false){this.objectExtract(t,e)
this.objectExtract(t,e,"prototype")}}catch(i){this.objectExtract(t,e)}}.bind(this))
_.each(this.grabObj,function(e,t){var n=/^[^.[]*/.exec(t)[0]
if(!this.lastGrabObj||this.lastGrabObj[t]!==e||a[n]){f+=t+" = "+e+";\n"}}.bind(this))
for(var y in this.lastGrabObj){if(!(y in this.grabObj)){f+="delete "+y+";\n"}}for(var b in this.lastGrab){if(/^KAInfiniteLoop/.test(b)){continue}if(!(b in r)&&(!(b in this.props)||_.contains(this.drawLoopMethods,b))){f+="delete "+b+";\n"
if(b==="draw"){this.clear()
this.processing.draw=this.DUMMY}}}}this.processing.resetMatrix()
this.restoreRandomSeed()
if(this.lastGrab){Object.keys(this.liveReset).forEach(function(e){if(!n.globals[e]&&n.lastGrab[e]){n.processing[e].apply(n.processing,n.liveReset[e])}})}if(!l||!this.drawLoopMethodDefined()||!this.lastGrab||o){this.clear()
this.processing._clearLogs()
if(this.globals.draw){e+="\ndraw();"}var h=this.exec(e,this.processing)
if(h){return t([h])}_.each(this.globals,function(e,t){if(typeof e==="function"){e.__name=t}})}else if(f||s.length>0){if(this.globals.draw){f+="\ndraw();"}var h=this.exec(f,this.processing,s)
if(h){return t([h])}}if(!this.processing.draw){this.processing.draw=this.DUMMY}if(l){this.lastGrab=r
this.lastGrabObj=this.grabObj}if(t){try{t([])}catch(w){}}}},{key:"transformCode",value:function g(e,t,n){var r=arguments.length<=3||arguments[3]===undefined?{}:arguments[3]
var i=this.envName
var s=this.enableLoopProtect
var o=this.loopProtector
var a=true
if(r.hasOwnProperty("rewriteNewExpression")){a=r.rewriteNewExpression}t.KAInfiniteLoopProtect=this.loopProtector.KAInfiniteLoopProtect
t.KAInfiniteLoopSetTimeout=this.loopProtector.KAInfiniteLoopSetTimeout
t.KAInfiniteLoopCount=0
t.PJSOutput=PJSOutput
var u=new RegExp(i+"\\.","g")
var c=esprima.parse(e.replace(u,""),{loc:true})
var f=[]
if(!n){f.push(ASTTransforms.checkForBannedProps(["__env__","KAInfiniteLoopCount","KAInfiniteLoopProtect","KAInfiniteLoopSetTimeout"]))}else{f.push(ASTTransforms.checkForBannedProps(["__env__"]))}if(s&&!n){f.push(o)}f.push(ASTTransforms.rewriteAssertEquals)
if(a){f.push(ASTTransforms.rewriteNewExpressions(i,t))}try{walkAST(c,null,f)}catch(l){return l}walkAST(c,null,[ASTTransforms.rewriteContextVariables(i,t)])
e=""
if(n){e+=n.map(function(e){e=e.replace(/__obj__/g,i+".__obj__")
return i+"."+e}).join("\n")}return e+escodegen.generate(c)}},{key:"exportCode",value:function v(e,t,n){var r={rewriteNewExpression:false}
var i=this.transformCode(e,this.processing,null,r)
var s=""
var o=PJSResourceCache.findResources(i)
s+="var resources = "+JSON.stringify(o)+";\n"
s+=PJSUtils.cleanupCode(PJSUtils.codeFromFunction(function(){var e=[]
var r=document.createElement("div")
r.style.height=0
r.style.width=0
r.style.overflow="hidden"
r.style.position="absolute"
document.body.appendChild(r)
var i=function u(n){var i=$.Deferred()
var s=document.createElement("img")
s.onload=function(){e[n]=s
i.resolve()}.bind(this)
s.onerror=function(){i.resolve()}.bind(this)
s.src=t+n
r.appendChild(s)
e[n]=s
return i.promise()}
var s=function c(t){var r=$.Deferred()
var i=document.createElement("audio")
var s=t.split("/")
var o=_.findWhere(OutputSounds[0].groups,{groupName:s[0]})
if(!o||o.sounds.indexOf(s[1].replace(".mp3",""))===-1){r.resolve()
return r}i.preload="auto"
i.oncanplaythrough=function(){e[t]=i
r.resolve()}.bind(this)
i.onerror=function(){r.resolve()}.bind(this)
i.src=n+t
return r}
var a=Object.keys(o).map(function(e){if(e.indexOf(".png")!==-1){return i(e)}else if(e.indexOf(".mp3")!==-1){return s(e)}})
$.when.apply($,a).then(function(){var t=document.createElement("canvas")
t.width=400
t.height=400
var n=new Processing(t)
n.width=400
n.height=400
n.getSound=function(t){return e[t+".mp3"]}
n.playSound=function(e){if(e&&e.play){e.currentTime=0
e.play()}else{throw new Error("No sound file provided.")}}
n.getImage=function(t){return new n.PImage(e[t+".png"])}
if(n.draw){n.loop()}})}))+"\n"
return s.replace(/\/\/ __USERCODE__/g,i).replace(/\/\/ __IMAGEDIR__/g,'var imageDir = "'+t+'"').replace(/\/\/ __SOUNDDIR__/g,'var soundDir = "'+n+'"')}},{key:"exec",value:function m(e,t,n){if(!e){return}var r=i18n._("This program uses capabilities we've turned "+"off for security reasons. Khan Academy prohibits showing "+"external images, playing external sounds, or displaying pop-ups.")
var i="{ get externals() { throw { message: "+JSON.stringify(r)+" } } }"
try{if(this["debugger"]){this["debugger"].exec(e)}else{var s=this.transformCode(e,t,n)
var o="var "+this.envName+" = context;\n"+("(function(){\n"+s+"\n}).apply("+i+");")
var a=new Function("context",o)
a(t)}}catch(u){return u}}}])
return e}()
window.PJSCodeInjector=PJSCodeInjector
window.PJSTester=function(e){this.initialize(e)
this.bindTestContext()}
PJSTester.prototype=new OutputTester
PJSTester.prototype.testMethods={firstMatchingPattern:function n(e){return _.find(e,_.bind(function(e){return this.testContext.matches(e)},this))},hasFnCall:function r(e,t){for(var n=0,r=this.fnCalls.length;n<r;n++){var i=this.testContext.checkFn(this.fnCalls[n],e,t)
if(i===true){return}}this.testContext.assert(false,i18n._("Expected function call to '%(name)s' was not made.",{name:e}))},orderedFnCalls:function i(e){var t=0
for(var n=0,r=this.fnCalls.length;n<r;n++){var i=this.testContext.checkFn(this.fnCalls[n],e[t][0],e[t][1])
if(i===true){t+=1
if(t===e.length){return}}}this.testContext.assert(false,i18n._("Expected function call to '%(name)s' was not made.",{name:e[t][0]}))},checkFn:function s(e,t,n){if(e.name!==t){return}var r=true
if(typeof n==="object"){if(n.length!==e.args.length){r=false}else{for(var i=0;i<n.length;i++){if(n[i]!==null&&n[i]!==e.args[i]){r=false}}}}else if(typeof n==="function"){r=n(e)}if(r){this.testContext.assert(true,i18n._("Correct function call made to %(name)s.",{name:t}))}return r},_isVarName:function o(e){return _.isString(e)&&e.length>0&&e[0]==="$"},_assertVarName:function a(e){if(!this.testContext._isVarName(e)){throw new Error(i18n._("Expected '%(name)s' to be a valid variable name.",{name:e}))}},unaryOp:function u(e,t){this.testContext._assertVarName(e)
return this.testContext.constraint([e],function(e){return!!(e&&!_.isUndefined(e.value)&&t(e.value))})},isLiteral:function c(e){function t(){return true}return this.testContext.unaryOp(e,t)},isNumber:function f(e){return this.testContext.unaryOp(e,_.isNumber)},isIdentifier:function l(e){return this.testContext.constraint([e],function(e){return!!(e&&e.type&&e.type==="Identifier")})},isBoolean:function h(e){return this.testContext.unaryOp(e,_.isBoolean)},isString:function d(e){return this.testContext.unaryOp(e,_.isString)},binaryOp:function p(e,t,n){var r=[]
var i
if(this.testContext._isVarName(e)){r.push(e)
if(this.testContext._isVarName(t)){r.push(t)
i=function(e,t){return!!(e&&t&&!_.isUndefined(e.value)&&!_.isUndefined(t.value)&&n(e.value,t.value))}}else{i=function(e){return!!(e&&!_.isUndefined(e.value)&&n(e.value,t))}}}else if(this.testContext._isVarName(t)){r.push(t)
i=function(t){return!!(t&&!_.isUndefined(t.value)&&n(e,t.value))}}else{throw new Error(i18n._("Expected either '%(first)s' or '%(second)s'"+" to be a valid variable name.",{first:e,second:t}))}return this.testContext.constraint(r,i)},lessThan:function g(e,t){return this.testContext.binaryOp(e,t,function(e,t){return e<t})},lessThanOrEqual:function v(e,t){return this.testContext.binaryOp(e,t,function(e,t){return e<=t})},greaterThan:function m(e,t){return this.testContext.binaryOp(e,t,function(e,t){return e>t})},positive:function y(e){return this.testContext.unaryOp(e,function(e){return e>0})},negative:function b(e){return this.testContext.unaryOp(e,function(e){return e<0})},greaterThanOrEqual:function w(e,t){return this.testContext.binaryOp(e,t,function(e,t){return e>=t})},inRange:function x(e,t,n){return this.testContext.and(this.testContext.greaterThanOrEqual(e,t),this.testContext.lessThanOrEqual(e,n))},equal:function C(e,t){return this.testContext.binaryOp(e,t,function(e,t){return e===t})},notEqual:function k(e,t){return this.testContext.binaryOp(e,t,function(e,t){return e!==t})},not:function O(e){return this.testContext.constraint(e.variables,function(){return!e.fn.apply({},arguments)})},_naryShortCircuitingOp:function S(e,t){var n=_.union.apply({},_.pluck(t,"variables"))
var r=_.object(_.map(n,function(e,t){return[e,t]}))
return this.testContext.constraint(n,function(){var n=arguments
return e(t,function(e){var t=_.map(e.variables,function(e){return n[r[e]]})
return e.fn.apply({},t)})})},and:function P(){return this.testContext._naryShortCircuitingOp(_.all,arguments)},or:function E(){return this.testContext._naryShortCircuitingOp(_.any,arguments)},structure:function j(e,t){return{pattern:e,constraint:t}},constraint:function H(e,t){return{variables:e,fn:t}},match:function I(e){if(this.errors.length){return{success:false,message:i18n._("Syntax error!")}}if(e&&_.isUndefined(e.pattern)){e={pattern:e}}if(!e||!e.pattern){return{success:false,message:""}}try{var t=e.constraint
var n=Structured.match(this.userCode,e.pattern,{varCallbacks:t})
return{success:n,message:t&&t.failure}}catch(r){if(window.console){console.warn(r)}return{success:true,message:i18n._("Hm, we're having some trouble "+"verifying your answer for this step, so we'll give "+"you the benefit of the doubt as we work to fix it. "+'Please click "Report a problem" to notify us.')}}},matches:function T(e){if(typeof e!=="object"){e=this.testContext.structure(e)}return this.testContext.match(e).success},_checkSyntaxErrors:function D(e){if(!e)return
var t=_.any(this.errors,function(e){return e.lint})
if(t){_.each(e,function(e){var t=this.userCode.search(e.re)
var n=-1,r=-1,i
if(t>-1){i=e.msg
var s=this.userCode.split("\n")
var o=0
_.each(s,function(e,i){if(n===-1&&t<o+e.length){n=i
r=t-o}o+=e.length})
this.errors.splice(0,1,{text:i,row:n,col:r,type:"error"})}}.bind(this))}},assertMatch:function A(e,t,n,r,i){this.testContext._checkSyntaxErrors(i)
var s
var o
if(e.success){s=e.message}else{o=e.message}this.testContext.assert(e.success,t,"",{structure:_.isString(n)?"function() {"+n+"}":n.toString(),alternateMessage:s,alsoMessage:o,image:r})}}
var BabyHint={EDIT_DISTANCE_THRESHOLD:2,keywords:["break","case","catch","continue","default","do","else","finally","for","function","if","in","instanceof","new","return","switch","this","throw","try","typeof","var","while","charAt","charCodeAt","fromCharCode","indexOf","lastIndexOf","length","pop","prototype","push","replace","search","shift","slice","substring","toLowerCase","toUpperCase","unshift"],functionParamCount:{acos:1,asin:1,atan:1,atan2:2,background:[1,3,4],beginShape:[0,1],bezier:8,bezierVertex:[6],box:[1,2,3],color:[1,2,3,4],colorMode:[1,2,4,5],createFont:[1,2],cos:1,curve:8,cursor:[0,1,2,3],endShape:[0,1],dist:4,fill:[1,3,4],filter:[1,2],get:[2,3,4,5],image:[3,5],line:4,loadImage:[1,3],getImage:1,mag:[2,3],max:2,min:2,noise:[1,2,3],PVector:[0,2,3],random:[0,1,2],RegExp:[1,2],rect:[4,5],scale:[1,2],set:[3,4],sin:1,stroke:[1,3,4],tan:1,text:[3,5],textAlign:[1,2],textFont:[1,2],translate:[2,3],vertex:[2,4]},functionFormSuggestion:{"function":"var drawWinston = function() { ... };","while":"while (x < 20) { ... };"},functionParamBlacklist:["debug","max","min"],bannedProperties:{location:true,document:true,ownerDocument:true,createElement:true},variables:[],errors:[],inComment:false,spellChecked:false,init:function B(e){for(var t in e.context){if(typeof e.context[t]==="function"){BabyHint.keywords.push(t)
if(!(t in BabyHint.functionParamCount)&&!_.include(BabyHint.functionParamBlacklist,t)){BabyHint.functionParamCount[t]=e.context[t].length}}}},initDocumentation:function M(e){for(var t=0;t<e.length;t++){var n=e[t]
var r=n.indexOf("(")
var i=n
if(r>=0){i=i.substring(0,r).trim()
BabyHint.functionFormSuggestion[i]=n}}},babyErrors:function J(e,t){var n={}
var r=(e||"").split("\n")
BabyHint.errors=[]
BabyHint.variables=[]
BabyHint.inComment=false
BabyHint.spellChecked=false
_.each(t,function(e){if(e){n[e.line-2]=true}})
_.each(r,function(e,t){BabyHint.errors=BabyHint.errors.concat(BabyHint.parseLine(e,t,n[t]))})
return BabyHint.errors},parseLine:function L(e,t,n){var r=[]
if(BabyHint.inComment){e=BabyHint.removeEndOfMultilineComment(e)}if(!BabyHint.inComment){e=BabyHint.removeStrings(e)
e=BabyHint.removeComments(e)
r=r.concat(BabyHint.checkFunctionDecl(e,t)).concat(BabyHint.checkTrailingEquals(e,t)).concat(BabyHint.checkFunctionParams(e,t)).concat(BabyHint.checkBannedProperties(e,t))
if(n){r=r.concat(BabyHint.checkSpaceAfterVar(e,t))
if(!BabyHint.spellChecked){r=r.concat(BabyHint.checkSpelling(e,t))
BabyHint.spellChecked=true}}BabyHint.variables=BabyHint.variables.concat(BabyHint.getVariables(e))}return r},removeComments:function R(e){var t=e.indexOf("//")
if(t!==-1){e=e.slice(0,t)}while(e.indexOf("/*")!==-1){t=e.indexOf("/*")
var n=e.indexOf("*/")
while(n!==-1&&n<=t+1){e=e.slice(0,n)+"  "+e.slice(n+2)
n=e.indexOf("*/")}if(n>t+1){var r=e.slice(t,n+2)
e=e.slice(0,t)+r.replace(/./g," ")+e.slice(n+2)}else if(n===-1){BabyHint.inComment=true
e=e.slice(0,t)}}return e},removeEndOfMultilineComment:function N(e){var t=e.indexOf("*/")
if(t!==-1){BabyHint.inComment=false
e=e.slice(0,t+2).replace(/./g," ")+e.slice(t+2)}return e},removeStrings:function F(e){var t=-1
var n=null
for(var r=0;r<e.length;r++){var i=e[r]
if(t===-1){if(i==='"'){t=r
n='"'}else if(i==="'"){t=r
n="'"}}else if(i===n){var s=e.slice(t+1,r)
e=e.slice(0,t+1)+s.replace(/./g," ")+e.slice(r)
t=-1}}return e},checkFunctionDecl:function U(e,t){var n=[]
var r=e.match(/function\s+\w+/g)
_.each(r,function(r){var i=r.split(/\s+/g)[1]
var s={row:t,column:e.indexOf(r),text:i18n._('If you want to define a function, you should use "var %(name)s = function() {}; " instead!',{name:i}),breaksCode:true,source:"funcdeclaration",context:{name:i}}
n.push(s)})
return n},checkBannedProperties:function G(e,t){var n=[]
var r=e.split(/[^~`@#\$\^\w]/g)
_.each(r,function(r){if(BabyHint.bannedProperties.hasOwnProperty(r)){var i={row:t,column:e.indexOf(r),text:i18n._("%(word)s is a reserved word.",{word:r}),breaksCode:true,source:"bannedwords",context:{word:r}}
n.push(i)}})
return n},checkSpelling:function V(e,t){var n=[]
var r=e.split(/[^~`@#\$\^\w]/g)
var i=false
var s=-1
_.each(r,function(r){if(r.length>0&&!i){var o=BabyHint.editDistance(r)
var a=o.editDistance
var u=o.keyword
if(a>0&&a<=BabyHint.EDIT_DISTANCE_THRESHOLD&&a<u.length-1&&BabyHint.keywords.indexOf(r)===-1){s=e.indexOf(r,s+1)
var c={row:t,column:s,text:i18n._('Did you mean to type "%(keyword)s" instead of "%(word)s"?',{keyword:u,word:r}),breaksCode:false,source:"spellcheck",context:{keyword:u,word:r}}
if(BabyHint.functionFormSuggestion[u]){c.text+=" "+i18n._('In case you forgot, you can use it like "%(usage)s"',{usage:BabyHint.functionFormSuggestion[u]})}n.push(c)}}i=r==="var"||r==="function"})
return n},editDistance:function W(e){var t=e
e=e.toLowerCase()
var n=function s(e,t,n){n=typeof n==="undefined"?0:n
var r=[]
for(var i=0;i<e;i++){r[i]=[]
for(var s=0;s<t;s++){r[i][s]=n}}return r}
var r=Infinity
var i=""
_.each(BabyHint.keywords.concat(BabyHint.variables),function(s){if(s===t){r=0
i=s
return}if(s.toLowerCase()===e&&s!==t){r=1
i=s
return}if(Math.abs(s.length-e.length)>BabyHint.EDIT_DISTANCE_THRESHOLD){return}var o=s.length
var a=e.length
var u=n(o,a,1)
if(s[0]===e[0]){u[0][0]=0}for(var c=1;c<a;c++){var f=s[0]===e[c]?0:1
u[0][c]=u[0][c-1]+f}for(var l=1;l<o;l++){var f=s[l]===e[0]?0:1
u[l][0]=u[l-1][0]+f}for(var h=1;h<o;h++){var d=Number.MAX_VALUE
for(var p=1;p<a;p++){var f=s[h]===e[p]?0:1
var g=_.min([u[h-1][p]+1,u[h][p-1]+1,u[h-1][p-1]+f])
d=Math.min(d,g)
u[h][p]=g}if(d>BabyHint.EDIT_DISTANCE_THRESHOLD){return}}if(u[o-1][a-1]<r){r=u[o-1][a-1]
i=s}})
return{editDistance:r,keyword:i}},checkSpaceAfterVar:function z(e,t){var n=[]
var r=/var\w+/g
var i=e.match(r)
if(i){var s=i[0].slice(3)
var o={row:t,column:e.search(r)+3,text:i18n._('Did you forget a space between "var" and "%(variable)s"?',{variable:s}),breaksCode:false}
n.push(o)}return n},checkTrailingEquals:function q(e,t){var n=[]
var r=e.length-1
while(e[r]===" "){r--}if(e[r]==="="){var i={row:t,column:r,text:i18n._('You can\'t end a line with "="'),breaksCode:true}
n.push(i)}return n},getVariables:function K(e){var t=[]
var n=/\s*var\s*([A-z]\w*)\s*(;|=)/
if(n.exec(e)){var r=n.exec(e)[1]
t.push(r)}var i=/function\s*\(([\w\s,]*)\)/
if(i.exec(e)){var s=RegExp.$1
var o=s.split(/\s*,\s*/)
_.each(o,function(e){if(e){t.push(e)}})}return t},checkFunctionParams:function Y(e,t){var n=[]
var r={}
var i=[]
for(var s=0;s<e.length;s++){if(e[s]==="("){i.push(s)}else if(e[s]===")"){if(i.length===0){var o={row:t,column:s,text:i18n._('It looks like you have an extra ")"'),breaksCode:false,source:"paramschecker",context:{}}
n.push(o)
return n}else{r[i.pop()]=s}}}if(i.length>0){var o={row:t,column:i.pop(),text:i18n._('It looks like you are missing a ")" - does every "(" have a corresponding closing ")"?'),breaksCode:false,source:"paramschecker",context:{}}
n.push(o)
return n}var a=e.match(/\w+\s*\(/g)||[]
var u=e.match(/\.\s*\w+\s*\(/g)||[]
u=_.map(u,function(e){var t=e.indexOf(e.match(/\w/g)[0])
return e.slice(t)})
for(var s=a.length-1;s>=0;s--){var c=e.lastIndexOf(a[s])
var f=a[s].split(/\(\s*/g)[0]
if(["for","if","while"].indexOf(f.trim())!==-1){continue}c+=f.length
var l=e.slice(c,r[c]+1)
var h=l.match(/[A-z0-9]+\s+[A-z0-9]+/g)
if(h){var d=e.indexOf(h[0])
while(e[d]!==" "){d++}var o={row:t,column:d,text:i18n._("Did you forget to add a comma between two parameters?"),breaksCode:false,source:"paramschecker",context:{}}
n.push(o)
break}var p
var g=l.match(/,/g)
if(g){p=g.length+1}else{p=l.match(/[^\s()]/g)?1:0}if(!_.include(u,a[s])){f=f.replace(/\s/g,"")
var v=BabyHint.functionParamCount[f]
var m
var y
if(typeof v!=="undefined"){y='"'+f+'()"'
if(typeof v==="number"&&p!==v){m=i18n.ngettext("%(name)s takes 1 parameter, not %(given)s!","%(name)s takes %(num)s parameters, not %(given)s!",v,{name:y,given:p})}else if(typeof v!=="number"&&!_.include(v,p)){var b=""+v[0]
for(var w=1;w<v.length-1;w++){b+=", "+v[w]}b+=" "+i18n._("or")+" "+v[v.length-1]
m=i18n._("%(name)s takes %(list)s parameters, not %(given)s!",{name:y,list:b,given:p})}}if(m){var x=BabyHint.functionFormSuggestion[f]
if(x){m=i18n._("It looks like you're trying to use %(name)s. In case you forgot, you can use it like: %(usage)s",{name:y,usage:'"'+x+'"'})}}if(m){var o={row:t,column:c,text:m,breaksCode:true,source:"paramschecker",context:{}}
n.push(o)}}e=e.slice(0,c)+l.replace(/./g,"0")+e.slice(r[c]+1)}return n}}
window.BabyHint=BabyHint
function PJSResourceCache(e){this.canvas=e.canvas
this.output=e.output
this.cache={}
this.imageHolder=null
if(!this.imageHolder){this.imageHolder=$("<div>").css({height:0,width:0,overflow:"hidden",position:"absolute"}).appendTo("body")}}PJSResourceCache.prototype.cacheResources=function(e){var t=this
var n=Object.keys(e).map(function(e){return t.loadResource(e)})
return $.when.apply($,n)}
PJSResourceCache.prototype.loadResource=function(e){if(e.endsWith(".png")){return this.loadImage(e)}else if(e.endsWith(".mp3")){return this.loadSound(e)}}
PJSResourceCache.prototype.loadImage=function(e){var t=$.Deferred()
var n=this.output.imagesDir+e
var r=document.createElement("img")
r.onload=function(){this.cache[e]=r
t.resolve()}.bind(this)
r.onerror=function(){t.resolve()}.bind(this)
r.src=n
this.imageHolder.append(r)
return t}
PJSResourceCache.prototype.loadSound=function(e){var t=$.Deferred()
var n=document.createElement("audio")
var r=e.split("/")
var i=_.findWhere(OutputSounds[0].groups,{groupName:r[0]})
var s=i&&i.sounds.includes(r[1].replace(".mp3",""))
if(!s){t.resolve()
return t}n.preload="auto"
n.oncanplaythrough=function(){this.cache[e]={audio:n,__id:function r(){return"getSound('"+e.replace(".mp3","")+"')"}}
t.resolve()}.bind(this)
n.onerror=function(){t.resolve()}.bind(this)
n.src=this.output.soundsDir+e
return t}
PJSResourceCache.prototype.getResource=function(e,t){switch(t){case"image":return this.getImage(e)
case"sound":return this.getSound(e)
default:throw"we can't load '"+t+"' resources yet"}}
PJSResourceCache.prototype.getImage=function(e){var t=this.cache[e+".png"]
if(!t){throw{message:i18n._("Image '%(file)s' was not found.",{file:e})}}var n=new this.canvas.PImage(t)
n.__id=function(){return"getImage('"+e+"')"}
return n}
PJSResourceCache.prototype.getSound=function(e){var t=this.cache[e+".mp3"]
if(!t){throw{message:i18n._("Sound '%(file)s' was not found.",{file:e})}}return t}
PJSResourceCache.findResources=function(e){var t=esprima.parse(e,{loc:true})
var n={}
walkAST(t,null,[ASTTransforms.findResources(n)])
return n}
window.PJSOutput=Backbone.View.extend({trackedMouseEvents:["move","over","out","down","up"],bannedProps:{externals:true},initialize:function X(e){this.handlers={}
this.config=e.config
this.output=e.output
this.tester=new PJSTester(_.extend(e,{workerFile:"pjs/test-worker.js"}))
this.render()
this.bind()
this.build(this.$canvas[0],e.enableLoopProtect,e.loopProtectTimeouts)
if(this.config.useDebugger&&PJSDebugger){iframeOverlay.createRelay(this.$canvas[0])
this["debugger"]=new PJSDebugger({context:this.processing,output:this})}this.config.on("versionSwitched",function(e,t){this.config.runVersion(t,"processing",this.processing)}.bind(this))
BabyHint.init({context:this.processing})
return this},render:function Z(){this.$el.empty()
this.$canvas=$("<canvas>").attr("id","output-canvas").appendTo(this.el).show()},bind:function Q(){if(window!==window.top){var e=["alert","open","showModalDialog","confirm","prompt","eval"]
for(var t=0,n=e.length;t<n;t++){window.constructor.prototype[e[t]]=$.noop}}if(window!==window.top&&Object.freeze&&Object.getOwnPropertyDescriptor){for(var r in window){if(window.hasOwnProperty(r)){try{var i=Object.getOwnPropertyDescriptor(window,r)
if(!i||i.configurable){Object.defineProperty(window,r,{value:window[r],writable:false,configurable:false})}}catch(s){}}}var o=navigator.userAgent.toLowerCase()
if(/chrome/.test(o)){Object.freeze(window.location)
Object.freeze(window)}else if(/safari/.test(o)){Object.seal(window)}else{var i=Object.getOwnPropertyDescriptor(window)
if(!i||i.configurable){Object.freeze(window)}}Object.freeze(Object.getPrototypeOf(window))}var a=this.$canvas.offset()
_.each(this.trackedMouseEvents,function(e){var t="mouse"+e
this.$canvas.on(t,function(t){if(this.output.recording){var n=t.pageX-a.left
var r=t.pageY-a.top
this.output.postParent({log:[e,n,r]})}}.bind(this))
this.handlers[e]=function(e,n){var r=e+a.left
var i=n+a.top
var s=r-$(window).scrollLeft()
var o=i-$(window).scrollTop()
var u=document.createEvent("MouseEvents")
u.initMouseEvent(t,true,true,window,0,0,0,s,o,false,false,false,false,0,document.documentElement)
this.$canvas[0].dispatchEvent(u)}.bind(this)}.bind(this))
$(window).on("resize",this.setDimensions)},build:function et(e,t,n){var r=this
this.processing=new Processing(e,function(e){e.draw=r.DUMMY})
var i=new PJSResourceCache({canvas:this.processing,output:this.output})
var s={Program:{}}
Object.keys(this.ProgramMethods).forEach(function(e){s.Program[e]=r.ProgramMethods[e].bind(r)})
this.config.runCurVersion("jshint",this)
this.injector=new PJSCodeInjector({processing:this.processing,resourceCache:i,infiniteLoopCallback:this.infiniteLoopCallback.bind(this),enableLoopProtect:t,JSHint:this.JSHint,additionalMethods:s,loopProtectTimeouts:n})
this.config.runCurVersion("processing",this.processing)
this.injector.clear()
this.setDimensions()},DUMMY:function tt(){},setDimensions:function nt(){var e=$(window)
var t=e.width()
var n=e.height()
if(this.processing&&(t!==this.processing.width||n!==this.processing.height)){this.$canvas.width(t).height(n)
this.processing.size(t,n)
this.output.restart()}},messageHandlers:{mouseAction:function rt(e){e=e.mouseAction
this.handlers[e.name](e.x,e.y)},documentation:function it(e){BabyHint.initDocumentation(e.documentation)}},getScreenshot:function st(e,t){var n=document.createElement("canvas")
n.width=e
n.height=e
n.getContext("2d").drawImage(this.$canvas[0],0,0,e,e)
t(n.toDataURL("image/png"))},ProgramMethods:{settings:function ot(){return this.output.settings||{}},restart:function at(){this.output.restart()},runTests:function ut(e){return this.output.test(this.output.getUserCode(),this.output.validate,[],e)},assertEqual:function ct(e,t,n,r){if(_.isEqual(e,t)){return}var i=i18n._("Assertion failed: "+"%(actual)s is not equal to %(expected)s.",{actual:JSON.stringify(e),expected:JSON.stringify(t)})
this.output.results.assertions.push({row:n-1,column:r,text:i})},runTest:function ft(e,t){if(arguments.length===1){t=e
e=""}var n=!!t()
this.output.postParent({results:{code:this.output.getUserCode(),errors:[],tests:[{name:e,state:n?"pass":"fail",results:[]}]},pass:n})}},lint:function lt(e,t){var n=this
return this.injector.lint(e,t).then(function(t){var r=BabyHint.babyErrors(e,t)
return{errors:n.mergeErrors(t,r),warnings:[]}})},mergeErrors:function ht(e,t){var n=[]
var r={}
var i=[]
_.each(e,function(e){if(e&&e.line&&e.character&&e.reason&&!/unable to continue/i.test(e.reason)){var t=e.line-2
n.push(t)
if(e.code==="W112"){e.character=e.evidence.indexOf('"')
if(!r[t]||r[t]>e.character-1){r[t]=e.character-1}}i.push({row:t,column:e.character-1,text:e.reason,type:"error",lint:e,source:"jshint",priority:2})}})
t=t.filter(function(e){return(_.include(n,e.row)||e.breaksCode)&&(!r[e.row]||r[e.row]>e.column)}).map(function(e){return{row:e.row,column:e.column,text:e.text,type:"error",source:e.source,context:e.context,priority:1}})
_.each(i,function(e){_.each(t,function(t){if(e.row===t.row&&e.column===t.column){if(e.lint.code==="W117"&&t.source==="spellcheck"){t.text=i18n._('"%(word)s" is not defined. Maybe you meant to type "%(keyword)s", '+"or you're using a variable you didn't define.",{word:e.lint.a,keyword:t.context.keyword})}}})})
var s=t
var o=_.uniq(t.map(function(e){return e.row}))
i.forEach(function(e){if(!_.contains(o,e.row)){s.push(e)}})
var a=function u(e,t){if(e==="column"||e==="lint"){return}return t}
return _.uniq(s,false,function(e){return JSON.stringify(e,a)})},test:function dt(e,t,n,r){var i=n.length
this.tester.testWorker.exec(e,t,n,function(e,t){if(i!==e.length){var n=i18n._("Error: %(message)s",{message:e[e.length-1].message})
this.output.$el.find(".test-errors").text(n).show()
this.tester.testContext.assert(false,n,i18n._("A critical problem occurred in your program "+"making it unable to run."))}r(e,t)}.bind(this))},runCode:function pt(e,t){this.injector.runCode(e,t)},restart:function gt(){this.injector.restart()},toggle:function vt(e){if(e){this.processing.loop()}else{this.processing.noLoop()}},kill:function mt(){this.tester.testWorker.kill()
this.injector.hintWorker.kill()
this.processing.exit()},initTests:function yt(e){return this.exec(e,this.tester.testContext)},infiniteLoopCallback:function bt(e){this.output.postParent({results:{code:this.output.currentCode,errors:[e]}})
this.KA_INFINITE_LOOP=true}})
_.extend(PJSOutput,{instances:[],stringify:function wt(e){if(typeof e==="function"){return e.toString()}else if(e&&e.__id){return e.__id()}else if(e&&Object.prototype.toString.call(e)==="[object Array]"){return this.stringifyArray(e)}else if(typeof e==="undefined"){return"undefined"}return JSON.stringify(e,function(e,t){if(t&&(t.id!==undefined&&t.id==="output-canvas"||typeof CanvasRenderingContext2D!=="undefined"&&t instanceof CanvasRenderingContext2D)){return undefined}return t})},stringifyArray:function _t(e){var t=[]
for(var n=0,r=e.length;n<r;n++){t.push(this.stringify(e[n]))}return t.join(", ")},applyInstance:function xt(e,t){try{var n=(/^function\s*(\w+)/.exec(e)||[])[1]
if(n&&window[n]===e){return e}}catch(r){}return function(){var n=arguments
function r(){e.apply(this,n)}r.prototype=e.prototype
var i=new r
this.newCallback(e,t,i,n)
return i}.bind(this)},newCallback:function Ct(e,t,n,r){if(!e.__name&&t){e.__name=t}n.constructor=e
n.__id=function(){return"new "+e.__name+"("+this.stringifyArray(r)+")"}.bind(this)
if(this.instances){this.instances.push(n)}}})
LiveEditorOutput.registerOutput("pjs",PJSOutput)
__KA_exports.BabyHint = BabyHint;
__KA_exports.PJSOutput = PJSOutput;
this.PJSOutput = PJSOutput;
this.BabyHint = BabyHint;
});
