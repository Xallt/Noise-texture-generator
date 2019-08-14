import React from 'react'
import {Helmet} from 'react-helmet'

import '../styles/layout.scss'

const Layout = ({children, title}) => (
  <>
    <Helmet>
      <title>{title}</title>
      <link rel="stylesheet"></link>
    </Helmet>
    <main>{children}</main>
  </>
)

export default Layout;