import * as React from "react"
import contactImage from "../images/conect2.jpg"
import {Link} from "gatsby";
import hero6 from "../images/bild2.jpg";
import FadeInWhenVisible from "./fadeWhenVisible";
import ImagesScrolling from "./scrollEffect";


const Contact = () => {
    return(
        <section className="contact">
            <div className="grid">
                <div className="col-6@md contact__left">
                    <div className="padding-xl">

                        <FadeInWhenVisible>
                            <h2 className="heading">Umów się na <br/> spotkanie</h2>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible>
                            <p>Nasi doradcy chętnie pomogą.
                                Zapraszamy do kontaktu <br/> celem omówienia realizacji Państwa Inwestycji  <br/> Jesteśmy dla Ciebie</p>
                        </FadeInWhenVisible>

                        <Link to="/kontakt"  className="btn btn--dark margin-top-xl">Umów spotkanie</Link>
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
