KAdefine("javascript/transcripts-package/transcripts.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
var KAConsole=require("../shared-package/console.js")
var VideoTranscript=Backbone.Model.extend({url:function(){var e={casing:"camel"}
var t=this.get("locale")
if(t){e.locale=t}var i=this.get("youtubeId")
var s=$.param(e)
return"/api/internal/videos/"+i+"/transcript?"+s},hasValid:function(){var e=this.get("subtitles").length
var t=false
for(var i=0;i<e;i++){if(this.get("subtitles")[i]["kaIsValid"]){t=true
break}}KAConsole.log("Transcript data received. "+(t?"Some":"No")+" valid entries.")
return t},parse:function(e){var t={subtitles:[]}
if(_.isObject(e)){t.subtitles=e}return t}})
var InteractiveTranscriptView=Backbone.View.extend({autoscroll:true,events:{"click a":"onSubtitleClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave"},render:function(){if(this.model){this.$el.html(require("./video-transcript.handlebars")({subtitles:this.model.get("subtitles")}))}return this},onMouseEnter:function(e){this.autoscroll=false},onMouseLeave:function(){this.autoscroll=true},onSubtitleClick:function(e){var t=$(e.target).parent(),i=parseFloat(t.data("milliseconds"))/1e3
if(!isNaN(i)){this.trigger("subtitleSelection",i)}},showWithSlide:function(){this.$(".subtitles-container").slideDown("fast")},hideWithSlide:function(){this.$(".subtitles-container").slideUp("fast")},onPlayerUpdate:function(e){var t,i,s=this.$("li"),r=s.length,a
for(a=0;a<r;a++){t=parseFloat($(s[a]).data("milliseconds"))/1e3
if(!isNaN(t)&&t>e){i=a===0?s[0]:s[a-1]
break}}if(!$(i).is(".active")){this._setActiveSubtitle(i||s[r-1])}},_setActiveSubtitle:function(e){var t,i
this.$(".active").removeClass("active")
$(e).addClass("active")
if(this.autoscroll){t=e.offsetTop
i=$(e).height()
var s=Math.min(i*3,this.$(".subtitles").height()-i)
this.$(".subtitles").stop().animate({scrollTop:t-s})}}})
module.exports={InteractiveTranscriptView:InteractiveTranscriptView,VideoTranscript:VideoTranscript}
});
KAdefine("javascript/transcripts-package/video-transcript.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,a,t,s,i){t=t||e.helpers
var l="",n,r,o,p,m=this,f="function",h=t.helperMissing,c=void 0,u=this.escapeExpression
function d(e,a){var s="",i,l
s+="\n            "
o=t.kaIsValid
i=o||e.kaIsValid
l=t["if"]
p=m.program(2,v,a)
p.hash={}
p.fn=p
p.inverse=m.noop
i=l.call(e,i,p)
if(i||i===0){s+=i}s+="\n        "
return s}function v(e,a){var s="",i,l
s+='\n            <li data-milliseconds="'
o=t.startTime
i=o||e.startTime
if(typeof i===f){i=i.call(e,{hash:{}})}else if(i===c){i=h.call(e,"startTime",{hash:{}})}s+=u(i)+'">\n                <a href="javascript:void(0)" data-fmttime="'
o=t.startTime
i=o||e.startTime
o=t.formatTimestamp
l=o||e.formatTimestamp
if(typeof l===f){i=l.call(e,i,{hash:{}})}else if(l===c){i=h.call(e,"formatTimestamp",i,{hash:{}})}else{i=l}s+=u(i)+'">'
o=t.text
i=o||e.text
if(typeof i===f){i=i.call(e,{hash:{}})}else if(i===c){i=h.call(e,"text",{hash:{}})}s+=u(i)+"</a>\n            </li>\n            "
return s}l+='<div class="subtitles-container desktop-only">\n    <ul itemprop="transcript" class="subtitles">\n        '
o=t.subtitles
n=o||a.subtitles
r=t.each
p=m.program(1,d,i)
p.hash={}
p.fn=p
p.inverse=m.noop
n=r.call(a,n,p)
if(n||n===0){l+=n}l+="\n    </ul>\n</div>\n"
return l})
function wrapped_template(e,a){return absoluteLinks.makeHtmlLinksSafe(template(e,a))}module.exports=wrapped_template
});
