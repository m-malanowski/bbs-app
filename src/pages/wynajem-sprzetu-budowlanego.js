import * as React from "react"
import {graphql} from "gatsby"
import Seo from "../components/seo"
import HeroReversed from "../components/heroReversed";
import Contact from "../components/contact";
import sectionImage from "../images/deciPegasus.jpg"
import hero6 from "../images/bild1.jpg";
import TilesAbout from "../components/tilesAbout";
import ImagesScrolling from "../components/scrollEffect";
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import FadeInWhenVisible from "../components/fadeWhenVisible";

const Services = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const Fragment = React.Fragment;

    return (
        <>
            <Seo title="Wynajem sprzętu budowlanego Elbląg i okolice"
                 description="Wypożyczalnia sprzętu budowlanego Elbląg"/>

            <HeroReversed sectionImage={sectionImage}
                          title="Potrzebujesz  sprzętu budowlanego?"
                          subTitle={<Fragment> Nie musisz od razu kupować potrzebnego Ci sprzętu budowlanego!
                              Wynajmij go w <span>BBS </span>Polska Dysponujemy własnym sprzętem budowlanym. Zachęcamy
                              do zapoznania się z naszą ofertą. </Fragment>}
            ></HeroReversed>

            <section className="container">
                <div className="grid gap-xxxl margin-top-xl">
                    <div className="col-6@md">
                        <FadeInWhenVisible delay={0.4}>
                            <h2 className="heading">Wynajem sprzętu budowlanego</h2>
                        </FadeInWhenVisible>
                    </div>
                    <div className="col-6@md">
                        <FadeInWhenVisible delay={0.5}>
                            <h3 className="margin-bottom-md">Dysponujemy rozbudowanym parkiem maszynowym wyposażonym w
                                urządzenia oraz sprzęt ciężki niezbędny do profesjonalnego wykonywania wszelkich prac
                                budowlanych i konstrukcyjnych:</h3>
                        </FadeInWhenVisible>

                        <div className="grid  gap-lg">
                            <div className="col-6@md ">
                                <FadeInWhenVisible delay={0.5}>
                                    <p> Zachęcamy do zapoznania się z naszą ofertą. Wynajmowany sprzęt, posiada
                                        wszsytkie niezbędne dokumenty dopuszczenia do eksploatacji, w tym aktualny
                                        przeglądy techniczne oraz aktualne badania UDT.</p>
                                </FadeInWhenVisible>

                            </div>
                            <div className="col-6@md ">
                                <FadeInWhenVisible delay={0.5}>
                                    <p>Zapewniamy wynajem sprzętów budowlanych wraz z operatorem. Każdy z operatorów
                                        posiada aktualne badania BHiP, badania lekarskie oraz uprawnienia do prawodzenia
                                        prac. Ceny wynajmu sprzętu podlegają negocjacji.</p>
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
                        <h2 className="heading padding-xl">
                            Nasz Park maszynowy
                        </h2>

                        <div className="grid gap-lg padding-x-xl padding-bottom-xl">
                            <div className="col-6@md margin-y-lg">
                                <h4>Usługi żurawiem samojezdnym</h4>
                                <p>Świadczymy usługi żurawiem samojezdnym marki Liebherr 35 ton. Żuraw na wyposażaniu
                                    posiada dodatkowy wspornik, zwiększający zasięg prac do 45m. Maszyna terenowa o
                                    dwóch osiach skrętnych, zapewnia dojazd w trudnych warunkach terenowych.</p>
                            </div>
                            <div className="col-6@md margin-y-lg">
                                <h4>Usługi ładowarka obrotową samojezdną</h4>
                                <p>Ładowarka obrotowa marki DIECI z dodatkowym wysięgnikiem, zapewnia zakres pracy
                                    sprzętu do 25m. Udźwig maszyny do 4,5 tony. Maszyna terenowa, samojezdna z
                                    możliwością obrotu wokół własnej osi.</p>
                            </div>

                            <div className="col-6@md margin-y-lg">
                                <h4>Podnośnik nożycowy, spalinowy lub elektryczny</h4>
                                <p>Posiadamy podnośnik nożycowy spalinowe GENIE 5539RT. Maszyna charakteryzuje się
                                    możliwością pracy na wysokości roboczej 20m ponad poziom terenu. Funkcjonalny
                                    balkon, zapewnia zasięg pracy na wysokości do 7m!
                                    Dla klientów poszukujących podnośnika nożycowego elektrycznego, posiadamy maszynę
                                    firmę JLG o wysięgu pracy 12m.</p>
                            </div>
                            <div className="col-6@md margin-y-lg">
                                <h4>Podnośniki przegubowe spalinowe</h4>
                                <p>Posiadamy podnośniki marki HAULOTTE, GENIE o wysięgu roboczym do 18m. Udźwig roboczy
                                    kosza transportowego, do 235KG. Możliwość obrotu kosza roboczego do 270 stopni. </p>
                            </div>

                            <div className="col-6@md margin-0">
                                <Link to="/kontakt" className="btn margin-top-xl">Wynajmij sprzęt</Link>
                            </div>

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