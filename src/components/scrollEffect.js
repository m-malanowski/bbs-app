import React from "react";
import {motion, useTransform, useViewportScroll} from "framer-motion";

const ImagesScrolling = (props) => {

    const { scrollYProgress } = useViewportScroll()
    const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, props.scaleValue, 1])
    // const yPosAnim1 = useTransform(scrollYProgress, [0, 0.4, 1], [0, 250, -400])
    // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], output)

    return (
        <>
            <motion.img
                style={{
                    scale: scaleAnim,
                    // y: yPosAnim1,
                }}
                src={props.pictureSrc} alt={props.alt}
            />
        </>
    )
}
export default ImagesScrolling