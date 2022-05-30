import * as React from "react"
import contactImage from "../images/conect2.jpg"
// import {Link} from "gatsby";
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import FadeInWhenVisible from "./fadeWhenVisible";
import ImagesScrolling from "./scrollEffect";


const Contact = () => {
    return(
        <section className="contact">
            <div className="grid">
                <div className="col-6@md contact__left">
                    <div className="padding-xl">

                        <FadeInWhenVisible delay={.4}>
                            <h2 className="heading">Umów się na <br/> spotkanie</h2>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={.5}>
                            <p>
                                Zapraszamy do kontaktu i umówienia spotkania celem omówienia <br/> realizacji Państwa Inwestycji
                                Jesteśmy do dyspozycji!
                            </p>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.6}>
                            <Link to="/kontakt"  className="btn btn--dark margin-top-xl">Umów spotkanie</Link>
                        </FadeInWhenVisible>

                    </div>
                </div>
                <div className="col-6@md contact__right">
                    {/*<img src={contactImage} alt="BBS" className="image"/>*/}

                    <figure>
                        {/*<img src={contactImage} alt="BBS" className="image"/>*/}
                        <ImagesScrolling scaleValue={1.3} pictureSrc={contactImage} alt="BBS Polska"/>

                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Contact
