/*! webapp v0.0.1 | (c) Mon Jun 13 2016 16:48:23 GMT+0800 (CST) zanjser@163.com @Julian  | http://www.panli.com  拼邮分享H5 */
function detectOS(){var t=navigator.userAgent,e="Win32"==navigator.platform||"Windows"==navigator.platform,n="Mac68K"==navigator.platform||"MacPPC"==navigator.platform||"Macintosh"==navigator.platform||"MacIntel"==navigator.platform;if(n)return"Mac";var i="X11"==navigator.platform&&!e&&!n;if(i)return"Unix";var r=String(navigator.platform).indexOf("Linux")>-1,o="android"==t.toLowerCase().match(/android/i);if(r)return o?"Android":"Linux";if(e){var a=t.indexOf("Windows NT 5.0")>-1||t.indexOf("Windows 2000")>-1;if(a)return"Win2000";var s=t.indexOf("Windows NT 5.1")>-1||t.indexOf("Windows XP")>-1;if(s)return"WinXP";var u=t.indexOf("Windows NT 5.2")>-1||t.indexOf("Windows 2003")>-1;if(u)return"Win2003";var c=t.indexOf("Windows NT 6.0")>-1||t.indexOf("Windows Vista")>-1;if(c)return"WinVista";var l=t.indexOf("Windows NT 6.1")>-1||t.indexOf("Windows 7")>-1;if(l)return"Win7"}return"other"}function APPDown(){var t="https://ad.apps.fm/GNZfabs7arqCu1oRxT3gDvE7og6fuV2oOMeOQdRqrE2nBK5AVcI9-S-10UZoq7P_urjYv6TX1wm8e-coWvUlas00Sjy-9REIf-KqzixCY4U",e="https://ad.apps.fm/tkfd04r4dxcGudYs0BPY2q5px440Px0vtrw1ww5B54zLvIIEY2TL1pcyA09eK7cfiGoUv6ck5zsybPsRVqKMKw",n=t;"Android"==detectOS()&&(n=e),$(".down-btn").attr("href",n)}function loadImage(t,e,n){var i=new window.Image;i.onload=function(r){"undefined"==typeof i.readyState&&(i.readyState="undefined"),"complete"==i.readyState||"loaded"==i.readyState||i.complete?n({msg:"ok",src:e,id:t}):i.onreadystatechange(r)},i.onerror=function(e){n({msg:"error",id:t})},i.onreadystatechange=function(t){},i.src=e}var Zepto=function(){function t(t){return null==t?String(t):U[V.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return O.call(t,function(t){return null!=t})}function u(t){return t.length>0?E.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in M?M[t]:M[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||A[c(t)]?e:e+"px"}function h(t){var e,n;return L[t]||(e=$.createElement(t),$.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),L[t]=n),L[t]}function d(t){return"children"in t?N.call(t.children):E.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function p(t,e,n){for(T in e)n&&(o(e[T])||J(e[T]))?(o(e[T])&&!o(t[T])&&(t[T]={}),J(e[T])&&!J(t[T])&&(t[T]=[]),p(t[T],e[T],n)):e[T]!==b&&(t[T]=e[T])}function m(t,e){return null==e?E(t):E(t).filter(e)}function g(t,n,i,r){return e(n)?n.call(t,i,r):n}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className,i=n&&n.baseVal!==b;return e===b?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function x(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?E.parseJSON(t):t:e):t}catch(n){return t}}function w(t,e){e(t);for(var n in t.childNodes)w(t.childNodes[n],e)}var b,T,E,C,S,P,j=[],N=j.slice,O=j.filter,$=window.document,L={},M={},A={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},I=/^\s*<(\w+|!)[^>]*>/,z=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,D=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,F=/^(?:body|html)$/i,Z=/([A-Z])/g,R=["val","css","html","text","data","width","height","offset"],k=["after","prepend","before","append"],q=$.createElement("table"),_=$.createElement("tr"),X={tr:$.createElement("tbody"),tbody:q,thead:q,tfoot:q,td:_,th:_,"*":$.createElement("div")},W=/complete|loaded|interactive/,Y=/^[\w-]*$/,U={},V=U.toString,H={},B=$.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},J=Array.isArray||function(t){return t instanceof Array};return H.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=B).appendChild(t),i=~H.qsa(r,e).indexOf(t),o&&B.removeChild(t),i},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return O.call(t,function(e,n){return t.indexOf(e)==n})},H.fragment=function(t,e,n){var i,r,a;return z.test(t)&&(i=E($.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(D,"<$1></$2>")),e===b&&(e=I.test(t)&&RegExp.$1),e in X||(e="*"),a=X[e],a.innerHTML=""+t,i=E.each(N.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(r=E(i),E.each(n,function(t,e){R.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},H.Z=function(t,e){return t=t||[],t.__proto__=E.fn,t.selector=e||"",t},H.isZ=function(t){return t instanceof H.Z},H.init=function(t,n){var i;if(!t)return H.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&I.test(t))i=H.fragment(t,RegExp.$1,n),t=null;else{if(n!==b)return E(n).find(t);i=H.qsa($,t)}else{if(e(t))return E($).ready(t);if(H.isZ(t))return t;if(J(t))i=s(t);else if(r(t))i=[t],t=null;else if(I.test(t))i=H.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==b)return E(n).find(t);i=H.qsa($,t)}}return H.Z(i,t)},E=function(t,e){return H.init(t,e)},E.extend=function(t){var e,n=N.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){p(t,n,e)}),t},H.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],a=r||o?e.slice(1):e,s=Y.test(a);return i(t)&&s&&r?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:N.call(s&&!r?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},E.contains=function(t,e){return t!==e&&t.contains(e)},E.type=t,E.isFunction=e,E.isWindow=n,E.isArray=J,E.isPlainObject=o,E.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},E.inArray=function(t,e,n){return j.indexOf.call(e,t,n)},E.camelCase=S,E.trim=function(t){return null==t?"":String.prototype.trim.call(t)},E.uuid=0,E.support={},E.expr={},E.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return u(o)},E.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},E.grep=function(t,e){return O.call(t,e)},window.JSON&&(E.parseJSON=JSON.parse),E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){U["[object "+e+"]"]=e.toLowerCase()}),E.fn={forEach:j.forEach,reduce:j.reduce,push:j.push,sort:j.sort,indexOf:j.indexOf,concat:j.concat,map:function(t){return E(E.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return E(N.apply(this,arguments))},ready:function(t){return W.test($.readyState)&&$.body?t(E):$.addEventListener("DOMContentLoaded",function(){t(E)},!1),this},get:function(t){return t===b?N.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return j.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):E(O.call(this,function(e){return H.matches(e,t)}))},add:function(t,e){return E(P(this.concat(E(t,e))))},is:function(t){return this.length>0&&H.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==b)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?N.call(t):E(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return E(n)},has:function(t){return this.filter(function(){return r(t)?E.contains(this,t):E(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:E(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:E(t)},find:function(t){var e,n=this;return e="object"==typeof t?E(t).filter(function(){var t=this;return j.some.call(n,function(e){return E.contains(e,t)})}):1==this.length?E(H.qsa(this[0],t)):this.map(function(){return H.qsa(this,t)})},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=E(t));n&&!(r?r.indexOf(n)>=0:H.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return E(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=E.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(P(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return d(this)}),t)},contents:function(){return this.map(function(){return N.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return O.call(d(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return E.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=E(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){E(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){E(this[0]).before(t=E(t));for(var e;(e=t.children()).length;)t=e.first();E(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=E(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){E(this).replaceWith(E(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=E(this);(t===b?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return E(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return E(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;E(this).empty().append(g(this,t,e,n))})},text:function(t){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t===b?"":""+t})},attr:function(t,e){var n;return"string"==typeof t&&e===b?0==this.length||1!==this[0].nodeType?b:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(r(t))for(T in t)v(this,T,t[T]);else v(this,t,g(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&v(this,t)})},prop:function(t,e){return t=G[t]||t,e===b?this[0]&&this[0][t]:this.each(function(n){this[t]=g(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+t.replace(Z,"-$1").toLowerCase(),e);return null!==n?x(n):b},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?E(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=g(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=E(this),i=g(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i=this[0],r=getComputedStyle(i,"");if(!i)return;if("string"==typeof e)return i.style[S(e)]||r.getPropertyValue(e);if(J(e)){var o={};return E.each(J(e)?e:[e],function(t,e){o[e]=i.style[S(e)]||r.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(T in e)e[T]||0===e[T]?a+=c(T)+":"+f(T,e[T])+";":this.each(function(){this.style.removeProperty(c(T))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(E(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?j.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){C=[];var n=y(this),i=g(this,t,e,n);i.split(/\s+/g).forEach(function(t){E(this).hasClass(t)||C.push(t)},this),C.length&&y(this,n+(n?" ":"")+C.join(" "))}):this},removeClass:function(t){return this.each(function(e){return t===b?y(this,""):(C=y(this),g(this,t,e,C).split(/\s+/g).forEach(function(t){C=C.replace(l(t)," ")}),void y(this,C.trim()))})},toggleClass:function(t,e){return t?this.each(function(n){var i=E(this),r=g(this,t,n,y(this));r.split(/\s+/g).forEach(function(t){(e===b?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===b?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===b?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=F.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(E(t).css("margin-top"))||0,n.left-=parseFloat(E(t).css("margin-left"))||0,i.top+=parseFloat(E(e[0]).css("border-top-width"))||0,i.left+=parseFloat(E(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||$.body;t&&!F.test(t.nodeName)&&"static"==E(t).css("position");)t=t.offsetParent;return t})}},E.fn.detach=E.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});E.fn[t]=function(r){var o,a=this[0];return r===b?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=E(this),a.css(t,g(this,r,e,a[t]()))})}}),k.forEach(function(e,n){var i=n%2;E.fn[e]=function(){var e,r,o=E.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:H.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return E(t).remove();w(r.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},E.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return E(t)[e](this),this}}),H.Z.prototype=E.fn,H.uniq=P,H.deserializeValue=x,E.zepto=H,E}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in x||!!e}function a(t){return w[t]||y&&x[t]||t}function s(n,r,s,u,l,h,d){var p=e(n),m=g[p]||(g[p]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var r=i(e);r.fn=s,r.sel=l,r.e in w&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=h;var p=h||s;r.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=p.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(a(r.e),r.proxy,o(r,d))})}function u(t,i,r,s,u){var c=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,s).forEach(function(e){delete g[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(C,function(t,i){var r=n[t];e[t]=function(){return this[i]=b,r&&r.apply(n,arguments)},e[i]=T}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function l(t){var e,n={originalEvent:t};for(e in t)E.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,d=Array.prototype.slice,p=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,x={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,i){if(p(n)){var r=function(){return n.apply(i,arguments)};return r._zid=e(n),r}if(m(i))return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var b=function(){return!0},T=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,C={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var a,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(m(n)||p(r)||r===!1||(r=i,i=n,n=f),(p(i)||i===!1)&&(r=i,i=f),r===!1&&(r=T),h.each(function(f,h){o&&(a=function(t){return u(h,t.type,r),r.apply(this,arguments)}),n&&(c=function(e){var i,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(i=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||r).apply(o,[i].concat(d.call(arguments,1)))):void 0}),s(h,e,r,i,n,c||a)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||p(i)||i===!1||(i=n,n=f),i===!1&&(i=T),r.each(function(){u(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=l(m(e)?t.Event(e):e),r._args=i,r.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),c(n)}}(Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function a(t,e,i,r){var o=i.context,a="success";i.success.call(o,t,a,e),r&&r.resolveWith(o,[t,a,e]),n(i,o,"ajaxSuccess",[e,i,t]),u(a,e,i)}function s(t,e,i,r,o){var a=r.context;r.error.call(a,i,e,t),o&&o.rejectWith(a,[i,e,t]),n(r,a,"ajaxError",[i,r,t||e]),u(e,i,r)}function u(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==T?"json":w.test(t)?"script":b.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function d(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function p(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(u.name,u.value):"array"==o||!i&&"object"==o?p(e,u,i,n):e.add(n,u)})}var m,g,v=0,y=window.document,x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,b=/^(?:text|application)\/xml/i,T="application/json",E="text/html",C=/^\s*$/;t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++v,l=y.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},d={abort:h};return n&&n.promise(d),t(l).on("load error",function(o,u){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?a(i[0],d,e,n):s(null,u||"error",d,e,n),window[c]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),o(d,e)===!1?(h("abort"),d):(window[c]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),d)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:T,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),r=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===n[m]&&(n[m]=t.ajaxSettings[m]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),h(n),n.cache===!1&&(n.url=f(n.url,"_="+Date.now()));var u=n.dataType,d=/\?.+=\?/.test(n.url);if("jsonp"==u||d)return d||(n.url=f(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,r);var p,v=n.accepts[u],y={},x=function(t,e){y[t.toLowerCase()]=[t,e]},w=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,b=n.xhr(),T=b.setRequestHeader;if(r&&r.promise(b),n.crossDomain||x("X-Requested-With","XMLHttpRequest"),x("Accept",v||"*/*"),(v=n.mimeType||v)&&(v.indexOf(",")>-1&&(v=v.split(",",2)[0]),b.overrideMimeType&&b.overrideMimeType(v)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&x("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(g in n.headers)x(g,n.headers[g]);if(b.setRequestHeader=x,b.onreadystatechange=function(){if(4==b.readyState){b.onreadystatechange=c,clearTimeout(p);var e,i=!1;if(b.status>=200&&b.status<300||304==b.status||0==b.status&&"file:"==w){u=u||l(n.mimeType||b.getResponseHeader("content-type")),e=b.responseText;try{"script"==u?(0,eval)(e):"xml"==u?e=b.responseXML:"json"==u&&(e=C.test(e)?null:t.parseJSON(e))}catch(o){i=o}i?s(i,"parsererror",b,n,r):a(e,b,n,r)}else s(b.statusText||null,b.status?"error":"abort",b,n,r)}},o(b,n)===!1)return b.abort(),s(null,"abort",b,n,r),b;if(n.xhrFields)for(g in n.xhrFields)b[g]=n.xhrFields[g];var E="async"in n?n.async:!0;b.open(n.type,n.url,E,n.username,n.password);for(g in y)T.apply(b,y[g]);return n.timeout>0&&(p=setTimeout(function(){b.onreadystatechange=c,b.abort(),s(null,"timeout",b,n,r)},n.timeout)),b.send(n.data?n.data:null),b},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var e=d.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=d.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=d(e,n,i),u=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(x,"")).find(r):e),u&&u.apply(o,arguments)},t.ajax(s),this};var S=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(S(t)+"="+S(e))},p(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t([].slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(t,e){function n(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function i(t){return r?r+t:t.toLowerCase()}var r,o,a,s,u,c,l,f,h,d,p="",m={Webkit:"webkit",Moz:"",O:"o"},g=window.document,v=g.createElement("div"),y=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,x={};t.each(m,function(t,n){return v.style[t+"TransitionProperty"]!==e?(p="-"+t.toLowerCase()+"-",r=n,!1):void 0}),o=p+"transform",x[a=p+"transition-property"]=x[s=p+"transition-duration"]=x[c=p+"transition-delay"]=x[u=p+"transition-timing-function"]=x[l=p+"animation-name"]=x[f=p+"animation-duration"]=x[d=p+"animation-delay"]=x[h=p+"animation-timing-function"]="",t.fx={off:r===e&&v.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:p,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(n,i,r,o,a){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,a=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(n,i,r,o,a)},t.fn.anim=function(i,r,p,m,g){var v,w,b,T={},E="",C=this,S=t.fx.transitionEnd,P=!1;if(r===e&&(r=t.fx.speeds._default/1e3),g===e&&(g=0),t.fx.off&&(r=0),"string"==typeof i)T[l]=i,T[f]=r+"s",T[d]=g+"s",T[h]=p||"linear",S=t.fx.animationEnd;else{w=[];for(v in i)y.test(v)?E+=v+"("+i[v]+") ":(T[v]=i[v],w.push(n(v)));E&&(T[o]=E,w.push(o)),r>0&&"object"==typeof i&&(T[a]=w.join(", "),T[s]=r+"s",T[c]=g+"s",T[u]=p||"linear")}return b=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(S,b)}else t(this).unbind(S,b);P=!0,t(this).css(x),m&&m.call(this)},r>0&&(this.bind(S,b),setTimeout(function(){P||b.call(C)},1e3*r+25)),this.size()&&this.get(0).clientLeft,this.css(T),0>=r&&setTimeout(function(){C.each(function(){b.call(this)})},0),this},v=null}(Zepto),function(t){function e(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function n(){l=null,h.last&&(h.el.trigger("longTap"),h={})}function i(){l&&clearTimeout(l),l=null}function r(){s&&clearTimeout(s),u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),s=u=c=l=null,h={}}function o(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function a(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var s,u,c,l,f,h={},d=750;t(document).ready(function(){var p,m,g,v,y=0,x=0;"MSGesture"in window&&(f=new MSGesture,f.target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(e){(!(v=a(e,"down"))||o(e))&&(g=v?e:e.touches[0],e.touches&&1===e.touches.length&&h.x2&&(h.x2=void 0,h.y2=void 0),p=Date.now(),m=p-(h.last||p),h.el=t("tagName"in g.target?g.target:g.target.parentNode),s&&clearTimeout(s),h.x1=g.pageX,h.y1=g.pageY,m>0&&250>=m&&(h.isDoubleTap=!0),h.last=p,l=setTimeout(n,d),f&&v&&f.addPointer(e.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(v=a(t,"move"))||o(t))&&(g=v?t:t.touches[0],i(),h.x2=g.pageX,h.y2=g.pageY,y+=Math.abs(h.x1-h.x2),x+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp pointerup",function(n){(!(v=a(n,"up"))||o(n))&&(i(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?c=setTimeout(function(){h.el.trigger("swipe"),h.el.trigger("swipe"+e(h.x1,h.x2,h.y1,h.y2)),h={}},0):"last"in h&&(30>y&&30>x?u=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=r,h.el.trigger(e),h.isDoubleTap?(h.el&&h.el.trigger("doubleTap"),h={}):s=setTimeout(function(){s=null,h.el&&h.el.trigger("singleTap"),h={}},250)},0):h={}),y=x=0)}).on("touchcancel MSPointerCancel pointercancel",r),t(window).on("scroll",r)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto),!function(){var t="@charset \"utf-8\";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}ins,a{text-decoration:none}",e=document.createElement("style");if(document.getElementsByTagName("head")[0].appendChild(e),e.styleSheet)e.styleSheet.disabled||(e.styleSheet.cssText=t);else try{e.innerHTML=t}catch(n){e.innerText=t}}(),!function(t,e){function n(){var e=o.getBoundingClientRect().width;e/u>540&&(e=540*u);var n=e/10;o.style.fontSize=n+"px",l.rem=t.rem=n}var i,r=t.document,o=r.documentElement,a=r.querySelector('meta[name="viewport"]'),s=r.querySelector('meta[name="flexible"]'),u=0,c=0,l=e.flexible||(e.flexible={});if(a){console.warn("将根据已有的meta标签来设置缩放比例");var f=a.getAttribute("content").match(/initial\-scale=([\d\.]+)/);f&&(c=parseFloat(f[1]),u=parseInt(1/c))}else if(s){var h=s.getAttribute("content");if(h){var d=h.match(/initial\-dpr=([\d\.]+)/),p=h.match(/maximum\-dpr=([\d\.]+)/);d&&(u=parseFloat(d[1]),c=parseFloat((1/u).toFixed(2))),
p&&(u=parseFloat(p[1]),c=parseFloat((1/u).toFixed(2)))}}if(!u&&!c){var m=(t.navigator.appVersion.match(/android/gi),t.navigator.appVersion.match(/iphone/gi)),g=t.devicePixelRatio;u=m?g>=3&&(!u||u>=3)?3:g>=2&&(!u||u>=2)?2:1:1,c=1/u}if(o.setAttribute("data-dpr",u),!a)if(a=r.createElement("meta"),a.setAttribute("name","viewport"),a.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),o.firstElementChild)o.firstElementChild.appendChild(a);else{var v=r.createElement("div");v.appendChild(a),r.write(v.innerHTML)}t.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===r.readyState?r.body.style.fontSize=12*u+"px":r.addEventListener("DOMContentLoaded",function(){r.body.style.fontSize=12*u+"px"},!1),n(),l.dpr=t.dpr=u,l.refreshRem=n,l.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},l.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={})),function(t,e,n){function i(t){t.preventDefault()}function r(t,e,n){return 0>t?n?e-1:0:t>=e?n?0:e-1:t}function o(t,e,n){var i="0px",r="0px";"v"===e?r=n+"px":i=n+"px",t.css({"-webkit-transform":"translate3d("+i+", "+r+", 0px);",transform:"translate3d("+i+", "+r+", 0px);"})}function a(e){var n=t.extend(!0,{},c,e),i=this;i.curIndex=-1,i.o=n,i.startY=0,i.movingFlag=!1,i.$this.addClass("fullPage-wp"),i.$parent=i.$this.parent(),i.$pages=i.$this.find(n.page).addClass("fullPage-page fullPage-dir-"+n.dir),i.pagesLength=i.$pages.length,i.update(),i.initEvent(),i.start()}function s(t,e){this.$this=t,a.call(this,e)}if("undefined"==typeof t)throw new Error("zepto.fullpage's script requires Zepto");var u=null,c={page:".page",start:0,duration:500,loop:!1,drag:!1,dir:"v",der:.1,change:function(t){},beforeChange:function(t){},afterChange:function(t){},orientationchange:function(t){}};t.extend(s.prototype,{update:function(){"h"===this.o.dir&&(this.width=this.$parent.width(),this.$pages.width(this.width),this.$this.width(this.width*this.pagesLength)),this.height=this.$parent.height(),this.$pages.height(this.height),this.moveTo(this.curIndex<0?this.o.start:this.curIndex)},initEvent:function(){var t=this,n=t.$this;n.on("touchstart",function(e){return t.status?t.movingFlag?0:(t.startX=e.targetTouches[0].pageX,void(t.startY=e.targetTouches[0].pageY)):1}),n.on("touchend",function(e){if(!t.status)return 1;if(t.movingFlag)return 0;var n="v"===t.o.dir?(e.changedTouches[0].pageY-t.startY)/t.height:(e.changedTouches[0].pageX-t.startX)/t.width,i=n>t.o.der||n<-t.o.der?n>0?-1:1:0;t.moveTo(t.curIndex+i,!0)}),t.o.drag&&n.on("touchmove",function(e){if(!t.status)return 1;if(t.movingFlag)return t.startX=e.targetTouches[0].pageX,t.startY=e.targetTouches[0].pageY,0;var i=e.changedTouches[0].pageY-t.startY;(0==t.curIndex&&i>0||t.curIndex===t.pagesLength-1&&0>i)&&(i/=2);var r=e.changedTouches[0].pageX-t.startX;(0==t.curIndex&&r>0||t.curIndex===t.pagesLength-1&&0>r)&&(r/=2);var a="v"===t.o.dir?-t.curIndex*t.height+i:-t.curIndex*t.width+r;n.removeClass("anim"),o(n,t.o.dir,a)}),e.addEventListener("orientationchange",function(){180!==e.orientation&&0!==e.orientation||t.o.orientationchange("portrait"),90!==e.orientation&&-90!==e.orientation||t.o.orientationchange("landscape")},!1),e.addEventListener("resize",function(){t.update()},!1)},holdTouch:function(){t(document).on("touchmove",i)},unholdTouch:function(){t(document).off("touchmove",i)},start:function(){this.status=1,this.holdTouch()},stop:function(){this.status=0,this.unholdTouch()},moveTo:function(t,n){var i=this,a=i.$this,s=i.curIndex;if(t=r(t,i.pagesLength,i.o.loop),n?a.addClass("anim"):a.removeClass("anim"),t!==s){var u=i.o.beforeChange({next:t,cur:s});if(u===!1)return 1}return i.movingFlag=!0,i.curIndex=t,o(a,i.o.dir,-t*("v"===i.o.dir?i.height:i.width)),t!==s&&i.o.change({prev:s,cur:t}),e.setTimeout(function(){i.movingFlag=!1,t!==s&&(i.o.afterChange({prev:s,cur:t}),i.$pages.removeClass("cur").eq(t).addClass("cur"))},i.o.duration),0},movePrev:function(t){this.moveTo(this.curIndex-1,t)},moveNext:function(t){this.moveTo(this.curIndex+1,t)},getCurIndex:function(){return this.curIndex}}),t.fn.fullpage=function(e){return u||(u=new s(t(this),e)),this},t.fn.fullpage.version="0.5.0",t.each(["update","moveTo","moveNext","movePrev","start","stop","getCurIndex","holdTouch","unholdTouch"],function(e,n){t.fn.fullpage[n]=function(){return u?u[n].apply(u,[].slice.call(arguments,0)):0}})}(Zepto,window),$(function(){var t=$(".page").length;APPDown(),$(".wp-inner").fullpage({loop:!0,change:function(e){$(".page").eq(e.cur).find(".js-animate").each(function(){$(this).removeClass($(this).data("animate")).hide()}),e.cur==t-1?$(".start").hide():$(".start").show()},afterChange:function(t){$(".page").eq(t.cur).find(".js-animate").each(function(){$(this).addClass($(this).data("animate")).show()})}}),$(".loading").hide()});