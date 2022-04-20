import * as React from "react"
import img from "../images/hero11.jpg"
import {Link} from "gatsby";
import {motion} from "framer-motion";
import { useTranslation } from 'react-i18next';


    // const transition = { duration: 3, yoyo: Infinity, ease: "easeInOut" };
const transition = { duration: .6, ease: [0.6, 0.01, -0.05, 0.9] }

const Hero = () => {
    const { t, i18n } = useTranslation();

    return(
        <div className="hero">
            <div className="hero__left">
                <div className="hero__vertical "></div>

                <h2  className="hero__tag heading">
                    {t('Investition')} <br/> <span>BBS</span> POLSKA
                </h2>

                <p className="hero__subtag ">
                    Naszym celem jest dostarczanie najwyższej jakości świadczonych usług. Budujemy z myślą o kliencie oraz użytkownikach, którzy będą korzystać z wykonanych przez nas obiektów.
                </p>
                <Link to="/kontakt" className="hero__btn btn margin-top-xl">Umów spotkanie</Link>
            </div>
            <motion.div className="hero__right"
                        initial={{
                            width: 0,
                        }}
                        animate={{
                            width: "100%",
                            transition: {delay: 3.8, ...transition},
                        }}
                        exit={{
                            width: 0,
                            transition: {delay: .2, ...transition},
                        }}
            >
                <img src={img} alt="" className="image"/>

                {/*<figure className="image-wrapper">*/}
                {/*    <img src={img} alt="" className="image"/>*/}
                {/*</figure>*/}
            </motion.div>
        </div>
    )
}

export default Hero
