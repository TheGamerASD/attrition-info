var rh=Object.defineProperty;var oh=(e,t,n)=>t in e?rh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Kn=(e,t,n)=>(oh(e,typeof t!="symbol"?t+"":t,n),n);function ih(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Up(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gp={exports:{}},Bl={},Kp={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ui=Symbol.for("react.element"),lh=Symbol.for("react.portal"),ah=Symbol.for("react.fragment"),sh=Symbol.for("react.strict_mode"),uh=Symbol.for("react.profiler"),ch=Symbol.for("react.provider"),dh=Symbol.for("react.context"),ph=Symbol.for("react.forward_ref"),fh=Symbol.for("react.suspense"),mh=Symbol.for("react.memo"),hh=Symbol.for("react.lazy"),$c=Symbol.iterator;function gh(e){return e===null||typeof e!="object"?null:(e=$c&&e[$c]||e["@@iterator"],typeof e=="function"?e:null)}var Yp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qp=Object.assign,Xp={};function no(e,t,n){this.props=e,this.context=t,this.refs=Xp,this.updater=n||Yp}no.prototype.isReactComponent={};no.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};no.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qp(){}qp.prototype=no.prototype;function Cu(e,t,n){this.props=e,this.context=t,this.refs=Xp,this.updater=n||Yp}var Pu=Cu.prototype=new qp;Pu.constructor=Cu;Qp(Pu,no.prototype);Pu.isPureReactComponent=!0;var Vc=Array.isArray,Zp=Object.prototype.hasOwnProperty,Mu={current:null},Jp={key:!0,ref:!0,__self:!0,__source:!0};function ef(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Zp.call(t,r)&&!Jp.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ui,type:e,key:i,ref:l,props:o,_owner:Mu.current}}function yh(e,t){return{$$typeof:ui,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ru(e){return typeof e=="object"&&e!==null&&e.$$typeof===ui}function Sh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zc=/\/+/g;function Oa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sh(""+e.key):t.toString(36)}function Li(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ui:case lh:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Oa(l,0):r,Vc(o)?(n="",e!=null&&(n=e.replace(zc,"$&/")+"/"),Li(o,t,n,"",function(u){return u})):o!=null&&(Ru(o)&&(o=yh(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(zc,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Vc(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Oa(i,a);l+=Li(i,t,n,s,o)}else if(s=gh(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Oa(i,a++),l+=Li(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function vi(e,t,n){if(e==null)return e;var r=[],o=0;return Li(e,r,"","",function(i){return t.call(n,i,o++)}),r}function vh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ot={current:null},$i={transition:null},xh={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:$i,ReactCurrentOwner:Mu};Q.Children={map:vi,forEach:function(e,t,n){vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vi(e,function(){t++}),t},toArray:function(e){return vi(e,function(t){return t})||[]},only:function(e){if(!Ru(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=no;Q.Fragment=ah;Q.Profiler=uh;Q.PureComponent=Cu;Q.StrictMode=sh;Q.Suspense=fh;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xh;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qp({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Mu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Zp.call(t,s)&&!Jp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ui,type:e.type,key:o,ref:i,props:r,_owner:l}};Q.createContext=function(e){return e={$$typeof:dh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ch,_context:e},e.Consumer=e};Q.createElement=ef;Q.createFactory=function(e){var t=ef.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:ph,render:e}};Q.isValidElement=Ru;Q.lazy=function(e){return{$$typeof:hh,_payload:{_status:-1,_result:e},_init:vh}};Q.memo=function(e,t){return{$$typeof:mh,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=$i.transition;$i.transition={};try{e()}finally{$i.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return ot.current.useCallback(e,t)};Q.useContext=function(e){return ot.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return ot.current.useDeferredValue(e)};Q.useEffect=function(e,t){return ot.current.useEffect(e,t)};Q.useId=function(){return ot.current.useId()};Q.useImperativeHandle=function(e,t,n){return ot.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return ot.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return ot.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return ot.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return ot.current.useReducer(e,t,n)};Q.useRef=function(e){return ot.current.useRef(e)};Q.useState=function(e){return ot.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return ot.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return ot.current.useTransition()};Q.version="18.2.0";Kp.exports=Q;var x=Kp.exports;const Ht=Up(x),ys=ih({__proto__:null,default:Ht},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch=x,Ph=Symbol.for("react.element"),Mh=Symbol.for("react.fragment"),Rh=Object.prototype.hasOwnProperty,Th=Ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Eh={key:!0,ref:!0,__self:!0,__source:!0};function tf(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Rh.call(t,r)&&!Eh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Ph,type:e,key:i,ref:l,props:o,_owner:Th.current}}Bl.Fragment=Mh;Bl.jsx=tf;Bl.jsxs=tf;Gp.exports=Bl;var M=Gp.exports;var Ss={},nf={exports:{}},Pt={},rf={exports:{}},of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,b){var O=D.length;D.push(b);e:for(;0<O;){var q=O-1>>>1,K=D[q];if(0<o(K,b))D[q]=b,D[O]=K,O=q;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var b=D[0],O=D.pop();if(O!==b){D[0]=O;e:for(var q=0,K=D.length,_e=K>>>1;q<_e;){var X=2*(q+1)-1,ge=D[X],ie=X+1,We=D[ie];if(0>o(ge,O))ie<K&&0>o(We,ge)?(D[q]=We,D[ie]=O,q=ie):(D[q]=ge,D[X]=O,q=X);else if(ie<K&&0>o(We,O))D[q]=We,D[ie]=O,q=ie;else break e}}return b}function o(D,b){var O=D.sortIndex-b.sortIndex;return O!==0?O:D.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],m=1,h=null,f=3,y=!1,g=!1,S=!1,E=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(D){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=D)r(u),b.sortIndex=b.expirationTime,t(s,b);else break;b=n(u)}}function v(D){if(S=!1,p(D),!g)if(n(s)!==null)g=!0,$(R);else{var b=n(u);b!==null&&V(v,b.startTime-D)}}function R(D,b){g=!1,S&&(S=!1,d(w),w=-1),y=!0;var O=f;try{for(p(b),h=n(s);h!==null&&(!(h.expirationTime>b)||D&&!F());){var q=h.callback;if(typeof q=="function"){h.callback=null,f=h.priorityLevel;var K=q(h.expirationTime<=b);b=e.unstable_now(),typeof K=="function"?h.callback=K:h===n(s)&&r(s),p(b)}else r(s);h=n(s)}if(h!==null)var _e=!0;else{var X=n(u);X!==null&&V(v,X.startTime-b),_e=!1}return _e}finally{h=null,f=O,y=!1}}var T=!1,P=null,w=-1,A=5,k=-1;function F(){return!(e.unstable_now()-k<A)}function L(){if(P!==null){var D=e.unstable_now();k=D;var b=!0;try{b=P(!0,D)}finally{b?N():(T=!1,P=null)}}else T=!1}var N;if(typeof c=="function")N=function(){c(L)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,B=I.port2;I.port1.onmessage=L,N=function(){B.postMessage(null)}}else N=function(){E(L,0)};function $(D){P=D,T||(T=!0,N())}function V(D,b){w=E(function(){D(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,$(R))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(D){switch(f){case 1:case 2:case 3:var b=3;break;default:b=f}var O=f;f=b;try{return D()}finally{f=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,b){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var O=f;f=D;try{return b()}finally{f=O}},e.unstable_scheduleCallback=function(D,b,O){var q=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?q+O:q):O=q,D){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=O+K,D={id:m++,callback:b,priorityLevel:D,startTime:O,expirationTime:K,sortIndex:-1},O>q?(D.sortIndex=O,t(u,D),n(s)===null&&D===n(u)&&(S?(d(w),w=-1):S=!0,V(v,O-q))):(D.sortIndex=K,t(s,D),g||y||(g=!0,$(R))),D},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(D){var b=f;return function(){var O=f;f=b;try{return D.apply(this,arguments)}finally{f=O}}}})(of);rf.exports=of;var kh=rf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf=x,Ct=kh;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var af=new Set,Vo={};function pr(e,t){Ur(e,t),Ur(e+"Capture",t)}function Ur(e,t){for(Vo[e]=t,e=0;e<t.length;e++)af.add(t[e])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vs=Object.prototype.hasOwnProperty,Dh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hc={},Wc={};function wh(e){return vs.call(Wc,e)?!0:vs.call(Hc,e)?!1:Dh.test(e)?Wc[e]=!0:(Hc[e]=!0,!1)}function _h(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ah(e,t,n,r){if(t===null||typeof t>"u"||_h(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tu=/[\-:]([a-z])/g;function Eu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tu,Eu);Qe[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tu,Eu);Qe[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tu,Eu);Qe[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function ku(e,t,n,r){var o=Qe.hasOwnProperty(t)?Qe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ah(t,n,o,r)&&(n=null),r||o===null?wh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Sn=lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xi=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),Rr=Symbol.for("react.fragment"),Du=Symbol.for("react.strict_mode"),xs=Symbol.for("react.profiler"),sf=Symbol.for("react.provider"),uf=Symbol.for("react.context"),wu=Symbol.for("react.forward_ref"),Cs=Symbol.for("react.suspense"),Ps=Symbol.for("react.suspense_list"),_u=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),cf=Symbol.for("react.offscreen"),Uc=Symbol.iterator;function so(e){return e===null||typeof e!="object"?null:(e=Uc&&e[Uc]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Object.assign,ja;function Mo(e){if(ja===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ja=t&&t[1]||""}return`
`+ja+e}var La=!1;function $a(e,t){if(!e||La)return"";La=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{La=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mo(e):""}function bh(e){switch(e.tag){case 5:return Mo(e.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return e=$a(e.type,!1),e;case 11:return e=$a(e.type.render,!1),e;case 1:return e=$a(e.type,!0),e;default:return""}}function Ms(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rr:return"Fragment";case Mr:return"Portal";case xs:return"Profiler";case Du:return"StrictMode";case Cs:return"Suspense";case Ps:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uf:return(e.displayName||"Context")+".Consumer";case sf:return(e._context.displayName||"Context")+".Provider";case wu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _u:return t=e.displayName||null,t!==null?t:Ms(e.type)||"Memo";case Tn:t=e._payload,e=e._init;try{return Ms(e(t))}catch{}}return null}function Ih(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ms(t);case 8:return t===Du?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function df(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bh(e){var t=df(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ci(e){e._valueTracker||(e._valueTracker=Bh(e))}function pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=df(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function tl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rs(e,t){var n=t.checked;return Te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$n(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ff(e,t){t=t.checked,t!=null&&ku(e,"checked",t,!1)}function Ts(e,t){ff(e,t);var n=$n(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Es(e,t.type,n):t.hasOwnProperty("defaultValue")&&Es(e,t.type,$n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Kc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Es(e,t,n){(t!=="number"||tl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ro=Array.isArray;function Or(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$n(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ks(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Ro(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$n(n)}}function mf(e,t){var n=$n(t.value),r=$n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ds(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pi,gf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pi=Pi||document.createElement("div"),Pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fh=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(e){Fh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Do[t]=Do[e]})});function yf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Do.hasOwnProperty(e)&&Do[e]?(""+t).trim():t+"px"}function Sf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=yf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Nh=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ws(e,t){if(t){if(Nh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function _s(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var As=null;function Au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bs=null,jr=null,Lr=null;function Xc(e){if(e=pi(e)){if(typeof bs!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Ll(t),bs(e.stateNode,e.type,t))}}function vf(e){jr?Lr?Lr.push(e):Lr=[e]:jr=e}function xf(){if(jr){var e=jr,t=Lr;if(Lr=jr=null,Xc(e),t)for(e=0;e<t.length;e++)Xc(t[e])}}function Cf(e,t){return e(t)}function Pf(){}var Va=!1;function Mf(e,t,n){if(Va)return e(t,n);Va=!0;try{return Cf(e,t,n)}finally{Va=!1,(jr!==null||Lr!==null)&&(Pf(),xf())}}function Ho(e,t){var n=e.stateNode;if(n===null)return null;var r=Ll(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Is=!1;if(fn)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Is=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Is=!1}function Oh(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var wo=!1,nl=null,rl=!1,Bs=null,jh={onError:function(e){wo=!0,nl=e}};function Lh(e,t,n,r,o,i,l,a,s){wo=!1,nl=null,Oh.apply(jh,arguments)}function $h(e,t,n,r,o,i,l,a,s){if(Lh.apply(this,arguments),wo){if(wo){var u=nl;wo=!1,nl=null}else throw Error(_(198));rl||(rl=!0,Bs=u)}}function fr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qc(e){if(fr(e)!==e)throw Error(_(188))}function Vh(e){var t=e.alternate;if(!t){if(t=fr(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return qc(o),e;if(i===r)return qc(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Tf(e){return e=Vh(e),e!==null?Ef(e):null}function Ef(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ef(e);if(t!==null)return t;e=e.sibling}return null}var kf=Ct.unstable_scheduleCallback,Zc=Ct.unstable_cancelCallback,zh=Ct.unstable_shouldYield,Hh=Ct.unstable_requestPaint,be=Ct.unstable_now,Wh=Ct.unstable_getCurrentPriorityLevel,bu=Ct.unstable_ImmediatePriority,Df=Ct.unstable_UserBlockingPriority,ol=Ct.unstable_NormalPriority,Uh=Ct.unstable_LowPriority,wf=Ct.unstable_IdlePriority,Fl=null,en=null;function Gh(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Fl,e,void 0,(e.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:Qh,Kh=Math.log,Yh=Math.LN2;function Qh(e){return e>>>=0,e===0?32:31-(Kh(e)/Yh|0)|0}var Mi=64,Ri=4194304;function To(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function il(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=To(a):(i&=l,i!==0&&(r=To(i)))}else l=n&~o,l!==0?r=To(l):i!==0&&(r=To(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Wt(t),o=1<<n,r|=e[n],t&=~o;return r}function Xh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Wt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Xh(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Fs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _f(){var e=Mi;return Mi<<=1,!(Mi&4194240)&&(Mi=64),e}function za(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Wt(t),e[t]=n}function Zh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Wt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Iu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Wt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var le=0;function Af(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bf,Bu,If,Bf,Ff,Ns=!1,Ti=[],An=null,bn=null,In=null,Wo=new Map,Uo=new Map,kn=[],Jh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jc(e,t){switch(e){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(t.pointerId)}}function co(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=pi(t),t!==null&&Bu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function eg(e,t,n,r,o){switch(t){case"focusin":return An=co(An,e,t,n,r,o),!0;case"dragenter":return bn=co(bn,e,t,n,r,o),!0;case"mouseover":return In=co(In,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Wo.set(i,co(Wo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Uo.set(i,co(Uo.get(i)||null,e,t,n,r,o)),!0}return!1}function Nf(e){var t=Jn(e.target);if(t!==null){var n=fr(t);if(n!==null){if(t=n.tag,t===13){if(t=Rf(n),t!==null){e.blockedOn=t,Ff(e.priority,function(){If(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Os(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);As=r,n.target.dispatchEvent(r),As=null}else return t=pi(n),t!==null&&Bu(t),e.blockedOn=n,!1;t.shift()}return!0}function ed(e,t,n){Vi(e)&&n.delete(t)}function tg(){Ns=!1,An!==null&&Vi(An)&&(An=null),bn!==null&&Vi(bn)&&(bn=null),In!==null&&Vi(In)&&(In=null),Wo.forEach(ed),Uo.forEach(ed)}function po(e,t){e.blockedOn===t&&(e.blockedOn=null,Ns||(Ns=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,tg)))}function Go(e){function t(o){return po(o,e)}if(0<Ti.length){po(Ti[0],e);for(var n=1;n<Ti.length;n++){var r=Ti[n];r.blockedOn===e&&(r.blockedOn=null)}}for(An!==null&&po(An,e),bn!==null&&po(bn,e),In!==null&&po(In,e),Wo.forEach(t),Uo.forEach(t),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)Nf(n),n.blockedOn===null&&kn.shift()}var $r=Sn.ReactCurrentBatchConfig,ll=!0;function ng(e,t,n,r){var o=le,i=$r.transition;$r.transition=null;try{le=1,Fu(e,t,n,r)}finally{le=o,$r.transition=i}}function rg(e,t,n,r){var o=le,i=$r.transition;$r.transition=null;try{le=4,Fu(e,t,n,r)}finally{le=o,$r.transition=i}}function Fu(e,t,n,r){if(ll){var o=Os(e,t,n,r);if(o===null)Za(e,t,r,al,n),Jc(e,r);else if(eg(o,e,t,n,r))r.stopPropagation();else if(Jc(e,r),t&4&&-1<Jh.indexOf(e)){for(;o!==null;){var i=pi(o);if(i!==null&&bf(i),i=Os(e,t,n,r),i===null&&Za(e,t,r,al,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Za(e,t,r,null,n)}}var al=null;function Os(e,t,n,r){if(al=null,e=Au(r),e=Jn(e),e!==null)if(t=fr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return al=e,null}function Of(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wh()){case bu:return 1;case Df:return 4;case ol:case Uh:return 16;case wf:return 536870912;default:return 16}default:return 16}}var wn=null,Nu=null,zi=null;function jf(){if(zi)return zi;var e,t=Nu,n=t.length,r,o="value"in wn?wn.value:wn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return zi=o.slice(e,1<r?1-r:void 0)}function Hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ei(){return!0}function td(){return!1}function Mt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ei:td,this.isPropagationStopped=td,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ei)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ei)},persist:function(){},isPersistent:Ei}),t}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ou=Mt(ro),di=Te({},ro,{view:0,detail:0}),og=Mt(di),Ha,Wa,fo,Nl=Te({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fo&&(fo&&e.type==="mousemove"?(Ha=e.screenX-fo.screenX,Wa=e.screenY-fo.screenY):Wa=Ha=0,fo=e),Ha)},movementY:function(e){return"movementY"in e?e.movementY:Wa}}),nd=Mt(Nl),ig=Te({},Nl,{dataTransfer:0}),lg=Mt(ig),ag=Te({},di,{relatedTarget:0}),Ua=Mt(ag),sg=Te({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),ug=Mt(sg),cg=Te({},ro,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dg=Mt(cg),pg=Te({},ro,{data:0}),rd=Mt(pg),fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hg[e])?!!t[e]:!1}function ju(){return gg}var yg=Te({},di,{key:function(e){if(e.key){var t=fg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sg=Mt(yg),vg=Te({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),od=Mt(vg),xg=Te({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),Cg=Mt(xg),Pg=Te({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mg=Mt(Pg),Rg=Te({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tg=Mt(Rg),Eg=[9,13,27,32],Lu=fn&&"CompositionEvent"in window,_o=null;fn&&"documentMode"in document&&(_o=document.documentMode);var kg=fn&&"TextEvent"in window&&!_o,Lf=fn&&(!Lu||_o&&8<_o&&11>=_o),id=String.fromCharCode(32),ld=!1;function $f(e,t){switch(e){case"keyup":return Eg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function Dg(e,t){switch(e){case"compositionend":return Vf(t);case"keypress":return t.which!==32?null:(ld=!0,id);case"textInput":return e=t.data,e===id&&ld?null:e;default:return null}}function wg(e,t){if(Tr)return e==="compositionend"||!Lu&&$f(e,t)?(e=jf(),zi=Nu=wn=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lf&&t.locale!=="ko"?null:t.data;default:return null}}var _g={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ad(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_g[e.type]:t==="textarea"}function zf(e,t,n,r){vf(r),t=sl(t,"onChange"),0<t.length&&(n=new Ou("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ao=null,Ko=null;function Ag(e){Jf(e,0)}function Ol(e){var t=Dr(e);if(pf(t))return e}function bg(e,t){if(e==="change")return t}var Hf=!1;if(fn){var Ga;if(fn){var Ka="oninput"in document;if(!Ka){var sd=document.createElement("div");sd.setAttribute("oninput","return;"),Ka=typeof sd.oninput=="function"}Ga=Ka}else Ga=!1;Hf=Ga&&(!document.documentMode||9<document.documentMode)}function ud(){Ao&&(Ao.detachEvent("onpropertychange",Wf),Ko=Ao=null)}function Wf(e){if(e.propertyName==="value"&&Ol(Ko)){var t=[];zf(t,Ko,e,Au(e)),Mf(Ag,t)}}function Ig(e,t,n){e==="focusin"?(ud(),Ao=t,Ko=n,Ao.attachEvent("onpropertychange",Wf)):e==="focusout"&&ud()}function Bg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ol(Ko)}function Fg(e,t){if(e==="click")return Ol(t)}function Ng(e,t){if(e==="input"||e==="change")return Ol(t)}function Og(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gt=typeof Object.is=="function"?Object.is:Og;function Yo(e,t){if(Gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!vs.call(t,o)||!Gt(e[o],t[o]))return!1}return!0}function cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dd(e,t){var n=cd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cd(n)}}function Uf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gf(){for(var e=window,t=tl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tl(e.document)}return t}function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jg(e){var t=Gf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Uf(n.ownerDocument.documentElement,n)){if(r!==null&&$u(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=dd(n,i);var l=dd(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lg=fn&&"documentMode"in document&&11>=document.documentMode,Er=null,js=null,bo=null,Ls=!1;function pd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ls||Er==null||Er!==tl(r)||(r=Er,"selectionStart"in r&&$u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&Yo(bo,r)||(bo=r,r=sl(js,"onSelect"),0<r.length&&(t=new Ou("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function ki(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},Ya={},Kf={};fn&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function jl(e){if(Ya[e])return Ya[e];if(!kr[e])return e;var t=kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kf)return Ya[e]=t[n];return e}var Yf=jl("animationend"),Qf=jl("animationiteration"),Xf=jl("animationstart"),qf=jl("transitionend"),Zf=new Map,fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(e,t){Zf.set(e,t),pr(t,[e])}for(var Qa=0;Qa<fd.length;Qa++){var Xa=fd[Qa],$g=Xa.toLowerCase(),Vg=Xa[0].toUpperCase()+Xa.slice(1);Wn($g,"on"+Vg)}Wn(Yf,"onAnimationEnd");Wn(Qf,"onAnimationIteration");Wn(Xf,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(qf,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function md(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$h(r,t,void 0,e),e.currentTarget=null}function Jf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;md(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;md(o,a,u),i=s}}}if(rl)throw e=Bs,rl=!1,Bs=null,e}function fe(e,t){var n=t[Ws];n===void 0&&(n=t[Ws]=new Set);var r=e+"__bubble";n.has(r)||(em(t,e,2,!1),n.add(r))}function qa(e,t,n){var r=0;t&&(r|=4),em(n,e,r,t)}var Di="_reactListening"+Math.random().toString(36).slice(2);function Qo(e){if(!e[Di]){e[Di]=!0,af.forEach(function(n){n!=="selectionchange"&&(zg.has(n)||qa(n,!1,e),qa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Di]||(t[Di]=!0,qa("selectionchange",!1,t))}}function em(e,t,n,r){switch(Of(t)){case 1:var o=ng;break;case 4:o=rg;break;default:o=Fu}n=o.bind(null,t,n,e),o=void 0,!Is||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Za(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Jn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Mf(function(){var u=i,m=Au(n),h=[];e:{var f=Zf.get(e);if(f!==void 0){var y=Ou,g=e;switch(e){case"keypress":if(Hi(n)===0)break e;case"keydown":case"keyup":y=Sg;break;case"focusin":g="focus",y=Ua;break;case"focusout":g="blur",y=Ua;break;case"beforeblur":case"afterblur":y=Ua;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Cg;break;case Yf:case Qf:case Xf:y=ug;break;case qf:y=Mg;break;case"scroll":y=og;break;case"wheel":y=Tg;break;case"copy":case"cut":case"paste":y=dg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=od}var S=(t&4)!==0,E=!S&&e==="scroll",d=S?f!==null?f+"Capture":null:f;S=[];for(var c=u,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,d!==null&&(v=Ho(c,d),v!=null&&S.push(Xo(c,v,p)))),E)break;c=c.return}0<S.length&&(f=new y(f,g,null,n,m),h.push({event:f,listeners:S}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==As&&(g=n.relatedTarget||n.fromElement)&&(Jn(g)||g[mn]))break e;if((y||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?Jn(g):null,g!==null&&(E=fr(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(S=nd,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=od,v="onPointerLeave",d="onPointerEnter",c="pointer"),E=y==null?f:Dr(y),p=g==null?f:Dr(g),f=new S(v,c+"leave",y,n,m),f.target=E,f.relatedTarget=p,v=null,Jn(m)===u&&(S=new S(d,c+"enter",g,n,m),S.target=p,S.relatedTarget=E,v=S),E=v,y&&g)t:{for(S=y,d=g,c=0,p=S;p;p=hr(p))c++;for(p=0,v=d;v;v=hr(v))p++;for(;0<c-p;)S=hr(S),c--;for(;0<p-c;)d=hr(d),p--;for(;c--;){if(S===d||d!==null&&S===d.alternate)break t;S=hr(S),d=hr(d)}S=null}else S=null;y!==null&&hd(h,f,y,S,!1),g!==null&&E!==null&&hd(h,E,g,S,!0)}}e:{if(f=u?Dr(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var R=bg;else if(ad(f))if(Hf)R=Ng;else{R=Bg;var T=Ig}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=Fg);if(R&&(R=R(e,u))){zf(h,R,n,m);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Es(f,"number",f.value)}switch(T=u?Dr(u):window,e){case"focusin":(ad(T)||T.contentEditable==="true")&&(Er=T,js=u,bo=null);break;case"focusout":bo=js=Er=null;break;case"mousedown":Ls=!0;break;case"contextmenu":case"mouseup":case"dragend":Ls=!1,pd(h,n,m);break;case"selectionchange":if(Lg)break;case"keydown":case"keyup":pd(h,n,m)}var P;if(Lu)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Tr?$f(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(Lf&&n.locale!=="ko"&&(Tr||w!=="onCompositionStart"?w==="onCompositionEnd"&&Tr&&(P=jf()):(wn=m,Nu="value"in wn?wn.value:wn.textContent,Tr=!0)),T=sl(u,w),0<T.length&&(w=new rd(w,e,null,n,m),h.push({event:w,listeners:T}),P?w.data=P:(P=Vf(n),P!==null&&(w.data=P)))),(P=kg?Dg(e,n):wg(e,n))&&(u=sl(u,"onBeforeInput"),0<u.length&&(m=new rd("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:u}),m.data=P))}Jf(h,t)})}function Xo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ho(e,n),i!=null&&r.unshift(Xo(e,i,o)),i=Ho(e,t),i!=null&&r.push(Xo(e,i,o))),e=e.return}return r}function hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hd(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Ho(n,i),s!=null&&l.unshift(Xo(n,s,a))):o||(s=Ho(n,i),s!=null&&l.push(Xo(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Hg=/\r\n?/g,Wg=/\u0000|\uFFFD/g;function gd(e){return(typeof e=="string"?e:""+e).replace(Hg,`
`).replace(Wg,"")}function wi(e,t,n){if(t=gd(t),gd(e)!==t&&n)throw Error(_(425))}function ul(){}var $s=null,Vs=null;function zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hs=typeof setTimeout=="function"?setTimeout:void 0,Ug=typeof clearTimeout=="function"?clearTimeout:void 0,yd=typeof Promise=="function"?Promise:void 0,Gg=typeof queueMicrotask=="function"?queueMicrotask:typeof yd<"u"?function(e){return yd.resolve(null).then(e).catch(Kg)}:Hs;function Kg(e){setTimeout(function(){throw e})}function Ja(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Go(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Go(t)}function Bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var oo=Math.random().toString(36).slice(2),Zt="__reactFiber$"+oo,qo="__reactProps$"+oo,mn="__reactContainer$"+oo,Ws="__reactEvents$"+oo,Yg="__reactListeners$"+oo,Qg="__reactHandles$"+oo;function Jn(e){var t=e[Zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mn]||n[Zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sd(e);e!==null;){if(n=e[Zt])return n;e=Sd(e)}return t}e=n,n=e.parentNode}return null}function pi(e){return e=e[Zt]||e[mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Ll(e){return e[qo]||null}var Us=[],wr=-1;function Un(e){return{current:e}}function me(e){0>wr||(e.current=Us[wr],Us[wr]=null,wr--)}function de(e,t){wr++,Us[wr]=e.current,e.current=t}var Vn={},et=Un(Vn),ct=Un(!1),ir=Vn;function Gr(e,t){var n=e.type.contextTypes;if(!n)return Vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function dt(e){return e=e.childContextTypes,e!=null}function cl(){me(ct),me(et)}function vd(e,t,n){if(et.current!==Vn)throw Error(_(168));de(et,t),de(ct,n)}function tm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,Ih(e)||"Unknown",o));return Te({},n,r)}function dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vn,ir=et.current,de(et,e),de(ct,ct.current),!0}function xd(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=tm(e,t,ir),r.__reactInternalMemoizedMergedChildContext=e,me(ct),me(et),de(et,e)):me(ct),de(ct,n)}var sn=null,$l=!1,es=!1;function nm(e){sn===null?sn=[e]:sn.push(e)}function Xg(e){$l=!0,nm(e)}function Gn(){if(!es&&sn!==null){es=!0;var e=0,t=le;try{var n=sn;for(le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sn=null,$l=!1}catch(o){throw sn!==null&&(sn=sn.slice(e+1)),kf(bu,Gn),o}finally{le=t,es=!1}}return null}var _r=[],Ar=0,pl=null,fl=0,_t=[],At=0,lr=null,cn=1,dn="";function Qn(e,t){_r[Ar++]=fl,_r[Ar++]=pl,pl=e,fl=t}function rm(e,t,n){_t[At++]=cn,_t[At++]=dn,_t[At++]=lr,lr=e;var r=cn;e=dn;var o=32-Wt(r)-1;r&=~(1<<o),n+=1;var i=32-Wt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,cn=1<<32-Wt(t)+o|n<<o|r,dn=i+e}else cn=1<<i|n<<o|r,dn=e}function Vu(e){e.return!==null&&(Qn(e,1),rm(e,1,0))}function zu(e){for(;e===pl;)pl=_r[--Ar],_r[Ar]=null,fl=_r[--Ar],_r[Ar]=null;for(;e===lr;)lr=_t[--At],_t[At]=null,dn=_t[--At],_t[At]=null,cn=_t[--At],_t[At]=null}var St=null,yt=null,xe=!1,Vt=null;function om(e,t){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,St=e,yt=Bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,St=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=lr!==null?{id:cn,overflow:dn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,St=e,yt=null,!0):!1;default:return!1}}function Gs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ks(e){if(xe){var t=yt;if(t){var n=t;if(!Cd(e,t)){if(Gs(e))throw Error(_(418));t=Bn(n.nextSibling);var r=St;t&&Cd(e,t)?om(r,n):(e.flags=e.flags&-4097|2,xe=!1,St=e)}}else{if(Gs(e))throw Error(_(418));e.flags=e.flags&-4097|2,xe=!1,St=e}}}function Pd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;St=e}function _i(e){if(e!==St)return!1;if(!xe)return Pd(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zs(e.type,e.memoizedProps)),t&&(t=yt)){if(Gs(e))throw im(),Error(_(418));for(;t;)om(e,t),t=Bn(t.nextSibling)}if(Pd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=Bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=St?Bn(e.stateNode.nextSibling):null;return!0}function im(){for(var e=yt;e;)e=Bn(e.nextSibling)}function Kr(){yt=St=null,xe=!1}function Hu(e){Vt===null?Vt=[e]:Vt.push(e)}var qg=Sn.ReactCurrentBatchConfig;function Lt(e,t){if(e&&e.defaultProps){t=Te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ml=Un(null),hl=null,br=null,Wu=null;function Uu(){Wu=br=hl=null}function Gu(e){var t=ml.current;me(ml),e._currentValue=t}function Ys(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vr(e,t){hl=e,Wu=br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ut=!0),e.firstContext=null)}function Bt(e){var t=e._currentValue;if(Wu!==e)if(e={context:e,memoizedValue:t,next:null},br===null){if(hl===null)throw Error(_(308));br=e,hl.dependencies={lanes:0,firstContext:e}}else br=br.next=e;return t}var er=null;function Ku(e){er===null?er=[e]:er.push(e)}function lm(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ku(t)):(n.next=o.next,o.next=n),t.interleaved=n,hn(e,r)}function hn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var En=!1;function Yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function am(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,hn(e,n)}return o=r.interleaved,o===null?(t.next=t,Ku(r)):(t.next=o.next,o.next=t),r.interleaved=t,hn(e,n)}function Wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Iu(e,n)}}function Md(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function gl(e,t,n,r){var o=e.updateQueue;En=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,m=u=s=null,a=i;do{var f=a.lane,y=a.eventTime;if((r&f)===f){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,S=a;switch(f=t,y=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){h=g.call(y,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,f=typeof g=="function"?g.call(y,h,f):g,f==null)break e;h=Te({},h,f);break e;case 2:En=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=y,s=h):m=m.next=y,l|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(m===null&&(s=h),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);sr|=l,e.lanes=l,e.memoizedState=h}}function Rd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var sm=new lf.Component().refs;function Qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vl={isMounted:function(e){return(e=e._reactInternals)?fr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),o=On(e),i=pn(r,o);i.payload=t,n!=null&&(i.callback=n),t=Fn(e,i,o),t!==null&&(Ut(t,e,o,r),Wi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),o=On(e),i=pn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Fn(e,i,o),t!==null&&(Ut(t,e,o,r),Wi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=On(e),o=pn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Fn(e,o,r),t!==null&&(Ut(t,e,r,n),Wi(t,e,r))}};function Td(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Yo(n,r)||!Yo(o,i):!0}function um(e,t,n){var r=!1,o=Vn,i=t.contextType;return typeof i=="object"&&i!==null?i=Bt(i):(o=dt(t)?ir:et.current,r=t.contextTypes,i=(r=r!=null)?Gr(e,o):Vn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ed(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vl.enqueueReplaceState(t,t.state,null)}function Xs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=sm,Yu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Bt(i):(i=dt(t)?ir:et.current,o.context=Gr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Qs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Vl.enqueueReplaceState(o,o.state,null),gl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function mo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===sm&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Ai(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kd(e){var t=e._init;return t(e._payload)}function cm(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=jn(d,c),d.index=0,d.sibling=null,d}function i(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,v){return c===null||c.tag!==6?(c=as(p,d.mode,v),c.return=d,c):(c=o(c,p),c.return=d,c)}function s(d,c,p,v){var R=p.type;return R===Rr?m(d,c,p.props.children,v,p.key):c!==null&&(c.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Tn&&kd(R)===c.type)?(v=o(c,p.props),v.ref=mo(d,c,p),v.return=d,v):(v=Xi(p.type,p.key,p.props,null,d.mode,v),v.ref=mo(d,c,p),v.return=d,v)}function u(d,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ss(p,d.mode,v),c.return=d,c):(c=o(c,p.children||[]),c.return=d,c)}function m(d,c,p,v,R){return c===null||c.tag!==7?(c=or(p,d.mode,v,R),c.return=d,c):(c=o(c,p),c.return=d,c)}function h(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=as(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case xi:return p=Xi(c.type,c.key,c.props,null,d.mode,p),p.ref=mo(d,null,c),p.return=d,p;case Mr:return c=ss(c,d.mode,p),c.return=d,c;case Tn:var v=c._init;return h(d,v(c._payload),p)}if(Ro(c)||so(c))return c=or(c,d.mode,p,null),c.return=d,c;Ai(d,c)}return null}function f(d,c,p,v){var R=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return R!==null?null:a(d,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xi:return p.key===R?s(d,c,p,v):null;case Mr:return p.key===R?u(d,c,p,v):null;case Tn:return R=p._init,f(d,c,R(p._payload),v)}if(Ro(p)||so(p))return R!==null?null:m(d,c,p,v,null);Ai(d,p)}return null}function y(d,c,p,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(p)||null,a(c,d,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xi:return d=d.get(v.key===null?p:v.key)||null,s(c,d,v,R);case Mr:return d=d.get(v.key===null?p:v.key)||null,u(c,d,v,R);case Tn:var T=v._init;return y(d,c,p,T(v._payload),R)}if(Ro(v)||so(v))return d=d.get(p)||null,m(c,d,v,R,null);Ai(c,v)}return null}function g(d,c,p,v){for(var R=null,T=null,P=c,w=c=0,A=null;P!==null&&w<p.length;w++){P.index>w?(A=P,P=null):A=P.sibling;var k=f(d,P,p[w],v);if(k===null){P===null&&(P=A);break}e&&P&&k.alternate===null&&t(d,P),c=i(k,c,w),T===null?R=k:T.sibling=k,T=k,P=A}if(w===p.length)return n(d,P),xe&&Qn(d,w),R;if(P===null){for(;w<p.length;w++)P=h(d,p[w],v),P!==null&&(c=i(P,c,w),T===null?R=P:T.sibling=P,T=P);return xe&&Qn(d,w),R}for(P=r(d,P);w<p.length;w++)A=y(P,d,w,p[w],v),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?w:A.key),c=i(A,c,w),T===null?R=A:T.sibling=A,T=A);return e&&P.forEach(function(F){return t(d,F)}),xe&&Qn(d,w),R}function S(d,c,p,v){var R=so(p);if(typeof R!="function")throw Error(_(150));if(p=R.call(p),p==null)throw Error(_(151));for(var T=R=null,P=c,w=c=0,A=null,k=p.next();P!==null&&!k.done;w++,k=p.next()){P.index>w?(A=P,P=null):A=P.sibling;var F=f(d,P,k.value,v);if(F===null){P===null&&(P=A);break}e&&P&&F.alternate===null&&t(d,P),c=i(F,c,w),T===null?R=F:T.sibling=F,T=F,P=A}if(k.done)return n(d,P),xe&&Qn(d,w),R;if(P===null){for(;!k.done;w++,k=p.next())k=h(d,k.value,v),k!==null&&(c=i(k,c,w),T===null?R=k:T.sibling=k,T=k);return xe&&Qn(d,w),R}for(P=r(d,P);!k.done;w++,k=p.next())k=y(P,d,w,k.value,v),k!==null&&(e&&k.alternate!==null&&P.delete(k.key===null?w:k.key),c=i(k,c,w),T===null?R=k:T.sibling=k,T=k);return e&&P.forEach(function(L){return t(d,L)}),xe&&Qn(d,w),R}function E(d,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Rr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case xi:e:{for(var R=p.key,T=c;T!==null;){if(T.key===R){if(R=p.type,R===Rr){if(T.tag===7){n(d,T.sibling),c=o(T,p.props.children),c.return=d,d=c;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Tn&&kd(R)===T.type){n(d,T.sibling),c=o(T,p.props),c.ref=mo(d,T,p),c.return=d,d=c;break e}n(d,T);break}else t(d,T);T=T.sibling}p.type===Rr?(c=or(p.props.children,d.mode,v,p.key),c.return=d,d=c):(v=Xi(p.type,p.key,p.props,null,d.mode,v),v.ref=mo(d,c,p),v.return=d,d=v)}return l(d);case Mr:e:{for(T=p.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=o(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=ss(p,d.mode,v),c.return=d,d=c}return l(d);case Tn:return T=p._init,E(d,c,T(p._payload),v)}if(Ro(p))return g(d,c,p,v);if(so(p))return S(d,c,p,v);Ai(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,p),c.return=d,d=c):(n(d,c),c=as(p,d.mode,v),c.return=d,d=c),l(d)):n(d,c)}return E}var Yr=cm(!0),dm=cm(!1),fi={},tn=Un(fi),Zo=Un(fi),Jo=Un(fi);function tr(e){if(e===fi)throw Error(_(174));return e}function Qu(e,t){switch(de(Jo,t),de(Zo,e),de(tn,fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ds(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ds(t,e)}me(tn),de(tn,t)}function Qr(){me(tn),me(Zo),me(Jo)}function pm(e){tr(Jo.current);var t=tr(tn.current),n=Ds(t,e.type);t!==n&&(de(Zo,e),de(tn,n))}function Xu(e){Zo.current===e&&(me(tn),me(Zo))}var Me=Un(0);function yl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ts=[];function qu(){for(var e=0;e<ts.length;e++)ts[e]._workInProgressVersionPrimary=null;ts.length=0}var Ui=Sn.ReactCurrentDispatcher,ns=Sn.ReactCurrentBatchConfig,ar=0,Re=null,Le=null,Ve=null,Sl=!1,Io=!1,ei=0,Zg=0;function Xe(){throw Error(_(321))}function Zu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gt(e[n],t[n]))return!1;return!0}function Ju(e,t,n,r,o,i){if(ar=i,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ui.current=e===null||e.memoizedState===null?n1:r1,e=n(r,o),Io){i=0;do{if(Io=!1,ei=0,25<=i)throw Error(_(301));i+=1,Ve=Le=null,t.updateQueue=null,Ui.current=o1,e=n(r,o)}while(Io)}if(Ui.current=vl,t=Le!==null&&Le.next!==null,ar=0,Ve=Le=Re=null,Sl=!1,t)throw Error(_(300));return e}function ec(){var e=ei!==0;return ei=0,e}function Qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Re.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Ft(){if(Le===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Ve===null?Re.memoizedState:Ve.next;if(t!==null)Ve=t,Le=e;else{if(e===null)throw Error(_(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ve===null?Re.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function ti(e,t){return typeof t=="function"?t(e):t}function rs(e){var t=Ft(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=Le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var m=u.lane;if((ar&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,Re.lanes|=m,sr|=m}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Gt(r,t.memoizedState)||(ut=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Re.lanes|=i,sr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function os(e){var t=Ft(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Gt(i,t.memoizedState)||(ut=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function fm(){}function mm(e,t){var n=Re,r=Ft(),o=t(),i=!Gt(r.memoizedState,o);if(i&&(r.memoizedState=o,ut=!0),r=r.queue,tc(ym.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,ni(9,gm.bind(null,n,r,o,t),void 0,null),ze===null)throw Error(_(349));ar&30||hm(n,t,o)}return o}function hm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gm(e,t,n,r){t.value=n,t.getSnapshot=r,Sm(t)&&vm(e)}function ym(e,t,n){return n(function(){Sm(t)&&vm(e)})}function Sm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gt(e,n)}catch{return!0}}function vm(e){var t=hn(e,1);t!==null&&Ut(t,e,1,-1)}function Dd(e){var t=Qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},t.queue=e,e=e.dispatch=t1.bind(null,Re,e),[t.memoizedState,e]}function ni(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xm(){return Ft().memoizedState}function Gi(e,t,n,r){var o=Qt();Re.flags|=e,o.memoizedState=ni(1|t,n,void 0,r===void 0?null:r)}function zl(e,t,n,r){var o=Ft();r=r===void 0?null:r;var i=void 0;if(Le!==null){var l=Le.memoizedState;if(i=l.destroy,r!==null&&Zu(r,l.deps)){o.memoizedState=ni(t,n,i,r);return}}Re.flags|=e,o.memoizedState=ni(1|t,n,i,r)}function wd(e,t){return Gi(8390656,8,e,t)}function tc(e,t){return zl(2048,8,e,t)}function Cm(e,t){return zl(4,2,e,t)}function Pm(e,t){return zl(4,4,e,t)}function Mm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rm(e,t,n){return n=n!=null?n.concat([e]):null,zl(4,4,Mm.bind(null,t,e),n)}function nc(){}function Tm(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Em(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function km(e,t,n){return ar&21?(Gt(n,t)||(n=_f(),Re.lanes|=n,sr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=n)}function Jg(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var r=ns.transition;ns.transition={};try{e(!1),t()}finally{le=n,ns.transition=r}}function Dm(){return Ft().memoizedState}function e1(e,t,n){var r=On(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wm(e))_m(t,n);else if(n=lm(e,t,n,r),n!==null){var o=nt();Ut(n,e,r,o),Am(n,t,r)}}function t1(e,t,n){var r=On(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wm(e))_m(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Gt(a,l)){var s=t.interleaved;s===null?(o.next=o,Ku(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=lm(e,t,o,r),n!==null&&(o=nt(),Ut(n,e,r,o),Am(n,t,r))}}function wm(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function _m(e,t){Io=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Am(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Iu(e,n)}}var vl={readContext:Bt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},n1={readContext:Bt,useCallback:function(e,t){return Qt().memoizedState=[e,t===void 0?null:t],e},useContext:Bt,useEffect:wd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gi(4194308,4,Mm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gi(4,2,e,t)},useMemo:function(e,t){var n=Qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=e1.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=Qt();return e={current:e},t.memoizedState=e},useState:Dd,useDebugValue:nc,useDeferredValue:function(e){return Qt().memoizedState=e},useTransition:function(){var e=Dd(!1),t=e[0];return e=Jg.bind(null,e[1]),Qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,o=Qt();if(xe){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ze===null)throw Error(_(349));ar&30||hm(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,wd(ym.bind(null,r,i,e),[e]),r.flags|=2048,ni(9,gm.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Qt(),t=ze.identifierPrefix;if(xe){var n=dn,r=cn;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ei++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},r1={readContext:Bt,useCallback:Tm,useContext:Bt,useEffect:tc,useImperativeHandle:Rm,useInsertionEffect:Cm,useLayoutEffect:Pm,useMemo:Em,useReducer:rs,useRef:xm,useState:function(){return rs(ti)},useDebugValue:nc,useDeferredValue:function(e){var t=Ft();return km(t,Le.memoizedState,e)},useTransition:function(){var e=rs(ti)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:fm,useSyncExternalStore:mm,useId:Dm,unstable_isNewReconciler:!1},o1={readContext:Bt,useCallback:Tm,useContext:Bt,useEffect:tc,useImperativeHandle:Rm,useInsertionEffect:Cm,useLayoutEffect:Pm,useMemo:Em,useReducer:os,useRef:xm,useState:function(){return os(ti)},useDebugValue:nc,useDeferredValue:function(e){var t=Ft();return Le===null?t.memoizedState=e:km(t,Le.memoizedState,e)},useTransition:function(){var e=os(ti)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:fm,useSyncExternalStore:mm,useId:Dm,unstable_isNewReconciler:!1};function Xr(e,t){try{var n="",r=t;do n+=bh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function is(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var i1=typeof WeakMap=="function"?WeakMap:Map;function bm(e,t,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cl||(Cl=!0,au=r),qs(e,t)},n}function Im(e,t,n){n=pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){qs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){qs(e,t),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function _d(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new i1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=v1.bind(null,e,t,n),t.then(e,e))}function Ad(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pn(-1,1),t.tag=2,Fn(n,t,1))),n.lanes|=1),e)}var l1=Sn.ReactCurrentOwner,ut=!1;function tt(e,t,n,r){t.child=e===null?dm(t,null,n,r):Yr(t,e.child,n,r)}function Id(e,t,n,r,o){n=n.render;var i=t.ref;return Vr(t,o),r=Ju(e,t,n,r,i,o),n=ec(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gn(e,t,o)):(xe&&n&&Vu(t),t.flags|=1,tt(e,t,r,o),t.child)}function Bd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!cc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Bm(e,t,i,r,o)):(e=Xi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(l,r)&&e.ref===t.ref)return gn(e,t,o)}return t.flags|=1,e=jn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Bm(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Yo(i,r)&&e.ref===t.ref)if(ut=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ut=!0);else return t.lanes=e.lanes,gn(e,t,o)}return Zs(e,t,n,r,o)}function Fm(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Br,ht),ht|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(Br,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,de(Br,ht),ht|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,de(Br,ht),ht|=r;return tt(e,t,o,n),t.child}function Nm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zs(e,t,n,r,o){var i=dt(n)?ir:et.current;return i=Gr(t,i),Vr(t,o),n=Ju(e,t,n,r,i,o),r=ec(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gn(e,t,o)):(xe&&r&&Vu(t),t.flags|=1,tt(e,t,n,o),t.child)}function Fd(e,t,n,r,o){if(dt(n)){var i=!0;dl(t)}else i=!1;if(Vr(t,o),t.stateNode===null)Ki(e,t),um(t,n,r),Xs(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=dt(n)?ir:et.current,u=Gr(t,u));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Ed(t,l,r,u),En=!1;var f=t.memoizedState;l.state=f,gl(t,r,l,o),s=t.memoizedState,a!==r||f!==s||ct.current||En?(typeof m=="function"&&(Qs(t,n,m,r),s=t.memoizedState),(a=En||Td(t,n,a,r,f,s,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,am(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Lt(t.type,a),l.props=u,h=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Bt(s):(s=dt(n)?ir:et.current,s=Gr(t,s));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||f!==s)&&Ed(t,l,r,s),En=!1,f=t.memoizedState,l.state=f,gl(t,r,l,o);var g=t.memoizedState;a!==h||f!==g||ct.current||En?(typeof y=="function"&&(Qs(t,n,y,r),g=t.memoizedState),(u=En||Td(t,n,u,r,f,g,s)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Js(e,t,n,r,i,o)}function Js(e,t,n,r,o,i){Nm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&xd(t,n,!1),gn(e,t,i);r=t.stateNode,l1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Yr(t,e.child,null,i),t.child=Yr(t,null,a,i)):tt(e,t,a,i),t.memoizedState=r.state,o&&xd(t,n,!0),t.child}function Om(e){var t=e.stateNode;t.pendingContext?vd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vd(e,t.context,!1),Qu(e,t.containerInfo)}function Nd(e,t,n,r,o){return Kr(),Hu(o),t.flags|=256,tt(e,t,n,r),t.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function tu(e){return{baseLanes:e,cachePool:null,transitions:null}}function jm(e,t,n){var r=t.pendingProps,o=Me.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),de(Me,o&1),e===null)return Ks(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ul(l,r,0,null),e=or(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=tu(n),t.memoizedState=eu,e):rc(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return a1(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=jn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=jn(a,i):(i=or(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?tu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=eu,r}return i=e.child,e=i.sibling,r=jn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rc(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bi(e,t,n,r){return r!==null&&Hu(r),Yr(t,e.child,null,n),e=rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function a1(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=is(Error(_(422))),bi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ul({mode:"visible",children:r.children},o,0,null),i=or(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Yr(t,e.child,null,l),t.child.memoizedState=tu(l),t.memoizedState=eu,i);if(!(t.mode&1))return bi(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(_(419)),r=is(i,r,void 0),bi(e,t,l,r)}if(a=(l&e.childLanes)!==0,ut||a){if(r=ze,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,hn(e,o),Ut(r,e,o,-1))}return uc(),r=is(Error(_(421))),bi(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=x1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,yt=Bn(o.nextSibling),St=t,xe=!0,Vt=null,e!==null&&(_t[At++]=cn,_t[At++]=dn,_t[At++]=lr,cn=e.id,dn=e.overflow,lr=t),t=rc(t,r.children),t.flags|=4096,t)}function Od(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ys(e.return,t,n)}function ls(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Lm(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(tt(e,t,r.children,n),r=Me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Od(e,n,t);else if(e.tag===19)Od(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(Me,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&yl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ls(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&yl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ls(t,!0,n,null,i);break;case"together":ls(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ki(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function s1(e,t,n){switch(t.tag){case 3:Om(t),Kr();break;case 5:pm(t);break;case 1:dt(t.type)&&dl(t);break;case 4:Qu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;de(ml,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(Me,Me.current&1),t.flags|=128,null):n&t.child.childLanes?jm(e,t,n):(de(Me,Me.current&1),e=gn(e,t,n),e!==null?e.sibling:null);de(Me,Me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),de(Me,Me.current),r)break;return null;case 22:case 23:return t.lanes=0,Fm(e,t,n)}return gn(e,t,n)}var $m,nu,Vm,zm;$m=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nu=function(){};Vm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,tr(tn.current);var i=null;switch(n){case"input":o=Rs(e,o),r=Rs(e,r),i=[];break;case"select":o=Te({},o,{value:void 0}),r=Te({},r,{value:void 0}),i=[];break;case"textarea":o=ks(e,o),r=ks(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ul)}ws(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&fe("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};zm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ho(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function u1(e,t,n){var r=t.pendingProps;switch(zu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return dt(t.type)&&cl(),qe(t),null;case 3:return r=t.stateNode,Qr(),me(ct),me(et),qu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vt!==null&&(cu(Vt),Vt=null))),nu(e,t),qe(t),null;case 5:Xu(t);var o=tr(Jo.current);if(n=t.type,e!==null&&t.stateNode!=null)Vm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return qe(t),null}if(e=tr(tn.current),_i(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Zt]=t,r[qo]=i,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(o=0;o<Eo.length;o++)fe(Eo[o],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Gc(r,i),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},fe("invalid",r);break;case"textarea":Yc(r,i),fe("invalid",r)}ws(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&wi(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&wi(r.textContent,a,e),o=["children",""+a]):Vo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&fe("scroll",r)}switch(n){case"input":Ci(r),Kc(r,i,!0);break;case"textarea":Ci(r),Qc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ul)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Zt]=t,e[qo]=r,$m(e,t,!1,!1),t.stateNode=e;e:{switch(l=_s(n,r),n){case"dialog":fe("cancel",e),fe("close",e),o=r;break;case"iframe":case"object":case"embed":fe("load",e),o=r;break;case"video":case"audio":for(o=0;o<Eo.length;o++)fe(Eo[o],e);o=r;break;case"source":fe("error",e),o=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),o=r;break;case"details":fe("toggle",e),o=r;break;case"input":Gc(e,r),o=Rs(e,r),fe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Te({},r,{value:void 0}),fe("invalid",e);break;case"textarea":Yc(e,r),o=ks(e,r),fe("invalid",e);break;default:o=r}ws(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Sf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&gf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&zo(e,s):typeof s=="number"&&zo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vo.hasOwnProperty(i)?s!=null&&i==="onScroll"&&fe("scroll",e):s!=null&&ku(e,i,s,l))}switch(n){case"input":Ci(e),Kc(e,r,!1);break;case"textarea":Ci(e),Qc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$n(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Or(e,!!r.multiple,i,!1):r.defaultValue!=null&&Or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)zm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=tr(Jo.current),tr(tn.current),_i(t)){if(r=t.stateNode,n=t.memoizedProps,r[Zt]=t,(i=r.nodeValue!==n)&&(e=St,e!==null))switch(e.tag){case 3:wi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=t,t.stateNode=r}return qe(t),null;case 13:if(me(Me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&yt!==null&&t.mode&1&&!(t.flags&128))im(),Kr(),t.flags|=98560,i=!1;else if(i=_i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[Zt]=t}else Kr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;qe(t),i=!1}else Vt!==null&&(cu(Vt),Vt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?$e===0&&($e=3):uc())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return Qr(),nu(e,t),e===null&&Qo(t.stateNode.containerInfo),qe(t),null;case 10:return Gu(t.type._context),qe(t),null;case 17:return dt(t.type)&&cl(),qe(t),null;case 19:if(me(Me),i=t.memoizedState,i===null)return qe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)ho(i,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=yl(e),l!==null){for(t.flags|=128,ho(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(Me,Me.current&1|2),t.child}e=e.sibling}i.tail!==null&&be()>qr&&(t.flags|=128,r=!0,ho(i,!1),t.lanes=4194304)}else{if(!r)if(e=yl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ho(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!xe)return qe(t),null}else 2*be()-i.renderingStartTime>qr&&n!==1073741824&&(t.flags|=128,r=!0,ho(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=be(),t.sibling=null,n=Me.current,de(Me,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return sc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ht&1073741824&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function c1(e,t){switch(zu(t),t.tag){case 1:return dt(t.type)&&cl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qr(),me(ct),me(et),qu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xu(t),null;case 13:if(me(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(Me),null;case 4:return Qr(),null;case 10:return Gu(t.type._context),null;case 22:case 23:return sc(),null;case 24:return null;default:return null}}var Ii=!1,Je=!1,d1=typeof WeakSet=="function"?WeakSet:Set,j=null;function Ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function ru(e,t,n){try{n()}catch(r){we(e,t,r)}}var jd=!1;function p1(e,t){if($s=ll,e=Gf(),$u(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,m=0,h=e,f=null;t:for(;;){for(var y;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(y=h.firstChild)!==null;)f=h,h=y;for(;;){if(h===e)break t;if(f===n&&++u===o&&(a=l),f===i&&++m===r&&(s=l),(y=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vs={focusedElem:e,selectionRange:n},ll=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,E=g.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?S:Lt(t.type,S),E);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){we(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return g=jd,jd=!1,g}function Bo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ru(t,n,i)}o=o.next}while(o!==r)}}function Hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ou(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hm(e){var t=e.alternate;t!==null&&(e.alternate=null,Hm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Zt],delete t[qo],delete t[Ws],delete t[Yg],delete t[Qg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wm(e){return e.tag===5||e.tag===3||e.tag===4}function Ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ul));else if(r!==4&&(e=e.child,e!==null))for(iu(e,t,n),e=e.sibling;e!==null;)iu(e,t,n),e=e.sibling}function lu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lu(e,t,n),e=e.sibling;e!==null;)lu(e,t,n),e=e.sibling}var Ge=null,$t=!1;function Mn(e,t,n){for(n=n.child;n!==null;)Um(e,t,n),n=n.sibling}function Um(e,t,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:Je||Ir(n,t);case 6:var r=Ge,o=$t;Ge=null,Mn(e,t,n),Ge=r,$t=o,Ge!==null&&($t?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&($t?(e=Ge,n=n.stateNode,e.nodeType===8?Ja(e.parentNode,n):e.nodeType===1&&Ja(e,n),Go(e)):Ja(Ge,n.stateNode));break;case 4:r=Ge,o=$t,Ge=n.stateNode.containerInfo,$t=!0,Mn(e,t,n),Ge=r,$t=o;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ru(n,t,l),o=o.next}while(o!==r)}Mn(e,t,n);break;case 1:if(!Je&&(Ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,t,a)}Mn(e,t,n);break;case 21:Mn(e,t,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Mn(e,t,n),Je=r):Mn(e,t,n);break;default:Mn(e,t,n)}}function $d(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new d1),t.forEach(function(r){var o=C1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ge=a.stateNode,$t=!1;break e;case 3:Ge=a.stateNode.containerInfo,$t=!0;break e;case 4:Ge=a.stateNode.containerInfo,$t=!0;break e}a=a.return}if(Ge===null)throw Error(_(160));Um(i,l,o),Ge=null,$t=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){we(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gm(t,e),t=t.sibling}function Gm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),Yt(e),r&4){try{Bo(3,e,e.return),Hl(3,e)}catch(S){we(e,e.return,S)}try{Bo(5,e,e.return)}catch(S){we(e,e.return,S)}}break;case 1:jt(t,e),Yt(e),r&512&&n!==null&&Ir(n,n.return);break;case 5:if(jt(t,e),Yt(e),r&512&&n!==null&&Ir(n,n.return),e.flags&32){var o=e.stateNode;try{zo(o,"")}catch(S){we(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ff(o,i),_s(a,l);var u=_s(a,i);for(l=0;l<s.length;l+=2){var m=s[l],h=s[l+1];m==="style"?Sf(o,h):m==="dangerouslySetInnerHTML"?gf(o,h):m==="children"?zo(o,h):ku(o,m,h,u)}switch(a){case"input":Ts(o,i);break;case"textarea":mf(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Or(o,!!i.multiple,y,!1):f!==!!i.multiple&&(i.defaultValue!=null?Or(o,!!i.multiple,i.defaultValue,!0):Or(o,!!i.multiple,i.multiple?[]:"",!1))}o[qo]=i}catch(S){we(e,e.return,S)}}break;case 6:if(jt(t,e),Yt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){we(e,e.return,S)}}break;case 3:if(jt(t,e),Yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Go(t.containerInfo)}catch(S){we(e,e.return,S)}break;case 4:jt(t,e),Yt(e);break;case 13:jt(t,e),Yt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(lc=be())),r&4&&$d(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(u=Je)||m,jt(t,e),Je=u):jt(t,e),Yt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(j=e,m=e.child;m!==null;){for(h=j=m;j!==null;){switch(f=j,y=f.child,f.tag){case 0:case 11:case 14:case 15:Bo(4,f,f.return);break;case 1:Ir(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(S){we(r,n,S)}}break;case 5:Ir(f,f.return);break;case 22:if(f.memoizedState!==null){zd(h);continue}}y!==null?(y.return=f,j=y):zd(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=yf("display",l))}catch(S){we(e,e.return,S)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(S){we(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:jt(t,e),Yt(e),r&4&&$d(e);break;case 21:break;default:jt(t,e),Yt(e)}}function Yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wm(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(zo(o,""),r.flags&=-33);var i=Ld(e);lu(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ld(e);iu(e,a,l);break;default:throw Error(_(161))}}catch(s){we(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f1(e,t,n){j=e,Km(e)}function Km(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Ii;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Je;a=Ii;var u=Je;if(Ii=l,(Je=s)&&!u)for(j=o;j!==null;)l=j,s=l.child,l.tag===22&&l.memoizedState!==null?Hd(o):s!==null?(s.return=l,j=s):Hd(o);for(;i!==null;)j=i,Km(i),i=i.sibling;j=o,Ii=a,Je=u}Vd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,j=i):Vd(e)}}function Vd(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Je||Hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Je)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Rd(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Rd(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Go(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Je||t.flags&512&&ou(t)}catch(f){we(t,t.return,f)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function zd(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Hd(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hl(4,t)}catch(s){we(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){we(t,o,s)}}var i=t.return;try{ou(t)}catch(s){we(t,i,s)}break;case 5:var l=t.return;try{ou(t)}catch(s){we(t,l,s)}}}catch(s){we(t,t.return,s)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var m1=Math.ceil,xl=Sn.ReactCurrentDispatcher,oc=Sn.ReactCurrentOwner,It=Sn.ReactCurrentBatchConfig,ee=0,ze=null,Oe=null,Ye=0,ht=0,Br=Un(0),$e=0,ri=null,sr=0,Wl=0,ic=0,Fo=null,st=null,lc=0,qr=1/0,an=null,Cl=!1,au=null,Nn=null,Bi=!1,_n=null,Pl=0,No=0,su=null,Yi=-1,Qi=0;function nt(){return ee&6?be():Yi!==-1?Yi:Yi=be()}function On(e){return e.mode&1?ee&2&&Ye!==0?Ye&-Ye:qg.transition!==null?(Qi===0&&(Qi=_f()),Qi):(e=le,e!==0||(e=window.event,e=e===void 0?16:Of(e.type)),e):1}function Ut(e,t,n,r){if(50<No)throw No=0,su=null,Error(_(185));ci(e,n,r),(!(ee&2)||e!==ze)&&(e===ze&&(!(ee&2)&&(Wl|=n),$e===4&&Dn(e,Ye)),pt(e,r),n===1&&ee===0&&!(t.mode&1)&&(qr=be()+500,$l&&Gn()))}function pt(e,t){var n=e.callbackNode;qh(e,t);var r=il(e,e===ze?Ye:0);if(r===0)n!==null&&Zc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zc(n),t===1)e.tag===0?Xg(Wd.bind(null,e)):nm(Wd.bind(null,e)),Gg(function(){!(ee&6)&&Gn()}),n=null;else{switch(Af(r)){case 1:n=bu;break;case 4:n=Df;break;case 16:n=ol;break;case 536870912:n=wf;break;default:n=ol}n=t0(n,Ym.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ym(e,t){if(Yi=-1,Qi=0,ee&6)throw Error(_(327));var n=e.callbackNode;if(zr()&&e.callbackNode!==n)return null;var r=il(e,e===ze?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ml(e,r);else{t=r;var o=ee;ee|=2;var i=Xm();(ze!==e||Ye!==t)&&(an=null,qr=be()+500,rr(e,t));do try{y1();break}catch(a){Qm(e,a)}while(1);Uu(),xl.current=i,ee=o,Oe!==null?t=0:(ze=null,Ye=0,t=$e)}if(t!==0){if(t===2&&(o=Fs(e),o!==0&&(r=o,t=uu(e,o))),t===1)throw n=ri,rr(e,0),Dn(e,r),pt(e,be()),n;if(t===6)Dn(e,r);else{if(o=e.current.alternate,!(r&30)&&!h1(o)&&(t=Ml(e,r),t===2&&(i=Fs(e),i!==0&&(r=i,t=uu(e,i))),t===1))throw n=ri,rr(e,0),Dn(e,r),pt(e,be()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Xn(e,st,an);break;case 3:if(Dn(e,r),(r&130023424)===r&&(t=lc+500-be(),10<t)){if(il(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Hs(Xn.bind(null,e,st,an),t);break}Xn(e,st,an);break;case 4:if(Dn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Wt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*m1(r/1960))-r,10<r){e.timeoutHandle=Hs(Xn.bind(null,e,st,an),r);break}Xn(e,st,an);break;case 5:Xn(e,st,an);break;default:throw Error(_(329))}}}return pt(e,be()),e.callbackNode===n?Ym.bind(null,e):null}function uu(e,t){var n=Fo;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=Ml(e,t),e!==2&&(t=st,st=n,t!==null&&cu(t)),e}function cu(e){st===null?st=e:st.push.apply(st,e)}function h1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Gt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t){for(t&=~ic,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Wt(t),r=1<<n;e[n]=-1,t&=~r}}function Wd(e){if(ee&6)throw Error(_(327));zr();var t=il(e,0);if(!(t&1))return pt(e,be()),null;var n=Ml(e,t);if(e.tag!==0&&n===2){var r=Fs(e);r!==0&&(t=r,n=uu(e,r))}if(n===1)throw n=ri,rr(e,0),Dn(e,t),pt(e,be()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xn(e,st,an),pt(e,be()),null}function ac(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(qr=be()+500,$l&&Gn())}}function ur(e){_n!==null&&_n.tag===0&&!(ee&6)&&zr();var t=ee;ee|=1;var n=It.transition,r=le;try{if(It.transition=null,le=1,e)return e()}finally{le=r,It.transition=n,ee=t,!(ee&6)&&Gn()}}function sc(){ht=Br.current,me(Br)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ug(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(zu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cl();break;case 3:Qr(),me(ct),me(et),qu();break;case 5:Xu(r);break;case 4:Qr();break;case 13:me(Me);break;case 19:me(Me);break;case 10:Gu(r.type._context);break;case 22:case 23:sc()}n=n.return}if(ze=e,Oe=e=jn(e.current,null),Ye=ht=t,$e=0,ri=null,ic=Wl=sr=0,st=Fo=null,er!==null){for(t=0;t<er.length;t++)if(n=er[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}er=null}return e}function Qm(e,t){do{var n=Oe;try{if(Uu(),Ui.current=vl,Sl){for(var r=Re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Sl=!1}if(ar=0,Ve=Le=Re=null,Io=!1,ei=0,oc.current=null,n===null||n.return===null){$e=1,ri=t,Oe=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=Ye,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ad(l);if(y!==null){y.flags&=-257,bd(y,l,a,i,t),y.mode&1&&_d(i,u,t),t=y,s=u;var g=t.updateQueue;if(g===null){var S=new Set;S.add(s),t.updateQueue=S}else g.add(s);break e}else{if(!(t&1)){_d(i,u,t),uc();break e}s=Error(_(426))}}else if(xe&&a.mode&1){var E=Ad(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),bd(E,l,a,i,t),Hu(Xr(s,a));break e}}i=s=Xr(s,a),$e!==4&&($e=2),Fo===null?Fo=[i]:Fo.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=bm(i,s,t);Md(i,d);break e;case 1:a=s;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Nn===null||!Nn.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Im(i,a,t);Md(i,v);break e}}i=i.return}while(i!==null)}Zm(n)}catch(R){t=R,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(1)}function Xm(){var e=xl.current;return xl.current=vl,e===null?vl:e}function uc(){($e===0||$e===3||$e===2)&&($e=4),ze===null||!(sr&268435455)&&!(Wl&268435455)||Dn(ze,Ye)}function Ml(e,t){var n=ee;ee|=2;var r=Xm();(ze!==e||Ye!==t)&&(an=null,rr(e,t));do try{g1();break}catch(o){Qm(e,o)}while(1);if(Uu(),ee=n,xl.current=r,Oe!==null)throw Error(_(261));return ze=null,Ye=0,$e}function g1(){for(;Oe!==null;)qm(Oe)}function y1(){for(;Oe!==null&&!zh();)qm(Oe)}function qm(e){var t=e0(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?Zm(e):Oe=t,oc.current=null}function Zm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=c1(n,t),n!==null){n.flags&=32767,Oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,Oe=null;return}}else if(n=u1(n,t,ht),n!==null){Oe=n;return}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);$e===0&&($e=5)}function Xn(e,t,n){var r=le,o=It.transition;try{It.transition=null,le=1,S1(e,t,n,r)}finally{It.transition=o,le=r}return null}function S1(e,t,n,r){do zr();while(_n!==null);if(ee&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Zh(e,i),e===ze&&(Oe=ze=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bi||(Bi=!0,t0(ol,function(){return zr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=It.transition,It.transition=null;var l=le;le=1;var a=ee;ee|=4,oc.current=null,p1(e,n),Gm(n,e),jg(Vs),ll=!!$s,Vs=$s=null,e.current=n,f1(n),Hh(),ee=a,le=l,It.transition=i}else e.current=n;if(Bi&&(Bi=!1,_n=e,Pl=o),i=e.pendingLanes,i===0&&(Nn=null),Gh(n.stateNode),pt(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Cl)throw Cl=!1,e=au,au=null,e;return Pl&1&&e.tag!==0&&zr(),i=e.pendingLanes,i&1?e===su?No++:(No=0,su=e):No=0,Gn(),null}function zr(){if(_n!==null){var e=Af(Pl),t=It.transition,n=le;try{if(It.transition=null,le=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,Pl=0,ee&6)throw Error(_(331));var o=ee;for(ee|=4,j=e.current;j!==null;){var i=j,l=i.child;if(j.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(j=u;j!==null;){var m=j;switch(m.tag){case 0:case 11:case 15:Bo(8,m,i)}var h=m.child;if(h!==null)h.return=m,j=h;else for(;j!==null;){m=j;var f=m.sibling,y=m.return;if(Hm(m),m===u){j=null;break}if(f!==null){f.return=y,j=f;break}j=y}}}var g=i.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var E=S.sibling;S.sibling=null,S=E}while(S!==null)}}j=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,j=l;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Bo(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,j=d;break e}j=i.return}}var c=e.current;for(j=c;j!==null;){l=j;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,j=p;else e:for(l=c;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hl(9,a)}}catch(R){we(a,a.return,R)}if(a===l){j=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,j=v;break e}j=a.return}}if(ee=o,Gn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Fl,e)}catch{}r=!0}return r}finally{le=n,It.transition=t}}return!1}function Ud(e,t,n){t=Xr(n,t),t=bm(e,t,1),e=Fn(e,t,1),t=nt(),e!==null&&(ci(e,1,t),pt(e,t))}function we(e,t,n){if(e.tag===3)Ud(e,e,n);else for(;t!==null;){if(t.tag===3){Ud(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){e=Xr(n,e),e=Im(t,e,1),t=Fn(t,e,1),e=nt(),t!==null&&(ci(t,1,e),pt(t,e));break}}t=t.return}}function v1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(Ye&n)===n&&($e===4||$e===3&&(Ye&130023424)===Ye&&500>be()-lc?rr(e,0):ic|=n),pt(e,t)}function Jm(e,t){t===0&&(e.mode&1?(t=Ri,Ri<<=1,!(Ri&130023424)&&(Ri=4194304)):t=1);var n=nt();e=hn(e,t),e!==null&&(ci(e,t,n),pt(e,n))}function x1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jm(e,n)}function C1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Jm(e,n)}var e0;e0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ut=!1,s1(e,t,n);ut=!!(e.flags&131072)}else ut=!1,xe&&t.flags&1048576&&rm(t,fl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ki(e,t),e=t.pendingProps;var o=Gr(t,et.current);Vr(t,n),o=Ju(null,t,r,e,o,n);var i=ec();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,dt(r)?(i=!0,dl(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Yu(t),o.updater=Vl,t.stateNode=o,o._reactInternals=t,Xs(t,r,e,n),t=Js(null,t,r,!0,i,n)):(t.tag=0,xe&&i&&Vu(t),tt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ki(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=M1(r),e=Lt(r,e),o){case 0:t=Zs(null,t,r,e,n);break e;case 1:t=Fd(null,t,r,e,n);break e;case 11:t=Id(null,t,r,e,n);break e;case 14:t=Bd(null,t,r,Lt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),Zs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),Fd(e,t,r,o,n);case 3:e:{if(Om(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,am(e,t),gl(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Xr(Error(_(423)),t),t=Nd(e,t,r,n,o);break e}else if(r!==o){o=Xr(Error(_(424)),t),t=Nd(e,t,r,n,o);break e}else for(yt=Bn(t.stateNode.containerInfo.firstChild),St=t,xe=!0,Vt=null,n=dm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kr(),r===o){t=gn(e,t,n);break e}tt(e,t,r,n)}t=t.child}return t;case 5:return pm(t),e===null&&Ks(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,zs(r,o)?l=null:i!==null&&zs(r,i)&&(t.flags|=32),Nm(e,t),tt(e,t,l,n),t.child;case 6:return e===null&&Ks(t),null;case 13:return jm(e,t,n);case 4:return Qu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yr(t,null,r,n):tt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),Id(e,t,r,o,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,de(ml,r._currentValue),r._currentValue=l,i!==null)if(Gt(i.value,l)){if(i.children===o.children&&!ct.current){t=gn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=pn(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ys(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ys(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}tt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Vr(t,n),o=Bt(o),r=r(o),t.flags|=1,tt(e,t,r,n),t.child;case 14:return r=t.type,o=Lt(r,t.pendingProps),o=Lt(r.type,o),Bd(e,t,r,o,n);case 15:return Bm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),Ki(e,t),t.tag=1,dt(r)?(e=!0,dl(t)):e=!1,Vr(t,n),um(t,r,o),Xs(t,r,o,n),Js(null,t,r,!0,e,n);case 19:return Lm(e,t,n);case 22:return Fm(e,t,n)}throw Error(_(156,t.tag))};function t0(e,t){return kf(e,t)}function P1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,n,r){return new P1(e,t,n,r)}function cc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function M1(e){if(typeof e=="function")return cc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wu)return 11;if(e===_u)return 14}return 2}function jn(e,t){var n=e.alternate;return n===null?(n=bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")cc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Rr:return or(n.children,o,i,t);case Du:l=8,o|=8;break;case xs:return e=bt(12,n,t,o|2),e.elementType=xs,e.lanes=i,e;case Cs:return e=bt(13,n,t,o),e.elementType=Cs,e.lanes=i,e;case Ps:return e=bt(19,n,t,o),e.elementType=Ps,e.lanes=i,e;case cf:return Ul(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sf:l=10;break e;case uf:l=9;break e;case wu:l=11;break e;case _u:l=14;break e;case Tn:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=bt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function or(e,t,n,r){return e=bt(7,e,r,t),e.lanes=n,e}function Ul(e,t,n,r){return e=bt(22,e,r,t),e.elementType=cf,e.lanes=n,e.stateNode={isHidden:!1},e}function as(e,t,n){return e=bt(6,e,null,t),e.lanes=n,e}function ss(e,t,n){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function R1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=za(0),this.expirationTimes=za(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=za(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function dc(e,t,n,r,o,i,l,a,s){return e=new R1(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=bt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yu(i),e}function T1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function n0(e){if(!e)return Vn;e=e._reactInternals;e:{if(fr(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(dt(n))return tm(e,n,t)}return t}function r0(e,t,n,r,o,i,l,a,s){return e=dc(n,r,!0,e,o,i,l,a,s),e.context=n0(null),n=e.current,r=nt(),o=On(n),i=pn(r,o),i.callback=t??null,Fn(n,i,o),e.current.lanes=o,ci(e,o,r),pt(e,r),e}function Gl(e,t,n,r){var o=t.current,i=nt(),l=On(o);return n=n0(n),t.context===null?t.context=n:t.pendingContext=n,t=pn(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Fn(o,t,l),e!==null&&(Ut(e,o,l,i),Wi(e,o,l)),l}function Rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pc(e,t){Gd(e,t),(e=e.alternate)&&Gd(e,t)}function E1(){return null}var o0=typeof reportError=="function"?reportError:function(e){console.error(e)};function fc(e){this._internalRoot=e}Kl.prototype.render=fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Gl(e,t,null,null)};Kl.prototype.unmount=fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){Gl(null,e,null,null)}),t[mn]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kn.length&&t!==0&&t<kn[n].priority;n++);kn.splice(n,0,e),n===0&&Nf(e)}};function mc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kd(){}function k1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Rl(l);i.call(u)}}var l=r0(t,r,e,0,null,!1,!1,"",Kd);return e._reactRootContainer=l,e[mn]=l.current,Qo(e.nodeType===8?e.parentNode:e),ur(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Rl(s);a.call(u)}}var s=dc(e,0,!1,null,null,!1,!1,"",Kd);return e._reactRootContainer=s,e[mn]=s.current,Qo(e.nodeType===8?e.parentNode:e),ur(function(){Gl(t,s,n,r)}),s}function Ql(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Rl(l);a.call(s)}}Gl(t,l,e,o)}else l=k1(n,t,e,o,r);return Rl(l)}bf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=To(t.pendingLanes);n!==0&&(Iu(t,n|1),pt(t,be()),!(ee&6)&&(qr=be()+500,Gn()))}break;case 13:ur(function(){var r=hn(e,1);if(r!==null){var o=nt();Ut(r,e,1,o)}}),pc(e,1)}};Bu=function(e){if(e.tag===13){var t=hn(e,134217728);if(t!==null){var n=nt();Ut(t,e,134217728,n)}pc(e,134217728)}};If=function(e){if(e.tag===13){var t=On(e),n=hn(e,t);if(n!==null){var r=nt();Ut(n,e,t,r)}pc(e,t)}};Bf=function(){return le};Ff=function(e,t){var n=le;try{return le=e,t()}finally{le=n}};bs=function(e,t,n){switch(t){case"input":if(Ts(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ll(r);if(!o)throw Error(_(90));pf(r),Ts(r,o)}}}break;case"textarea":mf(e,n);break;case"select":t=n.value,t!=null&&Or(e,!!n.multiple,t,!1)}};Cf=ac;Pf=ur;var D1={usingClientEntryPoint:!1,Events:[pi,Dr,Ll,vf,xf,ac]},go={findFiberByHostInstance:Jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},w1={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tf(e),e===null?null:e.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||E1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{Fl=Fi.inject(w1),en=Fi}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1;Pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(t))throw Error(_(200));return T1(e,t,null,n)};Pt.createRoot=function(e,t){if(!mc(e))throw Error(_(299));var n=!1,r="",o=o0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=dc(e,1,!1,null,null,n,!1,r,o),e[mn]=t.current,Qo(e.nodeType===8?e.parentNode:e),new fc(t)};Pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Tf(t),e=e===null?null:e.stateNode,e};Pt.flushSync=function(e){return ur(e)};Pt.hydrate=function(e,t,n){if(!Yl(t))throw Error(_(200));return Ql(null,e,t,!0,n)};Pt.hydrateRoot=function(e,t,n){if(!mc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=o0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=r0(t,null,e,1,n??null,o,!1,i,l),e[mn]=t.current,Qo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Kl(t)};Pt.render=function(e,t,n){if(!Yl(t))throw Error(_(200));return Ql(null,e,t,!1,n)};Pt.unmountComponentAtNode=function(e){if(!Yl(e))throw Error(_(40));return e._reactRootContainer?(ur(function(){Ql(null,null,e,!1,function(){e._reactRootContainer=null,e[mn]=null})}),!0):!1};Pt.unstable_batchedUpdates=ac;Pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yl(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Ql(e,t,n,!1,r)};Pt.version="18.2.0-next-9e3b772b8-20220608";function i0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i0)}catch(e){console.error(e)}}i0(),nf.exports=Pt;var Xl=nf.exports;const Ni=Up(Xl);var Yd=Xl;Ss.createRoot=Yd.createRoot,Ss.hydrateRoot=Yd.hydrateRoot;const _1={black:"#000",white:"#fff"},oi=_1,A1={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},gr=A1,b1={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},yr=b1,I1={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Sr=I1,B1={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},vr=B1,F1={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},xr=F1,N1={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},yo=N1,O1={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},j1=O1;function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}function un(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function l0(e){if(!un(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=l0(e[n])}),t}function ft(e,t,n={clone:!0}){const r=n.clone?C({},e):e;return un(e)&&un(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(un(t[o])&&o in e&&un(e[o])?r[o]=ft(e[o],t[o],n):n.clone?r[o]=un(t[o])?l0(t[o]):t[o]:r[o]=t[o])}),r}function zn(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var ue={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc=Symbol.for("react.element"),gc=Symbol.for("react.portal"),ql=Symbol.for("react.fragment"),Zl=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),ea=Symbol.for("react.provider"),ta=Symbol.for("react.context"),L1=Symbol.for("react.server_context"),na=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),oa=Symbol.for("react.suspense_list"),ia=Symbol.for("react.memo"),la=Symbol.for("react.lazy"),$1=Symbol.for("react.offscreen"),a0;a0=Symbol.for("react.module.reference");function Nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case hc:switch(e=e.type,e){case ql:case Jl:case Zl:case ra:case oa:return e;default:switch(e=e&&e.$$typeof,e){case L1:case ta:case na:case la:case ia:case ea:return e;default:return t}}case gc:return t}}}ue.ContextConsumer=ta;ue.ContextProvider=ea;ue.Element=hc;ue.ForwardRef=na;ue.Fragment=ql;ue.Lazy=la;ue.Memo=ia;ue.Portal=gc;ue.Profiler=Jl;ue.StrictMode=Zl;ue.Suspense=ra;ue.SuspenseList=oa;ue.isAsyncMode=function(){return!1};ue.isConcurrentMode=function(){return!1};ue.isContextConsumer=function(e){return Nt(e)===ta};ue.isContextProvider=function(e){return Nt(e)===ea};ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===hc};ue.isForwardRef=function(e){return Nt(e)===na};ue.isFragment=function(e){return Nt(e)===ql};ue.isLazy=function(e){return Nt(e)===la};ue.isMemo=function(e){return Nt(e)===ia};ue.isPortal=function(e){return Nt(e)===gc};ue.isProfiler=function(e){return Nt(e)===Jl};ue.isStrictMode=function(e){return Nt(e)===Zl};ue.isSuspense=function(e){return Nt(e)===ra};ue.isSuspenseList=function(e){return Nt(e)===oa};ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ql||e===Jl||e===Zl||e===ra||e===oa||e===$1||typeof e=="object"&&e!==null&&(e.$$typeof===la||e.$$typeof===ia||e.$$typeof===ea||e.$$typeof===ta||e.$$typeof===na||e.$$typeof===a0||e.getModuleId!==void 0)};ue.typeOf=Nt;function he(e){if(typeof e!="string")throw new Error(zn(7));return e.charAt(0).toUpperCase()+e.slice(1)}function Qd(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function s0(e,t=166){let n;function r(...o){const i=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(i,t)}return r.clear=()=>{clearTimeout(n)},r}function us(e,t){var n,r;return x.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function vt(e){return e&&e.ownerDocument||document}function cr(e){return vt(e).defaultView||window}function du(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const V1=typeof window<"u"?x.useLayoutEffect:x.useEffect,Hn=V1;let Xd=0;function z1(e){const[t,n]=x.useState(e),r=e||t;return x.useEffect(()=>{t==null&&(Xd+=1,n(`mui-${Xd}`))},[t]),r}const qd=ys["useId".toString()];function H1(e){if(qd!==void 0){const t=qd();return e??t}return z1(e)}function Zd({controlled:e,default:t,name:n,state:r="value"}){const{current:o}=x.useRef(e!==void 0),[i,l]=x.useState(t),a=o?e:i,s=x.useCallback(u=>{o||l(u)},[]);return[a,s]}function Fr(e){const t=x.useRef(e);return Hn(()=>{t.current=e}),x.useCallback((...n)=>(0,t.current)(...n),[])}function rt(...e){return x.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{du(n,t)})},e)}let aa=!0,pu=!1,Jd;const W1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function U1(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&W1[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function G1(e){e.metaKey||e.altKey||e.ctrlKey||(aa=!0)}function cs(){aa=!1}function K1(){this.visibilityState==="hidden"&&pu&&(aa=!0)}function Y1(e){e.addEventListener("keydown",G1,!0),e.addEventListener("mousedown",cs,!0),e.addEventListener("pointerdown",cs,!0),e.addEventListener("touchstart",cs,!0),e.addEventListener("visibilitychange",K1,!0)}function Q1(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return aa||U1(t)}function X1(){const e=x.useCallback(o=>{o!=null&&Y1(o.ownerDocument)},[]),t=x.useRef(!1);function n(){return t.current?(pu=!0,window.clearTimeout(Jd),Jd=window.setTimeout(()=>{pu=!1},100),t.current=!1,!0):!1}function r(o){return Q1(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function u0(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function c0(e,t){const n=C({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=C({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=o:!o||!Object.keys(o)?n[r]=i:(n[r]=C({},i),Object.keys(o).forEach(l=>{n[r][l]=c0(o[l],i[l])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function je(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((i,l)=>{if(l){const a=t(l);a!==""&&i.push(a),n&&n[l]&&i.push(n[l])}return i},[]).join(" ")}),r}const ep=e=>e,q1=()=>{let e=ep;return{configure(t){e=t},generate(t){return e(t)},reset(){e=ep}}},Z1=q1(),J1=Z1,ey={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Ie(e,t,n="Mui"){const r=ey[t];return r?`${n}-${r}`:`${J1.generate(e)}-${t}`}function Ee(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=Ie(e,o,n)}),r}const Zr="$$material";function U(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function d0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ty=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ny=d0(function(e){return ty.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function ry(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function oy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var iy=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(oy(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=ry(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ze="-ms-",Tl="-moz-",te="-webkit-",p0="comm",yc="rule",Sc="decl",ly="@import",f0="@keyframes",ay="@layer",sy=Math.abs,sa=String.fromCharCode,uy=Object.assign;function cy(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function m0(e){return e.trim()}function dy(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function fu(e,t){return e.indexOf(t)}function Ke(e,t){return e.charCodeAt(t)|0}function ii(e,t,n){return e.slice(t,n)}function Xt(e){return e.length}function vc(e){return e.length}function Oi(e,t){return t.push(e),e}function py(e,t){return e.map(t).join("")}var ua=1,Jr=1,h0=0,mt=0,Ne=0,io="";function ca(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ua,column:Jr,length:l,return:""}}function So(e,t){return uy(ca("",null,null,"",null,null,0),e,{length:-e.length},t)}function fy(){return Ne}function my(){return Ne=mt>0?Ke(io,--mt):0,Jr--,Ne===10&&(Jr=1,ua--),Ne}function xt(){return Ne=mt<h0?Ke(io,mt++):0,Jr++,Ne===10&&(Jr=1,ua++),Ne}function nn(){return Ke(io,mt)}function qi(){return mt}function mi(e,t){return ii(io,e,t)}function li(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function g0(e){return ua=Jr=1,h0=Xt(io=e),mt=0,[]}function y0(e){return io="",e}function Zi(e){return m0(mi(mt-1,mu(e===91?e+2:e===40?e+1:e)))}function hy(e){for(;(Ne=nn())&&Ne<33;)xt();return li(e)>2||li(Ne)>3?"":" "}function gy(e,t){for(;--t&&xt()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return mi(e,qi()+(t<6&&nn()==32&&xt()==32))}function mu(e){for(;xt();)switch(Ne){case e:return mt;case 34:case 39:e!==34&&e!==39&&mu(Ne);break;case 40:e===41&&mu(e);break;case 92:xt();break}return mt}function yy(e,t){for(;xt()&&e+Ne!==47+10;)if(e+Ne===42+42&&nn()===47)break;return"/*"+mi(t,mt-1)+"*"+sa(e===47?e:xt())}function Sy(e){for(;!li(nn());)xt();return mi(e,mt)}function vy(e){return y0(Ji("",null,null,null,[""],e=g0(e),0,[0],e))}function Ji(e,t,n,r,o,i,l,a,s){for(var u=0,m=0,h=l,f=0,y=0,g=0,S=1,E=1,d=1,c=0,p="",v=o,R=i,T=r,P=p;E;)switch(g=c,c=xt()){case 40:if(g!=108&&Ke(P,h-1)==58){fu(P+=ne(Zi(c),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:P+=Zi(c);break;case 9:case 10:case 13:case 32:P+=hy(g);break;case 92:P+=gy(qi()-1,7);continue;case 47:switch(nn()){case 42:case 47:Oi(xy(yy(xt(),qi()),t,n),s);break;default:P+="/"}break;case 123*S:a[u++]=Xt(P)*d;case 125*S:case 59:case 0:switch(c){case 0:case 125:E=0;case 59+m:d==-1&&(P=ne(P,/\f/g,"")),y>0&&Xt(P)-h&&Oi(y>32?np(P+";",r,n,h-1):np(ne(P," ","")+";",r,n,h-2),s);break;case 59:P+=";";default:if(Oi(T=tp(P,t,n,u,m,o,a,p,v=[],R=[],h),i),c===123)if(m===0)Ji(P,t,T,T,v,i,h,a,R);else switch(f===99&&Ke(P,3)===110?100:f){case 100:case 108:case 109:case 115:Ji(e,T,T,r&&Oi(tp(e,T,T,0,0,o,a,p,o,v=[],h),R),o,R,h,a,r?v:R);break;default:Ji(P,T,T,T,[""],R,0,a,R)}}u=m=y=0,S=d=1,p=P="",h=l;break;case 58:h=1+Xt(P),y=g;default:if(S<1){if(c==123)--S;else if(c==125&&S++==0&&my()==125)continue}switch(P+=sa(c),c*S){case 38:d=m>0?1:(P+="\f",-1);break;case 44:a[u++]=(Xt(P)-1)*d,d=1;break;case 64:nn()===45&&(P+=Zi(xt())),f=nn(),m=h=Xt(p=P+=Sy(qi())),c++;break;case 45:g===45&&Xt(P)==2&&(S=0)}}return i}function tp(e,t,n,r,o,i,l,a,s,u,m){for(var h=o-1,f=o===0?i:[""],y=vc(f),g=0,S=0,E=0;g<r;++g)for(var d=0,c=ii(e,h+1,h=sy(S=l[g])),p=e;d<y;++d)(p=m0(S>0?f[d]+" "+c:ne(c,/&\f/g,f[d])))&&(s[E++]=p);return ca(e,t,n,o===0?yc:a,s,u,m)}function xy(e,t,n){return ca(e,t,n,p0,sa(fy()),ii(e,2,-2),0)}function np(e,t,n,r){return ca(e,t,n,Sc,ii(e,0,r),ii(e,r+1,-1),r)}function Hr(e,t){for(var n="",r=vc(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Cy(e,t,n,r){switch(e.type){case ay:if(e.children.length)break;case ly:case Sc:return e.return=e.return||e.value;case p0:return"";case f0:return e.return=e.value+"{"+Hr(e.children,r)+"}";case yc:e.value=e.props.join(",")}return Xt(n=Hr(e.children,r))?e.return=e.value+"{"+n+"}":""}function Py(e){var t=vc(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function My(e){return function(t){t.root||(t=t.return)&&e(t)}}var Ry=function(t,n,r){for(var o=0,i=0;o=i,i=nn(),o===38&&i===12&&(n[r]=1),!li(i);)xt();return mi(t,mt)},Ty=function(t,n){var r=-1,o=44;do switch(li(o)){case 0:o===38&&nn()===12&&(n[r]=1),t[r]+=Ry(mt-1,n,r);break;case 2:t[r]+=Zi(o);break;case 4:if(o===44){t[++r]=nn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=sa(o)}while(o=xt());return t},Ey=function(t,n){return y0(Ty(g0(t),n))},rp=new WeakMap,ky=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!rp.get(r))&&!o){rp.set(t,!0);for(var i=[],l=Ey(n,i),a=r.props,s=0,u=0;s<l.length;s++)for(var m=0;m<a.length;m++,u++)t.props[u]=i[s]?l[s].replace(/&\f/g,a[m]):a[m]+" "+l[s]}}},Dy=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function S0(e,t){switch(cy(e,t)){case 5103:return te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return te+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return te+e+Tl+e+Ze+e+e;case 6828:case 4268:return te+e+Ze+e+e;case 6165:return te+e+Ze+"flex-"+e+e;case 5187:return te+e+ne(e,/(\w+).+(:[^]+)/,te+"box-$1$2"+Ze+"flex-$1$2")+e;case 5443:return te+e+Ze+"flex-item-"+ne(e,/flex-|-self/,"")+e;case 4675:return te+e+Ze+"flex-line-pack"+ne(e,/align-content|flex-|-self/,"")+e;case 5548:return te+e+Ze+ne(e,"shrink","negative")+e;case 5292:return te+e+Ze+ne(e,"basis","preferred-size")+e;case 6060:return te+"box-"+ne(e,"-grow","")+te+e+Ze+ne(e,"grow","positive")+e;case 4554:return te+ne(e,/([^-])(transform)/g,"$1"+te+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,te+"$1"),/(image-set)/,te+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,te+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,te+"box-pack:$3"+Ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+te+e+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xt(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+te+"$2-$3$1"+Tl+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~fu(e,"stretch")?S0(ne(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ke(e,t+1)!==115)break;case 6444:switch(Ke(e,Xt(e)-3-(~fu(e,"!important")&&10))){case 107:return ne(e,":",":"+te)+e;case 101:return ne(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+te+(Ke(e,14)===45?"inline-":"")+"box$3$1"+te+"$2$3$1"+Ze+"$2box$3")+e}break;case 5936:switch(Ke(e,t+11)){case 114:return te+e+Ze+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return te+e+Ze+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return te+e+Ze+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return te+e+Ze+e+e}return e}var wy=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Sc:t.return=S0(t.value,t.length);break;case f0:return Hr([So(t,{value:ne(t.value,"@","@"+te)})],o);case yc:if(t.length)return py(t.props,function(i){switch(dy(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Hr([So(t,{props:[ne(i,/:(read-\w+)/,":"+Tl+"$1")]})],o);case"::placeholder":return Hr([So(t,{props:[ne(i,/:(plac\w+)/,":"+te+"input-$1")]}),So(t,{props:[ne(i,/:(plac\w+)/,":"+Tl+"$1")]}),So(t,{props:[ne(i,/:(plac\w+)/,Ze+"input-$1")]})],o)}return""})}},_y=[wy],Ay=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(S){var E=S.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var o=t.stylisPlugins||_y,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var E=S.getAttribute("data-emotion").split(" "),d=1;d<E.length;d++)i[E[d]]=!0;a.push(S)});var s,u=[ky,Dy];{var m,h=[Cy,My(function(S){m.insert(S)})],f=Py(u.concat(o,h)),y=function(E){return Hr(vy(E),f)};s=function(E,d,c,p){m=c,y(E?E+"{"+d.styles+"}":d.styles),p&&(g.inserted[d.name]=!0)}}var g={key:n,sheet:new iy({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return g.sheet.hydrate(a),g},v0={exports:{}},ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He=typeof Symbol=="function"&&Symbol.for,xc=He?Symbol.for("react.element"):60103,Cc=He?Symbol.for("react.portal"):60106,da=He?Symbol.for("react.fragment"):60107,pa=He?Symbol.for("react.strict_mode"):60108,fa=He?Symbol.for("react.profiler"):60114,ma=He?Symbol.for("react.provider"):60109,ha=He?Symbol.for("react.context"):60110,Pc=He?Symbol.for("react.async_mode"):60111,ga=He?Symbol.for("react.concurrent_mode"):60111,ya=He?Symbol.for("react.forward_ref"):60112,Sa=He?Symbol.for("react.suspense"):60113,by=He?Symbol.for("react.suspense_list"):60120,va=He?Symbol.for("react.memo"):60115,xa=He?Symbol.for("react.lazy"):60116,Iy=He?Symbol.for("react.block"):60121,By=He?Symbol.for("react.fundamental"):60117,Fy=He?Symbol.for("react.responder"):60118,Ny=He?Symbol.for("react.scope"):60119;function Rt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case xc:switch(e=e.type,e){case Pc:case ga:case da:case fa:case pa:case Sa:return e;default:switch(e=e&&e.$$typeof,e){case ha:case ya:case xa:case va:case ma:return e;default:return t}}case Cc:return t}}}function x0(e){return Rt(e)===ga}ae.AsyncMode=Pc;ae.ConcurrentMode=ga;ae.ContextConsumer=ha;ae.ContextProvider=ma;ae.Element=xc;ae.ForwardRef=ya;ae.Fragment=da;ae.Lazy=xa;ae.Memo=va;ae.Portal=Cc;ae.Profiler=fa;ae.StrictMode=pa;ae.Suspense=Sa;ae.isAsyncMode=function(e){return x0(e)||Rt(e)===Pc};ae.isConcurrentMode=x0;ae.isContextConsumer=function(e){return Rt(e)===ha};ae.isContextProvider=function(e){return Rt(e)===ma};ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xc};ae.isForwardRef=function(e){return Rt(e)===ya};ae.isFragment=function(e){return Rt(e)===da};ae.isLazy=function(e){return Rt(e)===xa};ae.isMemo=function(e){return Rt(e)===va};ae.isPortal=function(e){return Rt(e)===Cc};ae.isProfiler=function(e){return Rt(e)===fa};ae.isStrictMode=function(e){return Rt(e)===pa};ae.isSuspense=function(e){return Rt(e)===Sa};ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===da||e===ga||e===fa||e===pa||e===Sa||e===by||typeof e=="object"&&e!==null&&(e.$$typeof===xa||e.$$typeof===va||e.$$typeof===ma||e.$$typeof===ha||e.$$typeof===ya||e.$$typeof===By||e.$$typeof===Fy||e.$$typeof===Ny||e.$$typeof===Iy)};ae.typeOf=Rt;v0.exports=ae;var Oy=v0.exports,C0=Oy,jy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ly={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},P0={};P0[C0.ForwardRef]=jy;P0[C0.Memo]=Ly;var $y=!0;function Vy(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var M0=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||$y===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},R0=function(t,n,r){M0(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function zy(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Hy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wy=/[A-Z]|^ms/g,Uy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,T0=function(t){return t.charCodeAt(1)===45},op=function(t){return t!=null&&typeof t!="boolean"},ds=d0(function(e){return T0(e)?e:e.replace(Wy,"-$&").toLowerCase()}),ip=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Uy,function(r,o,i){return qt={name:o,styles:i,next:qt},o})}return Hy[t]!==1&&!T0(t)&&typeof n=="number"&&n!==0?n+"px":n};function ai(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return qt={name:n.name,styles:n.styles,next:qt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)qt={name:r.name,styles:r.styles,next:qt},r=r.next;var o=n.styles+";";return o}return Gy(e,t,n)}case"function":{if(e!==void 0){var i=qt,l=n(e);return qt=i,ai(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Gy(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=ai(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":op(l)&&(r+=ds(i)+":"+ip(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)op(l[a])&&(r+=ds(i)+":"+ip(i,l[a])+";");else{var s=ai(e,t,l);switch(i){case"animation":case"animationName":{r+=ds(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var lp=/label:\s*([^\s;\n{]+)\s*(;|$)/g,qt,Mc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";qt=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=ai(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=ai(r,n,t[a]),o&&(i+=l[a]);lp.lastIndex=0;for(var s="",u;(u=lp.exec(i))!==null;)s+="-"+u[1];var m=zy(i)+s;return{name:m,styles:i,next:qt}},Ky=function(t){return t()},E0=ys["useInsertionEffect"]?ys["useInsertionEffect"]:!1,Yy=E0||Ky,ap=E0||x.useLayoutEffect,k0=x.createContext(typeof HTMLElement<"u"?Ay({key:"css"}):null);k0.Provider;var D0=function(t){return x.forwardRef(function(n,r){var o=x.useContext(k0);return t(n,o,r)})},Ca=x.createContext({}),Qy=D0(function(e,t){var n=e.styles,r=Mc([n],void 0,x.useContext(Ca)),o=x.useRef();return ap(function(){var i=t.key+"-global",l=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,s=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(l.before=t.sheet.tags[0]),s!==null&&(a=!0,s.setAttribute("data-emotion",i),l.hydrate([s])),o.current=[l,a],function(){l.flush()}},[t]),ap(function(){var i=o.current,l=i[0],a=i[1];if(a){i[1]=!1;return}if(r.next!==void 0&&R0(t,r.next,!0),l.tags.length){var s=l.tags[l.tags.length-1].nextElementSibling;l.before=s,l.flush()}t.insert("",r,l,!1)},[t,r.name]),null});function Xy(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Mc(t)}var Rc=function(){var t=Xy.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},qy=ny,Zy=function(t){return t!=="theme"},sp=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?qy:Zy},up=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(l){return t.__emotion_forwardProp(l)&&i(l)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},Jy=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return M0(n,r,o),Yy(function(){return R0(n,r,o)}),null},eS=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,l;n!==void 0&&(i=n.label,l=n.target);var a=up(t,n,r),s=a||sp(o),u=!s("as");return function(){var m=arguments,h=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&h.push("label:"+i+";"),m[0]==null||m[0].raw===void 0)h.push.apply(h,m);else{h.push(m[0][0]);for(var f=m.length,y=1;y<f;y++)h.push(m[y],m[0][y])}var g=D0(function(S,E,d){var c=u&&S.as||o,p="",v=[],R=S;if(S.theme==null){R={};for(var T in S)R[T]=S[T];R.theme=x.useContext(Ca)}typeof S.className=="string"?p=Vy(E.registered,v,S.className):S.className!=null&&(p=S.className+" ");var P=Mc(h.concat(v),E.registered,R);p+=E.key+"-"+P.name,l!==void 0&&(p+=" "+l);var w=u&&a===void 0?sp(c):s,A={};for(var k in S)u&&k==="as"||w(k)&&(A[k]=S[k]);return A.className=p,A.ref=d,x.createElement(x.Fragment,null,x.createElement(Jy,{cache:E,serialized:P,isStringTag:typeof c=="string"}),x.createElement(c,A))});return g.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=o,g.__emotion_styles=h,g.__emotion_forwardProp=a,Object.defineProperty(g,"toString",{value:function(){return"."+l}}),g.withComponent=function(S,E){return e(S,C({},n,E,{shouldForwardProp:up(g,E,!0)})).apply(void 0,h)},g}},tS=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],hu=eS.bind();tS.forEach(function(e){hu[e]=hu(e)});function nS(e){return e==null||Object.keys(e).length===0}function rS(e){const{styles:t,defaultTheme:n={}}=e,r=typeof t=="function"?o=>t(nS(o)?n:o):t;return M.jsx(Qy,{styles:r})}/**
 * @mui/styled-engine v5.14.13
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function oS(e,t){return hu(e,t)}const iS=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},lS=["values","unit","step"],aS=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>C({},n,{[r.key]:r.val}),{})};function sS(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=U(e,lS),i=aS(t),l=Object.keys(i);function a(f){return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n})`}function s(f){return`@media (max-width:${(typeof t[f]=="number"?t[f]:f)-r/100}${n})`}function u(f,y){const g=l.indexOf(y);return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n}) and (max-width:${(g!==-1&&typeof t[l[g]]=="number"?t[l[g]]:y)-r/100}${n})`}function m(f){return l.indexOf(f)+1<l.length?u(f,l[l.indexOf(f)+1]):a(f)}function h(f){const y=l.indexOf(f);return y===0?a(l[1]):y===l.length-1?s(l[y]):u(f,l[l.indexOf(f)+1]).replace("@media","@media not all and")}return C({keys:l,values:i,up:a,down:s,between:u,only:m,not:h,unit:n},o)}const uS={borderRadius:4},cS=uS;function Oo(e,t){return t?ft(e,t,{clone:!1}):e}const Tc={xs:0,sm:600,md:900,lg:1200,xl:1536},cp={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Tc[e]}px)`};function yn(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||cp;return t.reduce((l,a,s)=>(l[i.up(i.keys[s])]=n(t[s]),l),{})}if(typeof t=="object"){const i=r.breakpoints||cp;return Object.keys(t).reduce((l,a)=>{if(Object.keys(i.values||Tc).indexOf(a)!==-1){const s=i.up(a);l[s]=n(t[a],a)}else{const s=a;l[s]=t[s]}return l},{})}return n(t)}function dS(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const i=e.up(o);return r[i]={},r},{}))||{}}function pS(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function Pa(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function El(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=Pa(e,n)||r,t&&(o=t(o,r,e)),o}function oe(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=l=>{if(l[t]==null)return null;const a=l[t],s=l.theme,u=Pa(s,r)||{};return yn(l,a,h=>{let f=El(u,o,h);return h===f&&typeof h=="string"&&(f=El(u,o,`${t}${h==="default"?"":he(h)}`,h)),n===!1?f:{[n]:f}})};return i.propTypes={},i.filterProps=[t],i}function fS(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const mS={m:"margin",p:"padding"},hS={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},dp={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},gS=fS(e=>{if(e.length>2)if(dp[e])e=dp[e];else return[e];const[t,n]=e.split(""),r=mS[t],o=hS[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),Ec=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],kc=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Ec,...kc];function hi(e,t,n,r){var o;const i=(o=Pa(e,t,!1))!=null?o:n;return typeof i=="number"?l=>typeof l=="string"?l:i*l:Array.isArray(i)?l=>typeof l=="string"?l:i[l]:typeof i=="function"?i:()=>{}}function w0(e){return hi(e,"spacing",8)}function gi(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function yS(e,t){return n=>e.reduce((r,o)=>(r[o]=gi(t,n),r),{})}function SS(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=gS(n),i=yS(o,r),l=e[n];return yn(e,l,i)}function _0(e,t){const n=w0(e.theme);return Object.keys(e).map(r=>SS(e,t,r,n)).reduce(Oo,{})}function ke(e){return _0(e,Ec)}ke.propTypes={};ke.filterProps=Ec;function De(e){return _0(e,kc)}De.propTypes={};De.filterProps=kc;function vS(e=8){if(e.mui)return e;const t=w0({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const l=t(i);return typeof l=="number"?`${l}px`:l}).join(" ");return n.mui=!0,n}function Ma(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>t[i]?Oo(o,t[i](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function Jt(e){return typeof e!="number"?e:`${e}px solid`}const xS=oe({prop:"border",themeKey:"borders",transform:Jt}),CS=oe({prop:"borderTop",themeKey:"borders",transform:Jt}),PS=oe({prop:"borderRight",themeKey:"borders",transform:Jt}),MS=oe({prop:"borderBottom",themeKey:"borders",transform:Jt}),RS=oe({prop:"borderLeft",themeKey:"borders",transform:Jt}),TS=oe({prop:"borderColor",themeKey:"palette"}),ES=oe({prop:"borderTopColor",themeKey:"palette"}),kS=oe({prop:"borderRightColor",themeKey:"palette"}),DS=oe({prop:"borderBottomColor",themeKey:"palette"}),wS=oe({prop:"borderLeftColor",themeKey:"palette"}),Ra=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=hi(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:gi(t,r)});return yn(e,e.borderRadius,n)}return null};Ra.propTypes={};Ra.filterProps=["borderRadius"];Ma(xS,CS,PS,MS,RS,TS,ES,kS,DS,wS,Ra);const Ta=e=>{if(e.gap!==void 0&&e.gap!==null){const t=hi(e.theme,"spacing",8),n=r=>({gap:gi(t,r)});return yn(e,e.gap,n)}return null};Ta.propTypes={};Ta.filterProps=["gap"];const Ea=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=hi(e.theme,"spacing",8),n=r=>({columnGap:gi(t,r)});return yn(e,e.columnGap,n)}return null};Ea.propTypes={};Ea.filterProps=["columnGap"];const ka=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=hi(e.theme,"spacing",8),n=r=>({rowGap:gi(t,r)});return yn(e,e.rowGap,n)}return null};ka.propTypes={};ka.filterProps=["rowGap"];const _S=oe({prop:"gridColumn"}),AS=oe({prop:"gridRow"}),bS=oe({prop:"gridAutoFlow"}),IS=oe({prop:"gridAutoColumns"}),BS=oe({prop:"gridAutoRows"}),FS=oe({prop:"gridTemplateColumns"}),NS=oe({prop:"gridTemplateRows"}),OS=oe({prop:"gridTemplateAreas"}),jS=oe({prop:"gridArea"});Ma(Ta,Ea,ka,_S,AS,bS,IS,BS,FS,NS,OS,jS);function Wr(e,t){return t==="grey"?t:e}const LS=oe({prop:"color",themeKey:"palette",transform:Wr}),$S=oe({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Wr}),VS=oe({prop:"backgroundColor",themeKey:"palette",transform:Wr});Ma(LS,$S,VS);function gt(e){return e<=1&&e!==0?`${e*100}%`:e}const zS=oe({prop:"width",transform:gt}),Dc=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const i=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||Tc[n];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:gt(n)}};return yn(e,e.maxWidth,t)}return null};Dc.filterProps=["maxWidth"];const HS=oe({prop:"minWidth",transform:gt}),WS=oe({prop:"height",transform:gt}),US=oe({prop:"maxHeight",transform:gt}),GS=oe({prop:"minHeight",transform:gt});oe({prop:"size",cssProperty:"width",transform:gt});oe({prop:"size",cssProperty:"height",transform:gt});const KS=oe({prop:"boxSizing"});Ma(zS,Dc,HS,WS,US,GS,KS);const YS={border:{themeKey:"borders",transform:Jt},borderTop:{themeKey:"borders",transform:Jt},borderRight:{themeKey:"borders",transform:Jt},borderBottom:{themeKey:"borders",transform:Jt},borderLeft:{themeKey:"borders",transform:Jt},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ra},color:{themeKey:"palette",transform:Wr},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Wr},backgroundColor:{themeKey:"palette",transform:Wr},p:{style:De},pt:{style:De},pr:{style:De},pb:{style:De},pl:{style:De},px:{style:De},py:{style:De},padding:{style:De},paddingTop:{style:De},paddingRight:{style:De},paddingBottom:{style:De},paddingLeft:{style:De},paddingX:{style:De},paddingY:{style:De},paddingInline:{style:De},paddingInlineStart:{style:De},paddingInlineEnd:{style:De},paddingBlock:{style:De},paddingBlockStart:{style:De},paddingBlockEnd:{style:De},m:{style:ke},mt:{style:ke},mr:{style:ke},mb:{style:ke},ml:{style:ke},mx:{style:ke},my:{style:ke},margin:{style:ke},marginTop:{style:ke},marginRight:{style:ke},marginBottom:{style:ke},marginLeft:{style:ke},marginX:{style:ke},marginY:{style:ke},marginInline:{style:ke},marginInlineStart:{style:ke},marginInlineEnd:{style:ke},marginBlock:{style:ke},marginBlockStart:{style:ke},marginBlockEnd:{style:ke},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Ta},rowGap:{style:ka},columnGap:{style:Ea},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:gt},maxWidth:{style:Dc},minWidth:{transform:gt},height:{transform:gt},maxHeight:{transform:gt},minHeight:{transform:gt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Da=YS;function QS(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function XS(e,t){return typeof e=="function"?e(t):e}function qS(){function e(n,r,o,i){const l={[n]:r,theme:o},a=i[n];if(!a)return{[n]:r};const{cssProperty:s=n,themeKey:u,transform:m,style:h}=a;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const f=Pa(o,u)||{};return h?h(l):yn(l,r,g=>{let S=El(f,m,g);return g===S&&typeof g=="string"&&(S=El(f,m,`${n}${g==="default"?"":he(g)}`,g)),s===!1?S:{[s]:S}})}function t(n){var r;const{sx:o,theme:i={}}=n||{};if(!o)return null;const l=(r=i.unstable_sxConfig)!=null?r:Da;function a(s){let u=s;if(typeof s=="function")u=s(i);else if(typeof s!="object")return s;if(!u)return null;const m=dS(i.breakpoints),h=Object.keys(m);let f=m;return Object.keys(u).forEach(y=>{const g=XS(u[y],i);if(g!=null)if(typeof g=="object")if(l[y])f=Oo(f,e(y,g,i,l));else{const S=yn({theme:i},g,E=>({[y]:E}));QS(S,g)?f[y]=t({sx:g,theme:i}):f=Oo(f,S)}else f=Oo(f,e(y,g,i,l))}),pS(h,f)}return Array.isArray(o)?o.map(a):a(o)}return t}const A0=qS();A0.filterProps=["sx"];const wc=A0,ZS=["breakpoints","palette","spacing","shape"];function wa(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=e,l=U(e,ZS),a=sS(n),s=vS(o);let u=ft({breakpoints:a,direction:"ltr",components:{},palette:C({mode:"light"},r),spacing:s,shape:C({},cS,i)},l);return u=t.reduce((m,h)=>ft(m,h),u),u.unstable_sxConfig=C({},Da,l==null?void 0:l.unstable_sxConfig),u.unstable_sx=function(h){return wc({sx:h,theme:this})},u}function JS(e){return Object.keys(e).length===0}function b0(e=null){const t=x.useContext(Ca);return!t||JS(t)?e:t}const ev=wa();function _c(e=ev){return b0(e)}function tv({styles:e,themeId:t,defaultTheme:n={}}){const r=_c(n),o=typeof e=="function"?e(t&&r[t]||r):e;return M.jsx(rS,{styles:o})}const nv=["sx"],rv=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:Da;return Object.keys(e).forEach(i=>{o[i]?r.systemProps[i]=e[i]:r.otherProps[i]=e[i]}),r};function ov(e){const{sx:t}=e,n=U(e,nv),{systemProps:r,otherProps:o}=rv(n);let i;return Array.isArray(t)?i=[r,...t]:typeof t=="function"?i=(...l)=>{const a=t(...l);return un(a)?C({},r,a):r}:i=C({},r,t),C({},o,{sx:i})}function I0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=I0(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function J(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=I0(e))&&(r&&(r+=" "),r+=t);return r}const iv=["variant"];function pp(e){return e.length===0}function B0(e){const{variant:t}=e,n=U(e,iv);let r=t||"";return Object.keys(n).sort().forEach(o=>{o==="color"?r+=pp(r)?e[o]:he(e[o]):r+=`${pp(r)?o:he(o)}${he(e[o].toString())}`}),r}const lv=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function av(e){return Object.keys(e).length===0}function sv(e){return typeof e=="string"&&e.charCodeAt(0)>96}const uv=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,kl=e=>{const t={};return e&&e.forEach(n=>{const r=B0(n.props);t[r]=n.style}),t},cv=(e,t)=>{let n=[];return t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants),kl(n)},Dl=(e,t,n)=>{const{ownerState:r={}}=e,o=[];return n&&n.forEach(i=>{let l=!0;Object.keys(i.props).forEach(a=>{r[a]!==i.props[a]&&e[a]!==i.props[a]&&(l=!1)}),l&&o.push(t[B0(i.props)])}),o},dv=(e,t,n,r)=>{var o;const i=n==null||(o=n.components)==null||(o=o[r])==null?void 0:o.variants;return Dl(e,t,i)};function jo(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const pv=wa(),fv=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function el({defaultTheme:e,theme:t,themeId:n}){return av(t)?e:t[n]||t}function mv(e){return e?(t,n)=>n[e]:null}const fp=({styledArg:e,props:t,defaultTheme:n,themeId:r})=>{const o=e(C({},t,{theme:el(C({},t,{defaultTheme:n,themeId:r}))}));let i;if(o&&o.variants&&(i=o.variants,delete o.variants),i){const l=Dl(t,kl(i),i);return[o,...l]}return o};function F0(e={}){const{themeId:t,defaultTheme:n=pv,rootShouldForwardProp:r=jo,slotShouldForwardProp:o=jo}=e,i=l=>wc(C({},l,{theme:el(C({},l,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,(l,a={})=>{iS(l,v=>v.filter(R=>!(R!=null&&R.__mui_systemSx)));const{name:s,slot:u,skipVariantsResolver:m,skipSx:h,overridesResolver:f=mv(fv(u))}=a,y=U(a,lv),g=m!==void 0?m:u&&u!=="Root"&&u!=="root"||!1,S=h||!1;let E,d=jo;u==="Root"||u==="root"?d=r:u?d=o:sv(l)&&(d=void 0);const c=oS(l,C({shouldForwardProp:d,label:E},y)),p=(v,...R)=>{const T=R?R.map(k=>{if(typeof k=="function"&&k.__emotion_real!==k)return F=>fp({styledArg:k,props:F,defaultTheme:n,themeId:t});if(un(k)){let F=k,L;return k&&k.variants&&(L=k.variants,delete F.variants,F=N=>{let I=k;return Dl(N,kl(L),L).forEach($=>{I=ft(I,$)}),I}),F}return k}):[];let P=v;if(un(v)){let k;v&&v.variants&&(k=v.variants,delete P.variants,P=F=>{let L=v;return Dl(F,kl(k),k).forEach(I=>{L=ft(L,I)}),L})}else typeof v=="function"&&v.__emotion_real!==v&&(P=k=>fp({styledArg:v,props:k,defaultTheme:n,themeId:t}));s&&f&&T.push(k=>{const F=el(C({},k,{defaultTheme:n,themeId:t})),L=uv(s,F);if(L){const N={};return Object.entries(L).forEach(([I,B])=>{N[I]=typeof B=="function"?B(C({},k,{theme:F})):B}),f(k,N)}return null}),s&&!g&&T.push(k=>{const F=el(C({},k,{defaultTheme:n,themeId:t}));return dv(k,cv(s,F),F,s)}),S||T.push(i);const w=T.length-R.length;if(Array.isArray(v)&&w>0){const k=new Array(w).fill("");P=[...v,...k],P.raw=[...v.raw,...k]}const A=c(P,...T);return l.muiName&&(A.muiName=l.muiName),A};return c.withConfig&&(p.withConfig=c.withConfig),p}}const hv=F0(),gv=hv;function yv(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:c0(t.components[n].defaultProps,r)}function N0({props:e,name:t,defaultTheme:n,themeId:r}){let o=_c(n);return r&&(o=o[r]||o),yv({theme:o,name:t,props:e})}function Ac(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function Sv(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function dr(e){if(e.type)return e;if(e.charAt(0)==="#")return dr(Sv(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(zn(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error(zn(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}function _a(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function vv(e){e=dr(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),l=(u,m=(u+n/30)%12)=>o-i*Math.max(Math.min(m-3,9-m,1),-1);let a="rgb";const s=[Math.round(l(0)*255),Math.round(l(8)*255),Math.round(l(4)*255)];return e.type==="hsla"&&(a+="a",s.push(t[3])),_a({type:a,values:s})}function mp(e){e=dr(e);let t=e.type==="hsl"||e.type==="hsla"?dr(vv(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function xv(e,t){const n=mp(e),r=mp(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Nr(e,t){return e=dr(e),t=Ac(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,_a(e)}function Cv(e,t){if(e=dr(e),t=Ac(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return _a(e)}function Pv(e,t){if(e=dr(e),t=Ac(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return _a(e)}const Mv=x.createContext(null),O0=Mv;function j0(){return x.useContext(O0)}const Rv=typeof Symbol=="function"&&Symbol.for,Tv=Rv?Symbol.for("mui.nested"):"__THEME_NESTED__";function Ev(e,t){return typeof t=="function"?t(e):C({},e,t)}function kv(e){const{children:t,theme:n}=e,r=j0(),o=x.useMemo(()=>{const i=r===null?n:Ev(r,n);return i!=null&&(i[Tv]=r!==null),i},[n,r]);return M.jsx(O0.Provider,{value:o,children:t})}const hp={};function gp(e,t,n,r=!1){return x.useMemo(()=>{const o=e&&t[e]||t;if(typeof n=="function"){const i=n(o),l=e?C({},t,{[e]:i}):i;return r?()=>l:l}return e?C({},t,{[e]:n}):C({},t,n)},[e,t,n,r])}function Dv(e){const{children:t,theme:n,themeId:r}=e,o=b0(hp),i=j0()||hp,l=gp(r,o,n),a=gp(r,i,n,!0);return M.jsx(kv,{theme:a,children:M.jsx(Ca.Provider,{value:l,children:t})})}const wv=["className","component","disableGutters","fixed","maxWidth","classes"],_v=wa(),Av=gv("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${he(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),bv=e=>N0({props:e,name:"MuiContainer",defaultTheme:_v}),Iv=(e,t)=>{const n=s=>Ie(t,s),{classes:r,fixed:o,disableGutters:i,maxWidth:l}=e,a={root:["root",l&&`maxWidth${he(String(l))}`,o&&"fixed",i&&"disableGutters"]};return je(a,n,r)};function Bv(e={}){const{createStyledComponent:t=Av,useThemeProps:n=bv,componentName:r="MuiContainer"}=e,o=t(({theme:l,ownerState:a})=>C({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:l.spacing(2),paddingRight:l.spacing(2),[l.breakpoints.up("sm")]:{paddingLeft:l.spacing(3),paddingRight:l.spacing(3)}}),({theme:l,ownerState:a})=>a.fixed&&Object.keys(l.breakpoints.values).reduce((s,u)=>{const m=u,h=l.breakpoints.values[m];return h!==0&&(s[l.breakpoints.up(m)]={maxWidth:`${h}${l.breakpoints.unit}`}),s},{}),({theme:l,ownerState:a})=>C({},a.maxWidth==="xs"&&{[l.breakpoints.up("xs")]:{maxWidth:Math.max(l.breakpoints.values.xs,444)}},a.maxWidth&&a.maxWidth!=="xs"&&{[l.breakpoints.up(a.maxWidth)]:{maxWidth:`${l.breakpoints.values[a.maxWidth]}${l.breakpoints.unit}`}}));return x.forwardRef(function(a,s){const u=n(a),{className:m,component:h="div",disableGutters:f=!1,fixed:y=!1,maxWidth:g="lg"}=u,S=U(u,wv),E=C({},u,{component:h,disableGutters:f,fixed:y,maxWidth:g}),d=Iv(E,r);return M.jsx(o,C({as:h,ownerState:E,className:J(d.root,m),ref:s},S))})}function Fv(e,t){return C({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const Nv=["mode","contrastThreshold","tonalOffset"],yp={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:oi.white,default:oi.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},ps={text:{primary:oi.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:oi.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Sp(e,t,n,r){const o=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Pv(e.main,o):t==="dark"&&(e.dark=Cv(e.main,i)))}function Ov(e="light"){return e==="dark"?{main:Sr[200],light:Sr[50],dark:Sr[400]}:{main:Sr[700],light:Sr[400],dark:Sr[800]}}function jv(e="light"){return e==="dark"?{main:yr[200],light:yr[50],dark:yr[400]}:{main:yr[500],light:yr[300],dark:yr[700]}}function Lv(e="light"){return e==="dark"?{main:gr[500],light:gr[300],dark:gr[700]}:{main:gr[700],light:gr[400],dark:gr[800]}}function $v(e="light"){return e==="dark"?{main:vr[400],light:vr[300],dark:vr[700]}:{main:vr[700],light:vr[500],dark:vr[900]}}function Vv(e="light"){return e==="dark"?{main:xr[400],light:xr[300],dark:xr[700]}:{main:xr[800],light:xr[500],dark:xr[900]}}function zv(e="light"){return e==="dark"?{main:yo[400],light:yo[300],dark:yo[700]}:{main:"#ed6c02",light:yo[500],dark:yo[900]}}function Hv(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=U(e,Nv),i=e.primary||Ov(t),l=e.secondary||jv(t),a=e.error||Lv(t),s=e.info||$v(t),u=e.success||Vv(t),m=e.warning||zv(t);function h(S){return xv(S,ps.text.primary)>=n?ps.text.primary:yp.text.primary}const f=({color:S,name:E,mainShade:d=500,lightShade:c=300,darkShade:p=700})=>{if(S=C({},S),!S.main&&S[d]&&(S.main=S[d]),!S.hasOwnProperty("main"))throw new Error(zn(11,E?` (${E})`:"",d));if(typeof S.main!="string")throw new Error(zn(12,E?` (${E})`:"",JSON.stringify(S.main)));return Sp(S,"light",c,r),Sp(S,"dark",p,r),S.contrastText||(S.contrastText=h(S.main)),S},y={dark:ps,light:yp};return ft(C({common:C({},oi),mode:t,primary:f({color:i,name:"primary"}),secondary:f({color:l,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:a,name:"error"}),warning:f({color:m,name:"warning"}),info:f({color:s,name:"info"}),success:f({color:u,name:"success"}),grey:j1,contrastThreshold:n,getContrastText:h,augmentColor:f,tonalOffset:r},y[t]),o)}const Wv=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Uv(e){return Math.round(e*1e5)/1e5}const vp={textTransform:"uppercase"},xp='"Roboto", "Helvetica", "Arial", sans-serif';function Gv(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=xp,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:l=400,fontWeightMedium:a=500,fontWeightBold:s=700,htmlFontSize:u=16,allVariants:m,pxToRem:h}=n,f=U(n,Wv),y=o/14,g=h||(d=>`${d/u*y}rem`),S=(d,c,p,v,R)=>C({fontFamily:r,fontWeight:d,fontSize:g(c),lineHeight:p},r===xp?{letterSpacing:`${Uv(v/c)}em`}:{},R,m),E={h1:S(i,96,1.167,-1.5),h2:S(i,60,1.2,-.5),h3:S(l,48,1.167,0),h4:S(l,34,1.235,.25),h5:S(l,24,1.334,0),h6:S(a,20,1.6,.15),subtitle1:S(l,16,1.75,.15),subtitle2:S(a,14,1.57,.1),body1:S(l,16,1.5,.15),body2:S(l,14,1.43,.15),button:S(a,14,1.75,.4,vp),caption:S(l,12,1.66,.4),overline:S(l,12,2.66,1,vp),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return ft(C({htmlFontSize:u,pxToRem:g,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:l,fontWeightMedium:a,fontWeightBold:s},E),f,{clone:!1})}const Kv=.2,Yv=.14,Qv=.12;function ve(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Kv})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Yv})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Qv})`].join(",")}const Xv=["none",ve(0,2,1,-1,0,1,1,0,0,1,3,0),ve(0,3,1,-2,0,2,2,0,0,1,5,0),ve(0,3,3,-2,0,3,4,0,0,1,8,0),ve(0,2,4,-1,0,4,5,0,0,1,10,0),ve(0,3,5,-1,0,5,8,0,0,1,14,0),ve(0,3,5,-1,0,6,10,0,0,1,18,0),ve(0,4,5,-2,0,7,10,1,0,2,16,1),ve(0,5,5,-3,0,8,10,1,0,3,14,2),ve(0,5,6,-3,0,9,12,1,0,3,16,2),ve(0,6,6,-3,0,10,14,1,0,4,18,3),ve(0,6,7,-4,0,11,15,1,0,4,20,3),ve(0,7,8,-4,0,12,17,2,0,5,22,4),ve(0,7,8,-4,0,13,19,2,0,5,24,4),ve(0,7,9,-4,0,14,21,2,0,5,26,4),ve(0,8,9,-5,0,15,22,2,0,6,28,5),ve(0,8,10,-5,0,16,24,2,0,6,30,5),ve(0,8,11,-5,0,17,26,2,0,6,32,5),ve(0,9,11,-5,0,18,28,2,0,7,34,6),ve(0,9,12,-6,0,19,29,2,0,7,36,6),ve(0,10,13,-6,0,20,31,3,0,8,38,7),ve(0,10,13,-6,0,21,33,3,0,8,40,7),ve(0,10,14,-6,0,22,35,3,0,8,42,7),ve(0,11,14,-7,0,23,36,3,0,9,44,8),ve(0,11,15,-7,0,24,38,3,0,9,46,8)],qv=Xv,Zv=["duration","easing","delay"],Jv={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},ex={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Cp(e){return`${Math.round(e)}ms`}function tx(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function nx(e){const t=C({},Jv,e.easing),n=C({},ex,e.duration);return C({getAutoHeightDuration:tx,create:(o=["all"],i={})=>{const{duration:l=n.standard,easing:a=t.easeInOut,delay:s=0}=i;return U(i,Zv),(Array.isArray(o)?o:[o]).map(u=>`${u} ${typeof l=="string"?l:Cp(l)} ${a} ${typeof s=="string"?s:Cp(s)}`).join(",")}},e,{easing:t,duration:n})}const rx={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},ox=rx,ix=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function L0(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=e,l=U(e,ix);if(e.vars)throw new Error(zn(18));const a=Hv(r),s=wa(e);let u=ft(s,{mixins:Fv(s.breakpoints,n),palette:a,shadows:qv.slice(),typography:Gv(a,i),transitions:nx(o),zIndex:C({},ox)});return u=ft(u,l),u=t.reduce((m,h)=>ft(m,h),u),u.unstable_sxConfig=C({},Da,l==null?void 0:l.unstable_sxConfig),u.unstable_sx=function(h){return wc({sx:h,theme:this})},u}const lx=L0(),Aa=lx;function bc(){const e=_c(Aa);return e[Zr]||e}function Be({props:e,name:t}){return N0({props:e,name:t,defaultTheme:Aa,themeId:Zr})}const vn=e=>jo(e)&&e!=="classes",ax=jo,sx=F0({themeId:Zr,defaultTheme:Aa,rootShouldForwardProp:vn}),G=sx,ux=["theme"];function cx(e){let{theme:t}=e,n=U(e,ux);const r=t[Zr];return M.jsx(Dv,C({},n,{themeId:r?Zr:void 0,theme:r||t}))}const dx=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Pp=dx;function px(e){return Ie("MuiSvgIcon",e)}Ee("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const fx=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],mx=e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root",t!=="inherit"&&`color${he(t)}`,`fontSize${he(n)}`]};return je(o,px,r)},hx=G("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${he(n.color)}`],t[`fontSize${he(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,o,i,l,a,s,u,m,h,f,y,g;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((i=e.typography)==null||(l=i.pxToRem)==null?void 0:l.call(i,20))||"1.25rem",medium:((a=e.typography)==null||(s=a.pxToRem)==null?void 0:s.call(a,24))||"1.5rem",large:((u=e.typography)==null||(m=u.pxToRem)==null?void 0:m.call(u,35))||"2.1875rem"}[t.fontSize],color:(h=(f=(e.vars||e).palette)==null||(f=f[t.color])==null?void 0:f.main)!=null?h:{action:(y=(e.vars||e).palette)==null||(y=y.action)==null?void 0:y.active,disabled:(g=(e.vars||e).palette)==null||(g=g.action)==null?void 0:g.disabled,inherit:void 0}[t.color]}}),$0=x.forwardRef(function(t,n){const r=Be({props:t,name:"MuiSvgIcon"}),{children:o,className:i,color:l="inherit",component:a="svg",fontSize:s="medium",htmlColor:u,inheritViewBox:m=!1,titleAccess:h,viewBox:f="0 0 24 24"}=r,y=U(r,fx),g=x.isValidElement(o)&&o.type==="svg",S=C({},r,{color:l,component:a,fontSize:s,instanceFontSize:t.fontSize,inheritViewBox:m,viewBox:f,hasSvgAsChild:g}),E={};m||(E.viewBox=f);const d=mx(S);return M.jsxs(hx,C({as:a,className:J(d.root,i),focusable:"false",color:u,"aria-hidden":h?void 0:!0,role:h?"img":void 0,ref:n},E,y,g&&o.props,{ownerState:S,children:[g?o.props.children:o,h?M.jsx("title",{children:h}):null]}))});$0.muiName="SvgIcon";const Mp=$0;function gx(e,t){function n(r,o){return M.jsx(Mp,C({"data-testid":`${t}Icon`,ref:o},r,{children:e}))}return n.muiName=Mp.muiName,x.memo(x.forwardRef(n))}function gu(e,t){return gu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},gu(e,t)}function V0(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,gu(e,t)}const Rp={disabled:!1},wl=Ht.createContext(null);var yx=function(t){return t.scrollTop},ko="unmounted",qn="exited",Zn="entering",Pr="entered",yu="exiting",xn=function(e){V0(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var l=o,a=l&&!l.isMounting?r.enter:r.appear,s;return i.appearStatus=null,r.in?a?(s=qn,i.appearStatus=Zn):s=Pr:r.unmountOnExit||r.mountOnEnter?s=ko:s=qn,i.state={status:s},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var l=o.in;return l&&i.status===ko?{status:qn}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var l=this.state.status;this.props.in?l!==Zn&&l!==Pr&&(i=Zn):(l===Zn||l===Pr)&&(i=yu)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,l,a;return i=l=a=o,o!=null&&typeof o!="number"&&(i=o.exit,l=o.enter,a=o.appear!==void 0?o.appear:l),{exit:i,enter:l,appear:a}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===Zn){if(this.props.unmountOnExit||this.props.mountOnEnter){var l=this.props.nodeRef?this.props.nodeRef.current:Ni.findDOMNode(this);l&&yx(l)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===qn&&this.setState({status:ko})},n.performEnter=function(o){var i=this,l=this.props.enter,a=this.context?this.context.isMounting:o,s=this.props.nodeRef?[a]:[Ni.findDOMNode(this),a],u=s[0],m=s[1],h=this.getTimeouts(),f=a?h.appear:h.enter;if(!o&&!l||Rp.disabled){this.safeSetState({status:Pr},function(){i.props.onEntered(u)});return}this.props.onEnter(u,m),this.safeSetState({status:Zn},function(){i.props.onEntering(u,m),i.onTransitionEnd(f,function(){i.safeSetState({status:Pr},function(){i.props.onEntered(u,m)})})})},n.performExit=function(){var o=this,i=this.props.exit,l=this.getTimeouts(),a=this.props.nodeRef?void 0:Ni.findDOMNode(this);if(!i||Rp.disabled){this.safeSetState({status:qn},function(){o.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:yu},function(){o.props.onExiting(a),o.onTransitionEnd(l.exit,function(){o.safeSetState({status:qn},function(){o.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,l=!0;return this.nextCallback=function(a){l&&(l=!1,i.nextCallback=null,o(a))},this.nextCallback.cancel=function(){l=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var l=this.props.nodeRef?this.props.nodeRef.current:Ni.findDOMNode(this),a=o==null&&!this.props.addEndListener;if(!l||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[l,this.nextCallback],u=s[0],m=s[1];this.props.addEndListener(u,m)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===ko)return null;var i=this.props,l=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var a=U(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ht.createElement(wl.Provider,{value:null},typeof l=="function"?l(o,a):Ht.cloneElement(Ht.Children.only(l),a))},t}(Ht.Component);xn.contextType=wl;xn.propTypes={};function Cr(){}xn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Cr,onEntering:Cr,onEntered:Cr,onExit:Cr,onExiting:Cr,onExited:Cr};xn.UNMOUNTED=ko;xn.EXITED=qn;xn.ENTERING=Zn;xn.ENTERED=Pr;xn.EXITING=yu;const z0=xn;function Sx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ic(e,t){var n=function(i){return t&&x.isValidElement(i)?t(i):i},r=Object.create(null);return e&&x.Children.map(e,function(o){return o}).forEach(function(o){r[o.key]=n(o)}),r}function vx(e,t){e=e||{},t=t||{};function n(m){return m in t?t[m]:e[m]}var r=Object.create(null),o=[];for(var i in e)i in t?o.length&&(r[i]=o,o=[]):o.push(i);var l,a={};for(var s in t){if(r[s])for(l=0;l<r[s].length;l++){var u=r[s][l];a[r[s][l]]=n(u)}a[s]=n(s)}for(l=0;l<o.length;l++)a[o[l]]=n(o[l]);return a}function nr(e,t,n){return n[t]!=null?n[t]:e.props[t]}function xx(e,t){return Ic(e.children,function(n){return x.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:nr(n,"appear",e),enter:nr(n,"enter",e),exit:nr(n,"exit",e)})})}function Cx(e,t,n){var r=Ic(e.children),o=vx(t,r);return Object.keys(o).forEach(function(i){var l=o[i];if(x.isValidElement(l)){var a=i in t,s=i in r,u=t[i],m=x.isValidElement(u)&&!u.props.in;s&&(!a||m)?o[i]=x.cloneElement(l,{onExited:n.bind(null,l),in:!0,exit:nr(l,"exit",e),enter:nr(l,"enter",e)}):!s&&a&&!m?o[i]=x.cloneElement(l,{in:!1}):s&&a&&x.isValidElement(u)&&(o[i]=x.cloneElement(l,{onExited:n.bind(null,l),in:u.props.in,exit:nr(l,"exit",e),enter:nr(l,"enter",e)}))}}),o}var Px=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Mx={component:"div",childFactory:function(t){return t}},Bc=function(e){V0(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var l=i.handleExited.bind(Sx(i));return i.state={contextValue:{isMounting:!0},handleExited:l,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,i){var l=i.children,a=i.handleExited,s=i.firstRender;return{children:s?xx(o,a):Cx(o,l,a),firstRender:!1}},n.handleExited=function(o,i){var l=Ic(this.props.children);o.key in l||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(a){var s=C({},a.children);return delete s[o.key],{children:s}}))},n.render=function(){var o=this.props,i=o.component,l=o.childFactory,a=U(o,["component","childFactory"]),s=this.state.contextValue,u=Px(this.state.children).map(l);return delete a.appear,delete a.enter,delete a.exit,i===null?Ht.createElement(wl.Provider,{value:s},u):Ht.createElement(wl.Provider,{value:s},Ht.createElement(i,a,u))},t}(Ht.Component);Bc.propTypes={};Bc.defaultProps=Mx;const Rx=Bc,H0=e=>e.scrollTop;function _l(e,t){var n,r;const{timeout:o,easing:i,style:l={}}=e;return{duration:(n=l.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=l.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:l.transitionDelay}}function Tx(e){return Ie("MuiPaper",e)}Ee("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Ex=["className","component","elevation","square","variant"],kx=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return je(i,Tx,o)},Dx=G("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return C({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&C({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Nr("#fff",Pp(t.elevation))}, ${Nr("#fff",Pp(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),wx=x.forwardRef(function(t,n){const r=Be({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:l=1,square:a=!1,variant:s="elevation"}=r,u=U(r,Ex),m=C({},r,{component:i,elevation:l,square:a,variant:s}),h=kx(m);return M.jsx(Dx,C({as:i,ownerState:m,className:J(h.root,o),ref:n},u))}),_x=wx;function Ax(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:i,rippleSize:l,in:a,onExited:s,timeout:u}=e,[m,h]=x.useState(!1),f=J(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),y={width:l,height:l,top:-(l/2)+i,left:-(l/2)+o},g=J(n.child,m&&n.childLeaving,r&&n.childPulsate);return!a&&!m&&h(!0),x.useEffect(()=>{if(!a&&s!=null){const S=setTimeout(s,u);return()=>{clearTimeout(S)}}},[s,a,u]),M.jsx("span",{className:f,style:y,children:M.jsx("span",{className:g})})}const bx=Ee("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),wt=bx,Ix=["center","classes","className"];let ba=e=>e,Tp,Ep,kp,Dp;const Su=550,Bx=80,Fx=Rc(Tp||(Tp=ba`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Nx=Rc(Ep||(Ep=ba`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Ox=Rc(kp||(kp=ba`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),jx=G("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Lx=G(Ax,{name:"MuiTouchRipple",slot:"Ripple"})(Dp||(Dp=ba`
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
`),wt.rippleVisible,Fx,Su,({theme:e})=>e.transitions.easing.easeInOut,wt.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,wt.child,wt.childLeaving,Nx,Su,({theme:e})=>e.transitions.easing.easeInOut,wt.childPulsate,Ox,({theme:e})=>e.transitions.easing.easeInOut),$x=x.forwardRef(function(t,n){const r=Be({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:l}=r,a=U(r,Ix),[s,u]=x.useState([]),m=x.useRef(0),h=x.useRef(null);x.useEffect(()=>{h.current&&(h.current(),h.current=null)},[s]);const f=x.useRef(!1),y=x.useRef(0),g=x.useRef(null),S=x.useRef(null);x.useEffect(()=>()=>{y.current&&clearTimeout(y.current)},[]);const E=x.useCallback(v=>{const{pulsate:R,rippleX:T,rippleY:P,rippleSize:w,cb:A}=v;u(k=>[...k,M.jsx(Lx,{classes:{ripple:J(i.ripple,wt.ripple),rippleVisible:J(i.rippleVisible,wt.rippleVisible),ripplePulsate:J(i.ripplePulsate,wt.ripplePulsate),child:J(i.child,wt.child),childLeaving:J(i.childLeaving,wt.childLeaving),childPulsate:J(i.childPulsate,wt.childPulsate)},timeout:Su,pulsate:R,rippleX:T,rippleY:P,rippleSize:w},m.current)]),m.current+=1,h.current=A},[i]),d=x.useCallback((v={},R={},T=()=>{})=>{const{pulsate:P=!1,center:w=o||R.pulsate,fakeElement:A=!1}=R;if((v==null?void 0:v.type)==="mousedown"&&f.current){f.current=!1;return}(v==null?void 0:v.type)==="touchstart"&&(f.current=!0);const k=A?null:S.current,F=k?k.getBoundingClientRect():{width:0,height:0,left:0,top:0};let L,N,I;if(w||v===void 0||v.clientX===0&&v.clientY===0||!v.clientX&&!v.touches)L=Math.round(F.width/2),N=Math.round(F.height/2);else{const{clientX:B,clientY:$}=v.touches&&v.touches.length>0?v.touches[0]:v;L=Math.round(B-F.left),N=Math.round($-F.top)}if(w)I=Math.sqrt((2*F.width**2+F.height**2)/3),I%2===0&&(I+=1);else{const B=Math.max(Math.abs((k?k.clientWidth:0)-L),L)*2+2,$=Math.max(Math.abs((k?k.clientHeight:0)-N),N)*2+2;I=Math.sqrt(B**2+$**2)}v!=null&&v.touches?g.current===null&&(g.current=()=>{E({pulsate:P,rippleX:L,rippleY:N,rippleSize:I,cb:T})},y.current=setTimeout(()=>{g.current&&(g.current(),g.current=null)},Bx)):E({pulsate:P,rippleX:L,rippleY:N,rippleSize:I,cb:T})},[o,E]),c=x.useCallback(()=>{d({},{pulsate:!0})},[d]),p=x.useCallback((v,R)=>{if(clearTimeout(y.current),(v==null?void 0:v.type)==="touchend"&&g.current){g.current(),g.current=null,y.current=setTimeout(()=>{p(v,R)});return}g.current=null,u(T=>T.length>0?T.slice(1):T),h.current=R},[]);return x.useImperativeHandle(n,()=>({pulsate:c,start:d,stop:p}),[c,d,p]),M.jsx(jx,C({className:J(wt.root,i.root,l),ref:S},a,{children:M.jsx(Rx,{component:null,exit:!0,children:s})}))}),Vx=$x;function zx(e){return Ie("MuiButtonBase",e)}const Hx=Ee("MuiButtonBase",["root","disabled","focusVisible"]),Wx=Hx,Ux=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Gx=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,l=je({root:["root",t&&"disabled",n&&"focusVisible"]},zx,o);return n&&r&&(l.root+=` ${r}`),l},Kx=G("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Wx.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Yx=x.forwardRef(function(t,n){const r=Be({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:l,className:a,component:s="button",disabled:u=!1,disableRipple:m=!1,disableTouchRipple:h=!1,focusRipple:f=!1,LinkComponent:y="a",onBlur:g,onClick:S,onContextMenu:E,onDragLeave:d,onFocus:c,onFocusVisible:p,onKeyDown:v,onKeyUp:R,onMouseDown:T,onMouseLeave:P,onMouseUp:w,onTouchEnd:A,onTouchMove:k,onTouchStart:F,tabIndex:L=0,TouchRippleProps:N,touchRippleRef:I,type:B}=r,$=U(r,Ux),V=x.useRef(null),D=x.useRef(null),b=rt(D,I),{isFocusVisibleRef:O,onFocus:q,onBlur:K,ref:_e}=X1(),[X,ge]=x.useState(!1);u&&X&&ge(!1),x.useImperativeHandle(o,()=>({focusVisible:()=>{ge(!0),V.current.focus()}}),[]);const[ie,We]=x.useState(!1);x.useEffect(()=>{We(!0)},[]);const Tt=ie&&!m&&!u;x.useEffect(()=>{X&&f&&!m&&ie&&D.current.pulsate()},[m,f,X,ie]);function Ae(H,ln,lo=h){return Fr(ao=>(ln&&ln(ao),!lo&&D.current&&D.current[H](ao),!0))}const lt=Ae("start",T),re=Ae("stop",E),Ce=Ae("stop",d),Y=Ae("stop",w),se=Ae("stop",H=>{X&&H.preventDefault(),P&&P(H)}),ye=Ae("start",F),Cn=Ae("stop",A),Et=Ae("stop",k),kt=Ae("stop",H=>{K(H),O.current===!1&&ge(!1),g&&g(H)},!1),Ot=Fr(H=>{V.current||(V.current=H.currentTarget),q(H),O.current===!0&&(ge(!0),p&&p(H)),c&&c(H)}),Dt=()=>{const H=V.current;return s&&s!=="button"&&!(H.tagName==="A"&&H.href)},Pe=x.useRef(!1),rn=Fr(H=>{f&&!Pe.current&&X&&D.current&&H.key===" "&&(Pe.current=!0,D.current.stop(H,()=>{D.current.start(H)})),H.target===H.currentTarget&&Dt()&&H.key===" "&&H.preventDefault(),v&&v(H),H.target===H.currentTarget&&Dt()&&H.key==="Enter"&&!u&&(H.preventDefault(),S&&S(H))}),at=Fr(H=>{f&&H.key===" "&&D.current&&X&&!H.defaultPrevented&&(Pe.current=!1,D.current.stop(H,()=>{D.current.pulsate(H)})),R&&R(H),S&&H.target===H.currentTarget&&Dt()&&H.key===" "&&!H.defaultPrevented&&S(H)});let Se=s;Se==="button"&&($.href||$.to)&&(Se=y);const Kt={};Se==="button"?(Kt.type=B===void 0?"button":B,Kt.disabled=u):(!$.href&&!$.to&&(Kt.role="button"),u&&(Kt["aria-disabled"]=u));const Pn=rt(n,_e,V),on=C({},r,{centerRipple:i,component:s,disabled:u,disableRipple:m,disableTouchRipple:h,focusRipple:f,tabIndex:L,focusVisible:X}),ce=Gx(on);return M.jsxs(Kx,C({as:Se,className:J(ce.root,a),ownerState:on,onBlur:kt,onClick:S,onContextMenu:re,onFocus:Ot,onKeyDown:rn,onKeyUp:at,onMouseDown:lt,onMouseLeave:se,onMouseUp:Y,onDragLeave:Ce,onTouchEnd:Cn,onTouchMove:Et,onTouchStart:ye,ref:Pn,tabIndex:u?-1:L,type:B},Kt,$,{children:[l,Tt?M.jsx(Vx,C({ref:b,center:i},N)):null]}))}),Qx=Yx;function Xx(e){return Ie("MuiTypography",e)}Ee("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const qx=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Zx=e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:l}=e,a={root:["root",i,e.align!=="inherit"&&`align${he(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return je(a,Xx,l)},Jx=G("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${he(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>C({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),wp={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},e5={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},t5=e=>e5[e]||e,n5=x.forwardRef(function(t,n){const r=Be({props:t,name:"MuiTypography"}),o=t5(r.color),i=ov(C({},r,{color:o})),{align:l="inherit",className:a,component:s,gutterBottom:u=!1,noWrap:m=!1,paragraph:h=!1,variant:f="body1",variantMapping:y=wp}=i,g=U(i,qx),S=C({},i,{align:l,color:o,className:a,component:s,gutterBottom:u,noWrap:m,paragraph:h,variant:f,variantMapping:y}),E=s||(h?"p":y[f]||wp[f])||"span",d=Zx(S);return M.jsx(Jx,C({as:E,ref:n,ownerState:S,className:J(d.root,a)},g))}),si=n5;function Al(e){return typeof e=="string"}function r5(e,t,n){return e===void 0||Al(e)?t:C({},t,{ownerState:C({},t.ownerState,n)})}function W0(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function o5(e,t,n){return typeof e=="function"?e(t,n):e}function _p(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function i5(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:i}=e;if(!t){const y=J(o==null?void 0:o.className,r==null?void 0:r.className,i,n==null?void 0:n.className),g=C({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),S=C({},n,o,r);return y.length>0&&(S.className=y),Object.keys(g).length>0&&(S.style=g),{props:S,internalRef:void 0}}const l=W0(C({},o,r)),a=_p(r),s=_p(o),u=t(l),m=J(u==null?void 0:u.className,n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),h=C({},u==null?void 0:u.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),f=C({},u,n,s,a);return m.length>0&&(f.className=m),Object.keys(h).length>0&&(f.style=h),{props:f,internalRef:u.ref}}const l5=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function eo(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:i=!1}=e,l=U(e,l5),a=i?{}:o5(r,o),{props:s,internalRef:u}=i5(C({},l,{externalSlotProps:a})),m=rt(u,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return r5(n,C({},s,{ref:m}),o)}const a5=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function s5(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function u5(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function c5(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||u5(e))}function d5(e){const t=[],n=[];return Array.from(e.querySelectorAll(a5)).forEach((r,o)=>{const i=s5(r);i===-1||!c5(r)||(i===0?t.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function p5(){return!0}function f5(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=d5,isEnabled:l=p5,open:a}=e,s=x.useRef(!1),u=x.useRef(null),m=x.useRef(null),h=x.useRef(null),f=x.useRef(null),y=x.useRef(!1),g=x.useRef(null),S=rt(t.ref,g),E=x.useRef(null);x.useEffect(()=>{!a||!g.current||(y.current=!n)},[n,a]),x.useEffect(()=>{if(!a||!g.current)return;const p=vt(g.current);return g.current.contains(p.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),y.current&&g.current.focus()),()=>{o||(h.current&&h.current.focus&&(s.current=!0,h.current.focus()),h.current=null)}},[a]),x.useEffect(()=>{if(!a||!g.current)return;const p=vt(g.current),v=P=>{E.current=P,!(r||!l()||P.key!=="Tab")&&p.activeElement===g.current&&P.shiftKey&&(s.current=!0,m.current&&m.current.focus())},R=()=>{const P=g.current;if(P===null)return;if(!p.hasFocus()||!l()||s.current){s.current=!1;return}if(P.contains(p.activeElement)||r&&p.activeElement!==u.current&&p.activeElement!==m.current)return;if(p.activeElement!==f.current)f.current=null;else if(f.current!==null)return;if(!y.current)return;let w=[];if((p.activeElement===u.current||p.activeElement===m.current)&&(w=i(g.current)),w.length>0){var A,k;const F=!!((A=E.current)!=null&&A.shiftKey&&((k=E.current)==null?void 0:k.key)==="Tab"),L=w[0],N=w[w.length-1];typeof L!="string"&&typeof N!="string"&&(F?N.focus():L.focus())}else P.focus()};p.addEventListener("focusin",R),p.addEventListener("keydown",v,!0);const T=setInterval(()=>{p.activeElement&&p.activeElement.tagName==="BODY"&&R()},50);return()=>{clearInterval(T),p.removeEventListener("focusin",R),p.removeEventListener("keydown",v,!0)}},[n,r,o,l,a,i]);const d=p=>{h.current===null&&(h.current=p.relatedTarget),y.current=!0,f.current=p.target;const v=t.props.onFocus;v&&v(p)},c=p=>{h.current===null&&(h.current=p.relatedTarget),y.current=!0};return M.jsxs(x.Fragment,{children:[M.jsx("div",{tabIndex:a?0:-1,onFocus:c,ref:u,"data-testid":"sentinelStart"}),x.cloneElement(t,{ref:S,onFocus:d}),M.jsx("div",{tabIndex:a?0:-1,onFocus:c,ref:m,"data-testid":"sentinelEnd"})]})}function m5(e){return typeof e=="function"?e():e}const h5=x.forwardRef(function(t,n){const{children:r,container:o,disablePortal:i=!1}=t,[l,a]=x.useState(null),s=rt(x.isValidElement(r)?r.ref:null,n);if(Hn(()=>{i||a(m5(o)||document.body)},[o,i]),Hn(()=>{if(l&&!i)return du(n,l),()=>{du(n,null)}},[n,l,i]),i){if(x.isValidElement(r)){const u={ref:s};return x.cloneElement(r,u)}return M.jsx(x.Fragment,{children:r})}return M.jsx(x.Fragment,{children:l&&Xl.createPortal(r,l)})});function g5(e){const t=vt(e);return t.body===e?cr(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Lo(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ap(e){return parseInt(cr(e).getComputedStyle(e).paddingRight,10)||0}function y5(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function bp(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,l=>{const a=i.indexOf(l)===-1,s=!y5(l);a&&s&&Lo(l,o)})}function fs(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function S5(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(g5(r)){const l=u0(vt(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Ap(r)+l}px`;const a=vt(r).querySelectorAll(".mui-fixed");[].forEach.call(a,s=>{n.push({value:s.style.paddingRight,property:"padding-right",el:s}),s.style.paddingRight=`${Ap(s)+l}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=vt(r).body;else{const l=r.parentElement,a=cr(r);i=(l==null?void 0:l.nodeName)==="HTML"&&a.getComputedStyle(l).overflowY==="scroll"?l:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:l,property:a})=>{i?l.style.setProperty(a,i):l.style.removeProperty(a)})}}function v5(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class x5{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&Lo(t.modalRef,!1);const o=v5(n);bp(n,t.mount,t.modalRef,o,!0);const i=fs(this.containers,l=>l.container===n);return i!==-1?(this.containers[i].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=fs(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=S5(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=fs(this.containers,l=>l.modals.indexOf(t)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&Lo(t.modalRef,n),bp(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const l=i.modals[i.modals.length-1];l.modalRef&&Lo(l.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function C5(e){return typeof e=="function"?e():e}function P5(e){return e?e.props.hasOwnProperty("in"):!1}const M5=new x5;function R5(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=M5,closeAfterTransition:i=!1,onTransitionEnter:l,onTransitionExited:a,children:s,onClose:u,open:m,rootRef:h}=e,f=x.useRef({}),y=x.useRef(null),g=x.useRef(null),S=rt(g,h),[E,d]=x.useState(!m),c=P5(s);let p=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(p=!1);const v=()=>vt(y.current),R=()=>(f.current.modalRef=g.current,f.current.mount=y.current,f.current),T=()=>{o.mount(R(),{disableScrollLock:r}),g.current&&(g.current.scrollTop=0)},P=Fr(()=>{const $=C5(t)||v().body;o.add(R(),$),g.current&&T()}),w=x.useCallback(()=>o.isTopModal(R()),[o]),A=Fr($=>{y.current=$,$&&(m&&w()?T():g.current&&Lo(g.current,p))}),k=x.useCallback(()=>{o.remove(R(),p)},[p,o]);x.useEffect(()=>()=>{k()},[k]),x.useEffect(()=>{m?P():(!c||!i)&&k()},[m,k,c,i,P]);const F=$=>V=>{var D;(D=$.onKeyDown)==null||D.call($,V),!(V.key!=="Escape"||!w())&&(n||(V.stopPropagation(),u&&u(V,"escapeKeyDown")))},L=$=>V=>{var D;(D=$.onClick)==null||D.call($,V),V.target===V.currentTarget&&u&&u(V,"backdropClick")};return{getRootProps:($={})=>{const V=W0(e);delete V.onTransitionEnter,delete V.onTransitionExited;const D=C({},V,$);return C({role:"presentation"},D,{onKeyDown:F(D),ref:S})},getBackdropProps:($={})=>{const V=$;return C({"aria-hidden":!0},V,{onClick:L(V),open:m})},getTransitionProps:()=>{const $=()=>{d(!1),l&&l()},V=()=>{d(!0),a&&a(),i&&k()};return{onEnter:Qd($,s==null?void 0:s.props.onEnter),onExited:Qd(V,s==null?void 0:s.props.onExited)}},rootRef:S,portalRef:A,isTopModal:w,exited:E,hasTransition:c}}const T5=["onChange","maxRows","minRows","style","value"];function ji(e){return parseInt(e,10)||0}const E5={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function Ip(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const k5=x.forwardRef(function(t,n){const{onChange:r,maxRows:o,minRows:i=1,style:l,value:a}=t,s=U(t,T5),{current:u}=x.useRef(a!=null),m=x.useRef(null),h=rt(n,m),f=x.useRef(null),y=x.useRef(0),[g,S]=x.useState({outerHeightStyle:0}),E=x.useCallback(()=>{const v=m.current,T=cr(v).getComputedStyle(v);if(T.width==="0px")return{outerHeightStyle:0};const P=f.current;P.style.width=T.width,P.value=v.value||t.placeholder||"x",P.value.slice(-1)===`
`&&(P.value+=" ");const w=T.boxSizing,A=ji(T.paddingBottom)+ji(T.paddingTop),k=ji(T.borderBottomWidth)+ji(T.borderTopWidth),F=P.scrollHeight;P.value="x";const L=P.scrollHeight;let N=F;i&&(N=Math.max(Number(i)*L,N)),o&&(N=Math.min(Number(o)*L,N)),N=Math.max(N,L);const I=N+(w==="border-box"?A+k:0),B=Math.abs(N-F)<=1;return{outerHeightStyle:I,overflow:B}},[o,i,t.placeholder]),d=(v,R)=>{const{outerHeightStyle:T,overflow:P}=R;return y.current<20&&(T>0&&Math.abs((v.outerHeightStyle||0)-T)>1||v.overflow!==P)?(y.current+=1,{overflow:P,outerHeightStyle:T}):v},c=x.useCallback(()=>{const v=E();Ip(v)||S(R=>d(R,v))},[E]);Hn(()=>{const v=()=>{const F=E();Ip(F)||Xl.flushSync(()=>{S(L=>d(L,F))})},R=()=>{y.current=0,v()};let T;const P=s0(R),w=m.current,A=cr(w);A.addEventListener("resize",P);let k;return typeof ResizeObserver<"u"&&(k=new ResizeObserver(R),k.observe(w)),()=>{P.clear(),cancelAnimationFrame(T),A.removeEventListener("resize",P),k&&k.disconnect()}},[E]),Hn(()=>{c()}),x.useEffect(()=>{y.current=0},[a]);const p=v=>{y.current=0,u||c(),r&&r(v)};return M.jsxs(x.Fragment,{children:[M.jsx("textarea",C({value:a,onChange:p,ref:h,rows:i,style:C({height:g.outerHeightStyle,overflow:g.overflow?"hidden":void 0},l)},s)),M.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:f,tabIndex:-1,style:C({},E5.shadow,l,{paddingTop:0,paddingBottom:0})})]})});function yi({props:e,states:t,muiFormControl:n}){return t.reduce((r,o)=>(r[o]=e[o],n&&typeof e[o]>"u"&&(r[o]=n[o]),r),{})}const D5=x.createContext(void 0),Fc=D5;function Si(){return x.useContext(Fc)}function U0(e){return M.jsx(tv,C({},e,{defaultTheme:Aa,themeId:Zr}))}function Bp(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function bl(e,t=!1){return e&&(Bp(e.value)&&e.value!==""||t&&Bp(e.defaultValue)&&e.defaultValue!=="")}function w5(e){return e.startAdornment}function _5(e){return Ie("MuiInputBase",e)}const A5=Ee("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),to=A5,b5=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],Ia=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size==="small"&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${he(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},Ba=(e,t)=>{const{ownerState:n}=e;return[t.input,n.size==="small"&&t.inputSizeSmall,n.multiline&&t.inputMultiline,n.type==="search"&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},I5=e=>{const{classes:t,color:n,disabled:r,error:o,endAdornment:i,focused:l,formControl:a,fullWidth:s,hiddenLabel:u,multiline:m,readOnly:h,size:f,startAdornment:y,type:g}=e,S={root:["root",`color${he(n)}`,r&&"disabled",o&&"error",s&&"fullWidth",l&&"focused",a&&"formControl",f&&f!=="medium"&&`size${he(f)}`,m&&"multiline",y&&"adornedStart",i&&"adornedEnd",u&&"hiddenLabel",h&&"readOnly"],input:["input",r&&"disabled",g==="search"&&"inputTypeSearch",m&&"inputMultiline",f==="small"&&"inputSizeSmall",u&&"inputHiddenLabel",y&&"inputAdornedStart",i&&"inputAdornedEnd",h&&"readOnly"]};return je(S,_5,t)},Fa=G("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Ia})(({theme:e,ownerState:t})=>C({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${to.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&C({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),Na=G("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Ba})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light",r=C({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),o={opacity:"0 !important"},i=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return C({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${to.formControl} &`]:{"&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},[`&.${to.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),B5=M.jsx(U0,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),F5=x.forwardRef(function(t,n){var r;const o=Be({props:t,name:"MuiInputBase"}),{"aria-describedby":i,autoComplete:l,autoFocus:a,className:s,components:u={},componentsProps:m={},defaultValue:h,disabled:f,disableInjectingGlobalStyles:y,endAdornment:g,fullWidth:S=!1,id:E,inputComponent:d="input",inputProps:c={},inputRef:p,maxRows:v,minRows:R,multiline:T=!1,name:P,onBlur:w,onChange:A,onClick:k,onFocus:F,onKeyDown:L,onKeyUp:N,placeholder:I,readOnly:B,renderSuffix:$,rows:V,slotProps:D={},slots:b={},startAdornment:O,type:q="text",value:K}=o,_e=U(o,b5),X=c.value!=null?c.value:K,{current:ge}=x.useRef(X!=null),ie=x.useRef(),We=x.useCallback(ce=>{},[]),Tt=rt(ie,p,c.ref,We),[Ae,lt]=x.useState(!1),re=Si(),Ce=yi({props:o,muiFormControl:re,states:["color","disabled","error","hiddenLabel","size","required","filled"]});Ce.focused=re?re.focused:Ae,x.useEffect(()=>{!re&&f&&Ae&&(lt(!1),w&&w())},[re,f,Ae,w]);const Y=re&&re.onFilled,se=re&&re.onEmpty,ye=x.useCallback(ce=>{bl(ce)?Y&&Y():se&&se()},[Y,se]);Hn(()=>{ge&&ye({value:X})},[X,ye,ge]);const Cn=ce=>{if(Ce.disabled){ce.stopPropagation();return}F&&F(ce),c.onFocus&&c.onFocus(ce),re&&re.onFocus?re.onFocus(ce):lt(!0)},Et=ce=>{w&&w(ce),c.onBlur&&c.onBlur(ce),re&&re.onBlur?re.onBlur(ce):lt(!1)},kt=(ce,...H)=>{if(!ge){const ln=ce.target||ie.current;if(ln==null)throw new Error(zn(1));ye({value:ln.value})}c.onChange&&c.onChange(ce,...H),A&&A(ce,...H)};x.useEffect(()=>{ye(ie.current)},[]);const Ot=ce=>{ie.current&&ce.currentTarget===ce.target&&ie.current.focus(),k&&k(ce)};let Dt=d,Pe=c;T&&Dt==="input"&&(V?Pe=C({type:void 0,minRows:V,maxRows:V},Pe):Pe=C({type:void 0,maxRows:v,minRows:R},Pe),Dt=k5);const rn=ce=>{ye(ce.animationName==="mui-auto-fill-cancel"?ie.current:{value:"x"})};x.useEffect(()=>{re&&re.setAdornedStart(!!O)},[re,O]);const at=C({},o,{color:Ce.color||"primary",disabled:Ce.disabled,endAdornment:g,error:Ce.error,focused:Ce.focused,formControl:re,fullWidth:S,hiddenLabel:Ce.hiddenLabel,multiline:T,size:Ce.size,startAdornment:O,type:q}),Se=I5(at),Kt=b.root||u.Root||Fa,Pn=D.root||m.root||{},on=b.input||u.Input||Na;return Pe=C({},Pe,(r=D.input)!=null?r:m.input),M.jsxs(x.Fragment,{children:[!y&&B5,M.jsxs(Kt,C({},Pn,!Al(Kt)&&{ownerState:C({},at,Pn.ownerState)},{ref:n,onClick:Ot},_e,{className:J(Se.root,Pn.className,s,B&&"MuiInputBase-readOnly"),children:[O,M.jsx(Fc.Provider,{value:null,children:M.jsx(on,C({ownerState:at,"aria-invalid":Ce.error,"aria-describedby":i,autoComplete:l,autoFocus:a,defaultValue:h,disabled:Ce.disabled,id:E,onAnimationStart:rn,name:P,placeholder:I,readOnly:B,required:Ce.required,rows:V,value:X,onKeyDown:L,onKeyUp:N,type:q},Pe,!Al(on)&&{as:Dt,ownerState:C({},at,Pe.ownerState)},{ref:Tt,className:J(Se.input,Pe.className,B&&"MuiInputBase-readOnly"),onBlur:Et,onChange:kt,onFocus:Cn}))}),g,$?$(C({},Ce,{startAdornment:O})):null]}))]})}),Nc=F5;function N5(e){return Ie("MuiInput",e)}const O5=C({},to,Ee("MuiInput",["root","underline","input"])),vo=O5;function j5(e){return Ie("MuiOutlinedInput",e)}const L5=C({},to,Ee("MuiOutlinedInput",["root","notchedOutline","input"])),Rn=L5;function $5(e){return Ie("MuiFilledInput",e)}const V5=C({},to,Ee("MuiFilledInput",["root","underline","input"])),Yn=V5,z5=gx(M.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),H5=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],W5={entering:{opacity:1},entered:{opacity:1}},U5=x.forwardRef(function(t,n){const r=bc(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:l=!0,children:a,easing:s,in:u,onEnter:m,onEntered:h,onEntering:f,onExit:y,onExited:g,onExiting:S,style:E,timeout:d=o,TransitionComponent:c=z0}=t,p=U(t,H5),v=x.useRef(null),R=rt(v,a.ref,n),T=I=>B=>{if(I){const $=v.current;B===void 0?I($):I($,B)}},P=T(f),w=T((I,B)=>{H0(I);const $=_l({style:E,timeout:d,easing:s},{mode:"enter"});I.style.webkitTransition=r.transitions.create("opacity",$),I.style.transition=r.transitions.create("opacity",$),m&&m(I,B)}),A=T(h),k=T(S),F=T(I=>{const B=_l({style:E,timeout:d,easing:s},{mode:"exit"});I.style.webkitTransition=r.transitions.create("opacity",B),I.style.transition=r.transitions.create("opacity",B),y&&y(I)}),L=T(g),N=I=>{i&&i(v.current,I)};return M.jsx(c,C({appear:l,in:u,nodeRef:v,onEnter:w,onEntered:A,onEntering:P,onExit:F,onExited:L,onExiting:k,addEndListener:N,timeout:d},p,{children:(I,B)=>x.cloneElement(a,C({style:C({opacity:0,visibility:I==="exited"&&!u?"hidden":void 0},W5[I],E,a.props.style),ref:R},B))}))}),G5=U5;function K5(e){return Ie("MuiBackdrop",e)}Ee("MuiBackdrop",["root","invisible"]);const Y5=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Q5=e=>{const{classes:t,invisible:n}=e;return je({root:["root",n&&"invisible"]},K5,t)},X5=G("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>C({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),q5=x.forwardRef(function(t,n){var r,o,i;const l=Be({props:t,name:"MuiBackdrop"}),{children:a,className:s,component:u="div",components:m={},componentsProps:h={},invisible:f=!1,open:y,slotProps:g={},slots:S={},TransitionComponent:E=G5,transitionDuration:d}=l,c=U(l,Y5),p=C({},l,{component:u,invisible:f}),v=Q5(p),R=(r=g.root)!=null?r:h.root;return M.jsx(E,C({in:y,timeout:d},c,{children:M.jsx(X5,C({"aria-hidden":!0},R,{as:(o=(i=S.root)!=null?i:m.Root)!=null?o:u,className:J(v.root,s,R==null?void 0:R.className),ownerState:C({},p,R==null?void 0:R.ownerState),classes:v,ref:n,children:a}))}))}),Z5=q5,J5=Bv({createStyledComponent:G("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${he(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>Be({props:e,name:"MuiContainer"})}),Ln=J5,e2=(e,t)=>C({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),t2=e=>C({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),n2=(e,t=!1)=>{var n;const r={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([l,a])=>{var s;r[e.getColorSchemeSelector(l).replace(/\s*&/,"")]={colorScheme:(s=a.palette)==null?void 0:s.mode}});let o=C({html:e2(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:C({margin:0},t2(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r);const i=(n=e.components)==null||(n=n.MuiCssBaseline)==null?void 0:n.styleOverrides;return i&&(o=[o,i]),o};function r2(e){const t=Be({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:r=!1}=t;return M.jsxs(x.Fragment,{children:[M.jsx(U0,{styles:o=>n2(o,r)}),n]})}function o2(e){return Ie("MuiModal",e)}Ee("MuiModal",["root","hidden","backdrop"]);const i2=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],l2=e=>{const{open:t,exited:n,classes:r}=e;return je({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},o2,r)},a2=G("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>C({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),s2=G(Z5,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),u2=x.forwardRef(function(t,n){var r,o,i,l,a,s;const u=Be({name:"MuiModal",props:t}),{BackdropComponent:m=s2,BackdropProps:h,className:f,closeAfterTransition:y=!1,children:g,container:S,component:E,components:d={},componentsProps:c={},disableAutoFocus:p=!1,disableEnforceFocus:v=!1,disableEscapeKeyDown:R=!1,disablePortal:T=!1,disableRestoreFocus:P=!1,disableScrollLock:w=!1,hideBackdrop:A=!1,keepMounted:k=!1,onBackdropClick:F,open:L,slotProps:N,slots:I}=u,B=U(u,i2),$=C({},u,{closeAfterTransition:y,disableAutoFocus:p,disableEnforceFocus:v,disableEscapeKeyDown:R,disablePortal:T,disableRestoreFocus:P,disableScrollLock:w,hideBackdrop:A,keepMounted:k}),{getRootProps:V,getBackdropProps:D,getTransitionProps:b,portalRef:O,isTopModal:q,exited:K,hasTransition:_e}=R5(C({},$,{rootRef:n})),X=C({},$,{exited:K}),ge=l2(X),ie={};if(g.props.tabIndex===void 0&&(ie.tabIndex="-1"),_e){const{onEnter:Y,onExited:se}=b();ie.onEnter=Y,ie.onExited=se}const We=(r=(o=I==null?void 0:I.root)!=null?o:d.Root)!=null?r:a2,Tt=(i=(l=I==null?void 0:I.backdrop)!=null?l:d.Backdrop)!=null?i:m,Ae=(a=N==null?void 0:N.root)!=null?a:c.root,lt=(s=N==null?void 0:N.backdrop)!=null?s:c.backdrop,re=eo({elementType:We,externalSlotProps:Ae,externalForwardedProps:B,getSlotProps:V,additionalProps:{ref:n,as:E},ownerState:X,className:J(f,Ae==null?void 0:Ae.className,ge==null?void 0:ge.root,!X.open&&X.exited&&(ge==null?void 0:ge.hidden))}),Ce=eo({elementType:Tt,externalSlotProps:lt,additionalProps:h,getSlotProps:Y=>D(C({},Y,{onClick:se=>{F&&F(se),Y!=null&&Y.onClick&&Y.onClick(se)}})),className:J(lt==null?void 0:lt.className,h==null?void 0:h.className,ge==null?void 0:ge.backdrop),ownerState:X});return!k&&!L&&(!_e||K)?null:M.jsx(h5,{ref:O,container:S,disablePortal:T,children:M.jsxs(We,C({},re,{children:[!A&&m?M.jsx(Tt,C({},Ce)):null,M.jsx(f5,{disableEnforceFocus:v,disableAutoFocus:p,disableRestoreFocus:P,isEnabled:q,open:L,children:x.cloneElement(g,ie)})]}))})}),c2=u2,d2=Ee("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),Fp=d2,p2=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],f2=e=>{const{classes:t,disableUnderline:n}=e,o=je({root:["root",!n&&"underline"],input:["input"]},$5,t);return C({},t,o)},m2=G(Fa,{shouldForwardProp:e=>vn(e)||e==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...Ia(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{var n;const r=e.palette.mode==="light",o=r?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",i=r?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",l=r?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",a=r?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return C({position:"relative",backgroundColor:e.vars?e.vars.palette.FilledInput.bg:i,borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:e.vars?e.vars.palette.FilledInput.hoverBg:l,"@media (hover: none)":{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:i}},[`&.${Yn.focused}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:i},[`&.${Yn.disabled}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.disabledBg:a}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(n=(e.vars||e).palette[t.color||"primary"])==null?void 0:n.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Yn.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Yn.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`:o}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Yn.disabled}, .${Yn.error}):before`]:{borderBottom:`1px solid ${(e.vars||e).palette.text.primary}`},[`&.${Yn.disabled}:before`]:{borderBottomStyle:"dotted"}},t.startAdornment&&{paddingLeft:12},t.endAdornment&&{paddingRight:12},t.multiline&&C({padding:"25px 12px 8px"},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17}))}),h2=G(Na,{name:"MuiFilledInput",slot:"Input",overridesResolver:Ba})(({theme:e,ownerState:t})=>C({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17},t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0},t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9})),G0=x.forwardRef(function(t,n){var r,o,i,l;const a=Be({props:t,name:"MuiFilledInput"}),{components:s={},componentsProps:u,fullWidth:m=!1,inputComponent:h="input",multiline:f=!1,slotProps:y,slots:g={},type:S="text"}=a,E=U(a,p2),d=C({},a,{fullWidth:m,inputComponent:h,multiline:f,type:S}),c=f2(a),p={root:{ownerState:d},input:{ownerState:d}},v=y??u?ft(y??u,p):p,R=(r=(o=g.root)!=null?o:s.Root)!=null?r:m2,T=(i=(l=g.input)!=null?l:s.Input)!=null?i:h2;return M.jsx(Nc,C({slots:{root:R,input:T},componentsProps:v,fullWidth:m,inputComponent:h,multiline:f,ref:n,type:S},E,{classes:c}))});G0.muiName="Input";const g2=G0;function y2(e){return Ie("MuiFormControl",e)}Ee("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const S2=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],v2=e=>{const{classes:t,margin:n,fullWidth:r}=e,o={root:["root",n!=="none"&&`margin${he(n)}`,r&&"fullWidth"]};return je(o,y2,t)},x2=G("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>C({},t.root,t[`margin${he(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>C({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),C2=x.forwardRef(function(t,n){const r=Be({props:t,name:"MuiFormControl"}),{children:o,className:i,color:l="primary",component:a="div",disabled:s=!1,error:u=!1,focused:m,fullWidth:h=!1,hiddenLabel:f=!1,margin:y="none",required:g=!1,size:S="medium",variant:E="outlined"}=r,d=U(r,S2),c=C({},r,{color:l,component:a,disabled:s,error:u,fullWidth:h,hiddenLabel:f,margin:y,required:g,size:S,variant:E}),p=v2(c),[v,R]=x.useState(()=>{let N=!1;return o&&x.Children.forEach(o,I=>{if(!us(I,["Input","Select"]))return;const B=us(I,["Select"])?I.props.input:I;B&&w5(B.props)&&(N=!0)}),N}),[T,P]=x.useState(()=>{let N=!1;return o&&x.Children.forEach(o,I=>{us(I,["Input","Select"])&&(bl(I.props,!0)||bl(I.props.inputProps,!0))&&(N=!0)}),N}),[w,A]=x.useState(!1);s&&w&&A(!1);const k=m!==void 0&&!s?m:w;let F;const L=x.useMemo(()=>({adornedStart:v,setAdornedStart:R,color:l,disabled:s,error:u,filled:T,focused:k,fullWidth:h,hiddenLabel:f,size:S,onBlur:()=>{A(!1)},onEmpty:()=>{P(!1)},onFilled:()=>{P(!0)},onFocus:()=>{A(!0)},registerEffect:F,required:g,variant:E}),[v,l,s,u,T,k,h,f,F,g,S,E]);return M.jsx(Fc.Provider,{value:L,children:M.jsx(x2,C({as:a,ownerState:c,className:J(p.root,i),ref:n},d,{children:o}))})}),P2=C2;function M2(e){return Ie("MuiFormLabel",e)}const R2=Ee("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),$o=R2,T2=["children","className","color","component","disabled","error","filled","focused","required"],E2=e=>{const{classes:t,color:n,focused:r,disabled:o,error:i,filled:l,required:a}=e,s={root:["root",`color${he(n)}`,o&&"disabled",i&&"error",l&&"filled",r&&"focused",a&&"required"],asterisk:["asterisk",i&&"error"]};return je(s,M2,t)},k2=G("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},t)=>C({},t.root,e.color==="secondary"&&t.colorSecondary,e.filled&&t.filled)})(({theme:e,ownerState:t})=>C({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${$o.focused}`]:{color:(e.vars||e).palette[t.color].main},[`&.${$o.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${$o.error}`]:{color:(e.vars||e).palette.error.main}})),D2=G("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${$o.error}`]:{color:(e.vars||e).palette.error.main}})),w2=x.forwardRef(function(t,n){const r=Be({props:t,name:"MuiFormLabel"}),{children:o,className:i,component:l="label"}=r,a=U(r,T2),s=Si(),u=yi({props:r,muiFormControl:s,states:["color","required","focused","disabled","error","filled"]}),m=C({},r,{color:u.color||"primary",component:l,disabled:u.disabled,error:u.error,filled:u.filled,focused:u.focused,required:u.required}),h=E2(m);return M.jsxs(k2,C({as:l,ownerState:m,className:J(h.root,i),ref:n},a,{children:[o,u.required&&M.jsxs(D2,{ownerState:m,"aria-hidden":!0,className:h.asterisk,children:[" ","*"]})]}))}),_2=w2,A2=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function vu(e){return`scale(${e}, ${e**2})`}const b2={entering:{opacity:1,transform:vu(1)},entered:{opacity:1,transform:"none"}},ms=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),K0=x.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:i,easing:l,in:a,onEnter:s,onEntered:u,onEntering:m,onExit:h,onExited:f,onExiting:y,style:g,timeout:S="auto",TransitionComponent:E=z0}=t,d=U(t,A2),c=x.useRef(),p=x.useRef(),v=bc(),R=x.useRef(null),T=rt(R,i.ref,n),P=B=>$=>{if(B){const V=R.current;$===void 0?B(V):B(V,$)}},w=P(m),A=P((B,$)=>{H0(B);const{duration:V,delay:D,easing:b}=_l({style:g,timeout:S,easing:l},{mode:"enter"});let O;S==="auto"?(O=v.transitions.getAutoHeightDuration(B.clientHeight),p.current=O):O=V,B.style.transition=[v.transitions.create("opacity",{duration:O,delay:D}),v.transitions.create("transform",{duration:ms?O:O*.666,delay:D,easing:b})].join(","),s&&s(B,$)}),k=P(u),F=P(y),L=P(B=>{const{duration:$,delay:V,easing:D}=_l({style:g,timeout:S,easing:l},{mode:"exit"});let b;S==="auto"?(b=v.transitions.getAutoHeightDuration(B.clientHeight),p.current=b):b=$,B.style.transition=[v.transitions.create("opacity",{duration:b,delay:V}),v.transitions.create("transform",{duration:ms?b:b*.666,delay:ms?V:V||b*.333,easing:D})].join(","),B.style.opacity=0,B.style.transform=vu(.75),h&&h(B)}),N=P(f),I=B=>{S==="auto"&&(c.current=setTimeout(B,p.current||0)),r&&r(R.current,B)};return x.useEffect(()=>()=>{clearTimeout(c.current)},[]),M.jsx(E,C({appear:o,in:a,nodeRef:R,onEnter:A,onEntered:k,onEntering:w,onExit:L,onExited:N,onExiting:F,addEndListener:I,timeout:S==="auto"?null:S},d,{children:(B,$)=>x.cloneElement(i,C({style:C({opacity:0,transform:vu(.75),visibility:B==="exited"&&!a?"hidden":void 0},b2[B],g,i.props.style),ref:T},$))}))});K0.muiSupportAuto=!0;const I2=K0,B2=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],F2=e=>{const{classes:t,disableUnderline:n}=e,o=je({root:["root",!n&&"underline"],input:["input"]},N5,t);return C({},t,o)},N2=G(Fa,{shouldForwardProp:e=>vn(e)||e==="classes",name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...Ia(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{let r=e.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(r=`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),C({position:"relative"},t.formControl&&{"label + &":{marginTop:16}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(e.vars||e).palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${vo.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${vo.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${r}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${vo.disabled}, .${vo.error}):before`]:{borderBottom:`2px solid ${(e.vars||e).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${r}`}},[`&.${vo.disabled}:before`]:{borderBottomStyle:"dotted"}})}),O2=G(Na,{name:"MuiInput",slot:"Input",overridesResolver:Ba})({}),Y0=x.forwardRef(function(t,n){var r,o,i,l;const a=Be({props:t,name:"MuiInput"}),{disableUnderline:s,components:u={},componentsProps:m,fullWidth:h=!1,inputComponent:f="input",multiline:y=!1,slotProps:g,slots:S={},type:E="text"}=a,d=U(a,B2),c=F2(a),v={root:{ownerState:{disableUnderline:s}}},R=g??m?ft(g??m,v):v,T=(r=(o=S.root)!=null?o:u.Root)!=null?r:N2,P=(i=(l=S.input)!=null?l:u.Input)!=null?i:O2;return M.jsx(Nc,C({slots:{root:T,input:P},slotProps:R,fullWidth:h,inputComponent:f,multiline:y,ref:n,type:E},d,{classes:c}))});Y0.muiName="Input";const j2=Y0;function L2(e){return Ie("MuiInputLabel",e)}Ee("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const $2=["disableAnimation","margin","shrink","variant","className"],V2=e=>{const{classes:t,formControl:n,size:r,shrink:o,disableAnimation:i,variant:l,required:a}=e,s={root:["root",n&&"formControl",!i&&"animated",o&&"shrink",r&&r!=="normal"&&`size${he(r)}`,l],asterisk:[a&&"asterisk"]},u=je(s,L2,t);return C({},t,u)},z2=G(_2,{shouldForwardProp:e=>vn(e)||e==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${$o.asterisk}`]:t.asterisk},t.root,n.formControl&&t.formControl,n.size==="small"&&t.sizeSmall,n.shrink&&t.shrink,!n.disableAnimation&&t.animated,t[n.variant]]}})(({theme:e,ownerState:t})=>C({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},t.size==="small"&&{transform:"translate(0, 17px) scale(1)"},t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},t.variant==="filled"&&C({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},t.shrink&&C({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},t.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),t.variant==="outlined"&&C({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),H2=x.forwardRef(function(t,n){const r=Be({name:"MuiInputLabel",props:t}),{disableAnimation:o=!1,shrink:i,className:l}=r,a=U(r,$2),s=Si();let u=i;typeof u>"u"&&s&&(u=s.filled||s.focused||s.adornedStart);const m=yi({props:r,muiFormControl:s,states:["size","variant","required"]}),h=C({},r,{disableAnimation:o,formControl:s,shrink:u,size:m.size,variant:m.variant,required:m.required}),f=V2(h);return M.jsx(z2,C({"data-shrink":u,ownerState:h,ref:n,className:J(f.root,l)},a,{classes:f}))}),W2=H2,U2=x.createContext({}),xu=U2;function G2(e){return Ie("MuiList",e)}Ee("MuiList",["root","padding","dense","subheader"]);const K2=["children","className","component","dense","disablePadding","subheader"],Y2=e=>{const{classes:t,disablePadding:n,dense:r,subheader:o}=e;return je({root:["root",!n&&"padding",r&&"dense",o&&"subheader"]},G2,t)},Q2=G("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>C({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),X2=x.forwardRef(function(t,n){const r=Be({props:t,name:"MuiList"}),{children:o,className:i,component:l="ul",dense:a=!1,disablePadding:s=!1,subheader:u}=r,m=U(r,K2),h=x.useMemo(()=>({dense:a}),[a]),f=C({},r,{component:l,dense:a,disablePadding:s}),y=Y2(f);return M.jsx(xu.Provider,{value:h,children:M.jsxs(Q2,C({as:l,className:J(y.root,i),ref:n,ownerState:f},m,{children:[u,o]}))})}),q2=X2,Z2=Ee("MuiListItemIcon",["root","alignItemsFlexStart"]),Np=Z2,J2=Ee("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Op=J2,eC=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function hs(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function jp(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function Q0(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function xo(e,t,n,r,o,i){let l=!1,a=o(e,t,t?n:!1);for(;a;){if(a===e.firstChild){if(l)return!1;l=!0}const s=r?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!Q0(a,i)||s)a=o(e,a,n);else return a.focus(),!0}return!1}const tC=x.forwardRef(function(t,n){const{actions:r,autoFocus:o=!1,autoFocusItem:i=!1,children:l,className:a,disabledItemsFocusable:s=!1,disableListWrap:u=!1,onKeyDown:m,variant:h="selectedMenu"}=t,f=U(t,eC),y=x.useRef(null),g=x.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Hn(()=>{o&&y.current.focus()},[o]),x.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(p,v)=>{const R=!y.current.style.width;if(p.clientHeight<y.current.clientHeight&&R){const T=`${u0(vt(p))}px`;y.current.style[v.direction==="rtl"?"paddingLeft":"paddingRight"]=T,y.current.style.width=`calc(100% + ${T})`}return y.current}}),[]);const S=p=>{const v=y.current,R=p.key,T=vt(v).activeElement;if(R==="ArrowDown")p.preventDefault(),xo(v,T,u,s,hs);else if(R==="ArrowUp")p.preventDefault(),xo(v,T,u,s,jp);else if(R==="Home")p.preventDefault(),xo(v,null,u,s,hs);else if(R==="End")p.preventDefault(),xo(v,null,u,s,jp);else if(R.length===1){const P=g.current,w=R.toLowerCase(),A=performance.now();P.keys.length>0&&(A-P.lastTime>500?(P.keys=[],P.repeating=!0,P.previousKeyMatched=!0):P.repeating&&w!==P.keys[0]&&(P.repeating=!1)),P.lastTime=A,P.keys.push(w);const k=T&&!P.repeating&&Q0(T,P);P.previousKeyMatched&&(k||xo(v,T,!1,s,hs,P))?p.preventDefault():P.previousKeyMatched=!1}m&&m(p)},E=rt(y,n);let d=-1;x.Children.forEach(l,(p,v)=>{if(!x.isValidElement(p)){d===v&&(d+=1,d>=l.length&&(d=-1));return}p.props.disabled||(h==="selectedMenu"&&p.props.selected||d===-1)&&(d=v),d===v&&(p.props.disabled||p.props.muiSkipListHighlight||p.type.muiSkipListHighlight)&&(d+=1,d>=l.length&&(d=-1))});const c=x.Children.map(l,(p,v)=>{if(v===d){const R={};return i&&(R.autoFocus=!0),p.props.tabIndex===void 0&&h==="selectedMenu"&&(R.tabIndex=0),x.cloneElement(p,R)}return p});return M.jsx(q2,C({role:"menu",ref:E,className:a,onKeyDown:S,tabIndex:o?0:-1},f,{children:c}))}),nC=tC;function rC(e){return Ie("MuiPopover",e)}Ee("MuiPopover",["root","paper"]);const oC=["onEntering"],iC=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],lC=["slotProps"];function Lp(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function $p(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Vp(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function gs(e){return typeof e=="function"?e():e}const aC=e=>{const{classes:t}=e;return je({root:["root"],paper:["paper"]},rC,t)},sC=G(c2,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),X0=G(_x,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),uC=x.forwardRef(function(t,n){var r,o,i;const l=Be({props:t,name:"MuiPopover"}),{action:a,anchorEl:s,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:m,anchorReference:h="anchorEl",children:f,className:y,container:g,elevation:S=8,marginThreshold:E=16,open:d,PaperProps:c={},slots:p,slotProps:v,transformOrigin:R={vertical:"top",horizontal:"left"},TransitionComponent:T=I2,transitionDuration:P="auto",TransitionProps:{onEntering:w}={},disableScrollLock:A=!1}=l,k=U(l.TransitionProps,oC),F=U(l,iC),L=(r=v==null?void 0:v.paper)!=null?r:c,N=x.useRef(),I=rt(N,L.ref),B=C({},l,{anchorOrigin:u,anchorReference:h,elevation:S,marginThreshold:E,externalPaperSlotProps:L,transformOrigin:R,TransitionComponent:T,transitionDuration:P,TransitionProps:k}),$=aC(B),V=x.useCallback(()=>{if(h==="anchorPosition")return m;const Y=gs(s),ye=(Y&&Y.nodeType===1?Y:vt(N.current).body).getBoundingClientRect();return{top:ye.top+Lp(ye,u.vertical),left:ye.left+$p(ye,u.horizontal)}},[s,u.horizontal,u.vertical,m,h]),D=x.useCallback(Y=>({vertical:Lp(Y,R.vertical),horizontal:$p(Y,R.horizontal)}),[R.horizontal,R.vertical]),b=x.useCallback(Y=>{const se={width:Y.offsetWidth,height:Y.offsetHeight},ye=D(se);if(h==="none")return{top:null,left:null,transformOrigin:Vp(ye)};const Cn=V();let Et=Cn.top-ye.vertical,kt=Cn.left-ye.horizontal;const Ot=Et+se.height,Dt=kt+se.width,Pe=cr(gs(s)),rn=Pe.innerHeight-E,at=Pe.innerWidth-E;if(E!==null&&Et<E){const Se=Et-E;Et-=Se,ye.vertical+=Se}else if(E!==null&&Ot>rn){const Se=Ot-rn;Et-=Se,ye.vertical+=Se}if(E!==null&&kt<E){const Se=kt-E;kt-=Se,ye.horizontal+=Se}else if(Dt>at){const Se=Dt-at;kt-=Se,ye.horizontal+=Se}return{top:`${Math.round(Et)}px`,left:`${Math.round(kt)}px`,transformOrigin:Vp(ye)}},[s,h,V,D,E]),[O,q]=x.useState(d),K=x.useCallback(()=>{const Y=N.current;if(!Y)return;const se=b(Y);se.top!==null&&(Y.style.top=se.top),se.left!==null&&(Y.style.left=se.left),Y.style.transformOrigin=se.transformOrigin,q(!0)},[b]);x.useEffect(()=>(A&&window.addEventListener("scroll",K),()=>window.removeEventListener("scroll",K)),[s,A,K]);const _e=(Y,se)=>{w&&w(Y,se),K()},X=()=>{q(!1)};x.useEffect(()=>{d&&K()}),x.useImperativeHandle(a,()=>d?{updatePosition:()=>{K()}}:null,[d,K]),x.useEffect(()=>{if(!d)return;const Y=s0(()=>{K()}),se=cr(s);return se.addEventListener("resize",Y),()=>{Y.clear(),se.removeEventListener("resize",Y)}},[s,d,K]);let ge=P;P==="auto"&&!T.muiSupportAuto&&(ge=void 0);const ie=g||(s?vt(gs(s)).body:void 0),We=(o=p==null?void 0:p.root)!=null?o:sC,Tt=(i=p==null?void 0:p.paper)!=null?i:X0,Ae=eo({elementType:Tt,externalSlotProps:C({},L,{style:O?L.style:C({},L.style,{opacity:0})}),additionalProps:{elevation:S,ref:I},ownerState:B,className:J($.paper,L==null?void 0:L.className)}),lt=eo({elementType:We,externalSlotProps:(v==null?void 0:v.root)||{},externalForwardedProps:F,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:ie,open:d},ownerState:B,className:J($.root,y)}),{slotProps:re}=lt,Ce=U(lt,lC);return M.jsx(We,C({},Ce,!Al(We)&&{slotProps:re,disableScrollLock:A},{children:M.jsx(T,C({appear:!0,in:d,onEntering:_e,onExited:X,timeout:ge},k,{children:M.jsx(Tt,C({},Ae,{children:f}))}))}))}),cC=uC;function dC(e){return Ie("MuiMenu",e)}Ee("MuiMenu",["root","paper","list"]);const pC=["onEntering"],fC=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],mC={vertical:"top",horizontal:"right"},hC={vertical:"top",horizontal:"left"},gC=e=>{const{classes:t}=e;return je({root:["root"],paper:["paper"],list:["list"]},dC,t)},yC=G(cC,{shouldForwardProp:e=>vn(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),SC=G(X0,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),vC=G(nC,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),xC=x.forwardRef(function(t,n){var r,o;const i=Be({props:t,name:"MuiMenu"}),{autoFocus:l=!0,children:a,className:s,disableAutoFocusItem:u=!1,MenuListProps:m={},onClose:h,open:f,PaperProps:y={},PopoverClasses:g,transitionDuration:S="auto",TransitionProps:{onEntering:E}={},variant:d="selectedMenu",slots:c={},slotProps:p={}}=i,v=U(i.TransitionProps,pC),R=U(i,fC),T=bc(),P=T.direction==="rtl",w=C({},i,{autoFocus:l,disableAutoFocusItem:u,MenuListProps:m,onEntering:E,PaperProps:y,transitionDuration:S,TransitionProps:v,variant:d}),A=gC(w),k=l&&!u&&f,F=x.useRef(null),L=(b,O)=>{F.current&&F.current.adjustStyleForScrollbar(b,T),E&&E(b,O)},N=b=>{b.key==="Tab"&&(b.preventDefault(),h&&h(b,"tabKeyDown"))};let I=-1;x.Children.map(a,(b,O)=>{x.isValidElement(b)&&(b.props.disabled||(d==="selectedMenu"&&b.props.selected||I===-1)&&(I=O))});const B=(r=c.paper)!=null?r:SC,$=(o=p.paper)!=null?o:y,V=eo({elementType:c.root,externalSlotProps:p.root,ownerState:w,className:[A.root,s]}),D=eo({elementType:B,externalSlotProps:$,ownerState:w,className:A.paper});return M.jsx(yC,C({onClose:h,anchorOrigin:{vertical:"bottom",horizontal:P?"right":"left"},transformOrigin:P?mC:hC,slots:{paper:B,root:c.root},slotProps:{root:V,paper:D},open:f,ref:n,transitionDuration:S,TransitionProps:C({onEntering:L},v),ownerState:w},R,{classes:g,children:M.jsx(vC,C({onKeyDown:N,actions:F,autoFocus:l&&(I===-1||u),autoFocusItem:k,variant:d},m,{className:J(A.list,m.className),children:a}))}))}),CC=xC;function PC(e){return Ie("MuiMenuItem",e)}const MC=Ee("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Co=MC,RC=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],TC=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},EC=e=>{const{disabled:t,dense:n,divider:r,disableGutters:o,selected:i,classes:l}=e,s=je({root:["root",n&&"dense",t&&"disabled",!o&&"gutters",r&&"divider",i&&"selected"]},PC,l);return C({},l,s)},kC=G(Qx,{shouldForwardProp:e=>vn(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:TC})(({theme:e,ownerState:t})=>C({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Co.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Nr(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Co.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Nr(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Co.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Nr(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Nr(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Co.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Co.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${Fp.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${Fp.inset}`]:{marginLeft:52},[`& .${Op.root}`]:{marginTop:0,marginBottom:0},[`& .${Op.inset}`]:{paddingLeft:36},[`& .${Np.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&C({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${Np.root} svg`]:{fontSize:"1.25rem"}}))),DC=x.forwardRef(function(t,n){const r=Be({props:t,name:"MuiMenuItem"}),{autoFocus:o=!1,component:i="li",dense:l=!1,divider:a=!1,disableGutters:s=!1,focusVisibleClassName:u,role:m="menuitem",tabIndex:h,className:f}=r,y=U(r,RC),g=x.useContext(xu),S=x.useMemo(()=>({dense:l||g.dense||!1,disableGutters:s}),[g.dense,l,s]),E=x.useRef(null);Hn(()=>{o&&E.current&&E.current.focus()},[o]);const d=C({},r,{dense:S.dense,divider:a,disableGutters:s}),c=EC(r),p=rt(E,n);let v;return r.disabled||(v=h!==void 0?h:-1),M.jsx(xu.Provider,{value:S,children:M.jsx(kC,C({ref:p,role:m,tabIndex:v,component:i,focusVisibleClassName:J(c.focusVisible,u),className:J(c.root,f)},y,{ownerState:d,classes:c}))})}),wC=DC;function _C(e){return Ie("MuiNativeSelect",e)}const AC=Ee("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Oc=AC,bC=["className","disabled","error","IconComponent","inputRef","variant"],IC=e=>{const{classes:t,variant:n,disabled:r,multiple:o,open:i,error:l}=e,a={select:["select",n,r&&"disabled",o&&"multiple",l&&"error"],icon:["icon",`icon${he(n)}`,i&&"iconOpen",r&&"disabled"]};return je(a,_C,t)},q0=({ownerState:e,theme:t})=>C({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":C({},t.vars?{backgroundColor:`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:t.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${Oc.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},e.variant==="filled"&&{"&&&":{paddingRight:32}},e.variant==="outlined"&&{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}),BC=G("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:vn,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.select,t[n.variant],n.error&&t.error,{[`&.${Oc.multiple}`]:t.multiple}]}})(q0),Z0=({ownerState:e,theme:t})=>C({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${Oc.disabled}`]:{color:(t.vars||t).palette.action.disabled}},e.open&&{transform:"rotate(180deg)"},e.variant==="filled"&&{right:7},e.variant==="outlined"&&{right:7}),FC=G("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${he(n.variant)}`],n.open&&t.iconOpen]}})(Z0),NC=x.forwardRef(function(t,n){const{className:r,disabled:o,error:i,IconComponent:l,inputRef:a,variant:s="standard"}=t,u=U(t,bC),m=C({},t,{disabled:o,variant:s,error:i}),h=IC(m);return M.jsxs(x.Fragment,{children:[M.jsx(BC,C({ownerState:m,className:J(h.select,r),disabled:o,ref:a||n},u)),t.multiple?null:M.jsx(FC,{as:l,ownerState:m,className:h.icon})]})}),OC=NC;var zp;const jC=["children","classes","className","label","notched"],LC=G("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),$C=G("legend")(({ownerState:e,theme:t})=>C({float:"unset",width:"auto",overflow:"hidden"},!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},e.withLabel&&C({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})})));function VC(e){const{className:t,label:n,notched:r}=e,o=U(e,jC),i=n!=null&&n!=="",l=C({},e,{notched:r,withLabel:i});return M.jsx(LC,C({"aria-hidden":!0,className:t,ownerState:l},o,{children:M.jsx($C,{ownerState:l,children:i?M.jsx("span",{children:n}):zp||(zp=M.jsx("span",{className:"notranslate",children:"​"}))})}))}const zC=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],HC=e=>{const{classes:t}=e,r=je({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},j5,t);return C({},t,r)},WC=G(Fa,{shouldForwardProp:e=>vn(e)||e==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:Ia})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return C({position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${Rn.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${Rn.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:n}},[`&.${Rn.focused} .${Rn.notchedOutline}`]:{borderColor:(e.vars||e).palette[t.color].main,borderWidth:2},[`&.${Rn.error} .${Rn.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${Rn.disabled} .${Rn.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&C({padding:"16.5px 14px"},t.size==="small"&&{padding:"8.5px 14px"}))}),UC=G(VC,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>{const t=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}}),GC=G(Na,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:Ba})(({theme:e,ownerState:t})=>C({padding:"16.5px 14px"},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0})),J0=x.forwardRef(function(t,n){var r,o,i,l,a;const s=Be({props:t,name:"MuiOutlinedInput"}),{components:u={},fullWidth:m=!1,inputComponent:h="input",label:f,multiline:y=!1,notched:g,slots:S={},type:E="text"}=s,d=U(s,zC),c=HC(s),p=Si(),v=yi({props:s,muiFormControl:p,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),R=C({},s,{color:v.color||"primary",disabled:v.disabled,error:v.error,focused:v.focused,formControl:p,fullWidth:m,hiddenLabel:v.hiddenLabel,multiline:y,size:v.size,type:E}),T=(r=(o=S.root)!=null?o:u.Root)!=null?r:WC,P=(i=(l=S.input)!=null?l:u.Input)!=null?i:GC;return M.jsx(Nc,C({slots:{root:T,input:P},renderSuffix:w=>M.jsx(UC,{ownerState:R,className:c.notchedOutline,label:f!=null&&f!==""&&v.required?a||(a=M.jsxs(x.Fragment,{children:[f," ","*"]})):f,notched:typeof g<"u"?g:!!(w.startAdornment||w.filled||w.focused)}),fullWidth:m,inputComponent:h,multiline:y,ref:n,type:E},d,{classes:C({},c,{notchedOutline:null})}))});J0.muiName="Input";const KC=J0;function YC(e){return Ie("MuiSelect",e)}const QC=Ee("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Po=QC;var Hp;const XC=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","error","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],qC=G("div",{name:"MuiSelect",slot:"Select",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`&.${Po.select}`]:t.select},{[`&.${Po.select}`]:t[n.variant]},{[`&.${Po.error}`]:t.error},{[`&.${Po.multiple}`]:t.multiple}]}})(q0,{[`&.${Po.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),ZC=G("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${he(n.variant)}`],n.open&&t.iconOpen]}})(Z0),JC=G("input",{shouldForwardProp:e=>ax(e)&&e!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(e,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function Wp(e,t){return typeof t=="object"&&t!==null?e===t:String(e)===String(t)}function eP(e){return e==null||typeof e=="string"&&!e.trim()}const tP=e=>{const{classes:t,variant:n,disabled:r,multiple:o,open:i,error:l}=e,a={select:["select",n,r&&"disabled",o&&"multiple",l&&"error"],icon:["icon",`icon${he(n)}`,i&&"iconOpen",r&&"disabled"],nativeInput:["nativeInput"]};return je(a,YC,t)},nP=x.forwardRef(function(t,n){var r;const{"aria-describedby":o,"aria-label":i,autoFocus:l,autoWidth:a,children:s,className:u,defaultOpen:m,defaultValue:h,disabled:f,displayEmpty:y,error:g=!1,IconComponent:S,inputRef:E,labelId:d,MenuProps:c={},multiple:p,name:v,onBlur:R,onChange:T,onClose:P,onFocus:w,onOpen:A,open:k,readOnly:F,renderValue:L,SelectDisplayProps:N={},tabIndex:I,value:B,variant:$="standard"}=t,V=U(t,XC),[D,b]=Zd({controlled:B,default:h,name:"Select"}),[O,q]=Zd({controlled:k,default:m,name:"Select"}),K=x.useRef(null),_e=x.useRef(null),[X,ge]=x.useState(null),{current:ie}=x.useRef(k!=null),[We,Tt]=x.useState(),Ae=rt(n,E),lt=x.useCallback(z=>{_e.current=z,z&&ge(z)},[]),re=X==null?void 0:X.parentNode;x.useImperativeHandle(Ae,()=>({focus:()=>{_e.current.focus()},node:K.current,value:D}),[D]),x.useEffect(()=>{m&&O&&X&&!ie&&(Tt(a?null:re.clientWidth),_e.current.focus())},[X,a]),x.useEffect(()=>{l&&_e.current.focus()},[l]),x.useEffect(()=>{if(!d)return;const z=vt(_e.current).getElementById(d);if(z){const pe=()=>{getSelection().isCollapsed&&_e.current.focus()};return z.addEventListener("click",pe),()=>{z.removeEventListener("click",pe)}}},[d]);const Ce=(z,pe)=>{z?A&&A(pe):P&&P(pe),ie||(Tt(a?null:re.clientWidth),q(z))},Y=z=>{z.button===0&&(z.preventDefault(),_e.current.focus(),Ce(!0,z))},se=z=>{Ce(!1,z)},ye=x.Children.toArray(s),Cn=z=>{const pe=ye.find(Ue=>Ue.props.value===z.target.value);pe!==void 0&&(b(pe.props.value),T&&T(z,pe))},Et=z=>pe=>{let Ue;if(pe.currentTarget.hasAttribute("tabindex")){if(p){Ue=Array.isArray(D)?D.slice():[];const mr=D.indexOf(z.props.value);mr===-1?Ue.push(z.props.value):Ue.splice(mr,1)}else Ue=z.props.value;if(z.props.onClick&&z.props.onClick(pe),D!==Ue&&(b(Ue),T)){const mr=pe.nativeEvent||pe,Lc=new mr.constructor(mr.type,mr);Object.defineProperty(Lc,"target",{writable:!0,value:{value:Ue,name:v}}),T(Lc,z)}p||Ce(!1,pe)}},kt=z=>{F||[" ","ArrowUp","ArrowDown","Enter"].indexOf(z.key)!==-1&&(z.preventDefault(),Ce(!0,z))},Ot=X!==null&&O,Dt=z=>{!Ot&&R&&(Object.defineProperty(z,"target",{writable:!0,value:{value:D,name:v}}),R(z))};delete V["aria-invalid"];let Pe,rn;const at=[];let Se=!1;(bl({value:D})||y)&&(L?Pe=L(D):Se=!0);const Kt=ye.map(z=>{if(!x.isValidElement(z))return null;let pe;if(p){if(!Array.isArray(D))throw new Error(zn(2));pe=D.some(Ue=>Wp(Ue,z.props.value)),pe&&Se&&at.push(z.props.children)}else pe=Wp(D,z.props.value),pe&&Se&&(rn=z.props.children);return x.cloneElement(z,{"aria-selected":pe?"true":"false",onClick:Et(z),onKeyUp:Ue=>{Ue.key===" "&&Ue.preventDefault(),z.props.onKeyUp&&z.props.onKeyUp(Ue)},role:"option",selected:pe,value:void 0,"data-value":z.props.value})});Se&&(p?at.length===0?Pe=null:Pe=at.reduce((z,pe,Ue)=>(z.push(pe),Ue<at.length-1&&z.push(", "),z),[]):Pe=rn);let Pn=We;!a&&ie&&X&&(Pn=re.clientWidth);let on;typeof I<"u"?on=I:on=f?null:0;const ce=N.id||(v?`mui-component-select-${v}`:void 0),H=C({},t,{variant:$,value:D,open:Ot,error:g}),ln=tP(H),lo=C({},c.PaperProps,(r=c.slotProps)==null?void 0:r.paper),ao=H1();return M.jsxs(x.Fragment,{children:[M.jsx(qC,C({ref:lt,tabIndex:on,role:"combobox","aria-controls":ao,"aria-disabled":f?"true":void 0,"aria-expanded":Ot?"true":"false","aria-haspopup":"listbox","aria-label":i,"aria-labelledby":[d,ce].filter(Boolean).join(" ")||void 0,"aria-describedby":o,onKeyDown:kt,onMouseDown:f||F?null:Y,onBlur:Dt,onFocus:w},N,{ownerState:H,className:J(N.className,ln.select,u),id:ce,children:eP(Pe)?Hp||(Hp=M.jsx("span",{className:"notranslate",children:"​"})):Pe})),M.jsx(JC,C({"aria-invalid":g,value:Array.isArray(D)?D.join(","):D,name:v,ref:K,"aria-hidden":!0,onChange:Cn,tabIndex:-1,disabled:f,className:ln.nativeInput,autoFocus:l,ownerState:H},V)),M.jsx(ZC,{as:S,className:ln.icon,ownerState:H}),M.jsx(CC,C({id:`menu-${v||""}`,anchorEl:re,open:Ot,onClose:se,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},c,{MenuListProps:C({"aria-labelledby":d,role:"listbox","aria-multiselectable":p?"true":void 0,disableListWrap:!0,id:ao},c.MenuListProps),slotProps:C({},c.slotProps,{paper:C({},lo,{style:C({minWidth:Pn},lo!=null?lo.style:null)})}),children:Kt}))]})}),rP=nP,oP=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],iP=["root"],lP=e=>{const{classes:t}=e;return t},jc={name:"MuiSelect",overridesResolver:(e,t)=>t.root,shouldForwardProp:e=>vn(e)&&e!=="variant",slot:"Root"},aP=G(j2,jc)(""),sP=G(KC,jc)(""),uP=G(g2,jc)(""),eh=x.forwardRef(function(t,n){const r=Be({name:"MuiSelect",props:t}),{autoWidth:o=!1,children:i,classes:l={},className:a,defaultOpen:s=!1,displayEmpty:u=!1,IconComponent:m=z5,id:h,input:f,inputProps:y,label:g,labelId:S,MenuProps:E,multiple:d=!1,native:c=!1,onClose:p,onOpen:v,open:R,renderValue:T,SelectDisplayProps:P,variant:w="outlined"}=r,A=U(r,oP),k=c?OC:rP,F=Si(),L=yi({props:r,muiFormControl:F,states:["variant","error"]}),N=L.variant||w,I=C({},r,{variant:N,classes:l}),B=lP(I),$=U(B,iP),V=f||{standard:M.jsx(aP,{ownerState:I}),outlined:M.jsx(sP,{label:g,ownerState:I}),filled:M.jsx(uP,{ownerState:I})}[N],D=rt(n,V.ref);return M.jsx(x.Fragment,{children:x.cloneElement(V,C({inputComponent:k,inputProps:C({children:i,error:L.error,IconComponent:m,variant:N,type:void 0,multiple:d},c?{id:h}:{autoWidth:o,defaultOpen:s,displayEmpty:u,labelId:S,MenuProps:E,onClose:p,onOpen:v,open:R,renderValue:T,SelectDisplayProps:C({id:h},P)},y,{classes:y?ft($,y.classes):$},f?f.props.inputProps:{})},d&&c&&N==="outlined"?{notched:!0}:{},{ref:D,className:J(V.props.className,a,B.root)},!f&&{variant:N},A))})});eh.muiName="Select";const cP=eh;function Il(e){const[t,n]=x.useState();x.useEffect(()=>{var o;(o=e.onChange)==null||o.call(e,e.items[0].value)},[]);function r(o){var i;n(o.target.value),(i=e.onChange)==null||i.call(e,o.target.value)}return M.jsxs(P2,{className:"w-fit !min-w-[8rem]",children:[M.jsx(W2,{id:e.id+"-label",children:e.label}),M.jsx(cP,{labelId:e.id+"-label",id:e.id,value:e.value??t??e.items[0].value,label:e.label,onChange:r,children:e.items.map(o=>M.jsx(wC,{value:o.value,children:o.label},o.value))})]})}function th(e){return M.jsx("div",{className:"flex flex-row flex-wrap",style:{gap:(e.gap??0)+"rem"},children:e.children})}function dP(){return{MagazineSize:1,StartingAmmo:1,RateOfFire:1,EnvPiercing:1,AimTimeMult:1,MovementAimPenaltyMult:1,FirstShotRecoilMult:1,VerticalRecoil:1,RecoilLeft:1,RecoilRight:1,MaxSpreadBloom:1,SpreadBloom:1,BloomDecayRate:1,ProjectileSpread:1,AimBulletSpread:1,ProjectilesPerRound:1,ChamberTime:1,BulletSpeed:1,BulletDamage:1,FlakMult:1,ArmorPiercing:1,MinDamage:1,MinRange:1,MaxRange:1,BulletSpread:1,ReloadTime:1}}class nh{}Kn(nh,"attritionJson",`{
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
    "Vehicles/Weapons/AP_Cannon_15mm": {
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
    "Vehicles/Weapons/AP_Cannon_Air_25mm": {
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
    "Vehicles/Weapons/Cannon_15mm": {
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
    "Vehicles/Weapons/Cannon_Air_25mm": {
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
}`);const Z=class Z{static get(t){return Z.data[t]}};Kn(Z,"data",JSON.parse(nh.attritionJson)),Kn(Z,"sights",["Infantry/Components/Rifle/Ironsights","Infantry/Components/Rifle/Sights_Reflex","Infantry/Components/Rifle/Scope_4x","Infantry/Components/Rifle/Scope_12x"]),Kn(Z,"foregrips",["Infantry/Components/Rifle/No_Grip","Infantry/Components/Rifle/Vertical_Grip","Infantry/Components/Rifle/Bipod"]),Kn(Z,"barrels",["Infantry/Components/Rifle/Standard_Barrel","Infantry/Components/Rifle/Heavy_Barrel","Infantry/Components/Rifle/Suppressor"]),Kn(Z,"structured",{weapons:{infantry:{AKR:"Infantry/Weapons/AKR",RPK:"Infantry/Weapons/RPK",AWM:"Infantry/Weapons/AWM",SVD:"Infantry/Weapons/SVD",SMG:"Infantry/Weapons/SMG","AK-AS":"Infantry/Weapons/AK-AS",Pistol:"Infantry/Weapons/Pistol","RPG-7":"Infantry/Weapons/RPG-7",AK_Type_E:"Infantry/Weapons/AK_Type_E","MG-42":"Infantry/Weapons/MG-42","PTRS-41":"Infantry/Weapons/PTRS-41"},vehicle:{"120mm Cannon":{Stock:"Vehicles/Weapons/Cannon_120mm",HE:"Vehicles/Weapons/HE_Cannon_120mm",AP:"Vehicles/Weapons/AP_Cannon_120mm",Artillery:"Vehicles/Weapons/Artillery_Cannon_120mm"},"80mm Cannon":{Stock:"Vehicles/Weapons/Cannon_80mm",HE:"Vehicles/Weapons/HE_Cannon_80mm",AP:"Vehicles/Weapons/AP_Cannon_80mm"},"40mm Cannon":{HE:"Vehicles/Weapons/HE_40mm","Smoke (broken)":"Vehicles/Weapons/Smoke_40mm",Canister:"Vehicles/Weapons/Canister_40mm",LVG:"Vehicles/Weapons/LVG_40mm"},"Attack Rocket":{"70mm Incinerators":"Vehicles/Weapons/Rocket_70mm","85mm Pulverizers":"Vehicles/Weapons/Rocket_85mm"},"15mm Light Cannon":{Stock:"Vehicles/Weapons/Cannon_15mm",AP:"Vehicles/Weapons/AP_Cannon_15mm"},"25mm Light Cannon":{Stock:"Vehicles/Weapons/Cannon_Air_25mm",AP:"Vehicles/Weapons/AP_Cannon_Air_25mm"},"Machine Gun":{"6.5mm":"Vehicles/Weapons/LMG_65mm","7.62mm":"Vehicles/Weapons/HMG_762mm","9mm":"Vehicles/Weapons/MMG_9mm","12mm":"Vehicles/Weapons/HMG_12mm"},"8mm Minigun":{Stock:"Vehicles/Weapons/Minigun_8mm"},"Self Defense Rocket":{HE:"Vehicles/Weapons/HE_Self_Defense_Rocket",AV:"Vehicles/Weapons/AP_Self_Defense_Rocket"},Bomb:{HE:"Vehicles/Weapons/SDB_HE",AP:"Vehicles/Weapons/SDB_AP"},"30mm Rotary Cannon":{Berserker:"Vehicles/Weapons/Berserker_30mm"},"80mm Cannon (Air)":{HE:"Vehicles/Weapons/Thanatos_HE",AP:"Vehicles/Weapons/Thanatos_AP"},"AA Cannon":{"18mm":"Vehicles/Weapons/AA_18mm","25mm":"Vehicles/Weapons/AA_25mm","30mm":"Vehicles/Weapons/FLAK_30mm"},"25mm Autocannon":{Stock:"Vehicles/Weapons/Cannon_25mm",HE:"Vehicles/Weapons/HE_Cannon_25mm",AP:"Vehicles/Weapons/AP_Cannon_25mm"},TOW:{Stock:"Vehicles/Weapons/TEMP_TOW_Rocket"}}},components:{infantry:{"RPG-7":{Scope:Z.sights,Ammo:["Infantry/Components/RPG-7/RPG_Stock","Infantry/Components/RPG-7/RPG_HV","Infantry/Components/RPG-7/RPG_Flak","Infantry/Components/RPG-7/RPG_Cluster"]},AKR:{Scope:Z.sights,Foregrip:Z.foregrips,Barrel:Z.barrels},RPK:{Scope:Z.sights,Foregrip:Z.foregrips,Barrel:Z.barrels},AWM:{Scope:Z.sights,Foregrip:Z.foregrips,Barrel:Z.barrels},SVD:{Scope:Z.sights,Foregrip:Z.foregrips,Barrel:Z.barrels},SMG:{Scope:Z.sights,Barrel:Z.barrels},"AK-AS":{Scope:Z.sights,Foregrip:Z.foregrips,Muzzle:["Infantry/Components/AK-AS/Standard_Barrel","Infantry/Components/AK-AS/Shotgun_Choke","Infantry/Components/AK-AS/Shotgun_Suppressor"],"Ammo ":["Infantry/Components/AK-AS/Ammo_Slugs","Infantry/Components/AK-AS/Ammo_Buckshot","Infantry/Components/AK-AS/Ammo_Flechette"]},Pistol:{Scope:Z.sights,Barrel:Z.barrels},AK_Type_E:{Scope:Z.sights,Foregrip:Z.foregrips,"Ammo  ":["Infantry/Components/AK_Type_E/HE_40mm","Infantry/Components/AK_Type_E/FLAK_40mm","Infantry/Components/AK_Type_E/Canister_40mm","Infantry/Components/AK_Type_E/LVG_40mm"]},"MG-42":{Scope:Z.sights,Barrel:Z.barrels},"PTRS-41":{Scope:Z.sights,Barrel:Z.barrels}},vehicles:{"Light Tank":{Hull:["Vehicles/Components/Light_Tank_Hull/APC_Hull","Vehicles/Components/Light_Tank_Hull/IFV_Hull"],Engine:["Vehicles/Components/LTV_Engine/Default_Engine","Vehicles/Components/LTV_Engine/Performance_Engine","Vehicles/Components/LTV_Engine/Reinforced_Engine"]},"Attack Helicopter":{Rotor:["Vehicles/Components/Vehicle_Rotor/Default_Rotor","Vehicles/Components/Vehicle_Rotor/Performance_Rotor","Vehicles/Components/Vehicle_Rotor/Protected_Rotor"]}}},vehicles:{"Light Tank":"Vehicles/Light_Tank"}});let Fe=Z;class W{static round(t,n){return+t.toFixed(n)}static splitCase(t){return t.replace(new RegExp("(?<=[a-z])(?=[A-Z])","g")," ")}static renderIf(t,n){return t?n:null}static renderIfNotNull(t,n){return t!=null&&t!=null?n:null}static renderIfElse(t,n,r){return t?n:r}static plural(t,n,r="s"){return t==1?n:n+r}static formatNumber(t){return t.toLocaleString()}static if(t,n){return t?n:""}}function zt(e){return M.jsx("span",{tabIndex:0,"data-tooltip":e.tooltip,children:e.children})}function pP(){const e=Object.values(Fe.structured.weapons.infantry).map(y=>({label:Fe.get(y).ToolName,value:y})),[t,n]=x.useState(Fe.get(e[0].value)),[r,o]=x.useState(e[0].label),[i,l]=x.useState([]),[a,s]=x.useState({});x.useEffect(()=>{f(r)},[]);function u(y){let g=Fe.get(y);g.ArmorPiercing??(g.ArmorPiercing=0),g.FlakMult??(g.FlakMult=1),g.TerrainIntensity??(g.TerrainIntensity=1),g.ProjectileLifeTime??(g.ProjectileLifeTime=5),n(g);let S=g.ToolName.replace(/ /g,"_");o(S);let E=Object.keys(Fe.structured.components.infantry[S]);s(Object.keys(a).filter(d=>E.includes(d)).reduce((d,c)=>(d[c]=a[c],d),{})),f(S),h(S)}function m(y,g){a[y]=g,s(a),h(r)}function h(y){const g=dP();Object.values(a).forEach(d=>{let c=Fe.get(d);Object.keys(c.Modifiers).forEach(p=>{g[p]+=c.Modifiers[p]??0})});let S={};Object.values(a).forEach(d=>{let c=Fe.get(d);Object.keys(c.Overrides).forEach(p=>{S[p]=c.Overrides[p]})});let E=JSON.parse(JSON.stringify(Fe.get(`Infantry/Weapons/${y}`)));Object.keys(S).forEach(d=>{E[d]=S[d]}),Object.keys(g).forEach(d=>{E[d]*=g[d],d!="RateOfFire"&&(E[d]=W.round(E[d],3))}),n(E)}function f(y){l(Object.keys(Fe.structured.components.infantry[y]))}return M.jsxs(Ln,{className:"p-8 rounded-md bg-zinc-900",children:[M.jsx(si,{variant:"h4",gutterBottom:!0,className:"text-center",children:"Infantry Weapon Info"}),M.jsx("hr",{className:"border-gray-400"}),M.jsx(Ln,{className:"p-8",children:M.jsxs(th,{gap:2,children:[M.jsx(Il,{id:"weapon",label:"Weapon",items:e,onChange:u}),i.map(y=>{let g=Fe.structured.components.infantry[r][y];return M.jsx(Il,{id:y,label:y,items:g.map(S=>({label:Fe.get(S).Name,value:S})),onChange:S=>m(y,S)},y)})]})}),M.jsxs(Ln,{className:"px-8 pb-8",children:[M.jsxs(si,{variant:"h5",children:[t==null?void 0:t.ToolName," Stats"]}),M.jsx("hr",{className:"border-gray-600 mt-2 mb-4 mx-[-0.5rem]"}),M.jsxs("p",{children:["Weapon Type: ",W.splitCase(t.Action)]}),M.jsxs("p",{children:[M.jsx(zt,{tooltip:"The spread of each bullet, while hipfiring and while aiming.",children:"Bullet Spread:"})," ",t.BulletSpread,"° (",t.AimBulletSpread,"° ADS)"]}),W.renderIf(t.ProjectilesPerRound>1,M.jsxs("p",{children:["Projectile Spread: ",t.ProjectileSpread,"°"]})),M.jsxs("p",{children:["Aim Time Multiplier: ",t.AimTimeMult,"x"]}),M.jsxs("p",{children:["Starting Ammo: ",t.StartingAmmo+t.MagazineSize+1,t.MagazineSize!=0?`/${t.MagazineSize+1}`:""]}),M.jsxs("p",{children:["Reload Time: ",t.ReloadTime+t.ChamberTime,"s"]}),W.renderIf(t.ProjectilesPerRound>1,M.jsxs("p",{children:["Projectiles Per Shot: ",t.ProjectilesPerRound??1]})),W.renderIfElse(!t.MinRange&&!t.MaxRange,M.jsxs("p",{children:["Damage: ",t.BulletDamage," hp"]}),M.jsxs("p",{children:["Damage: ",t.BulletDamage,"-",t.MinDamage," hp"]})),W.renderIf(t.ProjectilesPerRound>1,M.jsxs("p",{children:["Damage Per Bullet: ",!t.MinRange&&!t.MaxRange?`${W.round(t.BulletDamage/t.ProjectilesPerRound,3)}`:`${W.round(t.BulletDamage/t.ProjectilesPerRound,3)}-${W.round(t.MinDamage/t.ProjectilesPerRound,3)}`," hp"]})),W.renderIf(t.MinRange&&t.MaxRange,M.jsxs("p",{children:[M.jsx(zt,{tooltip:"Damage stays at the maximum value until it reaches the minimum range, then it falls off to the minimum damage by the maximum range and stays there.",children:"Damage Falloff:"})," ",t.MinRange,"-",t.MaxRange," studs"]})),M.jsxs("p",{children:[M.jsx(zt,{tooltip:"The extent to which this weapon ignores armor.",children:"Armor Piercing:"})," ",W.round(t.ArmorPiercing*100,3),"%"]}),M.jsxs("p",{children:[M.jsx(zt,{tooltip:"Damage multiplier against aerial targets.",children:"Flak Multiplier:"})," ",t.FlakMult,"x"]}),M.jsxs("p",{children:["Firerate: ",t.MagazineSize!=0?W.formatNumber(W.round(t.RateOfFire*60,3)):W.formatNumber(W.round(1/(t.ReloadTime+t.ChamberTime)*60,3))," rpm"]}),M.jsxs("p",{children:["Muzzle Velocity: ",W.formatNumber(t.BulletSpeed)," studs/s"]}),W.renderIf(t.BulletSpeed!=0,M.jsxs("p",{children:["Max Range: ",W.formatNumber(W.round(t.BulletSpeed*t.ProjectileLifeTime,3))," studs"]})),M.jsxs("p",{children:[M.jsx(zt,{tooltip:"The time after which the projectile despawns.",children:"Lifetime:"})," ",t.ProjectileLifeTime,"s"]}),M.jsxs("p",{children:["First Shot Recoil Multiplier: ",t.FirstShotRecoilMult,"x"]}),M.jsxs("p",{children:["Vertical Recoil: ",t.VerticalRecoil]}),M.jsxs("p",{children:[M.jsx(zt,{tooltip:"The direction the recoil is biased. Positive values indicate a right bias, while negative values indicate a left bias.",children:"Recoil Bias:"})," ",W.round(t.RecoilRight-t.RecoilLeft,3)]}),M.jsxs("p",{children:["Projectile Type: ",W.splitCase(t.ProjectileHitModule)]}),W.renderIfNotNull(t.ExplosionRadius,M.jsxs(M.Fragment,{children:[M.jsxs("p",{children:["Explosion Radius: ",t.ExplosionRadius," ",W.plural(t.ExplosionRadius,"stud")]}),M.jsxs("p",{children:["Explosion Intensity: ",t.ExplosionIntensity,"x"]}),M.jsxs("p",{children:["Terrain Intensity: ",t.TerrainIntensity,"x"]})]}))]})]})}function fP(){const e=Object.keys(Fe.structured.weapons.vehicle).map(y=>({label:y,value:y})),[t,n]=x.useState(Fe.get(Object.values(Fe.structured.weapons.vehicle[e[0].value])[0])),[r,o]=x.useState(e[0].label),[i,l]=x.useState(Object.values(Fe.structured.weapons.vehicle[r])[0]),[a,s]=x.useState(u(r));function u(y){return Object.entries(Fe.structured.weapons.vehicle[y]).map(g=>({label:g[0],value:g[1]}))}function m(y){return y.ArmorPiercing??(y.ArmorPiercing=0),y.FlakMult??(y.FlakMult=1),y.ProjectilesPerRound??(y.ProjectilesPerRound=1),y.TerrainIntensity??(y.TerrainIntensity=1),y.ProjectileLifeTime??(y.ProjectileLifeTime=5),y}function h(y){let g=u(y),S=Fe.get(g[0].value);S=m(S),n(S);let E=y;o(E),l(g[0].value),s(u(E))}function f(y){let g=Fe.get(y);g=m(g),n(g),l(y)}return M.jsxs(Ln,{className:"p-8 rounded-md bg-zinc-900",children:[M.jsx(si,{variant:"h4",gutterBottom:!0,className:"text-center",children:"Vehicle Weapon Info"}),M.jsx("hr",{className:"border-gray-400"}),M.jsx(Ln,{className:"p-8",children:M.jsxs(th,{gap:2,children:[M.jsx(Il,{id:"weapon",label:"Weapon",items:e,onChange:h}),M.jsx(Il,{id:"variant",label:"Variant",items:a,value:i,onChange:f})]})}),M.jsxs(Ln,{className:"px-8 pb-8",children:[M.jsxs(si,{variant:"h5",children:[t==null?void 0:t.WeaponName," Stats"]}),M.jsx("hr",{className:"border-gray-600 mt-2 mb-4 mx-[-0.5rem]"}),M.jsxs("p",{children:[M.jsx(zt,{tooltip:"The spread of each bullet, while hipfiring and while aiming.",children:"Bullet Spread:"})," ",t.BulletSpread,"°"]}),W.renderIf(t.ProjectilesPerRound>1,M.jsxs("p",{children:["Projectile Spread: ",t.ProjectileSpread,"°"]})),M.jsxs("p",{children:["Starting Ammo: ",t.ClipSize+(t.Overheats?0:t.StockpileSize),t.ClipSize>1?`/${t.ClipSize}`:""]}),M.jsxs("p",{children:["Ammo Refill: ",t.AmmoRegen,"s"]}),M.jsxs("p",{children:["Reload Time: ",t.ReloadTime,"s"]}),W.renderIf(t.ProjectilesPerRound>1,M.jsxs("p",{children:["Projectiles Per Shot: ",t.ProjectilesPerRound??1]})),W.renderIfElse(!t.MinRange&&!t.MaxRange,M.jsxs("p",{children:["Damage: ",t.BulletDamage," hp"]}),M.jsxs("p",{children:["Damage: ",t.BulletDamage,"-",t.MinDamage," hp"]})),W.renderIf(t.ProjectilesPerRound>1,M.jsxs("p",{children:["Damage Per Bullet: ",!t.MinRange&&!t.MaxRange?`${W.round(t.BulletDamage/t.ProjectilesPerRound,3)}`:`${W.round(t.BulletDamage/t.ProjectilesPerRound,3)}-${W.round(t.MinDamage/t.ProjectilesPerRound,3)}`," hp"]})),W.renderIf(t.MinRange&&t.MaxRange,M.jsxs("p",{children:[M.jsx(zt,{tooltip:"Damage stays at the maximum value until it reaches the minimum range, then it falls off to the minimum damage by the maximum range and stays there.",children:"Damage Falloff:"})," ",t.MinRange,"-",t.MaxRange," studs"]})),M.jsxs("p",{children:[M.jsx(zt,{tooltip:"The extent to which this weapon ignores armor.",children:"Armor Piercing:"})," ",W.round(t.ArmorPiercing*100,3),"%"]}),M.jsxs("p",{children:[M.jsx(zt,{tooltip:"Damage multiplier against aerial targets.",children:"Flak Multiplier:"})," ",t.FlakMult,"x"]}),M.jsxs("p",{children:["Firerate: ",t.ClipSize>1?W.formatNumber(W.round(t.FireRate*60,3)):W.formatNumber(W.round(1/t.ReloadTime*60,3))," rpm"]}),M.jsxs("p",{children:["Muzzle Velocity: ",W.formatNumber(t.BulletSpeed)," studs/s ",W.if(t.UsesVelocityInheritance,"(Inherits Velocity)")]}),W.renderIf(t.BulletSpeed!=0,M.jsxs("p",{children:["Max Range: ",W.formatNumber(W.round(t.BulletSpeed*t.ProjectileLifeTime,3))," studs"]})),M.jsxs("p",{children:[M.jsx(zt,{tooltip:"The time after which the projectile despawns.",children:"Lifetime:"})," ",t.ProjectileLifeTime,"s"]}),M.jsxs("p",{children:["Projectile Type: ",W.splitCase(t.ProjectileHitModule)]}),W.renderIfNotNull(t.ExplosionRadius,M.jsxs(M.Fragment,{children:[M.jsxs("p",{children:["Explosion Radius: ",t.ExplosionRadius," ",W.plural(t.ExplosionRadius,"stud")]}),M.jsxs("p",{children:["Explosion Intensity: ",t.ExplosionIntensity,"x"]}),M.jsxs("p",{children:["Terrain Intensity: ",t.TerrainIntensity,"x"]})]}))]})]})}function mP(){return M.jsxs(Ln,{className:"p-8",children:[M.jsx(si,{variant:"h2",gutterBottom:!0,className:"text-center",children:"Attrition Stats"}),M.jsxs(Ln,{className:"!flex !flex-col !gap-8",children:[M.jsx(pP,{}),M.jsx(fP,{})]})]})}const hP=L0({palette:{mode:"dark"}});Ss.createRoot(document.getElementById("root")).render(M.jsx(Ht.StrictMode,{children:M.jsxs(cx,{theme:hP,children:[M.jsx(r2,{}),M.jsx(mP,{})]})}));
