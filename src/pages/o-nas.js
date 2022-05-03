import * as React from "react"
import { graphql} from "gatsby"
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
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

    return (
        <>
            <Seo title="Projekty i budowa Hal Stalowych"/>

            <HeroReversed sectionImage={sectionImage}
                          title={<Fragment> Zacznij budowę z <br/> <span>BBS Polska </span></Fragment>}
                          subTitle="Budujemy z myślą o kliencie oraz użytkownikach, którzy będą korzystać z wykonanych przez nas obiektów. Doświadczenie, baza własnego sprzętu budowlanego oraz kompetentne brygady montażowe pozwalają nam zaoferować konkurencyjne ceny na wykonanie prac."></HeroReversed>

            <section className="container">
                <div className="grid gap-xxxl margin-top-xl">
                    <div className="col-6@md">
                        <FadeInWhenVisible delay={0.4}>
                            <h2 className="heading">Hale stalowe na miarę potrzeb Klienta</h2>
                        </FadeInWhenVisible>
                    </div>
                    <div className="col-6@md">
                        <FadeInWhenVisible delay={0.5}>
                            <p className="margin-bottom-md">W <span>BBS</span> Polska projektujemy, produkujemy i montujemy
                                wielofunkcyjne hale stalowe dla szerokiego zakresu celów i branż. Nasza koncepcja dla hal
                                stalowych jest powszechnie uznawana za sprawną i trwałą konstrukcję o wysokiej jakości z
                                możliwością dostosowania do różnych potrzeb i wymagań. </p>
                        </FadeInWhenVisible>

                        {/*<div className="grid gap-md margin-y-xl">*/}
                        {/*    <div className="col-6">Skateboard hammock quinoa disrupt meggings 90's tumblr tilde distillery.</div>*/}
                        {/*    <div className="col-6">Dreamcatcher put a bird on it ennui street art normcore you probably haven't heard of them. Iceland direct trade cardigan authentic kogi. Disrupt kombucha poutine lo-fi edison bulb prism migas literally green juice bicycle rights. </div>*/}
                        {/*</div>*/}
                        <FadeInWhenVisible delay={0.6}>
                            <h2 className="heading--gray padding-y-xxxl">Projekty i budowa Hal Stalowych Ambitne pomysły i
                                rzetelna realizacja</h2>
                        </FadeInWhenVisible>

                    </div>
                </div>
                <div className="grid grid gap-xxxl">
                    <div className="col-6@md">

                        <FadeInWhenVisible delay={0.4}>
                            <h2 className="heading">Nasza dewiza</h2>
                        </FadeInWhenVisible>

                    </div>
                    <div className="col-6@md">

                        <FadeInWhenVisible delay={0.5}>
                            <h3>Firma <span>BBS</span> Polska powstała jako naturalna konsekwencja wieloletniej działalności
                                na polskim i europejskim rynku.</h3>
                        </FadeInWhenVisible>

                        <div className="grid grid gap-xxxl margin-bottom-xxl">
                            <div className="col-6@md">
                                <FadeInWhenVisible delay={0.6}>
                                    <p> Jako producent konstrukcji stalowych z 20 letnim doświadczeniem w realizacji
                                        inwestycji, połączyliśmy nowoczesną wizję firmy skierowanej na klienta, z
                                        tradycyjnym kształtem przedsiębiorstwa produkcyjnego.
                                        Funkcjonowanie w takim modelu umożliwia nam oferowanie usług dużo bardziej
                                        indywidualnych, dopasowanych w pierwszej kolejności do potrzeb inwestorów. To
                                        sprawia, że jesteśmy godnym zaufania partnerem w inwestycjach budowlanych.
                                    </p>
                                </FadeInWhenVisible>
                                {/*<br/>*/}
                                {/*<Link to="/realizacje" href="" className="btn btn--dark margin-top-xxl ">Nasze*/}
                                {/*    realizacje*/}
                                {/*</Link>*/}
                            </div>
                            <div className="col-6@md">
                                <FadeInWhenVisible delay={0.6}>
                                    <p>Nasze realizacje to zarówno niewielkie obiekty spełniające potrzeby małych i średnich
                                        przedsiębiorców, jak i duże magazyny i zakłady produkcyjne. Dzięki własnej wytwórni
                                        i zatrudnionym specjalistom jesteśmy w stanie realizować nawet najbardziej ambitne
                                        projekty.</p>
                                </FadeInWhenVisible>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bild bild--services">
                <figure>
                    {/*<img src={bildAbout} alt="BBS"/>*/}
                    <ImagesScrolling scaleValue={1.3} pictureSrc={bildAbout} alt="BBS Polska"/>
                </figure>
                <div className="bild__tile bild__tile--services">
                    <h2 className="bild__title "><span>B</span>est <br/> <span>B</span>uilding <br/> <span>S</span>olutions
                    </h2>
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
