import React, { Component } from 'react'

import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"

import PanelRow from '../PanelRow'

class ChoiceInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: props.value || Object.entries(this.props.options)[0][1]
        }
    }
    render() {
        var options = []
        for (let [key, value] of Object.entries(this.props.options)) {
            options.push(<MenuItem value={value} key={key}>{key}</MenuItem>)
        }
        return <Select 
                    onChange={(e) => {
                        this.props.onChange(e.target.value)
                        this.setState({value: e.target.value})    
                    }}
                    value={this.state.value}
                >
                {options}
        </Select>
    }
}

export default PanelRow(ChoiceInput, {hideValue: true})