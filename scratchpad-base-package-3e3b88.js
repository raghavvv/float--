KAdefine("javascript/scratchpad-base-package/docs-pjs.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(n,e,o,a,r){o=o||n.helpers
var t="",i,l,s,c,f=this,p="function",u=o.blockHelperMissing
function m(n,e){var a="",r
a+='\n            <div class="headline-container">\n                <div class="main-header">\n                    <div class="topic-info">\n                    <div class="topic-info-inner">\n                        <div class="welcome-info tutorial-welcome">\n                            <div class=\'subject-breadcrumb\'><a href="/computer-programming" class="subject-link" data-id="computer-programming"><i class="icon-caret-left"></i>'
s=o["_"]
r=s||n["_"]
c=f.program(2,h,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){a+=r}a+='</a></div>\n                            <div class="topic-title">'
s=o["_"]
r=s||n["_"]
c=f.program(4,g,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){a+=r}a+='</div>\n                            <div id="tutorial-sorter"></div>\n                            <div class="topic-desc">'
s=o["_"]
r=s||n["_"]
c=f.program(6,d,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){a+=r}a+="\n                            "
s=o["_"]
r=s||n["_"]
c=f.program(8,v,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){a+=r}a+="\n                            "
s=o["_"]
r=s||n["_"]
c=f.program(10,_,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){a+=r}a+='\n                            </div>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n            <div class="sub-header-spacer tutorial-color"></div>\n        '
return a}function h(n,e){return"Computer programming"}function g(n,e){return"Documentation"}function d(n,e){return'All of the code here is written using the <a href="https://developer.mozilla.org/en-US/docs/JavaScript" target="_blank">JavaScript</a> language and the <a href="http://processingjs.org" target="_blank">Processing.js</a> library (with <a href="https://khanacademy.zendesk.com/hc/en-us/articles/202260404-What-parts-of-ProcessingJS-does-Khan-Academy-support-" target="_blank">some modifications</a>).'}function v(n,e){return"You can click the links below to learn more about\n                            what you can do in your programs."}function _(n,e){return'You can also <a href="/computer-programming/programming/good-practices/v/the-power-of-the-docs" target="_blank">watch our guide</a> on how to use these docs.'}function y(n,e){return"Quick Jump:"}function b(n,e){return"Shapes"}function T(n,e){return"Complex Shapes"}function k(n,e){return"Colors"}function D(n,e){return"Text"}function N(n,e){return"Transforms"}function x(n,e){return"Environment"}function w(n,e){return"Mouse"}function S(n,e){return"Keyboard"}function C(n,e){return"Math"}function z(n,e){return"Trig"}function M(n,e){return"Date/Time"}function P(n,e){return"Debugging"}function J(n,e){return"JavaScript"}function q(n,e){var a="",r
a+="\n                    "
s=o["_"]
r=s||n["_"]
c=f.program(41,j,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){a+=r}a+="\n                    "
return a}function j(n,e){return'If you\'re new to JS/ProcessingJS, you can also learn with our <a href="/computing/programming">Intro to JS</a> course.'}function R(n,e){return"ProcessingJS"}function A(n,e){return"Shapes"}function W(n,e){return"rect(x, y, w, h)"}function L(n,e){return"ellipse(x, y, w, h)"}function O(n,e){return"triangle(x1, y1, x2, y2, x3, y3)"}function Y(n,e){return"line(x1, y1, x2, y2)"}function E(n,e){return"point(x, y)"}function G(n,e){return"arc(x, y, w, h, start, stop)"}function I(n,e){return"bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2)"}function B(n,e){return"quad(x1, y1, x2, y2, x3, y3, x4, y4)"}function F(n,e){return"image(image, x, y, width*, height*)"}function H(n,e){return"See also:"}function K(n,e){return"ellipseMode"}function V(n,e){return"rectMode"}function U(n,e){return"imageMode"}function X(n,e){return"strokeCap"}function Q(n,e){return"bezierPoint"}function Z(n,e){return"bezierTangent"}function ne(n,e){return"curve"}function ee(n,e){return"curvePoint"}function oe(n,e){return"curveTangent"}function ae(n,e){return"curveTightness"}function re(n,e){return"Complex Shapes"}function te(n,e){return"beginShape()"}function ie(n,e){return"endShape()"}function le(n,e){return"vertex()"}function se(n,e){return"curveVertex()"}function ce(n,e){return"bezierVertex()"}function fe(n,e){return"See also:"}function pe(n,e){return"strokeJoin"}function ue(n,e){return"curveTightness"}function me(n,e){return"Colors"}function he(n,e){return"background(r, g, b)"}function ge(n,e){return"Set the background color"}function de(n,e){return"fill(r, g, b)"}function ve(n,e){return"Set the fill color for shapes"}function _e(n,e){return"noFill()"}function ye(n,e){return"Turn off fill for shapes"}function be(n,e){return"stroke(r, g, b)"}function Te(n,e){return"Set the outline color for shapes"}function ke(n,e){return"strokeWeight(thickness)"}function De(n,e){return"Change the thickness of lines and outlines"}function Ne(n,e){return"noStroke()"}function xe(n,e){return"Turn off outlines for shapes"}function we(n,e){return"color(r, g, b)"}function Se(n,e){return"Store a color in a variable"}function Ce(n,e){return"blendColor(c1, c2, MODE)"}function ze(n,e){return"Blend two colors together"}function Me(n,e){return"lerpColor(c1, c2, amount)"}function Pe(n,e){return"Find color between 2 colors"}function Je(n,e){return"See also:"}function qe(n,e){return"colorMode"}function je(n,e){return"red"}function Re(n,e){return"green"}function Ae(n,e){return"blue"}function We(n,e){return"alpha"}function Le(n,e){return"hue"}function Oe(n,e){return"saturation"}function Ye(n,e){return"brightness"}function Ee(n,e){return"Text"}function Ge(n,e){return"text(text, x, y)"}function Ie(n,e){return"Draw some text"}function Be(n,e){return"textFont(font, size*)"}function Fe(n,e){return"Changes the font of text"}function He(n,e){return"textSize(size)"}function Ke(n,e){return"Change the size of text"}function Ve(n,e){return"See also:"}function Ue(n,e){return"textWidth"}function Xe(n,e){return"textAscent"}function Qe(n,e){return"textDescent"}function Ze(n,e){return"textLeading"}function $e(n,e){return"textAlign"}function no(n,e){return"Transforms"}function eo(n,e){return"rotate(angle)"}function oo(n,e){return"Rotate shapes by an angle"}function ao(n,e){return"scale(amount)"}function ro(n,e){return"Scale shapes in both dimensions"}function to(n,e){return"translate(x, y)"}function io(n,e){return"Translate shapes by an offset"}function lo(n,e){return"See also:"}function so(n,e){return"pushMatrix"}function co(n,e){return"popMatrix"}function fo(n,e){return"resetMatrix"}function po(n,e){return"printMatrix"}function uo(n,e){return"Environment"}function mo(n,e){return"width"}function ho(n,e){return"height"}function go(n,e){return"The size of the canvas"}function vo(n,e){return"draw = function() { };"}function _o(n,e){return"Called repeatedly during program execution."}function yo(n,e){return"playSound(sound)"}function bo(n,e){return"Plays one of the allowed sounds."}function To(n,e){return"See also:"}function ko(n,e){return"Program.assertEqual"}function Do(n,e){return"Program.restart"}function No(n,e){return"frameRate(fps)"}function xo(n,e){return"frameCount"}function wo(n,e){return"loop"}function So(n,e){return"noLoop"}function Co(n,e){return"Mouse"}function zo(n,e){return"mouseX, mouseY"}function Mo(n,e){return"Current coordinates of the mouse"}function Po(n,e){return"pmouseX, pmouseY"}function Jo(n,e){return"Past coordinates of the mouse"}function qo(n,e){return"mouseButton"}function jo(n,e){return"Which button is pressed"}function Ro(n,e){return"mouseIsPressed"}function Ao(n,e){return"Whether mouse is being pressed"}function Wo(n,e){return"mouseClicked = function() { };"}function Lo(n,e){return"Called when mouse is clicked"}function Oo(n,e){return"mousePressed = function() { };"}function Yo(n,e){return"Called when mouse is pressed"}function Eo(n,e){return"mouseReleased = function() { };"}function Go(n,e){return"Called when mouse is released"}function Io(n,e){return"mouseMoved = function() { };"}function Bo(n,e){return"Called when mouse is moved"}function Fo(n,e){return"mouseDragged = function() { };"}function Ho(n,e){return"Called when mouse is dragged"}function Ko(n,e){return"mouseOver = function() { };"}function Vo(n,e){return"Called when mouse moves over canvas"}function Uo(n,e){return"mouseOut = function() { };"}function Xo(n,e){return"Called when mouse moves out of canvas"}function Qo(n,e){return"Keyboard"}function Zo(n,e){return"key"}function $o(n,e){return"Number representing which key is pressed"}function na(n,e){return"keyCode"}function ea(n,e){return"Represents when a special key is pressed"}function oa(n,e){return"keyIsPressed"}function aa(n,e){return"True if a key is being pressed, false otherwise"}function ra(n,e){return"keyPressed = function() { };"}function ta(n,e){return"Called when a key is pressed"}function ia(n,e){return"keyReleased = function() { };"}function la(n,e){return"Called when a key is released"}function sa(n,e){return"keyTyped = function() { };"}function ca(n,e){return"Called when a key is typed"}function fa(n,e){return"Math"}function pa(n,e){return"random(low, high)"}function ua(n,e){return"Generate a random number"}function ma(n,e){return"dist(x1, y1, x2, y2)"}function ha(n,e){return"Calculates the distance between two points"}function ga(n,e){return"constrain(value, min, max)"}function da(n,e){return"Constrain value between min and max"}function va(n,e){return"min(num1, num2)"}function _a(n,e){return"Return the minimum of two numbers"}function ya(n,e){return"max(num1, num2)"}function ba(n,e){return"Return the maximum of two numbers"}function Ta(n,e){return"abs(num)"}function ka(n,e){return"Take the absolute value of a number"}function Da(n,e){return"log(num)"}function Na(n,e){return"Take the logarithm of a number"}function xa(n,e){return"pow(num, exponent)"}function wa(n,e){return"Raise a number to an exponent"}function Sa(n,e){return"sq(num)"}function Ca(n,e){return"Square a number"}function za(n,e){return"sqrt(num)"}function Ma(n,e){return"Take the square root of a number"}function Pa(n,e){return"round(num)"}function Ja(n,e){return"Return nearest integer"}function qa(n,e){return"ceil(num)"}function ja(n,e){return"Return nearest integer of greater/equal value"}function Ra(n,e){return"floor(num)"}function Aa(n,e){return"Return nearest integer of lesser/equal value"}function Wa(n,e){return"PVector(x, y)"}function La(n,e){return"An object that describes a 2-dimensional vector"}function Oa(n,e){return"See also:"}function Ya(n,e){return"mag"}function Ea(n,e){return"exp"}function Ga(n,e){return"map"}function Ia(n,e){return"norm"}function Ba(n,e){return"lerp"}function Fa(n,e){return"noise"}function Ha(n,e){return"noiseDetail"}function Ka(n,e){return"Random.nextGaussian"}function Va(n,e){return"Trigonometry"}function Ua(n,e){return"cos(degrees)"}function Xa(n,e){return"Take the cosine of an angle"}function Qa(n,e){return"sin(degrees)"}function Za(n,e){return"Take the sine of an angle"}function $a(n,e){return"tan(degrees)"}function nr(n,e){return"Take the tangent of an angle"}function er(n,e){return"See also:"}function or(n,e){return"acos"}function ar(n,e){return"asin"}function rr(n,e){return"atan"}function tr(n,e){return"atan2"}function ir(n,e){return"radians"}function lr(n,e){return"degrees"}function sr(n,e){return"angleMode"}function cr(n,e){return"Date & Time"}function fr(n,e){return"day()"}function pr(n,e){return"month()"}function ur(n,e){return"year()"}function mr(n,e){return"Current date"}function hr(n,e){return"hour()"}function gr(n,e){return"minute()"}function dr(n,e){return"second()"}function vr(n,e){return"Current time"}function _r(n,e){return"millis()"}function yr(n,e){return"Milliseconds elapsed since program start"}function br(n,e){return"Debugging"}function Tr(n,e){return"debug(arg1, arg2, ...)"}function kr(n,e){return"Print to your browser's developer console"}function Dr(n,e){return"println(data)"}function Nr(n,e){return"Print to the canvas console"}function xr(n,e){return"print(data)"}function wr(n,e){return"Print to the canvas console"}function Sr(n,e){return"JavaScript"}function Cr(n,e){return"var drawWinston = function() { };"}function zr(n,e){return"Define a new function"}function Mr(n,e){return"if (x &lt; 20) { ... }"}function Pr(n,e){return"Only run code if a certain condition is true"}function Jr(n,e){return"while (x &lt; 250) { ... }"}function qr(n,e){return"Only run code while a certain condition is true"}function jr(n,e){return"for (var i = 0; i &lt; 8; i++) { }"}function Rr(n,e){return"Repeat code a fixed number of times"}function Ar(n,e){return"var array = [0, 1, 2, 3, 4];"}function Wr(n,e){return"Make an array of 5 numbers"}function Lr(n,e){return"Our documentation does not cover the many ways\n                    to use JavaScript. Learn more at:"}function Or(n,e){return"Mozilla Developer Network: JavaScript Guide"}function Yr(n,e){return"W3Schools JavaScript Tutorial"}function Er(n,e){return"Codecademy JS Lessons"}function Gr(n,e){return'This reference is based on <a href="http://processingjs.org/reference/" target="_blank">ProcessingJS reference</a> and is licensed under the <a href="http://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">CC BY-NC-SA 2.0 license.'}t+='<div class="prerendered topic-content-view-root">\n    <div class="content-pane-inner cs subject-color">\n        '
s=o.standAlone
i=s||e.standAlone
l=o["if"]
c=f.program(1,m,r)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(e,i,c)
if(i||i===0){t+=i}t+='\n\n        <div id="tutorials" class="videos-list">\n        <div class="videos-list-inner">\n        <div class="videos-list-inner-inner">\n            <div class="cs-documentation-container">\n\n                <p>\n                    '
s=o["_"]
i=s||e["_"]
c=f.program(12,y,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="#cs-documentation-shapes">'
s=o["_"]
i=s||e["_"]
c=f.program(14,b,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-complexshapes">'
s=o["_"]
i=s||e["_"]
c=f.program(16,T,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-colors">'
s=o["_"]
i=s||e["_"]
c=f.program(18,k,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-text">'
s=o["_"]
i=s||e["_"]
c=f.program(20,D,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-transforms">'
s=o["_"]
i=s||e["_"]
c=f.program(22,N,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-env">'
s=o["_"]
i=s||e["_"]
c=f.program(24,x,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-mouse">'
s=o["_"]
i=s||e["_"]
c=f.program(26,w,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-keyboard">'
s=o["_"]
i=s||e["_"]
c=f.program(28,S,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-math">'
s=o["_"]
i=s||e["_"]
c=f.program(30,C,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-trig">'
s=o["_"]
i=s||e["_"]
c=f.program(32,z,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-datetime">'
s=o["_"]
i=s||e["_"]
c=f.program(34,M,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-debugging">'
s=o["_"]
i=s||e["_"]
c=f.program(36,P,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-js">'
s=o["_"]
i=s||e["_"]
c=f.program(38,J,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</a>\n                    <br>\n                    "
s=o.inCourse
i=s||e.inCourse
l=o.unless
c=f.program(40,q,r)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(e,i,c)
if(i||i===0){t+=i}t+='\n                </p>\n\n                <h3 class="cs-documentation-bigheader">'
s=o["_"]
i=s||e["_"]
c=f.program(43,R,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h3>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
s=o["_"]
i=s||e["_"]
c=f.program(45,A,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/rectx-y-w-h/839496660" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-rect"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(47,W,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    <li>\n                        <a href="/computer-programming/ellipsex-y-w-h/839435680" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-ellipse"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(49,L,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    <li>\n                        <a href="/computer-programming/trianglex1-y1-x2-y2-x3-y3/839546599" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-triangle"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(51,O,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/linex1-y1-x2-y2/827916099" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-line"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(53,Y,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    <li>\n                        <a href="/computer-programming/pointx-y/827809834" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-point"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(55,E,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    <li>\n                        <a href="/computer-programming/arcx-y-w-h-start-stop/1903619297" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-arc"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(57,G,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/bezierx1-y1-cx1-cy1-cx2-cy2-x2-y2/956920482" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-bezier"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(59,I,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    <li>\n                        <a href="/computer-programming/quadx1-y1-x2-y2-x3-y3-x4-y4/1907244018" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-quad"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(61,B,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    <li>\n                        <a href="/computer-programming/imageimage-x-y/937672662" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-image"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(63,F,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code>\n                        </a>\n                    </div>\n                </ul>\n                <p>"
s=o["_"]
i=s||e["_"]
c=f.program(65,H,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/ellipsemodemode/6709863212122112" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(67,K,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/rectmodemode/4556457341091840" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(69,V,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/imagemodemode/5295050787389440" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(71,U,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/strokecapmode/5288182060941312" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(73,X,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/bezierpointa-b-c-d-t/4551007698681856"  target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(75,Q,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/beziertangenta-b-c-d-t/4736929853603840\n" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(77,Z,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/curve/5105742184972288" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(79,ne,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/curvepointa-b-c-d-t/5879387094253568" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(81,ee,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/curvetangenta-b-c-d-t/4708940860358656" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(83,oe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/curvetightnesssquishy/4792873740402688" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(85,ae,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                </p>\n                </div>\n\n\n                <div class="cs-documentation-section">\n\n                <h4 id="cs-documentation-complexshapes">'
s=o["_"]
i=s||e["_"]
c=f.program(87,re,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/beginshapeendshape/5462945756610560" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-beginshape"></div>\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(89,te,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code>/\n                            <code>"
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(91,ie,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code>/\n                            <code>"
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(93,le,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/curvevertexx-y/6499542019080192" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-curvevertex"></div>\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(95,se,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/beziervertexcx1-cy1-cx2-cy2-x-y/5085481683386368" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-beziervertex"></div>\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(97,ce,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                    </div>\n                </ul>\n\n                <p>"
s=o["_"]
i=s||e["_"]
c=f.program(99,fe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/strokejoinmode/5662070842327040" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(101,pe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/curvetightnesssquishy/4792873740402688" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(103,ue,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                </p>\n\n                </div>\n\n                <div class="cs-documentation-section">\n\n                <h4 id="cs-documentation-colors">'
s=o["_"]
i=s||e["_"]
c=f.program(105,me,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/backgroundr-g-b/839653892" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(107,he,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(109,ge,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    <li>\n                        <a href="/computer-programming/fillr-g-b/839774957" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(111,de,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(113,ve,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    <li>\n                        <a href="/computer-programming/nofill/877946290" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(115,_e,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(117,ye,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/stroker-g-b/839545910" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(119,be,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(121,Te,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    <li>\n                        <a href="/computer-programming/strokeweightthickness/877859744" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(123,ke,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(125,De,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    <li>\n                        <a href="/computer-programming/nostroke/839859412" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(127,Ne,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(129,xe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/colorr-g-b/957020020" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(131,we,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(133,Se,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/blendcolorc1-c2-mode/4530750216994816" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(135,Ce,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(137,ze,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/lerpcolorc1-c2-amount/4759935778816000" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(139,Me,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(141,Pe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="\n                    </div>\n                </ul>\n                <p>\n                    "
s=o["_"]
i=s||e["_"]
c=f.program(143,Je,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/colormode/5833774306689024" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(145,qe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/redcolor/5102159326609408" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(147,je,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/greencolor/5877638103040000" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(149,Re,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/bluecolor/5177743654256640" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(151,Ae,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/alphacolor/6687311345483776" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(153,We,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/huecolor/6620387366404096" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(155,Le,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/saturationcolor/6358678768713728" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(157,Oe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/brightnesscolor/5888575639912448" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(159,Ye,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                </p>\n\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-text">'
s=o["_"]
i=s||e["_"]
c=f.program(161,Ee,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/texttext-x-y/937624625" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(163,Ge,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(165,Ie,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/textfontfont-size/940030209" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(167,Be,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(169,Fe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/textsizesize/937728198" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(171,He,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(173,Ke,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="\n                    </div>\n                </ul>\n                <p>\n                    "
s=o["_"]
i=s||e["_"]
c=f.program(175,Ve,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/textwidthstr/4799257177489408" target="_blank">\n                    <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(177,Ue,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/textascent/5975406490419200" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(179,Xe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/textdescent/5638769772331008" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(181,Qe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/textleadingdist/6369013500215296" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(183,Ze,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/textalignalign-yalign/4508437190803456" target="_blank">\n                    <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(185,$e,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                    </a>\n\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-transforms">'
s=o["_"]
i=s||e["_"]
c=f.program(187,no,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/rotateangle/6386091934351360" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(189,eo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(191,oo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/scalex-y/6712922034143232" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(193,ao,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(195,ro,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/translatex-y/6505693083336704" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(197,to,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(199,io,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="\n                    </div>\n                </ul>\n                <p>"
s=o["_"]
i=s||e["_"]
c=f.program(201,lo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/pushmatrixpopmatrix/5505194477486080" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(203,so,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code>/<code>"
s=o["_"]
i=s||e["_"]
c=f.program(205,co,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/resetmatrix/4597705468805120" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(207,fo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/printmatrix/5934612152844288" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(209,po,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                </p>\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-env">'
s=o["_"]
i=s||e["_"]
c=f.program(211,uo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/width/5933816543707136" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(213,mo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a> /\n                        <a href="/computer-programming/height/4544657253990400" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(215,ho,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(217,go,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/draw/5192527846309888" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(219,vo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(221,_o,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/playsoundsound/6655307787534336" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(223,yo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(225,bo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="\n                    </li>\n                    </div>\n                </ul>\n                <p>\n                    "
s=o["_"]
i=s||e["_"]
c=f.program(227,To,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/programassertequal/6737630444388352" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(229,ko,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/programrestart/5772421353439232" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(231,Do,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/frameratefps/6427359154536448" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(233,No,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                    <a href="/computer-programming/framecount/5893935759097856" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(235,xo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/loop/5519218351013888" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(237,wo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a> /\n                    <a href="/computer-programming/noloop/6342789906300928" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(239,So,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                </p>\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-mouse">'
s=o["_"]
i=s||e["_"]
c=f.program(241,Co,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/mousex-mousey/5538427537719296" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(243,zo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(245,Mo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/pmousex-pmousey/5082026180870144\n" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(247,Po,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(249,Jo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/mousebutton/6304348237725696\n" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(251,qo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(253,jo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n\n                    <li>\n                        <a href="/computer-programming/mouseispressed/939933053" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(255,Ro,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(257,Ao,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/var-mouseclicked-function/1897113673" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(259,Wo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(261,Lo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                                        <li>\n                        <a href="/computer-programming/var-mousepressed-function/1907626123" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(263,Oo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(265,Yo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/var-mousereleased-function/1907670118" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(267,Eo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(269,Go,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/var-mousemoved-function/5689134450475008" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(271,Io,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(273,Bo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/var-mousedragged-function/6273229589053440" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(275,Fo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(277,Ho,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/var-mouseover-function/4681234999410688" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(279,Ko,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(281,Vo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/var-mouseout-function/6643226391871488" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(283,Uo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(285,Xo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n                </ul>\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-keyboard">'
s=o["_"]
i=s||e["_"]
c=f.program(287,Qo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/key/5790940799172608" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(289,Zo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(291,$o,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/keycode/939888407" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(293,na,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(295,ea,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/keyispressed/939855509" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(297,oa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(299,aa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/var-keypressed-function/6270179101114368" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(301,ra,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(303,ta,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/var-keyreleased-function/6349252120805376" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(305,ia,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(307,la,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/var-keytyped-function/5762464763346944" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(309,sa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(311,ca,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n\n                </ul>\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-math">'
s=o["_"]
i=s||e["_"]
c=f.program(313,fa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/randomlow-high/827911487" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(315,pa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(317,ua,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/distx1-y1-x2-y2/1917352082" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(319,ma,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(321,ha,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/constrainvalue-min-max/5870136103796736" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(323,ga,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>"
s=o["_"]
i=s||e["_"]
c=f.program(325,da,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/minnum1-num2/4693347713155072" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(327,va,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(329,_a,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/maxnum1-num2/4755409722146816" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(331,ya,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(333,ba,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/absnum/877930637" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(335,Ta,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(337,ka,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/lognum/877921884" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(339,Da,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(341,Na,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n\n                    <li>\n                        <a href="/computer-programming/pownum-exponent/877858853" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(343,xa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(345,wa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    <li>\n                        <a href="/computer-programming/sqnum/6588187426160640" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(347,Sa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(349,Ca,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    <li>\n                        <a href="/computer-programming/sqrtnum/6473360267542528" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(351,za,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(353,Ma,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/roundnum/5907281296228352" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(355,Pa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(357,Ja,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/ceil/5491781646942208" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(359,qa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(361,ja,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n\n                    <li>\n                        <a href="/computer-programming/floornum/5703004061696000" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(363,Ra,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(365,Aa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    <li>\n                        <a href="/computer-programming/pvectorx-y/5218818305556480" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(367,Wa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(369,La,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="\n                    </li>\n                    </div>\n\n                <p>\n                    "
s=o["_"]
i=s||e["_"]
c=f.program(371,Oa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/magx1-y1-not-working-yet/5983219002376192" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(373,Ya,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/expvalue/5228990398726144" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(375,Ea,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/mapvalue-low1-high1-low2-high2/4587974079545344" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(377,Ga,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/normvalue-low-high/6581050767572992" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(379,Ia,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/lerpvalue1-value2-amount/6456916012171264" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(381,Ba,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/noise/5618485581316096" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(383,Fa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/noisedetailoctaves-falloff/6549875814563840" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(385,Ha,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/randomseed/5697038959247360" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(387,Ka,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                </p>\n            </div>\n\n            <div class="cs-documentation-section">\n                <h4 id="cs-documentation-trig">'
s=o["_"]
i=s||e["_"]
c=f.program(389,Va,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/cosdeg/948226821" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(391,Ua,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(393,Xa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/sindeg/948255306" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(395,Qa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(397,Za,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/tandeg/948018680" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(399,$a,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(401,nr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="\n                    </li>\n                    </div>\n                </ul>\n                <p>\n                    "
s=o["_"]
i=s||e["_"]
c=f.program(403,er,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/acosval/4542953527705600" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(405,or,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/asinval/5061655520083968" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(407,ar,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/atanval/4869834059808768" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(409,rr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/atan2x-y/6206505994420224" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(411,tr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/radiansangle/6628151023108096" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(413,ir,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/degreesangle/6674991668002816" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(415,lr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/anglemode-degrees-vs-radians/2350518561" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(417,sr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                </p>\n            </div>\n\n            <div class="cs-documentation-section">\n                <h4 id="cs-documentation-datetime">'
s=o["_"]
i=s||e["_"]
c=f.program(419,cr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/day/4526347808407552" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(421,fr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>/\n                        <a href="/computer-programming/month/5388987023753216" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(423,pr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>/\n                        <a href="/computer-programming/year/6216887939629056" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(425,ur,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(427,mr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/hour/5806957302644736" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(429,hr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>/\n                        <a href="/computer-programming/minute/6638408210317312" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(431,gr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>/\n                        <a href="/computer-programming/second/5743886110556160" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(433,dr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(435,vr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/millis/5970545493409792" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(437,_r,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(439,yr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n            </div>\n\n\n            <div class="cs-documentation-section">\n\n                <h4 id="cs-documentation-debugging">'
s=o["_"]
i=s||e["_"]
c=f.program(441,br,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/debugarg1-arg2/939146973" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(443,Tr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(445,kr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/printlndata/6120466259378176" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(447,Dr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(449,Nr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/printdata/5110798099677184" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(451,xr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(453,wr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n\n                </ul>\n            </div>\n\n            <div class="cs-documentation-section">\n\n                <h3 id="cs-documentation-js" class="cs-documentation-bigheader">'
s=o["_"]
i=s||e["_"]
c=f.program(455,Sr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h3>\n\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/var-drawwinston-function/877982168" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(457,Cr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(459,zr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n\n                    <li>\n                        <a href="/computer-programming/if-x-20/957023758" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(461,Mr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(463,Pr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/while-x-250/1907383465" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(465,Jr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(467,qr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n\n                    <li>\n                        <a href="/computer-programming/for-var-i-0-i-8-i-1/877960284" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(469,jr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(471,Rr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/var-array-0-1-2-3-4/957074792" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(473,Ar,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(475,Wr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="\n                    </li>\n                    </div>\n                </ul>\n                </div>\n\n                <div>\n                    <p>"
s=o["_"]
i=s||e["_"]
c=f.program(477,Lr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</p>\n                    <ul class="styled-list">\n                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank">'
s=o["_"]
i=s||e["_"]
c=f.program(479,Or,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>\n                        <li><a href="http://www.w3schools.com/js/" target="_blank">'
s=o["_"]
i=s||e["_"]
c=f.program(481,Yr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>\n                        <li><a href="http://www.codecademy.com/tracks/javascript" target="_blank">'
s=o["_"]
i=s||e["_"]
c=f.program(483,Er,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</a>\n                    </ul>\n                    <br>\n                </div>\n\n                <p>"
s=o["_"]
i=s||e["_"]
c=f.program(485,Gr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</p>\n\n            </div>\n        </div>\n        </div>\n        </div>\n    </div>\n</div>\n"
return t})
function wrapped_template(n,e){return absoluteLinks.makeHtmlLinksSafe(template(n,e))}module.exports=wrapped_template
});
KAdefine("javascript/scratchpad-base-package/docs-sql.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(n,e,o,a,s){o=o||n.helpers
var i="",t,r,l,c,p=this,f="function",d=o.blockHelperMissing
function u(n,e){var a="",s
a+='\n            <div class="headline-container">\n                <div class="main-header">\n                    <div class="topic-info">\n                    <div class="topic-info-inner">\n                        <div class="welcome-info tutorial-welcome">\n                            <div class=\'subject-breadcrumb\'><a href="/computer-programming" class="subject-link" data-id="computer-programming"><i class="icon-caret-left"></i>'
l=o["_"]
s=l||n["_"]
c=p.program(2,m,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof s===f){s=s.call(n,c)}else{s=d.call(n,s,c)}if(s||s===0){a+=s}a+='</a></div>\n                            <div class="topic-title">'
l=o["_"]
s=l||n["_"]
c=p.program(4,h,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof s===f){s=s.call(n,c)}else{s=d.call(n,s,c)}if(s||s===0){a+=s}a+='</div>\n                            <div id="tutorial-sorter"></div>\n                            <div class="topic-desc">'
l=o["_"]
s=l||n["_"]
c=p.program(6,g,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof s===f){s=s.call(n,c)}else{s=d.call(n,s,c)}if(s||s===0){a+=s}a+="\n                            "
l=o["_"]
s=l||n["_"]
c=p.program(8,v,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof s===f){s=s.call(n,c)}else{s=d.call(n,s,c)}if(s||s===0){a+=s}a+='\n                            </div>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n            <div class="sub-header-spacer tutorial-color"></div>\n        '
return a}function m(n,e){return"Computer programming"}function h(n,e){return"Documentation"}function g(n,e){return"Stub."}function v(n,e){return"You can click the links below to learn more about what you can do in your pages."}function E(n,e){return"SQL"}function _(n,e){var a="",s
a+="\n                <p>"
l=o["_"]
s=l||n["_"]
c=p.program(13,y,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof s===f){s=s.call(n,c)}else{s=d.call(n,s,c)}if(s||s===0){a+=s}a+="</p>\n                "
return a}function y(n,e){return'If you\'re new to SQL, you can also learn with our <a href="/computing/sql">SQL course</a>.'}function T(n,e){return"Creating tables"}function N(n,e){return"CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT, age INTEGER, weight REAL);"}function b(n,e){return"Many data types<br>"}function q(n,e){return"CREATE TABLE customers (id INTEGER PRIMARY KEY, age INTEGER);"}function w(n,e){return"Using primary keys<br>"}function D(n,e){return'Also see: <a href="/computer-programming/sql-specifying-default-values-in-create-table/6155515281408000">specifying defaults</a>, <a href="/computer-programming/sql-create-table-with-foreign-key-reference/4700108318965760">using foreign keys</a>. For more details, see the SQLite reference for <a href="https://www.sqlite.org/lang_createtable.html"><code>CREATE</code></a>.'}function R(n,e){return"Inserting data"}function L(n,e){return'INSERT INTO customers VALUES (73, "Brian", 33);'}function S(n,e){return"Inserting data<br>"}function A(n,e){return'INSERT INTO customers (name, age) VALUES ("Brian", 33);'}function O(n,e){return"Inserting data for named columns<br>"}function I(n,e){return'For more details, see the SQLite reference for\n                <a href="https://www.sqlite.org/lang_insert.html"><code>INSERT</code></a>.'}function C(n,e){return"Querying data"}function k(n,e){return"SELECT * FROM customers;"}function F(n,e){return"Select everything<br>"}function M(n,e){return"SELECT * FROM customers WHERE age > 21;"}function j(n,e){return"Filter with condition<br>"}function H(n,e){return'SELECT * FROM customers WHERE age < 21 AND state = "NY";'}function U(n,e){return"Filter with multiple conditions<br>"}function Q(n,e){return'SELECT * FROM customers WHERE plan IN ("free", "basic");'}function Y(n,e){return"Filter with IN<br>"}function B(n,e){return"SELECT name, age FROM customers;"}function G(n,e){return"Select specific columns<br>"}function W(n,e){return"SELECT * FROM customers WHERE age > 21 ORDER BY age DESC;"}function P(n,e){return"Order results<br>"}function J(n,e){return'SELECT name, CASE WHEN age > 18 THEN "adult" ELSE "minor" END "type" FROM customers;'}function K(n,e){return"Transform with CASE<br>"}function V(n,e){return'Also see: <a href="/computer-programming/sql-filtering-with-like/5913941557510144">filtering with <code>LIKE</code></a>, <a href="/computer-programming/sql-using-select-with-limit/6005320342175744">restricting with <code>LIMIT</code></a>, <a href="/computer-programming/sql-round-and-other-core-functions/6203890437586944">using <code>ROUND</code> and other core functions</a>. For more details, see the SQLite reference for <a href="https://www.sqlite.org/lang_select.html"><code>SELECT</code></a>.'}function X(n,e){return"Aggregating data"}function x(n,e){return"SELECT MAX(age) FROM customers;"}function z(n,e){return"Aggregate functions<br>"}function Z(n,e){return"SELECT gender, COUNT(*) FROM students GROUP BY gender;"}function ne(n,e){return"Grouping data<br>"}function ee(n,e){return'Also see: <a href="/computer-programming/sql-using-having-with-grouped-by/6199455011438592">restricting results with HAVING</a>.'}function oe(n,e){return"Joining related tables"}function ae(n,e){return"SELECT customers.name, orders.item FROM customers JOIN orders ON customers.id = orders.customer_id;"}function se(n,e){return"Inner join<br>"}function ie(n,e){return"SELECT customers.name, orders.item FROM customers LEFT OUTER JOIN orders ON customers.id = orders.customer_id;"}function te(n,e){return"Outer join<br>"}function re(n,e){return"Updating and deleting data"}function le(n,e){return"UPDATE customers SET age = 33 WHERE id = 73;"}function ce(n,e){return"Updating data<br>"}function pe(n,e){return"DELETE FROM customers WHERE id = 73;"}function fe(n,e){return"Deleting data<br>"}function de(n,e){return'Also see: <a href="/computer-programming/sql-alter-table/6147136605519872"><code>ALTER TABLE</code></a>.'}function ue(n,e){return'Our implementation of SQL is based off of <a href="https://www.sqlite.org/">SQLite</a> which is compiled down to <a href="http://asmjs.org/">asm.js</a> by <a href="https://github.com/kripken/emscripten">Emscripten</a> packaged into <a href="https://github.com/kripken/sql.js/">sqljs</a>.'}i+='<div class="prerendered topic-content-view-root">\n    <div class="content-pane-inner cs subject-color">\n        '
l=o.standAlone
t=l||e.standAlone
r=o["if"]
c=p.program(1,u,s)
c.hash={}
c.fn=c
c.inverse=p.noop
t=r.call(e,t,c)
if(t||t===0){i+=t}i+='\n\n        <div id="tutorials" class="videos-list">\n        <div class="videos-list-inner">\n        <div class="videos-list-inner-inner">\n            <div class="cs-documentation-container">\n\n                <h3 class="cs-documentation-bigheader">'
l=o["_"]
t=l||e["_"]
c=p.program(10,E,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</h3>\n                \n                "
l=o.inCourse
t=l||e.inCourse
r=o.unless
c=p.program(12,_,s)
c.hash={}
c.fn=c
c.inverse=p.noop
t=r.call(e,t,c)
if(t||t===0){i+=t}i+='\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
l=o["_"]
t=l||e["_"]
c=p.program(15,T,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</h4>\n                <ul>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(17,N,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                            <a href="/computer-programming/sql-create-table-with-multiple-data-types/5945065256124416">\n                            <span>'
l=o["_"]
t=l||e["_"]
c=p.program(19,b,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                            </a>\n                    </div>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(21,q,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                            <a href="/computer-programming/sql-create-table-with-a-primary-key/5189331400654848">\n                            <span>'
l=o["_"]
t=l||e["_"]
c=p.program(23,w,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</span>\n                            </a>\n                    </div>\n                </ul>\n                <p>"
l=o["_"]
t=l||e["_"]
c=p.program(25,D,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='\n                </p>\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
l=o["_"]
t=l||e["_"]
c=p.program(27,R,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</h4>\n                <ul>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(29,L,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                            <a href="/computer-programming/sql-inserting-values-in-tables/5382515271532544">\n                            <span>'
l=o["_"]
t=l||e["_"]
c=p.program(31,S,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                            </a>\n                    </div>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(33,A,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                            <a href="/computer-programming/sql-inserting-values-in-tables/5382515271532544">\n                            <span>'
l=o["_"]
t=l||e["_"]
c=p.program(35,O,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</span>\n                            </a>\n\n                    </div>\n                </ul>\n                <p>"
l=o["_"]
t=l||e["_"]
c=p.program(37,I,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='\n                </p>\n                </div>\n\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
l=o["_"]
t=l||e["_"]
c=p.program(39,C,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</h4>\n                <ul>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(41,k,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                            <a href="/computer-programming/sql-selecting-rows/5163767537205248">\n                            <span>'
l=o["_"]
t=l||e["_"]
c=p.program(43,F,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                            </a>\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(45,M,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                            <a href="/computer-programming/sql-selecting-with-where-conditions/6216095996444672">\n                            <span>'
l=o["_"]
t=l||e["_"]
c=p.program(47,j,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                            </a>\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(49,H,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>  \n                            <a href="/computer-programming/sql-selecting-with-where-conditions/6216095996444672">\n                            <span>'
l=o["_"]
t=l||e["_"]
c=p.program(51,U,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                            </a>\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(53,Q,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                            <a href="/computer-programming/sql-filter-with-in/6529475600842752">\n                            <span>'
l=o["_"]
t=l||e["_"]
c=p.program(55,Y,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                            </a>\n                    </div>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(57,B,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                            <a href="/computer-programming/sql-selecting-rows/5163767537205248">\n                            <span>'
l=o["_"]
t=l||e["_"]
c=p.program(59,G,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                            </a>\n\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(61,W,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                            <a href="/computer-programming/sql-select-with-order-by/6218182226477056">\n                            <span>'
l=o["_"]
t=l||e["_"]
c=p.program(63,P,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                            </a>\n                    \n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(65,J,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                            <a href="/computer-programming/sql-transform-select-results-with-case/5100246984163328">\n                            <span>'
l=o["_"]
t=l||e["_"]
c=p.program(67,K,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</span>\n                            </a>\n                    </div>\n                </ul>\n                <p>"
l=o["_"]
t=l||e["_"]
c=p.program(69,V,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='\n                </p>\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
l=o["_"]
t=l||e["_"]
c=p.program(71,X,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</h4>\n                <ul>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(73,x,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                        <a href="/computer-programming/sql-select-with-aggregate-functions/4797964233080832">\n                        <span>'
l=o["_"]
t=l||e["_"]
c=p.program(75,z,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                        </a>\n                    </div>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(77,Z,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                        <a href="/computer-programming/sql-grouping-select-results-with-group-by/5520132919132160">\n                        <span>'
l=o["_"]
t=l||e["_"]
c=p.program(79,ne,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</span>\n                        </a>\n                    </div>\n                </ul>\n                <p>"
l=o["_"]
t=l||e["_"]
c=p.program(81,ee,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='\n                </p>\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
l=o["_"]
t=l||e["_"]
c=p.program(83,oe,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</h4>\n                <ul>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(85,ae,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                        <a href="/computer-programming/sql-join-on-tables/5409956539006976">\n                        <span>'
l=o["_"]
t=l||e["_"]
c=p.program(87,se,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                        </a>\n                    </div>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(89,ie,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                        <a href="/computer-programming/sql-join-on-tables/5409956539006976">\n                        <span>'
l=o["_"]
t=l||e["_"]
c=p.program(91,te,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                        </a>\n                    </div>\n                </ul>\n                </div>\n\n\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
l=o["_"]
t=l||e["_"]
c=p.program(93,re,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</h4>\n                <ul>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(95,le,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                            <a href="/computer-programming/sql-update-and-delete/5559819222253568">\n                            <span>'
l=o["_"]
t=l||e["_"]
c=p.program(97,ce,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                            </a>\n                    </div>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
l=o.i18nDoNotTranslate
t=l||e.i18nDoNotTranslate
c=p.program(99,pe,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</code></span>\n                            <a href="/computer-programming/sql-update-and-delete/5559819222253568">\n                            <span>'
l=o["_"]
t=l||e["_"]
c=p.program(101,fe,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</span>\n                            </a>\n                    </div>\n                </ul>\n                <p>"
l=o["_"]
t=l||e["_"]
c=p.program(103,de,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="\n                </p>\n                </div>\n\n\n\n\n\n                <div>\n                    <p>"
l=o["_"]
t=l||e["_"]
c=p.program(105,ue,s)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</p>\n                </div>\n            </div>\n        </div>\n        </div>\n        </div>\n    </div>\n</div>\n"
return i})
function wrapped_template(n,e){return absoluteLinks.makeHtmlLinksSafe(template(n,e))}module.exports=wrapped_template
});
KAdefine("javascript/scratchpad-base-package/docs-webpage.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(n,e,o,a,t){o=o||n.helpers
var r="",i,s,l,c,p=this,f="function",m=o.blockHelperMissing
function d(n,e){var a="",t
a+='\n            <div class="headline-container">\n                <div class="main-header">\n                    <div class="topic-info">\n                    <div class="topic-info-inner">\n                        <div class="welcome-info tutorial-welcome">\n                            <div class=\'subject-breadcrumb\'><a href="/computer-programming" class="subject-link" data-id="computer-programming"><i class="icon-caret-left"></i>'
l=o["_"]
t=l||n["_"]
c=p.program(2,u,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(n,c)}else{t=m.call(n,t,c)}if(t||t===0){a+=t}a+='</a></div>\n                            <div class="topic-title">'
l=o["_"]
t=l||n["_"]
c=p.program(4,h,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(n,c)}else{t=m.call(n,t,c)}if(t||t===0){a+=t}a+='</div>\n                            <div id="tutorial-sorter"></div>\n                            <div class="topic-desc">'
l=o["_"]
t=l||n["_"]
c=p.program(6,g,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(n,c)}else{t=m.call(n,t,c)}if(t||t===0){a+=t}a+="\n                            "
l=o["_"]
t=l||n["_"]
c=p.program(8,v,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(n,c)}else{t=m.call(n,t,c)}if(t||t===0){a+=t}a+='\n                            </div>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n            <div class="sub-header-spacer tutorial-color"></div>\n        '
return a}function u(n,e){return"Computer programming"}function h(n,e){return"Documentation"}function g(n,e){return"Stub."}function v(n,e){return"You can click the links below to learn more about what you can do in your pages."}function _(n,e){return"HTML"}function b(n,e){var a="",t
a+="\n                <p>"
l=o["_"]
t=l||n["_"]
c=p.program(13,y,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof t===f){t=t.call(n,c)}else{t=m.call(n,t,c)}if(t||t===0){a+=t}a+="</p>\n                "
return a}function y(n,e){return'If you\'re new to making webpages, you can also learn with our <a href="/computing/html-css">HTML/CSS</a> course.'}function T(n,e){return"Headlines"}function k(n,e){return"<code>&lt;h1&gt; - &lt;h6&gt;</code>"}function D(n,e){return"Paragraphs"}function N(n,e){return"<code>&lt;p&gt;</code>"}function w(n,e){return"Line breaks"}function S(n,e){return"<code>&lt;br&gt;</code>"}function L(n,e){return"Lists"}function C(n,e){return"<code>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code>"}function H(n,e){return"Emphasis"}function z(n,e){return"<code>&lt;strong&gt;, &lt;em&gt;</code>"}function M(n,e){return"Links"}function j(n,e){return"<code>&lt;a&gt;</code>"}function F(n,e){return"Images"}function A(n,e){return"<code>&lt;img&gt;</code>"}function E(n,e){return"Tables"}function I(n,e){return"<code>&lt;table&gt;, &lt;thead&gt;, &lt;tbody&gt;, &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;</code>"}function P(n,e){return'For more HTML tags, see a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">complete list here</a>.'}function U(n,e){return"CSS"}function W(n,e){return"Selectors"}function q(n,e){return"h1 { \n    color: rgb(0, 0, 0);\n}"}function x(n,e){return"The element selector<br>"}function R(n,e){return"ul em { \n    color: rgb(0, 0, 0);\n}"}function Y(n,e){return"The descendant selector<br>"}function B(n,e){return".stripe { \n    color: rgb(0, 0, 0);\n}"}function G(n,e){return"The class selector<br>"}function J(n,e){return"#star { \n    color: rgb(0, 0, 0);\n}"}function K(n,e){return"The id selector<br>"}function O(n,e){return'For more CSS selectors, see <a href="http://docs.webplatform.org/wiki/css/selectors">a complete list here</a>.'}function Q(n,e){return"Properties"}function V(n,e){return"<code>color</code>"}function X(n,e){return"<code>background-color</code>"}function Z(n,e){return"<code>font-family</code>"}function ne(n,e){return"<code>font-size</code>"}function ee(n,e){return'For more CSS properties, see <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference">a complete list here</a>.'}r+='<div class="prerendered topic-content-view-root">\n    <div class="content-pane-inner cs subject-color">\n        '
l=o.standAlone
i=l||e.standAlone
s=o["if"]
c=p.program(1,d,t)
c.hash={}
c.fn=c
c.inverse=p.noop
i=s.call(e,i,c)
if(i||i===0){r+=i}r+='\n\n        <div id="tutorials" class="videos-list">\n        <div class="videos-list-inner">\n        <div class="videos-list-inner-inner">\n            <div class="cs-documentation-container">\n\n                <h3 class="cs-documentation-bigheader">'
l=o["_"]
i=l||e["_"]
c=p.program(10,_,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="</h3>\n                "
l=o.inCourse
i=l||e.inCourse
s=o.unless
c=p.program(12,b,t)
c.hash={}
c.fn=c
c.inverse=p.noop
i=s.call(e,i,c)
if(i||i===0){r+=i}r+='\n\n                <div class="cs-documentation-section">\n                <ul>\n                    <div class="span6">\n                    <li>\n                        <a href="/computer-programming/html-the-h1-to-h6-tags/4681886899372032" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_headlines"></div>\n                            '
l=o["_"]
i=l||e["_"]
c=p.program(15,T,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(17,k,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/html-the-p-tag/6093568875954176" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_paragraphs"></div>\n                            '
l=o["_"]
i=l||e["_"]
c=p.program(19,D,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(21,N,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/html-the-br-tag/5409006839660544" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_linebreaks"></div>\n                            '
l=o["_"]
i=l||e["_"]
c=p.program(23,w,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(25,S,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/html-the-ul-ol-and-li-tags/6339629448167424" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_lists"></div>\n                            '
l=o["_"]
i=l||e["_"]
c=p.program(27,L,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(29,C,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    </div>\n                    <div class="span6">\n                    <li>\n                        <a href="/computer-programming/html-the-strong-and-em-tags/5341594157056000" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_emphasis"></div>\n                            '
l=o["_"]
i=l||e["_"]
c=p.program(31,H,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(33,z,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/html-the-a-tag/4923899846590464" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_links"></div>\n                            '
l=o["_"]
i=l||e["_"]
c=p.program(35,M,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(37,j,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/html-the-image-tag/4800922048004096" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_images"></div>\n                            '
l=o["_"]
i=l||e["_"]
c=p.program(39,F,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(41,A,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/html-the-table-tags/6579067331805184" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_tables"></div>\n                            '
l=o["_"]
i=l||e["_"]
c=p.program(43,E,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(45,I,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="\n                        </a>\n                    </div>\n                </ul>\n                <p>"
l=o["_"]
i=l||e["_"]
c=p.program(47,P,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                </p>\n                </div>\n\n                <h3 class="cs-documentation-bigheader">'
l=o["_"]
i=l||e["_"]
c=p.program(49,U,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</h3>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
l=o["_"]
i=l||e["_"]
c=p.program(51,W,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</h4>\n                <ul>\n                    <div class="span6">\n                    <li>\n<pre class="cs-documentation-codesnippet"><code>'
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(53,q,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</code></pre>\n                        <a href="/computer-programming/css-the-element-selector/4908710711525376" target="_blank">\n                            <span>'
l=o["_"]
i=l||e["_"]
c=p.program(55,x,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</span>\n                        </a>\n                    <li>\n<pre class="cs-documentation-codesnippet"><code>'
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(57,R,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</code></pre>\n                        <a href="/computer-programming/css-the-descendant-selector/4674155417174016" target="_blank">\n                            <span>'
l=o["_"]
i=l||e["_"]
c=p.program(59,Y,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</span>\n                        </a>\n                    \n\n                    </div>\n                    <div class="span6">\n                    <li>\n<pre class="cs-documentation-codesnippet"><code>'
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(61,B,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</code></pre>\n                        <a href="/computer-programming/css-the-class-selector/6091891456344064" target="_blank">\n                            <span>'
l=o["_"]
i=l||e["_"]
c=p.program(63,G,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</span>\n                        </a>\n                    \n                    <li>\n<pre class="cs-documentation-codesnippet"><code>'
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(65,J,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</code></pre>\n                        <a href="/computer-programming/css-the-id-selector/5563053492142080" target="_blank">\n                            <span>'
l=o["_"]
i=l||e["_"]
c=p.program(67,K,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="</span>\n                        </a>\n\n                    </div>\n                </ul>\n                <p>"
l=o["_"]
i=l||e["_"]
c=p.program(69,O,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                </p>\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
l=o["_"]
i=l||e["_"]
c=p.program(71,Q,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</h4>\n                <ul>\n                    <div class="span6">\n                    <li>\n                        <a href="/computer-programming/css-the-color-property/6620760659722240" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-css_color"></div>\n                            '
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(73,V,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/css-the-background-color-property/6318097938251776" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-css_backgroundcolor"></div>\n                            '
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(75,X,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    </div>\n                    <div class="span6">\n                    <li>\n                        <a href="/computer-programming/css-the-font-family-property/5206961000022016" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-css_fontfamily"></div>\n                            '
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(77,Z,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/css-the-font-size-property/6229082618724352" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-css_fontsize"></div>\n                            '
l=o.i18nDoNotTranslate
i=l||e.i18nDoNotTranslate
c=p.program(79,ne,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="\n                        </a>\n                    </div>\n\n                </ul>\n                <p>"
l=o["_"]
i=l||e["_"]
c=p.program(81,ee,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="\n                </p>\n                </div>\n\n            </div>\n        </div>\n        </div>\n        </div>\n    </div>\n</div>\n"
return r})
function wrapped_template(n,e){return absoluteLinks.makeHtmlLinksSafe(template(n,e))}module.exports=wrapped_template
});
KAdefine("javascript/scratchpad-base-package/docs-document.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var absoluteLinks=require("../shared-package/absolute-links.js")
var template=Handlebars.template(function(e,n,i,a,l){i=i||e.helpers
var t="",s,r,o,c,f=this,d="function",p=i.helperMissing,u=void 0,h=this.escapeExpression,v=i.blockHelperMissing
function g(e,n){var a="",l
a+='\n            <div class="headline-container">\n                <div class="main-header">\n                    <div class="topic-info">\n                    <div class="topic-info-inner">\n                        <div class="welcome-info tutorial-welcome">\n                            <div class=\'subject-breadcrumb\'><a href="'
o=i.topic
l=o||e.topic
l=l===null||l===undefined||l===false?l:l.relativeUrl
if(typeof l===d){l=l.call(e,{hash:{}})}else if(l===u){l=p.call(e,"topic.relativeUrl",{hash:{}})}a+=h(l)+'" class="subject-link" data-id="'
o=i.topic
l=o||e.topic
l=l===null||l===undefined||l===false?l:l.slug
if(typeof l===d){l=l.call(e,{hash:{}})}else if(l===u){l=p.call(e,"topic.slug",{hash:{}})}a+=h(l)+'"><i class="icon-caret-left"></i>'
o=i.topic
l=o||e.topic
l=l===null||l===undefined||l===false?l:l.translatedTitle
if(typeof l===d){l=l.call(e,{hash:{}})}else if(l===u){l=p.call(e,"topic.translatedTitle",{hash:{}})}a+=h(l)+'</a></div>\n                            <div class="topic-title">'
o=i["_"]
l=o||e["_"]
c=f.program(2,m,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof l===d){l=l.call(e,c)}else{l=v.call(e,l,c)}if(l||l===0){a+=l}a+='</div>\n                            <div id="tutorial-sorter"></div>\n                            <div class="topic-desc">\n                            '
o=i["_"]
l=o||e["_"]
c=f.program(4,_,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof l===d){l=l.call(e,c)}else{l=v.call(e,l,c)}if(l||l===0){a+=l}a+='\n                            </div>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n            <div class="sub-header-spacer tutorial-color"></div>\n        '
return a}function m(e,n){return"Documentation"}function _(e,n){return"Click the links below to learn more about what you can do in your writing projects."}function b(e,n){return"Writing Tips"}function y(e,n){return"Here are some great resources to help you learn how to write effectively:"}function w(e,n){return"Harvard College Writing Center's "}function k(e,n){return"Strategies for Essay Writing"}function j(e,n){return"Purdue's "}function H(e,n){return"Online Writing Lab"}function S(e,n){return"Khan Academy's "}function W(e,n){return"SAT Reading and Writing Practice"}t+='<div class="prerendered topic-content-view-root">\n    <div class="content-pane-inner '
o=i.topic
s=o||n.topic
s=s===null||s===undefined||s===false?s:s.domainSlug
if(typeof s===d){s=s.call(n,{hash:{}})}else if(s===u){s=p.call(n,"topic.domainSlug",{hash:{}})}t+=h(s)+' subject-color">\n        '
o=i.standAlone
s=o||n.standAlone
r=i["if"]
c=f.program(1,g,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(n,s,c)
if(s||s===0){t+=s}t+='\n\n        <div id="tutorials" class="videos-list">\n        <div class="videos-list-inner">\n        <div class="videos-list-inner-inner">\n            <div class="cs-documentation-container">\n\n            <h3 class="cs-documentation-bigheader">'
o=i["_"]
s=o||n["_"]
c=f.program(6,b,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===d){s=s.call(n,c)}else{s=v.call(n,s,c)}if(s||s===0){t+=s}t+="</h3>\n\n                <p>"
o=i["_"]
s=o||n["_"]
c=f.program(8,y,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===d){s=s.call(n,c)}else{s=v.call(n,s,c)}if(s||s===0){t+=s}t+='</p>\n\n                <div class="cs-documentation-section">\n                <ul>\n                    <div class="span6">\n                    <li>'
o=i["_"]
s=o||n["_"]
c=f.program(10,w,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===d){s=s.call(n,c)}else{s=v.call(n,s,c)}if(s||s===0){t+=s}t+='\n                        <a href="http://writingcenter.fas.harvard.edu/pages/strategies-essay-writing" target="_blank">\n                            '
o=i["_"]
s=o||n["_"]
c=f.program(12,k,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===d){s=s.call(n,c)}else{s=v.call(n,s,c)}if(s||s===0){t+=s}t+="<br>\n                        </a>\n                    <li>"
o=i["_"]
s=o||n["_"]
c=f.program(14,j,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===d){s=s.call(n,c)}else{s=v.call(n,s,c)}if(s||s===0){t+=s}t+='\n                        <a href="https://owl.english.purdue.edu/owl/resource/685/01/" target="_blank">\n                            '
o=i["_"]
s=o||n["_"]
c=f.program(16,H,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===d){s=s.call(n,c)}else{s=v.call(n,s,c)}if(s||s===0){t+=s}t+="<br>\n                        </a>\n                    <li>"
o=i["_"]
s=o||n["_"]
c=f.program(18,S,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===d){s=s.call(n,c)}else{s=v.call(n,s,c)}if(s||s===0){t+=s}t+='\n                        <a href="/mission/sat/practice/reading-and-writing" target="_blank">\n                            '
o=i["_"]
s=o||n["_"]
c=f.program(20,W,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===d){s=s.call(n,c)}else{s=v.call(n,s,c)}if(s||s===0){t+=s}t+="<br>\n                        </a>\n                    </div>\n                </ul>\n\n            </div>\n        </div>\n        </div>\n        </div>\n    </div>\n</div>\n"
return t})
function wrapped_template(e,n){return absoluteLinks.makeHtmlLinksSafe(template(e,n))}module.exports=wrapped_template
});
KAdefine("javascript/scratchpad-base-package/scratchpads.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var moment=require("moment")
var _=require("underscore")
var absoluteLinks=require("../shared-package/absolute-links.js")
var i18n=require("../shared-package/i18n.js")
var KA=require("../shared-package/ka.js")
var ScratchpadRevision=Backbone.Model.extend({parse:function(t){t.created=new Date(t.created)
if(isNaN(Number(t.created))){t.created=new Date}return t},hasAudio:function(){return!!this.get("mp3Url")},getMp3Url:function(){var t=this.get("translatedMp3Url")||this.get("mp3Url")
return t}})
var UserScratchpad=Backbone.Model.extend({url:function(){return"/api/internal/user_scratchpads/"+(this.id||"")+"?casing=camel&client_dt="+moment().format()},defaults:{msWatched:0,lastMsWatched:0,msDuration:null,challengeStatus:-1,stashedCode:""},initialize:function(){this.inactivitySeconds=0
this.lastActivityTime=null},saveAccumulative:function(){if(this.saveInProgress){return}this.saveInProgress=true
var t=this
this.save({lastMsWatched:Math.round(this.lastMS),msWatched:this.get("msWatched")+Math.round(this.watchedMS)},{success:e,error:e})
this.watchedMS=0
function e(){t.saveInProgress=false
if(t.watchedMS>0){t.saveAccumulative()}}},addMillisecondsWatched:function(t,e,i){if(_.isNull(this.get("msDuration"))){if(!i||i<=0){console.error("Illegal or nonexistant scratchpad UI track"+"duration. Saving user talkie progress aborted.")
return}this.set("msDuration",parseInt(i,10))}this.watchedMS=(this.watchedMS||0)+t
this.lastMS=e
this.saveAccumulative()},saveChallengeStatus:function(t,e){if(!_.contains(["complete","started"],t)){console.error("Invalid status: "+t)
return}this.lastStatusTime=(new Date).getTime()
var i=this.setChallengeTimeTaken()
var r=t==="complete"?1:0
i.challengeStatus=r
e=e||{}
i["scratchpadId"]=this.get("scratchpadId")
e.attrs=i
this.save(i,e)},startInactivityTimer:function(){var t=(new Date).getTime()
var e=this.lastActivityTime&&(t-this.lastActivityTime)/1e3
var i=60*60*5
if(e>i){this.inactivitySeconds=e}this.lastActivityTime=(new Date).getTime()},setChallengeTimeTaken:function(){var t={}
var e=(new Date).getTime()
if(this.lastTimeRecorded){var i=Math.round((e-this.lastTimeRecorded)/1e3)
i-=Math.round(this.inactivitySeconds)
i=i<0?0:i
t={timeTaken:i}
this.set(t,{silent:true})}this.lastTimeRecorded=e
return t},saveChallengeTimeTaken:function(){if(!this.save||!this.setChallengeTimeTaken){return}var t=this.setChallengeTimeTaken()
var e={silent:true}
t["scratchpadId"]=this.get("scratchpadId")
e.attrs=t
this.save(t,e)}})
var Scratchpad=Backbone.Model.extend({urlRoot:"/api/internal/scratchpads",url:function(){var t=Scratchpad.__super__.url.apply(this)
return t+"?client_dt="+moment().format()},pathForShow:function(){return this.get("relativeUrl")},pathForImage:function(){return this.get("imagePath")},urlForShow:function(){return this.get("url")},urlForImage:function(){return this.get("imageUrl")},getVersion:function(){if(this.isNew()){var t=require.ifLoadedLegacy("../scratchpads-package/scratchpad-ui.js")
if(t){return t.ScratchpadUI.liveEditor.config.latestVersion()}}return this.currentRevision().get("configVersion")||0},setVersion:function(t){this.currentRevision().set("configVersion",t)},getYoutubeId:function(t){return this.currentRevision().get("youtubeId")},setYoutubeId:function(t){this.currentRevision().set("youtubeId",t)},getYoutubeEduUrl:function(){return absoluteLinks.safeLinkTo("https://www.youtubeeducation.com/"+"embed/"+this.getYoutubeId())},isResizableType:function(){return this.get("userAuthoredContentType")==="webpage"||this.get("userAuthoredContentType")==="sql"},toJSONForTemplate:function(){return{id:this.get("id"),imagePath:this.pathForImage(),showPath:this.pathForShow(),title:this.get("title"),translatedTitle:this.get("translatedTitle")}},hasTag:function(t){return _.include(this.get("tags"),t)},parse:function(t,e){t.revision=new ScratchpadRevision(t.revision,{parse:true})
t.trustedRevision=new ScratchpadRevision(t.trustedRevision,{parse:true})
if(!t.tags){t.tags=[]}return t},fork:function(){var t=this.currentRevision()
var e=new Scratchpad({title:this.get("title"),revision:t.clone().unset("id").set({mp3Url:"",playback:"",tests:""}),originScratchpadId:this.get("id"),originRevisionId:t.get("id")})
return e},save:function(t,e){this.get("revision").unset("created").unset("kind").unset("scratchpadId").unset("id").unset("hasAudio")
return Scratchpad.__super__.save.call(this,t,e)},currentRevision:function(){var t=require.ifLoadedLegacy("../scratchpads-package/scratchpad-ui.js")
if(t&&!this.isOwner()){var e=t.ScratchpadUI
if(e.trusted&&this.get("trustedRevision").get("id")){return this.get("trustedRevision")}}return this.get("revision")},isTalkie:function(){return this.currentRevision()&&this.currentRevision().get("hasAudio")},isChallenge:function(){return this.get("category")==="challenge"},isProject:function(){return this.get("category")==="project"},isCategorySet:function(){return!!this.get("category")},isProjectOrFork:function(){return this.isProject()||this.isOriginProject()},hasObjectives:function(){return this.isChallenge()||this.isProject()},isOwner:function(){return this.get("kaid")===KA.getKaid()},inTutorial:function(){return!!this.get("defaultUrlPath")},isOriginProject:function(){return this.get("originIsProject")},setTitle:function(t){this.set("title",t)
this.set("translatedTitle",t)}},{difficultyMapping:{1:i18n._("Work in Progress"),10:i18n._("Getting Started"),20:i18n._("Easy"),30:i18n._("Intermediate"),40:i18n._("Expert")}})
var ScratchpadDocsView=Backbone.View.extend({initialize:function(){if(this.options.userAuthoredContentType==="webpage"){this.template=require("./docs-webpage.handlebars")}else if(this.options.userAuthoredContentType==="sql"){this.template=require("./docs-sql.handlebars")}else if(this.options.userAuthoredContentType==="document"){this.template=require("./docs-document.handlebars")}else{this.template=require("./docs-pjs.handlebars")}},render:function(){this.$el.html(this.template({standAlone:this.options.standAlone,topic:this.options.topic,inCourse:this.options.inCourse}))}})
module.exports={Scratchpad:Scratchpad,ScratchpadDocsView:ScratchpadDocsView,ScratchpadRevision:ScratchpadRevision,UserScratchpad:UserScratchpad}
});
