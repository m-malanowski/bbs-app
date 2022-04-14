import * as React from "react"
import img from "../images/bild3.jpg"
import {Link} from "gatsby";

const Hero = ({reversed}) => {
    const isReversed = reversed

    if(isReversed){

    }
    return(
        <div className="hero">
            <div className="hero__left">
                <div className="hero__vertical "></div>

                <h2 className="hero__tag heading margin-top-auto">
                    We’re creating a smarter, greener energy future, <span>today</span>
                </h2>
                <p className="hero__subtag ">
                    At Shildan, we are transforming the built environment
                    to inspire beautiful, sustainable architecturr
                    our communities for generations to come.
                </p>
                <Link to="/kontakt" className="btn margin-top-xl margin-top-auto">Umów spotkanie</Link>
            </div>
            <div className="hero__right h-100">
                <img src={img} alt="" className="image"/>

                {/*<figure className="image-wrapper">*/}
                {/*    <img src={img} alt="" className="image"/>*/}
                {/*</figure>*/}
            </div>
        </div>
    )
}

export default Hero
