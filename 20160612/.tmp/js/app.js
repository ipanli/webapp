/* Zepto 1.1.3 - zepto event ajax form ie fx touch - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):T[j.call(t)]||"object"}function A(t){return"function"==L(t)}function D(t){return null!=t&&t==t.window}function _(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function Z(t){return"object"==L(t)}function $(t){return Z(t)&&!D(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return a.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function U(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function H(t){var e,n;return u[t]||(e=s.createElement(t),s.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function I(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(n,i,r){for(e in i)r&&($(i[e])||M(i[e]))?($(i[e])&&!$(n[e])&&(n[e]={}),M(i[e])&&!M(n[e])&&(n[e]=[]),X(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function V(t,e){return null==e?n(t):n(t).filter(e)}function Y(t,e,n,i){return A(e)?e.call(t,n,i):e}function B(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function J(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function W(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n in t.childNodes)G(t.childNodes[n],e)}var t,e,n,i,C,P,r=[],o=r.slice,a=r.filter,s=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=s.createElement("table"),w=s.createElement("tr"),x={tr:s.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:w,th:w,"*":s.createElement("div")},b=/complete|loaded|interactive/,E=/^[\w-]*$/,T={},j=T.toString,S={},N=s.createElement("div"),O={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},M=Array.isArray||function(t){return t instanceof Array};return S.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=N).appendChild(t),i=~S.qsa(r,e).indexOf(t),o&&N.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},S.fragment=function(e,i,r){var a,u,f;return h.test(e)&&(a=n(s.createElement(RegExp.$1))),a||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in x||(i="*"),f=x[i],f.innerHTML=""+e,a=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),$(r)&&(u=n(a),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),a},S.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},S.isZ=function(t){return t instanceof S.Z},S.init=function(e,i){var r;if(!e)return S.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=S.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(s,e)}else{if(A(e))return n(s).ready(e);if(S.isZ(e))return e;if(M(e))r=k(e);else if(Z(e))r=[e],e=null;else if(l.test(e))r=S.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(s,e)}}return S.Z(r,e)},n=function(t,e){return S.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){X(t,n,e)}),t},S.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],a=i||r?e.slice(1):e,s=E.test(a);return _(t)&&s&&i?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(s&&!i?r?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=function(t,e){return t!==e&&t.contains(e)},n.type=L,n.isFunction=A,n.isWindow=D,n.isArray=M,n.isPlainObject=$,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return a.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){T["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return b.test(s.readyState)&&s.body?t(n):s.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return A(t)?this.not(this.not(t)):n(a.call(this,function(e){return S.matches(e,t)}))},add:function(t,e){return n(P(this.concat(n(t,e))))},is:function(t){return this.length>0&&S.matches(this[0],t)},not:function(e){var i=[];if(A(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&A(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return Z(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!Z(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!Z(t)?t:n(t)},find:function(t){var e,i=this;return e="object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(S.qsa(this[0],t)):this.map(function(){return S.qsa(this,t)})},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:S.matches(i,t));)i=i!==e&&!_(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!_(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return V(e,t)},parent:function(t){return V(P(this.pluck("parentNode")),t)},children:function(t){return V(this.map(function(){return I(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return V(this.map(function(t,e){return a.call(I(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=H(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=A(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=A(t);return this.each(function(i){var r=n(this),o=r.contents(),a=e?t.call(this,i):t;o.length?o.wrapAll(a):r.append(a)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var i=this.innerHTML;n(this).empty().append(Y(this,t,e,i))})},text:function(e){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e===t?"":""+e})},attr:function(n,i){var r;return"string"==typeof n&&i===t?0==this.length||1!==this[0].nodeType?t:"value"==n&&"INPUT"==this[0].nodeName?this.val():!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:this.each(function(t){if(1===this.nodeType)if(Z(n))for(e in n)B(this,e,n[e]);else B(this,n,Y(this,i,t,this.getAttribute(n)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&B(this,t)})},prop:function(e,n){return e=O[e]||e,n===t?this[0]&&this[0][e]:this.each(function(t){this[e]=Y(this,n,t,this[e])})},data:function(e,n){var i=this.attr("data-"+e.replace(m,"-$1").toLowerCase(),n);return null!==i?W(i):t},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=Y(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=Y(this,t,e,i.offset()),o=i.offsetParent().offset(),a={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(a.position="relative"),i.css(a)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[C(t)]||o.getPropertyValue(t);if(M(t)){var a={};return n.each(M(t)?t:[t],function(t,e){a[e]=r.style[C(e)]||o.getPropertyValue(e)}),a}}var s="";if("string"==L(t))i||0===i?s=F(t)+":"+U(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?s+=F(e)+":"+U(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(J(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=J(this),o=Y(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&J(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?J(this,""):(i=J(this),Y(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),void J(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),a=Y(this,e,r,J(this));a.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||s.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,a=this[0];return r===t?D(a)?a["inner"+i]:_(a)?a.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){a=n(this),a.css(e,Y(this,r,t,a[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:S.fragment(e)}),a=this.length>1;return r.length<1?this:this.each(function(t,s){o=i?s:s.parentNode,s=0==e?s.nextSibling:1==e?s.firstChild:2==e?s:null,r.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!o)return n(t).remove();G(o.insertBefore(t,s),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),S.Z.prototype=n.fn,S.uniq=P,S.deserializeValue=W,n.zepto=S,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(a[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,s,u,f){var h=l(e),d=a[h]||(a[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var a=p(i);a.fn=r,a.sel=s,a.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var l=u||r;a.proxy=function(t){if(t=T(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},a.i=d.length,d.push(a),"addEventListener"in e&&e.addEventListener(g(a.e),a.proxy,m(a,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function T(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=w,r&&r.apply(i,arguments)},e[n]=x}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function j(t){var e,i={originalEvent:t};for(e in t)b.test(e)||t[e]===n||(i[e]=t[e]);return T(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},a={},s={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};s.click=s.mousedown=s.mouseup=s.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){if(r(e)){var i=function(){return e.apply(n,arguments)};return i._zid=l(e),i}if(o(n))return t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var w=function(){return!0},x=function(){return!1},b=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,a,s,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,a,s,e,f)}),h):(o(a)||r(u)||u===!1||(u=s,s=a,a=n),(r(s)||s===!1)&&(u=s,s=n),u===!1&&(u=x),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),a&&(l=function(e){var n,o=t(e.target).closest(a,r).get(0);return o&&o!==r?(n=t.extend(j(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,s,a,l||c)}))},t.fn.off=function(e,i,a){var s=this;return e&&!o(e)?(t.each(e,function(t,e){s.off(t,i,e)}),s):(o(i)||r(a)||a===!1||(a=i,i=n),a===!1&&(a=x),s.each(function(){y(this,e,a,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):T(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(a,s){i=j(o(e)?t.Event(e):e),i._args=n,i.target=s,t.each(h(s,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(s[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),T(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function w(){}function x(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":a.test(t)?"script":s.test(t)&&"xml")||"text"}function b(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function E(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=b(e.url,e.data),e.data=void 0)}function T(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function S(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(u.name,u.value):"array"==o||!i&&"object"==o?S(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,s=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,a=(t.isFunction(o)?o():o)||"jsonp"+ ++e,s=n.createElement("script"),u=window[a],c=function(e){t(s).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(s).on("load error",function(e,n){clearTimeout(h),t(s).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[a]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[a]=function(){f=arguments},s.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),n.head.appendChild(s),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:w,success:w,error:w,complete:w,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),E(n),n.cache===!1&&(n.url=b(n.url,"_="+Date.now()));var a=n.dataType,s=/\?.+=\?/.test(n.url);if("jsonp"==a||s)return s||(n.url=b(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var T,u=n.accepts[a],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=w,clearTimeout(T);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){a=a||x(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==a?(1,eval)(e):"xml"==a?e=d.responseXML:"json"==a&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var j="async"in n?n.async:!0;d.open(n.type,n.url,j,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(T=setTimeout(function(){d.onreadystatechange=w,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(T.apply(null,arguments))},t.post=function(){var e=T.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=T.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var s,r=this,a=e.split(/\s/),u=T(e,n,i),f=u.success;return a.length>1&&(u.url=a[0],s=a[1]),u.success=function(e){r.html(s?t("<div>").html(e.replace(o,"")).find(s):e),f&&f.apply(r,arguments)},t.ajax(u),this};var j=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(j(t)+"="+j(e))},S(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t([].slice.call(this.get(0).elements)).each(function(){n=t(this);var i=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&e.push({name:n.attr("name"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(t,e){function x(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function b(t){return i?i+t:t.toLowerCase()}var i,c,l,h,p,d,m,g,v,y,n="",a={Webkit:"webkit",Moz:"",O:"o"},s=window.document,u=s.createElement("div"),f=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,w={};t.each(a,function(t,r){return u.style[t+"TransitionProperty"]!==e?(n="-"+t.toLowerCase()+"-",i=r,!1):void 0}),c=n+"transform",w[l=n+"transition-property"]=w[h=n+"transition-duration"]=w[d=n+"transition-delay"]=w[p=n+"transition-timing-function"]=w[m=n+"animation-name"]=w[g=n+"animation-duration"]=w[y=n+"animation-delay"]=w[v=n+"animation-timing-function"]="",t.fx={off:i===e&&u.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:n,transitionEnd:b("TransitionEnd"),animationEnd:b("AnimationEnd")},t.fn.animate=function(n,i,r,o,a){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,a=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(n,i,r,o,a)},t.fn.anim=function(n,i,r,o,a){var s,b,j,u={},E="",T=this,S=t.fx.transitionEnd,C=!1;if(i===e&&(i=t.fx.speeds._default/1e3),a===e&&(a=0),t.fx.off&&(i=0),"string"==typeof n)u[m]=n,u[g]=i+"s",u[y]=a+"s",u[v]=r||"linear",S=t.fx.animationEnd;else{b=[];for(s in n)f.test(s)?E+=s+"("+n[s]+") ":(u[s]=n[s],b.push(x(s)));E&&(u[c]=E,b.push(c)),i>0&&"object"==typeof n&&(u[l]=b.join(", "),u[h]=i+"s",u[d]=a+"s",u[p]=r||"linear")}return j=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(S,j)}else t(this).unbind(S,j);C=!0,t(this).css(w),o&&o.call(this)},i>0&&(this.bind(S,j),setTimeout(function(){C||j.call(T)},1e3*i+25)),this.size()&&this.get(0).clientLeft,this.css(u),0>=i&&setTimeout(function(){T.each(function(){j.call(this)})},0),this},u=null}(Zepto),function(t){function u(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function f(){o=null,e.last&&(e.el.trigger("longTap"),e={})}function c(){o&&clearTimeout(o),o=null}function l(){n&&clearTimeout(n),i&&clearTimeout(i),r&&clearTimeout(r),o&&clearTimeout(o),n=i=r=o=null,e={}}function h(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function p(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var n,i,r,o,s,e={},a=750;t(document).ready(function(){var d,m,y,w,g=0,v=0;"MSGesture"in window&&(s=new MSGesture,s.target=document.body),t(document).bind("MSGestureEnd",function(t){var n=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;n&&(e.el.trigger("swipe"),e.el.trigger("swipe"+n))}).on("touchstart MSPointerDown pointerdown",function(i){(!(w=p(i,"down"))||h(i))&&(y=w?i:i.touches[0],i.touches&&1===i.touches.length&&e.x2&&(e.x2=void 0,e.y2=void 0),d=Date.now(),m=d-(e.last||d),e.el=t("tagName"in y.target?y.target:y.target.parentNode),n&&clearTimeout(n),e.x1=y.pageX,e.y1=y.pageY,m>0&&250>=m&&(e.isDoubleTap=!0),e.last=d,o=setTimeout(f,a),s&&w&&s.addPointer(i.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(w=p(t,"move"))||h(t))&&(y=w?t:t.touches[0],c(),e.x2=y.pageX,e.y2=y.pageY,g+=Math.abs(e.x1-e.x2),v+=Math.abs(e.y1-e.y2))}).on("touchend MSPointerUp pointerup",function(o){(!(w=p(o,"up"))||h(o))&&(c(),e.x2&&Math.abs(e.x1-e.x2)>30||e.y2&&Math.abs(e.y1-e.y2)>30?r=setTimeout(function(){e.el.trigger("swipe"),e.el.trigger("swipe"+u(e.x1,e.x2,e.y1,e.y2)),e={}},0):"last"in e&&(30>g&&30>v?i=setTimeout(function(){var i=t.Event("tap");i.cancelTouch=l,e.el.trigger(i),e.isDoubleTap?(e.el&&e.el.trigger("doubleTap"),e={}):n=setTimeout(function(){n=null,e.el&&e.el.trigger("singleTap"),e={}},250)},0):e={}),g=v=0)}).on("touchcancel MSPointerCancel pointercancel",l),t(window).on("scroll",l)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto);
/**
 * v0.3.4
 * 自适应 rem 布局方案
 * 把视觉稿中的px转换成rem
 */
// ;(function(win, lib) {
//     var doc = win.document;
//     var docEl = doc.documentElement;
//     var metaEl = doc.querySelector('meta[name="viewport"]');
//     var flexibleEl = doc.querySelector('meta[name="flexible"]');
//     var dpr = 0;
//     var scale = 0;
//     var tid;
//     var flexible = lib.flexible || (lib.flexible = {});
    
//     if (metaEl) {
//         console.warn('将根据已有的meta标签来设置缩放比例');
//         var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
//         if (match) {
//             scale = parseFloat(match[1]);
//             dpr = parseInt(1 / scale);
//         }
//     } else if (flexibleEl) {
//         var content = flexibleEl.getAttribute('content');
//         if (content) {
//             var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
//             var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
//             if (initialDpr) {
//                 dpr = parseFloat(initialDpr[1]);
//                 scale = parseFloat((1 / dpr).toFixed(2));    
//             }
//             if (maximumDpr) {
//                 dpr = parseFloat(maximumDpr[1]);
//                 scale = parseFloat((1 / dpr).toFixed(2));    
//             }
//         }
//     }

//     if (!dpr && !scale) {
//         var isAndroid = win.navigator.appVersion.match(/android/gi);
//         var isIPhone = win.navigator.appVersion.match(/iphone/gi);
//         var devicePixelRatio = win.devicePixelRatio;
//         if (isIPhone) {
//             // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
//             if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
//                 dpr = 3;
//             } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
//                 dpr = 2;
//             } else {
//                 dpr = 1;
//             }
//         } else {
//             // 其他设备下，仍旧使用1倍的方案
//             dpr = 1;
//         }
//         scale = 1 / dpr;
//     }

//     docEl.setAttribute('data-dpr', dpr);
//     if (!metaEl) {
//         metaEl = doc.createElement('meta');
//         metaEl.setAttribute('name', 'viewport');
//         metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
//         if (docEl.firstElementChild) {
//             docEl.firstElementChild.appendChild(metaEl);
//         } else {
//             var wrap = doc.createElement('div');
//             wrap.appendChild(metaEl);
//             doc.write(wrap.innerHTML);
//         }
//     }

//     function refreshRem(){
//         var width = docEl.getBoundingClientRect().width;
//         if (width / dpr > 540) {
//             width = 540 * dpr;
//         }
//         var rem = width / 10;
//         docEl.style.fontSize = rem + 'px';
//         flexible.rem = win.rem = rem;
//     }

//     win.addEventListener('resize', function() {
//         clearTimeout(tid);
//         tid = setTimeout(refreshRem, 300);
//     }, false);
//     win.addEventListener('pageshow', function(e) {
//         if (e.persisted) {
//             clearTimeout(tid);
//             tid = setTimeout(refreshRem, 300);
//         }
//     }, false);

//     if (doc.readyState === 'complete') {
//         doc.body.style.fontSize = 12 * dpr + 'px';
//     } else {
//         doc.addEventListener('DOMContentLoaded', function(e) {
//             doc.body.style.fontSize = 12 * dpr + 'px';
//         }, false);
//     }
    

//     refreshRem();

//     flexible.dpr = win.dpr = dpr;
//     flexible.refreshRem = refreshRem;
//     flexible.rem2px = function(d) {
//         var val = parseFloat(d) * this.rem;
//         if (typeof d === 'string' && d.match(/rem$/)) {
//             val += 'px';
//         }
//         return val;
//     }
//     flexible.px2rem = function(d) {
//         var val = parseFloat(d) / this.rem;
//         if (typeof d === 'string' && d.match(/px$/)) {
//             val += 'rem';
//         }
//         return val;
//     }

// })(window, window['lib'] || (window['lib'] = {}));



!
function() {
    var a = "@charset \"utf-8\";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}ins,a{text-decoration:none}",
    b = document.createElement("style");
    if (document.getElementsByTagName("head")[0].appendChild(b), b.styleSheet) b.styleSheet.disabled || (b.styleSheet.cssText = a);
    else try {
        b.innerHTML = a
    } catch(c) {
        b.innerText = a
    }
} (); !
function(a, b) {
    function c() {
        var b = f.getBoundingClientRect().width;
        b / i > 540 && (b = 540 * i);
        var c = b / 10;
        f.style.fontSize = c + "px",
        k.rem = a.rem = c
    }
    var d, e = a.document,
    f = e.documentElement,
    g = e.querySelector('meta[name="viewport"]'),
    h = e.querySelector('meta[name="flexible"]'),
    i = 0,
    j = 0,
    k = b.flexible || (b.flexible = {});
    if (g) {
        console.warn("将根据已有的meta标签来设置缩放比例");
        var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        l && (j = parseFloat(l[1]), i = parseInt(1 / j))
    } else if (h) {
        var m = h.getAttribute("content");
        if (m) {
            var n = m.match(/initial\-dpr=([\d\.]+)/),
            o = m.match(/maximum\-dpr=([\d\.]+)/);
            n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))),
            o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)))
        }
    }
    if (!i && !j) {
        var p = (a.navigator.appVersion.match(/android/gi), a.navigator.appVersion.match(/iphone/gi)),
        q = a.devicePixelRatio;
        i = p ? q >= 3 && (!i || i >= 3) ? 3 : q >= 2 && (!i || i >= 2) ? 2 : 1 : 1,
        j = 1 / i
    }
    if (f.setAttribute("data-dpr", i), !g) if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild) f.firstElementChild.appendChild(g);
    else {
        var r = e.createElement("div");
        r.appendChild(g),
        e.write(r.innerHTML)
    }
    a.addEventListener("resize",
    function() {
        clearTimeout(d),
        d = setTimeout(c, 300)
    },
    !1),
    a.addEventListener("pageshow",
    function(a) {
        a.persisted && (clearTimeout(d), d = setTimeout(c, 300))
    },
    !1),
    "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px": e.addEventListener("DOMContentLoaded",
    function() {
        e.body.style.fontSize = 12 * i + "px"
    },
    !1),
    c(),
    k.dpr = a.dpr = i,
    k.refreshRem = c,
    k.rem2px = function(a) {
        var b = parseFloat(a) * this.rem;
        return "string" == typeof a && a.match(/rem$/) && (b += "px"),
        b
    },
    k.px2rem = function(a) {
        var b = parseFloat(a) / this.rem;
        return "string" == typeof a && a.match(/px$/) && (b += "rem"),
        b
    }
} (window, window.lib || (window.lib = {}));
/*
 */
(function($, window, undefined) {
    if (typeof $ === 'undefined') {
        throw new Error('zepto.fullpage\'s script requires Zepto');
    }
    var fullpage = null;
    var d = {
        page: '.page',
        start: 0,
        duration: 500,
        loop: false,
        drag: false,
        dir: 'v',
        der: 0.1,
        change: function(data) {},
        beforeChange: function(data) {},
        afterChange: function(data) {},
        orientationchange: function(orientation) {}
    };

    function touchmove(e) {
        e.preventDefault();
    }
    
    function fix(cur, pagesLength, loop) {
        if (cur < 0) {
            return !!loop ? pagesLength - 1 : 0;
        }

        if (cur >= pagesLength) {
            return !!loop ? 0 : pagesLength - 1;
        }


        return cur;
    }

    function move($ele, dir, dist) {
        var xPx = '0px', yPx = '0px';
        if(dir === 'v') yPx = dist + 'px';
        else xPx = dist + 'px';
        $ele.css({
            '-webkit-transform' : 'translate3d(' + xPx + ', ' + yPx + ', 0px);',
            'transform' : 'translate3d(' + xPx + ', ' + yPx + ', 0px);'
        });
    }

    function init(option) {
        var o = $.extend(true, {}, d, option);
        var that = this;
        that.curIndex = -1;
        that.o = o;

        that.startY = 0;
        that.movingFlag = false;

        that.$this.addClass('fullPage-wp');
        that.$parent = that.$this.parent();
        that.$pages = that.$this.find(o.page).addClass('fullPage-page fullPage-dir-' + o.dir);
        that.pagesLength = that.$pages.length;
        that.update();
        that.initEvent();
        that.start();
    }

    function Fullpage($this, option) {
        this.$this = $this;
        init.call(this, option);
    }

    $.extend(Fullpage.prototype, {
        update: function() {
            if (this.o.dir === 'h') {
                this.width = this.$parent.width();
                this.$pages.width(this.width);
                this.$this.width(this.width * this.pagesLength);
            }

            this.height = this.$parent.height();
            this.$pages.height(this.height);

            this.moveTo(this.curIndex < 0 ? this.o.start : this.curIndex);
        },
        initEvent: function() {
            var that = this;
            var $this = that.$this;

            $this.on('touchstart', function(e) {
                if (!that.status) {return 1;}
                //e.preventDefault();
                if (that.movingFlag) {
                    return 0;
                }

                that.startX = e.targetTouches[0].pageX;
                that.startY = e.targetTouches[0].pageY;
            });
            $this.on('touchend', function(e) {
                if (!that.status) {return 1;}
                //e.preventDefault();
                if (that.movingFlag) {
                    return 0;
                }

                var sub = that.o.dir === 'v' ? (e.changedTouches[0].pageY - that.startY) / that.height : (e.changedTouches[0].pageX - that.startX) / that.width;
                var der = (sub > that.o.der || sub < -that.o.der) ? sub > 0 ? -1 : 1 : 0;

                that.moveTo(that.curIndex + der, true);
            });
            if (that.o.drag) {
                $this.on('touchmove', function(e) {
                    if (!that.status) {return 1;}
                    //e.preventDefault();
                    if (that.movingFlag) {
                        that.startX = e.targetTouches[0].pageX;
                        that.startY = e.targetTouches[0].pageY;
                        return 0;
                    }

                    var y = e.changedTouches[0].pageY - that.startY;
                    if( (that.curIndex == 0 && y > 0) || (that.curIndex === that.pagesLength - 1 && y < 0) ) y /= 2;
                    var x = e.changedTouches[0].pageX - that.startX;
                    if( (that.curIndex == 0 && x > 0) || (that.curIndex === that.pagesLength - 1 && x < 0) ) x /= 2;
                    var dist = (that.o.dir === 'v' ? (-that.curIndex * that.height + y) : (-that.curIndex * that.width + x));
                    $this.removeClass('anim');
                    move($this, that.o.dir, dist);
                });
            }

            // 翻转屏幕提示
            // ==============================             
            window.addEventListener('orientationchange', function() {
                if (window.orientation === 180 || window.orientation === 0) {
                    that.o.orientationchange('portrait');
                }
                if (window.orientation === 90 || window.orientation === -90) {
                    that.o.orientationchange('landscape');
                }
            }, false);

            window.addEventListener('resize', function() {
                that.update();
            }, false);
        },

        holdTouch: function() {
            $(document).on('touchmove', touchmove);
        },
        unholdTouch: function() {
            $(document).off('touchmove', touchmove);
        },
        start: function() {
            this.status = 1;
            this.holdTouch();
        },
        stop: function() {
            this.status = 0;
            this.unholdTouch();
        },
        moveTo: function(next, anim) {
            var that = this;
            var $this = that.$this;
            var cur = that.curIndex;

            next = fix(next, that.pagesLength, that.o.loop);

            if (anim) {
                $this.addClass('anim');
            } else {
                $this.removeClass('anim');
            }

            if (next !== cur) {
                var flag = that.o.beforeChange({
                    next: next,
                    cur: cur
                });

                // beforeChange 显示返回false 可阻止滚屏的发生
                if (flag === false) {
                    return 1;
                }
            }

            that.movingFlag = true;
            that.curIndex = next;
            move($this, that.o.dir, -next * (that.o.dir === 'v' ? that.height : that.width));

            if (next !== cur) {
                that.o.change({
                    prev: cur,
                    cur: next
                });
            }

            window.setTimeout(function() {
                that.movingFlag = false;
                if (next !== cur) {
                    that.o.afterChange({
                        prev: cur,
                        cur: next
                    });
                    that.$pages.removeClass('cur').eq(next).addClass('cur');
                }
            }, that.o.duration);

            return 0;
        },
        movePrev: function(anim) {
            this.moveTo(this.curIndex - 1, anim);
        },
        moveNext: function(anim) {
            this.moveTo(this.curIndex + 1, anim);
        },
        getCurIndex: function () {
            return this.curIndex;
        }
    });

    $.fn.fullpage = function(option) {
        if (!fullpage) {
            fullpage = new Fullpage($(this), option);
        }
        return this;
    };
    $.fn.fullpage.version = '0.5.0';
    //暴露方法
    $.each(['update', 'moveTo', 'moveNext', 'movePrev', 'start', 'stop', 'getCurIndex', 'holdTouch', 'unholdTouch'], function(key, val) {
        $.fn.fullpage[val] = function() {
            if (!fullpage) {
                return 0;
            }
            return fullpage[val].apply(fullpage, [].slice.call(arguments, 0));
        };
    });
}(Zepto, window));


/**
 * 
 */

$(function(){

    var pageNum = $(".page").length;

    $('.wp-inner').fullpage({
                loop:true,
                change: function (e) {
                    // 移除动画属性
                    $('.page').eq(e.cur).find('.js-animate').each(function() {
                        $(this).removeClass($(this).data('animate')).hide();
                    });
                    
                    if(e.cur == pageNum-1){
                        $(".start").hide();
                    }else{
                        $(".start").show();
                    }

                    console.log(e)
                },
                afterChange: function (e) {
                    // 添加动画属性
                    $('.page').eq(e.cur).find('.js-animate')
                        .each(function () {
                            $(this).addClass($(this).data('animate')).show();
                        });
                }
    });
})

