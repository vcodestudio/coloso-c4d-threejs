import{S,i as W,s as k,k as G,l as I,m as D,h as _,n as F,b as H,I as g,o as L,w as B}from"../chunks/index.2ecc7cbf.js";import{P as V,S as $,C as P,F as q,W as O,s as T,as as U,au as j,g as v,h as N,$ as Z,V as J,c as K}from"../chunks/three.module.ef5c776a.js";import{O as Q}from"../chunks/OrbitControls.d7616f01.js";import{G as X}from"../chunks/GLTFLoader.b6027147.js";import{E as Y,R as ee,U as ne}from"../chunks/UnrealBloomPass.986871b8.js";function oe(w){let n;return{c(){n=G("canvas"),this.h()},l(t){n=I(t,"CANVAS",{id:!0}),D(n).forEach(_),this.h()},h(){F(n,"id","canvas")},m(t,s){H(t,n,s),w[1](n)},p:g,i:g,o:g,d(t){t&&_(n),w[1](null)}}}function ae(w,n,t){let s,a,i,o,e,f,c;L(()=>{x(),b()});function x(){a=new V(25,window.innerWidth/window.innerHeight,1,2e3),a.position.set(0,0,100),i=new $;const d=new P("hsl(265, 80%, 50%)");i.background=new P(d),i.fog=new q(d,550,600),o=new O({antialias:!0,canvas:s}),o.setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight),o.outputEncoding=T,o.toneMapping=U,o.toneMappingExposure=3,window.addEventListener("resize",E),C(),new X().load("/scene/scene-0-bake-3.glb",function(u){const m=u.scene;console.log(m);const r=.1;m.scale.set(r,r,r);const l=u.cameras[0];a.position.set(l.position.x*r,l.position.y*r,l.position.z*r),a.rotation.set(l.rotation.x,l.rotation.y,l.rotation.z),e=new Q(a,o.domElement),e.target.set(0,90,0),e.enablePan=!1,e.enableZoom=!1,e.minPolarAngle=Math.PI/2,e.maxPolarAngle=Math.PI/2,e.minAzimuthAngle=-.5*Math.PI/2,e.maxAzimuthAngle=.5*Math.PI/2,e.dampingFactor=.05,e.enableDamping=!0,e.update();const z=new j(1e3,1e3,1,1),R=new v({color:new P("#9C66ED"),side:N}),h=new Z(z,R);h.rotation.x=Math.PI/2,h.position.y=-1,i.add(h),m.traverse(function(p){p.name=="buttons"&&p.children.forEach(M=>{M.userData.originalPosition=M.position.clone()}),p.isMesh&&(p.material=new v({color:16777215,map:p.material.map}))}),console.log(m),i.add(m)},void 0,function(u){console.error(u)})}function C(){f=new Y(o),f.addPass(new ee(i,a)),c=new ne(new J(window.innerWidth,window.innerHeight),1.5,.4,.85),c.threshold=.75,c.strength=1.5,c.radius=1,f.addPass(c)}function E(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)}const A=new K;function b(){requestAnimationFrame(b),e.update(),o.render(i,a),A.getDelta()}function y(d){B[d?"unshift":"push"](()=>{s=d,t(0,s)})}return[s,y]}class de extends S{constructor(n){super(),W(this,n,ae,oe,k,{})}}export{de as default};
