KAdefine("javascript/shared-package/ka.js", function(require, module, exports) {
if(!window.KA){window.KA={}}var _get=function(e){return window.KA[e]}
var _set=function(e,r){window.KA[e]=r}
var triggerProfileChange=function(e){(_get("_profileChangeListeners")||[]).forEach(function(r){r(e)})}
var URL_BASE_REGEX=/^(?:https?:)?\/\/([^\/]*)\//
var KA_DOMAIN_REGEX=/(^|\.)(khanacademy\.(org|dev|test)|kastatic\.org|(.*-dot-)?khan-academy\.appspot\.com)/
var STATIC_URL_REGEX=new RegExp("^/((fonts|third_party)/.*\\.(eot$|otf$|svg$|ttf$|woff($|2$))|.well-known/apple-app-site-association$|admin/extbackup/static/|ckeditor/|downloads/|g(a(e_mini_profiler/static/|ndalf/static/)|enfiles/)|images/|javascript/|s(ounds/|tylesheets/)|third_party/|videos/)")
var PROXIED_S3_BUCKETS=["KA-youtube-converted","KA-share","ka-cs-scratchpad-audio","ka-exercise-screenshots","ka-exercise-screenshots-2","ka-exercise-screenshots-3","ka-learnstorm","ka-mobile","ka-perseus-graphie","ka-perseus-images"]
var FASTLY_URL_MAP=[["lh3.googleusercontent.com","cdn.kastatic.org/googleusercontent"]].concat(PROXIED_S3_BUCKETS.map(function(e){return[""+e+".s3.amazonaws.com","cdn.kastatic.org/"+e]}),PROXIED_S3_BUCKETS.map(function(e){return["s3.amazonaws.com/"+e,"cdn.kastatic.org/"+e]}))
var _getPageUrlBase=function(){if(!window.location){return null}else{var e=window.location
var r=e.protocol
var t=e.hostname
var a=e.port
var n=""+r+"//"+t
return a?""+n+":"+a:n}}
var _staticUrl=function(e){var r=_get("staticUrlBase")
if(!e||r==null){return e}if(r.indexOf("kastatic")!==-1){for(var t=FASTLY_URL_MAP,a=Array.isArray(t),n=0,t=a?t:t[Symbol.iterator]();;){var i
if(a){if(n>=t.length)break
i=t[n++]}else{n=t.next()
if(n.done)break
i=n.value}var o=i[0]
var s=i[1]
e=e.replace(o,s)}}if(_get("IS_DEV_SERVER")||!r){return e}var l=e.match(URL_BASE_REGEX)
var u=r
var g=null
var c=e
if(l){u=l[0]
g=l[1]
u=u.slice(0,-1)
if(!g.match(KA_DOMAIN_REGEX)){return e}c=e.substring(u.length)}if((!g||u===_getPageUrlBase())&&!STATIC_URL_REGEX.test(c)){return e}return r+c}
var KA={getUserID:function(){return _get("userId")},getKaid:function(){return _get("kaid")},currentServerTime:function(){return _get("serverTime")},staticUrl:function(e){return _staticUrl(e)},cssUrl:function(e){return"url("+KA.staticUrl(e)+")"},getUserProfile:function(){var e=require("./profile-model.js")
if(_get("_userProfileData")&&!_get("_userProfileModel")){var r=_get("_userProfileData")
var t=new e(r)
triggerProfileChange(t)
t.on("change",triggerProfileChange)
_set("_userProfileModel",t)}return _get("_userProfileModel")},setUserProfile:function(e){var r=require("./profile-model.js")
if(!_get("_userProfileModel")){var t=new r(e)
triggerProfileChange(t)
t.on("change",triggerProfileChange)
_set("_userProfileModel",t)}else{_get("_userProfileModel").set(e)}return _get("_userProfileModel")},getGlobalPermissions:function(){var e=KA.getUserProfile()
return e&&e.get("globalPermissions")||[]},isPhantom:function(){var e=KA.getUserProfile()
return!e||e.get("isPhantom")},isDeveloper:function(){var e=KA.getUserProfile()
return e&&e.get("isDeveloper")},addProfileChangeListener:function(e){if(!_get("_profileChangeListeners")){_set("_profileChangeListeners",[])}var r=_get("_profileChangeListeners")
if(r.indexOf(e)===-1){r.push(e)}},removeProfileChangeListener:function(e){var r=_get("_profileChangeListeners")||[]
var t=r.indexOf(e)
if(t!==-1){r.splice(t,1)}},featureFlag:function(e){return _get(e)},setFeatureFlag:function(e,r){_set(e,r)}};["FB_APP_ID","INITIALIZED","IS_DEV_SERVER","LEARNSTORM_DATES","MAX_BIO_LENGTH","SHOW_UNANSWERED_TAB","bingoId","commitSHA","gaeStatsKeyPrefix","isIPad","isMobileCapable","isZeroRated","jipt_dom_insert_checks","kaLocale","language","languageIsRtl","languageLocalName","languageYoutube","loginUrl","mathjaxUrl","requestLogId","stripePublicKey","userId","version","vipIssueReporter","xomManateeBeta"].forEach(function(e){Object.defineProperty(KA,e,{enumerable:true,get:function(){return _get(e)},set:function(r){return _set(e,r)}})})
module.exports=KA
});
KAdefine("javascript/shared-package/console.js", function(require, module, exports) {
var KAConsole={_oldMessages:[],_flushOldMessages:function(){for(var s=0,o=this._oldMessages.length;s<o;s++){this.log.apply(this,this._oldMessages[s])}this._oldMessages=[]},_logToBuffer:function(){this._oldMessages.push(arguments)},_logOrPreserve:function(){if(window.console){this.enable()
this.log.apply(this,arguments)}else{this._logToBuffer.apply(this,arguments)}},_logCompatible:function(){if(!window.console){return}if(console.log.apply){console.log.apply(console,arguments)}else{Function.prototype.apply.call(console.log,null,arguments)}},enable:function(){if(window.console){if(console.log.bind){this.log=console.log.bind(console)}else{this.log=this._logCompatible}this._flushOldMessages()}else{this.log=this._logOrPreserve}},disable:function(){this.log=this._logToBuffer},init:function(s){if(s){this.enable()}else{this.disable()}}}
KAConsole.init(false)
module.exports=KAConsole
});
KAdefine("javascript/shared-package/i18n.js", function(require, module, exports) {
var icu=require("icu")
var createFragment=require("react-addons-create-fragment")
var likeEnglish=function(n){return n!=1}
var allPluralForms={accents:likeEnglish,af:likeEnglish,ar:function(n){return n==0?0:n==1?1:n==2?2:n%100>=3&&n%100<=10?3:n%100>=11&&n%100<=99?4:5},az:likeEnglish,bg:likeEnglish,bn:likeEnglish,boxes:likeEnglish,ca:likeEnglish,cs:function(n){return n==1?0:n>=2&&n<=4?1:2},da:likeEnglish,de:likeEnglish,el:likeEnglish,empty:likeEnglish,en:likeEnglish,"en-pt":likeEnglish,es:likeEnglish,fa:function(n){return 0},"fa-af":function(n){return 0},fi:likeEnglish,fr:function(n){return n>1},he:likeEnglish,hi:likeEnglish,hu:likeEnglish,hy:likeEnglish,id:function(n){return 0},it:likeEnglish,ja:function(n){return 0},ka:likeEnglish,ko:function(n){return 0},lol:likeEnglish,mn:likeEnglish,ms:function(n){return 0},nb:likeEnglish,nl:likeEnglish,pl:function(n){return n==1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2},pt:likeEnglish,"pt-pt":likeEnglish,ro:function(n){return n==1?0:n==0||n%100>0&&n%100<20?1:2},ru:function(n){return n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2},"si-LK":likeEnglish,sk:function(n){return n==1?0:n>=2&&n<=4?1:2},sr:function(n){return n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2},"sv-SE":likeEnglish,sw:likeEnglish,te:likeEnglish,th:function(n){return 0},tr:function(n){return 0},uk:function(n){return n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2},ur:likeEnglish,vi:function(n){return 0},xh:likeEnglish,"zh-hans":function(n){return 0},"zh-hant":function(n){return 0},zu:likeEnglish}
var interpolationMarker=/%\(([\w_]+)\)s/g
var interpolateStringToFragment=function(n,e){e=e||{}
var t=n.split(interpolationMarker)
var r={text_0:t[0]}
for(var i=1;i<t.length;i+=2){var l=t[i]
var a=e[l]
if(a===undefined){a="%("+l+")s"}var s=0
while(""+s+"_"+l in r){s++}r[""+s+"_"+l]=a
r["text_"+(i+1)]=t[i+1]}return createFragment(r)}
var _=function(n,e){if(typeof n==="object"&&n.messages){n=n.messages[0]}e=e||{}
return n.replace(interpolationMarker,function(n,t){var r=e[t]
return r===undefined?n:r})}
var $_=function(n,e){if(arguments.length!==2||typeof e!=="string"){return"<$_> must have exactly one child, which must be a string"}return interpolateStringToFragment(e,n)}
var $i18nDoNotTranslate=function(n,e){return e}
var ngettext=function(n,e,t,r){var i
var l
if(typeof n==="object"){i=n.lang
l=n.messages
r=t
t=e}else{i="en"
l=[n,e]}var a=ngetpos(t,i)
var s=""
if(a<l.length){s=l[a]}r=r||{}
r.num=r.num||t
return _(s,r)}
var ngetpos=function(n,e){var t=allPluralForms[e]||allPluralForms["en"]
var r=t(n)
return r===true?1:r?r:0}
var i18nDoNotTranslate=_
var handlebarsUnderscore=function(n){return n.fn(this)}
var handlebarsDoNotTranslate=function(n){return n.fn(this)}
var handlebarsNgettext=function(n,e,t,r){if(typeof e!=="string"){r=e
e="en"
t=0}this.num=this.num||n
return ngetpos(n)===t?r.fn(this):r.inverse(this)}
var localeToFixed=function(n,e){var t=icu.getDecimalFormatSymbols().decimal_separator
var r=n.toFixed(e).replace(".",t)
if(r==="-0"){r="0"}return r}
window.i18n={_:_,ngettext:ngettext,i18nDoNotTranslate:i18nDoNotTranslate}
window.$_=$_
window.$i18nDoNotTranslate=$i18nDoNotTranslate
module.exports={_:_,ngettext:ngettext,i18nDoNotTranslate:i18nDoNotTranslate,localeToFixed:localeToFixed,$_:$_,$i18nDoNotTranslate:$i18nDoNotTranslate,handlebarsUnderscore:handlebarsUnderscore,handlebarsNgettext:handlebarsNgettext,handlebarsDoNotTranslate:handlebarsDoNotTranslate}
});
KAdefine("javascript/shared-package/a11y.js", function(require, module, exports) {
var dom=require("./dom-utils.js")
var i18n=require("./i18n.js")
var KA=require("./ka.js")
var cookies=require("./cookies.js")
var parseQueryString=require("./parse-query-string.js")
module.exports={init:function(){this.externalLink()
this.srOnlyInputFocus()
this.blurOnESC()
var e=parseQueryString()["tota11yk"]
if(e){cookies.createCookie("enable_tota11y",e)}if(KA.isDeveloper()&&cookies.readCookie("enable_tota11y")!=="0"){require.async(["../../third_party/javascript-khansrc/tota11y/build/tota11y.min.js"])}},externalLink:function(){var e="a[target=_blank]:not(.external-link)"
var i=i18n._("(Opens in a new window)")
dom.delegate("focus",e,function(e,s){s.classList.add("external-link")
if(s.title){s.title+=" "+i}s.insertAdjacentHTML("beforeend","<span class='sr-only'>"+i+"</span>")})},srOnlyInputFocus:function(){dom.delegate("focus",".sr-only input, .sr-only a",function(e,i){var s=dom.closest(i,".sr-only")
if(s){s.classList.toggle("sr-only")
s.classList.toggle("sr-only-visible")}})
dom.delegate("blur",".sr-only-visible input, .sr-only-visible a",function(e,i){var s=dom.closest(i,".sr-only-visible")
if(s){s.classList.toggle("sr-only")
s.classList.toggle("sr-only-visible")}})},blurOnESC:function(){dom.delegate("keyup","input.blur-on-esc",function(e){if(e.which===27){e.target.blur()}})}}
});
KAdefine("javascript/shared-package/package-manager.js", function(require, module, exports) {
var _=require("../../third_party/javascript-khansrc/lodash/lodash.js")
var dom=require("./dom-utils.js")
var KA=require("./ka.js")
var _require=require("./khan-fetch.js")
var khanFetch=_require.khanFetch
var staticUrl=function(e){return KA.staticUrl(e).replace(/^https?:/,window.location.protocol)}
var PACKAGE_STATE_DEFINED=1
var PACKAGE_STATE_LOADING=2
var PACKAGE_STATE_LOADED=3
var PACKAGE_STATE_EXECUTED=4
var PACKAGE_LEVEL_NOT_SET=-2
var PACKAGE_LEVEL_CALCULATING=-1
var _packagesByName={}
var _Package=function(){function e(t,a,n){babelHelpers.classCallCheck(this,e)
this._name=t
this._url=staticUrl(a)
this._dependencyNames=n
this._content=null
this._state=PACKAGE_STATE_DEFINED
this._fetchingPromise=null
this._level=PACKAGE_LEVEL_NOT_SET}e.prototype._getDependencies=function t(){return this._dependencyNames.map(function(t){return e.get(t)})}
e.prototype._getTransitiveDependencies=function a(){var e={}
var t=[this]
while(t.length>0){var a=t.shift()
if(e.hasOwnProperty(a._name)){continue}e[a._name]=a
a._getDependencies().forEach(function(e){return t.push(e)})}return Object.values(e)}
e.prototype._getLevel=function n(){if(this._level===PACKAGE_LEVEL_NOT_SET){this._level=PACKAGE_LEVEL_CALCULATING
var e=this._getDependencies()
if(e.length===0){this._level=0}else{var t=e.map(function(e){return e._getLevel()}).filter(function(e){return e!==PACKAGE_LEVEL_CALCULATING})
this._level=Math.max.apply(Math,t)+1}}return this._level}
e.prototype.markExecuted=function r(){this._state=PACKAGE_STATE_EXECUTED
this._fetchingPromise=Promise.resolve()}
e.prototype._fetch=function i(){var e=this
if(this._state>=PACKAGE_STATE_LOADING){return this._fetchingPromise}this._fetchingPromise=new Promise(function(t){dom.ready().then(function(){khanFetch(e._url).then(function(e){return e.text()}).then(function(a){e._content=a
e._state=PACKAGE_STATE_LOADED
t()})})})
this._state=PACKAGE_STATE_LOADING
return this._fetchingPromise}
e.prototype.isExecuted=function s(){return this._state===PACKAGE_STATE_EXECUTED}
e.prototype._execute=function c(){if(this.isExecuted()){return}if(this._content===null){var e="_Package "+name+" cannot be executed without content."
console.error(e)
throw new Error(e)}var t=this._name.slice(this._name.lastIndexOf(".")+1)
if(t==="js"){this._executeJs()}else if(t==="css"){this._injectCss()}else{throw new Error("Unknown package extension "+t)}this._state=PACKAGE_STATE_EXECUTED}
e.prototype.fetchAndExecute=function o(){var e=this._getTransitiveDependencies().sort(function(e,t){return e._getLevel()-t._getLevel()})
return Promise.all(e.map(function(e){return e._fetch()})).then(function(){e.forEach(function(e){return e._execute()})})}
e.prototype._executeJs=function u(){var e=this._content
var t=this._url
dom.globalEval(""+e+"\n//# sourceURL="+t+"\n")}
e.prototype._injectCss=function _(){var e=document.getElementsByTagName("head")[0]||document.documentElement
var t=document.createElement("style")
t.setAttribute("data-href",this._url)
t.setAttribute("data-package-name",this._name)
if(t.styleSheet){t.styleSheet.cssText=this._content}else{var a=document.createTextNode(this._content)
t.appendChild(a)}e.appendChild(t)}
e.get=function g(e){var t=_packagesByName[e]
if(!t){throw new Error("Could not find package with name "+e)}return t}
e.define=function h(t,a,n){if(!e.isDefined(t)){_packagesByName[t]=new e(t,a,n)}}
e.isDefined=function f(e){return _packagesByName.hasOwnProperty(e)}
return e}()
window.PackageManager=window.PackageManager||{}
PackageManager._manifestsRegistered=new Promise(function(e){PackageManager._resolveManifestsRegistered=e})
PackageManager.init=function(){if(PackageManager._q){var e;(e=PackageManager).markExecuted.apply(e,PackageManager._q)
delete PackageManager._q}if(KA.IS_DEV_SERVER){dom.ready().then(function(){var e=[]
var t=[]
for(var a=Object.entries(_packagesByName),n=Array.isArray(a),r=0,a=n?a:a[Symbol.iterator]();;){var i
if(n){if(r>=a.length)break
i=a[r++]}else{r=a.next()
if(r.done)break
i=r.value}var s=i[0]
var c=i[1]
if(c.isExecuted()){var o=s.split(".").pop()
if(o==="js"){e.push(s)}else{t.push(s)}}}console.info("[PackageManager] %d initial JS package(s): %s",e.length,e.join(", "))
console.info("[PackageManager] %d initial CSS package(s): %s",t.length,t.join(", "))})}}
var logDynamicRequire=function(){var e=[]
var t=_.debounce(function(){console.info("[PackageManager] dynamically loading %d package(s): %s",e.length,e.join(", "))
e=[]},100)
return function(a){e.push(a)
t()}}()
PackageManager.require=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++){t[a]=arguments[a]}return Promise.all(t.map(function(e){if(KA.IS_DEV_SERVER){logDynamicRequire(e)}if(_Package.isDefined(e)){return _Package.get(e).fetchAndExecute()}else{return PackageManager._manifestsRegistered.then(function(){return _Package.get(e).fetchAndExecute()})}}))}
var toBeMarkedExecuted={}
PackageManager.markExecuted=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++){t[a]=arguments[a]}t.forEach(function(e){if(_Package.isDefined(e)){_Package.get(e).markExecuted()}else{toBeMarkedExecuted[e]=true}})}
PackageManager.registerDynamic=function(e){var t=e.name
var a=e.url
var n=e.dependencies||[]
_Package.define(t,a,n)
if(toBeMarkedExecuted[t]){_Package.get(t).markExecuted()
delete toBeMarkedExecuted[t]}}
PackageManager.registerManifests=function(e){(e["javascript"]||[]).forEach(PackageManager.registerDynamic);(e["stylesheets"]||[]).forEach(PackageManager.registerDynamic)
PackageManager._resolveManifestsRegistered()}
module.exports=PackageManager
});
KAdefine("third_party/javascript-khansrc/classnames/index.js", function(require, module, exports) {
function classNames(){var e=arguments
var o=[]
for(var r=0;r<e.length;r++){var n=e[r]
if(!n){continue}if("string"===typeof n||"number"===typeof n){o.push(n)}else if("object"===typeof n){for(var s in n){if(n.hasOwnProperty(s)&&n[s]){o.push(s)}}}}return o.join(" ")}if(typeof module!=="undefined"&&module.exports){module.exports=classNames}
});
KAdefine("third_party/javascript-khansrc/aphrodite/dist/aphrodite.js", function(require, module, exports) {
module.exports=function(e){var r={}
function t(n){if(r[n])return r[n].exports
var a=r[n]={exports:{},id:n,loaded:false}
e[n].call(a.exports,a,a.exports,t)
a.loaded=true
return a.exports}t.m=e
t.c=r
t.p=""
return t(0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var n=function(){function e(e,r){var t=[]
var n=true
var a=false
var i=undefined
try{for(var u=e[Symbol.iterator](),o;!(n=(o=u.next()).done);n=true){t.push(o.value)
if(r&&t.length===r)break}}catch(f){a=true
i=f}finally{try{if(!n&&u["return"])u["return"]()}finally{if(a)throw i}}return t}return function(r,t){if(Array.isArray(r)){return r}else if(Symbol.iterator in Object(r)){return e(r,t)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}()
var a=t(2)
var i=t(3)
var u={create:function l(e){return(0,a.mapObj)(e,function(e){var r=n(e,2)
var t=r[0]
var i=r[1]
return[t,{_name:t+"_"+(0,a.hashObject)(i),_definition:i}]})},rehydrate:function s(){var e=arguments.length<=0||arguments[0]===undefined?[]:arguments[0];(0,i.addRenderedClassNames)(e)}}
var o={renderStatic:function c(e){(0,i.reset)();(0,i.startBuffering)()
var r=e()
var t=(0,i.flushToString)()
return{html:r,css:{content:t,renderedClassNames:(0,i.getRenderedClassNames)()}}}}
var f=function d(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++){r[t]=arguments[t]}var n=r.filter(function(e){return e})
if(n.length===0){return""}var a=n.map(function(e){return e._name}).join("-o_O-");(0,i.injectStyleOnce)(a,"."+a,n.map(function(e){return e._definition}))
return a}
r["default"]={StyleSheet:u,StyleSheetServer:o,css:f}
e.exports=r["default"]},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var t=function(){function e(e,r){var t=[]
var n=true
var a=false
var i=undefined
try{for(var u=e[Symbol.iterator](),o;!(n=(o=u.next()).done);n=true){t.push(o.value)
if(r&&t.length===r)break}}catch(f){a=true
i=f}finally{try{if(!n&&u["return"])u["return"]()}finally{if(a)throw i}}return t}return function(r,t){if(Array.isArray(r)){return r}else if(Symbol.iterator in Object(r)){return e(r,t)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}()
var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]
for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}return e}
var a=function x(e){return Object.keys(e).map(function(r){return[r,e[r]]})}
r.objectToPairs=a
var i=function k(e){var r={}
e.forEach(function(e){var n=t(e,2)
var a=n[0]
var i=n[1]
r[a]=i})
return r}
var u=function O(e,r){return i(a(e).map(r))}
r.mapObj=u
var o=/([A-Z])/g
var f=/^ms-/
var l=function j(e){return e.replace(o,"-$1").toLowerCase()}
var s=function w(e){return l(e).replace(f,"-ms-")}
r.kebabifyStyleName=s
var c=function _(e,r){if(typeof e!=="object"){return r}var t=n({},e)
Object.keys(r).forEach(function(n){if(t.hasOwnProperty(n)){t[n]=_(e[n],r[n])}else{t[n]=r[n]}})
return t}
r.recursiveMerge=c
var d={animationIterationCount:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridRow:true,gridColumn:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,fillOpacity:true,stopOpacity:true,strokeDashoffset:true,strokeOpacity:true,strokeWidth:true}
function v(e,r){return e+r.charAt(0).toUpperCase()+r.substring(1)}var p=["Webkit","ms","Moz","O"]
Object.keys(d).forEach(function(e){p.forEach(function(r){d[v(r,e)]=d[e]})})
var m=function S(e,r){if(typeof r==="number"){if(d[e]){return""+r}else{return r+"px"}}else{return r}}
r.stringifyValue=m
function b(e){var r=e.length
var t=r
var n=0
var a=undefined
while(r>=4){a=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24
a=(a&65535)*1540483477+(((a>>>16)*1540483477&65535)<<16)
a^=a>>>24
a=(a&65535)*1540483477+(((a>>>16)*1540483477&65535)<<16)
t=(t&65535)*1540483477+(((t>>>16)*1540483477&65535)<<16)^a
r-=4;++n}switch(r){case 3:t^=(e.charCodeAt(n+2)&255)<<16
case 2:t^=(e.charCodeAt(n+1)&255)<<8
case 1:t^=e.charCodeAt(n)&255
t=(t&65535)*1540483477+(((t>>>16)*1540483477&65535)<<16)}t^=t>>>13
t=(t&65535)*1540483477+(((t>>>16)*1540483477&65535)<<16)
t^=t>>>15
return(t>>>0).toString(36)}var y=function C(e){return b(JSON.stringify(e))}
r.hashObject=y
var g=/^([^:]+:.*?)( !important)?$/
var h=function P(e){return e.split(";").map(function(e){return e.replace(g,function(e,r,t){return r+" !important"})}).join(";")}
r.importantify=h},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
function n(e){return e&&e.__esModule?e:{"default":e}}var a=t(4)
var i=n(a)
var u=t(6)
var o=t(2)
var f=null
var l=function O(e){if(f==null){f=document.querySelector("style[data-aphrodite]")
if(f==null){var r=document.head||document.getElementsByTagName("head")[0]
f=document.createElement("style")
f.type="text/css"
f.setAttribute("data-aphrodite","")
r.appendChild(f)}}if(f.styleSheet){f.styleSheet.cssText+=e}else{f.appendChild(document.createTextNode(e))}}
var s={fontFamily:function j(e){if(Array.isArray(e)){return e.map(j).join(",")}else if(typeof e==="object"){m(e.fontFamily,"@font-face",[e],false)
return'"'+e.fontFamily+'"'}else{return e}},animationName:function w(e){if(typeof e!=="object"){return e}var r="keyframe_"+(0,o.hashObject)(e)
var t="@keyframes "+r+"{"
Object.keys(e).forEach(function(r){t+=(0,u.generateCSS)(r,[e[r]],s,false)})
t+="}"
p(r,t)
return r}}
var c={}
var d=""
var v=false
var p=function _(e,r){if(!c[e]){if(!v){if(typeof document==="undefined"){throw new Error("Cannot automatically buffer without a document")}v=true;(0,i["default"])(h)}d+=r
c[e]=true}}
var m=function S(e,r,t,n){if(!c[e]){var a=(0,u.generateCSS)(r,t,s,n)
p(e,a)}}
r.injectStyleOnce=m
var b=function C(){d=""
c={}
v=false
f=null}
r.reset=b
var y=function P(){if(v){throw new Error("Cannot buffer while already buffering")}v=true}
r.startBuffering=y
var g=function M(){v=false
var e=d
d=""
return e}
r.flushToString=g
var h=function A(){var e=g()
if(e.length>0){l(e)}}
r.flushToStyleTag=h
var x=function T(){return Object.keys(c)}
r.getRenderedClassNames=x
var k=function E(e){e.forEach(function(e){c[e]=true})}
r.addRenderedClassNames=k},function(e,r,t){"use strict"
var n=t(5)
var a=[]
var i=[]
var u=n.makeRequestCallFromTimer(o)
function o(){if(i.length){throw i.shift()}}e.exports=f
function f(e){var r
if(a.length){r=a.pop()}else{r=new l}r.task=e
n(r)}function l(){this.task=null}l.prototype.call=function(){try{this.task.call()}catch(e){if(f.onerror){f.onerror(e)}else{i.push(e)
u()}}finally{this.task=null
a[a.length]=this}}},function(e,r){(function(r){"use strict"
e.exports=t
function t(e){if(!n.length){i()
a=true}n[n.length]=e}var n=[]
var a=false
var i
var u=0
var o=1024
function f(){while(u<n.length){var e=u
u=u+1
n[e].call()
if(u>o){for(var r=0,t=n.length-u;r<t;r++){n[r]=n[r+u]}n.length-=u
u=0}}n.length=0
u=0
a=false}var l=r.MutationObserver||r.WebKitMutationObserver
if(typeof l==="function"){i=s(f)}else{i=c(f)}t.requestFlush=i
function s(e){var r=1
var t=new l(e)
var n=document.createTextNode("")
t.observe(n,{characterData:true})
return function a(){r=-r
n.data=r}}function c(e){return function r(){var r=setTimeout(n,0)
var t=setInterval(n,50)
function n(){clearTimeout(r)
clearInterval(t)
e()}}}t.makeRequestCallFromTimer=c}).call(r,function(){return this}())},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var n=function(){function e(e,r){var t=[]
var n=true
var a=false
var i=undefined
try{for(var u=e[Symbol.iterator](),o;!(n=(o=u.next()).done);n=true){t.push(o.value)
if(r&&t.length===r)break}}catch(f){a=true
i=f}finally{try{if(!n&&u["return"])u["return"]()}finally{if(a)throw i}}return t}return function(r,t){if(Array.isArray(r)){return r}else if(Symbol.iterator in Object(r)){return e(r,t)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}()
function a(e){return e&&e.__esModule?e:{"default":e}}var i=t(7)
var u=a(i)
var o=t(2)
var f=function c(e,r,t,n){var a=r.reduce(o.recursiveMerge)
var i={}
var u={}
var f={}
Object.keys(a).forEach(function(e){if(e[0]===":"){f[e]=a[e]}else if(e[0]==="@"){u[e]=a[e]}else{i[e]=a[e]}})
return s(e,i,t,n)+Object.keys(f).map(function(r){return s(e+r,f[r],t,n)}).join("")+Object.keys(u).map(function(r){var a=c(e,[u[r]],t,n)
return r+"{"+a+"}"}).join("")}
r.generateCSS=f
var l=function d(e,r){var t={}
Object.keys(e).forEach(function(n){if(r&&r.hasOwnProperty(n)){t[n]=r[n](e[n])}else{t[n]=e[n]}})
return t}
var s=function v(e,r,t,a){var i=l(r,t)
var f=u["default"].prefixAll(i)
var s=(0,o.objectToPairs)(f).map(function(e){var r=n(e,2)
var t=r[0]
var i=r[1]
var u=(0,o.stringifyValue)(t,i)
var f=(0,o.kebabifyStyleName)(t)+":"+u+";"
return a===false?f:(0,o.importantify)(f)}).join("")
if(s){return e+"{"+s+"}"}else{return""}}
r.generateCSSRuleset=s},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var n=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}return function(r,t,n){if(t)e(r.prototype,t)
if(n)e(r,n)
return r}}()
function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}var u=t(8)
var o=a(u)
var f=t(9)
var l=a(f)
var s=t(10)
var c=a(s)
var d=t(11)
var v=a(d)
var p=t(12)
var m=a(p)
var b=v["default"]
var y=(0,o["default"])()
var g=function(){function e(){i(this,e)}n(e,null,[{key:"prefixAll",value:function r(t){t=(0,c["default"])({},t)
Object.keys(t).forEach(function(r){var n=t[r]
if(n instanceof Object){t[r]=e.prefixAll(n)}else{var a=Object.keys(y.prefixes)
a.forEach(function(e){var a=y.prefixes[e]
if(b[r]!=null){t[a.inline+(0,l["default"])(r)]=n}})
m["default"].forEach(function(e){var a=e({property:r,value:n,styles:t,prefix:{},keepUnprefixed:true,requiresPrefix:b});(0,c["default"])(t,a)})}})
return t}}])
return e}()
r["default"]=g
e.exports=r["default"]},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var t={Webkit:["chrome","safari","ios","android","phantom","opera","webos","blackberry","bada","tizen"],Moz:["firefox","seamonkey","sailfish"],ms:["msie","msedge"]}
var n={chrome:[["chrome"]],safari:[["safari"]],firefox:[["firefox"]],ie:[["msie"]],edge:[["msedge"]],opera:[["opera"]],ios_saf:[["ios","mobile"],["ios","tablet"]],ie_mob:[["windowsphone","mobile","msie"],["windowsphone","tablet","msie"],["windowsphone","mobile","msedge"],["windowsphone","tablet","msedge"]],op_mini:[["opera","mobile"],["opera","tablet"]],and_uc:[["android","mobile"],["android","tablet"]],android:[["android","mobile"],["android","tablet"]]}
var a=function i(e){var r=undefined
var a=undefined
var i=undefined
var u=undefined
var o=undefined
var f=undefined
r=Object.keys(t)
for(var l=0;l<r.length;l++){a=r[l]
i=t[a]
u=n[e]
for(var s=0;s<i.length;s++){o=i[s]
for(var c=0;c<u.length;c++){f=u[c]
if(f.indexOf(o)!==-1){return{inline:a,css:"-"+a.toLowerCase()+"-"}}}}}return{inline:"",css:""}}
r["default"]=function(){var e={}
e.browsers=Object.keys(n)
e.prefixes={}
e.browsers.forEach(function(r){e.prefixes[r]=a(r)})
return e}
e.exports=r["default"]},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r["default"]=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}
e.exports=r["default"]},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r["default"]=function(e){var r=arguments.length<=1||arguments[1]===undefined?{}:arguments[1]
Object.keys(r).forEach(function(t){return e[t]=r[t]})
return e}
e.exports=r["default"]},function(e,r){e.exports={transform:0,transformOrigin:0,transformOriginX:0,transformOriginY:0,backfaceVisibility:0,perspective:0,perspectiveOrigin:0,transformStyle:0,transformOriginZ:0,animation:0,animationDelay:0,animationDirection:0,animationFillMode:0,animationDuration:0,animationIterationCount:0,animationName:0,animationPlayState:0,animationTimingFunction:0,appearance:0,userSelect:0,fontKerning:0,textEmphasisPosition:0,textEmphasis:0,textEmphasisStyle:0,textEmphasisColor:0,boxDecorationBreak:0,clipPath:0,maskImage:0,maskMode:0,maskRepeat:0,maskPosition:0,maskClip:0,maskOrigin:0,maskSize:0,maskComposite:0,mask:0,maskBorderSource:0,maskBorderMode:0,maskBorderSlice:0,maskBorderWidth:0,maskBorderOutset:0,maskBorderRepeat:0,maskBorder:0,maskType:0,textDecorationStyle:0,textDecorationSkip:0,textDecorationLine:0,textDecorationColor:0,filter:0,fontFeatureSettings:0,breakAfter:0,breakBefore:0,breakInside:0,columnCount:0,columnFill:0,columnGap:0,columnRule:0,columnRuleColor:0,columnRuleStyle:0,columnRuleWidth:0,columns:0,columnSpan:0,columnWidth:0,flex:0,flexBasis:0,flexDirection:0,flexGrow:0,flexFlow:0,flexShrink:0,flexWrap:0,alignContent:0,alignItems:0,alignSelf:0,justifyContent:0,order:0,transition:0,transitionDelay:0,transitionDuration:0,transitionProperty:0,transitionTimingFunction:0,backdropFilter:0,scrollSnapType:0,scrollSnapPointsX:0,scrollSnapPointsY:0,scrollSnapDestination:0,scrollSnapCoordinate:0,shapeImageThreshold:0,shapeImageMargin:0,shapeImageOutside:0,hyphens:0,flowInto:0,flowFrom:0,regionFragment:0,boxSizing:0,textAlignLast:0,tabSize:0,grid:0,gridColumnStart:0,gridRow:0,gridTemplateColumns:0,gridRowStart:0,gridRowEnd:0,gridTemplateRows:0,gridAutoRows:0,wrapThrough:0,wrapFlow:0,gridColumnGap:0,touchAction:0,gridRowGap:0,gridAutoFlow:0,gridColumn:0,gridGap:0,gridTemplateAreas:0,gridTemplate:0,gridArea:0,wrapMargin:0,gridAutoColumns:0,gridColumnEnd:0,textSizeAdjust:0,borderImage:0,borderImageOutset:0,borderImageRepeat:0,borderImageSlice:0,borderImageSource:0,borderImageWidth:0,objectFit:0,objectPosition:0}},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
function n(e){return e&&e.__esModule?e:{"default":e}}var a=t(13)
var i=n(a)
var u=t(15)
var o=n(u)
var f=t(16)
var l=n(f)
var s=t(17)
var c=n(s)
var d=t(18)
var v=n(d)
var p=t(19)
var m=n(p)
var b=t(20)
var y=n(b)
var g=t(21)
var h=n(g)
r["default"]=[i["default"],o["default"],c["default"],v["default"],m["default"],y["default"],h["default"],l["default"]]
e.exports=r["default"]},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r["default"]=o
function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}var i=t(14)
var u=n(i)
function o(e){var r=e.property
var t=e.value
var n=e.prefix
var i=e.keepUnprefixed
if(typeof t==="string"&&t.indexOf("calc(")>-1){var o=(0,u["default"])(r)
var f=["-webkit-","-moz-"].map(function(e){return t.replace(/calc\(/g,e+"calc(")}).join(";"+o+":")
return a({},r,f+(i?";"+o+":"+t:""))}}e.exports=r["default"]},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r["default"]=function(e){return e.replace(/([a-z]|^)([A-Z])/g,function(e,r,t){return r+"-"+t.toLowerCase()}).replace("ms-","-ms-")}
e.exports=r["default"]},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r["default"]=n
var t={"zoom-in":true,"zoom-out":true,grab:true,grabbing:true}
function n(e){var r=e.property
var n=e.value
var a=e.prefix
var i=e.keepUnprefixed
if(r==="cursor"&&t[n]){var u=["-webkit-","-moz-"].map(function(e){return e+n}).join(";"+r+":")
return{cursor:u+(i?";"+r+":"+n:"")}}}e.exports=r["default"]},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r["default"]=n
var t={flex:true,"inline-flex":true}
function n(e){var r=e.property
var n=e.value
var a=e.prefix
var i=e.keepUnprefixed
if(r==="display"&&t[n]){var u=["-webkit-box","-moz-box","-ms-"+n+"box","-webkit-"+n].join(";"+r+":")
return{display:u+(i?";"+r+":"+n:"")}}}e.exports=r["default"]},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r["default"]=l
function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}var i=t(14)
var u=n(i)
var o={maxHeight:true,maxWidth:true,width:true,height:true,columnWidth:true,minWidth:true,minHeight:true}
var f={"min-content":true,"max-content":true,"fill-available":true,"fit-content":true,"contain-floats":true}
function l(e){var r=e.property
var t=e.value
var n=e.prefix
var i=e.keepUnprefixed
if(o[r]&&f[t]){var l=(0,u["default"])(r)
var s=["-webkit-","-moz-"].map(function(e){return e+t}).join(";"+l+":")
return a({},r,s+(i?";"+l+":"+t:""))}}e.exports=r["default"]},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r["default"]=f
function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}var i=t(14)
var u=n(i)
var o=/linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/
function f(e){var r=e.property
var t=e.value
var n=e.prefix
var i=e.keepUnprefixed
if(typeof t==="string"&&t.match(o)!==null){var f=(0,u["default"])(r)
var l=["-webkit-","-moz-"].map(function(e){return e+t}).join(";"+f+":")
return a({},r,l+(i?";"+f+":"+t:""))}}e.exports=r["default"]},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r["default"]=s
function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}var i=t(14)
var u=n(i)
var o=t(9)
var f=n(o)
var l=/^(WebkitT|MozT|msT|t)ransition(Property|)$/
function s(e){var r=e.property
var t=e.value
var n=e.prefix
var i=e.keepUnprefixed
var o=e.requiresPrefix
var s=undefined
if(typeof t==="string"&&(s=r.match(l))){var c
var d=function(){var e="transition"+s[2]
var r=Object.keys(o).map(function(e){return(0,u["default"])(e)})
var n=t
var l=n.split(/,(?![^()]*(?:\([^()]*\))?\))/g)
r.forEach(function(e){l.forEach(function(r,t){if(r.indexOf(e)>-1){var n=["-webkit-","-moz-","-ms-"].map(function(t){return r.replace(e,t+e)}).join(",")
l[t]=n+(i?","+r:"")}})})
var d=l.join(",")
return{v:(c={},a(c,"Webkit"+(0,f["default"])(e),d),a(c,"Moz"+(0,f["default"])(e),d),a(c,"ms"+(0,f["default"])(e),d),a(c,e,d),c)}}()
if(typeof d==="object")return d.v}}e.exports=r["default"]},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]
for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}return e}
r["default"]=c
function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}var u=t(14)
var o=a(u)
var f={"space-around":"distribute","space-between":"justify","flex-start":"start","flex-end":"end",flex:"-ms-flexbox","inline-flex":"-ms-inline-flexbox"}
var l={alignContent:"msFlexLinePack",alignSelf:"msFlexItemAlign",alignItems:"msFlexAlign",justifyContent:"msFlexPack",order:"msFlexOrder",flexGrow:"msFlexPositive",flexShrink:"msFlexNegative",flexBasis:"msPreferredSize"}
var s=Object.keys(l).concat("display").reduce(function(e,r){return n({},e,i({},r,true))},{})
function c(e){var r=e.property
var t=e.value
var n=e.styles
var a=e.prefix
var u=e.keepUnprefixed
if(s[r]){var c=(0,o["default"])(r)
if(!u){delete n[r]}if(l[r]){return i({},l[r],f[t]||t)}if(f[t]){return i({},r,f[t]+(u?";"+c+":"+t:""))}}}e.exports=r["default"]},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]
for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}return e}
r["default"]=c
function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}var u=t(14)
var o=a(u)
var f={"space-around":"justify","space-between":"justify","flex-start":"start","flex-end":"end","wrap-reverse":"multiple",wrap:"multiple",flex:"box","inline-flex":"inline-box"}
var l={alignItems:"WebkitBoxAlign",justifyContent:"WebkitBoxPack",flexWrap:"WebkitBoxLines"}
var s=Object.keys(l).concat(["alignContent","alignSelf","display","order","flexGrow","flexShrink","flexBasis","flexDirection"]).reduce(function(e,r){return n({},e,i({},r,true))},{})
function c(e){var r=e.property
var t=e.value
var n=e.styles
var a=e.prefix
var u=e.keepUnprefixed
if(s[r]){var c=(0,o["default"])(r)
if(!u){delete n[r]}if(r==="flexDirection"){return{WebkitBoxOrient:t.indexOf("column")>-1?"vertical":"horizontal",WebkitBoxDirection:t.indexOf("reverse")>-1?"reverse":"normal"}}if(r==="display"&&f[t]){return{display:a.css+f[t]+(u?";"+c+":"+t:"")}}if(l[r]){return i({},l[r],f[t]||t)}if(f[t]){return i({},r,f[t]+(u?";"+c+":"+t:""))}}}e.exports=r["default"]}])
});
KAdefine("javascript/node_modules/aphrodite/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/aphrodite/dist/aphrodite.js")
});
KAdefine("javascript/shared-package/local-store.js", function(require, module, exports) {
var LocalStore={version:4,keyPrefix:"ka",cacheKey:function(e){if(!e){throw new Error("Attempting to use LocalStore without a key")}return[LocalStore.keyPrefix,LocalStore.version,e].join(":")},get:function(e){if(!LocalStore.isEnabled()){return undefined}try{var o=window.localStorage[LocalStore.cacheKey(e)]
if(o){return JSON.parse(o)}}catch(r){}return undefined},set:function(e,o){if(!LocalStore.isEnabled()){return null}var r=JSON.stringify(o)
var t=LocalStore.cacheKey(e)
try{window.localStorage[t]=r}catch(a){LocalStore.clearAll()}},del:function(e){if(!LocalStore.isEnabled()){return null}var o=LocalStore.cacheKey(e)
if(o in window.localStorage){delete window.localStorage[o]}},isEnabled:function(){var e=String(+new Date)
try{window.sessionStorage[e]=e
var o=window.sessionStorage[e]===e
window.sessionStorage.removeItem(e)
return o}catch(r){return false}},clearAll:function(){if(!LocalStore.isEnabled()){return null}try{var e=0
while(e<localStorage.length){var o=localStorage.key(e)
if(o.indexOf(LocalStore.keyPrefix+":")===0){delete localStorage[o]}else{e++}}}catch(r){}}}
window.LocalStore=LocalStore
module.exports=LocalStore
});
KAdefine("javascript/shared-package/dom-utils.js", function(require, module, exports) {
var globalEval=function(e){window["eval"].call(window,e)}
if(typeof execScript!=="undefined"){globalEval=function(e){return execScript(e)}}var domReadyPromise=undefined
module.exports={ready:function(e){if(!domReadyPromise){domReadyPromise=new Promise(function(e,t){if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){return e()}document.addEventListener("DOMContentLoaded",e,false)
window.addEventListener("load",e)})}return domReadyPromise},globalEval:globalEval,matches:function(e,t){var n=e.matches||e.matchesSelector
if(n){return n.call(e,t)}var o=document.querySelectorAll(t)
return Array.prototype.indexOf.call(o,e)>=0},closest:function(e,t){if(e.closest){return e.closest(t)}var n=e
while(n){if(this.matches(n,t)){return n}n=n.parentNode}return null},delegate:function(e,t,n){var o=this
document.addEventListener(e,function(e){var r=o.closest(e.target,t)
if(r){n(e,r)}},true)}}
});
KAdefine("javascript/shared-package/cookies.js", function(require, module, exports) {
var createCookie=function(e,o,r,a){var i
if(r){var t=new Date
t.setTime(t.getTime()+r*24*60*60*1e3)
i="; expires="+t.toGMTString()}else{i=""}if(a){a="; domain="+a}else{a=""}document.cookie=e+"="+o+i+a+"; path=/"}
var readCookie=function(e){var o=e+"="
var r=document.cookie.split(";")
for(var a=0;a<r.length;a++){var i=r[a]
while(i.charAt(0)===" "){i=i.substring(1,i.length)}if(i.indexOf(o)===0){return i.substring(o.length,i.length)}}return null}
var eraseCookie=function(e,o){createCookie(e,"",-1,o)}
var areCookiesEnabled=function(){createCookie("detectCookiesEnabled","KhanAcademy")
if(readCookie("detectCookiesEnabled")==null){return false}eraseCookie("detectCookiesEnabled")
return true}
module.exports={createCookie:createCookie,readCookie:readCookie,eraseCookie:eraseCookie,areCookiesEnabled:areCookiesEnabled}
});
KAdefine("javascript/shared-package/supports.js", function(require, module, exports) {
var supports={touchevents:function(){return"ontouchstart"in window||typeof DocumentTouch!=="undefined"&&document instanceof DocumentTouch}()}
window.Modernizr=supports
module.exports=supports
this.Modernizr = Modernizr;
});
KAdefine("javascript/shared-package/analytics.js", function(require, module, exports) {
var BigBingo=require("./bigbingo.js")
var KA=require("./ka.js")
var _require=require("./khan-fetch.js")
var khanFetch=_require.khanFetch
var formUrlencode=_require.formUrlencode
var VisitTracking=require("./visit-tracking.js")
function escapeRegex(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var getNow=Date.now||function(){return+new Date}
var currentPath=null
var graphiteTimingMetricsReported={}
var gaTimingMetricsReported={}
var Analytics={init:function(){currentPath=window.location.pathname
BigBingo.markConversion("pageview",{path:currentPath,qs:window.location.search.slice(1),utc:-(new Date).getTimezoneOffset()})},handleRouterNavigation:function(e){VisitTracking.trackVisit()
if(currentPath&&currentPath!==window.location.pathname){currentPath=window.location.pathname
var t={path:currentPath,qs:window.location.search.slice(1),utc:-(new Date).getTimezoneOffset()}
if(e===true){BigBingo.markConversionsWithExtras([{id:"pageview",extra:t},{id:"tutorial_node_nav_click",extra:{node_clicked:currentPath.split("/")[currentPath.split("/").length-1]}}])}else{BigBingo.markConversion("pageview",t)}if(window.ga){window.ga("send","pageview",currentPath)}}},trackInitialPageLoad:function(e){},trackPageView:function(e,t){},trackActivityBegin:function(e,t){},trackActivityEnd:function(e){},trackSingleEvent:function(e,t){return Promise.resolve()},timingStats:{REDIRECT_MS:"stats.time.client.redirect_ms",DNS_MS:"stats.time.client.dns_ms",CONNECT_MS:"stats.time.client.connect_ms",REQUEST_MS:"stats.time.client.request_ms",RESPONSE_MS:"stats.time.client.response_ms",DOCUMENT_MS:"stats.time.client.document_ms",CONTENT_LOADED_MS:"stats.time.client.content_loaded_ms",START_TO_CONTENT_LOADED_MS:"stats.time.client.start_to_content_loaded_ms",RESOURCE_NET_MS:"stats.time.client.resource_net_ms",STATIC_JSCSS_NET_MS:"stats.time.client.static_jscss_net_ms",SUFFICIENTLY_USABLE_MS:"stats.time.client.sufficiently_usable_ms"},reportTiming:function(){if(!window.performance||!window.performance.timing){return}var e=window.performance.timing
var t=e.navigationStart
var i=e.redirectEnd-e.redirectStart
var n=e.domainLookupEnd-e.domainLookupStart
var r=e.connectEnd-e.connectStart
var a=e.responseStart-e.requestStart
var s=e.responseEnd-e.responseStart
var o=e.domContentLoadedEventStart-e.responseEnd
var c=e.domContentLoadedEventEnd-e.domContentLoadedEventStart
var _=e.domContentLoadedEventEnd-t
var d=require("./ka-client-timing.js")
var g=e.domContentLoadedEventStart
var m={}
if(d.clientHasResourceTimingAPI()){var u=d.getResourceEntries(/\.js$|\.css$/)
m["net"]=d.wallTime(u,g)
var l=new RegExp(escapeRegex(KA.staticUrl(""))+"/.+\\.(?:css|js)$")
var v=d.getResourceEntries(l)
m["static_jscss_net"]=d.wallTime(v,g)}var S={}
var p={}
var T=Analytics.timingStats
p[T.REDIRECT_MS]=i
p[T.DNS_MS]=n
p[T.CONNECT_MS]=r
p[T.REQUEST_MS]=a
p[T.RESPONSE_MS]=s
p[T.DOCUMENT_MS]=o
p[T.CONTENT_LOADED_MS]=c
p[T.START_TO_CONTENT_LOADED_MS]=_
if(m){p[T.RESOURCE_NET_MS]=m["net"]
p[T.STATIC_JSCSS_NET_MS]=m["static_jscss_net"]}return this._postTimings(S,p)},reportTimingToGraphiteAndGA:function(e,t){var i=window.performance
if(!(i&&(i.timing||i.now))){return}var n=Math.round(i.now?i.now():getNow()-i.timing.navigationStart)
if(t&&typeof ga!=="undefined"){if(gaTimingMetricsReported[t]){return}gaTimingMetricsReported[t]=true
var r=t.split(".")
var a=r[0]
var s=r[1]
if(window.ga){window.ga("send","timing",a,s,n)}}if(e){if(graphiteTimingMetricsReported[e]){return}graphiteTimingMetricsReported[e]=true
var o={}
o[e]=n
return this._postTimings({},o)}else{return new Promise.resolve}},suppressTimingToGraphiteAndGA:function(e,t){if(e){graphiteTimingMetricsReported[e]=true}if(t){gaTimingMetricsReported[t]=true}},_postTimings:function(e,t){return khanFetch("/api/internal/_mt/elog",babelHelpers._extends({method:"POST"},formUrlencode(babelHelpers._extends({},e,t,{_request_id:KA.requestLogId,_graphite_key_prefix:KA.gaeStatsKeyPrefix,_graphite_keys:Object.keys(t).join()}))))}}
module.exports=Analytics
});
KAdefine("javascript/shared-package/ka-client-timing.js", function(require, module, exports) {
var KAClientTiming={clientHasResourceTimingAPI:function(){return Boolean(window.performance&&typeof window.performance.getEntriesByType==="function")},getResourceEntries:function(e){if(!this.clientHasResourceTimingAPI()||!window.performance.timing){return[]}var n=window.performance.getEntriesByType("resource")
if(e){n=n.filter(function(n){return e.test(n.name)})}var r=window.performance.timing.navigationStart
return n.map(function(e){return{name:e.name,startTime:r+e.startTime,endTime:r+e.startTime+e.duration}})},wallTime:function(e,n){n=n||Number.MAX_VALUE
e=(e||[]).sort(function(e,n){return e.startTime-n.startTime})
var r=0
var t=0
var i=0
e.forEach(function(e){var a=e.startTime
var o=e.endTime
if(o>n){return}if(a<=i){i=Math.max(i,o)}else{r+=i-t
t=a
i=o}})
r+=i-t
return Math.round(r)}}
module.exports=KAClientTiming
});
KAdefine("javascript/shared-package/urgent-notification.js", function(require, module, exports) {
module.exports={renderUrgent:function(n,e){require.async(["../notifications-package/notifications.js","package!notifications.css"],function(i){i.renderUrgent(n,e)})}}
});
KAdefine("javascript/shared-package/api-action-results.js", function(require, module, exports) {
var Cookies=require("./cookies.js")
var KA=require("./ka.js")
var urgentNotification=require("./urgent-notification.js")
var ZeroRating=require("./zero-rating.js")
var APIActionResults={hooks:[],addLangParam:function(e,t){if(!/[?&]lang=/.test(e)&&(e.indexOf("/api/")>-1||e.indexOf("/profile/graph")>-1||e.indexOf("/goals/new")>-1)){return e+(/\?/.test(e)?"&":"?")+"lang="+t}return e},addCacheParam:function(e){if(e.indexOf("/api/")>-1){if(!/[\?&]v=/.test(e)){var t=+new Date
var n=e.replace(/([?&])_=[^&]*/,"$1_="+t)
return n+(n===e?(/\?/.test(e)?"&":"?")+"_="+t:"")}}return e},addXsrfKey:function(e,t){if(e.indexOf("/api/")>-1){var n=Cookies.readCookie("fkey")
if(n){t("X-KA-FKey",n)
return true}else{APIActionResults._apiVersionMismatch()
return false}}return true},checkZeroRating:function(e){if(KA.isZeroRated){var t=document.createElement("a")
t.href=e
return ZeroRating.hostIsZeroRated(t.hostname)}else{return true}},checkApiVersionMismatch:function(e){if(e("X-KA-API-Version-Mismatch")){APIActionResults._apiVersionMismatch()}},checkApiResponse:function(responseBody,getHeaderCallback){if(getHeaderCallback("X-KA-API-Response")&&responseBody){if(responseBody.indexOf("action_results")===-1&&responseBody.indexOf("actionResults")===-1){return}var result=undefined
try{eval("result = "+responseBody)}catch(err){return}if(result){var action=result["action_results"]||result["actionResults"]
if(action){APIActionResults.respondToAction(action)}}}},toCamelCase:function(e){return e.replace(/_([a-z])/g,function(e,t){return t.toUpperCase()})},respondToAction:function(e){APIActionResults.hooks.forEach(function(t,n){if(typeof e[t.prop]!=="undefined"){t.fxn(e[t.prop])}})},_apiVersionMismatch:function(){urgentNotification.renderUrgent({class_:["ApiVersionMismatchNotification"]})},register:function(e,t){this.hooks[this.hooks.length]={prop:e,fxn:t}
this.hooks[this.hooks.length]={prop:APIActionResults.toCamelCase(e),fxn:t}},addDefaultHooks:function(){if(window.ScratchpadUI&&ScratchpadUI.trusted&&window!==top){return}APIActionResults.register("notifications_added",function(e){var t=e.urgent
if(t&&t.length>0){urgentNotification.renderUrgent(t[0],e.continueUrl)}})
APIActionResults.register("user_profile",function(e){var t={}
for(var n in e){if(e.hasOwnProperty(n)){t[APIActionResults.toCamelCase(n)]=e[n]}}e=t
KA.setUserProfile(e)})}}
module.exports=APIActionResults
});
KAdefine("javascript/shared-package/facebookutil.js", function(require, module, exports) {
var icu=require("icu")
var Analytics=require("./analytics.js")
var Cookies=require("./cookies.js")
var KA=require("./ka.js")
var LocalStore=require("./local-store.js")
var resolveReady=null
var FacebookUtil={init:function(){if(!KA.FB_APP_ID){return}window.fbAsyncInit=function(){FB.init({version:"v2.0",appId:KA.FB_APP_ID,status:false,cookie:true,xfbml:true,oauth:true})
if(FacebookUtil.isUsingFbLogin()){FB.getLoginStatus(function(e){if(e.authResponse){FacebookUtil.fixMissingCookie(e.authResponse)}else{Cookies.eraseCookie("fbl")}})}FB.Event.subscribe("auth.login",function(e){FacebookUtil.setFacebookID(e.authResponse.userID)})
FB.Event.subscribe("xfbml.render",function(e){var o=document.getElementById("facepile-holder")
if(!o){return}var i=22
if(o.offsetHeight<=i*1.5){var t=o.getElementsByTagName("iframe")[0]
if(t){t.tabIndex="-1"}return}o.style.opacity=1
Analytics.trackSingleEvent("Load Facepile")})
if(resolveReady){resolveReady()}FacebookUtil._fbReadyPromise=Promise.resolve()}
if(FacebookUtil.isUsingFbLogin()){FacebookUtil.loadFb()}},logout:function(e){var o=window.location.hostname
if(o.indexOf("local.")===0){o=o.substring(6)}var i=FacebookUtil.isUsingFbLogin()
Cookies.eraseCookie("fbsr_"+KA.FB_APP_ID)
Cookies.eraseCookie("fbsr_"+KA.FB_APP_ID,"."+o)
Cookies.eraseCookie("fbm_"+KA.FB_APP_ID)
Cookies.eraseCookie("fbm_"+KA.FB_APP_ID,"."+o)
Cookies.eraseCookie("fbl")
if(i){try{FB.logout(e)}catch(t){e()}}else{e()}},fbLoadStarted_:false,loadFb:function(){if(this.fbLoadStarted_){return}this.fbLoadStarted_=true
var e=document.createElement("script")
e.src=document.location.protocol+"//connect.facebook.net/"+icu.getLocale().replace(/-/g,"_")+"/sdk.js"
var o=document.getElementById("fb-root")
if(o){o.appendChild(e)}},_fbReadyPromise:new Promise(function(e){resolveReady=e}),tryFbLoad:function(e,o){if(KA.isZeroRated){if(o){o()}return}this.loadFb()
this._fbReadyPromise.then(e,o)},isUsingFbLoginCached_:undefined,facebookID:undefined,getFacebookID:function(){if(KA.getUserProfile()&&FacebookUtil.isUsingFbLogin()){return FacebookUtil.facebookID||LocalStore.get("facebookID")}return null},setFacebookID:function(e){FacebookUtil.facebookID=e
LocalStore.set("facebookID",e)},isUsingFbLogin:function(){if(FacebookUtil.isUsingFbLoginCached_===undefined){FacebookUtil.isUsingFbLoginCached_=!!Cookies.readCookie("fbl")}return FacebookUtil.isUsingFbLoginCached_},markUsingFbLogin:function(){Cookies.createCookie("fbl",true,30)},setPublishStreamPermission:function(e){var o=LocalStore.get("fbPublishStream")
if(!o){o={}}var i=FacebookUtil.getFacebookID()
if(i){if(e){o[i]=true}else{delete o[i]}LocalStore.set("fbPublishStream",o)}},hasPublishStreamPermission:function(){var e=LocalStore.get("fbPublishStream")
if(e&&e[FacebookUtil.getFacebookID()]){return true}return false},fixMissingCookie:function(e){if(Cookies.readCookie("fbsr_"+KA.FB_APP_ID)){return}if(e&&e.signedRequest){Cookies.createCookie("fbsr_"+KA.FB_APP_ID,e.signedRequest)}}}
module.exports=FacebookUtil
});
KAdefine("javascript/shared-package/social.js", function(require, module, exports) {
var absoluteLinks=require("../shared-package/absolute-links.js")
var dom=require("./dom-utils.js")
var i18n=require("./i18n.js")
var FacebookUtil=require("./facebookutil.js")
var Social={init:function(){dom.delegate("click",".twitterShare",function(e,t){Social.openTwitterPopup(t.href)
e.preventDefault()})},prepFacebook:function(){FacebookUtil.tryFbLoad(function(){})},facebookShare:function(e,t,a){FacebookUtil.tryFbLoad(function(){FB.ui({method:"feed",name:e,link:t,picture:a,caption:"www.khanacademy.org"})})
return false},facebookVideo:function(e,t,a){FacebookUtil.tryFbLoad(function(){FB.ui({method:"feed",name:e,link:"http://www.khanacademy.org/"+a,picture:"http://www.khanacademy.org/images/handtreehorizontal_facebook.png",caption:"www.khanacademy.org",description:t,message:i18n._("I just learned about %(title)s on Khan Academy",{title:e})})})
return false},formatMailtoUrl:function(e){var t=e.subject
var a=e.body
var o="mailto:"+"?Subject="+encodeURIComponent(t)+"&Body="+encodeURIComponent(a)
return o.replace(/\s/g,"+")},emailBadge:function(e,t){return Social.formatMailtoUrl({subject:i18n._("I just earned the %(badge)s badge on Khan Academy!",{badge:t}),body:i18n._("Check it out at %(url)s.",{url:e})})},openTwitterPopup:function(e){var t=550
var a=370
var o=document.documentElement.clientWidth
var n=document.documentElement.clientHeight
var r=(o-t)/2
var i=(n-a)/2
var c="status=1"+",width="+t+",height="+a+",top="+i+",left="+r
window.open(e,"twitter",c)},formatTwitterShareUrl:function(e){var t=e.url
var a=e.text
var o=absoluteLinks.safeLinkTo("http://twitter.com/intent/"+"tweet?url="+encodeURIComponent(t)+"&text="+encodeURIComponent(a)+"&related=khanacademy:Khan Academy")
return o.replace(/\s/g,"+")},twitterBadge:function(e,t){return Social.formatTwitterShareUrl({url:e,text:i18n._("I just earned the %(badge)s badge on "+"@khanacademy! Check it out at",{badge:t})})}}
module.exports=Social
});
KAdefine("javascript/shared-package/bigbingo.js", function(require, module, exports) {
var _require=require("./khan-fetch.js")
var khanFetch=_require.khanFetch
var formUrlencode=_require.formUrlencode
var BigBingo={markConversions:function(n){return khanFetch("/api/internal/_mt/bigbingo/mark_conversions",babelHelpers._extends({method:"POST"},formUrlencode({conversion_ids:n.join(",")}))).catch(function(n){return null})},markConversionsWithExtras:function(n){return khanFetch("/api/internal/_mt/bigbingo/mark_conversions",babelHelpers._extends({method:"POST"},formUrlencode({conversions:JSON.stringify(n)}))).catch(function(n){return null})},markConversionsWithProduct:function(n,e){var r="/api/internal/_mt/bigbingo/mark_conversions_with_product"+"?topic_slug="+encodeURIComponent(n)
return khanFetch(r,{method:"POST",body:JSON.stringify({conversions:e}),headers:{"Content-Type":"application/json"}}).catch(function(n){return null})},markConversion:function(n,e){if(e){return this.markConversionsWithExtras([{id:n,extra:e}])}else{return this.markConversions([n])}},abTest:function(n){return khanFetch("/api/internal/bigbingo/ab_test",babelHelpers._extends({method:"POST"},formUrlencode({experiment_id:n}))).then(function(n){return n.json()})}}
module.exports=BigBingo
});
KAdefine("javascript/shared-package/zero-rating.js", function(require, module, exports) {
var ZERO_RATING_DOMAIN="zero"
function hostIsZeroRated(o){return o===document.location.hostname||o===""+ZERO_RATING_DOMAIN+".khanacademy.org"||o==="fastly.kastatic.org"||o==="cdn.kastatic.org"||o==="kasandbox.org"||RegExp("."+ZERO_RATING_DOMAIN+".khanacademy.org").test(o)||/\.kasandbox\.org$/.test(o)}module.exports={ZERO_RATING_DOMAIN:ZERO_RATING_DOMAIN,hostIsZeroRated:hostIsZeroRated}
});
KAdefine("javascript/shared-package/location-model.js", function(require, module, exports) {
var Backbone=require("backbone-lite")
var LocationModel=Backbone.Model.extend({defaults:function(){return{lastModified:"",displayText:"",city:"",state:"",country:"",googlePlacesId:"",postalCode:"",latLng:{lat:null,lng:null}}},setToDefault:function(){this.set(this.defaults())}})
module.exports=LocationModel
});
KAdefine("javascript/shared-package/eduorg-models.js", function(require, module, exports) {
var Backbone=require("backbone-lite")
var AffiliationModel=Backbone.Model.extend({url:"/api/internal/user/profile/affiliations",defaults:{eduorgKeyId:"",eduorgName:"",eduorgPostalCode:"",eduorgLocationText:"",role:null}})
exports.AffiliationModel=AffiliationModel
});
KAdefine("javascript/shared-package/profile-model.js", function(require, module, exports) {
var Backbone=require("backbone-lite")
var i18n=require("./i18n.js")
var KA=require("./ka.js")
var _require=require("./khan-fetch.js")
var khanFetch=_require.khanFetch
var encodeParams=_require.encodeParams
var ProfileModel=Backbone.Model.extend({defaults:{affiliations:[],avatarName:"darth",avatarSrc:"/images/darth.png",backgroundName:"",backgroundSrc:"",bio:"",userLocation:null,countVideosCompleted:0,dateJoined:"",email:"",isCoachingLoggedInUser:false,isParentOfLoggedInUser:false,isActivityAccessible:false,nickname:"",points:0,username:"",isDataCollectible:false,isSelf:false,isPublic:false,isCreator:false,isCurator:false,isPublisher:false,followRequiresApproval:true,canModifyCoaches:true,hideVisual:false},url:"/api/internal/user/profile",isPhantom:function(){return this.get("isPhantom")},isCurrentUser:function(){return KA.getUserProfile()&&KA.getUserProfile().get("kaid")===this.get("kaid")},initialize:function(e,t){Backbone.Model.prototype.initialize.call(this,e,t)
this._ensureAttrsAreSubmodels()
var i=ProfileModel.SUBMODEL_ATTRS.map(function(e){return"change:"+e}).join(" ")
this.on(i,this._ensureAttrsAreSubmodels,this)},locationFormatted:function(){var e=this.get("userLocation")
return e&&e.get("displayText")||""},usernameFormatted:function(){var e=this.get("username")
return e?"@"+e:""},_ensureAttrsAreSubmodels:function(e){var t=require("../shared-package/eduorg-models.js").AffiliationModel
var i=require("../shared-package/location-model.js")
var n={}
var a=this.get("userLocation")
if(!(a instanceof i)){n["userLocation"]=new i(a)}var r=this.get("affiliations")||[]
if(r.length===0){r=[new t]}n.affiliations=r.map(function(e){return e instanceof t?e:new t(e)})
this.set(n,{silent:true})},isPrivate:function(){return this.get("isActivityAccessible")===false&&this.get("isPublic")===false},isActivityAccessible:function(){return this.get("isActivityAccessible")},getIdentifier:function(){return this.get("username")||this.get("email")},isEditable:function(){return this.get("isSelf")&&!this.isPhantom()},isFullyEditable:function(){return this.isEditable()&&this.get("isDataCollectible")},isSal:function(){return this.get("username")==="sal"},toJSON:function(){var e=this
var t=ProfileModel.__super__.toJSON.call(this)
ProfileModel.COMPUTED_ATTRS.forEach(function(i){t[i]=e[i]()})
ProfileModel.SUBMODEL_ATTRS.forEach(function(i){var n=e.get(i)
if(n.toJSON){t[i]=n.toJSON()}})
return t},getIfUndefined:function(e,t){if(e&&e[t]!==undefined){return e[t]}return this.get(t)},save:function(e,t){t=t||{}
t.contentType="application/json"
t.data=JSON.stringify({kaid:this.getIfUndefined(e,"kaid"),userKey:this.getIfUndefined(e,"userKey"),avatarName:this.getIfUndefined(e,"avatarName"),bio:this.getIfUndefined(e,"bio"),backgroundName:this.getIfUndefined(e,"backgroundName"),nickname:(this.getIfUndefined(e,"nickname")||"").trim(),username:this.getIfUndefined(e,"username"),isPublic:this.getIfUndefined(e,"isPublic"),hideVisual:this.getIfUndefined(e,"hideVisual"),userLocation:this.getIfUndefined(e,"userLocation"),affiliations:this.getIfUndefined(e,"affiliations")})
var i=t.success
t.success=function(e,t){e.trigger("savesuccess")
if(i){i(e,t)}}
return Backbone.Model.prototype.save.call(this,e,t)},storeState:function(){var e=this.toJSON()
this._storedAttrs=Object.keys(e).reduce(function(t,i){if(!ProfileModel.COMPUTED_ATTRS.includes(i)){t[i]=e[i]}return t},{})},restoreState:function(){var e=this
var t=Object.keys(this._storedAttrs).reduce(function(t,i){if(!ProfileModel.SUBMODEL_ATTRS.includes(i)){t[i]=e._storedAttrs[i]}return t},{})
this.set(t)
var i=Object.keys(this._storedAttrs).reduce(function(t,i){if(ProfileModel.SUBMODEL_ATTRS.includes(i)){t[i]=e._storedAttrs[i]}return t},{})
this.set(i)},fetchFull:function(){var e=this
if(this.get("includesUserDataInfo")){return Promise.resolve()}var t={casing:"camel",kaid:this.get("kaid")}
return khanFetch("/api/internal/user/profile?"+encodeParams(t)).then(function(e){return e.json()}).then(function(t){if(t){e.set(t)}})},parse:function(e,t){if("apiActionResults"in e&&"payload"in e){e=e["payload"]}return Backbone.Model.prototype.parse.call(this,e,t)},validateNickname:function(e){this.trigger("validate:nickname",(e||"").trim().length>0)},validateUsername:function(e){var t=this
if(e===this.get("username")){this.trigger("validate:username")
return}e=e.toLowerCase().replace(/\./g,"")
if(/^[a-z][a-z0-9]{2,}$/.test(e)){khanFetch("/api/internal/user/username_available?"+encodeParams({username:e})).then(function(e){return e.json()}).then(function(e){return t.onValidateUsernameResponse_(e)})}else{var i=""
if(e.length<3){i=i18n._("Too short.")}else if(/^[^a-z]/.test(e)){i=i18n._("Start with a letter.")}else{i=i18n._("Letters and numbers only.")}this.trigger("validate:username",i,false)}},onValidateUsernameResponse_:function(e){var t=e?i18n._("Looks good!"):i18n._("Not available.")
this.trigger("validate:username",t,e)}},{COMPUTED_ATTRS:["isEditable","isFullyEditable","isSal","locationFormatted","usernameFormatted"],SUBMODEL_ATTRS:["affiliations","userLocation"]})
module.exports=ProfileModel
});
KAdefine("javascript/shared-package/khan-fetch.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/fetch/fetch.js")
var APIActionResults=require("./api-action-results.js")
var KA=require("./ka.js")
function copyRequestWithUrl(e,r){var t=fetch.polyfill?Promise.resolve(r._bodyInit):r.headers.get("Content-Type")?r.blob():Promise.resolve(undefined)
return t.then(function(t){return new Request(e,{body:t,method:r.method,headers:r.headers,referrer:r.referrer,referrerPolicy:r.referrerPolicy,mode:r.mode,credentials:r.credentials,cache:r.cache,redirect:r.redirect,integrity:r.integrity})})}function sendCookies(e){if(e.credentials==="omit"){return new Request(e,{credentials:"same-origin"})}return e}function addLangParam(e){if(KA.language){return copyRequestWithUrl(APIActionResults.addLangParam(e.url,KA.language),e)}else{return e}}function addCacheParam(e){var r=APIActionResults.addCacheParam(e.url)
return copyRequestWithUrl(r,e)}function addXsrfKey(e){var r=new Headers(e.headers)
var t=APIActionResults.addXsrfKey(e.url,function(e,t){return r.set(e,t)})
if(!t){throw new Error("Request cancelled because xsrf key was missing")}return new Request(e,{headers:r})}function checkZeroRating(e){if(!APIActionResults.checkZeroRating(e.url)){throw new Error("Request cancelled - non-zero-rated request to "+e.url+" made in zero-rated environment")}return e}function checkStatus(e){if(e.status>=200&&e.status<300){return e}else{var r=new Error(e.statusText)
r.response=e
throw r}}function checkApiVersionMismatch(e){APIActionResults.checkApiVersionMismatch(function(r){return e.headers.get(r)})
return e}function checkApiResponse(e){e.clone().text().then(function(r){APIActionResults.checkApiResponse(r,function(r){return e.headers.get(r)})})
return e}function khanFetch(e,r){return Promise.resolve(new Request(e,r)).then(sendCookies).then(addLangParam).then(addCacheParam).then(addXsrfKey).then(checkZeroRating).then(function(e){return fetch(e)}).then(checkStatus).then(checkApiVersionMismatch).then(checkApiResponse)}function encodeParams(e){var r=""
var t=true
for(var n=Object.entries(e),a=Array.isArray(n),o=0,n=a?n:n[Symbol.iterator]();;){var c
if(a){if(o>=n.length)break
c=n[o++]}else{o=n.next()
if(o.done)break
c=o.value}var s=c[0]
var i=c[1]
var u=encodeURIComponent(s)
var d=encodeURIComponent(i)
if(!t){r+="&"}r+=u+"="+d
t=false}return r.replace(/%20/g,"+")}function formUrlencode(e){return{body:encodeParams(e),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}}module.exports={khanFetch:khanFetch,encodeParams:encodeParams,formUrlencode:formUrlencode}
});
KAdefine("third_party/javascript-khansrc/backbone-lite-src/backbone.js", function(require, module, exports) {
(function(){var t=[]
var e=t.push
var i=t.slice
var r=t.splice
var s=Object.prototype.toString
var n=exports
n.VERSION="1.0.0"
var a=n.Events={on:function(t,e,i){if(!c(this,"on",t,[e,i])||!e)return this
this._events||(this._events={})
var r=this._events[t]||(this._events[t]=[])
r.push({callback:e,context:i,ctx:i||this})
return this},once:function(t,e,i){if(!c(this,"once",t,[e,i])||!e)return this
var r=this
var s=false
var n=function(){if(s)return
s=true
r.off(t,n)
e.apply(this,arguments)}
n._callback=e
return this.on(t,n,i)},off:function(t,e,i){var r,s,n,a,u,o,f,h
if(!this._events||!c(this,"off",t,[e,i]))return this
if(!t&&!e&&!i){this._events={}
return this}a=t?[t]:Object.keys(this._events)
for(u=0,o=a.length;u<o;u++){t=a[u]
if(n=this._events[t]){this._events[t]=r=[]
if(e||i){for(f=0,h=n.length;f<h;f++){s=n[f]
if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this
var e=i.call(arguments,1)
if(!c(this,"trigger",t,e))return this
var r=this._events[t]
var s=this._events.all
if(r)o(r,e)
if(s)o(s,arguments)
return this},stopListening:function(t,e,i){var r=this._listeners
if(!r)return this
var s=!e&&!i
if(typeof e==="object")i=this
if(t)(r={})[t._listenerId]=t
for(var n in r){r[n].off(e,i,this)
if(s)delete this._listeners[n]}return this}}
var u=/\s+/
var c=function(t,e,i,r){if(!i)return true
if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u)
for(var a=0,c=n.length;a<c;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true}
var o=function(t,e){var i,r=-1,s=t.length
while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}
a.bind=a.on
a.unbind=a.off
Object.assign(n,a)
var f=function(t,e,i,r){if(t===e)return t!==0||1/t===1/e
if(t==null||e==null)return t===e
var n=s.call(t)
if(n!==s.call(e))return false
switch(n){case"[object RegExp]":case"[object String]":return""+t===""+e
case"[object Number]":if(+t!==+t)return+e!==+e
return+t===0?1/+t===1/e:+t===+e
case"[object Date]":case"[object Boolean]":return+t===+e}var a=n==="[object Array]"
if(!a){if(typeof t!="object"||typeof e!="object")return false
var u=t.constructor,c=e.constructor
if(u!==c&&!(typeof u==="function"&&u instanceof u&&typeof c==="function"&&c instanceof c)&&("constructor"in t&&"constructor"in e)){return false}}i=i||[]
r=r||[]
var o=i.length
while(o--){if(i[o]===t)return r[o]===e}i.push(t)
r.push(e)
if(a){o=t.length
if(o!==e.length)return false
while(o--){if(!f(t[o],e[o],i,r))return false}}else{var h=Object.keys(t),l
o=h.length
if(Object.keys(e).length!==o)return false
while(o--){l=h[o]
if(!(e.hasOwnProperty(l)&&f(t[l],e[l],i,r)))return false}}i.pop()
r.pop()
return true}
var h=0
var l=function(t){var e=++h+""
return t?t+e:e}
var v=n.Model=function(t,e){var i
var r=t||{}
e||(e={})
this.cid=l("c")
this.attributes={}
this.url=e.url||this.url
this.urlRoot=e.urlRoot||this.urlRoot
if(e.parse)r=this.parse(r,e)||{}
i=typeof this.defaults==="function"?this.defaults():this.defaults
if(i){for(var s in i){if(r[s]===undefined){r[s]=i[s]}}}this.set(r,e)
this.changed={}
this.initialize.apply(this,arguments)}
Object.assign(v.prototype,a,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return Object.assign({},this.attributes)},sync:function(){return n.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,u,c,o,h
if(t==null)return this
if(typeof t==="object"){s=t
i=e}else{(s={})[t]=e}i=Object.assign({},i||{})
if(!this._validate(s,i))return false
n=i.unset
u=i.silent
a=[]
c=this._changing
this._changing=true
if(!c){this._previousAttributes=Object.assign({},this.attributes)
this.changed={}}h=this.attributes,o=this._previousAttributes
if(this.idAttribute in s)this.id=s[this.idAttribute]
for(r in s){e=s[r]
if(!f(h[r],e))a.push(r)
if(!f(o[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete h[r]:h[r]=e}if(!u){if(a.length)this._pending=true
for(var l=0,v=a.length;l<v;l++){this.trigger("change:"+a[l],this,h[a[l]],i)}}if(c)return this
if(!u){while(this._pending){this._pending=false
this.trigger("change",this,i)}}this._pending=false
this._changing=false
return this},unset:function(t,e){return this.set(t,void 0,Object.assign({},e,{unset:true}))},clear:function(t){var e={}
for(var i in this.attributes)e[i]=void 0
return this.set(e,Object.assign({},t,{unset:true}))},fetch:function(t){t=t?Object.assign({},t):{}
if(t.parse===void 0)t.parse=true
var e=this
var i=t.success
t.success=function(r){if(!e.set(e.parse(r,t),t))return false
if(i)i(e,r,t)
e.trigger("sync",e,r,t)}
d(this,t)
return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes
if(t==null||typeof t==="object"){r=t
i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false
i=Object.assign({validate:true},i)
if(!this._validate(r,i))return false
if(r&&i.wait){this.attributes=Object.assign({},a,r)}if(i.parse===void 0)i.parse=true
var u=this
var c=i.success
i.success=function(t){u.attributes=a
var e=u.parse(t,i)
if(i.wait)e=Object.assign(r||{},e)
if(typeof e==="object"&&!u.set(e,i)){return false}if(c)c(u,t,i)
u.trigger("sync",u,t,i)}
d(this,i)
s=this.isNew()?"create":i.patch?"patch":"update"
if(s==="patch")i.attrs=r
n=this.sync(s,this,i)
if(r&&i.wait)this.attributes=a
return n},destroy:function(t){t=t?Object.assign({},t):{}
var e=this
var i=t.success
var r=function(){e.trigger("destroy",e,t)}
t.success=function(s){if(t.wait||e.isNew())r()
if(i)i(e,s,t)
if(!e.isNew())e.trigger("sync",e,s,t)}
if(this.isNew()){t.success()
return false}d(this,t)
var s=this.sync("delete",this,t)
if(!t.wait)r()
return s},url:function(){var t=typeof this.urlRoot==="function"?this.urlRoot():this.urlRoot
var e=t||b()
if(this.isNew())return e
return e+(e.charAt(e.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},Object.assign(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true
t=Object.assign({},this.attributes,t)
var i=this.validationError=this.validate(t,e)||null
if(!i)return true
this.trigger("invalid",this,i,Object.assign(e||{},{validationError:i}))
return false}})
n.sync=function(t,e,i){var r=p[t]
i=i||{}
var s={type:r,dataType:"json"}
if(!i.url){var a=typeof e.url==="function"?e.url():e.url
s.url=a||b()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json"
s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(s.type!=="GET"){s.processData=false}var u=i.xhr=n.ajax(Object.assign(s,i))
e.trigger("request",e,u,i)
return u}
var p={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"}
n.ajax=function(){throw new Error("Please specify an Ajax lib for Backbone.ajax")}
var g=function(t,e){var i=this
var r
if(t&&t.hasOwnProperty("constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}Object.assign(r,i,e)
var s=function(){this.constructor=r}
s.prototype=i.prototype
r.prototype=new s
if(t)Object.assign(r.prototype,t)
r.__super__=i.prototype
return r}
v.extend=g
var b=function(){throw new Error('A "url" property or function must be specified')}
var d=function(t,e){var i=e.error
e.error=function(r){if(i)i(t,r,e)
t.trigger("error",t,r,e)}}}).call(this)
});
KAdefine("javascript/node_modules/backbone-lite/index.js", function(require, module, exports) {
var _require=require("../../shared-package/khan-fetch.js")
var khanFetch=_require.khanFetch
var Backbone=require("../../../third_party/javascript-khansrc/backbone-lite-src/backbone.js")
Backbone.ajax=function(e){var r={method:e.type}
if(e.contentType){r.headers={"Content-Type":e.contentType}}if(e.data){r.body=e.data}var a=khanFetch(e.url,r)
if(e.success){a.then(function(e){return e.json()}).then(e.success)}if(e.error){a.catch(e.error)}return a}
module.exports=Backbone
});
KAdefine("javascript/shared-package/exercise-progress-constants.js", function(require, module, exports) {
"use strict"
var i18n=require("./i18n.js")
var ExerciseProgressConstants={LEVEL_NAMES:["unstarted","practiced","mastery1","mastery2","mastery3"],LEVEL_SLUGS:{unstarted:i18n._("Needs Practice"),practiced:i18n._("Practiced"),mastery1:i18n._("Level One"),mastery2:i18n._("Level Two"),mastery3:i18n._("Mastered")},LEVEL_VALUES:{unstarted:0,practiced:1,mastery1:2,mastery2:3,mastery3:4}}
module.exports=ExerciseProgressConstants
});
KAdefine("javascript/mobile-shared-package/exercise-progress-constants.js", function(require, module, exports) {
"use strict"
var ExerciseProgressConstants={LEVEL_NAMES:["unstarted","practiced","mastery1","mastery2","mastery3"],LEVEL_VALUES:{unstarted:0,practiced:1,mastery1:2,mastery2:3,mastery3:4}}
module.exports=ExerciseProgressConstants
});
KAdefine("javascript/mobile-shared-package/exercise-progress-utils.js", function(require, module, exports) {
"use strict"
var ExerciseProgressConstants=require("./exercise-progress-constants.js")
function getCountPerLevel(e){var r={}
ExerciseProgressConstants.LEVEL_NAMES.forEach(function(e){r[e]=0});(e||[]).forEach(function(e){r[e.state]++})
return r}function getProgressPercentage(e){var r=e["mastery3"]*4+e["mastery2"]*3+e["mastery1"]*2+e["practiced"]*1+e["unstarted"]*0
var s=e["mastery3"]*4+e["mastery2"]*4+e["mastery1"]*4+e["practiced"]*4+e["unstarted"]*4
return Math.floor(100*r/s)}var progressCompare=function(e,r){return ExerciseProgressConstants.LEVEL_VALUES[e]-ExerciseProgressConstants.LEVEL_VALUES[r]}
var ExerciseProgressUtils={getCountPerLevel:getCountPerLevel,getProgressPercentage:getProgressPercentage,progressCompare:progressCompare}
module.exports=ExerciseProgressUtils
});
KAdefine("javascript/shared-package/visit-tracking.js", function(require, module, exports) {
var BigBingo=require("./bigbingo.js")
var Cookies=require("./cookies.js")
var KA=require("./ka.js")
var _require=require("./khan-fetch.js")
var khanFetch=_require.khanFetch
var formUrlencode=_require.formUrlencode
var getSeconds=function(e){var r=new Date
if(e){r=new Date(e)}return Math.floor(+r/1e3)}
var returnVisitTime=60*60*3
var keepCookieFor=365*2
var frequency=60*30
var VisitTracking={_serverPageLoadTime:null,_browserPageLoadTime:null,_init:function(){if(this._initDone){return}this._initDone=true
VisitTracking._serverPageLoadTime=KA.currentServerTime()
VisitTracking._browserPageLoadTime=getSeconds()},trackVisit:function(){if(!KA.INITIALIZED||!Cookies.areCookiesEnabled()){return}VisitTracking._init()
var e=KA.getUserID()
var r=encodeURIComponent(e)
var i=getSeconds()
var t=i-VisitTracking._browserPageLoadTime
var n=VisitTracking._serverPageLoadTime+t
function o(){Cookies.createCookie("return_visits_"+r,n,keepCookieFor)}function a(){var r=""
if(!e){r="pre_phantom"}else if(KA.getUserProfile().isPhantom()){r="phantom"}else{r="logged_in"}var t=["return_visit",r+"_return_visit"]
var n=KA.getUserProfile()
if(n&&!n.attributes.isPhantom){var a=getSeconds(n.attributes.dateJoined)
if(i-a<60*60*24*7){t.push("logged_in_return_visit_7_day")}}if(n&&n.attributes.isChildAccount){khanFetch("/api/internal/user/mark_bingo_conversion_for_parent",babelHelpers._extends({method:"POST"},formUrlencode({conversion_id:"child_return_visit"})))}BigBingo.markConversions(t)
o()}var s=+Cookies.readCookie("return_visits_"+r)
if(!s){o()
return}var u=n-s
if(u>returnVisitTime){setTimeout(a,3e4)}else if(u>frequency){o()}}}
module.exports=VisitTracking
});
KAdefine("javascript/shared-package/parse-query-string.js", function(require, module, exports) {
var parseQueryString=function(e){e=e!=null?e:window.location.search.substring(1)
var r={},n,o=/\+/g,t=/([^&=]+)=?([^&]*)/g,u=function(e){return decodeURIComponent(e.replace(o," "))}
while(n=t.exec(e)){r[u(n[1])]=u(n[2])}return r}
module.exports=parseQueryString
});
KAdefine("javascript/shared-package/update-document-title.js", function(require, module, exports) {
var i18n=require("./i18n.js")
var KA=require("./ka.js")
var pageNameWithoutCount=document.title
function updateDocumentTitle(e){var t=KA.getUserProfile()
if(e&&typeof e.pageName!=="undefined"){pageNameWithoutCount=e.pageName+" | "+i18n._("Khan Academy")}if(e&&t&&typeof e.noteCount!=="undefined"){t.set("countBrandNewNotifications",e.noteCount)}var n=t?t.get("countBrandNewNotifications"):0
document.title=n>0?"("+n+") "+pageNameWithoutCount:pageNameWithoutCount}module.exports=updateDocumentTitle
});
KAdefine("javascript/shared-package/site-infra.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/raven-js/raven.js")
var KA=require("./ka.js")
var dom=require("./dom-utils.js")
var APIActionResults=require("./api-action-results.js")
var FacebookUtil=require("./facebookutil.js")
var KAConsole=require("./console.js")
var PackageManager=require("./package-manager.js")
var Social=require("./social.js")
var VisitTracking=require("./visit-tracking.js")
var A11y=require("./a11y.js")
var SiteInfra={init:function(){if(this._initDone){return}this._initDone=true
KAConsole.init(KA.IS_DEV_SERVER)
PackageManager.init()
FacebookUtil.init()
A11y.init()
dom.ready().then(function(){APIActionResults.addDefaultHooks()
Social.init()
VisitTracking.trackVisit()})}}
module.exports=SiteInfra
});
KAdefine("javascript/shared-package/absolute-links.js", function(require, module, exports) {
var KA=require("./ka.js")
var THIRD_PARTY_HOSTED_SUBDOMAINS_RE=new RegExp("^https?://"+"(life.khanacademy.org|schools.khanacademy.org|"+"international.khanacademy.org)")
function safeLinkTo(e){if(KA.isZeroRated){if(e.match(/https?:\/\/[^\/]*khanacademy.org/)){if(e.match(/zero.khanacademy.org/)){return e}else if(e.match(THIRD_PARTY_HOSTED_SUBDOMAINS_RE)){return"/zero/not-supported?url="+encodeURIComponent(e)}else{return e.replace("khanacademy.org","zero.khanacademy.org")}}else if(e.match(/^\s*javascript/)||e.match(/fastly.kastatic.org/)||e.match(/cdn.kastatic.org/)){return e}else{return"/zero/external-link?url="+encodeURIComponent(e)}}else{return e}}function makeHtmlLinksSafe(e){if(!KA.isZeroRated){return e}var a=/\bhref\s*=\s*['"]\s*(http[^'"]*)['"]/g
return e.replace(a,function(e,a){return'href="'+safeLinkTo(a)+'"'})}module.exports={makeHtmlLinksSafe:makeHtmlLinksSafe,safeLinkTo:safeLinkTo}
});
; KAdefine.updatePathToPackageMap({"javascript/notifications-package/notifications.js": "notifications.js", "third_party/javascript-khansrc/tota11y/build/tota11y.min.js": "tota11y.js"});
