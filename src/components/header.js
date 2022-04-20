import React, { useState } from "react"
import logo from "../images/logo.svg"
import logoPolska from "../images/logo-polska.svg"
import arrowDown from "../images/arrow-down.svg"
// import {Link, navigate} from "gatsby";

const Header = ({toggleSideBar, isOpen}) => {
    const [isRoll, setIsRoll] = useState(false)
    const [isActiveEn, setActiveEN] = useState(false)

    const windowGlobal = typeof window !== 'undefined' && window

    const showLanguages = () => {
        setIsRoll(!isRoll);
    }
    const selectEn = () => {
        windowGlobal.localStorage.setItem("lang", "en")
        setActiveEN(true);
        // navigate("/", { replace: true });
    }
    const selectPl = () => {
        windowGlobal.localStorage.setItem("lang", "pl")
        setActiveEN(false);
        // navigate("/", { replace: true });
    }


    return(
        <div className="header">
            <div className="header__left">
                <a href="/">
                    {/*{*/}
                    {/*    windowGlobal.localStorage.getItem("lang") == "en" ?*/}
                    {/*    <img src={logo} height={45} alt="" className="header__logo"/> :*/}
                    {/*    <img src={logoPolska} height={45} alt="" className="header__logo"/>*/}
                    {/*}*/}
                    <img src={logoPolska} height={45} alt="BBS Polska" className="header__logo"/>
                </a>
            </div>

            <div className="header__right">

                <div className="header__hamburger-wrapper">
                    {/*<p>Menu</p>*/}
                    <div className={`header__language ${isRoll? "header__language--open" : ""}`}>
                        <ul>
                            <li onClick={selectPl}><a className="link" href="/">Polski</a></li>
                            <li onClick={selectEn}> <a className="link" href="/">English</a></li>
                        </ul>
                        <img className={`header__language__arrow ${isRoll? "header__language__arrow--rolled" : "" }`} onClick={showLanguages} src={arrowDown} alt=""/>
                    </div>

                    <div onClick={toggleSideBar} className={`header__hamburger ${isOpen? "header__hamburger--open" : ""}`}>
                        <div className="header__hamburger-icon"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
