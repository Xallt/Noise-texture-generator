import React from 'react'
import { Helmet } from 'react-helmet'

import 'typeface-roboto'

import '../styles/layout.scss'

import "normalize.css"

const Layout = ({children, title}) => (
  <>
    <Helmet>
      <title>{title}</title>
      <link rel="stylesheet"></link>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      
    </Helmet>
    <main>{children}</main>
  </>
)

export default Layout;