import{n as N}from"./glsl-Cj7KC756.js";import{nH as Ve,nI as ze,an as Fe,nJ as Ue,bV as Ge,aI as Ee,nK as je,nL as He,nM as Le,nN as _e,cD as Be,nO as ke,nP as qe,nQ as Ze,nR as Ye,nS as Xe,nT as Ke,hy as Je,eD as se,am as C,ek as j,aO as D,aY as W,en as F,em as z,aM as B,eB as Qe,ap as xe,ao as We,aK as Se}from"./index-N-ot2pEg.js";import{e as et}from"./mat4f64-q_b6UJoq.js";import{u as tt}from"./meshVertexSpaceUtils-DnflTwUC.js";import{e as ge}from"./projectVectorToVector-DdkeyFf7.js";import{o as nt,x as ot}from"./hydratedFeatures-DQ69sAUW.js";import{r as I,t as ye,n as U}from"./vec3f32-WCVSSNPR.js";import{n as G,p as E,Y as be,Z as Ae,s as rt,_ as at,$ as st,o as Te,g as lt,q as we,a0 as it,a1 as ct,w as ut,j as ft,a2 as ht,l as pt}from"./OutputColorHighlightOID.glsl-_rAULoYK.js";import{A as dt,U as Ie}from"./Indices-DSJELh73.js";import{M as mt,l as wt,q as Ot}from"./plane-Cwuf2xQH.js";import{k as gt}from"./sphere-mdBf7qLi.js";import{t as S}from"./orientedBoundingBox-C7Zy7i52.js";import{s as ee}from"./BufferView-YkBrB5u0.js";import{e as x}from"./VertexAttribute-BfkzOMLV.js";function Jt(t){t.code.add(N`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),t.code.add(N`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),t.code.add(N`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}function Qt(t,n){if(t.type==="point")return _(t,n,!1);if(nt(t))switch(t.type){case"extent":return _(t.center,n,!1);case"polygon":return _(t.centroid,n,!1);case"polyline":return _(Pe(t),n,!0);case"mesh":return _(tt(t.vertexSpace,t.spatialReference)??t.extent.center,n,!1);case"multipoint":return}else switch(t.type){case"extent":return _(vt(t),n,!0);case"polygon":return _(xt(t),n,!0);case"polyline":return _(Pe(t),n,!0);case"multipoint":return}}function Pe(t){const n=t.paths[0];if(!n||n.length===0)return null;const o=He(n,Le(n)/2);return ge(o[0],o[1],o[2],t.spatialReference)}function vt(t){return ge(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),t.zmin!=null&&t.zmax!=null&&isFinite(t.zmin)&&isFinite(t.zmax)?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function xt(t){const n=t.rings[0];if(!n||n.length===0)return null;const o=_e(t.rings,!!t.hasZ);return ge(o[0],o[1],o[2],t.spatialReference)}function _(t,n,o){const e=o?t:ot(t);return n&&t?je(t,e,n)?e:null:e}function Wt(t,n,o,e=0){if(t){n||(n=Ge());const r=t;let f=.5*r.width*(o-1),a=.5*r.height*(o-1);return r.width<1e-7*r.height?f+=a/20:r.height<1e-7*r.width&&(a+=f/20),Ee(n,r.xmin-f-e,r.ymin-a-e,r.xmax+f+e,r.ymax+a+e),n}return null}function en(t,n,o=null){const e=ze(Ue);return t!=null&&(e[0]=t[0],e[1]=t[1],e[2]=t[2]),n!=null?e[3]=n:t!=null&&t.length>3&&(e[3]=t[3]),o&&(e[0]*=o,e[1]*=o,e[2]*=o,e[3]*=o),e}function tn(t=Ve,n,o,e=1){const r=new Array(3);if(n==null||o==null)r[0]=1,r[1]=1,r[2]=1;else{let f,a=0;for(let s=2;s>=0;s--){const i=t[s],l=i!=null,c=s===0&&!f&&!l,h=o[s];let y;i==="symbol-value"||c?y=h!==0?n[s]/h:1:l&&i!=="proportional"&&isFinite(i)&&(y=h!==0?i/h:1),y!=null&&(r[s]=y,f=y,a=Math.max(a,Math.abs(y)))}for(let s=2;s>=0;s--)r[s]==null?r[s]=f:r[s]===0&&(r[s]=.001*a)}for(let f=2;f>=0;f--)r[f]/=e;return Fe(r)}function yt(t){return t.isPrimitive!=null}function nn(t){return At(yt(t)?[t.width,t.depth,t.height]:t)?null:"Symbol sizes may not be negative values"}function At(t){const n=o=>o==null||o>=0;return Array.isArray(t)?t.every(n):n(t)}function on(t,n,o,e=et()){return t&&Ye(e,e,-t/180*Math.PI),n&&Xe(e,e,n/180*Math.PI),o&&Ke(e,e,o/180*Math.PI),e}function rn(t,n,o){if(o.minDemResolution!=null)return o.minDemResolution;const e=Be(n),r=ke(t)*e,f=qe(t)*e,a=Ze(t)*(n.isGeographic?1:e);return r===0&&f===0&&a===0?o.minDemResolutionForPoints:.01*Math.max(r,f,a)}var Oe;(function(t){function n(a,s){const i=a[s],l=a[s+1],c=a[s+2];return Math.sqrt(i*i+l*l+c*c)}function o(a,s){const i=a[s],l=a[s+1],c=a[s+2],h=1/Math.sqrt(i*i+l*l+c*c);a[s]*=h,a[s+1]*=h,a[s+2]*=h}function e(a,s,i){a[s]*=i,a[s+1]*=i,a[s+2]*=i}function r(a,s,i,l,c,h=s){(c=c||a)[h]=a[s]+i[l],c[h+1]=a[s+1]+i[l+1],c[h+2]=a[s+2]+i[l+2]}function f(a,s,i,l,c,h=s){(c=c||a)[h]=a[s]-i[l],c[h+1]=a[s+1]-i[l+1],c[h+2]=a[s+2]-i[l+2]}t.length=n,t.normalize=o,t.scale=e,t.add=r,t.subtract=f})(Oe||(Oe={}));const q=Oe,he=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Pt=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Mt=[0,0,1,0,1,1,0,1],$t=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Re=new Array(36);for(let t=0;t<6;t++)for(let n=0;n<6;n++)Re[6*t+n]=t;const k=new Array(36);for(let t=0;t<6;t++)k[6*t]=0,k[6*t+1]=1,k[6*t+2]=2,k[6*t+3]=2,k[6*t+4]=3,k[6*t+5]=0;function an(t,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(24);for(let e=0;e<8;e++)o[3*e]=he[e][0]*n[0],o[3*e+1]=he[e][1]*n[1],o[3*e+2]=he[e][2]*n[2];return new E(t,[[x.POSITION,new S(o,$t,3,!0)],[x.NORMAL,new S(Pt,Re,3)],[x.UV0,new S(Mt,k,2)]])}const pe=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],St=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],bt=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Tt=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function sn(t,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(18);for(let e=0;e<6;e++)o[3*e]=pe[e][0]*n[0],o[3*e+1]=pe[e][1]*n[1],o[3*e+2]=pe[e][2]*n[2];return new E(t,[[x.POSITION,new S(o,bt,3,!0)],[x.NORMAL,new S(St,Tt,3)]])}const ne=I(-.5,0,-.5),oe=I(.5,0,-.5),re=I(0,0,.5),ae=I(0,.5,0),Z=U(),Y=U(),K=U(),J=U(),Q=U();j(Z,ne,ae),j(Y,ne,oe),B(K,Z,Y),D(K,K),j(Z,oe,ae),j(Y,oe,re),B(J,Z,Y),D(J,J),j(Z,re,ae),j(Y,re,ne),B(Q,Z,Y),D(Q,Q);const de=[ne,oe,re,ae],It=[0,-1,0,K[0],K[1],K[2],J[0],J[1],J[2],Q[0],Q[1],Q[2]],Rt=[0,1,2,3,1,0,3,2,1,3,0,2],Ct=[0,0,0,1,1,1,2,2,2,3,3,3];function ln(t,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(12);for(let e=0;e<4;e++)o[3*e]=de[e][0]*n[0],o[3*e+1]=de[e][1]*n[1],o[3*e+2]=de[e][2]*n[2];return new E(t,[[x.POSITION,new S(o,Rt,3,!0)],[x.NORMAL,new S(It,Ct,3)]])}function cn(t,n,o,e,r={uv:!0}){const f=-Math.PI,a=2*Math.PI,s=-Math.PI/2,i=Math.PI,l=Math.max(3,Math.floor(o)),c=Math.max(2,Math.floor(e)),h=(l+1)*(c+1),y=G(3*h),P=G(3*h),A=G(2*h),m=[];let p=0;for(let O=0;O<=c;O++){const T=[],u=O/c,M=s+u*i,$=Math.cos(M);for(let R=0;R<=l;R++){const H=R/l,g=f+H*a,V=Math.cos(g)*$,b=Math.sin(M),te=-Math.sin(g)*$;y[3*p]=V*n,y[3*p+1]=b*n,y[3*p+2]=te*n,P[3*p]=V,P[3*p+1]=b,P[3*p+2]=te,A[2*p]=H,A[2*p+1]=u,T.push(p),++p}m.push(T)}const d=new Array;for(let O=0;O<c;O++)for(let T=0;T<l;T++){const u=m[O][T],M=m[O][T+1],$=m[O+1][T+1],R=m[O+1][T];O===0?(d.push(u),d.push($),d.push(R)):O===c-1?(d.push(u),d.push(M),d.push($)):(d.push(u),d.push(M),d.push($),d.push($),d.push(R),d.push(u))}const w=[[x.POSITION,new S(y,d,3,!0)],[x.NORMAL,new S(P,d,3,!0)]];return r.uv&&w.push([x.UV0,new S(A,d,2,!0)]),r.offset&&(w[0][0]=x.OFFSET,w.push([x.POSITION,new S(Float64Array.from(r.offset),Ie(d.length),3,!0)])),new E(t,w)}function un(t,n,o,e){const r=Nt(n,o);return new E(t,r)}function Nt(t,n,o){let e,r;e=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],r=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let i=0;i<e.length;i+=3)q.scale(e,i,t/q.length(e,i));let f={};function a(i,l){i>l&&([i,l]=[l,i]);const c=i.toString()+"."+l.toString();if(f[c])return f[c];let h=e.length;return e.length+=3,q.add(e,3*i,e,3*l,e,h),q.scale(e,h,t/q.length(e,h)),h/=3,f[c]=h,h}for(let i=0;i<n;i++){const l=r.length,c=new Array(4*l);for(let h=0;h<l;h+=3){const y=r[h],P=r[h+1],A=r[h+2],m=a(y,P),p=a(P,A),d=a(A,y),w=4*h;c[w]=y,c[w+1]=m,c[w+2]=d,c[w+3]=P,c[w+4]=p,c[w+5]=m,c[w+6]=A,c[w+7]=d,c[w+8]=p,c[w+9]=m,c[w+10]=p,c[w+11]=d}r=c,f={}}const s=Ae(e);for(let i=0;i<s.length;i+=3)q.normalize(s,i);return[[x.POSITION,new S(Ae(e),r,3,!0)],[x.NORMAL,new S(s,r,3,!0)]]}function fn(t,{normal:n,position:o,color:e,rotation:r,size:f,centerOffsetAndDistance:a,uvi:s,featureAttribute:i,objectAndLayerIdColor:l=null}={}){const c=o?xe(o):C(),h=n?xe(n):We(0,0,1),y=e?[255*e[0],255*e[1],255*e[2],e.length>3?255*e[3]:255]:[255,255,255,255],P=f!=null&&f.length===2?f:[1,1],A=r!=null?[r]:[0],m=Ie(1),p=[[x.POSITION,new S(c,m,3,!0)],[x.NORMAL,new S(h,m,3,!0)],[x.COLOR,new S(y,m,4,!0)],[x.SIZE,new S(P,m,2)],[x.ROTATION,new S(A,m,1,!0)]];if(s&&p.push([x.UVI,new S(s,m,s.length)]),a!=null){const d=[a[0],a[1],a[2],a[3]];p.push([x.CENTEROFFSETANDDISTANCE,new S(d,m,4)])}if(i){const d=[i[0],i[1],i[2],i[3]];p.push([x.FEATUREATTRIBUTE,new S(d,m,4)])}return new E(t,p,null,be.Point,l)}function Dt(t,n,o,e,r=!0,f=!0){let a=0;const s=n,i=t;let l=I(0,a,0),c=I(0,a+i,0),h=I(0,-1,0),y=I(0,1,0);e&&(a=i,c=I(0,0,0),l=I(0,a,0),h=I(0,1,0),y=I(0,-1,0));const P=[c,l],A=[h,y],m=o+2,p=Math.sqrt(i*i+s*s);if(e)for(let u=o-1;u>=0;u--){const M=u*(2*Math.PI/o),$=I(Math.cos(M)*s,a,Math.sin(M)*s);P.push($);const R=I(i*Math.cos(M)/p,-s/p,i*Math.sin(M)/p);A.push(R)}else for(let u=0;u<o;u++){const M=u*(2*Math.PI/o),$=I(Math.cos(M)*s,a,Math.sin(M)*s);P.push($);const R=I(i*Math.cos(M)/p,s/p,i*Math.sin(M)/p);A.push(R)}const d=new Array,w=new Array;if(r){for(let u=3;u<P.length;u++)d.push(1),d.push(u-1),d.push(u),w.push(0),w.push(0),w.push(0);d.push(P.length-1),d.push(2),d.push(1),w.push(0),w.push(0),w.push(0)}if(f){for(let u=3;u<P.length;u++)d.push(u),d.push(u-1),d.push(0),w.push(u),w.push(u-1),w.push(1);d.push(0),d.push(2),d.push(P.length-1),w.push(1),w.push(2),w.push(A.length-1)}const O=G(3*m);for(let u=0;u<m;u++)O[3*u]=P[u][0],O[3*u+1]=P[u][1],O[3*u+2]=P[u][2];const T=G(3*m);for(let u=0;u<m;u++)T[3*u]=A[u][0],T[3*u+1]=A[u][1],T[3*u+2]=A[u][2];return[[x.POSITION,new S(O,d,3,!0)],[x.NORMAL,new S(T,w,3,!0)]]}function hn(t,n,o,e,r,f=!0,a=!0){return new E(t,Dt(n,o,e,r,f,a))}function pn(t,n,o,e,r,f,a){const s=r?ye(r):I(1,0,0),i=f?ye(f):I(0,0,0);a??=!0;const l=U();D(l,s);const c=U();F(c,l,Math.abs(n));const h=U();F(h,c,-.5),z(h,h,i);const y=I(0,1,0);Math.abs(1-Se(l,y))<.2&&se(y,0,0,1);const P=U();B(P,l,y),D(P,P),B(y,P,l);const A=2*e+(a?2:0),m=e+(a?2:0),p=G(3*A),d=G(3*m),w=G(2*A),O=new Array(3*e*(a?4:2)),T=new Array(3*e*(a?4:2));a&&(p[3*(A-2)]=h[0],p[3*(A-2)+1]=h[1],p[3*(A-2)+2]=h[2],w[2*(A-2)]=0,w[2*(A-2)+1]=0,p[3*(A-1)]=p[3*(A-2)]+c[0],p[3*(A-1)+1]=p[3*(A-2)+1]+c[1],p[3*(A-1)+2]=p[3*(A-2)+2]+c[2],w[2*(A-1)]=1,w[2*(A-1)+1]=1,d[3*(m-2)]=-l[0],d[3*(m-2)+1]=-l[1],d[3*(m-2)+2]=-l[2],d[3*(m-1)]=l[0],d[3*(m-1)+1]=l[1],d[3*(m-1)+2]=l[2]);const u=(g,V,b)=>{O[g]=V,T[g]=b};let M=0;const $=U(),R=U();for(let g=0;g<e;g++){const V=g*(2*Math.PI/e);F($,y,Math.sin(V)),F(R,P,Math.cos(V)),z($,$,R),d[3*g]=$[0],d[3*g+1]=$[1],d[3*g+2]=$[2],F($,$,o),z($,$,h),p[3*g]=$[0],p[3*g+1]=$[1],p[3*g+2]=$[2],w[2*g]=g/e,w[2*g+1]=0,p[3*(g+e)]=p[3*g]+c[0],p[3*(g+e)+1]=p[3*g+1]+c[1],p[3*(g+e)+2]=p[3*g+2]+c[2],w[2*(g+e)]=g/e,w[2*g+1]=1;const b=(g+1)%e;u(M++,g,g),u(M++,g+e,g),u(M++,b,b),u(M++,b,b),u(M++,g+e,g),u(M++,b+e,b)}if(a){for(let g=0;g<e;g++){const V=(g+1)%e;u(M++,A-2,m-2),u(M++,g,m-2),u(M++,V,m-2)}for(let g=0;g<e;g++){const V=(g+1)%e;u(M++,g+e,m-1),u(M++,A-1,m-1),u(M++,V+e,m-1)}}const H=[[x.POSITION,new S(p,O,3,!0)],[x.NORMAL,new S(d,T,3,!0)],[x.UV0,new S(w,O,2,!0)]];return new E(t,H)}function dn(t,n,o,e,r,f){e=e||10,r=r==null||r,ee(n.length>1);const a=[[0,0,0]],s=[],i=[];for(let l=0;l<e;l++){s.push([0,-l-1,-(l+1)%e-1]);const c=l/e*2*Math.PI;i.push([Math.cos(c)*o,Math.sin(c)*o])}return Vt(t,i,n,a,s,r,f)}function Vt(t,n,o,e,r,f,a=I(0,0,0)){const s=n.length,i=G(o.length*s*3+(6*e.length||0)),l=G(o.length*s*3+(e?6:0)),c=new Array,h=new Array;let y=0,P=0;const A=C(),m=C(),p=C(),d=C(),w=C(),O=C(),T=C(),u=C(),M=C(),$=C(),R=C(),H=C(),g=C(),V=mt();se(M,0,1,0),j(m,o[1],o[0]),D(m,m),f?(z(u,o[0],a),D(p,u)):se(p,0,0,1),Me(m,p,M,M,w,p,$e),W(d,p),W(H,w);for(let v=0;v<e.length;v++)F(O,w,e[v][0]),F(u,p,e[v][2]),z(O,O,u),z(O,O,o[0]),i[y++]=O[0],i[y++]=O[1],i[y++]=O[2];l[P++]=-m[0],l[P++]=-m[1],l[P++]=-m[2];for(let v=0;v<r.length;v++)c.push(r[v][0]>0?r[v][0]:-r[v][0]-1+e.length),c.push(r[v][1]>0?r[v][1]:-r[v][1]-1+e.length),c.push(r[v][2]>0?r[v][2]:-r[v][2]-1+e.length),h.push(0),h.push(0),h.push(0);let b=e.length;const te=e.length-1;for(let v=0;v<o.length;v++){let ve=!1;v>0&&(W(A,m),v<o.length-1?(j(m,o[v+1],o[v]),D(m,m)):ve=!0,z($,A,m),D($,$),z(R,o[v-1],d),wt(o[v],$,V),Ot(V,gt(R,A),u)?(j(u,u,o[v]),D(p,u),B(w,$,p),D(w,w)):Me($,d,H,M,w,p,$e),W(d,p),W(H,w)),f&&(z(u,o[v],a),D(g,u));for(let L=0;L<s;L++)if(F(O,w,n[L][0]),F(u,p,n[L][1]),z(O,O,u),D(T,O),l[P++]=T[0],l[P++]=T[1],l[P++]=T[2],z(O,O,o[v]),i[y++]=O[0],i[y++]=O[1],i[y++]=O[2],!ve){const ue=(L+1)%s;c.push(b+L),c.push(b+s+L),c.push(b+ue),c.push(b+ue),c.push(b+s+L),c.push(b+s+ue);for(let fe=0;fe<6;fe++){const De=c.length-6;h.push(c[De+fe]-te)}}b+=s}const Ce=o[o.length-1];for(let v=0;v<e.length;v++)F(O,w,e[v][0]),F(u,p,e[v][1]),z(O,O,u),z(O,O,Ce),i[y++]=O[0],i[y++]=O[1],i[y++]=O[2];const ie=P/3;l[P++]=m[0],l[P++]=m[1],l[P++]=m[2];const ce=b-s;for(let v=0;v<r.length;v++)c.push(r[v][0]>=0?b+r[v][0]:-r[v][0]-1+ce),c.push(r[v][2]>=0?b+r[v][2]:-r[v][2]-1+ce),c.push(r[v][1]>=0?b+r[v][1]:-r[v][1]-1+ce),h.push(ie),h.push(ie),h.push(ie);const Ne=[[x.POSITION,new S(i,c,3,!0)],[x.NORMAL,new S(l,h,3,!0)]];return new E(t,Ne)}function mn(t,n,o,e){ee(n.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),ee(n[0].length===3,"createPolylineGeometry(): malformed vertex"),ee(o==null||o.length===n.length,"createPolylineGeometry: need same number of points and normals"),ee(o==null||o[0].length===3,"createPolylineGeometry(): malformed normal");const r=Je(3*n.length),f=new Array(2*(n.length-1));let a=0,s=0;for(let l=0;l<n.length;l++){for(let c=0;c<3;c++)r[a++]=n[l][c];l>0&&(f[s++]=l-1,f[s++]=l)}const i=[[x.POSITION,new S(r,f,3,!0)]];if(o){const l=G(3*o.length);let c=0;for(let h=0;h<n.length;h++)for(let y=0;y<3;y++)l[c++]=o[h][y];i.push([x.NORMAL,new S(l,f,3,!0)])}return e&&i.push([x.COLOR,new S(e,dt(e.length/4),4)]),new E(t,i,null,be.Line)}function wn(t,n,o,e,r,f=0){const a=new Array(18),s=[[-o,f,r/2],[e,f,r/2],[0,n+f,r/2],[-o,f,-r/2],[e,f,-r/2],[0,n+f,-r/2]],i=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let l=0;l<6;l++)a[3*l]=s[l][0],a[3*l+1]=s[l][1],a[3*l+2]=s[l][2];return new E(t,[[x.POSITION,new S(a,i,3,!0)]])}function On(t,n){const o=t.getMutableAttribute(x.POSITION).data;for(let e=0;e<o.length;e+=3){const r=o[e],f=o[e+1],a=o[e+2];se(X,r,f,a),Qe(X,X,n),o[e]=X[0],o[e+1]=X[1],o[e+2]=X[2]}}function gn(t,n=t){const o=t.attributes,e=o.get(x.POSITION).data,r=o.get(x.NORMAL).data;if(r){const f=n.getMutableAttribute(x.NORMAL).data;for(let a=0;a<r.length;a+=3){const s=r[a+1];f[a+1]=-r[a+2],f[a+2]=s}}if(e){const f=n.getMutableAttribute(x.POSITION).data;for(let a=0;a<e.length;a+=3){const s=e[a+1];f[a+1]=-e[a+2],f[a+2]=s}}}function me(t,n,o,e,r){return!(Math.abs(Se(n,t))>r)&&(B(o,t,n),D(o,o),B(e,o,t),D(e,e),!0)}function Me(t,n,o,e,r,f,a){return me(t,n,r,f,a)||me(t,o,r,f,a)||me(t,e,r,f,a)}const $e=.99619469809,X=C(),zt=.5;function vn(t,n){t.include(rt),t.attributes.add(x.POSITION,"vec3"),t.attributes.add(x.NORMAL,"vec3"),t.attributes.add(x.CENTEROFFSETANDDISTANCE,"vec4");const o=t.vertex;at(o,n),st(o,n),o.uniforms.add(new Te("viewport",(e=>e.camera.fullViewport)),new lt("polygonOffset",(e=>e.shaderPolygonOffset)),new we("cameraGroundRelative",(e=>e.camera.aboveGround?1:-1))),n.hasVerticalOffset&&it(o),o.code.add(N`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(N`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${n.terrainDepthTest?N.float(0):N`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),n.draped&&!n.hasVerticalOffset||ct(o),n.draped||(o.uniforms.add(new we("perDistancePixelRatio",(e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2)))),o.code.add(N`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${N.float(zt)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),n.screenCenterOffsetUnitsEnabled&&ut(o),n.hasScreenSizePerspective&&ft(o),o.code.add(N`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${n.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${n.hasScreenSizePerspective&&(n.hasVerticalOffset||n.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${n.hasVerticalOffset?n.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${n.hasVerticalOffset?N`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${n.screenCenterOffsetUnitsEnabled?"":N`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${n.screenCenterOffsetUnitsEnabled?n.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${n.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function Ft(t){t.uniforms.add(new ht("alignPixelEnabled",(n=>n.alignPixelEnabled))),t.code.add(N`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(N`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var le;(function(t){t[t.Occluded=0]="Occluded",t[t.NotOccluded=1]="NotOccluded",t[t.Both=2]="Both",t[t.COUNT=3]="COUNT"})(le||(le={}));function xn(t){t.vertex.uniforms.add(new we("renderTransparentlyOccludedHUD",(n=>n.hudRenderStyle===le.Occluded?1:n.hudRenderStyle===le.NotOccluded?0:.75)),new Te("viewport",(n=>n.camera.fullViewport)),new pt("hudVisibilityTexture",(n=>n.hudVisibility?.getTexture()))),t.vertex.include(Ft),t.vertex.code.add(N`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function yn(t){return t.type==="point"}export{sn as B,an as C,rn as E,nn as I,Me as M,On as O,Wt as S,en as U,At as Z,hn as a,tn as b,Dt as c,zt as d,ln as e,pn as f,yn as g,le as h,Qt as i,fn as j,on as k,Ft as l,gn as m,xn as n,cn as o,wn as p,dn as q,Nt as r,un as s,Jt as t,vn as u,Vt as v,mn as w};
