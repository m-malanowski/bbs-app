import * as React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import article1 from "../images/hero8.jpg";
import article2 from "../images/hero22.jpg";
import {Helmet} from "react-helmet";
import Contact from "../components/contact";

const Articles = ({data, location}) => {
    // const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <>
            {/*<Layout location={location} title={siteTitle}>*/}
                <Seo title="Blog"/>
                <Helmet bodyAttributes={{
                    id: "blog-page"
                }} />

                <div className="contact-page">
                    <section className="container">
                        <div className="grid gap-xxxl margin-top-xxxl margin-bottom-0">
                            <div className="col-6@md">
                                <h3>Dowiedz się więcej o halach namiotowych w konstrukcji stalowej</h3>
                            </div>
                        </div>
                    </section>

                    <section className="container ">



                        <div className="articles-wrapper margin-bottom-xxl">

                            {data.allStrapiArticle.edges.map(edge => (
                                <article className="article" key={edge.node.id}>
                                    <div className="article__img">
                                        <img src={article1} alt={ edge.node.Title } />
                                    </div>
                                    <div>
                                        <h2 className="margin-top-sm article__article">{ edge.node.Title }</h2>
                                        <p>{ edge.node.Content }</p>
                                        <Link to={"/blog/" + edge.node.Slug} className="btn btn--xs margin-left-auto margin-top-lg">Czytaj więcej</Link>
                                    </div>
                                </article>
                            ))}
                            {data.allStrapiArticle.edges.map(edge => (
                                <article className="article" key={edge.node.id}>
                                    <div className="article__img">
                                        <img src={article1} alt={ edge.node.Title } />
                                    </div>
                                    <div>
                                        <h2 className="margin-top-sm article__article">{ edge.node.Title }</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cupiditate, l veritatis voluptate? Fugiat ipsum labore quas ullam unde.</p>
                                        <Link to={"/blog/"} className="btn btn--xs margin-left-auto margin-top-lg">Czytaj więcej</Link>
                                    </div>
                                </article>
                            ))}

                            <article className="article">
                                <div className="article__img">
                                    <img src={article2} alt="elo" />
                                </div>
                                <div>
                                    <h2 className="margin-top-sm article__article">Magazyn zamkniety polotwarty czy otwarty?</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cupiditate, l veritatis voluptate? Fugiat ipsum labore quas ullam unde.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cupiditate, l veritatis voluptate? Fugiat ipsum labore quas ullam unde.</p>
                                    <Link to={"/blog/"} className="btn btn--xs margin-left-auto margin-top-lg">Czytaj więcej</Link>
                                </div>
                            </article>

                            <article className="article">
                                <div className="article__img">
                                    <img src={article1} alt="elo" className="article__image"/>
                                </div>
                                <div>
                                    <h2 className="margin-top-sm article__article">Magazyn zamkniety polotwarty czy otwarty?</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cupiditate, l veritatis voluptate? Fugiat ipsum labore quas ullam unde.</p>
                                    <Link to={"/blog/"} className="btn btn--xs margin-left-auto margin-top-lg">Czytaj więcej</Link>
                                </div>
                            </article>

                        </div>
                    </section>
                </div>

            {/*</Layout>*/}
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
          }
        }
    }
}
`
