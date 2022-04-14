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

const Index = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <>
            <Seo title="All posts"/>

            <FakeLoader></FakeLoader>
            {/*<Layout location={location} title={siteTitle}>*/}

                <Hero></Hero>

                <section className="container">
                    <div className="grid gap-xxxl@md margin-top-xl">
                        <div className="col-6@md">
                            {/*<h2 className="heading">Our not-so-secret plan: power the global <span>transition</span></h2>*/}
                            <h2 className="heading">Oferowane usługi</h2>
                        </div>
                        <div className="col-6@md">
                            <h3> Realizujemy projekty na zlecenie klientów i dla nich tworzymy spersonalizowane zabudowania. Projektowanie hal stalowych nie ma dla nas żadnych tajemnic.</h3>

                            <div className="grid gap-md margin-y-xxxl">
                                <div className="col-6@md">Skateboard hammock quinoa disrupt meggings 90's tumblr tilde distillery.</div>
                                <div className="col-6@md">Dreamcatcher put a bird on it ennui street art normcore you probably haven't heard of them. Iceland direct trade cardigan authentic kogi. Disrupt kombucha poutine lo-fi edison bulb prism migas literally green juice bicycle rights. </div>
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
                            <img src={hero6} alt="BBS" />
                        </figure>
                        {/*</div>*/}

                        <div className="col-6">
                            <h2 className="heading padding-xl">
                                Zapewniamy techniczne, kreatywne i terminowe podejście do <span>każdej</span> realizacji.
                            </h2>
                            <div className="grid padding-xl ">
                                <div className="col-6@xs margin-left-auto">
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

            {/*</Layout>*/}
        </>

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
