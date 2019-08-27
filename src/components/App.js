import React from 'react'
import $ from 'jquery'

import WebsiteCaption from './WebsiteCaption'
import GeneratorPanel from './GeneratorPanel'
import RenderElement from './RenderElement'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import {withStyles} from "@material-ui/styles"

const styles = theme => ({
  root: {
    margin: "0 auto",
    paddingTop: "1%"
  }
})

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      inputParams: {},
      canvasDataUrl: "#"
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleURLLoader = this.handleURLLoader.bind(this)
    this.loadURL = this.loadURL.bind(this)
    this.updateSize = this.updateSize.bind(this)
  }

  componentDidMount() {
    window.onresize = this.updateSize
    this.updateSize()

    $(() => {
      $('html').fadeIn(500)
      window.dispatchEvent(new Event('resize'))
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
  handleURLLoader(URLLoader) {
    this.URLLoader = URLLoader
  }
  loadURL() {
    this.setState({
      canvasDataUrl: this.URLLoader()
    })
  }
  render() {
    const classes = this.props.classes

    return (
      <Box
        className={classes.root}
        style={{
          width: this.state.width,
          height: this.state.height
        }}>
          <Paper elevation={12}>
            <Grid container >
              <Grid item xs={12} md={5} style={{padding: "2% 1%"}}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <WebsiteCaption/>
                  </Grid>
                  <Grid item xs={12}>
                    <GeneratorPanel onChange={this.handleInput}/>
                  </Grid>
                  <Grid item xs={12} style={{textAlign:"center"}}>
                    <Button variant="contained" color="primary" size="large" href={this.state.canvasDataUrl} onClick={this.loadURL} download>Save</Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={7}>
                <RenderElement inputParams={this.state.inputParams} handleURLLoader={this.handleURLLoader} />  
              </Grid>
            </Grid>
          </Paper>
      </Box>
    )
  }
}

export default withStyles(styles)(App)