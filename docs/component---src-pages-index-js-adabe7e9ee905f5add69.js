(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{190:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(192),o=n(206),s=n.n(o);n(208);var u=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{align:"center",style:{margin:"2% 0 0 0"}},"Noise generation"),a.a.createElement("h4",{align:"center"},"Made by ",a.a.createElement("a",{href:"https://xallt.github.io"},"Xallt")))},r}(a.a.Component);n(209),n(38);var l=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={value:(t.dataTransform||function(e){return e})(t.defaultValue||t.min||0)},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this,t=this.props,n=t.min,r=t.max,i=t.segmentation,o=t.name,s=t.defaultValue,u=t.dataTransform;return i=i||1,n=n||0,s=s||n,u=u||function(e){return e},a.a.createElement(a.a.Fragment,null,o,":  ",a.a.createElement("input",{id:"i"+o,type:"range",min:n*i,max:r*i,onInput:function(t){e.props.onInput(u(t.target.value/i)),e.setState({value:u(t.target.value/i)})},defaultValue:s*i})," ",a.a.createElement("mark",{className:"invert"},this.state.value),a.a.createElement("br",null))},r}(r.Component);var p=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={value:t.defaultValue||0},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this,t=this.props,n=t.defaultValue,r=t.name;return n=n||0,a.a.createElement(a.a.Fragment,null,r,":  ",a.a.createElement("input",{id:"i"+r,type:"number",onInput:function(t){e.props.onInput(parseInt(t.target.value)||0),e.setState({value:t.target.value})},defaultValue:n}))},r}(r.Component);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).sendInput=n.sendInput.bind(c(n)),n.onResolutionInput=n.onResolutionInput.bind(c(n)),n.onSeedInput=n.onSeedInput.bind(c(n)),n.defaultParams={resPower:7e3},n.params={resolution:128},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.componentDidMount=function(){this.sendInput()},i.sendInput=function(){this.props.onInput(this.params)},i.onResolutionInput=function(e){this.params.resolution=e,this.sendInput()},i.onSeedInput=function(e){this.params.seed=e,this.sendInput()},i.render=function(){return a.a.createElement("div",{style:{width:"90%",margin:"1% auto",padding:"1%"}},a.a.createElement(l,{min:0,max:10,segmentation:1e3,name:"Resolution",defaultValue:7,onInput:this.onResolutionInput,dataTransform:function(e){return Math.round(Math.pow(2,e))}}),a.a.createElement(p,{defaultValue:0,name:"Seed",onInput:this.onSeedInput}))},r}(a.a.Component),d=(n(30),n(29),n(13),n(210),n(212)),m=n(239),f=n.n(m),v=n(240),y=n.n(v);var g=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).animate=n.animate.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.componentDidMount=function(){this.scene=new d.c,this.camera=new d.b(-1,1,1,-1,.5,100),this.camera.position.z=5,console.log(this.camera),this.renderer=new d.h({canvas:this.canvas}),this.renderer.setSize(this.props.texSize,this.props.texSize),this.shape=new d.e([new d.g(-1,-1),new d.g(-1,1),new d.g(1,1),new d.g(1,-1)]),this.geo=new d.f(this.shape),this.constructUniforms(),this.material=new d.d({uniforms:this.uniforms,vertexShader:f.a,fragmentShader:y.a}),this.mesh=new d.a(this.geo,this.material),this.scene.add(this.mesh),console.log(this.scene),this.renderer.domElement.style.height="100%",this.renderer.domElement.style.width="",this.renderer.domElement.style.margin="0 auto",this.renderer.domElement.style.display="block",this.start()},i.constructUniforms=function(){this.uniforms={},this.uniforms.initialScale={value:20};for(var e=0,t=Object.entries(this.props.uniformValues);e<t.length;e++){var n=t[e],r=n[0],a=n[1];this.uniforms[r]={value:a}}},i.setUniforms=function(){this.uniforms.initialScale.value=20;for(var e=0,t=Object.entries(this.props.uniformValues);e<t.length;e++){var n=t[e],r=n[0],a=n[1];this.uniforms[r].value=a}},i.componentDidUpdate=function(){this.renderer.setSize(this.props.texSize,this.props.texSize),this.renderer.domElement.style.height="100%",this.renderer.domElement.style.width="",this.setUniforms()},i.start=function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))},i.animate=function(){this.renderScene(),this.frameId=requestAnimationFrame(this.animate)},i.renderScene=function(){this.renderer.render(this.scene,this.camera)},i.render=function(){var e=this;return a.a.createElement("canvas",{ref:function(t){e.canvas=t},style:{height:"100%",display:"block",margin:"0 auto"},width:this.props.texSize,height:this.props.texSize})},r}(r.Component);var w=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e={seed:this.props.inputParams.seed};return a.a.createElement(g,{texSize:this.props.inputParams.resolution,uniformValues:e})},r}(a.a.Component);function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var S=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={windowWidth:0,windowHeight:0,inputParams:{}},n.handleInput=n.handleInput.bind(E(n)),n.updateSize=n.updateSize.bind(E(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.componentDidMount=function(){window.onresize=this.updateSize,this.updateSize(),s()(function(){s()("html").fadeIn(500)})},i.updateSize=function(){this.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})},i.handleInput=function(e){this.setState({inputParams:e})},i.render=function(){return a.a.createElement("div",{style:{margin:"0 auto",width:.9*this.state.windowWidth,height:Math.min(.5*this.state.windowWidth,.9*this.state.windowHeight),fontSize:"1.5vw"}},a.a.createElement("div",{style:{height:"100%"}},a.a.createElement("div",{style:{height:"100%",width:"30%",float:"left"}},a.a.createElement("div",{style:{height:"20%"}},a.a.createElement(u,null)),a.a.createElement("div",{style:{height:"80%"}},a.a.createElement(h,{onInput:this.handleInput}))),a.a.createElement("div",{style:{height:"100%",width:"70%",float:"right"}},a.a.createElement(w,{inputParams:this.state.inputParams}))))},r}(a.a.Component);t.default=function(){return a.a.createElement(i.a,{title:"Beginner's title"},a.a.createElement(S,null))}},192:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(195);n(197);t.a=function(e){var t=e.children,n=e.title;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.Helmet,null,a.a.createElement("title",null,n),a.a.createElement("link",{rel:"stylesheet"})),a.a.createElement("main",null,t))}},239:function(e,t){e.exports="#define GLSLIFY 1\nvarying vec2 vPos;\n\nvoid main() {\n    gl_Position = vec4(position.xy, 0., 1.);\n    vPos = position.xy / 2. + .5;\n}"},240:function(e,t){e.exports="#define GLSLIFY 1\nvarying vec2 vPos;\n\nuniform float initialScale;\nuniform float seed;\n\nfloat random(float x) {\n    return fract(sin(x * 1238.412 + seed * 56.21) * 219.32 + .76 - seed * 89.1);\n}\nfloat random(vec2 p) {\n    return random(random(p.x) * random(p.y) + random(p.x * p.y) - random(p.x - p.y) * 129.);\n}\n\nfloat noise(vec2 p) {\n    vec2 n = floor(p), f = fract(p);\n    f = smoothstep(0., 1., f);\n    float c = random(n + vec2(0., 1.)), d = random(n + vec2(1., 1.)),\n          a = random(n + vec2(0., 0.)), b = random(n + vec2(1., 0.));\n    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n    // gl_FragColor = vec4(vec3(.1), 1.);\n    gl_FragColor = vec4(vec3(noise(vPos * initialScale)), 1.);\n}"}}]);
//# sourceMappingURL=component---src-pages-index-js-adabe7e9ee905f5add69.js.map