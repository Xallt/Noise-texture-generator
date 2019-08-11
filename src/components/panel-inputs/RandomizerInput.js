import React, { Component } from 'react'

export default class RandomizerInput extends Component {
    constructor(props) {
        super(props)

        this.seed = 0
    }

    render() {
        return (<>
            {this.props.name}: &nbsp;
            <button onClick={(e) => {
                this.props.onInput(++this.seed)
            }}>
                <h3 style={{margin: "0.2vw"}}>Randomize</h3>
            </button>
            <br/>
        </>)
    }
}
