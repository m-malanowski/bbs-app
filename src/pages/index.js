import * as React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Tiles from "../components/tiles";
import Contact from "../components/contact";
import hero6 from "../images/hero18.jpg"
import FakeLoader from "../components/fakeLoder";
import {motion} from "framer-motion"
import FadeInWhenVisible from "../components/fadeWhenVisible";


// const isDarkMode = () => {
//     window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)".matches)
// }


const Index = ({data, location}) => {
    // const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <>
            <Seo title="BBD Best Builidng Solutions"/>


            <FakeLoader></FakeLoader>
            {/*<Layout location={location} title={siteTitle}>*/}

            <motion.div
                style={{overflow: "hidden"}}
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 3.6,
                        duration: 1,
                        ease: [0.6, 0.01, -0.05, 0.9]
                    }
                }}
            >
            <Hero></Hero>

            <section className="container">
                <div className="grid gap-xxxl@md margin-top-xl">
                    <div className="col-6@md">
                        {/*<h2 className="heading">Our not-so-secret plan: power the global <span>transition</span></h2>*/}
                        <FadeInWhenVisible>
                            <h2 className="heading">Oferowane usługi</h2>
                        </FadeInWhenVisible>
                    </div>
                    <div className="col-6@md">

                        <FadeInWhenVisible>
                            <h3> Realizujemy projekty na zlecenie klientów i dla nich tworzymy spersonalizowane
                                zabudowania.
                                Projektowanie hal stalowych nie ma dla nas żadnych tajemnic.</h3>
                        </FadeInWhenVisible>


                        <div className="grid gap-md margin-y-xxxl">
                            <div className="col-6@md">
                                <FadeInWhenVisible>
                                    <p>Skateboard hammock quinoa disrupt meggings 90's tumblr tilde
                                        distillery.
                                    </p>
                                </FadeInWhenVisible>
                            </div>
                            <div className="col-6@md">
                                <FadeInWhenVisible>
                                    <p>
                                        Dreamcatcher put a bird on it ennui street art normcore you
                                        probably haven't heard of them. Iceland direct trade cardigan authentic kogi.
                                        Disrupt
                                        kombucha poutine lo-fi edison bulb prism migas literally green juice bicycle rights.
                                    </p>
                                </FadeInWhenVisible>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-xxxl@md margin-bottom-xxl">
                    <div className="col-6@md">
                        <FadeInWhenVisible>
                            <h2 className="heading">Nasza firma ma jasno sprecyzowany <span>cel:</span></h2>
                        </FadeInWhenVisible>
                    </div>
                    <div className="col-6@md">
                        <FadeInWhenVisible>
                            <h3>Dostarczać wysokiej jakości kompleksową obsługę inwestycji budowlanych.</h3>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </section>

            <Tiles/>

            <section className="bild">
                <div className="bild__tile">
                    <h2 className="bild__title">Best bulding <br/> solutions</h2>
                    <div className="bild__line"></div>
                </div>
            </section>

            <section>
                <div className="teaser">
                    {/*<div className="col-6">*/}
                    <figure>
                        <img src={hero6} alt="BBS"/>
                    </figure>
                    {/*</div>*/}

                    <div className="col-6">

                        <FadeInWhenVisible>
                            <h2 className="heading padding-xl">
                                Zapewniamy techniczne, kreatywne i terminowe podejście
                                do <span>każdej</span> realizacji.
                            </h2>
                        </FadeInWhenVisible>

                        <div className="grid padding-xl ">
                            <div className="col-6@xs margin-left-auto">
                                <FadeInWhenVisible>
                                    <p>By harnessing the power of smart meters, big data, and machine learning, we raise
                                        the
                                        IQ of your energy assets and allow you to buy or sell electricity from the palm
                                        of
                                        your hand.
                                        Join us today as we illuminate a path to an affordable, clean, energy
                                        future.</p>
                                </FadeInWhenVisible>

                                <br/>

                                <FadeInWhenVisible>
                                    <p>Inventore numquam officiis quod. Accusamus at commodi cum, fugit incidunt minus
                                        natus
                                        nostrum provident quae repellat.
                                    </p>
                                </FadeInWhenVisible>

                                <br/>

                                <FadeInWhenVisible>
                                    <p>By harnessing the power of smart meters, big data, and machine learning, we raise
                                        the
                                        IQ of your energy assets and allow you to buy or sell electricity from the palm
                                        of
                                        your hand.
                                        Join us today as we illuminate a path to an affordable, clean, energy
                                        future.</p>
                                </FadeInWhenVisible>


                                <br/><br/>
                                <a href="" className="btn btn--xs margin-top-xl">Nasze usługi</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

                <Contact></Contact>
            </motion.div>

            {/*</Layout>*/}
        </>

    )
}

export default Index

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `
