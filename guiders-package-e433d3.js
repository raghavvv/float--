KAdefine("third_party/javascript-khansrc/Guiders-JS/guiders.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
window.guiders=function($){var e={}
e.ButtonAction={NEXT:0,CLOSE:1}
e._defaultSettings={attachTo:null,buttons:[{action:e.ButtonAction.CLOSE,text:"Close"}],buttonCustomHTML:"",classString:null,description:"",highlight:null,isHashable:true,offset:{top:null,left:null},onShow:null,overlay:false,position:0,title:"Sample title goes here",width:400,xButton:false}
e._htmlSkeleton=["<div class='guider' role='dialog' tabindex='-1' ","aria-labelledby='guider_title'>","  <div class='guider_content'>","    <div id='guider_title' class='guider_title'></div>","    <div class='guider_close'></div>","    <div class='guider_description'></div>","    <div class='guider_buttons'>","    </div>","  </div>","  <div class='guider_arrow'>","  </div>","</div>"].join("")
e._arrowSize=42
e._currentGuiderID=null
e._guiders={}
e._lastCreatedGuiderID=null
e._zIndexForHighlight=1031
e._addButtons=function(i){var t=i.elem.find(".guider_buttons")
if(i.buttons===null||i.buttons.length===0){t.remove()
return}for(var r=i.buttons.length-1;r>=0;r--){var o=i.buttons[r]
var n=$("<a></a>",{href:o.href||"#","class":"ka_guider_button",role:"button",text:o.text})
if(typeof o.classString!=="undefined"&&o.classString!==null){n.addClass(o.classString)}t.append(n)
if(o.onclick){n.bind("click",o.onclick)}else if(!o.onclick&&o.action===e.ButtonAction.CLOSE){n.bind("click",function(){e.hideAll()})}else if(!o.onclick&&o.action===e.ButtonAction.NEXT){n.bind("click",function(){e.next()})}}if(i.buttonCustomHTML!==""){var d=$(i.buttonCustomHTML)
i.elem.find(".guider_buttons").append(d)}if(i.buttons.length==0){t.remove()}}
e._addXButton=function(i){var t=i.elem.find(".guider_close")
var r=$("<div></div>",{href:"#","class":"x_button",role:"button"})
t.append(r)
r.click(function(){e.hideAll()})}
e._attach=function(i){if(i===null){return}var t=i.elem.innerHeight()
var r=i.elem.innerWidth()
if(i.position===0||i.attachTo===null){i.elem.css("position","absolute")
i.elem.css("top",($(window).height()-t)/3+$(window).scrollTop()+"px")
i.elem.css("left",($(window).width()-r)/2+$(window).scrollLeft()+"px")
return}i.attachTo=$(i.attachTo)
var o=i.attachTo.offset()
var n=i.attachTo.innerHeight()
var d=i.attachTo.innerWidth()
var l=o.top
var u=o.left
var a=.9*e._arrowSize
var s={1:[-a-t,d-r],2:[0,a+d],3:[n/2-t/2,a+d],4:[n-t,a+d],5:[a+n,d-r],6:[a+n,d/2-r/2],7:[a+n,0],8:[n-t,-r-a],9:[n/2-t/2,-r-a],10:[0,-r-a],11:[-a-t,0],12:[-a-t,d/2-r/2]}
offset=s[i.position]
l+=offset[0]
u+=offset[1]
if(i.offset.top!==null){l+=i.offset.top}if(i.offset.left!==null){u+=i.offset.left}i.elem.css({position:"absolute",top:l,left:u})}
e._guiderById=function(i){if(typeof e._guiders[i]==="undefined"){throw new Error("Cannot find guider with id "+i)}return e._guiders[i]}
e._showOverlay=function(){$("#guider_overlay").fadeIn("fast",function(){if(this.style.removeAttribute){this.style.removeAttribute("filter")}$("#guider_click_mask").show()})}
e._highlightElement=function(i){$(i).css({"z-index":e._zIndexForHighlight})}
e._dehighlightElement=function(e){$(e).css({"z-index":""})}
e._hideOverlay=function(){$("#guider_overlay").fadeOut("fast")
$("#guider_click_mask").hide()
$(document).off("focusin.guider.modal")}
e._initializeOverlay=function(){if($("#guider_overlay").length===0){$('<div id="guider_overlay"></div>').hide().appendTo("body")
$('<div id="guider_click_mask"></div>').hide().click(function(e){e.preventDefault()
e.stopPropagation()}).appendTo("body")}}
e._styleArrow=function(i){var t=i.position||0
if(!t){return}var r=$(i.elem.find(".guider_arrow"))
var o={1:"guider_arrow_down",2:"guider_arrow_left",3:"guider_arrow_left",4:"guider_arrow_left",5:"guider_arrow_up",6:"guider_arrow_up",7:"guider_arrow_up",8:"guider_arrow_right",9:"guider_arrow_right",10:"guider_arrow_right",11:"guider_arrow_down",12:"guider_arrow_down"}
r.addClass(o[t])
var n=i.elem.innerHeight()
var d=i.elem.innerWidth()
var l=e._arrowSize/2
var u={1:["right",l],2:["top",l],3:["top",n/2-l],4:["bottom",l],5:["right",l],6:["left",d/2-l],7:["left",l],8:["bottom",l],9:["top",n/2-l],10:["top",l],11:["left",l],12:["left",d/2-l]}
var t=u[i.position]
r.css(t[0],t[1]+"px")}
e._showIfHashed=function(i){var t="guider="
var r=window.location.hash.indexOf(t)
if(r!==-1){var o=window.location.hash.substr(r+t.length)
if(i.id.toLowerCase()===o.toLowerCase()){e.show(i.id)}}}
e.next=function(){var i=e._guiders[e._currentGuiderID]
if(typeof i==="undefined"){return}var t=i.next||null
if(t!==null&&t!==""){var r=e._guiderById(t)
var o=r.overlay?true:false
e.hideAll(o)
e.show(t)}}
e.createGuider=function(i){if(i===null||i===undefined){i={}}myGuider=$.extend({},e._defaultSettings,i)
myGuider.id=myGuider.id||String(Math.floor(Math.random()*1e3))
var t=$(e._htmlSkeleton)
myGuider.elem=t
if(typeof myGuider.classString!=="undefined"&&myGuider.classString!==null){myGuider.elem.addClass(myGuider.classString)}myGuider.elem.css("width",myGuider.width+"px")
var r=t.find(".guider_title")
r.html(myGuider.title)
t.find(".guider_description").html(myGuider.description)
e._addButtons(myGuider)
if(myGuider.xButton){e._addXButton(myGuider)}t.hide()
t.appendTo("body")
t.attr("id",myGuider.id)
if(typeof myGuider.attachTo!=="undefined"&&myGuider!==null){e._attach(myGuider)
e._styleArrow(myGuider)}e._initializeOverlay()
e._guiders[myGuider.id]=myGuider
e._lastCreatedGuiderID=myGuider.id
if(myGuider.isHashable){e._showIfHashed(myGuider)}return e}
e.hideAll=function(i){var t=e._guiders[e._currentGuiderID]
if(t&&t.highlight){e._dehighlightElement(t.highlight)}$(".guider").fadeOut("fast")
if(typeof i!=="undefined"&&i===true){}else{e._hideOverlay()}return e}
e.show=function(i){if(!i&&e._lastCreatedGuiderID){i=e._lastCreatedGuiderID}var t=e._guiderById(i)
if(t.overlay){e._showOverlay()
if(t.highlight){e._highlightElement(t.highlight)}}e._attach(t)
if(t.onShow){t.onShow(t)}t.elem.fadeIn("fast")
t.elem.focus()
if(t.overlay){$(document).off("focusin.guider.modal").on("focusin.guider.modal",function(e){if(t.elem[0]!==e.target&&!t.elem.has(e.target).length){t.elem.focus()}})}var r=$(window).height()
var o=$(window).scrollTop()
var n=t.elem.offset()
var d=t.elem.height()
if(n.top-o<0||n.top+d+40>o+r){window.scrollTo(0,Math.max(n.top+d/2-r/2,0))}e._currentGuiderID=i
return e}
return e}.call(this,jQuery)
__KA_module.exports = guiders;
this.guiders = guiders;
});
