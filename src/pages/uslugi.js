import * as React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import HeroReversed from "../components/heroReversed";
import Contact from "../components/contact";
import hero6 from "../images/hero7.jpg";
import TilesServices from "../components/tilesServices";
import sectionImage from "../images/projects/montaz-hali-magazynowej-2000m2.jpg"

const Services = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const Fragment = React.Fragment;

    return (
        <>
            {/*<Layout location={location} title={siteTitle}>*/}
            <Seo title="All posts"/>

            <HeroReversed sectionImage={sectionImage} title="Hale i konstrukcje stalowe " subTitle="Budujemy z myślą o kliencie oraz użytkownikach, którzy będą korzystać z wykonanych przez nas obiektów. Doświadczenie, baza własnego sprzętu budowlanego oraz kompetentne brygady montażowe pozwalają nam zaoferować konkurencyjne ceny na wykonanie prac."></HeroReversed>

            <section className="container">
                <div className="grid gap-xxxl">
                    <div className="col-6@md">
                        <h2 className="heading">Zacznij budowę z  <span>BBS Polska</span></h2>
                    </div>
                    <div className="col-6@md">
                        <h3 className="margin-bottom-md">Realizujemy projekty na zlecenie klientów i dla nich tworzymy spersonalizowane zabudowania. Projektowanie hal stalowych nie ma dla nas żadnych tajemnic.</h3>

                        <div className="grid padding-xl ">
                            <div className="col-6@md margin-left-auto">
                                <p>Wyróżnia nas bardzo szybka dostawa sprzętu na budowę, pełne wsparcie techniczne klienta oraz proste warunki współpracy. Współpracujemy zarówno z dużymi firmami deweloperskimi jak i klientami indywidualnymi.</p>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-xxxl margin-bottom-xxl">
                    <div className="col-6@md">
                        <h2 className="heading">Wysoka jakość oferowanych usług</h2>
                    </div>
                    <div className="col-6@md">
                        <div className="grid padding-xl ">
                            <div className="col-6@md margin-left-auto">
                                <p>By harnessing the power of smart meters, big data, and machine learning, we raise the
                                    IQ of your energy assets and allow you to buy or sell electricity from the palm of
                                    your hand.
                                    Join us today as we illuminate a path to an affordable, clean, energy future.</p>
                                <br/>
                                <Link to="/wynajem-sprzetu-budowlanego" className="btn btn--dark margin-top-xl">Wynajem
                                    sprzętu</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="teaser">
                    {/*<div className="col-6 teaser__left">*/}
                    <figure>
                        <img src={hero6} alt="BBS" className=""/>
                    </figure>
                    {/*</div>*/}

                    <div className="col-6 teaser__right ">
                        <h2 className="heading padding-xl">
                            Getting the price right
                        </h2>
                        <div className="grid padding-x-xl">
                            <div className="col-8">
                                <p className="paragraph-larger">By harnessing the power of smart meters, big data, and machine y from the palm of your hand.</p>
                            </div>
                        </div>

                        <div className="grid grid gap-md padding-xl margin-top-auto">
                            <div className="col-6">
                                <p className="paragraph-larger">Your energy transition partner <span>transition</span></p>
                            </div>
                            <div className="col-6">
                                <p className="paragraph-larger">We support utilities and resellers by providing their customers with superb service built atop smart technology.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            {/*<section >*/}
            {/*    <div className="grid teaser">*/}
            {/*        <div className="col-6 teaser__left">*/}
            {/*            <img src={hero6} alt="BBS" className="responsive"/>*/}
            {/*        </div>*/}

            {/*        <div className="col-6 teaser__right ">*/}
            {/*            <h2 className="heading padding-xl">*/}
            {/*                Getting the price right*/}
            {/*            </h2>*/}
            {/*            <div className="grid padding-x-xl">*/}
            {/*                <div className="col-8">*/}
            {/*                    <p className="paragraph-larger">By harnessing the power of smart meters, big data, and machine y from the palm of your hand.</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="grid grid gap-md padding-xl margin-top-auto">*/}
            {/*                <div className="col-6">*/}
            {/*                    <p className="paragraph-larger">Your energy transition partner <span>transition</span></p>*/}
            {/*                </div>*/}
            {/*                <div className="col-6">*/}
            {/*                    <p className="paragraph-larger">We support utilities and resellers by providing their customers with superb service built atop smart technology.</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}


            <Contact></Contact>

            {/*</Layout>*/}
        </>
    )
}

export default Services

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
