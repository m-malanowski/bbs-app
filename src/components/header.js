import React, { useState } from "react"
import logo from "../images/logo.svg"
import arrowDown from "../images/arrow-down.svg"
import {Link} from "gatsby";

const Header = ({toggleSideBar, isOpen}) => {
    const [isRoll, setIsRoll] = useState(false)

    const toggleLanguage = () => {
        setIsRoll(!isRoll)
    }



    return(
        <div className="header">
            <div className="header__left">
                <a href="/">
                    <img src={logo} alt="" className="header__logo"/>
                </a>
            </div>

            <div className="header__right">
                {/*<p>Menu</p>*/}


                {
                    console.log(document.documentElement.lang)
                }
                {/*<div className="header__language">*/}
                {/*    <p>English</p>*/}
                {/*    <img src={arrowDown} alt=""/>*/}
                {/*</div>*/}
                <div className="header__hamburger-wrapper">
                    {/*<p>Menu</p>*/}
                    <div className={`header__language ${isRoll? "header__language--open" : ""}`}>
                        <ul>
                            <li><Link className="link" to="/">English</Link></li>
                            <li><Link className="link" to="/">Polski</Link></li>
                        </ul>
                        <img className={`header__language__arrow ${isRoll? "header__language__arrow--rolled" : "" }`} onClick={toggleLanguage} src={arrowDown} alt=""/>
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
