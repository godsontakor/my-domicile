import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi From about Page</h1>
    <p>Welcome to page 2</p>
    <p>lorem ipsum using gatsby to build a blog is really fun</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
