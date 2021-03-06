import React from "react"
// import {pathVariants, logoShowSecondHouse, logoShowFirstHouse} from "./variants"
import {motion} from "framer-motion"

const svgVariants = {
    hidden: {
        rotate: -180,
        // scale: 10.1,
    },
    visible: {
        rotate: 0,
        // scale: 1,
        transition: {
            default: { duration: 3.2, ease: [0.68, -0.6, 0.32, 1.6] }
        }
    }
}


const FakeLoader = () => {
    return (
        <motion.div
            className="greeting"
            initial={{opacity: 1}}
            animate={{
                opacity: 0,
                transition: {delay: 3.4, when: "beforeChildren", duration: .4},
                transitionEnd: {
                    display: "none"
                }
            }}
        >
            <motion.svg
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                width="179" height="156" viewBox="0 0 179 156" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M57.161 57.3v9.214l-30.058 21.61v39.236L44.6 114.774V97.093l29.698-21.35 29.698 21.35v30.849h17.494V88.124L82.873 60.362l21.482-15.445 29.698 21.352v34.376l17.494-12.577V57.3l-47.192-33.928L57.161 57.3z"
                    fill="#F68712"
                    strokeWidth="0"
                    stroke="#F68712"

                    strokeLinecap="round"
                    initial={{pathLength: 1, scale: .1, opacity: 0}}
                    animate={{
                        pathLength: 0,
                        scale: 1,
                        opacity: 1,
                        // transitionEnd: {
                        //     fill: "#F68712",
                        // }
                    }}
                    transition={{ delay: 1.6, duration: 1.0, ease: [0.87, 0, 0.13, 1]}}
                />

                <motion.path
                    d="M158.197 0.000302223H20.4541C9.15733 0.000302223 0 9.15762 0 20.455V134.811C0 146.108 9.15733 155.266 20.4541 155.266H158.197C169.493 155.266 178.652 146.108 178.652 134.811V20.455C178.652 9.15762 169.493 0.000302223 158.197 0.000302223V0.000302223ZM165.48 134.811C165.48 138.827 162.212 142.094 158.197 142.094H20.4541C16.4385 142.094 13.1719 138.827 13.1719 134.811V20.455C13.1719 16.439 16.4385 13.1723 20.4541 13.1723H158.197C162.212 13.1723 165.48 16.439 165.48 20.455V134.811Z"
                    fill="transparent"
                    strokeWidth="2"
                    stroke="#F68712"
                    strokeLinecap="round"
                    // initial={{pathLength: 0}}
                    // animate={{pathLength: 1}}
                    // transition={transition}

                    initial={{pathLength: 1, scale: .15, opacity: 0}}
                    animate={{
                        pathLength: 1,
                        scale: 1,
                        opacity: 1,
                        // transitionEnd: {
                        //     fill: "#F68712",
                        // }
                    }}
                    transition={{delay: .2, duration: 2.8, ease: [0.87, 0, 0.13, 1]}}

                />

            </motion.svg>
        </motion.div>
    )
}

export default FakeLoader