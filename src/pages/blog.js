import * as React from "react"
import {graphql} from "gatsby"
import {Link, useI18next, useTranslation} from 'gatsby-plugin-react-i18next';
import Seo from "../components/seo"
import {Helmet} from "react-helmet";

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Articles = ({data, location}) => {
    // const siteTitle = data.site.siteMetadata?.title || `Title`
    const { t } = useTranslation();

    return (
        <>
            <Seo title="Blog"/>
            <Helmet bodyAttributes={{
                id: "blog-page"
            }}/>

            <div>
                <section className="container">
                    <div className="grid gap-xxxl margin-top-xxxl margin-bottom-0">
                        <div className="col-6@md">
                            <h1>{ t('blog.blogDesc') }</h1>
                        </div>
                    </div>
                </section>

                 <hr/>
                <section className="container margin-top-0">

                    <div className="articles-wrapper margin-bottom-xxl">
                        {data.allStrapiArticle.edges.map(edge => (
                            <article className="article" key={edge.node.id}>
                                <div className="article__img">
                                    <figure className="hover-effect">
                                        <GatsbyImage image={edge.node.Bild.localFile.childImageSharp.gatsbyImageData} alt={edge.node.Title}/>
                                    </figure>
                                </div>
                                <div>
                                    <h4 className="article__date">3 March</h4>
                                    <h2 className="margin-top-sm article__article"><Link
                                        to={edge.node.Slug}>{edge.node.Title}</Link></h2>
                                    <Link to={edge.node.Slug} className="btn btn--xs btn--dark  margin-top-xl">{ t('blog.readMore') }</Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Articles

export const pageQuery = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allStrapiArticle {
        edges {
          node {
            id
            Content
            Slug
            Title
            Bild {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
    }
}
`
