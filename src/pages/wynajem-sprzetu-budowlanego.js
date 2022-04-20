import * as React from "react"
import {Link, graphql} from "gatsby"
import Seo from "../components/seo"
import HeroReversed from "../components/heroReversed";
import Contact from "../components/contact";
import sectionImage from "../images/projects/montaz-hali-magazynowej-2000m2.jpg"

const Services = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const Fragment = React.Fragment;


    return (
        <>
            {/*<Layout location={location} title={siteTitle}>*/}
            <Seo title="Wynajem sprzętu budowlanego Elbląg i okolice" description="Wypożyczalnia sprzętu budowlanego Elbląg"/>

            <HeroReversed sectionImage={sectionImage}
                          title="Potrzebujesz specjalistycznego sprzętu budowlanego?"
                          subTitle={<Fragment> Nie musisz od razu kupować potrzebnego Ci sprzętu budowlanego!
                              Wynajmij go w <span>BBS Polska</span> Dysponujemy własnym sprzętem budowlanym. Zachęcamy do zapoznania się z naszą ofertą.  </Fragment>}
            ></HeroReversed>

            <section className="container">
                <div className="grid gap-xxxl">
                    <div className="col-6@md">
                        <h2 className="heading">Nie musisz od razu kupować potrzebnego Ci sprzętu budowlanego! Wynajmij go w <span>BBS Polska</span> </h2>
                    </div>
                    <div className="col-6@md">
                        <h3 className="margin-bottom-md">We support utilities and resellers by providing their <br/> customers with superb service built atop smart technology.</h3>

                        <div className="grid padding-xl ">
                            <div className="col-6@md margin-left-auto">
                                <p>By harnessing the power of smart meters, big data, and machine learning, we raise the IQ of your energy assets and allow you to buy or sell electricity from the palm of your hand.
                                    Join us today as we illuminate a path to an affordable, clean, energy future.</p>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-xxxl margin-bottom-xxl">
                    <div className="col-6@md">
                        <h2 className="heading">Your energy transition partner transition</h2>
                    </div>
                    <div className="col-6@md">
                        <div className="grid padding-xl ">
                            <div className="col-6@md margin-left-auto">
                                <p>By harnessing the power of smart meters, big data, and machine learning, we raise the IQ of your energy assets and allow you to buy or sell electricity from the palm of your hand.
                                    Join us today as we illuminate a path to an affordable, clean, energy future.</p>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*<section className="bild bild--services">*/}
            {/*    <div className="bild__tile bild__tile--services">*/}
            {/*        <h2 className="bild__title ">Best <br/> building <br/> solutions</h2>*/}
            {/*        <div className="bild__line"></div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*<TilesServices/>*/}

            <Contact></Contact>

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
