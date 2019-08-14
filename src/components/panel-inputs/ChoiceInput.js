import React, { Component } from 'react'

export default class ChoiceInput extends Component {

    render() {
        var options = []
        for (let [key, value] of Object.entries(this.props.options)) {
            options.push(<option value={value} key={key}>{key}</option>)
        }
        return (<>
            {this.props.name}: &nbsp;
            <select>
                {options}
            </select>
            <br/>
        </>)
    }
}
