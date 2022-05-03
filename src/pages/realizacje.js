import * as React from "react"
import {Link, graphql} from "gatsby"
import Seo from "../components/seo"
import {Helmet} from "react-helmet";
import img from "../images/hero12.jpg";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ContactPage = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    // const image = getImage(data.node.Bild)
    return (
        <>
            <Seo title="Nasze realizacje"/>
            <Helmet bodyAttributes={{
                id: "projects-page"
            }}/>


            <section className="container">
                <div className="grid gap-xxxl margin-top-xxxl margin-bottom-0">
                    <div className="col-6@md">
                        {/*<h1>Dowiedz się więcej o halach namiotowych w konstrukcji stalowej</h1>*/}
                        <h1>Projekty i budowa hal stalowych to nasza codzienność</h1>
                    </div>
                </div>
            </section>

            <hr/>

            <section className="container">
                <div className="projects-wrapper">
                    {data.allStrapiProject.edges.map(edge => (
                        <div>
                            {/*<Image img={edge.node.Bild.url}></Image>*/}
                            <div>
                                <figure className="hover-effect">
                                    {/*<img src={edge.node.Bild.url} alt="BBS Polska"/>*/}
                                    <GatsbyImage image={edge.node.Bild.localFile.childImageSharp.gatsbyImageData} alt={edge.node.Title} />
                                </figure>
                                <h3 className="margin-top-sm "> {edge.node.Title}</h3>
                                <p className="project__description">{edge.node.Description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default ContactPage

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
     allStrapiProject {
        edges {
          node {
            Title
            Description
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
      site {
       siteMetadata {
        title
      }
    }
  }
`
