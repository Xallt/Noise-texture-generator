import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import SliderInput from './panel-inputs/SliderInput'
import RandomizerInput from './panel-inputs/RandomizerInput'
import ChoiceInput from './panel-inputs/ChoiceInput'

class Panel extends React.Component {

  constructor(props) {
    super(props)
    this.sendInput = this.sendInput.bind(this)
    this.onParamInput = this.onParamInput.bind(this)
    
    this.params = {
      resolution: 256,
      octaves: 8,
      seed: 0,
      gain: 0.5,
      lacunarity: 2.0,
      scale: 3.0,
      dissolution: 0.05,
      motionSteps: 1,
      offsetScale: 10.0,
      channels: 1
    }
  }

  componentDidMount() {
    this.sendInput()
  }
  

  sendInput() {
    this.props.onChange(this.params);
  }

  onParamInput(paramName) {
    return ((x) => {
      this.params[paramName] = x
      this.sendInput()
    })
  }

  render() {
    return (
        <Container>
          <RandomizerInput name="Seed"
                        onChange={this.onParamInput('seed')}/> <br/>
          <Grid container>
            <ChoiceInput name="Resolution"
                        options={{
                          "256x256": 256,
                          "512x512": 512,
                          "1024x1024": 1024,
                          "2048x2048": 2048,
                          "4096x4096": 4096
                        }}
                        onChange={this.onParamInput('resolution')}/>
            <ChoiceInput name="Channels"
                        options={{
                          "1": 1,
                          "3": 3
                        }}
                        onChange={this.onParamInput('channels')}/>
            
            <hr/>
            <SliderInput name="Octaves" 
                        min={1} max={8} initialValue={8} 
                        onChange={this.onParamInput('octaves')}/>
            <SliderInput name="Scale" 
                        min={1} max={30} step={0.01} initialValue={3.0}
                        onChange={this.onParamInput('scale')}/>
            <SliderInput name="Gain" 
                        min={0} max={3} step={0.01} initialValue={0.5}
                        onChange={this.onParamInput('gain')}/>
            <SliderInput name="Lacunarity" 
                        min={1} max={8} step={0.01} initialValue={2}
                        onChange={this.onParamInput('lacunarity')}/>  
            <Grid item xs={12}>
              <h4 style={{margin:"3% 0"}} >Noise offsetting</h4>
            </Grid>
            
            <SliderInput name="Strength" 
                        min={0.001} max={1} step={0.01} initialValue={0.05}
                        onChange={this.onParamInput('dissolution')} hideValue={true}/>
            <SliderInput name="Offset scale" 
                        min={1} max={20} step={0.01} initialValue={10}
                        onChange={this.onParamInput('offsetScale')} hideValue={true}/>
          </Grid>
      </Container>
    )
  }
}

export default Panel