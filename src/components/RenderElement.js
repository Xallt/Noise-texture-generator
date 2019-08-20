import React from 'react'
import PixelShaderCanvas from './PixelShaderCanvas'

class Renderer extends React.Component {
  
  render() {
    const uniformValues = {
      seed: this.props.inputParams.seed,
      scale: this.props.inputParams.scale,
      gain: this.props.inputParams.gain,
      lacunarity: this.props.inputParams.lacunarity,
      octaves: this.props.inputParams.octaves,
      motionSteps: this.props.inputParams.motionSteps,
      dissolution: this.props.inputParams.dissolution,
      offsetScale: this.props.inputParams.offsetScale,
      channels: this.props.inputParams.channels
    }
    return <PixelShaderCanvas texSize={512} uniformValues={uniformValues} />
  }
}


export default Renderer