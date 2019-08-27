import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import SliderInput from './panel-inputs/SliderInput'
import RandomizerInput from './panel-inputs/RandomizerInput'
import ChoiceInput from './panel-inputs/ChoiceInput'

class Panel extends React.Component {

  constructor(props) {
    super(props)
    this.sendInput = this.sendInput.bind(this)
    this.onParamChange = this.onParamChange.bind(this)
    
    this.params = {
      channels: 1,
      resolution: 256,
      octaves: 8,
      seed: 0,
      gain: 0.5,
      lacunarity: 2.0,
      scale: 3.0,
      offsetStrength: 0.15,
      offsetOctaves: 8,
      offsetScale: 10.0
    }

    this.paramChange = {
      resolution: this.onParamChange('resolution'),
      seed: this.onParamChange('seed'),
      channels: this.onParamChange('channels'),
      octaves: this.onParamChange('octaves'),
      scale: this.onParamChange('scale'),
      gain: this.onParamChange('gain'),
      lacunarity: this.onParamChange('lacunarity'),
      offsetStrength: this.onParamChange('offsetStrength'),
      offsetScale: this.onParamChange('offsetScale'),
      offsetOctaves: this.onParamChange('offsetOctaves'),
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

    return (<>
          <Paper>
            <Grid container style={{padding:"2% 0"}}>
              <RandomizerInput name="Seed"
                            onChange={this.paramChange.seed}/>
              <ChoiceInput name="Resolution"
                          options={{
                            "256x256": 256,
                            "512x512": 512,
                            "1024x1024": 1024,
                            "2048x2048": 2048
                          }}
                          onChange={this.paramChange.resolution}/>
              <ChoiceInput name="Channels"
                          options={{
                            "1": 1,
                            "3": 3
                          }}
                          onChange={this.paramChange.channels}/>
              <Grid container justify="center">
                <Grid xs={9} item>
                  <hr/>
                </Grid>
              </Grid>
              <SliderInput name="Octaves" 
                          min={1} max={8} initialValue={8} 
                          onChange={this.paramChange.octaves} strict/>
              <SliderInput name="Scale" 
                          min={1} max={30} step={0.01} initialValue={3.0}
                          onChange={this.paramChange.scale} strictMin/>
              <SliderInput name="Gain" 
                          min={0} max={3} step={0.01} initialValue={0.5}
                          onChange={this.paramChange.gain} strictMin/>
              <SliderInput name="Lacunarity" 
                          min={1} max={8} step={0.01} initialValue={2}
                          onChange={this.paramChange.lacunarity} strictMin/>  
              <Grid item xs={12}>
                <Typography variant="h5" style={{fontWeight:"bolder", textAlign:"center"}} gutterBottom>Noise offsetting</Typography>
              </Grid>
              <SliderInput name="Octaves" 
                          min={1} max={8} initialValue={8}
                          onChange={this.paramChange.offsetOctaves} strict/>
              <SliderInput name="Strength" 
                          min={0} max={2} step={0.01} initialValue={0.15}
                          onChange={this.paramChange.offsetStrength}/>
              <SliderInput name="Scale" 
                          min={1} max={100} step={0.01} initialValue={10}
                          onChange={this.paramChange.offsetScale} strictMin/>
            </Grid>
          </Paper>
    </>)
  }
}

export default Panel