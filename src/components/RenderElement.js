import React from 'react'
import PixelShaderCanvas from './PixelShaderCanvas'

class Renderer extends React.Component {
  
  render() {
    const uniformValues = {
      seed: this.props.inputParams.seed
    }
    return (
      <PixelShaderCanvas texSize={this.props.inputParams.resolution} uniformValues={uniformValues} />
    )
  }
}


export default Renderer