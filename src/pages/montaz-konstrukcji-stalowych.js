import * as React from "react"
import {Link, graphql} from "gatsby"
import Seo from "../components/seo"
import HeroReversed from "../components/heroReversed";
import Contact from "../components/contact";
import sectionImage from "../images/hero16.jpg"
import hero6 from "../images/hero12.jpg";
import ImagesScrolling from "../components/scrollEffect";
import TilesAbout from "../components/tilesAbout";

const Services = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const Fragment = React.Fragment;

    return (
        <>
            <Seo title="Konstrukcje Stalowe, Montaż Konstrukcji Stalowych Elbląg" description="Montaż Konstrukcji Stalowych Elbląg - Projekty Konstrukcjyjne"/>

            <HeroReversed sectionImage={sectionImage}
                          title="Montaż Konstrukcji Stalowych"
                          subTitle={<Fragment> Naszą specjalizacją jest projektowanie, wykonywanie i montaż konstrukcji stalowych. Zlecając nam stworzenie konstrukcji stalowej w Krakowie, masz pewność, że wszystkie etapy budowy zostaną wykonane w terminie, z gwarancją bezpieczeństwa, solidności i wytrzymałości.  </Fragment>}
            ></HeroReversed>

            <section className="container">
                <div className="grid gap-xxxl margin-top-xl">
                    <div className="col-6@md">
                        <h2 className="heading">Dlaczego warto wybrać halę stalową?</h2>
                    </div>
                    <div className="col-6@md">
                        <div className="grid  gap-lg">
                            <div className="col-6@md ">
                                <p>Nie każdy wie, do czego może służyć hala stalowa. Typowe zastosowania to tworzenie przestrzeni produkcyjnych czy magazynowych, ale nie tylko. Można też spotkać hale stalowe do celów logistycznych, targowych czy handlowych.</p>
                                <br/>
                            </div>
                            <div className="col-6@md ">
                                <p>Nie bez powodu hale stalowe znajdują szerokie zastosowanie w różnych gałęziach przemysłu. Wyróżnia je odporność na żywioły, a także wysoka trwałość. Po wybudowaniu hala może być użytkowana przez wiele lat bez żadnych problemów, o ile do jej budowy zostanie wynajęta odpowiednia firma, a użyte materiały są najwyższej jakości i zostały zatwierdzone.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-xxxl margin-top-xxxxl">
                    <div className="col-6@md">
                        <h2 className="heading">Jakie zalety ma hala stalowa?</h2>
                    </div>
                    <div className="col-6@md">
                        <div className="grid  gap-lg">
                            <div className="col-6@md ">
                                <p><span>Krótki czas budowy.</span> Im szybciej skończysz budować pomieszczenie, tym szybciej będziesz mógł zacząć z niego korzystać. Budowa pokoju w motelu to ogromny wydatek, kiedy zdecydujesz się go zbudować, lepiej zrozumiesz, jakie korzyści przyniesie Ci nowy pokój w motelu. Niezależnie od tego, czy zamierzasz wynająć halę, czy zwiększyć produkcję, każdy dzień przybliża Cię do zwiększania zysków fabryki.</p>
                                <br/>
                            </div>
                            <div className="col-6@md ">
                                <p><span>Niskie koszty budowy.</span>  koszt budowy „gotowej” hali stalowej z fundamentów, podłóg, stali konstrukcyjnej, lekkiej obudowy, mebli waha się od 900 do 1500 zł za  metr kwadratowy powierzchni użytkowej. W przypadku hal murowanych koszt ten wzrasta o  30% do 50%. W przypadku hali o powierzchni około 1000 m2 koszt budowy hali murowanej przewyższa koszt budowy hali stalowej o około 300 000 zł netto do 700 000 zł netto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="teaser">
                    <figure>
                        <ImagesScrolling scaleValue={1.3} pictureSrc={hero6} alt="BBS Polska"/>
                    </figure>

                    <div className="col-6 teaser__right">
                        <h2 className="heading padding-xl">
                            Jak przebiega budowa hali produkcyjnej:
                        </h2>

                        <div className="grid gap-lg padding-x-xl padding-bottom-xl">
                            <div className="col-6@md margin-y-lg">
                                <h4>KONCEPCJA</h4>
                                <p>Planujemy technologię
                                    Ustalamy układ funkcjonalny
                                    Testujemy nośność
                                    Wstępnie optymalizujemy halę
                                    Dobieramy materiał
                                    Tworzymy modele 3D obiektu</p>
                            </div>
                            <div className="col-6@md margin-y-lg">
                                <h4>PROJEKT</h4>
                                <p>Realizujemy projekty przemysłowe
                                    Optymalizujemy konstrukcje
                                    Koordynujemy technologów
                                    Współpracujemy z urzędami
                                    Ubiegamy się o pozwolenia
                                   </p>
                            </div>

                            <div className="col-6@md margin-y-lg">
                                <h4>REALIZACJA</h4>
                                <p>Organizujemy plac budowy
                                    Wykonujemy roboty ziemne i fundamentowe
                                    Montujemy konstrukcję hali
                                    Montujemy konstrukcję biurowca
                                    Montujemy dach i ściany
                                    Montujemy stawiamy bramy i okna</p>
                            </div>
                            <div className="col-6@md margin-y-lg">
                                <h4>WSPARCIE</h4>
                                <p>Łączymy obiekty
                                    Wzmacniamy konstrukcje
                                    Uszczelniamy i zabezpieczamy
                                    Rozbudowujemy obiekty
                                    Przerabiamy hale
                                    Naprawiamy usterki</p>
                            </div>

                            <div className="col-6@md margin-0">
                                <Link to="/realizacje" className="btn margin-top-xl">Sprawdź nasze realizacje</Link>
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