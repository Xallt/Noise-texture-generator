import React from 'react'
import $ from 'jquery'

import WebsiteCaption from './WebsiteCaption'
import GeneratorPanel from './GeneratorPanel'
import RenderElement from './RenderElement'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
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
    const classes = this.props.classes

    return (
      <div 
        className={classes.root}
        style={{
          width: this.state.width,
          height: this.state.height
        }}>
          <Box className="fill">
            <Paper className="fill">
              <Grid container className="fill">
                <Grid item xs={12} md={5}>
                  <Grid container>
                    <Grid item xs={12}>
                      <WebsiteCaption/>
                    </Grid>
                    <Grid item xs={12}>
                      <GeneratorPanel onChange={this.handleInput}/>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={7}>
                  <RenderElement inputParams={this.state.inputParams}/>  
                </Grid>
              </Grid>
            </Paper>
          </Box>
      </div>
    )
  }
}

export default withStyles(styles)(App)