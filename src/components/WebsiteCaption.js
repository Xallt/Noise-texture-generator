import React from 'react'

class Caption extends React.Component {

  render() {
    return (
      <div ref={(el) => {this.el = el}} className="fill text-autosize">
        <h1 align='center' style={{margin:"4.5% 0 0 0"}}>
          Noise generation</h1>
        <h4 align='center'>See on <a href="https://github.com/Xallt/Noise-map-generator">Github</a></h4>
      </div>
    )
  }
}

export default Caption