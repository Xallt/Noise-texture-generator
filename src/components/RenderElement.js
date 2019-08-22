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
      offsetStrength: this.props.inputParams.offsetStrength,
      offsetScale: this.props.inputParams.offsetScale,
      offsetOctaves: this.props.inputParams.offsetOctaves,
      channels: this.props.inputParams.channels,
    }
    return <PixelShaderCanvas texSize={512} uniformValues={uniformValues} />
  }
}


export default Renderer