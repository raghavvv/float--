KAdefine("third_party/javascript-khansrc/select2/select2.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
(function($){if(typeof $.fn.each2=="undefined"){$.fn.extend({each2:function(e){var t=$([0]),s=-1,i=this.length
while(++s<i&&(t.context=t[0]=this[s])&&e.call(t[0],s,t)!==false);return this}})}})(jQuery);(function($,e){"use strict"
if(window.Select2!==e){return}var t,s,i,n,o,a,r={x:0,y:0},l,c,t={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(e){e=e.which?e.which:e
switch(e){case t.LEFT:case t.RIGHT:case t.UP:case t.DOWN:return true}return false},isControl:function(e){var s=e.which
switch(s){case t.SHIFT:case t.CTRL:case t.ALT:return true}if(e.metaKey)return true
return false},isFunctionKey:function(e){e=e.which?e.which:e
return e>=112&&e<=123}},h="<div class='select2-measure-scrollbar'></div>"
l=$(document)
o=function(){var e=1
return function(){return e++}}()
function u(e,t){var s=0,i=t.length
for(;s<i;s=s+1){if(d(e,t[s]))return s}return-1}function f(){var e=$(h)
e.appendTo("body")
var t={width:e.width()-e[0].clientWidth,height:e.height()-e[0].clientHeight}
e.remove()
return t}function d(t,s){if(t===s)return true
if(t===e||s===e)return false
if(t===null||s===null)return false
if(t.constructor===String)return t+""===s+""
if(s.constructor===String)return s+""===t+""
return false}function p(e,t){var s,i,n
if(e===null||e.length<1)return[]
s=e.split(t)
for(i=0,n=s.length;i<n;i=i+1)s[i]=$.trim(s[i])
return s}function g(e){return e.outerWidth(false)-e.width()}function m(t){var s="keyup-change-value"
t.on("keydown",function(){if($.data(t,s)===e){$.data(t,s,t.val())}})
t.on("keyup",function(){var i=$.data(t,s)
if(i!==e&&t.val()!==i){$.removeData(t,s)
t.trigger("keyup-change")}})}l.on("mousemove",function(e){r.x=e.pageX
r.y=e.pageY})
function v(t){t.on("mousemove",function(t){var s=r
if(s===e||s.x!==t.pageX||s.y!==t.pageY){$(t.target).trigger("mousemove-filtered",t)}})}function w(t,s,i){i=i||e
var n
return function(){var e=arguments
window.clearTimeout(n)
n=window.setTimeout(function(){s.apply(i,e)},t)}}function b(e){var t=false,s
return function(){if(t===false){s=e()
t=true}return s}}function C(e,t){var s=w(e,function(e){t.trigger("scroll-debounced",e)})
t.on("scroll",function(e){if(u(e.target,t.get())>=0)s(e)})}function S(e){if(e[0]===document.activeElement)return
window.setTimeout(function(){var t=e[0],s=e.val().length,i
e.focus()
if(e.is(":visible")&&t===document.activeElement){if(t.setSelectionRange){t.setSelectionRange(s,s)}else if(t.createTextRange){i=t.createTextRange()
i.collapse(false)
i.select()}}},0)}function y(e){e=$(e)[0]
var t=0
var s=0
if("selectionStart"in e){t=e.selectionStart
s=e.selectionEnd-t}else if("selection"in document){e.focus()
var i=document.selection.createRange()
s=document.selection.createRange().text.length
i.moveStart("character",-e.value.length)
t=i.text.length-s}return{offset:t,length:s}}function x(e){e.preventDefault()
e.stopPropagation()}function E(e){e.preventDefault()
e.stopImmediatePropagation()}function T(e){if(!a){var t=e[0].currentStyle||window.getComputedStyle(e[0],null)
a=$(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:t.fontSize,fontFamily:t.fontFamily,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,textTransform:t.textTransform,whiteSpace:"nowrap"})
a.attr("class","select2-sizer")
$("body").append(a)}a.text(e.val())
return a.width()}function k(e,t,s){var i,n=[],o
i=e.attr("class")
if(i){i=""+i
$(i.split(" ")).each2(function(){if(this.indexOf("select2-")===0){n.push(this)}})}i=t.attr("class")
if(i){i=""+i
$(i.split(" ")).each2(function(){if(this.indexOf("select2-")!==0){o=s(this)
if(o){n.push(this)}}})}e.attr("class",n.join(" "))}function P(e,t,s,i){var n=e.toUpperCase().indexOf(t.toUpperCase()),o=t.length
if(n<0){s.push(i(e))
return}s.push(i(e.substring(0,n)))
s.push("<span class='select2-match'>")
s.push(i(e.substring(n,n+o)))
s.push("</span>")
s.push(i(e.substring(n+o,e.length)))}function I(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"}
return String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})}function O(t){var s,i=0,n=null,o=t.quietMillis||100,a=t.url,r=this
return function(l){window.clearTimeout(s)
s=window.setTimeout(function(){i+=1
var s=i,o=t.data,c=a,h=t.transport||$.fn.select2.ajaxDefaults.transport,u={type:t.type||"GET",cache:t.cache||false,jsonpCallback:t.jsonpCallback||e,dataType:t.dataType||"json"},f=$.extend({},$.fn.select2.ajaxDefaults.params,u)
o=o?o.call(r,l.term,l.page,l.context):null
c=typeof c==="function"?c.call(r,l.term,l.page,l.context):c
if(n){n.abort()}if(t.params){if($.isFunction(t.params)){$.extend(f,t.params.call(r))}else{$.extend(f,t.params)}}$.extend(f,{url:c,dataType:t.dataType,data:o,success:function(e){if(s<i){return}var n=t.results(e,l.page)
l.callback(n)}})
n=h.call(r,f)},o)}}function R(e){var t=e,s,i,n=function(e){return""+e.text}
if($.isArray(t)){i=t
t={results:i}}if($.isFunction(t)===false){i=t
t=function(){return i}}var o=t()
if(o.text){n=o.text
if(!$.isFunction(n)){s=o.text
n=function(e){return e[s]}}}return function(e){var s=e.term,i={results:[]},o
if(s===""){e.callback(t())
return}o=function(t,i){var a,r
t=t[0]
if(t.children){a={}
for(r in t){if(t.hasOwnProperty(r))a[r]=t[r]}a.children=[]
$(t.children).each2(function(e,t){o(t,a.children)})
if(a.children.length||e.matcher(s,n(a),t)){i.push(a)}}else{if(e.matcher(s,n(t),t)){i.push(t)}}}
$(t().results).each2(function(e,t){o(t,i.results)})
e.callback(i)}}function D(t){var s=$.isFunction(t)
return function(i){var n=i.term,o={results:[]}
$(s?t():t).each(function(){var t=this.text!==e,s=t?this.text:this
if(n===""||i.matcher(n,s)){o.results.push(t?this:{id:this,text:this})}})
i.callback(o)}}function A(e,t){if($.isFunction(e))return true
if(!e)return false
throw new Error(t+" must be a function or a falsy value")}function M(e){return $.isFunction(e)?e():e}function F(e){var t=0
$.each(e,function(e,s){if(s.children){t+=F(s.children)}else{t++}})
return t}function H(t,s,i,n){var o=t,a=false,r,l,c,h,u
if(!n.createSearchChoice||!n.tokenSeparators||n.tokenSeparators.length<1)return e
while(true){l=-1
for(c=0,h=n.tokenSeparators.length;c<h;c++){u=n.tokenSeparators[c]
l=t.indexOf(u)
if(l>=0)break}if(l<0)break
r=t.substring(0,l)
t=t.substring(l+u.length)
if(r.length>0){r=n.createSearchChoice.call(this,r,s)
if(r!==e&&r!==null&&n.id(r)!==e&&n.id(r)!==null){a=false
for(c=0,h=s.length;c<h;c++){if(d(n.id(r),n.id(s[c]))){a=true
break}}if(!a)i(r)}}}if(o!==t)return t}function L(e,t){var s=function(){}
s.prototype=new e
s.prototype.constructor=s
s.prototype.parent=e.prototype
s.prototype=$.extend(s.prototype,t)
return s}s=L(Object,{bind:function(e){var t=this
return function(){e.apply(t,arguments)}},init:function(t){var s,i,n=".select2-results",a,r
this.opts=t=this.prepareOpts(t)
this.id=t.id
if(t.element.data("select2")!==e&&t.element.data("select2")!==null){t.element.data("select2").destroy()}this.container=this.createContainer()
this.containerId="s2id_"+(t.element.attr("id")||"autogen"+o())
this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1")
this.container.attr("id",this.containerId)
this.body=b(function(){return t.element.closest("body")})
k(this.container,this.opts.element,this.opts.adaptContainerCssClass)
this.container.css(M(t.containerCss))
this.container.addClass(M(t.containerCssClass))
this.elementTabIndex=this.opts.element.attr("tabindex")
this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container)
this.container.data("select2",this)
this.dropdown=this.container.find(".select2-drop")
this.dropdown.addClass(M(t.dropdownCssClass))
this.dropdown.data("select2",this)
this.results=s=this.container.find(n)
this.search=i=this.container.find("input.select2-input")
this.resultsPage=0
this.context=null
this.initContainer()
v(this.results)
this.dropdown.on("mousemove-filtered touchstart touchmove touchend",n,this.bind(this.highlightUnderEvent))
C(80,this.results)
this.dropdown.on("scroll-debounced",n,this.bind(this.loadMoreIfNeeded))
$(this.container).on("change",".select2-input",function(e){e.stopPropagation()})
$(this.dropdown).on("change",".select2-input",function(e){e.stopPropagation()})
if($.fn.mousewheel){s.mousewheel(function(e,t,i,n){var o=s.scrollTop(),a
if(n>0&&o-n<=0){s.scrollTop(0)
x(e)}else if(n<0&&s.get(0).scrollHeight-s.scrollTop()+n<=s.height()){s.scrollTop(s.get(0).scrollHeight-s.height())
x(e)}})}m(i)
i.on("keyup-change input paste",this.bind(this.updateResults))
i.on("focus",function(){i.addClass("select2-focused")})
i.on("blur",function(){i.removeClass("select2-focused")})
this.dropdown.on("mouseup",n,this.bind(function(e){if($(e.target).closest(".select2-result-selectable").length>0){this.highlightUnderEvent(e)
this.selectHighlighted(e)}}))
this.dropdown.on("click mouseup mousedown",function(e){e.stopPropagation()})
if($.isFunction(this.opts.initSelection)){this.initSelection()
this.monitorSource()}if(t.maximumInputLength!==null){this.search.attr("maxlength",t.maximumInputLength)}var a=t.element.prop("disabled")
if(a===e)a=false
this.enable(!a)
var r=t.element.prop("readonly")
if(r===e)r=false
this.readonly(r)
c=c||f()
this.autofocus=t.element.prop("autofocus")
t.element.prop("autofocus",false)
if(this.autofocus)this.focus()},destroy:function(){var t=this.opts.element,s=t.data("select2")
if(this.propertyObserver){delete this.propertyObserver
this.propertyObserver=null}if(s!==e){s.container.remove()
s.dropdown.remove()
t.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus",this.autofocus||false)
if(this.elementTabIndex){t.attr({tabindex:this.elementTabIndex})}else{t.removeAttr("tabindex")}t.show()}},optionToData:function(e){if(e.is("option")){return{id:e.prop("value"),text:e.text(),element:e.get(),css:e.attr("class"),disabled:e.prop("disabled"),locked:d(e.attr("locked"),"locked")||d(e.data("locked"),true)}}else if(e.is("optgroup")){return{text:e.attr("label"),children:[],element:e.get(),css:e.attr("class")}}},prepareOpts:function(t){var s,i,n,o,a=this
s=t.element
if(s.get(0).tagName.toLowerCase()==="select"){this.select=i=t.element}if(i){$.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in t){throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}})}t=$.extend({},{populateResults:function(s,i,n){var o,r,l,c,h=this.opts.id
o=function(s,i,r){var l,c,u,f,d,p,g,m,v,w
s=t.sortResults(s,i,n)
for(l=0,c=s.length;l<c;l=l+1){u=s[l]
d=u.disabled===true
f=!d&&h(u)!==e
p=u.children&&u.children.length>0
g=$("<li></li>")
g.addClass("select2-results-dept-"+r)
g.addClass("select2-result")
g.addClass(f?"select2-result-selectable":"select2-result-unselectable")
if(d){g.addClass("select2-disabled")}if(p){g.addClass("select2-result-with-children")}g.addClass(a.opts.formatResultCssClass(u))
m=$(document.createElement("div"))
m.addClass("select2-result-label")
w=t.formatResult(u,m,n,a.opts.escapeMarkup)
if(w!==e){m.html(w)}g.append(m)
if(p){v=$("<ul></ul>")
v.addClass("select2-result-sub")
o(u.children,v,r+1)
g.append(v)}g.data("select2-data",u)
i.append(g)}}
o(i,s,0)}},$.fn.select2.defaults,t)
if(typeof t.id!=="function"){n=t.id
t.id=function(e){return e[n]}}if($.isArray(t.element.data("select2Tags"))){if("tags"in t){throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+t.element.attr("id")}t.tags=t.element.data("select2Tags")}if(i){t.query=this.bind(function(t){var i={results:[],more:false},n=t.term,o,r,l
l=function(e,s){var i
if(e.is("option")){if(t.matcher(n,e.text(),e)){s.push(a.optionToData(e))}}else if(e.is("optgroup")){i=a.optionToData(e)
e.children().each2(function(e,t){l(t,i.children)})
if(i.children.length>0){s.push(i)}}}
o=s.children()
if(this.getPlaceholder()!==e&&o.length>0){r=this.getPlaceholderOption()
if(r){o=o.not(r)}}o.each2(function(e,t){l(t,i.results)})
t.callback(i)})
t.id=function(e){return e.id}
t.formatResultCssClass=function(e){return e.css}}else{if(!("query"in t)){if("ajax"in t){o=t.element.data("ajax-url")
if(o&&o.length>0){t.ajax.url=o}t.query=O.call(t.element,t.ajax)}else if("data"in t){t.query=R(t.data)}else if("tags"in t){t.query=D(t.tags)
if(t.createSearchChoice===e){t.createSearchChoice=function(e){return{id:e,text:e}}}if(t.initSelection===e){t.initSelection=function(e,s){var i=[]
$(p(e.val(),t.separator)).each(function(){var e=this,s=this,n=t.tags
if($.isFunction(n))n=n()
$(n).each(function(){if(d(this.id,e)){s=this.text
return false}})
i.push({id:e,text:s})})
s(i)}}}}}if(typeof t.query!=="function"){throw"query function not defined for Select2 "+t.element.attr("id")}return t},monitorSource:function(){var t=this.opts.element,s
t.on("change.select2",this.bind(function(e){if(this.opts.element.data("select2-change-triggered")!==true){this.initSelection()}}))
s=this.bind(function(){var s,i,n=this
var o=t.prop("disabled")
if(o===e)o=false
this.enable(!o)
var i=t.prop("readonly")
if(i===e)i=false
this.readonly(i)
k(this.container,this.opts.element,this.opts.adaptContainerCssClass)
this.container.addClass(M(this.opts.containerCssClass))
k(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass)
this.dropdown.addClass(M(this.opts.dropdownCssClass))})
t.on("propertychange.select2 DOMAttrModified.select2",s)
if(this.mutationCallback===e){this.mutationCallback=function(e){e.forEach(s)}}if(typeof WebKitMutationObserver!=="undefined"){if(this.propertyObserver){delete this.propertyObserver
this.propertyObserver=null}this.propertyObserver=new WebKitMutationObserver(this.mutationCallback)
this.propertyObserver.observe(t.get(0),{attributes:true,subtree:false})}},triggerSelect:function(e){var t=$.Event("select2-selecting",{val:this.id(e),object:e})
this.opts.element.trigger(t)
return!t.isDefaultPrevented()},triggerChange:function(e){e=e||{}
e=$.extend({},e,{type:"change",val:this.val()})
this.opts.element.data("select2-change-triggered",true)
this.opts.element.trigger(e)
this.opts.element.data("select2-change-triggered",false)
this.opts.element.click()
if(this.opts.blurOnChange)this.opts.element.blur()},isInterfaceEnabled:function(){return this.enabledInterface===true},enableInterface:function(){var e=this._enabled&&!this._readonly,t=!e
if(e===this.enabledInterface)return false
this.container.toggleClass("select2-container-disabled",t)
this.close()
this.enabledInterface=e
return true},enable:function(t){if(t===e)t=true
if(this._enabled===t)return false
this._enabled=t
this.opts.element.prop("disabled",!t)
this.enableInterface()
return true},readonly:function(t){if(t===e)t=false
if(this._readonly===t)return false
this._readonly=t
this.opts.element.prop("readonly",t)
this.enableInterface()
return true},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var e=this.dropdown,t=this.container.offset(),s=this.container.outerHeight(false),i=this.container.outerWidth(false),n=e.outerHeight(false),o=$(window).scrollLeft()+$(window).width(),a=$(window).scrollTop()+$(window).height(),r=t.top+s,l=t.left,h=r+n<=a,u=t.top-n>=this.body().scrollTop(),f=e.outerWidth(false),d=l+f<=o,p=e.hasClass("select2-drop-above"),g,m,v,w
if(this.opts.dropdownAutoWidth){w=$(".select2-results",e)[0]
e.addClass("select2-drop-auto-width")
e.css("width","")
f=e.outerWidth(false)+(w.scrollHeight===w.clientHeight?0:c.width)
f>i?i=f:f=i
d=l+f<=o}else{this.container.removeClass("select2-drop-auto-width")}if(this.body().css("position")!=="static"){g=this.body().offset()
r-=g.top
l-=g.left}if(p){m=true
if(!u&&h)m=false}else{m=false
if(!h&&u)m=true}if(!d){l=t.left+i-f}if(m){r=t.top-n
this.container.addClass("select2-drop-above")
e.addClass("select2-drop-above")}else{this.container.removeClass("select2-drop-above")
e.removeClass("select2-drop-above")}v=$.extend({top:r,left:l,width:i},M(this.opts.dropdownCss))
e.css(v)},shouldOpen:function(){var e
if(this.opened())return false
if(this._enabled===false||this._readonly===true)return false
e=$.Event("select2-opening")
this.opts.element.trigger(e)
return!e.isDefaultPrevented()},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above")
this.dropdown.removeClass("select2-drop-above")},open:function(){if(!this.shouldOpen())return false
this.opening()
return true},opening:function(){var e=this.containerId,t="scroll."+e,s="resize."+e,i="orientationchange."+e,n,o
this.container.addClass("select2-dropdown-open").addClass("select2-container-active")
this.clearDropdownAlignmentPreference()
if(this.dropdown[0]!==this.body().children().last()[0]){this.dropdown.detach().appendTo(this.body())}n=$("#select2-drop-mask")
if(n.length==0){n=$(document.createElement("div"))
n.attr("id","select2-drop-mask").attr("class","select2-drop-mask")
n.hide()
n.appendTo(this.body())
n.on("mousedown touchstart click",function(e){var t=$("#select2-drop"),s
if(t.length>0){s=t.data("select2")
if(s.opts.selectOnBlur){s.selectHighlighted({noFocus:true})}s.close()
e.preventDefault()
e.stopPropagation()}})}if(this.dropdown.prev()[0]!==n[0]){this.dropdown.before(n)}$("#select2-drop").removeAttr("id")
this.dropdown.attr("id","select2-drop")
o=r()
n.css(o).show()
this.dropdown.show()
this.positionDropdown()
this.dropdown.addClass("select2-drop-active")
var a=this
this.container.parents().add(window).each(function(){$(this).on(s+" "+t+" "+i,function(e){var t=r()
$("#select2-drop-mask").css(t)
a.positionDropdown()})})
function r(){return{width:Math.max(document.documentElement.scrollWidth,$(window).width()),height:Math.max(document.documentElement.scrollHeight,$(window).height())}}},close:function(){if(!this.opened())return
var e=this.containerId,t="scroll."+e,s="resize."+e,i="orientationchange."+e
this.container.parents().add(window).each(function(){$(this).off(t).off(s).off(i)})
this.clearDropdownAlignmentPreference()
$("#select2-drop-mask").hide()
this.dropdown.removeAttr("id")
this.dropdown.hide()
this.container.removeClass("select2-dropdown-open")
this.results.empty()
this.clearSearch()
this.search.removeClass("select2-active")
this.opts.element.trigger($.Event("select2-close"))},externalSearch:function(e){this.open()
this.search.val(e)
this.updateResults(false)},clearSearch:function(){},getMaximumSelectionSize:function(){return M(this.opts.maximumSelectionSize)},ensureHighlightVisible:function(){var e=this.results,t,s,i,n,o,a,r
s=this.highlight()
if(s<0)return
if(s==0){e.scrollTop(0)
return}t=this.findHighlightableChoices().find(".select2-result-label")
i=$(t[s])
n=i.offset().top+i.outerHeight(true)
if(s===t.length-1){r=e.find("li.select2-more-results")
if(r.length>0){n=r.offset().top+r.outerHeight(true)}}o=e.offset().top+e.outerHeight(true)
if(n>o){e.scrollTop(e.scrollTop()+(n-o))}a=i.offset().top-e.offset().top
if(a<0&&i.css("display")!="none"){e.scrollTop(e.scrollTop()+a)}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)")},moveHighlight:function(e){var t=this.findHighlightableChoices(),s=this.highlight()
while(s>-1&&s<t.length){s+=e
var i=$(t[s])
if(i.hasClass("select2-result-selectable")&&!i.hasClass("select2-disabled")&&!i.hasClass("select2-selected")){this.highlight(s)
break}}},highlight:function(e){var t=this.findHighlightableChoices(),s,i
if(arguments.length===0){return u(t.filter(".select2-highlighted")[0],t.get())}if(e>=t.length)e=t.length-1
if(e<0)e=0
this.results.find(".select2-highlighted").removeClass("select2-highlighted")
s=$(t[e])
s.addClass("select2-highlighted")
this.ensureHighlightVisible()
i=s.data("select2-data")
if(i){this.opts.element.trigger({type:"select2-highlight",val:this.id(i),choice:i})}},countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(e){var t=$(e.target).closest(".select2-result-selectable")
if(t.length>0&&!t.is(".select2-highlighted")){var s=this.findHighlightableChoices()
this.highlight(s.index(t))}else if(t.length==0){this.results.find(".select2-highlighted").removeClass("select2-highlighted")}},loadMoreIfNeeded:function(){var e=this.results,t=e.find("li.select2-more-results"),s,i=-1,n=this.resultsPage+1,o=this,a=this.search.val(),r=this.context
if(t.length===0)return
s=t.offset().top-e.offset().top-e.height()
if(s<=this.opts.loadMorePadding){t.addClass("select2-active")
this.opts.query({element:this.opts.element,term:a,page:n,context:r,matcher:this.opts.matcher,callback:this.bind(function(s){if(!o.opened())return
o.opts.populateResults.call(this,e,s.results,{term:a,page:n,context:r})
o.postprocessResults(s,false,false)
if(s.more===true){t.detach().appendTo(e).text(o.opts.formatLoadMore(n+1))
window.setTimeout(function(){o.loadMoreIfNeeded()},10)}else{t.remove()}o.positionDropdown()
o.resultsPage=n
o.context=s.context})})}},tokenize:function(){},updateResults:function(t){var s=this.search,i=this.results,n=this.opts,o,a=this,r,l=s.val(),c=$.data(this.container,"select2-last-term")
if(t!==true&&c&&d(l,c))return
$.data(this.container,"select2-last-term",l)
if(t!==true&&(this.showSearchInput===false||!this.opened())){return}function h(){s.removeClass("select2-active")
a.positionDropdown()}function u(e){i.html(e)
h()}var f=this.getMaximumSelectionSize()
if(f>=1){o=this.data()
if($.isArray(o)&&o.length>=f&&A(n.formatSelectionTooBig,"formatSelectionTooBig")){u("<li class='select2-selection-limit'>"+n.formatSelectionTooBig(f)+"</li>")
return}}if(s.val().length<n.minimumInputLength){if(A(n.formatInputTooShort,"formatInputTooShort")){u("<li class='select2-no-results'>"+n.formatInputTooShort(s.val(),n.minimumInputLength)+"</li>")}else{u("")}if(t&&this.showSearch)this.showSearch(true)
return}if(n.maximumInputLength&&s.val().length>n.maximumInputLength){if(A(n.formatInputTooLong,"formatInputTooLong")){u("<li class='select2-no-results'>"+n.formatInputTooLong(s.val(),n.maximumInputLength)+"</li>")}else{u("")}return}if(n.formatSearching&&this.findHighlightableChoices().length===0){u("<li class='select2-searching'>"+n.formatSearching()+"</li>")}s.addClass("select2-active")
r=this.tokenize()
if(r!=e&&r!=null){s.val(r)}this.resultsPage=1
n.query({element:n.element,term:s.val(),page:this.resultsPage,context:null,matcher:n.matcher,callback:this.bind(function(o){var r
if(!this.opened()){this.search.removeClass("select2-active")
return}this.context=o.context===e?null:o.context
if(this.opts.createSearchChoice&&s.val()!==""){r=this.opts.createSearchChoice.call(a,s.val(),o.results)
if(r!==e&&r!==null&&a.id(r)!==e&&a.id(r)!==null){if($(o.results).filter(function(){return d(a.id(this),a.id(r))}).length===0){o.results.unshift(r)}}}if(o.results.length===0&&A(n.formatNoMatches,"formatNoMatches")){u("<li class='select2-no-results'>"+n.formatNoMatches(s.val())+"</li>")
return}i.empty()
a.opts.populateResults.call(this,i,o.results,{term:s.val(),page:this.resultsPage,context:null})
if(o.more===true&&A(n.formatLoadMore,"formatLoadMore")){i.append("<li class='select2-more-results'>"+a.opts.escapeMarkup(n.formatLoadMore(this.resultsPage))+"</li>")
window.setTimeout(function(){a.loadMoreIfNeeded()},10)}this.postprocessResults(o,t)
h()
this.opts.element.trigger({type:"select2-loaded",items:o})})})},cancel:function(){this.close()},blur:function(){if(this.opts.selectOnBlur)this.selectHighlighted({noFocus:true})
this.close()
this.container.removeClass("select2-container-active")
if(this.search[0]===document.activeElement){this.search.blur()}this.clearSearch()
this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){S(this.search)},selectHighlighted:function(e){var t=this.highlight(),s=this.results.find(".select2-highlighted"),i=s.closest(".select2-result").data("select2-data")
if(i){this.highlight(t)
this.onSelect(i,e)}else if(e&&e.noFocus){this.close()}},getPlaceholder:function(){var t
return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((t=this.getPlaceholderOption())!==e?t.text():e)},getPlaceholderOption:function(){if(this.select){var t=this.select.children().first()
if(this.opts.placeholderOption!==e){return this.opts.placeholderOption==="first"&&t||typeof this.opts.placeholderOption==="function"&&this.opts.placeholderOption(this.select)}else if(t.text()===""&&t.val()===""){return t}}},initContainerWidth:function(){function t(){var t,s,i,n,o
if(this.opts.width==="off"){return null}else if(this.opts.width==="element"){return this.opts.element.outerWidth(false)===0?"auto":this.opts.element.outerWidth(false)+"px"}else if(this.opts.width==="copy"||this.opts.width==="resolve"){t=this.opts.element.attr("style")
if(t!==e){s=t.split(";")
for(n=0,o=s.length;n<o;n=n+1){i=s[n].replace(/\s/g,"").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i)
if(i!==null&&i.length>=1)return i[1]}}if(this.opts.width==="resolve"){t=this.opts.element.css("width")
if(t.indexOf("%")>0)return t
return this.opts.element.outerWidth(false)===0?"auto":this.opts.element.outerWidth(false)+"px"}return null}else if($.isFunction(this.opts.width)){return this.opts.width()}else{return this.opts.width}}var s=t.call(this)
if(s!==null){this.container.css("width",s)}}})
i=L(s,{createContainer:function(){var e=$(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow'><b></b></span>","</a>","<input class='select2-focusser select2-offscreen' type='text'/>","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>","   </div>","   <ul class='select2-results'>","   </ul>","</div>"].join(""))
return e},enableInterface:function(){if(this.parent.enableInterface.apply(this,arguments)){this.focusser.prop("disabled",!this.isInterfaceEnabled())}},opening:function(){var e,t,s
if(this.opts.minimumResultsForSearch>=0){this.showSearch(true)}this.parent.opening.apply(this,arguments)
if(this.showSearchInput!==false){this.search.val(this.focusser.val())}this.search.focus()
e=this.search.get(0)
if(e.createTextRange){t=e.createTextRange()
t.collapse(false)
t.select()}else if(e.setSelectionRange){s=this.search.val().length
e.setSelectionRange(s,s)}this.focusser.prop("disabled",true).val("")
this.updateResults(true)
this.opts.element.trigger($.Event("select2-open"))},close:function(){if(!this.opened())return
this.parent.close.apply(this,arguments)
this.focusser.removeAttr("disabled")
this.focusser.focus()},focus:function(){if(this.opened()){this.close()}else{this.focusser.removeAttr("disabled")
this.focusser.focus()}},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments)
this.focusser.removeAttr("disabled")
this.focusser.focus()},initContainer:function(){var e,s=this.container,i=this.dropdown
if(this.opts.minimumResultsForSearch<0){this.showSearch(false)}else{this.showSearch(true)}this.selection=e=s.find(".select2-choice")
this.focusser=s.find(".select2-focusser")
this.focusser.attr("id","s2id_autogen"+o())
$("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.focusser.attr("id"))
this.focusser.attr("tabindex",this.elementTabIndex)
this.search.on("keydown",this.bind(function(e){if(!this.isInterfaceEnabled())return
if(e.which===t.PAGE_UP||e.which===t.PAGE_DOWN){x(e)
return}switch(e.which){case t.UP:case t.DOWN:this.moveHighlight(e.which===t.UP?-1:1)
x(e)
return
case t.ENTER:this.selectHighlighted()
x(e)
return
case t.TAB:this.selectHighlighted({noFocus:true})
return
case t.ESC:this.cancel(e)
x(e)
return}}))
this.search.on("blur",this.bind(function(e){if(document.activeElement===this.body().get(0)){window.setTimeout(this.bind(function(){this.search.focus()}),0)}}))
this.focusser.on("keydown",this.bind(function(e){if(!this.isInterfaceEnabled())return
if(e.which===t.TAB||t.isControl(e)||t.isFunctionKey(e)||e.which===t.ESC){return}if(this.opts.openOnEnter===false&&e.which===t.ENTER){x(e)
return}if(e.which==t.DOWN||e.which==t.UP||e.which==t.ENTER&&this.opts.openOnEnter){if(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey)return
this.open()
x(e)
return}if(e.which==t.DELETE||e.which==t.BACKSPACE){if(this.opts.allowClear){this.clear()}x(e)
return}}))
m(this.focusser)
this.focusser.on("keyup-change input",this.bind(function(e){if(this.opts.minimumResultsForSearch>=0){e.stopPropagation()
if(this.opened())return
this.open()}}))
e.on("mousedown","abbr",this.bind(function(e){if(!this.isInterfaceEnabled())return
this.clear()
E(e)
this.close()
this.selection.focus()}))
e.on("mousedown",this.bind(function(e){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"))}if(this.opened()){this.close()}else if(this.isInterfaceEnabled()){this.open()}x(e)}))
i.on("mousedown",this.bind(function(){this.search.focus()}))
e.on("focus",this.bind(function(e){x(e)}))
this.focusser.on("focus",this.bind(function(){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"))}this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){if(!this.opened()){this.container.removeClass("select2-container-active")
this.opts.element.trigger($.Event("select2-blur"))}}))
this.search.on("focus",this.bind(function(){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"))}this.container.addClass("select2-container-active")}))
this.initContainerWidth()
this.opts.element.addClass("select2-offscreen")
this.setPlaceholder()},clear:function(e){var t=this.selection.data("select2-data")
if(t){var s=this.getPlaceholderOption()
this.opts.element.val(s?s.val():"")
this.selection.find(".select2-chosen").empty()
this.selection.removeData("select2-data")
this.setPlaceholder()
if(e!==false){this.opts.element.trigger({type:"select2-removed",val:this.id(t),choice:t})
this.triggerChange({removed:t})}}},initSelection:function(){var t
if(this.isPlaceholderOptionSelected()){this.updateSelection([])
this.close()
this.setPlaceholder()}else{var s=this
this.opts.initSelection.call(null,this.opts.element,function(t){if(t!==e&&t!==null){s.updateSelection(t)
s.close()
s.setPlaceholder()}})}},isPlaceholderOptionSelected:function(){var t
return(t=this.getPlaceholderOption())!==e&&t.is(":selected")||this.opts.element.val()===""||this.opts.element.val()===e||this.opts.element.val()===null},prepareOpts:function(){var e=this.parent.prepareOpts.apply(this,arguments),t=this
if(e.element.get(0).tagName.toLowerCase()==="select"){e.initSelection=function(e,s){var i=e.find(":selected")
s(t.optionToData(i))}}else if("data"in e){e.initSelection=e.initSelection||function(t,s){var i=t.val()
var n=null
e.query({matcher:function(t,s,o){var a=d(i,e.id(o))
if(a){n=o}return a},callback:!$.isFunction(s)?$.noop:function(){s(n)}})}}return e},getPlaceholder:function(){if(this.select){if(this.getPlaceholderOption()===e){return e}}return this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var t=this.getPlaceholder()
if(this.isPlaceholderOptionSelected()&&t!==e){if(this.select&&this.getPlaceholderOption()===e)return
this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(t))
this.selection.addClass("select2-default")
this.container.removeClass("select2-allowclear")}},postprocessResults:function(e,t,s){var i=0,n=this,o=true
this.findHighlightableChoices().each2(function(e,t){if(d(n.id(t.data("select2-data")),n.opts.element.val())){i=e
return false}})
if(s!==false){if(t===true&&i>=0){this.highlight(i)}else{this.highlight(0)}}if(t===true){var a=this.opts.minimumResultsForSearch
if(a>=0){this.showSearch(F(e.results)>=a)}}},showSearch:function(e){if(this.showSearchInput===e)return
this.showSearchInput=e
this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!e)
this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!e)
$(this.dropdown,this.container).toggleClass("select2-with-searchbox",e)},onSelect:function(e,t){if(!this.triggerSelect(e)){return}var s=this.opts.element.val(),i=this.data()
this.opts.element.val(this.id(e))
this.updateSelection(e)
this.opts.element.trigger({type:"select2-selected",val:this.id(e),choice:e})
this.close()
if(!t||!t.noFocus)this.selection.focus()
if(!d(s,this.id(e))){this.triggerChange({added:e,removed:i})}},updateSelection:function(t){var s=this.selection.find(".select2-chosen"),i,n
this.selection.data("select2-data",t)
s.empty()
i=this.opts.formatSelection(t,s,this.opts.escapeMarkup)
if(i!==e){s.append(i)}n=this.opts.formatSelectionCssClass(t,s)
if(n!==e){s.addClass(n)}this.selection.removeClass("select2-default")
if(this.opts.allowClear&&this.getPlaceholder()!==e){this.container.addClass("select2-allowclear")}},val:function(){var t,s=false,i=null,n=this,o=this.data()
if(arguments.length===0){return this.opts.element.val()}t=arguments[0]
if(arguments.length>1){s=arguments[1]}if(this.select){this.select.val(t).find(":selected").each2(function(e,t){i=n.optionToData(t)
return false})
this.updateSelection(i)
this.setPlaceholder()
if(s){this.triggerChange({added:i,removed:o})}}else{if(!t&&t!==0){this.clear(s)
return}if(this.opts.initSelection===e){throw new Error("cannot call val() if initSelection() is not defined")}this.opts.element.val(t)
this.opts.initSelection(this.opts.element,function(e){n.opts.element.val(!e?"":n.id(e))
n.updateSelection(e)
n.setPlaceholder()
if(s){n.triggerChange({added:e,removed:o})}})}},clearSearch:function(){this.search.val("")
this.focusser.val("")},data:function(t,s){var i
if(arguments.length===0){i=this.selection.data("select2-data")
if(i==e)i=null
return i}else{if(!t||t===""){this.clear(s)}else{i=this.data()
this.opts.element.val(!t?"":this.id(t))
this.updateSelection(t)
if(s){this.triggerChange({added:t,removed:i})}}}}})
n=L(s,{createContainer:function(){var e=$(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <input type='text' autocomplete='off' autocorrect='off' autocapitilize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""))
return e},prepareOpts:function(){var e=this.parent.prepareOpts.apply(this,arguments),t=this
if(e.element.get(0).tagName.toLowerCase()==="select"){e.initSelection=function(e,s){var i=[]
e.find(":selected").each2(function(e,s){i.push(t.optionToData(s))})
s(i)}}else if("data"in e){e.initSelection=e.initSelection||function(t,s){var i=p(t.val(),e.separator)
var n=[]
e.query({matcher:function(t,s,o){var a=$.grep(i,function(t){return d(t,e.id(o))}).length
if(a){n.push(o)}return a},callback:!$.isFunction(s)?$.noop:function(){var t=[]
for(var o=0;o<i.length;o++){var a=i[o]
for(var r=0;r<n.length;r++){var l=n[r]
if(d(a,e.id(l))){t.push(l)
n.splice(r,1)
break}}}s(t)}})}}return e},selectChoice:function(e){var t=this.container.find(".select2-search-choice-focus")
if(t.length&&e&&e[0]==t[0]){}else{if(t.length){this.opts.element.trigger("choice-deselected",t)}t.removeClass("select2-search-choice-focus")
if(e&&e.length){this.close()
e.addClass("select2-search-choice-focus")
this.opts.element.trigger("choice-selected",e)}}},initContainer:function(){var e=".select2-choices",s
this.searchContainer=this.container.find(".select2-search-field")
this.selection=s=this.container.find(e)
var i=this
this.selection.on("mousedown",".select2-search-choice",function(e){i.search[0].focus()
i.selectChoice($(this))})
this.search.attr("id","s2id_autogen"+o())
$("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.search.attr("id"))
this.search.on("input paste",this.bind(function(){if(!this.isInterfaceEnabled())return
if(!this.opened()){this.open()}}))
this.search.attr("tabindex",this.elementTabIndex)
this.keydowns=0
this.search.on("keydown",this.bind(function(e){if(!this.isInterfaceEnabled())return;++this.keydowns
var i=s.find(".select2-search-choice-focus")
var n=i.prev(".select2-search-choice:not(.select2-locked)")
var o=i.next(".select2-search-choice:not(.select2-locked)")
var a=y(this.search)
if(i.length&&(e.which==t.LEFT||e.which==t.RIGHT||e.which==t.BACKSPACE||e.which==t.DELETE||e.which==t.ENTER)){var r=i
if(e.which==t.LEFT&&n.length){r=n}else if(e.which==t.RIGHT){r=o.length?o:null}else if(e.which===t.BACKSPACE){this.unselect(i.first())
this.search.width(10)
r=n.length?n:o}else if(e.which==t.DELETE){this.unselect(i.first())
this.search.width(10)
r=o.length?o:null}else if(e.which==t.ENTER){r=null}this.selectChoice(r)
x(e)
if(!r||!r.length){this.open()}return}else if((e.which===t.BACKSPACE&&this.keydowns==1||e.which==t.LEFT)&&(a.offset==0&&!a.length)){this.selectChoice(s.find(".select2-search-choice:not(.select2-locked)").last())
x(e)
return}else{this.selectChoice(null)}if(this.opened()){switch(e.which){case t.UP:case t.DOWN:this.moveHighlight(e.which===t.UP?-1:1)
x(e)
return
case t.ENTER:this.selectHighlighted()
x(e)
return
case t.TAB:this.selectHighlighted({noFocus:true})
this.close()
return
case t.ESC:this.cancel(e)
x(e)
return}}if(e.which===t.TAB||t.isControl(e)||t.isFunctionKey(e)||e.which===t.BACKSPACE||e.which===t.ESC){return}if(e.which===t.ENTER){if(this.opts.openOnEnter===false){return}else if(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey){return}}this.open()
if(e.which===t.PAGE_UP||e.which===t.PAGE_DOWN){x(e)}if(e.which===t.ENTER){x(e)}}))
this.search.on("keyup",this.bind(function(e){this.keydowns=0
this.resizeSearch()}))
this.search.on("blur",this.bind(function(e){this.container.removeClass("select2-container-active")
this.search.removeClass("select2-focused")
this.selectChoice(null)
if(!this.opened())this.clearSearch()
e.stopImmediatePropagation()
this.opts.element.trigger($.Event("select2-blur"))}))
this.container.on("click",e,this.bind(function(e){if(!this.isInterfaceEnabled())return
if($(e.target).closest(".select2-search-choice").length>0){return}this.selectChoice(null)
this.clearPlaceholder()
if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"))}this.open()
this.focusSearch()
e.preventDefault()}))
this.container.on("focus",e,this.bind(function(){if(!this.isInterfaceEnabled())return
if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"))}this.container.addClass("select2-container-active")
this.dropdown.addClass("select2-drop-active")
this.clearPlaceholder()}))
this.initContainerWidth()
this.opts.element.addClass("select2-offscreen")
this.clearSearch()},enableInterface:function(){if(this.parent.enableInterface.apply(this,arguments)){this.search.prop("disabled",!this.isInterfaceEnabled())}},initSelection:function(){var t
if(this.opts.element.val()===""&&this.opts.element.text()===""){this.updateSelection([])
this.close()
this.clearSearch()}if(this.select||this.opts.element.val()!==""){var s=this
this.opts.initSelection.call(null,this.opts.element,function(t){if(t!==e&&t!==null){s.updateSelection(t)
s.close()
s.clearSearch()}})}},clearSearch:function(){var t=this.getPlaceholder(),s=this.getMaxSearchWidth()
if(t!==e&&this.getVal().length===0&&this.search.hasClass("select2-focused")===false){this.search.val(t).addClass("select2-default")
this.search.width(s>0?s:this.container.css("width"))}else{this.search.val("").width(10)}},clearPlaceholder:function(){if(this.search.hasClass("select2-default")){this.search.val("").removeClass("select2-default")}},opening:function(){this.clearPlaceholder()
this.resizeSearch()
this.parent.opening.apply(this,arguments)
this.focusSearch()
this.updateResults(true)
this.search.focus()
this.opts.element.trigger($.Event("select2-open"))},close:function(){if(!this.opened())return
this.parent.close.apply(this,arguments)},focus:function(){this.close()
this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(e){var t=[],s=[],i=this
$(e).each(function(){if(u(i.id(this),t)<0){t.push(i.id(this))
s.push(this)}})
e=s
this.selection.find(".select2-search-choice").remove()
$(e).each(function(){i.addSelectedChoice(this)})
i.postprocessResults()},tokenize:function(){var t=this.search.val()
t=this.opts.tokenizer.call(this,t,this.data(),this.bind(this.onSelect),this.opts)
if(t!=null&&t!=e){this.search.val(t)
if(t.length>0){this.open()}}},onSelect:function(e,t){if(!this.triggerSelect(e)){return}this.addSelectedChoice(e)
this.opts.element.trigger({type:"selected",val:this.id(e),choice:e})
if(this.select||!this.opts.closeOnSelect)this.postprocessResults()
if(this.opts.closeOnSelect){this.close()
this.search.width(10)}else{if(this.countSelectableResults()>0){this.search.width(10)
this.resizeSearch()
if(this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()){this.updateResults(true)}this.positionDropdown()}else{this.close()
this.search.width(10)}}this.triggerChange({added:e})
if(!t||!t.noFocus)this.focusSearch()},cancel:function(){this.close()
this.focusSearch()},addSelectedChoice:function(t){var s=!t.locked,i=$("<li class='select2-search-choice'>"+"    <div></div>"+"    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a>"+"</li>"),n=$("<li class='select2-search-choice select2-locked'>"+"<div></div>"+"</li>")
var o=s?i:n,a=this.id(t),r=this.getVal(),l,c
l=this.opts.formatSelection(t,o.find("div"),this.opts.escapeMarkup)
if(l!=e){o.find("div").replaceWith("<div>"+l+"</div>")}c=this.opts.formatSelectionCssClass(t,o.find("div"))
if(c!=e){o.addClass(c)}if(s){o.find(".select2-search-choice-close").on("mousedown",x).on("click dblclick",this.bind(function(e){if(!this.isInterfaceEnabled())return
$(e.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){this.unselect($(e.target))
this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
this.close()
this.focusSearch()})).dequeue()
x(e)})).on("focus",this.bind(function(){if(!this.isInterfaceEnabled())return
this.container.addClass("select2-container-active")
this.dropdown.addClass("select2-drop-active")}))}o.data("select2-data",t)
o.insertBefore(this.searchContainer)
r.push(a)
this.setVal(r)},unselect:function(e){var t=this.getVal(),s,i
e=e.closest(".select2-search-choice")
if(e.length===0){throw"Invalid argument: "+e+". Must be .select2-search-choice"}s=e.data("select2-data")
if(!s){return}i=u(this.id(s),t)
if(i>=0){t.splice(i,1)
this.setVal(t)
if(this.select)this.postprocessResults()}e.remove()
this.opts.element.trigger({type:"removed",val:this.id(s),choice:s})
this.triggerChange({removed:s})},postprocessResults:function(e,t,s){var i=this.getVal(),n=this.results.find(".select2-result"),o=this.results.find(".select2-result-with-children"),a=this
n.each2(function(e,t){var s=a.id(t.data("select2-data"))
if(u(s,i)>=0){t.addClass("select2-selected")
t.find(".select2-result-selectable").addClass("select2-selected")}})
o.each2(function(e,t){if(!t.is(".select2-result-selectable")&&t.find(".select2-result-selectable:not(.select2-selected)").length===0){t.addClass("select2-selected")}})
if(this.highlight()==-1&&s!==false){a.highlight(0)}if(!this.opts.createSearchChoice&&!n.filter(".select2-result:not(.select2-selected)").length>0){if(!e||e&&!e.more&&this.results.find(".select2-no-results").length===0){if(A(a.opts.formatNoMatches,"formatNoMatches")){this.results.append("<li class='select2-no-results'>"+a.opts.formatNoMatches(a.search.val())+"</li>")}}}},getMaxSearchWidth:function(){return this.selection.width()-g(this.search)},resizeSearch:function(){var e,t,s,i,n,o=g(this.search)
e=T(this.search)+10
t=this.search.offset().left
s=this.selection.width()
i=this.selection.offset().left
n=s-(t-i)-o
if(n<e){n=s-o}if(n<40){n=s-o}if(n<=0){n=e}this.search.width(n)},getVal:function(){var e
if(this.select){e=this.select.val()
return e===null?[]:e}else{e=this.opts.element.val()
return p(e,this.opts.separator)}},setVal:function(e){var t
if(this.select){this.select.val(e)}else{t=[]
$(e).each(function(){if(u(this,t)<0)t.push(this)})
this.opts.element.val(t.length===0?"":t.join(this.opts.separator))}},buildChangeDetails:function(e,t){var t=t.slice(0),e=e.slice(0)
for(var s=0;s<t.length;s++){for(var i=0;i<e.length;i++){if(d(this.opts.id(t[s]),this.opts.id(e[i]))){t.splice(s,1)
s--
e.splice(i,1)
i--}}}return{added:t,removed:e}},val:function(t,s){var i,n=this,o
if(arguments.length===0){return this.getVal()}i=this.data()
if(!i.length)i=[]
if(!t&&t!==0){this.opts.element.val("")
this.updateSelection([])
this.clearSearch()
if(s){this.triggerChange({added:this.data(),removed:i})}return}this.setVal(t)
if(this.select){this.opts.initSelection(this.select,this.bind(this.updateSelection))
if(s){this.triggerChange(this.buildChangeDetails(i,this.data()))}}else{if(this.opts.initSelection===e){throw new Error("val() cannot be called if initSelection() is not defined")}this.opts.initSelection(this.opts.element,function(e){var t=$.map(e,n.id)
n.setVal(t)
n.updateSelection(e)
n.clearSearch()
if(s){n.triggerChange(this.buildChangeDetails(i,this.data()))}})}this.clearSearch()},onSortStart:function(){if(this.select){throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.")}this.search.width(0)
this.searchContainer.hide()},onSortEnd:function(){var e=[],t=this
this.searchContainer.show()
this.searchContainer.appendTo(this.searchContainer.parent())
this.resizeSearch()
this.selection.find(".select2-search-choice").each(function(){e.push(t.opts.id($(this).data("select2-data")))})
this.setVal(e)
this.triggerChange()},data:function(e,t){var s=this,i,n
if(arguments.length===0){return this.selection.find(".select2-search-choice").map(function(){return $(this).data("select2-data")}).get()}else{n=this.data()
if(!e){e=[]}i=$.map(e,function(e){return s.opts.id(e)})
this.setVal(i)
this.updateSelection(e)
this.clearSearch()
if(t){this.triggerChange(this.buildChangeDetails(n,this.data()))}}}})
$.fn.select2=function(){var t=Array.prototype.slice.call(arguments,0),s,o,a,r,l,c=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","readonly","positionDropdown","data","search"],h=["val","opened","isFocused","container","data"],f={search:"externalSearch"}
this.each(function(){if(t.length===0||typeof t[0]==="object"){s=t.length===0?{}:$.extend({},t[0])
s.element=$(this)
if(s.element.get(0).tagName.toLowerCase()==="select"){l=s.element.prop("multiple")}else{l=s.multiple||false
if("tags"in s){s.multiple=l=true}}o=l?new n:new i
o.init(s)}else if(typeof t[0]==="string"){if(u(t[0],c)<0){throw"Unknown method: "+t[0]}r=e
o=$(this).data("select2")
if(o===e)return
a=t[0]
if(a==="container"){r=o.container}else if(a==="dropdown"){r=o.dropdown}else{if(f[a])a=f[a]
r=o[a].apply(o,t.slice(1))}if(u(t[0],h)>=0){return false}}else{throw"Invalid arguments to select2 plugin: "+t}})
return r===e?this:r}
$.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:true,openOnEnter:true,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(e,t,s,i){var n=[]
P(e.text,s.term,n,i)
return n.join("")},formatSelection:function(t,s,i){return t?i(t.text):e},sortResults:function(e,t,s){return e},formatResultCssClass:function(t){return e},formatSelectionCssClass:function(t,s){return e},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(e,t){var s=t-e.length
return"Please enter "+s+" more character"+(s==1?"":"s")},formatInputTooLong:function(e,t){var s=e.length-t
return"Please delete "+s+" character"+(s==1?"":"s")},formatSelectionTooBig:function(e){return"You can only select "+e+" item"+(e==1?"":"s")},formatLoadMore:function(e){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(e){return e.id},matcher:function(e,t){return(""+t).toUpperCase().indexOf((""+e).toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:H,escapeMarkup:I,blurOnChange:false,selectOnBlur:false,adaptContainerCssClass:function(e){return e},adaptDropdownCssClass:function(e){return null}}
$.fn.select2.ajaxDefaults={transport:$.ajax,params:{type:"GET",cache:false,dataType:"json"}}
window.Select2={query:{ajax:O,local:R,tags:D},util:{debounce:w,markMatch:P,escapeMarkup:I},"class":{"abstract":s,single:i,multi:n}}})(jQuery)
__KA_module.exports = Select2;
this.Select2 = Select2;
});
