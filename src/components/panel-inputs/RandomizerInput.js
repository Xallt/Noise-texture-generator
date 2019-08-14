import React, { Component } from 'react'

import { Button } from '@blueprintjs/core'

export default class RandomizerInput extends Component {
    constructor(props) {
        super(props)

        this.seed = 0
    }

    render() {
        return (<>
            {this.props.name}: &nbsp;
            <Button onClick={(e) => {
                this.props.onInput(++this.seed)
            }}>
                <h3 style={{margin: "0.2vw"}}>Randomize</h3>
            </Button>
            <br/>
        </>)
    }
}
