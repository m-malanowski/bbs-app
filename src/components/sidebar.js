import  React, {useEffect} from "react"
// import { Link } from "gatsby"
import {motion} from "framer-motion";
import styled from "styled-components";
// import icon1 from "../images/icon4.svg"
// import icon2 from "../images/phone.svg"
// import icon3 from "../images/calendar.svg"
// import icon4 from "../images/mail.svg"
import SidebarLinks from "./sidebarLinks";
import SidebarTiles from "./sidebarTiles";

// const variants = {
//     open: { opacity: 1, x: 0 },
//     closed: { opacity: 0, x: "-20px" },
// }
// const transition = {delay: .6, duration: .6, ease: "easeInOut" };

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
  display: grid;
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
        ) {}
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
                        <SidebarLinks isOpen={isOpen} toggleSideBar={toggleSideBar}></SidebarLinks>
                    </div>

                    <SidebarTiles isOpen={isOpen} toggleSideBar={toggleSideBar}></SidebarTiles>

                </ContentContainer>

            </MenuContainer>
        </>
    )
}

export default Sidebar
