KAdefine("javascript/signup-link-package/bind-signup-link.js", function(require, module, exports) {
var Cookies=require("../shared-package/cookies.js")
var KA=require("../shared-package/ka.js")
var launchSignupInModal=require("./launch-signup-in-modal.js")
var bindSignupLink=function(n,i,e,a){if(!KA.isPhantom()){return}if(Cookies.readCookie("u13")){return}if(window.location.pathname==="/signup"){return}if(KA.isMobileCapable){return}if(!n||n.length===0){return}n.on("click",function(n){if(i){i()}launchSignupInModal(e,a)
n.preventDefault()}).one("mouseenter",function(n){require.async(["../login-package/login.js","../login-package/signup-modal.jsx","package!login.css"],function(){})})}
module.exports=bindSignupLink
});
KAdefine("javascript/signup-link-package/launch-signup-in-modal.js", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var ReactDOM=require("react-dom")
var launchSignupInModal=function(e,n){require.async(["../login-package/login.js","../login-package/signup.js","../login-package/signup-modal.jsx","package!login.css"],function(a,o,i){i=React.createFactory(i)
var c=$("#modal-signup-container")
if(c.length===0){c=$('<div id="modal-signup-container">').appendTo("body")}ReactDOM.unmountComponentAtNode(c[0])
ReactDOM.render(i({onFacebookClick:o._signupFacebook,onGoogleClick:o._signupGoogle,initialRole:e,signupSource:n}),c[0])})}
module.exports=launchSignupInModal
});
; KAdefine.updatePathToPackageMap({"javascript/login-package/login.js": "login.js", "javascript/login-package/signup-modal.jsx": "login.js", "javascript/login-package/signup.js": "login.js"});
