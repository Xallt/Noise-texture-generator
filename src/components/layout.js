import React from 'react'

import Header from './header'

const Head = ({title}) => (
  <head>
    <title>{title}</title>
    <meta charset="utf-8"/>
    <meta name="description" content="The HTML5 Herald"/>
    <meta name="author" content="SitePoint"/>

    <link rel="stylesheet" href="css/styles.css?v=1.0"></link>
  </head>
)

const Layout = ({children, title}) => (
  <>
    <Head title={title}/>
    <body>
      
      <main>{children}</main>
    </body>
  </>
)

export default Layout;