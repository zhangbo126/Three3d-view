if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,l)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let n={};const d=e=>r(e,t),g={module:{uri:t},exports:n,require:d};i[t]=Promise.all(s.map((e=>g[e]||d(e)))).then((e=>(l(...e),n)))}}define(["./workbox-d6430d1c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"prodect"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/three.js3d/image/1.png",revision:"9aafaf0ea181e793bb3c1d5a42f4041a"},{url:"/three.js3d/image/2.png",revision:"95666cf2077b5ec0917cffc295500989"},{url:"/three.js3d/image/3.png",revision:"21c8cd3e9aff88ca8347627f83b8d251"},{url:"/three.js3d/image/4.png",revision:"e9b98d06e600c768ed2ac4e29d864165"},{url:"/three.js3d/image/5.png",revision:"e7d42697a28b51ee78111b791bfa6d89"},{url:"/three.js3d/image/6.png",revision:"58f34b47f08ce664c5ddd182841263c4"},{url:"/three.js3d/index.html",revision:"d7a9db754782f095b6c2d309fdc54833"},{url:"/three.js3d/manifest.json",revision:"d80c1c6fd48c6571b794ce458130db07"},{url:"/three.js3d/static/css/about.350432d1.css",revision:null},{url:"/three.js3d/static/css/app.a68b3197.css",revision:null},{url:"/three.js3d/static/css/chunk-vendors.60cc3978.css",revision:null},{url:"/three.js3d/static/img/1.997d64fe.png",revision:null},{url:"/three.js3d/static/img/1.b184894a.png",revision:null},{url:"/three.js3d/static/img/11.13ce97ab.png",revision:null},{url:"/three.js3d/static/img/11.b383bd33.png",revision:null},{url:"/three.js3d/static/img/12.e67aac8d.png",revision:null},{url:"/three.js3d/static/img/13.f3367a6f.png",revision:null},{url:"/three.js3d/static/img/14.a60646d4.png",revision:null},{url:"/three.js3d/static/img/14.e1be3616.png",revision:null},{url:"/three.js3d/static/img/15.5c6d2fbc.png",revision:null},{url:"/three.js3d/static/img/16.22a93a4d.png",revision:null},{url:"/three.js3d/static/img/17.76ba3108.png",revision:null},{url:"/three.js3d/static/img/18.79bb051a.png",revision:null},{url:"/three.js3d/static/img/2.60b592ae.png",revision:null},{url:"/three.js3d/static/img/21.b2d1f5c0.png",revision:null},{url:"/three.js3d/static/img/3.ebc2b040.png",revision:null},{url:"/three.js3d/static/img/4.0a19b0ab.png",revision:null},{url:"/three.js3d/static/img/4.af2a9b55.png",revision:null},{url:"/three.js3d/static/img/5.cc1193ef.png",revision:null},{url:"/three.js3d/static/img/6.4c9e7c38.png",revision:null},{url:"/three.js3d/static/img/9.3eea1578.png",revision:null},{url:"/three.js3d/static/img/loading.2fc63fd9.svg",revision:null},{url:"/three.js3d/static/img/model-bg-1.0a206b6d.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-10.a1cb3d2e.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-11.a8dbafcc.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-15.0c294766.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-16.0b99f7b2.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-17.439185f8.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-18.92870b31.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-2.390c1b3c.jpeg",revision:null},{url:"/three.js3d/static/img/model-bg-3.6c273dac.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-4.60b57f01.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-5.3abe7bac.png",revision:null},{url:"/three.js3d/static/img/model-bg-6.5bdad556.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-7.f1700613.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-8.4e79ca43.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-9.8fbcc3a1.jpg",revision:null},{url:"/three.js3d/static/img/view-1.bdab19c5.png",revision:null},{url:"/three.js3d/static/img/view-10.accf75f8.png",revision:null},{url:"/three.js3d/static/img/view-11.31b82c75.png",revision:null},{url:"/three.js3d/static/img/view-12.8f526afe.png",revision:null},{url:"/three.js3d/static/img/view-13.4102fa96.png",revision:null},{url:"/three.js3d/static/img/view-14.0d1ec365.png",revision:null},{url:"/three.js3d/static/img/view-15.b5606961.png",revision:null},{url:"/three.js3d/static/img/view-2.d5d6f23a.png",revision:null},{url:"/three.js3d/static/img/view-3.95ed2f62.png",revision:null},{url:"/three.js3d/static/img/view-4.46878642.png",revision:null},{url:"/three.js3d/static/img/view-5.ae02f355.png",revision:null},{url:"/three.js3d/static/img/view-6.faed5122.png",revision:null},{url:"/three.js3d/static/img/view-7.eaf3287f.png",revision:null},{url:"/three.js3d/static/img/view-8.9e00cd9c.png",revision:null},{url:"/three.js3d/static/img/view-9.8f6431f2.png",revision:null},{url:"/three.js3d/static/js/about.129ce89d.js",revision:null},{url:"/three.js3d/static/js/app.cb1f80d7.js",revision:null},{url:"/three.js3d/static/js/chunk-vendors.381a17db.js",revision:null},{url:"/three.js3d/threeFile/file/draco_wasm_wrapper.js",revision:"989775d1ef8b431dc91abd1154a7304a"},{url:"/three.js3d/threeFile/glb/glb-10.glb",revision:"a343ab3e7cab200e812faee0862bbfee"},{url:"/three.js3d/threeFile/glb/glb-11.glb",revision:"6acc38a09056277250bb3c1fac120c61"},{url:"/three.js3d/threeFile/glb/glb-12.glb",revision:"36da9f159acf2c6e8d2458ffe1b96735"},{url:"/three.js3d/threeFile/glb/glb-22.glb",revision:"04c6d1d75281915063844b8f418dee1d"},{url:"/three.js3d/threeFile/glb/glb-8.glb",revision:"97c1fde15121d75ffb84a7600d1385f2"},{url:"/three.js3d/threeFile/glb/glb-9.glb",revision:"320a0ca3cfef6d6f9c623b46664bbeee"}],{})}));
