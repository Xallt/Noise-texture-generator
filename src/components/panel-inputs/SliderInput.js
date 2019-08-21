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
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e, v) {
        this.props.onChange(v)
        this.setState({value: v})
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.value !== prevState.value) {
            // console.log(this.props.value)
            this.props.onChange(this.props.value)
            this.setState({value: this.props.value})
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.value && this.state.value !== nextProps.value) || this.state.value !== nextState.value
    }
    
    render() {
        const opt = {}
        if (this.props.step) {
            opt.step = this.props.step
        }
        return <Slider
                    min={this.props.min} max={this.props.max}
                    defaultValue={this.props.initialValue}
                    value={this.state.value}
                    onChange={this.handleChange} {...opt}/>
    }
}

export default PanelRow(SliderInput)