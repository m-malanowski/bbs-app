import * as React from "react"
import img from "../images/hero16.jpg"
import down from "../images/down.svg"
import {motion} from "framer-motion";

const transition = { duration: .6, ease: [0.6, 0.01, -0.05, 0.9] }

const Hero = () => {

    return(
        <div className="hero-reversed">
            <motion.div className="hero-reversed__left"
                        initial={{
                            width: 0
                        }}
                        animate={{
                            width: "100%",
                            transition: {delay: 1.6, ...transition},
                            transformOrigin: 'left'
                        }}
                        exit={{
                            width: 0,
                            transition: {delay: .2, ...transition},
                        }}
            >
                <figure>
                    <img src={img} alt="" className="image"/>
                </figure>

            </motion.div>
            <div className="hero-reversed__right ">
                {/*<div className="hero-reversed__vertical "></div>*/}

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