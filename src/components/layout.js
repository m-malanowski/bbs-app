import React, {useState} from "react"
import {Link} from "gatsby"
import Footer from "./footer";
import Header from "./header"
import Sidebar from "./sidebar";
import { Helmet } from "react-helmet"
import FakeLoader from "./fakeLoder";
import { motion, AnimatePresence } from "framer-motion"
import { layoutVariants, transition } from './variants'
import './i18n';

const Layout = ({location, title, children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSideBar = () => {
        setIsOpen(!isOpen)
    }

    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    // let header

    // if (isRootPath) {
    //     header = (
    //         <h1 className="main-heading">
    //             <Link to="/">{title}</Link>
    //         </h1>
    //     )
    // } else {
    //     header = (
    //         <Link className="header-link-home" to="/">
    //             {title}
    //         </Link>
    //     )
    // }
    return (
        <>
            {/*<FakeLoader />*/}

            <div className="" data-is-root-path={isRootPath}>
                {/*<header className="global-header">{header}</header>*/}
                <Helmet
                        bodyAttributes={{
                        class: `${isOpen? "no-scroll backdrop" : ""}`
                    }}
                />

                <Header isOpen={isOpen} toggleSideBar={toggleSideBar}></Header>
                <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar}></Sidebar>

                <AnimatePresence
                 initial={true}
                 exitBeforeEnter
                >
                    <motion.main
                        location={location}
                        key={location.key}
                        // variants={layoutVariants}
                        // initial="initial"
                        // animate="enter"
                        // exit="exit"
                        // transition={transition}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: {delay: 1.2, ...transition}, }}
                    >
                        {children}
                    </motion.main>

                </AnimatePresence>

                <Footer></Footer>
            </div>
        </>
    )
}

export default Layout
