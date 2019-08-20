import React from 'react'
import $ from 'jquery'

import '../styles/App.scss'

import WebsiteCaption from './WebsiteCaption'
import GeneratorPanel from './GeneratorPanel'
import RenderElement from './RenderElement'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      inputParams: {}
    }

    this.handleInput = this.handleInput.bind(this);
    this.updateSize = this.updateSize.bind(this)
  }

  componentDidMount() {
    window.onresize = this.updateSize
    this.updateSize()

    $(() => {
      $('html').fadeIn(500)
    })
  }

  updateSize() {
    const w = Math.min(window.innerWidth * .9, window.innerHeight * 1.8) 
    this.setState({
      width: w,
      height: w / 2
    })
  }

  handleInput(panelInput) {
    this.setState({
      inputParams: panelInput
    })
  }

  render() {
    return (
      <div 
        className="App-container" 
        style={{
          width: this.state.width,
          height: this.state.height
      }}>
        <Paper>
          <Grid container>
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={12}>
                  <WebsiteCaption/>
                </Grid>
                <Grid item xs={12}>
                  <GeneratorPanel onChange={this.handleInput}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
            <RenderElement inputParams={this.state.inputParams}/>  
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  }
}

export default App