KAdefine("javascript/old-throbber-package/throbber.js", function(require, module, exports) {
var KA=require("../shared-package/ka.js")
var Throbber={jElement:null,show:function(e,r){if(!Throbber.jElement){Throbber.jElement=$("<img style='display:none;' "+"src='"+KA.staticUrl("/images/throbber.gif")+"' "+"class='throbber'/>")
$(document.body).append(Throbber.jElement)}if(!e.length){return}var t=e.offset()
var s=t.top+e.height()/2-8
var o=r?t.left-16-4:t.left+e.width()+4
Throbber.jElement.css("top",s).css("left",o).css("z-index",2e3).css("display","")},hide:function(){if(Throbber.jElement){Throbber.jElement.css("display","none")}}}
module.exports=Throbber
});
KAdefine("third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-alert.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../../javascript/node_modules/jquery/index.js");
!function($){"use strict"
var t='[data-dismiss="alert"]',e=function(e){$(e).on("click",t,this.close)}
e.prototype.close=function(t){var e=$(this),r=e.attr("data-target"),n
if(!r){r=e.attr("href")
r=r&&r.replace(/.*(?=#[^\s]*$)/,"")}n=$(r)
t&&t.preventDefault()
n.length||(n=e.hasClass("alert")?e:e.parent())
n.trigger(t=$.Event("close"))
if(t.isDefaultPrevented())return
n.removeClass("in")
function a(){n.trigger("closed").remove()}$.support.transition&&n.hasClass("fade")?n.on($.support.transition.end,a):a()}
var r=$.fn.alert
$.fn.alert=function(t){return this.each(function(){var r=$(this),n=r.data("alert")
if(!n)r.data("alert",n=new e(this))
if(typeof t=="string")n[t].call(r)})}
$.fn.alert.Constructor=e
$.fn.alert.noConflict=function(){$.fn.alert=r
return this}
$(document).on("click.alert.data-api",t,e.prototype.close)}(window.jQuery)
});
KAdefine("third_party/javascript-khansrc/jquery-expander/jquery.expander.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
(function($){$.expander={version:"1.4.2",defaults:{slicePoint:100,preserveWords:true,widow:4,expandText:"read more",expandPrefix:"&hellip; ",expandAfterSummary:false,summaryClass:"summary",detailClass:"details",moreClass:"read-more",collapseTimer:0,expandEffect:"slideDown",expandSpeed:250,collapseEffect:"slideUp",collapseSpeed:200,userCollapse:true,onSlice:null,beforeExpand:null,afterExpand:null,onCollapse:null}}
$.fn.expander=function(e){var a="init"
if(typeof e=="string"){a=e
e={}}var n=$.extend({},$.expander.defaults,e),s=/^<(?:area|br|col|embed|hr|img|input|link|meta|param).*>$/i,t=n.wordEnd||/(&(?:[^;]+;)?|[a-zA-Z\u00C0-\u0100]+)$/,i=/<\/?(\w+)[^>]*>/g,l=/<(\w+)[^>]*>/g,r=/<\/(\w+)>/g,d=/(<\/[^>]+>)\s*$/,o=/^<[^>]+>.?/,f
var p={init:function(){this.each(function(){var e,a,t,d,f,p,h,v,C,g,y,b,w=[],E=[],S={},T=this,A=$(this),P=$([]),j=$.meta?$.extend({},n,A.data()):n,k=!!A.find("."+j.detailClass).length,L=!!A.find("*").filter(function(){var e=$(this).css("display")
return/^block|table|list/.test(e)}).length,D=L?"div":"span",I=D+"."+j.detailClass,O="span."+j.moreClass,z=j.expandSpeed||0,F=$.trim(A.html()),W=$.trim(A.text()),Q=F.slice(0,j.slicePoint)
if($.data(this,"expander")){return}$.data(this,"expander",true)
$.each(["onSlice","beforeExpand","afterExpand","onCollapse"],function(e,a){S[a]=$.isFunction(j[a])})
Q=m(Q)
f=Q.replace(i,"").length
while(f<j.slicePoint){d=F.charAt(Q.length)
if(d=="<"){d=F.slice(Q.length).match(o)[0]}Q+=d
f++}Q=m(Q,j.preserveWords)
p=Q.match(l)||[]
h=Q.match(r)||[]
t=[]
$.each(p,function(e,a){if(!s.test(a)){t.push(a)}})
p=t
a=h.length
for(e=0;e<a;e++){h[e]=h[e].replace(r,"$1")}$.each(p,function(e,a){var n=a.replace(l,"$1")
var s=$.inArray(n,h)
if(s===-1){w.push(a)
E.push("</"+n+">")}else{h.splice(s,1)}})
E.reverse()
if(!k){C=F.slice(Q.length)
g=$.trim(C.replace(i,""))
if(g===""||g.split(/\s+/).length<j.widow){return}v=E.pop()||""
Q+=E.join("")
C=w.join("")+C}else{C=A.find(I).remove().html()
Q=A.html()
F=Q+C
v=""}j.moreLabel=A.find(O).length?"":u(j)
if(L){C=F}Q+=v
j.summary=Q
j.details=C
j.lastCloseTag=v
if(S.onSlice){t=j.onSlice.call(T,j)
j=t&&t.details?t:j}var U=c(j,L)
A.html(U)
y=A.find(I)
b=A.find(O)
y.hide()
b.find("a").unbind("click.expander").bind("click.expander",Z)
P=A.find("div."+j.summaryClass)
function Z(e){e.preventDefault()
b.hide()
P.hide()
if(S.beforeExpand){j.beforeExpand.call(T)}y.stop(false,true)[j.expandEffect](z,function(){y.css({zoom:""})
if(S.afterExpand){j.afterExpand.call(T)}x(j,y,T)})}})},destroy:function(){if(!this.data("expander")){return}this.removeData("expander")
this.each(function(){var e=$(this),a=$.meta?$.extend({},n,e.data()):n,s=e.find("."+a.detailClass).contents()
e.find("."+a.moreClass).remove()
e.find("."+a.summaryClass).remove()
e.find("."+a.detailClass).after(s).remove()})}}
if(p[a]){p[a].call(this)}function c(e,a){var n="span",s=e.summary
if(a){n="div"
if(d.test(s)&&!e.expandAfterSummary){s=s.replace(d,e.moreLabel+"$1")}else{s+=e.moreLabel}s='<div class="'+e.summaryClass+'">'+s+"</div>"}else{s+=e.moreLabel}return[s,"<",n+' class="'+e.detailClass+'"',">",e.details,"</"+n+">"].join("")}function u(e){var a='<span class="'+e.moreClass+'">'+e.expandPrefix
a+='<a href="#">'+e.expandText+"</a></span>"
return a}function m(e,a){if(e.lastIndexOf("<")>e.lastIndexOf(">")){e=e.slice(0,e.lastIndexOf("<"))}if(a){e=e.replace(t,"")}return $.trim(e)}function h(e,a){a.stop(true,true)[e.collapseEffect](e.collapseSpeed,function(){var n=a.prev("span."+e.moreClass).show()
if(!n.length){a.parent().children("div."+e.summaryClass).show().find("span."+e.moreClass).show()}})}function x(e,a,n){if(e.collapseTimer){f=setTimeout(function(){h(e,a)
if($.isFunction(e.onCollapse)){e.onCollapse.call(n,false)}},e.collapseTimer)}}return this}
$.fn.expander.defaults=$.expander.defaults})(jQuery)
});
KAdefine("javascript/discussion-package/discussion-list.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jquery-expander/jquery.expander.js")
require("../../third_party/javascript-khansrc/jquery-timeago/jquery.timeago.js")
var $=require("jquery")
var _=require("underscore")
var HoverCard=require("../hover-card-package/hover-card.js")
var i18n=require("../shared-package/i18n.js")
var KA=require("../shared-package/ka.js")
var DiscussionList=function(t){this._init(t)
_.bindAll(this)}
DiscussionList.prototype._init=function(t){this.complete=false
this.page=0
this.count=0
this.expanderSettings={slicePoint:500,expandText:i18n._('(<span class="sr-only">read</span>more'+'<span class="sr-only">of this comment</span>)'),userCollapseText:""}
this.hideCount=t.hideCount
var s=t.listTemplate
if(!s){s=require("./discussion-list.handlebars")}this.templates={list:s,item:t.itemTemplate}
this.itemKey=t.itemKey||"feedback"
this.$container=$(t.containerSelector)
this.requestURL=t.requestURL
this.params=t.params
this.data=t.data||[]
this.hideHeader=t.hideHeader
this.title=t.title||""
this.titleUrl=t.titleUrl||""
this.limit=t.limit||10
if(t.sorts!==undefined){this.sorts=t.sorts}else{this.sorts=[{name:i18n._("Top"),title:i18n._("Most Voted"),value:1,isDefault:true},{name:i18n._("Recent"),title:i18n._("Most Recent"),value:2,isDefault:false}]
if(/\/questions$/.test(this.requestURL)&&KA.featureFlag("SHOW_UNANSWERED_TAB")){this.sorts.push({name:i18n._("Unanswered"),title:i18n._("Unanswered"),value:3,isDefault:false})}}_.each(this.sorts,_.bind(function(t){if(t.isDefault){this.sortValue=t.value}},this))
if(t.subjects){this.subjects=t.subjects
var e=[{name:i18n._("All subjects"),title:i18n._("All subjects"),value:-1,isDefault:true}]
_.each(this.subjects,function(t,s){e.push({name:t["translatedTitle"],title:t["translatedTitle"],value:s,isDefault:false})})
this.subjectSorts=e}this.subjectIndex=-1
if(t.sortValue){this.sortValue=t.sortValue}this.onSort=t.onSort||$.noop
this.onInitialFetch=t.onInitialFetch||$.noop
this.preRenderTransformData=t.preRenderTransformData||_.identity
this.onFetchComplete=t.onFetchComplete||$.noop
if(!t.preloaded){this._buildHtml()
if(this.data.length){this._append(this.data)}if(this.requestURL){if(t.prefetched){this._fetchSuccess(t.prefetched,this.onInitialFetch)}else{this._fetch(this.onInitialFetch)}}}else{this._attachEvents()}}
DiscussionList.prototype._buildHtml=function(){var t=this.itemKey==="scratchpads"?"creations":"comments"
this.$container.append(this.templates.list({hideHeader:this.hideHeader,title:this.title,titleUrl:this.titleUrl,count:this.count,sorts:this.sorts,subjectSorts:this.subjectSorts,showMore:i18n._("Show more %(label)s",{label:t}),questions:{isComplete:true}}))
this._attachEvents()}
DiscussionList.prototype._attachEvents=function(){if(this.sorts){this.$container.find(".top-sort.discussion-list-sort a").on("click",_.bind(function(t){var s=$(t.target)
s.addClass("selected")
s.siblings().removeClass("selected")
this.sort(s.data("value"))},this))}if(this.subjectSorts){this.$container.find(".filterbar-dropdown").on("change",_.bind(function(t){var s=$("option:selected",t.target).text()
this.$container.find(".filterbar-mock-selected").html(s)
this.sortBySubject(t.target.value)},this))}this.$moreButton=this.$container.find(".discussion-list-more").on("click",_.bind(function(){this.fetchMore()
$(".questions-fader").hide()},this))
this.$container.on("mouseenter",".author-nickname",function(){HoverCard.createHoverCardQtip($(this))})
this.$content=this.$container.find(".discussion-list-content")}
DiscussionList.prototype._reset=function(){this.data=[]
this.$content.html("")
this.complete=false
this.page=0
this.hideMore_()
delete this.cursor
delete this.params.cursor}
DiscussionList.prototype._fetch=function(t){var s=this.params
var e=this.subjectIndex<0?"all":this.subjects[this.subjectIndex].id
_.extend(s,{sort:this.sortValue,subject:e,limit:this.limit})
if("cursor"in this){s.cursor=this.cursor}else{s.page=this.page}return $.ajax({type:"GET",url:this.requestURL,data:s,dataType:"json",success:_.bind(function(s){this._fetchSuccess(s,t)},this)})}
DiscussionList.prototype._fetchSuccess=function(t,s){var e=this.preRenderTransformData(this.getItemsFromData(t))
this.setItemsInData(t,e)
this.data=this.data.concat(e)
if("cursor"in t){this.cursor=t.cursor}this._append(t)
this.setMoreAsLoading_(false)
var i=e.length
if(!this.hideCount){this.setCount(this.count+i)}this.onFetchComplete(t)
if(s){s(t)}if("isComplete"in t){this.setComplete(t.isComplete)}else if("complete"in t){this.setComplete(t.complete)}else{this.setComplete(!i)}}
DiscussionList.prototype.fetchMore=function(){if(!this.complete){this.page++
this.setMoreAsLoading_(true)
this._fetch()}}
DiscussionList.prototype.getItemsFromData=function(t){var s
if(_.isArray(t)){s=t}else{s=t[this.itemKey]}return _.compact(s)}
DiscussionList.prototype.setItemsInData=function(t,s){if(_.isArray(t)){t=s}else{t[this.itemKey]=s}}
DiscussionList.prototype._append=function(t){var s=this.getItemsFromData(t)
_.each(s,function(t){this.$content.append(this.templates.item(t))},this)
this.prettify_()}
DiscussionList.prototype.sort=function(t){this.sortValue=t
this._reset()
this._fetch()
this.onSort()}
DiscussionList.prototype.sortBySubject=function(t){this.subjectIndex=t
this._reset()
this._fetch()
this.onSort()}
DiscussionList.prototype.showMore_=function(){this.$moreButton.css("display","block")}
DiscussionList.prototype.hideMore_=function(){this.$moreButton.css("display","none")}
DiscussionList.prototype.setMoreAsLoading_=function(t){if(t){this.$moreButton.addClass("disabled").prop("disabled",true).val(i18n._("Loading..."))}else{this.$moreButton.removeClass("disabled").prop("disabled",false).val(this.$moreButton.data("showMore"))}}
DiscussionList.prototype.setCount=function(t){this.count=t
this.$container.find(".discussion-list-count").show().find(".discussion-list-count-value").html(t)}
DiscussionList.prototype.setComplete=function(t){this.complete=t
if(this.complete){this.hideMore_()}else{this.showMore_()}}
DiscussionList.prototype.isEmpty=function(){return this.complete&&this.data.length===0}
DiscussionList.prototype.isComplete=function(){return this.complete}
DiscussionList.prototype.prettify_=function(){$(".timeago",this.$content).timeago()
$(".discussion-content",this.$content).expander(this.expanderSettings)}
module.exports=DiscussionList
});
KAdefine("javascript/discussion-package/discussion-list.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(s,n,e,i,l){e=e||s.helpers
i=i||s.partials
var a="",t,o,r,u,c=this,h="function",f=e.helperMissing,p=void 0,d=this.escapeExpression,v=e.blockHelperMissing
function m(s,n){var l="",a,t
l+='\n    <h2 class="discussion-list-header">\n        '
l+="\n        "
r=e.titleUrl
a=r||s.titleUrl
t=e["if"]
u=c.program(2,y,n)
u.hash={}
u.fn=u
u.inverse=c.program(4,g,n)
a=t.call(s,a,u)
if(a||a===0){l+=a}l+='\n\n        <span class="discussion-list-count" style="display:none;">\n            '
r=e["_"]
a=r||s["_"]
u=c.program(6,k,n)
u.hash={}
u.fn=u
u.inverse=c.noop
if(r&&typeof a===h){a=a.call(s,u)}else{a=v.call(s,a,u)}if(a||a===0){l+=a}l+="\n        </span>\n\n        "
a=s
a=c.invokePartial(i.discussion_sorts,"discussion_sorts",a,e,i)
if(a||a===0){l+=a}l+="\n\n    </h2>\n"
return l}function y(s,n){var i="",l
i+='\n          <a class="no-underline" href="'
r=e.titleUrl
l=r||s.titleUrl
if(typeof l===h){l=l.call(s,{hash:{}})}else if(l===p){l=f.call(s,"titleUrl",{hash:{}})}i+=d(l)+'">'
r=e.title
l=r||s.title
if(typeof l===h){l=l.call(s,{hash:{}})}else if(l===p){l=f.call(s,"title",{hash:{}})}i+=d(l)+"</a>\n        "
return i}function g(s,n){var i="",l
i+="\n          "
r=e.title
l=r||s.title
if(typeof l===h){l=l.call(s,{hash:{}})}else if(l===p){l=f.call(s,"title",{hash:{}})}i+=d(l)+"\n        "
return i}function k(s,n){var i="",l
i+='(<span class="discussion-list-count-value">'
r=e.count
l=r||s.count
if(typeof l===h){l=l.call(s,{hash:{}})}else if(l===p){l=f.call(s,"count",{hash:{}})}i+=d(l)+"</span> total)"
return i}function q(s,n){var i="",l,a
i+="\n                "
r=e.questions
l=r||s.questions
l=l===null||l===undefined||l===false?l:l.feedback
a=e.each
u=c.program(9,w,n)
u.hash={}
u.fn=u
u.inverse=c.noop
l=a.call(s,l,u)
if(l||l===0){i+=l}i+="\n        "
return i}function w(s,n){var l="",a
l+="\n                    "
a=s
a=c.invokePartial(i.discussion_thread,"discussion_thread",a,e,i)
if(a||a===0){l+=a}l+="\n                "
return l}function b(s,n){return'style="display:none"'}function M(s,n){return'style="display:none"'}a+='<div class="discussion-list">\n    '
r=e.hideHeader
t=r||n.hideHeader
o=e.unless
u=c.program(1,m,l)
u.hash={}
u.fn=u
u.inverse=c.noop
t=o.call(n,t,u)
if(t||t===0){a+=t}a+='\n    <div class="discussion-list-content">\n        '
r=e.questions
t=r||n.questions
o=e["if"]
u=c.program(8,q,l)
u.hash={}
u.fn=u
u.inverse=c.noop
t=o.call(n,t,u)
if(t||t===0){a+=t}a+="\n    </div>\n\n    "
a+='\n    <input type="button"\n           class="simple-button discussion-list-more"\n           '
r=e.questions
t=r||n.questions
o=e.unless
u=c.program(11,b,l)
u.hash={}
u.fn=u
u.inverse=c.noop
t=o.call(n,t,u)
if(t||t===0){a+=t}a+="\n           "
r=e.questions
t=r||n.questions
t=t===null||t===undefined||t===false?t:t.isComplete
o=e["if"]
u=c.program(13,M,l)
u.hash={}
u.fn=u
u.inverse=c.noop
t=o.call(n,t,u)
if(t||t===0){a+=t}a+='\n           value="'
r=e.showMore
t=r||n.showMore
if(typeof t===h){t=t.call(n,{hash:{}})}else if(t===p){t=f.call(n,"showMore",{hash:{}})}a+=d(t)+'"\n           data-show-more="'
r=e.showMore
t=r||n.showMore
if(typeof t===h){t=t.call(n,{hash:{}})}else if(t===p){t=f.call(n,"showMore",{hash:{}})}a+=d(t)+'">\n</div>\n'
return a})
function wrapped_template(s,n){return absoluteLinks.makeHtmlLinksSafe(template(s,n))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/discussion-list-profile-widget.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(n,s,e,i,t){e=e||n.helpers
i=i||n.partials
var a="",l,o,r,u,c=this,f="function",p=e.helperMissing,h=void 0,d=this.escapeExpression,v=e.blockHelperMissing
function m(n,s){var i="",t,a
i+='\n    <h4 class="profile-widget-section-header">\n        '
i+='\n        <a href="'
r=e.titleUrl
t=r||n.titleUrl
if(typeof t===f){t=t.call(n,{hash:{}})}else if(t===h){t=p.call(n,"titleUrl",{hash:{}})}i+=d(t)+'">'
r=e.title
t=r||n.title
if(typeof t===f){t=t.call(n,{hash:{}})}else if(t===h){t=p.call(n,"title",{hash:{}})}i+=d(t)+'</a>\n\n        <span class="discussion-list-count" style="display:none;">\n            '
r=e["_"]
t=r||n["_"]
u=c.program(2,g,s)
u.hash={}
u.fn=u
u.inverse=c.noop
if(r&&typeof t===f){t=t.call(n,u)}else{t=v.call(n,t,u)}if(t||t===0){i+=t}i+="\n        </span>\n\n        "
r=e.sorts
t=r||n.sorts
a=e["if"]
u=c.program(4,y,s)
u.hash={}
u.fn=u
u.inverse=c.noop
t=a.call(n,t,u)
if(t||t===0){i+=t}i+="\n    </h4>\n    "
return i}function g(n,s){var i="",t
i+='(<span class="discussion-list-count-value">'
r=e.count
t=r||n.count
if(typeof t===f){t=t.call(n,{hash:{}})}else if(t===h){t=p.call(n,"count",{hash:{}})}i+=d(t)+"</span> total)"
return i}function y(n,s){var t="",a
t+='\n            <span class="discussion-list-sort">\n                '
a=n
a=c.invokePartial(i.discussion_sorts,"discussion_sorts",a,e,i)
if(a||a===0){t+=a}t+="\n            </span>\n        "
return t}function q(n,s){var i="",t,a
i+="\n                "
r=e.questions
t=r||n.questions
t=t===null||t===undefined||t===false?t:t.questions
a=e.each
u=c.program(7,_,s)
u.hash={}
u.fn=u
u.inverse=c.noop
t=a.call(n,t,u)
if(t||t===0){i+=t}i+="\n        "
return i}function _(n,s){var t="",a
t+="\n                    "
a=n
a=c.invokePartial(i.discussion_thread,"discussion_thread",a,e,i)
if(a||a===0){t+=a}t+="\n                "
return t}function k(n,s){return'style="display:none"'}function b(n,s){return'style="display:none"'}function H(n,s){return"Show more comments"}a+='\n<div class="discussion-list">\n    '
r=e.hideHeader
l=r||s.hideHeader
o=e.unless
u=c.program(1,m,t)
u.hash={}
u.fn=u
u.inverse=c.noop
l=o.call(s,l,u)
if(l||l===0){a+=l}a+='\n    <div class="discussion-list-content">\n        '
r=e.questions
l=r||s.questions
o=e["if"]
u=c.program(6,q,t)
u.hash={}
u.fn=u
u.inverse=c.noop
l=o.call(s,l,u)
if(l||l===0){a+=l}a+="\n    </div>\n\n    "
a+='\n    <input type="button"\n           class="simple-button discussion-list-more"\n           '
r=e.questions
l=r||s.questions
o=e.unless
u=c.program(9,k,t)
u.hash={}
u.fn=u
u.inverse=c.noop
l=o.call(s,l,u)
if(l||l===0){a+=l}a+="\n           "
r=e.questions
l=r||s.questions
l=l===null||l===undefined||l===false?l:l.isComplete
o=e["if"]
u=c.program(11,b,t)
u.hash={}
u.fn=u
u.inverse=c.noop
l=o.call(s,l,u)
if(l||l===0){a+=l}a+='\n           value="'
r=e["_"]
l=r||s["_"]
u=c.program(13,H,t)
u.hash={}
u.fn=u
u.inverse=c.noop
if(r&&typeof l===f){l=l.call(s,u)}else{l=v.call(s,l,u)}if(l||l===0){a+=l}a+='">\n</div>\n'
return a})
function wrapped_template(n,s){return absoluteLinks.makeHtmlLinksSafe(template(n,s))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/discussion.js", function(require, module, exports) {
var guiders=require("../../third_party/javascript-khansrc/Guiders-JS/guiders.js")
require("../../third_party/javascript-khansrc/jquery-expander/jquery.expander.js")
require("../../third_party/javascript-khansrc/jquery-placeholder/jquery.placeholder.js")
require("../../third_party/javascript-khansrc/jquery-timeago/jquery.timeago.js")
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
var $=require("jquery")
var _=require("underscore")
var absoluteLinks=require("../shared-package/absolute-links.js")
var i18n=require("../shared-package/i18n.js")
var Analytics=require("../shared-package/analytics.js")
var DiscussionNote=require("./discussion-note.js")
var DiscussionProfilePromo=require("./discussion-profilepromo.js")
var DiscussionVoting=require("./discussion-voting.js")
var KA=require("../shared-package/ka.js")
var parseQueryString=require("../shared-package/parse-query-string.js")
var Throbber=require("../old-throbber-package/throbber.js")
var Discussion={_registered:false,_minHeight:200,init:function(i,e,s){this.data=i
this._currentTab=null
if(this.data.container==null){this.data.container=".video-discussion"}this.data.$container=$(this.data.container)
this.data.$container.find(".login-link").attr("href","/login?continue="+encodeURIComponent(this.data.url))
if(KA.language!=="en"){var t=absoluteLinks.safeLinkTo("http://en.khanacademy.org"+window.location.pathname)
this.data.$container.find(".discussion-i18n-message").attr("href",t).show()}if(!i.preloaded){this.data.$container.find(".discussion-progress-bar").show()}this.initObjects()
var n=require("./clarifications.js")
n._fetch(e)
if(this.data.which==="video-questions"||this.data.which==="article-questions"||this.data.which==="scratchpad-questions"){_(this.tabOb).chain().keys().each(function(e){if(!i.preloaded||e!=="questions"){Discussion.tabOb[e].reset()}})
var a="questions"
if(this.data.expandFeedbackType){a=this.data.expandFeedbackType}else if(this._getTabForHash()){a=this._getTabForHash()}else if(this.data.showDocumentation){a="documentation"}Discussion._switchType(a)}if(this._registered&&!this.data.reset){return}this._registered=true
var o=require("./moderation.js")
o.init()
DiscussionVoting.init(this.data.$container)
DiscussionNote.init()
_(this.feedbackOb).each(_.bind(function(i){if(i.init){i.init(this.data.$container)}},this))
if(!s){this.data.$container.on("click",".tabitem a",function(i){Discussion.switchTab(this)})
this.data.$container.on("click","[data-tab-target]",function(i){Discussion._switchType($(this).data("tab-target"))})
this.data.$container.on("click",".discussion-list-sort a",function(i){Discussion.sort(this)})
this.data.$container.on("click",".show-formatting-tips",function(i){Discussion.toggleFormattingTips(Discussion.getParent(this))
i.preventDefault()})
this.data.$container.on("click",".discussion-submit",this.submit).on("click",".discussion-cancel",this.cancel).on("focus",".discussion-text:not(.eval-text)",this.focus)
this.data.$container.on("click",".post-feedback-instead",this.addFeedback).on("click",".ask-question-instead",this.askQuestion)
this.data.$container.add(".discussion-guidelines").on("click",".suggest-clarification",this._switchType.bind(this,"clarifications"))
if(this.data.$container.is(".all-questions, .mod-queue")){this.data.$container.on("click",".youTube, .modal-video",function(i){if(i.metaKey){return}var e=$(this),s,t
if(e.is(".youTube")){s=Math.max(0,e.data("seconds")-2)
t=e.parents(".thread").find(".modal-video")}else{s=null
t=e}require.async(["../video-legacy-package/modalvideo.js","package!video.css"],function(i){i.show({translatedTitle:t.data("translatedTitle"),translatedDescription:t.data("translatedDescription"),relative_url:t.attr("href"),youtubeId:t.data("youtubeId"),translatedYoutubeId:t.data("translatedYoutubeId"),timestamp:s,topicSlug:Discussion.data.topicSlug})})
return false})}$(window).on("hashchange",this._handleHashUpdate.bind(this))
this.data.$container.on("click",".expand-discussions-button",this.toggleDiscussions.bind(this))}delete i["preloaded"]},initObjects:function(){var i=require("./discussion-answers.js")
var e=require("./clarifications.js")
var s=require("./discussion-comments.js")
var t=require("./documentation.js")
var n=require("./guidelines.js")
var a=require("./discussion-projectfeedback.js")
var o=require("./discussion-questions.js")
var r=require("./discussion-replies.js")
var c=require("./report-a-mistake.js")
var u=require("./spinoffs.js")
if(this.tabOb&&this.feedbackOb){return}this.tabOb={questions:o,comments:s,"spin-offs":u,documentation:t,clarifications:e,projectfeedback:a,guidelines:n,reportamistake:c}
this.feedbackOb={question:o,answer:i,comment:s,reply:r,scratchpad:{},clarification:{},projecthelp:{},projectcritique:{}}},checkCollectionStatus:function(i,e,s,t){if(!i._loadComplete){return}if(i._component){var n=i._component.state.collection
if(n.length>0||t){s()}else{n.on("sync",function(){if(n.length>0||t){s()}})}}else if(i.list&&!i.list.isEmpty()||t){s()}clearInterval(e)},maybeShowTab:function(i,e,s){if(i===this._currentTab){return}var t=this.tabOb[i]
var n=setInterval(function(){this.checkCollectionStatus(t,n,function(){if(!t.shouldShowTab||t.shouldShowTab()){$(t._tabHeaderSelector).show()}if(e){e()}},s)}.bind(this),100)
$(t._tabHeaderSelector).hide()
this.checkCollectionStatus(t,n,undefined,s)
if(!t._loadComplete){t.load()}},_getTabForHash:function(){if(window.location.hash==="#projectcritique"||window.location.hash==="#projecthelp"){return"projectfeedback"}return null},_handleHashUpdate:function(){var i=this._getTabForHash()
if(i){this._switchType(i)}},_finishLoad:function(i,e){if(i){var s=Discussion.getFeedbackFromKey(i)
if(s.length!==0){var t=require("./discussion-replies.js")
if(s.hasClass("comment")){Discussion._switchType("comments")
Discussion.highlight(s,"success")}else{var n=s.parents(".thread")
Discussion.highlight(n,"success")
n.find(".show-answer-links").hide().end().find(".hidden-answers").show()
if(!Discussion.hasAnswered(s)){n.find(".add-answer").show()}}if((t.getReplyCount(i)||s.hasClass("answer"))&&!this.data.isSeoLandingPage){t.toggle(i,true)}$("html, body").animate({scrollTop:s.offset().top-10})}Discussion.data.qaExpandKey=null}var a=parseQueryString()
if(i&&a.mute==="1"){Discussion.showNotificationTogglePopup(i,false)}if(e&&e.type==="question"){var o=e.feedback.length
if(o===0){this.data.$container.addClass("discussions-expanded")}else{this.data.$container.find(".expand-discussions-button .questions-count").text("("+o+")")}}Discussion._refreshHeight()
Discussion._enablePlaceholders()
Discussion.hideProgressBar()
$(KA).trigger("contentLoaded")},_refreshHeight:function(){var i=this.data.$container.height()
if(i>Discussion._minHeight){Discussion._minHeight=i
this.data.$container.css("min-height",i)}},_translateFeedbackType:function(i){if(i==="question"){return i18n._("question")}else if(i==="answer"){return i18n._("answer")}else if(i==="comment"){return i18n._("post")}else if(i==="reply"){return i18n._("comments")}else if(i==="scratchpad"){return i18n._("scratchpad")}else{return i18n._("post")}},sort:function(i){var e=$(i)
if(e.hasClass("selected")){return}Discussion.showProgressBar()
e.addClass("selected").siblings().removeClass("selected")
this.tabOb[this._currentTab].sort(e.data("value"))
Analytics.trackSingleEvent("Changed Video Discussion's Tab Sort")},switchTab:function(i){var e=$(i).parents(".tabitem"),s=e.data("type")
return this._switchType(s)},_switchType:function(i){if(i===this._currentTab){return $.Deferred().resolve().promise()}return function(){var e=$.Deferred()
if(i==="clarifications"){$(".video-discussion-header [data-type=clarifications]").fadeIn("fast",e.resolve)}else{e.resolve()}return e}().done(function(){Discussion.showProgressBar()
this._currentTab=i
Discussion._showTabBody(i)
Discussion._showTabSorts(i)
Analytics.trackSingleEvent("Changed Video Discussion's Tab")}.bind(this))},_showTabBody:function(i){var e
_(this.tabOb).chain().keys().each(function(t){s=Discussion.tabOb[t]
if(t===i){e=s.sortValue
s.show()}else{s.hide()}})
this.data.$container.parent().toggleClass("nosidebar",i==="spin-offs"||i==="documentation"||i==="guidelines"||i==="reportamistake")
this.data.$container.parent().toggleClass("nouserforks",i!=="spin-offs")
var s=".tabitem[data-type="+i+"]"
this.data.$container.find(s).addClass("selected").siblings().removeClass("selected")},_showTabSorts:function(i){var e=this.tabOb[i],s=this.data.$container.find(".discussion-list-sort")
if(e.list){var t=require("./sorts.handlebars")
s.html(t({sorts:e.list.sorts}))}else{s.empty()}},getKey:function(i){return i.attr("id")},getFeedbackFromKey:function(i){return $("#"+i)},getParent:function(i){return $(i).parent().closest([".reply",".answer",".question",".comment",".scratchpad-vote",".clarification"].join(","))},getParentType:function(i){return Discussion._getFeedbackType(Discussion.getParent(i))},_getFeedbackType:function(i){var e=_(Discussion.feedbackOb).chain().keys().find(_(i.hasClass).bind(i)).value()
return e||null},focus:function(){var i=require("./duplicate-notice.js")
var e=Discussion.getParent(this)
i.removeAll(e)
var s=Discussion._getFeedbackType(e)
if(DiscussionNote.checkAndPromptLogin(this,s,true)){return false}var t=e.parent()
if(t.hasClass("ask-question")||t.hasClass("post-feedback")||t.hasClass("officialClarificationView")){Discussion._revealGuidelines(t)
Discussion._startEditing(e,true)}else{Discussion._startEditing(e)}DiscussionProfilePromo.check()},focusWithoutScrolling:function(i){var e=window.scrollX,s=window.scrollY
i.focus()
window.scrollTo(e,s)},_revealGuidelines:function(i){if(i.parents(".scratchpad-wrap-outer").length){i.find("[href*=reportissue]").attr("href","/r/computer-programming-report")}if(window.location.pathname.indexOf("computer-programming")>-1||window.location.pathname.indexOf("hour-of-code")>-1){i.find(".no-homework").hide()
i.find(".check-the-faq").show()}else{i.find(".no-homework").show()
i.find(".check-the-faq").hide()}i.find(".post-guidelines").slideDown(function(){Discussion.scrollDownToReveal(i)})},scrollDownToReveal:function(i){var e=10
var s=i.offset().top+i.height()+e
var t=$(window)
if(t.scrollTop()<i.offset().top&&t.scrollTop()+t.height()<s){var n=s-t.height()
if(t.height()<i.height()){n=i.offset().top}$("body, html").animate({scrollTop:n+"px"})}},edit:function(i){var e=Discussion.getParent(i)
if(!e.length){return}e.addClass("discussion-edit")
var s=$(".discussion-content:first",e)
s.expander("destroy")
var t=s.html()
t=t.replace(/<em>(.*?)<\/em>/g,function(i,e){return"_"+e+"_"})
t=t.replace(/<b>(.*?)<\/b>/g,function(i,e){return"*"+e+"*"})
t=t.replace(/<pre><code>(.*?)<\/code><\/pre>/g,function(i,e){return"```\n"+e+"\n```"})
t=t.replace(/<code>(.*?)<\/code>/g,function(i,e){return"`"+e+"`"})
var n=/<br>/gi
t=t.replace(n,"\n")
var a=$("<div>").html(t)
var o=a.text()
var r=$("<textarea>",{"class":"discussion-text open"})
r.css("height",s.height()+8)
r.val($.trim(o))
s.hide().after(r)
$(".from-video-author",e).hide()
$(".discussion-scratchpad-thumbnail",e).hide()
$(".discussion-embed-video",e).hide()
_.defer(function(){r.focus()})
Discussion._showControls(e)
$(".discussion-meta:first",e).hide()},showNotificationTogglePopup:function(i,e){var s=Discussion.getFeedbackFromKey(i)
var t=s.find(".mute")
var n=t.length>0?t:s
var a="notificationPopup-"+i
$("#"+a).remove()
var o=e?i18n._("Notifications for this question are ON"):i18n._("Notifications for this question are OFF")
var r='<span class="guider-title-smaller">\n            '+o+"</span>"
var c={buttons:[],attachTo:n,highlight:n,position:6,offset:{left:0,top:-15},title:r,description:"",overlay:false,width:400,id:a,xButton:true}
guiders.createGuider(c).show()
$("#"+a).find(".close-button").on("click",function(){guiders.hideAll()})
function u(){return $("#"+a).find(".guider_description")}var d="/settings/email"
$.getJSON("/api/internal/user/subscription/answer_notifications").done(function(i){if(i.subscribed){if(e){u().html(i18n._("<a href='%(emailSettingsUrl)s'>Email\n                                   notifications</a> are currently enabled.",{emailSettingsUrl:d}))}else{u().html(i18n._("<a href='javascript:void(0);'>\n                                Disable email notifications for all your\n                                questions.</a>")).on("click","a",function(){Discussion._toggleAnswerNotificationEmails(i.token,false)
u().html(i18n._("<a href='%(emailSettingsUrl)s'>Email\n                                           notifications</a> are now disabled.",{emailSettingsUrl:d}))})}}else{if(e){u().html(i18n._("<strong>\n                                <a href='javascript:void(0);'>Enable email\n                                notifications for your questions.</a>\n                                </strong>")).on("click","a",function(){Discussion._toggleAnswerNotificationEmails(i.token,true)
u().html(i18n._("<a href='%(emailSettingsUrl)s'>Email\n                                           notifications</a> are now enabled.",{emailSettingsUrl:d}))})}else{u().html(i18n._("<a href='%(emailSettingsUrl)s'>Email\n                                   notifications</a> are already disabled.",{emailSettingsUrl:d}))}}}).fail(function(i){if(i.status===401){u().html(i18n._("<a href='%(emailSettingsUrl)s'>Log in to\n                               manage your email notification settings.</a>",{emailSettingsUrl:d}))}})},_toggleAnswerNotificationEmails:function(i,e){$.ajax({type:e?"PUT":"DELETE",url:"/api/internal/user/subscription/"+i})},submit:function(){var i=Discussion.getParentType(this)
Discussion.feedbackOb[i]._onSubmit(this)},_onSubmit:function(i,e){Discussion._showThrobber(e)
Discussion._disableControls(e)},_onSubmitSuccess:function(i,e,s,t){if(i==="question"||i==="answer"){var n=require("./low-quality-notice.js")
if(n.init(i,e,s,t)){Discussion._hideThrobber(e)
Discussion._enableControls(e)
return false}}Discussion._stopEditing(e,i==="answer"&&!t)
Discussion._trackAddFeedbackEvent(i,t,s["lowQualityScore"],s["appearsAsDeleted"],s["authorKaid"])
return true},setHasAnswered:function(i,e){i.parents(".thread").toggleClass("has-answered",e)},hasAnswered:function(i){return i.parents(".thread").hasClass("has-answered")},toggleFormattingTips:function(i){if(!i.find(".formatting-tips-container").length){var e=require("./formatting-tips.handlebars")
i.find(".discussion-controls").append(e({}))}i.find(".formatting-tips-container").slideToggle(300)},cancel:function(){return Discussion._cancel(Discussion.getParent(this))},_cancel:function(i){var e=require("./low-quality-notice.js")
i.removeClass("discussion-edit")
if(!Discussion.getKey(i)){Discussion._stopEditing(i)}else{$(".from-video-author",i).show()
$(".discussion-scratchpad-thumbnail",i).show()
$(".discussion-embed-video",i).show()
$(".discussion-content",i).show()
$(".discussion-meta",i).show()
$(".discussion-text:first",i).remove()
Discussion._enableControls(i)
Discussion._hideControls(i)}e.hide(i)
return false},addFeedback:function(i){Discussion._cancel($(".ask-question .question"))
$(".ask-question .question-guidelines").promise().done(function(){Discussion._switchType("comments")
$(".post-feedback .discussion-text").focus()})
return false},askQuestion:function(i){Discussion._cancel($(".post-feedback .comment"))
$(".post-feedback .feedback-guidelines").promise().done(function(){Discussion._switchType("questions")
$(".ask-question .discussion-text").focus()})
return false},remove:function(i){var e=Discussion.getParent(i)
if(e.hasClass("question")){var s=e.parent(".thread")
if(s.length>0){e=s}}e.delay(100).animate({height:0,opacity:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0},300,function(){e.remove()})},prependFeedback:function(i,e){return i.find(".timeago").timeago().end().prependTo(e)},appendFeedback:function(i,e){return i.find(".timeago").timeago().end().appendTo(e)},replaceFeedback:function(i,e){e.find(".timeago").timeago()
i.replaceWith(e)},sendRequest:function(i,e,s,t,n){i+="?casing=camel"
$.ajax({type:e,url:i,contentType:"application/json",data:s,dataType:"json",success:t,error:n})},getSanitizedText:function(i){var e=$(".discussion-text",i)
if(e.length===0){return false}var s=$.trim(e.val())
if(s===""||s===e.data("placeholder")){return false}return s},_enablePlaceholders:function(){this.data.$container.find(".discussion-text").placeholder()},_hidePlaceholder:function(i){var e=i.attr("placeholder")
if(e){i.data("placeholder",e)}i.attr("placeholder","")},_showPlaceholder:function(i){i.attr("placeholder",i.data("placeholder"))},_showControls:function(i,e){var s=$(".discussion-controls:first",i)
s.slideDown(100).promise().done(function(){if(!e){Discussion.scrollDownToReveal(s)}})},_hideControls:function(i){$(".discussion-controls:first",i).hide()},_enableControls:function(i){$(".discussion-text",i).removeAttr("disabled")
$(".discussion-submit",i).removeAttr("disabled")},_disableControls:function(i){$(".discussion-text",i).attr("disabled","disabled")
$(".discussion-submit",i).attr("disabled","disabled")},_showThrobber:function(i){Throbber.show(i.find(".discussion-cancel"),true)},_hideThrobber:function(i){Throbber.hide(i.find(".discussion-cancel"),true)},_startEditing:function(i,e){var s=$(".discussion-text:first",i)
Discussion._hidePlaceholder(s)
s.addClass("open")
Discussion._showControls(i,e)
$(".questions-fader").hide()},_stopEditing:function(i,e){Discussion._hideThrobber(i)
Discussion._hideControls(i)
if(e){Discussion.setHasAnswered(i,true)}Discussion._enableControls(i)
var s=$(".discussion-text:first",i)
Discussion._showPlaceholder(s)
s.val("").removeClass("open").css("height","").blur()
var t=i.parent()
if(t.hasClass("ask-question")||t.hasClass("post-feedback")||t.hasClass("officialClarificationView")){t.find(".post-guidelines").slideUp()}else if(i.hasClass("reply")){var n=require("./discussion-replies.js")
n.normalBlur(i)}},highlight:function(i,e){i.addClass("highlight")
i.switchClass("",e+"-highlight",400)},unhighlight:function(i,e){i.switchClass(e+"-highlight","",400)},_trackAddFeedbackEvent:function(i,e,s,t,n){Analytics.trackSingleEvent("Added Feedback",{"Feedback Type":i,"Post Type":e?"Edit":"New","Low-Quality Score":s,"Appears as deleted":t,"Author's kaid":n})},showProgressBar:function(){if(this.data){this.data.$container.find(".discussion-progress-bar").show()}},hideProgressBar:function(){if(this.data){this.data.$container.find(".discussion-progress-bar").hide()}},transformFeedback:function(i){_.extend(i,{isQuestion:i.type==="question",isAnswer:i.type==="answer",isComment:i.type==="comment",isReply:i.type==="reply",isScratchpad:i.type==="scratchpad",isClarification:i.type==="clarification",isProjectEval:i.type==="projecteval",isProjectEvalAnswer:i.type==="projectevalanswer"})
if(!i.isReply&&!i.isScratchpad){i.expandKey=i.key}if(i.isScratchpad){i.focus={relativeUrl:i.relativeUrl,title:i.title}
i.type="program"
i.key=i.strKey}else if(i.isClarification||i.isProjectEval||i.isProjectEvalAnswer){}else{if(Discussion.feedbackOb[i.type].transform){i=Discussion.feedbackOb[i.type].transform(i)}Discussion._embedScratchpadImage(i)}var e=KA.getUserProfile()
i.showModControls=e&&e.get("isModerator")
i.isDeveloper=Discussion.data.isDeveloper
i.restrictPosting=Discussion.data.restrictPosting
return i},_embedYoutubeVideo:function(i){if(!i.fromVideoAuthor||KA.isZeroRated){return}var e=/\bhttps?:\/\/(?:www\.youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)\b/g,s=e.exec(i.content),t=s&&s[1]
if(t){i.embedVideoUrl="https://www.youtube.com/embed/"+t+"?hl="+KA.languageYoutube+"&cc_lang_pref="+KA.languageYoutube}},_embedScratchpadImage:function(i){var e=/\/(?:cs|computer-programming)\/[^\/]+\/(\d+)\b/g
var s=e.exec(i.content)
var t=s&&s[1]
if(t){$.ajax({url:"/api/internal/scratchpads/"+t,data:{projection:JSON.stringify({url:1,imageUrl:1,translatedTitle:1})}}).then(function(e){var s=i.key
var t=$("#"+s+" .discussion-content")
$("#"+s+" .discussion-scratchpad-thumbnail").remove()
var n=require("./scratchpad-thumbnail.handlebars")
var a=$(n({showPath:e.url,imagePath:e.imageUrl,translatedTitle:e.translatedTitle}))
a.insertBefore(t)})}},toggleDiscussions:function(i){i.preventDefault()
this.data.$container.toggleClass("discussions-expanded")}}
module.exports=Discussion
});
KAdefine("javascript/discussion-package/discussion-questions.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jquery-migrate/jquery-migrate-1.1.1.js")
require("../../third_party/javascript-khansrc/jquery-placeholder/jquery.placeholder.js")
var $=require("jquery")
var _=require("underscore")
var Analytics=require("../shared-package/analytics.js")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionList=require("./discussion-list.js")
var DiscussionLowQualityNotice=require("./low-quality-notice.js")
var DiscussionProfilePromo=require("./discussion-profilepromo.js")
var DiscussionQuestions={_loadComplete:false,_containerSelector:".questions",_tabSelector:".questions-tab",_tabHeaderSelector:"#questions-tab-header",_askQuestionSelector:".discussion-container.new-ask-question-ui "+".ask-question-container",init:function(s){s.on("click",".show-hidden-answers",function(){DiscussionQuestions.showHiddenAnswers($(this).parents(".thread"))}).on("click",".show-answer-form",function(){DiscussionQuestions.showHiddenAnswers($(this).parents(".thread"),true)})},_onSubmit:function(s){var e=$(s),i=Discussion.getParent(e)
var n=Discussion.getKey(i)
var t=Discussion.getSanitizedText(i)
if(!t){return false}var o=JSON.stringify({text:t,shownLowQualityNotice:DiscussionLowQualityNotice.exists(i),topic_slug:Discussion.data.topicSlug})
var a=i.parents(".thread").data("focusId")||Discussion.data.focusId
var r=i.parents(".thread").data("focusKind")||Discussion.data.focusKind
var u="/api/internal/discussions/"+r+"/"+a+"/questions",c="POST"
if(n){u+="/"+n
c="PUT"}Discussion.sendRequest(u,c,o,function(s){DiscussionQuestions._onSubmitSuccess(s,i)})
Discussion._onSubmit("question",i)
if(window.ga){window.ga("send","event","Learning-Action","Question-Added")}},_onSubmitSuccess:function(s,e){var i=s["key"],n=Discussion.getFeedbackFromKey(i),t=n.length>0
if(!Discussion._onSubmitSuccess("question",e,s,t)){return}s=Discussion.transformFeedback(s)
if(!t){var o=require("./thread.handlebars")
DiscussionProfilePromo.show(s,true)
var a=$(o(s))
Discussion.prependFeedback(a,$(this._containerSelector+" .discussion-list-content"))
$(".discussion-text",a).placeholder()}else{var o=require("./question.handlebars")
Discussion.replaceFeedback(n,$(o(s)))}},show:function(){this.load()
$(this._tabSelector).show()
$(this._askQuestionSelector).show()},hide:function(){$(this._tabSelector).hide()
$(this._askQuestionSelector).hide()},load:function(){if(this._loadComplete){Discussion.hideProgressBar()
return}var s
if(Discussion.data.expandFeedbackType==="questions"){s=Discussion.data.qaExpandKey}var e="/api/internal/discussions/"+Discussion.data.focusKind+"/"+Discussion.data.focusId+"/questions",i={casing:"camel",qa_expand_key:s}
this.list=new DiscussionList({hideHeader:true,requestURL:e,itemTemplate:require("./thread.handlebars"),containerSelector:this._containerSelector,params:i,sortValue:this.sortValue,onInitialFetch:_.bind(function(s){this._finishLoad(s)},this),onFetchComplete:_.bind(function(s){Discussion._enablePlaceholders()
if(s.isComplete){this.list.setComplete(true)}},this),preRenderTransformData:this.transformDataBeforeRender,preloaded:Discussion.data.preloaded})
if(Discussion.data.preloaded){this._finishLoad(Discussion.data)}},_finishLoad:function(s){DiscussionQuestions._loadComplete=true
Discussion._finishLoad(s.qaExpandKey,s)},transformDataBeforeRender:function(s){_.each(s,Discussion.transformFeedback)
return s},transform:function(s){s.expandKey=s.key
var e=s.answers.length
s.answerCount=e
if(e>0){s.expandedAnswers=[s.answers[0]]
s.answers.shift()
if(e>1){s.hasHiddenAnswers=true}}_.each(s.expandedAnswers,Discussion.transformFeedback)
_.each(s.answers,Discussion.transformFeedback)
return s},sort:function(s){this.sortValue=s
this.reset()
this.load()},reset:function(){this._loadComplete=false
$(this._containerSelector).html("")},showHiddenAnswers:function(s,e){s.find(".show-answer-links").hide().end().find(".hidden-answers").show()
var i=s.find(".add-answer")
i.show()
if(e){var n=$(".discussion-text",i)
Discussion.focusWithoutScrolling(n)}else{Discussion.scrollDownToReveal(s)}Analytics.trackSingleEvent("Expanded Hidden Answers in Video Discussion")}}
module.exports=DiscussionQuestions
});
KAdefine("javascript/discussion-package/discussion-answers.js", function(require, module, exports) {
var $=require("jquery")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionDuplicateNotice=require("./duplicate-notice.js")
var DiscussionLowQualityNotice=require("./low-quality-notice.js")
var DiscussionProfilePromo=require("./discussion-profilepromo.js")
var DiscussionAnswers={init:function(s){DiscussionDuplicateNotice.init(s)},_onSubmit:function(s){var i=$(s),e=Discussion.getParent(i),n=$(".question",e.parents(".thread"))
var o=Discussion.getKey(n)||e.data("questionKey"),u=Discussion.getKey(e)
var r=Discussion.getSanitizedText(e)
if(!r){return false}var t=JSON.stringify({text:r,shownLowQualityNotice:DiscussionLowQualityNotice.exists(e),fromVideoAuthor:e.find(".from-video-author").is(":checked"),topic_slug:Discussion.data.topicSlug})
DiscussionDuplicateNotice.removeAll(n)
if(!u&&DiscussionDuplicateNotice.show(r,e)){Discussion.cancel.call(i)
return}var c="/api/internal/questions/"+o+"/answers",a="POST"
if(u){c+="/"+u
a="PUT"}Discussion.sendRequest(c,a,t,function(s){DiscussionAnswers._onSubmitSuccess(s,e)})
Discussion._onSubmit("answer",e)
if(window.ga){window.ga("send","event","Learning-Action","Answer-Added")}},_onSubmitSuccess:function(s,i){var e=s["key"],n=Discussion.getFeedbackFromKey(e),o=n.length>0
if(!Discussion._onSubmitSuccess("answer",i,s,o)){return}Discussion.setHasAnswered(i,true)
s=Discussion.transformFeedback(s)
var u=require("./answer.handlebars"),r=$(u(s))
DiscussionProfilePromo.show(s,false)
if(!o){var t=Discussion.getFeedbackFromKey(s["questionKey"]).parents(".thread").find(".answers")
t.removeClass("with-no-answers")
Discussion.appendFeedback(r,t)}else{Discussion.replaceFeedback(n,r)}},transform:function(s){Discussion._embedYoutubeVideo(s)
return s}}
module.exports=DiscussionAnswers
});
KAdefine("javascript/discussion-package/discussion-comments.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionList=require("./discussion-list.js")
var DiscussionComments={_loadComplete:false,sortValue:1,_containerSelector:".comments",_tabSelector:".comments-tab",_tabHeaderSelector:"#comments-tab-header",_onSubmit:function(s){var e=$(s),i=Discussion.getParent(e)
var t=Discussion.getKey(i)
var n=Discussion.getSanitizedText(i)
if(!n){return false}var o=JSON.stringify({text:n,topic_slug:Discussion.data.topicSlug})
var a=i.data("focusId")||Discussion.data.focusId
var c=i.data("focusKind")||Discussion.data.focusKind
var r="/api/internal/discussions/"+c+"/"+a+"/comments",u="POST"
if(t){r+="/"+t
u="PUT"}Discussion.sendRequest(r,u,o,function(s){DiscussionComments._onSubmitSuccess(s,i)})
Discussion._onSubmit("comment",i)},_onSubmitSuccess:function(s,e){var i=s["key"],t=Discussion.getFeedbackFromKey(i),n=t.length>0
if(!Discussion._onSubmitSuccess("comment",e,s,n)){return}s=Discussion.transformFeedback(s)
var o=require("./comment.handlebars"),a=$(o(s))
if(!n){Discussion.prependFeedback(a,$(this._containerSelector+" .discussion-list-content"))}else{Discussion.replaceFeedback(t,a)}},show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},load:function(){if(this._loadComplete){Discussion.hideProgressBar()
return}var s
if(Discussion.data.expandFeedbackType==="comments"){s=Discussion.data.qaExpandKey}var e="/api/internal/discussions/"+Discussion.data.focusKind+"/"+Discussion.data.focusId+"/comments",i={casing:"camel",qa_expand_key:s}
this.list=new DiscussionList({hideHeader:true,requestURL:e,itemTemplate:require("./comment.handlebars"),containerSelector:this._containerSelector,params:i,sortValue:this.sortValue,onInitialFetch:_.bind(function(s){this._finishLoad(s)},this),onFetchComplete:_.bind(function(s){Discussion._enablePlaceholders()
if(s.isComplete){this.list.setComplete(true)}},this),preRenderTransformData:_.bind(function(s){return this.transformDataBeforeRender(s)},this)})},_finishLoad:function(s){DiscussionComments._loadComplete=true
Discussion._finishLoad(s.qaExpandKey)},transformDataBeforeRender:function(s){_.each(s,Discussion.transformFeedback)
return s},transform:function(s){Discussion._embedYoutubeVideo(s)
Discussion._embedScratchpadImage(s)
return s},sort:function(s){this.sortValue=s
this.reset()
this.load()},reset:function(){this._loadComplete=false
$(this._containerSelector).html("")}}
module.exports=DiscussionComments
});
KAdefine("javascript/discussion-package/discussion-replies.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jquery-placeholder/jquery.placeholder.js")
require("../../third_party/javascript-khansrc/jquery-timeago/jquery.timeago.js")
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
var i18n=require("../shared-package/i18n.js")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionNote=require("./discussion-note.js")
var DiscussionQuestions=require("./discussion-questions.js")
var DiscussionReplies={_slideRate:200,Model:Backbone.Model.extend({defaults:{content:""}}),View:Backbone.View.extend({initialize:function(){this.template=require("./reply.handlebars")},render:function(){this.el=this.template(this.model.toJSON())
return this}}),init:function(e){e.on("click",".toggle-replies",function(){var e=Discussion.getParent(this),s=Discussion.getKey(e)
DiscussionReplies.toggle(s)})},_onSubmit:function(e){var s=$(e),i=Discussion.getParent(s),n=Discussion.getSanitizedText(i),t=Discussion.getParent(i),o=Discussion.getKey(t)
if(!n){return false}var r="/api/internal/discussions/"+o+"/replies",l="POST",a=JSON.stringify({text:n,topic_slug:Discussion.data.topicSlug})
Discussion._onSubmit("reply",i)
Discussion.sendRequest(r,l,a,function(e){var s=DiscussionReplies._getRepliesContainer(o).find(".replies")
DiscussionReplies._render(e).css("opacity",0).appendTo(s).animate({opacity:1})
DiscussionReplies.incrementReplyCount(o)
Discussion._onSubmitSuccess("reply",i,e)},function(e){if(e.status===404){alert(i18n._("The question you are replying to has been deleted. "+"Please refresh the page."))}})},decrementReplyCount:function(e){DiscussionReplies._updateReplyCount(e,-1)},incrementReplyCount:function(e){DiscussionReplies._updateReplyCount(e,1)},_updateReplyCount:function(e,s){var i=DiscussionReplies._getToggleButton(e),n=DiscussionReplies.getReplyCount(e)
n+=s
i.data("replyCount",n)
if(n===0){i.text(i18n._("Comment"))}else{i.text(i18n.ngettext("%(num)s Comment","%(num)s Comments",n))}},transform:_.identity,toggle:function(e,s){var i=DiscussionReplies._getToggleButton(e)
if(i.hasClass("show-replies")){if(!i.data("hasFetched")){i.data("hasFetched",true)
DiscussionReplies._renderContainer(e,s)
DiscussionReplies._fetch(e)}else{DiscussionReplies._getRepliesContainer(e).slideDown(DiscussionReplies._slideRate,function(){DiscussionReplies._revealReplies(e)})}}else{DiscussionReplies._getRepliesContainer(e).slideUp(DiscussionReplies._slideRate)}i.toggleClass("show-replies").toggleClass("hide-replies")},_fetch:function(e){var s="/api/internal/discussions/"+e+"/replies"+"?casing=camel"
$.ajax({type:"GET",url:s,contentType:"application/json",dataType:"json",success:_.bind(DiscussionReplies._renderReplies,this,e)})},_replyFormTemplate:null,getReplyFormTemplate:function(){if(this._replyFormTemplate===null){this._replyFormTemplate=require("./reply-form.handlebars")}return this._replyFormTemplate},_repliesContainerTemplate:null,getRepliesContainerTemplate:function(){if(this._repliesContainerTemplate===null){this._repliesContainerTemplate=require("./replies-container.handlebars")}return this._repliesContainerTemplate},_renderContainer:function(e,s){var i=this.getReplyCount(e),n=this.getRepliesContainerTemplate(),t=n({replyCount:i}),o=$(t),r=o.find(".add-reply")
Discussion.getFeedbackFromKey(e).append(o)
o.find(".loading").slideDown(DiscussionReplies._slideRate).find(".discussion-item").delay(200).animate({opacity:1})
if(!Discussion.data.restrictPosting){if(i>20&&Discussion.data.which!=="scratchpad-questions"){r.hide()
r.append("<div class='replies-closed'>"+i18n._("Comments on this post are closed.")+"</div>")
return}var l=this.getReplyFormTemplate()
r.hide()
var a=r.append(l({})).find(".discussion-text")
var u=Discussion.getParentType(o)
if(DiscussionReplies._usesReplyAltInterface(r)){var c=DiscussionReplies._isOriginalAuthor(Discussion.getParent(r))
var p=r.find(".discussion-text-dummy")
$.each([a,p],function(){DiscussionReplies._setPlaceholder($(this),u,c)})
a.hide()
var d=r.find(".choose-reply-alt")
if(c){d.val(i18n._("Edit your %(parentType)s",{parentType:i18n._(u)}))
d.on("click",this.editParentPost)}else{d.val(i18n._("Answer this question"))
d.on("click",this.answerQuestion)}p.on("focus",this.normalFocus)
r.find(".reply-alt-controls").show()
if(i===0){r.slideDown(DiscussionReplies._slideRate)}}else{DiscussionReplies._setPlaceholder(a,u,false)
if(i===0){r.show()
if(!s){Discussion.focusWithoutScrolling(a)
Discussion.scrollDownToReveal(o)}}}}},_renderReplies:function(e,s){var i=this._getRepliesContainer(e),n=i.find(".replies"),t=i.find(".add-reply")
n.find(".loading").remove()
_.each(s,function(e){DiscussionReplies._render(e).appendTo(n).slideDown(DiscussionReplies._slideRate)})
t.slideDown(DiscussionReplies._slideRate,function(){DiscussionReplies._revealReplies(e)})},_render:function(e){var s=new DiscussionReplies.Model(Discussion.transformFeedback(e)),i=new DiscussionReplies.View({model:s})
return $(i.render().el).find(".timeago").timeago().end()},_revealReplies:function(e){var s=DiscussionReplies._getRepliesContainer(e)
Discussion.scrollDownToReveal(s)},editParentPost:function(){var e=Discussion.getParent(Discussion.getParent(this))
if(!e.hasClass("discussion-edit")){Discussion.edit(e.find(".discussion-content")[0])}},answerQuestion:function(){if(DiscussionNote.checkAndPromptLogin(this,"answer")){return}var e=Discussion.getParent(Discussion.getParent(this))
DiscussionReplies.toggle(Discussion.getKey(e))
DiscussionQuestions.showHiddenAnswers(e.parents(".thread"),true)},normalFocus:function(){if(DiscussionNote.checkAndPromptLogin(this,"reply",true)){return}var e=Discussion.getParent(this)
e.find(".reply-alt-controls").hide()
e.find(".discussion-text").show().focus()},normalBlur:function(e){if(DiscussionReplies._usesReplyAltInterface(e)){e.find(".reply-alt-controls").show()
e.find(".discussion-text").hide()}},_setPlaceholder:function(e,s,i){var n=""
if(s==="question"){if(i){n=i18n._("Comment on your question...")}else{n=i18n._("Suggest a way to improve this question...")}}else if(s==="comment"){if(i){n=i18n._("Comment on your tip/feedback...")}else{n=i18n._("Comment on this tip/feedback...")}}else if(s==="answer"){if(i){n=i18n._("Comment on your answer...")}else{n=i18n._("Comment on this answer...")}}e.attr("placeholder",n).placeholder()},_usesReplyAltInterface:function(e){var s=Discussion.getParent(e)
var i=Discussion.hasAnswered(s)
var n=Discussion.getParentType(e)
var t=DiscussionReplies._isOriginalAuthor(s)
return!!(t&&(n==="answer"||n==="question")||n==="question"&&!i)},_getRepliesContainer:function(e){return Discussion.getFeedbackFromKey(e).find(".replies-container")},_getToggleButton:function(e){return Discussion.getFeedbackFromKey(e).find(".toggle-replies")},getReplyCount:function(e){return DiscussionReplies._getToggleButton(e).data("replyCount")},_isOriginalAuthor:function(e){return e.hasClass("is-author")}}
module.exports=DiscussionReplies
});
KAdefine("javascript/discussion-package/discussion-voting.js", function(require, module, exports) {
var $=require("jquery")
var i18n=require("../shared-package/i18n.js")
var DiscussionNote=require("./discussion-note.js")
var DiscussionVoting={init:function(t){t.on("click keyup",".vote-for-js",DiscussionVoting.voteEntity).on("mouseover focus",".vote-for-js",DiscussionVoting._activateHover).on("mouseout blur",".vote-for-js",DiscussionVoting._deactivateHover)},voteEntity:function(t){if(t.keyCode){if(t.keyCode!==13&&t.keyCode!==32){return false}}if(DiscussionNote.checkAndPromptLogin(this,"vote")){return false}var e=$(this)
var o=e.data("voteType")
if(!o){return false}var s=e.data("key")
if(!s){return false}var i=e.is(".voted")
var n=e.parents(".comment, .answer, .question, .scratchpad-vote").first()
var r=n.find(".sum-votes")
$.post("/api/internal/discussions/voteentity",{entity_key:s,vote_type:i?0:o},function(t){DiscussionVoting.finishVoteEntity(t,e,n,r)})
var a=DiscussionVoting.clearVote(e,n,r)
a+=i?0:o
DiscussionVoting.setVoteCount(n,r,a)
r.addClass("sum-votes-changed")
if(!i){e.addClass("voted")
e.find(".kui-button .label1").text(i18n._("Voted Up!"))}e.removeClass("vote-hover")
return false},_activateHover:function(t){$(this).addClass("vote-hover")},_deactivateHover:function(t){$(this).removeClass("vote-hover")},setVoteCount:function(t,e,o){e.html(i18n.ngettext("1 <span class='vote-word'>Vote</span>","%(num)s <span class='vote-word'>Votes</span>",o))},clearVote:function(t,e,o){var s=parseInt(o.text(),10)
e.find(".vote-for.voted").each(function(){var e=$(this)
e.removeClass("voted")
s-=e.data("voteType")
t.find(".kui-button .label1").text(i18n._("Vote Up"))})
o.removeClass("sum-votes-changed")
DiscussionVoting.setVoteCount(e,o,s)
return s},finishVoteEntity:function(t,e,o,s){if(t&&t.error){DiscussionVoting.clearVote(e,o,s)
DiscussionNote.showInfo(e.get(0),t.error)}}}
module.exports=DiscussionVoting
});
KAdefine("javascript/discussion-package/clarifications.js", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var ReactDOM=require("react-dom")
var _=require("underscore")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionClarifications={_tabSelector:".clarifications-tab",_areaMount:null,_popupMount:null,_renderDeferred:$.Deferred(),_official:null,_suggested:null,_videoView:null,reset:function(){if(!this._loadComplete){return}if(this._areaMount){ReactDOM.unmountComponentAtNode(this._areaMount)}if(this._popupMount){ReactDOM.unmountComponentAtNode(this._popupMount)}this._loadComplete=false
this._renderDeferred=$.Deferred()
$(this._containerSelector).html("")},show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},load:function(){if(this._loadComplete){Discussion.hideProgressBar()
return}this._areaMount=$("<div>").appendTo(".clarifications-tab .clarifications")[0]
DiscussionClarifications._fetchSuggested()
$.when(DiscussionClarifications._renderDeferred).done(function(){ReactDOM.render(DiscussionClarifications._area,this._areaMount)
Discussion.hideProgressBar()
this._loadComplete=true
var i=DiscussionClarifications._suggested.get(Discussion.data.qaExpandKey)
if(i){i.set({highlight:"success",replyCountOpen:true})}}.bind(this))},_fetchSuggested:function(){if(!DiscussionClarifications._suggested){this._fetchWhenReady=true
return}function i(){DiscussionClarifications._renderDeferred.resolve(true)}DiscussionClarifications._suggested.fetch({success:i,error:i})},_fetch:function(i){var e=Discussion.data.focusKind==="article"
var s=!e&&!i
var a
if(s){var t=require.ifLoadedLegacy("../tutorial-package/tutorial-nav.js")
if(!t||typeof t.currentContext==="undefined"){return}a=_(t.currentContext.contentModels).find(function(i){return i.get("readableId")===Discussion.data.focusId})
i=i||a&&a.get("youtubeId")}if((i||a)&&Discussion.data.focusKind==="video"){var o=require.ifLoadedLegacy("../video-legacy-package/video-addons.js")
if(!o){return}var n=o.VideoViews
var r=n.getWhenReadyDeferred(i)
var c=$.Deferred()
var u=$.Deferred()
require.async(["../clarifications-package/models.jsx","../clarifications-package/official.jsx"],function(i,e){c.resolve(i)
u.resolve(e)})
$.when(r,c,u).done(function(i,e,s){DiscussionClarifications._videoView=i
DiscussionClarifications._official=new e.OfficialClarificationCollection([],{videoView:i})
DiscussionClarifications._official.fetch()
DiscussionClarifications._suggested=new e.SuggestedClarificationCollection([],{videoView:i})
if(Discussion.data.qaExpandKey||this._fetchWhenReady){DiscussionClarifications._fetchSuggested()}DiscussionClarifications._popupMount=$(".clarifications-container")[0]
var a=React.createFactory(s.ClarificationNotifications)
var t=a({collection:DiscussionClarifications._official,videoView:i})
ReactDOM.render(t,DiscussionClarifications._popupMount)
var o=React.createFactory(s.ClarificationArea)
DiscussionClarifications._area=o({videoView:i,official:DiscussionClarifications._official,suggested:DiscussionClarifications._suggested})})}else if(e){require.async(["../clarifications-package/models.jsx","../clarifications-package/official.jsx"],function(i,e){DiscussionClarifications._suggested=new i.SuggestedClarificationCollection([],{articleId:Discussion.data.focusId})
if(Discussion.data.qaExpandKey||this._fetchWhenReady){DiscussionClarifications._fetchSuggested()}var s=React.createFactory(e.ClarificationArea)
DiscussionClarifications._area=s({articleId:Discussion.data.focusId,suggested:DiscussionClarifications._suggested})})}}}
module.exports=DiscussionClarifications
});
KAdefine("javascript/discussion-package/discussion-projectfeedback.js", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var ReactDOM=require("react-dom")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionProjectFeedback={_loadComplete:false,_tabSelector:".projectfeedback-tab",subTab:"projectfeedback",_tabHeaderSelector:"#projectfeedback-tab-header",_componentMount:null,show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},sort:function(e){this.sortValue=e
this.reset()
this.load(0,this.sortValue)},shouldShowTab:function(){return this.hasHelpRequests()},hasEvalRequests:function(){return this._projectFeedback.hasEvalRequests()},hasPendingEvalRequests:function(){return this._projectFeedback.hasPendingEvalRequests()},hasHelpRequests:function(){return this._projectFeedback.hasHelpRequests()},isLoaded:function(){return!!this._projectFeedback.fetchedInitial},load:function(){if(this._loadComplete){Discussion.hideProgressBar()
return}this._projectFeedbackMount=$("<div>").appendTo(".projectfeedback-tab .projectfeedback")[0]
this._projectEvaluationMount=$("<div>").appendTo(".scratchpad-project-eval-mount")[0]
if(!this._projectFeedbackMount&&!this._projectEvaluationMount){return}var e=this
require.async(["../scratchpads-package/scratchpad-ui.js","../clarifications-package/models.jsx","../projectfeedback-package/projectfeedback-form.jsx"],function(t,a,c){var s=t.ScratchpadUI
var o
if(Discussion.data.expandFeedbackType==="projectfeedback"){o=Discussion.data.qaExpandKey}e._projectFeedback=new a.DiscussionItemCollection([],{focusKind:"scratchpad",focusId:Discussion.data.focusId,type:"projectfeedback",sortOrder:2,fetchCount:100})
if(e._projectEvaluationMount){var r=React.createFactory(c.ProjectEvaluationArea)
e._component=ReactDOM.render(r({scratchpadId:Discussion.data.focusId,isProgramOwner:Discussion.data.isOwner,sendToPeers:s.originScratchpad.get("sendToPeers"),rubric:s.originScratchpad.get("translatedProjectEval"),tips:s.originScratchpad.get("translatedProjectEvalTips"),originTitle:s.originScratchpad.get("translatedTitle"),projectFinished:s.userScratchpad.get("challengeStatus")===5,collection:e._projectFeedback}),e._projectEvaluationMount)}if(e._projectFeedbackMount){var i=React.createFactory(c.ProjectFeedbackArea)
e._component=ReactDOM.render(i({scratchpadId:Discussion.data.focusId,expandKey:o,canRequestFeedback:Discussion.data.canRequestFeedback,collection:e._projectFeedback}),e._projectFeedbackMount)}Discussion.hideProgressBar()
e._loadComplete=true})},reset:function(){this._loadComplete=false
$(this._containerSelector).html("")}}
module.exports=DiscussionProjectFeedback
});
KAdefine("javascript/discussion-package/note.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,n,i,l,a){i=i||e.helpers
var o="",r,s,t,p,f=this,c="function",u=i.helperMissing,h=void 0,g=this.escapeExpression,d=i.blockHelperMissing
function v(e,n){var l="",a,o
l+='\n        <a class="login-link" href="'
t=i.loginContinueUrl
a=t||e.loginContinueUrl
t=i.toLoginRedirectHref
o=t||e.toLoginRedirectHref
if(typeof o===c){a=o.call(e,a,{hash:{}})}else if(o===h){a=u.call(e,"toLoginRedirectHref",a,{hash:{}})}else{a=o}l+=g(a)+'">'
t=i["_"]
a=t||e["_"]
p=f.program(2,m,n)
p.hash={}
p.fn=p
p.inverse=f.noop
if(t&&typeof a===c){a=a.call(e,p)}else{a=d.call(e,a,p)}if(a||a===0){l+=a}l+="</a>\n    "
return l}function m(e,n){return"Log in first"}function k(e,n){return"Close"}o+='<div class="note">\n    '
t=i.loginContinueUrl
r=t||n.loginContinueUrl
s=i["if"]
p=f.program(1,v,a)
p.hash={}
p.fn=p
p.inverse=f.noop
r=s.call(n,r,p)
if(r||r===0){o+=r}o+='\n\n    <span class="note-description"></span>\n    <a href="javascript:void(0);" class="close-note">'
t=i["_"]
r=t||n["_"]
p=f.program(4,k,a)
p.hash={}
p.fn=p
p.inverse=f.noop
if(t&&typeof r===c){r=r.call(n,p)}else{r=d.call(n,r,p)}if(r||r===0){o+=r}o+="</a>\n</div>\n"
return o})
function wrapped_template(e,n){return absoluteLinks.makeHtmlLinksSafe(template(e,n))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/discussion-note.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
require("../shared-package/i18n.js")
var KA=require("../shared-package/ka.js")
var launchSignupInModal=require("../signup-link-package/launch-signup-in-modal.js")
var DiscussionNote={template_:require("./note.handlebars"),$notes_:$([]),init:function(){},checkAndPromptLogin:function(e,t,n){var o=KA.getUserProfile(),i=o&&!o.isPhantom()
if(i){return false}else{if(n){document.activeElement.blur()}launchSignupInModal()
return true}},showInfo:function(e,t){this.show_(e,t,false)},closeAll:function(){this.$notes_.remove()
this.$notes_=$([])},close_:function(e){var t=$(e.target).parents(".note")
t.remove()
this.$notes_=this.$notes_.not(t)
return false},show_:function(e,t,n,o){if(!e){return}var i=$(e),r=i.offset()
var s=null
if(n){s=window.location.pathname+window.location.search}var a=$(this.template_({loginContinueUrl:s})).find(".note-description").text(t).end().on("click",".close-note",this.close_).appendTo("body")
a.css({left:r.left+i.outerWidth(true)/2-a.outerWidth(true)/2,top:r.top+i.outerHeight(true)/2-a.outerHeight(true)/2})
this.$notes_=this.$notes_.add(a)
if(o){o()}}}
_.bindAll(DiscussionNote)
module.exports=DiscussionNote
});
KAdefine("javascript/discussion-package/discussion-profilepromo.js", function(require, module, exports) {
var _=require("underscore")
var KA=require("../shared-package/ka.js")
var Promos=require("../promos-package/promos.js")
var DiscussionProfilePromo={name_:"visit_profile_after_post",shouldShow_:false,check:function(){Promos.hasUserSeen(this.name_,function(o){this.shouldShow_=!o},this)},show:function(o,e){if(this.shouldShow_){_.extend(o,{showProfilePromo:true,profileRoot:KA.getUserProfile().get("profileRoot"),askedQuestion:e})
Promos.markAsSeen(this.name_)}}}
module.exports=DiscussionProfilePromo
});
KAdefine("javascript/discussion-package/low-quality-notice.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
var $=require("jquery")
var i18n=require("../shared-package/i18n.js")
var Analytics=require("../shared-package/analytics.js")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionLowQualityNotice={init:function(e,i,t,o){if(t["showLowQualityNotice"]){var a=DiscussionLowQualityNotice.getFormContainer_(t,e)
DiscussionLowQualityNotice.show(a,e,t["translatedFeedbackEditTip"],t["lowQualityScore"])
DiscussionLowQualityNotice.trackShownLowQualityEvent_(e,o,t["lowQualityScore"],t["authorKaid"])
return true}if(DiscussionLowQualityNotice.exists(i)){var s=DiscussionLowQualityNotice.getScore(i),r=t["lowQualityScore"]
DiscussionLowQualityNotice.trackResubmittedEvent(i,s,r,e,o,t["authorKaid"])
DiscussionLowQualityNotice.hide(i)}return false},show:function(e,i,t,o){if(t){t=i18n._("Tip: %(translatedFeedbackEditTip)s",{translatedFeedbackEditTip:t})}var a=$(require("./low-quality-notice-header.handlebars")({translatedFeedbackType:Discussion._translateFeedbackType(i)}))
var s=$(require("./low-quality-notice-footer.handlebars")({translatedFeedbackEditTip:t}))
var r=100
e.switchClass("","low-quality-notice",r)
try{e.find(".discussion-text:first").focus()}catch(c){}setTimeout(function(){var i={opacity:0,height:0}
e.prepend(a)
var o=a.height()
a.css(i).animate({opacity:1,height:o},"slow")
var r=e.find(".discussion-controls:first")
if(t){s.insertBefore(r)
var c=s.height()
s.css(i).animate({opacity:1,height:c},"slow")}s.promise().done(function(){Discussion.scrollDownToReveal(r)})},r)
DiscussionLowQualityNotice.setScore(e,o)},getFormContainer_:function(e,i){var t
var o=e["feedbackKey"]
if(o){t=Discussion.getFeedbackFromKey(e["feedbackKey"])}else if(i==="answer"){var a=Discussion.getFeedbackFromKey(e["questionKey"]).parents(".thread")
t=$(".answer:not([id])",a)}else if(i==="suggested-clarification"){t=$(".newClarification")}else{t=$(".question:not([id])")}return t},trackShownLowQualityEvent_:function(e,i,t,o){Analytics.trackSingleEvent("Shown Low Quality Notice",{"Feedback Type":e,"Post Type":i?"Edit":"New","Low-Quality Score":t,"Author's kaid":o})},trackResubmittedEvent:function(e,i,t,o,a,s){var r
if(t<i){r="better quality"}else if(t>i){r="worse quality"}else{r="same quality"}Analytics.trackSingleEvent("Resubmitted After Low Quality Notice",{"Change in quality":r,"Feedback Type":o,"Post Type":a?"Edit":"New","Low-Quality Score: Before":i,"Low-Quality Score: After":t,"Author's kaid":s})},setScore:function(e,i){e.data("low-quality-score",i)},getScore:function(e){return e.data("low-quality-score")},clearScore:function(e){DiscussionLowQualityNotice.setScore(e,"")},hide:function(e){e.removeClass("low-quality-notice").find(".low-quality-notice-header").remove().end().find(".low-quality-notice-footer").remove()
DiscussionLowQualityNotice.clearScore(e)},exists:function(e){return e.hasClass("low-quality-notice")}}
module.exports=DiscussionLowQualityNotice
});
KAdefine("javascript/discussion-package/duplicate-notice.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-alert.js")
var $=require("jquery")
var _=require("underscore")
var i18n=require("../shared-package/i18n.js")
var Analytics=require("../shared-package/analytics.js")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionDuplicateNotice={init:function(e){e.on("click",".duplicate-notice .close",DiscussionDuplicateNotice.close)},removeAll:function(e){var i=$(".duplicate-notice .close",e.parents(".thread"))
DiscussionDuplicateNotice.close.call(i)
i.alert("close")},close:function(){var e=$(this).parents(".duplicate-notice"),i=e.data("duplicate-key"),s=Discussion.getFeedbackFromKey(i)
Discussion.unhighlight(s,"warning")},findDuplicate_:function(e,i){var i=i.toLowerCase(),s=$(".answers",e.parents(".thread")).find(".answer")
var a=null
_.each(s,function(e){var s=$(".discussion-content",e).text().toLowerCase()
if(s===i||s.indexOf(i)>-1){a=e}})
return $(a)},show:function(e,i){var s=DiscussionDuplicateNotice.findDuplicate_(i,e)
if(s.length){var a=require("./duplicate-notice.handlebars")({translatedFeedbackType:i18n._("answer")}),t=$(a)
i.before(t)
Discussion.highlight(s,"warning")
t.data("duplicate-key",Discussion.getKey(s))
Analytics.trackSingleEvent("Duplicated Feedback")
return true}return false}}
module.exports=DiscussionDuplicateNotice
});
KAdefine("javascript/discussion-package/thread.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(n,s,a,e,r){a=a||n.helpers
e=e||n.partials
var i="",o,t,l,h,u=this,f="function",c=a.helperMissing,p=void 0,d=this.escapeExpression,w=a.blockHelperMissing
function v(n,s){return" has-answered"}function m(n,s){return"highlight success-highlight"}function g(n,s){var e="",r
e+='\n     data-focus-kind="'
l=a.focus
r=l||n.focus
r=r===null||r===undefined||r===false?r:r.kind
if(typeof r===f){r=r.call(n,{hash:{}})}else if(r===p){r=c.call(n,"focus.kind",{hash:{}})}e+=d(r)+'"\n     data-focus-id="'
l=a.focus
r=l||n.focus
r=r===null||r===undefined||r===false?r:r.id
if(typeof r===f){r=r.call(n,{hash:{}})}else if(r===p){r=c.call(n,"focus.id",{hash:{}})}e+=d(r)+'"\n     '
return e}function k(n,s){var e="",r,i
e+='\n        <div class="answers '
l=a.expandedAnswers
r=l||n.expandedAnswers
i=a.unless
h=u.program(8,y,s)
h.hash={}
h.fn=h
h.inverse=u.noop
r=i.call(n,r,h)
if(r||r===0){e+=r}e+='">\n            '
l=a.expandedAnswers
r=l||n.expandedAnswers
i=a.each
h=u.program(10,A,s)
h.hash={}
h.fn=h
h.inverse=u.noop
r=i.call(n,r,h)
if(r||r===0){e+=r}e+="\n\n            "
l=a.hasHiddenAnswers
r=l||n.hasHiddenAnswers
i=a["if"]
h=u.program(12,C,s)
h.hash={}
h.fn=h
h.inverse=u.noop
r=i.call(n,r,h)
if(r||r===0){e+=r}e+="\n        </div>\n\n        "
l=a.showAuthorControls
r=l||n.showAuthorControls
i=a.unless
h=u.program(29,M,s)
h.hash={}
h.fn=h
h.inverse=u.noop
r=i.call(n,r,h)
if(r||r===0){e+=r}e+="\n    "
return e}function y(n,s){return" with-no-answers"}function A(n,s){var r="",i
r+="\n                "
i=n
i=u.invokePartial(e.discussion_answer,"discussion_answer",i,a,e)
if(i||i===0){r+=i}r+="\n            "
return r}function C(n,s){var e="",r,i
e+='\n                <div class="show-answer-links">\n                    <a href="javascript:void(0);" class="show-hidden-answers">\n                        '
l=a.authorNickname
r=l||n.authorNickname
i=a["if"]
h=u.program(13,_,s)
h.hash={}
h.fn=h
h.inverse=u.program(18,H,s)
r=i.call(n,r,h)
if(r||r===0){e+=r}e+="\n                    </a>\n                    "
l=a.showAuthorControls
r=l||n.showAuthorControls
i=a.unless
h=u.program(23,S,s)
h.hash={}
h.fn=h
h.inverse=u.noop
r=i.call(n,r,h)
if(r||r===0){e+=r}e+='\n                </a>\n                </div>\n                <div class="hidden-answers" style="display: none">\n                    '
l=a.answers
r=l||n.answers
i=a.each
h=u.program(27,L,s)
h.hash={}
h.fn=h
h.inverse=u.noop
r=i.call(n,r,h)
if(r||r===0){e+=r}e+="\n                </div>\n            "
return e}function _(n,s){var e="",r,i
e+="\n                            "
l=a.answerCount
r=l||n.answerCount
l=a.ngettext
i=l||n.ngettext
h=u.program(14,P,s)
h.hash={}
h.fn=h
h.inverse=u.program(16,x,s)
if(l&&typeof i===f){r=i.call(n,r,h)}else{r=w.call(n,i,r,h)}if(r||r===0){e+=r}e+="\n                        "
return e}function P(n,s){var e="",r
e+='\n                                <span aria-hidden="true">Show answer</span>\n                                <span class="sr-only">Show the answer to '
l=a.authorNickname
r=l||n.authorNickname
if(typeof r===f){r=r.call(n,{hash:{}})}else if(r===p){r=c.call(n,"authorNickname",{hash:{}})}e+=d(r)+"'s question</span>\n                            "
return e}function x(n,s){var e="",r
e+="\n                                Show all "
l=a.answerCount
r=l||n.answerCount
if(typeof r===f){r=r.call(n,{hash:{}})}else if(r===p){r=c.call(n,"answerCount",{hash:{}})}e+=d(r)+' answers <span class="sr-only">to '
l=a.authorNickname
r=l||n.authorNickname
if(typeof r===f){r=r.call(n,{hash:{}})}else if(r===p){r=c.call(n,"authorNickname",{hash:{}})}e+=d(r)+"'s question</span>\n                            "
return e}function H(n,s){var e="",r,i
e+="\n                            "
l=a.answerCount
r=l||n.answerCount
l=a.ngettext
i=l||n.ngettext
h=u.program(19,q,s)
h.hash={}
h.fn=h
h.inverse=u.program(21,N,s)
if(l&&typeof i===f){r=i.call(n,r,h)}else{r=w.call(n,i,r,h)}if(r||r===0){e+=r}e+="\n                        "
return e}function q(n,s){return'\n                                <span aria-hidden="true">Show answer</span>\n                                <span class="sr-only">Show the answer to this question</span>\n                            '}function N(n,s){var e="",r
e+="\n                                Show all "
l=a.answerCount
r=l||n.answerCount
if(typeof r===f){r=r.call(n,{hash:{}})}else if(r===p){r=c.call(n,"answerCount",{hash:{}})}e+=d(r)+' answers <span class="sr-only">to this question</span>\n                            '
return e}function S(n,s){var e="",r,i
e+="\n                        "
l=a.restrictPosting
r=l||n.restrictPosting
i=a.unless
h=u.program(24,b,s)
h.hash={}
h.fn=h
h.inverse=u.noop
r=i.call(n,r,h)
if(r||r===0){e+=r}e+="\n                    "
return e}function b(n,s){var r="",i
r+="\n                            "
i=n
i=u.invokePartial(e["discussion_meta-separator"],"discussion_meta-separator",i,a,e)
if(i||i===0){r+=i}r+='\n                            <a href="javascript:void(0);" class="show-answer-form">\n                                '
l=a["_"]
i=l||n["_"]
h=u.program(25,j,s)
h.hash={}
h.fn=h
h.inverse=u.noop
if(l&&typeof i===f){i=i.call(n,h)}else{i=w.call(n,i,h)}if(i||i===0){r+=i}r+="\n                            </a>\n                        "
return r}function j(n,s){return"Answer this question"}function L(n,s){var r="",i
r+="\n                        "
i=n
i=u.invokePartial(e.discussion_answer,"discussion_answer",i,a,e)
if(i||i===0){r+=i}r+="\n                    "
return r}function M(n,s){var e="",r,i
e+="\n            "
l=a.restrictPosting
r=l||n.restrictPosting
i=a.unless
h=u.program(30,U,s)
h.hash={}
h.fn=h
h.inverse=u.noop
r=i.call(n,r,h)
if(r||r===0){e+=r}e+="\n        "
return e}function U(n,s){var r="",i,o
r+="\n                "
l=a.hasHiddenAnswers
i=l||n.hasHiddenAnswers
o=a["if"]
h=u.program(31,E,s)
h.hash={}
h.fn=h
h.inverse=u.program(33,z,s)
i=o.call(n,i,h)
if(i||i===0){r+=i}r+="\n                "
i=n
i=u.invokePartial(e["discussion_answer-form"],"discussion_answer-form",i,a,e)
if(i||i===0){r+=i}r+="\n                </div>\n            "
return r}function E(n,s){return'\n                    <div class="add-answer" style="display: none">\n                '}function z(n,s){return'\n                    <div class="add-answer">\n                '}i+='<div class="thread'
l=a.hasAnswered
o=l||s.hasAnswered
t=a["if"]
h=u.program(1,v,r)
h.hash={}
h.fn=h
h.inverse=u.noop
o=t.call(s,o,h)
if(o||o===0){i+=o}i+=" "
l=a.shouldHighlight
o=l||s.shouldHighlight
t=a["if"]
h=u.program(3,m,r)
h.hash={}
h.fn=h
h.inverse=u.noop
o=t.call(s,o,h)
if(o||o===0){i+=o}i+='"\n     '
l=a.focus
o=l||s.focus
t=a["if"]
h=u.program(5,g,r)
h.hash={}
h.fn=h
h.inverse=u.noop
o=t.call(s,o,h)
if(o||o===0){i+=o}i+=">\n    "
o=s
o=u.invokePartial(e.discussion_question,"discussion_question",o,a,e)
if(o||o===0){i+=o}i+="\n\n    "
l=a.inUserProfile
o=l||s.inUserProfile
t=a.unless
h=u.program(7,k,r)
h.hash={}
h.fn=h
h.inverse=u.noop
o=t.call(s,o,h)
if(o||o===0){i+=o}i+="\n</div>\n\n"
return i})
function wrapped_template(n,s){return absoluteLinks.makeHtmlLinksSafe(template(n,s))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/question.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,n,s,i,a){s=s||e.helpers
i=i||e.partials
var l="",o,r,t,f,c,p=this,u="function",h=s.helperMissing,d=void 0,v=this.escapeExpression,m=s.blockHelperMissing
function k(e,n){return"deleted"}function y(e,n){return" context-link"}function g(e,n){return" is-author"}function _(e,n){var i="",a
i+='\n        <a href="'
f=s.focus
a=f||e.focus
a=a===null||a===undefined||a===false?a:a.relativeUrl
if(typeof a===u){a=a.call(e,{hash:{}})}else if(a===d){a=h.call(e,"focus.relativeUrl",{hash:{}})}i+=v(a)+"?qa_expand_key="
f=s.key
a=f||e.key
if(typeof a===u){a=a.call(e,{hash:{}})}else if(a===d){a=h.call(e,"key",{hash:{}})}i+=v(a)+'" class="covering-link">\n            <span class="sr-only">'
f=s["_"]
a=f||e["_"]
c=p.program(8,P,n)
c.hash={}
c.fn=c
c.inverse=p.noop
if(f&&typeof a===u){a=a.call(e,c)}else{a=m.call(e,a,c)}if(a||a===0){i+=a}i+="</span>\n        </a>\n    "
return i}function P(e,n){return"View this question"}function b(e,n){var i,a,l,o
i="form-controls"
a="discussion"
l={}
o="Edit this question"
l["label"]=o
f=s.invokePartial
o=f||e.invokePartial
c=p.program(11,w,n)
c.hash=l
c.fn=c
c.inverse=p.noop
if(f&&typeof o===u){i=o.call(e,a,i,c)}else{i=m.call(e,o,a,i,c)}if(i||i===0){return i}else{return""}}function w(e,n){var s=""
return s}l+='<div class="question '
f=s.appearsAsDeleted
o=f||n.appearsAsDeleted
r=s["if"]
c=p.program(1,k,a)
c.hash={}
c.fn=c
c.inverse=p.noop
o=r.call(n,o,c)
if(o||o===0){l+=o}l+=" discussion-item"
f=s.inUserProfile
o=f||n.inUserProfile
r=s["if"]
c=p.program(3,y,a)
c.hash={}
c.fn=c
c.inverse=p.noop
o=r.call(n,o,c)
if(o||o===0){l+=o}f=s.showAuthorControls
o=f||n.showAuthorControls
r=s["if"]
c=p.program(5,g,a)
c.hash={}
c.fn=c
c.inverse=p.noop
o=r.call(n,o,c)
if(o||o===0){l+=o}l+='"\n     id="'
f=s.key
o=f||n.key
if(typeof o===u){o=o.call(n,{hash:{}})}else if(o===d){o=h.call(n,"key",{hash:{}})}l+=v(o)+'">\n\n    '
f=s.inUserProfile
o=f||n.inUserProfile
r=s["if"]
c=p.program(7,_,a)
c.hash={}
c.fn=c
c.inverse=p.noop
o=r.call(n,o,c)
if(o||o===0){l+=o}l+='\n\n    <div class="discussion-content">\n        '
f=s.content
o=f||n.content
r={}
t=1
r["nofollow"]=t
f=s.formatContent
t=f||n.formatContent
c={}
c.hash=r
if(typeof t===u){o=t.call(n,o,c)}else if(t===d){o=h.call(n,"formatContent",o,c)}else{o=t}l+=v(o)+"\n    </div>\n\n    "
o=n
o=p.invokePartial(i["discussion_discussion-meta"],"discussion_discussion-meta",o,s,i)
if(o||o===0){l+=o}l+="\n\n    "
f=s["_"]
o=f||n["_"]
c=p.program(10,b,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(f&&typeof o===u){o=o.call(n,c)}else{o=m.call(n,o,c)}if(o||o===0){l+=o}l+="\n</div>\n"
return l})
function wrapped_template(e,n){return absoluteLinks.makeHtmlLinksSafe(template(e,n))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/answer.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,n,s,i,a){s=s||e.helpers
i=i||e.partials
var o="",r,l,t,f,u=this,c="function",h=s.helperMissing,d=void 0,p=this.escapeExpression,m=s.blockHelperMissing
function v(e,n){return"deleted"}function y(e,n){return" context-link"}function q(e,n){return" is-author"}function g(e,n){var i="",a
i+='data-question-key="'
t=s.questionKey
a=t||e.questionKey
if(typeof a===c){a=a.call(e,{hash:{}})}else if(a===d){a=h.call(e,"questionKey",{hash:{}})}i+=p(a)+'"'
return i}function k(e,n){var i="",a,o
i+="\n        "
t=s.question
a=t||e.question
a=a===null||a===undefined||a===false?a:a.focus
a=a===null||a===undefined||a===false?a:a.relativeUrl
o=s["if"]
f=u.program(10,b,n)
f.hash={}
f.fn=f
f.inverse=u.noop
a=o.call(e,a,f)
if(a||a===0){i+=a}i+='\n\n        <div class="discussion-question-title discussion-light">\n            '
t=s.question
a=t||e.question
a=a===null||a===undefined||a===false?a:a.content
t=s.formatContent
o=t||e.formatContent
if(typeof o===c){a=o.call(e,a,{hash:{}})}else if(o===d){a=h.call(e,"formatContent",a,{hash:{}})}else{a=o}i+=p(a)+'\n        </div>\n        <div class="discussion-indent">\n    '
return i}function b(e,n){var i="",a
i+='\n            <a href="'
t=s.question
a=t||e.question
a=a===null||a===undefined||a===false?a:a.focus
a=a===null||a===undefined||a===false?a:a.relativeUrl
if(typeof a===c){a=a.call(e,{hash:{}})}else if(a===d){a=h.call(e,"question.focus.relativeUrl",{hash:{}})}i+=p(a)+"?qa_expand_key="
t=s.question
a=t||e.question
a=a===null||a===undefined||a===false?a:a.key
if(typeof a===c){a=a.call(e,{hash:{}})}else if(a===d){a=h.call(e,"question.key",{hash:{}})}i+=p(a)+'"\n                class="covering-link"\n                data-feedback-type="answer"\n                data-votes="'
t=s.sumVotesIncremented
a=t||e.sumVotesIncremented
if(typeof a===c){a=a.call(e,{hash:{}})}else if(a===d){a=h.call(e,"sumVotesIncremented",{hash:{}})}i+=p(a)+'">\n                <span class="sr-only">\n                    '
t=s["_"]
a=t||e["_"]
f=u.program(11,w,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(t&&typeof a===c){a=a.call(e,f)}else{a=m.call(e,a,f)}if(a||a===0){i+=a}i+="\n                </span>\n            </a>\n        "
return i}function w(e,n){var i="",a
i+="View this question by "
t=s.question
a=t||e.question
a=a===null||a===undefined||a===false?a:a.authorNickname
if(typeof a===c){a=a.call(e,{hash:{}})}else if(a===d){a=h.call(e,"question.authorNickname",{hash:{}})}i+=p(a)
return i}function _(e,n){return'\n        <div class="item-separator"></div>\n    '}function A(e,n){var i="",a
i+='\n        <strong class="from-video-author">'
t=s["_"]
a=t||e["_"]
f=u.program(16,V,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(t&&typeof a===c){a=a.call(e,f)}else{a=m.call(e,a,f)}if(a||a===0){i+=a}i+="</strong>\n        <br>\n    "
return i}function V(e,n){return"From the author:"}function U(e,n){var i="",a,o
i+="\n            "
t=s.content
a=t||e.content
t=s.formatEvalAnswer
o=t||e.formatEvalAnswer
if(typeof o===c){a=o.call(e,a,{hash:{}})}else if(o===d){a=h.call(e,"formatEvalAnswer",a,{hash:{}})}else{a=o}i+=p(a)+"\n        "
return i}function C(e,n){var i="",a,o,r
i+="\n            "
t=s.content
a=t||e.content
o={}
r=1
o["nofollow"]=r
t=s.formatContent
r=t||e.formatContent
f={}
f.hash=o
if(typeof r===c){a=r.call(e,a,f)}else if(r===d){a=h.call(e,"formatContent",a,f)}else{a=r}i+=p(a)+"\n        "
return i}function E(e,n){var i="",a
i+='\n    <div class="discussion-embed-video">\n        <iframe width="488" height="275" src="'
t=s.embedVideoUrl
a=t||e.embedVideoUrl
if(typeof a===c){a=a.call(e,{hash:{}})}else if(a===d){a=h.call(e,"embedVideoUrl",{hash:{}})}i+=p(a)+'?modestbranding=1;rel=0;fs=1" frameborder="0" allowfullscreen></iframe>\n    </div>\n    '
return i}function P(e,n){var i,a,o,r
i="form-controls"
a="discussion"
o={}
r="Edit this answer"
o["label"]=r
t=s.invokePartial
r=t||e.invokePartial
f=u.program(25,K,n)
f.hash=o
f.fn=f
f.inverse=u.noop
if(t&&typeof r===c){i=r.call(e,a,i,f)}else{i=m.call(e,r,a,i,f)}if(i||i===0){return i}else{return""}}function K(e,n){var s=""
return s}function x(e,n){return"\n        </div>\n    "}o+='<div class="answer '
t=s.appearsAsDeleted
r=t||n.appearsAsDeleted
l=s["if"]
f=u.program(1,v,a)
f.hash={}
f.fn=f
f.inverse=u.noop
r=l.call(n,r,f)
if(r||r===0){o+=r}o+=" discussion-item"
t=s.inUserProfile
r=t||n.inUserProfile
l=s["if"]
f=u.program(3,y,a)
f.hash={}
f.fn=f
f.inverse=u.noop
r=l.call(n,r,f)
if(r||r===0){o+=r}t=s.showAuthorControls
r=t||n.showAuthorControls
l=s["if"]
f=u.program(5,q,a)
f.hash={}
f.fn=f
f.inverse=u.noop
r=l.call(n,r,f)
if(r||r===0){o+=r}o+='"\n     '
t=s.questionKey
r=t||n.questionKey
l=s["if"]
f=u.program(7,g,a)
f.hash={}
f.fn=f
f.inverse=u.noop
r=l.call(n,r,f)
if(r||r===0){o+=r}o+='\n     id="'
t=s.key
r=t||n.key
if(typeof r===c){r=r.call(n,{hash:{}})}else if(r===d){r=h.call(n,"key",{hash:{}})}o+=p(r)+'">\n\n    '
t=s.question
r=t||n.question
l=s["if"]
f=u.program(9,k,a)
f.hash={}
f.fn=f
f.inverse=u.program(13,_,a)
r=l.call(n,r,f)
if(r||r===0){o+=r}o+="\n\n    "
t=s.fromVideoAuthor
r=t||n.fromVideoAuthor
l=s["if"]
f=u.program(15,A,a)
f.hash={}
f.fn=f
f.inverse=u.noop
r=l.call(n,r,f)
if(r||r===0){o+=r}o+='\n\n    <div class="discussion-content">\n        '
t=s.isProjectEvalAnswer
r=t||n.isProjectEvalAnswer
l=s["if"]
f=u.program(18,U,a)
f.hash={}
f.fn=f
f.inverse=u.program(20,C,a)
r=l.call(n,r,f)
if(r||r===0){o+=r}o+="\n    </div>\n\n    "
t=s.embedVideoUrl
r=t||n.embedVideoUrl
l=s["if"]
f=u.program(22,E,a)
f.hash={}
f.fn=f
f.inverse=u.noop
r=l.call(n,r,f)
if(r||r===0){o+=r}o+="\n\n    "
r=n
r=u.invokePartial(i["discussion_discussion-meta"],"discussion_discussion-meta",r,s,i)
if(r||r===0){o+=r}o+="\n\n    "
t=s["_"]
r=t||n["_"]
f=u.program(24,P,a)
f.hash={}
f.fn=f
f.inverse=u.noop
if(t&&typeof r===c){r=r.call(n,f)}else{r=m.call(n,r,f)}if(r||r===0){o+=r}o+="\n\n    "
t=s.question
r=t||n.question
l=s["if"]
f=u.program(27,x,a)
f.hash={}
f.fn=f
f.inverse=u.noop
r=l.call(n,r,f)
if(r||r===0){o+=r}o+="\n</div>\n"
return o})
function wrapped_template(e,n){return absoluteLinks.makeHtmlLinksSafe(template(e,n))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/comment.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,n,s,a,i){s=s||e.helpers
a=a||e.partials
var l="",o,r,t,f,c,u=this,h="function",p=s.helperMissing,d=void 0,m=this.escapeExpression,v=s.blockHelperMissing
function k(e,n){return"deleted"}function y(e,n){return" context-link"}function g(e,n){return" is-author"}function _(e,n){var a="",i
a+='data-focus-kind="'
f=s.focus
i=f||e.focus
i=i===null||i===undefined||i===false?i:i.kind
if(typeof i===h){i=i.call(e,{hash:{}})}else if(i===d){i=p.call(e,"focus.kind",{hash:{}})}a+=m(i)+'" data-focus-id="'
f=s.focus
i=f||e.focus
i=i===null||i===undefined||i===false?i:i.id
if(typeof i===h){i=i.call(e,{hash:{}})}else if(i===d){i=p.call(e,"focus.id",{hash:{}})}a+=m(i)+'"'
return a}function b(e,n){var a="",i
a+='\n        <a href="'
f=s.focus
i=f||e.focus
i=i===null||i===undefined||i===false?i:i.relativeUrl
if(typeof i===h){i=i.call(e,{hash:{}})}else if(i===d){i=p.call(e,"focus.relativeUrl",{hash:{}})}a+=m(i)+"?qa_expand_key="
f=s.key
i=f||e.key
if(typeof i===h){i=i.call(e,{hash:{}})}else if(i===d){i=p.call(e,"key",{hash:{}})}a+=m(i)+'" class="covering-link">\n            <span class="sr-only">'
f=s["_"]
i=f||e["_"]
c=u.program(10,P,n)
c.hash={}
c.fn=c
c.inverse=u.noop
if(f&&typeof i===h){i=i.call(e,c)}else{i=v.call(e,i,c)}if(i||i===0){a+=i}a+="</span>\n        </a>\n    "
return a}function P(e,n){return"View this comment"}function w(e,n){var a,i,l,o
a="form-controls"
i="discussion"
l={}
o="Edit this feedback"
l["label"]=o
f=s.invokePartial
o=f||e.invokePartial
c=u.program(13,U,n)
c.hash=l
c.fn=c
c.inverse=u.noop
if(f&&typeof o===h){a=o.call(e,i,a,c)}else{a=v.call(e,o,i,a,c)}if(a||a===0){return a}else{return""}}function U(e,n){var s=""
return s}l+='<div class="comment '
f=s.appearsAsDeleted
o=f||n.appearsAsDeleted
r=s["if"]
c=u.program(1,k,i)
c.hash={}
c.fn=c
c.inverse=u.noop
o=r.call(n,o,c)
if(o||o===0){l+=o}l+=" discussion-item"
f=s.inUserProfile
o=f||n.inUserProfile
r=s["if"]
c=u.program(3,y,i)
c.hash={}
c.fn=c
c.inverse=u.noop
o=r.call(n,o,c)
if(o||o===0){l+=o}f=s.showAuthorControls
o=f||n.showAuthorControls
r=s["if"]
c=u.program(5,g,i)
c.hash={}
c.fn=c
c.inverse=u.noop
o=r.call(n,o,c)
if(o||o===0){l+=o}l+='" id="'
f=s.key
o=f||n.key
if(typeof o===h){o=o.call(n,{hash:{}})}else if(o===d){o=p.call(n,"key",{hash:{}})}l+=m(o)+'"\n     data-key="'
f=s.key
o=f||n.key
if(typeof o===h){o=o.call(n,{hash:{}})}else if(o===d){o=p.call(n,"key",{hash:{}})}l+=m(o)+'"\n     '
f=s.focus
o=f||n.focus
r=s["if"]
c=u.program(7,_,i)
c.hash={}
c.fn=c
c.inverse=u.noop
o=r.call(n,o,c)
if(o||o===0){l+=o}l+='>\n\n    <div class="item-separator"></div>\n    '
f=s.inUserProfile
o=f||n.inUserProfile
r=s["if"]
c=u.program(9,b,i)
c.hash={}
c.fn=c
c.inverse=u.noop
o=r.call(n,o,c)
if(o||o===0){l+=o}l+='\n\n    <div class="discussion-content">\n        '
f=s.content
o=f||n.content
r={}
t=1
r["nofollow"]=t
f=s.formatContent
t=f||n.formatContent
c={}
c.hash=r
if(typeof t===h){o=t.call(n,o,c)}else if(t===d){o=p.call(n,"formatContent",o,c)}else{o=t}l+=m(o)+"\n    </div>\n\n    "
o=n
o=u.invokePartial(a["discussion_discussion-meta"],"discussion_discussion-meta",o,s,a)
if(o||o===0){l+=o}l+="\n\n    "
f=s["_"]
o=f||n["_"]
c=u.program(12,w,i)
c.hash={}
c.fn=c
c.inverse=u.noop
if(f&&typeof o===h){o=o.call(n,c)}else{o=v.call(n,o,c)}if(o||o===0){l+=o}l+="\n</div>\n"
return l})
function wrapped_template(e,n){return absoluteLinks.makeHtmlLinksSafe(template(e,n))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/replies-container.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,n,i,s,a){i=i||e.helpers
var l="",r,t,d,o,p=this,c="function",v=i.blockHelperMissing
function u(e,n){var s="",a
s+='\n            <div class="loading" style="display:none;">\n                <div class="discussion-item reply" style="opacity:0;">\n                    <div class="throbber"></div>\n                    <div class="discussion-content">'
d=i["_"]
a=d||e["_"]
o=p.program(2,f,n)
o.hash={}
o.fn=o
o.inverse=p.noop
if(d&&typeof a===c){a=a.call(e,o)}else{a=v.call(e,a,o)}if(a||a===0){s+=a}s+="</div>\n                </div>\n            </div>\n            "
return s}function f(e,n){return"Loading..."}l+='<div class="replies-container">\n    <div class="replies-triangle"></div>\n    <div class="replies-panel">\n        <div class="replies">\n            '
d=i.replyCount
r=d||n.replyCount
t=i["if"]
o=p.program(1,u,a)
o.hash={}
o.fn=o
o.inverse=p.noop
r=t.call(n,r,o)
if(r||r===0){l+=r}l+='\n        </div>\n\n        <div class="add-reply"></div>\n    </div>\n</div>\n'
return l})
function wrapped_template(e,n){return absoluteLinks.makeHtmlLinksSafe(template(e,n))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/question-form.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,s,n,a,i){n=n||e.helpers
a=a||e.partials
var t="",r,l,o,c,u=this,p="function",f=n.helperMissing,v=void 0,d=this.escapeExpression,h=n.blockHelperMissing
function k(e,s){return"Ask a question"}function m(e,s){var a="",i,t
a+='\n                <div class="discussion-question-container">\n                    <div class="discussion-avatar-container">\n                        <div class="discussion-avatar-sprite" style="background-image: url(\''
o=n.avatarSrc
i=o||e.avatarSrc
o=n.staticUrl
t=o||e.staticUrl
if(typeof t===p){i=t.call(e,i,{hash:{}})}else if(t===v){i=f.call(e,"staticUrl",i,{hash:{}})}else{i=t}a+=d(i)+'\')"></div>\n                    </div>\n                    <div class="discussion-question-text-container">\n                        <textarea class="discussion-text" placeholder="'
o=n["_"]
i=o||e["_"]
c=u.program(4,g,s)
c.hash={}
c.fn=c
c.inverse=u.noop
if(o&&typeof i===p){i=i.call(e,c)}else{i=h.call(e,i,c)}if(i||i===0){a+=i}a+='"></textarea>\n                    </div>\n                </div>\n            '
return a}function g(e,s){return"Ask a question..."}function _(e,s){var a="",i
a+='\n                <textarea class="discussion-text" placeholder="'
o=n["_"]
i=o||e["_"]
c=u.program(7,q,s)
c.hash={}
c.fn=c
c.inverse=u.noop
if(o&&typeof i===p){i=i.call(e,c)}else{i=h.call(e,i,c)}if(i||i===0){a+=i}a+='"></textarea>\n            '
return a}function q(e,s){return"Ask a question..."}function b(e,s){var a,i,t,r
a="form-controls"
i="discussion"
t={}
r="Ask your question"
t["label"]=r
o=n.invokePartial
r=o||e.invokePartial
c=u.program(10,x,s)
c.hash=t
c.fn=c
c.inverse=u.noop
if(o&&typeof r===p){a=r.call(e,i,a,c)}else{a=h.call(e,r,i,a,c)}if(a||a===0){return a}else{return""}}function x(e,s){var n=""
return n}t+='<div class="ask-question">\n    '
r=s
r=u.invokePartial(a["discussion_question-guidelines"],"discussion_question-guidelines",r,n,a)
if(r||r===0){t+=r}t+='\n    <div class="question">\n        <label>\n            <span class="sr-only">\n                '
o=n["_"]
r=o||s["_"]
c=u.program(1,k,i)
c.hash={}
c.fn=c
c.inverse=u.noop
if(o&&typeof r===p){r=r.call(s,c)}else{r=h.call(s,r,c)}if(r||r===0){t+=r}t+="\n            </span>\n            "
o=n.newAskQuestionUi
r=o||s.newAskQuestionUi
l=n["if"]
c=u.program(3,m,i)
c.hash={}
c.fn=c
c.inverse=u.program(6,_,i)
r=l.call(s,r,c)
if(r||r===0){t+=r}t+="\n        </label>\n\n        "
o=n["_"]
r=o||s["_"]
c=u.program(9,b,i)
c.hash={}
c.fn=c
c.inverse=u.noop
if(o&&typeof r===p){r=r.call(s,c)}else{r=h.call(s,r,c)}if(r||r===0){t+=r}t+="\n    </div>\n</div>\n"
return t})
function wrapped_template(e,s){return absoluteLinks.makeHtmlLinksSafe(template(e,s))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/question-guidelines.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,n,a,i,s){a=a||e.helpers
var r="",l,t,o,c,f=this,h="function",p=a.blockHelperMissing
function u(e,n){var i="",s
i+='\n                <h4 class="guideline-header">\n                    '
o=a["_"]
s=o||e["_"]
c=f.program(2,d,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===h){s=s.call(e,c)}else{s=p.call(e,s,c)}if(s||s===0){i+=s}i+='\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
o=a["_"]
s=o||e["_"]
c=f.program(4,m,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===h){s=s.call(e,c)}else{s=p.call(e,s,c)}if(s||s===0){i+=s}i+="\n                    </em>\n                </div>\n                "
return i}function d(e,n){return"Be specific, and indicate a location in the text:"}function m(e,n){return"In the second paragraph, how is the moon large enough to block the sun? Isn't the sun way larger?"}function g(e,n){var i="",s
i+='\n                <h4 class="guideline-header">\n                    '
o=a["_"]
s=o||e["_"]
c=f.program(7,v,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===h){s=s.call(e,c)}else{s=p.call(e,s,c)}if(s||s===0){i+=s}i+='\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
o=a["_"]
s=o||e["_"]
c=f.program(9,k,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===h){s=s.call(e,c)}else{s=p.call(e,s,c)}if(s||s===0){i+=s}i+="\n                    </em>\n                </div>\n                "
return i}function v(e,n){return"Be specific, and indicate a time in the video:"}function k(e,n){return"At 5:31, how is the moon large enough to block the sun? Isn't the sun way larger?"}function _(e,n){return"Have something that's not a question about this content?"}function y(e,n){return"Post a tip or thanks"}function b(e,n){return"Join our help discussions"}function w(e,n){return"Report a technical problem with the site"}function q(e,n){return'<a class="alert-link" href="https://khanacademy.zendesk.com/hc/communities/public/topics/200136634-Feature-Requests">Request a feature</a>'}function A(e,n){var i,s
o=a.showSpinoffs
i=o||e.showSpinoffs
s=a.unless
c=f.program(22,x,n)
c.hash={}
c.fn=c
c.inverse=f.noop
i=s.call(e,i,c)
if(i||i===0){return i}else{return""}}function x(e,n){var i="",s,r
i+="\n                    <li>\n                        "
o=a.isVideo
s=o||e.isVideo
r=a["if"]
c=f.program(23,R,n)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(e,s,c)
if(s||s===0){i+=s}i+="\n                        "
o=a.isArticle
s=o||e.isArticle
r=a["if"]
c=f.program(26,H,n)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(e,s,c)
if(s||s===0){i+=s}i+="\n                    </li>\n                    "
return i}function R(e,n){var i="",s
i+='\n                        <a href="javascript:void 0;" class="simple-button suggest-clarification">'
o=a["_"]
s=o||e["_"]
c=f.program(24,j,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===h){s=s.call(e,c)}else{s=p.call(e,s,c)}if(s||s===0){i+=s}i+="</a>\n                        "
return i}function j(e,n){return"Report a mistake in the video"}function H(e,n){var i="",s
i+='\n                        <a href="javascript:void 0;" class="simple-button suggest-clarification">'
o=a["_"]
s=o||e["_"]
c=f.program(27,B,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===h){s=s.call(e,c)}else{s=p.call(e,s,c)}if(s||s===0){i+=s}i+="</a>\n                        "
return i}function B(e,n){return"Report a mistake in the article"}function I(e,n){return"This discussion area is not meant for answering homework questions."}function L(e,n){return'Before asking, please make sure you\'ve checked the top questions below and \n            <a href="https://khanacademy.org/r/computer-programming-faq">our FAQ</a>. Thanks!'}r+='<div class="question-guidelines post-guidelines alert pure-hidden-xs" style="display: none;">\n    <table>\n        <tr>\n            <td class="guideline-cell">\n                '
o=a.isArticle
l=o||n.isArticle
t=a["if"]
c=f.program(1,u,s)
c.hash={}
c.fn=c
c.inverse=f.program(6,g,s)
l=t.call(n,l,c)
if(l||l===0){r+=l}r+='\n            </td>\n            <td class="guideline-cell">\n                <h4 class="guideline-header">\n                    '
o=a["_"]
l=o||n["_"]
c=f.program(11,_,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof l===h){l=l.call(n,c)}else{l=p.call(n,l,c)}if(l||l===0){r+=l}r+='\n                </h4>\n                <ul class="guideline-items">\n                    <li>\n                        <a class="alert-link post-feedback-instead" href="javascript:void(0);">'
o=a["_"]
l=o||n["_"]
c=f.program(13,y,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof l===h){l=l.call(n,c)}else{l=p.call(n,l,c)}if(l||l===0){r+=l}r+='</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="https://khanacademy.zendesk.com/hc/communities/public/topics">'
o=a["_"]
l=o||n["_"]
c=f.program(15,b,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof l===h){l=l.call(n,c)}else{l=p.call(n,l,c)}if(l||l===0){r+=l}r+='</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="http://khanacademy.org/reportissue?type=Defect">'
o=a["_"]
l=o||n["_"]
c=f.program(17,w,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof l===h){l=l.call(n,c)}else{l=p.call(n,l,c)}if(l||l===0){r+=l}r+="</a>\n                    </li>\n                    <li>\n                        "
o=a["_"]
l=o||n["_"]
c=f.program(19,q,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof l===h){l=l.call(n,c)}else{l=p.call(n,l,c)}if(l||l===0){r+=l}r+="\n                    </li>\n                    "
o=a.scratchpad
l=o||n.scratchpad
t=a.unless
c=f.program(21,A,s)
c.hash={}
c.fn=c
c.inverse=f.noop
l=t.call(n,l,c)
if(l||l===0){r+=l}r+='\n                </ul>\n            </td>\n        </tr>\n    </table>\n    <div class="guideline-message">\n        <h5 class="no-homework">\n            '
o=a["_"]
l=o||n["_"]
c=f.program(29,I,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof l===h){l=l.call(n,c)}else{l=p.call(n,l,c)}if(l||l===0){r+=l}r+='\n        </h5>\n        <h5 class="check-the-faq">\n            '
o=a["_"]
l=o||n["_"]
c=f.program(31,L,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof l===h){l=l.call(n,c)}else{l=p.call(n,l,c)}if(l||l===0){r+=l}r+="\n        </h5>\n    </div>\n</div>\n"
return r})
function wrapped_template(e,n){return absoluteLinks.makeHtmlLinksSafe(template(e,n))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/answer-form.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,n,a,r,s){a=a||e.helpers
var l="",t,i,o,p,f=this,c="function",u=a.blockHelperMissing,h=a.helperMissing,v=void 0,m=this.escapeExpression
function d(e,n){var r="",s
r+='\n    <label><input type="checkbox" class="from-video-author"> <strong>'
o=a["_"]
s=o||e["_"]
p=f.program(2,k,n)
p.hash={}
p.fn=p
p.inverse=f.noop
if(o&&typeof s===c){s=s.call(e,p)}else{s=u.call(e,s,p)}if(s||s===0){r+=s}r+="</strong></label><br>\n    "
return r}function k(e,n){return"From the author:"}function y(e,n){return"Answer this question"}function b(e,n){return"Answer this question..."}function g(e,n){var r,s,l,t
r="form-controls"
s="discussion"
l={}
t="Answer"
l["label"]=t
o=a.invokePartial
t=o||e.invokePartial
p=f.program(9,_,n)
p.hash=l
p.fn=p
p.inverse=f.noop
if(o&&typeof t===c){r=t.call(e,s,r,p)}else{r=u.call(e,t,s,r,p)}if(r||r===0){return r}else{return""}}function _(e,n){var a=""
return a}l+='<div class="answer">\n    <input type="hidden" name="question-key" value="'
o=a.key
t=o||n.key
if(typeof t===c){t=t.call(n,{hash:{}})}else if(t===v){t=h.call(n,"key",{hash:{}})}l+=m(t)+'">\n\n    '
o=a.isDeveloper
t=o||n.isDeveloper
i=a["if"]
p=f.program(1,d,s)
p.hash={}
p.fn=p
p.inverse=f.noop
t=i.call(n,t,p)
if(t||t===0){l+=t}l+='\n\n    <label>\n        <span class="sr-only">\n            '
o=a["_"]
t=o||n["_"]
p=f.program(4,y,s)
p.hash={}
p.fn=p
p.inverse=f.noop
if(o&&typeof t===c){t=t.call(n,p)}else{t=u.call(n,t,p)}if(t||t===0){l+=t}l+='\n        </span>\n        <textarea class="discussion-text" placeholder="'
o=a["_"]
t=o||n["_"]
p=f.program(6,b,s)
p.hash={}
p.fn=p
p.inverse=f.noop
if(o&&typeof t===c){t=t.call(n,p)}else{t=u.call(n,t,p)}if(t||t===0){l+=t}l+='"></textarea>\n    </label>\n\n    '
o=a["_"]
t=o||n["_"]
p=f.program(8,g,s)
p.hash={}
p.fn=p
p.inverse=f.noop
if(o&&typeof t===c){t=t.call(n,p)}else{t=u.call(n,t,p)}if(t||t===0){l+=t}l+="\n</div>\n"
return l})
function wrapped_template(e,n){return absoluteLinks.makeHtmlLinksSafe(template(e,n))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/feedback-guidelines.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,n,a,i,s){a=a||e.helpers
var l="",r,t,o,c,f=this,p="function",h=a.blockHelperMissing
function u(e,n){return"Share a tip"}function d(e,n){return"When naming a variable, it is okay to use most letters, but some are reserved, like 'e', which represents the value 2.7183..."}function m(e,n){return"Thank the author"}function g(e,n){return"This is great, I finally understand quadratic functions!"}function v(e,n){return"Have something that's not a tip or thanks about this content?"}function k(e,n){return"Ask a question"}function _(e,n){return"Join our help discussions"}function y(e,n){return"Report a technical problem with the site"}function b(e,n){return"Request a feature"}function w(e,n){var i,s
o=a.showSpinoffs
i=o||e.showSpinoffs
s=a.unless
c=f.program(20,q,n)
c.hash={}
c.fn=c
c.inverse=f.noop
i=s.call(e,i,c)
if(i||i===0){return i}else{return""}}function q(e,n){var i="",s,l
i+="\n                    <li>\n                        "
o=a.isVideo
s=o||e.isVideo
l=a["if"]
c=f.program(21,R,n)
c.hash={}
c.fn=c
c.inverse=f.noop
s=l.call(e,s,c)
if(s||s===0){i+=s}i+="\n                        "
o=a.isArticle
s=o||e.isArticle
l=a["if"]
c=f.program(24,H,n)
c.hash={}
c.fn=c
c.inverse=f.noop
s=l.call(e,s,c)
if(s||s===0){i+=s}i+="\n                    </li>\n                    "
return i}function R(e,n){var i="",s
i+='\n                        <a href="javascript:void 0;" class="simple-button suggest-clarification">'
o=a["_"]
s=o||e["_"]
c=f.program(22,j,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===p){s=s.call(e,c)}else{s=h.call(e,s,c)}if(s||s===0){i+=s}i+="</a>\n                        "
return i}function j(e,n){return"Report a mistake in the video"}function H(e,n){var i="",s
i+='\n                        <a href="javascript:void 0;" class="simple-button suggest-clarification">'
o=a["_"]
s=o||e["_"]
c=f.program(25,S,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===p){s=s.call(e,c)}else{s=h.call(e,s,c)}if(s||s===0){i+=s}i+="</a>\n                        "
return i}function S(e,n){return"Report a mistake in the article"}function x(e,n){return"This discussion area is not meant for answering homework questions."}l+='<div class="feedback-guidelines post-guidelines alert" style="display: none;">\n    <table>\n        <tr>\n            <td class="guideline-cell">\n                <h4 class="guideline-header">\n                    '
o=a["_"]
r=o||n["_"]
c=f.program(1,u,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===p){r=r.call(n,c)}else{r=h.call(n,r,c)}if(r||r===0){l+=r}l+='\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
o=a["_"]
r=o||n["_"]
c=f.program(3,d,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===p){r=r.call(n,c)}else{r=h.call(n,r,c)}if(r||r===0){l+=r}l+='\n                    </em>\n                </div>\n                <br>\n                <h4 class="guideline-header">\n                    '
o=a["_"]
r=o||n["_"]
c=f.program(5,m,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===p){r=r.call(n,c)}else{r=h.call(n,r,c)}if(r||r===0){l+=r}l+='\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
o=a["_"]
r=o||n["_"]
c=f.program(7,g,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===p){r=r.call(n,c)}else{r=h.call(n,r,c)}if(r||r===0){l+=r}l+='\n                    </em>\n                </div>\n            </td>\n            <td class="guideline-cell">\n                <h4 class="guideline-header">\n                    '
o=a["_"]
r=o||n["_"]
c=f.program(9,v,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===p){r=r.call(n,c)}else{r=h.call(n,r,c)}if(r||r===0){l+=r}l+='\n                </h4>\n                <ul class="guideline-items">\n                    <li>\n                        <a class="alert-link ask-question-instead" href="javascript:void(0);">'
o=a["_"]
r=o||n["_"]
c=f.program(11,k,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===p){r=r.call(n,c)}else{r=h.call(n,r,c)}if(r||r===0){l+=r}l+='</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="https://khanacademy.zendesk.com/hc/communities/public/topics">'
o=a["_"]
r=o||n["_"]
c=f.program(13,_,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===p){r=r.call(n,c)}else{r=h.call(n,r,c)}if(r||r===0){l+=r}l+='</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="http://khanacademy.org/reportissue?type=Defect">'
o=a["_"]
r=o||n["_"]
c=f.program(15,y,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===p){r=r.call(n,c)}else{r=h.call(n,r,c)}if(r||r===0){l+=r}l+='</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="https://khanacademy.zendesk.com/hc/communities/public/topics/200136634-Feature-Requests">'
o=a["_"]
r=o||n["_"]
c=f.program(17,b,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===p){r=r.call(n,c)}else{r=h.call(n,r,c)}if(r||r===0){l+=r}l+="</a>\n                    </li>\n                    "
o=a.scratchpad
r=o||n.scratchpad
t=a.unless
c=f.program(19,w,s)
c.hash={}
c.fn=c
c.inverse=f.noop
r=t.call(n,r,c)
if(r||r===0){l+=r}l+='\n                </ul>\n            </td>\n        </tr>\n    </table>\n    <div class="guideline-message">\n        <h5 class="no-homework">\n            '
o=a["_"]
r=o||n["_"]
c=f.program(27,x,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===p){r=r.call(n,c)}else{r=h.call(n,r,c)}if(r||r===0){l+=r}l+="\n        </h5>\n    </div>\n</div>\n"
return l})
function wrapped_template(e,n){return absoluteLinks.makeHtmlLinksSafe(template(e,n))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/comment-form.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,a,n,s,t){n=n||e.helpers
s=s||e.partials
var i="",r,l,o,c=this,p="function",f=n.blockHelperMissing
function u(e,a){return"Post a tip or thanks..."}function d(e,a){var s,t,i,r
s="form-controls"
t="discussion"
i={}
r="Post your tip or thanks"
i["label"]=r
l=n.invokePartial
r=l||e.invokePartial
o=c.program(4,k,a)
o.hash=i
o.fn=o
o.inverse=c.noop
if(l&&typeof r===p){s=r.call(e,t,s,o)}else{s=f.call(e,r,t,s,o)}if(s||s===0){return s}else{return""}}function k(e,a){var n=""
return n}i+='<div class="post-feedback">\n    '
r=a
r=c.invokePartial(s["discussion_feedback-guidelines"],"discussion_feedback-guidelines",r,n,s)
if(r||r===0){i+=r}i+='\n    <div class="comment">\n        <textarea class="discussion-text" placeholder="'
l=n["_"]
r=l||a["_"]
o=c.program(1,u,t)
o.hash={}
o.fn=o
o.inverse=c.noop
if(l&&typeof r===p){r=r.call(a,o)}else{r=f.call(a,r,o)}if(r||r===0){i+=r}i+='"></textarea>\n        '
l=n["_"]
r=l||a["_"]
o=c.program(3,d,t)
o.hash={}
o.fn=o
o.inverse=c.noop
if(l&&typeof r===p){r=r.call(a,o)}else{r=f.call(a,r,o)}if(r||r===0){i+=r}i+="\n    </div>\n</div>\n"
return i})
function wrapped_template(e,a){return absoluteLinks.makeHtmlLinksSafe(template(e,a))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/reply.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(a,e,n,s,l){n=n||a.helpers
s=s||a.partials
var r="",o,t,i,f,h,c=this,u="function",p=n.blockHelperMissing,d=n.helperMissing,v=void 0,m=this.escapeExpression
function y(a,e){return" deleted"}function g(a,e){var s="",l,r
s+='\n            <span class="mod-tools" data-key="'
f=n.key
l=f||a.key
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"key",{hash:{}})}s+=m(l)+'" data-is-author="'
f=n.showAuthorControls
l=f||a.showAuthorControls
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"showAuthorControls",{hash:{}})}s+=m(l)+'" data-in-queue="'
f=n.inQueue
l=f||a.inQueue
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"inQueue",{hash:{}})}s+=m(l)+'">\n                '
f=n.deleted
l=f||a.deleted
r=n["if"]
h=c.program(4,k,e)
h.hash={}
h.fn=h
h.inverse=c.program(7,C,e)
l=r.call(a,l,h)
if(l||l===0){s+=l}s+="\n            </span>\n            "
return s}function k(a,e){var s="",l
s+='\n                    <a href="javascript:void(0);" class="undelete">'
f=n["_"]
l=f||a["_"]
h=c.program(5,_,e)
h.hash={}
h.fn=h
h.inverse=c.noop
if(f&&typeof l===u){l=l.call(a,h)}else{l=p.call(a,l,h)}if(l||l===0){s+=l}s+="</a>\n                "
return s}function _(a,e){return"Undelete"}function C(a,e){var s="",l
s+='\n                    <a href="javascript:void(0);" class="delete">'
f=n["_"]
l=f||a["_"]
h=c.program(8,w,e)
h.hash={}
h.fn=h
h.inverse=c.noop
if(f&&typeof l===u){l=l.call(a,h)}else{l=p.call(a,l,h)}if(l||l===0){s+=l}s+="</a>\n                "
return s}function w(a,e){return"Delete"}function A(a,e){var s="",l,r
s+="\n                "
f=n.showAuthorControls
l=f||a.showAuthorControls
r=n["if"]
h=c.program(11,U,e)
h.hash={}
h.fn=h
h.inverse=c.noop
l=r.call(a,l,h)
if(l||l===0){s+=l}s+="\n            "
return s}function U(a,e){var s="",l
s+='\n                <span class="mod-tools" data-key="'
f=n.key
l=f||a.key
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"key",{hash:{}})}s+=m(l)+'" data-is-author="'
f=n.showAuthorControls
l=f||a.showAuthorControls
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"showAuthorControls",{hash:{}})}s+=m(l)+'" data-in-queue="'
f=n.inQueue
l=f||a.inQueue
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"inQueue",{hash:{}})}s+=m(l)+'">\n                    <a href="javascript:void(0);" class="delete">'
f=n["_"]
l=f||a["_"]
h=c.program(12,S,e)
h.hash={}
h.fn=h
h.inverse=c.noop
if(f&&typeof l===u){l=l.call(a,h)}else{l=p.call(a,l,h)}if(l||l===0){s+=l}s+="</a>\n                </span>\n                "
return s}function S(a,e){return"Delete"}function x(a,e){var l="",r
l+="\n                "
r=a
r=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",r,n,s)
if(r||r===0){l+=r}l+="\n                "
r=a
r=c.invokePartial(s["discussion_flag-controls"],"discussion_flag-controls",r,n,s)
if(r||r===0){l+=r}l+="\n            "
return l}function K(a,e){var s="",l,r
s+="\n                "
f=n.showModControls
l=f||a.showModControls
r=n["if"]
h=c.program(17,b,e)
h.hash={}
h.fn=h
h.inverse=c.program(21,Q,e)
l=r.call(a,l,h)
if(l||l===0){s+=l}s+="\n            "
return s}function b(a,e){var s="",l,r
s+='\n                    <a href="'
f=n.permalink
l=f||a.permalink
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"permalink",{hash:{}})}s+=m(l)
f=n.expandKey
l=f||a.expandKey
r=n["if"]
h=c.program(18,M,e)
h.hash={}
h.fn=h
h.inverse=c.noop
l=r.call(a,l,h)
if(l||l===0){s+=l}s+='"\n                       class="timeago" title="'
f=n.date
l=f||a.date
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"date",{hash:{}})}s+=m(l)+'">\n                        '
f=n.date
l=f||a.date
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"date",{hash:{}})}s+=m(l)+"\n                    </a>\n                "
return s}function M(a,e){var s,l
f=n.usesSeoUrlSchema
s=f||a.usesSeoUrlSchema
l=n.unless
h=c.program(19,P,e)
h.hash={}
h.fn=h
h.inverse=c.noop
s=l.call(a,s,h)
if(s||s===0){return s}else{return""}}function P(a,e){var s="",l
s+="?qa_expand_key="
f=n.expandKey
l=f||a.expandKey
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"expandKey",{hash:{}})}s+=m(l)
return s}function Q(a,e){var s="",l
s+='\n                    <span class="timeago" title="'
f=n.date
l=f||a.date
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"date",{hash:{}})}s+=m(l)+'">\n                        '
f=n.date
l=f||a.date
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"date",{hash:{}})}s+=m(l)+"\n                    </span>\n                "
return s}function N(a,e){var s="",l
s+='\n                <span class="timeago" title="'
f=n.date
l=f||a.date
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"date",{hash:{}})}s+=m(l)+'">\n                    '
f=n.date
l=f||a.date
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"date",{hash:{}})}s+=m(l)+"\n                </span>\n            "
return s}function j(a,e){var s="",l,r
s+="\n                "
s+='\n                <span class="discussion-meta-faded">'
f=n["_"]
l=f||a["_"]
h=c.program(26,q,e)
h.hash={}
h.fn=h
h.inverse=c.noop
if(f&&typeof l===u){l=l.call(a,h)}else{l=p.call(a,l,h)}if(l||l===0){s+=l}s+="</span>\n                "
f=n.authorNickname
l=f||a.authorNickname
r=n["if"]
h=c.program(28,D,e)
h.hash={}
h.fn=h
h.inverse=c.program(33,F,e)
l=r.call(a,l,h)
if(l||l===0){s+=l}s+="\n            "
return s}function q(a,e){return"by"}function D(a,e){var s="",l,r
s+='\n                <a class="author-nickname discussion-author" data-user-kaid="'
f=n.authorKaid
l=f||a.authorKaid
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"authorKaid",{hash:{}})}s+=m(l)+'">\n                    '
f=n.authorAvatarSrc
l=f||a.authorAvatarSrc
r=n["if"]
h=c.program(29,H,e)
h.hash={}
h.fn=h
h.inverse=c.noop
l=r.call(a,l,h)
if(l||l===0){s+=l}s+='\n                    <span class="sr-only">'
f=n["_"]
l=f||a["_"]
h=c.program(31,L,e)
h.hash={}
h.fn=h
h.inverse=c.noop
if(f&&typeof l===u){l=l.call(a,h)}else{l=p.call(a,l,h)}if(l||l===0){s+=l}s+=" </span>\n                    "
f=n.authorNickname
l=f||a.authorNickname
if(typeof l===u){l=l.call(a,{hash:{}})}else if(l===v){l=d.call(a,"authorNickname",{hash:{}})}s+=m(l)+"\n                </a>\n                "
return s}function H(a,e){var s="",l,r
s+='\n                        <img class="discussion-author-avatar"\n                             src="'
f=n.authorAvatarSrc
l=f||a.authorAvatarSrc
f=n.staticUrl
r=f||a.staticUrl
if(typeof r===u){l=r.call(a,l,{hash:{}})}else if(r===v){l=d.call(a,"staticUrl",l,{hash:{}})}else{l=r}s+=m(l)+'"\n                             alt="">\n                    '
return s}function L(a,e){return"View profile for:"}function F(a,e){var s="",l
s+="\n                "
f=n["_"]
l=f||a["_"]
h=c.program(34,E,e)
h.hash={}
h.fn=h
h.inverse=c.noop
if(f&&typeof l===u){l=l.call(a,h)}else{l=p.call(a,l,h)}if(l||l===0){s+=l}s+="\n                "
return s}function E(a,e){return"Anonymous"}r+='<div class="discussion-item reply'
f=n.appearsAsDeleted
o=f||e.appearsAsDeleted
t=n["if"]
h=c.program(1,y,l)
h.hash={}
h.fn=h
h.inverse=c.noop
o=t.call(e,o,h)
if(o||o===0){r+=o}r+='" id="'
f=n.key
o=f||e.key
if(typeof o===u){o=o.call(e,{hash:{}})}else if(o===v){o=d.call(e,"key",{hash:{}})}r+=m(o)+'">\n    <div class="discussion-content">\n        '
f=n.content
o=f||e.content
t={}
i=1
t["nofollow"]=i
f=n.formatContent
i=f||e.formatContent
h={}
h.hash=t
if(typeof i===u){o=i.call(e,o,h)}else if(i===v){o=d.call(e,"formatContent",o,h)}else{o=i}r+=m(o)+"\n    </div>\n\n    "
r+='\n    <div class="discussion-meta">\n        <div class="discussion-meta-controls">\n            '
f=n.showModControls
o=f||e.showModControls
t=n["if"]
h=c.program(3,g,l)
h.hash={}
h.fn=h
h.inverse=c.program(10,A,l)
o=t.call(e,o,h)
if(o||o===0){r+=o}r+="\n            "
f=n.hideFlagControls
o=f||e.hideFlagControls
t=n.unless
h=c.program(14,x,l)
h.hash={}
h.fn=h
h.inverse=c.noop
o=t.call(e,o,h)
if(o||o===0){r+=o}r+='\n        </div>\n        <div class="discussion-meta-info">\n            '
f=n.inUserProfile
o=f||e.inUserProfile
t=n["if"]
h=c.program(16,K,l)
h.hash={}
h.fn=h
h.inverse=c.program(23,N,l)
o=t.call(e,o,h)
if(o||o===0){r+=o}r+="\n\n            "
f=n.inUserProfile
o=f||e.inUserProfile
t=n.unless
h=c.program(25,j,l)
h.hash={}
h.fn=h
h.inverse=c.noop
o=t.call(e,o,h)
if(o||o===0){r+=o}r+='\n        </div>\n    </div>\n    <div class="item-separator"></div>\n</div>\n'
return r})
function wrapped_template(a,e){return absoluteLinks.makeHtmlLinksSafe(template(a,e))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/reply-form.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,n,t,a,s){t=t||e.helpers
var l="",i,r,o,p=this,c="function",u=t.blockHelperMissing
function d(e,n){return"or"}function v(e,n){var a,s,l,i
a="form-controls"
s="discussion"
l={}
i="Comment"
l["label"]=i
r=t.invokePartial
i=r||e.invokePartial
o=p.program(4,f,n)
o.hash=l
o.fn=o
o.inverse=p.noop
if(r&&typeof i===c){a=i.call(e,s,a,o)}else{a=u.call(e,i,s,a,o)}if(a||a===0){return a}else{return""}}function f(e,n){var t=""
return t}l+='<div class="discussion-item reply">\n    <div class="reply-alt-controls" style="display:none">\n        <div>\n            <input class="simple-button choose-reply-alt"\n                   type="button"\n                   value="">\n        </div>\n        <div class="or">\n        '
r=t["_"]
i=r||n["_"]
o=p.program(1,d,s)
o.hash={}
o.fn=o
o.inverse=p.noop
if(r&&typeof i===c){i=i.call(n,o)}else{i=u.call(n,i,o)}if(i||i===0){l+=i}l+='\n        </div>\n        <div class="div-text-dummy">\n            <textarea class="discussion-text-dummy"></textarea>\n        </div>\n    </div>\n    <textarea class="discussion-text"></textarea>\n\n    '
r=t["_"]
i=r||n["_"]
o=p.program(3,v,s)
o.hash={}
o.fn=o
o.inverse=p.noop
if(r&&typeof i===c){i=i.call(n,o)}else{i=u.call(n,i,o)}if(i||i===0){l+=i}l+="\n</div>\n"
return l})
function wrapped_template(e,n){return absoluteLinks.makeHtmlLinksSafe(template(e,n))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/discussion-meta.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(n,e,a,s,r){a=a||n.helpers
s=s||n.partials
var o="",l,t,i,f,c=this,u="function",h=a.helperMissing,p=void 0,d=this.escapeExpression,m=a.blockHelperMissing
function v(n,e){var r="",o,l
r+="\n            "
i=a.badges
o=i||n.badges
l=a.each
f=c.program(2,y,e)
f.hash={}
f.fn=f
f.inverse=c.noop
o=l.call(n,o,f)
if(o||o===0){r+=o}r+="\n            "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n        "
return r}function y(n,e){var s="",r,o
s+='\n                <img class="discussion-badge-icon" title="'
i=a.translatedDescription
r=i||n.translatedDescription
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"translatedDescription",{hash:{}})}s+=d(r)+'"\n                     src="'
i=a.iconSrc
r=i||n.iconSrc
i=a.stripProtocol
o=i||n.stripProtocol
if(typeof o===u){r=o.call(n,r,{hash:{}})}else if(o===p){r=h.call(n,"stripProtocol",r,{hash:{}})}else{r=o}s+=d(r)+'" alt="'
i=a.translatedDescription
r=i||n.translatedDescription
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"translatedDescription",{hash:{}})}s+=d(r)+'" />\n            '
return s}function g(n,e){var s="",r,o
s+="\n        "
i=a.hideVotes
r=i||n.hideVotes
o=a.unless
f=c.program(5,C,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function C(n,e){var s="",r,o
s+='\n        <span class="sum-votes">\n            '
i=a.sumVotesIncremented
r=i||n.sumVotesIncremented
i=a.ngettext
o=i||n.ngettext
f=c.program(6,_,e)
f.hash={}
f.fn=f
f.inverse=c.program(8,k,e)
if(i&&typeof o===u){r=o.call(n,r,f)}else{r=m.call(n,o,r,f)}if(r||r===0){s+=r}s+="\n        </span>\n        "
return s}function _(n,e){var s="",r
i=a.sumVotesIncremented
r=i||n.sumVotesIncremented
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"sumVotesIncremented",{hash:{}})}s+=d(r)+' <span class="vote-word">Vote</span>'
return s}function k(n,e){var s="",r
i=a.sumVotesIncremented
r=i||n.sumVotesIncremented
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"sumVotesIncremented",{hash:{}})}s+=d(r)+' <span class="vote-word">Votes</span>'
return s}function x(n,e){var r="",o,l
r+="\n            "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n            <span>"
i=a.spinoffCount
o=i||n.spinoffCount
i=a.ngettext
l=i||n.ngettext
f=c.program(11,P,e)
f.hash={}
f.fn=f
f.inverse=c.program(13,S,e)
if(i&&typeof l===u){o=l.call(n,o,f)}else{o=m.call(n,l,o,f)}if(o||o===0){r+=o}r+="</span>\n        "
return r}function P(n,e){var s="",r
i=a.spinoffCount
r=i||n.spinoffCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"spinoffCount",{hash:{}})}s+=d(r)+" Spin-off"
return s}function S(n,e){var s="",r
i=a.spinoffCount
r=i||n.spinoffCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"spinoffCount",{hash:{}})}s+=d(r)+" Spin-offs"
return s}function b(n,e){var s="",r,o
s+="\n        "
i=a.inUserProfile
r=i||n.inUserProfile
o=a.unless
f=c.program(16,V,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function V(n,e){var s="",r,o
s+="\n"
s+="\n            "
i=a.hideVoteControls
r=i||n.hideVoteControls
o=a.unless
f=c.program(17,w,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n\n            "
s+="\n            "
i=a.isScratchpad
r=i||n.isScratchpad
o=a.unless
f=c.program(20,K,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function w(n,e){var s="",r,o
s+="\n            "
i=a.isScratchpadCard
r=i||n.isScratchpadCard
o=a.unless
f=c.program(18,I,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n            "
return s}function I(n,e){var r="",o
r+="\n                "
o=n
o=c.invokePartial(s["discussion_vote-controls"],"discussion_vote-controls",o,a,s)
if(o||o===0){r+=o}r+="\n            "
return r}function K(n,e){var s="",r,o
s+="\n\n"
s+="\n                "
i=a.restrictPosting
r=i||n.restrictPosting
o=a["if"]
f=c.program(21,U,e)
f.hash={}
f.fn=f
f.inverse=c.program(27,j,e)
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n            "
return s}function U(n,e){var s="",r,o
s+="\n                    "
i=a.replyCount
r=i||n.replyCount
o=a["if"]
f=c.program(22,A,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n                "
return s}function A(n,e){var r="",o,l
r+="\n                        "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n\n                        "
r+='\n                        <a href="javascript:void(0);" class="toggle-replies show-replies"\n                           data-reply-count="'
i=a.replyCount
o=i||n.replyCount
if(typeof o===u){o=o.call(n,{hash:{}})}else if(o===p){o=h.call(n,"replyCount",{hash:{}})}r+=d(o)+'">'
i=a.replyCount
o=i||n.replyCount
i=a.ngettext
l=i||n.ngettext
f=c.program(23,N,e)
f.hash={}
f.fn=f
f.inverse=c.program(25,D,e)
if(i&&typeof l===u){o=l.call(n,o,f)}else{o=m.call(n,l,o,f)}if(o||o===0){r+=o}r+="</a>\n                    "
return r}function N(n,e){var s="",r
i=a.replyCount
r=i||n.replyCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"replyCount",{hash:{}})}s+=d(r)+" Comment"
return s}function D(n,e){var s="",r
i=a.replyCount
r=i||n.replyCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"replyCount",{hash:{}})}s+=d(r)+" Comments"
return s}function j(n,e){var r="",o,l
r+="\n                    "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n\n                    "
r+='\n                    <a href="javascript:void(0);" class="toggle-replies show-replies"\n                       data-reply-count="'
i=a.replyCount
o=i||n.replyCount
if(typeof o===u){o=o.call(n,{hash:{}})}else if(o===p){o=h.call(n,"replyCount",{hash:{}})}r+=d(o)+'">\n                        '
i=a.replyCount
o=i||n.replyCount
l=a["if"]
f=c.program(28,q,e)
f.hash={}
f.fn=f
f.inverse=c.program(33,F,e)
o=l.call(n,o,f)
if(o||o===0){r+=o}r+="\n                    </a>\n                "
return r}function q(n,e){var s="",r,o
s+="\n                            "
i=a.replyCount
r=i||n.replyCount
i=a.ngettext
o=i||n.ngettext
f=c.program(29,T,e)
f.hash={}
f.fn=f
f.inverse=c.program(31,E,e)
if(i&&typeof o===u){r=o.call(n,r,f)}else{r=m.call(n,o,r,f)}if(r||r===0){s+=r}s+="\n                        "
return s}function T(n,e){var s="",r
s+="\n                                "
i=a.replyCount
r=i||n.replyCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"replyCount",{hash:{}})}s+=d(r)+" Comment\n                            "
return s}function E(n,e){var s="",r
s+="\n                                "
i=a.replyCount
r=i||n.replyCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"replyCount",{hash:{}})}s+=d(r)+" Comments\n                            "
return s}function F(n,e){var s="",r,o
s+="\n                            "
i=a.authorNickname
r=i||n.authorNickname
o=a["if"]
f=c.program(34,M,e)
f.hash={}
f.fn=f
f.inverse=c.program(37,L,e)
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n                        "
return s}function M(n,e){var s="",r
s+="\n                                "
i=a["_"]
r=i||n["_"]
f=c.program(35,H,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof r===u){r=r.call(n,f)}else{r=m.call(n,r,f)}if(r||r===0){s+=r}s+="\n                            "
return s}function H(n,e){var s="",r
s+='Comment <span class="sr-only">on '
i=a.authorNickname
r=i||n.authorNickname
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"authorNickname",{hash:{}})}s+=d(r)+"'s question</span>"
return s}function L(n,e){var s="",r
s+="\n                                "
i=a["_"]
r=i||n["_"]
f=c.program(38,Y,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof r===u){r=r.call(n,f)}else{r=m.call(n,r,f)}if(r||r===0){s+=r}s+="\n                            "
return s}function Y(n,e){return'Comment <span class="sr-only">on this question</span>'}function z(n,e){var s="",r,o
s+="\n"
s+="\n            "
i=a.hideFlagControls
r=i||n.hideFlagControls
o=a.unless
f=c.program(41,B,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function B(n,e){var r="",o
r+="\n                "
o=n
o=c.invokePartial(s["discussion_mod-controls"],"discussion_mod-controls",o,a,s)
if(o||o===0){r+=o}r+="\n            "
return r}function G(n,e){var s="",r,o
s+="\n            "
i=a.showAuthorControls
r=i||n.showAuthorControls
o=a["if"]
f=c.program(44,J,e)
f.hash={}
f.fn=f
f.inverse=c.program(47,Q,e)
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function J(n,e){var s="",r,o
s+="\n"
s+="\n                "
i=a.isScratchpad
r=i||n.isScratchpad
o=a.unless
f=c.program(45,O,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n            "
return s}function O(n,e){var r="",o
r+="\n                    "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n                    "
o=n
o=c.invokePartial(s["discussion_author-controls"],"discussion_author-controls",o,a,s)
if(o||o===0){r+=o}r+="\n                "
return r}function Q(n,e){var s="",r,o
s+="\n"
s+="\n                "
i=a.hideFlagControls
r=i||n.hideFlagControls
o=a.unless
f=c.program(48,R,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n            "
return s}function R(n,e){var r="",o
r+="\n                    "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n                    "
o=n
o=c.invokePartial(s["discussion_flag-controls"],"discussion_flag-controls",o,a,s)
if(o||o===0){r+=o}r+="\n                "
return r}function W(n,e){var s="",r,o
s+='\n    <div class="discussion-meta-info">\n'
s+='\n        <a href="'
i=a.permalink
r=i||n.permalink
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"permalink",{hash:{}})}s+=d(r)
i=a.expandKey
r=i||n.expandKey
o=a["if"]
f=c.program(51,X,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+='"\n           class="timeago" title="'
i=a.date
r=i||n.date
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"date",{hash:{}})}s+=d(r)+'">\n            '
i=a.date
r=i||n.date
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"date",{hash:{}})}s+=d(r)+"\n        </a>\n\n        "
i=a.focus
r=i||n.focus
o=a["if"]
f=c.program(54,ne,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n\n        "
i=a.inUserProfile
r=i||n.inUserProfile
o=a.unless
f=c.program(61,re,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n    </div>\n    "
return s}function X(n,e){var s,r
i=a.usesSeoUrlSchema
s=i||n.usesSeoUrlSchema
r=a.unless
f=c.program(52,Z,e)
f.hash={}
f.fn=f
f.inverse=c.noop
s=r.call(n,s,f)
if(s||s===0){return s}else{return""}}function Z(n,e){var s="",r
s+="?qa_expand_key="
i=a.expandKey
r=i||n.expandKey
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"expandKey",{hash:{}})}s+=d(r)
return s}function ne(n,e){var s="",r,o
s+="\n"
s+="\n            "
s+='\n            <span class="discussion-meta-faded">'
i=a["_"]
r=i||n["_"]
f=c.program(55,ee,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof r===u){r=r.call(n,f)}else{r=m.call(n,r,f)}if(r||r===0){s+=r}s+="</span>\n            "
i=a.focusIsVideo
r=i||n.focusIsVideo
o=a["if"]
f=c.program(57,ae,e)
f.hash={}
f.fn=f
f.inverse=c.program(59,se,e)
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function ee(n,e){return"on"}function ae(n,e){var s="",r
s+='\n                <a class="modal-video"\n                   href="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.relativeUrl
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.relativeUrl",{hash:{}})}s+=d(r)+"?qa_expand_key="
i=a.expandKey
r=i||n.expandKey
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"expandKey",{hash:{}})}s+=d(r)+'"\n                   data-translated-title="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.translatedTitle
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.translatedTitle",{hash:{}})}s+=d(r)+'"\n                   data-translated-description="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.translatedDescription
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.translatedDescription",{hash:{}})}s+=d(r)+'"\n                   data-youtube-id="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.youtubeId
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.youtubeId",{hash:{}})}s+=d(r)+'"\n                   data-translated-youtube-id="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.translatedYoutubeId
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.translatedYoutubeId",{hash:{}})}s+=d(r)+'">\n                    '
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.translatedTitle
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.translatedTitle",{hash:{}})}s+=d(r)+"\n                </a>\n            "
return s}function se(n,e){var s="",r
s+='\n                <a href="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.relativeUrl
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.relativeUrl",{hash:{}})}s+=d(r)+"?qa_expand_key="
i=a.expandKey
r=i||n.expandKey
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"expandKey",{hash:{}})}s+=d(r)+'">\n                    '
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.translatedTitle
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.translatedTitle",{hash:{}})}s+=d(r)+"\n                </a>\n            "
return s}function re(n,e){var s="",r,o
s+="\n"
s+="\n            "
s+='\n            <span class="discussion-meta-faded">'
i=a["_"]
r=i||n["_"]
f=c.program(62,oe,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof r===u){r=r.call(n,f)}else{r=m.call(n,r,f)}if(r||r===0){s+=r}s+="</span>\n            "
i=a.authorNickname
r=i||n.authorNickname
o=a["if"]
f=c.program(64,le,e)
f.hash={}
f.fn=f
f.inverse=c.program(69,fe,e)
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function oe(n,e){return"by"}function le(n,e){var s="",r,o
s+='\n            <a class="author-nickname discussion-author" data-user-kaid="'
i=a.authorKaid
r=i||n.authorKaid
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"authorKaid",{hash:{}})}s+=d(r)+'">\n                '
i=a.authorAvatarSrc
r=i||n.authorAvatarSrc
o=a["if"]
f=c.program(65,te,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+='\n                <span class="sr-only">'
i=a["_"]
r=i||n["_"]
f=c.program(67,ie,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof r===u){r=r.call(n,f)}else{r=m.call(n,r,f)}if(r||r===0){s+=r}s+=" </span>\n                "
i=a.authorNickname
r=i||n.authorNickname
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"authorNickname",{hash:{}})}s+=d(r)+"\n            </a>\n            "
return s}function te(n,e){var s="",r,o
s+='\n                    <img class="discussion-author-avatar" src="'
i=a.authorAvatarSrc
r=i||n.authorAvatarSrc
i=a.staticUrl
o=i||n.staticUrl
if(typeof o===u){r=o.call(n,r,{hash:{}})}else if(o===p){r=h.call(n,"staticUrl",r,{hash:{}})}else{r=o}s+=d(r)+'" alt="">\n                '
return s}function ie(n,e){return"View profile for:"}function fe(n,e){var s="",r
s+="\n            "
i=a["_"]
r=i||n["_"]
f=c.program(70,ce,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof r===u){r=r.call(n,f)}else{r=m.call(n,r,f)}if(r||r===0){s+=r}s+="\n            "
return s}function ce(n,e){return"Anonymous"}o+='\n<div class="discussion-meta">\n    <div class="discussion-meta-controls">\n'
o+="\n        "
i=a.badges
l=i||e.badges
t=a["if"]
f=c.program(1,v,r)
f.hash={}
f.fn=f
f.inverse=c.noop
l=t.call(e,l,f)
if(l||l===0){o+=l}o+="\n\n"
o+="\n        "
i=a.isProjectEvalAnswer
l=i||e.isProjectEvalAnswer
t=a.unless
f=c.program(4,g,r)
f.hash={}
f.fn=f
f.inverse=c.noop
l=t.call(e,l,f)
if(l||l===0){o+=l}o+="\n\n        "
i=a.spinoffCount
l=i||e.spinoffCount
t=a["if"]
f=c.program(10,x,r)
f.hash={}
f.fn=f
f.inverse=c.noop
l=t.call(e,l,f)
if(l||l===0){o+=l}o+="\n\n        "
i=a.isProjectEvalAnswer
l=i||e.isProjectEvalAnswer
t=a.unless
f=c.program(15,b,r)
f.hash={}
f.fn=f
f.inverse=c.noop
l=t.call(e,l,f)
if(l||l===0){o+=l}o+="\n\n        "
i=a.showModControls
l=i||e.showModControls
t=a["if"]
f=c.program(40,z,r)
f.hash={}
f.fn=f
f.inverse=c.program(43,G,r)
l=t.call(e,l,f)
if(l||l===0){o+=l}o+="\n    </div>\n\n"
o+="\n    "
i=a.isScratchpad
l=i||e.isScratchpad
t=a.unless
f=c.program(50,W,r)
f.hash={}
f.fn=f
f.inverse=c.noop
l=t.call(e,l,f)
if(l||l===0){o+=l}o+="\n</div>\n"
return o})
function wrapped_template(n,e){return absoluteLinks.makeHtmlLinksSafe(template(n,e))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/vote-controls.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,n,o,t,a){o=o||e.helpers
var i="",r,s,l,f,p=this,c="function",d=o.blockHelperMissing,u=o.helperMissing,v=void 0,h=this.escapeExpression
function m(e,n){return" voted"}function y(e,n){return"Vote up, this is encouraging or helpful (click again to undo)"}function g(e,n){var t="",a
t+="\n                "
l=o["_"]
a=l||e["_"]
f=p.program(6,k,n)
f.hash={}
f.fn=f
f.inverse=p.noop
if(l&&typeof a===c){a=a.call(e,f)}else{a=d.call(e,a,f)}if(a||a===0){t+=a}t+="\n            "
return t}function k(e,n){return"You have upvoted this comment"}function V(e,n){return" voted"}function _(e,n){return"Vote down, this is not encouraging or helpful (click again to undo)"}function w(e,n){var t="",a
t+="\n                "
l=o["_"]
a=l||e["_"]
f=p.program(13,b,n)
f.hash={}
f.fn=f
f.inverse=p.noop
if(l&&typeof a===c){a=a.call(e,f)}else{a=d.call(e,a,f)}if(a||a===0){t+=a}t+="\n            "
return t}function b(e,n){return"You have downvoted this comment"}i+='<div class="discussion-vote">\n    <div class="vote-for vote-for-js vote-up'
l=o.upVoted
r=l||n.upVoted
s=o["if"]
f=p.program(1,m,a)
f.hash={}
f.fn=f
f.inverse=p.noop
r=s.call(n,r,f)
if(r||r===0){i+=r}i+='"\n                title="'
l=o["_"]
r=l||n["_"]
f=p.program(3,y,a)
f.hash={}
f.fn=f
f.inverse=p.noop
if(l&&typeof r===c){r=r.call(n,f)}else{r=d.call(n,r,f)}if(r||r===0){i+=r}i+='"\n                data-key="'
l=o.key
r=l||n.key
if(typeof r===c){r=r.call(n,{hash:{}})}else if(r===v){r=u.call(n,"key",{hash:{}})}i+=h(r)+'"\n                data-vote-type="1"\n                tabindex="0">\n        <div class="sr-only">\n            '
l=o.upVoted
r=l||n.upVoted
s=o["if"]
f=p.program(5,g,a)
f.hash={}
f.fn=f
f.inverse=p.noop
r=s.call(n,r,f)
if(r||r===0){i+=r}i+='\n        </div>\n    </div>\n    <div class="vote-for vote-for-js vote-down'
l=o.downVoted
r=l||n.downVoted
s=o["if"]
f=p.program(8,V,a)
f.hash={}
f.fn=f
f.inverse=p.noop
r=s.call(n,r,f)
if(r||r===0){i+=r}i+='"\n                title="'
l=o["_"]
r=l||n["_"]
f=p.program(10,_,a)
f.hash={}
f.fn=f
f.inverse=p.noop
if(l&&typeof r===c){r=r.call(n,f)}else{r=d.call(n,r,f)}if(r||r===0){i+=r}i+='"\n                data-key="'
l=o.key
r=l||n.key
if(typeof r===c){r=r.call(n,{hash:{}})}else if(r===v){r=u.call(n,"key",{hash:{}})}i+=h(r)+'"\n                data-vote-type="-1"\n                tabindex="0">\n        <div class="sr-only">\n            '
l=o.downVoted
r=l||n.downVoted
s=o["if"]
f=p.program(12,w,a)
f.hash={}
f.fn=f
f.inverse=p.noop
r=s.call(n,r,f)
if(r||r===0){i+=r}i+="\n        </div>\n    </div>\n</div>\n"
return i})
function wrapped_template(e,n){return absoluteLinks.makeHtmlLinksSafe(template(e,n))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/flag-controls.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(a,e,n,r,t){n=n||a.helpers
var l="",o,s,i,f,c=this,p="function",h=n.helperMissing,u=void 0,g=this.escapeExpression,m=n.blockHelperMissing
function v(a,e){var r="",t
r+='\n    <span class="flag-tools mod-action-complete" data-key="'
i=n.key
t=i||a.key
if(typeof t===p){t=t.call(a,{hash:{}})}else if(t===u){t=h.call(a,"key",{hash:{}})}r+=g(t)+'">\n            '
r+='\n            <a href="javascript:void(0);" class="flag-show action-complete" title="'
i=n["_"]
t=i||a["_"]
f=c.program(2,d,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof t===p){t=t.call(a,f)}else{t=m.call(a,t,f)}if(t||t===0){r+=t}r+='">'
i=n["_"]
t=i||a["_"]
f=c.program(4,y,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof t===p){t=t.call(a,f)}else{t=m.call(a,t,f)}if(t||t===0){r+=t}r+="</a>\n    </span>\n"
return r}function d(a,e){return"Flagged"}function y(a,e){return"Flagged"}function k(a,e){var r="",t,l
r+='\n    <span class="flag-tools" data-key="'
i=n.key
t=i||a.key
if(typeof t===p){t=t.call(a,{hash:{}})}else if(t===u){t=h.call(a,"key",{hash:{}})}r+=g(t)+'">\n        '
i=n.isScratchpad
t=i||a.isScratchpad
l=n["if"]
f=c.program(7,_,e)
f.hash={}
f.fn=f
f.inverse=c.program(12,j,e)
t=l.call(a,t,f)
if(t||t===0){r+=t}r+="\n    </span>\n"
return r}function _(a,e){var r="",t
r+='\n        <a href="javascript:void(0);" class="flag-show scratchpad-flagging" data-react-component="button" data-react-button-type="submit" title="'
i=n["_"]
t=i||a["_"]
f=c.program(8,b,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof t===p){t=t.call(a,f)}else{t=m.call(a,t,f)}if(t||t===0){r+=t}r+='">\n            '
i=n["_"]
t=i||a["_"]
f=c.program(10,F,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof t===p){t=t.call(a,f)}else{t=m.call(a,t,f)}if(t||t===0){r+=t}r+="\n        "
return r}function b(a,e){return"Flag for moderator attention"}function F(a,e){return"Flag project</a>"}function j(a,e){var r="",t,l
r+='\n        <a href="javascript:void(0);" class="flag-show" title="'
i=n["_"]
t=i||a["_"]
f=c.program(13,w,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof t===p){t=t.call(a,f)}else{t=m.call(a,t,f)}if(t||t===0){r+=t}r+='">\n            '
i=n.authorNickname
t=i||a.authorNickname
l=n["if"]
f=c.program(15,N,e)
f.hash={}
f.fn=f
f.inverse=c.program(18,L,e)
t=l.call(a,t,f)
if(t||t===0){r+=t}r+="\n        "
return r}function w(a,e){return"Flag for moderator attention"}function N(a,e){var r="",t
r+="\n                "
i=n["_"]
t=i||a["_"]
f=c.program(16,H,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof t===p){t=t.call(a,f)}else{t=m.call(a,t,f)}if(t||t===0){r+=t}r+="\n            "
return r}function H(a,e){var r="",t
r+='Flag <span class="sr-only">'
i=n.authorNickname
t=i||a.authorNickname
if(typeof t===p){t=t.call(a,{hash:{}})}else if(t===u){t=h.call(a,"authorNickname",{hash:{}})}r+=g(t)+"'s comment</span></a>"
return r}function L(a,e){var r="",t
r+="\n                "
i=n["_"]
t=i||a["_"]
f=c.program(19,S,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof t===p){t=t.call(a,f)}else{t=m.call(a,t,f)}if(t||t===0){r+=t}r+="\n            "
return r}function S(a,e){return'Flag <span class="sr-only">this comment</span></a>'}l+="\n"
i=n.flaggedByUser
o=i||e.flaggedByUser
s=n["if"]
f=c.program(1,v,t)
f.hash={}
f.fn=f
f.inverse=c.program(6,k,t)
o=s.call(e,o,f)
if(o||o===0){l+=o}l+="\n"
return l})
function wrapped_template(a,e){return absoluteLinks.makeHtmlLinksSafe(template(a,e))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/author-controls.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,s,a,n,i){a=a||e.helpers
n=n||e.partials
var o="",t,r,l,p,c=this,f="function",u=a.blockHelperMissing,h=a.helperMissing,d=void 0,v=this.escapeExpression
function m(e,s){var i="",o
i+="\n		"
o=e
o=c.invokePartial(n["discussion_answer-notification-link"],"discussion_answer-notification-link",o,a,n)
if(o||o===0){i+=o}i+="\n		"
o=e
o=c.invokePartial(n["discussion_meta-separator"],"discussion_meta-separator",o,a,n)
if(o||o===0){i+=o}i+="\n	"
return i}function k(e,s){var i="",o
i+='\n        <a href="javascript:void(0);" class="edit">'
l=a["_"]
o=l||e["_"]
p=c.program(4,_,s)
p.hash={}
p.fn=p
p.inverse=c.noop
if(l&&typeof o===f){o=o.call(e,p)}else{o=u.call(e,o,p)}if(o||o===0){i+=o}i+="</a>\n        "
o=e
o=c.invokePartial(n["discussion_meta-separator"],"discussion_meta-separator",o,a,n)
if(o||o===0){i+=o}i+="\n    "
return i}function _(e,s){return"Edit"}function w(e,s){return"Delete"}o+='<span class="mod-tools" data-key="'
l=a.key
t=l||s.key
if(typeof t===f){t=t.call(s,{hash:{}})}else if(t===d){t=h.call(s,"key",{hash:{}})}o+=v(t)+'" data-is-author="'
l=a.showAuthorControls
t=l||s.showAuthorControls
if(typeof t===f){t=t.call(s,{hash:{}})}else if(t===d){t=h.call(s,"showAuthorControls",{hash:{}})}o+=v(t)+'">\n\n	'
l=a.isQuestion
t=l||s.isQuestion
r=a["if"]
p=c.program(1,m,i)
p.hash={}
p.fn=p
p.inverse=c.noop
t=r.call(s,t,p)
if(t||t===0){o+=t}o+="\n\n    "
l=a.isProjectEvalAnswer
t=l||s.isProjectEvalAnswer
r=a.unless
p=c.program(3,k,i)
p.hash={}
p.fn=p
p.inverse=c.noop
t=r.call(s,t,p)
if(t||t===0){o+=t}o+='\n\n    <a href="javascript:void(0);" class="delete">'
l=a["_"]
t=l||s["_"]
p=c.program(6,w,i)
p.hash={}
p.fn=p
p.inverse=c.noop
if(l&&typeof t===f){t=t.call(s,p)}else{t=u.call(s,t,p)}if(t||t===0){o+=t}o+="</a>\n</span>\n"
return o})
function wrapped_template(e,s){return absoluteLinks.makeHtmlLinksSafe(template(e,s))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/answer-notification-link.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(n,e,a,r,i){a=a||n.helpers
var t="",o,s,f,l,p=this,u="function",c=a.blockHelperMissing
function m(n,e){var r="",i
r+="\n    "
r+='\n    <span title="'
f=a["_"]
i=f||n["_"]
l=p.program(2,h,e)
l.hash={}
l.fn=l
l.inverse=p.noop
if(f&&typeof i===u){i=i.call(n,l)}else{i=c.call(n,i,l)}if(i||i===0){r+=i}r+='">\n        '
f=a["_"]
i=f||n["_"]
l=p.program(4,v,e)
l.hash={}
l.fn=l
l.inverse=p.noop
if(f&&typeof i===u){i=i.call(n,l)}else{i=c.call(n,i,l)}if(i||i===0){r+=i}r+="\n    </span>\n"
return r}function h(n,e){return"This question is very old, so you won't receive notifications when someone answers it."}function v(n,e){return"Answer email notifications are off"}function d(n,e){var r="",i,t
r+="\n    "
f=a.notifyOnAnswer
i=f||n.notifyOnAnswer
t=a["if"]
l=p.program(7,g,e)
l.hash={}
l.fn=l
l.inverse=p.program(10,y,e)
i=t.call(n,i,l)
if(i||i===0){r+=i}r+="\n"
return r}function g(n,e){var r="",i
r+='\n        <a href="javascript:void(0);" class="mute" data-notify="true">\n            '
f=a["_"]
i=f||n["_"]
l=p.program(8,w,e)
l.hash={}
l.fn=l
l.inverse=p.noop
if(f&&typeof i===u){i=i.call(n,l)}else{i=c.call(n,i,l)}if(i||i===0){r+=i}r+="\n        </a>\n    "
return r}function w(n,e){return"Turn off answer notifications"}function y(n,e){var r="",i
r+='\n        <a href="javascript:void(0);" class="mute" data-notify="false">\n            '
f=a["_"]
i=f||n["_"]
l=p.program(11,_,e)
l.hash={}
l.fn=l
l.inverse=p.noop
if(f&&typeof i===u){i=i.call(n,l)}else{i=c.call(n,i,l)}if(i||i===0){r+=i}r+="\n        </a>\n    "
return r}function _(n,e){return"Turn on answer notifications"}f=a.isOld
o=f||e.isOld
s=a["if"]
l=p.program(1,m,i)
l.hash={}
l.fn=l
l.inverse=p.program(6,d,i)
o=s.call(e,o,l)
if(o||o===0){t+=o}t+="\n"
return t})
function wrapped_template(n,e){return absoluteLinks.makeHtmlLinksSafe(template(n,e))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/meta-separator.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,a,t,s,r){t=t||e.helpers
var n,p=this
return'<span class="discussion-meta-separator">&#8226;</span>\n'})
function wrapped_template(e,a){return absoluteLinks.makeHtmlLinksSafe(template(e,a))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/low-quality-notice-header.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,a,n,t,r){n=n||e.helpers
var l="",s,i,o,p,c=this,h="function",f=n.helperMissing,d=void 0,u=this.escapeExpression,y=n.blockHelperMissing
function b(e,a){var t="",r
t+="\n        <h4>"
o=n["_"]
r=o||e["_"]
p=c.program(2,v,a)
p.hash={}
p.fn=p
p.inverse=c.noop
if(o&&typeof r===h){r=r.call(e,p)}else{r=y.call(e,r,p)}if(r||r===0){t+=r}t+="</h4>\n        "
t+="\n        "
o=n["_"]
r=o||e["_"]
p=c.program(4,k,a)
p.hash={}
p.fn=p
p.inverse=c.noop
if(o&&typeof r===h){r=r.call(e,p)}else{r=y.call(e,r,p)}if(r||r===0){t+=r}t+="\n        <br><br>\n        "
o=n["_"]
r=o||e["_"]
p=c.program(6,m,a)
p.hash={}
p.fn=p
p.inverse=c.noop
if(o&&typeof r===h){r=r.call(e,p)}else{r=y.call(e,r,p)}if(r||r===0){t+=r}t+="\n    "
return t}function v(e,a){return"Reduce, Reuse, Recycle."}function k(e,a){var t="",r
t+="Thank you for your "
o=n.translatedFeedbackType
r=o||e.translatedFeedbackType
if(typeof r===h){r=r.call(e,{hash:{}})}else if(r===d){r=f.call(e,"translatedFeedbackType",{hash:{}})}t+=u(r)+". Our scrub-bots have integrated it\n        into the earlier "
o=n.translatedFeedbackType
r=o||e.translatedFeedbackType
if(typeof r===h){r=r.call(e,{hash:{}})}else if(r===d){r=f.call(e,"translatedFeedbackType",{hash:{}})}t+=u(r)+" highlighted above and voted that up."
return t}function m(e,a){return"Yours in cleanliness, the Khan Academy Guardians."}function g(e,a){var t="",r
t+="\n        "
t+="\n        <h4>"
o=n["_"]
r=o||e["_"]
p=c.program(9,T,a)
p.hash={}
p.fn=p
p.inverse=c.noop
if(o&&typeof r===h){r=r.call(e,p)}else{r=y.call(e,r,p)}if(r||r===0){t+=r}t+="</h4>\n\n        "
t+="\n        "
o=n["_"]
r=o||e["_"]
p=c.program(11,F,a)
p.hash={}
p.fn=p
p.inverse=c.noop
if(o&&typeof r===h){r=r.call(e,p)}else{r=y.call(e,r,p)}if(r||r===0){t+=r}t+="\n    "
return t}function T(e,a){var t="",r
t+="Please clarify your "
o=n.translatedFeedbackType
r=o||e.translatedFeedbackType
if(typeof r===h){r=r.call(e,{hash:{}})}else if(r===d){r=f.call(e,"translatedFeedbackType",{hash:{}})}t+=u(r)+"."
return t}function F(e,a){var t="",r
t+='Our robot army has targeted your post as "low quality". To appear on the\n        site as originally written, the Khan Academy Guardians must manually\n        approve your '
o=n.translatedFeedbackType
r=o||e.translatedFeedbackType
if(typeof r===h){r=r.call(e,{hash:{}})}else if(r===d){r=f.call(e,"translatedFeedbackType",{hash:{}})}t+=u(r)+"."
return t}l+='<div class="low-quality-notice-header">\n    '
o=n.duplicate
s=o||a.duplicate
i=n["if"]
p=c.program(1,b,r)
p.hash={}
p.fn=p
p.inverse=c.program(8,g,r)
s=i.call(a,s,p)
if(s||s===0){l+=s}l+="\n</div>\n"
return l})
function wrapped_template(e,a){return absoluteLinks.makeHtmlLinksSafe(template(e,a))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/low-quality-notice-footer.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,a,t,s,i){t=t||e.helpers
var l="",n,r,p=this,d="function",o=t.helperMissing,c=void 0,u=this.escapeExpression
l+='<div class="low-quality-notice-footer">\n    <em>'
r=t.translatedFeedbackEditTip
n=r||a.translatedFeedbackEditTip
if(typeof n===d){n=n.call(a,{hash:{}})}else if(n===c){n=o.call(a,"translatedFeedbackEditTip",{hash:{}})}l+=u(n)+"</em>\n</div>\n"
return l})
function wrapped_template(e,a){return absoluteLinks.makeHtmlLinksSafe(template(e,a))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/duplicate-notice.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,a,t,n,s){t=t||e.helpers
var l="",r,i,o,c=this,p="function",d=t.helperMissing,h=void 0,u=this.escapeExpression,f=t.blockHelperMissing
function b(e,a){return"Reduce, Reuse, Recycle."}function y(e,a){var n="",s
n+="Thank you for your "
i=t.translatedFeedbackType
s=i||e.translatedFeedbackType
if(typeof s===p){s=s.call(e,{hash:{}})}else if(s===h){s=d.call(e,"translatedFeedbackType",{hash:{}})}n+=u(s)+". Our scrub-bots have integrated it\n    into the earlier "
i=t.translatedFeedbackType
s=i||e.translatedFeedbackType
if(typeof s===p){s=s.call(e,{hash:{}})}else if(s===h){s=d.call(e,"translatedFeedbackType",{hash:{}})}n+=u(s)+" highlighted above and voted that up.\n    <br>\n    Yours in cleanliness, the Khan Academy Guardians."
return n}l+='<div class="low-quality-notice duplicate-notice">\n    <span class="close" data-dismiss="alert">&#215;</span>\n    <h4>'
i=t["_"]
r=i||a["_"]
o=c.program(1,b,s)
o.hash={}
o.fn=o
o.inverse=c.noop
if(i&&typeof r===p){r=r.call(a,o)}else{r=f.call(a,r,o)}if(r||r===0){l+=r}l+="</h4>\n    "
l+="\n    "
i=t["_"]
r=i||a["_"]
o=c.program(3,y,s)
o.hash={}
o.fn=o
o.inverse=c.noop
if(i&&typeof r===p){r=r.call(a,o)}else{r=f.call(a,r,o)}if(r||r===0){l+=r}l+="\n</div>\n"
return l})
function wrapped_template(e,a){return absoluteLinks.makeHtmlLinksSafe(template(e,a))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/flag-modal.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(n,e,a,i,l){a=a||n.helpers
var r="",o,s,t,f,p=this,c="function",u=a.helperMissing,h=void 0,v=this.escapeExpression,d=a.blockHelperMissing
function m(n,e){return"Flag for Guardian attention"}function g(n,e){var i="",l
i+="This "
t=a.translatedFeedbackType
l=t||n.translatedFeedbackType
if(typeof l===c){l=l.call(n,{hash:{}})}else if(l===h){l=u.call(n,"translatedFeedbackType",{hash:{}})}i+=v(l)+" is:"
return i}function _(n,e){return"abuse"}function y(n,e){return"disrespectful or offensive"}function b(n,e){return"an advertisement"}function k(n,e){var i="",l,r
i+='<div class="simple-button flag-as" data-flag="'
t=a.isQuestion
l=t||n.isQuestion
r=a["if"]
f=p.program(12,w,e)
f.hash={}
f.fn=f
f.inverse=p.program(14,Q,e)
l=r.call(n,l,f)
if(l||l===0){i+=l}i+='">\n                    <h4>\n                        '
t=a.isQuestion
l=t||n.isQuestion
r=a["if"]
f=p.program(16,q,e)
f.hash={}
f.fn=f
f.inverse=p.noop
l=r.call(n,l,f)
if(l||l===0){i+=l}i+="\n                        "
t=a.isComment
l=t||n.isComment
r=a["if"]
f=p.program(19,A,e)
f.hash={}
f.fn=f
f.inverse=p.noop
l=r.call(n,l,f)
if(l||l===0){i+=l}i+="\n                        "
t=a.isAnswer
l=t||n.isAnswer
r=a["if"]
f=p.program(22,F,e)
f.hash={}
f.fn=f
f.inverse=p.noop
l=r.call(n,l,f)
if(l||l===0){i+=l}i+="\n                    </h4>\n                    <ul>\n                        <li>\n                            "
t=a.isQuestion
l=t||n.isQuestion
r=a["if"]
f=p.program(25,L,e)
f.hash={}
f.fn=f
f.inverse=p.noop
l=r.call(n,l,f)
if(l||l===0){i+=l}i+="\n                            "
t=a.isComment
l=t||n.isComment
r=a["if"]
f=p.program(28,B,e)
f.hash={}
f.fn=f
f.inverse=p.noop
l=r.call(n,l,f)
if(l||l===0){i+=l}i+="\n                            "
t=a.isAnswer
l=t||n.isAnswer
r=a["if"]
f=p.program(31,S,e)
f.hash={}
f.fn=f
f.inverse=p.noop
l=r.call(n,l,f)
if(l||l===0){i+=l}i+="\n                        </li>\n                    </ul>\n                </div>"
return i}function w(n,e){return"changetocomment"}function Q(n,e){return"changetoquestion"}function q(n,e){var i
t=a["_"]
i=t||n["_"]
f=p.program(17,T,e)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof i===c){i=i.call(n,f)}else{i=d.call(n,i,f)}if(i||i===0){return i}else{return""}}function T(n,e){return"a tip or thanks"}function A(n,e){var i
t=a["_"]
i=t||n["_"]
f=p.program(20,C,e)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof i===c){i=i.call(n,f)}else{i=d.call(n,i,f)}if(i||i===0){return i}else{return""}}function C(n,e){return"a question"}function F(n,e){var i
t=a["_"]
i=t||n["_"]
f=p.program(23,H,e)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof i===c){i=i.call(n,f)}else{i=d.call(n,i,f)}if(i||i===0){return i}else{return""}}function H(n,e){return"a tip or thanks"}function L(n,e){var i
t=a["_"]
i=t||n["_"]
f=p.program(26,x,e)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof i===c){i=i.call(n,f)}else{i=d.call(n,i,f)}if(i||i===0){return i}else{return""}}function x(n,e){return"should be in Tips & Thanks"}function B(n,e){var i
t=a["_"]
i=t||n["_"]
f=p.program(29,M,e)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof i===c){i=i.call(n,f)}else{i=d.call(n,i,f)}if(i||i===0){return i}else{return""}}function M(n,e){return"should be in Questions"}function S(n,e){var i
t=a["_"]
i=t||n["_"]
f=p.program(32,j,e)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof i===c){i=i.call(n,f)}else{i=d.call(n,i,f)}if(i||i===0){return i}else{return""}}function j(n,e){return"should be in Tips & Thanks"}function E(n,e){return"not helpful"}function G(n,e){return"low quality"}function K(n,e){return"not about the video topic"}function W(n,e){return"soliciting votes or seeking badges"}function z(n,e){var i="",l
i+="\n                            <li>"
t=a["_"]
l=t||n["_"]
f=p.program(43,D,e)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof l===c){l=l.call(n,f)}else{l=d.call(n,l,f)}if(l||l===0){i+=l}i+="</li>\n                        "
return i}function D(n,e){return"a homework question"}function I(n,e){var i="",l
i+="\n                            <li>"
t=a["_"]
l=t||n["_"]
f=p.program(46,J,e)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof l===c){l=l.call(n,f)}else{l=d.call(n,l,f)}if(l||l===0){i+=l}i+="</li>\n                        "
return i}function J(n,e){return"a duplicate answer"}function N(n,e){return"repeatedly making the same post"}function O(n,e){return"about the site"}function P(n,e){return'a question about Khan Academy (e.g. "What software does Sal use?")'}function R(n,e){return"a post about badges"}function U(n,e){return"a technical problem with the site"}function V(n,e){return"a request for videos or features"}r+='<div class="modal hide" id="flag-modal">\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h2>'
t=a["_"]
o=t||e["_"]
f=p.program(1,m,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=d.call(e,o,f)}if(o||o===0){r+=o}r+='</h2>\n    </div>\n    <div class="modal-body">\n        <em>'
t=a.feedback
o=t||e.feedback
if(typeof o===c){o=o.call(e,{hash:{}})}else if(o===h){o=u.call(e,"feedback",{hash:{}})}r+=v(o)+'</em>\n\n        <div class="flag-options">\n            '
r+="\n            <h4>"
t=a["_"]
o=t||e["_"]
f=p.program(3,g,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=d.call(e,o,f)}if(o||o===0){r+=o}r+='</h4>\n            <div class="flag-row">\n                <div class="simple-button flag-as" data-flag="inappropriate">\n                    <h4>'
t=a["_"]
o=t||e["_"]
f=p.program(5,_,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=d.call(e,o,f)}if(o||o===0){r+=o}r+="</h4>\n                    <ul>\n                        <li>"
t=a["_"]
o=t||e["_"]
f=p.program(7,y,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=d.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n                        <li>"
t=a["_"]
o=t||e["_"]
f=p.program(9,b,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=d.call(e,o,f)}if(o||o===0){r+=o}r+='</li>\n                    </ul>\n                </div>\n                <div class="flag-separator"></div>\n                '
t=a.canBeChanged
o=t||e.canBeChanged
s=a["if"]
f=p.program(11,k,l)
f.hash={}
f.fn=f
f.inverse=p.noop
o=s.call(e,o,f)
if(o||o===0){r+=o}r+='\n            </div>\n            <div class="flag-row">\n                <div class="simple-button flag-as" data-flag="lowquality">\n                    <h4>'
t=a["_"]
o=t||e["_"]
f=p.program(34,E,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=d.call(e,o,f)}if(o||o===0){r+=o}r+="</h4>\n                    <ul>\n                        <li>"
t=a["_"]
o=t||e["_"]
f=p.program(36,G,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=d.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n                        <li>"
t=a["_"]
o=t||e["_"]
f=p.program(38,K,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=d.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n                        <li>"
t=a["_"]
o=t||e["_"]
f=p.program(40,W,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=d.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n                        "
t=a.isQuestion
o=t||e.isQuestion
s=a["if"]
f=p.program(42,z,l)
f.hash={}
f.fn=f
f.inverse=p.noop
o=s.call(e,o,f)
if(o||o===0){r+=o}r+="\n                        "
t=a.isAnswer
o=t||e.isAnswer
s=a["if"]
f=p.program(45,I,l)
f.hash={}
f.fn=f
f.inverse=p.noop
o=s.call(e,o,f)
if(o||o===0){r+=o}r+="\n                        <li>"
t=a["_"]
o=t||e["_"]
f=p.program(48,N,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=d.call(e,o,f)}if(o||o===0){r+=o}r+='</li>\n                    </ul>\n                </div>\n                <div class="flag-separator"></div>\n                <div class="simple-button flag-as" data-flag="doesnotbelong">\n                    <h4>'
t=a["_"]
o=t||e["_"]
f=p.program(50,O,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=d.call(e,o,f)}if(o||o===0){r+=o}r+="</h4>\n                    <ul>\n                        <li>"
t=a["_"]
o=t||e["_"]
f=p.program(52,P,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=d.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n                        <li>"
t=a["_"]
o=t||e["_"]
f=p.program(54,R,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=d.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n                        <li>"
t=a["_"]
o=t||e["_"]
f=p.program(56,U,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=d.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n                        <li>"
t=a["_"]
o=t||e["_"]
f=p.program(58,V,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=d.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"
return r})
function wrapped_template(n,e){return absoluteLinks.makeHtmlLinksSafe(template(n,e))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/scratchpad-flag-modal.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(n,e,i,a,l){i=i||n.helpers
var s="",o,t,r,f,p=this,c="function",u=i.helperMissing,d=void 0,g=this.escapeExpression,h=i.blockHelperMissing
function v(n,e){return"Flag project for Guardian attention"}function m(n,e){var a="",l
a+='Please consult our <a href="'
r=i.guidelinesUrlPath
l=r||n.guidelinesUrlPath
if(typeof l===c){l=l.call(n,{hash:{}})}else if(l===d){l=u.call(n,"guidelinesUrlPath",{hash:{}})}a+=g(l)+'" target="_blank">project guidelines</a> for what we consider to be appropriate project.'
return a}function b(n,e){return"How does this project violate the guidelines?"}function y(n,e){return"This project is:"}function _(n,e){return"<h4>abuse</h4>\n                    <ul>\n                        <li>disrespectful or offensive</li>\n                        <li>advertisement for off-site company/service</li>\n                    </ul>"}function w(n,e){return"<h4>plagiarism</h4>\n                    <ul>\n                        <li>not a spin-off and not giving credit to original author</li>\n                    </ul>"}function k(n,e){return"<h4>soliciting votes</h4>\n                    <ul>\n                        <li>requesting votes</li>\n                        <li>making promises for votes</li>\n                        <li>receiving votes from a voting ring</li>\n                    </ul>"}function j(n,e){var a="",l
a+='\n                <div class="simple-button flag-as" type="button" data-flag="using-disallowed">\n                    '
r=i["_"]
l=r||n["_"]
f=p.program(16,x,e)
f.hash={}
f.fn=f
f.inverse=p.noop
if(r&&typeof l===c){l=l.call(n,f)}else{l=h.call(n,l,f)}if(l||l===0){a+=l}a+='\n                </div>\n                <div class="flag-separator"></div>\n                '
return a}function x(n,e){return"<h4>using disallowed functionality</h4>\n                    <ul>\n                        <li>accessing externals or the DOM to go beyond allowed functionality</li>\n                        <li>examples: playing sounds inappropriately, using localStorage</li>\n                    </ul>"}function P(n,e){return"<h4>off-topic</h4>\n                    <ul>\n                        <li>petitions to change the site</li>\n                        <li>contentious projects about politics, religion/atheism, or personal issues</li>\n                    </ul>"}s+='<div class="modal hide scratchpad-flag-modal" id="flag-modal">\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h2>'
r=i["_"]
o=r||e["_"]
f=p.program(1,v,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(r&&typeof o===c){o=o.call(e,f)}else{o=h.call(e,o,f)}if(o||o===0){s+=o}s+='</h2>\n    </div>\n    <div class="modal-body">\n        '
r=i["_"]
o=r||e["_"]
f=p.program(3,m,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(r&&typeof o===c){o=o.call(e,f)}else{o=h.call(e,o,f)}if(o||o===0){s+=o}s+="<br>\n        <label>"
r=i["_"]
o=r||e["_"]
f=p.program(5,b,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(r&&typeof o===c){o=o.call(e,f)}else{o=h.call(e,o,f)}if(o||o===0){s+=o}s+='</label>\n        <br>\n        <textarea name="justification" rows="3"></textarea>\n        <div class="flag-options">\n            <label>'
r=i["_"]
o=r||e["_"]
f=p.program(7,y,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(r&&typeof o===c){o=o.call(e,f)}else{o=h.call(e,o,f)}if(o||o===0){s+=o}s+='</label><br>\n            <div class="flag-row">\n                <div class="simple-button flag-as" type="button" data-flag="inappropriate">\n                    '
r=i["_"]
o=r||e["_"]
f=p.program(9,_,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(r&&typeof o===c){o=o.call(e,f)}else{o=h.call(e,o,f)}if(o||o===0){s+=o}s+='\n                </div>\n                <div class="flag-separator"></div>\n                <div class="simple-button flag-as" type="button" data-flag="plagiarism">\n                    '
r=i["_"]
o=r||e["_"]
f=p.program(11,w,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(r&&typeof o===c){o=o.call(e,f)}else{o=h.call(e,o,f)}if(o||o===0){s+=o}s+='\n                </div>\n                <div class="flag-separator"></div>\n                <div class="simple-button flag-as" type="button" data-flag="vote-soliciting">\n                    '
r=i["_"]
o=r||e["_"]
f=p.program(13,k,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(r&&typeof o===c){o=o.call(e,f)}else{o=h.call(e,o,f)}if(o||o===0){s+=o}s+='\n                </div>\n            </div>\n            <div class="flag-row">\n                '
r=i.isComputerProgramming
o=r||e.isComputerProgramming
t=i["if"]
f=p.program(15,j,l)
f.hash={}
f.fn=f
f.inverse=p.noop
o=t.call(e,o,f)
if(o||o===0){s+=o}s+='\n                <div class="simple-button flag-as" type="button" data-flag="doesnotbelong">\n                    '
r=i["_"]
o=r||e["_"]
f=p.program(18,P,l)
f.hash={}
f.fn=f
f.inverse=p.noop
if(r&&typeof o===c){o=o.call(e,f)}else{o=h.call(e,o,f)}if(o||o===0){s+=o}s+="\n                </div>\n            </div>\n        </div>\n\n        </div>\n    </div>\n</div>\n"
return s})
function wrapped_template(n,e){return absoluteLinks.makeHtmlLinksSafe(template(n,e))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/discussion.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,i,s,n,a){s=s||e.helpers
n=n||e.partials
var t="",r,o,l,u,d=this
function c(e,i){return"hide-meta-panels"}function p(e,i){return"new-ask-question-ui"}function v(e,i){var a="",t
a+="\n    "
t=e
t=d.invokePartial(n["discussion_discussion-guidelines"],"discussion_discussion-guidelines",t,s,n)
if(t||t===0){a+=t}a+="\n    "
return a}t+='<div class="discussion-container '
l=s.hideMetaPanels
r=l||i.hideMetaPanels
o=s["if"]
u=d.program(1,c,a)
u.hash={}
u.fn=u
u.inverse=d.noop
r=o.call(i,r,u)
if(r||r===0){t+=r}t+=" "
l=s.newAskQuestionUi
r=l||i.newAskQuestionUi
o=s["if"]
u=d.program(3,p,a)
u.hash={}
u.fn=u
u.inverse=d.noop
r=o.call(i,r,u)
if(r||r===0){t+=r}t+='">\n    <div class="clear"></div>\n    '
r=i
r=d.invokePartial(n["discussion_video-discussion"],"discussion_video-discussion",r,s,n)
if(r||r===0){t+=r}t+="\n\n    "
l=s.hideMetaPanels
r=l||i.hideMetaPanels
o=s.unless
u=d.program(5,v,a)
u.hash={}
u.fn=u
u.inverse=d.noop
r=o.call(i,r,u)
if(r||r===0){t+=r}t+='\n\n    <div class="clear"></div>\n</div>\n'
return t})
function wrapped_template(e,i){return absoluteLinks.makeHtmlLinksSafe(template(e,i))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/video-discussion.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(n,e,i,s,a){i=i||n.helpers
s=s||n.partials
var t="",o,r,l,c,d=this,f="function",p=i.blockHelperMissing,u=i.helperMissing,h=void 0,v=this.escapeExpression
function m(n,e){return"Show all questions"}function b(n,e){var s="",a,t
s+="\n    "
l=i.canRequestFeedback
a=l||n.canRequestFeedback
t=i.unless
c=d.program(4,g,e)
c.hash={}
c.fn=c
c.inverse=d.noop
a=t.call(n,a,c)
if(a||a===0){s+=a}s+="\n    "
return s}function g(n,e){var s="",a,t
s+="\n    "
l=i.restrictPosting
a=l||n.restrictPosting
t=i.unless
c=d.program(5,y,e)
c.hash={}
c.fn=c
c.inverse=d.noop
a=t.call(n,a,c)
if(a||a===0){s+=a}s+="\n    "
return s}function y(n,e){var a="",t
a+='\n        <div class="ask-question-container">\n           '
t=n
t=d.invokePartial(s["discussion_question-form"],"discussion_question-form",t,i,s)
if(t||t===0){a+=t}a+="\n        </div>\n    "
return a}function k(n,e){return'style="display:none;"'}function _(n,e){return"Questions"}function P(n,e){return'style="display:none;"'}function j(n,e){return"Tips &amp; Thanks"}function q(n,e){return'style="display:none;"'}function w(n,e){return"Spin-Offs"}function M(n,e){var s="",a
s+='\n            <li data-type="documentation" class="tabitem">\n                <a href="javascript:void(0);">'
l=i["_"]
a=l||n["_"]
c=d.program(20,x,e)
c.hash={}
c.fn=c
c.inverse=d.noop
if(l&&typeof a===f){a=a.call(n,c)}else{a=p.call(n,a,c)}if(a||a===0){s+=a}s+="</a>\n            </li>\n            "
return s}function x(n,e){return"Documentation"}function F(n,e){var s="",a
s+='\n            <li id="projectfeedback-tab-header" data-type="projectfeedback" class="tabitem" role="tab">\n                <a href="javascript:void(0);">'
l=i["_"]
a=l||n["_"]
c=d.program(23,Q,e)
c.hash={}
c.fn=c
c.inverse=d.noop
if(l&&typeof a===f){a=a.call(n,c)}else{a=p.call(n,a,c)}if(a||a===0){s+=a}s+="</a>\n            </li>\n            "
return s}function Q(n,e){return"Help Requests"}function U(n,e){return"Clarifications"}function D(n,e){var s="",a
s+='\n            <li id="report-a-mistake-tab-header" data-type="reportamistake" class="tabitem" role="tab" aria-controls="report-a-mistake-tab">\n                <a href="javascript:void(0);">\n                    '
l=i["_"]
a=l||n["_"]
c=d.program(28,R,e)
c.hash={}
c.fn=c
c.inverse=d.noop
if(l&&typeof a===f){a=a.call(n,c)}else{a=p.call(n,a,c)}if(a||a===0){s+=a}s+='\n                </a>\n            </li>\n            <li id="guidelines-tab-header" data-type="guidelines" class="tabitem" role="tab" aria-controls="guidelines-tab">\n                <a href="javascript:void(0);">\n                    '
l=i["_"]
a=l||n["_"]
c=d.program(30,A,e)
c.hash={}
c.fn=c
c.inverse=d.noop
if(l&&typeof a===f){a=a.call(n,c)}else{a=p.call(n,a,c)}if(a||a===0){s+=a}s+="\n                </a>\n            </li>\n            "
return s}function R(n,e){return"Report a mistake"}function A(n,e){return"Guidelines"}function H(n,e){return'\n        <span class="discussion-list-sort pure-hidden-xs"></span>\n        '}function S(n,e){return'\n    <div class="discussion-list-sort pure-hidden-xs"></div>\n    '}function C(n,e){var s="",a
s+='\n            <div class="post-guidelines alert">\n                '
l=i["_"]
a=l||n["_"]
c=d.program(37,L,e)
c.hash={}
c.fn=c
c.inverse=d.noop
if(l&&typeof a===f){a=a.call(n,c)}else{a=p.call(n,a,c)}if(a||a===0){s+=a}s+="\n            </div>\n        "
return s}function L(n,e){return'\n                Want to ask a question to the community about improving your project?\n                <br>\n                Head over to the <a href="javascript:void(0);" data-tab-target="projectfeedback">help requests tab</a>!\n                <br>\n                We\'ll keep this area for questions that the community has for you about your project.'}function E(n,e){var s="",a,t
s+="\n            "
l=i.newAskQuestionUi
a=l||n.newAskQuestionUi
t=i.unless
c=d.program(40,T,e)
c.hash={}
c.fn=c
c.inverse=d.noop
a=t.call(n,a,c)
if(a||a===0){s+=a}s+="\n        "
return s}function T(n,e){var s="",a,t
s+="\n            "
l=i.restrictPosting
a=l||n.restrictPosting
t=i.unless
c=d.program(41,W,e)
c.hash={}
c.fn=c
c.inverse=d.noop
a=t.call(n,a,c)
if(a||a===0){s+=a}s+="\n            "
return s}function W(n,e){var a="",t
a+="\n                "
t=n
t=d.invokePartial(s["discussion_question-form"],"discussion_question-form",t,i,s)
if(t||t===0){a+=t}a+="\n            "
return a}function G(n,e){var a="",t
a+="\n            "
t=n
t=d.invokePartial(s["discussion_comment-form"],"discussion_comment-form",t,i,s)
if(t||t===0){a+=t}a+="\n        "
return a}function K(n,e){return'\n    <div class="tab documentation-tab" style="display: none;">\n        <div class="documentation"></div>\n    </div>\n    '}function O(n,e){var a="",t
a+='\n    <div id="guidelines-tab" class="tab guidelines-tab" style="display: none;" role="tabpanel" aria-labelledby="guidelines-tab-header">\n        <div class="guidelines">\n            '
t=n
t=d.invokePartial(s["discussion_meta-panel-guidelines"],"discussion_meta-panel-guidelines",t,i,s)
if(t||t===0){a+=t}a+='\n        </div>\n    </div>\n    <div id="report-a-mistake-tab" class="tab report-a-mistake-tab" style="display: none;" aria-labelledby="report-a-mistake-tab-header">\n        <div class="report-a-mistake">\n            '
t=n
t=d.invokePartial(s["discussion_meta-panel-report-a-mistake"],"discussion_meta-panel-report-a-mistake",t,i,s)
if(t||t===0){a+=t}a+="\n        </div>\n    </div>\n    "
return a}function z(n,e){return'\n    <div class="tab projectfeedback-tab" style="display:none;">\n        <div class="projectfeedback"></div>\n    </div>\n    '}function B(n,e){return"Loading..."}function I(n,e){return"Do you understand English? Click here to see more discussion happening on Khan Academy's English site."}t+='\n\n<div class="video-discussion">\n    <div class="expand-discussions-button-container">\n        <a class="expand-discussions-button" href="#">\n            '
l=i["_"]
o=l||e["_"]
c=d.program(1,m,a)
c.hash={}
c.fn=c
c.inverse=d.noop
if(l&&typeof o===f){o=o.call(e,c)}else{o=p.call(e,o,c)}if(o||o===0){t+=o}t+='\n            <span class="questions-count"></span>\n            <i class="icon-caret-down expanded-icon pull-right"></i>\n        </a>\n    </div>\n\n    '
t+='\n    <div class="video-feedback-container upper pure-hidden-xs" style="display: none;"></div>\n    '
l=i.newAskQuestionUi
o=l||e.newAskQuestionUi
r=i["if"]
c=d.program(3,b,a)
c.hash={}
c.fn=c
c.inverse=d.noop
o=r.call(e,o,c)
if(o||o===0){t+=o}t+='\n    <div class="video-discussion-header">\n        <ul class="tabrow" role="tablist">\n            <li id="questions-tab-header" data-type="questions" class="tabitem selected" '
l=i.hideQuestions
o=l||e.hideQuestions
r=i["if"]
c=d.program(7,k,a)
c.hash={}
c.fn=c
c.inverse=d.noop
o=r.call(e,o,c)
if(o||o===0){t+=o}t+=' role="tab">\n                <a href="javascript:void(0);">\n                    '
l=i["_"]
o=l||e["_"]
c=d.program(9,_,a)
c.hash={}
c.fn=c
c.inverse=d.noop
if(l&&typeof o===f){o=o.call(e,c)}else{o=p.call(e,o,c)}if(o||o===0){t+=o}t+='\n                </a>\n            </li>\n            <li id="comments-tab-header" data-type="comments" class="tabitem" '
l=i.hideComments
o=l||e.hideComments
r=i["if"]
c=d.program(11,P,a)
c.hash={}
c.fn=c
c.inverse=d.noop
o=r.call(e,o,c)
if(o||o===0){t+=o}t+=' role="tab">\n                <a href="javascript:void(0);">\n                    '
l=i["_"]
o=l||e["_"]
c=d.program(13,j,a)
c.hash={}
c.fn=c
c.inverse=d.noop
if(l&&typeof o===f){o=o.call(e,c)}else{o=p.call(e,o,c)}if(o||o===0){t+=o}t+="\n                </a>\n            </li>\n            "
t+='\n            <li id="spinoffs-tab-header" data-type="spin-offs" class="tabitem"\n                '
l=i.showSpinoffs
o=l||e.showSpinoffs
r=i.unless
c=d.program(15,q,a)
c.hash={}
c.fn=c
c.inverse=d.noop
o=r.call(e,o,c)
if(o||o===0){t+=o}t+=' role="tab">\n                <a href="javascript:void(0);">'
l=i["_"]
o=l||e["_"]
c=d.program(17,w,a)
c.hash={}
c.fn=c
c.inverse=d.noop
if(l&&typeof o===f){o=o.call(e,c)}else{o=p.call(e,o,c)}if(o||o===0){t+=o}t+="</a>\n            </li>\n            "
l=i.showDocumentation
o=l||e.showDocumentation
r=i["if"]
c=d.program(19,M,a)
c.hash={}
c.fn=c
c.inverse=d.noop
o=r.call(e,o,c)
if(o||o===0){t+=o}t+="\n            "
l=i.showProjectFeedback
o=l||e.showProjectFeedback
r=i["if"]
c=d.program(22,F,a)
c.hash={}
c.fn=c
c.inverse=d.noop
o=r.call(e,o,c)
if(o||o===0){t+=o}t+='\n            <li data-type="clarifications" class="tabitem" style="display: none;">\n                <a href="javascript:void(0);">'
l=i["_"]
o=l||e["_"]
c=d.program(25,U,a)
c.hash={}
c.fn=c
c.inverse=d.noop
if(l&&typeof o===f){o=o.call(e,c)}else{o=p.call(e,o,c)}if(o||o===0){t+=o}t+="</a>\n            </li>\n            "
l=i.hideMetaPanels
o=l||e.hideMetaPanels
r=i["if"]
c=d.program(27,D,a)
c.hash={}
c.fn=c
c.inverse=d.noop
o=r.call(e,o,c)
if(o||o===0){t+=o}t+="\n        </ul>\n        "
l=i.hideMetaPanels
o=l||e.hideMetaPanels
r=i.unless
c=d.program(32,H,a)
c.hash={}
c.fn=c
c.inverse=d.noop
o=r.call(e,o,c)
if(o||o===0){t+=o}t+="\n    </div>\n    "
l=i.hideMetaPanels
o=l||e.hideMetaPanels
r=i["if"]
c=d.program(34,S,a)
c.hash={}
c.fn=c
c.inverse=d.noop
o=r.call(e,o,c)
if(o||o===0){t+=o}t+='\n\n\n    <div class="tab questions-tab">\n        '
l=i.canRequestFeedback
o=l||e.canRequestFeedback
r=i["if"]
c=d.program(36,C,a)
c.hash={}
c.fn=c
c.inverse=d.program(39,E,a)
o=r.call(e,o,c)
if(o||o===0){t+=o}t+='\n        <div class="questions">\n            '
o=e
o=d.invokePartial(s["discussion_discussion-list"],"discussion_discussion-list",o,i,s)
if(o||o===0){t+=o}t+='\n        </div>\n    </div>\n\n    <div class="tab comments-tab" style="display: none;">\n        '
l=i.restrictPosting
o=l||e.restrictPosting
r=i.unless
c=d.program(43,G,a)
c.hash={}
c.fn=c
c.inverse=d.noop
o=r.call(e,o,c)
if(o||o===0){t+=o}t+='\n        <div class="comments"></div>\n    </div>\n\n    <div class="tab spin-offs-tab" style="display: none;">\n        <div class="spin-offs"></div>\n    </div>\n\n    '
l=i.showDocumentation
o=l||e.showDocumentation
r=i["if"]
c=d.program(45,K,a)
c.hash={}
c.fn=c
c.inverse=d.noop
o=r.call(e,o,c)
if(o||o===0){t+=o}t+="\n\n    "
l=i.hideMetaPanels
o=l||e.hideMetaPanels
r=i["if"]
c=d.program(47,O,a)
c.hash={}
c.fn=c
c.inverse=d.noop
o=r.call(e,o,c)
if(o||o===0){t+=o}t+="\n\n    "
l=i.showProjectFeedback
o=l||e.showProjectFeedback
r=i["if"]
c=d.program(49,z,a)
c.hash={}
c.fn=c
c.inverse=d.noop
o=r.call(e,o,c)
if(o||o===0){t+=o}t+='\n\n    <div class="tab clarifications-tab" style="display: none;">\n        <div class="clarifications"></div>\n    </div>\n\n    <div class="discussion-progress-bar" style="display:none"><img src="'
o="/images/throbber.gif"
l=i.staticUrl
r=l||e.staticUrl
if(typeof r===f){o=r.call(e,o,{hash:{}})}else if(r===h){o=u.call(e,"staticUrl",o,{hash:{}})}else{o=r}t+=v(o)+'" alt="'
l=i["_"]
o=l||e["_"]
c=d.program(51,B,a)
c.hash={}
c.fn=c
c.inverse=d.noop
if(l&&typeof o===f){o=o.call(e,c)}else{o=p.call(e,o,c)}if(o||o===0){t+=o}t+='"></div>\n    <a class="discussion-i18n-message" style="display: none">'
l=i["_"]
o=l||e["_"]
c=d.program(53,I,a)
c.hash={}
c.fn=c
c.inverse=d.noop
if(l&&typeof o===f){o=o.call(e,c)}else{o=p.call(e,o,c)}if(o||o===0){t+=o}t+="</a>\n</div>\n"
return t})
function wrapped_template(n,e){return absoluteLinks.makeHtmlLinksSafe(template(n,e))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/discussion-guidelines.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(n,e,i,s,a){i=i||n.helpers
var r="",o,l,t,f,c=this,u="function",p=i.helperMissing,h=void 0,d=this.escapeExpression,m=i.blockHelperMissing
function v(n,e){var s="",a,r
s+="\n    "
t=i.communityQuestionsUrl
a=t||n.communityQuestionsUrl
r=i["if"]
f=c.program(2,g,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n\n    "
t=i.isVideo
a=t||n.isVideo
r=i["if"]
f=c.program(7,b,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n\n    "
t=i.isArticle
a=t||n.isArticle
r=i["if"]
f=c.program(25,C,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=r.call(n,a,f)
if(a||a===0){s+=a}s+='\n\n    <div class="discussion-guidelines-header">'
t=i["_"]
a=t||n["_"]
f=c.program(43,M,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</div>\n        <p>\n            "
t=i["_"]
a=t||n["_"]
f=c.program(45,G,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n        </p>\n    <br>\n    "
return s}function g(n,e){var s="",a
s+='\n    <div class="discussion-guidelines-header">'
t=i["_"]
a=t||n["_"]
f=c.program(3,_,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</div>\n    <p>\n        "
t=i["_"]
a=t||n["_"]
f=c.program(5,y,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n    </p>\n    <br>\n    "
return s}function _(n,e){return"Answer more questions"}function y(n,e){var s="",a
s+='Visit <a href="'
t=i.communityQuestionsUrl
a=t||n.communityQuestionsUrl
if(typeof a===u){a=a.call(n,{hash:{}})}else if(a===h){a=p.call(n,"communityQuestionsUrl",{hash:{}})}s+=d(a)+'">Community Questions</a>\n        to answer new questions in\n        <a href="'
t=i.communityQuestionsUrl
a=t||n.communityQuestionsUrl
if(typeof a===u){a=a.call(n,{hash:{}})}else if(a===h){a=p.call(n,"communityQuestionsUrl",{hash:{}})}s+=d(a)+'">'
t=i.translatedCommunityQuestionsTitle
a=t||n.translatedCommunityQuestionsTitle
if(typeof a===u){a=a.call(n,{hash:{}})}else if(a===h){a=p.call(n,"translatedCommunityQuestionsTitle",{hash:{}})}s+=d(a)+"</a>."
return s}function b(n,e){var s="",a,r
s+="\n    "
t=i.clarificationsEnabled
a=t||n.clarificationsEnabled
r=i["if"]
f=c.program(8,k,e)
f.hash={}
f.fn=f
f.inverse=c.program(17,x,e)
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n    "
return s}function k(n,e){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(9,w,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n    </div>\n    "
t=i["_"]
a=t||n["_"]
f=c.program(11,Q,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n    <p class="guideline-example">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(13,q,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=i["_"]
a=t||n["_"]
f=c.program(15,E,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function w(n,e){return"Report a mistake in the video"}function Q(n,e){return"Example:"}function q(n,e){return'At 2:33, Sal said "single bonds" but meant "covalent bonds."'}function E(n,e){return"Report a mistake in the video"}function x(n,e){var s="",a,r
s+="\n    "
t=i.canEdit
a=t||n.canEdit
r=i["if"]
f=c.program(18,A,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n    "
return s}function A(n,e){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(19,R,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n    </div>\n    <p>\n    "
t=i["_"]
a=t||n["_"]
f=c.program(21,U,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=i["_"]
a=t||n["_"]
f=c.program(23,V,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function R(n,e){return"Report a mistake in the video"}function U(n,e){return"Clarifications are disabled for this video."}function V(n,e){return"View existing clarifications"}function C(n,e){var s="",a,r
s+="\n    "
t=i.clarificationsEnabled
a=t||n.clarificationsEnabled
r=i["if"]
f=c.program(26,P,e)
f.hash={}
f.fn=f
f.inverse=c.program(35,F,e)
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n    "
return s}function P(n,e){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(27,T,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n    </div>\n    "
t=i["_"]
a=t||n["_"]
f=c.program(29,j,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n    <p class="guideline-example">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(31,H,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=i["_"]
a=t||n["_"]
f=c.program(33,z,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function T(n,e){return"Report a mistake in the article"}function j(n,e){return"Example:"}function H(n,e){return"The link in the third paragraph is broken."}function z(n,e){return"Report a mistake in the article"}function F(n,e){var s="",a,r
s+="\n    "
t=i.canEdit
a=t||n.canEdit
r=i["if"]
f=c.program(36,K,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n    "
return s}function K(n,e){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(37,L,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n    </div>\n    <p>\n    "
t=i["_"]
a=t||n["_"]
f=c.program(39,S,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=i["_"]
a=t||n["_"]
f=c.program(41,D,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function L(n,e){return"Report a mistake in the article"}function S(n,e){return"Clarifications are disabled for this article."}function D(n,e){return"View existing clarifications"}function M(n,e){return"Discuss the site"}function G(n,e){return'View <a href="https://khanacademy.zendesk.com/hc/communities/public/topics">general discussions about Khan Academy</a>.'}function I(n,e){return"Flag inappropriate posts"}function O(n,e){return"Here are posts to avoid making. If you do encounter them, flag them for attention from our Guardians."}function Y(n,e){return"abuse"}function B(n,e){return"disrespectful or offensive"}function J(n,e){return"an advertisement"}function N(n,e){return"not helpful"}function W(n,e){return"low quality"}function X(n,e){return"not about the video topic"}function Z(n,e){return"contentious posts about politics, religion/atheism, or personal issues"}function ne(n,e){return"soliciting votes or seeking badges"}function ee(n,e){return"a homework question"}function ie(n,e){return"a duplicate answer"}function se(n,e){return"repeatedly making the same post"}function ae(n,e){return"wrong category"}function re(n,e){return"a tip or thanks in Questions"}function oe(n,e){return"a question in Tips & Thanks"}function le(n,e){return"an answer that should be its own question"}function te(n,e){return"about the site"}function fe(n,e){var s="",a
s+="\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(84,ce,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n            </li>\n        "
return s}function ce(n,e){return"a question about Khan Academy"}function ue(n,e){var s="",a
s+="\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(87,pe,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n                <div class="discussion-guidelines-link">(<a href="https://khanacademy.zendesk.com/">'
t=i["_"]
a=t||n["_"]
f=c.program(89,he,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</a>)</div>\n            </li>\n        "
return s}function pe(n,e){return"a question about Khan Academy"}function he(n,e){return"Visit our FAQ"}function de(n,e){return"a post about badges"}function me(n,e){var s="",a
s+="\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(94,ve,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n            </li>\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(96,ge,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n            </li>\n        "
return s}function ve(n,e){return"a technical problem with the site"}function ge(n,e){return"a request for videos or features"}function _e(n,e){var s="",a
s+="\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(99,ye,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n                <div class="discussion-guidelines-link">(<a href="http://khanacademy.org/reportissue?type=Defect">'
t=i["_"]
a=t||n["_"]
f=c.program(101,be,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</a>)</div>\n            </li>\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(103,ke,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n            </li>\n        "
return s}function ye(n,e){return"a technical problem with the site"}function be(n,e){return"Report a problem"}function ke(n,e){return'a request for <a href="https://khanacademy.zendesk.com/hc/communities/public/topics/200136634-Feature-Requests">features</a>'}function we(n,e){return"Your Spin-Offs"}r+='<div class="main-discussion-guidelines discussion-guidelines">\n    '
t=i.restrictPosting
o=t||e.restrictPosting
l=i.unless
f=c.program(1,v,a)
f.hash={}
f.fn=f
f.inverse=c.noop
o=l.call(e,o,f)
if(o||o===0){r+=o}r+='\n\n    <div class="discussion-guidelines-header">'
t=i["_"]
o=t||e["_"]
f=c.program(47,I,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</div>\n\n    <p>\n        "
t=i["_"]
o=t||e["_"]
f=c.program(49,O,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="\n    </p>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
o=t||e["_"]
f=c.program(51,Y,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</div>\n    <ul>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(53,B,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(55,J,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n    </ul>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
o=t||e["_"]
f=c.program(57,N,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</div>\n    <ul>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(59,W,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(61,X,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(63,Z,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(65,ne,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(67,ee,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(69,ie,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(71,se,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n    </ul>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
o=t||e["_"]
f=c.program(73,ae,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</div>\n    <ul>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(75,re,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(77,oe,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(79,le,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n    </ul>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
o=t||e["_"]
f=c.program(81,te,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</div>\n    <ul>\n        "
t=i.restrictPosting
o=t||e.restrictPosting
l=i["if"]
f=c.program(83,fe,a)
f.hash={}
f.fn=f
f.inverse=c.program(86,ue,a)
o=l.call(e,o,f)
if(o||o===0){r+=o}r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(91,de,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
t=i.restrictPosting
o=t||e.restrictPosting
l=i["if"]
f=c.program(93,me,a)
f.hash={}
f.fn=f
f.inverse=c.program(98,_e,a)
o=l.call(e,o,f)
if(o||o===0){r+=o}r+='\n    </ul>\n</div>\n<div class="user-forks discussion-guidelines">\n    <div class="discussion-guidelines-header">'
t=i["_"]
o=t||e["_"]
f=c.program(105,we,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+='</div>\n    <div class="user-fork-list"></div>\n</div>\n'
return r})
function wrapped_template(n,e){return absoluteLinks.makeHtmlLinksSafe(template(n,e))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/meta-panel-guidelines.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(n,e,i,s,l){i=i||n.helpers
var r="",o,a,t,f,c=this,u="function",p=i.blockHelperMissing
function h(n,e){var s="",l
s+='\n    <div class="discussion-guidelines-header">'
t=i["_"]
l=t||n["_"]
f=c.program(2,d,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(n,f)}else{l=p.call(n,l,f)}if(l||l===0){s+=l}s+="</div>\n        <p>\n            "
t=i["_"]
l=t||n["_"]
f=c.program(4,v,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(n,f)}else{l=p.call(n,l,f)}if(l||l===0){s+=l}s+="\n        </p>\n    <br>\n    "
return s}function d(n,e){return"Discuss the site"}function v(n,e){return'View <a href="https://khanacademy.zendesk.com/hc/communities/public/topics">general discussions about Khan Academy</a>.'}function m(n,e){return"Flag inappropriate posts"}function g(n,e){return"Here are posts to avoid making. If you do encounter them, flag them for attention from our Guardians."}function _(n,e){return"abuse"}function y(n,e){return"disrespectful or offensive"}function b(n,e){return"an advertisement"}function k(n,e){return"not helpful"}function w(n,e){return"low quality"}function q(n,e){return"not about the video topic"}function P(n,e){return"contentious posts about politics, religion/atheism, or personal issues"}function A(n,e){return"soliciting votes or seeking badges"}function H(n,e){return"a homework question"}function z(n,e){return"a duplicate answer"}function F(n,e){return"repeatedly making the same post"}function K(n,e){return"wrong category"}function L(n,e){return"a tip or thanks in Questions"}function D(n,e){return"a question in Tips & Thanks"}function Q(n,e){return"an answer that should be its own question"}function R(n,e){return"about the site"}function S(n,e){var s="",l
s+="\n            <li>\n                "
t=i["_"]
l=t||n["_"]
f=c.program(43,T,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(n,f)}else{l=p.call(n,l,f)}if(l||l===0){s+=l}s+="\n            </li>\n        "
return s}function T(n,e){return"a question about Khan Academy"}function V(n,e){var s="",l
s+="\n            <li>\n                "
t=i["_"]
l=t||n["_"]
f=c.program(46,j,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(n,f)}else{l=p.call(n,l,f)}if(l||l===0){s+=l}s+='\n                <div class="discussion-guidelines-link">(<a href="https://khanacademy.zendesk.com/">'
t=i["_"]
l=t||n["_"]
f=c.program(48,x,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(n,f)}else{l=p.call(n,l,f)}if(l||l===0){s+=l}s+="</a>)</div>\n            </li>\n        "
return s}function j(n,e){return"a question about Khan Academy"}function x(n,e){return"Visit our FAQ"}function G(n,e){return"a post about badges"}function I(n,e){var s="",l
s+="\n            <li>\n                "
t=i["_"]
l=t||n["_"]
f=c.program(53,M,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(n,f)}else{l=p.call(n,l,f)}if(l||l===0){s+=l}s+="\n            </li>\n            <li>\n                "
t=i["_"]
l=t||n["_"]
f=c.program(55,O,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(n,f)}else{l=p.call(n,l,f)}if(l||l===0){s+=l}s+="\n            </li>\n        "
return s}function M(n,e){return"a technical problem with the site"}function O(n,e){return"a request for videos or features"}function Y(n,e){var s="",l
s+="\n            <li>\n                "
t=i["_"]
l=t||n["_"]
f=c.program(58,B,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(n,f)}else{l=p.call(n,l,f)}if(l||l===0){s+=l}s+='\n                <div class="discussion-guidelines-link">(<a href="http://khanacademy.org/reportissue?type=Defect">'
t=i["_"]
l=t||n["_"]
f=c.program(60,C,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(n,f)}else{l=p.call(n,l,f)}if(l||l===0){s+=l}s+="</a>)</div>\n            </li>\n            <li>\n                "
t=i["_"]
l=t||n["_"]
f=c.program(62,E,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(n,f)}else{l=p.call(n,l,f)}if(l||l===0){s+=l}s+="\n            </li>\n        "
return s}function B(n,e){return"a technical problem with the site"}function C(n,e){return"Report a problem"}function E(n,e){return'a request for <a href="https://khanacademy.zendesk.com/hc/communities/public/topics/200136634-Feature-Requests">features</a>'}function J(n,e){return"Your Spin-Offs"}r+='<div class="main-discussion-guidelines discussion-guidelines">\n    '
t=i.restrictPosting
o=t||e.restrictPosting
a=i.unless
f=c.program(1,h,l)
f.hash={}
f.fn=f
f.inverse=c.noop
o=a.call(e,o,f)
if(o||o===0){r+=o}r+='\n\n    <div class="discussion-guidelines-header">'
t=i["_"]
o=t||e["_"]
f=c.program(6,m,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</div>\n\n    <p>\n        "
t=i["_"]
o=t||e["_"]
f=c.program(8,g,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="\n    </p>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
o=t||e["_"]
f=c.program(10,_,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</div>\n    <ul>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(12,y,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(14,b,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n    </ul>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
o=t||e["_"]
f=c.program(16,k,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</div>\n    <ul>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(18,w,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(20,q,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(22,P,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(24,A,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(26,H,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(28,z,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(30,F,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n    </ul>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
o=t||e["_"]
f=c.program(32,K,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</div>\n    <ul>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(34,L,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(36,D,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(38,Q,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n    </ul>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
o=t||e["_"]
f=c.program(40,R,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</div>\n    <ul>\n        "
t=i.restrictPosting
o=t||e.restrictPosting
a=i["if"]
f=c.program(42,S,l)
f.hash={}
f.fn=f
f.inverse=c.program(45,V,l)
o=a.call(e,o,f)
if(o||o===0){r+=o}r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(50,G,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
t=i.restrictPosting
o=t||e.restrictPosting
a=i["if"]
f=c.program(52,I,l)
f.hash={}
f.fn=f
f.inverse=c.program(57,Y,l)
o=a.call(e,o,f)
if(o||o===0){r+=o}r+='\n    </ul>\n</div>\n<div class="user-forks discussion-guidelines">\n    <div class="discussion-guidelines-header">'
t=i["_"]
o=t||e["_"]
f=c.program(64,J,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=p.call(e,o,f)}if(o||o===0){r+=o}r+='</div>\n    <div class="user-fork-list"></div>\n</div>\n'
return r})
function wrapped_template(n,e){return absoluteLinks.makeHtmlLinksSafe(template(n,e))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/meta-panel-report-a-mistake.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(n,i,e,s,a){e=e||n.helpers
var r="",o,l,t,c,f=this,p="function",u=e.helperMissing,h=void 0,d=this.escapeExpression,m=e.blockHelperMissing
function v(n,i){var s="",a,r
s+="\n    "
t=e.communityQuestionsUrl
a=t||n.communityQuestionsUrl
r=e["if"]
c=f.program(2,g,i)
c.hash={}
c.fn=c
c.inverse=f.noop
a=r.call(n,a,c)
if(a||a===0){s+=a}s+="\n\n    "
t=e.isVideo
a=t||n.isVideo
r=e["if"]
c=f.program(7,b,i)
c.hash={}
c.fn=c
c.inverse=f.noop
a=r.call(n,a,c)
if(a||a===0){s+=a}s+="\n\n    "
t=e.isArticle
a=t||n.isArticle
r=e["if"]
c=f.program(25,A,i)
c.hash={}
c.fn=c
c.inverse=f.noop
a=r.call(n,a,c)
if(a||a===0){s+=a}s+='\n\n    <div class="discussion-guidelines-header">'
t=e["_"]
a=t||n["_"]
c=f.program(43,O,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+="</div>\n        <p>\n            "
t=e["_"]
a=t||n["_"]
c=f.program(45,Y,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+="\n        </p>\n    <br>\n    "
return s}function g(n,i){var s="",a
s+='\n    <div class="discussion-guidelines-header">'
t=e["_"]
a=t||n["_"]
c=f.program(3,_,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+="</div>\n    <p>\n        "
t=e["_"]
a=t||n["_"]
c=f.program(5,y,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+="\n    </p>\n    <br>\n    "
return s}function _(n,i){return"Answer more questions"}function y(n,i){var s="",a
s+='Visit <a href="'
t=e.communityQuestionsUrl
a=t||n.communityQuestionsUrl
if(typeof a===p){a=a.call(n,{hash:{}})}else if(a===h){a=u.call(n,"communityQuestionsUrl",{hash:{}})}s+=d(a)+'">Community Questions</a>\n        to answer new questions in\n        <a href="'
t=e.communityQuestionsUrl
a=t||n.communityQuestionsUrl
if(typeof a===p){a=a.call(n,{hash:{}})}else if(a===h){a=u.call(n,"communityQuestionsUrl",{hash:{}})}s+=d(a)+'">'
t=e.translatedCommunityQuestionsTitle
a=t||n.translatedCommunityQuestionsTitle
if(typeof a===p){a=a.call(n,{hash:{}})}else if(a===h){a=u.call(n,"translatedCommunityQuestionsTitle",{hash:{}})}s+=d(a)+"</a>."
return s}function b(n,i){var s="",a,r
s+="\n    "
t=e.clarificationsEnabled
a=t||n.clarificationsEnabled
r=e["if"]
c=f.program(8,k,i)
c.hash={}
c.fn=c
c.inverse=f.program(17,U,i)
a=r.call(n,a,c)
if(a||a===0){s+=a}s+="\n    "
return s}function k(n,i){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=e["_"]
a=t||n["_"]
c=f.program(9,Q,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+="\n    </div>\n    "
t=e["_"]
a=t||n["_"]
c=f.program(11,E,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+='\n    <p class="guideline-example">\n        '
t=e["_"]
a=t||n["_"]
c=f.program(13,w,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=e["_"]
a=t||n["_"]
c=f.program(15,x,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function Q(n,i){return"Report a mistake in the video"}function E(n,i){return"Example:"}function w(n,i){return'At 2:33, Sal said "single bonds" but meant "covalent bonds."'}function x(n,i){return"Report a mistake in the video"}function U(n,i){var s="",a,r
s+="\n    "
t=e.canEdit
a=t||n.canEdit
r=e["if"]
c=f.program(18,C,i)
c.hash={}
c.fn=c
c.inverse=f.noop
a=r.call(n,a,c)
if(a||a===0){s+=a}s+="\n    "
return s}function C(n,i){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=e["_"]
a=t||n["_"]
c=f.program(19,R,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+="\n    </div>\n    <p>\n    "
t=e["_"]
a=t||n["_"]
c=f.program(21,V,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=e["_"]
a=t||n["_"]
c=f.program(23,j,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function R(n,i){return"Report a mistake in the video"}function V(n,i){return"Clarifications are disabled for this video."}function j(n,i){return"View existing clarifications"}function A(n,i){var s="",a,r
s+="\n    "
t=e.clarificationsEnabled
a=t||n.clarificationsEnabled
r=e["if"]
c=f.program(26,T,i)
c.hash={}
c.fn=c
c.inverse=f.program(35,M,i)
a=r.call(n,a,c)
if(a||a===0){s+=a}s+="\n    "
return s}function T(n,i){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=e["_"]
a=t||n["_"]
c=f.program(27,q,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+="\n    </div>\n    "
t=e["_"]
a=t||n["_"]
c=f.program(29,H,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+='\n    <p class="guideline-example">\n        '
t=e["_"]
a=t||n["_"]
c=f.program(31,L,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=e["_"]
a=t||n["_"]
c=f.program(33,S,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function q(n,i){return"Report a mistake in the article"}function H(n,i){return"Example:"}function L(n,i){return"The link in the third paragraph is broken."}function S(n,i){return"Report a mistake in the article"}function M(n,i){var s="",a,r
s+="\n    "
t=e.canEdit
a=t||n.canEdit
r=e["if"]
c=f.program(36,P,i)
c.hash={}
c.fn=c
c.inverse=f.noop
a=r.call(n,a,c)
if(a||a===0){s+=a}s+="\n    "
return s}function P(n,i){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=e["_"]
a=t||n["_"]
c=f.program(37,z,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+="\n    </div>\n    <p>\n    "
t=e["_"]
a=t||n["_"]
c=f.program(39,D,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=e["_"]
a=t||n["_"]
c=f.program(41,K,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof a===p){a=a.call(n,c)}else{a=m.call(n,a,c)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function z(n,i){return"Report a mistake in the article"}function D(n,i){return"Clarifications are disabled for this article."}function K(n,i){return"View existing clarifications"}function O(n,i){return"Discuss the site"}function Y(n,i){return'View <a href="https://khanacademy.zendesk.com/hc/communities/public/topics">general discussions about Khan Academy</a>.'}function B(n,i){return"Your Spin-Offs"}r+='<div class="main-discussion-guidelines discussion-guidelines">\n    '
t=e.restrictPosting
o=t||i.restrictPosting
l=e.unless
c=f.program(1,v,a)
c.hash={}
c.fn=c
c.inverse=f.noop
o=l.call(i,o,c)
if(o||o===0){r+=o}r+='\n</div>\n<div class="user-forks discussion-guidelines">\n    <div class="discussion-guidelines-header">'
t=e["_"]
o=t||i["_"]
c=f.program(47,B,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof o===p){o=o.call(i,c)}else{o=m.call(i,o,c)}if(o||o===0){r+=o}r+='</div>\n    <div class="user-fork-list"></div>\n</div>\n'
return r})
function wrapped_template(n,i){return absoluteLinks.makeHtmlLinksSafe(template(n,i))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/scratchpad-thumbnail.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(a,e,s,t,l){s=s||a.helpers
var i="",h,r,c,n=this,p="function",o=s.helperMissing,d=void 0,f=this.escapeExpression
i+='<a href="'
c=s.showPath
h=c||e.showPath
if(typeof h===p){h=h.call(e,{hash:{}})}else if(h===d){h=o.call(e,"showPath",{hash:{}})}i+=f(h)+'" class="discussion-scratchpad-thumbnail">\n    <img src="'
c=s.imagePath
h=c||e.imagePath
c=s.staticUrl
r=c||e.staticUrl
if(typeof r===p){h=r.call(e,h,{hash:{}})}else if(r===d){h=o.call(e,"staticUrl",h,{hash:{}})}else{h=r}i+=f(h)+'" class="scratchpad-thumbnail">\n    <div class="discussion-scratchpad-title">'
c=s.translatedTitle
h=c||e.translatedTitle
if(typeof h===p){h=h.call(e,{hash:{}})}else if(h===d){h=o.call(e,"translatedTitle",{hash:{}})}i+=f(h)+"</div>\n</a>\n"
return i})
function wrapped_template(a,e){return absoluteLinks.makeHtmlLinksSafe(template(a,e))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/topic-discussion.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,n,i,l,s){i=i||e.helpers
var a="",o,t,r,f,c=this,p="function",u=i.helperMissing,h=void 0,d=this.escapeExpression,v=i.blockHelperMissing
function m(e,n){return'class="subject-link"'}function g(e,n){var l="",s
r=i.subject
s=r||e.subject
s=s===null||s===undefined||s===false?s:s.translatedTitle
if(typeof s===p){s=s.call(e,{hash:{}})}else if(s===h){s=u.call(e,"subject.translatedTitle",{hash:{}})}l+=d(s)+": Questions"
return l}function _(e,n){return"Give a great answer"}function y(e,n){return"Be a guide"}function b(e,n){return'We\'re teaching each other &ndash; so don\'t just answer "Yes" or "No", share your answer the way your favorite teacher would.'}function k(e,n){return"Vote, don't echo"}function w(e,n){return"If someone has already answered the question well, don't repeat their answer &ndash; vote it up instead."}function j(e,n){return"Flag inappropriate posts"}function q(e,n){return"Here are posts to avoid making. If you do encounter them, flag them for attention from our Guardians."}function U(e,n){return"abuse"}function F(e,n){return"disrespectful or offensive"}function H(e,n){return"an advertisement"}function P(e,n){return"not helpful"}function T(e,n){return"low quality"}function E(e,n){return"not about the video topic"}function L(e,n){return"contentious posts about politics, religion/atheism, or personal issues"}function R(e,n){return"soliciting votes or seeking badges"}function S(e,n){return"a homework question"}function V(e,n){return"a duplicate answer"}function x(e,n){return"repeatedly making the same post"}function z(e,n){return"wrong category"}function A(e,n){return"a tip or thanks in Questions"}function D(e,n){return"an answer that should be its own question"}function G(e,n){return"about the site"}function I(e,n){return"a question about Khan Academy"}function K(e,n){return"Visit our help center"}function M(e,n){return"a post about badges"}function Q(e,n){return"a technical problem with the site"}function B(e,n){return"Report a problem"}function C(e,n){return'a request for <a href="https://khanacademy.zendesk.com/hc/communities/public/topics/200136634-Feature-Requests">features</a>'}function N(e,n){return"Visit a video or article to ask a question."}function W(e,n){return"Recent questions"}function Y(e,n){return"Do you understand English? Click here to see more discussion happening on Khan Academy's English site."}a+='<div class="content-pane-inner subject-color">\n<div data-role="header" class="main-header">\n    <div class="topic-info">\n        <div class="topic-info-inner">\n            <div class=\'subject-breadcrumb\'><a href="'
r=i.subject
o=r||n.subject
o=o===null||o===undefined||o===false?o:o.topicPageUrl
if(typeof o===p){o=o.call(n,{hash:{}})}else if(o===h){o=u.call(n,"subject.topicPageUrl",{hash:{}})}a+=d(o)+'" '
r=i.decoupleFromSubjectPage
o=r||n.decoupleFromSubjectPage
t=i.unless
f=c.program(1,m,s)
f.hash={}
f.fn=f
f.inverse=c.noop
o=t.call(n,o,f)
if(o||o===0){a+=o}a+=' data-id=""><i class="icon-caret-left"></i>'
r=i.subject
o=r||n.subject
o=o===null||o===undefined||o===false?o:o.translatedTitle
if(typeof o===p){o=o.call(n,{hash:{}})}else if(o===h){o=u.call(n,"subject.translatedTitle",{hash:{}})}a+=d(o)+"</a></div>\n            <div class='topic-title'>"
r=i["_"]
o=r||n["_"]
f=c.program(3,g,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+='</div>\n\n            <div class="topic-discussion-guidelines visible-desktop">\n\n            <h3>'
r=i["_"]
o=r||n["_"]
f=c.program(5,_,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</h3>\n\n            <h4>"
r=i["_"]
o=r||n["_"]
f=c.program(7,y,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</h4>\n            <p>"
r=i["_"]
o=r||n["_"]
f=c.program(9,b,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</p>\n\n            <h4>"
r=i["_"]
o=r||n["_"]
f=c.program(11,k,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</h4>\n            <p>"
r=i["_"]
o=r||n["_"]
f=c.program(13,w,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</p>\n\n            <h3>"
r=i["_"]
o=r||n["_"]
f=c.program(15,j,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</h3>\n            <p>"
r=i["_"]
o=r||n["_"]
f=c.program(17,q,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</p>\n\n            <h4>"
r=i["_"]
o=r||n["_"]
f=c.program(19,U,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</h4>\n            <ul>\n            <li>"
r=i["_"]
o=r||n["_"]
f=c.program(21,F,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</li>\n            <li>"
r=i["_"]
o=r||n["_"]
f=c.program(23,H,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</li>\n            </ul>\n\n            <h4>"
r=i["_"]
o=r||n["_"]
f=c.program(25,P,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</h4>\n            <ul>\n            "
a+="\n            <li>"
r=i["_"]
o=r||n["_"]
f=c.program(27,T,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</li>\n            "
a+="\n            <li>"
r=i["_"]
o=r||n["_"]
f=c.program(29,E,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</li>\n            "
a+="\n            <li>"
r=i["_"]
o=r||n["_"]
f=c.program(31,L,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</li>\n            "
a+="\n            <li>"
r=i["_"]
o=r||n["_"]
f=c.program(33,R,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</li>\n            "
a+="\n            <li>"
r=i["_"]
o=r||n["_"]
f=c.program(35,S,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</li>\n            "
a+="\n            <li>"
r=i["_"]
o=r||n["_"]
f=c.program(37,V,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</li>\n            "
a+="\n            <li>"
r=i["_"]
o=r||n["_"]
f=c.program(39,x,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</li>\n            </ul>\n\n            <h4>"
r=i["_"]
o=r||n["_"]
f=c.program(41,z,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</h4>\n            <ul>\n            <li>"
r=i["_"]
o=r||n["_"]
f=c.program(43,A,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</li>\n            <li>"
r=i["_"]
o=r||n["_"]
f=c.program(45,D,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</li>\n            </ul>\n\n            <h4>"
r=i["_"]
o=r||n["_"]
f=c.program(47,G,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</h4>\n            <ul>\n            <li>"
r=i["_"]
o=r||n["_"]
f=c.program(49,I,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+=' <div class="discussion-guidelines-link">(<a href="https://khanacademy.zendesk.com/">'
r=i["_"]
o=r||n["_"]
f=c.program(51,K,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</a>)</div></li>\n            <li>"
r=i["_"]
o=r||n["_"]
f=c.program(53,M,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</li>\n            <li>"
r=i["_"]
o=r||n["_"]
f=c.program(55,Q,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+=' <div class="discussion-guidelines-link">(<a href="http://khanacademy.org/reportissue?type=Defect">'
r=i["_"]
o=r||n["_"]
f=c.program(57,B,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</a>)</div></li>\n            <li>"
r=i["_"]
o=r||n["_"]
f=c.program(59,C,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+='</li>\n            </ul>\n\n            </div>\n        </div>\n    </div>\n</div>\n<div class="videos-list">\n    <div class="videos-list-inner">\n        <div class="videos-list-inner-inner">\n            <div class="all-questions video-discussion">\n            <p class="ask-instructions">'
r=i["_"]
o=r||n["_"]
f=c.program(61,N,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</p>\n            <h3>"
r=i["_"]
o=r||n["_"]
f=c.program(63,W,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+='</h3>\n            <div class="discussion-progress-bar"><img src="'
o="/images/throbber.gif"
r=i.staticUrl
t=r||n.staticUrl
if(typeof t===p){o=t.call(n,o,{hash:{}})}else if(t===h){o=u.call(n,"staticUrl",o,{hash:{}})}else{o=t}a+=d(o)+'"></div>\n            <a class="discussion-i18n-message" style="display: none">'
r=i["_"]
o=r||n["_"]
f=c.program(65,Y,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof o===p){o=o.call(n,f)}else{o=v.call(n,o,f)}if(o||o===0){a+=o}a+="</a>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n"
return a})
function wrapped_template(e,n){return absoluteLinks.makeHtmlLinksSafe(template(e,n))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/spinoffs.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var i18n=require("../shared-package/i18n.js")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionList=require("./discussion-list.js")
var KA=require("../shared-package/ka.js")
var DiscussionSpinOffs={_loadComplete:false,_loadProgress:0,_loadMax:2,_containerSelector:".spin-offs",_userContainerSelector:".user-fork-list",_tabSelector:".spin-offs-tab",_tabHeaderSelector:"#spinoffs-tab-header",subTab:"spin-offs",show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},sort:function(s){this.sortValue=s
this.reset()
this.load()},load:function(){if(this._loadComplete){Discussion.hideProgressBar()
return}this._loadProgress=0
var s=$(".main-discussion-guidelines").height()||0,e=$(".video-discussion").height()||0,i=Math.max(s,e)
Discussion._minHeight=i
Discussion.data.$container.css("min-height",i)
var t=require.ifLoadedLegacy("../scratchpads-package/scratchpad-ui.js")
if(t&&(!t.ScratchpadUI.scratchpad.isChallenge()||t.ScratchpadUI.userScratchpad.get("isComplete"))){var a="/api/internal/scratchpads/"+Discussion.data.focusId+"/top-forks",r={casing:"camel"}
this.list=new DiscussionList({itemTemplate:require("./fork.handlebars"),containerSelector:this._containerSelector,requestURL:a,params:r,itemKey:"scratchpads",sorts:[{name:i18n._("Top"),title:i18n._("Highest Quality"),value:1,isDefault:true},{name:i18n._("Recent"),title:i18n._("Most Recent"),value:2,isDefault:false}],limit:30,sortValue:this.sortValue,hideHeader:true,onInitialFetch:this._finishLoad,preRenderTransformData:function(s){_(s).each(function(s){s.isScratchpad=true
s.isScratchpadCard=true
s.hideFlagControls=true})
return s}})}else{this._checkComplete()}var a="/api/internal/scratchpads/"+Discussion.data.focusId+"/user-forks",r={casing:"camel"}
this.userForkList=new DiscussionList({itemTemplate:require("./fork.handlebars"),containerSelector:this._userContainerSelector,requestURL:a,params:r,itemKey:"scratchpads",sorts:[{name:i18n._("Top"),title:i18n._("Highest Quality"),value:1,isDefault:true},{name:i18n._("Recent"),title:i18n._("Most Recent"),value:2,isDefault:false}],limit:30,sortValue:this.sortValue,hideHeader:true,onInitialFetch:this._finishUserLoad,preRenderTransformData:function(s){_(s).each(function(s){s.isScratchpad=true
s.isScratchpadCard=true
s.hideFlagControls=true
s.hideAuthorName=true
s.showDate=true
s.wide=true})
return s}})},_checkComplete:function(){DiscussionSpinOffs._loadProgress+=1
if(DiscussionSpinOffs._loadProgress===DiscussionSpinOffs._loadMax){DiscussionSpinOffs._loadComplete=true
Discussion._finishLoad()}},_finishLoad:function(s){var e=require.ifLoadedLegacy("../scratchpads-package/scratchpad-ui.js")
if(e){DiscussionSpinOffs.list.$container.find(".discussion-list-content").addClass("row")
var i=DiscussionSpinOffs._containerSelector
if(!$(i).find(".fork").length){$(i).html("<p class='no-results'>"+i18n._("Be the first to ")+"<span data-react-component='button' id='fork-button'/>!"+"</p>")
e.ScratchpadUI.mountReactButton($(i).find("#fork-button").show()[0],"submit",i18n._("Save as a spin-off"))}$(i).append(i18n._("Note: we don't show spin-offs that didn't change any code, "+" are by child accounts, or are by anonymous users."))}DiscussionSpinOffs._checkComplete()},_finishUserLoad:function(s){DiscussionSpinOffs.userForkList.$container.find(".discussion-list-content").addClass("row")
var e=DiscussionSpinOffs._userContainerSelector
if(!$(e).find(".fork").length){if(!KA.isPhantom()){$(e).html("<p class='no-results'>"+i18n._("If you save a spin-off of this project, "+"you will see it here (as well as in your "+"<a href='%(projectsUrl)s'>My Projects</a> "+"list).",{projectsUrl:KA.getUserProfile().get("profileRoot")+"projects"})+"</p>")}else{$(e).html("<p class='no-results'>"+i18n._("Login to view your spin-offs of this project.")+"</p>")}}DiscussionSpinOffs._checkComplete()},reset:function(){this._loadComplete=false
$(this._containerSelector).html("")
$(this._userContainerSelector).html("")}}
module.exports=DiscussionSpinOffs
});
KAdefine("javascript/discussion-package/documentation.js", function(require, module, exports) {
var $=require("jquery")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionDocumentation={_containerSelector:".documentation",_tabSelector:".documentation-tab",subTab:"documentation",show:function(){var e=this
this._shouldBeVisible=true
require.async(["../scratchpad-base-package/scratchpads.js","../scratchpads-package/scratchpad-ui.js"],function(s,i){if(!e._shouldBeVisible){return}DiscussionDocumentation.load(false,s.ScratchpadDocsView,i.ScratchpadUI)
$(DiscussionDocumentation._tabSelector).show()})},hide:function(){this._shouldBeVisible=false
$(this._tabSelector).hide()},load:function(e,s,i){this._independent=!!e
var t=i.scratchpad.get("userAuthoredContentType")
new s({el:$(this._containerSelector),userAuthoredContentType:t,inCourse:i.topicSlug!=="computer-programming"}).render()
Discussion.hideProgressBar()},_finishLoad:function(e){if(!this._independent){Discussion._finishLoad()}},reset:$.noop}
module.exports=DiscussionDocumentation
});
KAdefine("javascript/discussion-package/guidelines.js", function(require, module, exports) {
var $=require("jquery")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionGuidelines={_containerSelector:".guidelines",_tabSelector:".guidelines-tab",subTab:"guidelines",show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},load:function(){this._loadComplete=true
Discussion._finishLoad()},reset:$.noop}
module.exports=DiscussionGuidelines
});
KAdefine("javascript/discussion-package/report-a-mistake.js", function(require, module, exports) {
var $=require("jquery")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionReportAMistake={_containerSelector:".report-a-mistake",_tabSelector:".report-a-mistake-tab",subTab:"report-a-mistake",show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},load:function(){this._loadComplete=true
Discussion._finishLoad()},reset:$.noop}
module.exports=DiscussionReportAMistake
});
KAdefine("javascript/discussion-package/project.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,a,i,l,s){i=i||e.helpers
l=l||e.partials
var r="",t,n,o,h,f=this,c="function",p=i.helperMissing,d=void 0,u=this.escapeExpression
function m(e,a){return"deleted"}function v(e,a){return" context-link"}function k(e,a){return" is-author"}function y(e,a){var l="",s
l+='data-kind="project" data-id="'
o=i.id
s=o||e.id
if(typeof s===c){s=s.call(e,{hash:{}})}else if(s===d){s=p.call(e,"id",{hash:{}})}l+=u(s)+'"'
return l}r+='<div class="scratchpad-vote '
o=i.appearsAsDeleted
t=o||a.appearsAsDeleted
n=i["if"]
h=f.program(1,m,s)
h.hash={}
h.fn=h
h.inverse=f.noop
t=n.call(a,t,h)
if(t||t===0){r+=t}r+=" discussion-item"
o=i.inUserProfile
t=o||a.inUserProfile
n=i["if"]
h=f.program(3,v,s)
h.hash={}
h.fn=h
h.inverse=f.noop
t=n.call(a,t,h)
if(t||t===0){r+=t}o=i.showAuthorControls
t=o||a.showAuthorControls
n=i["if"]
h=f.program(5,k,s)
h.hash={}
h.fn=h
h.inverse=f.noop
t=n.call(a,t,h)
if(t||t===0){r+=t}r+='" id="'
o=i.key
t=o||a.key
if(typeof t===c){t=t.call(a,{hash:{}})}else if(t===d){t=p.call(a,"key",{hash:{}})}r+=u(t)+'"\n     data-key="'
o=i.key
t=o||a.key
if(typeof t===c){t=t.call(a,{hash:{}})}else if(t===d){t=p.call(a,"key",{hash:{}})}r+=u(t)+'"\n     '
o=i.focus
t=o||a.focus
n=i["if"]
h=f.program(7,y,s)
h.hash={}
h.fn=h
h.inverse=f.noop
t=n.call(a,t,h)
if(t||t===0){r+=t}r+='>\n\n    <h2><a href="'
o=i.relativeUrl
t=o||a.relativeUrl
if(typeof t===c){t=t.call(a,{hash:{}})}else if(t===d){t=p.call(a,"relativeUrl",{hash:{}})}r+=u(t)+'">'
o=i.title
t=o||a.title
if(typeof t===c){t=t.call(a,{hash:{}})}else if(t===d){t=p.call(a,"title",{hash:{}})}r+=u(t)+'</a></h2>\n    <iframe src="'
o=i.relativeUrl
t=o||a.relativeUrl
if(typeof t===c){t=t.call(a,{hash:{}})}else if(t===d){t=p.call(a,"relativeUrl",{hash:{}})}r+=u(t)+'/embedded?editor=yes"\n            style="width: 940px; height: 440px; border: 0px;"\n            frameborder="0"\n            scrolling="no">\n    </iframe>\n\n    '
t=a
t=f.invokePartial(l["discussion_discussion-meta"],"discussion_discussion-meta",t,i,l)
if(t||t===0){r+=t}r+="\n</div>\n"
return r})
function wrapped_template(e,a){return absoluteLinks.makeHtmlLinksSafe(template(e,a))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/fork.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(a,e,i,s,l){i=i||a.helpers
s=s||a.partials
var t="",n,r,o,h,c=this,f="function",u=i.helperMissing,d=void 0,p=this.escapeExpression,m=i.blockHelperMissing
function v(a,e){return" ellipsis"}function k(a,e){var s="",l,t
s+='\n        <div>\n            <a class="author-nickname discussion-author'
o=i.wide
l=o||a.wide
t=i.unless
h=c.program(4,g,e)
h.hash={}
h.fn=h
h.inverse=c.noop
l=t.call(a,l,h)
if(l||l===0){s+=l}s+=' profile-programs" data-user-kaid="'
o=i.authorKaid
l=o||a.authorKaid
if(typeof l===f){l=l.call(a,{hash:{}})}else if(l===d){l=u.call(a,"authorKaid",{hash:{}})}s+=p(l)+'">'
o=i.authorNickname
l=o||a.authorNickname
if(typeof l===f){l=l.call(a,{hash:{}})}else if(l===d){l=u.call(a,"authorNickname",{hash:{}})}s+=p(l)+"</a>\n        </div>\n        "
return s}function g(a,e){return" ellipsis"}function y(a,e){var s="",l
s+="\n        <div>\n            "
o=i["_"]
l=o||a["_"]
h=c.program(7,b,e)
h.hash={}
h.fn=h
h.inverse=c.noop
if(o&&typeof l===f){l=l.call(a,h)}else{l=m.call(a,l,h)}if(l||l===0){s+=l}s+='\n            <time class="timeago" datetime="'
o=i.created
l=o||a.created
if(typeof l===f){l=l.call(a,{hash:{}})}else if(l===d){l=u.call(a,"created",{hash:{}})}s+=p(l)+'">\n                '
o=i.created
l=o||a.created
if(typeof l===f){l=l.call(a,{hash:{}})}else if(l===d){l=u.call(a,"created",{hash:{}})}s+=p(l)+"</time>\n        </div>\n        "
return s}function b(a,e){return"Updated"}t+='<div class="fork span1">\n    <a href="'
o=i.url
n=o||e.url
if(typeof n===f){n=n.call(e,{hash:{}})}else if(n===d){n=u.call(e,"url",{hash:{}})}t+=p(n)+'"><img class="fork-thumb" src="'
o=i.thumb
n=o||e.thumb
o=i.staticUrl
r=o||e.staticUrl
if(typeof r===f){n=r.call(e,n,{hash:{}})}else if(r===d){n=u.call(e,"staticUrl",n,{hash:{}})}else{n=r}t+=p(n)+'" /></a>\n    <div class="fork-info">\n        <div><a href="'
o=i.url
n=o||e.url
if(typeof n===f){n=n.call(e,{hash:{}})}else if(n===d){n=u.call(e,"url",{hash:{}})}t+=p(n)+'" class="fork-info-title'
o=i.wide
n=o||e.wide
r=i.unless
h=c.program(1,v,l)
h.hash={}
h.fn=h
h.inverse=c.noop
n=r.call(e,n,h)
if(n||n===0){t+=n}t+='">'
o=i.translatedTitle
n=o||e.translatedTitle
if(typeof n===f){n=n.call(e,{hash:{}})}else if(n===d){n=u.call(e,"translatedTitle",{hash:{}})}t+=p(n)+"</a></div>\n        "
o=i.hideAuthorName
n=o||e.hideAuthorName
r=i.unless
h=c.program(3,k,l)
h.hash={}
h.fn=h
h.inverse=c.noop
n=r.call(e,n,h)
if(n||n===0){t+=n}t+="\n        "
o=i.showDate
n=o||e.showDate
r=i["if"]
h=c.program(6,y,l)
h.hash={}
h.fn=h
h.inverse=c.noop
n=r.call(e,n,h)
if(n||n===0){t+=n}t+="\n        <div>\n            "
n=e
n=c.invokePartial(s["discussion_discussion-meta"],"discussion_discussion-meta",n,i,s)
if(n||n===0){t+=n}t+="\n        </div>\n    </div>\n</div>\n"
return t})
function wrapped_template(a,e){return absoluteLinks.makeHtmlLinksSafe(template(a,e))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/sorts.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,s,a,l,n){a=a||e.helpers
var t="",i,r,o,h,c=this,f="function",p=a.helperMissing,u=void 0,v=this.escapeExpression,d=a.blockHelperMissing
function m(e,s){var l="",n,t
l+='\n    <span class="top-sort discussion-list-sort pure-hidden-xs">\n    '
o=a.sorts
n=o||e.sorts
t=a.each
h=c.program(2,b,s)
h.hash={}
h.fn=h
h.inverse=c.noop
n=t.call(e,n,h)
if(n||n===0){l+=n}l+="\n    </span>\n"
return l}function b(e,s){var l="",n,t
l+='\n        <a data-value="'
n=e.value
if(typeof n===f){n=n.call(e,{hash:{}})}else if(n===u){n=p.call(e,"this.value",{hash:{}})}l+=v(n)+'"\n            '
n=e.isDefault
t=a["if"]
h=c.program(3,y,s)
h.hash={}
h.fn=h
h.inverse=c.noop
n=t.call(e,n,h)
if(n||n===0){l+=n}l+='\n            title="'
n=e.title
if(typeof n===f){n=n.call(e,{hash:{}})}else if(n===u){n=p.call(e,"this.title",{hash:{}})}l+=v(n)+'"\n            aria-label="'
n=e.title
if(typeof n===f){n=n.call(e,{hash:{}})}else if(n===u){n=p.call(e,"this.title",{hash:{}})}l+=v(n)+'"\n            href="javascript:void(0);">'
n=e.name
if(typeof n===f){n=n.call(e,{hash:{}})}else if(n===u){n=p.call(e,"this.name",{hash:{}})}l+=v(n)+"</a>\n    "
return l}function y(e,s){return'class="selected"'}function g(e,s){var l="",n,t
l+='\n    <span class="filterbar-dropdown-inner-container subject-sort discussion-list-sort pure-hidden-xs">\n        <span>'
o=a["_"]
n=o||e["_"]
h=c.program(6,j,s)
h.hash={}
h.fn=h
h.inverse=c.noop
if(o&&typeof n===f){n=n.call(e,h)}else{n=d.call(e,n,h)}if(n||n===0){l+=n}l+='</span>\n        <span class="filterbar-mock-dropdown">\n            <span class="filterbar-mock-selected">'
o=a["_"]
n=o||e["_"]
h=c.program(8,k,s)
h.hash={}
h.fn=h
h.inverse=c.noop
if(o&&typeof n===f){n=n.call(e,h)}else{n=d.call(e,n,h)}if(n||n===0){l+=n}l+='</span>\n            <i class="icon-chevron-down" />\n        </span>\n\n        <select name="subjects" class="filterbar-dropdown">\n        '
o=a.subjectSorts
n=o||e.subjectSorts
t=a.each
h=c.program(10,w,s)
h.hash={}
h.fn=h
h.inverse=c.noop
n=t.call(e,n,h)
if(n||n===0){l+=n}l+="\n        </select>\n    </span>\n"
return l}function j(e,s){return"Show projects from: "}function k(e,s){return"All subjects"}function w(e,s){var a="",l
a+='\n            <option value="'
l=e.value
if(typeof l===f){l=l.call(e,{hash:{}})}else if(l===u){l=p.call(e,"this.value",{hash:{}})}a+=v(l)+'"\n                key="'
l=e.title
if(typeof l===f){l=l.call(e,{hash:{}})}else if(l===u){l=p.call(e,"this.title",{hash:{}})}a+=v(l)+'"\n                title="'
l=e.title
if(typeof l===f){l=l.call(e,{hash:{}})}else if(l===u){l=p.call(e,"this.title",{hash:{}})}a+=v(l)+'"\n                aria-label="'
l=e.title
if(typeof l===f){l=l.call(e,{hash:{}})}else if(l===u){l=p.call(e,"this.title",{hash:{}})}a+=v(l)+'">'
l=e.name
if(typeof l===f){l=l.call(e,{hash:{}})}else if(l===u){l=p.call(e,"this.name",{hash:{}})}a+=v(l)+"</option>\n        "
return a}o=a.sorts
i=o||s.sorts
r=a["if"]
h=c.program(1,m,n)
h.hash={}
h.fn=h
h.inverse=c.noop
i=r.call(s,i,h)
if(i||i===0){t+=i}t+="\n\n"
o=a.subjectSorts
i=o||s.subjectSorts
r=a["if"]
h=c.program(5,g,n)
h.hash={}
h.fn=h
h.inverse=c.noop
i=r.call(s,i,h)
if(i||i===0){t+=i}t+="\n"
return t})
function wrapped_template(e,s){return absoluteLinks.makeHtmlLinksSafe(template(e,s))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/formatting-tips.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(n,e,t,r,a){t=t||n.helpers
var i="",o,s,l,p=this,c="function",f=t.blockHelperMissing
function d(n,e){return"Typing this:"}function u(n,e){return"Displays this:"}function m(n,e){return"Accent your posts with *bold* or _italics_ and format `code`"}function h(n,e){return"```if (x < 0) {<br>    return;<br>}```"}function g(n,e){return"Accent your posts with <strong>bold</strong> or <i>italics</i> and format <code>code</code>"}function b(n,e){return"<code>if (x < 0) {<br>    return;<br>}</code>"}i+='<div class="formatting-tips-container" style="display:none;">\n    <div class="formatting-tips-triangle"></div>\n    <div class="formatting-tips-panel">\n        <table>\n            <tr class="discussion-guidelines-format-table-header">\n            <td>\n                '
s=t["_"]
o=s||e["_"]
l=p.program(1,d,a)
l.hash={}
l.fn=l
l.inverse=p.noop
if(s&&typeof o===c){o=o.call(e,l)}else{o=f.call(e,o,l)}if(o||o===0){i+=o}i+="\n            </td>\n            <td>\n                "
s=t["_"]
o=s||e["_"]
l=p.program(3,u,a)
l.hash={}
l.fn=l
l.inverse=p.noop
if(s&&typeof o===c){o=o.call(e,l)}else{o=f.call(e,o,l)}if(o||o===0){i+=o}i+='\n            </td>\n            </tr>\n            <tr class="discussion-guidelines-format-table">\n            <td>\n                '
s=t["_"]
o=s||e["_"]
l=p.program(5,m,a)
l.hash={}
l.fn=l
l.inverse=p.noop
if(s&&typeof o===c){o=o.call(e,l)}else{o=f.call(e,o,l)}if(o||o===0){i+=o}i+="\n                <pre>"
s=t.i18nDoNotTranslate
o=s||e.i18nDoNotTranslate
l=p.program(7,h,a)
l.hash={}
l.fn=l
l.inverse=p.noop
if(s&&typeof o===c){o=o.call(e,l)}else{o=f.call(e,o,l)}if(o||o===0){i+=o}i+="</pre>\n            </td>\n            <td>\n                "
s=t["_"]
o=s||e["_"]
l=p.program(9,g,a)
l.hash={}
l.fn=l
l.inverse=p.noop
if(s&&typeof o===c){o=o.call(e,l)}else{o=f.call(e,o,l)}if(o||o===0){i+=o}i+="\n                <pre>"
s=t.i18nDoNotTranslate
o=s||e.i18nDoNotTranslate
l=p.program(11,b,a)
l.hash={}
l.fn=l
l.inverse=p.noop
if(s&&typeof o===c){o=o.call(e,l)}else{o=f.call(e,o,l)}if(o||o===0){i+=o}i+="</pre>\n            </td>\n            </tr>\n        </table>\n    </div>\n</div>\n"
return i})
function wrapped_template(n,e){return absoluteLinks.makeHtmlLinksSafe(template(n,e))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/form-controls.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(s,n,a,e,l){a=a||s.helpers
var i="",t,o,r,c=this,p="function",f=a.helperMissing,u=void 0,h=this.escapeExpression,d=a.blockHelperMissing
function m(s,n){return"or"}function b(s,n){return"Cancel"}function g(s,n){return"Formatting tips"}i+='<div class="discussion-controls" style="display: none">\n	<span class="discussion-control float-right">\n        <input class="simple-button primary discussion-submit"\n	           type="button"\n	           value="'
o=a.label
t=o||n.label
if(typeof t===p){t=t.call(n,{hash:{}})}else if(t===u){t=f.call(n,"label",{hash:{}})}i+=h(t)+'" />\n    </span>\n    <span class="discussion-control float-right">\n        '
o=a["_"]
t=o||n["_"]
r=c.program(1,m,l)
r.hash={}
r.fn=r
r.inverse=c.noop
if(o&&typeof t===p){t=t.call(n,r)}else{t=d.call(n,t,r)}if(t||t===0){i+=t}i+='\n    </span>\n    <span class="discussion-control float-right">\n        <a href="#" class="discussion-cancel">'
o=a["_"]
t=o||n["_"]
r=c.program(3,b,l)
r.hash={}
r.fn=r
r.inverse=c.noop
if(o&&typeof t===p){t=t.call(n,r)}else{t=d.call(n,t,r)}if(t||t===0){i+=t}i+='</a>\n    </span>\n\n    <span class="discussion-control float-left">\n        <div class="formatting-tips">\n            <a href="#" class="show-formatting-tips">\n                '
o=a["_"]
t=o||n["_"]
r=c.program(5,g,l)
r.hash={}
r.fn=r
r.inverse=c.noop
if(o&&typeof t===p){t=t.call(n,r)}else{t=d.call(n,t,r)}if(t||t===0){i+=t}i+='\n            </a>\n        </div>\n    </span>\n\n    <br class="clear" />\n</div>\n'
return i})
function wrapped_template(s,n){return absoluteLinks.makeHtmlLinksSafe(template(s,n))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/mod-controls.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,n,a,r,i){a=a||e.helpers
r=r||e.partials
var t="",s,o,l,f,u=this,c="function",h=a.helperMissing,p=void 0,g=this.escapeExpression,v=a.blockHelperMissing
function m(e,n){var r="",i,t
r+="\n        "
l=a.flags
i=l||e.flags
t=a["if"]
f=u.program(2,d,n)
f.hash={}
f.fn=f
f.inverse=u.program(17,B,n)
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="\n    "
return r}function d(e,n){var i="",t,s
i+="\n            "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+="\n            "
i+="\n            "
i+="\n            "
i+='\n            <a href="javascript:void(0);" data-flags="'
l=a.flags
t=l||e.flags
s=a.each
f=u.program(3,_,n)
f.hash={}
f.fn=f
f.inverse=u.noop
t=s.call(e,t,f)
if(t||t===0){i+=t}i+='" '
l=a.flaggedBy
t=l||e.flaggedBy
s=a["if"]
f=u.program(5,y,n)
f.hash={}
f.fn=f
f.inverse=u.noop
t=s.call(e,t,f)
if(t||t===0){i+=t}i+=' class="clear-flags call-to-action">'
l=a.inQueue
t=l||e.inQueue
s=a["if"]
f=u.program(7,k,n)
f.hash={}
f.fn=f
f.inverse=u.program(12,C,n)
t=s.call(e,t,f)
if(t||t===0){i+=t}i+="</a>\n        "
return i}function _(e,n){var a="",r
r=e
if(typeof r===c){r=r.call(e,{hash:{}})}else if(r===p){r=h.call(e,"this",{hash:{}})}a+=g(r)+","
return a}function y(e,n){var r="",i
r+='data-flagged-by="'
l=a.flaggedBy
i=l||e.flaggedBy
if(typeof i===c){i=i.call(e,{hash:{}})}else if(i===p){i=h.call(e,"flaggedBy",{hash:{}})}r+=g(i)+'"'
return r}function k(e,n){var r,i
l=a.numberOfFlags
r=l||e.numberOfFlags
l=a.ngettext
i=l||e.ngettext
f=u.program(8,Q,n)
f.hash={}
f.fn=f
f.inverse=u.program(10,b,n)
if(l&&typeof i===c){r=i.call(e,r,f)}else{r=v.call(e,i,r,f)}if(r||r===0){return r}else{return""}}function Q(e,n){return"(C)lear  Flag"}function b(e,n){var r="",i
r+="(C)lear "
l=a.numberOfFlags
i=l||e.numberOfFlags
if(typeof i===c){i=i.call(e,{hash:{}})}else if(i===p){i=h.call(e,"numberOfFlags",{hash:{}})}r+=g(i)+" Flags"
return r}function C(e,n){var r,i
l=a.numberOfFlags
r=l||e.numberOfFlags
l=a.ngettext
i=l||e.ngettext
f=u.program(13,F,n)
f.hash={}
f.fn=f
f.inverse=u.program(15,j,n)
if(l&&typeof i===c){r=i.call(e,r,f)}else{r=v.call(e,i,r,f)}if(r||r===0){return r}else{return""}}function F(e,n){return"Clear  Flag"}function j(e,n){var r="",i
r+="Clear "
l=a.numberOfFlags
i=l||e.numberOfFlags
if(typeof i===c){i=i.call(e,{hash:{}})}else if(i===p){i=h.call(e,"numberOfFlags",{hash:{}})}r+=g(i)+" Flags"
return r}function B(e,n){var r="",i,t
r+="\n            "
l=a.inQueue
i=l||e.inQueue
t=a["if"]
f=u.program(18,P,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="\n        "
return r}function P(e,n){var i="",t
i+="\n                "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+='\n                <a href="javascript:void(0);" class="approve">'
l=a["_"]
t=l||e["_"]
f=u.program(19,w,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof t===c){t=t.call(e,f)}else{t=v.call(e,t,f)}if(t||t===0){i+=t}i+="</a>\n            "
return i}function w(e,n){return"(A)pprove"}function O(e,n){var i="",t
i+="\n        "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+='\n        <a href="javascript:void(0);" title="'
l=a["_"]
t=l||e["_"]
f=u.program(22,S,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof t===c){t=t.call(e,f)}else{t=v.call(e,t,f)}if(t||t===0){i+=t}i+='" class="skip">'
l=a["_"]
t=l||e["_"]
f=u.program(24,x,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof t===c){t=t.call(e,f)}else{t=v.call(e,t,f)}if(t||t===0){i+=t}i+="</a>\n    "
return i}function S(e,n){return"Skip taking an action on this post right now."}function x(e,n){return"(S)kip"}function A(e,n){var r="",i,t
r+="\n    "
l=a.isScratchpad
i=l||e.isScratchpad
t=a.unless
f=u.program(27,D,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="\n    "
return r}function D(e,n){var i="",t,s
i+="\n        "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+="\n        "
l=a.isComment
t=l||e.isComment
s=a["if"]
f=u.program(28,H,n)
f.hash={}
f.fn=f
f.inverse=u.program(37,U,n)
t=s.call(e,t,f)
if(t||t===0){i+=t}i+="\n\n        "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+="\n\n        "
l=a.isQuestion
t=l||e.isQuestion
s=a["if"]
f=u.program(46,R,n)
f.hash={}
f.fn=f
f.inverse=u.noop
t=s.call(e,t,f)
if(t||t===0){i+=t}i+='\n\n        <a href="javascript:void(0);" class="edit">'
l=a.inQueue
t=l||e.inQueue
s=a["if"]
f=u.program(48,T,n)
f.hash={}
f.fn=f
f.inverse=u.program(51,W,n)
t=s.call(e,t,f)
if(t||t===0){i+=t}i+="</a>\n    "
return i}function H(e,n){var r="",i,t
r+='\n            <a href="javascript:void(0);" class="change-type '
l=a.highlightChangeButton
i=l||e.highlightChangeButton
t=a["if"]
f=u.program(29,E,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+='" data-target-type="question">'
l=a.inQueue
i=l||e.inQueue
t=a["if"]
f=u.program(31,q,n)
f.hash={}
f.fn=f
f.inverse=u.program(34,L,n)
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="</a>\n        "
return r}function E(e,n){return"call-to-action"}function q(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(32,M,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function M(e,n){return"Change to (Q)uestion"}function L(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(35,N,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function N(e,n){return"Change to question"}function U(e,n){var r="",i,t
r+='\n            <a href="javascript:void(0);" class="change-type '
l=a.highlightChangeButton
i=l||e.highlightChangeButton
t=a["if"]
f=u.program(38,z,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+='" data-target-type="comment">'
l=a.inQueue
i=l||e.inQueue
t=a["if"]
f=u.program(40,G,n)
f.hash={}
f.fn=f
f.inverse=u.program(43,J,n)
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="</a>\n        "
return r}function z(e,n){return"call-to-action"}function G(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(41,I,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function I(e,n){return"Change to (F)eedback"}function J(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(44,K,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function K(e,n){return"Change to feedback"}function R(e,n){var i="",t
i+="\n            "
t=e
t=u.invokePartial(r["discussion_answer-notification-link"],"discussion_answer-notification-link",t,a,r)
if(t||t===0){i+=t}i+="\n            "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+="\n        "
return i}function T(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(49,V,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function V(e,n){return"(E)dit"}function W(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(52,X,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function X(e,n){return"Edit"}function Y(e,n){var i="",t,s
i+="\n        "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+="\n        "
l=a.deleted
t=l||e.deleted
s=a["if"]
f=u.program(55,Z,n)
f.hash={}
f.fn=f
f.inverse=u.program(58,nn,n)
t=s.call(e,t,f)
if(t||t===0){i+=t}i+="\n    "
return i}function Z(e,n){var r="",i
r+='\n            <a href="javascript:void(0);" class="undelete">'
l=a["_"]
i=l||e["_"]
f=u.program(56,en,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof i===c){i=i.call(e,f)}else{i=v.call(e,i,f)}if(i||i===0){r+=i}r+="</a>\n        "
return r}function en(e,n){return"Undelete"}function nn(e,n){var r="",i,t
r+='\n            <a href="javascript:void(0);" class="delete '
l=a.highlightDeleteButton
i=l||e.highlightDeleteButton
t=a["if"]
f=u.program(59,an,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+='">'
l=a.inQueue
i=l||e.inQueue
t=a["if"]
f=u.program(61,rn,n)
f.hash={}
f.fn=f
f.inverse=u.program(64,sn,n)
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="</a>\n        "
return r}function an(e,n){return"call-to-action"}function rn(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(62,tn,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function tn(e,n){return"(D)elete"}function sn(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(65,on,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function on(e,n){return"Delete"}function ln(e,n){var r="",i,t
r+="\n        "
l=a.isScratchpad
i=l||e.isScratchpad
t=a["if"]
f=u.program(68,fn,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="\n    "
return r}function fn(e,n){var i="",t,s
i+="\n            "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+="\n            "
l=a.hideFromHotlist
t=l||e.hideFromHotlist
s=a["if"]
f=u.program(69,un,n)
f.hash={}
f.fn=f
f.inverse=u.program(72,hn,n)
t=s.call(e,t,f)
if(t||t===0){i+=t}i+="\n        "
return i}function un(e,n){var r="",i
r+='\n            <a href="javascript:void(0);" class="unhide-hotlist">'
l=a["_"]
i=l||e["_"]
f=u.program(70,cn,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof i===c){i=i.call(e,f)}else{i=v.call(e,i,f)}if(i||i===0){r+=i}r+="</a>\n            "
return r}function cn(e,n){return"Undo hide from hotlist"}function hn(e,n){var r="",i
r+='\n            <a href="javascript:void(0);" class="hide-hotlist">'
l=a["_"]
i=l||e["_"]
f=u.program(73,pn,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof i===c){i=i.call(e,f)}else{i=v.call(e,i,f)}if(i||i===0){r+=i}r+="</a>\n            "
return r}function pn(e,n){return"Hide from hotlist"}t+='\n<span class="mod-tools" data-key="'
l=a.key
s=l||n.key
if(typeof s===c){s=s.call(n,{hash:{}})}else if(s===p){s=h.call(n,"key",{hash:{}})}t+=g(s)+'" data-is-author="'
l=a.showAuthorControls
s=l||n.showAuthorControls
if(typeof s===c){s=s.call(n,{hash:{}})}else if(s===p){s=h.call(n,"showAuthorControls",{hash:{}})}t+=g(s)+'" data-in-queue="'
l=a.inQueue
s=l||n.inQueue
if(typeof s===c){s=s.call(n,{hash:{}})}else if(s===p){s=h.call(n,"inQueue",{hash:{}})}t+=g(s)+'">\n\n    '
l=a.definitelyNotSpam
s=l||n.definitelyNotSpam
o=a.unless
f=u.program(1,m,i)
f.hash={}
f.fn=f
f.inverse=u.noop
s=o.call(n,s,f)
if(s||s===0){t+=s}t+="\n\n    "
l=a.inQueue
s=l||n.inQueue
o=a["if"]
f=u.program(21,O,i)
f.hash={}
f.fn=f
f.inverse=u.noop
s=o.call(n,s,f)
if(s||s===0){t+=s}t+="\n\n    "
l=a.isProjectEvalAnswer
s=l||n.isProjectEvalAnswer
o=a.unless
f=u.program(26,A,i)
f.hash={}
f.fn=f
f.inverse=u.noop
s=o.call(n,s,f)
if(s||s===0){t+=s}t+="\n\n    "
l=a.hideModDelete
s=l||n.hideModDelete
o=a.unless
f=u.program(54,Y,i)
f.hash={}
f.fn=f
f.inverse=u.noop
s=o.call(n,s,f)
if(s||s===0){t+=s}t+="\n\n    "
l=a.inQueue
s=l||n.inQueue
o=a["if"]
f=u.program(67,ln,i)
f.hash={}
f.fn=f
f.inverse=u.noop
s=o.call(n,s,f)
if(s||s===0){t+=s}t+="\n\n</span>\n"
return t})
function wrapped_template(e,n){return absoluteLinks.makeHtmlLinksSafe(template(e,n))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/moderation.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/qTip2/jquery.qtip.js")
var $=require("jquery")
var _=require("underscore")
var i18n=require("../shared-package/i18n.js")
var Discussion=require("./discussion.js")
var DiscussionReplies=require("./discussion-replies.js")
var KA=require("../shared-package/ka.js")
var Moderation={ModAction:{CLEAR_FLAGS:"clearflags",CHANGE_TYPE:"changetype",UNDELETE:"undelete"},LOW_QUALITY_FIRST:1,LOWEST_VOTES_FIRST:2,init:function(){var e=require("./flag.js")
e.init()
$(document).on("click",".mod-tools .mute",Moderation.muteEntity).on("click",".mod-tools .edit",Moderation.editEntity).on("click",".mod-tools .delete",Moderation.deleteEntity).on("click",".mod-tools .change-type",Moderation.changeEntityType).on("click",".mod-tools .clear-flags",Moderation.clearFlags).on("mouseenter",".mod-tools .clear-flags",this.showFlagsHovercard).on("click",".mod-tools .approve",Moderation.clearFlags).on("click",".mod-tools .undelete",Moderation.undelete).on("click",".mod-tools .skip",Moderation.skip).on("click",".mod-tools .hide-hotlist",{hide_from_hotlist:true},Moderation.hideHotlist).on("click",".mod-tools .unhide-hotlist",{hide_from_hotlist:false},Moderation.hideHotlist)},getEntityKey_:function(e){return e.closest(".mod-tools").data("key")},muteEntity:function(){var e=$(this),t=Moderation.getEntityKey_(e)
if(!t){return}var i=e.data("notify")
var a=""
var o
if(i){a=i18n._("Turn on answer notifications")
o=false}else{a=i18n._("Turn off answer notifications")
o=true}$.ajax({type:o?"PUT":"DELETE",url:"/api/internal/feedback/"+t+"/notifications"})
e.text(a).data("notify",!i)
Discussion.showNotificationTogglePopup(t,o)
return false},deleteEntity:function(){var e=$(this),t=e.closest(".mod-tools"),i=Moderation.getEntityKey_(e),a=t.data("isAuthor"),o=t.data("inQueue"),s=KA.getUserProfile().get("isModerator")
if(!i){return}var n
if(a){n=confirm(i18n._("Are you sure you want to delete this?"))}else{n=s}if(n){if(a||o){Discussion.remove(e)
var r=Discussion.getParentType(e)
if(r==="reply"){var d=Discussion.getParent(Discussion.getParent(t)),l=Discussion.getKey(d)
DiscussionReplies.decrementReplyCount(l)}else if(a&&r==="answer"){Discussion.setHasAnswered(e,false)}}else{e.text(i18n._("Undelete")).removeClass("delete").addClass("undelete").closest(".discussion-item").addClass("deleted")}$.ajax({type:"DELETE",url:"/api/internal/feedback/"+i+"?casing=camel",dataType:"json"})}return false},editEntity:function(){Discussion.edit(this)
return false},changeEntityType:function(e){var t=$(this),i=Moderation.getEntityKey_(t),a=e&&e["targetType"]||t.data("targetType"),o={type:a}
if(!i||!a){return}var s=a
if(a==="comment"){s="feedback"}Moderation.showMessage(t,i18n._("Changed to %(targetTypeName)s",{targetTypeName:s}))
Discussion.remove(t)
$.ajax({type:"PUT",url:"/api/internal/feedback/"+i+"/"+Moderation.ModAction.CHANGE_TYPE+"?casing=camel",contentType:"application/json",data:JSON.stringify(o),dataType:"json"})},clearFlags:function(){var e=$(this),t=e.closest(".mod-tools").data("inQueue"),i=Moderation.getEntityKey_(e),a="/api/internal/feedback/"+i+"/"+Moderation.ModAction.CLEAR_FLAGS+"?casing=camel"
if(!i){return false}Moderation.showMessage(e,i18n._("Cleared flags"))
if(t){Discussion.remove(e)}$.ajax({type:"PUT",url:a,dataType:"json"})},undelete:function(){var e=$(this),t=Moderation.getEntityKey_(e),i="/api/internal/feedback/"+t+"/"+Moderation.ModAction.UNDELETE+"?casing=camel"
if(!t){return false}e.text(i18n._("Delete")).removeClass("undelete").addClass("delete").parents(".discussion-item").removeClass("deleted")
$.ajax({type:"PUT",url:i,dataType:"json"})},hideHotlist:function(e){var t=$(this),i=t.closest(".mod-tools"),a=Moderation.getEntityKey_(t),o=i.closest("#"+a).attr("data-id"),s="/api/internal/scratchpads/"+o
if(!a||!o){return false}if(e.data.hide_from_hotlist){t.text(i18n._("Undo hide from hotlist")).removeClass("hide-hotlist").addClass("unhide-hotlist")}else{t.text(i18n._("Hide from hotlist")).removeClass("unhide-hotlist").addClass("hide-hotlist")}$.ajax({type:"PATCH",url:s,dataType:"json",contentType:"application/json",data:JSON.stringify(e.data),success:function(e){Moderation.clearFlags.apply(this)}.bind(this)})},showMessage:function(e,t){e.text(t).addClass("action-complete").parent().addClass("mod-action-complete")},skip:function(){Discussion.remove($(this))},showFlagsHovercard:function(e){var t=require("./queue.js")
var i=$(e.target)
if(!i.data("has-tip")){var a=require("./flags-hovercard.handlebars")
var o=i.data("flaggedBy").split(",")
var s=i.data("flags").split(",")
var n=[]
var r=i.parent()&&i.parent().data("key"),d=t.discussionList_&&t.discussionList_.data
if(r&&d){var l=_(d).find(function(e){return e.key===r})
if(l){o=l.flaggedBy
s=l.flags}}_.each(o,function(e,t){n.push({user:e,type:s[t]})})
var c
var u
var f=450
var p=i.offset().left
if(p+f>$(window).width()&&p>f){c=a({arrowOnRight:true,flags:n})
u={my:"top right",at:"bottom right"}}else{c=a({flags:n})
u={my:"top left",at:"bottom left"}}i.qtip({content:{text:c},style:{classes:"custom-override flags-hovercard"},hide:{delay:100,fixed:true},position:u})
i.data("has-tip",true)}i.qtip("show")}}
module.exports=Moderation
});
KAdefine("javascript/discussion-package/queue.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var Discussion=require("./discussion.js")
var DiscussionList=require("./discussion-list.js")
var Moderation=require("./moderation.js")
var ModerationQueue={}
ModerationQueue.init=function(){_.bindAll(this,"show_","autoLoad_","reset_","bindEvents_","fetchSort_","fetchType_","transformDataBeforeRender")
Discussion.init({page:0,which:"moderation-queue",container:$(".mod-queue")})
this.bindEvents_()
this.reset_()
this.show_()}
ModerationQueue.reset_=function(e,t){$(".mod-queue").html("")
this.type_=e||"question"
this.sort_=t||Moderation.LOW_QUALITY_FIRST}
ModerationQueue.bindEvents_=function(){$(".mod-queue-header").on("click",".mod-queue-type",this.fetchType_).on("click",".mod-queue-sort",this.fetchSort_)
$(document).on("click",".mod-tools a",this.autoLoad_)
$(document).keypress(this.onHotkey_)}
ModerationQueue.onHotkey_=function(e){if(!$(document.activeElement).is("body")){return}var t
var s={}
switch(e.which){case 97:t=Moderation.clearFlags
break
case 99:t=Moderation.clearFlags
break
case 100:t=Moderation.deleteEntity
break
case 101:Discussion.edit($(".discussion-list .mod-tools").first())
return
case 102:t=Moderation.changeEntityType
s["targetType"]="comment"
break
case 113:t=Moderation.changeEntityType
s["targetType"]="question"
break
case 115:t=Moderation.skip
break}if(t){ModerationQueue.autoLoad_()
t.call($(".discussion-list .mod-tools").first(),s)}}
ModerationQueue.fetchSort_=function(e){var t=$(e.target)
var s=t.parent()
s.addClass("selected").siblings().removeClass("selected")
this.reset_(this.type_,t.data("value"))
this.show_()}
ModerationQueue.fetchType_=function(e){var t=$(e.target),s=t.parent(),i=t.data("value")
s.addClass("selected").siblings().removeClass("selected")
this.reset_(i,this.sort_)
this.show_()
$("#modpanel .mod-queue").toggleClass("wide",i==="project")}
ModerationQueue.show_=function(){var e
if(this.type_==="question"||this.type_==="projecthelp"){e=require("../discussion-package/thread.handlebars")}else if(this.type_==="answer"||this.type_==="projectevalanswer"){e=require("../discussion-package/answer.handlebars")}else if(this.type_==="comment"||this.type_==="reply"){e=require("../discussion-package/comment.handlebars")}else if(this.type_==="project"){e=require("../discussion-package/project.handlebars")}else{throw new Error("No item template find for type: "+this.type_)}this.discussionList_=new DiscussionList({hideHeader:true,requestURL:"/api/internal/moderation/feedback",itemKey:"feedback",itemTemplate:e,containerSelector:".mod-queue",page:0,sortValue:this.sort_,params:{casing:"camel",type:this.type_,offset:this.offset_},onInitialFetch:this.onInitialFetch_,preRenderTransformData:this.transformDataBeforeRender})}
ModerationQueue.onInitialFetch_=function(e){var t=$(".mod-happy-message")
if(e.length===0){t.show()}else{t.hide()}}
ModerationQueue.transformDataBeforeRender=function(e){_.each(e,function(e){e=Discussion.transformFeedback(e)
e.inQueue=true
e.showModControls=true})
return e}
ModerationQueue.autoLoad_=function(){var e=5
if(this.discussionList_){if($(".mod-queue .discussion-item").length<=e){this.discussionList_.fetchMore()}}}
module.exports=ModerationQueue
});
KAdefine("javascript/discussion-package/flag.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-modal.js")
var $=require("jquery")
var i18n=require("../shared-package/i18n.js")
var Discussion=require("./discussion.js")
var DiscussionNote=require("./discussion-note.js")
var Moderation=require("./moderation.js")
var ModerationFlag={init:function(){$(document).on("click",".flag-show",ModerationFlag.showControls_).on("click","#flag-modal .flag-as:not(.disabled)",ModerationFlag.flag_).on("input propertychange","#flag-modal textarea[name=justification]",ModerationFlag.enableSubmit_)},showControls_:function(){var a=$(this),e=a.parents(".flag-tools").data("key"),s=Discussion.getParent(this),t=Discussion.getParentType(this)
if(DiscussionNote.checkAndPromptLogin(this,"flag")){return false}var i=275
var r=$(".discussion-content",s).text()
if(r.length>i){r=r.substring(0,i)+"..."}var o=a.hasClass("scratchpad-flagging")?require("./scratchpad-flag-modal.handlebars"):require("./flag-modal.handlebars")
var n=""
var l=false
if(a.hasClass("scratchpad-flagging")){var d=require.ifLoadedLegacy("../scratchpads-package/scratchpad-ui.js")
if(d){n=d.ScratchpadUI.scratchpad.get("guidelinesUrlPath")
l=d.ScratchpadUI.topic.slug==="computer-programming"}}var c=o({feedback:r,isQuestion:t==="question",isAnswer:t==="answer",isComment:t==="comment",canBeChanged:t==="question"||t==="comment",translatedFeedbackType:Discussion._translateFeedbackType(t),guidelinesUrlPath:n,isComputerProgramming:l})
if($("#flag-modal").length){$("#flag-modal").replaceWith(c)}else{$("body").append(c)}var g=$("#flag-modal")
g.data("key",e).modal({backdrop:true,show:true,keyboard:true})
return false},flag_:function(){var a=$(this),e=a.parents("#flag-modal"),s=a.data("flag")||e.find("[name=flag]").val(),t=e.data("key"),i=e.find("textarea[name=justification]")
if(!s||!t){return false}var r={flag:s,entity_key:t}
if(i.length){r["justification"]=i.val()}ModerationFlag.postAndNotify_(e,r)},enableSubmit_:function(){var a=$(this),e=a.siblings(".flag-row").find(".simple-button").removeClass("disabled")
e.toggleClass("disabled",!a.val())},postAndNotify_:function(a,e){$.post("/api/internal/discussions/flagentity",e)
var s=$(".flag-tools[data-key="+e["entity_key"]+"]"),t=$(".flag-show",s)
Moderation.showMessage(t,i18n._("Flagged"))
a.modal("hide")
return false}}
module.exports=ModerationFlag
});
KAdefine("javascript/discussion-package/flags-hovercard.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,a,s,n,l){s=s||e.helpers
var r="",i,t,c,o,h=this,p="function",f=s.helperMissing,u=void 0,d=this.escapeExpression,v=s.blockHelperMissing
function g(e,a){return"right"}function m(e,a){return"Flags:"}function y(e,a){var n="",l
n+='\n                <li class="sample-content-link">\n                    <a href="/devadmin/users?userId='
c=s.user
l=c||e.user
if(typeof l===p){l=l.call(e,{hash:{}})}else if(l===u){l=f.call(e,"user",{hash:{}})}n+=d(l)+'">'
c=s.user
l=c||e.user
if(typeof l===p){l=l.call(e,{hash:{}})}else if(l===u){l=f.call(e,"user",{hash:{}})}n+=d(l)+'</a>\n                    - <span class="flag-type">'
c=s.type
l=c||e.type
if(typeof l===p){l=l.call(e,{hash:{}})}else if(l===u){l=f.call(e,"type",{hash:{}})}n+=d(l)+"</span>\n                </li>\n            "
return n}r+='<div class="hover-card-container">\n    <div class="hover-card-triangle '
c=s.arrowOnRight
i=c||a.arrowOnRight
t=s["if"]
o=h.program(1,g,l)
o.hash={}
o.fn=o
o.inverse=h.noop
i=t.call(a,i,o)
if(i||i===0){r+=i}r+='"></div>\n    <div class="hover-card-content-container vertical-shadow">\n        <div class="hover-card-content clearfix">\n            <h4 class="pulls">\n                '
c=s["_"]
i=c||a["_"]
o=h.program(3,m,l)
o.hash={}
o.fn=o
o.inverse=h.noop
if(c&&typeof i===p){i=i.call(a,o)}else{i=v.call(a,i,o)}if(i||i===0){r+=i}r+='\n            </h4>\n            <ul class="flagged-by-users">\n            '
c=s.flags
i=c||a.flags
t=s.each
o=h.program(5,y,l)
o.hash={}
o.fn=o
o.inverse=h.noop
i=t.call(a,i,o)
if(i||i===0){r+=i}r+="\n            </ul>\n        </div>\n    </div>\n</div>\n"
return r})
function wrapped_template(e,a){return absoluteLinks.makeHtmlLinksSafe(template(e,a))}module.exports=wrapped_template
});
KAdefine("javascript/discussion-package/hellban-reason-dialog.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,a,s,n,l){s=s||e.helpers
var o="",t,i,r,d,p=this,f="function",h=s.blockHelperMissing,m=s.helperMissing,c=void 0,u=this.escapeExpression
function v(e,a){return"The user was banned for the following reason:"}o+='<div class="notification-dialog modal fade hide" style="display: none;">\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h2>'
r=s["_"]
t=r||a["_"]
d=p.program(1,v,l)
d.hash={}
d.fn=d
d.inverse=p.noop
if(r&&typeof t===f){t=t.call(a,d)}else{t=h.call(a,t,d)}if(t||t===0){o+=t}o+='</h2>\n    </div>\n    <div class="modal-body">\n        '
r=s.reason
t=r||a.reason
r=s.formatContent
i=r||a.formatContent
if(typeof i===f){t=i.call(a,t,{hash:{}})}else if(i===c){t=m.call(a,"formatContent",t,{hash:{}})}else{t=i}o+=u(t)+'\n    </div>\n    <div class="modal-footer">\n        '
r=s.timeago
t=r||a.timeago
if(typeof t===f){t=t.call(a,{hash:{}})}else if(t===c){t=m.call(a,"timeago",{hash:{}})}o+=u(t)+"\n    </div>\n</div>\n"
return o})
function wrapped_template(e,a){return absoluteLinks.makeHtmlLinksSafe(template(e,a))}module.exports=wrapped_template
});
; KAdefine.updatePathToPackageMap({"javascript/clarifications-package/models.jsx": "clarifications.js", "javascript/clarifications-package/official.jsx": "clarifications.js", "javascript/projectfeedback-package/projectfeedback-form.jsx": "projectfeedback.js", "javascript/scratchpad-base-package/scratchpads.js": "scratchpad-base.js", "javascript/scratchpads-package/scratchpad-ui.js": "scratchpads.js", "javascript/video-legacy-package/modalvideo.js": "video-legacy.js"});
