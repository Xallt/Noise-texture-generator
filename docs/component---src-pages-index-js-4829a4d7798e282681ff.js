(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(210),i=n(225),s=n.n(i);var l=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this;return r.a.createElement("div",{ref:function(t){e.el=t},className:"fill text-autosize"},r.a.createElement("h1",{align:"center",style:{margin:"4.5% 0 0 0"}},"Noise generation"),r.a.createElement("h4",{align:"center"},"See on ",r.a.createElement("a",{href:"https://github.com/Xallt/Noise-map-generator"},"Github")))},a}(r.a.Component),c=n(313),p=n(316),h=(n(23),n(324)),u=(n(52),n(321));var m=function(e,t){return function(n){var a,o;function i(e){var t;return(t=n.call(this,e)||this).state={value:e.initialValue||e.min||0},t}o=n,(a=i).prototype=Object.create(o.prototype),a.prototype.constructor=a,a.__proto__=o;var s=i.prototype;return s.shouldComponentUpdate=function(e,t){return this.state.value!==t.value},s.render=function(){var n=this;return r.a.createElement(c.a,{container:!0,justify:"space-around"},r.a.createElement(c.a,{item:!0,xs:3},this.props.name),r.a.createElement(c.a,{item:!0,xs:6},r.a.createElement(e,Object.assign({},this.props,{onChange:function(e){n.setState({value:e}),n.props.onChange(e)},value:this.state.value}))),r.a.createElement(c.a,{item:!0,xs:2},!this.props.hideValue&&(!t||!t.hideValue)&&r.a.createElement(u.a,{value:this.state.value,margin:"dense",onChange:function(e){n.setState({value:parseFloat(e.target.value)})},inputProps:{step:this.props.step,min:this.props.min,max:this.props.max,type:"number"}})))},i}(a.Component)};var f=m(function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={value:t.initialValue||t.min||0},n.handleChange=n.handleChange.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.handleChange=function(e,t){this.props.onChange(t),this.setState({value:t})},o.componentDidUpdate=function(e,t){this.props.value!==t.value&&(this.props.onChange(this.props.value),this.setState({value:this.props.value}))},o.shouldComponentUpdate=function(e,t){return e.value&&this.state.value!==e.value||this.state.value!==t.value},o.render=function(){var e={};return this.props.step&&(e.step=this.props.step),r.a.createElement(h.a,Object.assign({min:this.props.min,max:this.props.max,defaultValue:this.props.initialValue,value:this.state.value,onChange:this.handleChange},e))},a}(a.Component)),d=n(315);var v=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).seed=0,n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this;return r.a.createElement(c.a,{container:!0,style:{marginBottom:"2%"}},r.a.createElement(c.a,{item:!0,xs:12,style:{textAlign:"center"}},r.a.createElement(d.a,{onClick:function(t){e.props.onChange(++e.seed)},color:"default",variant:"contained"},"Randomize")))},a}(a.Component),g=(n(30),n(29),n(13),n(241),n(317)),y=n(323);var E=m(function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={value:t.value||Object.entries(n.props.options)[0][1]},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){for(var e=this,t=[],n=0,a=Object.entries(this.props.options);n<a.length;n++){var o=a[n],i=o[0],s=o[1];t.push(r.a.createElement(y.a,{value:s,key:i},i))}return r.a.createElement(g.a,{onChange:function(t){e.props.onChange(t.target.value),e.setState({value:t.target.value})},value:this.state.value},t)},a}(a.Component),{hideValue:!0}),C=n(322);function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var x=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).sendInput=n.sendInput.bind(_(n)),n.onParamChange=n.onParamChange.bind(_(n)),n.params={resolution:256,octaves:8,seed:0,gain:.5,lacunarity:2,scale:3,dissolution:.05,motionSteps:1,offsetScale:10,channels:1},n.paramChange={resolution:n.onParamChange("resolution"),seed:n.onParamChange("seed"),channels:n.onParamChange("channels"),octaves:n.onParamChange("octaves"),scale:n.onParamChange("scale"),gain:n.onParamChange("gain"),lacunarity:n.onParamChange("lacunarity"),dissolution:n.onParamChange("dissolution"),offsetScale:n.onParamChange("offsetScale")},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){this.sendInput()},o.sendInput=function(){this.props.onChange(this.params)},o.onParamChange=function(e){var t=this;return function(n){t.params[e]=n,t.sendInput()}},o.render=function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:e.root},r.a.createElement(c.a,{container:!0},r.a.createElement(v,{name:"Seed",onChange:this.paramChange.seed}),r.a.createElement(E,{name:"Resolution",options:{"256x256":256,"512x512":512,"1024x1024":1024,"2048x2048":2048,"4096x4096":4096},onChange:this.paramChange.resolution}),r.a.createElement(E,{name:"Channels",options:{1:1,3:3},onChange:this.paramChange.channels}),r.a.createElement("hr",null),r.a.createElement(f,{name:"Octaves",min:1,max:8,initialValue:8,onChange:this.paramChange.octaves}),r.a.createElement(f,{name:"Scale",min:1,max:30,step:.01,initialValue:3,onChange:this.paramChange.scale}),r.a.createElement(f,{name:"Gain",min:0,max:3,step:.01,initialValue:.5,onChange:this.paramChange.gain}),r.a.createElement(f,{name:"Lacunarity",min:1,max:8,step:.01,initialValue:2,onChange:this.paramChange.lacunarity}),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement("h4",{style:{margin:"3% 0"}},"Noise offsetting")),r.a.createElement(f,{name:"Strength",min:.001,max:1,step:.01,initialValue:.05,onChange:this.paramChange.dissolution}),r.a.createElement(f,{name:"Offset scale",min:1,max:20,step:.01,initialValue:10,onChange:this.paramChange.offsetScale}))))},a}(r.a.Component),b=Object(C.a)(function(e){return{root:{width:"95%",margin:"0 auto",padding:"2% 1%"}}})(x),S=n(68),w=n.n(S),P=n(262),z=n(286),O=n.n(z),N=n(287),j=n.n(N);var V=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={size:0},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.updateSize=function(){var e=s()(w.a.findDOMNode(this).parentNode);this.setState({size:Math.min(e.width(),e.height())})},o.componentDidMount=function(){var e=this;window.addEventListener("resize",function(t){e.updateSize()}),this.scene=new P.c,this.camera=new P.b(-1,1,1,-1,.5,100),this.camera.position.z=5,this.renderer=new P.h({canvas:this.canvas}),this.renderer.setSize(this.props.texSize,this.props.texSize),this.shape=new P.e([new P.g(-1,-1),new P.g(-1,1),new P.g(1,1),new P.g(1,-1)]),this.geo=new P.f(this.shape),this.constructUniforms(),this.material=new P.d({uniforms:this.uniforms,vertexShader:O.a,fragmentShader:j.a}),this.mesh=new P.a(this.geo,this.material),this.scene.add(this.mesh),this.renderer.domElement.style.height="100%",this.renderer.domElement.style.width="",this.renderer.domElement.style.margin="0 auto",this.renderer.domElement.style.display="block"},o.constructUniforms=function(){this.uniforms={};for(var e=0,t=Object.entries(this.props.uniformValues);e<t.length;e++){var n=t[e],a=n[0],r=n[1];this.uniforms[a]={value:r}}},o.setUniforms=function(){for(var e=0,t=Object.entries(this.props.uniformValues);e<t.length;e++){var n=t[e],a=n[0],r=n[1];this.uniforms[a].value=r}},o.componentDidUpdate=function(){this.renderer.setSize(this.props.texSize,this.props.texSize),this.renderer.domElement.style.height="100%",this.renderer.domElement.style.width="",this.setUniforms(),this.renderer.render(this.scene,this.camera)},o.render=function(){var e=this;return r.a.createElement("canvas",{ref:function(t){e.canvas=t},style:{height:"100%",display:"block",margin:"0 auto"},width:this.props.texSize,height:this.props.texSize})},a}(a.Component);var I=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e={seed:this.props.inputParams.seed,scale:this.props.inputParams.scale,gain:this.props.inputParams.gain,lacunarity:this.props.inputParams.lacunarity,octaves:this.props.inputParams.octaves,motionSteps:this.props.inputParams.motionSteps,dissolution:this.props.inputParams.dissolution,offsetScale:this.props.inputParams.offsetScale,channels:this.props.inputParams.channels};return r.a.createElement(V,{texSize:512,uniformValues:e})},a}(r.a.Component),k=n(319);function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var M=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={windowWidth:0,windowHeight:0,inputParams:{}},n.handleInput=n.handleInput.bind(F(n)),n.updateSize=n.updateSize.bind(F(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){window.onresize=this.updateSize,this.updateSize(),s()(function(){s()("html").fadeIn(500)})},o.updateSize=function(){var e=Math.min(.9*window.innerWidth,1.8*window.innerHeight);this.setState({width:e,height:e/2})},o.handleInput=function(e){this.setState({inputParams:e})},o.render=function(){var e=this.props.classes;return r.a.createElement(k.a,{className:e.root,style:{width:this.state.width,height:this.state.height}},r.a.createElement(k.a,{className:e.limitSize},r.a.createElement(p.a,{className:e.limitSize},r.a.createElement(c.a,{container:!0,className:e.limitSize},r.a.createElement(c.a,{item:!0,xs:12,md:5},r.a.createElement(c.a,{container:!0},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(l,null)),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(b,{onChange:this.handleInput})))),r.a.createElement(c.a,{item:!0,xs:12,md:7},r.a.createElement(I,{inputParams:this.state.inputParams}))))))},a}(r.a.Component),U=Object(C.a)(function(e){return{root:{margin:"0 auto",paddingTop:"1%"},limitSize:{height:"100%"}}})(M);t.default=function(){return r.a.createElement(o.a,{title:"Noise generator"},r.a.createElement(U,null))}},210:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(221);n(223),n(224);t.a=function(e){var t=e.children,n=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Helmet,null,r.a.createElement("title",null,n),r.a.createElement("link",{rel:"stylesheet"}),r.a.createElement("link",{rel:"shortcut icon",href:"favicon.ico",type:"image/x-icon"}),r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"})),r.a.createElement("main",null,t))}},286:function(e,t){e.exports="#define GLSLIFY 1\nvarying vec2 vPos;\n\nvoid main() {\n    gl_Position = vec4(position.xy, 0., 1.);\n    vPos = position.xy / 2. + .5;\n}"},287:function(e,t){e.exports="#define GLSLIFY 1\nvarying vec2 vPos;\n\nuniform float seed;\n\n#define MAX_OCTAVES 20\n\nuniform float scale;\nuniform float gain, lacunarity, dissolution, offsetScale;\nuniform int octaves, channels;\n\nfloat random(float x) {\n    return fract(sin(x * 1238.412 + seed * 56.21) * 219.32 + .76 - seed * 89.1);\n}\nfloat random(vec2 p) {\n    return random(random(p.x) * random(p.y) + random(p.x * p.y) - random(p.x - p.y) * 129.);\n}\n\nvec2 rotate(vec2 p, float a) {\n    return vec2(\n        p.x * cos(a) - p.y * sin(a),\n        p.x * sin(a) + p.y * cos(a)\n    );\n}\n\n// Perlin noise\nfloat noise(vec2 p) {\n    vec2 n = floor(p), f = fract(p);\n    f = smoothstep(0., 1., f);\n    float c = random(n + vec2(0., 1.)), d = random(n + vec2(1., 1.)),\n          a = random(n + vec2(0., 0.)), b = random(n + vec2(1., 0.));\n    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\n// Fractional brownian motion\nfloat fbm(vec2 st) {\n    float res = 0.;\n    float amplitude = 1.;\n    st = st * scale;\n    for (int i = 0; i < MAX_OCTAVES; ++i) {\n        if (i >= octaves) {\n            break;\n        }\n        res += amplitude * noise(rotate(st, 5.12 * float(i)));\n        amplitude *= gain;\n        st *= lacunarity;\n    }\n    if (gain == 1.) {\n        res = res / float(octaves);\n    }\n    else {\n        res = res * (gain - 1.) / (pow(gain, float(octaves)) - 1.); \n    }\n    return res;\n}\n\nfloat offsetNoise(vec2 st) {\n    vec2 ost = st * offsetScale;\n    float r_a = random(123.) - .5, r_B = random(r_a) * 100. - 50., r_C = random(r_B) * 100. - 50., \n            r_d = random(r_C)  - .5, r_E = random(r_d) * 100. - 50., r_F = random(r_E) * 100. - 50.;\n    vec2 offset = vec2(fbm(vec2(ost.y * r_a + r_B, ost.x * r_a + r_C)), fbm(vec2(ost.y * r_d + r_E, ost.x * r_d + r_F)));\n    st = st + offset * dissolution;\n    return fbm(st);\n}\n\nvoid main() {\n    if (channels == 1) {\n        float r = offsetNoise(vPos), \n              g = r, \n              b = r;\n        gl_FragColor = vec4(r, g, b, 1.);\n    }\n    else if (channels == 2) {\n        float r = offsetNoise(vPos), \n              g = offsetNoise(rotate(vPos, 45.) + vec2(617., 213.)), \n              b = (r + g) / 2.;\n        gl_FragColor = vec4(r, g, b, 1.);\n    }\n    else if (channels == 3) {\n        float r = offsetNoise(vPos), \n              g = offsetNoise(rotate(vPos, 45.) + vec2(617., 213.)), \n              b = offsetNoise(rotate(vPos, 30.) - vec2(617., 213.));\n        gl_FragColor = vec4(r, g, b, 1.);\n    }\n}"}}]);
//# sourceMappingURL=component---src-pages-index-js-4829a4d7798e282681ff.js.map