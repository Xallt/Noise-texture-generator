import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import {Scene, OrthographicCamera, WebGLRenderer, Shape, Vector2, ShapeBufferGeometry, Mesh, ShaderMaterial} from 'three'
import vert from '../glsl/vert.glsl'
import frag from '../glsl/frag.glsl'

class PixelShaderCanvas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            size: 0
        }

        this.URLLoader = this.URLLoader.bind(this)
    }

    updateSize() {
        const par = $(ReactDOM.findDOMNode(this).parentNode)
        this.size = Math.min(par.width(), par.height())
        // this.topMargin = (par.height() - this.size) / 2
        this.renderer.domElement.style.height = this.size + "px"
        this.renderer.domElement.style.width = this.size + "px"
    }

    componentDidMount() {
        window.addEventListener('resize', (e) => {
            this.updateSize()
        })

        this.scene = new Scene()
        this.camera = new OrthographicCamera(-1, 1, 1, -1, 0.5, 100)
        this.camera.position.z = 5
        this.renderer = new WebGLRenderer({canvas: this.canvas})
        this.renderer.setSize(this.props.texSize, this.props.texSize)
        this.canvasForLoader = document.createElement("canvas")
        this.loadRenderer = new WebGLRenderer({canvas: this.canvasForLoader})
        this.loadRenderer.setSize(this.props.uniformValues.resolution, this.props.uniformValues.resolution)

        this.shape = new Shape([
            new Vector2(-1, -1),
            new Vector2(-1, 1),
            new Vector2(1, 1),
            new Vector2(1, -1)
        ])
        this.geo = new ShapeBufferGeometry(this.shape)
        this.constructUniforms()
        this.material = new ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vert,
            fragmentShader: frag
        })
        this.mesh = new Mesh(this.geo, this.material)
        this.scene.add(this.mesh)
        this.renderer.domElement.style.height = "100%"
        this.renderer.domElement.style.width = ""
        this.renderer.domElement.style.margin = "0 auto"
        this.renderer.domElement.style.display = "block"

        this.props.handleURLLoader(this.URLLoader)
    }
    shouldComponentUpdate(nextProps, nextState) {

        for (const [uniName, uniValue] of Object.entries(nextProps.uniformValues)) {
            if (this.uniforms[uniName].value !== uniValue) {
                return true
            }
        }
        return false
    }
    
    constructUniforms() {
        this.uniforms = {}
        for (const [uniName, uniValue] of Object.entries(this.props.uniformValues)) {
            this.uniforms[uniName] = {value: uniValue}
        }
    }
    setUniforms() {
        for (const [uniName, uniValue] of Object.entries(this.props.uniformValues)) {
            this.uniforms[uniName].value = uniValue
        }
    }
    URLLoader() {
        this.loadRenderer.setSize(this.props.loadResolution, this.props.loadResolution)
        this.loadRenderer.render(this.scene, this.camera)
        
        const blobPromise = new Promise(resolve => {
            this.canvasForLoader.toBlob((blob) => {
                resolve(URL.createObjectURL(blob))
            })
        })

        return blobPromise
    }
    componentDidUpdate() {
        this.renderer.setSize(this.props.texSize, this.props.texSize)
        this.setUniforms()
        this.renderer.render(this.scene, this.camera)
        this.renderer.domElement.style.height = this.size + "px"
        this.renderer.domElement.style.width = this.size + "px"
    }
    render() {
        return <canvas ref={(canv)=>{this.canvas = canv}} 
                    style={{display: "block"}} 
                    width={this.props.texSize} 
                    height={this.props.texSize}/>
    }
}

export default PixelShaderCanvas