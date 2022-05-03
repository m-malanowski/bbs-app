import * as React from "react"
import {graphql} from "gatsby"
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Strona nie znaleziona" />
      <h1>404: Strona nie znaleziona</h1>
      <Link to="/" className="btn btn--dark margin-top-xxl"> Powrót do głównej</Link>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
