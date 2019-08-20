import React, { Component } from 'react'

import Slider from '@material-ui/core/Slider'

import PanelRow from "../PanelRow"

import '../../styles/slider.scss'

class SliderInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: (props.initialValue || props.min || 0)
        }
    }

    render() {
        const opt = {}
        if (this.props.step) {
            opt.step = this.props.step
        }
        return <Slider
                    min={this.props.min} max={this.props.max}
                    defaultValue={this.props.initialValue}
                    onChange={(e, v) => {
                        this.props.onChange(v)
                        this.setState({value: v})
                    }} {...opt}/>
    }
}

export default PanelRow(SliderInput)