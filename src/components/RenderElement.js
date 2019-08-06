import React from 'react'
import PixelShaderCanvas from './PixelShaderCanvas'

class Renderer extends React.Component {
  
  render() {
    return (
      <PixelShaderCanvas mapper={this.props.drawer(this.props.panelInput)} texSize = {this.props.texSize} />
    )
  }
}


export default Renderer