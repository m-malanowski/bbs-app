import * as React from "react"
// import {Link, graphql} from "gatsby"
import {graphql} from "gatsby"
// import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Tiles from "../components/tiles";
import Contact from "../components/contact";
import hero6 from "../images/hero18.jpg"
import FakeLoader from "../components/fakeLoder";
import {motion} from "framer-motion"
import FadeInWhenVisible from "../components/fadeWhenVisible";
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import LanguageSwitcher from "../components/languageSwitcher";

const Index = ({data, location}) => {
    // const siteTitle = data.site.siteMetadata?.title || `Title`
    const { t } = useTranslation();
    const {languages, originalPath} = useI18next();

    return (
        <>
            <Seo
                title="BBS Polska | Montaż konstrukcji stalowych Elbląg"
                description="BBS POLSKA SP.Z O.O. oferuje usługi projektowe, wykonawcze, montażowe, przeglądy na terenie miasta Elbląg,  jak również na terenie całej Polski i krajów UE. Posiadamy wykwalifkowaną kadrę inżynierską, pracowników montażu oraz zaplecze sprzętowe umożliwiające realizację zleceń naszych klientów."
            />
            <LanguageSwitcher/>

            <FakeLoader></FakeLoader>
            {/*<Layout location={location} title={siteTitle}>*/}
            {/*<Header ></Header>*/}
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
                                <h2 className="heading">{ t('index.whoWeAre') }</h2>
                            </FadeInWhenVisible>
                        </div>
                        <div className="col-6@md">

                            <FadeInWhenVisible>
                                <h3>BBS POLSKA - Best Building Solutions jest firmą wykonawczą z Elbląga. Firma ma jasno
                                    sprecyzowany cel: dostarczać <span> wysokiej jakości </span> kompleksową obsługę
                                    inwestycji budowlanych.</h3>
                            </FadeInWhenVisible>

                            <div className="grid gap-md margin-y-xxxl">
                                <div className="col-6@md">
                                    <FadeInWhenVisible>
                                        <p>
                                            Usługi świadczone przez firmę <span>BBS </span> Polska związane są przede wszystkim z przygotwywaniem
                                            projektów oraz wznoszeniem obiektów budowlanych. Specjalizujemy się w
                                            obiektach przemysłowych.
                                        </p>
                                    </FadeInWhenVisible>

                                    {/*<Link to="/realizacje" href="" className="btn btn--dark margin-top-xxl ">Nasze*/}
                                    {/*    realizacje</Link>*/}

                                </div>
                                <div className="col-6@md">
                                    <FadeInWhenVisible>
                                        <p> Realizujemy projekty na zlecenie klientów i dla nich tworzymy
                                            spersonalizowane
                                            zabudowania.
                                            Projektowanie hal stalowych nie ma dla nas żadnych tajemnic.
                                        </p>
                                    </FadeInWhenVisible>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="grid gap-xxxl@md margin-bottom-xxl">
                        <div className="col-6@md">
                            <FadeInWhenVisible>
                                <h2 className="heading">Dlaczego my?</h2>
                            </FadeInWhenVisible>
                        </div>
                        <div className="col-6@md">
                            <FadeInWhenVisible>
                                <h3>Dbając o wysoki standard świadczonych usług utrzymujemy i stale doskonalimy ich jakość. <br/> Nasze główne atuty to: </h3>
                            </FadeInWhenVisible>
                        </div>
                    </div>

                    {/*<div className="grid gap-xxxl@md margin-bottom-xxl">*/}
                    {/*    <div className="col-6@md">*/}
                    {/*        <FadeInWhenVisible>*/}
                    {/*            <h2 className="heading">Nasza firma ma jasno sprecyzowany <span>cel:</span></h2>*/}
                    {/*        </FadeInWhenVisible>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-6@md">*/}
                    {/*        <FadeInWhenVisible>*/}
                    {/*            <h3>Dostarczać wysokiej jakości kompleksową obsługę inwestycji budowlanych.</h3>*/}
                    {/*        </FadeInWhenVisible>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </section>

                <Tiles/>

                <section className="bild">
                    <div className="bild__tile">
                        <h2 className="bild__title">20 lat <br/> doświadczenia</h2>
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
                                        <p>Świadzczymy usługi z zakresu budownictwa przemysłowego. Głównym profilem
                                            działalności naszej spółki, jest montaż obiektów przemsyłowych opartych o
                                            rozwiązania z zakresu konstrukcji stalowych. W portfolio zakończonych
                                            obiektów firmy BBS POLSKA, znajdują się liczne hale magazynowe, produkcyjne,
                                            jak również modernizacje obiektów istniejących.
                                        </p>
                                    </FadeInWhenVisible>

                                    <br/>

                                    <FadeInWhenVisible>
                                        <p>Dzięki posiadanemu doświadczeniu, zdobytemu przez naszych pracowników w
                                            Polsce i w UE, możemy podjąć się realizacji obiektów spełniając oczekiwania
                                            naszych klientów.
                                        </p>
                                    </FadeInWhenVisible>

                                    <br/>

                                    <FadeInWhenVisible>
                                        <p>Satysfakcją dla naszej firmy jest zakończenie inwestycji w terminie, przy
                                            zachowaniu zasad bezpieczeństwa oraz zakładanego budżetu finansowego.</p>
                                    </FadeInWhenVisible>

                                    <Link to="/realizacje" href="" className="btn btn--dark margin-y-xl ">Nasze realizacje</Link>

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
  }
`;