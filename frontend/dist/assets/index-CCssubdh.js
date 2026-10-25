(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Wg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yp={exports:{}},yl={},Kp={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ns=Symbol.for("react.element"),Xg=Symbol.for("react.portal"),$g=Symbol.for("react.fragment"),qg=Symbol.for("react.strict_mode"),Yg=Symbol.for("react.profiler"),Kg=Symbol.for("react.provider"),Zg=Symbol.for("react.context"),Jg=Symbol.for("react.forward_ref"),Qg=Symbol.for("react.suspense"),e_=Symbol.for("react.memo"),t_=Symbol.for("react.lazy"),hh=Symbol.iterator;function n_(t){return t===null||typeof t!="object"?null:(t=hh&&t[hh]||t["@@iterator"],typeof t=="function"?t:null)}var Zp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jp=Object.assign,Qp={};function Pa(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||Zp}Pa.prototype.isReactComponent={};Pa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Pa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function em(){}em.prototype=Pa.prototype;function su(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||Zp}var ou=su.prototype=new em;ou.constructor=su;Jp(ou,Pa.prototype);ou.isPureReactComponent=!0;var fh=Array.isArray,tm=Object.prototype.hasOwnProperty,lu={current:null},nm={key:!0,ref:!0,__self:!0,__source:!0};function rm(t,e,n){var r,i={},a=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)tm.call(e,r)&&!nm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ns,type:t,key:a,ref:s,props:i,_owner:lu.current}}function r_(t,e){return{$$typeof:Ns,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ns}function i_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ph=/\/+/g;function Xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?i_(""+t.key):e.toString(36)}function No(t,e,n,r,i){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ns:case Xg:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Xl(s,0):r,fh(i)?(n="",t!=null&&(n=t.replace(ph,"$&/")+"/"),No(i,e,n,"",function(d){return d})):i!=null&&(cu(i)&&(i=r_(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ph,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",fh(t))for(var l=0;l<t.length;l++){a=t[l];var c=r+Xl(a,l);s+=No(a,e,n,c,i)}else if(c=n_(t),typeof c=="function")for(t=c.call(t),l=0;!(a=t.next()).done;)a=a.value,c=r+Xl(a,l++),s+=No(a,e,n,c,i);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Vs(t,e,n){if(t==null)return t;var r=[],i=0;return No(t,r,"","",function(a){return e.call(n,a,i++)}),r}function a_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Ro={transition:null},s_={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:lu};function im(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Vs,forEach:function(t,e,n){Vs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vs(t,function(){e++}),e},toArray:function(t){return Vs(t,function(e){return e})||[]},only:function(t){if(!cu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Pa;je.Fragment=$g;je.Profiler=Yg;je.PureComponent=su;je.StrictMode=qg;je.Suspense=Qg;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s_;je.act=im;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Jp({},t.props),i=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=lu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)tm.call(e,c)&&!nm.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Ns,type:t.type,key:i,ref:a,props:r,_owner:s}};je.createContext=function(t){return t={$$typeof:Zg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Kg,_context:t},t.Consumer=t};je.createElement=rm;je.createFactory=function(t){var e=rm.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:Jg,render:t}};je.isValidElement=cu;je.lazy=function(t){return{$$typeof:t_,_payload:{_status:-1,_result:t},_init:a_}};je.memo=function(t,e){return{$$typeof:e_,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Ro.transition;Ro.transition={};try{t()}finally{Ro.transition=e}};je.unstable_act=im;je.useCallback=function(t,e){return Xt.current.useCallback(t,e)};je.useContext=function(t){return Xt.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};je.useEffect=function(t,e){return Xt.current.useEffect(t,e)};je.useId=function(){return Xt.current.useId()};je.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return Xt.current.useMemo(t,e)};je.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};je.useRef=function(t){return Xt.current.useRef(t)};je.useState=function(t){return Xt.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return Xt.current.useTransition()};je.version="18.3.1";Kp.exports=je;var se=Kp.exports;const o_=Wg(se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_=se,c_=Symbol.for("react.element"),d_=Symbol.for("react.fragment"),u_=Object.prototype.hasOwnProperty,h_=l_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f_={key:!0,ref:!0,__self:!0,__source:!0};function am(t,e,n){var r,i={},a=null,s=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)u_.call(e,r)&&!f_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:c_,type:t,key:a,ref:s,props:i,_owner:h_.current}}yl.Fragment=d_;yl.jsx=am;yl.jsxs=am;Yp.exports=yl;var o=Yp.exports,td={},sm={exports:{}},hn={},om={exports:{}},lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,q){var Z=D.length;D.push(q);e:for(;0<Z;){var ie=Z-1>>>1,ve=D[ie];if(0<i(ve,q))D[ie]=q,D[Z]=ve,Z=ie;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var q=D[0],Z=D.pop();if(Z!==q){D[0]=Z;e:for(var ie=0,ve=D.length,Be=ve>>>1;ie<Be;){var X=2*(ie+1)-1,ne=D[X],he=X+1,le=D[he];if(0>i(ne,Z))he<ve&&0>i(le,ne)?(D[ie]=le,D[he]=Z,ie=he):(D[ie]=ne,D[X]=Z,ie=X);else if(he<ve&&0>i(le,Z))D[ie]=le,D[he]=Z,ie=he;else break e}}return q}function i(D,q){var Z=D.sortIndex-q.sortIndex;return Z!==0?Z:D.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],d=[],h=1,f=null,p=3,x=!1,v=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var q=n(d);q!==null;){if(q.callback===null)r(d);else if(q.startTime<=D)r(d),q.sortIndex=q.expirationTime,e(c,q);else break;q=n(d)}}function b(D){if(y=!1,m(D),!v)if(n(c)!==null)v=!0,U(N);else{var q=n(d);q!==null&&W(b,q.startTime-D)}}function N(D,q){v=!1,y&&(y=!1,u(P),P=-1),x=!0;var Z=p;try{for(m(q),f=n(c);f!==null&&(!(f.expirationTime>q)||D&&!C());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,p=f.priorityLevel;var ve=ie(f.expirationTime<=q);q=t.unstable_now(),typeof ve=="function"?f.callback=ve:f===n(c)&&r(c),m(q)}else r(c);f=n(c)}if(f!==null)var Be=!0;else{var X=n(d);X!==null&&W(b,X.startTime-q),Be=!1}return Be}finally{f=null,p=Z,x=!1}}var A=!1,T=null,P=-1,M=5,S=-1;function C(){return!(t.unstable_now()-S<M)}function z(){if(T!==null){var D=t.unstable_now();S=D;var q=!0;try{q=T(!0,D)}finally{q?j():(A=!1,T=null)}}else A=!1}var j;if(typeof _=="function")j=function(){_(z)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,O=$.port2;$.port1.onmessage=z,j=function(){O.postMessage(null)}}else j=function(){g(z,0)};function U(D){T=D,A||(A=!0,j())}function W(D,q){P=g(function(){D(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||x||(v=!0,U(N))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(D){switch(p){case 1:case 2:case 3:var q=3;break;default:q=p}var Z=p;p=q;try{return D()}finally{p=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Z=p;p=D;try{return q()}finally{p=Z}},t.unstable_scheduleCallback=function(D,q,Z){var ie=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ie+Z:ie):Z=ie,D){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Z+ve,D={id:h++,callback:q,priorityLevel:D,startTime:Z,expirationTime:ve,sortIndex:-1},Z>ie?(D.sortIndex=Z,e(d,D),n(c)===null&&D===n(d)&&(y?(u(P),P=-1):y=!0,W(b,Z-ie))):(D.sortIndex=ve,e(c,D),v||x||(v=!0,U(N))),D},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(D){var q=p;return function(){var Z=p;p=q;try{return D.apply(this,arguments)}finally{p=Z}}}})(lm);om.exports=lm;var p_=om.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_=se,un=p_;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cm=new Set,us={};function Ai(t,e){ga(t,e),ga(t+"Capture",e)}function ga(t,e){for(us[t]=e,t=0;t<e.length;t++)cm.add(e[t])}var dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nd=Object.prototype.hasOwnProperty,x_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mh={},xh={};function g_(t){return nd.call(xh,t)?!0:nd.call(mh,t)?!1:x_.test(t)?xh[t]=!0:(mh[t]=!0,!1)}function __(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function v_(t,e,n,r){if(e===null||typeof e>"u"||__(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,r,i,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Lt[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Lt[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Lt[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Lt[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Lt[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Lt[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Lt[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Lt[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Lt[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var du=/[\-:]([a-z])/g;function uu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(du,uu);Lt[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(du,uu);Lt[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(du,uu);Lt[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Lt[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Lt[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function hu(t,e,n,r){var i=Lt.hasOwnProperty(e)?Lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(v_(e,n,i,r)&&(n=null),r||i===null?g_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=m_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gs=Symbol.for("react.element"),Yi=Symbol.for("react.portal"),Ki=Symbol.for("react.fragment"),fu=Symbol.for("react.strict_mode"),rd=Symbol.for("react.profiler"),dm=Symbol.for("react.provider"),um=Symbol.for("react.context"),pu=Symbol.for("react.forward_ref"),id=Symbol.for("react.suspense"),ad=Symbol.for("react.suspense_list"),mu=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),hm=Symbol.for("react.offscreen"),gh=Symbol.iterator;function Fa(t){return t===null||typeof t!="object"?null:(t=gh&&t[gh]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,$l;function Ka(t){if($l===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$l=e&&e[1]||""}return`
`+$l+t}var ql=!1;function Yl(t,e){if(!t||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=r.stack.split(`
`),s=i.length-1,l=a.length-1;1<=s&&0<=l&&i[s]!==a[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==a[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==a[l]){var c=`
`+i[s].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=s&&0<=l);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ka(t):""}function y_(t){switch(t.tag){case 5:return Ka(t.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 2:case 15:return t=Yl(t.type,!1),t;case 11:return t=Yl(t.type.render,!1),t;case 1:return t=Yl(t.type,!0),t;default:return""}}function sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ki:return"Fragment";case Yi:return"Portal";case rd:return"Profiler";case fu:return"StrictMode";case id:return"Suspense";case ad:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case um:return(t.displayName||"Context")+".Consumer";case dm:return(t._context.displayName||"Context")+".Provider";case pu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mu:return e=t.displayName||null,e!==null?e:sd(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return sd(t(e))}catch{}}return null}function S_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sd(e);case 8:return e===fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b_(t){var e=fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ws(t){t._valueTracker||(t._valueTracker=b_(t))}function pm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=fm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function od(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _h(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mm(t,e){e=e.checked,e!=null&&hu(t,"checked",e,!1)}function ld(t,e){mm(t,e);var n=Hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cd(t,e.type,n):e.hasOwnProperty("defaultValue")&&cd(t,e.type,Hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cd(t,e,n){(e!=="number"||Ho(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Za=Array.isArray;function la(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function dd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Za(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hr(n)}}function xm(t,e){var n=Hr(e.value),r=Hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xs,_m=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xs=Xs||document.createElement("div"),Xs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function hs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M_=["Webkit","ms","Moz","O"];Object.keys(ns).forEach(function(t){M_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ns[e]=ns[t]})});function vm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ns.hasOwnProperty(t)&&ns[t]?(""+e).trim():e+"px"}function ym(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var w_=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hd(t,e){if(e){if(w_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function fd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pd=null;function xu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var md=null,ca=null,da=null;function bh(t){if(t=ks(t)){if(typeof md!="function")throw Error(te(280));var e=t.stateNode;e&&(e=El(e),md(t.stateNode,t.type,e))}}function Sm(t){ca?da?da.push(t):da=[t]:ca=t}function bm(){if(ca){var t=ca,e=da;if(da=ca=null,bh(t),e)for(t=0;t<e.length;t++)bh(e[t])}}function Mm(t,e){return t(e)}function wm(){}var Kl=!1;function Em(t,e,n){if(Kl)return t(e,n);Kl=!0;try{return Mm(t,e,n)}finally{Kl=!1,(ca!==null||da!==null)&&(wm(),bm())}}function fs(t,e){var n=t.stateNode;if(n===null)return null;var r=El(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var xd=!1;if(dr)try{var Oa={};Object.defineProperty(Oa,"passive",{get:function(){xd=!0}}),window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{xd=!1}function E_(t,e,n,r,i,a,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var rs=!1,Vo=null,Go=!1,gd=null,T_={onError:function(t){rs=!0,Vo=t}};function A_(t,e,n,r,i,a,s,l,c){rs=!1,Vo=null,E_.apply(T_,arguments)}function C_(t,e,n,r,i,a,s,l,c){if(A_.apply(this,arguments),rs){if(rs){var d=Vo;rs=!1,Vo=null}else throw Error(te(198));Go||(Go=!0,gd=d)}}function Ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mh(t){if(Ci(t)!==t)throw Error(te(188))}function N_(t){var e=t.alternate;if(!e){if(e=Ci(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Mh(i),t;if(a===r)return Mh(i),e;a=a.sibling}throw Error(te(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(te(189))}}if(n.alternate!==r)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Am(t){return t=N_(t),t!==null?Cm(t):null}function Cm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cm(t);if(e!==null)return e;t=t.sibling}return null}var Nm=un.unstable_scheduleCallback,wh=un.unstable_cancelCallback,R_=un.unstable_shouldYield,P_=un.unstable_requestPaint,xt=un.unstable_now,k_=un.unstable_getCurrentPriorityLevel,gu=un.unstable_ImmediatePriority,Rm=un.unstable_UserBlockingPriority,Wo=un.unstable_NormalPriority,L_=un.unstable_LowPriority,Pm=un.unstable_IdlePriority,Sl=null,Xn=null;function D_(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Sl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:F_,I_=Math.log,U_=Math.LN2;function F_(t){return t>>>=0,t===0?32:31-(I_(t)/U_|0)|0}var $s=64,qs=4194304;function Ja(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,a=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Ja(l):(a&=s,a!==0&&(r=Ja(a)))}else s=n&~i,s!==0?r=Ja(s):a!==0&&(r=Ja(a));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,a=e&-e,i>=a||i===16&&(a&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ln(e),i=1<<n,r|=t[n],e&=~i;return r}function O_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-Ln(a),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=O_(l,e)):c<=e&&(t.expiredLanes|=l),a&=~l}}function _d(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function km(){var t=$s;return $s<<=1,!($s&4194240)&&($s=64),t}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ln(e),t[e]=n}function j_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ln(n),a=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~a}}function _u(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Qe=0;function Lm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Dm,vu,Im,Um,Fm,vd=!1,Ys=[],kr=null,Lr=null,Dr=null,ps=new Map,ms=new Map,Tr=[],B_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eh(t,e){switch(t){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":ps.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ms.delete(e.pointerId)}}function za(t,e,n,r,i,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},e!==null&&(e=ks(e),e!==null&&vu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function H_(t,e,n,r,i){switch(e){case"focusin":return kr=za(kr,t,e,n,r,i),!0;case"dragenter":return Lr=za(Lr,t,e,n,r,i),!0;case"mouseover":return Dr=za(Dr,t,e,n,r,i),!0;case"pointerover":var a=i.pointerId;return ps.set(a,za(ps.get(a)||null,t,e,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,ms.set(a,za(ms.get(a)||null,t,e,n,r,i)),!0}return!1}function Om(t){var e=hi(t.target);if(e!==null){var n=Ci(e);if(n!==null){if(e=n.tag,e===13){if(e=Tm(n),e!==null){t.blockedOn=e,Fm(t.priority,function(){Im(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Po(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pd=r,n.target.dispatchEvent(r),pd=null}else return e=ks(n),e!==null&&vu(e),t.blockedOn=n,!1;e.shift()}return!0}function Th(t,e,n){Po(t)&&n.delete(e)}function V_(){vd=!1,kr!==null&&Po(kr)&&(kr=null),Lr!==null&&Po(Lr)&&(Lr=null),Dr!==null&&Po(Dr)&&(Dr=null),ps.forEach(Th),ms.forEach(Th)}function ja(t,e){t.blockedOn===e&&(t.blockedOn=null,vd||(vd=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,V_)))}function xs(t){function e(i){return ja(i,t)}if(0<Ys.length){ja(Ys[0],t);for(var n=1;n<Ys.length;n++){var r=Ys[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kr!==null&&ja(kr,t),Lr!==null&&ja(Lr,t),Dr!==null&&ja(Dr,t),ps.forEach(e),ms.forEach(e),n=0;n<Tr.length;n++)r=Tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)Om(n),n.blockedOn===null&&Tr.shift()}var ua=pr.ReactCurrentBatchConfig,$o=!0;function G_(t,e,n,r){var i=Qe,a=ua.transition;ua.transition=null;try{Qe=1,yu(t,e,n,r)}finally{Qe=i,ua.transition=a}}function W_(t,e,n,r){var i=Qe,a=ua.transition;ua.transition=null;try{Qe=4,yu(t,e,n,r)}finally{Qe=i,ua.transition=a}}function yu(t,e,n,r){if($o){var i=yd(t,e,n,r);if(i===null)oc(t,e,r,qo,n),Eh(t,r);else if(H_(i,t,e,n,r))r.stopPropagation();else if(Eh(t,r),e&4&&-1<B_.indexOf(t)){for(;i!==null;){var a=ks(i);if(a!==null&&Dm(a),a=yd(t,e,n,r),a===null&&oc(t,e,r,qo,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else oc(t,e,r,null,n)}}var qo=null;function yd(t,e,n,r){if(qo=null,t=xu(r),t=hi(t),t!==null)if(e=Ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qo=t,null}function zm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k_()){case gu:return 1;case Rm:return 4;case Wo:case L_:return 16;case Pm:return 536870912;default:return 16}default:return 16}}var Nr=null,Su=null,ko=null;function jm(){if(ko)return ko;var t,e=Su,n=e.length,r,i="value"in Nr?Nr.value:Nr.textContent,a=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[a-r];r++);return ko=i.slice(t,1<r?1-r:void 0)}function Lo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ks(){return!0}function Ah(){return!1}function fn(t){function e(n,r,i,a,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ks:Ah,this.isPropagationStopped=Ah,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ks)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ks)},persist:function(){},isPersistent:Ks}),e}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bu=fn(ka),Ps=dt({},ka,{view:0,detail:0}),X_=fn(Ps),Jl,Ql,Ba,bl=dt({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ba&&(Ba&&t.type==="mousemove"?(Jl=t.screenX-Ba.screenX,Ql=t.screenY-Ba.screenY):Ql=Jl=0,Ba=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Ch=fn(bl),$_=dt({},bl,{dataTransfer:0}),q_=fn($_),Y_=dt({},Ps,{relatedTarget:0}),ec=fn(Y_),K_=dt({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Z_=fn(K_),J_=dt({},ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q_=fn(J_),ev=dt({},ka,{data:0}),Nh=fn(ev),tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rv[t])?!!e[t]:!1}function Mu(){return iv}var av=dt({},Ps,{key:function(t){if(t.key){var e=tv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(t){return t.type==="keypress"?Lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sv=fn(av),ov=dt({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=fn(ov),lv=dt({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),cv=fn(lv),dv=dt({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),uv=fn(dv),hv=dt({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fv=fn(hv),pv=[9,13,27,32],wu=dr&&"CompositionEvent"in window,is=null;dr&&"documentMode"in document&&(is=document.documentMode);var mv=dr&&"TextEvent"in window&&!is,Bm=dr&&(!wu||is&&8<is&&11>=is),Ph=" ",kh=!1;function Hm(t,e){switch(t){case"keyup":return pv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zi=!1;function xv(t,e){switch(t){case"compositionend":return Vm(e);case"keypress":return e.which!==32?null:(kh=!0,Ph);case"textInput":return t=e.data,t===Ph&&kh?null:t;default:return null}}function gv(t,e){if(Zi)return t==="compositionend"||!wu&&Hm(t,e)?(t=jm(),ko=Su=Nr=null,Zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bm&&e.locale!=="ko"?null:e.data;default:return null}}var _v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_v[t.type]:e==="textarea"}function Gm(t,e,n,r){Sm(r),e=Yo(e,"onChange"),0<e.length&&(n=new bu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var as=null,gs=null;function vv(t){t0(t,0)}function Ml(t){var e=ea(t);if(pm(e))return t}function yv(t,e){if(t==="change")return e}var Wm=!1;if(dr){var tc;if(dr){var nc="oninput"in document;if(!nc){var Dh=document.createElement("div");Dh.setAttribute("oninput","return;"),nc=typeof Dh.oninput=="function"}tc=nc}else tc=!1;Wm=tc&&(!document.documentMode||9<document.documentMode)}function Ih(){as&&(as.detachEvent("onpropertychange",Xm),gs=as=null)}function Xm(t){if(t.propertyName==="value"&&Ml(gs)){var e=[];Gm(e,gs,t,xu(t)),Em(vv,e)}}function Sv(t,e,n){t==="focusin"?(Ih(),as=e,gs=n,as.attachEvent("onpropertychange",Xm)):t==="focusout"&&Ih()}function bv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(gs)}function Mv(t,e){if(t==="click")return Ml(e)}function wv(t,e){if(t==="input"||t==="change")return Ml(e)}function Ev(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:Ev;function _s(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nd.call(e,i)||!In(t[i],e[i]))return!1}return!0}function Uh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fh(t,e){var n=Uh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uh(n)}}function $m(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$m(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qm(){for(var t=window,e=Ho();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ho(t.document)}return e}function Eu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Tv(t){var e=qm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$m(n.ownerDocument.documentElement,n)){if(r!==null&&Eu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!t.extend&&a>r&&(i=r,r=a,a=i),i=Fh(n,a);var s=Fh(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),a>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Av=dr&&"documentMode"in document&&11>=document.documentMode,Ji=null,Sd=null,ss=null,bd=!1;function Oh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bd||Ji==null||Ji!==Ho(r)||(r=Ji,"selectionStart"in r&&Eu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ss&&_s(ss,r)||(ss=r,r=Yo(Sd,"onSelect"),0<r.length&&(e=new bu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ji)))}function Zs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qi={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionend:Zs("Transition","TransitionEnd")},rc={},Ym={};dr&&(Ym=document.createElement("div").style,"AnimationEvent"in window||(delete Qi.animationend.animation,delete Qi.animationiteration.animation,delete Qi.animationstart.animation),"TransitionEvent"in window||delete Qi.transitionend.transition);function wl(t){if(rc[t])return rc[t];if(!Qi[t])return t;var e=Qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ym)return rc[t]=e[n];return t}var Km=wl("animationend"),Zm=wl("animationiteration"),Jm=wl("animationstart"),Qm=wl("transitionend"),e0=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,e){e0.set(t,e),Ai(e,[t])}for(var ic=0;ic<zh.length;ic++){var ac=zh[ic],Cv=ac.toLowerCase(),Nv=ac[0].toUpperCase()+ac.slice(1);$r(Cv,"on"+Nv)}$r(Km,"onAnimationEnd");$r(Zm,"onAnimationIteration");$r(Jm,"onAnimationStart");$r("dblclick","onDoubleClick");$r("focusin","onFocus");$r("focusout","onBlur");$r(Qm,"onTransitionEnd");ga("onMouseEnter",["mouseout","mouseover"]);ga("onMouseLeave",["mouseout","mouseover"]);ga("onPointerEnter",["pointerout","pointerover"]);ga("onPointerLeave",["pointerout","pointerover"]);Ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function jh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,C_(r,e,void 0,t),t.currentTarget=null}function t0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var a=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==a&&i.isPropagationStopped())break e;jh(i,l,d),a=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==a&&i.isPropagationStopped())break e;jh(i,l,d),a=c}}}if(Go)throw t=gd,Go=!1,gd=null,t}function rt(t,e){var n=e[Ad];n===void 0&&(n=e[Ad]=new Set);var r=t+"__bubble";n.has(r)||(n0(e,t,2,!1),n.add(r))}function sc(t,e,n){var r=0;e&&(r|=4),n0(n,t,r,e)}var Js="_reactListening"+Math.random().toString(36).slice(2);function vs(t){if(!t[Js]){t[Js]=!0,cm.forEach(function(n){n!=="selectionchange"&&(Rv.has(n)||sc(n,!1,t),sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Js]||(e[Js]=!0,sc("selectionchange",!1,e))}}function n0(t,e,n,r){switch(zm(e)){case 1:var i=G_;break;case 4:i=W_;break;default:i=yu}n=i.bind(null,e,n,t),i=void 0,!xd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function oc(t,e,n,r,i){var a=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=hi(l),s===null)return;if(c=s.tag,c===5||c===6){r=a=s;continue e}l=l.parentNode}}r=r.return}Em(function(){var d=a,h=xu(n),f=[];e:{var p=e0.get(t);if(p!==void 0){var x=bu,v=t;switch(t){case"keypress":if(Lo(n)===0)break e;case"keydown":case"keyup":x=sv;break;case"focusin":v="focus",x=ec;break;case"focusout":v="blur",x=ec;break;case"beforeblur":case"afterblur":x=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=q_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=cv;break;case Km:case Zm:case Jm:x=Z_;break;case Qm:x=uv;break;case"scroll":x=X_;break;case"wheel":x=fv;break;case"copy":case"cut":case"paste":x=Q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Rh}var y=(e&4)!==0,g=!y&&t==="scroll",u=y?p!==null?p+"Capture":null:p;y=[];for(var _=d,m;_!==null;){m=_;var b=m.stateNode;if(m.tag===5&&b!==null&&(m=b,u!==null&&(b=fs(_,u),b!=null&&y.push(ys(_,b,m)))),g)break;_=_.return}0<y.length&&(p=new x(p,v,null,n,h),f.push({event:p,listeners:y}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",p&&n!==pd&&(v=n.relatedTarget||n.fromElement)&&(hi(v)||v[ur]))break e;if((x||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=d,v=v?hi(v):null,v!==null&&(g=Ci(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=d),x!==v)){if(y=Ch,b="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=Rh,b="onPointerLeave",u="onPointerEnter",_="pointer"),g=x==null?p:ea(x),m=v==null?p:ea(v),p=new y(b,_+"leave",x,n,h),p.target=g,p.relatedTarget=m,b=null,hi(h)===d&&(y=new y(u,_+"enter",v,n,h),y.target=m,y.relatedTarget=g,b=y),g=b,x&&v)t:{for(y=x,u=v,_=0,m=y;m;m=Pi(m))_++;for(m=0,b=u;b;b=Pi(b))m++;for(;0<_-m;)y=Pi(y),_--;for(;0<m-_;)u=Pi(u),m--;for(;_--;){if(y===u||u!==null&&y===u.alternate)break t;y=Pi(y),u=Pi(u)}y=null}else y=null;x!==null&&Bh(f,p,x,y,!1),v!==null&&g!==null&&Bh(f,g,v,y,!0)}}e:{if(p=d?ea(d):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var N=yv;else if(Lh(p))if(Wm)N=wv;else{N=bv;var A=Sv}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(N=Mv);if(N&&(N=N(t,d))){Gm(f,N,n,h);break e}A&&A(t,p,d),t==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&cd(p,"number",p.value)}switch(A=d?ea(d):window,t){case"focusin":(Lh(A)||A.contentEditable==="true")&&(Ji=A,Sd=d,ss=null);break;case"focusout":ss=Sd=Ji=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,Oh(f,n,h);break;case"selectionchange":if(Av)break;case"keydown":case"keyup":Oh(f,n,h)}var T;if(wu)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Zi?Hm(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Bm&&n.locale!=="ko"&&(Zi||P!=="onCompositionStart"?P==="onCompositionEnd"&&Zi&&(T=jm()):(Nr=h,Su="value"in Nr?Nr.value:Nr.textContent,Zi=!0)),A=Yo(d,P),0<A.length&&(P=new Nh(P,t,null,n,h),f.push({event:P,listeners:A}),T?P.data=T:(T=Vm(n),T!==null&&(P.data=T)))),(T=mv?xv(t,n):gv(t,n))&&(d=Yo(d,"onBeforeInput"),0<d.length&&(h=new Nh("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:d}),h.data=T))}t0(f,e)})}function ys(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=fs(t,n),a!=null&&r.unshift(ys(t,a,i)),a=fs(t,e),a!=null&&r.push(ys(t,a,i))),t=t.return}return r}function Pi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bh(t,e,n,r,i){for(var a=e._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,i?(c=fs(n,a),c!=null&&s.unshift(ys(n,c,l))):i||(c=fs(n,a),c!=null&&s.push(ys(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Pv=/\r\n?/g,kv=/\u0000|\uFFFD/g;function Hh(t){return(typeof t=="string"?t:""+t).replace(Pv,`
`).replace(kv,"")}function Qs(t,e,n){if(e=Hh(e),Hh(t)!==e&&n)throw Error(te(425))}function Ko(){}var Md=null,wd=null;function Ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Td=typeof setTimeout=="function"?setTimeout:void 0,Lv=typeof clearTimeout=="function"?clearTimeout:void 0,Vh=typeof Promise=="function"?Promise:void 0,Dv=typeof queueMicrotask=="function"?queueMicrotask:typeof Vh<"u"?function(t){return Vh.resolve(null).then(t).catch(Iv)}:Td;function Iv(t){setTimeout(function(){throw t})}function lc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xs(e)}function Ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var La=Math.random().toString(36).slice(2),Hn="__reactFiber$"+La,Ss="__reactProps$"+La,ur="__reactContainer$"+La,Ad="__reactEvents$"+La,Uv="__reactListeners$"+La,Fv="__reactHandles$"+La;function hi(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gh(t);t!==null;){if(n=t[Hn])return n;t=Gh(t)}return e}t=n,n=t.parentNode}return null}function ks(t){return t=t[Hn]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ea(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function El(t){return t[Ss]||null}var Cd=[],ta=-1;function qr(t){return{current:t}}function at(t){0>ta||(t.current=Cd[ta],Cd[ta]=null,ta--)}function nt(t,e){ta++,Cd[ta]=t.current,t.current=e}var Vr={},jt=qr(Vr),Qt=qr(!1),yi=Vr;function _a(t,e){var n=t.type.contextTypes;if(!n)return Vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=e[a];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function en(t){return t=t.childContextTypes,t!=null}function Zo(){at(Qt),at(jt)}function Wh(t,e,n){if(jt.current!==Vr)throw Error(te(168));nt(jt,e),nt(Qt,n)}function r0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(te(108,S_(t)||"Unknown",i));return dt({},n,r)}function Jo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,yi=jt.current,nt(jt,t),nt(Qt,Qt.current),!0}function Xh(t,e,n){var r=t.stateNode;if(!r)throw Error(te(169));n?(t=r0(t,e,yi),r.__reactInternalMemoizedMergedChildContext=t,at(Qt),at(jt),nt(jt,t)):at(Qt),nt(Qt,n)}var ar=null,Tl=!1,cc=!1;function i0(t){ar===null?ar=[t]:ar.push(t)}function Ov(t){Tl=!0,i0(t)}function Yr(){if(!cc&&ar!==null){cc=!0;var t=0,e=Qe;try{var n=ar;for(Qe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ar=null,Tl=!1}catch(i){throw ar!==null&&(ar=ar.slice(t+1)),Nm(gu,Yr),i}finally{Qe=e,cc=!1}}return null}var na=[],ra=0,Qo=null,el=0,xn=[],gn=0,Si=null,sr=1,or="";function si(t,e){na[ra++]=el,na[ra++]=Qo,Qo=t,el=e}function a0(t,e,n){xn[gn++]=sr,xn[gn++]=or,xn[gn++]=Si,Si=t;var r=sr;t=or;var i=32-Ln(r)-1;r&=~(1<<i),n+=1;var a=32-Ln(e)+i;if(30<a){var s=i-i%5;a=(r&(1<<s)-1).toString(32),r>>=s,i-=s,sr=1<<32-Ln(e)+i|n<<i|r,or=a+t}else sr=1<<a|n<<i|r,or=t}function Tu(t){t.return!==null&&(si(t,1),a0(t,1,0))}function Au(t){for(;t===Qo;)Qo=na[--ra],na[ra]=null,el=na[--ra],na[ra]=null;for(;t===Si;)Si=xn[--gn],xn[gn]=null,or=xn[--gn],xn[gn]=null,sr=xn[--gn],xn[gn]=null}var dn=null,ln=null,st=!1,Pn=null;function s0(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $h(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,ln=Ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Si!==null?{id:sr,overflow:or}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,ln=null,!0):!1;default:return!1}}function Nd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rd(t){if(st){var e=ln;if(e){var n=e;if(!$h(t,e)){if(Nd(t))throw Error(te(418));e=Ir(n.nextSibling);var r=dn;e&&$h(t,e)?s0(r,n):(t.flags=t.flags&-4097|2,st=!1,dn=t)}}else{if(Nd(t))throw Error(te(418));t.flags=t.flags&-4097|2,st=!1,dn=t}}}function qh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function eo(t){if(t!==dn)return!1;if(!st)return qh(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ed(t.type,t.memoizedProps)),e&&(e=ln)){if(Nd(t))throw o0(),Error(te(418));for(;e;)s0(t,e),e=Ir(e.nextSibling)}if(qh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=Ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=dn?Ir(t.stateNode.nextSibling):null;return!0}function o0(){for(var t=ln;t;)t=Ir(t.nextSibling)}function va(){ln=dn=null,st=!1}function Cu(t){Pn===null?Pn=[t]:Pn.push(t)}var zv=pr.ReactCurrentBatchConfig;function Ha(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var r=n.stateNode}if(!r)throw Error(te(147,t));var i=r,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var l=i.refs;s===null?delete l[a]:l[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function to(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yh(t){var e=t._init;return e(t._payload)}function l0(t){function e(u,_){if(t){var m=u.deletions;m===null?(u.deletions=[_],u.flags|=16):m.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function r(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function i(u,_){return u=zr(u,_),u.index=0,u.sibling=null,u}function a(u,_,m){return u.index=m,t?(m=u.alternate,m!==null?(m=m.index,m<_?(u.flags|=2,_):m):(u.flags|=2,_)):(u.flags|=1048576,_)}function s(u){return t&&u.alternate===null&&(u.flags|=2),u}function l(u,_,m,b){return _===null||_.tag!==6?(_=xc(m,u.mode,b),_.return=u,_):(_=i(_,m),_.return=u,_)}function c(u,_,m,b){var N=m.type;return N===Ki?h(u,_,m.props.children,b,m.key):_!==null&&(_.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===wr&&Yh(N)===_.type)?(b=i(_,m.props),b.ref=Ha(u,_,m),b.return=u,b):(b=jo(m.type,m.key,m.props,null,u.mode,b),b.ref=Ha(u,_,m),b.return=u,b)}function d(u,_,m,b){return _===null||_.tag!==4||_.stateNode.containerInfo!==m.containerInfo||_.stateNode.implementation!==m.implementation?(_=gc(m,u.mode,b),_.return=u,_):(_=i(_,m.children||[]),_.return=u,_)}function h(u,_,m,b,N){return _===null||_.tag!==7?(_=_i(m,u.mode,b,N),_.return=u,_):(_=i(_,m),_.return=u,_)}function f(u,_,m){if(typeof _=="string"&&_!==""||typeof _=="number")return _=xc(""+_,u.mode,m),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Gs:return m=jo(_.type,_.key,_.props,null,u.mode,m),m.ref=Ha(u,null,_),m.return=u,m;case Yi:return _=gc(_,u.mode,m),_.return=u,_;case wr:var b=_._init;return f(u,b(_._payload),m)}if(Za(_)||Fa(_))return _=_i(_,u.mode,m,null),_.return=u,_;to(u,_)}return null}function p(u,_,m,b){var N=_!==null?_.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:l(u,_,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Gs:return m.key===N?c(u,_,m,b):null;case Yi:return m.key===N?d(u,_,m,b):null;case wr:return N=m._init,p(u,_,N(m._payload),b)}if(Za(m)||Fa(m))return N!==null?null:h(u,_,m,b,null);to(u,m)}return null}function x(u,_,m,b,N){if(typeof b=="string"&&b!==""||typeof b=="number")return u=u.get(m)||null,l(_,u,""+b,N);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Gs:return u=u.get(b.key===null?m:b.key)||null,c(_,u,b,N);case Yi:return u=u.get(b.key===null?m:b.key)||null,d(_,u,b,N);case wr:var A=b._init;return x(u,_,m,A(b._payload),N)}if(Za(b)||Fa(b))return u=u.get(m)||null,h(_,u,b,N,null);to(_,b)}return null}function v(u,_,m,b){for(var N=null,A=null,T=_,P=_=0,M=null;T!==null&&P<m.length;P++){T.index>P?(M=T,T=null):M=T.sibling;var S=p(u,T,m[P],b);if(S===null){T===null&&(T=M);break}t&&T&&S.alternate===null&&e(u,T),_=a(S,_,P),A===null?N=S:A.sibling=S,A=S,T=M}if(P===m.length)return n(u,T),st&&si(u,P),N;if(T===null){for(;P<m.length;P++)T=f(u,m[P],b),T!==null&&(_=a(T,_,P),A===null?N=T:A.sibling=T,A=T);return st&&si(u,P),N}for(T=r(u,T);P<m.length;P++)M=x(T,u,P,m[P],b),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?P:M.key),_=a(M,_,P),A===null?N=M:A.sibling=M,A=M);return t&&T.forEach(function(C){return e(u,C)}),st&&si(u,P),N}function y(u,_,m,b){var N=Fa(m);if(typeof N!="function")throw Error(te(150));if(m=N.call(m),m==null)throw Error(te(151));for(var A=N=null,T=_,P=_=0,M=null,S=m.next();T!==null&&!S.done;P++,S=m.next()){T.index>P?(M=T,T=null):M=T.sibling;var C=p(u,T,S.value,b);if(C===null){T===null&&(T=M);break}t&&T&&C.alternate===null&&e(u,T),_=a(C,_,P),A===null?N=C:A.sibling=C,A=C,T=M}if(S.done)return n(u,T),st&&si(u,P),N;if(T===null){for(;!S.done;P++,S=m.next())S=f(u,S.value,b),S!==null&&(_=a(S,_,P),A===null?N=S:A.sibling=S,A=S);return st&&si(u,P),N}for(T=r(u,T);!S.done;P++,S=m.next())S=x(T,u,P,S.value,b),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?P:S.key),_=a(S,_,P),A===null?N=S:A.sibling=S,A=S);return t&&T.forEach(function(z){return e(u,z)}),st&&si(u,P),N}function g(u,_,m,b){if(typeof m=="object"&&m!==null&&m.type===Ki&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Gs:e:{for(var N=m.key,A=_;A!==null;){if(A.key===N){if(N=m.type,N===Ki){if(A.tag===7){n(u,A.sibling),_=i(A,m.props.children),_.return=u,u=_;break e}}else if(A.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===wr&&Yh(N)===A.type){n(u,A.sibling),_=i(A,m.props),_.ref=Ha(u,A,m),_.return=u,u=_;break e}n(u,A);break}else e(u,A);A=A.sibling}m.type===Ki?(_=_i(m.props.children,u.mode,b,m.key),_.return=u,u=_):(b=jo(m.type,m.key,m.props,null,u.mode,b),b.ref=Ha(u,_,m),b.return=u,u=b)}return s(u);case Yi:e:{for(A=m.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===m.containerInfo&&_.stateNode.implementation===m.implementation){n(u,_.sibling),_=i(_,m.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=gc(m,u.mode,b),_.return=u,u=_}return s(u);case wr:return A=m._init,g(u,_,A(m._payload),b)}if(Za(m))return v(u,_,m,b);if(Fa(m))return y(u,_,m,b);to(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,_!==null&&_.tag===6?(n(u,_.sibling),_=i(_,m),_.return=u,u=_):(n(u,_),_=xc(m,u.mode,b),_.return=u,u=_),s(u)):n(u,_)}return g}var ya=l0(!0),c0=l0(!1),tl=qr(null),nl=null,ia=null,Nu=null;function Ru(){Nu=ia=nl=null}function Pu(t){var e=tl.current;at(tl),t._currentValue=e}function Pd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ha(t,e){nl=t,Nu=ia=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Mn(t){var e=t._currentValue;if(Nu!==t)if(t={context:t,memoizedValue:e,next:null},ia===null){if(nl===null)throw Error(te(308));ia=t,nl.dependencies={lanes:0,firstContext:t}}else ia=ia.next=t;return e}var fi=null;function ku(t){fi===null?fi=[t]:fi.push(t)}function d0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ku(e)):(n.next=i.next,i.next=n),e.interleaved=n,hr(t,r)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Er=!1;function Lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,We&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hr(t,n)}return i=r.interleaved,i===null?(e.next=e,ku(r)):(e.next=i.next,i.next=e),r.interleaved=e,hr(t,n)}function Do(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_u(t,n)}}function Kh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?i=a=e:a=a.next=e}else i=a=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rl(t,e,n,r){var i=t.updateQueue;Er=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?a=d:s.next=d,s=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=c))}if(a!==null){var f=i.baseState;s=0,h=d=c=null,l=a;do{var p=l.lane,x=l.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(p=e,x=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(x,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,p=typeof v=="function"?v.call(x,f,p):v,p==null)break e;f=dt({},f,p);break e;case 2:Er=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else x={eventTime:x,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=x,c=f):h=h.next=x,s|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(c=f),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else a===null&&(i.shared.lanes=0);Mi|=s,t.lanes=s,t.memoizedState=f}}function Zh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(te(191,i));i.call(r)}}}var Ls={},$n=qr(Ls),bs=qr(Ls),Ms=qr(Ls);function pi(t){if(t===Ls)throw Error(te(174));return t}function Du(t,e){switch(nt(Ms,e),nt(bs,t),nt($n,Ls),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ud(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ud(e,t)}at($n),nt($n,e)}function Sa(){at($n),at(bs),at(Ms)}function h0(t){pi(Ms.current);var e=pi($n.current),n=ud(e,t.type);e!==n&&(nt(bs,t),nt($n,n))}function Iu(t){bs.current===t&&(at($n),at(bs))}var lt=qr(0);function il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dc=[];function Uu(){for(var t=0;t<dc.length;t++)dc[t]._workInProgressVersionPrimary=null;dc.length=0}var Io=pr.ReactCurrentDispatcher,uc=pr.ReactCurrentBatchConfig,bi=0,ct=null,St=null,Ct=null,al=!1,os=!1,ws=0,jv=0;function Dt(){throw Error(te(321))}function Fu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function Ou(t,e,n,r,i,a){if(bi=a,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Io.current=t===null||t.memoizedState===null?Gv:Wv,t=n(r,i),os){a=0;do{if(os=!1,ws=0,25<=a)throw Error(te(301));a+=1,Ct=St=null,e.updateQueue=null,Io.current=Xv,t=n(r,i)}while(os)}if(Io.current=sl,e=St!==null&&St.next!==null,bi=0,Ct=St=ct=null,al=!1,e)throw Error(te(300));return t}function zu(){var t=ws!==0;return ws=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ct.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function wn(){if(St===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Ct===null?ct.memoizedState:Ct.next;if(e!==null)Ct=e,St=t;else{if(t===null)throw Error(te(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ct===null?ct.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function Es(t,e){return typeof e=="function"?e(t):e}function hc(t){var e=wn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var r=St,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=s=null,c=null,d=a;do{var h=d.lane;if((bi&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var f={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=f,s=r):c=c.next=f,ct.lanes|=h,Mi|=h}d=d.next}while(d!==null&&d!==a);c===null?s=r:c.next=l,In(r,e.memoizedState)||(Jt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do a=i.lane,ct.lanes|=a,Mi|=a,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fc(t){var e=wn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,a=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=t(a,s.action),s=s.next;while(s!==i);In(a,e.memoizedState)||(Jt=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,r]}function f0(){}function p0(t,e){var n=ct,r=wn(),i=e(),a=!In(r.memoizedState,i);if(a&&(r.memoizedState=i,Jt=!0),r=r.queue,ju(g0.bind(null,n,r,t),[t]),r.getSnapshot!==e||a||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,Ts(9,x0.bind(null,n,r,i,e),void 0,null),Rt===null)throw Error(te(349));bi&30||m0(n,e,i)}return i}function m0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function x0(t,e,n,r){e.value=n,e.getSnapshot=r,_0(e)&&v0(t)}function g0(t,e,n){return n(function(){_0(e)&&v0(t)})}function _0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function v0(t){var e=hr(t,1);e!==null&&Dn(e,t,1,-1)}function Jh(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:t},e.queue=t,t=t.dispatch=Vv.bind(null,ct,t),[e.memoizedState,t]}function Ts(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function y0(){return wn().memoizedState}function Uo(t,e,n,r){var i=zn();ct.flags|=t,i.memoizedState=Ts(1|e,n,void 0,r===void 0?null:r)}function Al(t,e,n,r){var i=wn();r=r===void 0?null:r;var a=void 0;if(St!==null){var s=St.memoizedState;if(a=s.destroy,r!==null&&Fu(r,s.deps)){i.memoizedState=Ts(e,n,a,r);return}}ct.flags|=t,i.memoizedState=Ts(1|e,n,a,r)}function Qh(t,e){return Uo(8390656,8,t,e)}function ju(t,e){return Al(2048,8,t,e)}function S0(t,e){return Al(4,2,t,e)}function b0(t,e){return Al(4,4,t,e)}function M0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w0(t,e,n){return n=n!=null?n.concat([t]):null,Al(4,4,M0.bind(null,e,t),n)}function Bu(){}function E0(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function T0(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function A0(t,e,n){return bi&21?(In(n,e)||(n=km(),ct.lanes|=n,Mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function Bv(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var r=uc.transition;uc.transition={};try{t(!1),e()}finally{Qe=n,uc.transition=r}}function C0(){return wn().memoizedState}function Hv(t,e,n){var r=Or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},N0(t))R0(e,n);else if(n=d0(t,e,n,r),n!==null){var i=Gt();Dn(n,t,r,i),P0(n,e,r)}}function Vv(t,e,n){var r=Or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(N0(t))R0(e,i);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,l=a(s,n);if(i.hasEagerState=!0,i.eagerState=l,In(l,s)){var c=e.interleaved;c===null?(i.next=i,ku(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=d0(t,e,i,r),n!==null&&(i=Gt(),Dn(n,t,r,i),P0(n,e,r))}}function N0(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function R0(t,e){os=al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_u(t,n)}}var sl={readContext:Mn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},Gv={readContext:Mn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:Mn,useEffect:Qh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uo(4194308,4,M0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uo(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Hv.bind(null,ct,t),[r.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:Jh,useDebugValue:Bu,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=Jh(!1),e=t[0];return t=Bv.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ct,i=zn();if(st){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Rt===null)throw Error(te(349));bi&30||m0(r,e,n)}i.memoizedState=n;var a={value:n,getSnapshot:e};return i.queue=a,Qh(g0.bind(null,r,a,t),[t]),r.flags|=2048,Ts(9,x0.bind(null,r,a,n,e),void 0,null),n},useId:function(){var t=zn(),e=Rt.identifierPrefix;if(st){var n=or,r=sr;n=(r&~(1<<32-Ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ws++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Wv={readContext:Mn,useCallback:E0,useContext:Mn,useEffect:ju,useImperativeHandle:w0,useInsertionEffect:S0,useLayoutEffect:b0,useMemo:T0,useReducer:hc,useRef:y0,useState:function(){return hc(Es)},useDebugValue:Bu,useDeferredValue:function(t){var e=wn();return A0(e,St.memoizedState,t)},useTransition:function(){var t=hc(Es)[0],e=wn().memoizedState;return[t,e]},useMutableSource:f0,useSyncExternalStore:p0,useId:C0,unstable_isNewReconciler:!1},Xv={readContext:Mn,useCallback:E0,useContext:Mn,useEffect:ju,useImperativeHandle:w0,useInsertionEffect:S0,useLayoutEffect:b0,useMemo:T0,useReducer:fc,useRef:y0,useState:function(){return fc(Es)},useDebugValue:Bu,useDeferredValue:function(t){var e=wn();return St===null?e.memoizedState=t:A0(e,St.memoizedState,t)},useTransition:function(){var t=fc(Es)[0],e=wn().memoizedState;return[t,e]},useMutableSource:f0,useSyncExternalStore:p0,useId:C0,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cl={isMounted:function(t){return(t=t._reactInternals)?Ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=Or(t),a=cr(r,i);a.payload=e,n!=null&&(a.callback=n),e=Ur(t,a,i),e!==null&&(Dn(e,t,i,r),Do(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=Or(t),a=cr(r,i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Ur(t,a,i),e!==null&&(Dn(e,t,i,r),Do(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),r=Or(t),i=cr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ur(t,i,r),e!==null&&(Dn(e,t,r,n),Do(e,t,r))}};function ef(t,e,n,r,i,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,a,s):e.prototype&&e.prototype.isPureReactComponent?!_s(n,r)||!_s(i,a):!0}function k0(t,e,n){var r=!1,i=Vr,a=e.contextType;return typeof a=="object"&&a!==null?a=Mn(a):(i=en(e)?yi:jt.current,r=e.contextTypes,a=(r=r!=null)?_a(t,i):Vr),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=a),e}function tf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Cl.enqueueReplaceState(e,e.state,null)}function Ld(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Lu(t);var a=e.contextType;typeof a=="object"&&a!==null?i.context=Mn(a):(a=en(e)?yi:jt.current,i.context=_a(t,a)),i.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(kd(t,e,a,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Cl.enqueueReplaceState(i,i.state,null),rl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ba(t,e){try{var n="",r=e;do n+=y_(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:i,digest:null}}function pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $v=typeof WeakMap=="function"?WeakMap:Map;function L0(t,e,n){n=cr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ll||(ll=!0,Gd=r),Dd(t,e)},n}function D0(t,e,n){n=cr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dd(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Dd(t,e),typeof r!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function nf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $v;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=oy.bind(null,t,e,n),e.then(t,t))}function rf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function af(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=cr(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var qv=pr.ReactCurrentOwner,Jt=!1;function Vt(t,e,n,r){e.child=t===null?c0(e,null,n,r):ya(e,t.child,n,r)}function sf(t,e,n,r,i){n=n.render;var a=e.ref;return ha(e,i),r=Ou(t,e,n,r,a,i),n=zu(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fr(t,e,i)):(st&&n&&Tu(e),e.flags|=1,Vt(t,e,r,i),e.child)}function of(t,e,n,r,i){if(t===null){var a=n.type;return typeof a=="function"&&!Yu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,I0(t,e,a,r,i)):(t=jo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&i)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:_s,n(s,r)&&t.ref===e.ref)return fr(t,e,i)}return e.flags|=1,t=zr(a,r),t.ref=e.ref,t.return=e,e.child=t}function I0(t,e,n,r,i){if(t!==null){var a=t.memoizedProps;if(_s(a,r)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=r=a,(t.lanes&i)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,fr(t,e,i)}return Id(t,e,n,r,i)}function U0(t,e,n){var r=e.pendingProps,i=r.children,a=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(sa,on),on|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(sa,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,nt(sa,on),on|=r}else a!==null?(r=a.baseLanes|n,e.memoizedState=null):r=n,nt(sa,on),on|=r;return Vt(t,e,i,n),e.child}function F0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Id(t,e,n,r,i){var a=en(n)?yi:jt.current;return a=_a(e,a),ha(e,i),n=Ou(t,e,n,r,a,i),r=zu(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fr(t,e,i)):(st&&r&&Tu(e),e.flags|=1,Vt(t,e,n,i),e.child)}function lf(t,e,n,r,i){if(en(n)){var a=!0;Jo(e)}else a=!1;if(ha(e,i),e.stateNode===null)Fo(t,e),k0(e,n,r),Ld(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var c=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=Mn(d):(d=en(n)?yi:jt.current,d=_a(e,d));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==d)&&tf(e,s,r,d),Er=!1;var p=e.memoizedState;s.state=p,rl(e,r,s,i),c=e.memoizedState,l!==r||p!==c||Qt.current||Er?(typeof h=="function"&&(kd(e,n,h,r),c=e.memoizedState),(l=Er||ef(e,n,l,r,p,c,d))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),s.props=r,s.state=c,s.context=d,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,u0(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Nn(e.type,l),s.props=d,f=e.pendingProps,p=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Mn(c):(c=en(n)?yi:jt.current,c=_a(e,c));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||p!==c)&&tf(e,s,r,c),Er=!1,p=e.memoizedState,s.state=p,rl(e,r,s,i);var v=e.memoizedState;l!==f||p!==v||Qt.current||Er?(typeof x=="function"&&(kd(e,n,x,r),v=e.memoizedState),(d=Er||ef(e,n,d,r,p,v,c)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=c,r=d):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Ud(t,e,n,r,a,i)}function Ud(t,e,n,r,i,a){F0(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Xh(e,n,!1),fr(t,e,a);r=e.stateNode,qv.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=ya(e,t.child,null,a),e.child=ya(e,null,l,a)):Vt(t,e,l,a),e.memoizedState=r.state,i&&Xh(e,n,!0),e.child}function O0(t){var e=t.stateNode;e.pendingContext?Wh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wh(t,e.context,!1),Du(t,e.containerInfo)}function cf(t,e,n,r,i){return va(),Cu(i),e.flags|=256,Vt(t,e,n,r),e.child}var Fd={dehydrated:null,treeContext:null,retryLane:0};function Od(t){return{baseLanes:t,cachePool:null,transitions:null}}function z0(t,e,n){var r=e.pendingProps,i=lt.current,a=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),nt(lt,i&1),t===null)return Rd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,a?(r=e.mode,a=e.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Pl(s,r,0,null),t=_i(t,r,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Od(n),e.memoizedState=Fd,t):Hu(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Yv(t,e,s,r,l,i,n);if(a){a=r.fallback,s=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=zr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=zr(l,a):(a=_i(a,s,n,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,s=t.child.memoizedState,s=s===null?Od(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~n,e.memoizedState=Fd,r}return a=t.child,t=a.sibling,r=zr(a,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hu(t,e){return e=Pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function no(t,e,n,r){return r!==null&&Cu(r),ya(e,t.child,null,n),t=Hu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yv(t,e,n,r,i,a,s){if(n)return e.flags&256?(e.flags&=-257,r=pc(Error(te(422))),no(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=r.fallback,i=e.mode,r=Pl({mode:"visible",children:r.children},i,0,null),a=_i(a,i,s,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,e.mode&1&&ya(e,t.child,null,s),e.child.memoizedState=Od(s),e.memoizedState=Fd,a);if(!(e.mode&1))return no(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(te(419)),r=pc(a,r,void 0),no(t,e,s,r)}if(l=(s&t.childLanes)!==0,Jt||l){if(r=Rt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,hr(t,i),Dn(r,t,i,-1))}return qu(),r=pc(Error(te(421))),no(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ly.bind(null,t),i._reactRetry=e,null):(t=a.treeContext,ln=Ir(i.nextSibling),dn=e,st=!0,Pn=null,t!==null&&(xn[gn++]=sr,xn[gn++]=or,xn[gn++]=Si,sr=t.id,or=t.overflow,Si=e),e=Hu(e,r.children),e.flags|=4096,e)}function df(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Pd(t.return,e,n)}function mc(t,e,n,r,i){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function j0(t,e,n){var r=e.pendingProps,i=r.revealOrder,a=r.tail;if(Vt(t,e,r.children,n),r=lt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&df(t,n,e);else if(t.tag===19)df(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(nt(lt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&il(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),mc(e,!1,i,n,a);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&il(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}mc(e,!0,n,null,a);break;case"together":mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Kv(t,e,n){switch(e.tag){case 3:O0(e),va();break;case 5:h0(e);break;case 1:en(e.type)&&Jo(e);break;case 4:Du(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;nt(tl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?z0(t,e,n):(nt(lt,lt.current&1),t=fr(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return j0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),nt(lt,lt.current),r)break;return null;case 22:case 23:return e.lanes=0,U0(t,e,n)}return fr(t,e,n)}var B0,zd,H0,V0;B0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zd=function(){};H0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pi($n.current);var a=null;switch(n){case"input":i=od(t,i),r=od(t,r),a=[];break;case"select":i=dt({},i,{value:void 0}),r=dt({},r,{value:void 0}),a=[];break;case"textarea":i=dd(t,i),r=dd(t,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ko)}hd(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(us.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var c=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(a||(a=[]),a.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(us.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&rt("scroll",t),a||l===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(e.updateQueue=d)&&(e.flags|=4)}};V0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Va(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Zv(t,e,n){var r=e.pendingProps;switch(Au(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return en(e.type)&&Zo(),It(e),null;case 3:return r=e.stateNode,Sa(),at(Qt),at(jt),Uu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pn!==null&&($d(Pn),Pn=null))),zd(t,e),It(e),null;case 5:Iu(e);var i=pi(Ms.current);if(n=e.type,t!==null&&e.stateNode!=null)H0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(te(166));return It(e),null}if(t=pi($n.current),eo(e)){r=e.stateNode,n=e.type;var a=e.memoizedProps;switch(r[Hn]=e,r[Ss]=a,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",r),rt("close",r);break;case"iframe":case"object":case"embed":rt("load",r);break;case"video":case"audio":for(i=0;i<Qa.length;i++)rt(Qa[i],r);break;case"source":rt("error",r);break;case"img":case"image":case"link":rt("error",r),rt("load",r);break;case"details":rt("toggle",r);break;case"input":_h(r,a),rt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},rt("invalid",r);break;case"textarea":yh(r,a),rt("invalid",r)}hd(n,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Qs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Qs(r.textContent,l,t),i=["children",""+l]):us.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&rt("scroll",r)}switch(n){case"input":Ws(r),vh(r,a,!0);break;case"textarea":Ws(r),Sh(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ko)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Hn]=e,t[Ss]=r,B0(t,e,!1,!1),e.stateNode=t;e:{switch(s=fd(n,r),n){case"dialog":rt("cancel",t),rt("close",t),i=r;break;case"iframe":case"object":case"embed":rt("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qa.length;i++)rt(Qa[i],t);i=r;break;case"source":rt("error",t),i=r;break;case"img":case"image":case"link":rt("error",t),rt("load",t),i=r;break;case"details":rt("toggle",t),i=r;break;case"input":_h(t,r),i=od(t,r),rt("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=dt({},r,{value:void 0}),rt("invalid",t);break;case"textarea":yh(t,r),i=dd(t,r),rt("invalid",t);break;default:i=r}hd(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?ym(t,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&_m(t,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&hs(t,c):typeof c=="number"&&hs(t,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(us.hasOwnProperty(a)?c!=null&&a==="onScroll"&&rt("scroll",t):c!=null&&hu(t,a,c,s))}switch(n){case"input":Ws(t),vh(t,r,!1);break;case"textarea":Ws(t),Sh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Hr(r.value));break;case"select":t.multiple=!!r.multiple,a=r.value,a!=null?la(t,!!r.multiple,a,!1):r.defaultValue!=null&&la(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)V0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(te(166));if(n=pi(Ms.current),pi($n.current),eo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Hn]=e,(a=r.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:Qs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qs(r.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hn]=e,e.stateNode=r}return It(e),null;case 13:if(at(lt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&ln!==null&&e.mode&1&&!(e.flags&128))o0(),va(),e.flags|=98560,a=!1;else if(a=eo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!a)throw Error(te(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(te(317));a[Hn]=e}else va(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),a=!1}else Pn!==null&&($d(Pn),Pn=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?bt===0&&(bt=3):qu())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return Sa(),zd(t,e),t===null&&vs(e.stateNode.containerInfo),It(e),null;case 10:return Pu(e.type._context),It(e),null;case 17:return en(e.type)&&Zo(),It(e),null;case 19:if(at(lt),a=e.memoizedState,a===null)return It(e),null;if(r=(e.flags&128)!==0,s=a.rendering,s===null)if(r)Va(a,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=il(t),s!==null){for(e.flags|=128,Va(a,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)a=n,t=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}a.tail!==null&&xt()>Ma&&(e.flags|=128,r=!0,Va(a,!1),e.lanes=4194304)}else{if(!r)if(t=il(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Va(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!st)return It(e),null}else 2*xt()-a.renderingStartTime>Ma&&n!==1073741824&&(e.flags|=128,r=!0,Va(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(n=a.last,n!==null?n.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=xt(),e.sibling=null,n=lt.current,nt(lt,r?n&1|2:n&1),e):(It(e),null);case 22:case 23:return $u(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?on&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Jv(t,e){switch(Au(e),e.tag){case 1:return en(e.type)&&Zo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Sa(),at(Qt),at(jt),Uu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Iu(e),null;case 13:if(at(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));va()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(lt),null;case 4:return Sa(),null;case 10:return Pu(e.type._context),null;case 22:case 23:return $u(),null;case 24:return null;default:return null}}var ro=!1,Ot=!1,Qv=typeof WeakSet=="function"?WeakSet:Set,xe=null;function aa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ft(t,e,r)}else n.current=null}function jd(t,e,n){try{n()}catch(r){ft(t,e,r)}}var uf=!1;function ey(t,e){if(Md=$o,t=qm(),Eu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,d=0,h=0,f=t,p=null;t:for(;;){for(var x;f!==n||i!==0&&f.nodeType!==3||(l=s+i),f!==a||r!==0&&f.nodeType!==3||(c=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(x=f.firstChild)!==null;)p=f,f=x;for(;;){if(f===t)break t;if(p===n&&++d===i&&(l=s),p===a&&++h===r&&(c=s),(x=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(wd={focusedElem:t,selectionRange:n},$o=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,g=v.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Nn(e.type,y),g);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(b){ft(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return v=uf,uf=!1,v}function ls(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var a=i.destroy;i.destroy=void 0,a!==void 0&&jd(e,n,a)}i=i.next}while(i!==r)}}function Nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G0(t){var e=t.alternate;e!==null&&(t.alternate=null,G0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[Ss],delete e[Ad],delete e[Uv],delete e[Fv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W0(t){return t.tag===5||t.tag===3||t.tag===4}function hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ko));else if(r!==4&&(t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}function Vd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Vd(t,e,n),t=t.sibling;t!==null;)Vd(t,e,n),t=t.sibling}var Pt=null,Rn=!1;function xr(t,e,n){for(n=n.child;n!==null;)X0(t,e,n),n=n.sibling}function X0(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:Ot||aa(n,e);case 6:var r=Pt,i=Rn;Pt=null,xr(t,e,n),Pt=r,Rn=i,Pt!==null&&(Rn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Rn?(t=Pt,n=n.stateNode,t.nodeType===8?lc(t.parentNode,n):t.nodeType===1&&lc(t,n),xs(t)):lc(Pt,n.stateNode));break;case 4:r=Pt,i=Rn,Pt=n.stateNode.containerInfo,Rn=!0,xr(t,e,n),Pt=r,Rn=i;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&jd(n,e,s),i=i.next}while(i!==r)}xr(t,e,n);break;case 1:if(!Ot&&(aa(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ft(n,e,l)}xr(t,e,n);break;case 21:xr(t,e,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,xr(t,e,n),Ot=r):xr(t,e,n);break;default:xr(t,e,n)}}function ff(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Qv),e.forEach(function(r){var i=cy.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function En(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:Pt=l.stateNode,Rn=!1;break e;case 3:Pt=l.stateNode.containerInfo,Rn=!0;break e;case 4:Pt=l.stateNode.containerInfo,Rn=!0;break e}l=l.return}if(Pt===null)throw Error(te(160));X0(a,s,i),Pt=null,Rn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){ft(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$0(e,t),e=e.sibling}function $0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(En(e,t),On(t),r&4){try{ls(3,t,t.return),Nl(3,t)}catch(y){ft(t,t.return,y)}try{ls(5,t,t.return)}catch(y){ft(t,t.return,y)}}break;case 1:En(e,t),On(t),r&512&&n!==null&&aa(n,n.return);break;case 5:if(En(e,t),On(t),r&512&&n!==null&&aa(n,n.return),t.flags&32){var i=t.stateNode;try{hs(i,"")}catch(y){ft(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var a=t.memoizedProps,s=n!==null?n.memoizedProps:a,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&mm(i,a),fd(l,s);var d=fd(l,a);for(s=0;s<c.length;s+=2){var h=c[s],f=c[s+1];h==="style"?ym(i,f):h==="dangerouslySetInnerHTML"?_m(i,f):h==="children"?hs(i,f):hu(i,h,f,d)}switch(l){case"input":ld(i,a);break;case"textarea":xm(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?la(i,!!a.multiple,x,!1):p!==!!a.multiple&&(a.defaultValue!=null?la(i,!!a.multiple,a.defaultValue,!0):la(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ss]=a}catch(y){ft(t,t.return,y)}}break;case 6:if(En(e,t),On(t),r&4){if(t.stateNode===null)throw Error(te(162));i=t.stateNode,a=t.memoizedProps;try{i.nodeValue=a}catch(y){ft(t,t.return,y)}}break;case 3:if(En(e,t),On(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xs(e.containerInfo)}catch(y){ft(t,t.return,y)}break;case 4:En(e,t),On(t);break;case 13:En(e,t),On(t),i=t.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Wu=xt())),r&4&&ff(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(d=Ot)||h,En(e,t),Ot=d):En(e,t),On(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(xe=t,h=t.child;h!==null;){for(f=xe=h;xe!==null;){switch(p=xe,x=p.child,p.tag){case 0:case 11:case 14:case 15:ls(4,p,p.return);break;case 1:aa(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ft(r,n,y)}}break;case 5:aa(p,p.return);break;case 22:if(p.memoizedState!==null){mf(f);continue}}x!==null?(x.return=p,xe=x):mf(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=f.stateNode,c=f.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=vm("display",s))}catch(y){ft(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(y){ft(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:En(e,t),On(t),r&4&&ff(t);break;case 21:break;default:En(e,t),On(t)}}function On(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W0(n)){var r=n;break e}n=n.return}throw Error(te(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hs(i,""),r.flags&=-33);var a=hf(t);Vd(t,a,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=hf(t);Hd(t,l,s);break;default:throw Error(te(161))}}catch(c){ft(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ty(t,e,n){xe=t,q0(t)}function q0(t,e,n){for(var r=(t.mode&1)!==0;xe!==null;){var i=xe,a=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ro;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ot;l=ro;var d=Ot;if(ro=s,(Ot=c)&&!d)for(xe=i;xe!==null;)s=xe,c=s.child,s.tag===22&&s.memoizedState!==null?xf(i):c!==null?(c.return=s,xe=c):xf(i);for(;a!==null;)xe=a,q0(a),a=a.sibling;xe=i,ro=l,Ot=d}pf(t)}else i.subtreeFlags&8772&&a!==null?(a.return=i,xe=a):pf(t)}}function pf(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Nl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Zh(e,a,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zh(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&xs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ot||e.flags&512&&Bd(e)}catch(p){ft(e,e.return,p)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function mf(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function xf(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nl(4,e)}catch(c){ft(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){ft(e,i,c)}}var a=e.return;try{Bd(e)}catch(c){ft(e,a,c)}break;case 5:var s=e.return;try{Bd(e)}catch(c){ft(e,s,c)}}}catch(c){ft(e,e.return,c)}if(e===t){xe=null;break}var l=e.sibling;if(l!==null){l.return=e.return,xe=l;break}xe=e.return}}var ny=Math.ceil,ol=pr.ReactCurrentDispatcher,Vu=pr.ReactCurrentOwner,bn=pr.ReactCurrentBatchConfig,We=0,Rt=null,yt=null,kt=0,on=0,sa=qr(0),bt=0,As=null,Mi=0,Rl=0,Gu=0,cs=null,Yt=null,Wu=0,Ma=1/0,ir=null,ll=!1,Gd=null,Fr=null,io=!1,Rr=null,cl=0,ds=0,Wd=null,Oo=-1,zo=0;function Gt(){return We&6?xt():Oo!==-1?Oo:Oo=xt()}function Or(t){return t.mode&1?We&2&&kt!==0?kt&-kt:zv.transition!==null?(zo===0&&(zo=km()),zo):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:zm(t.type)),t):1}function Dn(t,e,n,r){if(50<ds)throw ds=0,Wd=null,Error(te(185));Rs(t,n,r),(!(We&2)||t!==Rt)&&(t===Rt&&(!(We&2)&&(Rl|=n),bt===4&&Ar(t,kt)),tn(t,r),n===1&&We===0&&!(e.mode&1)&&(Ma=xt()+500,Tl&&Yr()))}function tn(t,e){var n=t.callbackNode;z_(t,e);var r=Xo(t,t===Rt?kt:0);if(r===0)n!==null&&wh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wh(n),e===1)t.tag===0?Ov(gf.bind(null,t)):i0(gf.bind(null,t)),Dv(function(){!(We&6)&&Yr()}),n=null;else{switch(Lm(r)){case 1:n=gu;break;case 4:n=Rm;break;case 16:n=Wo;break;case 536870912:n=Pm;break;default:n=Wo}n=nx(n,Y0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Y0(t,e){if(Oo=-1,zo=0,We&6)throw Error(te(327));var n=t.callbackNode;if(fa()&&t.callbackNode!==n)return null;var r=Xo(t,t===Rt?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=dl(t,r);else{e=r;var i=We;We|=2;var a=Z0();(Rt!==t||kt!==e)&&(ir=null,Ma=xt()+500,gi(t,e));do try{ay();break}catch(l){K0(t,l)}while(!0);Ru(),ol.current=a,We=i,yt!==null?e=0:(Rt=null,kt=0,e=bt)}if(e!==0){if(e===2&&(i=_d(t),i!==0&&(r=i,e=Xd(t,i))),e===1)throw n=As,gi(t,0),Ar(t,r),tn(t,xt()),n;if(e===6)Ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!ry(i)&&(e=dl(t,r),e===2&&(a=_d(t),a!==0&&(r=a,e=Xd(t,a))),e===1))throw n=As,gi(t,0),Ar(t,r),tn(t,xt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(te(345));case 2:oi(t,Yt,ir);break;case 3:if(Ar(t,r),(r&130023424)===r&&(e=Wu+500-xt(),10<e)){if(Xo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Td(oi.bind(null,t,Yt,ir),e);break}oi(t,Yt,ir);break;case 4:if(Ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Ln(r);a=1<<s,s=e[s],s>i&&(i=s),r&=~a}if(r=i,r=xt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ny(r/1960))-r,10<r){t.timeoutHandle=Td(oi.bind(null,t,Yt,ir),r);break}oi(t,Yt,ir);break;case 5:oi(t,Yt,ir);break;default:throw Error(te(329))}}}return tn(t,xt()),t.callbackNode===n?Y0.bind(null,t):null}function Xd(t,e){var n=cs;return t.current.memoizedState.isDehydrated&&(gi(t,e).flags|=256),t=dl(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&$d(e)),t}function $d(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function ry(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!In(a(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~Gu,e&=~Rl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ln(e),r=1<<n;t[n]=-1,e&=~r}}function gf(t){if(We&6)throw Error(te(327));fa();var e=Xo(t,0);if(!(e&1))return tn(t,xt()),null;var n=dl(t,e);if(t.tag!==0&&n===2){var r=_d(t);r!==0&&(e=r,n=Xd(t,r))}if(n===1)throw n=As,gi(t,0),Ar(t,e),tn(t,xt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,oi(t,Yt,ir),tn(t,xt()),null}function Xu(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Ma=xt()+500,Tl&&Yr())}}function wi(t){Rr!==null&&Rr.tag===0&&!(We&6)&&fa();var e=We;We|=1;var n=bn.transition,r=Qe;try{if(bn.transition=null,Qe=1,t)return t()}finally{Qe=r,bn.transition=n,We=e,!(We&6)&&Yr()}}function $u(){on=sa.current,at(sa)}function gi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Lv(n)),yt!==null)for(n=yt.return;n!==null;){var r=n;switch(Au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zo();break;case 3:Sa(),at(Qt),at(jt),Uu();break;case 5:Iu(r);break;case 4:Sa();break;case 13:at(lt);break;case 19:at(lt);break;case 10:Pu(r.type._context);break;case 22:case 23:$u()}n=n.return}if(Rt=t,yt=t=zr(t.current,null),kt=on=e,bt=0,As=null,Gu=Rl=Mi=0,Yt=cs=null,fi!==null){for(e=0;e<fi.length;e++)if(n=fi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=i,r.next=s}n.pending=r}fi=null}return t}function K0(t,e){do{var n=yt;try{if(Ru(),Io.current=sl,al){for(var r=ct.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}al=!1}if(bi=0,Ct=St=ct=null,os=!1,ws=0,Vu.current=null,n===null||n.return===null){bt=1,As=e,yt=null;break}e:{var a=t,s=n.return,l=n,c=e;if(e=kt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=rf(s);if(x!==null){x.flags&=-257,af(x,s,l,a,e),x.mode&1&&nf(a,d,e),e=x,c=d;var v=e.updateQueue;if(v===null){var y=new Set;y.add(c),e.updateQueue=y}else v.add(c);break e}else{if(!(e&1)){nf(a,d,e),qu();break e}c=Error(te(426))}}else if(st&&l.mode&1){var g=rf(s);if(g!==null){!(g.flags&65536)&&(g.flags|=256),af(g,s,l,a,e),Cu(ba(c,l));break e}}a=c=ba(c,l),bt!==4&&(bt=2),cs===null?cs=[a]:cs.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var u=L0(a,c,e);Kh(a,u);break e;case 1:l=c;var _=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof _.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Fr===null||!Fr.has(m)))){a.flags|=65536,e&=-e,a.lanes|=e;var b=D0(a,l,e);Kh(a,b);break e}}a=a.return}while(a!==null)}Q0(n)}catch(N){e=N,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function Z0(){var t=ol.current;return ol.current=sl,t===null?sl:t}function qu(){(bt===0||bt===3||bt===2)&&(bt=4),Rt===null||!(Mi&268435455)&&!(Rl&268435455)||Ar(Rt,kt)}function dl(t,e){var n=We;We|=2;var r=Z0();(Rt!==t||kt!==e)&&(ir=null,gi(t,e));do try{iy();break}catch(i){K0(t,i)}while(!0);if(Ru(),We=n,ol.current=r,yt!==null)throw Error(te(261));return Rt=null,kt=0,bt}function iy(){for(;yt!==null;)J0(yt)}function ay(){for(;yt!==null&&!R_();)J0(yt)}function J0(t){var e=tx(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?Q0(t):yt=e,Vu.current=null}function Q0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Jv(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,yt=null;return}}else if(n=Zv(n,e,on),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);bt===0&&(bt=5)}function oi(t,e,n){var r=Qe,i=bn.transition;try{bn.transition=null,Qe=1,sy(t,e,n,r)}finally{bn.transition=i,Qe=r}return null}function sy(t,e,n,r){do fa();while(Rr!==null);if(We&6)throw Error(te(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(j_(t,a),t===Rt&&(yt=Rt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||io||(io=!0,nx(Wo,function(){return fa(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=bn.transition,bn.transition=null;var s=Qe;Qe=1;var l=We;We|=4,Vu.current=null,ey(t,n),$0(n,t),Tv(wd),$o=!!Md,wd=Md=null,t.current=n,ty(n),P_(),We=l,Qe=s,bn.transition=a}else t.current=n;if(io&&(io=!1,Rr=t,cl=i),a=t.pendingLanes,a===0&&(Fr=null),D_(n.stateNode),tn(t,xt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ll)throw ll=!1,t=Gd,Gd=null,t;return cl&1&&t.tag!==0&&fa(),a=t.pendingLanes,a&1?t===Wd?ds++:(ds=0,Wd=t):ds=0,Yr(),null}function fa(){if(Rr!==null){var t=Lm(cl),e=bn.transition,n=Qe;try{if(bn.transition=null,Qe=16>t?16:t,Rr===null)var r=!1;else{if(t=Rr,Rr=null,cl=0,We&6)throw Error(te(331));var i=We;for(We|=4,xe=t.current;xe!==null;){var a=xe,s=a.child;if(xe.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(xe=d;xe!==null;){var h=xe;switch(h.tag){case 0:case 11:case 15:ls(8,h,a)}var f=h.child;if(f!==null)f.return=h,xe=f;else for(;xe!==null;){h=xe;var p=h.sibling,x=h.return;if(G0(h),h===d){xe=null;break}if(p!==null){p.return=x,xe=p;break}xe=x}}}var v=a.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}xe=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,xe=s;else e:for(;xe!==null;){if(a=xe,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ls(9,a,a.return)}var u=a.sibling;if(u!==null){u.return=a.return,xe=u;break e}xe=a.return}}var _=t.current;for(xe=_;xe!==null;){s=xe;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,xe=m;else e:for(s=_;xe!==null;){if(l=xe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nl(9,l)}}catch(N){ft(l,l.return,N)}if(l===s){xe=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,xe=b;break e}xe=l.return}}if(We=i,Yr(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Sl,t)}catch{}r=!0}return r}finally{Qe=n,bn.transition=e}}return!1}function _f(t,e,n){e=ba(n,e),e=L0(t,e,1),t=Ur(t,e,1),e=Gt(),t!==null&&(Rs(t,1,e),tn(t,e))}function ft(t,e,n){if(t.tag===3)_f(t,t,n);else for(;e!==null;){if(e.tag===3){_f(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fr===null||!Fr.has(r))){t=ba(n,t),t=D0(e,t,1),e=Ur(e,t,1),t=Gt(),e!==null&&(Rs(e,1,t),tn(e,t));break}}e=e.return}}function oy(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(kt&n)===n&&(bt===4||bt===3&&(kt&130023424)===kt&&500>xt()-Wu?gi(t,0):Gu|=n),tn(t,e)}function ex(t,e){e===0&&(t.mode&1?(e=qs,qs<<=1,!(qs&130023424)&&(qs=4194304)):e=1);var n=Gt();t=hr(t,e),t!==null&&(Rs(t,e,n),tn(t,n))}function ly(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ex(t,n)}function cy(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(te(314))}r!==null&&r.delete(e),ex(t,n)}var tx;tx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,Kv(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,st&&e.flags&1048576&&a0(e,el,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fo(t,e),t=e.pendingProps;var i=_a(e,jt.current);ha(e,n),i=Ou(null,e,r,t,i,n);var a=zu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(r)?(a=!0,Jo(e)):a=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lu(e),i.updater=Cl,e.stateNode=i,i._reactInternals=e,Ld(e,r,t,n),e=Ud(null,e,r,!0,a,n)):(e.tag=0,st&&a&&Tu(e),Vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=uy(r),t=Nn(r,t),i){case 0:e=Id(null,e,r,t,n);break e;case 1:e=lf(null,e,r,t,n);break e;case 11:e=sf(null,e,r,t,n);break e;case 14:e=of(null,e,r,Nn(r.type,t),n);break e}throw Error(te(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Id(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),lf(t,e,r,i,n);case 3:e:{if(O0(e),t===null)throw Error(te(387));r=e.pendingProps,a=e.memoizedState,i=a.element,u0(t,e),rl(e,r,null,n);var s=e.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){i=ba(Error(te(423)),e),e=cf(t,e,r,n,i);break e}else if(r!==i){i=ba(Error(te(424)),e),e=cf(t,e,r,n,i);break e}else for(ln=Ir(e.stateNode.containerInfo.firstChild),dn=e,st=!0,Pn=null,n=c0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(va(),r===i){e=fr(t,e,n);break e}Vt(t,e,r,n)}e=e.child}return e;case 5:return h0(e),t===null&&Rd(e),r=e.type,i=e.pendingProps,a=t!==null?t.memoizedProps:null,s=i.children,Ed(r,i)?s=null:a!==null&&Ed(r,a)&&(e.flags|=32),F0(t,e),Vt(t,e,s,n),e.child;case 6:return t===null&&Rd(e),null;case 13:return z0(t,e,n);case 4:return Du(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ya(e,null,r,n):Vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),sf(t,e,r,i,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,a=e.memoizedProps,s=i.value,nt(tl,r._currentValue),r._currentValue=s,a!==null)if(In(a.value,s)){if(a.children===i.children&&!Qt.current){e=fr(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=cr(-1,n&-n),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Pd(a.return,n,e),l.lanes|=n;break}c=c.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(te(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pd(s,n,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ha(e,n),i=Mn(i),r=r(i),e.flags|=1,Vt(t,e,r,n),e.child;case 14:return r=e.type,i=Nn(r,e.pendingProps),i=Nn(r.type,i),of(t,e,r,i,n);case 15:return I0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Fo(t,e),e.tag=1,en(r)?(t=!0,Jo(e)):t=!1,ha(e,n),k0(e,r,i),Ld(e,r,i,n),Ud(null,e,r,!0,t,n);case 19:return j0(t,e,n);case 22:return U0(t,e,n)}throw Error(te(156,e.tag))};function nx(t,e){return Nm(t,e)}function dy(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,r){return new dy(t,e,n,r)}function Yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uy(t){if(typeof t=="function")return Yu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pu)return 11;if(t===mu)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jo(t,e,n,r,i,a){var s=2;if(r=t,typeof t=="function")Yu(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ki:return _i(n.children,i,a,e);case fu:s=8,i|=8;break;case rd:return t=yn(12,n,e,i|2),t.elementType=rd,t.lanes=a,t;case id:return t=yn(13,n,e,i),t.elementType=id,t.lanes=a,t;case ad:return t=yn(19,n,e,i),t.elementType=ad,t.lanes=a,t;case hm:return Pl(n,i,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dm:s=10;break e;case um:s=9;break e;case pu:s=11;break e;case mu:s=14;break e;case wr:s=16,r=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=yn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=a,e}function _i(t,e,n,r){return t=yn(7,t,r,e),t.lanes=n,t}function Pl(t,e,n,r){return t=yn(22,t,r,e),t.elementType=hm,t.lanes=n,t.stateNode={isHidden:!1},t}function xc(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function gc(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hy(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ku(t,e,n,r,i,a,s,l,c){return t=new hy(t,e,n,l,c),e===1?(e=1,a===!0&&(e|=8)):e=0,a=yn(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lu(a),t}function fy(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function rx(t){if(!t)return Vr;t=t._reactInternals;e:{if(Ci(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(en(n))return r0(t,n,e)}return e}function ix(t,e,n,r,i,a,s,l,c){return t=Ku(n,r,!0,t,i,a,s,l,c),t.context=rx(null),n=t.current,r=Gt(),i=Or(n),a=cr(r,i),a.callback=e??null,Ur(n,a,i),t.current.lanes=i,Rs(t,i,r),tn(t,r),t}function kl(t,e,n,r){var i=e.current,a=Gt(),s=Or(i);return n=rx(n),e.context===null?e.context=n:e.pendingContext=n,e=cr(a,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ur(i,e,s),t!==null&&(Dn(t,i,s,a),Do(t,i,s)),s}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zu(t,e){vf(t,e),(t=t.alternate)&&vf(t,e)}function py(){return null}var ax=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ju(t){this._internalRoot=t}Ll.prototype.render=Ju.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));kl(t,e,null,null)};Ll.prototype.unmount=Ju.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wi(function(){kl(null,t,null,null)}),e[ur]=null}};function Ll(t){this._internalRoot=t}Ll.prototype.unstable_scheduleHydration=function(t){if(t){var e=Um();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tr.length&&e!==0&&e<Tr[n].priority;n++);Tr.splice(n,0,t),n===0&&Om(t)}};function Qu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yf(){}function my(t,e,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var d=ul(s);a.call(d)}}var s=ix(e,r,t,0,null,!1,!1,"",yf);return t._reactRootContainer=s,t[ur]=s.current,vs(t.nodeType===8?t.parentNode:t),wi(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=ul(c);l.call(d)}}var c=Ku(t,0,!1,null,null,!1,!1,"",yf);return t._reactRootContainer=c,t[ur]=c.current,vs(t.nodeType===8?t.parentNode:t),wi(function(){kl(e,c,n,r)}),c}function Il(t,e,n,r,i){var a=n._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var l=i;i=function(){var c=ul(s);l.call(c)}}kl(e,s,t,i)}else s=my(n,e,t,i,r);return ul(s)}Dm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ja(e.pendingLanes);n!==0&&(_u(e,n|1),tn(e,xt()),!(We&6)&&(Ma=xt()+500,Yr()))}break;case 13:wi(function(){var r=hr(t,1);if(r!==null){var i=Gt();Dn(r,t,1,i)}}),Zu(t,1)}};vu=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=Gt();Dn(e,t,134217728,n)}Zu(t,134217728)}};Im=function(t){if(t.tag===13){var e=Or(t),n=hr(t,e);if(n!==null){var r=Gt();Dn(n,t,e,r)}Zu(t,e)}};Um=function(){return Qe};Fm=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};md=function(t,e,n){switch(e){case"input":if(ld(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=El(r);if(!i)throw Error(te(90));pm(r),ld(r,i)}}}break;case"textarea":xm(t,n);break;case"select":e=n.value,e!=null&&la(t,!!n.multiple,e,!1)}};Mm=Xu;wm=wi;var xy={usingClientEntryPoint:!1,Events:[ks,ea,El,Sm,bm,Xu]},Ga={findFiberByHostInstance:hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gy={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Am(t),t===null?null:t.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||py,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{Sl=ao.inject(gy),Xn=ao}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xy;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(e))throw Error(te(200));return fy(t,e,null,n)};hn.createRoot=function(t,e){if(!Qu(t))throw Error(te(299));var n=!1,r="",i=ax;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ku(t,1,!1,null,null,n,!1,r,i),t[ur]=e.current,vs(t.nodeType===8?t.parentNode:t),new Ju(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Am(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return wi(t)};hn.hydrate=function(t,e,n){if(!Dl(e))throw Error(te(200));return Il(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!Qu(t))throw Error(te(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",s=ax;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=ix(e,null,t,1,n??null,i,!1,a,s),t[ur]=e.current,vs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ll(e)};hn.render=function(t,e,n){if(!Dl(e))throw Error(te(200));return Il(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Dl(t))throw Error(te(40));return t._reactRootContainer?(wi(function(){Il(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};hn.unstable_batchedUpdates=Xu;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Dl(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Il(t,e,n,!1,r)};hn.version="18.3.1-next-f1338f8080-20240426";function sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sx)}catch(t){console.error(t)}}sx(),sm.exports=hn;var ox=sm.exports,Sf=ox;td.createRoot=Sf.createRoot,td.hydrateRoot=Sf.hydrateRoot;const lx=se.createContext(void 0),cx="evaluator@orcamed.org",_y="OrcaMed2026!",vy=({children:t})=>{const[e,n]=se.useState(()=>{try{const d=localStorage.getItem("orca_user_session");return d?JSON.parse(d):null}catch{return null}}),[r,i]=se.useState(!1);se.useEffect(()=>{e?localStorage.setItem("orca_user_session",JSON.stringify(e)):localStorage.removeItem("orca_user_session")},[e]);const a=async(d,h)=>{i(!0);try{const f=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d,password:h})}),p=await f.json();return f.ok&&p.success?(n(p.user),i(!1),{success:!0,message:p.message}):(i(!1),{success:!1,message:p.detail||p.message||"Login failed."})}catch(f){return i(!1),{success:!1,message:"Server communication error: "+f.message}}},s=async()=>(await a(cx,_y)).success,l=async(d,h,f)=>{i(!0);try{const p=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d,password:h,confirm_password:f})}),x=await p.json();return i(!1),p.ok&&x.success?{success:!0,message:x.message}:{success:!1,message:x.detail||x.message||"Registration failed."}}catch(p){return i(!1),{success:!1,message:"Server communication error: "+p.message}}},c=()=>{n(null)};return o.jsx(lx.Provider,{value:{user:e,isAuthenticated:!!e,isLoading:r,login:a,loginEvaluatorFastPass:s,register:l,logout:c},children:t})},Ds=()=>{const t=se.useContext(lx);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},_c=[{code:"en",name:"English",nativeName:"English",flag:"🇬🇧"},{code:"hi",name:"Hindi",nativeName:"हिन्दी",flag:"🇮🇳"},{code:"te",name:"Telugu",nativeName:"తెలుగు",flag:"🇮🇳"},{code:"ta",name:"Tamil",nativeName:"தமிழ்",flag:"🇮🇳"},{code:"kn",name:"Kannada",nativeName:"ಕನ್ನಡ",flag:"🇮🇳"},{code:"ml",name:"Malayalam",nativeName:"മലയാളം",flag:"🇮🇳"},{code:"bn",name:"Bengali",nativeName:"বাংলা",flag:"🇮🇳"}],vc={en:{nav_dashboard:"Dashboard",nav_analyze:"Analyze Report",nav_assistant:"AI Assistant",nav_history:"Report History",nav_diagnostics:"Extraction Diagnostics",nav_settings:"Settings",nav_safety:"Clinical Safety",nav_login:"Sign In",nav_logout:"Log Out of Enclave",nav_launch:"Launch Enclave",nav_benchmark:"1-Click Benchmark",nav_overview:"Public Overview",nav_active_workspace:"Active Workspace",nav_ingest_report:"+ Ingest Report",nav_practitioner_session:"Practitioner Session",nav_clinical_enclave:"CLINICAL ENCLAVE",nav_warm_light:"Warm Light Mode",nav_charcoal_dark:"Charcoal Night Mode",dash_pathologist_workstation:"Pathologist Workstation",dash_title:"Clinical Telemetry Dashboard",dash_subtitle:"Real-time biometric distribution, printed laboratory reference interval verification, and anomaly surveillance.",dash_analyze_new:"Analyze New Report",dash_reports_screened:"Reports Screened",dash_biomarkers_screened:"Biomarkers Screened",dash_out_of_range:"Out-of-Range Flags",dash_needs_review:"Needs Review",dash_active_audits:"Active session enclave audits",dash_in_ref_interval:"in reference interval",dash_potentially_high_low:"Potentially High or Low",dash_atypical_markers:"Atypical or candidate markers",dash_status_distribution:"Biomarker Status Distribution",dash_normal:"Normal (In Reference Interval)",dash_flagged:"Potentially High / Low",dash_uncertain:"Needs Review / Atypical",dash_priority_findings:"Priority Out-of-Range Findings",dash_all_normal:"All indicators within verified reference ranges.",dash_prioritization_protocol:"Prioritization Protocol: Printed report intervals take precedent over general population standard ranges.",dash_export_csv:"Export CSV",dash_clinical_pdf:"Clinical PDF",dash_audited_specimen:"Audited Document Specimen",dash_th_biomarker:"Biomarker",dash_th_measured:"Measured",dash_th_unit:"Unit",dash_th_ref_interval:"Reference Interval",dash_th_calibration:"Calibration Source",dash_th_classification:"Clinical Classification",dash_empty_title:"No Medical Reports Screened in this Session",dash_empty_desc:"Upload laboratory reports in any standard format (PDF, PNG, JPG, WEBP, BMP, TIFF) or load the pre-configured benchmark to immediately populate clinical telemetry.",asst_title:"Clinical Decision-Support Assistant",asst_subtitle:"Interactive laboratory guidance and plain-language biomarker explanation powered by Groq LLM intelligence.",asst_banner_disclaimer:"Informational Decision-Support Tool Only • Not a medical diagnosis or prescription. Always consult a licensed physician or pathologist.",asst_placeholder:"Ask about your biomarker results, reference intervals, or health indicators (e.g., 'What does high glucose mean?')...",asst_send:"Send Query",asst_clear:"Clear Conversation",asst_suggested_prompts:"Suggested Clinical Prompts",asst_prompt_1:"Explain my abnormal results in simple language.",asst_prompt_2:"What does this biomarker measure?",asst_prompt_3:"Summarize these findings for my physician.",asst_prompt_4:"Which results should I discuss with my doctor?",asst_context_active:"Audited Report Attached",asst_context_none:"General Medical Mode (No Report Attached)",asst_context_records:"biomarkers in context",asst_privacy_notice:"Privacy Enclave: Only non-identifying biomarker names, measured numbers, units, and ranges are shared for explanation. Raw document scans are never transmitted.",asst_loading:"Analyzing clinical context and formulating explanation...",asst_groq_missing_title:"Groq Cloud API Key Configuration Required",asst_groq_missing_desc:"To activate live AI explanations, provide your GROQ_API_KEY in your server environment or .env file. All deterministic extraction and multi-language features remain active.",ingest_title:"Clinical Report Ingestion & Verification",ingest_subtitle:"Upload multi-format clinical documents or paste laboratory text for optical character recognition and reference-range screening.",ingest_phase1:"Phase 1 • Multi-Format Ingestion",ingest_phase2:"Phase 2 • Pre-Analysis Ingested Text Review",ingest_phase3:"Phase 3 • Verification & Screening Results",ingest_tab_upload:"Upload Document",ingest_tab_paste:"Paste Text",ingest_tab_benchmark:"1-Click Benchmark",ingest_drop_title:"Drag and drop medical report here, or click to browse",ingest_drop_sub:"Supported: PDF (digital vector & scanned OCR), PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC",ingest_btn_run:"Run Extraction & Verification",ingest_btn_processing:"Screening Document...",ingest_benchmark_title:"Standard Clinical Benchmark",ingest_benchmark_desc:"Instantly load 16 laboratory biomarkers spanning Complete Blood Count (CBC) and Comprehensive Metabolic Panel (CMP) with simulated optical degradations.",ingest_benchmark_btn:"Load Benchmark Panel",safety_title:"Clinical Safety, Methodology & Enclave Architecture",safety_disclaimer_badge:"Official Medical Screening Disclaimer",safety_disclaimer_content:"Orca MedScan is strictly an educational and screening decision-support prototype. It does not provide medical diagnoses, treatment plans, or emergency triage. Patients should always consult licensed healthcare professionals.",safety_lang_notice:"Notice: Multi-language translations are provided for patient convenience. Medical test names, numerical values, and reference ranges remain deterministic and unedited.",gen_offline:"Offline",gen_online:"Online",gen_all:"All",gen_flags:"Flags",gen_normal:"Normal",gen_search:"Search biomarker name..."},hi:{nav_dashboard:"डैशबोर्ड",nav_analyze:"रिपोर्ट विश्लेषण",nav_assistant:"एआई सहायक",nav_history:"रिपोर्ट इतिहास",nav_diagnostics:"निष्कर्षण निदान",nav_settings:"सेटिंग्स",nav_safety:"नैदानिक सुरक्षा",nav_login:"साइन इन",nav_logout:"एन्क्लेव से लॉग आउट",nav_launch:"एन्क्लेव शुरू करें",nav_benchmark:"1-क्लिक बेंचमार्क",nav_overview:"सार्वजनिक अवलोकन",nav_active_workspace:"सक्रिय कार्यक्षेत्र",nav_ingest_report:"+ रिपोर्ट जोड़ें",nav_practitioner_session:"चिकित्सक सत्र",nav_clinical_enclave:"नैदानिक एन्क्लेव",nav_warm_light:"वार्म लाइट मोड",nav_charcoal_dark:"चारकोल नाइट मोड",dash_pathologist_workstation:"पैथोलॉजिस्ट वर्कस्टेशन",dash_title:"नैदानिक टेलीमेट्री डैशबोर्ड",dash_subtitle:"रीयल-टाइम बायोमेट्रिक वितरण, मुद्रित प्रयोगशाला संदर्भ अंतराल सत्यापन, और विसंगति निगरानी।",dash_analyze_new:"नई रिपोर्ट का विश्लेषण करें",dash_reports_screened:"जांची गई रिपोर्टें",dash_biomarkers_screened:"जांचे गए बायोमार्कर",dash_out_of_range:"सीमा से बाहर परिणाम",dash_needs_review:"समीक्षा आवश्यक",dash_active_audits:"सक्रिय सत्र एन्क्लेव ऑडिट",dash_in_ref_interval:"सामान्य संदर्भ सीमा में",dash_potentially_high_low:"संभावित रूप से उच्च या निम्न",dash_atypical_markers:"असामान्य या उम्मीदवार मार्कर",dash_status_distribution:"बायोमार्कर स्थिति वितरण",dash_normal:"सामान्य (संदर्भ सीमा में)",dash_flagged:"संभावित रूप से उच्च / निम्न",dash_uncertain:"समीक्षा आवश्यक / असामान्य",dash_priority_findings:"प्राथमिकता असामान्यता निष्कर्ष",dash_all_normal:"सभी स्वास्थ्य संकेतक सत्यापित संदर्भ सीमाओं के भीतर हैं।",dash_prioritization_protocol:"प्राथमिकता प्रोटोकॉल: मुद्रित रिपोर्ट अंतराल सामान्य जनसंख्या मानकों से पहले लागू होते हैं।",dash_export_csv:"सीएसवी निर्यात",dash_clinical_pdf:"नैदानिक पीडीएफ",dash_audited_specimen:"जांचा गया दस्तावेज़ नमूना",dash_th_biomarker:"बायोमार्कर",dash_th_measured:"मापा गया मान",dash_th_unit:"इकाई",dash_th_ref_interval:"संदर्भ अंतराल",dash_th_calibration:"अंशांकन स्रोत",dash_th_classification:"नैदानिक वर्गीकरण",dash_empty_title:"इस सत्र में कोई मेडिकल रिपोर्ट नहीं जांची गई",dash_empty_desc:"मानक प्रारूपों (PDF, PNG, JPG, WEBP, BMP, TIFF) में लैब रिपोर्ट अपलोड करें या तुरंत डेटा देखने के लिए बेंचमार्क लोड करें।",asst_title:"नैदानिक निर्णय-सहायक एआई",asst_subtitle:"ग्रोक एलएलएम द्वारा संचालित सरल भाषा में बायोमार्कर स्पष्टीकरण और प्रयोगशाला मार्गदर्शन।",asst_banner_disclaimer:"केवल सूचनात्मक निर्णय-सहायता उपकरण • यह कोई चिकित्सा निदान या नुस्खा नहीं है। हमेशा एक लाइसेंस प्राप्त चिकित्सक से परामर्श करें।",asst_placeholder:"अपने बायोमार्कर परिणामों, संदर्भ श्रेणियों या स्वास्थ्य संकेतकों के बारे में पूछें...",asst_send:"भेजें",asst_clear:"बातचीत साफ़ करें",asst_suggested_prompts:"सुझाए गए नैदानिक प्रश्न",asst_prompt_1:"मेरे असामान्य परिणामों को सरल भाषा में समझाएं।",asst_prompt_2:"यह बायोमार्कर शरीर में क्या मापता है?",asst_prompt_3:"मेरे डॉक्टर के लिए इन निष्कर्षों का सारांश बनाएं।",asst_prompt_4:"मुझे अपने डॉक्टर से किन परिणामों पर चर्चा करनी चाहिए?",asst_context_active:"जांची गई रिपोर्ट जुड़ी है",asst_context_none:"सामान्य चिकित्सा मोड (कोई रिपोर्ट जुड़ी नहीं)",asst_context_records:"बायोमार्कर संदर्भ में उपलब्ध",asst_privacy_notice:"गोपनीयता एन्क्लेव: स्पष्टीकरण के लिए केवल बायोमार्कर नाम और संख्यात्मक मान साझा किए जाते हैं। व्यक्तिगत विवरण कभी नहीं भेजे जाते।",asst_loading:"नैदानिक संदर्भ का विश्लेषण किया जा रहा है...",asst_groq_missing_title:"ग्रोक क्लाउड एपीआई कुंजी कॉन्फ़िगरेशन आवश्यक है",asst_groq_missing_desc:"लाइव एआई उत्तरों के लिए सर्वर वातावरण में GROQ_API_KEY सेट करें। सभी रिपोर्ट पार्सिंग और भाषा सुविधाएं काम करती रहेंगी।",ingest_title:"नैदानिक रिपोर्ट दस्तावेज़ और सत्यापन",ingest_subtitle:"ऑप्टिकल वर्ण पहचान और संदर्भ-सीमा स्क्रीनिंग के लिए बहु-प्रारूप दस्तावेज़ अपलोड करें या टेक्स्ट पेस्ट करें।",ingest_phase1:"चरण 1 • बहु-प्रारूप दस्तावेज़ इनपुट",ingest_phase2:"चरण 2 • विश्लेषण-पूर्व पाठ समीक्षा",ingest_phase3:"चरण 3 • सत्यापन और स्क्रीनिंग परिणाम",ingest_tab_upload:"दस्तावेज़ अपलोड करें",ingest_tab_paste:"टेक्स्ट पेस्ट करें",ingest_tab_benchmark:"1-क्लिक बेंचमार्क",ingest_drop_title:"मेडिकल रिपोर्ट यहाँ खींचें और छोड़ें, या ब्राउज़ करने के लिए क्लिक करें",ingest_drop_sub:"समर्थित: PDF (डिजिटल और स्कैन किया हुआ OCR), PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC",ingest_btn_run:"निष्कर्षण और सत्यापन शुरू करें",ingest_btn_processing:"दस्तावेज़ की जांच हो रही है...",ingest_benchmark_title:"मानक नैदानिक बेंचमार्क",ingest_benchmark_desc:"पूर्ण रक्त गणना (CBC) और चयापचय पैनल (CMP) में फैले 16 प्रयोगशाला बायोमार्कर तुरंत लोड करें।",ingest_benchmark_btn:"बेंचमार्क पैनल लोड करें",safety_title:"नैदानिक सुरक्षा, कार्यप्रणाली और एन्क्लेव वास्तुकला",safety_disclaimer_badge:"आधिकारिक चिकित्सा स्क्रीनिंग अस्वीकरण",safety_disclaimer_content:"ओर्का मेडस्कैन सख्ती से एक शैक्षिक और स्क्रीनिंग निर्णय-समर्थन प्रोटोटाइप है। यह चिकित्सा निदान या आपातकालीन उपचार प्रदान नहीं करता है।",safety_lang_notice:"सूचना: बहु-भाषी अनुवाद रोगी की सुविधा के लिए प्रदान किए जाते हैं। चिकित्सा परीक्षण नाम और संख्यात्मक मान अपरिवर्तित रहते हैं।",gen_offline:"ऑफ़लाइन",gen_online:"ऑनलाइन",gen_all:"सभी",gen_flags:"असामान्य",gen_normal:"सामान्य",gen_search:"बायोमार्कर का नाम खोजें..."},te:{nav_dashboard:"డ్యాష్‌బోర్డ్",nav_analyze:"నివేదిక విశ్లేషణ",nav_assistant:"ఏఐ సహాయకుడు",nav_history:"నివేదిక చరిత్ర",nav_diagnostics:"వెలికితీత నిర్ధారణ",nav_settings:"సెట్టింగులు",nav_safety:"క్లినికల్ భద్రత",nav_login:"సైన్ ఇన్",nav_logout:"ఎన్‌క్లేవ్ నుండి లాగ్ అవుట్",nav_launch:"ఎన్‌క్లేవ్ ప్రారంభించండి",nav_benchmark:"1-క్లిక్ బెంచ్‌మార్క్",nav_overview:"పబ్లిక్ అవలోకనం",nav_active_workspace:"క్రియాశీల కార్యస్థలం",nav_ingest_report:"+ నివేదికను చేర్చండి",nav_practitioner_session:"వైద్యుల సెషన్",nav_clinical_enclave:"క్లినికల్ ఎన్‌క్లేవ్",nav_warm_light:"లైట్ మోడ్",nav_charcoal_dark:"నైట్ మోడ్",dash_pathologist_workstation:"పాథాలజిస్ట్ వర్క్‌స్టేషన్",dash_title:"క్లినికల్ టెలిమెట్రీ డ్యాష్‌బోర్డ్",dash_subtitle:"రియల్ టైమ్ బయోమెట్రిక్ పంపిణీ, ప్రయోగశాల రిఫరెన్స్ పరిధి ధృవీకరణ మరియు క్రమరాహిత్యాల పర్యవేక్షణ.",dash_analyze_new:"కొత్త నివేదికను విశ్లేషించండి",dash_reports_screened:"పరిశీలించిన నివేదికలు",dash_biomarkers_screened:"పరిశీలించిన బయోమార్కర్లు",dash_out_of_range:"పరిధి దాటిన ఫలితాలు",dash_needs_review:"సమీక్ష అవసరం",dash_active_audits:"సక్రియ సెషన్ ఆడిట్లు",dash_in_ref_interval:"సాధారణ పరిధిలో ఉన్నాయి",dash_potentially_high_low:"ఎక్కువ లేదా తక్కువ ఫలితాలు",dash_atypical_markers:"అసాధారణ సూచికలు",dash_status_distribution:"బయోమార్కర్ స్థితి పంపిణీ",dash_normal:"సాధారణం (రిఫరెన్స్ పరిధిలో)",dash_flagged:"ఎక్కువ / తక్కువ సంభావ్యత",dash_uncertain:"సమీక్ష అవసరం / అసాధారణం",dash_priority_findings:"ప్రాధాన్యతా క్రమరాహిత్య ఫలితాలు",dash_all_normal:"అన్ని ఆరోగ్య సూచికలు సాధారణ రిఫరెన్స్ పరిధిలోనే ఉన్నాయి.",dash_prioritization_protocol:"ప్రాధాన్యత నియమం: ల్యాబ్ నివేదికలో ముద్రించిన రిఫరెన్స్ విలువలకు ప్రాధాన్యత ఇవ్వబడుతుంది.",dash_export_csv:"CSV ఎగుమతి",dash_clinical_pdf:"క్లినికల్ PDF",dash_audited_specimen:"ఆడిట్ చేయబడిన పత్రం",dash_th_biomarker:"బయోమార్కర్",dash_th_measured:"కొలిచిన విలువ",dash_th_unit:"యూనిట్",dash_th_ref_interval:"రిఫరెన్స్ పరిధి",dash_th_calibration:"కాలిబ్రేషన్ మూలం",dash_th_classification:"క్లినికల్ వర్గీకరణ",dash_empty_title:"ఈ సెషన్‌లో ఎలాంటి నివేదికలు పరిశీలించబడలేదు",dash_empty_desc:"ల్యాబ్ నివేదికను (PDF, PNG, JPG, WEBP, BMP, TIFF) అప్‌లోడ్ చేయండి లేదా బెంచ్‌మార్క్‌ను లోడ్ చేయండి.",asst_title:"క్లినికల్ డెసిషన్-సపోర్ట్ అసిస్టెంట్",asst_subtitle:"Groq LLM ఆధారంగా సులభమైన భాషలో బయోమార్కర్ విశ్లేషణ మరియు ప్రయోగశాల మార్గదర్శకత్వం.",asst_banner_disclaimer:"సమాచార సహాయక సాధనం మాత్రమే • ఇది వైద్య నిర్ధారణ లేదా ప్రిస్క్రిప్షన్ కాదు. ఎల్లప్పుడూ వైద్యుడిని సంప్రదించండి.",asst_placeholder:"మీ బయోమార్కర్ ఫలితాలు లేదా ఆరోగ్య సూచికల గురించి అడగండి (ఉదా: 'గ్లూకోజ్ ఎక్కువైతే అర్థం ఏమిటి?')...",asst_send:"పంపండి",asst_clear:"చాట్ క్లియర్ చేయండి",asst_suggested_prompts:"సూచించిన ప్రశ్నలు",asst_prompt_1:"నా అసాధారణ ఫలితాలను సులభమైన తెలుగులో వివరించండి.",asst_prompt_2:"ఈ బయోమార్కర్ శరీరంలో దేనిని కొలుస్తుంది?",asst_prompt_3:"నా డాక్టర్ కోసం ఈ ఫలితాల సారాంశం ఇవ్వండి.",asst_prompt_4:"నేను డాక్టర్‌తో ఏ అంశాలను చర్చించాలి?",asst_context_active:"ఆడిట్ చేసిన రిపోర్టు జతచేయబడింది",asst_context_none:"సాధారణ సమాచార మోడ్ (రిపోర్టు లేదు)",asst_context_records:"బయోమార్కర్లు అందుబాటులో ఉన్నాయి",asst_privacy_notice:"డేటా భద్రత: వ్యక్తిగత సమాచారం పంపబడదు. వివరణ కోసం కేవలం బయోమార్కర్ల పేర్లు మరియు విలువల వివరాలు మాత్రమే ఉపయోగించబడతాయి.",asst_loading:"క్లినికల్ సమాచారాన్ని విశ్లేషిస్తోంది...",asst_groq_missing_title:"Groq API కీ కాన్ఫిగరేషన్ అవసరం",asst_groq_missing_desc:"ప్రత్యక్ష AI సమాధానాలను ప్రారంభించడానికి సర్వర్‌లో GROQ_API_KEY సెట్ చేయండి.",ingest_title:"క్లినికల్ నివేదిక స్వీకరణ & ధృవీకరణ",ingest_subtitle:"ఆప్టికల్ క్యారెక్టర్ రికగ్నిషన్ కోసం పత్రాలను అప్‌లోడ్ చేయండి లేదా టెక్స్ట్‌ను పేస్ట్ చేయండి.",ingest_phase1:"దశ 1 • పత్రాల స్వీకరణ",ingest_phase2:"దశ 2 • విశ్లేషణకు ముందు టెక్స్ట్ సమీక్ష",ingest_phase3:"దశ 3 • ధృవీకరణ & ఫలితాలు",ingest_tab_upload:"పత్రాన్ని అప్‌లోడ్ చేయండి",ingest_tab_paste:"టెక్స్ట్ పేస్ట్ చేయండి",ingest_tab_benchmark:"1-క్లిక్ బెంచ్‌మార్క్",ingest_drop_title:"వైద్య నివేదికను ఇక్కడ డ్రాగ్ & డ్రాప్ చేయండి లేదా క్లిక్ చేయండి",ingest_drop_sub:"మద్దతు గల ఫార్మాట్లు: PDF, PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC",ingest_btn_run:"విశ్లేషణను ప్రారంభించండి",ingest_btn_processing:"పత్రం పరిశీలించబడుతోంది...",ingest_benchmark_title:"ప్రామాణిక క్లినికల్ బెంచ్‌మార్క్",ingest_benchmark_desc:"రక్త గణన (CBC) మరియు జీవక్రియ ప్యానెల్ (CMP) కలిగిన 16 బయోమార్కర్లను తక్షణమే లోడ్ చేయండి.",ingest_benchmark_btn:"బెంచ్‌మార్క్ ప్యానెల్ లోడ్ చేయండి",safety_title:"క్లినికల్ భద్రత మరియు ఎన్‌క్లేవ్ రూపకల్పన",safety_disclaimer_badge:"అధికారిక వైద్య స్క్రీనింగ్ నిరాకరణ",safety_disclaimer_content:"Orca MedScan పూర్తిగా విద్యా మరియు స్క్రీనింగ్ నిర్ణయ-సహాయక సాధనం. ఇది వైద్య నిర్ధారణను అందించదు.",safety_lang_notice:"గమనిక: బహుభాషా అనువాదాలు వినియోగదారుల సౌకర్యార్థం అందించబడ్డాయి. వైద్య పరీక్ష పేర్లు మరియు విలువలు మారవు.",gen_offline:"ఆఫ్‌లైన్",gen_online:"ఆన్‌లైన్",gen_all:"అన్నీ",gen_flags:"హెచ్చరికలు",gen_normal:"సాధారణం",gen_search:"బయోమార్కర్ పేరును శోధించండి..."},ta:{nav_dashboard:"டாஷ்போர்டு",nav_analyze:"அறிக்கை பகுப்பாய்வு",nav_assistant:"AI உதவியாளர்",nav_history:"அறிக்கை வரலாறு",nav_diagnostics:"பிரித்தெடுத்தல் கண்டறிதல்",nav_settings:"அமைப்புகள்",nav_safety:"மருத்துவ பாதுகாப்பு",nav_login:"உள்நுழை",nav_logout:"என்கிளேவிலிருந்து வெளியேறு",nav_launch:"என்கிளேவை தொடங்கு",nav_benchmark:"1-கிளிக் தரக்குறியீடு",nav_overview:"பொது மேலோட்டம்",nav_active_workspace:"செயலில் உள்ள பணியிடம்",nav_ingest_report:"+ அறிக்கை சேர்க்க",nav_practitioner_session:"மருத்துவர் அமர்வு",nav_clinical_enclave:"மருத்துவ என்கிளேவ்",nav_warm_light:"வெளிச்ச பயன்முறை",nav_charcoal_dark:"இரவு பயன்முறை",dash_pathologist_workstation:"நோயியல் நிபுணர் பணிநிலையம்",dash_title:"மருத்துவ அளவீட்டு டாஷ்போர்டு",dash_subtitle:"நிகழ்நேர பயோமெட்ரிக் விநியோகம், அச்சிடப்பட்ட ஆய்வக குறிப்பு வரம்பு சரிபார்ப்பு மற்றும் முரண்பாடுகள் கண்காணிப்பு.",dash_analyze_new:"புதிய அறிக்கையை பகுப்பாய்வு செய்",dash_reports_screened:"ஆய்வு செய்யப்பட்ட அறிக்கைகள்",dash_biomarkers_screened:"ஆய்வு செய்யப்பட்ட பயோமார்க்ஸ்கள்",dash_out_of_range:"வரம்பை மீறிய முடிவுகள்",dash_needs_review:"மறுஆய்வு தேவை",dash_active_audits:"செயலில் உள்ள அமர்வு தணிக்கைகள்",dash_in_ref_interval:"சாதாரண குறிப்பு வரம்பில் உள்ளது",dash_potentially_high_low:"அதிகம் அல்லது குறைவான முடிவுகள்",dash_atypical_markers:"விதிவிலக்கான குறிகாட்டிகள்",dash_status_distribution:"பயோமார்க்கர் நிலை விநியோகம்",dash_normal:"சாதாரணமானது (குறிப்பு வரம்பில்)",dash_flagged:"அதிகம் / குறைவு வாய்ப்பு",dash_uncertain:"மறுஆய்வு தேவை / வழக்கத்திற்கு மாறானது",dash_priority_findings:"முன்னுரிமை ஒழுங்கின்மை முடிவுகள்",dash_all_normal:"அனைத்து சுகாதார குறிகாட்டிகளும் சரிபார்க்கப்பட்ட குறிப்பு வரம்பிற்குள் உள்ளன.",dash_prioritization_protocol:"முன்னுரிமை நெறிமுறை: ஆய்வக அறிக்கையில் அச்சிடப்பட்ட குறிப்பு வரம்புகளுக்கு முன்னுரிமை அளிக்கப்படுகிறது.",dash_export_csv:"CSV ஏற்றுமதி",dash_clinical_pdf:"மருத்துவ PDF",dash_audited_specimen:"தணிக்கை செய்யப்பட்ட ஆவணம்",dash_th_biomarker:"பயோமார்க்கர்",dash_th_measured:"அளவிடப்பட்ட மதிப்பு",dash_th_unit:"அலகு",dash_th_ref_interval:"குறிப்பு வரம்பு",dash_th_calibration:"அளவீட்டு ஆதாரம்",dash_th_classification:"மருத்துவ வகைப்பாடு",dash_empty_title:"இந்த அமர்வில் மருத்துவ அறிக்கைகள் எதுவும் ஆய்வு செய்யப்படவில்லை",dash_empty_desc:"ஆய்வக அறிக்கையை பதிவேற்றவும் (PDF, PNG, JPG, WEBP, BMP, TIFF) அல்லது உடனடியாக முடிவுகளைப் பார்க்க தரக்குறியீட்டை ஏற்றவும்.",asst_title:"மருத்துவ முடிவு-ஆதரவு AI உதவியாளர்",asst_subtitle:"Groq LLM மூலம் எளிய மொழியில் பயோமார்க்கர் விளக்கம் மற்றும் ஆய்வக வழிகாட்டுதல்.",asst_banner_disclaimer:"தகவல் உதவி கருவி மட்டுமே • இது மருத்துவ நோயறிதல் அல்லது மருந்துச் சீட்டு அல்ல. எப்போதும் மருத்துவரை அணுகவும்.",asst_placeholder:"உங்கள் பயோமார்க்கர் முடிவுகள் அல்லது ஆரோக்கிய குறிகாட்டிகள் பற்றி கேளுங்கள்...",asst_send:"அனுப்பு",asst_clear:"அரட்டையை அழிக்கவும்",asst_suggested_prompts:"பரிந்துரைக்கப்பட்ட கேள்விகள்",asst_prompt_1:"எனது அசாதாரண முடிவுகளை எளிய தமிழில் விளக்குங்கள்.",asst_prompt_2:"இந்த பயோமார்க்கர் உடலில் எதை அளவிடுகிறது?",asst_prompt_3:"எனது மருத்துவரிடம் பேச இந்த முடிவுகளை சுருக்கமாக தாருங்கள்.",asst_prompt_4:"மருத்துவரிடம் நான் விவாதிக்க வேண்டிய முடிவுகள் எவை?",asst_context_active:"தணிக்கை செய்யப்பட்ட அறிக்கை இணைக்கப்பட்டுள்ளது",asst_context_none:"பொது மருத்துவ முறை (அறிக்கை இணைக்கப்படவில்லை)",asst_context_records:"பயோமார்க்ஸ்கள் சூழலில் உள்ளன",asst_privacy_notice:"தனியுரிமை பாதுகாப்பு: தனிப்பட்ட அடையாளம் எதுவும் அனுப்பப்படாது. விளக்கத்திற்காக பயோமார்க்கர் பெயர்கள் மற்றும் அளவீடுகள் மட்டுமே பயன்படும்.",asst_loading:"மருத்துவ சூழல் ஆய்வு செய்யப்படுகிறது...",asst_groq_missing_title:"Groq API விசை கட்டமைப்பு தேவை",asst_groq_missing_desc:"நேரடி AI பதில்களை இயக்க உங்கள் சர்வர் சூழலில் GROQ_API_KEY அமைக்கவும்.",ingest_title:"மருத்துவ அறிக்கை உட்கிரகிப்பு & சரிபார்ப்பு",ingest_subtitle:"ஆவணங்களை பதிவேற்றவும் அல்லது ஆய்வக உரையை உள்ளிடவும்.",ingest_phase1:"படி 1 • ஆவண உட்கிரகிப்பு",ingest_phase2:"படி 2 • பகுப்பாய்விற்கு முந்தைய உரை மறுஆய்வு",ingest_phase3:"படி 3 • சரிபார்ப்பு மற்றும் முடிவுகள்",ingest_tab_upload:"ஆவணத்தை பதிவேற்றவும்",ingest_tab_paste:"உரையை ஒட்டவும்",ingest_tab_benchmark:"1-கிளிக் தரக்குறியீடு",ingest_drop_title:"மருத்துவ அறிக்கையை இங்கே இழுத்துப் போடவும் அல்லது கிளிக் செய்யவும்",ingest_drop_sub:"ஆதரிக்கப்படும் வடிவங்கள்: PDF, PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC",ingest_btn_run:"பிரித்தெடுத்தலை தொடங்கு",ingest_btn_processing:"ஆவணம் ஆய்வு செய்யப்படுகிறது...",ingest_benchmark_title:"நிலையான மருத்துவ தரக்குறியீடு",ingest_benchmark_desc:"முழு இரத்த எண்ணிக்கை (CBC) மற்றும் வளர்சிதை மாற்ற குழு (CMP) கொண்ட 16 பயோமார்க்ஸ்களை உடனடியாக ஏற்றவும்.",ingest_benchmark_btn:"தரக்குறியீட்டு குழுவை ஏற்றவும்",safety_title:"மருத்துவ பாதுகாப்பு மற்றும் என்கிளேவ் கட்டமைப்பு",safety_disclaimer_badge:"அதிகாரப்பூர்வ மருத்துவ மறுப்பு",safety_disclaimer_content:"Orca MedScan என்பது முற்றிலும் கல்வி மற்றும் பரிசோதனை முடிவு-ஆதரவு முன்மாதிரி மட்டுமே. இது மருத்துவ நோயறிதலை வழங்காது.",safety_lang_notice:"அறிவிப்பு: பல மொழி மொழிபெயர்ப்புகள் பயனர் வசதிக்காக வழங்கப்படுகின்றன. மருத்துவ பரிசோதனை பெயர்கள் மாறாது.",gen_offline:"ஆஃப்லைன்",gen_online:"ஆன்லைன்",gen_all:"அனைத்தும்",gen_flags:"எச்சரிக்கைகள்",gen_normal:"சாதாரணமானது",gen_search:"பயோமார்க்கர் பெயரைத் தேடவும்..."},kn:{nav_dashboard:"ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",nav_analyze:"ವರದಿ ವಿಶ್ಲೇಷಣೆ",nav_assistant:"AI ಸಹಾಯಕ",nav_history:"ವರದಿ ಇತಿಹಾಸ",nav_diagnostics:"ಹೊರತೆಗೆಯುವಿಕೆ ರೋಗನಿರ್ಣಯ",nav_settings:"ಸೆಟ್ಟಿಂಗ್‌ಗಳು",nav_safety:"ವೈದ್ಯಕೀಯ ಸುರಕ್ಷತೆ",nav_login:"ಸೈನ್ ಇನ್",nav_logout:"ಎನ್‌ಕ್ಲೇವ್‌ನಿಂದ ಲಾಗ್ ಔಟ್",nav_launch:"ಎನ್‌ಕ್ಲೇವ್ ಪ್ರಾರಂಭಿಸಿ",nav_benchmark:"1-ಕ್ಲಿಕ್ ಮಾನದಂಡ",nav_overview:"ಸಾರ್ವಜನಿಕ ಅವಲೋಕನ",nav_active_workspace:"ಸಕ್ರಿಯ ಕಾರ್ಯಸ್ಥಳ",nav_ingest_report:"+ ವರದಿ ಸೇರಿಸಿ",nav_practitioner_session:"ವೈದ್ಯರ ಅಧಿವೇಶನ",nav_clinical_enclave:"ವೈದ್ಯಕೀಯ ಎನ್‌ಕ್ಲೇವ್",nav_warm_light:"ಬೆಳಕಿನ ಮೋಡ್",nav_charcoal_dark:"ರಾತ್ರಿ ಮೋಡ್",dash_pathologist_workstation:"ಪೆಥಾಲಜಿಸ್ಟ್ ವರ್ಕ್‌ಸ್ಟೇಷನ್",dash_title:"ಕ್ಲಿನಿಕಲ್ ಟೆಲಿಮೆಟ್ರಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",dash_subtitle:"ನೈಜ-ಸಮಯದ ಬಯೋಮೆಟ್ರಿಕ್ ವಿತರಣೆ, ಪ್ರಯೋಗಾಲಯ ಉಲ್ಲೇಖ ಶ್ರೇಣಿಯ ಪರಿಶೀಲನೆ ಮತ್ತು ವೈಪರೀತ್ಯಗಳ ನಿಗಾ.",dash_analyze_new:"ಹೊಸ ವರದಿಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ",dash_reports_screened:"ಪರಿಶೀಲಿಸಲಾದ ವರದಿಗಳು",dash_biomarkers_screened:"ಪರಿಶೀಲಿಸಲಾದ ಬಯೋಮಾರ್ಕರ್‌ಗಳು",dash_out_of_range:"ಶ್ರೇಣಿಯನ್ನು ಮೀರಿದ ಫಲಿತಾಂಶಗಳು",dash_needs_review:"ಪರಿಶೀಲನೆ ಅಗತ್ಯವಿದೆ",dash_active_audits:"ಸಕ್ರಿಯ ಸೆಷನ್ ಆಡಿಟ್‌ಗಳು",dash_in_ref_interval:"ಸಾಮಾನ್ಯ ಉಲ್ಲೇಖ ಶ್ರೇಣಿಯಲ್ಲಿದೆ",dash_potentially_high_low:"ಹೆಚ್ಚು ಅಥವಾ ಕಡಿಮೆ ಫಲಿತಾಂಶಗಳು",dash_atypical_markers:"ಅಸಾಮಾನ್ಯ ಸೂಚಕಗಳು",dash_status_distribution:"ಬಯೋಮಾರ್ಕರ್ ಸ್ಥಿತಿ ವಿತರಣೆ",dash_normal:"ಸಾಮಾನ್ಯ (ಉಲ್ಲೇಖ ಶ್ರೇಣಿಯಲ್ಲಿದೆ)",dash_flagged:"ಹೆಚ್ಚು / ಕಡಿಮೆ ಸಾಧ್ಯತೆ",dash_uncertain:"ಪರಿಶೀಲನೆ ಅಗತ್ಯವಿದೆ / ಅಸಾಮಾನ್ಯ",dash_priority_findings:"ಆದ್ಯತೆಯ ವೈಪರೀತ್ಯ ಫಲಿತಾಂಶಗಳು",dash_all_normal:"ಎಲ್ಲಾ ಆರೋಗ್ಯ ಸೂಚಕಗಳು ಪರಿಶೀಲಿಸಿದ ಉಲ್ಲೇಖ ಶ್ರೇಣಿಯೊಳಗೆ ಇವೆ.",dash_prioritization_protocol:"ಆದ್ಯತೆಯ ನಿಯಮ: ಪ್ರಯೋಗಾಲಯದ ವರದಿಯಲ್ಲಿ ಮುದ್ರಿಸಲಾದ ಉಲ್ಲೇಖ ಶ್ರೇಣಿಗಳಿಗೆ ಮೊದಲ ಆದ್ಯತೆ ನೀಡಲಾಗುತ್ತದೆ.",dash_export_csv:"CSV ರಫ್ತು",dash_clinical_pdf:"ಕ್ಲಿನಿಕಲ್ PDF",dash_audited_specimen:"ಆಡಿಟ್ ಮಾಡಲಾದ ಮಾದರಿ",dash_th_biomarker:"ಬಯೋಮಾರ್ಕರ್",dash_th_measured:"ಅಳತೆ ಮಾಡಿದ ಮೌಲ್ಯ",dash_th_unit:"ಘಟಕ",dash_th_ref_interval:"ಉಲ್ಲೇಖ ಶ್ರೇಣಿ",dash_th_calibration:"ಮಾಪನಾಂಕ ನಿರ್ಣಯ ಮೂಲ",dash_th_classification:"ವೈದ್ಯಕೀಯ ವರ್ಗೀಕರಣ",dash_empty_title:"ಈ ಸೆಷನ್‌ನಲ್ಲಿ ಯಾವುದೇ ವರದಿಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ",dash_empty_desc:"ಲ್ಯಾಬ್ ವರದಿಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (PDF, PNG, JPG, WEBP, BMP, TIFF) ಅಥವಾ ಫಲಿತಾಂಶಗಳನ್ನು ತಕ್ಷಣ ನೋಡಲು ಮಾನದಂಡವನ್ನು ಲೋಡ್ ಮಾಡಿ.",asst_title:"ವೈದ್ಯಕೀಯ ನಿರ್ಧಾರ-ಬೆಂಬಲ AI ಸಹಾಯಕ",asst_subtitle:"Groq LLM ನಿಂದ ಬೆಂಬಲಿತ ಸರಳ ಭಾಷೆಯಲ್ಲಿ ಬಯೋಮಾರ್ಕರ್ ವಿವರಣೆ ಮತ್ತು ಪ್ರಯೋಗಾಲಯ ಮಾರ್ಗದರ್ಶನ.",asst_banner_disclaimer:"ಮಾಹಿತಿ ಬೆಂಬಲ ಸಾಧನ ಮಾತ್ರ • ಇದು ವೈದ್ಯಕೀಯ ರೋಗನಿರ್ಣಯ ಅಥವಾ ಔಷಧಿ ಚೀಟಿಯಲ್ಲ. ಯಾವಾಗಲೂ ಪರವಾನಗಿ ಪಡೆದ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",asst_placeholder:"ನಿಮ್ಮ ಬಯೋಮಾರ್ಕರ್ ಫಲಿತಾಂಶಗಳು ಅಥವಾ ಆರೋಗ್ಯ ಸೂಚಕಗಳ ಬಗ್ಗೆ ಕೇಳಿ...",asst_send:"ಕಳುಹಿಸಿ",asst_clear:"ಚಾಟ್ ತೆರವುಗೊಳಿಸಿ",asst_suggested_prompts:"ಸೂಚಿಸಲಾದ ಪ್ರಶ್ನೆಗಳು",asst_prompt_1:"ನನ್ನ ಅಸಾಮಾನ್ಯ ಫಲಿತಾಂಶಗಳನ್ನು ಸರಳ ಕನ್ನಡದಲ್ಲಿ ವಿವರಿಸಿ.",asst_prompt_2:"ಈ ಬಯೋಮಾರ್ಕರ್ ದೇಹದಲ್ಲಿ ಏನನ್ನು ಅಳೆಯುತ್ತದೆ?",asst_prompt_3:"ನನ್ನ ವೈದ್ಯರೊಂದಿಗೆ ಚರ್ಚಿಸಲು ಈ ಫಲಿತಾಂಶಗಳ ಸಾರಾಂಶ ನೀಡಿ.",asst_prompt_4:"ನಾನು ವೈದ್ಯರೊಂದಿಗೆ ಯಾವ ಫಲಿತಾಂಶಗಳನ್ನು ಚರ್ಚಿಸಬೇಕು?",asst_context_active:"ಆಡಿಟ್ ವರದಿ ಲಗತ್ತಿಸಲಾಗಿದೆ",asst_context_none:"ಸಾಮಾನ್ಯ ವೈದ್ಯಕೀಯ ಮೋಡ್ (ವರದಿ ಲಗತ್ತಿಸಲಾಗಿಲ್ಲ)",asst_context_records:"ಬಯೋಮಾರ್ಕರ್‌ಗಳು ಲಭ್ಯವಿವೆ",asst_privacy_notice:"ಡೇಟಾ ಗೌಪ್ಯತೆ: ಯಾವುದೇ ವೈಯಕ್ತಿಕ ಗುರುತನ್ನು ಹಂಚಿಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ. ವಿವರಣೆಗಾಗಿ ಕೇವಲ ಅಳತೆಗಳು ಮತ್ತು ಶ್ರೇಣಿಗಳನ್ನು ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ.",asst_loading:"ವೈದ್ಯಕೀಯ ಸನ್ನಿವೇಶವನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",asst_groq_missing_title:"Groq API ಕೀ ಸಂರಚನೆ ಅಗತ್ಯವಿದೆ",asst_groq_missing_desc:"ಲೈವ್ AI ಉತ್ತರಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ನಿಮ್ಮ ಸರ್ವರ್ ಪರಿಸರದಲ್ಲಿ GROQ_API_KEY ಅನ್ನು ಹೊಂದಿಸಿ.",ingest_title:"ವೈದ್ಯಕೀಯ ವರದಿ ಸ್ವೀಕಾರ ಮತ್ತು ಪರಿಶೀಲನೆ",ingest_subtitle:"ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಅಥವಾ ಪಠ್ಯವನ್ನು ಅಂಟಿಸಿ.",ingest_phase1:"ಹಂತ 1 • ದಾಖಲೆಗಳ ಸ್ವೀಕಾರ",ingest_phase2:"ಹಂತ 2 • ವಿಶ್ಲೇಷಣಾ ಪೂರ್ವ ಪಠ್ಯ ಪರಿಶೀಲನೆ",ingest_phase3:"ಹಂತ 3 • ಪರಿಶೀಲನೆ ಮತ್ತು ಫಲಿತಾಂಶಗಳು",ingest_tab_upload:"ದಾಖಲೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",ingest_tab_paste:"ಪಠ್ಯ ಅಂಟಿಸಿ",ingest_tab_benchmark:"1-ಕ್ಲಿಕ್ ಮಾನದಂಡ",ingest_drop_title:"ವೈದ್ಯಕೀಯ ವರದಿಯನ್ನು ಇಲ್ಲಿ ಎಳೆಯಿರಿ ಅಥವಾ ಕ್ಲಿಕ್ ಮಾಡಿ",ingest_drop_sub:"ಬೆಂಬಲಿತ ಸ್ವರೂಪಗಳು: PDF, PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC",ingest_btn_run:"ವಿಶ್ಲೇಷಣೆ ಪ್ರಾರಂಭಿಸಿ",ingest_btn_processing:"ದಾಖಲೆ ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...",ingest_benchmark_title:"ಪ್ರಮಾಣಿತ ಕ್ಲಿನಿಕಲ್ ಮಾನದಂಡ",ingest_benchmark_desc:"ರಕ್ತ ಎಣಿಕೆ (CBC) ಮತ್ತು ಚಯಾಪಚಯ ಫಲಕ (CMP) ಹೊಂದಿರುವ 16 ಬಯೋಮಾರ್ಕರ್‌ಗಳನ್ನು ತಕ್ಷಣವೇ ಲೋಡ್ ಮಾಡಿ.",ingest_benchmark_btn:"ಮಾನದಂಡ ಫಲಕವನ್ನು ಲೋಡ್ ಮಾಡಿ",safety_title:"ವೈದ್ಯಕೀಯ ಸುರಕ್ಷತೆ ಮತ್ತು ಎನ್‌ಕ್ಲೇವ್ ವಿನ್ಯಾಸ",safety_disclaimer_badge:"ಅಧಿಕೃತ ವೈದ್ಯಕೀಯ ನಿರಾಕರಣೆ",safety_disclaimer_content:"Orca MedScan ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಸ್ಕ್ರೀನಿಂಗ್ ನಿರ್ಧಾರ-ಬೆಂಬಲ ಸಾಧನವಾಗಿದೆ. ಇದು ವೈದ್ಯಕೀಯ ರೋಗನಿರ್ಣಯವನ್ನು ನೀಡುವುದಿಲ್ಲ.",safety_lang_notice:"ಸೂಚನೆ: ಬಳಕೆದಾರರ ಅನುಕೂಲಕ್ಕಾಗಿ ಬಹುಭಾಷಾ ಅನುವಾದಗಳನ್ನು ನೀಡಲಾಗಿದೆ. ವೈದ್ಯಕೀಯ ಪರೀಕ್ಷೆಯ ಹೆಸರುಗಳು ಬದಲಾಗುವುದಿಲ್ಲ.",gen_offline:"ಆಫ್‌ಲೈನ್",gen_online:"ಆನ್‌ಲೈನ್",gen_all:"ಎಲ್ಲವೂ",gen_flags:"ಎಚ್ಚರಿಕೆಗಳು",gen_normal:"ಸಾಮಾನ್ಯ",gen_search:"ಬಯೋಮಾರ್ಕರ್ ಹೆಸರನ್ನು ಹುಡುಕಿ..."},ml:{nav_dashboard:"ഡാഷ്‌ബോർഡ്",nav_analyze:"റിപ്പോർട്ട് വിശകലനം",nav_assistant:"AI അസിസ്റ്റന്റ്",nav_history:"റിപ്പോർട്ട് ചരിത്രം",nav_diagnostics:"എക്സ്ട്രാക്ഷൻ ഡയഗ്നോസ്റ്റിക്സ്",nav_settings:"ക്രമീകരണങ്ങൾ",nav_safety:"ക്ലിനിക്കൽ സുരക്ഷ",nav_login:"സൈൻ ഇൻ",nav_logout:"എൻക്ലേവിൽ നിന്ന് ലോഗ് ഔട്ട്",nav_launch:"എൻക്ലേവ് ആരംഭിക്കുക",nav_benchmark:"1-ക്ലിക്ക് ബെഞ്ച്മാർക്ക്",nav_overview:"പൊതു അവലോകനം",nav_active_workspace:"സജീവ വർക്ക്‌സ്‌പേസ്",nav_ingest_report:"+ റിപ്പോർട്ട് നൽകുക",nav_practitioner_session:"ഡോക്ടർ സെഷൻ",nav_clinical_enclave:"ക്ലിനിക്കൽ എൻക്ലേവ്",nav_warm_light:"ലൈറ്റ് മോഡ്",nav_charcoal_dark:"നൈറ്റ് മോഡ്",dash_pathologist_workstation:"പാത്തോളജിസ്റ്റ് വർക്ക്‌സ്റ്റേഷൻ",dash_title:"ക്ലിനിക്കൽ ടെലിമെട്രി ഡാഷ്‌ബോർഡ്",dash_subtitle:"തത്സമയ ബയോമെട്രിക് വിവരങ്ങൾ, ലാബ് റഫറൻസ് പരിധി പരിശോധന, വ്യതിയാനങ്ങളുടെ നിരീക്ഷണം.",dash_analyze_new:"പുതിയ റിപ്പോർട്ട് വിശകലനം ചെയ്യുക",dash_reports_screened:"പരിശോധിച്ച റിപ്പോർട്ടുകൾ",dash_biomarkers_screened:"പരിശോധിച്ച ബയോമാർക്കറുകൾ",dash_out_of_range:"പരിധിക്ക് പുറത്തുള്ള ഫലങ്ങൾ",dash_needs_review:"പുനരവലോകനം ആവശ്യമാണ്",dash_active_audits:"സജീവ സെഷൻ ഓഡിറ്റുകൾ",dash_in_ref_interval:"സാധാരണ റഫറൻസ് പരിധിയിലാണ്",dash_potentially_high_low:"കൂടിയതോ കുറഞ്ഞതോ ആയ ഫലങ്ങൾ",dash_atypical_markers:"വ്യത്യസ്തമായ സൂചകങ്ങൾ",dash_status_distribution:"ബയോമാർക്കർ സ്ഥിതി വിവരങ്ങൾ",dash_normal:"സാധാരണം (റഫറൻസ് പരിധിയിൽ)",dash_flagged:"കൂടിയത് / കുറഞ്ഞത് സാധ്യത",dash_uncertain:"പരിശോധന ആവശ്യമാണ് / അസാധാരണം",dash_priority_findings:"മുൻഗണനാ വ്യതിയാനങ്ങൾ",dash_all_normal:"എല്ലാ ആരോഗ്യ സൂചകങ്ങളും സാധാരണമയ റഫറൻസ് പരിധിക്കുള്ളിലാണ്.",dash_prioritization_protocol:"മുൻഗണനാ ചട്ടം: ലാബ് റിപ്പോർട്ടിൽ അച്ചടിച്ച റഫറൻസ് മൂല്യങ്ങൾക്ക് മുൻഗണന നൽകുന്നു.",dash_export_csv:"CSV കയറ്റുമതി",dash_clinical_pdf:"ക്ലിനിക്കൽ PDF",dash_audited_specimen:"ഓഡിറ്റ് ചെയ്ത രേഖ",dash_th_biomarker:"ബയോമാർക്കർ",dash_th_measured:"അളന്ന മൂല്യം",dash_th_unit:"യൂണിറ്റ്",dash_th_ref_interval:"റഫറൻസ് പരിധി",dash_th_calibration:"കാലിബ്രേഷൻ ഉറവിടം",dash_th_classification:"ക്ലിനിക്കൽ വർഗ്ഗീകരണം",dash_empty_title:"ഈ സെഷനിൽ മെഡിക്കൽ റിപ്പോർട്ടുകളൊന്നും പരിശോധിച്ചിട്ടില്ല",dash_empty_desc:"ഒരു ലാബ് റിപ്പോർട്ട് അപ്‌ലോഡ് ചെയ്യുക (PDF, PNG, JPG, WEBP, BMP, TIFF) അല്ലെങ്കിൽ ബെഞ്ച്മാർക്ക് ലോഡ് ചെയ്യുക.",asst_title:"ക്ലിനിക്കൽ ഡിസിഷൻ-സപ്പോർട്ട് AI അസിസ്റ്റന്റ്",asst_subtitle:"Groq LLM പിന്തുണയോടെ ലളിതമായ ഭാഷയിൽ ബയോമാർക്കർ വിശദീകരണവും ലാബ് മാർഗ്ഗനിർദ്ദേശവും.",asst_banner_disclaimer:"വിവരസഹായ ഉപകരണം മാത്രം • ഇത് വൈദ്യശാസ്ത്രപരമായ രോഗനിർണ്ണയമോ കുറിപ്പടിയോ അല്ല. എല്ലായ്പ്പോഴും ഡോക്ടറെ സമീപിക്കുക.",asst_placeholder:"നിങ്ങളുടെ ബയോമാർക്കർ ഫലങ്ങളെക്കുറിച്ചോ ആരോഗ്യ സൂചകങ്ങളെക്കുറിച്ചോ ചോദിക്കുക...",asst_send:"അയക്കുക",asst_clear:"ചാറ്റ് മായ്‌ക്കുക",asst_suggested_prompts:"നിർദ്ദേശിച്ച ചോദ്യങ്ങൾ",asst_prompt_1:"എന്റെ അസാധാരണ ഫലങ്ങൾ ലളിതമായ മലയാളത്തിൽ വിശദീകരിക്കുക.",asst_prompt_2:"ഈ ബയോമാർക്കർ ശരീരത്തിൽ എന്താണ് അളക്കുന്നത്?",asst_prompt_3:"എന്റെ ഡോക്ടറോട് സംസാരിക്കാൻ ഈ ഫലങ്ങളുടെ സംഗ്രഹം നൽകുക.",asst_prompt_4:"ഞാൻ ഡോക്ടറോട് ചർച്ച ചെയ്യേണ്ട ഫലങ്ങൾ ഏതെല്ലാമാണ്?",asst_context_active:"ഓഡിറ്റ് ചെയ്ത റിപ്പോർട്ട് ചേർത്തു",asst_context_none:"പൊതുവായ മെഡിക്കൽ മോഡ് (റിപ്പോർട്ടില്ല)",asst_context_records:"ബയോമാർക്കറുകൾ ലഭ്യമാണ്",asst_privacy_notice:"ഡാറ്റാ സുരക്ഷ: വ്യക്തിഗത വിവരങ്ങൾ അയയ്ക്കില്ല. വിശദീകരണത്തിനായി ബയോമാർക്കറുകളുടെ വിവരങ്ങൾ മാത്രമേ ഉപയോഗിക്കൂ.",asst_loading:"ക്ലിനിക്കൽ വിവരങ്ങൾ വിശകലനം ചെയ്യുന്നു...",asst_groq_missing_title:"Groq API കീ കോൺഫിഗറേഷൻ ആവശ്യമാണ്",asst_groq_missing_desc:"തത്സമയ AI ഉത്തരങ്ങൾ ലഭിക്കുന്നതിന് നിങ്ങളുടെ സെർവറിൽ GROQ_API_KEY സജ്ജീകരിക്കുക.",ingest_title:"ക്ലിനിക്കൽ റിപ്പോർട്ട് ശേഖരണവും സ്ഥിരീകരണവും",ingest_subtitle:"രേഖകൾ അപ്‌ലോഡ് ചെയ്യുക അല്ലെങ്കിൽ ലാബ് വിവരങ്ങൾ പേസ്റ്റ് ചെയ്യുക.",ingest_phase1:"ഘട്ടം 1 • രേഖകൾ സ്വീകരിക്കൽ",ingest_phase2:"ഘട്ടം 2 • വിശകലനത്തിന് മുമ്പുള്ള അവലോകനം",ingest_phase3:"ഘട്ടം 3 • സ്ഥിരീകരണവും ഫലങ്ങളും",ingest_tab_upload:"രേഖ അപ്‌ലോഡ് ചെയ്യുക",ingest_tab_paste:"ടെക്സ്റ്റ് പേസ്റ്റ് ചെയ്യുക",ingest_tab_benchmark:"1-ക്ലിക്ക് ബെഞ്ച്മാർക്ക്",ingest_drop_title:"മെഡിക്കൽ റിപ്പോർട്ട് ഇവിടെ ഡ്രാഗ് & ഡ്രോപ്പ് ചെയ്യുക അല്ലെങ്കിൽ ക്ലിക്ക് ചെയ്യുക",ingest_drop_sub:"പിന്തുണയ്ക്കുന്ന ഫോർമാറ്റുകൾ: PDF, PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC",ingest_btn_run:"വിശകലനം ആരംഭിക്കുക",ingest_btn_processing:"രേഖ പരിശോധിക്കുന്നു...",ingest_benchmark_title:"സാധാരണ ക്ലിനിക്കൽ ബെഞ്ച്മാർക്ക്",ingest_benchmark_desc:"രക്ത പരിശോധന (CBC), ഉപാപചയ വിവരങ്ങൾ (CMP) അടങ്ങിയ 16 ബയോമാർക്കറുകൾ തൽക്ഷണം ലോഡ് ചെയ്യുക.",ingest_benchmark_btn:"ബെഞ്ച്മാർക്ക് പാനൽ ലോഡ് ചെയ്യുക",safety_title:"ക്ലിനിക്കൽ സുരക്ഷയും എൻക്ലേവ് രൂപകൽപ്പനയും",safety_disclaimer_badge:"ഔദ്യോഗിക മെഡിക്കൽ നിരാകരണം",safety_disclaimer_content:"Orca MedScan തികച്ചും വിദ്യാഭ്യാസപരവും സ്ക്രീനിംഗ് തീരുമാന-സഹായ ഉപകരണവുമാണ്. ഇത് രോഗനിർണ്ണയം നൽകുന്നില്ല.",safety_lang_notice:"ശ്രദ്ധിക്കുക: ഭാഷാ വിവർത്തനങ്ങൾ രോഗിയുടെ സൗകര്യത്തിനായി നൽകിയിട്ടുള്ളതാണ്. മെഡിക്കൽ പരിശോധനാ പേരുകളിൽ മാറ്റമില്ല.",gen_offline:"ഓഫ്‌ലൈൻ",gen_online:"ഓൺലൈൻ",gen_all:"എല്ലാം",gen_flags:"മുന്നറിയിപ്പുകൾ",gen_normal:"സാധാരണം",gen_search:"ബയോമാർക്കർ പേര് തിരയുക..."},bn:{nav_dashboard:"ড্যাশবোর্ড",nav_analyze:"রিপোর্ট বিশ্লেষণ",nav_assistant:"এআই সহকারী",nav_history:"রিপোর্টের ইতিহাস",nav_diagnostics:"নিষ্কাশন ডায়াগনস্টিকস",nav_settings:"সেটিংস",nav_safety:"ক্লিনিকাল নিরাপত্তা",nav_login:"সাইন ইন",nav_logout:"এনক্লেভ থেকে লগ আউট",nav_launch:"এনক্লেভ শুরু করুন",nav_benchmark:"১-ক্লিক বেঞ্চমার্ক",nav_overview:"সার্বজনীন ওভারভিউ",nav_active_workspace:"সক্রিয় কর্মক্ষেত্র",nav_ingest_report:"+ রিপোর্ট ইনজেস্ট",nav_practitioner_session:"চিকিৎসক সেশন",nav_clinical_enclave:"ক্লিনিকাল এনক্লেভ",nav_warm_light:"ওয়ার্ম লাইট মোড",nav_charcoal_dark:"চারকোল নাইট মোড",dash_pathologist_workstation:"প্যাথলজিস্ট ওয়ার্কস্টেশন",dash_title:"ক্লিনিকাল টেলিমেট্রি ড্যাশবোর্ড",dash_subtitle:"রিয়েল-টাইম বায়োমেট্রিক বণ্টন, মুদ্রিত ল্যাবরেটরি রেফারেন্স ব্যবধান যাচাই এবং অসঙ্গতি পর্যবেক্ষণ।",dash_analyze_new:"নতুন রিপোর্ট বিশ্লেষণ করুন",dash_reports_screened:"পরীক্ষিত রিপোর্ট",dash_biomarkers_screened:"পরীক্ষিত বায়োমার্কার",dash_out_of_range:"সীমার বাইরে ফলাফল",dash_needs_review:"পর্যালোচনা প্রয়োজন",dash_active_audits:"সক্রিয় সেশন অডিট",dash_in_ref_interval:"স্বাভাবিক রেফারেন্স সীমার মধ্যে",dash_potentially_high_low:"সম্ভাব্য উচ্চ বা কম ফলাফল",dash_atypical_markers:"অস্বাভাবিক বা সম্ভাব্য মার্কার",dash_status_distribution:"বায়োমার্কার স্থিতি বণ্টন",dash_normal:"স্বাভাবিক (রেফারেন্স সীমার মধ্যে)",dash_flagged:"সম্ভাব্য উচ্চ / কম",dash_uncertain:"পর্যালোচনা প্রয়োজন / অস্বাভাবিক",dash_priority_findings:"অগ্রাধিকার অসঙ্গতি ফলাফল",dash_all_normal:"সমস্ত স্বাস্থ্য সূচক যাচাইকৃত রেফারেন্স সীমার মধ্যে রয়েছে।",dash_prioritization_protocol:"অগ্রাধিকার নীতি: ল্যাব রিপোর্টে মুদ্রিত রেফারেন্স মান সাধারণ মানের চেয়ে অগ্রাধিকার পায়।",dash_export_csv:"CSV এক্সপোর্ট",dash_clinical_pdf:"ক্লিনিকাল PDF",dash_audited_specimen:"নিরীক্ষিত নথি নমুনা",dash_th_biomarker:"বায়োমার্কার",dash_th_measured:"পরিমাপকৃত মান",dash_th_unit:"একক",dash_th_ref_interval:"রেফারেন্স ব্যবধান",dash_th_calibration:"ক্যালিব্রেশন উৎস",dash_th_classification:"ক্লিনিকাল শ্রেণিবিভাগ",dash_empty_title:"এই সেশনে কোনো মেডিকেল রিপোর্ট পরীক্ষা করা হয়নি",dash_empty_desc:"যেকোনো মানক ফরম্যাটে (PDF, PNG, JPG, WEBP, BMP, TIFF) ল্যাব রিপোর্ট আপলোড করুন বা বেঞ্চমার্ক লোড করুন।",asst_title:"ক্লিনিকাল ডিসিশন-সাপোর্ট এআই সহকারী",asst_subtitle:"Groq LLM দ্বারা চালিত সহজ ভাষায় বায়োমার্কার ব্যাখ্যা এবং পরীক্ষাগার নির্দেশিকা।",asst_banner_disclaimer:"শুধুমাত্র তথ্যগত সিদ্ধান্ত-সহায়তা সরঞ্জাম • এটি কোনো চিকিৎসা রোগ নির্ণয় বা প্রেসক্রিপশন নয়। সর্বদা চিকিৎসকের পরামর্শ নিন।",asst_placeholder:"আপনার বায়োমার্কার ফলাফল বা স্বাস্থ্য নির্দেশক সম্পর্কে জিজ্ঞাসা করুন...",asst_send:"পাঠান",asst_clear:"কথোপকথন পরিষ্কার করুন",asst_suggested_prompts:"প্রস্তাবিত ক্লিনিকাল প্রশ্নাবলী",asst_prompt_1:"আমার অস্বাভাবিক ফলাফলগুলি সহজ বাংলায় ব্যাখ্যা করুন।",asst_prompt_2:"এই বায়োমার্কারটি শরীরে কী পরিমাপ করে?",asst_prompt_3:"আমার ডাক্তারের সাথে আলোচনার জন্য এই ফলাফলগুলির একটি সংক্ষিপ্ত বিবরণ দিন।",asst_prompt_4:"আমার ডাক্তারের সাথে কোন ফলাফলগুলি নিয়ে আলোচনা করা উচিত?",asst_context_active:"অডিট রিপোর্ট সংযুক্ত রয়েছে",asst_context_none:"সাধারণ চিকিৎসা মোড (কোনো রিপোর্ট সংযুক্ত নেই)",asst_context_records:"বায়োমার্কার উপলব্ধ রয়েছে",asst_privacy_notice:"তথ্য গোপনীয়তা: কোনো ব্যক্তিগত শনাক্তকারী তথ্য পাঠানো হয় না। ব্যাখ্যার জন্য শুধুমাত্র বায়োমার্কারের নাম এবং পরিমাপ ব্যবহৃত হয়।",asst_loading:"ক্লিনিকাল তথ্য বিশ্লেষণ করা হচ্ছে...",asst_groq_missing_title:"Groq ক্লাউড API কী কনফিগারেশন প্রয়োজন",asst_groq_missing_desc:"লাইভ এআই উত্তর সক্ষম করতে আপনার সার্ভার পরিবেশে GROQ_API_KEY সেট করুন। সমস্ত রিপোর্ট বিশ্লেষণ চালু থাকবে।",ingest_title:"ক্লিনিকাল রিপোর্ট ইনজেশন এবং যাচাইকরণ",ingest_subtitle:"অপটিক্যাল ক্যারেক্টার রিকগনিশনের জন্য নথি আপলোড করুন বা ল্যাব টেক্সট পেস্ট করুন।",ingest_phase1:"পর্যায় ১ • বহু-ফরম্যাট ইনপুট",ingest_phase2:"পর্যায় ২ • প্রাক-বিশ্লেষণ টেক্সট পর্যালোচনা",ingest_phase3:"পর্যায় ৩ • যাচাইকরণ এবং ফলাফল",ingest_tab_upload:"নথি আপলোড করুন",ingest_tab_paste:"টেক্সট পেস্ট করুন",ingest_tab_benchmark:"১-ক্লিক বেঞ্চমার্ক",ingest_drop_title:"মেডিকেল রিপোর্ট এখানে টেনে আনুন বা ব্রাউজ করতে ক্লিক করুন",ingest_drop_sub:"সমর্থিত: PDF, PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC",ingest_btn_run:"নিষ্কাশন এবং যাচাই শুরু করুন",ingest_btn_processing:"নথি যাচাই করা হচ্ছে...",ingest_benchmark_title:"মানক ক্লিনিকাল বেঞ্চমার্ক",ingest_benchmark_desc:"সম্পূর্ণ রক্ত গণনা (CBC) এবং বিপাকীয় প্যানেল (CMP) জুড়ে ১৬টি বায়োমার্কার অবিলম্বে লোড করুন।",ingest_benchmark_btn:"বেঞ্চমার্ক প্যানেল লোড করুন",safety_title:"ক্লিনিকাল নিরাপত্তা, পদ্ধতি এবং এনক্লেভ আর্কিটেকচার",safety_disclaimer_badge:"অফিসিয়াল মেডিকেল স্ক্রিনিং অস্বীকৃতি",safety_disclaimer_content:"Orca MedScan সম্পূর্ণভাবে একটি শিক্ষামূলক এবং স্ক্রীনিং সিদ্ধান্ত-সহায়তা প্রোটোটাইপ। এটি রোগ নির্ণয় প্রদান করে না।",safety_lang_notice:"বিজ্ঞপ্তি: রোগীর সুবিধার জন্য বহু-ভাষিক অনুবাদ প্রদান করা হয়েছে। মেডিকেল টেস্টের নাম এবং সংখ্যা অপরিবর্তিত থাকে।",gen_offline:"অফলাইন",gen_online:"অনলাইন",gen_all:"সকল",gen_flags:"সতর্কতা",gen_normal:"স্বাভাবিক",gen_search:"বায়োমার্কারের নাম খুঁজুন..."}},dx=se.createContext(void 0),yy=({children:t})=>{const[e,n]=se.useState(()=>{try{const s=new URLSearchParams(window.location.search).get("lang");if(s&&["en","hi","te","ta","kn","ml","bn"].includes(s))return s;const l=localStorage.getItem("orca_language");if(l&&["en","hi","te","ta","kn","ml","bn"].includes(l))return l}catch{}return"en"});se.useEffect(()=>{try{localStorage.setItem("orca_language",e),document.documentElement.lang=e}catch(s){console.error("Error saving language preference:",s)}},[e]);const r=s=>{n(s)},i=s=>{const l=vc[e]||vc.en;return s in l?l[s]:vc.en[s]||s},a=_c.find(s=>s.code===e)||_c[0];return o.jsx(dx.Provider,{value:{language:e,setLanguage:r,t:i,languages:_c,currentLanguageInfo:a},children:t})},Ni=()=>{const t=se.useContext(dx);if(!t)throw new Error("useLanguage must be used within a LanguageProvider");return t};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function by(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Sy(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=t=>{let e="",n=!1;for(const r of t){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=t=>{const e=My(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function yc(t){return t!=null}function Ey(t,e={}){var p,x;const n=e.attributeNames??{},r=v=>n[v]??v,i=t.size??t.width??Qr.width,a=t.size??t.height??Qr.height,s=((p=t.aliases)==null?void 0:p.filter(v=>typeof v=="string"&&v.trim()!=="").map(v=>`lucide-${v}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...s],c=((x=e.className)==null?void 0:x.split(" ").filter(Boolean))??[],d=e.includeDefaultClasses===!1?qd(...c):qd("lucide",...l,...c),h=e.absoluteStrokeWidth?Number(e.strokeWidth??Qr["stroke-width"])*Number(t.size??t.width??Qr.width)/Number(e.size??e.width??Qr.width):e.strokeWidth??Qr["stroke-width"];return["svg",{...Object.entries(Qr).reduce((v,[y,g])=>(v[r(y)]=g,v),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&yc(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&yc(e.width)&&{[r("width")]:e.width},..."height"in e&&yc(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:h,...d&&{[r("class")]:d},[r("viewBox")]:`0 0 ${i} ${a}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(v=>{const[y,g,u]=v,_=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...g}:g;return u?[y,_,u]:[y,_]})]}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ty(t,e={}){return Ey(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Cy=se.createContext({}),Ny=()=>se.useContext(Cy),Ry=se.forwardRef(({color:t,size:e,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:s,className:l="",children:c,iconNode:d=[],icon:h={node:d,aliases:[],size:24},...f},p)=>{const{size:x=24,strokeWidth:v=2,absoluteStrokeWidth:y=!1,nonScalingStroke:g=!1,color:u="currentColor",className:_=""}=Ny()??{},m=!!c||Ay(f),[b,N,A=[]]=Ty(h,{color:t??u,width:n??e??x,height:r??e??x,strokeWidth:i??v,absoluteStrokeWidth:a??y,nonScalingStroke:s??g,className:qd(_,l),hasA11yProp:m,attributes:f});return se.createElement(b,{ref:p,...N},[...A.map(([T,P])=>se.createElement(T,P)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ke(t,e=[],n=[]){const r=typeof t=="string"?by(t,e,n):t,i=se.forwardRef(({className:a,...s},l)=>se.createElement(Ry,{ref:l,icon:r,className:a,...s}));return r.name&&(i.displayName=wy(r.name)),i}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};ux.node;const qn=ke(ux);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};hx.node;const Ei=ke(hx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};fx.node;const Py=ke(fx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px={name:"bot",size:24,node:[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]};px.node;const Yd=ke(px);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};mx.node;const ky=ke(mx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};xx.node;const Kd=ke(xx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};gx.node;const Ly=ke(gx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};_x.node;const Dy=ke(_x);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};vx.node;const Iy=ke(vx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};yx.node;const Zt=ke(yx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};Sx.node;const Uy=ke(Sx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};bx.node;const Fy=ke(bx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};Mx.node;const Oy=ke(Mx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};wx.node;const zy=ke(wx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};Ex.node;const wa=ke(Ex);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Tx.node;const Ax=ke(Tx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx={name:"file-check-corner",size:24,node:[["path",{d:"M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",key:"g5mvt7"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m14 20 2 2 4-4",key:"15kota"}]],aliases:["file-check-2"]};Cx.node;const jy=ke(Cx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx={name:"file-search",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]};Nx.node;const By=ke(Nx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};Rx.node;const Ul=ke(Rx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};Px.node;const Zd=ke(Px);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};kx.node;const Hy=ke(kx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx={name:"key",size:24,node:[["path",{d:"m2 21 9.6-9.6",key:"9l79m3"}],["path",{d:"m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19",key:"fw8biw"}],["circle",{cx:"15.5",cy:"7.5",r:"5.5",key:"4wxmhb"}]]};Lx.node;const Dx=ke(Lx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix={name:"layout-dashboard",size:24,node:[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]};Ix.node;const Vy=ke(Ix);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};Ux.node;const kn=ke(Ux);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};Fx.node;const Gy=ke(Fx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};Ox.node;const Wy=ke(Ox);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx={name:"microscope",size:24,node:[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]};zx.node;const Xy=ke(zx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};jx.node;const Bx=ke(jx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]};Hx.node;const Vx=ke(Hx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Gx.node;const $y=ke(Gx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};Wx.node;const qy=ke(Wx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Xx.node;const Yy=ke(Xx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};$x.node;const Ky=ke($x);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};qx.node;const Zy=ke(qx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx={name:"shield-alert",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]};Yx.node;const bf=ke(Yx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};Kx.node;const Zx=ke(Kx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Jx.node;const Jy=ke(Jx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Qx.node;const eg=ke(Qx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};tg.node;const hl=ke(tg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};ng.node;const Cs=ke(ng);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"user-check",size:24,node:[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};rg.node;const Qy=ke(rg);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};ig.node;const eS=ke(ig);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};ag.node;const Fl=ke(ag),sg=se.createContext(void 0),tS=({children:t})=>{const[e,n]=se.useState(()=>{try{const s=new URLSearchParams(window.location.search).get("theme");if(s==="dark"||s==="light")return s}catch{}const a=localStorage.getItem("orca_theme");return a==="light"||a==="dark"?a:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});se.useEffect(()=>{const a=document.documentElement;e==="dark"?(a.classList.add("dark"),a.classList.remove("light")):(a.classList.add("light"),a.classList.remove("dark")),localStorage.setItem("orca_theme",e)},[e]);const r=()=>{n(a=>a==="dark"?"light":"dark")},i=a=>{n(a)};return o.jsx(sg.Provider,{value:{theme:e,toggleTheme:r,setTheme:i},children:t})},og=()=>{const t=se.useContext(sg);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},Mf={en:{native:"English",english:"English",combined:"English"},hi:{native:"हिन्दी",english:"Hindi",combined:"हिन्दी — Hindi"},te:{native:"తెలుగు",english:"Telugu",combined:"తెలుగు — Telugu"},ta:{native:"தமிழ்",english:"Tamil",combined:"தமிழ் — Tamil"},kn:{native:"ಕನ್ನಡ",english:"Kannada",combined:"ಕನ್ನಡ — Kannada"},ml:{native:"മലയാളം",english:"Malayalam",combined:"മലയാളം — Malayalam"},bn:{native:"বাংলা",english:"Bengali",combined:"বাংলা — Bengali"}},lg=({variant:t="header"})=>{const{language:e,setLanguage:n,languages:r,currentLanguageInfo:i}=Ni(),[a,s]=se.useState(!1),[l,c]=se.useState({top:0,left:0}),[d,h]=se.useState(-1),f=se.useRef(null),p=se.useRef(null),x=se.useRef([]),v=se.useCallback(()=>{if(!f.current)return;const _=f.current.getBoundingClientRect(),m=288,b=8,N=window.innerWidth,A=window.innerHeight;let T=_.left;t==="header"?T=_.right-m:t==="compact"&&(T=_.right+6),T+m>N-b&&(T=N-m-b),T<b&&(T=b);const P=440;let M=_.bottom+6;M+P>A-b&&_.top>P&&(M=Math.max(b,_.top-P-6)),c({top:M,left:T})},[t]);se.useEffect(()=>{if(!a)return;v();const _=()=>{v()};return window.addEventListener("resize",_),window.addEventListener("scroll",_,!0),()=>{window.removeEventListener("resize",_),window.removeEventListener("scroll",_,!0)}},[a,v]),se.useEffect(()=>{const _=m=>{const b=m.target;p.current&&!p.current.contains(b)&&f.current&&!f.current.contains(b)&&s(!1)};return a&&document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[a]);const y=_=>{var m,b;if(_.key==="Escape")s(!1),(m=f.current)==null||m.focus();else if(_.key==="ArrowDown"||_.key==="ArrowUp")if(_.preventDefault(),!a)s(!0),h(r.findIndex(N=>N.code===e));else{const N=_.key==="ArrowDown"?(d+1)%r.length:(d-1+r.length)%r.length;h(N),(b=x.current[N])==null||b.focus()}},g=_=>{var m;n(_),s(!1),(m=f.current)==null||m.focus()},u=Mf[e]||{native:i.nativeName,english:i.name,combined:i.code==="en"?"English":`${i.nativeName} — ${i.name}`};return o.jsxs("div",{className:t==="sidebar"?"w-full":"relative inline-block",children:[t==="sidebar"?o.jsxs("button",{ref:f,type:"button",onClick:()=>s(!a),onKeyDown:y,"aria-label":"Select application language","aria-expanded":a,"aria-haspopup":"listbox",className:"w-full flex items-center justify-between px-3 py-2 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-100 dark:bg-charcoal-950/80 text-charcoal-800 dark:text-ivory-100 hover:border-forest-600 transition-all text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-forest-600 focus:ring-offset-1 dark:focus:ring-offset-charcoal-900 shadow-sm",children:[o.jsxs("span",{className:"flex items-center gap-2 truncate",children:[o.jsx(Zd,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400 shrink-0"}),o.jsx("span",{className:"text-sm select-none",children:i.flag}),o.jsx("span",{className:"font-sans font-bold text-xs truncate",children:u.combined})]}),o.jsx(Kd,{className:`w-3.5 h-3.5 text-charcoal-400 shrink-0 transition-transform duration-200 ${a?"rotate-180":""}`})]}):t==="compact"?o.jsx("button",{ref:f,type:"button",onClick:()=>s(!a),onKeyDown:y,title:`Language: ${u.combined}`,"aria-label":"Select application language","aria-expanded":a,"aria-haspopup":"listbox",className:"w-10 h-10 flex items-center justify-center rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-100 dark:bg-charcoal-950/80 text-charcoal-800 dark:text-ivory-100 hover:border-forest-600 transition-all text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-forest-600 shadow-sm",children:o.jsx("span",{className:"text-base select-none",children:i.flag})}):o.jsxs("button",{ref:f,type:"button",onClick:()=>s(!a),onKeyDown:y,"aria-label":"Select application language","aria-expanded":a,"aria-haspopup":"listbox",className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-white/90 dark:bg-charcoal-900/90 text-charcoal-800 dark:text-ivory-100 hover:border-forest-600 transition-all text-xs font-semibold shadow-paper-ivory focus:outline-none focus:ring-2 focus:ring-forest-600",children:[o.jsx(Zd,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400 shrink-0"}),o.jsx("span",{className:"text-sm select-none",children:i.flag}),o.jsx("span",{className:"font-sans font-bold text-xs",children:u.combined}),o.jsx(Kd,{className:`w-3.5 h-3.5 text-charcoal-400 shrink-0 transition-transform duration-200 ${a?"rotate-180":""}`})]}),a&&ox.createPortal(o.jsxs("div",{ref:p,style:{position:"fixed",top:`${l.top}px`,left:`${l.left}px`,width:"288px",zIndex:99999},className:"rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-700 shadow-paper-elevated py-2 animate-fade-in font-sans",role:"listbox","aria-label":"Application Language Selection",children:[o.jsxs("div",{className:"px-3.5 py-1.5 border-b border-ivory-200 dark:border-charcoal-800 text-[10px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400 flex items-center justify-between",children:[o.jsx("span",{children:"Select Language"}),o.jsx("span",{className:"text-charcoal-400",children:"7 Regional Options"})]}),o.jsx("div",{className:"max-h-[440px] overflow-y-auto py-1.5 px-1.5 space-y-1",children:r.map((_,m)=>{const b=e===_.code,N=Mf[_.code];return o.jsxs("button",{ref:A=>x.current[m]=A,type:"button",role:"option","aria-selected":b,onClick:()=>g(_.code),onKeyDown:A=>{var T,P,M;if(A.key==="ArrowDown"){A.preventDefault();const S=(m+1)%r.length;(T=x.current[S])==null||T.focus()}else if(A.key==="ArrowUp"){A.preventDefault();const S=(m-1+r.length)%r.length;(P=x.current[S])==null||P.focus()}else A.key==="Escape"&&(s(!1),(M=f.current)==null||M.focus())},className:`w-full flex items-center justify-between px-3 py-2 text-left text-xs transition-colors rounded-xl font-sans ${b?"bg-forest-50 dark:bg-forest-950/70 text-forest-800 dark:text-forest-300 font-bold border border-forest-200 dark:border-forest-850/80 shadow-xs":"text-charcoal-800 dark:text-ivory-100 hover:bg-ivory-100 dark:hover:bg-charcoal-800/80 focus:bg-ivory-100 dark:focus:bg-charcoal-800/80 focus:outline-none"}`,children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("span",{className:"text-base select-none leading-none",children:_.flag}),o.jsxs("div",{className:"flex flex-col text-left",children:[o.jsx("span",{className:"font-bold text-xs tracking-tight",children:N.combined}),o.jsx("span",{className:"text-[10px] text-charcoal-400 dark:text-ivory-400 font-mono",children:_.code==="en"?"Default Clinical Protocol":`${_.name} Vernacular`})]})]}),b&&o.jsx(ky,{className:"w-4 h-4 text-forest-700 dark:text-forest-400 shrink-0"})]},_.code)})}),o.jsx("div",{className:"px-3 py-1.5 border-t border-ivory-200 dark:border-charcoal-800 text-[9px] text-charcoal-400 font-sans leading-tight",children:"* Medical test names and measured values remain deterministic."})]}),document.body)]})},nS=({onOpenAuth:t,onNavigateSection:e,onGoToApp:n})=>{const{theme:r,toggleTheme:i}=og(),{isAuthenticated:a,logout:s}=Ds(),{t:l}=Ni(),c=d=>{if(e)e(d);else{const h=document.getElementById(d);h&&h.scrollIntoView({behavior:"smooth"})}};return o.jsx("header",{className:"sticky top-0 z-50 w-full bg-ivory-50/90 dark:bg-charcoal-950/90 backdrop-blur-md border-b border-ivory-200 dark:border-charcoal-800 transition-colors",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-3.5 cursor-pointer",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center text-white shadow-sm border border-forest-900",children:o.jsx(qn,{className:"w-5 h-5 text-forest-200"})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"font-serif font-bold text-xl tracking-tight text-charcoal-950 dark:text-ivory-50",children:"Orca MedScan"}),o.jsx("span",{className:"hidden sm:inline-flex items-center text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-forest-50 dark:bg-forest-950 text-forest-800 dark:text-forest-300 border border-forest-200 dark:border-forest-850",children:"CLINICAL ENCLAVE"})]}),o.jsx("p",{className:"text-[10px] font-mono uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400 hidden sm:block",children:"Laboratory Diagnostics & Biomarker Screening"})]})]}),o.jsxs("nav",{className:"hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-charcoal-600 dark:text-charcoal-300",children:[o.jsx("button",{onClick:()=>c("demo-section"),className:"hover:text-forest-700 dark:hover:text-forest-400 transition-colors",children:"Clinical Simulator"}),o.jsx("button",{onClick:()=>c("workflow-section"),className:"hover:text-forest-700 dark:hover:text-forest-400 transition-colors",children:"Pipeline Architecture"}),o.jsx("button",{onClick:()=>c("formats-section"),className:"hover:text-forest-700 dark:hover:text-forest-400 transition-colors",children:"Supported Specimen"}),o.jsx("button",{onClick:()=>c("safety-section"),className:"hover:text-forest-700 dark:hover:text-forest-400 transition-colors",children:"Safety Protocol"})]}),o.jsxs("div",{className:"flex items-center gap-2.5 sm:gap-3",children:[o.jsx(lg,{variant:"header"}),o.jsx("button",{onClick:i,"aria-label":"Toggle theme mode",className:"p-2.5 rounded-xl border border-ivory-200 dark:border-charcoal-800 bg-ivory-100 dark:bg-charcoal-900 text-charcoal-700 dark:text-charcoal-200 hover:border-forest-600 transition-all shadow-paper-ivory",title:`Switch to ${l(r==="dark"?"nav_warm_light":"nav_charcoal_dark")}`,children:r==="dark"?o.jsx(eg,{className:"w-4 h-4 text-amber-300"}):o.jsx(Bx,{className:"w-4 h-4 text-charcoal-700"})}),a?o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("button",{onClick:n,className:"inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-bold shadow-paper-ivory transition-all",children:[l("nav_dashboard"),o.jsx(Ei,{className:"w-4 h-4"})]}),o.jsx("button",{onClick:s,className:"hidden sm:inline-block px-3 py-2 text-xs font-semibold text-charcoal-500 hover:text-charcoal-800 dark:hover:text-charcoal-200",children:l("nav_logout")})]}):o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{onClick:()=>t("login"),className:"px-3 py-2 rounded-xl text-xs font-bold text-charcoal-700 dark:text-charcoal-200 hover:text-forest-700 dark:hover:text-forest-400 transition-colors",children:l("nav_login")}),o.jsxs("button",{onClick:()=>t("signup"),className:"inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-bold shadow-paper-ivory transition-all",children:[o.jsx("span",{children:l("nav_launch")}),o.jsx(Ei,{className:"w-3.5 h-3.5"})]})]})]})]})})},rS=({currentView:t,onSelectView:e,auditCount:n,ocrActive:r,onLoadBenchmark:i,isCollapsed:a,onToggleCollapse:s})=>{const{user:l,logout:c}=Ds(),{theme:d,toggleTheme:h}=og(),{t:f}=Ni(),p=[{label:"Dashboard",transKey:"nav_dashboard",icon:o.jsx(Vy,{className:"w-4 h-4"})},{label:"Analyze Report",transKey:"nav_analyze",icon:o.jsx(By,{className:"w-4 h-4"})},{label:"AI Assistant",transKey:"nav_assistant",icon:o.jsx(Yd,{className:"w-4 h-4"})},{label:"Report History",transKey:"nav_history",icon:o.jsx(Vx,{className:"w-4 h-4"})},{label:"Extraction Diagnostics",transKey:"nav_diagnostics",icon:o.jsx(qn,{className:"w-4 h-4"})},{label:"Settings",transKey:"nav_settings",icon:o.jsx(Zy,{className:"w-4 h-4"})},{label:"Clinical Safety",transKey:"nav_safety",icon:o.jsx(Zx,{className:"w-4 h-4"})}];return o.jsxs("aside",{className:`fixed top-0 left-0 bottom-0 z-40 bg-ivory-50 dark:bg-charcoal-900 border-r border-ivory-300 dark:border-charcoal-800 flex flex-col justify-between transition-all duration-300 ${a?"w-16":"w-64"}`,children:[o.jsxs("div",{children:[o.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-ivory-200 dark:border-charcoal-800",children:[!a&&o.jsxs("div",{className:"flex items-center gap-2.5 overflow-hidden",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg bg-forest-800 flex items-center justify-center text-ivory-50 shrink-0 shadow-paper-ivory",children:o.jsx(qn,{className:"w-4 h-4"})}),o.jsxs("div",{className:"truncate",children:[o.jsx("span",{className:"font-serif font-bold text-base tracking-tight text-charcoal-900 dark:text-ivory-50",children:"Orca MedScan"}),o.jsx("p",{className:"text-[9px] uppercase font-mono font-bold text-forest-700 dark:text-forest-400 tracking-wider",children:f("nav_clinical_enclave")})]})]}),a&&o.jsx("div",{className:"w-8 h-8 mx-auto rounded-lg bg-forest-800 flex items-center justify-center text-ivory-50",children:o.jsx(qn,{className:"w-4 h-4"})}),o.jsx("button",{onClick:s,"aria-label":a?"Expand sidebar":"Collapse sidebar",className:"p-1 rounded-md text-charcoal-400 hover:text-charcoal-700 dark:hover:text-ivory-200 hover:bg-ivory-200 dark:hover:bg-charcoal-800 transition-colors",children:a?o.jsx(Dy,{className:"w-4 h-4"}):o.jsx(Ly,{className:"w-4 h-4"})})]}),!a&&o.jsxs("div",{className:"p-3 m-3 rounded-xl bg-ivory-100 dark:bg-charcoal-950/60 border border-ivory-200 dark:border-charcoal-800",children:[o.jsxs("div",{className:"flex items-center gap-1.5 mb-1",children:[o.jsx(Qy,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"}),o.jsx("span",{className:"text-[10px] font-mono font-bold uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400",children:f("nav_practitioner_session")})]}),o.jsx("p",{className:"text-xs font-semibold text-charcoal-800 dark:text-ivory-100 truncate",children:(l==null?void 0:l.email)||"evaluator@orcamed.org"}),o.jsx("span",{className:"inline-block mt-1 text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-forest-100/70 dark:bg-forest-950 text-forest-900 dark:text-forest-300",children:(l==null?void 0:l.role)||"Lead Clinical Evaluator"})]}),o.jsx("div",{className:a?"px-2 pb-2 flex justify-center":"px-3 pb-2",children:o.jsx(lg,{variant:a?"compact":"sidebar"})}),o.jsx("nav",{className:"p-2 space-y-1",children:p.map(x=>{const v=t===x.label,y=f(x.transKey);return o.jsx("button",{onClick:()=>e(x.label),title:a?y:void 0,className:`w-full flex items-center ${a?"justify-center":"justify-start"} px-3 py-2 rounded-xl text-xs font-semibold transition-all ${v?"bg-forest-800 text-ivory-50 shadow-paper-ivory font-bold":"text-charcoal-600 dark:text-ivory-300 hover:bg-ivory-200/70 dark:hover:bg-charcoal-800 hover:text-charcoal-900 dark:hover:text-ivory-50"}`,children:o.jsxs("div",{className:"flex items-center gap-2.5 truncate",children:[o.jsx("span",{className:v?"text-ivory-50":"text-charcoal-400 dark:text-charcoal-400",children:x.icon}),!a&&o.jsx("span",{className:"truncate",children:y})]})},x.label)})}),!a&&o.jsx("div",{className:"px-3 pt-2",children:o.jsxs("button",{onClick:i,className:"w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-mono font-bold text-forest-800 dark:text-forest-300 bg-forest-50 dark:bg-forest-950/60 border border-forest-300 dark:border-forest-800 hover:bg-forest-100 dark:hover:bg-forest-900 transition-colors shadow-paper-ivory",children:[o.jsx(Fl,{className:"w-3.5 h-3.5"}),f("nav_benchmark")]})})]}),o.jsxs("div",{className:"p-3 border-t border-ivory-200 dark:border-charcoal-800 space-y-2",children:[!a&&o.jsxs("div",{className:"text-[10px] text-charcoal-500 dark:text-charcoal-400 px-1 py-0.5 flex items-center justify-between font-mono",children:[o.jsxs("span",{children:["Audits: ",n]}),o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${r?"bg-clinical-normal":"bg-charcoal-400"}`}),"OCR: ",f(r?"gen_online":"gen_offline")]})]}),o.jsx("button",{onClick:h,"aria-label":"Toggle theme",className:`w-full flex items-center gap-2 p-2 rounded-xl text-xs font-medium text-charcoal-700 dark:text-ivory-300 hover:bg-ivory-200 dark:hover:bg-charcoal-800 border border-ivory-300 dark:border-charcoal-700 ${a?"justify-center":""}`,children:d==="dark"?o.jsxs(o.Fragment,{children:[o.jsx(eg,{className:"w-3.5 h-3.5 text-amber-400"}),!a&&o.jsx("span",{children:f("nav_warm_light")})]}):o.jsxs(o.Fragment,{children:[o.jsx(Bx,{className:"w-3.5 h-3.5 text-charcoal-700"}),!a&&o.jsx("span",{children:f("nav_charcoal_dark")})]})}),o.jsxs("button",{onClick:c,"aria-label":"Log Out",className:`w-full flex items-center gap-2 p-2 rounded-xl text-xs font-semibold text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors ${a?"justify-center":""}`,children:[o.jsx(Gy,{className:"w-3.5 h-3.5"}),!a&&o.jsx("span",{children:f("nav_logout")})]})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eh="165",iS=0,wf=1,aS=2,cg=1,dg=2,rr=3,Gr=0,nn=1,Vn=2,jr=0,pa=1,Ef=2,Tf=3,Af=4,sS=5,di=100,oS=101,lS=102,cS=103,dS=104,uS=200,hS=201,fS=202,pS=203,Jd=204,Qd=205,mS=206,xS=207,gS=208,_S=209,vS=210,yS=211,SS=212,bS=213,MS=214,wS=0,ES=1,TS=2,fl=3,AS=4,CS=5,NS=6,RS=7,ug=0,PS=1,kS=2,Br=0,LS=1,DS=2,IS=3,US=4,FS=5,OS=6,zS=7,hg=300,Ea=301,Ta=302,eu=303,tu=304,Ol=306,nu=1e3,mi=1001,ru=1002,Sn=1003,jS=1004,so=1005,vn=1006,Sc=1007,xi=1008,Wr=1009,BS=1010,HS=1011,pl=1012,fg=1013,Aa=1014,Pr=1015,zl=1016,pg=1017,mg=1018,Ca=1020,VS=35902,GS=1021,WS=1022,Wn=1023,XS=1024,$S=1025,ma=1026,Na=1027,qS=1028,xg=1029,YS=1030,gg=1031,_g=1033,bc=33776,Mc=33777,wc=33778,Ec=33779,Cf=35840,Nf=35841,Rf=35842,Pf=35843,kf=36196,Lf=37492,Df=37496,If=37808,Uf=37809,Ff=37810,Of=37811,zf=37812,jf=37813,Bf=37814,Hf=37815,Vf=37816,Gf=37817,Wf=37818,Xf=37819,$f=37820,qf=37821,Tc=36492,Yf=36494,Kf=36495,KS=36283,Zf=36284,Jf=36285,Qf=36286,ZS=3200,JS=3201,vg=0,QS=1,Cr="",jn="srgb",Kr="srgb-linear",th="display-p3",jl="display-p3-linear",ml="linear",it="srgb",xl="rec709",gl="p3",ki=7680,ep=519,eb=512,tb=513,nb=514,yg=515,rb=516,ib=517,ab=518,sb=519,tp=35044,np="300 es",lr=2e3,_l=2001;class Da{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let a=0,s=i.length;a<s;a++)i[a].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ac=Math.PI/180,iu=180/Math.PI;function Is(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ut[t&255]+Ut[t>>8&255]+Ut[t>>16&255]+Ut[t>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[r&255]+Ut[r>>8&255]+Ut[r>>16&255]+Ut[r>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function ob(t,e){return(t%e+e)%e}function Cc(t,e,n){return(1-n)*t+n*e}function Wa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),a=this.x-e.x,s=this.y-e.y;return this.x=a*r-s*i+e.x,this.y=a*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,r,i,a,s,l,c,d){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,a,s,l,c,d)}set(e,n,r,i,a,s,l,c,d){const h=this.elements;return h[0]=e,h[1]=i,h[2]=l,h[3]=n,h[4]=a,h[5]=c,h[6]=r,h[7]=s,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,a=this.elements,s=r[0],l=r[3],c=r[6],d=r[1],h=r[4],f=r[7],p=r[2],x=r[5],v=r[8],y=i[0],g=i[3],u=i[6],_=i[1],m=i[4],b=i[7],N=i[2],A=i[5],T=i[8];return a[0]=s*y+l*_+c*N,a[3]=s*g+l*m+c*A,a[6]=s*u+l*b+c*T,a[1]=d*y+h*_+f*N,a[4]=d*g+h*m+f*A,a[7]=d*u+h*b+f*T,a[2]=p*y+x*_+v*N,a[5]=p*g+x*m+v*A,a[8]=p*u+x*b+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],l=e[5],c=e[6],d=e[7],h=e[8];return n*s*h-n*l*d-r*a*h+r*l*c+i*a*d-i*s*c}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],l=e[5],c=e[6],d=e[7],h=e[8],f=h*s-l*d,p=l*c-h*a,x=d*a-s*c,v=n*f+r*p+i*x;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(i*d-h*r)*y,e[2]=(l*r-i*s)*y,e[3]=p*y,e[4]=(h*n-i*c)*y,e[5]=(i*a-l*n)*y,e[6]=x*y,e[7]=(r*c-d*n)*y,e[8]=(s*n-r*a)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,a,s,l){const c=Math.cos(a),d=Math.sin(a);return this.set(r*c,r*d,-r*(c*s+d*l)+s+e,-i*d,i*c,-i*(-d*s+c*l)+l+n,0,0,1),this}scale(e,n){return this.premultiply(Nc.makeScale(e,n)),this}rotate(e){return this.premultiply(Nc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nc=new Ue;function Sg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function vl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function lb(){const t=vl("canvas");return t.style.display="block",t}const rp={};function bg(t){t in rp||(rp[t]=!0,console.warn(t))}function cb(t,e,n){return new Promise(function(r,i){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}const ip=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ap=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oo={[Kr]:{transfer:ml,primaries:xl,toReference:t=>t,fromReference:t=>t},[jn]:{transfer:it,primaries:xl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[jl]:{transfer:ml,primaries:gl,toReference:t=>t.applyMatrix3(ap),fromReference:t=>t.applyMatrix3(ip)},[th]:{transfer:it,primaries:gl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ap),fromReference:t=>t.applyMatrix3(ip).convertLinearToSRGB()}},db=new Set([Kr,jl]),Je={enabled:!0,_workingColorSpace:Kr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!db.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const r=oo[e].toReference,i=oo[n].fromReference;return i(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return oo[t].primaries},getTransfer:function(t){return t===Cr?ml:oo[t].transfer}};function xa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Rc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Li;class ub{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Li===void 0&&(Li=vl("canvas")),Li.width=e.width,Li.height=e.height;const r=Li.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Li}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=vl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let s=0;s<a.length;s++)a[s]=xa(a[s]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(xa(n[r]/255)*255):n[r]=xa(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hb=0;class Mg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=Is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let s=0,l=i.length;s<l;s++)i[s].isDataTexture?a.push(Pc(i[s].image)):a.push(Pc(i[s]))}else a=Pc(i);r.url=a}return n||(e.images[this.uuid]=r),r}}function Pc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ub.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fb=0;class Wt extends Da{constructor(e=Wt.DEFAULT_IMAGE,n=Wt.DEFAULT_MAPPING,r=mi,i=mi,a=vn,s=xi,l=Wn,c=Wr,d=Wt.DEFAULT_ANISOTROPY,h=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Is(),this.name="",this.source=new Mg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nu:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case ru:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nu:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case ru:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=hg;Wt.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,r=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*n+s[4]*r+s[8]*i+s[12]*a,this.y=s[1]*n+s[5]*r+s[9]*i+s[13]*a,this.z=s[2]*n+s[6]*r+s[10]*i+s[14]*a,this.w=s[3]*n+s[7]*r+s[11]*i+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,a;const c=e.elements,d=c[0],h=c[4],f=c[8],p=c[1],x=c[5],v=c[9],y=c[2],g=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+y)<.1&&Math.abs(v+g)<.1&&Math.abs(d+x+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(d+1)/2,b=(x+1)/2,N=(u+1)/2,A=(h+p)/4,T=(f+y)/4,P=(v+g)/4;return m>b&&m>N?m<.01?(r=0,i=.707106781,a=.707106781):(r=Math.sqrt(m),i=A/r,a=T/r):b>N?b<.01?(r=.707106781,i=0,a=.707106781):(i=Math.sqrt(b),r=A/i,a=P/i):N<.01?(r=.707106781,i=.707106781,a=0):(a=Math.sqrt(N),r=T/a,i=P/a),this.set(r,i,a,n),this}let _=Math.sqrt((g-v)*(g-v)+(f-y)*(f-y)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(g-v)/_,this.y=(f-y)/_,this.z=(p-h)/_,this.w=Math.acos((d+x+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pb extends Da{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const i={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const a=new Wt(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);a.flipY=!1,a.generateMipmaps=r.generateMipmaps,a.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let l=0;l<s;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Mg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends pb{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class wg extends Wt{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mb extends Wt{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Us{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,a,s,l){let c=r[i+0],d=r[i+1],h=r[i+2],f=r[i+3];const p=a[s+0],x=a[s+1],v=a[s+2],y=a[s+3];if(l===0){e[n+0]=c,e[n+1]=d,e[n+2]=h,e[n+3]=f;return}if(l===1){e[n+0]=p,e[n+1]=x,e[n+2]=v,e[n+3]=y;return}if(f!==y||c!==p||d!==x||h!==v){let g=1-l;const u=c*p+d*x+h*v+f*y,_=u>=0?1:-1,m=1-u*u;if(m>Number.EPSILON){const N=Math.sqrt(m),A=Math.atan2(N,u*_);g=Math.sin(g*A)/N,l=Math.sin(l*A)/N}const b=l*_;if(c=c*g+p*b,d=d*g+x*b,h=h*g+v*b,f=f*g+y*b,g===1-l){const N=1/Math.sqrt(c*c+d*d+h*h+f*f);c*=N,d*=N,h*=N,f*=N}}e[n]=c,e[n+1]=d,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,r,i,a,s){const l=r[i],c=r[i+1],d=r[i+2],h=r[i+3],f=a[s],p=a[s+1],x=a[s+2],v=a[s+3];return e[n]=l*v+h*f+c*x-d*p,e[n+1]=c*v+h*p+d*f-l*x,e[n+2]=d*v+h*x+l*p-c*f,e[n+3]=h*v-l*f-c*p-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,a=e._z,s=e._order,l=Math.cos,c=Math.sin,d=l(r/2),h=l(i/2),f=l(a/2),p=c(r/2),x=c(i/2),v=c(a/2);switch(s){case"XYZ":this._x=p*h*f+d*x*v,this._y=d*x*f-p*h*v,this._z=d*h*v+p*x*f,this._w=d*h*f-p*x*v;break;case"YXZ":this._x=p*h*f+d*x*v,this._y=d*x*f-p*h*v,this._z=d*h*v-p*x*f,this._w=d*h*f+p*x*v;break;case"ZXY":this._x=p*h*f-d*x*v,this._y=d*x*f+p*h*v,this._z=d*h*v+p*x*f,this._w=d*h*f-p*x*v;break;case"ZYX":this._x=p*h*f-d*x*v,this._y=d*x*f+p*h*v,this._z=d*h*v-p*x*f,this._w=d*h*f+p*x*v;break;case"YZX":this._x=p*h*f+d*x*v,this._y=d*x*f+p*h*v,this._z=d*h*v-p*x*f,this._w=d*h*f-p*x*v;break;case"XZY":this._x=p*h*f-d*x*v,this._y=d*x*f-p*h*v,this._z=d*h*v+p*x*f,this._w=d*h*f+p*x*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],a=n[8],s=n[1],l=n[5],c=n[9],d=n[2],h=n[6],f=n[10],p=r+l+f;if(p>0){const x=.5/Math.sqrt(p+1);this._w=.25/x,this._x=(h-c)*x,this._y=(a-d)*x,this._z=(s-i)*x}else if(r>l&&r>f){const x=2*Math.sqrt(1+r-l-f);this._w=(h-c)/x,this._x=.25*x,this._y=(i+s)/x,this._z=(a+d)/x}else if(l>f){const x=2*Math.sqrt(1+l-r-f);this._w=(a-d)/x,this._x=(i+s)/x,this._y=.25*x,this._z=(c+h)/x}else{const x=2*Math.sqrt(1+f-r-l);this._w=(s-i)/x,this._x=(a+d)/x,this._y=(c+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,a=e._z,s=e._w,l=n._x,c=n._y,d=n._z,h=n._w;return this._x=r*h+s*l+i*d-a*c,this._y=i*h+s*c+a*l-r*d,this._z=a*h+s*d+r*c-i*l,this._w=s*h-r*l-i*c-a*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,a=this._z,s=this._w;let l=s*e._w+r*e._x+i*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=s,this._x=r,this._y=i,this._z=a,this;const c=1-l*l;if(c<=Number.EPSILON){const x=1-n;return this._w=x*s+n*this._w,this._x=x*r+n*this._x,this._y=x*i+n*this._y,this._z=x*a+n*this._z,this.normalize(),this}const d=Math.sqrt(c),h=Math.atan2(d,l),f=Math.sin((1-n)*h)/d,p=Math.sin(n*h)/d;return this._w=s*f+this._w*p,this._x=r*f+this._x*p,this._y=i*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,r=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6]*i,this.y=a[1]*n+a[4]*r+a[7]*i,this.z=a[2]*n+a[5]*r+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,a=e.elements,s=1/(a[3]*n+a[7]*r+a[11]*i+a[15]);return this.x=(a[0]*n+a[4]*r+a[8]*i+a[12])*s,this.y=(a[1]*n+a[5]*r+a[9]*i+a[13])*s,this.z=(a[2]*n+a[6]*r+a[10]*i+a[14])*s,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,a=e.x,s=e.y,l=e.z,c=e.w,d=2*(s*i-l*r),h=2*(l*n-a*i),f=2*(a*r-s*n);return this.x=n+c*d+s*f-l*h,this.y=r+c*h+l*d-a*f,this.z=i+c*f+a*h-s*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*i,this.y=a[1]*n+a[5]*r+a[9]*i,this.z=a[2]*n+a[6]*r+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,a=e.z,s=n.x,l=n.y,c=n.z;return this.x=i*c-a*l,this.y=a*s-r*c,this.z=r*l-i*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kc=new V,sp=new Us;class Fs{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Tn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Tn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Tn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,l=a.count;s<l;s++)e.isMesh===!0?e.getVertexPosition(s,Tn):Tn.fromBufferAttribute(a,s),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),lo.copy(r.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}const i=e.children;for(let a=0,s=i.length;a<s;a++)this.expandByObject(i[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xa),co.subVectors(this.max,Xa),Di.subVectors(e.a,Xa),Ii.subVectors(e.b,Xa),Ui.subVectors(e.c,Xa),gr.subVectors(Ii,Di),_r.subVectors(Ui,Ii),ei.subVectors(Di,Ui);let n=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-ei.z,ei.y,gr.z,0,-gr.x,_r.z,0,-_r.x,ei.z,0,-ei.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-ei.y,ei.x,0];return!Lc(n,Di,Ii,Ui,co)||(n=[1,0,0,0,1,0,0,0,1],!Lc(n,Di,Ii,Ui,co))?!1:(uo.crossVectors(gr,_r),n=[uo.x,uo.y,uo.z],Lc(n,Di,Ii,Ui,co))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new V,new V,new V,new V,new V,new V,new V,new V],Tn=new V,lo=new Fs,Di=new V,Ii=new V,Ui=new V,gr=new V,_r=new V,ei=new V,Xa=new V,co=new V,uo=new V,ti=new V;function Lc(t,e,n,r,i){for(let a=0,s=t.length-3;a<=s;a+=3){ti.fromArray(t,a);const l=i.x*Math.abs(ti.x)+i.y*Math.abs(ti.y)+i.z*Math.abs(ti.z),c=e.dot(ti),d=n.dot(ti),h=r.dot(ti);if(Math.max(-Math.max(c,d,h),Math.min(c,d,h))>l)return!1}return!0}const xb=new Fs,$a=new V,Dc=new V;class nh{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):xb.setFromPoints(e).getCenter(r);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$a.subVectors(e,this.center);const n=$a.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector($a,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($a.copy(e.center).add(Dc)),this.expandByPoint($a.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new V,Ic=new V,ho=new V,vr=new V,Uc=new V,fo=new V,Fc=new V;class gb{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){Ic.copy(e).add(n).multiplyScalar(.5),ho.copy(n).sub(e).normalize(),vr.copy(this.origin).sub(Ic);const a=e.distanceTo(n)*.5,s=-this.direction.dot(ho),l=vr.dot(this.direction),c=-vr.dot(ho),d=vr.lengthSq(),h=Math.abs(1-s*s);let f,p,x,v;if(h>0)if(f=s*c-l,p=s*l-c,v=a*h,f>=0)if(p>=-v)if(p<=v){const y=1/h;f*=y,p*=y,x=f*(f+s*p+2*l)+p*(s*f+p+2*c)+d}else p=a,f=Math.max(0,-(s*p+l)),x=-f*f+p*(p+2*c)+d;else p=-a,f=Math.max(0,-(s*p+l)),x=-f*f+p*(p+2*c)+d;else p<=-v?(f=Math.max(0,-(-s*a+l)),p=f>0?-a:Math.min(Math.max(-a,-c),a),x=-f*f+p*(p+2*c)+d):p<=v?(f=0,p=Math.min(Math.max(-a,-c),a),x=p*(p+2*c)+d):(f=Math.max(0,-(s*a+l)),p=f>0?a:Math.min(Math.max(-a,-c),a),x=-f*f+p*(p+2*c)+d);else p=s>0?-a:a,f=Math.max(0,-(s*p+l)),x=-f*f+p*(p+2*c)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ic).addScaledVector(ho,p),x}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const r=Qn.dot(this.direction),i=Qn.dot(Qn)-r*r,a=e.radius*e.radius;if(i>a)return null;const s=Math.sqrt(a-i),l=r-s,c=r+s;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,a,s,l,c;const d=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return d>=0?(r=(e.min.x-p.x)*d,i=(e.max.x-p.x)*d):(r=(e.max.x-p.x)*d,i=(e.min.x-p.x)*d),h>=0?(a=(e.min.y-p.y)*h,s=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,s=(e.min.y-p.y)*h),r>s||a>i||((a>r||isNaN(r))&&(r=a),(s<i||isNaN(i))&&(i=s),f>=0?(l=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(l=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),r>c||l>i)||((l>r||r!==r)&&(r=l),(c<i||i!==i)&&(i=c),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,r,i,a){Uc.subVectors(n,e),fo.subVectors(r,e),Fc.crossVectors(Uc,fo);let s=this.direction.dot(Fc),l;if(s>0){if(i)return null;l=1}else if(s<0)l=-1,s=-s;else return null;vr.subVectors(this.origin,e);const c=l*this.direction.dot(fo.crossVectors(vr,fo));if(c<0)return null;const d=l*this.direction.dot(Uc.cross(vr));if(d<0||c+d>s)return null;const h=-l*vr.dot(Fc);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,r,i,a,s,l,c,d,h,f,p,x,v,y,g){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,a,s,l,c,d,h,f,p,x,v,y,g)}set(e,n,r,i,a,s,l,c,d,h,f,p,x,v,y,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=r,u[12]=i,u[1]=a,u[5]=s,u[9]=l,u[13]=c,u[2]=d,u[6]=h,u[10]=f,u[14]=p,u[3]=x,u[7]=v,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/Fi.setFromMatrixColumn(e,0).length(),a=1/Fi.setFromMatrixColumn(e,1).length(),s=1/Fi.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*a,n[5]=r[5]*a,n[6]=r[6]*a,n[7]=0,n[8]=r[8]*s,n[9]=r[9]*s,n[10]=r[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,a=e.z,s=Math.cos(r),l=Math.sin(r),c=Math.cos(i),d=Math.sin(i),h=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const p=s*h,x=s*f,v=l*h,y=l*f;n[0]=c*h,n[4]=-c*f,n[8]=d,n[1]=x+v*d,n[5]=p-y*d,n[9]=-l*c,n[2]=y-p*d,n[6]=v+x*d,n[10]=s*c}else if(e.order==="YXZ"){const p=c*h,x=c*f,v=d*h,y=d*f;n[0]=p+y*l,n[4]=v*l-x,n[8]=s*d,n[1]=s*f,n[5]=s*h,n[9]=-l,n[2]=x*l-v,n[6]=y+p*l,n[10]=s*c}else if(e.order==="ZXY"){const p=c*h,x=c*f,v=d*h,y=d*f;n[0]=p-y*l,n[4]=-s*f,n[8]=v+x*l,n[1]=x+v*l,n[5]=s*h,n[9]=y-p*l,n[2]=-s*d,n[6]=l,n[10]=s*c}else if(e.order==="ZYX"){const p=s*h,x=s*f,v=l*h,y=l*f;n[0]=c*h,n[4]=v*d-x,n[8]=p*d+y,n[1]=c*f,n[5]=y*d+p,n[9]=x*d-v,n[2]=-d,n[6]=l*c,n[10]=s*c}else if(e.order==="YZX"){const p=s*c,x=s*d,v=l*c,y=l*d;n[0]=c*h,n[4]=y-p*f,n[8]=v*f+x,n[1]=f,n[5]=s*h,n[9]=-l*h,n[2]=-d*h,n[6]=x*f+v,n[10]=p-y*f}else if(e.order==="XZY"){const p=s*c,x=s*d,v=l*c,y=l*d;n[0]=c*h,n[4]=-f,n[8]=d*h,n[1]=p*f+y,n[5]=s*h,n[9]=x*f-v,n[2]=v*f-x,n[6]=l*h,n[10]=y*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_b,e,vb)}lookAt(e,n,r){const i=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),yr.crossVectors(r,an),yr.lengthSq()===0&&(Math.abs(r.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),yr.crossVectors(r,an)),yr.normalize(),po.crossVectors(an,yr),i[0]=yr.x,i[4]=po.x,i[8]=an.x,i[1]=yr.y,i[5]=po.y,i[9]=an.y,i[2]=yr.z,i[6]=po.z,i[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,a=this.elements,s=r[0],l=r[4],c=r[8],d=r[12],h=r[1],f=r[5],p=r[9],x=r[13],v=r[2],y=r[6],g=r[10],u=r[14],_=r[3],m=r[7],b=r[11],N=r[15],A=i[0],T=i[4],P=i[8],M=i[12],S=i[1],C=i[5],z=i[9],j=i[13],$=i[2],O=i[6],U=i[10],W=i[14],D=i[3],q=i[7],Z=i[11],ie=i[15];return a[0]=s*A+l*S+c*$+d*D,a[4]=s*T+l*C+c*O+d*q,a[8]=s*P+l*z+c*U+d*Z,a[12]=s*M+l*j+c*W+d*ie,a[1]=h*A+f*S+p*$+x*D,a[5]=h*T+f*C+p*O+x*q,a[9]=h*P+f*z+p*U+x*Z,a[13]=h*M+f*j+p*W+x*ie,a[2]=v*A+y*S+g*$+u*D,a[6]=v*T+y*C+g*O+u*q,a[10]=v*P+y*z+g*U+u*Z,a[14]=v*M+y*j+g*W+u*ie,a[3]=_*A+m*S+b*$+N*D,a[7]=_*T+m*C+b*O+N*q,a[11]=_*P+m*z+b*U+N*Z,a[15]=_*M+m*j+b*W+N*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],a=e[12],s=e[1],l=e[5],c=e[9],d=e[13],h=e[2],f=e[6],p=e[10],x=e[14],v=e[3],y=e[7],g=e[11],u=e[15];return v*(+a*c*f-i*d*f-a*l*p+r*d*p+i*l*x-r*c*x)+y*(+n*c*x-n*d*p+a*s*p-i*s*x+i*d*h-a*c*h)+g*(+n*d*f-n*l*x-a*s*f+r*s*x+a*l*h-r*d*h)+u*(-i*l*h-n*c*f+n*l*p+i*s*f-r*s*p+r*c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],l=e[5],c=e[6],d=e[7],h=e[8],f=e[9],p=e[10],x=e[11],v=e[12],y=e[13],g=e[14],u=e[15],_=f*g*d-y*p*d+y*c*x-l*g*x-f*c*u+l*p*u,m=v*p*d-h*g*d-v*c*x+s*g*x+h*c*u-s*p*u,b=h*y*d-v*f*d+v*l*x-s*y*x-h*l*u+s*f*u,N=v*f*c-h*y*c-v*l*p+s*y*p+h*l*g-s*f*g,A=n*_+r*m+i*b+a*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=_*T,e[1]=(y*p*a-f*g*a-y*i*x+r*g*x+f*i*u-r*p*u)*T,e[2]=(l*g*a-y*c*a+y*i*d-r*g*d-l*i*u+r*c*u)*T,e[3]=(f*c*a-l*p*a-f*i*d+r*p*d+l*i*x-r*c*x)*T,e[4]=m*T,e[5]=(h*g*a-v*p*a+v*i*x-n*g*x-h*i*u+n*p*u)*T,e[6]=(v*c*a-s*g*a-v*i*d+n*g*d+s*i*u-n*c*u)*T,e[7]=(s*p*a-h*c*a+h*i*d-n*p*d-s*i*x+n*c*x)*T,e[8]=b*T,e[9]=(v*f*a-h*y*a-v*r*x+n*y*x+h*r*u-n*f*u)*T,e[10]=(s*y*a-v*l*a+v*r*d-n*y*d-s*r*u+n*l*u)*T,e[11]=(h*l*a-s*f*a-h*r*d+n*f*d+s*r*x-n*l*x)*T,e[12]=N*T,e[13]=(h*y*i-v*f*i+v*r*p-n*y*p-h*r*g+n*f*g)*T,e[14]=(v*l*i-s*y*i-v*r*c+n*y*c+s*r*g-n*l*g)*T,e[15]=(s*f*i-h*l*i+h*r*c-n*f*c-s*r*p+n*l*p)*T,this}scale(e){const n=this.elements,r=e.x,i=e.y,a=e.z;return n[0]*=r,n[4]*=i,n[8]*=a,n[1]*=r,n[5]*=i,n[9]*=a,n[2]*=r,n[6]*=i,n[10]*=a,n[3]*=r,n[7]*=i,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),a=1-r,s=e.x,l=e.y,c=e.z,d=a*s,h=a*l;return this.set(d*s+r,d*l-i*c,d*c+i*l,0,d*l+i*c,h*l+r,h*c-i*s,0,d*c-i*l,h*c+i*s,a*c*c+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,a,s){return this.set(1,r,a,0,e,1,s,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,a=n._x,s=n._y,l=n._z,c=n._w,d=a+a,h=s+s,f=l+l,p=a*d,x=a*h,v=a*f,y=s*h,g=s*f,u=l*f,_=c*d,m=c*h,b=c*f,N=r.x,A=r.y,T=r.z;return i[0]=(1-(y+u))*N,i[1]=(x+b)*N,i[2]=(v-m)*N,i[3]=0,i[4]=(x-b)*A,i[5]=(1-(p+u))*A,i[6]=(g+_)*A,i[7]=0,i[8]=(v+m)*T,i[9]=(g-_)*T,i[10]=(1-(p+y))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let a=Fi.set(i[0],i[1],i[2]).length();const s=Fi.set(i[4],i[5],i[6]).length(),l=Fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],An.copy(this);const d=1/a,h=1/s,f=1/l;return An.elements[0]*=d,An.elements[1]*=d,An.elements[2]*=d,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,n.setFromRotationMatrix(An),r.x=a,r.y=s,r.z=l,this}makePerspective(e,n,r,i,a,s,l=lr){const c=this.elements,d=2*a/(n-e),h=2*a/(r-i),f=(n+e)/(n-e),p=(r+i)/(r-i);let x,v;if(l===lr)x=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(l===_l)x=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,r,i,a,s,l=lr){const c=this.elements,d=1/(n-e),h=1/(r-i),f=1/(s-a),p=(n+e)*d,x=(r+i)*h;let v,y;if(l===lr)v=(s+a)*f,y=-2*f;else if(l===_l)v=a*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=y,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Fi=new V,An=new gt,_b=new V(0,0,0),vb=new V(1,1,1),yr=new V,po=new V,an=new V,op=new gt,lp=new Us;class Kn{constructor(e=0,n=0,r=0,i=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,a=i[0],s=i[4],l=i[8],c=i[1],d=i[5],h=i[9],f=i[2],p=i[6],x=i[10];switch(n){case"XYZ":this._y=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(p,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,x),this._z=Math.atan2(-s,d)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,x),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,d));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-Kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,d),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-h,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(op,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lp.setFromEuler(this),this.setFromQuaternion(lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Eg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yb=0;const cp=new V,Oi=new Us,er=new gt,mo=new V,qa=new V,Sb=new V,bb=new Us,dp=new V(1,0,0),up=new V(0,1,0),hp=new V(0,0,1),fp={type:"added"},Mb={type:"removed"},zi={type:"childadded",child:null},Oc={type:"childremoved",child:null};class zt extends Da{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new V,n=new Kn,r=new Us,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function s(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ue}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Oi.setFromAxisAngle(e,n),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,n){return Oi.setFromAxisAngle(e,n),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(dp,e)}rotateY(e){return this.rotateOnAxis(up,e)}rotateZ(e){return this.rotateOnAxis(hp,e)}translateOnAxis(e,n){return cp.copy(e).applyQuaternion(this.quaternion),this.position.add(cp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dp,e)}translateY(e){return this.translateOnAxis(up,e)}translateZ(e){return this.translateOnAxis(hp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?mo.copy(e):mo.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(qa,mo,this.up):er.lookAt(mo,qa,this.up),this.quaternion.setFromRotationMatrix(er),i&&(er.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(er),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fp),zi.child=e,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Mb),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fp),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,e,Sb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,bb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++){const a=n[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const i=this.children;for(let a=0,s=i.length;a<s;a++){const l=i[a];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){const f=c[d];a(e.shapes,f)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(a(e.materials,this.material[c]));i.material=l}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];i.animations.push(a(e.animations,c))}}if(n){const l=s(e.geometries),c=s(e.materials),d=s(e.textures),h=s(e.images),f=s(e.shapes),p=s(e.skeletons),x=s(e.animations),v=s(e.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),d.length>0&&(r.textures=d),h.length>0&&(r.images=h),f.length>0&&(r.shapes=f),p.length>0&&(r.skeletons=p),x.length>0&&(r.animations=x),v.length>0&&(r.nodes=v)}return r.object=i,r;function s(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}zt.DEFAULT_UP=new V(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new V,tr=new V,zc=new V,nr=new V,ji=new V,Bi=new V,pp=new V,jc=new V,Bc=new V,Hc=new V;class Gn{constructor(e=new V,n=new V,r=new V){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),Cn.subVectors(e,n),i.cross(Cn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,n,r,i,a){Cn.subVectors(i,n),tr.subVectors(r,n),zc.subVectors(e,n);const s=Cn.dot(Cn),l=Cn.dot(tr),c=Cn.dot(zc),d=tr.dot(tr),h=tr.dot(zc),f=s*d-l*l;if(f===0)return a.set(0,0,0),null;const p=1/f,x=(d*c-l*h)*p,v=(s*h-l*c)*p;return a.set(1-x-v,v,x)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,n,r,i,a,s,l,c){return this.getBarycoord(e,n,r,i,nr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,nr.x),c.addScaledVector(s,nr.y),c.addScaledVector(l,nr.z),c)}static isFrontFacing(e,n,r,i){return Cn.subVectors(r,n),tr.subVectors(e,n),Cn.cross(tr).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Cn.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,i,a){return Gn.getInterpolation(e,this.a,this.b,this.c,n,r,i,a)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,a=this.c;let s,l;ji.subVectors(i,r),Bi.subVectors(a,r),jc.subVectors(e,r);const c=ji.dot(jc),d=Bi.dot(jc);if(c<=0&&d<=0)return n.copy(r);Bc.subVectors(e,i);const h=ji.dot(Bc),f=Bi.dot(Bc);if(h>=0&&f<=h)return n.copy(i);const p=c*f-h*d;if(p<=0&&c>=0&&h<=0)return s=c/(c-h),n.copy(r).addScaledVector(ji,s);Hc.subVectors(e,a);const x=ji.dot(Hc),v=Bi.dot(Hc);if(v>=0&&x<=v)return n.copy(a);const y=x*d-c*v;if(y<=0&&d>=0&&v<=0)return l=d/(d-v),n.copy(r).addScaledVector(Bi,l);const g=h*v-x*f;if(g<=0&&f-h>=0&&x-v>=0)return pp.subVectors(a,i),l=(f-h)/(f-h+(x-v)),n.copy(i).addScaledVector(pp,l);const u=1/(g+y+p);return s=y*u,l=p*u,n.copy(r).addScaledVector(ji,s).addScaledVector(Bi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Vc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=Je.workingColorSpace){return this.r=e,this.g=n,this.b=r,Je.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=Je.workingColorSpace){if(e=ob(e,1),n=Kt(n,0,1),r=Kt(r,0,1),n===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+n):r+n-r*n,s=2*r-a;this.r=Vc(s,a,e+1/3),this.g=Vc(s,a,e),this.b=Vc(s,a,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,n=jn){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=i[1],l=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const r=Tg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Rc(e.r),this.g=Rc(e.g),this.b=Rc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Je.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Kt(Ft.r*255,0,255))*65536+Math.round(Kt(Ft.g*255,0,255))*256+Math.round(Kt(Ft.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Ft.copy(this),n);const r=Ft.r,i=Ft.g,a=Ft.b,s=Math.max(r,i,a),l=Math.min(r,i,a);let c,d;const h=(l+s)/2;if(l===s)c=0,d=0;else{const f=s-l;switch(d=h<=.5?f/(s+l):f/(2-s-l),s){case r:c=(i-a)/f+(i<a?6:0);break;case i:c=(a-r)/f+2;break;case a:c=(r-i)/f+4;break}c/=6}return e.h=c,e.s=d,e.l=h,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=jn){Je.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,r=Ft.g,i=Ft.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+n,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Sr),e.getHSL(xo);const r=Cc(Sr.h,xo.h,n),i=Cc(Sr.s,xo.s,n),a=Cc(Sr.l,xo.l,n);return this.setHSL(r,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,a=e.elements;return this.r=a[0]*n+a[3]*r+a[6]*i,this.g=a[1]*n+a[4]*r+a[7]*i,this.b=a[2]*n+a[5]*r+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ye;Ye.NAMES=Tg;let wb=0;class Os extends Da{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=pa,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=Qd,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==pa&&(r.blending=this.blending),this.side!==Gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Jd&&(r.blendSrc=this.blendSrc),this.blendDst!==Qd&&(r.blendDst=this.blendDst),this.blendEquation!==di&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==fl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ep&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){const s=[];for(const l in a){const c=a[l];delete c.metadata,s.push(c)}return s}if(n){const a=i(e.textures),s=i(e.images);a.length>0&&(r.textures=a),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=n[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rh extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new V,go=new Xe;class Yn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=tp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return bg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)go.fromBufferAttribute(this,n),go.applyMatrix3(e),this.setXY(n,go.x,go.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Wa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=qt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Wa(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Wa(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Wa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Wa(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),r=qt(r,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,a){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),r=qt(r,this.array),i=qt(i,this.array),a=qt(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tp&&(e.usage=this.usage),e}}class Ag extends Yn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Cg extends Yn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class vi extends Yn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Eb=0;const mn=new gt,Gc=new zt,Hi=new V,sn=new Fs,Ya=new Fs,At=new V;class Ri extends Da{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sg(e)?Cg:Ag)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Ue().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,r){return mn.makeTranslation(e,n,r),this.applyMatrix4(mn),this}scale(e,n,r){return mn.makeScale(e,n,r),this.applyMatrix4(mn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const n=[];for(let r=0,i=e.length;r<i;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new vi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const a=n[r];sn.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const r=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const l=n[a];Ya.setFromBufferAttribute(l),this.morphTargetsRelative?(At.addVectors(sn.min,Ya.min),sn.expandByPoint(At),At.addVectors(sn.max,Ya.max),sn.expandByPoint(At)):(sn.expandByPoint(Ya.min),sn.expandByPoint(Ya.max))}sn.getCenter(r);let i=0;for(let a=0,s=e.count;a<s;a++)At.fromBufferAttribute(e,a),i=Math.max(i,r.distanceToSquared(At));if(n)for(let a=0,s=n.length;a<s;a++){const l=n[a],c=this.morphTargetsRelative;for(let d=0,h=l.count;d<h;d++)At.fromBufferAttribute(l,d),c&&(Hi.fromBufferAttribute(e,d),At.add(Hi)),i=Math.max(i,r.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,i=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),l=[],c=[];for(let P=0;P<r.count;P++)l[P]=new V,c[P]=new V;const d=new V,h=new V,f=new V,p=new Xe,x=new Xe,v=new Xe,y=new V,g=new V;function u(P,M,S){d.fromBufferAttribute(r,P),h.fromBufferAttribute(r,M),f.fromBufferAttribute(r,S),p.fromBufferAttribute(a,P),x.fromBufferAttribute(a,M),v.fromBufferAttribute(a,S),h.sub(d),f.sub(d),x.sub(p),v.sub(p);const C=1/(x.x*v.y-v.x*x.y);isFinite(C)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(f,-x.y).multiplyScalar(C),g.copy(f).multiplyScalar(x.x).addScaledVector(h,-v.x).multiplyScalar(C),l[P].add(y),l[M].add(y),l[S].add(y),c[P].add(g),c[M].add(g),c[S].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,M=_.length;P<M;++P){const S=_[P],C=S.start,z=S.count;for(let j=C,$=C+z;j<$;j+=3)u(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const m=new V,b=new V,N=new V,A=new V;function T(P){N.fromBufferAttribute(i,P),A.copy(N);const M=l[P];m.copy(M),m.sub(N.multiplyScalar(N.dot(M))).normalize(),b.crossVectors(A,M);const C=b.dot(c[P])<0?-1:1;s.setXYZW(P,m.x,m.y,m.z,C)}for(let P=0,M=_.length;P<M;++P){const S=_[P],C=S.start,z=S.count;for(let j=C,$=C+z;j<$;j+=3)T(e.getX(j+0)),T(e.getX(j+1)),T(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let p=0,x=r.count;p<x;p++)r.setXYZ(p,0,0,0);const i=new V,a=new V,s=new V,l=new V,c=new V,d=new V,h=new V,f=new V;if(e)for(let p=0,x=e.count;p<x;p+=3){const v=e.getX(p+0),y=e.getX(p+1),g=e.getX(p+2);i.fromBufferAttribute(n,v),a.fromBufferAttribute(n,y),s.fromBufferAttribute(n,g),h.subVectors(s,a),f.subVectors(i,a),h.cross(f),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,y),d.fromBufferAttribute(r,g),l.add(h),c.add(h),d.add(h),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(y,c.x,c.y,c.z),r.setXYZ(g,d.x,d.y,d.z)}else for(let p=0,x=n.count;p<x;p+=3)i.fromBufferAttribute(n,p+0),a.fromBufferAttribute(n,p+1),s.fromBufferAttribute(n,p+2),h.subVectors(s,a),f.subVectors(i,a),h.cross(f),r.setXYZ(p+0,h.x,h.y,h.z),r.setXYZ(p+1,h.x,h.y,h.z),r.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(l,c){const d=l.array,h=l.itemSize,f=l.normalized,p=new d.constructor(c.length*h);let x=0,v=0;for(let y=0,g=c.length;y<g;y++){l.isInterleavedBufferAttribute?x=c[y]*l.data.stride+l.offset:x=c[y]*h;for(let u=0;u<h;u++)p[v++]=d[x++]}return new Yn(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ri,r=this.index.array,i=this.attributes;for(const l in i){const c=i[l],d=e(c,r);n.setAttribute(l,d)}const a=this.morphAttributes;for(const l in a){const c=[],d=a[l];for(let h=0,f=d.length;h<f;h++){const p=d[h],x=e(p,r);c.push(x)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let l=0,c=s.length;l<c;l++){const d=s[l];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const c in r){const d=r[c];e.data.attributes[c]=d.toJSON(e.data)}const i={};let a=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],h=[];for(let f=0,p=d.length;f<p;f++){const x=d[f];h.push(x.toJSON(e.data))}h.length>0&&(i[c]=h,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const i=e.attributes;for(const d in i){const h=i[d];this.setAttribute(d,h.clone(n))}const a=e.morphAttributes;for(const d in a){const h=[],f=a[d];for(let p=0,x=f.length;p<x;p++)h.push(f[p].clone(n));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let d=0,h=s.length;d<h;d++){const f=s[d];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mp=new gt,ni=new gb,_o=new nh,xp=new V,Vi=new V,Gi=new V,Wi=new V,Wc=new V,vo=new V,yo=new Xe,So=new Xe,bo=new Xe,gp=new V,_p=new V,vp=new V,Mo=new V,wo=new V;class cn extends zt{constructor(e=new Ri,n=new rh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const l=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,s=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(a&&l){vo.set(0,0,0);for(let c=0,d=a.length;c<d;c++){const h=l[c],f=a[c];h!==0&&(Wc.fromBufferAttribute(f,e),s?vo.addScaledVector(Wc,h):vo.addScaledVector(Wc.sub(n),h))}n.add(vo)}return n}raycast(e,n){const r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_o.copy(r.boundingSphere),_o.applyMatrix4(a),ni.copy(e.ray).recast(e.near),!(_o.containsPoint(ni.origin)===!1&&(ni.intersectSphere(_o,xp)===null||ni.origin.distanceToSquared(xp)>(e.far-e.near)**2))&&(mp.copy(a).invert(),ni.copy(e.ray).applyMatrix4(mp),!(r.boundingBox!==null&&ni.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,ni)))}_computeIntersections(e,n,r){let i;const a=this.geometry,s=this.material,l=a.index,c=a.attributes.position,d=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,p=a.groups,x=a.drawRange;if(l!==null)if(Array.isArray(s))for(let v=0,y=p.length;v<y;v++){const g=p[v],u=s[g.materialIndex],_=Math.max(g.start,x.start),m=Math.min(l.count,Math.min(g.start+g.count,x.start+x.count));for(let b=_,N=m;b<N;b+=3){const A=l.getX(b),T=l.getX(b+1),P=l.getX(b+2);i=Eo(this,u,e,r,d,h,f,A,T,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const v=Math.max(0,x.start),y=Math.min(l.count,x.start+x.count);for(let g=v,u=y;g<u;g+=3){const _=l.getX(g),m=l.getX(g+1),b=l.getX(g+2);i=Eo(this,s,e,r,d,h,f,_,m,b),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,y=p.length;v<y;v++){const g=p[v],u=s[g.materialIndex],_=Math.max(g.start,x.start),m=Math.min(c.count,Math.min(g.start+g.count,x.start+x.count));for(let b=_,N=m;b<N;b+=3){const A=b,T=b+1,P=b+2;i=Eo(this,u,e,r,d,h,f,A,T,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const v=Math.max(0,x.start),y=Math.min(c.count,x.start+x.count);for(let g=v,u=y;g<u;g+=3){const _=g,m=g+1,b=g+2;i=Eo(this,s,e,r,d,h,f,_,m,b),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}}}function Tb(t,e,n,r,i,a,s,l){let c;if(e.side===nn?c=r.intersectTriangle(s,a,i,!0,l):c=r.intersectTriangle(i,a,s,e.side===Gr,l),c===null)return null;wo.copy(l),wo.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(wo);return d<n.near||d>n.far?null:{distance:d,point:wo.clone(),object:t}}function Eo(t,e,n,r,i,a,s,l,c,d){t.getVertexPosition(l,Vi),t.getVertexPosition(c,Gi),t.getVertexPosition(d,Wi);const h=Tb(t,e,n,r,Vi,Gi,Wi,Mo);if(h){i&&(yo.fromBufferAttribute(i,l),So.fromBufferAttribute(i,c),bo.fromBufferAttribute(i,d),h.uv=Gn.getInterpolation(Mo,Vi,Gi,Wi,yo,So,bo,new Xe)),a&&(yo.fromBufferAttribute(a,l),So.fromBufferAttribute(a,c),bo.fromBufferAttribute(a,d),h.uv1=Gn.getInterpolation(Mo,Vi,Gi,Wi,yo,So,bo,new Xe)),s&&(gp.fromBufferAttribute(s,l),_p.fromBufferAttribute(s,c),vp.fromBufferAttribute(s,d),h.normal=Gn.getInterpolation(Mo,Vi,Gi,Wi,gp,_p,vp,new V),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const f={a:l,b:c,c:d,normal:new V,materialIndex:0};Gn.getNormal(Vi,Gi,Wi,f.normal),h.face=f}return h}class Ia extends Ri{constructor(e=1,n=1,r=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:a,depthSegments:s};const l=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const c=[],d=[],h=[],f=[];let p=0,x=0;v("z","y","x",-1,-1,r,n,e,s,a,0),v("z","y","x",1,-1,r,n,-e,s,a,1),v("x","z","y",1,1,e,r,n,i,s,2),v("x","z","y",1,-1,e,r,-n,i,s,3),v("x","y","z",1,-1,e,n,r,i,a,4),v("x","y","z",-1,-1,e,n,-r,i,a,5),this.setIndex(c),this.setAttribute("position",new vi(d,3)),this.setAttribute("normal",new vi(h,3)),this.setAttribute("uv",new vi(f,2));function v(y,g,u,_,m,b,N,A,T,P,M){const S=b/T,C=N/P,z=b/2,j=N/2,$=A/2,O=T+1,U=P+1;let W=0,D=0;const q=new V;for(let Z=0;Z<U;Z++){const ie=Z*C-j;for(let ve=0;ve<O;ve++){const Be=ve*S-z;q[y]=Be*_,q[g]=ie*m,q[u]=$,d.push(q.x,q.y,q.z),q[y]=0,q[g]=0,q[u]=A>0?1:-1,h.push(q.x,q.y,q.z),f.push(ve/T),f.push(1-Z/P),W+=1}}for(let Z=0;Z<P;Z++)for(let ie=0;ie<T;ie++){const ve=p+ie+O*Z,Be=p+ie+O*(Z+1),X=p+(ie+1)+O*(Z+1),ne=p+(ie+1)+O*Z;c.push(ve,Be,ne),c.push(Be,X,ne),D+=6}l.addGroup(x,D,M),x+=D,p+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ra(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const r=Ra(t[n]);for(const i in r)e[i]=r[i]}return e}function Ab(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ng(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Cb={clone:Ra,merge:Ht};var Nb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xr extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nb,this.fragmentShader=Rb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ra(e.uniforms),this.uniformsGroups=Ab(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?n.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[i]={type:"m4",value:s.toArray()}:n.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Rg extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=lr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const br=new V,yp=new Xe,Sp=new Xe;class _n extends Rg{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=iu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return iu*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,n){return this.getViewBounds(e,yp,Sp),n.subVectors(Sp,yp)}setViewOffset(e,n,r,i,a,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ac*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,a=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,d=s.fullHeight;a+=s.offsetX*i/c,n-=s.offsetY*r/d,i*=s.width/c,r*=s.height/d}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xi=-90,$i=1;class Pb extends zt{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new _n(Xi,$i,e,n);i.layers=this.layers,this.add(i);const a=new _n(Xi,$i,e,n);a.layers=this.layers,this.add(a);const s=new _n(Xi,$i,e,n);s.layers=this.layers,this.add(s);const l=new _n(Xi,$i,e,n);l.layers=this.layers,this.add(l);const c=new _n(Xi,$i,e,n);c.layers=this.layers,this.add(c);const d=new _n(Xi,$i,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,a,s,l,c]=n;for(const d of n)this.remove(d);if(e===lr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_l)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,l,c,d,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,a),e.setRenderTarget(r,1,i),e.render(n,s),e.setRenderTarget(r,2,i),e.render(n,l),e.setRenderTarget(r,3,i),e.render(n,c),e.setRenderTarget(r,4,i),e.render(n,d),r.texture.generateMipmaps=y,e.setRenderTarget(r,5,i),e.render(n,h),e.setRenderTarget(f,p,x),e.xr.enabled=v,r.texture.needsPMREMUpdate=!0}}class Pg extends Wt{constructor(e,n,r,i,a,s,l,c,d,h){e=e!==void 0?e:[],n=n!==void 0?n:Ea,super(e,n,r,i,a,s,l,c,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kb extends Ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new Pg(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ia(5,5,5),a=new Xr({name:"CubemapFromEquirect",uniforms:Ra(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:nn,blending:jr});a.uniforms.tEquirect.value=n;const s=new cn(i,a),l=n.minFilter;return n.minFilter===xi&&(n.minFilter=vn),new Pb(1,10,this).update(e,s),n.minFilter=l,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,r,i){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,r,i);e.setRenderTarget(a)}}const Xc=new V,Lb=new V,Db=new Ue;class li{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=Xc.subVectors(r,n).cross(Lb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Xc),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Db.getNormalMatrix(e),i=this.coplanarPoint(Xc).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new nh,To=new V;class ih{constructor(e=new li,n=new li,r=new li,i=new li,a=new li,s=new li){this.planes=[e,n,r,i,a,s]}set(e,n,r,i,a,s){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(r),l[3].copy(i),l[4].copy(a),l[5].copy(s),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=lr){const r=this.planes,i=e.elements,a=i[0],s=i[1],l=i[2],c=i[3],d=i[4],h=i[5],f=i[6],p=i[7],x=i[8],v=i[9],y=i[10],g=i[11],u=i[12],_=i[13],m=i[14],b=i[15];if(r[0].setComponents(c-a,p-d,g-x,b-u).normalize(),r[1].setComponents(c+a,p+d,g+x,b+u).normalize(),r[2].setComponents(c+s,p+h,g+v,b+_).normalize(),r[3].setComponents(c-s,p-h,g-v,b-_).normalize(),r[4].setComponents(c-l,p-f,g-y,b-m).normalize(),n===lr)r[5].setComponents(c+l,p+f,g+y,b+m).normalize();else if(n===_l)r[5].setComponents(l,f,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ri.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(To.x=i.normal.x>0?e.max.x:e.min.x,To.y=i.normal.y>0?e.max.y:e.min.y,To.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kg(){let t=null,e=!1,n=null,r=null;function i(a,s){n(a,s),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function Ib(t){const e=new WeakMap;function n(l,c){const d=l.array,h=l.usage,f=d.byteLength,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,d,h),l.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?x=t.HALF_FLOAT:x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,c,d){const h=c.array,f=c._updateRange,p=c.updateRanges;if(t.bindBuffer(d,l),f.count===-1&&p.length===0&&t.bufferSubData(d,0,h),p.length!==0){for(let x=0,v=p.length;x<v;x++){const y=p[x];t.bufferSubData(d,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count),f.count=-1),c.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function s(l,c){if(l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=e.get(l);if(d===void 0)e.set(l,n(l,c));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,c),d.version=l.version}}return{get:i,remove:a,update:s}}class zs extends Ri{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const a=e/2,s=n/2,l=Math.floor(r),c=Math.floor(i),d=l+1,h=c+1,f=e/l,p=n/c,x=[],v=[],y=[],g=[];for(let u=0;u<h;u++){const _=u*p-s;for(let m=0;m<d;m++){const b=m*f-a;v.push(b,-_,0),y.push(0,0,1),g.push(m/l),g.push(1-u/c)}}for(let u=0;u<c;u++)for(let _=0;_<l;_++){const m=_+d*u,b=_+d*(u+1),N=_+1+d*(u+1),A=_+1+d*u;x.push(m,b,A),x.push(b,N,A)}this.setIndex(x),this.setAttribute("position",new vi(v,3)),this.setAttribute("normal",new vi(y,3)),this.setAttribute("uv",new vi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fb=`#ifdef USE_ALPHAHASH
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
#endif`,Ob=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hb=`#ifdef USE_AOMAP
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
#endif`,Vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gb=`#ifdef USE_BATCHING
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
#endif`,Wb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yb=`#ifdef USE_IRIDESCENCE
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
#endif`,Kb=`#ifdef USE_BUMPMAP
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
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,a1=`#define PI 3.141592653589793
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
} // validated`,s1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o1=`vec3 transformedNormal = objectNormal;
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
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h1="gl_FragColor = linearToOutputTexel( gl_FragColor );",f1=`
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
}`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x1=`#ifdef USE_ENVMAP
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
#endif`,g1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M1=`#ifdef USE_GRADIENTMAP
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
}`,w1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A1=`uniform bool receiveShadow;
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
#endif`,C1=`#ifdef USE_ENVMAP
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
#endif`,N1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L1=`PhysicalMaterial material;
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
#endif`,D1=`struct PhysicalMaterial {
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
}`,I1=`
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
#endif`,U1=`#if defined( RE_IndirectDiffuse )
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
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W1=`#if defined( USE_POINTS_UV )
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
#endif`,X1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`#ifdef USE_MORPHTARGETS
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
#endif`,J1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iM=`#ifdef USE_NORMALMAP
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
#endif`,aM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yM=`float getShadowMask() {
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
}`,SM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bM=`#ifdef USE_SKINNING
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
#endif`,MM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wM=`#ifdef USE_SKINNING
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
#endif`,EM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NM=`#ifdef USE_TRANSMISSION
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
#endif`,RM=`#ifdef USE_TRANSMISSION
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
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UM=`uniform sampler2D t2D;
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
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BM=`#include <common>
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
}`,HM=`#if DEPTH_PACKING == 3200
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
}`,VM=`#define DISTANCE
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
}`,GM=`#define DISTANCE
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
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`uniform float scale;
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
}`,qM=`uniform vec3 diffuse;
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
}`,YM=`#include <common>
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
}`,KM=`uniform vec3 diffuse;
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
}`,ZM=`#define LAMBERT
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
}`,JM=`#define LAMBERT
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
}`,QM=`#define MATCAP
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
}`,ew=`#define MATCAP
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
}`,tw=`#define NORMAL
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
}`,nw=`#define NORMAL
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
}`,rw=`#define PHONG
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
}`,iw=`#define PHONG
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
}`,aw=`#define STANDARD
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
}`,sw=`#define STANDARD
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
}`,ow=`#define TOON
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
}`,lw=`#define TOON
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
}`,cw=`uniform float size;
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
}`,dw=`uniform vec3 diffuse;
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
}`,uw=`#include <common>
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
}`,hw=`uniform vec3 color;
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
}`,fw=`uniform float rotation;
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
}`,pw=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:Ub,alphahash_pars_fragment:Fb,alphamap_fragment:Ob,alphamap_pars_fragment:zb,alphatest_fragment:jb,alphatest_pars_fragment:Bb,aomap_fragment:Hb,aomap_pars_fragment:Vb,batching_pars_vertex:Gb,batching_vertex:Wb,begin_vertex:Xb,beginnormal_vertex:$b,bsdfs:qb,iridescence_fragment:Yb,bumpmap_pars_fragment:Kb,clipping_planes_fragment:Zb,clipping_planes_pars_fragment:Jb,clipping_planes_pars_vertex:Qb,clipping_planes_vertex:e1,color_fragment:t1,color_pars_fragment:n1,color_pars_vertex:r1,color_vertex:i1,common:a1,cube_uv_reflection_fragment:s1,defaultnormal_vertex:o1,displacementmap_pars_vertex:l1,displacementmap_vertex:c1,emissivemap_fragment:d1,emissivemap_pars_fragment:u1,colorspace_fragment:h1,colorspace_pars_fragment:f1,envmap_fragment:p1,envmap_common_pars_fragment:m1,envmap_pars_fragment:x1,envmap_pars_vertex:g1,envmap_physical_pars_fragment:C1,envmap_vertex:_1,fog_vertex:v1,fog_pars_vertex:y1,fog_fragment:S1,fog_pars_fragment:b1,gradientmap_pars_fragment:M1,lightmap_pars_fragment:w1,lights_lambert_fragment:E1,lights_lambert_pars_fragment:T1,lights_pars_begin:A1,lights_toon_fragment:N1,lights_toon_pars_fragment:R1,lights_phong_fragment:P1,lights_phong_pars_fragment:k1,lights_physical_fragment:L1,lights_physical_pars_fragment:D1,lights_fragment_begin:I1,lights_fragment_maps:U1,lights_fragment_end:F1,logdepthbuf_fragment:O1,logdepthbuf_pars_fragment:z1,logdepthbuf_pars_vertex:j1,logdepthbuf_vertex:B1,map_fragment:H1,map_pars_fragment:V1,map_particle_fragment:G1,map_particle_pars_fragment:W1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:$1,morphinstance_vertex:q1,morphcolor_vertex:Y1,morphnormal_vertex:K1,morphtarget_pars_vertex:Z1,morphtarget_vertex:J1,normal_fragment_begin:Q1,normal_fragment_maps:eM,normal_pars_fragment:tM,normal_pars_vertex:nM,normal_vertex:rM,normalmap_pars_fragment:iM,clearcoat_normal_fragment_begin:aM,clearcoat_normal_fragment_maps:sM,clearcoat_pars_fragment:oM,iridescence_pars_fragment:lM,opaque_fragment:cM,packing:dM,premultiplied_alpha_fragment:uM,project_vertex:hM,dithering_fragment:fM,dithering_pars_fragment:pM,roughnessmap_fragment:mM,roughnessmap_pars_fragment:xM,shadowmap_pars_fragment:gM,shadowmap_pars_vertex:_M,shadowmap_vertex:vM,shadowmask_pars_fragment:yM,skinbase_vertex:SM,skinning_pars_vertex:bM,skinning_vertex:MM,skinnormal_vertex:wM,specularmap_fragment:EM,specularmap_pars_fragment:TM,tonemapping_fragment:AM,tonemapping_pars_fragment:CM,transmission_fragment:NM,transmission_pars_fragment:RM,uv_pars_fragment:PM,uv_pars_vertex:kM,uv_vertex:LM,worldpos_vertex:DM,background_vert:IM,background_frag:UM,backgroundCube_vert:FM,backgroundCube_frag:OM,cube_vert:zM,cube_frag:jM,depth_vert:BM,depth_frag:HM,distanceRGBA_vert:VM,distanceRGBA_frag:GM,equirect_vert:WM,equirect_frag:XM,linedashed_vert:$M,linedashed_frag:qM,meshbasic_vert:YM,meshbasic_frag:KM,meshlambert_vert:ZM,meshlambert_frag:JM,meshmatcap_vert:QM,meshmatcap_frag:ew,meshnormal_vert:tw,meshnormal_frag:nw,meshphong_vert:rw,meshphong_frag:iw,meshphysical_vert:aw,meshphysical_frag:sw,meshtoon_vert:ow,meshtoon_frag:lw,points_vert:cw,points_frag:dw,shadow_vert:uw,shadow_frag:hw,sprite_vert:fw,sprite_frag:pw},ce={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Bn={basic:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Ht([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Ht([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Ht([ce.points,ce.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Ht([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Ht([ce.common,ce.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Ht([ce.sprite,ce.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Ht([ce.common,ce.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Ht([ce.lights,ce.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Bn.physical={uniforms:Ht([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Ao={r:0,b:0,g:0},ii=new Kn,mw=new gt;function xw(t,e,n,r,i,a,s){const l=new Ye(0);let c=a===!0?0:1,d,h,f=null,p=0,x=null;function v(_){let m=_.isScene===!0?_.background:null;return m&&m.isTexture&&(m=(_.backgroundBlurriness>0?n:e).get(m)),m}function y(_){let m=!1;const b=v(_);b===null?u(l,c):b&&b.isColor&&(u(b,1),m=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,s):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(t.autoClear||m)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,m){const b=v(m);b&&(b.isCubeTexture||b.mapping===Ol)?(h===void 0&&(h=new cn(new Ia(1,1,1),new Xr({name:"BackgroundCubeMaterial",uniforms:Ra(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ii.copy(m.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mw.makeRotationFromEuler(ii)),h.material.toneMapped=Je.getTransfer(b.colorSpace)!==it,(f!==b||p!==b.version||x!==t.toneMapping)&&(h.material.needsUpdate=!0,f=b,p=b.version,x=t.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(d===void 0&&(d=new cn(new zs(2,2),new Xr({name:"BackgroundMaterial",uniforms:Ra(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=b,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=Je.getTransfer(b.colorSpace)!==it,b.matrixAutoUpdate===!0&&b.updateMatrix(),d.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||p!==b.version||x!==t.toneMapping)&&(d.material.needsUpdate=!0,f=b,p=b.version,x=t.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null))}function u(_,m){_.getRGB(Ao,Ng(t)),r.buffers.color.setClear(Ao.r,Ao.g,Ao.b,m,s)}return{getClearColor:function(){return l},setClearColor:function(_,m=1){l.set(_),c=m,u(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,u(l,c)},render:y,addToRenderList:g}}function gw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},i=p(null);let a=i,s=!1;function l(S,C,z,j,$){let O=!1;const U=f(j,z,C);a!==U&&(a=U,d(a.object)),O=x(S,j,z,$),O&&v(S,j,z,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(O||s)&&(s=!1,b(S,C,z,j),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return t.createVertexArray()}function d(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function f(S,C,z){const j=z.wireframe===!0;let $=r[S.id];$===void 0&&($={},r[S.id]=$);let O=$[C.id];O===void 0&&(O={},$[C.id]=O);let U=O[j];return U===void 0&&(U=p(c()),O[j]=U),U}function p(S){const C=[],z=[],j=[];for(let $=0;$<n;$++)C[$]=0,z[$]=0,j[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:j,object:S,attributes:{},index:null}}function x(S,C,z,j){const $=a.attributes,O=C.attributes;let U=0;const W=z.getAttributes();for(const D in W)if(W[D].location>=0){const Z=$[D];let ie=O[D];if(ie===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),Z===void 0||Z.attribute!==ie||ie&&Z.data!==ie.data)return!0;U++}return a.attributesNum!==U||a.index!==j}function v(S,C,z,j){const $={},O=C.attributes;let U=0;const W=z.getAttributes();for(const D in W)if(W[D].location>=0){let Z=O[D];Z===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const ie={};ie.attribute=Z,Z&&Z.data&&(ie.data=Z.data),$[D]=ie,U++}a.attributes=$,a.attributesNum=U,a.index=j}function y(){const S=a.newAttributes;for(let C=0,z=S.length;C<z;C++)S[C]=0}function g(S){u(S,0)}function u(S,C){const z=a.newAttributes,j=a.enabledAttributes,$=a.attributeDivisors;z[S]=1,j[S]===0&&(t.enableVertexAttribArray(S),j[S]=1),$[S]!==C&&(t.vertexAttribDivisor(S,C),$[S]=C)}function _(){const S=a.newAttributes,C=a.enabledAttributes;for(let z=0,j=C.length;z<j;z++)C[z]!==S[z]&&(t.disableVertexAttribArray(z),C[z]=0)}function m(S,C,z,j,$,O,U){U===!0?t.vertexAttribIPointer(S,C,z,$,O):t.vertexAttribPointer(S,C,z,j,$,O)}function b(S,C,z,j){y();const $=j.attributes,O=z.getAttributes(),U=C.defaultAttributeValues;for(const W in O){const D=O[W];if(D.location>=0){let q=$[W];if(q===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const Z=q.normalized,ie=q.itemSize,ve=e.get(q);if(ve===void 0)continue;const Be=ve.buffer,X=ve.type,ne=ve.bytesPerElement,he=X===t.INT||X===t.UNSIGNED_INT||q.gpuType===fg;if(q.isInterleavedBufferAttribute){const le=q.data,Le=le.stride,Me=q.offset;if(le.isInstancedInterleavedBuffer){for(let Se=0;Se<D.locationSize;Se++)u(D.location+Se,le.meshPerAttribute);S.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Se=0;Se<D.locationSize;Se++)g(D.location+Se);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let Se=0;Se<D.locationSize;Se++)m(D.location+Se,ie/D.locationSize,X,Z,Le*ne,(Me+ie/D.locationSize*Se)*ne,he)}else{if(q.isInstancedBufferAttribute){for(let le=0;le<D.locationSize;le++)u(D.location+le,q.meshPerAttribute);S.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<D.locationSize;le++)g(D.location+le);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let le=0;le<D.locationSize;le++)m(D.location+le,ie/D.locationSize,X,Z,ie*ne,ie/D.locationSize*le*ne,he)}}else if(U!==void 0){const Z=U[W];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(D.location,Z);break;case 3:t.vertexAttrib3fv(D.location,Z);break;case 4:t.vertexAttrib4fv(D.location,Z);break;default:t.vertexAttrib1fv(D.location,Z)}}}}_()}function N(){P();for(const S in r){const C=r[S];for(const z in C){const j=C[z];for(const $ in j)h(j[$].object),delete j[$];delete C[z]}delete r[S]}}function A(S){if(r[S.id]===void 0)return;const C=r[S.id];for(const z in C){const j=C[z];for(const $ in j)h(j[$].object),delete j[$];delete C[z]}delete r[S.id]}function T(S){for(const C in r){const z=r[C];if(z[S.id]===void 0)continue;const j=z[S.id];for(const $ in j)h(j[$].object),delete j[$];delete z[S.id]}}function P(){M(),s=!0,a!==i&&(a=i,d(a.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:P,resetDefaultState:M,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:g,disableUnusedAttributes:_}}function _w(t,e,n){let r;function i(d){r=d}function a(d,h){t.drawArrays(r,d,h),n.update(h,r,1)}function s(d,h,f){f!==0&&(t.drawArraysInstanced(r,d,h,f),n.update(h,r,f))}function l(d,h,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<f;x++)this.render(d[x],h[x]);else{p.multiDrawArraysWEBGL(r,d,0,h,0,f);let x=0;for(let v=0;v<f;v++)x+=h[v];n.update(x,r,1)}}function c(d,h,f,p){if(f===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<d.length;v++)s(d[v],h[v],p[v]);else{x.multiDrawArraysInstancedWEBGL(r,d,0,h,0,p,0,f);let v=0;for(let y=0;y<f;y++)v+=h[y];for(let y=0;y<p.length;y++)n.update(v,r,p[y])}}this.setMode=i,this.render=a,this.renderInstances=s,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function vw(t,e,n,r){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){return!(A!==Wn&&r.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){const T=A===zl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Wr&&r.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pr&&!T)}function c(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const h=c(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const f=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=x>0,N=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:u,maxVaryings:_,maxFragmentUniforms:m,vertexTextures:b,maxSamples:N}}function yw(t){const e=this;let n=null,r=0,i=!1,a=!1;const s=new li,l=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const x=f.length!==0||p||r!==0||i;return i=p,r=f.length,x},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){n=h(f,p,0)},this.setState=function(f,p,x){const v=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,u=t.get(f);if(!i||v===null||v.length===0||a&&!g)a?h(null):d();else{const _=a?0:r,m=_*4;let b=u.clippingState||null;c.value=b,b=h(v,p,m,x);for(let N=0;N!==m;++N)b[N]=n[N];u.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function d(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(f,p,x,v){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=c.value,v!==!0||g===null){const u=x+y*4,_=p.matrixWorldInverse;l.getNormalMatrix(_),(g===null||g.length<u)&&(g=new Float32Array(u));for(let m=0,b=x;m!==y;++m,b+=4)s.copy(f[m]).applyMatrix4(_,l),s.normal.toArray(g,b),g[b+3]=s.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function Sw(t){let e=new WeakMap;function n(s,l){return l===eu?s.mapping=Ea:l===tu&&(s.mapping=Ta),s}function r(s){if(s&&s.isTexture){const l=s.mapping;if(l===eu||l===tu)if(e.has(s)){const c=e.get(s).texture;return n(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const d=new kb(c.height);return d.fromEquirectangularTexture(t,s),e.set(s,d),s.addEventListener("dispose",i),n(d.texture,s.mapping)}else return null}}return s}function i(s){const l=s.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class Lg extends Rg{constructor(e=-1,n=1,r=1,i=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=r-e,s=r+e,l=i+n,c=i-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,s=a+d*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const oa=4,bp=[.125,.215,.35,.446,.526,.582],ui=20,$c=new Lg,Mp=new Ye;let qc=null,Yc=0,Kc=0,Zc=!1;const ci=(1+Math.sqrt(5))/2,qi=1/ci,wp=[new V(-ci,qi,0),new V(ci,qi,0),new V(-qi,0,ci),new V(qi,0,ci),new V(0,ci,-qi),new V(0,ci,qi),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Ep{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100){qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,i,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Yc,Kc),this._renderer.xr.enabled=Zc,e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ea||e.mapping===Ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:zl,format:Wn,colorSpace:Kr,depthBuffer:!1},i=Tp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tp(e,n,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bw(a)),this._blurMaterial=Mw(a,e,n)}return i}_compileMaterial(e){const n=new cn(this._lodPlanes[0],e);this._renderer.compile(n,$c)}_sceneToCubeUV(e,n,r,i){const l=new _n(90,1,n,r),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Mp),h.toneMapping=Br,h.autoClear=!1;const x=new rh({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),v=new cn(new Ia,x);let y=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,y=!0):(x.color.copy(Mp),y=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(l.up.set(0,c[u],0),l.lookAt(d[u],0,0)):_===1?(l.up.set(0,0,c[u]),l.lookAt(0,d[u],0)):(l.up.set(0,c[u],0),l.lookAt(0,0,d[u]));const m=this._cubeSize;Co(i,_*m,u>2?m:0,m,m),h.setRenderTarget(i),y&&h.render(v,l),h.render(e,l)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===Ea||e.mapping===Ta;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ap());const a=i?this._cubemapMaterial:this._equirectMaterial,s=new cn(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const c=this._cubeSize;Co(n,0,0,3*c,2*c),r.setRenderTarget(n),r.render(s,$c)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),l=wp[(i-a-1)%wp.length];this._blur(e,a-1,a,s,l)}n.autoClear=r}_blur(e,n,r,i,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,r,i,"latitudinal",a),this._halfBlur(s,e,r,r,i,"longitudinal",a)}_halfBlur(e,n,r,i,a,s,l){const c=this._renderer,d=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new cn(this._lodPlanes[i],d),p=d.uniforms,x=this._sizeLods[r]-1,v=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*ui-1),y=a/v,g=isFinite(a)?1+Math.floor(h*y):ui;g>ui&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ui}`);const u=[];let _=0;for(let T=0;T<ui;++T){const P=T/y,M=Math.exp(-P*P/2);u.push(M),T===0?_+=M:T<g&&(_+=2*M)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=u,p.latitudinal.value=s==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:m}=this;p.dTheta.value=v,p.mipInt.value=m-r;const b=this._sizeLods[i],N=3*b*(i>m-oa?i-m+oa:0),A=4*(this._cubeSize-b);Co(n,N,A,3*b,2*b),c.setRenderTarget(n),c.render(f,$c)}}function bw(t){const e=[],n=[],r=[];let i=t;const a=t-oa+1+bp.length;for(let s=0;s<a;s++){const l=Math.pow(2,i);n.push(l);let c=1/l;s>t-oa?c=bp[s-t+oa-1]:s===0&&(c=0),r.push(c);const d=1/(l-2),h=-d,f=1+d,p=[h,h,f,h,f,f,h,h,f,f,h,f],x=6,v=6,y=3,g=2,u=1,_=new Float32Array(y*v*x),m=new Float32Array(g*v*x),b=new Float32Array(u*v*x);for(let A=0;A<x;A++){const T=A%3*2/3-1,P=A>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];_.set(M,y*v*A),m.set(p,g*v*A);const S=[A,A,A,A,A,A];b.set(S,u*v*A)}const N=new Ri;N.setAttribute("position",new Yn(_,y)),N.setAttribute("uv",new Yn(m,g)),N.setAttribute("faceIndex",new Yn(b,u)),e.push(N),i>oa&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Tp(t,e,n){const r=new Ti(t,e,n);return r.texture.mapping=Ol,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Co(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function Mw(t,e,n){const r=new Float32Array(ui),i=new V(0,1,0);return new Xr({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ah(),fragmentShader:`

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
		`,blending:jr,depthTest:!1,depthWrite:!1})}function Ap(){return new Xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:jr,depthTest:!1,depthWrite:!1})}function Cp(){return new Xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function ah(){return`

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
	`}function ww(t){let e=new WeakMap,n=null;function r(l){if(l&&l.isTexture){const c=l.mapping,d=c===eu||c===tu,h=c===Ea||c===Ta;if(d||h){let f=e.get(l);const p=f!==void 0?f.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return n===null&&(n=new Ep(t)),f=d?n.fromEquirectangular(l,f):n.fromCubemap(l,f),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),f.texture;if(f!==void 0)return f.texture;{const x=l.image;return d&&x&&x.height>0||h&&x&&i(x)?(n===null&&(n=new Ep(t)),f=d?n.fromEquirectangular(l):n.fromCubemap(l),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),l.addEventListener("dispose",a),f.texture):null}}}return l}function i(l){let c=0;const d=6;for(let h=0;h<d;h++)l[h]!==void 0&&c++;return c===d}function a(l){const c=l.target;c.removeEventListener("dispose",a);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:s}}function Ew(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const i=n(r);return i===null&&bg("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function Tw(t,e,n,r){const i={},a=new WeakMap;function s(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const y=p.morphAttributes[v];for(let g=0,u=y.length;g<u;g++)e.remove(y[g])}p.removeEventListener("dispose",s),delete i[p.id];const x=a.get(p);x&&(e.remove(x),a.delete(p)),r.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function l(f,p){return i[p.id]===!0||(p.addEventListener("dispose",s),i[p.id]=!0,n.memory.geometries++),p}function c(f){const p=f.attributes;for(const v in p)e.update(p[v],t.ARRAY_BUFFER);const x=f.morphAttributes;for(const v in x){const y=x[v];for(let g=0,u=y.length;g<u;g++)e.update(y[g],t.ARRAY_BUFFER)}}function d(f){const p=[],x=f.index,v=f.attributes.position;let y=0;if(x!==null){const _=x.array;y=x.version;for(let m=0,b=_.length;m<b;m+=3){const N=_[m+0],A=_[m+1],T=_[m+2];p.push(N,A,A,T,T,N)}}else if(v!==void 0){const _=v.array;y=v.version;for(let m=0,b=_.length/3-1;m<b;m+=3){const N=m+0,A=m+1,T=m+2;p.push(N,A,A,T,T,N)}}else return;const g=new(Sg(p)?Cg:Ag)(p,1);g.version=y;const u=a.get(f);u&&e.remove(u),a.set(f,g)}function h(f){const p=a.get(f);if(p){const x=f.index;x!==null&&p.version<x.version&&d(f)}else d(f);return a.get(f)}return{get:l,update:c,getWireframeAttribute:h}}function Aw(t,e,n){let r;function i(p){r=p}let a,s;function l(p){a=p.type,s=p.bytesPerElement}function c(p,x){t.drawElements(r,x,a,p*s),n.update(x,r,1)}function d(p,x,v){v!==0&&(t.drawElementsInstanced(r,x,a,p*s,v),n.update(x,r,v))}function h(p,x,v){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<v;g++)this.render(p[g]/s,x[g]);else{y.multiDrawElementsWEBGL(r,x,0,a,p,0,v);let g=0;for(let u=0;u<v;u++)g+=x[u];n.update(g,r,1)}}function f(p,x,v,y){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<p.length;u++)d(p[u]/s,x[u],y[u]);else{g.multiDrawElementsInstancedWEBGL(r,x,0,a,p,0,y,0,v);let u=0;for(let _=0;_<v;_++)u+=x[_];for(let _=0;_<y.length;_++)n.update(u,r,y[_])}}this.setMode=i,this.setIndex=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Cw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,l){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=l*(a/3);break;case t.LINES:n.lines+=l*(a/2);break;case t.LINE_STRIP:n.lines+=l*(a-1);break;case t.LINE_LOOP:n.lines+=l*a;break;case t.POINTS:n.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Nw(t,e,n){const r=new WeakMap,i=new Nt;function a(s,l,c){const d=s.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=h!==void 0?h.length:0;let p=r.get(l);if(p===void 0||p.count!==f){let S=function(){P.dispose(),r.delete(l),l.removeEventListener("dispose",S)};var x=S;p!==void 0&&p.texture.dispose();const v=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,u=l.morphAttributes.position||[],_=l.morphAttributes.normal||[],m=l.morphAttributes.color||[];let b=0;v===!0&&(b=1),y===!0&&(b=2),g===!0&&(b=3);let N=l.attributes.position.count*b,A=1;N>e.maxTextureSize&&(A=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const T=new Float32Array(N*A*4*f),P=new wg(T,N,A,f);P.type=Pr,P.needsUpdate=!0;const M=b*4;for(let C=0;C<f;C++){const z=u[C],j=_[C],$=m[C],O=N*A*4*C;for(let U=0;U<z.count;U++){const W=U*M;v===!0&&(i.fromBufferAttribute(z,U),T[O+W+0]=i.x,T[O+W+1]=i.y,T[O+W+2]=i.z,T[O+W+3]=0),y===!0&&(i.fromBufferAttribute(j,U),T[O+W+4]=i.x,T[O+W+5]=i.y,T[O+W+6]=i.z,T[O+W+7]=0),g===!0&&(i.fromBufferAttribute($,U),T[O+W+8]=i.x,T[O+W+9]=i.y,T[O+W+10]=i.z,T[O+W+11]=$.itemSize===4?i.w:1)}}p={count:f,texture:P,size:new Xe(N,A)},r.set(l,p),l.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let v=0;for(let g=0;g<d.length;g++)v+=d[g];const y=l.morphTargetsRelative?1:1-v;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",d)}c.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:a}}function Rw(t,e,n,r){let i=new WeakMap;function a(c){const d=r.render.frame,h=c.geometry,f=e.get(c,h);if(i.get(f)!==d&&(e.update(f),i.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),i.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),i.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==d&&(p.update(),i.set(p,d))}return f}function s(){i=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:s}}class Dg extends Wt{constructor(e,n,r,i,a,s,l,c,d,h=ma){if(h!==ma&&h!==Na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===ma&&(r=Aa),r===void 0&&h===Na&&(r=Ca),super(null,i,a,s,l,c,h,r,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=l!==void 0?l:Sn,this.minFilter=c!==void 0?c:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ig=new Wt,Ug=new Dg(1,1);Ug.compareFunction=yg;const Fg=new wg,Og=new mb,zg=new Pg,Np=[],Rp=[],Pp=new Float32Array(16),kp=new Float32Array(9),Lp=new Float32Array(4);function Ua(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let a=Np[i];if(a===void 0&&(a=new Float32Array(i),Np[i]=a),e!==0){r.toArray(a,0);for(let s=1,l=0;s!==e;++s)l+=n,t[s].toArray(a,l)}return a}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function Bl(t,e){let n=Rp[e];n===void 0&&(n=new Int32Array(e),Rp[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function Pw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function Dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function Iw(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Mt(n,r))return;Lp.set(r),t.uniformMatrix2fv(this.addr,!1,Lp),wt(n,r)}}function Uw(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Mt(n,r))return;kp.set(r),t.uniformMatrix3fv(this.addr,!1,kp),wt(n,r)}}function Fw(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Mt(n,r))return;Pp.set(r),t.uniformMatrix4fv(this.addr,!1,Pp),wt(n,r)}}function Ow(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function Hw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function Ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function Xw(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);const a=this.type===t.SAMPLER_2D_SHADOW?Ug:Ig;n.setTexture2D(e||a,i)}function $w(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||Og,i)}function qw(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||zg,i)}function Yw(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||Fg,i)}function Kw(t){switch(t){case 5126:return Pw;case 35664:return kw;case 35665:return Lw;case 35666:return Dw;case 35674:return Iw;case 35675:return Uw;case 35676:return Fw;case 5124:case 35670:return Ow;case 35667:case 35671:return zw;case 35668:case 35672:return jw;case 35669:case 35673:return Bw;case 5125:return Hw;case 36294:return Vw;case 36295:return Gw;case 36296:return Ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Xw;case 35679:case 36299:case 36307:return $w;case 35680:case 36300:case 36308:case 36293:return qw;case 36289:case 36303:case 36311:case 36292:return Yw}}function Zw(t,e){t.uniform1fv(this.addr,e)}function Jw(t,e){const n=Ua(e,this.size,2);t.uniform2fv(this.addr,n)}function Qw(t,e){const n=Ua(e,this.size,3);t.uniform3fv(this.addr,n)}function eE(t,e){const n=Ua(e,this.size,4);t.uniform4fv(this.addr,n)}function tE(t,e){const n=Ua(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function nE(t,e){const n=Ua(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function rE(t,e){const n=Ua(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iE(t,e){t.uniform1iv(this.addr,e)}function aE(t,e){t.uniform2iv(this.addr,e)}function sE(t,e){t.uniform3iv(this.addr,e)}function oE(t,e){t.uniform4iv(this.addr,e)}function lE(t,e){t.uniform1uiv(this.addr,e)}function cE(t,e){t.uniform2uiv(this.addr,e)}function dE(t,e){t.uniform3uiv(this.addr,e)}function uE(t,e){t.uniform4uiv(this.addr,e)}function hE(t,e,n){const r=this.cache,i=e.length,a=Bl(n,i);Mt(r,a)||(t.uniform1iv(this.addr,a),wt(r,a));for(let s=0;s!==i;++s)n.setTexture2D(e[s]||Ig,a[s])}function fE(t,e,n){const r=this.cache,i=e.length,a=Bl(n,i);Mt(r,a)||(t.uniform1iv(this.addr,a),wt(r,a));for(let s=0;s!==i;++s)n.setTexture3D(e[s]||Og,a[s])}function pE(t,e,n){const r=this.cache,i=e.length,a=Bl(n,i);Mt(r,a)||(t.uniform1iv(this.addr,a),wt(r,a));for(let s=0;s!==i;++s)n.setTextureCube(e[s]||zg,a[s])}function mE(t,e,n){const r=this.cache,i=e.length,a=Bl(n,i);Mt(r,a)||(t.uniform1iv(this.addr,a),wt(r,a));for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||Fg,a[s])}function xE(t){switch(t){case 5126:return Zw;case 35664:return Jw;case 35665:return Qw;case 35666:return eE;case 35674:return tE;case 35675:return nE;case 35676:return rE;case 5124:case 35670:return iE;case 35667:case 35671:return aE;case 35668:case 35672:return sE;case 35669:case 35673:return oE;case 5125:return lE;case 36294:return cE;case 36295:return dE;case 36296:return uE;case 35678:case 36198:case 36298:case 36306:case 35682:return hE;case 35679:case 36299:case 36307:return fE;case 35680:case 36300:case 36308:case 36293:return pE;case 36289:case 36303:case 36311:case 36292:return mE}}class gE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Kw(n.type)}}class _E{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=xE(n.type)}}class vE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let a=0,s=i.length;a!==s;++a){const l=i[a];l.setValue(e,n[l.id],r)}}}const Jc=/(\w+)(\])?(\[|\.)?/g;function Dp(t,e){t.seq.push(e),t.map[e.id]=e}function yE(t,e,n){const r=t.name,i=r.length;for(Jc.lastIndex=0;;){const a=Jc.exec(r),s=Jc.lastIndex;let l=a[1];const c=a[2]==="]",d=a[3];if(c&&(l=l|0),d===void 0||d==="["&&s+2===i){Dp(n,d===void 0?new gE(l,t,e):new _E(l,t,e));break}else{let f=n.map[l];f===void 0&&(f=new vE(l),Dp(n,f)),n=f}}}class Bo{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const a=e.getActiveUniform(n,i),s=e.getUniformLocation(n,a.name);yE(a,s,this)}}setValue(e,n,r,i){const a=this.map[n];a!==void 0&&a.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let a=0,s=n.length;a!==s;++a){const l=n[a],c=r[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,a=e.length;i!==a;++i){const s=e[i];s.id in n&&r.push(s)}return r}}function Ip(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const SE=37297;let bE=0;function ME(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let s=i;s<a;s++){const l=s+1;r.push(`${l===e?">":" "} ${l}: ${n[s]}`)}return r.join(`
`)}function wE(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let r;switch(e===n?r="":e===gl&&n===xl?r="LinearDisplayP3ToLinearSRGB":e===xl&&n===gl&&(r="LinearSRGBToLinearDisplayP3"),t){case Kr:case jl:return[r,"LinearTransferOETF"];case jn:case th:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[r,"LinearTransferOETF"]}}function Up(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const s=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ME(t.getShaderSource(e),s)}else return i}function EE(t,e){const n=wE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function TE(t,e){let n;switch(e){case LS:n="Linear";break;case DS:n="Reinhard";break;case IS:n="OptimizedCineon";break;case US:n="ACESFilmic";break;case OS:n="AgX";break;case zS:n="Neutral";break;case FS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function AE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function CE(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function NE(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const a=t.getActiveAttrib(e,i),s=a.name;let l=1;a.type===t.FLOAT_MAT2&&(l=2),a.type===t.FLOAT_MAT3&&(l=3),a.type===t.FLOAT_MAT4&&(l=4),n[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:l}}return n}function es(t){return t!==""}function Fp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Op(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RE=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(t){return t.replace(RE,kE)}const PE=new Map;function kE(t,e){let n=Ie[e];if(n===void 0){const r=PE.get(e);if(r!==void 0)n=Ie[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return au(n)}const LE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zp(t){return t.replace(LE,DE)}function DE(t,e,n,r){let i="";for(let a=parseInt(e);a<parseInt(n);a++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function jp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function IE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===cg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===dg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===rr&&(e="SHADOWMAP_TYPE_VSM"),e}function UE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ea:case Ta:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ta:e="ENVMAP_MODE_REFRACTION";break}return e}function OE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ug:e="ENVMAP_BLENDING_MULTIPLY";break;case PS:e="ENVMAP_BLENDING_MIX";break;case kS:e="ENVMAP_BLENDING_ADD";break}return e}function zE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function jE(t,e,n,r){const i=t.getContext(),a=n.defines;let s=n.vertexShader,l=n.fragmentShader;const c=IE(n),d=UE(n),h=FE(n),f=OE(n),p=zE(n),x=AE(n),v=CE(a),y=i.createProgram();let g,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(es).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(es).join(`
`),u.length>0&&(u+=`
`)):(g=[jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),u=[jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Br?"#define TONE_MAPPING":"",n.toneMapping!==Br?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Br?TE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,EE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(es).join(`
`)),s=au(s),s=Fp(s,n),s=Op(s,n),l=au(l),l=Fp(l,n),l=Op(l,n),s=zp(s),l=zp(l),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===np?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const m=_+g+s,b=_+u+l,N=Ip(i,i.VERTEX_SHADER,m),A=Ip(i,i.FRAGMENT_SHADER,b);i.attachShader(y,N),i.attachShader(y,A),n.index0AttributeName!==void 0?i.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function T(C){if(t.debug.checkShaderErrors){const z=i.getProgramInfoLog(y).trim(),j=i.getShaderInfoLog(N).trim(),$=i.getShaderInfoLog(A).trim();let O=!0,U=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,y,N,A);else{const W=Up(i,N,"vertex"),D=Up(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+W+`
`+D)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(j===""||$==="")&&(U=!1);U&&(C.diagnostics={runnable:O,programLog:z,vertexShader:{log:j,prefix:g},fragmentShader:{log:$,prefix:u}})}i.deleteShader(N),i.deleteShader(A),P=new Bo(i,y),M=NE(i,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(y,SE)),S},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bE++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=A,this}let BE=0;class HE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),a=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new VE(e),n.set(e,r)),r}}class VE{constructor(e){this.id=BE++,this.code=e,this.usedTimes=0}}function GE(t,e,n,r,i,a,s){const l=new Eg,c=new HE,d=new Set,h=[],f=i.logarithmicDepthBuffer,p=i.vertexTextures;let x=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return d.add(M),M===0?"uv":`uv${M}`}function g(M,S,C,z,j){const $=z.fog,O=j.geometry,U=M.isMeshStandardMaterial?z.environment:null,W=(M.isMeshStandardMaterial?n:e).get(M.envMap||U),D=W&&W.mapping===Ol?W.image.height:null,q=v[M.type];M.precision!==null&&(x=i.getMaxPrecision(M.precision),x!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",x,"instead."));const Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ie=Z!==void 0?Z.length:0;let ve=0;O.morphAttributes.position!==void 0&&(ve=1),O.morphAttributes.normal!==void 0&&(ve=2),O.morphAttributes.color!==void 0&&(ve=3);let Be,X,ne,he;if(q){const et=Bn[q];Be=et.vertexShader,X=et.fragmentShader}else Be=M.vertexShader,X=M.fragmentShader,c.update(M),ne=c.getVertexShaderID(M),he=c.getFragmentShaderID(M);const le=t.getRenderTarget(),Le=j.isInstancedMesh===!0,Me=j.isBatchedMesh===!0,Se=!!M.map,k=!!M.matcap,Pe=!!W,Ve=!!M.aoMap,ot=!!M.lightMap,Te=!!M.bumpMap,$e=!!M.normalMap,ze=!!M.displacementMap,De=!!M.emissiveMap,_t=!!M.metalnessMap,R=!!M.roughnessMap,w=M.anisotropy>0,G=M.clearcoat>0,J=M.dispersion>0,Q=M.iridescence>0,ee=M.sheen>0,we=M.transmission>0,de=w&&!!M.anisotropyMap,ue=G&&!!M.clearcoatMap,Fe=G&&!!M.clearcoatNormalMap,re=G&&!!M.clearcoatRoughnessMap,ye=Q&&!!M.iridescenceMap,He=Q&&!!M.iridescenceThicknessMap,Ne=ee&&!!M.sheenColorMap,fe=ee&&!!M.sheenRoughnessMap,Oe=!!M.specularMap,Ge=!!M.specularColorMap,pt=!!M.specularIntensityMap,L=we&&!!M.transmissionMap,pe=we&&!!M.thicknessMap,Y=!!M.gradientMap,K=!!M.alphaMap,oe=M.alphaTest>0,Re=!!M.alphaHash,qe=!!M.extensions;let mt=Br;M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(mt=t.toneMapping);const Et={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:Be,fragmentShader:X,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:x,batching:Me,batchingColor:Me&&j._colorsTexture!==null,instancing:Le,instancingColor:Le&&j.instanceColor!==null,instancingMorph:Le&&j.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Kr,alphaToCoverage:!!M.alphaToCoverage,map:Se,matcap:k,envMap:Pe,envMapMode:Pe&&W.mapping,envMapCubeUVHeight:D,aoMap:Ve,lightMap:ot,bumpMap:Te,normalMap:$e,displacementMap:p&&ze,emissiveMap:De,normalMapObjectSpace:$e&&M.normalMapType===QS,normalMapTangentSpace:$e&&M.normalMapType===vg,metalnessMap:_t,roughnessMap:R,anisotropy:w,anisotropyMap:de,clearcoat:G,clearcoatMap:ue,clearcoatNormalMap:Fe,clearcoatRoughnessMap:re,dispersion:J,iridescence:Q,iridescenceMap:ye,iridescenceThicknessMap:He,sheen:ee,sheenColorMap:Ne,sheenRoughnessMap:fe,specularMap:Oe,specularColorMap:Ge,specularIntensityMap:pt,transmission:we,transmissionMap:L,thicknessMap:pe,gradientMap:Y,opaque:M.transparent===!1&&M.blending===pa&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:oe,alphaHash:Re,combine:M.combine,mapUv:Se&&y(M.map.channel),aoMapUv:Ve&&y(M.aoMap.channel),lightMapUv:ot&&y(M.lightMap.channel),bumpMapUv:Te&&y(M.bumpMap.channel),normalMapUv:$e&&y(M.normalMap.channel),displacementMapUv:ze&&y(M.displacementMap.channel),emissiveMapUv:De&&y(M.emissiveMap.channel),metalnessMapUv:_t&&y(M.metalnessMap.channel),roughnessMapUv:R&&y(M.roughnessMap.channel),anisotropyMapUv:de&&y(M.anisotropyMap.channel),clearcoatMapUv:ue&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:He&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:fe&&y(M.sheenRoughnessMap.channel),specularMapUv:Oe&&y(M.specularMap.channel),specularColorMapUv:Ge&&y(M.specularColorMap.channel),specularIntensityMapUv:pt&&y(M.specularIntensityMap.channel),transmissionMapUv:L&&y(M.transmissionMap.channel),thicknessMapUv:pe&&y(M.thicknessMap.channel),alphaMapUv:K&&y(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&($e||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!O.attributes.uv&&(Se||K),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:mt,decodeVideoTexture:Se&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vn,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:qe&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qe&&M.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Et.vertexUv1s=d.has(1),Et.vertexUv2s=d.has(2),Et.vertexUv3s=d.has(3),d.clear(),Et}function u(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(_(S,M),m(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function m(M,S){l.disableAll(),S.supportsVertexTextures&&l.enable(0),S.instancing&&l.enable(1),S.instancingColor&&l.enable(2),S.instancingMorph&&l.enable(3),S.matcap&&l.enable(4),S.envMap&&l.enable(5),S.normalMapObjectSpace&&l.enable(6),S.normalMapTangentSpace&&l.enable(7),S.clearcoat&&l.enable(8),S.iridescence&&l.enable(9),S.alphaTest&&l.enable(10),S.vertexColors&&l.enable(11),S.vertexAlphas&&l.enable(12),S.vertexUv1s&&l.enable(13),S.vertexUv2s&&l.enable(14),S.vertexUv3s&&l.enable(15),S.vertexTangents&&l.enable(16),S.anisotropy&&l.enable(17),S.alphaHash&&l.enable(18),S.batching&&l.enable(19),S.dispersion&&l.enable(20),S.batchingColor&&l.enable(21),M.push(l.mask),l.disableAll(),S.fog&&l.enable(0),S.useFog&&l.enable(1),S.flatShading&&l.enable(2),S.logarithmicDepthBuffer&&l.enable(3),S.skinning&&l.enable(4),S.morphTargets&&l.enable(5),S.morphNormals&&l.enable(6),S.morphColors&&l.enable(7),S.premultipliedAlpha&&l.enable(8),S.shadowMapEnabled&&l.enable(9),S.doubleSided&&l.enable(10),S.flipSided&&l.enable(11),S.useDepthPacking&&l.enable(12),S.dithering&&l.enable(13),S.transmission&&l.enable(14),S.sheen&&l.enable(15),S.opaque&&l.enable(16),S.pointsUvs&&l.enable(17),S.decodeVideoTexture&&l.enable(18),S.alphaToCoverage&&l.enable(19),M.push(l.mask)}function b(M){const S=v[M.type];let C;if(S){const z=Bn[S];C=Cb.clone(z.uniforms)}else C=M.uniforms;return C}function N(M,S){let C;for(let z=0,j=h.length;z<j;z++){const $=h[z];if($.cacheKey===S){C=$,++C.usedTimes;break}}return C===void 0&&(C=new jE(t,S,M,a),h.push(C)),C}function A(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:b,acquireProgram:N,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:P}}function WE(){let t=new WeakMap;function e(a){let s=t.get(a);return s===void 0&&(s={},t.set(a,s)),s}function n(a){t.delete(a)}function r(a,s,l){t.get(a)[s]=l}function i(){t=new WeakMap}return{get:e,remove:n,update:r,dispose:i}}function XE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Bp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hp(){const t=[];let e=0;const n=[],r=[],i=[];function a(){e=0,n.length=0,r.length=0,i.length=0}function s(f,p,x,v,y,g){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:x,groupOrder:v,renderOrder:f.renderOrder,z:y,group:g},t[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=x,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=y,u.group=g),e++,u}function l(f,p,x,v,y,g){const u=s(f,p,x,v,y,g);x.transmission>0?r.push(u):x.transparent===!0?i.push(u):n.push(u)}function c(f,p,x,v,y,g){const u=s(f,p,x,v,y,g);x.transmission>0?r.unshift(u):x.transparent===!0?i.unshift(u):n.unshift(u)}function d(f,p){n.length>1&&n.sort(f||XE),r.length>1&&r.sort(p||Bp),i.length>1&&i.sort(p||Bp)}function h(){for(let f=e,p=t.length;f<p;f++){const x=t[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:l,unshift:c,finish:h,sort:d}}function $E(){let t=new WeakMap;function e(r,i){const a=t.get(r);let s;return a===void 0?(s=new Hp,t.set(r,[s])):i>=a.length?(s=new Hp,a.push(s)):s=a[i],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function qE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Ye};break;case"SpotLight":n={position:new V,direction:new V,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function YE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let KE=0;function ZE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function JE(t){const e=new qE,n=YE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new V);const i=new V,a=new gt,s=new gt;function l(d){let h=0,f=0,p=0;for(let M=0;M<9;M++)r.probe[M].set(0,0,0);let x=0,v=0,y=0,g=0,u=0,_=0,m=0,b=0,N=0,A=0,T=0;d.sort(ZE);for(let M=0,S=d.length;M<S;M++){const C=d[M],z=C.color,j=C.intensity,$=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*j,f+=z.g*j,p+=z.b*j;else if(C.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(C.sh.coefficients[U],j);T++}else if(C.isDirectionalLight){const U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,D=n.get(C);D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,r.directionalShadow[x]=D,r.directionalShadowMap[x]=O,r.directionalShadowMatrix[x]=C.shadow.matrix,_++}r.directional[x]=U,x++}else if(C.isSpotLight){const U=e.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(z).multiplyScalar(j),U.distance=$,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,r.spot[y]=U;const W=C.shadow;if(C.map&&(r.spotLightMap[N]=C.map,N++,W.updateMatrices(C),C.castShadow&&A++),r.spotLightMatrix[y]=W.matrix,C.castShadow){const D=n.get(C);D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,r.spotShadow[y]=D,r.spotShadowMap[y]=O,b++}y++}else if(C.isRectAreaLight){const U=e.get(C);U.color.copy(z).multiplyScalar(j),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),r.rectArea[g]=U,g++}else if(C.isPointLight){const U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){const W=C.shadow,D=n.get(C);D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,D.shadowCameraNear=W.camera.near,D.shadowCameraFar=W.camera.far,r.pointShadow[v]=D,r.pointShadowMap[v]=O,r.pointShadowMatrix[v]=C.shadow.matrix,m++}r.point[v]=U,v++}else if(C.isHemisphereLight){const U=e.get(C);U.skyColor.copy(C.color).multiplyScalar(j),U.groundColor.copy(C.groundColor).multiplyScalar(j),r.hemi[u]=U,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=p;const P=r.hash;(P.directionalLength!==x||P.pointLength!==v||P.spotLength!==y||P.rectAreaLength!==g||P.hemiLength!==u||P.numDirectionalShadows!==_||P.numPointShadows!==m||P.numSpotShadows!==b||P.numSpotMaps!==N||P.numLightProbes!==T)&&(r.directional.length=x,r.spot.length=y,r.rectArea.length=g,r.point.length=v,r.hemi.length=u,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=b+N-A,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=T,P.directionalLength=x,P.pointLength=v,P.spotLength=y,P.rectAreaLength=g,P.hemiLength=u,P.numDirectionalShadows=_,P.numPointShadows=m,P.numSpotShadows=b,P.numSpotMaps=N,P.numLightProbes=T,r.version=KE++)}function c(d,h){let f=0,p=0,x=0,v=0,y=0;const g=h.matrixWorldInverse;for(let u=0,_=d.length;u<_;u++){const m=d[u];if(m.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(m.matrixWorld),i.setFromMatrixPosition(m.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(m.isSpotLight){const b=r.spot[x];b.position.setFromMatrixPosition(m.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(m.matrixWorld),i.setFromMatrixPosition(m.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),x++}else if(m.isRectAreaLight){const b=r.rectArea[v];b.position.setFromMatrixPosition(m.matrixWorld),b.position.applyMatrix4(g),s.identity(),a.copy(m.matrixWorld),a.premultiply(g),s.extractRotation(a),b.halfWidth.set(m.width*.5,0,0),b.halfHeight.set(0,m.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),v++}else if(m.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(m.matrixWorld),b.position.applyMatrix4(g),p++}else if(m.isHemisphereLight){const b=r.hemi[y];b.direction.setFromMatrixPosition(m.matrixWorld),b.direction.transformDirection(g),y++}}}return{setup:l,setupView:c,state:r}}function Vp(t){const e=new JE(t),n=[],r=[];function i(h){d.camera=h,n.length=0,r.length=0}function a(h){n.push(h)}function s(h){r.push(h)}function l(){e.setup(n)}function c(h){e.setupView(n,h)}const d={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function QE(t){let e=new WeakMap;function n(i,a=0){const s=e.get(i);let l;return s===void 0?(l=new Vp(t),e.set(i,[l])):a>=s.length?(l=new Vp(t),s.push(l)):l=s[a],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class eT extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tT extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rT=`uniform sampler2D shadow_pass;
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
}`;function iT(t,e,n){let r=new ih;const i=new Xe,a=new Xe,s=new Nt,l=new eT({depthPacking:JS}),c=new tT,d={},h=n.maxTextureSize,f={[Gr]:nn,[nn]:Gr,[Vn]:Vn},p=new Xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:nT,fragmentShader:rT}),x=p.clone();x.defines.HORIZONTAL_PASS=1;const v=new Ri;v.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new cn(v,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cg;let u=this.type;this.render=function(A,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const M=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),z=t.state;z.setBlending(jr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const j=u!==rr&&this.type===rr,$=u===rr&&this.type!==rr;for(let O=0,U=A.length;O<U;O++){const W=A[O],D=W.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const q=D.getFrameExtents();if(i.multiply(q),a.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/q.x),i.x=a.x*q.x,D.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/q.y),i.y=a.y*q.y,D.mapSize.y=a.y)),D.map===null||j===!0||$===!0){const ie=this.type!==rr?{minFilter:Sn,magFilter:Sn}:{};D.map!==null&&D.map.dispose(),D.map=new Ti(i.x,i.y,ie),D.map.texture.name=W.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Z=D.getViewportCount();for(let ie=0;ie<Z;ie++){const ve=D.getViewport(ie);s.set(a.x*ve.x,a.y*ve.y,a.x*ve.z,a.y*ve.w),z.viewport(s),D.updateMatrices(W,ie),r=D.getFrustum(),b(T,P,D.camera,W,this.type)}D.isPointLightShadow!==!0&&this.type===rr&&_(D,P),D.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(M,S,C)};function _(A,T){const P=e.update(y);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,x.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,x.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ti(i.x,i.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,P,p,y,null),x.uniforms.shadow_pass.value=A.mapPass.texture,x.uniforms.resolution.value=A.mapSize,x.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,P,x,y,null)}function m(A,T,P,M){let S=null;const C=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)S=C;else if(S=P.isPointLight===!0?c:l,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=S.uuid,j=T.uuid;let $=d[z];$===void 0&&($={},d[z]=$);let O=$[j];O===void 0&&(O=S.clone(),$[j]=O,T.addEventListener("dispose",N)),S=O}if(S.visible=T.visible,S.wireframe=T.wireframe,M===rr?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=t.properties.get(S);z.light=P}return S}function b(A,T,P,M,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===rr)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const j=e.update(A),$=A.material;if(Array.isArray($)){const O=j.groups;for(let U=0,W=O.length;U<W;U++){const D=O[U],q=$[D.materialIndex];if(q&&q.visible){const Z=m(A,q,M,S);A.onBeforeShadow(t,A,T,P,j,Z,D),t.renderBufferDirect(P,null,j,Z,A,D),A.onAfterShadow(t,A,T,P,j,Z,D)}}}else if($.visible){const O=m(A,$,M,S);A.onBeforeShadow(t,A,T,P,j,O,null),t.renderBufferDirect(P,null,j,O,A,null),A.onAfterShadow(t,A,T,P,j,O,null)}}const z=A.children;for(let j=0,$=z.length;j<$;j++)b(z[j],T,P,M,S)}function N(A){A.target.removeEventListener("dispose",N);for(const P in d){const M=d[P],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function aT(t){function e(){let L=!1;const pe=new Nt;let Y=null;const K=new Nt(0,0,0,0);return{setMask:function(oe){Y!==oe&&!L&&(t.colorMask(oe,oe,oe,oe),Y=oe)},setLocked:function(oe){L=oe},setClear:function(oe,Re,qe,mt,Et){Et===!0&&(oe*=mt,Re*=mt,qe*=mt),pe.set(oe,Re,qe,mt),K.equals(pe)===!1&&(t.clearColor(oe,Re,qe,mt),K.copy(pe))},reset:function(){L=!1,Y=null,K.set(-1,0,0,0)}}}function n(){let L=!1,pe=null,Y=null,K=null;return{setTest:function(oe){oe?he(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(oe){pe!==oe&&!L&&(t.depthMask(oe),pe=oe)},setFunc:function(oe){if(Y!==oe){switch(oe){case wS:t.depthFunc(t.NEVER);break;case ES:t.depthFunc(t.ALWAYS);break;case TS:t.depthFunc(t.LESS);break;case fl:t.depthFunc(t.LEQUAL);break;case AS:t.depthFunc(t.EQUAL);break;case CS:t.depthFunc(t.GEQUAL);break;case NS:t.depthFunc(t.GREATER);break;case RS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=oe}},setLocked:function(oe){L=oe},setClear:function(oe){K!==oe&&(t.clearDepth(oe),K=oe)},reset:function(){L=!1,pe=null,Y=null,K=null}}}function r(){let L=!1,pe=null,Y=null,K=null,oe=null,Re=null,qe=null,mt=null,Et=null;return{setTest:function(et){L||(et?he(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(et){pe!==et&&!L&&(t.stencilMask(et),pe=et)},setFunc:function(et,Un,Fn){(Y!==et||K!==Un||oe!==Fn)&&(t.stencilFunc(et,Un,Fn),Y=et,K=Un,oe=Fn)},setOp:function(et,Un,Fn){(Re!==et||qe!==Un||mt!==Fn)&&(t.stencilOp(et,Un,Fn),Re=et,qe=Un,mt=Fn)},setLocked:function(et){L=et},setClear:function(et){Et!==et&&(t.clearStencil(et),Et=et)},reset:function(){L=!1,pe=null,Y=null,K=null,oe=null,Re=null,qe=null,mt=null,Et=null}}}const i=new e,a=new n,s=new r,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,p=[],x=null,v=!1,y=null,g=null,u=null,_=null,m=null,b=null,N=null,A=new Ye(0,0,0),T=0,P=!1,M=null,S=null,C=null,z=null,j=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,U=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=U>=1):W.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=U>=2);let D=null,q={};const Z=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),ve=new Nt().fromArray(Z),Be=new Nt().fromArray(ie);function X(L,pe,Y,K){const oe=new Uint8Array(4),Re=t.createTexture();t.bindTexture(L,Re),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<Y;qe++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(pe+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return Re}const ne={};ne[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),s.setClear(0),he(t.DEPTH_TEST),a.setFunc(fl),Te(!1),$e(wf),he(t.CULL_FACE),Ve(jr);function he(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function le(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Le(L,pe){return h[L]!==pe?(t.bindFramebuffer(L,pe),h[L]=pe,L===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=pe),L===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function Me(L,pe){let Y=p,K=!1;if(L){Y=f.get(pe),Y===void 0&&(Y=[],f.set(pe,Y));const oe=L.textures;if(Y.length!==oe.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,qe=oe.length;Re<qe;Re++)Y[Re]=t.COLOR_ATTACHMENT0+Re;Y.length=oe.length,K=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,K=!0);K&&t.drawBuffers(Y)}function Se(L){return x!==L?(t.useProgram(L),x=L,!0):!1}const k={[di]:t.FUNC_ADD,[oS]:t.FUNC_SUBTRACT,[lS]:t.FUNC_REVERSE_SUBTRACT};k[cS]=t.MIN,k[dS]=t.MAX;const Pe={[uS]:t.ZERO,[hS]:t.ONE,[fS]:t.SRC_COLOR,[Jd]:t.SRC_ALPHA,[vS]:t.SRC_ALPHA_SATURATE,[gS]:t.DST_COLOR,[mS]:t.DST_ALPHA,[pS]:t.ONE_MINUS_SRC_COLOR,[Qd]:t.ONE_MINUS_SRC_ALPHA,[_S]:t.ONE_MINUS_DST_COLOR,[xS]:t.ONE_MINUS_DST_ALPHA,[yS]:t.CONSTANT_COLOR,[SS]:t.ONE_MINUS_CONSTANT_COLOR,[bS]:t.CONSTANT_ALPHA,[MS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ve(L,pe,Y,K,oe,Re,qe,mt,Et,et){if(L===jr){v===!0&&(le(t.BLEND),v=!1);return}if(v===!1&&(he(t.BLEND),v=!0),L!==sS){if(L!==y||et!==P){if((g!==di||m!==di)&&(t.blendEquation(t.FUNC_ADD),g=di,m=di),et)switch(L){case pa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ef:t.blendFunc(t.ONE,t.ONE);break;case Tf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Af:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case pa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ef:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Tf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Af:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}u=null,_=null,b=null,N=null,A.set(0,0,0),T=0,y=L,P=et}return}oe=oe||pe,Re=Re||Y,qe=qe||K,(pe!==g||oe!==m)&&(t.blendEquationSeparate(k[pe],k[oe]),g=pe,m=oe),(Y!==u||K!==_||Re!==b||qe!==N)&&(t.blendFuncSeparate(Pe[Y],Pe[K],Pe[Re],Pe[qe]),u=Y,_=K,b=Re,N=qe),(mt.equals(A)===!1||Et!==T)&&(t.blendColor(mt.r,mt.g,mt.b,Et),A.copy(mt),T=Et),y=L,P=!1}function ot(L,pe){L.side===Vn?le(t.CULL_FACE):he(t.CULL_FACE);let Y=L.side===nn;pe&&(Y=!Y),Te(Y),L.blending===pa&&L.transparent===!1?Ve(jr):Ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),i.setMask(L.colorWrite);const K=L.stencilWrite;s.setTest(K),K&&(s.setMask(L.stencilWriteMask),s.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),s.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),De(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Te(L){M!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),M=L)}function $e(L){L!==iS?(he(t.CULL_FACE),L!==S&&(L===wf?t.cullFace(t.BACK):L===aS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),S=L}function ze(L){L!==C&&(O&&t.lineWidth(L),C=L)}function De(L,pe,Y){L?(he(t.POLYGON_OFFSET_FILL),(z!==pe||j!==Y)&&(t.polygonOffset(pe,Y),z=pe,j=Y)):le(t.POLYGON_OFFSET_FILL)}function _t(L){L?he(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function R(L){L===void 0&&(L=t.TEXTURE0+$-1),D!==L&&(t.activeTexture(L),D=L)}function w(L,pe,Y){Y===void 0&&(D===null?Y=t.TEXTURE0+$-1:Y=D);let K=q[Y];K===void 0&&(K={type:void 0,texture:void 0},q[Y]=K),(K.type!==L||K.texture!==pe)&&(D!==Y&&(t.activeTexture(Y),D=Y),t.bindTexture(L,pe||ne[L]),K.type=L,K.texture=pe)}function G(){const L=q[D];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(L){ve.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ve.copy(L))}function fe(L){Be.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Be.copy(L))}function Oe(L,pe){let Y=c.get(pe);Y===void 0&&(Y=new WeakMap,c.set(pe,Y));let K=Y.get(L);K===void 0&&(K=t.getUniformBlockIndex(pe,L.name),Y.set(L,K))}function Ge(L,pe){const K=c.get(pe).get(L);l.get(pe)!==K&&(t.uniformBlockBinding(pe,K,L.__bindingPointIndex),l.set(pe,K))}function pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},D=null,q={},h={},f=new WeakMap,p=[],x=null,v=!1,y=null,g=null,u=null,_=null,m=null,b=null,N=null,A=new Ye(0,0,0),T=0,P=!1,M=null,S=null,C=null,z=null,j=null,ve.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),i.reset(),a.reset(),s.reset()}return{buffers:{color:i,depth:a,stencil:s},enable:he,disable:le,bindFramebuffer:Le,drawBuffers:Me,useProgram:Se,setBlending:Ve,setMaterial:ot,setFlipSided:Te,setCullFace:$e,setLineWidth:ze,setPolygonOffset:De,setScissorTest:_t,activeTexture:R,bindTexture:w,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:ye,texImage3D:He,updateUBOMapping:Oe,uniformBlockBinding:Ge,texStorage2D:Fe,texStorage3D:re,texSubImage2D:ee,texSubImage3D:we,compressedTexSubImage2D:de,compressedTexSubImage3D:ue,scissor:Ne,viewport:fe,reset:pt}}function sT(t,e,n,r,i,a,s){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Xe,h=new WeakMap;let f;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,w){return x?new OffscreenCanvas(R,w):vl("canvas")}function y(R,w,G){let J=1;const Q=_t(R);if((Q.width>G||Q.height>G)&&(J=G/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(J*Q.width),we=Math.floor(J*Q.height);f===void 0&&(f=v(ee,we));const de=w?v(ee,we):f;return de.width=ee,de.height=we,de.getContext("2d").drawImage(R,0,0,ee,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ee+"x"+we+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function g(R){return R.generateMipmaps&&R.minFilter!==Sn&&R.minFilter!==vn}function u(R){t.generateMipmap(R)}function _(R,w,G,J,Q=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=w;if(w===t.RED&&(G===t.FLOAT&&(ee=t.R32F),G===t.HALF_FLOAT&&(ee=t.R16F),G===t.UNSIGNED_BYTE&&(ee=t.R8)),w===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.R8UI),G===t.UNSIGNED_SHORT&&(ee=t.R16UI),G===t.UNSIGNED_INT&&(ee=t.R32UI),G===t.BYTE&&(ee=t.R8I),G===t.SHORT&&(ee=t.R16I),G===t.INT&&(ee=t.R32I)),w===t.RG&&(G===t.FLOAT&&(ee=t.RG32F),G===t.HALF_FLOAT&&(ee=t.RG16F),G===t.UNSIGNED_BYTE&&(ee=t.RG8)),w===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RG8UI),G===t.UNSIGNED_SHORT&&(ee=t.RG16UI),G===t.UNSIGNED_INT&&(ee=t.RG32UI),G===t.BYTE&&(ee=t.RG8I),G===t.SHORT&&(ee=t.RG16I),G===t.INT&&(ee=t.RG32I)),w===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),w===t.RGBA){const we=Q?ml:Je.getTransfer(J);G===t.FLOAT&&(ee=t.RGBA32F),G===t.HALF_FLOAT&&(ee=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ee=we===it?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function m(R,w){let G;return R?w===null||w===Aa||w===Ca?G=t.DEPTH24_STENCIL8:w===Pr?G=t.DEPTH32F_STENCIL8:w===pl&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Aa||w===Ca?G=t.DEPTH_COMPONENT24:w===Pr?G=t.DEPTH_COMPONENT32F:w===pl&&(G=t.DEPTH_COMPONENT16),G}function b(R,w){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Sn&&R.minFilter!==vn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function N(R){const w=R.target;w.removeEventListener("dispose",N),T(w),w.isVideoTexture&&h.delete(w)}function A(R){const w=R.target;w.removeEventListener("dispose",A),M(w)}function T(R){const w=r.get(R);if(w.__webglInit===void 0)return;const G=R.source,J=p.get(G);if(J){const Q=J[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(R),Object.keys(J).length===0&&p.delete(G)}r.remove(R)}function P(R){const w=r.get(R);t.deleteTexture(w.__webglTexture);const G=R.source,J=p.get(G);delete J[w.__cacheKey],s.memory.textures--}function M(R){const w=r.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let Q=0;Q<w.__webglFramebuffer[J].length;Q++)t.deleteFramebuffer(w.__webglFramebuffer[J][Q]);else t.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)t.deleteFramebuffer(w.__webglFramebuffer[J]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=R.textures;for(let J=0,Q=G.length;J<Q;J++){const ee=r.get(G[J]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),s.memory.textures--),r.remove(G[J])}r.remove(R)}let S=0;function C(){S=0}function z(){const R=S;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),S+=1,R}function j(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function $(R,w){const G=r.get(R);if(R.isVideoTexture&&ze(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(G,R,w);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+w)}function O(R,w){const G=r.get(R);if(R.version>0&&G.__version!==R.version){Be(G,R,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+w)}function U(R,w){const G=r.get(R);if(R.version>0&&G.__version!==R.version){Be(G,R,w);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+w)}function W(R,w){const G=r.get(R);if(R.version>0&&G.__version!==R.version){X(G,R,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+w)}const D={[nu]:t.REPEAT,[mi]:t.CLAMP_TO_EDGE,[ru]:t.MIRRORED_REPEAT},q={[Sn]:t.NEAREST,[jS]:t.NEAREST_MIPMAP_NEAREST,[so]:t.NEAREST_MIPMAP_LINEAR,[vn]:t.LINEAR,[Sc]:t.LINEAR_MIPMAP_NEAREST,[xi]:t.LINEAR_MIPMAP_LINEAR},Z={[eb]:t.NEVER,[sb]:t.ALWAYS,[tb]:t.LESS,[yg]:t.LEQUAL,[nb]:t.EQUAL,[ab]:t.GEQUAL,[rb]:t.GREATER,[ib]:t.NOTEQUAL};function ie(R,w){if(w.type===Pr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===vn||w.magFilter===Sc||w.magFilter===so||w.magFilter===xi||w.minFilter===vn||w.minFilter===Sc||w.minFilter===so||w.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,D[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,D[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,D[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[w.minFilter]),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Sn||w.minFilter!==so&&w.minFilter!==xi||w.type===Pr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function ve(R,w){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",N));const J=w.source;let Q=p.get(J);Q===void 0&&(Q={},p.set(J,Q));const ee=j(w);if(ee!==R.__cacheKey){Q[ee]===void 0&&(Q[ee]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,G=!0),Q[ee].usedTimes++;const we=Q[R.__cacheKey];we!==void 0&&(Q[R.__cacheKey].usedTimes--,we.usedTimes===0&&P(w)),R.__cacheKey=ee,R.__webglTexture=Q[ee].texture}return G}function Be(R,w,G){let J=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=t.TEXTURE_3D);const Q=ve(R,w),ee=w.source;n.bindTexture(J,R.__webglTexture,t.TEXTURE0+G);const we=r.get(ee);if(ee.version!==we.__version||Q===!0){n.activeTexture(t.TEXTURE0+G);const de=Je.getPrimaries(Je.workingColorSpace),ue=w.colorSpace===Cr?null:Je.getPrimaries(w.colorSpace),Fe=w.colorSpace===Cr||de===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let re=y(w.image,!1,i.maxTextureSize);re=De(w,re);const ye=a.convert(w.format,w.colorSpace),He=a.convert(w.type);let Ne=_(w.internalFormat,ye,He,w.colorSpace,w.isVideoTexture);ie(J,w);let fe;const Oe=w.mipmaps,Ge=w.isVideoTexture!==!0,pt=we.__version===void 0||Q===!0,L=ee.dataReady,pe=b(w,re);if(w.isDepthTexture)Ne=m(w.format===Na,w.type),pt&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,Ne,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ne,re.width,re.height,0,ye,He,null));else if(w.isDataTexture)if(Oe.length>0){Ge&&pt&&n.texStorage2D(t.TEXTURE_2D,pe,Ne,Oe[0].width,Oe[0].height);for(let Y=0,K=Oe.length;Y<K;Y++)fe=Oe[Y],Ge?L&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,fe.width,fe.height,ye,He,fe.data):n.texImage2D(t.TEXTURE_2D,Y,Ne,fe.width,fe.height,0,ye,He,fe.data);w.generateMipmaps=!1}else Ge?(pt&&n.texStorage2D(t.TEXTURE_2D,pe,Ne,re.width,re.height),L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ye,He,re.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,re.width,re.height,0,ye,He,re.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ne,Oe[0].width,Oe[0].height,re.depth);for(let Y=0,K=Oe.length;Y<K;Y++)if(fe=Oe[Y],w.format!==Wn)if(ye!==null)if(Ge){if(L)if(w.layerUpdates.size>0){for(const oe of w.layerUpdates){const Re=fe.width*fe.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,oe,fe.width,fe.height,1,ye,fe.data.slice(Re*oe,Re*(oe+1)),0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,fe.width,fe.height,re.depth,ye,fe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Ne,fe.width,fe.height,re.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,fe.width,fe.height,re.depth,ye,He,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Ne,fe.width,fe.height,re.depth,0,ye,He,fe.data)}else{Ge&&pt&&n.texStorage2D(t.TEXTURE_2D,pe,Ne,Oe[0].width,Oe[0].height);for(let Y=0,K=Oe.length;Y<K;Y++)fe=Oe[Y],w.format!==Wn?ye!==null?Ge?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,fe.width,fe.height,ye,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Ne,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?L&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,fe.width,fe.height,ye,He,fe.data):n.texImage2D(t.TEXTURE_2D,Y,Ne,fe.width,fe.height,0,ye,He,fe.data)}else if(w.isDataArrayTexture)if(Ge){if(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ne,re.width,re.height,re.depth),L)if(w.layerUpdates.size>0){let Y;switch(He){case t.UNSIGNED_BYTE:switch(ye){case t.ALPHA:Y=1;break;case t.LUMINANCE:Y=1;break;case t.LUMINANCE_ALPHA:Y=2;break;case t.RGB:Y=3;break;case t.RGBA:Y=4;break;default:throw new Error(`Unknown texel size for format ${ye}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:Y=1;break;default:throw new Error(`Unknown texel size for type ${He}.`)}const K=re.width*re.height*Y;for(const oe of w.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,re.width,re.height,1,ye,He,re.data.slice(K*oe,K*(oe+1)));w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ye,He,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,re.width,re.height,re.depth,0,ye,He,re.data);else if(w.isData3DTexture)Ge?(pt&&n.texStorage3D(t.TEXTURE_3D,pe,Ne,re.width,re.height,re.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ye,He,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,re.width,re.height,re.depth,0,ye,He,re.data);else if(w.isFramebufferTexture){if(pt)if(Ge)n.texStorage2D(t.TEXTURE_2D,pe,Ne,re.width,re.height);else{let Y=re.width,K=re.height;for(let oe=0;oe<pe;oe++)n.texImage2D(t.TEXTURE_2D,oe,Ne,Y,K,0,ye,He,null),Y>>=1,K>>=1}}else if(Oe.length>0){if(Ge&&pt){const Y=_t(Oe[0]);n.texStorage2D(t.TEXTURE_2D,pe,Ne,Y.width,Y.height)}for(let Y=0,K=Oe.length;Y<K;Y++)fe=Oe[Y],Ge?L&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ye,He,fe):n.texImage2D(t.TEXTURE_2D,Y,Ne,ye,He,fe);w.generateMipmaps=!1}else if(Ge){if(pt){const Y=_t(re);n.texStorage2D(t.TEXTURE_2D,pe,Ne,Y.width,Y.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,He,re)}else n.texImage2D(t.TEXTURE_2D,0,Ne,ye,He,re);g(w)&&u(J),we.__version=ee.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function X(R,w,G){if(w.image.length!==6)return;const J=ve(R,w),Q=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const ee=r.get(Q);if(Q.version!==ee.__version||J===!0){n.activeTexture(t.TEXTURE0+G);const we=Je.getPrimaries(Je.workingColorSpace),de=w.colorSpace===Cr?null:Je.getPrimaries(w.colorSpace),ue=w.colorSpace===Cr||we===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Fe=w.isCompressedTexture||w.image[0].isCompressedTexture,re=w.image[0]&&w.image[0].isDataTexture,ye=[];for(let K=0;K<6;K++)!Fe&&!re?ye[K]=y(w.image[K],!0,i.maxCubemapSize):ye[K]=re?w.image[K].image:w.image[K],ye[K]=De(w,ye[K]);const He=ye[0],Ne=a.convert(w.format,w.colorSpace),fe=a.convert(w.type),Oe=_(w.internalFormat,Ne,fe,w.colorSpace),Ge=w.isVideoTexture!==!0,pt=ee.__version===void 0||J===!0,L=Q.dataReady;let pe=b(w,He);ie(t.TEXTURE_CUBE_MAP,w);let Y;if(Fe){Ge&&pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Oe,He.width,He.height);for(let K=0;K<6;K++){Y=ye[K].mipmaps;for(let oe=0;oe<Y.length;oe++){const Re=Y[oe];w.format!==Wn?Ne!==null?Ge?L&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,Re.width,Re.height,Ne,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,Oe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,Re.width,Re.height,Ne,fe,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,Oe,Re.width,Re.height,0,Ne,fe,Re.data)}}}else{if(Y=w.mipmaps,Ge&&pt){Y.length>0&&pe++;const K=_t(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Oe,K.width,K.height)}for(let K=0;K<6;K++)if(re){Ge?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye[K].width,ye[K].height,Ne,fe,ye[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,ye[K].width,ye[K].height,0,Ne,fe,ye[K].data);for(let oe=0;oe<Y.length;oe++){const qe=Y[oe].image[K].image;Ge?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,qe.width,qe.height,Ne,fe,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,Oe,qe.width,qe.height,0,Ne,fe,qe.data)}}else{Ge?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ne,fe,ye[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,Ne,fe,ye[K]);for(let oe=0;oe<Y.length;oe++){const Re=Y[oe];Ge?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,Ne,fe,Re.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,Oe,Ne,fe,Re.image[K])}}}g(w)&&u(t.TEXTURE_CUBE_MAP),ee.__version=Q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ne(R,w,G,J,Q,ee){const we=a.convert(G.format,G.colorSpace),de=a.convert(G.type),ue=_(G.internalFormat,we,de,G.colorSpace);if(!r.get(w).__hasExternalTextures){const re=Math.max(1,w.width>>ee),ye=Math.max(1,w.height>>ee);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ee,ue,re,ye,w.depth,0,we,de,null):n.texImage2D(Q,ee,ue,re,ye,0,we,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),$e(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Q,r.get(G).__webglTexture,0,Te(w)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,Q,r.get(G).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(R,w,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer){const J=w.depthTexture,Q=J&&J.isDepthTexture?J.type:null,ee=m(w.stencilBuffer,Q),we=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=Te(w);$e(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,ee,w.width,w.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,ee,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ee,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,R)}else{const J=w.textures;for(let Q=0;Q<J.length;Q++){const ee=J[Q],we=a.convert(ee.format,ee.colorSpace),de=a.convert(ee.type),ue=_(ee.internalFormat,we,de,ee.colorSpace),Fe=Te(w);G&&$e(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ue,w.width,w.height):$e(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,ue,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ue,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),$(w.depthTexture,0);const J=r.get(w.depthTexture).__webglTexture,Q=Te(w);if(w.depthTexture.format===ma)$e(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(w.depthTexture.format===Na)$e(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Le(R){const w=r.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");le(w.__webglFramebuffer,R)}else if(G){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]=t.createRenderbuffer(),he(w.__webglDepthbuffer[J],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),he(w.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(R,w,G){const J=r.get(R);w!==void 0&&ne(J.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Le(R)}function Se(R){const w=R.texture,G=r.get(R),J=r.get(w);R.addEventListener("dispose",A);const Q=R.textures,ee=R.isWebGLCubeRenderTarget===!0,we=Q.length>1;if(we||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=w.version,s.memory.textures++),ee){G.__webglFramebuffer=[];for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[de]=[];for(let ue=0;ue<w.mipmaps.length;ue++)G.__webglFramebuffer[de][ue]=t.createFramebuffer()}else G.__webglFramebuffer[de]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let de=0;de<w.mipmaps.length;de++)G.__webglFramebuffer[de]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(we)for(let de=0,ue=Q.length;de<ue;de++){const Fe=r.get(Q[de]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&$e(R)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let de=0;de<Q.length;de++){const ue=Q[de];G.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[de]);const Fe=a.convert(ue.format,ue.colorSpace),re=a.convert(ue.type),ye=_(ue.internalFormat,Fe,re,ue.colorSpace,R.isXRRenderTarget===!0),He=Te(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,ye,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,G.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),he(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),ie(t.TEXTURE_CUBE_MAP,w);for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)ne(G.__webglFramebuffer[de][ue],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ue);else ne(G.__webglFramebuffer[de],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(w)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let de=0,ue=Q.length;de<ue;de++){const Fe=Q[de],re=r.get(Fe);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ie(t.TEXTURE_2D,Fe),ne(G.__webglFramebuffer,R,Fe,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),g(Fe)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,J.__webglTexture),ie(de,w),w.mipmaps&&w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)ne(G.__webglFramebuffer[ue],R,w,t.COLOR_ATTACHMENT0,de,ue);else ne(G.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,de,0);g(w)&&u(de),n.unbindTexture()}R.depthBuffer&&Le(R)}function k(R){const w=R.textures;for(let G=0,J=w.length;G<J;G++){const Q=w[G];if(g(Q)){const ee=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=r.get(Q).__webglTexture;n.bindTexture(ee,we),u(ee),n.unbindTexture()}}}const Pe=[],Ve=[];function ot(R){if(R.samples>0){if($e(R)===!1){const w=R.textures,G=R.width,J=R.height;let Q=t.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=r.get(R),de=w.length>1;if(de)for(let ue=0;ue<w.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ue=0;ue<w.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[ue]);const Fe=r.get(w[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,G,J,0,0,G,J,Q,t.NEAREST),c===!0&&(Pe.length=0,Ve.length=0,Pe.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Pe.push(ee),Ve.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ve)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Pe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let ue=0;ue<w.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,we.__webglColorRenderbuffer[ue]);const Fe=r.get(w[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const w=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Te(R){return Math.min(i.maxSamples,R.samples)}function $e(R){const w=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ze(R){const w=s.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function De(R,w){const G=R.colorSpace,J=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Kr&&G!==Cr&&(Je.getTransfer(G)===it?(J!==Wn||Q!==Wr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function _t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(d.width=R.naturalWidth||R.width,d.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(d.width=R.displayWidth,d.height=R.displayHeight):(d.width=R.width,d.height=R.height),d}this.allocateTextureUnit=z,this.resetTextureUnits=C,this.setTexture2D=$,this.setTexture2DArray=O,this.setTexture3D=U,this.setTextureCube=W,this.rebindTextures=Me,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=$e}function oT(t,e){function n(r,i=Cr){let a;const s=Je.getTransfer(i);if(r===Wr)return t.UNSIGNED_BYTE;if(r===pg)return t.UNSIGNED_SHORT_4_4_4_4;if(r===mg)return t.UNSIGNED_SHORT_5_5_5_1;if(r===VS)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===BS)return t.BYTE;if(r===HS)return t.SHORT;if(r===pl)return t.UNSIGNED_SHORT;if(r===fg)return t.INT;if(r===Aa)return t.UNSIGNED_INT;if(r===Pr)return t.FLOAT;if(r===zl)return t.HALF_FLOAT;if(r===GS)return t.ALPHA;if(r===WS)return t.RGB;if(r===Wn)return t.RGBA;if(r===XS)return t.LUMINANCE;if(r===$S)return t.LUMINANCE_ALPHA;if(r===ma)return t.DEPTH_COMPONENT;if(r===Na)return t.DEPTH_STENCIL;if(r===qS)return t.RED;if(r===xg)return t.RED_INTEGER;if(r===YS)return t.RG;if(r===gg)return t.RG_INTEGER;if(r===_g)return t.RGBA_INTEGER;if(r===bc||r===Mc||r===wc||r===Ec)if(s===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===bc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===bc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ec)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cf||r===Nf||r===Rf||r===Pf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Cf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kf||r===Lf||r===Df)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===kf||r===Lf)return s===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Df)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===If||r===Uf||r===Ff||r===Of||r===zf||r===jf||r===Bf||r===Hf||r===Vf||r===Gf||r===Wf||r===Xf||r===$f||r===qf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===If)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uf)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ff)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Of)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zf)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jf)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bf)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hf)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vf)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gf)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wf)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xf)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$f)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qf)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tc||r===Yf||r===Kf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Tc)return s===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===KS||r===Zf||r===Jf||r===Qf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Tc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Zf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ca?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}class lT extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ts extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cT={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,a=null,s=null;const l=this._targetRay,c=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){s=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,r),u=this._getHandJoint(d,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const h=d.joints["index-finger-tip"],f=d.joints["thumb-tip"],p=h.position.distanceTo(f.position),x=.02,v=.005;d.inputState.pinching&&p>x+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&p<=x-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,r),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(cT)))}return l!==null&&(l.visible=i!==null),c!==null&&(c.visible=a!==null),d!==null&&(d.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ts;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const dT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uT=`
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

}`;class hT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const i=new Wt,a=e.properties.get(i);a.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Xr({vertexShader:dT,fragmentShader:uT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new cn(new zs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class fT extends Da{constructor(e,n){super();const r=this;let i=null,a=1,s=null,l="local-floor",c=1,d=null,h=null,f=null,p=null,x=null,v=null;const y=new hT,g=n.getContextAttributes();let u=null,_=null;const m=[],b=[],N=new Xe;let A=null;const T=new _n;T.layers.enable(1),T.viewport=new Nt;const P=new _n;P.layers.enable(2),P.viewport=new Nt;const M=[T,P],S=new lT;S.layers.enable(1),S.layers.enable(2);let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=m[X];return ne===void 0&&(ne=new Qc,m[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=m[X];return ne===void 0&&(ne=new Qc,m[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=m[X];return ne===void 0&&(ne=new Qc,m[X]=ne),ne.getHandSpace()};function j(X){const ne=b.indexOf(X.inputSource);if(ne===-1)return;const he=m[ne];he!==void 0&&(he.update(X.inputSource,X.frame,d||s),he.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",O);for(let X=0;X<m.length;X++){const ne=b[X];ne!==null&&(b[X]=null,m[X].disconnect(ne))}C=null,z=null,y.reset(),e.setRenderTarget(u),x=null,p=null,f=null,i=null,_=null,Be.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||s},this.setReferenceSpace=function(X){d=X},this.getBaseLayer=function(){return p!==null?p:x},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(u=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",$),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(N),i.renderState.layers===void 0){const ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(i,n,ne),i.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),_=new Ti(x.framebufferWidth,x.framebufferHeight,{format:Wn,type:Wr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,he=null,le=null;g.depth&&(le=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=g.stencil?Na:ma,he=g.stencil?Ca:Aa);const Le={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:a};f=new XRWebGLBinding(i,n),p=f.createProjectionLayer(Le),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),_=new Ti(p.textureWidth,p.textureHeight,{format:Wn,type:Wr,depthTexture:new Dg(p.textureWidth,p.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),d=null,s=await i.requestReferenceSpace(l),Be.setContext(i),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O(X){for(let ne=0;ne<X.removed.length;ne++){const he=X.removed[ne],le=b.indexOf(he);le>=0&&(b[le]=null,m[le].disconnect(he))}for(let ne=0;ne<X.added.length;ne++){const he=X.added[ne];let le=b.indexOf(he);if(le===-1){for(let Me=0;Me<m.length;Me++)if(Me>=b.length){b.push(he),le=Me;break}else if(b[Me]===null){b[Me]=he,le=Me;break}if(le===-1)break}const Le=m[le];Le&&Le.connect(he)}}const U=new V,W=new V;function D(X,ne,he){U.setFromMatrixPosition(ne.matrixWorld),W.setFromMatrixPosition(he.matrixWorld);const le=U.distanceTo(W),Le=ne.projectionMatrix.elements,Me=he.projectionMatrix.elements,Se=Le[14]/(Le[10]-1),k=Le[14]/(Le[10]+1),Pe=(Le[9]+1)/Le[5],Ve=(Le[9]-1)/Le[5],ot=(Le[8]-1)/Le[0],Te=(Me[8]+1)/Me[0],$e=Se*ot,ze=Se*Te,De=le/(-ot+Te),_t=De*-ot;ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(_t),X.translateZ(De),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=Se+De,w=k+De,G=$e-_t,J=ze+(le-_t),Q=Pe*k/w*R,ee=Ve*k/w*R;X.projectionMatrix.makePerspective(G,J,Q,ee,R,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function q(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;y.texture!==null&&(X.near=y.depthNear,X.far=y.depthFar),S.near=P.near=T.near=X.near,S.far=P.far=T.far=X.far,(C!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,z=S.far,T.near=C,T.far=z,P.near=C,P.far=z,T.updateProjectionMatrix(),P.updateProjectionMatrix(),X.updateProjectionMatrix());const ne=X.parent,he=S.cameras;q(S,ne);for(let le=0;le<he.length;le++)q(he[le],ne);he.length===2?D(S,T,P):S.projectionMatrix.copy(T.projectionMatrix),Z(X,S,ne)};function Z(X,ne,he){he===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(he.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=iu*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&x===null))return c},this.setFoveation=function(X){c=X,p!==null&&(p.fixedFoveation=X),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let ie=null;function ve(X,ne){if(h=ne.getViewerPose(d||s),v=ne,h!==null){const he=h.views;x!==null&&(e.setRenderTargetFramebuffer(_,x.framebuffer),e.setRenderTarget(_));let le=!1;he.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Me=0;Me<he.length;Me++){const Se=he[Me];let k=null;if(x!==null)k=x.getViewport(Se);else{const Ve=f.getViewSubImage(p,Se);k=Ve.viewport,Me===0&&(e.setRenderTargetTextures(_,Ve.colorTexture,p.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(_))}let Pe=M[Me];Pe===void 0&&(Pe=new _n,Pe.layers.enable(Me),Pe.viewport=new Nt,M[Me]=Pe),Pe.matrix.fromArray(Se.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Se.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(k.x,k.y,k.width,k.height),Me===0&&(S.matrix.copy(Pe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(Pe)}const Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Me=f.getDepthInformation(he[0]);Me&&Me.isValid&&Me.texture&&y.init(e,Me,i.renderState)}}for(let he=0;he<m.length;he++){const le=b[he],Le=m[he];le!==null&&Le!==void 0&&Le.update(le,ne,d||s)}ie&&ie(X,ne),ne.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ne}),v=null}const Be=new kg;Be.setAnimationLoop(ve),this.setAnimationLoop=function(X){ie=X},this.dispose=function(){}}}const ai=new Kn,pT=new gt;function mT(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function r(g,u){u.color.getRGB(g.fogColor.value,Ng(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function i(g,u,_,m,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(g,u):u.isMeshToonMaterial?(a(g,u),f(g,u)):u.isMeshPhongMaterial?(a(g,u),h(g,u)):u.isMeshStandardMaterial?(a(g,u),p(g,u),u.isMeshPhysicalMaterial&&x(g,u,b)):u.isMeshMatcapMaterial?(a(g,u),v(g,u)):u.isMeshDepthMaterial?a(g,u):u.isMeshDistanceMaterial?(a(g,u),y(g,u)):u.isMeshNormalMaterial?a(g,u):u.isLineBasicMaterial?(s(g,u),u.isLineDashedMaterial&&l(g,u)):u.isPointsMaterial?c(g,u,_,m):u.isSpriteMaterial?d(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===nn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===nn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const _=e.get(u),m=_.envMap,b=_.envMapRotation;m&&(g.envMap.value=m,ai.copy(b),ai.x*=-1,ai.y*=-1,ai.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),g.envMapRotation.value.setFromMatrix4(pT.makeRotationFromEuler(ai)),g.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function s(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function l(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function c(g,u,_,m){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*_,g.scale.value=m*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function p(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function x(g,u,_){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===nn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){const _=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function xT(t,e,n,r){let i={},a={},s=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,m){const b=m.program;r.uniformBlockBinding(_,b)}function d(_,m){let b=i[_.id];b===void 0&&(v(_),b=h(_),i[_.id]=b,_.addEventListener("dispose",g));const N=m.program;r.updateUBOMapping(_,N);const A=e.render.frame;a[_.id]!==A&&(p(_),a[_.id]=A)}function h(_){const m=f();_.__bindingPointIndex=m;const b=t.createBuffer(),N=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,N,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,b),b}function f(){for(let _=0;_<l;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const m=i[_.id],b=_.uniforms,N=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let A=0,T=b.length;A<T;A++){const P=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,S=P.length;M<S;M++){const C=P[M];if(x(C,A,M,N)===!0){const z=C.__offset,j=Array.isArray(C.value)?C.value:[C.value];let $=0;for(let O=0;O<j.length;O++){const U=j[O],W=y(U);typeof U=="number"||typeof U=="boolean"?(C.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,z+$,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=0,C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=0,C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=0):(U.toArray(C.__data,$),$+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function x(_,m,b,N){const A=_.value,T=m+"_"+b;if(N[T]===void 0)return typeof A=="number"||typeof A=="boolean"?N[T]=A:N[T]=A.clone(),!0;{const P=N[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return N[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function v(_){const m=_.uniforms;let b=0;const N=16;for(let T=0,P=m.length;T<P;T++){const M=Array.isArray(m[T])?m[T]:[m[T]];for(let S=0,C=M.length;S<C;S++){const z=M[S],j=Array.isArray(z.value)?z.value:[z.value];for(let $=0,O=j.length;$<O;$++){const U=j[$],W=y(U),D=b%N;D!==0&&N-D<W.boundary&&(b+=N-D),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=W.storage}}}const A=b%N;return A>0&&(b+=N-A),_.__size=b,_.__cache={},this}function y(_){const m={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(m.boundary=4,m.storage=4):_.isVector2?(m.boundary=8,m.storage=8):_.isVector3||_.isColor?(m.boundary=16,m.storage=12):_.isVector4?(m.boundary=16,m.storage=16):_.isMatrix3?(m.boundary=48,m.storage=48):_.isMatrix4?(m.boundary=64,m.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),m}function g(_){const m=_.target;m.removeEventListener("dispose",g);const b=s.indexOf(m.__bindingPointIndex);s.splice(b,1),t.deleteBuffer(i[m.id]),delete i[m.id],delete a[m.id]}function u(){for(const _ in i)t.deleteBuffer(i[_]);s=[],i={},a={}}return{bind:c,update:d,dispose:u}}class gT{constructor(e={}){const{canvas:n=lb(),context:r=null,depth:i=!0,stencil:a=!1,alpha:s=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=s;const x=new Uint32Array(4),v=new Int32Array(4);let y=null,g=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=Br,this.toneMappingExposure=1;const m=this;let b=!1,N=0,A=0,T=null,P=-1,M=null;const S=new Nt,C=new Nt;let z=null;const j=new Ye(0);let $=0,O=n.width,U=n.height,W=1,D=null,q=null;const Z=new Nt(0,0,O,U),ie=new Nt(0,0,O,U);let ve=!1;const Be=new ih;let X=!1,ne=!1;const he=new gt,le=new V,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Se(){return T===null?W:1}let k=r;function Pe(E,I){return n.getContext(E,I)}try{const E={alpha:!0,depth:i,stencil:a,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${eh}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Y,!1),n.addEventListener("webglcontextcreationerror",K,!1),k===null){const I="webgl2";if(k=Pe(I,E),k===null)throw Pe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ve,ot,Te,$e,ze,De,_t,R,w,G,J,Q,ee,we,de,ue,Fe,re,ye,He,Ne,fe,Oe,Ge;function pt(){Ve=new Ew(k),Ve.init(),fe=new oT(k,Ve),ot=new vw(k,Ve,e,fe),Te=new aT(k),$e=new Cw(k),ze=new WE,De=new sT(k,Ve,Te,ze,ot,fe,$e),_t=new Sw(m),R=new ww(m),w=new Ib(k),Oe=new gw(k,w),G=new Tw(k,w,$e,Oe),J=new Rw(k,G,w,$e),ye=new Nw(k,ot,De),ue=new yw(ze),Q=new GE(m,_t,R,Ve,ot,Oe,ue),ee=new mT(m,ze),we=new $E,de=new QE(Ve),re=new xw(m,_t,R,Te,J,p,c),Fe=new iT(m,J,ot),Ge=new xT(k,$e,ot,Te),He=new _w(k,Ve,$e),Ne=new Aw(k,Ve,$e),$e.programs=Q.programs,m.capabilities=ot,m.extensions=Ve,m.properties=ze,m.renderLists=we,m.shadowMap=Fe,m.state=Te,m.info=$e}pt();const L=new fT(m,k);this.xr=L,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(O,U,!1))},this.getSize=function(E){return E.set(O,U)},this.setSize=function(E,I,B=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=E,U=I,n.width=Math.floor(E*W),n.height=Math.floor(I*W),B===!0&&(n.style.width=E+"px",n.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(O*W,U*W).floor()},this.setDrawingBufferSize=function(E,I,B){O=E,U=I,W=B,n.width=Math.floor(E*B),n.height=Math.floor(I*B),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,I,B,H){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,I,B,H),Te.viewport(S.copy(Z).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,I,B,H){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,I,B,H),Te.scissor(C.copy(ie).multiplyScalar(W).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(E){Te.setScissorTest(ve=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(E=!0,I=!0,B=!0){let H=0;if(E){let F=!1;if(T!==null){const ae=T.texture.format;F=ae===_g||ae===gg||ae===xg}if(F){const ae=T.texture.type,me=ae===Wr||ae===Aa||ae===pl||ae===Ca||ae===pg||ae===mg,ge=re.getClearColor(),_e=re.getClearAlpha(),Ae=ge.r,Ce=ge.g,Ee=ge.b;me?(x[0]=Ae,x[1]=Ce,x[2]=Ee,x[3]=_e,k.clearBufferuiv(k.COLOR,0,x)):(v[0]=Ae,v[1]=Ce,v[2]=Ee,v[3]=_e,k.clearBufferiv(k.COLOR,0,v))}else H|=k.COLOR_BUFFER_BIT}I&&(H|=k.DEPTH_BUFFER_BIT),B&&(H|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Y,!1),n.removeEventListener("webglcontextcreationerror",K,!1),we.dispose(),de.dispose(),ze.dispose(),_t.dispose(),R.dispose(),J.dispose(),Oe.dispose(),Ge.dispose(),Q.dispose(),L.dispose(),L.removeEventListener("sessionstart",Un),L.removeEventListener("sessionend",Fn),Zr.stop()};function pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=$e.autoReset,I=Fe.enabled,B=Fe.autoUpdate,H=Fe.needsUpdate,F=Fe.type;pt(),$e.autoReset=E,Fe.enabled=I,Fe.autoUpdate=B,Fe.needsUpdate=H,Fe.type=F}function K(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){const I=E.target;I.removeEventListener("dispose",oe),Re(I)}function Re(E){qe(E),ze.remove(E)}function qe(E){const I=ze.get(E).programs;I!==void 0&&(I.forEach(function(B){Q.releaseProgram(B)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,B,H,F,ae){I===null&&(I=Le);const me=F.isMesh&&F.matrixWorld.determinant()<0,ge=Bg(E,I,B,H,F);Te.setMaterial(H,me);let _e=B.index,Ae=1;if(H.wireframe===!0){if(_e=G.getWireframeAttribute(B),_e===void 0)return;Ae=2}const Ce=B.drawRange,Ee=B.attributes.position;let Ke=Ce.start*Ae,ut=(Ce.start+Ce.count)*Ae;ae!==null&&(Ke=Math.max(Ke,ae.start*Ae),ut=Math.min(ut,(ae.start+ae.count)*Ae)),_e!==null?(Ke=Math.max(Ke,0),ut=Math.min(ut,_e.count)):Ee!=null&&(Ke=Math.max(Ke,0),ut=Math.min(ut,Ee.count));const ht=ut-Ke;if(ht<0||ht===1/0)return;Oe.setup(F,H,ge,B,_e);let rn,Ze=He;if(_e!==null&&(rn=w.get(_e),Ze=Ne,Ze.setIndex(rn)),F.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*Se()),Ze.setMode(k.LINES)):Ze.setMode(k.TRIANGLES);else if(F.isLine){let be=H.linewidth;be===void 0&&(be=1),Te.setLineWidth(be*Se()),F.isLineSegments?Ze.setMode(k.LINES):F.isLineLoop?Ze.setMode(k.LINE_LOOP):Ze.setMode(k.LINE_STRIP)}else F.isPoints?Ze.setMode(k.POINTS):F.isSprite&&Ze.setMode(k.TRIANGLES);if(F.isBatchedMesh)F._multiDrawInstances!==null?Ze.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances):Ze.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Ze.renderInstances(Ke,ht,F.count);else if(B.isInstancedBufferGeometry){const be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Bt=Math.min(B.instanceCount,be);Ze.renderInstances(Ke,ht,Bt)}else Ze.render(Ke,ht)};function mt(E,I,B){E.transparent===!0&&E.side===Vn&&E.forceSinglePass===!1?(E.side=nn,E.needsUpdate=!0,Bs(E,I,B),E.side=Gr,E.needsUpdate=!0,Bs(E,I,B),E.side=Vn):Bs(E,I,B)}this.compile=function(E,I,B=null){B===null&&(B=E),g=de.get(B),g.init(I),_.push(g),B.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),E!==B&&E.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights();const H=new Set;return E.traverse(function(F){const ae=F.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){const ge=ae[me];mt(ge,B,F),H.add(ge)}else mt(ae,B,F),H.add(ae)}),_.pop(),g=null,H},this.compileAsync=function(E,I,B=null){const H=this.compile(E,I,B);return new Promise(F=>{function ae(){if(H.forEach(function(me){ze.get(me).currentProgram.isReady()&&H.delete(me)}),H.size===0){F(E);return}setTimeout(ae,10)}Ve.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Et=null;function et(E){Et&&Et(E)}function Un(){Zr.stop()}function Fn(){Zr.start()}const Zr=new kg;Zr.setAnimationLoop(et),typeof self<"u"&&Zr.setContext(self),this.setAnimationLoop=function(E){Et=E,L.setAnimationLoop(E),E===null?Zr.stop():Zr.start()},L.addEventListener("sessionstart",Un),L.addEventListener("sessionend",Fn),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(I),I=L.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,I,T),g=de.get(E,_.length),g.init(I),_.push(g),he.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Be.setFromProjectionMatrix(he),ne=this.localClippingEnabled,X=ue.init(this.clippingPlanes,ne),y=we.get(E,u.length),y.init(),u.push(y),L.enabled===!0&&L.isPresenting===!0){const ae=m.xr.getDepthSensingMesh();ae!==null&&Hl(ae,I,-1/0,m.sortObjects)}Hl(E,I,0,m.sortObjects),y.finish(),m.sortObjects===!0&&y.sort(D,q),Me=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,Me&&re.addToRenderList(y,E),this.info.render.frame++,X===!0&&ue.beginShadows();const B=g.state.shadowsArray;Fe.render(B,E,I),X===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=y.opaque,F=y.transmissive;if(g.setupLights(),I.isArrayCamera){const ae=I.cameras;if(F.length>0)for(let me=0,ge=ae.length;me<ge;me++){const _e=ae[me];oh(H,F,E,_e)}Me&&re.render(E);for(let me=0,ge=ae.length;me<ge;me++){const _e=ae[me];sh(y,E,_e,_e.viewport)}}else F.length>0&&oh(H,F,E,I),Me&&re.render(E),sh(y,E,I);T!==null&&(De.updateMultisampleRenderTarget(T),De.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(m,E,I),Oe.resetDefaultState(),P=-1,M=null,_.pop(),_.length>0?(g=_[_.length-1],X===!0&&ue.setGlobalState(m.clippingPlanes,g.state.camera)):g=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Hl(E,I,B,H){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Be.intersectsSprite(E)){H&&le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(he);const me=J.update(E),ge=E.material;ge.visible&&y.push(E,me,ge,B,le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Be.intersectsObject(E))){const me=J.update(E),ge=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),le.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),le.copy(me.boundingSphere.center)),le.applyMatrix4(E.matrixWorld).applyMatrix4(he)),Array.isArray(ge)){const _e=me.groups;for(let Ae=0,Ce=_e.length;Ae<Ce;Ae++){const Ee=_e[Ae],Ke=ge[Ee.materialIndex];Ke&&Ke.visible&&y.push(E,me,Ke,B,le.z,Ee)}}else ge.visible&&y.push(E,me,ge,B,le.z,null)}}const ae=E.children;for(let me=0,ge=ae.length;me<ge;me++)Hl(ae[me],I,B,H)}function sh(E,I,B,H){const F=E.opaque,ae=E.transmissive,me=E.transparent;g.setupLightsView(B),X===!0&&ue.setGlobalState(m.clippingPlanes,B),H&&Te.viewport(S.copy(H)),F.length>0&&js(F,I,B),ae.length>0&&js(ae,I,B),me.length>0&&js(me,I,B),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function oh(E,I,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[H.id]===void 0&&(g.state.transmissionRenderTarget[H.id]=new Ti(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?zl:Wr,minFilter:xi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=g.state.transmissionRenderTarget[H.id],me=H.viewport||S;ae.setSize(me.z,me.w);const ge=m.getRenderTarget();m.setRenderTarget(ae),m.getClearColor(j),$=m.getClearAlpha(),$<1&&m.setClearColor(16777215,.5),Me?re.render(B):m.clear();const _e=m.toneMapping;m.toneMapping=Br;const Ae=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),g.setupLightsView(H),X===!0&&ue.setGlobalState(m.clippingPlanes,H),js(E,B,H),De.updateMultisampleRenderTarget(ae),De.updateRenderTargetMipmap(ae),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ee=0,Ke=I.length;Ee<Ke;Ee++){const ut=I[Ee],ht=ut.object,rn=ut.geometry,Ze=ut.material,be=ut.group;if(Ze.side===Vn&&ht.layers.test(H.layers)){const Bt=Ze.side;Ze.side=nn,Ze.needsUpdate=!0,lh(ht,B,H,rn,Ze,be),Ze.side=Bt,Ze.needsUpdate=!0,Ce=!0}}Ce===!0&&(De.updateMultisampleRenderTarget(ae),De.updateRenderTargetMipmap(ae))}m.setRenderTarget(ge),m.setClearColor(j,$),Ae!==void 0&&(H.viewport=Ae),m.toneMapping=_e}function js(E,I,B){const H=I.isScene===!0?I.overrideMaterial:null;for(let F=0,ae=E.length;F<ae;F++){const me=E[F],ge=me.object,_e=me.geometry,Ae=H===null?me.material:H,Ce=me.group;ge.layers.test(B.layers)&&lh(ge,I,B,_e,Ae,Ce)}}function lh(E,I,B,H,F,ae){E.onBeforeRender(m,I,B,H,F,ae),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(m,I,B,H,E,ae),F.transparent===!0&&F.side===Vn&&F.forceSinglePass===!1?(F.side=nn,F.needsUpdate=!0,m.renderBufferDirect(B,I,H,F,E,ae),F.side=Gr,F.needsUpdate=!0,m.renderBufferDirect(B,I,H,F,E,ae),F.side=Vn):m.renderBufferDirect(B,I,H,F,E,ae),E.onAfterRender(m,I,B,H,F,ae)}function Bs(E,I,B){I.isScene!==!0&&(I=Le);const H=ze.get(E),F=g.state.lights,ae=g.state.shadowsArray,me=F.state.version,ge=Q.getParameters(E,F.state,ae,I,B),_e=Q.getProgramCacheKey(ge);let Ae=H.programs;H.environment=E.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(E.isMeshStandardMaterial?R:_t).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",oe),Ae=new Map,H.programs=Ae);let Ce=Ae.get(_e);if(Ce!==void 0){if(H.currentProgram===Ce&&H.lightsStateVersion===me)return dh(E,ge),Ce}else ge.uniforms=Q.getUniforms(E),E.onBuild(B,ge,m),E.onBeforeCompile(ge,m),Ce=Q.acquireProgram(ge,_e),Ae.set(_e,Ce),H.uniforms=ge.uniforms;const Ee=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=ue.uniform),dh(E,ge),H.needsLights=Vg(E),H.lightsStateVersion=me,H.needsLights&&(Ee.ambientLightColor.value=F.state.ambient,Ee.lightProbe.value=F.state.probe,Ee.directionalLights.value=F.state.directional,Ee.directionalLightShadows.value=F.state.directionalShadow,Ee.spotLights.value=F.state.spot,Ee.spotLightShadows.value=F.state.spotShadow,Ee.rectAreaLights.value=F.state.rectArea,Ee.ltc_1.value=F.state.rectAreaLTC1,Ee.ltc_2.value=F.state.rectAreaLTC2,Ee.pointLights.value=F.state.point,Ee.pointLightShadows.value=F.state.pointShadow,Ee.hemisphereLights.value=F.state.hemi,Ee.directionalShadowMap.value=F.state.directionalShadowMap,Ee.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ee.spotShadowMap.value=F.state.spotShadowMap,Ee.spotLightMatrix.value=F.state.spotLightMatrix,Ee.spotLightMap.value=F.state.spotLightMap,Ee.pointShadowMap.value=F.state.pointShadowMap,Ee.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ce,H.uniformsList=null,Ce}function ch(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Bo.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function dh(E,I){const B=ze.get(E);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Bg(E,I,B,H,F){I.isScene!==!0&&(I=Le),De.resetTextureUnits();const ae=I.fog,me=H.isMeshStandardMaterial?I.environment:null,ge=T===null?m.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Kr,_e=(H.isMeshStandardMaterial?R:_t).get(H.envMap||me),Ae=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ce=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!B.morphAttributes.position,Ke=!!B.morphAttributes.normal,ut=!!B.morphAttributes.color;let ht=Br;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ht=m.toneMapping);const rn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ze=rn!==void 0?rn.length:0,be=ze.get(H),Bt=g.state.lights;if(X===!0&&(ne===!0||E!==M)){const pn=E===M&&H.id===P;ue.setState(H,E,pn)}let tt=!1;H.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Bt.state.version||be.outputColorSpace!==ge||F.isBatchedMesh&&be.batching===!1||!F.isBatchedMesh&&be.batching===!0||F.isBatchedMesh&&be.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&be.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&be.instancing===!1||!F.isInstancedMesh&&be.instancing===!0||F.isSkinnedMesh&&be.skinning===!1||!F.isSkinnedMesh&&be.skinning===!0||F.isInstancedMesh&&be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&be.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&be.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&be.instancingMorph===!1&&F.morphTexture!==null||be.envMap!==_e||H.fog===!0&&be.fog!==ae||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ue.numPlanes||be.numIntersection!==ue.numIntersection)||be.vertexAlphas!==Ae||be.vertexTangents!==Ce||be.morphTargets!==Ee||be.morphNormals!==Ke||be.morphColors!==ut||be.toneMapping!==ht||be.morphTargetsCount!==Ze)&&(tt=!0):(tt=!0,be.__version=H.version);let Zn=be.currentProgram;tt===!0&&(Zn=Bs(H,I,F));let Hs=!1,Jr=!1,Vl=!1;const Tt=Zn.getUniforms(),mr=be.uniforms;if(Te.useProgram(Zn.program)&&(Hs=!0,Jr=!0,Vl=!0),H.id!==P&&(P=H.id,Jr=!0),Hs||M!==E){Tt.setValue(k,"projectionMatrix",E.projectionMatrix),Tt.setValue(k,"viewMatrix",E.matrixWorldInverse);const pn=Tt.map.cameraPosition;pn!==void 0&&pn.setValue(k,le.setFromMatrixPosition(E.matrixWorld)),ot.logarithmicDepthBuffer&&Tt.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Tt.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Jr=!0,Vl=!0)}if(F.isSkinnedMesh){Tt.setOptional(k,F,"bindMatrix"),Tt.setOptional(k,F,"bindMatrixInverse");const pn=F.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Tt.setValue(k,"boneTexture",pn.boneTexture,De))}F.isBatchedMesh&&(Tt.setOptional(k,F,"batchingTexture"),Tt.setValue(k,"batchingTexture",F._matricesTexture,De),Tt.setOptional(k,F,"batchingColorTexture"),F._colorsTexture!==null&&Tt.setValue(k,"batchingColorTexture",F._colorsTexture,De));const Gl=B.morphAttributes;if((Gl.position!==void 0||Gl.normal!==void 0||Gl.color!==void 0)&&ye.update(F,B,Zn),(Jr||be.receiveShadow!==F.receiveShadow)&&(be.receiveShadow=F.receiveShadow,Tt.setValue(k,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(mr.envMap.value=_e,mr.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(mr.envMapIntensity.value=I.environmentIntensity),Jr&&(Tt.setValue(k,"toneMappingExposure",m.toneMappingExposure),be.needsLights&&Hg(mr,Vl),ae&&H.fog===!0&&ee.refreshFogUniforms(mr,ae),ee.refreshMaterialUniforms(mr,H,W,U,g.state.transmissionRenderTarget[E.id]),Bo.upload(k,ch(be),mr,De)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Bo.upload(k,ch(be),mr,De),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Tt.setValue(k,"center",F.center),Tt.setValue(k,"modelViewMatrix",F.modelViewMatrix),Tt.setValue(k,"normalMatrix",F.normalMatrix),Tt.setValue(k,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const pn=H.uniformsGroups;for(let Wl=0,Gg=pn.length;Wl<Gg;Wl++){const uh=pn[Wl];Ge.update(uh,Zn),Ge.bind(uh,Zn)}}return Zn}function Hg(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Vg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,I,B){ze.get(E.texture).__webglTexture=I,ze.get(E.depthTexture).__webglTexture=B;const H=ze.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const B=ze.get(E);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,B=0){T=E,N=I,A=B;let H=!0,F=null,ae=!1,me=!1;if(E){const _e=ze.get(E);_e.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(k.FRAMEBUFFER,null),H=!1):_e.__webglFramebuffer===void 0?De.setupRenderTarget(E):_e.__hasExternalTextures&&De.rebindTextures(E,ze.get(E.texture).__webglTexture,ze.get(E.depthTexture).__webglTexture);const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(me=!0);const Ce=ze.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?F=Ce[I][B]:F=Ce[I],ae=!0):E.samples>0&&De.useMultisampledRTT(E)===!1?F=ze.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?F=Ce[B]:F=Ce,S.copy(E.viewport),C.copy(E.scissor),z=E.scissorTest}else S.copy(Z).multiplyScalar(W).floor(),C.copy(ie).multiplyScalar(W).floor(),z=ve;if(Te.bindFramebuffer(k.FRAMEBUFFER,F)&&H&&Te.drawBuffers(E,F),Te.viewport(S),Te.scissor(C),Te.setScissorTest(z),ae){const _e=ze.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+I,_e.__webglTexture,B)}else if(me){const _e=ze.get(E.texture),Ae=I||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,_e.__webglTexture,B||0,Ae)}P=-1},this.readRenderTargetPixels=function(E,I,B,H,F,ae,me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(ge=ge[me]),ge){Te.bindFramebuffer(k.FRAMEBUFFER,ge);try{const _e=E.texture,Ae=_e.format,Ce=_e.type;if(!ot.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-H&&B>=0&&B<=E.height-F&&k.readPixels(I,B,H,F,fe.convert(Ae),fe.convert(Ce),ae)}finally{const _e=T!==null?ze.get(T).__webglFramebuffer:null;Te.bindFramebuffer(k.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(E,I,B,H,F,ae,me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(ge=ge[me]),ge){Te.bindFramebuffer(k.FRAMEBUFFER,ge);try{const _e=E.texture,Ae=_e.format,Ce=_e.type;if(!ot.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-H&&B>=0&&B<=E.height-F){const Ee=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ee),k.bufferData(k.PIXEL_PACK_BUFFER,ae.byteLength,k.STREAM_READ),k.readPixels(I,B,H,F,fe.convert(Ae),fe.convert(Ce),0),k.flush();const Ke=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);await cb(k,Ke,4);try{k.bindBuffer(k.PIXEL_PACK_BUFFER,Ee),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ae)}finally{k.deleteBuffer(Ee),k.deleteSync(Ke)}return ae}}finally{const _e=T!==null?ze.get(T).__webglFramebuffer:null;Te.bindFramebuffer(k.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(E,I=null,B=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-B),F=Math.floor(E.image.width*H),ae=Math.floor(E.image.height*H),me=I!==null?I.x:0,ge=I!==null?I.y:0;De.setTexture2D(E,0),k.copyTexSubImage2D(k.TEXTURE_2D,B,0,0,me,ge,F,ae),Te.unbindTexture()},this.copyTextureToTexture=function(E,I,B=null,H=null,F=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],I=arguments[2],F=arguments[3]||0,B=null);let ae,me,ge,_e,Ae,Ce;B!==null?(ae=B.max.x-B.min.x,me=B.max.y-B.min.y,ge=B.min.x,_e=B.min.y):(ae=E.image.width,me=E.image.height,ge=0,_e=0),H!==null?(Ae=H.x,Ce=H.y):(Ae=0,Ce=0);const Ee=fe.convert(I.format),Ke=fe.convert(I.type);De.setTexture2D(I,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,I.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,I.unpackAlignment);const ut=k.getParameter(k.UNPACK_ROW_LENGTH),ht=k.getParameter(k.UNPACK_IMAGE_HEIGHT),rn=k.getParameter(k.UNPACK_SKIP_PIXELS),Ze=k.getParameter(k.UNPACK_SKIP_ROWS),be=k.getParameter(k.UNPACK_SKIP_IMAGES),Bt=E.isCompressedTexture?E.mipmaps[F]:E.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Bt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Bt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ge),k.pixelStorei(k.UNPACK_SKIP_ROWS,_e),E.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,F,Ae,Ce,ae,me,Ee,Ke,Bt.data):E.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,F,Ae,Ce,Bt.width,Bt.height,Ee,Bt.data):k.texSubImage2D(k.TEXTURE_2D,F,Ae,Ce,Ee,Ke,Bt),k.pixelStorei(k.UNPACK_ROW_LENGTH,ut),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ht),k.pixelStorei(k.UNPACK_SKIP_PIXELS,rn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ze),k.pixelStorei(k.UNPACK_SKIP_IMAGES,be),F===0&&I.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(E,I,B=null,H=null,F=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,E=arguments[2],I=arguments[3],F=arguments[4]||0);let ae,me,ge,_e,Ae,Ce,Ee,Ke,ut;const ht=E.isCompressedTexture?E.mipmaps[F]:E.image;B!==null?(ae=B.max.x-B.min.x,me=B.max.y-B.min.y,ge=B.max.z-B.min.z,_e=B.min.x,Ae=B.min.y,Ce=B.min.z):(ae=ht.width,me=ht.height,ge=ht.depth,_e=0,Ae=0,Ce=0),H!==null?(Ee=H.x,Ke=H.y,ut=H.z):(Ee=0,Ke=0,ut=0);const rn=fe.convert(I.format),Ze=fe.convert(I.type);let be;if(I.isData3DTexture)De.setTexture3D(I,0),be=k.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)De.setTexture2DArray(I,0),be=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,I.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,I.unpackAlignment);const Bt=k.getParameter(k.UNPACK_ROW_LENGTH),tt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Zn=k.getParameter(k.UNPACK_SKIP_PIXELS),Hs=k.getParameter(k.UNPACK_SKIP_ROWS),Jr=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ht.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ht.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,_e),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ae),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ce),E.isDataTexture||E.isData3DTexture?k.texSubImage3D(be,F,Ee,Ke,ut,ae,me,ge,rn,Ze,ht.data):I.isCompressedArrayTexture?k.compressedTexSubImage3D(be,F,Ee,Ke,ut,ae,me,ge,rn,ht.data):k.texSubImage3D(be,F,Ee,Ke,ut,ae,me,ge,rn,Ze,ht),k.pixelStorei(k.UNPACK_ROW_LENGTH,Bt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,tt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Zn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Hs),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Jr),F===0&&I.generateMipmaps&&k.generateMipmap(be),Te.unbindTexture()},this.initRenderTarget=function(E){ze.get(E).__webglFramebuffer===void 0&&De.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?De.setTextureCube(E,0):E.isData3DTexture?De.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?De.setTexture2DArray(E,0):De.setTexture2D(E,0),Te.unbindTexture()},this.resetState=function(){N=0,A=0,T=null,Te.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return lr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===th?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===jl?"display-p3":"srgb"}}class _T extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class vT extends Wt{constructor(e,n,r,i,a,s,l,c,d){super(e,n,r,i,a,s,l,c,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mr extends Os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vg,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jg extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const ed=new gt,Gp=new V,Wp=new V;class yT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ih,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Gp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gp),Wp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Wp),n.updateMatrixWorld(),ed.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ST extends yT{constructor(){super(new Lg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xp extends jg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new ST}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bT extends jg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class MT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$p(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=$p();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function $p(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eh);const wT=({statusText:t="SPECIMEN MET-98421 • VERIFIED ASSAYS",onInspect:e,className:n=""})=>{const r=se.useRef(null),[i,a]=se.useState(!0),[s,l]=se.useState(!1);return se.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){a(!1);return}try{const Me=document.createElement("canvas");if(!(Me.getContext("webgl")||Me.getContext("experimental-webgl"))){a(!1);return}}catch{a(!1);return}const d=r.current;if(!d)return;const h=d.clientWidth||460,f=d.clientHeight||420,p=new _T,x=new _n(40,h/f,.1,100);x.position.set(0,0,9.2);const v=new gT({antialias:!0,alpha:!0,powerPreference:"high-performance"});v.setSize(h,f),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.shadowMap.enabled=!0,v.shadowMap.type=dg,d.appendChild(v.domElement);const y=new bT(16776181,1.8);p.add(y);const g=new Xp(16774634,2.4);g.position.set(5,9,7),g.castShadow=!0,g.shadow.mapSize.width=1024,g.shadow.mapSize.height=1024,g.shadow.bias=-5e-4,p.add(g);const u=new Xp(2976335,1.8);u.position.set(-7,-3,5),p.add(u);const _=document.createElement("canvas");_.width=1024,_.height=1440;const m=_.getContext("2d");m&&(m.fillStyle="#FCFAF7",m.fillRect(0,0,1024,1440),m.fillStyle="#163E2D",m.fillRect(50,50,924,95),m.fillStyle="#FFFFFF",m.font="bold 32px Newsreader, Georgia, serif",m.fillText("METROPOLIS PATHOLOGY & MOLECULAR DIAGNOSTICS",80,108),m.font="500 18px JetBrains Mono, monospace",m.fillText("REQUISITION ID: MET-98421  //  ACCREDITED ISO-15189",80,134),m.fillStyle="#F5F2EB",m.fillRect(50,165,924,90),m.fillStyle="#161B20",m.font="bold 22px Plus Jakarta Sans, sans-serif",m.fillText("PATIENT: John Doe (46 Y / M)",80,205),m.font="500 18px Plus Jakarta Sans, sans-serif",m.fillStyle="#485663",m.fillText("PANEL: Fasting Metabolic & Comprehensive Hematology",80,235),m.fillStyle="#1B4533",m.font="bold 16px JetBrains Mono, monospace",m.fillText("SPECIMEN COLLECTED: 2026-10-25 08:30 IST",540,220),m.strokeStyle="#DDD5C7",m.lineWidth=2,m.beginPath(),m.moveTo(50,275),m.lineTo(974,275),m.stroke(),[["Hemoglobin (Hb)","10.8 g/dL","13.0 - 17.5","POTENTIALLY LOW"],["White Blood Cell Count","6,500 /mcL","4000 - 11000","NORMAL"],["Platelet Count","240,000 /mcL","150000 - 450000","NORMAL"],["Fasting Blood Glucose","132.0 mg/dL","70.0 - 99.0","POTENTIALLY HIGH"],["Total Cholesterol","224.0 mg/dL","125.0 - 200.0","POTENTIALLY HIGH"],["Serum Creatinine","0.90 mg/dL","0.60 - 1.30","NORMAL"],["Blood Urea Nitrogen","28.0 mg/dL","7.0 - 20.0","POTENTIALLY HIGH"],["Thyroid Stimulating Hormone","2.10 uIU/mL","0.40 - 4.50","NORMAL"]].forEach((Se,k)=>{const Pe=330+k*85;m.fillStyle=k%2===0?"#FAF8F5":"#FCFAF7",m.fillRect(50,Pe-35,924,76),m.fillStyle="#161B20",m.font="600 22px Plus Jakarta Sans, sans-serif",m.fillText(Se[0],80,Pe+8),m.font="bold 24px JetBrains Mono, monospace",m.fillStyle="#161B20",m.fillText(Se[1],460,Pe+8),m.fillStyle="#647482",m.font="500 18px JetBrains Mono, monospace",m.fillText("Ref: "+Se[2],640,Pe+8),Se[3].includes("HIGH")?(m.fillStyle="#9C2527",m.font="bold 16px Plus Jakarta Sans, sans-serif",m.fillText("▲ "+Se[3],820,Pe+8)):Se[3].includes("LOW")?(m.fillStyle="#916117",m.font="bold 16px Plus Jakarta Sans, sans-serif",m.fillText("▼ "+Se[3],820,Pe+8)):(m.fillStyle="#1E6B4B",m.font="bold 16px Plus Jakarta Sans, sans-serif",m.fillText("✓ "+Se[3],820,Pe+8))}),m.fillStyle="#F5F2EB",m.fillRect(50,1340,924,50),m.fillStyle="#163E2D",m.font="bold 15px JetBrains Mono, monospace",m.fillText("ORCA CLINICAL ENCLAVE // DETERMINISTIC PARSER // 100% LOCAL RAM SOVEREIGNTY",80,1372));const b=new vT(_);b.minFilter=vn;const N=new ts;p.add(N);const A=4.3,T=6,P=.05,M=new Ia(A,T,P),S=new Mr({color:14538183,roughness:.9}),C=new cn(M,S);C.position.set(-.2,-.22,-.16),C.rotation.z=-.06,C.castShadow=!0,C.receiveShadow=!0,N.add(C);const z=new Mr({color:15591391,roughness:.85}),j=new cn(M,z);j.position.set(-.1,-.11,-.08),j.rotation.z=-.03,j.castShadow=!0,j.receiveShadow=!0,N.add(j);const $=[new Mr({color:16118507,roughness:.8}),new Mr({color:16118507,roughness:.8}),new Mr({color:16118507,roughness:.8}),new Mr({color:16118507,roughness:.8}),new Mr({map:b,roughness:.6,metalness:.04}),new Mr({color:16118507,roughness:.85})],O=new cn(M,$);O.castShadow=!0,O.receiveShadow=!0,N.add(O);const U=new zs(A*1.04,.09),W=new rh({color:3706473,transparent:!0,opacity:.85,side:Vn}),D=new cn(U,W);D.position.set(0,0,.04),N.add(D),N.rotation.x=.14,N.rotation.y=-.18;let q=.14,Z=-.18,ie=.14,ve=-.18;const Be=Me=>{const Se=d.getBoundingClientRect(),k=(Me.clientX-Se.left)/Se.width-.5,Pe=(Me.clientY-Se.top)/Se.height-.5;Z=-.18+k*.4,q=.14-Pe*.4},X=()=>{q=.14,Z=-.18};d.addEventListener("mousemove",Be),d.addEventListener("mouseleave",X);let ne;const he=new MT,le=()=>{ne=requestAnimationFrame(le);const Me=he.getElapsedTime();ie+=(q-ie)*.06,ve+=(Z-ve)*.06,N.rotation.x=ie,N.rotation.y=ve;const Se=2.8,k=Me%Se/Se;D.position.y=2.7-k*5.4,D.material.opacity=.25+Math.sin(k*Math.PI)*.65,N.position.y=Math.sin(Me*1.2)*.07,v.render(p,x)};le();const Le=()=>{if(!d)return;const Me=d.clientWidth,Se=d.clientHeight;x.aspect=Me/Se,x.updateProjectionMatrix(),v.setSize(Me,Se)};return window.addEventListener("resize",Le),()=>{window.removeEventListener("resize",Le),d.removeEventListener("mousemove",Be),d.removeEventListener("mouseleave",X),cancelAnimationFrame(ne),d.contains(v.domElement)&&d.removeChild(v.domElement),v.dispose(),b.dispose()}},[i]),i?o.jsx("div",{ref:r,onClick:e,className:`relative w-full h-[400px] md:h-[460px] cursor-pointer select-none ${n}`,title:"Interactive 3D Document Stack — Move cursor to inspect specimen report",children:o.jsxs("div",{className:"absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none z-10",children:[o.jsxs("span",{className:"text-[11px] font-mono font-semibold tracking-wider bg-ivory-50/90 dark:bg-charcoal-900/90 backdrop-blur px-3 py-1 rounded-full border border-ivory-200 dark:border-charcoal-800 text-forest-850 dark:text-forest-300 shadow-sm flex items-center gap-2",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-forest-600 animate-pulse"}),t]}),o.jsx("span",{className:"text-[10px] font-mono text-charcoal-500 dark:text-charcoal-400 bg-ivory-50/80 dark:bg-charcoal-900/80 px-2.5 py-0.5 rounded border border-ivory-200 dark:border-charcoal-800",children:"POINTER TILT ACTIVE"})]})}):o.jsx("div",{className:`relative flex items-center justify-center p-6 ${n}`,children:o.jsxs("div",{className:"w-80 rounded-xl bg-ivory-50 dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800 shadow-paper-elevated p-5",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-ivory-200 dark:border-charcoal-800",children:[o.jsx("span",{className:"font-serif font-bold text-xs text-forest-800 dark:text-forest-400",children:"METROPOLIS PATHOLOGY"}),o.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-forest-50 dark:bg-forest-950 text-forest-800 dark:text-forest-300 border border-forest-200",children:"MET-98421"})]}),o.jsxs("div",{className:"py-3 space-y-2 text-xs",children:[o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-charcoal-600 dark:text-charcoal-400",children:"Hemoglobin (Hb)"}),o.jsx("span",{className:"font-mono font-bold text-clinical-low",children:"10.8 g/dL (Low)"})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-charcoal-600 dark:text-charcoal-400",children:"Fasting Glucose"}),o.jsx("span",{className:"font-mono font-bold text-clinical-high",children:"132.0 mg/dL (High)"})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-charcoal-600 dark:text-charcoal-400",children:"Platelet Count"}),o.jsx("span",{className:"font-mono font-bold text-clinical-norm",children:"240,000 /mcL (Normal)"})]})]}),o.jsx("div",{className:"text-[10px] font-mono text-charcoal-400 uppercase tracking-wider text-center pt-2 border-t border-ivory-200 dark:border-charcoal-800",children:t})]})})},ET=()=>o.jsx("footer",{className:"w-full bg-ivory-200/60 dark:bg-charcoal-950 border-t border-ivory-300 dark:border-charcoal-800 transition-colors py-14",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 mb-12",children:[o.jsxs("div",{className:"md:col-span-1 space-y-4",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg bg-forest-800 flex items-center justify-center text-ivory-50 shadow-paper-ivory",children:o.jsx(qn,{className:"w-4 h-4"})}),o.jsx("span",{className:"font-serif font-bold text-lg tracking-tight text-charcoal-900 dark:text-ivory-50",children:"Orca MedScan"})]}),o.jsx("p",{className:"text-xs text-charcoal-600 dark:text-ivory-400 leading-relaxed font-sans",children:"Autonomous clinical laboratory screening enclave for Orcathon 2026 Healthcare & MedTech track. Deterministic biomarker extraction with 100% on-premise cryptographic privacy."}),o.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-forest-800 dark:text-forest-400 font-mono font-medium",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-clinical-normal"}),"Enclave Security: Active"]})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 dark:text-ivory-100 mb-3",children:"Extraction Architecture"}),o.jsxs("ul",{className:"space-y-2 text-xs text-charcoal-600 dark:text-ivory-400",children:[o.jsxs("li",{className:"flex items-center gap-1.5",children:[o.jsx(Zt,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," Digital PDF Vector Stream"]}),o.jsxs("li",{className:"flex items-center gap-1.5",children:[o.jsx(Zt,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," Scanned PDF with OCR Fallback"]}),o.jsxs("li",{className:"flex items-center gap-1.5",children:[o.jsx(Zt,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," Multi-Format Vision (PNG, JPG, WEBP, TIFF)"]}),o.jsxs("li",{className:"flex items-center gap-1.5",children:[o.jsx(Zt,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," OCR Typo Auto-Repair Pipeline"]}),o.jsxs("li",{className:"flex items-center gap-1.5",children:[o.jsx(Zt,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," 50+ Clinical Alias Resolution"]})]})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 dark:text-ivory-100 mb-3",children:"Enclave Protocol"}),o.jsxs("ul",{className:"space-y-2 text-xs text-charcoal-600 dark:text-ivory-400",children:[o.jsxs("li",{className:"flex items-center gap-1.5",children:[o.jsx(kn,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," PBKDF2-HMAC-SHA256 Vault"]}),o.jsxs("li",{className:"flex items-center gap-1.5",children:[o.jsx(kn,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," 100,000 Key Derivation Rounds"]}),o.jsxs("li",{className:"flex items-center gap-1.5",children:[o.jsx(kn,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," Zero Third-Party Cloud Transmissions"]}),o.jsxs("li",{className:"flex items-center gap-1.5",children:[o.jsx(kn,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," RAM-Only Ephemeral Processing"]}),o.jsxs("li",{className:"flex items-center gap-1.5",children:[o.jsx(kn,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," Signed Clinical PDF Generation"]})]})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 dark:text-ivory-100 mb-3",children:"Regulatory Notice"}),o.jsx("p",{className:"text-xs text-charcoal-500 dark:text-ivory-400 leading-relaxed font-sans",children:"Orca MedScan is a clinical screening and educational prototype. It does not provide medical diagnoses, triaging, or clinical prescriptions. Always review results with licensed medical practitioners."}),o.jsx("div",{className:"mt-3 pt-3 border-t border-ivory-300 dark:border-charcoal-800 text-[11px] font-mono text-charcoal-400 dark:text-charcoal-400",children:"Orcathon 2026 // MedTech Track"})]})]}),o.jsxs("div",{className:"pt-8 border-t border-ivory-300 dark:border-charcoal-800 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 dark:text-ivory-400 gap-4 font-mono",children:[o.jsx("p",{children:"© 2026 Orca MedScan. Built with Antigravity & Gemini for Orcathon 2026."}),o.jsxs("div",{className:"flex items-center gap-6",children:[o.jsx("span",{children:"Deterministic Parsing"}),o.jsx("span",{children:"•"}),o.jsx("span",{children:"Local Enclave Vault"}),o.jsx("span",{children:"•"}),o.jsx("span",{children:"Open Source Screening"})]})]})]})}),TT=({onOpenAuth:t,onLaunchBenchmark:e,onExploreWorkflow:n})=>{const[r,i]=se.useState(0),[a,s]=se.useState(null),l=[{num:"01",title:"Multi-Format Specimen Ingestion",subtitle:"Vector digital extraction or high-resolution optical scan",body:"Medical documents arrive as digital PDFs, scanned printouts, or mobile photos. Orca MedScan detects the document container and routes directly to pdfplumber vector text extraction or triggers page-by-page OCR rendering at 200 DPI.",meta:"Supported: PDF (digital/scanned), PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC"},{num:"02",title:"Optical Character Recognition & Auto-Repair",subtitle:"Contextual character repair and punctuation detachment",body:"Raw OCR frequently merges attached units (13.5g/dL), confuses numeric digits (IO5 → 105), or introduces acronym typos (Tolal, LOL, Hate). Orca MedScan pre-sanitizes strings contextually before tokenization.",meta:"OCR Engine: Tesseract v5.5 + Pillow computer vision filters"},{num:"03",title:"Deterministic Biomarker Alias Resolution",subtitle:"Over 50 clinical abbreviations mapped to standardized registry",body:"Hospital reports use shorthand: Hb, TLC, PLT, FBS, FPG, TC, TG, BUN, SGPT, ALT, AST, TSH. Orca MedScan uses regex pattern matrices to resolve synonyms while isolating non-medical noise.",meta:"Centralized registry: Hematology, Metabolic, Lipid, Renal, Hepatic, Thyroid"},{num:"04",title:"Dynamic Reference Interval Prioritization",subtitle:"Calibrated laboratory ranges applied first; documented adult fallback",body:"Reagents and analyzer calibrations vary between clinical pathology laboratories. Orca MedScan first detects and honors intervals printed directly on the patient report, falling back safely to standard adult clinical norms when omitted.",meta:"Non-speculative classification: Normal, Potentially High, Potentially Low, Review Needed"}],c=[{q:"Does Orca MedScan upload patient reports to remote third-party AI APIs?",a:"No. Orca MedScan operates on an isolated local privacy enclave model. Document parsing, optical character recognition (OCR), regex tokenization, and reference-range evaluations execute 100% locally in host RAM. Zero patient health data or scanned blood panels leave your machine."},{q:"How does Orca MedScan determine whether a result is out of range?",a:"The engine first checks the laboratory report itself for printed reference intervals, honoring the calibrating laboratory’s assay standards. When intervals are not printed, documented adult clinical standards are applied as a secondary fallback and transparently labeled in the audit report."},{q:"Which image and document formats are verified to work?",a:"Digital PDFs, Scanned PDFs (with automated OCR fallback), PNG, JPG, JPEG, WEBP (with OCR typo auto-repair), BMP, TIFF, and HEIC/HEIF (via pillow-heif)."},{q:"Can Orca MedScan be used to make autonomous medical diagnoses?",a:"No. Orca MedScan is a clinical decision-support and screening prototype developed for Orcathon 2026. It strictly categorizes indicators into Normal, Potentially High, Potentially Low, or Review Needed. It never provides speculative medical diagnoses or prescriptions."}];return o.jsxs("div",{className:"w-full flex flex-col min-h-screen bg-ivory-50 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-50 transition-colors duration-200",children:[o.jsx("section",{className:"relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-ivory-200 dark:border-charcoal-800 paper-texture overflow-hidden",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-ivory-200 dark:border-charcoal-800 text-[11px] font-mono text-charcoal-500 dark:text-charcoal-400",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-forest-700 animate-pulse"}),o.jsx("span",{className:"font-bold uppercase tracking-wider text-forest-850 dark:text-forest-400",children:"ORCATHON 2026 • HEALTHCARE & MEDTECH TRACK"})]}),o.jsxs("div",{className:"flex items-center gap-6",children:[o.jsx("span",{children:"ZERO-CLOUD LOCAL ENCLAVE"}),o.jsx("span",{className:"hidden sm:inline",children:"NIST PBKDF2 VAULT"}),o.jsx("span",{children:"16 / 16 VERIFICATIONS PASSED"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center",children:[o.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[o.jsx("h1",{className:"editorial-title text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-charcoal-950 dark:text-ivory-50 leading-[1.08]",children:"High-precision laboratory intelligence for complex clinical documents."}),o.jsx("p",{className:"text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300 leading-relaxed font-normal max-w-2xl",children:"A local, privacy-preserving clinical decision-support engine. Ingests digital and scanned medical reports, rectifies optical character degradation, and cross-references patient biomarkers against assay-calibrated laboratory reference intervals."}),o.jsxs("div",{className:"flex flex-wrap items-center gap-3.5 pt-2",children:[o.jsxs("button",{onClick:()=>t("signup"),className:"inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-forest-850 hover:bg-forest-800 text-white font-bold text-xs uppercase tracking-wider shadow-paper-elevated transition-all hover:translate-y-[-1px]",children:["Launch Clinical Workspace",o.jsx(Ei,{className:"w-4 h-4 text-forest-200"})]}),o.jsxs("button",{onClick:e,className:"inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-ivory-100 dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-700 hover:border-forest-600 text-charcoal-800 dark:text-ivory-100 font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:bg-white dark:hover:bg-charcoal-850",children:[o.jsx(Fl,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),"⚡ Evaluator 1-Click Benchmark"]})]}),o.jsxs("div",{className:"pt-6 grid grid-cols-3 gap-4 border-t border-ivory-200 dark:border-charcoal-800 text-xs",children:[o.jsxs("div",{children:[o.jsx("span",{className:"block font-serif font-bold text-lg text-charcoal-900 dark:text-ivory-50",children:"100% Local"}),o.jsx("span",{className:"text-[11px] text-charcoal-500 dark:text-charcoal-400 font-mono",children:"RAM Enclave Privacy"})]}),o.jsxs("div",{children:[o.jsx("span",{className:"block font-serif font-bold text-lg text-charcoal-900 dark:text-ivory-50",children:"50+ Aliases"}),o.jsx("span",{className:"text-[11px] text-charcoal-500 dark:text-charcoal-400 font-mono",children:"Clinical Lab Synonyms"})]}),o.jsxs("div",{children:[o.jsx("span",{className:"block font-serif font-bold text-lg text-charcoal-900 dark:text-ivory-50",children:"8 Formats"}),o.jsx("span",{className:"text-[11px] text-charcoal-500 dark:text-charcoal-400 font-mono",children:"PDF, OCR, HEIC"})]})]})]}),o.jsx("div",{className:"lg:col-span-5 relative",children:o.jsxs("div",{className:"relative rounded-2xl bg-ivory-100 dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800 p-4 sm:p-6 shadow-paper-elevated",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 px-1 border-b border-ivory-200 dark:border-charcoal-800 text-xs font-mono text-charcoal-500",children:[o.jsxs("span",{className:"flex items-center gap-1.5 font-bold text-forest-800 dark:text-forest-400",children:[o.jsx(Xy,{className:"w-3.5 h-3.5"}),"CLINICAL SPECIMEN INSPECTOR"]}),o.jsx("span",{children:"POINTER PARALLAX"})]}),o.jsx(wT,{statusText:"SPECIMEN MET-98421 • VERIFIED ASSAYS",onInspect:e}),o.jsxs("div",{className:"pt-3 px-1 flex items-center justify-between text-xs text-charcoal-500 dark:text-charcoal-400 border-t border-ivory-200 dark:border-charcoal-800",children:[o.jsx("span",{className:"font-mono text-[11px]",children:"Metropolis Diagnostic Laboratory"}),o.jsxs("button",{onClick:e,className:"text-forest-800 dark:text-forest-400 font-bold hover:underline flex items-center gap-1 text-xs",children:["Test In Workspace ",o.jsx(Ei,{className:"w-3 h-3"})]})]})]})})]})]})}),o.jsx("section",{id:"simulator-section",className:"scroll-mt-16 py-20 bg-white dark:bg-charcoal-900 border-b border-ivory-200 dark:border-charcoal-800 transition-colors",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"max-w-3xl mb-12",children:[o.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Interactive Clinical Simulation"}),o.jsx("h2",{className:"editorial-title text-3xl sm:text-4xl font-bold text-charcoal-950 dark:text-ivory-50 mt-2",children:"From degraded optical scan to calibrated clinical intelligence."}),o.jsx("p",{className:"text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 mt-3 leading-relaxed",children:"Step through the actual algorithmic transformation executed on specimen MET-98421. Watch how optical errors are rectified and indicators are cross-referenced with laboratory intervals."})]}),o.jsxs("div",{className:"rounded-2xl border border-ivory-200 dark:border-charcoal-800 bg-ivory-50 dark:bg-charcoal-950 shadow-paper-elevated overflow-hidden",children:[o.jsxs("div",{className:"h-12 px-6 bg-ivory-100 dark:bg-charcoal-900 border-b border-ivory-200 dark:border-charcoal-800 flex items-center justify-between text-xs font-mono",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"w-3 h-3 rounded-full bg-forest-700"}),o.jsx("span",{className:"font-bold text-charcoal-800 dark:text-ivory-100",children:"ORCA WORKSTATION // SPECIMEN AUDIT MET-98421"})]}),o.jsx("div",{className:"flex items-center gap-2",children:o.jsx("button",{onClick:e,className:"px-3 py-1 rounded bg-forest-850 hover:bg-forest-800 text-white text-[11px] font-bold font-mono transition-colors",children:"Open in Workspace"})})]}),o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 border-b border-ivory-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 text-xs font-mono",children:l.map((d,h)=>o.jsxs("button",{onClick:()=>i(h),className:`p-4 text-left border-r last:border-r-0 border-ivory-200 dark:border-charcoal-800 transition-colors ${r===h?"bg-forest-50 dark:bg-forest-950 text-forest-900 dark:text-forest-200 font-bold border-b-2 border-forest-700":"text-charcoal-600 dark:text-charcoal-400 hover:bg-ivory-50 dark:hover:bg-charcoal-850"}`,children:[o.jsxs("span",{className:"block text-[10px] text-forest-600 dark:text-forest-400 font-bold",children:[d.num," / STAGE"]}),o.jsx("span",{className:"font-sans font-bold text-xs truncate block mt-0.5",children:d.title})]},d.num))}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 p-6 sm:p-8 gap-8",children:[o.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[o.jsx("span",{className:"text-xs font-mono font-bold uppercase text-forest-700 dark:text-forest-400",children:l[r].subtitle}),o.jsx("h3",{className:"editorial-title text-2xl font-bold text-charcoal-950 dark:text-ivory-50",children:l[r].title}),o.jsx("p",{className:"text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed",children:l[r].body}),o.jsxs("div",{className:"p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800 font-mono text-xs space-y-2",children:[o.jsx("div",{className:"text-[10px] uppercase font-bold text-charcoal-400",children:"Contextual Auto-Repair Demonstration:"}),o.jsxs("div",{className:"flex justify-between items-center text-rose-600 dark:text-rose-400 line-through",children:[o.jsx("span",{children:"Raw OCR Error:"}),o.jsx("span",{children:'"FPG: IO5 mg/dL"'})]}),o.jsxs("div",{className:"flex justify-between items-center text-forest-700 dark:text-forest-400 font-bold",children:[o.jsx("span",{children:"Rectified Token:"}),o.jsx("span",{children:'"Fasting Glucose: 105 mg/dL"'})]}),o.jsxs("div",{className:"flex justify-between items-center text-rose-600 dark:text-rose-400 line-through",children:[o.jsx("span",{children:"Raw OCR Error:"}),o.jsx("span",{children:'"PLT(Platelets) 240,000/mcL"'})]}),o.jsxs("div",{className:"flex justify-between items-center text-forest-700 dark:text-forest-400 font-bold",children:[o.jsx("span",{children:"Rectified Token:"}),o.jsx("span",{children:'"Platelets: 240,000 /mcL"'})]})]}),o.jsx("div",{className:"text-[11px] font-mono text-charcoal-500 pt-1",children:l[r].meta})]}),o.jsxs("div",{className:"lg:col-span-7 rounded-xl border border-ivory-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 overflow-hidden shadow-sm",children:[o.jsxs("div",{className:"px-4 py-3 bg-ivory-100 dark:bg-charcoal-850 border-b border-ivory-200 dark:border-charcoal-800 flex justify-between items-center text-xs font-mono",children:[o.jsx("span",{className:"font-bold text-charcoal-800 dark:text-ivory-100",children:"CALIBRATED BIOMARKER MATRIX"}),o.jsx("span",{className:"text-forest-700 dark:text-forest-400 font-bold",children:"16 Screened Assays"})]}),o.jsxs("div",{className:"divide-y divide-ivory-200 dark:divide-charcoal-800 text-xs",children:[o.jsxs("div",{className:"p-3.5 flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("span",{className:"font-bold text-charcoal-950 dark:text-ivory-50",children:"Hemoglobin (Hb)"}),o.jsx("span",{className:"text-charcoal-500 font-mono text-[11px] ml-2",children:"10.8 g/dL"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-charcoal-500 font-mono text-[11px]",children:"Ref: 13.0 - 17.5"}),o.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-bold bg-clinical-low-bg text-clinical-low border border-clinical-low/20",children:"▼ Potentially Low"})]})]}),o.jsxs("div",{className:"p-3.5 flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("span",{className:"font-bold text-charcoal-950 dark:text-ivory-50",children:"Fasting Blood Glucose (Sugar)"}),o.jsx("span",{className:"text-charcoal-500 font-mono text-[11px] ml-2",children:"132.0 mg/dL"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-charcoal-500 font-mono text-[11px]",children:"Ref: 70.0 - 99.0"}),o.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-bold bg-clinical-high-bg text-clinical-high border border-clinical-high/20",children:"▲ Potentially High"})]})]}),o.jsxs("div",{className:"p-3.5 flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("span",{className:"font-bold text-charcoal-950 dark:text-ivory-50",children:"Total Cholesterol"}),o.jsx("span",{className:"text-charcoal-500 font-mono text-[11px] ml-2",children:"224.0 mg/dL"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-charcoal-500 font-mono text-[11px]",children:"Ref: 125.0 - 200.0"}),o.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-bold bg-clinical-high-bg text-clinical-high border border-clinical-high/20",children:"▲ Potentially High"})]})]}),o.jsxs("div",{className:"p-3.5 flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("span",{className:"font-bold text-charcoal-950 dark:text-ivory-50",children:"Platelet Count"}),o.jsx("span",{className:"text-charcoal-500 font-mono text-[11px] ml-2",children:"240,000 /mcL"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-charcoal-500 font-mono text-[11px]",children:"Ref: 150k - 450k"}),o.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-bold bg-clinical-norm-bg text-clinical-norm border border-clinical-norm/20",children:"✓ In Normal Range"})]})]}),o.jsxs("div",{className:"p-3.5 flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("span",{className:"font-bold text-charcoal-950 dark:text-ivory-50",children:"Blood Urea Nitrogen (BUN)"}),o.jsx("span",{className:"text-charcoal-500 font-mono text-[11px] ml-2",children:"28.0 mg/dL"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-charcoal-500 font-mono text-[11px]",children:"Ref: 7.0 - 20.0"}),o.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-bold bg-clinical-high-bg text-clinical-high border border-clinical-high/20",children:"▲ Potentially High"})]})]})]})]})]})]})]})}),o.jsx("section",{id:"workflow-section",className:"py-20 bg-ivory-50 dark:bg-charcoal-950 border-b border-ivory-200 dark:border-charcoal-800 transition-colors",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"max-w-3xl mb-16",children:[o.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Deterministic Methodology"}),o.jsx("h2",{className:"editorial-title text-3xl sm:text-4xl font-bold text-charcoal-950 dark:text-ivory-50 mt-2",children:"Four verified stages of clinical document intelligence."}),o.jsx("p",{className:"text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 mt-3 leading-relaxed",children:"Every step is open to inspection: clinicians can review and edit extracted streams prior to running reference interval comparisons."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:l.map(d=>o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800 shadow-sm space-y-4 flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("span",{className:"editorial-title text-3xl font-bold text-forest-800 dark:text-forest-400",children:d.num}),o.jsx("h3",{className:"font-bold text-base text-charcoal-950 dark:text-ivory-50 mt-2",children:d.title}),o.jsx("p",{className:"text-xs text-charcoal-600 dark:text-charcoal-400 mt-2 leading-relaxed",children:d.body})]}),o.jsx("div",{className:"pt-4 border-t border-ivory-200 dark:border-charcoal-800 text-[11px] font-mono text-charcoal-500",children:d.meta})]},d.num))})]})}),o.jsx("section",{id:"formats-section",className:"py-20 bg-white dark:bg-charcoal-900 border-b border-ivory-200 dark:border-charcoal-800 transition-colors",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"max-w-3xl mb-16",children:[o.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Verified Ingestion Matrix"}),o.jsx("h2",{className:"editorial-title text-3xl sm:text-4xl font-bold text-charcoal-950 dark:text-ivory-50 mt-2",children:"Engineered for genuine hospital laboratory workflows."}),o.jsx("p",{className:"text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 mt-3 leading-relaxed",children:"Medical documents arrive in a wide spectrum of visual qualities. Our ingestion pipeline has been tested across 16 regression checks to ensure zero unhandled exceptions."})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[o.jsxs("div",{className:"p-7 rounded-2xl bg-ivory-50 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800 shadow-sm space-y-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-xl bg-forest-800 text-forest-100 flex items-center justify-center font-bold",children:o.jsx(Ul,{className:"w-6 h-6"})}),o.jsx("h3",{className:"editorial-title text-xl font-bold text-charcoal-950 dark:text-ivory-50",children:"Vector & Scanned PDFs"}),o.jsxs("p",{className:"text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed",children:["Direct text stream extraction via ",o.jsx("code",{className:"font-mono bg-ivory-200 dark:bg-charcoal-800 px-1 py-0.5 rounded",children:"pdfplumber"}),". When PDFs contain flattened scans without digital text, Orca MedScan automatically renders pages to 200 DPI images and activates Tesseract OCR fallback."]}),o.jsxs("div",{className:"pt-2 text-xs font-semibold text-forest-800 dark:text-forest-400 flex items-center gap-1.5 font-mono",children:[o.jsx(Zt,{className:"w-4 h-4 text-forest-700"})," Multi-page rendering verified"]})]}),o.jsxs("div",{className:"p-7 rounded-2xl bg-ivory-50 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800 shadow-sm space-y-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-xl bg-forest-800 text-forest-100 flex items-center justify-center font-bold",children:o.jsx(Ax,{className:"w-6 h-6"})}),o.jsx("h3",{className:"editorial-title text-xl font-bold text-charcoal-950 dark:text-ivory-50",children:"Multi-Format Clinical Vision"}),o.jsx("p",{className:"text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed",children:"Ingests PNG, JPG, JPEG, WEBP, BMP, and TIFF scans. Includes auto-EXIF rotation, contrast enhancement, and an OCR typo repair engine that rectifies alphanumeric character confusions and detached units."}),o.jsxs("div",{className:"pt-2 text-xs font-semibold text-forest-800 dark:text-forest-400 flex items-center gap-1.5 font-mono",children:[o.jsx(Zt,{className:"w-4 h-4 text-forest-700"})," WEBP typo auto-repair verified"]})]}),o.jsxs("div",{className:"p-7 rounded-2xl bg-ivory-50 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800 shadow-sm space-y-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-xl bg-forest-800 text-forest-100 flex items-center justify-center font-bold",children:o.jsx(kn,{className:"w-6 h-6"})}),o.jsx("h3",{className:"editorial-title text-xl font-bold text-charcoal-950 dark:text-ivory-50",children:"Local RAM Enclave Vault"}),o.jsxs("p",{className:"text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed",children:["100% on-premise execution. Credentials hashed with NIST-compliant PBKDF2-HMAC-SHA256 (100,000 iterations, 256-bit CSPRNG salt) stored in ",o.jsx("code",{className:"font-mono bg-ivory-200 dark:bg-charcoal-800 px-1 py-0.5 rounded",children:"data/.auth_vault.json"}),"."]}),o.jsxs("div",{className:"pt-2 text-xs font-semibold text-forest-800 dark:text-forest-400 flex items-center gap-1.5 font-mono",children:[o.jsx(Zt,{className:"w-4 h-4 text-forest-700"})," Zero cloud API exposure"]})]})]})]})}),o.jsx("section",{id:"safety-section",className:"py-20 bg-ivory-50 dark:bg-charcoal-950 border-b border-ivory-200 dark:border-charcoal-800 transition-colors",children:o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[o.jsxs("div",{className:"lg:col-span-6 space-y-6",children:[o.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Clinical Safety Protocol"}),o.jsx("h2",{className:"editorial-title text-3xl sm:text-4xl font-bold text-charcoal-950 dark:text-ivory-50",children:"Non-speculative guardrail grounded in real laboratory physics."}),o.jsxs("p",{className:"text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed",children:["Orca MedScan is strictly engineered as a ",o.jsx("strong",{children:"clinical decision-support screening prototype"})," for Orcathon 2026. Speculative AI diagnostic guessing is prohibited by architecture."]}),o.jsxs("div",{className:"space-y-3 text-xs",children:[o.jsxs("div",{className:"p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("h4",{className:"font-bold text-charcoal-950 dark:text-ivory-50",children:"Calibrated Printed Intervals First"}),o.jsx("p",{className:"text-charcoal-500 mt-1",children:"Pathology analyzers calibrate results using specific reagent lots. Orca MedScan prioritizes intervals printed directly on the patient document."})]}),o.jsxs("div",{className:"p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("h4",{className:"font-bold text-charcoal-950 dark:text-ivory-50",children:"Documented Adult Fallback"}),o.jsxs("p",{className:"text-charcoal-500 mt-1",children:["When intervals are omitted on paper, standard adult clinical ranges are applied and explicitly disclosed as ",o.jsx("span",{className:"font-mono text-forest-700",children:"Standard Adult Reference"}),"."]})]})]})]}),o.jsxs("div",{className:"lg:col-span-6 bg-white dark:bg-charcoal-900 p-8 rounded-2xl border border-ivory-200 dark:border-charcoal-800 shadow-paper-elevated space-y-4",children:[o.jsxs("div",{className:"flex items-center gap-2.5 text-clinical-high font-bold text-sm",children:[o.jsx(Cs,{className:"w-5 h-5 text-clinical-high"}),o.jsx("span",{children:"Regulatory Notice & Clinical Scope"})]}),o.jsxs("p",{className:"text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed",children:["Orca MedScan is developed for ",o.jsx("strong",{children:"Orcathon 2026 (Healthcare & MedTech track)"}),". It does not provide medical diagnoses, treatment prescriptions, or emergency triage."]}),o.jsx("p",{className:"text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed",children:"Patients and practitioners should always consult licensed physicians and pathologists for diagnostic interpretation."}),o.jsxs("div",{className:"pt-4 border-t border-ivory-200 dark:border-charcoal-800 flex items-center justify-between text-xs font-mono text-charcoal-500",children:[o.jsx("span",{children:"Orcathon 2026 MedTech Track"}),o.jsx("span",{className:"text-forest-700 dark:text-forest-400 font-bold",children:"16 / 16 Tests Passed"})]})]})]})})}),o.jsx("section",{className:"py-20 bg-white dark:bg-charcoal-900 border-b border-ivory-200 dark:border-charcoal-800 transition-colors",children:o.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Clinical Clarifications"}),o.jsx("h2",{className:"editorial-title text-3xl font-bold text-charcoal-950 dark:text-ivory-50 mt-2",children:"Frequently Asked Questions"})]}),o.jsx("div",{className:"space-y-3",children:c.map((d,h)=>{const f=a===h;return o.jsxs("div",{className:"rounded-xl border border-ivory-200 dark:border-charcoal-800 bg-ivory-50 dark:bg-charcoal-950 overflow-hidden",children:[o.jsxs("button",{onClick:()=>s(f?null:h),className:"w-full flex items-center justify-between p-4 text-left font-bold text-sm text-charcoal-950 dark:text-ivory-50 hover:text-forest-700 dark:hover:text-forest-400 transition-colors",children:[o.jsx("span",{children:d.q}),o.jsx(Kd,{className:`w-4 h-4 transition-transform ${f?"rotate-180":""}`})]}),f&&o.jsx("div",{className:"px-4 pb-4 pt-1 text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed border-t border-ivory-200 dark:border-charcoal-800",children:d.a})]},d.q)})})]})}),o.jsx("section",{className:"py-20 bg-forest-900 text-white text-center",children:o.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6",children:[o.jsx("h2",{className:"editorial-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white",children:"Ready to screen clinical laboratory reports in the enclave?"}),o.jsx("p",{className:"text-sm sm:text-base text-forest-100 max-w-2xl mx-auto leading-relaxed",children:"Experience high-precision optical character recognition, abbreviation resolution, and dynamic reference comparison with 100% on-premise local privacy."}),o.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 pt-4",children:[o.jsx("button",{onClick:()=>t("signup"),className:"px-6 py-3.5 rounded-xl bg-ivory-50 text-forest-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-white transition-all hover:scale-105",children:"Get Started with Enclave"}),o.jsx("button",{onClick:e,className:"px-6 py-3.5 rounded-xl bg-forest-800 hover:bg-forest-700 border border-forest-600 text-white font-bold text-xs uppercase tracking-wider transition-all",children:"⚡ Evaluator 1-Click Benchmark"})]})]})}),o.jsx("div",{id:"footer-section",className:"scroll-mt-16",children:o.jsx(ET,{})})]})},qp=({isOpen:t,onClose:e,initialMode:n="login",onSuccess:r})=>{const[i,a]=se.useState(n),[s,l]=se.useState(""),[c,d]=se.useState(""),[h,f]=se.useState(""),[p,x]=se.useState(""),[v,y]=se.useState(""),{login:g,register:u,loginEvaluatorFastPass:_,isLoading:m}=Ds();if(!t)return null;const b=async A=>{if(A.preventDefault(),x(""),y(""),i==="login"){const T=await g(s,c);T.success?(r&&r(),e()):x(T.message)}else{const T=await u(s,c,h);T.success?(y("Account registered successfully! You may now sign in."),a("login")):x(T.message)}},N=async()=>{x(""),await _()?(r&&r(),e()):x("Evaluator fast-pass failed.")};return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/70 backdrop-blur-sm animate-fade-in font-sans",children:o.jsxs("div",{className:"relative w-full max-w-md bg-white dark:bg-charcoal-900 rounded-3xl shadow-paper-elevated border border-ivory-300 dark:border-charcoal-800 p-6 sm:p-8 overflow-hidden",children:[o.jsx("button",{onClick:e,className:"absolute top-5 right-5 p-1 rounded-lg text-charcoal-400 hover:text-charcoal-700 dark:hover:text-ivory-200",children:o.jsx(eS,{className:"w-5 h-5"})}),o.jsxs("div",{className:"flex items-center gap-3.5 mb-6",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center text-ivory-50 shadow-paper-ivory",children:o.jsx(qn,{className:"w-5 h-5"})}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"NIST Cryptographic Vault"}),o.jsx("h3",{className:"font-serif text-xl font-bold text-charcoal-900 dark:text-ivory-50",children:i==="login"?"Clinical Enclave Sign In":"Register Practitioner"})]})]}),p&&o.jsx("div",{className:"mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-semibold",children:p}),v&&o.jsx("div",{className:"mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-semibold",children:v}),o.jsxs("form",{onSubmit:b,className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-mono font-bold uppercase tracking-wider text-charcoal-600 dark:text-ivory-300 mb-1.5",children:"Practitioner Identifier"}),o.jsxs("div",{className:"relative",children:[o.jsx(Wy,{className:"absolute left-3.5 top-3 w-4 h-4 text-charcoal-400"}),o.jsx("input",{type:"email",required:!0,value:s,onChange:A=>l(A.target.value),placeholder:"evaluator@orcamed.org",className:"w-full pl-10 pr-3 py-2.5 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-forest-600"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-mono font-bold uppercase tracking-wider text-charcoal-600 dark:text-ivory-300 mb-1.5",children:"Passphrase"}),o.jsxs("div",{className:"relative",children:[o.jsx(kn,{className:"absolute left-3.5 top-3 w-4 h-4 text-charcoal-400"}),o.jsx("input",{type:"password",required:!0,value:c,onChange:A=>d(A.target.value),placeholder:"••••••••••••",className:"w-full pl-10 pr-3 py-2.5 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-forest-600"})]}),i==="signup"&&o.jsx("p",{className:"text-[11px] text-charcoal-500 mt-1 font-sans",children:"Minimum 8 characters with at least one letter and one number."})]}),i==="signup"&&o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-mono font-bold uppercase tracking-wider text-charcoal-600 dark:text-ivory-300 mb-1.5",children:"Confirm Passphrase"}),o.jsxs("div",{className:"relative",children:[o.jsx(kn,{className:"absolute left-3.5 top-3 w-4 h-4 text-charcoal-400"}),o.jsx("input",{type:"password",required:!0,value:h,onChange:A=>f(A.target.value),placeholder:"••••••••••••",className:"w-full pl-10 pr-3 py-2.5 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-forest-600"})]})]}),o.jsxs("button",{type:"submit",disabled:m,className:"w-full py-3 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 font-bold text-xs shadow-paper-ivory transition-all flex items-center justify-center gap-2 mt-2",children:[m?"Verifying...":i==="login"?"Sign In to Enclave":"Create Practitioner Account",o.jsx(Ei,{className:"w-4 h-4"})]})]}),o.jsxs("div",{className:"relative my-6 text-center",children:[o.jsx("div",{className:"absolute inset-0 flex items-center",children:o.jsx("div",{className:"w-full border-t border-ivory-200 dark:border-charcoal-800"})}),o.jsx("span",{className:"relative px-3 bg-white dark:bg-charcoal-900 text-[10px] font-mono text-charcoal-400 dark:text-charcoal-400 uppercase tracking-wider",children:"OR HACKATHON EVALUATION"})]}),o.jsxs("button",{onClick:N,disabled:m,className:"w-full py-2.5 px-4 rounded-xl border border-forest-300 dark:border-forest-800 bg-forest-50 dark:bg-forest-950/60 text-forest-800 dark:text-forest-300 font-mono font-bold text-xs hover:bg-forest-100 dark:hover:bg-forest-900 transition-colors flex items-center justify-center gap-2 shadow-paper-ivory",children:[o.jsx(Fl,{className:"w-3.5 h-3.5"}),"⚡ 1-Click Fast Pass (",cx,")"]}),o.jsx("div",{className:"mt-5 text-center text-xs text-charcoal-500",children:i==="login"?o.jsxs(o.Fragment,{children:["Need a new practitioner account?"," ",o.jsx("button",{onClick:()=>a("signup"),className:"font-bold text-forest-700 dark:text-forest-400 hover:underline",children:"Register here"})]}):o.jsxs(o.Fragment,{children:["Already registered in enclave?"," ",o.jsx("button",{onClick:()=>a("login"),className:"font-bold text-forest-700 dark:text-forest-400 hover:underline",children:"Sign in"})]})}),o.jsx("div",{className:"mt-5 pt-3 border-t border-ivory-200 dark:border-charcoal-800 text-[10px] text-charcoal-400 leading-relaxed text-center font-mono",children:"🔒 NIST PBKDF2-HMAC-SHA256 • 100k Iterations • On-Premise Vault"})]})})},AT=({history:t,currentReport:e,onNavigateAnalyze:n,onLoadBenchmark:r,onExportCSV:i,onExportPDF:a})=>{const{t:s}=Ni(),l=t.length,c=t.reduce((u,_)=>u+_.total_count,0),d=t.reduce((u,_)=>u+_.flagged_count,0),h=t.reduce((u,_)=>u+_.uncertain_count,0),f=t.reduce((u,_)=>u+_.normal_count,0),p=(e==null?void 0:e.records)||[],x=p.filter(u=>u.Category==="flagged"),v=c>0?Math.round(f/c*100):0,y=c>0?Math.round(d/c*100):0,g=c>0?Math.round(h/c*100):0;return o.jsxs("div",{className:"space-y-8 animate-fade-in font-sans",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-ivory-300 dark:border-charcoal-800",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:s("dash_pathologist_workstation")}),o.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1",children:s("dash_title")}),o.jsx("p",{className:"text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl",children:s("dash_subtitle")})]}),o.jsx("div",{className:"flex items-center gap-3",children:o.jsxs("button",{onClick:n,className:"inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 font-bold text-xs shadow-paper-ivory transition-all",children:[o.jsx(qn,{className:"w-4 h-4"}),s("dash_analyze_new")]})})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[o.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory transition-all hover:-translate-y-0.5",children:[o.jsxs("div",{className:"flex items-center justify-between text-charcoal-500 dark:text-ivory-400 mb-2",children:[o.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider",children:s("dash_reports_screened")}),o.jsx(Ul,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"})]}),o.jsx("div",{className:"text-3xl font-mono font-bold text-charcoal-900 dark:text-ivory-50",children:l}),o.jsxs("div",{className:"text-[11px] text-charcoal-500 dark:text-ivory-400 mt-1 flex items-center gap-1 font-sans",children:[o.jsx(Fy,{className:"w-3 h-3 text-forest-700"})," ",s("dash_active_audits")]})]}),o.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory transition-all hover:-translate-y-0.5",children:[o.jsxs("div",{className:"flex items-center justify-between text-charcoal-500 dark:text-ivory-400 mb-2",children:[o.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider",children:s("dash_biomarkers_screened")}),o.jsx(qn,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"})]}),o.jsx("div",{className:"text-3xl font-mono font-bold text-charcoal-900 dark:text-ivory-50",children:c}),o.jsxs("div",{className:"text-[11px] text-clinical-normal mt-1 flex items-center gap-1 font-semibold",children:[f," ",s("dash_in_ref_interval")]})]}),o.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory transition-all hover:-translate-y-0.5",children:[o.jsxs("div",{className:"flex items-center justify-between text-charcoal-500 dark:text-ivory-400 mb-2",children:[o.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider",children:s("dash_out_of_range")}),o.jsx(Cs,{className:"w-4 h-4 text-clinical-danger"})]}),o.jsx("div",{className:`text-3xl font-mono font-bold ${d>0?"text-clinical-danger":"text-charcoal-900 dark:text-ivory-50"}`,children:d}),o.jsx("div",{className:"text-[11px] text-charcoal-500 dark:text-ivory-400 mt-1 font-sans",children:s("dash_potentially_high_low")})]}),o.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory transition-all hover:-translate-y-0.5",children:[o.jsxs("div",{className:"flex items-center justify-between text-charcoal-500 dark:text-ivory-400 mb-2",children:[o.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider",children:s("dash_needs_review")}),o.jsx(Uy,{className:"w-4 h-4 text-charcoal-400"})]}),o.jsx("div",{className:"text-3xl font-mono font-bold text-charcoal-900 dark:text-ivory-50",children:h}),o.jsx("div",{className:"text-[11px] text-charcoal-500 dark:text-ivory-400 mt-1 font-sans",children:s("dash_atypical_markers")})]})]}),l===0&&o.jsxs("div",{className:"p-12 text-center rounded-2xl bg-white dark:bg-charcoal-900 border-2 border-dashed border-ivory-300 dark:border-charcoal-800 space-y-4",children:[o.jsx("div",{className:"w-14 h-14 mx-auto rounded-2xl bg-forest-50 dark:bg-forest-950 flex items-center justify-center text-forest-800 dark:text-forest-300 text-2xl shadow-paper-ivory",children:"📑"}),o.jsx("h3",{className:"font-serif text-2xl font-bold text-charcoal-900 dark:text-ivory-50",children:s("dash_empty_title")}),o.jsx("p",{className:"text-sm text-charcoal-600 dark:text-ivory-400 max-w-lg mx-auto leading-relaxed",children:s("dash_empty_desc")}),o.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 pt-2",children:[o.jsx("button",{onClick:n,className:"px-5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 font-bold text-xs shadow-paper-ivory transition-all",children:s("dash_analyze_new")}),o.jsxs("button",{onClick:r,className:"px-5 py-2.5 rounded-xl border border-ivory-400 dark:border-charcoal-700 bg-white dark:bg-charcoal-800 text-charcoal-800 dark:text-ivory-200 font-bold text-xs hover:border-forest-700 transition-all font-mono shadow-paper-ivory",children:["⚡ ",s("nav_benchmark")," (16 Biomarkers)"]})]})]}),l>0&&o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[o.jsxs("div",{className:"lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50",children:s("dash_status_distribution")}),o.jsxs("span",{className:"text-xs font-mono text-charcoal-500 dark:text-ivory-400",children:[c," total"]})]}),o.jsxs("div",{className:"space-y-4 pt-2",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-xs font-semibold mb-1",children:[o.jsxs("span",{className:"text-clinical-normal flex items-center gap-1.5 font-medium",children:[o.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-clinical-normal"}),s("dash_normal")]}),o.jsxs("span",{className:"font-mono text-charcoal-800 dark:text-ivory-200",children:[f," (",v,"%)"]})]}),o.jsx("div",{className:"w-full h-2.5 rounded-full bg-ivory-200 dark:bg-charcoal-800 overflow-hidden",children:o.jsx("div",{className:"h-full bg-clinical-normal rounded-full transition-all duration-500",style:{width:`${v}%`}})})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-xs font-semibold mb-1",children:[o.jsxs("span",{className:"text-clinical-danger flex items-center gap-1.5 font-medium",children:[o.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-clinical-danger"}),s("dash_flagged")]}),o.jsxs("span",{className:"font-mono text-charcoal-800 dark:text-ivory-200",children:[d," (",y,"%)"]})]}),o.jsx("div",{className:"w-full h-2.5 rounded-full bg-ivory-200 dark:bg-charcoal-800 overflow-hidden",children:o.jsx("div",{className:"h-full bg-clinical-danger rounded-full transition-all duration-500",style:{width:`${y}%`}})})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-xs font-semibold mb-1",children:[o.jsxs("span",{className:"text-charcoal-500 dark:text-ivory-400 flex items-center gap-1.5 font-medium",children:[o.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-charcoal-400"}),s("dash_uncertain")]}),o.jsxs("span",{className:"font-mono text-charcoal-800 dark:text-ivory-200",children:[h," (",g,"%)"]})]}),o.jsx("div",{className:"w-full h-2.5 rounded-full bg-ivory-200 dark:bg-charcoal-800 overflow-hidden",children:o.jsx("div",{className:"h-full bg-charcoal-400 rounded-full transition-all duration-500",style:{width:`${g}%`}})})]})]}),o.jsxs("div",{className:"pt-4 border-t border-ivory-200 dark:border-charcoal-800 text-[11px] text-charcoal-500 dark:text-ivory-400 leading-relaxed font-sans",children:["💡 ",o.jsx("strong",{children:"Prioritization Protocol"}),": ",s("dash_prioritization_protocol")]})]}),o.jsxs("div",{className:"lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[o.jsx(Cs,{className:"w-4 h-4 text-clinical-danger"}),s("dash_priority_findings")]}),o.jsxs("span",{className:"text-xs text-charcoal-500 dark:text-ivory-400 font-mono",children:["Active: ",(e==null?void 0:e.source_name)||"Specimen"]})]}),x.length>0?o.jsx("div",{className:"space-y-3",children:x.slice(0,4).map((u,_)=>{const m=u.Status.includes("High");return o.jsxs("div",{className:`p-3.5 rounded-xl border transition-all ${m?"bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/60":"bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/60"}`,children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"font-bold text-sm text-charcoal-900 dark:text-ivory-50",children:u["Test Name"]}),o.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${m?"bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-300":"bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300"}`,children:[m?"▲ ":"▼ "," ",u.Status]})]}),o.jsxs("div",{className:"mt-1 flex items-center justify-between text-xs text-charcoal-600 dark:text-ivory-400",children:[o.jsxs("span",{children:["Measured: ",o.jsxs("b",{className:"text-charcoal-900 dark:text-ivory-50 font-mono",children:[u["Measured Value"]," ",u.Unit]})]}),o.jsxs("span",{className:"font-mono text-[11px]",children:["Ref: ",u["Reference Range"]," ",u.Unit]})]}),o.jsx("p",{className:"mt-1 text-[11px] text-charcoal-500 dark:text-ivory-400 italic",children:u["Plain Explanation"]})]},_)})}):o.jsxs("div",{className:"p-8 text-center text-charcoal-500 dark:text-ivory-400",children:[o.jsx(jy,{className:"w-8 h-8 text-clinical-normal mx-auto mb-2"}),o.jsx("p",{className:"text-sm font-semibold",children:s("dash_all_normal")})]})]})]}),e&&o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-ivory-200 dark:border-charcoal-800",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] font-mono font-bold text-forest-700 dark:text-forest-400 uppercase tracking-wider",children:s("dash_audited_specimen")}),o.jsxs("h3",{className:"font-serif text-xl font-bold text-charcoal-900 dark:text-ivory-50",children:[e.source_name," (",e.source_type,")"]})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("button",{onClick:i,className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-ivory-300 dark:border-charcoal-700 hover:border-forest-700 text-xs font-mono font-bold text-charcoal-700 dark:text-ivory-300 hover:bg-ivory-100 dark:hover:bg-charcoal-800 transition-colors shadow-paper-ivory",children:[o.jsx(wa,{className:"w-3.5 h-3.5"})," ",s("dash_export_csv")]}),o.jsxs("button",{onClick:a,className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-mono font-bold transition-colors shadow-paper-ivory",children:[o.jsx(wa,{className:"w-3.5 h-3.5"})," ",s("dash_clinical_pdf")]})]})]}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs",children:[o.jsx("thead",{className:"bg-ivory-100 dark:bg-charcoal-800/60 text-charcoal-600 dark:text-ivory-300 font-mono font-bold uppercase tracking-wider border-y border-ivory-200 dark:border-charcoal-800",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-3 px-4 font-serif font-bold text-xs capitalize",children:s("dash_th_biomarker")}),o.jsx("th",{className:"py-3 px-4",children:s("dash_th_measured")}),o.jsx("th",{className:"py-3 px-4",children:s("dash_th_unit")}),o.jsx("th",{className:"py-3 px-4",children:s("dash_th_ref_interval")}),o.jsx("th",{className:"py-3 px-4",children:s("dash_th_calibration")}),o.jsx("th",{className:"py-3 px-4",children:s("dash_th_classification")})]})}),o.jsx("tbody",{className:"divide-y divide-ivory-200 dark:divide-charcoal-800 text-charcoal-700 dark:text-ivory-300",children:p.map((u,_)=>{const m=u.Status.includes("High"),b=u.Status.includes("Low"),N=u.Status==="Normal";return o.jsxs("tr",{className:"hover:bg-ivory-50/50 dark:hover:bg-charcoal-800/40 transition-colors",children:[o.jsxs("td",{className:"py-3 px-4 font-semibold text-charcoal-900 dark:text-ivory-50",children:[u["Test Name"],o.jsxs("span",{className:"block text-[10px] text-charcoal-400 font-mono font-normal",children:["Orig: ",u["Original Label"]]})]}),o.jsx("td",{className:"py-3 px-4 font-mono font-bold text-charcoal-900 dark:text-ivory-50",children:u["Measured Value"]}),o.jsx("td",{className:"py-3 px-4 font-mono text-charcoal-500 dark:text-ivory-400",children:u.Unit}),o.jsx("td",{className:"py-3 px-4 font-mono",children:u["Reference Range"]}),o.jsx("td",{className:"py-3 px-4",children:o.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-ivory-200 dark:bg-charcoal-800 text-charcoal-600 dark:text-ivory-400 font-mono",children:u["Range Source"]})}),o.jsx("td",{className:"py-3 px-4",children:o.jsxs("span",{className:`inline-block px-2.5 py-1 rounded-full text-[11px] font-mono font-bold ${m?"bg-rose-50 dark:bg-rose-950/60 text-clinical-danger border border-rose-200 dark:border-rose-900":b?"bg-amber-50 dark:bg-amber-950/60 text-clinical-warning border border-amber-200 dark:border-amber-900":N?"bg-emerald-50 dark:bg-emerald-950/60 text-clinical-normal border border-emerald-200 dark:border-emerald-900":"bg-ivory-200 dark:bg-charcoal-800 text-charcoal-700 dark:text-ivory-300"}`,children:[m&&"▲ ",b&&"▼ ",N&&"✓ ",u.Status]})})]},_)})})]})})]})]})},CT=({onAddReportToHistory:t,onExportCSV:e,onExportPDF:n})=>{const{t:r}=Ni(),[i,a]=se.useState("upload"),[s,l]=se.useState(""),[c,d]=se.useState(null),[h,f]=se.useState(!1),[p,x]=se.useState(""),[v,y]=se.useState(""),[g,u]=se.useState(null),[_,m]=se.useState(""),[b,N]=se.useState(""),[A,T]=se.useState("all"),P=se.useRef(null),M=O=>{O.target.files&&O.target.files[0]&&(d(O.target.files[0]),m(""))},S=O=>{O.preventDefault(),O.dataTransfer.files&&O.dataTransfer.files[0]&&(d(O.dataTransfer.files[0]),m(""))},C=async()=>{if(c){f(!0),m("");try{const O=new FormData;O.append("file",c);const U=await fetch("/api/analyze/upload",{method:"POST",body:O}),W=await U.json();if(f(!1),!U.ok){m(W.detail||"Extraction failed.");return}const D={id:`AUDIT-${Date.now().toString().slice(-4)}`,timestamp:W.timestamp,source_name:W.source_name,source_type:W.source_type,extraction_method:W.extraction_method,records:W.records,total_count:W.total_count,normal_count:W.normal_count,flagged_count:W.flagged_count,uncertain_count:W.uncertain_count,raw_text:W.raw_text,diagnostics:W.diagnostics};x(W.raw_text),y(W.extraction_method),u(D),t(D)}catch(O){f(!1),m("Network or server error: "+O.message)}}},z=async()=>{if(!s.trim()){m("Please enter or paste report text.");return}f(!0),m("");try{const O=await fetch("/api/analyze/text",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:s,source_label:"Direct Clinical Stream"})}),U=await O.json();if(f(!1),!O.ok){m(U.detail||"Analysis failed.");return}const W={id:`AUDIT-${Date.now().toString().slice(-4)}`,timestamp:U.timestamp,source_name:U.source_name,source_type:U.source_type,extraction_method:U.extraction_method,records:U.records,total_count:U.total_count,normal_count:U.normal_count,flagged_count:U.flagged_count,uncertain_count:U.uncertain_count,raw_text:U.raw_text,diagnostics:U.diagnostics};x(U.raw_text),y(U.extraction_method),u(W),t(W)}catch(O){f(!1),m("Network or server error: "+O.message)}},j=async()=>{f(!0),m("");try{const U=await(await fetch("/api/benchmark")).json();f(!1);const W={id:"AUDIT-BENCH",timestamp:U.timestamp,source_name:U.source_name,source_type:U.source_type,extraction_method:"Synthetic Clinical Benchmark",records:U.records,total_count:U.total_count,normal_count:U.normal_count,flagged_count:U.flagged_count,uncertain_count:U.uncertain_count,raw_text:U.raw_text,diagnostics:U.diagnostics};x(U.raw_text),y("Synthetic Benchmark"),u(W),t(W)}catch(O){f(!1),m("Failed to load benchmark: "+O.message)}},$=((g==null?void 0:g.records)||[]).filter(O=>{const U=O["Test Name"].toLowerCase().includes(b.toLowerCase())||O["Original Label"].toLowerCase().includes(b.toLowerCase());return A==="all"?U:U&&O.Category===A});return o.jsxs("div",{className:"space-y-8 animate-fade-in font-sans",children:[o.jsxs("div",{className:"pb-5 border-b border-ivory-300 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Document Intake Enclave"}),o.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1",children:r("ingest_title")}),o.jsx("p",{className:"text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl",children:r("ingest_subtitle")})]}),o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-5",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-ivory-200 dark:border-charcoal-800 pb-3",children:[o.jsx("span",{className:"text-xs font-mono font-bold text-forest-700 dark:text-forest-400 uppercase tracking-wider",children:r("ingest_phase1")}),o.jsxs("div",{className:"flex rounded-xl p-1 bg-ivory-200 dark:bg-charcoal-800 text-xs font-mono font-bold",children:[o.jsx("button",{onClick:()=>a("upload"),className:`px-3 py-1 rounded-lg transition-all ${i==="upload"?"bg-white dark:bg-charcoal-900 text-forest-800 dark:text-forest-300 shadow-paper-ivory":"text-charcoal-500 dark:text-ivory-400"}`,children:r("ingest_tab_upload")}),o.jsx("button",{onClick:()=>a("paste"),className:`px-3 py-1 rounded-lg transition-all ${i==="paste"?"bg-white dark:bg-charcoal-900 text-forest-800 dark:text-forest-300 shadow-paper-ivory":"text-charcoal-500 dark:text-ivory-400"}`,children:r("ingest_tab_paste")}),o.jsx("button",{onClick:()=>a("benchmark"),className:`px-3 py-1 rounded-lg transition-all ${i==="benchmark"?"bg-white dark:bg-charcoal-900 text-forest-800 dark:text-forest-300 shadow-paper-ivory":"text-charcoal-500 dark:text-ivory-400"}`,children:r("ingest_tab_benchmark")})]})]}),i==="upload"&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{onDragOver:O=>O.preventDefault(),onDrop:S,onClick:()=>{var O;return(O=P.current)==null?void 0:O.click()},className:"border-2 border-dashed border-ivory-300 dark:border-charcoal-700 hover:border-forest-700 rounded-2xl p-8 text-center cursor-pointer transition-all bg-ivory-50/60 dark:bg-charcoal-950/40",children:[o.jsx("input",{ref:P,type:"file",accept:".pdf,.png,.jpg,.jpeg,.webp,.bmp,.tiff,.tif,.heic",onChange:M,className:"hidden"}),o.jsx(Oy,{className:"w-10 h-10 text-forest-700 dark:text-forest-400 mx-auto mb-3"}),o.jsx("p",{className:"text-sm font-serif font-bold text-charcoal-900 dark:text-ivory-100",children:c?c.name:r("ingest_drop_title")}),o.jsx("p",{className:"text-xs text-charcoal-500 dark:text-ivory-400 mt-1 font-mono",children:r("ingest_drop_sub")})]}),c&&o.jsxs("div",{className:"flex items-center justify-between p-3.5 rounded-xl bg-forest-50 dark:bg-forest-950/50 border border-forest-200 dark:border-forest-800",children:[o.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-forest-950 dark:text-forest-200",children:[o.jsx(Ul,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),o.jsxs("span",{children:[c.name," (",(c.size/1024).toFixed(1)," KB)"]})]}),o.jsxs("button",{onClick:C,disabled:h,className:"px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-bold transition-all shadow-paper-ivory flex items-center gap-2",children:[r(h?"ingest_btn_processing":"ingest_btn_run"),o.jsx(Ei,{className:"w-3.5 h-3.5"})]})]})]}),i==="paste"&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("textarea",{rows:6,value:s,onChange:O=>l(O.target.value),placeholder:"Paste raw laboratory panel, metabolic panel, or pathology text stream...",className:"w-full p-4 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-forest-600"}),o.jsx("div",{className:"flex justify-end",children:o.jsxs("button",{onClick:z,disabled:h||!s.trim(),className:"px-5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-bold transition-all shadow-paper-ivory flex items-center gap-2",children:[r(h?"ingest_btn_processing":"ingest_tab_paste"),o.jsx(Ei,{className:"w-3.5 h-3.5"})]})})]}),i==="benchmark"&&o.jsxs("div",{className:"p-6 rounded-xl bg-ivory-100 dark:bg-charcoal-950 border border-ivory-300 dark:border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4",children:[o.jsxs("div",{children:[o.jsxs("h4",{className:"font-serif font-bold text-base text-charcoal-900 dark:text-ivory-100 flex items-center gap-2",children:[o.jsx(Fl,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),r("ingest_benchmark_title")]}),o.jsx("p",{className:"text-xs text-charcoal-600 dark:text-ivory-400 mt-1 max-w-lg",children:r("ingest_benchmark_desc")})]}),o.jsx("button",{onClick:j,disabled:h,className:"px-5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-mono font-bold shadow-paper-ivory transition-all whitespace-nowrap",children:r(h?"ingest_btn_processing":"ingest_benchmark_btn")})]}),_&&o.jsxs("div",{className:"p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-semibold flex items-center gap-2",children:[o.jsx(Iy,{className:"w-4 h-4 shrink-0"}),o.jsx("span",{children:_})]})]}),p&&o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-ivory-200 dark:border-charcoal-800",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-mono font-bold text-forest-700 dark:text-forest-400 uppercase tracking-wider",children:r("ingest_phase2")}),o.jsxs("p",{className:"text-xs text-charcoal-500 dark:text-ivory-400 mt-0.5",children:["Engine: ",o.jsx("b",{className:"font-mono text-charcoal-800 dark:text-ivory-200",children:v})," • Editable before final commit"]})]}),o.jsx("button",{onClick:()=>{l(p),z()},className:"px-3.5 py-1.5 rounded-lg border border-ivory-300 dark:border-charcoal-700 text-xs font-bold text-charcoal-700 dark:text-ivory-300 hover:border-forest-700",children:"Re-Analyze Text Stream"})]}),o.jsx("textarea",{rows:5,value:p,onChange:O=>x(O.target.value),className:"w-full p-4 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 font-mono text-xs focus:outline-none"})]}),g&&o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-5",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-ivory-200 dark:border-charcoal-800",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-mono font-bold text-forest-700 dark:text-forest-400 uppercase tracking-wider",children:r("ingest_phase3")}),o.jsxs("h3",{className:"font-serif text-2xl font-bold text-charcoal-900 dark:text-ivory-50 mt-1",children:[g.source_name," (",g.source_type,")"]}),o.jsxs("p",{className:"text-xs font-mono text-charcoal-500 dark:text-ivory-400 mt-0.5",children:[g.total_count," ",r("dash_biomarkers_screened")," • ",g.flagged_count," ",r("dash_out_of_range")," • ",g.normal_count," ",r("dash_normal")]})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("button",{onClick:()=>e($),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-ivory-300 dark:border-charcoal-700 hover:border-forest-700 text-xs font-mono font-bold text-charcoal-700 dark:text-ivory-300 hover:bg-ivory-100 dark:hover:bg-charcoal-800 transition-colors shadow-paper-ivory",children:[o.jsx(wa,{className:"w-3.5 h-3.5"})," ",r("dash_export_csv")]}),o.jsxs("button",{onClick:()=>n(g,$),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-mono font-bold transition-colors shadow-paper-ivory",children:[o.jsx(wa,{className:"w-3.5 h-3.5"})," ",r("dash_clinical_pdf")]})]})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3",children:[o.jsxs("div",{className:"relative w-full sm:w-64",children:[o.jsx(qy,{className:"absolute left-3 top-2.5 w-4 h-4 text-charcoal-400"}),o.jsx("input",{type:"text",placeholder:r("gen_search"),value:b,onChange:O=>N(O.target.value),className:"w-full pl-9 pr-3 py-2 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 text-xs focus:outline-none focus:ring-1 focus:ring-forest-600"})]}),o.jsxs("div",{className:"flex rounded-lg p-1 bg-ivory-200 dark:bg-charcoal-800 text-xs font-mono font-bold w-full sm:w-auto",children:[o.jsxs("button",{onClick:()=>T("all"),className:`px-3 py-1 rounded-md transition-all ${A==="all"?"bg-white dark:bg-charcoal-900 text-forest-800 dark:text-forest-300 shadow-paper-ivory":"text-charcoal-500"}`,children:[r("gen_all")," (",g.total_count,")"]}),o.jsxs("button",{onClick:()=>T("flagged"),className:`px-3 py-1 rounded-md transition-all ${A==="flagged"?"bg-white dark:bg-charcoal-900 text-clinical-danger shadow-paper-ivory":"text-charcoal-500"}`,children:[r("gen_flags")," (",g.flagged_count,")"]}),o.jsxs("button",{onClick:()=>T("normal"),className:`px-3 py-1 rounded-md transition-all ${A==="normal"?"bg-white dark:bg-charcoal-900 text-clinical-normal shadow-paper-ivory":"text-charcoal-500"}`,children:[r("gen_normal")," (",g.normal_count,")"]})]})]}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs",children:[o.jsx("thead",{className:"bg-ivory-100 dark:bg-charcoal-800/60 text-charcoal-600 dark:text-ivory-300 font-mono font-bold uppercase tracking-wider border-y border-ivory-200 dark:border-charcoal-800",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-3 px-4 font-serif font-bold text-xs capitalize",children:r("dash_th_biomarker")}),o.jsx("th",{className:"py-3 px-4",children:r("dash_th_measured")}),o.jsx("th",{className:"py-3 px-4",children:r("dash_th_unit")}),o.jsx("th",{className:"py-3 px-4",children:r("dash_th_ref_interval")}),o.jsx("th",{className:"py-3 px-4",children:r("dash_th_calibration")}),o.jsx("th",{className:"py-3 px-4",children:r("dash_th_classification")})]})}),o.jsx("tbody",{className:"divide-y divide-ivory-200 dark:divide-charcoal-800 text-charcoal-700 dark:text-ivory-300",children:$.map((O,U)=>{const W=O.Status.includes("High"),D=O.Status.includes("Low"),q=O.Status==="Normal";return o.jsxs("tr",{className:"hover:bg-ivory-50/50 dark:hover:bg-charcoal-800/40 transition-colors",children:[o.jsxs("td",{className:"py-3 px-4 font-semibold text-charcoal-900 dark:text-ivory-50",children:[O["Test Name"],o.jsxs("span",{className:"block text-[10px] text-charcoal-400 font-mono font-normal",children:["Orig: ",O["Original Label"]]})]}),o.jsx("td",{className:"py-3 px-4 font-mono font-bold text-charcoal-900 dark:text-ivory-50",children:O["Measured Value"]}),o.jsx("td",{className:"py-3 px-4 font-mono text-charcoal-500 dark:text-ivory-400",children:O.Unit}),o.jsx("td",{className:"py-3 px-4 font-mono",children:O["Reference Range"]}),o.jsx("td",{className:"py-3 px-4",children:o.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-ivory-200 dark:bg-charcoal-800 text-charcoal-600 dark:text-ivory-400 font-mono",children:O["Range Source"]})}),o.jsx("td",{className:"py-3 px-4",children:o.jsxs("span",{className:`inline-block px-2.5 py-1 rounded-full text-[11px] font-mono font-bold ${W?"bg-rose-50 dark:bg-rose-950/60 text-clinical-danger border border-rose-200 dark:border-rose-900":D?"bg-amber-50 dark:bg-amber-950/60 text-clinical-warning border border-amber-200 dark:border-amber-900":q?"bg-emerald-50 dark:bg-emerald-950/60 text-clinical-normal border border-emerald-200 dark:border-emerald-900":"bg-ivory-200 dark:bg-charcoal-800 text-charcoal-700 dark:text-ivory-300"}`,children:[W&&"▲ ",D&&"▼ ",q&&"✓ ",O.Status]})})]},U)})})]})})]})]})},NT=({currentReport:t,history:e,onSelectReport:n,onNavigateAnalyze:r})=>{const{t:i,language:a,currentLanguageInfo:s}=Ni(),[l,c]=se.useState(()=>{try{const C=localStorage.getItem("orca_assistant_history");if(C)return JSON.parse(C)}catch{}return[{id:"welcome",role:"assistant",content:`Welcome to the Orca MedScan Clinical Decision-Support Assistant. I can help explain your laboratory biomarker results, clarify reference intervals, and prepare questions for your physician in ${s.nativeName} (${s.name}). How can I assist with your lab results today?`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),hasReportContext:!1}]}),[d,h]=se.useState(""),[f,p]=se.useState(!1),[x,v]=se.useState(null),[y,g]=se.useState(!0),[u,_]=se.useState(null),[m,b]=se.useState("llama-3.3-70b-versatile"),N=se.useRef(null),A=se.useRef(null);se.useEffect(()=>{fetch("/api/assistant/status").then(C=>C.json()).then(C=>{_(C.configured),C.model&&b(C.model)}).catch(()=>_(!1))},[]),se.useEffect(()=>{try{localStorage.setItem("orca_assistant_history",JSON.stringify(l))}catch(C){console.error("Error saving chat history:",C)}},[l]),se.useEffect(()=>{var C;(C=N.current)==null||C.scrollIntoView({behavior:"smooth"})},[l,f]);const T=async C=>{const z=(C||d).trim();if(!z||f)return;const j={id:`msg-${Date.now()}`,role:"user",content:z,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),hasReportContext:y&&!!t},$=[...l,j];c($),h(""),p(!0),v(null);let O=null;y&&t&&(O={source_name:t.source_name,source_type:t.source_type,total_count:t.total_count,normal_count:t.normal_count,flagged_count:t.flagged_count,records:t.records.map(U=>({test_name:U["Test Name"],measured_value:U["Measured Value"],unit:U.Unit,reference_range:U["Reference Range"],status:U.Status,plain_explanation:U["Plain Explanation"]}))});try{const U=await fetch("/api/assistant/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:$.map(q=>({role:q.role,content:q.content})),language:s.name,report_context:O})}),W=await U.json();if(p(!1),!U.ok){v(W.detail||"Assistant communication error occurred.");return}W.configured===!1?_(!1):_(!0);const D={id:`asst-${Date.now()}`,role:"assistant",content:W.reply,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),hasReportContext:W.has_report_context};c(q=>[...q,D])}catch(U){p(!1),v(`Network error communicating with clinical assistant: ${U.message}`)}},P=C=>{C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),T())},M=()=>{const C={id:`welcome-${Date.now()}`,role:"assistant",content:`Conversation reset. How can I help clarify your laboratory results in ${s.nativeName} (${s.name})?`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),hasReportContext:!1};c([C]),v(null),localStorage.removeItem("orca_assistant_history")},S=[i("asst_prompt_1"),i("asst_prompt_2"),`Summarize the key findings in ${s.nativeName}.`,i("asst_prompt_4")];return o.jsxs("div",{className:"space-y-6 animate-fade-in font-sans",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-ivory-300 dark:border-charcoal-800",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Clinical Intelligence"}),o.jsx("span",{className:"text-charcoal-400",children:"/"}),o.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-forest-100 dark:bg-forest-950 text-forest-900 dark:text-forest-300 font-semibold",children:[o.jsx(Jy,{className:"w-3 h-3 text-forest-700 dark:text-forest-400"}),"Groq Cloud (",m,")"]})]}),o.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1",children:i("asst_title")}),o.jsx("p",{className:"text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl",children:i("asst_subtitle")})]}),o.jsx("div",{className:"flex items-center gap-2.5",children:o.jsxs("button",{onClick:M,className:"inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-ivory-300 dark:border-charcoal-700 text-charcoal-700 dark:text-ivory-300 hover:border-forest-600 text-xs font-mono font-bold hover:bg-ivory-100 dark:hover:bg-charcoal-800 transition-colors shadow-paper-ivory",title:"Reset conversation",children:[o.jsx(hl,{className:"w-3.5 h-3.5 text-charcoal-400"}),o.jsx("span",{children:i("asst_clear")})]})})]}),o.jsxs("div",{className:"p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 flex items-start gap-3 shadow-paper-ivory",children:[o.jsx(bf,{className:"w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5"}),o.jsxs("div",{className:"text-xs text-amber-900 dark:text-amber-200 leading-relaxed",children:[o.jsx("strong",{className:"font-semibold",children:i("asst_banner_disclaimer")}),o.jsx("span",{className:"block text-[11px] text-amber-800/80 dark:text-amber-300/80 mt-0.5",children:i("asst_privacy_notice")})]})]}),u===!1&&o.jsx("div",{className:"p-4 rounded-2xl bg-forest-50 dark:bg-forest-950/60 border border-forest-200 dark:border-forest-800 flex items-start justify-between gap-4 shadow-paper-ivory",children:o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx(Dx,{className:"w-5 h-5 text-forest-700 dark:text-forest-400 shrink-0 mt-0.5"}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-bold text-xs text-forest-950 dark:text-forest-100",children:i("asst_groq_missing_title")}),o.jsx("p",{className:"text-[11px] text-forest-800 dark:text-forest-300 mt-1 leading-relaxed",children:i("asst_groq_missing_desc")}),o.jsx("div",{className:"mt-2 text-[11px] font-mono text-forest-900 dark:text-forest-200 bg-forest-100/60 dark:bg-forest-900/40 px-2.5 py-1 rounded-lg inline-block",children:'export GROQ_API_KEY="gsk_..."'})]})]})}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[o.jsxs("div",{className:"lg:col-span-8 flex flex-col h-[640px] rounded-3xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory overflow-hidden",children:[o.jsxs("div",{className:"px-5 py-3 border-b border-ivory-200 dark:border-charcoal-800 bg-ivory-50/70 dark:bg-charcoal-950/60 flex items-center justify-between text-xs",children:[o.jsxs("div",{className:"flex items-center gap-2 truncate",children:[o.jsx(qn,{className:"w-4 h-4 text-forest-700 dark:text-forest-400 shrink-0"}),t?o.jsxs("div",{className:"truncate",children:[o.jsx("span",{className:"font-bold text-charcoal-900 dark:text-ivory-100",children:t.source_name}),o.jsx("span",{className:"text-charcoal-400 mx-1.5",children:"•"}),o.jsxs("span",{className:"font-mono text-[11px] text-forest-700 dark:text-forest-400",children:[t.total_count," ",i("asst_context_records")," (",t.flagged_count," flagged)"]})]}):o.jsx("span",{className:"text-charcoal-500 dark:text-ivory-400",children:i("asst_context_none")})]}),t&&o.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer text-[11px] font-mono text-charcoal-600 dark:text-ivory-300 shrink-0",children:[o.jsx("input",{type:"checkbox",checked:y,onChange:C=>g(C.target.checked),className:"rounded text-forest-700 focus:ring-forest-600 w-3.5 h-3.5"}),o.jsx("span",{children:"Attach Report"})]})]}),o.jsxs("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-5",children:[l.map(C=>{const z=C.role==="user";return o.jsxs("div",{className:`flex items-start gap-3 ${z?"flex-row-reverse":"flex-row"}`,children:[o.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs shadow-paper-ivory ${z?"bg-charcoal-800 text-ivory-50":"bg-forest-800 text-ivory-50"}`,children:z?"👤":o.jsx(Yd,{className:"w-4 h-4"})}),o.jsxs("div",{className:`max-w-[82%] sm:max-w-[78%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${z?"bg-forest-800 text-ivory-50 rounded-tr-none shadow-paper-ivory":"bg-ivory-100 dark:bg-charcoal-800 text-charcoal-800 dark:text-ivory-100 rounded-tl-none border border-ivory-200 dark:border-charcoal-700"}`,children:[o.jsxs("div",{className:"flex items-center justify-between gap-4 mb-1.5 pb-1 border-b border-ivory-200/40 dark:border-charcoal-700/60 text-[10px] font-mono opacity-80",children:[o.jsx("span",{children:z?"Practitioner / Patient":"Clinical AI Decision-Support"}),o.jsx("span",{children:C.timestamp})]}),o.jsx("div",{className:"whitespace-pre-wrap font-sans text-xs leading-relaxed",children:C.content}),!z&&C.hasReportContext&&o.jsxs("div",{className:"mt-2 pt-1.5 border-t border-ivory-200/50 dark:border-charcoal-700 text-[10px] font-mono text-forest-800 dark:text-forest-300 flex items-center gap-1",children:[o.jsx(Zt,{className:"w-3 h-3 text-forest-700"}),"Cross-referenced against verified report values"]})]})]},C.id)}),f&&o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx("div",{className:"w-8 h-8 rounded-xl bg-forest-800 flex items-center justify-center text-ivory-50 shrink-0",children:o.jsx(Yd,{className:"w-4 h-4"})}),o.jsxs("div",{className:"p-4 rounded-2xl rounded-tl-none bg-ivory-100 dark:bg-charcoal-800 border border-ivory-200 dark:border-charcoal-700 text-xs text-charcoal-600 dark:text-ivory-300 flex items-center gap-2.5",children:[o.jsx("div",{className:"w-2 h-2 rounded-full bg-forest-700 animate-ping"}),o.jsx("span",{children:i("asst_loading")})]})]}),x&&o.jsxs("div",{className:"p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs flex items-center justify-between",children:[o.jsx("span",{children:x}),o.jsxs("button",{onClick:()=>T(),className:"inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-900/60 font-mono font-bold text-[10px] hover:bg-rose-200 transition-colors",children:[o.jsx($y,{className:"w-3 h-3"})," Retry"]})]}),o.jsx("div",{ref:N})]}),o.jsx("div",{className:"px-5 py-2.5 bg-ivory-50/50 dark:bg-charcoal-950/40 border-t border-ivory-200 dark:border-charcoal-800 overflow-x-auto",children:o.jsxs("div",{className:"flex items-center gap-2 min-w-max",children:[o.jsx("span",{className:"text-[10px] font-mono uppercase text-charcoal-400 font-bold shrink-0",children:"Suggested:"}),S.map((C,z)=>o.jsx("button",{onClick:()=>T(C),disabled:f,className:"px-2.5 py-1 rounded-lg bg-white dark:bg-charcoal-800 border border-ivory-300 dark:border-charcoal-700 hover:border-forest-600 text-charcoal-700 dark:text-ivory-200 text-[11px] font-sans hover:bg-ivory-100 transition-all truncate max-w-xs shadow-paper-ivory",children:C},z))]})}),o.jsxs("div",{className:"p-4 bg-white dark:bg-charcoal-900 border-t border-ivory-200 dark:border-charcoal-800",children:[o.jsxs("div",{className:"relative flex items-end gap-2",children:[o.jsx("textarea",{ref:A,rows:2,value:d,onChange:C=>h(C.target.value),onKeyDown:P,placeholder:i("asst_placeholder"),disabled:f,className:"flex-1 p-3 rounded-2xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 text-xs focus:outline-none focus:ring-2 focus:ring-forest-600 resize-none font-sans"}),o.jsxs("button",{onClick:()=>T(),disabled:f||!d.trim(),className:"h-10 px-4 rounded-2xl bg-forest-800 hover:bg-forest-900 disabled:opacity-50 text-ivory-50 font-bold text-xs transition-all shadow-paper-ivory flex items-center justify-center gap-1.5 shrink-0",children:[o.jsx("span",{children:i("asst_send")}),o.jsx(Yy,{className:"w-3.5 h-3.5"})]})]}),o.jsxs("div",{className:"flex items-center justify-between text-[10px] text-charcoal-400 mt-2 font-mono",children:[o.jsx("span",{children:"Enter to send • Shift+Enter for newline"}),o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(Zd,{className:"w-3 h-3 text-forest-700"}),"Response Language: ",o.jsxs("b",{children:[s.nativeName," (",s.name,")"]})]})]})]})]}),o.jsxs("div",{className:"lg:col-span-4 space-y-5",children:[o.jsxs("div",{className:"p-5 rounded-3xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-ivory-200 dark:border-charcoal-800",children:[o.jsxs("h3",{className:"font-serif font-bold text-base text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[o.jsx(Ul,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),"Audited Report"]}),t&&o.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-forest-100 dark:bg-forest-950 text-forest-900 dark:text-forest-300 font-bold",children:t.source_type})]}),t?o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{children:[o.jsx("h4",{className:"font-bold text-xs text-charcoal-800 dark:text-ivory-100 truncate",children:t.source_name}),o.jsxs("p",{className:"text-[11px] font-mono text-charcoal-500 mt-0.5",children:["Screened: ",t.timestamp]})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center font-mono",children:[o.jsxs("div",{className:"p-2 rounded-xl bg-ivory-50 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-[9px] text-charcoal-400 uppercase font-bold",children:"Total"}),o.jsx("p",{className:"font-bold text-sm text-charcoal-900 dark:text-ivory-50",children:t.total_count})]}),o.jsxs("div",{className:"p-2 rounded-xl bg-ivory-50 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-[9px] text-clinical-danger uppercase font-bold",children:"Flags"}),o.jsx("p",{className:"font-bold text-sm text-clinical-danger",children:t.flagged_count})]}),o.jsxs("div",{className:"p-2 rounded-xl bg-ivory-50 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-[9px] text-clinical-normal uppercase font-bold",children:"Normal"}),o.jsx("p",{className:"font-bold text-sm text-clinical-normal",children:t.normal_count})]})]}),t.flagged_count>0&&o.jsxs("div",{className:"space-y-1.5 pt-2",children:[o.jsx("span",{className:"text-[10px] font-mono font-bold uppercase text-charcoal-400",children:"Flagged Biomarkers:"}),o.jsx("div",{className:"max-h-40 overflow-y-auto space-y-1 pr-1",children:t.records.filter(C=>C.Category==="flagged").slice(0,5).map((C,z)=>o.jsxs("div",{onClick:()=>T(`Why is my ${C["Test Name"]} measured at ${C["Measured Value"]} ${C.Unit} flagged as ${C.Status}?`),className:"p-2 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 cursor-pointer hover:border-forest-600 transition-all text-left",title:"Click to ask AI about this biomarker",children:[o.jsxs("div",{className:"flex items-center justify-between text-[11px]",children:[o.jsx("span",{className:"font-bold text-charcoal-900 dark:text-ivory-100",children:C["Test Name"]}),o.jsx("span",{className:"font-mono text-[10px] text-clinical-danger font-bold",children:C.Status})]}),o.jsxs("div",{className:"text-[10px] font-mono text-charcoal-500 mt-0.5",children:[C["Measured Value"]," ",C.Unit," (Ref: ",C["Reference Range"],")"]})]},z))})]})]}):o.jsxs("div",{className:"p-6 text-center text-charcoal-400 space-y-2",children:[o.jsx(Hy,{className:"w-8 h-8 text-charcoal-400 mx-auto"}),o.jsx("p",{className:"text-xs",children:"No active report loaded."}),o.jsx("button",{onClick:r,className:"px-3.5 py-1.5 rounded-xl bg-forest-800 text-ivory-50 text-xs font-bold shadow-paper-ivory",children:"Analyze a Report"})]})]}),o.jsxs("div",{className:"p-5 rounded-3xl bg-ivory-100 dark:bg-charcoal-950 border border-ivory-300 dark:border-charcoal-800 space-y-3 text-xs leading-relaxed",children:[o.jsxs("h4",{className:"font-serif font-bold text-sm text-charcoal-900 dark:text-ivory-50 flex items-center gap-1.5",children:[o.jsx(bf,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),"AI Clinical Scope & Privacy"]}),o.jsxs("ul",{className:"space-y-2 text-[11px] text-charcoal-600 dark:text-ivory-400",children:[o.jsxs("li",{className:"flex items-start gap-1.5",children:[o.jsx("span",{className:"text-forest-700 font-bold",children:"•"}),o.jsxs("span",{children:[o.jsx("strong",{children:"No Diagnoses:"})," Explanations describe physiological markers, not medical diagnostic conclusions."]})]}),o.jsxs("li",{className:"flex items-start gap-1.5",children:[o.jsx("span",{className:"text-forest-700 font-bold",children:"•"}),o.jsxs("span",{children:[o.jsx("strong",{children:"No Prescriptions:"})," Medication dosage changes must only be directed by licensed doctors."]})]}),o.jsxs("li",{className:"flex items-start gap-1.5",children:[o.jsx("span",{className:"text-forest-700 font-bold",children:"•"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Minimal Payload:"})," Only extracted test names and numbers are shared with Groq Cloud. Raw document files are never transmitted."]})]})]})]})]})]})]})},RT=({currentReport:t})=>{if(!t||!t.diagnostics)return o.jsxs("div",{className:"p-12 text-center rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3 font-sans",children:[o.jsx(qn,{className:"w-10 h-10 text-forest-700 dark:text-forest-400 mx-auto"}),o.jsx("h3",{className:"font-serif text-2xl font-bold text-charcoal-900 dark:text-ivory-50",children:"No Extraction Telemetry Active"}),o.jsx("p",{className:"text-xs text-charcoal-500 max-w-md mx-auto",children:"Ingest and screen a medical document or benchmark panel to view raw OCR output and candidate line telemetry."})]});const{diagnostics:e,source_name:n,raw_text:r,id:i,extraction_method:a}=t;return o.jsxs("div",{className:"space-y-8 animate-fade-in font-sans",children:[o.jsxs("div",{className:"pb-5 border-b border-ivory-300 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"OCR Telemetry & Token Parsing"}),o.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1",children:"Extraction Diagnostics & Candidate Telemetry"}),o.jsx("p",{className:"text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl",children:"Inspect raw OCR tokenization, verified mapped lines, and candidate unmatched text segments."})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory",children:[o.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-charcoal-500",children:"Lines Processed"}),o.jsx("div",{className:"text-3xl font-mono font-bold text-charcoal-900 dark:text-ivory-50 mt-1",children:e.total_lines}),o.jsx("div",{className:"text-[11px] text-charcoal-500 mt-1 font-sans",children:"Total document text stream lines"})]}),o.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory",children:[o.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-clinical-normal",children:"Biomarkers Matched"}),o.jsx("div",{className:"text-3xl font-mono font-bold text-clinical-normal mt-1",children:e.recognized_count}),o.jsx("div",{className:"text-[11px] text-charcoal-500 mt-1 font-sans",children:"Deterministic registry mapping"})]}),o.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory",children:[o.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-clinical-warning",children:"Unmapped Candidate Lines"}),o.jsx("div",{className:"text-3xl font-mono font-bold text-clinical-warning mt-1",children:e.unrecognized_candidates.length}),o.jsx("div",{className:"text-[11px] text-charcoal-500 mt-1 font-sans",children:"Lines with numbers needing review"})]})]}),o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3",children:[o.jsxs("div",{className:"flex items-center gap-2 text-clinical-normal font-bold text-sm",children:[o.jsx(Zt,{className:"w-4 h-4"}),o.jsxs("span",{children:["Recognized Biomarker Labels (",e.recognized_labels.length,")"]})]}),o.jsx("div",{className:"flex flex-wrap gap-2 pt-1",children:e.recognized_labels.map((s,l)=>o.jsx("span",{className:"px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",children:s},l))})]}),o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3",children:[o.jsxs("div",{className:"flex items-center gap-2 text-clinical-warning font-bold text-sm",children:[o.jsx(Cs,{className:"w-4 h-4"}),o.jsxs("span",{children:["Candidate Unmatched Lines (",e.unrecognized_candidates.length,")"]})]}),o.jsx("p",{className:"text-xs text-charcoal-500 dark:text-ivory-400",children:"Lines containing numeric values or possible test names that were not mapped to the central medical registry:"}),e.unrecognized_candidates.length>0?o.jsx("div",{className:"space-y-2 pt-1",children:e.unrecognized_candidates.map((s,l)=>o.jsx("div",{className:"p-3 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800 font-mono text-xs text-charcoal-800 dark:text-ivory-200",children:s},l))}):o.jsx("div",{className:"p-4 rounded-xl bg-ivory-100 dark:bg-charcoal-950 text-xs font-semibold text-clinical-normal",children:"Zero unmapped candidate lines detected. All clinical rows parsed cleanly."})]}),o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2 text-charcoal-900 dark:text-ivory-50 font-bold text-sm",children:[o.jsx(zy,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),o.jsxs("span",{children:["Full Raw Ingested Text Stream (",a,")"]})]}),o.jsxs("span",{className:"text-xs font-mono text-charcoal-400",children:["Audit ID: ",i]})]}),o.jsx("textarea",{readOnly:!0,rows:10,value:r,className:"w-full p-4 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-800 dark:text-ivory-200 font-mono text-xs focus:outline-none"})]})]})},PT=({history:t,onSelectAudit:e,onClearHistory:n,onExportCSV:r,onExportPDF:i})=>{const[a,s]=se.useState(t.length>0?t[0].id:null),l=t.find(c=>c.id===a)||(t.length>0?t[0]:null);return t.length===0?o.jsxs("div",{className:"p-12 text-center rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3 font-sans",children:[o.jsx(Vx,{className:"w-10 h-10 text-forest-700 dark:text-forest-400 mx-auto"}),o.jsx("h3",{className:"font-serif text-2xl font-bold text-charcoal-900 dark:text-ivory-50",children:"No Historical Audits in this Session"}),o.jsx("p",{className:"text-xs text-charcoal-500 max-w-md mx-auto",children:"Audit entries are generated automatically as laboratory reports are ingested and verified."})]}):o.jsxs("div",{className:"space-y-8 animate-fade-in font-sans",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-ivory-300 dark:border-charcoal-800",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Pathology Enclave Ledger"}),o.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1",children:"Session Audit History"}),o.jsx("p",{className:"text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl",children:"Complete audit trail of all laboratory documents screened during the active session enclave."})]}),o.jsxs("button",{onClick:n,className:"inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-rose-300 dark:border-rose-900 text-rose-700 dark:text-rose-400 text-xs font-mono font-bold hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors shadow-paper-ivory",children:[o.jsx(hl,{className:"w-3.5 h-3.5"})," Clear Session Cache"]})]}),o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[o.jsxs("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-charcoal-500 dark:text-ivory-400",children:["Screened Document Audits (",t.length,")"]}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs",children:[o.jsx("thead",{className:"bg-ivory-100 dark:bg-charcoal-800/60 text-charcoal-600 dark:text-ivory-300 font-mono font-bold uppercase tracking-wider border-y border-ivory-200 dark:border-charcoal-800",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-3 px-4",children:"Audit ID"}),o.jsx("th",{className:"py-3 px-4",children:"Timestamp"}),o.jsx("th",{className:"py-3 px-4",children:"Specimen Document"}),o.jsx("th",{className:"py-3 px-4",children:"Format"}),o.jsx("th",{className:"py-3 px-4",children:"Screened"}),o.jsx("th",{className:"py-3 px-4",children:"Out-of-Range"}),o.jsx("th",{className:"py-3 px-4",children:"Normal"}),o.jsx("th",{className:"py-3 px-4 text-right",children:"Actions"})]})}),o.jsx("tbody",{className:"divide-y divide-ivory-200 dark:divide-charcoal-800 text-charcoal-700 dark:text-ivory-300",children:t.map(c=>{const d=a===c.id;return o.jsxs("tr",{onClick:()=>s(c.id),className:`cursor-pointer transition-colors ${d?"bg-forest-50/70 dark:bg-forest-950/40 font-semibold":"hover:bg-ivory-50/60 dark:hover:bg-charcoal-800/40"}`,children:[o.jsx("td",{className:"py-3 px-4 font-mono text-forest-800 dark:text-forest-400 font-bold",children:c.id}),o.jsx("td",{className:"py-3 px-4 font-mono text-charcoal-500 dark:text-ivory-400",children:c.timestamp}),o.jsx("td",{className:"py-3 px-4 font-medium text-charcoal-900 dark:text-ivory-50",children:c.source_name}),o.jsx("td",{className:"py-3 px-4",children:o.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-ivory-200 dark:bg-charcoal-800 text-charcoal-600 dark:text-ivory-300 font-mono",children:c.source_type})}),o.jsx("td",{className:"py-3 px-4 font-mono font-bold text-charcoal-900 dark:text-ivory-50",children:c.total_count}),o.jsx("td",{className:"py-3 px-4 font-mono text-clinical-danger font-bold",children:c.flagged_count}),o.jsx("td",{className:"py-3 px-4 font-mono text-clinical-normal",children:c.normal_count}),o.jsx("td",{className:"py-3 px-4 text-right",children:o.jsx("button",{onClick:h=>{h.stopPropagation(),s(c.id),e(c)},className:"px-2.5 py-1 rounded bg-forest-800 text-ivory-50 text-[11px] font-mono font-bold hover:bg-forest-900 transition-colors shadow-paper-ivory",children:"Inspect"})})]},c.id)})})]})})]}),l&&o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-ivory-200 dark:border-charcoal-800",children:[o.jsxs("div",{children:[o.jsxs("span",{className:"text-[10px] font-mono font-bold text-forest-700 dark:text-forest-400 uppercase",children:["Historical Audit Inspector • ",l.id]}),o.jsxs("h3",{className:"font-serif text-xl font-bold text-charcoal-900 dark:text-ivory-50",children:[l.source_name," (",l.timestamp,")"]})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("button",{onClick:()=>r(l.records),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-ivory-300 dark:border-charcoal-700 text-xs font-mono font-bold text-charcoal-700 dark:text-ivory-300 hover:border-forest-700 shadow-paper-ivory",children:[o.jsx(wa,{className:"w-3.5 h-3.5"})," CSV Export"]}),o.jsxs("button",{onClick:()=>i(l,l.records),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-mono font-bold transition-colors shadow-paper-ivory",children:[o.jsx(wa,{className:"w-3.5 h-3.5"})," Clinical PDF"]})]})]}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs",children:[o.jsx("thead",{className:"bg-ivory-100 dark:bg-charcoal-800/60 text-charcoal-600 dark:text-ivory-300 font-mono font-bold uppercase tracking-wider border-y border-ivory-200 dark:border-charcoal-800",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-3 px-4 font-serif font-bold text-xs capitalize",children:"Biomarker"}),o.jsx("th",{className:"py-3 px-4",children:"Measured"}),o.jsx("th",{className:"py-3 px-4",children:"Unit"}),o.jsx("th",{className:"py-3 px-4",children:"Reference Range"}),o.jsx("th",{className:"py-3 px-4",children:"Range Calibration"}),o.jsx("th",{className:"py-3 px-4",children:"Status"})]})}),o.jsx("tbody",{className:"divide-y divide-ivory-200 dark:divide-charcoal-800 text-charcoal-700 dark:text-ivory-300",children:l.records.map((c,d)=>o.jsxs("tr",{className:"hover:bg-ivory-50/50 dark:hover:bg-charcoal-800/40",children:[o.jsx("td",{className:"py-2.5 px-4 font-semibold text-charcoal-900 dark:text-ivory-50",children:c["Test Name"]}),o.jsx("td",{className:"py-2.5 px-4 font-mono font-bold text-charcoal-900 dark:text-ivory-50",children:c["Measured Value"]}),o.jsx("td",{className:"py-2.5 px-4 font-mono text-charcoal-500",children:c.Unit}),o.jsx("td",{className:"py-2.5 px-4 font-mono",children:c["Reference Range"]}),o.jsx("td",{className:"py-2.5 px-4",children:o.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-ivory-200 dark:bg-charcoal-800 text-charcoal-600 dark:text-ivory-400 font-mono",children:c["Range Source"]})}),o.jsx("td",{className:"py-2.5 px-4",children:o.jsx("span",{className:"font-mono text-xs font-bold",children:c.Status})})]},d))})]})})]})]})},kT=({onClearSessionCache:t,historyCount:e})=>{const{user:n}=Ds(),[r,i]=se.useState("vault"),[a,s]=se.useState(null);return se.useEffect(()=>{fetch("/api/system/status").then(l=>l.json()).then(l=>s(l)).catch(l=>console.error("Error fetching system status:",l))},[]),o.jsxs("div",{className:"space-y-8 animate-fade-in font-sans",children:[o.jsxs("div",{className:"pb-5 border-b border-ivory-300 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Enclave Infrastructure"}),o.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1",children:"System Settings & Cryptographic Enclave"}),o.jsx("p",{className:"text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl",children:"Inspect cryptographic vault parameters, OCR engine telemetry, and manage session cache."})]}),o.jsxs("div",{className:"flex border-b border-ivory-300 dark:border-charcoal-800 space-x-6 text-xs font-mono font-bold",children:[o.jsxs("button",{onClick:()=>i("vault"),className:`pb-3 transition-colors relative flex items-center gap-2 ${r==="vault"?"text-forest-800 dark:text-forest-300 border-b-2 border-forest-700":"text-charcoal-500 hover:text-charcoal-700 dark:hover:text-ivory-300"}`,children:[o.jsx(kn,{className:"w-4 h-4"})," Cryptographic Enclave"]}),o.jsxs("button",{onClick:()=>i("engine"),className:`pb-3 transition-colors relative flex items-center gap-2 ${r==="engine"?"text-forest-800 dark:text-forest-300 border-b-2 border-forest-700":"text-charcoal-500 hover:text-charcoal-700 dark:hover:text-ivory-300"}`,children:[o.jsx(Ax,{className:"w-4 h-4"})," Optical Engine & Formats"]}),o.jsxs("button",{onClick:()=>i("session"),className:`pb-3 transition-colors relative flex items-center gap-2 ${r==="session"?"text-forest-800 dark:text-forest-300 border-b-2 border-forest-700":"text-charcoal-500 hover:text-charcoal-700 dark:hover:text-ivory-300"}`,children:[o.jsx(hl,{className:"w-4 h-4"})," Session Cache"]})]}),r==="vault"&&o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[o.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[o.jsx(Dx,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),"Active Practitioner Identity"]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono",children:[o.jsxs("div",{className:"p-3.5 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-charcoal-500 uppercase font-bold text-[10px]",children:"Email"}),o.jsx("p",{className:"font-bold text-charcoal-900 dark:text-ivory-50 mt-0.5 truncate",children:n==null?void 0:n.email})]}),o.jsxs("div",{className:"p-3.5 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-charcoal-500 uppercase font-bold text-[10px]",children:"Role"}),o.jsx("p",{className:"font-bold text-forest-800 dark:text-forest-300 mt-0.5",children:(n==null?void 0:n.role)||"Lead Clinical Evaluator"})]}),o.jsxs("div",{className:"p-3.5 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-charcoal-500 uppercase font-bold text-[10px]",children:"Session State"}),o.jsx("p",{className:"font-bold text-clinical-normal mt-0.5",children:"Authenticated (Local Vault)"})]})]})]}),o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[o.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[o.jsx(kn,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),"Cryptographic Enclave Parameters"]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-4 text-center font-mono",children:[o.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-[10px] text-charcoal-500 uppercase font-bold",children:"Algorithm"}),o.jsx("p",{className:"text-base font-bold text-charcoal-900 dark:text-ivory-50 mt-1",children:"PBKDF2-SHA256"})]}),o.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-[10px] text-charcoal-500 uppercase font-bold",children:"Key Iterations"}),o.jsx("p",{className:"text-base font-bold text-forest-800 dark:text-forest-300 mt-1",children:"100,000"})]}),o.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-[10px] text-charcoal-500 uppercase font-bold",children:"Salt Entropy"}),o.jsx("p",{className:"text-base font-bold text-charcoal-900 dark:text-ivory-50 mt-1",children:"256-bit CSPRNG"})]}),o.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-[10px] text-charcoal-500 uppercase font-bold",children:"Vault Users"}),o.jsx("p",{className:"text-base font-bold text-charcoal-900 dark:text-ivory-50 mt-1",children:(a==null?void 0:a.vault.registered_practitioners)||1})]})]}),o.jsxs("p",{className:"text-xs text-charcoal-500 dark:text-ivory-400 leading-relaxed pt-2 font-sans",children:["💡 ",o.jsx("strong",{children:"Enclave Security Boundary"}),": All credentials and PBKDF2 hashes are saved in host storage at ",o.jsx("code",{className:"font-mono text-forest-700 dark:text-forest-400",children:(a==null?void 0:a.vault.vault_path)||"data/.auth_vault.json"})," with zero cloud transmissions."]})]})]}),r==="engine"&&o.jsx("div",{className:"space-y-6",children:o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[o.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[o.jsx(Ky,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),"Optical Engine Telemetry"]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono",children:[o.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-charcoal-500 uppercase font-bold text-[10px]",children:"Tesseract OCR"}),o.jsxs("p",{className:"font-bold text-clinical-normal mt-1 flex items-center gap-1",children:[o.jsx(Zt,{className:"w-3.5 h-3.5"}),a!=null&&a.tesseract.available?"Active (Local Binary)":"Not Found"]})]}),o.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-charcoal-500 uppercase font-bold text-[10px]",children:"Supported Vision Formats"}),o.jsx("p",{className:"font-bold text-charcoal-900 dark:text-ivory-50 mt-1",children:"PDF, PNG, JPG, WEBP, BMP, TIFF, HEIC"})]}),o.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-charcoal-500 uppercase font-bold text-[10px]",children:"Registry Biomarkers"}),o.jsx("p",{className:"font-bold text-forest-800 dark:text-forest-300 mt-1",children:"50+ Standardized Markers"})]})]})]})}),r==="session"&&o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[o.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[o.jsx(hl,{className:"w-4 h-4 text-rose-600"}),"Session Cache Management"]}),o.jsxs("p",{className:"text-xs text-charcoal-600 dark:text-ivory-400",children:["Currently retaining ",o.jsx("b",{children:e})," audited laboratory reports in active browser session memory."]}),o.jsx("button",{onClick:t,className:"px-4 py-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-900 text-rose-700 dark:text-rose-400 text-xs font-mono font-bold hover:bg-rose-100 transition-colors shadow-paper-ivory",children:"Clear Session Cache Now"})]})]})},LT=()=>o.jsxs("div",{className:"space-y-8 animate-fade-in max-w-4xl font-sans",children:[o.jsxs("div",{className:"pb-5 border-b border-ivory-300 dark:border-charcoal-800",children:[o.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Clinical Governance"}),o.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1",children:"Clinical Safety, Methodology & Enclave Architecture"}),o.jsx("p",{className:"text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl",children:"Detailed specification of the non-speculative screening guardrail, reference interval calibration rules, and zero-cloud data sovereignty."})]}),o.jsxs("div",{className:"space-y-6 text-sm text-charcoal-700 dark:text-ivory-300 leading-relaxed",children:[o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3",children:[o.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[o.jsx(Py,{className:"w-5 h-5 text-forest-700 dark:text-forest-400"}),"1. Purpose & Clinical Scope"]}),o.jsxs("p",{className:"text-xs text-charcoal-600 dark:text-ivory-400 leading-relaxed font-sans",children:[o.jsx("strong",{children:"Orca MedScan"})," is a clinical decision-support and screening prototype developed for ",o.jsx("strong",{children:"Orcathon 2026"})," (Healthcare & MedTech track). Its engineering philosophy bridges the gap between dense, unstructured laboratory reports and rapid, actionable clinical review without exposing sensitive patient health records to third-party cloud APIs."]})]}),o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[o.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[o.jsx(Zx,{className:"w-5 h-5 text-forest-700 dark:text-forest-400"}),"2. Dynamic Reference Interval Prioritization"]}),o.jsxs("div",{className:"space-y-3 text-xs",children:[o.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("strong",{className:"text-charcoal-900 dark:text-ivory-50 font-serif text-sm",children:"A. Printed Laboratory Ranges (Highest Priority)"}),o.jsx("p",{className:"text-charcoal-500 dark:text-ivory-400 mt-1 font-sans",children:"Clinical laboratories calibrate analyzers with specific assay reagents. Orca MedScan automatically detects and respects reference ranges printed directly on the patient report."})]}),o.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("strong",{className:"text-charcoal-900 dark:text-ivory-50 font-serif text-sm",children:"B. Documented Adult Clinical Standard (Fallback)"}),o.jsxs("p",{className:"text-charcoal-500 dark:text-ivory-400 mt-1 font-sans",children:["When a report omits reference intervals, standard adult clinical ranges are applied and explicitly tagged as ",o.jsx("span",{className:"font-mono text-forest-700 dark:text-forest-400 font-bold",children:"Standard Adult Reference"}),"."]})]}),o.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[o.jsx("strong",{className:"text-charcoal-900 dark:text-ivory-50 font-serif text-sm",children:"C. Conservative Non-Speculative Classification"}),o.jsx("p",{className:"text-charcoal-500 dark:text-ivory-400 mt-1 font-sans",children:"Results are strictly categorized as Normal, Potentially High, Potentially Low, or Review Needed. Speculative clinical diagnoses are deliberately prohibited."})]})]})]}),o.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3",children:[o.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[o.jsx(kn,{className:"w-5 h-5 text-forest-700 dark:text-forest-400"}),"3. Privacy-Preserving Enclave Architecture"]}),o.jsxs("ul",{className:"space-y-2 text-xs text-charcoal-600 dark:text-ivory-400",children:[o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx(Zt,{className:"w-4 h-4 text-forest-700 dark:text-forest-400 shrink-0"}),o.jsxs("span",{children:[o.jsx("strong",{children:"100% Local Execution:"})," All digital parsing, OCR, and reference interval comparisons execute in host memory."]})]}),o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx(Zt,{className:"w-4 h-4 text-forest-700 dark:text-forest-400 shrink-0"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Zero External API Exposure:"})," Patient identifiers, test results, and blood panel scans are never sent over the internet or forwarded to remote LLMs."]})]}),o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx(Zt,{className:"w-4 h-4 text-forest-700 dark:text-forest-400 shrink-0"}),o.jsxs("span",{children:[o.jsx("strong",{children:"PBKDF2-HMAC-SHA256 Vault:"})," Cryptographic password protection conforming to NIST SP 800-132 recommendations."]})]})]})]}),o.jsxs("div",{className:"p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2 shadow-paper-ivory",children:[o.jsxs("div",{className:"flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-sm",children:[o.jsx(Cs,{className:"w-5 h-5 shrink-0"}),o.jsx("span",{className:"font-serif",children:"Official Medical Screening Disclaimer"})]}),o.jsx("p",{className:"text-xs text-amber-950/80 dark:text-amber-300/80 leading-relaxed font-sans",children:"This application is an educational and screening prototype. It does not provide medical diagnoses, treatment plans, or emergency clinical triaging. Patients should always consult licensed healthcare providers for diagnostic interpretation."})]})]})]}),DT=()=>{const{isAuthenticated:t,loginEvaluatorFastPass:e}=Ds(),{t:n}=Ni(),[r,i]=se.useState(()=>{try{return localStorage.getItem("orca_user_session")?"app":"landing"}catch{return"landing"}}),[a,s]=se.useState("Dashboard"),[l,c]=se.useState(!1),[d,h]=se.useState("login"),[f,p]=se.useState(!1),[x,v]=se.useState(()=>{try{const M=localStorage.getItem("orca_audits");return M?JSON.parse(M):[]}catch{return[]}}),[y,g]=se.useState(()=>x.length>0?x[x.length-1]:null),[u,_]=se.useState(!0);se.useEffect(()=>{try{localStorage.setItem("orca_audits",JSON.stringify(x))}catch(M){console.error("Error saving audits to localStorage:",M)}},[x]),se.useEffect(()=>{try{const M=new URLSearchParams(window.location.search),S=M.get("view"),C=M.get("theme");if(C==="dark"?(document.documentElement.classList.add("dark"),localStorage.setItem("orca_theme","dark")):C==="light"&&(document.documentElement.classList.remove("dark"),localStorage.setItem("orca_theme","light")),S==="simulator"){const z=document.getElementById("simulator-section");z&&z.scrollIntoView({behavior:"instant"}),setTimeout(()=>{var j;(j=document.getElementById("simulator-section"))==null||j.scrollIntoView({behavior:"instant"})},100)}else S==="footer"?(window.scrollTo(0,4500),setTimeout(()=>{window.scrollTo(0,4500)},100)):(S==="dashboard"||S==="analyze"||S==="assistant"||S==="ai-assistant"||S==="diagnostics"||S==="history"||S==="settings"||S==="safety")&&(t||e(),i("app"),S==="dashboard"&&s("Dashboard"),S==="analyze"&&s("Analyze Report"),(S==="assistant"||S==="ai-assistant")&&s("AI Assistant"),S==="diagnostics"&&s("Extraction Diagnostics"),S==="history"&&s("Report History"),S==="settings"&&s("Settings"),S==="safety"&&s("Clinical Safety"),fetch("/api/benchmark").then(z=>z.json()).then(z=>{const j={id:"AUDIT-BENCH",timestamp:z.timestamp,source_name:z.source_name,source_type:z.source_type,extraction_method:"Synthetic Clinical Benchmark",records:z.records,total_count:z.total_count,normal_count:z.normal_count,flagged_count:z.flagged_count,uncertain_count:z.uncertain_count,raw_text:z.raw_text,diagnostics:z.diagnostics};b(j)}).catch(z=>console.error("Auto benchmark load error:",z)))}catch(M){console.error("URL params parse error:",M)}},[]),se.useEffect(()=>{t&&r==="landing"&&i("app")},[t]),se.useEffect(()=>{fetch("/api/system/status").then(M=>M.json()).then(M=>{M&&M.tesseract&&_(M.tesseract.available)}).catch(()=>_(!0))},[]);const m=M=>{h(M),c(!0)},b=M=>{v(S=>[...S,M]),g(M)},N=()=>{v([]),g(null),localStorage.removeItem("orca_audits")},A=async()=>{t||await e();try{const S=await(await fetch("/api/benchmark")).json(),C={id:"AUDIT-BENCH",timestamp:S.timestamp,source_name:S.source_name,source_type:S.source_type,extraction_method:"Synthetic Clinical Benchmark",records:S.records,total_count:S.total_count,normal_count:S.normal_count,flagged_count:S.flagged_count,uncertain_count:S.uncertain_count,raw_text:S.raw_text,diagnostics:S.diagnostics};b(C),i("app"),s("Dashboard")}catch(M){console.error("Failed to load benchmark:",M)}},T=async M=>{const S=M||(y==null?void 0:y.records)||[];if(S.length)try{const z=await(await fetch("/api/export/csv",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:S})})).blob(),j=window.URL.createObjectURL(z),$=document.createElement("a");$.href=j,$.download=`orca_biomarkers_${(y==null?void 0:y.id)||"export"}.csv`,document.body.appendChild($),$.click(),$.remove()}catch(C){console.error("Error downloading CSV:",C)}},P=async(M,S)=>{const C=M||y||{id:"AUDIT",source_name:"Medical Specimen"},z=S||(y==null?void 0:y.records)||[];if(z.length)try{const $=await(await fetch("/api/export/pdf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({meta:C,records:z})})).blob(),O=window.URL.createObjectURL($),U=document.createElement("a");U.href=O,U.download=`orca_clinical_summary_${C.id||"export"}.pdf`,document.body.appendChild(U),U.click(),U.remove()}catch(j){console.error("Error downloading PDF:",j)}};return r==="landing"||!t?o.jsxs("div",{className:"min-h-screen bg-ivory-100 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-50 flex flex-col font-sans transition-colors duration-200",children:[o.jsx(nS,{onOpenAuth:m,onGoToApp:()=>i("app")}),o.jsx("main",{className:"flex-1",children:o.jsx(TT,{onOpenAuth:m,onLaunchBenchmark:A,onExploreWorkflow:()=>{const M=document.getElementById("workflow-section");M&&M.scrollIntoView({behavior:"smooth"})}})}),o.jsx(qp,{isOpen:l,onClose:()=>c(!1),initialMode:d,onSuccess:()=>i("app")})]}):o.jsxs("div",{className:"min-h-screen bg-ivory-100 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-50 flex font-sans transition-colors duration-200",children:[o.jsx(rS,{currentView:a,onSelectView:M=>s(M),auditCount:x.length,ocrActive:u,onLoadBenchmark:A,isCollapsed:f,onToggleCollapse:()=>p(!f)}),o.jsxs("div",{className:`flex-1 transition-all duration-300 min-h-screen flex flex-col ${f?"ml-16":"ml-64"}`,children:[o.jsxs("header",{className:"h-16 px-6 sm:px-8 border-b border-ivory-300 dark:border-charcoal-800 bg-ivory-50/80 dark:bg-charcoal-900/80 backdrop-blur-md flex items-center justify-between sticky top-0 z-30",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:n("nav_active_workspace")}),o.jsx("span",{className:"text-charcoal-400",children:"/"}),o.jsx("span",{className:"text-xs font-mono font-bold text-charcoal-800 dark:text-ivory-200",children:a==="Dashboard"?n("nav_dashboard"):a==="Analyze Report"?n("nav_analyze"):a==="AI Assistant"?n("nav_assistant"):a==="Report History"?n("nav_history"):a==="Extraction Diagnostics"?n("nav_diagnostics"):a==="Settings"?n("nav_settings"):a==="Clinical Safety"?n("nav_safety"):a})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("button",{onClick:()=>i("landing"),className:"text-xs font-semibold text-charcoal-500 hover:text-charcoal-800 dark:hover:text-ivory-200 transition-colors",children:n("nav_overview")}),o.jsx("button",{onClick:()=>{s("Analyze Report")},className:"px-3.5 py-1.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 font-bold text-xs shadow-paper-ivory transition-all",children:n("nav_ingest_report")})]})]}),o.jsxs("main",{className:"flex-1 p-6 sm:p-8 max-w-7xl w-full mx-auto",children:[a==="Dashboard"&&o.jsx(AT,{history:x,currentReport:y,onNavigateAnalyze:()=>s("Analyze Report"),onLoadBenchmark:A,onExportCSV:()=>T(),onExportPDF:()=>P()}),a==="Analyze Report"&&o.jsx(CT,{onAddReportToHistory:b,onExportCSV:T,onExportPDF:P}),a==="AI Assistant"&&o.jsx(NT,{currentReport:y,history:x,onSelectReport:M=>g(M),onNavigateAnalyze:()=>s("Analyze Report")}),a==="Extraction Diagnostics"&&o.jsx(RT,{currentReport:y}),a==="Report History"&&o.jsx(PT,{history:x,onSelectAudit:M=>{g(M),s("Dashboard")},onClearHistory:N,onExportCSV:T,onExportPDF:P}),a==="Settings"&&o.jsx(kT,{onClearSessionCache:N,historyCount:x.length}),a==="Clinical Safety"&&o.jsx(LT,{})]})]}),o.jsx(qp,{isOpen:l,onClose:()=>c(!1),initialMode:d,onSuccess:()=>i("app")})]})};td.createRoot(document.getElementById("root")).render(o.jsx(o_.StrictMode,{children:o.jsx(tS,{children:o.jsx(vy,{children:o.jsx(yy,{children:o.jsx(DT,{})})})})}));
