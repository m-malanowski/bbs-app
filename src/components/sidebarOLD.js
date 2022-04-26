import  React, {useEffect} from "react"
import { Link } from "gatsby"
import {motion} from "framer-motion";
import styled from "styled-components";

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-20px" },
}
const transition = {delay: .6, duration: .6, ease: "easeInOut" };


const menuVariants = {
    open: {
        transform: 'translateX(0%)'
    },
    closed: {
        transform: 'translateX(100%)'
    }
}

const menuTransition = {type: 'spring', duration: 1, stiffness: 33, delay: 0.1}

const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 44%;
  height: 100%;
  background-color: var(--color-white);
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.5em;
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

        <section className={`sidebar ${isOpen? "sidebar--open" : ""}`}>
            <div className="sidebar__backdrop"></div>

            <MenuContainer
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
                transition={menuTransition}
            >
                <h1>elo</h1>
            </MenuContainer>

            <div initial={false} animate={isOpen ? "open" : "closed"} variants={menuVariants}
                 transition={menuTransition}
                 className={`sidebar__content grid gap-md ${isOpen? "sidebar__content--open" : ""}`}>
                <motion.div className="sidebar__links"
                            animate={isOpen ? "open" : "closed"}
                            variants={variants}
                            transition={transition}
                >
                    <Link to="/o-nas" className="sidebar__link" onClick={toggleSideBar}>O nas</Link>
                    <Link to="/uslugi" className="sidebar__link" onClick={toggleSideBar}>Usługi</Link>
                    <Link to="/realizacje" className="sidebar__link" onClick={toggleSideBar}>Realizacje</Link>
                    <Link to="/kontakt" className="sidebar__link" onClick={toggleSideBar}>Kontakt</Link>
                </motion.div>

                <motion.div className="sidebar__sublinks"
                     animate={isOpen ? "open" : "closed"}
                     variants={variants}
                     transition={transition}
                >
                    {/*<Link to="/" className="sidebar__sublink link" onClick={toggleSideBar}>Strona główna</Link>*/}

                    <Link to="/blog" className="sidebar__sublink link" onClick={toggleSideBar}>Blog</Link>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/BBSPOLSKAHALESTALOWE/" onClick={toggleSideBar} className="sidebar__sublink link">Facebook</a>
                    <Link to="/polityka-prywatnosci" className="sidebar__sublink link" onClick={toggleSideBar}>Polityka prywatności</Link>
                    <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps?saddr=My+Location&daddr=BBS+POLSKA+SP.+Z+O.O.">Wskazówki dojazdu</a>

                </motion.div>
            </div>
        </section>
    )
}

export default Sidebar
