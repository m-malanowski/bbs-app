import * as React from "react"
import {Link, graphql} from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Tiles from "../components/tiles";
import Contact from "../components/contact";
import hero6 from "../images/hero18.jpg"
import FakeLoader from "../components/fakeLoder";
import {motion} from "framer-motion"
import {pathVariants} from "../components/variants";


const transition2 = { duration: 2, yoyo: Infinity, ease: "easeInOut" };


function FadeInWhenVisible({children}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{delay: .6, duration: 0.3}}
            variants={{
                visible: {opacity: 1, scale: 1},
                hidden: {opacity: 0, scale: .95}
            }}
        >
            {children}
        </motion.div>
    );
}


const Index = ({data, location}) => {
    // const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <>
            <Seo title="BBD Best Builidng Solutions"/>


            <motion.div
                className="greeting"
                initial={{opacity: 1}}
                animate={{
                    opacity: 0,
                    transition: {delay: 3.2, when: "beforeChildren", duration: .6},
                    transitionEnd: {
                        display: "none"
                    }
                }}
            >
                <svg
                    // variants={pathVariants} initial="hidden" animate="visible" className="initialLogo"
                    width="179" height="156" viewBox="0 0 179 156" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <motion.path
                        d="M57.161 57.3v9.214l-30.058 21.61v39.236L44.6 114.774V97.093l29.698-21.35 29.698 21.35v30.849h17.494V88.124L82.873 60.362l21.482-15.445 29.698 21.352v34.376l17.494-12.577V57.3l-47.192-33.928L57.161 57.3z"
                        fill="transparent"
                        strokeWidth="2"
                        stroke="#F68712"

                        strokeLinecap="round"
                        initial={{pathLength: 0, scale: .1, opacity: 0}}
                        animate={{pathLength: 1, scale: 1, opacity: 1}}
                        transition={transition2}
                    />

                    <motion.path
                        d="M158.197 0.000302223H20.4541C9.15733 0.000302223 0 9.15762 0 20.455V134.811C0 146.108 9.15733 155.266 20.4541 155.266H158.197C169.493 155.266 178.652 146.108 178.652 134.811V20.455C178.652 9.15762 169.493 0.000302223 158.197 0.000302223V0.000302223ZM165.48 134.811C165.48 138.827 162.212 142.094 158.197 142.094H20.4541C16.4385 142.094 13.1719 138.827 13.1719 134.811V20.455C13.1719 16.439 16.4385 13.1723 20.4541 13.1723H158.197C162.212 13.1723 165.48 16.439 165.48 20.455V134.811Z"
                        fill="transparent"
                        strokeWidth="2"
                        stroke="#F68712"
                        strokeLinecap="round"
                        initial={{pathLength: 0}}
                        animate={{pathLength: 1}}
                        transition={transition2}
                    />

                </svg>

            </motion.div>


            {/*<FakeLoader></FakeLoader>*/}
            {/*<Layout location={location} title={siteTitle}>*/}

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
                            <div className="col-6@md">Skateboard hammock quinoa disrupt meggings 90's tumblr tilde
                                distillery.
                            </div>
                            <div className="col-6@md">Dreamcatcher put a bird on it ennui street art normcore you
                                probably haven't heard of them. Iceland direct trade cardigan authentic kogi. Disrupt
                                kombucha poutine lo-fi edison bulb prism migas literally green juice bicycle rights.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-xxxl@md margin-bottom-xxl">
                    <div className="col-6@md">
                        <h2 className="heading">Nasza firma ma jasno sprecyzowany <span>cel:</span></h2>
                    </div>
                    <div className="col-6@md">
                        <h3>Dostarczać wysokiej jakości kompleksową obsługę inwestycji budowlanych.</h3>
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
                        <h2 className="heading padding-xl">
                            Zapewniamy techniczne, kreatywne i terminowe podejście do <span>każdej</span> realizacji.
                        </h2>
                        <div className="grid padding-xl ">
                            <div className="col-6@xs margin-left-auto">
                                <p>By harnessing the power of smart meters, big data, and machine learning, we raise the
                                    IQ of your energy assets and allow you to buy or sell electricity from the palm of
                                    your hand.
                                    Join us today as we illuminate a path to an affordable, clean, energy future.</p>
                                <br/>
                                <p>Inventore numquam officiis quod. Accusamus at commodi cum, fugit incidunt minus natus
                                    nostrum provident quae repellat.</p>
                                <br/>
                                <p>By harnessing the power of smart meters, big data, and machine learning, we raise the
                                    IQ of your energy assets and allow you to buy or sell electricity from the palm of
                                    your hand.
                                    Join us today as we illuminate a path to an affordable, clean, energy future.</p>
                                <br/><br/>
                                <a href="" className="btn btn--dark margin-top-xl">Nasze usługi</a>

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
