import React from 'react'
import { Helmet } from 'react-helmet'

import '../styles/layout.scss'

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

const Layout = ({children, title}) => (
  <>
    <Helmet>
      <title>{title}</title>
      <link rel="stylesheet"></link>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
    </Helmet>
    <main>{children}</main>
  </>
)

export default Layout;