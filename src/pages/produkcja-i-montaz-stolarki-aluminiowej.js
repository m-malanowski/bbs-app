import * as React from "react"
import {Link, graphql} from "gatsby"
import Seo from "../components/seo"
import HeroReversed from "../components/heroReversed";
import Contact from "../components/contact";
import sectionImage from "../images/aluminium1.jpg"
import hero6 from "../images/aluminium2.jpg";
import ImagesScrolling from "../components/scrollEffect";
import TilesAbout from "../components/tilesAbout";

const Services = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const Fragment = React.Fragment;

    return (
        <>
            <Seo title="Produkcja i montaż stolarki aluminiowej Elbląg" description="Produkcja i montaż stolarki aluminiowej"/>

            <HeroReversed sectionImage={sectionImage}
                          title="Produkcja i montaż stolarki aluminiowej"
                          subTitle={<Fragment>Jeśli szukasz solidnego partnera do produkcji i montażu stolarki aluminiowej, to jesteś we właściwym miejscu. Skontaktuj się z nami, aby omówić swoje projekty i uzyskać profesjonalne doradztwo. Razem możemy stworzyć innowacyjne i funkcjonalne rozwiązania, które spełnią Twoje oczekiwania.</Fragment>}
            ></HeroReversed>

            <section className="container">
                <div className="grid gap-xxxl margin-top-xl">
                    <div className="col-6@md">
                        <h2 className="heading">Nie tylko estetyką</h2>
                    </div>
                    <div className="col-6@md">
                        <div className="grid  gap-lg">
                            <div className="col-6@md ">
                                <p>Nasze produkty wyróżniają się nie tylko estetyką, ale również doskonałą jakością i trwałością. Korzystamy z najlepszych materiałów dostępnych na rynku, które gwarantują niezawodność i długotrwałość naszych wyrobów. </p>
                                <br/>
                            </div>
                            <div className="col-6@md ">
                                <p> Nasze stolarka aluminiowa doskonale sprawdza się zarówno w budynkach mieszkalnych, jak i komercyjnych, zapewniając izolację termiczną i akustyczną oraz podnosząc wartość nieruchomości.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-xxxl margin-top-xxxxl">
                    <div className="col-6@md">
                        <h2 className="heading">Solidny partner</h2>
                    </div>
                    <div className="col-6@md">
                        <div className="grid  gap-lg">
                            <div className="col-6@md ">
                                <p>Jeśli szukasz solidnego partnera do produkcji i montażu stolarki aluminiowej, to jesteś we właściwym miejscu. Skontaktuj się z nami, aby omówić swoje projekty i uzyskać profesjonalne doradztwo.</p>
                                <br/>
                            </div>
                            <div className="col-6@md ">
                                <p>Zaufaj naszej firmie, a dostaniesz nie tylko wysokiej jakości produkty, ale także kompleksowe wsparcie i profesjonalną obsługę. Skontaktuj się z nami już dziś, aby omówić swoje potrzeby i otrzymać indywidualną wycenę. Jesteśmy gotowi do podjęcia wyzwań i realizacji Twoich projektów stolarki aluminiowej.</p>
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
                        <h2 className="heading padding-xl">Oto niektóre z naszych głównych usług:</h2>

                        <div className="grid gap-lg padding-x-xl padding-bottom-xl">
                            <div className="col-6@md margin-y-lg">
                                <h4>Produkcja okien aluminiowych:</h4>
                                <p>Tworzymy nowoczesne i funkcjonalne okna aluminiowe, które zapewniają doskonałą izolację termiczną i akustyczną. Nasze okna są energooszczędne, łatwe w utrzymaniu czystości i dostępne w różnych rozmiarach i wzorach.</p>
                            </div>
                            <div className="col-6@md margin-y-lg">
                                <h4>Produkcja drzwi aluminiowych</h4>
                                <p>Oferujemy szeroki wybór drzwi aluminiowych, w tym drzwi wejściowe, przesuwne, harmonijkowe oraz przeciwpożarowe. Nasze drzwi charakteryzują się solidną konstrukcją, estetyką i bezpieczeństwem.</p>
                            </div>

                            <div className="col-6@md margin-y-lg">
                                <h4>Produkcja fasad aluminiowych</h4>
                                <p>Realizujemy projekty fasad aluminiowych dla budynków komercyjnych, biurowców, obiektów użyteczności publicznej i wielu innych. Nasze fasady zapewniają nie tylko estetyczny wygląd, ale również doskonałą izolację termiczną i ochronę przed czynnikami atmosferycznymi.</p>
                            </div>
                            <div className="col-6@md margin-y-lg">
                                <h4>Montaż balustrad aluminiowych</h4>
                                <p>Projektujemy i montujemy balustrady aluminiowe, które nadają wnętrzom i zewnętrzom elegancji i bezpieczeństwa. Nasze balustrady są wytrzymałe, łatwe w konserwacji i mogą być dostosowane do różnych stylów architektonicznych.</p>
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
