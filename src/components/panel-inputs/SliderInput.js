import React, { Component } from 'react'

import '../../styles/slider.css'

export default class SliderInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: (props.dataTransform || ((x) => x))(props.defaultValue || props.min || 0)
        }
    }

    render() {
        var {min, max, segmentation, name, defaultValue, dataTransform} = this.props
        segmentation = segmentation || 1
        min = min || 0
        defaultValue = defaultValue || min
        dataTransform = dataTransform || ((x) => x)

        var valueElement = <>&nbsp;<mark className="invert">{this.state.value}</mark></>
        if (this.props.hideValue) {
            valueElement = <></>
        }

        return (<>
            {name}: &nbsp;
            <input id={"i" + name} className="slider"
                type="range" 
                min={min * segmentation} max={max * segmentation} 
                onInput={(e) => {
                    this.props.onInput(dataTransform(e.target.value / segmentation)) 
                    this.setState({value: dataTransform(e.target.value / segmentation)})
                }}
                defaultValue={defaultValue * segmentation}
                style={{width: "10vw"}}/>
            {valueElement}<br/>
        </>)
    }
}
