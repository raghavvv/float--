KAdefine("javascript/shared-components-package/modal.jsx", function(require, module, exports) {
var React=require("react")
var classNames=require("classnames")
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var constants=require("../shared-styles-package/constants.js")
var Modal=React.createClass({displayName:"Modal",propTypes:{aboveHeader:React.PropTypes.bool,backdrop:React.PropTypes.oneOf([true,false,"static"]),children:React.PropTypes.node.isRequired,className:React.PropTypes.string,extraStyles:React.PropTypes.arrayOf(React.PropTypes.any),extraWide:React.PropTypes.bool,footer:React.PropTypes.node,forceTop:React.PropTypes.bool,fullScreen:React.PropTypes.bool,inline:React.PropTypes.bool,keyboard:React.PropTypes.bool,onClose:React.PropTypes.func,padded:React.PropTypes.bool,preventBodyScroll:React.PropTypes.bool,preventScrollOnShow:React.PropTypes.bool,responsive:React.PropTypes.bool,responsiveHeight:React.PropTypes.bool,shouldHandleClose:React.PropTypes.bool,showCloseButton:React.PropTypes.bool,showCloseButtonAbsolute:React.PropTypes.bool,title:React.PropTypes.string,wide:React.PropTypes.bool},statics:{width:function(e){return{margin:"0 0 0 "+-e/2+"px",width:e,maxWidth:e}}},getDefaultProps:function(){return{aboveHeader:false,backdrop:true,className:"",extraWide:false,forceTop:false,fullScreen:false,inline:false,keyboard:true,onClose:function(){},padded:true,preventBodyScroll:false,preventScrollOnShow:false,responsiveHeight:true,showCloseButton:false,shouldHandleClose:true,title:"",wide:false,responsive:false}},getInitialState:function(){return{visible:true,activeElement:null}},componentWillMount:function(){this.setState({activeElement:document.activeElement})},componentDidMount:function(){if(this.props.keyboard){window.addEventListener("keydown",this.handleEsc,true)}this.oldOverflow=document.body.style.overflow
if(this.props.preventBodyScroll&&this.state.visible){document.body.style.overflow="hidden"}},componentDidUpdate:function(e,t){if(this.state.visible!==t.visible&&this.props.preventBodyScroll){document.body.style.overflow=t.visible?"hidden":this.oldOverflow}},componentWillUnmount:function(){if(this.props.keyboard){window.removeEventListener("keydown",this.handleEsc,true)}if(this.props.preventBodyScroll){document.body.style.overflow=this.oldOverflow}},handleClose:function(){this.setState({visible:false})
this.props.onClose()
if(this.state.activeElement){this.state.activeElement.focus()}},handleEsc:function(e){if(e.keyCode===27){this.handleClose()}},render:function(){var e=this
if(!this.state.visible&&this.props.shouldHandleClose){return React.createElement("div",null)}var t=this.props
var o=t.showCloseButton
var s=t.showCloseButtonAbsolute
var a=(o||s)&&React.createElement("a",{className:css(styles.close,s&&styles.closeAbsolute),href:"javascript: void 0",onClick:this.handleClose},"×")
var i=this.props.children
if(this.props.title||this.props.footer){i=React.createElement("div",null,this.props.title&&React.createElement("div",{className:css(styles.header)},React.createElement("h2",{className:css(styles.heading)},this.props.title)),React.createElement("div",{className:css(styles.body)},this.props.children),this.props.footer&&React.createElement("div",{className:css(styles.footer)},this.props.footer))}return React.createElement("div",{className:css(this.props.inline&&styles.inlineWrap)},React.createElement("div",{className:classNames(css.apply(undefined,[styles.modal,this.props.aboveHeader&&styles.modalAboveHeader,this.props.padded&&styles.padded,this.props.forceTop&&styles.forceTop,this.props.wide&&styles.wide,this.props.extraWide&&styles.extraWide,this.props.fullScreen&&styles.fullScreen,this.props.inline&&styles.inlineModal,this.props.responsive&&styles.responsiveModal,this.props.responsive&&this.props.responsiveHeight&&styles.responsiveHeight].concat(this.props.extraStyles)),this.props.className),ref:function(t){if(t&&e.props.preventScrollOnShow){t.style.top=""+window.scrollY+"px"}}},a,i),this.props.backdrop&&React.createElement("div",{className:css(styles.backdrop,this.props.aboveHeader&&styles.backdropAboveHeader,this.props.inline&&styles.inlineBackdrop,this.props.forceTop&&styles.forceTopBackdrop),onClick:this.props.backdrop!=="static"&&this.handleClose}))}})
var defaultWidth=560
var wideWidth=700
var extraWideWidth=1e3
var margin=30
var styles=StyleSheet.create({inlineWrap:{overflow:"auto",position:"relative"},modal:babelHelpers._extends({},Modal.width(defaultWidth),{backgroundColor:constants.white,backgroundClip:"padding-box",border:"1px solid rgba(0, 0, 0, 0.3)",borderRadius:constants.borderRadiusLarge,boxShadow:"0 3px 7px rgba(0, 0, 0, 0.3)",left:"50%",outline:"none",position:"fixed",top:"10%",zIndex:constants.zindexModal}),modalAboveHeader:{zIndex:constants.zindexModalAboveHeader},padded:{padding:constants.modalDialogPadding},inlineModal:{marginBottom:10,marginTop:10,position:"relative"},responsiveModal:{overflow:"auto",width:"75%",marginLeft:0,transform:"translate(-50%, 0)"},responsiveHeight:{bottom:"10%"},forceTop:{zIndex:20001},wide:Modal.width(wideWidth),extraWide:Modal.width(extraWideWidth),fullScreen:{bottom:margin,left:margin,minHeight:500-2*margin,minWidth:constants.minContainerWidth-2*margin,position:"fixed",right:margin,top:margin,width:"auto"},backdrop:{backgroundColor:constants.dark,bottom:0,left:0,opacity:.72,position:"fixed",right:0,top:0,zIndex:constants.zindexModalBackdrop},backdropAboveHeader:{zIndex:constants.zindexModalBackdropAboveHeader},forceTopBackdrop:{zIndex:2e4},inlineBackdrop:{position:"absolute"},close:{color:constants.black,cursor:"pointer","float":"right",fontSize:constants.baseLineHeight,fontWeight:"bold",lineHeight:constants.baseLineHeight,opacity:.2,textShadow:"0 1px 0 "+constants.white,textDecoration:"none",":hover":{opacity:.41},":focus":{opacity:.41}},closeAbsolute:{position:"absolute",fontSize:28,lineHeight:"28px",right:8,top:8},header:{borderBottom:"1px solid "+constants.grayLighter,padding:"0 0 "+constants.modalSectionPadding+" 0"},heading:{color:constants.grayDark,fontFamily:constants.headerFontFamily,marginBottom:0,paddingTop:constants.modalSectionPadding},body:{margin:0,maxHeight:"none",padding:""+constants.contentPadding+" 0 "+(""+constants.modalSectionPadding+" 0"),position:"relative"},footer:{backgroundColor:constants.white,borderTop:"1px solid "+constants.grayLighter,marginBottom:0,padding:""+constants.modalDialogPadding+" 0 0 0",overflow:"hidden",textAlign:"right"}})
module.exports=Modal
});
KAdefine("javascript/shared-components-package/button.jsx", function(require, module, exports) {
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var React=require("react")
var styleConstants=require("../shared-styles-package/constants.js")
var Color=require("../shared-styles-package/color.js")
var i18n=require("../shared-package/i18n.js")
var KUIButton=React.createClass({displayName:"KUIButton",propTypes:{borderless:React.PropTypes.bool,disabled:React.PropTypes.bool,domainSlug:React.PropTypes.string,href:React.PropTypes.string,label:React.PropTypes.node,onClick:React.PropTypes.func,progress:React.PropTypes.oneOf(["complete","started","unstarted"]),size:React.PropTypes.oneOf(["normal","small"]),transparent:React.PropTypes.bool,type:React.PropTypes.oneOf(["button","submit"]).isRequired,typeStyle:React.PropTypes.oneOf(["button","submit"]),use:React.PropTypes.oneOf(["primary","secondary","gray","white","blue"]),width:React.PropTypes.string},getDefaultProps:function(){return{use:"primary",width:"auto",progress:"complete",borderless:false,shadow:false,transparent:false,disabled:false,size:"normal"}},getLabel:function(){return this.props.label!=null?this.props.label:this.props.type==="submit"?i18n._("Submit"):""},handleLinkClick:function(e){if(this.props.disabled){e.preventDefault()
return}var r=undefined
if(this.props.onClick){r=this.props.onClick(e)}if(this.props.type==="submit"&&r!==false&&!e.defaultPrevented){var o=e.target
var t=o.parentNode
var a=o.ownerDocument.createElement("button")
a.type="submit"
a.style.display="none"
t.insertBefore(a,o)
a.click()
t.removeChild(a)}if(!this.props.href){e.preventDefault()}return r},render:function(){var e=this.props
var r=e.borderless
var o=e.disabled
var t=e.domainSlug
var a=e.progress
var s=e.size
var n=e.transparent
var l=e.type
var i=e.use
var p=this.props.typeStyle||l
var d=i==="gray"
var c=i==="white"
var m=p==="button"&&i!=="white"
var h=p==="submit"&&i!=="white"
var b=c&&!n
var u=themes[i]
var C=domainThemes[t]||domainThemes.default
var y=t?C:u
var f=!!t&&p==="button"&&a!=="complete"
var g=css(styles.base,r&&styles.borderless,!o&&styles.notDisabled,s==="small"&&styles.small,d&&grayTheme.base,d&&!n&&grayTheme.notTransparent,d&&o&&grayTheme.disabled,d&&!o&&grayTheme.notDisabled,c&&n&&whiteTheme.transparent.base,c&&n&&o&&whiteTheme.transparent.disabled,c&&n&&!o&&whiteTheme.transparent.notDisabled,c&&!n&&whiteTheme.notTransparent.base,c&&!n&&o&&whiteTheme.notTransparent.disabled,c&&!n&&!o&&whiteTheme.notTransparent.notDisabled,!!y&&m&&y.plainNotWhite.base,!!y&&m&&!n&&y.plainNotWhite.notTransparent,!!y&&m&&o&&y.plainNotWhite.disabled,!!y&&m&&!o&&y.plainNotWhite.notDisabled,!!y&&h&&y.submitNotWhite.base,!!y&&h&&o&&y.submitNotWhite.disabled,!!y&&h&&!o&&y.submitNotWhite.notDisabled,!!y&&b&&y.whiteNotTransparent.base,!!y&&b&&o&&y.whiteNotTransparent.disabled,!!y&&b&&!o&&y.whiteNotTransparent.notDisabled,f&&incompletedTheme.base,f&&!n&&incompletedTheme.notTransparent,f&&o&&incompletedTheme.disabled,f&&!o&&incompletedTheme.notDisabled)
return React.createElement("a",{role:"button","aria-disabled":this.props.disabled?"true":"false",onClick:this.handleLinkClick,href:this.props.href||"javascript:void(0)",className:"kui-button "+g,style:{width:this.props.width}},this.getLabel())}})
var styles=StyleSheet.create({base:{background:"transparent",border:"1px solid",borderRadius:19,boxSizing:"border-box",lineHeight:"18px",margin:"5px 0",padding:"10px 30px",position:"relative",display:"inline-block",textAlign:"center",textDecoration:"none",":hover":{transition:"all 0.2s ease"}},borderless:{border:"none",boxShadow:"0 1px 5px rgba(0, 0, 0, 0.2)"},notDisabled:{cursor:"pointer"},small:{padding:"7px 20px",margin:0}})
var disabled1="#fdfdfd"
var disabled2="#d7d7d7"
var disabledColor=styleConstants.grayLight
function borderStyles(e){var r=Color.format(e)
var o=Color.format(Color.fade(e,.15))
var t=Color.format(Color.darken(e,.2))
return StyleSheet.create({base:{color:r,":focus":{outline:"none"},":focus:before":{border:"1px solid "+r,borderRadius:23,content:'""',display:"block",height:"100%",left:-4,paddingBottom:6,paddingRight:6,position:"absolute",top:-4,width:"100%"}},notTransparent:{background:"#fff"},disabled:{color:disabledColor,cursor:"default",opacity:.5},notDisabled:{":hover":{backgroundColor:o,color:r},":focus":{backgroundColor:o,color:r,boxShadow:"0px 0px 5px "+o},":active":{color:t}}})}function backgroundStyles(e,r,o){var t=Color.format(e)
var a=Color.format(r)
var s=Color.format(Color.darken(e,.05))
var n=Color.format(Color.darken(r,.05))
return StyleSheet.create({base:{background:"linear-gradient("+t+", "+a+")",color:o,":focus":{outline:"none"},":focus:before":{border:"1px solid "+a,borderRadius:21,content:'""',display:"block",height:"100%",left:-3,paddingBottom:4,paddingRight:4,position:"absolute",top:-3,width:"100%"}},disabled:{background:"linear-gradient("+disabled1+", "+disabled2+")",color:disabledColor,cursor:"default",opacity:.8},notDisabled:{":hover":{background:"linear-gradient("+s+", "+n+")",color:o},":focus":{background:"linear-gradient("+s+", "+n+")",color:o},":active":{background:"linear-gradient("+n+", "+s+")",color:o}}})}var parsedWhite=Color.parse("#ffffff")
function makeTheme(e,r){return{plainNotWhite:borderStyles(r),submitNotWhite:backgroundStyles(e,r,"#fff"),whiteNotTransparent:backgroundStyles(parsedWhite,parsedWhite,Color.format(r))}}var parsedKaGreen=Color.parse(styleConstants.kaGreen)
var parsedKaBlue=Color.parse(styleConstants.kaBlue)
var parsedLearnstormBlue=Color.parse(styleConstants.learnstormBlue)
var themes={primary:makeTheme(Color.lighten(parsedKaGreen,.05),Color.darken(parsedKaGreen,.05)),secondary:makeTheme(Color.lighten(parsedKaBlue,.1),Color.darken(parsedKaBlue,.05)),blue:makeTheme(Color.lighten(parsedLearnstormBlue,.05),Color.darken(parsedLearnstormBlue,.05))}
var grayTheme=borderStyles(Color.parse(styleConstants.grayLight))
var whiteTheme={transparent:borderStyles(parsedWhite),notTransparent:backgroundStyles(parsedWhite,parsedWhite,styleConstants.textColor)}
var incompletedTheme=borderStyles(Color.parse("#aaaaaa"))
var domainThemes={"default":makeTheme(Color.parse(styleConstants.defaultSubjectColor),Color.parse(styleConstants.defaultDomainColor)),science:makeTheme(Color.parse(styleConstants.scienceSubjectColor),Color.parse(styleConstants.scienceDomainColor)),humanities:makeTheme(Color.parse(styleConstants.humanitiesSubjectColor),Color.parse(styleConstants.humanitiesDomainColor)),"economics-finance-domain":makeTheme(Color.parse(styleConstants.economicsSubjectColor),Color.parse(styleConstants.economicsDomainColor)),cs:makeTheme(Color.parse(styleConstants.csSubjectColor),Color.parse(styleConstants.csDomainColor)),"hour-of-code":makeTheme(Color.parse(styleConstants.csSubjectColor),Color.parse(styleConstants.csDomainColor)),"computer-programming":makeTheme(Color.parse(styleConstants.csSubjectColor),Color.parse(styleConstants.csDomainColor)),computing:makeTheme(Color.parse(styleConstants.csSubjectColor),Color.parse(styleConstants.csDomainColor)),"partner-content":makeTheme(Color.parse(styleConstants.partnerContentSubjectColor),Color.parse(styleConstants.partnerContentDomainColor)),math:makeTheme(Color.parse(styleConstants.mathSubjectColor),Color.parse(styleConstants.mathDomainColor)),"test-prep":makeTheme(Color.parse(styleConstants.testPrepSubjectColor),Color.parse(styleConstants.testPrepDomainColor)),sat:makeTheme(Color.parse(styleConstants.satSubjectColor),Color.parse(styleConstants.satDomainColor))}
module.exports=KUIButton
});
KAdefine("javascript/shared-components-package/labeled-field.jsx", function(require, module, exports) {
var _require=require("aphrodite")
var StyleSheet=_require.StyleSheet
var css=_require.css
var React=require("react")
var ReactDOM=require("react-dom")
var uniqueIdCounter=0
var KUILabeledField=React.createClass({displayName:"KUILabeledField",propTypes:{autoFocus:React.PropTypes.bool,caption:React.PropTypes.node,defaultValue:React.PropTypes.string,disabled:React.PropTypes.bool,error:React.PropTypes.string,hasError:React.PropTypes.any,id:React.PropTypes.string,name:React.PropTypes.string,onChange:React.PropTypes.func,onClick:React.PropTypes.func,onKeyPress:React.PropTypes.func,pattern:React.PropTypes.string,placeholder:React.PropTypes.string,showTitle:React.PropTypes.bool,title:React.PropTypes.string.isRequired,titleStyle:React.PropTypes.any,transparent:React.PropTypes.bool,type:React.PropTypes.oneOf(["text","password","email"]).isRequired,value:React.PropTypes.string},getDefaultProps:function(){return{type:"text",showTitle:true,transparent:false}},getInitialState:function(){return{id:"kui_labeled_field_"+(this.props.id||uniqueIdCounter++)}},getInputElem:function(){return ReactDOM.findDOMNode(this.refs.input)},handleTitleClick:function(){this.getInputElem().focus()},render:function(){var e=this.props.hasError===undefined?this.props.error:this.props.hasError
var t=null
if(e){t=React.createElement("div",{id:this.state.id+"-error",className:css(styles.error)},this.props.error)}else if(!this.props.showTitle){t=React.createElement("div",{id:this.state.id,className:"sr-only"},this.props.placeholder)}return React.createElement("div",{className:"kui-labeledfield "+css(styles.base)},this.props.showTitle&&React.createElement("div",{className:css(styles.title),onClick:this.handleTitleClick,id:this.state.id,style:this.props.titleStyle},this.props.title),t,React.createElement("input",{ref:"input","aria-invalid":!!this.props.error,"aria-labelledby":this.state.id+(this.props.error?"-error":""),autoFocus:this.props.autoFocus,className:css(styles.input,e&&styles.inputError,this.props.transparent&&styles.inputTransparent),defaultValue:this.props.defaultValue,disabled:this.props.disabled,name:this.props.name,placeholder:this.props.placeholder,pattern:this.props.pattern,type:this.props.type,value:this.props.value,onChange:this.props.onChange,onClick:this.props.onClick,onKeyPress:this.props.onKeyPress}),this.props.caption&&React.createElement("div",{className:css(styles.caption)},this.props.caption))}})
var errorColor="#c52717"
var styles=StyleSheet.create({base:{lineHeight:1.4,marginBottom:20},title:{color:"#777",cursor:"default","float":"left",fontSize:14,fontWeight:"bold",textTransform:"uppercase"},error:{color:errorColor,"float":"right",marginLeft:20,textAlign:"right"},input:{background:"#fcfcfc",border:"1px solid #ccc",boxSizing:"border-box",clear:"both",font:"inherit",padding:"8px 10px",margin:"5px 0 0",verticalAlign:"baseline",width:"100%",":focus":{outline:"none",boxShadow:"0px 0px 10px rgba(99, 155, 36, 0.8)"}},inputError:{background:"#fbe2e0",borderColor:errorColor,":focus":{boxShadow:"0px 0px 10px rgba(197, 39, 23, 0.4)"}},inputTransparent:{background:"transparent",color:"#fff"},caption:{color:"#999",marginTop:5,textAlign:"right"}})
module.exports=KUILabeledField
});
KAdefine("javascript/shared-components-package/throbber-grid.jsx", function(require, module, exports) {
var _require=require("aphrodite")
var css=_require.css
var StyleSheet=_require.StyleSheet
var React=require("react")
var styleConstants=require("../shared-styles-package/constants.js")
var blockIds=[[0,1,2],[7,8,3],[6,5,4]]
var ThrobberGrid=React.createClass({displayName:"ThrobberGrid",render:function(){return React.createElement("div",{className:css(styles.grid)},blockIds.map(function(e,r){return React.createElement("div",{key:r,className:css(styles.row)},e.map(function(e){return React.createElement("div",{key:e,className:css(styles.block,blockStyles[e].blockN)})}))}))}})
var throbberCellWidth=30
var throbberCellHeight=30
var throbberBorderRightWidth=2
var throbberBorderBottomWidth=2
var throbberWidth=throbberCellWidth*3+throbberBorderRightWidth*2
var throbberHeight=throbberCellHeight*3+throbberBorderBottomWidth*2
var baseColor=styleConstants.grayLighter
var blue1=styleConstants.colorProficient
var blue2=styleConstants.colorPracticed
var colors=[baseColor,blue1,blue2,baseColor]
function makeKeyframesAt(e){var r={"0%":{background:baseColor},"100%":{background:baseColor}}
for(var t=0;t<4;t++){var o=(e+t*12.5)%100
r[""+o+"%"]={background:colors[t]}
if(o===0){r["100%"]={background:colors[t]}}}return r}var styles=StyleSheet.create({grid:{margin:"auto",position:"relative",width:throbberWidth,height:throbberHeight},row:{display:"flex"},block:{background:styleConstants.grayLighter,borderBottom:""+throbberBorderBottomWidth+"px solid "+styleConstants.white,borderRight:""+throbberBorderRightWidth+"px solid "+styleConstants.white,"float":"left",height:throbberCellHeight,width:throbberCellWidth,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"ease"}})
var blockStyles=[0,1,2,3,4,5,6,7,8].map(function(e){var r={}
if(e===8){r.background=styleConstants.whiteDark}else{r.animationName=makeKeyframesAt(e*12.5)
if(e>=2&&e<=4){r.borderRight=0}if(e>=4&&e<=6){r.borderBottom=0}}return StyleSheet.create({blockN:r})})
module.exports=ThrobberGrid
});
