import{S as I,i as T,s as H,k as q,l as D,m as $,h as C,n as O,b as j,I as A,o as N,w as U}from"../chunks/index.2ecc7cbf.js";import{P as V,S as X,C as _,F as Z,W as J,s as K,as as Q,X as Y,B as S,z as ee,T as te,a1 as ne,at as ae,a as ie,g as oe,h as se,c as re}from"../chunks/three.module.a6fd982f.js";import{O as le}from"../chunks/OrbitControls.4dddf048.js";import{G as ce}from"../chunks/GLTFLoader.a254f7ff.js";function de(f){let t;return{c(){t=q("canvas"),this.h()},l(l){t=D(l,"CANVAS",{id:!0}),$(t).forEach(C),this.h()},h(){O(t,"id","canvas")},m(l,u){j(l,t,u),f[1](t)},p:A,i:A,o:A,d(l){l&&C(t),f[1](null)}}}function v(f){let t=Math.sin(f)*1e4;return t-Math.floor(t)}function pe(f,t,l){let u,i,c,a,n,w,P;const F=new re;let b;N(()=>{L(),y()});function L(){i=new V(35,window.innerWidth/window.innerHeight,1,2e3),i.position.set(0,0,100),c=new X;const d=new _("hsl(255, 80%, 5%)");c.background=new _(d),c.fog=new Z(d,850,1200),a=new J({antialias:!0,canvas:u}),a.setPixelRatio(window.devicePixelRatio),a.setSize(window.innerWidth,window.innerHeight),a.outputEncoding=K,a.toneMapping=Q,a.toneMappingExposure=3,window.addEventListener("resize",W);let m=300,M=new Y,h=new Float32Array(m*3),g=new Float32Array(m*3),z=650,x=650;for(let e=0;e<m;e++){let p=Math.sin(e/m*Math.PI*2)*z+(v(e*3)-.5)*x,o=(v(e*3+1)-.5)*x*.5,s=Math.cos(e/m*Math.PI*2)*z+(v(e*3+2)-.5)*x;h[e*3]=p,h[e*3+1]=o,h[e*3+2]=s;let r=new _(16777215);g[e*3]=r.r,g[e*3+1]=r.g,g[e*3+2]=r.b}M.setAttribute("position",new S(h,3)),M.setAttribute("color",new S(g,3));let E=new ee({size:10,vertexColors:!0,map:new te().load("/misc/sphere.png"),transparent:!0,alphaTest:.5});b=new ne(M,E),b.position.set(0,60,0),c.add(b);const R=new ae(16777215,1);c.add(R);const B=new ce,G=document.querySelector("input.baseUrl").value;B.load(`${G}scene/scene-2-bake-2.glb`,function(e){const p=e.scene;console.log("root",e);const o=.1;p.scale.set(o,o,o),p.position.set(0,0,0);const s=e.cameras[0];i.position.set(s.position.x*o,s.position.y*o,s.position.z*o),i.rotation.set(s.rotation.x,s.rotation.y,s.rotation.z),n=new le(i,a.domElement),n.target.set(0,0,0),n.enablePan=!1,n.enableZoom=!1,n.minAzimuthAngle=-.5*Math.PI/2,n.maxAzimuthAngle=.5*Math.PI/2,n.dampingFactor=.05,n.enableDamping=!0,n.update(),w=new ie(p),e.animations,P=w.clipAction(e.animations[0]),P.play(),p.traverse(function(r){r.isMesh&&(r.material=new oe({color:r.material.color??16777215,map:r.material.map,side:se}))}),c.add(p)},void 0,function(e){console.error(e)})}function W(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}function y(){requestAnimationFrame(y),a.render(c,i),n&&n.update();const d=F.getDelta();w&&w.update(d*.5)}function k(d){U[d?"unshift":"push"](()=>{u=d,l(0,u)})}return[u,k]}class he extends I{constructor(t){super(),T(this,t,pe,de,H,{})}}export{he as default};
