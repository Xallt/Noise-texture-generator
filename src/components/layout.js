import React from 'react'
import {Helmet} from 'react-helmet'
import './layout.css'

const Layout = ({children, title}) => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <main>{children}</main>
  </>
)

export default Layout;