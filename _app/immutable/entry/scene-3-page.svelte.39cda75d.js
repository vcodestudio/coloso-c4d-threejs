import{S as B,i as G,s as I,k as T,l as H,m as D,h as C,n as j,b as q,I as A,o as O,w as $}from"../chunks/index.2ecc7cbf.js";import{P as N,S as V,C as _,F as Z,W as J,s as K,n as Q,B as U,j as S,k as X,T as Y,m as ee,o as te,a as ne,g as ae,h as ie,c as oe}from"../chunks/three.module.2b01c56e.js";import{O as se}from"../chunks/OrbitControls.938ce638.js";import{G as re}from"../chunks/GLTFLoader.6b96b0db.js";function le(f){let t;return{c(){t=T("canvas"),this.h()},l(l){t=H(l,"CANVAS",{id:!0}),D(t).forEach(C),this.h()},h(){j(t,"id","canvas")},m(l,m){q(l,t,m),f[1](t)},p:A,i:A,o:A,d(l){l&&C(t),f[1](null)}}}function P(f){let t=Math.sin(f)*1e4;return t-Math.floor(t)}function ce(f,t,l){let m,i,c,a,n,w,v;const k=new oe;let b;O(()=>{F(),y()});function F(){i=new N(35,window.innerWidth/window.innerHeight,1,2e3),i.position.set(0,0,100),c=new V;const d=new _("hsl(255, 80%, 5%)");c.background=new _(d),c.fog=new Z(d,850,1200),a=new J({antialias:!0,canvas:m}),a.setPixelRatio(window.devicePixelRatio),a.setSize(window.innerWidth,window.innerHeight),a.outputEncoding=K,a.toneMapping=Q,a.toneMappingExposure=3,window.addEventListener("resize",L);let u=300,M=new U,h=new Float32Array(u*3),g=new Float32Array(u*3),z=650,x=650;for(let e=0;e<u;e++){let p=Math.sin(e/u*Math.PI*2)*z+(P(e*3)-.5)*x,o=(P(e*3+1)-.5)*x*.5,s=Math.cos(e/u*Math.PI*2)*z+(P(e*3+2)-.5)*x;h[e*3]=p,h[e*3+1]=o,h[e*3+2]=s;let r=new _(16777215);g[e*3]=r.r,g[e*3+1]=r.g,g[e*3+2]=r.b}M.setAttribute("position",new S(h,3)),M.setAttribute("color",new S(g,3));let E=new X({size:10,vertexColors:!0,map:new Y().load("/misc/sphere.png"),transparent:!0,alphaTest:.5});b=new ee(M,E),b.position.set(0,60,0),c.add(b);const R=new te(16777215,1);c.add(R),new re().load("../../scene/scene-2-bake-2.glb",function(e){const p=e.scene;console.log("root",e);const o=.1;p.scale.set(o,o,o),p.position.set(0,0,0);const s=e.cameras[0];i.position.set(s.position.x*o,s.position.y*o,s.position.z*o),i.rotation.set(s.rotation.x,s.rotation.y,s.rotation.z),n=new se(i,a.domElement),n.target.set(0,0,0),n.enablePan=!1,n.enableZoom=!1,n.minAzimuthAngle=-.5*Math.PI/2,n.maxAzimuthAngle=.5*Math.PI/2,n.dampingFactor=.05,n.enableDamping=!0,n.update(),w=new ne(p),e.animations,v=w.clipAction(e.animations[0]),v.play(),p.traverse(function(r){r.isMesh&&(r.material=new ae({color:r.material.color??16777215,map:r.material.map,side:ie}))}),c.add(p)},void 0,function(e){console.error(e)})}function L(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}function y(){requestAnimationFrame(y),a.render(c,i),n&&n.update();const d=k.getDelta();w&&w.update(d*.5)}function W(d){$[d?"unshift":"push"](()=>{m=d,l(0,m)})}return[m,W]}class we extends B{constructor(t){super(),G(this,t,ce,le,I,{})}}export{we as default};