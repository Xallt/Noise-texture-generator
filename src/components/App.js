import React from 'react'
import withSizes from 'react-sizes'

import '../styles/App.css'

import WebsiteCaption from './WebsiteCaption'
import GeneratorPanel from './GeneratorPanel'
import RenderElement from './RenderElement'
import NoiseGenerator from '../NoiseGenerator'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputParams: {}
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(panelInput) {
    this.setState({
      inputParams: panelInput
    })
  }

  render() {
    return (
      <div style={{
        margin: '0 auto',
        width: this.props.windowWidth * .9,
        height: Math.min(this.props.windowWidth * .5, this.props.windowHeight * .9)
      }}>
        <div style={{display: 'flex', height: '100%'}}>
          <div style={{flex:'30%'}}>
            <div style={{height: '20%'}}>
              <WebsiteCaption/>
            </div>
            <div style={{height: '80%'}}>
              <GeneratorPanel onInput={this.handleInput}/>
            </div>
          </div>
          <div style={{flex:'70%'}}>
            <RenderElement panelInput={this.state.inputParams} drawer={NoiseGenerator.noise} texSize={360}/>
          </div>
        </div>
      </div>
    )
  }
}

const sizeMapper = ({width, height}) => ({
  windowWidth: width,
  windowHeight: height
})

export default withSizes(sizeMapper)(App)