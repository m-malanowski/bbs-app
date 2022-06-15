import * as React from "react"
import img from "../images/hero8.jpg"
import {motion} from "framer-motion";
import {Trans, useTranslation, Link} from 'gatsby-plugin-react-i18next';
import {variants} from "./variants"

const transition = { duration: .6, ease: [0.6, 0.01, -0.05, 0.9] }
const exitTransition = { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] }

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
                    {t('index.hero.title')}<br/><span>BBS</span> Polska
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
                            marginLeft: 0
                        }}
                        animate={{
                            marginLeft: '50%',
                            transition: {delay: 6.2,  duration: 1.2, ease: [0.87, 0, 0.13, 1] },
                        }}
                        exit={{
                            marginLeft: 0,
                            transition: {delay: .4, ...exitTransition},
                        }}
            >
                <motion.figure
                    variants={variants}
                    animate={{
                        y: 0,
                        scale: 1.0,
                        transition: {delay: 3.2, duration: 3, ease: [0.6, 0.01, -0.05, 0.9]},
                    }}
                    initial={{
                        scale: 1.4,
                    }}
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
