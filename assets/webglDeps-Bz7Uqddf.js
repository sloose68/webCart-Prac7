import{a as c}from"./ProgramTemplate-DuKm7wPA.js";import{E as h,e as _,o as g,b as y}from"./ProgramTemplate-DuKm7wPA.js";import{R as F,s as v}from"./FramebufferObject-CCZMtxkY.js";import{dd as P}from"./ScaleRangeLayer-CkcnxI7v.js";import{t as l}from"./NestedMap-wm1q4thl.js";class m{constructor(e){this._rctx=e,this._store=new l}dispose(){this._store.forAll((e=>e.dispose())),this._store.clear()}acquire(e,t,o,n){const r=this._store.get(e,t);if(r!=null)return r.ref(),r;const s=new c(this._rctx,e,t,o,n);return s.ref(),this._store.set(e,t,s),s}get test(){}}function p(i){const{options:e,value:t}=i;return typeof e[t]=="number"}function $(i){let e="";for(const t in i){const o=i[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(p(o)){const{value:n,options:r,namespace:s}=o,f=s?`${s}_`:"";for(const a in r)e+=`#define ${f}${a} ${r[a].toFixed()}
`;e+=`#define ${t} ${f}${n}
`}else{const n=o.options;let r=0;for(const s in n)e+=`#define ${n[s]} ${(r++).toFixed()}
`;e+=`#define ${t} ${n[o.value]}
`}}return e}export{h as BufferObject,F as FramebufferObject,c as Program,m as ProgramCache,v as Renderbuffer,_ as ShaderCompiler,P as Texture,g as VertexArrayObject,y as createProgram,$ as glslifyDefineMap};
