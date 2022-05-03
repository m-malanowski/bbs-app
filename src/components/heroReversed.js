import * as React from "react"
// import img from "../images/hero16.jpg"
import down from "../images/down.svg"
import {motion} from "framer-motion";
import {variants} from "./variants";

const transition = { duration: .6, ease: [0.6, 0.01, -0.05, 0.9] }

const Hero = ({sectionImage, title, subTitle}) => {

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
                            transition: {delay: .45, ...transition},
                        }}
            >
                <figure>
                    <img src={sectionImage} alt="BBS Best Building Solutions" className="image"/>
                </figure>

            </motion.div>
            <div className="hero-reversed__right ">
                <motion.h1 className="hero-reversed__tag heading margin-top-auto"
                           variants={variants}
                           animate={{
                               y: 0,
                               opacity: 1,
                               transition: {delay: 1.8, ...transition},
                           }}
                           initial="initial"
                           exit="exit"
                >
                    {title}
                </motion.h1>
                <motion.p className="hero-reversed__subtag"
                          variants={variants}
                          animate={{
                              y: 0,
                              opacity: 1,
                              transition: {delay: 1.9, ...transition},
                          }}
                          initial="initial"
                          exit="exit"
                >
                    {subTitle}
                </motion.p>
                <motion.img className="margin-top-auto arrow-down" src={down} alt="BBS" width="60"
                            variants={variants}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: {delay: 1.8, ...transition},
                            }}
                            initial="initial"
                            exit="exit"
                />
            </div>
        </div>
    )
}

export default Hero
