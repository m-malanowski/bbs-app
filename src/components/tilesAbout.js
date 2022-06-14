import * as React from "react"
import Counter from "./counter";
import FadeInWhenVisible from "./fadeWhenVisible";
import {Trans, useTranslation, Link} from 'gatsby-plugin-react-i18next';

const Tiles = () => {
    const { t, i18n } = useTranslation();

    return (
        <section>
            <div>
                <div className="grid ">
                    <div className="col-6@md tiles tiles--top">
                        <div className="tile tile--single">
                                <span className="tile__number">20</span>

                            <FadeInWhenVisible delay={0.1}>
                                <h5 className="tile__heading">{t('footer.experience.experienceHeader')}</h5>
                            </FadeInWhenVisible>

                            <FadeInWhenVisible delay={0.4}>
                                <p className="tile__description">{t('footer.experience.experienceBody')}</p>
                            </FadeInWhenVisible>
                        </div>
                        <div className="tile tile--single"></div>
                    </div>
                    <div className="col-6@md">
                        <div className="grid  padding-xl">
                            <FadeInWhenVisible delay={0.1}>
                                <h3>{t('footer.experience.desc')}</h3>
                            </FadeInWhenVisible>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tiles tiles--services">
                <div className="tile">
                        <span className="tile__number">284</span>
                    <FadeInWhenVisible delay={0.5}>
                        <h5 className="tile__heading">{t('footer.experience.projectsHeader')}</h5>
                    </FadeInWhenVisible>

                    <FadeInWhenVisible delay={0.8}>
                        <p className="tile__description">{t('footer.experience.projectsBody')}</p>
                    </FadeInWhenVisible>

                </div>
                <div className="tile">

                        <span className="tile__number">30</span>
                    <FadeInWhenVisible delay={0.6}>
                        <h5 className="tile__heading">{t('footer.experience.fittersHeader')}</h5>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={0.9}>
                        <p className="tile__description">{t('footer.experience.fittersBody')}</p>
                    </FadeInWhenVisible>

                </div>

                <div className="tile">
                    <span className="tile__number">427</span>
                    <FadeInWhenVisible delay={0.7}>
                        <h5 className="tile__heading">{t('footer.experience.customersHeader')}</h5></FadeInWhenVisible>
                    <FadeInWhenVisible delay={1.0}>
                        <p>{t('footer.experience.customersBody')}</p>
                    </FadeInWhenVisible>

                </div>

                <div className="tile">
                    <span className="tile__number">100 – 45 K</span>
                    <FadeInWhenVisible delay={0.8}>
                        <h5 className="tile__heading">{t('footer.experience.metersHeader')}</h5>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={1.1}>
                        <p>{t('footer.experience.metersBody')}</p>
                    </FadeInWhenVisible>

                </div>
            </div>
        </section>
    )
}

export default Tiles
