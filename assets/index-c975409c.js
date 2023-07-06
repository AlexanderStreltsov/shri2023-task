(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var Z,m,ye,P,ae,ve,ee,G={},be=[],Ue=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ne=Array.isArray;function L(e,t){for(var n in t)e[n]=t[n];return e}function ge(e){var t=e.parentNode;t&&t.removeChild(e)}function s(e,t,n){var i,l,o,c={};for(o in t)o=="key"?i=t[o]:o=="ref"?l=t[o]:c[o]=t[o];if(arguments.length>2&&(c.children=arguments.length>3?Z.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)c[o]===void 0&&(c[o]=e.defaultProps[o]);return V(e,c,i,l,null)}function V(e,t,n,i,l){var o={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++ye};return l==null&&m.vnode!=null&&m.vnode(o),o}function M(e){return e.children}function X(e,t){this.props=e,this.context=t}function A(e,t){if(t==null)return e.__?A(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?A(e):null}function ke(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ke(e)}}function ue(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!Y.__r++||ae!==m.debounceRendering)&&((ae=m.debounceRendering)||ve)(Y)}function Y(){var e,t,n,i,l,o,c,a;for(P.sort(ee);e=P.shift();)e.__d&&(t=P.length,i=void 0,l=void 0,c=(o=(n=e).__v).__e,(a=n.__P)&&(i=[],(l=L({},o)).__v=o.__v+1,oe(a,o,l,n.__n,a.ownerSVGElement!==void 0,o.__h!=null?[c]:null,i,c??A(o),o.__h),we(i,o),o.__e!=c&&ke(o)),P.length>t&&P.sort(ee));Y.__r=0}function $e(e,t,n,i,l,o,c,a,u,f){var r,y,d,_,h,D,v,b=i&&i.__k||be,N=b.length;for(n.__k=[],r=0;r<t.length;r++)if((_=n.__k[r]=(_=t[r])==null||typeof _=="boolean"||typeof _=="function"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?V(null,_,null,null,_):ne(_)?V(M,{children:_},null,null,null):_.__b>0?V(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)!=null){if(_.__=n,_.__b=n.__b+1,(d=b[r])===null||d&&_.key==d.key&&_.type===d.type)b[r]=void 0;else for(y=0;y<N;y++){if((d=b[y])&&_.key==d.key&&_.type===d.type){b[y]=void 0;break}d=null}oe(e,_,d=d||G,l,o,c,a,u,f),h=_.__e,(y=_.ref)&&d.ref!=y&&(v||(v=[]),d.ref&&v.push(d.ref,null,_),v.push(y,_.__c||h,_)),h!=null?(D==null&&(D=h),typeof _.type=="function"&&_.__k===d.__k?_.__d=u=Se(_,u,e):u=Ne(e,_,d,b,h,u),typeof n.type=="function"&&(n.__d=u)):u&&d.__e==u&&u.parentNode!=e&&(u=A(d))}for(n.__e=D,r=N;r--;)b[r]!=null&&(typeof n.type=="function"&&b[r].__e!=null&&b[r].__e==n.__d&&(n.__d=Ee(i).nextSibling),Ce(b[r],b[r]));if(v)for(r=0;r<v.length;r++)Le(v[r],v[++r],v[++r])}function Se(e,t,n){for(var i,l=e.__k,o=0;l&&o<l.length;o++)(i=l[o])&&(i.__=e,t=typeof i.type=="function"?Se(i,t,n):Ne(n,i,i,l,i.__e,t));return t}function Ne(e,t,n,i,l,o){var c,a,u;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(l),c=null;else{for(a=o,u=0;(a=a.nextSibling)&&u<i.length;u+=1)if(a==l)break e;e.insertBefore(l,o),c=o}return c!==void 0?c:l.nextSibling}function Ee(e){var t,n,i;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(i=Ee(n)))return i}return null}function Fe(e,t,n,i,l){var o;for(o in n)o==="children"||o==="key"||o in t||K(e,o,null,n[o],i);for(o in t)l&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||K(e,o,t[o],n[o],i)}function _e(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ue.test(t)?n:n+"px"}function K(e,t,n,i,l){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||_e(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||_e(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?i||e.addEventListener(t,o?pe:fe,o):e.removeEventListener(t,o?pe:fe,o);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function fe(e){return this.l[e.type+!1](m.event?m.event(e):e)}function pe(e){return this.l[e.type+!0](m.event?m.event(e):e)}function oe(e,t,n,i,l,o,c,a,u){var f,r,y,d,_,h,D,v,b,N,j,O,ce,U,J,$=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(u=n.__h,a=t.__e=n.__e,t.__h=null,o=[a]),(f=m.__b)&&f(t);try{e:if(typeof $=="function"){if(v=t.props,b=(f=$.contextType)&&i[f.__c],N=f?b?b.props.value:f.__:i,n.__c?D=(r=t.__c=n.__c).__=r.__E:("prototype"in $&&$.prototype.render?t.__c=r=new $(v,N):(t.__c=r=new X(v,N),r.constructor=$,r.render=He),b&&b.sub(r),r.props=v,r.state||(r.state={}),r.context=N,r.__n=i,y=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),$.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=L({},r.__s)),L(r.__s,$.getDerivedStateFromProps(v,r.__s))),d=r.props,_=r.state,r.__v=t,y)$.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if($.getDerivedStateFromProps==null&&v!==d&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(v,N),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(v,r.__s,N)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(r.props=v,r.state=r.__s,r.__d=!1),r.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(F){F&&(F.__=t)}),j=0;j<r._sb.length;j++)r.__h.push(r._sb[j]);r._sb=[],r.__h.length&&c.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(v,r.__s,N),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(d,_,h)})}if(r.context=N,r.props=v,r.__P=e,O=m.__r,ce=0,"prototype"in $&&$.prototype.render){for(r.state=r.__s,r.__d=!1,O&&O(t),f=r.render(r.props,r.state,r.context),U=0;U<r._sb.length;U++)r.__h.push(r._sb[U]);r._sb=[]}else do r.__d=!1,O&&O(t),f=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++ce<25);r.state=r.__s,r.getChildContext!=null&&(i=L(L({},i),r.getChildContext())),y||r.getSnapshotBeforeUpdate==null||(h=r.getSnapshotBeforeUpdate(d,_)),$e(e,ne(J=f!=null&&f.type===M&&f.key==null?f.props.children:f)?J:[J],t,n,i,l,o,c,a,u),r.base=t.__e,t.__h=null,r.__h.length&&c.push(r),D&&(r.__E=r.__=null),r.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Be(n.__e,t,n,i,l,o,c,u);(f=m.diffed)&&f(t)}catch(F){t.__v=null,(u||o!=null)&&(t.__e=a,t.__h=!!u,o[o.indexOf(a)]=null),m.__e(F,t,n)}}function we(e,t){m.__c&&m.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){m.__e(i,n.__v)}})}function Be(e,t,n,i,l,o,c,a){var u,f,r,y=n.props,d=t.props,_=t.type,h=0;if(_==="svg"&&(l=!0),o!=null){for(;h<o.length;h++)if((u=o[h])&&"setAttribute"in u==!!_&&(_?u.localName===_:u.nodeType===3)){e=u,o[h]=null;break}}if(e==null){if(_===null)return document.createTextNode(d);e=l?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,a=!1}if(_===null)y===d||a&&e.data===d||(e.data=d);else{if(o=o&&Z.call(e.childNodes),f=(y=n.props||G).dangerouslySetInnerHTML,r=d.dangerouslySetInnerHTML,!a){if(o!=null)for(y={},h=0;h<e.attributes.length;h++)y[e.attributes[h].name]=e.attributes[h].value;(r||f)&&(r&&(f&&r.__html==f.__html||r.__html===e.innerHTML)||(e.innerHTML=r&&r.__html||""))}if(Fe(e,d,y,l,a),r)t.__k=[];else if($e(e,ne(h=t.props.children)?h:[h],t,n,i,l&&_!=="foreignObject",o,c,o?o[0]:n.__k&&A(n,0),a),o!=null)for(h=o.length;h--;)o[h]!=null&&ge(o[h]);a||("value"in d&&(h=d.value)!==void 0&&(h!==e.value||_==="progress"&&!h||_==="option"&&h!==y.value)&&K(e,"value",h,y.value,!1),"checked"in d&&(h=d.checked)!==void 0&&h!==e.checked&&K(e,"checked",h,y.checked,!1))}return e}function Le(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){m.__e(i,n)}}function Ce(e,t,n){var i,l;if(m.unmount&&m.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Le(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){m.__e(o,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(l=0;l<i.length;l++)i[l]&&Ce(i[l],t,n||typeof e.type!="function");n||e.__e==null||ge(e.__e),e.__=e.__e=e.__d=void 0}function He(e,t,n){return this.constructor(e,n)}function We(e,t,n){var i,l,o;m.__&&m.__(e,t),l=(i=typeof n=="function")?null:n&&n.__k||t.__k,o=[],oe(t,e=(!i&&n||t).__k=s(M,null,[e]),l||G,G,t.ownerSVGElement!==void 0,!i&&n?[n]:l?null:t.firstChild?Z.call(t.childNodes):null,o,!i&&n?n:l?l.__e:t.firstChild,i),we(o,e)}Z=be.slice,m={__e:function(e,t,n,i){for(var l,o,c;t=t.__;)if((l=t.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(e)),c=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,i||{}),c=l.__d),c)return l.__E=l}catch(a){e=a}throw e}},ye=0,X.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=L({},this.state),typeof e=="function"&&(e=e(L({},n),this.props)),e&&L(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ue(this))},X.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ue(this))},X.prototype.render=M,P=[],ve=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ee=function(e,t){return e.__v.__b-t.__v.__b},Y.__r=0;var Pe={exports:{}},p={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=Symbol.for("react.element"),Ve=Symbol.for("react.portal"),Xe=Symbol.for("react.fragment"),qe=Symbol.for("react.strict_mode"),ze=Symbol.for("react.profiler"),Ge=Symbol.for("react.provider"),Ye=Symbol.for("react.context"),Ke=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),Je=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),de=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=de&&e[de]||e["@@iterator"],typeof e=="function"?e:null)}var xe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},De=Object.assign,Re={};function T(e,t,n){this.props=e,this.context=t,this.refs=Re,this.updater=n||xe}T.prototype.isReactComponent={};T.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};T.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Te(){}Te.prototype=T.prototype;function re(e,t,n){this.props=e,this.context=t,this.refs=Re,this.updater=n||xe}var ie=re.prototype=new Te;ie.constructor=re;De(ie,T.prototype);ie.isPureReactComponent=!0;var he=Array.isArray,Oe=Object.prototype.hasOwnProperty,le={current:null},Ae={key:!0,ref:!0,__self:!0,__source:!0};function Me(e,t,n){var i,l={},o=null,c=null;if(t!=null)for(i in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(o=""+t.key),t)Oe.call(t,i)&&!Ae.hasOwnProperty(i)&&(l[i]=t[i]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+2];l.children=u}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)l[i]===void 0&&(l[i]=a[i]);return{$$typeof:I,type:e,key:o,ref:c,props:l,_owner:le.current}}function tt(e,t){return{$$typeof:I,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function se(e){return typeof e=="object"&&e!==null&&e.$$typeof===I}function nt(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var me=/\/+/g;function Q(e,t){return typeof e=="object"&&e!==null&&e.key!=null?nt(""+e.key):t.toString(36)}function q(e,t,n,i,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case I:case Ve:c=!0}}if(c)return c=e,l=l(c),e=i===""?"."+Q(c,0):i,he(l)?(n="",e!=null&&(n=e.replace(me,"$&/")+"/"),q(l,t,n,"",function(f){return f})):l!=null&&(se(l)&&(l=tt(l,n+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(me,"$&/")+"/")+e)),t.push(l)),1;if(c=0,i=i===""?".":i+":",he(e))for(var a=0;a<e.length;a++){o=e[a];var u=i+Q(o,a);c+=q(o,t,n,u,l)}else if(u=et(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=i+Q(o,a++),c+=q(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function B(e,t,n){if(e==null)return e;var i=[],l=0;return q(e,i,"","",function(o){return t.call(n,o,l++)}),i}function ot(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var g={current:null},z={transition:null},rt={ReactCurrentDispatcher:g,ReactCurrentBatchConfig:z,ReactCurrentOwner:le};p.Children={map:B,forEach:function(e,t,n){B(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return B(e,function(){t++}),t},toArray:function(e){return B(e,function(t){return t})||[]},only:function(e){if(!se(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};p.Component=T;p.Fragment=Xe;p.Profiler=ze;p.PureComponent=re;p.StrictMode=qe;p.Suspense=Ze;p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rt;p.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=De({},e.props),l=e.key,o=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,c=le.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Oe.call(t,u)&&!Ae.hasOwnProperty(u)&&(i[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){a=Array(u);for(var f=0;f<u;f++)a[f]=arguments[f+2];i.children=a}return{$$typeof:I,type:e.type,key:l,ref:o,props:i,_owner:c}};p.createContext=function(e){return e={$$typeof:Ye,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ge,_context:e},e.Consumer=e};p.createElement=Me;p.createFactory=function(e){var t=Me.bind(null,e);return t.type=e,t};p.createRef=function(){return{current:null}};p.forwardRef=function(e){return{$$typeof:Ke,render:e}};p.isValidElement=se;p.lazy=function(e){return{$$typeof:Qe,_payload:{_status:-1,_result:e},_init:ot}};p.memo=function(e,t){return{$$typeof:Je,type:e,compare:t===void 0?null:t}};p.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}};p.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};p.useCallback=function(e,t){return g.current.useCallback(e,t)};p.useContext=function(e){return g.current.useContext(e)};p.useDebugValue=function(){};p.useDeferredValue=function(e){return g.current.useDeferredValue(e)};p.useEffect=function(e,t){return g.current.useEffect(e,t)};p.useId=function(){return g.current.useId()};p.useImperativeHandle=function(e,t,n){return g.current.useImperativeHandle(e,t,n)};p.useInsertionEffect=function(e,t){return g.current.useInsertionEffect(e,t)};p.useLayoutEffect=function(e,t){return g.current.useLayoutEffect(e,t)};p.useMemo=function(e,t){return g.current.useMemo(e,t)};p.useReducer=function(e,t,n){return g.current.useReducer(e,t,n)};p.useRef=function(e){return g.current.useRef(e)};p.useState=function(e){return g.current.useState(e)};p.useSyncExternalStore=function(e,t,n){return g.current.useSyncExternalStore(e,t,n)};p.useTransition=function(){return g.current.useTransition()};p.version="18.2.0";Pe.exports=p;var S=Pe.exports;const it="k",lt="l",st="m",ct="n",at="o",ut="p",_t="q",E={header:it,logo:lt,menu:st,links:ct,item:at,link:ut,link_current:_t},ft=()=>{let[e,t]=S.useState(!1),[n,i]=S.useState(!1);const l=()=>{n||i(!0),t(!e)};return s("header",{className:`header ${E.header}`},s("a",{href:"/",className:E.logo,"aria-label":"Яндекс.Дом"}),s("button",{className:E.menu,"aria-expanded":e?"true":"false",onClick:l}),s("ul",{className:E.links+(e?" header__links_opened":"")+(n?" header__links-toggled":"")},s("li",{className:E.item},s("a",{className:`${E.link} ${E.link_current}`,href:"/","aria-current":"page"},"Сводка")),s("li",{className:E.item},s("a",{className:E.link,href:"/devices"},"Устройства")),s("li",{className:E.item},s("a",{className:E.link,href:"/scripts"},"Сценарии"))))},pt="r",dt="s",ht="t",mt="u",yt="v",vt="w",bt="x",gt="y",kt="z",$t="A",R={slim:pt,button:dt,icon:ht,icon_temp:mt,icon_temp2:yt,icon_light:vt,icon_light2:bt,icon_schedule:gt,title:kt,subtitle:$t},w=({slim:e,icon:t,iconLabel:n,title:i,subtitle:l})=>s("li",{className:"event"+(e?` event_slim ${R.slim}`:"")},s("button",{className:R.button},s("span",{className:`${R.icon} ${R[`icon_${t}`]}`,role:"img","aria-label":n}),s("h4",{className:R.title},i),l&&s("span",{className:R.subtitle},l))),St="F",Nt="G",Et="H",wt="I",Lt="J",Ct="K",Pt="N",xt="O",Dt="P",k={dashboard:St,primary:Nt,title:Et,subtitle:wt,info:Lt,item:Ct,"item-title":"L","item-details":"M",icon:Pt,icon_rain:xt,schedule:Dt},Rt=()=>s("section",{className:"section main__general"},s("h2",{className:"section__title section__title-header section__main-title"},"Главное"),s("div",{className:`hero-dashboard ${k.dashboard}`},s("div",{className:k.primary},s("h3",{className:k.title},"Привет, Геннадий!"),s("p",{className:k.subtitle},"Двери и окна закрыты, сигнализация включена."),s("ul",{className:k.info},s("li",{className:k.item},s("div",{className:k["item-title"]},"Дома"),s("div",{className:k["item-details"]},"+23")),s("li",{className:k.item},s("div",{className:k["item-title"]},"За окном"),s("div",{className:k["item-details"]},"+19",s("div",{className:`${k.icon} ${k.icon_rain}`,role:"img","aria-label":"Дождь"}))))),s("ul",{className:k.schedule},s(w,{icon:"temp",iconLabel:"Температура",title:"Philips Cooler",subtitle:"Начнет охлаждать в 16:30"}),s(w,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"}),s(w,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})))),Tt={"event-grid":"b"},Ot=()=>s("section",{className:"section main__scripts"},s("h2",{className:"section__title section__title-header"},"Избранные сценарии"),s("ul",{className:Tt["event-grid"]},s(w,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Выключить весь свет в доме и во дворе"}),s(w,{slim:!0,icon:"schedule",iconLabel:"Расписание",title:"Я ухожу"}),s(w,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Включить свет в коридоре"}),s(w,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Набрать горячую ванну",subtitle:"Начнётся в 18:00"}),s(w,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Сделать пол тёплым во всей квартире"}))),x={all:{title:"Все",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]},kitchen:{title:"Кухня",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}]},hall:{title:"Зал",items:[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}]},lights:{title:"Лампочки",items:[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}]},cameras:{title:"Камеры",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]}};for(let e=0;e<6;++e)x.all.items=[...x.all.items,...x.all.items];const te=Object.keys(x),Ie=S.createContext(""),je=()=>S.useContext(Ie),At=({children:e})=>{const[t,n]=S.useState(""),i=S.useCallback(l=>{n(l)},[]);return s(Ie.Provider,{value:{activeTab:t,switchTab:i}},e)},Mt="g",It="h",jt="i",Ut="j",H={select:Mt,tabs:It,tab:jt,tab_active:Ut},Ft=()=>{const{activeTab:e,switchTab:t}=je();return S.useEffect(()=>{t(new URLSearchParams(location.search).get("tab")||"all")},[]),s("div",{className:"section__title"},s("h2",{className:"section__title-header"},"Избранные устройства"),s("select",{className:`section__select ${H.select}`,defaultValue:"all",onInput:n=>t(n.target.value)},te.map(n=>s("option",{key:n,value:n},x[n].title))),s("ul",{role:"tablist",className:`section__tabs ${H.tabs}`},te.map(n=>s("li",{key:n,role:"tab","aria-selected":n===e?"true":"false",tabIndex:n===e?"0":void 0,className:`section__tab ${H.tab}`+(n===e?` section__tab_active ${H.tab_active}`:""),id:`tab_${n}`,"aria-controls":`panel_${n}`,onClick:()=>t(n)},x[n].title))))},Bt="B",Ht="C",Wt="D",W={wrapper:Bt,arrow:Ht,panel:Wt,"panel-list":"E"},Vt=()=>{const{activeTab:e}=je(),[t,n]=S.useState(!1),i=S.useRef(null),l=S.useRef(null),o=S.useMemo(()=>{const a={"":[]};return te.forEach(u=>{a[u]=x[u].items.map((f,r)=>s(w,{key:r,...f}))}),a},[]),c=()=>{const a=i.current.childNodes[0];a&&a.scrollTo({left:a.scrollLeft+400,behavior:"smooth"})};return S.useEffect(()=>{const u=[...l.current.childNodes].reduce((f,r)=>f+r.clientWidth,0)>i.current.offsetWidth;u!==t&&n(u)}),s("div",{className:`section__panel-wrapper ${W.wrapper}`,ref:i},s("div",{role:"tabpanel",className:`section__panel ${W.panel}`,id:`panel_${e}`,"aria-labelledby":`tab_${e}`},s("ul",{ref:l,className:`section__panel-list ${W["panel-list"]}`},[...o[e]])),t&&s("div",{className:`section__arrow ${W.arrow}`,onClick:c}))},Xt="a",qt={devices:Xt},zt=()=>s("section",{className:`section ${qt.devices}`},s(At,null,s(Ft,null),s(Vt,null))),Gt="c",Yt="d",Kt="e",Zt="f",C={footer:Gt,list:Yt,link:Kt,copyright:Zt},Jt=()=>s("footer",{className:C.footer},s("ul",{className:C.list},s("li",null,s("a",{className:C.link,href:"/"},"Помощь")),s("li",null,s("a",{className:C.link,href:"/"},"Обратная связь")),s("li",null,s("a",{className:C.link,href:"/"},"Разработчикам")),s("li",null,s("a",{className:C.link,href:"/"},"Условия использования"))),s("div",{className:C.copyright},"© 1997–2023 ООО «Яндекс»")),Qt="_",en={main:Qt},tn=()=>s(M,null,s(ft,null),s("main",{className:`main ${en.main}`},s(Rt,null),s(Ot,null),s(zt,null)),s(Jt,null));We(s(tn,null),document.getElementById("root"));
