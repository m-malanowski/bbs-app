import * as React from "react"
import {Link, graphql} from "gatsby"
// import Layout from "../components/layout"
import sectionImage from '../images/bild2.jpg'
import Seo from "../components/seo"
import HeroReversed from "../components/heroReversed";
import Contact from "../components/contact";
import hero6 from "../images/bild2.jpg";
import TilesServices from "../components/tilesServices";

const About = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const Fragment = React.Fragment;

    return (
        <>
            {/*<Layout location={location} title={siteTitle}>*/}
            <Seo title="All posts"/>

            <HeroReversed sectionImage={sectionImage}
                          title={<Fragment> Zacznij budowę z <br/> <span>BBS Polska </span></Fragment>}
                          subTitle="Budujemy z myślą o kliencie oraz użytkownikach, którzy będą korzystać z wykonanych przez nas obiektów. Doświadczenie, baza własnego sprzętu budowlanego oraz kompetentne brygady montażowe pozwalają nam zaoferować konkurencyjne ceny na wykonanie prac."></HeroReversed>

            <section className="container">
                <div className="grid gap-xxxl">
                    <div className="col-6@md">
                        <h2 className="heading">Your energy transition partner</h2>
                    </div>
                    <div className="col-6@md">
                        <p className="margin-bottom-md">We support utilities and resellers by providing
                            their <br/> customers with superb service built atop smart technology.</p>

                        <h2 className="heading--gray padding-y-xxxl">Buying and
                            selling energy
                            doesn’t need to
                            be hard work.</h2>

                        {/*<div className="grid gap-md margin-y-xxxl">*/}
                        {/*    <div className="col-6">Skateboard hammock quinoa disrupt meggings 90's tumblr tilde distillery.</div>*/}
                        {/*    <div className="col-6">Dreamcatcher put a bird on it ennui street art normcore you probably haven't heard of them. Iceland direct trade cardigan authentic kogi. Disrupt kombucha poutine lo-fi edison bulb prism migas literally green juice bicycle rights. </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="grid grid gap-xxxl">
                    <div className="col-6@md">
                        <h2 className="heading">Your energy transition partner <span>transition</span></h2>
                    </div>
                    <div className="col-6@md">
                        <h3>We support utilities and resellers by providing their customers with superb service built
                            atop smart technology.</h3>

                        <div className="grid grid gap-xxxl margin-bottom-xxl">
                            <div className="col-6">
                                <p>Your energy transition partner <span>transition</span></p>
                            </div>
                            <div className="col-6">
                                <p>We support utilities and resellers by providing their customers with superb service
                                    built atop smart technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bild bild--services">
                <div className="bild__tile bild__tile--services">
                    <h2 className="bild__title ">Best <br/> building <br/> solutions</h2>
                    <div className="bild__line"></div>
                </div>
            </section>

            <TilesServices/>

            <Contact></Contact>

            {/*</Layout>*/}
        </>
    )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
