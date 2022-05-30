import * as React from "react"
// import img from "../images/heroIndex.jpg"
import img from "../images/hero8.jpg"
// import img from "../images/hero25.jpg"
// import {Link} from "gatsby";
import {motion} from "framer-motion";
// import video from "../images/3.mp4"

// import { useTranslation } from 'react-i18next';
import {Trans, useTranslation, Link} from 'gatsby-plugin-react-i18next';
import {variants} from "./variants"

    // const transition = { duration: 3, yoyo: Infinity, ease: "easeInOut" };
const transition = { duration: .6, ease: [0.6, 0.01, -0.05, 0.9] }
const exitTransition = { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] }
const textTransition = { delay: 3.8, duration: .6, ease: [0.87, 0, 0.13, 1] }

const Hero = () => {
    const { t, i18n } = useTranslation();

    return(
        <div className="hero">
            <div className="hero__left">
                <div className="hero__vertical"></div>

                <motion.h2  className="hero__tag heading"
                     variants={variants}
                     animate={{
                         y: 0,
                         opacity: 1,
                         transition: {delay: 6.8, ...transition},
                     }}
                     initial="initial"
                     exit="exit"
                >
                    {t('index.hero.title')} <br/> <span>BBS</span> Polska
                </motion.h2>

                <motion.p className="hero__subtag"
                          variants={variants}
                          animate={{
                              y: 0,
                              opacity: 1,
                              transition: {delay: 6.9, ...transition},
                          }}
                          initial="initial"
                          exit="exit"
                >
                    {t('index.hero.subtitle')}
                </motion.p>

                <motion.div
                    className="margin-top-xl"
                    variants={variants}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: {delay: 7, ...transition},
                    }}
                    initial="initial"
                    exit="exit"
                >
                    <Link to="/kontakt" className="hero__btn btn margin-top-xl">
                        {t('general.appointment')}
                    </Link>
                </motion.div>

            </div>
            <motion.div className="hero__right"
                        initial={{
                            // width: 0,
                            marginLeft: 0
                        }}
                        animate={{
                            // width: "100%",
                            marginLeft: '50%',
                            // transition: {delay: 4.2,  duration: 1.2, ease: [0.87, 0, 0.13, 1] },
                            transition: {delay: 6.2,  duration: 1.2, ease: [0.87, 0, 0.13, 1] },
                        }}
                        exit={{
                            // width: 0,
                            marginLeft: 0,
                            transition: {delay: .4, ...exitTransition},
                        }}
            >
                {/*<img src={img} alt="BBS Best building solutions" className="image"/>*/}

                <motion.figure
                    variants={variants}
                    animate={{
                        y: 0,
                        scale: 1.0,
                        // opacity: 1,
                        transition: {delay: 3.2, duration: 3, ease: [0.6, 0.01, -0.05, 0.9]},
                        // transition: {delay: 7.2, duration: 3, ease: [0.6, 0.01, -0.05, 0.9]},
                    }}
                    initial={{
                        scale: 1.4,
                    }}
                    // exit="exit"
                >
                    <img src={img} alt="BBS Best building solutions" />
                    {/*<video width="100%" height="auto" muted autoPlay loop>*/}
                    {/*    <source src={video} type="video/mp4"/>*/}
                    {/*</video>*/}
                </motion.figure>
            </motion.div>
        </div>
    )
}

export default Hero
