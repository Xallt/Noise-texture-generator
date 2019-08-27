import React from 'react'

import Layout from '../templates/layout'
import App from '../components/App'

const Page = ({pageContext}) => {
  console.log(pageContext)
  return <Layout title="Noise generator">
    <App/>
  </Layout>
}

export default Page