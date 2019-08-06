import React , {Component} from 'react'

import Async from 'async'
import Underscore from 'underscore'

class CanvasDrawer {
    constructor(context) {
        this.ctx = context
    }
    pixel(x, y, rgb) {
        this.ctx.fillStyle = 'rgb(' + rgb[0] * 256 + ',' + rgb[1] * 256 + ',' + rgb[2] * 256 + ')'
        this.ctx.fillRect(x, y, 1, 1)
    }
    map(func) {
        var self = this
        var w = this.ctx.canvas.width, h = this.ctx.canvas.height
        Async.each(Underscore.range(h), (i, callback) => {
            for (let t = 0; t < w; t += 1) {
                self.pixel(i, t, func(i / h, t / w))
            }
            callback()
        })
    }
}

class PixelShaderCanvas extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef()
    }
    draw() {
        this.renderer.map(this.props.mapper)
    }
    componentDidMount() {
        const ctx = this.canvasRef.current.getContext('2d')
        console.log(this.canvasRef.current.getContext('webgl'))
        this.renderer = new CanvasDrawer(ctx)
        this.draw()
    }
    componentDidUpdate() {
        this.draw()
    }

    render() {
        return (
            <canvas ref={this.canvasRef} width={this.props.texSize} height={this.props.texSize} style={{height:'100%', margin:'0 auto', display:'block'}}></canvas>    
        )
    }
}

export default PixelShaderCanvas