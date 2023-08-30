(function(){"use strict";var e={6596:function(e,t,n){var r=n(8815),o=n(8528);function i(e,t){const n=(0,o.up)("router-view"),r=(0,o.up)("el-config-provider");return(0,o.wg)(),(0,o.j4)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n)])),_:1})}var u=n(5096);const a={},c=(0,u.Z)(a,[["render",i]]);var s=c,l=n(8540);const d=[{path:"/",name:"modelPage",component:()=>n.e(443).then(n.bind(n,6557))},{path:"/preview",name:"modelPreview",component:()=>n.e(443).then(n.bind(n,4859))}],f=(0,l.p7)({history:(0,l.PO)("/three.js3d/"),base:"/three.js3d/",model:"hash",routes:d});var p=f,v=n(5251),m=n(8488),h=n(4743);const g={install(e){e.config.globalProperties.$bus=(0,h.Z)()}};var b={...g},y=n(1682);const w={install(e){for(const[t,n]of Object.entries(y))e.component(t,n);e.config.productionTip=!1}};var k=w;const E=e=>((0,o.dD)("data-v-7fffc062"),e=e(),(0,o.Cn)(),e),O={id:"loading-mark"},j={class:"loading-box"},C={class:"loading"},_=["src"],S=E((()=>(0,o._)("div",{class:"loading-txt"},"模型文件首次加载时间较长请耐心等待...",-1)));function T(e,t){return(0,o.wg)(),(0,o.iD)("div",O,[(0,o._)("div",j,[(0,o._)("div",C,[(0,o._)("img",{src:n(7622)},null,8,_),S])])])}const A={},P=(0,u.Z)(A,[["render",T],["__scopeId","data-v-7fffc062"]]);var x=P;const M=e=>{e.directive("zLoading",{mounted(e,t,n){const o=(0,r.ri)(x),i=o.mount(document.createElement("div"));e.style.position="relative",i.$el.style.display="none",e.appendChild(i.$el)},updated(e,t,n){const r=e.parentElement.querySelector("#loading-mark"),{value:o}=t;o?(e.style.position="relative",r.style.display="block"):(e.style.position="",r.style.display="none")},unmounted(e,t,n){const r=e.children[0];e.removeChild(r)}})},N={install(e){M(e)}};var L=N;n(6440);const Z=(0,r.ri)(s);Z.use(m.Z,{size:"small",zIndex:3e3}),Z.use(b),Z.use(k),Z.use(L),Z.use(v.Z),Z.use(p),Z.mount("#app")},5251:function(e,t,n){var r=n(6672);t.Z=(0,r.MT)({state:{modelApi:{},selectMesh:{}},getters:{selectMeshUuid:e=>e.selectMesh.uuid},mutations:{SET_MODEL_API:(e,t)=>{e.modelApi=t},SELECT_MESH:(e,t)=>{e.selectMesh=t}},actions:{},modules:{}})},7622:function(e,t,n){e.exports=n.p+"static/img/loading.f8c1d232.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"static/js/about.239d32d2.js"}}(),function(){n.miniCssF=function(e){return"static/css/about.2d6a95e0.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="prodect:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/three.js3d/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=u,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,null,o,i)}))},o={493:0,826:0};n.f.miniCss=function(e,t){var n={443:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={493:0,826:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var l=c(n)}for(t&&t(r);s<u.length;s++)i=u[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkprodect"]=self["webpackChunkprodect"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6596)}));r=n.O(r)})();