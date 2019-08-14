import React, { Component } from 'react'

import { Slider } from '@blueprintjs/core'

import '../../styles/slider.scss'

export default class SliderInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: (props.initialValue || props.min || 0)
        }
    }

    render() {
        var {min, max, name, initialValue, step} = this.props
        step = step || 1
        min = min || 0
        initialValue = initialValue || min

        var stepPrecision = 0
        if (step.toString().includes(".")) {
            stepPrecision = step.toString().split(".")[1].length
        }

        var valueElem = <mark className="invert" style={{margin: "0 2%"}}>{parseFloat(parseFloat(this.state.value).toFixed(stepPrecision))}</mark>
        if (this.props.hideValue) {
            valueElem = <></>
        }
        return (<>
            {name}: &nbsp;
            <div style={{display:"inline-block"}}>
                <Slider min={min} max={max}
                        stepSize={step}
                        initialValue={initialValue}
                        onChange={(x) => {
                            this.setState({value: x})
                            this.props.onInput(x)
                        }}
                        value={this.state.value}
                        showTrackFill={false}
                        labelRenderer={false}/>
            </div>
            {valueElem}
            <br/>
        </>)
    }
}
