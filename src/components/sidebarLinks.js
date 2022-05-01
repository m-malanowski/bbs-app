import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"
import {useTranslation} from "gatsby-plugin-react-i18next";

const NavLink = styled(motion.li)`
  padding: var(--space-xs) 0;
  a {
    transition: all 200ms ease-in-out;
    font-size: calc(40px + (100 - 40) * ((100vw - 320px) / (1900 - 320)));
    font-family: var(--font-primary-medium);
    padding: var(--space-xxxs) 0;
    line-height: 1.2;
    font-weight: 500;
    &:hover {
      letter-spacing: 4px;
      transition: all 200ms ease-in-out;
    }
  }
`;

const variants = {
    show: {
        transform: "translateY(0em)",
        opacity: 1,
    },
    hide: {
        transform: "translateY(2.5em)",
        opacity: 0,
    },
};

const ease = [0.68, -0.6, 0.32, 1.6]

export function NavMenu({ isOpen, toggleSideBar }) {

    const { t, i18n } = useTranslation();

    return (
        <ul>
            <NavLink
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                    show: {
                        ...variants.show,
                        transition: { delay: 0.7, duration: 1.2, ease },
                    },
                    hide: {
                        ...variants.hide,
                        transition: { delay: 0.14, duration: 0.1 },
                    },
                }}
            >
                <Link to="/o-nas" className="link link--sidebar" onClick={toggleSideBar}>{t('index.hero.title')}</Link>
            </NavLink>

            <NavLink
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                    show: {
                        ...variants.show,
                        transition: { delay: 0.8, duration: 1.2, ease },
                    },
                    hide: {
                        ...variants.hide,
                        transition: { delay: 0.11, duration: 0.1 },
                    },
                }}
            >
                <Link to="/uslugi" className="link link--sidebar" onClick={toggleSideBar}>Usługi</Link>
            </NavLink>

            <NavLink
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                    show: {
                        ...variants.show,
                        transition: { delay: 0.9, duration: 1.2, ease },
                    },
                    hide: {
                        ...variants.hide,
                        transition: { delay: 0.08, duration: 0.1 },
                    },
                }}
            >
                <Link to="/realizacje" className="link link--sidebar" onClick={toggleSideBar}>Realizacje</Link>
            </NavLink>

            <NavLink
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                    show: {
                        ...variants.show,
                        transition: { delay: 1.0, duration: 1.2, ease },
                    },
                    hide: {
                        ...variants.hide,
                        transition: { delay: 0.05, duration: 0.1 },
                    },
                }}
            >
                <Link to="/kontakt" className="link link--sidebar" onClick={toggleSideBar}>Kontakt</Link>
            </NavLink>

        </ul>
    )
}

export default NavMenu