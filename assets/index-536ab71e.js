var th=Object.defineProperty;var nh=(e,t,n)=>t in e?th(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Wn=(e,t,n)=>(nh(e,typeof t!="symbol"?t+"":t,n),n);function rh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Wp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Up={exports:{}},_l={},Gp={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ii=Symbol.for("react.element"),oh=Symbol.for("react.portal"),ih=Symbol.for("react.fragment"),lh=Symbol.for("react.strict_mode"),ah=Symbol.for("react.profiler"),sh=Symbol.for("react.provider"),uh=Symbol.for("react.context"),ch=Symbol.for("react.forward_ref"),dh=Symbol.for("react.suspense"),ph=Symbol.for("react.memo"),fh=Symbol.for("react.lazy"),Oc=Symbol.iterator;function mh(e){return e===null||typeof e!="object"?null:(e=Oc&&e[Oc]||e["@@iterator"],typeof e=="function"?e:null)}var Kp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yp=Object.assign,Qp={};function Jr(e,t,n){this.props=e,this.context=t,this.refs=Qp,this.updater=n||Kp}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xp(){}Xp.prototype=Jr.prototype;function Su(e,t,n){this.props=e,this.context=t,this.refs=Qp,this.updater=n||Kp}var vu=Su.prototype=new Xp;vu.constructor=Su;Yp(vu,Jr.prototype);vu.isPureReactComponent=!0;var Lc=Array.isArray,qp=Object.prototype.hasOwnProperty,xu={current:null},Zp={key:!0,ref:!0,__self:!0,__source:!0};function Jp(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)qp.call(t,r)&&!Zp.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ii,type:e,key:i,ref:l,props:o,_owner:xu.current}}function hh(e,t){return{$$typeof:ii,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Cu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ii}function gh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $c=/\/+/g;function Ia(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gh(""+e.key):t.toString(36)}function Fi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ii:case oh:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ia(l,0):r,Lc(o)?(n="",e!=null&&(n=e.replace($c,"$&/")+"/"),Fi(o,t,n,"",function(u){return u})):o!=null&&(Cu(o)&&(o=hh(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace($c,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Lc(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Ia(i,a);l+=Fi(i,t,n,s,o)}else if(s=mh(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Ia(i,a++),l+=Fi(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function hi(e,t,n){if(e==null)return e;var r=[],o=0;return Fi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function yh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var nt={current:null},Ni={transition:null},Sh={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:Ni,ReactCurrentOwner:xu};Y.Children={map:hi,forEach:function(e,t,n){hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hi(e,function(){t++}),t},toArray:function(e){return hi(e,function(t){return t})||[]},only:function(e){if(!Cu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Jr;Y.Fragment=ih;Y.Profiler=ah;Y.PureComponent=Su;Y.StrictMode=lh;Y.Suspense=dh;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sh;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yp({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=xu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)qp.call(t,s)&&!Zp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ii,type:e.type,key:o,ref:i,props:r,_owner:l}};Y.createContext=function(e){return e={$$typeof:uh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sh,_context:e},e.Consumer=e};Y.createElement=Jp;Y.createFactory=function(e){var t=Jp.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:ch,render:e}};Y.isValidElement=Cu;Y.lazy=function(e){return{$$typeof:fh,_payload:{_status:-1,_result:e},_init:yh}};Y.memo=function(e,t){return{$$typeof:ph,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Ni.transition;Ni.transition={};try{e()}finally{Ni.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return nt.current.useCallback(e,t)};Y.useContext=function(e){return nt.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return nt.current.useDeferredValue(e)};Y.useEffect=function(e,t){return nt.current.useEffect(e,t)};Y.useId=function(){return nt.current.useId()};Y.useImperativeHandle=function(e,t,n){return nt.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return nt.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return nt.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return nt.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return nt.current.useReducer(e,t,n)};Y.useRef=function(e){return nt.current.useRef(e)};Y.useState=function(e){return nt.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return nt.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return nt.current.useTransition()};Y.version="18.2.0";Gp.exports=Y;var x=Gp.exports;const zt=Wp(x),fs=rh({__proto__:null,default:zt},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh=x,xh=Symbol.for("react.element"),Ch=Symbol.for("react.fragment"),Mh=Object.prototype.hasOwnProperty,Ph=vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Th={key:!0,ref:!0,__self:!0,__source:!0};function ef(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Mh.call(t,r)&&!Th.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:xh,type:e,key:i,ref:l,props:o,_owner:Ph.current}}_l.Fragment=Ch;_l.jsx=ef;_l.jsxs=ef;Up.exports=_l;var D=Up.exports;var ms={},tf={exports:{}},Ct={},nf={exports:{}},rf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,b){var O=k.length;k.push(b);e:for(;0<O;){var X=O-1>>>1,G=k[X];if(0<o(G,b))k[X]=b,k[O]=G,O=X;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var b=k[0],O=k.pop();if(O!==b){k[0]=O;e:for(var X=0,G=k.length,De=G>>>1;X<De;){var Q=2*(X+1)-1,he=k[Q],oe=Q+1,Ve=k[oe];if(0>o(he,O))oe<G&&0>o(Ve,he)?(k[X]=Ve,k[oe]=O,X=oe):(k[X]=he,k[Q]=O,X=Q);else if(oe<G&&0>o(Ve,O))k[X]=Ve,k[oe]=O,X=oe;else break e}}return b}function o(k,b){var O=k.sortIndex-b.sortIndex;return O!==0?O:k.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],m=1,h=null,f=3,v=!1,g=!1,y=!1,R=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(k){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=k)r(u),b.sortIndex=b.expirationTime,t(s,b);else break;b=n(u)}}function S(k){if(y=!1,p(k),!g)if(n(s)!==null)g=!0,j(P);else{var b=n(u);b!==null&&z(S,b.startTime-k)}}function P(k,b){g=!1,y&&(y=!1,d(w),w=-1),v=!0;var O=f;try{for(p(b),h=n(s);h!==null&&(!(h.expirationTime>b)||k&&!F());){var X=h.callback;if(typeof X=="function"){h.callback=null,f=h.priorityLevel;var G=X(h.expirationTime<=b);b=e.unstable_now(),typeof G=="function"?h.callback=G:h===n(s)&&r(s),p(b)}else r(s);h=n(s)}if(h!==null)var De=!0;else{var Q=n(u);Q!==null&&z(S,Q.startTime-b),De=!1}return De}finally{h=null,f=O,v=!1}}var T=!1,M=null,w=-1,A=5,E=-1;function F(){return!(e.unstable_now()-E<A)}function $(){if(M!==null){var k=e.unstable_now();E=k;var b=!0;try{b=M(!0,k)}finally{b?N():(T=!1,M=null)}}else T=!1}var N;if(typeof c=="function")N=function(){c($)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,B=I.port2;I.port1.onmessage=$,N=function(){B.postMessage(null)}}else N=function(){R($,0)};function j(k){M=k,T||(T=!0,N())}function z(k,b){w=R(function(){k(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,j(P))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(k){switch(f){case 1:case 2:case 3:var b=3;break;default:b=f}var O=f;f=b;try{return k()}finally{f=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,b){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var O=f;f=k;try{return b()}finally{f=O}},e.unstable_scheduleCallback=function(k,b,O){var X=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?X+O:X):O=X,k){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=O+G,k={id:m++,callback:b,priorityLevel:k,startTime:O,expirationTime:G,sortIndex:-1},O>X?(k.sortIndex=O,t(u,k),n(s)===null&&k===n(u)&&(y?(d(w),w=-1):y=!0,z(S,O-X))):(k.sortIndex=G,t(s,k),g||v||(g=!0,j(P))),k},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(k){var b=f;return function(){var O=f;f=b;try{return k.apply(this,arguments)}finally{f=O}}}})(rf);nf.exports=rf;var Rh=nf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of=x,xt=Rh;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lf=new Set,Lo={};function ur(e,t){Vr(e,t),Vr(e+"Capture",t)}function Vr(e,t){for(Lo[e]=t,e=0;e<t.length;e++)lf.add(t[e])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hs=Object.prototype.hasOwnProperty,Eh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jc={},zc={};function kh(e){return hs.call(zc,e)?!0:hs.call(jc,e)?!1:Eh.test(e)?zc[e]=!0:(jc[e]=!0,!1)}function wh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dh(e,t,n,r){if(t===null||typeof t>"u"||wh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function rt(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ke[e]=new rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ke[t]=new rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ke[e]=new rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ke[e]=new rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ke[e]=new rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ke[e]=new rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ke[e]=new rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ke[e]=new rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ke[e]=new rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Mu=/[\-:]([a-z])/g;function Pu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Mu,Pu);Ke[t]=new rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Mu,Pu);Ke[t]=new rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Mu,Pu);Ke[t]=new rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ke[e]=new rt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ke[e]=new rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Tu(e,t,n,r){var o=Ke.hasOwnProperty(t)?Ke[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dh(t,n,o,r)&&(n=null),r||o===null?kh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gn=of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gi=Symbol.for("react.element"),xr=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),Ru=Symbol.for("react.strict_mode"),gs=Symbol.for("react.profiler"),af=Symbol.for("react.provider"),sf=Symbol.for("react.context"),Eu=Symbol.for("react.forward_ref"),ys=Symbol.for("react.suspense"),Ss=Symbol.for("react.suspense_list"),ku=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),uf=Symbol.for("react.offscreen"),Vc=Symbol.iterator;function io(e){return e===null||typeof e!="object"?null:(e=Vc&&e[Vc]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Object.assign,Ba;function xo(e){if(Ba===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ba=t&&t[1]||""}return`
`+Ba+e}var Fa=!1;function Na(e,t){if(!e||Fa)return"";Fa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Fa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xo(e):""}function _h(e){switch(e.tag){case 5:return xo(e.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return e=Na(e.type,!1),e;case 11:return e=Na(e.type.render,!1),e;case 1:return e=Na(e.type,!0),e;default:return""}}function vs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cr:return"Fragment";case xr:return"Portal";case gs:return"Profiler";case Ru:return"StrictMode";case ys:return"Suspense";case Ss:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sf:return(e.displayName||"Context")+".Consumer";case af:return(e._context.displayName||"Context")+".Provider";case Eu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ku:return t=e.displayName||null,t!==null?t:vs(e.type)||"Memo";case Pn:t=e._payload,e=e._init;try{return vs(e(t))}catch{}}return null}function Ah(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vs(t);case 8:return t===Ru?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bh(e){var t=cf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yi(e){e._valueTracker||(e._valueTracker=bh(e))}function df(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=cf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xs(e,t){var n=t.checked;return Te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Hc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pf(e,t){t=t.checked,t!=null&&Tu(e,"checked",t,!1)}function Cs(e,t){pf(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ms(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ms(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ms(e,t,n){(t!=="number"||Zi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Co=Array.isArray;function Br(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ps(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Co(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function ff(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ts(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Si,hf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Si=Si||document.createElement("div"),Si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $o(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ih=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(e){Ih.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ro[t]=Ro[e]})});function gf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ro.hasOwnProperty(e)&&Ro[e]?(""+t).trim():t+"px"}function yf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=gf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Bh=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rs(e,t){if(t){if(Bh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Es(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ks=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,Fr=null,Nr=null;function Kc(e){if(e=si(e)){if(typeof ws!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Fl(t),ws(e.stateNode,e.type,t))}}function Sf(e){Fr?Nr?Nr.push(e):Nr=[e]:Fr=e}function vf(){if(Fr){var e=Fr,t=Nr;if(Nr=Fr=null,Kc(e),t)for(e=0;e<t.length;e++)Kc(t[e])}}function xf(e,t){return e(t)}function Cf(){}var Oa=!1;function Mf(e,t,n){if(Oa)return e(t,n);Oa=!0;try{return xf(e,t,n)}finally{Oa=!1,(Fr!==null||Nr!==null)&&(Cf(),vf())}}function jo(e,t){var n=e.stateNode;if(n===null)return null;var r=Fl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Ds=!1;if(dn)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Ds=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Ds=!1}function Fh(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var Eo=!1,Ji=null,el=!1,_s=null,Nh={onError:function(e){Eo=!0,Ji=e}};function Oh(e,t,n,r,o,i,l,a,s){Eo=!1,Ji=null,Fh.apply(Nh,arguments)}function Lh(e,t,n,r,o,i,l,a,s){if(Oh.apply(this,arguments),Eo){if(Eo){var u=Ji;Eo=!1,Ji=null}else throw Error(_(198));el||(el=!0,_s=u)}}function cr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yc(e){if(cr(e)!==e)throw Error(_(188))}function $h(e){var t=e.alternate;if(!t){if(t=cr(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Yc(o),e;if(i===r)return Yc(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Tf(e){return e=$h(e),e!==null?Rf(e):null}function Rf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rf(e);if(t!==null)return t;e=e.sibling}return null}var Ef=xt.unstable_scheduleCallback,Qc=xt.unstable_cancelCallback,jh=xt.unstable_shouldYield,zh=xt.unstable_requestPaint,Ae=xt.unstable_now,Vh=xt.unstable_getCurrentPriorityLevel,Du=xt.unstable_ImmediatePriority,kf=xt.unstable_UserBlockingPriority,tl=xt.unstable_NormalPriority,Hh=xt.unstable_LowPriority,wf=xt.unstable_IdlePriority,Al=null,Zt=null;function Wh(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Al,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:Kh,Uh=Math.log,Gh=Math.LN2;function Kh(e){return e>>>=0,e===0?32:31-(Uh(e)/Gh|0)|0}var vi=64,xi=4194304;function Mo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function nl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Mo(a):(i&=l,i!==0&&(r=Mo(i)))}else l=n&~o,l!==0?r=Mo(l):i!==0&&(r=Mo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Vt(t),o=1<<n,r|=e[n],t&=~o;return r}function Yh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Vt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Yh(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function As(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Df(){var e=vi;return vi<<=1,!(vi&4194240)&&(vi=64),e}function La(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function li(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=n}function Xh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Vt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function _u(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Vt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ie=0;function _f(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Af,Au,bf,If,Bf,bs=!1,Ci=[],Dn=null,_n=null,An=null,zo=new Map,Vo=new Map,Rn=[],qh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xc(e,t){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":zo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(t.pointerId)}}function ao(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=si(t),t!==null&&Au(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Zh(e,t,n,r,o){switch(t){case"focusin":return Dn=ao(Dn,e,t,n,r,o),!0;case"dragenter":return _n=ao(_n,e,t,n,r,o),!0;case"mouseover":return An=ao(An,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return zo.set(i,ao(zo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Vo.set(i,ao(Vo.get(i)||null,e,t,n,r,o)),!0}return!1}function Ff(e){var t=Xn(e.target);if(t!==null){var n=cr(t);if(n!==null){if(t=n.tag,t===13){if(t=Pf(n),t!==null){e.blockedOn=t,Bf(e.priority,function(){bf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Is(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ks=r,n.target.dispatchEvent(r),ks=null}else return t=si(n),t!==null&&Au(t),e.blockedOn=n,!1;t.shift()}return!0}function qc(e,t,n){Oi(e)&&n.delete(t)}function Jh(){bs=!1,Dn!==null&&Oi(Dn)&&(Dn=null),_n!==null&&Oi(_n)&&(_n=null),An!==null&&Oi(An)&&(An=null),zo.forEach(qc),Vo.forEach(qc)}function so(e,t){e.blockedOn===t&&(e.blockedOn=null,bs||(bs=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,Jh)))}function Ho(e){function t(o){return so(o,e)}if(0<Ci.length){so(Ci[0],e);for(var n=1;n<Ci.length;n++){var r=Ci[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dn!==null&&so(Dn,e),_n!==null&&so(_n,e),An!==null&&so(An,e),zo.forEach(t),Vo.forEach(t),n=0;n<Rn.length;n++)r=Rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rn.length&&(n=Rn[0],n.blockedOn===null);)Ff(n),n.blockedOn===null&&Rn.shift()}var Or=gn.ReactCurrentBatchConfig,rl=!0;function eg(e,t,n,r){var o=ie,i=Or.transition;Or.transition=null;try{ie=1,bu(e,t,n,r)}finally{ie=o,Or.transition=i}}function tg(e,t,n,r){var o=ie,i=Or.transition;Or.transition=null;try{ie=4,bu(e,t,n,r)}finally{ie=o,Or.transition=i}}function bu(e,t,n,r){if(rl){var o=Is(e,t,n,r);if(o===null)Ya(e,t,r,ol,n),Xc(e,r);else if(Zh(o,e,t,n,r))r.stopPropagation();else if(Xc(e,r),t&4&&-1<qh.indexOf(e)){for(;o!==null;){var i=si(o);if(i!==null&&Af(i),i=Is(e,t,n,r),i===null&&Ya(e,t,r,ol,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ya(e,t,r,null,n)}}var ol=null;function Is(e,t,n,r){if(ol=null,e=wu(r),e=Xn(e),e!==null)if(t=cr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ol=e,null}function Nf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vh()){case Du:return 1;case kf:return 4;case tl:case Hh:return 16;case wf:return 536870912;default:return 16}default:return 16}}var kn=null,Iu=null,Li=null;function Of(){if(Li)return Li;var e,t=Iu,n=t.length,r,o="value"in kn?kn.value:kn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Li=o.slice(e,1<r?1-r:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mi(){return!0}function Zc(){return!1}function Mt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Mi:Zc,this.isPropagationStopped=Zc,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mi)},persist:function(){},isPersistent:Mi}),t}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=Mt(eo),ai=Te({},eo,{view:0,detail:0}),ng=Mt(ai),$a,ja,uo,bl=Te({},ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==uo&&(uo&&e.type==="mousemove"?($a=e.screenX-uo.screenX,ja=e.screenY-uo.screenY):ja=$a=0,uo=e),$a)},movementY:function(e){return"movementY"in e?e.movementY:ja}}),Jc=Mt(bl),rg=Te({},bl,{dataTransfer:0}),og=Mt(rg),ig=Te({},ai,{relatedTarget:0}),za=Mt(ig),lg=Te({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),ag=Mt(lg),sg=Te({},eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ug=Mt(sg),cg=Te({},eo,{data:0}),ed=Mt(cg),dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fg[e])?!!t[e]:!1}function Fu(){return mg}var hg=Te({},ai,{key:function(e){if(e.key){var t=dg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gg=Mt(hg),yg=Te({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),td=Mt(yg),Sg=Te({},ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),vg=Mt(Sg),xg=Te({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cg=Mt(xg),Mg=Te({},bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pg=Mt(Mg),Tg=[9,13,27,32],Nu=dn&&"CompositionEvent"in window,ko=null;dn&&"documentMode"in document&&(ko=document.documentMode);var Rg=dn&&"TextEvent"in window&&!ko,Lf=dn&&(!Nu||ko&&8<ko&&11>=ko),nd=String.fromCharCode(32),rd=!1;function $f(e,t){switch(e){case"keyup":return Tg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mr=!1;function Eg(e,t){switch(e){case"compositionend":return jf(t);case"keypress":return t.which!==32?null:(rd=!0,nd);case"textInput":return e=t.data,e===nd&&rd?null:e;default:return null}}function kg(e,t){if(Mr)return e==="compositionend"||!Nu&&$f(e,t)?(e=Of(),Li=Iu=kn=null,Mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lf&&t.locale!=="ko"?null:t.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wg[e.type]:t==="textarea"}function zf(e,t,n,r){Sf(r),t=il(t,"onChange"),0<t.length&&(n=new Bu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wo=null,Wo=null;function Dg(e){Zf(e,0)}function Il(e){var t=Rr(e);if(df(t))return e}function _g(e,t){if(e==="change")return t}var Vf=!1;if(dn){var Va;if(dn){var Ha="oninput"in document;if(!Ha){var id=document.createElement("div");id.setAttribute("oninput","return;"),Ha=typeof id.oninput=="function"}Va=Ha}else Va=!1;Vf=Va&&(!document.documentMode||9<document.documentMode)}function ld(){wo&&(wo.detachEvent("onpropertychange",Hf),Wo=wo=null)}function Hf(e){if(e.propertyName==="value"&&Il(Wo)){var t=[];zf(t,Wo,e,wu(e)),Mf(Dg,t)}}function Ag(e,t,n){e==="focusin"?(ld(),wo=t,Wo=n,wo.attachEvent("onpropertychange",Hf)):e==="focusout"&&ld()}function bg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Il(Wo)}function Ig(e,t){if(e==="click")return Il(t)}function Bg(e,t){if(e==="input"||e==="change")return Il(t)}function Fg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wt=typeof Object.is=="function"?Object.is:Fg;function Uo(e,t){if(Wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!hs.call(t,o)||!Wt(e[o],t[o]))return!1}return!0}function ad(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sd(e,t){var n=ad(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ad(n)}}function Wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uf(){for(var e=window,t=Zi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zi(e.document)}return t}function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ng(e){var t=Uf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wf(n.ownerDocument.documentElement,n)){if(r!==null&&Ou(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=sd(n,i);var l=sd(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Og=dn&&"documentMode"in document&&11>=document.documentMode,Pr=null,Bs=null,Do=null,Fs=!1;function ud(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fs||Pr==null||Pr!==Zi(r)||(r=Pr,"selectionStart"in r&&Ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Do&&Uo(Do,r)||(Do=r,r=il(Bs,"onSelect"),0<r.length&&(t=new Bu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function Pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tr={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionend:Pi("Transition","TransitionEnd")},Wa={},Gf={};dn&&(Gf=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Bl(e){if(Wa[e])return Wa[e];if(!Tr[e])return e;var t=Tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gf)return Wa[e]=t[n];return e}var Kf=Bl("animationend"),Yf=Bl("animationiteration"),Qf=Bl("animationstart"),Xf=Bl("transitionend"),qf=new Map,cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){qf.set(e,t),ur(t,[e])}for(var Ua=0;Ua<cd.length;Ua++){var Ga=cd[Ua],Lg=Ga.toLowerCase(),$g=Ga[0].toUpperCase()+Ga.slice(1);zn(Lg,"on"+$g)}zn(Kf,"onAnimationEnd");zn(Yf,"onAnimationIteration");zn(Qf,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(Xf,"onTransitionEnd");Vr("onMouseEnter",["mouseout","mouseover"]);Vr("onMouseLeave",["mouseout","mouseover"]);Vr("onPointerEnter",["pointerout","pointerover"]);Vr("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function dd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Lh(r,t,void 0,e),e.currentTarget=null}function Zf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;dd(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;dd(o,a,u),i=s}}}if(el)throw e=_s,el=!1,_s=null,e}function pe(e,t){var n=t[js];n===void 0&&(n=t[js]=new Set);var r=e+"__bubble";n.has(r)||(Jf(t,e,2,!1),n.add(r))}function Ka(e,t,n){var r=0;t&&(r|=4),Jf(n,e,r,t)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function Go(e){if(!e[Ti]){e[Ti]=!0,lf.forEach(function(n){n!=="selectionchange"&&(jg.has(n)||Ka(n,!1,e),Ka(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ti]||(t[Ti]=!0,Ka("selectionchange",!1,t))}}function Jf(e,t,n,r){switch(Nf(t)){case 1:var o=eg;break;case 4:o=tg;break;default:o=bu}n=o.bind(null,t,n,e),o=void 0,!Ds||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ya(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Xn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Mf(function(){var u=i,m=wu(n),h=[];e:{var f=qf.get(e);if(f!==void 0){var v=Bu,g=e;switch(e){case"keypress":if($i(n)===0)break e;case"keydown":case"keyup":v=gg;break;case"focusin":g="focus",v=za;break;case"focusout":g="blur",v=za;break;case"beforeblur":case"afterblur":v=za;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=og;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=vg;break;case Kf:case Yf:case Qf:v=ag;break;case Xf:v=Cg;break;case"scroll":v=ng;break;case"wheel":v=Pg;break;case"copy":case"cut":case"paste":v=ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=td}var y=(t&4)!==0,R=!y&&e==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var c=u,p;c!==null;){p=c;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,d!==null&&(S=jo(c,d),S!=null&&y.push(Ko(c,S,p)))),R)break;c=c.return}0<y.length&&(f=new v(f,g,null,n,m),h.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==ks&&(g=n.relatedTarget||n.fromElement)&&(Xn(g)||g[pn]))break e;if((v||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?Xn(g):null,g!==null&&(R=cr(g),g!==R||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(y=Jc,S="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=td,S="onPointerLeave",d="onPointerEnter",c="pointer"),R=v==null?f:Rr(v),p=g==null?f:Rr(g),f=new y(S,c+"leave",v,n,m),f.target=R,f.relatedTarget=p,S=null,Xn(m)===u&&(y=new y(d,c+"enter",g,n,m),y.target=p,y.relatedTarget=R,S=y),R=S,v&&g)t:{for(y=v,d=g,c=0,p=y;p;p=pr(p))c++;for(p=0,S=d;S;S=pr(S))p++;for(;0<c-p;)y=pr(y),c--;for(;0<p-c;)d=pr(d),p--;for(;c--;){if(y===d||d!==null&&y===d.alternate)break t;y=pr(y),d=pr(d)}y=null}else y=null;v!==null&&pd(h,f,v,y,!1),g!==null&&R!==null&&pd(h,R,g,y,!0)}}e:{if(f=u?Rr(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var P=_g;else if(od(f))if(Vf)P=Bg;else{P=bg;var T=Ag}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=Ig);if(P&&(P=P(e,u))){zf(h,P,n,m);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Ms(f,"number",f.value)}switch(T=u?Rr(u):window,e){case"focusin":(od(T)||T.contentEditable==="true")&&(Pr=T,Bs=u,Do=null);break;case"focusout":Do=Bs=Pr=null;break;case"mousedown":Fs=!0;break;case"contextmenu":case"mouseup":case"dragend":Fs=!1,ud(h,n,m);break;case"selectionchange":if(Og)break;case"keydown":case"keyup":ud(h,n,m)}var M;if(Nu)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Mr?$f(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(Lf&&n.locale!=="ko"&&(Mr||w!=="onCompositionStart"?w==="onCompositionEnd"&&Mr&&(M=Of()):(kn=m,Iu="value"in kn?kn.value:kn.textContent,Mr=!0)),T=il(u,w),0<T.length&&(w=new ed(w,e,null,n,m),h.push({event:w,listeners:T}),M?w.data=M:(M=jf(n),M!==null&&(w.data=M)))),(M=Rg?Eg(e,n):kg(e,n))&&(u=il(u,"onBeforeInput"),0<u.length&&(m=new ed("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:u}),m.data=M))}Zf(h,t)})}function Ko(e,t,n){return{instance:e,listener:t,currentTarget:n}}function il(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=jo(e,n),i!=null&&r.unshift(Ko(e,i,o)),i=jo(e,t),i!=null&&r.push(Ko(e,i,o))),e=e.return}return r}function pr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pd(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=jo(n,i),s!=null&&l.unshift(Ko(n,s,a))):o||(s=jo(n,i),s!=null&&l.push(Ko(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var zg=/\r\n?/g,Vg=/\u0000|\uFFFD/g;function fd(e){return(typeof e=="string"?e:""+e).replace(zg,`
`).replace(Vg,"")}function Ri(e,t,n){if(t=fd(t),fd(e)!==t&&n)throw Error(_(425))}function ll(){}var Ns=null,Os=null;function Ls(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $s=typeof setTimeout=="function"?setTimeout:void 0,Hg=typeof clearTimeout=="function"?clearTimeout:void 0,md=typeof Promise=="function"?Promise:void 0,Wg=typeof queueMicrotask=="function"?queueMicrotask:typeof md<"u"?function(e){return md.resolve(null).then(e).catch(Ug)}:$s;function Ug(e){setTimeout(function(){throw e})}function Qa(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ho(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ho(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var to=Math.random().toString(36).slice(2),Xt="__reactFiber$"+to,Yo="__reactProps$"+to,pn="__reactContainer$"+to,js="__reactEvents$"+to,Gg="__reactListeners$"+to,Kg="__reactHandles$"+to;function Xn(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pn]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hd(e);e!==null;){if(n=e[Xt])return n;e=hd(e)}return t}e=n,n=e.parentNode}return null}function si(e){return e=e[Xt]||e[pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Fl(e){return e[Yo]||null}var zs=[],Er=-1;function Vn(e){return{current:e}}function fe(e){0>Er||(e.current=zs[Er],zs[Er]=null,Er--)}function ce(e,t){Er++,zs[Er]=e.current,e.current=t}var Ln={},Ze=Vn(Ln),st=Vn(!1),nr=Ln;function Hr(e,t){var n=e.type.contextTypes;if(!n)return Ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ut(e){return e=e.childContextTypes,e!=null}function al(){fe(st),fe(Ze)}function gd(e,t,n){if(Ze.current!==Ln)throw Error(_(168));ce(Ze,t),ce(st,n)}function em(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,Ah(e)||"Unknown",o));return Te({},n,r)}function sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,nr=Ze.current,ce(Ze,e),ce(st,st.current),!0}function yd(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=em(e,t,nr),r.__reactInternalMemoizedMergedChildContext=e,fe(st),fe(Ze),ce(Ze,e)):fe(st),ce(st,n)}var ln=null,Nl=!1,Xa=!1;function tm(e){ln===null?ln=[e]:ln.push(e)}function Yg(e){Nl=!0,tm(e)}function Hn(){if(!Xa&&ln!==null){Xa=!0;var e=0,t=ie;try{var n=ln;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ln=null,Nl=!1}catch(o){throw ln!==null&&(ln=ln.slice(e+1)),Ef(Du,Hn),o}finally{ie=t,Xa=!1}}return null}var kr=[],wr=0,ul=null,cl=0,Dt=[],_t=0,rr=null,sn=1,un="";function Gn(e,t){kr[wr++]=cl,kr[wr++]=ul,ul=e,cl=t}function nm(e,t,n){Dt[_t++]=sn,Dt[_t++]=un,Dt[_t++]=rr,rr=e;var r=sn;e=un;var o=32-Vt(r)-1;r&=~(1<<o),n+=1;var i=32-Vt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,sn=1<<32-Vt(t)+o|n<<o|r,un=i+e}else sn=1<<i|n<<o|r,un=e}function Lu(e){e.return!==null&&(Gn(e,1),nm(e,1,0))}function $u(e){for(;e===ul;)ul=kr[--wr],kr[wr]=null,cl=kr[--wr],kr[wr]=null;for(;e===rr;)rr=Dt[--_t],Dt[_t]=null,un=Dt[--_t],Dt[_t]=null,sn=Dt[--_t],Dt[_t]=null}var yt=null,gt=null,ve=!1,jt=null;function rm(e,t){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,gt=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rr!==null?{id:sn,overflow:un}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yt=e,gt=null,!0):!1;default:return!1}}function Vs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hs(e){if(ve){var t=gt;if(t){var n=t;if(!Sd(e,t)){if(Vs(e))throw Error(_(418));t=bn(n.nextSibling);var r=yt;t&&Sd(e,t)?rm(r,n):(e.flags=e.flags&-4097|2,ve=!1,yt=e)}}else{if(Vs(e))throw Error(_(418));e.flags=e.flags&-4097|2,ve=!1,yt=e}}}function vd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function Ei(e){if(e!==yt)return!1;if(!ve)return vd(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ls(e.type,e.memoizedProps)),t&&(t=gt)){if(Vs(e))throw om(),Error(_(418));for(;t;)rm(e,t),t=bn(t.nextSibling)}if(vd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){gt=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=yt?bn(e.stateNode.nextSibling):null;return!0}function om(){for(var e=gt;e;)e=bn(e.nextSibling)}function Wr(){gt=yt=null,ve=!1}function ju(e){jt===null?jt=[e]:jt.push(e)}var Qg=gn.ReactCurrentBatchConfig;function Lt(e,t){if(e&&e.defaultProps){t=Te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var dl=Vn(null),pl=null,Dr=null,zu=null;function Vu(){zu=Dr=pl=null}function Hu(e){var t=dl.current;fe(dl),e._currentValue=t}function Ws(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lr(e,t){pl=e,zu=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function It(e){var t=e._currentValue;if(zu!==e)if(e={context:e,memoizedValue:t,next:null},Dr===null){if(pl===null)throw Error(_(308));Dr=e,pl.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return t}var qn=null;function Wu(e){qn===null?qn=[e]:qn.push(e)}function im(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Wu(t)):(n.next=o.next,o.next=n),t.interleaved=n,fn(e,r)}function fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tn=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function cn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function In(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,fn(e,n)}return o=r.interleaved,o===null?(t.next=t,Wu(r)):(t.next=o.next,o.next=t),r.interleaved=t,fn(e,n)}function ji(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_u(e,n)}}function xd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fl(e,t,n,r){var o=e.updateQueue;Tn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,m=u=s=null,a=i;do{var f=a.lane,v=a.eventTime;if((r&f)===f){m!==null&&(m=m.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,y=a;switch(f=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(v,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(v,h,f):g,f==null)break e;h=Te({},h,f);break e;case 2:Tn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=v,s=h):m=m.next=v,l|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(m===null&&(s=h),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ir|=l,e.lanes=l,e.memoizedState=h}}function Cd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var am=new of.Component().refs;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ol={isMounted:function(e){return(e=e._reactInternals)?cr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),o=Fn(e),i=cn(r,o);i.payload=t,n!=null&&(i.callback=n),t=In(e,i,o),t!==null&&(Ht(t,e,o,r),ji(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),o=Fn(e),i=cn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=In(e,i,o),t!==null&&(Ht(t,e,o,r),ji(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=Fn(e),o=cn(n,r);o.tag=2,t!=null&&(o.callback=t),t=In(e,o,r),t!==null&&(Ht(t,e,r,n),ji(t,e,r))}};function Md(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Uo(n,r)||!Uo(o,i):!0}function sm(e,t,n){var r=!1,o=Ln,i=t.contextType;return typeof i=="object"&&i!==null?i=It(i):(o=ut(t)?nr:Ze.current,r=t.contextTypes,i=(r=r!=null)?Hr(e,o):Ln),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Pd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ol.enqueueReplaceState(t,t.state,null)}function Gs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=am,Uu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=It(i):(i=ut(t)?nr:Ze.current,o.context=Hr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Us(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ol.enqueueReplaceState(o,o.state,null),fl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function co(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===am&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function ki(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Td(e){var t=e._init;return t(e._payload)}function um(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=Nn(d,c),d.index=0,d.sibling=null,d}function i(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,S){return c===null||c.tag!==6?(c=rs(p,d.mode,S),c.return=d,c):(c=o(c,p),c.return=d,c)}function s(d,c,p,S){var P=p.type;return P===Cr?m(d,c,p.props.children,S,p.key):c!==null&&(c.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Pn&&Td(P)===c.type)?(S=o(c,p.props),S.ref=co(d,c,p),S.return=d,S):(S=Gi(p.type,p.key,p.props,null,d.mode,S),S.ref=co(d,c,p),S.return=d,S)}function u(d,c,p,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=os(p,d.mode,S),c.return=d,c):(c=o(c,p.children||[]),c.return=d,c)}function m(d,c,p,S,P){return c===null||c.tag!==7?(c=tr(p,d.mode,S,P),c.return=d,c):(c=o(c,p),c.return=d,c)}function h(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=rs(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gi:return p=Gi(c.type,c.key,c.props,null,d.mode,p),p.ref=co(d,null,c),p.return=d,p;case xr:return c=os(c,d.mode,p),c.return=d,c;case Pn:var S=c._init;return h(d,S(c._payload),p)}if(Co(c)||io(c))return c=tr(c,d.mode,p,null),c.return=d,c;ki(d,c)}return null}function f(d,c,p,S){var P=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return P!==null?null:a(d,c,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case gi:return p.key===P?s(d,c,p,S):null;case xr:return p.key===P?u(d,c,p,S):null;case Pn:return P=p._init,f(d,c,P(p._payload),S)}if(Co(p)||io(p))return P!==null?null:m(d,c,p,S,null);ki(d,p)}return null}function v(d,c,p,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(p)||null,a(c,d,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case gi:return d=d.get(S.key===null?p:S.key)||null,s(c,d,S,P);case xr:return d=d.get(S.key===null?p:S.key)||null,u(c,d,S,P);case Pn:var T=S._init;return v(d,c,p,T(S._payload),P)}if(Co(S)||io(S))return d=d.get(p)||null,m(c,d,S,P,null);ki(c,S)}return null}function g(d,c,p,S){for(var P=null,T=null,M=c,w=c=0,A=null;M!==null&&w<p.length;w++){M.index>w?(A=M,M=null):A=M.sibling;var E=f(d,M,p[w],S);if(E===null){M===null&&(M=A);break}e&&M&&E.alternate===null&&t(d,M),c=i(E,c,w),T===null?P=E:T.sibling=E,T=E,M=A}if(w===p.length)return n(d,M),ve&&Gn(d,w),P;if(M===null){for(;w<p.length;w++)M=h(d,p[w],S),M!==null&&(c=i(M,c,w),T===null?P=M:T.sibling=M,T=M);return ve&&Gn(d,w),P}for(M=r(d,M);w<p.length;w++)A=v(M,d,w,p[w],S),A!==null&&(e&&A.alternate!==null&&M.delete(A.key===null?w:A.key),c=i(A,c,w),T===null?P=A:T.sibling=A,T=A);return e&&M.forEach(function(F){return t(d,F)}),ve&&Gn(d,w),P}function y(d,c,p,S){var P=io(p);if(typeof P!="function")throw Error(_(150));if(p=P.call(p),p==null)throw Error(_(151));for(var T=P=null,M=c,w=c=0,A=null,E=p.next();M!==null&&!E.done;w++,E=p.next()){M.index>w?(A=M,M=null):A=M.sibling;var F=f(d,M,E.value,S);if(F===null){M===null&&(M=A);break}e&&M&&F.alternate===null&&t(d,M),c=i(F,c,w),T===null?P=F:T.sibling=F,T=F,M=A}if(E.done)return n(d,M),ve&&Gn(d,w),P;if(M===null){for(;!E.done;w++,E=p.next())E=h(d,E.value,S),E!==null&&(c=i(E,c,w),T===null?P=E:T.sibling=E,T=E);return ve&&Gn(d,w),P}for(M=r(d,M);!E.done;w++,E=p.next())E=v(M,d,w,E.value,S),E!==null&&(e&&E.alternate!==null&&M.delete(E.key===null?w:E.key),c=i(E,c,w),T===null?P=E:T.sibling=E,T=E);return e&&M.forEach(function($){return t(d,$)}),ve&&Gn(d,w),P}function R(d,c,p,S){if(typeof p=="object"&&p!==null&&p.type===Cr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case gi:e:{for(var P=p.key,T=c;T!==null;){if(T.key===P){if(P=p.type,P===Cr){if(T.tag===7){n(d,T.sibling),c=o(T,p.props.children),c.return=d,d=c;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Pn&&Td(P)===T.type){n(d,T.sibling),c=o(T,p.props),c.ref=co(d,T,p),c.return=d,d=c;break e}n(d,T);break}else t(d,T);T=T.sibling}p.type===Cr?(c=tr(p.props.children,d.mode,S,p.key),c.return=d,d=c):(S=Gi(p.type,p.key,p.props,null,d.mode,S),S.ref=co(d,c,p),S.return=d,d=S)}return l(d);case xr:e:{for(T=p.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=o(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=os(p,d.mode,S),c.return=d,d=c}return l(d);case Pn:return T=p._init,R(d,c,T(p._payload),S)}if(Co(p))return g(d,c,p,S);if(io(p))return y(d,c,p,S);ki(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,p),c.return=d,d=c):(n(d,c),c=rs(p,d.mode,S),c.return=d,d=c),l(d)):n(d,c)}return R}var Ur=um(!0),cm=um(!1),ui={},Jt=Vn(ui),Qo=Vn(ui),Xo=Vn(ui);function Zn(e){if(e===ui)throw Error(_(174));return e}function Gu(e,t){switch(ce(Xo,t),ce(Qo,e),ce(Jt,ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ts(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ts(t,e)}fe(Jt),ce(Jt,t)}function Gr(){fe(Jt),fe(Qo),fe(Xo)}function dm(e){Zn(Xo.current);var t=Zn(Jt.current),n=Ts(t,e.type);t!==n&&(ce(Qo,e),ce(Jt,n))}function Ku(e){Qo.current===e&&(fe(Jt),fe(Qo))}var Me=Vn(0);function ml(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qa=[];function Yu(){for(var e=0;e<qa.length;e++)qa[e]._workInProgressVersionPrimary=null;qa.length=0}var zi=gn.ReactCurrentDispatcher,Za=gn.ReactCurrentBatchConfig,or=0,Pe=null,Oe=null,$e=null,hl=!1,_o=!1,qo=0,Xg=0;function Ye(){throw Error(_(321))}function Qu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wt(e[n],t[n]))return!1;return!0}function Xu(e,t,n,r,o,i){if(or=i,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zi.current=e===null||e.memoizedState===null?e1:t1,e=n(r,o),_o){i=0;do{if(_o=!1,qo=0,25<=i)throw Error(_(301));i+=1,$e=Oe=null,t.updateQueue=null,zi.current=n1,e=n(r,o)}while(_o)}if(zi.current=gl,t=Oe!==null&&Oe.next!==null,or=0,$e=Oe=Pe=null,hl=!1,t)throw Error(_(300));return e}function qu(){var e=qo!==0;return qo=0,e}function Kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Pe.memoizedState=$e=e:$e=$e.next=e,$e}function Bt(){if(Oe===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=$e===null?Pe.memoizedState:$e.next;if(t!==null)$e=t,Oe=e;else{if(e===null)throw Error(_(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},$e===null?Pe.memoizedState=$e=e:$e=$e.next=e}return $e}function Zo(e,t){return typeof t=="function"?t(e):t}function Ja(e){var t=Bt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=Oe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var m=u.lane;if((or&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,Pe.lanes|=m,ir|=m}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Wt(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Pe.lanes|=i,ir|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function es(e){var t=Bt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Wt(i,t.memoizedState)||(at=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function pm(){}function fm(e,t){var n=Pe,r=Bt(),o=t(),i=!Wt(r.memoizedState,o);if(i&&(r.memoizedState=o,at=!0),r=r.queue,Zu(gm.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Jo(9,hm.bind(null,n,r,o,t),void 0,null),je===null)throw Error(_(349));or&30||mm(n,t,o)}return o}function mm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hm(e,t,n,r){t.value=n,t.getSnapshot=r,ym(t)&&Sm(e)}function gm(e,t,n){return n(function(){ym(t)&&Sm(e)})}function ym(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wt(e,n)}catch{return!0}}function Sm(e){var t=fn(e,1);t!==null&&Ht(t,e,1,-1)}function Rd(e){var t=Kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:e},t.queue=e,e=e.dispatch=Jg.bind(null,Pe,e),[t.memoizedState,e]}function Jo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vm(){return Bt().memoizedState}function Vi(e,t,n,r){var o=Kt();Pe.flags|=e,o.memoizedState=Jo(1|t,n,void 0,r===void 0?null:r)}function Ll(e,t,n,r){var o=Bt();r=r===void 0?null:r;var i=void 0;if(Oe!==null){var l=Oe.memoizedState;if(i=l.destroy,r!==null&&Qu(r,l.deps)){o.memoizedState=Jo(t,n,i,r);return}}Pe.flags|=e,o.memoizedState=Jo(1|t,n,i,r)}function Ed(e,t){return Vi(8390656,8,e,t)}function Zu(e,t){return Ll(2048,8,e,t)}function xm(e,t){return Ll(4,2,e,t)}function Cm(e,t){return Ll(4,4,e,t)}function Mm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pm(e,t,n){return n=n!=null?n.concat([e]):null,Ll(4,4,Mm.bind(null,t,e),n)}function Ju(){}function Tm(e,t){var n=Bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rm(e,t){var n=Bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Em(e,t,n){return or&21?(Wt(n,t)||(n=Df(),Pe.lanes|=n,ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function qg(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=Za.transition;Za.transition={};try{e(!1),t()}finally{ie=n,Za.transition=r}}function km(){return Bt().memoizedState}function Zg(e,t,n){var r=Fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wm(e))Dm(t,n);else if(n=im(e,t,n,r),n!==null){var o=et();Ht(n,e,r,o),_m(n,t,r)}}function Jg(e,t,n){var r=Fn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wm(e))Dm(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Wt(a,l)){var s=t.interleaved;s===null?(o.next=o,Wu(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=im(e,t,o,r),n!==null&&(o=et(),Ht(n,e,r,o),_m(n,t,r))}}function wm(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function Dm(e,t){_o=hl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _m(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_u(e,n)}}var gl={readContext:It,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},e1={readContext:It,useCallback:function(e,t){return Kt().memoizedState=[e,t===void 0?null:t],e},useContext:It,useEffect:Ed,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vi(4194308,4,Mm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vi(4,2,e,t)},useMemo:function(e,t){var n=Kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zg.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=Kt();return e={current:e},t.memoizedState=e},useState:Rd,useDebugValue:Ju,useDeferredValue:function(e){return Kt().memoizedState=e},useTransition:function(){var e=Rd(!1),t=e[0];return e=qg.bind(null,e[1]),Kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,o=Kt();if(ve){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),je===null)throw Error(_(349));or&30||mm(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ed(gm.bind(null,r,i,e),[e]),r.flags|=2048,Jo(9,hm.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Kt(),t=je.identifierPrefix;if(ve){var n=un,r=sn;n=(r&~(1<<32-Vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},t1={readContext:It,useCallback:Tm,useContext:It,useEffect:Zu,useImperativeHandle:Pm,useInsertionEffect:xm,useLayoutEffect:Cm,useMemo:Rm,useReducer:Ja,useRef:vm,useState:function(){return Ja(Zo)},useDebugValue:Ju,useDeferredValue:function(e){var t=Bt();return Em(t,Oe.memoizedState,e)},useTransition:function(){var e=Ja(Zo)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:pm,useSyncExternalStore:fm,useId:km,unstable_isNewReconciler:!1},n1={readContext:It,useCallback:Tm,useContext:It,useEffect:Zu,useImperativeHandle:Pm,useInsertionEffect:xm,useLayoutEffect:Cm,useMemo:Rm,useReducer:es,useRef:vm,useState:function(){return es(Zo)},useDebugValue:Ju,useDeferredValue:function(e){var t=Bt();return Oe===null?t.memoizedState=e:Em(t,Oe.memoizedState,e)},useTransition:function(){var e=es(Zo)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:pm,useSyncExternalStore:fm,useId:km,unstable_isNewReconciler:!1};function Kr(e,t){try{var n="",r=t;do n+=_h(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ts(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ks(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var r1=typeof WeakMap=="function"?WeakMap:Map;function Am(e,t,n){n=cn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sl||(Sl=!0,ru=r),Ks(e,t)},n}function bm(e,t,n){n=cn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ks(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ks(e,t),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function kd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new r1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=y1.bind(null,e,t,n),t.then(e,e))}function wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=cn(-1,1),t.tag=2,In(n,t,1))),n.lanes|=1),e)}var o1=gn.ReactCurrentOwner,at=!1;function Je(e,t,n,r){t.child=e===null?cm(t,null,n,r):Ur(t,e.child,n,r)}function _d(e,t,n,r,o){n=n.render;var i=t.ref;return Lr(t,o),r=Xu(e,t,n,r,i,o),n=qu(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,mn(e,t,o)):(ve&&n&&Lu(t),t.flags|=1,Je(e,t,r,o),t.child)}function Ad(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ac(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Im(e,t,i,r,o)):(e=Gi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(l,r)&&e.ref===t.ref)return mn(e,t,o)}return t.flags|=1,e=Nn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Im(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Uo(i,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,mn(e,t,o)}return Ys(e,t,n,r,o)}function Bm(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Ar,mt),mt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(Ar,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ce(Ar,mt),mt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ce(Ar,mt),mt|=r;return Je(e,t,o,n),t.child}function Fm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ys(e,t,n,r,o){var i=ut(n)?nr:Ze.current;return i=Hr(t,i),Lr(t,o),n=Xu(e,t,n,r,i,o),r=qu(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,mn(e,t,o)):(ve&&r&&Lu(t),t.flags|=1,Je(e,t,n,o),t.child)}function bd(e,t,n,r,o){if(ut(n)){var i=!0;sl(t)}else i=!1;if(Lr(t,o),t.stateNode===null)Hi(e,t),sm(t,n,r),Gs(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=It(u):(u=ut(n)?nr:Ze.current,u=Hr(t,u));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Pd(t,l,r,u),Tn=!1;var f=t.memoizedState;l.state=f,fl(t,r,l,o),s=t.memoizedState,a!==r||f!==s||st.current||Tn?(typeof m=="function"&&(Us(t,n,m,r),s=t.memoizedState),(a=Tn||Md(t,n,a,r,f,s,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,lm(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Lt(t.type,a),l.props=u,h=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=It(s):(s=ut(n)?nr:Ze.current,s=Hr(t,s));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||f!==s)&&Pd(t,l,r,s),Tn=!1,f=t.memoizedState,l.state=f,fl(t,r,l,o);var g=t.memoizedState;a!==h||f!==g||st.current||Tn?(typeof v=="function"&&(Us(t,n,v,r),g=t.memoizedState),(u=Tn||Md(t,n,u,r,f,g,s)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Qs(e,t,n,r,i,o)}function Qs(e,t,n,r,o,i){Fm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&yd(t,n,!1),mn(e,t,i);r=t.stateNode,o1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ur(t,e.child,null,i),t.child=Ur(t,null,a,i)):Je(e,t,a,i),t.memoizedState=r.state,o&&yd(t,n,!0),t.child}function Nm(e){var t=e.stateNode;t.pendingContext?gd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gd(e,t.context,!1),Gu(e,t.containerInfo)}function Id(e,t,n,r,o){return Wr(),ju(o),t.flags|=256,Je(e,t,n,r),t.child}var Xs={dehydrated:null,treeContext:null,retryLane:0};function qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Om(e,t,n){var r=t.pendingProps,o=Me.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ce(Me,o&1),e===null)return Hs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=zl(l,r,0,null),e=tr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=qs(n),t.memoizedState=Xs,e):ec(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return i1(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Nn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Nn(a,i):(i=tr(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?qs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Xs,r}return i=e.child,e=i.sibling,r=Nn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ec(e,t){return t=zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,r){return r!==null&&ju(r),Ur(t,e.child,null,n),e=ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function i1(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ts(Error(_(422))),wi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=zl({mode:"visible",children:r.children},o,0,null),i=tr(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Ur(t,e.child,null,l),t.child.memoizedState=qs(l),t.memoizedState=Xs,i);if(!(t.mode&1))return wi(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(_(419)),r=ts(i,r,void 0),wi(e,t,l,r)}if(a=(l&e.childLanes)!==0,at||a){if(r=je,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,fn(e,o),Ht(r,e,o,-1))}return lc(),r=ts(Error(_(421))),wi(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=S1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,gt=bn(o.nextSibling),yt=t,ve=!0,jt=null,e!==null&&(Dt[_t++]=sn,Dt[_t++]=un,Dt[_t++]=rr,sn=e.id,un=e.overflow,rr=t),t=ec(t,r.children),t.flags|=4096,t)}function Bd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ws(e.return,t,n)}function ns(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Lm(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Je(e,t,r.children,n),r=Me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bd(e,n,t);else if(e.tag===19)Bd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(Me,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ml(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ns(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ml(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ns(t,!0,n,null,i);break;case"together":ns(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function l1(e,t,n){switch(t.tag){case 3:Nm(t),Wr();break;case 5:dm(t);break;case 1:ut(t.type)&&sl(t);break;case 4:Gu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ce(dl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(Me,Me.current&1),t.flags|=128,null):n&t.child.childLanes?Om(e,t,n):(ce(Me,Me.current&1),e=mn(e,t,n),e!==null?e.sibling:null);ce(Me,Me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ce(Me,Me.current),r)break;return null;case 22:case 23:return t.lanes=0,Bm(e,t,n)}return mn(e,t,n)}var $m,Zs,jm,zm;$m=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zs=function(){};jm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Zn(Jt.current);var i=null;switch(n){case"input":o=xs(e,o),r=xs(e,r),i=[];break;case"select":o=Te({},o,{value:void 0}),r=Te({},r,{value:void 0}),i=[];break;case"textarea":o=Ps(e,o),r=Ps(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ll)}Rs(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Lo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&pe("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};zm=function(e,t,n,r){n!==r&&(t.flags|=4)};function po(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function a1(e,t,n){var r=t.pendingProps;switch($u(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return ut(t.type)&&al(),Qe(t),null;case 3:return r=t.stateNode,Gr(),fe(st),fe(Ze),Yu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jt!==null&&(lu(jt),jt=null))),Zs(e,t),Qe(t),null;case 5:Ku(t);var o=Zn(Xo.current);if(n=t.type,e!==null&&t.stateNode!=null)jm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Qe(t),null}if(e=Zn(Jt.current),Ei(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Xt]=t,r[Yo]=i,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(o=0;o<Po.length;o++)pe(Po[o],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Hc(r,i),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},pe("invalid",r);break;case"textarea":Uc(r,i),pe("invalid",r)}Rs(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ri(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ri(r.textContent,a,e),o=["children",""+a]):Lo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&pe("scroll",r)}switch(n){case"input":yi(r),Wc(r,i,!0);break;case"textarea":yi(r),Gc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ll)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Xt]=t,e[Yo]=r,$m(e,t,!1,!1),t.stateNode=e;e:{switch(l=Es(n,r),n){case"dialog":pe("cancel",e),pe("close",e),o=r;break;case"iframe":case"object":case"embed":pe("load",e),o=r;break;case"video":case"audio":for(o=0;o<Po.length;o++)pe(Po[o],e);o=r;break;case"source":pe("error",e),o=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),o=r;break;case"details":pe("toggle",e),o=r;break;case"input":Hc(e,r),o=xs(e,r),pe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Te({},r,{value:void 0}),pe("invalid",e);break;case"textarea":Uc(e,r),o=Ps(e,r),pe("invalid",e);break;default:o=r}Rs(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?yf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&hf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&$o(e,s):typeof s=="number"&&$o(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Lo.hasOwnProperty(i)?s!=null&&i==="onScroll"&&pe("scroll",e):s!=null&&Tu(e,i,s,l))}switch(n){case"input":yi(e),Wc(e,r,!1);break;case"textarea":yi(e),Gc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Br(e,!!r.multiple,i,!1):r.defaultValue!=null&&Br(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)zm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Zn(Xo.current),Zn(Jt.current),Ei(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xt]=t,(i=r.nodeValue!==n)&&(e=yt,e!==null))switch(e.tag){case 3:Ri(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ri(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=t,t.stateNode=r}return Qe(t),null;case 13:if(fe(Me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&gt!==null&&t.mode&1&&!(t.flags&128))om(),Wr(),t.flags|=98560,i=!1;else if(i=Ei(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[Xt]=t}else Wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Qe(t),i=!1}else jt!==null&&(lu(jt),jt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?Le===0&&(Le=3):lc())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return Gr(),Zs(e,t),e===null&&Go(t.stateNode.containerInfo),Qe(t),null;case 10:return Hu(t.type._context),Qe(t),null;case 17:return ut(t.type)&&al(),Qe(t),null;case 19:if(fe(Me),i=t.memoizedState,i===null)return Qe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)po(i,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ml(e),l!==null){for(t.flags|=128,po(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(Me,Me.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ae()>Yr&&(t.flags|=128,r=!0,po(i,!1),t.lanes=4194304)}else{if(!r)if(e=ml(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),po(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ve)return Qe(t),null}else 2*Ae()-i.renderingStartTime>Yr&&n!==1073741824&&(t.flags|=128,r=!0,po(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ae(),t.sibling=null,n=Me.current,ce(Me,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return ic(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?mt&1073741824&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function s1(e,t){switch($u(t),t.tag){case 1:return ut(t.type)&&al(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gr(),fe(st),fe(Ze),Yu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ku(t),null;case 13:if(fe(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(Me),null;case 4:return Gr(),null;case 10:return Hu(t.type._context),null;case 22:case 23:return ic(),null;case 24:return null;default:return null}}var Di=!1,qe=!1,u1=typeof WeakSet=="function"?WeakSet:Set,L=null;function _r(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function Js(e,t,n){try{n()}catch(r){we(e,t,r)}}var Fd=!1;function c1(e,t){if(Ns=rl,e=Uf(),Ou(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,m=0,h=e,f=null;t:for(;;){for(var v;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(v=h.firstChild)!==null;)f=h,h=v;for(;;){if(h===e)break t;if(f===n&&++u===o&&(a=l),f===i&&++m===r&&(s=l),(v=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Os={focusedElem:e,selectionRange:n},rl=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,R=g.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:Lt(t.type,y),R);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(S){we(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return g=Fd,Fd=!1,g}function Ao(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Js(t,n,i)}o=o.next}while(o!==r)}}function $l(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function eu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vm(e){var t=e.alternate;t!==null&&(e.alternate=null,Vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xt],delete t[Yo],delete t[js],delete t[Gg],delete t[Kg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hm(e){return e.tag===5||e.tag===3||e.tag===4}function Nd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ll));else if(r!==4&&(e=e.child,e!==null))for(tu(e,t,n),e=e.sibling;e!==null;)tu(e,t,n),e=e.sibling}function nu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nu(e,t,n),e=e.sibling;e!==null;)nu(e,t,n),e=e.sibling}var We=null,$t=!1;function Cn(e,t,n){for(n=n.child;n!==null;)Wm(e,t,n),n=n.sibling}function Wm(e,t,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:qe||_r(n,t);case 6:var r=We,o=$t;We=null,Cn(e,t,n),We=r,$t=o,We!==null&&($t?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&($t?(e=We,n=n.stateNode,e.nodeType===8?Qa(e.parentNode,n):e.nodeType===1&&Qa(e,n),Ho(e)):Qa(We,n.stateNode));break;case 4:r=We,o=$t,We=n.stateNode.containerInfo,$t=!0,Cn(e,t,n),We=r,$t=o;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Js(n,t,l),o=o.next}while(o!==r)}Cn(e,t,n);break;case 1:if(!qe&&(_r(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,t,a)}Cn(e,t,n);break;case 21:Cn(e,t,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,Cn(e,t,n),qe=r):Cn(e,t,n);break;default:Cn(e,t,n)}}function Od(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new u1),t.forEach(function(r){var o=v1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:We=a.stateNode,$t=!1;break e;case 3:We=a.stateNode.containerInfo,$t=!0;break e;case 4:We=a.stateNode.containerInfo,$t=!0;break e}a=a.return}if(We===null)throw Error(_(160));Wm(i,l,o),We=null,$t=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){we(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Um(t,e),t=t.sibling}function Um(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),Gt(e),r&4){try{Ao(3,e,e.return),$l(3,e)}catch(y){we(e,e.return,y)}try{Ao(5,e,e.return)}catch(y){we(e,e.return,y)}}break;case 1:Ot(t,e),Gt(e),r&512&&n!==null&&_r(n,n.return);break;case 5:if(Ot(t,e),Gt(e),r&512&&n!==null&&_r(n,n.return),e.flags&32){var o=e.stateNode;try{$o(o,"")}catch(y){we(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&pf(o,i),Es(a,l);var u=Es(a,i);for(l=0;l<s.length;l+=2){var m=s[l],h=s[l+1];m==="style"?yf(o,h):m==="dangerouslySetInnerHTML"?hf(o,h):m==="children"?$o(o,h):Tu(o,m,h,u)}switch(a){case"input":Cs(o,i);break;case"textarea":ff(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Br(o,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?Br(o,!!i.multiple,i.defaultValue,!0):Br(o,!!i.multiple,i.multiple?[]:"",!1))}o[Yo]=i}catch(y){we(e,e.return,y)}}break;case 6:if(Ot(t,e),Gt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){we(e,e.return,y)}}break;case 3:if(Ot(t,e),Gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(t.containerInfo)}catch(y){we(e,e.return,y)}break;case 4:Ot(t,e),Gt(e);break;case 13:Ot(t,e),Gt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(rc=Ae())),r&4&&Od(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(u=qe)||m,Ot(t,e),qe=u):Ot(t,e),Gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(L=e,m=e.child;m!==null;){for(h=L=m;L!==null;){switch(f=L,v=f.child,f.tag){case 0:case 11:case 14:case 15:Ao(4,f,f.return);break;case 1:_r(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){we(r,n,y)}}break;case 5:_r(f,f.return);break;case 22:if(f.memoizedState!==null){$d(h);continue}}v!==null?(v.return=f,L=v):$d(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=gf("display",l))}catch(y){we(e,e.return,y)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){we(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ot(t,e),Gt(e),r&4&&Od(e);break;case 21:break;default:Ot(t,e),Gt(e)}}function Gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hm(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&($o(o,""),r.flags&=-33);var i=Nd(e);nu(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Nd(e);tu(e,a,l);break;default:throw Error(_(161))}}catch(s){we(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function d1(e,t,n){L=e,Gm(e)}function Gm(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Di;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||qe;a=Di;var u=qe;if(Di=l,(qe=s)&&!u)for(L=o;L!==null;)l=L,s=l.child,l.tag===22&&l.memoizedState!==null?jd(o):s!==null?(s.return=l,L=s):jd(o);for(;i!==null;)L=i,Gm(i),i=i.sibling;L=o,Di=a,qe=u}Ld(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,L=i):Ld(e)}}function Ld(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||$l(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!qe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Cd(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cd(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Ho(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}qe||t.flags&512&&eu(t)}catch(f){we(t,t.return,f)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function $d(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function jd(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$l(4,t)}catch(s){we(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){we(t,o,s)}}var i=t.return;try{eu(t)}catch(s){we(t,i,s)}break;case 5:var l=t.return;try{eu(t)}catch(s){we(t,l,s)}}}catch(s){we(t,t.return,s)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var p1=Math.ceil,yl=gn.ReactCurrentDispatcher,tc=gn.ReactCurrentOwner,bt=gn.ReactCurrentBatchConfig,J=0,je=null,Fe=null,Ge=0,mt=0,Ar=Vn(0),Le=0,ei=null,ir=0,jl=0,nc=0,bo=null,lt=null,rc=0,Yr=1/0,on=null,Sl=!1,ru=null,Bn=null,_i=!1,wn=null,vl=0,Io=0,ou=null,Wi=-1,Ui=0;function et(){return J&6?Ae():Wi!==-1?Wi:Wi=Ae()}function Fn(e){return e.mode&1?J&2&&Ge!==0?Ge&-Ge:Qg.transition!==null?(Ui===0&&(Ui=Df()),Ui):(e=ie,e!==0||(e=window.event,e=e===void 0?16:Nf(e.type)),e):1}function Ht(e,t,n,r){if(50<Io)throw Io=0,ou=null,Error(_(185));li(e,n,r),(!(J&2)||e!==je)&&(e===je&&(!(J&2)&&(jl|=n),Le===4&&En(e,Ge)),ct(e,r),n===1&&J===0&&!(t.mode&1)&&(Yr=Ae()+500,Nl&&Hn()))}function ct(e,t){var n=e.callbackNode;Qh(e,t);var r=nl(e,e===je?Ge:0);if(r===0)n!==null&&Qc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qc(n),t===1)e.tag===0?Yg(zd.bind(null,e)):tm(zd.bind(null,e)),Wg(function(){!(J&6)&&Hn()}),n=null;else{switch(_f(r)){case 1:n=Du;break;case 4:n=kf;break;case 16:n=tl;break;case 536870912:n=wf;break;default:n=tl}n=e0(n,Km.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Km(e,t){if(Wi=-1,Ui=0,J&6)throw Error(_(327));var n=e.callbackNode;if($r()&&e.callbackNode!==n)return null;var r=nl(e,e===je?Ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xl(e,r);else{t=r;var o=J;J|=2;var i=Qm();(je!==e||Ge!==t)&&(on=null,Yr=Ae()+500,er(e,t));do try{h1();break}catch(a){Ym(e,a)}while(1);Vu(),yl.current=i,J=o,Fe!==null?t=0:(je=null,Ge=0,t=Le)}if(t!==0){if(t===2&&(o=As(e),o!==0&&(r=o,t=iu(e,o))),t===1)throw n=ei,er(e,0),En(e,r),ct(e,Ae()),n;if(t===6)En(e,r);else{if(o=e.current.alternate,!(r&30)&&!f1(o)&&(t=xl(e,r),t===2&&(i=As(e),i!==0&&(r=i,t=iu(e,i))),t===1))throw n=ei,er(e,0),En(e,r),ct(e,Ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Kn(e,lt,on);break;case 3:if(En(e,r),(r&130023424)===r&&(t=rc+500-Ae(),10<t)){if(nl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=$s(Kn.bind(null,e,lt,on),t);break}Kn(e,lt,on);break;case 4:if(En(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Vt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*p1(r/1960))-r,10<r){e.timeoutHandle=$s(Kn.bind(null,e,lt,on),r);break}Kn(e,lt,on);break;case 5:Kn(e,lt,on);break;default:throw Error(_(329))}}}return ct(e,Ae()),e.callbackNode===n?Km.bind(null,e):null}function iu(e,t){var n=bo;return e.current.memoizedState.isDehydrated&&(er(e,t).flags|=256),e=xl(e,t),e!==2&&(t=lt,lt=n,t!==null&&lu(t)),e}function lu(e){lt===null?lt=e:lt.push.apply(lt,e)}function f1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Wt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function En(e,t){for(t&=~nc,t&=~jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Vt(t),r=1<<n;e[n]=-1,t&=~r}}function zd(e){if(J&6)throw Error(_(327));$r();var t=nl(e,0);if(!(t&1))return ct(e,Ae()),null;var n=xl(e,t);if(e.tag!==0&&n===2){var r=As(e);r!==0&&(t=r,n=iu(e,r))}if(n===1)throw n=ei,er(e,0),En(e,t),ct(e,Ae()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kn(e,lt,on),ct(e,Ae()),null}function oc(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Yr=Ae()+500,Nl&&Hn())}}function lr(e){wn!==null&&wn.tag===0&&!(J&6)&&$r();var t=J;J|=1;var n=bt.transition,r=ie;try{if(bt.transition=null,ie=1,e)return e()}finally{ie=r,bt.transition=n,J=t,!(J&6)&&Hn()}}function ic(){mt=Ar.current,fe(Ar)}function er(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hg(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch($u(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&al();break;case 3:Gr(),fe(st),fe(Ze),Yu();break;case 5:Ku(r);break;case 4:Gr();break;case 13:fe(Me);break;case 19:fe(Me);break;case 10:Hu(r.type._context);break;case 22:case 23:ic()}n=n.return}if(je=e,Fe=e=Nn(e.current,null),Ge=mt=t,Le=0,ei=null,nc=jl=ir=0,lt=bo=null,qn!==null){for(t=0;t<qn.length;t++)if(n=qn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}qn=null}return e}function Ym(e,t){do{var n=Fe;try{if(Vu(),zi.current=gl,hl){for(var r=Pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}hl=!1}if(or=0,$e=Oe=Pe=null,_o=!1,qo=0,tc.current=null,n===null||n.return===null){Le=1,ei=t,Fe=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=Ge,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=wd(l);if(v!==null){v.flags&=-257,Dd(v,l,a,i,t),v.mode&1&&kd(i,u,t),t=v,s=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(s),t.updateQueue=y}else g.add(s);break e}else{if(!(t&1)){kd(i,u,t),lc();break e}s=Error(_(426))}}else if(ve&&a.mode&1){var R=wd(l);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Dd(R,l,a,i,t),ju(Kr(s,a));break e}}i=s=Kr(s,a),Le!==4&&(Le=2),bo===null?bo=[i]:bo.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Am(i,s,t);xd(i,d);break e;case 1:a=s;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Bn===null||!Bn.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=bm(i,a,t);xd(i,S);break e}}i=i.return}while(i!==null)}qm(n)}catch(P){t=P,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function Qm(){var e=yl.current;return yl.current=gl,e===null?gl:e}function lc(){(Le===0||Le===3||Le===2)&&(Le=4),je===null||!(ir&268435455)&&!(jl&268435455)||En(je,Ge)}function xl(e,t){var n=J;J|=2;var r=Qm();(je!==e||Ge!==t)&&(on=null,er(e,t));do try{m1();break}catch(o){Ym(e,o)}while(1);if(Vu(),J=n,yl.current=r,Fe!==null)throw Error(_(261));return je=null,Ge=0,Le}function m1(){for(;Fe!==null;)Xm(Fe)}function h1(){for(;Fe!==null&&!jh();)Xm(Fe)}function Xm(e){var t=Jm(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?qm(e):Fe=t,tc.current=null}function qm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=s1(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Fe=null;return}}else if(n=a1(n,t,mt),n!==null){Fe=n;return}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);Le===0&&(Le=5)}function Kn(e,t,n){var r=ie,o=bt.transition;try{bt.transition=null,ie=1,g1(e,t,n,r)}finally{bt.transition=o,ie=r}return null}function g1(e,t,n,r){do $r();while(wn!==null);if(J&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Xh(e,i),e===je&&(Fe=je=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_i||(_i=!0,e0(tl,function(){return $r(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=bt.transition,bt.transition=null;var l=ie;ie=1;var a=J;J|=4,tc.current=null,c1(e,n),Um(n,e),Ng(Os),rl=!!Ns,Os=Ns=null,e.current=n,d1(n),zh(),J=a,ie=l,bt.transition=i}else e.current=n;if(_i&&(_i=!1,wn=e,vl=o),i=e.pendingLanes,i===0&&(Bn=null),Wh(n.stateNode),ct(e,Ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Sl)throw Sl=!1,e=ru,ru=null,e;return vl&1&&e.tag!==0&&$r(),i=e.pendingLanes,i&1?e===ou?Io++:(Io=0,ou=e):Io=0,Hn(),null}function $r(){if(wn!==null){var e=_f(vl),t=bt.transition,n=ie;try{if(bt.transition=null,ie=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,vl=0,J&6)throw Error(_(331));var o=J;for(J|=4,L=e.current;L!==null;){var i=L,l=i.child;if(L.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(L=u;L!==null;){var m=L;switch(m.tag){case 0:case 11:case 15:Ao(8,m,i)}var h=m.child;if(h!==null)h.return=m,L=h;else for(;L!==null;){m=L;var f=m.sibling,v=m.return;if(Vm(m),m===u){L=null;break}if(f!==null){f.return=v,L=f;break}L=v}}}var g=i.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var R=y.sibling;y.sibling=null,y=R}while(y!==null)}}L=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,L=l;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ao(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,L=d;break e}L=i.return}}var c=e.current;for(L=c;L!==null;){l=L;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,L=p;else e:for(l=c;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$l(9,a)}}catch(P){we(a,a.return,P)}if(a===l){L=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,L=S;break e}L=a.return}}if(J=o,Hn(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Al,e)}catch{}r=!0}return r}finally{ie=n,bt.transition=t}}return!1}function Vd(e,t,n){t=Kr(n,t),t=Am(e,t,1),e=In(e,t,1),t=et(),e!==null&&(li(e,1,t),ct(e,t))}function we(e,t,n){if(e.tag===3)Vd(e,e,n);else for(;t!==null;){if(t.tag===3){Vd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=Kr(n,e),e=bm(t,e,1),t=In(t,e,1),e=et(),t!==null&&(li(t,1,e),ct(t,e));break}}t=t.return}}function y1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Ge&n)===n&&(Le===4||Le===3&&(Ge&130023424)===Ge&&500>Ae()-rc?er(e,0):nc|=n),ct(e,t)}function Zm(e,t){t===0&&(e.mode&1?(t=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):t=1);var n=et();e=fn(e,t),e!==null&&(li(e,t,n),ct(e,n))}function S1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zm(e,n)}function v1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Zm(e,n)}var Jm;Jm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,l1(e,t,n);at=!!(e.flags&131072)}else at=!1,ve&&t.flags&1048576&&nm(t,cl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hi(e,t),e=t.pendingProps;var o=Hr(t,Ze.current);Lr(t,n),o=Xu(null,t,r,e,o,n);var i=qu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(r)?(i=!0,sl(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Uu(t),o.updater=Ol,t.stateNode=o,o._reactInternals=t,Gs(t,r,e,n),t=Qs(null,t,r,!0,i,n)):(t.tag=0,ve&&i&&Lu(t),Je(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=C1(r),e=Lt(r,e),o){case 0:t=Ys(null,t,r,e,n);break e;case 1:t=bd(null,t,r,e,n);break e;case 11:t=_d(null,t,r,e,n);break e;case 14:t=Ad(null,t,r,Lt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),Ys(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),bd(e,t,r,o,n);case 3:e:{if(Nm(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,lm(e,t),fl(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Kr(Error(_(423)),t),t=Id(e,t,r,n,o);break e}else if(r!==o){o=Kr(Error(_(424)),t),t=Id(e,t,r,n,o);break e}else for(gt=bn(t.stateNode.containerInfo.firstChild),yt=t,ve=!0,jt=null,n=cm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wr(),r===o){t=mn(e,t,n);break e}Je(e,t,r,n)}t=t.child}return t;case 5:return dm(t),e===null&&Hs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ls(r,o)?l=null:i!==null&&Ls(r,i)&&(t.flags|=32),Fm(e,t),Je(e,t,l,n),t.child;case 6:return e===null&&Hs(t),null;case 13:return Om(e,t,n);case 4:return Gu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ur(t,null,r,n):Je(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),_d(e,t,r,o,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ce(dl,r._currentValue),r._currentValue=l,i!==null)if(Wt(i.value,l)){if(i.children===o.children&&!st.current){t=mn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=cn(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ws(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ws(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Je(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Lr(t,n),o=It(o),r=r(o),t.flags|=1,Je(e,t,r,n),t.child;case 14:return r=t.type,o=Lt(r,t.pendingProps),o=Lt(r.type,o),Ad(e,t,r,o,n);case 15:return Im(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),Hi(e,t),t.tag=1,ut(r)?(e=!0,sl(t)):e=!1,Lr(t,n),sm(t,r,o),Gs(t,r,o,n),Qs(null,t,r,!0,e,n);case 19:return Lm(e,t,n);case 22:return Bm(e,t,n)}throw Error(_(156,t.tag))};function e0(e,t){return Ef(e,t)}function x1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,r){return new x1(e,t,n,r)}function ac(e){return e=e.prototype,!(!e||!e.isReactComponent)}function C1(e){if(typeof e=="function")return ac(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Eu)return 11;if(e===ku)return 14}return 2}function Nn(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ac(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Cr:return tr(n.children,o,i,t);case Ru:l=8,o|=8;break;case gs:return e=At(12,n,t,o|2),e.elementType=gs,e.lanes=i,e;case ys:return e=At(13,n,t,o),e.elementType=ys,e.lanes=i,e;case Ss:return e=At(19,n,t,o),e.elementType=Ss,e.lanes=i,e;case uf:return zl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case af:l=10;break e;case sf:l=9;break e;case Eu:l=11;break e;case ku:l=14;break e;case Pn:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=At(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function tr(e,t,n,r){return e=At(7,e,r,t),e.lanes=n,e}function zl(e,t,n,r){return e=At(22,e,r,t),e.elementType=uf,e.lanes=n,e.stateNode={isHidden:!1},e}function rs(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function os(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function M1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=La(0),this.expirationTimes=La(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=La(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function sc(e,t,n,r,o,i,l,a,s){return e=new M1(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=At(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(i),e}function P1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function t0(e){if(!e)return Ln;e=e._reactInternals;e:{if(cr(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(ut(n))return em(e,n,t)}return t}function n0(e,t,n,r,o,i,l,a,s){return e=sc(n,r,!0,e,o,i,l,a,s),e.context=t0(null),n=e.current,r=et(),o=Fn(n),i=cn(r,o),i.callback=t??null,In(n,i,o),e.current.lanes=o,li(e,o,r),ct(e,r),e}function Vl(e,t,n,r){var o=t.current,i=et(),l=Fn(o);return n=t0(n),t.context===null?t.context=n:t.pendingContext=n,t=cn(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=In(o,t,l),e!==null&&(Ht(e,o,l,i),ji(e,o,l)),l}function Cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uc(e,t){Hd(e,t),(e=e.alternate)&&Hd(e,t)}function T1(){return null}var r0=typeof reportError=="function"?reportError:function(e){console.error(e)};function cc(e){this._internalRoot=e}Hl.prototype.render=cc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Vl(e,t,null,null)};Hl.prototype.unmount=cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){Vl(null,e,null,null)}),t[pn]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=If();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rn.length&&t!==0&&t<Rn[n].priority;n++);Rn.splice(n,0,e),n===0&&Ff(e)}};function dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wd(){}function R1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Cl(l);i.call(u)}}var l=n0(t,r,e,0,null,!1,!1,"",Wd);return e._reactRootContainer=l,e[pn]=l.current,Go(e.nodeType===8?e.parentNode:e),lr(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Cl(s);a.call(u)}}var s=sc(e,0,!1,null,null,!1,!1,"",Wd);return e._reactRootContainer=s,e[pn]=s.current,Go(e.nodeType===8?e.parentNode:e),lr(function(){Vl(t,s,n,r)}),s}function Ul(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Cl(l);a.call(s)}}Vl(t,l,e,o)}else l=R1(n,t,e,o,r);return Cl(l)}Af=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mo(t.pendingLanes);n!==0&&(_u(t,n|1),ct(t,Ae()),!(J&6)&&(Yr=Ae()+500,Hn()))}break;case 13:lr(function(){var r=fn(e,1);if(r!==null){var o=et();Ht(r,e,1,o)}}),uc(e,1)}};Au=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var n=et();Ht(t,e,134217728,n)}uc(e,134217728)}};bf=function(e){if(e.tag===13){var t=Fn(e),n=fn(e,t);if(n!==null){var r=et();Ht(n,e,t,r)}uc(e,t)}};If=function(){return ie};Bf=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};ws=function(e,t,n){switch(t){case"input":if(Cs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Fl(r);if(!o)throw Error(_(90));df(r),Cs(r,o)}}}break;case"textarea":ff(e,n);break;case"select":t=n.value,t!=null&&Br(e,!!n.multiple,t,!1)}};xf=oc;Cf=lr;var E1={usingClientEntryPoint:!1,Events:[si,Rr,Fl,Sf,vf,oc]},fo={findFiberByHostInstance:Xn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},k1={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tf(e),e===null?null:e.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||T1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{Al=Ai.inject(k1),Zt=Ai}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E1;Ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dc(t))throw Error(_(200));return P1(e,t,null,n)};Ct.createRoot=function(e,t){if(!dc(e))throw Error(_(299));var n=!1,r="",o=r0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=sc(e,1,!1,null,null,n,!1,r,o),e[pn]=t.current,Go(e.nodeType===8?e.parentNode:e),new cc(t)};Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Tf(t),e=e===null?null:e.stateNode,e};Ct.flushSync=function(e){return lr(e)};Ct.hydrate=function(e,t,n){if(!Wl(t))throw Error(_(200));return Ul(null,e,t,!0,n)};Ct.hydrateRoot=function(e,t,n){if(!dc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=r0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=n0(t,null,e,1,n??null,o,!1,i,l),e[pn]=t.current,Go(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Hl(t)};Ct.render=function(e,t,n){if(!Wl(t))throw Error(_(200));return Ul(null,e,t,!1,n)};Ct.unmountComponentAtNode=function(e){if(!Wl(e))throw Error(_(40));return e._reactRootContainer?(lr(function(){Ul(null,null,e,!1,function(){e._reactRootContainer=null,e[pn]=null})}),!0):!1};Ct.unstable_batchedUpdates=oc;Ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wl(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Ul(e,t,n,!1,r)};Ct.version="18.2.0-next-9e3b772b8-20220608";function o0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o0)}catch(e){console.error(e)}}o0(),tf.exports=Ct;var Gl=tf.exports;const bi=Wp(Gl);var Ud=Gl;ms.createRoot=Ud.createRoot,ms.hydrateRoot=Ud.hydrateRoot;const w1={black:"#000",white:"#fff"},ti=w1,D1={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},fr=D1,_1={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},mr=_1,A1={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},hr=A1,b1={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},gr=b1,I1={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},yr=I1,B1={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},mo=B1,F1={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},N1=F1;function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}function an(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function i0(e){if(!an(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=i0(e[n])}),t}function dt(e,t,n={clone:!0}){const r=n.clone?C({},e):e;return an(e)&&an(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(an(t[o])&&o in e&&an(e[o])?r[o]=dt(e[o],t[o],n):n.clone?r[o]=an(t[o])?i0(t[o]):t[o]:r[o]=t[o])}),r}function $n(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var se={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pc=Symbol.for("react.element"),fc=Symbol.for("react.portal"),Kl=Symbol.for("react.fragment"),Yl=Symbol.for("react.strict_mode"),Ql=Symbol.for("react.profiler"),Xl=Symbol.for("react.provider"),ql=Symbol.for("react.context"),O1=Symbol.for("react.server_context"),Zl=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),ea=Symbol.for("react.suspense_list"),ta=Symbol.for("react.memo"),na=Symbol.for("react.lazy"),L1=Symbol.for("react.offscreen"),l0;l0=Symbol.for("react.module.reference");function Ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case pc:switch(e=e.type,e){case Kl:case Ql:case Yl:case Jl:case ea:return e;default:switch(e=e&&e.$$typeof,e){case O1:case ql:case Zl:case na:case ta:case Xl:return e;default:return t}}case fc:return t}}}se.ContextConsumer=ql;se.ContextProvider=Xl;se.Element=pc;se.ForwardRef=Zl;se.Fragment=Kl;se.Lazy=na;se.Memo=ta;se.Portal=fc;se.Profiler=Ql;se.StrictMode=Yl;se.Suspense=Jl;se.SuspenseList=ea;se.isAsyncMode=function(){return!1};se.isConcurrentMode=function(){return!1};se.isContextConsumer=function(e){return Ft(e)===ql};se.isContextProvider=function(e){return Ft(e)===Xl};se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pc};se.isForwardRef=function(e){return Ft(e)===Zl};se.isFragment=function(e){return Ft(e)===Kl};se.isLazy=function(e){return Ft(e)===na};se.isMemo=function(e){return Ft(e)===ta};se.isPortal=function(e){return Ft(e)===fc};se.isProfiler=function(e){return Ft(e)===Ql};se.isStrictMode=function(e){return Ft(e)===Yl};se.isSuspense=function(e){return Ft(e)===Jl};se.isSuspenseList=function(e){return Ft(e)===ea};se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Kl||e===Ql||e===Yl||e===Jl||e===ea||e===L1||typeof e=="object"&&e!==null&&(e.$$typeof===na||e.$$typeof===ta||e.$$typeof===Xl||e.$$typeof===ql||e.$$typeof===Zl||e.$$typeof===l0||e.getModuleId!==void 0)};se.typeOf=Ft;function me(e){if(typeof e!="string")throw new Error($n(7));return e.charAt(0).toUpperCase()+e.slice(1)}function Gd(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function a0(e,t=166){let n;function r(...o){const i=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(i,t)}return r.clear=()=>{clearTimeout(n)},r}function is(e,t){var n,r;return x.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function St(e){return e&&e.ownerDocument||document}function ar(e){return St(e).defaultView||window}function au(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const $1=typeof window<"u"?x.useLayoutEffect:x.useEffect,jn=$1;let Kd=0;function j1(e){const[t,n]=x.useState(e),r=e||t;return x.useEffect(()=>{t==null&&(Kd+=1,n(`mui-${Kd}`))},[t]),r}const Yd=fs["useId".toString()];function z1(e){if(Yd!==void 0){const t=Yd();return e??t}return j1(e)}function Qd({controlled:e,default:t,name:n,state:r="value"}){const{current:o}=x.useRef(e!==void 0),[i,l]=x.useState(t),a=o?e:i,s=x.useCallback(u=>{o||l(u)},[]);return[a,s]}function br(e){const t=x.useRef(e);return jn(()=>{t.current=e}),x.useCallback((...n)=>(0,t.current)(...n),[])}function tt(...e){return x.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{au(n,t)})},e)}let ra=!0,su=!1,Xd;const V1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function H1(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&V1[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function W1(e){e.metaKey||e.altKey||e.ctrlKey||(ra=!0)}function ls(){ra=!1}function U1(){this.visibilityState==="hidden"&&su&&(ra=!0)}function G1(e){e.addEventListener("keydown",W1,!0),e.addEventListener("mousedown",ls,!0),e.addEventListener("pointerdown",ls,!0),e.addEventListener("touchstart",ls,!0),e.addEventListener("visibilitychange",U1,!0)}function K1(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return ra||H1(t)}function Y1(){const e=x.useCallback(o=>{o!=null&&G1(o.ownerDocument)},[]),t=x.useRef(!1);function n(){return t.current?(su=!0,window.clearTimeout(Xd),Xd=window.setTimeout(()=>{su=!1},100),t.current=!1,!0):!1}function r(o){return K1(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function s0(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function u0(e,t){const n=C({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=C({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=o:!o||!Object.keys(o)?n[r]=i:(n[r]=C({},i),Object.keys(o).forEach(l=>{n[r][l]=u0(o[l],i[l])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function Ne(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((i,l)=>{if(l){const a=t(l);a!==""&&i.push(a),n&&n[l]&&i.push(n[l])}return i},[]).join(" ")}),r}const qd=e=>e,Q1=()=>{let e=qd;return{configure(t){e=t},generate(t){return e(t)},reset(){e=qd}}},X1=Q1(),q1=X1,Z1={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function be(e,t,n="Mui"){const r=Z1[t];return r?`${n}-${r}`:`${q1.generate(e)}-${t}`}function Re(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=be(e,o,n)}),r}const Qr="$$material";function W(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function c0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var J1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ey=c0(function(e){return J1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function ty(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function ny(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var ry=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ny(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=ty(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Xe="-ms-",Ml="-moz-",ee="-webkit-",d0="comm",mc="rule",hc="decl",oy="@import",p0="@keyframes",iy="@layer",ly=Math.abs,oa=String.fromCharCode,ay=Object.assign;function sy(e,t){return Ue(e,0)^45?(((t<<2^Ue(e,0))<<2^Ue(e,1))<<2^Ue(e,2))<<2^Ue(e,3):0}function f0(e){return e.trim()}function uy(e,t){return(e=t.exec(e))?e[0]:e}function te(e,t,n){return e.replace(t,n)}function uu(e,t){return e.indexOf(t)}function Ue(e,t){return e.charCodeAt(t)|0}function ni(e,t,n){return e.slice(t,n)}function Yt(e){return e.length}function gc(e){return e.length}function Ii(e,t){return t.push(e),e}function cy(e,t){return e.map(t).join("")}var ia=1,Xr=1,m0=0,pt=0,Be=0,no="";function la(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ia,column:Xr,length:l,return:""}}function ho(e,t){return ay(la("",null,null,"",null,null,0),e,{length:-e.length},t)}function dy(){return Be}function py(){return Be=pt>0?Ue(no,--pt):0,Xr--,Be===10&&(Xr=1,ia--),Be}function vt(){return Be=pt<m0?Ue(no,pt++):0,Xr++,Be===10&&(Xr=1,ia++),Be}function en(){return Ue(no,pt)}function Ki(){return pt}function ci(e,t){return ni(no,e,t)}function ri(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function h0(e){return ia=Xr=1,m0=Yt(no=e),pt=0,[]}function g0(e){return no="",e}function Yi(e){return f0(ci(pt-1,cu(e===91?e+2:e===40?e+1:e)))}function fy(e){for(;(Be=en())&&Be<33;)vt();return ri(e)>2||ri(Be)>3?"":" "}function my(e,t){for(;--t&&vt()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return ci(e,Ki()+(t<6&&en()==32&&vt()==32))}function cu(e){for(;vt();)switch(Be){case e:return pt;case 34:case 39:e!==34&&e!==39&&cu(Be);break;case 40:e===41&&cu(e);break;case 92:vt();break}return pt}function hy(e,t){for(;vt()&&e+Be!==47+10;)if(e+Be===42+42&&en()===47)break;return"/*"+ci(t,pt-1)+"*"+oa(e===47?e:vt())}function gy(e){for(;!ri(en());)vt();return ci(e,pt)}function yy(e){return g0(Qi("",null,null,null,[""],e=h0(e),0,[0],e))}function Qi(e,t,n,r,o,i,l,a,s){for(var u=0,m=0,h=l,f=0,v=0,g=0,y=1,R=1,d=1,c=0,p="",S=o,P=i,T=r,M=p;R;)switch(g=c,c=vt()){case 40:if(g!=108&&Ue(M,h-1)==58){uu(M+=te(Yi(c),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:M+=Yi(c);break;case 9:case 10:case 13:case 32:M+=fy(g);break;case 92:M+=my(Ki()-1,7);continue;case 47:switch(en()){case 42:case 47:Ii(Sy(hy(vt(),Ki()),t,n),s);break;default:M+="/"}break;case 123*y:a[u++]=Yt(M)*d;case 125*y:case 59:case 0:switch(c){case 0:case 125:R=0;case 59+m:d==-1&&(M=te(M,/\f/g,"")),v>0&&Yt(M)-h&&Ii(v>32?Jd(M+";",r,n,h-1):Jd(te(M," ","")+";",r,n,h-2),s);break;case 59:M+=";";default:if(Ii(T=Zd(M,t,n,u,m,o,a,p,S=[],P=[],h),i),c===123)if(m===0)Qi(M,t,T,T,S,i,h,a,P);else switch(f===99&&Ue(M,3)===110?100:f){case 100:case 108:case 109:case 115:Qi(e,T,T,r&&Ii(Zd(e,T,T,0,0,o,a,p,o,S=[],h),P),o,P,h,a,r?S:P);break;default:Qi(M,T,T,T,[""],P,0,a,P)}}u=m=v=0,y=d=1,p=M="",h=l;break;case 58:h=1+Yt(M),v=g;default:if(y<1){if(c==123)--y;else if(c==125&&y++==0&&py()==125)continue}switch(M+=oa(c),c*y){case 38:d=m>0?1:(M+="\f",-1);break;case 44:a[u++]=(Yt(M)-1)*d,d=1;break;case 64:en()===45&&(M+=Yi(vt())),f=en(),m=h=Yt(p=M+=gy(Ki())),c++;break;case 45:g===45&&Yt(M)==2&&(y=0)}}return i}function Zd(e,t,n,r,o,i,l,a,s,u,m){for(var h=o-1,f=o===0?i:[""],v=gc(f),g=0,y=0,R=0;g<r;++g)for(var d=0,c=ni(e,h+1,h=ly(y=l[g])),p=e;d<v;++d)(p=f0(y>0?f[d]+" "+c:te(c,/&\f/g,f[d])))&&(s[R++]=p);return la(e,t,n,o===0?mc:a,s,u,m)}function Sy(e,t,n){return la(e,t,n,d0,oa(dy()),ni(e,2,-2),0)}function Jd(e,t,n,r){return la(e,t,n,hc,ni(e,0,r),ni(e,r+1,-1),r)}function jr(e,t){for(var n="",r=gc(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function vy(e,t,n,r){switch(e.type){case iy:if(e.children.length)break;case oy:case hc:return e.return=e.return||e.value;case d0:return"";case p0:return e.return=e.value+"{"+jr(e.children,r)+"}";case mc:e.value=e.props.join(",")}return Yt(n=jr(e.children,r))?e.return=e.value+"{"+n+"}":""}function xy(e){var t=gc(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Cy(e){return function(t){t.root||(t=t.return)&&e(t)}}var My=function(t,n,r){for(var o=0,i=0;o=i,i=en(),o===38&&i===12&&(n[r]=1),!ri(i);)vt();return ci(t,pt)},Py=function(t,n){var r=-1,o=44;do switch(ri(o)){case 0:o===38&&en()===12&&(n[r]=1),t[r]+=My(pt-1,n,r);break;case 2:t[r]+=Yi(o);break;case 4:if(o===44){t[++r]=en()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=oa(o)}while(o=vt());return t},Ty=function(t,n){return g0(Py(h0(t),n))},ep=new WeakMap,Ry=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!ep.get(r))&&!o){ep.set(t,!0);for(var i=[],l=Ty(n,i),a=r.props,s=0,u=0;s<l.length;s++)for(var m=0;m<a.length;m++,u++)t.props[u]=i[s]?l[s].replace(/&\f/g,a[m]):a[m]+" "+l[s]}}},Ey=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function y0(e,t){switch(sy(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+Ml+e+Xe+e+e;case 6828:case 4268:return ee+e+Xe+e+e;case 6165:return ee+e+Xe+"flex-"+e+e;case 5187:return ee+e+te(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+Xe+"flex-$1$2")+e;case 5443:return ee+e+Xe+"flex-item-"+te(e,/flex-|-self/,"")+e;case 4675:return ee+e+Xe+"flex-line-pack"+te(e,/align-content|flex-|-self/,"")+e;case 5548:return ee+e+Xe+te(e,"shrink","negative")+e;case 5292:return ee+e+Xe+te(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+te(e,"-grow","")+ee+e+Xe+te(e,"grow","positive")+e;case 4554:return ee+te(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return te(te(te(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return te(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return te(te(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+Xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4095:case 3583:case 4068:case 2532:return te(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Yt(e)-1-t>6)switch(Ue(e,t+1)){case 109:if(Ue(e,t+4)!==45)break;case 102:return te(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Ml+(Ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~uu(e,"stretch")?y0(te(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ue(e,t+1)!==115)break;case 6444:switch(Ue(e,Yt(e)-3-(~uu(e,"!important")&&10))){case 107:return te(e,":",":"+ee)+e;case 101:return te(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ee+(Ue(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+Xe+"$2box$3")+e}break;case 5936:switch(Ue(e,t+11)){case 114:return ee+e+Xe+te(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+Xe+te(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+Xe+te(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ee+e+Xe+e+e}return e}var ky=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case hc:t.return=y0(t.value,t.length);break;case p0:return jr([ho(t,{value:te(t.value,"@","@"+ee)})],o);case mc:if(t.length)return cy(t.props,function(i){switch(uy(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return jr([ho(t,{props:[te(i,/:(read-\w+)/,":"+Ml+"$1")]})],o);case"::placeholder":return jr([ho(t,{props:[te(i,/:(plac\w+)/,":"+ee+"input-$1")]}),ho(t,{props:[te(i,/:(plac\w+)/,":"+Ml+"$1")]}),ho(t,{props:[te(i,/:(plac\w+)/,Xe+"input-$1")]})],o)}return""})}},wy=[ky],Dy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var R=y.getAttribute("data-emotion");R.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||wy,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var R=y.getAttribute("data-emotion").split(" "),d=1;d<R.length;d++)i[R[d]]=!0;a.push(y)});var s,u=[Ry,Ey];{var m,h=[vy,Cy(function(y){m.insert(y)})],f=xy(u.concat(o,h)),v=function(R){return jr(yy(R),f)};s=function(R,d,c,p){m=c,v(R?R+"{"+d.styles+"}":d.styles),p&&(g.inserted[d.name]=!0)}}var g={key:n,sheet:new ry({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return g.sheet.hydrate(a),g},S0={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze=typeof Symbol=="function"&&Symbol.for,yc=ze?Symbol.for("react.element"):60103,Sc=ze?Symbol.for("react.portal"):60106,aa=ze?Symbol.for("react.fragment"):60107,sa=ze?Symbol.for("react.strict_mode"):60108,ua=ze?Symbol.for("react.profiler"):60114,ca=ze?Symbol.for("react.provider"):60109,da=ze?Symbol.for("react.context"):60110,vc=ze?Symbol.for("react.async_mode"):60111,pa=ze?Symbol.for("react.concurrent_mode"):60111,fa=ze?Symbol.for("react.forward_ref"):60112,ma=ze?Symbol.for("react.suspense"):60113,_y=ze?Symbol.for("react.suspense_list"):60120,ha=ze?Symbol.for("react.memo"):60115,ga=ze?Symbol.for("react.lazy"):60116,Ay=ze?Symbol.for("react.block"):60121,by=ze?Symbol.for("react.fundamental"):60117,Iy=ze?Symbol.for("react.responder"):60118,By=ze?Symbol.for("react.scope"):60119;function Pt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case yc:switch(e=e.type,e){case vc:case pa:case aa:case ua:case sa:case ma:return e;default:switch(e=e&&e.$$typeof,e){case da:case fa:case ga:case ha:case ca:return e;default:return t}}case Sc:return t}}}function v0(e){return Pt(e)===pa}le.AsyncMode=vc;le.ConcurrentMode=pa;le.ContextConsumer=da;le.ContextProvider=ca;le.Element=yc;le.ForwardRef=fa;le.Fragment=aa;le.Lazy=ga;le.Memo=ha;le.Portal=Sc;le.Profiler=ua;le.StrictMode=sa;le.Suspense=ma;le.isAsyncMode=function(e){return v0(e)||Pt(e)===vc};le.isConcurrentMode=v0;le.isContextConsumer=function(e){return Pt(e)===da};le.isContextProvider=function(e){return Pt(e)===ca};le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===yc};le.isForwardRef=function(e){return Pt(e)===fa};le.isFragment=function(e){return Pt(e)===aa};le.isLazy=function(e){return Pt(e)===ga};le.isMemo=function(e){return Pt(e)===ha};le.isPortal=function(e){return Pt(e)===Sc};le.isProfiler=function(e){return Pt(e)===ua};le.isStrictMode=function(e){return Pt(e)===sa};le.isSuspense=function(e){return Pt(e)===ma};le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===aa||e===pa||e===ua||e===sa||e===ma||e===_y||typeof e=="object"&&e!==null&&(e.$$typeof===ga||e.$$typeof===ha||e.$$typeof===ca||e.$$typeof===da||e.$$typeof===fa||e.$$typeof===by||e.$$typeof===Iy||e.$$typeof===By||e.$$typeof===Ay)};le.typeOf=Pt;S0.exports=le;var Fy=S0.exports,x0=Fy,Ny={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Oy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},C0={};C0[x0.ForwardRef]=Ny;C0[x0.Memo]=Oy;var Ly=!0;function $y(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var M0=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Ly===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},P0=function(t,n,r){M0(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function jy(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var zy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vy=/[A-Z]|^ms/g,Hy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,T0=function(t){return t.charCodeAt(1)===45},tp=function(t){return t!=null&&typeof t!="boolean"},as=c0(function(e){return T0(e)?e:e.replace(Vy,"-$&").toLowerCase()}),np=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Hy,function(r,o,i){return Qt={name:o,styles:i,next:Qt},o})}return zy[t]!==1&&!T0(t)&&typeof n=="number"&&n!==0?n+"px":n};function oi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Qt={name:n.name,styles:n.styles,next:Qt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Qt={name:r.name,styles:r.styles,next:Qt},r=r.next;var o=n.styles+";";return o}return Wy(e,t,n)}case"function":{if(e!==void 0){var i=Qt,l=n(e);return Qt=i,oi(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Wy(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=oi(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":tp(l)&&(r+=as(i)+":"+np(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)tp(l[a])&&(r+=as(i)+":"+np(i,l[a])+";");else{var s=oi(e,t,l);switch(i){case"animation":case"animationName":{r+=as(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var rp=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Qt,xc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";Qt=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=oi(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=oi(r,n,t[a]),o&&(i+=l[a]);rp.lastIndex=0;for(var s="",u;(u=rp.exec(i))!==null;)s+="-"+u[1];var m=jy(i)+s;return{name:m,styles:i,next:Qt}},Uy=function(t){return t()},R0=fs["useInsertionEffect"]?fs["useInsertionEffect"]:!1,Gy=R0||Uy,op=R0||x.useLayoutEffect,E0=x.createContext(typeof HTMLElement<"u"?Dy({key:"css"}):null);E0.Provider;var k0=function(t){return x.forwardRef(function(n,r){var o=x.useContext(E0);return t(n,o,r)})},ya=x.createContext({}),Ky=k0(function(e,t){var n=e.styles,r=xc([n],void 0,x.useContext(ya)),o=x.useRef();return op(function(){var i=t.key+"-global",l=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,s=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(l.before=t.sheet.tags[0]),s!==null&&(a=!0,s.setAttribute("data-emotion",i),l.hydrate([s])),o.current=[l,a],function(){l.flush()}},[t]),op(function(){var i=o.current,l=i[0],a=i[1];if(a){i[1]=!1;return}if(r.next!==void 0&&P0(t,r.next,!0),l.tags.length){var s=l.tags[l.tags.length-1].nextElementSibling;l.before=s,l.flush()}t.insert("",r,l,!1)},[t,r.name]),null});function Yy(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return xc(t)}var Cc=function(){var t=Yy.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Qy=ey,Xy=function(t){return t!=="theme"},ip=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Qy:Xy},lp=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(l){return t.__emotion_forwardProp(l)&&i(l)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},qy=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return M0(n,r,o),Gy(function(){return P0(n,r,o)}),null},Zy=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,l;n!==void 0&&(i=n.label,l=n.target);var a=lp(t,n,r),s=a||ip(o),u=!s("as");return function(){var m=arguments,h=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&h.push("label:"+i+";"),m[0]==null||m[0].raw===void 0)h.push.apply(h,m);else{h.push(m[0][0]);for(var f=m.length,v=1;v<f;v++)h.push(m[v],m[0][v])}var g=k0(function(y,R,d){var c=u&&y.as||o,p="",S=[],P=y;if(y.theme==null){P={};for(var T in y)P[T]=y[T];P.theme=x.useContext(ya)}typeof y.className=="string"?p=$y(R.registered,S,y.className):y.className!=null&&(p=y.className+" ");var M=xc(h.concat(S),R.registered,P);p+=R.key+"-"+M.name,l!==void 0&&(p+=" "+l);var w=u&&a===void 0?ip(c):s,A={};for(var E in y)u&&E==="as"||w(E)&&(A[E]=y[E]);return A.className=p,A.ref=d,x.createElement(x.Fragment,null,x.createElement(qy,{cache:R,serialized:M,isStringTag:typeof c=="string"}),x.createElement(c,A))});return g.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=o,g.__emotion_styles=h,g.__emotion_forwardProp=a,Object.defineProperty(g,"toString",{value:function(){return"."+l}}),g.withComponent=function(y,R){return e(y,C({},n,R,{shouldForwardProp:lp(g,R,!0)})).apply(void 0,h)},g}},Jy=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],du=Zy.bind();Jy.forEach(function(e){du[e]=du(e)});function eS(e){return e==null||Object.keys(e).length===0}function tS(e){const{styles:t,defaultTheme:n={}}=e,r=typeof t=="function"?o=>t(eS(o)?n:o):t;return D.jsx(Ky,{styles:r})}/**
 * @mui/styled-engine v5.14.13
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function nS(e,t){return du(e,t)}const rS=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},oS=["values","unit","step"],iS=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>C({},n,{[r.key]:r.val}),{})};function lS(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=W(e,oS),i=iS(t),l=Object.keys(i);function a(f){return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n})`}function s(f){return`@media (max-width:${(typeof t[f]=="number"?t[f]:f)-r/100}${n})`}function u(f,v){const g=l.indexOf(v);return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n}) and (max-width:${(g!==-1&&typeof t[l[g]]=="number"?t[l[g]]:v)-r/100}${n})`}function m(f){return l.indexOf(f)+1<l.length?u(f,l[l.indexOf(f)+1]):a(f)}function h(f){const v=l.indexOf(f);return v===0?a(l[1]):v===l.length-1?s(l[v]):u(f,l[l.indexOf(f)+1]).replace("@media","@media not all and")}return C({keys:l,values:i,up:a,down:s,between:u,only:m,not:h,unit:n},o)}const aS={borderRadius:4},sS=aS;function Bo(e,t){return t?dt(e,t,{clone:!1}):e}const Mc={xs:0,sm:600,md:900,lg:1200,xl:1536},ap={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Mc[e]}px)`};function hn(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||ap;return t.reduce((l,a,s)=>(l[i.up(i.keys[s])]=n(t[s]),l),{})}if(typeof t=="object"){const i=r.breakpoints||ap;return Object.keys(t).reduce((l,a)=>{if(Object.keys(i.values||Mc).indexOf(a)!==-1){const s=i.up(a);l[s]=n(t[a],a)}else{const s=a;l[s]=t[s]}return l},{})}return n(t)}function uS(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const i=e.up(o);return r[i]={},r},{}))||{}}function cS(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function Sa(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function Pl(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=Sa(e,n)||r,t&&(o=t(o,r,e)),o}function re(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=l=>{if(l[t]==null)return null;const a=l[t],s=l.theme,u=Sa(s,r)||{};return hn(l,a,h=>{let f=Pl(u,o,h);return h===f&&typeof h=="string"&&(f=Pl(u,o,`${t}${h==="default"?"":me(h)}`,h)),n===!1?f:{[n]:f}})};return i.propTypes={},i.filterProps=[t],i}function dS(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const pS={m:"margin",p:"padding"},fS={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},sp={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},mS=dS(e=>{if(e.length>2)if(sp[e])e=sp[e];else return[e];const[t,n]=e.split(""),r=pS[t],o=fS[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),Pc=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Tc=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Pc,...Tc];function di(e,t,n,r){var o;const i=(o=Sa(e,t,!1))!=null?o:n;return typeof i=="number"?l=>typeof l=="string"?l:i*l:Array.isArray(i)?l=>typeof l=="string"?l:i[l]:typeof i=="function"?i:()=>{}}function w0(e){return di(e,"spacing",8)}function pi(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function hS(e,t){return n=>e.reduce((r,o)=>(r[o]=pi(t,n),r),{})}function gS(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=mS(n),i=hS(o,r),l=e[n];return hn(e,l,i)}function D0(e,t){const n=w0(e.theme);return Object.keys(e).map(r=>gS(e,t,r,n)).reduce(Bo,{})}function Ee(e){return D0(e,Pc)}Ee.propTypes={};Ee.filterProps=Pc;function ke(e){return D0(e,Tc)}ke.propTypes={};ke.filterProps=Tc;function yS(e=8){if(e.mui)return e;const t=w0({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const l=t(i);return typeof l=="number"?`${l}px`:l}).join(" ");return n.mui=!0,n}function va(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>t[i]?Bo(o,t[i](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function qt(e){return typeof e!="number"?e:`${e}px solid`}const SS=re({prop:"border",themeKey:"borders",transform:qt}),vS=re({prop:"borderTop",themeKey:"borders",transform:qt}),xS=re({prop:"borderRight",themeKey:"borders",transform:qt}),CS=re({prop:"borderBottom",themeKey:"borders",transform:qt}),MS=re({prop:"borderLeft",themeKey:"borders",transform:qt}),PS=re({prop:"borderColor",themeKey:"palette"}),TS=re({prop:"borderTopColor",themeKey:"palette"}),RS=re({prop:"borderRightColor",themeKey:"palette"}),ES=re({prop:"borderBottomColor",themeKey:"palette"}),kS=re({prop:"borderLeftColor",themeKey:"palette"}),xa=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=di(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:pi(t,r)});return hn(e,e.borderRadius,n)}return null};xa.propTypes={};xa.filterProps=["borderRadius"];va(SS,vS,xS,CS,MS,PS,TS,RS,ES,kS,xa);const Ca=e=>{if(e.gap!==void 0&&e.gap!==null){const t=di(e.theme,"spacing",8),n=r=>({gap:pi(t,r)});return hn(e,e.gap,n)}return null};Ca.propTypes={};Ca.filterProps=["gap"];const Ma=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=di(e.theme,"spacing",8),n=r=>({columnGap:pi(t,r)});return hn(e,e.columnGap,n)}return null};Ma.propTypes={};Ma.filterProps=["columnGap"];const Pa=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=di(e.theme,"spacing",8),n=r=>({rowGap:pi(t,r)});return hn(e,e.rowGap,n)}return null};Pa.propTypes={};Pa.filterProps=["rowGap"];const wS=re({prop:"gridColumn"}),DS=re({prop:"gridRow"}),_S=re({prop:"gridAutoFlow"}),AS=re({prop:"gridAutoColumns"}),bS=re({prop:"gridAutoRows"}),IS=re({prop:"gridTemplateColumns"}),BS=re({prop:"gridTemplateRows"}),FS=re({prop:"gridTemplateAreas"}),NS=re({prop:"gridArea"});va(Ca,Ma,Pa,wS,DS,_S,AS,bS,IS,BS,FS,NS);function zr(e,t){return t==="grey"?t:e}const OS=re({prop:"color",themeKey:"palette",transform:zr}),LS=re({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:zr}),$S=re({prop:"backgroundColor",themeKey:"palette",transform:zr});va(OS,LS,$S);function ht(e){return e<=1&&e!==0?`${e*100}%`:e}const jS=re({prop:"width",transform:ht}),Rc=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const i=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||Mc[n];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:ht(n)}};return hn(e,e.maxWidth,t)}return null};Rc.filterProps=["maxWidth"];const zS=re({prop:"minWidth",transform:ht}),VS=re({prop:"height",transform:ht}),HS=re({prop:"maxHeight",transform:ht}),WS=re({prop:"minHeight",transform:ht});re({prop:"size",cssProperty:"width",transform:ht});re({prop:"size",cssProperty:"height",transform:ht});const US=re({prop:"boxSizing"});va(jS,Rc,zS,VS,HS,WS,US);const GS={border:{themeKey:"borders",transform:qt},borderTop:{themeKey:"borders",transform:qt},borderRight:{themeKey:"borders",transform:qt},borderBottom:{themeKey:"borders",transform:qt},borderLeft:{themeKey:"borders",transform:qt},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:xa},color:{themeKey:"palette",transform:zr},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:zr},backgroundColor:{themeKey:"palette",transform:zr},p:{style:ke},pt:{style:ke},pr:{style:ke},pb:{style:ke},pl:{style:ke},px:{style:ke},py:{style:ke},padding:{style:ke},paddingTop:{style:ke},paddingRight:{style:ke},paddingBottom:{style:ke},paddingLeft:{style:ke},paddingX:{style:ke},paddingY:{style:ke},paddingInline:{style:ke},paddingInlineStart:{style:ke},paddingInlineEnd:{style:ke},paddingBlock:{style:ke},paddingBlockStart:{style:ke},paddingBlockEnd:{style:ke},m:{style:Ee},mt:{style:Ee},mr:{style:Ee},mb:{style:Ee},ml:{style:Ee},mx:{style:Ee},my:{style:Ee},margin:{style:Ee},marginTop:{style:Ee},marginRight:{style:Ee},marginBottom:{style:Ee},marginLeft:{style:Ee},marginX:{style:Ee},marginY:{style:Ee},marginInline:{style:Ee},marginInlineStart:{style:Ee},marginInlineEnd:{style:Ee},marginBlock:{style:Ee},marginBlockStart:{style:Ee},marginBlockEnd:{style:Ee},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Ca},rowGap:{style:Pa},columnGap:{style:Ma},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:ht},maxWidth:{style:Rc},minWidth:{transform:ht},height:{transform:ht},maxHeight:{transform:ht},minHeight:{transform:ht},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Ta=GS;function KS(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function YS(e,t){return typeof e=="function"?e(t):e}function QS(){function e(n,r,o,i){const l={[n]:r,theme:o},a=i[n];if(!a)return{[n]:r};const{cssProperty:s=n,themeKey:u,transform:m,style:h}=a;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const f=Sa(o,u)||{};return h?h(l):hn(l,r,g=>{let y=Pl(f,m,g);return g===y&&typeof g=="string"&&(y=Pl(f,m,`${n}${g==="default"?"":me(g)}`,g)),s===!1?y:{[s]:y}})}function t(n){var r;const{sx:o,theme:i={}}=n||{};if(!o)return null;const l=(r=i.unstable_sxConfig)!=null?r:Ta;function a(s){let u=s;if(typeof s=="function")u=s(i);else if(typeof s!="object")return s;if(!u)return null;const m=uS(i.breakpoints),h=Object.keys(m);let f=m;return Object.keys(u).forEach(v=>{const g=YS(u[v],i);if(g!=null)if(typeof g=="object")if(l[v])f=Bo(f,e(v,g,i,l));else{const y=hn({theme:i},g,R=>({[v]:R}));KS(y,g)?f[v]=t({sx:g,theme:i}):f=Bo(f,y)}else f=Bo(f,e(v,g,i,l))}),cS(h,f)}return Array.isArray(o)?o.map(a):a(o)}return t}const _0=QS();_0.filterProps=["sx"];const Ec=_0,XS=["breakpoints","palette","spacing","shape"];function Ra(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=e,l=W(e,XS),a=lS(n),s=yS(o);let u=dt({breakpoints:a,direction:"ltr",components:{},palette:C({mode:"light"},r),spacing:s,shape:C({},sS,i)},l);return u=t.reduce((m,h)=>dt(m,h),u),u.unstable_sxConfig=C({},Ta,l==null?void 0:l.unstable_sxConfig),u.unstable_sx=function(h){return Ec({sx:h,theme:this})},u}function qS(e){return Object.keys(e).length===0}function A0(e=null){const t=x.useContext(ya);return!t||qS(t)?e:t}const ZS=Ra();function kc(e=ZS){return A0(e)}function JS({styles:e,themeId:t,defaultTheme:n={}}){const r=kc(n),o=typeof e=="function"?e(t&&r[t]||r):e;return D.jsx(tS,{styles:o})}const ev=["sx"],tv=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:Ta;return Object.keys(e).forEach(i=>{o[i]?r.systemProps[i]=e[i]:r.otherProps[i]=e[i]}),r};function nv(e){const{sx:t}=e,n=W(e,ev),{systemProps:r,otherProps:o}=tv(n);let i;return Array.isArray(t)?i=[r,...t]:typeof t=="function"?i=(...l)=>{const a=t(...l);return an(a)?C({},r,a):r}:i=C({},r,t),C({},o,{sx:i})}function b0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=b0(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Z(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=b0(e))&&(r&&(r+=" "),r+=t);return r}const rv=["variant"];function up(e){return e.length===0}function I0(e){const{variant:t}=e,n=W(e,rv);let r=t||"";return Object.keys(n).sort().forEach(o=>{o==="color"?r+=up(r)?e[o]:me(e[o]):r+=`${up(r)?o:me(o)}${me(e[o].toString())}`}),r}const ov=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function iv(e){return Object.keys(e).length===0}function lv(e){return typeof e=="string"&&e.charCodeAt(0)>96}const av=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,Tl=e=>{const t={};return e&&e.forEach(n=>{const r=I0(n.props);t[r]=n.style}),t},sv=(e,t)=>{let n=[];return t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants),Tl(n)},Rl=(e,t,n)=>{const{ownerState:r={}}=e,o=[];return n&&n.forEach(i=>{let l=!0;Object.keys(i.props).forEach(a=>{r[a]!==i.props[a]&&e[a]!==i.props[a]&&(l=!1)}),l&&o.push(t[I0(i.props)])}),o},uv=(e,t,n,r)=>{var o;const i=n==null||(o=n.components)==null||(o=o[r])==null?void 0:o.variants;return Rl(e,t,i)};function Fo(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const cv=Ra(),dv=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function Xi({defaultTheme:e,theme:t,themeId:n}){return iv(t)?e:t[n]||t}function pv(e){return e?(t,n)=>n[e]:null}const cp=({styledArg:e,props:t,defaultTheme:n,themeId:r})=>{const o=e(C({},t,{theme:Xi(C({},t,{defaultTheme:n,themeId:r}))}));let i;if(o&&o.variants&&(i=o.variants,delete o.variants),i){const l=Rl(t,Tl(i),i);return[o,...l]}return o};function B0(e={}){const{themeId:t,defaultTheme:n=cv,rootShouldForwardProp:r=Fo,slotShouldForwardProp:o=Fo}=e,i=l=>Ec(C({},l,{theme:Xi(C({},l,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,(l,a={})=>{rS(l,S=>S.filter(P=>!(P!=null&&P.__mui_systemSx)));const{name:s,slot:u,skipVariantsResolver:m,skipSx:h,overridesResolver:f=pv(dv(u))}=a,v=W(a,ov),g=m!==void 0?m:u&&u!=="Root"&&u!=="root"||!1,y=h||!1;let R,d=Fo;u==="Root"||u==="root"?d=r:u?d=o:lv(l)&&(d=void 0);const c=nS(l,C({shouldForwardProp:d,label:R},v)),p=(S,...P)=>{const T=P?P.map(E=>{if(typeof E=="function"&&E.__emotion_real!==E)return F=>cp({styledArg:E,props:F,defaultTheme:n,themeId:t});if(an(E)){let F=E,$;return E&&E.variants&&($=E.variants,delete F.variants,F=N=>{let I=E;return Rl(N,Tl($),$).forEach(j=>{I=dt(I,j)}),I}),F}return E}):[];let M=S;if(an(S)){let E;S&&S.variants&&(E=S.variants,delete M.variants,M=F=>{let $=S;return Rl(F,Tl(E),E).forEach(I=>{$=dt($,I)}),$})}else typeof S=="function"&&S.__emotion_real!==S&&(M=E=>cp({styledArg:S,props:E,defaultTheme:n,themeId:t}));s&&f&&T.push(E=>{const F=Xi(C({},E,{defaultTheme:n,themeId:t})),$=av(s,F);if($){const N={};return Object.entries($).forEach(([I,B])=>{N[I]=typeof B=="function"?B(C({},E,{theme:F})):B}),f(E,N)}return null}),s&&!g&&T.push(E=>{const F=Xi(C({},E,{defaultTheme:n,themeId:t}));return uv(E,sv(s,F),F,s)}),y||T.push(i);const w=T.length-P.length;if(Array.isArray(S)&&w>0){const E=new Array(w).fill("");M=[...S,...E],M.raw=[...S.raw,...E]}const A=c(M,...T);return l.muiName&&(A.muiName=l.muiName),A};return c.withConfig&&(p.withConfig=c.withConfig),p}}const fv=B0(),mv=fv;function hv(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:u0(t.components[n].defaultProps,r)}function F0({props:e,name:t,defaultTheme:n,themeId:r}){let o=kc(n);return r&&(o=o[r]||o),hv({theme:o,name:t,props:e})}function wc(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function gv(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function sr(e){if(e.type)return e;if(e.charAt(0)==="#")return sr(gv(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error($n(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error($n(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}function Ea(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function yv(e){e=sr(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),l=(u,m=(u+n/30)%12)=>o-i*Math.max(Math.min(m-3,9-m,1),-1);let a="rgb";const s=[Math.round(l(0)*255),Math.round(l(8)*255),Math.round(l(4)*255)];return e.type==="hsla"&&(a+="a",s.push(t[3])),Ea({type:a,values:s})}function dp(e){e=sr(e);let t=e.type==="hsl"||e.type==="hsla"?sr(yv(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Sv(e,t){const n=dp(e),r=dp(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Ir(e,t){return e=sr(e),t=wc(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Ea(e)}function vv(e,t){if(e=sr(e),t=wc(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Ea(e)}function xv(e,t){if(e=sr(e),t=wc(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Ea(e)}const Cv=x.createContext(null),N0=Cv;function O0(){return x.useContext(N0)}const Mv=typeof Symbol=="function"&&Symbol.for,Pv=Mv?Symbol.for("mui.nested"):"__THEME_NESTED__";function Tv(e,t){return typeof t=="function"?t(e):C({},e,t)}function Rv(e){const{children:t,theme:n}=e,r=O0(),o=x.useMemo(()=>{const i=r===null?n:Tv(r,n);return i!=null&&(i[Pv]=r!==null),i},[n,r]);return D.jsx(N0.Provider,{value:o,children:t})}const pp={};function fp(e,t,n,r=!1){return x.useMemo(()=>{const o=e&&t[e]||t;if(typeof n=="function"){const i=n(o),l=e?C({},t,{[e]:i}):i;return r?()=>l:l}return e?C({},t,{[e]:n}):C({},t,n)},[e,t,n,r])}function Ev(e){const{children:t,theme:n,themeId:r}=e,o=A0(pp),i=O0()||pp,l=fp(r,o,n),a=fp(r,i,n,!0);return D.jsx(Rv,{theme:a,children:D.jsx(ya.Provider,{value:l,children:t})})}const kv=["className","component","disableGutters","fixed","maxWidth","classes"],wv=Ra(),Dv=mv("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${me(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),_v=e=>F0({props:e,name:"MuiContainer",defaultTheme:wv}),Av=(e,t)=>{const n=s=>be(t,s),{classes:r,fixed:o,disableGutters:i,maxWidth:l}=e,a={root:["root",l&&`maxWidth${me(String(l))}`,o&&"fixed",i&&"disableGutters"]};return Ne(a,n,r)};function bv(e={}){const{createStyledComponent:t=Dv,useThemeProps:n=_v,componentName:r="MuiContainer"}=e,o=t(({theme:l,ownerState:a})=>C({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:l.spacing(2),paddingRight:l.spacing(2),[l.breakpoints.up("sm")]:{paddingLeft:l.spacing(3),paddingRight:l.spacing(3)}}),({theme:l,ownerState:a})=>a.fixed&&Object.keys(l.breakpoints.values).reduce((s,u)=>{const m=u,h=l.breakpoints.values[m];return h!==0&&(s[l.breakpoints.up(m)]={maxWidth:`${h}${l.breakpoints.unit}`}),s},{}),({theme:l,ownerState:a})=>C({},a.maxWidth==="xs"&&{[l.breakpoints.up("xs")]:{maxWidth:Math.max(l.breakpoints.values.xs,444)}},a.maxWidth&&a.maxWidth!=="xs"&&{[l.breakpoints.up(a.maxWidth)]:{maxWidth:`${l.breakpoints.values[a.maxWidth]}${l.breakpoints.unit}`}}));return x.forwardRef(function(a,s){const u=n(a),{className:m,component:h="div",disableGutters:f=!1,fixed:v=!1,maxWidth:g="lg"}=u,y=W(u,kv),R=C({},u,{component:h,disableGutters:f,fixed:v,maxWidth:g}),d=Av(R,r);return D.jsx(o,C({as:h,ownerState:R,className:Z(d.root,m),ref:s},y))})}function Iv(e,t){return C({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const Bv=["mode","contrastThreshold","tonalOffset"],mp={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ti.white,default:ti.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},ss={text:{primary:ti.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ti.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function hp(e,t,n,r){const o=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=xv(e.main,o):t==="dark"&&(e.dark=vv(e.main,i)))}function Fv(e="light"){return e==="dark"?{main:hr[200],light:hr[50],dark:hr[400]}:{main:hr[700],light:hr[400],dark:hr[800]}}function Nv(e="light"){return e==="dark"?{main:mr[200],light:mr[50],dark:mr[400]}:{main:mr[500],light:mr[300],dark:mr[700]}}function Ov(e="light"){return e==="dark"?{main:fr[500],light:fr[300],dark:fr[700]}:{main:fr[700],light:fr[400],dark:fr[800]}}function Lv(e="light"){return e==="dark"?{main:gr[400],light:gr[300],dark:gr[700]}:{main:gr[700],light:gr[500],dark:gr[900]}}function $v(e="light"){return e==="dark"?{main:yr[400],light:yr[300],dark:yr[700]}:{main:yr[800],light:yr[500],dark:yr[900]}}function jv(e="light"){return e==="dark"?{main:mo[400],light:mo[300],dark:mo[700]}:{main:"#ed6c02",light:mo[500],dark:mo[900]}}function zv(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=W(e,Bv),i=e.primary||Fv(t),l=e.secondary||Nv(t),a=e.error||Ov(t),s=e.info||Lv(t),u=e.success||$v(t),m=e.warning||jv(t);function h(y){return Sv(y,ss.text.primary)>=n?ss.text.primary:mp.text.primary}const f=({color:y,name:R,mainShade:d=500,lightShade:c=300,darkShade:p=700})=>{if(y=C({},y),!y.main&&y[d]&&(y.main=y[d]),!y.hasOwnProperty("main"))throw new Error($n(11,R?` (${R})`:"",d));if(typeof y.main!="string")throw new Error($n(12,R?` (${R})`:"",JSON.stringify(y.main)));return hp(y,"light",c,r),hp(y,"dark",p,r),y.contrastText||(y.contrastText=h(y.main)),y},v={dark:ss,light:mp};return dt(C({common:C({},ti),mode:t,primary:f({color:i,name:"primary"}),secondary:f({color:l,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:a,name:"error"}),warning:f({color:m,name:"warning"}),info:f({color:s,name:"info"}),success:f({color:u,name:"success"}),grey:N1,contrastThreshold:n,getContrastText:h,augmentColor:f,tonalOffset:r},v[t]),o)}const Vv=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Hv(e){return Math.round(e*1e5)/1e5}const gp={textTransform:"uppercase"},yp='"Roboto", "Helvetica", "Arial", sans-serif';function Wv(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=yp,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:l=400,fontWeightMedium:a=500,fontWeightBold:s=700,htmlFontSize:u=16,allVariants:m,pxToRem:h}=n,f=W(n,Vv),v=o/14,g=h||(d=>`${d/u*v}rem`),y=(d,c,p,S,P)=>C({fontFamily:r,fontWeight:d,fontSize:g(c),lineHeight:p},r===yp?{letterSpacing:`${Hv(S/c)}em`}:{},P,m),R={h1:y(i,96,1.167,-1.5),h2:y(i,60,1.2,-.5),h3:y(l,48,1.167,0),h4:y(l,34,1.235,.25),h5:y(l,24,1.334,0),h6:y(a,20,1.6,.15),subtitle1:y(l,16,1.75,.15),subtitle2:y(a,14,1.57,.1),body1:y(l,16,1.5,.15),body2:y(l,14,1.43,.15),button:y(a,14,1.75,.4,gp),caption:y(l,12,1.66,.4),overline:y(l,12,2.66,1,gp),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return dt(C({htmlFontSize:u,pxToRem:g,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:l,fontWeightMedium:a,fontWeightBold:s},R),f,{clone:!1})}const Uv=.2,Gv=.14,Kv=.12;function Se(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Uv})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Gv})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Kv})`].join(",")}const Yv=["none",Se(0,2,1,-1,0,1,1,0,0,1,3,0),Se(0,3,1,-2,0,2,2,0,0,1,5,0),Se(0,3,3,-2,0,3,4,0,0,1,8,0),Se(0,2,4,-1,0,4,5,0,0,1,10,0),Se(0,3,5,-1,0,5,8,0,0,1,14,0),Se(0,3,5,-1,0,6,10,0,0,1,18,0),Se(0,4,5,-2,0,7,10,1,0,2,16,1),Se(0,5,5,-3,0,8,10,1,0,3,14,2),Se(0,5,6,-3,0,9,12,1,0,3,16,2),Se(0,6,6,-3,0,10,14,1,0,4,18,3),Se(0,6,7,-4,0,11,15,1,0,4,20,3),Se(0,7,8,-4,0,12,17,2,0,5,22,4),Se(0,7,8,-4,0,13,19,2,0,5,24,4),Se(0,7,9,-4,0,14,21,2,0,5,26,4),Se(0,8,9,-5,0,15,22,2,0,6,28,5),Se(0,8,10,-5,0,16,24,2,0,6,30,5),Se(0,8,11,-5,0,17,26,2,0,6,32,5),Se(0,9,11,-5,0,18,28,2,0,7,34,6),Se(0,9,12,-6,0,19,29,2,0,7,36,6),Se(0,10,13,-6,0,20,31,3,0,8,38,7),Se(0,10,13,-6,0,21,33,3,0,8,40,7),Se(0,10,14,-6,0,22,35,3,0,8,42,7),Se(0,11,14,-7,0,23,36,3,0,9,44,8),Se(0,11,15,-7,0,24,38,3,0,9,46,8)],Qv=Yv,Xv=["duration","easing","delay"],qv={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Zv={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Sp(e){return`${Math.round(e)}ms`}function Jv(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function ex(e){const t=C({},qv,e.easing),n=C({},Zv,e.duration);return C({getAutoHeightDuration:Jv,create:(o=["all"],i={})=>{const{duration:l=n.standard,easing:a=t.easeInOut,delay:s=0}=i;return W(i,Xv),(Array.isArray(o)?o:[o]).map(u=>`${u} ${typeof l=="string"?l:Sp(l)} ${a} ${typeof s=="string"?s:Sp(s)}`).join(",")}},e,{easing:t,duration:n})}const tx={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},nx=tx,rx=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function L0(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=e,l=W(e,rx);if(e.vars)throw new Error($n(18));const a=zv(r),s=Ra(e);let u=dt(s,{mixins:Iv(s.breakpoints,n),palette:a,shadows:Qv.slice(),typography:Wv(a,i),transitions:ex(o),zIndex:C({},nx)});return u=dt(u,l),u=t.reduce((m,h)=>dt(m,h),u),u.unstable_sxConfig=C({},Ta,l==null?void 0:l.unstable_sxConfig),u.unstable_sx=function(h){return Ec({sx:h,theme:this})},u}const ox=L0(),ka=ox;function Dc(){const e=kc(ka);return e[Qr]||e}function Ie({props:e,name:t}){return F0({props:e,name:t,defaultTheme:ka,themeId:Qr})}const yn=e=>Fo(e)&&e!=="classes",ix=Fo,lx=B0({themeId:Qr,defaultTheme:ka,rootShouldForwardProp:yn}),U=lx,ax=["theme"];function sx(e){let{theme:t}=e,n=W(e,ax);const r=t[Qr];return D.jsx(Ev,C({},n,{themeId:r?Qr:void 0,theme:r||t}))}const ux=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},vp=ux;function cx(e){return be("MuiSvgIcon",e)}Re("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const dx=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],px=e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root",t!=="inherit"&&`color${me(t)}`,`fontSize${me(n)}`]};return Ne(o,cx,r)},fx=U("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${me(n.color)}`],t[`fontSize${me(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,o,i,l,a,s,u,m,h,f,v,g;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((i=e.typography)==null||(l=i.pxToRem)==null?void 0:l.call(i,20))||"1.25rem",medium:((a=e.typography)==null||(s=a.pxToRem)==null?void 0:s.call(a,24))||"1.5rem",large:((u=e.typography)==null||(m=u.pxToRem)==null?void 0:m.call(u,35))||"2.1875rem"}[t.fontSize],color:(h=(f=(e.vars||e).palette)==null||(f=f[t.color])==null?void 0:f.main)!=null?h:{action:(v=(e.vars||e).palette)==null||(v=v.action)==null?void 0:v.active,disabled:(g=(e.vars||e).palette)==null||(g=g.action)==null?void 0:g.disabled,inherit:void 0}[t.color]}}),$0=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiSvgIcon"}),{children:o,className:i,color:l="inherit",component:a="svg",fontSize:s="medium",htmlColor:u,inheritViewBox:m=!1,titleAccess:h,viewBox:f="0 0 24 24"}=r,v=W(r,dx),g=x.isValidElement(o)&&o.type==="svg",y=C({},r,{color:l,component:a,fontSize:s,instanceFontSize:t.fontSize,inheritViewBox:m,viewBox:f,hasSvgAsChild:g}),R={};m||(R.viewBox=f);const d=px(y);return D.jsxs(fx,C({as:a,className:Z(d.root,i),focusable:"false",color:u,"aria-hidden":h?void 0:!0,role:h?"img":void 0,ref:n},R,v,g&&o.props,{ownerState:y,children:[g?o.props.children:o,h?D.jsx("title",{children:h}):null]}))});$0.muiName="SvgIcon";const xp=$0;function mx(e,t){function n(r,o){return D.jsx(xp,C({"data-testid":`${t}Icon`,ref:o},r,{children:e}))}return n.muiName=xp.muiName,x.memo(x.forwardRef(n))}function pu(e,t){return pu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},pu(e,t)}function j0(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,pu(e,t)}const Cp={disabled:!1},El=zt.createContext(null);var hx=function(t){return t.scrollTop},To="unmounted",Yn="exited",Qn="entering",vr="entered",fu="exiting",Sn=function(e){j0(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var l=o,a=l&&!l.isMounting?r.enter:r.appear,s;return i.appearStatus=null,r.in?a?(s=Yn,i.appearStatus=Qn):s=vr:r.unmountOnExit||r.mountOnEnter?s=To:s=Yn,i.state={status:s},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var l=o.in;return l&&i.status===To?{status:Yn}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var l=this.state.status;this.props.in?l!==Qn&&l!==vr&&(i=Qn):(l===Qn||l===vr)&&(i=fu)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,l,a;return i=l=a=o,o!=null&&typeof o!="number"&&(i=o.exit,l=o.enter,a=o.appear!==void 0?o.appear:l),{exit:i,enter:l,appear:a}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===Qn){if(this.props.unmountOnExit||this.props.mountOnEnter){var l=this.props.nodeRef?this.props.nodeRef.current:bi.findDOMNode(this);l&&hx(l)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Yn&&this.setState({status:To})},n.performEnter=function(o){var i=this,l=this.props.enter,a=this.context?this.context.isMounting:o,s=this.props.nodeRef?[a]:[bi.findDOMNode(this),a],u=s[0],m=s[1],h=this.getTimeouts(),f=a?h.appear:h.enter;if(!o&&!l||Cp.disabled){this.safeSetState({status:vr},function(){i.props.onEntered(u)});return}this.props.onEnter(u,m),this.safeSetState({status:Qn},function(){i.props.onEntering(u,m),i.onTransitionEnd(f,function(){i.safeSetState({status:vr},function(){i.props.onEntered(u,m)})})})},n.performExit=function(){var o=this,i=this.props.exit,l=this.getTimeouts(),a=this.props.nodeRef?void 0:bi.findDOMNode(this);if(!i||Cp.disabled){this.safeSetState({status:Yn},function(){o.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:fu},function(){o.props.onExiting(a),o.onTransitionEnd(l.exit,function(){o.safeSetState({status:Yn},function(){o.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,l=!0;return this.nextCallback=function(a){l&&(l=!1,i.nextCallback=null,o(a))},this.nextCallback.cancel=function(){l=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var l=this.props.nodeRef?this.props.nodeRef.current:bi.findDOMNode(this),a=o==null&&!this.props.addEndListener;if(!l||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[l,this.nextCallback],u=s[0],m=s[1];this.props.addEndListener(u,m)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===To)return null;var i=this.props,l=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var a=W(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return zt.createElement(El.Provider,{value:null},typeof l=="function"?l(o,a):zt.cloneElement(zt.Children.only(l),a))},t}(zt.Component);Sn.contextType=El;Sn.propTypes={};function Sr(){}Sn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Sr,onEntering:Sr,onEntered:Sr,onExit:Sr,onExiting:Sr,onExited:Sr};Sn.UNMOUNTED=To;Sn.EXITED=Yn;Sn.ENTERING=Qn;Sn.ENTERED=vr;Sn.EXITING=fu;const z0=Sn;function gx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _c(e,t){var n=function(i){return t&&x.isValidElement(i)?t(i):i},r=Object.create(null);return e&&x.Children.map(e,function(o){return o}).forEach(function(o){r[o.key]=n(o)}),r}function yx(e,t){e=e||{},t=t||{};function n(m){return m in t?t[m]:e[m]}var r=Object.create(null),o=[];for(var i in e)i in t?o.length&&(r[i]=o,o=[]):o.push(i);var l,a={};for(var s in t){if(r[s])for(l=0;l<r[s].length;l++){var u=r[s][l];a[r[s][l]]=n(u)}a[s]=n(s)}for(l=0;l<o.length;l++)a[o[l]]=n(o[l]);return a}function Jn(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Sx(e,t){return _c(e.children,function(n){return x.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:Jn(n,"appear",e),enter:Jn(n,"enter",e),exit:Jn(n,"exit",e)})})}function vx(e,t,n){var r=_c(e.children),o=yx(t,r);return Object.keys(o).forEach(function(i){var l=o[i];if(x.isValidElement(l)){var a=i in t,s=i in r,u=t[i],m=x.isValidElement(u)&&!u.props.in;s&&(!a||m)?o[i]=x.cloneElement(l,{onExited:n.bind(null,l),in:!0,exit:Jn(l,"exit",e),enter:Jn(l,"enter",e)}):!s&&a&&!m?o[i]=x.cloneElement(l,{in:!1}):s&&a&&x.isValidElement(u)&&(o[i]=x.cloneElement(l,{onExited:n.bind(null,l),in:u.props.in,exit:Jn(l,"exit",e),enter:Jn(l,"enter",e)}))}}),o}var xx=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Cx={component:"div",childFactory:function(t){return t}},Ac=function(e){j0(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var l=i.handleExited.bind(gx(i));return i.state={contextValue:{isMounting:!0},handleExited:l,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,i){var l=i.children,a=i.handleExited,s=i.firstRender;return{children:s?Sx(o,a):vx(o,l,a),firstRender:!1}},n.handleExited=function(o,i){var l=_c(this.props.children);o.key in l||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(a){var s=C({},a.children);return delete s[o.key],{children:s}}))},n.render=function(){var o=this.props,i=o.component,l=o.childFactory,a=W(o,["component","childFactory"]),s=this.state.contextValue,u=xx(this.state.children).map(l);return delete a.appear,delete a.enter,delete a.exit,i===null?zt.createElement(El.Provider,{value:s},u):zt.createElement(El.Provider,{value:s},zt.createElement(i,a,u))},t}(zt.Component);Ac.propTypes={};Ac.defaultProps=Cx;const Mx=Ac,V0=e=>e.scrollTop;function kl(e,t){var n,r;const{timeout:o,easing:i,style:l={}}=e;return{duration:(n=l.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=l.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:l.transitionDelay}}function Px(e){return be("MuiPaper",e)}Re("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Tx=["className","component","elevation","square","variant"],Rx=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return Ne(i,Px,o)},Ex=U("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return C({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&C({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Ir("#fff",vp(t.elevation))}, ${Ir("#fff",vp(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),kx=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:l=1,square:a=!1,variant:s="elevation"}=r,u=W(r,Tx),m=C({},r,{component:i,elevation:l,square:a,variant:s}),h=Rx(m);return D.jsx(Ex,C({as:i,ownerState:m,className:Z(h.root,o),ref:n},u))}),wx=kx;function Dx(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:i,rippleSize:l,in:a,onExited:s,timeout:u}=e,[m,h]=x.useState(!1),f=Z(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),v={width:l,height:l,top:-(l/2)+i,left:-(l/2)+o},g=Z(n.child,m&&n.childLeaving,r&&n.childPulsate);return!a&&!m&&h(!0),x.useEffect(()=>{if(!a&&s!=null){const y=setTimeout(s,u);return()=>{clearTimeout(y)}}},[s,a,u]),D.jsx("span",{className:f,style:v,children:D.jsx("span",{className:g})})}const _x=Re("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),wt=_x,Ax=["center","classes","className"];let wa=e=>e,Mp,Pp,Tp,Rp;const mu=550,bx=80,Ix=Cc(Mp||(Mp=wa`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Bx=Cc(Pp||(Pp=wa`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Fx=Cc(Tp||(Tp=wa`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Nx=U("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Ox=U(Dx,{name:"MuiTouchRipple",slot:"Ripple"})(Rp||(Rp=wa`
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
`),wt.rippleVisible,Ix,mu,({theme:e})=>e.transitions.easing.easeInOut,wt.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,wt.child,wt.childLeaving,Bx,mu,({theme:e})=>e.transitions.easing.easeInOut,wt.childPulsate,Fx,({theme:e})=>e.transitions.easing.easeInOut),Lx=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:l}=r,a=W(r,Ax),[s,u]=x.useState([]),m=x.useRef(0),h=x.useRef(null);x.useEffect(()=>{h.current&&(h.current(),h.current=null)},[s]);const f=x.useRef(!1),v=x.useRef(0),g=x.useRef(null),y=x.useRef(null);x.useEffect(()=>()=>{v.current&&clearTimeout(v.current)},[]);const R=x.useCallback(S=>{const{pulsate:P,rippleX:T,rippleY:M,rippleSize:w,cb:A}=S;u(E=>[...E,D.jsx(Ox,{classes:{ripple:Z(i.ripple,wt.ripple),rippleVisible:Z(i.rippleVisible,wt.rippleVisible),ripplePulsate:Z(i.ripplePulsate,wt.ripplePulsate),child:Z(i.child,wt.child),childLeaving:Z(i.childLeaving,wt.childLeaving),childPulsate:Z(i.childPulsate,wt.childPulsate)},timeout:mu,pulsate:P,rippleX:T,rippleY:M,rippleSize:w},m.current)]),m.current+=1,h.current=A},[i]),d=x.useCallback((S={},P={},T=()=>{})=>{const{pulsate:M=!1,center:w=o||P.pulsate,fakeElement:A=!1}=P;if((S==null?void 0:S.type)==="mousedown"&&f.current){f.current=!1;return}(S==null?void 0:S.type)==="touchstart"&&(f.current=!0);const E=A?null:y.current,F=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let $,N,I;if(w||S===void 0||S.clientX===0&&S.clientY===0||!S.clientX&&!S.touches)$=Math.round(F.width/2),N=Math.round(F.height/2);else{const{clientX:B,clientY:j}=S.touches&&S.touches.length>0?S.touches[0]:S;$=Math.round(B-F.left),N=Math.round(j-F.top)}if(w)I=Math.sqrt((2*F.width**2+F.height**2)/3),I%2===0&&(I+=1);else{const B=Math.max(Math.abs((E?E.clientWidth:0)-$),$)*2+2,j=Math.max(Math.abs((E?E.clientHeight:0)-N),N)*2+2;I=Math.sqrt(B**2+j**2)}S!=null&&S.touches?g.current===null&&(g.current=()=>{R({pulsate:M,rippleX:$,rippleY:N,rippleSize:I,cb:T})},v.current=setTimeout(()=>{g.current&&(g.current(),g.current=null)},bx)):R({pulsate:M,rippleX:$,rippleY:N,rippleSize:I,cb:T})},[o,R]),c=x.useCallback(()=>{d({},{pulsate:!0})},[d]),p=x.useCallback((S,P)=>{if(clearTimeout(v.current),(S==null?void 0:S.type)==="touchend"&&g.current){g.current(),g.current=null,v.current=setTimeout(()=>{p(S,P)});return}g.current=null,u(T=>T.length>0?T.slice(1):T),h.current=P},[]);return x.useImperativeHandle(n,()=>({pulsate:c,start:d,stop:p}),[c,d,p]),D.jsx(Nx,C({className:Z(wt.root,i.root,l),ref:y},a,{children:D.jsx(Mx,{component:null,exit:!0,children:s})}))}),$x=Lx;function jx(e){return be("MuiButtonBase",e)}const zx=Re("MuiButtonBase",["root","disabled","focusVisible"]),Vx=zx,Hx=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Wx=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,l=Ne({root:["root",t&&"disabled",n&&"focusVisible"]},jx,o);return n&&r&&(l.root+=` ${r}`),l},Ux=U("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Vx.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Gx=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:l,className:a,component:s="button",disabled:u=!1,disableRipple:m=!1,disableTouchRipple:h=!1,focusRipple:f=!1,LinkComponent:v="a",onBlur:g,onClick:y,onContextMenu:R,onDragLeave:d,onFocus:c,onFocusVisible:p,onKeyDown:S,onKeyUp:P,onMouseDown:T,onMouseLeave:M,onMouseUp:w,onTouchEnd:A,onTouchMove:E,onTouchStart:F,tabIndex:$=0,TouchRippleProps:N,touchRippleRef:I,type:B}=r,j=W(r,Hx),z=x.useRef(null),k=x.useRef(null),b=tt(k,I),{isFocusVisibleRef:O,onFocus:X,onBlur:G,ref:De}=Y1(),[Q,he]=x.useState(!1);u&&Q&&he(!1),x.useImperativeHandle(o,()=>({focusVisible:()=>{he(!0),z.current.focus()}}),[]);const[oe,Ve]=x.useState(!1);x.useEffect(()=>{Ve(!0)},[]);const Tt=oe&&!m&&!u;x.useEffect(()=>{Q&&f&&!m&&oe&&k.current.pulsate()},[m,f,Q,oe]);function _e(H,rn,ro=h){return br(oo=>(rn&&rn(oo),!ro&&k.current&&k.current[H](oo),!0))}const ot=_e("start",T),ne=_e("stop",R),xe=_e("stop",d),K=_e("stop",w),ae=_e("stop",H=>{Q&&H.preventDefault(),M&&M(H)}),ge=_e("start",F),vn=_e("stop",A),Rt=_e("stop",E),Et=_e("stop",H=>{G(H),O.current===!1&&he(!1),g&&g(H)},!1),Nt=br(H=>{z.current||(z.current=H.currentTarget),X(H),O.current===!0&&(he(!0),p&&p(H)),c&&c(H)}),kt=()=>{const H=z.current;return s&&s!=="button"&&!(H.tagName==="A"&&H.href)},Ce=x.useRef(!1),tn=br(H=>{f&&!Ce.current&&Q&&k.current&&H.key===" "&&(Ce.current=!0,k.current.stop(H,()=>{k.current.start(H)})),H.target===H.currentTarget&&kt()&&H.key===" "&&H.preventDefault(),S&&S(H),H.target===H.currentTarget&&kt()&&H.key==="Enter"&&!u&&(H.preventDefault(),y&&y(H))}),it=br(H=>{f&&H.key===" "&&k.current&&Q&&!H.defaultPrevented&&(Ce.current=!1,k.current.stop(H,()=>{k.current.pulsate(H)})),P&&P(H),y&&H.target===H.currentTarget&&kt()&&H.key===" "&&!H.defaultPrevented&&y(H)});let ye=s;ye==="button"&&(j.href||j.to)&&(ye=v);const Ut={};ye==="button"?(Ut.type=B===void 0?"button":B,Ut.disabled=u):(!j.href&&!j.to&&(Ut.role="button"),u&&(Ut["aria-disabled"]=u));const xn=tt(n,De,z),nn=C({},r,{centerRipple:i,component:s,disabled:u,disableRipple:m,disableTouchRipple:h,focusRipple:f,tabIndex:$,focusVisible:Q}),ue=Wx(nn);return D.jsxs(Ux,C({as:ye,className:Z(ue.root,a),ownerState:nn,onBlur:Et,onClick:y,onContextMenu:ne,onFocus:Nt,onKeyDown:tn,onKeyUp:it,onMouseDown:ot,onMouseLeave:ae,onMouseUp:K,onDragLeave:xe,onTouchEnd:vn,onTouchMove:Rt,onTouchStart:ge,ref:xn,tabIndex:u?-1:$,type:B},Ut,j,{children:[l,Tt?D.jsx($x,C({ref:b,center:i},N)):null]}))}),Kx=Gx;function Yx(e){return be("MuiTypography",e)}Re("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Qx=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Xx=e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:l}=e,a={root:["root",i,e.align!=="inherit"&&`align${me(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return Ne(a,Yx,l)},qx=U("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${me(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>C({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),Ep={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Zx={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Jx=e=>Zx[e]||e,e5=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiTypography"}),o=Jx(r.color),i=nv(C({},r,{color:o})),{align:l="inherit",className:a,component:s,gutterBottom:u=!1,noWrap:m=!1,paragraph:h=!1,variant:f="body1",variantMapping:v=Ep}=i,g=W(i,Qx),y=C({},i,{align:l,color:o,className:a,component:s,gutterBottom:u,noWrap:m,paragraph:h,variant:f,variantMapping:v}),R=s||(h?"p":v[f]||Ep[f])||"span",d=Xx(y);return D.jsx(qx,C({as:R,ref:n,ownerState:y,className:Z(d.root,a)},g))}),hu=e5;function wl(e){return typeof e=="string"}function t5(e,t,n){return e===void 0||wl(e)?t:C({},t,{ownerState:C({},t.ownerState,n)})}function H0(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function n5(e,t,n){return typeof e=="function"?e(t,n):e}function kp(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function r5(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:i}=e;if(!t){const v=Z(o==null?void 0:o.className,r==null?void 0:r.className,i,n==null?void 0:n.className),g=C({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),y=C({},n,o,r);return v.length>0&&(y.className=v),Object.keys(g).length>0&&(y.style=g),{props:y,internalRef:void 0}}const l=H0(C({},o,r)),a=kp(r),s=kp(o),u=t(l),m=Z(u==null?void 0:u.className,n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),h=C({},u==null?void 0:u.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),f=C({},u,n,s,a);return m.length>0&&(f.className=m),Object.keys(h).length>0&&(f.style=h),{props:f,internalRef:u.ref}}const o5=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function qr(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:i=!1}=e,l=W(e,o5),a=i?{}:n5(r,o),{props:s,internalRef:u}=r5(C({},l,{externalSlotProps:a})),m=tt(u,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return t5(n,C({},s,{ref:m}),o)}const i5=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function l5(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function a5(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function s5(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||a5(e))}function u5(e){const t=[],n=[];return Array.from(e.querySelectorAll(i5)).forEach((r,o)=>{const i=l5(r);i===-1||!s5(r)||(i===0?t.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function c5(){return!0}function d5(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=u5,isEnabled:l=c5,open:a}=e,s=x.useRef(!1),u=x.useRef(null),m=x.useRef(null),h=x.useRef(null),f=x.useRef(null),v=x.useRef(!1),g=x.useRef(null),y=tt(t.ref,g),R=x.useRef(null);x.useEffect(()=>{!a||!g.current||(v.current=!n)},[n,a]),x.useEffect(()=>{if(!a||!g.current)return;const p=St(g.current);return g.current.contains(p.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),v.current&&g.current.focus()),()=>{o||(h.current&&h.current.focus&&(s.current=!0,h.current.focus()),h.current=null)}},[a]),x.useEffect(()=>{if(!a||!g.current)return;const p=St(g.current),S=M=>{R.current=M,!(r||!l()||M.key!=="Tab")&&p.activeElement===g.current&&M.shiftKey&&(s.current=!0,m.current&&m.current.focus())},P=()=>{const M=g.current;if(M===null)return;if(!p.hasFocus()||!l()||s.current){s.current=!1;return}if(M.contains(p.activeElement)||r&&p.activeElement!==u.current&&p.activeElement!==m.current)return;if(p.activeElement!==f.current)f.current=null;else if(f.current!==null)return;if(!v.current)return;let w=[];if((p.activeElement===u.current||p.activeElement===m.current)&&(w=i(g.current)),w.length>0){var A,E;const F=!!((A=R.current)!=null&&A.shiftKey&&((E=R.current)==null?void 0:E.key)==="Tab"),$=w[0],N=w[w.length-1];typeof $!="string"&&typeof N!="string"&&(F?N.focus():$.focus())}else M.focus()};p.addEventListener("focusin",P),p.addEventListener("keydown",S,!0);const T=setInterval(()=>{p.activeElement&&p.activeElement.tagName==="BODY"&&P()},50);return()=>{clearInterval(T),p.removeEventListener("focusin",P),p.removeEventListener("keydown",S,!0)}},[n,r,o,l,a,i]);const d=p=>{h.current===null&&(h.current=p.relatedTarget),v.current=!0,f.current=p.target;const S=t.props.onFocus;S&&S(p)},c=p=>{h.current===null&&(h.current=p.relatedTarget),v.current=!0};return D.jsxs(x.Fragment,{children:[D.jsx("div",{tabIndex:a?0:-1,onFocus:c,ref:u,"data-testid":"sentinelStart"}),x.cloneElement(t,{ref:y,onFocus:d}),D.jsx("div",{tabIndex:a?0:-1,onFocus:c,ref:m,"data-testid":"sentinelEnd"})]})}function p5(e){return typeof e=="function"?e():e}const f5=x.forwardRef(function(t,n){const{children:r,container:o,disablePortal:i=!1}=t,[l,a]=x.useState(null),s=tt(x.isValidElement(r)?r.ref:null,n);if(jn(()=>{i||a(p5(o)||document.body)},[o,i]),jn(()=>{if(l&&!i)return au(n,l),()=>{au(n,null)}},[n,l,i]),i){if(x.isValidElement(r)){const u={ref:s};return x.cloneElement(r,u)}return D.jsx(x.Fragment,{children:r})}return D.jsx(x.Fragment,{children:l&&Gl.createPortal(r,l)})});function m5(e){const t=St(e);return t.body===e?ar(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function No(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function wp(e){return parseInt(ar(e).getComputedStyle(e).paddingRight,10)||0}function h5(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function Dp(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,l=>{const a=i.indexOf(l)===-1,s=!h5(l);a&&s&&No(l,o)})}function us(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function g5(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(m5(r)){const l=s0(St(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${wp(r)+l}px`;const a=St(r).querySelectorAll(".mui-fixed");[].forEach.call(a,s=>{n.push({value:s.style.paddingRight,property:"padding-right",el:s}),s.style.paddingRight=`${wp(s)+l}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=St(r).body;else{const l=r.parentElement,a=ar(r);i=(l==null?void 0:l.nodeName)==="HTML"&&a.getComputedStyle(l).overflowY==="scroll"?l:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:l,property:a})=>{i?l.style.setProperty(a,i):l.style.removeProperty(a)})}}function y5(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class S5{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&No(t.modalRef,!1);const o=y5(n);Dp(n,t.mount,t.modalRef,o,!0);const i=us(this.containers,l=>l.container===n);return i!==-1?(this.containers[i].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=us(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=g5(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=us(this.containers,l=>l.modals.indexOf(t)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&No(t.modalRef,n),Dp(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const l=i.modals[i.modals.length-1];l.modalRef&&No(l.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function v5(e){return typeof e=="function"?e():e}function x5(e){return e?e.props.hasOwnProperty("in"):!1}const C5=new S5;function M5(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=C5,closeAfterTransition:i=!1,onTransitionEnter:l,onTransitionExited:a,children:s,onClose:u,open:m,rootRef:h}=e,f=x.useRef({}),v=x.useRef(null),g=x.useRef(null),y=tt(g,h),[R,d]=x.useState(!m),c=x5(s);let p=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(p=!1);const S=()=>St(v.current),P=()=>(f.current.modalRef=g.current,f.current.mount=v.current,f.current),T=()=>{o.mount(P(),{disableScrollLock:r}),g.current&&(g.current.scrollTop=0)},M=br(()=>{const j=v5(t)||S().body;o.add(P(),j),g.current&&T()}),w=x.useCallback(()=>o.isTopModal(P()),[o]),A=br(j=>{v.current=j,j&&(m&&w()?T():g.current&&No(g.current,p))}),E=x.useCallback(()=>{o.remove(P(),p)},[p,o]);x.useEffect(()=>()=>{E()},[E]),x.useEffect(()=>{m?M():(!c||!i)&&E()},[m,E,c,i,M]);const F=j=>z=>{var k;(k=j.onKeyDown)==null||k.call(j,z),!(z.key!=="Escape"||!w())&&(n||(z.stopPropagation(),u&&u(z,"escapeKeyDown")))},$=j=>z=>{var k;(k=j.onClick)==null||k.call(j,z),z.target===z.currentTarget&&u&&u(z,"backdropClick")};return{getRootProps:(j={})=>{const z=H0(e);delete z.onTransitionEnter,delete z.onTransitionExited;const k=C({},z,j);return C({role:"presentation"},k,{onKeyDown:F(k),ref:y})},getBackdropProps:(j={})=>{const z=j;return C({"aria-hidden":!0},z,{onClick:$(z),open:m})},getTransitionProps:()=>{const j=()=>{d(!1),l&&l()},z=()=>{d(!0),a&&a(),i&&E()};return{onEnter:Gd(j,s==null?void 0:s.props.onEnter),onExited:Gd(z,s==null?void 0:s.props.onExited)}},rootRef:y,portalRef:A,isTopModal:w,exited:R,hasTransition:c}}const P5=["onChange","maxRows","minRows","style","value"];function Bi(e){return parseInt(e,10)||0}const T5={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function _p(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const R5=x.forwardRef(function(t,n){const{onChange:r,maxRows:o,minRows:i=1,style:l,value:a}=t,s=W(t,P5),{current:u}=x.useRef(a!=null),m=x.useRef(null),h=tt(n,m),f=x.useRef(null),v=x.useRef(0),[g,y]=x.useState({outerHeightStyle:0}),R=x.useCallback(()=>{const S=m.current,T=ar(S).getComputedStyle(S);if(T.width==="0px")return{outerHeightStyle:0};const M=f.current;M.style.width=T.width,M.value=S.value||t.placeholder||"x",M.value.slice(-1)===`
`&&(M.value+=" ");const w=T.boxSizing,A=Bi(T.paddingBottom)+Bi(T.paddingTop),E=Bi(T.borderBottomWidth)+Bi(T.borderTopWidth),F=M.scrollHeight;M.value="x";const $=M.scrollHeight;let N=F;i&&(N=Math.max(Number(i)*$,N)),o&&(N=Math.min(Number(o)*$,N)),N=Math.max(N,$);const I=N+(w==="border-box"?A+E:0),B=Math.abs(N-F)<=1;return{outerHeightStyle:I,overflow:B}},[o,i,t.placeholder]),d=(S,P)=>{const{outerHeightStyle:T,overflow:M}=P;return v.current<20&&(T>0&&Math.abs((S.outerHeightStyle||0)-T)>1||S.overflow!==M)?(v.current+=1,{overflow:M,outerHeightStyle:T}):S},c=x.useCallback(()=>{const S=R();_p(S)||y(P=>d(P,S))},[R]);jn(()=>{const S=()=>{const F=R();_p(F)||Gl.flushSync(()=>{y($=>d($,F))})},P=()=>{v.current=0,S()};let T;const M=a0(P),w=m.current,A=ar(w);A.addEventListener("resize",M);let E;return typeof ResizeObserver<"u"&&(E=new ResizeObserver(P),E.observe(w)),()=>{M.clear(),cancelAnimationFrame(T),A.removeEventListener("resize",M),E&&E.disconnect()}},[R]),jn(()=>{c()}),x.useEffect(()=>{v.current=0},[a]);const p=S=>{v.current=0,u||c(),r&&r(S)};return D.jsxs(x.Fragment,{children:[D.jsx("textarea",C({value:a,onChange:p,ref:h,rows:i,style:C({height:g.outerHeightStyle,overflow:g.overflow?"hidden":void 0},l)},s)),D.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:f,tabIndex:-1,style:C({},T5.shadow,l,{paddingTop:0,paddingBottom:0})})]})});function fi({props:e,states:t,muiFormControl:n}){return t.reduce((r,o)=>(r[o]=e[o],n&&typeof e[o]>"u"&&(r[o]=n[o]),r),{})}const E5=x.createContext(void 0),bc=E5;function mi(){return x.useContext(bc)}function W0(e){return D.jsx(JS,C({},e,{defaultTheme:ka,themeId:Qr}))}function Ap(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function Dl(e,t=!1){return e&&(Ap(e.value)&&e.value!==""||t&&Ap(e.defaultValue)&&e.defaultValue!=="")}function k5(e){return e.startAdornment}function w5(e){return be("MuiInputBase",e)}const D5=Re("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),Zr=D5,_5=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],Da=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size==="small"&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${me(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},_a=(e,t)=>{const{ownerState:n}=e;return[t.input,n.size==="small"&&t.inputSizeSmall,n.multiline&&t.inputMultiline,n.type==="search"&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},A5=e=>{const{classes:t,color:n,disabled:r,error:o,endAdornment:i,focused:l,formControl:a,fullWidth:s,hiddenLabel:u,multiline:m,readOnly:h,size:f,startAdornment:v,type:g}=e,y={root:["root",`color${me(n)}`,r&&"disabled",o&&"error",s&&"fullWidth",l&&"focused",a&&"formControl",f&&f!=="medium"&&`size${me(f)}`,m&&"multiline",v&&"adornedStart",i&&"adornedEnd",u&&"hiddenLabel",h&&"readOnly"],input:["input",r&&"disabled",g==="search"&&"inputTypeSearch",m&&"inputMultiline",f==="small"&&"inputSizeSmall",u&&"inputHiddenLabel",v&&"inputAdornedStart",i&&"inputAdornedEnd",h&&"readOnly"]};return Ne(y,w5,t)},Aa=U("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Da})(({theme:e,ownerState:t})=>C({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${Zr.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&C({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),ba=U("input",{name:"MuiInputBase",slot:"Input",overridesResolver:_a})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light",r=C({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),o={opacity:"0 !important"},i=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return C({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${Zr.formControl} &`]:{"&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},[`&.${Zr.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),b5=D.jsx(W0,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),I5=x.forwardRef(function(t,n){var r;const o=Ie({props:t,name:"MuiInputBase"}),{"aria-describedby":i,autoComplete:l,autoFocus:a,className:s,components:u={},componentsProps:m={},defaultValue:h,disabled:f,disableInjectingGlobalStyles:v,endAdornment:g,fullWidth:y=!1,id:R,inputComponent:d="input",inputProps:c={},inputRef:p,maxRows:S,minRows:P,multiline:T=!1,name:M,onBlur:w,onChange:A,onClick:E,onFocus:F,onKeyDown:$,onKeyUp:N,placeholder:I,readOnly:B,renderSuffix:j,rows:z,slotProps:k={},slots:b={},startAdornment:O,type:X="text",value:G}=o,De=W(o,_5),Q=c.value!=null?c.value:G,{current:he}=x.useRef(Q!=null),oe=x.useRef(),Ve=x.useCallback(ue=>{},[]),Tt=tt(oe,p,c.ref,Ve),[_e,ot]=x.useState(!1),ne=mi(),xe=fi({props:o,muiFormControl:ne,states:["color","disabled","error","hiddenLabel","size","required","filled"]});xe.focused=ne?ne.focused:_e,x.useEffect(()=>{!ne&&f&&_e&&(ot(!1),w&&w())},[ne,f,_e,w]);const K=ne&&ne.onFilled,ae=ne&&ne.onEmpty,ge=x.useCallback(ue=>{Dl(ue)?K&&K():ae&&ae()},[K,ae]);jn(()=>{he&&ge({value:Q})},[Q,ge,he]);const vn=ue=>{if(xe.disabled){ue.stopPropagation();return}F&&F(ue),c.onFocus&&c.onFocus(ue),ne&&ne.onFocus?ne.onFocus(ue):ot(!0)},Rt=ue=>{w&&w(ue),c.onBlur&&c.onBlur(ue),ne&&ne.onBlur?ne.onBlur(ue):ot(!1)},Et=(ue,...H)=>{if(!he){const rn=ue.target||oe.current;if(rn==null)throw new Error($n(1));ge({value:rn.value})}c.onChange&&c.onChange(ue,...H),A&&A(ue,...H)};x.useEffect(()=>{ge(oe.current)},[]);const Nt=ue=>{oe.current&&ue.currentTarget===ue.target&&oe.current.focus(),E&&E(ue)};let kt=d,Ce=c;T&&kt==="input"&&(z?Ce=C({type:void 0,minRows:z,maxRows:z},Ce):Ce=C({type:void 0,maxRows:S,minRows:P},Ce),kt=R5);const tn=ue=>{ge(ue.animationName==="mui-auto-fill-cancel"?oe.current:{value:"x"})};x.useEffect(()=>{ne&&ne.setAdornedStart(!!O)},[ne,O]);const it=C({},o,{color:xe.color||"primary",disabled:xe.disabled,endAdornment:g,error:xe.error,focused:xe.focused,formControl:ne,fullWidth:y,hiddenLabel:xe.hiddenLabel,multiline:T,size:xe.size,startAdornment:O,type:X}),ye=A5(it),Ut=b.root||u.Root||Aa,xn=k.root||m.root||{},nn=b.input||u.Input||ba;return Ce=C({},Ce,(r=k.input)!=null?r:m.input),D.jsxs(x.Fragment,{children:[!v&&b5,D.jsxs(Ut,C({},xn,!wl(Ut)&&{ownerState:C({},it,xn.ownerState)},{ref:n,onClick:Nt},De,{className:Z(ye.root,xn.className,s,B&&"MuiInputBase-readOnly"),children:[O,D.jsx(bc.Provider,{value:null,children:D.jsx(nn,C({ownerState:it,"aria-invalid":xe.error,"aria-describedby":i,autoComplete:l,autoFocus:a,defaultValue:h,disabled:xe.disabled,id:R,onAnimationStart:tn,name:M,placeholder:I,readOnly:B,required:xe.required,rows:z,value:Q,onKeyDown:$,onKeyUp:N,type:X},Ce,!wl(nn)&&{as:kt,ownerState:C({},it,Ce.ownerState)},{ref:Tt,className:Z(ye.input,Ce.className,B&&"MuiInputBase-readOnly"),onBlur:Rt,onChange:Et,onFocus:vn}))}),g,j?j(C({},xe,{startAdornment:O})):null]}))]})}),Ic=I5;function B5(e){return be("MuiInput",e)}const F5=C({},Zr,Re("MuiInput",["root","underline","input"])),go=F5;function N5(e){return be("MuiOutlinedInput",e)}const O5=C({},Zr,Re("MuiOutlinedInput",["root","notchedOutline","input"])),Mn=O5;function L5(e){return be("MuiFilledInput",e)}const $5=C({},Zr,Re("MuiFilledInput",["root","underline","input"])),Un=$5,j5=mx(D.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),z5=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],V5={entering:{opacity:1},entered:{opacity:1}},H5=x.forwardRef(function(t,n){const r=Dc(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:l=!0,children:a,easing:s,in:u,onEnter:m,onEntered:h,onEntering:f,onExit:v,onExited:g,onExiting:y,style:R,timeout:d=o,TransitionComponent:c=z0}=t,p=W(t,z5),S=x.useRef(null),P=tt(S,a.ref,n),T=I=>B=>{if(I){const j=S.current;B===void 0?I(j):I(j,B)}},M=T(f),w=T((I,B)=>{V0(I);const j=kl({style:R,timeout:d,easing:s},{mode:"enter"});I.style.webkitTransition=r.transitions.create("opacity",j),I.style.transition=r.transitions.create("opacity",j),m&&m(I,B)}),A=T(h),E=T(y),F=T(I=>{const B=kl({style:R,timeout:d,easing:s},{mode:"exit"});I.style.webkitTransition=r.transitions.create("opacity",B),I.style.transition=r.transitions.create("opacity",B),v&&v(I)}),$=T(g),N=I=>{i&&i(S.current,I)};return D.jsx(c,C({appear:l,in:u,nodeRef:S,onEnter:w,onEntered:A,onEntering:M,onExit:F,onExited:$,onExiting:E,addEndListener:N,timeout:d},p,{children:(I,B)=>x.cloneElement(a,C({style:C({opacity:0,visibility:I==="exited"&&!u?"hidden":void 0},V5[I],R,a.props.style),ref:P},B))}))}),W5=H5;function U5(e){return be("MuiBackdrop",e)}Re("MuiBackdrop",["root","invisible"]);const G5=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],K5=e=>{const{classes:t,invisible:n}=e;return Ne({root:["root",n&&"invisible"]},U5,t)},Y5=U("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>C({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Q5=x.forwardRef(function(t,n){var r,o,i;const l=Ie({props:t,name:"MuiBackdrop"}),{children:a,className:s,component:u="div",components:m={},componentsProps:h={},invisible:f=!1,open:v,slotProps:g={},slots:y={},TransitionComponent:R=W5,transitionDuration:d}=l,c=W(l,G5),p=C({},l,{component:u,invisible:f}),S=K5(p),P=(r=g.root)!=null?r:h.root;return D.jsx(R,C({in:v,timeout:d},c,{children:D.jsx(Y5,C({"aria-hidden":!0},P,{as:(o=(i=y.root)!=null?i:m.Root)!=null?o:u,className:Z(S.root,s,P==null?void 0:P.className),ownerState:C({},p,P==null?void 0:P.ownerState),classes:S,ref:n,children:a}))}))}),X5=Q5,q5=bv({createStyledComponent:U("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${me(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>Ie({props:e,name:"MuiContainer"})}),qi=q5,Z5=(e,t)=>C({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),J5=e=>C({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),e2=(e,t=!1)=>{var n;const r={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([l,a])=>{var s;r[e.getColorSchemeSelector(l).replace(/\s*&/,"")]={colorScheme:(s=a.palette)==null?void 0:s.mode}});let o=C({html:Z5(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:C({margin:0},J5(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r);const i=(n=e.components)==null||(n=n.MuiCssBaseline)==null?void 0:n.styleOverrides;return i&&(o=[o,i]),o};function t2(e){const t=Ie({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:r=!1}=t;return D.jsxs(x.Fragment,{children:[D.jsx(W0,{styles:o=>e2(o,r)}),n]})}function n2(e){return be("MuiModal",e)}Re("MuiModal",["root","hidden","backdrop"]);const r2=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],o2=e=>{const{open:t,exited:n,classes:r}=e;return Ne({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},n2,r)},i2=U("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>C({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),l2=U(X5,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),a2=x.forwardRef(function(t,n){var r,o,i,l,a,s;const u=Ie({name:"MuiModal",props:t}),{BackdropComponent:m=l2,BackdropProps:h,className:f,closeAfterTransition:v=!1,children:g,container:y,component:R,components:d={},componentsProps:c={},disableAutoFocus:p=!1,disableEnforceFocus:S=!1,disableEscapeKeyDown:P=!1,disablePortal:T=!1,disableRestoreFocus:M=!1,disableScrollLock:w=!1,hideBackdrop:A=!1,keepMounted:E=!1,onBackdropClick:F,open:$,slotProps:N,slots:I}=u,B=W(u,r2),j=C({},u,{closeAfterTransition:v,disableAutoFocus:p,disableEnforceFocus:S,disableEscapeKeyDown:P,disablePortal:T,disableRestoreFocus:M,disableScrollLock:w,hideBackdrop:A,keepMounted:E}),{getRootProps:z,getBackdropProps:k,getTransitionProps:b,portalRef:O,isTopModal:X,exited:G,hasTransition:De}=M5(C({},j,{rootRef:n})),Q=C({},j,{exited:G}),he=o2(Q),oe={};if(g.props.tabIndex===void 0&&(oe.tabIndex="-1"),De){const{onEnter:K,onExited:ae}=b();oe.onEnter=K,oe.onExited=ae}const Ve=(r=(o=I==null?void 0:I.root)!=null?o:d.Root)!=null?r:i2,Tt=(i=(l=I==null?void 0:I.backdrop)!=null?l:d.Backdrop)!=null?i:m,_e=(a=N==null?void 0:N.root)!=null?a:c.root,ot=(s=N==null?void 0:N.backdrop)!=null?s:c.backdrop,ne=qr({elementType:Ve,externalSlotProps:_e,externalForwardedProps:B,getSlotProps:z,additionalProps:{ref:n,as:R},ownerState:Q,className:Z(f,_e==null?void 0:_e.className,he==null?void 0:he.root,!Q.open&&Q.exited&&(he==null?void 0:he.hidden))}),xe=qr({elementType:Tt,externalSlotProps:ot,additionalProps:h,getSlotProps:K=>k(C({},K,{onClick:ae=>{F&&F(ae),K!=null&&K.onClick&&K.onClick(ae)}})),className:Z(ot==null?void 0:ot.className,h==null?void 0:h.className,he==null?void 0:he.backdrop),ownerState:Q});return!E&&!$&&(!De||G)?null:D.jsx(f5,{ref:O,container:y,disablePortal:T,children:D.jsxs(Ve,C({},ne,{children:[!A&&m?D.jsx(Tt,C({},xe)):null,D.jsx(d5,{disableEnforceFocus:S,disableAutoFocus:p,disableRestoreFocus:M,isEnabled:X,open:$,children:x.cloneElement(g,oe)})]}))})}),s2=a2,u2=Re("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),bp=u2,c2=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],d2=e=>{const{classes:t,disableUnderline:n}=e,o=Ne({root:["root",!n&&"underline"],input:["input"]},L5,t);return C({},t,o)},p2=U(Aa,{shouldForwardProp:e=>yn(e)||e==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...Da(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{var n;const r=e.palette.mode==="light",o=r?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",i=r?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",l=r?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",a=r?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return C({position:"relative",backgroundColor:e.vars?e.vars.palette.FilledInput.bg:i,borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:e.vars?e.vars.palette.FilledInput.hoverBg:l,"@media (hover: none)":{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:i}},[`&.${Un.focused}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:i},[`&.${Un.disabled}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.disabledBg:a}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(n=(e.vars||e).palette[t.color||"primary"])==null?void 0:n.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Un.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Un.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`:o}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Un.disabled}, .${Un.error}):before`]:{borderBottom:`1px solid ${(e.vars||e).palette.text.primary}`},[`&.${Un.disabled}:before`]:{borderBottomStyle:"dotted"}},t.startAdornment&&{paddingLeft:12},t.endAdornment&&{paddingRight:12},t.multiline&&C({padding:"25px 12px 8px"},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17}))}),f2=U(ba,{name:"MuiFilledInput",slot:"Input",overridesResolver:_a})(({theme:e,ownerState:t})=>C({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17},t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0},t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9})),U0=x.forwardRef(function(t,n){var r,o,i,l;const a=Ie({props:t,name:"MuiFilledInput"}),{components:s={},componentsProps:u,fullWidth:m=!1,inputComponent:h="input",multiline:f=!1,slotProps:v,slots:g={},type:y="text"}=a,R=W(a,c2),d=C({},a,{fullWidth:m,inputComponent:h,multiline:f,type:y}),c=d2(a),p={root:{ownerState:d},input:{ownerState:d}},S=v??u?dt(v??u,p):p,P=(r=(o=g.root)!=null?o:s.Root)!=null?r:p2,T=(i=(l=g.input)!=null?l:s.Input)!=null?i:f2;return D.jsx(Ic,C({slots:{root:P,input:T},componentsProps:S,fullWidth:m,inputComponent:h,multiline:f,ref:n,type:y},R,{classes:c}))});U0.muiName="Input";const m2=U0;function h2(e){return be("MuiFormControl",e)}Re("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const g2=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],y2=e=>{const{classes:t,margin:n,fullWidth:r}=e,o={root:["root",n!=="none"&&`margin${me(n)}`,r&&"fullWidth"]};return Ne(o,h2,t)},S2=U("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>C({},t.root,t[`margin${me(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>C({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),v2=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiFormControl"}),{children:o,className:i,color:l="primary",component:a="div",disabled:s=!1,error:u=!1,focused:m,fullWidth:h=!1,hiddenLabel:f=!1,margin:v="none",required:g=!1,size:y="medium",variant:R="outlined"}=r,d=W(r,g2),c=C({},r,{color:l,component:a,disabled:s,error:u,fullWidth:h,hiddenLabel:f,margin:v,required:g,size:y,variant:R}),p=y2(c),[S,P]=x.useState(()=>{let N=!1;return o&&x.Children.forEach(o,I=>{if(!is(I,["Input","Select"]))return;const B=is(I,["Select"])?I.props.input:I;B&&k5(B.props)&&(N=!0)}),N}),[T,M]=x.useState(()=>{let N=!1;return o&&x.Children.forEach(o,I=>{is(I,["Input","Select"])&&(Dl(I.props,!0)||Dl(I.props.inputProps,!0))&&(N=!0)}),N}),[w,A]=x.useState(!1);s&&w&&A(!1);const E=m!==void 0&&!s?m:w;let F;const $=x.useMemo(()=>({adornedStart:S,setAdornedStart:P,color:l,disabled:s,error:u,filled:T,focused:E,fullWidth:h,hiddenLabel:f,size:y,onBlur:()=>{A(!1)},onEmpty:()=>{M(!1)},onFilled:()=>{M(!0)},onFocus:()=>{A(!0)},registerEffect:F,required:g,variant:R}),[S,l,s,u,T,E,h,f,F,g,y,R]);return D.jsx(bc.Provider,{value:$,children:D.jsx(S2,C({as:a,ownerState:c,className:Z(p.root,i),ref:n},d,{children:o}))})}),x2=v2;function C2(e){return be("MuiFormLabel",e)}const M2=Re("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),Oo=M2,P2=["children","className","color","component","disabled","error","filled","focused","required"],T2=e=>{const{classes:t,color:n,focused:r,disabled:o,error:i,filled:l,required:a}=e,s={root:["root",`color${me(n)}`,o&&"disabled",i&&"error",l&&"filled",r&&"focused",a&&"required"],asterisk:["asterisk",i&&"error"]};return Ne(s,C2,t)},R2=U("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},t)=>C({},t.root,e.color==="secondary"&&t.colorSecondary,e.filled&&t.filled)})(({theme:e,ownerState:t})=>C({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${Oo.focused}`]:{color:(e.vars||e).palette[t.color].main},[`&.${Oo.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${Oo.error}`]:{color:(e.vars||e).palette.error.main}})),E2=U("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${Oo.error}`]:{color:(e.vars||e).palette.error.main}})),k2=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiFormLabel"}),{children:o,className:i,component:l="label"}=r,a=W(r,P2),s=mi(),u=fi({props:r,muiFormControl:s,states:["color","required","focused","disabled","error","filled"]}),m=C({},r,{color:u.color||"primary",component:l,disabled:u.disabled,error:u.error,filled:u.filled,focused:u.focused,required:u.required}),h=T2(m);return D.jsxs(R2,C({as:l,ownerState:m,className:Z(h.root,i),ref:n},a,{children:[o,u.required&&D.jsxs(E2,{ownerState:m,"aria-hidden":!0,className:h.asterisk,children:[" ","*"]})]}))}),w2=k2,D2=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function gu(e){return`scale(${e}, ${e**2})`}const _2={entering:{opacity:1,transform:gu(1)},entered:{opacity:1,transform:"none"}},cs=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),G0=x.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:i,easing:l,in:a,onEnter:s,onEntered:u,onEntering:m,onExit:h,onExited:f,onExiting:v,style:g,timeout:y="auto",TransitionComponent:R=z0}=t,d=W(t,D2),c=x.useRef(),p=x.useRef(),S=Dc(),P=x.useRef(null),T=tt(P,i.ref,n),M=B=>j=>{if(B){const z=P.current;j===void 0?B(z):B(z,j)}},w=M(m),A=M((B,j)=>{V0(B);const{duration:z,delay:k,easing:b}=kl({style:g,timeout:y,easing:l},{mode:"enter"});let O;y==="auto"?(O=S.transitions.getAutoHeightDuration(B.clientHeight),p.current=O):O=z,B.style.transition=[S.transitions.create("opacity",{duration:O,delay:k}),S.transitions.create("transform",{duration:cs?O:O*.666,delay:k,easing:b})].join(","),s&&s(B,j)}),E=M(u),F=M(v),$=M(B=>{const{duration:j,delay:z,easing:k}=kl({style:g,timeout:y,easing:l},{mode:"exit"});let b;y==="auto"?(b=S.transitions.getAutoHeightDuration(B.clientHeight),p.current=b):b=j,B.style.transition=[S.transitions.create("opacity",{duration:b,delay:z}),S.transitions.create("transform",{duration:cs?b:b*.666,delay:cs?z:z||b*.333,easing:k})].join(","),B.style.opacity=0,B.style.transform=gu(.75),h&&h(B)}),N=M(f),I=B=>{y==="auto"&&(c.current=setTimeout(B,p.current||0)),r&&r(P.current,B)};return x.useEffect(()=>()=>{clearTimeout(c.current)},[]),D.jsx(R,C({appear:o,in:a,nodeRef:P,onEnter:A,onEntered:E,onEntering:w,onExit:$,onExited:N,onExiting:F,addEndListener:I,timeout:y==="auto"?null:y},d,{children:(B,j)=>x.cloneElement(i,C({style:C({opacity:0,transform:gu(.75),visibility:B==="exited"&&!a?"hidden":void 0},_2[B],g,i.props.style),ref:T},j))}))});G0.muiSupportAuto=!0;const A2=G0,b2=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],I2=e=>{const{classes:t,disableUnderline:n}=e,o=Ne({root:["root",!n&&"underline"],input:["input"]},B5,t);return C({},t,o)},B2=U(Aa,{shouldForwardProp:e=>yn(e)||e==="classes",name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...Da(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{let r=e.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(r=`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),C({position:"relative"},t.formControl&&{"label + &":{marginTop:16}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(e.vars||e).palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${go.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${go.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${r}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${go.disabled}, .${go.error}):before`]:{borderBottom:`2px solid ${(e.vars||e).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${r}`}},[`&.${go.disabled}:before`]:{borderBottomStyle:"dotted"}})}),F2=U(ba,{name:"MuiInput",slot:"Input",overridesResolver:_a})({}),K0=x.forwardRef(function(t,n){var r,o,i,l;const a=Ie({props:t,name:"MuiInput"}),{disableUnderline:s,components:u={},componentsProps:m,fullWidth:h=!1,inputComponent:f="input",multiline:v=!1,slotProps:g,slots:y={},type:R="text"}=a,d=W(a,b2),c=I2(a),S={root:{ownerState:{disableUnderline:s}}},P=g??m?dt(g??m,S):S,T=(r=(o=y.root)!=null?o:u.Root)!=null?r:B2,M=(i=(l=y.input)!=null?l:u.Input)!=null?i:F2;return D.jsx(Ic,C({slots:{root:T,input:M},slotProps:P,fullWidth:h,inputComponent:f,multiline:v,ref:n,type:R},d,{classes:c}))});K0.muiName="Input";const N2=K0;function O2(e){return be("MuiInputLabel",e)}Re("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const L2=["disableAnimation","margin","shrink","variant","className"],$2=e=>{const{classes:t,formControl:n,size:r,shrink:o,disableAnimation:i,variant:l,required:a}=e,s={root:["root",n&&"formControl",!i&&"animated",o&&"shrink",r&&r!=="normal"&&`size${me(r)}`,l],asterisk:[a&&"asterisk"]},u=Ne(s,O2,t);return C({},t,u)},j2=U(w2,{shouldForwardProp:e=>yn(e)||e==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${Oo.asterisk}`]:t.asterisk},t.root,n.formControl&&t.formControl,n.size==="small"&&t.sizeSmall,n.shrink&&t.shrink,!n.disableAnimation&&t.animated,t[n.variant]]}})(({theme:e,ownerState:t})=>C({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},t.size==="small"&&{transform:"translate(0, 17px) scale(1)"},t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},t.variant==="filled"&&C({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},t.shrink&&C({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},t.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),t.variant==="outlined"&&C({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),z2=x.forwardRef(function(t,n){const r=Ie({name:"MuiInputLabel",props:t}),{disableAnimation:o=!1,shrink:i,className:l}=r,a=W(r,L2),s=mi();let u=i;typeof u>"u"&&s&&(u=s.filled||s.focused||s.adornedStart);const m=fi({props:r,muiFormControl:s,states:["size","variant","required"]}),h=C({},r,{disableAnimation:o,formControl:s,shrink:u,size:m.size,variant:m.variant,required:m.required}),f=$2(h);return D.jsx(j2,C({"data-shrink":u,ownerState:h,ref:n,className:Z(f.root,l)},a,{classes:f}))}),V2=z2,H2=x.createContext({}),yu=H2;function W2(e){return be("MuiList",e)}Re("MuiList",["root","padding","dense","subheader"]);const U2=["children","className","component","dense","disablePadding","subheader"],G2=e=>{const{classes:t,disablePadding:n,dense:r,subheader:o}=e;return Ne({root:["root",!n&&"padding",r&&"dense",o&&"subheader"]},W2,t)},K2=U("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>C({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),Y2=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiList"}),{children:o,className:i,component:l="ul",dense:a=!1,disablePadding:s=!1,subheader:u}=r,m=W(r,U2),h=x.useMemo(()=>({dense:a}),[a]),f=C({},r,{component:l,dense:a,disablePadding:s}),v=G2(f);return D.jsx(yu.Provider,{value:h,children:D.jsxs(K2,C({as:l,className:Z(v.root,i),ref:n,ownerState:f},m,{children:[u,o]}))})}),Q2=Y2,X2=Re("MuiListItemIcon",["root","alignItemsFlexStart"]),Ip=X2,q2=Re("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Bp=q2,Z2=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function ds(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function Fp(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function Y0(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function yo(e,t,n,r,o,i){let l=!1,a=o(e,t,t?n:!1);for(;a;){if(a===e.firstChild){if(l)return!1;l=!0}const s=r?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!Y0(a,i)||s)a=o(e,a,n);else return a.focus(),!0}return!1}const J2=x.forwardRef(function(t,n){const{actions:r,autoFocus:o=!1,autoFocusItem:i=!1,children:l,className:a,disabledItemsFocusable:s=!1,disableListWrap:u=!1,onKeyDown:m,variant:h="selectedMenu"}=t,f=W(t,Z2),v=x.useRef(null),g=x.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});jn(()=>{o&&v.current.focus()},[o]),x.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(p,S)=>{const P=!v.current.style.width;if(p.clientHeight<v.current.clientHeight&&P){const T=`${s0(St(p))}px`;v.current.style[S.direction==="rtl"?"paddingLeft":"paddingRight"]=T,v.current.style.width=`calc(100% + ${T})`}return v.current}}),[]);const y=p=>{const S=v.current,P=p.key,T=St(S).activeElement;if(P==="ArrowDown")p.preventDefault(),yo(S,T,u,s,ds);else if(P==="ArrowUp")p.preventDefault(),yo(S,T,u,s,Fp);else if(P==="Home")p.preventDefault(),yo(S,null,u,s,ds);else if(P==="End")p.preventDefault(),yo(S,null,u,s,Fp);else if(P.length===1){const M=g.current,w=P.toLowerCase(),A=performance.now();M.keys.length>0&&(A-M.lastTime>500?(M.keys=[],M.repeating=!0,M.previousKeyMatched=!0):M.repeating&&w!==M.keys[0]&&(M.repeating=!1)),M.lastTime=A,M.keys.push(w);const E=T&&!M.repeating&&Y0(T,M);M.previousKeyMatched&&(E||yo(S,T,!1,s,ds,M))?p.preventDefault():M.previousKeyMatched=!1}m&&m(p)},R=tt(v,n);let d=-1;x.Children.forEach(l,(p,S)=>{if(!x.isValidElement(p)){d===S&&(d+=1,d>=l.length&&(d=-1));return}p.props.disabled||(h==="selectedMenu"&&p.props.selected||d===-1)&&(d=S),d===S&&(p.props.disabled||p.props.muiSkipListHighlight||p.type.muiSkipListHighlight)&&(d+=1,d>=l.length&&(d=-1))});const c=x.Children.map(l,(p,S)=>{if(S===d){const P={};return i&&(P.autoFocus=!0),p.props.tabIndex===void 0&&h==="selectedMenu"&&(P.tabIndex=0),x.cloneElement(p,P)}return p});return D.jsx(Q2,C({role:"menu",ref:R,className:a,onKeyDown:y,tabIndex:o?0:-1},f,{children:c}))}),eC=J2;function tC(e){return be("MuiPopover",e)}Re("MuiPopover",["root","paper"]);const nC=["onEntering"],rC=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],oC=["slotProps"];function Np(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Op(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Lp(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function ps(e){return typeof e=="function"?e():e}const iC=e=>{const{classes:t}=e;return Ne({root:["root"],paper:["paper"]},tC,t)},lC=U(s2,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Q0=U(wx,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),aC=x.forwardRef(function(t,n){var r,o,i;const l=Ie({props:t,name:"MuiPopover"}),{action:a,anchorEl:s,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:m,anchorReference:h="anchorEl",children:f,className:v,container:g,elevation:y=8,marginThreshold:R=16,open:d,PaperProps:c={},slots:p,slotProps:S,transformOrigin:P={vertical:"top",horizontal:"left"},TransitionComponent:T=A2,transitionDuration:M="auto",TransitionProps:{onEntering:w}={},disableScrollLock:A=!1}=l,E=W(l.TransitionProps,nC),F=W(l,rC),$=(r=S==null?void 0:S.paper)!=null?r:c,N=x.useRef(),I=tt(N,$.ref),B=C({},l,{anchorOrigin:u,anchorReference:h,elevation:y,marginThreshold:R,externalPaperSlotProps:$,transformOrigin:P,TransitionComponent:T,transitionDuration:M,TransitionProps:E}),j=iC(B),z=x.useCallback(()=>{if(h==="anchorPosition")return m;const K=ps(s),ge=(K&&K.nodeType===1?K:St(N.current).body).getBoundingClientRect();return{top:ge.top+Np(ge,u.vertical),left:ge.left+Op(ge,u.horizontal)}},[s,u.horizontal,u.vertical,m,h]),k=x.useCallback(K=>({vertical:Np(K,P.vertical),horizontal:Op(K,P.horizontal)}),[P.horizontal,P.vertical]),b=x.useCallback(K=>{const ae={width:K.offsetWidth,height:K.offsetHeight},ge=k(ae);if(h==="none")return{top:null,left:null,transformOrigin:Lp(ge)};const vn=z();let Rt=vn.top-ge.vertical,Et=vn.left-ge.horizontal;const Nt=Rt+ae.height,kt=Et+ae.width,Ce=ar(ps(s)),tn=Ce.innerHeight-R,it=Ce.innerWidth-R;if(R!==null&&Rt<R){const ye=Rt-R;Rt-=ye,ge.vertical+=ye}else if(R!==null&&Nt>tn){const ye=Nt-tn;Rt-=ye,ge.vertical+=ye}if(R!==null&&Et<R){const ye=Et-R;Et-=ye,ge.horizontal+=ye}else if(kt>it){const ye=kt-it;Et-=ye,ge.horizontal+=ye}return{top:`${Math.round(Rt)}px`,left:`${Math.round(Et)}px`,transformOrigin:Lp(ge)}},[s,h,z,k,R]),[O,X]=x.useState(d),G=x.useCallback(()=>{const K=N.current;if(!K)return;const ae=b(K);ae.top!==null&&(K.style.top=ae.top),ae.left!==null&&(K.style.left=ae.left),K.style.transformOrigin=ae.transformOrigin,X(!0)},[b]);x.useEffect(()=>(A&&window.addEventListener("scroll",G),()=>window.removeEventListener("scroll",G)),[s,A,G]);const De=(K,ae)=>{w&&w(K,ae),G()},Q=()=>{X(!1)};x.useEffect(()=>{d&&G()}),x.useImperativeHandle(a,()=>d?{updatePosition:()=>{G()}}:null,[d,G]),x.useEffect(()=>{if(!d)return;const K=a0(()=>{G()}),ae=ar(s);return ae.addEventListener("resize",K),()=>{K.clear(),ae.removeEventListener("resize",K)}},[s,d,G]);let he=M;M==="auto"&&!T.muiSupportAuto&&(he=void 0);const oe=g||(s?St(ps(s)).body:void 0),Ve=(o=p==null?void 0:p.root)!=null?o:lC,Tt=(i=p==null?void 0:p.paper)!=null?i:Q0,_e=qr({elementType:Tt,externalSlotProps:C({},$,{style:O?$.style:C({},$.style,{opacity:0})}),additionalProps:{elevation:y,ref:I},ownerState:B,className:Z(j.paper,$==null?void 0:$.className)}),ot=qr({elementType:Ve,externalSlotProps:(S==null?void 0:S.root)||{},externalForwardedProps:F,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:oe,open:d},ownerState:B,className:Z(j.root,v)}),{slotProps:ne}=ot,xe=W(ot,oC);return D.jsx(Ve,C({},xe,!wl(Ve)&&{slotProps:ne,disableScrollLock:A},{children:D.jsx(T,C({appear:!0,in:d,onEntering:De,onExited:Q,timeout:he},E,{children:D.jsx(Tt,C({},_e,{children:f}))}))}))}),sC=aC;function uC(e){return be("MuiMenu",e)}Re("MuiMenu",["root","paper","list"]);const cC=["onEntering"],dC=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],pC={vertical:"top",horizontal:"right"},fC={vertical:"top",horizontal:"left"},mC=e=>{const{classes:t}=e;return Ne({root:["root"],paper:["paper"],list:["list"]},uC,t)},hC=U(sC,{shouldForwardProp:e=>yn(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),gC=U(Q0,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),yC=U(eC,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),SC=x.forwardRef(function(t,n){var r,o;const i=Ie({props:t,name:"MuiMenu"}),{autoFocus:l=!0,children:a,className:s,disableAutoFocusItem:u=!1,MenuListProps:m={},onClose:h,open:f,PaperProps:v={},PopoverClasses:g,transitionDuration:y="auto",TransitionProps:{onEntering:R}={},variant:d="selectedMenu",slots:c={},slotProps:p={}}=i,S=W(i.TransitionProps,cC),P=W(i,dC),T=Dc(),M=T.direction==="rtl",w=C({},i,{autoFocus:l,disableAutoFocusItem:u,MenuListProps:m,onEntering:R,PaperProps:v,transitionDuration:y,TransitionProps:S,variant:d}),A=mC(w),E=l&&!u&&f,F=x.useRef(null),$=(b,O)=>{F.current&&F.current.adjustStyleForScrollbar(b,T),R&&R(b,O)},N=b=>{b.key==="Tab"&&(b.preventDefault(),h&&h(b,"tabKeyDown"))};let I=-1;x.Children.map(a,(b,O)=>{x.isValidElement(b)&&(b.props.disabled||(d==="selectedMenu"&&b.props.selected||I===-1)&&(I=O))});const B=(r=c.paper)!=null?r:gC,j=(o=p.paper)!=null?o:v,z=qr({elementType:c.root,externalSlotProps:p.root,ownerState:w,className:[A.root,s]}),k=qr({elementType:B,externalSlotProps:j,ownerState:w,className:A.paper});return D.jsx(hC,C({onClose:h,anchorOrigin:{vertical:"bottom",horizontal:M?"right":"left"},transformOrigin:M?pC:fC,slots:{paper:B,root:c.root},slotProps:{root:z,paper:k},open:f,ref:n,transitionDuration:y,TransitionProps:C({onEntering:$},S),ownerState:w},P,{classes:g,children:D.jsx(yC,C({onKeyDown:N,actions:F,autoFocus:l&&(I===-1||u),autoFocusItem:E,variant:d},m,{className:Z(A.list,m.className),children:a}))}))}),vC=SC;function xC(e){return be("MuiMenuItem",e)}const CC=Re("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),So=CC,MC=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],PC=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},TC=e=>{const{disabled:t,dense:n,divider:r,disableGutters:o,selected:i,classes:l}=e,s=Ne({root:["root",n&&"dense",t&&"disabled",!o&&"gutters",r&&"divider",i&&"selected"]},xC,l);return C({},l,s)},RC=U(Kx,{shouldForwardProp:e=>yn(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:PC})(({theme:e,ownerState:t})=>C({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${So.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Ir(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${So.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Ir(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${So.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Ir(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Ir(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${So.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${So.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${bp.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${bp.inset}`]:{marginLeft:52},[`& .${Bp.root}`]:{marginTop:0,marginBottom:0},[`& .${Bp.inset}`]:{paddingLeft:36},[`& .${Ip.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&C({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${Ip.root} svg`]:{fontSize:"1.25rem"}}))),EC=x.forwardRef(function(t,n){const r=Ie({props:t,name:"MuiMenuItem"}),{autoFocus:o=!1,component:i="li",dense:l=!1,divider:a=!1,disableGutters:s=!1,focusVisibleClassName:u,role:m="menuitem",tabIndex:h,className:f}=r,v=W(r,MC),g=x.useContext(yu),y=x.useMemo(()=>({dense:l||g.dense||!1,disableGutters:s}),[g.dense,l,s]),R=x.useRef(null);jn(()=>{o&&R.current&&R.current.focus()},[o]);const d=C({},r,{dense:y.dense,divider:a,disableGutters:s}),c=TC(r),p=tt(R,n);let S;return r.disabled||(S=h!==void 0?h:-1),D.jsx(yu.Provider,{value:y,children:D.jsx(RC,C({ref:p,role:m,tabIndex:S,component:i,focusVisibleClassName:Z(c.focusVisible,u),className:Z(c.root,f)},v,{ownerState:d,classes:c}))})}),kC=EC;function wC(e){return be("MuiNativeSelect",e)}const DC=Re("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Bc=DC,_C=["className","disabled","error","IconComponent","inputRef","variant"],AC=e=>{const{classes:t,variant:n,disabled:r,multiple:o,open:i,error:l}=e,a={select:["select",n,r&&"disabled",o&&"multiple",l&&"error"],icon:["icon",`icon${me(n)}`,i&&"iconOpen",r&&"disabled"]};return Ne(a,wC,t)},X0=({ownerState:e,theme:t})=>C({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":C({},t.vars?{backgroundColor:`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:t.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${Bc.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},e.variant==="filled"&&{"&&&":{paddingRight:32}},e.variant==="outlined"&&{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}),bC=U("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:yn,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.select,t[n.variant],n.error&&t.error,{[`&.${Bc.multiple}`]:t.multiple}]}})(X0),q0=({ownerState:e,theme:t})=>C({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${Bc.disabled}`]:{color:(t.vars||t).palette.action.disabled}},e.open&&{transform:"rotate(180deg)"},e.variant==="filled"&&{right:7},e.variant==="outlined"&&{right:7}),IC=U("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${me(n.variant)}`],n.open&&t.iconOpen]}})(q0),BC=x.forwardRef(function(t,n){const{className:r,disabled:o,error:i,IconComponent:l,inputRef:a,variant:s="standard"}=t,u=W(t,_C),m=C({},t,{disabled:o,variant:s,error:i}),h=AC(m);return D.jsxs(x.Fragment,{children:[D.jsx(bC,C({ownerState:m,className:Z(h.select,r),disabled:o,ref:a||n},u)),t.multiple?null:D.jsx(IC,{as:l,ownerState:m,className:h.icon})]})}),FC=BC;var $p;const NC=["children","classes","className","label","notched"],OC=U("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),LC=U("legend")(({ownerState:e,theme:t})=>C({float:"unset",width:"auto",overflow:"hidden"},!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},e.withLabel&&C({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})})));function $C(e){const{className:t,label:n,notched:r}=e,o=W(e,NC),i=n!=null&&n!=="",l=C({},e,{notched:r,withLabel:i});return D.jsx(OC,C({"aria-hidden":!0,className:t,ownerState:l},o,{children:D.jsx(LC,{ownerState:l,children:i?D.jsx("span",{children:n}):$p||($p=D.jsx("span",{className:"notranslate",children:"​"}))})}))}const jC=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],zC=e=>{const{classes:t}=e,r=Ne({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},N5,t);return C({},t,r)},VC=U(Aa,{shouldForwardProp:e=>yn(e)||e==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:Da})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return C({position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${Mn.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${Mn.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:n}},[`&.${Mn.focused} .${Mn.notchedOutline}`]:{borderColor:(e.vars||e).palette[t.color].main,borderWidth:2},[`&.${Mn.error} .${Mn.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${Mn.disabled} .${Mn.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&C({padding:"16.5px 14px"},t.size==="small"&&{padding:"8.5px 14px"}))}),HC=U($C,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>{const t=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}}),WC=U(ba,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:_a})(({theme:e,ownerState:t})=>C({padding:"16.5px 14px"},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0})),Z0=x.forwardRef(function(t,n){var r,o,i,l,a;const s=Ie({props:t,name:"MuiOutlinedInput"}),{components:u={},fullWidth:m=!1,inputComponent:h="input",label:f,multiline:v=!1,notched:g,slots:y={},type:R="text"}=s,d=W(s,jC),c=zC(s),p=mi(),S=fi({props:s,muiFormControl:p,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),P=C({},s,{color:S.color||"primary",disabled:S.disabled,error:S.error,focused:S.focused,formControl:p,fullWidth:m,hiddenLabel:S.hiddenLabel,multiline:v,size:S.size,type:R}),T=(r=(o=y.root)!=null?o:u.Root)!=null?r:VC,M=(i=(l=y.input)!=null?l:u.Input)!=null?i:WC;return D.jsx(Ic,C({slots:{root:T,input:M},renderSuffix:w=>D.jsx(HC,{ownerState:P,className:c.notchedOutline,label:f!=null&&f!==""&&S.required?a||(a=D.jsxs(x.Fragment,{children:[f," ","*"]})):f,notched:typeof g<"u"?g:!!(w.startAdornment||w.filled||w.focused)}),fullWidth:m,inputComponent:h,multiline:v,ref:n,type:R},d,{classes:C({},c,{notchedOutline:null})}))});Z0.muiName="Input";const UC=Z0;function GC(e){return be("MuiSelect",e)}const KC=Re("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),vo=KC;var jp;const YC=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","error","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],QC=U("div",{name:"MuiSelect",slot:"Select",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`&.${vo.select}`]:t.select},{[`&.${vo.select}`]:t[n.variant]},{[`&.${vo.error}`]:t.error},{[`&.${vo.multiple}`]:t.multiple}]}})(X0,{[`&.${vo.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),XC=U("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${me(n.variant)}`],n.open&&t.iconOpen]}})(q0),qC=U("input",{shouldForwardProp:e=>ix(e)&&e!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(e,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function zp(e,t){return typeof t=="object"&&t!==null?e===t:String(e)===String(t)}function ZC(e){return e==null||typeof e=="string"&&!e.trim()}const JC=e=>{const{classes:t,variant:n,disabled:r,multiple:o,open:i,error:l}=e,a={select:["select",n,r&&"disabled",o&&"multiple",l&&"error"],icon:["icon",`icon${me(n)}`,i&&"iconOpen",r&&"disabled"],nativeInput:["nativeInput"]};return Ne(a,GC,t)},eM=x.forwardRef(function(t,n){var r;const{"aria-describedby":o,"aria-label":i,autoFocus:l,autoWidth:a,children:s,className:u,defaultOpen:m,defaultValue:h,disabled:f,displayEmpty:v,error:g=!1,IconComponent:y,inputRef:R,labelId:d,MenuProps:c={},multiple:p,name:S,onBlur:P,onChange:T,onClose:M,onFocus:w,onOpen:A,open:E,readOnly:F,renderValue:$,SelectDisplayProps:N={},tabIndex:I,value:B,variant:j="standard"}=t,z=W(t,YC),[k,b]=Qd({controlled:B,default:h,name:"Select"}),[O,X]=Qd({controlled:E,default:m,name:"Select"}),G=x.useRef(null),De=x.useRef(null),[Q,he]=x.useState(null),{current:oe}=x.useRef(E!=null),[Ve,Tt]=x.useState(),_e=tt(n,R),ot=x.useCallback(V=>{De.current=V,V&&he(V)},[]),ne=Q==null?void 0:Q.parentNode;x.useImperativeHandle(_e,()=>({focus:()=>{De.current.focus()},node:G.current,value:k}),[k]),x.useEffect(()=>{m&&O&&Q&&!oe&&(Tt(a?null:ne.clientWidth),De.current.focus())},[Q,a]),x.useEffect(()=>{l&&De.current.focus()},[l]),x.useEffect(()=>{if(!d)return;const V=St(De.current).getElementById(d);if(V){const de=()=>{getSelection().isCollapsed&&De.current.focus()};return V.addEventListener("click",de),()=>{V.removeEventListener("click",de)}}},[d]);const xe=(V,de)=>{V?A&&A(de):M&&M(de),oe||(Tt(a?null:ne.clientWidth),X(V))},K=V=>{V.button===0&&(V.preventDefault(),De.current.focus(),xe(!0,V))},ae=V=>{xe(!1,V)},ge=x.Children.toArray(s),vn=V=>{const de=ge.find(He=>He.props.value===V.target.value);de!==void 0&&(b(de.props.value),T&&T(V,de))},Rt=V=>de=>{let He;if(de.currentTarget.hasAttribute("tabindex")){if(p){He=Array.isArray(k)?k.slice():[];const dr=k.indexOf(V.props.value);dr===-1?He.push(V.props.value):He.splice(dr,1)}else He=V.props.value;if(V.props.onClick&&V.props.onClick(de),k!==He&&(b(He),T)){const dr=de.nativeEvent||de,Nc=new dr.constructor(dr.type,dr);Object.defineProperty(Nc,"target",{writable:!0,value:{value:He,name:S}}),T(Nc,V)}p||xe(!1,de)}},Et=V=>{F||[" ","ArrowUp","ArrowDown","Enter"].indexOf(V.key)!==-1&&(V.preventDefault(),xe(!0,V))},Nt=Q!==null&&O,kt=V=>{!Nt&&P&&(Object.defineProperty(V,"target",{writable:!0,value:{value:k,name:S}}),P(V))};delete z["aria-invalid"];let Ce,tn;const it=[];let ye=!1;(Dl({value:k})||v)&&($?Ce=$(k):ye=!0);const Ut=ge.map(V=>{if(!x.isValidElement(V))return null;let de;if(p){if(!Array.isArray(k))throw new Error($n(2));de=k.some(He=>zp(He,V.props.value)),de&&ye&&it.push(V.props.children)}else de=zp(k,V.props.value),de&&ye&&(tn=V.props.children);return x.cloneElement(V,{"aria-selected":de?"true":"false",onClick:Rt(V),onKeyUp:He=>{He.key===" "&&He.preventDefault(),V.props.onKeyUp&&V.props.onKeyUp(He)},role:"option",selected:de,value:void 0,"data-value":V.props.value})});ye&&(p?it.length===0?Ce=null:Ce=it.reduce((V,de,He)=>(V.push(de),He<it.length-1&&V.push(", "),V),[]):Ce=tn);let xn=Ve;!a&&oe&&Q&&(xn=ne.clientWidth);let nn;typeof I<"u"?nn=I:nn=f?null:0;const ue=N.id||(S?`mui-component-select-${S}`:void 0),H=C({},t,{variant:j,value:k,open:Nt,error:g}),rn=JC(H),ro=C({},c.PaperProps,(r=c.slotProps)==null?void 0:r.paper),oo=z1();return D.jsxs(x.Fragment,{children:[D.jsx(QC,C({ref:ot,tabIndex:nn,role:"combobox","aria-controls":oo,"aria-disabled":f?"true":void 0,"aria-expanded":Nt?"true":"false","aria-haspopup":"listbox","aria-label":i,"aria-labelledby":[d,ue].filter(Boolean).join(" ")||void 0,"aria-describedby":o,onKeyDown:Et,onMouseDown:f||F?null:K,onBlur:kt,onFocus:w},N,{ownerState:H,className:Z(N.className,rn.select,u),id:ue,children:ZC(Ce)?jp||(jp=D.jsx("span",{className:"notranslate",children:"​"})):Ce})),D.jsx(qC,C({"aria-invalid":g,value:Array.isArray(k)?k.join(","):k,name:S,ref:G,"aria-hidden":!0,onChange:vn,tabIndex:-1,disabled:f,className:rn.nativeInput,autoFocus:l,ownerState:H},z)),D.jsx(XC,{as:y,className:rn.icon,ownerState:H}),D.jsx(vC,C({id:`menu-${S||""}`,anchorEl:ne,open:Nt,onClose:ae,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},c,{MenuListProps:C({"aria-labelledby":d,role:"listbox","aria-multiselectable":p?"true":void 0,disableListWrap:!0,id:oo},c.MenuListProps),slotProps:C({},c.slotProps,{paper:C({},ro,{style:C({minWidth:xn},ro!=null?ro.style:null)})}),children:Ut}))]})}),tM=eM,nM=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],rM=["root"],oM=e=>{const{classes:t}=e;return t},Fc={name:"MuiSelect",overridesResolver:(e,t)=>t.root,shouldForwardProp:e=>yn(e)&&e!=="variant",slot:"Root"},iM=U(N2,Fc)(""),lM=U(UC,Fc)(""),aM=U(m2,Fc)(""),J0=x.forwardRef(function(t,n){const r=Ie({name:"MuiSelect",props:t}),{autoWidth:o=!1,children:i,classes:l={},className:a,defaultOpen:s=!1,displayEmpty:u=!1,IconComponent:m=j5,id:h,input:f,inputProps:v,label:g,labelId:y,MenuProps:R,multiple:d=!1,native:c=!1,onClose:p,onOpen:S,open:P,renderValue:T,SelectDisplayProps:M,variant:w="outlined"}=r,A=W(r,nM),E=c?FC:tM,F=mi(),$=fi({props:r,muiFormControl:F,states:["variant","error"]}),N=$.variant||w,I=C({},r,{variant:N,classes:l}),B=oM(I),j=W(B,rM),z=f||{standard:D.jsx(iM,{ownerState:I}),outlined:D.jsx(lM,{label:g,ownerState:I}),filled:D.jsx(aM,{ownerState:I})}[N],k=tt(n,z.ref);return D.jsx(x.Fragment,{children:x.cloneElement(z,C({inputComponent:E,inputProps:C({children:i,error:$.error,IconComponent:m,variant:N,type:void 0,multiple:d},c?{id:h}:{autoWidth:o,defaultOpen:s,displayEmpty:u,labelId:y,MenuProps:R,onClose:p,onOpen:S,open:P,renderValue:T,SelectDisplayProps:C({id:h},M)},v,{classes:v?dt(j,v.classes):j},f?f.props.inputProps:{})},d&&c&&N==="outlined"?{notched:!0}:{},{ref:k,className:Z(z.props.className,a,B.root)},!f&&{variant:N},A))})});J0.muiName="Select";const sM=J0;function Vp(e){const[t,n]=x.useState();x.useEffect(()=>{var o;(o=e.onChange)==null||o.call(e,e.items[0].value)},[]);function r(o){var i;n(o.target.value),(i=e.onChange)==null||i.call(e,o.target.value)}return D.jsxs(x2,{className:"w-fit !min-w-[8rem]",children:[D.jsx(V2,{id:e.id+"-label",children:e.label}),D.jsx(sM,{labelId:e.id+"-label",id:e.id,value:t??e.items[0].value,label:e.label,onChange:r,children:e.items.map(o=>D.jsx(kC,{value:o.value,children:o.label},o.value))})]})}function uM(e){return D.jsx("div",{className:"flex flex-row flex-wrap",style:{gap:(e.gap??0)+"rem"},children:e.children})}function cM(){return{MagazineSize:1,StartingAmmo:1,RateOfFire:1,EnvPiercing:1,AimTimeMult:1,MovementAimPenaltyMult:1,FirstShotRecoilMult:1,VerticalRecoil:1,RecoilLeft:1,RecoilRight:1,MaxSpreadBloom:1,SpreadBloom:1,BloomDecayRate:1,ProjectileSpread:1,AimBulletSpread:1,ProjectilesPerRound:1,ChamberTime:1,BulletSpeed:1,BulletDamage:1,FlakMult:1,ArmorPiercing:1,MinDamage:1,MinRange:1,MaxRange:1,BulletSpread:1,ReloadTime:1}}class eh{}Wn(eh,"attritionJson",`{
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
}`);const q=class q{static get(t){return q.data[t]}};Wn(q,"data",JSON.parse(eh.attritionJson)),Wn(q,"sights",["Infantry/Components/Rifle/Ironsights","Infantry/Components/Rifle/Sights_Reflex","Infantry/Components/Rifle/Scope_4x","Infantry/Components/Rifle/Scope_12x"]),Wn(q,"foregrips",["Infantry/Components/Rifle/No_Grip","Infantry/Components/Rifle/Vertical_Grip","Infantry/Components/Rifle/Bipod"]),Wn(q,"barrels",["Infantry/Components/Rifle/Standard_Barrel","Infantry/Components/Rifle/Heavy_Barrel","Infantry/Components/Rifle/Suppressor"]),Wn(q,"structured",{weapons:{infantry:{AKR:"Infantry/Weapons/AKR",RPK:"Infantry/Weapons/RPK",AWM:"Infantry/Weapons/AWM",SVD:"Infantry/Weapons/SVD",SMG:"Infantry/Weapons/SMG","AK-AS":"Infantry/Weapons/AK-AS",Pistol:"Infantry/Weapons/Pistol","RPG-7":"Infantry/Weapons/RPG-7",AK_Type_E:"Infantry/Weapons/AK_Type_E","MG-42":"Infantry/Weapons/MG-42","PTRS-41":"Infantry/Weapons/PTRS-41"},vehicles:{}},components:{infantry:{"RPG-7":{Scope:q.sights,Ammo:["Infantry/Components/RPG-7/RPG_Stock","Infantry/Components/RPG-7/RPG_HV","Infantry/Components/RPG-7/RPG_Flak","Infantry/Components/RPG-7/RPG_Cluster"]},AKR:{Scope:q.sights,Foregrip:q.foregrips,Barrel:q.barrels},RPK:{Scope:q.sights,Foregrip:q.foregrips,Barrel:q.barrels},AWM:{Scope:q.sights,Foregrip:q.foregrips,Barrel:q.barrels},SVD:{Scope:q.sights,Foregrip:q.foregrips,Barrel:q.barrels},SMG:{Scope:q.sights,Barrel:q.barrels},"AK-AS":{Scope:q.sights,Foregrip:q.foregrips,Muzzle:["Infantry/Components/AK-AS/Standard_Barrel","Infantry/Components/AK-AS/Shotgun_Choke","Infantry/Components/AK-AS/Shotgun_Suppressor"],"Ammo ":["Infantry/Components/AK-AS/Ammo_Slugs","Infantry/Components/AK-AS/Ammo_Buckshot","Infantry/Components/AK-AS/Ammo_Flechette"]},Pistol:{Scope:q.sights,Barrel:q.barrels},AK_Type_E:{Scope:q.sights,Foregrip:q.foregrips,"Ammo  ":["Infantry/Components/AK_Type_E/HE_40mm","Infantry/Components/AK_Type_E/FLAK_40mm","Infantry/Components/AK_Type_E/Canister_40mm","Infantry/Components/AK_Type_E/LVG_40mm"]},"MG-42":{Scope:q.sights,Barrel:q.barrels},"PTRS-41":{Scope:q.sights,Barrel:q.barrels}},vehicles:{}},vehicles:{}});let ft=q;class Hp{static round(t,n){return+t.toFixed(n)}}function dM(){const e=Object.values(ft.structured.weapons.infantry).map(v=>({label:ft.get(v).ToolName,value:v})),[t,n]=x.useState(ft.get(e[0].value)),[r,o]=x.useState(e[0].label),[i,l]=x.useState([]),[a,s]=x.useState({});x.useEffect(()=>{f(r)},[]);function u(v){let g=ft.get(v);g.ArmorPiercing??(g.ArmorPiercing=0),n(g);let y=g.ToolName.replace(/ /g,"_");o(y);let R=Object.keys(ft.structured.components.infantry[y]);s(Object.keys(a).filter(d=>R.includes(d)).reduce((d,c)=>(d[c]=a[c],d),{})),f(y),h(y)}function m(v,g){a[v]=g,s(a),h(r)}function h(v){const g=cM();Object.values(a).forEach(d=>{let c=ft.get(d);Object.keys(c.Modifiers).forEach(p=>{g[p]+=c.Modifiers[p]??0})});let y={};Object.values(a).forEach(d=>{let c=ft.get(d);Object.keys(c.Overrides).forEach(p=>{y[p]=c.Overrides[p]})});let R=JSON.parse(JSON.stringify(ft.get(`Infantry/Weapons/${v}`)));Object.keys(g).forEach(d=>{R[d]*=g[d],d!="RateOfFire"&&(R[d]=Hp.round(R[d],3)),Number.isNaN(R[d])&&(R[d]=0)}),Object.keys(y).forEach(d=>{R[d]=y[d]}),n(R)}function f(v){l(Object.keys(ft.structured.components.infantry[v]))}return D.jsxs(qi,{className:"p-8 rounded-md bg-zinc-900",children:[D.jsx(hu,{variant:"h4",gutterBottom:!0,className:"text-center",children:"Weapon Info"}),D.jsx("hr",{className:"border-gray-400"}),D.jsx(qi,{className:"p-8",children:D.jsxs(uM,{gap:2,children:[D.jsx(Vp,{id:"weapon",label:"Weapon",items:e,onChange:u}),i.map(v=>{let g=ft.structured.components.infantry[r][v];return D.jsx(Vp,{id:v,label:v,items:g.map(y=>({label:ft.get(y).Name,value:y})),onChange:y=>m(v,y)},v)})]})}),D.jsxs(qi,{className:"px-8 pb-8",children:[D.jsxs(hu,{variant:"h5",children:[t==null?void 0:t.ToolName," Stats"]}),D.jsx("hr",{className:"border-gray-600 mt-2 mb-4 mx-[-0.5rem]"}),D.jsxs("p",{children:["Bullet Spread: ",t.BulletSpread,"° (",t.AimBulletSpread,"° ADS)"]}),D.jsxs("p",{children:["Weapon Type: ",t.Action]}),D.jsxs("p",{children:["Aim Time Multiplier: ",t.AimTimeMult,"x"]}),D.jsxs("p",{children:["Armor Piercing: ",t.ArmorPiercing*100,"%"]}),D.jsxs("p",{children:["Reload Time: ",t.ReloadTime,"s"]}),t.MinRange==0&&t.MaxRange==0?D.jsxs("p",{children:["Damage: ",t.BulletDamage," hp"]}):D.jsxs("p",{children:["Damage: ",t.BulletDamage,"-",t.MinDamage," hp (",t.MinRange,"-",t.MaxRange," studs)"]}),D.jsxs("p",{children:["Speed: ",t.BulletSpeed," studs/s"]}),D.jsxs("p",{children:["Firerate: ",Hp.round(t.RateOfFire*60,3)," rpm"]}),D.jsxs("p",{children:["Projectile Type: ",t.ProjectileHitModule.replace(new RegExp("(?<=[a-z])(?=[A-Z])","g")," ")]})]})]})}function pM(){return D.jsxs(qi,{className:"p-8",children:[D.jsx(hu,{variant:"h2",gutterBottom:!0,className:"text-center",children:"Attrition Stats"}),D.jsx(dM,{})]})}const fM=L0({palette:{mode:"dark"}});ms.createRoot(document.getElementById("root")).render(D.jsx(zt.StrictMode,{children:D.jsxs(sx,{theme:fM,children:[D.jsx(t2,{}),D.jsx(pM,{})]})}));
