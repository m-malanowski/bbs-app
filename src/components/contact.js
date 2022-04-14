import * as React from "react"
import contactImage from "../images/conect2.jpg"


const Contact = () => {
    return(
        <section className="contact">
            <div className="grid height-80vh">
                <div className="col-6 contact__left">
                    <div className="padding-xl">
                        <h2 className="heading">Umów się na <br/> spotkanie</h2>
                        <p>By harnessing the power of smart meters, big data, <br/> and machine y from the palm of your hand.</p>
                        <br/><br/>
                        <a href="" className="btn btn--dark margin-top-xl">Umów spotkanie</a>
                    </div>
                </div>
                <div className="col-6 contact__right">
                    <img src={contactImage} alt="BBS" className="image"/>
                </div>
            </div>
        </section>
    )
}

export default Contact
