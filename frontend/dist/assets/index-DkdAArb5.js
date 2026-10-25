(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function bx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jp={exports:{}},vl={},Hp={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),Tx=Symbol.for("react.portal"),Ax=Symbol.for("react.fragment"),Cx=Symbol.for("react.strict_mode"),Nx=Symbol.for("react.profiler"),Rx=Symbol.for("react.provider"),Px=Symbol.for("react.context"),Lx=Symbol.for("react.forward_ref"),kx=Symbol.for("react.suspense"),Dx=Symbol.for("react.memo"),Ix=Symbol.for("react.lazy"),of=Symbol.iterator;function Ux(t){return t===null||typeof t!="object"?null:(t=of&&t[of]||t["@@iterator"],typeof t=="function"?t:null)}var Vp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gp=Object.assign,Wp={};function Rs(t,e,n){this.props=t,this.context=e,this.refs=Wp,this.updater=n||Vp}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xp(){}Xp.prototype=Rs.prototype;function Ju(t,e,n){this.props=t,this.context=e,this.refs=Wp,this.updater=n||Vp}var ed=Ju.prototype=new Xp;ed.constructor=Ju;Gp(ed,Rs.prototype);ed.isPureReactComponent=!0;var lf=Array.isArray,$p=Object.prototype.hasOwnProperty,td={current:null},Yp={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)$p.call(e,i)&&!Yp.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ca,type:t,key:s,ref:a,props:r,_owner:td.current}}function Fx(t,e){return{$$typeof:Ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ca}function Ox(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cf=/\/+/g;function Vl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ox(""+t.key):e.toString(36)}function Co(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ca:case Tx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Vl(a,0):i,lf(r)?(n="",t!=null&&(n=t.replace(cf,"$&/")+"/"),Co(r,e,n,"",function(u){return u})):r!=null&&(nd(r)&&(r=Fx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(cf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",lf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Vl(s,o);a+=Co(s,e,n,l,r)}else if(l=Ux(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Vl(s,o++),a+=Co(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ha(t,e,n){if(t==null)return t;var i=[],r=0;return Co(t,i,"","",function(s){return e.call(n,s,r++)}),i}function zx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},No={transition:null},Bx={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:No,ReactCurrentOwner:td};function Kp(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!nd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Rs;je.Fragment=Ax;je.Profiler=Nx;je.PureComponent=Ju;je.StrictMode=Cx;je.Suspense=kx;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bx;je.act=Kp;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Gp({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=td.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)$p.call(e,l)&&!Yp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ca,type:t.type,key:r,ref:s,props:i,_owner:a}};je.createContext=function(t){return t={$$typeof:Px,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Rx,_context:t},t.Consumer=t};je.createElement=qp;je.createFactory=function(t){var e=qp.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:Lx,render:t}};je.isValidElement=nd;je.lazy=function(t){return{$$typeof:Ix,_payload:{_status:-1,_result:t},_init:zx}};je.memo=function(t,e){return{$$typeof:Dx,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=No.transition;No.transition={};try{t()}finally{No.transition=e}};je.unstable_act=Kp;je.useCallback=function(t,e){return $t.current.useCallback(t,e)};je.useContext=function(t){return $t.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};je.useEffect=function(t,e){return $t.current.useEffect(t,e)};je.useId=function(){return $t.current.useId()};je.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return $t.current.useMemo(t,e)};je.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};je.useRef=function(t){return $t.current.useRef(t)};je.useState=function(t){return $t.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return $t.current.useTransition()};je.version="18.3.1";Hp.exports=je;var _e=Hp.exports;const jx=bx(_e);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hx=_e,Vx=Symbol.for("react.element"),Gx=Symbol.for("react.fragment"),Wx=Object.prototype.hasOwnProperty,Xx=Hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$x={key:!0,ref:!0,__self:!0,__source:!0};function Zp(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Wx.call(e,i)&&!$x.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Vx,type:t,key:s,ref:a,props:r,_owner:Xx.current}}vl.Fragment=Gx;vl.jsx=Zp;vl.jsxs=Zp;jp.exports=vl;var c=jp.exports,Kc={},Qp={exports:{}},fn={},Jp={exports:{}},em={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Y){var Z=D.length;D.push(Y);e:for(;0<Z;){var re=Z-1>>>1,ve=D[re];if(0<r(ve,Y))D[re]=Y,D[Z]=ve,Z=re;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Y=D[0],Z=D.pop();if(Z!==Y){D[0]=Z;e:for(var re=0,ve=D.length,ze=ve>>>1;re<ze;){var X=2*(re+1)-1,ne=D[X],ce=X+1,oe=D[ce];if(0>r(ne,Z))ce<ve&&0>r(oe,ne)?(D[re]=oe,D[ce]=Z,re=ce):(D[re]=ne,D[X]=Z,re=X);else if(ce<ve&&0>r(oe,Z))D[re]=oe,D[ce]=Z,re=ce;else break e}}return Y}function r(D,Y){var Z=D.sortIndex-Y.sortIndex;return Z!==0?Z:D.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],f=1,p=null,h=3,g=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var Y=n(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=D)i(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function S(D){if(y=!1,v(D),!_)if(n(l)!==null)_=!0,j(R);else{var Y=n(u);Y!==null&&q(S,Y.startTime-D)}}function R(D,Y){_=!1,y&&(y=!1,d(C),C=-1),g=!0;var Z=h;try{for(v(Y),p=n(l);p!==null&&(!(p.expirationTime>Y)||D&&!L());){var re=p.callback;if(typeof re=="function"){p.callback=null,h=p.priorityLevel;var ve=re(p.expirationTime<=Y);Y=t.unstable_now(),typeof ve=="function"?p.callback=ve:p===n(l)&&i(l),v(Y)}else i(l);p=n(l)}if(p!==null)var ze=!0;else{var X=n(u);X!==null&&q(S,X.startTime-Y),ze=!1}return ze}finally{p=null,h=Z,g=!1}}var T=!1,A=null,C=-1,b=5,M=-1;function L(){return!(t.unstable_now()-M<b)}function W(){if(A!==null){var D=t.unstable_now();M=D;var Y=!0;try{Y=A(!0,D)}finally{Y?B():(T=!1,A=null)}}else T=!1}var B;if(typeof x=="function")B=function(){x(W)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,O=F.port2;F.port1.onmessage=W,B=function(){O.postMessage(null)}}else B=function(){m(W,0)};function j(D){A=D,T||(T=!0,B())}function q(D,Y){C=m(function(){D(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,j(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var Z=h;h=Y;try{return D()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Z=h;h=D;try{return Y()}finally{h=Z}},t.unstable_scheduleCallback=function(D,Y,Z){var re=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?re+Z:re):Z=re,D){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Z+ve,D={id:f++,callback:Y,priorityLevel:D,startTime:Z,expirationTime:ve,sortIndex:-1},Z>re?(D.sortIndex=Z,e(u,D),n(l)===null&&D===n(u)&&(y?(d(C),C=-1):y=!0,q(S,Z-re))):(D.sortIndex=ve,e(l,D),_||g||(_=!0,j(R))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var Y=h;return function(){var Z=h;h=Y;try{return D.apply(this,arguments)}finally{h=Z}}}})(em);Jp.exports=em;var Yx=Jp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qx=_e,dn=Yx;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tm=new Set,ua={};function Ar(t,e){gs(t,e),gs(t+"Capture",e)}function gs(t,e){for(ua[t]=e,t=0;t<e.length;t++)tm.add(e[t])}var ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=Object.prototype.hasOwnProperty,Kx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uf={},df={};function Zx(t){return Zc.call(df,t)?!0:Zc.call(uf,t)?!1:Kx.test(t)?df[t]=!0:(uf[t]=!0,!1)}function Qx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jx(t,e,n,i){if(e===null||typeof e>"u"||Qx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var id=/[\-:]([a-z])/g;function rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(id,rd);kt[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(id,rd);kt[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(id,rd);kt[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function sd(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jx(e,n,r,i)&&(n=null),i||r===null?Zx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var pi=qx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),nm=Symbol.for("react.provider"),im=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),eu=Symbol.for("react.suspense_list"),ld=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),rm=Symbol.for("react.offscreen"),ff=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=ff&&t[ff]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,Gl;function qs(t){if(Gl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gl=e&&e[1]||""}return`
`+Gl+t}var Wl=!1;function Xl(t,e){if(!t||Wl)return"";Wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Wl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qs(t):""}function ev(t){switch(t.tag){case 5:return qs(t.type);case 16:return qs("Lazy");case 13:return qs("Suspense");case 19:return qs("SuspenseList");case 0:case 2:case 15:return t=Xl(t.type,!1),t;case 11:return t=Xl(t.type.render,!1),t;case 1:return t=Xl(t.type,!0),t;default:return""}}function tu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qr:return"Fragment";case Yr:return"Portal";case Qc:return"Profiler";case ad:return"StrictMode";case Jc:return"Suspense";case eu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case im:return(t.displayName||"Context")+".Consumer";case nm:return(t._context.displayName||"Context")+".Provider";case od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ld:return e=t.displayName||null,e!==null?e:tu(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return tu(t(e))}catch{}}return null}function tv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tu(e);case 8:return e===ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nv(t){var e=sm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=nv(t))}function am(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=sm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function jo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nu(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function om(t,e){e=e.checked,e!=null&&sd(t,"checked",e,!1)}function iu(t,e){om(t,e);var n=Vi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ru(t,e.type,n):e.hasOwnProperty("defaultValue")&&ru(t,e.type,Vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ru(t,e,n){(e!=="number"||jo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ks=Array.isArray;function os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Vi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function su(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Ks(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vi(n)}}function lm(t,e){var n=Vi(e.value),i=Vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function au(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wa,um=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iv=["Webkit","ms","Moz","O"];Object.keys(ta).forEach(function(t){iv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ta[e]=ta[t]})});function dm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ta.hasOwnProperty(t)&&ta[t]?(""+e).trim():e+"px"}function fm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=dm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var rv=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ou(t,e){if(e){if(rv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function lu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cu=null;function cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uu=null,ls=null,cs=null;function xf(t){if(t=Pa(t)){if(typeof uu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=El(e),uu(t.stateNode,t.type,e))}}function hm(t){ls?cs?cs.push(t):cs=[t]:ls=t}function pm(){if(ls){var t=ls,e=cs;if(cs=ls=null,xf(t),e)for(t=0;t<e.length;t++)xf(e[t])}}function mm(t,e){return t(e)}function gm(){}var $l=!1;function xm(t,e,n){if($l)return t(e,n);$l=!0;try{return mm(t,e,n)}finally{$l=!1,(ls!==null||cs!==null)&&(gm(),pm())}}function fa(t,e){var n=t.stateNode;if(n===null)return null;var i=El(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var du=!1;if(ui)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){du=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{du=!1}function sv(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var na=!1,Ho=null,Vo=!1,fu=null,av={onError:function(t){na=!0,Ho=t}};function ov(t,e,n,i,r,s,a,o,l){na=!1,Ho=null,sv.apply(av,arguments)}function lv(t,e,n,i,r,s,a,o,l){if(ov.apply(this,arguments),na){if(na){var u=Ho;na=!1,Ho=null}else throw Error(te(198));Vo||(Vo=!0,fu=u)}}function Cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vf(t){if(Cr(t)!==t)throw Error(te(188))}function cv(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return vf(r),t;if(s===i)return vf(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function _m(t){return t=cv(t),t!==null?ym(t):null}function ym(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ym(t);if(e!==null)return e;t=t.sibling}return null}var Sm=dn.unstable_scheduleCallback,_f=dn.unstable_cancelCallback,uv=dn.unstable_shouldYield,dv=dn.unstable_requestPaint,gt=dn.unstable_now,fv=dn.unstable_getCurrentPriorityLevel,ud=dn.unstable_ImmediatePriority,Mm=dn.unstable_UserBlockingPriority,Go=dn.unstable_NormalPriority,hv=dn.unstable_LowPriority,Em=dn.unstable_IdlePriority,_l=null,Xn=null;function pv(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(_l,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:xv,mv=Math.log,gv=Math.LN2;function xv(t){return t>>>=0,t===0?32:31-(mv(t)/gv|0)|0}var Xa=64,$a=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Zs(o):(s&=a,s!==0&&(i=Zs(s)))}else a=n&~r,a!==0?i=Zs(a):s!==0&&(i=Zs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-kn(e),r=1<<n,i|=t[n],e&=~r;return i}function vv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _v(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-kn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=vv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function hu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wm(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function Yl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function yv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function dd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function bm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tm,fd,Am,Cm,Nm,pu=!1,Ya=[],Li=null,ki=null,Di=null,ha=new Map,pa=new Map,Ti=[],Sv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yf(t,e){switch(t){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":Di=null;break;case"pointerover":case"pointerout":ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(e.pointerId)}}function Os(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Pa(e),e!==null&&fd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Mv(t,e,n,i,r){switch(e){case"focusin":return Li=Os(Li,t,e,n,i,r),!0;case"dragenter":return ki=Os(ki,t,e,n,i,r),!0;case"mouseover":return Di=Os(Di,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ha.set(s,Os(ha.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,pa.set(s,Os(pa.get(s)||null,t,e,n,i,r)),!0}return!1}function Rm(t){var e=hr(t.target);if(e!==null){var n=Cr(e);if(n!==null){if(e=n.tag,e===13){if(e=vm(n),e!==null){t.blockedOn=e,Nm(t.priority,function(){Am(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ro(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);cu=i,n.target.dispatchEvent(i),cu=null}else return e=Pa(n),e!==null&&fd(e),t.blockedOn=n,!1;e.shift()}return!0}function Sf(t,e,n){Ro(t)&&n.delete(e)}function Ev(){pu=!1,Li!==null&&Ro(Li)&&(Li=null),ki!==null&&Ro(ki)&&(ki=null),Di!==null&&Ro(Di)&&(Di=null),ha.forEach(Sf),pa.forEach(Sf)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,pu||(pu=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,Ev)))}function ma(t){function e(r){return zs(r,t)}if(0<Ya.length){zs(Ya[0],t);for(var n=1;n<Ya.length;n++){var i=Ya[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Li!==null&&zs(Li,t),ki!==null&&zs(ki,t),Di!==null&&zs(Di,t),ha.forEach(e),pa.forEach(e),n=0;n<Ti.length;n++)i=Ti[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ti.length&&(n=Ti[0],n.blockedOn===null);)Rm(n),n.blockedOn===null&&Ti.shift()}var us=pi.ReactCurrentBatchConfig,Xo=!0;function wv(t,e,n,i){var r=Je,s=us.transition;us.transition=null;try{Je=1,hd(t,e,n,i)}finally{Je=r,us.transition=s}}function bv(t,e,n,i){var r=Je,s=us.transition;us.transition=null;try{Je=4,hd(t,e,n,i)}finally{Je=r,us.transition=s}}function hd(t,e,n,i){if(Xo){var r=mu(t,e,n,i);if(r===null)rc(t,e,i,$o,n),yf(t,i);else if(Mv(r,t,e,n,i))i.stopPropagation();else if(yf(t,i),e&4&&-1<Sv.indexOf(t)){for(;r!==null;){var s=Pa(r);if(s!==null&&Tm(s),s=mu(t,e,n,i),s===null&&rc(t,e,i,$o,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else rc(t,e,i,null,n)}}var $o=null;function mu(t,e,n,i){if($o=null,t=cd(i),t=hr(t),t!==null)if(e=Cr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $o=t,null}function Pm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fv()){case ud:return 1;case Mm:return 4;case Go:case hv:return 16;case Em:return 536870912;default:return 16}default:return 16}}var Ni=null,pd=null,Po=null;function Lm(){if(Po)return Po;var t,e=pd,n=e.length,i,r="value"in Ni?Ni.value:Ni.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Po=r.slice(t,1<i?1-i:void 0)}function Lo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function Mf(){return!1}function hn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:Mf,this.isPropagationStopped=Mf,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},md=hn(Ps),Ra=ut({},Ps,{view:0,detail:0}),Tv=hn(Ra),ql,Kl,Bs,yl=ut({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(ql=t.screenX-Bs.screenX,Kl=t.screenY-Bs.screenY):Kl=ql=0,Bs=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),Ef=hn(yl),Av=ut({},yl,{dataTransfer:0}),Cv=hn(Av),Nv=ut({},Ra,{relatedTarget:0}),Zl=hn(Nv),Rv=ut({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=hn(Rv),Lv=ut({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kv=hn(Lv),Dv=ut({},Ps,{data:0}),wf=hn(Dv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fv[t])?!!e[t]:!1}function gd(){return Ov}var zv=ut({},Ra,{key:function(t){if(t.key){var e=Iv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gd,charCode:function(t){return t.type==="keypress"?Lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bv=hn(zv),jv=ut({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bf=hn(jv),Hv=ut({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gd}),Vv=hn(Hv),Gv=ut({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=hn(Gv),Xv=ut({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=hn(Xv),Yv=[9,13,27,32],xd=ui&&"CompositionEvent"in window,ia=null;ui&&"documentMode"in document&&(ia=document.documentMode);var qv=ui&&"TextEvent"in window&&!ia,km=ui&&(!xd||ia&&8<ia&&11>=ia),Tf=" ",Af=!1;function Dm(t,e){switch(t){case"keyup":return Yv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function Kv(t,e){switch(t){case"compositionend":return Im(e);case"keypress":return e.which!==32?null:(Af=!0,Tf);case"textInput":return t=e.data,t===Tf&&Af?null:t;default:return null}}function Zv(t,e){if(Kr)return t==="compositionend"||!xd&&Dm(t,e)?(t=Lm(),Po=pd=Ni=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return km&&e.locale!=="ko"?null:e.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qv[t.type]:e==="textarea"}function Um(t,e,n,i){hm(i),e=Yo(e,"onChange"),0<e.length&&(n=new md("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ra=null,ga=null;function Jv(t){$m(t,0)}function Sl(t){var e=Jr(t);if(am(e))return t}function e_(t,e){if(t==="change")return e}var Fm=!1;if(ui){var Ql;if(ui){var Jl="oninput"in document;if(!Jl){var Nf=document.createElement("div");Nf.setAttribute("oninput","return;"),Jl=typeof Nf.oninput=="function"}Ql=Jl}else Ql=!1;Fm=Ql&&(!document.documentMode||9<document.documentMode)}function Rf(){ra&&(ra.detachEvent("onpropertychange",Om),ga=ra=null)}function Om(t){if(t.propertyName==="value"&&Sl(ga)){var e=[];Um(e,ga,t,cd(t)),xm(Jv,e)}}function t_(t,e,n){t==="focusin"?(Rf(),ra=e,ga=n,ra.attachEvent("onpropertychange",Om)):t==="focusout"&&Rf()}function n_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(ga)}function i_(t,e){if(t==="click")return Sl(e)}function r_(t,e){if(t==="input"||t==="change")return Sl(e)}function s_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:s_;function xa(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Zc.call(e,r)||!In(t[r],e[r]))return!1}return!0}function Pf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lf(t,e){var n=Pf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pf(n)}}function zm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bm(){for(var t=window,e=jo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jo(t.document)}return e}function vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function a_(t){var e=Bm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zm(n.ownerDocument.documentElement,n)){if(i!==null&&vd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Lf(n,s);var a=Lf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var o_=ui&&"documentMode"in document&&11>=document.documentMode,Zr=null,gu=null,sa=null,xu=!1;function kf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xu||Zr==null||Zr!==jo(i)||(i=Zr,"selectionStart"in i&&vd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),sa&&xa(sa,i)||(sa=i,i=Yo(gu,"onSelect"),0<i.length&&(e=new md("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Zr)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qr={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},ec={},jm={};ui&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Ml(t){if(ec[t])return ec[t];if(!Qr[t])return t;var e=Qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jm)return ec[t]=e[n];return t}var Hm=Ml("animationend"),Vm=Ml("animationiteration"),Gm=Ml("animationstart"),Wm=Ml("transitionend"),Xm=new Map,Df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,e){Xm.set(t,e),Ar(e,[t])}for(var tc=0;tc<Df.length;tc++){var nc=Df[tc],l_=nc.toLowerCase(),c_=nc[0].toUpperCase()+nc.slice(1);Yi(l_,"on"+c_)}Yi(Hm,"onAnimationEnd");Yi(Vm,"onAnimationIteration");Yi(Gm,"onAnimationStart");Yi("dblclick","onDoubleClick");Yi("focusin","onFocus");Yi("focusout","onBlur");Yi(Wm,"onTransitionEnd");gs("onMouseEnter",["mouseout","mouseover"]);gs("onMouseLeave",["mouseout","mouseover"]);gs("onPointerEnter",["pointerout","pointerover"]);gs("onPointerLeave",["pointerout","pointerover"]);Ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function If(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,lv(i,e,void 0,t),t.currentTarget=null}function $m(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;If(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;If(r,o,u),s=l}}}if(Vo)throw t=fu,Vo=!1,fu=null,t}function it(t,e){var n=e[Mu];n===void 0&&(n=e[Mu]=new Set);var i=t+"__bubble";n.has(i)||(Ym(e,t,2,!1),n.add(i))}function ic(t,e,n){var i=0;e&&(i|=4),Ym(n,t,i,e)}var Za="_reactListening"+Math.random().toString(36).slice(2);function va(t){if(!t[Za]){t[Za]=!0,tm.forEach(function(n){n!=="selectionchange"&&(u_.has(n)||ic(n,!1,t),ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Za]||(e[Za]=!0,ic("selectionchange",!1,e))}}function Ym(t,e,n,i){switch(Pm(e)){case 1:var r=wv;break;case 4:r=bv;break;default:r=hd}n=r.bind(null,e,n,t),r=void 0,!du||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function rc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=hr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}xm(function(){var u=s,f=cd(n),p=[];e:{var h=Xm.get(t);if(h!==void 0){var g=md,_=t;switch(t){case"keypress":if(Lo(n)===0)break e;case"keydown":case"keyup":g=Bv;break;case"focusin":_="focus",g=Zl;break;case"focusout":_="blur",g=Zl;break;case"beforeblur":case"afterblur":g=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Vv;break;case Hm:case Vm:case Gm:g=Pv;break;case Wm:g=Wv;break;case"scroll":g=Tv;break;case"wheel":g=$v;break;case"copy":case"cut":case"paste":g=kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=bf}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var x=u,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,d!==null&&(S=fa(x,d),S!=null&&y.push(_a(x,S,v)))),m)break;x=x.return}0<y.length&&(h=new g(h,_,null,n,f),p.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==cu&&(_=n.relatedTarget||n.fromElement)&&(hr(_)||_[di]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?hr(_):null,_!==null&&(m=Cr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=Ef,S="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=bf,S="onPointerLeave",d="onPointerEnter",x="pointer"),m=g==null?h:Jr(g),v=_==null?h:Jr(_),h=new y(S,x+"leave",g,n,f),h.target=m,h.relatedTarget=v,S=null,hr(f)===u&&(y=new y(d,x+"enter",_,n,f),y.target=v,y.relatedTarget=m,S=y),m=S,g&&_)t:{for(y=g,d=_,x=0,v=y;v;v=Rr(v))x++;for(v=0,S=d;S;S=Rr(S))v++;for(;0<x-v;)y=Rr(y),x--;for(;0<v-x;)d=Rr(d),v--;for(;x--;){if(y===d||d!==null&&y===d.alternate)break t;y=Rr(y),d=Rr(d)}y=null}else y=null;g!==null&&Uf(p,h,g,y,!1),_!==null&&m!==null&&Uf(p,m,_,y,!0)}}e:{if(h=u?Jr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var R=e_;else if(Cf(h))if(Fm)R=r_;else{R=n_;var T=t_}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=i_);if(R&&(R=R(t,u))){Um(p,R,n,f);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&ru(h,"number",h.value)}switch(T=u?Jr(u):window,t){case"focusin":(Cf(T)||T.contentEditable==="true")&&(Zr=T,gu=u,sa=null);break;case"focusout":sa=gu=Zr=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,kf(p,n,f);break;case"selectionchange":if(o_)break;case"keydown":case"keyup":kf(p,n,f)}var A;if(xd)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Kr?Dm(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(km&&n.locale!=="ko"&&(Kr||C!=="onCompositionStart"?C==="onCompositionEnd"&&Kr&&(A=Lm()):(Ni=f,pd="value"in Ni?Ni.value:Ni.textContent,Kr=!0)),T=Yo(u,C),0<T.length&&(C=new wf(C,t,null,n,f),p.push({event:C,listeners:T}),A?C.data=A:(A=Im(n),A!==null&&(C.data=A)))),(A=qv?Kv(t,n):Zv(t,n))&&(u=Yo(u,"onBeforeInput"),0<u.length&&(f=new wf("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=A))}$m(p,e)})}function _a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yo(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fa(t,n),s!=null&&i.unshift(_a(t,s,r)),s=fa(t,e),s!=null&&i.push(_a(t,s,r))),t=t.return}return i}function Rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Uf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=fa(n,s),l!=null&&a.unshift(_a(n,l,o))):r||(l=fa(n,s),l!=null&&a.push(_a(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var d_=/\r\n?/g,f_=/\u0000|\uFFFD/g;function Ff(t){return(typeof t=="string"?t:""+t).replace(d_,`
`).replace(f_,"")}function Qa(t,e,n){if(e=Ff(e),Ff(t)!==e&&n)throw Error(te(425))}function qo(){}var vu=null,_u=null;function yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Su=typeof setTimeout=="function"?setTimeout:void 0,h_=typeof clearTimeout=="function"?clearTimeout:void 0,Of=typeof Promise=="function"?Promise:void 0,p_=typeof queueMicrotask=="function"?queueMicrotask:typeof Of<"u"?function(t){return Of.resolve(null).then(t).catch(m_)}:Su;function m_(t){setTimeout(function(){throw t})}function sc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ma(e)}function Ii(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Ls,ya="__reactProps$"+Ls,di="__reactContainer$"+Ls,Mu="__reactEvents$"+Ls,g_="__reactListeners$"+Ls,x_="__reactHandles$"+Ls;function hr(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[di]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zf(t);t!==null;){if(n=t[Hn])return n;t=zf(t)}return e}t=n,n=t.parentNode}return null}function Pa(t){return t=t[Hn]||t[di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function El(t){return t[ya]||null}var Eu=[],es=-1;function qi(t){return{current:t}}function st(t){0>es||(t.current=Eu[es],Eu[es]=null,es--)}function nt(t,e){es++,Eu[es]=t.current,t.current=e}var Gi={},Bt=qi(Gi),Jt=qi(!1),Sr=Gi;function xs(t,e){var n=t.type.contextTypes;if(!n)return Gi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function Ko(){st(Jt),st(Bt)}function Bf(t,e,n){if(Bt.current!==Gi)throw Error(te(168));nt(Bt,e),nt(Jt,n)}function qm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,tv(t)||"Unknown",r));return ut({},n,i)}function Zo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gi,Sr=Bt.current,nt(Bt,t),nt(Jt,Jt.current),!0}function jf(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=qm(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,st(Jt),st(Bt),nt(Bt,t)):st(Jt),nt(Jt,n)}var ri=null,wl=!1,ac=!1;function Km(t){ri===null?ri=[t]:ri.push(t)}function v_(t){wl=!0,Km(t)}function Ki(){if(!ac&&ri!==null){ac=!0;var t=0,e=Je;try{var n=ri;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ri=null,wl=!1}catch(r){throw ri!==null&&(ri=ri.slice(t+1)),Sm(ud,Ki),r}finally{Je=e,ac=!1}}return null}var ts=[],ns=0,Qo=null,Jo=0,gn=[],xn=0,Mr=null,si=1,ai="";function or(t,e){ts[ns++]=Jo,ts[ns++]=Qo,Qo=t,Jo=e}function Zm(t,e,n){gn[xn++]=si,gn[xn++]=ai,gn[xn++]=Mr,Mr=t;var i=si;t=ai;var r=32-kn(i)-1;i&=~(1<<r),n+=1;var s=32-kn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,si=1<<32-kn(e)+r|n<<r|i,ai=s+t}else si=1<<s|n<<r|i,ai=t}function _d(t){t.return!==null&&(or(t,1),Zm(t,1,0))}function yd(t){for(;t===Qo;)Qo=ts[--ns],ts[ns]=null,Jo=ts[--ns],ts[ns]=null;for(;t===Mr;)Mr=gn[--xn],gn[xn]=null,ai=gn[--xn],gn[xn]=null,si=gn[--xn],gn[xn]=null}var un=null,ln=null,at=!1,Pn=null;function Qm(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,ln=Ii(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:si,overflow:ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,ln=null,!0):!1;default:return!1}}function wu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bu(t){if(at){var e=ln;if(e){var n=e;if(!Hf(t,e)){if(wu(t))throw Error(te(418));e=Ii(n.nextSibling);var i=un;e&&Hf(t,e)?Qm(i,n):(t.flags=t.flags&-4097|2,at=!1,un=t)}}else{if(wu(t))throw Error(te(418));t.flags=t.flags&-4097|2,at=!1,un=t}}}function Vf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function Ja(t){if(t!==un)return!1;if(!at)return Vf(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yu(t.type,t.memoizedProps)),e&&(e=ln)){if(wu(t))throw Jm(),Error(te(418));for(;e;)Qm(t,e),e=Ii(e.nextSibling)}if(Vf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=Ii(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=un?Ii(t.stateNode.nextSibling):null;return!0}function Jm(){for(var t=ln;t;)t=Ii(t.nextSibling)}function vs(){ln=un=null,at=!1}function Sd(t){Pn===null?Pn=[t]:Pn.push(t)}var __=pi.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function eo(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gf(t){var e=t._init;return e(t._payload)}function e0(t){function e(d,x){if(t){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=zi(d,x),d.index=0,d.sibling=null,d}function s(d,x,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,x,v,S){return x===null||x.tag!==6?(x=hc(v,d.mode,S),x.return=d,x):(x=r(x,v),x.return=d,x)}function l(d,x,v,S){var R=v.type;return R===qr?f(d,x,v.props.children,S,v.key):x!==null&&(x.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wi&&Gf(R)===x.type)?(S=r(x,v.props),S.ref=js(d,x,v),S.return=d,S):(S=zo(v.type,v.key,v.props,null,d.mode,S),S.ref=js(d,x,v),S.return=d,S)}function u(d,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=pc(v,d.mode,S),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function f(d,x,v,S,R){return x===null||x.tag!==7?(x=_r(v,d.mode,S,R),x.return=d,x):(x=r(x,v),x.return=d,x)}function p(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=hc(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Va:return v=zo(x.type,x.key,x.props,null,d.mode,v),v.ref=js(d,null,x),v.return=d,v;case Yr:return x=pc(x,d.mode,v),x.return=d,x;case wi:var S=x._init;return p(d,S(x._payload),v)}if(Ks(x)||Us(x))return x=_r(x,d.mode,v,null),x.return=d,x;eo(d,x)}return null}function h(d,x,v,S){var R=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:o(d,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return v.key===R?l(d,x,v,S):null;case Yr:return v.key===R?u(d,x,v,S):null;case wi:return R=v._init,h(d,x,R(v._payload),S)}if(Ks(v)||Us(v))return R!==null?null:f(d,x,v,S,null);eo(d,v)}return null}function g(d,x,v,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(v)||null,o(x,d,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Va:return d=d.get(S.key===null?v:S.key)||null,l(x,d,S,R);case Yr:return d=d.get(S.key===null?v:S.key)||null,u(x,d,S,R);case wi:var T=S._init;return g(d,x,v,T(S._payload),R)}if(Ks(S)||Us(S))return d=d.get(v)||null,f(x,d,S,R,null);eo(x,S)}return null}function _(d,x,v,S){for(var R=null,T=null,A=x,C=x=0,b=null;A!==null&&C<v.length;C++){A.index>C?(b=A,A=null):b=A.sibling;var M=h(d,A,v[C],S);if(M===null){A===null&&(A=b);break}t&&A&&M.alternate===null&&e(d,A),x=s(M,x,C),T===null?R=M:T.sibling=M,T=M,A=b}if(C===v.length)return n(d,A),at&&or(d,C),R;if(A===null){for(;C<v.length;C++)A=p(d,v[C],S),A!==null&&(x=s(A,x,C),T===null?R=A:T.sibling=A,T=A);return at&&or(d,C),R}for(A=i(d,A);C<v.length;C++)b=g(A,d,C,v[C],S),b!==null&&(t&&b.alternate!==null&&A.delete(b.key===null?C:b.key),x=s(b,x,C),T===null?R=b:T.sibling=b,T=b);return t&&A.forEach(function(L){return e(d,L)}),at&&or(d,C),R}function y(d,x,v,S){var R=Us(v);if(typeof R!="function")throw Error(te(150));if(v=R.call(v),v==null)throw Error(te(151));for(var T=R=null,A=x,C=x=0,b=null,M=v.next();A!==null&&!M.done;C++,M=v.next()){A.index>C?(b=A,A=null):b=A.sibling;var L=h(d,A,M.value,S);if(L===null){A===null&&(A=b);break}t&&A&&L.alternate===null&&e(d,A),x=s(L,x,C),T===null?R=L:T.sibling=L,T=L,A=b}if(M.done)return n(d,A),at&&or(d,C),R;if(A===null){for(;!M.done;C++,M=v.next())M=p(d,M.value,S),M!==null&&(x=s(M,x,C),T===null?R=M:T.sibling=M,T=M);return at&&or(d,C),R}for(A=i(d,A);!M.done;C++,M=v.next())M=g(A,d,C,M.value,S),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?C:M.key),x=s(M,x,C),T===null?R=M:T.sibling=M,T=M);return t&&A.forEach(function(W){return e(d,W)}),at&&or(d,C),R}function m(d,x,v,S){if(typeof v=="object"&&v!==null&&v.type===qr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:e:{for(var R=v.key,T=x;T!==null;){if(T.key===R){if(R=v.type,R===qr){if(T.tag===7){n(d,T.sibling),x=r(T,v.props.children),x.return=d,d=x;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wi&&Gf(R)===T.type){n(d,T.sibling),x=r(T,v.props),x.ref=js(d,T,v),x.return=d,d=x;break e}n(d,T);break}else e(d,T);T=T.sibling}v.type===qr?(x=_r(v.props.children,d.mode,S,v.key),x.return=d,d=x):(S=zo(v.type,v.key,v.props,null,d.mode,S),S.ref=js(d,x,v),S.return=d,d=S)}return a(d);case Yr:e:{for(T=v.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=pc(v,d.mode,S),x.return=d,d=x}return a(d);case wi:return T=v._init,m(d,x,T(v._payload),S)}if(Ks(v))return _(d,x,v,S);if(Us(v))return y(d,x,v,S);eo(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,v),x.return=d,d=x):(n(d,x),x=hc(v,d.mode,S),x.return=d,d=x),a(d)):n(d,x)}return m}var _s=e0(!0),t0=e0(!1),el=qi(null),tl=null,is=null,Md=null;function Ed(){Md=is=tl=null}function wd(t){var e=el.current;st(el),t._currentValue=e}function Tu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ds(t,e){tl=t,Md=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(Md!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(tl===null)throw Error(te(308));is=t,tl.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var pr=null;function bd(t){pr===null?pr=[t]:pr.push(t)}function n0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,bd(e)):(n.next=r.next,r.next=n),e.interleaved=n,fi(t,i)}function fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var bi=!1;function Td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fi(t,n)}return r=i.interleaved,r===null?(e.next=e,bd(i)):(e.next=r.next,r.next=e),i.interleaved=e,fi(t,n)}function ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dd(t,n)}}function Wf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nl(t,e,n,i){var r=t.updateQueue;bi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,f=u=l=null,o=s;do{var h=o.lane,g=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(h=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){p=_.call(g,p,h);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(g,p,h):_,h==null)break e;p=ut({},p,h);break e;case 2:bi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else g={eventTime:g,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=g,l=p):f=f.next=g,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);wr|=a,t.lanes=a,t.memoizedState=p}}function Xf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var La={},$n=qi(La),Sa=qi(La),Ma=qi(La);function mr(t){if(t===La)throw Error(te(174));return t}function Ad(t,e){switch(nt(Ma,e),nt(Sa,t),nt($n,La),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:au(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=au(e,t)}st($n),nt($n,e)}function ys(){st($n),st(Sa),st(Ma)}function r0(t){mr(Ma.current);var e=mr($n.current),n=au(e,t.type);e!==n&&(nt(Sa,t),nt($n,n))}function Cd(t){Sa.current===t&&(st($n),st(Sa))}var lt=qi(0);function il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oc=[];function Nd(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var Do=pi.ReactCurrentDispatcher,lc=pi.ReactCurrentBatchConfig,Er=0,ct=null,St=null,Ct=null,rl=!1,aa=!1,Ea=0,y_=0;function Dt(){throw Error(te(321))}function Rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function Pd(t,e,n,i,r,s){if(Er=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Do.current=t===null||t.memoizedState===null?w_:b_,t=n(i,r),aa){s=0;do{if(aa=!1,Ea=0,25<=s)throw Error(te(301));s+=1,Ct=St=null,e.updateQueue=null,Do.current=T_,t=n(i,r)}while(aa)}if(Do.current=sl,e=St!==null&&St.next!==null,Er=0,Ct=St=ct=null,rl=!1,e)throw Error(te(300));return t}function Ld(){var t=Ea!==0;return Ea=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ct.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function wn(){if(St===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Ct===null?ct.memoizedState:Ct.next;if(e!==null)Ct=e,St=t;else{if(t===null)throw Error(te(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ct===null?ct.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function wa(t,e){return typeof e=="function"?e(t):e}function cc(t){var e=wn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var f=u.lane;if((Er&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,ct.lanes|=f,wr|=f}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,In(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ct.lanes|=s,wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uc(t){var e=wn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);In(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function s0(){}function a0(t,e){var n=ct,i=wn(),r=e(),s=!In(i.memoizedState,r);if(s&&(i.memoizedState=r,Qt=!0),i=i.queue,kd(c0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,ba(9,l0.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(te(349));Er&30||o0(n,e,r)}return r}function o0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l0(t,e,n,i){e.value=n,e.getSnapshot=i,u0(e)&&d0(t)}function c0(t,e,n){return n(function(){u0(e)&&d0(t)})}function u0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function d0(t){var e=fi(t,1);e!==null&&Dn(e,t,1,-1)}function $f(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},e.queue=t,t=t.dispatch=E_.bind(null,ct,t),[e.memoizedState,t]}function ba(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function f0(){return wn().memoizedState}function Io(t,e,n,i){var r=zn();ct.flags|=t,r.memoizedState=ba(1|e,n,void 0,i===void 0?null:i)}function bl(t,e,n,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(St!==null){var a=St.memoizedState;if(s=a.destroy,i!==null&&Rd(i,a.deps)){r.memoizedState=ba(e,n,s,i);return}}ct.flags|=t,r.memoizedState=ba(1|e,n,s,i)}function Yf(t,e){return Io(8390656,8,t,e)}function kd(t,e){return bl(2048,8,t,e)}function h0(t,e){return bl(4,2,t,e)}function p0(t,e){return bl(4,4,t,e)}function m0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function g0(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,m0.bind(null,e,t),n)}function Dd(){}function x0(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function v0(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _0(t,e,n){return Er&21?(In(n,e)||(n=wm(),ct.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function S_(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=lc.transition;lc.transition={};try{t(!1),e()}finally{Je=n,lc.transition=i}}function y0(){return wn().memoizedState}function M_(t,e,n){var i=Oi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},S0(t))M0(e,n);else if(n=n0(t,e,n,i),n!==null){var r=Wt();Dn(n,t,i,r),E0(n,e,i)}}function E_(t,e,n){var i=Oi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(S0(t))M0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,In(o,a)){var l=e.interleaved;l===null?(r.next=r,bd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=n0(t,e,r,i),n!==null&&(r=Wt(),Dn(n,t,i,r),E0(n,e,i))}}function S0(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function M0(t,e){aa=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function E0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dd(t,n)}}var sl={readContext:En,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},w_={readContext:En,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:Yf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Io(4194308,4,m0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Io(4194308,4,t,e)},useInsertionEffect:function(t,e){return Io(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=M_.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:$f,useDebugValue:Dd,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=$f(!1),e=t[0];return t=S_.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=zn();if(at){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Rt===null)throw Error(te(349));Er&30||o0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Yf(c0.bind(null,i,s,t),[t]),i.flags|=2048,ba(9,l0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=Rt.identifierPrefix;if(at){var n=ai,i=si;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=y_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},b_={readContext:En,useCallback:x0,useContext:En,useEffect:kd,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:v0,useReducer:cc,useRef:f0,useState:function(){return cc(wa)},useDebugValue:Dd,useDeferredValue:function(t){var e=wn();return _0(e,St.memoizedState,t)},useTransition:function(){var t=cc(wa)[0],e=wn().memoizedState;return[t,e]},useMutableSource:s0,useSyncExternalStore:a0,useId:y0,unstable_isNewReconciler:!1},T_={readContext:En,useCallback:x0,useContext:En,useEffect:kd,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:v0,useReducer:uc,useRef:f0,useState:function(){return uc(wa)},useDebugValue:Dd,useDeferredValue:function(t){var e=wn();return St===null?e.memoizedState=t:_0(e,St.memoizedState,t)},useTransition:function(){var t=uc(wa)[0],e=wn().memoizedState;return[t,e]},useMutableSource:s0,useSyncExternalStore:a0,useId:y0,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Au(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tl={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Oi(t),s=li(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Dn(e,t,r,i),ko(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Oi(t),s=li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Dn(e,t,r,i),ko(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),i=Oi(t),r=li(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ui(t,r,i),e!==null&&(Dn(e,t,i,n),ko(e,t,i))}};function qf(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!xa(n,i)||!xa(r,s):!0}function w0(t,e,n){var i=!1,r=Gi,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=en(e)?Sr:Bt.current,i=e.contextTypes,s=(i=i!=null)?xs(t,r):Gi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tl.enqueueReplaceState(e,e.state,null)}function Cu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Td(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=en(e)?Sr:Bt.current,r.context=xs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Au(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tl.enqueueReplaceState(r,r.state,null),nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e){try{var n="",i=e;do n+=ev(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var A_=typeof WeakMap=="function"?WeakMap:Map;function b0(t,e,n){n=li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ol||(ol=!0,zu=i),Nu(t,e)},n}function T0(t,e,n){n=li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Nu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nu(t,e),typeof i!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Zf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new A_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=j_.bind(null,t,e,n),e.then(t,t))}function Qf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=li(-1,1),e.tag=2,Ui(n,e,1))),n.lanes|=1),t)}var C_=pi.ReactCurrentOwner,Qt=!1;function Vt(t,e,n,i){e.child=t===null?t0(e,null,n,i):_s(e,t.child,n,i)}function eh(t,e,n,i,r){n=n.render;var s=e.ref;return ds(e,r),i=Pd(t,e,n,i,s,r),n=Ld(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(at&&n&&_d(e),e.flags|=1,Vt(t,e,i,r),e.child)}function th(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,A0(t,e,s,i,r)):(t=zo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:xa,n(a,i)&&t.ref===e.ref)return hi(t,e,r)}return e.flags|=1,t=zi(s,i),t.ref=e.ref,t.return=e,e.child=t}function A0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(xa(s,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,hi(t,e,r)}return Ru(t,e,n,i,r)}function C0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(ss,on),on|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(ss,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(ss,on),on|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(ss,on),on|=i;return Vt(t,e,r,n),e.child}function N0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ru(t,e,n,i,r){var s=en(n)?Sr:Bt.current;return s=xs(e,s),ds(e,r),n=Pd(t,e,n,i,s,r),i=Ld(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(at&&i&&_d(e),e.flags|=1,Vt(t,e,n,r),e.child)}function nh(t,e,n,i,r){if(en(n)){var s=!0;Zo(e)}else s=!1;if(ds(e,r),e.stateNode===null)Uo(t,e),w0(e,n,i),Cu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=En(u):(u=en(n)?Sr:Bt.current,u=xs(e,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Kf(e,a,i,u),bi=!1;var h=e.memoizedState;a.state=h,nl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||Jt.current||bi?(typeof f=="function"&&(Au(e,n,f,i),l=e.memoizedState),(o=bi||qf(e,n,o,i,h,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,i0(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Nn(e.type,o),a.props=u,p=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=en(n)?Sr:Bt.current,l=xs(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||h!==l)&&Kf(e,a,i,l),bi=!1,h=e.memoizedState,a.state=h,nl(e,i,a,r);var _=e.memoizedState;o!==p||h!==_||Jt.current||bi?(typeof g=="function"&&(Au(e,n,g,i),_=e.memoizedState),(u=bi||qf(e,n,u,i,h,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Pu(t,e,n,i,s,r)}function Pu(t,e,n,i,r,s){N0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&jf(e,n,!1),hi(t,e,s);i=e.stateNode,C_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,o,s)):Vt(t,e,o,s),e.memoizedState=i.state,r&&jf(e,n,!0),e.child}function R0(t){var e=t.stateNode;e.pendingContext?Bf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bf(t,e.context,!1),Ad(t,e.containerInfo)}function ih(t,e,n,i,r){return vs(),Sd(r),e.flags|=256,Vt(t,e,n,i),e.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function P0(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(lt,r&1),t===null)return bu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Nl(a,i,0,null),t=_r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ku(n),e.memoizedState=Lu,t):Id(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return N_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=zi(o,s):(s=_r(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ku(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Lu,i}return s=t.child,t=s.sibling,i=zi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Id(t,e){return e=Nl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function to(t,e,n,i){return i!==null&&Sd(i),_s(e,t.child,null,n),t=Id(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function N_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=dc(Error(te(422))),to(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Nl({mode:"visible",children:i.children},r,0,null),s=_r(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_s(e,t.child,null,a),e.child.memoizedState=ku(a),e.memoizedState=Lu,s);if(!(e.mode&1))return to(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(te(419)),i=dc(s,i,void 0),to(t,e,a,i)}if(o=(a&t.childLanes)!==0,Qt||o){if(i=Rt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,fi(t,r),Dn(i,t,r,-1))}return jd(),i=dc(Error(te(421))),to(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=H_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ln=Ii(r.nextSibling),un=e,at=!0,Pn=null,t!==null&&(gn[xn++]=si,gn[xn++]=ai,gn[xn++]=Mr,si=t.id,ai=t.overflow,Mr=e),e=Id(e,i.children),e.flags|=4096,e)}function rh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Tu(t.return,e,n)}function fc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function L0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rh(t,n,e);else if(t.tag===19)rh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&il(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),fc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&il(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}fc(e,!0,n,null,s);break;case"together":fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Uo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function R_(t,e,n){switch(e.tag){case 3:R0(e),vs();break;case 5:r0(e);break;case 1:en(e.type)&&Zo(e);break;case 4:Ad(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(el,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?P0(t,e,n):(nt(lt,lt.current&1),t=hi(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return L0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,C0(t,e,n)}return hi(t,e,n)}var k0,Du,D0,I0;k0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Du=function(){};D0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr($n.current);var s=null;switch(n){case"input":r=nu(t,r),i=nu(t,i),s=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),s=[];break;case"textarea":r=su(t,r),i=su(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=qo)}ou(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ua.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};I0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Hs(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function P_(t,e,n){var i=e.pendingProps;switch(yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return en(e.type)&&Ko(),It(e),null;case 3:return i=e.stateNode,ys(),st(Jt),st(Bt),Nd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pn!==null&&(Hu(Pn),Pn=null))),Du(t,e),It(e),null;case 5:Cd(e);var r=mr(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)D0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return It(e),null}if(t=mr($n.current),Ja(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Hn]=e,i[ya]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Qs.length;r++)it(Qs[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":hf(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":mf(i,s),it("invalid",i)}ou(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,o,t),r=["children",""+o]):ua.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&it("scroll",i)}switch(n){case"input":Ga(i),pf(i,s,!0);break;case"textarea":Ga(i),gf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=qo)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Hn]=e,t[ya]=i,k0(t,e,!1,!1),e.stateNode=t;e:{switch(a=lu(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qs.length;r++)it(Qs[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":hf(t,i),r=nu(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),it("invalid",t);break;case"textarea":mf(t,i),r=su(t,i),it("invalid",t);break;default:r=i}ou(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?fm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&um(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&da(t,l):typeof l=="number"&&da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&sd(t,s,l,a))}switch(n){case"input":Ga(t),pf(t,i,!1);break;case"textarea":Ga(t),gf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Vi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?os(t,!!i.multiple,s,!1):i.defaultValue!=null&&os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)I0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=mr(Ma.current),mr($n.current),Ja(e)){if(i=e.stateNode,n=e.memoizedProps,i[Hn]=e,(s=i.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:Qa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Hn]=e,e.stateNode=i}return It(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&ln!==null&&e.mode&1&&!(e.flags&128))Jm(),vs(),e.flags|=98560,s=!1;else if(s=Ja(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Hn]=e}else vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else Pn!==null&&(Hu(Pn),Pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?Mt===0&&(Mt=3):jd())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return ys(),Du(t,e),t===null&&va(e.stateNode.containerInfo),It(e),null;case 10:return wd(e.type._context),It(e),null;case 17:return en(e.type)&&Ko(),It(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return It(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Hs(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=il(t),a!==null){for(e.flags|=128,Hs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&gt()>Ms&&(e.flags|=128,i=!0,Hs(s,!1),e.lanes=4194304)}else{if(!i)if(t=il(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!at)return It(e),null}else 2*gt()-s.renderingStartTime>Ms&&n!==1073741824&&(e.flags|=128,i=!0,Hs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=gt(),e.sibling=null,n=lt.current,nt(lt,i?n&1|2:n&1),e):(It(e),null);case 22:case 23:return Bd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?on&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function L_(t,e){switch(yd(e),e.tag){case 1:return en(e.type)&&Ko(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),st(Jt),st(Bt),Nd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cd(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return ys(),null;case 10:return wd(e.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var no=!1,Ot=!1,k_=typeof WeakSet=="function"?WeakSet:Set,me=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ht(t,e,i)}else n.current=null}function Iu(t,e,n){try{n()}catch(i){ht(t,e,i)}}var sh=!1;function D_(t,e){if(vu=Xo,t=Bm(),vd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,f=0,p=t,h=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===t)break t;if(h===n&&++u===r&&(o=a),h===s&&++f===i&&(l=a),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_u={focusedElem:t,selectionRange:n},Xo=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Nn(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){ht(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=sh,sh=!1,_}function oa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Iu(e,n,s)}r=r.next}while(r!==i)}}function Al(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Uu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function U0(t){var e=t.alternate;e!==null&&(t.alternate=null,U0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[ya],delete e[Mu],delete e[g_],delete e[x_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F0(t){return t.tag===5||t.tag===3||t.tag===4}function ah(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qo));else if(i!==4&&(t=t.child,t!==null))for(Fu(t,e,n),t=t.sibling;t!==null;)Fu(t,e,n),t=t.sibling}function Ou(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ou(t,e,n),t=t.sibling;t!==null;)Ou(t,e,n),t=t.sibling}var Pt=null,Rn=!1;function gi(t,e,n){for(n=n.child;n!==null;)O0(t,e,n),n=n.sibling}function O0(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 5:Ot||rs(n,e);case 6:var i=Pt,r=Rn;Pt=null,gi(t,e,n),Pt=i,Rn=r,Pt!==null&&(Rn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Rn?(t=Pt,n=n.stateNode,t.nodeType===8?sc(t.parentNode,n):t.nodeType===1&&sc(t,n),ma(t)):sc(Pt,n.stateNode));break;case 4:i=Pt,r=Rn,Pt=n.stateNode.containerInfo,Rn=!0,gi(t,e,n),Pt=i,Rn=r;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Iu(n,e,a),r=r.next}while(r!==i)}gi(t,e,n);break;case 1:if(!Ot&&(rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){ht(n,e,o)}gi(t,e,n);break;case 21:gi(t,e,n);break;case 22:n.mode&1?(Ot=(i=Ot)||n.memoizedState!==null,gi(t,e,n),Ot=i):gi(t,e,n);break;default:gi(t,e,n)}}function oh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new k_),e.forEach(function(i){var r=V_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Pt=o.stateNode,Rn=!1;break e;case 3:Pt=o.stateNode.containerInfo,Rn=!0;break e;case 4:Pt=o.stateNode.containerInfo,Rn=!0;break e}o=o.return}if(Pt===null)throw Error(te(160));O0(s,a,r),Pt=null,Rn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z0(e,t),e=e.sibling}function z0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),On(t),i&4){try{oa(3,t,t.return),Al(3,t)}catch(y){ht(t,t.return,y)}try{oa(5,t,t.return)}catch(y){ht(t,t.return,y)}}break;case 1:bn(e,t),On(t),i&512&&n!==null&&rs(n,n.return);break;case 5:if(bn(e,t),On(t),i&512&&n!==null&&rs(n,n.return),t.flags&32){var r=t.stateNode;try{da(r,"")}catch(y){ht(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&om(r,s),lu(o,a);var u=lu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],p=l[a+1];f==="style"?fm(r,p):f==="dangerouslySetInnerHTML"?um(r,p):f==="children"?da(r,p):sd(r,f,p,u)}switch(o){case"input":iu(r,s);break;case"textarea":lm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?os(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?os(r,!!s.multiple,s.defaultValue,!0):os(r,!!s.multiple,s.multiple?[]:"",!1))}r[ya]=s}catch(y){ht(t,t.return,y)}}break;case 6:if(bn(e,t),On(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){ht(t,t.return,y)}}break;case 3:if(bn(e,t),On(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(e.containerInfo)}catch(y){ht(t,t.return,y)}break;case 4:bn(e,t),On(t);break;case 13:bn(e,t),On(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Od=gt())),i&4&&oh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(u=Ot)||f,bn(e,t),Ot=u):bn(e,t),On(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(me=t,f=t.child;f!==null;){for(p=me=f;me!==null;){switch(h=me,g=h.child,h.tag){case 0:case 11:case 14:case 15:oa(4,h,h.return);break;case 1:rs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ht(i,n,y)}}break;case 5:rs(h,h.return);break;case 22:if(h.memoizedState!==null){ch(p);continue}}g!==null?(g.return=h,me=g):ch(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=dm("display",a))}catch(y){ht(t,t.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){ht(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bn(e,t),On(t),i&4&&oh(t);break;case 21:break;default:bn(e,t),On(t)}}function On(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(F0(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(da(r,""),i.flags&=-33);var s=ah(t);Ou(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=ah(t);Fu(t,o,a);break;default:throw Error(te(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function I_(t,e,n){me=t,B0(t)}function B0(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||no;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Ot;o=no;var u=Ot;if(no=a,(Ot=l)&&!u)for(me=r;me!==null;)a=me,l=a.child,a.tag===22&&a.memoizedState!==null?uh(r):l!==null?(l.return=a,me=l):uh(r);for(;s!==null;)me=s,B0(s),s=s.sibling;me=r,no=o,Ot=u}lh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):lh(t)}}function lh(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Al(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xf(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xf(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ma(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ot||e.flags&512&&Uu(e)}catch(h){ht(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function ch(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function uh(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Al(4,e)}catch(l){ht(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ht(e,r,l)}}var s=e.return;try{Uu(e)}catch(l){ht(e,s,l)}break;case 5:var a=e.return;try{Uu(e)}catch(l){ht(e,a,l)}}}catch(l){ht(e,e.return,l)}if(e===t){me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,me=o;break}me=e.return}}var U_=Math.ceil,al=pi.ReactCurrentDispatcher,Ud=pi.ReactCurrentOwner,Mn=pi.ReactCurrentBatchConfig,We=0,Rt=null,yt=null,Lt=0,on=0,ss=qi(0),Mt=0,Ta=null,wr=0,Cl=0,Fd=0,la=null,Kt=null,Od=0,Ms=1/0,ii=null,ol=!1,zu=null,Fi=null,io=!1,Ri=null,ll=0,ca=0,Bu=null,Fo=-1,Oo=0;function Wt(){return We&6?gt():Fo!==-1?Fo:Fo=gt()}function Oi(t){return t.mode&1?We&2&&Lt!==0?Lt&-Lt:__.transition!==null?(Oo===0&&(Oo=wm()),Oo):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Pm(t.type)),t):1}function Dn(t,e,n,i){if(50<ca)throw ca=0,Bu=null,Error(te(185));Na(t,n,i),(!(We&2)||t!==Rt)&&(t===Rt&&(!(We&2)&&(Cl|=n),Mt===4&&Ai(t,Lt)),tn(t,i),n===1&&We===0&&!(e.mode&1)&&(Ms=gt()+500,wl&&Ki()))}function tn(t,e){var n=t.callbackNode;_v(t,e);var i=Wo(t,t===Rt?Lt:0);if(i===0)n!==null&&_f(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&_f(n),e===1)t.tag===0?v_(dh.bind(null,t)):Km(dh.bind(null,t)),p_(function(){!(We&6)&&Ki()}),n=null;else{switch(bm(i)){case 1:n=ud;break;case 4:n=Mm;break;case 16:n=Go;break;case 536870912:n=Em;break;default:n=Go}n=Y0(n,j0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j0(t,e){if(Fo=-1,Oo=0,We&6)throw Error(te(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var i=Wo(t,t===Rt?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=cl(t,i);else{e=i;var r=We;We|=2;var s=V0();(Rt!==t||Lt!==e)&&(ii=null,Ms=gt()+500,vr(t,e));do try{z_();break}catch(o){H0(t,o)}while(!0);Ed(),al.current=s,We=r,yt!==null?e=0:(Rt=null,Lt=0,e=Mt)}if(e!==0){if(e===2&&(r=hu(t),r!==0&&(i=r,e=ju(t,r))),e===1)throw n=Ta,vr(t,0),Ai(t,i),tn(t,gt()),n;if(e===6)Ai(t,i);else{if(r=t.current.alternate,!(i&30)&&!F_(r)&&(e=cl(t,i),e===2&&(s=hu(t),s!==0&&(i=s,e=ju(t,s))),e===1))throw n=Ta,vr(t,0),Ai(t,i),tn(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:lr(t,Kt,ii);break;case 3:if(Ai(t,i),(i&130023424)===i&&(e=Od+500-gt(),10<e)){if(Wo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Wt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Su(lr.bind(null,t,Kt,ii),e);break}lr(t,Kt,ii);break;case 4:if(Ai(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-kn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*U_(i/1960))-i,10<i){t.timeoutHandle=Su(lr.bind(null,t,Kt,ii),i);break}lr(t,Kt,ii);break;case 5:lr(t,Kt,ii);break;default:throw Error(te(329))}}}return tn(t,gt()),t.callbackNode===n?j0.bind(null,t):null}function ju(t,e){var n=la;return t.current.memoizedState.isDehydrated&&(vr(t,e).flags|=256),t=cl(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&Hu(e)),t}function Hu(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function F_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!In(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ai(t,e){for(e&=~Fd,e&=~Cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),i=1<<n;t[n]=-1,e&=~i}}function dh(t){if(We&6)throw Error(te(327));fs();var e=Wo(t,0);if(!(e&1))return tn(t,gt()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var i=hu(t);i!==0&&(e=i,n=ju(t,i))}if(n===1)throw n=Ta,vr(t,0),Ai(t,e),tn(t,gt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,Kt,ii),tn(t,gt()),null}function zd(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Ms=gt()+500,wl&&Ki())}}function br(t){Ri!==null&&Ri.tag===0&&!(We&6)&&fs();var e=We;We|=1;var n=Mn.transition,i=Je;try{if(Mn.transition=null,Je=1,t)return t()}finally{Je=i,Mn.transition=n,We=e,!(We&6)&&Ki()}}function Bd(){on=ss.current,st(ss)}function vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,h_(n)),yt!==null)for(n=yt.return;n!==null;){var i=n;switch(yd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ko();break;case 3:ys(),st(Jt),st(Bt),Nd();break;case 5:Cd(i);break;case 4:ys();break;case 13:st(lt);break;case 19:st(lt);break;case 10:wd(i.type._context);break;case 22:case 23:Bd()}n=n.return}if(Rt=t,yt=t=zi(t.current,null),Lt=on=e,Mt=0,Ta=null,Fd=Cl=wr=0,Kt=la=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}pr=null}return t}function H0(t,e){do{var n=yt;try{if(Ed(),Do.current=sl,rl){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rl=!1}if(Er=0,Ct=St=ct=null,aa=!1,Ea=0,Ud.current=null,n===null||n.return===null){Mt=1,Ta=e,yt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Lt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Qf(a);if(g!==null){g.flags&=-257,Jf(g,a,o,s,e),g.mode&1&&Zf(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Zf(s,u,e),jd();break e}l=Error(te(426))}}else if(at&&o.mode&1){var m=Qf(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Jf(m,a,o,s,e),Sd(Ss(l,o));break e}}s=l=Ss(l,o),Mt!==4&&(Mt=2),la===null?la=[s]:la.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=b0(s,l,e);Wf(s,d);break e;case 1:o=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fi===null||!Fi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=T0(s,o,e);Wf(s,S);break e}}s=s.return}while(s!==null)}W0(n)}catch(R){e=R,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function V0(){var t=al.current;return al.current=sl,t===null?sl:t}function jd(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Rt===null||!(wr&268435455)&&!(Cl&268435455)||Ai(Rt,Lt)}function cl(t,e){var n=We;We|=2;var i=V0();(Rt!==t||Lt!==e)&&(ii=null,vr(t,e));do try{O_();break}catch(r){H0(t,r)}while(!0);if(Ed(),We=n,al.current=i,yt!==null)throw Error(te(261));return Rt=null,Lt=0,Mt}function O_(){for(;yt!==null;)G0(yt)}function z_(){for(;yt!==null&&!uv();)G0(yt)}function G0(t){var e=$0(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?W0(t):yt=e,Ud.current=null}function W0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=L_(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,yt=null;return}}else if(n=P_(n,e,on),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Mt===0&&(Mt=5)}function lr(t,e,n){var i=Je,r=Mn.transition;try{Mn.transition=null,Je=1,B_(t,e,n,i)}finally{Mn.transition=r,Je=i}return null}function B_(t,e,n,i){do fs();while(Ri!==null);if(We&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yv(t,s),t===Rt&&(yt=Rt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||io||(io=!0,Y0(Go,function(){return fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var a=Je;Je=1;var o=We;We|=4,Ud.current=null,D_(t,n),z0(n,t),a_(_u),Xo=!!vu,_u=vu=null,t.current=n,I_(n),dv(),We=o,Je=a,Mn.transition=s}else t.current=n;if(io&&(io=!1,Ri=t,ll=r),s=t.pendingLanes,s===0&&(Fi=null),pv(n.stateNode),tn(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ol)throw ol=!1,t=zu,zu=null,t;return ll&1&&t.tag!==0&&fs(),s=t.pendingLanes,s&1?t===Bu?ca++:(ca=0,Bu=t):ca=0,Ki(),null}function fs(){if(Ri!==null){var t=bm(ll),e=Mn.transition,n=Je;try{if(Mn.transition=null,Je=16>t?16:t,Ri===null)var i=!1;else{if(t=Ri,Ri=null,ll=0,We&6)throw Error(te(331));var r=We;for(We|=4,me=t.current;me!==null;){var s=me,a=s.child;if(me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(me=u;me!==null;){var f=me;switch(f.tag){case 0:case 11:case 15:oa(8,f,s)}var p=f.child;if(p!==null)p.return=f,me=p;else for(;me!==null;){f=me;var h=f.sibling,g=f.return;if(U0(f),f===u){me=null;break}if(h!==null){h.return=g,me=h;break}me=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,me=a;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,me=d;break e}me=s.return}}var x=t.current;for(me=x;me!==null;){a=me;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,me=v;else e:for(a=x;me!==null;){if(o=me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Al(9,o)}}catch(R){ht(o,o.return,R)}if(o===a){me=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,me=S;break e}me=o.return}}if(We=r,Ki(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(_l,t)}catch{}i=!0}return i}finally{Je=n,Mn.transition=e}}return!1}function fh(t,e,n){e=Ss(n,e),e=b0(t,e,1),t=Ui(t,e,1),e=Wt(),t!==null&&(Na(t,1,e),tn(t,e))}function ht(t,e,n){if(t.tag===3)fh(t,t,n);else for(;e!==null;){if(e.tag===3){fh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fi===null||!Fi.has(i))){t=Ss(n,t),t=T0(e,t,1),e=Ui(e,t,1),t=Wt(),e!==null&&(Na(e,1,t),tn(e,t));break}}e=e.return}}function j_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Lt&n)===n&&(Mt===4||Mt===3&&(Lt&130023424)===Lt&&500>gt()-Od?vr(t,0):Fd|=n),tn(t,e)}function X0(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=Wt();t=fi(t,e),t!==null&&(Na(t,e,n),tn(t,n))}function H_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),X0(t,n)}function V_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),X0(t,n)}var $0;$0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,R_(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,at&&e.flags&1048576&&Zm(e,Jo,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Uo(t,e),t=e.pendingProps;var r=xs(e,Bt.current);ds(e,n),r=Pd(null,e,i,t,r,n);var s=Ld();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,Zo(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Td(e),r.updater=Tl,e.stateNode=r,r._reactInternals=e,Cu(e,i,t,n),e=Pu(null,e,i,!0,s,n)):(e.tag=0,at&&s&&_d(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Uo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=W_(i),t=Nn(i,t),r){case 0:e=Ru(null,e,i,t,n);break e;case 1:e=nh(null,e,i,t,n);break e;case 11:e=eh(null,e,i,t,n);break e;case 14:e=th(null,e,i,Nn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Ru(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),nh(t,e,i,r,n);case 3:e:{if(R0(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,i0(t,e),nl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ss(Error(te(423)),e),e=ih(t,e,i,n,r);break e}else if(i!==r){r=Ss(Error(te(424)),e),e=ih(t,e,i,n,r);break e}else for(ln=Ii(e.stateNode.containerInfo.firstChild),un=e,at=!0,Pn=null,n=t0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vs(),i===r){e=hi(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return r0(e),t===null&&bu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,yu(i,r)?a=null:s!==null&&yu(i,s)&&(e.flags|=32),N0(t,e),Vt(t,e,a,n),e.child;case 6:return t===null&&bu(e),null;case 13:return P0(t,e,n);case 4:return Ad(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_s(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),eh(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,nt(el,i._currentValue),i._currentValue=a,s!==null)if(In(s.value,a)){if(s.children===r.children&&!Jt.current){e=hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=li(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Tu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(te(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Tu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ds(e,n),r=En(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),th(t,e,i,r,n);case 15:return A0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Uo(t,e),e.tag=1,en(i)?(t=!0,Zo(e)):t=!1,ds(e,n),w0(e,i,r),Cu(e,i,r,n),Pu(null,e,i,!0,t,n);case 19:return L0(t,e,n);case 22:return C0(t,e,n)}throw Error(te(156,e.tag))};function Y0(t,e){return Sm(t,e)}function G_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,i){return new G_(t,e,n,i)}function Hd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function W_(t){if(typeof t=="function")return Hd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===od)return 11;if(t===ld)return 14}return 2}function zi(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Hd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case qr:return _r(n.children,r,s,e);case ad:a=8,r|=8;break;case Qc:return t=yn(12,n,e,r|2),t.elementType=Qc,t.lanes=s,t;case Jc:return t=yn(13,n,e,r),t.elementType=Jc,t.lanes=s,t;case eu:return t=yn(19,n,e,r),t.elementType=eu,t.lanes=s,t;case rm:return Nl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nm:a=10;break e;case im:a=9;break e;case od:a=11;break e;case ld:a=14;break e;case wi:a=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=yn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function _r(t,e,n,i){return t=yn(7,t,i,e),t.lanes=n,t}function Nl(t,e,n,i){return t=yn(22,t,i,e),t.elementType=rm,t.lanes=n,t.stateNode={isHidden:!1},t}function hc(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function pc(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function X_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vd(t,e,n,i,r,s,a,o,l){return t=new X_(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Td(s),t}function $_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function q0(t){if(!t)return Gi;t=t._reactInternals;e:{if(Cr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(en(n))return qm(t,n,e)}return e}function K0(t,e,n,i,r,s,a,o,l){return t=Vd(n,i,!0,t,r,s,a,o,l),t.context=q0(null),n=t.current,i=Wt(),r=Oi(n),s=li(i,r),s.callback=e??null,Ui(n,s,r),t.current.lanes=r,Na(t,r,i),tn(t,i),t}function Rl(t,e,n,i){var r=e.current,s=Wt(),a=Oi(r);return n=q0(n),e.context===null?e.context=n:e.pendingContext=n,e=li(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ui(r,e,a),t!==null&&(Dn(t,r,a,s),ko(t,r,a)),a}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gd(t,e){hh(t,e),(t=t.alternate)&&hh(t,e)}function Y_(){return null}var Z0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wd(t){this._internalRoot=t}Pl.prototype.render=Wd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Rl(t,e,null,null)};Pl.prototype.unmount=Wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){Rl(null,t,null,null)}),e[di]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ti.length&&e!==0&&e<Ti[n].priority;n++);Ti.splice(n,0,t),n===0&&Rm(t)}};function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ph(){}function q_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ul(a);s.call(u)}}var a=K0(e,i,t,0,null,!1,!1,"",ph);return t._reactRootContainer=a,t[di]=a.current,va(t.nodeType===8?t.parentNode:t),br(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=ul(l);o.call(u)}}var l=Vd(t,0,!1,null,null,!1,!1,"",ph);return t._reactRootContainer=l,t[di]=l.current,va(t.nodeType===8?t.parentNode:t),br(function(){Rl(e,l,n,i)}),l}function kl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=ul(a);o.call(l)}}Rl(e,a,t,r)}else a=q_(n,e,t,r,i);return ul(a)}Tm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(dd(e,n|1),tn(e,gt()),!(We&6)&&(Ms=gt()+500,Ki()))}break;case 13:br(function(){var i=fi(t,1);if(i!==null){var r=Wt();Dn(i,t,1,r)}}),Gd(t,1)}};fd=function(t){if(t.tag===13){var e=fi(t,134217728);if(e!==null){var n=Wt();Dn(e,t,134217728,n)}Gd(t,134217728)}};Am=function(t){if(t.tag===13){var e=Oi(t),n=fi(t,e);if(n!==null){var i=Wt();Dn(n,t,e,i)}Gd(t,e)}};Cm=function(){return Je};Nm=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};uu=function(t,e,n){switch(e){case"input":if(iu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=El(i);if(!r)throw Error(te(90));am(i),iu(i,r)}}}break;case"textarea":lm(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};mm=zd;gm=br;var K_={usingClientEntryPoint:!1,Events:[Pa,Jr,El,hm,pm,zd]},Vs={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z_={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_m(t),t===null?null:t.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||Y_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{_l=ro.inject(Z_),Xn=ro}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K_;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(te(200));return $_(t,e,null,n)};fn.createRoot=function(t,e){if(!Xd(t))throw Error(te(299));var n=!1,i="",r=Z0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vd(t,1,!1,null,null,n,!1,i,r),t[di]=e.current,va(t.nodeType===8?t.parentNode:t),new Wd(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=_m(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return br(t)};fn.hydrate=function(t,e,n){if(!Ll(e))throw Error(te(200));return kl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!Xd(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Z0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=K0(e,null,t,1,n??null,r,!1,s,a),t[di]=e.current,va(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Pl(e)};fn.render=function(t,e,n){if(!Ll(e))throw Error(te(200));return kl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!Ll(t))throw Error(te(40));return t._reactRootContainer?(br(function(){kl(null,null,t,!1,function(){t._reactRootContainer=null,t[di]=null})}),!0):!1};fn.unstable_batchedUpdates=zd;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ll(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return kl(t,e,n,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426";function Q0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q0)}catch(t){console.error(t)}}Q0(),Qp.exports=fn;var Q_=Qp.exports,mh=Q_;Kc.createRoot=mh.createRoot,Kc.hydrateRoot=mh.hydrateRoot;const J0=_e.createContext(void 0),eg="evaluator@orcamed.org",J_="OrcaMed2026!",ey=({children:t})=>{const[e,n]=_e.useState(()=>{try{const u=localStorage.getItem("orca_user_session");return u?JSON.parse(u):null}catch{return null}}),[i,r]=_e.useState(!1);_e.useEffect(()=>{e?localStorage.setItem("orca_user_session",JSON.stringify(e)):localStorage.removeItem("orca_user_session")},[e]);const s=async(u,f)=>{r(!0);try{const p=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u,password:f})}),h=await p.json();return p.ok&&h.success?(n(h.user),r(!1),{success:!0,message:h.message}):(r(!1),{success:!1,message:h.detail||h.message||"Login failed."})}catch(p){return r(!1),{success:!1,message:"Server communication error: "+p.message}}},a=async()=>(await s(eg,J_)).success,o=async(u,f,p)=>{r(!0);try{const h=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u,password:f,confirm_password:p})}),g=await h.json();return r(!1),h.ok&&g.success?{success:!0,message:g.message}:{success:!1,message:g.detail||g.message||"Registration failed."}}catch(h){return r(!1),{success:!1,message:"Server communication error: "+h.message}}},l=()=>{n(null)};return c.jsx(J0.Provider,{value:{user:e,isAuthenticated:!!e,isLoading:i,login:s,loginEvaluatorFastPass:a,register:o,logout:l},children:t})},ka=()=>{const t=_e.useContext(J0);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ny(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:ty(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=t=>{const e=iy(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function mc(t){return t!=null}function sy(t,e={}){var h,g;const n=e.attributeNames??{},i=_=>n[_]??_,r=t.size??t.width??er.width,s=t.size??t.height??er.height,a=((h=t.aliases)==null?void 0:h.filter(_=>typeof _=="string"&&_.trim()!=="").map(_=>`lucide-${_}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],l=((g=e.className)==null?void 0:g.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?Vu(...l):Vu("lucide",...o,...l),f=e.absoluteStrokeWidth?Number(e.strokeWidth??er["stroke-width"])*Number(t.size??t.width??er.width)/Number(e.size??e.width??er.width):e.strokeWidth??er["stroke-width"];return["svg",{...Object.entries(er).reduce((_,[y,m])=>(_[i(y)]=m,_),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&mc(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&mc(e.width)&&{[i("width")]:e.width},..."height"in e&&mc(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:f,...u&&{[i("class")]:u},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(_=>{const[y,m,d]=_,x=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...m}:m;return d?[y,x,d]:[y,x]})]}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ay(t,e={}){return sy(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},ly=_e.createContext({}),cy=()=>_e.useContext(ly),uy=_e.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:l,iconNode:u=[],icon:f={node:u,aliases:[],size:24},...p},h)=>{const{size:g=24,strokeWidth:_=2,absoluteStrokeWidth:y=!1,nonScalingStroke:m=!1,color:d="currentColor",className:x=""}=cy()??{},v=!!l||oy(p),[S,R,T=[]]=ay(f,{color:t??d,width:n??e??g,height:i??e??g,strokeWidth:r??_,absoluteStrokeWidth:s??y,nonScalingStroke:a??m,className:Vu(x,o),hasA11yProp:v,attributes:p});return _e.createElement(S,{ref:h,...R},[...T.map(([A,C])=>_e.createElement(A,C)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ge(t,e=[],n=[]){const i=typeof t=="string"?ny(t,e,n):t,r=_e.forwardRef(({className:s,...a},o)=>_e.createElement(uy,{ref:o,icon:i,className:s,...a}));return i.name&&(r.displayName=ry(i.name)),r}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};tg.node;const ci=Ge(tg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};ng.node;const Bi=Ge(ng);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};ig.node;const dy=Ge(ig);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};rg.node;const fy=Ge(rg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};sg.node;const hy=Ge(sg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};ag.node;const py=Ge(ag);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};og.node;const my=Ge(og);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};lg.node;const Gt=Ge(lg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};cg.node;const gy=Ge(cg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};ug.node;const xy=Ge(ug);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};dg.node;const vy=Ge(dg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};fg.node;const _y=Ge(fg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};hg.node;const Es=Ge(hg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};pg.node;const mg=Ge(pg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"file-check-corner",size:24,node:[["path",{d:"M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",key:"g5mvt7"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m14 20 2 2 4-4",key:"15kota"}]],aliases:["file-check-2"]};gg.node;const yy=Ge(gg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"file-search",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]};xg.node;const Sy=Ge(xg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};vg.node;const $d=Ge(vg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"key",size:24,node:[["path",{d:"m2 21 9.6-9.6",key:"9l79m3"}],["path",{d:"m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19",key:"fw8biw"}],["circle",{cx:"15.5",cy:"7.5",r:"5.5",key:"4wxmhb"}]]};_g.node;const My=Ge(_g);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"layout-dashboard",size:24,node:[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]};yg.node;const Ey=Ge(yg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};Sg.node;const Ln=Ge(Sg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};Mg.node;const wy=Ge(Mg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};Eg.node;const by=Ge(Eg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};wg.node;const bg=Ge(wg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]};Tg.node;const Ag=Ge(Tg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};Cg.node;const Ty=Ge(Cg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};Ng.node;const Ay=Ge(Ng);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Rg.node;const Cy=Ge(Rg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};Pg.node;const Lg=Ge(Pg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};kg.node;const Dg=Ge(kg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};Ig.node;const Gu=Ge(Ig);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};Ug.node;const Aa=Ge(Ug);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"user-check",size:24,node:[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};Fg.node;const Ny=Ge(Fg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Og.node;const Ry=Ge(Og);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};zg.node;const Dl=Ge(zg),Bg=_e.createContext(void 0),Py=({children:t})=>{const[e,n]=_e.useState(()=>{const s=localStorage.getItem("orca_theme");return s==="light"||s==="dark"?s:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});_e.useEffect(()=>{const s=document.documentElement;e==="dark"?(s.classList.add("dark"),s.classList.remove("light")):(s.classList.add("light"),s.classList.remove("dark")),localStorage.setItem("orca_theme",e)},[e]);const i=()=>{n(s=>s==="dark"?"light":"dark")},r=s=>{n(s)};return c.jsx(Bg.Provider,{value:{theme:e,toggleTheme:i,setTheme:r},children:t})},jg=()=>{const t=_e.useContext(Bg);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},Ly=({onOpenAuth:t,onNavigateSection:e,onGoToApp:n})=>{const{theme:i,toggleTheme:r}=jg(),{isAuthenticated:s,user:a,logout:o}=ka(),l=u=>{if(e)e(u);else{const f=document.getElementById(u);f&&f.scrollIntoView({behavior:"smooth"})}};return c.jsx("header",{className:"sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-teal-500/20",children:c.jsx(ci,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"font-extrabold text-lg tracking-tight text-slate-900 dark:text-white",children:"ORCA MEDSCAN"}),c.jsx("span",{className:"hidden sm:inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800",children:"ENCLAVE"})]}),c.jsx("p",{className:"text-[10px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 hidden sm:block",children:"Clinical Intelligence Platform"})]})]}),c.jsxs("nav",{className:"hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300",children:[c.jsx("button",{onClick:()=>l("demo-section"),className:"hover:text-teal-600 dark:hover:text-teal-400 transition-colors",children:"Product"}),c.jsx("button",{onClick:()=>l("workflow-section"),className:"hover:text-teal-600 dark:hover:text-teal-400 transition-colors",children:"Workflow"}),c.jsx("button",{onClick:()=>l("formats-section"),className:"hover:text-teal-600 dark:hover:text-teal-400 transition-colors",children:"Capabilities"}),c.jsx("button",{onClick:()=>l("safety-section"),className:"hover:text-teal-600 dark:hover:text-teal-400 transition-colors",children:"Safety & Enclave"})]}),c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("button",{onClick:r,"aria-label":"Toggle interface theme",className:"p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-teal-500 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500",title:`Switch to ${i==="dark"?"Light":"Dark"} Mode`,children:i==="dark"?c.jsx(Dg,{className:"w-4 h-4 text-amber-400"}):c.jsx(bg,{className:"w-4 h-4 text-slate-700"})}),s?c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("button",{onClick:n,className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold shadow-sm transition-all focus:ring-2 focus:ring-teal-500",children:["Open Workspace",c.jsx(Bi,{className:"w-4 h-4"})]}),c.jsx("button",{onClick:o,className:"hidden sm:inline-block px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200",children:"Sign Out"})]}):c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("button",{onClick:()=>t("login"),className:"px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors",children:"Sign In"}),c.jsxs("button",{onClick:()=>t("signup"),className:"inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold shadow-sm shadow-teal-600/20 transition-all",children:["Get Started",c.jsx(Bi,{className:"w-3.5 h-3.5"})]})]})]})]})})},ky=({currentView:t,onSelectView:e,auditCount:n,ocrActive:i,onLoadBenchmark:r,isCollapsed:s,onToggleCollapse:a})=>{const{user:o,logout:l}=ka(),{theme:u,toggleTheme:f}=jg(),p=[{label:"Dashboard",icon:c.jsx(Ey,{className:"w-4 h-4"})},{label:"Analyze Report",icon:c.jsx(Sy,{className:"w-4 h-4"})},{label:"Report History",icon:c.jsx(Ag,{className:"w-4 h-4"})},{label:"Extraction Diagnostics",icon:c.jsx(ci,{className:"w-4 h-4"})},{label:"Settings",icon:c.jsx(Cy,{className:"w-4 h-4"})},{label:"Clinical Safety",icon:c.jsx(Lg,{className:"w-4 h-4"})}];return c.jsxs("aside",{className:`fixed top-0 left-0 bottom-0 z-40 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-all duration-300 ${s?"w-16":"w-64"}`,children:[c.jsxs("div",{children:[c.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-slate-200 dark:border-slate-800",children:[!s&&c.jsxs("div",{className:"flex items-center gap-2.5 overflow-hidden",children:[c.jsx("div",{className:"w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white shrink-0 shadow-sm",children:c.jsx(ci,{className:"w-4 h-4"})}),c.jsxs("div",{className:"truncate",children:[c.jsx("span",{className:"font-extrabold text-sm tracking-tight text-slate-900 dark:text-white",children:"ORCA MEDSCAN"}),c.jsx("p",{className:"text-[10px] uppercase font-bold text-teal-700 dark:text-teal-400 tracking-wider",children:"CLINICAL ENCLAVE"})]})]}),s&&c.jsx("div",{className:"w-8 h-8 mx-auto rounded-lg bg-teal-600 flex items-center justify-center text-white",children:c.jsx(ci,{className:"w-4 h-4"})}),c.jsx("button",{onClick:a,"aria-label":s?"Expand sidebar":"Collapse sidebar",className:"p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800",children:s?c.jsx(py,{className:"w-4 h-4"}):c.jsx(hy,{className:"w-4 h-4"})})]}),!s&&c.jsxs("div",{className:"p-3 m-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[c.jsx(Ny,{className:"w-3.5 h-3.5 text-teal-600 dark:text-teal-400"}),c.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400",children:"Practitioner Session"})]}),c.jsx("p",{className:"text-xs font-semibold text-slate-800 dark:text-slate-100 truncate",children:(o==null?void 0:o.email)||"evaluator@orcamed.org"}),c.jsx("span",{className:"inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-teal-100/60 dark:bg-teal-950 text-teal-800 dark:text-teal-300",children:(o==null?void 0:o.role)||"Lead Clinical Evaluator"})]}),c.jsx("nav",{className:"p-2 space-y-1",children:p.map(h=>{const g=t===h.label;return c.jsxs("button",{onClick:()=>e(h.label),title:s?h.label:void 0,className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${g?"bg-teal-600 text-white shadow-sm font-semibold":"text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white"} ${s?"justify-center":""}`,children:[c.jsx("span",{className:g?"text-white":"text-slate-400 dark:text-slate-400",children:h.icon}),!s&&c.jsx("span",{children:h.label})]},h.label)})}),!s&&c.jsx("div",{className:"px-3 pt-3",children:c.jsxs("button",{onClick:r,className:"w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors shadow-sm",children:[c.jsx(Dl,{className:"w-3.5 h-3.5"}),"1-Click Benchmark"]})})]}),c.jsxs("div",{className:"p-3 border-t border-slate-200 dark:border-slate-800 space-y-2",children:[!s&&c.jsxs("div",{className:"text-[11px] text-slate-500 dark:text-slate-400 px-1 py-1 flex items-center justify-between font-mono",children:[c.jsxs("span",{children:["Audits: ",n]}),c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${i?"bg-emerald-500":"bg-slate-400"}`}),"OCR: ",i?"Online":"Offline"]})]}),c.jsx("button",{onClick:f,"aria-label":"Toggle theme",className:`w-full flex items-center gap-2.5 p-2 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 ${s?"justify-center":""}`,children:u==="dark"?c.jsxs(c.Fragment,{children:[c.jsx(Dg,{className:"w-4 h-4 text-amber-400"}),!s&&c.jsx("span",{children:"Light Mode"})]}):c.jsxs(c.Fragment,{children:[c.jsx(bg,{className:"w-4 h-4 text-slate-700"}),!s&&c.jsx("span",{children:"Night Mode"})]})}),c.jsxs("button",{onClick:l,"aria-label":"Log Out",className:`w-full flex items-center gap-2.5 p-2 rounded-lg text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors ${s?"justify-center":""}`,children:[c.jsx(wy,{className:"w-4 h-4"}),!s&&c.jsx("span",{children:"Log Out of Enclave"})]})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yd="165",Dy=0,gh=1,Iy=2,Hg=1,Vg=2,ni=3,Wi=0,nn=1,Vn=2,ji=0,hs=1,xh=2,vh=3,_h=4,Uy=5,dr=100,Fy=101,Oy=102,zy=103,By=104,jy=200,Hy=201,Vy=202,Gy=203,Wu=204,Xu=205,Wy=206,Xy=207,$y=208,Yy=209,qy=210,Ky=211,Zy=212,Qy=213,Jy=214,eS=0,tS=1,nS=2,dl=3,iS=4,rS=5,sS=6,aS=7,Gg=0,oS=1,lS=2,Hi=0,cS=1,uS=2,dS=3,fS=4,hS=5,pS=6,mS=7,Wg=300,ws=301,bs=302,$u=303,Yu=304,Il=306,qu=1e3,gr=1001,Ku=1002,Sn=1003,gS=1004,so=1005,_n=1006,gc=1007,xr=1008,Xi=1009,xS=1010,vS=1011,fl=1012,Xg=1013,Ts=1014,Pi=1015,Ul=1016,$g=1017,Yg=1018,As=1020,_S=35902,yS=1021,SS=1022,Wn=1023,MS=1024,ES=1025,ps=1026,Cs=1027,wS=1028,qg=1029,bS=1030,Kg=1031,Zg=1033,xc=33776,vc=33777,_c=33778,yc=33779,yh=35840,Sh=35841,Mh=35842,Eh=35843,wh=36196,bh=37492,Th=37496,Ah=37808,Ch=37809,Nh=37810,Rh=37811,Ph=37812,Lh=37813,kh=37814,Dh=37815,Ih=37816,Uh=37817,Fh=37818,Oh=37819,zh=37820,Bh=37821,Sc=36492,jh=36494,Hh=36495,TS=36283,Vh=36284,Gh=36285,Wh=36286,AS=3200,CS=3201,Qg=0,NS=1,Ci="",Bn="srgb",Zi="srgb-linear",qd="display-p3",Fl="display-p3-linear",hl="linear",rt="srgb",pl="rec709",ml="p3",Pr=7680,Xh=519,RS=512,PS=513,LS=514,Jg=515,kS=516,DS=517,IS=518,US=519,$h=35044,Yh="300 es",oi=2e3,gl=2001;class ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mc=Math.PI/180,Zu=180/Math.PI;function Da(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[t&255]+Ut[t>>8&255]+Ut[t>>16&255]+Ut[t>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function FS(t,e){return(t%e+e)%e}function Ec(t,e,n){return(1-n)*t+n*e}function Gs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,a,o,l,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],f=i[4],p=i[7],h=i[2],g=i[5],_=i[8],y=r[0],m=r[3],d=r[6],x=r[1],v=r[4],S=r[7],R=r[2],T=r[5],A=r[8];return s[0]=a*y+o*x+l*R,s[3]=a*m+o*v+l*T,s[6]=a*d+o*S+l*A,s[1]=u*y+f*x+p*R,s[4]=u*m+f*v+p*T,s[7]=u*d+f*S+p*A,s[2]=h*y+g*x+_*R,s[5]=h*m+g*v+_*T,s[8]=h*d+g*S+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=f*a-o*u,h=o*l-f*s,g=u*s-a*l,_=n*p+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=p*y,e[1]=(r*u-f*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=g*y,e[7]=(i*l-u*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(wc.makeScale(e,n)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new Ue;function ex(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function xl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function OS(){const t=xl("canvas");return t.style.display="block",t}const qh={};function tx(t){t in qh||(qh[t]=!0,console.warn(t))}function zS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Kh=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zh=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ao={[Zi]:{transfer:hl,primaries:pl,toReference:t=>t,fromReference:t=>t},[Bn]:{transfer:rt,primaries:pl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Fl]:{transfer:hl,primaries:ml,toReference:t=>t.applyMatrix3(Zh),fromReference:t=>t.applyMatrix3(Kh)},[qd]:{transfer:rt,primaries:ml,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Zh),fromReference:t=>t.applyMatrix3(Kh).convertLinearToSRGB()}},BS=new Set([Zi,Fl]),Qe={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!BS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ao[e].toReference,r=ao[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ao[t].primaries},getTransfer:function(t){return t===Ci?hl:ao[t].transfer}};function ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Lr;class jS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lr===void 0&&(Lr=xl("canvas")),Lr.width=e.width,Lr.height=e.height;const i=Lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Lr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ms(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ms(n[i]/255)*255):n[i]=ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HS=0;class nx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Da(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Tc(r[a].image)):s.push(Tc(r[a]))}else s=Tc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Tc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?jS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VS=0;class Xt extends ks{constructor(e=Xt.DEFAULT_IMAGE,n=Xt.DEFAULT_MAPPING,i=gr,r=gr,s=_n,a=xr,o=Wn,l=Xi,u=Xt.DEFAULT_ANISOTROPY,f=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Da(),this.name="",this.source=new nx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qu:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case Ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qu:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case Ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Wg;Xt.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],p=l[8],h=l[1],g=l[5],_=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(p-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(g+1)/2,R=(d+1)/2,T=(f+h)/4,A=(p+y)/4,C=(_+m)/4;return v>S&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=C/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=C/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-_)*(m-_)+(p-y)*(p-y)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(p-y)/x,this.z=(h-f)/x,this.w=Math.acos((u+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GS extends ks{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new nx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends GS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ix extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WS extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],f=i[r+2],p=i[r+3];const h=s[a+0],g=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=p;return}if(o===1){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(p!==y||l!==h||u!==g||f!==_){let m=1-o;const d=l*h+u*g+f*_+p*y,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const R=Math.sqrt(v),T=Math.atan2(R,d*x);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}const S=o*x;if(l=l*m+h*S,u=u*m+g*S,f=f*m+_*S,p=p*m+y*S,m===1-o){const R=1/Math.sqrt(l*l+u*u+f*f+p*p);l*=R,u*=R,f*=R,p*=R}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],f=i[r+3],p=s[a],h=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+f*p+l*g-u*h,e[n+1]=l*_+f*h+u*p-o*g,e[n+2]=u*_+f*g+o*h-l*p,e[n+3]=f*_-o*p-l*h-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(r/2),p=o(s/2),h=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*f*p+u*g*_,this._y=u*g*p-h*f*_,this._z=u*f*_+h*g*p,this._w=u*f*p-h*g*_;break;case"YXZ":this._x=h*f*p+u*g*_,this._y=u*g*p-h*f*_,this._z=u*f*_-h*g*p,this._w=u*f*p+h*g*_;break;case"ZXY":this._x=h*f*p-u*g*_,this._y=u*g*p+h*f*_,this._z=u*f*_+h*g*p,this._w=u*f*p-h*g*_;break;case"ZYX":this._x=h*f*p-u*g*_,this._y=u*g*p+h*f*_,this._z=u*f*_-h*g*p,this._w=u*f*p+h*g*_;break;case"YZX":this._x=h*f*p+u*g*_,this._y=u*g*p+h*f*_,this._z=u*f*_-h*g*p,this._w=u*f*p-h*g*_;break;case"XZY":this._x=h*f*p-u*g*_,this._y=u*g*p-h*f*_,this._z=u*f*_+h*g*p,this._w=u*f*p+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],f=n[6],p=n[10],h=i+o+p;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>p){const g=2*Math.sqrt(1+i-o-p);this._w=(f-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>p){const g=2*Math.sqrt(1+o-i-p);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+p-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*l,this._y=r*f+a*l+s*o-i*u,this._z=s*f+a*u+i*l-r*o,this._w=a*f-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,o),p=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=a*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),f=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*u+a*p-o*f,this.y=i+l*f+o*u-s*p,this.z=r+l*p+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ac=new V,Qh=new Ia;class Ua{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Tn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Tn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Tn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(s,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),lo.subVectors(this.max,Ws),kr.subVectors(e.a,Ws),Dr.subVectors(e.b,Ws),Ir.subVectors(e.c,Ws),xi.subVectors(Dr,kr),vi.subVectors(Ir,Dr),tr.subVectors(kr,Ir);let n=[0,-xi.z,xi.y,0,-vi.z,vi.y,0,-tr.z,tr.y,xi.z,0,-xi.x,vi.z,0,-vi.x,tr.z,0,-tr.x,-xi.y,xi.x,0,-vi.y,vi.x,0,-tr.y,tr.x,0];return!Cc(n,kr,Dr,Ir,lo)||(n=[1,0,0,0,1,0,0,0,1],!Cc(n,kr,Dr,Ir,lo))?!1:(co.crossVectors(xi,vi),n=[co.x,co.y,co.z],Cc(n,kr,Dr,Ir,lo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new V,new V,new V,new V,new V,new V,new V,new V],Tn=new V,oo=new Ua,kr=new V,Dr=new V,Ir=new V,xi=new V,vi=new V,tr=new V,Ws=new V,lo=new V,co=new V,nr=new V;function Cc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){nr.fromArray(t,s);const o=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),u=n.dot(nr),f=i.dot(nr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const XS=new Ua,Xs=new V,Nc=new V;class Kd{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):XS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const n=Xs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Xs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(Nc)),this.expandByPoint(Xs.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new V,Rc=new V,uo=new V,_i=new V,Pc=new V,fo=new V,Lc=new V;class $S{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Rc.copy(e).add(n).multiplyScalar(.5),uo.copy(n).sub(e).normalize(),_i.copy(this.origin).sub(Rc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(uo),o=_i.dot(this.direction),l=-_i.dot(uo),u=_i.lengthSq(),f=Math.abs(1-a*a);let p,h,g,_;if(f>0)if(p=a*l-o,h=a*o-l,_=s*f,p>=0)if(h>=-_)if(h<=_){const y=1/f;p*=y,h*=y,g=p*(p+a*h+2*o)+h*(a*p+h+2*l)+u}else h=s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*l)+u;else h=-s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*l)+u;else h<=-_?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+h*(h+2*l)+u):h<=_?(p=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+u):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+h*(h+2*l)+u);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Rc).addScaledVector(uo,h),g}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){Pc.subVectors(n,e),fo.subVectors(i,e),Lc.crossVectors(Pc,fo);let a=this.direction.dot(Lc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,e);const l=o*this.direction.dot(fo.crossVectors(_i,fo));if(l<0)return null;const u=o*this.direction.dot(Pc.cross(_i));if(u<0||l+u>a)return null;const f=-o*_i.dot(Lc);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,a,o,l,u,f,p,h,g,_,y,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,f,p,h,g,_,y,m)}set(e,n,i,r,s,a,o,l,u,f,p,h,g,_,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=f,d[10]=p,d[14]=h,d[3]=g,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),a=1/Ur.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*f,g=a*p,_=o*f,y=o*p;n[0]=l*f,n[4]=-l*p,n[8]=u,n[1]=g+_*u,n[5]=h-y*u,n[9]=-o*l,n[2]=y-h*u,n[6]=_+g*u,n[10]=a*l}else if(e.order==="YXZ"){const h=l*f,g=l*p,_=u*f,y=u*p;n[0]=h+y*o,n[4]=_*o-g,n[8]=a*u,n[1]=a*p,n[5]=a*f,n[9]=-o,n[2]=g*o-_,n[6]=y+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*f,g=l*p,_=u*f,y=u*p;n[0]=h-y*o,n[4]=-a*p,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*f,n[9]=y-h*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*f,g=a*p,_=o*f,y=o*p;n[0]=l*f,n[4]=_*u-g,n[8]=h*u+y,n[1]=l*p,n[5]=y*u+h,n[9]=g*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,g=a*u,_=o*l,y=o*u;n[0]=l*f,n[4]=y-h*p,n[8]=_*p+g,n[1]=p,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=g*p+_,n[10]=h-y*p}else if(e.order==="XZY"){const h=a*l,g=a*u,_=o*l,y=o*u;n[0]=l*f,n[4]=-p,n[8]=u*f,n[1]=h*p+y,n[5]=a*f,n[9]=g*p-_,n[2]=_*p-g,n[6]=o*f,n[10]=y*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YS,e,qS)}lookAt(e,n,i){const r=this.elements;return sn.subVectors(e,n),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),yi.crossVectors(i,sn),yi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),yi.crossVectors(i,sn)),yi.normalize(),ho.crossVectors(sn,yi),r[0]=yi.x,r[4]=ho.x,r[8]=sn.x,r[1]=yi.y,r[5]=ho.y,r[9]=sn.y,r[2]=yi.z,r[6]=ho.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],f=i[1],p=i[5],h=i[9],g=i[13],_=i[2],y=i[6],m=i[10],d=i[14],x=i[3],v=i[7],S=i[11],R=i[15],T=r[0],A=r[4],C=r[8],b=r[12],M=r[1],L=r[5],W=r[9],B=r[13],F=r[2],O=r[6],j=r[10],q=r[14],D=r[3],Y=r[7],Z=r[11],re=r[15];return s[0]=a*T+o*M+l*F+u*D,s[4]=a*A+o*L+l*O+u*Y,s[8]=a*C+o*W+l*j+u*Z,s[12]=a*b+o*B+l*q+u*re,s[1]=f*T+p*M+h*F+g*D,s[5]=f*A+p*L+h*O+g*Y,s[9]=f*C+p*W+h*j+g*Z,s[13]=f*b+p*B+h*q+g*re,s[2]=_*T+y*M+m*F+d*D,s[6]=_*A+y*L+m*O+d*Y,s[10]=_*C+y*W+m*j+d*Z,s[14]=_*b+y*B+m*q+d*re,s[3]=x*T+v*M+S*F+R*D,s[7]=x*A+v*L+S*O+R*Y,s[11]=x*C+v*W+S*j+R*Z,s[15]=x*b+v*B+S*q+R*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],f=e[2],p=e[6],h=e[10],g=e[14],_=e[3],y=e[7],m=e[11],d=e[15];return _*(+s*l*p-r*u*p-s*o*h+i*u*h+r*o*g-i*l*g)+y*(+n*l*g-n*u*h+s*a*h-r*a*g+r*u*f-s*l*f)+m*(+n*u*p-n*o*g-s*a*p+i*a*g+s*o*f-i*u*f)+d*(-r*o*f-n*l*p+n*o*h+r*a*p-i*a*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=e[9],h=e[10],g=e[11],_=e[12],y=e[13],m=e[14],d=e[15],x=p*m*u-y*h*u+y*l*g-o*m*g-p*l*d+o*h*d,v=_*h*u-f*m*u-_*l*g+a*m*g+f*l*d-a*h*d,S=f*y*u-_*p*u+_*o*g-a*y*g-f*o*d+a*p*d,R=_*p*l-f*y*l-_*o*h+a*y*h+f*o*m-a*p*m,T=n*x+i*v+r*S+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(y*h*s-p*m*s-y*r*g+i*m*g+p*r*d-i*h*d)*A,e[2]=(o*m*s-y*l*s+y*r*u-i*m*u-o*r*d+i*l*d)*A,e[3]=(p*l*s-o*h*s-p*r*u+i*h*u+o*r*g-i*l*g)*A,e[4]=v*A,e[5]=(f*m*s-_*h*s+_*r*g-n*m*g-f*r*d+n*h*d)*A,e[6]=(_*l*s-a*m*s-_*r*u+n*m*u+a*r*d-n*l*d)*A,e[7]=(a*h*s-f*l*s+f*r*u-n*h*u-a*r*g+n*l*g)*A,e[8]=S*A,e[9]=(_*p*s-f*y*s-_*i*g+n*y*g+f*i*d-n*p*d)*A,e[10]=(a*y*s-_*o*s+_*i*u-n*y*u-a*i*d+n*o*d)*A,e[11]=(f*o*s-a*p*s-f*i*u+n*p*u+a*i*g-n*o*g)*A,e[12]=R*A,e[13]=(f*y*r-_*p*r+_*i*h-n*y*h-f*i*m+n*p*m)*A,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*m-n*o*m)*A,e[15]=(a*p*r-f*o*r+f*i*l-n*p*l-a*i*h+n*o*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,f*o+i,f*l-r*a,0,u*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,f=a+a,p=o+o,h=s*u,g=s*f,_=s*p,y=a*f,m=a*p,d=o*p,x=l*u,v=l*f,S=l*p,R=i.x,T=i.y,A=i.z;return r[0]=(1-(y+d))*R,r[1]=(g+S)*R,r[2]=(_-v)*R,r[3]=0,r[4]=(g-S)*T,r[5]=(1-(h+d))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(_+v)*A,r[9]=(m-x)*A,r[10]=(1-(h+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const a=Ur.set(r[4],r[5],r[6]).length(),o=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const u=1/s,f=1/a,p=1/o;return An.elements[0]*=u,An.elements[1]*=u,An.elements[2]*=u,An.elements[4]*=f,An.elements[5]*=f,An.elements[6]*=f,An.elements[8]*=p,An.elements[9]*=p,An.elements[10]*=p,n.setFromRotationMatrix(An),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=oi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(o===oi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===gl)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=oi){const l=this.elements,u=1/(n-e),f=1/(i-r),p=1/(a-s),h=(n+e)*u,g=(i+r)*f;let _,y;if(o===oi)_=(a+s)*p,y=-2*p;else if(o===gl)_=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ur=new V,An=new xt,YS=new V(0,0,0),qS=new V(1,1,1),yi=new V,ho=new V,sn=new V,Jh=new xt,ep=new Ia;class qn{constructor(e=0,n=0,i=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],f=r[9],p=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ep.setFromEuler(this),this.setFromQuaternion(ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class rx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KS=0;const tp=new V,Fr=new Ia,Jn=new xt,po=new V,$s=new V,ZS=new V,QS=new Ia,np=new V(1,0,0),ip=new V(0,1,0),rp=new V(0,0,1),sp={type:"added"},JS={type:"removed"},Or={type:"childadded",child:null},kc={type:"childremoved",child:null};class zt extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new V,n=new qn,i=new Ia,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ue}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(np,e)}rotateY(e){return this.rotateOnAxis(ip,e)}rotateZ(e){return this.rotateOnAxis(rp,e)}translateOnAxis(e,n){return tp.copy(e).applyQuaternion(this.quaternion),this.position.add(tp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(np,e)}translateY(e){return this.translateOnAxis(ip,e)}translateZ(e){return this.translateOnAxis(rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?po.copy(e):po.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt($s,po,this.up):Jn.lookAt(po,$s,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(Jn),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sp),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(JS),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sp),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,ZS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,QS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),f=a(e.images),p=a(e.shapes),h=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new V(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new V,ei=new V,Dc=new V,ti=new V,zr=new V,Br=new V,ap=new V,Ic=new V,Uc=new V,Fc=new V;class Gn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Cn.subVectors(e,n),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Cn.subVectors(r,n),ei.subVectors(i,n),Dc.subVectors(e,n);const a=Cn.dot(Cn),o=Cn.dot(ei),l=Cn.dot(Dc),u=ei.dot(ei),f=ei.dot(Dc),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,g=(u*l-o*f)*h,_=(a*f-o*l)*h;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static isFrontFacing(e,n,i,r){return Cn.subVectors(i,n),ei.subVectors(e,n),Cn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Cn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;zr.subVectors(r,i),Br.subVectors(s,i),Ic.subVectors(e,i);const l=zr.dot(Ic),u=Br.dot(Ic);if(l<=0&&u<=0)return n.copy(i);Uc.subVectors(e,r);const f=zr.dot(Uc),p=Br.dot(Uc);if(f>=0&&p<=f)return n.copy(r);const h=l*p-f*u;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(zr,a);Fc.subVectors(e,s);const g=zr.dot(Fc),_=Br.dot(Fc);if(_>=0&&g<=_)return n.copy(s);const y=g*u-l*_;if(y<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(Br,o);const m=f*_-g*p;if(m<=0&&p-f>=0&&g-_>=0)return ap.subVectors(s,r),o=(p-f)/(p-f+(g-_)),n.copy(r).addScaledVector(ap,o);const d=1/(m+y+h);return a=y*d,o=h*d,n.copy(i).addScaledVector(zr,a).addScaledVector(Br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},mo={h:0,s:0,l:0};function Oc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=FS(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Oc(a,s,e+1/3),this.g=Oc(a,s,e),this.b=Oc(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=sx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=bc(e.r),this.g=bc(e.g),this.b=bc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Qe.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Zt(Ft.r*255,0,255))*65536+Math.round(Zt(Ft.g*255,0,255))*256+Math.round(Zt(Ft.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const p=a-o;switch(u=f<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Bn){Qe.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+n,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(mo);const i=Ec(Si.h,mo.h,n),r=Ec(Si.s,mo.s,n),s=Ec(Si.l,mo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new qe;qe.NAMES=sx;let eM=0;class Fa extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Da(),this.name="",this.type="Material",this.blending=hs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=Xu,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wu&&(i.blendSrc=this.blendSrc),this.blendDst!==Xu&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zd extends Fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new V,go=new Xe;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$h,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return tx("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)go.fromBufferAttribute(this,n),go.applyMatrix3(e),this.setXY(n,go.x,go.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gs(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gs(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gs(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$h&&(e.usage=this.usage),e}}class ax extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ox extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yr extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let tM=0;const mn=new xt,zc=new zt,jr=new V,an=new Ua,Ys=new Ua,At=new V;class Nr extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ex(e)?ox:ax)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,i){return mn.makeTranslation(e,n,i),this.applyMatrix4(mn),this}scale(e,n,i){return mn.makeScale(e,n,i),this.applyMatrix4(mn),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(an.min,Ys.min),an.expandByPoint(At),At.addVectors(an.max,Ys.max),an.expandByPoint(At)):(an.expandByPoint(Ys.min),an.expandByPoint(Ys.max))}an.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)At.fromBufferAttribute(o,u),l&&(jr.fromBufferAttribute(e,u),At.add(jr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new V,l[C]=new V;const u=new V,f=new V,p=new V,h=new Xe,g=new Xe,_=new Xe,y=new V,m=new V;function d(C,b,M){u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,b),p.fromBufferAttribute(i,M),h.fromBufferAttribute(s,C),g.fromBufferAttribute(s,b),_.fromBufferAttribute(s,M),f.sub(u),p.sub(u),g.sub(h),_.sub(h);const L=1/(g.x*_.y-_.x*g.y);isFinite(L)&&(y.copy(f).multiplyScalar(_.y).addScaledVector(p,-g.y).multiplyScalar(L),m.copy(p).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar(L),o[C].add(y),o[b].add(y),o[M].add(y),l[C].add(m),l[b].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,b=x.length;C<b;++C){const M=x[C],L=M.start,W=M.count;for(let B=L,F=L+W;B<F;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new V,S=new V,R=new V,T=new V;function A(C){R.fromBufferAttribute(r,C),T.copy(R);const b=o[C];v.copy(b),v.sub(R.multiplyScalar(R.dot(b))).normalize(),S.crossVectors(T,b);const L=S.dot(l[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,L)}for(let C=0,b=x.length;C<b;++C){const M=x[C],L=M.start,W=M.count;for(let B=L,F=L+W;B<F;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,u=new V,f=new V,p=new V;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),o.add(f),l.add(f),u.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const u=o.array,f=o.itemSize,p=o.normalized,h=new u.constructor(l.length*f);let g=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*f;for(let d=0;d<f;d++)h[_++]=u[g++]}return new Yn(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let f=0,p=u.length;f<p;f++){const h=u[f],g=e(h,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let p=0,h=u.length;p<h;p++){const g=u[p];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],p=s[u];for(let h=0,g=p.length;h<g;h++)f.push(p[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const op=new xt,ir=new $S,xo=new Kd,lp=new V,Hr=new V,Vr=new V,Gr=new V,Bc=new V,vo=new V,_o=new Xe,yo=new Xe,So=new Xe,cp=new V,up=new V,dp=new V,Mo=new V,Eo=new V;class cn extends zt{constructor(e=new Nr,n=new Zd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){vo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=o[l],p=s[l];f!==0&&(Bc.fromBufferAttribute(p,e),a?vo.addScaledVector(Bc,f):vo.addScaledVector(Bc.sub(n),f))}n.add(vo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(xo.containsPoint(ir.origin)===!1&&(ir.intersectSphere(xo,lp)===null||ir.origin.distanceToSquared(lp)>(e.far-e.near)**2))&&(op.copy(s).invert(),ir.copy(e.ray).applyMatrix4(op),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],d=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let S=x,R=v;S<R;S+=3){const T=o.getX(S),A=o.getX(S+1),C=o.getX(S+2);r=wo(this,d,e,i,u,f,p,T,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let m=_,d=y;m<d;m+=3){const x=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);r=wo(this,a,e,i,u,f,p,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],d=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=x,R=v;S<R;S+=3){const T=S,A=S+1,C=S+2;r=wo(this,d,e,i,u,f,p,T,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=_,d=y;m<d;m+=3){const x=m,v=m+1,S=m+2;r=wo(this,a,e,i,u,f,p,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function nM(t,e,n,i,r,s,a,o){let l;if(e.side===nn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Wi,o),l===null)return null;Eo.copy(o),Eo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Eo);return u<n.near||u>n.far?null:{distance:u,point:Eo.clone(),object:t}}function wo(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Hr),t.getVertexPosition(l,Vr),t.getVertexPosition(u,Gr);const f=nM(t,e,n,i,Hr,Vr,Gr,Mo);if(f){r&&(_o.fromBufferAttribute(r,o),yo.fromBufferAttribute(r,l),So.fromBufferAttribute(r,u),f.uv=Gn.getInterpolation(Mo,Hr,Vr,Gr,_o,yo,So,new Xe)),s&&(_o.fromBufferAttribute(s,o),yo.fromBufferAttribute(s,l),So.fromBufferAttribute(s,u),f.uv1=Gn.getInterpolation(Mo,Hr,Vr,Gr,_o,yo,So,new Xe)),a&&(cp.fromBufferAttribute(a,o),up.fromBufferAttribute(a,l),dp.fromBufferAttribute(a,u),f.normal=Gn.getInterpolation(Mo,Hr,Vr,Gr,cp,up,dp,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a:o,b:l,c:u,normal:new V,materialIndex:0};Gn.getNormal(Hr,Vr,Gr,p.normal),f.face=p}return f}class Ds extends Nr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],f=[],p=[];let h=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yr(u,3)),this.setAttribute("normal",new yr(f,3)),this.setAttribute("uv",new yr(p,2));function _(y,m,d,x,v,S,R,T,A,C,b){const M=S/A,L=R/C,W=S/2,B=R/2,F=T/2,O=A+1,j=C+1;let q=0,D=0;const Y=new V;for(let Z=0;Z<j;Z++){const re=Z*L-B;for(let ve=0;ve<O;ve++){const ze=ve*M-W;Y[y]=ze*x,Y[m]=re*v,Y[d]=F,u.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[d]=T>0?1:-1,f.push(Y.x,Y.y,Y.z),p.push(ve/A),p.push(1-Z/C),q+=1}}for(let Z=0;Z<C;Z++)for(let re=0;re<A;re++){const ve=h+re+O*Z,ze=h+re+O*(Z+1),X=h+(re+1)+O*(Z+1),ne=h+(re+1)+O*Z;l.push(ve,ze,ne),l.push(ze,X,ne),D+=6}o.addGroup(g,D,b),g+=D,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=Ns(t[n]);for(const r in i)e[r]=i[r]}return e}function iM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function lx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const rM={clone:Ns,merge:Ht};var sM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sM,this.fragmentShader=aM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=iM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class cx extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new V,fp=new Xe,hp=new Xe;class vn extends cx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zu*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,n){return this.getViewBounds(e,fp,hp),n.subVectors(hp,fp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Mc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,Xr=1;class oM extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(Wr,Xr,e,n);r.layers=this.layers,this.add(r);const s=new vn(Wr,Xr,e,n);s.layers=this.layers,this.add(s);const a=new vn(Wr,Xr,e,n);a.layers=this.layers,this.add(a);const o=new vn(Wr,Xr,e,n);o.layers=this.layers,this.add(o);const l=new vn(Wr,Xr,e,n);l.layers=this.layers,this.add(l);const u=new vn(Wr,Xr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(p,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ux extends Xt{constructor(e,n,i,r,s,a,o,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:ws,super(e,n,i,r,s,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lM extends Tr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ux(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ds(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:ji});s.uniforms.tEquirect.value=n;const a=new cn(r,s),o=n.minFilter;return n.minFilter===xr&&(n.minFilter=_n),new oM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const jc=new V,cM=new V,uM=new Ue;class cr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=jc.subVectors(i,n).cross(cM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||uM.getNormalMatrix(e),r=this.coplanarPoint(jc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Kd,bo=new V;class Qd{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,a=new cr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],f=r[5],p=r[6],h=r[7],g=r[8],_=r[9],y=r[10],m=r[11],d=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-u,m-g,S-d).normalize(),i[1].setComponents(l+s,h+u,m+g,S+d).normalize(),i[2].setComponents(l+a,h+f,m+_,S+x).normalize(),i[3].setComponents(l-a,h-f,m-_,S-x).normalize(),i[4].setComponents(l-o,h-p,m-y,S-v).normalize(),n===oi)i[5].setComponents(l+o,h+p,m+y,S+v).normalize();else if(n===gl)i[5].setComponents(o,p,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(bo.x=r.normal.x>0?e.max.x:e.min.x,bo.y=r.normal.y>0?e.max.y:e.min.y,bo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function dM(t){const e=new WeakMap;function n(o,l){const u=o.array,f=o.usage,p=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,f),o.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,u){const f=l.array,p=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,o),p.count===-1&&h.length===0&&t.bufferSubData(u,0,f),h.length!==0){for(let g=0,_=h.length;g<_;g++){const y=h[g];t.bufferSubData(u,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}class Oa extends Nr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,f=l+1,p=e/o,h=n/l,g=[],_=[],y=[],m=[];for(let d=0;d<f;d++){const x=d*h-a;for(let v=0;v<u;v++){const S=v*p-s;_.push(S,-x,0),y.push(0,0,1),m.push(v/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const v=x+u*d,S=x+u*(d+1),R=x+1+u*(d+1),T=x+1+u*d;g.push(v,S,T),g.push(S,R,T)}this.setIndex(g),this.setAttribute("position",new yr(_,3)),this.setAttribute("normal",new yr(y,3)),this.setAttribute("uv",new yr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.widthSegments,e.heightSegments)}}var fM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,SM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,MM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,IM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HM="gl_FragColor = linearToOutputTexel( gl_FragColor );",VM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,GM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ME=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$E=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,V1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:fM,alphahash_pars_fragment:hM,alphamap_fragment:pM,alphamap_pars_fragment:mM,alphatest_fragment:gM,alphatest_pars_fragment:xM,aomap_fragment:vM,aomap_pars_fragment:_M,batching_pars_vertex:yM,batching_vertex:SM,begin_vertex:MM,beginnormal_vertex:EM,bsdfs:wM,iridescence_fragment:bM,bumpmap_pars_fragment:TM,clipping_planes_fragment:AM,clipping_planes_pars_fragment:CM,clipping_planes_pars_vertex:NM,clipping_planes_vertex:RM,color_fragment:PM,color_pars_fragment:LM,color_pars_vertex:kM,color_vertex:DM,common:IM,cube_uv_reflection_fragment:UM,defaultnormal_vertex:FM,displacementmap_pars_vertex:OM,displacementmap_vertex:zM,emissivemap_fragment:BM,emissivemap_pars_fragment:jM,colorspace_fragment:HM,colorspace_pars_fragment:VM,envmap_fragment:GM,envmap_common_pars_fragment:WM,envmap_pars_fragment:XM,envmap_pars_vertex:$M,envmap_physical_pars_fragment:rE,envmap_vertex:YM,fog_vertex:qM,fog_pars_vertex:KM,fog_fragment:ZM,fog_pars_fragment:QM,gradientmap_pars_fragment:JM,lightmap_pars_fragment:eE,lights_lambert_fragment:tE,lights_lambert_pars_fragment:nE,lights_pars_begin:iE,lights_toon_fragment:sE,lights_toon_pars_fragment:aE,lights_phong_fragment:oE,lights_phong_pars_fragment:lE,lights_physical_fragment:cE,lights_physical_pars_fragment:uE,lights_fragment_begin:dE,lights_fragment_maps:fE,lights_fragment_end:hE,logdepthbuf_fragment:pE,logdepthbuf_pars_fragment:mE,logdepthbuf_pars_vertex:gE,logdepthbuf_vertex:xE,map_fragment:vE,map_pars_fragment:_E,map_particle_fragment:yE,map_particle_pars_fragment:SE,metalnessmap_fragment:ME,metalnessmap_pars_fragment:EE,morphinstance_vertex:wE,morphcolor_vertex:bE,morphnormal_vertex:TE,morphtarget_pars_vertex:AE,morphtarget_vertex:CE,normal_fragment_begin:NE,normal_fragment_maps:RE,normal_pars_fragment:PE,normal_pars_vertex:LE,normal_vertex:kE,normalmap_pars_fragment:DE,clearcoat_normal_fragment_begin:IE,clearcoat_normal_fragment_maps:UE,clearcoat_pars_fragment:FE,iridescence_pars_fragment:OE,opaque_fragment:zE,packing:BE,premultiplied_alpha_fragment:jE,project_vertex:HE,dithering_fragment:VE,dithering_pars_fragment:GE,roughnessmap_fragment:WE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:$E,shadowmap_pars_vertex:YE,shadowmap_vertex:qE,shadowmask_pars_fragment:KE,skinbase_vertex:ZE,skinning_pars_vertex:QE,skinning_vertex:JE,skinnormal_vertex:e1,specularmap_fragment:t1,specularmap_pars_fragment:n1,tonemapping_fragment:i1,tonemapping_pars_fragment:r1,transmission_fragment:s1,transmission_pars_fragment:a1,uv_pars_fragment:o1,uv_pars_vertex:l1,uv_vertex:c1,worldpos_vertex:u1,background_vert:d1,background_frag:f1,backgroundCube_vert:h1,backgroundCube_frag:p1,cube_vert:m1,cube_frag:g1,depth_vert:x1,depth_frag:v1,distanceRGBA_vert:_1,distanceRGBA_frag:y1,equirect_vert:S1,equirect_frag:M1,linedashed_vert:E1,linedashed_frag:w1,meshbasic_vert:b1,meshbasic_frag:T1,meshlambert_vert:A1,meshlambert_frag:C1,meshmatcap_vert:N1,meshmatcap_frag:R1,meshnormal_vert:P1,meshnormal_frag:L1,meshphong_vert:k1,meshphong_frag:D1,meshphysical_vert:I1,meshphysical_frag:U1,meshtoon_vert:F1,meshtoon_frag:O1,points_vert:z1,points_frag:B1,shadow_vert:j1,shadow_frag:H1,sprite_vert:V1,sprite_frag:G1},le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},jn={basic:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Ht([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Ht([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Ht([le.points,le.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Ht([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Ht([le.common,le.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Ht([le.sprite,le.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Ht([le.common,le.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Ht([le.lights,le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};jn.physical={uniforms:Ht([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const To={r:0,b:0,g:0},sr=new qn,W1=new xt;function X1(t,e,n,i,r,s,a){const o=new qe(0);let l=s===!0?0:1,u,f,p=null,h=0,g=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function y(x){let v=!1;const S=_(x);S===null?d(o,l):S&&S.isColor&&(d(S,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,v){const S=_(v);S&&(S.isCubeTexture||S.mapping===Il)?(f===void 0&&(f=new cn(new Ds(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Ns(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),sr.copy(v.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(W1.makeRotationFromEuler(sr)),f.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,(p!==S||h!==S.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,p=S,h=S.version,g=t.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new cn(new Oa(2,2),new $i({name:"BackgroundMaterial",uniforms:Ns(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||h!==S.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,p=S,h=S.version,g=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function d(x,v){x.getRGB(To,lx(t)),i.buffers.color.setClear(To.r,To.g,To.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(o,l)},render:y,addToRenderList:m}}function $1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(M,L,W,B,F){let O=!1;const j=p(B,W,L);s!==j&&(s=j,u(s.object)),O=g(M,B,W,F),O&&_(M,B,W,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,S(M,L,W,B),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function f(M){return t.deleteVertexArray(M)}function p(M,L,W){const B=W.wireframe===!0;let F=i[M.id];F===void 0&&(F={},i[M.id]=F);let O=F[L.id];O===void 0&&(O={},F[L.id]=O);let j=O[B];return j===void 0&&(j=h(l()),O[B]=j),j}function h(M){const L=[],W=[],B=[];for(let F=0;F<n;F++)L[F]=0,W[F]=0,B[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:B,object:M,attributes:{},index:null}}function g(M,L,W,B){const F=s.attributes,O=L.attributes;let j=0;const q=W.getAttributes();for(const D in q)if(q[D].location>=0){const Z=F[D];let re=O[D];if(re===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function _(M,L,W,B){const F={},O=L.attributes;let j=0;const q=W.getAttributes();for(const D in q)if(q[D].location>=0){let Z=O[D];Z===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),F[D]=re,j++}s.attributes=F,s.attributesNum=j,s.index=B}function y(){const M=s.newAttributes;for(let L=0,W=M.length;L<W;L++)M[L]=0}function m(M){d(M,0)}function d(M,L){const W=s.newAttributes,B=s.enabledAttributes,F=s.attributeDivisors;W[M]=1,B[M]===0&&(t.enableVertexAttribArray(M),B[M]=1),F[M]!==L&&(t.vertexAttribDivisor(M,L),F[M]=L)}function x(){const M=s.newAttributes,L=s.enabledAttributes;for(let W=0,B=L.length;W<B;W++)L[W]!==M[W]&&(t.disableVertexAttribArray(W),L[W]=0)}function v(M,L,W,B,F,O,j){j===!0?t.vertexAttribIPointer(M,L,W,F,O):t.vertexAttribPointer(M,L,W,B,F,O)}function S(M,L,W,B){y();const F=B.attributes,O=W.getAttributes(),j=L.defaultAttributeValues;for(const q in O){const D=O[q];if(D.location>=0){let Y=F[q];if(Y===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor)),Y!==void 0){const Z=Y.normalized,re=Y.itemSize,ve=e.get(Y);if(ve===void 0)continue;const ze=ve.buffer,X=ve.type,ne=ve.bytesPerElement,ce=X===t.INT||X===t.UNSIGNED_INT||Y.gpuType===Xg;if(Y.isInterleavedBufferAttribute){const oe=Y.data,ke=oe.stride,Pe=Y.offset;if(oe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<D.locationSize;Ae++)d(D.location+Ae,oe.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ae=0;Ae<D.locationSize;Ae++)m(D.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Ae=0;Ae<D.locationSize;Ae++)v(D.location+Ae,re/D.locationSize,X,Z,ke*ne,(Pe+re/D.locationSize*Ae)*ne,ce)}else{if(Y.isInstancedBufferAttribute){for(let oe=0;oe<D.locationSize;oe++)d(D.location+oe,Y.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let oe=0;oe<D.locationSize;oe++)m(D.location+oe);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let oe=0;oe<D.locationSize;oe++)v(D.location+oe,re/D.locationSize,X,Z,re*ne,re/D.locationSize*oe*ne,ce)}}else if(j!==void 0){const Z=j[q];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(D.location,Z);break;case 3:t.vertexAttrib3fv(D.location,Z);break;case 4:t.vertexAttrib4fv(D.location,Z);break;default:t.vertexAttrib1fv(D.location,Z)}}}}x()}function R(){C();for(const M in i){const L=i[M];for(const W in L){const B=L[W];for(const F in B)f(B[F].object),delete B[F];delete L[W]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const W in L){const B=L[W];for(const F in B)f(B[F].object),delete B[F];delete L[W]}delete i[M.id]}function A(M){for(const L in i){const W=i[L];if(W[M.id]===void 0)continue;const B=W[M.id];for(const F in B)f(B[F].object),delete B[F];delete W[M.id]}}function C(){b(),a=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function Y1(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function a(u,f,p){p!==0&&(t.drawArraysInstanced(i,u,f,p),n.update(f,i,p))}function o(u,f,p){if(p===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<p;g++)this.render(u[g],f[g]);else{h.multiDrawArraysWEBGL(i,u,0,f,0,p);let g=0;for(let _=0;_<p;_++)g+=f[_];n.update(g,i,1)}}function l(u,f,p,h){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<u.length;_++)a(u[_],f[_],h[_]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,p);let _=0;for(let y=0;y<p;y++)_+=f[y];for(let y=0;y<h.length;y++)n.update(_,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function q1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Wn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const A=T===Ul&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Xi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Pi&&!A)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const p=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:S,maxSamples:R}}function K1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new cr,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const g=p.length!==0||h||i!==0||r;return r=h,i=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,g){const _=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,d=t.get(p);if(!r||_===null||_.length===0||s&&!m)s?f(null):u();else{const x=s?0:i,v=x*4;let S=d.clippingState||null;l.value=S,S=f(_,h,v,g);for(let R=0;R!==v;++R)S[R]=n[R];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,g,_){const y=p!==null?p.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const d=g+y*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,S=g;v!==y;++v,S+=4)a.copy(p[v]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Z1(t){let e=new WeakMap;function n(a,o){return o===$u?a.mapping=ws:o===Yu&&(a.mapping=bs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===$u||o===Yu)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new lM(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class fx extends cx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const as=4,pp=[.125,.215,.35,.446,.526,.582],fr=20,Hc=new fx,mp=new qe;let Vc=null,Gc=0,Wc=0,Xc=!1;const ur=(1+Math.sqrt(5))/2,$r=1/ur,gp=[new V(-ur,$r,0),new V(ur,$r,0),new V(-$r,0,ur),new V($r,0,ur),new V(0,ur,-$r),new V(0,ur,$r),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class xp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Gc,Wc),this._renderer.xr.enabled=Xc,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ws||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Ul,format:Wn,colorSpace:Zi,depthBuffer:!1},r=vp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q1(s)),this._blurMaterial=J1(s,e,n)}return r}_compileMaterial(e){const n=new cn(this._lodPlanes[0],e);this._renderer.compile(n,Hc)}_sceneToCubeUV(e,n,i,r){const o=new vn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(mp),f.toneMapping=Hi,f.autoClear=!1;const g=new Zd({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new cn(new Ds,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(mp),y=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,l[d],0),o.lookAt(u[d],0,0)):x===1?(o.up.set(0,0,l[d]),o.lookAt(0,u[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,u[d]));const v=this._cubeSize;Ao(r,x*v,d>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ws||e.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new cn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ao(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Hc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gp[(r-s-1)%gp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new cn(this._lodPlanes[r],u),h=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*fr-1),y=s/_,m=isFinite(s)?1+Math.floor(f*y):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const d=[];let x=0;for(let A=0;A<fr;++A){const C=A/y,b=Math.exp(-C*C/2);d.push(b),A===0?x+=b:A<m&&(x+=2*b)}for(let A=0;A<d.length;A++)d[A]=d[A]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const S=this._sizeLods[r],R=3*S*(r>v-as?r-v+as:0),T=4*(this._cubeSize-S);Ao(n,R,T,3*S,2*S),l.setRenderTarget(n),l.render(p,Hc)}}function Q1(t){const e=[],n=[],i=[];let r=t;const s=t-as+1+pp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-as?l=pp[a-t+as-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),f=-u,p=1+u,h=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,_=6,y=3,m=2,d=1,x=new Float32Array(y*_*g),v=new Float32Array(m*_*g),S=new Float32Array(d*_*g);for(let T=0;T<g;T++){const A=T%3*2/3-1,C=T>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];x.set(b,y*_*T),v.set(h,m*_*T);const M=[T,T,T,T,T,T];S.set(M,d*_*T)}const R=new Nr;R.setAttribute("position",new Yn(x,y)),R.setAttribute("uv",new Yn(v,m)),R.setAttribute("faceIndex",new Yn(S,d)),e.push(R),r>as&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function vp(t,e,n){const i=new Tr(t,e,n);return i.texture.mapping=Il,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function J1(t,e,n){const i=new Float32Array(fr),r=new V(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function _p(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function yp(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Jd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ew(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===$u||l===Yu,f=l===ws||l===bs;if(u||f){let p=e.get(o);const h=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new xp(t)),p=u?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const g=o.image;return u&&g&&g.height>0||f&&g&&r(g)?(n===null&&(n=new xp(t)),p=u?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function tw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&tx("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nw(t,e,n,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}h.removeEventListener("dispose",a),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const g=p.morphAttributes;for(const _ in g){const y=g[_];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(p){const h=[],g=p.index,_=p.attributes.position;let y=0;if(g!==null){const x=g.array;y=g.version;for(let v=0,S=x.length;v<S;v+=3){const R=x[v+0],T=x[v+1],A=x[v+2];h.push(R,T,T,A,A,R)}}else if(_!==void 0){const x=_.array;y=_.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const R=v+0,T=v+1,A=v+2;h.push(R,T,T,A,A,R)}}else return;const m=new(ex(h)?ox:ax)(h,1);m.version=y;const d=s.get(p);d&&e.remove(d),s.set(p,m)}function f(p){const h=s.get(p);if(h){const g=p.index;g!==null&&h.version<g.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function iw(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,g){t.drawElements(i,g,s,h*a),n.update(g,i,1)}function u(h,g,_){_!==0&&(t.drawElementsInstanced(i,g,s,h*a,_),n.update(g,i,_))}function f(h,g,_){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<_;m++)this.render(h[m]/a,g[m]);else{y.multiDrawElementsWEBGL(i,g,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=g[d];n.update(m,i,1)}}function p(h,g,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/a,g[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,y,0,_);let d=0;for(let x=0;x<_;x++)d+=g[x];for(let x=0;x<y.length;x++)n.update(d,i,y[x])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function rw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sw(t,e,n){const i=new WeakMap,r=new Nt;function s(a,o,l){const u=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==p){let M=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var g=M;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let R=o.attributes.position.count*S,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*T*4*p),C=new ix(A,R,T,p);C.type=Pi,C.needsUpdate=!0;const b=S*4;for(let L=0;L<p;L++){const W=d[L],B=x[L],F=v[L],O=R*T*4*L;for(let j=0;j<W.count;j++){const q=j*b;_===!0&&(r.fromBufferAttribute(W,j),A[O+q+0]=r.x,A[O+q+1]=r.y,A[O+q+2]=r.z,A[O+q+3]=0),y===!0&&(r.fromBufferAttribute(B,j),A[O+q+4]=r.x,A[O+q+5]=r.y,A[O+q+6]=r.z,A[O+q+7]=0),m===!0&&(r.fromBufferAttribute(F,j),A[O+q+8]=r.x,A[O+q+9]=r.y,A[O+q+10]=r.z,A[O+q+11]=F.itemSize===4?r.w:1)}}h={count:p,texture:C,size:new Xe(R,T)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function aw(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,p=e.get(l,f);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return p}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class hx extends Xt{constructor(e,n,i,r,s,a,o,l,u,f=ps){if(f!==ps&&f!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ps&&(i=Ts),i===void 0&&f===Cs&&(i=As),super(null,r,s,a,o,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const px=new Xt,mx=new hx(1,1);mx.compareFunction=Jg;const gx=new ix,xx=new WS,vx=new ux,Sp=[],Mp=[],Ep=new Float32Array(16),wp=new Float32Array(9),bp=new Float32Array(4);function Is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Sp[r];if(s===void 0&&(s=new Float32Array(r),Sp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ol(t,e){let n=Mp[e];n===void 0&&(n=new Int32Array(e),Mp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ow(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function dw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;bp.set(i),t.uniformMatrix2fv(this.addr,!1,bp),wt(n,i)}}function fw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;wp.set(i),t.uniformMatrix3fv(this.addr,!1,wp),wt(n,i)}}function hw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Ep.set(i),t.uniformMatrix4fv(this.addr,!1,Ep),wt(n,i)}}function pw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function vw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function Mw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?mx:px;n.setTexture2D(e||s,r)}function Ew(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||xx,r)}function ww(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||vx,r)}function bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||gx,r)}function Tw(t){switch(t){case 5126:return ow;case 35664:return lw;case 35665:return cw;case 35666:return uw;case 35674:return dw;case 35675:return fw;case 35676:return hw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return gw;case 35669:case 35673:return xw;case 5125:return vw;case 36294:return _w;case 36295:return yw;case 36296:return Sw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return bw}}function Aw(t,e){t.uniform1fv(this.addr,e)}function Cw(t,e){const n=Is(e,this.size,2);t.uniform2fv(this.addr,n)}function Nw(t,e){const n=Is(e,this.size,3);t.uniform3fv(this.addr,n)}function Rw(t,e){const n=Is(e,this.size,4);t.uniform4fv(this.addr,n)}function Pw(t,e){const n=Is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Lw(t,e){const n=Is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function kw(t,e){const n=Is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Dw(t,e){t.uniform1iv(this.addr,e)}function Iw(t,e){t.uniform2iv(this.addr,e)}function Uw(t,e){t.uniform3iv(this.addr,e)}function Fw(t,e){t.uniform4iv(this.addr,e)}function Ow(t,e){t.uniform1uiv(this.addr,e)}function zw(t,e){t.uniform2uiv(this.addr,e)}function Bw(t,e){t.uniform3uiv(this.addr,e)}function jw(t,e){t.uniform4uiv(this.addr,e)}function Hw(t,e,n){const i=this.cache,r=e.length,s=Ol(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||px,s[a])}function Vw(t,e,n){const i=this.cache,r=e.length,s=Ol(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||xx,s[a])}function Gw(t,e,n){const i=this.cache,r=e.length,s=Ol(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||vx,s[a])}function Ww(t,e,n){const i=this.cache,r=e.length,s=Ol(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||gx,s[a])}function Xw(t){switch(t){case 5126:return Aw;case 35664:return Cw;case 35665:return Nw;case 35666:return Rw;case 35674:return Pw;case 35675:return Lw;case 35676:return kw;case 5124:case 35670:return Dw;case 35667:case 35671:return Iw;case 35668:case 35672:return Uw;case 35669:case 35673:return Fw;case 5125:return Ow;case 36294:return zw;case 36295:return Bw;case 36296:return jw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return Vw;case 35680:case 36300:case 36308:case 36293:return Gw;case 36289:case 36303:case 36311:case 36292:return Ww}}class $w{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Tw(n.type)}}class Yw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Xw(n.type)}}class qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function Tp(t,e){t.seq.push(e),t.map[e.id]=e}function Kw(t,e,n){const i=t.name,r=i.length;for($c.lastIndex=0;;){const s=$c.exec(i),a=$c.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Tp(n,u===void 0?new $w(o,t,e):new Yw(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new qw(o),Tp(n,p)),n=p}}}class Bo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Kw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Ap(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Zw=37297;let Qw=0;function Jw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function eb(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===ml&&n===pl?i="LinearDisplayP3ToLinearSRGB":e===pl&&n===ml&&(i="LinearSRGBToLinearDisplayP3"),t){case Zi:case Fl:return[i,"LinearTransferOETF"];case Bn:case qd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Cp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Jw(t.getShaderSource(e),a)}else return r}function tb(t,e){const n=eb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function nb(t,e){let n;switch(e){case cS:n="Linear";break;case uS:n="Reinhard";break;case dS:n="OptimizedCineon";break;case fS:n="ACESFilmic";break;case pS:n="AgX";break;case mS:n="Neutral";break;case hS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function ib(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function rb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Js(t){return t!==""}function Np(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qu(t){return t.replace(ab,lb)}const ob=new Map;function lb(t,e){let n=Ie[e];if(n===void 0){const i=ob.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qu(n)}const cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pp(t){return t.replace(cb,ub)}function ub(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function db(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Hg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Vg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function fb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ws:case bs:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function pb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Gg:e="ENVMAP_BLENDING_MULTIPLY";break;case oS:e="ENVMAP_BLENDING_MIX";break;case lS:e="ENVMAP_BLENDING_ADD";break}return e}function mb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function gb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=db(n),u=fb(n),f=hb(n),p=pb(n),h=mb(n),g=ib(n),_=rb(s),y=r.createProgram();let m,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),d.length>0&&(d+=`
`)):(m=[Lp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),d=[Lp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Hi?nb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,tb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),a=Qu(a),a=Np(a,n),a=Rp(a,n),o=Qu(o),o=Np(o,n),o=Rp(o,n),a=Pp(a),o=Pp(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+m+a,S=x+d+o,R=Ap(r,r.VERTEX_SHADER,v),T=Ap(r,r.FRAGMENT_SHADER,S);r.attachShader(y,R),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(L){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(R).trim(),F=r.getShaderInfoLog(T).trim();let O=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,R,T);else{const q=Cp(r,R,"vertex"),D=Cp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+q+`
`+D)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(B===""||F==="")&&(j=!1);j&&(L.diagnostics={runnable:O,programLog:W,vertexShader:{log:B,prefix:m},fragmentShader:{log:F,prefix:d}})}r.deleteShader(R),r.deleteShader(T),C=new Bo(r,y),b=sb(r,y)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,Zw)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Qw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=T,this}let xb=0;class vb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new _b(e),n.set(e,i)),i}}class _b{constructor(e){this.id=xb++,this.code=e,this.usedTimes=0}}function yb(t,e,n,i,r,s,a){const o=new rx,l=new vb,u=new Set,f=[],p=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return u.add(b),b===0?"uv":`uv${b}`}function m(b,M,L,W,B){const F=W.fog,O=B.geometry,j=b.isMeshStandardMaterial?W.environment:null,q=(b.isMeshStandardMaterial?n:e).get(b.envMap||j),D=q&&q.mapping===Il?q.image.height:null,Y=_[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,re=Z!==void 0?Z.length:0;let ve=0;O.morphAttributes.position!==void 0&&(ve=1),O.morphAttributes.normal!==void 0&&(ve=2),O.morphAttributes.color!==void 0&&(ve=3);let ze,X,ne,ce;if(Y){const et=jn[Y];ze=et.vertexShader,X=et.fragmentShader}else ze=b.vertexShader,X=b.fragmentShader,l.update(b),ne=l.getVertexShaderID(b),ce=l.getFragmentShaderID(b);const oe=t.getRenderTarget(),ke=B.isInstancedMesh===!0,Pe=B.isBatchedMesh===!0,Ae=!!b.map,P=!!b.matcap,Le=!!q,be=!!b.aoMap,ot=!!b.lightMap,we=!!b.bumpMap,$e=!!b.normalMap,Be=!!b.displacementMap,De=!!b.emissiveMap,vt=!!b.metalnessMap,N=!!b.roughnessMap,E=b.anisotropy>0,G=b.clearcoat>0,Q=b.dispersion>0,J=b.iridescence>0,ee=b.sheen>0,Me=b.transmission>0,ue=E&&!!b.anisotropyMap,de=G&&!!b.clearcoatMap,Fe=G&&!!b.clearcoatNormalMap,ie=G&&!!b.clearcoatRoughnessMap,ye=J&&!!b.iridescenceMap,He=J&&!!b.iridescenceThicknessMap,Ne=ee&&!!b.sheenColorMap,fe=ee&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,Ve=!!b.specularColorMap,pt=!!b.specularIntensityMap,k=Me&&!!b.transmissionMap,he=Me&&!!b.thicknessMap,$=!!b.gradientMap,K=!!b.alphaMap,ae=b.alphaTest>0,Re=!!b.alphaHash,Ye=!!b.extensions;let mt=Hi;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(mt=t.toneMapping);const bt={shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:ze,fragmentShader:X,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Pe,batchingColor:Pe&&B._colorsTexture!==null,instancing:ke,instancingColor:ke&&B.instanceColor!==null,instancingMorph:ke&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Zi,alphaToCoverage:!!b.alphaToCoverage,map:Ae,matcap:P,envMap:Le,envMapMode:Le&&q.mapping,envMapCubeUVHeight:D,aoMap:be,lightMap:ot,bumpMap:we,normalMap:$e,displacementMap:h&&Be,emissiveMap:De,normalMapObjectSpace:$e&&b.normalMapType===NS,normalMapTangentSpace:$e&&b.normalMapType===Qg,metalnessMap:vt,roughnessMap:N,anisotropy:E,anisotropyMap:ue,clearcoat:G,clearcoatMap:de,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:J,iridescenceMap:ye,iridescenceThicknessMap:He,sheen:ee,sheenColorMap:Ne,sheenRoughnessMap:fe,specularMap:Oe,specularColorMap:Ve,specularIntensityMap:pt,transmission:Me,transmissionMap:k,thicknessMap:he,gradientMap:$,opaque:b.transparent===!1&&b.blending===hs&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:ae,alphaHash:Re,combine:b.combine,mapUv:Ae&&y(b.map.channel),aoMapUv:be&&y(b.aoMap.channel),lightMapUv:ot&&y(b.lightMap.channel),bumpMapUv:we&&y(b.bumpMap.channel),normalMapUv:$e&&y(b.normalMap.channel),displacementMapUv:Be&&y(b.displacementMap.channel),emissiveMapUv:De&&y(b.emissiveMap.channel),metalnessMapUv:vt&&y(b.metalnessMap.channel),roughnessMapUv:N&&y(b.roughnessMap.channel),anisotropyMapUv:ue&&y(b.anisotropyMap.channel),clearcoatMapUv:de&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:He&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:fe&&y(b.sheenRoughnessMap.channel),specularMapUv:Oe&&y(b.specularMap.channel),specularColorMapUv:Ve&&y(b.specularColorMap.channel),specularIntensityMapUv:pt&&y(b.specularIntensityMap.channel),transmissionMapUv:k&&y(b.transmissionMap.channel),thicknessMapUv:he&&y(b.thicknessMap.channel),alphaMapUv:K&&y(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&($e||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(Ae||K),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:B.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:mt,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vn,flipSided:b.side===nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ye&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ye&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return bt.vertexUv1s=u.has(1),bt.vertexUv2s=u.has(2),bt.vertexUv3s=u.has(3),u.clear(),bt}function d(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(x(M,b),v(M,b),M.push(t.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),b.push(o.mask)}function S(b){const M=_[b.type];let L;if(M){const W=jn[M];L=rM.clone(W.uniforms)}else L=b.uniforms;return L}function R(b,M){let L;for(let W=0,B=f.length;W<B;W++){const F=f[W];if(F.cacheKey===M){L=F,++L.usedTimes;break}}return L===void 0&&(L=new gb(t,M,b,s),f.push(L)),L}function T(b){if(--b.usedTimes===0){const M=f.indexOf(b);f[M]=f[f.length-1],f.pop(),b.destroy()}}function A(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:f,dispose:C}}function Sb(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Mb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function kp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,h,g,_,y,m){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:h,material:g,groupOrder:_,renderOrder:p.renderOrder,z:y,group:m},t[e]=d):(d.id=p.id,d.object=p,d.geometry=h,d.material=g,d.groupOrder=_,d.renderOrder=p.renderOrder,d.z=y,d.group=m),e++,d}function o(p,h,g,_,y,m){const d=a(p,h,g,_,y,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(p,h,g,_,y,m){const d=a(p,h,g,_,y,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function u(p,h){n.length>1&&n.sort(p||Mb),i.length>1&&i.sort(h||kp),r.length>1&&r.sort(h||kp)}function f(){for(let p=e,h=t.length;p<h;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:u}}function Eb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Dp,t.set(i,[a])):r>=s.length?(a=new Dp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function wb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new qe};break;case"SpotLight":n={position:new V,direction:new V,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function bb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Tb=0;function Ab(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Cb(t){const e=new wb,n=bb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new V);const r=new V,s=new xt,a=new xt;function o(u){let f=0,p=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let g=0,_=0,y=0,m=0,d=0,x=0,v=0,S=0,R=0,T=0,A=0;u.sort(Ab);for(let b=0,M=u.length;b<M;b++){const L=u[b],W=L.color,B=L.intensity,F=L.distance,O=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=W.r*B,p+=W.g*B,h+=W.b*B;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],B);A++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const q=L.shadow,D=n.get(L);D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.directionalShadow[g]=D,i.directionalShadowMap[g]=O,i.directionalShadowMatrix[g]=L.shadow.matrix,x++}i.directional[g]=j,g++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(W).multiplyScalar(B),j.distance=F,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[y]=j;const q=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,q.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[y]=q.matrix,L.castShadow){const D=n.get(L);D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=O,S++}y++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(W).multiplyScalar(B),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=j,m++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const q=L.shadow,D=n.get(L);D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,D.shadowCameraNear=q.camera.near,D.shadowCameraFar=q.camera.far,i.pointShadow[_]=D,i.pointShadowMap[_]=O,i.pointShadowMatrix[_]=L.shadow.matrix,v++}i.point[_]=j,_++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(B),j.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[d]=j,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==g||C.pointLength!==_||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==x||C.numPointShadows!==v||C.numSpotShadows!==S||C.numSpotMaps!==R||C.numLightProbes!==A)&&(i.directional.length=g,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,C.directionalLength=g,C.pointLength=_,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=x,C.numPointShadows=v,C.numSpotShadows=S,C.numSpotMaps=R,C.numLightProbes=A,i.version=Tb++)}function l(u,f){let p=0,h=0,g=0,_=0,y=0;const m=f.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){const v=u[d];if(v.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Ip(t){const e=new Cb(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Nb(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ip(t),e.set(r,[o])):s>=a.length?(o=new Ip(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class Rb extends Fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pb extends Fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Db(t,e,n){let i=new Qd;const r=new Xe,s=new Xe,a=new Nt,o=new Rb({depthPacking:CS}),l=new Pb,u={},f=n.maxTextureSize,p={[Wi]:nn,[nn]:Wi,[Vn]:Vn},h=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Lb,fragmentShader:kb}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new Nr;_.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new cn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hg;let d=this.type;this.render=function(T,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=t.getRenderTarget(),M=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),W=t.state;W.setBlending(ji),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const B=d!==ni&&this.type===ni,F=d===ni&&this.type!==ni;for(let O=0,j=T.length;O<j;O++){const q=T[O],D=q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Y=D.getFrameExtents();if(r.multiply(Y),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Y.x),r.x=s.x*Y.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Y.y),r.y=s.y*Y.y,D.mapSize.y=s.y)),D.map===null||B===!0||F===!0){const re=this.type!==ni?{minFilter:Sn,magFilter:Sn}:{};D.map!==null&&D.map.dispose(),D.map=new Tr(r.x,r.y,re),D.map.texture.name=q.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Z=D.getViewportCount();for(let re=0;re<Z;re++){const ve=D.getViewport(re);a.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),W.viewport(a),D.updateMatrices(q,re),i=D.getFrustum(),S(A,C,D.camera,q,this.type)}D.isPointLightShadow!==!0&&this.type===ni&&x(D,C),D.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(b,M,L)};function x(T,A){const C=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Tr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,C,h,y,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,C,g,y,null)}function v(T,A,C,b){let M=null;const L=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=C.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=M.uuid,B=A.uuid;let F=u[W];F===void 0&&(F={},u[W]=F);let O=F[B];O===void 0&&(O=M.clone(),F[B]=O,A.addEventListener("dispose",R)),M=O}if(M.visible=A.visible,M.wireframe=A.wireframe,b===ni?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:p[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=t.properties.get(M);W.light=C}return M}function S(T,A,C,b,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ni)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const B=e.update(T),F=T.material;if(Array.isArray(F)){const O=B.groups;for(let j=0,q=O.length;j<q;j++){const D=O[j],Y=F[D.materialIndex];if(Y&&Y.visible){const Z=v(T,Y,b,M);T.onBeforeShadow(t,T,A,C,B,Z,D),t.renderBufferDirect(C,null,B,Z,T,D),T.onAfterShadow(t,T,A,C,B,Z,D)}}}else if(F.visible){const O=v(T,F,b,M);T.onBeforeShadow(t,T,A,C,B,O,null),t.renderBufferDirect(C,null,B,O,T,null),T.onAfterShadow(t,T,A,C,B,O,null)}}const W=T.children;for(let B=0,F=W.length;B<F;B++)S(W[B],A,C,b,M)}function R(T){T.target.removeEventListener("dispose",R);for(const C in u){const b=u[C],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function Ib(t){function e(){let k=!1;const he=new Nt;let $=null;const K=new Nt(0,0,0,0);return{setMask:function(ae){$!==ae&&!k&&(t.colorMask(ae,ae,ae,ae),$=ae)},setLocked:function(ae){k=ae},setClear:function(ae,Re,Ye,mt,bt){bt===!0&&(ae*=mt,Re*=mt,Ye*=mt),he.set(ae,Re,Ye,mt),K.equals(he)===!1&&(t.clearColor(ae,Re,Ye,mt),K.copy(he))},reset:function(){k=!1,$=null,K.set(-1,0,0,0)}}}function n(){let k=!1,he=null,$=null,K=null;return{setTest:function(ae){ae?ce(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(ae){he!==ae&&!k&&(t.depthMask(ae),he=ae)},setFunc:function(ae){if($!==ae){switch(ae){case eS:t.depthFunc(t.NEVER);break;case tS:t.depthFunc(t.ALWAYS);break;case nS:t.depthFunc(t.LESS);break;case dl:t.depthFunc(t.LEQUAL);break;case iS:t.depthFunc(t.EQUAL);break;case rS:t.depthFunc(t.GEQUAL);break;case sS:t.depthFunc(t.GREATER);break;case aS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}$=ae}},setLocked:function(ae){k=ae},setClear:function(ae){K!==ae&&(t.clearDepth(ae),K=ae)},reset:function(){k=!1,he=null,$=null,K=null}}}function i(){let k=!1,he=null,$=null,K=null,ae=null,Re=null,Ye=null,mt=null,bt=null;return{setTest:function(et){k||(et?ce(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(et){he!==et&&!k&&(t.stencilMask(et),he=et)},setFunc:function(et,Un,Fn){($!==et||K!==Un||ae!==Fn)&&(t.stencilFunc(et,Un,Fn),$=et,K=Un,ae=Fn)},setOp:function(et,Un,Fn){(Re!==et||Ye!==Un||mt!==Fn)&&(t.stencilOp(et,Un,Fn),Re=et,Ye=Un,mt=Fn)},setLocked:function(et){k=et},setClear:function(et){bt!==et&&(t.clearStencil(et),bt=et)},reset:function(){k=!1,he=null,$=null,K=null,ae=null,Re=null,Ye=null,mt=null,bt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let u={},f={},p=new WeakMap,h=[],g=null,_=!1,y=null,m=null,d=null,x=null,v=null,S=null,R=null,T=new qe(0,0,0),A=0,C=!1,b=null,M=null,L=null,W=null,B=null;const F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,j=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=j>=2);let D=null,Y={};const Z=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),ve=new Nt().fromArray(Z),ze=new Nt().fromArray(re);function X(k,he,$,K){const ae=new Uint8Array(4),Re=t.createTexture();t.bindTexture(k,Re),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<$;Ye++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(he+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Re}const ne={};ne[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ce(t.DEPTH_TEST),s.setFunc(dl),we(!1),$e(gh),ce(t.CULL_FACE),be(ji);function ce(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function oe(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function ke(k,he){return f[k]!==he?(t.bindFramebuffer(k,he),f[k]=he,k===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=he),k===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Pe(k,he){let $=h,K=!1;if(k){$=p.get(he),$===void 0&&($=[],p.set(he,$));const ae=k.textures;if($.length!==ae.length||$[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,Ye=ae.length;Re<Ye;Re++)$[Re]=t.COLOR_ATTACHMENT0+Re;$.length=ae.length,K=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,K=!0);K&&t.drawBuffers($)}function Ae(k){return g!==k?(t.useProgram(k),g=k,!0):!1}const P={[dr]:t.FUNC_ADD,[Fy]:t.FUNC_SUBTRACT,[Oy]:t.FUNC_REVERSE_SUBTRACT};P[zy]=t.MIN,P[By]=t.MAX;const Le={[jy]:t.ZERO,[Hy]:t.ONE,[Vy]:t.SRC_COLOR,[Wu]:t.SRC_ALPHA,[qy]:t.SRC_ALPHA_SATURATE,[$y]:t.DST_COLOR,[Wy]:t.DST_ALPHA,[Gy]:t.ONE_MINUS_SRC_COLOR,[Xu]:t.ONE_MINUS_SRC_ALPHA,[Yy]:t.ONE_MINUS_DST_COLOR,[Xy]:t.ONE_MINUS_DST_ALPHA,[Ky]:t.CONSTANT_COLOR,[Zy]:t.ONE_MINUS_CONSTANT_COLOR,[Qy]:t.CONSTANT_ALPHA,[Jy]:t.ONE_MINUS_CONSTANT_ALPHA};function be(k,he,$,K,ae,Re,Ye,mt,bt,et){if(k===ji){_===!0&&(oe(t.BLEND),_=!1);return}if(_===!1&&(ce(t.BLEND),_=!0),k!==Uy){if(k!==y||et!==C){if((m!==dr||v!==dr)&&(t.blendEquation(t.FUNC_ADD),m=dr,v=dr),et)switch(k){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xh:t.blendFunc(t.ONE,t.ONE);break;case vh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _h:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case vh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _h:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}d=null,x=null,S=null,R=null,T.set(0,0,0),A=0,y=k,C=et}return}ae=ae||he,Re=Re||$,Ye=Ye||K,(he!==m||ae!==v)&&(t.blendEquationSeparate(P[he],P[ae]),m=he,v=ae),($!==d||K!==x||Re!==S||Ye!==R)&&(t.blendFuncSeparate(Le[$],Le[K],Le[Re],Le[Ye]),d=$,x=K,S=Re,R=Ye),(mt.equals(T)===!1||bt!==A)&&(t.blendColor(mt.r,mt.g,mt.b,bt),T.copy(mt),A=bt),y=k,C=!1}function ot(k,he){k.side===Vn?oe(t.CULL_FACE):ce(t.CULL_FACE);let $=k.side===nn;he&&($=!$),we($),k.blending===hs&&k.transparent===!1?be(ji):be(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const K=k.stencilWrite;a.setTest(K),K&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),De(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(k){b!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),b=k)}function $e(k){k!==Dy?(ce(t.CULL_FACE),k!==M&&(k===gh?t.cullFace(t.BACK):k===Iy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),M=k}function Be(k){k!==L&&(O&&t.lineWidth(k),L=k)}function De(k,he,$){k?(ce(t.POLYGON_OFFSET_FILL),(W!==he||B!==$)&&(t.polygonOffset(he,$),W=he,B=$)):oe(t.POLYGON_OFFSET_FILL)}function vt(k){k?ce(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function N(k){k===void 0&&(k=t.TEXTURE0+F-1),D!==k&&(t.activeTexture(k),D=k)}function E(k,he,$){$===void 0&&(D===null?$=t.TEXTURE0+F-1:$=D);let K=Y[$];K===void 0&&(K={type:void 0,texture:void 0},Y[$]=K),(K.type!==k||K.texture!==he)&&(D!==$&&(t.activeTexture($),D=$),t.bindTexture(k,he||ne[k]),K.type=k,K.texture=he)}function G(){const k=Y[D];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(k){ve.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),ve.copy(k))}function fe(k){ze.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),ze.copy(k))}function Oe(k,he){let $=l.get(he);$===void 0&&($=new WeakMap,l.set(he,$));let K=$.get(k);K===void 0&&(K=t.getUniformBlockIndex(he,k.name),$.set(k,K))}function Ve(k,he){const K=l.get(he).get(k);o.get(he)!==K&&(t.uniformBlockBinding(he,K,k.__bindingPointIndex),o.set(he,K))}function pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,Y={},f={},p=new WeakMap,h=[],g=null,_=!1,y=null,m=null,d=null,x=null,v=null,S=null,R=null,T=new qe(0,0,0),A=0,C=!1,b=null,M=null,L=null,W=null,B=null,ve.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ce,disable:oe,bindFramebuffer:ke,drawBuffers:Pe,useProgram:Ae,setBlending:be,setMaterial:ot,setFlipSided:we,setCullFace:$e,setLineWidth:Be,setPolygonOffset:De,setScissorTest:vt,activeTexture:N,bindTexture:E,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:ye,texImage3D:He,updateUBOMapping:Oe,uniformBlockBinding:Ve,texStorage2D:Fe,texStorage3D:ie,texSubImage2D:ee,texSubImage3D:Me,compressedTexSubImage2D:ue,compressedTexSubImage3D:de,scissor:Ne,viewport:fe,reset:pt}}function Ub(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Xe,f=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,E){return g?new OffscreenCanvas(N,E):xl("canvas")}function y(N,E,G){let Q=1;const J=vt(N);if((J.width>G||J.height>G)&&(Q=G/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ee=Math.floor(Q*J.width),Me=Math.floor(Q*J.height);p===void 0&&(p=_(ee,Me));const ue=E?_(ee,Me):p;return ue.width=ee,ue.height=Me,ue.getContext("2d").drawImage(N,0,0,ee,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ee+"x"+Me+")."),ue}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),N;return N}function m(N){return N.generateMipmaps&&N.minFilter!==Sn&&N.minFilter!==_n}function d(N){t.generateMipmap(N)}function x(N,E,G,Q,J=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ee=E;if(E===t.RED&&(G===t.FLOAT&&(ee=t.R32F),G===t.HALF_FLOAT&&(ee=t.R16F),G===t.UNSIGNED_BYTE&&(ee=t.R8)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.R8UI),G===t.UNSIGNED_SHORT&&(ee=t.R16UI),G===t.UNSIGNED_INT&&(ee=t.R32UI),G===t.BYTE&&(ee=t.R8I),G===t.SHORT&&(ee=t.R16I),G===t.INT&&(ee=t.R32I)),E===t.RG&&(G===t.FLOAT&&(ee=t.RG32F),G===t.HALF_FLOAT&&(ee=t.RG16F),G===t.UNSIGNED_BYTE&&(ee=t.RG8)),E===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RG8UI),G===t.UNSIGNED_SHORT&&(ee=t.RG16UI),G===t.UNSIGNED_INT&&(ee=t.RG32UI),G===t.BYTE&&(ee=t.RG8I),G===t.SHORT&&(ee=t.RG16I),G===t.INT&&(ee=t.RG32I)),E===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),E===t.RGBA){const Me=J?hl:Qe.getTransfer(Q);G===t.FLOAT&&(ee=t.RGBA32F),G===t.HALF_FLOAT&&(ee=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ee=Me===rt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(N,E){let G;return N?E===null||E===Ts||E===As?G=t.DEPTH24_STENCIL8:E===Pi?G=t.DEPTH32F_STENCIL8:E===fl&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ts||E===As?G=t.DEPTH_COMPONENT24:E===Pi?G=t.DEPTH_COMPONENT32F:E===fl&&(G=t.DEPTH_COMPONENT16),G}function S(N,E){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Sn&&N.minFilter!==_n?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function R(N){const E=N.target;E.removeEventListener("dispose",R),A(E),E.isVideoTexture&&f.delete(E)}function T(N){const E=N.target;E.removeEventListener("dispose",T),b(E)}function A(N){const E=i.get(N);if(E.__webglInit===void 0)return;const G=N.source,Q=h.get(G);if(Q){const J=Q[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(N),Object.keys(Q).length===0&&h.delete(G)}i.remove(N)}function C(N){const E=i.get(N);t.deleteTexture(E.__webglTexture);const G=N.source,Q=h.get(G);delete Q[E.__cacheKey],a.memory.textures--}function b(N){const E=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let J=0;J<E.__webglFramebuffer[Q].length;J++)t.deleteFramebuffer(E.__webglFramebuffer[Q][J]);else t.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[Q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=N.textures;for(let Q=0,J=G.length;Q<J;Q++){const ee=i.get(G[Q]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(G[Q])}i.remove(N)}let M=0;function L(){M=0}function W(){const N=M;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),M+=1,N}function B(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function F(N,E){const G=i.get(N);if(N.isVideoTexture&&Be(N),N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){const Q=N.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(G,N,E);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function O(N,E){const G=i.get(N);if(N.version>0&&G.__version!==N.version){ze(G,N,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function j(N,E){const G=i.get(N);if(N.version>0&&G.__version!==N.version){ze(G,N,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function q(N,E){const G=i.get(N);if(N.version>0&&G.__version!==N.version){X(G,N,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const D={[qu]:t.REPEAT,[gr]:t.CLAMP_TO_EDGE,[Ku]:t.MIRRORED_REPEAT},Y={[Sn]:t.NEAREST,[gS]:t.NEAREST_MIPMAP_NEAREST,[so]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[gc]:t.LINEAR_MIPMAP_NEAREST,[xr]:t.LINEAR_MIPMAP_LINEAR},Z={[RS]:t.NEVER,[US]:t.ALWAYS,[PS]:t.LESS,[Jg]:t.LEQUAL,[LS]:t.EQUAL,[IS]:t.GEQUAL,[kS]:t.GREATER,[DS]:t.NOTEQUAL};function re(N,E){if(E.type===Pi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_n||E.magFilter===gc||E.magFilter===so||E.magFilter===xr||E.minFilter===_n||E.minFilter===gc||E.minFilter===so||E.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,D[E.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,D[E.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,D[E.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,Y[E.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,Y[E.minFilter]),E.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==so&&E.minFilter!==xr||E.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ve(N,E){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",R));const Q=E.source;let J=h.get(Q);J===void 0&&(J={},h.set(Q,J));const ee=B(E);if(ee!==N.__cacheKey){J[ee]===void 0&&(J[ee]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[ee].usedTimes++;const Me=J[N.__cacheKey];Me!==void 0&&(J[N.__cacheKey].usedTimes--,Me.usedTimes===0&&C(E)),N.__cacheKey=ee,N.__webglTexture=J[ee].texture}return G}function ze(N,E,G){let Q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=t.TEXTURE_3D);const J=ve(N,E),ee=E.source;n.bindTexture(Q,N.__webglTexture,t.TEXTURE0+G);const Me=i.get(ee);if(ee.version!==Me.__version||J===!0){n.activeTexture(t.TEXTURE0+G);const ue=Qe.getPrimaries(Qe.workingColorSpace),de=E.colorSpace===Ci?null:Qe.getPrimaries(E.colorSpace),Fe=E.colorSpace===Ci||ue===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ie=y(E.image,!1,r.maxTextureSize);ie=De(E,ie);const ye=s.convert(E.format,E.colorSpace),He=s.convert(E.type);let Ne=x(E.internalFormat,ye,He,E.colorSpace,E.isVideoTexture);re(Q,E);let fe;const Oe=E.mipmaps,Ve=E.isVideoTexture!==!0,pt=Me.__version===void 0||J===!0,k=ee.dataReady,he=S(E,ie);if(E.isDepthTexture)Ne=v(E.format===Cs,E.type),pt&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,Ne,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Ne,ie.width,ie.height,0,ye,He,null));else if(E.isDataTexture)if(Oe.length>0){Ve&&pt&&n.texStorage2D(t.TEXTURE_2D,he,Ne,Oe[0].width,Oe[0].height);for(let $=0,K=Oe.length;$<K;$++)fe=Oe[$],Ve?k&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,fe.width,fe.height,ye,He,fe.data):n.texImage2D(t.TEXTURE_2D,$,Ne,fe.width,fe.height,0,ye,He,fe.data);E.generateMipmaps=!1}else Ve?(pt&&n.texStorage2D(t.TEXTURE_2D,he,Ne,ie.width,ie.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ye,He,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,ie.width,ie.height,0,ye,He,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ve&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ne,Oe[0].width,Oe[0].height,ie.depth);for(let $=0,K=Oe.length;$<K;$++)if(fe=Oe[$],E.format!==Wn)if(ye!==null)if(Ve){if(k)if(E.layerUpdates.size>0){for(const ae of E.layerUpdates){const Re=fe.width*fe.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,ae,fe.width,fe.height,1,ye,fe.data.slice(Re*ae,Re*(ae+1)),0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,fe.width,fe.height,ie.depth,ye,fe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Ne,fe.width,fe.height,ie.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,fe.width,fe.height,ie.depth,ye,He,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,Ne,fe.width,fe.height,ie.depth,0,ye,He,fe.data)}else{Ve&&pt&&n.texStorage2D(t.TEXTURE_2D,he,Ne,Oe[0].width,Oe[0].height);for(let $=0,K=Oe.length;$<K;$++)fe=Oe[$],E.format!==Wn?ye!==null?Ve?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,fe.width,fe.height,ye,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,$,Ne,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?k&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,fe.width,fe.height,ye,He,fe.data):n.texImage2D(t.TEXTURE_2D,$,Ne,fe.width,fe.height,0,ye,He,fe.data)}else if(E.isDataArrayTexture)if(Ve){if(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ne,ie.width,ie.height,ie.depth),k)if(E.layerUpdates.size>0){let $;switch(He){case t.UNSIGNED_BYTE:switch(ye){case t.ALPHA:$=1;break;case t.LUMINANCE:$=1;break;case t.LUMINANCE_ALPHA:$=2;break;case t.RGB:$=3;break;case t.RGBA:$=4;break;default:throw new Error(`Unknown texel size for format ${ye}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:$=1;break;default:throw new Error(`Unknown texel size for type ${He}.`)}const K=ie.width*ie.height*$;for(const ae of E.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,ie.width,ie.height,1,ye,He,ie.data.slice(K*ae,K*(ae+1)));E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,He,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,ie.width,ie.height,ie.depth,0,ye,He,ie.data);else if(E.isData3DTexture)Ve?(pt&&n.texStorage3D(t.TEXTURE_3D,he,Ne,ie.width,ie.height,ie.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,He,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,ie.width,ie.height,ie.depth,0,ye,He,ie.data);else if(E.isFramebufferTexture){if(pt)if(Ve)n.texStorage2D(t.TEXTURE_2D,he,Ne,ie.width,ie.height);else{let $=ie.width,K=ie.height;for(let ae=0;ae<he;ae++)n.texImage2D(t.TEXTURE_2D,ae,Ne,$,K,0,ye,He,null),$>>=1,K>>=1}}else if(Oe.length>0){if(Ve&&pt){const $=vt(Oe[0]);n.texStorage2D(t.TEXTURE_2D,he,Ne,$.width,$.height)}for(let $=0,K=Oe.length;$<K;$++)fe=Oe[$],Ve?k&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ye,He,fe):n.texImage2D(t.TEXTURE_2D,$,Ne,ye,He,fe);E.generateMipmaps=!1}else if(Ve){if(pt){const $=vt(ie);n.texStorage2D(t.TEXTURE_2D,he,Ne,$.width,$.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,He,ie)}else n.texImage2D(t.TEXTURE_2D,0,Ne,ye,He,ie);m(E)&&d(Q),Me.__version=ee.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function X(N,E,G){if(E.image.length!==6)return;const Q=ve(N,E),J=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+G);const ee=i.get(J);if(J.version!==ee.__version||Q===!0){n.activeTexture(t.TEXTURE0+G);const Me=Qe.getPrimaries(Qe.workingColorSpace),ue=E.colorSpace===Ci?null:Qe.getPrimaries(E.colorSpace),de=E.colorSpace===Ci||Me===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Fe=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let K=0;K<6;K++)!Fe&&!ie?ye[K]=y(E.image[K],!0,r.maxCubemapSize):ye[K]=ie?E.image[K].image:E.image[K],ye[K]=De(E,ye[K]);const He=ye[0],Ne=s.convert(E.format,E.colorSpace),fe=s.convert(E.type),Oe=x(E.internalFormat,Ne,fe,E.colorSpace),Ve=E.isVideoTexture!==!0,pt=ee.__version===void 0||Q===!0,k=J.dataReady;let he=S(E,He);re(t.TEXTURE_CUBE_MAP,E);let $;if(Fe){Ve&&pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Oe,He.width,He.height);for(let K=0;K<6;K++){$=ye[K].mipmaps;for(let ae=0;ae<$.length;ae++){const Re=$[ae];E.format!==Wn?Ne!==null?Ve?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,Re.width,Re.height,Ne,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,Oe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,Re.width,Re.height,Ne,fe,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,Oe,Re.width,Re.height,0,Ne,fe,Re.data)}}}else{if($=E.mipmaps,Ve&&pt){$.length>0&&he++;const K=vt(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Oe,K.width,K.height)}for(let K=0;K<6;K++)if(ie){Ve?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye[K].width,ye[K].height,Ne,fe,ye[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,ye[K].width,ye[K].height,0,Ne,fe,ye[K].data);for(let ae=0;ae<$.length;ae++){const Ye=$[ae].image[K].image;Ve?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,Ye.width,Ye.height,Ne,fe,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,Oe,Ye.width,Ye.height,0,Ne,fe,Ye.data)}}else{Ve?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ne,fe,ye[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,Ne,fe,ye[K]);for(let ae=0;ae<$.length;ae++){const Re=$[ae];Ve?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,Ne,fe,Re.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,Oe,Ne,fe,Re.image[K])}}}m(E)&&d(t.TEXTURE_CUBE_MAP),ee.__version=J.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ne(N,E,G,Q,J,ee){const Me=s.convert(G.format,G.colorSpace),ue=s.convert(G.type),de=x(G.internalFormat,Me,ue,G.colorSpace);if(!i.get(E).__hasExternalTextures){const ie=Math.max(1,E.width>>ee),ye=Math.max(1,E.height>>ee);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ee,de,ie,ye,E.depth,0,Me,ue,null):n.texImage2D(J,ee,de,ie,ye,0,Me,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),$e(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,J,i.get(G).__webglTexture,0,we(E)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,J,i.get(G).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(N,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,N),E.depthBuffer){const Q=E.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,ee=v(E.stencilBuffer,J),Me=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=we(E);$e(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ee,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ee,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,N)}else{const Q=E.textures;for(let J=0;J<Q.length;J++){const ee=Q[J],Me=s.convert(ee.format,ee.colorSpace),ue=s.convert(ee.type),de=x(ee.internalFormat,Me,ue,ee.colorSpace),Fe=we(E);G&&$e(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,de,E.width,E.height):$e(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,de,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,de,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);const Q=i.get(E.depthTexture).__webglTexture,J=we(E);if(E.depthTexture.format===ps)$e(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Cs)$e(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ke(N){const E=i.get(N),G=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");oe(E.__webglFramebuffer,N)}else if(G){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]=t.createRenderbuffer(),ce(E.__webglDepthbuffer[Q],N,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),ce(E.__webglDepthbuffer,N,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(N,E,G){const Q=i.get(N);E!==void 0&&ne(Q.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&ke(N)}function Ae(N){const E=N.texture,G=i.get(N),Q=i.get(E);N.addEventListener("dispose",T);const J=N.textures,ee=N.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=E.version,a.memory.textures++),ee){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let de=0;de<E.mipmaps.length;de++)G.__webglFramebuffer[ue][de]=t.createFramebuffer()}else G.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)G.__webglFramebuffer[ue]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ue=0,de=J.length;ue<de;ue++){const Fe=i.get(J[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&$e(N)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ue=0;ue<J.length;ue++){const de=J[ue];G.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ue]);const Fe=s.convert(de.format,de.colorSpace),ie=s.convert(de.type),ye=x(de.internalFormat,Fe,ie,de.colorSpace,N.isXRRenderTarget===!0),He=we(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,ye,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,G.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(G.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),re(t.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)ne(G.__webglFramebuffer[ue][de],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else ne(G.__webglFramebuffer[ue],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ue=0,de=J.length;ue<de;ue++){const Fe=J[ue],ie=i.get(Fe);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),re(t.TEXTURE_2D,Fe),ne(G.__webglFramebuffer,N,Fe,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),m(Fe)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ue=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Q.__webglTexture),re(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)ne(G.__webglFramebuffer[de],N,E,t.COLOR_ATTACHMENT0,ue,de);else ne(G.__webglFramebuffer,N,E,t.COLOR_ATTACHMENT0,ue,0);m(E)&&d(ue),n.unbindTexture()}N.depthBuffer&&ke(N)}function P(N){const E=N.textures;for(let G=0,Q=E.length;G<Q;G++){const J=E[G];if(m(J)){const ee=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(J).__webglTexture;n.bindTexture(ee,Me),d(ee),n.unbindTexture()}}}const Le=[],be=[];function ot(N){if(N.samples>0){if($e(N)===!1){const E=N.textures,G=N.width,Q=N.height;let J=t.COLOR_BUFFER_BIT;const ee=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(N),ue=E.length>1;if(ue)for(let de=0;de<E.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let de=0;de<E.length;de++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);const Fe=i.get(E[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,G,Q,0,0,G,Q,J,t.NEAREST),l===!0&&(Le.length=0,be.length=0,Le.push(t.COLOR_ATTACHMENT0+de),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Le.push(ee),be.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,be)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Le))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let de=0;de<E.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);const Fe=i.get(E[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const E=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function we(N){return Math.min(r.maxSamples,N.samples)}function $e(N){const E=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Be(N){const E=a.render.frame;f.get(N)!==E&&(f.set(N,E),N.update())}function De(N,E){const G=N.colorSpace,Q=N.format,J=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==Zi&&G!==Ci&&(Qe.getTransfer(G)===rt?(Q!==Wn||J!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function vt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=L,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Pe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=$e}function Fb(t,e){function n(i,r=Ci){let s;const a=Qe.getTransfer(r);if(i===Xi)return t.UNSIGNED_BYTE;if(i===$g)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Yg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===_S)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===xS)return t.BYTE;if(i===vS)return t.SHORT;if(i===fl)return t.UNSIGNED_SHORT;if(i===Xg)return t.INT;if(i===Ts)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===Ul)return t.HALF_FLOAT;if(i===yS)return t.ALPHA;if(i===SS)return t.RGB;if(i===Wn)return t.RGBA;if(i===MS)return t.LUMINANCE;if(i===ES)return t.LUMINANCE_ALPHA;if(i===ps)return t.DEPTH_COMPONENT;if(i===Cs)return t.DEPTH_STENCIL;if(i===wS)return t.RED;if(i===qg)return t.RED_INTEGER;if(i===bS)return t.RG;if(i===Kg)return t.RG_INTEGER;if(i===Zg)return t.RGBA_INTEGER;if(i===xc||i===vc||i===_c||i===yc)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_c)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yh||i===Sh||i===Mh||i===Eh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wh||i===bh||i===Th)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wh||i===bh)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Th)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ah||i===Ch||i===Nh||i===Rh||i===Ph||i===Lh||i===kh||i===Dh||i===Ih||i===Uh||i===Fh||i===Oh||i===zh||i===Bh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ah)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ch)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ph)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ih)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sc||i===jh||i===Hh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Sc)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===TS||i===Vh||i===Gh||i===Wh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Ob extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ea extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zb={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(u,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],h=f.position.distanceTo(p.position),g=.02,_=.005;u.inputState.pinching&&h>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ea;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Xt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $i({vertexShader:Bb,fragmentShader:jb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new cn(new Oa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Vb extends ks{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,f=null,p=null,h=null,g=null,_=null;const y=new Hb,m=n.getContextAttributes();let d=null,x=null;const v=[],S=[],R=new Xe;let T=null;const A=new vn;A.layers.enable(1),A.viewport=new Nt;const C=new vn;C.layers.enable(2),C.viewport=new Nt;const b=[A,C],M=new Ob;M.layers.enable(1),M.layers.enable(2);let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=v[X];return ne===void 0&&(ne=new Yc,v[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=v[X];return ne===void 0&&(ne=new Yc,v[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=v[X];return ne===void 0&&(ne=new Yc,v[X]=ne),ne.getHandSpace()};function B(X){const ne=S.indexOf(X.inputSource);if(ne===-1)return;const ce=v[ne];ce!==void 0&&(ce.update(X.inputSource,X.frame,u||a),ce.dispatchEvent({type:X.type,data:X.inputSource}))}function F(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",O);for(let X=0;X<v.length;X++){const ne=S[X];ne!==null&&(S[X]=null,v[X].disconnect(ne))}L=null,W=null,y.reset(),e.setRenderTarget(d),g=null,h=null,p=null,r=null,x=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",F),r.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new Tr(g.framebufferWidth,g.framebufferHeight,{format:Wn,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ce=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Cs:ps,ce=m.stencil?As:Ts);const ke={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(ke),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Tr(h.textureWidth,h.textureHeight,{format:Wn,type:Xi,depthTexture:new hx(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(X){for(let ne=0;ne<X.removed.length;ne++){const ce=X.removed[ne],oe=S.indexOf(ce);oe>=0&&(S[oe]=null,v[oe].disconnect(ce))}for(let ne=0;ne<X.added.length;ne++){const ce=X.added[ne];let oe=S.indexOf(ce);if(oe===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=S.length){S.push(ce),oe=Pe;break}else if(S[Pe]===null){S[Pe]=ce,oe=Pe;break}if(oe===-1)break}const ke=v[oe];ke&&ke.connect(ce)}}const j=new V,q=new V;function D(X,ne,ce){j.setFromMatrixPosition(ne.matrixWorld),q.setFromMatrixPosition(ce.matrixWorld);const oe=j.distanceTo(q),ke=ne.projectionMatrix.elements,Pe=ce.projectionMatrix.elements,Ae=ke[14]/(ke[10]-1),P=ke[14]/(ke[10]+1),Le=(ke[9]+1)/ke[5],be=(ke[9]-1)/ke[5],ot=(ke[8]-1)/ke[0],we=(Pe[8]+1)/Pe[0],$e=Ae*ot,Be=Ae*we,De=oe/(-ot+we),vt=De*-ot;ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(vt),X.translateZ(De),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const N=Ae+De,E=P+De,G=$e-vt,Q=Be+(oe-vt),J=Le*P/E*N,ee=be*P/E*N;X.projectionMatrix.makePerspective(G,Q,J,ee,N,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Y(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;y.texture!==null&&(X.near=y.depthNear,X.far=y.depthFar),M.near=C.near=A.near=X.near,M.far=C.far=A.far=X.far,(L!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,W=M.far,A.near=L,A.far=W,C.near=L,C.far=W,A.updateProjectionMatrix(),C.updateProjectionMatrix(),X.updateProjectionMatrix());const ne=X.parent,ce=M.cameras;Y(M,ne);for(let oe=0;oe<ce.length;oe++)Y(ce[oe],ne);ce.length===2?D(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),Z(X,M,ne)};function Z(X,ne,ce){ce===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(ce.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Zu*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let re=null;function ve(X,ne){if(f=ne.getViewerPose(u||a),_=ne,f!==null){const ce=f.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let oe=!1;ce.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let Pe=0;Pe<ce.length;Pe++){const Ae=ce[Pe];let P=null;if(g!==null)P=g.getViewport(Ae);else{const be=p.getViewSubImage(h,Ae);P=be.viewport,Pe===0&&(e.setRenderTargetTextures(x,be.colorTexture,h.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(x))}let Le=b[Pe];Le===void 0&&(Le=new vn,Le.layers.enable(Pe),Le.viewport=new Nt,b[Pe]=Le),Le.matrix.fromArray(Ae.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Ae.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(P.x,P.y,P.width,P.height),Pe===0&&(M.matrix.copy(Le.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(Le)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const Pe=p.getDepthInformation(ce[0]);Pe&&Pe.isValid&&Pe.texture&&y.init(e,Pe,r.renderState)}}for(let ce=0;ce<v.length;ce++){const oe=S[ce],ke=v[ce];oe!==null&&ke!==void 0&&ke.update(oe,ne,u||a)}re&&re(X,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const ze=new dx;ze.setAnimationLoop(ve),this.setAnimationLoop=function(X){re=X},this.dispose=function(){}}}const ar=new qn,Gb=new xt;function Wb(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,lx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),p(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&g(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,x,v):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===nn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===nn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d),v=x.envMap,S=x.envMapRotation;v&&(m.envMap.value=v,ar.copy(S),ar.x*=-1,ar.y*=-1,ar.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.envMapRotation.value.setFromMatrix4(Gb.makeRotationFromEuler(ar)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Xb(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function u(x,v){let S=r[x.id];S===void 0&&(_(x),S=f(x),r[x.id]=S,x.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(x,R);const T=e.render.frame;s[x.id]!==T&&(h(x),s[x.id]=T)}function f(x){const v=p();x.__bindingPointIndex=v;const S=t.createBuffer(),R=x.__size,T=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function p(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],S=x.uniforms,R=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,A=S.length;T<A;T++){const C=Array.isArray(S[T])?S[T]:[S[T]];for(let b=0,M=C.length;b<M;b++){const L=C[b];if(g(L,T,b,R)===!0){const W=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let O=0;O<B.length;O++){const j=B[O],q=y(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,W+F,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,F),F+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,v,S,R){const T=x.value,A=v+"_"+S;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const C=R[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function _(x){const v=x.uniforms;let S=0;const R=16;for(let A=0,C=v.length;A<C;A++){const b=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,L=b.length;M<L;M++){const W=b[M],B=Array.isArray(W.value)?W.value:[W.value];for(let F=0,O=B.length;F<O;F++){const j=B[F],q=y(j),D=S%R;D!==0&&R-D<q.boundary&&(S+=R-D),W.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=q.storage}}}const T=S%R;return T>0&&(S+=R-T),x.__size=S,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}class $b{constructor(e={}){const{canvas:n=OS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const d=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=Hi,this.toneMappingExposure=1;const v=this;let S=!1,R=0,T=0,A=null,C=-1,b=null;const M=new Nt,L=new Nt;let W=null;const B=new qe(0);let F=0,O=n.width,j=n.height,q=1,D=null,Y=null;const Z=new Nt(0,0,O,j),re=new Nt(0,0,O,j);let ve=!1;const ze=new Qd;let X=!1,ne=!1;const ce=new xt,oe=new V,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function Ae(){return A===null?q:1}let P=i;function Le(w,I){return n.getContext(w,I)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yd}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",$,!1),n.addEventListener("webglcontextcreationerror",K,!1),P===null){const I="webgl2";if(P=Le(I,w),P===null)throw Le(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let be,ot,we,$e,Be,De,vt,N,E,G,Q,J,ee,Me,ue,de,Fe,ie,ye,He,Ne,fe,Oe,Ve;function pt(){be=new tw(P),be.init(),fe=new Fb(P,be),ot=new q1(P,be,e,fe),we=new Ib(P),$e=new rw(P),Be=new Sb,De=new Ub(P,be,we,Be,ot,fe,$e),vt=new Z1(v),N=new ew(v),E=new dM(P),Oe=new $1(P,E),G=new nw(P,E,$e,Oe),Q=new aw(P,G,E,$e),ye=new sw(P,ot,De),de=new K1(Be),J=new yb(v,vt,N,be,ot,Oe,de),ee=new Wb(v,Be),Me=new Eb,ue=new Nb(be),ie=new X1(v,vt,N,we,Q,h,l),Fe=new Db(v,Q,ot),Ve=new Xb(P,$e,ot,we),He=new Y1(P,be,$e),Ne=new iw(P,be,$e),$e.programs=J.programs,v.capabilities=ot,v.extensions=be,v.properties=Be,v.renderLists=Me,v.shadowMap=Fe,v.state=we,v.info=$e}pt();const k=new Vb(v,P);this.xr=k,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(O,j,!1))},this.getSize=function(w){return w.set(O,j)},this.setSize=function(w,I,z=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,j=I,n.width=Math.floor(w*q),n.height=Math.floor(I*q),z===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(O*q,j*q).floor()},this.setDrawingBufferSize=function(w,I,z){O=w,j=I,q=z,n.width=Math.floor(w*z),n.height=Math.floor(I*z),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,I,z,H){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,I,z,H),we.viewport(M.copy(Z).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,I,z,H){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,I,z,H),we.scissor(L.copy(re).multiplyScalar(q).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(w){we.setScissorTest(ve=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(w=!0,I=!0,z=!0){let H=0;if(w){let U=!1;if(A!==null){const se=A.texture.format;U=se===Zg||se===Kg||se===qg}if(U){const se=A.texture.type,pe=se===Xi||se===Ts||se===fl||se===As||se===$g||se===Yg,ge=ie.getClearColor(),xe=ie.getClearAlpha(),Te=ge.r,Ce=ge.g,Ee=ge.b;pe?(g[0]=Te,g[1]=Ce,g[2]=Ee,g[3]=xe,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Te,_[1]=Ce,_[2]=Ee,_[3]=xe,P.clearBufferiv(P.COLOR,0,_))}else H|=P.COLOR_BUFFER_BIT}I&&(H|=P.DEPTH_BUFFER_BIT),z&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",$,!1),n.removeEventListener("webglcontextcreationerror",K,!1),Me.dispose(),ue.dispose(),Be.dispose(),vt.dispose(),N.dispose(),Q.dispose(),Oe.dispose(),Ve.dispose(),J.dispose(),k.dispose(),k.removeEventListener("sessionstart",Un),k.removeEventListener("sessionend",Fn),Qi.stop()};function he(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=$e.autoReset,I=Fe.enabled,z=Fe.autoUpdate,H=Fe.needsUpdate,U=Fe.type;pt(),$e.autoReset=w,Fe.enabled=I,Fe.autoUpdate=z,Fe.needsUpdate=H,Fe.type=U}function K(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ae(w){const I=w.target;I.removeEventListener("dispose",ae),Re(I)}function Re(w){Ye(w),Be.remove(w)}function Ye(w){const I=Be.get(w).programs;I!==void 0&&(I.forEach(function(z){J.releaseProgram(z)}),w.isShaderMaterial&&J.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,z,H,U,se){I===null&&(I=ke);const pe=U.isMesh&&U.matrixWorld.determinant()<0,ge=Sx(w,I,z,H,U);we.setMaterial(H,pe);let xe=z.index,Te=1;if(H.wireframe===!0){if(xe=G.getWireframeAttribute(z),xe===void 0)return;Te=2}const Ce=z.drawRange,Ee=z.attributes.position;let Ke=Ce.start*Te,dt=(Ce.start+Ce.count)*Te;se!==null&&(Ke=Math.max(Ke,se.start*Te),dt=Math.min(dt,(se.start+se.count)*Te)),xe!==null?(Ke=Math.max(Ke,0),dt=Math.min(dt,xe.count)):Ee!=null&&(Ke=Math.max(Ke,0),dt=Math.min(dt,Ee.count));const ft=dt-Ke;if(ft<0||ft===1/0)return;Oe.setup(U,H,ge,z,xe);let rn,Ze=He;if(xe!==null&&(rn=E.get(xe),Ze=Ne,Ze.setIndex(rn)),U.isMesh)H.wireframe===!0?(we.setLineWidth(H.wireframeLinewidth*Ae()),Ze.setMode(P.LINES)):Ze.setMode(P.TRIANGLES);else if(U.isLine){let Se=H.linewidth;Se===void 0&&(Se=1),we.setLineWidth(Se*Ae()),U.isLineSegments?Ze.setMode(P.LINES):U.isLineLoop?Ze.setMode(P.LINE_LOOP):Ze.setMode(P.LINE_STRIP)}else U.isPoints?Ze.setMode(P.POINTS):U.isSprite&&Ze.setMode(P.TRIANGLES);if(U.isBatchedMesh)U._multiDrawInstances!==null?Ze.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances):Ze.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)Ze.renderInstances(Ke,ft,U.count);else if(z.isInstancedBufferGeometry){const Se=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,jt=Math.min(z.instanceCount,Se);Ze.renderInstances(Ke,ft,jt)}else Ze.render(Ke,ft)};function mt(w,I,z){w.transparent===!0&&w.side===Vn&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,Ba(w,I,z),w.side=Wi,w.needsUpdate=!0,Ba(w,I,z),w.side=Vn):Ba(w,I,z)}this.compile=function(w,I,z=null){z===null&&(z=w),m=ue.get(z),m.init(I),x.push(m),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),w!==z&&w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const H=new Set;return w.traverse(function(U){const se=U.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const ge=se[pe];mt(ge,z,U),H.add(ge)}else mt(se,z,U),H.add(se)}),x.pop(),m=null,H},this.compileAsync=function(w,I,z=null){const H=this.compile(w,I,z);return new Promise(U=>{function se(){if(H.forEach(function(pe){Be.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){U(w);return}setTimeout(se,10)}be.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let bt=null;function et(w){bt&&bt(w)}function Un(){Qi.stop()}function Fn(){Qi.start()}const Qi=new dx;Qi.setAnimationLoop(et),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(w){bt=w,k.setAnimationLoop(w),w===null?Qi.stop():Qi.start()},k.addEventListener("sessionstart",Un),k.addEventListener("sessionend",Fn),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(I),I=k.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,I,A),m=ue.get(w,x.length),m.init(I),x.push(m),ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ze.setFromProjectionMatrix(ce),ne=this.localClippingEnabled,X=de.init(this.clippingPlanes,ne),y=Me.get(w,d.length),y.init(),d.push(y),k.enabled===!0&&k.isPresenting===!0){const se=v.xr.getDepthSensingMesh();se!==null&&zl(se,I,-1/0,v.sortObjects)}zl(w,I,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(D,Y),Pe=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Pe&&ie.addToRenderList(y,w),this.info.render.frame++,X===!0&&de.beginShadows();const z=m.state.shadowsArray;Fe.render(z,w,I),X===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=y.opaque,U=y.transmissive;if(m.setupLights(),I.isArrayCamera){const se=I.cameras;if(U.length>0)for(let pe=0,ge=se.length;pe<ge;pe++){const xe=se[pe];tf(H,U,w,xe)}Pe&&ie.render(w);for(let pe=0,ge=se.length;pe<ge;pe++){const xe=se[pe];ef(y,w,xe,xe.viewport)}}else U.length>0&&tf(H,U,w,I),Pe&&ie.render(w),ef(y,w,I);A!==null&&(De.updateMultisampleRenderTarget(A),De.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,I),Oe.resetDefaultState(),C=-1,b=null,x.pop(),x.length>0?(m=x[x.length-1],X===!0&&de.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function zl(w,I,z,H){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ze.intersectsSprite(w)){H&&oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ce);const pe=Q.update(w),ge=w.material;ge.visible&&y.push(w,pe,ge,z,oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ze.intersectsObject(w))){const pe=Q.update(w),ge=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),oe.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),oe.copy(pe.boundingSphere.center)),oe.applyMatrix4(w.matrixWorld).applyMatrix4(ce)),Array.isArray(ge)){const xe=pe.groups;for(let Te=0,Ce=xe.length;Te<Ce;Te++){const Ee=xe[Te],Ke=ge[Ee.materialIndex];Ke&&Ke.visible&&y.push(w,pe,Ke,z,oe.z,Ee)}}else ge.visible&&y.push(w,pe,ge,z,oe.z,null)}}const se=w.children;for(let pe=0,ge=se.length;pe<ge;pe++)zl(se[pe],I,z,H)}function ef(w,I,z,H){const U=w.opaque,se=w.transmissive,pe=w.transparent;m.setupLightsView(z),X===!0&&de.setGlobalState(v.clippingPlanes,z),H&&we.viewport(M.copy(H)),U.length>0&&za(U,I,z),se.length>0&&za(se,I,z),pe.length>0&&za(pe,I,z),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function tf(w,I,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Tr(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?Ul:Xi,minFilter:xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=m.state.transmissionRenderTarget[H.id],pe=H.viewport||M;se.setSize(pe.z,pe.w);const ge=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(B),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),Pe?ie.render(z):v.clear();const xe=v.toneMapping;v.toneMapping=Hi;const Te=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),X===!0&&de.setGlobalState(v.clippingPlanes,H),za(w,z,H),De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se),be.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ee=0,Ke=I.length;Ee<Ke;Ee++){const dt=I[Ee],ft=dt.object,rn=dt.geometry,Ze=dt.material,Se=dt.group;if(Ze.side===Vn&&ft.layers.test(H.layers)){const jt=Ze.side;Ze.side=nn,Ze.needsUpdate=!0,nf(ft,z,H,rn,Ze,Se),Ze.side=jt,Ze.needsUpdate=!0,Ce=!0}}Ce===!0&&(De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se))}v.setRenderTarget(ge),v.setClearColor(B,F),Te!==void 0&&(H.viewport=Te),v.toneMapping=xe}function za(w,I,z){const H=I.isScene===!0?I.overrideMaterial:null;for(let U=0,se=w.length;U<se;U++){const pe=w[U],ge=pe.object,xe=pe.geometry,Te=H===null?pe.material:H,Ce=pe.group;ge.layers.test(z.layers)&&nf(ge,I,z,xe,Te,Ce)}}function nf(w,I,z,H,U,se){w.onBeforeRender(v,I,z,H,U,se),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(v,I,z,H,w,se),U.transparent===!0&&U.side===Vn&&U.forceSinglePass===!1?(U.side=nn,U.needsUpdate=!0,v.renderBufferDirect(z,I,H,U,w,se),U.side=Wi,U.needsUpdate=!0,v.renderBufferDirect(z,I,H,U,w,se),U.side=Vn):v.renderBufferDirect(z,I,H,U,w,se),w.onAfterRender(v,I,z,H,U,se)}function Ba(w,I,z){I.isScene!==!0&&(I=ke);const H=Be.get(w),U=m.state.lights,se=m.state.shadowsArray,pe=U.state.version,ge=J.getParameters(w,U.state,se,I,z),xe=J.getProgramCacheKey(ge);let Te=H.programs;H.environment=w.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(w.isMeshStandardMaterial?N:vt).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Te===void 0&&(w.addEventListener("dispose",ae),Te=new Map,H.programs=Te);let Ce=Te.get(xe);if(Ce!==void 0){if(H.currentProgram===Ce&&H.lightsStateVersion===pe)return sf(w,ge),Ce}else ge.uniforms=J.getUniforms(w),w.onBuild(z,ge,v),w.onBeforeCompile(ge,v),Ce=J.acquireProgram(ge,xe),Te.set(xe,Ce),H.uniforms=ge.uniforms;const Ee=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ee.clippingPlanes=de.uniform),sf(w,ge),H.needsLights=Ex(w),H.lightsStateVersion=pe,H.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ce,H.uniformsList=null,Ce}function rf(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=Bo.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function sf(w,I){const z=Be.get(w);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Sx(w,I,z,H,U){I.isScene!==!0&&(I=ke),De.resetTextureUnits();const se=I.fog,pe=H.isMeshStandardMaterial?I.environment:null,ge=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zi,xe=(H.isMeshStandardMaterial?N:vt).get(H.envMap||pe),Te=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ce=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!z.morphAttributes.position,Ke=!!z.morphAttributes.normal,dt=!!z.morphAttributes.color;let ft=Hi;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ft=v.toneMapping);const rn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ze=rn!==void 0?rn.length:0,Se=Be.get(H),jt=m.state.lights;if(X===!0&&(ne===!0||w!==b)){const pn=w===b&&H.id===C;de.setState(H,w,pn)}let tt=!1;H.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==jt.state.version||Se.outputColorSpace!==ge||U.isBatchedMesh&&Se.batching===!1||!U.isBatchedMesh&&Se.batching===!0||U.isBatchedMesh&&Se.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Se.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Se.instancing===!1||!U.isInstancedMesh&&Se.instancing===!0||U.isSkinnedMesh&&Se.skinning===!1||!U.isSkinnedMesh&&Se.skinning===!0||U.isInstancedMesh&&Se.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Se.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Se.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Se.instancingMorph===!1&&U.morphTexture!==null||Se.envMap!==xe||H.fog===!0&&Se.fog!==se||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==de.numPlanes||Se.numIntersection!==de.numIntersection)||Se.vertexAlphas!==Te||Se.vertexTangents!==Ce||Se.morphTargets!==Ee||Se.morphNormals!==Ke||Se.morphColors!==dt||Se.toneMapping!==ft||Se.morphTargetsCount!==Ze)&&(tt=!0):(tt=!0,Se.__version=H.version);let Kn=Se.currentProgram;tt===!0&&(Kn=Ba(H,I,U));let ja=!1,Ji=!1,Bl=!1;const Tt=Kn.getUniforms(),mi=Se.uniforms;if(we.useProgram(Kn.program)&&(ja=!0,Ji=!0,Bl=!0),H.id!==C&&(C=H.id,Ji=!0),ja||b!==w){Tt.setValue(P,"projectionMatrix",w.projectionMatrix),Tt.setValue(P,"viewMatrix",w.matrixWorldInverse);const pn=Tt.map.cameraPosition;pn!==void 0&&pn.setValue(P,oe.setFromMatrixPosition(w.matrixWorld)),ot.logarithmicDepthBuffer&&Tt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Tt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Ji=!0,Bl=!0)}if(U.isSkinnedMesh){Tt.setOptional(P,U,"bindMatrix"),Tt.setOptional(P,U,"bindMatrixInverse");const pn=U.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Tt.setValue(P,"boneTexture",pn.boneTexture,De))}U.isBatchedMesh&&(Tt.setOptional(P,U,"batchingTexture"),Tt.setValue(P,"batchingTexture",U._matricesTexture,De),Tt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&Tt.setValue(P,"batchingColorTexture",U._colorsTexture,De));const jl=z.morphAttributes;if((jl.position!==void 0||jl.normal!==void 0||jl.color!==void 0)&&ye.update(U,z,Kn),(Ji||Se.receiveShadow!==U.receiveShadow)&&(Se.receiveShadow=U.receiveShadow,Tt.setValue(P,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(mi.envMap.value=xe,mi.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(mi.envMapIntensity.value=I.environmentIntensity),Ji&&(Tt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Se.needsLights&&Mx(mi,Bl),se&&H.fog===!0&&ee.refreshFogUniforms(mi,se),ee.refreshMaterialUniforms(mi,H,q,j,m.state.transmissionRenderTarget[w.id]),Bo.upload(P,rf(Se),mi,De)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Bo.upload(P,rf(Se),mi,De),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Tt.setValue(P,"center",U.center),Tt.setValue(P,"modelViewMatrix",U.modelViewMatrix),Tt.setValue(P,"normalMatrix",U.normalMatrix),Tt.setValue(P,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const pn=H.uniformsGroups;for(let Hl=0,wx=pn.length;Hl<wx;Hl++){const af=pn[Hl];Ve.update(af,Kn),Ve.bind(af,Kn)}}return Kn}function Mx(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function Ex(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,I,z){Be.get(w.texture).__webglTexture=I,Be.get(w.depthTexture).__webglTexture=z;const H=Be.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const z=Be.get(w);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,z=0){A=w,R=I,T=z;let H=!0,U=null,se=!1,pe=!1;if(w){const xe=Be.get(w);xe.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(P.FRAMEBUFFER,null),H=!1):xe.__webglFramebuffer===void 0?De.setupRenderTarget(w):xe.__hasExternalTextures&&De.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);const Te=w.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(pe=!0);const Ce=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?U=Ce[I][z]:U=Ce[I],se=!0):w.samples>0&&De.useMultisampledRTT(w)===!1?U=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(Ce)?U=Ce[z]:U=Ce,M.copy(w.viewport),L.copy(w.scissor),W=w.scissorTest}else M.copy(Z).multiplyScalar(q).floor(),L.copy(re).multiplyScalar(q).floor(),W=ve;if(we.bindFramebuffer(P.FRAMEBUFFER,U)&&H&&we.drawBuffers(w,U),we.viewport(M),we.scissor(L),we.setScissorTest(W),se){const xe=Be.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,xe.__webglTexture,z)}else if(pe){const xe=Be.get(w.texture),Te=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.__webglTexture,z||0,Te)}C=-1},this.readRenderTargetPixels=function(w,I,z,H,U,se,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge){we.bindFramebuffer(P.FRAMEBUFFER,ge);try{const xe=w.texture,Te=xe.format,Ce=xe.type;if(!ot.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-H&&z>=0&&z<=w.height-U&&P.readPixels(I,z,H,U,fe.convert(Te),fe.convert(Ce),se)}finally{const xe=A!==null?Be.get(A).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(w,I,z,H,U,se,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge){we.bindFramebuffer(P.FRAMEBUFFER,ge);try{const xe=w.texture,Te=xe.format,Ce=xe.type;if(!ot.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-H&&z>=0&&z<=w.height-U){const Ee=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ee),P.bufferData(P.PIXEL_PACK_BUFFER,se.byteLength,P.STREAM_READ),P.readPixels(I,z,H,U,fe.convert(Te),fe.convert(Ce),0),P.flush();const Ke=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await zS(P,Ke,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Ee),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,se)}finally{P.deleteBuffer(Ee),P.deleteSync(Ke)}return se}}finally{const xe=A!==null?Be.get(A).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(w,I=null,z=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-z),U=Math.floor(w.image.width*H),se=Math.floor(w.image.height*H),pe=I!==null?I.x:0,ge=I!==null?I.y:0;De.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,pe,ge,U,se),we.unbindTexture()},this.copyTextureToTexture=function(w,I,z=null,H=null,U=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],I=arguments[2],U=arguments[3]||0,z=null);let se,pe,ge,xe,Te,Ce;z!==null?(se=z.max.x-z.min.x,pe=z.max.y-z.min.y,ge=z.min.x,xe=z.min.y):(se=w.image.width,pe=w.image.height,ge=0,xe=0),H!==null?(Te=H.x,Ce=H.y):(Te=0,Ce=0);const Ee=fe.convert(I.format),Ke=fe.convert(I.type);De.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const dt=P.getParameter(P.UNPACK_ROW_LENGTH),ft=P.getParameter(P.UNPACK_IMAGE_HEIGHT),rn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ze=P.getParameter(P.UNPACK_SKIP_ROWS),Se=P.getParameter(P.UNPACK_SKIP_IMAGES),jt=w.isCompressedTexture?w.mipmaps[U]:w.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,jt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,jt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,xe),w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Te,Ce,se,pe,Ee,Ke,jt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Te,Ce,jt.width,jt.height,Ee,jt.data):P.texSubImage2D(P.TEXTURE_2D,U,Te,Ce,Ee,Ke,jt),P.pixelStorei(P.UNPACK_ROW_LENGTH,dt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft),P.pixelStorei(P.UNPACK_SKIP_PIXELS,rn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Se),U===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(w,I,z=null,H=null,U=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,w=arguments[2],I=arguments[3],U=arguments[4]||0);let se,pe,ge,xe,Te,Ce,Ee,Ke,dt;const ft=w.isCompressedTexture?w.mipmaps[U]:w.image;z!==null?(se=z.max.x-z.min.x,pe=z.max.y-z.min.y,ge=z.max.z-z.min.z,xe=z.min.x,Te=z.min.y,Ce=z.min.z):(se=ft.width,pe=ft.height,ge=ft.depth,xe=0,Te=0,Ce=0),H!==null?(Ee=H.x,Ke=H.y,dt=H.z):(Ee=0,Ke=0,dt=0);const rn=fe.convert(I.format),Ze=fe.convert(I.type);let Se;if(I.isData3DTexture)De.setTexture3D(I,0),Se=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)De.setTexture2DArray(I,0),Se=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const jt=P.getParameter(P.UNPACK_ROW_LENGTH),tt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Kn=P.getParameter(P.UNPACK_SKIP_PIXELS),ja=P.getParameter(P.UNPACK_SKIP_ROWS),Ji=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Te),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ce),w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Se,U,Ee,Ke,dt,se,pe,ge,rn,Ze,ft.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Se,U,Ee,Ke,dt,se,pe,ge,rn,ft.data):P.texSubImage3D(Se,U,Ee,Ke,dt,se,pe,ge,rn,Ze,ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,jt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Kn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ja),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ji),U===0&&I.generateMipmaps&&P.generateMipmap(Se),we.unbindTexture()},this.initRenderTarget=function(w){Be.get(w).__webglFramebuffer===void 0&&De.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?De.setTextureCube(w,0):w.isData3DTexture?De.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?De.setTexture2DArray(w,0):De.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,we.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===qd?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Fl?"display-p3":"srgb"}}class Yb extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class qb extends Xt{constructor(e,n,i,r,s,a,o,l,u){super(e,n,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei extends Fa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qg,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _x extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const qc=new xt,Up=new V,Fp=new V;class Kb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Up.setFromMatrixPosition(e.matrixWorld),n.position.copy(Up),Fp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Fp),n.updateMatrixWorld(),qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zb extends Kb{constructor(){super(new fx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Op extends _x{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Zb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qb extends _x{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=zp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function zp(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yd);const yx=({isScanning:t=!1,statusText:e="CLINICAL SPECIMEN: ACTIVE",onInspect:n,className:i=""})=>{const r=_e.useRef(null),[s,a]=_e.useState(!0),[o,l]=_e.useState(!1);return _e.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){a(!1);return}try{const Ae=document.createElement("canvas");if(!(Ae.getContext("webgl")||Ae.getContext("experimental-webgl"))){a(!1);return}}catch{a(!1);return}const f=r.current;if(!f)return;const p=f.clientWidth||420,h=f.clientHeight||340,g=new Yb,_=new vn(42,p/h,.1,100);_.position.set(0,0,8.8);const y=new $b({antialias:!0,alpha:!0,powerPreference:"high-performance"});y.setSize(p,h),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.shadowMap.enabled=!0,y.shadowMap.type=Vg,f.appendChild(y.domElement);const m=new Qb(16777215,1.4);g.add(m);const d=new Op(16777215,2);d.position.set(4,8,6),d.castShadow=!0,d.shadow.mapSize.width=1024,d.shadow.mapSize.height=1024,g.add(d);const x=new Op(1357990,1.6);x.position.set(-6,-2,4),g.add(x);const v=document.createElement("canvas");v.width=1024,v.height=1440;const S=v.getContext("2d");S&&(S.fillStyle="#FFFFFF",S.fillRect(0,0,1024,1440),S.fillStyle="#0F766E",S.fillRect(60,60,904,80),S.fillStyle="#FFFFFF",S.font="bold 36px Inter, sans-serif",S.fillText("METROPOLIS PATHOLOGY ENCLAVE",90,114),S.font="20px Inter, sans-serif",S.fillText("REF ID: MET-98421 // SPECIMEN VERIFIED",560,112),S.fillStyle="#F1F5F9",S.fillRect(60,160,904,90),S.fillStyle="#0F172A",S.font="bold 24px Inter, sans-serif",S.fillText("PATIENT: John Doe (46 Y / M)",90,204),S.font="20px Inter, sans-serif",S.fillText("FASTING METABOLIC & HEMATOLOGY PANEL",90,232),S.strokeStyle="#E2E8F0",S.lineWidth=2,S.beginPath(),S.moveTo(60,280),S.lineTo(964,280),S.stroke(),[["Hemoglobin (Hb)","10.8 g/dL","13.0 - 17.5","POTENTIALLY LOW"],["White Blood Cell Count","6,500 /mcL","4000 - 11000","NORMAL"],["Platelet Count","240,000 /mcL","150000 - 450000","NORMAL"],["Fasting Blood Glucose","132.0 mg/dL","70.0 - 99.0","POTENTIALLY HIGH"],["Total Cholesterol","224.0 mg/dL","125.0 - 200.0","POTENTIALLY HIGH"],["Serum Creatinine","0.90 mg/dL","0.60 - 1.30","NORMAL"],["Blood Urea Nitrogen (BUN)","28.0 mg/dL","7.0 - 20.0","POTENTIALLY HIGH"],["Thyroid Stimulating Hormone (TSH)","2.10 uIU/mL","0.40 - 4.50","NORMAL"]].forEach((P,Le)=>{const be=340+Le*85;S.fillStyle=Le%2===0?"#F8FAFC":"#FFFFFF",S.fillRect(60,be-35,904,75),S.fillStyle="#0F172A",S.font="bold 24px Inter, sans-serif",S.fillText(P[0],90,be+8),S.font="bold 26px JetBrains Mono, monospace",S.fillText(P[1],460,be+8),S.fillStyle="#64748B",S.font="20px Inter, sans-serif",S.fillText("Ref: "+P[2],660,be+8),P[3].includes("HIGH")?(S.fillStyle="#E11D48",S.font="bold 18px Inter, sans-serif",S.fillText("▲ "+P[3],830,be+8)):P[3].includes("LOW")?(S.fillStyle="#F59E0B",S.font="bold 18px Inter, sans-serif",S.fillText("▼ "+P[3],830,be+8)):(S.fillStyle="#10B981",S.font="bold 18px Inter, sans-serif",S.fillText("✓ NORMAL",830,be+8))}),S.fillStyle="#0D9488",S.fillRect(60,1340,904,40),S.fillStyle="#FFFFFF",S.font="bold 18px JetBrains Mono, monospace",S.fillText("ORCA CLINICAL ENCLAVE // DETERMINISTIC REFERENCE RANGE ENGINE // ZERO CLOUD API",90,1366));const R=new qb(v);R.minFilter=_n;const T=new ea;g.add(T);const A=4.2,C=5.9,b=.04,M=new Ds(A,C,b),L=new Ei({color:14870768,roughness:.8}),W=new cn(M,L);W.position.set(-.15,-.15,-.12),W.rotation.z=-.05,W.castShadow=!0,W.receiveShadow=!0,T.add(W);const B=new Ei({color:15857145,roughness:.7}),F=new cn(M,B);F.position.set(-.08,-.08,-.06),F.rotation.z=-.025,F.castShadow=!0,F.receiveShadow=!0,T.add(F);const O=[new Ei({color:16317180,roughness:.7}),new Ei({color:16317180,roughness:.7}),new Ei({color:16317180,roughness:.7}),new Ei({color:16317180,roughness:.7}),new Ei({map:R,roughness:.5,metalness:.05}),new Ei({color:16317180,roughness:.8})],j=new cn(M,O);j.castShadow=!0,j.receiveShadow=!0,T.add(j);const q=new Oa(A*1.05,.08),D=new Zd({color:1357990,transparent:!0,opacity:.85,side:Vn}),Y=new cn(q,D);Y.position.set(0,0,.035),T.add(Y),T.rotation.x=.16,T.rotation.y=-.22;let Z=.16,re=-.22,ve=.16,ze=-.22;const X=Ae=>{const P=f.getBoundingClientRect(),Le=(Ae.clientX-P.left)/P.width-.5,be=(Ae.clientY-P.top)/P.height-.5;re=-.22+Le*.45,Z=.16-be*.45},ne=()=>{Z=.16,re=-.22};f.addEventListener("mousemove",X),f.addEventListener("mouseleave",ne);let ce,oe=new Jb;const ke=()=>{ce=requestAnimationFrame(ke);const Ae=oe.getElapsedTime();ve+=(Z-ve)*.06,ze+=(re-ze)*.06,T.rotation.x=ve,T.rotation.y=ze;const P=2.4,Le=Ae%P/P,be=2.6-Le*5.2;Y.position.y=be,Y.material.opacity=.35+Math.sin(Le*Math.PI)*.6,T.position.y=Math.sin(Ae*1.5)*.08,y.render(g,_)};ke();const Pe=()=>{if(!f)return;const Ae=f.clientWidth,P=f.clientHeight;_.aspect=Ae/P,_.updateProjectionMatrix(),y.setSize(Ae,P)};return window.addEventListener("resize",Pe),()=>{window.removeEventListener("resize",Pe),f.removeEventListener("mousemove",X),f.removeEventListener("mouseleave",ne),cancelAnimationFrame(ce),f.contains(y.domElement)&&f.removeChild(y.domElement),y.dispose(),R.dispose()}},[s]),s?c.jsx("div",{ref:r,onClick:n,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),className:`relative w-full h-[360px] md:h-[420px] cursor-pointer select-none ${i}`,title:"Interactive 3D Document Stack — Move mouse to inspect clinical specimen",children:c.jsxs("div",{className:"absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none z-10",children:[c.jsxs("span",{className:"text-[10px] font-mono font-semibold tracking-wider bg-white/80 dark:bg-slate-900/80 backdrop-blur px-2.5 py-1 rounded-full border border-slate-200/80 dark:border-slate-800 text-teal-700 dark:text-teal-300 shadow-sm flex items-center gap-1.5",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"}),e]}),c.jsx("span",{className:"text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-slate-900/70 backdrop-blur px-2 py-0.5 rounded border border-slate-200/60 dark:border-slate-800",children:"3D PARALLAX ACTIVE"})]})}):c.jsx("div",{className:`relative flex items-center justify-center p-6 ${i}`,style:{perspective:"1000px"},children:c.jsxs("div",{className:"relative w-80 bg-white dark:bg-slate-900 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-800 p-5 transform rotate-y-6 rotate-x-6 hover:rotate-0 transition-transform duration-500",style:{transformStyle:"preserve-3d"},children:[c.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800",children:[c.jsx("span",{className:"text-xs font-bold text-teal-600 dark:text-teal-400",children:"METROPOLIS PATHOLOGY"}),c.jsx("span",{className:"text-[10px] bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded border border-teal-200 dark:border-teal-800",children:"ACC-98421"})]}),c.jsxs("div",{className:"py-4 space-y-2 text-xs",children:[c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Hemoglobin (Hb)"}),c.jsx("span",{className:"font-mono font-bold text-amber-600",children:"10.8 g/dL (Low)"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Fasting Glucose"}),c.jsx("span",{className:"font-mono font-bold text-rose-600",children:"132.0 mg/dL (High)"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Platelet Count"}),c.jsx("span",{className:"font-mono font-bold text-emerald-600",children:"240,000 /mcL (Norm)"})]})]}),c.jsx("div",{className:"text-[9px] text-slate-400 uppercase tracking-wider text-center pt-2 border-t border-slate-100 dark:border-slate-800",children:e})]})})},eT=()=>c.jsx("footer",{className:"w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors py-12",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 mb-12",children:[c.jsxs("div",{className:"md:col-span-1 space-y-4",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white",children:c.jsx(ci,{className:"w-4 h-4"})}),c.jsx("span",{className:"font-bold text-base tracking-tight text-slate-900 dark:text-white",children:"ORCA MEDSCAN"})]}),c.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400 leading-relaxed",children:"Autonomous clinical laboratory screening enclave for Orcathon 2026 Healthcare & MedTech track. Deterministic biomarker extraction with 100% on-premise cryptographic privacy."}),c.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-teal-700 dark:text-teal-400 font-mono",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),"Enclave Security: Active"]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3",children:"Extraction Architecture"}),c.jsxs("ul",{className:"space-y-2 text-xs text-slate-600 dark:text-slate-400",children:[c.jsxs("li",{className:"flex items-center gap-1.5",children:[c.jsx(Gt,{className:"w-3.5 h-3.5 text-teal-600"})," Digital PDF Vector Stream"]}),c.jsxs("li",{className:"flex items-center gap-1.5",children:[c.jsx(Gt,{className:"w-3.5 h-3.5 text-teal-600"})," Scanned PDF with OCR Fallback"]}),c.jsxs("li",{className:"flex items-center gap-1.5",children:[c.jsx(Gt,{className:"w-3.5 h-3.5 text-teal-600"})," Multi-Format Vision (PNG, JPG, WEBP, TIFF)"]}),c.jsxs("li",{className:"flex items-center gap-1.5",children:[c.jsx(Gt,{className:"w-3.5 h-3.5 text-teal-600"})," OCR Typo Auto-Repair Pipeline"]}),c.jsxs("li",{className:"flex items-center gap-1.5",children:[c.jsx(Gt,{className:"w-3.5 h-3.5 text-teal-600"})," 50+ Clinical Alias Resolution"]})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3",children:"Enclave Protocol"}),c.jsxs("ul",{className:"space-y-2 text-xs text-slate-600 dark:text-slate-400",children:[c.jsxs("li",{className:"flex items-center gap-1.5",children:[c.jsx(Ln,{className:"w-3.5 h-3.5 text-teal-600"})," PBKDF2-HMAC-SHA256 Vault"]}),c.jsxs("li",{className:"flex items-center gap-1.5",children:[c.jsx(Ln,{className:"w-3.5 h-3.5 text-teal-600"})," 100,000 Key Derivation Rounds"]}),c.jsxs("li",{className:"flex items-center gap-1.5",children:[c.jsx(Ln,{className:"w-3.5 h-3.5 text-teal-600"})," Zero Third-Party Cloud Transmissions"]}),c.jsxs("li",{className:"flex items-center gap-1.5",children:[c.jsx(Ln,{className:"w-3.5 h-3.5 text-teal-600"})," RAM-Only Ephemeral Processing"]}),c.jsxs("li",{className:"flex items-center gap-1.5",children:[c.jsx(Ln,{className:"w-3.5 h-3.5 text-teal-600"})," Signed Clinical PDF Generation"]})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3",children:"Regulatory Notice"}),c.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 leading-relaxed",children:"Orca MedScan is a clinical screening and educational prototype. It does not provide medical diagnoses, triaging, or clinical prescriptions. Always review results with licensed medical practitioners."}),c.jsx("div",{className:"mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-400",children:"Orcathon 2026 // MedTech Track"})]})]}),c.jsxs("div",{className:"pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4",children:[c.jsx("p",{children:"© 2026 Orca MedScan. Built with Antigravity & Gemini for Orcathon 2026."}),c.jsxs("div",{className:"flex items-center gap-6",children:[c.jsx("span",{children:"Deterministic Parsing"}),c.jsx("span",{children:"Local Vault"}),c.jsx("span",{children:"Open Source Clinical Screening"})]})]})]})}),tT=({onOpenAuth:t,onLaunchBenchmark:e,onExploreWorkflow:n})=>{const[i,r]=_e.useState(0),[s,a]=_e.useState(null),o=[{title:"01 / Ingestion",badge:"Multi-Format Ingestion",description:"Specimen report (digital/scanned PDF, PNG, JPG, WEBP, TIFF) is loaded into host RAM enclave.",detail:"Metropolis Pathology Panel ingested (491 characters screened, zero cloud transmissions)."},{title:"02 / OCR & Auto-Repair",badge:"Computer Vision & Tesseract",description:"Pre-sanitizes OCR character confusions (IO5 → 105), acronym typos (Tolal, LOL), and attached punctuation.",detail:"17 lines normalized with 100% numerical precision."},{title:"03 / Biomarker Mapping",badge:"Deterministic Alias Engine",description:"Maps clinical abbreviations (Hb, TLC, PLT, FBS, FPG, TC, TG, BUN, Cr) to standardized medical registry.",detail:"16 supported biomarkers recognized and tokenized."},{title:"04 / Reference Logic",badge:"Calibrated Range Comparison",description:"Prioritizes assay-specific laboratory printed intervals; falls back safely to adult clinical standards.",detail:"Fasting Glucose (132.0 mg/dL > 99.0) flagged as Potentially High; Hemoglobin (10.8 g/dL < 13.0) flagged as Potentially Low."},{title:"05 / Dual Export",badge:"Structured Output",description:"Generates instant structured CSV records and official ReportLab clinical PDF summaries.",detail:"Ready for clinical practitioner review and secondary verification."}],l=[{q:"Does Orca MedScan send medical reports to external AI APIs or cloud servers?",a:"No. Orca MedScan operates on a strict zero-cloud privacy enclave model. All optical character recognition (OCR), text tokenization, biomarker alias resolution, and reference-range comparisons execute 100% locally in host RAM. No patient data or blood panels are transmitted over the internet."},{q:"How are abnormal laboratory values flagged?",a:"Orca MedScan first detects and honors the specific reference intervals printed directly on the patient report by the calibrating laboratory. If the document omits reference intervals, documented standard adult clinical intervals are applied as a fallback and clearly disclosed."},{q:"Which image and document formats are supported?",a:"Digital PDFs, Scanned PDFs (with automated OCR page-rendering fallback), PNG, JPG, JPEG, WEBP (with OCR typo auto-repair), BMP, TIFF, and HEIC/HEIF."},{q:"Is Orca MedScan an autonomous medical diagnostic device?",a:"No. Orca MedScan is a clinical screening and educational decision-support prototype built for Orcathon 2026. It categorizes indicators as Normal, Potentially High, Potentially Low, or Review Needed. It never generates speculative medical diagnoses or pharmaceutical treatment plans."}];return c.jsxs("div",{className:"w-full flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200",children:[c.jsx("section",{className:"relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[c.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[c.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-teal-500 animate-pulse"}),"Orcathon 2026 • Healthcare & MedTech Track"]}),c.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]",children:"Deterministic Clinical Report Screening & Anomaly Surveillance."}),c.jsx("p",{className:"text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal",children:"A 100% on-premise, zero-cloud medical document intelligence engine. Ingests digital and scanned PDFs, multi-format clinical imagery, resolves 50+ laboratory aliases, and flags abnormal indicators against calibrated reference intervals."}),c.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-2",children:[c.jsxs("button",{onClick:()=>t("signup"),className:"inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md shadow-teal-600/20 transition-all hover:translate-y-[-1px] focus:ring-2 focus:ring-teal-500",children:["Launch Clinical Enclave",c.jsx(Bi,{className:"w-4 h-4"})]}),c.jsxs("button",{onClick:e,className:"inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-teal-500 text-slate-800 dark:text-slate-200 font-semibold text-sm shadow-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-800",children:[c.jsx(Dl,{className:"w-4 h-4 text-teal-600 dark:text-teal-400"}),"1-Click Evaluator Demo"]})]}),c.jsxs("div",{className:"pt-6 border-t border-slate-200 dark:border-slate-800",children:[c.jsx("p",{className:"text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-3",children:"Verified Ingestion Pipelines:"}),c.jsx("div",{className:"flex flex-wrap items-center gap-2",children:["Digital PDF","Scanned PDF (OCR)","PNG","JPG","WEBP","BMP","TIFF","HEIC/HEIF"].map(u=>c.jsx("span",{className:"px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300",children:u},u))})]})]}),c.jsx("div",{className:"lg:col-span-5 relative",children:c.jsxs("div",{className:"relative rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200/50 dark:from-slate-900/80 dark:to-slate-950 p-3 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xl",children:[c.jsxs("div",{className:"flex items-center justify-between pb-3 px-2 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500 font-mono",children:[c.jsxs("span",{className:"flex items-center gap-1.5 font-bold text-teal-600 dark:text-teal-400",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-teal-500"}),"INTERACTIVE 3D DOCUMENT STACK"]}),c.jsx("span",{children:"MOVE CURSOR TO TILT"})]}),c.jsx(yx,{statusText:"SPECIMEN: MET-98421 (CBC & METABOLIC)",onInspect:e}),c.jsxs("div",{className:"pt-3 px-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200 dark:border-slate-800",children:[c.jsx("span",{className:"font-mono text-[11px]",children:"Layered Paper Physics • Spotlight Depth"}),c.jsxs("button",{onClick:e,className:"text-teal-600 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1",children:["Test Benchmark ",c.jsx(Bi,{className:"w-3 h-3"})]})]})]})})]})})}),c.jsx("section",{id:"demo-section",className:"py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400",children:"Interactive Clinical Simulation"}),c.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2",children:"From Raw Lab Specimen to Calibrated Intelligence."}),c.jsx("p",{className:"text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed",children:"Explore how Orca MedScan ingests, cleanses, tokenizes, and verifies medical reports in seconds."})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-3 mb-10",children:o.map((u,f)=>{const p=i===f;return c.jsxs("button",{onClick:()=>r(f),className:`text-left p-4 rounded-xl border transition-all ${p?"bg-teal-50 dark:bg-teal-950/60 border-teal-500 shadow-sm":"bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"}`,children:[c.jsx("span",{className:`text-[11px] font-bold font-mono ${p?"text-teal-700 dark:text-teal-300":"text-slate-500"}`,children:u.title}),c.jsx("div",{className:"text-sm font-bold text-slate-900 dark:text-white mt-1",children:u.badge})]},u.title)})}),c.jsxs("div",{className:"p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm",children:[c.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800",children:[c.jsxs("div",{children:[c.jsxs("span",{className:"text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider",children:["Active Simulation Step ",i+1," of 5"]}),c.jsx("h3",{className:"text-xl font-bold text-slate-900 dark:text-white mt-1",children:o[i].badge})]}),c.jsxs("button",{onClick:e,className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-sm",children:["Inspect Live in Workspace",c.jsx(Bi,{className:"w-3.5 h-3.5"})]})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6",children:[c.jsxs("div",{className:"space-y-4",children:[c.jsx("p",{className:"text-sm text-slate-700 dark:text-slate-300 leading-relaxed",children:o[i].description}),c.jsxs("div",{className:"p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300",children:[c.jsx("div",{className:"text-slate-400 text-[10px] uppercase font-bold mb-1",children:"Telemetry Output:"}),o[i].detail]})]}),c.jsxs("div",{className:"rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900",children:[c.jsxs("div",{className:"px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 flex justify-between",children:[c.jsx("span",{children:"Extracted Indicator"}),c.jsx("span",{children:"Status Flag"})]}),c.jsxs("div",{className:"divide-y divide-slate-100 dark:divide-slate-800 text-xs",children:[c.jsxs("div",{className:"px-4 py-2.5 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-slate-900 dark:text-white",children:"Hemoglobin (Hb)"}),c.jsx("span",{className:"text-slate-500 text-[11px] ml-2",children:"10.8 g/dL (13.0 - 17.5)"})]}),c.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800",children:"▼ Potentially Low"})]}),c.jsxs("div",{className:"px-4 py-2.5 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-slate-900 dark:text-white",children:"Fasting Blood Glucose"}),c.jsx("span",{className:"text-slate-500 text-[11px] ml-2",children:"132.0 mg/dL (70.0 - 99.0)"})]}),c.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-bold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800",children:"▲ Potentially High"})]}),c.jsxs("div",{className:"px-4 py-2.5 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-slate-900 dark:text-white",children:"Platelet Count"}),c.jsx("span",{className:"text-slate-500 text-[11px] ml-2",children:"240,000 /mcL (150k - 450k)"})]}),c.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",children:"✓ Normal"})]})]})]})]})]})]})}),c.jsx("section",{id:"formats-section",className:"py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400",children:"Verified Pipeline Support"}),c.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2",children:"Ingest Any Clinical Specimen Format."}),c.jsx("p",{className:"text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed",children:"Every format has been thoroughly tested through our automated 16-test suite."})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold",children:c.jsx($d,{className:"w-5 h-5"})}),c.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white",children:"Digital & Scanned PDFs"}),c.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-400 leading-relaxed",children:["Extracts raw text streams using ",c.jsx("code",{className:"text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded",children:"pdfplumber"}),". Automatically renders 200 DPI image pages and triggers Tesseract OCR fallback when zero digital text is found."]}),c.jsxs("div",{className:"text-xs font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1.5 pt-2",children:[c.jsx(Gt,{className:"w-4 h-4"})," Multi-page PDF supported"]})]}),c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold",children:c.jsx(mg,{className:"w-5 h-5"})}),c.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white",children:"Multi-Format Imagery"}),c.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-400 leading-relaxed",children:["Native optical recognition on ",c.jsx("code",{className:"text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded",children:"PNG"}),", ",c.jsx("code",{className:"text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded",children:"JPG"}),", ",c.jsx("code",{className:"text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded",children:"WEBP"}),", ",c.jsx("code",{className:"text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded",children:"BMP"}),", ",c.jsx("code",{className:"text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded",children:"TIFF"}),", and ",c.jsx("code",{className:"text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded",children:"HEIC"}),". Includes EXIF auto-rotation and contrast pre-enhancement."]}),c.jsxs("div",{className:"text-xs font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1.5 pt-2",children:[c.jsx(Gt,{className:"w-4 h-4"})," OCR Typo Auto-Repair active"]})]}),c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold",children:c.jsx(Ln,{className:"w-5 h-5"})}),c.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white",children:"Zero-Cloud Enclave"}),c.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-400 leading-relaxed",children:["All parsing executes in ephemeral host RAM. Password hashes protected via PBKDF2-HMAC-SHA256 (100k rounds) stored in ",c.jsx("code",{className:"text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded",children:"data/.auth_vault.json"}),"."]}),c.jsxs("div",{className:"text-xs font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1.5 pt-2",children:[c.jsx(Gt,{className:"w-4 h-4"})," Zero external API transmissions"]})]})]})]})}),c.jsx("section",{id:"safety-section",className:"py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[c.jsxs("div",{className:"lg:col-span-6 space-y-6",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400",children:"Decision Support Protocol"}),c.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white",children:"Dynamic Reference Ranges with Zero Speculation."}),c.jsxs("div",{className:"space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed",children:[c.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("h4",{className:"font-bold text-slate-900 dark:text-white mb-1",children:"1. Printed Laboratory Intervals (Highest Priority)"}),c.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:"Different clinical laboratories use different reagent assays and calibration instruments. Orca MedScan automatically detects and respects the reference intervals printed on the report."})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("h4",{className:"font-bold text-slate-900 dark:text-white mb-1",children:"2. Documented Adult Clinical Fallback"}),c.jsxs("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:["When a report omits reference intervals, standard adult clinical ranges are applied and explicitly tagged as ",c.jsx("span",{className:"font-mono text-teal-600",children:"Standard Adult Reference"}),"."]})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("h4",{className:"font-bold text-slate-900 dark:text-white mb-1",children:"3. Non-Speculative Guardrail"}),c.jsxs("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:["Results are strictly categorized as ",c.jsx("span",{className:"text-emerald-600 font-semibold",children:"Normal"}),", ",c.jsx("span",{className:"text-rose-600 font-semibold",children:"Potentially High"}),", ",c.jsx("span",{className:"text-amber-600 font-semibold",children:"Potentially Low"}),", or ",c.jsx("span",{className:"text-slate-500 font-semibold",children:"Review Needed"}),". Hallucinated diagnoses are strictly prohibited."]})]})]})]}),c.jsxs("div",{className:"lg:col-span-6 bg-slate-50 dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4",children:[c.jsxs("div",{className:"flex items-center gap-3 text-amber-600 dark:text-amber-400",children:[c.jsx(Aa,{className:"w-6 h-6"}),c.jsx("h3",{className:"font-bold text-base text-slate-900 dark:text-white",children:"Medical & Clinical Screening Disclaimer"})]}),c.jsxs("p",{className:"text-xs text-slate-600 dark:text-slate-400 leading-relaxed",children:["Orca MedScan is developed for ",c.jsx("strong",{children:"Orcathon 2026"})," (Healthcare & MedTech track). It is an educational and screening prototype designed to assist healthcare professionals and patients with rapid laboratory indicator review."]}),c.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400 leading-relaxed",children:"It does not replace licensed medical consultations, pathology reviews, or emergency medical triaging. Always consult licensed clinical practitioners for diagnostic interpretation."}),c.jsxs("div",{className:"pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500",children:[c.jsx("span",{children:"Orcathon 2026 MedTech Track"}),c.jsx("span",{className:"text-teal-600 dark:text-teal-400 font-bold",children:"16 / 16 Tests Passed"})]})]})]})})}),c.jsx("section",{className:"py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400",children:"Clinical Clarifications"}),c.jsx("h2",{className:"text-3xl font-extrabold text-slate-900 dark:text-white mt-2",children:"Frequently Asked Questions"})]}),c.jsx("div",{className:"space-y-3",children:l.map((u,f)=>{const p=s===f;return c.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden",children:[c.jsxs("button",{onClick:()=>a(p?null:f),className:"w-full flex items-center justify-between p-4 text-left font-semibold text-sm text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors",children:[c.jsx("span",{children:u.q}),c.jsx(fy,{className:`w-4 h-4 transition-transform ${p?"rotate-180":""}`})]}),p&&c.jsx("div",{className:"px-4 pb-4 pt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800",children:u.a})]},u.q)})})]})}),c.jsx("section",{className:"py-20 bg-gradient-to-br from-teal-700 to-slate-900 text-white text-center",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6",children:[c.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold tracking-tight",children:"Ready to Screen Laboratory Reports in the Enclave?"}),c.jsx("p",{className:"text-base text-teal-100 max-w-2xl mx-auto leading-relaxed",children:"Experience high-precision optical character recognition, clinical abbreviation resolution, and dynamic reference comparison with zero cloud exposure."}),c.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 pt-4",children:[c.jsx("button",{onClick:()=>t("signup"),className:"px-6 py-3.5 rounded-xl bg-white text-teal-900 font-bold text-sm shadow-lg hover:bg-teal-50 transition-all hover:scale-105",children:"Get Started with Enclave"}),c.jsx("button",{onClick:e,className:"px-6 py-3.5 rounded-xl bg-teal-800/80 hover:bg-teal-800 border border-teal-500 text-white font-bold text-sm transition-all",children:"⚡ 1-Click Evaluator Benchmark"})]})]})}),c.jsx(eT,{})]})},Bp=({isOpen:t,onClose:e,initialMode:n="login",onSuccess:i})=>{const[r,s]=_e.useState(n),[a,o]=_e.useState(""),[l,u]=_e.useState(""),[f,p]=_e.useState(""),[h,g]=_e.useState(""),[_,y]=_e.useState(""),{login:m,register:d,loginEvaluatorFastPass:x,isLoading:v}=ka();if(!t)return null;const S=async T=>{if(T.preventDefault(),g(""),y(""),r==="login"){const A=await m(a,l);A.success?(i&&i(),e()):g(A.message)}else{const A=await d(a,l,f);A.success?(y("Account registered successfully! You may now sign in."),s("login")):g(A.message)}},R=async()=>{g(""),await x()?(i&&i(),e()):g("Evaluator fast-pass failed.")};return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in",children:c.jsxs("div",{className:"relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 overflow-hidden",children:[c.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",children:c.jsx(Ry,{className:"w-5 h-5"})}),c.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-600/20",children:c.jsx(ci,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-extrabold text-slate-900 dark:text-white",children:r==="login"?"Clinical Enclave Sign In":"Register Practitioner"}),c.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:r==="login"?"Access authenticated laboratory telemetry":"Create an isolated cryptographic enclave account"})]})]}),h&&c.jsx("div",{className:"mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-medium",children:h}),_&&c.jsx("div",{className:"mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-medium",children:_}),c.jsxs("form",{onSubmit:S,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5",children:"Practitioner Email"}),c.jsxs("div",{className:"relative",children:[c.jsx(by,{className:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),c.jsx("input",{type:"email",required:!0,value:a,onChange:T=>o(T.target.value),placeholder:"doctor@hospital.org",className:"w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5",children:"Password"}),c.jsxs("div",{className:"relative",children:[c.jsx(Ln,{className:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),c.jsx("input",{type:"password",required:!0,value:l,onChange:T=>u(T.target.value),placeholder:"••••••••••••",className:"w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"})]}),r==="signup"&&c.jsx("p",{className:"text-[11px] text-slate-500 mt-1",children:"Minimum 8 characters with at least one letter and one number."})]}),r==="signup"&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5",children:"Confirm Password"}),c.jsxs("div",{className:"relative",children:[c.jsx(Ln,{className:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),c.jsx("input",{type:"password",required:!0,value:f,onChange:T=>p(T.target.value),placeholder:"••••••••••••",className:"w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"})]})]}),c.jsxs("button",{type:"submit",disabled:v,className:"w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-2",children:[v?"Processing...":r==="login"?"Sign In to Enclave":"Create Practitioner Account",c.jsx(Bi,{className:"w-4 h-4"})]})]}),c.jsxs("div",{className:"relative my-6 text-center",children:[c.jsx("div",{className:"absolute inset-0 flex items-center",children:c.jsx("div",{className:"w-full border-t border-slate-200 dark:border-slate-800"})}),c.jsx("span",{className:"relative px-3 bg-white dark:bg-slate-900 text-[11px] font-mono text-slate-500 uppercase",children:"OR HACKATHON EVALUATION"})]}),c.jsxs("button",{onClick:R,disabled:v,className:"w-full py-2.5 px-4 rounded-xl border border-teal-500/30 bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-bold text-xs hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors flex items-center justify-center gap-2 shadow-sm",children:[c.jsx(Dl,{className:"w-4 h-4"}),"⚡ 1-Click Evaluator Fast Pass (",eg,")"]}),c.jsx("div",{className:"mt-5 text-center text-xs text-slate-500",children:r==="login"?c.jsxs(c.Fragment,{children:["Need a new practitioner account?"," ",c.jsx("button",{onClick:()=>s("signup"),className:"font-bold text-teal-600 dark:text-teal-400 hover:underline",children:"Register here"})]}):c.jsxs(c.Fragment,{children:["Already registered in enclave?"," ",c.jsx("button",{onClick:()=>s("login"),className:"font-bold text-teal-600 dark:text-teal-400 hover:underline",children:"Sign in"})]})}),c.jsx("div",{className:"mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed text-center font-mono",children:"🔒 NIST PBKDF2-HMAC-SHA256 • 100k Iterations • Local Host Vault"})]})})},nT=({history:t,currentReport:e,onNavigateAnalyze:n,onLoadBenchmark:i,onExportCSV:r,onExportPDF:s})=>{const a=t.length,o=t.reduce((m,d)=>m+d.total_count,0),l=t.reduce((m,d)=>m+d.flagged_count,0),u=t.reduce((m,d)=>m+d.uncertain_count,0),f=t.reduce((m,d)=>m+d.normal_count,0),p=(e==null?void 0:e.records)||[],h=p.filter(m=>m.Category==="flagged"),g=o>0?Math.round(f/o*100):0,_=o>0?Math.round(l/o*100):0,y=o>0?Math.round(u/o*100):0;return c.jsxs("div",{className:"space-y-8 animate-fade-in",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight",children:"Clinical Intelligence Dashboard"}),c.jsx("p",{className:"text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1",children:"Real-time biometric distribution, calibrated reference verification, and anomaly surveillance."})]}),c.jsx("div",{className:"flex items-center gap-3",children:c.jsxs("button",{onClick:n,className:"inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-all",children:[c.jsx(ci,{className:"w-4 h-4"}),"Analyze New Report"]})})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[c.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:translate-y-[-2px]",children:[c.jsxs("div",{className:"flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",children:"Reports Screened"}),c.jsx($d,{className:"w-4 h-4 text-teal-600"})]}),c.jsx("div",{className:"text-3xl font-extrabold text-slate-900 dark:text-white",children:a}),c.jsxs("div",{className:"text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1",children:[c.jsx(xy,{className:"w-3 h-3"})," Active session enclave audits"]})]}),c.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:translate-y-[-2px]",children:[c.jsxs("div",{className:"flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",children:"Biomarkers Screened"}),c.jsx(ci,{className:"w-4 h-4 text-teal-600"})]}),c.jsx("div",{className:"text-3xl font-extrabold text-slate-900 dark:text-white",children:o}),c.jsxs("div",{className:"text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1 font-semibold",children:[f," in reference interval"]})]}),c.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:translate-y-[-2px]",children:[c.jsxs("div",{className:"flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",children:"Out-of-Range Flags"}),c.jsx(Aa,{className:"w-4 h-4 text-rose-600"})]}),c.jsx("div",{className:`text-3xl font-extrabold ${l>0?"text-rose-600 dark:text-rose-400":"text-slate-900 dark:text-white"}`,children:l}),c.jsx("div",{className:"text-[11px] text-slate-500 dark:text-slate-400 mt-1",children:"Potentially High or Low"})]}),c.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:translate-y-[-2px]",children:[c.jsxs("div",{className:"flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",children:"Needs Review"}),c.jsx(gy,{className:"w-4 h-4 text-slate-500"})]}),c.jsx("div",{className:"text-3xl font-extrabold text-slate-900 dark:text-white",children:u}),c.jsx("div",{className:"text-[11px] text-slate-500 dark:text-slate-400 mt-1",children:"Atypical or candidate markers"})]})]}),a===0&&c.jsxs("div",{className:"p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 space-y-4",children:[c.jsx("div",{className:"w-16 h-16 mx-auto rounded-2xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600 text-2xl",children:"📑"}),c.jsx("h3",{className:"text-xl font-bold text-slate-900 dark:text-white",children:"No Medical Reports Screened in this Session"}),c.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed",children:"Upload laboratory reports in any standard format (PDF, PNG, JPG, WEBP, BMP, TIFF) or load the pre-configured benchmark to immediately populate clinical telemetry."}),c.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 pt-2",children:[c.jsx("button",{onClick:n,className:"px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-all",children:"Analyze a Report"}),c.jsx("button",{onClick:i,className:"px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-xs hover:border-teal-500 transition-all",children:"⚡ Load 1-Click Benchmark (16 Biomarkers)"})]})]}),a>0&&c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[c.jsxs("div",{className:"lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h3",{className:"text-base font-bold text-slate-900 dark:text-white",children:"Biomarker Status Distribution"}),c.jsxs("span",{className:"text-xs font-mono text-slate-500",children:[o," total"]})]}),c.jsxs("div",{className:"space-y-4 pt-2",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-xs font-semibold mb-1",children:[c.jsxs("span",{className:"text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5",children:[c.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500"}),"Normal (In Reference Interval)"]}),c.jsxs("span",{className:"font-mono",children:[f," (",g,"%)"]})]}),c.jsx("div",{className:"w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden",children:c.jsx("div",{className:"h-full bg-emerald-500 rounded-full transition-all duration-500",style:{width:`${g}%`}})})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-xs font-semibold mb-1",children:[c.jsxs("span",{className:"text-rose-600 dark:text-rose-400 flex items-center gap-1.5",children:[c.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-rose-500"}),"Potentially High / Low"]}),c.jsxs("span",{className:"font-mono",children:[l," (",_,"%)"]})]}),c.jsx("div",{className:"w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden",children:c.jsx("div",{className:"h-full bg-rose-500 rounded-full transition-all duration-500",style:{width:`${_}%`}})})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-xs font-semibold mb-1",children:[c.jsxs("span",{className:"text-slate-500 dark:text-slate-400 flex items-center gap-1.5",children:[c.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-slate-400"}),"Needs Review / Atypical"]}),c.jsxs("span",{className:"font-mono",children:[u," (",y,"%)"]})]}),c.jsx("div",{className:"w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden",children:c.jsx("div",{className:"h-full bg-slate-400 rounded-full transition-all duration-500",style:{width:`${y}%`}})})]})]}),c.jsx("div",{className:"pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed",children:"💡 Reference comparison priority: Report printed laboratory intervals are applied first. Fallback standard adult norms applied when omitted."})]}),c.jsxs("div",{className:"lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("h3",{className:"text-base font-bold text-slate-900 dark:text-white flex items-center gap-2",children:[c.jsx(Aa,{className:"w-4 h-4 text-rose-500"}),"Priority Out-of-Range Findings"]}),c.jsxs("span",{className:"text-xs text-slate-500 font-mono",children:["Active: ",(e==null?void 0:e.source_name)||"Specimen"]})]}),h.length>0?c.jsx("div",{className:"space-y-3",children:h.slice(0,4).map((m,d)=>{const x=m.Status.includes("High");return c.jsxs("div",{className:`p-3.5 rounded-xl border transition-all ${x?"bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/60":"bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/60"}`,children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"font-bold text-sm text-slate-900 dark:text-white",children:m["Test Name"]}),c.jsxs("span",{className:`text-xs font-bold px-2 py-0.5 rounded-full ${x?"bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-300":"bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300"}`,children:[x?"▲ ":"▼ "," ",m.Status]})]}),c.jsxs("div",{className:"mt-1 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400",children:[c.jsxs("span",{children:["Measured: ",c.jsxs("b",{className:"text-slate-900 dark:text-white font-mono",children:[m["Measured Value"]," ",m.Unit]})]}),c.jsxs("span",{children:["Ref Range: ",m["Reference Range"]," ",m.Unit," (",m["Range Source"],")"]})]}),c.jsx("p",{className:"mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 italic",children:m["Plain Explanation"]})]},d)})}):c.jsxs("div",{className:"p-8 text-center text-slate-500 dark:text-slate-400",children:[c.jsx(yy,{className:"w-8 h-8 text-emerald-500 mx-auto mb-2"}),c.jsx("p",{className:"text-sm font-semibold",children:"All indicators in verified reference ranges."})]})]})]}),e&&c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider",children:"Audited Document Specimen"}),c.jsxs("h3",{className:"text-lg font-bold text-slate-900 dark:text-white",children:[e.source_name," (",e.source_type,")"]})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("button",{onClick:r,className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-teal-500 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors",children:[c.jsx(Es,{className:"w-3.5 h-3.5"})," Export CSV"]}),c.jsxs("button",{onClick:s,className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors shadow-sm",children:[c.jsx(Es,{className:"w-3.5 h-3.5"})," Clinical PDF"]})]})]}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-left text-xs",children:[c.jsx("thead",{className:"bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider border-y border-slate-200 dark:border-slate-800",children:c.jsxs("tr",{children:[c.jsx("th",{className:"py-3 px-4",children:"Test Name"}),c.jsx("th",{className:"py-3 px-4",children:"Measured Value"}),c.jsx("th",{className:"py-3 px-4",children:"Unit"}),c.jsx("th",{className:"py-3 px-4",children:"Reference Range"}),c.jsx("th",{className:"py-3 px-4",children:"Range Calibration"}),c.jsx("th",{className:"py-3 px-4",children:"Clinical Status"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300",children:p.map((m,d)=>{const x=m.Status.includes("High"),v=m.Status.includes("Low"),S=m.Status==="Normal";return c.jsxs("tr",{className:"hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors",children:[c.jsxs("td",{className:"py-3 px-4 font-semibold text-slate-900 dark:text-white",children:[m["Test Name"],c.jsxs("span",{className:"block text-[10px] text-slate-400 font-normal",children:["Original: ",m["Original Label"]]})]}),c.jsx("td",{className:"py-3 px-4 font-mono font-bold text-slate-900 dark:text-white",children:m["Measured Value"]}),c.jsx("td",{className:"py-3 px-4 font-mono text-slate-500",children:m.Unit}),c.jsx("td",{className:"py-3 px-4 font-mono",children:m["Reference Range"]}),c.jsx("td",{className:"py-3 px-4",children:c.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium",children:m["Range Source"]})}),c.jsx("td",{className:"py-3 px-4",children:c.jsxs("span",{className:`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold ${x?"bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900":v?"bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900":S?"bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"}`,children:[x&&"▲ ",v&&"▼ ",S&&"✓ ",m.Status]})})]},d)})})]})})]})]})},iT=({onAddReportToHistory:t,onExportCSV:e,onExportPDF:n})=>{const[i,r]=_e.useState("upload"),[s,a]=_e.useState(""),[o,l]=_e.useState(null),[u,f]=_e.useState(!1),[p,h]=_e.useState(""),[g,_]=_e.useState(""),[y,m]=_e.useState(null),[d,x]=_e.useState(""),[v,S]=_e.useState(""),[R,T]=_e.useState("all"),A=_e.useRef(null),C=F=>{F.target.files&&F.target.files[0]&&(l(F.target.files[0]),x(""))},b=F=>{F.preventDefault(),F.dataTransfer.files&&F.dataTransfer.files[0]&&(l(F.dataTransfer.files[0]),x(""))},M=async()=>{if(o){f(!0),x("");try{const F=new FormData;F.append("file",o);const O=await fetch("/api/analyze/upload",{method:"POST",body:F}),j=await O.json();if(f(!1),!O.ok){x(j.detail||"Extraction failed.");return}const q={id:`AUDIT-${Date.now().toString().slice(-4)}`,timestamp:j.timestamp,source_name:j.source_name,source_type:j.source_type,extraction_method:j.extraction_method,records:j.records,total_count:j.total_count,normal_count:j.normal_count,flagged_count:j.flagged_count,uncertain_count:j.uncertain_count,raw_text:j.raw_text,diagnostics:j.diagnostics};h(j.raw_text),_(j.extraction_method),m(q),t(q)}catch(F){f(!1),x("Network or server error: "+F.message)}}},L=async()=>{if(!s.trim()){x("Please enter or paste report text.");return}f(!0),x("");try{const F=await fetch("/api/analyze/text",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:s,source_label:"Direct Clinical Stream"})}),O=await F.json();if(f(!1),!F.ok){x(O.detail||"Analysis failed.");return}const j={id:`AUDIT-${Date.now().toString().slice(-4)}`,timestamp:O.timestamp,source_name:O.source_name,source_type:O.source_type,extraction_method:O.extraction_method,records:O.records,total_count:O.total_count,normal_count:O.normal_count,flagged_count:O.flagged_count,uncertain_count:O.uncertain_count,raw_text:O.raw_text,diagnostics:O.diagnostics};h(O.raw_text),_(O.extraction_method),m(j),t(j)}catch(F){f(!1),x("Network or server error: "+F.message)}},W=async()=>{f(!0),x("");try{const O=await(await fetch("/api/benchmark")).json();f(!1);const j={id:"AUDIT-BENCH",timestamp:O.timestamp,source_name:O.source_name,source_type:O.source_type,extraction_method:"Synthetic Clinical Benchmark",records:O.records,total_count:O.total_count,normal_count:O.normal_count,flagged_count:O.flagged_count,uncertain_count:O.uncertain_count,raw_text:O.raw_text,diagnostics:O.diagnostics};h(O.raw_text),_("Synthetic Benchmark"),m(j),t(j)}catch(F){f(!1),x("Failed to load benchmark: "+F.message)}},B=((y==null?void 0:y.records)||[]).filter(F=>{const O=F["Test Name"].toLowerCase().includes(v.toLowerCase())||F["Original Label"].toLowerCase().includes(v.toLowerCase());return R==="all"?O:O&&F.Category===R});return c.jsxs("div",{className:"space-y-8 animate-fade-in",children:[c.jsxs("div",{className:"pb-4 border-b border-slate-200 dark:border-slate-800",children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight",children:"Clinical Report Ingestion & Verification"}),c.jsx("p",{className:"text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1",children:"Upload multi-format clinical documents or paste laboratory text for optical character recognition and reference-range screening."})]}),c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5",children:[c.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",children:[c.jsx("span",{className:"text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider",children:"Step 1 • Document Ingestion Zone"}),c.jsxs("div",{className:"flex rounded-lg p-1 bg-slate-100 dark:bg-slate-800 text-xs font-bold",children:[c.jsx("button",{onClick:()=>r("upload"),className:`px-3 py-1 rounded-md transition-all ${i==="upload"?"bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-xs":"text-slate-500"}`,children:"Upload Document"}),c.jsx("button",{onClick:()=>r("paste"),className:`px-3 py-1 rounded-md transition-all ${i==="paste"?"bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-xs":"text-slate-500"}`,children:"Paste Text"}),c.jsx("button",{onClick:()=>r("benchmark"),className:`px-3 py-1 rounded-md transition-all ${i==="benchmark"?"bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-xs":"text-slate-500"}`,children:"1-Click Benchmark"})]})]}),i==="upload"&&c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{onDragOver:F=>F.preventDefault(),onDrop:b,onClick:()=>{var F;return(F=A.current)==null?void 0:F.click()},className:"border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-teal-500 rounded-2xl p-8 text-center cursor-pointer transition-all bg-slate-50/50 dark:bg-slate-950/50",children:[c.jsx("input",{ref:A,type:"file",accept:".pdf,.png,.jpg,.jpeg,.webp,.bmp,.tiff,.tif,.heic",onChange:C,className:"hidden"}),c.jsx(vy,{className:"w-10 h-10 text-teal-600 mx-auto mb-3"}),c.jsx("p",{className:"text-sm font-bold text-slate-800 dark:text-slate-100",children:o?o.name:"Drag and drop medical report here, or click to browse"}),c.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Supported: PDF (digital & scanned OCR), PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC"})]}),o&&c.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800",children:[c.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-teal-900 dark:text-teal-200",children:[c.jsx($d,{className:"w-4 h-4 text-teal-600"}),c.jsxs("span",{children:[o.name," (",(o.size/1024).toFixed(1)," KB)"]})]}),c.jsxs("button",{onClick:M,disabled:u,className:"px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2",children:[u?"Screening Document...":"Run Extraction & Verification",c.jsx(Bi,{className:"w-3.5 h-3.5"})]})]})]}),i==="paste"&&c.jsxs("div",{className:"space-y-4",children:[c.jsx("textarea",{rows:6,value:s,onChange:F=>a(F.target.value),placeholder:"Paste raw laboratory panel, metabolic panel, or pathology text stream...",className:"w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-teal-500"}),c.jsx("div",{className:"flex justify-end",children:c.jsxs("button",{onClick:L,disabled:u||!s.trim(),className:"px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2",children:[u?"Analyzing...":"Parse Clinical Text",c.jsx(Bi,{className:"w-3.5 h-3.5"})]})})]}),i==="benchmark"&&c.jsxs("div",{className:"p-6 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4",children:[c.jsxs("div",{children:[c.jsxs("h4",{className:"font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2",children:[c.jsx(Dl,{className:"w-4 h-4 text-teal-600"}),"Metropolis Pathology Benchmark (MET-98421)"]}),c.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-1",children:"Pre-configured 16-biomarker panel with mixed normal, low, and elevated results."})]}),c.jsx("button",{onClick:W,disabled:u,className:"px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-sm whitespace-nowrap",children:u?"Loading Benchmark...":"Load Benchmark Panel"})]}),d&&c.jsxs("div",{className:"p-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-medium flex items-center gap-2",children:[c.jsx(my,{className:"w-4 h-4 shrink-0"}),c.jsx("span",{children:d})]})]}),p&&c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[c.jsxs("div",{className:"lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase",children:"3D Document Sheet Inspection"}),c.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"POINTER TILT ACTIVE"})]}),c.jsx(yx,{statusText:`INGESTED: ${g}`})]}),c.jsxs("div",{className:"lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("span",{className:"text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase",children:["Extracted Stream Buffer (",g,")"]}),c.jsxs("span",{className:"text-[11px] text-slate-500 font-mono",children:[p.length," chars screened"]})]}),c.jsx("textarea",{rows:11,value:p,onChange:F=>h(F.target.value),className:"w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-teal-500"}),c.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-500 pt-1",children:[c.jsx("span",{children:"Edit any OCR misread character above if needed."}),c.jsx("button",{onClick:()=>{a(p),L()},className:"px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-teal-500 font-bold text-xs text-slate-700 dark:text-slate-300",children:"Re-screen Stream"})]})]})]}),y&&c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider",children:"Step 3 & 4 • Verified Clinical Findings"}),c.jsxs("h3",{className:"text-lg font-bold text-slate-900 dark:text-white",children:[y.source_name," (",y.records.length," Recognized Biomarkers)"]})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("button",{onClick:()=>e(y.records),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-teal-500 text-xs font-bold text-slate-700 dark:text-slate-300",children:[c.jsx(Es,{className:"w-3.5 h-3.5"})," CSV Export"]}),c.jsxs("button",{onClick:()=>n(y,y.records),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-sm",children:[c.jsx(Es,{className:"w-3.5 h-3.5"})," Clinical PDF"]})]})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3",children:[c.jsxs("div",{className:"relative w-full sm:w-72",children:[c.jsx(Ty,{className:"absolute left-3 top-2.5 w-4 h-4 text-slate-400"}),c.jsx("input",{type:"text",value:v,onChange:F=>S(F.target.value),placeholder:"Search biomarker or label...",className:"w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-teal-500"})]}),c.jsxs("div",{className:"flex rounded-lg p-1 bg-slate-100 dark:bg-slate-800 text-xs font-bold w-full sm:w-auto",children:[c.jsxs("button",{onClick:()=>T("all"),className:`flex-1 sm:flex-none px-3 py-1 rounded-md transition-all ${R==="all"?"bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-xs":"text-slate-500"}`,children:["All (",y.records.length,")"]}),c.jsxs("button",{onClick:()=>T("flagged"),className:`flex-1 sm:flex-none px-3 py-1 rounded-md transition-all ${R==="flagged"?"bg-white dark:bg-slate-900 text-rose-600 shadow-xs":"text-slate-500"}`,children:["Out-of-Range (",y.flagged_count,")"]}),c.jsxs("button",{onClick:()=>T("normal"),className:`flex-1 sm:flex-none px-3 py-1 rounded-md transition-all ${R==="normal"?"bg-white dark:bg-slate-900 text-emerald-600 shadow-xs":"text-slate-500"}`,children:["Normal (",y.normal_count,")"]})]})]}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-left text-xs",children:[c.jsx("thead",{className:"bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider border-y border-slate-200 dark:border-slate-800",children:c.jsxs("tr",{children:[c.jsx("th",{className:"py-3 px-4",children:"Standardized Biomarker"}),c.jsx("th",{className:"py-3 px-4",children:"Measured Value"}),c.jsx("th",{className:"py-3 px-4",children:"Unit"}),c.jsx("th",{className:"py-3 px-4",children:"Calibrated Interval"}),c.jsx("th",{className:"py-3 px-4",children:"Calibration Source"}),c.jsx("th",{className:"py-3 px-4",children:"Clinical Classification"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300",children:B.map((F,O)=>{const j=F.Status.includes("High"),q=F.Status.includes("Low"),D=F.Status==="Normal";return c.jsxs("tr",{className:"hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors",children:[c.jsxs("td",{className:"py-3 px-4",children:[c.jsx("div",{className:"font-semibold text-slate-900 dark:text-white",children:F["Test Name"]}),c.jsxs("div",{className:"text-[10px] text-slate-400 font-mono",children:["OCR Matched: ",F["Original Label"]]})]}),c.jsx("td",{className:"py-3 px-4 font-mono font-bold text-slate-900 dark:text-white",children:F["Measured Value"]}),c.jsx("td",{className:"py-3 px-4 font-mono text-slate-500",children:F.Unit}),c.jsx("td",{className:"py-3 px-4 font-mono",children:F["Reference Range"]}),c.jsx("td",{className:"py-3 px-4",children:c.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium",children:F["Range Source"]})}),c.jsx("td",{className:"py-3 px-4",children:c.jsxs("span",{className:`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold ${j?"bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900":q?"bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900":D?"bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"}`,children:[j&&"▲ ",q&&"▼ ",D&&"✓ ",F.Status]})})]},O)})})]})})]})]})},rT=({currentReport:t})=>{if(!t||!t.diagnostics)return c.jsxs("div",{className:"p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3",children:[c.jsx(ci,{className:"w-10 h-10 text-teal-600 mx-auto"}),c.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white",children:"No Extraction Telemetry Active"}),c.jsx("p",{className:"text-xs text-slate-500 max-w-md mx-auto",children:"Ingest and screen a medical document or benchmark panel to view raw OCR output and candidate line telemetry."})]});const{diagnostics:e,source_name:n,raw_text:i,id:r,extraction_method:s}=t;return c.jsxs("div",{className:"space-y-8 animate-fade-in",children:[c.jsxs("div",{className:"pb-4 border-b border-slate-200 dark:border-slate-800",children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight",children:"Extraction Diagnostics & Candidate Telemetry"}),c.jsx("p",{className:"text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1",children:"Inspect raw OCR tokenization, verified mapped lines, and candidate unmatched text segments."})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[c.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-500",children:"Lines Processed"}),c.jsx("div",{className:"text-3xl font-extrabold text-slate-900 dark:text-white mt-1",children:e.total_lines}),c.jsx("div",{className:"text-[11px] text-slate-500 mt-1",children:"Total document text stream lines"})]}),c.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400",children:"Biomarkers Matched"}),c.jsx("div",{className:"text-3xl font-extrabold text-teal-600 dark:text-teal-400 mt-1",children:e.recognized_count}),c.jsx("div",{className:"text-[11px] text-slate-500 mt-1",children:"Deterministic registry mapping"})]}),c.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400",children:"Unmapped Candidate Lines"}),c.jsx("div",{className:"text-3xl font-extrabold text-amber-600 dark:text-amber-400 mt-1",children:e.unrecognized_candidates.length}),c.jsx("div",{className:"text-[11px] text-slate-500 mt-1",children:"Lines with numbers needing review"})]})]}),c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3",children:[c.jsxs("div",{className:"flex items-center gap-2 text-emerald-600 font-bold text-sm",children:[c.jsx(Gt,{className:"w-4 h-4"}),c.jsxs("span",{children:["Recognized Biomarker Labels (",e.recognized_labels.length,")"]})]}),c.jsx("div",{className:"flex flex-wrap gap-2 pt-1",children:e.recognized_labels.map((a,o)=>c.jsx("span",{className:"px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",children:a},o))})]}),c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3",children:[c.jsxs("div",{className:"flex items-center gap-2 text-amber-600 font-bold text-sm",children:[c.jsx(Aa,{className:"w-4 h-4"}),c.jsxs("span",{children:["Candidate Unmatched Lines (",e.unrecognized_candidates.length,")"]})]}),c.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:"Lines containing numeric values or possible test names that were not mapped to the central medical registry:"}),e.unrecognized_candidates.length>0?c.jsx("div",{className:"space-y-2 pt-1",children:e.unrecognized_candidates.map((a,o)=>c.jsx("div",{className:"p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-800 dark:text-slate-200",children:a},o))}):c.jsx("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 text-xs font-semibold text-emerald-600 dark:text-emerald-400",children:"Zero unmapped candidate lines detected. All clinical rows parsed cleanly."})]}),c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm",children:[c.jsx(_y,{className:"w-4 h-4 text-teal-600"}),c.jsxs("span",{children:["Full Raw Ingested Text Stream (",s,")"]})]}),c.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Audit ID: ",r]})]}),c.jsx("textarea",{readOnly:!0,rows:10,value:i,className:"w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-mono text-xs focus:outline-none"})]})]})},sT=({history:t,onSelectAudit:e,onClearHistory:n,onExportCSV:i,onExportPDF:r})=>{const[s,a]=_e.useState(t.length>0?t[0].id:null),o=t.find(l=>l.id===s)||(t.length>0?t[0]:null);return t.length===0?c.jsxs("div",{className:"p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3",children:[c.jsx(Ag,{className:"w-10 h-10 text-teal-600 mx-auto"}),c.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white",children:"No Historical Audits in this Session"}),c.jsx("p",{className:"text-xs text-slate-500 max-w-md mx-auto",children:"Audit entries are generated automatically as laboratory reports are ingested and verified."})]}):c.jsxs("div",{className:"space-y-8 animate-fade-in",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight",children:"Session Audit History"}),c.jsx("p",{className:"text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1",children:"Complete audit trail of all laboratory documents screened during the active session enclave."})]}),c.jsxs("button",{onClick:n,className:"inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors",children:[c.jsx(Gu,{className:"w-3.5 h-3.5"})," Clear Session Cache"]})]}),c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4",children:[c.jsxs("h3",{className:"text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400",children:["Screened Document Audits (",t.length,")"]}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-left text-xs",children:[c.jsx("thead",{className:"bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider border-y border-slate-200 dark:border-slate-800",children:c.jsxs("tr",{children:[c.jsx("th",{className:"py-3 px-4",children:"Audit ID"}),c.jsx("th",{className:"py-3 px-4",children:"Timestamp"}),c.jsx("th",{className:"py-3 px-4",children:"Specimen Document"}),c.jsx("th",{className:"py-3 px-4",children:"Format"}),c.jsx("th",{className:"py-3 px-4",children:"Screened"}),c.jsx("th",{className:"py-3 px-4",children:"Out-of-Range"}),c.jsx("th",{className:"py-3 px-4",children:"Normal"}),c.jsx("th",{className:"py-3 px-4 text-right",children:"Actions"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300",children:t.map(l=>{const u=s===l.id;return c.jsxs("tr",{onClick:()=>a(l.id),className:`cursor-pointer transition-colors ${u?"bg-teal-50/70 dark:bg-teal-950/40 font-semibold":"hover:bg-slate-50/50 dark:hover:bg-slate-800/40"}`,children:[c.jsx("td",{className:"py-3 px-4 font-mono text-teal-600 dark:text-teal-400",children:l.id}),c.jsx("td",{className:"py-3 px-4 font-mono text-slate-500",children:l.timestamp}),c.jsx("td",{className:"py-3 px-4 font-medium text-slate-900 dark:text-white",children:l.source_name}),c.jsx("td",{className:"py-3 px-4",children:c.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono",children:l.source_type})}),c.jsx("td",{className:"py-3 px-4 font-mono font-bold",children:l.total_count}),c.jsx("td",{className:"py-3 px-4 font-mono text-rose-600 font-bold",children:l.flagged_count}),c.jsx("td",{className:"py-3 px-4 font-mono text-emerald-600",children:l.normal_count}),c.jsx("td",{className:"py-3 px-4 text-right",children:c.jsx("button",{onClick:f=>{f.stopPropagation(),a(l.id),e(l)},className:"px-2.5 py-1 rounded bg-teal-600 text-white text-[11px] font-bold hover:bg-teal-700 transition-colors",children:"Inspect"})})]},l.id)})})]})})]}),o&&c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800",children:[c.jsxs("div",{children:[c.jsxs("span",{className:"text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase",children:["Historical Audit Inspector • ",o.id]}),c.jsxs("h3",{className:"text-lg font-bold text-slate-900 dark:text-white",children:[o.source_name," (",o.timestamp,")"]})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("button",{onClick:()=>i(o.records),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:border-teal-500",children:[c.jsx(Es,{className:"w-3.5 h-3.5"})," CSV Export"]}),c.jsxs("button",{onClick:()=>r(o,o.records),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold",children:[c.jsx(Es,{className:"w-3.5 h-3.5"})," Clinical PDF"]})]})]}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-left text-xs",children:[c.jsx("thead",{className:"bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider border-y border-slate-200 dark:border-slate-800",children:c.jsxs("tr",{children:[c.jsx("th",{className:"py-2.5 px-3",children:"Test Name"}),c.jsx("th",{className:"py-2.5 px-3",children:"Measured Value"}),c.jsx("th",{className:"py-2.5 px-3",children:"Unit"}),c.jsx("th",{className:"py-2.5 px-3",children:"Reference Range"}),c.jsx("th",{className:"py-2.5 px-3",children:"Range Source"}),c.jsx("th",{className:"py-2.5 px-3",children:"Status"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300",children:o.records.map((l,u)=>c.jsxs("tr",{children:[c.jsx("td",{className:"py-2.5 px-3 font-semibold text-slate-900 dark:text-white",children:l["Test Name"]}),c.jsx("td",{className:"py-2.5 px-3 font-mono font-bold text-slate-900 dark:text-white",children:l["Measured Value"]}),c.jsx("td",{className:"py-2.5 px-3 font-mono text-slate-500",children:l.Unit}),c.jsx("td",{className:"py-2.5 px-3 font-mono",children:l["Reference Range"]}),c.jsx("td",{className:"py-2.5 px-3",children:l["Range Source"]}),c.jsx("td",{className:"py-2.5 px-3 font-bold",children:c.jsx("span",{className:l.Status.includes("High")?"text-rose-600":l.Status.includes("Low")?"text-amber-600":"text-emerald-600",children:l.Status})})]},u))})]})})]})]})},aT=({onClearSessionCache:t,historyCount:e})=>{const{user:n}=ka(),[i,r]=_e.useState("vault"),[s,a]=_e.useState(null);return _e.useEffect(()=>{fetch("/api/system/status").then(o=>o.json()).then(o=>a(o)).catch(o=>console.error("Error fetching system status:",o))},[]),c.jsxs("div",{className:"space-y-8 animate-fade-in",children:[c.jsxs("div",{className:"pb-4 border-b border-slate-200 dark:border-slate-800",children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight",children:"System Settings & Enclave Vault"}),c.jsx("p",{className:"text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1",children:"Inspect cryptographic vault integrity, OCR engine telemetry, and manage session cache."})]}),c.jsxs("div",{className:"flex border-b border-slate-200 dark:border-slate-800 space-x-6 text-sm font-bold",children:[c.jsxs("button",{onClick:()=>r("vault"),className:`pb-3 transition-colors relative flex items-center gap-2 ${i==="vault"?"text-teal-600 dark:text-teal-400 border-b-2 border-teal-500":"text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`,children:[c.jsx(Ln,{className:"w-4 h-4"})," Cryptographic Enclave"]}),c.jsxs("button",{onClick:()=>r("engine"),className:`pb-3 transition-colors relative flex items-center gap-2 ${i==="engine"?"text-teal-600 dark:text-teal-400 border-b-2 border-teal-500":"text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`,children:[c.jsx(mg,{className:"w-4 h-4"})," Optical Engine & Formats"]}),c.jsxs("button",{onClick:()=>r("session"),className:`pb-3 transition-colors relative flex items-center gap-2 ${i==="session"?"text-teal-600 dark:text-teal-400 border-b-2 border-teal-500":"text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`,children:[c.jsx(Gu,{className:"w-4 h-4"})," Session Cache"]})]}),i==="vault"&&c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4",children:[c.jsxs("h3",{className:"text-base font-bold text-slate-900 dark:text-white flex items-center gap-2",children:[c.jsx(My,{className:"w-4 h-4 text-teal-600"}),"Active Practitioner Identity"]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs",children:[c.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("span",{className:"text-slate-500 uppercase font-bold",children:"Email"}),c.jsx("p",{className:"font-semibold text-slate-900 dark:text-white mt-0.5 truncate",children:n==null?void 0:n.email})]}),c.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("span",{className:"text-slate-500 uppercase font-bold",children:"Role"}),c.jsx("p",{className:"font-semibold text-teal-600 dark:text-teal-400 mt-0.5",children:(n==null?void 0:n.role)||"Lead Clinical Evaluator"})]}),c.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("span",{className:"text-slate-500 uppercase font-bold",children:"Session State"}),c.jsx("p",{className:"font-semibold text-emerald-600 mt-0.5",children:"Authenticated (Local)"})]})]})]}),c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4",children:[c.jsxs("h3",{className:"text-base font-bold text-slate-900 dark:text-white flex items-center gap-2",children:[c.jsx(Ln,{className:"w-4 h-4 text-teal-600"}),"Cryptographic Parameters"]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-4 text-center",children:[c.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("span",{className:"text-xs text-slate-500 uppercase font-bold",children:"Algorithm"}),c.jsx("p",{className:"text-lg font-mono font-bold text-slate-900 dark:text-white mt-1",children:"PBKDF2-SHA256"})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("span",{className:"text-xs text-slate-500 uppercase font-bold",children:"Key Iterations"}),c.jsx("p",{className:"text-lg font-mono font-bold text-teal-600 dark:text-teal-400 mt-1",children:"100,000"})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("span",{className:"text-xs text-slate-500 uppercase font-bold",children:"Salt Entropy"}),c.jsx("p",{className:"text-lg font-mono font-bold text-slate-900 dark:text-white mt-1",children:"256-bit CSPRNG"})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("span",{className:"text-xs text-slate-500 uppercase font-bold",children:"Vault Users"}),c.jsx("p",{className:"text-lg font-mono font-bold text-slate-900 dark:text-white mt-1",children:(s==null?void 0:s.vault.registered_practitioners)||1})]})]}),c.jsxs("p",{className:"text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-2",children:["💡 ",c.jsx("strong",{children:"Enclave Security Boundary"}),": All credentials are saved in host storage at ",c.jsx("code",{className:"font-mono text-teal-600",children:(s==null?void 0:s.vault.vault_path)||"data/.auth_vault.json"})," with zero cloud transmissions."]})]})]}),i==="engine"&&c.jsx("div",{className:"space-y-6",children:c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4",children:[c.jsxs("h3",{className:"text-base font-bold text-slate-900 dark:text-white flex items-center gap-2",children:[c.jsx(Ay,{className:"w-4 h-4 text-teal-600"}),"Optical Engine Telemetry"]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs",children:[c.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("span",{className:"text-slate-500 uppercase font-bold",children:"Tesseract OCR"}),c.jsxs("p",{className:"font-mono font-bold text-emerald-600 mt-1 flex items-center gap-1",children:[c.jsx(Gt,{className:"w-3.5 h-3.5"}),s!=null&&s.tesseract.available?"Active (Local Binary)":"Not Found"]}),c.jsx("span",{className:"text-[10px] text-slate-400 font-mono mt-1 block truncate",children:s==null?void 0:s.tesseract.binary_path})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("span",{className:"text-slate-500 uppercase font-bold",children:"HEIF / HEIC Decoder"}),c.jsxs("p",{className:"font-mono font-bold text-emerald-600 mt-1 flex items-center gap-1",children:[c.jsx(Gt,{className:"w-3.5 h-3.5"})," Active (pillow-heif)"]}),c.jsx("span",{className:"text-[10px] text-slate-400 font-mono mt-1 block",children:"Apple iPhone Live Specimen Support"})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("span",{className:"text-slate-500 uppercase font-bold",children:"ReportLab PDF Engine"}),c.jsxs("p",{className:"font-mono font-bold text-emerald-600 mt-1 flex items-center gap-1",children:[c.jsx(Gt,{className:"w-3.5 h-3.5"})," Active (ReportLab v4.x)"]}),c.jsx("span",{className:"text-[10px] text-slate-400 font-mono mt-1 block",children:"Clinical Summary Generator"})]})]})]})}),i==="session"&&c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4",children:[c.jsxs("h3",{className:"text-base font-bold text-slate-900 dark:text-white flex items-center gap-2",children:[c.jsx(Gu,{className:"w-4 h-4 text-rose-500"}),"Session Data & Cache Purge"]}),c.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400 leading-relaxed",children:"Orca MedScan maintains session audits purely in memory. Clearing the session cache wipes all scanned reports, candidate telemetry, and historical entries from the browser memory."}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between",children:[c.jsxs("span",{className:"text-xs font-mono font-bold text-slate-700 dark:text-slate-300",children:["Active Session Audits: ",e," reports"]}),c.jsx("button",{onClick:t,className:"px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-sm",children:"Purge Session Cache"})]})]})]})},oT=()=>c.jsxs("div",{className:"space-y-8 animate-fade-in max-w-4xl",children:[c.jsxs("div",{className:"pb-4 border-b border-slate-200 dark:border-slate-800",children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight",children:"Clinical Safety, Methodology & Enclave Architecture"}),c.jsx("p",{className:"text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1",children:"Detailed specification of the non-speculative screening guardrail, reference calibration rules, and zero-cloud data sovereignty."})]}),c.jsxs("div",{className:"space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed",children:[c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3",children:[c.jsxs("h3",{className:"text-base font-bold text-slate-900 dark:text-white flex items-center gap-2",children:[c.jsx(dy,{className:"w-5 h-5 text-teal-600"}),"1. Purpose & Clinical Scope"]}),c.jsxs("p",{className:"text-xs text-slate-600 dark:text-slate-400 leading-relaxed",children:[c.jsx("strong",{children:"Orca MedScan"})," is a clinical decision-support and screening prototype developed for ",c.jsx("strong",{children:"Orcathon 2026"})," (Healthcare & MedTech track). Its engineering philosophy bridges the gap between dense, unstructured laboratory reports and rapid, actionable clinical review without exposing sensitive patient health records to third-party cloud APIs."]})]}),c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4",children:[c.jsxs("h3",{className:"text-base font-bold text-slate-900 dark:text-white flex items-center gap-2",children:[c.jsx(Lg,{className:"w-5 h-5 text-teal-600"}),"2. Dynamic Reference Interval Prioritization"]}),c.jsxs("div",{className:"space-y-3 text-xs",children:[c.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("strong",{className:"text-slate-900 dark:text-white",children:"A. Printed Laboratory Ranges (Highest Priority)"}),c.jsx("p",{className:"text-slate-500 dark:text-slate-400 mt-1",children:"Clinical laboratories calibrate analyzers with specific assay reagents. Orca MedScan automatically detects and respects reference ranges printed directly on the patient report."})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("strong",{className:"text-slate-900 dark:text-white",children:"B. Documented Adult Clinical Standard (Fallback)"}),c.jsxs("p",{className:"text-slate-500 dark:text-slate-400 mt-1",children:["When a report omits reference intervals, standard adult clinical ranges are applied and explicitly tagged as ",c.jsx("span",{className:"font-mono text-teal-600",children:"Standard Adult Reference"}),"."]})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[c.jsx("strong",{className:"text-slate-900 dark:text-white",children:"C. Conservative Classification"}),c.jsx("p",{className:"text-slate-500 dark:text-slate-400 mt-1",children:"Results are strictly categorized as Normal, Potentially High, Potentially Low, or Review Needed. Speculative clinical diagnoses are deliberately prohibited."})]})]})]}),c.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3",children:[c.jsxs("h3",{className:"text-base font-bold text-slate-900 dark:text-white flex items-center gap-2",children:[c.jsx(Ln,{className:"w-5 h-5 text-teal-600"}),"3. Privacy-Preserving Enclave Architecture"]}),c.jsxs("ul",{className:"space-y-2 text-xs text-slate-600 dark:text-slate-400",children:[c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx(Gt,{className:"w-4 h-4 text-teal-600"}),c.jsx("strong",{children:"100% Local Execution:"})," All digital parsing, OCR, and reference interval comparisons execute in host memory."]}),c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx(Gt,{className:"w-4 h-4 text-teal-600"}),c.jsx("strong",{children:"Zero External API Exposure:"})," Patient identifiers, test results, and blood panel scans are never sent over the internet or forwarded to remote LLMs."]}),c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx(Gt,{className:"w-4 h-4 text-teal-600"}),c.jsx("strong",{children:"PBKDF2-HMAC-SHA256 Vault:"})," Cryptographic password protection conforming to NIST recommendations."]})]})]}),c.jsxs("div",{className:"p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2",children:[c.jsxs("div",{className:"flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm",children:[c.jsx(Aa,{className:"w-5 h-5"}),c.jsx("span",{children:"Official Medical Screening Disclaimer"})]}),c.jsx("p",{className:"text-xs text-amber-900/80 dark:text-amber-300/80 leading-relaxed",children:"This application is an educational and screening prototype. It does not provide medical diagnoses, treatment plans, or emergency clinical triaging. Patients should always consult licensed healthcare providers for diagnostic interpretation."})]})]})]}),lT=()=>{const{isAuthenticated:t,loginEvaluatorFastPass:e}=ka(),[n,i]=_e.useState("landing"),[r,s]=_e.useState("Dashboard"),[a,o]=_e.useState(!1),[l,u]=_e.useState("login"),[f,p]=_e.useState(!1),[h,g]=_e.useState(()=>{try{const C=localStorage.getItem("orca_audits");return C?JSON.parse(C):[]}catch{return[]}}),[_,y]=_e.useState(()=>h.length>0?h[h.length-1]:null),[m,d]=_e.useState(!0);_e.useEffect(()=>{try{localStorage.setItem("orca_audits",JSON.stringify(h))}catch(C){console.error("Error saving audits to localStorage:",C)}},[h]),_e.useEffect(()=>{t&&n==="landing"&&i("app")},[t]),_e.useEffect(()=>{fetch("/api/system/status").then(C=>C.json()).then(C=>{C&&C.tesseract&&d(C.tesseract.available)}).catch(()=>d(!0))},[]);const x=C=>{u(C),o(!0)},v=C=>{g(b=>[...b,C]),y(C)},S=()=>{g([]),y(null),localStorage.removeItem("orca_audits")},R=async()=>{t||await e();try{const b=await(await fetch("/api/benchmark")).json(),M={id:"AUDIT-BENCH",timestamp:b.timestamp,source_name:b.source_name,source_type:b.source_type,extraction_method:"Synthetic Clinical Benchmark",records:b.records,total_count:b.total_count,normal_count:b.normal_count,flagged_count:b.flagged_count,uncertain_count:b.uncertain_count,raw_text:b.raw_text,diagnostics:b.diagnostics};v(M),i("app"),s("Dashboard")}catch(C){console.error("Failed to load benchmark:",C)}},T=async C=>{const b=C||(_==null?void 0:_.records)||[];if(b.length)try{const L=await(await fetch("/api/export/csv",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:b})})).blob(),W=window.URL.createObjectURL(L),B=document.createElement("a");B.href=W,B.download=`orca_biomarkers_${(_==null?void 0:_.id)||"export"}.csv`,document.body.appendChild(B),B.click(),B.remove()}catch(M){console.error("Error downloading CSV:",M)}},A=async(C,b)=>{const M=C||_||{id:"AUDIT",source_name:"Medical Specimen"},L=b||(_==null?void 0:_.records)||[];if(L.length)try{const B=await(await fetch("/api/export/pdf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({meta:M,records:L})})).blob(),F=window.URL.createObjectURL(B),O=document.createElement("a");O.href=F,O.download=`orca_clinical_summary_${M.id||"export"}.pdf`,document.body.appendChild(O),O.click(),O.remove()}catch(W){console.error("Error downloading PDF:",W)}};return n==="landing"||!t?c.jsxs("div",{className:"min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col",children:[c.jsx(Ly,{onOpenAuth:x,onGoToApp:()=>i("app")}),c.jsx("main",{className:"flex-1",children:c.jsx(tT,{onOpenAuth:x,onLaunchBenchmark:R,onExploreWorkflow:()=>{const C=document.getElementById("workflow-section");C&&C.scrollIntoView({behavior:"smooth"})}})}),c.jsx(Bp,{isOpen:a,onClose:()=>o(!1),initialMode:l,onSuccess:()=>i("app")})]}):c.jsxs("div",{className:"min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex",children:[c.jsx(ky,{currentView:r,onSelectView:C=>s(C),auditCount:h.length,ocrActive:m,onLoadBenchmark:R,isCollapsed:f,onToggleCollapse:()=>p(!f)}),c.jsxs("div",{className:`flex-1 transition-all duration-300 min-h-screen flex flex-col ${f?"ml-16":"ml-64"}`,children:[c.jsxs("header",{className:"h-16 px-6 sm:px-8 border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md flex items-center justify-between sticky top-0 z-30",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xs font-mono font-bold uppercase text-teal-600 dark:text-teal-400",children:"Active Workspace"}),c.jsx("span",{className:"text-slate-400",children:"/"}),c.jsx("span",{className:"text-sm font-bold text-slate-800 dark:text-slate-200",children:r})]}),c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("button",{onClick:()=>i("landing"),className:"text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors",children:"Public Overview"}),c.jsx("button",{onClick:()=>{s("Analyze Report")},className:"px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-all",children:"+ Ingest Report"})]})]}),c.jsxs("main",{className:"flex-1 p-6 sm:p-8 max-w-7xl w-full mx-auto",children:[r==="Dashboard"&&c.jsx(nT,{history:h,currentReport:_,onNavigateAnalyze:()=>s("Analyze Report"),onLoadBenchmark:R,onExportCSV:()=>T(),onExportPDF:()=>A()}),r==="Analyze Report"&&c.jsx(iT,{onAddReportToHistory:v,onExportCSV:T,onExportPDF:A}),r==="Extraction Diagnostics"&&c.jsx(rT,{currentReport:_}),r==="Report History"&&c.jsx(sT,{history:h,onSelectAudit:C=>{y(C),s("Dashboard")},onClearHistory:S,onExportCSV:T,onExportPDF:A}),r==="Settings"&&c.jsx(aT,{onClearSessionCache:S,historyCount:h.length}),r==="Clinical Safety"&&c.jsx(oT,{})]})]}),c.jsx(Bp,{isOpen:a,onClose:()=>o(!1),initialMode:l,onSuccess:()=>i("app")})]})};Kc.createRoot(document.getElementById("root")).render(c.jsx(jx.StrictMode,{children:c.jsx(Py,{children:c.jsx(ey,{children:c.jsx(lT,{})})})}));
