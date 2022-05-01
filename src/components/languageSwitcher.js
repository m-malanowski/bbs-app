import React, { useContext, useState } from "react";
import {
    I18nextContext,
    Link,
    useI18next,
    useTranslation,
} from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import arrowDown from "../images/arrow-down.svg";

export default function LanguageSwitcher() {
    const context = useContext(I18nextContext);
    const { languages, originalPath } = useI18next();
    const { t } = useTranslation();
    let [menuOpen, setMenuOpen] = useState(false);
    const [isRoll, setIsRoll] = useState(false)
    const showLanguages = () => {
        setIsRoll(!isRoll);
    }
    return (
        <div className={`languages ${isRoll? "languages--open" : ""}`}>
            <ul>
                {languages.map((language, id) => (
                    <li>
                        <Link
                            className="link"
                            key={language}
                            to={originalPath}
                            language={language}
                            onClick={() => setMenuOpen(false)}
                        >
                            {language.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
            <img className={`languages__arrow ${isRoll? "languages__arrow--rolled" : "" }`} onClick={showLanguages} src={arrowDown} alt=""/>

        </div>
    )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
