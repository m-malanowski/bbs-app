import React from "react"
import logo from "../images/logo.svg"
import logoPolska from "../images/logo-footer.svg"
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import {graphql} from "gatsby";
import LanguageSwitcher from "./languageSwitcher";
import {motion} from "framer-motion";

const Header = ({toggleSideBar, isOpen}) => {
    const {language} = useI18next();

    const variants = {
        initial: {
            y: 50,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 1,
                duration: .4,
                ease: [0, 0.55, 0.45, 1]
            }
        },
        exit: {
            y: 50,
            opacity: 0
        }
    }

    return(
        <div className="header">
            <motion.div className="header__left"
                        variants={variants}
                        initial="initial"
                        animate="visible"
                        exit="exit"

            >
                <a href="/" >
                    {/*{language == 'pl' ? <img src={logoPolska} height={50} alt="BBS Polska" className="header__logo"/> : <img src={logo} height={45} alt="BBS" className="header__logo"/>}*/}
                    <img src={logoPolska} height={50} alt="BBS Polska" className="header__logo"/>
                </a>
            </motion.div>
            <div className="header__right">

                <LanguageSwitcher/>

                <div className="header__hamburger-wrapper">
                    <motion.div onClick={toggleSideBar} className={`header__hamburger ${isOpen? "header__hamburger--open" : ""}`}
                                variants={variants}
                                initial="initial"
                                animate="visible"
                                exit="exit"
                    >
                        <div className="header__hamburger-icon"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Header

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
