import { motion } from "framer-motion";
import React from "react";
import { Link } from "gatsby"
import icon1 from "../images/icon4.svg";
import icon3 from "../images/calendar.svg";
import icon2 from "../images/phone.svg";
import icon4 from "../images/mail.svg";

const variants = {
    show: {
        transform: "translateY(0em)",
        opacity: 1,
        transition: { delay: 0.7, duration: 1.2, ease: [0.68, -0.6, 0.32, 1.6] },
    },
    hide: {
        transform: "translateY(1em)",
        opacity: 0,
        transition: { delay: 0.1, duration: .1,  ease: [0.68, -0.6, 0.32, 1.6]},
    },
}

export function SidebarTiles({ isOpen, toggleSideBar }) {
    return (
        <>
            <motion.div className="div2" initial={false} animate={isOpen ? "show" : "hide"} variants={variants}>
                <img src={icon1} width={50} alt="BBS" className="tile__icon"/>
                <Link to="/wynajem-sprzetu-budowlanego" onClick={toggleSideBar}> <h4>Wynajmij sprzęt</h4> </Link>
            </motion.div>
            <motion.div className="div3" initial={false} animate={isOpen ? "show" : "hide"} variants={variants}>
                <img src={icon3} width={50} alt="BBS" className="tile__icon"/>
                <Link to="/kontakt" onClick={toggleSideBar}><h4>Umów spotkanie</h4></Link>
            </motion.div>
            <motion.div className="div4" initial={false} animate={isOpen ? "show" : "hide"} variants={variants}>
                <img src={icon2} width={50} alt="BBS" className="tile__icon"/>
                <a  href="tel: +48 609 534 950"><h4>Zadzwoń do nas</h4> </a>
            </motion.div>
            <motion.div className="div5" initial={false} animate={isOpen ? "show" : "hide"} variants={variants}>
                <img src={icon4} width={50} alt="BBS" className="tile__icon"/>
                <a  href="mailto: biuro@bbs-polska.com"> <h4>Wyślij maila</h4> </a>
            </motion.div>
        </>
    )
}

export default SidebarTiles