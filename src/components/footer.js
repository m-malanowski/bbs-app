import * as React from "react"
import logoFooter from "../images/logo-footer.svg"
// import {Link} from "gatsby";
import {Link, useI18next, useTranslation} from 'gatsby-plugin-react-i18next';
import FadeInWhenVisible from "./fadeWhenVisible";

const Footer = () => {
    const { t } = useTranslation();

    return(
        <div className="footer">

            <div className="grid">
                <div className="col-6@md">
                    <FadeInWhenVisible delay={.4}>
                        <Link to="/"><img src={logoFooter} alt="BBS" className="footer__image"/></Link>
                    </FadeInWhenVisible>

                </div>
                <div className="col-6@md">
                    <div className="grid footer__links">
                        <div className="col-4@xs">
                            <FadeInWhenVisible delay={.6}>
                                <ul>
                                    <li>Sitemap</li>
                                    <li><Link to="/o-nas" className="link">{ t('footer.pages.about') }</Link></li>
                                    <li><Link to="/uslugi" className="link">{ t('footer.pages.services') }</Link></li>
                                    <li><Link to="/realizacje" className="link">{ t('footer.pages.projects') }</Link></li>
                                    <li><Link to="/kontakt" className="link">{ t('footer.pages.contact') }</Link></li>
                                    <li><Link to="/aktualnosci" className="link">Blog</Link></li>
                                </ul>
                            </FadeInWhenVisible>
                        </div>
                        <div className="col-4@xs">
                            <FadeInWhenVisible delay={.7}>
                                <ul>
                                    <li>Adres</li>
                                    <li>ul. Grunwaldzka 2/B12</li>
                                    <li>82-300, Elbląg</li>
                                    <li><a className="link" href="tel: +48 609 534 950">+48 609 534 950 </a></li>
                                    <li><a href="mailto:biuro@bbs-polska.com" className="link">biuro@bbs-polska.com</a></li>
                                </ul>
                            </FadeInWhenVisible>
                        </div>
                        <div className="col-4@xs">
                            <FadeInWhenVisible delay={.8}>
                                <ul>
                                    <li>Social</li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/BBSPOLSKAHALESTALOWE/" className="link">Facebook</a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps?saddr=My+Location&daddr=BBS+POLSKA+SP.+Z+O.O." className="link">Google Maps</a></li>
                                </ul>
                            </FadeInWhenVisible>
                        </div>
                    </div>
                    <br/><br/>
                    <FadeInWhenVisible delay={.4}>
                        <small>© {new Date().getFullYear()}, { t('footer.copy.rights') }, <a href="/polityka-prywatnosci" className="link">{ t('footer.copy.privacy') }</a> by: <a
                            className="link"  href="https://lumina.studio" target="_blank" rel="noopener noreferrer" >lumina.studio</a></small>
                    </FadeInWhenVisible>
                </div>
            </div>

        </div>
    )
}

export default Footer
