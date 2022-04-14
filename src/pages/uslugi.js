import * as React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import HeroReversed from "../components/heroReversed";
import Contact from "../components/contact";
import hero6 from "../images/hero7.jpg";
import TilesServices from "../components/tilesServices";

const Services = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`


    return (
        <>
            {/*<Layout location={location} title={siteTitle}>*/}
                <Seo title="All posts"/>

                <HeroReversed></HeroReversed>

                <section className="container">
                    <div className="grid grid gap-xxxl">
                        <div className="col-6">
                            <h2 className="heading">Our not-so-secret plan: <span>power</span> the global transition</h2>
                        </div>
                        <div className="col-6">
                            <h3 className="margin-bottom-md">We support utilities and resellers by providing their <br/> customers with superb service built atop smart technology.</h3>

                            <div className="grid padding-xl ">
                                <div className="col-6 margin-left-auto">
                                    <p>By harnessing the power of smart meters, big data, and machine learning, we raise the IQ of your energy assets and allow you to buy or sell electricity from the palm of your hand.
                                        Join us today as we illuminate a path to an affordable, clean, energy future.</p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid gap-xxxl margin-bottom-xxl">
                        <div className="col-6">
                            <h2 className="heading">Your energy transition partner transition</h2>
                        </div>
                        <div className="col-6">
                            <div className="grid padding-xl ">
                                <div className="col-6 margin-left-auto">
                                    <p>By harnessing the power of smart meters, big data, and machine learning, we raise the IQ of your energy assets and allow you to buy or sell electricity from the palm of your hand.
                                        Join us today as we illuminate a path to an affordable, clean, energy future.</p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bild bild--services">
                    <div className="bild__tile bild__tile--services">
                        <h2 className="bild__title ">Nasze usługi</h2>
                        <div className="bild__line"></div>
                    </div>
                </section>


                <TilesServices/>


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
