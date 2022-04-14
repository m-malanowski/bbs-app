import * as React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import hero6 from "../images/hero7.jpg";
import {Helmet} from "react-helmet";
import Contact from "../components/contact";

const ContactPage = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <>
            {/*<Layout location={location} title={siteTitle}>*/}
                <Seo title="Konakt"/>
                <Helmet bodyAttributes={{
                    id: "contact-page"
                }} />

                <div className="contact-page">
                    <section className="container">
                        <div className="grid gap-xxxl margin-top-xxxl margin-bottom-0">
                            <div className="col-6">
                                <h3>We support utilities and resellers by providing their customers with superb service built atop smart technology.</h3>

                                <div className="grid  gap-xxxl margin-bottom-xxl">
                                    <div className="col-6">
                                        <p >We support utilities and resellers by providing their customers with superb service built atop smart <span> technologyt ransition.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container ">

                        <div className="projects-wrapper margin-bottom-xxl">
                            <div className="project">
                                <img src={hero6} alt="" className="project__image responsive"/>
                                <h4>Tytuł artykułu </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cupiditate, l veritatis voluptate? Fugiat ipsum labore quas ullam unde.</p>
                            </div>
                            <div className="project">
                                <img src={hero6} alt="" className="project__image responsive"/>
                                <h4>Tytuł artykułu </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cupiditate, l veritatis voluptate? Fugiat ipsum labore quas ullam unde.</p>
                            </div>
                            <div className="project">
                                <img src={hero6} alt="" className="project__image responsive"/>
                                <h4>Tytuł artykułu </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cupiditate, l veritatis voluptate? Fugiat ipsum labore quas ullam unde.</p>
                            </div>
                            <div className="project">
                                <img src={hero6} alt="" className="project__image responsive"/>
                                <h4>Tytuł artykułu </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cupiditate, l veritatis voluptate? Fugiat ipsum labore quas ullam unde.</p>
                            </div>
                            <div className="project">
                                <img src={hero6} alt="" className="project__image responsive"/>
                                <h4>Tytuł artykułu </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cupiditate, l veritatis voluptate? Fugiat ipsum labore quas ullam unde.</p>
                            </div>
                            <div className="project">
                                <img src={hero6} alt="" className="project__image responsive"/>
                                <h4>Tytuł artykułu </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cupiditate, l veritatis voluptate? Fugiat ipsum labore quas ullam unde.</p>
                            </div>

                        </div>

                    </section>

                </div>

            {/*</Layout>*/}
        </>
    )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
