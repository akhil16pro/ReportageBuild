/*! For license information please see 5215.5a77895f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreportage_mobile=self.webpackChunkreportage_mobile||[]).push([[5215],{5215:function(e,t,n){n.r(t),n.d(t,{startTapClick:function(){return o}});var i=n(1811),o=function(e){var t,n,o,l,v=10*-f,p=0,m=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),L=new WeakMap,h=function(e){v=(0,i.q)(e),g(e)},E=function(){clearTimeout(l),l=void 0,n&&(T(!1),n=void 0)},w=function(e){n||void 0!==t&&null!==t.parentElement||(t=void 0,b(a(e),e))},g=function(e){b(void 0,e)},b=function(e,t){if(!e||e!==n){clearTimeout(l),l=void 0;var o=(0,i.p)(t),a=o.x,c=o.y;if(n){if(L.has(n))throw new Error("internal error");n.classList.contains(s)||k(n,a,c),T(!0)}if(e){var d=L.get(e);d&&(clearTimeout(d),L.delete(e));var f=r(e)?0:u;e.classList.remove(s),l=setTimeout((function(){k(e,a,c),l=void 0}),f)}n=e}},k=function(e,t,n){p=Date.now(),e.classList.add(s);var i=m&&c(e);i&&i.addRipple&&(q(),o=i.addRipple(t,n))},q=function(){void 0!==o&&(o.then((function(e){return e()})),o=void 0)},T=function(e){q();var t=n;if(t){var i=d-Date.now()+p;if(e&&i>0&&!r(t)){var o=setTimeout((function(){t.classList.remove(s),L.delete(t)}),d);L.set(t,o)}else t.classList.remove(s)}},S=document;S.addEventListener("ionScrollStart",(function(e){t=e.target,E()})),S.addEventListener("ionScrollEnd",(function(){t=void 0})),S.addEventListener("ionGestureCaptured",E),S.addEventListener("touchstart",(function(e){v=(0,i.q)(e),w(e)}),!0),S.addEventListener("touchcancel",h,!0),S.addEventListener("touchend",h,!0),S.addEventListener("mousedown",(function(e){var t=(0,i.q)(e)-f;v<t&&w(e)}),!0),S.addEventListener("mouseup",(function(e){var t=(0,i.q)(e)-f;v<t&&g(e)}),!0),S.addEventListener("contextmenu",(function(e){g(e)}),!0)},a=function(e){if(!e.composedPath)return e.target.closest(".ion-activatable");for(var t=e.composedPath(),n=0;n<t.length-2;n++){var i=t[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(e){return e.classList.contains("ion-activatable-instant")},c=function(e){if(e.shadowRoot){var t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);
//# sourceMappingURL=5215.5a77895f.chunk.js.map