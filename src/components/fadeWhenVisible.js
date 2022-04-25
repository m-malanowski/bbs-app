import React from "react"
import {motion} from "framer-motion";

function FadeInWhenVisible({children, delay}) {
    // const transition = {delay: .6, duration: 1, ease: [0.11, 0, 0.5, 0]};

    const variants = {
        initial: {
            y: 50,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: .4,
                ease: [0, 0.55, 0.45, 1]
            }
        },
        exit: {
            y: 50,
            opacity: 0
        }
    }
    return (
        <motion.div
            whileInView="visible"
            viewport={{once: true}}
            variants={variants}
            initial="initial"
            exit="exit"
        >
            {children}
        </motion.div>
    );
}

export default FadeInWhenVisible
