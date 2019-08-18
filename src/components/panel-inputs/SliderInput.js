import React, { Component } from 'react'

import '../../styles/slider.scss'

export default class SliderInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: (props.initialValue || props.min || 0)
        }
    }

    render() {
        var {min, max, name, step} = this.props
        step = step || 1
        min = min || 0

        var stepPrecision = 0
        if (step.toString().includes(".")) {
            stepPrecision = step.toString().split(".")[1].length
        }
        const segmentation = 10 ** stepPrecision

        var valueElem = <mark className="invert" style={{margin: "0 4%", padding:"0.3% 1.6%"}}>
            {parseFloat(parseFloat(this.state.value).toFixed(stepPrecision))}
        </mark>
        if (this.props.hideValue) {
            valueElem = <></>
        }
        return (<>
            {name}: &nbsp;
            <div style={{display:"inline-block"}}>
                <input type="range"
                       min={min * segmentation} max={max * segmentation}
                       onInput={(e) => {
                           this.props.onInput(e.target.value / segmentation)
                           this.setState({value: e.target.value / segmentation})
                       }}
                       defaultValue={this.props.initialValue * segmentation}
                        />
            </div>
            {valueElem}
            <br/>
        </>)
    }
}
