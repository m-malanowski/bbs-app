import React, { useEffect, useRef } from "react";
import { animate, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Counter({ from, to }) {
    const ref = useRef();
    const inView = useInView();

    useEffect(() => {
        if(inView){
            const controls = animate(from, to, {
                duration: 1,
                onUpdate(value) {
                    ref.current.textContent = value.toFixed(0);
                }
            });
            return () => controls.stop();
        }
    }, [from, to, ref]);

    return <motion.span className="tile__number"
                        initial="hidden"
                        ref={ref}
                        // viewport={{once: true}}
                        // whileInView="visible"
                        // transition={{delay: .6, duration: 0.3}}
                        // variants={{
                        //     visible: {opacity: 1, scale: 1},
                        //     hidden: {opacity: 0, scale: .95}
                        // }}
    />;
}

export default Counter