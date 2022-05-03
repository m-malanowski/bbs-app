import * as React from "react";
import { useState, useRef } from "react";
import { motion, useDomEvent } from "framer-motion";


const transition = {
    type: "spring",
    damping: 25,
    stiffness: 120
};

export const ImageOLD = ({img}) => {
    const [isOpen, setOpen] = useState(false);

    // useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false));

    return (
        <div className={`project ${isOpen ? "open" : ""}`}>
            <motion.div
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={transition}
                className="project__shade"
                onClick={() => setOpen(false)}
            />
            <motion.img
                src={img}
                alt="BBS Polska"
                onClick={() => setOpen(!isOpen)}
                // layoutTransition={transition}
                layout={true}
                className="project__image responsive"
            />
        </div>
    );
};
