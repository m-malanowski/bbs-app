import  React, {useEffect} from "react"
import { Link } from "gatsby"
import {motion} from "framer-motion";

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-20px" },
}
const transition = {delay: .6, duration: .6, ease: "easeInOut" };


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

            <div  className={`sidebar__content grid gap-md ${isOpen? "sidebar__content--open" : ""}`}>
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
                    <Link to="/" className="sidebar__sublink link" onClick={toggleSideBar}>Strona główna</Link>
                    <Link to="/aktualnosci" className="sidebar__sublink link" onClick={toggleSideBar}>Aktualności</Link>
                    <Link to="/aktualnosci" className="sidebar__sublink link" onClick={toggleSideBar}>Polityka prywatności</Link>
                    <Link to="/aktualnosci" className="sidebar__sublink link" onClick={toggleSideBar}>Facebook</Link>
                </motion.div>
            </div>
        </section>
    )
}

export default Sidebar
