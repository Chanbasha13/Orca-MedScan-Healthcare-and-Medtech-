(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function bg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jp={exports:{}},vl={},Hp={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),Tg=Symbol.for("react.portal"),Ag=Symbol.for("react.fragment"),Cg=Symbol.for("react.strict_mode"),Ng=Symbol.for("react.profiler"),Rg=Symbol.for("react.provider"),Pg=Symbol.for("react.context"),kg=Symbol.for("react.forward_ref"),Lg=Symbol.for("react.suspense"),Dg=Symbol.for("react.memo"),Ig=Symbol.for("react.lazy"),of=Symbol.iterator;function Ug(t){return t===null||typeof t!="object"?null:(t=of&&t[of]||t["@@iterator"],typeof t=="function"?t:null)}var Vp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gp=Object.assign,Wp={};function Rs(t,e,n){this.props=t,this.context=e,this.refs=Wp,this.updater=n||Vp}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xp(){}Xp.prototype=Rs.prototype;function Ju(t,e,n){this.props=t,this.context=e,this.refs=Wp,this.updater=n||Vp}var ed=Ju.prototype=new Xp;ed.constructor=Ju;Gp(ed,Rs.prototype);ed.isPureReactComponent=!0;var lf=Array.isArray,$p=Object.prototype.hasOwnProperty,td={current:null},Yp={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)$p.call(e,r)&&!Yp.hasOwnProperty(r)&&(i[r]=e[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in o=t.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:Ca,type:t,key:s,ref:a,props:i,_owner:td.current}}function Fg(t,e){return{$$typeof:Ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ca}function Og(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cf=/\/+/g;function Vl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Og(""+t.key):e.toString(36)}function Co(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ca:case Tg:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+Vl(a,0):r,lf(i)?(n="",t!=null&&(n=t.replace(cf,"$&/")+"/"),Co(i,e,n,"",function(u){return u})):i!=null&&(nd(i)&&(i=Fg(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(cf,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",lf(t))for(var o=0;o<t.length;o++){s=t[o];var c=r+Vl(s,o);a+=Co(s,e,n,c,i)}else if(c=Ug(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=r+Vl(s,o++),a+=Co(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ha(t,e,n){if(t==null)return t;var r=[],i=0;return Co(t,r,"","",function(s){return e.call(n,s,i++)}),r}function zg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},No={transition:null},Bg={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:No,ReactCurrentOwner:td};function Kp(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!nd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Rs;ze.Fragment=Ag;ze.Profiler=Ng;ze.PureComponent=Ju;ze.StrictMode=Cg;ze.Suspense=Lg;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bg;ze.act=Kp;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Gp({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=td.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)$p.call(e,c)&&!Yp.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:Ca,type:t.type,key:i,ref:s,props:r,_owner:a}};ze.createContext=function(t){return t={$$typeof:Pg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Rg,_context:t},t.Consumer=t};ze.createElement=qp;ze.createFactory=function(t){var e=qp.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:kg,render:t}};ze.isValidElement=nd;ze.lazy=function(t){return{$$typeof:Ig,_payload:{_status:-1,_result:t},_init:zg}};ze.memo=function(t,e){return{$$typeof:Dg,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=No.transition;No.transition={};try{t()}finally{No.transition=e}};ze.unstable_act=Kp;ze.useCallback=function(t,e){return Xt.current.useCallback(t,e)};ze.useContext=function(t){return Xt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Xt.current.useEffect(t,e)};ze.useId=function(){return Xt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Xt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};ze.useRef=function(t){return Xt.current.useRef(t)};ze.useState=function(t){return Xt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Xt.current.useTransition()};ze.version="18.3.1";Hp.exports=ze;var ve=Hp.exports;const jg=bg(ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg=ve,Vg=Symbol.for("react.element"),Gg=Symbol.for("react.fragment"),Wg=Object.prototype.hasOwnProperty,Xg=Hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$g={key:!0,ref:!0,__self:!0,__source:!0};function Zp(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Wg.call(e,r)&&!$g.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Vg,type:t,key:s,ref:a,props:i,_owner:Xg.current}}vl.Fragment=Gg;vl.jsx=Zp;vl.jsxs=Zp;jp.exports=vl;var l=jp.exports,Kc={},Qp={exports:{}},fn={},Jp={exports:{}},em={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,q){var Z=D.length;D.push(q);e:for(;0<Z;){var ie=Z-1>>>1,_e=D[ie];if(0<i(_e,q))D[ie]=q,D[Z]=_e,Z=ie;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var q=D[0],Z=D.pop();if(Z!==q){D[0]=Z;e:for(var ie=0,_e=D.length,Be=_e>>>1;ie<Be;){var X=2*(ie+1)-1,ne=D[X],de=X+1,oe=D[de];if(0>i(ne,Z))de<_e&&0>i(oe,ne)?(D[ie]=oe,D[de]=Z,ie=de):(D[ie]=ne,D[X]=Z,ie=X);else if(de<_e&&0>i(oe,Z))D[ie]=oe,D[de]=Z,ie=de;else break e}}return q}function i(D,q){var Z=D.sortIndex-q.sortIndex;return Z!==0?Z:D.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],h=1,p=null,f=3,x=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var q=n(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=D)r(u),q.sortIndex=q.expirationTime,e(c,q);else break;q=n(u)}}function M(D){if(y=!1,g(D),!_)if(n(c)!==null)_=!0,H(P);else{var q=n(u);q!==null&&Y(M,q.startTime-D)}}function P(D,q){_=!1,y&&(y=!1,d(C),C=-1),x=!0;var Z=f;try{for(g(q),p=n(c);p!==null&&(!(p.expirationTime>q)||D&&!R());){var ie=p.callback;if(typeof ie=="function"){p.callback=null,f=p.priorityLevel;var _e=ie(p.expirationTime<=q);q=t.unstable_now(),typeof _e=="function"?p.callback=_e:p===n(c)&&r(c),g(q)}else r(c);p=n(c)}if(p!==null)var Be=!0;else{var X=n(u);X!==null&&Y(M,X.startTime-q),Be=!1}return Be}finally{p=null,f=Z,x=!1}}var A=!1,T=null,C=-1,w=5,S=-1;function R(){return!(t.unstable_now()-S<w)}function W(){if(T!==null){var D=t.unstable_now();S=D;var q=!0;try{q=T(!0,D)}finally{q?O():(A=!1,T=null)}}else A=!1}var O;if(typeof v=="function")O=function(){v(W)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,z=F.port2;F.port1.onmessage=W,O=function(){z.postMessage(null)}}else O=function(){m(W,0)};function H(D){T=D,A||(A=!0,O())}function Y(D,q){C=m(function(){D(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||x||(_=!0,H(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var Z=f;f=q;try{return D()}finally{f=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Z=f;f=D;try{return q()}finally{f=Z}},t.unstable_scheduleCallback=function(D,q,Z){var ie=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ie+Z:ie):Z=ie,D){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=Z+_e,D={id:h++,callback:q,priorityLevel:D,startTime:Z,expirationTime:_e,sortIndex:-1},Z>ie?(D.sortIndex=Z,e(u,D),n(c)===null&&D===n(u)&&(y?(d(C),C=-1):y=!0,Y(M,Z-ie))):(D.sortIndex=_e,e(c,D),_||x||(_=!0,H(P))),D},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(D){var q=f;return function(){var Z=f;f=q;try{return D.apply(this,arguments)}finally{f=Z}}}})(em);Jp.exports=em;var Yg=Jp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg=ve,dn=Yg;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tm=new Set,ua={};function Ai(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(ua[t]=e,t=0;t<e.length;t++)tm.add(e[t])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=Object.prototype.hasOwnProperty,Kg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uf={},df={};function Zg(t){return Zc.call(df,t)?!0:Zc.call(uf,t)?!1:Kg.test(t)?df[t]=!0:(uf[t]=!0,!1)}function Qg(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jg(t,e,n,r){if(e===null||typeof e>"u"||Qg(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Lt[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Lt[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Lt[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Lt[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Lt[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Lt[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Lt[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Lt[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Lt[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var rd=/[\-:]([a-z])/g;function id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rd,id);Lt[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rd,id);Lt[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rd,id);Lt[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Lt[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Lt[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function sd(t,e,n,r){var i=Lt.hasOwnProperty(e)?Lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jg(e,n,i,r)&&(n=null),r||i===null?Zg(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),Yi=Symbol.for("react.portal"),qi=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),nm=Symbol.for("react.provider"),rm=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),eu=Symbol.for("react.suspense_list"),ld=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),im=Symbol.for("react.offscreen"),ff=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=ff&&t[ff]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,Gl;function qs(t){if(Gl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gl=e&&e[1]||""}return`
`+Gl+t}var Wl=!1;function Xl(t,e){if(!t||Wl)return"";Wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==s[o]){var c=`
`+i[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{Wl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qs(t):""}function ev(t){switch(t.tag){case 5:return qs(t.type);case 16:return qs("Lazy");case 13:return qs("Suspense");case 19:return qs("SuspenseList");case 0:case 2:case 15:return t=Xl(t.type,!1),t;case 11:return t=Xl(t.type.render,!1),t;case 1:return t=Xl(t.type,!0),t;default:return""}}function tu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qi:return"Fragment";case Yi:return"Portal";case Qc:return"Profiler";case ad:return"StrictMode";case Jc:return"Suspense";case eu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rm:return(t.displayName||"Context")+".Consumer";case nm:return(t._context.displayName||"Context")+".Provider";case od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ld:return e=t.displayName||null,e!==null?e:tu(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return tu(t(e))}catch{}}return null}function tv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tu(e);case 8:return e===ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nv(t){var e=sm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=nv(t))}function am(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=sm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function jo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nu(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function om(t,e){e=e.checked,e!=null&&sd(t,"checked",e,!1)}function ru(t,e){om(t,e);var n=Hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?iu(t,e.type,n):e.hasOwnProperty("defaultValue")&&iu(t,e.type,Hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function iu(t,e,n){(e!=="number"||jo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ks=Array.isArray;function os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function su(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Ks(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hr(n)}}function lm(t,e){var n=Hr(e.value),r=Hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function au(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wa,um=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rv=["Webkit","ms","Moz","O"];Object.keys(ta).forEach(function(t){rv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ta[e]=ta[t]})});function dm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ta.hasOwnProperty(t)&&ta[t]?(""+e).trim():e+"px"}function fm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var iv=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ou(t,e){if(e){if(iv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function lu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cu=null;function cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uu=null,ls=null,cs=null;function gf(t){if(t=Pa(t)){if(typeof uu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=El(e),uu(t.stateNode,t.type,e))}}function hm(t){ls?cs?cs.push(t):cs=[t]:ls=t}function pm(){if(ls){var t=ls,e=cs;if(cs=ls=null,gf(t),e)for(t=0;t<e.length;t++)gf(e[t])}}function mm(t,e){return t(e)}function xm(){}var $l=!1;function gm(t,e,n){if($l)return t(e,n);$l=!0;try{return mm(t,e,n)}finally{$l=!1,(ls!==null||cs!==null)&&(xm(),pm())}}function fa(t,e){var n=t.stateNode;if(n===null)return null;var r=El(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var du=!1;if(ur)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){du=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{du=!1}function sv(t,e,n,r,i,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var na=!1,Ho=null,Vo=!1,fu=null,av={onError:function(t){na=!0,Ho=t}};function ov(t,e,n,r,i,s,a,o,c){na=!1,Ho=null,sv.apply(av,arguments)}function lv(t,e,n,r,i,s,a,o,c){if(ov.apply(this,arguments),na){if(na){var u=Ho;na=!1,Ho=null}else throw Error(te(198));Vo||(Vo=!0,fu=u)}}function Ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vf(t){if(Ci(t)!==t)throw Error(te(188))}function cv(t){var e=t.alternate;if(!e){if(e=Ci(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vf(i),t;if(s===r)return vf(i),e;s=s.sibling}throw Error(te(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==r)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function _m(t){return t=cv(t),t!==null?ym(t):null}function ym(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ym(t);if(e!==null)return e;t=t.sibling}return null}var Sm=dn.unstable_scheduleCallback,_f=dn.unstable_cancelCallback,uv=dn.unstable_shouldYield,dv=dn.unstable_requestPaint,xt=dn.unstable_now,fv=dn.unstable_getCurrentPriorityLevel,ud=dn.unstable_ImmediatePriority,Mm=dn.unstable_UserBlockingPriority,Go=dn.unstable_NormalPriority,hv=dn.unstable_LowPriority,Em=dn.unstable_IdlePriority,_l=null,Xn=null;function pv(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(_l,t,void 0,(t.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:gv,mv=Math.log,xv=Math.LN2;function gv(t){return t>>>=0,t===0?32:31-(mv(t)/xv|0)|0}var Xa=64,$a=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~i;o!==0?r=Zs(o):(s&=a,s!==0&&(r=Zs(s)))}else a=n&~i,a!==0?r=Zs(a):s!==0&&(r=Zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ln(e),i=1<<n,r|=t[n],e&=~i;return r}function vv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _v(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Ln(s),o=1<<a,c=i[a];c===-1?(!(o&n)||o&r)&&(i[a]=vv(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function hu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wm(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function Yl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ln(e),t[e]=n}function yv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ln(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function dd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Je=0;function bm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tm,fd,Am,Cm,Nm,pu=!1,Ya=[],kr=null,Lr=null,Dr=null,ha=new Map,pa=new Map,Tr=[],Sv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yf(t,e){switch(t){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(e.pointerId)}}function Os(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Pa(e),e!==null&&fd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Mv(t,e,n,r,i){switch(e){case"focusin":return kr=Os(kr,t,e,n,r,i),!0;case"dragenter":return Lr=Os(Lr,t,e,n,r,i),!0;case"mouseover":return Dr=Os(Dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ha.set(s,Os(ha.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,pa.set(s,Os(pa.get(s)||null,t,e,n,r,i)),!0}return!1}function Rm(t){var e=fi(t.target);if(e!==null){var n=Ci(e);if(n!==null){if(e=n.tag,e===13){if(e=vm(n),e!==null){t.blockedOn=e,Nm(t.priority,function(){Am(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ro(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);cu=r,n.target.dispatchEvent(r),cu=null}else return e=Pa(n),e!==null&&fd(e),t.blockedOn=n,!1;e.shift()}return!0}function Sf(t,e,n){Ro(t)&&n.delete(e)}function Ev(){pu=!1,kr!==null&&Ro(kr)&&(kr=null),Lr!==null&&Ro(Lr)&&(Lr=null),Dr!==null&&Ro(Dr)&&(Dr=null),ha.forEach(Sf),pa.forEach(Sf)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,pu||(pu=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,Ev)))}function ma(t){function e(i){return zs(i,t)}if(0<Ya.length){zs(Ya[0],t);for(var n=1;n<Ya.length;n++){var r=Ya[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kr!==null&&zs(kr,t),Lr!==null&&zs(Lr,t),Dr!==null&&zs(Dr,t),ha.forEach(e),pa.forEach(e),n=0;n<Tr.length;n++)r=Tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)Rm(n),n.blockedOn===null&&Tr.shift()}var us=pr.ReactCurrentBatchConfig,Xo=!0;function wv(t,e,n,r){var i=Je,s=us.transition;us.transition=null;try{Je=1,hd(t,e,n,r)}finally{Je=i,us.transition=s}}function bv(t,e,n,r){var i=Je,s=us.transition;us.transition=null;try{Je=4,hd(t,e,n,r)}finally{Je=i,us.transition=s}}function hd(t,e,n,r){if(Xo){var i=mu(t,e,n,r);if(i===null)ic(t,e,r,$o,n),yf(t,r);else if(Mv(i,t,e,n,r))r.stopPropagation();else if(yf(t,r),e&4&&-1<Sv.indexOf(t)){for(;i!==null;){var s=Pa(i);if(s!==null&&Tm(s),s=mu(t,e,n,r),s===null&&ic(t,e,r,$o,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ic(t,e,r,null,n)}}var $o=null;function mu(t,e,n,r){if($o=null,t=cd(r),t=fi(t),t!==null)if(e=Ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $o=t,null}function Pm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fv()){case ud:return 1;case Mm:return 4;case Go:case hv:return 16;case Em:return 536870912;default:return 16}default:return 16}}var Nr=null,pd=null,Po=null;function km(){if(Po)return Po;var t,e=pd,n=e.length,r,i="value"in Nr?Nr.value:Nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return Po=i.slice(t,1<r?1-r:void 0)}function ko(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function Mf(){return!1}function hn(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:Mf,this.isPropagationStopped=Mf,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},md=hn(Ps),Ra=ut({},Ps,{view:0,detail:0}),Tv=hn(Ra),ql,Kl,Bs,yl=ut({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(ql=t.screenX-Bs.screenX,Kl=t.screenY-Bs.screenY):Kl=ql=0,Bs=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),Ef=hn(yl),Av=ut({},yl,{dataTransfer:0}),Cv=hn(Av),Nv=ut({},Ra,{relatedTarget:0}),Zl=hn(Nv),Rv=ut({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=hn(Rv),kv=ut({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lv=hn(kv),Dv=ut({},Ps,{data:0}),wf=hn(Dv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fv[t])?!!e[t]:!1}function xd(){return Ov}var zv=ut({},Ra,{key:function(t){if(t.key){var e=Iv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xd,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bv=hn(zv),jv=ut({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bf=hn(jv),Hv=ut({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xd}),Vv=hn(Hv),Gv=ut({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=hn(Gv),Xv=ut({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=hn(Xv),Yv=[9,13,27,32],gd=ur&&"CompositionEvent"in window,ra=null;ur&&"documentMode"in document&&(ra=document.documentMode);var qv=ur&&"TextEvent"in window&&!ra,Lm=ur&&(!gd||ra&&8<ra&&11>=ra),Tf=" ",Af=!1;function Dm(t,e){switch(t){case"keyup":return Yv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ki=!1;function Kv(t,e){switch(t){case"compositionend":return Im(e);case"keypress":return e.which!==32?null:(Af=!0,Tf);case"textInput":return t=e.data,t===Tf&&Af?null:t;default:return null}}function Zv(t,e){if(Ki)return t==="compositionend"||!gd&&Dm(t,e)?(t=km(),Po=pd=Nr=null,Ki=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lm&&e.locale!=="ko"?null:e.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qv[t.type]:e==="textarea"}function Um(t,e,n,r){hm(r),e=Yo(e,"onChange"),0<e.length&&(n=new md("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ia=null,xa=null;function Jv(t){$m(t,0)}function Sl(t){var e=Ji(t);if(am(e))return t}function e_(t,e){if(t==="change")return e}var Fm=!1;if(ur){var Ql;if(ur){var Jl="oninput"in document;if(!Jl){var Nf=document.createElement("div");Nf.setAttribute("oninput","return;"),Jl=typeof Nf.oninput=="function"}Ql=Jl}else Ql=!1;Fm=Ql&&(!document.documentMode||9<document.documentMode)}function Rf(){ia&&(ia.detachEvent("onpropertychange",Om),xa=ia=null)}function Om(t){if(t.propertyName==="value"&&Sl(xa)){var e=[];Um(e,xa,t,cd(t)),gm(Jv,e)}}function t_(t,e,n){t==="focusin"?(Rf(),ia=e,xa=n,ia.attachEvent("onpropertychange",Om)):t==="focusout"&&Rf()}function n_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(xa)}function r_(t,e){if(t==="click")return Sl(e)}function i_(t,e){if(t==="input"||t==="change")return Sl(e)}function s_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:s_;function ga(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zc.call(e,i)||!In(t[i],e[i]))return!1}return!0}function Pf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kf(t,e){var n=Pf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pf(n)}}function zm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bm(){for(var t=window,e=jo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jo(t.document)}return e}function vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function a_(t){var e=Bm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zm(n.ownerDocument.documentElement,n)){if(r!==null&&vd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=kf(n,s);var a=kf(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var o_=ur&&"documentMode"in document&&11>=document.documentMode,Zi=null,xu=null,sa=null,gu=!1;function Lf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gu||Zi==null||Zi!==jo(r)||(r=Zi,"selectionStart"in r&&vd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sa&&ga(sa,r)||(sa=r,r=Yo(xu,"onSelect"),0<r.length&&(e=new md("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zi)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qi={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},ec={},jm={};ur&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete Qi.animationend.animation,delete Qi.animationiteration.animation,delete Qi.animationstart.animation),"TransitionEvent"in window||delete Qi.transitionend.transition);function Ml(t){if(ec[t])return ec[t];if(!Qi[t])return t;var e=Qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jm)return ec[t]=e[n];return t}var Hm=Ml("animationend"),Vm=Ml("animationiteration"),Gm=Ml("animationstart"),Wm=Ml("transitionend"),Xm=new Map,Df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,e){Xm.set(t,e),Ai(e,[t])}for(var tc=0;tc<Df.length;tc++){var nc=Df[tc],l_=nc.toLowerCase(),c_=nc[0].toUpperCase()+nc.slice(1);$r(l_,"on"+c_)}$r(Hm,"onAnimationEnd");$r(Vm,"onAnimationIteration");$r(Gm,"onAnimationStart");$r("dblclick","onDoubleClick");$r("focusin","onFocus");$r("focusout","onBlur");$r(Wm,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function If(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,lv(r,e,void 0,t),t.currentTarget=null}function $m(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var o=r[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&i.isPropagationStopped())break e;If(i,o,u),s=c}else for(a=0;a<r.length;a++){if(o=r[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&i.isPropagationStopped())break e;If(i,o,u),s=c}}}if(Vo)throw t=fu,Vo=!1,fu=null,t}function rt(t,e){var n=e[Mu];n===void 0&&(n=e[Mu]=new Set);var r=t+"__bubble";n.has(r)||(Ym(e,t,2,!1),n.add(r))}function rc(t,e,n){var r=0;e&&(r|=4),Ym(n,t,r,e)}var Za="_reactListening"+Math.random().toString(36).slice(2);function va(t){if(!t[Za]){t[Za]=!0,tm.forEach(function(n){n!=="selectionchange"&&(u_.has(n)||rc(n,!1,t),rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Za]||(e[Za]=!0,rc("selectionchange",!1,e))}}function Ym(t,e,n,r){switch(Pm(e)){case 1:var i=wv;break;case 4:i=bv;break;default:i=hd}n=i.bind(null,e,n,t),i=void 0,!du||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ic(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;o!==null;){if(a=fi(o),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}o=o.parentNode}}r=r.return}gm(function(){var u=s,h=cd(n),p=[];e:{var f=Xm.get(t);if(f!==void 0){var x=md,_=t;switch(t){case"keypress":if(ko(n)===0)break e;case"keydown":case"keyup":x=Bv;break;case"focusin":_="focus",x=Zl;break;case"focusout":_="blur",x=Zl;break;case"beforeblur":case"afterblur":x=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Vv;break;case Hm:case Vm:case Gm:x=Pv;break;case Wm:x=Wv;break;case"scroll":x=Tv;break;case"wheel":x=$v;break;case"copy":case"cut":case"paste":x=Lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=bf}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var v=u,g;v!==null;){g=v;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,d!==null&&(M=fa(v,d),M!=null&&y.push(_a(v,M,g)))),m)break;v=v.return}0<y.length&&(f=new x(f,_,null,n,h),p.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",f&&n!==cu&&(_=n.relatedTarget||n.fromElement)&&(fi(_)||_[dr]))break e;if((x||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,x?(_=n.relatedTarget||n.toElement,x=u,_=_?fi(_):null,_!==null&&(m=Ci(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(x=null,_=u),x!==_)){if(y=Ef,M="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=bf,M="onPointerLeave",d="onPointerEnter",v="pointer"),m=x==null?f:Ji(x),g=_==null?f:Ji(_),f=new y(M,v+"leave",x,n,h),f.target=m,f.relatedTarget=g,M=null,fi(h)===u&&(y=new y(d,v+"enter",_,n,h),y.target=g,y.relatedTarget=m,M=y),m=M,x&&_)t:{for(y=x,d=_,v=0,g=y;g;g=Ri(g))v++;for(g=0,M=d;M;M=Ri(M))g++;for(;0<v-g;)y=Ri(y),v--;for(;0<g-v;)d=Ri(d),g--;for(;v--;){if(y===d||d!==null&&y===d.alternate)break t;y=Ri(y),d=Ri(d)}y=null}else y=null;x!==null&&Uf(p,f,x,y,!1),_!==null&&m!==null&&Uf(p,m,_,y,!0)}}e:{if(f=u?Ji(u):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var P=e_;else if(Cf(f))if(Fm)P=i_;else{P=n_;var A=t_}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=r_);if(P&&(P=P(t,u))){Um(p,P,n,h);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&iu(f,"number",f.value)}switch(A=u?Ji(u):window,t){case"focusin":(Cf(A)||A.contentEditable==="true")&&(Zi=A,xu=u,sa=null);break;case"focusout":sa=xu=Zi=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Lf(p,n,h);break;case"selectionchange":if(o_)break;case"keydown":case"keyup":Lf(p,n,h)}var T;if(gd)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ki?Dm(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Lm&&n.locale!=="ko"&&(Ki||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ki&&(T=km()):(Nr=h,pd="value"in Nr?Nr.value:Nr.textContent,Ki=!0)),A=Yo(u,C),0<A.length&&(C=new wf(C,t,null,n,h),p.push({event:C,listeners:A}),T?C.data=T:(T=Im(n),T!==null&&(C.data=T)))),(T=qv?Kv(t,n):Zv(t,n))&&(u=Yo(u,"onBeforeInput"),0<u.length&&(h=new wf("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=T))}$m(p,e)})}function _a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fa(t,n),s!=null&&r.unshift(_a(t,s,i)),s=fa(t,e),s!=null&&r.push(_a(t,s,i))),t=t.return}return r}function Ri(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Uf(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&u!==null&&(o=u,i?(c=fa(n,s),c!=null&&a.unshift(_a(n,c,o))):i||(c=fa(n,s),c!=null&&a.push(_a(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var d_=/\r\n?/g,f_=/\u0000|\uFFFD/g;function Ff(t){return(typeof t=="string"?t:""+t).replace(d_,`
`).replace(f_,"")}function Qa(t,e,n){if(e=Ff(e),Ff(t)!==e&&n)throw Error(te(425))}function qo(){}var vu=null,_u=null;function yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Su=typeof setTimeout=="function"?setTimeout:void 0,h_=typeof clearTimeout=="function"?clearTimeout:void 0,Of=typeof Promise=="function"?Promise:void 0,p_=typeof queueMicrotask=="function"?queueMicrotask:typeof Of<"u"?function(t){return Of.resolve(null).then(t).catch(m_)}:Su;function m_(t){setTimeout(function(){throw t})}function sc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ma(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ma(e)}function Ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),Hn="__reactFiber$"+ks,ya="__reactProps$"+ks,dr="__reactContainer$"+ks,Mu="__reactEvents$"+ks,x_="__reactListeners$"+ks,g_="__reactHandles$"+ks;function fi(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dr]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zf(t);t!==null;){if(n=t[Hn])return n;t=zf(t)}return e}t=n,n=t.parentNode}return null}function Pa(t){return t=t[Hn]||t[dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ji(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function El(t){return t[ya]||null}var Eu=[],es=-1;function Yr(t){return{current:t}}function st(t){0>es||(t.current=Eu[es],Eu[es]=null,es--)}function nt(t,e){es++,Eu[es]=t.current,t.current=e}var Vr={},Bt=Yr(Vr),Qt=Yr(!1),yi=Vr;function gs(t,e){var n=t.type.contextTypes;if(!n)return Vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Jt(t){return t=t.childContextTypes,t!=null}function Ko(){st(Qt),st(Bt)}function Bf(t,e,n){if(Bt.current!==Vr)throw Error(te(168));nt(Bt,e),nt(Qt,n)}function qm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(te(108,tv(t)||"Unknown",i));return ut({},n,r)}function Zo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,yi=Bt.current,nt(Bt,t),nt(Qt,Qt.current),!0}function jf(t,e,n){var r=t.stateNode;if(!r)throw Error(te(169));n?(t=qm(t,e,yi),r.__reactInternalMemoizedMergedChildContext=t,st(Qt),st(Bt),nt(Bt,t)):st(Qt),nt(Qt,n)}var ir=null,wl=!1,ac=!1;function Km(t){ir===null?ir=[t]:ir.push(t)}function v_(t){wl=!0,Km(t)}function qr(){if(!ac&&ir!==null){ac=!0;var t=0,e=Je;try{var n=ir;for(Je=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ir=null,wl=!1}catch(i){throw ir!==null&&(ir=ir.slice(t+1)),Sm(ud,qr),i}finally{Je=e,ac=!1}}return null}var ts=[],ns=0,Qo=null,Jo=0,xn=[],gn=0,Si=null,sr=1,ar="";function ai(t,e){ts[ns++]=Jo,ts[ns++]=Qo,Qo=t,Jo=e}function Zm(t,e,n){xn[gn++]=sr,xn[gn++]=ar,xn[gn++]=Si,Si=t;var r=sr;t=ar;var i=32-Ln(r)-1;r&=~(1<<i),n+=1;var s=32-Ln(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,sr=1<<32-Ln(e)+i|n<<i|r,ar=s+t}else sr=1<<s|n<<i|r,ar=t}function _d(t){t.return!==null&&(ai(t,1),Zm(t,1,0))}function yd(t){for(;t===Qo;)Qo=ts[--ns],ts[ns]=null,Jo=ts[--ns],ts[ns]=null;for(;t===Si;)Si=xn[--gn],xn[gn]=null,ar=xn[--gn],xn[gn]=null,sr=xn[--gn],xn[gn]=null}var un=null,ln=null,at=!1,Pn=null;function Qm(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,ln=Ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Si!==null?{id:sr,overflow:ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,ln=null,!0):!1;default:return!1}}function wu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bu(t){if(at){var e=ln;if(e){var n=e;if(!Hf(t,e)){if(wu(t))throw Error(te(418));e=Ir(n.nextSibling);var r=un;e&&Hf(t,e)?Qm(r,n):(t.flags=t.flags&-4097|2,at=!1,un=t)}}else{if(wu(t))throw Error(te(418));t.flags=t.flags&-4097|2,at=!1,un=t}}}function Vf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function Ja(t){if(t!==un)return!1;if(!at)return Vf(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yu(t.type,t.memoizedProps)),e&&(e=ln)){if(wu(t))throw Jm(),Error(te(418));for(;e;)Qm(t,e),e=Ir(e.nextSibling)}if(Vf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=Ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=un?Ir(t.stateNode.nextSibling):null;return!0}function Jm(){for(var t=ln;t;)t=Ir(t.nextSibling)}function vs(){ln=un=null,at=!1}function Sd(t){Pn===null?Pn=[t]:Pn.push(t)}var __=pr.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var r=n.stateNode}if(!r)throw Error(te(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=i.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function eo(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gf(t){var e=t._init;return e(t._payload)}function e0(t){function e(d,v){if(t){var g=d.deletions;g===null?(d.deletions=[v],d.flags|=16):g.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function r(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function i(d,v){return d=zr(d,v),d.index=0,d.sibling=null,d}function s(d,v,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<v?(d.flags|=2,v):g):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,g,M){return v===null||v.tag!==6?(v=hc(g,d.mode,M),v.return=d,v):(v=i(v,g),v.return=d,v)}function c(d,v,g,M){var P=g.type;return P===qi?h(d,v,g.props.children,M,g.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===wr&&Gf(P)===v.type)?(M=i(v,g.props),M.ref=js(d,v,g),M.return=d,M):(M=zo(g.type,g.key,g.props,null,d.mode,M),M.ref=js(d,v,g),M.return=d,M)}function u(d,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=pc(g,d.mode,M),v.return=d,v):(v=i(v,g.children||[]),v.return=d,v)}function h(d,v,g,M,P){return v===null||v.tag!==7?(v=vi(g,d.mode,M,P),v.return=d,v):(v=i(v,g),v.return=d,v)}function p(d,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=hc(""+v,d.mode,g),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return g=zo(v.type,v.key,v.props,null,d.mode,g),g.ref=js(d,null,v),g.return=d,g;case Yi:return v=pc(v,d.mode,g),v.return=d,v;case wr:var M=v._init;return p(d,M(v._payload),g)}if(Ks(v)||Us(v))return v=vi(v,d.mode,g,null),v.return=d,v;eo(d,v)}return null}function f(d,v,g,M){var P=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:o(d,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Va:return g.key===P?c(d,v,g,M):null;case Yi:return g.key===P?u(d,v,g,M):null;case wr:return P=g._init,f(d,v,P(g._payload),M)}if(Ks(g)||Us(g))return P!==null?null:h(d,v,g,M,null);eo(d,g)}return null}function x(d,v,g,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(g)||null,o(v,d,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Va:return d=d.get(M.key===null?g:M.key)||null,c(v,d,M,P);case Yi:return d=d.get(M.key===null?g:M.key)||null,u(v,d,M,P);case wr:var A=M._init;return x(d,v,g,A(M._payload),P)}if(Ks(M)||Us(M))return d=d.get(g)||null,h(v,d,M,P,null);eo(v,M)}return null}function _(d,v,g,M){for(var P=null,A=null,T=v,C=v=0,w=null;T!==null&&C<g.length;C++){T.index>C?(w=T,T=null):w=T.sibling;var S=f(d,T,g[C],M);if(S===null){T===null&&(T=w);break}t&&T&&S.alternate===null&&e(d,T),v=s(S,v,C),A===null?P=S:A.sibling=S,A=S,T=w}if(C===g.length)return n(d,T),at&&ai(d,C),P;if(T===null){for(;C<g.length;C++)T=p(d,g[C],M),T!==null&&(v=s(T,v,C),A===null?P=T:A.sibling=T,A=T);return at&&ai(d,C),P}for(T=r(d,T);C<g.length;C++)w=x(T,d,C,g[C],M),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?C:w.key),v=s(w,v,C),A===null?P=w:A.sibling=w,A=w);return t&&T.forEach(function(R){return e(d,R)}),at&&ai(d,C),P}function y(d,v,g,M){var P=Us(g);if(typeof P!="function")throw Error(te(150));if(g=P.call(g),g==null)throw Error(te(151));for(var A=P=null,T=v,C=v=0,w=null,S=g.next();T!==null&&!S.done;C++,S=g.next()){T.index>C?(w=T,T=null):w=T.sibling;var R=f(d,T,S.value,M);if(R===null){T===null&&(T=w);break}t&&T&&R.alternate===null&&e(d,T),v=s(R,v,C),A===null?P=R:A.sibling=R,A=R,T=w}if(S.done)return n(d,T),at&&ai(d,C),P;if(T===null){for(;!S.done;C++,S=g.next())S=p(d,S.value,M),S!==null&&(v=s(S,v,C),A===null?P=S:A.sibling=S,A=S);return at&&ai(d,C),P}for(T=r(d,T);!S.done;C++,S=g.next())S=x(T,d,C,S.value,M),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?C:S.key),v=s(S,v,C),A===null?P=S:A.sibling=S,A=S);return t&&T.forEach(function(W){return e(d,W)}),at&&ai(d,C),P}function m(d,v,g,M){if(typeof g=="object"&&g!==null&&g.type===qi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Va:e:{for(var P=g.key,A=v;A!==null;){if(A.key===P){if(P=g.type,P===qi){if(A.tag===7){n(d,A.sibling),v=i(A,g.props.children),v.return=d,d=v;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===wr&&Gf(P)===A.type){n(d,A.sibling),v=i(A,g.props),v.ref=js(d,A,g),v.return=d,d=v;break e}n(d,A);break}else e(d,A);A=A.sibling}g.type===qi?(v=vi(g.props.children,d.mode,M,g.key),v.return=d,d=v):(M=zo(g.type,g.key,g.props,null,d.mode,M),M.ref=js(d,v,g),M.return=d,d=M)}return a(d);case Yi:e:{for(A=g.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(d,v.sibling),v=i(v,g.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=pc(g,d.mode,M),v.return=d,d=v}return a(d);case wr:return A=g._init,m(d,v,A(g._payload),M)}if(Ks(g))return _(d,v,g,M);if(Us(g))return y(d,v,g,M);eo(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(d,v.sibling),v=i(v,g),v.return=d,d=v):(n(d,v),v=hc(g,d.mode,M),v.return=d,d=v),a(d)):n(d,v)}return m}var _s=e0(!0),t0=e0(!1),el=Yr(null),tl=null,rs=null,Md=null;function Ed(){Md=rs=tl=null}function wd(t){var e=el.current;st(el),t._currentValue=e}function Tu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ds(t,e){tl=t,Md=rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(Md!==t)if(t={context:t,memoizedValue:e,next:null},rs===null){if(tl===null)throw Error(te(308));rs=t,tl.dependencies={lanes:0,firstContext:t}}else rs=rs.next=t;return e}var hi=null;function bd(t){hi===null?hi=[t]:hi.push(t)}function n0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,bd(e)):(n.next=i.next,i.next=n),e.interleaved=n,fr(t,r)}function fr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var br=!1;function Td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,We&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,fr(t,n)}return i=r.interleaved,i===null?(e.next=e,bd(r)):(e.next=i.next,i.next=e),r.interleaved=e,fr(t,n)}function Lo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,dd(t,n)}}function Wf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nl(t,e,n,r){var i=t.updateQueue;br=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;a=0,h=u=c=null,o=s;do{var f=o.lane,x=o.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(f=e,x=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){p=_.call(x,p,f);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(x,p,f):_,f==null)break e;p=ut({},p,f);break e;case 2:br=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[o]:f.push(o))}else x={eventTime:x,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=x,c=p):h=h.next=x,a|=f;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;f=o,o=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ei|=a,t.lanes=a,t.memoizedState=p}}function Xf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(te(191,i));i.call(r)}}}var ka={},$n=Yr(ka),Sa=Yr(ka),Ma=Yr(ka);function pi(t){if(t===ka)throw Error(te(174));return t}function Ad(t,e){switch(nt(Ma,e),nt(Sa,t),nt($n,ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:au(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=au(e,t)}st($n),nt($n,e)}function ys(){st($n),st(Sa),st(Ma)}function i0(t){pi(Ma.current);var e=pi($n.current),n=au(e,t.type);e!==n&&(nt(Sa,t),nt($n,n))}function Cd(t){Sa.current===t&&(st($n),st(Sa))}var lt=Yr(0);function rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oc=[];function Nd(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var Do=pr.ReactCurrentDispatcher,lc=pr.ReactCurrentBatchConfig,Mi=0,ct=null,St=null,Ct=null,il=!1,aa=!1,Ea=0,y_=0;function Dt(){throw Error(te(321))}function Rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function Pd(t,e,n,r,i,s){if(Mi=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Do.current=t===null||t.memoizedState===null?w_:b_,t=n(r,i),aa){s=0;do{if(aa=!1,Ea=0,25<=s)throw Error(te(301));s+=1,Ct=St=null,e.updateQueue=null,Do.current=T_,t=n(r,i)}while(aa)}if(Do.current=sl,e=St!==null&&St.next!==null,Mi=0,Ct=St=ct=null,il=!1,e)throw Error(te(300));return t}function kd(){var t=Ea!==0;return Ea=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ct.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function wn(){if(St===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Ct===null?ct.memoizedState:Ct.next;if(e!==null)Ct=e,St=t;else{if(t===null)throw Error(te(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ct===null?ct.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function wa(t,e){return typeof e=="function"?e(t):e}function cc(t){var e=wn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var r=St,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var o=a=null,c=null,u=s;do{var h=u.lane;if((Mi&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=p,a=r):c=c.next=p,ct.lanes|=h,Ei|=h}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=o,In(r,e.memoizedState)||(Zt=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ct.lanes|=s,Ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uc(t){var e=wn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);In(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function s0(){}function a0(t,e){var n=ct,r=wn(),i=e(),s=!In(r.memoizedState,i);if(s&&(r.memoizedState=i,Zt=!0),r=r.queue,Ld(c0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,ba(9,l0.bind(null,n,r,i,e),void 0,null),Rt===null)throw Error(te(349));Mi&30||o0(n,e,i)}return i}function o0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l0(t,e,n,r){e.value=n,e.getSnapshot=r,u0(e)&&d0(t)}function c0(t,e,n){return n(function(){u0(e)&&d0(t)})}function u0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function d0(t){var e=fr(t,1);e!==null&&Dn(e,t,1,-1)}function $f(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},e.queue=t,t=t.dispatch=E_.bind(null,ct,t),[e.memoizedState,t]}function ba(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function f0(){return wn().memoizedState}function Io(t,e,n,r){var i=zn();ct.flags|=t,i.memoizedState=ba(1|e,n,void 0,r===void 0?null:r)}function bl(t,e,n,r){var i=wn();r=r===void 0?null:r;var s=void 0;if(St!==null){var a=St.memoizedState;if(s=a.destroy,r!==null&&Rd(r,a.deps)){i.memoizedState=ba(e,n,s,r);return}}ct.flags|=t,i.memoizedState=ba(1|e,n,s,r)}function Yf(t,e){return Io(8390656,8,t,e)}function Ld(t,e){return bl(2048,8,t,e)}function h0(t,e){return bl(4,2,t,e)}function p0(t,e){return bl(4,4,t,e)}function m0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function x0(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,m0.bind(null,e,t),n)}function Dd(){}function g0(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function v0(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _0(t,e,n){return Mi&21?(In(n,e)||(n=wm(),ct.lanes|=n,Ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function S_(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var r=lc.transition;lc.transition={};try{t(!1),e()}finally{Je=n,lc.transition=r}}function y0(){return wn().memoizedState}function M_(t,e,n){var r=Or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},S0(t))M0(e,n);else if(n=n0(t,e,n,r),n!==null){var i=Gt();Dn(n,t,r,i),E0(n,e,r)}}function E_(t,e,n){var r=Or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(S0(t))M0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,In(o,a)){var c=e.interleaved;c===null?(i.next=i,bd(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=n0(t,e,i,r),n!==null&&(i=Gt(),Dn(n,t,r,i),E0(n,e,r))}}function S0(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function M0(t,e){aa=il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function E0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,dd(t,n)}}var sl={readContext:En,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},w_={readContext:En,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:Yf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Io(4194308,4,m0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Io(4194308,4,t,e)},useInsertionEffect:function(t,e){return Io(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=M_.bind(null,ct,t),[r.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:$f,useDebugValue:Dd,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=$f(!1),e=t[0];return t=S_.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ct,i=zn();if(at){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Rt===null)throw Error(te(349));Mi&30||o0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Yf(c0.bind(null,r,s,t),[t]),r.flags|=2048,ba(9,l0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=Rt.identifierPrefix;if(at){var n=ar,r=sr;n=(r&~(1<<32-Ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=y_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},b_={readContext:En,useCallback:g0,useContext:En,useEffect:Ld,useImperativeHandle:x0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:v0,useReducer:cc,useRef:f0,useState:function(){return cc(wa)},useDebugValue:Dd,useDeferredValue:function(t){var e=wn();return _0(e,St.memoizedState,t)},useTransition:function(){var t=cc(wa)[0],e=wn().memoizedState;return[t,e]},useMutableSource:s0,useSyncExternalStore:a0,useId:y0,unstable_isNewReconciler:!1},T_={readContext:En,useCallback:g0,useContext:En,useEffect:Ld,useImperativeHandle:x0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:v0,useReducer:uc,useRef:f0,useState:function(){return uc(wa)},useDebugValue:Dd,useDeferredValue:function(t){var e=wn();return St===null?e.memoizedState=t:_0(e,St.memoizedState,t)},useTransition:function(){var t=uc(wa)[0],e=wn().memoizedState;return[t,e]},useMutableSource:s0,useSyncExternalStore:a0,useId:y0,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Au(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tl={isMounted:function(t){return(t=t._reactInternals)?Ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=Or(t),s=lr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(Dn(e,t,i,r),Lo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=Or(t),s=lr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(Dn(e,t,i,r),Lo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),r=Or(t),i=lr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ur(t,i,r),e!==null&&(Dn(e,t,r,n),Lo(e,t,r))}};function qf(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!ga(n,r)||!ga(i,s):!0}function w0(t,e,n){var r=!1,i=Vr,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(i=Jt(e)?yi:Bt.current,r=e.contextTypes,s=(r=r!=null)?gs(t,i):Vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tl.enqueueReplaceState(e,e.state,null)}function Cu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Td(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=En(s):(s=Jt(e)?yi:Bt.current,i.context=gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Au(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tl.enqueueReplaceState(i,i.state,null),nl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e){try{var n="",r=e;do n+=ev(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var A_=typeof WeakMap=="function"?WeakMap:Map;function b0(t,e,n){n=lr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ol||(ol=!0,zu=r),Nu(t,e)},n}function T0(t,e,n){n=lr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Nu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nu(t,e),typeof r!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Zf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new A_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=j_.bind(null,t,e,n),e.then(t,t))}function Qf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=lr(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var C_=pr.ReactCurrentOwner,Zt=!1;function Vt(t,e,n,r){e.child=t===null?t0(e,null,n,r):_s(e,t.child,n,r)}function eh(t,e,n,r,i){n=n.render;var s=e.ref;return ds(e,i),r=Pd(t,e,n,r,s,i),n=kd(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,hr(t,e,i)):(at&&n&&_d(e),e.flags|=1,Vt(t,e,r,i),e.child)}function th(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Hd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,A0(t,e,s,r,i)):(t=zo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(a,r)&&t.ref===e.ref)return hr(t,e,i)}return e.flags|=1,t=zr(s,r),t.ref=e.ref,t.return=e,e.child=t}function A0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ga(s,r)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,hr(t,e,i)}return Ru(t,e,n,r,i)}function C0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(ss,an),an|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(ss,an),an|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,nt(ss,an),an|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,nt(ss,an),an|=r;return Vt(t,e,i,n),e.child}function N0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ru(t,e,n,r,i){var s=Jt(n)?yi:Bt.current;return s=gs(e,s),ds(e,i),n=Pd(t,e,n,r,s,i),r=kd(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,hr(t,e,i)):(at&&r&&_d(e),e.flags|=1,Vt(t,e,n,i),e.child)}function nh(t,e,n,r,i){if(Jt(n)){var s=!0;Zo(e)}else s=!1;if(ds(e,i),e.stateNode===null)Uo(t,e),w0(e,n,r),Cu(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=En(u):(u=Jt(n)?yi:Bt.current,u=gs(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||c!==u)&&Kf(e,a,r,u),br=!1;var f=e.memoizedState;a.state=f,nl(e,r,a,i),c=e.memoizedState,o!==r||f!==c||Qt.current||br?(typeof h=="function"&&(Au(e,n,h,r),c=e.memoizedState),(o=br||qf(e,n,o,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),a.props=r,a.state=c,a.context=u,r=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,r0(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Nn(e.type,o),a.props=u,p=e.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=En(c):(c=Jt(n)?yi:Bt.current,c=gs(e,c));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==c)&&Kf(e,a,r,c),br=!1,f=e.memoizedState,a.state=f,nl(e,r,a,i);var _=e.memoizedState;o!==p||f!==_||Qt.current||br?(typeof x=="function"&&(Au(e,n,x,r),_=e.memoizedState),(u=br||qf(e,n,u,r,f,_,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,_,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,_,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),a.props=r,a.state=_,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Pu(t,e,n,r,s,i)}function Pu(t,e,n,r,i,s){N0(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&jf(e,n,!1),hr(t,e,s);r=e.stateNode,C_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,o,s)):Vt(t,e,o,s),e.memoizedState=r.state,i&&jf(e,n,!0),e.child}function R0(t){var e=t.stateNode;e.pendingContext?Bf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bf(t,e.context,!1),Ad(t,e.containerInfo)}function rh(t,e,n,r,i){return vs(),Sd(i),e.flags|=256,Vt(t,e,n,r),e.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Lu(t){return{baseLanes:t,cachePool:null,transitions:null}}function P0(t,e,n){var r=e.pendingProps,i=lt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),nt(lt,i&1),t===null)return bu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Nl(a,r,0,null),t=vi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lu(n),e.memoizedState=ku,t):Id(e,a));if(i=t.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return N_(t,e,a,r,o,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,o=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=zr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=zr(o,s):(s=vi(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?Lu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=ku,r}return s=t.child,t=s.sibling,r=zr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Id(t,e){return e=Nl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function to(t,e,n,r){return r!==null&&Sd(r),_s(e,t.child,null,n),t=Id(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function N_(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=dc(Error(te(422))),to(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Nl({mode:"visible",children:r.children},i,0,null),s=vi(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&_s(e,t.child,null,a),e.child.memoizedState=Lu(a),e.memoizedState=ku,s);if(!(e.mode&1))return to(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,s=Error(te(419)),r=dc(s,r,void 0),to(t,e,a,r)}if(o=(a&t.childLanes)!==0,Zt||o){if(r=Rt,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,fr(t,i),Dn(r,t,i,-1))}return jd(),r=dc(Error(te(421))),to(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=H_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ln=Ir(i.nextSibling),un=e,at=!0,Pn=null,t!==null&&(xn[gn++]=sr,xn[gn++]=ar,xn[gn++]=Si,sr=t.id,ar=t.overflow,Si=e),e=Id(e,r.children),e.flags|=4096,e)}function ih(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Tu(t.return,e,n)}function fc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function k0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Vt(t,e,r.children,n),r=lt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ih(t,n,e);else if(t.tag===19)ih(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(nt(lt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&rl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),fc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&rl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}fc(e,!0,n,null,s);break;case"together":fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Uo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function R_(t,e,n){switch(e.tag){case 3:R0(e),vs();break;case 5:i0(e);break;case 1:Jt(e.type)&&Zo(e);break;case 4:Ad(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;nt(el,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?P0(t,e,n):(nt(lt,lt.current&1),t=hr(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return k0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),nt(lt,lt.current),r)break;return null;case 22:case 23:return e.lanes=0,C0(t,e,n)}return hr(t,e,n)}var L0,Du,D0,I0;L0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Du=function(){};D0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pi($n.current);var s=null;switch(n){case"input":i=nu(t,i),r=nu(t,r),s=[];break;case"select":i=ut({},i,{value:void 0}),r=ut({},r,{value:void 0}),s=[];break;case"textarea":i=su(t,i),r=su(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qo)}ou(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ua.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&rt("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};I0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Hs(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function P_(t,e,n){var r=e.pendingProps;switch(yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return Jt(e.type)&&Ko(),It(e),null;case 3:return r=e.stateNode,ys(),st(Qt),st(Bt),Nd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pn!==null&&(Hu(Pn),Pn=null))),Du(t,e),It(e),null;case 5:Cd(e);var i=pi(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)D0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(te(166));return It(e),null}if(t=pi($n.current),Ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Hn]=e,r[ya]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",r),rt("close",r);break;case"iframe":case"object":case"embed":rt("load",r);break;case"video":case"audio":for(i=0;i<Qs.length;i++)rt(Qs[i],r);break;case"source":rt("error",r);break;case"img":case"image":case"link":rt("error",r),rt("load",r);break;case"details":rt("toggle",r);break;case"input":hf(r,s),rt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},rt("invalid",r);break;case"textarea":mf(r,s),rt("invalid",r)}ou(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?r.textContent!==o&&(s.suppressHydrationWarning!==!0&&Qa(r.textContent,o,t),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Qa(r.textContent,o,t),i=["children",""+o]):ua.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&rt("scroll",r)}switch(n){case"input":Ga(r),pf(r,s,!0);break;case"textarea":Ga(r),xf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=qo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[Hn]=e,t[ya]=r,L0(t,e,!1,!1),e.stateNode=t;e:{switch(a=lu(n,r),n){case"dialog":rt("cancel",t),rt("close",t),i=r;break;case"iframe":case"object":case"embed":rt("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qs.length;i++)rt(Qs[i],t);i=r;break;case"source":rt("error",t),i=r;break;case"img":case"image":case"link":rt("error",t),rt("load",t),i=r;break;case"details":rt("toggle",t),i=r;break;case"input":hf(t,r),i=nu(t,r),rt("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ut({},r,{value:void 0}),rt("invalid",t);break;case"textarea":mf(t,r),i=su(t,r),rt("invalid",t);break;default:i=r}ou(n,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?fm(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&um(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&da(t,c):typeof c=="number"&&da(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?c!=null&&s==="onScroll"&&rt("scroll",t):c!=null&&sd(t,s,c,a))}switch(n){case"input":Ga(t),pf(t,r,!1);break;case"textarea":Ga(t),xf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?os(t,!!r.multiple,s,!1):r.defaultValue!=null&&os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)I0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(te(166));if(n=pi(Ma.current),pi($n.current),Ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[Hn]=e,(s=r.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:Qa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hn]=e,e.stateNode=r}return It(e),null;case 13:if(st(lt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&ln!==null&&e.mode&1&&!(e.flags&128))Jm(),vs(),e.flags|=98560,s=!1;else if(s=Ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Hn]=e}else vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else Pn!==null&&(Hu(Pn),Pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?Mt===0&&(Mt=3):jd())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return ys(),Du(t,e),t===null&&va(e.stateNode.containerInfo),It(e),null;case 10:return wd(e.type._context),It(e),null;case 17:return Jt(e.type)&&Ko(),It(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return It(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)Hs(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=rl(t),a!==null){for(e.flags|=128,Hs(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Ms&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304)}else{if(!r)if(t=rl(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!at)return It(e),null}else 2*xt()-s.renderingStartTime>Ms&&n!==1073741824&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=lt.current,nt(lt,r?n&1|2:n&1),e):(It(e),null);case 22:case 23:return Bd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?an&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function k_(t,e){switch(yd(e),e.tag){case 1:return Jt(e.type)&&Ko(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),st(Qt),st(Bt),Nd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cd(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return ys(),null;case 10:return wd(e.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var no=!1,Ot=!1,L_=typeof WeakSet=="function"?WeakSet:Set,me=null;function is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ht(t,e,r)}else n.current=null}function Iu(t,e,n){try{n()}catch(r){ht(t,e,r)}}var sh=!1;function D_(t,e){if(vu=Xo,t=Bm(),vd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,h=0,p=t,f=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(o=a+i),p!==s||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(x=p.firstChild)!==null;)f=p,p=x;for(;;){if(p===t)break t;if(f===n&&++u===i&&(o=a),f===s&&++h===r&&(c=a),(x=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=x}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(_u={focusedElem:t,selectionRange:n},Xo=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Nn(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(M){ht(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=sh,sh=!1,_}function oa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Iu(e,n,s)}i=i.next}while(i!==r)}}function Al(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Uu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function U0(t){var e=t.alternate;e!==null&&(t.alternate=null,U0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[ya],delete e[Mu],delete e[x_],delete e[g_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F0(t){return t.tag===5||t.tag===3||t.tag===4}function ah(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qo));else if(r!==4&&(t=t.child,t!==null))for(Fu(t,e,n),t=t.sibling;t!==null;)Fu(t,e,n),t=t.sibling}function Ou(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ou(t,e,n),t=t.sibling;t!==null;)Ou(t,e,n),t=t.sibling}var Pt=null,Rn=!1;function xr(t,e,n){for(n=n.child;n!==null;)O0(t,e,n),n=n.sibling}function O0(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 5:Ot||is(n,e);case 6:var r=Pt,i=Rn;Pt=null,xr(t,e,n),Pt=r,Rn=i,Pt!==null&&(Rn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Rn?(t=Pt,n=n.stateNode,t.nodeType===8?sc(t.parentNode,n):t.nodeType===1&&sc(t,n),ma(t)):sc(Pt,n.stateNode));break;case 4:r=Pt,i=Rn,Pt=n.stateNode.containerInfo,Rn=!0,xr(t,e,n),Pt=r,Rn=i;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Iu(n,e,a),i=i.next}while(i!==r)}xr(t,e,n);break;case 1:if(!Ot&&(is(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){ht(n,e,o)}xr(t,e,n);break;case 21:xr(t,e,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,xr(t,e,n),Ot=r):xr(t,e,n);break;default:xr(t,e,n)}}function oh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new L_),e.forEach(function(r){var i=V_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Pt=o.stateNode,Rn=!1;break e;case 3:Pt=o.stateNode.containerInfo,Rn=!0;break e;case 4:Pt=o.stateNode.containerInfo,Rn=!0;break e}o=o.return}if(Pt===null)throw Error(te(160));O0(s,a,i),Pt=null,Rn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){ht(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z0(e,t),e=e.sibling}function z0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),On(t),r&4){try{oa(3,t,t.return),Al(3,t)}catch(y){ht(t,t.return,y)}try{oa(5,t,t.return)}catch(y){ht(t,t.return,y)}}break;case 1:bn(e,t),On(t),r&512&&n!==null&&is(n,n.return);break;case 5:if(bn(e,t),On(t),r&512&&n!==null&&is(n,n.return),t.flags&32){var i=t.stateNode;try{da(i,"")}catch(y){ht(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&om(i,s),lu(o,a);var u=lu(o,s);for(a=0;a<c.length;a+=2){var h=c[a],p=c[a+1];h==="style"?fm(i,p):h==="dangerouslySetInnerHTML"?um(i,p):h==="children"?da(i,p):sd(i,h,p,u)}switch(o){case"input":ru(i,s);break;case"textarea":lm(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?os(i,!!s.multiple,x,!1):f!==!!s.multiple&&(s.defaultValue!=null?os(i,!!s.multiple,s.defaultValue,!0):os(i,!!s.multiple,s.multiple?[]:"",!1))}i[ya]=s}catch(y){ht(t,t.return,y)}}break;case 6:if(bn(e,t),On(t),r&4){if(t.stateNode===null)throw Error(te(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ht(t,t.return,y)}}break;case 3:if(bn(e,t),On(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(e.containerInfo)}catch(y){ht(t,t.return,y)}break;case 4:bn(e,t),On(t);break;case 13:bn(e,t),On(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Od=xt())),r&4&&oh(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(u=Ot)||h,bn(e,t),Ot=u):bn(e,t),On(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(me=t,h=t.child;h!==null;){for(p=me=h;me!==null;){switch(f=me,x=f.child,f.tag){case 0:case 11:case 14:case 15:oa(4,f,f.return);break;case 1:is(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ht(r,n,y)}}break;case 5:is(f,f.return);break;case 22:if(f.memoizedState!==null){ch(p);continue}}x!==null?(x.return=f,me=x):ch(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=dm("display",a))}catch(y){ht(t,t.return,y)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){ht(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bn(e,t),On(t),r&4&&oh(t);break;case 21:break;default:bn(e,t),On(t)}}function On(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(F0(n)){var r=n;break e}n=n.return}throw Error(te(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(da(i,""),r.flags&=-33);var s=ah(t);Ou(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=ah(t);Fu(t,o,a);break;default:throw Error(te(161))}}catch(c){ht(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function I_(t,e,n){me=t,B0(t)}function B0(t,e,n){for(var r=(t.mode&1)!==0;me!==null;){var i=me,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||no;if(!a){var o=i.alternate,c=o!==null&&o.memoizedState!==null||Ot;o=no;var u=Ot;if(no=a,(Ot=c)&&!u)for(me=i;me!==null;)a=me,c=a.child,a.tag===22&&a.memoizedState!==null?uh(i):c!==null?(c.return=a,me=c):uh(i);for(;s!==null;)me=s,B0(s),s=s.sibling;me=i,no=o,Ot=u}lh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,me=s):lh(t)}}function lh(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Al(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xf(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xf(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ma(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ot||e.flags&512&&Uu(e)}catch(f){ht(e,e.return,f)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function ch(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function uh(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Al(4,e)}catch(c){ht(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){ht(e,i,c)}}var s=e.return;try{Uu(e)}catch(c){ht(e,s,c)}break;case 5:var a=e.return;try{Uu(e)}catch(c){ht(e,a,c)}}}catch(c){ht(e,e.return,c)}if(e===t){me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,me=o;break}me=e.return}}var U_=Math.ceil,al=pr.ReactCurrentDispatcher,Ud=pr.ReactCurrentOwner,Mn=pr.ReactCurrentBatchConfig,We=0,Rt=null,yt=null,kt=0,an=0,ss=Yr(0),Mt=0,Ta=null,Ei=0,Cl=0,Fd=0,la=null,qt=null,Od=0,Ms=1/0,rr=null,ol=!1,zu=null,Fr=null,ro=!1,Rr=null,ll=0,ca=0,Bu=null,Fo=-1,Oo=0;function Gt(){return We&6?xt():Fo!==-1?Fo:Fo=xt()}function Or(t){return t.mode&1?We&2&&kt!==0?kt&-kt:__.transition!==null?(Oo===0&&(Oo=wm()),Oo):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Pm(t.type)),t):1}function Dn(t,e,n,r){if(50<ca)throw ca=0,Bu=null,Error(te(185));Na(t,n,r),(!(We&2)||t!==Rt)&&(t===Rt&&(!(We&2)&&(Cl|=n),Mt===4&&Ar(t,kt)),en(t,r),n===1&&We===0&&!(e.mode&1)&&(Ms=xt()+500,wl&&qr()))}function en(t,e){var n=t.callbackNode;_v(t,e);var r=Wo(t,t===Rt?kt:0);if(r===0)n!==null&&_f(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_f(n),e===1)t.tag===0?v_(dh.bind(null,t)):Km(dh.bind(null,t)),p_(function(){!(We&6)&&qr()}),n=null;else{switch(bm(r)){case 1:n=ud;break;case 4:n=Mm;break;case 16:n=Go;break;case 536870912:n=Em;break;default:n=Go}n=Y0(n,j0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j0(t,e){if(Fo=-1,Oo=0,We&6)throw Error(te(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var r=Wo(t,t===Rt?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cl(t,r);else{e=r;var i=We;We|=2;var s=V0();(Rt!==t||kt!==e)&&(rr=null,Ms=xt()+500,gi(t,e));do try{z_();break}catch(o){H0(t,o)}while(!0);Ed(),al.current=s,We=i,yt!==null?e=0:(Rt=null,kt=0,e=Mt)}if(e!==0){if(e===2&&(i=hu(t),i!==0&&(r=i,e=ju(t,i))),e===1)throw n=Ta,gi(t,0),Ar(t,r),en(t,xt()),n;if(e===6)Ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!F_(i)&&(e=cl(t,r),e===2&&(s=hu(t),s!==0&&(r=s,e=ju(t,s))),e===1))throw n=Ta,gi(t,0),Ar(t,r),en(t,xt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(te(345));case 2:oi(t,qt,rr);break;case 3:if(Ar(t,r),(r&130023424)===r&&(e=Od+500-xt(),10<e)){if(Wo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Su(oi.bind(null,t,qt,rr),e);break}oi(t,qt,rr);break;case 4:if(Ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Ln(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=xt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*U_(r/1960))-r,10<r){t.timeoutHandle=Su(oi.bind(null,t,qt,rr),r);break}oi(t,qt,rr);break;case 5:oi(t,qt,rr);break;default:throw Error(te(329))}}}return en(t,xt()),t.callbackNode===n?j0.bind(null,t):null}function ju(t,e){var n=la;return t.current.memoizedState.isDehydrated&&(gi(t,e).flags|=256),t=cl(t,e),t!==2&&(e=qt,qt=n,e!==null&&Hu(e)),t}function Hu(t){qt===null?qt=t:qt.push.apply(qt,t)}function F_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!In(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~Fd,e&=~Cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ln(e),r=1<<n;t[n]=-1,e&=~r}}function dh(t){if(We&6)throw Error(te(327));fs();var e=Wo(t,0);if(!(e&1))return en(t,xt()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var r=hu(t);r!==0&&(e=r,n=ju(t,r))}if(n===1)throw n=Ta,gi(t,0),Ar(t,e),en(t,xt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,oi(t,qt,rr),en(t,xt()),null}function zd(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Ms=xt()+500,wl&&qr())}}function wi(t){Rr!==null&&Rr.tag===0&&!(We&6)&&fs();var e=We;We|=1;var n=Mn.transition,r=Je;try{if(Mn.transition=null,Je=1,t)return t()}finally{Je=r,Mn.transition=n,We=e,!(We&6)&&qr()}}function Bd(){an=ss.current,st(ss)}function gi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,h_(n)),yt!==null)for(n=yt.return;n!==null;){var r=n;switch(yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:ys(),st(Qt),st(Bt),Nd();break;case 5:Cd(r);break;case 4:ys();break;case 13:st(lt);break;case 19:st(lt);break;case 10:wd(r.type._context);break;case 22:case 23:Bd()}n=n.return}if(Rt=t,yt=t=zr(t.current,null),kt=an=e,Mt=0,Ta=null,Fd=Cl=Ei=0,qt=la=null,hi!==null){for(e=0;e<hi.length;e++)if(n=hi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}hi=null}return t}function H0(t,e){do{var n=yt;try{if(Ed(),Do.current=sl,il){for(var r=ct.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}il=!1}if(Mi=0,Ct=St=ct=null,aa=!1,Ea=0,Ud.current=null,n===null||n.return===null){Mt=1,Ta=e,yt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=kt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Qf(a);if(x!==null){x.flags&=-257,Jf(x,a,o,s,e),x.mode&1&&Zf(s,u,e),e=x,c=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(c),e.updateQueue=y}else _.add(c);break e}else{if(!(e&1)){Zf(s,u,e),jd();break e}c=Error(te(426))}}else if(at&&o.mode&1){var m=Qf(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Jf(m,a,o,s,e),Sd(Ss(c,o));break e}}s=c=Ss(c,o),Mt!==4&&(Mt=2),la===null?la=[s]:la.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=b0(s,c,e);Wf(s,d);break e;case 1:o=c;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Fr===null||!Fr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=T0(s,o,e);Wf(s,M);break e}}s=s.return}while(s!==null)}W0(n)}catch(P){e=P,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function V0(){var t=al.current;return al.current=sl,t===null?sl:t}function jd(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Rt===null||!(Ei&268435455)&&!(Cl&268435455)||Ar(Rt,kt)}function cl(t,e){var n=We;We|=2;var r=V0();(Rt!==t||kt!==e)&&(rr=null,gi(t,e));do try{O_();break}catch(i){H0(t,i)}while(!0);if(Ed(),We=n,al.current=r,yt!==null)throw Error(te(261));return Rt=null,kt=0,Mt}function O_(){for(;yt!==null;)G0(yt)}function z_(){for(;yt!==null&&!uv();)G0(yt)}function G0(t){var e=$0(t.alternate,t,an);t.memoizedProps=t.pendingProps,e===null?W0(t):yt=e,Ud.current=null}function W0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=k_(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,yt=null;return}}else if(n=P_(n,e,an),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Mt===0&&(Mt=5)}function oi(t,e,n){var r=Je,i=Mn.transition;try{Mn.transition=null,Je=1,B_(t,e,n,r)}finally{Mn.transition=i,Je=r}return null}function B_(t,e,n,r){do fs();while(Rr!==null);if(We&6)throw Error(te(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yv(t,s),t===Rt&&(yt=Rt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,Y0(Go,function(){return fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var a=Je;Je=1;var o=We;We|=4,Ud.current=null,D_(t,n),z0(n,t),a_(_u),Xo=!!vu,_u=vu=null,t.current=n,I_(n),dv(),We=o,Je=a,Mn.transition=s}else t.current=n;if(ro&&(ro=!1,Rr=t,ll=i),s=t.pendingLanes,s===0&&(Fr=null),pv(n.stateNode),en(t,xt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ol)throw ol=!1,t=zu,zu=null,t;return ll&1&&t.tag!==0&&fs(),s=t.pendingLanes,s&1?t===Bu?ca++:(ca=0,Bu=t):ca=0,qr(),null}function fs(){if(Rr!==null){var t=bm(ll),e=Mn.transition,n=Je;try{if(Mn.transition=null,Je=16>t?16:t,Rr===null)var r=!1;else{if(t=Rr,Rr=null,ll=0,We&6)throw Error(te(331));var i=We;for(We|=4,me=t.current;me!==null;){var s=me,a=s.child;if(me.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(me=u;me!==null;){var h=me;switch(h.tag){case 0:case 11:case 15:oa(8,h,s)}var p=h.child;if(p!==null)p.return=h,me=p;else for(;me!==null;){h=me;var f=h.sibling,x=h.return;if(U0(h),h===u){me=null;break}if(f!==null){f.return=x,me=f;break}me=x}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,me=a;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,me=d;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){a=me;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,me=g;else e:for(a=v;me!==null;){if(o=me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Al(9,o)}}catch(P){ht(o,o.return,P)}if(o===a){me=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,me=M;break e}me=o.return}}if(We=i,qr(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(_l,t)}catch{}r=!0}return r}finally{Je=n,Mn.transition=e}}return!1}function fh(t,e,n){e=Ss(n,e),e=b0(t,e,1),t=Ur(t,e,1),e=Gt(),t!==null&&(Na(t,1,e),en(t,e))}function ht(t,e,n){if(t.tag===3)fh(t,t,n);else for(;e!==null;){if(e.tag===3){fh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fr===null||!Fr.has(r))){t=Ss(n,t),t=T0(e,t,1),e=Ur(e,t,1),t=Gt(),e!==null&&(Na(e,1,t),en(e,t));break}}e=e.return}}function j_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(kt&n)===n&&(Mt===4||Mt===3&&(kt&130023424)===kt&&500>xt()-Od?gi(t,0):Fd|=n),en(t,e)}function X0(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=Gt();t=fr(t,e),t!==null&&(Na(t,e,n),en(t,n))}function H_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),X0(t,n)}function V_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(te(314))}r!==null&&r.delete(e),X0(t,n)}var $0;$0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,R_(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,at&&e.flags&1048576&&Zm(e,Jo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Uo(t,e),t=e.pendingProps;var i=gs(e,Bt.current);ds(e,n),i=Pd(null,e,r,t,i,n);var s=kd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(r)?(s=!0,Zo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Td(e),i.updater=Tl,e.stateNode=i,i._reactInternals=e,Cu(e,r,t,n),e=Pu(null,e,r,!0,s,n)):(e.tag=0,at&&s&&_d(e),Vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Uo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=W_(r),t=Nn(r,t),i){case 0:e=Ru(null,e,r,t,n);break e;case 1:e=nh(null,e,r,t,n);break e;case 11:e=eh(null,e,r,t,n);break e;case 14:e=th(null,e,r,Nn(r.type,t),n);break e}throw Error(te(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Ru(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),nh(t,e,r,i,n);case 3:e:{if(R0(e),t===null)throw Error(te(387));r=e.pendingProps,s=e.memoizedState,i=s.element,r0(t,e),nl(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ss(Error(te(423)),e),e=rh(t,e,r,n,i);break e}else if(r!==i){i=Ss(Error(te(424)),e),e=rh(t,e,r,n,i);break e}else for(ln=Ir(e.stateNode.containerInfo.firstChild),un=e,at=!0,Pn=null,n=t0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vs(),r===i){e=hr(t,e,n);break e}Vt(t,e,r,n)}e=e.child}return e;case 5:return i0(e),t===null&&bu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,yu(r,i)?a=null:s!==null&&yu(r,s)&&(e.flags|=32),N0(t,e),Vt(t,e,a,n),e.child;case 6:return t===null&&bu(e),null;case 13:return P0(t,e,n);case 4:return Ad(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_s(e,null,r,n):Vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),eh(t,e,r,i,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,nt(el,r._currentValue),r._currentValue=a,s!==null)if(In(s.value,a)){if(s.children===i.children&&!Qt.current){e=hr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=lr(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Tu(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(te(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Tu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ds(e,n),i=En(i),r=r(i),e.flags|=1,Vt(t,e,r,n),e.child;case 14:return r=e.type,i=Nn(r,e.pendingProps),i=Nn(r.type,i),th(t,e,r,i,n);case 15:return A0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Uo(t,e),e.tag=1,Jt(r)?(t=!0,Zo(e)):t=!1,ds(e,n),w0(e,r,i),Cu(e,r,i,n),Pu(null,e,r,!0,t,n);case 19:return k0(t,e,n);case 22:return C0(t,e,n)}throw Error(te(156,e.tag))};function Y0(t,e){return Sm(t,e)}function G_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,r){return new G_(t,e,n,r)}function Hd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function W_(t){if(typeof t=="function")return Hd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===od)return 11;if(t===ld)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zo(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")Hd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case qi:return vi(n.children,i,s,e);case ad:a=8,i|=8;break;case Qc:return t=yn(12,n,e,i|2),t.elementType=Qc,t.lanes=s,t;case Jc:return t=yn(13,n,e,i),t.elementType=Jc,t.lanes=s,t;case eu:return t=yn(19,n,e,i),t.elementType=eu,t.lanes=s,t;case im:return Nl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nm:a=10;break e;case rm:a=9;break e;case od:a=11;break e;case ld:a=14;break e;case wr:a=16,r=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=yn(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function vi(t,e,n,r){return t=yn(7,t,r,e),t.lanes=n,t}function Nl(t,e,n,r){return t=yn(22,t,r,e),t.elementType=im,t.lanes=n,t.stateNode={isHidden:!1},t}function hc(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function pc(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function X_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vd(t,e,n,r,i,s,a,o,c){return t=new X_(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Td(s),t}function $_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function q0(t){if(!t)return Vr;t=t._reactInternals;e:{if(Ci(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(Jt(n))return qm(t,n,e)}return e}function K0(t,e,n,r,i,s,a,o,c){return t=Vd(n,r,!0,t,i,s,a,o,c),t.context=q0(null),n=t.current,r=Gt(),i=Or(n),s=lr(r,i),s.callback=e??null,Ur(n,s,i),t.current.lanes=i,Na(t,i,r),en(t,r),t}function Rl(t,e,n,r){var i=e.current,s=Gt(),a=Or(i);return n=q0(n),e.context===null?e.context=n:e.pendingContext=n,e=lr(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ur(i,e,a),t!==null&&(Dn(t,i,a,s),Lo(t,i,a)),a}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gd(t,e){hh(t,e),(t=t.alternate)&&hh(t,e)}function Y_(){return null}var Z0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wd(t){this._internalRoot=t}Pl.prototype.render=Wd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Rl(t,e,null,null)};Pl.prototype.unmount=Wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wi(function(){Rl(null,t,null,null)}),e[dr]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tr.length&&e!==0&&e<Tr[n].priority;n++);Tr.splice(n,0,t),n===0&&Rm(t)}};function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ph(){}function q_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ul(a);s.call(u)}}var a=K0(e,r,t,0,null,!1,!1,"",ph);return t._reactRootContainer=a,t[dr]=a.current,va(t.nodeType===8?t.parentNode:t),wi(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=ul(c);o.call(u)}}var c=Vd(t,0,!1,null,null,!1,!1,"",ph);return t._reactRootContainer=c,t[dr]=c.current,va(t.nodeType===8?t.parentNode:t),wi(function(){Rl(e,c,n,r)}),c}function Ll(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var o=i;i=function(){var c=ul(a);o.call(c)}}Rl(e,a,t,i)}else a=q_(n,e,t,i,r);return ul(a)}Tm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(dd(e,n|1),en(e,xt()),!(We&6)&&(Ms=xt()+500,qr()))}break;case 13:wi(function(){var r=fr(t,1);if(r!==null){var i=Gt();Dn(r,t,1,i)}}),Gd(t,1)}};fd=function(t){if(t.tag===13){var e=fr(t,134217728);if(e!==null){var n=Gt();Dn(e,t,134217728,n)}Gd(t,134217728)}};Am=function(t){if(t.tag===13){var e=Or(t),n=fr(t,e);if(n!==null){var r=Gt();Dn(n,t,e,r)}Gd(t,e)}};Cm=function(){return Je};Nm=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};uu=function(t,e,n){switch(e){case"input":if(ru(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=El(r);if(!i)throw Error(te(90));am(r),ru(r,i)}}}break;case"textarea":lm(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};mm=zd;xm=wi;var K_={usingClientEntryPoint:!1,Events:[Pa,Ji,El,hm,pm,zd]},Vs={findFiberByHostInstance:fi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z_={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_m(t),t===null?null:t.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||Y_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{_l=io.inject(Z_),Xn=io}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K_;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(te(200));return $_(t,e,null,n)};fn.createRoot=function(t,e){if(!Xd(t))throw Error(te(299));var n=!1,r="",i=Z0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vd(t,1,!1,null,null,n,!1,r,i),t[dr]=e.current,va(t.nodeType===8?t.parentNode:t),new Wd(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=_m(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return wi(t)};fn.hydrate=function(t,e,n){if(!kl(e))throw Error(te(200));return Ll(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!Xd(t))throw Error(te(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Z0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=K0(e,null,t,1,n??null,i,!1,s,a),t[dr]=e.current,va(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pl(e)};fn.render=function(t,e,n){if(!kl(e))throw Error(te(200));return Ll(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!kl(t))throw Error(te(40));return t._reactRootContainer?(wi(function(){Ll(null,null,t,!1,function(){t._reactRootContainer=null,t[dr]=null})}),!0):!1};fn.unstable_batchedUpdates=zd;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kl(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Ll(t,e,n,!1,r)};fn.version="18.3.1-next-f1338f8080-20240426";function Q0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q0)}catch(t){console.error(t)}}Q0(),Qp.exports=fn;var Q_=Qp.exports,mh=Q_;Kc.createRoot=mh.createRoot,Kc.hydrateRoot=mh.hydrateRoot;const J0=ve.createContext(void 0),ex="evaluator@orcamed.org",J_="OrcaMed2026!",ey=({children:t})=>{const[e,n]=ve.useState(()=>{try{const u=localStorage.getItem("orca_user_session");return u?JSON.parse(u):null}catch{return null}}),[r,i]=ve.useState(!1);ve.useEffect(()=>{e?localStorage.setItem("orca_user_session",JSON.stringify(e)):localStorage.removeItem("orca_user_session")},[e]);const s=async(u,h)=>{i(!0);try{const p=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u,password:h})}),f=await p.json();return p.ok&&f.success?(n(f.user),i(!1),{success:!0,message:f.message}):(i(!1),{success:!1,message:f.detail||f.message||"Login failed."})}catch(p){return i(!1),{success:!1,message:"Server communication error: "+p.message}}},a=async()=>(await s(ex,J_)).success,o=async(u,h,p)=>{i(!0);try{const f=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u,password:h,confirm_password:p})}),x=await f.json();return i(!1),f.ok&&x.success?{success:!0,message:x.message}:{success:!1,message:x.detail||x.message||"Registration failed."}}catch(f){return i(!1),{success:!1,message:"Server communication error: "+f.message}}},c=()=>{n(null)};return l.jsx(J0.Provider,{value:{user:e,isAuthenticated:!!e,isLoading:r,login:s,loginEvaluatorFastPass:a,register:o,logout:c},children:t})},La=()=>{const t=ve.useContext(J0);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t};/**
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
 */const ry=t=>{let e="",n=!1;for(const r of t){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=t=>{const e=ry(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function mc(t){return t!=null}function sy(t,e={}){var f,x;const n=e.attributeNames??{},r=_=>n[_]??_,i=t.size??t.width??Jr.width,s=t.size??t.height??Jr.height,a=((f=t.aliases)==null?void 0:f.filter(_=>typeof _=="string"&&_.trim()!=="").map(_=>`lucide-${_}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],c=((x=e.className)==null?void 0:x.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?Vu(...c):Vu("lucide",...o,...c),h=e.absoluteStrokeWidth?Number(e.strokeWidth??Jr["stroke-width"])*Number(t.size??t.width??Jr.width)/Number(e.size??e.width??Jr.width):e.strokeWidth??Jr["stroke-width"];return["svg",{...Object.entries(Jr).reduce((_,[y,m])=>(_[r(y)]=m,_),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&mc(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&mc(e.width)&&{[r("width")]:e.width},..."height"in e&&mc(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:h,...u&&{[r("class")]:u},[r("viewBox")]:`0 0 ${i} ${s}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(_=>{const[y,m,d]=_,v=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...m}:m;return d?[y,v,d]:[y,v]})]}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ay(t,e={}){return sy(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},ly=ve.createContext({}),cy=()=>ve.useContext(ly),uy=ve.forwardRef(({color:t,size:e,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:c,iconNode:u=[],icon:h={node:u,aliases:[],size:24},...p},f)=>{const{size:x=24,strokeWidth:_=2,absoluteStrokeWidth:y=!1,nonScalingStroke:m=!1,color:d="currentColor",className:v=""}=cy()??{},g=!!c||oy(p),[M,P,A=[]]=ay(h,{color:t??d,width:n??e??x,height:r??e??x,strokeWidth:i??_,absoluteStrokeWidth:s??y,nonScalingStroke:a??m,className:Vu(v,o),hasA11yProp:g,attributes:p});return ve.createElement(M,{ref:f,...P},[...A.map(([T,C])=>ve.createElement(T,C)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ge(t,e=[],n=[]){const r=typeof t=="string"?ny(t,e,n):t,i=ve.forwardRef(({className:s,...a},o)=>ve.createElement(uy,{ref:o,icon:r,className:s,...a}));return r.name&&(i.displayName=iy(r.name)),i}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};tx.node;const cr=Ge(tx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};nx.node;const bi=Ge(nx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};rx.node;const dy=Ge(rx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};ix.node;const fy=Ge(ix);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};sx.node;const hy=Ge(sx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};ax.node;const py=Ge(ax);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};ox.node;const my=Ge(ox);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};lx.node;const on=Ge(lx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};cx.node;const xy=Ge(cx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};ux.node;const gy=Ge(ux);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};dx.node;const vy=Ge(dx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};fx.node;const _y=Ge(fx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};hx.node;const Es=Ge(hx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};px.node;const mx=Ge(px);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx={name:"file-check-corner",size:24,node:[["path",{d:"M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",key:"g5mvt7"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m14 20 2 2 4-4",key:"15kota"}]],aliases:["file-check-2"]};xx.node;const yy=Ge(xx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx={name:"file-search",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]};gx.node;const Sy=Ge(gx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};vx.node;const $d=Ge(vx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x={name:"key",size:24,node:[["path",{d:"m2 21 9.6-9.6",key:"9l79m3"}],["path",{d:"m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19",key:"fw8biw"}],["circle",{cx:"15.5",cy:"7.5",r:"5.5",key:"4wxmhb"}]]};_x.node;const My=Ge(_x);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx={name:"layout-dashboard",size:24,node:[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]};yx.node;const Ey=Ge(yx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};Sx.node;const kn=Ge(Sx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};Mx.node;const wy=Ge(Mx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};Ex.node;const by=Ge(Ex);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx={name:"microscope",size:24,node:[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]};wx.node;const Ty=Ge(wx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};bx.node;const Tx=Ge(bx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]};Ax.node;const Cx=Ge(Ax);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};Nx.node;const Ay=Ge(Nx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};Rx.node;const Cy=Ge(Rx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Px.node;const Ny=Ge(Px);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};kx.node;const Lx=Ge(kx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Dx.node;const Ix=Ge(Dx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};Ux.node;const Gu=Ge(Ux);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};Fx.node;const Aa=Ge(Fx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox={name:"user-check",size:24,node:[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};Ox.node;const Ry=Ge(Ox);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};zx.node;const Py=Ge(zx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Bx.node;const Dl=Ge(Bx),jx=ve.createContext(void 0),ky=({children:t})=>{const[e,n]=ve.useState(()=>{try{const a=new URLSearchParams(window.location.search).get("theme");if(a==="dark"||a==="light")return a}catch{}const s=localStorage.getItem("orca_theme");return s==="light"||s==="dark"?s:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});ve.useEffect(()=>{const s=document.documentElement;e==="dark"?(s.classList.add("dark"),s.classList.remove("light")):(s.classList.add("light"),s.classList.remove("dark")),localStorage.setItem("orca_theme",e)},[e]);const r=()=>{n(s=>s==="dark"?"light":"dark")},i=s=>{n(s)};return l.jsx(jx.Provider,{value:{theme:e,toggleTheme:r,setTheme:i},children:t})},Hx=()=>{const t=ve.useContext(jx);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},Ly=({onOpenAuth:t,onNavigateSection:e,onGoToApp:n})=>{const{theme:r,toggleTheme:i}=Hx(),{isAuthenticated:s,logout:a}=La(),o=c=>{if(e)e(c);else{const u=document.getElementById(c);u&&u.scrollIntoView({behavior:"smooth"})}};return l.jsx("header",{className:"sticky top-0 z-50 w-full bg-ivory-50/90 dark:bg-charcoal-950/90 backdrop-blur-md border-b border-ivory-200 dark:border-charcoal-800 transition-colors",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-3.5 cursor-pointer",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center text-white shadow-sm border border-forest-900",children:l.jsx(cr,{className:"w-5 h-5 text-forest-200"})}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"font-serif font-bold text-xl tracking-tight text-charcoal-950 dark:text-ivory-50",children:"Orca MedScan"}),l.jsx("span",{className:"hidden sm:inline-flex items-center text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-forest-50 dark:bg-forest-950 text-forest-800 dark:text-forest-300 border border-forest-200 dark:border-forest-850",children:"CLINICAL ENCLAVE"})]}),l.jsx("p",{className:"text-[10px] font-mono uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400 hidden sm:block",children:"Laboratory Diagnostics & Biomarker Screening"})]})]}),l.jsxs("nav",{className:"hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-charcoal-600 dark:text-charcoal-300",children:[l.jsx("button",{onClick:()=>o("demo-section"),className:"hover:text-forest-700 dark:hover:text-forest-400 transition-colors",children:"Clinical Simulator"}),l.jsx("button",{onClick:()=>o("workflow-section"),className:"hover:text-forest-700 dark:hover:text-forest-400 transition-colors",children:"Pipeline Architecture"}),l.jsx("button",{onClick:()=>o("formats-section"),className:"hover:text-forest-700 dark:hover:text-forest-400 transition-colors",children:"Supported Specimen"}),l.jsx("button",{onClick:()=>o("safety-section"),className:"hover:text-forest-700 dark:hover:text-forest-400 transition-colors",children:"Safety Protocol"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("button",{onClick:i,"aria-label":"Toggle theme mode",className:"p-2.5 rounded-xl border border-ivory-200 dark:border-charcoal-800 bg-ivory-100 dark:bg-charcoal-900 text-charcoal-700 dark:text-charcoal-200 hover:border-forest-600 transition-all",title:`Switch to ${r==="dark"?"Warm Light":"Deep Dark"} Mode`,children:r==="dark"?l.jsx(Ix,{className:"w-4 h-4 text-amber-300"}):l.jsx(Tx,{className:"w-4 h-4 text-charcoal-700"})}),s?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("button",{onClick:n,className:"inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-bold shadow-sm transition-all",children:["Enter Workstation",l.jsx(bi,{className:"w-4 h-4"})]}),l.jsx("button",{onClick:a,className:"hidden sm:inline-block px-3 py-2 text-xs font-semibold text-charcoal-500 hover:text-charcoal-800 dark:hover:text-charcoal-200",children:"Sign Out"})]}):l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("button",{onClick:()=>t("login"),className:"px-3.5 py-2 rounded-xl text-xs font-bold text-charcoal-700 dark:text-charcoal-200 hover:text-forest-700 dark:hover:text-forest-400 transition-colors",children:"Sign In"}),l.jsxs("button",{onClick:()=>t("signup"),className:"inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-bold shadow-paper-ivory transition-all",children:["Launch Enclave",l.jsx(bi,{className:"w-3.5 h-3.5"})]})]})]})]})})},Dy=({currentView:t,onSelectView:e,auditCount:n,ocrActive:r,onLoadBenchmark:i,isCollapsed:s,onToggleCollapse:a})=>{const{user:o,logout:c}=La(),{theme:u,toggleTheme:h}=Hx(),p=[{label:"Dashboard",icon:l.jsx(Ey,{className:"w-4 h-4"})},{label:"Analyze Report",icon:l.jsx(Sy,{className:"w-4 h-4"})},{label:"Report History",icon:l.jsx(Cx,{className:"w-4 h-4"})},{label:"Extraction Diagnostics",icon:l.jsx(cr,{className:"w-4 h-4"})},{label:"Settings",icon:l.jsx(Ny,{className:"w-4 h-4"})},{label:"Clinical Safety",icon:l.jsx(Lx,{className:"w-4 h-4"})}];return l.jsxs("aside",{className:`fixed top-0 left-0 bottom-0 z-40 bg-ivory-50 dark:bg-charcoal-900 border-r border-ivory-300 dark:border-charcoal-800 flex flex-col justify-between transition-all duration-300 ${s?"w-16":"w-64"}`,children:[l.jsxs("div",{children:[l.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-ivory-200 dark:border-charcoal-800",children:[!s&&l.jsxs("div",{className:"flex items-center gap-2.5 overflow-hidden",children:[l.jsx("div",{className:"w-8 h-8 rounded-lg bg-forest-800 flex items-center justify-center text-ivory-50 shrink-0 shadow-paper-ivory",children:l.jsx(cr,{className:"w-4 h-4"})}),l.jsxs("div",{className:"truncate",children:[l.jsx("span",{className:"font-serif font-bold text-base tracking-tight text-charcoal-900 dark:text-ivory-50",children:"Orca MedScan"}),l.jsx("p",{className:"text-[9px] uppercase font-mono font-bold text-forest-700 dark:text-forest-400 tracking-wider",children:"CLINICAL ENCLAVE"})]})]}),s&&l.jsx("div",{className:"w-8 h-8 mx-auto rounded-lg bg-forest-800 flex items-center justify-center text-ivory-50",children:l.jsx(cr,{className:"w-4 h-4"})}),l.jsx("button",{onClick:a,"aria-label":s?"Expand sidebar":"Collapse sidebar",className:"p-1 rounded-md text-charcoal-400 hover:text-charcoal-700 dark:hover:text-ivory-200 hover:bg-ivory-200 dark:hover:bg-charcoal-800 transition-colors",children:s?l.jsx(py,{className:"w-4 h-4"}):l.jsx(hy,{className:"w-4 h-4"})})]}),!s&&l.jsxs("div",{className:"p-3 m-3 rounded-xl bg-ivory-100 dark:bg-charcoal-950/60 border border-ivory-200 dark:border-charcoal-800",children:[l.jsxs("div",{className:"flex items-center gap-1.5 mb-1",children:[l.jsx(Ry,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"}),l.jsx("span",{className:"text-[10px] font-mono font-bold uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400",children:"Practitioner Session"})]}),l.jsx("p",{className:"text-xs font-semibold text-charcoal-800 dark:text-ivory-100 truncate",children:(o==null?void 0:o.email)||"evaluator@orcamed.org"}),l.jsx("span",{className:"inline-block mt-1 text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-forest-100/70 dark:bg-forest-950 text-forest-900 dark:text-forest-300",children:(o==null?void 0:o.role)||"Lead Clinical Evaluator"})]}),l.jsx("nav",{className:"p-2 space-y-1",children:p.map(f=>{const x=t===f.label;return l.jsxs("button",{onClick:()=>e(f.label),title:s?f.label:void 0,className:`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${x?"bg-forest-800 text-ivory-50 shadow-paper-ivory font-bold":"text-charcoal-600 dark:text-ivory-300 hover:bg-ivory-200/70 dark:hover:bg-charcoal-800 hover:text-charcoal-900 dark:hover:text-ivory-50"} ${s?"justify-center":""}`,children:[l.jsx("span",{className:x?"text-ivory-50":"text-charcoal-400 dark:text-charcoal-400",children:f.icon}),!s&&l.jsx("span",{children:f.label})]},f.label)})}),!s&&l.jsx("div",{className:"px-3 pt-3",children:l.jsxs("button",{onClick:i,className:"w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono font-bold text-forest-800 dark:text-forest-300 bg-forest-50 dark:bg-forest-950/60 border border-forest-300 dark:border-forest-800 hover:bg-forest-100 dark:hover:bg-forest-900 transition-colors shadow-paper-ivory",children:[l.jsx(Dl,{className:"w-3.5 h-3.5"}),"1-Click Benchmark"]})})]}),l.jsxs("div",{className:"p-3 border-t border-ivory-200 dark:border-charcoal-800 space-y-2",children:[!s&&l.jsxs("div",{className:"text-[10px] text-charcoal-500 dark:text-charcoal-400 px-1 py-0.5 flex items-center justify-between font-mono",children:[l.jsxs("span",{children:["Audits: ",n]}),l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${r?"bg-clinical-normal":"bg-charcoal-400"}`}),"OCR: ",r?"Online":"Offline"]})]}),l.jsx("button",{onClick:h,"aria-label":"Toggle theme",className:`w-full flex items-center gap-2 p-2 rounded-lg text-xs font-medium text-charcoal-700 dark:text-ivory-300 hover:bg-ivory-200 dark:hover:bg-charcoal-800 border border-ivory-300 dark:border-charcoal-700 ${s?"justify-center":""}`,children:u==="dark"?l.jsxs(l.Fragment,{children:[l.jsx(Ix,{className:"w-3.5 h-3.5 text-amber-400"}),!s&&l.jsx("span",{children:"Warm Light Mode"})]}):l.jsxs(l.Fragment,{children:[l.jsx(Tx,{className:"w-3.5 h-3.5 text-charcoal-700"}),!s&&l.jsx("span",{children:"Charcoal Night Mode"})]})}),l.jsxs("button",{onClick:c,"aria-label":"Log Out",className:`w-full flex items-center gap-2 p-2 rounded-lg text-xs font-semibold text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors ${s?"justify-center":""}`,children:[l.jsx(wy,{className:"w-3.5 h-3.5"}),!s&&l.jsx("span",{children:"Log Out of Enclave"})]})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yd="165",Iy=0,xh=1,Uy=2,Vx=1,Gx=2,nr=3,Gr=0,tn=1,Vn=2,Br=0,hs=1,gh=2,vh=3,_h=4,Fy=5,ui=100,Oy=101,zy=102,By=103,jy=104,Hy=200,Vy=201,Gy=202,Wy=203,Wu=204,Xu=205,Xy=206,$y=207,Yy=208,qy=209,Ky=210,Zy=211,Qy=212,Jy=213,eS=214,tS=0,nS=1,rS=2,dl=3,iS=4,sS=5,aS=6,oS=7,Wx=0,lS=1,cS=2,jr=0,uS=1,dS=2,fS=3,hS=4,pS=5,mS=6,xS=7,Xx=300,ws=301,bs=302,$u=303,Yu=304,Il=306,qu=1e3,mi=1001,Ku=1002,Sn=1003,gS=1004,so=1005,_n=1006,xc=1007,xi=1008,Wr=1009,vS=1010,_S=1011,fl=1012,$x=1013,Ts=1014,Pr=1015,Ul=1016,Yx=1017,qx=1018,As=1020,yS=35902,SS=1021,MS=1022,Wn=1023,ES=1024,wS=1025,ps=1026,Cs=1027,bS=1028,Kx=1029,TS=1030,Zx=1031,Qx=1033,gc=33776,vc=33777,_c=33778,yc=33779,yh=35840,Sh=35841,Mh=35842,Eh=35843,wh=36196,bh=37492,Th=37496,Ah=37808,Ch=37809,Nh=37810,Rh=37811,Ph=37812,kh=37813,Lh=37814,Dh=37815,Ih=37816,Uh=37817,Fh=37818,Oh=37819,zh=37820,Bh=37821,Sc=36492,jh=36494,Hh=36495,AS=36283,Vh=36284,Gh=36285,Wh=36286,CS=3200,NS=3201,Jx=0,RS=1,Cr="",Bn="srgb",Kr="srgb-linear",qd="display-p3",Fl="display-p3-linear",hl="linear",it="srgb",pl="rec709",ml="p3",Pi=7680,Xh=519,PS=512,kS=513,LS=514,eg=515,DS=516,IS=517,US=518,FS=519,$h=35044,Yh="300 es",or=2e3,xl=2001;class Ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mc=Math.PI/180,Zu=180/Math.PI;function Da(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ut[t&255]+Ut[t>>8&255]+Ut[t>>16&255]+Ut[t>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[r&255]+Ut[r>>8&255]+Ut[r>>16&255]+Ut[r>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function OS(t,e){return(t%e+e)%e}function Ec(t,e,n){return(1-n)*t+n*e}function Gs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*r-a*i+e.x,this.y=s*i+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,n,r,i,s,a,o,c,u){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,s,a,o,c,u)}set(e,n,r,i,s,a,o,c,u){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=r,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,s=this.elements,a=r[0],o=r[3],c=r[6],u=r[1],h=r[4],p=r[7],f=r[2],x=r[5],_=r[8],y=i[0],m=i[3],d=i[6],v=i[1],g=i[4],M=i[7],P=i[2],A=i[5],T=i[8];return s[0]=a*y+o*v+c*P,s[3]=a*m+o*g+c*A,s[6]=a*d+o*M+c*T,s[1]=u*y+h*v+p*P,s[4]=u*m+h*g+p*A,s[7]=u*d+h*M+p*T,s[2]=f*y+x*v+_*P,s[5]=f*m+x*g+_*A,s[8]=f*d+x*M+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-r*s*h+r*o*c+i*s*u-i*a*c}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=h*a-o*u,f=o*c-h*s,x=u*s-a*c,_=n*p+r*f+i*x;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=p*y,e[1]=(i*u-h*r)*y,e[2]=(o*r-i*a)*y,e[3]=f*y,e[4]=(h*n-i*c)*y,e[5]=(i*s-o*n)*y,e[6]=x*y,e[7]=(r*c-u*n)*y,e[8]=(a*n-r*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(r*c,r*u,-r*(c*a+u*o)+a+e,-i*u,i*c,-i*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(wc.makeScale(e,n)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new Ie;function tg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zS(){const t=gl("canvas");return t.style.display="block",t}const qh={};function ng(t){t in qh||(qh[t]=!0,console.warn(t))}function BS(t,e,n){return new Promise(function(r,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:r()}}setTimeout(s,n)})}const Kh=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zh=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ao={[Kr]:{transfer:hl,primaries:pl,toReference:t=>t,fromReference:t=>t},[Bn]:{transfer:it,primaries:pl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Fl]:{transfer:hl,primaries:ml,toReference:t=>t.applyMatrix3(Zh),fromReference:t=>t.applyMatrix3(Kh)},[qd]:{transfer:it,primaries:ml,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Zh),fromReference:t=>t.applyMatrix3(Kh).convertLinearToSRGB()}},jS=new Set([Kr,Fl]),Qe={enabled:!0,_workingColorSpace:Kr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!jS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const r=ao[e].toReference,i=ao[n].fromReference;return i(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ao[t].primaries},getTransfer:function(t){return t===Cr?hl:ao[t].transfer}};function ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ki;class HS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ki===void 0&&(ki=gl("canvas")),ki.width=e.width,ki.height=e.height;const r=ki.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ki}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=gl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ms(s[a]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ms(n[r]/255)*255):n[r]=ms(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VS=0;class rg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Da(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Tc(i[a].image)):s.push(Tc(i[a]))}else s=Tc(i);r.url=s}return n||(e.images[this.uuid]=r),r}}function Tc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?HS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GS=0;class Wt extends Ls{constructor(e=Wt.DEFAULT_IMAGE,n=Wt.DEFAULT_MAPPING,r=mi,i=mi,s=_n,a=xi,o=Wn,c=Wr,u=Wt.DEFAULT_ANISOTROPY,h=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Da(),this.name="",this.source=new rg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qu:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qu:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Xx;Wt.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,r=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*i+a[12]*s,this.y=a[1]*n+a[5]*r+a[9]*i+a[13]*s,this.z=a[2]*n+a[6]*r+a[10]*i+a[14]*s,this.w=a[3]*n+a[7]*r+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,s;const c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],x=c[5],_=c[9],y=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+x+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,M=(x+1)/2,P=(d+1)/2,A=(h+f)/4,T=(p+y)/4,C=(_+m)/4;return g>M&&g>P?g<.01?(r=0,i=.707106781,s=.707106781):(r=Math.sqrt(g),i=A/r,s=T/r):M>P?M<.01?(r=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),r=A/i,s=C/i):P<.01?(r=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),r=T/s,i=C/s),this.set(r,i,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(p-y)*(p-y)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(p-y)/v,this.z=(f-h)/v,this.w=Math.acos((u+x+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WS extends Ls{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const i={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const s=new Wt(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);s.flipY=!1,s.generateMipmaps=r.generateMipmaps,s.internalFormat=r.internalFormat,this.textures=[];const a=r.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new rg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends WS{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class ig extends Wt{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class XS extends Wt{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,s,a,o){let c=r[i+0],u=r[i+1],h=r[i+2],p=r[i+3];const f=s[a+0],x=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p;return}if(o===1){e[n+0]=f,e[n+1]=x,e[n+2]=_,e[n+3]=y;return}if(p!==y||c!==f||u!==x||h!==_){let m=1-o;const d=c*f+u*x+h*_+p*y,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const P=Math.sqrt(g),A=Math.atan2(P,d*v);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}const M=o*v;if(c=c*m+f*M,u=u*m+x*M,h=h*m+_*M,p=p*m+y*M,m===1-o){const P=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=P,u*=P,h*=P,p*=P}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,r,i,s,a){const o=r[i],c=r[i+1],u=r[i+2],h=r[i+3],p=s[a],f=s[a+1],x=s[a+2],_=s[a+3];return e[n]=o*_+h*p+c*x-u*f,e[n+1]=c*_+h*f+u*p-o*x,e[n+2]=u*_+h*x+o*f-c*p,e[n+3]=h*_-o*p-c*f-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(r/2),h=o(i/2),p=o(s/2),f=c(r/2),x=c(i/2),_=c(s/2);switch(a){case"XYZ":this._x=f*h*p+u*x*_,this._y=u*x*p-f*h*_,this._z=u*h*_+f*x*p,this._w=u*h*p-f*x*_;break;case"YXZ":this._x=f*h*p+u*x*_,this._y=u*x*p-f*h*_,this._z=u*h*_-f*x*p,this._w=u*h*p+f*x*_;break;case"ZXY":this._x=f*h*p-u*x*_,this._y=u*x*p+f*h*_,this._z=u*h*_+f*x*p,this._w=u*h*p-f*x*_;break;case"ZYX":this._x=f*h*p-u*x*_,this._y=u*x*p+f*h*_,this._z=u*h*_-f*x*p,this._w=u*h*p+f*x*_;break;case"YZX":this._x=f*h*p+u*x*_,this._y=u*x*p+f*h*_,this._z=u*h*_-f*x*p,this._w=u*h*p-f*x*_;break;case"XZY":this._x=f*h*p-u*x*_,this._y=u*x*p-f*h*_,this._z=u*h*_+f*x*p,this._w=u*h*p+f*x*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],h=n[6],p=n[10],f=r+o+p;if(f>0){const x=.5/Math.sqrt(f+1);this._w=.25/x,this._x=(h-c)*x,this._y=(s-u)*x,this._z=(a-i)*x}else if(r>o&&r>p){const x=2*Math.sqrt(1+r-o-p);this._w=(h-c)/x,this._x=.25*x,this._y=(i+a)/x,this._z=(s+u)/x}else if(o>p){const x=2*Math.sqrt(1+o-r-p);this._w=(s-u)/x,this._x=(i+a)/x,this._y=.25*x,this._z=(c+h)/x}else{const x=2*Math.sqrt(1+p-r-o);this._w=(a-i)/x,this._x=(s+u)/x,this._y=(c+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,h=n._w;return this._x=r*h+a*o+i*u-s*c,this._y=i*h+a*c+s*o-r*u,this._z=s*h+a*u+r*c-i*o,this._w=a*h-r*o-i*c-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+r*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=r,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const x=1-n;return this._w=x*a+n*this._w,this._x=x*r+n*this._x,this._y=x*i+n*this._y,this._z=x*s+n*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),p=Math.sin((1-n)*h)/u,f=Math.sin(n*h)/u;return this._w=a*p+this._w*f,this._x=r*p+this._x*f,this._y=i*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),s=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,r=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[3]*r+s[6]*i,this.y=s[1]*n+s[4]*r+s[7]*i,this.z=s[2]*n+s[5]*r+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,s=e.elements,a=1/(s[3]*n+s[7]*r+s[11]*i+s[15]);return this.x=(s[0]*n+s[4]*r+s[8]*i+s[12])*a,this.y=(s[1]*n+s[5]*r+s[9]*i+s[13])*a,this.z=(s[2]*n+s[6]*r+s[10]*i+s[14])*a,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*i-o*r),h=2*(o*n-s*i),p=2*(s*r-a*n);return this.x=n+c*u+a*p-o*h,this.y=r+c*h+o*u-s*p,this.z=i+c*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[4]*r+s[8]*i,this.y=s[1]*n+s[5]*r+s[9]*i,this.z=s[2]*n+s[6]*r+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=i*c-s*o,this.y=s*a-r*c,this.z=r*o-i*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ac=new V,Qh=new Ia;class Ua{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Tn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Tn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Tn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const s=r.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(s,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),oo.copy(r.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),lo.subVectors(this.max,Ws),Li.subVectors(e.a,Ws),Di.subVectors(e.b,Ws),Ii.subVectors(e.c,Ws),gr.subVectors(Di,Li),vr.subVectors(Ii,Di),ei.subVectors(Li,Ii);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-ei.z,ei.y,gr.z,0,-gr.x,vr.z,0,-vr.x,ei.z,0,-ei.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-ei.y,ei.x,0];return!Cc(n,Li,Di,Ii,lo)||(n=[1,0,0,0,1,0,0,0,1],!Cc(n,Li,Di,Ii,lo))?!1:(co.crossVectors(gr,vr),n=[co.x,co.y,co.z],Cc(n,Li,Di,Ii,lo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new V,new V,new V,new V,new V,new V,new V,new V],Tn=new V,oo=new Ua,Li=new V,Di=new V,Ii=new V,gr=new V,vr=new V,ei=new V,Ws=new V,lo=new V,co=new V,ti=new V;function Cc(t,e,n,r,i){for(let s=0,a=t.length-3;s<=a;s+=3){ti.fromArray(t,s);const o=i.x*Math.abs(ti.x)+i.y*Math.abs(ti.y)+i.z*Math.abs(ti.z),c=e.dot(ti),u=n.dot(ti),h=r.dot(ti);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const $S=new Ua,Xs=new V,Nc=new V;class Kd{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):$S.setFromPoints(e).getCenter(r);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const n=Xs.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(Xs,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(Nc)),this.expandByPoint(Xs.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new V,Rc=new V,uo=new V,_r=new V,Pc=new V,fo=new V,kc=new V;class YS{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){Rc.copy(e).add(n).multiplyScalar(.5),uo.copy(n).sub(e).normalize(),_r.copy(this.origin).sub(Rc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(uo),o=_r.dot(this.direction),c=-_r.dot(uo),u=_r.lengthSq(),h=Math.abs(1-a*a);let p,f,x,_;if(h>0)if(p=a*c-o,f=a*o-c,_=s*h,p>=0)if(f>=-_)if(f<=_){const y=1/h;p*=y,f*=y,x=p*(p+a*f+2*o)+f*(a*p+f+2*c)+u}else f=s,p=Math.max(0,-(a*f+o)),x=-p*p+f*(f+2*c)+u;else f=-s,p=Math.max(0,-(a*f+o)),x=-p*p+f*(f+2*c)+u;else f<=-_?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-c),s),x=-p*p+f*(f+2*c)+u):f<=_?(p=0,f=Math.min(Math.max(-s,-c),s),x=f*(f+2*c)+u):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-c),s),x=-p*p+f*(f+2*c)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),x=-p*p+f*(f+2*c)+u;return r&&r.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Rc).addScaledVector(uo,f),x}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const r=Qn.dot(this.direction),i=Qn.dot(Qn)-r*r,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=r-a,c=r+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(r=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(r=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),r>a||s>i||((s>r||isNaN(r))&&(r=s),(a<i||isNaN(i))&&(i=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),r>c||o>i)||((o>r||r!==r)&&(r=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,r,i,s){Pc.subVectors(n,e),fo.subVectors(r,e),kc.crossVectors(Pc,fo);let a=this.direction.dot(kc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_r.subVectors(this.origin,e);const c=o*this.direction.dot(fo.crossVectors(_r,fo));if(c<0)return null;const u=o*this.direction.dot(Pc.cross(_r));if(u<0||c+u>a)return null;const h=-o*_r.dot(kc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,r,i,s,a,o,c,u,h,p,f,x,_,y,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,s,a,o,c,u,h,p,f,x,_,y,m)}set(e,n,r,i,s,a,o,c,u,h,p,f,x,_,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=r,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=u,d[6]=h,d[10]=p,d[14]=f,d[3]=x,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*s,n[5]=r[5]*s,n[6]=r[6]*s,n[7]=0,n[8]=r[8]*a,n[9]=r[9]*a,n[10]=r[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,s=e.z,a=Math.cos(r),o=Math.sin(r),c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,x=a*p,_=o*h,y=o*p;n[0]=c*h,n[4]=-c*p,n[8]=u,n[1]=x+_*u,n[5]=f-y*u,n[9]=-o*c,n[2]=y-f*u,n[6]=_+x*u,n[10]=a*c}else if(e.order==="YXZ"){const f=c*h,x=c*p,_=u*h,y=u*p;n[0]=f+y*o,n[4]=_*o-x,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=x*o-_,n[6]=y+f*o,n[10]=a*c}else if(e.order==="ZXY"){const f=c*h,x=c*p,_=u*h,y=u*p;n[0]=f-y*o,n[4]=-a*p,n[8]=_+x*o,n[1]=x+_*o,n[5]=a*h,n[9]=y-f*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const f=a*h,x=a*p,_=o*h,y=o*p;n[0]=c*h,n[4]=_*u-x,n[8]=f*u+y,n[1]=c*p,n[5]=y*u+f,n[9]=x*u-_,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,x=a*u,_=o*c,y=o*u;n[0]=c*h,n[4]=y-f*p,n[8]=_*p+x,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=x*p+_,n[10]=f-y*p}else if(e.order==="XZY"){const f=a*c,x=a*u,_=o*c,y=o*u;n[0]=c*h,n[4]=-p,n[8]=u*h,n[1]=f*p+y,n[5]=a*h,n[9]=x*p-_,n[2]=_*p-x,n[6]=o*h,n[10]=y*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qS,e,KS)}lookAt(e,n,r){const i=this.elements;return rn.subVectors(e,n),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),yr.crossVectors(r,rn),yr.lengthSq()===0&&(Math.abs(r.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),yr.crossVectors(r,rn)),yr.normalize(),ho.crossVectors(rn,yr),i[0]=yr.x,i[4]=ho.x,i[8]=rn.x,i[1]=yr.y,i[5]=ho.y,i[9]=rn.y,i[2]=yr.z,i[6]=ho.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,s=this.elements,a=r[0],o=r[4],c=r[8],u=r[12],h=r[1],p=r[5],f=r[9],x=r[13],_=r[2],y=r[6],m=r[10],d=r[14],v=r[3],g=r[7],M=r[11],P=r[15],A=i[0],T=i[4],C=i[8],w=i[12],S=i[1],R=i[5],W=i[9],O=i[13],F=i[2],z=i[6],H=i[10],Y=i[14],D=i[3],q=i[7],Z=i[11],ie=i[15];return s[0]=a*A+o*S+c*F+u*D,s[4]=a*T+o*R+c*z+u*q,s[8]=a*C+o*W+c*H+u*Z,s[12]=a*w+o*O+c*Y+u*ie,s[1]=h*A+p*S+f*F+x*D,s[5]=h*T+p*R+f*z+x*q,s[9]=h*C+p*W+f*H+x*Z,s[13]=h*w+p*O+f*Y+x*ie,s[2]=_*A+y*S+m*F+d*D,s[6]=_*T+y*R+m*z+d*q,s[10]=_*C+y*W+m*H+d*Z,s[14]=_*w+y*O+m*Y+d*ie,s[3]=v*A+g*S+M*F+P*D,s[7]=v*T+g*R+M*z+P*q,s[11]=v*C+g*W+M*H+P*Z,s[15]=v*w+g*O+M*Y+P*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],x=e[14],_=e[3],y=e[7],m=e[11],d=e[15];return _*(+s*c*p-i*u*p-s*o*f+r*u*f+i*o*x-r*c*x)+y*(+n*c*x-n*u*f+s*a*f-i*a*x+i*u*h-s*c*h)+m*(+n*u*p-n*o*x-s*a*p+r*a*x+s*o*h-r*u*h)+d*(-i*o*h-n*c*p+n*o*f+i*a*p-r*a*f+r*c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],x=e[11],_=e[12],y=e[13],m=e[14],d=e[15],v=p*m*u-y*f*u+y*c*x-o*m*x-p*c*d+o*f*d,g=_*f*u-h*m*u-_*c*x+a*m*x+h*c*d-a*f*d,M=h*y*u-_*p*u+_*o*x-a*y*x-h*o*d+a*p*d,P=_*p*c-h*y*c-_*o*f+a*y*f+h*o*m-a*p*m,A=n*v+r*g+i*M+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(y*f*s-p*m*s-y*i*x+r*m*x+p*i*d-r*f*d)*T,e[2]=(o*m*s-y*c*s+y*i*u-r*m*u-o*i*d+r*c*d)*T,e[3]=(p*c*s-o*f*s-p*i*u+r*f*u+o*i*x-r*c*x)*T,e[4]=g*T,e[5]=(h*m*s-_*f*s+_*i*x-n*m*x-h*i*d+n*f*d)*T,e[6]=(_*c*s-a*m*s-_*i*u+n*m*u+a*i*d-n*c*d)*T,e[7]=(a*f*s-h*c*s+h*i*u-n*f*u-a*i*x+n*c*x)*T,e[8]=M*T,e[9]=(_*p*s-h*y*s-_*r*x+n*y*x+h*r*d-n*p*d)*T,e[10]=(a*y*s-_*o*s+_*r*u-n*y*u-a*r*d+n*o*d)*T,e[11]=(h*o*s-a*p*s-h*r*u+n*p*u+a*r*x-n*o*x)*T,e[12]=P*T,e[13]=(h*y*i-_*p*i+_*r*f-n*y*f-h*r*m+n*p*m)*T,e[14]=(_*o*i-a*y*i-_*r*c+n*y*c+a*r*m-n*o*m)*T,e[15]=(a*p*i-h*o*i+h*r*c-n*p*c-a*r*f+n*o*f)*T,this}scale(e){const n=this.elements,r=e.x,i=e.y,s=e.z;return n[0]*=r,n[4]*=i,n[8]*=s,n[1]*=r,n[5]*=i,n[9]*=s,n[2]*=r,n[6]*=i,n[10]*=s,n[3]*=r,n[7]*=i,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),s=1-r,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+r,u*o-i*c,u*c+i*o,0,u*o+i*c,h*o+r,h*c-i*a,0,u*c-i*o,h*c+i*a,s*c*c+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,s,a){return this.set(1,r,s,0,e,1,a,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,h=a+a,p=o+o,f=s*u,x=s*h,_=s*p,y=a*h,m=a*p,d=o*p,v=c*u,g=c*h,M=c*p,P=r.x,A=r.y,T=r.z;return i[0]=(1-(y+d))*P,i[1]=(x+M)*P,i[2]=(_-g)*P,i[3]=0,i[4]=(x-M)*A,i[5]=(1-(f+d))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(_+g)*T,i[9]=(m-v)*T,i[10]=(1-(f+y))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let s=Ui.set(i[0],i[1],i[2]).length();const a=Ui.set(i[4],i[5],i[6]).length(),o=Ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],An.copy(this);const u=1/s,h=1/a,p=1/o;return An.elements[0]*=u,An.elements[1]*=u,An.elements[2]*=u,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=p,An.elements[9]*=p,An.elements[10]*=p,n.setFromRotationMatrix(An),r.x=s,r.y=a,r.z=o,this}makePerspective(e,n,r,i,s,a,o=or){const c=this.elements,u=2*s/(n-e),h=2*s/(r-i),p=(n+e)/(n-e),f=(r+i)/(r-i);let x,_;if(o===or)x=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===xl)x=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,r,i,s,a,o=or){const c=this.elements,u=1/(n-e),h=1/(r-i),p=1/(a-s),f=(n+e)*u,x=(r+i)*h;let _,y;if(o===or)_=(a+s)*p,y=-2*p;else if(o===xl)_=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=y,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ui=new V,An=new gt,qS=new V(0,0,0),KS=new V(1,1,1),yr=new V,ho=new V,rn=new V,Jh=new gt,ep=new Ia;class qn{constructor(e=0,n=0,r=0,i=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],u=i[5],h=i[9],p=i[2],f=i[6],x=i[10];switch(n){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,x),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,x),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,x));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ep.setFromEuler(this),this.setFromQuaternion(ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class sg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZS=0;const tp=new V,Fi=new Ia,Jn=new gt,po=new V,$s=new V,QS=new V,JS=new Ia,np=new V(1,0,0),rp=new V(0,1,0),ip=new V(0,0,1),sp={type:"added"},eM={type:"removed"},Oi={type:"childadded",child:null},Lc={type:"childremoved",child:null};class zt extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new V,n=new qn,r=new Ia,i=new V(1,1,1);function s(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(s),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ie}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fi.setFromAxisAngle(e,n),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,n){return Fi.setFromAxisAngle(e,n),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(np,e)}rotateY(e){return this.rotateOnAxis(rp,e)}rotateZ(e){return this.rotateOnAxis(ip,e)}translateOnAxis(e,n){return tp.copy(e).applyQuaternion(this.quaternion),this.position.add(tp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(np,e)}translateY(e){return this.translateOnAxis(rp,e)}translateZ(e){return this.translateOnAxis(ip,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?po.copy(e):po.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt($s,po,this.up):Jn.lookAt(po,$s,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(Jn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sp),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(eM),Lc.child=e,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sp),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const a=this.children[r].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,QS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,JS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++){const s=n[r];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),x=a(e.animations),_=a(e.nodes);o.length>0&&(r.geometries=o),c.length>0&&(r.materials=c),u.length>0&&(r.textures=u),h.length>0&&(r.images=h),p.length>0&&(r.shapes=p),f.length>0&&(r.skeletons=f),x.length>0&&(r.animations=x),_.length>0&&(r.nodes=_)}return r.object=i,r;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}zt.DEFAULT_UP=new V(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new V,er=new V,Dc=new V,tr=new V,zi=new V,Bi=new V,ap=new V,Ic=new V,Uc=new V,Fc=new V;class Gn{constructor(e=new V,n=new V,r=new V){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),Cn.subVectors(e,n),i.cross(Cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,n,r,i,s){Cn.subVectors(i,n),er.subVectors(r,n),Dc.subVectors(e,n);const a=Cn.dot(Cn),o=Cn.dot(er),c=Cn.dot(Dc),u=er.dot(er),h=er.dot(Dc),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,x=(u*c-o*h)*f,_=(a*h-o*c)*f;return s.set(1-x-_,_,x)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,n,r,i,s,a,o,c){return this.getBarycoord(e,n,r,i,tr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,tr.x),c.addScaledVector(a,tr.y),c.addScaledVector(o,tr.z),c)}static isFrontFacing(e,n,r,i){return Cn.subVectors(r,n),er.subVectors(e,n),Cn.cross(er).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Cn.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,i,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,r,i,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,s=this.c;let a,o;zi.subVectors(i,r),Bi.subVectors(s,r),Ic.subVectors(e,r);const c=zi.dot(Ic),u=Bi.dot(Ic);if(c<=0&&u<=0)return n.copy(r);Uc.subVectors(e,i);const h=zi.dot(Uc),p=Bi.dot(Uc);if(h>=0&&p<=h)return n.copy(i);const f=c*p-h*u;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(r).addScaledVector(zi,a);Fc.subVectors(e,s);const x=zi.dot(Fc),_=Bi.dot(Fc);if(_>=0&&x<=_)return n.copy(s);const y=x*u-c*_;if(y<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(r).addScaledVector(Bi,o);const m=h*_-x*p;if(m<=0&&p-h>=0&&x-_>=0)return ap.subVectors(s,i),o=(p-h)/(p-h+(x-_)),n.copy(i).addScaledVector(ap,o);const d=1/(m+y+f);return a=y*d,o=f*d,n.copy(r).addScaledVector(zi,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},mo={h:0,s:0,l:0};function Oc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=r,Qe.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=Qe.workingColorSpace){if(e=OS(e,1),n=Kt(n,0,1),r=Kt(r,0,1),n===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+n):r+n-r*n,a=2*r-s;this.r=Oc(a,s,e+1/3),this.g=Oc(a,s,e),this.b=Oc(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,n=Bn){function r(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const r=ag[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=bc(e.r),this.g=bc(e.g),this.b=bc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Qe.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Kt(Ft.r*255,0,255))*65536+Math.round(Kt(Ft.g*255,0,255))*256+Math.round(Kt(Ft.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ft.copy(this),n);const r=Ft.r,i=Ft.g,s=Ft.b,a=Math.max(r,i,s),o=Math.min(r,i,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case r:c=(i-s)/p+(i<s?6:0);break;case i:c=(s-r)/p+2;break;case s:c=(r-i)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Bn){Qe.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,r=Ft.g,i=Ft.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+n,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Sr),e.getHSL(mo);const r=Ec(Sr.h,mo.h,n),i=Ec(Sr.s,mo.s,n),s=Ec(Sr.l,mo.l,n);return this.setHSL(r,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,s=e.elements;return this.r=s[0]*n+s[3]*r+s[6]*i,this.g=s[1]*n+s[4]*r+s[7]*i,this.b=s[2]*n+s[5]*r+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new qe;qe.NAMES=ag;let tM=0;class Fa extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Da(),this.name="",this.type="Material",this.blending=hs,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=Xu,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(r.blending=this.blending),this.side!==Gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wu&&(r.blendSrc=this.blendSrc),this.blendDst!==Xu&&(r.blendDst=this.blendDst),this.blendEquation!==ui&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==dl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=i(e.textures),a=i(e.images);s.length>0&&(r.textures=s),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let s=0;s!==i;++s)r[s]=n[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zd extends Fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Wx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new V,xo=new Xe;class Yn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=$h,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ng("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)xo.fromBufferAttribute(this,n),xo.applyMatrix3(e),this.setXY(n,xo.x,xo.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Gs(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Yt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),r=Yt(r,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),r=Yt(r,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$h&&(e.usage=this.usage),e}}class og extends Yn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class lg extends Yn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class _i extends Yn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let nM=0;const mn=new gt,zc=new zt,ji=new V,sn=new Ua,Ys=new Ua,At=new V;class Ni extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tg(e)?lg:og)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new Ie().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,r){return mn.makeTranslation(e,n,r),this.applyMatrix4(mn),this}scale(e,n,r){return mn.makeScale(e,n,r),this.applyMatrix4(mn),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const n=[];for(let r=0,i=e.length;r<i;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _i(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const s=n[r];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const r=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(sn.min,Ys.min),sn.expandByPoint(At),At.addVectors(sn.max,Ys.max),sn.expandByPoint(At)):(sn.expandByPoint(Ys.min),sn.expandByPoint(Ys.max))}sn.getCenter(r);let i=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),i=Math.max(i,r.distanceToSquared(At));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)At.fromBufferAttribute(o,u),c&&(ji.fromBufferAttribute(e,u),At.add(ji)),i=Math.max(i,r.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,i=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*r.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<r.count;C++)o[C]=new V,c[C]=new V;const u=new V,h=new V,p=new V,f=new Xe,x=new Xe,_=new Xe,y=new V,m=new V;function d(C,w,S){u.fromBufferAttribute(r,C),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,S),f.fromBufferAttribute(s,C),x.fromBufferAttribute(s,w),_.fromBufferAttribute(s,S),h.sub(u),p.sub(u),x.sub(f),_.sub(f);const R=1/(x.x*_.y-_.x*x.y);isFinite(R)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(p,-x.y).multiplyScalar(R),m.copy(p).multiplyScalar(x.x).addScaledVector(h,-_.x).multiplyScalar(R),o[C].add(y),o[w].add(y),o[S].add(y),c[C].add(m),c[w].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,w=v.length;C<w;++C){const S=v[C],R=S.start,W=S.count;for(let O=R,F=R+W;O<F;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const g=new V,M=new V,P=new V,A=new V;function T(C){P.fromBufferAttribute(i,C),A.copy(P);const w=o[C];g.copy(w),g.sub(P.multiplyScalar(P.dot(w))).normalize(),M.crossVectors(A,w);const R=M.dot(c[C])<0?-1:1;a.setXYZW(C,g.x,g.y,g.z,R)}for(let C=0,w=v.length;C<w;++C){const S=v[C],R=S.start,W=S.count;for(let O=R,F=R+W;O<F;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let f=0,x=r.count;f<x;f++)r.setXYZ(f,0,0,0);const i=new V,s=new V,a=new V,o=new V,c=new V,u=new V,h=new V,p=new V;if(e)for(let f=0,x=e.count;f<x;f+=3){const _=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),h.subVectors(a,s),p.subVectors(i,s),h.cross(p),o.fromBufferAttribute(r,_),c.fromBufferAttribute(r,y),u.fromBufferAttribute(r,m),o.add(h),c.add(h),u.add(h),r.setXYZ(_,o.x,o.y,o.z),r.setXYZ(y,c.x,c.y,c.z),r.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,x=n.count;f<x;f+=3)i.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(i,s),h.cross(p),r.setXYZ(f+0,h.x,h.y,h.z),r.setXYZ(f+1,h.x,h.y,h.z),r.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,p=o.normalized,f=new u.constructor(c.length*h);let x=0,_=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?x=c[y]*o.data.stride+o.offset:x=c[y]*h;for(let d=0;d<h;d++)f[_++]=u[x++]}return new Yn(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ni,r=this.index.array,i=this.attributes;for(const o in i){const c=i[o],u=e(c,r);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,p=u.length;h<p;h++){const f=u[h],x=e(f,r);c.push(x)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const c in r){const u=r[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){const x=u[p];h.push(x.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const i=e.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let f=0,x=p.length;f<x;f++)h.push(p[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const op=new gt,ni=new YS,go=new Kd,lp=new V,Hi=new V,Vi=new V,Gi=new V,Bc=new V,vo=new V,_o=new Xe,yo=new Xe,So=new Xe,cp=new V,up=new V,dp=new V,Mo=new V,Eo=new V;class cn extends zt{constructor(e=new Ni,n=new Zd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,s=r.morphAttributes.position,a=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){vo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],p=s[c];h!==0&&(Bc.fromBufferAttribute(p,e),a?vo.addScaledVector(Bc,h):vo.addScaledVector(Bc.sub(n),h))}n.add(vo)}return n}raycast(e,n){const r=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),go.copy(r.boundingSphere),go.applyMatrix4(s),ni.copy(e.ray).recast(e.near),!(go.containsPoint(ni.origin)===!1&&(ni.intersectSphere(go,lp)===null||ni.origin.distanceToSquared(lp)>(e.far-e.near)**2))&&(op.copy(s).invert(),ni.copy(e.ray).applyMatrix4(op),!(r.boundingBox!==null&&ni.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,ni)))}_computeIntersections(e,n,r){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,x=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const m=f[_],d=a[m.materialIndex],v=Math.max(m.start,x.start),g=Math.min(o.count,Math.min(m.start+m.count,x.start+x.count));for(let M=v,P=g;M<P;M+=3){const A=o.getX(M),T=o.getX(M+1),C=o.getX(M+2);i=wo(this,d,e,r,u,h,p,A,T,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const _=Math.max(0,x.start),y=Math.min(o.count,x.start+x.count);for(let m=_,d=y;m<d;m+=3){const v=o.getX(m),g=o.getX(m+1),M=o.getX(m+2);i=wo(this,a,e,r,u,h,p,v,g,M),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const m=f[_],d=a[m.materialIndex],v=Math.max(m.start,x.start),g=Math.min(c.count,Math.min(m.start+m.count,x.start+x.count));for(let M=v,P=g;M<P;M+=3){const A=M,T=M+1,C=M+2;i=wo(this,d,e,r,u,h,p,A,T,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const _=Math.max(0,x.start),y=Math.min(c.count,x.start+x.count);for(let m=_,d=y;m<d;m+=3){const v=m,g=m+1,M=m+2;i=wo(this,a,e,r,u,h,p,v,g,M),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}}}function rM(t,e,n,r,i,s,a,o){let c;if(e.side===tn?c=r.intersectTriangle(a,s,i,!0,o):c=r.intersectTriangle(i,s,a,e.side===Gr,o),c===null)return null;Eo.copy(o),Eo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Eo);return u<n.near||u>n.far?null:{distance:u,point:Eo.clone(),object:t}}function wo(t,e,n,r,i,s,a,o,c,u){t.getVertexPosition(o,Hi),t.getVertexPosition(c,Vi),t.getVertexPosition(u,Gi);const h=rM(t,e,n,r,Hi,Vi,Gi,Mo);if(h){i&&(_o.fromBufferAttribute(i,o),yo.fromBufferAttribute(i,c),So.fromBufferAttribute(i,u),h.uv=Gn.getInterpolation(Mo,Hi,Vi,Gi,_o,yo,So,new Xe)),s&&(_o.fromBufferAttribute(s,o),yo.fromBufferAttribute(s,c),So.fromBufferAttribute(s,u),h.uv1=Gn.getInterpolation(Mo,Hi,Vi,Gi,_o,yo,So,new Xe)),a&&(cp.fromBufferAttribute(a,o),up.fromBufferAttribute(a,c),dp.fromBufferAttribute(a,u),h.normal=Gn.getInterpolation(Mo,Hi,Vi,Gi,cp,up,dp,new V),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:u,normal:new V,materialIndex:0};Gn.getNormal(Hi,Vi,Gi,p.normal),h.face=p}return h}class Ds extends Ni{constructor(e=1,n=1,r=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],p=[];let f=0,x=0;_("z","y","x",-1,-1,r,n,e,a,s,0),_("z","y","x",1,-1,r,n,-e,a,s,1),_("x","z","y",1,1,e,r,n,i,a,2),_("x","z","y",1,-1,e,r,-n,i,a,3),_("x","y","z",1,-1,e,n,r,i,s,4),_("x","y","z",-1,-1,e,n,-r,i,s,5),this.setIndex(c),this.setAttribute("position",new _i(u,3)),this.setAttribute("normal",new _i(h,3)),this.setAttribute("uv",new _i(p,2));function _(y,m,d,v,g,M,P,A,T,C,w){const S=M/T,R=P/C,W=M/2,O=P/2,F=A/2,z=T+1,H=C+1;let Y=0,D=0;const q=new V;for(let Z=0;Z<H;Z++){const ie=Z*R-O;for(let _e=0;_e<z;_e++){const Be=_e*S-W;q[y]=Be*v,q[m]=ie*g,q[d]=F,u.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[d]=A>0?1:-1,h.push(q.x,q.y,q.z),p.push(_e/T),p.push(1-Z/C),Y+=1}}for(let Z=0;Z<C;Z++)for(let ie=0;ie<T;ie++){const _e=f+ie+z*Z,Be=f+ie+z*(Z+1),X=f+(ie+1)+z*(Z+1),ne=f+(ie+1)+z*Z;c.push(_e,Be,ne),c.push(Be,X,ne),D+=6}o.addGroup(x,D,w),x+=D,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const r=Ns(t[n]);for(const i in r)e[i]=r[i]}return e}function iM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function cg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const sM={clone:Ns,merge:Ht};var aM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xr extends Fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=iM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?n.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[i]={type:"m4",value:a.toArray()}:n.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class ug extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=or}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new V,fp=new Xe,hp=new Xe;class vn extends ug{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zu*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,n){return this.getViewBounds(e,fp,hp),n.subVectors(hp,fp)}setViewOffset(e,n,r,i,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Mc*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*i/c,n-=a.offsetY*r/u,i*=a.width/c,r*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wi=-90,Xi=1;class lM extends zt{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new vn(Wi,Xi,e,n);i.layers=this.layers,this.add(i);const s=new vn(Wi,Xi,e,n);s.layers=this.layers,this.add(s);const a=new vn(Wi,Xi,e,n);a.layers=this.layers,this.add(a);const o=new vn(Wi,Xi,e,n);o.layers=this.layers,this.add(o);const c=new vn(Wi,Xi,e,n);c.layers=this.layers,this.add(c);const u=new vn(Wi,Xi,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===or)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xl)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,s),e.setRenderTarget(r,1,i),e.render(n,a),e.setRenderTarget(r,2,i),e.render(n,o),e.setRenderTarget(r,3,i),e.render(n,c),e.setRenderTarget(r,4,i),e.render(n,u),r.texture.generateMipmaps=y,e.setRenderTarget(r,5,i),e.render(n,h),e.setRenderTarget(p,f,x),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class dg extends Wt{constructor(e,n,r,i,s,a,o,c,u,h){e=e!==void 0?e:[],n=n!==void 0?n:ws,super(e,n,r,i,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cM extends Ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new dg(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ds(5,5,5),s=new Xr({name:"CubemapFromEquirect",uniforms:Ns(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:tn,blending:Br});s.uniforms.tEquirect.value=n;const a=new cn(i,s),o=n.minFilter;return n.minFilter===xi&&(n.minFilter=_n),new lM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,r,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,r,i);e.setRenderTarget(s)}}const jc=new V,uM=new V,dM=new Ie;class li{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=jc.subVectors(r,n).cross(uM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(jc),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:n.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||dM.getNormalMatrix(e),i=this.coplanarPoint(jc).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new Kd,bo=new V;class Qd{constructor(e=new li,n=new li,r=new li,i=new li,s=new li,a=new li){this.planes=[e,n,r,i,s,a]}set(e,n,r,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(r),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=or){const r=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],u=i[4],h=i[5],p=i[6],f=i[7],x=i[8],_=i[9],y=i[10],m=i[11],d=i[12],v=i[13],g=i[14],M=i[15];if(r[0].setComponents(c-s,f-u,m-x,M-d).normalize(),r[1].setComponents(c+s,f+u,m+x,M+d).normalize(),r[2].setComponents(c+a,f+h,m+_,M+v).normalize(),r[3].setComponents(c-a,f-h,m-_,M-v).normalize(),r[4].setComponents(c-o,f-p,m-y,M-g).normalize(),n===or)r[5].setComponents(c+o,f+p,m+y,M+g).normalize();else if(n===xl)r[5].setComponents(o,p,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ri.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(bo.x=i.normal.x>0?e.max.x:e.min.x,bo.y=i.normal.y>0?e.max.y:e.min.y,bo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fg(){let t=null,e=!1,n=null,r=null;function i(s,a){n(s,a),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function fM(t){const e=new WeakMap;function n(o,c){const u=o.array,h=o.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,h),o.onUploadCallback();let x;if(u instanceof Float32Array)x=t.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?x=t.HALF_FLOAT:x=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=t.SHORT;else if(u instanceof Uint32Array)x=t.UNSIGNED_INT;else if(u instanceof Int32Array)x=t.INT;else if(u instanceof Int8Array)x=t.BYTE;else if(u instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function r(o,c,u){const h=c.array,p=c._updateRange,f=c.updateRanges;if(t.bindBuffer(u,o),p.count===-1&&f.length===0&&t.bufferSubData(u,0,h),f.length!==0){for(let x=0,_=f.length;x<_;x++){const y=f[x];t.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count),p.count=-1),c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,o,c),u.version=o.version}}return{get:i,remove:s,update:a}}class Oa extends Ni{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const s=e/2,a=n/2,o=Math.floor(r),c=Math.floor(i),u=o+1,h=c+1,p=e/o,f=n/c,x=[],_=[],y=[],m=[];for(let d=0;d<h;d++){const v=d*f-a;for(let g=0;g<u;g++){const M=g*p-s;_.push(M,-v,0),y.push(0,0,1),m.push(g/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<o;v++){const g=v+u*d,M=v+u*(d+1),P=v+1+u*(d+1),A=v+1+u*d;x.push(g,M,A),x.push(M,P,A)}this.setIndex(x),this.setAttribute("position",new _i(_,3)),this.setAttribute("normal",new _i(y,3)),this.setAttribute("uv",new _i(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.widthSegments,e.heightSegments)}}var hM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pM=`#ifdef USE_ALPHAHASH
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
#endif`,mM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_M=`#ifdef USE_AOMAP
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
#endif`,yM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SM=`#ifdef USE_BATCHING
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
#endif`,MM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,EM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TM=`#ifdef USE_IRIDESCENCE
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
#endif`,AM=`#ifdef USE_BUMPMAP
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
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,UM=`#define PI 3.141592653589793
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
} // validated`,FM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OM=`vec3 transformedNormal = objectNormal;
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
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VM="gl_FragColor = linearToOutputTexel( gl_FragColor );",GM=`
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
}`,WM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$M=`#ifdef USE_ENVMAP
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
#endif`,YM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e1=`#ifdef USE_GRADIENTMAP
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
}`,t1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i1=`uniform bool receiveShadow;
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
#endif`,s1=`#ifdef USE_ENVMAP
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
#endif`,a1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u1=`PhysicalMaterial material;
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
#endif`,d1=`struct PhysicalMaterial {
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
}`,f1=`
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
#endif`,h1=`#if defined( RE_IndirectDiffuse )
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
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M1=`#if defined( USE_POINTS_UV )
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
#endif`,E1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`#ifdef USE_MORPHTARGETS
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
#endif`,N1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,k1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I1=`#ifdef USE_NORMALMAP
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
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,H1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z1=`float getShadowMask() {
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
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J1=`#ifdef USE_SKINNING
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
#endif`,eE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tE=`#ifdef USE_SKINNING
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
#endif`,nE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aE=`#ifdef USE_TRANSMISSION
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
#endif`,oE=`#ifdef USE_TRANSMISSION
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
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hE=`uniform sampler2D t2D;
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
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`#include <common>
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
}`,_E=`#if DEPTH_PACKING == 3200
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
}`,yE=`#define DISTANCE
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
}`,SE=`#define DISTANCE
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`uniform float scale;
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
}`,bE=`uniform vec3 diffuse;
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
}`,TE=`#include <common>
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
}`,AE=`uniform vec3 diffuse;
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
}`,CE=`#define LAMBERT
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
}`,NE=`#define LAMBERT
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
}`,RE=`#define MATCAP
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
}`,PE=`#define MATCAP
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
}`,kE=`#define NORMAL
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
}`,LE=`#define NORMAL
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
}`,DE=`#define PHONG
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
}`,IE=`#define PHONG
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
}`,UE=`#define STANDARD
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
}`,FE=`#define STANDARD
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
}`,OE=`#define TOON
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
}`,zE=`#define TOON
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
}`,BE=`uniform float size;
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
}`,jE=`uniform vec3 diffuse;
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
}`,HE=`#include <common>
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
}`,VE=`uniform vec3 color;
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
}`,GE=`uniform float rotation;
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
}`,WE=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:hM,alphahash_pars_fragment:pM,alphamap_fragment:mM,alphamap_pars_fragment:xM,alphatest_fragment:gM,alphatest_pars_fragment:vM,aomap_fragment:_M,aomap_pars_fragment:yM,batching_pars_vertex:SM,batching_vertex:MM,begin_vertex:EM,beginnormal_vertex:wM,bsdfs:bM,iridescence_fragment:TM,bumpmap_pars_fragment:AM,clipping_planes_fragment:CM,clipping_planes_pars_fragment:NM,clipping_planes_pars_vertex:RM,clipping_planes_vertex:PM,color_fragment:kM,color_pars_fragment:LM,color_pars_vertex:DM,color_vertex:IM,common:UM,cube_uv_reflection_fragment:FM,defaultnormal_vertex:OM,displacementmap_pars_vertex:zM,displacementmap_vertex:BM,emissivemap_fragment:jM,emissivemap_pars_fragment:HM,colorspace_fragment:VM,colorspace_pars_fragment:GM,envmap_fragment:WM,envmap_common_pars_fragment:XM,envmap_pars_fragment:$M,envmap_pars_vertex:YM,envmap_physical_pars_fragment:s1,envmap_vertex:qM,fog_vertex:KM,fog_pars_vertex:ZM,fog_fragment:QM,fog_pars_fragment:JM,gradientmap_pars_fragment:e1,lightmap_pars_fragment:t1,lights_lambert_fragment:n1,lights_lambert_pars_fragment:r1,lights_pars_begin:i1,lights_toon_fragment:a1,lights_toon_pars_fragment:o1,lights_phong_fragment:l1,lights_phong_pars_fragment:c1,lights_physical_fragment:u1,lights_physical_pars_fragment:d1,lights_fragment_begin:f1,lights_fragment_maps:h1,lights_fragment_end:p1,logdepthbuf_fragment:m1,logdepthbuf_pars_fragment:x1,logdepthbuf_pars_vertex:g1,logdepthbuf_vertex:v1,map_fragment:_1,map_pars_fragment:y1,map_particle_fragment:S1,map_particle_pars_fragment:M1,metalnessmap_fragment:E1,metalnessmap_pars_fragment:w1,morphinstance_vertex:b1,morphcolor_vertex:T1,morphnormal_vertex:A1,morphtarget_pars_vertex:C1,morphtarget_vertex:N1,normal_fragment_begin:R1,normal_fragment_maps:P1,normal_pars_fragment:k1,normal_pars_vertex:L1,normal_vertex:D1,normalmap_pars_fragment:I1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:F1,clearcoat_pars_fragment:O1,iridescence_pars_fragment:z1,opaque_fragment:B1,packing:j1,premultiplied_alpha_fragment:H1,project_vertex:V1,dithering_fragment:G1,dithering_pars_fragment:W1,roughnessmap_fragment:X1,roughnessmap_pars_fragment:$1,shadowmap_pars_fragment:Y1,shadowmap_pars_vertex:q1,shadowmap_vertex:K1,shadowmask_pars_fragment:Z1,skinbase_vertex:Q1,skinning_pars_vertex:J1,skinning_vertex:eE,skinnormal_vertex:tE,specularmap_fragment:nE,specularmap_pars_fragment:rE,tonemapping_fragment:iE,tonemapping_pars_fragment:sE,transmission_fragment:aE,transmission_pars_fragment:oE,uv_pars_fragment:lE,uv_pars_vertex:cE,uv_vertex:uE,worldpos_vertex:dE,background_vert:fE,background_frag:hE,backgroundCube_vert:pE,backgroundCube_frag:mE,cube_vert:xE,cube_frag:gE,depth_vert:vE,depth_frag:_E,distanceRGBA_vert:yE,distanceRGBA_frag:SE,equirect_vert:ME,equirect_frag:EE,linedashed_vert:wE,linedashed_frag:bE,meshbasic_vert:TE,meshbasic_frag:AE,meshlambert_vert:CE,meshlambert_frag:NE,meshmatcap_vert:RE,meshmatcap_frag:PE,meshnormal_vert:kE,meshnormal_frag:LE,meshphong_vert:DE,meshphong_frag:IE,meshphysical_vert:UE,meshphysical_frag:FE,meshtoon_vert:OE,meshtoon_frag:zE,points_vert:BE,points_frag:jE,shadow_vert:HE,shadow_frag:VE,sprite_vert:GE,sprite_frag:WE},le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},jn={basic:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Ht([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Ht([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Ht([le.points,le.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Ht([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Ht([le.common,le.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Ht([le.sprite,le.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Ht([le.common,le.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Ht([le.lights,le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};jn.physical={uniforms:Ht([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const To={r:0,b:0,g:0},ii=new qn,XE=new gt;function $E(t,e,n,r,i,s,a){const o=new qe(0);let c=s===!0?0:1,u,h,p=null,f=0,x=null;function _(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?n:e).get(g)),g}function y(v){let g=!1;const M=_(v);M===null?d(o,c):M&&M.isColor&&(d(M,1),g=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,g){const M=_(g);M&&(M.isCubeTexture||M.mapping===Il)?(h===void 0&&(h=new cn(new Ds(1,1,1),new Xr({name:"BackgroundCubeMaterial",uniforms:Ns(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ii.copy(g.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(XE.makeRotationFromEuler(ii)),h.material.toneMapped=Qe.getTransfer(M.colorSpace)!==it,(p!==M||f!==M.version||x!==t.toneMapping)&&(h.material.needsUpdate=!0,p=M,f=M.version,x=t.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new cn(new Oa(2,2),new Xr({name:"BackgroundMaterial",uniforms:Ns(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(M.colorSpace)!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||f!==M.version||x!==t.toneMapping)&&(u.material.needsUpdate=!0,p=M,f=M.version,x=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,g){v.getRGB(To,cg(t)),r.buffers.color.setClear(To.r,To.g,To.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(v,g=1){o.set(v),c=g,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,d(o,c)},render:y,addToRenderList:m}}function YE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},i=f(null);let s=i,a=!1;function o(S,R,W,O,F){let z=!1;const H=p(O,W,R);s!==H&&(s=H,u(s.object)),z=x(S,O,W,F),z&&_(S,O,W,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,M(S,R,W,O),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function p(S,R,W){const O=W.wireframe===!0;let F=r[S.id];F===void 0&&(F={},r[S.id]=F);let z=F[R.id];z===void 0&&(z={},F[R.id]=z);let H=z[O];return H===void 0&&(H=f(c()),z[O]=H),H}function f(S){const R=[],W=[],O=[];for(let F=0;F<n;F++)R[F]=0,W[F]=0,O[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:W,attributeDivisors:O,object:S,attributes:{},index:null}}function x(S,R,W,O){const F=s.attributes,z=R.attributes;let H=0;const Y=W.getAttributes();for(const D in Y)if(Y[D].location>=0){const Z=F[D];let ie=z[D];if(ie===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),Z===void 0||Z.attribute!==ie||ie&&Z.data!==ie.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function _(S,R,W,O){const F={},z=R.attributes;let H=0;const Y=W.getAttributes();for(const D in Y)if(Y[D].location>=0){let Z=z[D];Z===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const ie={};ie.attribute=Z,Z&&Z.data&&(ie.data=Z.data),F[D]=ie,H++}s.attributes=F,s.attributesNum=H,s.index=O}function y(){const S=s.newAttributes;for(let R=0,W=S.length;R<W;R++)S[R]=0}function m(S){d(S,0)}function d(S,R){const W=s.newAttributes,O=s.enabledAttributes,F=s.attributeDivisors;W[S]=1,O[S]===0&&(t.enableVertexAttribArray(S),O[S]=1),F[S]!==R&&(t.vertexAttribDivisor(S,R),F[S]=R)}function v(){const S=s.newAttributes,R=s.enabledAttributes;for(let W=0,O=R.length;W<O;W++)R[W]!==S[W]&&(t.disableVertexAttribArray(W),R[W]=0)}function g(S,R,W,O,F,z,H){H===!0?t.vertexAttribIPointer(S,R,W,F,z):t.vertexAttribPointer(S,R,W,O,F,z)}function M(S,R,W,O){y();const F=O.attributes,z=W.getAttributes(),H=R.defaultAttributeValues;for(const Y in z){const D=z[Y];if(D.location>=0){let q=F[Y];if(q===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const Z=q.normalized,ie=q.itemSize,_e=e.get(q);if(_e===void 0)continue;const Be=_e.buffer,X=_e.type,ne=_e.bytesPerElement,de=X===t.INT||X===t.UNSIGNED_INT||q.gpuType===$x;if(q.isInterleavedBufferAttribute){const oe=q.data,ke=oe.stride,Ee=q.offset;if(oe.isInstancedInterleavedBuffer){for(let Se=0;Se<D.locationSize;Se++)d(D.location+Se,oe.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Se=0;Se<D.locationSize;Se++)m(D.location+Se);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let Se=0;Se<D.locationSize;Se++)g(D.location+Se,ie/D.locationSize,X,Z,ke*ne,(Ee+ie/D.locationSize*Se)*ne,de)}else{if(q.isInstancedBufferAttribute){for(let oe=0;oe<D.locationSize;oe++)d(D.location+oe,q.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let oe=0;oe<D.locationSize;oe++)m(D.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let oe=0;oe<D.locationSize;oe++)g(D.location+oe,ie/D.locationSize,X,Z,ie*ne,ie/D.locationSize*oe*ne,de)}}else if(H!==void 0){const Z=H[Y];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(D.location,Z);break;case 3:t.vertexAttrib3fv(D.location,Z);break;case 4:t.vertexAttrib4fv(D.location,Z);break;default:t.vertexAttrib1fv(D.location,Z)}}}}v()}function P(){C();for(const S in r){const R=r[S];for(const W in R){const O=R[W];for(const F in O)h(O[F].object),delete O[F];delete R[W]}delete r[S]}}function A(S){if(r[S.id]===void 0)return;const R=r[S.id];for(const W in R){const O=R[W];for(const F in O)h(O[F].object),delete O[F];delete R[W]}delete r[S.id]}function T(S){for(const R in r){const W=r[R];if(W[S.id]===void 0)continue;const O=W[S.id];for(const F in O)h(O[F].object),delete O[F];delete W[S.id]}}function C(){w(),a=!0,s!==i&&(s=i,u(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function qE(t,e,n){let r;function i(u){r=u}function s(u,h){t.drawArrays(r,u,h),n.update(h,r,1)}function a(u,h,p){p!==0&&(t.drawArraysInstanced(r,u,h,p),n.update(h,r,p))}function o(u,h,p){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<p;x++)this.render(u[x],h[x]);else{f.multiDrawArraysWEBGL(r,u,0,h,0,p);let x=0;for(let _=0;_<p;_++)x+=h[_];n.update(x,r,1)}}function c(u,h,p,f){if(p===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<u.length;_++)a(u[_],h[_],f[_]);else{x.multiDrawArraysInstancedWEBGL(r,u,0,h,0,f,0,p);let _=0;for(let y=0;y<p;y++)_+=h[y];for(let y=0;y<f.length;y++)n.update(_,r,f[y])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function KE(t,e,n,r){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Wn&&r.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const T=A===Ul&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Wr&&r.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pr&&!T)}function c(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=x>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,maxTextures:f,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:M,maxSamples:P}}function ZE(t){const e=this;let n=null,r=0,i=!1,s=!1;const a=new li,o=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const x=p.length!==0||f||r!==0||i;return i=f,r=p.length,x},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,x){const _=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,d=t.get(p);if(!i||_===null||_.length===0||s&&!m)s?h(null):u();else{const v=s?0:r,g=v*4;let M=d.clippingState||null;c.value=M,M=h(_,f,g,x);for(let P=0;P!==g;++P)M[P]=n[P];d.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(p,f,x,_){const y=p!==null?p.length:0;let m=null;if(y!==0){if(m=c.value,_!==!0||m===null){const d=x+y*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,M=x;g!==y;++g,M+=4)a.copy(p[g]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function QE(t){let e=new WeakMap;function n(a,o){return o===$u?a.mapping=ws:o===Yu&&(a.mapping=bs),a}function r(a){if(a&&a.isTexture){const o=a.mapping;if(o===$u||o===Yu)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new cM(c.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",i),n(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}class hg extends ug{constructor(e=-1,n=1,r=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=r-e,a=r+e,o=i+n,c=i-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const as=4,pp=[.125,.215,.35,.446,.526,.582],di=20,Hc=new hg,mp=new qe;let Vc=null,Gc=0,Wc=0,Xc=!1;const ci=(1+Math.sqrt(5))/2,$i=1/ci,xp=[new V(-ci,$i,0),new V(ci,$i,0),new V(-$i,0,ci),new V($i,0,ci),new V(0,ci,-$i),new V(0,ci,$i),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class gp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100){Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,r,i,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Gc,Wc),this._renderer.xr.enabled=Xc,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ws||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Ul,format:Wn,colorSpace:Kr,depthBuffer:!1},i=vp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,n,r);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JE(s)),this._blurMaterial=ew(s,e,n)}return i}_compileMaterial(e){const n=new cn(this._lodPlanes[0],e);this._renderer.compile(n,Hc)}_sceneToCubeUV(e,n,r,i){const o=new vn(90,1,n,r),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(mp),h.toneMapping=jr,h.autoClear=!1;const x=new Zd({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),_=new cn(new Ds,x);let y=!1;const m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,y=!0):(x.color.copy(mp),y=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,c[d],0),o.lookAt(u[d],0,0)):v===1?(o.up.set(0,0,c[d]),o.lookAt(0,u[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,u[d]));const g=this._cubeSize;Ao(i,v*g,d>2?g:0,g,g),h.setRenderTarget(i),y&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=m}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===ws||e.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new cn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ao(n,0,0,3*c,2*c),r.setRenderTarget(n),r.render(a,Hc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=xp[(i-s-1)%xp.length];this._blur(e,s-1,s,a,o)}n.autoClear=r}_blur(e,n,r,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,r,i,"latitudinal",s),this._halfBlur(a,e,r,r,i,"longitudinal",s)}_halfBlur(e,n,r,i,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new cn(this._lodPlanes[i],u),f=u.uniforms,x=this._sizeLods[r]-1,_=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*di-1),y=s/_,m=isFinite(s)?1+Math.floor(h*y):di;m>di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const d=[];let v=0;for(let T=0;T<di;++T){const C=T/y,w=Math.exp(-C*C/2);d.push(w),T===0?v+=w:T<m&&(v+=2*w)}for(let T=0;T<d.length;T++)d[T]=d[T]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-r;const M=this._sizeLods[i],P=3*M*(i>g-as?i-g+as:0),A=4*(this._cubeSize-M);Ao(n,P,A,3*M,2*M),c.setRenderTarget(n),c.render(p,Hc)}}function JE(t){const e=[],n=[],r=[];let i=t;const s=t-as+1+pp.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);n.push(o);let c=1/o;a>t-as?c=pp[a-t+as-1]:a===0&&(c=0),r.push(c);const u=1/(o-2),h=-u,p=1+u,f=[h,h,p,h,p,p,h,h,p,p,h,p],x=6,_=6,y=3,m=2,d=1,v=new Float32Array(y*_*x),g=new Float32Array(m*_*x),M=new Float32Array(d*_*x);for(let A=0;A<x;A++){const T=A%3*2/3-1,C=A>2?0:-1,w=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];v.set(w,y*_*A),g.set(f,m*_*A);const S=[A,A,A,A,A,A];M.set(S,d*_*A)}const P=new Ni;P.setAttribute("position",new Yn(v,y)),P.setAttribute("uv",new Yn(g,m)),P.setAttribute("faceIndex",new Yn(M,d)),e.push(P),i>as&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function vp(t,e,n){const r=new Ti(t,e,n);return r.texture.mapping=Il,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ao(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function ew(t,e,n){const r=new Float32Array(di),i=new V(0,1,0);return new Xr({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jd(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function _p(){return new Xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jd(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function yp(){return new Xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Jd(){return`

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
	`}function tw(t){let e=new WeakMap,n=null;function r(o){if(o&&o.isTexture){const c=o.mapping,u=c===$u||c===Yu,h=c===ws||c===bs;if(u||h){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new gp(t)),p=u?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const x=o.image;return u&&x&&x.height>0||h&&x&&i(x)?(n===null&&(n=new gp(t)),p=u?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function i(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:a}}function nw(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const i=n(r);return i===null&&ng("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function rw(t,e,n,r){const i={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}f.removeEventListener("dispose",a),delete i[f.id];const x=s.get(f);x&&(e.remove(x),s.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,n.memory.geometries++),f}function c(p){const f=p.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const x=p.morphAttributes;for(const _ in x){const y=x[_];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(p){const f=[],x=p.index,_=p.attributes.position;let y=0;if(x!==null){const v=x.array;y=x.version;for(let g=0,M=v.length;g<M;g+=3){const P=v[g+0],A=v[g+1],T=v[g+2];f.push(P,A,A,T,T,P)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const P=g+0,A=g+1,T=g+2;f.push(P,A,A,T,T,P)}}else return;const m=new(tg(f)?lg:og)(f,1);m.version=y;const d=s.get(p);d&&e.remove(d),s.set(p,m)}function h(p){const f=s.get(p);if(f){const x=p.index;x!==null&&f.version<x.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:h}}function iw(t,e,n){let r;function i(f){r=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,x){t.drawElements(r,x,s,f*a),n.update(x,r,1)}function u(f,x,_){_!==0&&(t.drawElementsInstanced(r,x,s,f*a,_),n.update(x,r,_))}function h(f,x,_){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<_;m++)this.render(f[m]/a,x[m]);else{y.multiDrawElementsWEBGL(r,x,0,s,f,0,_);let m=0;for(let d=0;d<_;d++)m+=x[d];n.update(m,r,1)}}function p(f,x,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)u(f[d]/a,x[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(r,x,0,s,f,0,y,0,_);let d=0;for(let v=0;v<_;v++)d+=x[v];for(let v=0;v<y.length;v++)n.update(d,r,y[v])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function sw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function aw(t,e,n){const r=new WeakMap,i=new Nt;function s(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=r.get(o);if(f===void 0||f.count!==p){let S=function(){C.dispose(),r.delete(o),o.removeEventListener("dispose",S)};var x=S;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let P=o.attributes.position.count*M,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*A*4*p),C=new ig(T,P,A,p);C.type=Pr,C.needsUpdate=!0;const w=M*4;for(let R=0;R<p;R++){const W=d[R],O=v[R],F=g[R],z=P*A*4*R;for(let H=0;H<W.count;H++){const Y=H*w;_===!0&&(i.fromBufferAttribute(W,H),T[z+Y+0]=i.x,T[z+Y+1]=i.y,T[z+Y+2]=i.z,T[z+Y+3]=0),y===!0&&(i.fromBufferAttribute(O,H),T[z+Y+4]=i.x,T[z+Y+5]=i.y,T[z+Y+6]=i.z,T[z+Y+7]=0),m===!0&&(i.fromBufferAttribute(F,H),T[z+Y+8]=i.x,T[z+Y+9]=i.y,T[z+Y+10]=i.z,T[z+Y+11]=F.itemSize===4?i.w:1)}}f={count:p,texture:C,size:new Xe(P,A)},r.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const y=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function ow(t,e,n,r){let i=new WeakMap;function s(c){const u=r.render.frame,h=c.geometry,p=e.get(c,h);if(i.get(p)!==u&&(e.update(p),i.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),i.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==u&&(f.update(),i.set(f,u))}return p}function a(){i=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class pg extends Wt{constructor(e,n,r,i,s,a,o,c,u,h=ps){if(h!==ps&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===ps&&(r=Ts),r===void 0&&h===Cs&&(r=As),super(null,i,s,a,o,c,h,r,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Sn,this.minFilter=c!==void 0?c:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const mg=new Wt,xg=new pg(1,1);xg.compareFunction=eg;const gg=new ig,vg=new XS,_g=new dg,Sp=[],Mp=[],Ep=new Float32Array(16),wp=new Float32Array(9),bp=new Float32Array(4);function Is(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let s=Sp[i];if(s===void 0&&(s=new Float32Array(i),Sp[i]=s),e!==0){r.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function Ol(t,e){let n=Mp[e];n===void 0&&(n=new Int32Array(e),Mp[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function lw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function fw(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,r))return;bp.set(r),t.uniformMatrix2fv(this.addr,!1,bp),wt(n,r)}}function hw(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,r))return;wp.set(r),t.uniformMatrix3fv(this.addr,!1,wp),wt(n,r)}}function pw(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,r))return;Ep.set(r),t.uniformMatrix4fv(this.addr,!1,Ep),wt(n,r)}}function mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function _w(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function Ew(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);const s=this.type===t.SAMPLER_2D_SHADOW?xg:mg;n.setTexture2D(e||s,i)}function ww(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||vg,i)}function bw(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||_g,i)}function Tw(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||gg,i)}function Aw(t){switch(t){case 5126:return lw;case 35664:return cw;case 35665:return uw;case 35666:return dw;case 35674:return fw;case 35675:return hw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return xw;case 35668:case 35672:return gw;case 35669:case 35673:return vw;case 5125:return _w;case 36294:return yw;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return ww;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Tw}}function Cw(t,e){t.uniform1fv(this.addr,e)}function Nw(t,e){const n=Is(e,this.size,2);t.uniform2fv(this.addr,n)}function Rw(t,e){const n=Is(e,this.size,3);t.uniform3fv(this.addr,n)}function Pw(t,e){const n=Is(e,this.size,4);t.uniform4fv(this.addr,n)}function kw(t,e){const n=Is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Lw(t,e){const n=Is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Dw(t,e){const n=Is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Iw(t,e){t.uniform1iv(this.addr,e)}function Uw(t,e){t.uniform2iv(this.addr,e)}function Fw(t,e){t.uniform3iv(this.addr,e)}function Ow(t,e){t.uniform4iv(this.addr,e)}function zw(t,e){t.uniform1uiv(this.addr,e)}function Bw(t,e){t.uniform2uiv(this.addr,e)}function jw(t,e){t.uniform3uiv(this.addr,e)}function Hw(t,e){t.uniform4uiv(this.addr,e)}function Vw(t,e,n){const r=this.cache,i=e.length,s=Ol(n,i);Et(r,s)||(t.uniform1iv(this.addr,s),wt(r,s));for(let a=0;a!==i;++a)n.setTexture2D(e[a]||mg,s[a])}function Gw(t,e,n){const r=this.cache,i=e.length,s=Ol(n,i);Et(r,s)||(t.uniform1iv(this.addr,s),wt(r,s));for(let a=0;a!==i;++a)n.setTexture3D(e[a]||vg,s[a])}function Ww(t,e,n){const r=this.cache,i=e.length,s=Ol(n,i);Et(r,s)||(t.uniform1iv(this.addr,s),wt(r,s));for(let a=0;a!==i;++a)n.setTextureCube(e[a]||_g,s[a])}function Xw(t,e,n){const r=this.cache,i=e.length,s=Ol(n,i);Et(r,s)||(t.uniform1iv(this.addr,s),wt(r,s));for(let a=0;a!==i;++a)n.setTexture2DArray(e[a]||gg,s[a])}function $w(t){switch(t){case 5126:return Cw;case 35664:return Nw;case 35665:return Rw;case 35666:return Pw;case 35674:return kw;case 35675:return Lw;case 35676:return Dw;case 5124:case 35670:return Iw;case 35667:case 35671:return Uw;case 35668:case 35672:return Fw;case 35669:case 35673:return Ow;case 5125:return zw;case 36294:return Bw;case 36295:return jw;case 36296:return Hw;case 35678:case 36198:case 36298:case 36306:case 35682:return Vw;case 35679:case 36299:case 36307:return Gw;case 35680:case 36300:case 36308:case 36293:return Ww;case 36289:case 36303:case 36311:case 36292:return Xw}}class Yw{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Aw(n.type)}}class qw{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$w(n.type)}}class Kw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,n[o.id],r)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function Tp(t,e){t.seq.push(e),t.map[e.id]=e}function Zw(t,e,n){const r=t.name,i=r.length;for($c.lastIndex=0;;){const s=$c.exec(r),a=$c.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===i){Tp(n,u===void 0?new Yw(o,t,e):new qw(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new Kw(o),Tp(n,p)),n=p}}}class Bo{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const s=e.getActiveUniform(n,i),a=e.getUniformLocation(n,s.name);Zw(s,a,this)}}setValue(e,n,r,i){const s=this.map[n];s!==void 0&&s.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=r[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in n&&r.push(a)}return r}}function Ap(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const Qw=37297;let Jw=0;function eb(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=i;a<s;a++){const o=a+1;r.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return r.join(`
`)}function tb(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let r;switch(e===n?r="":e===ml&&n===pl?r="LinearDisplayP3ToLinearSRGB":e===pl&&n===ml&&(r="LinearSRGBToLinearDisplayP3"),t){case Kr:case Fl:return[r,"LinearTransferOETF"];case Bn:case qd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[r,"LinearTransferOETF"]}}function Cp(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+i+`

`+eb(t.getShaderSource(e),a)}else return i}function nb(t,e){const n=tb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function rb(t,e){let n;switch(e){case uS:n="Linear";break;case dS:n="Reinhard";break;case fS:n="OptimizedCineon";break;case hS:n="ACESFilmic";break;case mS:n="AgX";break;case xS:n="Neutral";break;case pS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function ib(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function sb(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function ab(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const s=t.getActiveAttrib(e,i),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Js(t){return t!==""}function Np(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qu(t){return t.replace(ob,cb)}const lb=new Map;function cb(t,e){let n=De[e];if(n===void 0){const r=lb.get(e);if(r!==void 0)n=De[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Qu(n)}const ub=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pp(t){return t.replace(ub,db)}function db(t,e,n,r){let i="";for(let s=parseInt(e);s<parseInt(n);s++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function kp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function fb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Vx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Gx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function hb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ws:case bs:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function mb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Wx:e="ENVMAP_BLENDING_MULTIPLY";break;case lS:e="ENVMAP_BLENDING_MIX";break;case cS:e="ENVMAP_BLENDING_ADD";break}return e}function xb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function gb(t,e,n,r){const i=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=fb(n),u=hb(n),h=pb(n),p=mb(n),f=xb(n),x=ib(n),_=sb(s),y=i.createProgram();let m,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),d.length>0&&(d+=`
`)):(m=[kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),d=[kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==jr?"#define TONE_MAPPING":"",n.toneMapping!==jr?De.tonemapping_pars_fragment:"",n.toneMapping!==jr?rb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,nb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),a=Qu(a),a=Np(a,n),a=Rp(a,n),o=Qu(o),o=Np(o,n),o=Rp(o,n),a=Pp(a),o=Pp(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=v+m+a,M=v+d+o,P=Ap(i,i.VERTEX_SHADER,g),A=Ap(i,i.FRAGMENT_SHADER,M);i.attachShader(y,P),i.attachShader(y,A),n.index0AttributeName!==void 0?i.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function T(R){if(t.debug.checkShaderErrors){const W=i.getProgramInfoLog(y).trim(),O=i.getShaderInfoLog(P).trim(),F=i.getShaderInfoLog(A).trim();let z=!0,H=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,y,P,A);else{const Y=Cp(i,P,"vertex"),D=Cp(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+Y+`
`+D)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(O===""||F==="")&&(H=!1);H&&(R.diagnostics={runnable:z,programLog:W,vertexShader:{log:O,prefix:m},fragmentShader:{log:F,prefix:d}})}i.deleteShader(P),i.deleteShader(A),C=new Bo(i,y),w=ab(i,y)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(y,Qw)),S},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Jw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=A,this}let vb=0;class _b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),s=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new yb(e),n.set(e,r)),r}}class yb{constructor(e){this.id=vb++,this.code=e,this.usedTimes=0}}function Sb(t,e,n,r,i,s,a){const o=new sg,c=new _b,u=new Set,h=[],p=i.logarithmicDepthBuffer,f=i.vertexTextures;let x=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return u.add(w),w===0?"uv":`uv${w}`}function m(w,S,R,W,O){const F=W.fog,z=O.geometry,H=w.isMeshStandardMaterial?W.environment:null,Y=(w.isMeshStandardMaterial?n:e).get(w.envMap||H),D=Y&&Y.mapping===Il?Y.image.height:null,q=_[w.type];w.precision!==null&&(x=i.getMaxPrecision(w.precision),x!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ie=Z!==void 0?Z.length:0;let _e=0;z.morphAttributes.position!==void 0&&(_e=1),z.morphAttributes.normal!==void 0&&(_e=2),z.morphAttributes.color!==void 0&&(_e=3);let Be,X,ne,de;if(q){const et=jn[q];Be=et.vertexShader,X=et.fragmentShader}else Be=w.vertexShader,X=w.fragmentShader,c.update(w),ne=c.getVertexShaderID(w),de=c.getFragmentShaderID(w);const oe=t.getRenderTarget(),ke=O.isInstancedMesh===!0,Ee=O.isBatchedMesh===!0,Se=!!w.map,k=!!w.matcap,Pe=!!Y,He=!!w.aoMap,ot=!!w.lightMap,Te=!!w.bumpMap,$e=!!w.normalMap,Oe=!!w.displacementMap,Le=!!w.emissiveMap,vt=!!w.metalnessMap,N=!!w.roughnessMap,E=w.anisotropy>0,G=w.clearcoat>0,Q=w.dispersion>0,J=w.iridescence>0,ee=w.sheen>0,we=w.transmission>0,ce=E&&!!w.anisotropyMap,ue=G&&!!w.clearcoatMap,Ue=G&&!!w.clearcoatNormalMap,re=G&&!!w.clearcoatRoughnessMap,ye=J&&!!w.iridescenceMap,je=J&&!!w.iridescenceThicknessMap,Ne=ee&&!!w.sheenColorMap,fe=ee&&!!w.sheenRoughnessMap,Fe=!!w.specularMap,Ve=!!w.specularColorMap,pt=!!w.specularIntensityMap,L=we&&!!w.transmissionMap,he=we&&!!w.thicknessMap,$=!!w.gradientMap,K=!!w.alphaMap,ae=w.alphaTest>0,Re=!!w.alphaHash,Ye=!!w.extensions;let mt=jr;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(mt=t.toneMapping);const bt={shaderID:q,shaderType:w.type,shaderName:w.name,vertexShader:Be,fragmentShader:X,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:Ee,batchingColor:Ee&&O._colorsTexture!==null,instancing:ke,instancingColor:ke&&O.instanceColor!==null,instancingMorph:ke&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Kr,alphaToCoverage:!!w.alphaToCoverage,map:Se,matcap:k,envMap:Pe,envMapMode:Pe&&Y.mapping,envMapCubeUVHeight:D,aoMap:He,lightMap:ot,bumpMap:Te,normalMap:$e,displacementMap:f&&Oe,emissiveMap:Le,normalMapObjectSpace:$e&&w.normalMapType===RS,normalMapTangentSpace:$e&&w.normalMapType===Jx,metalnessMap:vt,roughnessMap:N,anisotropy:E,anisotropyMap:ce,clearcoat:G,clearcoatMap:ue,clearcoatNormalMap:Ue,clearcoatRoughnessMap:re,dispersion:Q,iridescence:J,iridescenceMap:ye,iridescenceThicknessMap:je,sheen:ee,sheenColorMap:Ne,sheenRoughnessMap:fe,specularMap:Fe,specularColorMap:Ve,specularIntensityMap:pt,transmission:we,transmissionMap:L,thicknessMap:he,gradientMap:$,opaque:w.transparent===!1&&w.blending===hs&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:ae,alphaHash:Re,combine:w.combine,mapUv:Se&&y(w.map.channel),aoMapUv:He&&y(w.aoMap.channel),lightMapUv:ot&&y(w.lightMap.channel),bumpMapUv:Te&&y(w.bumpMap.channel),normalMapUv:$e&&y(w.normalMap.channel),displacementMapUv:Oe&&y(w.displacementMap.channel),emissiveMapUv:Le&&y(w.emissiveMap.channel),metalnessMapUv:vt&&y(w.metalnessMap.channel),roughnessMapUv:N&&y(w.roughnessMap.channel),anisotropyMapUv:ce&&y(w.anisotropyMap.channel),clearcoatMapUv:ue&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:je&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:fe&&y(w.sheenRoughnessMap.channel),specularMapUv:Fe&&y(w.specularMap.channel),specularColorMapUv:Ve&&y(w.specularColorMap.channel),specularIntensityMapUv:pt&&y(w.specularIntensityMap.channel),transmissionMapUv:L&&y(w.transmissionMap.channel),thicknessMapUv:he&&y(w.thicknessMap.channel),alphaMapUv:K&&y(w.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&($e||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Se||K),fog:!!F,useFog:w.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:O.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:_e,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:mt,decodeVideoTexture:Se&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===it,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Vn,flipSided:w.side===tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ye&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ye&&w.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return bt.vertexUv1s=u.has(1),bt.vertexUv2s=u.has(2),bt.vertexUv3s=u.has(3),u.clear(),bt}function d(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)S.push(R),S.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(v(S,w),g(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function g(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),w.push(o.mask)}function M(w){const S=_[w.type];let R;if(S){const W=jn[S];R=sM.clone(W.uniforms)}else R=w.uniforms;return R}function P(w,S){let R;for(let W=0,O=h.length;W<O;W++){const F=h[W];if(F.cacheKey===S){R=F,++R.usedTimes;break}}return R===void 0&&(R=new gb(t,S,w,s),h.push(R)),R}function A(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function T(w){c.remove(w)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:P,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function Mb(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function r(s,a,o){t.get(s)[a]=o}function i(){t=new WeakMap}return{get:e,remove:n,update:r,dispose:i}}function Eb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Lp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dp(){const t=[];let e=0;const n=[],r=[],i=[];function s(){e=0,n.length=0,r.length=0,i.length=0}function a(p,f,x,_,y,m){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:f,material:x,groupOrder:_,renderOrder:p.renderOrder,z:y,group:m},t[e]=d):(d.id=p.id,d.object=p,d.geometry=f,d.material=x,d.groupOrder=_,d.renderOrder=p.renderOrder,d.z=y,d.group=m),e++,d}function o(p,f,x,_,y,m){const d=a(p,f,x,_,y,m);x.transmission>0?r.push(d):x.transparent===!0?i.push(d):n.push(d)}function c(p,f,x,_,y,m){const d=a(p,f,x,_,y,m);x.transmission>0?r.unshift(d):x.transparent===!0?i.unshift(d):n.unshift(d)}function u(p,f){n.length>1&&n.sort(p||Eb),r.length>1&&r.sort(f||Lp),i.length>1&&i.sort(f||Lp)}function h(){for(let p=e,f=t.length;p<f;p++){const x=t[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:r,transparent:i,init:s,push:o,unshift:c,finish:h,sort:u}}function wb(){let t=new WeakMap;function e(r,i){const s=t.get(r);let a;return s===void 0?(a=new Dp,t.set(r,[a])):i>=s.length?(a=new Dp,s.push(a)):a=s[i],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function bb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new qe};break;case"SpotLight":n={position:new V,direction:new V,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function Tb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Ab=0;function Cb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Nb(t){const e=new bb,n=Tb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new V);const i=new V,s=new gt,a=new gt;function o(u){let h=0,p=0,f=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let x=0,_=0,y=0,m=0,d=0,v=0,g=0,M=0,P=0,A=0,T=0;u.sort(Cb);for(let w=0,S=u.length;w<S;w++){const R=u[w],W=R.color,O=R.intensity,F=R.distance,z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=W.r*O,p+=W.g*O,f+=W.b*O;else if(R.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(R.sh.coefficients[H],O);T++}else if(R.isDirectionalLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,D=n.get(R);D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,r.directionalShadow[x]=D,r.directionalShadowMap[x]=z,r.directionalShadowMatrix[x]=R.shadow.matrix,v++}r.directional[x]=H,x++}else if(R.isSpotLight){const H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(W).multiplyScalar(O),H.distance=F,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,r.spot[y]=H;const Y=R.shadow;if(R.map&&(r.spotLightMap[P]=R.map,P++,Y.updateMatrices(R),R.castShadow&&A++),r.spotLightMatrix[y]=Y.matrix,R.castShadow){const D=n.get(R);D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,r.spotShadow[y]=D,r.spotShadowMap[y]=z,M++}y++}else if(R.isRectAreaLight){const H=e.get(R);H.color.copy(W).multiplyScalar(O),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),r.rectArea[m]=H,m++}else if(R.isPointLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const Y=R.shadow,D=n.get(R);D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,D.shadowCameraNear=Y.camera.near,D.shadowCameraFar=Y.camera.far,r.pointShadow[_]=D,r.pointShadowMap[_]=z,r.pointShadowMatrix[_]=R.shadow.matrix,g++}r.point[_]=H,_++}else if(R.isHemisphereLight){const H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(O),H.groundColor.copy(R.groundColor).multiplyScalar(O),r.hemi[d]=H,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=f;const C=r.hash;(C.directionalLength!==x||C.pointLength!==_||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==v||C.numPointShadows!==g||C.numSpotShadows!==M||C.numSpotMaps!==P||C.numLightProbes!==T)&&(r.directional.length=x,r.spot.length=y,r.rectArea.length=m,r.point.length=_,r.hemi.length=d,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=g,r.pointShadowMap.length=g,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=g,r.spotLightMatrix.length=M+P-A,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=T,C.directionalLength=x,C.pointLength=_,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=v,C.numPointShadows=g,C.numSpotShadows=M,C.numSpotMaps=P,C.numLightProbes=T,r.version=Ab++)}function c(u,h){let p=0,f=0,x=0,_=0,y=0;const m=h.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const g=u[d];if(g.isDirectionalLight){const M=r.directional[p];M.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),p++}else if(g.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),x++}else if(g.isRectAreaLight){const M=r.rectArea[_];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(g.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(g.isPointLight){const M=r.point[f];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const M=r.hemi[y];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:r}}function Ip(t){const e=new Nb(t),n=[],r=[];function i(h){u.camera=h,n.length=0,r.length=0}function s(h){n.push(h)}function a(h){r.push(h)}function o(){e.setup(n)}function c(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Rb(t){let e=new WeakMap;function n(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Ip(t),e.set(i,[o])):s>=a.length?(o=new Ip(t),a.push(o)):o=a[s],o}function r(){e=new WeakMap}return{get:n,dispose:r}}class Pb extends Fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kb extends Fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Db=`uniform sampler2D shadow_pass;
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
}`;function Ib(t,e,n){let r=new Qd;const i=new Xe,s=new Xe,a=new Nt,o=new Pb({depthPacking:NS}),c=new kb,u={},h=n.maxTextureSize,p={[Gr]:tn,[tn]:Gr,[Vn]:Vn},f=new Xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Lb,fragmentShader:Db}),x=f.clone();x.defines.HORIZONTAL_PASS=1;const _=new Ni;_.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new cn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vx;let d=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Br),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const O=d!==nr&&this.type===nr,F=d===nr&&this.type!==nr;for(let z=0,H=A.length;z<H;z++){const Y=A[z],D=Y.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const q=D.getFrameExtents();if(i.multiply(q),s.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/q.x),i.x=s.x*q.x,D.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/q.y),i.y=s.y*q.y,D.mapSize.y=s.y)),D.map===null||O===!0||F===!0){const ie=this.type!==nr?{minFilter:Sn,magFilter:Sn}:{};D.map!==null&&D.map.dispose(),D.map=new Ti(i.x,i.y,ie),D.map.texture.name=Y.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Z=D.getViewportCount();for(let ie=0;ie<Z;ie++){const _e=D.getViewport(ie);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),W.viewport(a),D.updateMatrices(Y,ie),r=D.getFrustum(),M(T,C,D.camera,Y,this.type)}D.isPointLightShadow!==!0&&this.type===nr&&v(D,C),D.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,R)};function v(A,T){const C=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,x.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,x.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ti(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,C,f,y,null),x.uniforms.shadow_pass.value=A.mapPass.texture,x.uniforms.resolution.value=A.mapSize,x.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,C,x,y,null)}function g(A,T,C,w){let S=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=C.isPointLight===!0?c:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=S.uuid,O=T.uuid;let F=u[W];F===void 0&&(F={},u[W]=F);let z=F[O];z===void 0&&(z=S.clone(),F[O]=z,T.addEventListener("dispose",P)),S=z}if(S.visible=T.visible,S.wireframe=T.wireframe,w===nr?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:p[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=t.properties.get(S);W.light=C}return S}function M(A,T,C,w,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===nr)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const O=e.update(A),F=A.material;if(Array.isArray(F)){const z=O.groups;for(let H=0,Y=z.length;H<Y;H++){const D=z[H],q=F[D.materialIndex];if(q&&q.visible){const Z=g(A,q,w,S);A.onBeforeShadow(t,A,T,C,O,Z,D),t.renderBufferDirect(C,null,O,Z,A,D),A.onAfterShadow(t,A,T,C,O,Z,D)}}}else if(F.visible){const z=g(A,F,w,S);A.onBeforeShadow(t,A,T,C,O,z,null),t.renderBufferDirect(C,null,O,z,A,null),A.onAfterShadow(t,A,T,C,O,z,null)}}const W=A.children;for(let O=0,F=W.length;O<F;O++)M(W[O],T,C,w,S)}function P(A){A.target.removeEventListener("dispose",P);for(const C in u){const w=u[C],S=A.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function Ub(t){function e(){let L=!1;const he=new Nt;let $=null;const K=new Nt(0,0,0,0);return{setMask:function(ae){$!==ae&&!L&&(t.colorMask(ae,ae,ae,ae),$=ae)},setLocked:function(ae){L=ae},setClear:function(ae,Re,Ye,mt,bt){bt===!0&&(ae*=mt,Re*=mt,Ye*=mt),he.set(ae,Re,Ye,mt),K.equals(he)===!1&&(t.clearColor(ae,Re,Ye,mt),K.copy(he))},reset:function(){L=!1,$=null,K.set(-1,0,0,0)}}}function n(){let L=!1,he=null,$=null,K=null;return{setTest:function(ae){ae?de(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(ae){he!==ae&&!L&&(t.depthMask(ae),he=ae)},setFunc:function(ae){if($!==ae){switch(ae){case tS:t.depthFunc(t.NEVER);break;case nS:t.depthFunc(t.ALWAYS);break;case rS:t.depthFunc(t.LESS);break;case dl:t.depthFunc(t.LEQUAL);break;case iS:t.depthFunc(t.EQUAL);break;case sS:t.depthFunc(t.GEQUAL);break;case aS:t.depthFunc(t.GREATER);break;case oS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}$=ae}},setLocked:function(ae){L=ae},setClear:function(ae){K!==ae&&(t.clearDepth(ae),K=ae)},reset:function(){L=!1,he=null,$=null,K=null}}}function r(){let L=!1,he=null,$=null,K=null,ae=null,Re=null,Ye=null,mt=null,bt=null;return{setTest:function(et){L||(et?de(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(et){he!==et&&!L&&(t.stencilMask(et),he=et)},setFunc:function(et,Un,Fn){($!==et||K!==Un||ae!==Fn)&&(t.stencilFunc(et,Un,Fn),$=et,K=Un,ae=Fn)},setOp:function(et,Un,Fn){(Re!==et||Ye!==Un||mt!==Fn)&&(t.stencilOp(et,Un,Fn),Re=et,Ye=Un,mt=Fn)},setLocked:function(et){L=et},setClear:function(et){bt!==et&&(t.clearStencil(et),bt=et)},reset:function(){L=!1,he=null,$=null,K=null,ae=null,Re=null,Ye=null,mt=null,bt=null}}}const i=new e,s=new n,a=new r,o=new WeakMap,c=new WeakMap;let u={},h={},p=new WeakMap,f=[],x=null,_=!1,y=null,m=null,d=null,v=null,g=null,M=null,P=null,A=new qe(0,0,0),T=0,C=!1,w=null,S=null,R=null,W=null,O=null;const F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=H>=1):Y.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=H>=2);let D=null,q={};const Z=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),_e=new Nt().fromArray(Z),Be=new Nt().fromArray(ie);function X(L,he,$,K){const ae=new Uint8Array(4),Re=t.createTexture();t.bindTexture(L,Re),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<$;Ye++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(he+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Re}const ne={};ne[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),de(t.DEPTH_TEST),s.setFunc(dl),Te(!1),$e(xh),de(t.CULL_FACE),He(Br);function de(L){u[L]!==!0&&(t.enable(L),u[L]=!0)}function oe(L){u[L]!==!1&&(t.disable(L),u[L]=!1)}function ke(L,he){return h[L]!==he?(t.bindFramebuffer(L,he),h[L]=he,L===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=he),L===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Ee(L,he){let $=f,K=!1;if(L){$=p.get(he),$===void 0&&($=[],p.set(he,$));const ae=L.textures;if($.length!==ae.length||$[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,Ye=ae.length;Re<Ye;Re++)$[Re]=t.COLOR_ATTACHMENT0+Re;$.length=ae.length,K=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,K=!0);K&&t.drawBuffers($)}function Se(L){return x!==L?(t.useProgram(L),x=L,!0):!1}const k={[ui]:t.FUNC_ADD,[Oy]:t.FUNC_SUBTRACT,[zy]:t.FUNC_REVERSE_SUBTRACT};k[By]=t.MIN,k[jy]=t.MAX;const Pe={[Hy]:t.ZERO,[Vy]:t.ONE,[Gy]:t.SRC_COLOR,[Wu]:t.SRC_ALPHA,[Ky]:t.SRC_ALPHA_SATURATE,[Yy]:t.DST_COLOR,[Xy]:t.DST_ALPHA,[Wy]:t.ONE_MINUS_SRC_COLOR,[Xu]:t.ONE_MINUS_SRC_ALPHA,[qy]:t.ONE_MINUS_DST_COLOR,[$y]:t.ONE_MINUS_DST_ALPHA,[Zy]:t.CONSTANT_COLOR,[Qy]:t.ONE_MINUS_CONSTANT_COLOR,[Jy]:t.CONSTANT_ALPHA,[eS]:t.ONE_MINUS_CONSTANT_ALPHA};function He(L,he,$,K,ae,Re,Ye,mt,bt,et){if(L===Br){_===!0&&(oe(t.BLEND),_=!1);return}if(_===!1&&(de(t.BLEND),_=!0),L!==Fy){if(L!==y||et!==C){if((m!==ui||g!==ui)&&(t.blendEquation(t.FUNC_ADD),m=ui,g=ui),et)switch(L){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gh:t.blendFunc(t.ONE,t.ONE);break;case vh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _h:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case vh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _h:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}d=null,v=null,M=null,P=null,A.set(0,0,0),T=0,y=L,C=et}return}ae=ae||he,Re=Re||$,Ye=Ye||K,(he!==m||ae!==g)&&(t.blendEquationSeparate(k[he],k[ae]),m=he,g=ae),($!==d||K!==v||Re!==M||Ye!==P)&&(t.blendFuncSeparate(Pe[$],Pe[K],Pe[Re],Pe[Ye]),d=$,v=K,M=Re,P=Ye),(mt.equals(A)===!1||bt!==T)&&(t.blendColor(mt.r,mt.g,mt.b,bt),A.copy(mt),T=bt),y=L,C=!1}function ot(L,he){L.side===Vn?oe(t.CULL_FACE):de(t.CULL_FACE);let $=L.side===tn;he&&($=!$),Te($),L.blending===hs&&L.transparent===!1?He(Br):He(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),i.setMask(L.colorWrite);const K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Le(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Te(L){w!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),w=L)}function $e(L){L!==Iy?(de(t.CULL_FACE),L!==S&&(L===xh?t.cullFace(t.BACK):L===Uy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),S=L}function Oe(L){L!==R&&(z&&t.lineWidth(L),R=L)}function Le(L,he,$){L?(de(t.POLYGON_OFFSET_FILL),(W!==he||O!==$)&&(t.polygonOffset(he,$),W=he,O=$)):oe(t.POLYGON_OFFSET_FILL)}function vt(L){L?de(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function N(L){L===void 0&&(L=t.TEXTURE0+F-1),D!==L&&(t.activeTexture(L),D=L)}function E(L,he,$){$===void 0&&(D===null?$=t.TEXTURE0+F-1:$=D);let K=q[$];K===void 0&&(K={type:void 0,texture:void 0},q[$]=K),(K.type!==L||K.texture!==he)&&(D!==$&&(t.activeTexture($),D=$),t.bindTexture(L,he||ne[L]),K.type=L,K.texture=he)}function G(){const L=q[D];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(L){_e.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),_e.copy(L))}function fe(L){Be.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Be.copy(L))}function Fe(L,he){let $=c.get(he);$===void 0&&($=new WeakMap,c.set(he,$));let K=$.get(L);K===void 0&&(K=t.getUniformBlockIndex(he,L.name),$.set(L,K))}function Ve(L,he){const K=c.get(he).get(L);o.get(he)!==K&&(t.uniformBlockBinding(he,K,L.__bindingPointIndex),o.set(he,K))}function pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,q={},h={},p=new WeakMap,f=[],x=null,_=!1,y=null,m=null,d=null,v=null,g=null,M=null,P=null,A=new qe(0,0,0),T=0,C=!1,w=null,S=null,R=null,W=null,O=null,_e.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:de,disable:oe,bindFramebuffer:ke,drawBuffers:Ee,useProgram:Se,setBlending:He,setMaterial:ot,setFlipSided:Te,setCullFace:$e,setLineWidth:Oe,setPolygonOffset:Le,setScissorTest:vt,activeTexture:N,bindTexture:E,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:ye,texImage3D:je,updateUBOMapping:Fe,uniformBlockBinding:Ve,texStorage2D:Ue,texStorage3D:re,texSubImage2D:ee,texSubImage3D:we,compressedTexSubImage2D:ce,compressedTexSubImage3D:ue,scissor:Ne,viewport:fe,reset:pt}}function Fb(t,e,n,r,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Xe,h=new WeakMap;let p;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,E){return x?new OffscreenCanvas(N,E):gl("canvas")}function y(N,E,G){let Q=1;const J=vt(N);if((J.width>G||J.height>G)&&(Q=G/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ee=Math.floor(Q*J.width),we=Math.floor(Q*J.height);p===void 0&&(p=_(ee,we));const ce=E?_(ee,we):p;return ce.width=ee,ce.height=we,ce.getContext("2d").drawImage(N,0,0,ee,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ee+"x"+we+")."),ce}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),N;return N}function m(N){return N.generateMipmaps&&N.minFilter!==Sn&&N.minFilter!==_n}function d(N){t.generateMipmap(N)}function v(N,E,G,Q,J=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ee=E;if(E===t.RED&&(G===t.FLOAT&&(ee=t.R32F),G===t.HALF_FLOAT&&(ee=t.R16F),G===t.UNSIGNED_BYTE&&(ee=t.R8)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.R8UI),G===t.UNSIGNED_SHORT&&(ee=t.R16UI),G===t.UNSIGNED_INT&&(ee=t.R32UI),G===t.BYTE&&(ee=t.R8I),G===t.SHORT&&(ee=t.R16I),G===t.INT&&(ee=t.R32I)),E===t.RG&&(G===t.FLOAT&&(ee=t.RG32F),G===t.HALF_FLOAT&&(ee=t.RG16F),G===t.UNSIGNED_BYTE&&(ee=t.RG8)),E===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RG8UI),G===t.UNSIGNED_SHORT&&(ee=t.RG16UI),G===t.UNSIGNED_INT&&(ee=t.RG32UI),G===t.BYTE&&(ee=t.RG8I),G===t.SHORT&&(ee=t.RG16I),G===t.INT&&(ee=t.RG32I)),E===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),E===t.RGBA){const we=J?hl:Qe.getTransfer(Q);G===t.FLOAT&&(ee=t.RGBA32F),G===t.HALF_FLOAT&&(ee=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ee=we===it?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function g(N,E){let G;return N?E===null||E===Ts||E===As?G=t.DEPTH24_STENCIL8:E===Pr?G=t.DEPTH32F_STENCIL8:E===fl&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ts||E===As?G=t.DEPTH_COMPONENT24:E===Pr?G=t.DEPTH_COMPONENT32F:E===fl&&(G=t.DEPTH_COMPONENT16),G}function M(N,E){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Sn&&N.minFilter!==_n?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function P(N){const E=N.target;E.removeEventListener("dispose",P),T(E),E.isVideoTexture&&h.delete(E)}function A(N){const E=N.target;E.removeEventListener("dispose",A),w(E)}function T(N){const E=r.get(N);if(E.__webglInit===void 0)return;const G=N.source,Q=f.get(G);if(Q){const J=Q[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(N),Object.keys(Q).length===0&&f.delete(G)}r.remove(N)}function C(N){const E=r.get(N);t.deleteTexture(E.__webglTexture);const G=N.source,Q=f.get(G);delete Q[E.__cacheKey],a.memory.textures--}function w(N){const E=r.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let J=0;J<E.__webglFramebuffer[Q].length;J++)t.deleteFramebuffer(E.__webglFramebuffer[Q][J]);else t.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[Q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=N.textures;for(let Q=0,J=G.length;Q<J;Q++){const ee=r.get(G[Q]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),a.memory.textures--),r.remove(G[Q])}r.remove(N)}let S=0;function R(){S=0}function W(){const N=S;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),S+=1,N}function O(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function F(N,E){const G=r.get(N);if(N.isVideoTexture&&Oe(N),N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){const Q=N.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(G,N,E);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function z(N,E){const G=r.get(N);if(N.version>0&&G.__version!==N.version){Be(G,N,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function H(N,E){const G=r.get(N);if(N.version>0&&G.__version!==N.version){Be(G,N,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function Y(N,E){const G=r.get(N);if(N.version>0&&G.__version!==N.version){X(G,N,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const D={[qu]:t.REPEAT,[mi]:t.CLAMP_TO_EDGE,[Ku]:t.MIRRORED_REPEAT},q={[Sn]:t.NEAREST,[gS]:t.NEAREST_MIPMAP_NEAREST,[so]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[xc]:t.LINEAR_MIPMAP_NEAREST,[xi]:t.LINEAR_MIPMAP_LINEAR},Z={[PS]:t.NEVER,[FS]:t.ALWAYS,[kS]:t.LESS,[eg]:t.LEQUAL,[LS]:t.EQUAL,[US]:t.GEQUAL,[DS]:t.GREATER,[IS]:t.NOTEQUAL};function ie(N,E){if(E.type===Pr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_n||E.magFilter===xc||E.magFilter===so||E.magFilter===xi||E.minFilter===_n||E.minFilter===xc||E.minFilter===so||E.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,D[E.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,D[E.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,D[E.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,q[E.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,q[E.minFilter]),E.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==so&&E.minFilter!==xi||E.type===Pr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function _e(N,E){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",P));const Q=E.source;let J=f.get(Q);J===void 0&&(J={},f.set(Q,J));const ee=O(E);if(ee!==N.__cacheKey){J[ee]===void 0&&(J[ee]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[ee].usedTimes++;const we=J[N.__cacheKey];we!==void 0&&(J[N.__cacheKey].usedTimes--,we.usedTimes===0&&C(E)),N.__cacheKey=ee,N.__webglTexture=J[ee].texture}return G}function Be(N,E,G){let Q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=t.TEXTURE_3D);const J=_e(N,E),ee=E.source;n.bindTexture(Q,N.__webglTexture,t.TEXTURE0+G);const we=r.get(ee);if(ee.version!==we.__version||J===!0){n.activeTexture(t.TEXTURE0+G);const ce=Qe.getPrimaries(Qe.workingColorSpace),ue=E.colorSpace===Cr?null:Qe.getPrimaries(E.colorSpace),Ue=E.colorSpace===Cr||ce===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let re=y(E.image,!1,i.maxTextureSize);re=Le(E,re);const ye=s.convert(E.format,E.colorSpace),je=s.convert(E.type);let Ne=v(E.internalFormat,ye,je,E.colorSpace,E.isVideoTexture);ie(Q,E);let fe;const Fe=E.mipmaps,Ve=E.isVideoTexture!==!0,pt=we.__version===void 0||J===!0,L=ee.dataReady,he=M(E,re);if(E.isDepthTexture)Ne=g(E.format===Cs,E.type),pt&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,Ne,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ne,re.width,re.height,0,ye,je,null));else if(E.isDataTexture)if(Fe.length>0){Ve&&pt&&n.texStorage2D(t.TEXTURE_2D,he,Ne,Fe[0].width,Fe[0].height);for(let $=0,K=Fe.length;$<K;$++)fe=Fe[$],Ve?L&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,fe.width,fe.height,ye,je,fe.data):n.texImage2D(t.TEXTURE_2D,$,Ne,fe.width,fe.height,0,ye,je,fe.data);E.generateMipmaps=!1}else Ve?(pt&&n.texStorage2D(t.TEXTURE_2D,he,Ne,re.width,re.height),L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ye,je,re.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,re.width,re.height,0,ye,je,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ve&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ne,Fe[0].width,Fe[0].height,re.depth);for(let $=0,K=Fe.length;$<K;$++)if(fe=Fe[$],E.format!==Wn)if(ye!==null)if(Ve){if(L)if(E.layerUpdates.size>0){for(const ae of E.layerUpdates){const Re=fe.width*fe.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,ae,fe.width,fe.height,1,ye,fe.data.slice(Re*ae,Re*(ae+1)),0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,fe.width,fe.height,re.depth,ye,fe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Ne,fe.width,fe.height,re.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,fe.width,fe.height,re.depth,ye,je,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,Ne,fe.width,fe.height,re.depth,0,ye,je,fe.data)}else{Ve&&pt&&n.texStorage2D(t.TEXTURE_2D,he,Ne,Fe[0].width,Fe[0].height);for(let $=0,K=Fe.length;$<K;$++)fe=Fe[$],E.format!==Wn?ye!==null?Ve?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,fe.width,fe.height,ye,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,$,Ne,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?L&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,fe.width,fe.height,ye,je,fe.data):n.texImage2D(t.TEXTURE_2D,$,Ne,fe.width,fe.height,0,ye,je,fe.data)}else if(E.isDataArrayTexture)if(Ve){if(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ne,re.width,re.height,re.depth),L)if(E.layerUpdates.size>0){let $;switch(je){case t.UNSIGNED_BYTE:switch(ye){case t.ALPHA:$=1;break;case t.LUMINANCE:$=1;break;case t.LUMINANCE_ALPHA:$=2;break;case t.RGB:$=3;break;case t.RGBA:$=4;break;default:throw new Error(`Unknown texel size for format ${ye}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:$=1;break;default:throw new Error(`Unknown texel size for type ${je}.`)}const K=re.width*re.height*$;for(const ae of E.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,re.width,re.height,1,ye,je,re.data.slice(K*ae,K*(ae+1)));E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ye,je,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,re.width,re.height,re.depth,0,ye,je,re.data);else if(E.isData3DTexture)Ve?(pt&&n.texStorage3D(t.TEXTURE_3D,he,Ne,re.width,re.height,re.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ye,je,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,re.width,re.height,re.depth,0,ye,je,re.data);else if(E.isFramebufferTexture){if(pt)if(Ve)n.texStorage2D(t.TEXTURE_2D,he,Ne,re.width,re.height);else{let $=re.width,K=re.height;for(let ae=0;ae<he;ae++)n.texImage2D(t.TEXTURE_2D,ae,Ne,$,K,0,ye,je,null),$>>=1,K>>=1}}else if(Fe.length>0){if(Ve&&pt){const $=vt(Fe[0]);n.texStorage2D(t.TEXTURE_2D,he,Ne,$.width,$.height)}for(let $=0,K=Fe.length;$<K;$++)fe=Fe[$],Ve?L&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ye,je,fe):n.texImage2D(t.TEXTURE_2D,$,Ne,ye,je,fe);E.generateMipmaps=!1}else if(Ve){if(pt){const $=vt(re);n.texStorage2D(t.TEXTURE_2D,he,Ne,$.width,$.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,je,re)}else n.texImage2D(t.TEXTURE_2D,0,Ne,ye,je,re);m(E)&&d(Q),we.__version=ee.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function X(N,E,G){if(E.image.length!==6)return;const Q=_e(N,E),J=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+G);const ee=r.get(J);if(J.version!==ee.__version||Q===!0){n.activeTexture(t.TEXTURE0+G);const we=Qe.getPrimaries(Qe.workingColorSpace),ce=E.colorSpace===Cr?null:Qe.getPrimaries(E.colorSpace),ue=E.colorSpace===Cr||we===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let K=0;K<6;K++)!Ue&&!re?ye[K]=y(E.image[K],!0,i.maxCubemapSize):ye[K]=re?E.image[K].image:E.image[K],ye[K]=Le(E,ye[K]);const je=ye[0],Ne=s.convert(E.format,E.colorSpace),fe=s.convert(E.type),Fe=v(E.internalFormat,Ne,fe,E.colorSpace),Ve=E.isVideoTexture!==!0,pt=ee.__version===void 0||Q===!0,L=J.dataReady;let he=M(E,je);ie(t.TEXTURE_CUBE_MAP,E);let $;if(Ue){Ve&&pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Fe,je.width,je.height);for(let K=0;K<6;K++){$=ye[K].mipmaps;for(let ae=0;ae<$.length;ae++){const Re=$[ae];E.format!==Wn?Ne!==null?Ve?L&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,Re.width,Re.height,Ne,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,Fe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,Re.width,Re.height,Ne,fe,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,Fe,Re.width,Re.height,0,Ne,fe,Re.data)}}}else{if($=E.mipmaps,Ve&&pt){$.length>0&&he++;const K=vt(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Fe,K.width,K.height)}for(let K=0;K<6;K++)if(re){Ve?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye[K].width,ye[K].height,Ne,fe,ye[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,ye[K].width,ye[K].height,0,Ne,fe,ye[K].data);for(let ae=0;ae<$.length;ae++){const Ye=$[ae].image[K].image;Ve?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,Ye.width,Ye.height,Ne,fe,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,Fe,Ye.width,Ye.height,0,Ne,fe,Ye.data)}}else{Ve?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ne,fe,ye[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,Ne,fe,ye[K]);for(let ae=0;ae<$.length;ae++){const Re=$[ae];Ve?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,Ne,fe,Re.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,Fe,Ne,fe,Re.image[K])}}}m(E)&&d(t.TEXTURE_CUBE_MAP),ee.__version=J.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ne(N,E,G,Q,J,ee){const we=s.convert(G.format,G.colorSpace),ce=s.convert(G.type),ue=v(G.internalFormat,we,ce,G.colorSpace);if(!r.get(E).__hasExternalTextures){const re=Math.max(1,E.width>>ee),ye=Math.max(1,E.height>>ee);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ee,ue,re,ye,E.depth,0,we,ce,null):n.texImage2D(J,ee,ue,re,ye,0,we,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),$e(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,J,r.get(G).__webglTexture,0,Te(E)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,J,r.get(G).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(N,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,N),E.depthBuffer){const Q=E.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,ee=g(E.stencilBuffer,J),we=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Te(E);$e(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,ee,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,ee,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,N)}else{const Q=E.textures;for(let J=0;J<Q.length;J++){const ee=Q[J],we=s.convert(ee.format,ee.colorSpace),ce=s.convert(ee.type),ue=v(ee.internalFormat,we,ce,ee.colorSpace),Ue=Te(E);G&&$e(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,ue,E.width,E.height):$e(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,ue,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ue,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);const Q=r.get(E.depthTexture).__webglTexture,J=Te(E);if(E.depthTexture.format===ps)$e(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Cs)$e(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ke(N){const E=r.get(N),G=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");oe(E.__webglFramebuffer,N)}else if(G){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]=t.createRenderbuffer(),de(E.__webglDepthbuffer[Q],N,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),de(E.__webglDepthbuffer,N,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(N,E,G){const Q=r.get(N);E!==void 0&&ne(Q.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&ke(N)}function Se(N){const E=N.texture,G=r.get(N),Q=r.get(E);N.addEventListener("dispose",A);const J=N.textures,ee=N.isWebGLCubeRenderTarget===!0,we=J.length>1;if(we||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=E.version,a.memory.textures++),ee){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let ue=0;ue<E.mipmaps.length;ue++)G.__webglFramebuffer[ce][ue]=t.createFramebuffer()}else G.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)G.__webglFramebuffer[ce]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(we)for(let ce=0,ue=J.length;ce<ue;ce++){const Ue=r.get(J[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&$e(N)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){const ue=J[ce];G.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ce]);const Ue=s.convert(ue.format,ue.colorSpace),re=s.convert(ue.type),ye=v(ue.internalFormat,Ue,re,ue.colorSpace,N.isXRRenderTarget===!0),je=Te(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,ye,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,G.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),de(G.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ie(t.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)ne(G.__webglFramebuffer[ce][ue],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else ne(G.__webglFramebuffer[ce],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let ce=0,ue=J.length;ce<ue;ce++){const Ue=J[ce],re=r.get(Ue);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ie(t.TEXTURE_2D,Ue),ne(G.__webglFramebuffer,N,Ue,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(Ue)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ce=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Q.__webglTexture),ie(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)ne(G.__webglFramebuffer[ue],N,E,t.COLOR_ATTACHMENT0,ce,ue);else ne(G.__webglFramebuffer,N,E,t.COLOR_ATTACHMENT0,ce,0);m(E)&&d(ce),n.unbindTexture()}N.depthBuffer&&ke(N)}function k(N){const E=N.textures;for(let G=0,Q=E.length;G<Q;G++){const J=E[G];if(m(J)){const ee=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=r.get(J).__webglTexture;n.bindTexture(ee,we),d(ee),n.unbindTexture()}}}const Pe=[],He=[];function ot(N){if(N.samples>0){if($e(N)===!1){const E=N.textures,G=N.width,Q=N.height;let J=t.COLOR_BUFFER_BIT;const ee=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=r.get(N),ce=E.length>1;if(ce)for(let ue=0;ue<E.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[ue]);const Ue=r.get(E[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ue,0)}t.blitFramebuffer(0,0,G,Q,0,0,G,Q,J,t.NEAREST),c===!0&&(Pe.length=0,He.length=0,Pe.push(t.COLOR_ATTACHMENT0+ue),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Pe.push(ee),He.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,He)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Pe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ue=0;ue<E.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,we.__webglColorRenderbuffer[ue]);const Ue=r.get(E[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const E=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Te(N){return Math.min(i.maxSamples,N.samples)}function $e(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Oe(N){const E=a.render.frame;h.get(N)!==E&&(h.set(N,E),N.update())}function Le(N,E){const G=N.colorSpace,Q=N.format,J=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==Kr&&G!==Cr&&(Qe.getTransfer(G)===it?(Q!==Wn||J!==Wr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function vt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=R,this.setTexture2D=F,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=Ee,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=$e}function Ob(t,e){function n(r,i=Cr){let s;const a=Qe.getTransfer(i);if(r===Wr)return t.UNSIGNED_BYTE;if(r===Yx)return t.UNSIGNED_SHORT_4_4_4_4;if(r===qx)return t.UNSIGNED_SHORT_5_5_5_1;if(r===yS)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===vS)return t.BYTE;if(r===_S)return t.SHORT;if(r===fl)return t.UNSIGNED_SHORT;if(r===$x)return t.INT;if(r===Ts)return t.UNSIGNED_INT;if(r===Pr)return t.FLOAT;if(r===Ul)return t.HALF_FLOAT;if(r===SS)return t.ALPHA;if(r===MS)return t.RGB;if(r===Wn)return t.RGBA;if(r===ES)return t.LUMINANCE;if(r===wS)return t.LUMINANCE_ALPHA;if(r===ps)return t.DEPTH_COMPONENT;if(r===Cs)return t.DEPTH_STENCIL;if(r===bS)return t.RED;if(r===Kx)return t.RED_INTEGER;if(r===TS)return t.RG;if(r===Zx)return t.RG_INTEGER;if(r===Qx)return t.RGBA_INTEGER;if(r===gc||r===vc||r===_c||r===yc)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===gc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===gc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_c)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yh||r===Sh||r===Mh||r===Eh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===yh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Eh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wh||r===bh||r===Th)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===wh||r===bh)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Th)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ah||r===Ch||r===Nh||r===Rh||r===Ph||r===kh||r===Lh||r===Dh||r===Ih||r===Uh||r===Fh||r===Oh||r===zh||r===Bh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Ah)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ch)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ph)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ih)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Oh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sc||r===jh||r===Hh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Sc)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===AS||r===Vh||r===Gh||r===Wh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===Sc)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Vh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===As?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}class zb extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ea extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bb={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,r),d=this._getHandJoint(u,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),x=.02,_=.005;u.inputState.pinching&&f>x+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=x-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bb)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ea;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const jb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hb=`
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

}`;class Vb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const i=new Wt,s=e.properties.get(i);s.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Xr({vertexShader:jb,fragmentShader:Hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new cn(new Oa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Gb extends Ls{constructor(e,n){super();const r=this;let i=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,p=null,f=null,x=null,_=null;const y=new Vb,m=n.getContextAttributes();let d=null,v=null;const g=[],M=[],P=new Xe;let A=null;const T=new vn;T.layers.enable(1),T.viewport=new Nt;const C=new vn;C.layers.enable(2),C.viewport=new Nt;const w=[T,C],S=new zb;S.layers.enable(1),S.layers.enable(2);let R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=g[X];return ne===void 0&&(ne=new Yc,g[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=g[X];return ne===void 0&&(ne=new Yc,g[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=g[X];return ne===void 0&&(ne=new Yc,g[X]=ne),ne.getHandSpace()};function O(X){const ne=M.indexOf(X.inputSource);if(ne===-1)return;const de=g[ne];de!==void 0&&(de.update(X.inputSource,X.frame,u||a),de.dispatchEvent({type:X.type,data:X.inputSource}))}function F(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",z);for(let X=0;X<g.length;X++){const ne=M[X];ne!==null&&(M[X]=null,g[X].disconnect(ne))}R=null,W=null,y.reset(),e.setRenderTarget(d),x=null,f=null,p=null,i=null,v=null,Be.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return f!==null?f:x},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",F),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(i,n,ne),i.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),v=new Ti(x.framebufferWidth,x.framebufferHeight,{format:Wn,type:Wr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,de=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Cs:ps,de=m.stencil?As:Ts);const ke={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};p=new XRWebGLBinding(i,n),f=p.createProjectionLayer(ke),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ti(f.textureWidth,f.textureHeight,{format:Wn,type:Wr,depthTexture:new pg(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await i.requestReferenceSpace(o),Be.setContext(i),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function z(X){for(let ne=0;ne<X.removed.length;ne++){const de=X.removed[ne],oe=M.indexOf(de);oe>=0&&(M[oe]=null,g[oe].disconnect(de))}for(let ne=0;ne<X.added.length;ne++){const de=X.added[ne];let oe=M.indexOf(de);if(oe===-1){for(let Ee=0;Ee<g.length;Ee++)if(Ee>=M.length){M.push(de),oe=Ee;break}else if(M[Ee]===null){M[Ee]=de,oe=Ee;break}if(oe===-1)break}const ke=g[oe];ke&&ke.connect(de)}}const H=new V,Y=new V;function D(X,ne,de){H.setFromMatrixPosition(ne.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);const oe=H.distanceTo(Y),ke=ne.projectionMatrix.elements,Ee=de.projectionMatrix.elements,Se=ke[14]/(ke[10]-1),k=ke[14]/(ke[10]+1),Pe=(ke[9]+1)/ke[5],He=(ke[9]-1)/ke[5],ot=(ke[8]-1)/ke[0],Te=(Ee[8]+1)/Ee[0],$e=Se*ot,Oe=Se*Te,Le=oe/(-ot+Te),vt=Le*-ot;ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(vt),X.translateZ(Le),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const N=Se+Le,E=k+Le,G=$e-vt,Q=Oe+(oe-vt),J=Pe*k/E*N,ee=He*k/E*N;X.projectionMatrix.makePerspective(G,Q,J,ee,N,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function q(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;y.texture!==null&&(X.near=y.depthNear,X.far=y.depthFar),S.near=C.near=T.near=X.near,S.far=C.far=T.far=X.far,(R!==S.near||W!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,W=S.far,T.near=R,T.far=W,C.near=R,C.far=W,T.updateProjectionMatrix(),C.updateProjectionMatrix(),X.updateProjectionMatrix());const ne=X.parent,de=S.cameras;q(S,ne);for(let oe=0;oe<de.length;oe++)q(de[oe],ne);de.length===2?D(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),Z(X,S,ne)};function Z(X,ne,de){de===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Zu*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&x===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let ie=null;function _e(X,ne){if(h=ne.getViewerPose(u||a),_=ne,h!==null){const de=h.views;x!==null&&(e.setRenderTargetFramebuffer(v,x.framebuffer),e.setRenderTarget(v));let oe=!1;de.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Ee=0;Ee<de.length;Ee++){const Se=de[Ee];let k=null;if(x!==null)k=x.getViewport(Se);else{const He=p.getViewSubImage(f,Se);k=He.viewport,Ee===0&&(e.setRenderTargetTextures(v,He.colorTexture,f.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(v))}let Pe=w[Ee];Pe===void 0&&(Pe=new vn,Pe.layers.enable(Ee),Pe.viewport=new Nt,w[Ee]=Pe),Pe.matrix.fromArray(Se.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Se.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(k.x,k.y,k.width,k.height),Ee===0&&(S.matrix.copy(Pe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(Pe)}const ke=i.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const Ee=p.getDepthInformation(de[0]);Ee&&Ee.isValid&&Ee.texture&&y.init(e,Ee,i.renderState)}}for(let de=0;de<g.length;de++){const oe=M[de],ke=g[de];oe!==null&&ke!==void 0&&ke.update(oe,ne,u||a)}ie&&ie(X,ne),ne.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Be=new fg;Be.setAnimationLoop(_e),this.setAnimationLoop=function(X){ie=X},this.dispose=function(){}}}const si=new qn,Wb=new gt;function Xb(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function r(m,d){d.color.getRGB(m.fogColor.value,cg(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,v,g,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),p(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&x(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,v,g):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===tn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===tn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),g=v.envMap,M=v.envMapRotation;g&&(m.envMap.value=g,si.copy(M),si.x*=-1,si.y*=-1,si.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(Wb.makeRotationFromEuler(si)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=g*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function x(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===tn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function $b(t,e,n,r){let i={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,g){const M=g.program;r.uniformBlockBinding(v,M)}function u(v,g){let M=i[v.id];M===void 0&&(_(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",m));const P=g.program;r.updateUBOMapping(v,P);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function h(v){const g=p();v.__bindingPointIndex=g;const M=t.createBuffer(),P=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function p(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const g=i[v.id],M=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,T=M.length;A<T;A++){const C=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,S=C.length;w<S;w++){const R=C[w];if(x(R,A,w,P)===!0){const W=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let z=0;z<O.length;z++){const H=O[z],Y=y(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,W+F,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,F),F+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function x(v,g,M,P){const A=v.value,T=g+"_"+M;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const C=P[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return P[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function _(v){const g=v.uniforms;let M=0;const P=16;for(let T=0,C=g.length;T<C;T++){const w=Array.isArray(g[T])?g[T]:[g[T]];for(let S=0,R=w.length;S<R;S++){const W=w[S],O=Array.isArray(W.value)?W.value:[W.value];for(let F=0,z=O.length;F<z;F++){const H=O[F],Y=y(H),D=M%P;D!==0&&P-D<Y.boundary&&(M+=P-D),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=Y.storage}}}const A=M%P;return A>0&&(M+=P-A),v.__size=M,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const M=a.indexOf(g.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(i[g.id]),delete i[g.id],delete s[g.id]}function d(){for(const v in i)t.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:c,update:u,dispose:d}}class Yb{constructor(e={}){const{canvas:n=zS(),context:r=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=r.getContextAttributes().alpha}else f=a;const x=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=jr,this.toneMappingExposure=1;const g=this;let M=!1,P=0,A=0,T=null,C=-1,w=null;const S=new Nt,R=new Nt;let W=null;const O=new qe(0);let F=0,z=n.width,H=n.height,Y=1,D=null,q=null;const Z=new Nt(0,0,z,H),ie=new Nt(0,0,z,H);let _e=!1;const Be=new Qd;let X=!1,ne=!1;const de=new gt,oe=new V,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function Se(){return T===null?Y:1}let k=r;function Pe(b,I){return n.getContext(b,I)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yd}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",$,!1),n.addEventListener("webglcontextcreationerror",K,!1),k===null){const I="webgl2";if(k=Pe(I,b),k===null)throw Pe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let He,ot,Te,$e,Oe,Le,vt,N,E,G,Q,J,ee,we,ce,ue,Ue,re,ye,je,Ne,fe,Fe,Ve;function pt(){He=new nw(k),He.init(),fe=new Ob(k,He),ot=new KE(k,He,e,fe),Te=new Ub(k),$e=new sw(k),Oe=new Mb,Le=new Fb(k,He,Te,Oe,ot,fe,$e),vt=new QE(g),N=new tw(g),E=new fM(k),Fe=new YE(k,E),G=new rw(k,E,$e,Fe),Q=new ow(k,G,E,$e),ye=new aw(k,ot,Le),ue=new ZE(Oe),J=new Sb(g,vt,N,He,ot,Fe,ue),ee=new Xb(g,Oe),we=new wb,ce=new Rb(He),re=new $E(g,vt,N,Te,Q,f,c),Ue=new Ib(g,Q,ot),Ve=new $b(k,$e,ot,Te),je=new qE(k,He,$e),Ne=new iw(k,He,$e),$e.programs=J.programs,g.capabilities=ot,g.extensions=He,g.properties=Oe,g.renderLists=we,g.shadowMap=Ue,g.state=Te,g.info=$e}pt();const L=new Gb(g,k);this.xr=L,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=He.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=He.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(z,H,!1))},this.getSize=function(b){return b.set(z,H)},this.setSize=function(b,I,B=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,H=I,n.width=Math.floor(b*Y),n.height=Math.floor(I*Y),B===!0&&(n.style.width=b+"px",n.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(z*Y,H*Y).floor()},this.setDrawingBufferSize=function(b,I,B){z=b,H=I,Y=B,n.width=Math.floor(b*B),n.height=Math.floor(I*B),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(Z)},this.setViewport=function(b,I,B,j){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,I,B,j),Te.viewport(S.copy(Z).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,I,B,j){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,I,B,j),Te.scissor(R.copy(ie).multiplyScalar(Y).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(b){Te.setScissorTest(_e=b)},this.setOpaqueSort=function(b){D=b},this.setTransparentSort=function(b){q=b},this.getClearColor=function(b){return b.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(b=!0,I=!0,B=!0){let j=0;if(b){let U=!1;if(T!==null){const se=T.texture.format;U=se===Qx||se===Zx||se===Kx}if(U){const se=T.texture.type,pe=se===Wr||se===Ts||se===fl||se===As||se===Yx||se===qx,xe=re.getClearColor(),ge=re.getClearAlpha(),Ae=xe.r,Ce=xe.g,be=xe.b;pe?(x[0]=Ae,x[1]=Ce,x[2]=be,x[3]=ge,k.clearBufferuiv(k.COLOR,0,x)):(_[0]=Ae,_[1]=Ce,_[2]=be,_[3]=ge,k.clearBufferiv(k.COLOR,0,_))}else j|=k.COLOR_BUFFER_BIT}I&&(j|=k.DEPTH_BUFFER_BIT),B&&(j|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",$,!1),n.removeEventListener("webglcontextcreationerror",K,!1),we.dispose(),ce.dispose(),Oe.dispose(),vt.dispose(),N.dispose(),Q.dispose(),Fe.dispose(),Ve.dispose(),J.dispose(),L.dispose(),L.removeEventListener("sessionstart",Un),L.removeEventListener("sessionend",Fn),Zr.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=$e.autoReset,I=Ue.enabled,B=Ue.autoUpdate,j=Ue.needsUpdate,U=Ue.type;pt(),$e.autoReset=b,Ue.enabled=I,Ue.autoUpdate=B,Ue.needsUpdate=j,Ue.type=U}function K(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ae(b){const I=b.target;I.removeEventListener("dispose",ae),Re(I)}function Re(b){Ye(b),Oe.remove(b)}function Ye(b){const I=Oe.get(b).programs;I!==void 0&&(I.forEach(function(B){J.releaseProgram(B)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,B,j,U,se){I===null&&(I=ke);const pe=U.isMesh&&U.matrixWorld.determinant()<0,xe=Sg(b,I,B,j,U);Te.setMaterial(j,pe);let ge=B.index,Ae=1;if(j.wireframe===!0){if(ge=G.getWireframeAttribute(B),ge===void 0)return;Ae=2}const Ce=B.drawRange,be=B.attributes.position;let Ke=Ce.start*Ae,dt=(Ce.start+Ce.count)*Ae;se!==null&&(Ke=Math.max(Ke,se.start*Ae),dt=Math.min(dt,(se.start+se.count)*Ae)),ge!==null?(Ke=Math.max(Ke,0),dt=Math.min(dt,ge.count)):be!=null&&(Ke=Math.max(Ke,0),dt=Math.min(dt,be.count));const ft=dt-Ke;if(ft<0||ft===1/0)return;Fe.setup(U,j,xe,B,ge);let nn,Ze=je;if(ge!==null&&(nn=E.get(ge),Ze=Ne,Ze.setIndex(nn)),U.isMesh)j.wireframe===!0?(Te.setLineWidth(j.wireframeLinewidth*Se()),Ze.setMode(k.LINES)):Ze.setMode(k.TRIANGLES);else if(U.isLine){let Me=j.linewidth;Me===void 0&&(Me=1),Te.setLineWidth(Me*Se()),U.isLineSegments?Ze.setMode(k.LINES):U.isLineLoop?Ze.setMode(k.LINE_LOOP):Ze.setMode(k.LINE_STRIP)}else U.isPoints?Ze.setMode(k.POINTS):U.isSprite&&Ze.setMode(k.TRIANGLES);if(U.isBatchedMesh)U._multiDrawInstances!==null?Ze.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances):Ze.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)Ze.renderInstances(Ke,ft,U.count);else if(B.isInstancedBufferGeometry){const Me=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,jt=Math.min(B.instanceCount,Me);Ze.renderInstances(Ke,ft,jt)}else Ze.render(Ke,ft)};function mt(b,I,B){b.transparent===!0&&b.side===Vn&&b.forceSinglePass===!1?(b.side=tn,b.needsUpdate=!0,Ba(b,I,B),b.side=Gr,b.needsUpdate=!0,Ba(b,I,B),b.side=Vn):Ba(b,I,B)}this.compile=function(b,I,B=null){B===null&&(B=b),m=ce.get(B),m.init(I),v.push(m),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),b!==B&&b.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const j=new Set;return b.traverse(function(U){const se=U.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const xe=se[pe];mt(xe,B,U),j.add(xe)}else mt(se,B,U),j.add(se)}),v.pop(),m=null,j},this.compileAsync=function(b,I,B=null){const j=this.compile(b,I,B);return new Promise(U=>{function se(){if(j.forEach(function(pe){Oe.get(pe).currentProgram.isReady()&&j.delete(pe)}),j.size===0){U(b);return}setTimeout(se,10)}He.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let bt=null;function et(b){bt&&bt(b)}function Un(){Zr.stop()}function Fn(){Zr.start()}const Zr=new fg;Zr.setAnimationLoop(et),typeof self<"u"&&Zr.setContext(self),this.setAnimationLoop=function(b){bt=b,L.setAnimationLoop(b),b===null?Zr.stop():Zr.start()},L.addEventListener("sessionstart",Un),L.addEventListener("sessionend",Fn),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(I),I=L.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,I,T),m=ce.get(b,v.length),m.init(I),v.push(m),de.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Be.setFromProjectionMatrix(de),ne=this.localClippingEnabled,X=ue.init(this.clippingPlanes,ne),y=we.get(b,d.length),y.init(),d.push(y),L.enabled===!0&&L.isPresenting===!0){const se=g.xr.getDepthSensingMesh();se!==null&&zl(se,I,-1/0,g.sortObjects)}zl(b,I,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(D,q),Ee=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,Ee&&re.addToRenderList(y,b),this.info.render.frame++,X===!0&&ue.beginShadows();const B=m.state.shadowsArray;Ue.render(B,b,I),X===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=y.opaque,U=y.transmissive;if(m.setupLights(),I.isArrayCamera){const se=I.cameras;if(U.length>0)for(let pe=0,xe=se.length;pe<xe;pe++){const ge=se[pe];tf(j,U,b,ge)}Ee&&re.render(b);for(let pe=0,xe=se.length;pe<xe;pe++){const ge=se[pe];ef(y,b,ge,ge.viewport)}}else U.length>0&&tf(j,U,b,I),Ee&&re.render(b),ef(y,b,I);T!==null&&(Le.updateMultisampleRenderTarget(T),Le.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(g,b,I),Fe.resetDefaultState(),C=-1,w=null,v.pop(),v.length>0?(m=v[v.length-1],X===!0&&ue.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function zl(b,I,B,j){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Be.intersectsSprite(b)){j&&oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);const pe=Q.update(b),xe=b.material;xe.visible&&y.push(b,pe,xe,B,oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Be.intersectsObject(b))){const pe=Q.update(b),xe=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),oe.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),oe.copy(pe.boundingSphere.center)),oe.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(xe)){const ge=pe.groups;for(let Ae=0,Ce=ge.length;Ae<Ce;Ae++){const be=ge[Ae],Ke=xe[be.materialIndex];Ke&&Ke.visible&&y.push(b,pe,Ke,B,oe.z,be)}}else xe.visible&&y.push(b,pe,xe,B,oe.z,null)}}const se=b.children;for(let pe=0,xe=se.length;pe<xe;pe++)zl(se[pe],I,B,j)}function ef(b,I,B,j){const U=b.opaque,se=b.transmissive,pe=b.transparent;m.setupLightsView(B),X===!0&&ue.setGlobalState(g.clippingPlanes,B),j&&Te.viewport(S.copy(j)),U.length>0&&za(U,I,B),se.length>0&&za(se,I,B),pe.length>0&&za(pe,I,B),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function tf(b,I,B,j){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Ti(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Ul:Wr,minFilter:xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=m.state.transmissionRenderTarget[j.id],pe=j.viewport||S;se.setSize(pe.z,pe.w);const xe=g.getRenderTarget();g.setRenderTarget(se),g.getClearColor(O),F=g.getClearAlpha(),F<1&&g.setClearColor(16777215,.5),Ee?re.render(B):g.clear();const ge=g.toneMapping;g.toneMapping=jr;const Ae=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),X===!0&&ue.setGlobalState(g.clippingPlanes,j),za(b,B,j),Le.updateMultisampleRenderTarget(se),Le.updateRenderTargetMipmap(se),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let be=0,Ke=I.length;be<Ke;be++){const dt=I[be],ft=dt.object,nn=dt.geometry,Ze=dt.material,Me=dt.group;if(Ze.side===Vn&&ft.layers.test(j.layers)){const jt=Ze.side;Ze.side=tn,Ze.needsUpdate=!0,nf(ft,B,j,nn,Ze,Me),Ze.side=jt,Ze.needsUpdate=!0,Ce=!0}}Ce===!0&&(Le.updateMultisampleRenderTarget(se),Le.updateRenderTargetMipmap(se))}g.setRenderTarget(xe),g.setClearColor(O,F),Ae!==void 0&&(j.viewport=Ae),g.toneMapping=ge}function za(b,I,B){const j=I.isScene===!0?I.overrideMaterial:null;for(let U=0,se=b.length;U<se;U++){const pe=b[U],xe=pe.object,ge=pe.geometry,Ae=j===null?pe.material:j,Ce=pe.group;xe.layers.test(B.layers)&&nf(xe,I,B,ge,Ae,Ce)}}function nf(b,I,B,j,U,se){b.onBeforeRender(g,I,B,j,U,se),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(g,I,B,j,b,se),U.transparent===!0&&U.side===Vn&&U.forceSinglePass===!1?(U.side=tn,U.needsUpdate=!0,g.renderBufferDirect(B,I,j,U,b,se),U.side=Gr,U.needsUpdate=!0,g.renderBufferDirect(B,I,j,U,b,se),U.side=Vn):g.renderBufferDirect(B,I,j,U,b,se),b.onAfterRender(g,I,B,j,U,se)}function Ba(b,I,B){I.isScene!==!0&&(I=ke);const j=Oe.get(b),U=m.state.lights,se=m.state.shadowsArray,pe=U.state.version,xe=J.getParameters(b,U.state,se,I,B),ge=J.getProgramCacheKey(xe);let Ae=j.programs;j.environment=b.isMeshStandardMaterial?I.environment:null,j.fog=I.fog,j.envMap=(b.isMeshStandardMaterial?N:vt).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Ae===void 0&&(b.addEventListener("dispose",ae),Ae=new Map,j.programs=Ae);let Ce=Ae.get(ge);if(Ce!==void 0){if(j.currentProgram===Ce&&j.lightsStateVersion===pe)return sf(b,xe),Ce}else xe.uniforms=J.getUniforms(b),b.onBuild(B,xe,g),b.onBeforeCompile(xe,g),Ce=J.acquireProgram(xe,ge),Ae.set(ge,Ce),j.uniforms=xe.uniforms;const be=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(be.clippingPlanes=ue.uniform),sf(b,xe),j.needsLights=Eg(b),j.lightsStateVersion=pe,j.needsLights&&(be.ambientLightColor.value=U.state.ambient,be.lightProbe.value=U.state.probe,be.directionalLights.value=U.state.directional,be.directionalLightShadows.value=U.state.directionalShadow,be.spotLights.value=U.state.spot,be.spotLightShadows.value=U.state.spotShadow,be.rectAreaLights.value=U.state.rectArea,be.ltc_1.value=U.state.rectAreaLTC1,be.ltc_2.value=U.state.rectAreaLTC2,be.pointLights.value=U.state.point,be.pointLightShadows.value=U.state.pointShadow,be.hemisphereLights.value=U.state.hemi,be.directionalShadowMap.value=U.state.directionalShadowMap,be.directionalShadowMatrix.value=U.state.directionalShadowMatrix,be.spotShadowMap.value=U.state.spotShadowMap,be.spotLightMatrix.value=U.state.spotLightMatrix,be.spotLightMap.value=U.state.spotLightMap,be.pointShadowMap.value=U.state.pointShadowMap,be.pointShadowMatrix.value=U.state.pointShadowMatrix),j.currentProgram=Ce,j.uniformsList=null,Ce}function rf(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=Bo.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function sf(b,I){const B=Oe.get(b);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Sg(b,I,B,j,U){I.isScene!==!0&&(I=ke),Le.resetTextureUnits();const se=I.fog,pe=j.isMeshStandardMaterial?I.environment:null,xe=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Kr,ge=(j.isMeshStandardMaterial?N:vt).get(j.envMap||pe),Ae=j.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ce=!!B.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),be=!!B.morphAttributes.position,Ke=!!B.morphAttributes.normal,dt=!!B.morphAttributes.color;let ft=jr;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ft=g.toneMapping);const nn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ze=nn!==void 0?nn.length:0,Me=Oe.get(j),jt=m.state.lights;if(X===!0&&(ne===!0||b!==w)){const pn=b===w&&j.id===C;ue.setState(j,b,pn)}let tt=!1;j.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==jt.state.version||Me.outputColorSpace!==xe||U.isBatchedMesh&&Me.batching===!1||!U.isBatchedMesh&&Me.batching===!0||U.isBatchedMesh&&Me.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Me.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Me.instancing===!1||!U.isInstancedMesh&&Me.instancing===!0||U.isSkinnedMesh&&Me.skinning===!1||!U.isSkinnedMesh&&Me.skinning===!0||U.isInstancedMesh&&Me.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Me.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Me.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Me.instancingMorph===!1&&U.morphTexture!==null||Me.envMap!==ge||j.fog===!0&&Me.fog!==se||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ue.numPlanes||Me.numIntersection!==ue.numIntersection)||Me.vertexAlphas!==Ae||Me.vertexTangents!==Ce||Me.morphTargets!==be||Me.morphNormals!==Ke||Me.morphColors!==dt||Me.toneMapping!==ft||Me.morphTargetsCount!==Ze)&&(tt=!0):(tt=!0,Me.__version=j.version);let Kn=Me.currentProgram;tt===!0&&(Kn=Ba(j,I,U));let ja=!1,Qr=!1,Bl=!1;const Tt=Kn.getUniforms(),mr=Me.uniforms;if(Te.useProgram(Kn.program)&&(ja=!0,Qr=!0,Bl=!0),j.id!==C&&(C=j.id,Qr=!0),ja||w!==b){Tt.setValue(k,"projectionMatrix",b.projectionMatrix),Tt.setValue(k,"viewMatrix",b.matrixWorldInverse);const pn=Tt.map.cameraPosition;pn!==void 0&&pn.setValue(k,oe.setFromMatrixPosition(b.matrixWorld)),ot.logarithmicDepthBuffer&&Tt.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Tt.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,Qr=!0,Bl=!0)}if(U.isSkinnedMesh){Tt.setOptional(k,U,"bindMatrix"),Tt.setOptional(k,U,"bindMatrixInverse");const pn=U.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Tt.setValue(k,"boneTexture",pn.boneTexture,Le))}U.isBatchedMesh&&(Tt.setOptional(k,U,"batchingTexture"),Tt.setValue(k,"batchingTexture",U._matricesTexture,Le),Tt.setOptional(k,U,"batchingColorTexture"),U._colorsTexture!==null&&Tt.setValue(k,"batchingColorTexture",U._colorsTexture,Le));const jl=B.morphAttributes;if((jl.position!==void 0||jl.normal!==void 0||jl.color!==void 0)&&ye.update(U,B,Kn),(Qr||Me.receiveShadow!==U.receiveShadow)&&(Me.receiveShadow=U.receiveShadow,Tt.setValue(k,"receiveShadow",U.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(mr.envMap.value=ge,mr.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&I.environment!==null&&(mr.envMapIntensity.value=I.environmentIntensity),Qr&&(Tt.setValue(k,"toneMappingExposure",g.toneMappingExposure),Me.needsLights&&Mg(mr,Bl),se&&j.fog===!0&&ee.refreshFogUniforms(mr,se),ee.refreshMaterialUniforms(mr,j,Y,H,m.state.transmissionRenderTarget[b.id]),Bo.upload(k,rf(Me),mr,Le)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Bo.upload(k,rf(Me),mr,Le),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Tt.setValue(k,"center",U.center),Tt.setValue(k,"modelViewMatrix",U.modelViewMatrix),Tt.setValue(k,"normalMatrix",U.normalMatrix),Tt.setValue(k,"modelMatrix",U.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const pn=j.uniformsGroups;for(let Hl=0,wg=pn.length;Hl<wg;Hl++){const af=pn[Hl];Ve.update(af,Kn),Ve.bind(af,Kn)}}return Kn}function Mg(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Eg(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,I,B){Oe.get(b.texture).__webglTexture=I,Oe.get(b.depthTexture).__webglTexture=B;const j=Oe.get(b);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=B===void 0,j.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,I){const B=Oe.get(b);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,B=0){T=b,P=I,A=B;let j=!0,U=null,se=!1,pe=!1;if(b){const ge=Oe.get(b);ge.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(k.FRAMEBUFFER,null),j=!1):ge.__webglFramebuffer===void 0?Le.setupRenderTarget(b):ge.__hasExternalTextures&&Le.rebindTextures(b,Oe.get(b.texture).__webglTexture,Oe.get(b.depthTexture).__webglTexture);const Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(pe=!0);const Ce=Oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?U=Ce[I][B]:U=Ce[I],se=!0):b.samples>0&&Le.useMultisampledRTT(b)===!1?U=Oe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ce)?U=Ce[B]:U=Ce,S.copy(b.viewport),R.copy(b.scissor),W=b.scissorTest}else S.copy(Z).multiplyScalar(Y).floor(),R.copy(ie).multiplyScalar(Y).floor(),W=_e;if(Te.bindFramebuffer(k.FRAMEBUFFER,U)&&j&&Te.drawBuffers(b,U),Te.viewport(S),Te.scissor(R),Te.setScissorTest(W),se){const ge=Oe.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+I,ge.__webglTexture,B)}else if(pe){const ge=Oe.get(b.texture),Ae=I||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ge.__webglTexture,B||0,Ae)}C=-1},this.readRenderTargetPixels=function(b,I,B,j,U,se,pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe){Te.bindFramebuffer(k.FRAMEBUFFER,xe);try{const ge=b.texture,Ae=ge.format,Ce=ge.type;if(!ot.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-j&&B>=0&&B<=b.height-U&&k.readPixels(I,B,j,U,fe.convert(Ae),fe.convert(Ce),se)}finally{const ge=T!==null?Oe.get(T).__webglFramebuffer:null;Te.bindFramebuffer(k.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(b,I,B,j,U,se,pe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe){Te.bindFramebuffer(k.FRAMEBUFFER,xe);try{const ge=b.texture,Ae=ge.format,Ce=ge.type;if(!ot.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=b.width-j&&B>=0&&B<=b.height-U){const be=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,be),k.bufferData(k.PIXEL_PACK_BUFFER,se.byteLength,k.STREAM_READ),k.readPixels(I,B,j,U,fe.convert(Ae),fe.convert(Ce),0),k.flush();const Ke=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);await BS(k,Ke,4);try{k.bindBuffer(k.PIXEL_PACK_BUFFER,be),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,se)}finally{k.deleteBuffer(be),k.deleteSync(Ke)}return se}}finally{const ge=T!==null?Oe.get(T).__webglFramebuffer:null;Te.bindFramebuffer(k.FRAMEBUFFER,ge)}}},this.copyFramebufferToTexture=function(b,I=null,B=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,b=arguments[1]);const j=Math.pow(2,-B),U=Math.floor(b.image.width*j),se=Math.floor(b.image.height*j),pe=I!==null?I.x:0,xe=I!==null?I.y:0;Le.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,B,0,0,pe,xe,U,se),Te.unbindTexture()},this.copyTextureToTexture=function(b,I,B=null,j=null,U=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,b=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let se,pe,xe,ge,Ae,Ce;B!==null?(se=B.max.x-B.min.x,pe=B.max.y-B.min.y,xe=B.min.x,ge=B.min.y):(se=b.image.width,pe=b.image.height,xe=0,ge=0),j!==null?(Ae=j.x,Ce=j.y):(Ae=0,Ce=0);const be=fe.convert(I.format),Ke=fe.convert(I.type);Le.setTexture2D(I,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,I.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,I.unpackAlignment);const dt=k.getParameter(k.UNPACK_ROW_LENGTH),ft=k.getParameter(k.UNPACK_IMAGE_HEIGHT),nn=k.getParameter(k.UNPACK_SKIP_PIXELS),Ze=k.getParameter(k.UNPACK_SKIP_ROWS),Me=k.getParameter(k.UNPACK_SKIP_IMAGES),jt=b.isCompressedTexture?b.mipmaps[U]:b.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,jt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,jt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,xe),k.pixelStorei(k.UNPACK_SKIP_ROWS,ge),b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,U,Ae,Ce,se,pe,be,Ke,jt.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,U,Ae,Ce,jt.width,jt.height,be,jt.data):k.texSubImage2D(k.TEXTURE_2D,U,Ae,Ce,be,Ke,jt),k.pixelStorei(k.UNPACK_ROW_LENGTH,dt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft),k.pixelStorei(k.UNPACK_SKIP_PIXELS,nn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ze),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Me),U===0&&I.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(b,I,B=null,j=null,U=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,j=arguments[1]||null,b=arguments[2],I=arguments[3],U=arguments[4]||0);let se,pe,xe,ge,Ae,Ce,be,Ke,dt;const ft=b.isCompressedTexture?b.mipmaps[U]:b.image;B!==null?(se=B.max.x-B.min.x,pe=B.max.y-B.min.y,xe=B.max.z-B.min.z,ge=B.min.x,Ae=B.min.y,Ce=B.min.z):(se=ft.width,pe=ft.height,xe=ft.depth,ge=0,Ae=0,Ce=0),j!==null?(be=j.x,Ke=j.y,dt=j.z):(be=0,Ke=0,dt=0);const nn=fe.convert(I.format),Ze=fe.convert(I.type);let Me;if(I.isData3DTexture)Le.setTexture3D(I,0),Me=k.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Le.setTexture2DArray(I,0),Me=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,I.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,I.unpackAlignment);const jt=k.getParameter(k.UNPACK_ROW_LENGTH),tt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Kn=k.getParameter(k.UNPACK_SKIP_PIXELS),ja=k.getParameter(k.UNPACK_SKIP_ROWS),Qr=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ft.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ge),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ae),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ce),b.isDataTexture||b.isData3DTexture?k.texSubImage3D(Me,U,be,Ke,dt,se,pe,xe,nn,Ze,ft.data):I.isCompressedArrayTexture?k.compressedTexSubImage3D(Me,U,be,Ke,dt,se,pe,xe,nn,ft.data):k.texSubImage3D(Me,U,be,Ke,dt,se,pe,xe,nn,Ze,ft),k.pixelStorei(k.UNPACK_ROW_LENGTH,jt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,tt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Kn),k.pixelStorei(k.UNPACK_SKIP_ROWS,ja),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qr),U===0&&I.generateMipmaps&&k.generateMipmap(Me),Te.unbindTexture()},this.initRenderTarget=function(b){Oe.get(b).__webglFramebuffer===void 0&&Le.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Le.setTextureCube(b,0):b.isData3DTexture?Le.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Le.setTexture2DArray(b,0):Le.setTexture2D(b,0),Te.unbindTexture()},this.resetState=function(){P=0,A=0,T=null,Te.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===qd?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Fl?"display-p3":"srgb"}}class qb extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Kb extends Wt{constructor(e,n,r,i,s,a,o,c,u){super(e,n,r,i,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Er extends Fa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jx,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yg extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const qc=new gt,Up=new V,Fp=new V;class Zb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Up.setFromMatrixPosition(e.matrixWorld),n.position.copy(Up),Fp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Fp),n.updateMatrixWorld(),qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qb extends Zb{constructor(){super(new hg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Op extends yg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Qb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jb extends yg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class eT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=zp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function zp(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yd);const tT=({statusText:t="SPECIMEN MET-98421 • VERIFIED ASSAYS",onInspect:e,className:n=""})=>{const r=ve.useRef(null),[i,s]=ve.useState(!0),[a,o]=ve.useState(!1);return ve.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){s(!1);return}try{const Ee=document.createElement("canvas");if(!(Ee.getContext("webgl")||Ee.getContext("experimental-webgl"))){s(!1);return}}catch{s(!1);return}const u=r.current;if(!u)return;const h=u.clientWidth||460,p=u.clientHeight||420,f=new qb,x=new vn(40,h/p,.1,100);x.position.set(0,0,9.2);const _=new Yb({antialias:!0,alpha:!0,powerPreference:"high-performance"});_.setSize(h,p),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.shadowMap.enabled=!0,_.shadowMap.type=Gx,u.appendChild(_.domElement);const y=new Jb(16776181,1.8);f.add(y);const m=new Op(16774634,2.4);m.position.set(5,9,7),m.castShadow=!0,m.shadow.mapSize.width=1024,m.shadow.mapSize.height=1024,m.shadow.bias=-5e-4,f.add(m);const d=new Op(2976335,1.8);d.position.set(-7,-3,5),f.add(d);const v=document.createElement("canvas");v.width=1024,v.height=1440;const g=v.getContext("2d");g&&(g.fillStyle="#FCFAF7",g.fillRect(0,0,1024,1440),g.fillStyle="#163E2D",g.fillRect(50,50,924,95),g.fillStyle="#FFFFFF",g.font="bold 32px Newsreader, Georgia, serif",g.fillText("METROPOLIS PATHOLOGY & MOLECULAR DIAGNOSTICS",80,108),g.font="500 18px JetBrains Mono, monospace",g.fillText("REQUISITION ID: MET-98421  //  ACCREDITED ISO-15189",80,134),g.fillStyle="#F5F2EB",g.fillRect(50,165,924,90),g.fillStyle="#161B20",g.font="bold 22px Plus Jakarta Sans, sans-serif",g.fillText("PATIENT: John Doe (46 Y / M)",80,205),g.font="500 18px Plus Jakarta Sans, sans-serif",g.fillStyle="#485663",g.fillText("PANEL: Fasting Metabolic & Comprehensive Hematology",80,235),g.fillStyle="#1B4533",g.font="bold 16px JetBrains Mono, monospace",g.fillText("SPECIMEN COLLECTED: 2026-10-25 08:30 IST",540,220),g.strokeStyle="#DDD5C7",g.lineWidth=2,g.beginPath(),g.moveTo(50,275),g.lineTo(974,275),g.stroke(),[["Hemoglobin (Hb)","10.8 g/dL","13.0 - 17.5","POTENTIALLY LOW"],["White Blood Cell Count","6,500 /mcL","4000 - 11000","NORMAL"],["Platelet Count","240,000 /mcL","150000 - 450000","NORMAL"],["Fasting Blood Glucose","132.0 mg/dL","70.0 - 99.0","POTENTIALLY HIGH"],["Total Cholesterol","224.0 mg/dL","125.0 - 200.0","POTENTIALLY HIGH"],["Serum Creatinine","0.90 mg/dL","0.60 - 1.30","NORMAL"],["Blood Urea Nitrogen","28.0 mg/dL","7.0 - 20.0","POTENTIALLY HIGH"],["Thyroid Stimulating Hormone","2.10 uIU/mL","0.40 - 4.50","NORMAL"]].forEach((Se,k)=>{const Pe=330+k*85;g.fillStyle=k%2===0?"#FAF8F5":"#FCFAF7",g.fillRect(50,Pe-35,924,76),g.fillStyle="#161B20",g.font="600 22px Plus Jakarta Sans, sans-serif",g.fillText(Se[0],80,Pe+8),g.font="bold 24px JetBrains Mono, monospace",g.fillStyle="#161B20",g.fillText(Se[1],460,Pe+8),g.fillStyle="#647482",g.font="500 18px JetBrains Mono, monospace",g.fillText("Ref: "+Se[2],640,Pe+8),Se[3].includes("HIGH")?(g.fillStyle="#9C2527",g.font="bold 16px Plus Jakarta Sans, sans-serif",g.fillText("▲ "+Se[3],820,Pe+8)):Se[3].includes("LOW")?(g.fillStyle="#916117",g.font="bold 16px Plus Jakarta Sans, sans-serif",g.fillText("▼ "+Se[3],820,Pe+8)):(g.fillStyle="#1E6B4B",g.font="bold 16px Plus Jakarta Sans, sans-serif",g.fillText("✓ "+Se[3],820,Pe+8))}),g.fillStyle="#F5F2EB",g.fillRect(50,1340,924,50),g.fillStyle="#163E2D",g.font="bold 15px JetBrains Mono, monospace",g.fillText("ORCA CLINICAL ENCLAVE // DETERMINISTIC PARSER // 100% LOCAL RAM SOVEREIGNTY",80,1372));const M=new Kb(v);M.minFilter=_n;const P=new ea;f.add(P);const A=4.3,T=6,C=.05,w=new Ds(A,T,C),S=new Er({color:14538183,roughness:.9}),R=new cn(w,S);R.position.set(-.2,-.22,-.16),R.rotation.z=-.06,R.castShadow=!0,R.receiveShadow=!0,P.add(R);const W=new Er({color:15591391,roughness:.85}),O=new cn(w,W);O.position.set(-.1,-.11,-.08),O.rotation.z=-.03,O.castShadow=!0,O.receiveShadow=!0,P.add(O);const F=[new Er({color:16118507,roughness:.8}),new Er({color:16118507,roughness:.8}),new Er({color:16118507,roughness:.8}),new Er({color:16118507,roughness:.8}),new Er({map:M,roughness:.6,metalness:.04}),new Er({color:16118507,roughness:.85})],z=new cn(w,F);z.castShadow=!0,z.receiveShadow=!0,P.add(z);const H=new Oa(A*1.04,.09),Y=new Zd({color:3706473,transparent:!0,opacity:.85,side:Vn}),D=new cn(H,Y);D.position.set(0,0,.04),P.add(D),P.rotation.x=.14,P.rotation.y=-.18;let q=.14,Z=-.18,ie=.14,_e=-.18;const Be=Ee=>{const Se=u.getBoundingClientRect(),k=(Ee.clientX-Se.left)/Se.width-.5,Pe=(Ee.clientY-Se.top)/Se.height-.5;Z=-.18+k*.4,q=.14-Pe*.4},X=()=>{q=.14,Z=-.18};u.addEventListener("mousemove",Be),u.addEventListener("mouseleave",X);let ne;const de=new eT,oe=()=>{ne=requestAnimationFrame(oe);const Ee=de.getElapsedTime();ie+=(q-ie)*.06,_e+=(Z-_e)*.06,P.rotation.x=ie,P.rotation.y=_e;const Se=2.8,k=Ee%Se/Se;D.position.y=2.7-k*5.4,D.material.opacity=.25+Math.sin(k*Math.PI)*.65,P.position.y=Math.sin(Ee*1.2)*.07,_.render(f,x)};oe();const ke=()=>{if(!u)return;const Ee=u.clientWidth,Se=u.clientHeight;x.aspect=Ee/Se,x.updateProjectionMatrix(),_.setSize(Ee,Se)};return window.addEventListener("resize",ke),()=>{window.removeEventListener("resize",ke),u.removeEventListener("mousemove",Be),u.removeEventListener("mouseleave",X),cancelAnimationFrame(ne),u.contains(_.domElement)&&u.removeChild(_.domElement),_.dispose(),M.dispose()}},[i]),i?l.jsx("div",{ref:r,onClick:e,className:`relative w-full h-[400px] md:h-[460px] cursor-pointer select-none ${n}`,title:"Interactive 3D Document Stack — Move cursor to inspect specimen report",children:l.jsxs("div",{className:"absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none z-10",children:[l.jsxs("span",{className:"text-[11px] font-mono font-semibold tracking-wider bg-ivory-50/90 dark:bg-charcoal-900/90 backdrop-blur px-3 py-1 rounded-full border border-ivory-200 dark:border-charcoal-800 text-forest-850 dark:text-forest-300 shadow-sm flex items-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-forest-600 animate-pulse"}),t]}),l.jsx("span",{className:"text-[10px] font-mono text-charcoal-500 dark:text-charcoal-400 bg-ivory-50/80 dark:bg-charcoal-900/80 px-2.5 py-0.5 rounded border border-ivory-200 dark:border-charcoal-800",children:"POINTER TILT ACTIVE"})]})}):l.jsx("div",{className:`relative flex items-center justify-center p-6 ${n}`,children:l.jsxs("div",{className:"w-80 rounded-xl bg-ivory-50 dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800 shadow-paper-elevated p-5",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-ivory-200 dark:border-charcoal-800",children:[l.jsx("span",{className:"font-serif font-bold text-xs text-forest-800 dark:text-forest-400",children:"METROPOLIS PATHOLOGY"}),l.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-forest-50 dark:bg-forest-950 text-forest-800 dark:text-forest-300 border border-forest-200",children:"MET-98421"})]}),l.jsxs("div",{className:"py-3 space-y-2 text-xs",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-charcoal-600 dark:text-charcoal-400",children:"Hemoglobin (Hb)"}),l.jsx("span",{className:"font-mono font-bold text-clinical-low",children:"10.8 g/dL (Low)"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-charcoal-600 dark:text-charcoal-400",children:"Fasting Glucose"}),l.jsx("span",{className:"font-mono font-bold text-clinical-high",children:"132.0 mg/dL (High)"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-charcoal-600 dark:text-charcoal-400",children:"Platelet Count"}),l.jsx("span",{className:"font-mono font-bold text-clinical-norm",children:"240,000 /mcL (Normal)"})]})]}),l.jsx("div",{className:"text-[10px] font-mono text-charcoal-400 uppercase tracking-wider text-center pt-2 border-t border-ivory-200 dark:border-charcoal-800",children:t})]})})},nT=()=>l.jsx("footer",{className:"w-full bg-ivory-200/60 dark:bg-charcoal-950 border-t border-ivory-300 dark:border-charcoal-800 transition-colors py-14",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 mb-12",children:[l.jsxs("div",{className:"md:col-span-1 space-y-4",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-8 h-8 rounded-lg bg-forest-800 flex items-center justify-center text-ivory-50 shadow-paper-ivory",children:l.jsx(cr,{className:"w-4 h-4"})}),l.jsx("span",{className:"font-serif font-bold text-lg tracking-tight text-charcoal-900 dark:text-ivory-50",children:"Orca MedScan"})]}),l.jsx("p",{className:"text-xs text-charcoal-600 dark:text-ivory-400 leading-relaxed font-sans",children:"Autonomous clinical laboratory screening enclave for Orcathon 2026 Healthcare & MedTech track. Deterministic biomarker extraction with 100% on-premise cryptographic privacy."}),l.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-forest-800 dark:text-forest-400 font-mono font-medium",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-clinical-normal"}),"Enclave Security: Active"]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 dark:text-ivory-100 mb-3",children:"Extraction Architecture"}),l.jsxs("ul",{className:"space-y-2 text-xs text-charcoal-600 dark:text-ivory-400",children:[l.jsxs("li",{className:"flex items-center gap-1.5",children:[l.jsx(on,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," Digital PDF Vector Stream"]}),l.jsxs("li",{className:"flex items-center gap-1.5",children:[l.jsx(on,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," Scanned PDF with OCR Fallback"]}),l.jsxs("li",{className:"flex items-center gap-1.5",children:[l.jsx(on,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," Multi-Format Vision (PNG, JPG, WEBP, TIFF)"]}),l.jsxs("li",{className:"flex items-center gap-1.5",children:[l.jsx(on,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," OCR Typo Auto-Repair Pipeline"]}),l.jsxs("li",{className:"flex items-center gap-1.5",children:[l.jsx(on,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," 50+ Clinical Alias Resolution"]})]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 dark:text-ivory-100 mb-3",children:"Enclave Protocol"}),l.jsxs("ul",{className:"space-y-2 text-xs text-charcoal-600 dark:text-ivory-400",children:[l.jsxs("li",{className:"flex items-center gap-1.5",children:[l.jsx(kn,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," PBKDF2-HMAC-SHA256 Vault"]}),l.jsxs("li",{className:"flex items-center gap-1.5",children:[l.jsx(kn,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," 100,000 Key Derivation Rounds"]}),l.jsxs("li",{className:"flex items-center gap-1.5",children:[l.jsx(kn,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," Zero Third-Party Cloud Transmissions"]}),l.jsxs("li",{className:"flex items-center gap-1.5",children:[l.jsx(kn,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," RAM-Only Ephemeral Processing"]}),l.jsxs("li",{className:"flex items-center gap-1.5",children:[l.jsx(kn,{className:"w-3.5 h-3.5 text-forest-700 dark:text-forest-400"})," Signed Clinical PDF Generation"]})]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 dark:text-ivory-100 mb-3",children:"Regulatory Notice"}),l.jsx("p",{className:"text-xs text-charcoal-500 dark:text-ivory-400 leading-relaxed font-sans",children:"Orca MedScan is a clinical screening and educational prototype. It does not provide medical diagnoses, triaging, or clinical prescriptions. Always review results with licensed medical practitioners."}),l.jsx("div",{className:"mt-3 pt-3 border-t border-ivory-300 dark:border-charcoal-800 text-[11px] font-mono text-charcoal-400 dark:text-charcoal-400",children:"Orcathon 2026 // MedTech Track"})]})]}),l.jsxs("div",{className:"pt-8 border-t border-ivory-300 dark:border-charcoal-800 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 dark:text-ivory-400 gap-4 font-mono",children:[l.jsx("p",{children:"© 2026 Orca MedScan. Built with Antigravity & Gemini for Orcathon 2026."}),l.jsxs("div",{className:"flex items-center gap-6",children:[l.jsx("span",{children:"Deterministic Parsing"}),l.jsx("span",{children:"•"}),l.jsx("span",{children:"Local Enclave Vault"}),l.jsx("span",{children:"•"}),l.jsx("span",{children:"Open Source Screening"})]})]})]})}),rT=({onOpenAuth:t,onLaunchBenchmark:e,onExploreWorkflow:n})=>{const[r,i]=ve.useState(0),[s,a]=ve.useState(null),o=[{num:"01",title:"Multi-Format Specimen Ingestion",subtitle:"Vector digital extraction or high-resolution optical scan",body:"Medical documents arrive as digital PDFs, scanned printouts, or mobile photos. Orca MedScan detects the document container and routes directly to pdfplumber vector text extraction or triggers page-by-page OCR rendering at 200 DPI.",meta:"Supported: PDF (digital/scanned), PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC"},{num:"02",title:"Optical Character Recognition & Auto-Repair",subtitle:"Contextual character repair and punctuation detachment",body:"Raw OCR frequently merges attached units (13.5g/dL), confuses numeric digits (IO5 → 105), or introduces acronym typos (Tolal, LOL, Hate). Orca MedScan pre-sanitizes strings contextually before tokenization.",meta:"OCR Engine: Tesseract v5.5 + Pillow computer vision filters"},{num:"03",title:"Deterministic Biomarker Alias Resolution",subtitle:"Over 50 clinical abbreviations mapped to standardized registry",body:"Hospital reports use shorthand: Hb, TLC, PLT, FBS, FPG, TC, TG, BUN, SGPT, ALT, AST, TSH. Orca MedScan uses regex pattern matrices to resolve synonyms while isolating non-medical noise.",meta:"Centralized registry: Hematology, Metabolic, Lipid, Renal, Hepatic, Thyroid"},{num:"04",title:"Dynamic Reference Interval Prioritization",subtitle:"Calibrated laboratory ranges applied first; documented adult fallback",body:"Reagents and analyzer calibrations vary between clinical pathology laboratories. Orca MedScan first detects and honors intervals printed directly on the patient report, falling back safely to standard adult clinical norms when omitted.",meta:"Non-speculative classification: Normal, Potentially High, Potentially Low, Review Needed"}],c=[{q:"Does Orca MedScan upload patient reports to remote third-party AI APIs?",a:"No. Orca MedScan operates on an isolated local privacy enclave model. Document parsing, optical character recognition (OCR), regex tokenization, and reference-range evaluations execute 100% locally in host RAM. Zero patient health data or scanned blood panels leave your machine."},{q:"How does Orca MedScan determine whether a result is out of range?",a:"The engine first checks the laboratory report itself for printed reference intervals, honoring the calibrating laboratory’s assay standards. When intervals are not printed, documented adult clinical standards are applied as a secondary fallback and transparently labeled in the audit report."},{q:"Which image and document formats are verified to work?",a:"Digital PDFs, Scanned PDFs (with automated OCR fallback), PNG, JPG, JPEG, WEBP (with OCR typo auto-repair), BMP, TIFF, and HEIC/HEIF (via pillow-heif)."},{q:"Can Orca MedScan be used to make autonomous medical diagnoses?",a:"No. Orca MedScan is a clinical decision-support and screening prototype developed for Orcathon 2026. It strictly categorizes indicators into Normal, Potentially High, Potentially Low, or Review Needed. It never provides speculative medical diagnoses or prescriptions."}];return l.jsxs("div",{className:"w-full flex flex-col min-h-screen bg-ivory-50 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-50 transition-colors duration-200",children:[l.jsx("section",{className:"relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-ivory-200 dark:border-charcoal-800 paper-texture overflow-hidden",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-ivory-200 dark:border-charcoal-800 text-[11px] font-mono text-charcoal-500 dark:text-charcoal-400",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-forest-700 animate-pulse"}),l.jsx("span",{className:"font-bold uppercase tracking-wider text-forest-850 dark:text-forest-400",children:"ORCATHON 2026 • HEALTHCARE & MEDTECH TRACK"})]}),l.jsxs("div",{className:"flex items-center gap-6",children:[l.jsx("span",{children:"ZERO-CLOUD LOCAL ENCLAVE"}),l.jsx("span",{className:"hidden sm:inline",children:"NIST PBKDF2 VAULT"}),l.jsx("span",{children:"16 / 16 VERIFICATIONS PASSED"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center",children:[l.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[l.jsx("h1",{className:"editorial-title text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-charcoal-950 dark:text-ivory-50 leading-[1.08]",children:"High-precision laboratory intelligence for complex clinical documents."}),l.jsx("p",{className:"text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300 leading-relaxed font-normal max-w-2xl",children:"A local, privacy-preserving clinical decision-support engine. Ingests digital and scanned medical reports, rectifies optical character degradation, and cross-references patient biomarkers against assay-calibrated laboratory reference intervals."}),l.jsxs("div",{className:"flex flex-wrap items-center gap-3.5 pt-2",children:[l.jsxs("button",{onClick:()=>t("signup"),className:"inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-forest-850 hover:bg-forest-800 text-white font-bold text-xs uppercase tracking-wider shadow-paper-elevated transition-all hover:translate-y-[-1px]",children:["Launch Clinical Workspace",l.jsx(bi,{className:"w-4 h-4 text-forest-200"})]}),l.jsxs("button",{onClick:e,className:"inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-ivory-100 dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-700 hover:border-forest-600 text-charcoal-800 dark:text-ivory-100 font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:bg-white dark:hover:bg-charcoal-850",children:[l.jsx(Dl,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),"⚡ Evaluator 1-Click Benchmark"]})]}),l.jsxs("div",{className:"pt-6 grid grid-cols-3 gap-4 border-t border-ivory-200 dark:border-charcoal-800 text-xs",children:[l.jsxs("div",{children:[l.jsx("span",{className:"block font-serif font-bold text-lg text-charcoal-900 dark:text-ivory-50",children:"100% Local"}),l.jsx("span",{className:"text-[11px] text-charcoal-500 dark:text-charcoal-400 font-mono",children:"RAM Enclave Privacy"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"block font-serif font-bold text-lg text-charcoal-900 dark:text-ivory-50",children:"50+ Aliases"}),l.jsx("span",{className:"text-[11px] text-charcoal-500 dark:text-charcoal-400 font-mono",children:"Clinical Lab Synonyms"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"block font-serif font-bold text-lg text-charcoal-900 dark:text-ivory-50",children:"8 Formats"}),l.jsx("span",{className:"text-[11px] text-charcoal-500 dark:text-charcoal-400 font-mono",children:"PDF, OCR, HEIC"})]})]})]}),l.jsx("div",{className:"lg:col-span-5 relative",children:l.jsxs("div",{className:"relative rounded-2xl bg-ivory-100 dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800 p-4 sm:p-6 shadow-paper-elevated",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 px-1 border-b border-ivory-200 dark:border-charcoal-800 text-xs font-mono text-charcoal-500",children:[l.jsxs("span",{className:"flex items-center gap-1.5 font-bold text-forest-800 dark:text-forest-400",children:[l.jsx(Ty,{className:"w-3.5 h-3.5"}),"CLINICAL SPECIMEN INSPECTOR"]}),l.jsx("span",{children:"POINTER PARALLAX"})]}),l.jsx(tT,{statusText:"SPECIMEN MET-98421 • VERIFIED ASSAYS",onInspect:e}),l.jsxs("div",{className:"pt-3 px-1 flex items-center justify-between text-xs text-charcoal-500 dark:text-charcoal-400 border-t border-ivory-200 dark:border-charcoal-800",children:[l.jsx("span",{className:"font-mono text-[11px]",children:"Metropolis Diagnostic Laboratory"}),l.jsxs("button",{onClick:e,className:"text-forest-800 dark:text-forest-400 font-bold hover:underline flex items-center gap-1 text-xs",children:["Test In Workspace ",l.jsx(bi,{className:"w-3 h-3"})]})]})]})})]})]})}),l.jsx("section",{id:"simulator-section",className:"scroll-mt-16 py-20 bg-white dark:bg-charcoal-900 border-b border-ivory-200 dark:border-charcoal-800 transition-colors",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"max-w-3xl mb-12",children:[l.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Interactive Clinical Simulation"}),l.jsx("h2",{className:"editorial-title text-3xl sm:text-4xl font-bold text-charcoal-950 dark:text-ivory-50 mt-2",children:"From degraded optical scan to calibrated clinical intelligence."}),l.jsx("p",{className:"text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 mt-3 leading-relaxed",children:"Step through the actual algorithmic transformation executed on specimen MET-98421. Watch how optical errors are rectified and indicators are cross-referenced with laboratory intervals."})]}),l.jsxs("div",{className:"rounded-2xl border border-ivory-200 dark:border-charcoal-800 bg-ivory-50 dark:bg-charcoal-950 shadow-paper-elevated overflow-hidden",children:[l.jsxs("div",{className:"h-12 px-6 bg-ivory-100 dark:bg-charcoal-900 border-b border-ivory-200 dark:border-charcoal-800 flex items-center justify-between text-xs font-mono",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"w-3 h-3 rounded-full bg-forest-700"}),l.jsx("span",{className:"font-bold text-charcoal-800 dark:text-ivory-100",children:"ORCA WORKSTATION // SPECIMEN AUDIT MET-98421"})]}),l.jsx("div",{className:"flex items-center gap-2",children:l.jsx("button",{onClick:e,className:"px-3 py-1 rounded bg-forest-850 hover:bg-forest-800 text-white text-[11px] font-bold font-mono transition-colors",children:"Open in Workspace"})})]}),l.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 border-b border-ivory-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 text-xs font-mono",children:o.map((u,h)=>l.jsxs("button",{onClick:()=>i(h),className:`p-4 text-left border-r last:border-r-0 border-ivory-200 dark:border-charcoal-800 transition-colors ${r===h?"bg-forest-50 dark:bg-forest-950 text-forest-900 dark:text-forest-200 font-bold border-b-2 border-forest-700":"text-charcoal-600 dark:text-charcoal-400 hover:bg-ivory-50 dark:hover:bg-charcoal-850"}`,children:[l.jsxs("span",{className:"block text-[10px] text-forest-600 dark:text-forest-400 font-bold",children:[u.num," / STAGE"]}),l.jsx("span",{className:"font-sans font-bold text-xs truncate block mt-0.5",children:u.title})]},u.num))}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 p-6 sm:p-8 gap-8",children:[l.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[l.jsx("span",{className:"text-xs font-mono font-bold uppercase text-forest-700 dark:text-forest-400",children:o[r].subtitle}),l.jsx("h3",{className:"editorial-title text-2xl font-bold text-charcoal-950 dark:text-ivory-50",children:o[r].title}),l.jsx("p",{className:"text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed",children:o[r].body}),l.jsxs("div",{className:"p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800 font-mono text-xs space-y-2",children:[l.jsx("div",{className:"text-[10px] uppercase font-bold text-charcoal-400",children:"Contextual Auto-Repair Demonstration:"}),l.jsxs("div",{className:"flex justify-between items-center text-rose-600 dark:text-rose-400 line-through",children:[l.jsx("span",{children:"Raw OCR Error:"}),l.jsx("span",{children:'"FPG: IO5 mg/dL"'})]}),l.jsxs("div",{className:"flex justify-between items-center text-forest-700 dark:text-forest-400 font-bold",children:[l.jsx("span",{children:"Rectified Token:"}),l.jsx("span",{children:'"Fasting Glucose: 105 mg/dL"'})]}),l.jsxs("div",{className:"flex justify-between items-center text-rose-600 dark:text-rose-400 line-through",children:[l.jsx("span",{children:"Raw OCR Error:"}),l.jsx("span",{children:'"PLT(Platelets) 240,000/mcL"'})]}),l.jsxs("div",{className:"flex justify-between items-center text-forest-700 dark:text-forest-400 font-bold",children:[l.jsx("span",{children:"Rectified Token:"}),l.jsx("span",{children:'"Platelets: 240,000 /mcL"'})]})]}),l.jsx("div",{className:"text-[11px] font-mono text-charcoal-500 pt-1",children:o[r].meta})]}),l.jsxs("div",{className:"lg:col-span-7 rounded-xl border border-ivory-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 overflow-hidden shadow-sm",children:[l.jsxs("div",{className:"px-4 py-3 bg-ivory-100 dark:bg-charcoal-850 border-b border-ivory-200 dark:border-charcoal-800 flex justify-between items-center text-xs font-mono",children:[l.jsx("span",{className:"font-bold text-charcoal-800 dark:text-ivory-100",children:"CALIBRATED BIOMARKER MATRIX"}),l.jsx("span",{className:"text-forest-700 dark:text-forest-400 font-bold",children:"16 Screened Assays"})]}),l.jsxs("div",{className:"divide-y divide-ivory-200 dark:divide-charcoal-800 text-xs",children:[l.jsxs("div",{className:"p-3.5 flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"font-bold text-charcoal-950 dark:text-ivory-50",children:"Hemoglobin (Hb)"}),l.jsx("span",{className:"text-charcoal-500 font-mono text-[11px] ml-2",children:"10.8 g/dL"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"text-charcoal-500 font-mono text-[11px]",children:"Ref: 13.0 - 17.5"}),l.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-bold bg-clinical-low-bg text-clinical-low border border-clinical-low/20",children:"▼ Potentially Low"})]})]}),l.jsxs("div",{className:"p-3.5 flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"font-bold text-charcoal-950 dark:text-ivory-50",children:"Fasting Blood Glucose (Sugar)"}),l.jsx("span",{className:"text-charcoal-500 font-mono text-[11px] ml-2",children:"132.0 mg/dL"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"text-charcoal-500 font-mono text-[11px]",children:"Ref: 70.0 - 99.0"}),l.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-bold bg-clinical-high-bg text-clinical-high border border-clinical-high/20",children:"▲ Potentially High"})]})]}),l.jsxs("div",{className:"p-3.5 flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"font-bold text-charcoal-950 dark:text-ivory-50",children:"Total Cholesterol"}),l.jsx("span",{className:"text-charcoal-500 font-mono text-[11px] ml-2",children:"224.0 mg/dL"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"text-charcoal-500 font-mono text-[11px]",children:"Ref: 125.0 - 200.0"}),l.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-bold bg-clinical-high-bg text-clinical-high border border-clinical-high/20",children:"▲ Potentially High"})]})]}),l.jsxs("div",{className:"p-3.5 flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"font-bold text-charcoal-950 dark:text-ivory-50",children:"Platelet Count"}),l.jsx("span",{className:"text-charcoal-500 font-mono text-[11px] ml-2",children:"240,000 /mcL"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"text-charcoal-500 font-mono text-[11px]",children:"Ref: 150k - 450k"}),l.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-bold bg-clinical-norm-bg text-clinical-norm border border-clinical-norm/20",children:"✓ In Normal Range"})]})]}),l.jsxs("div",{className:"p-3.5 flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"font-bold text-charcoal-950 dark:text-ivory-50",children:"Blood Urea Nitrogen (BUN)"}),l.jsx("span",{className:"text-charcoal-500 font-mono text-[11px] ml-2",children:"28.0 mg/dL"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"text-charcoal-500 font-mono text-[11px]",children:"Ref: 7.0 - 20.0"}),l.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-bold bg-clinical-high-bg text-clinical-high border border-clinical-high/20",children:"▲ Potentially High"})]})]})]})]})]})]})]})}),l.jsx("section",{id:"workflow-section",className:"py-20 bg-ivory-50 dark:bg-charcoal-950 border-b border-ivory-200 dark:border-charcoal-800 transition-colors",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"max-w-3xl mb-16",children:[l.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Deterministic Methodology"}),l.jsx("h2",{className:"editorial-title text-3xl sm:text-4xl font-bold text-charcoal-950 dark:text-ivory-50 mt-2",children:"Four verified stages of clinical document intelligence."}),l.jsx("p",{className:"text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 mt-3 leading-relaxed",children:"Every step is open to inspection: clinicians can review and edit extracted streams prior to running reference interval comparisons."})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:o.map(u=>l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800 shadow-sm space-y-4 flex flex-col justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"editorial-title text-3xl font-bold text-forest-800 dark:text-forest-400",children:u.num}),l.jsx("h3",{className:"font-bold text-base text-charcoal-950 dark:text-ivory-50 mt-2",children:u.title}),l.jsx("p",{className:"text-xs text-charcoal-600 dark:text-charcoal-400 mt-2 leading-relaxed",children:u.body})]}),l.jsx("div",{className:"pt-4 border-t border-ivory-200 dark:border-charcoal-800 text-[11px] font-mono text-charcoal-500",children:u.meta})]},u.num))})]})}),l.jsx("section",{id:"formats-section",className:"py-20 bg-white dark:bg-charcoal-900 border-b border-ivory-200 dark:border-charcoal-800 transition-colors",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"max-w-3xl mb-16",children:[l.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Verified Ingestion Matrix"}),l.jsx("h2",{className:"editorial-title text-3xl sm:text-4xl font-bold text-charcoal-950 dark:text-ivory-50 mt-2",children:"Engineered for genuine hospital laboratory workflows."}),l.jsx("p",{className:"text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 mt-3 leading-relaxed",children:"Medical documents arrive in a wide spectrum of visual qualities. Our ingestion pipeline has been tested across 16 regression checks to ensure zero unhandled exceptions."})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[l.jsxs("div",{className:"p-7 rounded-2xl bg-ivory-50 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800 shadow-sm space-y-4",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-forest-800 text-forest-100 flex items-center justify-center font-bold",children:l.jsx($d,{className:"w-6 h-6"})}),l.jsx("h3",{className:"editorial-title text-xl font-bold text-charcoal-950 dark:text-ivory-50",children:"Vector & Scanned PDFs"}),l.jsxs("p",{className:"text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed",children:["Direct text stream extraction via ",l.jsx("code",{className:"font-mono bg-ivory-200 dark:bg-charcoal-800 px-1 py-0.5 rounded",children:"pdfplumber"}),". When PDFs contain flattened scans without digital text, Orca MedScan automatically renders pages to 200 DPI images and activates Tesseract OCR fallback."]}),l.jsxs("div",{className:"pt-2 text-xs font-semibold text-forest-800 dark:text-forest-400 flex items-center gap-1.5 font-mono",children:[l.jsx(on,{className:"w-4 h-4 text-forest-700"})," Multi-page rendering verified"]})]}),l.jsxs("div",{className:"p-7 rounded-2xl bg-ivory-50 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800 shadow-sm space-y-4",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-forest-800 text-forest-100 flex items-center justify-center font-bold",children:l.jsx(mx,{className:"w-6 h-6"})}),l.jsx("h3",{className:"editorial-title text-xl font-bold text-charcoal-950 dark:text-ivory-50",children:"Multi-Format Clinical Vision"}),l.jsx("p",{className:"text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed",children:"Ingests PNG, JPG, JPEG, WEBP, BMP, and TIFF scans. Includes auto-EXIF rotation, contrast enhancement, and an OCR typo repair engine that rectifies alphanumeric character confusions and detached units."}),l.jsxs("div",{className:"pt-2 text-xs font-semibold text-forest-800 dark:text-forest-400 flex items-center gap-1.5 font-mono",children:[l.jsx(on,{className:"w-4 h-4 text-forest-700"})," WEBP typo auto-repair verified"]})]}),l.jsxs("div",{className:"p-7 rounded-2xl bg-ivory-50 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800 shadow-sm space-y-4",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-forest-800 text-forest-100 flex items-center justify-center font-bold",children:l.jsx(kn,{className:"w-6 h-6"})}),l.jsx("h3",{className:"editorial-title text-xl font-bold text-charcoal-950 dark:text-ivory-50",children:"Local RAM Enclave Vault"}),l.jsxs("p",{className:"text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed",children:["100% on-premise execution. Credentials hashed with NIST-compliant PBKDF2-HMAC-SHA256 (100,000 iterations, 256-bit CSPRNG salt) stored in ",l.jsx("code",{className:"font-mono bg-ivory-200 dark:bg-charcoal-800 px-1 py-0.5 rounded",children:"data/.auth_vault.json"}),"."]}),l.jsxs("div",{className:"pt-2 text-xs font-semibold text-forest-800 dark:text-forest-400 flex items-center gap-1.5 font-mono",children:[l.jsx(on,{className:"w-4 h-4 text-forest-700"})," Zero cloud API exposure"]})]})]})]})}),l.jsx("section",{id:"safety-section",className:"py-20 bg-ivory-50 dark:bg-charcoal-950 border-b border-ivory-200 dark:border-charcoal-800 transition-colors",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[l.jsxs("div",{className:"lg:col-span-6 space-y-6",children:[l.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Clinical Safety Protocol"}),l.jsx("h2",{className:"editorial-title text-3xl sm:text-4xl font-bold text-charcoal-950 dark:text-ivory-50",children:"Non-speculative guardrail grounded in real laboratory physics."}),l.jsxs("p",{className:"text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed",children:["Orca MedScan is strictly engineered as a ",l.jsx("strong",{children:"clinical decision-support screening prototype"})," for Orcathon 2026. Speculative AI diagnostic guessing is prohibited by architecture."]}),l.jsxs("div",{className:"space-y-3 text-xs",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800",children:[l.jsx("h4",{className:"font-bold text-charcoal-950 dark:text-ivory-50",children:"Calibrated Printed Intervals First"}),l.jsx("p",{className:"text-charcoal-500 mt-1",children:"Pathology analyzers calibrate results using specific reagent lots. Orca MedScan prioritizes intervals printed directly on the patient document."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800",children:[l.jsx("h4",{className:"font-bold text-charcoal-950 dark:text-ivory-50",children:"Documented Adult Fallback"}),l.jsxs("p",{className:"text-charcoal-500 mt-1",children:["When intervals are omitted on paper, standard adult clinical ranges are applied and explicitly disclosed as ",l.jsx("span",{className:"font-mono text-forest-700",children:"Standard Adult Reference"}),"."]})]})]})]}),l.jsxs("div",{className:"lg:col-span-6 bg-white dark:bg-charcoal-900 p-8 rounded-2xl border border-ivory-200 dark:border-charcoal-800 shadow-paper-elevated space-y-4",children:[l.jsxs("div",{className:"flex items-center gap-2.5 text-clinical-high font-bold text-sm",children:[l.jsx(Aa,{className:"w-5 h-5 text-clinical-high"}),l.jsx("span",{children:"Regulatory Notice & Clinical Scope"})]}),l.jsxs("p",{className:"text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed",children:["Orca MedScan is developed for ",l.jsx("strong",{children:"Orcathon 2026 (Healthcare & MedTech track)"}),". It does not provide medical diagnoses, treatment prescriptions, or emergency triage."]}),l.jsx("p",{className:"text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed",children:"Patients and practitioners should always consult licensed physicians and pathologists for diagnostic interpretation."}),l.jsxs("div",{className:"pt-4 border-t border-ivory-200 dark:border-charcoal-800 flex items-center justify-between text-xs font-mono text-charcoal-500",children:[l.jsx("span",{children:"Orcathon 2026 MedTech Track"}),l.jsx("span",{className:"text-forest-700 dark:text-forest-400 font-bold",children:"16 / 16 Tests Passed"})]})]})]})})}),l.jsx("section",{className:"py-20 bg-white dark:bg-charcoal-900 border-b border-ivory-200 dark:border-charcoal-800 transition-colors",children:l.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"text-center mb-12",children:[l.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Clinical Clarifications"}),l.jsx("h2",{className:"editorial-title text-3xl font-bold text-charcoal-950 dark:text-ivory-50 mt-2",children:"Frequently Asked Questions"})]}),l.jsx("div",{className:"space-y-3",children:c.map((u,h)=>{const p=s===h;return l.jsxs("div",{className:"rounded-xl border border-ivory-200 dark:border-charcoal-800 bg-ivory-50 dark:bg-charcoal-950 overflow-hidden",children:[l.jsxs("button",{onClick:()=>a(p?null:h),className:"w-full flex items-center justify-between p-4 text-left font-bold text-sm text-charcoal-950 dark:text-ivory-50 hover:text-forest-700 dark:hover:text-forest-400 transition-colors",children:[l.jsx("span",{children:u.q}),l.jsx(fy,{className:`w-4 h-4 transition-transform ${p?"rotate-180":""}`})]}),p&&l.jsx("div",{className:"px-4 pb-4 pt-1 text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed border-t border-ivory-200 dark:border-charcoal-800",children:u.a})]},u.q)})})]})}),l.jsx("section",{className:"py-20 bg-forest-900 text-white text-center",children:l.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6",children:[l.jsx("h2",{className:"editorial-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white",children:"Ready to screen clinical laboratory reports in the enclave?"}),l.jsx("p",{className:"text-sm sm:text-base text-forest-100 max-w-2xl mx-auto leading-relaxed",children:"Experience high-precision optical character recognition, abbreviation resolution, and dynamic reference comparison with 100% on-premise local privacy."}),l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 pt-4",children:[l.jsx("button",{onClick:()=>t("signup"),className:"px-6 py-3.5 rounded-xl bg-ivory-50 text-forest-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-white transition-all hover:scale-105",children:"Get Started with Enclave"}),l.jsx("button",{onClick:e,className:"px-6 py-3.5 rounded-xl bg-forest-800 hover:bg-forest-700 border border-forest-600 text-white font-bold text-xs uppercase tracking-wider transition-all",children:"⚡ Evaluator 1-Click Benchmark"})]})]})}),l.jsx("div",{id:"footer-section",className:"scroll-mt-16",children:l.jsx(nT,{})})]})},Bp=({isOpen:t,onClose:e,initialMode:n="login",onSuccess:r})=>{const[i,s]=ve.useState(n),[a,o]=ve.useState(""),[c,u]=ve.useState(""),[h,p]=ve.useState(""),[f,x]=ve.useState(""),[_,y]=ve.useState(""),{login:m,register:d,loginEvaluatorFastPass:v,isLoading:g}=La();if(!t)return null;const M=async A=>{if(A.preventDefault(),x(""),y(""),i==="login"){const T=await m(a,c);T.success?(r&&r(),e()):x(T.message)}else{const T=await d(a,c,h);T.success?(y("Account registered successfully! You may now sign in."),s("login")):x(T.message)}},P=async()=>{x(""),await v()?(r&&r(),e()):x("Evaluator fast-pass failed.")};return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/70 backdrop-blur-sm animate-fade-in font-sans",children:l.jsxs("div",{className:"relative w-full max-w-md bg-white dark:bg-charcoal-900 rounded-3xl shadow-paper-elevated border border-ivory-300 dark:border-charcoal-800 p-6 sm:p-8 overflow-hidden",children:[l.jsx("button",{onClick:e,className:"absolute top-5 right-5 p-1 rounded-lg text-charcoal-400 hover:text-charcoal-700 dark:hover:text-ivory-200",children:l.jsx(Py,{className:"w-5 h-5"})}),l.jsxs("div",{className:"flex items-center gap-3.5 mb-6",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center text-ivory-50 shadow-paper-ivory",children:l.jsx(cr,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"NIST Cryptographic Vault"}),l.jsx("h3",{className:"font-serif text-xl font-bold text-charcoal-900 dark:text-ivory-50",children:i==="login"?"Clinical Enclave Sign In":"Register Practitioner"})]})]}),f&&l.jsx("div",{className:"mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-semibold",children:f}),_&&l.jsx("div",{className:"mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-semibold",children:_}),l.jsxs("form",{onSubmit:M,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-mono font-bold uppercase tracking-wider text-charcoal-600 dark:text-ivory-300 mb-1.5",children:"Practitioner Identifier"}),l.jsxs("div",{className:"relative",children:[l.jsx(by,{className:"absolute left-3.5 top-3 w-4 h-4 text-charcoal-400"}),l.jsx("input",{type:"email",required:!0,value:a,onChange:A=>o(A.target.value),placeholder:"evaluator@orcamed.org",className:"w-full pl-10 pr-3 py-2.5 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-forest-600"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-mono font-bold uppercase tracking-wider text-charcoal-600 dark:text-ivory-300 mb-1.5",children:"Passphrase"}),l.jsxs("div",{className:"relative",children:[l.jsx(kn,{className:"absolute left-3.5 top-3 w-4 h-4 text-charcoal-400"}),l.jsx("input",{type:"password",required:!0,value:c,onChange:A=>u(A.target.value),placeholder:"••••••••••••",className:"w-full pl-10 pr-3 py-2.5 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-forest-600"})]}),i==="signup"&&l.jsx("p",{className:"text-[11px] text-charcoal-500 mt-1 font-sans",children:"Minimum 8 characters with at least one letter and one number."})]}),i==="signup"&&l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-mono font-bold uppercase tracking-wider text-charcoal-600 dark:text-ivory-300 mb-1.5",children:"Confirm Passphrase"}),l.jsxs("div",{className:"relative",children:[l.jsx(kn,{className:"absolute left-3.5 top-3 w-4 h-4 text-charcoal-400"}),l.jsx("input",{type:"password",required:!0,value:h,onChange:A=>p(A.target.value),placeholder:"••••••••••••",className:"w-full pl-10 pr-3 py-2.5 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-forest-600"})]})]}),l.jsxs("button",{type:"submit",disabled:g,className:"w-full py-3 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 font-bold text-xs shadow-paper-ivory transition-all flex items-center justify-center gap-2 mt-2",children:[g?"Verifying...":i==="login"?"Sign In to Enclave":"Create Practitioner Account",l.jsx(bi,{className:"w-4 h-4"})]})]}),l.jsxs("div",{className:"relative my-6 text-center",children:[l.jsx("div",{className:"absolute inset-0 flex items-center",children:l.jsx("div",{className:"w-full border-t border-ivory-200 dark:border-charcoal-800"})}),l.jsx("span",{className:"relative px-3 bg-white dark:bg-charcoal-900 text-[10px] font-mono text-charcoal-400 dark:text-charcoal-400 uppercase tracking-wider",children:"OR HACKATHON EVALUATION"})]}),l.jsxs("button",{onClick:P,disabled:g,className:"w-full py-2.5 px-4 rounded-xl border border-forest-300 dark:border-forest-800 bg-forest-50 dark:bg-forest-950/60 text-forest-800 dark:text-forest-300 font-mono font-bold text-xs hover:bg-forest-100 dark:hover:bg-forest-900 transition-colors flex items-center justify-center gap-2 shadow-paper-ivory",children:[l.jsx(Dl,{className:"w-3.5 h-3.5"}),"⚡ 1-Click Fast Pass (",ex,")"]}),l.jsx("div",{className:"mt-5 text-center text-xs text-charcoal-500",children:i==="login"?l.jsxs(l.Fragment,{children:["Need a new practitioner account?"," ",l.jsx("button",{onClick:()=>s("signup"),className:"font-bold text-forest-700 dark:text-forest-400 hover:underline",children:"Register here"})]}):l.jsxs(l.Fragment,{children:["Already registered in enclave?"," ",l.jsx("button",{onClick:()=>s("login"),className:"font-bold text-forest-700 dark:text-forest-400 hover:underline",children:"Sign in"})]})}),l.jsx("div",{className:"mt-5 pt-3 border-t border-ivory-200 dark:border-charcoal-800 text-[10px] text-charcoal-400 leading-relaxed text-center font-mono",children:"🔒 NIST PBKDF2-HMAC-SHA256 • 100k Iterations • On-Premise Vault"})]})})},iT=({history:t,currentReport:e,onNavigateAnalyze:n,onLoadBenchmark:r,onExportCSV:i,onExportPDF:s})=>{const a=t.length,o=t.reduce((m,d)=>m+d.total_count,0),c=t.reduce((m,d)=>m+d.flagged_count,0),u=t.reduce((m,d)=>m+d.uncertain_count,0),h=t.reduce((m,d)=>m+d.normal_count,0),p=(e==null?void 0:e.records)||[],f=p.filter(m=>m.Category==="flagged"),x=o>0?Math.round(h/o*100):0,_=o>0?Math.round(c/o*100):0,y=o>0?Math.round(u/o*100):0;return l.jsxs("div",{className:"space-y-8 animate-fade-in font-sans",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-ivory-300 dark:border-charcoal-800",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Pathologist Workstation"}),l.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1",children:"Clinical Telemetry Dashboard"}),l.jsx("p",{className:"text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl",children:"Real-time biometric distribution, printed laboratory reference interval verification, and anomaly surveillance."})]}),l.jsx("div",{className:"flex items-center gap-3",children:l.jsxs("button",{onClick:n,className:"inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 font-bold text-xs shadow-paper-ivory transition-all",children:[l.jsx(cr,{className:"w-4 h-4"}),"Analyze New Report"]})})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[l.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory transition-all hover:-translate-y-0.5",children:[l.jsxs("div",{className:"flex items-center justify-between text-charcoal-500 dark:text-ivory-400 mb-2",children:[l.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider",children:"Reports Screened"}),l.jsx($d,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"})]}),l.jsx("div",{className:"text-3xl font-mono font-bold text-charcoal-900 dark:text-ivory-50",children:a}),l.jsxs("div",{className:"text-[11px] text-charcoal-500 dark:text-ivory-400 mt-1 flex items-center gap-1 font-sans",children:[l.jsx(gy,{className:"w-3 h-3 text-forest-700"})," Active session enclave audits"]})]}),l.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory transition-all hover:-translate-y-0.5",children:[l.jsxs("div",{className:"flex items-center justify-between text-charcoal-500 dark:text-ivory-400 mb-2",children:[l.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider",children:"Biomarkers Screened"}),l.jsx(cr,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"})]}),l.jsx("div",{className:"text-3xl font-mono font-bold text-charcoal-900 dark:text-ivory-50",children:o}),l.jsxs("div",{className:"text-[11px] text-clinical-normal mt-1 flex items-center gap-1 font-semibold",children:[h," in reference interval"]})]}),l.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory transition-all hover:-translate-y-0.5",children:[l.jsxs("div",{className:"flex items-center justify-between text-charcoal-500 dark:text-ivory-400 mb-2",children:[l.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider",children:"Out-of-Range Flags"}),l.jsx(Aa,{className:"w-4 h-4 text-clinical-danger"})]}),l.jsx("div",{className:`text-3xl font-mono font-bold ${c>0?"text-clinical-danger":"text-charcoal-900 dark:text-ivory-50"}`,children:c}),l.jsx("div",{className:"text-[11px] text-charcoal-500 dark:text-ivory-400 mt-1 font-sans",children:"Potentially High or Low"})]}),l.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory transition-all hover:-translate-y-0.5",children:[l.jsxs("div",{className:"flex items-center justify-between text-charcoal-500 dark:text-ivory-400 mb-2",children:[l.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider",children:"Needs Review"}),l.jsx(xy,{className:"w-4 h-4 text-charcoal-400"})]}),l.jsx("div",{className:"text-3xl font-mono font-bold text-charcoal-900 dark:text-ivory-50",children:u}),l.jsx("div",{className:"text-[11px] text-charcoal-500 dark:text-ivory-400 mt-1 font-sans",children:"Atypical or candidate markers"})]})]}),a===0&&l.jsxs("div",{className:"p-12 text-center rounded-2xl bg-white dark:bg-charcoal-900 border-2 border-dashed border-ivory-300 dark:border-charcoal-800 space-y-4",children:[l.jsx("div",{className:"w-14 h-14 mx-auto rounded-2xl bg-forest-50 dark:bg-forest-950 flex items-center justify-center text-forest-800 dark:text-forest-300 text-2xl shadow-paper-ivory",children:"📑"}),l.jsx("h3",{className:"font-serif text-2xl font-bold text-charcoal-900 dark:text-ivory-50",children:"No Medical Reports Screened in this Session"}),l.jsx("p",{className:"text-sm text-charcoal-600 dark:text-ivory-400 max-w-lg mx-auto leading-relaxed",children:"Upload laboratory reports in any standard format (PDF, PNG, JPG, WEBP, BMP, TIFF) or load the pre-configured benchmark to immediately populate clinical telemetry."}),l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 pt-2",children:[l.jsx("button",{onClick:n,className:"px-5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 font-bold text-xs shadow-paper-ivory transition-all",children:"Analyze a Report"}),l.jsx("button",{onClick:r,className:"px-5 py-2.5 rounded-xl border border-ivory-400 dark:border-charcoal-700 bg-white dark:bg-charcoal-800 text-charcoal-800 dark:text-ivory-200 font-bold text-xs hover:border-forest-700 transition-all font-mono shadow-paper-ivory",children:"⚡ Load 1-Click Benchmark (16 Biomarkers)"})]})]}),a>0&&l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[l.jsxs("div",{className:"lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50",children:"Biomarker Status Distribution"}),l.jsxs("span",{className:"text-xs font-mono text-charcoal-500 dark:text-ivory-400",children:[o," total"]})]}),l.jsxs("div",{className:"space-y-4 pt-2",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between text-xs font-semibold mb-1",children:[l.jsxs("span",{className:"text-clinical-normal flex items-center gap-1.5 font-medium",children:[l.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-clinical-normal"}),"Normal (In Reference Interval)"]}),l.jsxs("span",{className:"font-mono text-charcoal-800 dark:text-ivory-200",children:[h," (",x,"%)"]})]}),l.jsx("div",{className:"w-full h-2.5 rounded-full bg-ivory-200 dark:bg-charcoal-800 overflow-hidden",children:l.jsx("div",{className:"h-full bg-clinical-normal rounded-full transition-all duration-500",style:{width:`${x}%`}})})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between text-xs font-semibold mb-1",children:[l.jsxs("span",{className:"text-clinical-danger flex items-center gap-1.5 font-medium",children:[l.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-clinical-danger"}),"Potentially High / Low"]}),l.jsxs("span",{className:"font-mono text-charcoal-800 dark:text-ivory-200",children:[c," (",_,"%)"]})]}),l.jsx("div",{className:"w-full h-2.5 rounded-full bg-ivory-200 dark:bg-charcoal-800 overflow-hidden",children:l.jsx("div",{className:"h-full bg-clinical-danger rounded-full transition-all duration-500",style:{width:`${_}%`}})})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between text-xs font-semibold mb-1",children:[l.jsxs("span",{className:"text-charcoal-500 dark:text-ivory-400 flex items-center gap-1.5 font-medium",children:[l.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-charcoal-400"}),"Needs Review / Atypical"]}),l.jsxs("span",{className:"font-mono text-charcoal-800 dark:text-ivory-200",children:[u," (",y,"%)"]})]}),l.jsx("div",{className:"w-full h-2.5 rounded-full bg-ivory-200 dark:bg-charcoal-800 overflow-hidden",children:l.jsx("div",{className:"h-full bg-charcoal-400 rounded-full transition-all duration-500",style:{width:`${y}%`}})})]})]}),l.jsxs("div",{className:"pt-4 border-t border-ivory-200 dark:border-charcoal-800 text-[11px] text-charcoal-500 dark:text-ivory-400 leading-relaxed font-sans",children:["💡 ",l.jsx("strong",{children:"Prioritization Protocol"}),": Printed report intervals take precedent over general population standard ranges."]})]}),l.jsxs("div",{className:"lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[l.jsx(Aa,{className:"w-4 h-4 text-clinical-danger"}),"Priority Out-of-Range Findings"]}),l.jsxs("span",{className:"text-xs text-charcoal-500 dark:text-ivory-400 font-mono",children:["Active: ",(e==null?void 0:e.source_name)||"Specimen"]})]}),f.length>0?l.jsx("div",{className:"space-y-3",children:f.slice(0,4).map((m,d)=>{const v=m.Status.includes("High");return l.jsxs("div",{className:`p-3.5 rounded-xl border transition-all ${v?"bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/60":"bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/60"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"font-bold text-sm text-charcoal-900 dark:text-ivory-50",children:m["Test Name"]}),l.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${v?"bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-300":"bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300"}`,children:[v?"▲ ":"▼ "," ",m.Status]})]}),l.jsxs("div",{className:"mt-1 flex items-center justify-between text-xs text-charcoal-600 dark:text-ivory-400",children:[l.jsxs("span",{children:["Measured: ",l.jsxs("b",{className:"text-charcoal-900 dark:text-ivory-50 font-mono",children:[m["Measured Value"]," ",m.Unit]})]}),l.jsxs("span",{className:"font-mono text-[11px]",children:["Ref: ",m["Reference Range"]," ",m.Unit]})]}),l.jsx("p",{className:"mt-1 text-[11px] text-charcoal-500 dark:text-ivory-400 italic",children:m["Plain Explanation"]})]},d)})}):l.jsxs("div",{className:"p-8 text-center text-charcoal-500 dark:text-ivory-400",children:[l.jsx(yy,{className:"w-8 h-8 text-clinical-normal mx-auto mb-2"}),l.jsx("p",{className:"text-sm font-semibold",children:"All indicators within verified reference ranges."})]})]})]}),e&&l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-ivory-200 dark:border-charcoal-800",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] font-mono font-bold text-forest-700 dark:text-forest-400 uppercase tracking-wider",children:"Audited Document Specimen"}),l.jsxs("h3",{className:"font-serif text-xl font-bold text-charcoal-900 dark:text-ivory-50",children:[e.source_name," (",e.source_type,")"]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("button",{onClick:i,className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-ivory-300 dark:border-charcoal-700 hover:border-forest-700 text-xs font-mono font-bold text-charcoal-700 dark:text-ivory-300 hover:bg-ivory-100 dark:hover:bg-charcoal-800 transition-colors shadow-paper-ivory",children:[l.jsx(Es,{className:"w-3.5 h-3.5"})," Export CSV"]}),l.jsxs("button",{onClick:s,className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-mono font-bold transition-colors shadow-paper-ivory",children:[l.jsx(Es,{className:"w-3.5 h-3.5"})," Clinical PDF"]})]})]}),l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full text-left text-xs",children:[l.jsx("thead",{className:"bg-ivory-100 dark:bg-charcoal-800/60 text-charcoal-600 dark:text-ivory-300 font-mono font-bold uppercase tracking-wider border-y border-ivory-200 dark:border-charcoal-800",children:l.jsxs("tr",{children:[l.jsx("th",{className:"py-3 px-4 font-serif font-bold text-xs capitalize",children:"Biomarker"}),l.jsx("th",{className:"py-3 px-4",children:"Measured"}),l.jsx("th",{className:"py-3 px-4",children:"Unit"}),l.jsx("th",{className:"py-3 px-4",children:"Reference Interval"}),l.jsx("th",{className:"py-3 px-4",children:"Calibration Source"}),l.jsx("th",{className:"py-3 px-4",children:"Clinical Classification"})]})}),l.jsx("tbody",{className:"divide-y divide-ivory-200 dark:divide-charcoal-800 text-charcoal-700 dark:text-ivory-300",children:p.map((m,d)=>{const v=m.Status.includes("High"),g=m.Status.includes("Low"),M=m.Status==="Normal";return l.jsxs("tr",{className:"hover:bg-ivory-50/50 dark:hover:bg-charcoal-800/40 transition-colors",children:[l.jsxs("td",{className:"py-3 px-4 font-semibold text-charcoal-900 dark:text-ivory-50",children:[m["Test Name"],l.jsxs("span",{className:"block text-[10px] text-charcoal-400 font-mono font-normal",children:["Orig: ",m["Original Label"]]})]}),l.jsx("td",{className:"py-3 px-4 font-mono font-bold text-charcoal-900 dark:text-ivory-50",children:m["Measured Value"]}),l.jsx("td",{className:"py-3 px-4 font-mono text-charcoal-500 dark:text-ivory-400",children:m.Unit}),l.jsx("td",{className:"py-3 px-4 font-mono",children:m["Reference Range"]}),l.jsx("td",{className:"py-3 px-4",children:l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-ivory-200 dark:bg-charcoal-800 text-charcoal-600 dark:text-ivory-400 font-mono",children:m["Range Source"]})}),l.jsx("td",{className:"py-3 px-4",children:l.jsxs("span",{className:`inline-block px-2.5 py-1 rounded-full text-[11px] font-mono font-bold ${v?"bg-rose-50 dark:bg-rose-950/60 text-clinical-danger border border-rose-200 dark:border-rose-900":g?"bg-amber-50 dark:bg-amber-950/60 text-clinical-warning border border-amber-200 dark:border-amber-900":M?"bg-emerald-50 dark:bg-emerald-950/60 text-clinical-normal border border-emerald-200 dark:border-emerald-900":"bg-ivory-200 dark:bg-charcoal-800 text-charcoal-700 dark:text-ivory-300"}`,children:[v&&"▲ ",g&&"▼ ",M&&"✓ ",m.Status]})})]},d)})})]})})]})]})},sT=({onAddReportToHistory:t,onExportCSV:e,onExportPDF:n})=>{const[r,i]=ve.useState("upload"),[s,a]=ve.useState(""),[o,c]=ve.useState(null),[u,h]=ve.useState(!1),[p,f]=ve.useState(""),[x,_]=ve.useState(""),[y,m]=ve.useState(null),[d,v]=ve.useState(""),[g,M]=ve.useState(""),[P,A]=ve.useState("all"),T=ve.useRef(null),C=F=>{F.target.files&&F.target.files[0]&&(c(F.target.files[0]),v(""))},w=F=>{F.preventDefault(),F.dataTransfer.files&&F.dataTransfer.files[0]&&(c(F.dataTransfer.files[0]),v(""))},S=async()=>{if(o){h(!0),v("");try{const F=new FormData;F.append("file",o);const z=await fetch("/api/analyze/upload",{method:"POST",body:F}),H=await z.json();if(h(!1),!z.ok){v(H.detail||"Extraction failed.");return}const Y={id:`AUDIT-${Date.now().toString().slice(-4)}`,timestamp:H.timestamp,source_name:H.source_name,source_type:H.source_type,extraction_method:H.extraction_method,records:H.records,total_count:H.total_count,normal_count:H.normal_count,flagged_count:H.flagged_count,uncertain_count:H.uncertain_count,raw_text:H.raw_text,diagnostics:H.diagnostics};f(H.raw_text),_(H.extraction_method),m(Y),t(Y)}catch(F){h(!1),v("Network or server error: "+F.message)}}},R=async()=>{if(!s.trim()){v("Please enter or paste report text.");return}h(!0),v("");try{const F=await fetch("/api/analyze/text",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:s,source_label:"Direct Clinical Stream"})}),z=await F.json();if(h(!1),!F.ok){v(z.detail||"Analysis failed.");return}const H={id:`AUDIT-${Date.now().toString().slice(-4)}`,timestamp:z.timestamp,source_name:z.source_name,source_type:z.source_type,extraction_method:z.extraction_method,records:z.records,total_count:z.total_count,normal_count:z.normal_count,flagged_count:z.flagged_count,uncertain_count:z.uncertain_count,raw_text:z.raw_text,diagnostics:z.diagnostics};f(z.raw_text),_(z.extraction_method),m(H),t(H)}catch(F){h(!1),v("Network or server error: "+F.message)}},W=async()=>{h(!0),v("");try{const z=await(await fetch("/api/benchmark")).json();h(!1);const H={id:"AUDIT-BENCH",timestamp:z.timestamp,source_name:z.source_name,source_type:z.source_type,extraction_method:"Synthetic Clinical Benchmark",records:z.records,total_count:z.total_count,normal_count:z.normal_count,flagged_count:z.flagged_count,uncertain_count:z.uncertain_count,raw_text:z.raw_text,diagnostics:z.diagnostics};f(z.raw_text),_("Synthetic Benchmark"),m(H),t(H)}catch(F){h(!1),v("Failed to load benchmark: "+F.message)}},O=((y==null?void 0:y.records)||[]).filter(F=>{const z=F["Test Name"].toLowerCase().includes(g.toLowerCase())||F["Original Label"].toLowerCase().includes(g.toLowerCase());return P==="all"?z:z&&F.Category===P});return l.jsxs("div",{className:"space-y-8 animate-fade-in font-sans",children:[l.jsxs("div",{className:"pb-5 border-b border-ivory-300 dark:border-charcoal-800",children:[l.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Document Intake Enclave"}),l.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1",children:"Clinical Report Ingestion & Verification"}),l.jsx("p",{className:"text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl",children:"Upload multi-format clinical documents or paste laboratory text for optical character recognition and reference-range screening."})]}),l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-5",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-ivory-200 dark:border-charcoal-800 pb-3",children:[l.jsx("span",{className:"text-xs font-mono font-bold text-forest-700 dark:text-forest-400 uppercase tracking-wider",children:"Phase 1 • Multi-Format Ingestion"}),l.jsxs("div",{className:"flex rounded-xl p-1 bg-ivory-200 dark:bg-charcoal-800 text-xs font-mono font-bold",children:[l.jsx("button",{onClick:()=>i("upload"),className:`px-3 py-1 rounded-lg transition-all ${r==="upload"?"bg-white dark:bg-charcoal-900 text-forest-800 dark:text-forest-300 shadow-paper-ivory":"text-charcoal-500 dark:text-ivory-400"}`,children:"Upload Document"}),l.jsx("button",{onClick:()=>i("paste"),className:`px-3 py-1 rounded-lg transition-all ${r==="paste"?"bg-white dark:bg-charcoal-900 text-forest-800 dark:text-forest-300 shadow-paper-ivory":"text-charcoal-500 dark:text-ivory-400"}`,children:"Paste Text"}),l.jsx("button",{onClick:()=>i("benchmark"),className:`px-3 py-1 rounded-lg transition-all ${r==="benchmark"?"bg-white dark:bg-charcoal-900 text-forest-800 dark:text-forest-300 shadow-paper-ivory":"text-charcoal-500 dark:text-ivory-400"}`,children:"1-Click Benchmark"})]})]}),r==="upload"&&l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{onDragOver:F=>F.preventDefault(),onDrop:w,onClick:()=>{var F;return(F=T.current)==null?void 0:F.click()},className:"border-2 border-dashed border-ivory-300 dark:border-charcoal-700 hover:border-forest-700 rounded-2xl p-8 text-center cursor-pointer transition-all bg-ivory-50/60 dark:bg-charcoal-950/40",children:[l.jsx("input",{ref:T,type:"file",accept:".pdf,.png,.jpg,.jpeg,.webp,.bmp,.tiff,.tif,.heic",onChange:C,className:"hidden"}),l.jsx(vy,{className:"w-10 h-10 text-forest-700 dark:text-forest-400 mx-auto mb-3"}),l.jsx("p",{className:"text-sm font-serif font-bold text-charcoal-900 dark:text-ivory-100",children:o?o.name:"Drag and drop medical report here, or click to browse"}),l.jsx("p",{className:"text-xs text-charcoal-500 dark:text-ivory-400 mt-1 font-mono",children:"Supported: PDF (digital vector & scanned OCR), PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC"})]}),o&&l.jsxs("div",{className:"flex items-center justify-between p-3.5 rounded-xl bg-forest-50 dark:bg-forest-950/50 border border-forest-200 dark:border-forest-800",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-forest-950 dark:text-forest-200",children:[l.jsx($d,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),l.jsxs("span",{children:[o.name," (",(o.size/1024).toFixed(1)," KB)"]})]}),l.jsxs("button",{onClick:S,disabled:u,className:"px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-bold transition-all shadow-paper-ivory flex items-center gap-2",children:[u?"Screening Document...":"Run Extraction & Verification",l.jsx(bi,{className:"w-3.5 h-3.5"})]})]})]}),r==="paste"&&l.jsxs("div",{className:"space-y-4",children:[l.jsx("textarea",{rows:6,value:s,onChange:F=>a(F.target.value),placeholder:"Paste raw laboratory panel, metabolic panel, or pathology text stream...",className:"w-full p-4 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-forest-600"}),l.jsx("div",{className:"flex justify-end",children:l.jsxs("button",{onClick:R,disabled:u||!s.trim(),className:"px-5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-bold transition-all shadow-paper-ivory flex items-center gap-2",children:[u?"Analyzing...":"Parse Clinical Text",l.jsx(bi,{className:"w-3.5 h-3.5"})]})})]}),r==="benchmark"&&l.jsxs("div",{className:"p-6 rounded-xl bg-ivory-100 dark:bg-charcoal-950 border border-ivory-300 dark:border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4",children:[l.jsxs("div",{children:[l.jsxs("h4",{className:"font-serif font-bold text-base text-charcoal-900 dark:text-ivory-100 flex items-center gap-2",children:[l.jsx(Dl,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),"Standard Clinical Benchmark"]}),l.jsx("p",{className:"text-xs text-charcoal-600 dark:text-ivory-400 mt-1 max-w-lg",children:"Instantly load 16 laboratory biomarkers spanning Complete Blood Count (CBC) and Comprehensive Metabolic Panel (CMP) with simulated typographical distortions."})]}),l.jsx("button",{onClick:W,disabled:u,className:"px-5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-mono font-bold shadow-paper-ivory transition-all whitespace-nowrap",children:u?"Loading Benchmark...":"Load Benchmark Panel"})]}),d&&l.jsxs("div",{className:"p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-semibold flex items-center gap-2",children:[l.jsx(my,{className:"w-4 h-4 shrink-0"}),l.jsx("span",{children:d})]})]}),p&&l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-ivory-200 dark:border-charcoal-800",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-xs font-mono font-bold text-forest-700 dark:text-forest-400 uppercase tracking-wider",children:"Phase 2 • Pre-Analysis Ingested Text Review"}),l.jsxs("p",{className:"text-xs text-charcoal-500 dark:text-ivory-400 mt-0.5",children:["Engine: ",l.jsx("b",{className:"font-mono text-charcoal-800 dark:text-ivory-200",children:x})," • Editable before final commit"]})]}),l.jsx("button",{onClick:()=>{a(p),R()},className:"px-3.5 py-1.5 rounded-lg border border-ivory-300 dark:border-charcoal-700 text-xs font-bold text-charcoal-700 dark:text-ivory-300 hover:border-forest-700",children:"Re-Analyze Text Stream"})]}),l.jsx("textarea",{rows:5,value:p,onChange:F=>f(F.target.value),className:"w-full p-4 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 font-mono text-xs focus:outline-none"})]}),y&&l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-5",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-ivory-200 dark:border-charcoal-800",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-xs font-mono font-bold text-forest-700 dark:text-forest-400 uppercase tracking-wider",children:"Phase 3 • Verification & Screening Results"}),l.jsxs("h3",{className:"font-serif text-2xl font-bold text-charcoal-900 dark:text-ivory-50 mt-1",children:[y.source_name," (",y.source_type,")"]}),l.jsxs("p",{className:"text-xs font-mono text-charcoal-500 dark:text-ivory-400 mt-0.5",children:[y.total_count," Recognized Biomarkers • ",y.flagged_count," Out-of-Range Flags • ",y.normal_count," Normal"]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("button",{onClick:()=>e(O),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-ivory-300 dark:border-charcoal-700 hover:border-forest-700 text-xs font-mono font-bold text-charcoal-700 dark:text-ivory-300 hover:bg-ivory-100 dark:hover:bg-charcoal-800 transition-colors shadow-paper-ivory",children:[l.jsx(Es,{className:"w-3.5 h-3.5"})," Export CSV"]}),l.jsxs("button",{onClick:()=>n(y,O),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-mono font-bold transition-colors shadow-paper-ivory",children:[l.jsx(Es,{className:"w-3.5 h-3.5"})," Clinical PDF"]})]})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3",children:[l.jsxs("div",{className:"relative w-full sm:w-64",children:[l.jsx(Ay,{className:"absolute left-3 top-2.5 w-4 h-4 text-charcoal-400"}),l.jsx("input",{type:"text",placeholder:"Search biomarker name...",value:g,onChange:F=>M(F.target.value),className:"w-full pl-9 pr-3 py-2 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 text-xs focus:outline-none focus:ring-1 focus:ring-forest-600"})]}),l.jsxs("div",{className:"flex rounded-lg p-1 bg-ivory-200 dark:bg-charcoal-800 text-xs font-mono font-bold w-full sm:w-auto",children:[l.jsxs("button",{onClick:()=>A("all"),className:`px-3 py-1 rounded-md transition-all ${P==="all"?"bg-white dark:bg-charcoal-900 text-forest-800 dark:text-forest-300 shadow-paper-ivory":"text-charcoal-500"}`,children:["All (",y.total_count,")"]}),l.jsxs("button",{onClick:()=>A("flagged"),className:`px-3 py-1 rounded-md transition-all ${P==="flagged"?"bg-white dark:bg-charcoal-900 text-clinical-danger shadow-paper-ivory":"text-charcoal-500"}`,children:["Flags (",y.flagged_count,")"]}),l.jsxs("button",{onClick:()=>A("normal"),className:`px-3 py-1 rounded-md transition-all ${P==="normal"?"bg-white dark:bg-charcoal-900 text-clinical-normal shadow-paper-ivory":"text-charcoal-500"}`,children:["Normal (",y.normal_count,")"]})]})]}),l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full text-left text-xs",children:[l.jsx("thead",{className:"bg-ivory-100 dark:bg-charcoal-800/60 text-charcoal-600 dark:text-ivory-300 font-mono font-bold uppercase tracking-wider border-y border-ivory-200 dark:border-charcoal-800",children:l.jsxs("tr",{children:[l.jsx("th",{className:"py-3 px-4 font-serif font-bold text-xs capitalize",children:"Biomarker"}),l.jsx("th",{className:"py-3 px-4",children:"Measured"}),l.jsx("th",{className:"py-3 px-4",children:"Unit"}),l.jsx("th",{className:"py-3 px-4",children:"Reference Interval"}),l.jsx("th",{className:"py-3 px-4",children:"Calibration Source"}),l.jsx("th",{className:"py-3 px-4",children:"Clinical Classification"})]})}),l.jsx("tbody",{className:"divide-y divide-ivory-200 dark:divide-charcoal-800 text-charcoal-700 dark:text-ivory-300",children:O.map((F,z)=>{const H=F.Status.includes("High"),Y=F.Status.includes("Low"),D=F.Status==="Normal";return l.jsxs("tr",{className:"hover:bg-ivory-50/50 dark:hover:bg-charcoal-800/40 transition-colors",children:[l.jsxs("td",{className:"py-3 px-4 font-semibold text-charcoal-900 dark:text-ivory-50",children:[F["Test Name"],l.jsxs("span",{className:"block text-[10px] text-charcoal-400 font-mono font-normal",children:["Orig: ",F["Original Label"]]})]}),l.jsx("td",{className:"py-3 px-4 font-mono font-bold text-charcoal-900 dark:text-ivory-50",children:F["Measured Value"]}),l.jsx("td",{className:"py-3 px-4 font-mono text-charcoal-500 dark:text-ivory-400",children:F.Unit}),l.jsx("td",{className:"py-3 px-4 font-mono",children:F["Reference Range"]}),l.jsx("td",{className:"py-3 px-4",children:l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-ivory-200 dark:bg-charcoal-800 text-charcoal-600 dark:text-ivory-400 font-mono",children:F["Range Source"]})}),l.jsx("td",{className:"py-3 px-4",children:l.jsxs("span",{className:`inline-block px-2.5 py-1 rounded-full text-[11px] font-mono font-bold ${H?"bg-rose-50 dark:bg-rose-950/60 text-clinical-danger border border-rose-200 dark:border-rose-900":Y?"bg-amber-50 dark:bg-amber-950/60 text-clinical-warning border border-amber-200 dark:border-amber-900":D?"bg-emerald-50 dark:bg-emerald-950/60 text-clinical-normal border border-emerald-200 dark:border-emerald-900":"bg-ivory-200 dark:bg-charcoal-800 text-charcoal-700 dark:text-ivory-300"}`,children:[H&&"▲ ",Y&&"▼ ",D&&"✓ ",F.Status]})})]},z)})})]})})]})]})},aT=({currentReport:t})=>{if(!t||!t.diagnostics)return l.jsxs("div",{className:"p-12 text-center rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3 font-sans",children:[l.jsx(cr,{className:"w-10 h-10 text-forest-700 dark:text-forest-400 mx-auto"}),l.jsx("h3",{className:"font-serif text-2xl font-bold text-charcoal-900 dark:text-ivory-50",children:"No Extraction Telemetry Active"}),l.jsx("p",{className:"text-xs text-charcoal-500 max-w-md mx-auto",children:"Ingest and screen a medical document or benchmark panel to view raw OCR output and candidate line telemetry."})]});const{diagnostics:e,source_name:n,raw_text:r,id:i,extraction_method:s}=t;return l.jsxs("div",{className:"space-y-8 animate-fade-in font-sans",children:[l.jsxs("div",{className:"pb-5 border-b border-ivory-300 dark:border-charcoal-800",children:[l.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"OCR Telemetry & Token Parsing"}),l.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1",children:"Extraction Diagnostics & Candidate Telemetry"}),l.jsx("p",{className:"text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl",children:"Inspect raw OCR tokenization, verified mapped lines, and candidate unmatched text segments."})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[l.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory",children:[l.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-charcoal-500",children:"Lines Processed"}),l.jsx("div",{className:"text-3xl font-mono font-bold text-charcoal-900 dark:text-ivory-50 mt-1",children:e.total_lines}),l.jsx("div",{className:"text-[11px] text-charcoal-500 mt-1 font-sans",children:"Total document text stream lines"})]}),l.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory",children:[l.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-clinical-normal",children:"Biomarkers Matched"}),l.jsx("div",{className:"text-3xl font-mono font-bold text-clinical-normal mt-1",children:e.recognized_count}),l.jsx("div",{className:"text-[11px] text-charcoal-500 mt-1 font-sans",children:"Deterministic registry mapping"})]}),l.jsxs("div",{className:"p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory",children:[l.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-clinical-warning",children:"Unmapped Candidate Lines"}),l.jsx("div",{className:"text-3xl font-mono font-bold text-clinical-warning mt-1",children:e.unrecognized_candidates.length}),l.jsx("div",{className:"text-[11px] text-charcoal-500 mt-1 font-sans",children:"Lines with numbers needing review"})]})]}),l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3",children:[l.jsxs("div",{className:"flex items-center gap-2 text-clinical-normal font-bold text-sm",children:[l.jsx(on,{className:"w-4 h-4"}),l.jsxs("span",{children:["Recognized Biomarker Labels (",e.recognized_labels.length,")"]})]}),l.jsx("div",{className:"flex flex-wrap gap-2 pt-1",children:e.recognized_labels.map((a,o)=>l.jsx("span",{className:"px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",children:a},o))})]}),l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3",children:[l.jsxs("div",{className:"flex items-center gap-2 text-clinical-warning font-bold text-sm",children:[l.jsx(Aa,{className:"w-4 h-4"}),l.jsxs("span",{children:["Candidate Unmatched Lines (",e.unrecognized_candidates.length,")"]})]}),l.jsx("p",{className:"text-xs text-charcoal-500 dark:text-ivory-400",children:"Lines containing numeric values or possible test names that were not mapped to the central medical registry:"}),e.unrecognized_candidates.length>0?l.jsx("div",{className:"space-y-2 pt-1",children:e.unrecognized_candidates.map((a,o)=>l.jsx("div",{className:"p-3 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800 font-mono text-xs text-charcoal-800 dark:text-ivory-200",children:a},o))}):l.jsx("div",{className:"p-4 rounded-xl bg-ivory-100 dark:bg-charcoal-950 text-xs font-semibold text-clinical-normal",children:"Zero unmapped candidate lines detected. All clinical rows parsed cleanly."})]}),l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2 text-charcoal-900 dark:text-ivory-50 font-bold text-sm",children:[l.jsx(_y,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),l.jsxs("span",{children:["Full Raw Ingested Text Stream (",s,")"]})]}),l.jsxs("span",{className:"text-xs font-mono text-charcoal-400",children:["Audit ID: ",i]})]}),l.jsx("textarea",{readOnly:!0,rows:10,value:r,className:"w-full p-4 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-800 dark:text-ivory-200 font-mono text-xs focus:outline-none"})]})]})},oT=({history:t,onSelectAudit:e,onClearHistory:n,onExportCSV:r,onExportPDF:i})=>{const[s,a]=ve.useState(t.length>0?t[0].id:null),o=t.find(c=>c.id===s)||(t.length>0?t[0]:null);return t.length===0?l.jsxs("div",{className:"p-12 text-center rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3 font-sans",children:[l.jsx(Cx,{className:"w-10 h-10 text-forest-700 dark:text-forest-400 mx-auto"}),l.jsx("h3",{className:"font-serif text-2xl font-bold text-charcoal-900 dark:text-ivory-50",children:"No Historical Audits in this Session"}),l.jsx("p",{className:"text-xs text-charcoal-500 max-w-md mx-auto",children:"Audit entries are generated automatically as laboratory reports are ingested and verified."})]}):l.jsxs("div",{className:"space-y-8 animate-fade-in font-sans",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-ivory-300 dark:border-charcoal-800",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Pathology Enclave Ledger"}),l.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1",children:"Session Audit History"}),l.jsx("p",{className:"text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl",children:"Complete audit trail of all laboratory documents screened during the active session enclave."})]}),l.jsxs("button",{onClick:n,className:"inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-rose-300 dark:border-rose-900 text-rose-700 dark:text-rose-400 text-xs font-mono font-bold hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors shadow-paper-ivory",children:[l.jsx(Gu,{className:"w-3.5 h-3.5"})," Clear Session Cache"]})]}),l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[l.jsxs("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-charcoal-500 dark:text-ivory-400",children:["Screened Document Audits (",t.length,")"]}),l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full text-left text-xs",children:[l.jsx("thead",{className:"bg-ivory-100 dark:bg-charcoal-800/60 text-charcoal-600 dark:text-ivory-300 font-mono font-bold uppercase tracking-wider border-y border-ivory-200 dark:border-charcoal-800",children:l.jsxs("tr",{children:[l.jsx("th",{className:"py-3 px-4",children:"Audit ID"}),l.jsx("th",{className:"py-3 px-4",children:"Timestamp"}),l.jsx("th",{className:"py-3 px-4",children:"Specimen Document"}),l.jsx("th",{className:"py-3 px-4",children:"Format"}),l.jsx("th",{className:"py-3 px-4",children:"Screened"}),l.jsx("th",{className:"py-3 px-4",children:"Out-of-Range"}),l.jsx("th",{className:"py-3 px-4",children:"Normal"}),l.jsx("th",{className:"py-3 px-4 text-right",children:"Actions"})]})}),l.jsx("tbody",{className:"divide-y divide-ivory-200 dark:divide-charcoal-800 text-charcoal-700 dark:text-ivory-300",children:t.map(c=>{const u=s===c.id;return l.jsxs("tr",{onClick:()=>a(c.id),className:`cursor-pointer transition-colors ${u?"bg-forest-50/70 dark:bg-forest-950/40 font-semibold":"hover:bg-ivory-50/60 dark:hover:bg-charcoal-800/40"}`,children:[l.jsx("td",{className:"py-3 px-4 font-mono text-forest-800 dark:text-forest-400 font-bold",children:c.id}),l.jsx("td",{className:"py-3 px-4 font-mono text-charcoal-500 dark:text-ivory-400",children:c.timestamp}),l.jsx("td",{className:"py-3 px-4 font-medium text-charcoal-900 dark:text-ivory-50",children:c.source_name}),l.jsx("td",{className:"py-3 px-4",children:l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-ivory-200 dark:bg-charcoal-800 text-charcoal-600 dark:text-ivory-300 font-mono",children:c.source_type})}),l.jsx("td",{className:"py-3 px-4 font-mono font-bold text-charcoal-900 dark:text-ivory-50",children:c.total_count}),l.jsx("td",{className:"py-3 px-4 font-mono text-clinical-danger font-bold",children:c.flagged_count}),l.jsx("td",{className:"py-3 px-4 font-mono text-clinical-normal",children:c.normal_count}),l.jsx("td",{className:"py-3 px-4 text-right",children:l.jsx("button",{onClick:h=>{h.stopPropagation(),a(c.id),e(c)},className:"px-2.5 py-1 rounded bg-forest-800 text-ivory-50 text-[11px] font-mono font-bold hover:bg-forest-900 transition-colors shadow-paper-ivory",children:"Inspect"})})]},c.id)})})]})})]}),o&&l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-ivory-200 dark:border-charcoal-800",children:[l.jsxs("div",{children:[l.jsxs("span",{className:"text-[10px] font-mono font-bold text-forest-700 dark:text-forest-400 uppercase",children:["Historical Audit Inspector • ",o.id]}),l.jsxs("h3",{className:"font-serif text-xl font-bold text-charcoal-900 dark:text-ivory-50",children:[o.source_name," (",o.timestamp,")"]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("button",{onClick:()=>r(o.records),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-ivory-300 dark:border-charcoal-700 text-xs font-mono font-bold text-charcoal-700 dark:text-ivory-300 hover:border-forest-700 shadow-paper-ivory",children:[l.jsx(Es,{className:"w-3.5 h-3.5"})," CSV Export"]}),l.jsxs("button",{onClick:()=>i(o,o.records),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-mono font-bold transition-colors shadow-paper-ivory",children:[l.jsx(Es,{className:"w-3.5 h-3.5"})," Clinical PDF"]})]})]}),l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full text-left text-xs",children:[l.jsx("thead",{className:"bg-ivory-100 dark:bg-charcoal-800/60 text-charcoal-600 dark:text-ivory-300 font-mono font-bold uppercase tracking-wider border-y border-ivory-200 dark:border-charcoal-800",children:l.jsxs("tr",{children:[l.jsx("th",{className:"py-3 px-4 font-serif font-bold text-xs capitalize",children:"Biomarker"}),l.jsx("th",{className:"py-3 px-4",children:"Measured"}),l.jsx("th",{className:"py-3 px-4",children:"Unit"}),l.jsx("th",{className:"py-3 px-4",children:"Reference Range"}),l.jsx("th",{className:"py-3 px-4",children:"Range Calibration"}),l.jsx("th",{className:"py-3 px-4",children:"Status"})]})}),l.jsx("tbody",{className:"divide-y divide-ivory-200 dark:divide-charcoal-800 text-charcoal-700 dark:text-ivory-300",children:o.records.map((c,u)=>l.jsxs("tr",{className:"hover:bg-ivory-50/50 dark:hover:bg-charcoal-800/40",children:[l.jsx("td",{className:"py-2.5 px-4 font-semibold text-charcoal-900 dark:text-ivory-50",children:c["Test Name"]}),l.jsx("td",{className:"py-2.5 px-4 font-mono font-bold text-charcoal-900 dark:text-ivory-50",children:c["Measured Value"]}),l.jsx("td",{className:"py-2.5 px-4 font-mono text-charcoal-500",children:c.Unit}),l.jsx("td",{className:"py-2.5 px-4 font-mono",children:c["Reference Range"]}),l.jsx("td",{className:"py-2.5 px-4",children:l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-ivory-200 dark:bg-charcoal-800 text-charcoal-600 dark:text-ivory-400 font-mono",children:c["Range Source"]})}),l.jsx("td",{className:"py-2.5 px-4",children:l.jsx("span",{className:"font-mono text-xs font-bold",children:c.Status})})]},u))})]})})]})]})},lT=({onClearSessionCache:t,historyCount:e})=>{const{user:n}=La(),[r,i]=ve.useState("vault"),[s,a]=ve.useState(null);return ve.useEffect(()=>{fetch("/api/system/status").then(o=>o.json()).then(o=>a(o)).catch(o=>console.error("Error fetching system status:",o))},[]),l.jsxs("div",{className:"space-y-8 animate-fade-in font-sans",children:[l.jsxs("div",{className:"pb-5 border-b border-ivory-300 dark:border-charcoal-800",children:[l.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Enclave Infrastructure"}),l.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1",children:"System Settings & Cryptographic Enclave"}),l.jsx("p",{className:"text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl",children:"Inspect cryptographic vault parameters, OCR engine telemetry, and manage session cache."})]}),l.jsxs("div",{className:"flex border-b border-ivory-300 dark:border-charcoal-800 space-x-6 text-xs font-mono font-bold",children:[l.jsxs("button",{onClick:()=>i("vault"),className:`pb-3 transition-colors relative flex items-center gap-2 ${r==="vault"?"text-forest-800 dark:text-forest-300 border-b-2 border-forest-700":"text-charcoal-500 hover:text-charcoal-700 dark:hover:text-ivory-300"}`,children:[l.jsx(kn,{className:"w-4 h-4"})," Cryptographic Enclave"]}),l.jsxs("button",{onClick:()=>i("engine"),className:`pb-3 transition-colors relative flex items-center gap-2 ${r==="engine"?"text-forest-800 dark:text-forest-300 border-b-2 border-forest-700":"text-charcoal-500 hover:text-charcoal-700 dark:hover:text-ivory-300"}`,children:[l.jsx(mx,{className:"w-4 h-4"})," Optical Engine & Formats"]}),l.jsxs("button",{onClick:()=>i("session"),className:`pb-3 transition-colors relative flex items-center gap-2 ${r==="session"?"text-forest-800 dark:text-forest-300 border-b-2 border-forest-700":"text-charcoal-500 hover:text-charcoal-700 dark:hover:text-ivory-300"}`,children:[l.jsx(Gu,{className:"w-4 h-4"})," Session Cache"]})]}),r==="vault"&&l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[l.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[l.jsx(My,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),"Active Practitioner Identity"]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono",children:[l.jsxs("div",{className:"p-3.5 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[l.jsx("span",{className:"text-charcoal-500 uppercase font-bold text-[10px]",children:"Email"}),l.jsx("p",{className:"font-bold text-charcoal-900 dark:text-ivory-50 mt-0.5 truncate",children:n==null?void 0:n.email})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[l.jsx("span",{className:"text-charcoal-500 uppercase font-bold text-[10px]",children:"Role"}),l.jsx("p",{className:"font-bold text-forest-800 dark:text-forest-300 mt-0.5",children:(n==null?void 0:n.role)||"Lead Clinical Evaluator"})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[l.jsx("span",{className:"text-charcoal-500 uppercase font-bold text-[10px]",children:"Session State"}),l.jsx("p",{className:"font-bold text-clinical-normal mt-0.5",children:"Authenticated (Local Vault)"})]})]})]}),l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[l.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[l.jsx(kn,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),"Cryptographic Enclave Parameters"]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-4 text-center font-mono",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[l.jsx("span",{className:"text-[10px] text-charcoal-500 uppercase font-bold",children:"Algorithm"}),l.jsx("p",{className:"text-base font-bold text-charcoal-900 dark:text-ivory-50 mt-1",children:"PBKDF2-SHA256"})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[l.jsx("span",{className:"text-[10px] text-charcoal-500 uppercase font-bold",children:"Key Iterations"}),l.jsx("p",{className:"text-base font-bold text-forest-800 dark:text-forest-300 mt-1",children:"100,000"})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[l.jsx("span",{className:"text-[10px] text-charcoal-500 uppercase font-bold",children:"Salt Entropy"}),l.jsx("p",{className:"text-base font-bold text-charcoal-900 dark:text-ivory-50 mt-1",children:"256-bit CSPRNG"})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[l.jsx("span",{className:"text-[10px] text-charcoal-500 uppercase font-bold",children:"Vault Users"}),l.jsx("p",{className:"text-base font-bold text-charcoal-900 dark:text-ivory-50 mt-1",children:(s==null?void 0:s.vault.registered_practitioners)||1})]})]}),l.jsxs("p",{className:"text-xs text-charcoal-500 dark:text-ivory-400 leading-relaxed pt-2 font-sans",children:["💡 ",l.jsx("strong",{children:"Enclave Security Boundary"}),": All credentials and PBKDF2 hashes are saved in host storage at ",l.jsx("code",{className:"font-mono text-forest-700 dark:text-forest-400",children:(s==null?void 0:s.vault.vault_path)||"data/.auth_vault.json"})," with zero cloud transmissions."]})]})]}),r==="engine"&&l.jsx("div",{className:"space-y-6",children:l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[l.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[l.jsx(Cy,{className:"w-4 h-4 text-forest-700 dark:text-forest-400"}),"Optical Engine Telemetry"]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[l.jsx("span",{className:"text-charcoal-500 uppercase font-bold text-[10px]",children:"Tesseract OCR"}),l.jsxs("p",{className:"font-bold text-clinical-normal mt-1 flex items-center gap-1",children:[l.jsx(on,{className:"w-3.5 h-3.5"}),s!=null&&s.tesseract.available?"Active (Local Binary)":"Not Found"]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[l.jsx("span",{className:"text-charcoal-500 uppercase font-bold text-[10px]",children:"Supported Vision Formats"}),l.jsx("p",{className:"font-bold text-charcoal-900 dark:text-ivory-50 mt-1",children:"PDF, PNG, JPG, WEBP, BMP, TIFF, HEIC"})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[l.jsx("span",{className:"text-charcoal-500 uppercase font-bold text-[10px]",children:"Registry Biomarkers"}),l.jsx("p",{className:"font-bold text-forest-800 dark:text-forest-300 mt-1",children:"50+ Standardized Markers"})]})]})]})}),r==="session"&&l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[l.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[l.jsx(Gu,{className:"w-4 h-4 text-rose-600"}),"Session Cache Management"]}),l.jsxs("p",{className:"text-xs text-charcoal-600 dark:text-ivory-400",children:["Currently retaining ",l.jsx("b",{children:e})," audited laboratory reports in active browser session memory."]}),l.jsx("button",{onClick:t,className:"px-4 py-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-900 text-rose-700 dark:text-rose-400 text-xs font-mono font-bold hover:bg-rose-100 transition-colors shadow-paper-ivory",children:"Clear Session Cache Now"})]})]})},cT=()=>l.jsxs("div",{className:"space-y-8 animate-fade-in max-w-4xl font-sans",children:[l.jsxs("div",{className:"pb-5 border-b border-ivory-300 dark:border-charcoal-800",children:[l.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Clinical Governance"}),l.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1",children:"Clinical Safety, Methodology & Enclave Architecture"}),l.jsx("p",{className:"text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl",children:"Detailed specification of the non-speculative screening guardrail, reference interval calibration rules, and zero-cloud data sovereignty."})]}),l.jsxs("div",{className:"space-y-6 text-sm text-charcoal-700 dark:text-ivory-300 leading-relaxed",children:[l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3",children:[l.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[l.jsx(dy,{className:"w-5 h-5 text-forest-700 dark:text-forest-400"}),"1. Purpose & Clinical Scope"]}),l.jsxs("p",{className:"text-xs text-charcoal-600 dark:text-ivory-400 leading-relaxed font-sans",children:[l.jsx("strong",{children:"Orca MedScan"})," is a clinical decision-support and screening prototype developed for ",l.jsx("strong",{children:"Orcathon 2026"})," (Healthcare & MedTech track). Its engineering philosophy bridges the gap between dense, unstructured laboratory reports and rapid, actionable clinical review without exposing sensitive patient health records to third-party cloud APIs."]})]}),l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4",children:[l.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[l.jsx(Lx,{className:"w-5 h-5 text-forest-700 dark:text-forest-400"}),"2. Dynamic Reference Interval Prioritization"]}),l.jsxs("div",{className:"space-y-3 text-xs",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[l.jsx("strong",{className:"text-charcoal-900 dark:text-ivory-50 font-serif text-sm",children:"A. Printed Laboratory Ranges (Highest Priority)"}),l.jsx("p",{className:"text-charcoal-500 dark:text-ivory-400 mt-1 font-sans",children:"Clinical laboratories calibrate analyzers with specific assay reagents. Orca MedScan automatically detects and respects reference ranges printed directly on the patient report."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[l.jsx("strong",{className:"text-charcoal-900 dark:text-ivory-50 font-serif text-sm",children:"B. Documented Adult Clinical Standard (Fallback)"}),l.jsxs("p",{className:"text-charcoal-500 dark:text-ivory-400 mt-1 font-sans",children:["When a report omits reference intervals, standard adult clinical ranges are applied and explicitly tagged as ",l.jsx("span",{className:"font-mono text-forest-700 dark:text-forest-400 font-bold",children:"Standard Adult Reference"}),"."]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800",children:[l.jsx("strong",{className:"text-charcoal-900 dark:text-ivory-50 font-serif text-sm",children:"C. Conservative Non-Speculative Classification"}),l.jsx("p",{className:"text-charcoal-500 dark:text-ivory-400 mt-1 font-sans",children:"Results are strictly categorized as Normal, Potentially High, Potentially Low, or Review Needed. Speculative clinical diagnoses are deliberately prohibited."})]})]})]}),l.jsxs("div",{className:"p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3",children:[l.jsxs("h3",{className:"font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2",children:[l.jsx(kn,{className:"w-5 h-5 text-forest-700 dark:text-forest-400"}),"3. Privacy-Preserving Enclave Architecture"]}),l.jsxs("ul",{className:"space-y-2 text-xs text-charcoal-600 dark:text-ivory-400",children:[l.jsxs("li",{className:"flex items-center gap-2",children:[l.jsx(on,{className:"w-4 h-4 text-forest-700 dark:text-forest-400 shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"100% Local Execution:"})," All digital parsing, OCR, and reference interval comparisons execute in host memory."]})]}),l.jsxs("li",{className:"flex items-center gap-2",children:[l.jsx(on,{className:"w-4 h-4 text-forest-700 dark:text-forest-400 shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Zero External API Exposure:"})," Patient identifiers, test results, and blood panel scans are never sent over the internet or forwarded to remote LLMs."]})]}),l.jsxs("li",{className:"flex items-center gap-2",children:[l.jsx(on,{className:"w-4 h-4 text-forest-700 dark:text-forest-400 shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"PBKDF2-HMAC-SHA256 Vault:"})," Cryptographic password protection conforming to NIST SP 800-132 recommendations."]})]})]})]}),l.jsxs("div",{className:"p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2 shadow-paper-ivory",children:[l.jsxs("div",{className:"flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-sm",children:[l.jsx(Aa,{className:"w-5 h-5 shrink-0"}),l.jsx("span",{className:"font-serif",children:"Official Medical Screening Disclaimer"})]}),l.jsx("p",{className:"text-xs text-amber-950/80 dark:text-amber-300/80 leading-relaxed font-sans",children:"This application is an educational and screening prototype. It does not provide medical diagnoses, treatment plans, or emergency clinical triaging. Patients should always consult licensed healthcare providers for diagnostic interpretation."})]})]})]}),uT=()=>{const{isAuthenticated:t,loginEvaluatorFastPass:e}=La(),[n,r]=ve.useState(()=>{try{return localStorage.getItem("orca_user_session")?"app":"landing"}catch{return"landing"}}),[i,s]=ve.useState("Dashboard"),[a,o]=ve.useState(!1),[c,u]=ve.useState("login"),[h,p]=ve.useState(!1),[f,x]=ve.useState(()=>{try{const C=localStorage.getItem("orca_audits");return C?JSON.parse(C):[]}catch{return[]}}),[_,y]=ve.useState(()=>f.length>0?f[f.length-1]:null),[m,d]=ve.useState(!0);ve.useEffect(()=>{try{localStorage.setItem("orca_audits",JSON.stringify(f))}catch(C){console.error("Error saving audits to localStorage:",C)}},[f]),ve.useEffect(()=>{try{const C=new URLSearchParams(window.location.search),w=C.get("view"),S=C.get("theme");if(S==="dark"?(document.documentElement.classList.add("dark"),localStorage.setItem("orca_theme","dark")):S==="light"&&(document.documentElement.classList.remove("dark"),localStorage.setItem("orca_theme","light")),w==="simulator"){const R=document.getElementById("simulator-section");R&&R.scrollIntoView({behavior:"instant"}),setTimeout(()=>{var W;(W=document.getElementById("simulator-section"))==null||W.scrollIntoView({behavior:"instant"})},100)}else w==="footer"?(window.scrollTo(0,4500),setTimeout(()=>{window.scrollTo(0,4500)},100)):(w==="dashboard"||w==="analyze"||w==="diagnostics"||w==="history"||w==="settings"||w==="safety")&&(t||e(),r("app"),w==="dashboard"&&s("Dashboard"),w==="analyze"&&s("Analyze Report"),w==="diagnostics"&&s("Extraction Diagnostics"),w==="history"&&s("Report History"),w==="settings"&&s("Settings"),w==="safety"&&s("Clinical Safety"),fetch("/api/benchmark").then(R=>R.json()).then(R=>{const W={id:"AUDIT-BENCH",timestamp:R.timestamp,source_name:R.source_name,source_type:R.source_type,extraction_method:"Synthetic Clinical Benchmark",records:R.records,total_count:R.total_count,normal_count:R.normal_count,flagged_count:R.flagged_count,uncertain_count:R.uncertain_count,raw_text:R.raw_text,diagnostics:R.diagnostics};g(W)}).catch(R=>console.error("Auto benchmark load error:",R)))}catch(C){console.error("URL params parse error:",C)}},[]),ve.useEffect(()=>{t&&n==="landing"&&r("app")},[t]),ve.useEffect(()=>{fetch("/api/system/status").then(C=>C.json()).then(C=>{C&&C.tesseract&&d(C.tesseract.available)}).catch(()=>d(!0))},[]);const v=C=>{u(C),o(!0)},g=C=>{x(w=>[...w,C]),y(C)},M=()=>{x([]),y(null),localStorage.removeItem("orca_audits")},P=async()=>{t||await e();try{const w=await(await fetch("/api/benchmark")).json(),S={id:"AUDIT-BENCH",timestamp:w.timestamp,source_name:w.source_name,source_type:w.source_type,extraction_method:"Synthetic Clinical Benchmark",records:w.records,total_count:w.total_count,normal_count:w.normal_count,flagged_count:w.flagged_count,uncertain_count:w.uncertain_count,raw_text:w.raw_text,diagnostics:w.diagnostics};g(S),r("app"),s("Dashboard")}catch(C){console.error("Failed to load benchmark:",C)}},A=async C=>{const w=C||(_==null?void 0:_.records)||[];if(w.length)try{const R=await(await fetch("/api/export/csv",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:w})})).blob(),W=window.URL.createObjectURL(R),O=document.createElement("a");O.href=W,O.download=`orca_biomarkers_${(_==null?void 0:_.id)||"export"}.csv`,document.body.appendChild(O),O.click(),O.remove()}catch(S){console.error("Error downloading CSV:",S)}},T=async(C,w)=>{const S=C||_||{id:"AUDIT",source_name:"Medical Specimen"},R=w||(_==null?void 0:_.records)||[];if(R.length)try{const O=await(await fetch("/api/export/pdf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({meta:S,records:R})})).blob(),F=window.URL.createObjectURL(O),z=document.createElement("a");z.href=F,z.download=`orca_clinical_summary_${S.id||"export"}.pdf`,document.body.appendChild(z),z.click(),z.remove()}catch(W){console.error("Error downloading PDF:",W)}};return n==="landing"||!t?l.jsxs("div",{className:"min-h-screen bg-ivory-100 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-50 flex flex-col font-sans transition-colors duration-200",children:[l.jsx(Ly,{onOpenAuth:v,onGoToApp:()=>r("app")}),l.jsx("main",{className:"flex-1",children:l.jsx(rT,{onOpenAuth:v,onLaunchBenchmark:P,onExploreWorkflow:()=>{const C=document.getElementById("workflow-section");C&&C.scrollIntoView({behavior:"smooth"})}})}),l.jsx(Bp,{isOpen:a,onClose:()=>o(!1),initialMode:c,onSuccess:()=>r("app")})]}):l.jsxs("div",{className:"min-h-screen bg-ivory-100 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-50 flex font-sans transition-colors duration-200",children:[l.jsx(Dy,{currentView:i,onSelectView:C=>s(C),auditCount:f.length,ocrActive:m,onLoadBenchmark:P,isCollapsed:h,onToggleCollapse:()=>p(!h)}),l.jsxs("div",{className:`flex-1 transition-all duration-300 min-h-screen flex flex-col ${h?"ml-16":"ml-64"}`,children:[l.jsxs("header",{className:"h-16 px-6 sm:px-8 border-b border-ivory-300 dark:border-charcoal-800 bg-ivory-50/80 dark:bg-charcoal-900/80 backdrop-blur-md flex items-center justify-between sticky top-0 z-30",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400",children:"Active Workspace"}),l.jsx("span",{className:"text-charcoal-400",children:"/"}),l.jsx("span",{className:"text-xs font-mono font-bold text-charcoal-800 dark:text-ivory-200",children:i})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("button",{onClick:()=>r("landing"),className:"text-xs font-semibold text-charcoal-500 hover:text-charcoal-800 dark:hover:text-ivory-200 transition-colors",children:"Public Overview"}),l.jsx("button",{onClick:()=>{s("Analyze Report")},className:"px-3.5 py-1.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 font-bold text-xs shadow-paper-ivory transition-all",children:"+ Ingest Report"})]})]}),l.jsxs("main",{className:"flex-1 p-6 sm:p-8 max-w-7xl w-full mx-auto",children:[i==="Dashboard"&&l.jsx(iT,{history:f,currentReport:_,onNavigateAnalyze:()=>s("Analyze Report"),onLoadBenchmark:P,onExportCSV:()=>A(),onExportPDF:()=>T()}),i==="Analyze Report"&&l.jsx(sT,{onAddReportToHistory:g,onExportCSV:A,onExportPDF:T}),i==="Extraction Diagnostics"&&l.jsx(aT,{currentReport:_}),i==="Report History"&&l.jsx(oT,{history:f,onSelectAudit:C=>{y(C),s("Dashboard")},onClearHistory:M,onExportCSV:A,onExportPDF:T}),i==="Settings"&&l.jsx(lT,{onClearSessionCache:M,historyCount:f.length}),i==="Clinical Safety"&&l.jsx(cT,{})]})]}),l.jsx(Bp,{isOpen:a,onClose:()=>o(!1),initialMode:c,onSuccess:()=>r("app")})]})};Kc.createRoot(document.getElementById("root")).render(l.jsx(jg.StrictMode,{children:l.jsx(ky,{children:l.jsx(ey,{children:l.jsx(uT,{})})})}));
