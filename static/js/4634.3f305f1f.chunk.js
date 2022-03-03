/*! For license information please see 4634.3f305f1f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreportage_mobile=self.webpackChunkreportage_mobile||[]).push([[4634],{1325:function(e,t,r){r.d(t,{C:function(){return a},a:function(){return i},d:function(){return s}});var o=r(9388),n=r(9069),i=function(e,t,r,i,s,a){return(0,o.mG)(void 0,void 0,void 0,(function(){var p;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:if(e)return[2,e.attachViewToDom(t,r,s,i)];if(!a&&"string"!==typeof r&&!(r instanceof HTMLElement))throw new Error("framework delegate is missing");return p="string"===typeof r?t.ownerDocument&&t.ownerDocument.createElement(r):r,i&&i.forEach((function(e){return p.classList.add(e)})),s&&Object.assign(p,s),t.appendChild(p),[4,new Promise((function(e){return(0,n.c)(p,e)}))];case 1:return o.sent(),[2,p]}}))}))},s=function(e,t){if(t){if(e){var r=t.parentElement;return e.removeViewFromDom(r,t)}t.remove()}return Promise.resolve()},a=function(){var e,t;return{attachViewToDom:function(r,i,s,a){return void 0===s&&(s={}),void 0===a&&(a=[]),(0,o.mG)(void 0,void 0,void 0,(function(){var p,c,d;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return e=r,i?(p="string"===typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i,a.forEach((function(e){return p.classList.add(e)})),Object.assign(p,s),e.appendChild(p),[4,new Promise((function(e){return(0,n.c)(p,e)}))]):[3,2];case 1:return o.sent(),[3,3];case 2:e.children.length>0&&(c=e.ownerDocument&&e.ownerDocument.createElement("div"),a.forEach((function(e){return c.classList.add(e)})),c.append.apply(c,e.children),e.appendChild(c)),o.label=3;case 3:return d=document.querySelector("ion-app")||document.body,t=document.createComment("ionic teleport"),e.parentNode.insertBefore(t,e),d.appendChild(e),[2,e]}}))}))},removeViewFromDom:function(){return e&&t&&(t.parentNode.insertBefore(e,t),t.remove()),Promise.resolve()}}}},4634:function(e,t,r){r.r(t),r.d(t,{ion_popover:function(){return L}});var o=r(9388),n=r(4039),i=r(323),s=r(1325),a=r(9069),p=r(1607),c=r(8855),d=r(8515),l=r(3562),u=function(e,t,r){var o=t.getBoundingClientRect(),n=o.height,i=o.width;"cover"===e&&r&&(i=r.getBoundingClientRect().width);return{contentWidth:i,contentHeight:n}},h=function(e,t){return t&&"ION-ITEM"===t.tagName?e.findIndex((function(e){return e===t})):-1},f=function(e){var t=(0,a.g)(e).querySelector("button");t&&(0,a.r)((function(){return t.focus()}))},v=function(e){var t=function(t){return(0,o.mG)(void 0,void 0,void 0,(function(){var r,n,i,s,a,p,c;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:r=document.activeElement,n=[];try{n=Array.from(e.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(e){}switch(t.key){case"ArrowLeft":return[3,1];case"ArrowDown":return[3,3];case"ArrowUp":return[3,4];case"Home":return[3,5];case"End":return[3,6];case"ArrowRight":case" ":case"Enter":return[3,7]}return[3,8];case 1:return[4,e.getParentPopover()];case 2:return o.sent()&&e.dismiss(void 0,void 0,!1),[3,8];case 3:return t.preventDefault(),i=function(e,t){return e[h(e,t)+1]}(n,r),void 0!==i&&f(i),[3,8];case 4:return t.preventDefault(),s=function(e,t){return e[h(e,t)-1]}(n,r),void 0!==s&&f(s),[3,8];case 5:return t.preventDefault(),void 0!==(a=n[0])&&f(a),[3,8];case 6:return t.preventDefault(),void 0!==(p=n[n.length-1])&&f(p),[3,8];case 7:return r&&function(e){return e.hasAttribute("data-ion-popover-trigger")}(r)&&(c=new CustomEvent("ionPopoverActivateTrigger"),r.dispatchEvent(c)),[3,8];case 8:return[2]}}))}))};return e.addEventListener("keydown",t),function(){return e.removeEventListener("keydown",t)}},g=function(e,t,r,o,n,i,s,a,p,c,d){var l,u={top:0,left:0,width:0,height:0};if("event"===i){if(!d)return p;var h=d;u={top:h.clientY,left:h.clientX,width:1,height:1}}else{var f=d,v=c||(null===(l=null===f||void 0===f?void 0:f.detail)||void 0===l?void 0:l.ionShadowTarget)||(null===f||void 0===f?void 0:f.target);if(!v)return p;var g=v.getBoundingClientRect();u={top:g.top,left:g.left,width:g.width,height:g.height}}var w=x(s,u,t,r,o,n,e),b=k(a,s,u,t,r),P=w.top+b.top,D=w.left+b.left,T=y(s,o,n,P,D,t,r,e),E=T.arrowTop,S=T.arrowLeft,I=m(s,a,e);return{top:P,left:D,referenceCoordinates:u,arrowTop:E,arrowLeft:S,originX:I.originX,originY:I.originY}},m=function(e,t,r){switch(e){case"top":return{originX:w(t),originY:"bottom"};case"bottom":return{originX:w(t),originY:"top"};case"left":return{originX:"right",originY:b(t)};case"right":return{originX:"left",originY:b(t)};case"start":return{originX:r?"left":"right",originY:b(t)};case"end":return{originX:r?"right":"left",originY:b(t)}}},w=function(e){switch(e){case"start":return"left";case"center":return"center";case"end":return"right"}},b=function(e){switch(e){case"start":return"top";case"center":return"center";case"end":return"bottom"}},y=function(e,t,r,o,n,i,s,a){var p={arrowTop:o+s/2-t/2,arrowLeft:n+i-t/2},c={arrowTop:o+s/2-t/2,arrowLeft:n-1.5*t};switch(e){case"top":return{arrowTop:o+s,arrowLeft:n+i/2-t/2};case"bottom":return{arrowTop:o-r,arrowLeft:n+i/2-t/2};case"left":return p;case"right":return c;case"start":return a?c:p;case"end":return a?p:c;default:return{arrowTop:0,arrowLeft:0}}},x=function(e,t,r,o,n,i,s){var a={top:t.top,left:t.left-r-n},p={top:t.top,left:t.left+t.width+n};switch(e){case"top":return{top:t.top-o-i,left:t.left};case"right":return p;case"bottom":return{top:t.top+t.height+i,left:t.left};case"left":return a;case"start":return s?p:a;case"end":return s?a:p}},k=function(e,t,r,o,n){switch(e){case"center":return D(t,r,o,n);case"end":return P(t,r,o,n);default:return{top:0,left:0}}},P=function(e,t,r,o){switch(e){case"start":case"end":case"left":case"right":return{top:-(o-t.height),left:0};default:return{top:0,left:-(r-t.width)}}},D=function(e,t,r,o){switch(e){case"start":case"end":case"left":case"right":return{top:-(o/2-t.height/2),left:0};default:return{top:0,left:-(r/2-t.width/2)}}},T=function(e,t,r,o,n,i,s,a,p,c,d,l,u,h,f){void 0===u&&(u=0),void 0===h&&(h=0),void 0===f&&(f=0);var v,g=u,m=h,w=r,b=t,y=c,x=d,k=!1,P=!1,D=l?l.top+l.height:i/2-a/2,T=l?l.height:0,E=!1;return w<o+p?(w=o,k=!0,y="left"):s+o+w+p>n&&(P=!0,w=n-s-o,y="right"),D+T+a>i&&("top"===e||"bottom"===e)&&(D-a>0?(g=(b=D-a-T-(f-1))+a,x="bottom",E=!0):v=o),{top:b,left:w,bottom:v,originX:y,originY:x,checkSafeAreaLeft:k,checkSafeAreaRight:P,arrowTop:g,arrowLeft:m,addPopoverBottomClass:E}},E=function(e,t){var r,o=t.event,n=t.size,i=t.trigger,s=t.reference,p=t.side,c=t.align,d=e.ownerDocument,h="rtl"===d.dir,f=d.defaultView.innerWidth,v=d.defaultView.innerHeight,m=(0,a.g)(e),w=m.querySelector(".popover-content"),b=m.querySelector(".popover-arrow"),y=i||(null===(r=null===o||void 0===o?void 0:o.detail)||void 0===r?void 0:r.ionShadowTarget)||(null===o||void 0===o?void 0:o.target),x=u(n,w,y),k=x.contentWidth,P=x.contentHeight,D=function(e){if(!e)return{arrowWidth:0,arrowHeight:0};var t=e.getBoundingClientRect();return{arrowWidth:t.width,arrowHeight:t.height}}(b),E=D.arrowWidth,S=D.arrowHeight,I=g(h,k,P,E,S,s,p,c,{top:v/2-P/2,left:f/2-k/2,originX:h?"right":"left",originY:"top"},i,o),A="cover"===n?0:5,L="cover"===n?0:25,C=T(p,I.top,I.left,A,f,v,k,P,L,I.originX,I.originY,I.referenceCoordinates,I.arrowTop,I.arrowLeft,S),W=C.originX,O=C.originY,q=C.top,N=C.left,X=C.bottom,Y=C.checkSafeAreaLeft,z=C.checkSafeAreaRight,B=C.arrowTop,j=C.arrowLeft,V=C.addPopoverBottomClass,H=(0,l.c)(),F=(0,l.c)(),G=(0,l.c)();return F.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),G.addElement(m.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),H.easing("ease").duration(100).beforeAddWrite((function(){"cover"===n&&e.style.setProperty("--width",k+"px"),V&&e.classList.add("popover-bottom"),void 0!==X&&w.style.setProperty("bottom",X+"px");var t=N+"px";if(Y&&(t=N+"px + var(--ion-safe-area-left, 0)"),z&&(t=N+"px - var(--ion-safe-area-right, 0)"),w.style.setProperty("top","calc("+q+"px + var(--offset-y, 0))"),w.style.setProperty("left","calc("+t+" + var(--offset-x, 0))"),w.style.setProperty("transform-origin",O+" "+W),null!==b){var r=I.top!==q||I.left!==N,s=function(e,t,r,o){return void 0===t&&(t=!1),!(!r&&!o)&&("top"===e||"bottom"===e||!t)}(p,r,o,i);s?(b.style.setProperty("top","calc("+B+"px + var(--offset-y, 0))"),b.style.setProperty("left","calc("+j+"px + var(--offset-x, 0))")):b.style.setProperty("display","none")}})).addAnimation([F,G])},S=function(e){var t=(0,a.g)(e),r=t.querySelector(".popover-content"),o=t.querySelector(".popover-arrow"),n=(0,l.c)(),i=(0,l.c)(),s=(0,l.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),n.easing("ease").afterAddWrite((function(){e.style.removeProperty("--width"),e.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin"),o&&(o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("display"))})).duration(300).addAnimation([i,s])},I=function(e,t){var r,o=t.event,n=t.size,i=t.trigger,s=t.reference,p=t.side,c=t.align,d=e.ownerDocument,h="rtl"===d.dir,f=d.defaultView.innerWidth,v=d.defaultView.innerHeight,m=(0,a.g)(e),w=m.querySelector(".popover-content"),b=i||(null===(r=null===o||void 0===o?void 0:o.detail)||void 0===r?void 0:r.ionShadowTarget)||(null===o||void 0===o?void 0:o.target),y=u(n,w,b),x=y.contentWidth,k=y.contentHeight,P=g(h,x,k,0,0,s,p,c,{top:v/2-k/2,left:f/2-x/2,originX:h?"right":"left",originY:"top"},i,o),D="cover"===n?0:12,E=T(p,P.top,P.left,D,f,v,x,k,0,P.originX,P.originY,P.referenceCoordinates),S=E.originX,I=E.originY,A=E.top,L=E.left,C=E.bottom,W=(0,l.c)(),O=(0,l.c)(),q=(0,l.c)(),N=(0,l.c)(),X=(0,l.c)();return O.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),q.addElement(m.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),N.addElement(w).beforeStyles({top:"calc("+A+"px + var(--offset-y, 0px))",left:"calc("+L+"px + var(--offset-x, 0px))","transform-origin":I+" "+S}).beforeAddWrite((function(){void 0!==C&&w.style.setProperty("bottom",C+"px")})).fromTo("transform","scale(0.8)","scale(1)"),X.addElement(m.querySelector(".popover-viewport")).fromTo("opacity",.01,1),W.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite((function(){"cover"===n&&e.style.setProperty("--width",x+"px"),"bottom"===I&&e.classList.add("popover-bottom")})).addAnimation([O,q,N,X])},A=function(e){var t=(0,a.g)(e),r=t.querySelector(".popover-content"),o=(0,l.c)(),n=(0,l.c)(),i=(0,l.c)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.easing("ease").afterAddWrite((function(){e.style.removeProperty("--width"),e.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin")})).duration(150).addAnimation([n,i])},L=function(){function e(e){var t=this;(0,n.r)(this,e),this.didPresent=(0,n.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,n.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,n.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,n.e)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,n.e)(this,"didPresent",7),this.willPresentShorthand=(0,n.e)(this,"willPresent",7),this.willDismissShorthand=(0,n.e)(this,"willDismiss",7),this.didDismissShorthand=(0,n.e)(this,"didDismiss",7),this.parentPopover=null,this.popoverIndex=W++,this.coreDelegate=(0,s.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.alignment="start",this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,p.B)},this.onLifecycle=function(e){var r=t.usersElement,o=C[e.type];if(r&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});r.dispatchEvent(n)}},this.configureTriggerInteraction=function(){var e=t,r=e.trigger,n=e.triggerAction,i=e.el,s=e.destroyTriggerInteraction;s&&s();var p=t.triggerEl=void 0!==r?document.getElementById(r):null;p&&(t.destroyTriggerInteraction=function(e,t,r){var n=[];switch(t){case"hover":var i;n=[{eventName:"mouseenter",callback:function(e){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(t){return e.stopPropagation(),i&&clearTimeout(i),i=setTimeout((function(){(0,a.r)((function(){r.presentFromTrigger(e),i=void 0}))}),100),[2]}))}))}},{eventName:"mouseleave",callback:function(e){i&&clearTimeout(i);var t=e.relatedTarget;t&&t.closest("ion-popover")!==r&&r.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,!0)}}];break;case"context-menu":n=[{eventName:"contextmenu",callback:function(e){e.preventDefault(),r.presentFromTrigger(e)}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,!0)}}];break;default:n=[{eventName:"click",callback:function(e){return r.presentFromTrigger(e)}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,!0)}}]}return n.forEach((function(t){var r=t.eventName,o=t.callback;return e.addEventListener(r,o)})),e.setAttribute("data-ion-popover-trigger","true"),function(){n.forEach((function(t){var r=t.eventName,o=t.callback;return e.removeEventListener(r,o)})),e.removeAttribute("data-ion-popover-trigger")}}(p,n,i))},this.configureKeyboardInteraction=function(){var e=t,r=e.destroyKeyboardInteraction,o=e.el;r&&r(),t.destroyKeyboardInteraction=v(o)},this.configureDismissInteraction=function(){var e=t,r=e.destroyDismissInteraction,o=e.parentPopover,n=e.triggerAction,i=e.triggerEl,s=e.el;o&&i&&(r&&r(),t.destroyDismissInteraction=function(e,t,r,o){var n=[],i=(0,a.g)(o).querySelector(".popover-content");n="hover"===t?[{eventName:"mouseenter",callback:function(t){document.elementFromPoint(t.clientX,t.clientY)!==e&&r.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:function(t){t.target.closest("[data-ion-popover-trigger]")!==e?r.dismiss(void 0,void 0,!1):t.stopPropagation()}}];return n.forEach((function(e){var t=e.eventName,r=e.callback;return i.addEventListener(t,r)})),function(){n.forEach((function(e){var t=e.eventName,r=e.callback;return i.removeEventListener(t,r)}))}}(i,n,s,o))}}return e.prototype.onTriggerChange=function(){this.configureTriggerInteraction()},e.prototype.onIsOpenChange=function(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()},e.prototype.connectedCallback=function(){(0,p.e)(this.el)},e.prototype.componentWillLoad=function(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-popover-"+this.popoverIndex,this.parentPopover=this.el.closest("ion-popover:not(#"+this.popoverId+")")},e.prototype.componentDidLoad=function(){var e=this,t=this.parentPopover;!0===this.isOpen&&(0,a.r)((function(){return e.present()})),t&&(0,a.a)(t,"ionPopoverWillDismiss",(function(){e.dismiss(void 0,void 0,!1)})),this.configureTriggerInteraction()},e.prototype.presentFromTrigger=function(e,t){return void 0===t&&(t=!1),(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(r){switch(r.label){case 0:return this.focusDescendantOnPresent=t,[4,this.present(e)];case 1:return r.sent(),this.focusDescendantOnPresent=!1,[2]}}))}))},e.prototype.getDelegate=function(e){if(void 0===e&&(e=!1),this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};var t=this.el.parentNode,r=this.inline=null!==t&&!this.hasController;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}},e.prototype.present=function(e){return(0,o.mG)(this,void 0,void 0,(function(){var t,r,n,i,a;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return this.presented?[2]:void 0===this.currentTransition?[3,2]:[4,this.currentTransition];case 1:o.sent(),o.label=2;case 2:return t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),r=this.getDelegate(!0),n=r.inline,i=r.delegate,a=this,[4,(0,s.a)(i,this.el,this.component,["popover-viewport"],t,n)];case 3:return a.usersElement=o.sent(),[4,(0,d.e)(this.usersElement)];case 4:return o.sent(),this.keyboardEvents||this.configureKeyboardInteraction(),this.configureDismissInteraction(),this.currentTransition=(0,p.d)(this,"popoverEnter",E,I,{event:e||this.event,size:this.size,trigger:this.triggerEl,reference:this.reference,side:this.side,align:this.alignment}),[4,this.currentTransition];case 5:return o.sent(),this.currentTransition=void 0,this.focusDescendantOnPresent&&(0,p.j)(this.el,this.el),[2]}}))}))},e.prototype.dismiss=function(e,t,r){return void 0===r&&(r=!0),(0,o.mG)(this,void 0,void 0,(function(){var n,i,a,c,d;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return void 0===this.currentTransition?[3,2]:[4,this.currentTransition];case 1:o.sent(),o.label=2;case 2:return i=(n=this).destroyKeyboardInteraction,a=n.destroyDismissInteraction,r&&this.parentPopover&&this.parentPopover.dismiss(e,t,r),this.currentTransition=(0,p.f)(this,e,t,"popoverLeave",S,A,this.event),[4,this.currentTransition];case 3:return(c=o.sent())?(i&&(i(),this.destroyKeyboardInteraction=void 0),a&&(a(),this.destroyDismissInteraction=void 0),d=this.getDelegate().delegate,[4,(0,s.d)(d,this.usersElement)]):[3,5];case 4:o.sent(),o.label=5;case 5:return this.currentTransition=void 0,[2,c]}}))}))},e.prototype.getParentPopover=function(){return(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(e){return[2,this.parentPopover]}))}))},e.prototype.onDidDismiss=function(){return(0,p.g)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return(0,p.g)(this.el,"ionPopoverWillDismiss")},e.prototype.render=function(){var e,t=this,r=(0,i.b)(this),o=this,s=o.onLifecycle,a=o.popoverId,p=o.parentPopover,d=o.dismissOnSelect,l=o.side,u=o.arrow,h=o.htmlAttributes,f=(0,i.a)("desktop"),v=u&&!p&&!f;return(0,n.h)(n.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},h,{style:{zIndex:""+(2e4+this.overlayIndex)},id:a,class:Object.assign(Object.assign({},(0,c.g)(this.cssClass)),(e={},e[r]=!0,e["popover-translucent"]=this.translucent,e["overlay-hidden"]=!0,e["popover-desktop"]=f,e["popover-side-"+l]=!0,e["popover-nested"]=!!p,e)),onIonPopoverDidPresent:s,onIonPopoverWillPresent:s,onIonPopoverWillDismiss:s,onIonPopoverDidDismiss:s,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap}),!p&&(0,n.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,n.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:d?function(){return t.dismiss()}:void 0},v&&(0,n.h)("div",{class:"popover-arrow",part:"arrow"}),(0,n.h)("div",{class:"popover-content",part:"content"},(0,n.h)("slot",null))))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,n.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}},enumerable:!1,configurable:!0}),e}(),C={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},W=0;L.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}"}},8855:function(e,t,r){r.d(t,{c:function(){return i},g:function(){return s},h:function(){return n},o:function(){return p}});var o=r(9388),n=function(e,t){return null!==t.closest(e)},i=function(e,t){var r;return"string"===typeof e&&e.length>0?Object.assign(((r={"ion-color":!0})["ion-color-"+e]=!0,r),t):t},s=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},a=/^[a-z][a-z0-9+\-.]*:/,p=function(e,t,r,n){return(0,o.mG)(void 0,void 0,void 0,(function(){var i;return(0,o.Jh)(this,(function(o){return null!=e&&"#"!==e[0]&&!a.test(e)&&(i=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,i.push(e,r,n)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=4634.3f305f1f.chunk.js.map