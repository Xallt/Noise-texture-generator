import React from 'react'

import '../styles/GeneratorPanel.css'

import SliderInput from './panel-inputs/SliderInput'
import RandomizerInput from './panel-inputs/RandomizerInput'

class Panel extends React.Component {

  constructor(props) {
    super(props)
    this.sendInput = this.sendInput.bind(this)
    this.onParamInput = this.onParamInput.bind(this)
    
    this.params = {
      resolution: 1024,
      octaves: 5,
      seed: 0,
      gain: 0.5,
      lacunarity: 2.0,
      scale: 6.0,
      dissolution: 0.01,
      motionSteps: 1,
      offsetScale: 10.0
    }
  }

  componentDidMount() {
    this.sendInput()

    // Autosize(this.el)
  }
  

  sendInput() {
    this.props.onInput(this.params);
  }

  onParamInput(paramName) {
    return ((x) => {
      this.params[paramName] = x
      this.sendInput()
    })
  }

  render() {
    return (
      <div ref={(el)=>{this.el = el}} style={{width: "90%", margin: "1% auto", padding:"1%"}}>
        <SliderInput name="Resolution" 
                     min={0} max={11} segmentation={100} defaultValue={10} 
                     onInput={this.onParamInput('resolution')} 
                     dataTransform={(x) => Math.round(2 ** x)}/>
        <RandomizerInput name="Seed"
                     onInput={this.onParamInput('seed')}/>
        <hr/>
        <SliderInput name="Octaves" 
                     min={1} max={8} defaultValue={5} 
                     onInput={this.onParamInput('octaves')}/>
        <SliderInput name="Scale" 
                     min={1} max={30} segmentation={100} defaultValue={6.0}
                     onInput={this.onParamInput('scale')}/>
        <SliderInput name="Gain" 
                     min={0} max={3} segmentation={100} defaultValue={0.5}
                     onInput={this.onParamInput('gain')}/>
        <SliderInput name="Lacunarity" 
                     min={1} max={8} segmentation={100} defaultValue={2}
                     onInput={this.onParamInput('lacunarity')}/>
        <hr/>
        <h4 style={{margin:"3% 0"}} >Noise offsetting</h4>
        <SliderInput name="Motion steps" 
                     min={0} max={5} defaultValue={1}
                     onInput={this.onParamInput('motionSteps')}/>
        <SliderInput name="Dissolution" 
                     min={0.001} max={1} segmentation={1000} defaultValue={0.1}
                     onInput={this.onParamInput('dissolution')} hideValue={true}/>
        <SliderInput name="Offset scale" 
                     min={1} max={20} segmentation={100} defaultValue={10}
                     onInput={this.onParamInput('offsetScale')} hideValue={true}/>
      </div>
    )
  }
}

export default Panel