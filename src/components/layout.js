import React, {useState} from "react"
import {Link} from "gatsby"
import Footer from "./footer";
import Header from "./header"
import Sidebar from "./sidebar";
import { Helmet } from "react-helmet"
import FakeLoader from "./fakeLoder";
import { motion, AnimatePresence } from "framer-motion"
import { layoutVariants, transition } from './variants'
import {withTranslation} from "react-i18next";
import PropTypes from "prop-types";
import "../index.scss"
import {useI18next} from "gatsby-plugin-react-i18next";

// import './i18n';

const Layout = ({location, title, children, key}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSideBar = () => {
        setIsOpen(!isOpen)
    }

    // const rootPath = `${__PATH_PREFIX__}/`
    // const isRootPath = location.pathname === rootPath

    console.log(location, 'location')
    console.log(key, 'key')
    console.log(children, 'children')
    console.log(title, 'title')
    const { languages, originalPath } = useI18next();
    console.log(originalPath, 'originalPath ')


    return (
        <>
            {/*<div className="" data-is-root-path={isRootPath}>*/}
            <div className="">
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
                        location={originalPath}
                        key={originalPath}
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
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default withTranslation()(Layout)
