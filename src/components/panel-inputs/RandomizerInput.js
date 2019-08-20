import React, { Component } from 'react'

import Button from '@material-ui/core/Button'

export default class RandomizerInput extends Component {
    constructor(props) {
        super(props)

        this.seed = 0
    }

    render() {
        return (<>
            <Button onClick={(e) => {
                this.props.onChange(++this.seed)
            }} color="default" variant="contained">
                Randomize
            </Button>
            <br/>
        </>)
    }
}
