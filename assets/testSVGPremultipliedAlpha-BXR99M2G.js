import{a as f}from"./WGLContainer-FqqlXR4w.js";import{E as A,o as X}from"./ProgramTemplate-DuKm7wPA.js";import{gS as v,d8 as d,dc as g,db as p,it as Q,dd as I,iN as M,iE as R,de as S,da as P}from"./ScaleRangeLayer-CkcnxI7v.js";import{R as b}from"./FramebufferObject-CCZMtxkY.js";class m{constructor(s,e,t,n,u,E,a,_,T){this.createQuery=s,this.deleteQuery=e,this.resultAvailable=t,this.getResult=n,this.disjoint=u,this.beginTimeElapsed=E,this.endTimeElapsed=a,this.createTimestamp=_,this.timestampBits=T}}let i=!1;function O(r,s){if(s.disjointTimerQuery)return null;let e=r.getExtension("EXT_disjoint_timer_query_webgl2");return e?new m((()=>r.createQuery()),(t=>{r.deleteQuery(t),i=!1}),(t=>r.getQueryParameter(t,r.QUERY_RESULT_AVAILABLE)),(t=>r.getQueryParameter(t,r.QUERY_RESULT)),(()=>r.getParameter(e.GPU_DISJOINT_EXT)),(t=>{i||(i=!0,r.beginQuery(e.TIME_ELAPSED_EXT,t))}),(()=>{r.endQuery(e.TIME_ELAPSED_EXT),i=!1}),(t=>e.queryCounterEXT(t,e.TIMESTAMP_EXT)),(()=>r.getQuery(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT))):(e=r.getExtension("EXT_disjoint_timer_query"),e?new m((()=>e.createQueryEXT()),(t=>{e.deleteQueryEXT(t),i=!1}),(t=>e.getQueryObjectEXT(t,e.QUERY_RESULT_AVAILABLE_EXT)),(t=>e.getQueryObjectEXT(t,e.QUERY_RESULT_EXT)),(()=>r.getParameter(e.GPU_DISJOINT_EXT)),(t=>{i||(i=!0,e.beginQueryEXT(e.TIME_ELAPSED_EXT,t))}),(()=>{e.endQueryEXT(e.TIME_ELAPSED_EXT),i=!1}),(t=>e.queryCounterEXT(t,e.TIMESTAMP_EXT)),(()=>e.getQueryEXT(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT))):null)}class x{constructor(){this._result=!1}dispose(){this._program=v(this._program)}get result(){return this._program!=null&&(this._result=this._test(this._program),this.dispose()),this._result}}class B extends x{constructor(s){super(),this._rctx=s;const e=`
    precision highp float;

    attribute vec2 a_pos;
    varying vec2 v_uv;

    void main() {
      v_uv = a_pos;
      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
    }
    `,t=`
    precision highp float;

    varying vec2 v_uv;

    uniform sampler2D u_texture;

    void main() {
      gl_FragColor = texture2D(u_texture, v_uv);
    }
    `;this._program=s.programCache.acquire(e,t,new Map([["a_pos",0]]))}dispose(){super.dispose()}_test(s){const e=this._rctx;if(!e.gl)return s.dispose(),!0;const t=new d(1);t.wrapMode=g.CLAMP_TO_EDGE,t.samplingMode=p.NEAREST;const n=new b(e,t),u=A.createVertex(e,Q.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),E=new X(e,new Map([["a_pos",0]]),f,new Map([["geometry",u]])),a=new d;a.samplingMode=p.LINEAR,a.wrapMode=g.CLAMP_TO_EDGE;const _=new I(e,a,o);e.useProgram(s),e.bindTexture(_,0),s.setUniform1i("u_texture",0);const T=e.getBoundFramebufferObject(),{x:c,y:h,width:w,height:y}=e.getViewport();e.bindFramebuffer(n),e.setViewport(0,0,1,1),e.setClearColor(0,0,0,0),e.setBlendingEnabled(!1),e.clear(M.COLOR),e.bindVAO(E),e.drawArrays(R.TRIANGLE_STRIP,0,4);const l=new Uint8Array(4);return n.readPixels(0,0,1,1,S.RGBA,P.UNSIGNED_BYTE,l),E.dispose(),n.dispose(),_.dispose(),e.setViewport(c,h,w,y),e.bindFramebuffer(T),l[0]!==255}}const o=new Image;o.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",o.width=5,o.height=5,o.decode();export{O as a,B as f,x as t};
