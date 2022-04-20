import * as React from "react"
import {Link, graphql} from "gatsby"
// import Layout from "../components/layout"
import sectionImage from '../images/hero14.jpg'
import Seo from "../components/seo"
import HeroReversed from "../components/heroReversed";
import Contact from "../components/contact";
import hero6 from "../images/bild2.jpg";

const About = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <>
            {/*<Layout location={location} title={siteTitle}>*/}
                <Seo title="All posts"/>

                <HeroReversed sectionImage={sectionImage}></HeroReversed>

                <section className="container">
                    <div className="grid gap-xxxl">
                        <div className="col-6@md">
                            <h2 className="heading">Your energy transition partner</h2>
                        </div>
                        <div className="col-6@md">
                            <p className="margin-bottom-md">We support utilities and resellers by providing their <br/>  customers with superb service built atop smart technology.</p>

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
                    <div className="grid grid gap-xxxl margin-bottom-xxl">
                        <div className="col-6@md">
                            <h2 className="heading">Your energy transition partner <span>transition</span></h2>
                        </div>
                        <div className="col-6@md">
                            <h3>We support utilities and resellers by providing their customers with superb service built atop smart technology.</h3>

                            <div className="grid grid gap-xxxl margin-bottom-xxl">
                                <div className="col-6">
                                    <p >Your energy transition partner <span>transition</span></p>
                                </div>
                                <div className="col-6">
                                    <p>We support utilities and resellers by providing their customers with superb service built atop smart technology.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section >
                    <div className=" teaser">
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
