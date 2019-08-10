import React from 'react'
import PixelShaderCanvas from './PixelShaderCanvas'

class Renderer extends React.Component {
  
  render() {
    const uniformValues = {
      seed: this.props.inputParams.seed,
      scale: this.props.inputParams.scale,
      gain: this.props.inputParams.gain,
      lacunarity: this.props.inputParams.lacunarity,
      octaves: this.props.inputParams.octaves
    }
    return (
      <PixelShaderCanvas texSize={this.props.inputParams.resolution} uniformValues={uniformValues} />
    )
  }
}


export default Renderer