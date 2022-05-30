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
import icon1 from "../images/icon1.svg"
import icon2 from "../images/icon2.svg"
import icon3 from "../images/icon3.svg"
import icon4 from "../images/icon4.svg"


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
                            {/*<h2 className="heading">Our not-so-secret plan: power the global <span>transition</span></h2>*/}
                            <FadeInWhenVisible delay={.4}>
                                <h2 className="heading">{ t('index.whoWeAre') }</h2>
                            </FadeInWhenVisible>
                        </div>
                        <div className="col-6@md">

                            <FadeInWhenVisible delay={.4}>
                                <h3><span>BBS Polska</span> – rodzinna firma wykonawcza z Elbląga, z kilkudziesięcioletnim doświadczeniem, specjalizująca się głównie w budownictwie przemysłowym t.j. hale produkcyjne, magazynowe, logistyczne ale również realizująca parki handlowe i mniejsze obiekty użyteczności publicznej.   </h3>
                            </FadeInWhenVisible>

                            <div className="grid gap-md margin-y-xxxl">
                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={0.3}>
                                        <p>
                                            Zachęcamy do kontaktu z nami już w momencie planu inwestycyjnego, samego pomysłu, idei! Wykorzystajmy naszą bogatą wiedzę już na etapie zakupu odpowiedniej działki pod inwestycję, a następnie w trakcie projektowania obiektu, doboru optymalnych rozwiązań i materiałów.
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
                                <h2 className="heading">Nasze główne atuty:</h2>
                            </FadeInWhenVisible>
                        </div>
                        <div className="col-6@md">
                            <FadeInWhenVisible delay={0.6}>
                                <h3>Dbałość o doskonałe relacje z inwestorem, wysoka jakość prac, estetyka obiektu, jego niepowtarzalność i fachowa wiedza, którą się dzielimy – to nas wyróżnia na rynku!</h3>
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
                            {/*<div className="grid padding-x-xl">*/}
                            {/*    <div className="col-8">*/}
                            {/*        <FadeInWhenVisible delay={.1}>*/}
                            {/*            <p className="paragraph-larger">Budujemy z myślą o kliencie oraz użytkownikach, którzy będą korzystać z wykonanych przez nas obiektów. </p>*/}
                            {/*        </FadeInWhenVisible>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <div className="grid gap-lg padding-x-xl padding-top-xxl margin-bottom-auto">
                                <div className="col-6@md ">
                                    <FadeInWhenVisible delay={.1}>
                                        {/*<h4>Usługi projektowe</h4>*/}
                                        <h4><Link to="/montaz-konstrukcji-stalowych" className="link link--arrow">Montaż konstrukcji stalowych</Link></h4>
                                        <p>Zapewniamy kompleksowy montaż konstrukcji stalowych i żelbetowych prefabrykowanych. Dysponujemy własnymi brygadami montażowymi z wieloletnim doświadczeniem.</p>
                                        {/*<p>Świadczymy usługi na wykonanie projektu budowlanego, wykonawczego, branżowego, rozwiązań indywidualnych.</p>*/}
                                    </FadeInWhenVisible>
                                </div>

                                <div className="col-6@md ">
                                    <FadeInWhenVisible delay={.1}>
                                        {/*<h4><Link to="/montaz-konstrukcji-stalowych" className="link link--arrow">Montaż konstrukcji stalowych</Link></h4>*/}
                                        <h4>Generalne wykonawstwo obiektów przemysłowych</h4>
                                        <p>Realizacja obiektów w formie Generalnego Wykonawstwa to priorytetowy obszar funkcjonowania i rozwoju firmy.</p>
                                        {/*<p>Zapewniamy kompleksowy montaż konstrukcji stalowych. Posiadamy własne brygady montażowe z wieloletnim doświadczeniem.</p>*/}
                                    </FadeInWhenVisible>
                                </div>

                                <div className="col-6@md margin-y-xl">
                                    <FadeInWhenVisible delay={.1}>
                                        {/*<h4>Prefabrykacja konstrukcji</h4>*/}
                                        <h4>Projektowanie</h4>
                                        <p>
                                            Optymalnie dobrane schematy statyczne, obliczenia w przestrzennym układzie prętowym – to klucz do sukcesu w projektowaniu.
                                        </p>
                                        {/*<p>Oferujemy dostawę konstrukcji stalowej obiektu, zgodnie z wydaną dokumentacją techniczną.</p>*/}
                                    </FadeInWhenVisible>
                                </div>

                                <div className="col-6@md margin-y-xl">
                                    <FadeInWhenVisible delay={.1}>
                                        {/*<h4>Dachy płaskie</h4>*/}
                                        <h4>Produkcja konstrukcji stalowych</h4>
                                        <p>Oferujemy produkcję konstrukcji stalowych różnego typu – kratownice, blachownice, elementy belkowe</p>
                                        {/*<p>Posiadamy wieloletnie doświadczenie w montażu dachów płaskich z technologii membran PVC.Posiadamy wieloletnie doświadczenie w montażu dachów płaskich z technologii membran PVC.</p>*/}
                                    </FadeInWhenVisible>
                                </div>

                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={.1}>
                                        {/*<h4>Usługi projektowe</h4>*/}
                                        <h4>Obudowy z płyt warstwowych , blach i kasetonów </h4>
                                        <p>Obudowa ścian z płyt warstwowych , układ poziomy czy pionowy , a może systemy elewacyjne z kasetonów ? – specjalizujemy się w wykonawstwie elewacji </p>
                                        {/*<p>Świadczymy usługi na wykonanie projektu budowlanego, wykonawczego, branżowego, rozwiązań indywidualnych.</p>*/}
                                    </FadeInWhenVisible>
                                </div>

                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={.1}>
                                        {/*<h4>Usługi projektowe</h4>*/}
                                        <h4>Dachy płaskie</h4>
                                        <p>Posiadamy wieloletnie doświadczenie w montażu dachów płaskich z technologii membran PVC.</p>
                                        {/*<p>Świadczymy usługi na wykonanie projektu budowlanego, wykonawczego, branżowego, rozwiązań indywidualnych.</p>*/}
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
                                <h2 className="heading">Jak pracujemy?</h2>
                            </FadeInWhenVisible>
                        </div>
                        <div className="col-6@md">

                            <FadeInWhenVisible delay={0.4}>
                                <h3>Zachęcamy do kontaktu z nami już w momencie planu inwestycyjnego, samego pomysłu, idei!</h3>
                            </FadeInWhenVisible>

                            <div className="grid gap-md margin-y-xl">
                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={0.5}>
                                        <p>Wykorzystajmy naszą bogatą wiedzę już na etapie zakupu odpowiedniej działki pod inwestycję, a następnie w trakcie projektowania obiektu, doboru optymalnych rozwiązań i materiałów. Faza projektowania jest kluczowa aby budowa przebiegała sprawnie i najważniejsze - w określonych ramach budżetowych. </p>
                                        <p>Zwracamy szczególną uwagę na bezpieczeństwo pracy naszych pracowników, firma wdraża i korzysta z dofinansowania ZUS na realizację projektu <span>„Poprawa bezpieczeństwa pracy na stanowisku montażysta hal w przedsiębiosrdtwie BBS Polska Spółka Z O.O.„</span></p>
                                    </FadeInWhenVisible>
                                </div>
                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={0.5}>
                                        <p>Współpracujemy z cenionymi na rynku biurami architektonicznymi i konstruktorami. Kolejny etap to budowa – prace ziemne, fundamentowanie, konstrukcja nośna prefabrykowana bądź stalowa, obudowa dachu i ścian, instalacje – wszystkie fazy budowy pod ścisłym nadzorem wykwalifikowanych inżynierów i kierownika budowy, aż do finału, czyli momentu oczekiwanego odbioru i przekazania na ręce Inwestora pozwolenia na użytkowanie. </p>
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
                                <h2 className="heading">Doświadczenie</h2>
                            </FadeInWhenVisible>
                        </div>
                        <div className="col-6@md">

                            <FadeInWhenVisible delay={0.4}>
                                <h3>Wszyscy pracownicy to ludzie z bogatym doświadczeniem, zaangażowani w pracę, związani z firmą od lat.</h3>
                            </FadeInWhenVisible>

                            <div className="grid gap-md margin-y-xl">
                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={0.5}>
                                        <p>W firmie mamy wydzielone odrębne brygady montażowe, które pracują na kilku obiektach w jednym czasie. Wszyscy pracownicy to ludzie z bogatym doświadczeniem, zaangażowani w pracę, związani z firmą od lat. Dysponujemy własnym sprzętem montażowym, co nas wyróżnia na rynku.</p>
                                    </FadeInWhenVisible>

                                    <FadeInWhenVisible delay={0.5}>
                                        <Link to="/realizacje" href="" className="btn btn--dark margin-top-xxl ">Nasze
                                            realizacje
                                        </Link>
                                    </FadeInWhenVisible>


                                </div>
                                <div className="col-6@md">
                                    <FadeInWhenVisible delay={0.5}>
                                        <p>Wszystko, co niezbędne do montażu pochodzi z naszych zasobów -  żuraw 30T Liebherr, ładowarka obrotowa Dieci, podnośniki nożycowe i przegubowe, szeroki wachlarz elektronarzędzi różnego typu, rozpoznawalne jednostki transportowe. Jesteśmy niezależni i samowystarczalni.  </p>
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