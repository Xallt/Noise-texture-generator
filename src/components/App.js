import React from 'react'
import $ from 'jquery'

import '../styles/App.css'

import WebsiteCaption from './WebsiteCaption'
import GeneratorPanel from './GeneratorPanel'
import RenderElement from './RenderElement'


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
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    })
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
        width: this.state.windowWidth * .9,
        height: Math.min(this.state.windowWidth * .5, this.state.windowHeight * .9),
        fontSize: "1.5vw"
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
            <RenderElement inputParams={this.state.inputParams}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App