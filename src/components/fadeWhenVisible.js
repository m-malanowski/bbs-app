import React from "react"
import {motion} from "framer-motion";


function FadeInWhenVisible({children}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{delay: .6, duration: 0.3}}
            variants={{
                visible: {opacity: 1, scale: 1},
                hidden: {opacity: 0, scale: .95}
            }}
        >
            {children}
        </motion.div>
    );
}

export default FadeInWhenVisible
