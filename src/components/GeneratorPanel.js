import React from 'react'

import '../styles/GeneratorPanel.css'

import SliderInput from './panel-inputs/SliderInput'
import NumberInput from './panel-inputs/NumberInput'

class Panel extends React.Component {

  constructor(props) {
    super(props)
    this.sendInput = this.sendInput.bind(this)
    this.onResolutionInput = this.onResolutionInput.bind(this)
    this.onSeedInput = this.onSeedInput.bind(this)

    // Default
    this.defaultParams = {
      resPower: 7000
    }
    this.params = {
      resolution: 128
    }
  }

  componentDidMount() {
    this.sendInput()
  }
  

  sendInput() {
    this.props.onInput(this.params);
  }

  onResolutionInput(value) {
    this.params.resolution = value
    this.sendInput()
  }

  onSeedInput(value) {
    this.params.seed = value
    this.sendInput()
  }

  render() {
    return (
      <div style={{width: "90%", margin: "1% auto", padding:"1%"}}>
        <SliderInput min={0} max={10} segmentation={1000} name="Resolution" defaultValue={7} 
                     onInput={this.onResolutionInput} 
                     dataTransform={(x) => Math.round(2 ** x)}/>
        <NumberInput defaultValue={0} name="Seed" onInput={this.onSeedInput} />
      </div>
    )
  }
}

export default Panel