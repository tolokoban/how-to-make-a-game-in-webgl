require("dom",function(e,t){function n(){return A(E,arguments)}function r(e,t,n){return Object.defineProperty(e,"element",{value:t,writable:!1,configurable:!1,enumerable:!0}),n?e:(e.on=u.bind(e,t),e.css=i.bind(e,t),e.add=s.bind(e,t),e.att=a.bind(e,t),e.addClass=d.bind(e,t),e.hasClass=m.bind(e,t),e.removeClass=p.bind(e,t),e.toggleClass=h.bind(e,t),e)}function o(e,t){return e=C(e),t=C(t),t.parentNode.replaceChild(e,t),e}function i(e,t){e=C(e);var n,r;for(n in t)r=t[n],e.style[n]=r;return e}function a(e,t,n){e=C(e);var r,o;"string"==typeof t&&(r=t,t={},t[r]=n);for(r in t)o=t[r],e.setAttribute(r,o);return e}function l(e,t){return e=C(e),e.removeAttribute(t),e}function s(e){e=C(e);try{var t,n;for(t=1;t<arguments.length;t++)n=arguments[t],"string"==typeof n||"number"==typeof n?n=document.createTextNode(n):"function"==typeof n.element?n=n.element():"undefined"!=typeof n.element&&(n=n.element),e.appendChild(n);return e}catch(e){throw console.error("[DOM.add] arguments=",[].slice.call(arguments)),Error("[DOM.add] "+e)}}function c(e){if(Array.isArray(e))return e.forEach(function(e){c(e)}),e;var t=e[N];return"undefined"==typeof t?e:(t.off(),void delete e[N])}function u(e,t){if("function"!=typeof t&&null!==t||(t={tap:t}),Array.isArray(e))return e.forEach(function(e){u(e,t)}),e;"undefined"==typeof e[N]&&(e[N]=new x(e));var n,r,o;for(n in t)r=t[n],"!"==n.charAt(0)?(n=n.substr(1),o=!0):o=!1,"keydown"==n||"keyup"==n?e.addEventListener(n,r,o):e[N].on(n,r,o);return e}function f(e,t){try{var n,r,o,i,a=document.createElementNS(e,t);for(n=2;n<arguments.length;n++)if(r=arguments[n],Array.isArray(r))r.forEach(function(e){switch(typeof e){case"string":case"number":case"boolean":e=document.createTextNode(""+e)}s(a,e)});else switch(typeof r){case"string":r.split(" ").forEach(function(e){e.length>0&&d(a,e)});break;case"object":for(o in r)i=r[o],a.setAttribute(o,i);break;default:throw Error("[dom.tag] Error creating <"+t+">: Invalid argument #"+n+"!")}return a}catch(n){console.error("[dom.tagNS] Error with `ns` = ",e," and `name` = ",t),console.error(n)}}function d(e){var t=[].slice.call(arguments,1);return Array.isArray(e)?(t.unshift(null),e.forEach(function(e){t[0]=e,d.apply(void 0,t)}),e):(e=C(e),t.forEach(function(t){if("string"==typeof t&&(t=t.trim(),0!=t.length))try{e.classList.add(t)}catch(e){console.error("[dom.addClass] Invalid class name: ",t),console.error(e)}}),e)}function m(e,t){return e=C(e),e.classList.contains(t)}function p(e){var t=[].slice.call(arguments,1);return Array.isArray(e)?(t.unshift(null),e.forEach(function(e){t[0]=e,p.apply(void 0,t)}),e):(e=C(e),t.forEach(function(t){if("string"==typeof t)try{e.classList.remove(t)}catch(e){console.error("[dom.removeClass] Invalid class name: ",t),console.error(e)}}),e)}function h(e){var t=[].slice.call(arguments,1);return t.forEach(function(t){m(e,t)?p(e,t):d(e,t)}),e}function v(e){e=C(e);for(var t=e;t.firstChild;)t.removeChild(t.firstChild);var n=[].slice.call(arguments);return n.length>1&&s.apply(this,n),e}function w(e,t){return e=C(e),"undefined"==typeof t&&(t=e,e=window.document),e.querySelector(t)}function g(e){e=C(e);var t=e.parentElement;return t?(t.removeChild(e),t):t}function y(t){var n=[].slice.call(arguments);n.shift(),0==n.length&&(n=["div"]),n.push("dom","custom");var r;return"undefined"!=typeof n[0].element?(r=n[0].element,d(r,"dom","custom")):"function"==typeof n[0].appendChild?(r=n[0],d(r,"dom","custom")):r=e.tag.apply(e,n),Object.defineProperty(t,"element",{value:r,writable:!1,configurable:!1,enumerable:!0}),r}function b(e,t){return"undefined"==typeof t&&(t=""),null===t&&(t=""),"string"!=typeof t&&(t=JSON.stringify(t)),"<html>"==t.substr(0,6)?e.innerHTML=t.substr(6):e.textContent=t,e}function C(e){return"function"==typeof e.element?e.element():e.element?e.element:e}var E={en:{}},A=require("$").intl;require("polyfill.classList");var x=require("tfw.pointer-events"),N="dom"+Date.now();e.tagNS=f,e.svgRoot=f.bind(void 0,"http://www.w3.org/2000/svg","svg",{version:"1.1","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),e.svg=f.bind(void 0,"http://www.w3.org/2000/svg"),e.tag=f.bind(void 0,"http://www.w3.org/1999/xhtml"),e.div=f.bind(void 0,"http://www.w3.org/1999/xhtml","div"),e.txt=window.document.createTextNode.bind(window.document),e.textOrHtml=b,e.get=w,e.elem=y,e.css=i,e.att=a,e.removeAtt=l,e.addClass=d,e.hasClass=m,e.removeClass=p,e.toggleClass=h,e.replace=o,e.detach=g,e.on=u,e.off=c,e.add=s,e.wrap=r,e.clear=v,t.exports._=n});
//# sourceMappingURL=dom.js.map