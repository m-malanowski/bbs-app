import * as React from "react"
import punctuality from "../images/icon3.svg"
import precision from "../images/icon2.svg"
import credibility from "../images/icon1.svg"
import {Trans, useTranslation, Link} from 'gatsby-plugin-react-i18next';


const Tiles = () => {
    const { t, i18n } = useTranslation();

    return (
        <section className="tiles tiles--index">
            <div className="tile"></div>
            <div className="tile">
                <img src={punctuality} alt="BBS" className="tile__icon"/>
                <h5 className="tile__heading">{t('index.punctuality')}</h5>
                <p className="tile__description">{t('index.punctualityDesc')}</p>
            </div>

            <div className="tile">
                <img src={credibility} alt="BBS" className="tile__icon"/>
                <h5 className="tile__heading">{t('index.credibility')}</h5>
                <p>{t('index.credibilityDesc')}</p>
            </div>

            <div className="tile">
                <img src={precision} alt="BBS" className="tile__icon"/>
                <h5 className="tile__heading">{t('index.precision')}</h5>
                <p>{t('index.precisionDesc')}</p>
            </div>
        </section>
    )
}

export default Tiles
