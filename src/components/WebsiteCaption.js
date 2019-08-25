import React from 'react'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

class Caption extends React.Component {

  render() {
    return (
      <Container style={{width:"95%", margin:"2% 0"}}>
        <Typography variant="h2" style={{textAlign:"center"}} gutterBottom>Noise generation</Typography>
        <Typography variant="h5" style={{textAlign:"center"}} gutterBottom>See on <a href="https://github.com/Xallt/Noise-map-generator">Github</a></Typography>
      </Container>
    )
  }
}

export default Caption