import{_ as l}from"../chunks/preload-helper.41c905a7.js";import{S as k,i as L,s as I,k as v,l as m,m as u,h as n,n as d,b as p,I as c,K as D,L as T,e as h,M as A,a as E,c as b,N as R,q as V,r as O,E as P}from"../chunks/index.2ecc7cbf.js";function g(i,e,o){const t=i.slice();return t[5]=e[o],t}function w(i){return{c,l:c,m:c,p:c,d:c}}function y(i){let e,o=i[5]+"",t,_,a;return{c(){e=v("div"),t=E(),this.h()},l(s){e=m(s,"DIV",{class:!0});var r=u(e);r.forEach(n),t=b(s),this.h()},h(){d(e,"class","svelte-1352fzv")},m(s,r){p(s,e,r),e.innerHTML=o,p(s,t,r),_||(a=R(e,"click",i[1]),_=!0)},p:c,d(s){s&&n(e),s&&n(t),_=!1,a()}}}function x(i){let e,o,t;return{c(){e=v("div"),o=V("loading..."),t=E(),this.h()},l(_){e=m(_,"DIV",{class:!0});var a=u(e);o=O(a,"loading..."),a.forEach(n),t=b(_),this.h()},h(){d(e,"class","svelte-1352fzv")},m(_,a){p(_,e,a),P(e,o),p(_,t,a)},p:c,d(_){_&&n(e),_&&n(t)}}}function f(i){let e,o={ctx:i,current:null,token:null,hasCatch:!1,pending:x,then:y,catch:w,value:5};return T(i[5],o),{c(){e=h(),o.block.c()},l(t){e=h(),o.block.l(t)},m(t,_){p(t,e,_),o.block.m(t,o.anchor=_),o.mount=()=>e.parentNode,o.anchor=e},p(t,_){i=t,A(o,i,_)},d(t){t&&n(e),o.block.d(t),o.token=null,o=null}}}function z(i){let e,o=i[0],t=[];for(let _=0;_<o.length;_+=1)t[_]=f(g(i,o,_));return{c(){e=v("div");for(let _=0;_<t.length;_+=1)t[_].c();this.h()},l(_){e=m(_,"DIV",{class:!0});var a=u(e);for(let s=0;s<t.length;s+=1)t[s].l(a);a.forEach(n),this.h()},h(){d(e,"class","container svelte-1352fzv")},m(_,a){p(_,e,a);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(_,[a]){if(a&3){o=_[0];let s;for(s=0;s<o.length;s+=1){const r=g(_,o,s);t[s]?t[s].p(r,a):(t[s]=f(r),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=o.length}},i:c,o:c,d(_){_&&n(e),D(t,_)}}}function C(i){const e=Object.assign({"../../../static/svgs/chevron_left_black_24dp.svg":()=>l(()=>import("../chunks/chevron_left_black_24dp.b9683948.js"),[],import.meta.url),"../../../static/svgs/chevron_right_FILL0_wght400_GRAD0_opsz48.svg":()=>l(()=>import("../chunks/chevron_right_FILL0_wght400_GRAD0_opsz48.3a7c5985.js"),[],import.meta.url),"../../../static/svgs/done_black_24dp.svg":()=>l(()=>import("../chunks/done_black_24dp.7ac28e88.js"),[],import.meta.url),"../../../static/svgs/help_outline_black_24dp.svg":()=>l(()=>import("../chunks/help_outline_black_24dp.e7954335.js"),[],import.meta.url),"../../../static/svgs/home_FILL0_wght400_GRAD0_opsz48.svg":()=>l(()=>import("../chunks/home_FILL0_wght400_GRAD0_opsz48.ed5a79c0.js"),[],import.meta.url),"../../../static/svgs/home_black_24dp.svg":()=>l(()=>import("../chunks/home_black_24dp.cacc35cb.js"),[],import.meta.url),"../../../static/svgs/navigate_next_black_24dp.svg":()=>l(()=>import("../chunks/navigate_next_black_24dp.54f74fea.js"),[],import.meta.url),"../../../static/svgs/open_in_new_black_24dp.svg":()=>l(()=>import("../chunks/open_in_new_black_24dp.6958a91e.js"),[],import.meta.url),"../../../static/svgs/search_black_24dp (1).svg":()=>l(()=>import("../chunks/search_black_24dp (1).9aa4fc38.js"),[],import.meta.url),"../../../static/svgs/search_black_24dp.svg":()=>l(()=>import("../chunks/search_black_24dp.93e31042.js"),[],import.meta.url),"../../../static/svgs/settings_FILL0_wght400_GRAD0_opsz48.svg":()=>l(()=>import("../chunks/settings_FILL0_wght400_GRAD0_opsz48.60b73519.js"),[],import.meta.url),"../../../static/svgs/volume_off_black_24dp.svg":()=>l(()=>import("../chunks/volume_off_black_24dp.7b11ecc7.js"),[],import.meta.url),"../../../static/svgs/volume_up_black_24dp.svg":()=>l(()=>import("../chunks/volume_up_black_24dp.87462f4e.js"),[],import.meta.url)});console.log(e);const o=Object.keys(e).map(s=>s.replace("../../../static/svgs/","/svgs/"));console.log(o);const t=async s=>await(await fetch(s)).text();return[o.map(async s=>await t(s)),s=>{const r=s.currentTarget.innerHTML;navigator.clipboard.writeText(r)}]}class S extends k{constructor(e){super(),L(this,e,C,z,I,{})}}export{S as default};
