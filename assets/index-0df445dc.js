(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))_(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&_(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function _(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Z,u,He,P,ae,Te,ee,Ae,I={},De=[],Je=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,z=Array.isArray;function L(e,t){for(var n in t)e[n]=t[n];return e}function Oe(e){var t=e.parentNode;t&&t.removeChild(e)}function s(e,t,n){var _,o,i,c={};for(i in t)i=="key"?_=t[i]:i=="ref"?o=t[i]:c[i]=t[i];if(arguments.length>2&&(c.children=arguments.length>3?Z.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)c[i]===void 0&&(c[i]=e.defaultProps[i]);return F(e,c,_,o,null)}function F(e,t,n,_,o){var i={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++He};return o==null&&u.vnode!=null&&u.vnode(i),i}function E(e){return e.children}function S(e,t){this.props=e,this.context=t}function A(e,t){if(t==null)return e.__?A(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?A(e):null}function Ue(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ue(e)}}function te(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!X.__r++||ae!==u.debounceRendering)&&((ae=u.debounceRendering)||Te)(X)}function X(){var e,t,n,_,o,i,c,r;for(P.sort(ee);e=P.shift();)e.__d&&(t=P.length,_=void 0,o=void 0,c=(i=(n=e).__v).__e,(r=n.__P)&&(_=[],(o=L({},i)).__v=i.__v+1,oe(r,i,o,n.__n,r.ownerSVGElement!==void 0,i.__h!=null?[c]:null,_,c??A(i),i.__h),Ve(_,i),i.__e!=c&&Ue(i)),P.length>t&&P.sort(ee));X.__r=0}function Me(e,t,n,_,o,i,c,r,f,h){var l,m,p,a,d,C,b,y=_&&_.__k||De,N=y.length;for(n.__k=[],l=0;l<t.length;l++)if((a=n.__k[l]=(a=t[l])==null||typeof a=="boolean"||typeof a=="function"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?F(null,a,null,null,a):z(a)?F(E,{children:a},null,null,null):a.__b>0?F(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null){if(a.__=n,a.__b=n.__b+1,(p=y[l])===null||p&&a.key==p.key&&a.type===p.type)y[l]=void 0;else for(m=0;m<N;m++){if((p=y[m])&&a.key==p.key&&a.type===p.type){y[m]=void 0;break}p=null}oe(e,a,p=p||I,o,i,c,r,f,h),d=a.__e,(m=a.ref)&&p.ref!=m&&(b||(b=[]),p.ref&&b.push(p.ref,null,a),b.push(m,a.__c||d,a)),d!=null?(C==null&&(C=d),typeof a.type=="function"&&a.__k===p.__k?a.__d=f=We(a,f,e):f=Re(e,a,p,y,d,f),typeof n.type=="function"&&(n.__d=f)):f&&p.__e==f&&f.parentNode!=e&&(f=A(p))}for(n.__e=C,l=N;l--;)y[l]!=null&&(typeof n.type=="function"&&y[l].__e!=null&&y[l].__e==n.__d&&(n.__d=Fe(_).nextSibling),Ie(y[l],y[l]));if(b)for(l=0;l<b.length;l++)Be(b[l],b[++l],b[++l])}function We(e,t,n){for(var _,o=e.__k,i=0;o&&i<o.length;i++)(_=o[i])&&(_.__=e,t=typeof _.type=="function"?We(_,t,n):Re(n,_,_,o,_.__e,t));return t}function q(e,t){return t=t||[],e==null||typeof e=="boolean"||(z(e)?e.some(function(n){q(n,t)}):t.push(e)),t}function Re(e,t,n,_,o,i){var c,r,f;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||o!=i||o.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(o),c=null;else{for(r=i,f=0;(r=r.nextSibling)&&f<_.length;f+=1)if(r==o)break e;e.insertBefore(o,i),c=i}return c!==void 0?c:o.nextSibling}function Fe(e){var t,n,_;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(_=Fe(n)))return _}return null}function et(e,t,n,_,o){var i;for(i in n)i==="children"||i==="key"||i in t||j(e,i,null,n[i],_);for(i in t)o&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===t[i]||j(e,i,t[i],n[i],_)}function ue(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Je.test(t)?n:n+"px"}function j(e,t,n,_,o){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||ue(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||ue(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?_||e.addEventListener(t,i?pe:fe,i):e.removeEventListener(t,i?pe:fe,i);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function fe(e){return this.l[e.type+!1](u.event?u.event(e):e)}function pe(e){return this.l[e.type+!0](u.event?u.event(e):e)}function oe(e,t,n,_,o,i,c,r,f){var h,l,m,p,a,d,C,b,y,N,O,T,se,U,G,$=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,r=t.__e=n.__e,t.__h=null,i=[r]),(h=u.__b)&&h(t);try{e:if(typeof $=="function"){if(b=t.props,y=(h=$.contextType)&&_[h.__c],N=h?y?y.props.value:h.__:_,n.__c?C=(l=t.__c=n.__c).__=l.__E:("prototype"in $&&$.prototype.render?t.__c=l=new $(b,N):(t.__c=l=new S(b,N),l.constructor=$,l.render=nt),y&&y.sub(l),l.props=b,l.state||(l.state={}),l.context=N,l.__n=_,m=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),$.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=L({},l.__s)),L(l.__s,$.getDerivedStateFromProps(b,l.__s))),p=l.props,a=l.state,l.__v=t,m)$.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if($.getDerivedStateFromProps==null&&b!==p&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(b,N),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(b,l.__s,N)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(l.props=b,l.state=l.__s,l.__d=!1),l.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(M){M&&(M.__=t)}),O=0;O<l._sb.length;O++)l.__h.push(l._sb[O]);l._sb=[],l.__h.length&&c.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(b,l.__s,N),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(p,a,d)})}if(l.context=N,l.props=b,l.__P=e,T=u.__r,se=0,"prototype"in $&&$.prototype.render){for(l.state=l.__s,l.__d=!1,T&&T(t),h=l.render(l.props,l.state,l.context),U=0;U<l._sb.length;U++)l.__h.push(l._sb[U]);l._sb=[]}else do l.__d=!1,T&&T(t),h=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++se<25);l.state=l.__s,l.getChildContext!=null&&(_=L(L({},_),l.getChildContext())),m||l.getSnapshotBeforeUpdate==null||(d=l.getSnapshotBeforeUpdate(p,a)),Me(e,z(G=h!=null&&h.type===E&&h.key==null?h.props.children:h)?G:[G],t,n,_,o,i,c,r,f),l.base=t.__e,t.__h=null,l.__h.length&&c.push(l),C&&(l.__E=l.__=null),l.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=tt(n.__e,t,n,_,o,i,c,f);(h=u.diffed)&&h(t)}catch(M){t.__v=null,(f||i!=null)&&(t.__e=r,t.__h=!!f,i[i.indexOf(r)]=null),u.__e(M,t,n)}}function Ve(e,t){u.__c&&u.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(_){_.call(n)})}catch(_){u.__e(_,n.__v)}})}function tt(e,t,n,_,o,i,c,r){var f,h,l,m=n.props,p=t.props,a=t.type,d=0;if(a==="svg"&&(o=!0),i!=null){for(;d<i.length;d++)if((f=i[d])&&"setAttribute"in f==!!a&&(a?f.localName===a:f.nodeType===3)){e=f,i[d]=null;break}}if(e==null){if(a===null)return document.createTextNode(p);e=o?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,p.is&&p),i=null,r=!1}if(a===null)m===p||r&&e.data===p||(e.data=p);else{if(i=i&&Z.call(e.childNodes),h=(m=n.props||I).dangerouslySetInnerHTML,l=p.dangerouslySetInnerHTML,!r){if(i!=null)for(m={},d=0;d<e.attributes.length;d++)m[e.attributes[d].name]=e.attributes[d].value;(l||h)&&(l&&(h&&l.__html==h.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(et(e,p,m,o,r),l)t.__k=[];else if(Me(e,z(d=t.props.children)?d:[d],t,n,_,o&&a!=="foreignObject",i,c,i?i[0]:n.__k&&A(n,0),r),i!=null)for(d=i.length;d--;)i[d]!=null&&Oe(i[d]);r||("value"in p&&(d=p.value)!==void 0&&(d!==e.value||a==="progress"&&!d||a==="option"&&d!==m.value)&&j(e,"value",d,m.value,!1),"checked"in p&&(d=p.checked)!==void 0&&d!==e.checked&&j(e,"checked",d,m.checked,!1))}return e}function Be(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(_){u.__e(_,n)}}function Ie(e,t,n){var _,o;if(u.unmount&&u.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||Be(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(i){u.__e(i,t)}_.base=_.__P=null,e.__c=void 0}if(_=e.__k)for(o=0;o<_.length;o++)_[o]&&Ie(_[o],t,n||typeof e.type!="function");n||e.__e==null||Oe(e.__e),e.__=e.__e=e.__d=void 0}function nt(e,t,n){return this.constructor(e,n)}function _t(e,t,n){var _,o,i;u.__&&u.__(e,t),o=(_=typeof n=="function")?null:n&&n.__k||t.__k,i=[],oe(t,e=(!_&&n||t).__k=s(E,null,[e]),o||I,I,t.ownerSVGElement!==void 0,!_&&n?[n]:o?null:t.firstChild?Z.call(t.childNodes):null,i,!_&&n?n:o?o.__e:t.firstChild,_),Ve(i,e)}function it(e,t){var n={__c:t="__cC"+Ae++,__:e,Consumer:function(_,o){return _.children(o)},Provider:function(_){var o,i;return this.getChildContext||(o=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&o.some(function(r){r.__e=!0,te(r)})},this.sub=function(c){o.push(c);var r=c.componentWillUnmount;c.componentWillUnmount=function(){o.splice(o.indexOf(c),1),r&&r.call(c)}}),_.children}};return n.Provider.__=n.Consumer.contextType=n}Z=De.slice,u={__e:function(e,t,n,_){for(var o,i,c;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,_||{}),c=o.__d),c)return o.__E=o}catch(r){e=r}throw e}},He=0,S.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=L({},this.state),typeof e=="function"&&(e=e(L({},n),this.props)),e&&L(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),te(this))},S.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),te(this))},S.prototype.render=E,P=[],Te=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ee=function(e,t){return e.__v.__b-t.__v.__b},X.__r=0,Ae=0;var H,v,K,he,D=0,Xe=[],V=[],de=u.__b,me=u.__r,ve=u.diffed,be=u.__c,ye=u.unmount;function Y(e,t){u.__h&&u.__h(v,e,D||t),D=0;var n=v.__H||(v.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:V}),n.__[e]}function le(e){return D=1,ot(je,e)}function ot(e,t,n){var _=Y(H++,2);if(_.t=e,!_.__c&&(_.__=[n?n(t):je(void 0,t),function(r){var f=_.__N?_.__N[0]:_.__[0],h=_.t(f,r);f!==h&&(_.__N=[h,_.__[1]],_.__c.setState({}))}],_.__c=v,!v.u)){var o=function(r,f,h){if(!_.__c.__H)return!0;var l=_.__c.__H.__.filter(function(p){return p.__c});if(l.every(function(p){return!p.__N}))return!i||i.call(this,r,f,h);var m=!1;return l.forEach(function(p){if(p.__N){var a=p.__[0];p.__=p.__N,p.__N=void 0,a!==p.__[0]&&(m=!0)}}),!(!m&&_.__c.props===r)&&(!i||i.call(this,r,f,h))};v.u=!0;var i=v.shouldComponentUpdate,c=v.componentWillUpdate;v.componentWillUpdate=function(r,f,h){if(this.__e){var l=i;i=void 0,o(r,f,h),i=l}c&&c.call(this,r,f,h)},v.shouldComponentUpdate=o}return _.__N||_.__}function re(e,t){var n=Y(H++,3);!u.__s&&qe(n.__H,t)&&(n.__=e,n.i=t,v.__H.__h.push(n))}function ne(e){return D=5,ce(function(){return{current:e}},[])}function ce(e,t){var n=Y(H++,7);return qe(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function lt(e,t){return D=8,ce(function(){return e},t)}function rt(e){var t=v.context[e.__c],n=Y(H++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(v)),t.props.value):e.__}function ct(){for(var e;e=Xe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(B),e.__H.__h.forEach(_e),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}u.__b=function(e){v=null,de&&de(e)},u.__r=function(e){me&&me(e),H=0;var t=(v=e.__c).__H;t&&(K===v?(t.__h=[],v.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=V,n.__N=n.i=void 0})):(t.__h.forEach(B),t.__h.forEach(_e),t.__h=[],H=0)),K=v},u.diffed=function(e){ve&&ve(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Xe.push(t)!==1&&he===u.requestAnimationFrame||((he=u.requestAnimationFrame)||st)(ct)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==V&&(n.__=n.__V),n.i=void 0,n.__V=V})),K=v=null},u.__c=function(e,t){t.some(function(n){try{n.__h.forEach(B),n.__h=n.__h.filter(function(_){return!_.__||_e(_)})}catch(_){t.some(function(o){o.__h&&(o.__h=[])}),t=[],u.__e(_,n.__v)}}),be&&be(e,t)},u.unmount=function(e){ye&&ye(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{B(_)}catch(o){t=o}}),n.__H=void 0,t&&u.__e(t,n.__v))};var ge=typeof requestAnimationFrame=="function";function st(e){var t,n=function(){clearTimeout(_),ge&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);ge&&(t=requestAnimationFrame(n))}function B(e){var t=v,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),v=t}function _e(e){var t=v;e.__c=e.__(),v=t}function qe(e,t){return!e||e.length!==t.length||t.some(function(n,_){return n!==e[_]})}function je(e,t){return typeof t=="function"?t(e):t}function Ze(e,t){for(var n in t)e[n]=t[n];return e}function $e(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var _ in t)if(_!=="__source"&&e[_]!==t[_])return!0;return!1}function Ne(e){this.props=e}(Ne.prototype=new S).isPureReactComponent=!0,Ne.prototype.shouldComponentUpdate=function(e,t){return $e(this.props,e)||$e(this.state,t)};var ke=u.__b;u.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ke&&ke(e)};var at=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ut(e){function t(n){var _=Ze({},n);return delete _.ref,e(_,n.ref||null)}return t.$$typeof=at,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var ft=u.__e;u.__e=function(e,t,n,_){if(e.then){for(var o,i=t;i=i.__;)if((o=i.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}ft(e,t,n,_)};var Se=u.unmount;function ze(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(_){typeof _.__c=="function"&&_.__c()}),e.__c.__H=null),(e=Ze({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(_){return ze(_,t,n)})),e}function Ye(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(_){return Ye(_,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function Q(){this.__u=0,this.t=null,this.__b=null}function Ge(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function W(){this.u=null,this.o=null}u.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Se&&Se(e)},(Q.prototype=new S).__c=function(e,t){var n=t.__c,_=this;_.t==null&&(_.t=[]),_.t.push(n);var o=Ge(_.__v),i=!1,c=function(){i||(i=!0,n.__R=null,o?o(r):r())};n.__R=c;var r=function(){if(!--_.__u){if(_.state.__a){var h=_.state.__a;_.__v.__k[0]=Ye(h,h.__c.__P,h.__c.__O)}var l;for(_.setState({__a:_.__b=null});l=_.t.pop();)l.forceUpdate()}},f=t.__h===!0;_.__u++||f||_.setState({__a:_.__b=_.__v.__k[0]}),e.then(c,c)},Q.prototype.componentWillUnmount=function(){this.t=[]},Q.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),_=this.__v.__k[0].__c;this.__v.__k[0]=ze(this.__b,n,_.__O=_.__P)}this.__b=null}var o=t.__a&&s(E,null,e.fallback);return o&&(o.__h=null),[s(E,null,t.__a?null:e.children),o]};var Le=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(W.prototype=new S).__a=function(e){var t=this,n=Ge(t.__v),_=t.o.get(e);return _[0]++,function(o){var i=function(){t.props.revealOrder?(_.push(o),Le(t,e,_)):o()};n?n(i):i()}},W.prototype.render=function(e){this.u=null,this.o=new Map;var t=q(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},W.prototype.componentDidUpdate=W.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Le(e,n,t)})};var pt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ht=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,dt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,mt=/[A-Z0-9]/g,vt=typeof document<"u",bt=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};S.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(S.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Pe=u.event;function yt(){}function gt(){return this.cancelBubble}function $t(){return this.defaultPrevented}u.event=function(e){return Pe&&(e=Pe(e)),e.persist=yt,e.isPropagationStopped=gt,e.isDefaultPrevented=$t,e.nativeEvent=e};var Nt={enumerable:!1,configurable:!0,get:function(){return this.class}},we=u.vnode;u.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,_=t.type,o={};for(var i in n){var c=n[i];if(!(i==="value"&&"defaultValue"in n&&c==null||vt&&i==="children"&&_==="noscript"||i==="class"||i==="className")){var r=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&c===!0?c="":r==="ondoubleclick"?i="ondblclick":r!=="onchange"||_!=="input"&&_!=="textarea"||bt(n.type)?r==="onfocus"?i="onfocusin":r==="onblur"?i="onfocusout":dt.test(i)?i=r:_.indexOf("-")===-1&&ht.test(i)?i=i.replace(mt,"-$&").toLowerCase():c===null&&(c=void 0):r=i="oninput",r==="oninput"&&o[i=r]&&(i="oninputCapture"),o[i]=c}}_=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=q(n.children).forEach(function(f){f.props.selected=o.value.indexOf(f.props.value)!=-1})),_=="select"&&o.defaultValue!=null&&(o.value=q(n.children).forEach(function(f){f.props.selected=o.multiple?o.defaultValue.indexOf(f.props.value)!=-1:o.defaultValue==f.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",Nt)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),t.props=o}(e),e.$$typeof=pt,we&&we(e)};var Ee=u.__r;u.__r=function(e){Ee&&Ee(e),e.__c};var Ce=u.diffed;u.diffed=function(e){Ce&&Ce(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value)};const kt="o",St="p",Lt="q",Pt="r",wt="s",Et="t",Ct="u",xt="v",Ht="w",Tt="x",x={slim:kt,button:St,icon:Lt,icon_temp:Pt,icon_temp2:wt,icon_light:Et,icon_light2:Ct,icon_schedule:xt,title:Ht,subtitle:Tt},k=ut(function({slim:t,icon:n,iconLabel:_,title:o,subtitle:i,className:c=""},r=null){return s("li",{ref:r,className:"event"+(t?` event_slim ${x.slim}`:"")+` ${c}`},s("button",{className:x.button},s("span",{className:`${x.icon} ${x[`icon_${n}`]}`,role:"img","aria-label":_}),s("h4",{className:x.title},o),i&&s("span",{className:x.subtitle},i)))}),At="e",Dt="f",Ot="g",Ut="h",Mt="i",Wt="l",Rt="m",Ft="n",g={dashboard:At,primary:Dt,title:Ot,subtitle:Ut,item:Mt,"item-title":"j","item-details":"k",icon:Wt,icon_rain:Rt,schedule:Ft},Vt=()=>s("section",{className:"section main__general"},s("h2",{className:"section__title section__title-header section__main-title"},"Главное"),s("div",{className:`hero-dashboard ${g.dashboard}`},s("div",{className:g.primary},s("h3",{className:g.title},"Привет, Геннадий!"),s("p",{className:g.subtitle},"Двери и окна закрыты, сигнализация включена."),s("ul",{className:"dashboard-info"},s("li",{className:g.item},s("div",{className:g["item-title"]},"Дома"),s("div",{className:g["item-details"]},"+23")),s("li",{className:g.item},s("div",{className:g["item-title"]},"За окном"),s("div",{className:g["item-details"]},"+19",s("div",{className:`${g.icon} ${g.icon_rain}`,role:"img","aria-label":"Дождь"}))))),s("ul",{className:g.schedule},s(k,{icon:"temp",iconLabel:"Температура",title:"Philips Cooler",subtitle:"Начнет охлаждать в 16:30"}),s(k,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"}),s(k,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})))),Bt=()=>s("section",{className:"section main__scripts"},s("h2",{className:"section__title section__title-header"},"Избранные сценарии"),s("ul",{className:"event-grid"},s(k,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Выключить весь свет в доме и во дворе"}),s(k,{slim:!0,icon:"schedule",iconLabel:"Расписание",title:"Я ухожу"}),s(k,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Включить свет в коридоре"}),s(k,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Набрать горячую ванну",subtitle:"Начнётся в 18:00"}),s(k,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Сделать пол тёплым во всей квартире"}))),w={all:{title:"Все",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]},kitchen:{title:"Кухня",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}]},hall:{title:"Зал",items:[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}]},lights:{title:"Лампочки",items:[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}]},cameras:{title:"Камеры",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]}};for(let e=0;e<6;++e)w.all.items=[...w.all.items,...w.all.items];const ie=Object.keys(w),Ke=it(""),Qe=()=>rt(Ke),It=({children:e})=>{const[t,n]=le(""),_=lt(o=>{n(o)},[]);return s(Ke.Provider,{value:{activeTab:t,switchTab:_}},e)},Xt="_",qt="a",jt="b",J={select:Xt,tab:qt,tab_active:jt},Zt=()=>{const{activeTab:e,switchTab:t}=Qe();return re(()=>{t(new URLSearchParams(location.search).get("tab")||"all")},[]),s("div",{className:"section__title"},s("h2",{className:"section__title-header"},"Избранные устройства"),s("select",{className:`section__select ${J.select}`,defaultValue:"all",onInput:n=>t(n.target.value)},ie.map(n=>s("option",{key:n,value:n},w[n].title))),s("ul",{role:"tablist",className:"section__tabs"},ie.map(n=>s("li",{key:n,role:"tab","aria-selected":n===e?"true":"false",tabIndex:n===e?"0":void 0,className:`section__tab ${J.tab}`+(n===e?` section__tab_active ${J.tab_active}`:""),id:`tab_${n}`,"aria-controls":`panel_${n}`,onClick:()=>t(n)},w[n].title))))},zt="c",Yt="d",xe={visible:zt,hidden:Yt},Gt=e=>{const[t,n]=le(),_=ne(null);return re(()=>{const o=new IntersectionObserver(c=>{const[r]=c;n(r.isIntersecting)},{root:null,rootMargin:"0px",threshold:.01}),{current:i}=_;return i&&o.observe(i),()=>i&&o.unobserve(i)},[_]),s(k,{...e,ref:_,className:`${t?xe.visible:xe.hidden}`})},Kt="y",Qt="z",Jt="A",R={wrapper:Kt,arrow:Qt,panel:Jt},en=()=>{const{activeTab:e}=Qe(),[t,n]=le(!1),_=ne(null),o=ne(null),i=ce(()=>{const r={"":[]};return ie.forEach(f=>{r[f]=w[f].items.map((h,l)=>s(Gt,{key:l,...h}))}),r},[]),c=()=>{const r=_.current.childNodes[0];r&&r.scrollTo({left:r.scrollLeft+400,behavior:"smooth"})};return re(()=>{const f=[...o.current.childNodes].reduce((h,l)=>h+l.clientWidth,0)>_.current.offsetWidth;f!==t&&n(f)}),s("div",{className:`section__panel-wrapper ${R.wrapper}`,ref:_},s("div",{role:"tabpanel",className:`section__panel ${R.panel}`,id:`panel_${e}`,"aria-labelledby":`tab_${e}`},s("ul",{ref:o,className:`section__panel-list ${R["panel-list"]}`},[...i[e]])),t&&s("div",{className:`section__arrow ${R.arrow}`,onClick:c}))},tn=()=>s("section",{className:"section devices"},s(It,null,s(Zt,null),s(en,null))),nn=()=>s(E,null,s("main",{className:"main"},s(Vt,null),s(Bt,null),s(tn,null)));_t(s(nn,null),document.getElementById("root"));
