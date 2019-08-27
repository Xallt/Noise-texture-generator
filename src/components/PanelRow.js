import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'

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
        const inputProps = {
            step: this.props.step,
            type: 'number'
        }
        if (this.props.strict || this.props.strictMin) {
            inputProps.min = this.props.min
        }
        if (this.props.strict || this.props.strictMax) {
            inputProps.max = this.props.max
        }

        return <Grid container justify="space-around">
            <Grid item xs={2}>
                <Typography style={{fontSize:"20px"}}>
                    {this.props.name}  
                </Typography>
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
                        this.setState({value: parseFloat(e.target.value) || this.props.min})
                    }}
                    inputProps={inputProps}/>
                }
            </Grid>
        </Grid>
    }
}
