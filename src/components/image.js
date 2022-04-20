import * as React from "react";
import { useState, useRef } from "react";
import { motion, useDomEvent } from "framer-motion";
import hero6 from "../images/hero12.jpg";


const transition = {
    type: "spring",
    damping: 25,
    stiffness: 120
};

export const Image = () => {
    const [isOpen, setOpen] = useState(false);

    useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false));

    return (
        <div className={`project ${isOpen ? "open" : ""}`}>
            <motion.div
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={transition}
                className="project__shade"
                onClick={() => setOpen(false)}
            />
            <motion.img
                src={hero6}
                alt="BBS"
                onClick={() => setOpen(!isOpen)}
                // layoutTransition={transition}
                layout={true}
                className="project__image responsive"
            />
        </div>
    );
};
