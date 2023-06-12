import * as React from "react"
import {graphql} from "gatsby"
import Seo from "../components/seo"
import {Helmet} from "react-helmet";
import Form from "../components/form";
import FadeInWhenVisible from "../components/fadeWhenVisible";
import {useTranslation} from "gatsby-plugin-react-i18next";

const ContactPage = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const { t } = useTranslation();

    return (
        <>
            <Seo title="Kontakt"/>
            <Helmet bodyAttributes={{
                id: "contact-page"
            }}/>

            <div className="contact-page">
                <section className="container">
                    <div className="grid gap-xxxl margin-y-xxxl">
                        <div className="col-6@md">
                            <FadeInWhenVisible delay={0.2}>
                                <h3>{ t('contact.contactDesc') }</h3>
                            </FadeInWhenVisible>
                            <div className="grid gap-xxxl margin-bottom-xxl margin-top-xxl">
                                <div className="col-6@md">

                                    <FadeInWhenVisible delay={0.4}>
                                        <h4 className="color-primary">{ t('contact.investorsCosting') }</h4>
                                    </FadeInWhenVisible>

                                    <FadeInWhenVisible delay={0.7}>
                                        <p>{ t('contact.investorsCostingDesc') }</p>
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
                                        <h4 className="color-primary">{ t('contact.office') }</h4>
                                    </FadeInWhenVisible>

                                    <ul>
                                        <FadeInWhenVisible delay={0.8}>
                                            <li>ul. Królewiecka 215</li>
                                        </FadeInWhenVisible>
                                        <FadeInWhenVisible delay={0.9}>
                                            <li>82-300, Elbląg</li>
                                        </FadeInWhenVisible>
                                        <FadeInWhenVisible delay={1.0}>
                                            <li><a className="link" href="tel: +48 609 534 950">tel. +48 609 534
                                                950 </a></li>
                                        </FadeInWhenVisible>
                                        <FadeInWhenVisible delay={1.1}>
                                            <li><a className="link"
                                                   href="mailto: biuro@bbs-polska.com">biuro@bbs-polska.com</a></li>
                                        </FadeInWhenVisible>
                                        <br/>
                                        <FadeInWhenVisible delay={1.2}>
                                            <li><a className="link" target="_blank" rel="noopener noreferrer"
                                                   href="https://www.google.com/maps?saddr=My+Location&daddr=BBS+POLSKA+SP.+Z+O.O.">{ t('contact.directions') }</a></li>
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
        </>
    )
}

export default ContactPage


export const query = graphql`
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
    site {
      siteMetadata {
        title
      }
    }
  }
`;
