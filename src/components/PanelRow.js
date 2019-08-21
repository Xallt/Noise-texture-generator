import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'

export default (InputComponent, params) => 
class RowWrap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: props.initialValue || props.min || 0
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.value !== nextState.value
    }
    
    render() {
        return <Grid container justify="space-around">
            <Grid item xs={3}>
                {this.props.name}
            </Grid>
            <Grid item xs={6}>
                <InputComponent  {...this.props} onChange={(x) => {
                    this.setState({value: x})
                    this.props.onChange(x)
                }} value={this.state.value}/>
            </Grid>
            <Grid item xs={2}>
                {!this.props.hideValue && (!params || !params.hideValue) &&

                <Input
                    value={this.state.value}
                    margin="dense"
                    onChange={(e) => {
                        this.setState({value: parseFloat(e.target.value)})
                    }}
                    inputProps={{
                        step: this.props.step,
                        min: this.props.min,
                        max: this.props.max,
                        type: 'number'
                    }}/>
                }
            </Grid>
        </Grid>
    }
}
