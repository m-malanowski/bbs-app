import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

const NavLink = styled(motion.li)`
  a {
    transition: all 200ms ease-in-out;
    font-size: calc(40px + (80 - 40) * ((100vw - 320px) / (1900 - 320)));
    font-family: var(--font-primary-medium);
    padding: var(--space-xxxs) 0;
    line-height: 1.2;
    font-weight: 500;
    &:hover {
      color: var(--color-secondary);
    }
  }
`;

const variants = {
    show: {
        transform: "translateY(0em)",
        opacity: 1,
    },
    hide: {
        transform: "translateY(5em)",
        opacity: 0,
    },
};

const ease = [0.68, -0.6, 0.32, 1.6]

export function NavMenu({ isOpen, toggleSideBar }) {
    return (
        <ul>
            <NavLink
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                    show: {
                        ...variants.show,
                        transition: { delay: 0.7, duration: 0.6, ease },
                    },
                    hide: {
                        ...variants.hide,
                        transition: { delay: 0.2, duration: 0.1 },
                    },
                }}
            >
                <Link to="/o-nas" className="sidebar__link" onClick={toggleSideBar}>O nas</Link>
            </NavLink>

            <NavLink
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                    show: {
                        ...variants.show,
                        transition: { delay: 0.8, duration: 0.6, ease },
                    },
                    hide: {
                        ...variants.hide,
                        transition: { delay: 0.15, duration: 0.1 },
                    },
                }}
            >
                <Link to="/uslugi" className="sidebar__link" onClick={toggleSideBar}>Usługi</Link>
            </NavLink>

            <NavLink
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                    show: {
                        ...variants.show,
                        transition: { delay: 0.9, duration: 0.6, ease },
                    },
                    hide: {
                        ...variants.hide,
                        transition: { delay: 0.1, duration: 0.1 },
                    },
                }}
            >
                <Link to="/realizacje" className="sidebar__link" onClick={toggleSideBar}>Realizacje</Link>
            </NavLink>

            <NavLink
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                    show: {
                        ...variants.show,
                        transition: { delay: 1.0, duration: 0.6, ease },
                    },
                    hide: {
                        ...variants.hide,
                        transition: { delay: 0.05, duration: 0.1 },
                    },
                }}
            >
                <Link to="/kontakt" className="sidebar__link" onClick={toggleSideBar}>Kontakt</Link>
            </NavLink>

        </ul>
    )
}

export default NavMenu