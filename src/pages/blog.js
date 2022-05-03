import * as React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import article1 from "../images/hero8.jpg";
import article2 from "../images/hero22.jpg";
import {Helmet} from "react-helmet";
import Contact from "../components/contact";
import TilesAbout from "../components/tilesAbout";
import ImagesScrolling from "../components/scrollEffect";
import bildIndex from "../images/drone2.jpg";

const Articles = ({data, location}) => {
    // const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <>
            {/*<Layout location={location} title={siteTitle}>*/}
            <Seo title="Blog"/>
            <Helmet bodyAttributes={{
                id: "blog-page"
            }}/>

            <div>
                <section className="container">
                    <div className="grid gap-xxxl margin-top-xxxl margin-bottom-0">
                        <div className="col-6@md">
                            {/*<h1>Dowiedz się więcej o halach namiotowych w konstrukcji stalowej</h1>*/}
                            <h1>News & views <br/>
                                We write too</h1>
                        </div>
                    </div>
                </section>

                <hr/>

                <section className="container margin-top-0">

                    <div className="articles-wrapper margin-bottom-xxl">
                        {data.allStrapiArticle.edges.map(edge => (
                            <article className="article" key={edge.node.id}>
                                <div className="article__img">
                                    <img src={edge.node.Bild.url} alt={edge.node.Title}/>
                                </div>
                                <div>
                                    <h4 className="article__date">3 March</h4>
                                    <h2 className="margin-top-sm article__article"><Link
                                        to={edge.node.Slug}>{edge.node.Title}</Link></h2>
                                    {/*<p>{ edge.node.Content }</p>*/}
                                    <Link to={edge.node.Slug} className="btn btn--xs btn--dark  margin-top-xl">Czytaj
                                        więcej</Link>
                                </div>
                            </article>
                        ))}

                        <article className="article">
                            <div className="article__img">
                                <img src={article2} alt="elo"/>
                            </div>
                            <div>
                                <h4 className="article__date">11 March</h4>
                                <h2 className="margin-top-sm article__article">Magazyn zamkniety polotwarty czy
                                    otwarty?</h2>
                                {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cupiditate, l veritatis voluptate? Fugiat ipsum labore quas ullam unde.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cupiditate, l veritatis voluptate? Fugiat ipsum labore quas ullam unde.</p>*/}
                                <Link to={"/blog/"} className="btn btn--xs btn--dark  margin-top-xl">Czytaj
                                    więcej</Link>
                            </div>
                        </article>

                    </div>
                </section>
            </div>

            {/*<section className="bild">*/}
            {/*    <figure>*/}
            {/*        <ImagesScrolling scaleValue={1.3} pictureSrc={bildIndex} alt="BBS Polska"/>*/}
            {/*        /!*<img src={bildIndex} alt="BBS"/>*!/*/}
            {/*    </figure>*/}
            {/*    <div className="bild__tile bild__tile--services">*/}

            {/*        <h2 className="bild__title ">20 lat <br/> doświa <br/>dczenia</h2>*/}
            {/*        <div className="bild__line"></div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*<TilesAbout/>*/}
            {/*<Contact></Contact>*/}

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
            Bild {
              url
            }
          }
        }
    }
}
`
