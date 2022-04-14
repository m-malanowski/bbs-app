import * as React from "react"
import img from "../images/bild4.jpg"
import down from "../images/down.svg"


const Hero = () => {

    return(
        <div className="hero-reversed">
            <div className="hero-reversed__left h-100">
                <img src={img} alt="" className="image"/>

            </div>
            <div className="hero-reversed__right ">
                <div className="hero-reversed__vertical "></div>

                <h2 className="hero-reversed__tag heading margin-top-auto">
                    We’re creating a smarter, greener energy future, <span>today</span>
                </h2>
                <p className="hero-reversed__subtag ">
                    At Shildan, we are transforming the built environment
                    to inspire beautiful, sustainable architecturr
                    our communities for generations to come.
                </p>
                <img className="margin-top-auto" src={down} alt="BBS" width="60"/>
            </div>
        </div>
    )
}

export default Hero
