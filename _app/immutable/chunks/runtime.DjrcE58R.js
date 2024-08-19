var _t=Array.isArray,ct=Array.from,vt=Object.isFrozen,pt=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,jn=Object.getOwnPropertyDescriptors,ht=Object.prototype,dt=Array.prototype,Yn=Object.getPrototypeOf;const yt=()=>{};function Et(n){return n()}function Un(n){for(var t=0;t<n.length;t++)n[t]()}const g=2,an=4,D=8,fn=16,d=32,W=64,O=128,j=256,h=512,w=1024,N=2048,x=4096,I=8192,Bn=16384,_n=32768,wt=65536,Hn=1<<18,tn=Symbol("$state"),mt=Symbol("");function cn(n){return n===this.v}function $n(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function vn(n){return!$n(n,this.v)}function Gn(n){throw new Error("effect_in_teardown")}function Kn(){throw new Error("effect_in_unowned_derived")}function zn(n){throw new Error("effect_orphan")}function Vn(){throw new Error("effect_update_depth_exceeded")}function Tt(){throw new Error("hydration_failed")}function gt(n){throw new Error("props_invalid_value")}function Zn(){throw new Error("state_unsafe_mutation")}function pn(n){return{f:0,v:n,reactions:null,equals:cn,version:0}}function At(n){var r;const t=pn(n);return t.equals=vn,_!==null&&_.l!==null&&((r=_.l).s??(r.s=[])).push(t),t}function Ot(n,t){return i!==null&&V()&&i.f&g&&Zn(),n.equals(t)||(n.v=t,n.version=Cn(),hn(n,w),V()&&f!==null&&f.f&h&&!(f.f&d)&&(c!==null&&c.includes(n)?(p(f,w),$(f)):E===null?ut([n]):E.push(n))),t}function hn(n,t){var r=n.reactions;if(r!==null)for(var e=V(),s=r.length,o=0;o<s;o++){var u=r[o],l=u.f;l&w||!e&&u===f||(p(u,t),l&(h|O)&&(l&g?hn(u,N):$(u)))}}const St=1,Rt=2,kt=4,xt=8,Dt=16,Nt=1,It=2,Wn="[",Jn="[!",Qn="]",dn={},Pt=Symbol();function yn(n){console.warn("hydration_mismatch")}let P=!1;function Ct(n){P=n}let y;function Y(n){if(n===null)throw yn(),dn;return y=n}function Xn(){return Y(A(y))}function Ft(n){if(P){if(A(y)!==null)throw yn(),dn;y=n}}function bt(){P&&Xn()}function qt(){for(var n=0,t=y;;){if(t.nodeType===8){var r=t.data;if(r===Qn){if(n===0)return t;n-=1}else(r===Wn||r===Jn)&&(n+=1)}var e=A(t);t.remove(),t=e}}var rn,nt,En,wn;function Lt(){if(rn===void 0){rn=window,nt=document;var n=Element.prototype,t=Node.prototype;En=nn(t,"firstChild").get,wn=nn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__e=void 0,Text.prototype.__t=void 0}}function mn(n=""){return document.createTextNode(n)}function K(n){return En.call(n)}function A(n){return wn.call(n)}function Mt(n){if(!P)return K(n);var t=K(y);return t===null&&(t=y.appendChild(mn())),Y(t),t}function jt(n,t){if(!P){var r=K(n);return r instanceof Comment&&r.data===""?A(r):r}return y}function Yt(n,t=!1){if(!P)return A(n);var r=A(y),e=r.nodeType;if(t&&e!==3){var s=mn();return r==null||r.before(s),Y(s),s}return Y(r),r}function Ut(n){n.textContent=""}function Tn(n){f===null&&i===null&&zn(),i!==null&&i.f&O&&Kn(),J&&Gn()}function en(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function C(n,t,r,e=!0){var s=(n&W)!==0,o=f,u={ctx:_,deps:null,nodes_start:null,nodes_end:null,f:n|w,first:null,fn:t,last:null,next:null,parent:s?null:o,prev:null,teardown:null,transitions:null,version:0};if(r){var l=R;try{sn(!0),H(u),u.f|=Bn}catch(m){throw B(u),m}finally{sn(l)}}else t!==null&&$(u);var a=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null;return!a&&!s&&e&&(o!==null&&en(u,o),i!==null&&i.f&g&&en(u,i)),u}function Bt(n){const t=C(D,null,!1);return p(t,h),t.teardown=n,t}function Ht(n){Tn();var t=f!==null&&(f.f&D)!==0&&_!==null&&!_.m;if(t){var r=_;(r.e??(r.e=[])).push(n)}else{var e=gn(n);return e}}function $t(n){return Tn(),An(n)}function Gt(n){const t=C(W,n,!0);return()=>{B(t)}}function gn(n){return C(an,n,!1)}function An(n){return C(D,n,!0)}function Kt(n){return An(n)}function zt(n,t=0){return C(D|fn|t,n,!0)}function Vt(n,t=!0){return C(D|d,n,!0,t)}function On(n){var t=n.teardown;if(t!==null){const r=J,e=i;on(!0),un(null);try{t.call(null)}finally{on(r),un(e)}}}function B(n,t=!0){var r=!1;if((t||n.f&Hn)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var o=e===s?null:A(e);e.remove(),e=o}r=!0}Q(n,t&&!r),q(n,0),p(n,I);var u=n.transitions;if(u!==null)for(const a of u)a.stop();On(n);var l=n.parent;l!==null&&n.f&d&&l.first!==null&&Sn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function Sn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Zt(n,t){var r=[];Rn(n,r,!0),tt(r,()=>{B(n),t&&t()})}function tt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Rn(n,t,r){if(!(n.f&x)){if(n.f^=x,n.transitions!==null)for(const u of n.transitions)(u.is_global||r)&&t.push(u);for(var e=n.first;e!==null;){var s=e.next,o=(e.f&_n)!==0||(e.f&d)!==0;Rn(e,t,o?r:!1),e=s}}}function Wt(n){kn(n,!0)}function kn(n,t){if(n.f&x){n.f^=x,L(n)&&H(n);for(var r=n.first;r!==null;){var e=r.next,s=(r.f&_n)!==0||(r.f&d)!==0;kn(r,s?t:!1),r=e}if(n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&o.in()}}let U=!1,z=[];function xn(){U=!1;const n=z.slice();z=[],Un(n)}function Jt(n){U||(U=!0,queueMicrotask(xn)),z.push(n)}function rt(){U&&xn()}function et(n){let t=g|w;f===null&&(t|=O);const r={deps:null,deriveds:null,equals:cn,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(i!==null&&i.f&g){var e=i;e.deriveds===null?e.deriveds=[r]:e.deriveds.push(r)}return r}function Qt(n){const t=et(n);return t.equals=vn,t}function Dn(n){Q(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)st(t[r])}}function Nn(n){var t;Dn(n),t=Fn(n);var r=(S||n.f&O)&&n.deps!==null?N:h;p(n,r),n.equals(t)||(n.v=t,n.version=Cn())}function st(n){Dn(n),q(n,0),p(n,I),n.first=n.last=n.deps=n.reactions=n.fn=null}const In=0,ot=1;let M=In,b=!1,R=!1,J=!1;function sn(n){R=n}function on(n){J=n}let T=[],k=0,i=null;function un(n){i=n}let f=null,c=null,v=0,E=null;function ut(n){E=n}let Pn=0,S=!1,_=null;function Cn(){return Pn++}function V(){return _!==null&&_.l===null}function L(n){var u,l;var t=n.f;if(t&w)return!0;if(t&N){var r=n.deps,e=(t&O)!==0;if(r!==null){var s;if(t&j){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(n);n.f^=j}for(s=0;s<r.length;s++){var o=r[s];if(L(o)&&Nn(o),o.version>n.version)return!0;e&&!S&&!((l=o==null?void 0:o.reactions)!=null&&l.includes(n))&&(o.reactions??(o.reactions=[])).push(n)}}e||p(n,h)}return!1}function lt(n,t,r){throw n}function Fn(n){var m;var t=c,r=v,e=E,s=i,o=S;c=null,v=0,E=null,i=n.f&(d|W)?null:n,S=!R&&(n.f&O)!==0;try{var u=(0,n.fn)(),l=n.deps;if(c!==null){var a;if(q(n,v),l!==null&&v>0)for(l.length=v+c.length,a=0;a<c.length;a++)l[v+a]=c[a];else n.deps=l=c;if(!S)for(a=v;a<l.length;a++)((m=l[a]).reactions??(m.reactions=[])).push(n)}else l!==null&&v<l.length&&(q(n,v),l.length=v);return u}finally{c=t,v=r,E=e,i=s,S=o}}function at(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&g&&(p(t,N),t.f&(O|j)||(t.f^=j),q(t,0))}function q(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)at(n,r[e])}function Q(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;B(r,t),r=e}}function H(n){var t=n.f;if(!(t&I)){p(n,h);var r=n.ctx,e=f,s=_;f=n,_=r;try{t&fn||Q(n),On(n);var o=Fn(n);n.teardown=typeof o=="function"?o:null,n.version=Pn}catch(u){lt(u)}finally{f=e,_=s}}}function bn(){k>1e3&&(k=0,Vn()),k++}function qn(n){var t=n.length;if(t!==0){bn();var r=R;R=!0;try{for(var e=0;e<t;e++){var s=n[e];if(s.first===null&&!(s.f&d))ln([s]);else{var o=[];Ln(s,o),ln(o)}}}finally{R=r}}}function ln(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(I|x))&&L(e)&&(H(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Sn(e):e.fn=null))}}function it(){if(b=!1,k>1001)return;const n=T;T=[],qn(n),b||(k=0)}function $(n){M===In&&(b||(b=!0,queueMicrotask(it)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&d){if(!(r&h))return;p(t,N)}}T.push(t)}function Ln(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,o=(s&(I|x))===0,u=(s&d)!==0,l=(s&h)!==0,a=r.first;if(o&&(!u||!l)){if(u&&p(r,h),s&D){if(!u&&L(r)&&(H(r),a=r.first),a!==null){r=a;continue}}else if(s&an)if(u||l){if(a!==null){r=a;continue}}else e.push(r)}var m=r.next;if(m===null){let F=r.parent;for(;F!==null;){if(n===F)break n;var X=F.next;if(X!==null){r=X;continue n}F=F.parent}}r=m}for(var G=0;G<e.length;G++)a=e[G],t.push(a),Ln(a,t)}function Mn(n){var t=M,r=T;try{bn();const s=[];M=ot,T=s,b=!1,qn(r);var e=n==null?void 0:n();return rt(),(T.length>0||s.length>0)&&Mn(),k=0,e}finally{M=t,T=r}}async function Xt(){await Promise.resolve(),Mn()}function nr(n){var t=n.f;if(t&I)return n.v;if(i!==null){var r=i.deps;c===null&&r!==null&&r[v]===n?v++:c===null?c=[n]:c.push(n),E!==null&&f!==null&&f.f&h&&!(f.f&d)&&E.includes(n)&&(p(f,w),$(f))}if(t&g){var e=n;L(e)&&Nn(e)}return n.v}function tr(n){const t=i;try{return i=null,n()}finally{i=t}}const ft=~(w|N|h);function p(n,t){n.f=n.f&ft|t}function rr(n,t=!1,r){_={p:_,c:null,e:null,m:!1,s:n,x:null,l:null},t||(_.l={s:null,u:null,r1:[],r2:pn(!1)})}function er(n){const t=_;if(t!==null){const e=t.e;if(e!==null){t.e=null;for(var r=0;r<e.length;r++)gn(e[r])}_=t.p,t.m=!0}return{}}function sr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(tn in n)Z(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&tn in r&&Z(r)}}}function Z(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{Z(n[e],t)}catch{}const r=Yn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=jn(r);for(let s in e){const o=e[s].get;if(o)try{o.call(n)}catch{}}}}}export{nt as $,$t as A,Ht as B,Un as C,tr as D,Et as E,nr as F,sr as G,Hn as H,yt as I,Bt as J,At as K,Ot as L,jt as M,Mt as N,Yt as O,Kt as P,Ft as Q,mt as R,bt as S,Nt as T,vt as U,tn as V,ht as W,dt as X,pn as Y,Pt as Z,nn as _,Wn as a,Yn as a0,Jn as a1,qt as a2,Wt as a3,Zt as a4,_n as a5,gn as a6,An as a7,Jt as a8,gt as a9,wt as aa,kt as ab,vn as ac,St as ad,Rt as ae,xt as af,et as ag,Qt as ah,Dt as ai,Mn as aj,Xt as ak,$n as al,zt as b,mn as c,A as d,Y as e,y as f,K as g,P as h,pt as i,_t as j,Lt as k,dn as l,Xn as m,Qn as n,yn as o,Tt as p,Ut as q,ct as r,Ct as s,Gt as t,Vt as u,rr as v,f as w,er as x,_ as y,It as z};
