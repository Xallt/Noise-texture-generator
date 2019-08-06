import React , {Component} from 'react'
import {Scene, OrthographicCamera, WebGLRenderer} from 'three'

class PixelShaderCanvas extends Component {
    constructor(props) {
        super(props);

        this.animate = this.animate.bind(this)
    }
    componentDidMount() {
        this.scene = new Scene()
        this.camera = new OrthographicCamera(
            -this.props.texSize / 2, 
            this.props.texSize / 2, 
            this.props.texSize / 2, 
            -this.props.texSize / 2, 
            1, 2
        )
        this.renderer = new WebGLRenderer()
        this.renderer.setClearColor('#FF0000')
        this.renderer.setSize(this.props.texSize, this.props.texSize)
        this.mount.appendChild(this.renderer.domElement)
        
        this.renderer.domElement.style.height = "100%"
        this.renderer.domElement.style.width = ""
        this.renderer.domElement.style.margin = "0 auto"
        this.renderer.domElement.style.display = "block"

        this.start()
    }
    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }
    animate() {
        this.renderScene()
        this.frameId = requestAnimationFrame(this.animate)
    }
    renderScene() {
        this.renderer.render(this.scene, this.camera)
    }
    render() {
        return (
            <div style={{width:"100%", height: "100%"}} ref={(mount) => {this.mount = mount}}/>
        )
    }
}

export default PixelShaderCanvas