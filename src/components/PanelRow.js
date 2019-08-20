import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'

export default (InputComponent, params) => 
class RowWrap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: props.initialValue
        }
    }
    render() {
        return <Grid container>
            <Grid item xs={3}>
                {this.props.name}
            </Grid>
            <Grid item xs={8}>
                <InputComponent  {...this.props} onChange={(x) => {
                    this.setState({value: x})
                    this.props.onChange(x)
                }}/>
            </Grid>
            <Grid item xs={1}>
                {!this.props.hideValue && (!params || !params.hideValue) &&
                this.state.value
                }
            </Grid>
        </Grid>
    }
}
