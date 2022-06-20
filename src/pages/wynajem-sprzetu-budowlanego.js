import * as React from "react"
import {graphql} from "gatsby"
import Seo from "../components/seo"
import HeroReversed from "../components/heroReversed";
import Contact from "../components/contact";
import sectionImage from "../images/deciPegasus.jpg"
import hero6 from "../images/bild1.jpg";
import TilesAbout from "../components/tilesAbout";
import ImagesScrolling from "../components/scrollEffect";
import {Link, useI18next, useTranslation} from 'gatsby-plugin-react-i18next';
import FadeInWhenVisible from "../components/fadeWhenVisible";

const EquipRental = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const Fragment = React.Fragment;
    const { t } = useTranslation();
    return (
        <>
            <Seo title="Wynajem sprzętu budowlanego Elbląg i okolice"
                 description="Wypożyczalnia sprzętu budowlanego Elbląg"/>

            <HeroReversed sectionImage={sectionImage}
                          title={<Fragment>{t('rental.hero.wantRent')}</Fragment>}
                          subTitle={<Fragment>{t('rental.hero.wantRentDesc')}</Fragment>}
            ></HeroReversed>

            <section className="container">
                <div className="grid gap-xxxl margin-top-xl">
                    <div className="col-6@md">
                        <FadeInWhenVisible delay={0.4}>
                            <h2 className="heading">{t('rental.rental')}</h2>
                        </FadeInWhenVisible>
                    </div>
                    <div className="col-6@md">
                        <FadeInWhenVisible delay={0.5}>
                            <h3 className="margin-bottom-md">{t('rental.rentalDesc')}</h3>
                        </FadeInWhenVisible>

                        <div className="grid gap-lg">
                            <div className="col-6@md margin-left-auto">
                                <FadeInWhenVisible delay={0.5}>
                                    <p>{t('rental.rentalDescOne')}</p>
                                </FadeInWhenVisible>
                                <br/>
                                <FadeInWhenVisible delay={0.5}>
                                    <p>{t('rental.rentalDescTwo')}</p>
                                </FadeInWhenVisible>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="teaser">
                    {/*<div className="col-6 teaser__left">*/}
                    <figure>
                        <ImagesScrolling scaleValue={1.3} pictureSrc={hero6} alt="BBS Polska"/>
                    </figure>
                    {/*</div>*/}

                    <div className="col-6 teaser__right ">
                        <h2 className="heading padding-xl">{ t('rental.machinePark.heading') }</h2>

                        <div className="grid gap-lg padding-x-xl padding-bottom-xl">
                            <div className="col-6@md margin-y-lg">
                                <h4>{ t('rental.machinePark.mobileCrane') }</h4>
                                <p>{ t('rental.machinePark.mobileCraneDesc') }</p>
                            </div>
                            <div className="col-6@md margin-y-lg">
                                <h4>{ t('rental.machinePark.swingLoader') }</h4>
                                <p>{ t('rental.machinePark.swingLoaderDesc') }</p>
                            </div>

                            <div className="col-6@md margin-y-lg">
                                <h4>{ t('rental.machinePark.scissorLift') }</h4>
                                <p>{ t('rental.machinePark.scissorLiftDesc') }</p>
                            </div>
                            <div className="col-6@md margin-y-lg">
                                <h4>{ t('rental.machinePark.articulatedBoomLift') }</h4>
                                <p>{ t('rental.machinePark.articulatedBoomLiftDesc') }</p>
                            </div>

                            <div className="col-6@md margin-0">
                                <Link to="/kontakt" className="btn margin-top-xl">{ t('rental.rental') }</Link>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <TilesAbout/>
            <Contact></Contact>
        </>
    );
}

export default EquipRental

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