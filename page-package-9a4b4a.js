KAdefine("javascript/page-package/store.js", function(require, module, exports) {
var icepick=require("icepick")
var _require=require("redux")
var combineReducers=_require.combineReducers
var applyMiddleware=_require.applyMiddleware
var createStore=_require.createStore
var thunkMiddleware=require("redux-thunk")
var ExerciseProgressUtils=require("../mobile-shared-package/exercise-progress-utils.js")
var constants=require("./constants.js")
function transformMissionPercentageData(e){var i={}
e.forEach(function(e){var t=ExerciseProgressUtils.getCountPerLevel(e.progressInfo)
var a=ExerciseProgressUtils.getProgressPercentage(t)
i[e.slug]=a})
return i}var initialMissionDataState=icepick.freeze({loading:false,missionPercentages:null})
function missionData(e,i){var t=e
var a=t===undefined?initialMissionDataState:t
switch(i.type){case constants.LOADING_MISSION_PERCENTAGE_DATA:return icepick.assign(a,{loading:true})
case constants.LOADED_MISSION_PERCENTAGE_DATA:return icepick.assign(a,{loading:false,missionPercentages:transformMissionPercentageData(i.missions)})
default:return a}}var initialNotificationsState=icepick.freeze({newNotificationCount:0,notifications:[],loading:false,everLoaded:false,lastCursor:null,hasMore:true,teaser:null})
function notifications(e,i){var t=e
var a=t===undefined?initialNotificationsState:t
switch(i.type){case constants.START_LOADING_NOTIFICATIONS:return icepick.assign(a,{loading:true,everLoaded:true})
case constants.LOADED_NOTIFICATIONS:return icepick.assign(a,{notifications:a.notifications.concat(i.notifications),lastCursor:i.cursor,hasMore:i.hasMore,loading:false})
case constants.NEW_NOTIFICATIONS:return icepick.assign(a,{notifications:!a.everLoaded?a.notifications:i.notifications.concat(a.notifications),newNotificationCount:a.newNotificationCount+i.notifications.length,teaser:i.notifications.length>0?i.notifications[0].translatedTeaser:null})
case constants.CLEAR_NOTIFICATIONS_TEASER:return icepick.assign(a,{teaser:null})
case constants.CLEARED_NEW_NOTIFICATIONS:return icepick.assign(a,{newNotificationCount:0})
default:return a}}var profileDataFromProfile=function(e){return{hasChildStudents:e.get("hasChildStudents"),hasCoachHomepage:e.get("hasCoachHomepage"),hasParentHomepage:e.get("hasParentHomepage"),hasStudents:e.get("hasStudents"),isChildAccount:e.get("isChildAccount"),isDemo:e.get("isDemo"),isMidsignupPhantom:e.get("isMidsignupPhantom"),isPhantom:e.get("isPhantom"),profileRoot:e.get("profileRoot"),nickname:e.get("nickname"),avatarSrc:e.get("avatarSrc")}}
function userProfileData(e,i){var t=e
var a=t===undefined?null:t
switch(i.type){case constants.UPDATE_PROFILE:return i.profile&&icepick.freeze(profileDataFromProfile(i.profile))
default:return a}}var store=combineReducers({notifications:notifications,userProfileData:userProfileData,missionData:missionData})
var createWithMiddleware=applyMiddleware(thunkMiddleware)(createStore)
var create=function(e,i){return createWithMiddleware(store,{notifications:icepick.assign(initialNotificationsState,{newNotificationCount:e}),userProfileData:i&&icepick.freeze(i)})}
module.exports={create:create,notifications:notifications,userProfileData:userProfileData,missionData:missionData}
});
KAdefine("javascript/page-package/constants.js", function(require, module, exports) {
function makeConstants(I){var A={}
Object.keys(I).forEach(function(I){A[I]="PAGE."+I})
return A}module.exports=makeConstants({START_LOADING_NOTIFICATIONS:null,LOADED_NOTIFICATIONS:null,NEW_NOTIFICATIONS:null,CLEARED_NEW_NOTIFICATIONS:null,LOADING_MISSION_PERCENTAGE_DATA:null,LOADED_MISSION_PERCENTAGE_DATA:null,UPDATE_PROFILE:null,CLEAR_NOTIFICATIONS_TEASER:null})
});
KAdefine("javascript/page-package/actions.js", function(require, module, exports) {
var _require=require("../shared-package/khan-fetch.js")
var khanFetch=_require.khanFetch
var encodeParams=_require.encodeParams
var constants=require("./constants.js")
function newNotifications(n){return{type:constants.NEW_NOTIFICATIONS,notifications:n}}function clearNotificationsTeaser(){return{type:constants.CLEAR_NOTIFICATIONS_TEASER}}function gotNewNotifications(n){return function(t,i){t(newNotifications(n))
setTimeout(function(){var n=i()
if(n.notifications.teaser!=null){t(clearNotificationsTeaser())}},5e3)}}function startLoadingNotifications(){return{type:constants.START_LOADING_NOTIFICATIONS}}function loadedNotifications(n,t,i){return{type:constants.LOADED_NOTIFICATIONS,notifications:n,cursor:t,hasMore:i}}function loadMoreNotifications(){return function(n,t){n(startLoadingNotifications())
var i=t()
var o=i.notifications.lastCursor
var e={casing:"camel"}
if(o){e.cursor=o}var a="/api/internal/user/notifications/readable?"+encodeParams(e)
var s=new Promise(function(n){require.async(["../notifications-package/notifications.js","../notifications-package/readable-notification-view.js","backbone","jquery","package!notifications.css"],n)})
Promise.all([khanFetch(a).then(function(n){return n.json()}),s]).then(function(t){var i=t[0]
var o=t[1]
n(loadedNotifications(i.notifications,i.cursor,i.hasMore))})}}function clearedNotifications(){return{type:constants.CLEARED_NEW_NOTIFICATIONS}}function clearNewNotifications(){return function(n){n(clearedNotifications())
khanFetch("/api/internal/user/notifications/clear_brand_new",{method:"POST"})}}function startLoadingMissionPercentages(){return{type:constants.LOADING_MISSION_PERCENTAGE_DATA}}function loadedMissionPercentages(n){return{type:constants.LOADED_MISSION_PERCENTAGE_DATA,missions:n}}function loadMissionPercentages(){return function(n){n(startLoadingMissionPercentages())
khanFetch("/api/internal/user/missions/progress_info?casing=camel").then(function(n){return n.json()}).then(function(t){n(loadedMissionPercentages(t))})}}function updateProfile(n){return{type:constants.UPDATE_PROFILE,profile:n}}module.exports={gotNewNotifications:gotNewNotifications,loadMoreNotifications:loadMoreNotifications,clearNewNotifications:clearNewNotifications,loadMissionPercentages:loadMissionPercentages,updateProfile:updateProfile}
});
KAdefine("javascript/page-package/urls.js", function(require, module, exports) {
module.exports={getLoginURL:function(n){if(!n){n=location.pathname+location.hash}if(n&&n!=="/"){if(n==="/sat"){n="/mission/sat"}else if(n==="/signup"){var o=/continue=([^&]+)/.exec(location.search)
if(o){return"/login?continue="+o[1]}}return"/login?continue="+encodeURIComponent(n)}else{return"/login"}},getLogoutURL:function(n){if(!n){n=location.pathname+location.hash}return"/logout?continue="+encodeURIComponent(n)}}
});
KAdefine("javascript/page-package/footer.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var KA=require("../shared-package/ka.js")
var absoluteLinks=require("../shared-package/absolute-links.js")
var i18n=require("../shared-package/i18n.js")
var $_=i18n.$_
var $i18nDoNotTranslate=i18n.$i18nDoNotTranslate
var styleConstants=require("../shared-styles-package/constants.js")
var styleA11y=require("../shared-styles-package/a11y.js")
var styleShared=require("../shared-styles-package/shared.js")
var bsGrid=require("../shared-styles-package/bootstrap-grid.js")
var Icon=require("../shared-styles-package/fontawesome-icon.jsx")
var Footer=React.createClass({displayName:"Footer",propTypes:{curLanguage:React.PropTypes.string.isRequired,kaGlobals:React.PropTypes.shape({version:React.PropTypes.string.isRequired}).isRequired,kaLocale:React.PropTypes.string.isRequired,languages:React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.string.isRequired)).isRequired,seoSentenceInFooter:React.PropTypes.bool,userData:React.PropTypes.shape({isPhantom:React.PropTypes.bool.isRequired})},getDefaultProps:function(){return{seoSentenceInFooter:false}},getInitialState:function(){return{curLanguage:this.props.curLanguage}},getMainLinks:function(){return mainLinks.map(function(e,t){return React.createElement("div",{className:css(bsGrid.spanFluid2,styles.mobileSpan),key:"column"+t},React.createElement("ul",null,e.map(function(e,t){return[React.createElement("li",{className:css(styles.li,styles.heading,t>0&&styles.spaced),key:"group"+t},e.heading),e.links.map(function(e,t){return React.createElement("li",{className:css(styles.li),key:"link"+t},React.createElement("a",{className:css(styles.a),href:e.href},e.text))})]})))})},getLanguagePicker:function(){if(this.props.userData&&!this.props.userData.isPhantom){if(this.props.kaLocale==="en"){return React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.a),href:"/settings/account"},$i18nDoNotTranslate(null,"Change language")))}else{var e=i18n._("Change language")!=="Change language"
return React.createElement("li",{className:css(styles.li)},e&&React.createElement("span",null,React.createElement("a",{className:css(styles.a),href:"/settings/account"},$_(null,"Change language"))," |"),React.createElement("a",{className:css(styles.a),href:"/settings/account?lang=en"},$i18nDoNotTranslate(null,"Change language")))}}else{return React.createElement("li",{className:css(styles.li)},React.createElement("label",{className:css(styleA11y.srOnly),"data-test-id":"language_picker_label",htmlFor:"language_picker"},$_(null,"Change language")),React.createElement("select",{onChange:this.handleLanguagePick,id:"language_picker",value:this.state.curLanguage},React.createElement("option",{disabled:"disabled",value:"none"},i18n._("View Khan Academy in:")),this.props.languages.map(function(e,t){return React.createElement("option",{key:"lang"+t,value:e[0]},e[1])})))}},handleLanguagePick:function(e){var t=e.target.value
this.setState({curLanguage:t})
window.location.href="/intl/"+t},trackFBClick:function(){if(window.ga){window.ga("send","event","Click","Facebook-Join-Header")}},trackTwitterClick:function(){if(window.ga){window.ga("send","event","Click","Twitter-Follow-Header")}},render:function(){var e=absoluteLinks.safeLinkTo("https://twitter.com/khanacademy")
var t=absoluteLinks.safeLinkTo("https://www.facebook.com/khanacademy")
var a=absoluteLinks.safeLinkTo("http://life.khanacademy.org/")
return React.createElement("footer",{className:css(styles.rootStyle)},React.createElement("h2",{className:css(styleA11y.srOnly)},$_(null,"Site Navigation")),React.createElement("div",{className:css(styles.footerContainer)},React.createElement("div",{className:css(bsGrid.rowFluid,styles.linksArea)},this.getMainLinks(),React.createElement("div",{className:css(bsGrid.spanFluid3,styles.mobileSpan)},React.createElement("ul",null,React.createElement("li",{className:css(styles.li,styles.heading,styles.nowrap)},$_(null,"International"),React.createElement("span",{className:css(styles.i18nIcon)},React.createElement(Icon,{name:"globe"}))),this.getLanguagePicker(),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.a),href:"/contribute"},$_(null,"Translate our content"))),React.createElement("li",{className:css(styles.li,styles.heading,styles.spaced)},$_(null,"Social")),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.a),href:t,onclick:this.trackFBClick,title:i18n._("Facebook")},$_(null,"Facebook"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.a),href:e,onclick:this.trackTwitterClick,title:i18n._("Twitter")},$_(null,"Twitter"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.a),href:"/about/blog"},$_(null,"Blog"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.a),href:a},$_(null,"Life at KA"))))),React.createElement("div",{className:css(bsGrid.spanFluid1,styles.mobileSpan)},React.createElement("img",{alt:i18n._("Khan Academy logo"),className:css(styles.handtree),src:KA.staticUrl("/images/khan-logo-vertical-transparent.png")}))),React.createElement("div",{className:css(styleShared.clearfix,styles.linksArea,styles.extraLinksArea)},React.createElement("div",{className:css(styles.legal)},React.createElement("span",null,React.createElement("a",{className:css(styles.a),href:"/about/tos"},$_(null,"Terms of Use")))),React.createElement("div",{className:css(styles.legal)},React.createElement("span",null,React.createElement("a",{className:css(styles.a),href:"/about/privacy-policy"},$_(null,"Privacy Notice")))),React.createElement("div",{className:css(styles.copyright),title:i18n.i18nDoNotTranslate("Version: ")+this.props.kaGlobals.version},$i18nDoNotTranslate(null,"© 2016 Khan Academy"),React.createElement("br",null),$_(null,"Except where noted, all rights reserved.")),this.props.seoSentenceInFooter&&React.createElement("div",{className:css(styles.extraFooterText)},React.createElement("a",{className:css(styles.a,styles.topicLink),href:"/math/arithmetic/fractions"},$_(null,"Get free help with fractions and other math on Khan Academy"))," ",$_(null,"using our open online courses and lessons.")),React.createElement("div",{className:css(styles.extraFooterText)},$_(null,"Free classes and courses available for online learning at every level: Elementary, High school, and College lessons.")))))}})
var footerLineHeight=20
var footerFontSize=12
var styles=StyleSheet.create({rootStyle:{backgroundColor:styleConstants.whiteDark,borderTop:"1px solid "+styleConstants.grayLighter,clear:"both",color:styleConstants.gray,display:"block",fontFamily:styleConstants.headerLightFontFamily,fontSize:footerFontSize,height:"auto",lineHeight:""+footerLineHeight+"px",position:"relative",width:"100%",zIndex:10},li:{paddingRight:8,paddingBottom:8},a:{textDecoration:"none"},footerContainer:{boxSizing:"border-box",maxWidth:styleConstants.maxContainerWidth,position:"relative",padding:"0 "+footerFontSize+"px",margin:"0 auto"},heading:{fontFamily:styleConstants.headerFontFamily,textTransform:"uppercase",color:styleConstants.blueDark},spaced:{marginTop:footerLineHeight+footerFontSize/2},nowrap:{whiteSpace:"nowrap"},linksArea:{display:"inline-block",padding:""+2*footerFontSize+"px 0 "+footerFontSize+"px",position:"relative"},extraLinksArea:{display:"inline-block",borderTop:"1px solid "+styleConstants.grayLighter,padding:""+footerFontSize+"px 0 "+2*footerFontSize+"px",width:"100%"},legal:{"float":"left",marginRight:30},copyright:{"float":"right",textAlign:"right"},topicLink:{clear:"left",color:styleConstants.gray,"float":"left",":active":{color:styleConstants.gray},":hover":{color:styleConstants.gray},":visited":{color:styleConstants.gray}},extraFooterText:{clear:"left","float":"left"},i18nIcon:{cursor:"default",display:"inline-block",fontSize:20,textAlign:"center",verticalAlign:"middle",width:"1.25em"},handtree:{bottom:footerFontSize*2+1,left:"auto",maxWidth:100,position:"absolute",right:0,top:"auto","@media (max-width: 480px)":{right:"auto"}},mobileSpan:{"@media (max-width: 480px)":{"float":"left",width:"48.93617021276595%",":nth-child(2n)":{marginLeft:0},":nth-child(2n+1)":{marginLeft:"2.127659574468085%",clear:"both"}}}})
var mainLinks=[[{heading:$_(null,"About"),links:[{href:"/about",text:$_(null,"Our Mission")},{href:"/youcanlearnanything",text:$_(null,"You Can Learn Anything")},{href:"/about/the-team",text:$_(null,"Our Team")},{href:"/about/our-interns",text:$_(null,"Our Interns")},{href:"/about/our-content-specialists",text:$_(null,"Our Content Specialists")},{href:"/about/our-board",text:$_(null,"Our Board")}]}],[{heading:$_(null,"Support"),links:[{href:absoluteLinks.safeLinkTo("https://khanacademy.zendesk.com/"),text:$_(null,"Help center")}]},{heading:$_(null,"Contact Us"),links:[{href:absoluteLinks.safeLinkTo("https://khanacademy.zendesk.com/"),text:$_(null,"Contact")},{href:absoluteLinks.safeLinkTo("https://khanacademy.zendesk.com/hc/"+"en-us/articles/202483630-PressRoom"),text:$_(null,"Press")}]}],[{heading:$_(null,"Coaching"),links:[{href:"/coach/reports",text:$_(null,"Coach Reports")},{href:"/educator",text:$_(null,"Coach Resources")},{href:"/educator/case-studies",text:$_(null,"Case Studies")},{href:"/commoncore",text:$_(null,"Common Core")}]}],[{heading:$_(null,"Careers"),links:[{href:"/careers",text:$_(null,"Full Time")},{href:"/careers/interns",text:$_(null,"Internships")}]},{heading:$_(null,"Contribute"),links:[{href:"/donate",text:$_(null,"Donate")},{href:"/contribute",text:$_(null,"Volunteer")},{href:"/about/our-supporters",text:$_(null,"Our Supporters")}]}]]
module.exports=Footer
});
KAdefine("javascript/page-package/big-bingo-links.js", function(require, module, exports) {
function buildUrlWithoutExtras(n,e){return"/bigbingo_redirect"+("?continue="+encodeURIComponent(e))+("&conversion_ids="+encodeURIComponent(n.join(",")))}function buildUrlWithExtras(n,e){return"/bigbingo_redirect"+("?continue="+encodeURIComponent(e))+("&conversions_json="+encodeURIComponent(JSON.stringify(n)))}function replaceHref(n,e,r){var t=n.currentTarget
if(t.getAttribute("data-has-big-bingo-href")===null){t.href=r(e,t.href)
t.setAttribute("data-has-big-bingo-href","")}}function handleMouseDown(n,e,r){replaceHref(n,e,r)}function handleKeyDown(n,e,r){if(n.key==="Enter"){replaceHref(n,e,r)}}function _handlers(n,e){return{onMouseDown:function(r){return handleMouseDown(r,n,e)},onKeyDown:function(r){return handleKeyDown(r,n,e)}}}function handlers(n){return _handlers(n,buildUrlWithoutExtras)}function handlersWithExtras(n){return _handlers(n,buildUrlWithExtras)}function addEventListeners(n,e){var r=handlers(n)
var t=r.onMouseDown
var o=r.onKeyDown
e.addEventListener("mousedown",t)
e.addEventListener("keydown",o)}module.exports={handlers:handlers,handlersWithExtras:handlersWithExtras,addEventListeners:addEventListeners}
});
KAdefine("javascript/page-package/down-caret.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var styleConstants=require("../shared-styles-package/constants.js")
var Icon=require("../shared-styles-package/fontawesome-icon.jsx")
var DownCaret=React.createClass({displayName:"DownCaret",propTypes:{transparent:React.PropTypes.bool},render:function(){return React.createElement("span",{"aria-hidden":true,className:css(styles.caret,this.props.transparent&&styles.transparent)},React.createElement(Icon,{name:"caretDown"}))}})
var styles=StyleSheet.create({caret:{color:styleConstants.gray,fontSize:14,transition:"color 0.3s"},transparent:{color:styleConstants.white}})
module.exports=DownCaret
});
KAdefine("javascript/page-package/dropdown-button.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var styleConstants=require("../shared-styles-package/constants.js")
var DropdownButton=React.createClass({displayName:"DropdownButton",propTypes:{buttonStyles:React.PropTypes.arrayOf(React.PropTypes.any),children:React.PropTypes.node,onClick:React.PropTypes.func,onMouseEnter:React.PropTypes.func,onMouseLeave:React.PropTypes.func,testId:React.PropTypes.string},getDefaultProps:function(){return{buttonStyles:[],onClick:function(){},onMouseEnter:function(){},onMouseLeave:function(){}}},render:function(){var e=this
return React.createElement("a",{"data-test-id":this.props.testId,href:"javascript: void 0",className:css.apply(undefined,[styles.button].concat(this.props.buttonStyles)),role:"button","aria-haspopup":true,onClick:function(){return e.props.onClick()},onMouseEnter:function(){return e.props.onMouseEnter()},onMouseLeave:function(){return e.props.onMouseLeave()}},this.props.children)}})
var styles=StyleSheet.create({button:{alignItems:"center",color:styleConstants.textColor,display:"flex",fontFamily:styleConstants.baseFontFamily,justifyContent:"center",textDecoration:"none"}})
module.exports=DropdownButton
});
KAdefine("javascript/page-package/header-dropdown.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var styleConstants=require("../shared-styles-package/constants.js")
var HeaderDropdown=React.createClass({displayName:"HeaderDropdown",propTypes:{children:React.PropTypes.node,dropdownStyles:React.PropTypes.arrayOf(React.PropTypes.any),hasBorder:React.PropTypes.bool,visible:React.PropTypes.bool},getDefaultProps:function(){return{visible:false,hasBorder:true,dropdownStyles:[]}},render:function(){return React.createElement("div",{className:css.apply(undefined,[styles.dropdown,this.props.visible&&styles.dropdownOpen,this.props.hasBorder&&styles.dropdownBorder].concat(this.props.dropdownStyles)),role:"menu","aria-expanded":this.props.visible},this.props.children)}})
var styles=StyleSheet.create({dropdown:{display:"none",position:"absolute",zIndex:styleConstants.zindexDropdown},dropdownOpen:{display:"block"},dropdownBorder:{border:"1px solid "+styleConstants.grayLighter,boxShadow:"0 5px 8px rgba(0, 0, 0, 0.5)"}})
module.exports=HeaderDropdown
});
KAdefine("javascript/page-package/header-logo.jsx", function(require, module, exports) {
var _transparent
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var _require2=require("../shared-package/i18n.js")
var $i18nDoNotTranslate=_require2.$i18nDoNotTranslate
var mediaQueries=require("../shared-styles-package/media-queries.js")
var styleConstants=require("../shared-styles-package/constants.js")
var HeaderLogo=React.createClass({displayName:"HeaderLogo",propTypes:{linkAttributes:React.PropTypes.objectOf(React.PropTypes.any),logoStyles:React.PropTypes.arrayOf(React.PropTypes.any),onClick:React.PropTypes.func,transparent:React.PropTypes.bool},getDefaultProps:function(){return{onClick:function(){}}},render:function(){var e=React.createElement("span",{className:css(styles.leaf)},"•")
var a=React.createElement("span",{className:css(styles.khan)},$i18nDoNotTranslate(null,"Khan"))
var t=React.createElement("span",{className:css(styles.academy)},$i18nDoNotTranslate(null,"Academy"))
return React.createElement("a",babelHelpers._extends({},this.props.linkAttributes,{"data-test-id":"header-logo",href:"/","aria-label":"Khan Academy",className:css.apply(undefined,[styles.navLink,this.props.transparent&&styles.transparent].concat(this.props.logoStyles,[styles.navLinkHover])),onClick:this.props.onClick}),React.createElement("span",{className:css(styles.logotype),"aria-hidden":true},e,a,t))}})
var styles=StyleSheet.create({leaf:{color:styleConstants.yellowGreen,marginRight:3},khan:{textTransform:"uppercase"},academy:{textTransform:"lowercase"},logotype:{WebkitFontSmoothing:"antialiased",fontFamily:"FontAwesome",fontSize:17,letterSpacing:0,textAlign:"center"},navLink:{color:styleConstants.textColor,textDecoration:"none"},navLinkHover:{":hover":{color:styleConstants.yellowGreen}},transparent:(_transparent={},_transparent[mediaQueries.mdOrLarger]={color:styleConstants.white},_transparent)})
module.exports=HeaderLogo
});
KAdefine("javascript/page-package/header-link.jsx", function(require, module, exports) {
var _hideWhenSmall
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var mediaQueries=require("../shared-styles-package/media-queries.js")
var styleConstants=require("../shared-styles-package/constants.js")
var HeaderLink=React.createClass({displayName:"HeaderLink",propTypes:{children:React.PropTypes.node,defaultGreen:React.PropTypes.bool,fadeToBlue:React.PropTypes.bool,hidden:React.PropTypes.bool,hideWhenResponsive:React.PropTypes.bool,href:React.PropTypes.string.isRequired,linkAttributes:React.PropTypes.objectOf(React.PropTypes.any),linkStyles:React.PropTypes.arrayOf(React.PropTypes.any),onClick:React.PropTypes.func,testId:React.PropTypes.string,transparent:React.PropTypes.bool},getDefaultProps:function(){return{defaultGreen:false,fadeToBlue:false}},render:function(){var e=css.apply(undefined,[styles.link,this.props.defaultGreen&&styles.greenBackground,this.props.fadeToBlue&&styles.fadeToBlue,this.props.hidden&&styles.hidden,this.props.transparent&&styles.transparent,this.props.hideWhenResponsive&&styles.hideWhenSmall].concat(this.props.linkStyles))
return React.createElement("a",babelHelpers._extends({},this.props.linkAttributes,{"data-test-id":this.props.testId,onClick:this.props.onClick,href:this.props.href,className:e}),this.props.children)}})
var styles=StyleSheet.create({link:{color:styleConstants.textColor,fontSize:14,textDecoration:"none",transitionDuration:"0.3s",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:styleConstants.menuHighlightColor}},greenBackground:{backgroundColor:styleConstants.kaGreen,color:styleConstants.white,":hover":{color:styleConstants.white}},fadeToBlue:{":hover":{backgroundColor:styleConstants.blueDark,color:styleConstants.white}},hidden:{opacity:0},transparent:{background:"none",color:styleConstants.white},hideWhenSmall:(_hideWhenSmall={},_hideWhenSmall[mediaQueries.smOrSmaller]={display:"none"},_hideWhenSmall)})
module.exports=HeaderLink
});
KAdefine("javascript/page-package/profile-dropdown.jsx", function(require, module, exports) {
var _wrapper
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var $_=require("../shared-package/i18n.js").$_
var DownCaret=require("./down-caret.jsx")
var DropdownButton=require("./dropdown-button.jsx")
var FacebookUtil=require("../shared-package/facebookutil.js")
var HeaderDropdown=require("./header-dropdown.jsx")
var HeaderLink=require("./header-link.jsx")
var KA=require("../shared-package/ka.js")
var absoluteLinks=require("../shared-package/absolute-links.js")
var bigBingoLinks=require("./big-bingo-links.js")
var mediaQueries=require("../shared-styles-package/media-queries.js")
var styleConstants=require("../shared-styles-package/constants.js")
var urls=require("./urls.js")
var DropdownItem=React.createClass({displayName:"DropdownItem",propTypes:{children:React.PropTypes.node,defaultGreen:React.PropTypes.bool,href:React.PropTypes.string.isRequired,linkAttributes:React.PropTypes.objectOf(React.PropTypes.any),onClick:React.PropTypes.func,testId:React.PropTypes.string},getDefaultProps:function(){return{defaultGreen:false}},render:function(){var e=this.props
var r=e.href
var t=e.children
var o=e.defaultGreen
var a=e.onClick
return React.createElement("li",{className:css(styles.dropdownListItem)},React.createElement(HeaderLink,{defaultGreen:o,fadeToBlue:true,href:r,linkAttributes:this.props.linkAttributes,linkStyles:[styles.dropdownItem],onClick:a,testId:this.props.testId},t))}})
var DropdownSeparator=React.createClass({displayName:"DropdownSeparator",render:function(){return React.createElement("li",{className:css(styles.dropdownSeparator)})}})
var ProfileDropdown=React.createClass({displayName:"ProfileDropdown",propTypes:{avatarImage:React.PropTypes.string.isRequired,buttonStyles:React.PropTypes.arrayOf(React.PropTypes.any),currentUrl:React.PropTypes.string,hasChildren:React.PropTypes.bool,hasStudents:React.PropTypes.bool,nickName:React.PropTypes.string.isRequired,onDropdownToggle:React.PropTypes.func,profileUrl:React.PropTypes.string.isRequired,showCoachingLinks:React.PropTypes.bool,showDropdown:React.PropTypes.bool,showLearningHome:React.PropTypes.bool,showSettings:React.PropTypes.bool,showSignUpToSave:React.PropTypes.bool,signupUrl:React.PropTypes.string,transparent:React.PropTypes.bool},getDefaultProps:function(){return{showDropdown:false,onDropdownToggle:function(){},showSignUpToSave:false,showLearningHome:false,showCoachingLinks:false,hasStudents:false,hasChildren:false,showSettings:false,buttonStyles:[]}},handleLogoutClick:function(e){e.preventDefault()
var r=urls.getLogoutURL(this.props.currentUrl)
FacebookUtil.logout(function(){window.location=r})},render:function(){var e=this.props
var r=e.showSignUpToSave
var t=e.showLearningHome
var o=e.showCoachingLinks
var a=e.hasStudents
var s=e.hasChildren
var n=e.showSettings
var i=absoluteLinks.safeLinkTo("https://khanacademy.zendesk.com")
var l=[r&&React.createElement(DropdownItem,{key:"signup",href:this.props.signupUrl,defaultGreen:true},$_(null,"Sign up to claim your points")),React.createElement(DropdownItem,{key:"profile",href:this.props.profileUrl,linkAttributes:bigBingoLinks.handlersWithExtras([{id:"global_nav_visit_profile",extra:{view:"desktop"}}]),testId:"profile-dropdown-profile-link"},$_(null,"Profile")),React.createElement(DropdownSeparator,{key:"separator1"}),t&&React.createElement(DropdownItem,{key:"learninghome",href:"/?learn=1"},$_(null,"Learning home")),o&&React.createElement(DropdownItem,{key:"coach",href:"/coach/dashboard"},a?$_(null,"Your students"):$_(null,"Add students")),o&&React.createElement(DropdownItem,{key:"parent",href:"/parent"},s?$_(null,"Your children"):$_(null,"Add children")),o&&React.createElement(DropdownSeparator,{key:"separator2"}),n&&React.createElement(DropdownItem,{key:"settings",href:"/settings/account"},$_(null,"Settings")),React.createElement(DropdownItem,{key:"help",href:i},$_(null,"Help")),React.createElement(DropdownSeparator,{key:"separator3"}),React.createElement(DropdownItem,{onClick:this.handleLogoutClick,href:urls.getLogoutURL(this.props.currentUrl),key:"logout",testId:"profile-dropdown-logout-link"},$_(null,"Log out"))]
return React.createElement("div",{className:css(styles.wrapper)},React.createElement(DropdownButton,{testId:"profile-dropdown-trigger",buttonStyles:this.props.buttonStyles,onClick:this.props.onDropdownToggle},React.createElement("img",{className:css(styles.avatar),src:KA.staticUrl(this.props.avatarImage),alt:""}),React.createElement("span",{className:css(styles.nickname,this.props.transparent&&styles.whiteNickname)},this.props.nickName),React.createElement("span",{className:css(styles.caret)},React.createElement(DownCaret,{transparent:this.props.transparent}))),React.createElement(HeaderDropdown,{visible:this.props.showDropdown,dropdownStyles:[styles.dropdown]},React.createElement("ul",{"data-test-id":"profile-dropdown",className:css(styles.dropdownList)},l)))}})
var styles=StyleSheet.create({wrapper:(_wrapper={},_wrapper.display="inline-block",_wrapper.height="100%",_wrapper.position="relative",_wrapper[mediaQueries.smOrSmaller]={display:"none"},_wrapper),trigger:{alignItems:"center",background:"none",border:"none",color:styleConstants.textColor,display:"flex",fontFamily:styleConstants.baseFontFamily,justifyContent:"center",outline:"none",textDecoration:"none"},avatar:{height:24,marginRight:4},nickname:{color:styleConstants.textColor,maxWidth:205,overflow:"hidden",textOverflow:"ellipsis",transition:"color 0.3s",whiteSpace:"nowrap"},whiteNickname:{color:styleConstants.white},caret:{marginLeft:5},dropdown:{backgroundColor:styleConstants.white,minWidth:"100%",right:-1},dropdownList:{alignItems:"stretch",display:"flex",flexDirection:"column"},dropdownListItem:{display:"inline-flex"},dropdownItem:{boxSizing:"border-box",padding:"10px 20px 10px 15px",width:"100%"},dropdownSeparator:{backgroundColor:styleConstants.grayLighter,height:1}})
module.exports=ProfileDropdown
});
KAdefine("javascript/page-package/notifications-teaser.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var NotificationsTeaser=React.createClass({displayName:"NotificationsTeaser",propTypes:{message:React.PropTypes.string.isRequired},render:function(){return React.createElement("div",{className:css(styles.wrapper)},React.createElement("div",{className:css(styles.body)},React.createElement("div",{className:css(styles.tip)}),React.createElement("div",{className:css(styles.message)},this.props.message)))}})
var backgroundColor="#4A4A4A"
var styles=StyleSheet.create({wrapper:{left:"50%",position:"absolute",width:0},body:{alignItems:"center",display:"flex",flexDirection:"column"},tip:{borderBottomWidth:6,borderColor:backgroundColor,borderLeft:"4px solid transparent",borderRight:"4px solid transparent",borderStyle:"solid"},message:{backgroundColor:backgroundColor,borderRadius:3,color:"white",fontSize:13,padding:9,whiteSpace:"nowrap"}})
module.exports=NotificationsTeaser
});
KAdefine("javascript/page-package/notifications-dropdown.jsx", function(require, module, exports) {
var _wrapper
var React=require("react")
var classNames=require("classnames")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var DownCaret=require("./down-caret.jsx")
var DropdownButton=require("./dropdown-button.jsx")
var HeaderDropdown=require("./header-dropdown.jsx")
var Icon=require("../shared-styles-package/fontawesome-icon.jsx")
var KA=require("../shared-package/ka.js")
var NotificationsTeaser=require("./notifications-teaser.jsx")
var a11yStyles=require("../shared-styles-package/a11y.js")
var bigBingoLinks=require("./big-bingo-links.js")
var i18n=require("../shared-package/i18n.js")
var mediaQueries=require("../shared-styles-package/media-queries.js")
var styleConstants=require("../shared-styles-package/constants.js")
var $_=i18n.$_
var BellIcon=React.createClass({displayName:"BellIcon",propTypes:{hasBrandNew:React.PropTypes.bool,styles:React.PropTypes.arrayOf(React.PropTypes.any)},render:function(){return React.createElement("span",{className:css.apply(undefined,[bellStyles.base,this.props.hasBrandNew&&bellStyles.hasNew].concat(this.props.styles))},React.createElement(Icon,{name:"bellAlt",large:true}))}})
var bellStyles=StyleSheet.create({base:{color:styleConstants.gray},hasNew:{color:styleConstants.menuHighlightColor}})
var NotificationBubble=React.createClass({displayName:"NotificationBubble",propTypes:{notificationCount:React.PropTypes.number.isRequired},render:function(){return React.createElement("span",{className:css(styles.bubble)},this.props.notificationCount)}})
var NotificationWrapper=React.createClass({displayName:"NotificationWrapper",propTypes:{notification:React.PropTypes.any.isRequired},componentDidMount:function(){var e=this
require.async(["../notifications-package/notifications.js","../notifications-package/readable-notification-view.js","backbone","jquery","package!notifications.css"],function(t,a,r,$){var o=new r.Model(e.props.notification)
var s=t.getViewClass(o.get("class_"),a)
var n=new s({model:o,$container:$(e.refs.container)})
n.render(true)
var i=e.refs.container.querySelector("a")
bigBingoLinks.addEventListeners(["global_nav_open_notification"],i)})},render:function(){var e=classNames("user-notifications",css(styles.notificationWrapper))
return React.createElement("ul",{ref:"container",className:e})}})
var NotificationsDropdown=React.createClass({displayName:"NotificationsDropdown",propTypes:{buttonStyles:React.PropTypes.arrayOf(React.PropTypes.any),isLoading:React.PropTypes.bool.isRequired,newNotificationCount:React.PropTypes.number.isRequired,notifications:React.PropTypes.arrayOf(NotificationWrapper.propTypes.notification),onDropdownToggle:React.PropTypes.func,onScrollToBottom:React.PropTypes.func,showDropdown:React.PropTypes.bool,teaser:React.PropTypes.string,transparent:React.PropTypes.bool},getDefaultProps:function(){return{notifications:[],showDropdown:false,onDropdownToggle:function(){},onScrollToBottom:function(){},buttonStyles:[]}},handleScroll:function(e){var t=e.target
var a=t.scrollHeight
var r=t.clientHeight
var o=t.scrollTop
var s=2
if(o+r>=a-s){this.props.onScrollToBottom()
e.preventDefault()}},renderButton:function(){var e=this.props.newNotificationCount>0
var t=i18n.ngettext("%(num)s new notification","%(num)s new notifications",this.props.newNotificationCount)
return React.createElement(DropdownButton,{testId:"notifications-dropdown-trigger",buttonStyles:this.props.buttonStyles,onClick:this.props.onDropdownToggle},React.createElement("div",null,React.createElement("div",{className:css(styles.teaserWrapper),"aria-hidden":"true","data-notifications-dropdown-trigger":true},this.props.teaser&&React.createElement(NotificationsTeaser,{message:this.props.teaser})),React.createElement("span",{className:css(a11yStyles.srOnly)},$_(null,"Notifications"),e&&" ("+t+")"),React.createElement("span",{"aria-hidden":"true"},React.createElement(BellIcon,{styles:[styles.bell],hasBrandNew:e}),e&&React.createElement("span",{className:css(styles.bubbleWrapper)},React.createElement(NotificationBubble,{notificationCount:this.props.newNotificationCount})),React.createElement(DownCaret,null))))},render:function(){var e=this.props.notifications.length>0
var t=$_(null,"No notifications. You can get back to learning!")
return React.createElement("div",{className:css(styles.wrapper,this.props.transparent&&styles.wrapperTransparent)},this.renderButton(),React.createElement(HeaderDropdown,{visible:this.props.showDropdown,dropdownStyles:[styles.dropdown]},React.createElement("div",{className:css(styles.heading)},$_(null,"Notifications")),React.createElement("ul",{"data-test-id":"notifications-dropdown",className:css(styles.notificationsList),onScroll:this.handleScroll},!this.props.isLoading&&!e&&React.createElement("li",{className:css(styles.empty)},t),this.props.notifications.map(function(e,t){return React.createElement("li",{key:t},React.createElement(NotificationWrapper,{notification:e}))}),this.props.isLoading&&React.createElement("li",{className:css(styles.empty,e&&styles.loadingMore)},React.createElement("img",{src:KA.staticUrl("/images/throbber.gif")})))))}})
var styles=StyleSheet.create({wrapper:(_wrapper={},_wrapper.display="inline-block",_wrapper.height="100%",_wrapper.position="relative",_wrapper.transition="opacity 0.3s",_wrapper[mediaQueries.smOrSmaller]={display:"none"},_wrapper),wrapperTransparent:{opacity:0},dropdown:{right:-1},dropdownList:{alignItems:"stretch",display:"flex",flexDirection:"column"},heading:{background:"#eee",borderBottom:"1px solid #ccc",minWidth:400,textAlign:"center"},notificationsList:{backgroundColor:"white",maxHeight:310,overflowY:"scroll"},empty:{alignItems:"center",display:"flex",height:150,justifyContent:"center"},loadingMore:{height:18},notificationWrapper:{color:"black"},bell:{marginRight:7},bubbleWrapper:{position:"relative"},bubble:{backgroundColor:styleConstants.green,borderRadius:3,boxShadow:"0 1px 3px rgba(0, 0, 0, 0.5)",color:styleConstants.white,fontSize:10,fontWeight:"bold",left:-10,lineHeight:"13px",padding:"0 2px",position:"absolute",top:-8},teaserWrapper:{position:"absolute",width:"100%",top:"100%",left:0}})
module.exports=NotificationsDropdown
});
KAdefine("javascript/page-package/notifications-list.jsx", function(require, module, exports) {
var React=require("react")
var classNames=require("classnames")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var KA=require("../shared-package/ka.js")
var bigBingoLinks=require("./big-bingo-links.js")
var globalStyles=require("../shared-styles-package/global-styles.js")
var _require2=require("../shared-package/i18n.js")
var $_=_require2.$_
var NotificationWrapper=React.createClass({displayName:"NotificationWrapper",propTypes:{notification:React.PropTypes.any.isRequired},componentDidMount:function(){var e=this
require.async(["../notifications-package/notifications.js","../notifications-package/readable-notification-view.js","backbone","jquery","package!notifications.css"],function(a,t,i,$){var r=new i.Model(e.props.notification)
var o=a.getViewClass(r.get("class_"),t)
var n=new o({model:r,$container:$(e.refs.container)})
n.render(true)
var s=e.refs.container.querySelector("a")
bigBingoLinks.addEventListeners(["global_nav_open_notification"],s)})},render:function(){var e=classNames("user-notifications",css(styles.notificationWrapper))
return React.createElement("ul",{ref:"container",className:e})}})
var NotificationsList=React.createClass({displayName:"NotificationsList",propTypes:{loading:React.PropTypes.bool,notifications:React.PropTypes.arrayOf(NotificationWrapper.propTypes.notification)},getDefaultProps:function(){return{notifications:[],isLoading:false}},render:function(){var e=this.props.notifications.length>0
var a=$_(null,"No notifications. You can get back to learning!")
return React.createElement("ul",{"data-test-id":"notifications-dropdown"},!this.props.loading&&!e&&React.createElement("li",{className:css(styles.empty)},a),this.props.notifications.map(function(e,a){return React.createElement("li",{key:a},React.createElement(NotificationWrapper,{notification:e}))}),this.props.loading&&React.createElement("li",{className:css(styles.empty,e&&styles.loadingMore)},React.createElement("img",{src:KA.staticUrl("/images/throbber.gif")})))}})
var styles=StyleSheet.create({notificationWrapper:{fontSize:12,":hover":{backgroundColor:globalStyles.colors.gray95,color:globalStyles.colors.default.domain3}},empty:{alignItems:"center",display:"flex",height:150,justifyContent:"center"},loadingMore:{height:18}})
module.exports=NotificationsList
});
KAdefine("javascript/page-package/notifications-switch.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var _require2=require("../shared-package/i18n.js")
var $_=_require2.$_
var globalStyles=require("../shared-styles-package/global-styles.js")
var Icon=require("../shared-styles-package/icon.jsx")
var NotificationsSwitch=React.createClass({displayName:"NotificationsSwitch",propTypes:{buttonStyles:React.PropTypes.arrayOf(React.PropTypes.any),direction:React.PropTypes.oneOf(["left","right"]).isRequired,notificationCount:React.PropTypes.number.isRequired,onClick:React.PropTypes.func},handleClick:function(e){var t=this.props.onClick
if(t){e.preventDefault()
t()}},render:function(){var e=this.props
var t=e.buttonStyles
var r=e.direction
var s=e.notificationCount
return React.createElement("a",{href:"#",onClick:this.handleClick,className:css.apply(undefined,[styles.switch].concat(t)),"data-test-id":"header-notifications-switch"},r==="left"&&React.createElement("div",{className:css(styles.switchArrow,styles.switchArrowLeft)},React.createElement(Icon,{type:"angleBracketLeft",size:15,color:globalStyles.colors.gray17})),React.createElement("div",{className:css(styles.switchText)},$_(null,"Notifications"),React.createElement("span",{className:css(styles.dot)},"·"),s),r==="right"&&React.createElement("div",{className:css(styles.switchArrow,styles.switchArrowRight)},React.createElement(Icon,{type:"angleBracketLeft",size:15,color:globalStyles.colors.gray17})))}})
var styles=StyleSheet.create({dot:{padding:"0 7px"},"switch":{alignItems:"center",borderBottom:"1px solid rgba(0, 0, 0, 0.1)",boxSizing:"border-box",color:"inherit",display:"flex",justifyContent:"space-around",padding:16,textDecoration:"none"},switchText:babelHelpers._extends({},globalStyles.typography.bodyXsmallBold,{flexGrow:1}),switchArrow:{alignItems:"center",display:"flex",justifyContent:"center"},switchArrowLeft:{marginRight:24},switchArrowRight:{transform:"scaleX(-1)"}})
module.exports=NotificationsSwitch
});
KAdefine("javascript/page-package/user-dropdown.jsx", function(require, module, exports) {
var _wrapper
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var bigBingo=require("../shared-package/bigbingo.js")
var bigBingoLinks=require("./big-bingo-links.js")
var DropdownButton=require("./dropdown-button.jsx")
var globalStyles=require("../shared-styles-package/global-styles.js")
var HeaderDropdown=require("./header-dropdown.jsx")
var i18n=require("../shared-package/i18n.js")
var mediaQueries=require("../shared-styles-package/media-queries.js")
var NotificationsList=require("./notifications-list.jsx")
var NotificationsSwitch=require("./notifications-switch.jsx")
var UserSettings=require("./user-settings.jsx")
var UserDropdown=React.createClass({displayName:"UserDropdown",propTypes:{buttonStyles:React.PropTypes.arrayOf(React.PropTypes.any),currentUrl:React.PropTypes.string,loading:React.PropTypes.bool.isRequired,newNotificationCount:React.PropTypes.number.isRequired,notifications:NotificationsList.propTypes.notifications,onDropdownToggle:React.PropTypes.func,onOpenNotifications:React.PropTypes.func,onScrollToBottom:React.PropTypes.func,profileData:React.PropTypes.shape(UserSettings.propTypes),showDropdown:React.PropTypes.bool,showNotifications:React.PropTypes.bool,signUpUrl:React.PropTypes.string,teaser:React.PropTypes.string},getDefaultProps:function(){return{showDropdown:false,onDropdownToggle:function(){},onOpenNotifications:function(){},onScrollToBottom:function(){},buttonStyles:[]}},getInitialState:function(){return{showNotifications:!!this.props.showNotifications}},componentDidMount:function(){if(this.props.showNotifications){this.props.onOpenNotifications()}},componentDidUpdate:function(e,o){if(!o.showNotifications&&this.state.showNotifications){this.props.onOpenNotifications()
bigBingo.markConversion("global_nav_open_notifications",{view:"desktop"})}},handleScroll:function(e){if(!this.state.showNotifications){return}var o=e.target
var t=o.scrollHeight
var i=o.clientHeight
var r=o.scrollTop
var s=2
if(r+i>=t-s){this.props.onScrollToBottom()
e.preventDefault()}},handleToggleClick:function(){this.setState({showNotifications:!this.state.showNotifications})},render:function(){var e=this.state.showNotifications
var o=this.props
var t=o.profileData
var i=o.newNotificationCount
var r=i>9?"9+":i
return React.createElement("div",{className:css(styles.wrapper)},React.createElement(DropdownButton,{buttonStyles:this.props.buttonStyles,onClick:this.props.onDropdownToggle},React.createElement("span",{className:css(styles.trigger),"data-test-id":"header-profile-button"},t.isPhantom?i18n._("New user / Sign up"):t.nickName,i>0&&React.createElement("div",{"aria-label":i18n.ngettext("1 new notification","%(num)s new notifications",i),className:css(styles.notificationsBadge)},r))),React.createElement(HeaderDropdown,{visible:this.props.showDropdown,hasBorder:false,dropdownStyles:[styles.dropdown]},React.createElement(NotificationsSwitch,{direction:e?"left":"right",onClick:this.handleToggleClick,notificationCount:i,buttonStyles:[styles.notificationsSwitch]}),React.createElement("div",{className:css(e&&styles.scrollDropdown),onScroll:this.handleScroll},e?React.createElement(NotificationsList,{notifications:this.props.notifications,loading:this.props.loading}):React.createElement(UserSettings,babelHelpers._extends({signUpUrl:this.props.signUpUrl},this.props.profileData,{profileLinkAttributes:bigBingoLinks.handlersWithExtras([{id:"global_nav_visit_profile",extra:{view:"desktop"}}])})))))}})
var BADGE_WIDTH=18
var styles=StyleSheet.create({wrapper:(_wrapper={},_wrapper.display="inline-block",_wrapper.fontFamily=globalStyles.fonts.regular,_wrapper.height="100%",_wrapper.position="relative",_wrapper[mediaQueries.smOrSmaller]={display:"none"},_wrapper),trigger:babelHelpers._extends({},globalStyles.typography.bodyXsmallBold,{maxWidth:205,position:"relative",textOverflow:"ellipsis",whiteSpace:"nowrap"}),notificationsBadge:babelHelpers._extends({},globalStyles.typography.labelSmall,{backgroundColor:globalStyles.colors.kaGreen,borderRadius:BADGE_WIDTH/2,boxSizing:"border-box",color:globalStyles.colors.white,height:BADGE_WIDTH,lineHeight:""+BADGE_WIDTH+"px",paddingTop:1,position:"absolute",right:-10,textAlign:"center",top:-7,width:BADGE_WIDTH}),caret:{marginLeft:5},dot:{padding:"0 7px"},dropdown:{backgroundColor:globalStyles.colors.gray98,border:"1px solid rgba(0, 0, 0, 0.1)",borderRadius:3,overflow:"hidden",right:-8,width:300},scrollDropdown:{height:220,overflowY:"scroll"},notificationsSwitch:{backgroundColor:globalStyles.colors.white,height:45,":hover":{backgroundColor:globalStyles.colors.gray95}}})
module.exports=UserDropdown
});
KAdefine("javascript/page-package/user-settings.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var _require2=require("../shared-package/i18n.js")
var $_=_require2.$_
var absoluteLinks=require("../shared-package/absolute-links.js")
var FacebookUtil=require("../shared-package/facebookutil.js")
var globalStyles=require("../shared-styles-package/global-styles.js")
var urls=require("./urls.js")
var UserSettings=React.createClass({displayName:"UserSettings",propTypes:{currentUrl:React.PropTypes.string,hasChildren:React.PropTypes.bool,hasStudents:React.PropTypes.bool,isPhantom:React.PropTypes.bool,profileLinkAttributes:React.PropTypes.objectOf(React.PropTypes.any),profileUrl:React.PropTypes.string.isRequired,showCoachingLinks:React.PropTypes.bool,showLearningHome:React.PropTypes.bool,showSettings:React.PropTypes.bool,showSignUpToSave:React.PropTypes.bool,signUpUrl:React.PropTypes.string},getInitialState:function(){return{logoutUrl:""}},componentDidMount:function(){this.setState({logoutUrl:urls.getLogoutURL(this.props.currentUrl)})},handleLogoutClick:function(e){e.preventDefault()
var t=urls.getLogoutURL(this.props.currentUrl)
FacebookUtil.logout(function(){window.location=t})},render:function(){var e=this.props
var t=e.showSettings
var s=e.showSignUpToSave
var r=e.showLearningHome
var a=e.showCoachingLinks
var l=e.hasStudents
var o=e.hasChildren
var i=e.signUpUrl
var n=e.profileUrl
var c=absoluteLinks.safeLinkTo("https://khanacademy.zendesk.com")
return React.createElement("div",{role:"menu",className:css(styles.menu),"data-test-id":"header-user-settings"},s&&React.createElement("a",{role:"menuitem",href:i,className:css(styles.item,styles.itemFirst,styles.signIn)},$_(null,"Sign in to claim your points")),React.createElement("a",babelHelpers._extends({},this.props.profileLinkAttributes,{role:"menuitem",href:n,className:css(styles.item,!s&&styles.itemFirst),"data-test-id":"user-settings-profile-link"}),$_(null,"Profile")),r&&React.createElement("a",{role:"menuitem",href:"/?learn=1",className:css(styles.item)},$_(null,"Learning home")),a&&React.createElement("a",{role:"menuitem",href:"/coach/dashboard",className:css(styles.item)},l?$_(null,"Your students"):$_(null,"Add students")),a&&React.createElement("a",{role:"menuitem",href:"/parent",className:css(styles.item)},o?$_(null,"Your children"):$_(null,"Add children")),t&&React.createElement("a",{role:"menuitem",href:"/settings/account",className:css(styles.item)},$_(null,"Settings")),React.createElement("a",{role:"menuitem",href:c,className:css(styles.item)},$_(null,"Help")),React.createElement("a",{role:"menuitem",className:css(styles.item,styles.itemLast),onClick:this.handleLogoutClick,href:this.state.logoutUrl,"data-test-id":"user-settings-logout-link"},$_(null,"Log out")))}})
var styles=StyleSheet.create({menu:babelHelpers._extends({},globalStyles.typography.bodyXsmallBold),item:{backgroundColor:globalStyles.colors.gray98,color:globalStyles.colors.gray17,display:"block",padding:"8px 16px",textDecoration:"none",":hover":{backgroundColor:globalStyles.colors.gray95,color:globalStyles.colors.default.domain3}},itemFirst:{paddingTop:16},itemLast:{paddingBottom:16},signIn:{color:globalStyles.colors.kaGreen}})
module.exports=UserSettings
});
KAdefine("javascript/page-package/header-search-box.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var i18n=require("../shared-package/i18n.js")
var KA=require("../shared-package/ka.js")
var styleConstants=require("../shared-styles-package/constants.js")
var Icon=require("../shared-styles-package/fontawesome-icon.jsx")
var SearchIcon=React.createClass({displayName:"SearchIcon",render:function(){return React.createElement("span",{className:css(styles.searchIcon)},React.createElement(Icon,{name:"search"}))}})
var HeaderSearchBox=React.createClass({displayName:"HeaderSearchBox",propTypes:{onFocus:React.PropTypes.func},getDefaultProps:function(){return{onFocus:function(){}}},getInitialState:function(){return{shouldRenderRealSearchBox:false,SearchBox:null,suggestionSource:null,initiallyFocused:null,initialQuery:null,initialSelectionStart:null,initialSelectionEnd:null}},handleLoadSearch:function(){var e=this
if(this.loading){return}this.loading=true
require.async(["../typeahead-package/search-box.jsx","../typeahead-package/suggestion-source.js","package!shared.css","package!typeahead.css"],function(a,t){var s=e.refs.input
e.setState({shouldRenderRealSearchBox:true,SearchBox:a,suggestionSource:t,initialQuery:s.value,initiallyFocused:s===document.activeElement,initialSelectionStart:s.selectionStart,initialSelectionEnd:s.selectionEnd})})},handleFocus:function(){this.props.onFocus()
this.handleLoadSearch()},render:function(){var e=i18n._("Search for subjects, skills, and videos")
if(this.state.shouldRenderRealSearchBox){var a={searchSuggestion:this.state.suggestionSource}
return React.createElement(this.state.SearchBox,{placeholder:e,dataSources:a,initiallyFocused:this.state.initiallyFocused,initialQuery:this.state.initialQuery,initialSelectionStart:this.state.initialSelectionStart,initialSelectionEnd:this.state.initialSelectionEnd,showGoogleResults:!KA.isZeroRated,extraFormArgs:{referer:window.location.pathname},onFocus:this.props.onFocus})}return React.createElement("form",{className:css(styles.searchForm),action:"/search"},React.createElement("div",{className:css(styles.inputWrapper)},React.createElement("input",{type:"text",ref:"input",name:"page_search_query",className:css(styles.searchInput),autoComplete:"off",placeholder:e,"aria-label":e,"data-test-id":"navbar-search-box",onFocus:this.handleFocus,onMouseOver:this.handleLoadSearch,onKeyDown:this.handleLoadSearch,onTouchStart:this.handleLoadSearch}),React.createElement(SearchIcon,null)))}})
var styles=StyleSheet.create({searchIcon:{color:styleConstants.grayLight,fontSize:16,left:25,position:"absolute",top:11},searchInput:{backgroundColor:"#fafafa",border:"1px solid #ddd",borderRadius:2,boxSizing:"border-box",color:styleConstants.lightTextColor,fontFamily:styleConstants.baseFontFamily,fontSize:14,height:29,marginTop:8,outline:"none",padding:"1px 0 0 30px",width:"100%",":focus":{boxShadow:"0 0 5px 1px rgba(115, 152, 44, .5)"}},inputWrapper:{padding:"0 15px"},searchForm:{display:"block",position:"relative",zIndex:styleConstants.zindexDropdown}})
module.exports=HeaderSearchBox
});
KAdefine("javascript/page-package/bibliotron-header-search-box.jsx", function(require, module, exports) {
var React=require("react")
var i18n=require("../shared-package/i18n.js")
var KA=require("../shared-package/ka.js")
var _require=require("aphrodite")
var css=_require.css
var BibliotronHeaderSearchBox=React.createClass({displayName:"BibliotronHeaderSearchBox",propTypes:{SearchBox:React.PropTypes.any.isRequired,onEscape:React.PropTypes.func.isRequired,searchFormStyles:React.PropTypes.arrayOf(React.PropTypes.objectOf(React.PropTypes.any)),searchInputStyles:React.PropTypes.arrayOf(React.PropTypes.objectOf(React.PropTypes.any)),spacer:React.PropTypes.node.isRequired,suggestionSource:React.PropTypes.shape({get:React.PropTypes.func.isRequired}).isRequired},render:function(){var e=this.props
var r=e.onEscape
var a=e.SearchBox
var s=e.searchInputStyles
var o=e.searchFormStyles
var c=e.spacer
var t=e.suggestionSource
var p=i18n._("Search for subjects, skills, and videos")
var i={searchSuggestion:t}
return React.createElement(a,{isBibliotron:true,inputClassName:css.apply(undefined,s),formClassName:css.apply(undefined,o),placeholder:p,dataSources:i,initiallyFocused:true,showGoogleResults:!KA.isZeroRated,extraFormArgs:{referer:window.location.pathname},spacer:c,onEscape:r})}})
module.exports=BibliotronHeaderSearchBox
});
KAdefine("javascript/page-package/menu-aim.jsx", function(require, module, exports) {
var React=require("react")
var noop=function(){}
var MOUSE_LOCS_TRACKED=3
var DELAY=300
var MenuAim=React.createClass({displayName:"MenuAim",propTypes:{children:React.PropTypes.node,onActivate:React.PropTypes.func,onDeactivate:React.PropTypes.func,onEnter:React.PropTypes.func,onExit:React.PropTypes.func,rowSelector:React.PropTypes.string,submenuDirection:React.PropTypes.oneOf(["left","right","above","below"]),submenuSelector:React.PropTypes.string,tolerance:React.PropTypes.number},getDefaultProps:function(){return{rowSelector:"* > li",submenuSelector:null,submenuDirection:"right",tolerance:75,onEnter:noop,onExit:noop,onActivate:noop,onDeactivate:noop}},componentDidMount:function(){this.bindMenuListeners()
document.addEventListener("mousemove",this.onDocumentMousemove)
this.activeRow=null
this.mouseLocs=[]
this.lastDelayLoc=null
this.timeoutId=null},componentDidUpdate:function(){this.bindMenuListeners()},componentWillUnmount:function(){document.removeEventListener("mousemove",this.onDocumentMousemove)},bindMenuListeners:function(){var e=this
this.refs.menu.addEventListener("mouseleave",this.onMenuMouseleave)
var t=this.refs.menu.querySelectorAll(this.props.rowSelector)
var o=function(){if(i){if(r>=n.length)return"break"
s=n[r++]}else{r=n.next()
if(r.done)return"break"
s=r.value}var t=s
t.addEventListener("mouseenter",function(){return e.onRowMouseenter(t)})
t.addEventListener("mouseleave",function(){return e.onRowMouseleave(t)})
t.addEventListener("click",function(){return e.onRowClick(t)})}
for(var n=Array.from(t),i=Array.isArray(n),r=0,n=i?n:n[Symbol.iterator]();;){var s
var a=o()
if(a==="break")break}},onDocumentMousemove:function(e){this.mouseLocs.push({x:e.pageX,y:e.pageY})
if(this.mouseLocs.length>MOUSE_LOCS_TRACKED){this.mouseLocs.shift()}},onMenuMouseleave:function(){if(this.timeoutId){clearTimeout(this.timeoutId)}},onRowMouseenter:function(e){if(this.timeoutId){clearTimeout(this.timeoutId)}this.props.onEnter(e)
this.possiblyActivate(e)},onRowMouseleave:function(e){this.props.onExit(e)},onRowClick:function(e){this.activate(e)},activate:function(e){if(e===this.activeRow){return}if(this.activeRow){this.props.onDeactivate(this.activeRow)}this.props.onActivate(e)
this.activeRow=e},possiblyActivate:function(e){var t=this
var o=this.activationDelay()
if(o){this.timeoutId=setTimeout(function(){t.possiblyActivate(e)},o)}else{this.activate(e)}},activationDelay:function(){if(!this.activeRow){return 0}var e=this.activeRow
var t=e.matches||e.matchesSelector
var o=e.matches&&e.matches(this.props.submenuSelector)||e.matchesSelector&&e.matchesSelector(this.props.submenuSelector)||!t
if(!o){return 0}var n=this.refs.menu
var i=n.getBoundingClientRect()
var r=this.mouseLocs[this.mouseLocs.length-1]
var s=this.mouseLocs[0]||r
var a={x:i.left,y:i.top-this.props.tolerance}
var u={x:i.left+i.width,y:a.y}
var c={x:i.left,y:i.top+i.height+this.props.tolerance}
var l={x:u.x,y:c.y}
if(!r){return 0}if(s.x<i.left||s.x>l.x||s.y<i.top||s.y>l.y){return 0}if(this.lastDelayLoc&&r.x===this.lastDelayLoc.x&&r.y===this.lastDelayLoc.y){return 0}function v(e,t){return(t.y-e.y)/(t.x-e.x)}var h=undefined
var p=undefined
if(this.props.submenuDirection==="left"){h=c
p=a}else if(this.props.submenuDirection==="below"){h=l
p=c}else if(this.props.submenuDirection==="above"){h=a
p=u}else if(this.props.submenuDirection==="right"){h=u
p=l}var m=v(r,h)
var f=v(r,p)
var y=v(s,h)
var d=v(s,p)
if(m<y&&f>d){this.lastDelayLoc=r
return DELAY}else{this.lastDelayLoc=null
return 0}},render:function(){var e=React.Children.only(this.props.children)
var t=React.cloneElement(e,babelHelpers._extends({},e.props,{ref:"menu"}))
return t}})
module.exports=MenuAim
});
KAdefine("javascript/page-package/domain-utils.js", function(require, module, exports) {
var React=require("react")
var i18n=require("../shared-package/i18n.js")
var domainObjectPropType=React.PropTypes.shape({translatedTitle:React.PropTypes.string.isRequired,identifier:React.PropTypes.string.isRequired,href:React.PropTypes.string,numUntranslatedChildren:React.PropTypes.number.isRequired,children:React.PropTypes.arrayOf(React.PropTypes.shape({identifier:React.PropTypes.string.isRequired,translatedTitle:React.PropTypes.string.isRequired,translatedDescription:React.PropTypes.string,href:React.PropTypes.string.isRequired,missionSlug:React.PropTypes.string,gradeMenuTitle:React.PropTypes.string}).isRequired)})
var domainTransformers={math:function(e,r){var i=e.childrenByGradeLevel
return["grades","secondary","fundamentals"].map(function(e){var t=i[e]
if(t){var n=t.children
if(e==="secondary"&&r){n=n.concat([{identifier:"all-of-math",translatedTitle:i18n._("All of math"),href:"/mission/math"}])}if(e==="grades"){n=n.map(function(e){return babelHelpers._extends({},e,{translatedTitle:e.gradeMenuTitle})})}return{identifier:e,title:t.header,children:n}}}).filter(function(e){return e})},humanities:function(e){if(e.otherHumanitiesChildren&&e.artHistoryChildren){return[{identifier:"other-humanities",title:i18n._("Humanities"),children:e.otherHumanitiesChildren},{identifier:"art-history",title:i18n._("Art history"),children:e.artHistoryChildren}]}else{return domainTransformers["default"](e)}},"partner-content":function(e){return[{identifier:"museum",title:i18n._("Museums"),children:e.museumChildren},{identifier:"other-partner-content",title:i18n._("Partners"),children:e.otherPartnerContentChildren}]},"test-prep":function(e){return[{identifier:"sat-practice",title:i18n._("Official SAT Practice"),children:e.satChildren},{identifier:"other-test-prep-content",title:i18n._("Other tests"),children:e.otherTestPrepChildren}]},"default":function(e){return[{identifier:e.identifier,title:i18n._("Subjects"),children:e.children}]}}
var transformDomainIntoSubgroups=function(e,r){if(e.identifier in domainTransformers){return domainTransformers[e.identifier](e,r)}else{return domainTransformers["default"](e,r)}}
module.exports={transformDomainIntoSubgroups:transformDomainIntoSubgroups,domainObjectPropType:domainObjectPropType}
});
KAdefine("javascript/page-package/learn-menu.jsx", function(require, module, exports) {
var _wrapper
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var i18n=require("../shared-package/i18n.js")
var mediaQueries=require("../shared-styles-package/media-queries.js")
var styleConstants=require("../shared-styles-package/constants.js")
var Icon=require("../shared-styles-package/fontawesome-icon.jsx")
var bigBingoLinks=require("./big-bingo-links.js")
var _require2=require("./domain-utils.js")
var domainObjectPropType=_require2.domainObjectPropType
var transformDomainIntoSubgroups=_require2.transformDomainIntoSubgroups
var DownCaret=require("./down-caret.jsx")
var DropdownButton=require("./dropdown-button.jsx")
var HeaderDropdown=require("./header-dropdown.jsx")
var MenuAim=require("./menu-aim.jsx")
var $_=i18n.$_
var ChevronRight=React.createClass({displayName:"ChevronRight",render:function(){return React.createElement("span",{className:css(styles.chevron)},React.createElement(Icon,{name:"chevronRight"}))}})
var NavMenuSection=React.createClass({displayName:"NavMenuSection",propTypes:{active:React.PropTypes.bool,domain:domainObjectPropType,englishHomepageUrl:React.PropTypes.string,missionPercentages:React.PropTypes.objectOf(React.PropTypes.number),onLinkHover:React.PropTypes.func,showMathMission:React.PropTypes.bool,showWelcome:React.PropTypes.bool},getDefaultProps:function(){return{onLinkHover:function(){}}},renderSubgroup:function(e,t){var s=domainToBackgroundHoverStyles[t.identifier]
var o=t.identifier==="math"
var n=e.identifier==="sat-practice"
var r=e.identifier==="computing"
var a=e.identifier==="secondary"
var i=css(!o&&styles.menuListElement,a&&styles.menuListElementMathSecondary,(n||r)&&styles.menuListElementTwoColumns)
var l=this.props.missionPercentages
var c=e.children&&e.children.map(function(e){var o=e.missionSlug&&[React.createElement("span",{className:css(styles.missionPercentageSpacer),key:"mission-percentage-spacer"}),React.createElement("span",{className:css(styles.missionPercentage),key:"mission-percentage"},l&&l[e.missionSlug]!=null&&"("+l[e.missionSlug]+"%)")]
return React.createElement("li",{key:e.identifier,className:i},React.createElement("a",babelHelpers._extends({className:css(styles.link,styles.menuLink,s,(n||r)&&styles.menuLinkBigTitle)},bigBingoLinks.handlersWithExtras([{id:"global_nav_choose_subject",extra:{domain:t.identifier,subject:e.identifier,view:"desktop"}}]),{href:e.href}),React.createElement("span",null,e.translatedTitle,o),e.translatedDescription&&React.createElement("p",{className:css(styles.menuDescription)},e.translatedDescription)))})
var p={"art-history":styles.subjectWrapperOtherCategories,"other-partner-content":styles.subjectWrapperOtherCategories,"other-test-prep-content":styles.subjectWrapperOtherCategories,grades:styles.mathGradeSection,fundamentals:styles.mathGradeSection,secondary:styles.mathSecondarySection}
var m=css(styles.subjectWrapper,p[e.identifier])
return React.createElement("div",{key:e.identifier,className:m},React.createElement("div",{className:css(styles.subjectHeader)},React.createElement("strong",null,e.title)),React.createElement("ul",null,c,React.createElement("span",{className:css(styles.clearfix)})))},render:function(){var e=this
var t=this.props.domain
var s=t&&!!t.children.length
if(!s&&this.props.showWelcome){return null}var o=domainToBackgroundHoverStyles[t.identifier]
var n=transformDomainIntoSubgroups(t,this.props.showMathMission)
var r=n.map(function(s){return e.renderSubgroup(s,t)})
var a=css(styles.link,styles.domainLink,s&&domainToBorderLeftStyles[t.identifier],this.props.active&&styles.domainLinkActive)
var i=css(styles.submenuWrapper,this.props.active&&styles.submenuActive,domainToBackgroundStyles[t.identifier],this.props.showWelcome&&styles.submenuWrapperWelcome)
var l=i18n.ngettext("Know English? Explore %(num)s more subject on our English site","Know English? Explore %(num)s more subjects on our English site",t.numUntranslatedChildren)
var c=t.numUntranslatedChildren>0&&React.createElement("a",{href:this.props.englishHomepageUrl,className:css(styles.link,styles.menuLink,styles.exploreEnglishLink,o)},l)
return React.createElement("li",{"data-has-submenu":s,"data-domain-name":t.identifier,className:css(styles.domainLinkAndDropdownWrapper)},React.createElement("a",{"data-test-id":""+t.identifier+"-topic-menu-link",className:a,href:s?"javascript: void 0":t.href,onMouseOver:this.props.onLinkHover,onClick:this.props.onLinkHover,role:"menuitem"},t.translatedTitle,s&&React.createElement(ChevronRight,null)),s&&React.createElement("div",{"data-test-id":""+t.identifier+"-topic-menu",className:i,role:"menu",key:t.identifier},React.createElement("div",{className:css(styles.submenuTitle)},t.href?React.createElement("a",babelHelpers._extends({href:t.href,className:css(styles.link,styles.submenuTitleLink,o)},bigBingoLinks.handlersWithExtras([{id:"global_nav_choose_domain",extra:{domain:t.identifier,view:"desktop"}}])),t.translatedTitle):t.translatedTitle),r,c))}})
var LearnMenu=React.createClass({displayName:"LearnMenu",propTypes:{buttonStyles:React.PropTypes.arrayOf(React.PropTypes.any),domains:React.PropTypes.arrayOf(domainObjectPropType).isRequired,englishHomepageUrl:React.PropTypes.string,missionPercentages:NavMenuSection.propTypes.missionPercentages,onDropdownToggle:React.PropTypes.func,shouldLinkToEnglishHomepage:React.PropTypes.bool,showDropdown:React.PropTypes.bool,showMathMission:React.PropTypes.bool,showWelcome:React.PropTypes.bool,titleInfo:React.PropTypes.shape({isPartnerContent:React.PropTypes.bool,translatedTitle:React.PropTypes.string,domain:React.PropTypes.string}),transparent:React.PropTypes.bool},getDefaultProps:function(){return{showMathMission:false,onDropdownToggle:function(){},showDropdown:false,buttonStyles:[]}},getInitialState:function(){return{activeDomain:"math"}},handleMenuRowActivate:function(e){var t=e.getAttribute("data-domain-name")
var s=e.getAttribute("data-has-submenu")
if(t&&s==="true"){this.setState({activeDomain:t})}},renderTitle:function(){if(this.props.titleInfo){var e=React.createElement("span",{className:css(domainToColorStyles[this.props.titleInfo.domain])},this.props.titleInfo.translatedTitle)
if(this.props.titleInfo.isPartnerContent){return React.createElement("span",null,$_(null,"Partner:")," ",e)}else{return React.createElement("span",null,$_(null,"Subject:")," ",e)}}else{return $_(null,"Subjects")}},render:function(){var e=this
var t=React.createElement("ul",{"data-test-id":"topic-browser-menu",className:css(styles.learnMenuList)},!this.props.showWelcome&&React.createElement("li",{className:css(styles.domainLinkAndDropdownWrapper)},React.createElement("a",{href:"/",className:css(styles.link,styles.domainLink),role:"menuitem"},$_(null,"Home"))),!this.props.showWelcome&&React.createElement("li",{className:css(styles.domainListDivider)}),this.props.domains.map(function(t){return React.createElement(NavMenuSection,{domain:t,missionPercentages:e.props.missionPercentages,key:t.identifier,showMathMission:e.props.showMathMission,active:e.state.activeDomain===t.identifier,englishHomepageUrl:e.props.englishHomepageUrl,showWelcome:e.props.showWelcome})}),!this.props.showWelcome&&React.createElement("li",{className:css(styles.domainListDivider)}),!this.props.showWelcome&&React.createElement("li",{className:css(styles.domainLinkAndDropdownWrapper)},this.props.shouldLinkToEnglishHomepage?React.createElement("a",{href:this.props.englishHomepageUrl,className:css(styles.link,styles.domainLink),role:"menuitem"},$_(null,"Browse all English subjects")):React.createElement("a",{href:"/library",className:css(styles.link,styles.domainLink),role:"menuitem"},$_(null,"Browse all"))))
return React.createElement("div",{className:css(styles.wrapper)},React.createElement(DropdownButton,{onClick:this.props.onDropdownToggle,buttonStyles:this.props.buttonStyles},React.createElement("span",{"data-learn-menu-trigger":true,"data-test-id":"learn-menu",className:css(styles.titleWrap,this.props.transparent&&styles.transparent)},this.renderTitle()),React.createElement("span",{className:css(styles.downCaret)},React.createElement(DownCaret,{transparent:this.props.transparent}))),React.createElement("div",{className:css(styles.stretchyBackground,this.props.showDropdown&&styles.showStrechyBackground,this.props.showWelcome&&styles.stretchyBackgroundWelcome)},React.createElement("div",{className:css(styles.stretchyDomainBackground,domainToBackgroundStyles[this.state.activeDomain])})),React.createElement(HeaderDropdown,{visible:this.props.showDropdown,hasBorder:false},React.createElement(MenuAim,{submenuSelector:"[data-has-submenu=true]",onActivate:this.handleMenuRowActivate},t)))}})
var learnMenuHeight=489
var welcomeLearnMenuHeight=440
var styles=StyleSheet.create({wrapper:(_wrapper={},_wrapper.display="inline-block",_wrapper.height="100%",_wrapper[mediaQueries.smOrSmaller]={display:"none"},_wrapper),link:{textDecoration:"none"},clearfix:{clear:"both",display:"table"},titleWrap:{color:styleConstants.textColor,maxWidth:150,overflow:"hidden",textOverflow:"ellipsis",transition:"color 0.3s",whiteSpace:"nowrap"},menuListElement:{"float":"left",width:"32%",":nth-child(3n+1)":{clear:"both"}},menuListElementMathSecondary:{"float":"left",width:"50%",":nth-child(2n+1)":{clear:"both"}},menuListElementTwoColumns:{marginRight:20,width:"45%"},mathGradeSection:{"float":"left",width:"30%"},mathSecondarySection:{"float":"right",width:"65%"},menuLink:{color:styleConstants.white,display:"block",fontFamily:styleConstants.baseFontFamily,fontSize:13,lineHeight:1.3,padding:"5px 8px",whiteSpace:"normal",width:"auto"},menuLinkBigTitle:{fontSize:15},menuDescription:{fontSize:12,marginBottom:22,marginTop:10,opacity:.9},subjectWrapper:{marginTop:15},subjectWrapperOtherCategories:{marginTop:27},subjectHeader:{color:styleConstants.white,fontSize:13,margin:"4px 8px",opacity:.5,textTransform:"uppercase"},submenuTitle:{borderBottom:"1px solid #fff",color:styleConstants.white,fontSize:24,marginLeft:8,padding:"17px 0 7px"},submenuTitleLink:{color:styleConstants.white,marginLeft:-5,padding:"0 5px"},submenuWrapper:{bottom:"auto",boxSizing:"border-box",display:"none",height:learnMenuHeight,left:236,lineHeight:"18px",padding:"15px 10px 1px",position:"absolute",right:"auto",top:0,width:570,zIndex:styleConstants.zindexDropdown},submenuWrapperWelcome:{height:welcomeLearnMenuHeight,overflowY:"auto"},submenuActive:{display:"block"},domainLink:{borderLeft:"5px solid #ddd",color:styleConstants.textColor,cursor:"pointer",display:"block",fontSize:14,lineHeight:"18px",padding:"9px 13px",position:"relative",width:210,":hover":{backgroundColor:styleConstants.whiteDark,fontWeight:"bold"}},domainLinkActive:{backgroundColor:styleConstants.graySuperLight,fontWeight:"bold",":hover":{backgroundColor:styleConstants.graySuperLight}},domainLinkAndDropdownWrapper:{border:"1px solid transparent",borderLeft:0,borderRight:0},domainListDivider:{borderTop:"1px solid #ddd"},learnMenuList:{backgroundColor:styleConstants.white,paddingBottom:3,paddingTop:28,position:"relative",zIndex:styleConstants.zindexDropdown},downCaret:{paddingLeft:7},chevron:{color:styleConstants.grayLight,fontSize:10,lineHeight:"36px",position:"absolute",right:10,top:0,width:"1.25em"},missionPercentageSpacer:{display:"inline-block",width:6},missionPercentage:{opacity:.5,display:"inline-block",width:38},transparent:{color:styleConstants.white},stretchyBackground:{backgroundColor:"white",display:"none",height:learnMenuHeight,left:0,position:"absolute",right:0},stretchyBackgroundWelcome:{height:welcomeLearnMenuHeight},showStrechyBackground:{display:"block"},stretchyDomainBackground:{height:"100%",left:"50%",position:"absolute",right:0},exploreEnglishLink:{position:"absolute",bottom:12}})
var domainToBackgroundHoverStyles=StyleSheet.create({math:{":hover":{backgroundColor:styleConstants.mathSubjectColor}},science:{":hover":{backgroundColor:styleConstants.scienceSubjectColor}},"economics-finance-domain":{":hover":{backgroundColor:styleConstants.economicsSubjectColor}},humanities:{":hover":{backgroundColor:styleConstants.humanitiesSubjectColor}},computing:{":hover":{backgroundColor:styleConstants.csSubjectColor}},"test-prep":{":hover":{backgroundColor:styleConstants.testPrepSubjectColor}},"partner-content":{":hover":{backgroundColor:styleConstants.partnerContentSubjectColor}}})
var domainToBackgroundStyles=StyleSheet.create({math:{backgroundColor:styleConstants.mathDomainColor},science:{backgroundColor:styleConstants.scienceDomainColor},"economics-finance-domain":{backgroundColor:styleConstants.economicsDomainColor},humanities:{backgroundColor:styleConstants.humanitiesDomainColor},computing:{backgroundColor:styleConstants.csDomainColor},"test-prep":{backgroundColor:styleConstants.testPrepDomainColor},"partner-content":{backgroundColor:styleConstants.partnerContentDomainColor}})
var domainToBorderLeftStyles=StyleSheet.create({math:{borderLeftColor:styleConstants.mathDomainColor},science:{borderLeftColor:styleConstants.scienceDomainColor},"economics-finance-domain":{borderLeftColor:styleConstants.economicsDomainColor},humanities:{borderLeftColor:styleConstants.humanitiesDomainColor},computing:{borderLeftColor:styleConstants.csDomainColor},"test-prep":{borderLeftColor:styleConstants.testPrepDomainColor},"partner-content":{borderLeftColor:styleConstants.partnerContentDomainColor}})
var domainToColorStyles=StyleSheet.create({math:{color:styleConstants.mathSubjectColor},science:{color:styleConstants.scienceSubjectColor},"economics-finance-domain":{color:styleConstants.economicsSubjectColor},humanities:{color:styleConstants.humanitiesSubjectColor},computing:{color:styleConstants.csSubjectColor},"test-prep":{color:styleConstants.testPrepSubjectColor},"partner-content":{color:styleConstants.partnerContentSubjectColor}})
module.exports=LearnMenu
});
KAdefine("javascript/page-package/bibliotron-learn-menu.jsx", function(require, module, exports) {
var _wrapper
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var Icon=require("../shared-styles-package/icon.jsx")
var i18n=require("../shared-package/i18n.js")
var globalStyles=require("../shared-styles-package/global-styles.js")
var mediaQueries=require("../shared-styles-package/media-queries.js")
var bigBingoLinks=require("./big-bingo-links.js")
var _require2=require("./domain-utils.js")
var domainObjectPropType=_require2.domainObjectPropType
var DropdownButton=require("./dropdown-button.jsx")
var HeaderDropdown=require("./header-dropdown.jsx")
var $_=i18n.$_
var LearnMenuContent=React.createClass({displayName:"LearnMenuContent",propTypes:{domains:React.PropTypes.arrayOf(domainObjectPropType).isRequired},renderLink:function(e,r){return React.createElement("li",{key:r.identifier},React.createElement("a",babelHelpers._extends({href:r.href,className:css(linkStyles[e.identifier])},bigBingoLinks.handlersWithExtras([{id:"global_nav_choose_subject",extra:{domain:e.identifier,subject:r.identifier,view:"desktop"}}])),r.translatedTitle))},renderHeaderLink:function(e){if(e.href){return React.createElement("a",babelHelpers._extends({href:e.href,className:css(headerLinkStyles[e.identifier])},bigBingoLinks.handlersWithExtras([{id:"global_nav_choose_domain",extra:{domain:e.identifier,view:"desktop"}}])),e.translatedTitle)}else{return e.translatedTitle}},renderDomain:function(e,r){return React.createElement("li",{key:r,className:css(styles.domain)},React.createElement("header",{"data-test-learn-menu-domain":e.identifier,className:css(headerStyles[e.identifier])},this.renderHeaderLink(e)),React.createElement("ul",null,e.children.map(this.renderLink.bind(this,e))))},render:function(){var e=this.props.domains.length===7
return React.createElement("ul",{className:css(styles.domains,e&&styles.domainsFiveColumns),"data-test-id":"learn-menu"},this.props.domains.map(this.renderDomain))}})
var LearnMenu=React.createClass({displayName:"LearnMenu",propTypes:{buttonStyles:React.PropTypes.arrayOf(React.PropTypes.any),domains:LearnMenuContent.propTypes.domains,onDropdownToggle:React.PropTypes.func,showDropdown:React.PropTypes.bool,showWelcome:React.PropTypes.bool,transparent:React.PropTypes.bool},getDefaultProps:function(){return{onDropdownToggle:function(){},showDropdown:false,transparent:false,buttonStyles:[]}},getInitialState:function(){return{hover:false}},render:function(){var e=this
if(this.props.domains.length===0){return React.createElement("div",null)}var r=this.props.transparent?"rgba(255, 255, 255, 0.48)":globalStyles.colors.gray76
if(this.state.hover){r=globalStyles.colors.kaGreen}return React.createElement("div",{className:css(styles.wrapper)},React.createElement(DropdownButton,{onClick:this.props.onDropdownToggle,buttonStyles:this.props.buttonStyles,onMouseEnter:function(){return e.setState({hover:true})},onMouseLeave:function(){return e.setState({hover:false})}},React.createElement("span",{"data-learn-menu-trigger":true,"data-test-id":"learn-menu-button"},$_(null,"Subjects"),React.createElement("span",{className:css(styles.triangle)},React.createElement(Icon,{type:"dropdown",size:10,color:r})))),React.createElement(HeaderDropdown,{visible:this.props.showDropdown,hasBorder:false,dropdownStyles:[styles.dropdown,this.props.showWelcome&&styles.dropdownWelcome]},React.createElement(LearnMenuContent,{domains:this.props.domains})))}})
var welcomeLearnMenuHeight=440
var linkFontSize=15
var linkLineHeight=1.75
var gapBetweenStackedDomains=Math.floor(linkFontSize*linkLineHeight)
var styles=StyleSheet.create({wrapper:(_wrapper={},_wrapper.display="inline-block",_wrapper.height="100%",_wrapper[mediaQueries.smOrSmaller]={display:"none"},_wrapper),dropdown:{background:globalStyles.colors.gray98,borderBottom:"1px solid "+globalStyles.colors.gray85,borderTop:"1px solid "+globalStyles.colors.gray85,left:0,opacity:.99,width:"100%"},dropdownWelcome:{height:welcomeLearnMenuHeight,overflowY:"scroll"},domains:{boxSizing:"border-box",columnWidth:221,marginLeft:"auto",marginRight:"auto",maxWidth:1200,paddingLeft:20,paddingRight:20,paddingTop:32,paddingBottom:48-gapBetweenStackedDomains},domainsFiveColumns:{columnWidth:220},domain:{display:"inline-block",marginBottom:gapBetweenStackedDomains,width:"100%",wordWrap:"break-word"},triangle:{marginLeft:6,position:"relative",top:3}})
var linkStyles=globalStyles.makeDomainStylesForTemplate(function(e){return{color:globalStyles.colors[e].domain3,fontFamily:globalStyles.fonts.regular,fontSize:linkFontSize,lineHeight:linkLineHeight,textDecoration:"none",display:"inline-block",width:"100%",":hover":{textDecoration:"underline"}}})
var headerStyles=globalStyles.makeDomainStylesForTemplate(function(e){return{color:globalStyles.colors[e].domain3,fontFamily:globalStyles.fonts.bold,fontSize:linkFontSize,lineHeight:linkLineHeight}})
var headerLinkStyles=globalStyles.makeDomainStylesForTemplate(function(e){return{color:globalStyles.colors.gray25,textDecoration:"none",display:"inline-block",width:"100%",":hover":{color:globalStyles.colors[e].domain3}}})
module.exports=LearnMenu
});
KAdefine("javascript/page-package/responsive-nav-menu.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var AphroditeCSSTransitionGroup=require("../shared-styles-package/aphrodite-css-transition-group.jsx")
var FacebookUtil=require("../shared-package/facebookutil.js")
var Icon=require("../shared-styles-package/fontawesome-icon.jsx")
var KA=require("../shared-package/ka.js")
var a11yStyles=require("../shared-styles-package/a11y.js")
var bigBingo=require("../shared-package/bigbingo.js")
var bigBingoLinks=require("./big-bingo-links.js")
var styleConstants=require("../shared-styles-package/constants.js")
var urls=require("./urls.js")
var _require2=require("../shared-package/i18n.js")
var $_=_require2.$_
var _require3=require("./domain-utils.js")
var domainObjectPropType=_require3.domainObjectPropType
var transformDomainIntoSubgroups=_require3.transformDomainIntoSubgroups
var NavMenuSection=React.createClass({displayName:"NavMenuSection",propTypes:{domain:domainObjectPropType,hideNonSubmenuLinks:React.PropTypes.bool},getInitialState:function(){return{open:false}},handleSectionTitleClick:function(){var e=!this.state.open
if(e){bigBingo.markConversionsWithExtras([{id:"global_nav_choose_domain",extra:{domain:this.props.domain.identifier,view:"mobile"}}])}this.setState({open:e})},render:function(){var e=this.props.domain
var t=e&&e.children.length!==0
if(!t&&this.props.hideNonSubmenuLinks){return null}var n=transformDomainIntoSubgroups(e)
var a=n.map(function(t){var n=t.children
var a=n&&n.map(function(t){return React.createElement("li",{key:t.identifier},React.createElement("a",babelHelpers._extends({className:css(styles.navSectionSubgroupItem,styles.navSectionContentText),href:t.href},bigBingoLinks.handlersWithExtras([{id:"global_nav_choose_subject",extra:{domain:e.identifier,subject:t.identifier,view:"mobile"}}])),t.translatedTitle))})
return React.createElement("li",{key:t.identifier},React.createElement("div",{className:css(styles.navSectionSubgroupItem,styles.navSectionSubgroupTitle)},t.title),React.createElement("ul",null,a))})
var o=t?React.createElement("div",{className:css(styles.navSectionIcon,this.state.open&&styles.navSectionIconOpen)},React.createElement(Icon,{name:"angleRight",large:true})):null
var s=e.identifier
return React.createElement("li",{className:css(styles.navMenuSection)},React.createElement("a",{className:css(styles.navSectionTitle,t&&styles.flexSpreadChildren,t&&domainToColorStyles[s]),"data-test-id":""+s+"-mobile-nav-link",href:t?"javascript: void 0":e.href,onClick:this.handleSectionTitleClick},e.translatedTitle,o),React.createElement(AphroditeCSSTransitionGroup,{transitionStyle:{enter:styles.navSectionClosed,enterActive:styles.navSectionOpen,leave:styles.navSectionOpen,leaveActive:styles.navSectionClosed},transitionEnterTimeout:250,transitionLeaveTimeout:250},t&&this.state.open&&React.createElement("ul",{key:s,className:css(styles.navSectionContents,domainToBackgroundStyles[s]),"data-test-id":""+s+"-mobile-nav-section"},a)))}})
var ResponsiveNavMenu=React.createClass({displayName:"ResponsiveNavMenu",propTypes:{currentUrl:React.PropTypes.string,domains:React.PropTypes.arrayOf(domainObjectPropType),hideNonSubmenuLinks:React.PropTypes.bool,userProfileData:React.PropTypes.shape({isPhantom:React.PropTypes.bool,profileRoot:React.PropTypes.string,nickname:React.PropTypes.string,avatarSrc:React.PropTypes.string})},handleLogout:function(e){e.preventDefault()
var t=urls.getLogoutURL(this.props.currentUrl)
FacebookUtil.logout(function(){window.location=t})},render:function(){var e=this.props
var t=e.userProfileData
var n=e.hideNonSubmenuLinks
var a=!t
var o=t&&t.isPhantom
var s=this.props.domains.map(function(e,t){return React.createElement(NavMenuSection,{domain:e,key:t,hideNonSubmenuLinks:n})})
return React.createElement("div",null,React.createElement("ul",null,(a||o)&&!n&&React.createElement("li",{className:css(styles.navMenuSection)},React.createElement("a",{className:css(styles.navSectionTitle,styles.loginLink),href:urls.getLoginURL(this.props.currentUrl)},$_(null,"Log in / Sign up"))),s,a&&!n&&React.createElement("li",{className:css(styles.navMenuSection)},React.createElement("a",{className:css(styles.navSectionTitle,styles.informationLink),href:"/about"},React.createElement("span",{"aria-hidden":"true"},$_(null,"About")),React.createElement("span",{className:css(a11yStyles.srOnly)},$_(null,"About Khan Academy")))),a&&!n&&React.createElement("li",{className:css(styles.navMenuSection)},React.createElement("a",{className:css(styles.navSectionTitle,styles.informationLink),href:"/donate"},$_(null,"Donate"))),!a&&!n&&React.createElement("li",{className:css(styles.navMenuSection,styles.flexSpreadChildren)},React.createElement("a",babelHelpers._extends({className:css(styles.navSectionTitle,styles.informationLink,styles.flexCenterChildren),href:t.profileRoot},bigBingoLinks.handlersWithExtras([{id:"global_nav_visit_profile",extra:{view:"mobile"}}])),React.createElement("img",{className:css(styles.avatar),src:KA.staticUrl(t.avatarSrc)}),t.nickname),React.createElement("a",{className:css(styles.navSectionTitle,styles.informationLink,styles.logoutLink),href:"javascript: void 0",onClick:this.handleLogout},$_(null,"Log out")))))}})
var styles=StyleSheet.create({navSectionSubgroupItem:{display:"block",fontSize:15,padding:"10px 20px"},navSectionContentText:{color:styleConstants.white,cursor:"pointer",textDecoration:"none",":hover":{background:"rgba(255, 255, 255, 0.15)"}},navSectionSubgroupTitle:{color:"rgba(255, 255, 255, 0.5)",textTransform:"uppercase"},navSectionContents:{paddingTop:10,paddingBottom:10},navSectionClosed:{overflow:"hidden",transition:"max-height .25s ease",maxHeight:0},navSectionOpen:{overflow:"hidden",transition:"max-height .25s ease",maxHeight:2e3},navSectionTitle:{color:styleConstants.gray,cursor:"pointer",display:"block",fontSize:16,fontWeight:"bold",padding:"10px 15px 10px 20px",textDecoration:"none",":hover":{backgroundColor:styleConstants.graySuperLight}},flexSpreadChildren:{alignItems:"center",display:"flex",justifyContent:"space-between"},navMenuSection:{borderBottom:"1px solid "+styleConstants.tableBorder},navSectionIcon:{lineHeight:1,transition:"transform 250ms ease-out"},navSectionIconOpen:{WebkitTransform:"rotate(90deg)",transform:"rotate(90deg)"},loginLink:{backgroundColor:styleConstants.menuHighlightColor,color:styleConstants.white,fontWeight:"normal",padding:"13px 0",textAlign:"center",":hover":{backgroundColor:"auto"}},flexCenterChildren:{display:"flex",alignItems:"center",justifyContent:"center"},informationLink:{color:styleConstants.textColor,fontWeight:"normal",textAlign:"center",padding:"10px 20px"},logoutLink:{borderLeft:"1px solid "+styleConstants.tableBorder},avatar:{height:24,marginRight:4}})
var domainToBackgroundStyles=StyleSheet.create({math:{backgroundColor:styleConstants.mathDomainColor},science:{backgroundColor:styleConstants.scienceDomainColor},"economics-finance-domain":{backgroundColor:styleConstants.economicsDomainColor},humanities:{backgroundColor:styleConstants.humanitiesDomainColor},computing:{backgroundColor:styleConstants.csDomainColor},"test-prep":{backgroundColor:styleConstants.testPrepDomainColor},"partner-content":{backgroundColor:styleConstants.partnerContentDomainColor}})
var domainToColorStyles=StyleSheet.create({math:{color:styleConstants.mathDomainColor},science:{color:styleConstants.scienceDomainColor},"economics-finance-domain":{color:styleConstants.economicsDomainColor},humanities:{color:styleConstants.humanitiesDomainColor},computing:{color:styleConstants.csDomainColor},"test-prep":{color:styleConstants.testPrepDomainColor},"partner-content":{color:styleConstants.partnerContentDomainColor}})
module.exports=ResponsiveNavMenu
});
KAdefine("javascript/page-package/bibliotron-responsive-nav-menu.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var _require2=require("../shared-package/i18n.js")
var $_=_require2.$_
var AphroditeCSSTransitionGroup=require("../shared-styles-package/aphrodite-css-transition-group.jsx")
var a11yStyles=require("../shared-styles-package/a11y.js")
var bigBingo=require("../shared-package/bigbingo.js")
var bigBingoLinks=require("./big-bingo-links.js")
var FacebookUtil=require("../shared-package/facebookutil.js")
var globalStyles=require("../shared-styles-package/global-styles.js")
var Icon=require("../shared-styles-package/fontawesome-icon.jsx")
var NotificationsList=require("./notifications-list.jsx")
var NotificationsSwitch=require("./notifications-switch.jsx")
var urls=require("./urls.js")
var styleConstants=require("../shared-styles-package/constants.js")
var UserSettings=require("./user-settings.jsx")
var _require3=require("./domain-utils.js")
var domainObjectPropType=_require3.domainObjectPropType
var AccordionItem=React.createClass({displayName:"AccordionItem",propTypes:{children:React.PropTypes.node,href:React.PropTypes.string,linkAttributes:React.PropTypes.objectOf(React.PropTypes.any),onClick:React.PropTypes.func,trigger:React.PropTypes.node.isRequired,triggerStyles:React.PropTypes.arrayOf(React.PropTypes.any)},getInitialState:function(){return{linkAttributes:{},open:false}},handleClick:function(e){var t=this.state.open
if(this.props.children){e.preventDefault()
t=!t
this.setState({open:t})}if(this.props.onClick){this.props.onClick(t,e)}},render:function(){var e=this.props
var t=e.children
var i=e.href
var n=e.linkAttributes
var a=e.trigger
var o=e.triggerStyles
var s=t?React.createElement("div",{className:css(styles.navSectionIcon,this.state.open&&styles.navSectionIconOpen)},React.createElement(Icon,{name:"angleRight",large:true})):null
return React.createElement("li",{className:css(styles.navMenuSection)},React.createElement("a",babelHelpers._extends({},n,{className:css.apply(undefined,[styles.navSectionTitle].concat(o)),href:i,onClick:this.handleClick}),a,s),React.createElement(AphroditeCSSTransitionGroup,{transitionStyle:{enter:styles.navSectionClosed,enterActive:styles.navSectionOpen,leave:styles.navSectionOpen,leaveActive:styles.navSectionClosed},transitionEnterTimeout:250,transitionLeaveTimeout:250},this.state.open&&t))}})
var NavMenuSection=React.createClass({displayName:"NavMenuSection",propTypes:{domain:domainObjectPropType,hideNonSubmenuLinks:React.PropTypes.bool},getDomainConversions:function(){return[{id:"global_nav_choose_domain",extra:{domain:this.props.domain.identifier,view:"mobile"}}]},handleClick:function(e,t){if(this.props.domain.children.length){if(e){bigBingo.markConversionsWithExtras(this.getDomainConversions())}}else{}},render:function(){var e=this.props.domain
var t=e&&e.children.length!==0
if(!t&&this.props.hideNonSubmenuLinks){return null}var i=e.children.length-1
var n=e.children.map(function(t,n){return React.createElement("li",{key:t.identifier,className:css(styles.navSectionChild)},React.createElement("a",babelHelpers._extends({className:css(styles.navSectionChildLink,styles.navSectionContentText,n===0&&styles.firstNavSectionChildLink,n===i&&styles.lastNavSectionChildLink,childLinkStyles[e.identifier]),href:t.href},bigBingoLinks.handlersWithExtras([{id:"global_nav_choose_subject",extra:{domain:e.identifier,subject:t.identifier,view:"mobile"}}])),t.translatedTitle))})
var a=e.identifier
var o=null
if(t){o=React.createElement("ul",{key:a,"data-test-mobile-menu-domain":a,className:css(styles.navSectionContents)},n)}var s=e.children.length===0?bigBingoLinks.handlersWithExtras(this.getDomainConversions()):{}
var r=babelHelpers._extends({},s,{"data-test-mobile-menu-header-domain":a})
return React.createElement(AccordionItem,{trigger:e.translatedTitle,triggerStyles:[t&&styles.flexSpreadChildren,t&&globalStyles.linksWithoutVisited[a]],href:t?"javascript: void 0":e.href,onClick:this.handleClick,linkAttributes:r},o)}})
var BibliotronResponsiveNavMenu=React.createClass({displayName:"BibliotronResponsiveNavMenu",propTypes:{currentUrl:React.PropTypes.string,domains:React.PropTypes.arrayOf(domainObjectPropType),fullHeight:React.PropTypes.bool,hideNonSubmenuLinks:React.PropTypes.bool,loadNotifications:React.PropTypes.func,notifications:React.PropTypes.shape({newNotificationCount:React.PropTypes.number,notifications:React.PropTypes.arrayOf(React.PropTypes.any),loading:React.PropTypes.bool,teaser:React.PropTypes.string}),onOpenNotifications:React.PropTypes.func,profileData:React.PropTypes.shape(UserSettings.propTypes)},getDefaultProps:function(){return{fullHeight:true,onOpenNotifications:function(){}}},getInitialState:function(){return{showNotifications:false}},componentDidUpdate:function(e,t){if(!t.showNotifications&&this.state.showNotifications){this.props.onOpenNotifications()}},handleLogout:function(e){e.preventDefault()
var t=urls.getLogoutURL(this.props.currentUrl)
FacebookUtil.logout(function(){window.location=t})},handleScroll:function(e){if(!this.state.showNotifications||!this.props.loadNotifications){return}var t=e.target
var i=t.scrollHeight
var n=t.clientHeight
var a=t.scrollTop
var o=2
if(a+n>=i-o){this.props.loadNotifications()
e.preventDefault()}},handleUserMenuToggle:function(e){if(e){bigBingo.markConversion("global_nav_open_user_menu",{view:"mobile"})}},handleNotificationsToggle:function(){if(!this.hasOpenedNotifications){this.props.loadNotifications()
this.hasOpenedNotifications=true}var e=!this.state.showNotifications
if(e){bigBingo.markConversion("global_nav_open_notifications",{view:"mobile"})}this.setState({showNotifications:e})},renderLoggedInFooter:function(){var e=this.props
var t=e.profileData
var i=e.notifications
return React.createElement("div",null,React.createElement(AccordionItem,{trigger:t.isPhantom?"New user":t.nickName,triggerStyles:[styles.flexSpreadChildren],onClick:this.handleUserMenuToggle},React.createElement(UserSettings,babelHelpers._extends({},t,{signUpUrl:"/signup",profileLinkAttributes:bigBingoLinks.handlersWithExtras([{id:"global_nav_visit_profile",extra:{view:"mobile"}}])}))),React.createElement(NotificationsSwitch,{buttonStyles:[styles.navSectionTitle,styles.flexSpreadChildren],direction:"right",onClick:this.handleNotificationsToggle,notificationCount:i.newNotificationCount}))},render:function(){var e=this.props
var t=e.profileData
var i=e.hideNonSubmenuLinks
var n=e.notifications
var a=e.fullHeight
if(this.state.showNotifications){return React.createElement("div",{className:css(styles.container,a&&styles.fullHeight),onScroll:this.handleScroll},React.createElement(NotificationsSwitch,{buttonStyles:[styles.navSectionTitle,styles.flexSpreadChildren],direction:"left",onClick:this.handleNotificationsToggle,notificationCount:n.newNotificationCount}),React.createElement(NotificationsList,n))}var o=!t
var s=t&&t.isPhantom
var r=this.props.domains.map(function(e,t){return React.createElement(NavMenuSection,{domain:e,key:t,hideNonSubmenuLinks:i})})
return React.createElement("div",{className:css(styles.container,a&&styles.fullHeight)},React.createElement("ul",null,(o||s)&&!i&&React.createElement("li",{className:css(styles.navMenuSection)},React.createElement("a",{className:css(styles.navSectionTitle,styles.loginLink),href:urls.getLoginURL(this.props.currentUrl)},$_(null,"Sign in / Sign up"))),r,o&&!i&&React.createElement("li",{className:css(styles.navMenuSection)},React.createElement("a",{className:css(styles.navSectionTitle,styles.informationLink),href:"/about"},React.createElement("span",{"aria-hidden":"true"},$_(null,"About")),React.createElement("span",{className:css(a11yStyles.srOnly)},$_(null,"About Khan Academy")))),o&&!i&&React.createElement("li",{className:css(styles.navMenuSection)},React.createElement("a",{className:css(styles.navSectionTitle,styles.informationLink),href:"/donate"},$_(null,"Donate"))),!o&&!i&&this.renderLoggedInFooter()))}})
var styles=StyleSheet.create({container:{background:globalStyles.colors.gray98},fullHeight:{height:"calc(100vh - 60px)",overflowY:"scroll"},navSectionChildLink:{display:"block",fontSize:15,padding:"8px 16px"},firstNavSectionChildLink:{paddingTop:0},lastNavSectionChildLink:{paddingBottom:16},navSectionContentText:{color:globalStyles.colors.gray25,cursor:"pointer",textDecoration:"none"},navSectionClosed:{overflow:"hidden",transition:"max-height .2s ease-out",maxHeight:0},navSectionOpen:{overflow:"hidden",transition:"max-height .2s ease-in",maxHeight:2e3},navSectionTitle:{color:globalStyles.colors.gray17,cursor:"pointer",display:"block",fontSize:16,fontWeight:"bold",padding:16,textDecoration:"none",":hover":{textDecoration:"underline"}},flexSpreadChildren:{alignItems:"center",display:"flex",justifyContent:"space-between"},navMenuSection:{borderBottom:"1px solid "+styleConstants.tableBorder},navSectionIcon:{color:globalStyles.colors.gray76,lineHeight:1,transform:"rotate(90deg)",transition:"transform 250ms ease-out"},navSectionIconOpen:{color:"inherit",transform:"rotate(-90deg)"},loginLink:{backgroundColor:styleConstants.kaGreen,color:styleConstants.white,fontWeight:"normal",padding:"13px 0",textAlign:"center",":hover":{backgroundColor:"auto"}},flexCenterChildren:{display:"flex",alignItems:"center",justifyContent:"center"},informationLink:{color:styleConstants.textColor,fontWeight:"normal",textAlign:"center",padding:"10px 20px"},logoutLink:{borderLeft:"1px solid "+styleConstants.tableBorder},dot:{padding:"0 7px"}})
var childLinkStyles=globalStyles.makeDomainStylesForTemplate(function(e){return{":hover":{color:globalStyles.colors[e].domain3}}})
module.exports=BibliotronResponsiveNavMenu
});
KAdefine("javascript/page-package/header.jsx", function(require, module, exports) {
var _wrapperFloat,_wrapperTransparent,_spacerTransparent,_hideWhenSmall,_responsiveNavMenuWrapper,_responsiveSpacer,_responsiveMenuItemWrapper
var classNames=require("classnames")
var React=require("react")
var ReactDOM=require("react-dom")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var $_=require("../shared-package/i18n.js").$_
var AphroditeCSSTransitionGroup=require("../shared-styles-package/aphrodite-css-transition-group.jsx")
var a11yStyles=require("../shared-styles-package/a11y.js")
var bigBingo=require("../shared-package/bigbingo.js")
var Icon=require("../shared-styles-package/fontawesome-icon.jsx")
var mediaQueries=require("../shared-styles-package/media-queries.js")
var styleConstants=require("../shared-styles-package/constants.js")
var urls=require("./urls.js")
var bigBingoLinks=require("./big-bingo-links.js")
var HeaderLink=require("./header-link.jsx")
var HeaderLogo=require("./header-logo.jsx")
var HeaderSearchBox=require("./header-search-box.jsx")
var LearnMenu=require("./learn-menu.jsx")
var NotificationsDropdown=require("./notifications-dropdown.jsx")
var ProfileDropdown=require("./profile-dropdown.jsx")
var ResponsiveNavMenu=require("./responsive-nav-menu.jsx")
var HeaderSeparator=React.createClass({displayName:"HeaderSeparator",propTypes:{showWhenSmall:React.PropTypes.bool,transparent:React.PropTypes.bool},render:function(){return React.createElement("div",{className:css(styles.spacer,this.props.transparent&&styles.spacerTransparent,!this.props.showWhenSmall&&styles.hideWhenSmall)})}})
var Header=React.createClass({displayName:"Header",propTypes:{domains:LearnMenu.propTypes.domains,englishHomepageUrl:LearnMenu.propTypes.englishHomepageUrl,fullBleed:React.PropTypes.bool,hideSearchBar:React.PropTypes.bool,hideSignupInHeader:React.PropTypes.bool,initialUrl:React.PropTypes.string,learnMenuTitleInfo:LearnMenu.propTypes.titleInfo,missionPercentages:LearnMenu.propTypes.missionPercentages,notifications:React.PropTypes.shape({newNotificationCount:React.PropTypes.number,notifications:React.PropTypes.arrayOf(React.PropTypes.any),loading:React.PropTypes.bool,teaser:React.PropTypes.string}),onLoadNotifications:React.PropTypes.func,onOpenNotifications:React.PropTypes.func,onRequestMissionPercentages:React.PropTypes.func,shouldLinkToEnglishHomepage:LearnMenu.propTypes.shouldLinkToEnglishHomepage,showSkipToMain:React.PropTypes.bool,showWelcome:React.PropTypes.bool,signUpUrl:React.PropTypes.string.isRequired,transparent:React.PropTypes.bool,userProfileData:React.PropTypes.shape({hasChildStudents:React.PropTypes.bool,hasCoachHomepage:React.PropTypes.bool,hasParentHomepage:React.PropTypes.bool,hasStudents:React.PropTypes.bool,isChildAccount:React.PropTypes.bool,isDemo:React.PropTypes.bool,isMidsignupPhantom:React.PropTypes.bool,isPhantom:React.PropTypes.bool,profileRoot:React.PropTypes.string,nickname:React.PropTypes.string,avatarSrc:React.PropTypes.string})},getDefaultProps:function(){return{hideSearchBar:false,hideSignupInHeader:false,notifications:{newNotificationCount:0,notifications:[],loading:true,teaser:null},onLoadNotifications:function(){},onOpenNotifications:function(){},onRequestMissionPercentages:function(){},showSkipToMain:true,showWelcome:false}},getInitialState:function(){return{openMenu:null,currentUrl:this.props.initialUrl,hovered:false,responsiveMenuOpen:false}},componentDidMount:function(){this.setState({currentUrl:location.pathname+location.hash})
if(this.props.showWelcome&&!this.props.missionPercentages){this.props.onRequestMissionPercentages()}document.body.addEventListener("click",this.handleBodyClick)},componentWillUnmount:function(){document.body.removeEventListener("click",this.handleBodyClick)},handleBodyClick:function(e){if(!this.isMounted()){return}if(this.state.openMenu===null){return}var r=ReactDOM.findDOMNode(this.refs.notificationsDropdown)
var s=ReactDOM.findDOMNode(this.refs.profileDropdown)
var n=ReactDOM.findDOMNode(this.refs.learnMenu)
var t=e.target
while(t!==document.body){if(t===r||t===s||t===n){return}t=t.parentNode}this.setState({openMenu:null})},handleProfileClick:function(){var e=this.state.openMenu==="profile"?null:"profile"
if(e){bigBingo.markConversion("global_nav_open_user_menu",{view:"desktop"})}this.setState({openMenu:e})},handleNotificationsClick:function(){var e=this.state.openMenu==="notifications"?null:"notifications"
if(!this.hasOpenedNotifications){this.props.onLoadNotifications()
this.hasOpenedNotifications=true}if(e){this.props.onOpenNotifications()
bigBingo.markConversion("global_nav_open_notifications",{view:"desktop"})}this.setState({openMenu:e})},handleSearchFocus:function(){bigBingo.markConversion("global_nav_start_search",{view:"desktop"})
this.setState({openMenu:false})},handleLearnMenuClick:function(){if(this.props.showWelcome){return}if(this.state.openMenu!=="learn-menu"&&!this.props.missionPercentages&&!this.getUserIsLoggedOut()){this.props.onRequestMissionPercentages()}if(this.state.openMenu!=="learn-menu"){bigBingo.markConversion("global_nav_open_learn_menu")}this.setState({openMenu:this.state.openMenu==="learn-menu"?null:"learn-menu"})},getProfileDropdownData:function(){if(!this.props.userProfileData){return{}}var e=this.props.userProfileData
var r=e.hasChildStudents
var s=e.hasCoachHomepage
var n=e.hasParentHomepage
var t=e.hasStudents
var a=e.isChildAccount
var o=e.isDemo
var i=e.isMidsignupPhantom
var p=e.isPhantom
var l=e.profileRoot
var h=e.nickname
var c=e.avatarSrc
return{profileUrl:l,avatarImage:c,nickName:h,showSignUpToSave:p&&!i,hasStudents:t,hasChildren:t&&r,showSettings:!(p||o),showLearningHome:s||n,showCoachingLinks:!a}},getHomeURL:function(){if(!this.props.userProfileData){return"/"}var e=this.props.userProfileData
var r=e.hasParentHomepage
var s=e.hasCoachHomepage
if(r){return"/parent"}else if(s){return"/coach/dashboard"}else{return"/"}},getIsTransparent:function(){return this.props.transparent&&!this.state.hovered&&this.state.openMenu===null},getUserIsLoggedOut:function(){return!this.props.userProfileData},getUserIsPhantom:function(){return this.props.userProfileData&&this.props.userProfileData.isPhantom},renderSkipToMain:function(){if(!this.props.showSkipToMain){return null}return React.createElement("a",{href:"#main-content","data-skip-to-main":true,className:css(a11yStyles.skipToMain),tabIndex:"1"},$_(null,"Skip to main content"))},renderLogo:function(){return React.createElement(HeaderLogo,{transparent:this.getIsTransparent(),logoStyles:[styles.pad],linkAttributes:bigBingoLinks.handlers(["global_nav_visit_home"])})},renderSeparator:function(e,r){return React.createElement(HeaderSeparator,{key:r,showWhenSmall:e,transparent:this.getIsTransparent()})},renderLearnMenu:function(){var e=this.props.domains
return React.createElement(LearnMenu,{ref:"learnMenu",domains:e,titleInfo:this.props.learnMenuTitleInfo,missionPercentages:this.props.missionPercentages,onDropdownToggle:this.handleLearnMenuClick,showDropdown:this.state.openMenu==="learn-menu"||this.props.showWelcome,buttonStyles:[styles.pad],transparent:this.getIsTransparent(),shouldLinkToEnglishHomepage:this.props.shouldLinkToEnglishHomepage,englishHomepageUrl:this.props.englishHomepageUrl,showWelcome:this.props.showWelcome})},renderAboutAndDonateLinks:function(){if(!this.getUserIsLoggedOut()&&!this.getUserIsPhantom()){return null}return[React.createElement(HeaderLink,{key:"about-link",testId:"header-about-link",linkStyles:[styles.pad],href:"/about",hidden:this.getIsTransparent(),hideWhenResponsive:true},React.createElement("span",{"aria-hidden":true},$_(null,"About")),React.createElement("span",{className:css(a11yStyles.srOnly)},$_(null,"About Khan Academy"))),this.renderSeparator(false,"about-separator"),React.createElement(HeaderLink,{key:"donate-link",testId:"header-donate-link",linkStyles:[styles.pad],href:"/donate",hidden:this.getIsTransparent(),hideWhenResponsive:true},$_(null,"Donate")),this.renderSeparator(false,"donate-separator")]},renderSearchBox:function(){var e=classNames(css(styles.searchWrapper,styles.hideWhenSmall,this.getIsTransparent()&&styles.hiddenSearchWrapper),"nav-search-box","in-react-header")
return React.createElement("div",{className:e},!this.props.hideSearchBar&&React.createElement(HeaderSearchBox,{onFocus:this.handleSearchFocus}))},renderLogInAndSignUpLinks:function(){var e=this.props
var r=e.hideSignupInHeader
var s=e.signUpUrl
if(!this.getUserIsLoggedOut()&&!this.getUserIsPhantom()){return}var n=this.getUserIsPhantom()
var t=[React.createElement(HeaderLink,{key:"login-link",testId:"header-log-in-link",linkStyles:[styles.pad],href:urls.getLoginURL(this.state.currentUrl),defaultGreen:r,fadeToBlue:true,transparent:!n&&this.getIsTransparent(),hidden:n&&this.getIsTransparent(),hideWhenResponsive:true},$_(null,"Log in")),this.renderSeparator(false,"signup-separator")]
if(!r&&!this.getUserIsPhantom()){t=t.concat([React.createElement(HeaderLink,{key:"signup-link",testId:"header-sign-up-link",linkStyles:[styles.pad],href:s,defaultGreen:true,fadeToBlue:true,hideWhenResponsive:true},$_(null,"Sign up"))])}return t},renderLoggedInItems:function(){var e=this.props.notifications
if(this.getUserIsLoggedOut()){return null}var r=[]
if(!this.getUserIsPhantom()){r=r.concat([React.createElement(HeaderLink,{key:"home-link",testId:"header-home-link",linkStyles:[styles.pad],href:this.getHomeURL(),hidden:this.getIsTransparent(),hideWhenResponsive:true},$_(null,"Home")),this.renderSeparator(false,"notifications-separator")])}return r.concat([React.createElement(NotificationsDropdown,{key:"notifications-dropdown",ref:"notificationsDropdown",newNotificationCount:e.newNotificationCount,notifications:e.notifications,teaser:e.teaser,isLoading:e.loading,showDropdown:this.state.openMenu==="notifications",onDropdownToggle:this.handleNotificationsClick,onScrollToBottom:this.props.onLoadNotifications,buttonStyles:[styles.pad],transparent:this.getIsTransparent()}),this.renderSeparator(false,"profile-separator"),React.createElement(ProfileDropdown,babelHelpers._extends({key:"profile-dropdown",ref:"profileDropdown",onDropdownToggle:this.handleProfileClick,showDropdown:this.state.openMenu==="profile",buttonStyles:[styles.pad,styles.profilePad],currentUrl:this.state.currentUrl,transparent:this.getIsTransparent(),signupUrl:this.props.signUpUrl},this.getProfileDropdownData()))])},renderResponsiveSpacer:function(){return React.createElement("div",{className:css(styles.responsiveSpacer)})},renderResponsiveMenuItems:function(){var e=[]
if(!this.props.hideSearchBar){e=e.concat([React.createElement("div",{key:"responsive-search",className:css(styles.showWhenSmall,styles.responsiveMenuItemWrapper)},React.createElement("a",babelHelpers._extends({className:css(styles.responsiveMenuLink)},bigBingoLinks.handlersWithExtras([{id:"global_nav_start_search",extra:{view:"mobile"}}]),{href:"/search","data-test-id":"navbar-search-button"}),React.createElement("span",{className:css(a11yStyles.srOnly)},$_(null,"Search for subjects, skills, and videos")),React.createElement(Icon,{name:"search",large:true}))),this.renderSeparator(true,"responsive-separator")])}if(!this.props.showWelcome){e=e.concat([React.createElement("div",{key:"responsive-dropdown-menu",className:css(styles.showWhenSmall,styles.responsiveMenuItemWrapper)},React.createElement("a",{href:"javascript: void 0",onClick:this.handleResponsiveMenuToggle,className:css(styles.responsiveMenuLink),"data-test-id":"navbar-toggle-menu",role:"button","aria-haspopup":true},this.state.responsiveMenuOpen?React.createElement(Icon,{name:"remove",large:true}):React.createElement(Icon,{name:"reorder",large:true})))])}return e},renderResponsiveNavMenu:function(){return React.createElement("div",{className:css(styles.responsiveNavMenuWrapper),"data-test-id":"responsive-nav-menu",role:"menu","aria-expanded":this.state.responsiveMenuOpen},React.createElement(AphroditeCSSTransitionGroup,{transitionStyle:{enter:styles.responsiveNavMenuClosed,enterActive:styles.responsiveNavMenuOpen,leave:styles.responsiveNavMenuOpen,leaveActive:styles.responsiveNavMenuClosed},transitionEnterTimeout:300,transitionLeaveTimeout:300},this.state.responsiveMenuOpen&&React.createElement(ResponsiveNavMenu,{domains:this.props.domains,userProfileData:this.props.userProfileData})))},handleHover:function(){this.setState({hovered:true})
if(this.hoverTimeout){clearTimeout(this.hoverTimeout)
this.hoverTimeout=null}},handleUnhover:function(e){var r=this
if(!this.hoverTimeout){this.hoverTimeout=setTimeout(function(){r.setState({hovered:false})},1e3)}},handleResponsiveMenuToggle:function(){var e=!this.state.responsiveMenuOpen
if(e){bigBingo.markConversion("global_nav_open_mobile")}this.setState({responsiveMenuOpen:e})},render:function(){return React.createElement("div",{className:css(styles.wrapper,this.props.transparent&&styles.wrapperFloat,this.getIsTransparent()&&styles.wrapperTransparent)},this.renderSkipToMain(),React.createElement("nav",{className:css(styles.header,this.props.fullBleed&&styles.headerFullBleed),onMouseOver:this.handleHover,onMouseOut:this.handleUnhover,onFocus:this.handleHover,onBlur:this.handleUnhover,role:"navigation"},this.renderSeparator(true),this.renderLogo(),this.renderSeparator(true),this.renderLearnMenu(),this.renderSeparator(false),this.renderAboutAndDonateLinks(),this.renderSearchBox(),this.renderResponsiveSpacer(),this.renderSeparator(true),this.renderLogInAndSignUpLinks(),this.renderLoggedInItems(),this.renderResponsiveMenuItems()),this.renderResponsiveNavMenu())}})
var styles=StyleSheet.create({wrapper:{background:styleConstants.white,boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",position:"relative",transition:"background 0.3s, box-shadow 0.3s",zIndex:styleConstants.zindexModal+1},wrapperFloat:(_wrapperFloat={},_wrapperFloat[mediaQueries.mdOrLarger]={left:0,position:"absolute",right:0,top:0},_wrapperFloat),wrapperTransparent:(_wrapperTransparent={},_wrapperTransparent[mediaQueries.mdOrLarger]={background:"none",boxShadow:"none"},_wrapperTransparent),header:{alignItems:"stretch",display:"flex",height:45,maxWidth:1200,marginLeft:"auto",marginRight:"auto",width:"100%"},headerFullBleed:{maxWidth:"none"},pad:{alignItems:"center",display:"flex",height:"100%",padding:"0 15px"},profilePad:{paddingLeft:10},spacer:{backgroundColor:styleConstants.grayLighter,height:"100%",transition:"background-color 0.3s",width:1},spacerTransparent:(_spacerTransparent={},_spacerTransparent[mediaQueries.mdOrLarger]={background:"none"},_spacerTransparent),searchWrapper:{display:"block",flex:1,transition:"opacity 0.3s"},hiddenSearchWrapper:{opacity:0},hideWhenSmall:(_hideWhenSmall={},_hideWhenSmall[mediaQueries.smOrSmaller]={display:"none"},_hideWhenSmall),responsiveNavMenuWrapper:(_responsiveNavMenuWrapper={},_responsiveNavMenuWrapper[mediaQueries.mdOrLarger]={display:"none"},_responsiveNavMenuWrapper),responsiveNavMenuOpen:{maxHeight:1e3,transition:"max-height .3s",overflow:"hidden"},responsiveNavMenuClosed:{maxHeight:0,transition:"max-height .3s",overflow:"hidden"},responsiveSpacer:(_responsiveSpacer={},_responsiveSpacer.display="none",_responsiveSpacer.flex=1,_responsiveSpacer[mediaQueries.smOrSmaller]={display:"flex"},_responsiveSpacer),responsiveMenuItemWrapper:(_responsiveMenuItemWrapper={},_responsiveMenuItemWrapper.display="none",_responsiveMenuItemWrapper.alignItems="stretch",_responsiveMenuItemWrapper[mediaQueries.smOrSmaller]={display:"flex"},_responsiveMenuItemWrapper),responsiveMenuLink:{alignItems:"center",color:styleConstants.gray,display:"flex",justifyContent:"center",textDecoration:"none",width:45}})
module.exports=Header
});
KAdefine("javascript/page-package/bibliotron-header.jsx", function(require, module, exports) {
var _headerActive,_logo,_alignLeft,_alignRight,_hideWhenSmall,_responsiveNavMenuWrapper,_responsiveMenuItemWrapper
var React=require("react")
var ReactDOM=require("react-dom")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var i18n=require("../shared-package/i18n.js")
var AphroditeCSSTransitionGroup=require("../shared-styles-package/aphrodite-css-transition-group.jsx")
var a11yStyles=require("../shared-styles-package/a11y.js")
var bigBingo=require("../shared-package/bigbingo.js")
var FontAwesomeIcon=require("../shared-styles-package/fontawesome-icon.jsx")
var globalStyles=require("../shared-styles-package/global-styles.js")
var Icon=require("../shared-styles-package/icon.jsx")
var mediaQueries=require("../shared-styles-package/media-queries.js")
var styleConstants=require("../shared-styles-package/constants.js")
var supports=require("../shared-package/supports.js")
var urls=require("./urls.js")
var bigBingoLinks=require("./big-bingo-links.js")
var BibliotronHeaderSearchBox=require("./bibliotron-header-search-box.jsx")
var BibliotronResponsiveNavMenu=require("./bibliotron-responsive-nav-menu.jsx")
var HeaderLogo=require("./header-logo.jsx")
var LearnMenu=require("./bibliotron-learn-menu.jsx")
var UserDropdown=require("./user-dropdown.jsx")
var $_=i18n.$_
var LearnMenuSpacer=React.createClass({displayName:"LearnMenuSpacer",render:function(){return React.createElement("div",{className:css(styles.pad,styles.navItem,styles.learnMenuSpacer)},$_(null,"Subjects"))}})
var BibliotronHeader=React.createClass({displayName:"BibliotronHeader",propTypes:{domains:LearnMenu.propTypes.domains,fullBleed:React.PropTypes.bool,hideSearchBar:React.PropTypes.bool,hideSignupInHeader:React.PropTypes.bool,initialUrl:React.PropTypes.string,notifications:BibliotronResponsiveNavMenu.propTypes.notifications,onLoadNotifications:React.PropTypes.func,onOpenNotifications:React.PropTypes.func,pageDomain:React.PropTypes.string,showSkipToMain:React.PropTypes.bool,showWelcome:React.PropTypes.bool,signUpUrl:React.PropTypes.string.isRequired,transparent:React.PropTypes.bool,userProfileData:React.PropTypes.shape({hasChildStudents:React.PropTypes.bool,hasCoachHomepage:React.PropTypes.bool,hasParentHomepage:React.PropTypes.bool,hasStudents:React.PropTypes.bool,isChildAccount:React.PropTypes.bool,isDemo:React.PropTypes.bool,isMidsignupPhantom:React.PropTypes.bool,isPhantom:React.PropTypes.bool,profileRoot:React.PropTypes.string,nickname:React.PropTypes.string,avatarSrc:React.PropTypes.string})},getDefaultProps:function(){return{hideSearchBar:false,hideSignupInHeader:false,notifications:{newNotificationCount:0,notifications:[],loading:true,teaser:null},onLoadNotifications:function(){},onOpenNotifications:function(){},showSkipToMain:true,showWelcome:false}},getInitialState:function(){return{openMenu:null,currentUrl:this.props.initialUrl,hovered:false,responsiveMenuOpen:false,searchMenuOpen:false,hasLoadedTypeahead:false,SearchBox:null,suggestionSource:null,searchHover:false}},componentDidMount:function(){this.setState({currentUrl:location.pathname+location.hash})
document.body.addEventListener("click",this.handleBodyClick)},componentWillUnmount:function(){document.body.removeEventListener("click",this.handleBodyClick)},handleFocus:function(){if(supports.touchevents){return}this.setState({hovered:true})},handleBlur:function(){this.setState({hovered:false})},handleBodyClick:function(e){if(!this.isMounted()){return}if(this.state.openMenu===null){return}var t=ReactDOM.findDOMNode(this.refs.notificationsDropdown)
var s=ReactDOM.findDOMNode(this.refs.profileDropdown)
var a=ReactDOM.findDOMNode(this.refs.learnMenu)
var n=e.target
while(n!==document.body){if(n===t||n===s||n===a){return}n=n.parentNode}this.setState({openMenu:null})},handleUserClick:function(){if(!this.hasOpenedNotifications){this.props.onLoadNotifications()
this.hasOpenedNotifications=true}var e=this.state.openMenu==="user"?null:"user"
if(e){bigBingo.markConversion("global_nav_open_user_menu",{view:"desktop"})}this.setState({openMenu:e})},handleLearnMenuClick:function(){if(this.props.showWelcome){return}if(this.state.openMenu==="learn-menu"){this.setState({openMenu:null})}else{bigBingo.markConversion("global_nav_open_learn_menu")
this.setState({openMenu:"learn-menu"})}},handleResponsiveMenuToggle:function(){var e=!this.state.responsiveMenuOpen
if(e){document.body.style.overflowY="hidden"}else{document.body.style.overflowY="auto"}if(e){bigBingo.markConversion("global_nav_open_mobile")}this.setState({responsiveMenuOpen:e})},handleSearchClick:function(e){var t=this
e.preventDefault()
bigBingo.markConversion("global_nav_start_search",{view:"desktop"})
if(!this.state.hasLoadedTypeahead){require.async(["../typeahead-package/search-box.jsx","../typeahead-package/suggestion-source.js","package!shared.css","package!typeahead.css"],function(e,s){t.setState({SearchBox:e,suggestionSource:s,hasLoadedTypeahead:true,searchMenuOpen:true,searchHover:false})})}else{this.setState({searchMenuOpen:true,searchHover:false})}},handleSearchExit:function(e){e&&e.preventDefault()
if(this.isMounted()){this.setState({searchMenuOpen:false})}},getProfileDropdownData:function(){if(!this.props.userProfileData){return null}var e=this.props.userProfileData
var t=e.hasChildStudents
var s=e.hasCoachHomepage
var a=e.hasParentHomepage
var n=e.hasStudents
var r=e.isChildAccount
var o=e.isDemo
var i=e.isMidsignupPhantom
var l=e.isPhantom
var c=e.profileRoot
var p=e.nickname
var h=e.avatarSrc
return{profileUrl:c,avatarImage:h,nickName:p,isPhantom:l,showSignUpToSave:l&&!i,hasStudents:n,hasChildren:n&&t,showSettings:!(l||o),showLearningHome:s||a,showCoachingLinks:!r}},getHomeURL:function(){if(!this.props.userProfileData){return"/"}var e=this.props.userProfileData
var t=e.hasParentHomepage
var s=e.hasCoachHomepage
if(t){return"/parent"}else if(s){return"/coach/dashboard"}else{return"/"}},getNavItemStyles:function(){return[styles.pad,styles.navItem,this.getIsOpaque()&&styles.navItemWhenOpaque]},getIsOpaque:function(){if(!this.props.transparent&&!this.props.pageDomain){return true}return this.state.hovered||this.state.openMenu!==null||this.state.responsiveMenuOpen||this.state.searchMenuOpen},getBackgroundColor:function(){if(this.getIsOpaque()){return NAV_ITEM_LIGHT_COLOR}else if(this.props.pageDomain){return globalStyles.colors[this.props.pageDomain].domain1}else{return"transparent"}},getUserIsLoggedOut:function(){return!this.props.userProfileData},getUserIsPhantom:function(){return this.props.userProfileData&&this.props.userProfileData.isPhantom},renderNavContents:function(){var e=this
if(this.state.searchMenuOpen){var t=React.createElement("div",{className:css(styles.searchResultsSpacer)},React.createElement(LearnMenuSpacer,null))
return React.createElement("div",{className:css(styles.headerContents,styles.alignLeft)},React.createElement("a",{href:"javascript:void 0",className:css.apply(undefined,this.getNavItemStyles()),style:{position:"absolute"},onClick:this.handleSearchExit,"data-test-id":"header-search-close"},React.createElement(Icon,{type:"xThin",size:15,color:NAV_ITEM_DARK_COLOR})),React.createElement(LearnMenuSpacer,null),React.createElement("div",{className:css.apply(undefined,this.getNavItemStyles().concat([styles.searchIcon])),style:{cursor:"default"}},React.createElement(Icon,{type:"search",size:SEARCH_ICON_SIZE,color:NAV_ITEM_DARK_COLOR})),React.createElement(BibliotronHeaderSearchBox,{onFocus:this.handleSearchFocus,onEscape:this.handleSearchExit,isBibliotron:true,searchFormStyles:[].concat(this.getNavItemStyles(),[styles.searchForm]),searchInputStyles:[styles.searchInput],SearchBox:this.state.SearchBox,spacer:t,suggestionSource:this.state.suggestionSource}))}else{var s=this.getIsOpaque()?NAV_ITEM_DARK_COLOR:NAV_ITEM_LIGHT_COLOR
if(this.state.searchHover){s=globalStyles.colors.kaGreen}return React.createElement("div",{className:css(styles.headerContents)},React.createElement("div",{className:css(styles.headerSection,styles.grow,styles.alignLeft)},this.renderLearnMenu(),React.createElement("a",{"aria-label":i18n._("Search for subjects, skills, and videos"),className:css.apply(undefined,this.getNavItemStyles().concat([styles.searchIcon])),href:"/search",onClick:this.handleSearchClick,onMouseEnter:function(){return e.setState({searchHover:true})},onMouseLeave:function(){return e.setState({searchHover:false})},"data-test-id":"navbar-search-button"},React.createElement(Icon,{type:"search",size:SEARCH_ICON_SIZE,color:s}))),React.createElement("div",{className:css(styles.headerSection)},this.renderLogo()),React.createElement("div",{className:css(styles.headerSection,styles.grow,styles.alignRight)},this.getUserIsLoggedOut()?this.renderLoggedOutItems():this.renderLoggedInItems(),this.renderResponsiveMenuItems()))}},renderSkipToMain:function(){if(!this.props.showSkipToMain){return null}return React.createElement("a",{href:"#main-content","data-skip-to-main":true,className:css(a11yStyles.skipToMain),tabIndex:"1"},$_(null,"Skip to main content"))},renderLogo:function(){return React.createElement(HeaderLogo,{logoStyles:[].concat(this.getNavItemStyles(),[styles.logo]),linkAttributes:bigBingoLinks.handlers(["global_nav_visit_home"])})},renderLearnMenu:function(){var e=this.props.domains
return React.createElement(LearnMenu,{ref:"learnMenu",domains:e,onDropdownToggle:this.handleLearnMenuClick,showDropdown:this.state.openMenu==="learn-menu"||this.props.showWelcome,buttonStyles:this.getNavItemStyles(),transparent:!this.getIsOpaque(),showWelcome:this.props.showWelcome})},renderLoggedInItems:function(){var e=this.props
var t=e.onLoadNotifications
var s=e.signUpUrl
var a=e.notifications
if(this.getUserIsLoggedOut()){return null}return React.createElement(UserDropdown,babelHelpers._extends({ref:"profileDropdown",onDropdownToggle:this.handleUserClick,showDropdown:this.state.openMenu==="user",buttonStyles:this.getNavItemStyles(),currentUrl:this.state.currentUrl,signUpUrl:s,profileData:this.getProfileDropdownData()},a,{onOpenNotifications:this.props.onOpenNotifications,onScrollToBottom:t}))},renderLoggedOutItems:function(){return[React.createElement("a",{key:"donate-link",href:"/donate",className:css.apply(undefined,this.getNavItemStyles().concat([styles.hideWhenSmall]))},$_(null,"Donate")),React.createElement("a",{key:"signin-link",href:urls.getLoginURL(this.state.currentUrl),className:css.apply(undefined,this.getNavItemStyles().concat([styles.hideWhenSmall,styles.signUpLink]))},$_(null,"Sign in / Sign up"))]},renderResponsiveMenuItems:function(){var e=[]
if(!this.props.hideSearchBar){var t=this.getIsOpaque()?NAV_ITEM_DARK_COLOR:NAV_ITEM_LIGHT_COLOR
e=e.concat([React.createElement("div",{key:"responsive-search",className:css(styles.showWhenSmall,styles.responsiveMenuItemWrapper)},React.createElement("a",babelHelpers._extends({className:css.apply(undefined,this.getNavItemStyles().concat([styles.responsiveMenuLink,styles.responsiveSearchIcon]))},bigBingoLinks.handlersWithExtras([{id:"global_nav_start_search",extra:{view:"mobile"}}]),{href:"/search","data-test-id":"mobile-search-button"}),React.createElement("span",{className:css(a11yStyles.srOnly)},$_(null,"Search for subjects, skills, and videos")),React.createElement(Icon,{type:"search",size:SEARCH_ICON_SIZE,color:t})))])}if(!this.props.showWelcome){e=e.concat([React.createElement("div",{key:"responsive-dropdown-menu",className:css(styles.showWhenSmall,styles.responsiveMenuItemWrapper)},React.createElement("a",{href:"javascript: void 0",onClick:this.handleResponsiveMenuToggle,className:css.apply(undefined,this.getNavItemStyles().concat([styles.responsiveMenuLink])),"data-test-id":"mobile-header-menu-button",role:"button","aria-haspopup":true},this.state.responsiveMenuOpen?React.createElement(Icon,{type:"xThin",size:17,color:NAV_ITEM_DARK_COLOR}):React.createElement(FontAwesomeIcon,{name:"reorder",large:true})))])}return e},renderResponsiveNavMenu:function(){return React.createElement("div",{className:css(styles.responsiveNavMenuWrapper),"data-test-id":"responsive-nav-menu",role:"menu","aria-expanded":this.state.responsiveMenuOpen},React.createElement(AphroditeCSSTransitionGroup,{transitionStyle:{enter:styles.responsiveNavMenuClosed,enterActive:styles.responsiveNavMenuOpen,leave:styles.responsiveNavMenuOpen,leaveActive:styles.responsiveNavMenuClosed},transitionEnterTimeout:300,transitionLeaveTimeout:300},this.state.responsiveMenuOpen&&React.createElement(BibliotronResponsiveNavMenu,{domains:this.props.domains,profileData:this.getProfileDropdownData(),notifications:this.props.notifications,loadNotifications:this.props.onLoadNotifications,onOpenNotifications:this.props.onOpenNotifications})))},render:function(){return React.createElement("div",{className:css(styles.wrapper,this.props.transparent&&styles.wrapperFloat,this.getIsOpaque()&&styles.headerActive),style:{backgroundColor:this.getBackgroundColor()}},this.renderSkipToMain(),React.createElement("nav",{className:css(styles.header,this.props.fullBleed&&styles.headerFullBleed),onFocus:this.handleFocus,onBlur:this.handleBlur,onMouseEnter:this.handleFocus,onMouseLeave:this.handleBlur,role:"navigation"},this.renderNavContents()),this.renderResponsiveNavMenu())}})
var NAV_HORIZONTAL_PADDING=20
var NAV_HORIZONTAL_PADDING_MOBILE=16
var NAV_ITEM_DARK_COLOR=globalStyles.colors.gray17
var NAV_ITEM_LIGHT_COLOR=globalStyles.colors.white
var SEARCH_ICON_LEFT_MARGIN=32
var SEARCH_INPUT_LEFT_MARGIN=20
var SEARCH_ICON_SIZE=20
var styles=StyleSheet.create({wrapper:{height:60,borderTop:"1px solid transparent",borderBottom:"1px solid rgba(255, 255, 255, 0.3)",left:0,position:"relative",right:0,zIndex:styleConstants.zindexHeader},wrapperFloat:{position:"absolute"},header:{maxWidth:1200,marginLeft:"auto",marginRight:"auto",width:"100%",height:"100%"},headerContents:{display:"flex",height:"100%"},headerActive:(_headerActive={},_headerActive.borderTop="1px solid "+globalStyles.colors.gray85,_headerActive.borderBottom="1px solid "+globalStyles.colors.gray85,_headerActive[mediaQueries.smOrSmaller]={background:globalStyles.colors.gray98},_headerActive),headerFullBleed:{maxWidth:"none"},headerSection:{alignItems:"stretch",display:"flex",height:"100%"},learnMenuSpacer:{paddingRight:16,pointerEvents:"none",visibility:"hidden",whiteSpace:"nowrap"},searchResultsSpacer:{marginLeft:SEARCH_ICON_LEFT_MARGIN+SEARCH_ICON_SIZE+SEARCH_INPUT_LEFT_MARGIN},logo:(_logo={},_logo[mediaQueries.smOrSmaller]={paddingLeft:NAV_HORIZONTAL_PADDING_MOBILE},_logo),grow:{flexGrow:1,width:0},alignLeft:(_alignLeft={},_alignLeft.justifyContent="flex-start",_alignLeft.paddingLeft=NAV_HORIZONTAL_PADDING,_alignLeft[mediaQueries.smOrSmaller]={display:"none"},_alignLeft),alignRight:(_alignRight={},_alignRight.justifyContent="flex-end",_alignRight.paddingRight=NAV_HORIZONTAL_PADDING,_alignRight[mediaQueries.smOrSmaller]={paddingRight:0},_alignRight),pad:{alignItems:"center",display:"flex",height:"100%"},navItem:{color:NAV_ITEM_LIGHT_COLOR,fontFamily:globalStyles.fonts.bold,fontSize:15,textDecoration:"none"},navItemWhenOpaque:{color:NAV_ITEM_DARK_COLOR,":hover":{color:globalStyles.colors.kaGreen}},signUpLink:{marginLeft:32},searchIcon:{marginLeft:SEARCH_ICON_LEFT_MARGIN},searchForm:{flexGrow:1},searchInput:{border:"none",fontFamily:globalStyles.fonts.regular,fontSize:15,height:"auto",marginLeft:SEARCH_INPUT_LEFT_MARGIN,outline:"none",width:300},hideWhenSmall:(_hideWhenSmall={},_hideWhenSmall[mediaQueries.smOrSmaller]={display:"none"},_hideWhenSmall),responsiveNavMenuWrapper:(_responsiveNavMenuWrapper={},_responsiveNavMenuWrapper.background=globalStyles.colors.white,_responsiveNavMenuWrapper.left=0,_responsiveNavMenuWrapper.position="absolute",_responsiveNavMenuWrapper.right=0,_responsiveNavMenuWrapper[mediaQueries.mdOrLarger]={display:"none"},_responsiveNavMenuWrapper),responsiveNavMenuOpen:{maxHeight:1e3,transition:"max-height .3s",overflow:"hidden"},responsiveNavMenuClosed:{maxHeight:0,transition:"max-height .3s",overflow:"hidden"},responsiveMenuItemWrapper:(_responsiveMenuItemWrapper={},_responsiveMenuItemWrapper.alignItems="stretch",_responsiveMenuItemWrapper.display="none",_responsiveMenuItemWrapper[mediaQueries.smOrSmaller]={display:"flex"},_responsiveMenuItemWrapper),responsiveMenuLink:{height:"auto",marginRight:NAV_HORIZONTAL_PADDING_MOBILE},responsiveSearchIcon:{marginRight:25}})
module.exports=BibliotronHeader
});
KAdefine("javascript/page-package/stateful-header.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("react-redux")
var Provider=_require.Provider
var connect=_require.connect
var APIActionResults=require("../shared-package/api-action-results.js")
var KA=require("../shared-package/ka.js")
var updateDocumentTitle=require("../shared-package/update-document-title.js")
var actions=require("./actions.js")
var BibliotronHeader=require("./bibliotron-header.jsx")
var Header=require("./header.jsx")
var _require2=require("./store.js")
var create=_require2.create
var StatefulHeader=connect(function(e){return e})(React.createClass({propTypes:{dispatch:React.PropTypes.func,domains:Header.propTypes.domains,englishHomepageUrl:Header.propTypes.englishHomepageUrl,fullBleed:Header.propTypes.fullBleed,hideSearchBar:Header.propTypes.hideSearchBar,hideSignupInHeader:Header.propTypes.hideSignupInHeader,initialUrl:Header.propTypes.initialUrl,isBibliotronHeader:React.PropTypes.bool.isRequired,learnMenuTitleInfo:Header.propTypes.learnMenuTitleInfo,missionData:React.PropTypes.shape({loading:React.PropTypes.bool,missionPercentages:Header.propTypes.missionPercentages}),notifications:Header.propTypes.notifications,pageDomain:React.PropTypes.string,shouldLinkToEnglishHomepage:Header.propTypes.shouldLinkToEnglishHomepage,showWelcome:Header.propTypes.showWelcome,transparent:Header.propTypes.transparent,userProfileData:Header.propTypes.userProfileData},componentDidMount:function(){var e=this
updateDocumentTitle()
APIActionResults.register("notifications_added",function(i){if(!e.isMounted()){return}var r=i.readable
e.props.dispatch(actions.gotNewNotifications(r))
var a=KA.getUserProfile()
if(a){updateDocumentTitle({noteCount:a.get("countBrandNewNotifications")+r.length})}})
KA.addProfileChangeListener(function(i){e.props.dispatch(actions.updateProfile(i))})},componentWillUnmount:function(){},handleLoadNotifications:function(){if(this.props.notifications.hasMore&&!this.props.notifications.loading){this.props.dispatch(actions.loadMoreNotifications())}},handleOpenNotifications:function(){if(this.props.notifications.newNotificationCount>0){this.props.dispatch(actions.clearNewNotifications())
updateDocumentTitle({noteCount:0})}},handleRequestMissionPercentages:function(){if(!this.props.missionData.loading){this.props.dispatch(actions.loadMissionPercentages())}},render:function(){var e=this.props.isBibliotronHeader?BibliotronHeader:Header
return React.createElement(e,{domains:this.props.domains,learnMenuTitleInfo:this.props.learnMenuTitleInfo,initialUrl:this.props.initialUrl,hideSignupInHeader:this.props.hideSignupInHeader,hideSearchBar:this.props.hideSearchBar,transparent:this.props.transparent,fullBleed:this.props.fullBleed,shouldLinkToEnglishHomepage:this.props.shouldLinkToEnglishHomepage,englishHomepageUrl:this.props.englishHomepageUrl,showWelcome:this.props.showWelcome,notifications:this.props.notifications,userProfileData:this.props.userProfileData,missionPercentages:this.props.missionData.missionPercentages,onLoadNotifications:this.handleLoadNotifications,onOpenNotifications:this.handleOpenNotifications,onRequestMissionPercentages:this.handleRequestMissionPercentages,signUpUrl:"/signup",pageDomain:this.props.pageDomain})}}))
var StatefulHeaderWrapper=React.createClass({displayName:"StatefulHeaderWrapper",propTypes:{domains:Header.propTypes.domains,englishHomepageUrl:Header.propTypes.englishHomepageUrl,fullBleed:Header.propTypes.fullBleed,hideSearchBar:Header.propTypes.hideSearchBar,hideSignupInHeader:Header.propTypes.hideSignupInHeader,initialNotificationCount:React.PropTypes.number,initialUrl:Header.propTypes.initialUrl,initialUserProfileData:Header.propTypes.userProfileData,learnMenuTitleInfo:Header.propTypes.learnMenuTitleInfo,shouldLinkToEnglishHomepage:Header.propTypes.shouldLinkToEnglishHomepage,showWelcome:Header.propTypes.showWelcome,transparent:Header.propTypes.transparent},getInitialState:function(){return{store:create(this.props.initialNotificationCount,this.props.initialUserProfileData)}},render:function(){return React.createElement(Provider,{store:this.state.store},React.createElement(StatefulHeader,this.props))}})
module.exports=StatefulHeaderWrapper
});
KAdefine("javascript/content-library-package/styles/shared.js", function(require, module, exports) {
var _defaultSpacing
var globalStyles=require("../../shared-styles-package/global-styles.js")
var borderRadius=globalStyles.borderRadius
var colors=globalStyles.colors
var makeDomainStylesForTemplate=globalStyles.makeDomainStylesForTemplate
var queries=globalStyles.queries
var links=makeDomainStylesForTemplate(function(a){return{color:colors[a].domain3,":visited":{color:colors[a].domain4}}})
var constants={moduleHorizontalPadding:20,moduleHorizontalPaddingSmall:16,moduleVerticalPadding:48,moduleVerticalPaddingSmall:40,moduleVerticalPaddingCompactModifer:-16,moduleWidthCentered:608,pageWidth:1200}
var moduleLayout={defaultAlignment:{marginLeft:"auto",marginRight:"auto",maxWidth:constants.pageWidth},defaultSpacing:(_defaultSpacing={},_defaultSpacing.paddingBottom=constants.moduleVerticalPadding,_defaultSpacing.paddingLeft=constants.moduleHorizontalPadding,_defaultSpacing.paddingRight=constants.moduleHorizontalPadding,_defaultSpacing.paddingTop=constants.moduleVerticalPadding,_defaultSpacing[queries.small]={paddingBottom:constants.moduleVerticalPaddingSmall,paddingLeft:constants.moduleHorizontalPaddingSmall,paddingRight:constants.moduleHorizontalPaddingSmall,paddingTop:constants.moduleVerticalPaddingSmall},_defaultSpacing)}
var mixins={padding:function(a,e,i,t){var o=a
var l=o===undefined?0:o
var n=e
var r=n===undefined?0:n
var d=i
var s=d===undefined?0:d
var u=t
var g=u===undefined?0:u
return{paddingTop:l,paddingRight:r,paddingBottom:s,paddingLeft:g}},position:function(a,e,i,t,o){return{position:a,top:e,right:i,bottom:t,left:o}}}
var overflowEllipsis={textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}
var standardTransition="0.2s ease-out"
var grayCallout={background:colors.gray97,border:"1px solid "+colors.gray90,borderRadius:borderRadius,transition:"borderColor "+standardTransition,":focus":{border:"1px solid "+colors.homeBlue,textDecoration:"none"},":hover":{border:"1px solid "+colors.homeBlue,textDecoration:"none"}}
var thumbnailSizes={xxxlarge:{height:405,width:720},xxlarge:{height:252,width:448},xlarge:{height:207,width:368},large:{height:117,width:208},medium:{height:76,width:136},small:{height:54,width:96}}
var displayFlex={display:"flex"}
var justifyContent=function(a){return{justifyContent:a}}
var alignItems=function(a){return{alignItems:a}}
var flexDirection=function(a){return{flexDirection:a}}
var flexWrap=function(a){return{flexWrap:a}}
var flex=function(a){return{msFlex:a,WebkitFlex:a,flex:a}}
var srOnly={position:"absolute",left:"-10000px",top:"auto",width:1,height:1,overflow:"hidden"}
var fixBorderRadiusWithOverflow={WebkitMaskImage:"url(data:image/png;base64,"+"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2Fy"+"ZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJ"+"AAAAAElFTkSuQmCC)"}
module.exports=babelHelpers._extends({},globalStyles,{alignItems:alignItems,borderRadius:borderRadius,constants:constants,displayFlex:displayFlex,flex:flex,flexDirection:flexDirection,flexWrap:flexWrap,grayCallout:grayCallout,fixBorderRadiusWithOverflow:fixBorderRadiusWithOverflow,justifyContent:justifyContent,links:links,mixins:mixins,moduleLayout:moduleLayout,overflowEllipsis:overflowEllipsis,srOnly:srOnly,standardTransition:standardTransition,thumbnailSizes:thumbnailSizes})
});
; KAdefine.updatePathToPackageMap({"javascript/node_modules/backbone/index.js": "corelibs-legacy.js", "javascript/node_modules/jquery/index.js": "corelibs-legacy.js", "javascript/notifications-package/notifications.js": "notifications.js", "javascript/notifications-package/readable-notification-view.js": "notifications.js", "javascript/typeahead-package/search-box.jsx": "typeahead.js", "javascript/typeahead-package/suggestion-source.js": "typeahead.js"});
