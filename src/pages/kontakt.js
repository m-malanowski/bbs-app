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
import FadeInWhenVisible from "../components/fadeWhenVisible";

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
                                <FadeInWhenVisible delay={0.2}>
                                    <h3>Planujesz inwestycję: budowę, modernizację lub przymierzasz się do realizacji - skorzystaj z usług naszej firmy. Zapraszamy do kontaktu lub pozostawienie danych kontaktowych. </h3>
                                </FadeInWhenVisible>
                                <div className="grid gap-xxxl margin-bottom-xxl margin-top-xxl">
                                    <div className="col-6@md">

                                        <FadeInWhenVisible delay={0.4}>
                                            <h4>Kosztorys Inwestorski</h4>
                                        </FadeInWhenVisible>

                                        <FadeInWhenVisible delay={0.7}>
                                            <p>Zachęcamy do skorzystania z usługi wyceny Twojej inwestycji w postaci <span>kosztorysu inwestorskiego.</span></p>
                                        </FadeInWhenVisible>
                                        <br/>
                                        <br/>
                                        <ul>
                                            <FadeInWhenVisible delay={0.8}>
                                                <li>BBS POLSKA SP. Z O.O.</li>
                                            </FadeInWhenVisible>
                                            <FadeInWhenVisible delay={0.9}>
                                                <li>82-300 Elbląg, ul. Królewiecka 215</li>
                                            </FadeInWhenVisible>
                                            <FadeInWhenVisible delay={1.0}>
                                                <li>NIP 578 312 14 31</li>
                                            </FadeInWhenVisible>
                                        </ul>


                                    </div>
                                    <div className="col-6@md">
                                        <FadeInWhenVisible delay={0.8}>
                                            <h4>Nasze biuro</h4>
                                        </FadeInWhenVisible>

                                        <ul>
                                            <FadeInWhenVisible delay={0.8}>
                                                <li>ul. Królewiecka 215</li>
                                            </FadeInWhenVisible>
                                            <FadeInWhenVisible delay={0.9}>
                                                <li>82-300, Elbląg</li>
                                            </FadeInWhenVisible>
                                            <FadeInWhenVisible delay={1.0}>
                                                <li><a className="link" href="tel: +48 609 534 950">tel. +48 609 534 950 </a></li>
                                            </FadeInWhenVisible>
                                            <FadeInWhenVisible delay={1.1}>
                                                <li><a className="link" href="mailto: biuro@bbs-polska.com">biuro@bbs-polska.com</a></li>
                                            </FadeInWhenVisible>
                                            <br/>
                                            <FadeInWhenVisible delay={1.2}>
                                                <li><a className="link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps?saddr=My+Location&daddr=BBS+POLSKA+SP.+Z+O.O.">Wskazówki dojazdu</a></li>
                                            </FadeInWhenVisible>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6@md">
                                <FadeInWhenVisible delay={1.0}>
                                    <Form></Form>
                                </FadeInWhenVisible>
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
