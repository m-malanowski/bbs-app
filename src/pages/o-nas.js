import * as React from "react"
import {graphql} from "gatsby"
import {Link, useI18next, useTranslation} from 'gatsby-plugin-react-i18next';
import Seo from "../components/seo"
import HeroReversed from "../components/heroReversed";
import Contact from "../components/contact";
import TilesAbout from "../components/tilesAbout";
import sectionImage from '../images/drone1.jpg'
import bildAbout from "../images/bild4.jpg"
import ImagesScrolling from "../components/scrollEffect";
import FadeInWhenVisible from "../components/fadeWhenVisible";

const About = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const Fragment = React.Fragment;
    const { t } = useTranslation();
    return (
        <>
            <Seo title="Projekty i budowa Hal Stalowych"/>

            <HeroReversed sectionImage={sectionImage}
                          title={<Fragment>{ t('about.hero.startProject') }<span>BBS Polska</span> </Fragment>}
                          subTitle={<Fragment>{ t('about.hero.startProjectDesc') } </Fragment>}
            >
            </HeroReversed>

            <section className="container">
                <div className="grid gap-xxxl margin-top-xl">
                    <div className="col-6@md">
                        <FadeInWhenVisible delay={0.4}>
                            <h2 className="heading">{ t('about.customerNeeds') }</h2>
                        </FadeInWhenVisible>
                    </div>
                    <div className="col-6@md">
                        <FadeInWhenVisible delay={0.5}>
                            <p className="margin-bottom-md">{ t('about.customerNeedsDescOne') }</p>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={0.6}>
                            <h2 className="heading--gray padding-y-xxxl">{ t('about.customerNeedsDescTwo') }</h2>
                        </FadeInWhenVisible>

                    </div>
                </div>
                <div className="grid grid gap-xxxl">
                    <div className="col-6@md">

                        <FadeInWhenVisible delay={0.4}>
                            <h2 className="heading">{ t('about.motto') }</h2>
                        </FadeInWhenVisible>

                    </div>
                    <div className="col-6@md">

                        <FadeInWhenVisible delay={0.5}>
                            <h3>{ t('about.mottoDesc') }</h3>
                        </FadeInWhenVisible>

                        <div className="grid grid gap-xxxl margin-bottom-xxl">
                            <div className="col-6@md">
                                <FadeInWhenVisible delay={0.6}>
                                    <p>{ t('about.mottoDescOne') }</p>
                                </FadeInWhenVisible>

                            </div>
                            <div className="col-6@md">
                                <FadeInWhenVisible delay={0.7}>
                                    <p>{ t('about.mottoDescTwo') }</p>
                                </FadeInWhenVisible>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bild bild--services">
                <figure>
                    <ImagesScrolling scaleValue={1.3} pictureSrc={bildAbout} alt="BBS Polska"/>
                </figure>
                <div className="bild__tile bild__tile--services">
                    <h2 className="bild__title ">{ t('index.yearsOfExperience') }</h2>
                    <div className="bild__line"></div>
                </div>
            </section>

            <TilesAbout/>

            <Contact></Contact>

        </>
    )
}

export default About

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
