import * as React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import HeroReversed from "../components/heroReversed";
import Contact from "../components/contact";
import hero6 from "../images/hero7.jpg";
import {Helmet} from "react-helmet";
import Form from "../components/form";

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
                        <div className="grid gap-xxxl margin-y-xxxl">
                            <div className="col-6@md">
                                <h3>We support utilities and resellers by providing their customers with superb service built atop smart technology.</h3>

                                <div className="grid gap-xxxl margin-bottom-xxl">
                                    <div className="col-6@md">
                                        <p >Your energy transition partner <span>transition</span></p>
                                        <br/>
                                        <p>Customers with superb service built atop  superb service built atop smart technology.</p>
                                        {/*<br/>*/}
                                        {/*<ul>*/}
                                        {/*    <li>Królewiecka 214</li>*/}
                                        {/*    <li>82-300, Elbląg</li>*/}
                                        {/*    <li>T (215) 525-4510</li>*/}
                                        {/*    <li>info@bbs.com</li>*/}
                                        {/*</ul>*/}
                                    </div>
                                    <div className="col-6@md">
                                        <p>We support utilities and resellers by providing their customers with superb service built atop smart technology.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6@md">

                                <Form></Form>

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
