import * as React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import hero6 from "../images/hero7.jpg";
import {Helmet} from "react-helmet";
import Contact from "../components/contact";
import {Image} from "../components/image";

const ContactPage = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <>
            {/*<Layout location={location} title={siteTitle}>*/}
                <Seo title="Konakt"/>
                <Helmet bodyAttributes={{
                    id: "contact-page"
                }} />

                <div className="contact-page">
                    <section className="container">
                        <div className="grid gap-xxxl margin-top-xxxl margin-bottom-0">
                            <div className="col-6@md">
                                <h3>Projekty i budowa hal stalowych to nasza codzienność, a na naszą korzyść przemawia doświadczenie i opinie zadowolonych klientów. </h3>

                                <div className="grid gap-xxxl margin-bottom-xxl">
                                    <div className="col-6@md">
                                        <p> Od ponad <span>20 lat</span> z powodzeniem realizujemy takie przedsięwzięcia jak: </p>

                                        <ul className="margin-top-md">
                                            <li>- projektowanie hal przemysłowych i magazynowych,</li>
                                            <li>– budowa obiektów przemysłowych, </li>
                                            <li>- montaż hal stalowych. </li>
                                        </ul>
                                    </div>
                                    <div className="col-6@md">
                                        <p>Zapraszamy do zapoznania się z naszymy realizacjami na terenie Polski i nie tylko. </p>
                                    </div>
                                    {/*<div className="col-12@md">*/}
                                    {/*    <ul>*/}
                                    {/*        <li>projektowanie hal przemysłowych i magazynowych,</li>*/}
                                    {/*        <li>budowa obiektów przemysłowych – budowa hal magazynowych, produkcyjnych, przemysłowych, stalowych, </li>*/}
                                    {/*        <li>montaż hal stalowych. </li>*/}
                                    {/*    </ul>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container">

                        <div className="filter margin-bottom-xl">
                            <Link to="/kontakt" className="btn btn--xs margin-top-xl margin-top-auto">Wszystkie</Link>
                            <Link to="/kontakt" className="btn btn--xs margin-top-xl margin-top-auto">Hale magazynowe</Link>
                            <Link to="/kontakt" className="btn btn--xs margin-top-xl margin-top-auto">Hale produkcyjne</Link>
                            <Link to="/kontakt" className="btn btn--xs margin-top-xl margin-top-auto">Projekty indywidualne</Link>
                            <Link to="/kontakt" className="btn btn--xs margin-top-xl margin-top-auto">Nadzór inwestycji</Link>
                        </div>


                        <div className="projects-wrapper">
                            {/*<div className="project">*/}
                            {/*    <img src={hero6} alt="" className="project__image responsive"/>*/}
                            {/*</div>*/}
                            {/*<div className="project">*/}
                            {/*    <img src={hero6} alt="" className="project__image responsive"/>*/}
                            {/*</div>*/}
                            {/*<div className="project">*/}
                            {/*    <img src={hero6} alt="" className="project__image responsive"/>*/}
                            {/*</div>*/}
                            {/*<div className="project">*/}
                            {/*    <img src={hero6} alt="" className="project__image responsive"/>*/}
                            {/*</div>*/}
                            {/*<div className="project">*/}
                            {/*    <img src={hero6} alt="" className="project__image responsive"/>*/}
                            {/*</div>*/}
                            {/*<div className="project">*/}
                            {/*    <img src={hero6} alt="" className="project__image responsive"/>*/}
                            {/*</div>*/}

                            <Image></Image>

                        </div>
                    </section>

                </div>
            {/*<Contact></Contact>*/}

            {/*</Layout>*/}
        </>
    )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
