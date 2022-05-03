import * as React from "react"
import {graphql} from "gatsby"
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import Seo from "../components/seo"
import HeroReversed from "../components/heroReversed";
import Contact from "../components/contact";
import hero6 from "../images/hero12.jpg";
import sectionImage from "../images/drone2.jpg"
import TilesAbout from "../components/tilesAbout";
import ImagesScrolling from "../components/scrollEffect";
import FadeInWhenVisible from "../components/fadeWhenVisible";

const Services = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const Fragment = React.Fragment;

    return (
        <>
            <Seo title="Hale i konstrukcje stalowe "/>

            <HeroReversed sectionImage={sectionImage} title="Hale i konstrukcje stalowe "
                          subTitle="Budujemy z myślą o kliencie oraz użytkownikach, którzy będą korzystać z wykonanych przez nas obiektów. Doświadczenie, baza własnego sprzętu budowlanego oraz kompetentne brygady montażowe pozwalają nam zaoferować konkurencyjne ceny na wykonanie prac."></HeroReversed>

            <section className="container">
                <div className="grid gap-xxxl margin-top-xl">
                    <div className="col-6@md">
                        <h2 className="heading">Zacznij budowę z <span>BBS Polska</span></h2>
                    </div>
                    <div className="col-6@md">
                        <h3 className="margin-bottom-md">Realizujemy projekty na zlecenie klientów i dla nich tworzymy
                            spersonalizowane zabudowania. Projektowanie hal stalowych nie ma dla nas żadnych
                            tajemnic.
                        </h3>

                        <div className="grid padding-xl ">
                            <div className="col-6@md margin-left-auto">
                                <p>Wyróżnia nas bardzo szybka dostawa sprzętu na budowę, pełne wsparcie techniczne
                                    klienta oraz proste warunki współpracy. Współpracujemy zarówno z dużymi firmami
                                    deweloperskimi jak i klientami indywidualnymi.</p>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-xxxl margin-bottom-xxl">
                    <div className="col-6@md">
                        <h2 className="heading">Usługi konstrukcyjne, archiktoniczne, branżowe.</h2>
                    </div>
                    <div className="col-6@md">
                        <div className="grid padding-xl ">
                            <div className="col-6@md margin-left-auto">
                                <p>W ramach działalności spółki, świadczymy usługi sprzętowe na terenie miasta Elbląg
                                    oraz okolic. Do dyspozycji mamy żuraw samojezdny, podnośniki spalinowe samojezdne
                                    przegubowe, nożycowe, ładowarkę obrotową. </p>
                                <br/>
                                <Link to="/wynajem-sprzetu-budowlanego" className="btn btn--dark margin-top-xl">Wynajem
                                    sprzętu</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="teaser">
                    <figure>
                        <ImagesScrolling scaleValue={1.2} pictureSrc={hero6} alt="BBS Polska"/>
                    </figure>

                    <div className="col-6 teaser__right ">
                        <h2 className="heading padding-xl">
                            Oferowane uslugi
                        </h2>

                        <div className="grid gap-lg padding-x-xl padding-bottom-xl">
                            <div className="col-6@md margin-y-md">
                                <h4>Usługi projektowe</h4>
                                <p>Świadczymy usługi na wykonanie projektu budowlanego, wykonawczego, branżowego,
                                    rozwiązań indywidualnych.</p>
                            </div>
                            <div className="col-6@md margin-y-md">
                                <h4>Prefabrykacja konstrukcji</h4>
                                <p>Oferujemy dostawę konstrukcji stalowej obiektu, zgodnie z wydaną dokumentacją
                                    techniczną.</p>
                            </div>

                            <div className="col-6@md margin-y-md">
                                <h4>Montaż konstrukcji</h4>
                                <p>Zapewniamy kompleksowy montaż konstrukcji stalowych. Posiadamy własne brygady
                                    montażowe z wieloletnim doświadczeniem.</p>
                            </div>
                            <div className="col-6@md margin-y-md">
                                <h4>Nadzór Inwestycyjne</h4>
                                <p>Świadczymy usługi indywidualne związane z nadzorem technicznym oraz kontrolą budżetu
                                    budowanych obiektów. </p>
                            </div>

                            <div className="col-6@md margin-y-md">
                                <h4>Dachy płaskie</h4>
                                <p>Posiadamy wieloletnie doświadczenie w montażu dachów płaskich z technologii membran
                                    PVC.Posiadamy wieloletnie doświadczenie w montażu dachów płaskich z technologii
                                    membran PVC.</p>
                            </div>
                            <div className="col-6@md margin-y-md">
                                <h4>Przeglądy okresowe</h4>
                                <p>Wykonujemy przeglądy okresowe obiektów budowlanych - zgodnie z wymaganiami i
                                    obowiązującymi przepisami.</p>
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
