import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { red } from '@material-ui/core/colors'
import '../styles/layout.scss'


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: red[800]
    } ,
    secondary: {
      main: "#6f2232"
    }
  },
  overrides: {
    MuiPaper: {
      elevation12: {
        backgroundColor: 'rgba(33, 33, 33, 0.7)'
      },
      elevation1: {
        backgroundColor: 'rgba(26, 26, 26, 1)',
      }
    },
    MuiInput: {
      root: {
        backgroundColor: 'rgba(22, 22, 22, 1)'
      }
    }
  },
  typography: {
    fontFamily: 'Red Hat Display, sans-serif'   
  }
})

const Layout = ({ children }) => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </main>
  )
}

export default Layout;