import  React, {useEffect} from "react"
import { Link } from "gatsby"
import {motion} from "framer-motion";
import styled from "styled-components";
import icon1 from "../images/icon4.svg"
import icon2 from "../images/phone.svg"
import icon3 from "../images/calendar.svg"
import icon4 from "../images/mail.svg"

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-20px" },
}
const transition = {delay: .6, duration: .6, ease: "easeInOut" };


const menuVariants = {
    open: {
        transform: 'translateY(0%)'
    },
    closed: {
        transform: 'translateY(-100%)'
    }
}

const menuTransition = {type: 'spring', duration: 1, stiffness: 33, delay: 0.1}

const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  //max-width: 44%;
  max-width: 100%;
  height: 100%;
  background-color: var(--color-white);
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 200;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  //transform: translateX(4em);
  transform-origin: top left;
  user-select: none;
`;

const ContentContainer = styled(motion.div)`
  margin-left: auto;
  margin-right: auto;
  //padding-top: var(--space-xl);
  //padding-bottom: var(--space-xl);
  
  //padding: var(--space-xl);
  //display: flex;
  
  display: grid;
  //grid-template-columns: 1fr 3fr;

  //grid-template-columns: repeat(6, 1fr);
  //grid-template-rows: repeat(6, 1fr);

  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);

  height: 100%;
`;


const Sidebar = ({toggleSideBar, isOpen}) => {

    useEffect(() => {
        if (isOpen === false) {

        } else if (
            isOpen === true ||
            (isOpen === true && isOpen.initial === null)
        ) {

        }
        }, [isOpen]);
    return(

        <>
            <section className={`sidebar ${isOpen? "sidebar--open" : ""}`}>
                <div className="sidebar__backdrop"></div>
            </section>

            <MenuContainer
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
                transition={menuTransition}
                className="menu-container"
            >
                <ContentContainer>
                    <div className="sidebar__links padding-xl div1">
                        <Link to="/o-nas" className="sidebar__link" onClick={toggleSideBar}>O nas</Link>
                        <Link to="/uslugi" className="sidebar__link" onClick={toggleSideBar}>Usługi</Link>
                        <Link to="/realizacje" className="sidebar__link" onClick={toggleSideBar}>Realizacje</Link>
                        <Link to="/kontakt" className="sidebar__link" onClick={toggleSideBar}>Kontakt</Link>
                        <Link to="/o-nas" className="sidebar__link" onClick={toggleSideBar}>Główna</Link>
                    </div>

                    <div className="div2">
                        <img src={icon1} width={50} alt="BBS" className="tile__icon"/>
                        <Link to="/uslugi" onClick={toggleSideBar}> <h4>Sprawdź nasze usługi</h4> </Link>
                    </div>
                    <div className="div3">
                        <img src={icon3} width={50} alt="BBS" className="tile__icon"/>
                        <Link to="/kontakt" onClick={toggleSideBar}><h4>Umów spotkanie</h4></Link>
                    </div>
                    <div className="div4">
                        <img src={icon2} width={50} alt="BBS" className="tile__icon"/>
                        <a  href="tel: +48 609 534 950"><h4>Zadzwoń do nas</h4> </a>
                    </div>
                    <div className="div5">
                        <img src={icon4} width={50} alt="BBS" className="tile__icon"/>
                        <a  href="mailto: biuro@bbs-polska.com"> <h4>Wyślij maila</h4> </a>
                    </div>

                </ContentContainer>


            </MenuContainer>
        </>
    )
}

export default Sidebar
