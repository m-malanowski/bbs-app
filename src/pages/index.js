import * as React from "react"
import {graphql} from "gatsby"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Tiles from "../components/tiles";
import Contact from "../components/contact";
import FakeLoader from "../components/fakeLoder";
import {motion} from "framer-motion"
import FadeInWhenVisible from "../components/fadeWhenVisible";
import {I18nextContext, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import ImagesScrolling from "../components/scrollEffect";
import TilesAbout from "../components/tilesAbout";
import teaserImg from "../images/hero12.jpg"
import bildIndex from "../images/drone2.jpg"

const variants = {
    initial: {
        opacity: .8,
        height: '69vh'
    },
    visible: {
        // y: 0,
        opacity: 1,
        height: '100vh',
        transition: {
            delay: .4,
            duration: 2.8,
            ease: [0, 0.55, 0.45, 1]
        }
    },
    exit: {
        // y: 50,
        opacity: 0
    }
}


const Index = ({data, location}) => {
    // const siteTitle = data.site.siteMetadata?.title || `Title`
    const { t } = useTranslation();
    return (
        <>
            <Seo
                title="BBS Polska | Montaż konstrukcji stalowych Elbląg"
                description="BBS POLSKA SP.Z O.O. oferuje usługi projektowe, wykonawcze, montażowe, przeglądy na terenie miasta Elbląg,  jak również na terenie całej Polski i krajów UE. Posiadamy wykwalifkowaną kadrę inżynierską, pracowników montażu oraz zaplecze sprzętowe umożliwiające realizację zleceń naszych klientów."
            />

            <FakeLoader></FakeLoader>
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
                            <FadeInWhenVisible delay={.4}>
                                <h2 className="heading">{ t('index.whoWeAre') }</h2>
                            </FadeInWhenVisible>
                        </div>
                        <div className="col-6@md">

                            <FadeInWhenVisible delay={.4}>
                                <h3>BBS Polska - Best Building Solutions jest firmą wykonawczą z Elbląga. Firma ma jasno
                                    sprecyzowany cel: dostarczać <span> wysokiej jakości </span> kompleksową obsługę
                                    inwestycji budowlanych.</h3>
                            </FadeInWhenVisible>

                            <div className="grid gap-md margin-y-xxxl">
                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={0.3}>
                                        <p>
                                            Usługi świadczone przez firmę <span>BBS </span> Polska związane są przede wszystkim z przygotwywaniem
                                            projektów oraz wznoszeniem obiektów budowlanych. Specjalizujemy się w
                                            obiektach przemysłowych.
                                        </p>
                                    </FadeInWhenVisible>

                                </div>
                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={0.35}>
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
                            <FadeInWhenVisible delay={0.3}>
                                <h2 className="heading">Dlaczego my?</h2>
                            </FadeInWhenVisible>
                        </div>
                        <div className="col-6@md">
                            <FadeInWhenVisible delay={0.6}>
                                <h3>Dbając o wysoki standard świadczonych usług utrzymujemy i stale doskonalimy ich jakość. <br/> Nasze główne atuty to: </h3>
                            </FadeInWhenVisible>
                        </div>
                    </div>

                </section>



                <FadeInWhenVisible delay={0.4}>
                    <Tiles/>
                </FadeInWhenVisible>

                <section>
                    <div className="teaser">
                        <figure>
                            <ImagesScrolling scaleValue={1.3} pictureSrc={teaserImg} alt="BBS Polska"/>
                        </figure>

                        <div className="col-6 teaser__right">
                            <h2 className="heading padding-x-xl padding-top-xl">
                                Oferowane uslugi
                            </h2>
                            <div className="grid padding-x-xl">
                                <div className="col-8">
                                    <FadeInWhenVisible delay={.1}>
                                        <p className="paragraph-larger">Budujemy z myślą o kliencie oraz użytkownikach, którzy będą korzystać z wykonanych przez nas obiektów. </p>
                                    </FadeInWhenVisible>
                                </div>
                            </div>

                            <div className="grid gap-lg padding-x-xl padding-top-xxxl margin-bottom-auto">

                                <div className="col-6@md margin-y-lg">
                                    <FadeInWhenVisible delay={.1}>
                                        <h4><Link to="/montaz-konstrukcji-stalowych" className="link link--arrow">Montaż konstrukcji stalowych</Link></h4>
                                        <p>Zapewniamy kompleksowy montaż konstrukcji stalowych. Posiadamy własne brygady montażowe z wieloletnim doświadczeniem.</p>
                                    </FadeInWhenVisible>
                                </div>

                                <div className="col-6@md margin-y-lg">
                                    <FadeInWhenVisible delay={.1}>
                                        <h4>Prefabrykacja konstrukcji</h4>
                                        <p>Oferujemy dostawę konstrukcji stalowej obiektu, zgodnie z wydaną dokumentacją techniczną.</p>
                                    </FadeInWhenVisible>
                                </div>

                                <div className="col-6@md ">
                                    <FadeInWhenVisible delay={.1}>
                                        <h4>Dachy płaskie</h4>
                                        <p>Posiadamy wieloletnie doświadczenie w montażu dachów płaskich z technologii membran PVC.Posiadamy wieloletnie doświadczenie w montażu dachów płaskich z technologii membran PVC.</p>
                                    </FadeInWhenVisible>
                                </div>

                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={.1}>
                                        <h4>Usługi projektowe</h4>
                                        <p>Świadczymy usługi na wykonanie projektu budowlanego, wykonawczego, branżowego, rozwiązań indywidualnych.</p>
                                    </FadeInWhenVisible>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                <section className="container">
                    <div className="grid gap-xxxl@md margin-top-xl">
                        <div className="col-6@md">
                            <FadeInWhenVisible delay={.1}>
                                <h2 className="heading">Zapewniamy techniczne i terminowe podejście do każdej realizacji.</h2>
                            </FadeInWhenVisible>
                        </div>
                        <div className="col-6@md">

                            <FadeInWhenVisible delay={.4}>
                                <h3>Dzięki posiadanemu doświadczeniu, zdobytemu przez naszych pracowników w <span>Polsce</span> i w <span>UE</span>, możemy podjąć się realizacji obiektów spełniając oczekiwania naszych klientów.</h3>
                            </FadeInWhenVisible>

                            <div className="grid gap-md margin-y-xxxl">
                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={0.2}>
                                        <p>
                                            Świadzczymy usługi z zakresu budownictwa przemysłowego. Głównym profilem działalności naszej spółki, jest montaż obiektów przemsyłowych opartych o rozwiązania z zakresu konstrukcji stalowych. W portfolio zakończonych obiektów firmy <span>BBS POLSKA</span>, znajdują się liczne hale magazynowe, produkcyjne, jak również modernizacje obiektów istniejących.
                                        </p>
                                    </FadeInWhenVisible>

                                    <Link to="/realizacje" href="" className="btn btn--dark margin-top-xxl ">Nasze
                                        realizacje
                                    </Link>

                                </div>
                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={0.3}>
                                        <p>Satysfakcją dla naszej firmy jest zakończenie inwestycji w terminie, przy zachowaniu zasad bezpieczeństwa oraz zakładanego budżetu finansowego.</p>
                                    </FadeInWhenVisible>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="bild">
                    <figure>
                        <ImagesScrolling scaleValue={1.3} pictureSrc={bildIndex} alt="BBS Polska"/>
                        {/*<img src={bildIndex} alt="BBS"/>*/}
                    </figure>
                    <div className="bild__tile bild__tile--services">

                        <h2 className="bild__title ">20 lat <br/> doświa <br/>dczenia</h2>
                        <div className="bild__line"></div>
                    </div>
                </section>


                <TilesAbout/>
                <Contact></Contact>
            </motion.div>


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
    site {
      siteMetadata {
        title
      }
    }
  }
`;