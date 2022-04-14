import React, {useState} from "react"
import {Link} from "gatsby"
import Footer from "./footer";
import Header from "./header"
import Sidebar from "./sidebar";
import { Helmet } from "react-helmet"
import FakeLoader from "./fakeLoder";


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
            <FakeLoader />

            <div className="" data-is-root-path={isRootPath}>
                {/*<header className="global-header">{header}</header>*/}
                <Helmet
                    bodyAttributes={{
                        class: `${isOpen? "no-scroll backdrop" : ""}`
                    }}
                />

                <Header isOpen={isOpen} toggleSideBar={toggleSideBar}></Header>
                <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar}></Sidebar>
                <main>{children}</main>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Layout
