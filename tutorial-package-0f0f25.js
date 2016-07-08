KAdefine("third_party/javascript-khansrc/jquery-hoverflow/jquery.hoverflow.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
(function($){$.fn.hoverFlow=function(e,t,n,i,o){if($.inArray(e,["mouseover","mouseenter","mouseout","mouseleave"])==-1){return this}var r=typeof n==="object"?n:{complete:o||!o&&i||$.isFunction(n)&&n,duration:n,easing:o&&i||i&&!$.isFunction(i)&&i}
r.queue=false
var u=r.complete
r.complete=function(){$(this).dequeue()
if($.isFunction(u)){u.call(this)}}
return this.each(function(){var n=$(this)
if(e=="mouseover"||e=="mouseenter"){n.data("jQuery.hoverFlow",true)}else{n.removeData("jQuery.hoverFlow")}n.queue(function(){var i=e=="mouseover"||e=="mouseenter"?n.data("jQuery.hoverFlow")!==undefined:n.data("jQuery.hoverFlow")===undefined
if(i){n.animate(t,r)}else{n.queue([])}})})}})(jQuery);(function($){$.fn.hoverIntent=function(e,t){var n={sensitivity:7,directionalSensitivityStop:0,directionalSensitivityX:0,directionalSensitivityY:0,interval:100,timeout:0}
n=$.extend(n,t?{over:e,out:t}:e)
var i=0,o=0,r,u,a=0,v=0
var s=function(e){var t=e.pageX-i
var n=e.pageY-o
if((a>0&&t>0||a<0&&t<0)&&(a>0&&t>0||a<0&&t<0)){a=a*.75+t*.25
v=v*.75+n*.25}else{a=t
v=n}i=e.pageX
o=e.pageY}
var l=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t)
if(Math.abs(r-i)+Math.abs(u-o)<n.sensitivity){t.hoverIntent_s=1
return n.over.apply(t,[e])}else{r=i
u=o
t.hoverIntent_t=setTimeout(function(){l(e,t)},n.interval)}}
var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t)
if(n.directionalSensitivityX>0&&a>n.directionalSensitivityX||n.directionalSensitivityX<0&&a<-n.directionalSensitivityX||n.directionalSensitivityY>0&&v>n.directionalSensitivityY||n.directionalSensitivityY<0&&v<-n.directionalSensitivityY){r=i
u=o
a*=.25
v*=.25
t.hoverIntent_t=setTimeout(function(){c(e,t)},n.timeout)}else{t.hoverIntent_s=0
$(t).unbind("mousemove",s)
t.mouseMoveBound=false
return n.out.apply(t,[e])}}
var f=function(e){var t=jQuery.extend({},e)
var i=this
if(i.hoverIntent_t){i.hoverIntent_t=clearTimeout(i.hoverIntent_t)}if(e.type=="mouseenter"){if(i.hoverIntent_s!=1){if(!i.mouseMoveBound){$(i).bind("mousemove",s)
i.mouseMoveBound=true}r=t.pageX
u=t.pageY
i.hoverIntent_t=setTimeout(function(){l(t,i)},n.interval)}}else{if(i.hoverIntent_s==1){r=t.pageX
u=t.pageY
i.hoverIntent_t=setTimeout(function(){c(t,i)},n.timeout)}}}
return this.bind("mouseenter",f).bind("mouseleave",f)}})(jQuery)
});
KAdefine("javascript/tutorial-package/tutorial-description.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,t,a,s,l){a=a||e.helpers
var n="",i,r,p,o,c=this,d="function",h=a.helperMissing,m=void 0,f=this.escapeExpression
function u(e,t){var s="",l
s+='\n    <span class="long-description" itemprop="description">'
p=a.translatedDescriptionHtml
l=p||e.translatedDescriptionHtml
if(typeof l===d){l=l.call(e,{hash:{}})}else if(l===m){l=h.call(e,"translatedDescriptionHtml",{hash:{}})}if(l||l===0){s+=l}s+="</span>\n    "
return s}n+='<h2 class="title-header">\n    <span itemprop="name" class="title desktop-only">'
p=a.translatedTitle
i=p||t.translatedTitle
if(typeof i===d){i=i.call(t,{hash:{}})}else if(i===m){i=h.call(t,"translatedTitle",{hash:{}})}n+=f(i)+"</span>\n    "
p=a.translatedDescriptionHtml
i=p||t.translatedDescriptionHtml
r=a["if"]
o=c.program(1,u,l)
o.hash={}
o.fn=o
o.inverse=c.noop
i=r.call(t,i,o)
if(i||i===0){n+=i}n+="\n</h2>\n"
return n})
function wrapped_template(e,t){return absoluteLinks.makeHtmlLinksSafe(template(e,t))}module.exports=wrapped_template
});
KAdefine("javascript/tutorial-package/tutorial-models.js", function(require, module, exports) {
var Backbone=require("backbone")
var createModelClasses=function(t){var e=t.extend({url:function(){var t=this.get("id")||""
return"/api/internal/dev/edit/"+this.get("contentKind").toLowerCase()+"/"+t+"?casing=camel"}})
return{Topic:t.extend({defaults:{contentKind:"Topic",title:"New Topic",slug:"new-topic",standaloneTitle:"New Topic",description:"",hide:false,tags:[],alternateSlugs:[],userAuthoredContentTypes:[],childData:[],listedLocales:[],inKnowledgeMap:false,iconSrc:"",xPos:0,yPos:0,renderType:"Tutorial",curriculumKey:"",curation:{}},url:function(){return"/api/internal/dev/edit/topic/"+(this.id||"")+"?casing=camel"},getIcon:function(){return"icon-sitemap"},getTitle:function(){return this.get("standaloneTitle")}}),Video:e.extend({defaults:{contentKind:"Video"},getIcon:function(){return"icon-facetime-video"},getTitle:function(){return this.get("title")}}),Exercise:e.extend({defaults:{contentKind:"Exercise"},getIcon:function(){return"icon-star"},getTitle:function(){return this.get("prettyDisplayName")}}),Article:e.extend({defaults:{contentKind:"Article",title:"New article",htmlContent:"",perseusContent:""},getIcon:function(){return"icon-file-text"},getTitle:function(){return this.get("title")}}),Scratchpad:Backbone.Model.extend({url:function(){return"/api/internal/scratchpads/"+this.id+"?casing=camel"},getIcon:function(){return"icon-picture"},getTitle:function(){return this.get("title")},getUIAttributes:function(){return this.toJSON()}}),LearnMenuCuration:e.extend({defaults:{contentKind:"LearnMenuCuration"}}),Separator:Backbone.Model.extend({defaults:{contentKind:"Separator",id:"_separator",title:"----------"},getIcon:function(){return"icon-ellipsis-horizontal"},getTitle:function(){return this.get("title")},getUIAttributes:function(){return this.toJSON()}})}}
exports.createModelClasses=createModelClasses
});
KAdefine("javascript/tutorial-package/tutorial-nav.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
var i18n=require("../shared-package/i18n.js")
var APIActionResults=require("../shared-package/api-action-results.js")
var Analytics=require("../shared-package/analytics.js")
var KA=require("../shared-package/ka.js")
var KAConsole=require("../shared-package/console.js")
var urgentNotification=require("../shared-package/urgent-notification.js")
var createModelClasses=require("./tutorial-models.js").createModelClasses
var updateDocumentTitle=require("../shared-package/update-document-title.js")
var TutorialModelClasses=createModelClasses(Backbone.Model)
var TutorialNav={initOptions:{},_TutorialEditor:null,init:function(e,t){var i=this
var n=require("./tutorial-router.js")
var r=require("./tutorial-views.js")
var o=this
_.bindAll(this)
this.initOptions=e
this.currentId=this.initOptions.preRenderedId
this.preRenderedId=this.initOptions.preRenderedId
this.router=new n
this.router.on("route",function(){Analytics.handleRouterNavigation(true)},Analytics)
this.liveContext=this.createContext(new TutorialModelClasses.Topic(this.initOptions.topicModel),_.map(this.initOptions.contentModels,function(e){return new TutorialModelClasses[e.contentKind](e)}),".tutorial-nav.live-version",r.NavListView,r.ViewTable,r.HeaderView)
this.extendedSlug=this.initOptions.topicExtendedSlug
if(KA.isIPad&&(/hour-of-code-tutorial/.test(this.extendedSlug)||/hour-of-drawing-code/.test(this.extendedSlug))){window.location.href="/computing/hour-of-code/"+"hour-of-code-blocks/v/intro-to-drawing-with-blocks"
return}this.currentContext=this.liveContext
if(this.initOptions.exercisePrecacheData){this.liveContext.exercisePrecacheData[this.initOptions.contentId]=this.initOptions.exercisePrecacheData}this.currentContentView=null
this.discussionParams=t
this.discussionParams.reset=true
Backbone.history.start({pushState:true,hashChange:false})
this.bindNavigationLinks()
APIActionResults.register("tutorial_node_progress",this.setNodeProgress)
require.async(["../exercises-package/exercises.js"],function(e){$(e).bind("problemDone",function(){TutorialNav.liveContext.exercisePrecacheData={}
if(TutorialNav.editContext){TutorialNav.editContext.exercisePrecacheData={}}})
$(e).bind("newProblem",function(){_.defer(o.showContent)})
$(e).trigger("tutorialNavLoaded")
if(i.initOptions.previewing){var t={class_:["UrgentNotification"],text:i18n._("You are previewing an unpublished tutorial.")}
urgentNotification.renderUrgent(t)}})
var s=_.bind(this.initEditor,this,this.initOptions.topicModel.id,true,this.initOptions.publishAuthorized)
var a=$("#load-editor")
if(a.length&&window.location.pathname.match(/\/edit$/)){s()}else{a.one("click",s)}this.refreshNextPrevLinkTags()},refreshNextPrevLinkTags:function(){var e=function(e,t){var i=$("link[rel='"+t+"']")
if(e){if(i.length===0){i=$("<link rel='"+t+"'/>").appendTo($("head"))}var n=e.get("relativeUrl")
if(n){i.attr("href",n)}}else if(i.length!==0){i.remove()}}
e(this.getNextModel(),"next")
e(this.getPrevModel(),"prev")},initEditor:function(e,t,i){var n=this
$(".editor-status .loading-indicator").removeClass("hide")
require.async(["../tutorial-editor-package/tutorial-editor.js","../editor-package/editor-models.js"],function(r,o){var s=n.loadEditModels(e,o).then(function(e,i){if(n.currentContentView){n.currentContentView.remove()
n.currentContentView=null}n.editContext=n.createContext(e,i,".tutorial-nav.edit-version",r.NavListView,r.ViewTable,r.HeaderView)
n.editContext.hideDiscussion=true
n.setCurrentContext(n.editContext,t)
n._TutorialEditor=r
return n.editContext})
r.renderStatusView(true,i,s)})},getEditorIfLoaded:function(){return this._TutorialEditor},loadEditModels:function(e,t){if(!e){return $.Deferred().resolve(null,null).promise()}return t.ContentStore.fetchTopic(e)},createContext:function(e,t,i,n,r,o){var s={topicModel:e,contentModels:{},viewTable:r,headerViewClass:o,exercisePrecacheData:{}}
_.each(t,function(t){t.set("topicID",e.get("slug"))
this.addModelToContext(s,t)},this)
if(e){e.on("post-conflict-sync",function(){TutorialNav.onTopicModelRefresh(e)})
if(s.topicModel.get("inKnowledgeMap")){s.contentModels["e"]=new TutorialModelClasses.Exercise({kind:"Exercise",contentKind:"Exercise",title:s.topicModel.get("standaloneTitle"),translatedTitle:s.topicModel.get("translatedStandaloneTitle"),nodeSlug:"e",isChallenge:true})}}s.navListView=new n({el:$(i),topicModel:s.topicModel,contentModels:s.contentModels})
return s},addModelToContext:function(e,t){e.contentModels[t.get("nodeSlug")]=t
t.on("change:nodeSlug",function(){TutorialNav.onNodeSlugChange(e)})
t.on("post-conflict-sync",function(){TutorialNav.onContentModelRefresh(t)})},onNodeSlugChange:function(e){var t=e.contentModels[TutorialNav.currentId]
e.contentModels=_.object(_.map(_.values(e.contentModels),function(e){return[e.get("nodeSlug"),e]}))
if(this.currentContext===e&&this.currentId!==t.get("nodeSlug")){var i=this.getNodeUrl(t)
this.currentId=t.get("nodeSlug")
TutorialNav.router.navigate(i,{trigger:false})}},onTopicModelRefresh:function(e){$(this.editContext).trigger("refresh-topic",e)
if(e===this.currentContext.topicModel){this.currentContext.navListView.render()}},onContentModelRefresh:function(e){if(e===this.currentContext.contentModels[this.currentId]){this.setTutorialDescription(e)
this.currentContentView.render().postRender()}},getCurrentModel:function(){return this.currentContext.contentModels[this.currentId]||null},getRelativeToCurrentModel:function(e){var t=this.getCurrentModel()
if(!t){return null}var i=t.id
var n
var r=this.currentContext.topicModel.attributes.childData
_.each(r,function(e,t){if(""+e.id===""+i){n=t}})
var o=e(n,r)
return _.find(this.currentContext.contentModels,function(e){return""+e.id===o})},getNextModel:function(){return this.getRelativeToCurrentModel(function(e,t){return e<t.length-1?String(t[e+1].id):undefined})},getPrevModel:function(){return this.getRelativeToCurrentModel(function(e,t){return e>0?String(t[e-1].id):undefined})},setCurrentContext:function(e,t){this.currentContext.navListView.$el.hide()
this.currentContext=e
this.currentContext.navListView.$el.show()
if(t){if(this.getCurrentModel()){this.navigateToContent(this.currentId,this.currentContext.contentModels[this.currentId])}else{var i=_.values(this.currentContext.contentModels)[0]
if(i){this.navigateToNode(this.getNodeUrl(i))}}}},getNodeUrl:function(e){if(e){return this.extendedSlug+"/"+e.get("nodeSlug")}else{return this.extendedSlug}},setNodeProgress:function(e){var t=this
_.each(e,function(e){var i=t.liveContext.contentModels[e.id]
if(i){i.set("progress",e.progress)}})},bindNavigationLinks:function(){$("body").on("click","a.tutorial-router-link",_.bind(function(e){if(e.metaKey){return}this.navigateToNextNode($(e.currentTarget).attr("href"),e)},this))},navigateToNextNode:function(e,t){var i=this.extendedSlug.length+2
var n=e.substring(i)
if(this.currentContext.contentModels[n]){this.navigateToNode(e.substring(1),t)
$("html, body").scrollTop(0)}},setTutorialDescription:function(e){if(this.currentHeaderView){this.currentHeaderView.undelegateEvents()}this.currentHeaderView=new TutorialNav.currentContext.headerViewClass({model:e,el:$(".tutorial-content .tutorial-description").get(0)}).render()
this.setTutorialWindowTitle(e)},showTutorialDescription:function(){$(".tutorial-content .tutorial-description").show()},hideTutorialDescription:function(){$(".tutorial-content .tutorial-description").hide()},setTutorialWindowTitle:function(e){if(!e.get("translatedTitle")||!this.currentContext.topicModel.get("translatedTitle")){return}var t=e.get("translatedTitle")+" | "+this.currentContext.topicModel.get("translatedTitle")
updateDocumentTitle({pageName:t})},toggleTutorialNav:function(){var e=$("#tutorial-page")
var t=$(".tutorial-nav.docked-nav.live-version")
if(e.hasClass("full-screen")){t.show()
e.removeClass("full-screen")}else{e.addClass("full-screen")
_.delay(function(){if(e.hasClass("full-screen")){t.hide()}},200)}},navigateToContent:function(e,t){var i=!!t||e!==this.currentId
if(e===this.preRenderedId){i=false
this.preRenderedId=null}t=t||this.currentContext.contentModels[e]
if(!t){KAConsole.log("Node not found: "+e+"!")
return}var n=t.get("contentKind")==="Video"
if(n){i=true}$("#outer-wrapper").toggleClass("mobile-friendly-video-page",n)
$("html").toggleClass("page-container-min-width-zero",t.get("contentKind")==="Article")
KAConsole.log("Loading content",e)
this.currentId=e
this.currentContext.navListView.setSelectedNode(e)
this.setTutorialDescription(t)
if(this.currentContentView){this.currentContentView.remove()
this.currentContentView=null}var r=this.currentContext.viewTable[t.get("contentKind")]
if(r){var o=null
if(!i){o=$(".tutorial-node-content "+r.selector)}var s={model:t,el:o,parentTopic:this.currentContext.topicModel,domainSlug:this.currentContext.topicModel.get("domainSlug"),topicExtendedSlug:this.initOptions.topicExtendedSlug,discussionParams:this.currentContext.hideDiscussion?null:this.discussionParams,toggleTutorialNav:this.toggleTutorialNav}
this.currentContentView=new r.viewClass(s)}else{this.currentContentView=null}if(this.currentContentView&&(i||t.get("contentKind")==="Article")){this.currentContentView.render().$el.appendTo($(".tutorial-node-content"))}if(this.currentContentView){this.currentContentView.postRender()}this.refreshNextPrevLinkTags()},loadContent:function(e,t){t=t||$.noop
var i=this.currentContext.contentModels[e]
if(!i){throw new Error("loadContent called with invalid ID: "+e)}if(this.currentContext.exercisePrecacheData[e]){t(this.currentContext.exercisePrecacheData[e])
return}if(i.get("contentKind")==="Exercise"){var n="/api/internal/user/topic/"+this.currentContext.topicModel.get("slug")+"/"+i.get("name")+"/cards/begin?casing=camel"
if(this.currentContext===this.editContext){n+="&preview="+this.currentContext.topicModel.id}$.getJSON(n).then(_.bind(function(t){this.currentContext.exercisePrecacheData[e]=t
return t},this)).then(t)}else{t(null)}},hideContent:function(){$(".content.layer").css("opacity","0")
$(".progress.layer").css("opacity","1")},showContent:function(){$(".content.layer").css("opacity","1")
$(".progress.layer").css("opacity","0")},navigateToNode:function(e,t){if(TutorialNav.currentContext!==TutorialNav.liveContext){e+="/edit"}TutorialNav.router.navigate(e,{trigger:true})
if(t){t.preventDefault()}}}
window.TutorialNav=TutorialNav
module.exports=TutorialNav
});
KAdefine("javascript/tutorial-package/tutorial-views.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jquery-hoverflow/jquery.hoverflow.js")
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.position.js")
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
var KA=require("../shared-package/ka.js")
var TutorialArticleContentView=require("./tutorial-article-content-view.js")
var TutorialExerciseContentView=require("./tutorial-exercise-content-view.js")
var TutorialNav=require("./tutorial-nav.js")
var TutorialNavItemView=require("./tutorial-nav-item-view.js")
var TutorialScratchpadContentView=require("./tutorial-scratchpad-content-view.js")
var TutorialVideoContentView=require("./tutorial-video-content-view.js")
var TutorialViews={}
TutorialViews.NavListView=Backbone.View.extend({maxContentHeight:0,events:{"click .optional-button":"toggleOptional"},initialize:function(e){_.bindAll(this)
$(KA).on("contentLoaded",function(){$("[data-khan-nav]").trigger("resize")})
this.createSubViews()
this.$el.find("li").hoverIntent({over:this.nodeHovered,out:$.noop,timeout:350})},createSubViews:function(){var e=this
this.subViews=[]
this.$el.find("li").each(function(){var t=e.options.contentModels[$(this).attr("id")]
if(!t){return}e.subViews.push(new TutorialNavItemView({model:t,el:this}))})},getNextNode:function(e){return TutorialNav.getNextModel()},getNextTitleAndURL:function(){var e=this.getNextNode()
var t=$(".live-version .tutorial-nav-next")
if(e){return{title:e.get("translatedTitle"),url:"/"+TutorialNav.getNodeUrl(e)}}else if(t){return{title:t.find(".tutorial-nav-next-title-label").text(),url:t.find("a").attr("href")}}return null},toggleOptional:function(){var e=this.$("ol.optional")
var t=this.$(".optional-button")
if(e.is(":visible")){e.slideUp("fast")
t.removeClass("toggled")}else{e.slideDown("fast")
t.addClass("toggled")}},hasNotScrolledToNode:true,setSelectedNode:function(e){var t=_.find(this.subViews,function(t){return t.model.get("nodeSlug")===e})
if(t){_.each(this.subViews,function(e){e.$el.children(".tab-link").removeClass("active")})
t.$el.children(".tab-link").addClass("active")
$("[data-khan-nav]").trigger("resize")
var i=function(){var e=Math.max(t.$el.position().top-10,0)
$("[data-khan-scroll]").animate({scrollTop:e},185,"easeInOutCubic")}
if(this.hasNotScrolledToNode){i()
this.hasNotScrolledToNode=false}var r=this.getNextNode()
if(r){_.delay(TutorialNav.loadContent,2e3,r.get("nodeSlug"))}if(!t.model.get("core")&&!this.$("ol.optional").is(":visible")){this.toggleOptional()}}},_bindExerciseEditorLinks:_.once(function(){$(".tutorial-content").on("click",".to-exercise-editor",function(){TutorialNav.router.navP1Base()})}),nodeHovered:function(e){if(e.currentTarget.id){TutorialNav.loadContent(e.currentTarget.id)}}})
TutorialViews.HeaderView=Backbone.View.extend({initialize:function(e){this.template=require("./tutorial-description.handlebars")},render:function(){var e=this.model.toJSON()
this.$el.html(this.template(e))
return this}})
TutorialViews.ViewTable={Video:{viewClass:TutorialVideoContentView,selector:".video"},Exercise:{viewClass:TutorialExerciseContentView,selector:".exercises-content-container"},Article:{viewClass:TutorialArticleContentView,selector:".article-node-container"},Scratchpad:{viewClass:TutorialScratchpadContentView,selector:".scratchpad-node-container"}}
module.exports=TutorialViews
});
KAdefine("javascript/tutorial-package/tutorial-article.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,n,a,i,r){a=a||e.helpers
var l="",s,t,o,c,h=this,f="function",p=a.blockHelperMissing,d=a.helperMissing,v=void 0,u=this.escapeExpression
function m(e,n){var i="",r,l
i+='\n    <div class="sidebar">\n        '
o=a.whereWhenImage
r=o||e.whereWhenImage
l=a["if"]
c=h.program(2,g,n)
c.hash={}
c.fn=c
c.inverse=h.noop
r=l.call(e,r,c)
if(r||r===0){i+=r}i+="\n        "
o=a.relatedLinks
r=o||e.relatedLinks
l=a["if"]
c=h.program(5,w,n)
c.hash={}
c.fn=c
c.inverse=h.noop
r=l.call(e,r,c)
if(r||r===0){i+=r}i+="\n    </div>\n    "
return i}function g(e,n){var i="",r,l
i+="\n        <h2>"
o=a["_"]
r=o||e["_"]
c=h.program(3,k,n)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof r===f){r=r.call(e,c)}else{r=p.call(e,r,c)}if(r||r===0){i+=r}i+='</h2>\n        <div class="sidebar-item where-and-when">\n            <img src="'
o=a.whereWhenImage
r=o||e.whereWhenImage
o=a.staticUrl
l=o||e.staticUrl
if(typeof l===f){r=l.call(e,r,{hash:{}})}else if(l===v){r=d.call(e,"staticUrl",r,{hash:{}})}else{r=l}i+=u(r)+'">\n            <p>'
o=a.whereWhenCaption
r=o||e.whereWhenCaption
if(typeof r===f){r=r.call(e,{hash:{}})}else if(r===v){r=d.call(e,"whereWhenCaption",{hash:{}})}i+=u(r)+"</p>\n        </div>\n        "
return i}function k(e,n){return"Where and When"}function w(e,n){var i="",r,l
i+="\n        <h2>"
o=a["_"]
r=o||e["_"]
c=h.program(6,y,n)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof r===f){r=r.call(e,c)}else{r=p.call(e,r,c)}if(r||r===0){i+=r}i+='</h2>\n        <div class="sidebar-item related-links">\n            '
o=a.relatedLinks
r=o||e.relatedLinks
l=a.each
c=h.program(8,b,n)
c.hash={}
c.fn=c
c.inverse=h.noop
r=l.call(e,r,c)
if(r||r===0){i+=r}i+="\n        </div>\n        "
return i}function y(e,n){return"Related links"}function b(e,n){var i="",r
i+='\n            <a href="'
o=a.url
r=o||e.url
if(typeof r===f){r=r.call(e,{hash:{}})}else if(r===v){r=d.call(e,"url",{hash:{}})}i+=u(r)+'" target="_blank">'
o=a.caption
r=o||e.caption
if(typeof r===f){r=r.call(e,{hash:{}})}else if(r===v){r=d.call(e,"caption",{hash:{}})}i+=u(r)+"</a>\n            "
return i}function W(e,n){return'\n        <div class="article-content perseus-article framework-perseus">\n        </div>\n    '}function _(e,n){var i="",r
i+='\n        <div class="article-content html-article">\n            '
o=a.translatedHtmlContent
r=o||e.translatedHtmlContent
if(typeof r===f){r=r.call(e,{hash:{}})}else if(r===v){r=d.call(e,"translatedHtmlContent",{hash:{}})}if(r||r===0){i+=r}i+="\n        </div>\n    "
return i}function I(e,n){var i="",r,l
i+='\n        <div class="content-tags">\n            <div class="heading">'
o=a["_"]
r=o||e["_"]
c=h.program(15,C,n)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof r===f){r=r.call(e,c)}else{r=p.call(e,r,c)}if(r||r===0){i+=r}i+="</div>\n            "
o=a.conceptTagsInfo
r=o||e.conceptTagsInfo
l=a.each
c=h.program(17,L,n)
c.hash={}
c.fn=c
c.inverse=h.noop
r=l.call(e,r,c)
if(r||r===0){i+=r}i+="\n        </div>\n        "
return i}function C(e,n){return"Concepts featured in this article:"}function L(e,n){var a="",i
a+='\n                <a href="/tag/'
i=e.slug
if(typeof i===f){i=i.call(e,{hash:{}})}else if(i===v){i=d.call(e,"this.slug",{hash:{}})}a+=u(i)+'">'
i=e.displayName
if(typeof i===f){i=i.call(e,{hash:{}})}else if(i===v){i=d.call(e,"this.displayName",{hash:{}})}a+=u(i)+"</a>\n            "
return a}l+='\n<div class="article-node-container">\n    '
o=a.showSidebar
s=o||n.showSidebar
t=a["if"]
c=h.program(1,m,r)
c.hash={}
c.fn=c
c.inverse=h.noop
s=t.call(n,s,c)
if(s||s===0){l+=s}l+="\n    "
o=a.isParticle
s=o||n.isParticle
t=a["if"]
c=h.program(10,W,r)
c.hash={}
c.fn=c
c.inverse=h.program(12,_,r)
s=t.call(n,s,c)
if(s||s===0){l+=s}l+='\n    <div class="article-content">\n        '
o=a.conceptTagsInfo
s=o||n.conceptTagsInfo
t=a["if"]
c=h.program(14,I,r)
c.hash={}
c.fn=c
c.inverse=h.noop
s=t.call(n,s,c)
if(s||s===0){l+=s}l+='\n        <hr />\n    </div>\n    <div>\n        <span class="article-footer">\n        </span>\n    </div>\n</div>\n'
return l})
function wrapped_template(e,n){return absoluteLinks.makeHtmlLinksSafe(template(e,n))}module.exports=wrapped_template
});
KAdefine("javascript/tutorial-package/tutorial-feedback.js", function(require, module, exports) {
var $=require("jquery")
var i18n=require("../shared-package/i18n.js")
var KA=require("../shared-package/ka.js")
var KAConsole=require("../shared-package/console.js")
var parseQueryString=require("../shared-package/parse-query-string.js")
var TutorialFeedback={renderFeedbackQuestion:function(e,a){var i=KA.getUserProfile()
if(!i||i.isPhantom()){return}var r
if(e==="article"){r="/api/internal/articles/"+a+"/feedback"}else{return}r+="?casing=camel"
var n=parseQueryString()["question_id"]
if(n){r+="&question_id="+n}var t=$.ajax(r)
t.done(function(i){var r=$(".video-feedback-container.upper")
if(i&&i.questionHtml&&r.length){KAConsole.log("Loading feedback question.")
r.html(i.questionHtml)
var n=r.find(".submit")
var t=r.find(".close")
n.toggleClass("disabled",true)
r.find(".answer-box").change(function(){n.toggleClass("disabled",false)})
n.click(function(){TutorialFeedback._submitFeedbackQuestion(e,a)})
t.click(TutorialFeedback._hideFeedback)
r.slideDown("slow")}})},_getFeedbackData:function(){var e=$(".video-feedback")
var a=e.find(".video-feedback-question").data("questionId")
var i=e.find(".video-feedback-answer")
var r=""
$.each(i,function(e,a){var i=$(a)
if(i.is(":checked")){r=i.data("answerId")}})
return{question_id:a,answer_id:r}},_thank:function(){var e=$(".video-feedback")
e.html("<span class='close'>&#215;</span>"+i18n._("Thanks for your feedback!")+"<br/>"+i18n._("We appreciate you taking the time to leave us feedback, and we're doing our best to improve the content on Khan Academy."))
$(".video-feedback-container .submit").hide()
var a=e.find(".close")
a.click(TutorialFeedback._hideFeedback)},_hideFeedback:function(e){e.preventDefault()
$(".video-feedback-container").slideUp("fast")},_submitFeedbackQuestion:function(e,a){var i=TutorialFeedback._getFeedbackData()
if(i.answer_id){var r={article:"articles",video:"videos"}
$.ajax({type:"POST",url:"/api/internal/"+r[e]+"/"+a+"/feedback",contentType:"application/json",data:JSON.stringify(i)})
TutorialFeedback._thank()}}}
module.exports=TutorialFeedback
});
KAdefine("javascript/tutorial-package/tutorial-article-content-view.js", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var ReactDOM=require("react-dom")
var _=require("underscore")
var absoluteLinks=require("../shared-package/absolute-links.js")
var Analytics=require("../shared-package/analytics.js")
var KA=require("../shared-package/ka.js")
var KAConsole=require("../shared-package/console.js")
var TutorialContentView=require("./tutorial-content-view.js")
var TutorialFeedback=require("./tutorial-feedback.js")
var TutorialNav=require("./tutorial-nav.js")
var TutorialArticleContentView=TutorialContentView.extend({initialize:function(e){TutorialContentView.prototype.initialize.call(this,e)
this.discussionParams=e.discussionParams
this.template=require("./tutorial-article.handlebars")
if(window._kiq){window._kiq.push(["set",{article_satisfaction_survey:"true"}])}},remove:function(){$(".task-container").show()
this.$el.find(".article-node-container").remove()},render:function(){var e=this
$(".task-container").hide()
TutorialNav.showTutorialDescription()
var t=this.model.toJSON()
t.translatedHtmlContent=absoluteLinks.makeHtmlLinksSafe(t.translatedHtmlContent)
t.showSidebar=t.whereWhenImage||t.relatedLinks
this.$el.html(this.template(t))
this.maybeRenderParticle(t.perseusContent,this.$el.find(".perseus-article"))
if(!t.perseusContent&&!this.shouldRenderMath()){this.sendAnalyticsForFullyRendered(false)}this.maybeRenderDiscussion(this.$el.find(".article-footer"),{which:"article-questions",focusKind:"article"})
require.async(["../tasks-package/content-header.jsx","package!tasks.css"],function(a){var r=React.createFactory(a)
var i=r({title:t["translatedTitle"],toggleTutorialNav:e.options.toggleTutorialNav})
var n=$('<div class="task-container">'+'<div class="task-header-container '+e.options.domainSlug+' article-header">'+'<div class="task-header-mid-container">'+"</div>"+"</div>"+"</div>")
$(".tutorial-description").html(n)
ReactDOM.render(i,n.find(".task-header-mid-container")[0])})
return this},postRender:function(){TutorialContentView.prototype.postRender.call(this)
_.delay(function(){$.ajax({url:"/api/internal/user/article/"+this.model.id+"/log",data:{topic_slug:TutorialNav.currentContext.topicModel.get("slug")},type:"POST"})}.bind(this),1e3)
if(window.ga){window.ga("send","event","Learning-Action","Article-View",TutorialNav.currentContext.topicModel.get("slug"))}this.maybeRenderMath()
TutorialFeedback.renderFeedbackQuestion("article",this.model.id)},maybeRenderParticle:function(e,t){var a=this
if(!e){return}if(!t.length){console.error("Could not find element to render particle to")}var r
try{r=JSON.parse(e)}catch(i){console.error(i)
return}require.async(["../perseus-package/perseus.js","../exercises-package/exercises.js","../articles-latex-package/latex.js","../katex-package/wait-for-fonts.js","package!exercise-content.css"],function(e,i,n,s){n.loadMathJax().then(function(){ReactDOM.render(React.createElement(e.ArticleRenderer,{enabledFeatures:{toolTipFormats:true,useMathQuill:i.useMathQuill},json:r}),t[0])
s(function(){return a.sendAnalyticsForFullyRendered(true)})})})},shouldRenderMath:function(){return this.$("code.latex").length>0},maybeRenderMath:function(){var e=this
if(!this.shouldRenderMath()){KAConsole.log("No HTML article math content found.")
return}require.async(["../katex-package/wait-for-fonts.js","../articles-latex-package/latex.js"],function(t){e.$("code.latex").latex()
t(function(){return e.sendAnalyticsForFullyRendered(false)})})},sendAnalyticsForFullyRendered:function(e){if(KA.gaeStatsKeyPrefix!=="webapp.ArticlePage"){return}var t="sufficiently_usable.old_article_page"
if(e){t="sufficiently_usable.old_particle_page"}Analytics.reportTimingToGraphiteAndGA(Analytics.timingStats.SUFFICIENTLY_USABLE_MS,t)}})
module.exports=TutorialArticleContentView
});
KAdefine("javascript/tutorial-package/tutorial-content-view.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
var KA=require("../shared-package/ka.js")
var TutorialNav=require("./tutorial-nav.js")
var TutorialContentView=Backbone.View.extend({initialize:function(i){this.options=i||{}
Backbone.View.prototype.initialize.call(this,i)},maybeRenderDiscussion:function(i,e){var a=this
if(!this.discussionParams){return}this.discussionParams=_.extend(TutorialNav.discussionParams,{focusId:this.model.id,isVideo:e.focusKind==="video",isArticle:e.focusKind==="article",clarificationsEnabled:this.model.get("clarificationsEnabled"),topicSlug:TutorialNav.currentContext.topicModel.get("slug")},e)
require.async(["../discussion-package/discussion.handlebars"],function(e){a.discussionParams["avatarSrc"]=KA.getUserProfile()&&KA.getUserProfile().get("avatarSrc")||"/images/avatars/leaf-green.png"
var s=$(e(a.discussionParams))
i.append(s[0])})},postRender:function(){var i=this
if(this.discussionParams){require.async(["../discussion-package/discussion.js"],function(e){e.init(i.discussionParams)})}},_createTaskContainer:_.once(function(i){var e=i({domain:TutorialNav.currentContext.topicModel.get("domainSlug")})
$(e).appendTo(".tutorial-node-content")})})
module.exports=TutorialContentView
});
KAdefine("javascript/tutorial-package/tutorial-exercise-content-view.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var BigBingo=require("../shared-package/bigbingo.js")
var KA=require("../shared-package/ka.js")
var TutorialContentView=require("./tutorial-content-view.js")
var TutorialNav=require("./tutorial-nav.js")
var TutorialExerciseContentView=TutorialContentView.extend({className:"exercises-content-container visited-no-recolor",initialize:function(e){TutorialContentView.prototype.initialize.call(this,e)
this.initOptions=e},remove:function(){TutorialContentView.prototype.remove.apply(this)
if(window.TaskLauncher&&TaskLauncher.taskStarted){TaskLauncher.dismissTask(false)}TutorialNav.showTutorialDescription()},render:function(){return this},postRender:function(){TutorialNav.hideContent()
TutorialNav.loadContent(this.model.get("nodeSlug"),function(e){var t=this
if(TutorialNav.router._navigatingToP1){TutorialNav.showContent()}else if(this._isPreview(e)){require.async(["../perseus-admin-package/perseus-admin.js","../exercises-package/exercises.js"],function(i,r){TutorialNav.showContent()
r.init(e,true)
r.render()
if(t.initOptions.topicExtendedSlug==="/translate/content"){$.getJSON("/api/internal/exercises/"+e.filter.exercises[0]+"?casing=camel").then(function(e){$(".tutorial-description span").text(e.translatedDisplayName).css({color:"white"})
$(".title-header").css({margin:0})
$(".tutorial-description").append($("<p/>").text(e.translatedDescription).css({margin:0})).attr("class","domain-color").css({padding:"20px",color:"white"}).show()})}if(TutorialNav.initOptions.previewingItems){i.previewItemsInit(e.filter)}})}else{TutorialNav.showContent()
this.startTask(e)}}.bind(this))},_isPreview:function(e){return e&&!e.practiceMode},_initEditorForTask:function(e){if($(".task-title .toggle-node-editor").length===0){var t=e.currentCard.getUserExercise()
if(t){var i=t.exerciseModel.trackingDocumentUrl
if(i!=null&&i!==""&&TutorialNav.getEditorIfLoaded()){$("<a class='no-underline' target='_blank'>"+" <i class='tracking-document-url"+" content-editor icon-info-sign'"+" ></i></a>").attr("href",i).appendTo(".task-title")}}$(".task-title").append(" <i class='toggle-node-editor content-editor icon-cog'"+" style='display: none;''></i>")
var r=KA.getUserProfile()
var a=!!r&&(r.get("isDeveloper")||r.get("isPublisher")||r.get("isCurator")||r.get("isCreator"))
var n=TutorialNav.getCurrentModel()
var o=n.get("contentKind")==="Exercise"&&!n.get("fileName")
if(a&&o){$("<i class='to-exercise-editor icon-cog'></i>").attr("title","Edit this exercise").css("cursor","pointer").appendTo(".task-title")
this._bindExerciseEditorLinks()}}},_bindExerciseEditorLinks:_.once(function(){$(".tutorial-content").on("click",".to-exercise-editor",function(){TutorialNav.router.navP1Base()})}),startTask:function(e){var t=this
$(".exercises-content-container").empty()
TutorialNav.hideTutorialDescription()
BigBingo.markConversion("visit_tutorial_exercise")
require.async(["../exercises-package/exercises.js","../tasks-package/learning-task.js","../tasks-package/task-launcher.js","../tasks-package/focused-task-chrome.handlebars"],function(i,r,a,n){t._createTaskContainer(n)
var o=r.fromServerJson(e["taskJson"])
o.set("conceptTagsInfo",t.model.get("conceptTagsInfo"))
e["topic"]=TutorialNav.currentContext.topicModel.toJSON()
o.setRenderData(e)
t.once("task-launched",function(){return t._initEditorForTask(i)})
var s=TutorialNav.currentContext.topicModel.get("domainSlug")
a.startTask(o,$(".task-container"),t,null,s)})}})
module.exports=TutorialExerciseContentView
});
KAdefine("javascript/tutorial-package/tutorial-scratchpad-content-view.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var TutorialContentView=require("./tutorial-content-view.js")
var TutorialNav=require("./tutorial-nav.js")
var TutorialScratchpadContentView=TutorialContentView.extend({className:"scratchpad-node-container",initialize:function(t){TutorialContentView.prototype.initialize.call(this,t)
this.discussionParams=t.discussionParams||{}
this.domainSlug=t.domainSlug
this.ScratchpadUI=null},remove:function(){$(".task-container").show()
if(this.ScratchpadUI){var t=this.ScratchpadUI
t.$el.remove()
t.triggerRemove()}TutorialContentView.prototype.remove.apply(this)},render:function(){var t=this
$(".task-container").hide()
var e=$(".scratchpad-page")
var a=this.model.get("category")==="challenge"||this.model.get("category")==="project"
if(!e.length){e=$("<div class='scratchpad-page'></div>").appendTo(".tutorial-node-content")}TutorialNav.hideTutorialDescription()
e.show()
$("#page-overlay").show()
require.async(["../scratchpads-package/scratchpad-ui.js","../scratchpads-package/browser-notice.handlebars","package!clarifications.css","package!intro.css","package!scratchpads.css","package!scratchpad-challenge.css"],function(i,r,o){var s=i.ScratchpadUI
var c=i.ScratchpadUIStart
var n=i.featureDetect
t.ScratchpadUI=s
if(!n()){e.html(o())
$("#browser-notice-container").show()
return}$("html").addClass("scratchpad-has-features")
s.termMap=t.model.get("termMap")
c("editor=yes&buttons=yes&author=yes")
var d
var l=window.location.pathname.match(/\/edit$/)
if(!t.model.get("isProject")||l){d=t.model.toJSON()}s.init({id:t.model.get("id"),el:e,scratchpad:d,embedded:true,domainSlug:t.domainSlug,discussion:{which:"scratchpad-questions",focusId:t.model.get("id"),focusKind:"scratchpad",qaExpandKey:t.discussionParams.qaExpandKey,expandFeedbackType:t.discussionParams.expandFeedbackType,description:t.model.get("description"),hideComments:a,hideQuestions:a,showDocumentation:true,showObjectives:a,showSpinoffs:!a,reset:true,topicSlug:TutorialNav.currentContext.topicModel.get("slug")},topic:TutorialNav.currentContext.topicModel.toJSON(),toggleTutorialNav:t.options.toggleTutorialNav})})
return this},postRender:function(){_.delay(function(){$.ajax({url:"/api/internal/user/program/"+this.model.id+"/log",data:{topic_slug:TutorialNav.currentContext.topicModel.get("slug")},type:"POST"})}.bind(this),1e3)}})
module.exports=TutorialScratchpadContentView
});
KAdefine("javascript/tutorial-package/tutorial-video-content-view.js", function(require, module, exports) {
var $=require("jquery")
var TutorialContentView=require("./tutorial-content-view.js")
var TutorialNav=require("./tutorial-nav.js")
var TutorialVideoContentView=TutorialContentView.extend({initialize:function(e){var t=this
TutorialContentView.prototype.initialize.call(this,e)
this.renderComplete=$.Deferred().resolve()
this.discussionParams=e.discussionParams
this.TaskLauncher=null
require.async(["../tasks-package/video-task.js"],function(e){t.placeholderTask=e.createPlaceholderFromVideo(t.model)})},remove:function(){var e=require.ifLoadedLegacy("../discussion-package/clarifications.js")
if(e){e.reset()}TutorialContentView.prototype.remove.apply(this)
if(this.TaskLauncher&&this.TaskLauncher.taskStarted){this.TaskLauncher.dismissTask(false)}TutorialNav.showTutorialDescription()},render:function(){var e=this
this.renderComplete=$.Deferred()
this.$el.empty()
var t=$.Deferred()
TutorialNav.hideTutorialDescription()
require.async(["../tasks-package/task-launcher.js","../tasks-package/focused-task-chrome.handlebars"],function(i,r){e.TaskLauncher=i
e._createTaskContainer(r)
e.once("task-launched",t.resolve)
var a=TutorialNav.currentContext.topicModel.get("domainSlug")
i.startTask(e.placeholderTask,$(".task-container"),e,null,a)})
t.done(function(){this.maybeRenderDiscussion($(".video-footer"),{which:"video-questions",focusKind:"video",focusId:this.model.get("readableId")})
this.renderComplete.resolve()}.bind(this))
return this},postRender:function(){this.renderComplete.done(function(){TutorialContentView.prototype.postRender.call(this)}.bind(this))}})
module.exports=TutorialVideoContentView
});
KAdefine("javascript/tutorial-package/tutorial-router.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var React=require("react")
var ReactDOM=require("react-dom")
var _=require("underscore")
var KA=require("../shared-package/ka.js")
var TutorialNav=require("./tutorial-nav.js")
var openPerseusOne=function(e,t,i,a,r,n){var o={title:e.get("displayName"),name:e.get("name"),exid:e.get("id"),sha:e.get("sha"),trackingDocument:e.get("trackingDocumentUrl")}
var s="#outer-wrapper, #footer, .push, .g-m-p-corner, .urgent-wrapper"
$(s).css("display","none")
var u=$("<div>").appendTo(document.body).css({width:"100%",height:"100%"})[0]
ReactDOM.render(t({exercise:o}),u)
return r.then(function(){return a.init({skipMathJax:true,imageUploader:n})}).then(function(){return{closeHandle:function(){ReactDOM.unmountComponentAtNode(u)
$(u).remove()
$(s).css("display","inherit")},getExerciseId:function(){return o.exid},navigateTo:i.navigateTo}})}
var isNavigationPrevented=function(){var e=window.onbeforeunload&&window.onbeforeunload()
if(!e){return false}e=e+"\n\n Are you sure you want to leave this page?"
return!confirm(e)}
var TutorialRouter=Backbone.Router.extend({initialize:function(){Backbone.history.loadUrl=function(){if(isNavigationPrevented()){var e="/"+this.fragment
this.history.pushState({},document.title,e)
return true}else{return Backbone.History.prototype.loadUrl.apply(this,arguments)}}},routes:{"*topicroute/edit/:itemId(/:tabName)":"perseusEdit","*topicroute/edit":"editContent","*topicroute(/)":"content"},perseusEdit:function(e,t,i){var a=this
this._navigatingToP1=true
t=this._removeTrailingBits(t)
i=this._removeTrailingBits(i||"")
var r={itemId:t,tabName:i}
var n=TutorialNav.getCurrentModel()
if(this._p1GetExerciseId&&this._p1GetExerciseId()===n.get("id")){this._p1NavigateTo(r)}else{this._tryCloseP1()
e=this._removeTopicPagePath(e)
this._navigateToContent(e)
require.async(["../perseus-one-package/main.jsx","../perseus-one-package/actions.jsx","../perseus-package/perseus.js","../exercises-package/khan-exercise.js","../exercises-package/upload-image.jsx","package!perseus-admin.css","package!typeahead-vanilla.css"],function(e,t,i,n,o){var s=React.createFactory(e)
openPerseusOne(TutorialNav.getCurrentModel(),s,t,i,n.mathJaxLoaded,o).then(function(e){a._p1CloseHandle=e.closeHandle
a._p1GetExerciseId=e.getExerciseId
a._p1NavigateTo=e.navigateTo
a._p1NavigateTo(r)})})}},editContent:function(e){delete this._navigatingToP1
var t=this._tryCloseP1()
e=this._removeTopicPagePath(e)
var i=TutorialNav.getEditorIfLoaded()
if(i){if(TutorialNav.currentContext===TutorialNav.liveContext||t){$("[data-khan-nav]").trigger("resize")
i.statusController.initializeEdit()
TutorialNav.setCurrentContext(TutorialNav.editContext,true)
i.statusController.set("mode","Edit")}if(TutorialNav.currentId!==e){this._navigateToContent(e)}}else{TutorialNav.initOptions.useEditContext=true
TutorialNav.initOptions.refreshContent=true
this._navigateToContent(e)}},content:function(e){delete this._navigatingToP1
this._tryCloseP1()
var t=TutorialNav.getEditorIfLoaded()
if(t&&TutorialNav.currentContext!==TutorialNav.liveContext){$("[data-khan-nav]").trigger("resize")
TutorialNav.setCurrentContext(TutorialNav.liveContext,true)
t.statusController.set("mode","Live")}e=this._removeTrailingBits(e)
e=this._removeTopicPagePath(e)
this._navigateToContent(e)},navigate:function(e,t){if(isNavigationPrevented()){return}Backbone.Router.prototype.navigate.call(this,e,t)},switchContext:function(e){this.navigate(this._getExerciseUrl()+(e?"":"/edit"),{trigger:true})},navP1Item:function(e){var t=""
if(e.tabName!==""&&e.tabName!=="edit"){t="/"+e.tabName}var i=e.itemId||"items"
this.navigate(this._getExerciseUrl()+"/edit/"+i+t,{trigger:false})},navP1Base:function(e){var t=e?"/"+e:""
this.navigate(this._getExerciseUrl()+"/edit/items"+t,{trigger:true})},navP1Exit:function(){var e=this._getExerciseUrl()
var t=KA.getUserProfile()
if(t&&(t.get("isDeveloper")||t.get("isCurator")||t.get("isPublisher"))){e+="/edit"}this.navigate(e,{trigger:true})},_navigateToContent:function(e){var t=TutorialNav.currentContext.contentModels[e]
TutorialNav.navigateToContent(e,t)},_getExerciseUrl:function(){return TutorialNav.getNodeUrl(TutorialNav.getCurrentModel())},_tryCloseP1:function(){var e=!!this._p1CloseHandle
if(this._p1CloseHandle){this._p1CloseHandle()
delete this._p1CloseHandle
delete this._p1GetExerciseId
delete this._p1NavigateTo}return e},_removeTopicPagePath:function(e){var t=e.split("/")
_.each(TutorialNav.extendedSlug.split("/"),function(e){if(t[0]===e){t.shift()}})
return t.join("/")},_removeTrailingBits:function(e){var t=e.indexOf("#")
if(t>-1){e=e.substr(0,t)}var i=e.indexOf("?")
if(i>-1){e=e.substr(0,i)}return e}})
module.exports=TutorialRouter
});
KAdefine("javascript/tutorial-package/tutorial-nav-item-view.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var TutorialNavItemView=Backbone.View.extend({initialize:function(){this.model.on("change:progress",this.updateProgress,this)},updateProgress:function(e,s){var r="progress-"+s
if(this.$el.find(".subway-icon").length){this.$el.find(".subway-icon").removeClass("progress-complete progress-started").addClass(r)}else{this.$el.find(".progress-icon").fadeTo(200,.01,function(){$(this).removeClass("progress-complete").removeClass("progress-started").addClass(r)}).fadeTo(200,1)}}})
module.exports=TutorialNavItemView
});
; KAdefine.updatePathToPackageMap({"javascript/articles-latex-package/latex.js": "articles-latex.js", "javascript/discussion-package/discussion.handlebars": "discussion.js", "javascript/discussion-package/discussion.js": "discussion.js", "javascript/editor-package/editor-models.js": "editor.js", "javascript/exercises-package/exercises.js": "exercises.js", "javascript/exercises-package/khan-exercise.js": "exercises.js", "javascript/exercises-package/upload-image.jsx": "exercises.js", "javascript/katex-package/wait-for-fonts.js": "katex.js", "javascript/perseus-admin-package/perseus-admin.js": "perseus-admin.js", "javascript/perseus-one-package/actions.jsx": "perseus-one.js", "javascript/perseus-one-package/main.jsx": "perseus-one.js", "javascript/perseus-package/perseus.js": "perseus.js", "javascript/scratchpads-package/browser-notice.handlebars": "scratchpads.js", "javascript/scratchpads-package/scratchpad-ui.js": "scratchpads.js", "javascript/tasks-package/content-header.jsx": "tasks.js", "javascript/tasks-package/focused-task-chrome.handlebars": "tasks.js", "javascript/tasks-package/learning-task.js": "tasks.js", "javascript/tasks-package/task-launcher.js": "tasks.js", "javascript/tasks-package/video-task.js": "tasks.js", "javascript/tutorial-editor-package/tutorial-editor.js": "tutorial-editor.js"});
