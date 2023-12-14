"use strict";(self["webpackChunkprodect"]=self["webpackChunkprodect"]||[]).push([[614],{2614:function(e,t,i){var s=i(3396),n=(i(560),i(1114)),o=i(4543),a=i(9469),r=i(8421),l=i(2338),h=i(840),c=i(5070),d=i(9066),m=i(328),p=i(9868),u=i(499),g=i(6573),w=i(872),f=i(1794),M=i(2346);class L{constructor(e,t){this.config=e,this.container=document.querySelector("#"+t),this.camera,this.scene,this.renderer,this.controls,this.model,this.fileLoaderMap={glb:new a.E,fbx:new g.y,gltf:new a.E,obj:new u.L},this.modelAnimation,this.animationMixer,this.animationColock=new n.Clock,this.animationFrame,this.rotationAnimationFrame,this.animateClipAction=null,this.loopMap={LoopOnce:n.LoopOnce,LoopRepeat:n.LoopRepeat,LoopPingPong:n.LoopPingPong},this.skeletonHelper,this.gridHelper,this.axesHelper,this.planeGeometry,this.modelMaterialList,this.effectComposer,this.outlinePass,this.renderAnimation,this.raycaster=new n.Raycaster,this.mouse=new n.Vector2,this.modelTextureMap,this.glowComposer,this.unrealBloomPass,this.glowMaterialList,this.materials={},this.onWindowResizesListener,this.onMouseMoveListener}init(){return new Promise((async(e,t)=>{this.initRender(),this.initCamera(),this.initScene(),this.initControls();const i=await this.loadModel(this.config.fileInfo);this.createEffectComposer(),this.setSceneBackground(),this.setModelMeaterial(),this.setModelLaterStage(),this.setSceneLight(),this.setModelAnimation(),this.setModelAxleLine(),this.sceneAnimation(),this.addEvenListMouseLisatener(),e(i)}))}initRender(){this.renderer=new n.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio);const{clientHeight:e,clientWidth:t}=this.container;this.renderer.setSize(t,e),this.renderer.toneMapping=n.ReinhardToneMapping,this.renderer.autoClear=!0,this.renderer.toneMappingExposure=3,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=n.PCFSoftShadowMap;const i=document.createElement("div");i.id="mesh-txt",this.container.appendChild(i),this.container.appendChild(this.renderer.domElement)}initCamera(){const{clientHeight:e,clientWidth:t}=this.container;this.camera=new n.PerspectiveCamera(45,t/e,.25,1e3),this.camera.near=.1;const{camera:i}=this.config;if(!i)return!1;const{x:s,y:o,z:a}=i;this.camera.position.set(s,o,a),this.camera.updateProjectionMatrix()}initScene(){this.scene=new n.Scene}addEvenListMouseLisatener(){this.onWindowResizesListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.onWindowResizesListener),this.onMouseMoveListener=this.onMouseMoveModel.bind(this),this.container.addEventListener("mousemove",this.onMouseMoveListener)}initControls(){this.controls=new o.z(this.camera,this.renderer.domElement),this.controls.enablePan=!0,this.controls.enabled=!0}sceneAnimation(){this.renderAnimation=requestAnimationFrame((()=>this.sceneAnimation())),this.controls.update(),this.scene.traverse((e=>{e instanceof n.Scene&&(this.materials.scene=e.background,e.background=null),!this.glowMaterialList.includes(e.name)&&e.isMesh&&(this.materials[e.uuid]=e.material,e.material=new n.MeshBasicMaterial({color:"black"}))})),this.glowComposer.render(),this.scene.traverse((e=>{this.materials[e.uuid]&&(e.material=this.materials[e.uuid],delete this.materials[e.uuid]),e instanceof n.Scene&&(e.background=this.materials.scene,delete this.materials.scene)})),this.effectComposer.render()}createEffectComposer(){const{clientHeight:e,clientWidth:t}=this.container;this.effectComposer=new r.x(this.renderer);const i=new l.C(this.scene,this.camera);this.effectComposer.addPass(i),this.outlinePass=new h.f(new n.Vector2(t,e),this.scene,this.camera),this.outlinePass.visibleEdgeColor=new n.Color("#FF8C00"),this.outlinePass.hiddenEdgeColor=new n.Color("#8a90f3"),this.outlinePass.edgeGlow=2,this.outlinePass.edgeThickness=1,this.outlinePass.edgeStrength=4,this.outlinePass.pulsePeriod=100,this.effectComposer.addPass(this.outlinePass);let s=new c.v;this.effectComposer.addPass(s);let o=new d.T(m.C);const a=this.renderer.getPixelRatio();o.uniforms.resolution.value.set(1/(t*a),1/(e*a)),o.renderToScreen=!0,o.needsSwap=!0,this.effectComposer.addPass(o),this.unrealBloomPass=new p.m(new n.Vector2(t,e),0,0,0);const u={minFilter:n.LinearFilter,magFilter:n.LinearFilter,format:n.RGBAFormat,stencilBuffer:!1},g=new n.WebGLRenderTarget(2*t,2*e,u);this.glowComposer=new r.x(this.renderer,g),this.glowComposer.renderToScreen=!1,this.glowComposer.addPass(new l.C(this.scene,this.camera)),this.glowComposer.addPass(this.unrealBloomPass);let f=new d.T(new n.ShaderMaterial({uniforms:{baseTexture:{value:null},bloomTexture:{value:this.glowComposer.renderTarget2.texture},tDiffuse:{value:null}},vertexShader:w.C7,fragmentShader:w.zH,defines:{}}),"baseTexture");f.renderToScreen=!0,f.needsSwap=!0,this.effectComposer.addPass(f)}loadModel({filePath:e,fileType:t,scale:i,map:s,position:o}){return new Promise(((a,r)=>{const l=this.fileLoaderMap[t];l.load(e,(e=>{switch(t){case"glb":this.model=e.scene,this.skeletonHelper=new n.SkeletonHelper(e.scene);break;case"fbx":this.model=e,this.skeletonHelper=new n.SkeletonHelper(e);break;case"gltf":this.model=e.scene,this.skeletonHelper=new n.SkeletonHelper(e.scene);break;case"obj":this.model=e,this.skeletonHelper=new n.SkeletonHelper(e);break;default:break}if(this.getModelMeaterialList(s),this.modelAnimation=e.animations||[],this.setModelPositionSize(),i&&this.model.scale.set(i,i,i),this.model.position.set(0,-.5,0),o){const{x:e,y:t,z:i}=o;this.model.position.set(e,t,i)}this.skeletonHelper.visible=!1,this.scene.add(this.skeletonHelper),this.glowMaterialList=this.modelMaterialList.map((e=>e.name)),this.scene.add(this.model),a(!0)}),(()=>{}),(e=>{ElMessage.error("文件错误"),console.log(e),r()}))}))}onWindowResize(){const{clientHeight:e,clientWidth:t}=this.container;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.effectComposer&&this.effectComposer.setSize(t,e),this.glowComposer&&this.glowComposer.setSize(t,e)}onClearModelData(){cancelAnimationFrame(this.rotationAnimationFrame),cancelAnimationFrame(this.renderAnimation),cancelAnimationFrame(this.animationFrame),this.scene.traverse((e=>{"Mesh"===e.type&&(e.geometry.dispose(),e.material.dispose())})),this.scene.clear(),this.renderer.clear(),this.renderer.dispose(),this.camera.clear(),this.gridHelper&&(this.gridHelper.clear(),this.gridHelper.dispose()),this.axesHelper&&(this.axesHelper.clear(),this.axesHelper.dispose()),this.effectComposer.dispose(),this.glowComposer.dispose(),this.container.removeEventListener("mousemove",this.onMouseMoveListener),window.removeEventListener("resize",this.onWindowResizesListener),this.config=null,this.container=null,this.camera=null,this.scene=null,this.renderer=null,this.controls=null,this.model=null,this.fileLoaderMap=null,this.modelAnimation=null,this.animationMixer=null,this.animationColock=null,this.animationFrame=null,this.rotationAnimationFrame=null,this.animateClipAction=null,this.loopMap=null,this.skeletonHelper=null,this.gridHelper=null,this.axesHelper=null,this.planeGeometry=null,this.modelMaterialList=null,this.effectComposer=null,this.outlinePass=null,this.renderAnimation=null,this.raycaster,this.mouse=null,this.modelTextureMap=null,this.glowComposer=null,this.unrealBloomPass=null,this.glowMaterialList=null,this.materials=null}setModelPositionSize(){this.model.updateMatrixWorld();const e=(new n.Box3).setFromObject(this.model),t=e.getSize(new n.Vector3),i=e.getCenter(new n.Vector3),s=Math.max(t.x,t.y,t.z),o=2.5,a=o/(s>1?s:.5);this.model.scale.set(a,a,a),this.controls.maxDistance=10*t.length(),this.camera.lookAt(i),this.camera.updateProjectionMatrix()}getModelMeaterialList(e){const t=!!e;this.modelMaterialList=[],this.model.traverse((i=>{if(i.isMesh){if(i.castShadow=!0,i.frustumCulled=!1,i.material){const{name:e,color:t,map:s}=i.material,n=i.material.clone();i.material=n,this.modelMaterialList.push(i)}if(i.material&&t){const t=(new n.TextureLoader).load(e),s=i.material.clone();i.material=s,i.material.map=t}}}))}setSceneBackground(){const{background:e}=this.config;if(!e)return!1;if(e.visible){const{color:t,image:i,viewImg:s}=e;switch(e.type){case 1:this.scene.background=new n.Color(t);break;case 2:this.scene.background=(new n.TextureLoader).load(i);break;case 3:const e=(new n.TextureLoader).load(s);e.mapping=n.EquirectangularReflectionMapping,this.scene.background=e,this.scene.environment=e;break;default:break}}else this.scene.background=new n.Color("#000")}setModelMeaterial(){const{material:e}=this.config;if(!e||!e.meshList)return!1;const t=f.or.map((e=>e.id));e.meshList.forEach((i=>{const s=this.model.getObjectByProperty("name",i.meshName),{color:o,opacity:a,depthWrite:r,wireframe:l,visible:h,type:c}=i,{map:d}=s.material;if(e.materialType?s.material=new n[c]({map:d}):s.material.map=d,i.meshFrom)if(t.includes(i.meshFrom)){const t=f.or.find((e=>e.id==i.meshFrom))||{},o=(new n.TextureLoader).load(t.url);e.materialType?s.material=new n[c]({map:o}):s.material.map=o}else{const t=this.model.getObjectByProperty("name",i.meshFrom),{map:o}=t.material;e.materialType?s.material=new n[c]({map:o}):s.material.map=o}s.material.visible=h,s.material.color.set(new n.Color(o)),s.material.wireframe=l,s.material.depthWrite=r,s.material.transparent=!0,s.material.opacity=a}))}setModelLaterStage(){const{stage:e}=this.config;if(!e)return!1;const{threshold:t,strength:i,radius:s,toneMappingExposure:n,meshPositonList:o}=e;e.glow?(this.unrealBloomPass.threshold=t,this.unrealBloomPass.strength=i,this.unrealBloomPass.radius=s,this.renderer.toneMappingExposure=n):(this.unrealBloomPass.threshold=0,this.unrealBloomPass.strength=0,this.unrealBloomPass.radius=0,this.renderer.toneMappingExposure=n),o.forEach((e=>{const t=this.model.getObjectByProperty("name",e.name),{x:i,y:s,z:n}=e;t.position.set(i,s,n)}))}onMouseMoveModel(e){if(this.modelAnimation.length)return!1;const{clientHeight:t,clientWidth:i,offsetLeft:s,offsetTop:n}=this.container;this.mouse.x=(e.clientX-s)/i*2-1,this.mouse.y=-(e.clientY-n)/t*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const o=this.raycaster.intersectObjects(this.scene.children).filter((e=>e.object.isMesh&&this.glowMaterialList.includes(e.object.name)));if(o.length>0){const t=document.getElementById("mesh-txt");if(this.modelAnimation.length)return document.body.style.cursor="pointer",!1;const{hoverMeshTag:i}=this.config.stage;if(i){const i=o[0].object;t.innerHTML=i.name,t.style.display="block",t.style.top=e.clientY-n+"px",t.style.left=e.clientX-s+20+"px"}document.body.style.cursor="pointer"}else{const e=document.getElementById("mesh-txt");document.body.style.cursor="",e.style.display="none"}}setSceneLight(){const{light:e}=this.config;if(!e)return!1;if(e.ambientLight){const t=new n.AmbientLight(e.ambientLightColor,e.ambientLightIntensity);t.visible=e.ambientLight,this.scene.add(t)}if(e.directionalLight){const t=new n.DirectionalLight(e.directionalLightColor,e.directionalLightIntensity),{x:i,y:s,z:o}=(0,M.E3)(e.directionalHorizontal,e.directionalVertical,e.directionalSistance);t.position.set(i,s,o),t.castShadow=e.directionaShadow,t.visible=e.directionalLight,this.scene.add(t);const a=new n.DirectionalLightHelper(t,.5);a.visible=e.directionalLightHelper,this.scene.add(a)}if(e.pointLight){const t=new n.PointLight(e.pointLightColor,e.pointLightIntensity,100);t.visible=e.pointLight;const{x:i,y:s,z:o}=(0,M.E3)(e.pointHorizontal,e.pointVertical,e.pointSistance);t.position.set(i,s,o),this.scene.add(t);const a=new n.PointLightHelper(t,.5);a.visible=e.pointLightHelper,this.scene.add(a)}if(e.spotLight){const t=new n.SpotLight(e.spotLightColor,900);t.visible=e.spotLight,t.map=(new n.TextureLoader).load(i(8208)),t.decay=2,t.shadow.mapSize.width=1920,t.shadow.mapSize.height=1080,t.shadow.camera.near=1,t.shadow.camera.far=10,t.intensity=e.spotLightIntensity,t.angle=e.spotAngle,t.penumbra=e.spotPenumbra,t.shadow.focus=e.spotFocus,t.castShadow=e.spotCastShadow,t.distance=e.spotDistance;const{x:s,y:o,z:a}=(0,M.E3)(e.spotHorizontal,e.spotVertical,e.spotSistance);t.position.set(s,o,a),this.scene.add(t);const r=new n.SpotLightHelper(t);r.visible=e.spotLightHelper&&e.spotLight,this.scene.add(r)}if(e.planeGeometry){const i=new n.PlaneGeometry(e.planeWidth,e.planeHeight);var t=new n.MeshStandardMaterial({color:e.planeColor});const s=new n.Mesh(i,t);s.name="planeGeometry",s.rotation.x=-Math.PI/2,s.position.set(0,-.5,0),s.visible=e.planeGeometry,s.geometry.verticesNeedUpdate=!0,s.receiveShadow=!0,this.scene.add(s)}}setModelAnimation(){const{animation:e}=this.config;if(!e)return!1;if(this.modelAnimation.length&&e&&e.visible){this.animationMixer=new n.AnimationMixer(this.model);const{animationName:t,timeScale:i,weight:s,loop:o}=e,a=n.AnimationClip.findByName(this.modelAnimation,t);a&&(this.animateClipAction=this.animationMixer.clipAction(a),this.animateClipAction.setEffectiveTimeScale(i),this.animateClipAction.setEffectiveWeight(s),this.animateClipAction.setLoop(this.loopMap[o]),this.animateClipAction.play()),this.animationFrameFun()}if(e.rotationVisible){const{rotationType:t,rotationSpeed:i}=e;this.rotationAnimationFun(t,i)}}animationFrameFun(){this.animationFrame=requestAnimationFrame((()=>this.animationFrameFun())),this.animationMixer&&this.animationMixer.update(this.animationColock.getDelta())}rotationAnimationFun(e,t){this.rotationAnimationFrame=requestAnimationFrame((()=>this.rotationAnimationFun(e,t))),this.model.rotation[e]+=t/50}setModelAxleLine(){const{attribute:e}=this.config;if(!e)return!1;const{axesHelper:t,axesSize:i,color:s,divisions:o,gridHelper:a,positionX:r,positionY:l,positionZ:h,size:c,skeletonHelper:d,visible:m,x:p,y:u,z:g,rotationX:w,rotationY:f,rotationZ:M}=e;if(!m)return!1;this.gridHelper=new n.GridHelper(c,o,s,s),this.gridHelper.position.set(p,u,g),this.gridHelper.visible=a,this.gridHelper.material.linewidth=.1,this.scene.add(this.gridHelper),this.axesHelper=new n.AxesHelper(i),this.axesHelper.visible=t,this.axesHelper.position.set(0,-.5,0),this.scene.add(this.axesHelper),this.model.position.set(r,l,h),this.model.rotation.set(w,f,M),this.renderer.shadowMap.enabled=!0,this.skeletonHelper.visible=d}}function b(e){const t="answer"+(0,M.d1)(5,10);let i=null;return(0,s.aZ)({data(){return{loading:!1}},props:["width","height"],watch:{$props:{handler(e){i&&(0,M.Ds)(i.onWindowResize(),200)},immediate:!1,deep:!0}},render(){return this.width&&this.height?(0,s.h)((0,s.wy)((0,s.Wm)("div",{style:{width:this.width-10+"px",height:this.height-10+"px",pointerEvents:"none"},id:t},null),[[(0,s.Q2)("zLoading"),this.loading]])):(0,s.h)((0,s.wy)((0,s.Wm)("div",{style:{width:"100%",height:"100%"},id:t},null),[[(0,s.Q2)("zLoading"),this.loading]]))},async mounted(){this.loading=!0,i=new L(e,t);const s=await i.init();s&&(this.loading=!1)},beforeUnmount(){i.onClearModelData()}})}t.Z=b}}]);