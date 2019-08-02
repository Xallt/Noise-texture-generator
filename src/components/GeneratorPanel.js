import React from 'react'

class Panel extends React.Component {

  constructor(props) {
    super(props)
    this.sendInput = this.sendInput.bind(this)
    this.onTextInput = this.onTextInput.bind(this)

    // Default
    this.params = {
      text: ''
    }
  }

  sendInput() {
    this.props.onInput(this.params);
  }

  onTextInput(e) {
    this.params.text = e.target.value
    this.sendInput()
  }

  render() {
    return (
      <input type="text" onInput={this.onTextInput}/>
    )
  }
}

export default Panel