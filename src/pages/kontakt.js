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
                                <h3>Planujesz inwestycję: budowę, modernizację lub przymierzasz się do realizacji - skorzystaj z usług naszej firmy. Zachęcamy do kontaktu z naszą firmą lub pozostawienie danych kontaktowych. </h3>

                                <div className="grid gap-xxxl margin-bottom-xxl margin-top-xxl">
                                    <div className="col-6@md">
                                        {/*<h4>Kosztorys Inwestorski</h4>*/}
                                        {/*<br/>*/}
                                        {/*<p>Rzetelność i profesjonalizm oznaczają pełną gwarancję jakości produkowanych wyrobów i świadczonych usług.</p>*/}
                                        {/*<ul>*/}
                                        {/*    <li>BBS POLSKA SP. Z O.O.</li>*/}
                                        {/*    <li>82-300 Elbląg, ul. Królewiecka 215</li>*/}
                                        {/*    <li>NIP 578 312 14 31</li>*/}
                                        {/*</ul>*/}
                                        {/*<br/>*/}
                                        <h4>Kosztorys Inwestorski</h4>
                                        <p>Zachęcamy do skorzystania z usługi wyceny Twojej inwestycji w postaci <span>kosztorysu inwestorskiego.</span></p>
                                        <br/>
                                        <br/>
                                        <ul>
                                            <li>BBS POLSKA SP. Z O.O.</li>
                                            <li>82-300 Elbląg, ul. Królewiecka 215</li>
                                            <li>NIP 578 312 14 31</li>
                                        </ul>

                                        {/*<br/>*/}
                                        {/*<ul>*/}
                                        {/*    <li>Królewiecka 214</li>*/}
                                        {/*    <li>82-300, Elbląg</li>*/}
                                        {/*    <li>T (215) 525-4510</li>*/}
                                        {/*    <li>info@bbs.com</li>*/}
                                        {/*</ul>*/}

                                    </div>
                                    <div className="col-6@md">
                                        {/*<p>We support utilities and resellers by providing their customers with superb service built atop smart technology.</p>*/}
                                        {/*<br/>*/}
                                        <h4>Nasze biuro</h4>
                                        <ul>
                                            <li>ul. Królewiecka 215</li>
                                            <li>82-300, Elbląg</li>
                                            <li><a className="link" href="tel: +48 609 534 950">tel. +48 609 534 950 </a></li>
                                            <li><a className="link" href="mailto: biuro@bbs-polska.com">biuro@bbs-polska.com</a></li>
                                            <br/>
                                            <li><a className="link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps?saddr=My+Location&daddr=BBS+POLSKA+SP.+Z+O.O.">Wskazówki dojazdu</a></li>
                                        </ul>
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
