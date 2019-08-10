import React, { Component } from 'react'

export default class NumberInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: props.defaultValue || 0
        }
    }

    render() {
        var {defaultValue, name} = this.props

        defaultValue = defaultValue || 0

        return (<>
            {name}: &nbsp;
            <input id={"i" + name}
                type="number" 
                onInput={(e) => {
                    this.props.onInput(parseInt(e.target.value) || 0)
                    this.setState({value: e.target.value})
                }} 
                defaultValue={defaultValue}/>
        </>)
    }
}
