import{S as I,i as T,s as H,k as q,l as D,m as $,h as C,n as j,b as O,I as A,o as N,w as U}from"../chunks/index.2ecc7cbf.js";import{P as V,S as Z,C as _,F as J,W as K,s as Q,n as X,B as Y,j as S,k as ee,T as te,m as ne,o as ae,a as oe,g as ie,h as se,c as re}from"../chunks/three.module.2b01c56e.js";import{O as le}from"../chunks/OrbitControls.938ce638.js";import{G as ce}from"../chunks/GLTFLoader.6b96b0db.js";function de(f){let t;return{c(){t=q("canvas"),this.h()},l(l){t=D(l,"CANVAS",{id:!0}),$(t).forEach(C),this.h()},h(){j(t,"id","canvas")},m(l,m){O(l,t,m),f[1](t)},p:A,i:A,o:A,d(l){l&&C(t),f[1](null)}}}function v(f){let t=Math.sin(f)*1e4;return t-Math.floor(t)}function pe(f,t,l){let m,o,c,a,n,w,P;const k=new re;let b;N(()=>{F(),y()});function F(){o=new V(35,window.innerWidth/window.innerHeight,1,2e3),o.position.set(0,0,100),c=new Z;const d=new _("hsl(255, 80%, 5%)");c.background=new _(d),c.fog=new J(d,850,1200),a=new K({antialias:!0,canvas:m}),a.setPixelRatio(window.devicePixelRatio),a.setSize(window.innerWidth,window.innerHeight),a.outputEncoding=Q,a.toneMapping=X,a.toneMappingExposure=3,window.addEventListener("resize",L);let u=300,M=new Y,h=new Float32Array(u*3),g=new Float32Array(u*3),z=650,x=650;for(let e=0;e<u;e++){let p=Math.sin(e/u*Math.PI*2)*z+(v(e*3)-.5)*x,i=(v(e*3+1)-.5)*x*.5,s=Math.cos(e/u*Math.PI*2)*z+(v(e*3+2)-.5)*x;h[e*3]=p,h[e*3+1]=i,h[e*3+2]=s;let r=new _(16777215);g[e*3]=r.r,g[e*3+1]=r.g,g[e*3+2]=r.b}M.setAttribute("position",new S(h,3)),M.setAttribute("color",new S(g,3));let E=new ee({size:10,vertexColors:!0,map:new te().load("/misc/sphere.png"),transparent:!0,alphaTest:.5});b=new ne(M,E),b.position.set(0,60,0),c.add(b);const R=new ae(16777215,1);c.add(R);const B=new ce,G=document.querySelector("input.baseUrl").value;B.load(`${G}scene/scene-2-bake-2.glb`,function(e){const p=e.scene;console.log("root",e);const i=.1;p.scale.set(i,i,i),p.position.set(0,0,0);const s=e.cameras[0];o.position.set(s.position.x*i,s.position.y*i,s.position.z*i),o.rotation.set(s.rotation.x,s.rotation.y,s.rotation.z),n=new le(o,a.domElement),n.target.set(0,0,0),n.enablePan=!1,n.enableZoom=!1,n.minAzimuthAngle=-.5*Math.PI/2,n.maxAzimuthAngle=.5*Math.PI/2,n.dampingFactor=.05,n.enableDamping=!0,n.update(),w=new oe(p),e.animations,P=w.clipAction(e.animations[0]),P.play(),p.traverse(function(r){r.isMesh&&(r.material=new ie({color:r.material.color??16777215,map:r.material.map,side:se}))}),c.add(p)},void 0,function(e){console.error(e)})}function L(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}function y(){requestAnimationFrame(y),a.render(c,o),n&&n.update();const d=k.getDelta();w&&w.update(d*.5)}function W(d){U[d?"unshift":"push"](()=>{m=d,l(0,m)})}return[m,W]}class he extends I{constructor(t){super(),T(this,t,pe,de,H,{})}}export{he as default};