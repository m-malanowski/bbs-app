import React, { useState } from "react"
import logo from "../images/logo.svg"
import logoPolska from "../images/logo-polska.svg"
// import arrowDown from "../images/arrow-down.svg"
// import {Link, navigate} from "gatsby";
// import { graphql } from "gatsby";
// import LanguageSwitcher from "./languageSwitcher";
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import {graphql} from "gatsby";


const Header = ({toggleSideBar, isOpen}) => {
    const [isRoll, setIsRoll] = useState(false)
    const {language, languages, originalPath} = useI18next();

    // const showLanguages = () => {
    //     setIsRoll(!isRoll);
    // }

    return(
        <div className="header">
            <div className="header__left">
                <a href="/">
                    {/*{*/}
                    {/*    windowGlobal.localStorage.getItem("lang") == "en" ?*/}
                    {/*    <img src={logo} height={45} alt="" className="header__logo"/> :*/}
                    {/*    <img src={logoPolska} height={45} alt="" className="header__logo"/>*/}
                    {/*}*/}


                    {language == 'en' ? <img src={logoPolska} height={45} alt="BBS Polska" className="header__logo"/> : <img src={logo} height={45} alt="BBS" className="header__logo"/>}

                    {console.log(language)}

                </a>
            </div>
            <div className="header__right">

                <div className="header__hamburger-wrapper">
                    <div onClick={toggleSideBar} className={`header__hamburger ${isOpen? "header__hamburger--open" : ""}`}>
                        <div className="header__hamburger-icon"></div>
                    </div>
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
