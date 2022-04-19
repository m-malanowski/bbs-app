import React from "react";
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// Highlighting for code blocks
import "prismjs/themes/prism.css"
import "./src/index.scss"

import Layout from "./src/components/layout";

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};

const windowGlobal = typeof window !== 'undefined' && window
windowGlobal.localStorage.setItem("lang", "pl")


const transitionDelay = 1500
export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
    if (location.action === "PUSH") {
        window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
    } else {
        const savedPosition = getSavedScrollPosition(location)
        window.setTimeout(
            () => window.scrollTo(...(savedPosition || [0, 0])),
            transitionDelay
        )
    }
    return false
}