var oh=Object.defineProperty;var ih=(e,t,n)=>t in e?oh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Kn=(e,t,n)=>(ih(e,typeof t!="symbol"?t+"":t,n),n);function lh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Kp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yp={exports:{}},Ol={},Qp={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ci=Symbol.for("react.element"),ah=Symbol.for("react.portal"),sh=Symbol.for("react.fragment"),uh=Symbol.for("react.strict_mode"),ch=Symbol.for("react.profiler"),dh=Symbol.for("react.provider"),ph=Symbol.for("react.context"),fh=Symbol.for("react.forward_ref"),mh=Symbol.for("react.suspense"),hh=Symbol.for("react.memo"),gh=Symbol.for("react.lazy"),Hc=Symbol.iterator;function yh(e){return e===null||typeof e!="object"?null:(e=Hc&&e[Hc]||e["@@iterator"],typeof e=="function"?e:null)}var Xp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qp=Object.assign,Zp={};function oo(e,t,n){this.props=e,this.context=t,this.refs=Zp,this.updater=n||Xp}oo.prototype.isReactComponent={};oo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};oo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jp(){}Jp.prototype=oo.prototype;function Cu(e,t,n){this.props=e,this.context=t,this.refs=Zp,this.updater=n||Xp}var _u=Cu.prototype=new Jp;_u.constructor=Cu;qp(_u,oo.prototype);_u.isPureReactComponent=!0;var Wc=Array.isArray,ef=Object.prototype.hasOwnProperty,Tu={current:null},tf={key:!0,ref:!0,__self:!0,__source:!0};function nf(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ef.call(t,r)&&!tf.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ci,type:e,key:i,ref:l,props:o,_owner:Tu.current}}function Sh(e,t){return{$$typeof:ci,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Mu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ci}function vh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zc=/\/+/g;function Na(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vh(""+e.key):t.toString(36)}function ji(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ci:case ah:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Na(l,0):r,Wc(o)?(n="",e!=null&&(n=e.replace(zc,"$&/")+"/"),ji(o,t,n,"",function(u){return u})):o!=null&&(Mu(o)&&(o=Sh(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(zc,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Wc(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Na(i,a);l+=ji(i,t,n,s,o)}else if(s=yh(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Na(i,a++),l+=ji(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function xi(e,t,n){if(e==null)return e;var r=[],o=0;return ji(e,r,"","",function(i){return t.call(n,i,o++)}),r}function xh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ot={current:null},$i={transition:null},Ch={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:$i,ReactCurrentOwner:Tu};Q.Children={map:xi,forEach:function(e,t,n){xi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xi(e,function(){t++}),t},toArray:function(e){return xi(e,function(t){return t})||[]},only:function(e){if(!Mu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=oo;Q.Fragment=sh;Q.Profiler=ch;Q.PureComponent=Cu;Q.StrictMode=uh;Q.Suspense=mh;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ch;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qp({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Tu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)ef.call(t,s)&&!tf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ci,type:e.type,key:o,ref:i,props:r,_owner:l}};Q.createContext=function(e){return e={$$typeof:ph,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dh,_context:e},e.Consumer=e};Q.createElement=nf;Q.createFactory=function(e){var t=nf.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:fh,render:e}};Q.isValidElement=Mu;Q.lazy=function(e){return{$$typeof:gh,_payload:{_status:-1,_result:e},_init:xh}};Q.memo=function(e,t){return{$$typeof:hh,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=$i.transition;$i.transition={};try{e()}finally{$i.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return ot.current.useCallback(e,t)};Q.useContext=function(e){return ot.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return ot.current.useDeferredValue(e)};Q.useEffect=function(e,t){return ot.current.useEffect(e,t)};Q.useId=function(){return ot.current.useId()};Q.useImperativeHandle=function(e,t,n){return ot.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return ot.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return ot.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return ot.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return ot.current.useReducer(e,t,n)};Q.useRef=function(e){return ot.current.useRef(e)};Q.useState=function(e){return ot.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return ot.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return ot.current.useTransition()};Q.version="18.2.0";Qp.exports=Q;var x=Qp.exports;const Wt=Kp(x),ys=lh({__proto__:null,default:Wt},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _h=x,Th=Symbol.for("react.element"),Mh=Symbol.for("react.fragment"),Ph=Object.prototype.hasOwnProperty,Rh=_h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ah={key:!0,ref:!0,__self:!0,__source:!0};function rf(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ph.call(t,r)&&!Ah.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Th,type:e,key:i,ref:l,props:o,_owner:Rh.current}}Ol.Fragment=Mh;Ol.jsx=rf;Ol.jsxs=rf;Yp.exports=Ol;var C=Yp.exports;var Ss={},of={exports:{}},_t={},lf={exports:{}},af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,b){var N=E.length;E.push(b);e:for(;0<N;){var q=N-1>>>1,K=E[q];if(0<o(K,b))E[q]=b,E[N]=K,N=q;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var b=E[0],N=E.pop();if(N!==b){E[0]=N;e:for(var q=0,K=E.length,we=K>>>1;q<we;){var X=2*(q+1)-1,ye=E[X],ie=X+1,ze=E[ie];if(0>o(ye,N))ie<K&&0>o(ze,ye)?(E[q]=ze,E[ie]=N,q=ie):(E[q]=ye,E[X]=N,q=X);else if(ie<K&&0>o(ze,N))E[q]=ze,E[ie]=N,q=ie;else break e}}return b}function o(E,b){var N=E.sortIndex-b.sortIndex;return N!==0?N:E.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],m=1,p=null,d=3,v=!1,g=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=E)r(u),b.sortIndex=b.expirationTime,t(s,b);else break;b=n(u)}}function S(E){if(y=!1,h(E),!g)if(n(s)!==null)g=!0,j(M);else{var b=n(u);b!==null&&H(S,b.startTime-E)}}function M(E,b){g=!1,y&&(y=!1,f(D),D=-1),v=!0;var N=d;try{for(h(b),p=n(s);p!==null&&(!(p.expirationTime>b)||E&&!I());){var q=p.callback;if(typeof q=="function"){p.callback=null,d=p.priorityLevel;var K=q(p.expirationTime<=b);b=e.unstable_now(),typeof K=="function"?p.callback=K:p===n(s)&&r(s),h(b)}else r(s);p=n(s)}if(p!==null)var we=!0;else{var X=n(u);X!==null&&H(S,X.startTime-b),we=!1}return we}finally{p=null,d=N,v=!1}}var R=!1,T=null,D=-1,w=5,A=-1;function I(){return!(e.unstable_now()-A<w)}function F(){if(T!==null){var E=e.unstable_now();A=E;var b=!0;try{b=T(!0,E)}finally{b?V():(R=!1,T=null)}}else R=!1}var V;if(typeof c=="function")V=function(){c(F)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,O=B.port2;B.port1.onmessage=F,V=function(){O.postMessage(null)}}else V=function(){P(F,0)};function j(E){T=E,R||(R=!0,V())}function H(E,b){D=P(function(){E(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,j(M))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(d){case 1:case 2:case 3:var b=3;break;default:b=d}var N=d;d=b;try{return E()}finally{d=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,b){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var N=d;d=E;try{return b()}finally{d=N}},e.unstable_scheduleCallback=function(E,b,N){var q=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?q+N:q):N=q,E){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=N+K,E={id:m++,callback:b,priorityLevel:E,startTime:N,expirationTime:K,sortIndex:-1},N>q?(E.sortIndex=N,t(u,E),n(s)===null&&E===n(u)&&(y?(f(D),D=-1):y=!0,H(S,N-q))):(E.sortIndex=K,t(s,E),g||v||(g=!0,j(M))),E},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(E){var b=d;return function(){var N=d;d=b;try{return E.apply(this,arguments)}finally{d=N}}}})(af);lf.exports=af;var Eh=lf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=x,Ct=Eh;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uf=new Set,Wo={};function fr(e,t){Ur(e,t),Ur(e+"Capture",t)}function Ur(e,t){for(Wo[e]=t,e=0;e<t.length;e++)uf.add(t[e])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vs=Object.prototype.hasOwnProperty,Dh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gc={},Uc={};function kh(e){return vs.call(Uc,e)?!0:vs.call(Gc,e)?!1:Dh.test(e)?Uc[e]=!0:(Gc[e]=!0,!1)}function wh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bh(e,t,n,r){if(t===null||typeof t>"u"||wh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pu=/[\-:]([a-z])/g;function Ru(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pu,Ru);Qe[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pu,Ru);Qe[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pu,Ru);Qe[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function Au(e,t,n,r){var o=Qe.hasOwnProperty(t)?Qe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bh(t,n,o,r)&&(n=null),r||o===null?kh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vn=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ci=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),Pr=Symbol.for("react.fragment"),Eu=Symbol.for("react.strict_mode"),xs=Symbol.for("react.profiler"),cf=Symbol.for("react.provider"),df=Symbol.for("react.context"),Du=Symbol.for("react.forward_ref"),Cs=Symbol.for("react.suspense"),_s=Symbol.for("react.suspense_list"),ku=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),pf=Symbol.for("react.offscreen"),Kc=Symbol.iterator;function co(e){return e===null||typeof e!="object"?null:(e=Kc&&e[Kc]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,La;function Po(e){if(La===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);La=t&&t[1]||""}return`
`+La+e}var Fa=!1;function ja(e,t){if(!e||Fa)return"";Fa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Fa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Po(e):""}function Bh(e){switch(e.tag){case 5:return Po(e.type);case 16:return Po("Lazy");case 13:return Po("Suspense");case 19:return Po("SuspenseList");case 0:case 2:case 15:return e=ja(e.type,!1),e;case 11:return e=ja(e.type.render,!1),e;case 1:return e=ja(e.type,!0),e;default:return""}}function Ts(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pr:return"Fragment";case Mr:return"Portal";case xs:return"Profiler";case Eu:return"StrictMode";case Cs:return"Suspense";case _s:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case df:return(e.displayName||"Context")+".Consumer";case cf:return(e._context.displayName||"Context")+".Provider";case Du:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ku:return t=e.displayName||null,t!==null?t:Ts(e.type)||"Memo";case Rn:t=e._payload,e=e._init;try{return Ts(e(t))}catch{}}return null}function Oh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ts(t);case 8:return t===Eu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ih(e){var t=ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _i(e){e._valueTracker||(e._valueTracker=Ih(e))}function mf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ff(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ms(e,t){var n=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Yc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hf(e,t){t=t.checked,t!=null&&Au(e,"checked",t,!1)}function Ps(e,t){hf(e,t);var n=jn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rs(e,t.type,jn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rs(e,t,n){(t!=="number"||nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ro=Array.isArray;function Lr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function As(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Ro(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jn(n)}}function gf(e,t){var n=jn(t.value),r=jn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Es(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ti,Sf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ti=Ti||document.createElement("div"),Ti.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ti.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vh=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(e){Vh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ko[t]=ko[e]})});function vf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ko.hasOwnProperty(e)&&ko[e]?(""+t).trim():t+"px"}function xf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=vf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Nh=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ds(e,t){if(t){if(Nh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function ks(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ws=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bs=null,Fr=null,jr=null;function Zc(e){if(e=fi(e)){if(typeof bs!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Fl(t),bs(e.stateNode,e.type,t))}}function Cf(e){Fr?jr?jr.push(e):jr=[e]:Fr=e}function _f(){if(Fr){var e=Fr,t=jr;if(jr=Fr=null,Zc(e),t)for(e=0;e<t.length;e++)Zc(t[e])}}function Tf(e,t){return e(t)}function Mf(){}var $a=!1;function Pf(e,t,n){if($a)return e(t,n);$a=!0;try{return Tf(e,t,n)}finally{$a=!1,(Fr!==null||jr!==null)&&(Mf(),_f())}}function Go(e,t){var n=e.stateNode;if(n===null)return null;var r=Fl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Bs=!1;if(fn)try{var po={};Object.defineProperty(po,"passive",{get:function(){Bs=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Bs=!1}function Lh(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var wo=!1,rl=null,ol=!1,Os=null,Fh={onError:function(e){wo=!0,rl=e}};function jh(e,t,n,r,o,i,l,a,s){wo=!1,rl=null,Lh.apply(Fh,arguments)}function $h(e,t,n,r,o,i,l,a,s){if(jh.apply(this,arguments),wo){if(wo){var u=rl;wo=!1,rl=null}else throw Error(k(198));ol||(ol=!0,Os=u)}}function mr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jc(e){if(mr(e)!==e)throw Error(k(188))}function Hh(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Jc(o),e;if(i===r)return Jc(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Af(e){return e=Hh(e),e!==null?Ef(e):null}function Ef(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ef(e);if(t!==null)return t;e=e.sibling}return null}var Df=Ct.unstable_scheduleCallback,ed=Ct.unstable_cancelCallback,Wh=Ct.unstable_shouldYield,zh=Ct.unstable_requestPaint,Be=Ct.unstable_now,Gh=Ct.unstable_getCurrentPriorityLevel,bu=Ct.unstable_ImmediatePriority,kf=Ct.unstable_UserBlockingPriority,il=Ct.unstable_NormalPriority,Uh=Ct.unstable_LowPriority,wf=Ct.unstable_IdlePriority,Il=null,en=null;function Kh(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Il,e,void 0,(e.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:Xh,Yh=Math.log,Qh=Math.LN2;function Xh(e){return e>>>=0,e===0?32:31-(Yh(e)/Qh|0)|0}var Mi=64,Pi=4194304;function Ao(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ll(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Ao(a):(i&=l,i!==0&&(r=Ao(i)))}else l=n&~o,l!==0?r=Ao(l):i!==0&&(r=Ao(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-zt(t),o=1<<n,r|=e[n],t&=~o;return r}function qh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-zt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=qh(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bf(){var e=Mi;return Mi<<=1,!(Mi&4194240)&&(Mi=64),e}function Ha(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function di(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zt(t),e[t]=n}function Jh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-zt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Bu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-zt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var le=0;function Bf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Of,Ou,If,Vf,Nf,Vs=!1,Ri=[],bn=null,Bn=null,On=null,Uo=new Map,Ko=new Map,En=[],eg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function td(e,t){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Uo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(t.pointerId)}}function fo(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=fi(t),t!==null&&Ou(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function tg(e,t,n,r,o){switch(t){case"focusin":return bn=fo(bn,e,t,n,r,o),!0;case"dragenter":return Bn=fo(Bn,e,t,n,r,o),!0;case"mouseover":return On=fo(On,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Uo.set(i,fo(Uo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ko.set(i,fo(Ko.get(i)||null,e,t,n,r,o)),!0}return!1}function Lf(e){var t=Jn(e.target);if(t!==null){var n=mr(t);if(n!==null){if(t=n.tag,t===13){if(t=Rf(n),t!==null){e.blockedOn=t,Nf(e.priority,function(){If(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ns(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ws=r,n.target.dispatchEvent(r),ws=null}else return t=fi(n),t!==null&&Ou(t),e.blockedOn=n,!1;t.shift()}return!0}function nd(e,t,n){Hi(e)&&n.delete(t)}function ng(){Vs=!1,bn!==null&&Hi(bn)&&(bn=null),Bn!==null&&Hi(Bn)&&(Bn=null),On!==null&&Hi(On)&&(On=null),Uo.forEach(nd),Ko.forEach(nd)}function mo(e,t){e.blockedOn===t&&(e.blockedOn=null,Vs||(Vs=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,ng)))}function Yo(e){function t(o){return mo(o,e)}if(0<Ri.length){mo(Ri[0],e);for(var n=1;n<Ri.length;n++){var r=Ri[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bn!==null&&mo(bn,e),Bn!==null&&mo(Bn,e),On!==null&&mo(On,e),Uo.forEach(t),Ko.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)Lf(n),n.blockedOn===null&&En.shift()}var $r=vn.ReactCurrentBatchConfig,al=!0;function rg(e,t,n,r){var o=le,i=$r.transition;$r.transition=null;try{le=1,Iu(e,t,n,r)}finally{le=o,$r.transition=i}}function og(e,t,n,r){var o=le,i=$r.transition;$r.transition=null;try{le=4,Iu(e,t,n,r)}finally{le=o,$r.transition=i}}function Iu(e,t,n,r){if(al){var o=Ns(e,t,n,r);if(o===null)Za(e,t,r,sl,n),td(e,r);else if(tg(o,e,t,n,r))r.stopPropagation();else if(td(e,r),t&4&&-1<eg.indexOf(e)){for(;o!==null;){var i=fi(o);if(i!==null&&Of(i),i=Ns(e,t,n,r),i===null&&Za(e,t,r,sl,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Za(e,t,r,null,n)}}var sl=null;function Ns(e,t,n,r){if(sl=null,e=wu(r),e=Jn(e),e!==null)if(t=mr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return sl=e,null}function Ff(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gh()){case bu:return 1;case kf:return 4;case il:case Uh:return 16;case wf:return 536870912;default:return 16}default:return 16}}var kn=null,Vu=null,Wi=null;function jf(){if(Wi)return Wi;var e,t=Vu,n=t.length,r,o="value"in kn?kn.value:kn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Wi=o.slice(e,1<r?1-r:void 0)}function zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ai(){return!0}function rd(){return!1}function Tt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ai:rd,this.isPropagationStopped=rd,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),t}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nu=Tt(io),pi=Re({},io,{view:0,detail:0}),ig=Tt(pi),Wa,za,ho,Vl=Re({},pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(Wa=e.screenX-ho.screenX,za=e.screenY-ho.screenY):za=Wa=0,ho=e),Wa)},movementY:function(e){return"movementY"in e?e.movementY:za}}),od=Tt(Vl),lg=Re({},Vl,{dataTransfer:0}),ag=Tt(lg),sg=Re({},pi,{relatedTarget:0}),Ga=Tt(sg),ug=Re({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),cg=Tt(ug),dg=Re({},io,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pg=Tt(dg),fg=Re({},io,{data:0}),id=Tt(fg),mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gg[e])?!!t[e]:!1}function Lu(){return yg}var Sg=Re({},pi,{key:function(e){if(e.key){var t=mg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vg=Tt(Sg),xg=Re({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ld=Tt(xg),Cg=Re({},pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),_g=Tt(Cg),Tg=Re({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mg=Tt(Tg),Pg=Re({},Vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rg=Tt(Pg),Ag=[9,13,27,32],Fu=fn&&"CompositionEvent"in window,bo=null;fn&&"documentMode"in document&&(bo=document.documentMode);var Eg=fn&&"TextEvent"in window&&!bo,$f=fn&&(!Fu||bo&&8<bo&&11>=bo),ad=String.fromCharCode(32),sd=!1;function Hf(e,t){switch(e){case"keyup":return Ag.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rr=!1;function Dg(e,t){switch(e){case"compositionend":return Wf(t);case"keypress":return t.which!==32?null:(sd=!0,ad);case"textInput":return e=t.data,e===ad&&sd?null:e;default:return null}}function kg(e,t){if(Rr)return e==="compositionend"||!Fu&&Hf(e,t)?(e=jf(),Wi=Vu=kn=null,Rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $f&&t.locale!=="ko"?null:t.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ud(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wg[e.type]:t==="textarea"}function zf(e,t,n,r){Cf(r),t=ul(t,"onChange"),0<t.length&&(n=new Nu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bo=null,Qo=null;function bg(e){tm(e,0)}function Nl(e){var t=Dr(e);if(mf(t))return e}function Bg(e,t){if(e==="change")return t}var Gf=!1;if(fn){var Ua;if(fn){var Ka="oninput"in document;if(!Ka){var cd=document.createElement("div");cd.setAttribute("oninput","return;"),Ka=typeof cd.oninput=="function"}Ua=Ka}else Ua=!1;Gf=Ua&&(!document.documentMode||9<document.documentMode)}function dd(){Bo&&(Bo.detachEvent("onpropertychange",Uf),Qo=Bo=null)}function Uf(e){if(e.propertyName==="value"&&Nl(Qo)){var t=[];zf(t,Qo,e,wu(e)),Pf(bg,t)}}function Og(e,t,n){e==="focusin"?(dd(),Bo=t,Qo=n,Bo.attachEvent("onpropertychange",Uf)):e==="focusout"&&dd()}function Ig(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(Qo)}function Vg(e,t){if(e==="click")return Nl(t)}function Ng(e,t){if(e==="input"||e==="change")return Nl(t)}function Lg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:Lg;function Xo(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!vs.call(t,o)||!Ut(e[o],t[o]))return!1}return!0}function pd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fd(e,t){var n=pd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pd(n)}}function Kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yf(){for(var e=window,t=nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nl(e.document)}return t}function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fg(e){var t=Yf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kf(n.ownerDocument.documentElement,n)){if(r!==null&&ju(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=fd(n,i);var l=fd(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jg=fn&&"documentMode"in document&&11>=document.documentMode,Ar=null,Ls=null,Oo=null,Fs=!1;function md(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fs||Ar==null||Ar!==nl(r)||(r=Ar,"selectionStart"in r&&ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oo&&Xo(Oo,r)||(Oo=r,r=ul(Ls,"onSelect"),0<r.length&&(t=new Nu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function Ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Er={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},Ya={},Qf={};fn&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function Ll(e){if(Ya[e])return Ya[e];if(!Er[e])return e;var t=Er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qf)return Ya[e]=t[n];return e}var Xf=Ll("animationend"),qf=Ll("animationiteration"),Zf=Ll("animationstart"),Jf=Ll("transitionend"),em=new Map,hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){em.set(e,t),fr(t,[e])}for(var Qa=0;Qa<hd.length;Qa++){var Xa=hd[Qa],$g=Xa.toLowerCase(),Hg=Xa[0].toUpperCase()+Xa.slice(1);zn($g,"on"+Hg)}zn(Xf,"onAnimationEnd");zn(qf,"onAnimationIteration");zn(Zf,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(Jf,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function gd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$h(r,t,void 0,e),e.currentTarget=null}function tm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;gd(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;gd(o,a,u),i=s}}}if(ol)throw e=Os,ol=!1,Os=null,e}function me(e,t){var n=t[zs];n===void 0&&(n=t[zs]=new Set);var r=e+"__bubble";n.has(r)||(nm(t,e,2,!1),n.add(r))}function qa(e,t,n){var r=0;t&&(r|=4),nm(n,e,r,t)}var Di="_reactListening"+Math.random().toString(36).slice(2);function qo(e){if(!e[Di]){e[Di]=!0,uf.forEach(function(n){n!=="selectionchange"&&(Wg.has(n)||qa(n,!1,e),qa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Di]||(t[Di]=!0,qa("selectionchange",!1,t))}}function nm(e,t,n,r){switch(Ff(t)){case 1:var o=rg;break;case 4:o=og;break;default:o=Iu}n=o.bind(null,t,n,e),o=void 0,!Bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Za(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Jn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Pf(function(){var u=i,m=wu(n),p=[];e:{var d=em.get(e);if(d!==void 0){var v=Nu,g=e;switch(e){case"keypress":if(zi(n)===0)break e;case"keydown":case"keyup":v=vg;break;case"focusin":g="focus",v=Ga;break;case"focusout":g="blur",v=Ga;break;case"beforeblur":case"afterblur":v=Ga;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=_g;break;case Xf:case qf:case Zf:v=cg;break;case Jf:v=Mg;break;case"scroll":v=ig;break;case"wheel":v=Rg;break;case"copy":case"cut":case"paste":v=pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ld}var y=(t&4)!==0,P=!y&&e==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var c=u,h;c!==null;){h=c;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,f!==null&&(S=Go(c,f),S!=null&&y.push(Zo(c,S,h)))),P)break;c=c.return}0<y.length&&(d=new v(d,g,null,n,m),p.push({event:d,listeners:y}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",d&&n!==ws&&(g=n.relatedTarget||n.fromElement)&&(Jn(g)||g[mn]))break e;if((v||d)&&(d=m.window===m?m:(d=m.ownerDocument)?d.defaultView||d.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?Jn(g):null,g!==null&&(P=mr(g),g!==P||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(y=od,S="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=ld,S="onPointerLeave",f="onPointerEnter",c="pointer"),P=v==null?d:Dr(v),h=g==null?d:Dr(g),d=new y(S,c+"leave",v,n,m),d.target=P,d.relatedTarget=h,S=null,Jn(m)===u&&(y=new y(f,c+"enter",g,n,m),y.target=h,y.relatedTarget=P,S=y),P=S,v&&g)t:{for(y=v,f=g,c=0,h=y;h;h=gr(h))c++;for(h=0,S=f;S;S=gr(S))h++;for(;0<c-h;)y=gr(y),c--;for(;0<h-c;)f=gr(f),h--;for(;c--;){if(y===f||f!==null&&y===f.alternate)break t;y=gr(y),f=gr(f)}y=null}else y=null;v!==null&&yd(p,d,v,y,!1),g!==null&&P!==null&&yd(p,P,g,y,!0)}}e:{if(d=u?Dr(u):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var M=Bg;else if(ud(d))if(Gf)M=Ng;else{M=Ig;var R=Og}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=Vg);if(M&&(M=M(e,u))){zf(p,M,n,m);break e}R&&R(e,d,u),e==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Rs(d,"number",d.value)}switch(R=u?Dr(u):window,e){case"focusin":(ud(R)||R.contentEditable==="true")&&(Ar=R,Ls=u,Oo=null);break;case"focusout":Oo=Ls=Ar=null;break;case"mousedown":Fs=!0;break;case"contextmenu":case"mouseup":case"dragend":Fs=!1,md(p,n,m);break;case"selectionchange":if(jg)break;case"keydown":case"keyup":md(p,n,m)}var T;if(Fu)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Rr?Hf(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&($f&&n.locale!=="ko"&&(Rr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Rr&&(T=jf()):(kn=m,Vu="value"in kn?kn.value:kn.textContent,Rr=!0)),R=ul(u,D),0<R.length&&(D=new id(D,e,null,n,m),p.push({event:D,listeners:R}),T?D.data=T:(T=Wf(n),T!==null&&(D.data=T)))),(T=Eg?Dg(e,n):kg(e,n))&&(u=ul(u,"onBeforeInput"),0<u.length&&(m=new id("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:u}),m.data=T))}tm(p,t)})}function Zo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ul(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Go(e,n),i!=null&&r.unshift(Zo(e,i,o)),i=Go(e,t),i!=null&&r.push(Zo(e,i,o))),e=e.return}return r}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yd(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Go(n,i),s!=null&&l.unshift(Zo(n,s,a))):o||(s=Go(n,i),s!=null&&l.push(Zo(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var zg=/\r\n?/g,Gg=/\u0000|\uFFFD/g;function Sd(e){return(typeof e=="string"?e:""+e).replace(zg,`
`).replace(Gg,"")}function ki(e,t,n){if(t=Sd(t),Sd(e)!==t&&n)throw Error(k(425))}function cl(){}var js=null,$s=null;function Hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ws=typeof setTimeout=="function"?setTimeout:void 0,Ug=typeof clearTimeout=="function"?clearTimeout:void 0,vd=typeof Promise=="function"?Promise:void 0,Kg=typeof queueMicrotask=="function"?queueMicrotask:typeof vd<"u"?function(e){return vd.resolve(null).then(e).catch(Yg)}:Ws;function Yg(e){setTimeout(function(){throw e})}function Ja(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Yo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yo(t)}function In(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lo=Math.random().toString(36).slice(2),Zt="__reactFiber$"+lo,Jo="__reactProps$"+lo,mn="__reactContainer$"+lo,zs="__reactEvents$"+lo,Qg="__reactListeners$"+lo,Xg="__reactHandles$"+lo;function Jn(e){var t=e[Zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mn]||n[Zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xd(e);e!==null;){if(n=e[Zt])return n;e=xd(e)}return t}e=n,n=e.parentNode}return null}function fi(e){return e=e[Zt]||e[mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Fl(e){return e[Jo]||null}var Gs=[],kr=-1;function Gn(e){return{current:e}}function he(e){0>kr||(e.current=Gs[kr],Gs[kr]=null,kr--)}function pe(e,t){kr++,Gs[kr]=e.current,e.current=t}var $n={},et=Gn($n),ct=Gn(!1),lr=$n;function Kr(e,t){var n=e.type.contextTypes;if(!n)return $n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function dt(e){return e=e.childContextTypes,e!=null}function dl(){he(ct),he(et)}function Cd(e,t,n){if(et.current!==$n)throw Error(k(168));pe(et,t),pe(ct,n)}function rm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,Oh(e)||"Unknown",o));return Re({},n,r)}function pl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,lr=et.current,pe(et,e),pe(ct,ct.current),!0}function _d(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=rm(e,t,lr),r.__reactInternalMemoizedMergedChildContext=e,he(ct),he(et),pe(et,e)):he(ct),pe(ct,n)}var sn=null,jl=!1,es=!1;function om(e){sn===null?sn=[e]:sn.push(e)}function qg(e){jl=!0,om(e)}function Un(){if(!es&&sn!==null){es=!0;var e=0,t=le;try{var n=sn;for(le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sn=null,jl=!1}catch(o){throw sn!==null&&(sn=sn.slice(e+1)),Df(bu,Un),o}finally{le=t,es=!1}}return null}var wr=[],br=0,fl=null,ml=0,kt=[],wt=0,ar=null,cn=1,dn="";function Qn(e,t){wr[br++]=ml,wr[br++]=fl,fl=e,ml=t}function im(e,t,n){kt[wt++]=cn,kt[wt++]=dn,kt[wt++]=ar,ar=e;var r=cn;e=dn;var o=32-zt(r)-1;r&=~(1<<o),n+=1;var i=32-zt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,cn=1<<32-zt(t)+o|n<<o|r,dn=i+e}else cn=1<<i|n<<o|r,dn=e}function $u(e){e.return!==null&&(Qn(e,1),im(e,1,0))}function Hu(e){for(;e===fl;)fl=wr[--br],wr[br]=null,ml=wr[--br],wr[br]=null;for(;e===ar;)ar=kt[--wt],kt[wt]=null,dn=kt[--wt],kt[wt]=null,cn=kt[--wt],kt[wt]=null}var St=null,yt=null,Ce=!1,$t=null;function lm(e,t){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Td(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,St=e,yt=In(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,St=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ar!==null?{id:cn,overflow:dn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,St=e,yt=null,!0):!1;default:return!1}}function Us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ks(e){if(Ce){var t=yt;if(t){var n=t;if(!Td(e,t)){if(Us(e))throw Error(k(418));t=In(n.nextSibling);var r=St;t&&Td(e,t)?lm(r,n):(e.flags=e.flags&-4097|2,Ce=!1,St=e)}}else{if(Us(e))throw Error(k(418));e.flags=e.flags&-4097|2,Ce=!1,St=e}}}function Md(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;St=e}function wi(e){if(e!==St)return!1;if(!Ce)return Md(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hs(e.type,e.memoizedProps)),t&&(t=yt)){if(Us(e))throw am(),Error(k(418));for(;t;)lm(e,t),t=In(t.nextSibling)}if(Md(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=In(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=St?In(e.stateNode.nextSibling):null;return!0}function am(){for(var e=yt;e;)e=In(e.nextSibling)}function Yr(){yt=St=null,Ce=!1}function Wu(e){$t===null?$t=[e]:$t.push(e)}var Zg=vn.ReactCurrentBatchConfig;function Ft(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var hl=Gn(null),gl=null,Br=null,zu=null;function Gu(){zu=Br=gl=null}function Uu(e){var t=hl.current;he(hl),e._currentValue=t}function Ys(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hr(e,t){gl=e,zu=Br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ut=!0),e.firstContext=null)}function Ot(e){var t=e._currentValue;if(zu!==e)if(e={context:e,memoizedValue:t,next:null},Br===null){if(gl===null)throw Error(k(308));Br=e,gl.dependencies={lanes:0,firstContext:e}}else Br=Br.next=e;return t}var er=null;function Ku(e){er===null?er=[e]:er.push(e)}function sm(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ku(t)):(n.next=o.next,o.next=n),t.interleaved=n,hn(e,r)}function hn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var An=!1;function Yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function um(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,hn(e,n)}return o=r.interleaved,o===null?(t.next=t,Ku(r)):(t.next=o.next,o.next=t),r.interleaved=t,hn(e,n)}function Gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bu(e,n)}}function Pd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yl(e,t,n,r){var o=e.updateQueue;An=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,m=u=s=null,a=i;do{var d=a.lane,v=a.eventTime;if((r&d)===d){m!==null&&(m=m.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,y=a;switch(d=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){p=g.call(v,p,d);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(v,p,d):g,d==null)break e;p=Re({},p,d);break e;case 2:An=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=o.effects,d===null?o.effects=[a]:d.push(a))}else v={eventTime:v,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=v,s=p):m=m.next=v,l|=d;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;d=a,a=d.next,d.next=null,o.lastBaseUpdate=d,o.shared.pending=null}}while(1);if(m===null&&(s=p),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ur|=l,e.lanes=l,e.memoizedState=p}}function Rd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var cm=new sf.Component().refs;function Qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $l={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),o=Ln(e),i=pn(r,o);i.payload=t,n!=null&&(i.callback=n),t=Vn(e,i,o),t!==null&&(Gt(t,e,o,r),Gi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),o=Ln(e),i=pn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Vn(e,i,o),t!==null&&(Gt(t,e,o,r),Gi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=Ln(e),o=pn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Vn(e,o,r),t!==null&&(Gt(t,e,r,n),Gi(t,e,r))}};function Ad(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Xo(n,r)||!Xo(o,i):!0}function dm(e,t,n){var r=!1,o=$n,i=t.contextType;return typeof i=="object"&&i!==null?i=Ot(i):(o=dt(t)?lr:et.current,r=t.contextTypes,i=(r=r!=null)?Kr(e,o):$n),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ed(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$l.enqueueReplaceState(t,t.state,null)}function Xs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=cm,Yu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ot(i):(i=dt(t)?lr:et.current,o.context=Kr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Qs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&$l.enqueueReplaceState(o,o.state,null),yl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function go(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===cm&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function bi(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dd(e){var t=e._init;return t(e._payload)}function pm(e){function t(f,c){if(e){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Fn(f,c),f.index=0,f.sibling=null,f}function i(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,h,S){return c===null||c.tag!==6?(c=as(h,f.mode,S),c.return=f,c):(c=o(c,h),c.return=f,c)}function s(f,c,h,S){var M=h.type;return M===Pr?m(f,c,h.props.children,S,h.key):c!==null&&(c.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Rn&&Dd(M)===c.type)?(S=o(c,h.props),S.ref=go(f,c,h),S.return=f,S):(S=qi(h.type,h.key,h.props,null,f.mode,S),S.ref=go(f,c,h),S.return=f,S)}function u(f,c,h,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=ss(h,f.mode,S),c.return=f,c):(c=o(c,h.children||[]),c.return=f,c)}function m(f,c,h,S,M){return c===null||c.tag!==7?(c=or(h,f.mode,S,M),c.return=f,c):(c=o(c,h),c.return=f,c)}function p(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=as(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ci:return h=qi(c.type,c.key,c.props,null,f.mode,h),h.ref=go(f,null,c),h.return=f,h;case Mr:return c=ss(c,f.mode,h),c.return=f,c;case Rn:var S=c._init;return p(f,S(c._payload),h)}if(Ro(c)||co(c))return c=or(c,f.mode,h,null),c.return=f,c;bi(f,c)}return null}function d(f,c,h,S){var M=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return M!==null?null:a(f,c,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ci:return h.key===M?s(f,c,h,S):null;case Mr:return h.key===M?u(f,c,h,S):null;case Rn:return M=h._init,d(f,c,M(h._payload),S)}if(Ro(h)||co(h))return M!==null?null:m(f,c,h,S,null);bi(f,h)}return null}function v(f,c,h,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(h)||null,a(c,f,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ci:return f=f.get(S.key===null?h:S.key)||null,s(c,f,S,M);case Mr:return f=f.get(S.key===null?h:S.key)||null,u(c,f,S,M);case Rn:var R=S._init;return v(f,c,h,R(S._payload),M)}if(Ro(S)||co(S))return f=f.get(h)||null,m(c,f,S,M,null);bi(c,S)}return null}function g(f,c,h,S){for(var M=null,R=null,T=c,D=c=0,w=null;T!==null&&D<h.length;D++){T.index>D?(w=T,T=null):w=T.sibling;var A=d(f,T,h[D],S);if(A===null){T===null&&(T=w);break}e&&T&&A.alternate===null&&t(f,T),c=i(A,c,D),R===null?M=A:R.sibling=A,R=A,T=w}if(D===h.length)return n(f,T),Ce&&Qn(f,D),M;if(T===null){for(;D<h.length;D++)T=p(f,h[D],S),T!==null&&(c=i(T,c,D),R===null?M=T:R.sibling=T,R=T);return Ce&&Qn(f,D),M}for(T=r(f,T);D<h.length;D++)w=v(T,f,D,h[D],S),w!==null&&(e&&w.alternate!==null&&T.delete(w.key===null?D:w.key),c=i(w,c,D),R===null?M=w:R.sibling=w,R=w);return e&&T.forEach(function(I){return t(f,I)}),Ce&&Qn(f,D),M}function y(f,c,h,S){var M=co(h);if(typeof M!="function")throw Error(k(150));if(h=M.call(h),h==null)throw Error(k(151));for(var R=M=null,T=c,D=c=0,w=null,A=h.next();T!==null&&!A.done;D++,A=h.next()){T.index>D?(w=T,T=null):w=T.sibling;var I=d(f,T,A.value,S);if(I===null){T===null&&(T=w);break}e&&T&&I.alternate===null&&t(f,T),c=i(I,c,D),R===null?M=I:R.sibling=I,R=I,T=w}if(A.done)return n(f,T),Ce&&Qn(f,D),M;if(T===null){for(;!A.done;D++,A=h.next())A=p(f,A.value,S),A!==null&&(c=i(A,c,D),R===null?M=A:R.sibling=A,R=A);return Ce&&Qn(f,D),M}for(T=r(f,T);!A.done;D++,A=h.next())A=v(T,f,D,A.value,S),A!==null&&(e&&A.alternate!==null&&T.delete(A.key===null?D:A.key),c=i(A,c,D),R===null?M=A:R.sibling=A,R=A);return e&&T.forEach(function(F){return t(f,F)}),Ce&&Qn(f,D),M}function P(f,c,h,S){if(typeof h=="object"&&h!==null&&h.type===Pr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ci:e:{for(var M=h.key,R=c;R!==null;){if(R.key===M){if(M=h.type,M===Pr){if(R.tag===7){n(f,R.sibling),c=o(R,h.props.children),c.return=f,f=c;break e}}else if(R.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Rn&&Dd(M)===R.type){n(f,R.sibling),c=o(R,h.props),c.ref=go(f,R,h),c.return=f,f=c;break e}n(f,R);break}else t(f,R);R=R.sibling}h.type===Pr?(c=or(h.props.children,f.mode,S,h.key),c.return=f,f=c):(S=qi(h.type,h.key,h.props,null,f.mode,S),S.ref=go(f,c,h),S.return=f,f=S)}return l(f);case Mr:e:{for(R=h.key;c!==null;){if(c.key===R)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=o(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ss(h,f.mode,S),c.return=f,f=c}return l(f);case Rn:return R=h._init,P(f,c,R(h._payload),S)}if(Ro(h))return g(f,c,h,S);if(co(h))return y(f,c,h,S);bi(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,h),c.return=f,f=c):(n(f,c),c=as(h,f.mode,S),c.return=f,f=c),l(f)):n(f,c)}return P}var Qr=pm(!0),fm=pm(!1),mi={},tn=Gn(mi),ei=Gn(mi),ti=Gn(mi);function tr(e){if(e===mi)throw Error(k(174));return e}function Qu(e,t){switch(pe(ti,t),pe(ei,e),pe(tn,mi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Es(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Es(t,e)}he(tn),pe(tn,t)}function Xr(){he(tn),he(ei),he(ti)}function mm(e){tr(ti.current);var t=tr(tn.current),n=Es(t,e.type);t!==n&&(pe(ei,e),pe(tn,n))}function Xu(e){ei.current===e&&(he(tn),he(ei))}var Me=Gn(0);function Sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ts=[];function qu(){for(var e=0;e<ts.length;e++)ts[e]._workInProgressVersionPrimary=null;ts.length=0}var Ui=vn.ReactCurrentDispatcher,ns=vn.ReactCurrentBatchConfig,sr=0,Pe=null,Fe=null,$e=null,vl=!1,Io=!1,ni=0,Jg=0;function Xe(){throw Error(k(321))}function Zu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function Ju(e,t,n,r,o,i){if(sr=i,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ui.current=e===null||e.memoizedState===null?r1:o1,e=n(r,o),Io){i=0;do{if(Io=!1,ni=0,25<=i)throw Error(k(301));i+=1,$e=Fe=null,t.updateQueue=null,Ui.current=i1,e=n(r,o)}while(Io)}if(Ui.current=xl,t=Fe!==null&&Fe.next!==null,sr=0,$e=Fe=Pe=null,vl=!1,t)throw Error(k(300));return e}function ec(){var e=ni!==0;return ni=0,e}function Qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Pe.memoizedState=$e=e:$e=$e.next=e,$e}function It(){if(Fe===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=$e===null?Pe.memoizedState:$e.next;if(t!==null)$e=t,Fe=e;else{if(e===null)throw Error(k(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},$e===null?Pe.memoizedState=$e=e:$e=$e.next=e}return $e}function ri(e,t){return typeof t=="function"?t(e):t}function rs(e){var t=It(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=Fe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var m=u.lane;if((sr&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,Pe.lanes|=m,ur|=m}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Ut(r,t.memoizedState)||(ut=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Pe.lanes|=i,ur|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function os(e){var t=It(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ut(i,t.memoizedState)||(ut=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function hm(){}function gm(e,t){var n=Pe,r=It(),o=t(),i=!Ut(r.memoizedState,o);if(i&&(r.memoizedState=o,ut=!0),r=r.queue,tc(vm.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,oi(9,Sm.bind(null,n,r,o,t),void 0,null),He===null)throw Error(k(349));sr&30||ym(n,t,o)}return o}function ym(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sm(e,t,n,r){t.value=n,t.getSnapshot=r,xm(t)&&Cm(e)}function vm(e,t,n){return n(function(){xm(t)&&Cm(e)})}function xm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function Cm(e){var t=hn(e,1);t!==null&&Gt(t,e,1,-1)}function kd(e){var t=Qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ri,lastRenderedState:e},t.queue=e,e=e.dispatch=n1.bind(null,Pe,e),[t.memoizedState,e]}function oi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _m(){return It().memoizedState}function Ki(e,t,n,r){var o=Qt();Pe.flags|=e,o.memoizedState=oi(1|t,n,void 0,r===void 0?null:r)}function Hl(e,t,n,r){var o=It();r=r===void 0?null:r;var i=void 0;if(Fe!==null){var l=Fe.memoizedState;if(i=l.destroy,r!==null&&Zu(r,l.deps)){o.memoizedState=oi(t,n,i,r);return}}Pe.flags|=e,o.memoizedState=oi(1|t,n,i,r)}function wd(e,t){return Ki(8390656,8,e,t)}function tc(e,t){return Hl(2048,8,e,t)}function Tm(e,t){return Hl(4,2,e,t)}function Mm(e,t){return Hl(4,4,e,t)}function Pm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rm(e,t,n){return n=n!=null?n.concat([e]):null,Hl(4,4,Pm.bind(null,t,e),n)}function nc(){}function Am(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Em(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dm(e,t,n){return sr&21?(Ut(n,t)||(n=bf(),Pe.lanes|=n,ur|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=n)}function e1(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var r=ns.transition;ns.transition={};try{e(!1),t()}finally{le=n,ns.transition=r}}function km(){return It().memoizedState}function t1(e,t,n){var r=Ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wm(e))bm(t,n);else if(n=sm(e,t,n,r),n!==null){var o=nt();Gt(n,e,r,o),Bm(n,t,r)}}function n1(e,t,n){var r=Ln(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wm(e))bm(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Ut(a,l)){var s=t.interleaved;s===null?(o.next=o,Ku(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=sm(e,t,o,r),n!==null&&(o=nt(),Gt(n,e,r,o),Bm(n,t,r))}}function wm(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function bm(e,t){Io=vl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bu(e,n)}}var xl={readContext:Ot,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},r1={readContext:Ot,useCallback:function(e,t){return Qt().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:wd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ki(4194308,4,Pm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ki(4,2,e,t)},useMemo:function(e,t){var n=Qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=t1.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=Qt();return e={current:e},t.memoizedState=e},useState:kd,useDebugValue:nc,useDeferredValue:function(e){return Qt().memoizedState=e},useTransition:function(){var e=kd(!1),t=e[0];return e=e1.bind(null,e[1]),Qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,o=Qt();if(Ce){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),He===null)throw Error(k(349));sr&30||ym(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,wd(vm.bind(null,r,i,e),[e]),r.flags|=2048,oi(9,Sm.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Qt(),t=He.identifierPrefix;if(Ce){var n=dn,r=cn;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},o1={readContext:Ot,useCallback:Am,useContext:Ot,useEffect:tc,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:Mm,useMemo:Em,useReducer:rs,useRef:_m,useState:function(){return rs(ri)},useDebugValue:nc,useDeferredValue:function(e){var t=It();return Dm(t,Fe.memoizedState,e)},useTransition:function(){var e=rs(ri)[0],t=It().memoizedState;return[e,t]},useMutableSource:hm,useSyncExternalStore:gm,useId:km,unstable_isNewReconciler:!1},i1={readContext:Ot,useCallback:Am,useContext:Ot,useEffect:tc,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:Mm,useMemo:Em,useReducer:os,useRef:_m,useState:function(){return os(ri)},useDebugValue:nc,useDeferredValue:function(e){var t=It();return Fe===null?t.memoizedState=e:Dm(t,Fe.memoizedState,e)},useTransition:function(){var e=os(ri)[0],t=It().memoizedState;return[e,t]},useMutableSource:hm,useSyncExternalStore:gm,useId:km,unstable_isNewReconciler:!1};function qr(e,t){try{var n="",r=t;do n+=Bh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function is(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var l1=typeof WeakMap=="function"?WeakMap:Map;function Om(e,t,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_l||(_l=!0,au=r),qs(e,t)},n}function Im(e,t,n){n=pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){qs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){qs(e,t),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function bd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new l1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=x1.bind(null,e,t,n),t.then(e,e))}function Bd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Od(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pn(-1,1),t.tag=2,Vn(n,t,1))),n.lanes|=1),e)}var a1=vn.ReactCurrentOwner,ut=!1;function tt(e,t,n,r){t.child=e===null?fm(t,null,n,r):Qr(t,e.child,n,r)}function Id(e,t,n,r,o){n=n.render;var i=t.ref;return Hr(t,o),r=Ju(e,t,n,r,i,o),n=ec(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gn(e,t,o)):(Ce&&n&&$u(t),t.flags|=1,tt(e,t,r,o),t.child)}function Vd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!cc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Vm(e,t,i,r,o)):(e=qi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Xo,n(l,r)&&e.ref===t.ref)return gn(e,t,o)}return t.flags|=1,e=Fn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Vm(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Xo(i,r)&&e.ref===t.ref)if(ut=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ut=!0);else return t.lanes=e.lanes,gn(e,t,o)}return Zs(e,t,n,r,o)}function Nm(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Ir,ht),ht|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(Ir,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,pe(Ir,ht),ht|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,pe(Ir,ht),ht|=r;return tt(e,t,o,n),t.child}function Lm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zs(e,t,n,r,o){var i=dt(n)?lr:et.current;return i=Kr(t,i),Hr(t,o),n=Ju(e,t,n,r,i,o),r=ec(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gn(e,t,o)):(Ce&&r&&$u(t),t.flags|=1,tt(e,t,n,o),t.child)}function Nd(e,t,n,r,o){if(dt(n)){var i=!0;pl(t)}else i=!1;if(Hr(t,o),t.stateNode===null)Yi(e,t),dm(t,n,r),Xs(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ot(u):(u=dt(n)?lr:et.current,u=Kr(t,u));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Ed(t,l,r,u),An=!1;var d=t.memoizedState;l.state=d,yl(t,r,l,o),s=t.memoizedState,a!==r||d!==s||ct.current||An?(typeof m=="function"&&(Qs(t,n,m,r),s=t.memoizedState),(a=An||Ad(t,n,a,r,d,s,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,um(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ft(t.type,a),l.props=u,p=t.pendingProps,d=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ot(s):(s=dt(n)?lr:et.current,s=Kr(t,s));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||d!==s)&&Ed(t,l,r,s),An=!1,d=t.memoizedState,l.state=d,yl(t,r,l,o);var g=t.memoizedState;a!==p||d!==g||ct.current||An?(typeof v=="function"&&(Qs(t,n,v,r),g=t.memoizedState),(u=An||Ad(t,n,u,r,d,g,s)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Js(e,t,n,r,i,o)}function Js(e,t,n,r,o,i){Lm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&_d(t,n,!1),gn(e,t,i);r=t.stateNode,a1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Qr(t,e.child,null,i),t.child=Qr(t,null,a,i)):tt(e,t,a,i),t.memoizedState=r.state,o&&_d(t,n,!0),t.child}function Fm(e){var t=e.stateNode;t.pendingContext?Cd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cd(e,t.context,!1),Qu(e,t.containerInfo)}function Ld(e,t,n,r,o){return Yr(),Wu(o),t.flags|=256,tt(e,t,n,r),t.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function tu(e){return{baseLanes:e,cachePool:null,transitions:null}}function jm(e,t,n){var r=t.pendingProps,o=Me.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),pe(Me,o&1),e===null)return Ks(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Gl(l,r,0,null),e=or(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=tu(n),t.memoizedState=eu,e):rc(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return s1(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Fn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Fn(a,i):(i=or(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?tu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=eu,r}return i=e.child,e=i.sibling,r=Fn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rc(e,t){return t=Gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bi(e,t,n,r){return r!==null&&Wu(r),Qr(t,e.child,null,n),e=rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function s1(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=is(Error(k(422))),Bi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Gl({mode:"visible",children:r.children},o,0,null),i=or(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Qr(t,e.child,null,l),t.child.memoizedState=tu(l),t.memoizedState=eu,i);if(!(t.mode&1))return Bi(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=is(i,r,void 0),Bi(e,t,l,r)}if(a=(l&e.childLanes)!==0,ut||a){if(r=He,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,hn(e,o),Gt(r,e,o,-1))}return uc(),r=is(Error(k(421))),Bi(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=C1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,yt=In(o.nextSibling),St=t,Ce=!0,$t=null,e!==null&&(kt[wt++]=cn,kt[wt++]=dn,kt[wt++]=ar,cn=e.id,dn=e.overflow,ar=t),t=rc(t,r.children),t.flags|=4096,t)}function Fd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ys(e.return,t,n)}function ls(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function $m(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(tt(e,t,r.children,n),r=Me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fd(e,n,t);else if(e.tag===19)Fd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(Me,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Sl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ls(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Sl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ls(t,!0,n,null,i);break;case"together":ls(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ur|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function u1(e,t,n){switch(t.tag){case 3:Fm(t),Yr();break;case 5:mm(t);break;case 1:dt(t.type)&&pl(t);break;case 4:Qu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;pe(hl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(Me,Me.current&1),t.flags|=128,null):n&t.child.childLanes?jm(e,t,n):(pe(Me,Me.current&1),e=gn(e,t,n),e!==null?e.sibling:null);pe(Me,Me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $m(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),pe(Me,Me.current),r)break;return null;case 22:case 23:return t.lanes=0,Nm(e,t,n)}return gn(e,t,n)}var Hm,nu,Wm,zm;Hm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nu=function(){};Wm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,tr(tn.current);var i=null;switch(n){case"input":o=Ms(e,o),r=Ms(e,r),i=[];break;case"select":o=Re({},o,{value:void 0}),r=Re({},r,{value:void 0}),i=[];break;case"textarea":o=As(e,o),r=As(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}Ds(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&me("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};zm=function(e,t,n,r){n!==r&&(t.flags|=4)};function yo(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function c1(e,t,n){var r=t.pendingProps;switch(Hu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return dt(t.type)&&dl(),qe(t),null;case 3:return r=t.stateNode,Xr(),he(ct),he(et),qu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$t!==null&&(cu($t),$t=null))),nu(e,t),qe(t),null;case 5:Xu(t);var o=tr(ti.current);if(n=t.type,e!==null&&t.stateNode!=null)Wm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return qe(t),null}if(e=tr(tn.current),wi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Zt]=t,r[Jo]=i,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(o=0;o<Eo.length;o++)me(Eo[o],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Yc(r,i),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},me("invalid",r);break;case"textarea":Xc(r,i),me("invalid",r)}Ds(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ki(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ki(r.textContent,a,e),o=["children",""+a]):Wo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&me("scroll",r)}switch(n){case"input":_i(r),Qc(r,i,!0);break;case"textarea":_i(r),qc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=cl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Zt]=t,e[Jo]=r,Hm(e,t,!1,!1),t.stateNode=e;e:{switch(l=ks(n,r),n){case"dialog":me("cancel",e),me("close",e),o=r;break;case"iframe":case"object":case"embed":me("load",e),o=r;break;case"video":case"audio":for(o=0;o<Eo.length;o++)me(Eo[o],e);o=r;break;case"source":me("error",e),o=r;break;case"img":case"image":case"link":me("error",e),me("load",e),o=r;break;case"details":me("toggle",e),o=r;break;case"input":Yc(e,r),o=Ms(e,r),me("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Re({},r,{value:void 0}),me("invalid",e);break;case"textarea":Xc(e,r),o=As(e,r),me("invalid",e);break;default:o=r}Ds(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?xf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Sf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&zo(e,s):typeof s=="number"&&zo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wo.hasOwnProperty(i)?s!=null&&i==="onScroll"&&me("scroll",e):s!=null&&Au(e,i,s,l))}switch(n){case"input":_i(e),Qc(e,r,!1);break;case"textarea":_i(e),qc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Lr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)zm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=tr(ti.current),tr(tn.current),wi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Zt]=t,(i=r.nodeValue!==n)&&(e=St,e!==null))switch(e.tag){case 3:ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ki(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=t,t.stateNode=r}return qe(t),null;case 13:if(he(Me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&yt!==null&&t.mode&1&&!(t.flags&128))am(),Yr(),t.flags|=98560,i=!1;else if(i=wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Zt]=t}else Yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;qe(t),i=!1}else $t!==null&&(cu($t),$t=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?je===0&&(je=3):uc())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return Xr(),nu(e,t),e===null&&qo(t.stateNode.containerInfo),qe(t),null;case 10:return Uu(t.type._context),qe(t),null;case 17:return dt(t.type)&&dl(),qe(t),null;case 19:if(he(Me),i=t.memoizedState,i===null)return qe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)yo(i,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Sl(e),l!==null){for(t.flags|=128,yo(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(Me,Me.current&1|2),t.child}e=e.sibling}i.tail!==null&&Be()>Zr&&(t.flags|=128,r=!0,yo(i,!1),t.lanes=4194304)}else{if(!r)if(e=Sl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Ce)return qe(t),null}else 2*Be()-i.renderingStartTime>Zr&&n!==1073741824&&(t.flags|=128,r=!0,yo(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Be(),t.sibling=null,n=Me.current,pe(Me,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return sc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ht&1073741824&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function d1(e,t){switch(Hu(t),t.tag){case 1:return dt(t.type)&&dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xr(),he(ct),he(et),qu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xu(t),null;case 13:if(he(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(Me),null;case 4:return Xr(),null;case 10:return Uu(t.type._context),null;case 22:case 23:return sc(),null;case 24:return null;default:return null}}var Oi=!1,Je=!1,p1=typeof WeakSet=="function"?WeakSet:Set,L=null;function Or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function ru(e,t,n){try{n()}catch(r){ke(e,t,r)}}var jd=!1;function f1(e,t){if(js=al,e=Yf(),ju(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,m=0,p=e,d=null;t:for(;;){for(var v;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(v=p.firstChild)!==null;)d=p,p=v;for(;;){if(p===e)break t;if(d===n&&++u===o&&(a=l),d===i&&++m===r&&(s=l),(v=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for($s={focusedElem:e,selectionRange:n},al=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,P=g.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ft(t.type,y),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(S){ke(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return g=jd,jd=!1,g}function Vo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ru(t,n,i)}o=o.next}while(o!==r)}}function Wl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ou(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gm(e){var t=e.alternate;t!==null&&(e.alternate=null,Gm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Zt],delete t[Jo],delete t[zs],delete t[Qg],delete t[Xg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Um(e){return e.tag===5||e.tag===3||e.tag===4}function $d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Um(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(iu(e,t,n),e=e.sibling;e!==null;)iu(e,t,n),e=e.sibling}function lu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lu(e,t,n),e=e.sibling;e!==null;)lu(e,t,n),e=e.sibling}var Ue=null,jt=!1;function Mn(e,t,n){for(n=n.child;n!==null;)Km(e,t,n),n=n.sibling}function Km(e,t,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Il,n)}catch{}switch(n.tag){case 5:Je||Or(n,t);case 6:var r=Ue,o=jt;Ue=null,Mn(e,t,n),Ue=r,jt=o,Ue!==null&&(jt?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(jt?(e=Ue,n=n.stateNode,e.nodeType===8?Ja(e.parentNode,n):e.nodeType===1&&Ja(e,n),Yo(e)):Ja(Ue,n.stateNode));break;case 4:r=Ue,o=jt,Ue=n.stateNode.containerInfo,jt=!0,Mn(e,t,n),Ue=r,jt=o;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ru(n,t,l),o=o.next}while(o!==r)}Mn(e,t,n);break;case 1:if(!Je&&(Or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,t,a)}Mn(e,t,n);break;case 21:Mn(e,t,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Mn(e,t,n),Je=r):Mn(e,t,n);break;default:Mn(e,t,n)}}function Hd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new p1),t.forEach(function(r){var o=_1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ue=a.stateNode,jt=!1;break e;case 3:Ue=a.stateNode.containerInfo,jt=!0;break e;case 4:Ue=a.stateNode.containerInfo,jt=!0;break e}a=a.return}if(Ue===null)throw Error(k(160));Km(i,l,o),Ue=null,jt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ke(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ym(t,e),t=t.sibling}function Ym(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),Yt(e),r&4){try{Vo(3,e,e.return),Wl(3,e)}catch(y){ke(e,e.return,y)}try{Vo(5,e,e.return)}catch(y){ke(e,e.return,y)}}break;case 1:Lt(t,e),Yt(e),r&512&&n!==null&&Or(n,n.return);break;case 5:if(Lt(t,e),Yt(e),r&512&&n!==null&&Or(n,n.return),e.flags&32){var o=e.stateNode;try{zo(o,"")}catch(y){ke(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&hf(o,i),ks(a,l);var u=ks(a,i);for(l=0;l<s.length;l+=2){var m=s[l],p=s[l+1];m==="style"?xf(o,p):m==="dangerouslySetInnerHTML"?Sf(o,p):m==="children"?zo(o,p):Au(o,m,p,u)}switch(a){case"input":Ps(o,i);break;case"textarea":gf(o,i);break;case"select":var d=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Lr(o,!!i.multiple,v,!1):d!==!!i.multiple&&(i.defaultValue!=null?Lr(o,!!i.multiple,i.defaultValue,!0):Lr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Jo]=i}catch(y){ke(e,e.return,y)}}break;case 6:if(Lt(t,e),Yt(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){ke(e,e.return,y)}}break;case 3:if(Lt(t,e),Yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(t.containerInfo)}catch(y){ke(e,e.return,y)}break;case 4:Lt(t,e),Yt(e);break;case 13:Lt(t,e),Yt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(lc=Be())),r&4&&Hd(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(u=Je)||m,Lt(t,e),Je=u):Lt(t,e),Yt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(L=e,m=e.child;m!==null;){for(p=L=m;L!==null;){switch(d=L,v=d.child,d.tag){case 0:case 11:case 14:case 15:Vo(4,d,d.return);break;case 1:Or(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){ke(r,n,y)}}break;case 5:Or(d,d.return);break;case 22:if(d.memoizedState!==null){zd(p);continue}}v!==null?(v.return=d,L=v):zd(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=vf("display",l))}catch(y){ke(e,e.return,y)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){ke(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Lt(t,e),Yt(e),r&4&&Hd(e);break;case 21:break;default:Lt(t,e),Yt(e)}}function Yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Um(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(zo(o,""),r.flags&=-33);var i=$d(e);lu(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=$d(e);iu(e,a,l);break;default:throw Error(k(161))}}catch(s){ke(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function m1(e,t,n){L=e,Qm(e)}function Qm(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Oi;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Je;a=Oi;var u=Je;if(Oi=l,(Je=s)&&!u)for(L=o;L!==null;)l=L,s=l.child,l.tag===22&&l.memoizedState!==null?Gd(o):s!==null?(s.return=l,L=s):Gd(o);for(;i!==null;)L=i,Qm(i),i=i.sibling;L=o,Oi=a,Je=u}Wd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,L=i):Wd(e)}}function Wd(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Je||Wl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Je)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ft(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Rd(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Rd(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Yo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Je||t.flags&512&&ou(t)}catch(d){ke(t,t.return,d)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function zd(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Gd(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wl(4,t)}catch(s){ke(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ke(t,o,s)}}var i=t.return;try{ou(t)}catch(s){ke(t,i,s)}break;case 5:var l=t.return;try{ou(t)}catch(s){ke(t,l,s)}}}catch(s){ke(t,t.return,s)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var h1=Math.ceil,Cl=vn.ReactCurrentDispatcher,oc=vn.ReactCurrentOwner,Bt=vn.ReactCurrentBatchConfig,ee=0,He=null,Ne=null,Ye=0,ht=0,Ir=Gn(0),je=0,ii=null,ur=0,zl=0,ic=0,No=null,st=null,lc=0,Zr=1/0,an=null,_l=!1,au=null,Nn=null,Ii=!1,wn=null,Tl=0,Lo=0,su=null,Qi=-1,Xi=0;function nt(){return ee&6?Be():Qi!==-1?Qi:Qi=Be()}function Ln(e){return e.mode&1?ee&2&&Ye!==0?Ye&-Ye:Zg.transition!==null?(Xi===0&&(Xi=bf()),Xi):(e=le,e!==0||(e=window.event,e=e===void 0?16:Ff(e.type)),e):1}function Gt(e,t,n,r){if(50<Lo)throw Lo=0,su=null,Error(k(185));di(e,n,r),(!(ee&2)||e!==He)&&(e===He&&(!(ee&2)&&(zl|=n),je===4&&Dn(e,Ye)),pt(e,r),n===1&&ee===0&&!(t.mode&1)&&(Zr=Be()+500,jl&&Un()))}function pt(e,t){var n=e.callbackNode;Zh(e,t);var r=ll(e,e===He?Ye:0);if(r===0)n!==null&&ed(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ed(n),t===1)e.tag===0?qg(Ud.bind(null,e)):om(Ud.bind(null,e)),Kg(function(){!(ee&6)&&Un()}),n=null;else{switch(Bf(r)){case 1:n=bu;break;case 4:n=kf;break;case 16:n=il;break;case 536870912:n=wf;break;default:n=il}n=r0(n,Xm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xm(e,t){if(Qi=-1,Xi=0,ee&6)throw Error(k(327));var n=e.callbackNode;if(Wr()&&e.callbackNode!==n)return null;var r=ll(e,e===He?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ml(e,r);else{t=r;var o=ee;ee|=2;var i=Zm();(He!==e||Ye!==t)&&(an=null,Zr=Be()+500,rr(e,t));do try{S1();break}catch(a){qm(e,a)}while(1);Gu(),Cl.current=i,ee=o,Ne!==null?t=0:(He=null,Ye=0,t=je)}if(t!==0){if(t===2&&(o=Is(e),o!==0&&(r=o,t=uu(e,o))),t===1)throw n=ii,rr(e,0),Dn(e,r),pt(e,Be()),n;if(t===6)Dn(e,r);else{if(o=e.current.alternate,!(r&30)&&!g1(o)&&(t=Ml(e,r),t===2&&(i=Is(e),i!==0&&(r=i,t=uu(e,i))),t===1))throw n=ii,rr(e,0),Dn(e,r),pt(e,Be()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Xn(e,st,an);break;case 3:if(Dn(e,r),(r&130023424)===r&&(t=lc+500-Be(),10<t)){if(ll(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ws(Xn.bind(null,e,st,an),t);break}Xn(e,st,an);break;case 4:if(Dn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-zt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*h1(r/1960))-r,10<r){e.timeoutHandle=Ws(Xn.bind(null,e,st,an),r);break}Xn(e,st,an);break;case 5:Xn(e,st,an);break;default:throw Error(k(329))}}}return pt(e,Be()),e.callbackNode===n?Xm.bind(null,e):null}function uu(e,t){var n=No;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=Ml(e,t),e!==2&&(t=st,st=n,t!==null&&cu(t)),e}function cu(e){st===null?st=e:st.push.apply(st,e)}function g1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ut(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t){for(t&=~ic,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-zt(t),r=1<<n;e[n]=-1,t&=~r}}function Ud(e){if(ee&6)throw Error(k(327));Wr();var t=ll(e,0);if(!(t&1))return pt(e,Be()),null;var n=Ml(e,t);if(e.tag!==0&&n===2){var r=Is(e);r!==0&&(t=r,n=uu(e,r))}if(n===1)throw n=ii,rr(e,0),Dn(e,t),pt(e,Be()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xn(e,st,an),pt(e,Be()),null}function ac(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(Zr=Be()+500,jl&&Un())}}function cr(e){wn!==null&&wn.tag===0&&!(ee&6)&&Wr();var t=ee;ee|=1;var n=Bt.transition,r=le;try{if(Bt.transition=null,le=1,e)return e()}finally{le=r,Bt.transition=n,ee=t,!(ee&6)&&Un()}}function sc(){ht=Ir.current,he(Ir)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ug(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Hu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Xr(),he(ct),he(et),qu();break;case 5:Xu(r);break;case 4:Xr();break;case 13:he(Me);break;case 19:he(Me);break;case 10:Uu(r.type._context);break;case 22:case 23:sc()}n=n.return}if(He=e,Ne=e=Fn(e.current,null),Ye=ht=t,je=0,ii=null,ic=zl=ur=0,st=No=null,er!==null){for(t=0;t<er.length;t++)if(n=er[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}er=null}return e}function qm(e,t){do{var n=Ne;try{if(Gu(),Ui.current=xl,vl){for(var r=Pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}vl=!1}if(sr=0,$e=Fe=Pe=null,Io=!1,ni=0,oc.current=null,n===null||n.return===null){je=1,ii=t,Ne=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=Ye,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=a,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var d=m.alternate;d?(m.updateQueue=d.updateQueue,m.memoizedState=d.memoizedState,m.lanes=d.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=Bd(l);if(v!==null){v.flags&=-257,Od(v,l,a,i,t),v.mode&1&&bd(i,u,t),t=v,s=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(s),t.updateQueue=y}else g.add(s);break e}else{if(!(t&1)){bd(i,u,t),uc();break e}s=Error(k(426))}}else if(Ce&&a.mode&1){var P=Bd(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Od(P,l,a,i,t),Wu(qr(s,a));break e}}i=s=qr(s,a),je!==4&&(je=2),No===null?No=[i]:No.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Om(i,s,t);Pd(i,f);break e;case 1:a=s;var c=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Nn===null||!Nn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Im(i,a,t);Pd(i,S);break e}}i=i.return}while(i!==null)}e0(n)}catch(M){t=M,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(1)}function Zm(){var e=Cl.current;return Cl.current=xl,e===null?xl:e}function uc(){(je===0||je===3||je===2)&&(je=4),He===null||!(ur&268435455)&&!(zl&268435455)||Dn(He,Ye)}function Ml(e,t){var n=ee;ee|=2;var r=Zm();(He!==e||Ye!==t)&&(an=null,rr(e,t));do try{y1();break}catch(o){qm(e,o)}while(1);if(Gu(),ee=n,Cl.current=r,Ne!==null)throw Error(k(261));return He=null,Ye=0,je}function y1(){for(;Ne!==null;)Jm(Ne)}function S1(){for(;Ne!==null&&!Wh();)Jm(Ne)}function Jm(e){var t=n0(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?e0(e):Ne=t,oc.current=null}function e0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=d1(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,Ne=null;return}}else if(n=c1(n,t,ht),n!==null){Ne=n;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);je===0&&(je=5)}function Xn(e,t,n){var r=le,o=Bt.transition;try{Bt.transition=null,le=1,v1(e,t,n,r)}finally{Bt.transition=o,le=r}return null}function v1(e,t,n,r){do Wr();while(wn!==null);if(ee&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Jh(e,i),e===He&&(Ne=He=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ii||(Ii=!0,r0(il,function(){return Wr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Bt.transition,Bt.transition=null;var l=le;le=1;var a=ee;ee|=4,oc.current=null,f1(e,n),Ym(n,e),Fg($s),al=!!js,$s=js=null,e.current=n,m1(n),zh(),ee=a,le=l,Bt.transition=i}else e.current=n;if(Ii&&(Ii=!1,wn=e,Tl=o),i=e.pendingLanes,i===0&&(Nn=null),Kh(n.stateNode),pt(e,Be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(_l)throw _l=!1,e=au,au=null,e;return Tl&1&&e.tag!==0&&Wr(),i=e.pendingLanes,i&1?e===su?Lo++:(Lo=0,su=e):Lo=0,Un(),null}function Wr(){if(wn!==null){var e=Bf(Tl),t=Bt.transition,n=le;try{if(Bt.transition=null,le=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,Tl=0,ee&6)throw Error(k(331));var o=ee;for(ee|=4,L=e.current;L!==null;){var i=L,l=i.child;if(L.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(L=u;L!==null;){var m=L;switch(m.tag){case 0:case 11:case 15:Vo(8,m,i)}var p=m.child;if(p!==null)p.return=m,L=p;else for(;L!==null;){m=L;var d=m.sibling,v=m.return;if(Gm(m),m===u){L=null;break}if(d!==null){d.return=v,L=d;break}L=v}}}var g=i.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}L=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,L=l;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vo(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,L=f;break e}L=i.return}}var c=e.current;for(L=c;L!==null;){l=L;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,L=h;else e:for(l=c;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wl(9,a)}}catch(M){ke(a,a.return,M)}if(a===l){L=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,L=S;break e}L=a.return}}if(ee=o,Un(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Il,e)}catch{}r=!0}return r}finally{le=n,Bt.transition=t}}return!1}function Kd(e,t,n){t=qr(n,t),t=Om(e,t,1),e=Vn(e,t,1),t=nt(),e!==null&&(di(e,1,t),pt(e,t))}function ke(e,t,n){if(e.tag===3)Kd(e,e,n);else for(;t!==null;){if(t.tag===3){Kd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){e=qr(n,e),e=Im(t,e,1),t=Vn(t,e,1),e=nt(),t!==null&&(di(t,1,e),pt(t,e));break}}t=t.return}}function x1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(Ye&n)===n&&(je===4||je===3&&(Ye&130023424)===Ye&&500>Be()-lc?rr(e,0):ic|=n),pt(e,t)}function t0(e,t){t===0&&(e.mode&1?(t=Pi,Pi<<=1,!(Pi&130023424)&&(Pi=4194304)):t=1);var n=nt();e=hn(e,t),e!==null&&(di(e,t,n),pt(e,n))}function C1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),t0(e,n)}function _1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),t0(e,n)}var n0;n0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ut=!1,u1(e,t,n);ut=!!(e.flags&131072)}else ut=!1,Ce&&t.flags&1048576&&im(t,ml,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Yi(e,t),e=t.pendingProps;var o=Kr(t,et.current);Hr(t,n),o=Ju(null,t,r,e,o,n);var i=ec();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,dt(r)?(i=!0,pl(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Yu(t),o.updater=$l,t.stateNode=o,o._reactInternals=t,Xs(t,r,e,n),t=Js(null,t,r,!0,i,n)):(t.tag=0,Ce&&i&&$u(t),tt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Yi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=M1(r),e=Ft(r,e),o){case 0:t=Zs(null,t,r,e,n);break e;case 1:t=Nd(null,t,r,e,n);break e;case 11:t=Id(null,t,r,e,n);break e;case 14:t=Vd(null,t,r,Ft(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ft(r,o),Zs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ft(r,o),Nd(e,t,r,o,n);case 3:e:{if(Fm(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,um(e,t),yl(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=qr(Error(k(423)),t),t=Ld(e,t,r,n,o);break e}else if(r!==o){o=qr(Error(k(424)),t),t=Ld(e,t,r,n,o);break e}else for(yt=In(t.stateNode.containerInfo.firstChild),St=t,Ce=!0,$t=null,n=fm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),r===o){t=gn(e,t,n);break e}tt(e,t,r,n)}t=t.child}return t;case 5:return mm(t),e===null&&Ks(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Hs(r,o)?l=null:i!==null&&Hs(r,i)&&(t.flags|=32),Lm(e,t),tt(e,t,l,n),t.child;case 6:return e===null&&Ks(t),null;case 13:return jm(e,t,n);case 4:return Qu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qr(t,null,r,n):tt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ft(r,o),Id(e,t,r,o,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,pe(hl,r._currentValue),r._currentValue=l,i!==null)if(Ut(i.value,l)){if(i.children===o.children&&!ct.current){t=gn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=pn(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ys(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ys(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}tt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Hr(t,n),o=Ot(o),r=r(o),t.flags|=1,tt(e,t,r,n),t.child;case 14:return r=t.type,o=Ft(r,t.pendingProps),o=Ft(r.type,o),Vd(e,t,r,o,n);case 15:return Vm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ft(r,o),Yi(e,t),t.tag=1,dt(r)?(e=!0,pl(t)):e=!1,Hr(t,n),dm(t,r,o),Xs(t,r,o,n),Js(null,t,r,!0,e,n);case 19:return $m(e,t,n);case 22:return Nm(e,t,n)}throw Error(k(156,t.tag))};function r0(e,t){return Df(e,t)}function T1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,n,r){return new T1(e,t,n,r)}function cc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function M1(e){if(typeof e=="function")return cc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Du)return 11;if(e===ku)return 14}return 2}function Fn(e,t){var n=e.alternate;return n===null?(n=bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")cc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Pr:return or(n.children,o,i,t);case Eu:l=8,o|=8;break;case xs:return e=bt(12,n,t,o|2),e.elementType=xs,e.lanes=i,e;case Cs:return e=bt(13,n,t,o),e.elementType=Cs,e.lanes=i,e;case _s:return e=bt(19,n,t,o),e.elementType=_s,e.lanes=i,e;case pf:return Gl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cf:l=10;break e;case df:l=9;break e;case Du:l=11;break e;case ku:l=14;break e;case Rn:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=bt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function or(e,t,n,r){return e=bt(7,e,r,t),e.lanes=n,e}function Gl(e,t,n,r){return e=bt(22,e,r,t),e.elementType=pf,e.lanes=n,e.stateNode={isHidden:!1},e}function as(e,t,n){return e=bt(6,e,null,t),e.lanes=n,e}function ss(e,t,n){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function P1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ha(0),this.expirationTimes=Ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ha(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function dc(e,t,n,r,o,i,l,a,s){return e=new P1(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=bt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yu(i),e}function R1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function o0(e){if(!e)return $n;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(dt(n))return rm(e,n,t)}return t}function i0(e,t,n,r,o,i,l,a,s){return e=dc(n,r,!0,e,o,i,l,a,s),e.context=o0(null),n=e.current,r=nt(),o=Ln(n),i=pn(r,o),i.callback=t??null,Vn(n,i,o),e.current.lanes=o,di(e,o,r),pt(e,r),e}function Ul(e,t,n,r){var o=t.current,i=nt(),l=Ln(o);return n=o0(n),t.context===null?t.context=n:t.pendingContext=n,t=pn(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vn(o,t,l),e!==null&&(Gt(e,o,l,i),Gi(e,o,l)),l}function Pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pc(e,t){Yd(e,t),(e=e.alternate)&&Yd(e,t)}function A1(){return null}var l0=typeof reportError=="function"?reportError:function(e){console.error(e)};function fc(e){this._internalRoot=e}Kl.prototype.render=fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ul(e,t,null,null)};Kl.prototype.unmount=fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){Ul(null,e,null,null)}),t[mn]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&Lf(e)}};function mc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qd(){}function E1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Pl(l);i.call(u)}}var l=i0(t,r,e,0,null,!1,!1,"",Qd);return e._reactRootContainer=l,e[mn]=l.current,qo(e.nodeType===8?e.parentNode:e),cr(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Pl(s);a.call(u)}}var s=dc(e,0,!1,null,null,!1,!1,"",Qd);return e._reactRootContainer=s,e[mn]=s.current,qo(e.nodeType===8?e.parentNode:e),cr(function(){Ul(t,s,n,r)}),s}function Ql(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Pl(l);a.call(s)}}Ul(t,l,e,o)}else l=E1(n,t,e,o,r);return Pl(l)}Of=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ao(t.pendingLanes);n!==0&&(Bu(t,n|1),pt(t,Be()),!(ee&6)&&(Zr=Be()+500,Un()))}break;case 13:cr(function(){var r=hn(e,1);if(r!==null){var o=nt();Gt(r,e,1,o)}}),pc(e,1)}};Ou=function(e){if(e.tag===13){var t=hn(e,134217728);if(t!==null){var n=nt();Gt(t,e,134217728,n)}pc(e,134217728)}};If=function(e){if(e.tag===13){var t=Ln(e),n=hn(e,t);if(n!==null){var r=nt();Gt(n,e,t,r)}pc(e,t)}};Vf=function(){return le};Nf=function(e,t){var n=le;try{return le=e,t()}finally{le=n}};bs=function(e,t,n){switch(t){case"input":if(Ps(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Fl(r);if(!o)throw Error(k(90));mf(r),Ps(r,o)}}}break;case"textarea":gf(e,n);break;case"select":t=n.value,t!=null&&Lr(e,!!n.multiple,t,!1)}};Tf=ac;Mf=cr;var D1={usingClientEntryPoint:!1,Events:[fi,Dr,Fl,Cf,_f,ac]},So={findFiberByHostInstance:Jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},k1={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Af(e),e===null?null:e.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||A1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vi.isDisabled&&Vi.supportsFiber)try{Il=Vi.inject(k1),en=Vi}catch{}}_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1;_t.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(t))throw Error(k(200));return R1(e,t,null,n)};_t.createRoot=function(e,t){if(!mc(e))throw Error(k(299));var n=!1,r="",o=l0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=dc(e,1,!1,null,null,n,!1,r,o),e[mn]=t.current,qo(e.nodeType===8?e.parentNode:e),new fc(t)};_t.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Af(t),e=e===null?null:e.stateNode,e};_t.flushSync=function(e){return cr(e)};_t.hydrate=function(e,t,n){if(!Yl(t))throw Error(k(200));return Ql(null,e,t,!0,n)};_t.hydrateRoot=function(e,t,n){if(!mc(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=l0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=i0(t,null,e,1,n??null,o,!1,i,l),e[mn]=t.current,qo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Kl(t)};_t.render=function(e,t,n){if(!Yl(t))throw Error(k(200));return Ql(null,e,t,!1,n)};_t.unmountComponentAtNode=function(e){if(!Yl(e))throw Error(k(40));return e._reactRootContainer?(cr(function(){Ql(null,null,e,!1,function(){e._reactRootContainer=null,e[mn]=null})}),!0):!1};_t.unstable_batchedUpdates=ac;_t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ql(e,t,n,!1,r)};_t.version="18.2.0-next-9e3b772b8-20220608";function a0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a0)}catch(e){console.error(e)}}a0(),of.exports=_t;var Xl=of.exports;const Ni=Kp(Xl);var Xd=Xl;Ss.createRoot=Xd.createRoot,Ss.hydrateRoot=Xd.hydrateRoot;const w1={black:"#000",white:"#fff"},li=w1,b1={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},yr=b1,B1={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Sr=B1,O1={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},vr=O1,I1={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},xr=I1,V1={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Cr=V1,N1={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},vo=N1,L1={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},F1=L1;function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function un(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function s0(e){if(!un(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=s0(e[n])}),t}function ft(e,t,n={clone:!0}){const r=n.clone?_({},e):e;return un(e)&&un(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(un(t[o])&&o in e&&un(e[o])?r[o]=ft(e[o],t[o],n):n.clone?r[o]=un(t[o])?s0(t[o]):t[o]:r[o]=t[o])}),r}function Hn(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var ue={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc=Symbol.for("react.element"),gc=Symbol.for("react.portal"),ql=Symbol.for("react.fragment"),Zl=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),ea=Symbol.for("react.provider"),ta=Symbol.for("react.context"),j1=Symbol.for("react.server_context"),na=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),oa=Symbol.for("react.suspense_list"),ia=Symbol.for("react.memo"),la=Symbol.for("react.lazy"),$1=Symbol.for("react.offscreen"),u0;u0=Symbol.for("react.module.reference");function Vt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case hc:switch(e=e.type,e){case ql:case Jl:case Zl:case ra:case oa:return e;default:switch(e=e&&e.$$typeof,e){case j1:case ta:case na:case la:case ia:case ea:return e;default:return t}}case gc:return t}}}ue.ContextConsumer=ta;ue.ContextProvider=ea;ue.Element=hc;ue.ForwardRef=na;ue.Fragment=ql;ue.Lazy=la;ue.Memo=ia;ue.Portal=gc;ue.Profiler=Jl;ue.StrictMode=Zl;ue.Suspense=ra;ue.SuspenseList=oa;ue.isAsyncMode=function(){return!1};ue.isConcurrentMode=function(){return!1};ue.isContextConsumer=function(e){return Vt(e)===ta};ue.isContextProvider=function(e){return Vt(e)===ea};ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===hc};ue.isForwardRef=function(e){return Vt(e)===na};ue.isFragment=function(e){return Vt(e)===ql};ue.isLazy=function(e){return Vt(e)===la};ue.isMemo=function(e){return Vt(e)===ia};ue.isPortal=function(e){return Vt(e)===gc};ue.isProfiler=function(e){return Vt(e)===Jl};ue.isStrictMode=function(e){return Vt(e)===Zl};ue.isSuspense=function(e){return Vt(e)===ra};ue.isSuspenseList=function(e){return Vt(e)===oa};ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ql||e===Jl||e===Zl||e===ra||e===oa||e===$1||typeof e=="object"&&e!==null&&(e.$$typeof===la||e.$$typeof===ia||e.$$typeof===ea||e.$$typeof===ta||e.$$typeof===na||e.$$typeof===u0||e.getModuleId!==void 0)};ue.typeOf=Vt;function ge(e){if(typeof e!="string")throw new Error(Hn(7));return e.charAt(0).toUpperCase()+e.slice(1)}function qd(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function c0(e,t=166){let n;function r(...o){const i=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(i,t)}return r.clear=()=>{clearTimeout(n)},r}function us(e,t){var n,r;return x.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function vt(e){return e&&e.ownerDocument||document}function dr(e){return vt(e).defaultView||window}function du(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const H1=typeof window<"u"?x.useLayoutEffect:x.useEffect,Wn=H1;let Zd=0;function W1(e){const[t,n]=x.useState(e),r=e||t;return x.useEffect(()=>{t==null&&(Zd+=1,n(`mui-${Zd}`))},[t]),r}const Jd=ys["useId".toString()];function z1(e){if(Jd!==void 0){const t=Jd();return e??t}return W1(e)}function ep({controlled:e,default:t,name:n,state:r="value"}){const{current:o}=x.useRef(e!==void 0),[i,l]=x.useState(t),a=o?e:i,s=x.useCallback(u=>{o||l(u)},[]);return[a,s]}function Vr(e){const t=x.useRef(e);return Wn(()=>{t.current=e}),x.useCallback((...n)=>(0,t.current)(...n),[])}function rt(...e){return x.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{du(n,t)})},e)}let aa=!0,pu=!1,tp;const G1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function U1(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&G1[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function K1(e){e.metaKey||e.altKey||e.ctrlKey||(aa=!0)}function cs(){aa=!1}function Y1(){this.visibilityState==="hidden"&&pu&&(aa=!0)}function Q1(e){e.addEventListener("keydown",K1,!0),e.addEventListener("mousedown",cs,!0),e.addEventListener("pointerdown",cs,!0),e.addEventListener("touchstart",cs,!0),e.addEventListener("visibilitychange",Y1,!0)}function X1(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return aa||U1(t)}function q1(){const e=x.useCallback(o=>{o!=null&&Q1(o.ownerDocument)},[]),t=x.useRef(!1);function n(){return t.current?(pu=!0,window.clearTimeout(tp),tp=window.setTimeout(()=>{pu=!1},100),t.current=!1,!0):!1}function r(o){return X1(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function d0(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function p0(e,t){const n=_({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=_({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=o:!o||!Object.keys(o)?n[r]=i:(n[r]=_({},i),Object.keys(o).forEach(l=>{n[r][l]=p0(o[l],i[l])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function Le(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((i,l)=>{if(l){const a=t(l);a!==""&&i.push(a),n&&n[l]&&i.push(n[l])}return i},[]).join(" ")}),r}const np=e=>e,Z1=()=>{let e=np;return{configure(t){e=t},generate(t){return e(t)},reset(){e=np}}},J1=Z1(),ey=J1,ty={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Oe(e,t,n="Mui"){const r=ty[t];return r?`${n}-${r}`:`${ey.generate(e)}-${t}`}function Ae(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=Oe(e,o,n)}),r}const Jr="$$material";function G(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function f0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ny=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ry=f0(function(e){return ny.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function oy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function iy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var ly=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(iy(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=oy(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ze="-ms-",Rl="-moz-",te="-webkit-",m0="comm",yc="rule",Sc="decl",ay="@import",h0="@keyframes",sy="@layer",uy=Math.abs,sa=String.fromCharCode,cy=Object.assign;function dy(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function g0(e){return e.trim()}function py(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function fu(e,t){return e.indexOf(t)}function Ke(e,t){return e.charCodeAt(t)|0}function ai(e,t,n){return e.slice(t,n)}function Xt(e){return e.length}function vc(e){return e.length}function Li(e,t){return t.push(e),e}function fy(e,t){return e.map(t).join("")}var ua=1,eo=1,y0=0,mt=0,Ve=0,ao="";function ca(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ua,column:eo,length:l,return:""}}function xo(e,t){return cy(ca("",null,null,"",null,null,0),e,{length:-e.length},t)}function my(){return Ve}function hy(){return Ve=mt>0?Ke(ao,--mt):0,eo--,Ve===10&&(eo=1,ua--),Ve}function xt(){return Ve=mt<y0?Ke(ao,mt++):0,eo++,Ve===10&&(eo=1,ua++),Ve}function nn(){return Ke(ao,mt)}function Zi(){return mt}function hi(e,t){return ai(ao,e,t)}function si(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function S0(e){return ua=eo=1,y0=Xt(ao=e),mt=0,[]}function v0(e){return ao="",e}function Ji(e){return g0(hi(mt-1,mu(e===91?e+2:e===40?e+1:e)))}function gy(e){for(;(Ve=nn())&&Ve<33;)xt();return si(e)>2||si(Ve)>3?"":" "}function yy(e,t){for(;--t&&xt()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return hi(e,Zi()+(t<6&&nn()==32&&xt()==32))}function mu(e){for(;xt();)switch(Ve){case e:return mt;case 34:case 39:e!==34&&e!==39&&mu(Ve);break;case 40:e===41&&mu(e);break;case 92:xt();break}return mt}function Sy(e,t){for(;xt()&&e+Ve!==47+10;)if(e+Ve===42+42&&nn()===47)break;return"/*"+hi(t,mt-1)+"*"+sa(e===47?e:xt())}function vy(e){for(;!si(nn());)xt();return hi(e,mt)}function xy(e){return v0(el("",null,null,null,[""],e=S0(e),0,[0],e))}function el(e,t,n,r,o,i,l,a,s){for(var u=0,m=0,p=l,d=0,v=0,g=0,y=1,P=1,f=1,c=0,h="",S=o,M=i,R=r,T=h;P;)switch(g=c,c=xt()){case 40:if(g!=108&&Ke(T,p-1)==58){fu(T+=ne(Ji(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:T+=Ji(c);break;case 9:case 10:case 13:case 32:T+=gy(g);break;case 92:T+=yy(Zi()-1,7);continue;case 47:switch(nn()){case 42:case 47:Li(Cy(Sy(xt(),Zi()),t,n),s);break;default:T+="/"}break;case 123*y:a[u++]=Xt(T)*f;case 125*y:case 59:case 0:switch(c){case 0:case 125:P=0;case 59+m:f==-1&&(T=ne(T,/\f/g,"")),v>0&&Xt(T)-p&&Li(v>32?op(T+";",r,n,p-1):op(ne(T," ","")+";",r,n,p-2),s);break;case 59:T+=";";default:if(Li(R=rp(T,t,n,u,m,o,a,h,S=[],M=[],p),i),c===123)if(m===0)el(T,t,R,R,S,i,p,a,M);else switch(d===99&&Ke(T,3)===110?100:d){case 100:case 108:case 109:case 115:el(e,R,R,r&&Li(rp(e,R,R,0,0,o,a,h,o,S=[],p),M),o,M,p,a,r?S:M);break;default:el(T,R,R,R,[""],M,0,a,M)}}u=m=v=0,y=f=1,h=T="",p=l;break;case 58:p=1+Xt(T),v=g;default:if(y<1){if(c==123)--y;else if(c==125&&y++==0&&hy()==125)continue}switch(T+=sa(c),c*y){case 38:f=m>0?1:(T+="\f",-1);break;case 44:a[u++]=(Xt(T)-1)*f,f=1;break;case 64:nn()===45&&(T+=Ji(xt())),d=nn(),m=p=Xt(h=T+=vy(Zi())),c++;break;case 45:g===45&&Xt(T)==2&&(y=0)}}return i}function rp(e,t,n,r,o,i,l,a,s,u,m){for(var p=o-1,d=o===0?i:[""],v=vc(d),g=0,y=0,P=0;g<r;++g)for(var f=0,c=ai(e,p+1,p=uy(y=l[g])),h=e;f<v;++f)(h=g0(y>0?d[f]+" "+c:ne(c,/&\f/g,d[f])))&&(s[P++]=h);return ca(e,t,n,o===0?yc:a,s,u,m)}function Cy(e,t,n){return ca(e,t,n,m0,sa(my()),ai(e,2,-2),0)}function op(e,t,n,r){return ca(e,t,n,Sc,ai(e,0,r),ai(e,r+1,-1),r)}function zr(e,t){for(var n="",r=vc(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function _y(e,t,n,r){switch(e.type){case sy:if(e.children.length)break;case ay:case Sc:return e.return=e.return||e.value;case m0:return"";case h0:return e.return=e.value+"{"+zr(e.children,r)+"}";case yc:e.value=e.props.join(",")}return Xt(n=zr(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ty(e){var t=vc(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function My(e){return function(t){t.root||(t=t.return)&&e(t)}}var Py=function(t,n,r){for(var o=0,i=0;o=i,i=nn(),o===38&&i===12&&(n[r]=1),!si(i);)xt();return hi(t,mt)},Ry=function(t,n){var r=-1,o=44;do switch(si(o)){case 0:o===38&&nn()===12&&(n[r]=1),t[r]+=Py(mt-1,n,r);break;case 2:t[r]+=Ji(o);break;case 4:if(o===44){t[++r]=nn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=sa(o)}while(o=xt());return t},Ay=function(t,n){return v0(Ry(S0(t),n))},ip=new WeakMap,Ey=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!ip.get(r))&&!o){ip.set(t,!0);for(var i=[],l=Ay(n,i),a=r.props,s=0,u=0;s<l.length;s++)for(var m=0;m<a.length;m++,u++)t.props[u]=i[s]?l[s].replace(/&\f/g,a[m]):a[m]+" "+l[s]}}},Dy=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function x0(e,t){switch(dy(e,t)){case 5103:return te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return te+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return te+e+Rl+e+Ze+e+e;case 6828:case 4268:return te+e+Ze+e+e;case 6165:return te+e+Ze+"flex-"+e+e;case 5187:return te+e+ne(e,/(\w+).+(:[^]+)/,te+"box-$1$2"+Ze+"flex-$1$2")+e;case 5443:return te+e+Ze+"flex-item-"+ne(e,/flex-|-self/,"")+e;case 4675:return te+e+Ze+"flex-line-pack"+ne(e,/align-content|flex-|-self/,"")+e;case 5548:return te+e+Ze+ne(e,"shrink","negative")+e;case 5292:return te+e+Ze+ne(e,"basis","preferred-size")+e;case 6060:return te+"box-"+ne(e,"-grow","")+te+e+Ze+ne(e,"grow","positive")+e;case 4554:return te+ne(e,/([^-])(transform)/g,"$1"+te+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,te+"$1"),/(image-set)/,te+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,te+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,te+"box-pack:$3"+Ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+te+e+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xt(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+te+"$2-$3$1"+Rl+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~fu(e,"stretch")?x0(ne(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ke(e,t+1)!==115)break;case 6444:switch(Ke(e,Xt(e)-3-(~fu(e,"!important")&&10))){case 107:return ne(e,":",":"+te)+e;case 101:return ne(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+te+(Ke(e,14)===45?"inline-":"")+"box$3$1"+te+"$2$3$1"+Ze+"$2box$3")+e}break;case 5936:switch(Ke(e,t+11)){case 114:return te+e+Ze+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return te+e+Ze+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return te+e+Ze+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return te+e+Ze+e+e}return e}var ky=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Sc:t.return=x0(t.value,t.length);break;case h0:return zr([xo(t,{value:ne(t.value,"@","@"+te)})],o);case yc:if(t.length)return fy(t.props,function(i){switch(py(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return zr([xo(t,{props:[ne(i,/:(read-\w+)/,":"+Rl+"$1")]})],o);case"::placeholder":return zr([xo(t,{props:[ne(i,/:(plac\w+)/,":"+te+"input-$1")]}),xo(t,{props:[ne(i,/:(plac\w+)/,":"+Rl+"$1")]}),xo(t,{props:[ne(i,/:(plac\w+)/,Ze+"input-$1")]})],o)}return""})}},wy=[ky],by=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var P=y.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||wy,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var P=y.getAttribute("data-emotion").split(" "),f=1;f<P.length;f++)i[P[f]]=!0;a.push(y)});var s,u=[Ey,Dy];{var m,p=[_y,My(function(y){m.insert(y)})],d=Ty(u.concat(o,p)),v=function(P){return zr(xy(P),d)};s=function(P,f,c,h){m=c,v(P?P+"{"+f.styles+"}":f.styles),h&&(g.inserted[f.name]=!0)}}var g={key:n,sheet:new ly({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return g.sheet.hydrate(a),g},C0={exports:{}},ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var We=typeof Symbol=="function"&&Symbol.for,xc=We?Symbol.for("react.element"):60103,Cc=We?Symbol.for("react.portal"):60106,da=We?Symbol.for("react.fragment"):60107,pa=We?Symbol.for("react.strict_mode"):60108,fa=We?Symbol.for("react.profiler"):60114,ma=We?Symbol.for("react.provider"):60109,ha=We?Symbol.for("react.context"):60110,_c=We?Symbol.for("react.async_mode"):60111,ga=We?Symbol.for("react.concurrent_mode"):60111,ya=We?Symbol.for("react.forward_ref"):60112,Sa=We?Symbol.for("react.suspense"):60113,By=We?Symbol.for("react.suspense_list"):60120,va=We?Symbol.for("react.memo"):60115,xa=We?Symbol.for("react.lazy"):60116,Oy=We?Symbol.for("react.block"):60121,Iy=We?Symbol.for("react.fundamental"):60117,Vy=We?Symbol.for("react.responder"):60118,Ny=We?Symbol.for("react.scope"):60119;function Mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case xc:switch(e=e.type,e){case _c:case ga:case da:case fa:case pa:case Sa:return e;default:switch(e=e&&e.$$typeof,e){case ha:case ya:case xa:case va:case ma:return e;default:return t}}case Cc:return t}}}function _0(e){return Mt(e)===ga}ae.AsyncMode=_c;ae.ConcurrentMode=ga;ae.ContextConsumer=ha;ae.ContextProvider=ma;ae.Element=xc;ae.ForwardRef=ya;ae.Fragment=da;ae.Lazy=xa;ae.Memo=va;ae.Portal=Cc;ae.Profiler=fa;ae.StrictMode=pa;ae.Suspense=Sa;ae.isAsyncMode=function(e){return _0(e)||Mt(e)===_c};ae.isConcurrentMode=_0;ae.isContextConsumer=function(e){return Mt(e)===ha};ae.isContextProvider=function(e){return Mt(e)===ma};ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xc};ae.isForwardRef=function(e){return Mt(e)===ya};ae.isFragment=function(e){return Mt(e)===da};ae.isLazy=function(e){return Mt(e)===xa};ae.isMemo=function(e){return Mt(e)===va};ae.isPortal=function(e){return Mt(e)===Cc};ae.isProfiler=function(e){return Mt(e)===fa};ae.isStrictMode=function(e){return Mt(e)===pa};ae.isSuspense=function(e){return Mt(e)===Sa};ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===da||e===ga||e===fa||e===pa||e===Sa||e===By||typeof e=="object"&&e!==null&&(e.$$typeof===xa||e.$$typeof===va||e.$$typeof===ma||e.$$typeof===ha||e.$$typeof===ya||e.$$typeof===Iy||e.$$typeof===Vy||e.$$typeof===Ny||e.$$typeof===Oy)};ae.typeOf=Mt;C0.exports=ae;var Ly=C0.exports,T0=Ly,Fy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},M0={};M0[T0.ForwardRef]=Fy;M0[T0.Memo]=jy;var $y=!0;function Hy(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var P0=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||$y===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},R0=function(t,n,r){P0(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Wy(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var zy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gy=/[A-Z]|^ms/g,Uy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,A0=function(t){return t.charCodeAt(1)===45},lp=function(t){return t!=null&&typeof t!="boolean"},ds=f0(function(e){return A0(e)?e:e.replace(Gy,"-$&").toLowerCase()}),ap=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Uy,function(r,o,i){return qt={name:o,styles:i,next:qt},o})}return zy[t]!==1&&!A0(t)&&typeof n=="number"&&n!==0?n+"px":n};function ui(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return qt={name:n.name,styles:n.styles,next:qt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)qt={name:r.name,styles:r.styles,next:qt},r=r.next;var o=n.styles+";";return o}return Ky(e,t,n)}case"function":{if(e!==void 0){var i=qt,l=n(e);return qt=i,ui(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Ky(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=ui(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":lp(l)&&(r+=ds(i)+":"+ap(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)lp(l[a])&&(r+=ds(i)+":"+ap(i,l[a])+";");else{var s=ui(e,t,l);switch(i){case"animation":case"animationName":{r+=ds(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var sp=/label:\s*([^\s;\n{]+)\s*(;|$)/g,qt,Tc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";qt=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=ui(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=ui(r,n,t[a]),o&&(i+=l[a]);sp.lastIndex=0;for(var s="",u;(u=sp.exec(i))!==null;)s+="-"+u[1];var m=Wy(i)+s;return{name:m,styles:i,next:qt}},Yy=function(t){return t()},E0=ys["useInsertionEffect"]?ys["useInsertionEffect"]:!1,Qy=E0||Yy,up=E0||x.useLayoutEffect,D0=x.createContext(typeof HTMLElement<"u"?by({key:"css"}):null);D0.Provider;var k0=function(t){return x.forwardRef(function(n,r){var o=x.useContext(D0);return t(n,o,r)})},Ca=x.createContext({}),Xy=k0(function(e,t){var n=e.styles,r=Tc([n],void 0,x.useContext(Ca)),o=x.useRef();return up(function(){var i=t.key+"-global",l=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,s=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(l.before=t.sheet.tags[0]),s!==null&&(a=!0,s.setAttribute("data-emotion",i),l.hydrate([s])),o.current=[l,a],function(){l.flush()}},[t]),up(function(){var i=o.current,l=i[0],a=i[1];if(a){i[1]=!1;return}if(r.next!==void 0&&R0(t,r.next,!0),l.tags.length){var s=l.tags[l.tags.length-1].nextElementSibling;l.before=s,l.flush()}t.insert("",r,l,!1)},[t,r.name]),null});function qy(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Tc(t)}var Mc=function(){var t=qy.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Zy=ry,Jy=function(t){return t!=="theme"},cp=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Zy:Jy},dp=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(l){return t.__emotion_forwardProp(l)&&i(l)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},eS=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return P0(n,r,o),Qy(function(){return R0(n,r,o)}),null},tS=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,l;n!==void 0&&(i=n.label,l=n.target);var a=dp(t,n,r),s=a||cp(o),u=!s("as");return function(){var m=arguments,p=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&p.push("label:"+i+";"),m[0]==null||m[0].raw===void 0)p.push.apply(p,m);else{p.push(m[0][0]);for(var d=m.length,v=1;v<d;v++)p.push(m[v],m[0][v])}var g=k0(function(y,P,f){var c=u&&y.as||o,h="",S=[],M=y;if(y.theme==null){M={};for(var R in y)M[R]=y[R];M.theme=x.useContext(Ca)}typeof y.className=="string"?h=Hy(P.registered,S,y.className):y.className!=null&&(h=y.className+" ");var T=Tc(p.concat(S),P.registered,M);h+=P.key+"-"+T.name,l!==void 0&&(h+=" "+l);var D=u&&a===void 0?cp(c):s,w={};for(var A in y)u&&A==="as"||D(A)&&(w[A]=y[A]);return w.className=h,w.ref=f,x.createElement(x.Fragment,null,x.createElement(eS,{cache:P,serialized:T,isStringTag:typeof c=="string"}),x.createElement(c,w))});return g.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=o,g.__emotion_styles=p,g.__emotion_forwardProp=a,Object.defineProperty(g,"toString",{value:function(){return"."+l}}),g.withComponent=function(y,P){return e(y,_({},n,P,{shouldForwardProp:dp(g,P,!0)})).apply(void 0,p)},g}},nS=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],hu=tS.bind();nS.forEach(function(e){hu[e]=hu(e)});function rS(e){return e==null||Object.keys(e).length===0}function oS(e){const{styles:t,defaultTheme:n={}}=e,r=typeof t=="function"?o=>t(rS(o)?n:o):t;return C.jsx(Xy,{styles:r})}/**
 * @mui/styled-engine v5.14.13
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function iS(e,t){return hu(e,t)}const lS=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},aS=["values","unit","step"],sS=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>_({},n,{[r.key]:r.val}),{})};function uS(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=G(e,aS),i=sS(t),l=Object.keys(i);function a(d){return`@media (min-width:${typeof t[d]=="number"?t[d]:d}${n})`}function s(d){return`@media (max-width:${(typeof t[d]=="number"?t[d]:d)-r/100}${n})`}function u(d,v){const g=l.indexOf(v);return`@media (min-width:${typeof t[d]=="number"?t[d]:d}${n}) and (max-width:${(g!==-1&&typeof t[l[g]]=="number"?t[l[g]]:v)-r/100}${n})`}function m(d){return l.indexOf(d)+1<l.length?u(d,l[l.indexOf(d)+1]):a(d)}function p(d){const v=l.indexOf(d);return v===0?a(l[1]):v===l.length-1?s(l[v]):u(d,l[l.indexOf(d)+1]).replace("@media","@media not all and")}return _({keys:l,values:i,up:a,down:s,between:u,only:m,not:p,unit:n},o)}const cS={borderRadius:4},dS=cS;function Fo(e,t){return t?ft(e,t,{clone:!1}):e}const Pc={xs:0,sm:600,md:900,lg:1200,xl:1536},pp={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Pc[e]}px)`};function yn(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||pp;return t.reduce((l,a,s)=>(l[i.up(i.keys[s])]=n(t[s]),l),{})}if(typeof t=="object"){const i=r.breakpoints||pp;return Object.keys(t).reduce((l,a)=>{if(Object.keys(i.values||Pc).indexOf(a)!==-1){const s=i.up(a);l[s]=n(t[a],a)}else{const s=a;l[s]=t[s]}return l},{})}return n(t)}function pS(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const i=e.up(o);return r[i]={},r},{}))||{}}function fS(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function _a(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function Al(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=_a(e,n)||r,t&&(o=t(o,r,e)),o}function oe(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=l=>{if(l[t]==null)return null;const a=l[t],s=l.theme,u=_a(s,r)||{};return yn(l,a,p=>{let d=Al(u,o,p);return p===d&&typeof p=="string"&&(d=Al(u,o,`${t}${p==="default"?"":ge(p)}`,p)),n===!1?d:{[n]:d}})};return i.propTypes={},i.filterProps=[t],i}function mS(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const hS={m:"margin",p:"padding"},gS={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},fp={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},yS=mS(e=>{if(e.length>2)if(fp[e])e=fp[e];else return[e];const[t,n]=e.split(""),r=hS[t],o=gS[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),Rc=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Ac=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Rc,...Ac];function gi(e,t,n,r){var o;const i=(o=_a(e,t,!1))!=null?o:n;return typeof i=="number"?l=>typeof l=="string"?l:i*l:Array.isArray(i)?l=>typeof l=="string"?l:i[l]:typeof i=="function"?i:()=>{}}function w0(e){return gi(e,"spacing",8)}function yi(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function SS(e,t){return n=>e.reduce((r,o)=>(r[o]=yi(t,n),r),{})}function vS(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=yS(n),i=SS(o,r),l=e[n];return yn(e,l,i)}function b0(e,t){const n=w0(e.theme);return Object.keys(e).map(r=>vS(e,t,r,n)).reduce(Fo,{})}function Ee(e){return b0(e,Rc)}Ee.propTypes={};Ee.filterProps=Rc;function De(e){return b0(e,Ac)}De.propTypes={};De.filterProps=Ac;function xS(e=8){if(e.mui)return e;const t=w0({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const l=t(i);return typeof l=="number"?`${l}px`:l}).join(" ");return n.mui=!0,n}function Ta(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>t[i]?Fo(o,t[i](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function Jt(e){return typeof e!="number"?e:`${e}px solid`}const CS=oe({prop:"border",themeKey:"borders",transform:Jt}),_S=oe({prop:"borderTop",themeKey:"borders",transform:Jt}),TS=oe({prop:"borderRight",themeKey:"borders",transform:Jt}),MS=oe({prop:"borderBottom",themeKey:"borders",transform:Jt}),PS=oe({prop:"borderLeft",themeKey:"borders",transform:Jt}),RS=oe({prop:"borderColor",themeKey:"palette"}),AS=oe({prop:"borderTopColor",themeKey:"palette"}),ES=oe({prop:"borderRightColor",themeKey:"palette"}),DS=oe({prop:"borderBottomColor",themeKey:"palette"}),kS=oe({prop:"borderLeftColor",themeKey:"palette"}),Ma=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=gi(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:yi(t,r)});return yn(e,e.borderRadius,n)}return null};Ma.propTypes={};Ma.filterProps=["borderRadius"];Ta(CS,_S,TS,MS,PS,RS,AS,ES,DS,kS,Ma);const Pa=e=>{if(e.gap!==void 0&&e.gap!==null){const t=gi(e.theme,"spacing",8),n=r=>({gap:yi(t,r)});return yn(e,e.gap,n)}return null};Pa.propTypes={};Pa.filterProps=["gap"];const Ra=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=gi(e.theme,"spacing",8),n=r=>({columnGap:yi(t,r)});return yn(e,e.columnGap,n)}return null};Ra.propTypes={};Ra.filterProps=["columnGap"];const Aa=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=gi(e.theme,"spacing",8),n=r=>({rowGap:yi(t,r)});return yn(e,e.rowGap,n)}return null};Aa.propTypes={};Aa.filterProps=["rowGap"];const wS=oe({prop:"gridColumn"}),bS=oe({prop:"gridRow"}),BS=oe({prop:"gridAutoFlow"}),OS=oe({prop:"gridAutoColumns"}),IS=oe({prop:"gridAutoRows"}),VS=oe({prop:"gridTemplateColumns"}),NS=oe({prop:"gridTemplateRows"}),LS=oe({prop:"gridTemplateAreas"}),FS=oe({prop:"gridArea"});Ta(Pa,Ra,Aa,wS,bS,BS,OS,IS,VS,NS,LS,FS);function Gr(e,t){return t==="grey"?t:e}const jS=oe({prop:"color",themeKey:"palette",transform:Gr}),$S=oe({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Gr}),HS=oe({prop:"backgroundColor",themeKey:"palette",transform:Gr});Ta(jS,$S,HS);function gt(e){return e<=1&&e!==0?`${e*100}%`:e}const WS=oe({prop:"width",transform:gt}),Ec=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const i=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||Pc[n];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:gt(n)}};return yn(e,e.maxWidth,t)}return null};Ec.filterProps=["maxWidth"];const zS=oe({prop:"minWidth",transform:gt}),GS=oe({prop:"height",transform:gt}),US=oe({prop:"maxHeight",transform:gt}),KS=oe({prop:"minHeight",transform:gt});oe({prop:"size",cssProperty:"width",transform:gt});oe({prop:"size",cssProperty:"height",transform:gt});const YS=oe({prop:"boxSizing"});Ta(WS,Ec,zS,GS,US,KS,YS);const QS={border:{themeKey:"borders",transform:Jt},borderTop:{themeKey:"borders",transform:Jt},borderRight:{themeKey:"borders",transform:Jt},borderBottom:{themeKey:"borders",transform:Jt},borderLeft:{themeKey:"borders",transform:Jt},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ma},color:{themeKey:"palette",transform:Gr},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Gr},backgroundColor:{themeKey:"palette",transform:Gr},p:{style:De},pt:{style:De},pr:{style:De},pb:{style:De},pl:{style:De},px:{style:De},py:{style:De},padding:{style:De},paddingTop:{style:De},paddingRight:{style:De},paddingBottom:{style:De},paddingLeft:{style:De},paddingX:{style:De},paddingY:{style:De},paddingInline:{style:De},paddingInlineStart:{style:De},paddingInlineEnd:{style:De},paddingBlock:{style:De},paddingBlockStart:{style:De},paddingBlockEnd:{style:De},m:{style:Ee},mt:{style:Ee},mr:{style:Ee},mb:{style:Ee},ml:{style:Ee},mx:{style:Ee},my:{style:Ee},margin:{style:Ee},marginTop:{style:Ee},marginRight:{style:Ee},marginBottom:{style:Ee},marginLeft:{style:Ee},marginX:{style:Ee},marginY:{style:Ee},marginInline:{style:Ee},marginInlineStart:{style:Ee},marginInlineEnd:{style:Ee},marginBlock:{style:Ee},marginBlockStart:{style:Ee},marginBlockEnd:{style:Ee},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Pa},rowGap:{style:Aa},columnGap:{style:Ra},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:gt},maxWidth:{style:Ec},minWidth:{transform:gt},height:{transform:gt},maxHeight:{transform:gt},minHeight:{transform:gt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Ea=QS;function XS(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function qS(e,t){return typeof e=="function"?e(t):e}function ZS(){function e(n,r,o,i){const l={[n]:r,theme:o},a=i[n];if(!a)return{[n]:r};const{cssProperty:s=n,themeKey:u,transform:m,style:p}=a;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const d=_a(o,u)||{};return p?p(l):yn(l,r,g=>{let y=Al(d,m,g);return g===y&&typeof g=="string"&&(y=Al(d,m,`${n}${g==="default"?"":ge(g)}`,g)),s===!1?y:{[s]:y}})}function t(n){var r;const{sx:o,theme:i={}}=n||{};if(!o)return null;const l=(r=i.unstable_sxConfig)!=null?r:Ea;function a(s){let u=s;if(typeof s=="function")u=s(i);else if(typeof s!="object")return s;if(!u)return null;const m=pS(i.breakpoints),p=Object.keys(m);let d=m;return Object.keys(u).forEach(v=>{const g=qS(u[v],i);if(g!=null)if(typeof g=="object")if(l[v])d=Fo(d,e(v,g,i,l));else{const y=yn({theme:i},g,P=>({[v]:P}));XS(y,g)?d[v]=t({sx:g,theme:i}):d=Fo(d,y)}else d=Fo(d,e(v,g,i,l))}),fS(p,d)}return Array.isArray(o)?o.map(a):a(o)}return t}const B0=ZS();B0.filterProps=["sx"];const Dc=B0,JS=["breakpoints","palette","spacing","shape"];function Da(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=e,l=G(e,JS),a=uS(n),s=xS(o);let u=ft({breakpoints:a,direction:"ltr",components:{},palette:_({mode:"light"},r),spacing:s,shape:_({},dS,i)},l);return u=t.reduce((m,p)=>ft(m,p),u),u.unstable_sxConfig=_({},Ea,l==null?void 0:l.unstable_sxConfig),u.unstable_sx=function(p){return Dc({sx:p,theme:this})},u}function ev(e){return Object.keys(e).length===0}function O0(e=null){const t=x.useContext(Ca);return!t||ev(t)?e:t}const tv=Da();function kc(e=tv){return O0(e)}function nv({styles:e,themeId:t,defaultTheme:n={}}){const r=kc(n),o=typeof e=="function"?e(t&&r[t]||r):e;return C.jsx(oS,{styles:o})}const rv=["sx"],ov=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:Ea;return Object.keys(e).forEach(i=>{o[i]?r.systemProps[i]=e[i]:r.otherProps[i]=e[i]}),r};function iv(e){const{sx:t}=e,n=G(e,rv),{systemProps:r,otherProps:o}=ov(n);let i;return Array.isArray(t)?i=[r,...t]:typeof t=="function"?i=(...l)=>{const a=t(...l);return un(a)?_({},r,a):r}:i=_({},r,t),_({},o,{sx:i})}function I0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=I0(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function J(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=I0(e))&&(r&&(r+=" "),r+=t);return r}const lv=["variant"];function mp(e){return e.length===0}function V0(e){const{variant:t}=e,n=G(e,lv);let r=t||"";return Object.keys(n).sort().forEach(o=>{o==="color"?r+=mp(r)?e[o]:ge(e[o]):r+=`${mp(r)?o:ge(o)}${ge(e[o].toString())}`}),r}const av=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function sv(e){return Object.keys(e).length===0}function uv(e){return typeof e=="string"&&e.charCodeAt(0)>96}const cv=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,El=e=>{const t={};return e&&e.forEach(n=>{const r=V0(n.props);t[r]=n.style}),t},dv=(e,t)=>{let n=[];return t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants),El(n)},Dl=(e,t,n)=>{const{ownerState:r={}}=e,o=[];return n&&n.forEach(i=>{let l=!0;Object.keys(i.props).forEach(a=>{r[a]!==i.props[a]&&e[a]!==i.props[a]&&(l=!1)}),l&&o.push(t[V0(i.props)])}),o},pv=(e,t,n,r)=>{var o;const i=n==null||(o=n.components)==null||(o=o[r])==null?void 0:o.variants;return Dl(e,t,i)};function jo(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const fv=Da(),mv=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function tl({defaultTheme:e,theme:t,themeId:n}){return sv(t)?e:t[n]||t}function hv(e){return e?(t,n)=>n[e]:null}const hp=({styledArg:e,props:t,defaultTheme:n,themeId:r})=>{const o=e(_({},t,{theme:tl(_({},t,{defaultTheme:n,themeId:r}))}));let i;if(o&&o.variants&&(i=o.variants,delete o.variants),i){const l=Dl(t,El(i),i);return[o,...l]}return o};function N0(e={}){const{themeId:t,defaultTheme:n=fv,rootShouldForwardProp:r=jo,slotShouldForwardProp:o=jo}=e,i=l=>Dc(_({},l,{theme:tl(_({},l,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,(l,a={})=>{lS(l,S=>S.filter(M=>!(M!=null&&M.__mui_systemSx)));const{name:s,slot:u,skipVariantsResolver:m,skipSx:p,overridesResolver:d=hv(mv(u))}=a,v=G(a,av),g=m!==void 0?m:u&&u!=="Root"&&u!=="root"||!1,y=p||!1;let P,f=jo;u==="Root"||u==="root"?f=r:u?f=o:uv(l)&&(f=void 0);const c=iS(l,_({shouldForwardProp:f,label:P},v)),h=(S,...M)=>{const R=M?M.map(A=>{if(typeof A=="function"&&A.__emotion_real!==A)return I=>hp({styledArg:A,props:I,defaultTheme:n,themeId:t});if(un(A)){let I=A,F;return A&&A.variants&&(F=A.variants,delete I.variants,I=V=>{let B=A;return Dl(V,El(F),F).forEach(j=>{B=ft(B,j)}),B}),I}return A}):[];let T=S;if(un(S)){let A;S&&S.variants&&(A=S.variants,delete T.variants,T=I=>{let F=S;return Dl(I,El(A),A).forEach(B=>{F=ft(F,B)}),F})}else typeof S=="function"&&S.__emotion_real!==S&&(T=A=>hp({styledArg:S,props:A,defaultTheme:n,themeId:t}));s&&d&&R.push(A=>{const I=tl(_({},A,{defaultTheme:n,themeId:t})),F=cv(s,I);if(F){const V={};return Object.entries(F).forEach(([B,O])=>{V[B]=typeof O=="function"?O(_({},A,{theme:I})):O}),d(A,V)}return null}),s&&!g&&R.push(A=>{const I=tl(_({},A,{defaultTheme:n,themeId:t}));return pv(A,dv(s,I),I,s)}),y||R.push(i);const D=R.length-M.length;if(Array.isArray(S)&&D>0){const A=new Array(D).fill("");T=[...S,...A],T.raw=[...S.raw,...A]}const w=c(T,...R);return l.muiName&&(w.muiName=l.muiName),w};return c.withConfig&&(h.withConfig=c.withConfig),h}}const gv=N0(),yv=gv;function Sv(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:p0(t.components[n].defaultProps,r)}function L0({props:e,name:t,defaultTheme:n,themeId:r}){let o=kc(n);return r&&(o=o[r]||o),Sv({theme:o,name:t,props:e})}function wc(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function vv(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function pr(e){if(e.type)return e;if(e.charAt(0)==="#")return pr(vv(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Hn(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error(Hn(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}function ka(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function xv(e){e=pr(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),l=(u,m=(u+n/30)%12)=>o-i*Math.max(Math.min(m-3,9-m,1),-1);let a="rgb";const s=[Math.round(l(0)*255),Math.round(l(8)*255),Math.round(l(4)*255)];return e.type==="hsla"&&(a+="a",s.push(t[3])),ka({type:a,values:s})}function gp(e){e=pr(e);let t=e.type==="hsl"||e.type==="hsla"?pr(xv(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Cv(e,t){const n=gp(e),r=gp(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Nr(e,t){return e=pr(e),t=wc(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,ka(e)}function _v(e,t){if(e=pr(e),t=wc(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return ka(e)}function Tv(e,t){if(e=pr(e),t=wc(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return ka(e)}const Mv=x.createContext(null),F0=Mv;function j0(){return x.useContext(F0)}const Pv=typeof Symbol=="function"&&Symbol.for,Rv=Pv?Symbol.for("mui.nested"):"__THEME_NESTED__";function Av(e,t){return typeof t=="function"?t(e):_({},e,t)}function Ev(e){const{children:t,theme:n}=e,r=j0(),o=x.useMemo(()=>{const i=r===null?n:Av(r,n);return i!=null&&(i[Rv]=r!==null),i},[n,r]);return C.jsx(F0.Provider,{value:o,children:t})}const yp={};function Sp(e,t,n,r=!1){return x.useMemo(()=>{const o=e&&t[e]||t;if(typeof n=="function"){const i=n(o),l=e?_({},t,{[e]:i}):i;return r?()=>l:l}return e?_({},t,{[e]:n}):_({},t,n)},[e,t,n,r])}function Dv(e){const{children:t,theme:n,themeId:r}=e,o=O0(yp),i=j0()||yp,l=Sp(r,o,n),a=Sp(r,i,n,!0);return C.jsx(Ev,{theme:a,children:C.jsx(Ca.Provider,{value:l,children:t})})}const kv=["className","component","disableGutters","fixed","maxWidth","classes"],wv=Da(),bv=yv("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${ge(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),Bv=e=>L0({props:e,name:"MuiContainer",defaultTheme:wv}),Ov=(e,t)=>{const n=s=>Oe(t,s),{classes:r,fixed:o,disableGutters:i,maxWidth:l}=e,a={root:["root",l&&`maxWidth${ge(String(l))}`,o&&"fixed",i&&"disableGutters"]};return Le(a,n,r)};function Iv(e={}){const{createStyledComponent:t=bv,useThemeProps:n=Bv,componentName:r="MuiContainer"}=e,o=t(({theme:l,ownerState:a})=>_({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:l.spacing(2),paddingRight:l.spacing(2),[l.breakpoints.up("sm")]:{paddingLeft:l.spacing(3),paddingRight:l.spacing(3)}}),({theme:l,ownerState:a})=>a.fixed&&Object.keys(l.breakpoints.values).reduce((s,u)=>{const m=u,p=l.breakpoints.values[m];return p!==0&&(s[l.breakpoints.up(m)]={maxWidth:`${p}${l.breakpoints.unit}`}),s},{}),({theme:l,ownerState:a})=>_({},a.maxWidth==="xs"&&{[l.breakpoints.up("xs")]:{maxWidth:Math.max(l.breakpoints.values.xs,444)}},a.maxWidth&&a.maxWidth!=="xs"&&{[l.breakpoints.up(a.maxWidth)]:{maxWidth:`${l.breakpoints.values[a.maxWidth]}${l.breakpoints.unit}`}}));return x.forwardRef(function(a,s){const u=n(a),{className:m,component:p="div",disableGutters:d=!1,fixed:v=!1,maxWidth:g="lg"}=u,y=G(u,kv),P=_({},u,{component:p,disableGutters:d,fixed:v,maxWidth:g}),f=Ov(P,r);return C.jsx(o,_({as:p,ownerState:P,className:J(f.root,m),ref:s},y))})}function Vv(e,t){return _({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const Nv=["mode","contrastThreshold","tonalOffset"],vp={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:li.white,default:li.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},ps={text:{primary:li.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:li.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function xp(e,t,n,r){const o=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Tv(e.main,o):t==="dark"&&(e.dark=_v(e.main,i)))}function Lv(e="light"){return e==="dark"?{main:vr[200],light:vr[50],dark:vr[400]}:{main:vr[700],light:vr[400],dark:vr[800]}}function Fv(e="light"){return e==="dark"?{main:Sr[200],light:Sr[50],dark:Sr[400]}:{main:Sr[500],light:Sr[300],dark:Sr[700]}}function jv(e="light"){return e==="dark"?{main:yr[500],light:yr[300],dark:yr[700]}:{main:yr[700],light:yr[400],dark:yr[800]}}function $v(e="light"){return e==="dark"?{main:xr[400],light:xr[300],dark:xr[700]}:{main:xr[700],light:xr[500],dark:xr[900]}}function Hv(e="light"){return e==="dark"?{main:Cr[400],light:Cr[300],dark:Cr[700]}:{main:Cr[800],light:Cr[500],dark:Cr[900]}}function Wv(e="light"){return e==="dark"?{main:vo[400],light:vo[300],dark:vo[700]}:{main:"#ed6c02",light:vo[500],dark:vo[900]}}function zv(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=G(e,Nv),i=e.primary||Lv(t),l=e.secondary||Fv(t),a=e.error||jv(t),s=e.info||$v(t),u=e.success||Hv(t),m=e.warning||Wv(t);function p(y){return Cv(y,ps.text.primary)>=n?ps.text.primary:vp.text.primary}const d=({color:y,name:P,mainShade:f=500,lightShade:c=300,darkShade:h=700})=>{if(y=_({},y),!y.main&&y[f]&&(y.main=y[f]),!y.hasOwnProperty("main"))throw new Error(Hn(11,P?` (${P})`:"",f));if(typeof y.main!="string")throw new Error(Hn(12,P?` (${P})`:"",JSON.stringify(y.main)));return xp(y,"light",c,r),xp(y,"dark",h,r),y.contrastText||(y.contrastText=p(y.main)),y},v={dark:ps,light:vp};return ft(_({common:_({},li),mode:t,primary:d({color:i,name:"primary"}),secondary:d({color:l,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:m,name:"warning"}),info:d({color:s,name:"info"}),success:d({color:u,name:"success"}),grey:F1,contrastThreshold:n,getContrastText:p,augmentColor:d,tonalOffset:r},v[t]),o)}const Gv=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Uv(e){return Math.round(e*1e5)/1e5}const Cp={textTransform:"uppercase"},_p='"Roboto", "Helvetica", "Arial", sans-serif';function Kv(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=_p,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:l=400,fontWeightMedium:a=500,fontWeightBold:s=700,htmlFontSize:u=16,allVariants:m,pxToRem:p}=n,d=G(n,Gv),v=o/14,g=p||(f=>`${f/u*v}rem`),y=(f,c,h,S,M)=>_({fontFamily:r,fontWeight:f,fontSize:g(c),lineHeight:h},r===_p?{letterSpacing:`${Uv(S/c)}em`}:{},M,m),P={h1:y(i,96,1.167,-1.5),h2:y(i,60,1.2,-.5),h3:y(l,48,1.167,0),h4:y(l,34,1.235,.25),h5:y(l,24,1.334,0),h6:y(a,20,1.6,.15),subtitle1:y(l,16,1.75,.15),subtitle2:y(a,14,1.57,.1),body1:y(l,16,1.5,.15),body2:y(l,14,1.43,.15),button:y(a,14,1.75,.4,Cp),caption:y(l,12,1.66,.4),overline:y(l,12,2.66,1,Cp),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return ft(_({htmlFontSize:u,pxToRem:g,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:l,fontWeightMedium:a,fontWeightBold:s},P),d,{clone:!1})}const Yv=.2,Qv=.14,Xv=.12;function xe(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Yv})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Qv})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Xv})`].join(",")}const qv=["none",xe(0,2,1,-1,0,1,1,0,0,1,3,0),xe(0,3,1,-2,0,2,2,0,0,1,5,0),xe(0,3,3,-2,0,3,4,0,0,1,8,0),xe(0,2,4,-1,0,4,5,0,0,1,10,0),xe(0,3,5,-1,0,5,8,0,0,1,14,0),xe(0,3,5,-1,0,6,10,0,0,1,18,0),xe(0,4,5,-2,0,7,10,1,0,2,16,1),xe(0,5,5,-3,0,8,10,1,0,3,14,2),xe(0,5,6,-3,0,9,12,1,0,3,16,2),xe(0,6,6,-3,0,10,14,1,0,4,18,3),xe(0,6,7,-4,0,11,15,1,0,4,20,3),xe(0,7,8,-4,0,12,17,2,0,5,22,4),xe(0,7,8,-4,0,13,19,2,0,5,24,4),xe(0,7,9,-4,0,14,21,2,0,5,26,4),xe(0,8,9,-5,0,15,22,2,0,6,28,5),xe(0,8,10,-5,0,16,24,2,0,6,30,5),xe(0,8,11,-5,0,17,26,2,0,6,32,5),xe(0,9,11,-5,0,18,28,2,0,7,34,6),xe(0,9,12,-6,0,19,29,2,0,7,36,6),xe(0,10,13,-6,0,20,31,3,0,8,38,7),xe(0,10,13,-6,0,21,33,3,0,8,40,7),xe(0,10,14,-6,0,22,35,3,0,8,42,7),xe(0,11,14,-7,0,23,36,3,0,9,44,8),xe(0,11,15,-7,0,24,38,3,0,9,46,8)],Zv=qv,Jv=["duration","easing","delay"],ex={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},tx={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Tp(e){return`${Math.round(e)}ms`}function nx(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function rx(e){const t=_({},ex,e.easing),n=_({},tx,e.duration);return _({getAutoHeightDuration:nx,create:(o=["all"],i={})=>{const{duration:l=n.standard,easing:a=t.easeInOut,delay:s=0}=i;return G(i,Jv),(Array.isArray(o)?o:[o]).map(u=>`${u} ${typeof l=="string"?l:Tp(l)} ${a} ${typeof s=="string"?s:Tp(s)}`).join(",")}},e,{easing:t,duration:n})}const ox={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},ix=ox,lx=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function $0(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=e,l=G(e,lx);if(e.vars)throw new Error(Hn(18));const a=zv(r),s=Da(e);let u=ft(s,{mixins:Vv(s.breakpoints,n),palette:a,shadows:Zv.slice(),typography:Kv(a,i),transitions:rx(o),zIndex:_({},ix)});return u=ft(u,l),u=t.reduce((m,p)=>ft(m,p),u),u.unstable_sxConfig=_({},Ea,l==null?void 0:l.unstable_sxConfig),u.unstable_sx=function(p){return Dc({sx:p,theme:this})},u}const ax=$0(),wa=ax;function bc(){const e=kc(wa);return e[Jr]||e}function Ie({props:e,name:t}){return L0({props:e,name:t,defaultTheme:wa,themeId:Jr})}const xn=e=>jo(e)&&e!=="classes",sx=jo,ux=N0({themeId:Jr,defaultTheme:wa,rootShouldForwardProp:xn}),U=ux,cx=["theme"];function dx(e){let{theme:t}=e,n=G(e,cx);const r=t[Jr];return C.jsx(Dv,_({},n,{themeId:r?Jr:void 0,theme:r||t}))}const px=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Mp=px;function fx(e){return Oe("MuiSvgIcon",e)}Ae("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const mx=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],hx=e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root",t!=="inherit"&&`color${ge(t)}`,`fontSize${ge(n)}`]};return Le(o,fx,r)},gx=U("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${ge(n.color)}`],t[`fontSize${ge(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,o,i,l,a,s,u,m,p,d,v,g;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((i=e.typography)==null||(l=i.pxToRem)==null?void 0:l.call(i,20))||"1.25rem",medium:((a=e.typography)==null||(s=a.pxToRem)==null?void 0:s.call(a,24))||"1.5rem",large:((u=e.typography)==null||(m=u.pxToRem)==null?void 0:m.call(u,35))||"2.1875rem"}[t.fontSize],color:(p=(d=(e.vars||e).palette)==null||(d=d[t.color])==null?void 0:d.main)!=null?p:{action:(v=(e.vars||e).palette)==null||(v=v.action)==null?void 0:v.active,disabled:(g=(e.vars||e).palette)==null||(g=g.action)==null?void 0:g.disabled,inherit:void 0}[t.color]}}),H0=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiSvgIcon"}),{children:o,className:i,color:l="inherit",component:a="svg",fontSize:s="medium",htmlColor:u,inheritViewBox:m=!1,titleAccess:p,viewBox:d="0 0 24 24"}=r,v=G(r,mx),g=x.isValidElement(o)&&o.type==="svg",y=_({},r,{color:l,component:a,fontSize:s,instanceFontSize:t.fontSize,inheritViewBox:m,viewBox:d,hasSvgAsChild:g}),P={};m||(P.viewBox=d);const f=hx(y);return C.jsxs(gx,_({as:a,className:J(f.root,i),focusable:"false",color:u,"aria-hidden":p?void 0:!0,role:p?"img":void 0,ref:n},P,v,g&&o.props,{ownerState:y,children:[g?o.props.children:o,p?C.jsx("title",{children:p}):null]}))});H0.muiName="SvgIcon";const Pp=H0;function yx(e,t){function n(r,o){return C.jsx(Pp,_({"data-testid":`${t}Icon`,ref:o},r,{children:e}))}return n.muiName=Pp.muiName,x.memo(x.forwardRef(n))}function gu(e,t){return gu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},gu(e,t)}function W0(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,gu(e,t)}const Rp={disabled:!1},kl=Wt.createContext(null);var Sx=function(t){return t.scrollTop},Do="unmounted",qn="exited",Zn="entering",Tr="entered",yu="exiting",Cn=function(e){W0(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var l=o,a=l&&!l.isMounting?r.enter:r.appear,s;return i.appearStatus=null,r.in?a?(s=qn,i.appearStatus=Zn):s=Tr:r.unmountOnExit||r.mountOnEnter?s=Do:s=qn,i.state={status:s},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var l=o.in;return l&&i.status===Do?{status:qn}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var l=this.state.status;this.props.in?l!==Zn&&l!==Tr&&(i=Zn):(l===Zn||l===Tr)&&(i=yu)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,l,a;return i=l=a=o,o!=null&&typeof o!="number"&&(i=o.exit,l=o.enter,a=o.appear!==void 0?o.appear:l),{exit:i,enter:l,appear:a}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===Zn){if(this.props.unmountOnExit||this.props.mountOnEnter){var l=this.props.nodeRef?this.props.nodeRef.current:Ni.findDOMNode(this);l&&Sx(l)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===qn&&this.setState({status:Do})},n.performEnter=function(o){var i=this,l=this.props.enter,a=this.context?this.context.isMounting:o,s=this.props.nodeRef?[a]:[Ni.findDOMNode(this),a],u=s[0],m=s[1],p=this.getTimeouts(),d=a?p.appear:p.enter;if(!o&&!l||Rp.disabled){this.safeSetState({status:Tr},function(){i.props.onEntered(u)});return}this.props.onEnter(u,m),this.safeSetState({status:Zn},function(){i.props.onEntering(u,m),i.onTransitionEnd(d,function(){i.safeSetState({status:Tr},function(){i.props.onEntered(u,m)})})})},n.performExit=function(){var o=this,i=this.props.exit,l=this.getTimeouts(),a=this.props.nodeRef?void 0:Ni.findDOMNode(this);if(!i||Rp.disabled){this.safeSetState({status:qn},function(){o.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:yu},function(){o.props.onExiting(a),o.onTransitionEnd(l.exit,function(){o.safeSetState({status:qn},function(){o.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,l=!0;return this.nextCallback=function(a){l&&(l=!1,i.nextCallback=null,o(a))},this.nextCallback.cancel=function(){l=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var l=this.props.nodeRef?this.props.nodeRef.current:Ni.findDOMNode(this),a=o==null&&!this.props.addEndListener;if(!l||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[l,this.nextCallback],u=s[0],m=s[1];this.props.addEndListener(u,m)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===Do)return null;var i=this.props,l=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var a=G(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Wt.createElement(kl.Provider,{value:null},typeof l=="function"?l(o,a):Wt.cloneElement(Wt.Children.only(l),a))},t}(Wt.Component);Cn.contextType=kl;Cn.propTypes={};function _r(){}Cn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:_r,onEntering:_r,onEntered:_r,onExit:_r,onExiting:_r,onExited:_r};Cn.UNMOUNTED=Do;Cn.EXITED=qn;Cn.ENTERING=Zn;Cn.ENTERED=Tr;Cn.EXITING=yu;const z0=Cn;function vx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Bc(e,t){var n=function(i){return t&&x.isValidElement(i)?t(i):i},r=Object.create(null);return e&&x.Children.map(e,function(o){return o}).forEach(function(o){r[o.key]=n(o)}),r}function xx(e,t){e=e||{},t=t||{};function n(m){return m in t?t[m]:e[m]}var r=Object.create(null),o=[];for(var i in e)i in t?o.length&&(r[i]=o,o=[]):o.push(i);var l,a={};for(var s in t){if(r[s])for(l=0;l<r[s].length;l++){var u=r[s][l];a[r[s][l]]=n(u)}a[s]=n(s)}for(l=0;l<o.length;l++)a[o[l]]=n(o[l]);return a}function nr(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Cx(e,t){return Bc(e.children,function(n){return x.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:nr(n,"appear",e),enter:nr(n,"enter",e),exit:nr(n,"exit",e)})})}function _x(e,t,n){var r=Bc(e.children),o=xx(t,r);return Object.keys(o).forEach(function(i){var l=o[i];if(x.isValidElement(l)){var a=i in t,s=i in r,u=t[i],m=x.isValidElement(u)&&!u.props.in;s&&(!a||m)?o[i]=x.cloneElement(l,{onExited:n.bind(null,l),in:!0,exit:nr(l,"exit",e),enter:nr(l,"enter",e)}):!s&&a&&!m?o[i]=x.cloneElement(l,{in:!1}):s&&a&&x.isValidElement(u)&&(o[i]=x.cloneElement(l,{onExited:n.bind(null,l),in:u.props.in,exit:nr(l,"exit",e),enter:nr(l,"enter",e)}))}}),o}var Tx=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Mx={component:"div",childFactory:function(t){return t}},Oc=function(e){W0(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var l=i.handleExited.bind(vx(i));return i.state={contextValue:{isMounting:!0},handleExited:l,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,i){var l=i.children,a=i.handleExited,s=i.firstRender;return{children:s?Cx(o,a):_x(o,l,a),firstRender:!1}},n.handleExited=function(o,i){var l=Bc(this.props.children);o.key in l||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(a){var s=_({},a.children);return delete s[o.key],{children:s}}))},n.render=function(){var o=this.props,i=o.component,l=o.childFactory,a=G(o,["component","childFactory"]),s=this.state.contextValue,u=Tx(this.state.children).map(l);return delete a.appear,delete a.enter,delete a.exit,i===null?Wt.createElement(kl.Provider,{value:s},u):Wt.createElement(kl.Provider,{value:s},Wt.createElement(i,a,u))},t}(Wt.Component);Oc.propTypes={};Oc.defaultProps=Mx;const Px=Oc,G0=e=>e.scrollTop;function wl(e,t){var n,r;const{timeout:o,easing:i,style:l={}}=e;return{duration:(n=l.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=l.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:l.transitionDelay}}function Rx(e){return Oe("MuiPaper",e)}Ae("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Ax=["className","component","elevation","square","variant"],Ex=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return Le(i,Rx,o)},Dx=U("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return _({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&_({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Nr("#fff",Mp(t.elevation))}, ${Nr("#fff",Mp(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),kx=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:l=1,square:a=!1,variant:s="elevation"}=r,u=G(r,Ax),m=_({},r,{component:i,elevation:l,square:a,variant:s}),p=Ex(m);return C.jsx(Dx,_({as:i,ownerState:m,className:J(p.root,o),ref:n},u))}),wx=kx;function bx(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:i,rippleSize:l,in:a,onExited:s,timeout:u}=e,[m,p]=x.useState(!1),d=J(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),v={width:l,height:l,top:-(l/2)+i,left:-(l/2)+o},g=J(n.child,m&&n.childLeaving,r&&n.childPulsate);return!a&&!m&&p(!0),x.useEffect(()=>{if(!a&&s!=null){const y=setTimeout(s,u);return()=>{clearTimeout(y)}}},[s,a,u]),C.jsx("span",{className:d,style:v,children:C.jsx("span",{className:g})})}const Bx=Ae("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Dt=Bx,Ox=["center","classes","className"];let ba=e=>e,Ap,Ep,Dp,kp;const Su=550,Ix=80,Vx=Mc(Ap||(Ap=ba`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Nx=Mc(Ep||(Ep=ba`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Lx=Mc(Dp||(Dp=ba`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Fx=U("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),jx=U(bx,{name:"MuiTouchRipple",slot:"Ripple"})(kp||(kp=ba`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),Dt.rippleVisible,Vx,Su,({theme:e})=>e.transitions.easing.easeInOut,Dt.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,Dt.child,Dt.childLeaving,Nx,Su,({theme:e})=>e.transitions.easing.easeInOut,Dt.childPulsate,Lx,({theme:e})=>e.transitions.easing.easeInOut),$x=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:l}=r,a=G(r,Ox),[s,u]=x.useState([]),m=x.useRef(0),p=x.useRef(null);x.useEffect(()=>{p.current&&(p.current(),p.current=null)},[s]);const d=x.useRef(!1),v=x.useRef(0),g=x.useRef(null),y=x.useRef(null);x.useEffect(()=>()=>{v.current&&clearTimeout(v.current)},[]);const P=x.useCallback(S=>{const{pulsate:M,rippleX:R,rippleY:T,rippleSize:D,cb:w}=S;u(A=>[...A,C.jsx(jx,{classes:{ripple:J(i.ripple,Dt.ripple),rippleVisible:J(i.rippleVisible,Dt.rippleVisible),ripplePulsate:J(i.ripplePulsate,Dt.ripplePulsate),child:J(i.child,Dt.child),childLeaving:J(i.childLeaving,Dt.childLeaving),childPulsate:J(i.childPulsate,Dt.childPulsate)},timeout:Su,pulsate:M,rippleX:R,rippleY:T,rippleSize:D},m.current)]),m.current+=1,p.current=w},[i]),f=x.useCallback((S={},M={},R=()=>{})=>{const{pulsate:T=!1,center:D=o||M.pulsate,fakeElement:w=!1}=M;if((S==null?void 0:S.type)==="mousedown"&&d.current){d.current=!1;return}(S==null?void 0:S.type)==="touchstart"&&(d.current=!0);const A=w?null:y.current,I=A?A.getBoundingClientRect():{width:0,height:0,left:0,top:0};let F,V,B;if(D||S===void 0||S.clientX===0&&S.clientY===0||!S.clientX&&!S.touches)F=Math.round(I.width/2),V=Math.round(I.height/2);else{const{clientX:O,clientY:j}=S.touches&&S.touches.length>0?S.touches[0]:S;F=Math.round(O-I.left),V=Math.round(j-I.top)}if(D)B=Math.sqrt((2*I.width**2+I.height**2)/3),B%2===0&&(B+=1);else{const O=Math.max(Math.abs((A?A.clientWidth:0)-F),F)*2+2,j=Math.max(Math.abs((A?A.clientHeight:0)-V),V)*2+2;B=Math.sqrt(O**2+j**2)}S!=null&&S.touches?g.current===null&&(g.current=()=>{P({pulsate:T,rippleX:F,rippleY:V,rippleSize:B,cb:R})},v.current=setTimeout(()=>{g.current&&(g.current(),g.current=null)},Ix)):P({pulsate:T,rippleX:F,rippleY:V,rippleSize:B,cb:R})},[o,P]),c=x.useCallback(()=>{f({},{pulsate:!0})},[f]),h=x.useCallback((S,M)=>{if(clearTimeout(v.current),(S==null?void 0:S.type)==="touchend"&&g.current){g.current(),g.current=null,v.current=setTimeout(()=>{h(S,M)});return}g.current=null,u(R=>R.length>0?R.slice(1):R),p.current=M},[]);return x.useImperativeHandle(n,()=>({pulsate:c,start:f,stop:h}),[c,f,h]),C.jsx(Fx,_({className:J(Dt.root,i.root,l),ref:y},a,{children:C.jsx(Px,{component:null,exit:!0,children:s})}))}),Hx=$x;function Wx(e){return Oe("MuiButtonBase",e)}const zx=Ae("MuiButtonBase",["root","disabled","focusVisible"]),Gx=zx,Ux=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Kx=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,l=Le({root:["root",t&&"disabled",n&&"focusVisible"]},Wx,o);return n&&r&&(l.root+=` ${r}`),l},Yx=U("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Gx.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Qx=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:l,className:a,component:s="button",disabled:u=!1,disableRipple:m=!1,disableTouchRipple:p=!1,focusRipple:d=!1,LinkComponent:v="a",onBlur:g,onClick:y,onContextMenu:P,onDragLeave:f,onFocus:c,onFocusVisible:h,onKeyDown:S,onKeyUp:M,onMouseDown:R,onMouseLeave:T,onMouseUp:D,onTouchEnd:w,onTouchMove:A,onTouchStart:I,tabIndex:F=0,TouchRippleProps:V,touchRippleRef:B,type:O}=r,j=G(r,Ux),H=x.useRef(null),E=x.useRef(null),b=rt(E,B),{isFocusVisibleRef:N,onFocus:q,onBlur:K,ref:we}=q1(),[X,ye]=x.useState(!1);u&&X&&ye(!1),x.useImperativeHandle(o,()=>({focusVisible:()=>{ye(!0),H.current.focus()}}),[]);const[ie,ze]=x.useState(!1);x.useEffect(()=>{ze(!0)},[]);const Pt=ie&&!m&&!u;x.useEffect(()=>{X&&d&&!m&&ie&&E.current.pulsate()},[m,d,X,ie]);function be(z,ln,so=p){return Vr(uo=>(ln&&ln(uo),!so&&E.current&&E.current[z](uo),!0))}const lt=be("start",R),re=be("stop",P),_e=be("stop",f),Y=be("stop",D),se=be("stop",z=>{X&&z.preventDefault(),T&&T(z)}),Se=be("start",I),_n=be("stop",w),Rt=be("stop",A),At=be("stop",z=>{K(z),N.current===!1&&ye(!1),g&&g(z)},!1),Nt=Vr(z=>{H.current||(H.current=z.currentTarget),q(z),N.current===!0&&(ye(!0),h&&h(z)),c&&c(z)}),Et=()=>{const z=H.current;return s&&s!=="button"&&!(z.tagName==="A"&&z.href)},Te=x.useRef(!1),rn=Vr(z=>{d&&!Te.current&&X&&E.current&&z.key===" "&&(Te.current=!0,E.current.stop(z,()=>{E.current.start(z)})),z.target===z.currentTarget&&Et()&&z.key===" "&&z.preventDefault(),S&&S(z),z.target===z.currentTarget&&Et()&&z.key==="Enter"&&!u&&(z.preventDefault(),y&&y(z))}),at=Vr(z=>{d&&z.key===" "&&E.current&&X&&!z.defaultPrevented&&(Te.current=!1,E.current.stop(z,()=>{E.current.pulsate(z)})),M&&M(z),y&&z.target===z.currentTarget&&Et()&&z.key===" "&&!z.defaultPrevented&&y(z)});let ve=s;ve==="button"&&(j.href||j.to)&&(ve=v);const Kt={};ve==="button"?(Kt.type=O===void 0?"button":O,Kt.disabled=u):(!j.href&&!j.to&&(Kt.role="button"),u&&(Kt["aria-disabled"]=u));const Tn=rt(n,we,H),on=_({},r,{centerRipple:i,component:s,disabled:u,disableRipple:m,disableTouchRipple:p,focusRipple:d,tabIndex:F,focusVisible:X}),de=Kx(on);return C.jsxs(Yx,_({as:ve,className:J(de.root,a),ownerState:on,onBlur:At,onClick:y,onContextMenu:re,onFocus:Nt,onKeyDown:rn,onKeyUp:at,onMouseDown:lt,onMouseLeave:se,onMouseUp:Y,onDragLeave:_e,onTouchEnd:_n,onTouchMove:Rt,onTouchStart:Se,ref:Tn,tabIndex:u?-1:F,type:O},Kt,j,{children:[l,Pt?C.jsx(Hx,_({ref:b,center:i},V)):null]}))}),Xx=Qx;function qx(e){return Oe("MuiTypography",e)}Ae("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Zx=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Jx=e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:l}=e,a={root:["root",i,e.align!=="inherit"&&`align${ge(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return Le(a,qx,l)},eC=U("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${ge(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>_({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),wp={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},tC={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},nC=e=>tC[e]||e,rC=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiTypography"}),o=nC(r.color),i=iv(_({},r,{color:o})),{align:l="inherit",className:a,component:s,gutterBottom:u=!1,noWrap:m=!1,paragraph:p=!1,variant:d="body1",variantMapping:v=wp}=i,g=G(i,Zx),y=_({},i,{align:l,color:o,className:a,component:s,gutterBottom:u,noWrap:m,paragraph:p,variant:d,variantMapping:v}),P=s||(p?"p":v[d]||wp[d])||"span",f=Jx(y);return C.jsx(eC,_({as:P,ref:n,ownerState:y,className:J(f.root,a)},g))}),ir=rC;function bl(e){return typeof e=="string"}function oC(e,t,n){return e===void 0||bl(e)?t:_({},t,{ownerState:_({},t.ownerState,n)})}function U0(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function iC(e,t,n){return typeof e=="function"?e(t,n):e}function bp(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function lC(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:i}=e;if(!t){const v=J(o==null?void 0:o.className,r==null?void 0:r.className,i,n==null?void 0:n.className),g=_({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),y=_({},n,o,r);return v.length>0&&(y.className=v),Object.keys(g).length>0&&(y.style=g),{props:y,internalRef:void 0}}const l=U0(_({},o,r)),a=bp(r),s=bp(o),u=t(l),m=J(u==null?void 0:u.className,n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),p=_({},u==null?void 0:u.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),d=_({},u,n,s,a);return m.length>0&&(d.className=m),Object.keys(p).length>0&&(d.style=p),{props:d,internalRef:u.ref}}const aC=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function to(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:i=!1}=e,l=G(e,aC),a=i?{}:iC(r,o),{props:s,internalRef:u}=lC(_({},l,{externalSlotProps:a})),m=rt(u,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return oC(n,_({},s,{ref:m}),o)}const sC=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function uC(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function cC(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function dC(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||cC(e))}function pC(e){const t=[],n=[];return Array.from(e.querySelectorAll(sC)).forEach((r,o)=>{const i=uC(r);i===-1||!dC(r)||(i===0?t.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function fC(){return!0}function mC(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=pC,isEnabled:l=fC,open:a}=e,s=x.useRef(!1),u=x.useRef(null),m=x.useRef(null),p=x.useRef(null),d=x.useRef(null),v=x.useRef(!1),g=x.useRef(null),y=rt(t.ref,g),P=x.useRef(null);x.useEffect(()=>{!a||!g.current||(v.current=!n)},[n,a]),x.useEffect(()=>{if(!a||!g.current)return;const h=vt(g.current);return g.current.contains(h.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),v.current&&g.current.focus()),()=>{o||(p.current&&p.current.focus&&(s.current=!0,p.current.focus()),p.current=null)}},[a]),x.useEffect(()=>{if(!a||!g.current)return;const h=vt(g.current),S=T=>{P.current=T,!(r||!l()||T.key!=="Tab")&&h.activeElement===g.current&&T.shiftKey&&(s.current=!0,m.current&&m.current.focus())},M=()=>{const T=g.current;if(T===null)return;if(!h.hasFocus()||!l()||s.current){s.current=!1;return}if(T.contains(h.activeElement)||r&&h.activeElement!==u.current&&h.activeElement!==m.current)return;if(h.activeElement!==d.current)d.current=null;else if(d.current!==null)return;if(!v.current)return;let D=[];if((h.activeElement===u.current||h.activeElement===m.current)&&(D=i(g.current)),D.length>0){var w,A;const I=!!((w=P.current)!=null&&w.shiftKey&&((A=P.current)==null?void 0:A.key)==="Tab"),F=D[0],V=D[D.length-1];typeof F!="string"&&typeof V!="string"&&(I?V.focus():F.focus())}else T.focus()};h.addEventListener("focusin",M),h.addEventListener("keydown",S,!0);const R=setInterval(()=>{h.activeElement&&h.activeElement.tagName==="BODY"&&M()},50);return()=>{clearInterval(R),h.removeEventListener("focusin",M),h.removeEventListener("keydown",S,!0)}},[n,r,o,l,a,i]);const f=h=>{p.current===null&&(p.current=h.relatedTarget),v.current=!0,d.current=h.target;const S=t.props.onFocus;S&&S(h)},c=h=>{p.current===null&&(p.current=h.relatedTarget),v.current=!0};return C.jsxs(x.Fragment,{children:[C.jsx("div",{tabIndex:a?0:-1,onFocus:c,ref:u,"data-testid":"sentinelStart"}),x.cloneElement(t,{ref:y,onFocus:f}),C.jsx("div",{tabIndex:a?0:-1,onFocus:c,ref:m,"data-testid":"sentinelEnd"})]})}function hC(e){return typeof e=="function"?e():e}const gC=x.forwardRef(function(t,n){const{children:r,container:o,disablePortal:i=!1}=t,[l,a]=x.useState(null),s=rt(x.isValidElement(r)?r.ref:null,n);if(Wn(()=>{i||a(hC(o)||document.body)},[o,i]),Wn(()=>{if(l&&!i)return du(n,l),()=>{du(n,null)}},[n,l,i]),i){if(x.isValidElement(r)){const u={ref:s};return x.cloneElement(r,u)}return C.jsx(x.Fragment,{children:r})}return C.jsx(x.Fragment,{children:l&&Xl.createPortal(r,l)})});function yC(e){const t=vt(e);return t.body===e?dr(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function $o(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Bp(e){return parseInt(dr(e).getComputedStyle(e).paddingRight,10)||0}function SC(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function Op(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,l=>{const a=i.indexOf(l)===-1,s=!SC(l);a&&s&&$o(l,o)})}function fs(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function vC(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(yC(r)){const l=d0(vt(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Bp(r)+l}px`;const a=vt(r).querySelectorAll(".mui-fixed");[].forEach.call(a,s=>{n.push({value:s.style.paddingRight,property:"padding-right",el:s}),s.style.paddingRight=`${Bp(s)+l}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=vt(r).body;else{const l=r.parentElement,a=dr(r);i=(l==null?void 0:l.nodeName)==="HTML"&&a.getComputedStyle(l).overflowY==="scroll"?l:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:l,property:a})=>{i?l.style.setProperty(a,i):l.style.removeProperty(a)})}}function xC(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class CC{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&$o(t.modalRef,!1);const o=xC(n);Op(n,t.mount,t.modalRef,o,!0);const i=fs(this.containers,l=>l.container===n);return i!==-1?(this.containers[i].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=fs(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=vC(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=fs(this.containers,l=>l.modals.indexOf(t)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&$o(t.modalRef,n),Op(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const l=i.modals[i.modals.length-1];l.modalRef&&$o(l.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function _C(e){return typeof e=="function"?e():e}function TC(e){return e?e.props.hasOwnProperty("in"):!1}const MC=new CC;function PC(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=MC,closeAfterTransition:i=!1,onTransitionEnter:l,onTransitionExited:a,children:s,onClose:u,open:m,rootRef:p}=e,d=x.useRef({}),v=x.useRef(null),g=x.useRef(null),y=rt(g,p),[P,f]=x.useState(!m),c=TC(s);let h=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(h=!1);const S=()=>vt(v.current),M=()=>(d.current.modalRef=g.current,d.current.mount=v.current,d.current),R=()=>{o.mount(M(),{disableScrollLock:r}),g.current&&(g.current.scrollTop=0)},T=Vr(()=>{const j=_C(t)||S().body;o.add(M(),j),g.current&&R()}),D=x.useCallback(()=>o.isTopModal(M()),[o]),w=Vr(j=>{v.current=j,j&&(m&&D()?R():g.current&&$o(g.current,h))}),A=x.useCallback(()=>{o.remove(M(),h)},[h,o]);x.useEffect(()=>()=>{A()},[A]),x.useEffect(()=>{m?T():(!c||!i)&&A()},[m,A,c,i,T]);const I=j=>H=>{var E;(E=j.onKeyDown)==null||E.call(j,H),!(H.key!=="Escape"||!D())&&(n||(H.stopPropagation(),u&&u(H,"escapeKeyDown")))},F=j=>H=>{var E;(E=j.onClick)==null||E.call(j,H),H.target===H.currentTarget&&u&&u(H,"backdropClick")};return{getRootProps:(j={})=>{const H=U0(e);delete H.onTransitionEnter,delete H.onTransitionExited;const E=_({},H,j);return _({role:"presentation"},E,{onKeyDown:I(E),ref:y})},getBackdropProps:(j={})=>{const H=j;return _({"aria-hidden":!0},H,{onClick:F(H),open:m})},getTransitionProps:()=>{const j=()=>{f(!1),l&&l()},H=()=>{f(!0),a&&a(),i&&A()};return{onEnter:qd(j,s==null?void 0:s.props.onEnter),onExited:qd(H,s==null?void 0:s.props.onExited)}},rootRef:y,portalRef:w,isTopModal:D,exited:P,hasTransition:c}}const RC=["onChange","maxRows","minRows","style","value"];function Fi(e){return parseInt(e,10)||0}const AC={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function Ip(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const EC=x.forwardRef(function(t,n){const{onChange:r,maxRows:o,minRows:i=1,style:l,value:a}=t,s=G(t,RC),{current:u}=x.useRef(a!=null),m=x.useRef(null),p=rt(n,m),d=x.useRef(null),v=x.useRef(0),[g,y]=x.useState({outerHeightStyle:0}),P=x.useCallback(()=>{const S=m.current,R=dr(S).getComputedStyle(S);if(R.width==="0px")return{outerHeightStyle:0};const T=d.current;T.style.width=R.width,T.value=S.value||t.placeholder||"x",T.value.slice(-1)===`
`&&(T.value+=" ");const D=R.boxSizing,w=Fi(R.paddingBottom)+Fi(R.paddingTop),A=Fi(R.borderBottomWidth)+Fi(R.borderTopWidth),I=T.scrollHeight;T.value="x";const F=T.scrollHeight;let V=I;i&&(V=Math.max(Number(i)*F,V)),o&&(V=Math.min(Number(o)*F,V)),V=Math.max(V,F);const B=V+(D==="border-box"?w+A:0),O=Math.abs(V-I)<=1;return{outerHeightStyle:B,overflow:O}},[o,i,t.placeholder]),f=(S,M)=>{const{outerHeightStyle:R,overflow:T}=M;return v.current<20&&(R>0&&Math.abs((S.outerHeightStyle||0)-R)>1||S.overflow!==T)?(v.current+=1,{overflow:T,outerHeightStyle:R}):S},c=x.useCallback(()=>{const S=P();Ip(S)||y(M=>f(M,S))},[P]);Wn(()=>{const S=()=>{const I=P();Ip(I)||Xl.flushSync(()=>{y(F=>f(F,I))})},M=()=>{v.current=0,S()};let R;const T=c0(M),D=m.current,w=dr(D);w.addEventListener("resize",T);let A;return typeof ResizeObserver<"u"&&(A=new ResizeObserver(M),A.observe(D)),()=>{T.clear(),cancelAnimationFrame(R),w.removeEventListener("resize",T),A&&A.disconnect()}},[P]),Wn(()=>{c()}),x.useEffect(()=>{v.current=0},[a]);const h=S=>{v.current=0,u||c(),r&&r(S)};return C.jsxs(x.Fragment,{children:[C.jsx("textarea",_({value:a,onChange:h,ref:p,rows:i,style:_({height:g.outerHeightStyle,overflow:g.overflow?"hidden":void 0},l)},s)),C.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:d,tabIndex:-1,style:_({},AC.shadow,l,{paddingTop:0,paddingBottom:0})})]})});function Si({props:e,states:t,muiFormControl:n}){return t.reduce((r,o)=>(r[o]=e[o],n&&typeof e[o]>"u"&&(r[o]=n[o]),r),{})}const DC=x.createContext(void 0),Ic=DC;function vi(){return x.useContext(Ic)}function K0(e){return C.jsx(nv,_({},e,{defaultTheme:wa,themeId:Jr}))}function Vp(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function Bl(e,t=!1){return e&&(Vp(e.value)&&e.value!==""||t&&Vp(e.defaultValue)&&e.defaultValue!=="")}function kC(e){return e.startAdornment}function wC(e){return Oe("MuiInputBase",e)}const bC=Ae("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),no=bC,BC=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],Ba=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size==="small"&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${ge(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},Oa=(e,t)=>{const{ownerState:n}=e;return[t.input,n.size==="small"&&t.inputSizeSmall,n.multiline&&t.inputMultiline,n.type==="search"&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},OC=e=>{const{classes:t,color:n,disabled:r,error:o,endAdornment:i,focused:l,formControl:a,fullWidth:s,hiddenLabel:u,multiline:m,readOnly:p,size:d,startAdornment:v,type:g}=e,y={root:["root",`color${ge(n)}`,r&&"disabled",o&&"error",s&&"fullWidth",l&&"focused",a&&"formControl",d&&d!=="medium"&&`size${ge(d)}`,m&&"multiline",v&&"adornedStart",i&&"adornedEnd",u&&"hiddenLabel",p&&"readOnly"],input:["input",r&&"disabled",g==="search"&&"inputTypeSearch",m&&"inputMultiline",d==="small"&&"inputSizeSmall",u&&"inputHiddenLabel",v&&"inputAdornedStart",i&&"inputAdornedEnd",p&&"readOnly"]};return Le(y,wC,t)},Ia=U("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Ba})(({theme:e,ownerState:t})=>_({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${no.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&_({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),Va=U("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Oa})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light",r=_({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),o={opacity:"0 !important"},i=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return _({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${no.formControl} &`]:{"&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},[`&.${no.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),IC=C.jsx(K0,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),VC=x.forwardRef(function(t,n){var r;const o=Ie({props:t,name:"MuiInputBase"}),{"aria-describedby":i,autoComplete:l,autoFocus:a,className:s,components:u={},componentsProps:m={},defaultValue:p,disabled:d,disableInjectingGlobalStyles:v,endAdornment:g,fullWidth:y=!1,id:P,inputComponent:f="input",inputProps:c={},inputRef:h,maxRows:S,minRows:M,multiline:R=!1,name:T,onBlur:D,onChange:w,onClick:A,onFocus:I,onKeyDown:F,onKeyUp:V,placeholder:B,readOnly:O,renderSuffix:j,rows:H,slotProps:E={},slots:b={},startAdornment:N,type:q="text",value:K}=o,we=G(o,BC),X=c.value!=null?c.value:K,{current:ye}=x.useRef(X!=null),ie=x.useRef(),ze=x.useCallback(de=>{},[]),Pt=rt(ie,h,c.ref,ze),[be,lt]=x.useState(!1),re=vi(),_e=Si({props:o,muiFormControl:re,states:["color","disabled","error","hiddenLabel","size","required","filled"]});_e.focused=re?re.focused:be,x.useEffect(()=>{!re&&d&&be&&(lt(!1),D&&D())},[re,d,be,D]);const Y=re&&re.onFilled,se=re&&re.onEmpty,Se=x.useCallback(de=>{Bl(de)?Y&&Y():se&&se()},[Y,se]);Wn(()=>{ye&&Se({value:X})},[X,Se,ye]);const _n=de=>{if(_e.disabled){de.stopPropagation();return}I&&I(de),c.onFocus&&c.onFocus(de),re&&re.onFocus?re.onFocus(de):lt(!0)},Rt=de=>{D&&D(de),c.onBlur&&c.onBlur(de),re&&re.onBlur?re.onBlur(de):lt(!1)},At=(de,...z)=>{if(!ye){const ln=de.target||ie.current;if(ln==null)throw new Error(Hn(1));Se({value:ln.value})}c.onChange&&c.onChange(de,...z),w&&w(de,...z)};x.useEffect(()=>{Se(ie.current)},[]);const Nt=de=>{ie.current&&de.currentTarget===de.target&&ie.current.focus(),A&&A(de)};let Et=f,Te=c;R&&Et==="input"&&(H?Te=_({type:void 0,minRows:H,maxRows:H},Te):Te=_({type:void 0,maxRows:S,minRows:M},Te),Et=EC);const rn=de=>{Se(de.animationName==="mui-auto-fill-cancel"?ie.current:{value:"x"})};x.useEffect(()=>{re&&re.setAdornedStart(!!N)},[re,N]);const at=_({},o,{color:_e.color||"primary",disabled:_e.disabled,endAdornment:g,error:_e.error,focused:_e.focused,formControl:re,fullWidth:y,hiddenLabel:_e.hiddenLabel,multiline:R,size:_e.size,startAdornment:N,type:q}),ve=OC(at),Kt=b.root||u.Root||Ia,Tn=E.root||m.root||{},on=b.input||u.Input||Va;return Te=_({},Te,(r=E.input)!=null?r:m.input),C.jsxs(x.Fragment,{children:[!v&&IC,C.jsxs(Kt,_({},Tn,!bl(Kt)&&{ownerState:_({},at,Tn.ownerState)},{ref:n,onClick:Nt},we,{className:J(ve.root,Tn.className,s,O&&"MuiInputBase-readOnly"),children:[N,C.jsx(Ic.Provider,{value:null,children:C.jsx(on,_({ownerState:at,"aria-invalid":_e.error,"aria-describedby":i,autoComplete:l,autoFocus:a,defaultValue:p,disabled:_e.disabled,id:P,onAnimationStart:rn,name:T,placeholder:B,readOnly:O,required:_e.required,rows:H,value:X,onKeyDown:F,onKeyUp:V,type:q},Te,!bl(on)&&{as:Et,ownerState:_({},at,Te.ownerState)},{ref:Pt,className:J(ve.input,Te.className,O&&"MuiInputBase-readOnly"),onBlur:Rt,onChange:At,onFocus:_n}))}),g,j?j(_({},_e,{startAdornment:N})):null]}))]})}),Vc=VC;function NC(e){return Oe("MuiInput",e)}const LC=_({},no,Ae("MuiInput",["root","underline","input"])),Co=LC;function FC(e){return Oe("MuiOutlinedInput",e)}const jC=_({},no,Ae("MuiOutlinedInput",["root","notchedOutline","input"])),Pn=jC;function $C(e){return Oe("MuiFilledInput",e)}const HC=_({},no,Ae("MuiFilledInput",["root","underline","input"])),Yn=HC,WC=yx(C.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),zC=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],GC={entering:{opacity:1},entered:{opacity:1}},UC=x.forwardRef(function(t,n){const r=bc(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:l=!0,children:a,easing:s,in:u,onEnter:m,onEntered:p,onEntering:d,onExit:v,onExited:g,onExiting:y,style:P,timeout:f=o,TransitionComponent:c=z0}=t,h=G(t,zC),S=x.useRef(null),M=rt(S,a.ref,n),R=B=>O=>{if(B){const j=S.current;O===void 0?B(j):B(j,O)}},T=R(d),D=R((B,O)=>{G0(B);const j=wl({style:P,timeout:f,easing:s},{mode:"enter"});B.style.webkitTransition=r.transitions.create("opacity",j),B.style.transition=r.transitions.create("opacity",j),m&&m(B,O)}),w=R(p),A=R(y),I=R(B=>{const O=wl({style:P,timeout:f,easing:s},{mode:"exit"});B.style.webkitTransition=r.transitions.create("opacity",O),B.style.transition=r.transitions.create("opacity",O),v&&v(B)}),F=R(g),V=B=>{i&&i(S.current,B)};return C.jsx(c,_({appear:l,in:u,nodeRef:S,onEnter:D,onEntered:w,onEntering:T,onExit:I,onExited:F,onExiting:A,addEndListener:V,timeout:f},h,{children:(B,O)=>x.cloneElement(a,_({style:_({opacity:0,visibility:B==="exited"&&!u?"hidden":void 0},GC[B],P,a.props.style),ref:M},O))}))}),KC=UC;function YC(e){return Oe("MuiBackdrop",e)}Ae("MuiBackdrop",["root","invisible"]);const QC=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],XC=e=>{const{classes:t,invisible:n}=e;return Le({root:["root",n&&"invisible"]},YC,t)},qC=U("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>_({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),ZC=x.forwardRef(function(t,n){var r,o,i;const l=Ie({props:t,name:"MuiBackdrop"}),{children:a,className:s,component:u="div",components:m={},componentsProps:p={},invisible:d=!1,open:v,slotProps:g={},slots:y={},TransitionComponent:P=KC,transitionDuration:f}=l,c=G(l,QC),h=_({},l,{component:u,invisible:d}),S=XC(h),M=(r=g.root)!=null?r:p.root;return C.jsx(P,_({in:v,timeout:f},c,{children:C.jsx(qC,_({"aria-hidden":!0},M,{as:(o=(i=y.root)!=null?i:m.Root)!=null?o:u,className:J(S.root,s,M==null?void 0:M.className),ownerState:_({},h,M==null?void 0:M.ownerState),classes:S,ref:n,children:a}))}))}),JC=ZC,e5=Iv({createStyledComponent:U("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${ge(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>Ie({props:e,name:"MuiContainer"})}),Sn=e5,t5=(e,t)=>_({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),n5=e=>_({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),r5=(e,t=!1)=>{var n;const r={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([l,a])=>{var s;r[e.getColorSchemeSelector(l).replace(/\s*&/,"")]={colorScheme:(s=a.palette)==null?void 0:s.mode}});let o=_({html:t5(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:_({margin:0},n5(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r);const i=(n=e.components)==null||(n=n.MuiCssBaseline)==null?void 0:n.styleOverrides;return i&&(o=[o,i]),o};function o5(e){const t=Ie({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:r=!1}=t;return C.jsxs(x.Fragment,{children:[C.jsx(K0,{styles:o=>r5(o,r)}),n]})}function i5(e){return Oe("MuiModal",e)}Ae("MuiModal",["root","hidden","backdrop"]);const l5=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],a5=e=>{const{open:t,exited:n,classes:r}=e;return Le({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},i5,r)},s5=U("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>_({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),u5=U(JC,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),c5=x.forwardRef(function(t,n){var r,o,i,l,a,s;const u=Ie({name:"MuiModal",props:t}),{BackdropComponent:m=u5,BackdropProps:p,className:d,closeAfterTransition:v=!1,children:g,container:y,component:P,components:f={},componentsProps:c={},disableAutoFocus:h=!1,disableEnforceFocus:S=!1,disableEscapeKeyDown:M=!1,disablePortal:R=!1,disableRestoreFocus:T=!1,disableScrollLock:D=!1,hideBackdrop:w=!1,keepMounted:A=!1,onBackdropClick:I,open:F,slotProps:V,slots:B}=u,O=G(u,l5),j=_({},u,{closeAfterTransition:v,disableAutoFocus:h,disableEnforceFocus:S,disableEscapeKeyDown:M,disablePortal:R,disableRestoreFocus:T,disableScrollLock:D,hideBackdrop:w,keepMounted:A}),{getRootProps:H,getBackdropProps:E,getTransitionProps:b,portalRef:N,isTopModal:q,exited:K,hasTransition:we}=PC(_({},j,{rootRef:n})),X=_({},j,{exited:K}),ye=a5(X),ie={};if(g.props.tabIndex===void 0&&(ie.tabIndex="-1"),we){const{onEnter:Y,onExited:se}=b();ie.onEnter=Y,ie.onExited=se}const ze=(r=(o=B==null?void 0:B.root)!=null?o:f.Root)!=null?r:s5,Pt=(i=(l=B==null?void 0:B.backdrop)!=null?l:f.Backdrop)!=null?i:m,be=(a=V==null?void 0:V.root)!=null?a:c.root,lt=(s=V==null?void 0:V.backdrop)!=null?s:c.backdrop,re=to({elementType:ze,externalSlotProps:be,externalForwardedProps:O,getSlotProps:H,additionalProps:{ref:n,as:P},ownerState:X,className:J(d,be==null?void 0:be.className,ye==null?void 0:ye.root,!X.open&&X.exited&&(ye==null?void 0:ye.hidden))}),_e=to({elementType:Pt,externalSlotProps:lt,additionalProps:p,getSlotProps:Y=>E(_({},Y,{onClick:se=>{I&&I(se),Y!=null&&Y.onClick&&Y.onClick(se)}})),className:J(lt==null?void 0:lt.className,p==null?void 0:p.className,ye==null?void 0:ye.backdrop),ownerState:X});return!A&&!F&&(!we||K)?null:C.jsx(gC,{ref:N,container:y,disablePortal:R,children:C.jsxs(ze,_({},re,{children:[!w&&m?C.jsx(Pt,_({},_e)):null,C.jsx(mC,{disableEnforceFocus:S,disableAutoFocus:h,disableRestoreFocus:T,isEnabled:q,open:F,children:x.cloneElement(g,ie)})]}))})}),d5=c5,p5=Ae("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),Np=p5,f5=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],m5=e=>{const{classes:t,disableUnderline:n}=e,o=Le({root:["root",!n&&"underline"],input:["input"]},$C,t);return _({},t,o)},h5=U(Ia,{shouldForwardProp:e=>xn(e)||e==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...Ba(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{var n;const r=e.palette.mode==="light",o=r?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",i=r?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",l=r?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",a=r?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return _({position:"relative",backgroundColor:e.vars?e.vars.palette.FilledInput.bg:i,borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:e.vars?e.vars.palette.FilledInput.hoverBg:l,"@media (hover: none)":{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:i}},[`&.${Yn.focused}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:i},[`&.${Yn.disabled}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.disabledBg:a}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(n=(e.vars||e).palette[t.color||"primary"])==null?void 0:n.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Yn.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Yn.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`:o}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Yn.disabled}, .${Yn.error}):before`]:{borderBottom:`1px solid ${(e.vars||e).palette.text.primary}`},[`&.${Yn.disabled}:before`]:{borderBottomStyle:"dotted"}},t.startAdornment&&{paddingLeft:12},t.endAdornment&&{paddingRight:12},t.multiline&&_({padding:"25px 12px 8px"},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17}))}),g5=U(Va,{name:"MuiFilledInput",slot:"Input",overridesResolver:Oa})(({theme:e,ownerState:t})=>_({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17},t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0},t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9})),Y0=x.forwardRef(function(t,n){var r,o,i,l;const a=Ie({props:t,name:"MuiFilledInput"}),{components:s={},componentsProps:u,fullWidth:m=!1,inputComponent:p="input",multiline:d=!1,slotProps:v,slots:g={},type:y="text"}=a,P=G(a,f5),f=_({},a,{fullWidth:m,inputComponent:p,multiline:d,type:y}),c=m5(a),h={root:{ownerState:f},input:{ownerState:f}},S=v??u?ft(v??u,h):h,M=(r=(o=g.root)!=null?o:s.Root)!=null?r:h5,R=(i=(l=g.input)!=null?l:s.Input)!=null?i:g5;return C.jsx(Vc,_({slots:{root:M,input:R},componentsProps:S,fullWidth:m,inputComponent:p,multiline:d,ref:n,type:y},P,{classes:c}))});Y0.muiName="Input";const y5=Y0;function S5(e){return Oe("MuiFormControl",e)}Ae("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const v5=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],x5=e=>{const{classes:t,margin:n,fullWidth:r}=e,o={root:["root",n!=="none"&&`margin${ge(n)}`,r&&"fullWidth"]};return Le(o,S5,t)},C5=U("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>_({},t.root,t[`margin${ge(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>_({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),_5=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiFormControl"}),{children:o,className:i,color:l="primary",component:a="div",disabled:s=!1,error:u=!1,focused:m,fullWidth:p=!1,hiddenLabel:d=!1,margin:v="none",required:g=!1,size:y="medium",variant:P="outlined"}=r,f=G(r,v5),c=_({},r,{color:l,component:a,disabled:s,error:u,fullWidth:p,hiddenLabel:d,margin:v,required:g,size:y,variant:P}),h=x5(c),[S,M]=x.useState(()=>{let V=!1;return o&&x.Children.forEach(o,B=>{if(!us(B,["Input","Select"]))return;const O=us(B,["Select"])?B.props.input:B;O&&kC(O.props)&&(V=!0)}),V}),[R,T]=x.useState(()=>{let V=!1;return o&&x.Children.forEach(o,B=>{us(B,["Input","Select"])&&(Bl(B.props,!0)||Bl(B.props.inputProps,!0))&&(V=!0)}),V}),[D,w]=x.useState(!1);s&&D&&w(!1);const A=m!==void 0&&!s?m:D;let I;const F=x.useMemo(()=>({adornedStart:S,setAdornedStart:M,color:l,disabled:s,error:u,filled:R,focused:A,fullWidth:p,hiddenLabel:d,size:y,onBlur:()=>{w(!1)},onEmpty:()=>{T(!1)},onFilled:()=>{T(!0)},onFocus:()=>{w(!0)},registerEffect:I,required:g,variant:P}),[S,l,s,u,R,A,p,d,I,g,y,P]);return C.jsx(Ic.Provider,{value:F,children:C.jsx(C5,_({as:a,ownerState:c,className:J(h.root,i),ref:n},f,{children:o}))})}),T5=_5;function M5(e){return Oe("MuiFormLabel",e)}const P5=Ae("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),Ho=P5,R5=["children","className","color","component","disabled","error","filled","focused","required"],A5=e=>{const{classes:t,color:n,focused:r,disabled:o,error:i,filled:l,required:a}=e,s={root:["root",`color${ge(n)}`,o&&"disabled",i&&"error",l&&"filled",r&&"focused",a&&"required"],asterisk:["asterisk",i&&"error"]};return Le(s,M5,t)},E5=U("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},t)=>_({},t.root,e.color==="secondary"&&t.colorSecondary,e.filled&&t.filled)})(({theme:e,ownerState:t})=>_({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${Ho.focused}`]:{color:(e.vars||e).palette[t.color].main},[`&.${Ho.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${Ho.error}`]:{color:(e.vars||e).palette.error.main}})),D5=U("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${Ho.error}`]:{color:(e.vars||e).palette.error.main}})),k5=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiFormLabel"}),{children:o,className:i,component:l="label"}=r,a=G(r,R5),s=vi(),u=Si({props:r,muiFormControl:s,states:["color","required","focused","disabled","error","filled"]}),m=_({},r,{color:u.color||"primary",component:l,disabled:u.disabled,error:u.error,filled:u.filled,focused:u.focused,required:u.required}),p=A5(m);return C.jsxs(E5,_({as:l,ownerState:m,className:J(p.root,i),ref:n},a,{children:[o,u.required&&C.jsxs(D5,{ownerState:m,"aria-hidden":!0,className:p.asterisk,children:[" ","*"]})]}))}),w5=k5,b5=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function vu(e){return`scale(${e}, ${e**2})`}const B5={entering:{opacity:1,transform:vu(1)},entered:{opacity:1,transform:"none"}},ms=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Q0=x.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:i,easing:l,in:a,onEnter:s,onEntered:u,onEntering:m,onExit:p,onExited:d,onExiting:v,style:g,timeout:y="auto",TransitionComponent:P=z0}=t,f=G(t,b5),c=x.useRef(),h=x.useRef(),S=bc(),M=x.useRef(null),R=rt(M,i.ref,n),T=O=>j=>{if(O){const H=M.current;j===void 0?O(H):O(H,j)}},D=T(m),w=T((O,j)=>{G0(O);const{duration:H,delay:E,easing:b}=wl({style:g,timeout:y,easing:l},{mode:"enter"});let N;y==="auto"?(N=S.transitions.getAutoHeightDuration(O.clientHeight),h.current=N):N=H,O.style.transition=[S.transitions.create("opacity",{duration:N,delay:E}),S.transitions.create("transform",{duration:ms?N:N*.666,delay:E,easing:b})].join(","),s&&s(O,j)}),A=T(u),I=T(v),F=T(O=>{const{duration:j,delay:H,easing:E}=wl({style:g,timeout:y,easing:l},{mode:"exit"});let b;y==="auto"?(b=S.transitions.getAutoHeightDuration(O.clientHeight),h.current=b):b=j,O.style.transition=[S.transitions.create("opacity",{duration:b,delay:H}),S.transitions.create("transform",{duration:ms?b:b*.666,delay:ms?H:H||b*.333,easing:E})].join(","),O.style.opacity=0,O.style.transform=vu(.75),p&&p(O)}),V=T(d),B=O=>{y==="auto"&&(c.current=setTimeout(O,h.current||0)),r&&r(M.current,O)};return x.useEffect(()=>()=>{clearTimeout(c.current)},[]),C.jsx(P,_({appear:o,in:a,nodeRef:M,onEnter:w,onEntered:A,onEntering:D,onExit:F,onExited:V,onExiting:I,addEndListener:B,timeout:y==="auto"?null:y},f,{children:(O,j)=>x.cloneElement(i,_({style:_({opacity:0,transform:vu(.75),visibility:O==="exited"&&!a?"hidden":void 0},B5[O],g,i.props.style),ref:R},j))}))});Q0.muiSupportAuto=!0;const O5=Q0,I5=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],V5=e=>{const{classes:t,disableUnderline:n}=e,o=Le({root:["root",!n&&"underline"],input:["input"]},NC,t);return _({},t,o)},N5=U(Ia,{shouldForwardProp:e=>xn(e)||e==="classes",name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...Ba(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{let r=e.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(r=`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),_({position:"relative"},t.formControl&&{"label + &":{marginTop:16}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(e.vars||e).palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Co.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Co.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${r}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Co.disabled}, .${Co.error}):before`]:{borderBottom:`2px solid ${(e.vars||e).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${r}`}},[`&.${Co.disabled}:before`]:{borderBottomStyle:"dotted"}})}),L5=U(Va,{name:"MuiInput",slot:"Input",overridesResolver:Oa})({}),X0=x.forwardRef(function(t,n){var r,o,i,l;const a=Ie({props:t,name:"MuiInput"}),{disableUnderline:s,components:u={},componentsProps:m,fullWidth:p=!1,inputComponent:d="input",multiline:v=!1,slotProps:g,slots:y={},type:P="text"}=a,f=G(a,I5),c=V5(a),S={root:{ownerState:{disableUnderline:s}}},M=g??m?ft(g??m,S):S,R=(r=(o=y.root)!=null?o:u.Root)!=null?r:N5,T=(i=(l=y.input)!=null?l:u.Input)!=null?i:L5;return C.jsx(Vc,_({slots:{root:R,input:T},slotProps:M,fullWidth:p,inputComponent:d,multiline:v,ref:n,type:P},f,{classes:c}))});X0.muiName="Input";const F5=X0;function j5(e){return Oe("MuiInputLabel",e)}Ae("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const $5=["disableAnimation","margin","shrink","variant","className"],H5=e=>{const{classes:t,formControl:n,size:r,shrink:o,disableAnimation:i,variant:l,required:a}=e,s={root:["root",n&&"formControl",!i&&"animated",o&&"shrink",r&&r!=="normal"&&`size${ge(r)}`,l],asterisk:[a&&"asterisk"]},u=Le(s,j5,t);return _({},t,u)},W5=U(w5,{shouldForwardProp:e=>xn(e)||e==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${Ho.asterisk}`]:t.asterisk},t.root,n.formControl&&t.formControl,n.size==="small"&&t.sizeSmall,n.shrink&&t.shrink,!n.disableAnimation&&t.animated,t[n.variant]]}})(({theme:e,ownerState:t})=>_({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},t.size==="small"&&{transform:"translate(0, 17px) scale(1)"},t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},t.variant==="filled"&&_({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},t.shrink&&_({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},t.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),t.variant==="outlined"&&_({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),z5=x.forwardRef(function(t,n){const r=Ie({name:"MuiInputLabel",props:t}),{disableAnimation:o=!1,shrink:i,className:l}=r,a=G(r,$5),s=vi();let u=i;typeof u>"u"&&s&&(u=s.filled||s.focused||s.adornedStart);const m=Si({props:r,muiFormControl:s,states:["size","variant","required"]}),p=_({},r,{disableAnimation:o,formControl:s,shrink:u,size:m.size,variant:m.variant,required:m.required}),d=H5(p);return C.jsx(W5,_({"data-shrink":u,ownerState:p,ref:n,className:J(d.root,l)},a,{classes:d}))}),G5=z5,U5=x.createContext({}),xu=U5;function K5(e){return Oe("MuiList",e)}Ae("MuiList",["root","padding","dense","subheader"]);const Y5=["children","className","component","dense","disablePadding","subheader"],Q5=e=>{const{classes:t,disablePadding:n,dense:r,subheader:o}=e;return Le({root:["root",!n&&"padding",r&&"dense",o&&"subheader"]},K5,t)},X5=U("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>_({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),q5=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiList"}),{children:o,className:i,component:l="ul",dense:a=!1,disablePadding:s=!1,subheader:u}=r,m=G(r,Y5),p=x.useMemo(()=>({dense:a}),[a]),d=_({},r,{component:l,dense:a,disablePadding:s}),v=Q5(d);return C.jsx(xu.Provider,{value:p,children:C.jsxs(X5,_({as:l,className:J(v.root,i),ref:n,ownerState:d},m,{children:[u,o]}))})}),Z5=q5,J5=Ae("MuiListItemIcon",["root","alignItemsFlexStart"]),Lp=J5,e_=Ae("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Fp=e_,t_=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function hs(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function jp(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function q0(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function _o(e,t,n,r,o,i){let l=!1,a=o(e,t,t?n:!1);for(;a;){if(a===e.firstChild){if(l)return!1;l=!0}const s=r?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!q0(a,i)||s)a=o(e,a,n);else return a.focus(),!0}return!1}const n_=x.forwardRef(function(t,n){const{actions:r,autoFocus:o=!1,autoFocusItem:i=!1,children:l,className:a,disabledItemsFocusable:s=!1,disableListWrap:u=!1,onKeyDown:m,variant:p="selectedMenu"}=t,d=G(t,t_),v=x.useRef(null),g=x.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Wn(()=>{o&&v.current.focus()},[o]),x.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(h,S)=>{const M=!v.current.style.width;if(h.clientHeight<v.current.clientHeight&&M){const R=`${d0(vt(h))}px`;v.current.style[S.direction==="rtl"?"paddingLeft":"paddingRight"]=R,v.current.style.width=`calc(100% + ${R})`}return v.current}}),[]);const y=h=>{const S=v.current,M=h.key,R=vt(S).activeElement;if(M==="ArrowDown")h.preventDefault(),_o(S,R,u,s,hs);else if(M==="ArrowUp")h.preventDefault(),_o(S,R,u,s,jp);else if(M==="Home")h.preventDefault(),_o(S,null,u,s,hs);else if(M==="End")h.preventDefault(),_o(S,null,u,s,jp);else if(M.length===1){const T=g.current,D=M.toLowerCase(),w=performance.now();T.keys.length>0&&(w-T.lastTime>500?(T.keys=[],T.repeating=!0,T.previousKeyMatched=!0):T.repeating&&D!==T.keys[0]&&(T.repeating=!1)),T.lastTime=w,T.keys.push(D);const A=R&&!T.repeating&&q0(R,T);T.previousKeyMatched&&(A||_o(S,R,!1,s,hs,T))?h.preventDefault():T.previousKeyMatched=!1}m&&m(h)},P=rt(v,n);let f=-1;x.Children.forEach(l,(h,S)=>{if(!x.isValidElement(h)){f===S&&(f+=1,f>=l.length&&(f=-1));return}h.props.disabled||(p==="selectedMenu"&&h.props.selected||f===-1)&&(f=S),f===S&&(h.props.disabled||h.props.muiSkipListHighlight||h.type.muiSkipListHighlight)&&(f+=1,f>=l.length&&(f=-1))});const c=x.Children.map(l,(h,S)=>{if(S===f){const M={};return i&&(M.autoFocus=!0),h.props.tabIndex===void 0&&p==="selectedMenu"&&(M.tabIndex=0),x.cloneElement(h,M)}return h});return C.jsx(Z5,_({role:"menu",ref:P,className:a,onKeyDown:y,tabIndex:o?0:-1},d,{children:c}))}),r_=n_;function o_(e){return Oe("MuiPopover",e)}Ae("MuiPopover",["root","paper"]);const i_=["onEntering"],l_=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],a_=["slotProps"];function $p(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Hp(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Wp(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function gs(e){return typeof e=="function"?e():e}const s_=e=>{const{classes:t}=e;return Le({root:["root"],paper:["paper"]},o_,t)},u_=U(d5,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Z0=U(wx,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),c_=x.forwardRef(function(t,n){var r,o,i;const l=Ie({props:t,name:"MuiPopover"}),{action:a,anchorEl:s,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:m,anchorReference:p="anchorEl",children:d,className:v,container:g,elevation:y=8,marginThreshold:P=16,open:f,PaperProps:c={},slots:h,slotProps:S,transformOrigin:M={vertical:"top",horizontal:"left"},TransitionComponent:R=O5,transitionDuration:T="auto",TransitionProps:{onEntering:D}={},disableScrollLock:w=!1}=l,A=G(l.TransitionProps,i_),I=G(l,l_),F=(r=S==null?void 0:S.paper)!=null?r:c,V=x.useRef(),B=rt(V,F.ref),O=_({},l,{anchorOrigin:u,anchorReference:p,elevation:y,marginThreshold:P,externalPaperSlotProps:F,transformOrigin:M,TransitionComponent:R,transitionDuration:T,TransitionProps:A}),j=s_(O),H=x.useCallback(()=>{if(p==="anchorPosition")return m;const Y=gs(s),Se=(Y&&Y.nodeType===1?Y:vt(V.current).body).getBoundingClientRect();return{top:Se.top+$p(Se,u.vertical),left:Se.left+Hp(Se,u.horizontal)}},[s,u.horizontal,u.vertical,m,p]),E=x.useCallback(Y=>({vertical:$p(Y,M.vertical),horizontal:Hp(Y,M.horizontal)}),[M.horizontal,M.vertical]),b=x.useCallback(Y=>{const se={width:Y.offsetWidth,height:Y.offsetHeight},Se=E(se);if(p==="none")return{top:null,left:null,transformOrigin:Wp(Se)};const _n=H();let Rt=_n.top-Se.vertical,At=_n.left-Se.horizontal;const Nt=Rt+se.height,Et=At+se.width,Te=dr(gs(s)),rn=Te.innerHeight-P,at=Te.innerWidth-P;if(P!==null&&Rt<P){const ve=Rt-P;Rt-=ve,Se.vertical+=ve}else if(P!==null&&Nt>rn){const ve=Nt-rn;Rt-=ve,Se.vertical+=ve}if(P!==null&&At<P){const ve=At-P;At-=ve,Se.horizontal+=ve}else if(Et>at){const ve=Et-at;At-=ve,Se.horizontal+=ve}return{top:`${Math.round(Rt)}px`,left:`${Math.round(At)}px`,transformOrigin:Wp(Se)}},[s,p,H,E,P]),[N,q]=x.useState(f),K=x.useCallback(()=>{const Y=V.current;if(!Y)return;const se=b(Y);se.top!==null&&(Y.style.top=se.top),se.left!==null&&(Y.style.left=se.left),Y.style.transformOrigin=se.transformOrigin,q(!0)},[b]);x.useEffect(()=>(w&&window.addEventListener("scroll",K),()=>window.removeEventListener("scroll",K)),[s,w,K]);const we=(Y,se)=>{D&&D(Y,se),K()},X=()=>{q(!1)};x.useEffect(()=>{f&&K()}),x.useImperativeHandle(a,()=>f?{updatePosition:()=>{K()}}:null,[f,K]),x.useEffect(()=>{if(!f)return;const Y=c0(()=>{K()}),se=dr(s);return se.addEventListener("resize",Y),()=>{Y.clear(),se.removeEventListener("resize",Y)}},[s,f,K]);let ye=T;T==="auto"&&!R.muiSupportAuto&&(ye=void 0);const ie=g||(s?vt(gs(s)).body:void 0),ze=(o=h==null?void 0:h.root)!=null?o:u_,Pt=(i=h==null?void 0:h.paper)!=null?i:Z0,be=to({elementType:Pt,externalSlotProps:_({},F,{style:N?F.style:_({},F.style,{opacity:0})}),additionalProps:{elevation:y,ref:B},ownerState:O,className:J(j.paper,F==null?void 0:F.className)}),lt=to({elementType:ze,externalSlotProps:(S==null?void 0:S.root)||{},externalForwardedProps:I,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:ie,open:f},ownerState:O,className:J(j.root,v)}),{slotProps:re}=lt,_e=G(lt,a_);return C.jsx(ze,_({},_e,!bl(ze)&&{slotProps:re,disableScrollLock:w},{children:C.jsx(R,_({appear:!0,in:f,onEntering:we,onExited:X,timeout:ye},A,{children:C.jsx(Pt,_({},be,{children:d}))}))}))}),d_=c_;function p_(e){return Oe("MuiMenu",e)}Ae("MuiMenu",["root","paper","list"]);const f_=["onEntering"],m_=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],h_={vertical:"top",horizontal:"right"},g_={vertical:"top",horizontal:"left"},y_=e=>{const{classes:t}=e;return Le({root:["root"],paper:["paper"],list:["list"]},p_,t)},S_=U(d_,{shouldForwardProp:e=>xn(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),v_=U(Z0,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),x_=U(r_,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),C_=x.forwardRef(function(t,n){var r,o;const i=Ie({props:t,name:"MuiMenu"}),{autoFocus:l=!0,children:a,className:s,disableAutoFocusItem:u=!1,MenuListProps:m={},onClose:p,open:d,PaperProps:v={},PopoverClasses:g,transitionDuration:y="auto",TransitionProps:{onEntering:P}={},variant:f="selectedMenu",slots:c={},slotProps:h={}}=i,S=G(i.TransitionProps,f_),M=G(i,m_),R=bc(),T=R.direction==="rtl",D=_({},i,{autoFocus:l,disableAutoFocusItem:u,MenuListProps:m,onEntering:P,PaperProps:v,transitionDuration:y,TransitionProps:S,variant:f}),w=y_(D),A=l&&!u&&d,I=x.useRef(null),F=(b,N)=>{I.current&&I.current.adjustStyleForScrollbar(b,R),P&&P(b,N)},V=b=>{b.key==="Tab"&&(b.preventDefault(),p&&p(b,"tabKeyDown"))};let B=-1;x.Children.map(a,(b,N)=>{x.isValidElement(b)&&(b.props.disabled||(f==="selectedMenu"&&b.props.selected||B===-1)&&(B=N))});const O=(r=c.paper)!=null?r:v_,j=(o=h.paper)!=null?o:v,H=to({elementType:c.root,externalSlotProps:h.root,ownerState:D,className:[w.root,s]}),E=to({elementType:O,externalSlotProps:j,ownerState:D,className:w.paper});return C.jsx(S_,_({onClose:p,anchorOrigin:{vertical:"bottom",horizontal:T?"right":"left"},transformOrigin:T?h_:g_,slots:{paper:O,root:c.root},slotProps:{root:H,paper:E},open:d,ref:n,transitionDuration:y,TransitionProps:_({onEntering:F},S),ownerState:D},M,{classes:g,children:C.jsx(x_,_({onKeyDown:V,actions:I,autoFocus:l&&(B===-1||u),autoFocusItem:A,variant:f},m,{className:J(w.list,m.className),children:a}))}))}),__=C_;function T_(e){return Oe("MuiMenuItem",e)}const M_=Ae("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),To=M_,P_=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],R_=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},A_=e=>{const{disabled:t,dense:n,divider:r,disableGutters:o,selected:i,classes:l}=e,s=Le({root:["root",n&&"dense",t&&"disabled",!o&&"gutters",r&&"divider",i&&"selected"]},T_,l);return _({},l,s)},E_=U(Xx,{shouldForwardProp:e=>xn(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:R_})(({theme:e,ownerState:t})=>_({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${To.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Nr(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${To.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Nr(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${To.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Nr(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Nr(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${To.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${To.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${Np.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${Np.inset}`]:{marginLeft:52},[`& .${Fp.root}`]:{marginTop:0,marginBottom:0},[`& .${Fp.inset}`]:{paddingLeft:36},[`& .${Lp.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&_({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${Lp.root} svg`]:{fontSize:"1.25rem"}}))),D_=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiMenuItem"}),{autoFocus:o=!1,component:i="li",dense:l=!1,divider:a=!1,disableGutters:s=!1,focusVisibleClassName:u,role:m="menuitem",tabIndex:p,className:d}=r,v=G(r,P_),g=x.useContext(xu),y=x.useMemo(()=>({dense:l||g.dense||!1,disableGutters:s}),[g.dense,l,s]),P=x.useRef(null);Wn(()=>{o&&P.current&&P.current.focus()},[o]);const f=_({},r,{dense:y.dense,divider:a,disableGutters:s}),c=A_(r),h=rt(P,n);let S;return r.disabled||(S=p!==void 0?p:-1),C.jsx(xu.Provider,{value:y,children:C.jsx(E_,_({ref:h,role:m,tabIndex:S,component:i,focusVisibleClassName:J(c.focusVisible,u),className:J(c.root,d)},v,{ownerState:f,classes:c}))})}),k_=D_;function w_(e){return Oe("MuiNativeSelect",e)}const b_=Ae("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Nc=b_,B_=["className","disabled","error","IconComponent","inputRef","variant"],O_=e=>{const{classes:t,variant:n,disabled:r,multiple:o,open:i,error:l}=e,a={select:["select",n,r&&"disabled",o&&"multiple",l&&"error"],icon:["icon",`icon${ge(n)}`,i&&"iconOpen",r&&"disabled"]};return Le(a,w_,t)},J0=({ownerState:e,theme:t})=>_({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":_({},t.vars?{backgroundColor:`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:t.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${Nc.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},e.variant==="filled"&&{"&&&":{paddingRight:32}},e.variant==="outlined"&&{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}),I_=U("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:xn,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.select,t[n.variant],n.error&&t.error,{[`&.${Nc.multiple}`]:t.multiple}]}})(J0),eh=({ownerState:e,theme:t})=>_({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${Nc.disabled}`]:{color:(t.vars||t).palette.action.disabled}},e.open&&{transform:"rotate(180deg)"},e.variant==="filled"&&{right:7},e.variant==="outlined"&&{right:7}),V_=U("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${ge(n.variant)}`],n.open&&t.iconOpen]}})(eh),N_=x.forwardRef(function(t,n){const{className:r,disabled:o,error:i,IconComponent:l,inputRef:a,variant:s="standard"}=t,u=G(t,B_),m=_({},t,{disabled:o,variant:s,error:i}),p=O_(m);return C.jsxs(x.Fragment,{children:[C.jsx(I_,_({ownerState:m,className:J(p.select,r),disabled:o,ref:a||n},u)),t.multiple?null:C.jsx(V_,{as:l,ownerState:m,className:p.icon})]})}),L_=N_;var zp;const F_=["children","classes","className","label","notched"],j_=U("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),$_=U("legend")(({ownerState:e,theme:t})=>_({float:"unset",width:"auto",overflow:"hidden"},!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},e.withLabel&&_({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})})));function H_(e){const{className:t,label:n,notched:r}=e,o=G(e,F_),i=n!=null&&n!=="",l=_({},e,{notched:r,withLabel:i});return C.jsx(j_,_({"aria-hidden":!0,className:t,ownerState:l},o,{children:C.jsx($_,{ownerState:l,children:i?C.jsx("span",{children:n}):zp||(zp=C.jsx("span",{className:"notranslate",children:"​"}))})}))}const W_=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],z_=e=>{const{classes:t}=e,r=Le({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},FC,t);return _({},t,r)},G_=U(Ia,{shouldForwardProp:e=>xn(e)||e==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:Ba})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return _({position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${Pn.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${Pn.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:n}},[`&.${Pn.focused} .${Pn.notchedOutline}`]:{borderColor:(e.vars||e).palette[t.color].main,borderWidth:2},[`&.${Pn.error} .${Pn.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${Pn.disabled} .${Pn.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&_({padding:"16.5px 14px"},t.size==="small"&&{padding:"8.5px 14px"}))}),U_=U(H_,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>{const t=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}}),K_=U(Va,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:Oa})(({theme:e,ownerState:t})=>_({padding:"16.5px 14px"},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0})),th=x.forwardRef(function(t,n){var r,o,i,l,a;const s=Ie({props:t,name:"MuiOutlinedInput"}),{components:u={},fullWidth:m=!1,inputComponent:p="input",label:d,multiline:v=!1,notched:g,slots:y={},type:P="text"}=s,f=G(s,W_),c=z_(s),h=vi(),S=Si({props:s,muiFormControl:h,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),M=_({},s,{color:S.color||"primary",disabled:S.disabled,error:S.error,focused:S.focused,formControl:h,fullWidth:m,hiddenLabel:S.hiddenLabel,multiline:v,size:S.size,type:P}),R=(r=(o=y.root)!=null?o:u.Root)!=null?r:G_,T=(i=(l=y.input)!=null?l:u.Input)!=null?i:K_;return C.jsx(Vc,_({slots:{root:R,input:T},renderSuffix:D=>C.jsx(U_,{ownerState:M,className:c.notchedOutline,label:d!=null&&d!==""&&S.required?a||(a=C.jsxs(x.Fragment,{children:[d," ","*"]})):d,notched:typeof g<"u"?g:!!(D.startAdornment||D.filled||D.focused)}),fullWidth:m,inputComponent:p,multiline:v,ref:n,type:P},f,{classes:_({},c,{notchedOutline:null})}))});th.muiName="Input";const Y_=th;function Q_(e){return Oe("MuiSelect",e)}const X_=Ae("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Mo=X_;var Gp;const q_=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","error","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],Z_=U("div",{name:"MuiSelect",slot:"Select",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`&.${Mo.select}`]:t.select},{[`&.${Mo.select}`]:t[n.variant]},{[`&.${Mo.error}`]:t.error},{[`&.${Mo.multiple}`]:t.multiple}]}})(J0,{[`&.${Mo.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),J_=U("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${ge(n.variant)}`],n.open&&t.iconOpen]}})(eh),eT=U("input",{shouldForwardProp:e=>sx(e)&&e!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(e,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function Up(e,t){return typeof t=="object"&&t!==null?e===t:String(e)===String(t)}function tT(e){return e==null||typeof e=="string"&&!e.trim()}const nT=e=>{const{classes:t,variant:n,disabled:r,multiple:o,open:i,error:l}=e,a={select:["select",n,r&&"disabled",o&&"multiple",l&&"error"],icon:["icon",`icon${ge(n)}`,i&&"iconOpen",r&&"disabled"],nativeInput:["nativeInput"]};return Le(a,Q_,t)},rT=x.forwardRef(function(t,n){var r;const{"aria-describedby":o,"aria-label":i,autoFocus:l,autoWidth:a,children:s,className:u,defaultOpen:m,defaultValue:p,disabled:d,displayEmpty:v,error:g=!1,IconComponent:y,inputRef:P,labelId:f,MenuProps:c={},multiple:h,name:S,onBlur:M,onChange:R,onClose:T,onFocus:D,onOpen:w,open:A,readOnly:I,renderValue:F,SelectDisplayProps:V={},tabIndex:B,value:O,variant:j="standard"}=t,H=G(t,q_),[E,b]=ep({controlled:O,default:p,name:"Select"}),[N,q]=ep({controlled:A,default:m,name:"Select"}),K=x.useRef(null),we=x.useRef(null),[X,ye]=x.useState(null),{current:ie}=x.useRef(A!=null),[ze,Pt]=x.useState(),be=rt(n,P),lt=x.useCallback(W=>{we.current=W,W&&ye(W)},[]),re=X==null?void 0:X.parentNode;x.useImperativeHandle(be,()=>({focus:()=>{we.current.focus()},node:K.current,value:E}),[E]),x.useEffect(()=>{m&&N&&X&&!ie&&(Pt(a?null:re.clientWidth),we.current.focus())},[X,a]),x.useEffect(()=>{l&&we.current.focus()},[l]),x.useEffect(()=>{if(!f)return;const W=vt(we.current).getElementById(f);if(W){const fe=()=>{getSelection().isCollapsed&&we.current.focus()};return W.addEventListener("click",fe),()=>{W.removeEventListener("click",fe)}}},[f]);const _e=(W,fe)=>{W?w&&w(fe):T&&T(fe),ie||(Pt(a?null:re.clientWidth),q(W))},Y=W=>{W.button===0&&(W.preventDefault(),we.current.focus(),_e(!0,W))},se=W=>{_e(!1,W)},Se=x.Children.toArray(s),_n=W=>{const fe=Se.find(Ge=>Ge.props.value===W.target.value);fe!==void 0&&(b(fe.props.value),R&&R(W,fe))},Rt=W=>fe=>{let Ge;if(fe.currentTarget.hasAttribute("tabindex")){if(h){Ge=Array.isArray(E)?E.slice():[];const hr=E.indexOf(W.props.value);hr===-1?Ge.push(W.props.value):Ge.splice(hr,1)}else Ge=W.props.value;if(W.props.onClick&&W.props.onClick(fe),E!==Ge&&(b(Ge),R)){const hr=fe.nativeEvent||fe,$c=new hr.constructor(hr.type,hr);Object.defineProperty($c,"target",{writable:!0,value:{value:Ge,name:S}}),R($c,W)}h||_e(!1,fe)}},At=W=>{I||[" ","ArrowUp","ArrowDown","Enter"].indexOf(W.key)!==-1&&(W.preventDefault(),_e(!0,W))},Nt=X!==null&&N,Et=W=>{!Nt&&M&&(Object.defineProperty(W,"target",{writable:!0,value:{value:E,name:S}}),M(W))};delete H["aria-invalid"];let Te,rn;const at=[];let ve=!1;(Bl({value:E})||v)&&(F?Te=F(E):ve=!0);const Kt=Se.map(W=>{if(!x.isValidElement(W))return null;let fe;if(h){if(!Array.isArray(E))throw new Error(Hn(2));fe=E.some(Ge=>Up(Ge,W.props.value)),fe&&ve&&at.push(W.props.children)}else fe=Up(E,W.props.value),fe&&ve&&(rn=W.props.children);return x.cloneElement(W,{"aria-selected":fe?"true":"false",onClick:Rt(W),onKeyUp:Ge=>{Ge.key===" "&&Ge.preventDefault(),W.props.onKeyUp&&W.props.onKeyUp(Ge)},role:"option",selected:fe,value:void 0,"data-value":W.props.value})});ve&&(h?at.length===0?Te=null:Te=at.reduce((W,fe,Ge)=>(W.push(fe),Ge<at.length-1&&W.push(", "),W),[]):Te=rn);let Tn=ze;!a&&ie&&X&&(Tn=re.clientWidth);let on;typeof B<"u"?on=B:on=d?null:0;const de=V.id||(S?`mui-component-select-${S}`:void 0),z=_({},t,{variant:j,value:E,open:Nt,error:g}),ln=nT(z),so=_({},c.PaperProps,(r=c.slotProps)==null?void 0:r.paper),uo=z1();return C.jsxs(x.Fragment,{children:[C.jsx(Z_,_({ref:lt,tabIndex:on,role:"combobox","aria-controls":uo,"aria-disabled":d?"true":void 0,"aria-expanded":Nt?"true":"false","aria-haspopup":"listbox","aria-label":i,"aria-labelledby":[f,de].filter(Boolean).join(" ")||void 0,"aria-describedby":o,onKeyDown:At,onMouseDown:d||I?null:Y,onBlur:Et,onFocus:D},V,{ownerState:z,className:J(V.className,ln.select,u),id:de,children:tT(Te)?Gp||(Gp=C.jsx("span",{className:"notranslate",children:"​"})):Te})),C.jsx(eT,_({"aria-invalid":g,value:Array.isArray(E)?E.join(","):E,name:S,ref:K,"aria-hidden":!0,onChange:_n,tabIndex:-1,disabled:d,className:ln.nativeInput,autoFocus:l,ownerState:z},H)),C.jsx(J_,{as:y,className:ln.icon,ownerState:z}),C.jsx(__,_({id:`menu-${S||""}`,anchorEl:re,open:Nt,onClose:se,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},c,{MenuListProps:_({"aria-labelledby":f,role:"listbox","aria-multiselectable":h?"true":void 0,disableListWrap:!0,id:uo},c.MenuListProps),slotProps:_({},c.slotProps,{paper:_({},so,{style:_({minWidth:Tn},so!=null?so.style:null)})}),children:Kt}))]})}),oT=rT,iT=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],lT=["root"],aT=e=>{const{classes:t}=e;return t},Lc={name:"MuiSelect",overridesResolver:(e,t)=>t.root,shouldForwardProp:e=>xn(e)&&e!=="variant",slot:"Root"},sT=U(F5,Lc)(""),uT=U(Y_,Lc)(""),cT=U(y5,Lc)(""),nh=x.forwardRef(function(t,n){const r=Ie({name:"MuiSelect",props:t}),{autoWidth:o=!1,children:i,classes:l={},className:a,defaultOpen:s=!1,displayEmpty:u=!1,IconComponent:m=WC,id:p,input:d,inputProps:v,label:g,labelId:y,MenuProps:P,multiple:f=!1,native:c=!1,onClose:h,onOpen:S,open:M,renderValue:R,SelectDisplayProps:T,variant:D="outlined"}=r,w=G(r,iT),A=c?L_:oT,I=vi(),F=Si({props:r,muiFormControl:I,states:["variant","error"]}),V=F.variant||D,B=_({},r,{variant:V,classes:l}),O=aT(B),j=G(O,lT),H=d||{standard:C.jsx(sT,{ownerState:B}),outlined:C.jsx(uT,{label:g,ownerState:B}),filled:C.jsx(cT,{ownerState:B})}[V],E=rt(n,H.ref);return C.jsx(x.Fragment,{children:x.cloneElement(H,_({inputComponent:A,inputProps:_({children:i,error:F.error,IconComponent:m,variant:V,type:void 0,multiple:f},c?{id:p}:{autoWidth:o,defaultOpen:s,displayEmpty:u,labelId:y,MenuProps:P,onClose:h,onOpen:S,open:M,renderValue:R,SelectDisplayProps:_({id:p},T)},v,{classes:v?ft(j,v.classes):j},d?d.props.inputProps:{})},f&&c&&V==="outlined"?{notched:!0}:{},{ref:E,className:J(H.props.className,a,O.root)},!d&&{variant:V},w))})});nh.muiName="Select";const dT=nh;function ro(e){const[t,n]=x.useState();x.useEffect(()=>{var o;(o=e.onChange)==null||o.call(e,e.items[0].value)},[]);function r(o){var i;n(o.target.value),(i=e.onChange)==null||i.call(e,o.target.value)}return C.jsxs(T5,{className:"w-fit !min-w-[8rem]",children:[C.jsx(G5,{id:e.id+"-label",children:e.label}),C.jsx(dT,{labelId:e.id+"-label",id:e.id,value:e.value??t??e.items[0].value,label:e.label,onChange:r,children:e.items.map(o=>C.jsx(k_,{value:o.value,children:o.label},o.value))})]})}function Fc(e){return C.jsx("div",{className:"flex flex-row flex-wrap",style:{gap:(e.gap??0)+"rem"},children:e.children})}function pT(){return{MagazineSize:1,StartingAmmo:1,RateOfFire:1,EnvPiercing:1,AimTimeMult:1,MovementAimPenaltyMult:1,FirstShotRecoilMult:1,VerticalRecoil:1,RecoilLeft:1,RecoilRight:1,MaxSpreadBloom:1,SpreadBloom:1,BloomDecayRate:1,ProjectileSpread:1,AimBulletSpread:1,ProjectilesPerRound:1,ChamberTime:1,BulletSpeed:1,BulletDamage:1,FlakMult:1,ArmorPiercing:1,MinDamage:1,MinRange:1,MaxRange:1,BulletSpread:1,ReloadTime:1}}class rh{}Kn(rh,"attritionJson",`{
    "Infantry/Weapons/AK-AS": {
        "ToolName": "AK-AS",
        "ToolType": "BaseGun",
        "ToolCategory": "Primary",
        "Action": "Semiautomatic",
        "MagazineSize": 6,
        "StartingAmmo": 42,
        "RateOfFire": 1.6,
        "EnvPiercing": 0.5,
        "AimTimeMult": 1,
        "MovementAimPenaltyMult": 1,
        "FirstShotRecoilMult": 1,
        "VerticalRecoil": 1.5,
        "RecoilLeft": -0.2,
        "RecoilRight": 0.8,
        "BulletSpeed": 1200,
        "BulletDamage": 150,
        "MinDamage": 100,
        "MinRange": 25,
        "MaxRange": 150,
        "MaxSpreadBloom": 5,
        "SpreadBloom": 5,
        "BloomDecayRate": 2,
        "ProjectileSpread": 2.5,
        "BulletSpread": 1,
        "AimBulletSpread": 0.4,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 32,
        "ReloadTime": 1.75,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 1,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Ammo",
                "Type": "Shotgun_Ammo",
                "Default": "Ammo_Buckshot"
            },
            {
                "Slot": "Muzzle",
                "Type": "Shotgun_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Foregrip",
                "Type": "Rifle_Fore_Grip",
                "Default": "No_Grip"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7197537404"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891495"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891571"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781327"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/AKR": {
        "ToolName": "AKR",
        "ToolType": "BaseGun",
        "ToolCategory": "Primary",
        "Action": "Automatic",
        "MagazineSize": 30,
        "StartingAmmo": 217,
        "RateOfFire": 10.833333333333334,
        "BulletSpeed": 1600,
        "AimTimeMult": 1,
        "MovementAimPenaltyMult": 1,
        "FirstShotRecoilMult": 2,
        "VerticalRecoil": 0.25,
        "RecoilLeft": 0.15,
        "RecoilRight": 0.05,
        "MaxSpreadBloom": 5.5,
        "SpreadBloom": 0.06666666666666667,
        "BloomDecayRate": 1,
        "EnvPiercing": 1,
        "BulletDamage": 26.5,
        "MinDamage": 18,
        "MinRange": 60,
        "MaxRange": 600,
        "BulletSpread": 3,
        "AimBulletSpread": 0.275,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 1.75,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 0.5,
        "FireSoundDistanceCutoff": 500,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Foregrip",
                "Type": "Rifle_Fore_Grip",
                "Default": "No_Grip"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7197537518",
                    "rbxassetid://7197537457",
                    "rbxassetid://7197537193",
                    "rbxassetid://7197537251"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891615"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891661"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781538"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/AK_Type_E": {
        "ToolName": "AK Type E",
        "ToolType": "BaseGun",
        "ToolCategory": "Equipment",
        "Action": "Semiautomatic",
        "MagazineSize": 0,
        "StartingAmmo": 12,
        "RateOfFire": 1.5,
        "AimTimeMult": 1.25,
        "MovementAimPenaltyMult": 0.5,
        "FirstShotRecoilMult": 1,
        "VerticalRecoil": 1.5,
        "RecoilLeft": -0.15,
        "RecoilRight": 1,
        "MaxSpreadBloom": 10,
        "SpreadBloom": 0.75,
        "BloomDecayRate": 0.5,
        "BulletSpeed": 240,
        "ArmorPiercing": 0.6,
        "EnvPiercing": 0.5,
        "BulletDamage": 100,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 0.52,
        "TerrainIntensity": 1.75,
        "BulletSpread": 3,
        "AimBulletSpread": 0.4,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Explosive",
        "ProjectilesPerRound": 1,
        "ReloadTime": 1,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 1,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Ammo",
                "Type": "Ammo_40mm",
                "Default": "HE_40mm"
            },
            {
                "Slot": "Foregrip",
                "Type": "Rifle_Fore_Grip",
                "Default": "No_Grip"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7203385466"
                ],
                "MinDistance": 50,
                "MaxDistance": 250,
                "Volume": 1
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 0
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891446"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891410"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781842"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/AT_Mines": {
        "ToolName": "AT Mines",
        "ToolType": "PlaceableDeployable",
        "ToolCategory": "Equipment",
        "NoAim": true,
        "DeployableRange": 10,
        "CanActivate": false,
        "Charges": 4,
        "MaxDeployables": 8,
        "LimitType": "Destroy",
        "StructureId": "AT_Mine",
        "BlueprintId": "Default",
        "Attachments": [
            {
                "Slot": "Blueprint",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ]
    },
    "Infantry/Weapons/AWM": {
        "ToolName": "AWM",
        "ToolType": "BaseGun",
        "ToolCategory": "Primary",
        "Action": "Semiautomatic",
        "MagazineSize": 5,
        "StartingAmmo": 24,
        "RateOfFire": 0.75,
        "AimTimeMult": 1.5,
        "MovementAimPenaltyMult": 1.5,
        "FirstShotRecoilMult": 1,
        "VerticalRecoil": 1.1,
        "RecoilLeft": 0.2,
        "RecoilRight": 0.2,
        "MaxSpreadBloom": 10,
        "SpreadBloom": 0.55,
        "BloomDecayRate": 0.95,
        "EnvPiercing": 1,
        "BulletDamage": 110,
        "MinDamage": 55,
        "MinRange": 15,
        "MaxRange": 400,
        "BulletSpeed": 2500,
        "BulletSpread": 4,
        "AimBulletSpread": 0.015,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 2,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 1.25,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Scope_12x"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Foregrip",
                "Type": "Rifle_Fore_Grip",
                "Default": "No_Grip"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7202781161",
                    "rbxassetid://7202781441",
                    "rbxassetid://7202781111",
                    "rbxassetid://7202781041"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891495"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891571"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781233"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/Dynamite": {
        "ToolName": "Dynamite",
        "ToolType": "ThrowableDeployable",
        "ToolCategory": "Equipment",
        "NoAim": true,
        "ProjectileModel": "Dynamite",
        "ProjectileHitModule": "Deployable",
        "Refillable": true,
        "DeployableRange": 10,
        "CanActivate": false,
        "Charges": 2,
        "MaxDeployables": 1,
        "LimitType": "Prevent",
        "StructureId": "Dynamite",
        "BlueprintId": "Default",
        "Attachments": [
            {
                "Slot": "Blueprint",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ]
    },
    "Infantry/Weapons/MG-42": {
        "ToolName": "MG-42",
        "ToolType": "BaseGun",
        "ToolCategory": "Equipment",
        "Action": "Automatic",
        "CanDeploy": true,
        "DeployedAim": true,
        "MagazineSize": 200,
        "StartingAmmo": 603,
        "RateOfFire": 13.333333333333334,
        "BulletSpeed": 1600,
        "AimTimeMult": 2,
        "MovementAimPenaltyMult": 3.5,
        "FirstShotRecoilMult": 1.1,
        "VerticalRecoil": 0.8,
        "RecoilLeft": 0.1,
        "RecoilRight": 0.5,
        "MaxSpreadBloom": 15,
        "SpreadBloom": 0.1,
        "BloomDecayRate": 0.75,
        "EnvPiercing": 1,
        "BulletDamage": 32.5,
        "MinDamage": 20.5,
        "MinRange": 50,
        "MaxRange": 800,
        "BulletSpread": 7.5,
        "AimBulletSpread": 0.4,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 3.5,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 1.5,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7197537518",
                    "rbxassetid://7197537457",
                    "rbxassetid://7197537193",
                    "rbxassetid://7197537251"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891495"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891571"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781273"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/Mortar": {
        "ToolName": "Mortar",
        "ToolType": "TrajectoryGun",
        "ToolCategory": "Equipment",
        "AimZoom": 1,
        "NoAim": true,
        "CanDeploy": true,
        "DeployedFire": true,
        "StationaryDeploy": true,
        "ThirdPersonCameraOffset": {
            "x": 0,
            "y": 5,
            "z": 5
        },
        "FirstPersonCameraOffset": {
            "x": 0,
            "y": 2.5,
            "z": 1
        },
        "DeployOffset": -4,
        "DeployRayLength": 5,
        "DeployPollWidth": 2,
        "Action": "Semiautomatic",
        "BulletDamage": 100,
        "ArmorPiercing": 0.75,
        "ExplosionRadius": 8,
        "ExplosionIntensity": 1.25,
        "MagazineSize": 0,
        "StartingAmmo": 5,
        "MovementAimPenaltyMult": 0,
        "FirstShotRecoilMult": 2.25,
        "VerticalRecoil": 1,
        "RecoilLeft": 0.225,
        "RecoilRight": 0.15,
        "MaxSpreadBloom": 10,
        "SpreadBloom": 1,
        "BloomDecayRate": 0.25,
        "BulletSpread": 0.25,
        "AimBulletSpread": 0,
        "RateOfFire": 3.3333333333333335,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Explosive",
        "ReloadTime": 1,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 0.5,
        "WalkSpeedMult": 0,
        "BulletSpeed": 200,
        "ProjectilesPerRound": 1,
        "ProjectileLifeTime": 40,
        "AimMethod": "Indirect",
        "Attachments": [
            {
                "Slot": "Ammo",
                "Type": "Mortar_Ammo",
                "Default": "Stock_Shells"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://388710371"
                ],
                "MinDistance": 50,
                "MaxDistance": 600,
                "Volume": 1
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://388710371"
                ],
                "MinDistance": 50,
                "MaxDistance": 1000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891495"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891571"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781273"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/Pistol": {
        "ToolName": "Pistol",
        "ToolType": "BaseGun",
        "ToolCategory": "Primary",
        "Action": "Semiautomatic",
        "MagazineSize": 16,
        "StartingAmmo": 68,
        "RateOfFire": 8.333333333333334,
        "BulletSpeed": 1250,
        "AimTimeMult": 0.5,
        "FirstShotRecoilMult": 1,
        "VerticalRecoil": 0.45,
        "RecoilLeft": 0.3,
        "RecoilRight": 0.3,
        "MovementAimPenaltyMult": 0,
        "MaxSpreadBloom": 5.5,
        "SpreadBloom": 0.1,
        "BloomDecayRate": 1,
        "EnvPiercing": 1,
        "BulletDamage": 27,
        "MinDamage": 12.1,
        "MinRange": 60,
        "MaxRange": 300,
        "BulletSpread": 0.7,
        "AimBulletSpread": 0.35,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 1.3,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 0.3,
        "FireSoundDistanceCutoff": 500,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7197537518",
                    "rbxassetid://7197537457",
                    "rbxassetid://7197537193",
                    "rbxassetid://7197537251"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891615"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891661"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781538"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/PTRS-41": {
        "ToolName": "PTRS-41",
        "ToolType": "BaseGun",
        "ToolCategory": "Equipment",
        "Action": "BoltAction",
        "CanDeploy": true,
        "DeployedAim": true,
        "MagazineSize": 5,
        "StartingAmmo": 12,
        "RateOfFire": 0.5,
        "BulletSpeed": 2200,
        "AimTimeMult": 2,
        "MovementAimPenaltyMult": 4,
        "FirstShotRecoilMult": 1,
        "VerticalRecoil": 10,
        "RecoilLeft": 1,
        "RecoilRight": 1,
        "MaxSpreadBloom": 15,
        "SpreadBloom": 1,
        "BloomDecayRate": 0.5,
        "EnvPiercing": 2,
        "ArmorPiercing": 0.175,
        "BulletDamage": 200,
        "MinDamage": 65,
        "MinRange": 800,
        "MaxRange": 1800,
        "BulletSpread": 7.5,
        "AimBulletSpread": 0.1,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 3,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 1.5,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7202781161",
                    "rbxassetid://7202781441",
                    "rbxassetid://7202781111",
                    "rbxassetid://7202781041"
                ],
                "MinDistance": 50,
                "MaxDistance": 1000,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 650,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 5000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891495"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891571"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781233"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/RPG-7": {
        "ToolName": "RPG-7",
        "ToolType": "BaseGun",
        "ToolCategory": "Equipment",
        "Action": "Semiautomatic",
        "MagazineSize": 0,
        "StartingAmmo": 4,
        "RateOfFire": 3,
        "AimTimeMult": 1.75,
        "MovementAimPenaltyMult": 2.5,
        "FirstShotRecoilMult": 1,
        "VerticalRecoil": 2.25,
        "RecoilLeft": -0.1,
        "RecoilRight": 1,
        "MaxSpreadBloom": 10,
        "SpreadBloom": 0.75,
        "BloomDecayRate": 0.5,
        "EnvPiercing": 1,
        "ArmorPiercing": 0.7,
        "BulletDamage": 175,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 1,
        "FlakMult": 5,
        "BulletSpeed": 300,
        "BulletSpread": 4,
        "AimBulletSpread": 0.35,
        "ProjectileType": "RocketProjectile",
        "ProjectileHitModule": "Explosive",
        "ProjectilesPerRound": 1,
        "ReloadTime": 2.5,
        "ReloadStages": [
            0.35,
            0.75
        ],
        "ChamberTime": 2,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Rockets",
                "Type": "RPG_Ammo",
                "Default": "RPG_Stock"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://134012322"
                ],
                "MinDistance": 50,
                "MaxDistance": 300,
                "Volume": 1
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 0
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891446"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891410"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781842"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/RPK": {
        "ToolName": "RPK",
        "ToolType": "BaseGun",
        "ToolCategory": "Primary",
        "Action": "Automatic",
        "MagazineSize": 75,
        "StartingAmmo": 304,
        "RateOfFire": 10,
        "AimTimeMult": 1.5,
        "MovementAimPenaltyMult": 2,
        "FirstShotRecoilMult": 1.35,
        "VerticalRecoil": 0.35,
        "RecoilLeft": 0.2,
        "RecoilRight": 0.1,
        "MaxSpreadBloom": 10,
        "SpreadBloom": 0.05,
        "BloomDecayRate": 0.85,
        "BulletSpeed": 1650,
        "EnvPiercing": 1,
        "BulletDamage": 22.5,
        "MinDamage": 18,
        "MinRange": 60,
        "MaxRange": 800,
        "BulletSpread": 3.25,
        "AimBulletSpread": 0.2,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 1.75,
        "ReloadStages": [
            0.15,
            0.75
        ],
        "ChamberTime": 1,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Foregrip",
                "Type": "Rifle_Fore_Grip",
                "Default": "Bipod"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7197537518",
                    "rbxassetid://7197537457",
                    "rbxassetid://7197537193",
                    "rbxassetid://7197537251"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891446"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891410"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781842"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/SMG": {
        "ToolName": "SMG",
        "ToolType": "BaseGun",
        "ToolCategory": "Primary",
        "Action": "Automatic",
        "MagazineSize": 30,
        "StartingAmmo": 217,
        "RateOfFire": 15.833333333333334,
        "BulletSpeed": 1200,
        "AimTimeMult": 0.75,
        "FirstShotRecoilMult": 2,
        "VerticalRecoil": 0.35,
        "RecoilLeft": 0.2,
        "RecoilRight": 0.4,
        "MovementAimPenaltyMult": 0.25,
        "MaxSpreadBloom": 5.5,
        "SpreadBloom": 0.03333333333333333,
        "BloomDecayRate": 1,
        "EnvPiercing": 1,
        "BulletDamage": 18,
        "MinDamage": 12,
        "MinRange": 60,
        "MaxRange": 400,
        "BulletSpread": 1,
        "AimBulletSpread": 0.5,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 2.4,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 0.25,
        "FireSoundDistanceCutoff": 500,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7197537518",
                    "rbxassetid://7197537457",
                    "rbxassetid://7197537193",
                    "rbxassetid://7197537251"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 3500,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891615"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891661"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781538"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/SVD": {
        "ToolName": "SVD",
        "ToolType": "BaseGun",
        "ToolCategory": "Primary",
        "Action": "Semiautomatic",
        "MagazineSize": 10,
        "StartingAmmo": 44,
        "RateOfFire": 2.5,
        "AimTimeMult": 1.5,
        "MovementAimPenaltyMult": 1.5,
        "FirstShotRecoilMult": 1,
        "VerticalRecoil": 0.95,
        "RecoilLeft": 0.2,
        "RecoilRight": 0.07,
        "MaxSpreadBloom": 10,
        "SpreadBloom": 0.4,
        "BloomDecayRate": 0.95,
        "EnvPiercing": 1,
        "BulletDamage": 55,
        "MinDamage": 40,
        "MinRange": 40,
        "MaxRange": 500,
        "BulletSpeed": 2000,
        "BulletSpread": 3.5,
        "AimBulletSpread": 0.075,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 2,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 0.85,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Scope_12x"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Foregrip",
                "Type": "Rifle_Fore_Grip",
                "Default": "No_Grip"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7197537404"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891352"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891530"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202783156"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Vehicles/Attack_Helicopter": {
        "Name": "Attack Helicopter",
        "HUDType": "Helicopter",
        "VehicleGroup": "AirHelicopterCombat",
        "ControllerType": "Helicopter",
        "ScrapYieldMultiplier": 4,
        "BaseCost": 2000,
        "UsesFlak": true,
        "DestructionBonus": 5,
        "ControlProperties": {
            "MitigateVTOL": true,
            "ImpulseTolerance": 1250,
            "ImpulseToleranceVTOL": 4500,
            "DeathImpulse": 10000,
            "MaxLateralSpeed": 135,
            "EngineResponsiveness": 2.25,
            "BaseThrust": 0.9,
            "ThrustToWeight": 2.5,
            "ForwardThrust": 0.25,
            "DragLateral": 2.95,
            "DragUp": 3.9,
            "DragDown": 3.35,
            "TorqueResistance": 0.5,
            "MinRollAngle": 45,
            "MaxRollAngle": 85,
            "MinPitchAngle": 65,
            "MaxPitchAngle": 85,
            "PitchSpeed": 90,
            "YawSpeed": 65,
            "RollSpeed": 105,
            "RotorAngularVelocity": 15,
            "EngineVolume": 4.25,
            "StartupTime": 4.25,
            "EngineBasePitch": 0.95
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": false,
            "ShowControllerGui": false,
            "CameraLockedToRoot": true,
            "Mode": "ThirdPerson",
            "RootPart": "Turret",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 40,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "Sections": {
            "Hull": {
                "Armor": 7.5,
                "Health": 175,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "ThrustToWeight_mult": 0,
                        "YawSpeed_mult": 0,
                        "RotorAngularVelocity_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Rotor": {
                "Armor": 7.5,
                "Health": 100,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "DragLateral_mult": 1.1,
                        "ThrustToWeight_mult": 0.75,
                        "YawSpeed_mult": 0.5,
                        "RollSpeed_mult": 0.5,
                        "RotorAngularVelocity_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "DragLateral_mult": 1.25,
                        "ThrustToWeight_mult": 0.25,
                        "YawSpeed_mult": 0.2,
                        "RollSpeed_mult": 0.2,
                        "RotorAngularVelocity_mult": 0.25
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            }
        },
        "SeatData": {
            "Driver": {
                "DamageMultiplier": 0.4,
                "ExplosionMultiplier": 0
            },
            "Gunner": {
                "DamageMultiplier": 0.4,
                "ExplosionMultiplier": 0
            }
        },
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "Attack_Heli_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Weapons",
                "Type": "Aircraft_Mounted_Med",
                "Default": "Aircraft_Rockets",
                "Section": "Weapons",
                "Owner": "Driver"
            },
            {
                "Slot": "Gunner Turret",
                "Type": "Aircraft_Turret_Small",
                "Default": "Air_15mm_Turret",
                "Section": "Gunner",
                "Owner": "Gunner"
            },
            {
                "Slot": "Rotor",
                "Type": "Vehicle_Rotor",
                "Default": "Default_Rotor",
                "Section": "Rotor"
            }
        ]
    },
    "Vehicles/Attack_Jet": {
        "Name": "Attack Jet",
        "HUDType": "Helicopter",
        "ControllerType": "Jet",
        "VehicleGroup": "AirJet",
        "GunThirdPersonOffset": 5,
        "ScrapYieldMultiplier": 5,
        "BaseCost": 3000,
        "UsesFlak": true,
        "DestructionBonus": 8,
        "ControlProperties": {
            "JetEffectSpeedScale": 40,
            "HardMaxSpeed": 500,
            "SoftMaxSpeed": 400,
            "HardMaxAltitude": 3000,
            "SoftMaxAltitude": 2400,
            "ImpulseTolerance": 3200,
            "DeathImpulse": 10000,
            "EngineAcceleration": 0.16,
            "BaseThrottle": 450000,
            "AngleOfAttack": 10,
            "Drag": 3,
            "Lift": 2.5,
            "PitchSpeed": 1,
            "RollSpeed": 1.6,
            "YawSpeed": 0.4,
            "Torque": 15,
            "EngineVolume": 1.5,
            "StartupTime": 0.1,
            "EngineBasePitch": 1.125
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": true,
            "ShowControllerGui": true,
            "FreeRotation": true,
            "CameraLockedToRoot": false,
            "CameraReturnsToCenter": true,
            "OrientationLockThreshold": 1,
            "Mode": "ThirdPerson",
            "RootPart": "Vehicle",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 80,
            "MinZoom": 25,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "Sections": {
            "Hull": {
                "Armor": 11.5,
                "Health": 200,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "PitchSpeed_mult": 0,
                        "YawSpeed_mult": 0,
                        "RollSpeed_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Wings": {
                "Armor": 7.5,
                "Health": 75,
                "HullDamageMult": 0.75,
                "Damaged": {
                    "Properties": {
                        "PitchSpeed_mult": 0.65,
                        "YawSpeed_mult": 0.7,
                        "RollSpeed_mult": 0.7
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "PitchSpeed_mult": 0.3,
                        "YawSpeed_mult": 0.35,
                        "RollSpeed_mult": 0.35
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            },
            "Engine": {
                "Armor": 8.5,
                "Health": 100,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "BaseThrottle_mult": 0.7
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "BaseThrottle_mult": 0.35
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            }
        },
        "SeatData": {
            "Driver": {
                "DamageMultiplier": 0.5,
                "ExplosionMultiplier": 0
            }
        },
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "Aircraft_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Cannon",
                "Type": "Aircraft_Turret_Med",
                "Default": "Air_30mm_Turret",
                "Owner": "Driver",
                "Section": "Turret",
                "Priority": 0
            },
            {
                "Slot": "Mounted Weapons",
                "Type": "Attack_Jet_Mounted",
                "Default": "Jet_Rocket_Pods",
                "Owner": "Driver",
                "Section": "Weapons",
                "Priority": 1,
                "IgnoreName": true
            },
            {
                "Slot": "Engines",
                "Type": "Jet_Engines",
                "Section": "Engine",
                "Default": "Default_Engines"
            }
        ]
    },
    "Vehicles/Battle_Tank": {
        "Name": "Tank",
        "ControllerType": "TankChassis",
        "VehicleGroup": "LandHeavyArmor",
        "ScrapYieldMultiplier": 3,
        "BaseCost": 1750,
        "DestructionBonus": 5,
        "ControlProperties": {
            "DrivingTorque": 1000000,
            "BrakingTorque": 1000000,
            "MaxSpeed": 40,
            "ReverseSpeed": 25,
            "MaxSteer": 0.5,
            "StrutSpringDampingFront": 7000,
            "StrutSpringDampingRear": 6000,
            "StrutSpringStiffnessFront": 225000,
            "StrutSpringStiffnessRear": 225000,
            "TorsionSpringDamping": 100,
            "TorsionSpringStiffness": 10000,
            "WheelFriction": 1.6,
            "TreadSoundPitch": 0.9,
            "TreadSoundVolume": 2.5,
            "EngineSoundPitch": 0.7,
            "EngineSoundVolume": 1.6
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": true,
            "ShowControllerGui": false,
            "CameraLockedToRoot": false,
            "Mode": "ThirdPerson",
            "RootPart": "Turret",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 40,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "Sections": {
            "Hull": {
                "Armor": 20,
                "Health": 325,
                "HullDamageMult": 1,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "MaxSteer_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Engine": {
                "Armor": 20,
                "Health": 125,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "DrivingTorque_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0,
                        "MaxSteer_mult": 0.75
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            },
            "Treads": {
                "Armor": 15,
                "HullDamageMult": 0.8,
                "Health": 150,
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0.4,
                        "ReverseSpeed_mult": 0.4
                    },
                    "Effects": {
                        "RemoveTagged": "Treads"
                    }
                }
            }
        },
        "SeatData": {
            "Driver": {
                "DamageMultiplier": 0,
                "ExplosionMultiplier": 0
            },
            "Gunner": {
                "DamageMultiplier": 0.75
            }
        },
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "Tank_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Turret",
                "Type": "Ground_Turret_Large",
                "Default": "Main_Cannon",
                "Owner": "Driver",
                "Section": "Turret",
                "Priority": 0
            },
            {
                "Slot": "Engine",
                "Type": "LTV_Engine",
                "Default": "Default_Engine",
                "Section": "Engine"
            },
            {
                "Slot": "Treads",
                "Type": "Tank_Treads",
                "Default": "Default_Treads",
                "Section": "Treads"
            }
        ]
    },
    "Vehicles/Combat_Truck": {
        "Name": "Truck",
        "ControllerType": "CarChassis",
        "VehicleGroup": "LandArtillery",
        "GlobalDamageMultiplier": 0.75,
        "GloblExplosionMultiplier": 0,
        "ScrapYieldMultiplier": 2,
        "BaseCost": 400,
        "DestructionBonus": 2,
        "ControlProperties": {
            "DrivingTorque": 215000,
            "BrakingTorque": 220000,
            "MaxSpeed": 50,
            "ReverseSpeed": 30,
            "MaxAllowedSpeed": 70,
            "MaxSteer": 0.5,
            "StrutSpringDampingFront": 7000,
            "StrutSpringDampingRear": 5000,
            "StrutSpringStiffnessFront": 225000,
            "StrutSpringStiffnessRear": 350000,
            "TorsionSpringDamping": 100,
            "TorsionSpringStiffness": 10000,
            "WheelFriction": 1.6,
            "IgnitionTime": 3,
            "EngineIgnitionVolume": 6.5,
            "EngineIdlePitch": 0.9,
            "EngineIdleVolume": 2,
            "EngineAccelPitch": 0.9,
            "EngineAccelVolume": 0.7
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": true,
            "ShowControllerGui": false,
            "CameraLockedToRoot": false,
            "Mode": "ThirdPerson",
            "RootPart": "Turret",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 40,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "SpecialAction": {
            "Toggle_Deployed": {
                "Name": "Toggle Artillery Deployed",
                "Type": "Method",
                "Object": "ToggleDeployAttachment",
                "Val": "Truck_Mounted"
            },
            "Toggle_PistonFL": {
                "Name": "Toggle Deployed Piston",
                "Type": "Constraint",
                "Object": "DeployPistonFL",
                "Enabled": {
                    "TargetPosition": -1.75
                },
                "Disabled": {
                    "TargetPosition": 0
                }
            },
            "Toggle_PistonFR": {
                "Name": "Toggle Deployed Piston",
                "Type": "Constraint",
                "Object": "DeployPistonFR",
                "Enabled": {
                    "TargetPosition": -1.75
                },
                "Disabled": {
                    "TargetPosition": 0
                }
            },
            "Toggle_PistonRL": {
                "Name": "Toggle Deployed Piston",
                "Type": "Constraint",
                "Object": "DeployPistonRL",
                "Enabled": {
                    "TargetPosition": -1.75
                },
                "Disabled": {
                    "TargetPosition": 0
                }
            },
            "Toggle_PistonRR": {
                "Name": "Toggle Deployed Piston",
                "Type": "Constraint",
                "Object": "DeployPistonRR",
                "Enabled": {
                    "TargetPosition": -1.75
                },
                "Disabled": {
                    "TargetPosition": 0
                }
            }
        },
        "Sections": {
            "Hull": {
                "Armor": 10,
                "Health": 150,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "MaxSteer_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Engine": {
                "Armor": 10.5,
                "Health": 75,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "MaxSpeed_mult": 0.75,
                        "ReverseSpeed_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            },
            "Wheels": {
                "Armor": 6,
                "Health": 65,
                "HullDamageMult": 0.8,
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0.4,
                        "ReverseSpeed_mult": 0.4
                    },
                    "Effects": {
                        "RemoveTagged": "Tires"
                    }
                }
            }
        },
        "SeatData": [],
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "Truck_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Truck Bed",
                "Type": "Truck_Bed",
                "Default": "Large_Turret_Mount"
            },
            {
                "Slot": "Engine",
                "Type": "LTV_Engine",
                "Default": "Default_Engine",
                "Section": "Engine"
            },
            {
                "Slot": "Wheels",
                "Type": "LTV_Wheels",
                "Default": "Default_Wheels",
                "Section": "Wheels"
            }
        ]
    },
    "Vehicles/Fighter_Plane": {
        "Name": "Fighter",
        "HUDType": "Helicopter",
        "ControllerType": "Plane",
        "VehicleGroup": "AirFighter",
        "GlobalDamageMultiplier": 0.5,
        "GloblExplosionMultiplier": 0,
        "GunThirdPersonOffset": 5,
        "ScrapYieldMultiplier": 3,
        "BaseCost": 1500,
        "UsesFlak": true,
        "DestructionBonus": 5,
        "ControlProperties": {
            "JetEffectSpeedScale": 40,
            "HardMaxSpeed": 275,
            "SoftMaxSpeed": 200,
            "HardMaxAltitude": 2250,
            "SoftMaxAltitude": 1500,
            "ImpulseTolerance": 1600,
            "DeathImpulse": 5000,
            "BaseThrottle": 45000,
            "AngleOfAttack": 7.5,
            "Drag": 0.9,
            "Lift": 2,
            "PitchSpeed": 1,
            "RollSpeed": 2,
            "YawSpeed": 0.5,
            "Torque": 20,
            "EngineAcceleration": 0.16,
            "PropellerAngularVelocity": 40,
            "EngineVolume": 1.5,
            "StartupTime": 0.1,
            "EngineBasePitch": 1.125
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": true,
            "ShowControllerGui": true,
            "FreeRotation": true,
            "CameraLockedToRoot": false,
            "CameraReturnsToCenter": true,
            "OrientationLockThreshold": 1,
            "Mode": "ThirdPerson",
            "RootPart": "Vehicle",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 65,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "Sections": {
            "Hull": {
                "Armor": 7.5,
                "Health": 175,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "PitchSpeed_mult": 0,
                        "YawSpeed_mult": 0,
                        "RollSpeed_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Engine": {
                "Armor": 7.5,
                "Health": 85,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "BaseThrottle_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "BaseThrottle_mult": 0.5
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            },
            "Wings": {
                "Armor": 7.5,
                "Health": 65,
                "HullDamageMult": 0.75,
                "Damaged": {
                    "Properties": {
                        "PitchSpeed_mult": 0.8,
                        "YawSpeed_mult": 0.8,
                        "RollSpeed_mult": 0.85
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "PitchSpeed_mult": 0.35,
                        "YawSpeed_mult": 0.35,
                        "RollSpeed_mult": 0.35
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            }
        },
        "SeatData": [],
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "Plane_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Hardpoints",
                "Type": "Plane_Hardpoints",
                "Default": "Med_Machine_Guns",
                "Owner": "Driver",
                "Section": "Weapons",
                "Priority": 0
            },
            {
                "Slot": "Under Mount",
                "Type": "Plane_Under_Mount",
                "Default": "Empty",
                "Owner": "Driver",
                "Section": "Weapons",
                "Priority": 1
            },
            {
                "Slot": "Engine",
                "Type": "Plane_Engine",
                "Section": "Engine",
                "Default": "Default_Engine"
            }
        ]
    },
    "Vehicles/Light_Helicopter": {
        "Name": "Helicopter",
        "HUDType": "Helicopter",
        "ControllerType": "Helicopter",
        "VehicleGroup": "AirHelicopterCombat",
        "GlobalDamageMultiplier": 0.75,
        "ScrapYieldMultiplier": 2,
        "TransportVehicle": true,
        "BaseCost": 1250,
        "UsesFlak": true,
        "DestructionBonus": 4,
        "ControlProperties": {
            "MitigateVTOL": true,
            "ImpulseTolerance": 1500,
            "ImpulseToleranceVTOL": 6000,
            "DeathImpulse": 8000,
            "MaxLateralSpeed": 110,
            "EngineResponsiveness": 4,
            "BaseThrust": 0.9,
            "ThrustToWeight": 3,
            "ForwardThrust": 0,
            "DragLateral": 2.4,
            "DragUp": 3.2,
            "DragDown": 2.75,
            "TorqueResistance": 0.75,
            "MinRollAngle": 65,
            "MinPitchAngle": 65,
            "MaxRollAngle": 85,
            "MaxPitchAngle": 85,
            "PitchSpeed": 120,
            "YawSpeed": 75,
            "RollSpeed": 150,
            "RotorAngularVelocity": 20,
            "EngineVolume": 2,
            "StartupTime": 3.5,
            "EngineBasePitch": 1.075
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": false,
            "ShowControllerGui": false,
            "CameraLockedToRoot": true,
            "Mode": "ThirdPerson",
            "RootPart": "Vehicle",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 30,
            "MinZoom": 10,
            "PivotOffset": {
                "x": 0,
                "y": 4
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "Sections": {
            "Hull": {
                "Armor": 5,
                "Health": 130,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "ThrustToWeight_mult": 0,
                        "YawSpeed_mult": 0,
                        "RotorAngularVelocity_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Rotor": {
                "Armor": 5,
                "Health": 60,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "DragLateral_mult": 1.1,
                        "ThrustToWeight_mult": 0.75,
                        "YawSpeed_mult": 0.5,
                        "RollSpeed_mult": 0.5,
                        "RotorAngularVelocity_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "DragLateral_mult": 1.25,
                        "ThrustToWeight_mult": 0.25,
                        "YawSpeed_mult": 0.2,
                        "RollSpeed_mult": 0.2,
                        "RotorAngularVelocity_mult": 0.25
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            }
        },
        "SeatData": {
            "Driver": {
                "DamageMultiplier": 0.5,
                "ExplosionMultiplier": 0
            }
        },
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "Light_Heli_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Weapons",
                "Type": "Aircraft_Mounted_Small",
                "Default": "Aircraft_Miniguns",
                "Section": "Weapons"
            },
            {
                "Slot": "Rotor",
                "Type": "Vehicle_Rotor",
                "Default": "Default_Rotor",
                "Section": "Rotor"
            }
        ]
    },
    "Vehicles/Light_Tank": {
        "Name": "APC",
        "ControllerType": "CarChassis",
        "VehicleGroup": "LandHeavyArmor",
        "GlobalDamageMultiplier": 0.75,
        "ScrapYieldMultiplier": 2,
        "BaseCost": 1200,
        "DestructionBonus": 3,
        "ControlProperties": {
            "DrivingTorque": 1290000,
            "BrakingTorque": 1320000,
            "MaxSpeed": 55,
            "ReverseSpeed": 30,
            "MaxAllowedSpeed": 65,
            "MaxSteer": 0.6,
            "StrutSpringDampingFront": 20000,
            "StrutSpringDampingRear": 20000,
            "StrutSpringStiffnessFront": 170000,
            "StrutSpringStiffnessRear": 170000,
            "TorsionSpringDamping": 200,
            "TorsionSpringStiffness": 5000,
            "WheelFriction": 1.6,
            "IgnitionTime": 0.5,
            "EngineIgnitionVolume": 0,
            "EngineIdlePitch": 0.6,
            "EngineIdleVolume": 3,
            "EngineAccelPitch": 0.85,
            "EngineAccelVolume": 2
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": true,
            "ShowControllerGui": false,
            "CameraLockedToRoot": false,
            "Mode": "ThirdPerson",
            "RootPart": "Turret",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 40,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "SpecialAction": {
            "Toggle_Hatch": {
                "Name": "Toggle Back Hatch Open",
                "Type": "Constraint",
                "Object": "BackDoorHinge",
                "Enabled": {
                    "TargetAngle": 50
                },
                "Disabled": {
                    "TargetAngle": 0
                }
            }
        },
        "Sections": {
            "Hull": {
                "Armor": 16,
                "Health": 250,
                "HullDamageMult": 1,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "MaxSteer_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Engine": {
                "Armor": 15,
                "Health": 125,
                "HullDamageMult": 1,
                "Damaged": {
                    "Properties": {
                        "MaxSpeed_mult": 0.75,
                        "ReverseSpeed_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0.5
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            },
            "Wheels": {
                "Armor": 12.5,
                "Health": 150,
                "HullDamageMult": 0.8,
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0.4,
                        "ReverseSpeed_mult": 0.4
                    },
                    "Effects": {
                        "RemoveTagged": "Tires"
                    }
                }
            }
        },
        "SeatData": {
            "Driver": {
                "DamageMultiplier": 0,
                "ExplosionMultiplier": 0
            },
            "Gunner": {
                "DamageMultiplier": 0,
                "ExplosionMultiplier": 0
            }
        },
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "APC_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Hull Style",
                "Type": "Light_Tank_Hull",
                "Default": "APC_Hull",
                "Section": "Hull"
            },
            {
                "Slot": "Main Turret",
                "Type": "Ground_Turret_Med",
                "Default": "APC_Cannon",
                "Owner": "Driver",
                "Section": "Turret",
                "Priority": 1
            },
            {
                "Slot": "Gunner Turret",
                "Type": "Ground_Turret_Small",
                "Default": "LMG_Turret",
                "Owner": "Gunner",
                "Section": "Gunner",
                "Priority": 0,
                "IgnoreName": true
            },
            {
                "Slot": "Engine",
                "Type": "LTV_Engine",
                "Default": "Default_Engine",
                "Section": "Engine"
            },
            {
                "Slot": "Wheels",
                "Type": "LTV_Wheels",
                "Default": "Default_Wheels",
                "Section": "Wheels"
            }
        ]
    },
    "Vehicles/Light_Transport": {
        "Name": "LTV",
        "ControllerType": "CarChassis",
        "VehicleGroup": "LandLightArmor",
        "ScrapYieldMultiplier": 1,
        "BaseCost": 100,
        "DestructionBonus": 1,
        "ControlProperties": {
            "DrivingTorque": 215000,
            "BrakingTorque": 220000,
            "MaxSpeed": 85,
            "ReverseSpeed": 40,
            "MaxAllowedSpeed": 100,
            "MaxSteer": 0.7,
            "StrutSpringDampingFront": 7000,
            "StrutSpringDampingRear": 6000,
            "StrutSpringStiffnessFront": 200000,
            "StrutSpringStiffnessRear": 200000,
            "TorsionSpringDamping": 150,
            "TorsionSpringStiffness": 10000,
            "WheelFriction": 1.6,
            "IgnitionTime": 3,
            "EngineIgnitionVolume": 7.5,
            "EngineIdlePitch": 0.8,
            "EngineIdleVolume": 3,
            "EngineAccelPitch": 0.8,
            "EngineAccelVolume": 1
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": true,
            "ShowControllerGui": false,
            "CameraLockedToRoot": false,
            "Mode": "ThirdPerson",
            "RootPart": "Turret",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 40,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "SpecialAction": {
            "Toggle_Hitch": {
                "Name": "Detach Hitched",
                "Type": "Method",
                "Object": "DetachHitch",
                "Val": "Hitch"
            }
        },
        "Sections": {
            "Hull": {
                "Armor": 8,
                "Health": 100,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "MaxSteer_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Engine": {
                "Armor": 9,
                "Health": 60,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "MaxSpeed_mult": 0.75,
                        "ReverseSpeed_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            },
            "Wheels": {
                "Armor": 5,
                "Health": 50,
                "HullDamageMult": 0.8,
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0.4,
                        "ReverseSpeed_mult": 0.4
                    },
                    "Effects": {
                        "RemoveTagged": "Tires"
                    }
                }
            }
        },
        "SeatData": [],
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "LTV_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Engine",
                "Type": "LTV_Engine",
                "Default": "Default_Engine",
                "Section": "Engine"
            },
            {
                "Slot": "Trunk",
                "Type": "LTV_Trunk",
                "Default": "Seats_Gunner"
            },
            {
                "Slot": "Hitch",
                "Type": "LTV_Hitched",
                "Default": "Empty"
            },
            {
                "Slot": "Wheels",
                "Type": "LTV_Wheels",
                "Default": "Default_Wheels",
                "Section": "Wheels"
            }
        ]
    },
    "Vehicles/Towed_Field_Gun": {
        "Name": "Field Gun",
        "ControllerType": "TowedGunChassis",
        "VehicleGroup": "LandArtillery",
        "ScrapYieldMultiplier": 1,
        "BaseCost": 750,
        "DestructionBonus": 4,
        "ControlProperties": {
            "DrivingTorque": 215000,
            "BrakingTorque": 220000,
            "MaxSpeed": 75,
            "ReverseSpeed": 40,
            "MaxAllowedSpeed": 90,
            "MaxSteer": 0.7,
            "StrutSpringDampingFront": 7000,
            "StrutSpringDampingRear": 6000,
            "StrutSpringStiffnessFront": 200000,
            "StrutSpringStiffnessRear": 200000,
            "TorsionSpringDamping": 150,
            "TorsionSpringStiffness": 10000,
            "WheelFriction": 1.6,
            "IgnitionTime": 3,
            "EngineIgnitionVolume": 7.5,
            "EngineIdlePitch": 0.8,
            "EngineIdleVolume": 3,
            "EngineAccelPitch": 0.8,
            "EngineAccelVolume": 1
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": true,
            "ShowControllerGui": false,
            "FreeRotation": true,
            "CameraLockedToRoot": false,
            "Mode": "ThirdPerson",
            "RootPart": "Turret",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 40,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "Sections": {
            "Hull": {
                "Armor": 20,
                "Health": 120,
                "Damaged": {
                    "Properties": {},
                    "Effects": {}
                },
                "Destroyed": {
                    "Properties": {},
                    "Effects": {
                        "DestroyVehicle": true
                    }
                }
            }
        },
        "SeatData": [],
        "Attachments": [
            {
                "Slot": "Field_Gun_Turret",
                "Type": "Field_Gun_Turret",
                "Default": "Field_Gun_Turret",
                "Section": "Gun"
            }
        ]
    },
    "Vehicles/Transport_Helicopter": {
        "Name": "Transport Helicopter",
        "HUDType": "Helicopter",
        "ControllerType": "Helicopter",
        "VehicleGroup": "AirHelicopterTransport",
        "GlobalDamageMultiplier": 0.75,
        "ScrapYieldMultiplier": 3,
        "BaseCost": 2000,
        "UsesFlak": true,
        "DestructionBonus": 6,
        "ControlProperties": {
            "MitigateVTOL": true,
            "ImpulseTolerance": 1750,
            "ImpulseToleranceVTOL": 5500,
            "DeathImpulse": 8500,
            "MaxLateralSpeed": 130,
            "EngineResponsiveness": 2,
            "BaseThrust": 0.9,
            "ThrustToWeight": 1.75,
            "ForwardThrust": 0.25,
            "DragLateral": 2.6,
            "DragUp": 3.4,
            "DragDown": 3,
            "TorqueResistance": 0.4,
            "MinRollAngle": 45,
            "MaxRollAngle": 80,
            "MinPitchAngle": 55,
            "MaxPitchAngle": 80,
            "PitchSpeed": 70,
            "YawSpeed": 35,
            "RollSpeed": 105,
            "RotorAngularVelocity": 20,
            "EngineVolume": 2,
            "StartupTime": 5,
            "EngineBasePitch": 0.9
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": false,
            "ShowControllerGui": false,
            "CameraLockedToRoot": true,
            "Mode": "ThirdPerson",
            "RootPart": "Turret",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 40,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "SpecialAction": {
            "Toggle_LeftDoor": {
                "Name": "Toggle Left Door Open",
                "Type": "Constraint",
                "Object": "LeftDoorHinge",
                "Enabled": {
                    "TargetPosition": 0
                },
                "Disabled": {
                    "TargetPosition": 6
                }
            },
            "Toggle_RightDoor": {
                "Name": "Toggle Right Door Open",
                "Type": "Constraint",
                "Object": "RightDoorHinge",
                "Enabled": {
                    "TargetPosition": 0
                },
                "Disabled": {
                    "TargetPosition": 6
                }
            }
        },
        "Sections": {
            "Hull": {
                "Armor": 11.5,
                "Health": 210,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "ThrustToWeight_mult": 0,
                        "YawSpeed_mult": 0,
                        "RotorAngularVelocity_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Rotor": {
                "Armor": 10,
                "Health": 100,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "DragLateral_mult": 1.1,
                        "ThrustToWeight_mult": 0.75,
                        "YawSpeed_mult": 0.5,
                        "RollSpeed_mult": 0.5,
                        "RotorAngularVelocity_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "DragLateral_mult": 1.25,
                        "ThrustToWeight_mult": 0.25,
                        "YawSpeed_mult": 0.2,
                        "RollSpeed_mult": 0.2,
                        "RotorAngularVelocity_mult": 0.25
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            }
        },
        "SeatData": {
            "Driver": {
                "DamageMultiplier": 0.4,
                "ExplosionMultiplier": 0
            },
            "FrontPassenger": {
                "DamageMultiplier": 0.4,
                "ExplosionMultiplier": 0
            }
        },
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "Aircraft_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Hull Style",
                "Type": "Transport_Heli_Hull",
                "Default": "Troop_Transport",
                "Section": "Hull"
            },
            {
                "Slot": "Rotor",
                "Type": "Vehicle_Rotor",
                "Default": "Default_Rotor",
                "Section": "Rotor"
            }
        ]
    },
    "Vehicles/Weapons/AA_18mm": {
        "WeaponName": "18mm AA",
        "Automatic": true,
        "MultiBarrel": true,
        "SoundLooping": true,
        "FireSoundBasePitch": 1.25,
        "Overheats": true,
        "OverheatGain": 0.0048,
        "OverheatLoss": 0.25,
        "UsesAmmoPool": true,
        "ClipSize": 750,
        "StockpileSize": 150,
        "BulletSpeed": 4500,
        "BulletDamage": 6,
        "ArmorPiercing": 0.05,
        "MinDamage": 2,
        "MinRange": 800,
        "MaxRange": 1200,
        "FlakMult": 3,
        "FireRate": 33.333333333333336,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 1,
        "ReloadTime": 4,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/AA_25mm": {
        "WeaponName": "25mm AA",
        "Automatic": true,
        "MultiBarrel": true,
        "SoundLooping": true,
        "FireSoundBasePitch": 1.1,
        "Overheats": true,
        "OverheatGain": 0.0058,
        "OverheatLoss": 0.2,
        "UsesAmmoPool": true,
        "ClipSize": 1200,
        "StockpileSize": 200,
        "BulletSpeed": 4900,
        "BulletDamage": 10,
        "ArmorPiercing": 0.05,
        "MinDamage": 3,
        "MinRange": 800,
        "MaxRange": 1200,
        "FlakMult": 2,
        "FireRate": 36.666666666666664,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 1,
        "ReloadTime": 5,
        "AmmoRegen": 20
    },
    "Vehicles/Weapons/AP_Cannon_120mm": {
        "WeaponName": "120mm Cannon AP",
        "BaseCost": 50,
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 1,
        "StockpileSize": 16,
        "BulletSpeed": 975,
        "BulletDamage": 220,
        "ArmorPiercing": 0.675,
        "FlakMult": 3,
        "ExplosionRadius": 4.5,
        "ExplosionIntensity": 0.9,
        "TerrainIntensity": 2,
        "ExplosionInvisible": true,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.15,
        "ReloadTime": 2.5,
        "AmmoRegen": 9
    },
    "Vehicles/Weapons/AP_Cannon_25mm": {
        "WeaponName": "25mm Cannon AP",
        "BaseCost": 25,
        "Automatic": true,
        "FireSoundBasePitch": 3,
        "ClipSize": 8,
        "StockpileSize": 32,
        "BulletSpeed": 925,
        "BulletDamage": 100,
        "ArmorPiercing": 0.475,
        "ExplosionRadius": 4,
        "ExplosionIntensity": 0.2,
        "TerrainIntensity": 0.3,
        "ExplosionInvisible": true,
        "FireRate": 3,
        "ProjectileType": "LargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.5,
        "ReloadTime": 3,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/AP_Cannon_80mm": {
        "WeaponName": "80mm Cannon AP",
        "BaseCost": 25,
        "Automatic": true,
        "FireSoundBasePitch": 1.5,
        "ClipSize": 1,
        "StockpileSize": 8,
        "BulletSpeed": 1750,
        "BulletDamage": 185,
        "ArmorPiercing": 0.675,
        "FlakMult": 3,
        "ExplosionRadius": 4,
        "ExplosionIntensity": 0.8,
        "TerrainIntensity": 2,
        "ExplosionInvisible": true,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.075,
        "ReloadTime": 4,
        "AmmoRegen": 8
    },
    "Vehicles/Weapons/AP_Light_Cannon_15mm": {
        "WeaponName": "15mm Cannon AP",
        "BaseCost": 50,
        "Automatic": true,
        "FireSoundBasePitch": 1.25,
        "ClipSize": 32,
        "StockpileSize": 80,
        "BulletSpeed": 1100,
        "BulletDamage": 50,
        "ArmorPiercing": 0.25,
        "ExplosionRadius": 4,
        "ExplosionIntensity": 0.15,
        "TerrainIntensity": 0.25,
        "ExplosionInvisible": true,
        "FireRate": 0,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.6,
        "ReloadTime": 7.5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/AP_Light_Cannon_25mm": {
        "WeaponName": "25mm Cannon AP",
        "BaseCost": 75,
        "Automatic": true,
        "FireSoundBasePitch": 1.25,
        "ClipSize": 24,
        "StockpileSize": 60,
        "BulletSpeed": 1000,
        "BulletDamage": 65,
        "ArmorPiercing": 0.25,
        "ExplosionRadius": 4,
        "ExplosionIntensity": 0.25,
        "TerrainIntensity": 0.25,
        "ExplosionInvisible": true,
        "FireRate": 0,
        "ProjectileType": "LargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.75,
        "ReloadTime": 7.5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/AP_Self_Defense_Rocket": {
        "WeaponName": "AV Defense Rocket",
        "Automatic": true,
        "MultiBarrel": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 8,
        "StockpileSize": 16,
        "BulletSpeed": 300,
        "BulletDamage": 125,
        "ArmorPiercing": 0.55,
        "ExplosionRadius": 4,
        "ExplosionIntensity": 0.7,
        "FireRate": 6,
        "ProjectileType": "SmallRocketProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.75,
        "ReloadTime": 6,
        "AmmoRegen": 20
    },
    "Vehicles/Weapons/Artillery_Cannon_120mm": {
        "WeaponName": "120mm Artillery",
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 1,
        "StockpileSize": 12,
        "BulletSpeed": 650,
        "BulletDamage": 250,
        "ArmorPiercing": 1,
        "FlakMult": 5,
        "ExplosionRadius": 32,
        "ExplosionIntensity": 3,
        "TerrainIntensity": 1.5,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.15,
        "ReloadTime": 8,
        "AmmoRegen": 10
    },
    "Vehicles/Weapons/Berserker_30mm": {
        "WeaponName": "Berserker 30mm",
        "BaseCost": 50,
        "Automatic": true,
        "SoundLooping": true,
        "Overheats": true,
        "OverheatGain": 0.0147,
        "OverheatLoss": 0.25,
        "FireSoundBasePitch": 3.5,
        "UsesAmmoPool": true,
        "ClipSize": 450,
        "StockpileSize": 150,
        "BulletSpeed": 3000,
        "BulletDamage": 51,
        "FlakMult": 0.15,
        "ArmorPiercing": 0.15,
        "ExplosionRadius": 8,
        "ExplosionIntensity": 0.145,
        "TerrainIntensity": 0.25,
        "ExplosionInvisible": true,
        "FireRate": 65,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.666,
        "ReloadTime": 5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/Canister_40mm": {
        "WeaponName": "40mm Canister",
        "Automatic": true,
        "FireSoundBasePitch": 1.2,
        "Overheats": true,
        "OverheatGain": 0.1,
        "OverheatLoss": 0.5,
        "OverheatDelay": 0.125,
        "UsesAmmoPool": true,
        "ClipSize": 24,
        "StockpileSize": 6,
        "ProjectilesPerRound": 32,
        "BulletSpeed": 1560,
        "BulletDamage": 200,
        "ArmorPiercing": 0.025,
        "FireRate": 1.6666666666666667,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 0.75,
        "ProjectileSpread": 1,
        "ReloadTime": 6,
        "AmmoRegen": 10
    },
    "Vehicles/Weapons/Cannon_120mm": {
        "WeaponName": "120mm Cannon",
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 1,
        "StockpileSize": 16,
        "BulletSpeed": 850,
        "BulletDamage": 220,
        "ArmorPiercing": 0.6,
        "FlakMult": 4,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 1,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.2,
        "ReloadTime": 2.5,
        "AmmoRegen": 9
    },
    "Vehicles/Weapons/Cannon_25mm": {
        "WeaponName": "25mm Cannon",
        "Automatic": true,
        "FireSoundBasePitch": 3,
        "ClipSize": 8,
        "StockpileSize": 32,
        "BulletSpeed": 850,
        "BulletDamage": 100,
        "ArmorPiercing": 0.4,
        "ExplosionRadius": 8,
        "ExplosionIntensity": 0.3,
        "TerrainIntensity": 0.2,
        "FireRate": 3,
        "ProjectileType": "LargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.6,
        "ReloadTime": 3,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/Cannon_80mm": {
        "WeaponName": "80mm Cannon",
        "Automatic": true,
        "FireSoundBasePitch": 1.5,
        "ClipSize": 1,
        "StockpileSize": 8,
        "BulletSpeed": 1600,
        "BulletDamage": 185,
        "ArmorPiercing": 0.6,
        "FlakMult": 3.5,
        "ExplosionRadius": 10,
        "ExplosionIntensity": 0.9,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.1,
        "ReloadTime": 4,
        "AmmoRegen": 8
    },
    "Vehicles/Weapons/FLAK_30mm": {
        "WeaponName": "30mm FLAK",
        "BaseCost": 50,
        "Automatic": true,
        "MultiBarrel": true,
        "SoundLooping": true,
        "FireSoundBasePitch": 0.8,
        "Overheats": true,
        "OverheatGain": 0.007,
        "OverheatLoss": 0.2,
        "UsesAmmoPool": true,
        "ClipSize": 900,
        "StockpileSize": 150,
        "BulletSpeed": 3500,
        "BulletDamage": 10,
        "ArmorPiercing": 0.05,
        "MinDamage": 3,
        "MinRange": 1200,
        "MaxRange": 2000,
        "FlakMult": 2.8,
        "FireRate": 26.666666666666668,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 0.85,
        "ReloadTime": 5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/HE_40mm": {
        "WeaponName": "40mm HE",
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "Overheats": true,
        "OverheatGain": 0.1,
        "OverheatLoss": 0.5,
        "OverheatDelay": 0.125,
        "UsesAmmoPool": true,
        "ClipSize": 24,
        "StockpileSize": 6,
        "BulletSpeed": 160,
        "BulletDamage": 120,
        "ArmorPiercing": 0.25,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 0.75,
        "TerrainIntensity": 0.25,
        "FireRate": 1.6666666666666667,
        "ProjectileType": "LargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 1.25,
        "UsesVelocityInheritance": true,
        "ReloadTime": 6,
        "AmmoRegen": 10
    },
    "Vehicles/Weapons/HE_Cannon_120mm": {
        "WeaponName": "120mm Cannon HE",
        "BaseCost": 50,
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 1,
        "StockpileSize": 16,
        "BulletSpeed": 700,
        "BulletDamage": 220,
        "ArmorPiercing": 0.525,
        "FlakMult": 5,
        "ExplosionRadius": 16,
        "ExplosionIntensity": 1,
        "TerrainIntensity": 1.25,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.25,
        "ReloadTime": 2.5,
        "AmmoRegen": 9
    },
    "Vehicles/Weapons/HE_Cannon_25mm": {
        "WeaponName": "25mm Cannon HE",
        "BaseCost": 25,
        "Automatic": true,
        "FireSoundBasePitch": 3,
        "ClipSize": 8,
        "StockpileSize": 32,
        "BulletSpeed": 775,
        "BulletDamage": 100,
        "ArmorPiercing": 0.325,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 0.55,
        "TerrainIntensity": 0.2,
        "FireRate": 3,
        "ProjectileType": "LargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.7,
        "ReloadTime": 3,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/HE_Cannon_80mm": {
        "WeaponName": "80mm Cannon HE",
        "BaseCost": 25,
        "Automatic": true,
        "FireSoundBasePitch": 1.5,
        "ClipSize": 1,
        "StockpileSize": 8,
        "BulletSpeed": 1500,
        "BulletDamage": 185,
        "ArmorPiercing": 0.525,
        "FlakMult": 5,
        "ExplosionRadius": 14,
        "ExplosionIntensity": 1,
        "TerrainIntensity": 1,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.125,
        "ReloadTime": 4,
        "AmmoRegen": 8
    },
    "Vehicles/Weapons/HE_Rocket_70mm": {
        "WeaponName": "70mm HE Rocket",
        "MultiBarrel": true,
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "UsesAmmoPool": true,
        "ClipSize": 20,
        "StockpileSize": 20,
        "BulletSpeed": 300,
        "BulletDamage": 65,
        "ArmorPiercing": 0.15,
        "ExplosionRadius": 20,
        "ExplosionIntensity": 1,
        "TerrainIntensity": 1.2,
        "FireRate": 4,
        "ProjectileType": "RocketArcProjectile",
        "ProjectileLifeTime": 15,
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 1,
        "ReloadTime": 8,
        "AmmoRegen": 20
    },
    "Vehicles/Weapons/HE_Self_Defense_Rocket": {
        "WeaponName": "HE Defense Rocket",
        "Automatic": true,
        "MultiBarrel": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 8,
        "StockpileSize": 16,
        "BulletSpeed": 250,
        "BulletDamage": 125,
        "ArmorPiercing": 0.4,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 0.7,
        "FireRate": 6,
        "ProjectileType": "SmallRocketProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.85,
        "ReloadTime": 6,
        "AmmoRegen": 20
    },
    "Vehicles/Weapons/HMG_12mm": {
        "WeaponName": "12mm HMG",
        "BaseCost": 0,
        "Automatic": true,
        "FireSoundBasePitch": 1.25,
        "Overheats": true,
        "OverheatGain": 0.006,
        "OverheatLoss": 0.25,
        "UsesAmmoPool": true,
        "ClipSize": 500,
        "StockpileSize": 75,
        "BulletSpeed": 3300,
        "FlakMult": 1.5,
        "BulletDamage": 40.5,
        "MinDamage": 15,
        "MinRange": 500,
        "MaxRange": 1500,
        "ArmorPiercing": 0.07,
        "FireRate": 11.666666666666666,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 0.175,
        "ReloadTime": 5,
        "AmmoRegen": 25
    },
    "Vehicles/Weapons/HMG_762mm": {
        "WeaponName": "7.62mm MG",
        "BaseCost": 25,
        "Automatic": true,
        "FireSoundBasePitch": 1.25,
        "Overheats": true,
        "OverheatGain": 0.0098,
        "OverheatLoss": 0.25,
        "UsesAmmoPool": true,
        "ClipSize": 500,
        "StockpileSize": 100,
        "BulletSpeed": 2000,
        "BulletDamage": 32.5,
        "MinDamage": 25.5,
        "MinRange": 75,
        "MaxRange": 750,
        "ArmorPiercing": 0.05,
        "FireRate": 10.833333333333334,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 0.125,
        "ReloadTime": 5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/Light_Cannon_15mm": {
        "WeaponName": "15mm Cannon",
        "Automatic": true,
        "FireSoundBasePitch": 1.25,
        "ClipSize": 32,
        "StockpileSize": 96,
        "BulletSpeed": 1000,
        "BulletDamage": 50,
        "ArmorPiercing": 0.175,
        "ExplosionRadius": 10,
        "ExplosionIntensity": 0.35,
        "TerrainIntensity": 0.35,
        "ExplosionInvisible": true,
        "FireRate": 0,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.85,
        "ReloadTime": 7.5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/Light_Cannon_25mm": {
        "WeaponName": "25mm Cannon",
        "BaseCost": 50,
        "Automatic": true,
        "FireSoundBasePitch": 1.25,
        "ClipSize": 24,
        "StockpileSize": 72,
        "BulletSpeed": 900,
        "BulletDamage": 65,
        "ArmorPiercing": 0.175,
        "ExplosionRadius": 14,
        "ExplosionIntensity": 0.5,
        "TerrainIntensity": 0.35,
        "ExplosionInvisible": true,
        "FireRate": 0,
        "ProjectileType": "LargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 1,
        "ReloadTime": 8.5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/LMG_65mm": {
        "WeaponName": "6.5mm MG",
        "Automatic": true,
        "FireSoundBasePitch": 2,
        "Overheats": true,
        "OverheatGain": 0.0098,
        "OverheatLoss": 0.25,
        "UsesAmmoPool": true,
        "ClipSize": 600,
        "StockpileSize": 150,
        "BulletSpeed": 2250,
        "BulletDamage": 25.5,
        "MinDamage": 20,
        "MinRange": 50,
        "MaxRange": 550,
        "ArmorPiercing": 0,
        "FlakMult": 0.75,
        "FireRate": 13.333333333333334,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 0.35,
        "ReloadTime": 3,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/LVG_40mm": {
        "WeaponName": "40mm LVG",
        "Automatic": true,
        "FireSoundBasePitch": 2,
        "Overheats": true,
        "OverheatGain": 0.1,
        "OverheatLoss": 0.5,
        "OverheatDelay": 0.125,
        "UsesAmmoPool": true,
        "ClipSize": 24,
        "StockpileSize": 6,
        "BulletSpeed": 100,
        "BulletDamage": 120,
        "ArmorPiercing": 0,
        "ExplosionRadius": 16,
        "ExplosionIntensity": 0.8,
        "TerrainIntensity": 0.8,
        "ProjectileLifeTime": 3,
        "FireRate": 1.6666666666666667,
        "ProjectileType": "PhysicalProjectile",
        "ProjectileHitModule": "TimedExplosive",
        "BulletSpread": 1.25,
        "UsesVelocityInheritance": true,
        "WorldModel": "Grenade_40mm",
        "ReloadTime": 6,
        "AmmoRegen": 10
    },
    "Vehicles/Weapons/Minigun_8mm": {
        "WeaponName": "8mm Minigun",
        "Automatic": true,
        "MultiBarrel": true,
        "SoundLooping": true,
        "FireSoundBasePitch": 1.3,
        "Overheats": true,
        "OverheatGain": 0.0050,
        "OverheatLoss": 0.25,
        "UsesAmmoPool": true,
        "ClipSize": 1200,
        "StockpileSize": 300,
        "BulletSpeed": 2400,
        "BulletDamage": 16,
        "MinDamage": 8,
        "MinRange": 100,
        "MaxRange": 350,
        "ArmorPiercing": 0.025,
        "FlakMult": 0.75,
        "FireRate": 100,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 1.5,
        "ReloadTime": 5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/MMG_9mm": {
        "WeaponName": "9mm MMG",
        "BaseCost": 0,
        "Automatic": true,
        "FireSoundBasePitch": 1.25,
        "Overheats": true,
        "OverheatGain": 0.01,
        "OverheatLoss": 0.25,
        "UsesAmmoPool": true,
        "ClipSize": 800,
        "StockpileSize": 200,
        "BulletSpeed": 3750,
        "FlakMult": 1.5,
        "BulletDamage": 32.5,
        "MinDamage": 12,
        "MinRange": 350,
        "MaxRange": 1250,
        "ArmorPiercing": 0.05,
        "FireRate": 20,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 0.25,
        "ReloadTime": 5,
        "AmmoRegen": 25
    },
    "Vehicles/Weapons/Rocket_70mm": {
        "NamePrefix": "Support",
        "WeaponName": "70mm 'Incinerators'",
        "BaseCost": 50,
        "Automatic": true,
        "MultiBarrel": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 16,
        "StockpileSize": 32,
        "BulletSpeed": 350,
        "BulletDamage": 110,
        "ArmorPiercing": 0.15,
        "ExplosionRadius": 20,
        "ExplosionIntensity": 0.4,
        "FireRate": 8,
        "ProjectileType": "SmallRocketProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 2.25,
        "ReloadTime": 8,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/Rocket_85mm": {
        "NamePrefix": "AV",
        "WeaponName": "85mm 'Pulverizers'",
        "Automatic": true,
        "MultiBarrel": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 8,
        "StockpileSize": 16,
        "BulletSpeed": 800,
        "BulletDamage": 120,
        "ArmorPiercing": 0.5,
        "ExplosionRadius": 16,
        "ExplosionIntensity": 0.51,
        "FireRate": 2.5,
        "ProjectileType": "RocketProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.25,
        "ReloadTime": 6,
        "AmmoRegen": 20
    },
    "Vehicles/Weapons/SDB_AP": {
        "WeaponName": "SDB-P",
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 1,
        "StockpileSize": 2,
        "BulletSpeed": 0,
        "BulletDamage": 300,
        "ArmorPiercing": 1,
        "FlakMult": 3,
        "ExplosionRadius": 8,
        "ExplosionIntensity": 3,
        "TerrainIntensity": 2,
        "FireRate": 10,
        "ProjectileType": "DumbfireBombProjectile",
        "ProjectileLifeTime": 20,
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0,
        "ReloadTime": 8,
        "AmmoRegen": 30,
        "UsesVelocityInheritance": true,
        "WorldModel": "Bomb_Deployed"
    },
    "Vehicles/Weapons/SDB_HE": {
        "WeaponName": "SDB-HE",
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 1,
        "StockpileSize": 2,
        "BulletSpeed": 0,
        "BulletDamage": 250,
        "ArmorPiercing": 0.5,
        "FlakMult": 3,
        "ExplosionRadius": 48,
        "ExplosionIntensity": 1,
        "TerrainIntensity": 4,
        "FireRate": 10,
        "ProjectileType": "DumbfireBombProjectile",
        "ProjectileLifeTime": 20,
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0,
        "ReloadTime": 8,
        "AmmoRegen": 30,
        "UsesVelocityInheritance": true,
        "WorldModel": "Bomb_Deployed"
    },
    "Vehicles/Weapons/Smoke_40mm": {
        "WeaponName": "40mm HE",
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "Overheats": true,
        "OverheatGain": 0.1,
        "OverheatLoss": 0.5,
        "OverheatDelay": 0.125,
        "UsesAmmoPool": true,
        "ClipSize": 24,
        "StockpileSize": 6,
        "BulletSpeed": 160,
        "BulletDamage": 120,
        "ArmorPiercing": 0.25,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 0.52,
        "TerrainIntensity": 1.75,
        "FireRate": 2.0833333333333335,
        "ProjectileType": "LargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 1.25,
        "UsesVelocityInheritance": true,
        "ReloadTime": 6,
        "AmmoRegen": 10
    },
    "Vehicles/Weapons/TEMP_TOW_Rocket": {
        "WeaponName": "Temp Rocket",
        "Automatic": false,
        "FireSoundBasePitch": 1,
        "UsesAmmoPool": true,
        "ClipSize": 4,
        "StockpileSize": 1,
        "BulletSpeed": 350,
        "EnvPiercing": 1,
        "ArmorPiercing": 0.7,
        "BulletDamage": 150,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 1,
        "TerrainIntensity": 1.5,
        "FlakMult": 2,
        "FireRate": 0.33,
        "ProjectileType": "RocketProjectile",
        "ProjectileLifeTime": 15,
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.25,
        "ReloadTime": 2,
        "AmmoRegen": 6.5
    },
    "Vehicles/Weapons/Thanatos_AP": {
        "WeaponName": "Thanatos 80mm AP",
        "BaseCost": 25,
        "Automatic": true,
        "FireSoundBasePitch": 1.5,
        "ClipSize": 1,
        "StockpileSize": 6,
        "BulletSpeed": 3000,
        "BulletDamage": 240,
        "ArmorPiercing": 0.8,
        "FlakMult": 1,
        "ExplosionRadius": 8,
        "ExplosionIntensity": 1,
        "TerrainIntensity": 2,
        "ExplosionInvisible": true,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.075,
        "ReloadTime": 2,
        "AmmoRegen": 8
    },
    "Vehicles/Weapons/Thanatos_HE": {
        "WeaponName": "Thanatos 80mm HE",
        "BaseCost": 25,
        "Automatic": true,
        "FireSoundBasePitch": 1.5,
        "ClipSize": 1,
        "StockpileSize": 6,
        "BulletSpeed": 1900,
        "BulletDamage": 150,
        "ArmorPiercing": 0.567,
        "FlakMult": 1,
        "ExplosionRadius": 19.6,
        "ExplosionIntensity": 0.75,
        "TerrainIntensity": 1,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.125,
        "ReloadTime": 2,
        "AmmoRegen": 8
    },
    "Infantry/Components/AK-AS/Ammo_Buckshot": {
        "Name": "Buckshot 12G",
        "Overrides": {},
        "Modifiers": {}
    },
    "Infantry/Components/AK-AS/Ammo_Flechette": {
        "Name": "Flechette 12G",
        "Overrides": {
            "ArmorPiercing": 0.075
        },
        "Modifiers": {
            "ProjectilesPerRound": -0.25,
            "BulletDamage": -0.1,
            "MinDamage": -0.1,
            "MinRange": 0.25,
            "MaxRange": 0.25,
            "EnvPiercing": 0.5
        }
    },
    "Infantry/Components/AK-AS/Ammo_Slugs": {
        "Name": "Slugs 12G",
        "Overrides": {
            "EnvPiercing": 1,
            "ProjectilesPerRound": 1,
            "MinRange": 25,
            "MaxRange": 450,
            "MinDamage": 42.5,
            "ProjectileSpread": 0,
            "BulletSpread": 2,
            "AimBulletSpread": 0.1
        },
        "Modifiers": {
            "BulletSpeed": 0.75,
            "BulletDamage": -0.25
        }
    },
    "Infantry/Components/AK-AS/Shotgun_Choke": {
        "Name": "Shotgun Choke",
        "Overrides": {},
        "Modifiers": {
            "MinDamage": -0.1,
            "ProjectileSpread": -0.45,
            "AimBulletSpread": -0.1,
            "BulletSpeed": -0.2
        }
    },
    "Infantry/Components/AK-AS/Shotgun_Suppressor": {
        "Name": "Shotgun Suppressor",
        "Overrides": {
            "Silent": true,
            "NoFlash": true
        },
        "Modifiers": {
            "BulletDamage": -0.1,
            "BulletSpread": -0.1,
            "AimBulletSpread": -0.1,
            "BulletSpeed": -0.2
        }
    },
    "Infantry/Components/AK-AS/Standard_Barrel": {
        "Name": "Standard Barrel",
        "Overrides": {},
        "Modifiers": {}
    },
    "Infantry/Components/AK_Type_E/Canister_40mm": {
        "Name": "40mm Canister",
        "Overrides": {
            "ProjectilesPerRound": 24,
            "ProjectileSpread": 2.75,
            "ProjectileHitModule": "Bullet",
            "BulletSpeed": 1560,
            "BulletDamage": 320,
            "MinDamage": 100,
            "MinRange": 30,
            "MaxRange": 150,
            "ArmorPiercing": 0.02,
            "ProjectileLifeTime": 0.75
        },
        "Modifiers": {}
    },
    "Infantry/Components/AK_Type_E/FLAK_40mm": {
        "Name": "40mm FLAK",
        "Overrides": {
            "ProjectilesPerRound": 36,
            "ProjectileSpread": 2,
            "ProjectileHitModule": "Bullet",
            "BulletSpeed": 2200,
            "BulletDamage": 200,
            "MinDamage": 50,
            "MinRange": 100,
            "MaxRange": 400,
            "ArmorPiercing": 0.02,
            "FlakMult": 4,
            "ProjectileLifeTime": 0.35
        },
        "Modifiers": {}
    },
    "Infantry/Components/AK_Type_E/HE_40mm": {
        "Name": "40mm HE",
        "Overrides": {},
        "Modifiers": {}
    },
    "Infantry/Components/AK_Type_E/LVG_40mm": {
        "Name": "40mm LVG",
        "Overrides": {
            "BulletSpeed": 100,
            "BulletDamage": 120,
            "ArmorPiercing": 0,
            "ExplosionRadius": 12,
            "ExplosionIntensity": 0.75,
            "TerrainIntensity": 0.25,
            "ProjectileLifeTime": 3,
            "ProjectileType": "PhysicalProjectile",
            "ProjectileHitModule": "TimedExplosive",
            "WorldModel": "Grenade_40mm"
        },
        "Modifiers": {}
    },
    "Infantry/Components/Mortar/Stock_Shells": {
        "Name": "Stock Shells",
        "Overrides": {},
        "Modifiers": {}
    },
    "Infantry/Components/Rifle/Bipod": {
        "Name": "Bipod",
        "Overrides": {
            "CanDeploy": true
        },
        "Modifiers": {
            "MovementAimPenaltyMult": 0.25,
            "VerticalRecoil": 0.1,
            "RecoilLeft": 0.05,
            "RecoilRight": 0.05
        }
    },
    "Infantry/Components/Rifle/Heavy_Barrel": {
        "Name": "Heavy Barrel",
        "Overrides": {},
        "Modifiers": {
            "BulletSpeed": 0.2,
            "BulletSpread": 0.5,
            "AimBulletSpread": -0.25,
            "VerticalRecoil": 0.125,
            "RecoilLeft": -0.1,
            "RecoilRight": -0.1
        }
    },
    "Infantry/Components/Rifle/Ironsights": {
        "Name": "Ironsights",
        "Overrides": {
            "AimZoom": 1.5
        },
        "Modifiers": {}
    },
    "Infantry/Components/Rifle/No_Grip": {
        "Name": "No Foregrip",
        "Overrides": {},
        "Modifiers": {}
    },
    "Infantry/Components/Rifle/Scope_12x": {
        "Name": "12x Scope",
        "Overrides": {
            "AimZoom": 12,
            "AimOverride": true,
            "AimOffset": {
                "x": 0.011,
                "y": 0.117,
                "z": 1.25
            },
            "ReticleDetail": "rbxassetid://7188939083"
        },
        "Modifiers": {
            "AimTimeMult": 1,
            "AimBulletSpread": -0.1,
            "BulletSpread": 2.5
        }
    },
    "Infantry/Components/Rifle/Scope_4x": {
        "Name": "4x ACOG",
        "Overrides": {
            "AimZoom": 4,
            "AimOverride": true,
            "AimOffset": {
                "x": 0.004,
                "y": 0.048,
                "z": 0.85
            },
            "ReticleCenter": "rbxassetid://2833743852",
            "ReticleDetail": "rbxassetid://7188939160"
        },
        "Modifiers": {
            "AimTimeMult": 0.05,
            "AimBulletSpread": -0.05,
            "BulletSpread": 0.5
        }
    },
    "Infantry/Components/Rifle/Sights_Reflex": {
        "Name": "Reflex Sight",
        "Overrides": {
            "AimZoom": 1.5,
            "AimOverride": true,
            "AimOffset": {
                "x": 0,
                "y": 0.04,
                "z": 0.5
            },
            "ReticleCenter": "rbxassetid://2833588656"
        },
        "Modifiers": {
            "BulletSpread": -0.2,
            "AimTimeMult": -0.25
        }
    },
    "Infantry/Components/Rifle/Standard_Barrel": {
        "Name": "Standard Barrel",
        "Overrides": {},
        "Modifiers": {}
    },
    "Infantry/Components/Rifle/Suppressor": {
        "Name": "Suppressor",
        "Overrides": {
            "Silent": true,
            "NoFlash": true
        },
        "Modifiers": {
            "BulletDamage": -0.2,
            "BulletSpread": -0.2,
            "AimBulletSpread": -0.2,
            "BulletSpeed": -0.35
        }
    },
    "Infantry/Components/Rifle/Vertical_Grip": {
        "Name": "Vertical Grip",
        "Overrides": {},
        "Modifiers": {
            "MovementAimPenaltyMult": -0.5,
            "BulletSpread": -0.25,
            "AimBulletSpread": 0.25,
            "RecoilLeft": -0.15,
            "RecoilRight": -0.15
        }
    },
    "Infantry/Components/RPG-7/RPG_Cluster": {
        "Name": "Cluster Rockets",
        "Overrides": {
            "ProjectilesPerRound": 5,
            "BulletSpread": 1,
            "AimBulletSpread": 0.5,
            "ProjectileSpread": 4,
            "ExplosionIntensity": 0.35,
            "StartingAmmo": 3,
            "FlakMult": 2
        },
        "Modifiers": {
            "BulletDamage": -0.6,
            "ArmorPiercing": -0.25,
            "BulletSpeed": -0.5
        }
    },
    "Infantry/Components/RPG-7/RPG_Flak": {
        "Name": "Flak Rockets",
        "Overrides": {
            "ExplosionIntensity": 0.25,
            "StartingAmmo": 4,
            "FlakMult": 4
        },
        "Modifiers": {
            "BulletDamage": -0.65,
            "BulletSpeed": 1.00,
            "ExplosionRadius": -0.5
        }
    },
    "Infantry/Components/RPG-7/RPG_HV": {
        "Name": "High Velocity Rockets",
        "Overrides": {
            "ExplosionIntensity": 0.35,
            "StartingAmmo": 3,
            "FlakMult": 2
        },
        "Modifiers": {
            "EnvPiercing": 0.25,
            "ArmorPiercing": 0.1,
            "BulletSpeed": 0.15,
            "ExplosionRadius": -0.3
        }
    },
    "Infantry/Components/RPG-7/RPG_Stock": {
        "Name": "Stock Rockets",
        "Overrides": {},
        "Modifiers": {}
    },
    "Vehicles/Components/Vehicle_Optics/Optics_3x": {
        "Name": "3x Optics",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Vehicle_Optics/Optics_6x": {
        "Name": "6x Optics",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 50
    },
    "Vehicles/Components/Aircraft_Armor/Aerodynamic_Frame": {
        "Name": "Aerodynamic Frame",
        "Description": "Lighter materials and less armoring, allowing for greater aerial maneuverability",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 50,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "HardMaxSpeed": 0.2,
                "MaxLateralSpeed": 0.10,
                "PitchSpeed": 0.1,
                "YawSpeed": 0.1,
                "RollSpeed": 0.1,
                "Drag": -0.05,
                "DragLateral": -0.075,
                "DragUp": -0.05,
                "DragDown": -0.05
            }
        }
    },
    "Vehicles/Components/Aircraft_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Stock air vehicle armor, offering a balance between protection and maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": [],
            "SettingMultipliers": {
                "Drag": 0
            }
        }
    },
    "Vehicles/Components/Aircraft_Armor/Reinforced_Hull": {
        "Name": "Reinforced Hull",
        "Description": "Reinforcing vulnerable instruments on the vehicle, offering greater protection, at the cost of maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 100,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.125,
                "Armor": 0.1
            },
            "SettingMultipliers": {
                "SoftMaxSpeed": -0.1,
                "MaxLateralSpeed": -0.1,
                "PitchSpeed": -0.15,
                "YawSpeed": -0.15,
                "RollSpeed": -0.15,
                "Drag": 0.05,
                "DragLateral": 0.075,
                "DragUp": 0.05,
                "DragDown": 0.05
            }
        }
    },
    "Vehicles/Components/Aircraft_Gunner_Turret/Machine_Gun_Turret": {
        "Name": "Machine Gun",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 0,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 50,
            "MinPitch": -65,
            "LimitYaw": true,
            "MaxYaw": 100,
            "MinYaw": -110,
            "MaxYawOmega": 9.42477796076938,
            "MaxPitchOmega": 4.71238898038469
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Machine_Gun",
                "Default": "LMG_65mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Gunner_Turret/Minigun_Turret": {
        "Name": "Minigun",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 150,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 50,
            "MinPitch": -65,
            "LimitYaw": true,
            "MaxYaw": 100,
            "MinYaw": -110,
            "MaxYawOmega": 9.42477796076938,
            "MaxPitchOmega": 4.71238898038469
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Minigun",
                "Default": "Minigun_8mm",
                "Modifiers": {
                    "MultiBarrel": false
                },
                "ModifierMult": {
                    "OverheatGain": 0.5
                }
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Mounted_Med/Aircraft_Rockets": {
        "Name": "Mounted Rockets",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Main_Rockets_Air",
                "Default": "Rocket_70mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Mounted_Med/Machine_Guns": {
        "Name": "Heavy Machine Guns",
        "NamePrefix": "Gunner",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 250,
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_HMG",
                "Modifiers": {
                    "MultiBarrel": true,
                    "ClipSize": 300,
                    "StockpileSize": 50,
                    "BulletSpeed": 2000,
                    "FlakMult": 1
                },
                "ModifierMult": {
                    "OverheatGain": 2.5,
                    "FireRate": 0.8,
                    "BulletSpread": 1.1
                },
                "Default": "HMG_12mm",
                "Priority": 0
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Mounted_Small/Aircraft_Light_Cannon": {
        "Name": "Light Cannon",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 500,
        "NamePrefix": "Light Support",
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Light_Cannon_Air",
                "Default": "Cannon_15mm",
                "Modifiers": {
                    "MultiBarrel": true
                },
                "ModifierMult": {
                    "ClipSize": 0.75,
                    "StockpileSize": 0.5,
                    "FiringRate": 0.8,
                    "ExplosionRadius": 0.75,
                    "ExplosionIntensity": 0.5,
                    "BulletSpeed": 0.65
                }
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Mounted_Small/Aircraft_Machine_Guns": {
        "Name": "Mounted Machine Gun",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 0,
        "NamePrefix": "Scout",
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Machine_Gun",
                "Default": "LMG_65mm"
            },
            {
                "Slot": "Weapons",
                "Type": "Turret_Mounted_Med",
                "Default": "Mounted_Rocket_Pods"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Mounted_Small/Aircraft_Miniguns": {
        "Name": "Mounted Miniguns",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 250,
        "NamePrefix": "Light",
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Minigun",
                "Default": "Minigun_8mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Turret_Med/Air_30mm_Turret": {
        "Name": "Berserker Minigun",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "NamePrefix": "AV",
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "LimitYaw": true,
            "MaxYaw": 0,
            "MinYaw": 0,
            "MaxYawOmega": 2.5132741228718345,
            "MaxPitchOmega": 1.5707963267948966
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Med_Cannon",
                "Default": "Berserker_30mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Turret_Med/Air_40mm_Turret": {
        "Name": "Polaris Grenade Launcher",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 75,
        "NamePrefix": "Light Support",
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 5,
            "MinPitch": -15,
            "LimitYaw": true,
            "MaxYaw": 10,
            "MinYaw": -10,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Polaris",
                "Default": "Polaris_HEC_40mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 13,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Turret_Med/Air_50mm_Turret": {
        "Name": "Apex Chaingun",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 50,
        "NamePrefix": "Light Support",
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 5,
            "MinPitch": -85,
            "LimitYaw": false,
            "MaxYaw": 180,
            "MinYaw": -180,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Heavy_Chaingun",
                "Default": "Apex_50mm_HE"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 12,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Turret_Med/Air_80mm_Turret": {
        "Name": "Thanatos Cannon",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 750,
        "NamePrefix": "Support",
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "LimitYaw": true,
            "MaxYaw": 0,
            "MinYaw": 0,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Thanatos",
                "Default": "Thanatos_HE"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 15,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Turret_Small/Air_15mm_Turret": {
        "Name": "Light Cannon Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 25,
            "MinPitch": -75,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Light_Cannon_Air",
                "Default": "Cannon_25mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 20,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/APC_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Stock armor for a light armored vehicle.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/APC_Armor/Lighter_Alloy": {
        "Name": "Light Alloy Armor",
        "Description": "Lighter alloy armor that trades durability and protection for a lower weight and greater speeds.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 25,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.05
            },
            "SettingMultipliers": {
                "MaxAllowedSpeed": 0.1,
                "MaxSpeed": 0.15,
                "ReverseSpeed": 0.075
            }
        }
    },
    "Vehicles/Components/APC_Armor/Slat_Armor": {
        "Name": "Slat Armor",
        "Description": "Armor consisting of a metal grid around the vehicle that offers significant protection against large protectiles, at the cost of agility.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 50,
        "NamePrefix": "Armored",
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.1,
                "Armor": 0.05
            },
            "SettingMultipliers": {
                "MaxSpeed": -0.1,
                "ReverseSpeed": -0.05
            }
        }
    },
    "Vehicles/Components/Attack_Heli_Armor/Aerodynamic_Frame": {
        "Name": "Aerodynamic Frame",
        "Description": "Lighter materials and less armoring, allowing for greater aerial maneuverability",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 200,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "HardMaxSpeed": 0.2,
                "MaxLateralSpeed": 0.10,
                "PitchSpeed": 0.1,
                "YawSpeed": 0.1,
                "RollSpeed": 0.1,
                "Drag": -0.05,
                "DragLateral": -0.075,
                "DragUp": -0.05,
                "DragDown": -0.05
            }
        }
    },
    "Vehicles/Components/Attack_Heli_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Stock air vehicle armor, offering a balance between protection and maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": [],
            "SettingMultipliers": {
                "Drag": 0
            }
        }
    },
    "Vehicles/Components/Attack_Heli_Armor/Reinforced_Hull": {
        "Name": "Reinforced Hull",
        "Description": "Reinforcing vulnerable instruments on the vehicle, offering greater protection, at the cost of maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 350,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.125,
                "Armor": 0.1
            },
            "SettingMultipliers": {
                "SoftMaxSpeed": -0.1,
                "MaxLateralSpeed": -0.1,
                "PitchSpeed": -0.15,
                "YawSpeed": -0.15,
                "RollSpeed": -0.15,
                "Drag": 0.05,
                "DragLateral": 0.075,
                "DragUp": 0.05,
                "DragDown": 0.05
            }
        }
    },
    "Vehicles/Components/Attack_Jet_Mounted/Empty": {
        "Name": "None",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Attack_Jet_Mounted/Jet_Bombs": {
        "Name": "Mounted Bombs",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 200,
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Bombs",
                "Modifiers": {
                    "MultiBarrel": true
                },
                "ModifierMult": {
                    "ClipSize": 2,
                    "StockpileSize": 2
                },
                "Default": "SDB_HE"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Attack_Jet_Mounted/Jet_Rocket_Pods": {
        "Name": "Mounted Rockets",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Main_Rockets_Air",
                "Default": "Rocket_70mm",
                "ModifierMult": {
                    "ClipSize": 3,
                    "StockpileSize": 3,
                    "FireRate": 1.5
                }
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Field_Gun_Turret/Field_Gun_Turret": {
        "Name": "Mounted Field Gun",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 0,
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 30,
            "MinPitch": -20,
            "MaxYawOmega": 1.3962634015954636,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Artillery_Cannon",
                "Default": "HE_Cannon_120mm"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 20,
            "Health": 135,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Gunner_Turret/Empty": {
        "Name": "No Gunner",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Ground_Gunner_Turret/Gunner_MG": {
        "Name": "Machine Gun",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 50,
        "NamePrefix": "MG",
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true,
            "MaxZoom": 12,
            "MinZoom": 6
        },
        "GunControls": {
            "MaxPitch": 30,
            "MinPitch": -20,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Machine_Gun",
                "Default": "LMG_65mm"
            }
        ],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Gunner_Turret/Manned_Grenade_Launcher": {
        "Name": "Grenade Launcher",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 125,
        "NamePrefix": "GL",
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true,
            "MaxZoom": 12,
            "MinZoom": 6
        },
        "GunControls": {
            "MaxPitch": 30,
            "MinPitch": -20,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Grenade_40mm",
                "Default": "HE_40mm",
                "Modifiers": {
                    "UsesVelocityInheritance": true
                },
                "ModifierMult": {
                    "ClipSize": 0.25,
                    "StockpileSize": 0.5,
                    "FireRate": 0.75,
                    "AmmoRegen": 0.65
                }
            }
        ],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Gunner_Turret/Manned_TOW_Launcher": {
        "Name": "TOW Launcher",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 300,
        "NamePrefix": "TOW",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true,
            "MaxZoom": 12,
            "MinZoom": 6
        },
        "GunControls": {
            "MaxPitch": 25,
            "MinPitch": -20,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_TOW_Missiles",
                "Default": "TEMP_TOW_Rocket"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Large/AA_Turret": {
        "Name": "Anti-Air Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 200,
        "NamePrefix": "AA",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 75,
            "MinPitch": -5,
            "MaxYawOmega": 5.026548245743669,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Heavy_AA",
                "Default": "AA_25mm"
            },
            {
                "Slot": "Secondary",
                "Type": "Weapon_Heavy_AA_Rockets",
                "Default": "HE_Self_Defense_Rocket"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 20,
            "Health": 120,
            "HullDamageMult": 0.9,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Large/Main_Cannon": {
        "Name": "Battle Tank Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "NamePrefix": "Battle",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 25,
            "MinPitch": -15,
            "MaxYawOmega": 1.3962634015954636,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Heavy_Cannon",
                "Default": "Cannon_120mm"
            },
            {
                "Slot": "Secondary",
                "Type": "Weapon_Machine_Gun",
                "Default": "LMG_65mm"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            },
            {
                "Slot": "Gunner Mount",
                "Type": "Ground_Gunner_Turret",
                "Default": "Gunner_MG",
                "Section": "Gunner",
                "Owner": "Gunner",
                "IgnoreName": true
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 20,
            "Health": 135,
            "HullDamageMult": 0.9,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Med/APC_AA_Turret": {
        "Name": "Anti-Air Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 150,
        "NamePrefix": "AA",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 70,
            "MinPitch": -1.25,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Heavy_AA",
                "Default": "AA_25mm",
                "Modifiers": {
                    "MultiBarrel": false
                },
                "ModifierMult": {
                    "ClipSize": 0.75,
                    "StockpileSize": 0.75,
                    "FiringRate": 0.75
                }
            },
            {
                "Slot": "Mounted Weapons",
                "Type": "Turret_Mounted_Med",
                "Default": "Mounted_Rocket_Pods",
                "Section": "Weapons",
                "Owner": "Driver",
                "Priority": 2,
                "IgnoreName": true
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 17.5,
            "Health": 110,
            "HullDamageMult": 0.85,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Med/APC_Cannon": {
        "Name": "IFV Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 50,
        "NamePrefix": "IFV",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 30,
            "MinPitch": -20,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Light_Cannon",
                "Default": "Cannon_25mm"
            },
            {
                "Slot": "Secondary",
                "Type": "Weapon_Machine_Gun",
                "Default": "LMG_65mm"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 17.5,
            "Health": 120,
            "HullDamageMult": 0.85,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Med/APC_Grenade_Turret": {
        "Name": "Grenade Launcher Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 0,
        "NameSuffix": "GL",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 60,
            "MinPitch": -20,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Grenade_40mm",
                "Default": "HE_40mm",
                "Modifiers": {}
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 17.5,
            "Health": 125,
            "HullDamageMult": 0.85,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Med/APC_Heavy_Cannon": {
        "Name": "Destroyer Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "NamePrefix": "Destroyer",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 15,
            "MinPitch": -7.5,
            "MaxYawOmega": 1.3962634015954636,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Cannon_80mm",
                "Default": "Cannon_80mm"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 17.5,
            "Health": 120,
            "HullDamageMult": 0.9,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Small/AA_Mounted_Turret": {
        "Name": "Anti-Air Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "NamePrefix": "AA",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 75,
            "MinPitch": 0,
            "MaxYawOmega": 5.026548245743669,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Light_AA",
                "Default": "AA_18mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 100,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Small/Grenade_Launcher_Turret": {
        "Name": "Grenade Launcher Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 120,
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 70,
            "MinPitch": -25,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Grenade_40mm",
                "Default": "HE_40mm",
                "Modifiers": {
                    "UsesVelocityInheritance": true
                },
                "ModifierMult": {
                    "ClipSize": 0.25,
                    "StockpileSize": 0.5,
                    "FireRate": 0.75,
                    "AmmoRegen": 0.65
                }
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Small/LMG_Turret": {
        "Name": "Machine Gun Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 60,
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 70,
            "MinPitch": -25,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Machine_Gun",
                "Default": "LMG_65mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Jet_Engines/Default_Engines": {
        "Name": "Stock Engines",
        "Description": "Standard Jet Turbines that give decent thrust with moderate protection",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Jet_Engines/Performance_Engines": {
        "Name": "Performance Engines",
        "Description": "Higher powered jet engines that are capable of higher speed, and higher altitudes, but less protection.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 100,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "BaseThrottle": 0.1,
                "HardMaxSpeed": 0.1,
                "SoftMaxSpeed": 0.1,
                "HardMaxAltitude": 0.2,
                "SoftMaxAlitude": 0.2
            }
        }
    },
    "Vehicles/Components/Jet_Engines/Reinforced_Engines": {
        "Name": "Reinforced Engines",
        "Description": "Reinforced casing that keeps the turbines safer, but lowers their performance.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 75,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.15,
                "Armor": 0.1
            },
            "SettingMultipliers": {
                "BaseThrottle": -0.1,
                "HardMaxSpeed": -0.1,
                "SoftMaxSpeed": -0.1
            }
        }
    },
    "Vehicles/Components/Light_Heli_Armor/Aerodynamic_Frame": {
        "Name": "Aerodynamic Frame",
        "Description": "Lighter materials and less armoring, allowing for greater aerial maneuverability",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 50,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "HardMaxSpeed": 0.2,
                "MaxLateralSpeed": 0.10,
                "PitchSpeed": 0.1,
                "YawSpeed": 0.1,
                "RollSpeed": 0.1,
                "Drag": -0.05,
                "DragLateral": -0.075,
                "DragUp": -0.05,
                "DragDown": -0.05
            }
        }
    },
    "Vehicles/Components/Light_Heli_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Stock air vehicle armor, offering a balance between protection and maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": [],
            "SettingMultipliers": {
                "Drag": 0
            }
        }
    },
    "Vehicles/Components/Light_Heli_Armor/Reinforced_Hull": {
        "Name": "Reinforced Hull",
        "Description": "Reinforcing vulnerable instruments on the vehicle, offering greater protection, at the cost of maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 100,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.125,
                "Armor": 0.1
            },
            "SettingMultipliers": {
                "SoftMaxSpeed": -0.1,
                "MaxLateralSpeed": -0.1,
                "PitchSpeed": -0.15,
                "YawSpeed": -0.15,
                "RollSpeed": -0.15,
                "Drag": 0.05,
                "DragLateral": 0.075,
                "DragUp": 0.05,
                "DragDown": 0.05
            }
        }
    },
    "Vehicles/Components/Light_Tank_Hull/APC_Hull": {
        "Name": "APC Model",
        "Description": "A hull style designed for transportation. Contains additional seating for personnel.",
        "AttachmentType": "DefaultComponent",
        "TransportVehicle": true,
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": {
                "Armor": 0
            },
            "SettingMultipliers": []
        }
    },
    "Vehicles/Components/Light_Tank_Hull/IFV_Hull": {
        "Name": "IFV Model",
        "Description": "A hull style designed for engaging targets. Has additional utilities for ammo supply and protection, at the cost of transport capabilities.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 250,
        "SectionData": {
            "SectionMultipliers": {
                "Armor": 0.1
            },
            "SettingMultipliers": []
        }
    },
    "Vehicles/Components/LTV_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Standard stock armor plating for light transports.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/LTV_Armor/Extra_Plating": {
        "Name": "Extra Plating",
        "NamePrefix": "MRAP",
        "AttachmentType": "DefaultComponent",
        "Description": "MRAP style armor protects the occupants, at the expense of speed.",
        "BaseCost": 150,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.4,
                "Armor": 0.4
            },
            "SettingMultipliers": {
                "MaxSpeed": -0.1,
                "ReverseSpeed": -0.075
            }
        }
    },
    "Vehicles/Components/LTV_Armor/Lighter_Alloy": {
        "Name": "Lighter Alloy",
        "AttachmentType": "DefaultComponent",
        "Description": "Lighter alloys and Chassis mods that reduce weight to improve speed, at the cost of protection and armor durability.",
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "MaxAllowedSpeed": 0.1,
                "MaxSpeed": 0.1,
                "ReverseSpeed": 0.075
            }
        }
    },
    "Vehicles/Components/LTV_Engine/Default_Engine": {
        "Name": "Stock Engine",
        "Description": "Standard stock engine for light transports.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/LTV_Engine/Performance_Engine": {
        "Name": "Performance Engine",
        "Description": "Powerful engine that delivers higher performance than standard engines. Its intricate parts make it more susceptible to damage.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 25,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.15,
                "HullDamageMult": 0.1
            },
            "SettingMultipliers": {
                "MaxAllowedSpeed": 0.2,
                "MaxSpeed": 0.2,
                "ReverseSpeed": 0.1
            }
        }
    },
    "Vehicles/Components/LTV_Engine/Reinforced_Engine": {
        "Name": "Reinforced Engine",
        "Description": "An engine that's been encased in a protective slot. It runs at a reduced setting to avoid overheating.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 25,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.1,
                "Armor": 0.2,
                "HullDamageMult": -0.2
            },
            "SettingMultipliers": {
                "MaxSpeed": -0.1,
                "ReverseSpeed": 0.05
            }
        }
    },
    "Vehicles/Components/LTV_Hitched/Empty": {
        "Name": "None",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/LTV_Hitched/Towed_Field_Gun": {
        "Name": "Towed Field Gun",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 600
    },
    "Vehicles/Components/LTV_Trunk/LTV_Driver_Turret": {
        "Name": "Driver Turret",
        "AttachmentType": "BridgeComponent",
        "BaseCost": 500,
        "Attachments": [
            {
                "Slot": "Turret",
                "Type": "Ground_Turret_Small",
                "Default": "AA_Mounted_Turret",
                "Section": "Turret",
                "Owner": "Driver"
            }
        ]
    },
    "Vehicles/Components/LTV_Trunk/Seats_Gunner": {
        "Name": "Passenger Seats",
        "AttachmentType": "BridgeComponent",
        "TransportVehicle": true,
        "BaseCost": 0,
        "Attachments": [
            {
                "Slot": "Gunner Mount",
                "Type": "Ground_Gunner_Turret",
                "Default": "Empty",
                "Section": "Turret",
                "Owner": "Gunner"
            }
        ]
    },
    "Vehicles/Components/LTV_Wheels/All_Terrain_Wheels": {
        "Name": "All-Terrain Tires",
        "Description": "Tires specifically catered for off-road environments. More control, but heavier overall.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 25,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.1,
                "Armor": 0.15
            },
            "SettingMultipliers": {
                "MaxAllowedSpeed": -0.1,
                "MaxSpeed": -0.05,
                "ReverseSpeed": 0.025,
                "MaxSteer": 0.15,
                "WheelFriction": 0.25
            }
        }
    },
    "Vehicles/Components/LTV_Wheels/Default_Wheels": {
        "Name": "Stock Wheels",
        "AttachmentType": "DefaultComponent",
        "Description": "Stock tires for Light Transports.",
        "BaseCost": 0
    },
    "Vehicles/Components/LTV_Wheels/Light_Wheels": {
        "Name": "Light Tires",
        "Description": "Tires that have been optimized for speed, but have worse handling than stock tires.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 25,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.05,
                "Armor": -0.05
            },
            "SettingMultipliers": {
                "MaxAllowedSpeed": 0.1,
                "MaxSpeed": 0.1,
                "ReverseSpeed": 0.05,
                "MaxSteer": -0.15,
                "WheelFriction": -0.15
            }
        }
    },
    "Vehicles/Components/Plane_Armor/Aerodynamic_Frame": {
        "Name": "Aerodynamic Frame",
        "Description": "Lighter materials and less armoring, allowing for greater aerial maneuverability",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 50,
        "NamePrefix": "Light",
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "HardMaxSpeed": 0.2,
                "MaxLateralSpeed": 0.10,
                "PitchSpeed": 0.1,
                "YawSpeed": 0.1,
                "RollSpeed": 0.1,
                "Drag": -0.05,
                "DragLateral": -0.075,
                "DragUp": -0.05,
                "DragDown": -0.05
            }
        }
    },
    "Vehicles/Components/Plane_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Stock plane Fuselage, offering a balance between protection and maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": [],
            "SettingMultipliers": {
                "Drag": 0
            }
        }
    },
    "Vehicles/Components/Plane_Armor/Reinforced_Hull": {
        "Name": "Reinforced Hull",
        "Description": "Reinforces vulnerable instruments on the plane, offering greater protection, at the cost of maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 100,
        "NamePrefix": "Heavy",
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.125,
                "Armor": 0.1
            },
            "SettingMultipliers": {
                "SoftMaxSpeed": -0.1,
                "MaxLateralSpeed": -0.1,
                "PitchSpeed": -0.15,
                "YawSpeed": -0.15,
                "RollSpeed": -0.15,
                "Drag": 0.05,
                "DragLateral": 0.075,
                "DragUp": 0.05,
                "DragDown": 0.05
            }
        }
    },
    "Vehicles/Components/Plane_Engine/Default_Engine": {
        "Name": "Stock Engine",
        "Description": "Standard propeller engine that gives decent thrust with moderate protection.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Plane_Engine/Performance_Engine": {
        "Name": "Performance Engines",
        "Description": "Higher powered propeller engine that is capable of higher speeds, and higher altitudes, but has less protection.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 100,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "BaseThrottle": 0.1,
                "HardMaxSpeed": 0.1,
                "SoftMaxSpeed": 0.1,
                "HardMaxAltitude": 0.2,
                "SoftMaxAlitude": 0.2
            }
        }
    },
    "Vehicles/Components/Plane_Engine/Reinforced_Engine": {
        "Name": "Reinforced Engines",
        "Description": "Reinforced casing that keeps the Engine safer, but lowers its performance.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 75,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.15,
                "Armor": 0.1
            },
            "SettingMultipliers": {
                "BaseThrottle": -0.1,
                "HardMaxSpeed": -0.1,
                "SoftMaxSpeed": -0.1
            }
        }
    },
    "Vehicles/Components/Plane_Hardpoints/Heavy_Machine_Guns": {
        "Name": "Heavy Machine Guns",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 75,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_HMG",
                "Modifiers": {
                    "MultiBarrel": true
                },
                "Default": "HMG_12mm",
                "Priority": 0
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Plane_Hardpoints/Med_Machine_Guns": {
        "Name": "Med. Machine Guns",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 0,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_MMG",
                "Modifiers": {
                    "MultiBarrel": true
                },
                "Default": "MMG_9mm",
                "Priority": 0
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Plane_Under_Mount/Empty": {
        "Name": "None",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Plane_Under_Mount/Plane_Bombs": {
        "Name": "Mounted Bombs",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 200,
        "NameSuffix": "Bomber",
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Bombs",
                "Default": "SDB_HE"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Plane_Under_Mount/Plane_Rocket_Pods": {
        "Name": "Mounted Rockets",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 125,
        "NamePrefix": "Attack",
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Main_Rockets_Air",
                "Default": "Rocket_70mm",
                "ModifierMult": {
                    "ClipSize": 2,
                    "StockpileSize": 2
                }
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Tank_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Stock armor for a Battle Tank. Provides protection against small arms fire, and moderate protection against large projectiles.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Tank_Armor/Lighter_Alloy": {
        "Name": "Minimal Armor",
        "Description": "Armor reduced to its very essentials, resulting in higher top speeds, but less overall protection",
        "NamePrefix": "Light",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 75,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.15,
                "Armor": -0.05
            },
            "SettingMultipliers": {
                "MaxSpeed": 0.2,
                "ReverseSpeed": 0.1
            }
        }
    },
    "Vehicles/Components/Tank_Armor/Side_Plating": {
        "Name": "Side Plating",
        "Description": "Heavy reinforced siding that increases the durability and protectiveness of the hull, with the drawback of slower speeds.",
        "NamePrefix": "Heavy",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 75,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.15,
                "Armor": 0.05
            },
            "SettingMultipliers": {
                "MaxSpeed": -0.2,
                "ReverseSpeed": -0.1
            }
        }
    },
    "Vehicles/Components/Tank_Engine/Default_Engine": {
        "Name": "Empty",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Tank_Engine/Performance_Engine": {
        "Name": "Empty",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Tank_Engine/Reinforced_Engine": {
        "Name": "Empty",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Tank_Treads/Chained_Treads": {
        "Name": "Chained Treads",
        "Description": "Treads that come fitted with chains to allow for better grip on loose terrain, better handling, but reduced speeds.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 25,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.15,
                "Armor": 0.15
            },
            "SettingMultipliers": {
                "MaxSpeed": -0.05,
                "ReverseSpeed": 0.025,
                "MaxSteer": 0.15,
                "WheelFriction": 0.25
            }
        }
    },
    "Vehicles/Components/Tank_Treads/Default_Treads": {
        "Name": "Stock Treads",
        "Description": "Standard, stock tank treads.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Tank_Treads/Light_Treads": {
        "Name": "Performance Treads",
        "Description": "Treads that can operate at higher rates than standard, less durable, but considerably faster.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 50,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "MaxSpeed": 0.15,
                "ReverseSpeed": 0.075,
                "MaxSteer": -0.1,
                "WheelFriction": -0.15
            }
        }
    },
    "Vehicles/Components/Transport_Heli_Hull/Troop_Transport": {
        "Name": "Troop Transport Model",
        "Description": "A hull style designed for transportation. Contains Gunner mounts and passenger seating.",
        "AttachmentType": "BridgeComponent",
        "TransportVehicle": true,
        "VehicleGroup": "AirHelicopterTransport",
        "BaseCost": 0,
        "Attachments": [
            {
                "Slot": "Left Gunner",
                "Type": "Aircraft_Gunner_Turret",
                "Default": "Machine_Gun_Turret",
                "Owner": "LeftGunner",
                "Section": "Left Gunner",
                "Mirrored": true
            },
            {
                "Slot": "Right Gunner",
                "Type": "Aircraft_Gunner_Turret",
                "Default": "Machine_Gun_Turret",
                "Owner": "RightGunner",
                "Section": "Right Gunner"
            }
        ]
    },
    "Vehicles/Components/Truck_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Standard stock armor plating for military trucks.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Truck_Armor/Extra_Plating": {
        "Name": "Extra Plating",
        "NamePrefix": "Heavy",
        "AttachmentType": "DefaultComponent",
        "Description": "Heavier materials and extra plating around the windows to protect occupants, at the expense of speed.",
        "BaseCost": 50,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.15,
                "Armor": 0.05
            },
            "SettingMultipliers": {
                "MaxSpeed": -0.15,
                "ReverseSpeed": -0.075
            }
        }
    },
    "Vehicles/Components/Truck_Armor/Lighter_Alloy": {
        "Name": "Lighter Alloy",
        "AttachmentType": "DefaultComponent",
        "Description": "Lighter alloys that increase the vehicle's agility, at the expense of armor protection.",
        "BaseCost": 25,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.05
            },
            "SettingMultipliers": {
                "MaxAllowedSpeed": 0.1,
                "MaxSpeed": 0.15,
                "ReverseSpeed": 0.075
            }
        }
    },
    "Vehicles/Components/Truck_Bed/Large_Turret_Mount": {
        "Name": "Large Turret Bed",
        "AttachmentType": "BridgeComponent",
        "BaseCost": 400,
        "VehicleGroup": "LandArtillery",
        "Attachments": [
            {
                "Slot": "Truck_Mounted",
                "Type": "Truck_Mounted",
                "Default": "Artillery_Rocket_Launcher",
                "Owner": "Driver",
                "Section": "Turret",
                "Priority": 0
            }
        ]
    },
    "Vehicles/Components/Truck_Bed/Troop_Transport": {
        "Name": "Troop Transport",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0,
        "NamePrefix": "Transport",
        "TransportVehicle": true,
        "VehicleGroup": "LandLightArmor"
    },
    "Vehicles/Components/Truck_Mounted/Artillery_Rocket_Launcher": {
        "Name": "Rocket Artillery Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "Deployable": true,
        "BaseCost": 350,
        "NamePrefix": "Artillery",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 75,
            "MinPitch": -5,
            "MaxYawOmega": 1.0471975511965976,
            "MaxPitchOmega": 1.5707963267948966
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Rockets",
                "Default": "HE_Rocket_70mm"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 11.5,
            "Health": 100,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Truck_Mounted/Field_Gun_Mounted_Turret": {
        "Name": "Mounted Field Gun",
        "AttachmentType": "BaseVehicleWeapon",
        "Deployable": true,
        "BaseCost": 450,
        "NamePrefix": "Gun",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 15,
            "MinPitch": -12,
            "MaxYawOmega": 1.0471975511965976,
            "MaxPitchOmega": 1.5707963267948966
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Artillery_Cannon",
                "Default": "HE_Cannon_120mm"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 11.5,
            "Health": 100,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Turret_Mounted_Med/Empty": {
        "Name": "Empty",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Turret_Mounted_Med/Mounted_Rocket_Pods": {
        "Name": "Mounted Rocket Pods",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "UsesTargettingHUD": true,
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Heavy_AA_Rockets",
                "Default": "HE_Self_Defense_Rocket",
                "Modifiers": {},
                "ModifierMult": {
                    "ClipSize": 0.5,
                    "StockpileSize": 0.5
                }
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 20,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Vehicle_Rotor/Default_Rotor": {
        "Name": "Stock Rotor",
        "Description": "Stock Helicopter rotor that balances protection and thrust.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Vehicle_Rotor/Performance_Rotor": {
        "Name": "Performance Rotor",
        "Description": "Powerful helicopter rotor that sacrifices protection for thrust power.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1,
                "HullDamageMult": 0.1
            },
            "SettingMultipliers": {
                "MaxLateralSpeed": 0.10,
                "ThrustToWeight": 0.10
            }
        }
    },
    "Vehicles/Components/Vehicle_Rotor/Protected_Rotor": {
        "Name": "Reinforced Rotor",
        "Description": "Heavier rotor that has more protection against projectiles, at the cost of power.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.15,
                "Armor": 0.1,
                "HullDamageMult": -0.2
            },
            "SettingMultipliers": {
                "MaxLateralSpeed": -0.1,
                "ThrustToWeight": -0.1,
                "PitchSpeed": -0.1,
                "YawSpeed": -0.1,
                "RollSpeed": -0.1
            }
        }
    }
}`);const Z=class Z{static get(t){return Z.data[t]}};Kn(Z,"data",JSON.parse(rh.attritionJson)),Kn(Z,"sights",["Infantry/Components/Rifle/Ironsights","Infantry/Components/Rifle/Sights_Reflex","Infantry/Components/Rifle/Scope_4x","Infantry/Components/Rifle/Scope_12x"]),Kn(Z,"foregrips",["Infantry/Components/Rifle/No_Grip","Infantry/Components/Rifle/Vertical_Grip","Infantry/Components/Rifle/Bipod"]),Kn(Z,"barrels",["Infantry/Components/Rifle/Standard_Barrel","Infantry/Components/Rifle/Heavy_Barrel","Infantry/Components/Rifle/Suppressor"]),Kn(Z,"structured",{weapons:{infantry:{AKR:"Infantry/Weapons/AKR",RPK:"Infantry/Weapons/RPK",AWM:"Infantry/Weapons/AWM",SVD:"Infantry/Weapons/SVD",SMG:"Infantry/Weapons/SMG","AK-AS":"Infantry/Weapons/AK-AS",Pistol:"Infantry/Weapons/Pistol","RPG-7":"Infantry/Weapons/RPG-7",AK_Type_E:"Infantry/Weapons/AK_Type_E","MG-42":"Infantry/Weapons/MG-42","PTRS-41":"Infantry/Weapons/PTRS-41",Mortar:"Infantry/Weapons/Mortar"},vehicle:{"120mm Cannon":{Stock:"Vehicles/Weapons/Cannon_120mm",HE:"Vehicles/Weapons/HE_Cannon_120mm",AP:"Vehicles/Weapons/AP_Cannon_120mm",Artillery:"Vehicles/Weapons/Artillery_Cannon_120mm"},"80mm Cannon":{Stock:"Vehicles/Weapons/Cannon_80mm",HE:"Vehicles/Weapons/HE_Cannon_80mm",AP:"Vehicles/Weapons/AP_Cannon_80mm"},"40mm Cannon":{HE:"Vehicles/Weapons/HE_40mm","Smoke (broken)":"Vehicles/Weapons/Smoke_40mm",Canister:"Vehicles/Weapons/Canister_40mm",LVG:"Vehicles/Weapons/LVG_40mm"},"Attack Rocket":{"70mm Incinerators":"Vehicles/Weapons/Rocket_70mm","85mm Pulverizers":"Vehicles/Weapons/Rocket_85mm"},"15mm Light Cannon":{Stock:"Vehicles/Weapons/Light_Cannon_15mm",AP:"Vehicles/Weapons/AP_Light_Cannon_15mm"},"25mm Light Cannon":{Stock:"Vehicles/Weapons/Light_Cannon_25mm",AP:"Vehicles/Weapons/AP_Light_Cannon_25mm"},"Machine Gun":{"6.5mm":"Vehicles/Weapons/LMG_65mm","7.62mm":"Vehicles/Weapons/HMG_762mm","9mm":"Vehicles/Weapons/MMG_9mm","12mm":"Vehicles/Weapons/HMG_12mm"},"8mm Minigun":{Stock:"Vehicles/Weapons/Minigun_8mm"},"Self Defense Rocket":{HE:"Vehicles/Weapons/HE_Self_Defense_Rocket",AV:"Vehicles/Weapons/AP_Self_Defense_Rocket"},Bomb:{HE:"Vehicles/Weapons/SDB_HE",AP:"Vehicles/Weapons/SDB_AP"},"30mm Rotary Cannon":{Berserker:"Vehicles/Weapons/Berserker_30mm"},"80mm Cannon (Air)":{HE:"Vehicles/Weapons/Thanatos_HE",AP:"Vehicles/Weapons/Thanatos_AP"},"AA Cannon":{"18mm":"Vehicles/Weapons/AA_18mm","25mm":"Vehicles/Weapons/AA_25mm","30mm":"Vehicles/Weapons/FLAK_30mm"},"25mm Autocannon":{Stock:"Vehicles/Weapons/Cannon_25mm",HE:"Vehicles/Weapons/HE_Cannon_25mm",AP:"Vehicles/Weapons/AP_Cannon_25mm"},TOW:{Stock:"Vehicles/Weapons/TEMP_TOW_Rocket"}}},components:{infantry:{"RPG-7":{Scope:Z.sights,Ammo:["Infantry/Components/RPG-7/RPG_Stock","Infantry/Components/RPG-7/RPG_HV","Infantry/Components/RPG-7/RPG_Flak","Infantry/Components/RPG-7/RPG_Cluster"]},AKR:{Scope:Z.sights,Foregrip:Z.foregrips,Barrel:Z.barrels},RPK:{Scope:Z.sights,Foregrip:Z.foregrips,Barrel:Z.barrels},AWM:{Scope:Z.sights,Foregrip:Z.foregrips,Barrel:Z.barrels},SVD:{Scope:Z.sights,Foregrip:Z.foregrips,Barrel:Z.barrels},SMG:{Scope:Z.sights,Barrel:Z.barrels},"AK-AS":{Scope:Z.sights,Foregrip:Z.foregrips,Muzzle:["Infantry/Components/AK-AS/Standard_Barrel","Infantry/Components/AK-AS/Shotgun_Choke","Infantry/Components/AK-AS/Shotgun_Suppressor"],"Ammo ":["Infantry/Components/AK-AS/Ammo_Slugs","Infantry/Components/AK-AS/Ammo_Buckshot","Infantry/Components/AK-AS/Ammo_Flechette"]},Pistol:{Scope:Z.sights,Barrel:Z.barrels},AK_Type_E:{Scope:Z.sights,Foregrip:Z.foregrips,"Ammo  ":["Infantry/Components/AK_Type_E/HE_40mm","Infantry/Components/AK_Type_E/FLAK_40mm","Infantry/Components/AK_Type_E/Canister_40mm","Infantry/Components/AK_Type_E/LVG_40mm"]},"MG-42":{Scope:Z.sights,Barrel:Z.barrels},"PTRS-41":{Scope:Z.sights,Barrel:Z.barrels},Mortar:{Ammo:["Infantry/Components/Mortar/Stock_Shells"]}},vehicles:{"Light Tank":{Hull:["Vehicles/Components/Light_Tank_Hull/APC_Hull","Vehicles/Components/Light_Tank_Hull/IFV_Hull"],Armor:["Vehicles/Components/APC_Armor/Default_Armor","Vehicles/Components/APC_Armor/Lighter_Alloy","Vehicles/Components/APC_Armor/Slat_Armor"],Engine:["Vehicles/Components/LTV_Engine/Default_Engine","Vehicles/Components/LTV_Engine/Performance_Engine","Vehicles/Components/LTV_Engine/Reinforced_Engine"],Wheels:["Vehicles/Components/LTV_Wheels/Default_Wheels","Vehicles/Components/LTV_Wheels/Light_Wheels","Vehicles/Components/LTV_Wheels/All_Terrain_Wheels"],Turret:["Vehicles/Components/Ground_Turret_Med/APC_AA_Turret","Vehicles/Components/Ground_Turret_Med/APC_Cannon","Vehicles/Components/Ground_Turret_Med/APC_Grenade_Turret","Vehicles/Components/Ground_Turret_Med/APC_Heavy_Cannon"],Gunner:["Vehicles/Components/Ground_Gunner_Turret/Gunner_MG","Vehicles/Components/Ground_Gunner_Turret/Manned_Grenade_Launcher","Vehicles/Components/Ground_Turret_Small/AA_Mounted_Turret"]},"Attack Helicopter":{Armor:["Vehicles/Components/Attack_Heli_Armor/Default_Armor","Vehicles/Components/Attack_Heli_Armor/Aerodynamic_Frame","Vehicles/Components/Attack_Heli_Armor/Reinforced_Hull"],Rotor:["Vehicles/Components/Vehicle_Rotor/Default_Rotor","Vehicles/Components/Vehicle_Rotor/Performance_Rotor","Vehicles/Components/Vehicle_Rotor/Protected_Rotor"],Weapons:["Vehicles/Components/Aircraft_Mounted_Med/Aircraft_Rockets","Vehicles/Components/Aircraft_Mounted_Med/Machine_Guns"],Turret:["Vehicles/Components/Aircraft_Mounted_Small/Aircraft_Light_Cannon"]},"Attack Jet":{Armor:["Vehicles/Components/Plane_Armor/Default_Armor","Vehicles/Components/Plane_Armor/Aerodynamic_Frame","Vehicles/Components/Plane_Armor/Reinforced_Hull"],Engine:["Vehicles/Components/Jet_Engines/Default_Engines","Vehicles/Components/Jet_Engines/Performance_Engines","Vehicles/Components/Jet_Engines/Reinforced_Engines"],Turret:["Vehicles/Components/Aircraft_Turret_Med/Air_30mm_Turret","Vehicles/Components/Aircraft_Turret_Med/Air_80mm_Turret"],Weapons:["Vehicles/Components/Attack_Jet_Mounted/Empty","Vehicles/Components/Attack_Jet_Mounted/Jet_Rocket_Pods","Vehicles/Components/Attack_Jet_Mounted/Jet_Bombs"]},Jeep:{Armor:["Vehicles/Components/LTV_Armor/Default_Armor","Vehicles/Components/LTV_Armor/Lighter_Alloy","Vehicles/Components/LTV_Armor/Extra_Plating"],Engine:["Vehicles/Components/LTV_Engine/Default_Engine","Vehicles/Components/LTV_Engine/Performance_Engine","Vehicles/Components/LTV_Engine/Reinforced_Engine"],Wheels:["Vehicles/Components/LTV_Wheels/Default_Wheels","Vehicles/Components/LTV_Wheels/Light_Wheels","Vehicles/Components/LTV_Wheels/All_Terrain_Wheels"],Hitch:["Vehicles/Components/LTV_Hitched/Empty","Vehicles/Components/LTV_Hitched/Towed_Field_Gun"],Trunk:["Vehicles/Components/LTV_Trunk/Seats_Gunner","Vehicles/Components/LTV_Trunk/LTV_Driver_Turret"],Turret:["Vehicles/Components/Ground_Gunner_Turret/Gunner_MG","Vehicles/Components/Ground_Gunner_Turret/Manned_Grenade_Launcher","Vehicles/Components/Ground_Gunner_Turret/Manned_TOW_Launcher","Vehicles/Components/Ground_Turret_Small/AA_Mounted_Turret"]},"Battle Tank":{Armor:["Vehicles/Components/Tank_Armor/Default_Armor","Vehicles/Components/Tank_Armor/Lighter_Alloy","Vehicles/Components/Tank_Armor/Side_Plating"],Engine:["Vehicles/Components/LTV_Engine/Default_Engine","Vehicles/Components/LTV_Engine/Performance_Engine","Vehicles/Components/LTV_Engine/Reinforced_Engine"],Treads:["Vehicles/Components/Tank_Treads/Default_Treads","Vehicles/Components/Tank_Treads/Light_Treads","Vehicles/Components/Tank_Treads/Chained_Treads"],Turret:["Vehicles/Components/Ground_Turret_Large/Main_Cannon","Vehicles/Components/Ground_Turret_Large/AA_Turret"]},"Combat Truck":{Armor:["Vehicles/Components/Truck_Armor/Default_Armor","Vehicles/Components/Truck_Armor/Lighter_Alloy","Vehicles/Components/Truck_Armor/Extra_Plating"],Engine:["Vehicles/Components/LTV_Engine/Default_Engine","Vehicles/Components/LTV_Engine/Performance_Engine","Vehicles/Components/LTV_Engine/Reinforced_Engine"],Wheels:["Vehicles/Components/LTV_Wheels/Default_Wheels","Vehicles/Components/LTV_Wheels/Light_Wheels","Vehicles/Components/LTV_Wheels/All_Terrain_Wheels"],"Truck Bed":["Vehicles/Components/Truck_Bed/Troop_Transport","Vehicles/Components/Truck_Bed/Large_Turret_Mount"],Turret:["Vehicles/Components/Truck_Mounted/Field_Gun_Mounted_Turret","Vehicles/Components/Truck_Mounted/Artillery_Rocket_Launcher"]},"Fighter Plane":{Armor:["Vehicles/Components/Plane_Armor/Default_Armor","Vehicles/Components/Plane_Armor/Aerodynamic_Frame","Vehicles/Components/Plane_Armor/Reinforced_Hull"],Engine:["Vehicles/Components/Plane_Engine/Default_Engine","Vehicles/Components/Plane_Engine/Performance_Engine","Vehicles/Components/Plane_Engine/Reinforced_Engine"],Hardpoints:["Vehicles/Components/Plane_Hardpoints/Med_Machine_Guns","Vehicles/Components/Plane_Hardpoints/Heavy_Machine_Guns"],Weapons:["Vehicles/Components/Plane_Under_Mount/Empty","Vehicles/Components/Plane_Under_Mount/Plane_Bombs","Vehicles/Components/Plane_Under_Mount/Plane_Rocket_Pods"]},"Light Helicopter":{Armor:["Vehicles/Components/Light_Heli_Armor/Default_Armor","Vehicles/Components/Light_Heli_Armor/Aerodynamic_Frame","Vehicles/Components/Light_Heli_Armor/Reinforced_Hull"],Rotor:["Vehicles/Components/Vehicle_Rotor/Default_Rotor","Vehicles/Components/Vehicle_Rotor/Performance_Rotor","Vehicles/Components/Vehicle_Rotor/Protected_Rotor"],Weapons:["Vehicles/Components/Aircraft_Mounted_Small/Aircraft_Machine_Guns","Vehicles/Components/Aircraft_Mounted_Small/Aircraft_Miniguns","Vehicles/Components/Aircraft_Mounted_Small/Aircraft_Light_Cannon"]},"Transport Helicopter":{Hull:["Vehicles/Components/Transport_Heli_Hull/Troop_Transport"],Rotor:["Vehicles/Components/Vehicle_Rotor/Default_Rotor","Vehicles/Components/Vehicle_Rotor/Performance_Rotor","Vehicles/Components/Vehicle_Rotor/Protected_Rotor"],"Left Gunner":["Vehicles/Components/Aircraft_Gunner_Turret/Machine_Gun_Turret","Vehicles/Components/Aircraft_Gunner_Turret/Minigun_Turret"],"Right Gunner":["Vehicles/Components/Aircraft_Gunner_Turret/Machine_Gun_Turret","Vehicles/Components/Aircraft_Gunner_Turret/Minigun_Turret"]}}},vehicles:{Jeep:"Vehicles/Light_Transport","Battle Tank":"Vehicles/Battle_Tank","Combat Truck":"Vehicles/Combat_Truck","Light Tank":"Vehicles/Light_Tank","Attack Helicopter":"Vehicles/Attack_Helicopter","Attack Jet":"Vehicles/Attack_Jet","Fighter Plane":"Vehicles/Fighter_Plane","Light Helicopter":"Vehicles/Light_Helicopter","Transport Helicopter":"Vehicles/Transport_Helicopter"}});let ce=Z;class ${static round(t,n){return+t.toFixed(n)}static splitCase(t){return t.replace(new RegExp("(?<=[a-z])(?=[A-Z])","g")," ")}static renderIf(t,n){return t?n:null}static renderIfNotNull(t,n){return t!=null&&t!=null?n:null}static renderIfElse(t,n,r){return t?n:r}static plural(t,n,r="s"){return t==1?n:n+r}static formatNumber(t){return t.toLocaleString()}static if(t,n){return t?n:""}static copyObject(t){return JSON.parse(JSON.stringify(t))}}function Ht(e){return C.jsx("span",{tabIndex:0,"data-tooltip":e.tooltip,children:e.children})}function jc(e){return C.jsxs(Sn,{className:"p-8 rounded-md bg-zinc-900",children:[C.jsx(ir,{variant:"h4",gutterBottom:!0,className:"text-center",children:e.title}),C.jsx("hr",{className:"border-gray-400"}),e.children]})}function fT(){const e=Object.values(ce.structured.weapons.infantry).map(g=>({label:ce.get(g).ToolName,value:g})),[t,n]=x.useState(ce.get(e[0].value)),[r,o]=x.useState(e[0].label),[i,l]=x.useState([]),[a,s]=x.useState({});let u=t.MagazineSize>1?t.RateOfFire:1/(t.ReloadTime+t.ChamberTime);x.useEffect(()=>{v(r)},[]);function m(g){let y=ce.get(g);y.ArmorPiercing??(y.ArmorPiercing=0),y.FlakMult??(y.FlakMult=1),y.TerrainIntensity??(y.TerrainIntensity=1),y.ProjectileLifeTime??(y.ProjectileLifeTime=5),y.AimTimeMult??(y.AimTimeMult=1),n(y);let P=y.ToolName.replace(/ /g,"_");o(P);let f=Object.keys(ce.structured.components.infantry[P]);s(Object.keys(a).filter(c=>f.includes(c)).reduce((c,h)=>(c[h]=a[h],c),{})),v(P),d(P)}function p(g,y){a[g]=y,s(a),d(r)}function d(g){const y=pT();Object.values(a).forEach(c=>{let h=ce.get(c);Object.keys(h.Modifiers).forEach(S=>{y[S]+=h.Modifiers[S]??0})});let P={};Object.values(a).forEach(c=>{let h=ce.get(c);Object.keys(h.Overrides).forEach(S=>{P[S]=h.Overrides[S]})});let f=JSON.parse(JSON.stringify(ce.get(`Infantry/Weapons/${g}`)));Object.keys(P).forEach(c=>{f[c]=P[c]}),Object.keys(y).forEach(c=>{f[c]*=y[c],c!="RateOfFire"&&(f[c]=$.round(f[c],3))}),n(f)}function v(g){l(Object.keys(ce.structured.components.infantry[g]))}return C.jsxs(jc,{title:"Infantry Weapon Info",children:[C.jsx(Sn,{className:"p-8",children:C.jsxs(Fc,{gap:2,children:[C.jsx(ro,{id:"weapon",label:"Weapon",items:e,onChange:m}),i.map(g=>{let y=ce.structured.components.infantry[r][g];return C.jsx(ro,{id:g,label:g,items:y.map(P=>({label:ce.get(P).Name,value:P})),onChange:P=>p(g,P)},g)})]})}),C.jsxs(Sn,{className:"px-8 pb-8",children:[C.jsxs(ir,{variant:"h5",children:[t==null?void 0:t.ToolName," Stats"]}),C.jsx("hr",{className:"border-gray-600 mt-2 mb-4 mx-[-0.5rem]"}),C.jsxs("p",{children:["Weapon Type: ",$.splitCase(t.Action)]}),C.jsxs("p",{children:[C.jsx(Ht,{tooltip:"The spread of each bullet, while hipfiring and while aiming.",children:"Bullet Spread:"})," ",t.BulletSpread,"° (",t.AimBulletSpread,"° ADS)"]}),$.renderIf(t.ProjectilesPerRound>1,C.jsxs("p",{children:["Projectile Spread: ",t.ProjectileSpread,"°"]})),C.jsxs("p",{children:["Aim Time Multiplier: ",t.AimTimeMult,"x"]}),C.jsxs("p",{children:["Starting Ammo: ",t.StartingAmmo+t.MagazineSize+1,t.MagazineSize!=0?`/${t.MagazineSize+1}`:""]}),C.jsxs("p",{children:["Reload Time: ",t.ReloadTime+t.ChamberTime,"s"]}),$.renderIf(t.ProjectilesPerRound>1,C.jsxs("p",{children:["Projectiles Per Shot: ",t.ProjectilesPerRound??1]})),$.renderIfElse(!t.MinRange&&!t.MaxRange,C.jsxs("p",{children:["Damage: ",t.BulletDamage," hp"]}),C.jsxs("p",{children:["Damage: ",t.BulletDamage,"-",t.MinDamage," hp"]})),$.renderIf(t.ProjectilesPerRound>1,C.jsxs("p",{children:["Damage Per Bullet: ",!t.MinRange&&!t.MaxRange?`${$.round(t.BulletDamage/t.ProjectilesPerRound,3)}`:`${$.round(t.BulletDamage/t.ProjectilesPerRound,3)}-${$.round(t.MinDamage/t.ProjectilesPerRound,3)}`," hp"]})),$.renderIf(t.MagazineSize>1,C.jsxs("p",{children:["Infantry TTK: ",$.round(100/(t.BulletDamage*u),3),"-",$.round(100/(t.MinDamage*u),3),"s (",$.round(100/(t.BulletDamage*u*2),3),"-",$.round(100/(t.MinDamage*u*2),3),"s headshot)"]})),$.renderIf(t.MinRange&&t.MaxRange,C.jsxs("p",{children:[C.jsx(Ht,{tooltip:"Damage stays at the maximum value until it reaches the minimum range, then it falls off to the minimum damage by the maximum range and stays there.",children:"Damage Falloff:"})," ",t.MinRange,"-",t.MaxRange," studs"]})),C.jsxs("p",{children:[C.jsx(Ht,{tooltip:"The extent to which this weapon ignores armor.",children:"Armor Piercing:"})," ",$.round(t.ArmorPiercing*100,3),"%"]}),C.jsxs("p",{children:[C.jsx(Ht,{tooltip:"Damage multiplier against aerial targets.",children:"Flak Multiplier:"})," ",t.FlakMult,"x"]}),C.jsxs("p",{children:["Firerate: ",$.formatNumber($.round(u*60,3))," rpm"]}),C.jsxs("p",{children:["Muzzle Velocity: ",$.formatNumber(t.BulletSpeed)," studs/s"]}),$.renderIf(t.BulletSpeed!=0,C.jsxs("p",{children:["Max Range: ",$.formatNumber($.round(t.BulletSpeed*t.ProjectileLifeTime,3))," studs"]})),C.jsxs("p",{children:[C.jsx(Ht,{tooltip:"The time after which the projectile despawns.",children:"Lifetime:"})," ",t.ProjectileLifeTime,"s"]}),C.jsxs("p",{children:["First Shot Recoil Multiplier: ",t.FirstShotRecoilMult,"x"]}),C.jsxs("p",{children:["Vertical Recoil: ",t.VerticalRecoil]}),C.jsxs("p",{children:[C.jsx(Ht,{tooltip:"The direction the recoil is biased. Positive values indicate a right bias, while negative values indicate a left bias.",children:"Recoil Bias:"})," ",$.round(t.RecoilRight-t.RecoilLeft,3)]}),C.jsxs("p",{children:["Projectile Type: ",$.splitCase(t.ProjectileHitModule)]}),$.renderIfNotNull(t.ExplosionRadius,C.jsxs(C.Fragment,{children:[C.jsxs("p",{children:["Explosion Radius: ",t.ExplosionRadius," ",$.plural(t.ExplosionRadius,"stud")]}),C.jsxs("p",{children:["Explosion Intensity: ",t.ExplosionIntensity,"x"]}),C.jsxs("p",{children:["Terrain Intensity: ",t.TerrainIntensity,"x"]})]}))]})]})}function mT(){const e=Object.keys(ce.structured.weapons.vehicle).map(g=>({label:g,value:g})),[t,n]=x.useState(ce.get(Object.values(ce.structured.weapons.vehicle[e[0].value])[0])),[r,o]=x.useState(e[0].label),[i,l]=x.useState(Object.values(ce.structured.weapons.vehicle[r])[0]),[a,s]=x.useState(m(r));let u=t.ClipSize>1?t.FireRate:1/t.ReloadTime;function m(g){return Object.entries(ce.structured.weapons.vehicle[g]).map(y=>({label:y[0],value:y[1]}))}function p(g){return g.ArmorPiercing??(g.ArmorPiercing=0),g.FlakMult??(g.FlakMult=1),g.ProjectilesPerRound??(g.ProjectilesPerRound=1),g.TerrainIntensity??(g.TerrainIntensity=1),g.ProjectileLifeTime??(g.ProjectileLifeTime=5),g}function d(g){let y=m(g),P=ce.get(y[0].value);P=p(P),n(P);let f=g;o(f),l(y[0].value),s(m(f))}function v(g){let y=ce.get(g);y=p(y),n(y),l(g)}return C.jsxs(jc,{title:"Vehicle Weapon Info",children:[C.jsx(Sn,{className:"p-8",children:C.jsxs(Fc,{gap:2,children:[C.jsx(ro,{id:"weapon",label:"Weapon",items:e,onChange:d}),C.jsx(ro,{id:"variant",label:"Variant",items:a,value:i,onChange:v})]})}),C.jsxs(Sn,{className:"px-8 pb-8",children:[C.jsxs(ir,{variant:"h5",children:[t==null?void 0:t.WeaponName," Stats"]}),C.jsx("hr",{className:"border-gray-600 mt-2 mb-4 mx-[-0.5rem]"}),C.jsxs("p",{children:[C.jsx(Ht,{tooltip:"The spread of each bullet, while hipfiring and while aiming.",children:"Bullet Spread:"})," ",t.BulletSpread,"°"]}),$.renderIf(t.ProjectilesPerRound>1,C.jsxs("p",{children:["Projectile Spread: ",t.ProjectileSpread,"°"]})),C.jsxs("p",{children:["Starting Ammo: ",t.ClipSize+(t.Overheats?0:t.StockpileSize),t.ClipSize>1?`/${t.ClipSize}`:""]}),C.jsxs("p",{children:["Ammo Refill: ",t.AmmoRegen,"s"]}),C.jsxs("p",{children:["Reload Time: ",t.ReloadTime,"s"]}),$.renderIf(t.ProjectilesPerRound>1,C.jsxs("p",{children:["Projectiles Per Shot: ",t.ProjectilesPerRound??1]})),$.renderIfElse(!t.MinRange&&!t.MaxRange,C.jsxs("p",{children:["Damage: ",t.BulletDamage," hp"]}),C.jsxs("p",{children:["Damage: ",t.BulletDamage,"-",t.MinDamage," hp"]})),$.renderIf(t.ProjectilesPerRound>1,C.jsxs("p",{children:["Damage Per Bullet: ",!t.MinRange&&!t.MaxRange?`${$.round(t.BulletDamage/t.ProjectilesPerRound,3)}`:`${$.round(t.BulletDamage/t.ProjectilesPerRound,3)}-${$.round(t.MinDamage/t.ProjectilesPerRound,3)}`," hp"]})),$.renderIf(t.ClipSize>1,$.renderIfElse(!t.MinRange&&!t.MaxRange,C.jsxs("p",{children:["Infantry TTK: ",$.round(100/(t.BulletDamage*u),3),"s (",$.round(100/(t.BulletDamage*u*2),3),"s headshot)"]}),C.jsxs("p",{children:["Infantry TTK: ",$.round(100/(t.BulletDamage*u),3),"-",$.round(100/(t.MinDamage*u),3),"s (",$.round(100/(t.BulletDamage*u*2),3),"-",$.round(100/(t.MinDamage*u*2),3),"s headshot)"]}))),$.renderIf(t.MinRange&&t.MaxRange,C.jsxs("p",{children:[C.jsx(Ht,{tooltip:"Damage stays at the maximum value until it reaches the minimum range, then it falls off to the minimum damage by the maximum range and stays there.",children:"Damage Falloff:"})," ",t.MinRange,"-",t.MaxRange," studs"]})),C.jsxs("p",{children:[C.jsx(Ht,{tooltip:"The extent to which this weapon ignores armor.",children:"Armor Piercing:"})," ",$.round(t.ArmorPiercing*100,3),"%"]}),C.jsxs("p",{children:[C.jsx(Ht,{tooltip:"Damage multiplier against aerial targets.",children:"Flak Multiplier:"})," ",t.FlakMult,"x"]}),C.jsxs("p",{children:["Firerate: ",$.formatNumber($.round(u*60,3))," rpm"]}),C.jsxs("p",{children:["Muzzle Velocity: ",$.formatNumber(t.BulletSpeed)," studs/s ",$.if(t.UsesVelocityInheritance,"(Inherits Velocity)")]}),$.renderIf(t.BulletSpeed!=0,C.jsxs("p",{children:["Max Range: ",$.formatNumber($.round(t.BulletSpeed*t.ProjectileLifeTime,3))," studs"]})),C.jsxs("p",{children:[C.jsx(Ht,{tooltip:"The time after which the projectile despawns.",children:"Lifetime:"})," ",t.ProjectileLifeTime,"s"]}),C.jsxs("p",{children:["Projectile Type: ",$.splitCase(t.ProjectileHitModule)]}),$.renderIfNotNull(t.ExplosionRadius,C.jsxs(C.Fragment,{children:[C.jsxs("p",{children:["Explosion Radius: ",t.ExplosionRadius," ",$.plural(t.ExplosionRadius,"stud")]}),C.jsxs("p",{children:["Explosion Intensity: ",t.ExplosionIntensity,"x"]}),C.jsxs("p",{children:["Terrain Intensity: ",t.TerrainIntensity,"x"]})]}))]})]})}function hT(){const e=Object.entries(ce.structured.vehicles).map(u=>({label:u[0],value:u[1]})),[t,n]=x.useState(e[0]),[r,o]=x.useState({}),[i,l]=x.useState(ce.get(t.value));function a(u){let m=e.find(d=>d.value==u);n(m);let p={};Object.entries(ce.structured.components.vehicles[m.label]).forEach(d=>{p[d[0]]=d[1][0]}),o(p)}function s(u,m){u=="Truck Bed"&&m=="Vehicles/Components/Truck_Bed/Troop_Transport"&&(r.Turret="Vehicles/Components/LTV_Hitched/Empty"),r[u]=m,o({...r});let p=$.copyObject(ce.get(t.value)),d={};Object.keys(r).forEach(v=>{var y,P;let g=ce.get(r[v]);v=="Armor"&&(v="Hull"),g.TransportVehicle&&(p.TransportVehicle=g.TransportVehicle),g.VehicleGroup&&(p.VehicleGroup=g.VehicleGroup),p.BaseCost+=g.BaseCost??0,(y=g.SectionData)!=null&&y.Health?p.Sections[v]={...g.SectionData}:(P=g.SectionData)!=null&&P.SectionMultipliers&&(d[v]??(d[v]={Health:1,Armor:1,HullDamageMult:1}),d[v].Health+=g.SectionData.SectionMultipliers.Health??0,d[v].Armor+=g.SectionData.SectionMultipliers.Armor??0,d[v].HullDamageMult+=g.SectionData.SectionMultipliers.HullDamageMult??0)}),Object.keys(d).forEach(v=>{v=="Armor"&&(v="Hull"),p.Sections[v].Health*=d[v].Health,p.Sections[v].Armor*=d[v].Armor,p.Sections[v].HullDamageMult*=d[v].HullDamageMult}),l(p)}return C.jsxs(jc,{title:"Vehicle Info",children:[C.jsx(Sn,{className:"p-8",children:C.jsxs(Fc,{gap:2,children:[C.jsx(ro,{id:"vehicle",label:"Vehicle",items:e,onChange:a}),Object.keys(r).map(u=>{if(u=="Turret"&&t.label=="Combat Truck"&&r["Truck Bed"]=="Vehicles/Components/Truck_Bed/Troop_Transport"){r[u]="Vehicles/Components/LTV_Hitched/Empty";return}let m=ce.structured.components.vehicles[t.label][u].map(p=>({label:ce.get(p).Name,value:p}));return C.jsx(ro,{id:u,label:u,items:m,value:r[u],onChange:p=>s(u,p)},u)})]})}),C.jsxs(Sn,{className:"px-8 pb-8",children:[C.jsxs(ir,{variant:"h5",children:[t.label," Stats"]}),C.jsx("hr",{className:"border-gray-600 mt-2 mb-4 mx-[-0.5rem]"}),C.jsxs("p",{children:["Type: ",$.splitCase(i.VehicleGroup).replace(" "," - ")]}),C.jsxs("p",{children:["Cost: $",i.BaseCost]}),C.jsxs("p",{children:["Health: ",$.round(i.Sections.Hull.Health,3)," hp"]}),C.jsxs("p",{children:["Armor: ",$.round(i.Sections.Hull.Armor,3)]}),C.jsxs("p",{children:["Scrap Multiplier: ",i.ScrapYieldMultiplier,"x"]}),C.jsxs("p",{children:["Destruction Points: $",i.DestructionBonus*50]}),$.renderIf(i.SeatData&&Object.keys(i.SeatData).length!=0||i.GlobalDamageMultiplier!=null,C.jsx(ir,{variant:"h6",children:"Seats:"})),$.renderIfNotNull(i.GlobalDamageMultiplier,C.jsxs("p",{children:["Global Damage Multiplier: ",i.GlobalDamageMultiplier,"x"]})),Object.keys(i.SeatData).map(u=>C.jsxs("p",{children:[$.splitCase(u),": ",i.SeatData[u].DamageMultiplier,"x damage"]},u)),Object.keys(i.Sections).filter(u=>u!="Hull").map(u=>{let m=i.Sections[u];return C.jsxs("li",{children:[C.jsxs(ir,{variant:"h6",children:[u,":"]}),C.jsxs("p",{children:["Health: ",$.round(m.Health,3)," hp"]}),C.jsxs("p",{children:["Armor: ",$.round(m.Armor,3)]}),C.jsxs("p",{children:["Hull Damage Multiplier: ",$.round(m.HullDamageMult??1,3),"x"]})]},u)})]})]})}function gT(){return C.jsxs(Sn,{className:"p-8",children:[C.jsx(ir,{variant:"h2",gutterBottom:!0,className:"text-center",children:"Attrition Stats"}),C.jsxs(Sn,{className:"!flex !flex-col !gap-8 !mb-32",children:[C.jsx(fT,{}),C.jsx(mT,{}),C.jsx(hT,{})]})]})}const yT=$0({palette:{mode:"dark"}});Ss.createRoot(document.getElementById("root")).render(C.jsx(Wt.StrictMode,{children:C.jsxs(dx,{theme:yT,children:[C.jsx(o5,{}),C.jsx(gT,{})]})}));
