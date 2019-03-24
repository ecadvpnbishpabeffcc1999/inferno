!function(){"use strict";var l,s,e,u=function(e,t,n,l){this.min=e,this.max=t,this.mean=n,this.last=l},r=function(){function e(e){this.samples=[],this.maxSamples=e,this._i=-1}return e.prototype.addSample=function(e){this._i=(this._i+1)%this.maxSamples,this.samples[this._i]=e},e.prototype.each=function(e){for(var t=this.samples,n=0;n<t.length;n++)e(t[(this._i+1+n)%t.length],n)},e.prototype.calc=function(){var e=this.samples;if(0===e.length)return new u(0,0,0,0);for(var t=e[(this._i+1)%e.length],n=t,l=0,a=0;a<e.length;a++){var i=e[(this._i+1+a)%e.length];i<t&&(t=i),n<i&&(n=i),l+=i}var r=e[this._i],o=l/e.length;return new u(t,n,o,r)},e}(),a=[],i=-1,t=(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),n=function(){function e(e){var t=this;this._sync=function(){t.sync(),t._dirty=false},this.name=e,this.element=document.createElement("div"),this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0",this._dirty=false,this.invalidate()}return e.prototype.invalidate=function(){var e;this._dirty||(this._dirty=true,e=this._sync,a.push(e),-1===i&&requestAnimationFrame(function(e){i=-1;var t=a;a=[];for(var n=0;n<t.length;n++)t[n]()}))},e.prototype.sync=function(){throw new Error("sync method not implemented")},e}();(e=s||(s={}))[e.HideMin=1]="HideMin",e[e.HideMax=2]="HideMax",e[e.HideMean=4]="HideMean",e[e.HideLast=8]="HideLast",e[e.HideGraph=16]="HideGraph",e[e.RoundValues=32]="RoundValues";var o=function(o){function e(e,t,n,l){var a=o.call(this,e)||this;a.flags=t,a.unitName=n,a.samples=l;var i=document.createElement("div");i.style.cssText="text-align: center",i.textContent=a.name;var r=document.createElement("div");return 0==(t&s.HideMin)?(a.minText=document.createElement("div"),r.appendChild(a.minText)):a.minText=null,0==(t&s.HideMax)?(a.maxText=document.createElement("div"),r.appendChild(a.maxText)):a.maxText=null,0==(t&s.HideMean)?(a.meanText=document.createElement("div"),r.appendChild(a.meanText)):a.meanText=null,0==(t&s.HideLast)?(a.lastText=document.createElement("div"),r.appendChild(a.lastText)):a.lastText=null,a.element.appendChild(i),a.element.appendChild(r),0==(t&s.HideGraph)?(a.canvas=document.createElement("canvas"),a.canvas.style.cssText="display: block; padding: 0; margin: 0",a.canvas.width=100,a.canvas.height=30,a.ctx=a.canvas.getContext("2d"),a.element.appendChild(a.canvas)):(a.canvas=null,a.ctx=null),a}return t(e,o),e.prototype.sync=function(){var e,t,n,l,a=this,i=this.samples.calc(),r=30/(1.2*i.max);l=0==(this.flags&s.RoundValues)?(e=i.min.toFixed(2),t=i.max.toFixed(2),n=i.mean.toFixed(2),i.last.toFixed(2)):(e=Math.round(i.min).toString(),t=Math.round(i.max).toString(),n=Math.round(i.mean).toString(),Math.round(i.last).toString()),null!==this.minText&&(this.minText.textContent="min:  "+e+this.unitName),null!==this.maxText&&(this.maxText.textContent="max:  "+t+this.unitName),null!==this.meanText&&(this.meanText.textContent="mean: "+n+this.unitName),null!==this.lastText&&(this.lastText.textContent="last: "+l+this.unitName),null!==this.ctx&&(this.ctx.fillStyle="#010",this.ctx.fillRect(0,0,100,30),this.ctx.fillStyle="#0f0",this.samples.each(function(e,t){a.ctx.fillRect(t,30,1,-e*r)}))},e}(n),c=(function(l){function e(e,t){var n=l.call(this,e)||this;return n.counter=t,n.text=document.createElement("div"),n.element.appendChild(n.text),n}t(e,l),e.prototype.sync=function(){this.text.textContent=this.name+": "+this.counter.value}}(n),null);function f(){c||((c=document.createElement("div")).style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(c))}var d=function(e,t,n){this.data=new r(100),this.widget=new o(e,n,t,this.data),this.startTime=-1},p={},h=Array.isArray;function v(e){var t=typeof e;return"string"==t||"number"==t}function O(e){return g(e)||j(e)}function k(e){return j(e)||false===e||true===e||g(e)}function R(e){return"function"==typeof e}function m(e){return"string"==typeof e}function j(e){return null===e}function g(e){return void 0===e}function y(e){return"object"==typeof e}function C(e,t){var n={};if(e)for(var l in e)n[l]=e[l];if(t)for(var a in t)n[a]=t[a];return n}var q={};function x(e){return e.substr(2).toLowerCase()}function w(e,t){e.appendChild(t)}function G(e,t,n){j(n)?w(e,t):e.insertBefore(t,n)}function $(e,t){e.removeChild(t)}function X(e,t){for(var n,l;e;){if(2033&(n=e.flags))return e.dom;l=e.children,e=8192&n?2===e.childFlags?l:l[t?0:l.length-1]:4&n?l.$LI:l}return null}function F(e,t){var n=e.flags;if(2033&n)$(t,e.dom);else{var l=e.children;if(4&n)F(l.$LI,t);else if(8&n)F(l,t);else if(8192&n)if(2===e.childFlags)F(l,t);else for(var a=0,i=l.length;a<i;++a)F(l[a],t)}}function P(e,t,n){var l=e.flags;if(2033&l)G(t,e.dom,n);else{var a=e.children;if(4&l)P(a.$LI,t,n);else if(8&l)P(a,t,n);else if(8192&l)if(2===e.childFlags)P(a,t,n);else for(var i=0,r=a.length;i<r;++i)P(a[i],t,n)}}function K(e,t,n){return e.constructor.getDerivedStateFromProps?C(n,e.constructor.getDerivedStateFromProps(t,n)):n}var b={componentComparator:null,createVNode:null,renderComplete:null};function z(e,t){e.textContent=t}function T(e,t){return e&&t&&y(e)&&y(t)&&e.event===t.event&&e.data===t.data}var M="$";function S(e,t,n,l,a,i,r,o){this.childFlags=e,this.children=t,this.className=n,this.dom=null,this.flags=l,this.key=void 0===a?null:a,this.props=void 0===i?null:i,this.ref=void 0===r?null:r,this.type=o}function V(e,t,n,l,a,i,r,o){var s=void 0===a?1:a,u=new S(s,l,n,e,r,i,o,t),c=b.createVNode;return R(c)&&c(u),0===s&&function(e,t){var n,l=1;if(k(t))n=t;else if(v(t))l=16,n=t;else if(h(t)){for(var a=t.length,i=0;i<a;++i){var r=t[i];if(k(r)||h(r)){n=n||t.slice(0,i),H(t,n,i,"");break}if(v(r))(n=n||t.slice(0,i)).push(N(r,M+i));else{var o=r.key,s=0<(81920&r.flags),u=j(o),c=m(o)&&o[0]===M;s||u||c?(n=n||t.slice(0,i),(s||c)&&(r=Q(r)),(u||c)&&(r.key=M+i),n.push(r)):n&&n.push(r),r.flags|=65536}}l=0===(n=n||t).length?1:8}else(n=t).flags|=65536,81920&t.flags&&(n=Q(t)),l=2;e.children=n,e.childFlags=l}(u,u.children),u}function N(e,t){return new S(1,O(e)?"":e,null,16,t,null,null,null)}function E(e,t,n){var l=V(8192,8192,null,e,t,null,n,null);switch(l.childFlags){case 1:l.children=J(),l.childFlags=2;break;case 16:l.children=[N(e)],l.childFlags=4}return l}function Q(e){var t=-16385&e.flags,n=e.props;if(14&t&&!j(n)){var l=n;for(var a in n={},l)n[a]=l[a]}return 0==(8192&t)?new S(e.childFlags,e.children,e.className,t,e.key,n,e.ref,e.type):function(e){var t,n=e.children,l=e.childFlags;if(2===l)t=Q(n);else if(12&l){t=[];for(var a=0,i=n.length;a<i;++a)t.push(Q(n[a]))}return E(t,l,e.key)}(e)}function J(){return N("",null)}function H(e,t,n,l){for(var a=e.length;n<a;n++){var i=e[n];if(!k(i)){var r=l+M+n;if(h(i))H(i,t,0,r);else{if(v(i))i=N(i,r);else{var o=i.key,s=m(o)&&o[0]===M;(81920&i.flags||s)&&(i=Q(i)),i.flags|=65536,s?o.substring(0,l.length)!==l&&(i.key=l+o):j(o)?i.key=r:i.key=l+o}t.push(i)}}}}var L="http://www.w3.org/1999/xlink",_="http://www.w3.org/XML/1998/namespace",U={"xlink:actuate":L,"xlink:arcrole":L,"xlink:href":L,"xlink:role":L,"xlink:show":L,"xlink:title":L,"xlink:type":L,"xml:base":_,"xml:lang":_,"xml:space":_};function I(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onSubmit:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var A=I(0),B=I(null),D=I(true);function W(e,t,n){var l,a,i=n.$EV;t?(0===A[e]&&(B[e]=(l=e,a=function(e){var t="onClick"===l||"onDblClick"===l;if(t&&0!==e.button)e.stopPropagation();else{e.isDefaultPrevented=Z,e.isPropagationStopped=ee,e.stopPropagation=Y;var n={dom:document};Object.defineProperty(e,"currentTarget",{configurable:true,get:function(){return n.dom}}),function(e,t,n,l,a){for(var i=t;!j(i);){if(n&&i.disabled)return;var r=i.$EV;if(r){var o=r[l];if(o&&(a.dom=i,o.event?o.event(o.data,e):o(e),e.cancelBubble))return}i=i.parentNode}}(e,e.target,t,l,n)}},document.addEventListener(x(l),a),a)),i||(i=n.$EV=I(null)),i[e]||++A[e],i[e]=t):i&&i[e]&&(0==--A[e]&&(document.removeEventListener(x(e),B[e]),B[e]=null),i[e]=null)}function Y(){this.cancelBubble=true,this.immediatePropagationStopped||this.stopImmediatePropagation()}function Z(){return this.defaultPrevented}function ee(){return this.cancelBubble}function te(e,t,n){if(e[t]){var l=e[t];l.event?l.event(l.data,n):l(n)}else{var a=t.toLowerCase();e[a]&&e[a](n)}}function ne(o,s){var e=function(e){var t=this.$V;if(t){var n=t.props||q,l=t.dom;if(m(o))te(n,o,e);else for(var a=0;a<o.length;++a)te(n,o[a],e);if(R(s)){var i=this.$V,r=i.props||q;s(r,l,false,i)}}};return Object.defineProperty(e,"wrapped",{configurable:false,enumerable:false,value:true,writable:false}),e}function le(e,t,n){var l="$"+t,a=e[l];a&&a[1].wrapped||(a&&(e.removeEventListener.apply(e,a),e[l]=null),R(n)&&(e.addEventListener(t,n),e[l]=[t,n]))}function ae(e){return"checkbox"===e||"radio"===e}var ie=ne("onInput",se),re=ne(["onClick","onChange"],se);function oe(e){e.stopPropagation()}function se(e,t){var n=e.type,l=e.value,a=e.checked,i=e.multiple,r=e.defaultValue,o=!O(l);n&&n!==t.type&&t.setAttribute("type",n),O(i)||i===t.multiple||(t.multiple=i),O(r)||o||(t.defaultValue=r+""),ae(n)?(o&&(t.value=l),O(a)||(t.checked=a)):o&&t.value!==l?(t.defaultValue=l,t.value=l):O(a)||(t.checked=a)}oe.wrapped=true;var ue=ne("onChange",ce);function ce(e,t,n,l){var a=Boolean(e.multiple);O(e.multiple)||a===t.multiple||(t.multiple=a);var i=e.selectedIndex;if(-1===i&&(t.selectedIndex=-1),1!==l.childFlags){var r=e.value;"number"==typeof i&&-1<i&&t.options[i]&&(r=t.options[i].value),n&&O(r)&&(r=e.defaultValue),function e(t,n){if("option"===t.type)s=n,u=(o=t).props||q,(c=o.dom).value=u.value,u.value===s||h(s)&&-1!==s.indexOf(u.value)?c.selected=true:O(s)&&O(u.selected)||(c.selected=u.selected||false);else{var l=t.children,a=t.flags;if(4&a)e(l.$LI,n);else if(8&a)e(l,n);else if(2===t.childFlags)e(l,n);else if(12&t.childFlags)for(var i=0,r=l.length;i<r;++i)e(l[i],n)}var o,s,u,c}(l,r)}}var fe,de,pe=ne("onInput",ve),he=ne("onChange");function ve(e,t,n){var l=e.value,a=t.value;if(O(l)){if(n){var i=e.defaultValue;O(i)||i===a||(t.defaultValue=i,t.value=i)}}else a!==l&&(t.defaultValue=l,t.value=l)}function me(e,t,n,l,a,i){64&e?se(l,n):256&e?ce(l,n,a,t):128&e&&ve(l,n,a),i&&(n.$V=t)}function ge(e){return e.type&&ae(e.type)?!O(e.checked):!O(e.value)}function ye(e){e&&(R(e)?e(null):e.current&&(e.current=null))}function xe(e,t,n){var l,a;e&&(R(e)?(l=t,a=e,n.push(function(){a(l)})):void 0!==e.current&&(e.current=t))}function be(e,t){ke(e),t&&F(e,t)}function ke(e){var t,n=e.flags,l=e.children;if(481&n){t=e.ref;var a=e.props;ye(t);var i=e.childFlags;if(!j(a))for(var r=Object.keys(a),o=0,s=r.length;o<s;o++){var u=r[o];D[u]&&W(u,null,e.dom)}12&i?Ce(l):2===i&&ke(l)}else l&&(4&n?(R(l.componentWillUnmount)&&l.componentWillUnmount(),ye(e.ref),l.$UN=true,ke(l.$LI)):8&n?(!O(t=e.ref)&&R(t.onComponentWillUnmount)&&t.onComponentWillUnmount(X(e,true),e.props||q),ke(l)):1024&n?be(l,e.ref):8192&n&&12&e.childFlags&&Ce(l))}function Ce(e){for(var t=0,n=e.length;t<n;++t)ke(e[t])}function we(e){e.textContent=""}function $e(e,t,n){Ce(n),8192&t.flags?F(t,e):we(e)}function Fe(s,e,t,n,l,a,i){switch(s){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":break;case"autoFocus":n.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":n[s]=!!t;break;case"defaultChecked":case"value":case"volume":if(a&&"value"===s)break;var r=O(t)?"":t;n[s]!==r&&(n[s]=r);break;case"style":!function(e,t,n){if(O(t))n.removeAttribute("style");else{var l,a,i=n.style;if(m(t))i.cssText=t;else if(O(e)||m(e))for(l in t)a=t[l],i.setProperty(l,a);else{for(l in t)(a=t[l])!==e[l]&&i.setProperty(l,a);for(l in e)O(t[l])&&i.removeProperty(l)}}}(e,t,n);break;case"dangerouslySetInnerHTML":var o=e&&e.__html||"",u=t&&t.__html||"";o!==u&&(O(u)||(c=n,f=u,(d=document.createElement("i")).innerHTML=f,d.innerHTML===c.innerHTML)||(j(i)||(12&i.childFlags?Ce(i.children):2===i.childFlags&&ke(i.children),i.children=null,i.childFlags=1),n.innerHTML=u));break;default:D[s]?T(e,t)||W(s,t,n):111===s.charCodeAt(0)&&110===s.charCodeAt(1)?function(e,t,n,l){var a,i,r=x(s);if(y(n)&&!j(n)){var o=n.event;T(t,n)||le(l,r,(a=o,i=n,function(e){a(i.data,e)}))}else le(l,r,n)}(0,e,t,n):O(t)?n.removeAttribute(s):l&&U[s]?n.setAttributeNS(U[s],s,t):n.setAttribute(s,t)}var c,f,d}function Te(e,t,n){var l=Me(e.render(t,e.state,n)),a=n;return R(e.getChildContext)&&(a=C(n,e.getChildContext())),e.$CX=a,l}function Me(e){return k(e)?e=J():v(e)?e=N(e,null):h(e)?e=E(e,0,null):16384&e.flags&&(e=Q(e)),e}function Se(e,t,n,l,a,i){var r,o,s,u,c,f,d,p,h,v,m,g,y,x,b,k,C,w,$,F,T,M,S,P,V,N,E,H,L,_,U,I,A,B,D,W=e.flags|=16384;481&W?function(e,t,n,l,a,i){var r=e.flags,o=e.props,s=e.className,u=e.ref,c=e.children,f=e.childFlags;l=l||0<(32&r);var d,p=(d=e.type,l?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d));if(e.dom=p,O(s)||""===s||(l?p.setAttribute("class",s):p.className=s),16===f)z(p,c);else if(1!==f){var h=l&&"foreignObject"!==e.type;2===f?(16384&c.flags&&(e.children=c=Q(c)),Se(c,p,n,h,null,i)):8!==f&&4!==f||Ve(c,p,n,h,null,i)}j(t)||G(t,p,a),j(o)||function(e,t,n,l,a){var i,r,o,s,u,c,f=false,d=0<(448&t);for(var p in d&&(f=ge(n))&&(r=l,o=n,c=u=s=void 0,64&(i=t)?(c=r,ae(o.type)?(le(c,"change",re),le(c,"click",oe)):le(c,"input",ie)):256&i?le(r,"change",ue):128&i&&(u=o,le(s=r,"input",pe),u.onChange&&le(s,"change",he))),n)Fe(p,null,n[p],l,a,f,null);d&&me(t,e,l,n,true,f)}(e,r,o,p,l),xe(u,p,i)}(e,t,n,l,a,i):4&W?(E=t,H=n,L=l,_=a,U=i,Se((D=function(e,t,n,l,a,i){var r=new t(n,l),o=r.$N=Boolean(t.getDerivedStateFromProps||r.getSnapshotBeforeUpdate);if(r.$SVG=a,r.$L=i,(e.children=r).$BS=false,r.context=l,r.props===q&&(r.props=n),o)r.state=K(r,n,r.state);else if(R(r.componentWillMount)){r.$BR=true,r.componentWillMount();var s=r.$PS;if(!j(s)){var u=r.state;if(j(u))r.state=s;else for(var c in s)u[c]=s[c];r.$PS=null}r.$BR=false}return r.$LI=Te(r,n,l),r}(N=e,N.type,N.props||q,H,L,U)).$LI,E,D.$CX,L,_,U),xe(N.ref,I=D,A=U),R(I.componentDidMount)&&A.push((B=I,function(){B.componentDidMount()}))):8&W?(v=t,m=n,g=l,y=a,x=i,M=(h=e).type,S=h.props||q,P=h.ref,V=Me(32768&h.flags?M(S,P,m):M(S,m)),Se(h.children=V,v,m,g,y,x),b=S,C=h,w=x,O(k=P)||(R(k.onComponentWillMount)&&k.onComponentWillMount(b),R(k.onComponentDidMount)&&w.push(($=k,F=C,T=b,function(){$.onComponentDidMount(X(F,true),T)})))):512&W||16&W?Pe(e,t,a):8192&W?(o=t,s=n,u=l,c=a,f=i,d=(r=e).children,12&(p=r.childFlags)&&0===d.length&&(p=r.childFlags=2,d=r.children=J()),2===p?Se(d,o,c,u,c,f):Ve(d,o,s,u,c,f)):1024&W&&function(e,t,n,l,a){Se(e.children,e.ref,t,false,null,a);var i=J();Pe(i,n,l),e.dom=i.dom}(e,n,t,a,i)}function Pe(e,t,n){var l=e.dom=document.createTextNode(e.children);j(t)||G(t,l,n)}function Ve(e,t,n,l,a,i){for(var r=0,o=e.length;r<o;++r){var s=e[r];16384&s.flags&&(e[r]=s=Q(s)),Se(s,t,n,l,a,i)}}function Ne(e,t,n,l,a,i,r){var o,s,u,c,f,d,p,h,v,m,g,y,x,b=t.flags|=16384;e.flags!==b||e.type!==t.type||e.key!==t.key||0!=(2048&b)?16384&e.flags?(d=t,p=n,h=l,v=a,m=r,ke(f=e),0!=(d.flags&f.flags&2033)?(Se(d,null,h,v,null,m),g=p,y=d.dom,x=f.dom,g.replaceChild(y,x)):(Se(d,p,h,v,X(f,true),m),F(f,p))):Se(t,n,l,a,i,r):481&b?function(e,t,n,l,a,i){var r,o=e.dom,s=e.props,u=t.props,c=false,f=false;if(t.dom=o,l=l||0<(32&a),s!==u){var d=s||q;if((r=u||q)!==q)for(var p in(c=0<(448&a))&&(f=ge(r)),r){var h=d[p],v=r[p];h!==v&&Fe(p,h,v,o,l,f,e)}if(d!==q)for(var m in d)O(r[m])&&!O(d[m])&&Fe(m,d[m],null,o,l,f,e)}var g,y,x=t.children,b=t.className;e.className!==b&&(O(b)?o.removeAttribute("class"):l?o.setAttribute("class",b):o.className=b),4096&a?(y=x,(g=o).textContent!==y&&(g.textContent=y)):Ee(e.childFlags,t.childFlags,e.children,x,o,n,l&&"foreignObject"!==t.type,null,e,i),c&&me(a,t,o,r,false,f);var k=t.ref,C=e.ref;C!==k&&(ye(C),xe(k,o,i))}(e,t,l,a,b,r):4&b?function(e,t,n,l,a,i,r){var o=t.children=e.children;if(!j(o)){o.$L=r;var s=t.props||q,u=t.ref,c=e.ref,f=o.state;if(!o.$N){if(R(o.componentWillReceiveProps)){if(o.$BR=true,o.componentWillReceiveProps(s,l),o.$UN)return;o.$BR=false}j(o.$PS)||(f=C(f,o.$PS),o.$PS=null)}(function(e,t,n,l,a,i,r,o,s){var u,c,f,d,p=e.state,h=e.props,v=Boolean(e.$N),m=R(e.shouldComponentUpdate);if(v&&(t=K(e,n,t!==p?C(p,t):t)),!m||m&&e.shouldComponentUpdate(n,t,a)){!v&&R(e.componentWillUpdate)&&e.componentWillUpdate(n,t,a),e.props=n,e.state=t,e.context=a;var g=null,y=Te(e,n,a);v&&R(e.getSnapshotBeforeUpdate)&&(g=e.getSnapshotBeforeUpdate(h,p)),Ne(e.$LI,y,l,e.$CX,i,o,s),e.$LI=y,R(e.componentDidUpdate)&&(u=e,c=h,f=p,d=g,s.push(function(){u.componentDidUpdate(c,f,d)}))}else e.props=n,e.state=t,e.context=a})(o,f,s,n,l,a,0,i,r),c!==u&&(ye(c),xe(u,o,r))}}(e,t,n,l,a,i,r):8&b?function(e,t,n,l,a,i,r){var o=true,s=t.props||q,u=t.ref,c=e.props,f=!O(u),d=e.children;if(f&&R(u.onComponentShouldUpdate)&&(o=u.onComponentShouldUpdate(c,s)),false!==o){f&&R(u.onComponentWillUpdate)&&u.onComponentWillUpdate(c,s);var p=t.type,h=Me(32768&t.flags?p(s,u,l):p(s,l));Ne(d,h,n,l,a,i,r),t.children=h,f&&R(u.onComponentDidUpdate)&&u.onComponentDidUpdate(c,s)}else t.children=d}(e,t,n,l,a,i,r):16&b?(o=e,u=(s=t).children,c=o.dom,u!==o.children&&(c.nodeValue=u),s.dom=c):512&b?t.dom=e.dom:8192&b?function(e,t,n,l,a,i){var r=e.children,o=t.children,s=e.childFlags,u=t.childFlags,c=null;12&u&&0===o.length&&(u=t.childFlags=2,o=t.children=J());var f=0!=(2&u);if(12&s){var d=r.length;(8&s&&8&u||f||!f&&o.length>d)&&(c=X(r[d-1],false).nextSibling)}Ee(s,u,r,o,n,l,a,c,e,i)}(e,t,n,l,a,r):function(e,t,n,l){var a=e.ref,i=t.ref,r=t.children;if(Ee(e.childFlags,t.childFlags,e.children,r,a,n,false,null,e,l),t.dom=e.dom,a!==i&&!k(r)){var o=r.dom;$(a,o),w(i,o)}}(e,t,l,r)}function Ee(e,t,n,l,a,i,r,o,s,u){switch(e){case 2:switch(t){case 2:Ne(n,l,a,i,r,o,u);break;case 1:be(n,a);break;case 16:ke(n),z(a,l);break;default:v=l,m=a,g=i,y=r,x=u,ke(h=n),Ve(v,m,g,y,X(h,true),x),F(h,m)}break;case 1:switch(t){case 2:Se(l,a,i,r,o,u);break;case 1:break;case 16:z(a,l);break;default:Ve(l,a,i,r,o,u)}break;case 16:switch(t){case 16:p=a,n!==(d=l)&&(""!==n?p.firstChild.nodeValue=d:z(p,d));break;case 2:we(a),Se(l,a,i,r,o,u);break;case 1:we(a);break;default:we(a),Ve(l,a,i,r,o,u)}break;default:switch(t){case 16:Ce(n),z(a,l);break;case 2:$e(a,s,n),Se(l,a,i,r,o,u);break;case 1:$e(a,s,n);break;default:var c=0|n.length,f=0|l.length;0==c?0<f&&Ve(l,a,i,r,o,u):0==f?$e(a,s,n):8===t&&8===e?function(e,t,n,l,a,i,r,o,s,u){var c,f,d=i-1,p=r-1,h=0,v=0,m=e[v],g=t[v];e:{for(;m.key===g.key;){if(16384&g.flags&&(t[v]=g=Q(g)),Ne(m,g,n,l,a,o,u),e[v]=g,d<++v||p<v)break e;m=e[v],g=t[v]}for(m=e[d],g=t[p];m.key===g.key;){if(16384&g.flags&&(t[p]=g=Q(g)),Ne(m,g,n,l,a,o,u),e[d]=g,p--,--d<v||p<v)break e;m=e[d],g=t[p]}}if(d<v){if(v<=p)for(f=(c=p+1)<r?X(t[c],true):o;v<=p;)16384&(g=t[v]).flags&&(t[v]=g=Q(g)),++v,Se(g,n,l,a,f,u)}else if(p<v)for(;v<=d;)be(e[v++],n);else{var y=v,x=v,b=d-v+1,k=p-v+1,C=new Int32Array(k-h+1);h=2+k;var w=b==i,$=false,F=0,T=0;if(r<4||(b|k)<32)for(h=y;h<=d;++h)if(m=e[h],T<k){for(v=x;v<=p;v++)if(g=t[v],m.key===g.key){if(C[v-x]=h+1,w)for(w=false;y<h;)be(e[y++],n);v<F?$=true:F=v,16384&g.flags&&(t[v]=g=Q(g)),Ne(m,g,n,l,a,o,u),++T;break}!w&&p<v&&be(m,n)}else w||be(m,n);else{var M={};for(h=x;h<=p;++h)M[t[h].key]=h;for(h=y;h<=d;++h)if(m=e[h],T<k)if(void 0!==(v=M[m.key])){if(w)for(w=false;y<h;)be(e[y++],n);g=t[v],C[v-x]=h+1,v<F?$=true:F=v,16384&g.flags&&(t[v]=g=Q(g)),Ne(m,g,n,l,a,o,u),++T}else w||be(m,n);else w||be(m,n)}if(w)$e(n,s,e),Ve(t,n,l,a,o,u);else if($){var S=function(e){var t=0,n=0,l=0,a=0,i=0,r=0,o=0,s=e.length;for(He<s&&(fe=new Int32Array(He=s),de=new Int32Array(s));n<s;++n)if(0!==(t=e[n])){if(e[l=fe[a]]<t){de[n]=l,fe[++a]=n;continue}for(i=0,r=a;i<r;)e[fe[o=i+r>>1]]<t?i=o+1:r=o;t<e[fe[i]]&&(0<i&&(de[n]=fe[i-1]),fe[i]=n)}i=n=a+1;var u=new Int32Array(i);for(r=fe[i-1];0<i--;)u[i]=r,r=de[r];for(;0<n--;)fe[n]=0;return u}(C);for(v=S.length-1,h=k-1;0<=h;h--)0===C[h]?(16384&(g=t[F=h+x]).flags&&(t[F]=g=Q(g)),Se(g,n,l,a,(c=F+1)<r?X(t[c],true):o,u)):v<0||h!==S[v]?P(g=t[F=h+x],n,(c=F+1)<r?X(t[c],true):o):v--}else if(T!==k)for(h=k-1;0<=h;h--)0===C[h]&&(16384&(g=t[F=h+x]).flags&&(t[F]=g=Q(g)),Se(g,n,l,a,(c=F+1)<r?X(t[c],true):o,u))}}(n,l,a,i,r,c,f,o,s,u):function(e,t,n,l,a,i,r,o,s){for(var u,c,f=r<i?r:i,d=0;d<f;++d)u=t[d],c=e[d],16384&u.flags&&(u=t[d]=Q(u)),Ne(c,u,n,l,a,o,s),e[d]=u;if(i<r)for(d=f;d<r;++d)16384&(u=t[d]).flags&&(u=t[d]=Q(u)),Se(u,n,l,a,o,s);else if(r<i)for(d=f;d<i;++d)be(e[d],n)}(n,l,a,i,r,c,f,o,u)}}var d,p,h,v,m,g,y,x}var He=0;"undefined"!=typeof document&&(document.body,Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!=typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout.bind(window);var Le=document.getElementById("app");!function(e){void 0===e&&(e=s.HideMin|s.HideMax|s.HideMean|s.RoundValues),f();var n=new r(100),l=new o("FPS",e,"",n);c.appendChild(l.element);var a=0,i=60;requestAnimationFrame(function e(t){0<a&&(i+=2/121*(1e3/(t-a)-i)),a=t,n.addSample(i),l.invalidate(),requestAnimationFrame(e)})}(),function(e){if(void 0===e&&(e=s.HideMin|s.HideMean),f(),void 0!==performance.memory){var t=new r(100),n=new o("Memory",e,"MB",t);c.appendChild(n.element),function e(){t.addSample(Math.round(performance.memory.usedJSHeapSize/1048576)),n.invalidate(),setTimeout(e,30)}()}}(),function(e,t){void 0===t&&(t=0),f();var n=p[e];void 0===n&&(p[e]=n=new d(e,"ms",t),c.appendChild(n.widget.element))}("view update"),setInterval(function(){var e,t,n,l=ENV.generateData(false).toArray();void 0!==(n=p["view update"])&&(n.startTime=performance.now()),function(e){for(var t=e.length,n=[],l=0;l<t;l++){for(var a=e[l],i=a.lastSample,r=[V(1,"td","dbname",a.dbname,16,null,null,null),V(1,"td","query-count",V(1,"span",i.countClassName,i.nbQueries,16,null,null,null),2,null,null,null)],o=0;o<5;o++){var s=i.topFiveQueries[o];r.push(V(1,"td",s.elapsedClassName,[V(1,"div",null,s.formatElapsed,16,null,null,null),V(1,"div","popover left",[V(1,"div","popover-content",s.query,16,null,null,null),V(1,"div","arrow",null,1,null,null,null)],4,null,null,null)],4,null,null,null))}n.push(V(1,"tr",null,r,4,null,null,null))}var u,c,f,d,p,h,v,m,g;u=V(1,"table","table table-striped",V(1,"tbody",null,n,4,null,null,null),2,null,null,null),void 0===c&&(c=null),void 0===f&&(f=q),d=u,h=c,v=f,m=[],O(g=(p=Le).$V)?O(d)||(16384&d.flags&&(d=Q(d)),Se(d,p,v,false,null,m),g=p.$V=d):O(d)?(be(g,p),p.$V=null):(16384&d.flags&&(d=Q(d)),Ne(g,d,p,v,false,null,m),g=p.$V=d),0<m.length&&function(e){for(var t;void 0!==(t=e.shift());)t()}(m),R(h)&&h(),R(b.renderComplete)&&b.renderComplete(g,p)}(l),e=performance.now(),void 0!==(t=p["view update"])&&-1!==t.startTime&&(t.data.addSample(e-t.startTime),t.widget.invalidate())},0)}();
