import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import SliderInput from './panel-inputs/SliderInput'
import RandomizerInput from './panel-inputs/RandomizerInput'
import ChoiceInput from './panel-inputs/ChoiceInput'

class Panel extends React.Component {

  constructor(props) {
    super(props)
    this.sendInput = this.sendInput.bind(this)
    this.onParamChange = this.onParamChange.bind(this)
    
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

  onParamChange(paramName) {
    return ((x) => {
      this.params[paramName] = x
      this.sendInput()
    })
  }

  render() {
    const paramChange = {
      resolution: this.onParamChange('resolution'),
      seed: this.onParamChange('seed'),
      channels: this.onParamChange('channels'),
      octaves: this.onParamChange('octaves'),
      scale: this.onParamChange('scale'),
      gain: this.onParamChange('gain'),
      lacunarity: this.onParamChange('lacunarity'),
      dissolution: this.onParamChange('dissolution'),
      offsetScale: this.onParamChange('offsetScale')
    }

    return (<>
          <Paper classes={{root:"Panel"}}>
            <Grid container>
              <RandomizerInput name="Seed"
                            onChange={paramChange.seed}/>
              <ChoiceInput name="Resolution"
                          options={{
                            "256x256": 256,
                            "512x512": 512,
                            "1024x1024": 1024,
                            "2048x2048": 2048,
                            "4096x4096": 4096
                          }}
                          onChange={paramChange.resolution}/>
              <ChoiceInput name="Channels"
                          options={{
                            "1": 1,
                            "3": 3
                          }}
                          onChange={paramChange.channels}/>
              
              <hr/>
              <SliderInput name="Octaves" 
                          min={1} max={8} initialValue={8} 
                          onChange={paramChange.octaves}/>
              <SliderInput name="Scale" 
                          min={1} max={30} step={0.01} initialValue={3.0}
                          onChange={paramChange.scale}/>
              <SliderInput name="Gain" 
                          min={0} max={3} step={0.01} initialValue={0.5}
                          onChange={paramChange.gain}/>
              <SliderInput name="Lacunarity" 
                          min={1} max={8} step={0.01} initialValue={2}
                          onChange={paramChange.lacunarity}/>  
              <Grid item xs={12}>
                <h4 style={{margin:"3% 0"}} >Noise offsetting</h4>
              </Grid>
              
              <SliderInput name="Strength" 
                          min={0.001} max={1} step={0.01} initialValue={0.05}
                          onChange={paramChange.dissolution} hideValue={true}/>
              <SliderInput name="Offset scale" 
                          min={1} max={20} step={0.01} initialValue={10}
                          onChange={paramChange.offsetScale} hideValue={true}/>
            </Grid>
          </Paper>
    </>)
  }
}

export default Panel