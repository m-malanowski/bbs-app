import * as React from "react"
import contactImage from "../images/conect2.jpg"
import {Link} from "gatsby";
import hero6 from "../images/bild2.jpg";
import FadeInWhenVisible from "./fadeWhenVisible";


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
                            <p>By harnessing the power of smart meters, big data, <br/> and machine y from the palm of your hand.</p>
                        </FadeInWhenVisible>

                        <br/><br/>
                        <Link to="/kontakt"  className="btn btn--dark margin-top-xl">Umów spotkanie</Link>
                    </div>
                </div>
                <div className="col-6@md contact__right">
                    {/*<img src={contactImage} alt="BBS" className="image"/>*/}

                    <figure>
                        <img src={contactImage} alt="BBS" className="image"/>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Contact
