import{S as x,i as L,s as M,k as P,l as S,m as W,h as u,n as y,b as A,I as w,o as C,w as k}from"../chunks/index.2ecc7cbf.js";import{P as z,S as E,C as R,at as F,F as G,i as H,W as q,s as B,g as $}from"../chunks/three.module.a6fd982f.js";import{G as j}from"../chunks/GLTFLoader.a254f7ff.js";function I(c){let n;return{c(){n=P("canvas"),this.h()},l(t){n=S(t,"CANVAS",{id:!0}),W(n).forEach(u),this.h()},h(){y(n,"id","canvas")},m(t,e){A(t,n,e),c[1](n)},p:w,i:w,o:w,d(t){t&&u(n),c[1](null)}}}function N(c,n,t){let e,i,a,d,f=[];C(()=>{h(),m()});function h(){e=new z(45,window.innerWidth/window.innerHeight,1,2e3),e.position.set(0,0,200),i=new E,i.background=new R(0);const o=new F(13421772,.4);i.add(o),i.fog=new G(0,80,120);const v=new H(16777215,.8);e.add(v),i.add(e),e.lookAt(0,0,0),a=new q({antialias:!0,canvas:d}),a.setPixelRatio(window.devicePixelRatio),a.setSize(window.innerWidth,window.innerHeight),a.outputEncoding=B,a.shadowMap.enabled=!0,window.addEventListener("resize",g),new j().load("/text/model.glb",function(l){const r=l.scene;r.position.set(0,0,0),r.scale.set(.1,.1,.1),i.add(r),console.log(r),r.traverse(function(s){if(s.name.toLowerCase().includes("camera")&&(e.position.copy(s.position),e.rotation.copy(s.rotation),e.position.z*=.1),s.isMesh){const b=s.material,p=new $({map:b.emissiveMap});s.material=p,f.push(p)}})},void 0,function(l){console.error(l)})}function g(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}function m(){requestAnimationFrame(m),f.forEach(o=>{o.map.offset.y-=5e-4}),a.render(i,e),e.lookAt(0,0,0)}function _(o){k[o?"unshift":"push"](()=>{d=o,t(0,d)})}return[d,_]}class K extends x{constructor(n){super(),L(this,n,N,I,M,{})}}export{K as default};
