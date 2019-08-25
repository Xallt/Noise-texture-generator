import React from 'react'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

class Caption extends React.Component {

  render() {
    return (
      <Box style={{width:"95%", marginTop:"2%"}}>
        <Typography variant="h2" component="h1" style={{textAlign:"center"}} gutterBottom>Noise generation</Typography>
        <Typography variant="h5" component="h1" style={{textAlign:"center"}} gutterBottom>See on <a href="https://github.com/Xallt/Noise-map-generator">Github</a></Typography>
      </Box>
    )
  }
}

export default Caption