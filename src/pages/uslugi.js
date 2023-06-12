import * as React from "react"
import {graphql} from "gatsby"
import {Link, useI18next, useTranslation} from 'gatsby-plugin-react-i18next';
import Seo from "../components/seo"
import HeroReversed from "../components/heroReversed";
import Contact from "../components/contact";
import hero6 from "../images/hero12.jpg";
import sectionImage from "../images/drone2.jpg"
import TilesAbout from "../components/tilesAbout";
import ImagesScrolling from "../components/scrollEffect";
import FadeInWhenVisible from "../components/fadeWhenVisible";
import teaserImg from "../images/hero12.jpg";

const Services = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const Fragment = React.Fragment;
    const { t } = useTranslation();
    return (
        <>
            <Seo title="Hale i konstrukcje stalowe "/>
            <HeroReversed sectionImage={sectionImage} title={<Fragment>{ t('services.hero.assembly') }</Fragment>}
                          subTitle={<Fragment>{ t('services.hero.assemblyDesc') }</Fragment>}>
            </HeroReversed>

            <section className="container">
                <div className="grid gap-xxxl margin-top-xl">
                    <div className="col-6@md">

                        <FadeInWhenVisible delay={0.4}>
                            <h2 className="heading">{ t('services.startProject') }</h2>
                        </FadeInWhenVisible>

                    </div>
                    <div className="col-6@md">
                        <FadeInWhenVisible delay={0.5}>
                            <h3 className="margin-bottom-md">{ t('services.startProjectDesc') }</h3>
                        </FadeInWhenVisible>

                        <div className="grid padding-xl ">
                            <div className="col-6@md margin-left-auto">
                                <FadeInWhenVisible delay={0.5}>
                                    <p>{ t('services.startProjectDescShort') }</p>
                                </FadeInWhenVisible>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-xxxl margin-bottom-xxl">
                    <div className="col-6@md">
                        <FadeInWhenVisible delay={0.4}>
                            <h2 className="heading">{ t('services.servicesMix') }</h2>
                        </FadeInWhenVisible>
                    </div>
                    <div className="col-6@md">
                        <div className="grid padding-xl ">
                            <div className="col-6@md margin-left-auto">
                                <FadeInWhenVisible delay={0.5}>
                                    <p>{ t('services.servicesMixDesc') }</p>
                                </FadeInWhenVisible>

                                <FadeInWhenVisible delay={0.5}>
                                    <Link to="/wynajem-sprzetu-budowlanego" className="btn btn--dark margin-top-xl">{ t('services.rentEquipment') }</Link>
                                </FadeInWhenVisible>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="teaser">
                    <figure>
                        <ImagesScrolling scaleValue={1.3} pictureSrc={teaserImg} alt="BBS Polska"/>
                    </figure>

                    <div className="col-6 teaser__right">
                        <h2 className="heading padding-x-xl padding-top-xl">
                            { t('index.services') }
                        </h2>

                        <div className="grid gap-lg padding-x-xl padding-top-xl margin-bottom-auto">
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
                                    <h4>
                                        <Link to="/produkcja-i-montaz-stolarki-aluminiowej" className="link link--arrow">{ t('index.aluminiumStructures') }</Link>
                                    </h4>
                                    <p>{ t('index.aluminiumStructuresDesc') }</p>
                                </FadeInWhenVisible>
                            </div>


                            <div className="col-6@md margin-y-xl">
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

                            <div className="col-6@md ">
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

                            {/*<div className="col-6@md">*/}
                            {/*    <FadeInWhenVisible delay={.1}>*/}
                            {/*        <h4>{ t('index.flatRoofs') }</h4>*/}
                            {/*        <p>{ t('index.flatRoofsDesc') }</p>*/}
                            {/*    </FadeInWhenVisible>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </section>

            <TilesAbout/>
            <Contact></Contact>
        </>
    )
}

export default Services

export const pageQuery = graphql`
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
`
