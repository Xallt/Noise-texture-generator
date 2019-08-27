import React from 'react'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

class Caption extends React.Component {

  render() {
    return (
      <Box style={{width:"95%", marginTop:"2%"}}>
        <Typography variant="h2" component="h1" style={{textAlign:"center", fontWeight: 'bold'}} gutterBottom>Noise generation</Typography>
        <Typography variant="h5" component="h1" style={{textAlign:"center"}} gutterBottom>See on <Link href="https://github.com/Xallt/Noise-map-generator">Github</Link></Typography>
      </Box>
    )
  }
}

export default Caption