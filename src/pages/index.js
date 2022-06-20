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
import CompaniesSlider from "../components/companiesSlider";

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
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const { t } = useTranslation();
    return (
        <>
            <Seo
                title="Montaż konstrukcji stalowych Elbląg"
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
                            <FadeInWhenVisible delay={.4}>
                                <h2 className="heading">{ t('index.whoWeAre') }</h2>
                            </FadeInWhenVisible>
                        </div>
                        <div className="col-6@md">

                            <FadeInWhenVisible delay={.4}>
                                <h3>{ t('index.whoWeAreDesc') }</h3>
                            </FadeInWhenVisible>

                            <div className="grid gap-md margin-y-xxxl">
                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={0.3}>
                                        <p>{ t('index.whoWeAreDescShorterOne') }</p>
                                    </FadeInWhenVisible>

                                </div>
                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={0.35}>
                                        <p>{ t('index.whoWeAreDescShorterTwo') }</p>
                                    </FadeInWhenVisible>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-xxxl@md margin-bottom-xxl">
                        <div className="col-6@md">
                            <FadeInWhenVisible delay={0.3}>
                                <h2 className="heading">{ t('index.advantages') }</h2>
                            </FadeInWhenVisible>
                        </div>
                        <div className="col-6@md">
                            <FadeInWhenVisible delay={0.6}>
                                <h3>{ t('index.advantagesDesc') }</h3>
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
                                { t('index.services') }
                            </h2>

                            <div className="grid gap-lg padding-x-xl padding-top-xxl margin-bottom-auto">
                                <div className="col-6@md ">
                                    <FadeInWhenVisible delay={.1}>
                                        <h4>
                                            <Link to="/montaz-konstrukcji-stalowych" className="link link--arrow">{ t('index.steelStructures') }</Link>
                                        </h4>
                                        <p>{ t('index.steelStructuresDesc') }</p>
                                    </FadeInWhenVisible>
                                </div>

                                <div className="col-6@md ">
                                    <FadeInWhenVisible delay={.1}>
                                        <h4>{ t('index.industrialFacilities') }</h4>
                                        <p>{ t('index.industrialFacilitiesDesc') }</p>
                                    </FadeInWhenVisible>
                                </div>

                                <div className="col-6@md margin-y-xl">
                                    <FadeInWhenVisible delay={.1}>
                                        <h4>{ t('index.engineer') }</h4>
                                        <p>{ t('index.engineerDesc') }</p>
                                    </FadeInWhenVisible>
                                </div>

                                <div className="col-6@md margin-y-xl">
                                    <FadeInWhenVisible delay={.1}>
                                        <h4>{ t('index.steelStructuresProduction') }</h4>
                                        <p>{ t('index.steelStructuresProductionDesc') }</p>
                                    </FadeInWhenVisible>
                                </div>

                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={.1}>
                                        <h4>{ t('index.sandwichPanels') }</h4>
                                        <p>{ t('index.sandwichPanelsDesc') }</p>
                                    </FadeInWhenVisible>
                                </div>

                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={.1}>
                                        <h4>{ t('index.flatRoofs') }</h4>
                                        <p>{ t('index.flatRoofsDesc') }</p>
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
                                <h2 className="heading">{ t('index.howWeWork') }</h2>
                            </FadeInWhenVisible>
                        </div>
                        <div className="col-6@md">

                            <FadeInWhenVisible delay={0.4}>
                                <h3>{ t('index.contactEncourage') }</h3>
                            </FadeInWhenVisible>

                            <div className="grid gap-md margin-y-xl">
                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={0.5}>
                                        <p>{ t('index.howWeWorkDescOne') }</p>
                                    </FadeInWhenVisible>
                                </div>
                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={0.5}>
                                        <p>{ t('index.howWeWorkDescTwo') }</p>
                                    </FadeInWhenVisible>
                                </div>
                            </div>

                            {/*<CompaniesSlider></CompaniesSlider>*/}

                        </div>
                    </div>
                </section>

                <section className="container">
                    <div className="grid gap-xxxl@md margin-top-xl">
                        <div className="col-6@md">
                            <FadeInWhenVisible delay={.1}>
                                <h2 className="heading">{ t('index.experience') }</h2>
                            </FadeInWhenVisible>

                        </div>
                        <div className="col-6@md">

                            <FadeInWhenVisible delay={0.4}>
                                <h3>{ t('index.ourEmployees') }</h3>
                            </FadeInWhenVisible>

                            <div className="grid gap-md margin-y-xl">
                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={0.5}>
                                        <p>{ t('index.experienceOne') }</p>
                                    </FadeInWhenVisible>

                                    <FadeInWhenVisible delay={0.5}>
                                        <Link to="/realizacje" href="" className="btn btn--dark margin-top-xxl ">{ t('index.projects') }</Link>
                                    </FadeInWhenVisible>

                                </div>
                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={0.5}>
                                        <p>{ t('index.experienceTwo') }</p>
                                    </FadeInWhenVisible>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CompaniesSlider></CompaniesSlider>

                <section className="bild">
                    <figure>
                        <ImagesScrolling scaleValue={1.3} pictureSrc={bildIndex} alt="BBS Polska"/>
                    </figure>
                    <div className="bild__tile bild__tile--services">
                        <h2 className="bild__title ">{ t('index.yearsOfExperience') }</h2>
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