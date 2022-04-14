import * as React from "react"
import logo from "../images/logo.svg"
import arrowDown from "../images/arrow-down.svg"

const Header = ({toggleSideBar, isOpen}) => {
    return(
        <div className="header">
            <div className="header__left">
                <a href="/">
                    <img src={logo} alt="" className="header__logo"/>
                </a>
            </div>

            <div className="header__right">
                {/*<p>Menu</p>*/}

                {/*<div className="header__language">*/}
                {/*    <p>English</p>*/}
                {/*    <img src={arrowDown} alt=""/>*/}
                {/*</div>*/}
                <div className="header__hamburger-wrapper">
                    {/*<p>Menu</p>*/}
                    <div className="header__language">
                        <p>English</p>
                        <img src={arrowDown} alt=""/>
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
