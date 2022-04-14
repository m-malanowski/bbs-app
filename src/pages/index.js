import * as React from "react"
import {Link, graphql} from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Tiles from "../components/tiles";
import Contact from "../components/contact";
import hero6 from "../images/bild2.jpg"

const Index = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`


    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="All posts"/>

            <Hero></Hero>


            <section className="container">
                <div className="grid grid gap-xxxl">
                    <div className="col-6">
                        <h2 className="heading">Our not-so-secret plan: power the global <span>transition</span></h2>
                    </div>
                    <div className="col-6">
                        <h3>Gastropub leggings probably dreamcatcher, disrupt swag lomo cold-pressed 8-bit cardigan.</h3>

                        <div className="grid gap-md margin-y-xxxl">
                            <div className="col-6">Skateboard hammock quinoa disrupt meggings 90's tumblr tilde distillery.</div>
                            <div className="col-6">Dreamcatcher put a bird on it ennui street art normcore you probably haven't heard of them. Iceland direct trade cardigan authentic kogi. Disrupt kombucha poutine lo-fi edison bulb prism migas literally green juice bicycle rights. </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid gap-xxxl margin-bottom-xxl">
                    <div className="col-6">
                        <h2 className="heading">Oferowane usługi</h2>
                    </div>
                    <div className="col-6">
                        <h3>Our grid technology is customizable and flexible to fit your project.</h3>
                    </div>
                </div>
            </section>

            <Tiles/>

            <section className="bild">
                <div className="bild__tile">
                    <h2 className="bild__title">Your energy, <br/> done better</h2>
                    <div className="bild__line"></div>
                </div>
            </section>

            <section>
                <div className="teaser">
                    {/*<div className="col-6">*/}
                        <figure>
                            <img src={hero6} alt="BBS" />
                        </figure>
                    {/*</div>*/}

                    <div className="col-6">
                        <h2 className="heading padding-xl">
                            We deliver energy that’s good for your wallet, <span>your grid</span> and your world.
                        </h2>
                        <div className="grid padding-xl ">
                            <div className="col-6 margin-left-auto">
                                <p >By harnessing the power of smart meters, big data, and machine learning, we raise the IQ of your energy assets and allow you to buy or sell electricity from the palm of your hand.
                                    Join us today as we illuminate a path to an affordable, clean, energy future.</p>
                                <br/>
                                <p >Inventore numquam officiis quod. Accusamus at commodi cum, fugit incidunt minus natus nostrum provident quae repellat.</p>
                                <br/>
                                <p >By harnessing the power of smart meters, big data, and machine learning, we raise the IQ of your energy assets and allow you to buy or sell electricity from the palm of your hand.
                                    Join us today as we illuminate a path to an affordable, clean, energy future.</p>

                                <br/><br/>
                                <a href="" className="btn btn--dark margin-top-xl">Nasze usługi</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact></Contact>

        </Layout>
    )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
