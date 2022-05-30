import * as React from "react"
import {graphql} from "gatsby"
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import Seo from "../components/seo"
import {Helmet} from "react-helmet";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
        <Seo title="404: Strona nie znaleziona" />
        <Helmet bodyAttributes={{
            id: "error-page"
        }}/>

        <h1>404: Strona nie znaleziona</h1>
        <Link to="/" className="btn btn--dark margin-top-xxl"> Powrót do głównej</Link>
    </>
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
