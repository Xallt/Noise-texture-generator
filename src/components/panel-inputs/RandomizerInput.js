import React, { Component } from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

export default class RandomizerInput extends Component {
    constructor(props) {
        super(props)
        this.seed = 0
    }

    render() {
        return <Grid container style={{marginBottom:"2%"}}>
            <Grid item xs={12} style={{textAlign: "center"}}>
                <Button onClick={(e) => {
                    this.props.onChange(++this.seed)
                }} color="default" variant="contained">
                    Randomize
                </Button>
            </Grid>
        </Grid>
    }
}
