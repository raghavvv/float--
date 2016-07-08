KAdefine("javascript/hover-card-package/hover-card.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/qTip2/jquery.qtip.js")
var $=require("jquery")
var HoverCardView=require("./hover-card-view.js")
var _require=require("../shared-package/khan-fetch.js")
var khanFetch=_require.khanFetch
var encodeParams=_require.encodeParams
var ProfileModel=require("../shared-package/profile-model.js")
var HoverCard={_cache:{},_link:function(r,e){if(e!=null&&r.is("a")&&!r.attr("href")){var a="discussion"
if(r.hasClass("profile-programs")){a="projects"}r.attr("href",e+a)}},canFitToRight:function(r){var e=500
var a=$(window).width()-r.offset().left-r.width()
return a>e},createHoverCardQtip:function(r,e){var a=$(r)
var t=a.data("user-kaid"),i=a.data("user-id"),o=a.data("has-qtip")
if(o){return}var d,n
if(t){d=t
n="kaid"}else if(i){d=i
n="userId"}else{return}var s=HoverCard._cache[d],l
var h=false
var v=!HoverCard.canFitToRight(a)
var f
if(s!=null){l=s.html
var c=s.model.get("profileRoot")
HoverCard._link(a,c)}else{var u=new HoverCardView
l=u.render().el.innerHTML
if(v){a.data("right-triangle",true)
h={my:"top right",at:"bottom right"}}var p={}
p[n]=d
f=khanFetch("/api/internal/user/profile?"+encodeParams(p)).then(function(r){return r.json()}).then(function(r){return HoverCard._onHoverCardDataLoaded(a,r)})}a.data("has-qtip",true)
a.qtip({content:{text:l},style:{classes:"custom-override"},hide:{delay:100,fixed:true},position:e||h||{my:"top left",at:"bottom left"}})
a.qtip("show")
if(v){$(".hover-card-triangle").addClass("right")}return f},_onHoverCardDataLoaded:function(r,e){var a=r.data("user-kaid")||r.data("user-id"),t=new ProfileModel(e)
if(r.attr("href")){t.set({href:r.attr("href")})}if(r.hasClass("profile-programs")){t.set({href:t.get("profileRoot")+"projects"})}var i=new HoverCardView({model:t}),o=i.render().el.innerHTML
HoverCard._cache[a]={model:t,html:o}
r.qtip("option","content.text",o)
var d=t.get("profileRoot")
HoverCard._link(r,d)
if(r.data("right-triangle")){$(".hover-card-triangle").addClass("right")}}}
module.exports=HoverCard
});
KAdefine("javascript/hover-card-package/hover-card-view.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var i18n=require("../shared-package/i18n.js")
var HoverCardView=Backbone.View.extend({initialize:function(e){var i={hideStreak:true}
this._options=babelHelpers._extends({},i,e)
this.template=require("./hover-card.handlebars")
if(this.model){this.model.bind("change",this.render.bind(this))}this.render=this.render.bind(this)},render:function(){var e=this._options
if(this.model){Object.assign(e,this.model.toJSON())
if(this.model.isPhantom()){e["nickname"]=i18n._("Unclaimed points")}if(this.model.isPrivate()){e["isPrivate"]=this.model.isPrivate()}}else{e["messageOnly"]=true}this.$el.html(this.template(e))
if(this.model){this.model.fetchFull()}return this}})
module.exports=HoverCardView
});
KAdefine("javascript/hover-card-package/hover-card.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(n,a,e,i,s){e=e||n.helpers
var r="",l,t,o,c,f=this,h="function",p=e.blockHelperMissing,d=e.helperMissing,v=void 0,m=this.escapeExpression
function u(n,a){return'\n    <div class="hover-card-triangle"></div>\n    '}function g(n,a){return" vertical-shadow"}function y(n,a){var i="",s
i+='\n                <div class="hover-card-message">\n                    '
o=e["_"]
s=o||n["_"]
c=f.program(6,k,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===h){s=s.call(n,c)}else{s=p.call(n,s,c)}if(s||s===0){i+=s}i+="\n                </div>\n            "
return i}function k(n,a){return"Finding profile information..."}function b(n,a){var i="",s,r
i+='\n                <div class="user-stats '
o=e.isPrivate
s=o||n.isPrivate
r=e["if"]
c=f.program(9,S,a)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(n,s,c)
if(s||s===0){i+=s}i+='">\n                    <div class="badge-container">\n                        '
o=e.publicBadges
s=o||n.publicBadges
r=e.each
c=f.program(11,w,a)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(n,s,c)
if(s||s===0){i+=s}i+='\n                    </div>\n                    <div class="energy-points-badge">\n                        '
o=e.isSal
s=o||n.isSal
r=e["if"]
c=f.program(15,x,a)
c.hash={}
c.fn=c
c.inverse=f.program(17,F,a)
s=r.call(n,s,c)
if(s||s===0){i+=s}i+="\n                    </div>\n                    "
o=e.hideStreak
s=o||n.hideStreak
r=e.unless
c=f.program(19,_,a)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(n,s,c)
if(s||s===0){i+=s}i+="\n                </div>\n                "
i+='\n                <div class="user-actions"></div>\n                <div class="user-info">\n                    <a class="profile-link" href="'
o=e.href
s=o||n.href
r=e["if"]
c=f.program(21,H,a)
c.hash={}
c.fn=c
c.inverse=f.program(23,R,a)
s=r.call(n,s,c)
if(s||s===0){i+=s}i+='">\n                        <img src="'
o=e.avatarSrc
s=o||n.avatarSrc
o=e.staticUrl
r=o||n.staticUrl
if(typeof r===h){s=r.call(n,s,{hash:{}})}else if(r===v){s=d.call(n,"staticUrl",s,{hash:{}})}else{s=r}i+=m(s)+'" class="avatar">\n                        <div class="nickname-container">\n                            <span class="nickname">\n                                '
o=e.nickname
s=o||n.nickname
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=d.call(n,"nickname",{hash:{}})}i+=m(s)+'\n                            </span>\n                            <span class="username">\n                                '
o=e.usernameFormatted
s=o||n.usernameFormatted
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=d.call(n,"usernameFormatted",{hash:{}})}i+=m(s)+'\n                            </span>\n                        </div>\n                    </a>\n                    <div class="bio">\n                        '
o=e.bio
s=o||n.bio
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=d.call(n,"bio",{hash:{}})}i+=m(s)+"\n                    </div>\n                </div>\n            "
return i}function S(n,a){return"private"}function w(n,a){var i="",s,r
i+="\n                            "
s=n
r=e["if"]
c=f.program(12,U,a)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(n,s,c)
if(s||s===0){i+=s}i+="\n                        "
return i}function U(n,a){var i="",s,r
i+="\n                                "
s=n
r=e["with"]
c=f.program(13,L,a)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(n,s,c)
if(s||s===0){i+=s}i+="\n                            "
return i}function L(n,a){var i="",s,r
i+='\n                                    <img class="badge-icon" src="'
o=e.icons
s=o||n.icons
s=s===null||s===undefined||s===false?s:s.small
o=e.staticUrl
r=o||n.staticUrl
if(typeof r===h){s=r.call(n,s,{hash:{}})}else if(r===v){s=d.call(n,"staticUrl",s,{hash:{}})}else{s=r}i+=m(s)+'" alt="'
o=e.description
s=o||n.description
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=d.call(n,"description",{hash:{}})}i+=m(s)+'" title="'
o=e.description
s=o||n.description
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=d.call(n,"description",{hash:{}})}i+=m(s)+'">\n                                '
return i}function x(n,a){return'\n                            <span class="infinity-energy-points">\n                                &infin;\n                            </span>\n                        '}function F(n,a){var i="",s,r
i+="\n                            "
o=e.points
s=o||n.points
o=e.commafy
r=o||n.commafy
if(typeof r===h){s=r.call(n,s,{hash:{}})}else if(r===v){s=d.call(n,"commafy",s,{hash:{}})}else{s=r}i+=m(s)+"\n                        "
return i}function _(n,a){var i="",s,r
i+='\n                    <div class="energy-points-badge"\n                         style="background-color: #e57909; margin-right: 5px;">\n                         '
o=e.streakLength
s=o||n.streakLength
o=e.commafy
r=o||n.commafy
if(typeof r===h){s=r.call(n,s,{hash:{}})}else if(r===v){s=d.call(n,"commafy",s,{hash:{}})}else{s=r}i+=m(s)+"\n                    </div>\n                    "
return i}function H(n,a){var i
o=e.href
i=o||n.href
if(typeof i===h){i=i.call(n,{hash:{}})}else if(i===v){i=d.call(n,"href",{hash:{}})}return m(i)}function R(n,a){var i
o=e.profileRoot
i=o||n.profileRoot
if(typeof i===h){i=i.call(n,{hash:{}})}else if(i===v){i=d.call(n,"profileRoot",{hash:{}})}return m(i)}r+='<div class="hover-card-container">\n    '
o=e.hideTriangle
l=o||a.hideTriangle
t=e.unless
c=f.program(1,u,s)
c.hash={}
c.fn=c
c.inverse=f.noop
l=t.call(a,l,c)
if(l||l===0){r+=l}r+='\n    <div class="hover-card-content-container'
o=e.hideShadow
l=o||a.hideShadow
t=e.unless
c=f.program(3,g,s)
c.hash={}
c.fn=c
c.inverse=f.noop
l=t.call(a,l,c)
if(l||l===0){r+=l}r+='">\n        <div class="hover-card-content clearfix">\n            '
o=e.messageOnly
l=o||a.messageOnly
t=e["if"]
c=f.program(5,y,s)
c.hash={}
c.fn=c
c.inverse=f.program(8,b,s)
l=t.call(a,l,c)
if(l||l===0){r+=l}r+="\n        </div>\n    </div>\n</div>\n"
return r})
function wrapped_template(n,a){return absoluteLinks.makeHtmlLinksSafe(template(n,a))}module.exports=wrapped_template
});
