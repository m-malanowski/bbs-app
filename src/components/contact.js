import * as React from "react"
import contactImage from "../images/hero18.jpg"
// import {Link} from "gatsby";
// import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import FadeInWhenVisible from "./fadeWhenVisible";
import ImagesScrolling from "./scrollEffect";
import {Trans, useTranslation, Link} from 'gatsby-plugin-react-i18next';

const Contact = () => {
    const { t, i18n } = useTranslation();

    return(
        <section className="contact">
            <div className="grid">
                <div className="col-6@md contact__left">
                    <div className="padding-xl">

                        <FadeInWhenVisible delay={.6}>
                            <h2 className="heading">{t('footer.contact.head')}</h2>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={.7}>
                            <p>{t('footer.contact.body')}</p>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={.8}>
                            <Link to="/kontakt"  className="btn btn--dark margin-top-xl">{t('footer.contact.cta')}</Link>
                        </FadeInWhenVisible>

                    </div>
                </div>
                <div className="col-6@md contact__right">
                    <figure>
                        <ImagesScrolling scaleValue={1.3} pictureSrc={contactImage} alt="BBS Polska"/>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Contact
