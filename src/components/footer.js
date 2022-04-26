import * as React from "react"
import logoFooter from "../images/logo-footer.svg"
import {Link} from "gatsby";
// import ImagesScrolling from "./scrollEffect";
// import teaserImg from "../images/hero12.jpg";
import FadeInWhenVisible from "./fadeWhenVisible";


const Footer = () => {
    return(
        <div className="footer">

            <div className="grid">
                <div className="col-6@md">
                    <FadeInWhenVisible delay={.4}>
                        <img src={logoFooter} alt="BBS" className="footer__image"/>
                    </FadeInWhenVisible>
                    {/*<ImagesScrolling scaleValue={} pictureSrc={logoFooter} alt="BBS Polska" className="footer__image"/>*/}

                </div>
                <div className="col-6@md">
                    <div className="grid footer__links">
                        <div className="col-4@xs">
                            <ul>
                                <li>Sitemap</li>
                                <li><Link to="/o-nas" className="link">O nas</Link></li>
                                <li><Link to="/uslugi" className="link">Usługi</Link></li>
                                <li><Link to="/realizacje" className="link">Realizacje</Link></li>
                                <li><Link to="/kontakt" className="link">Kontakt</Link></li>
                                <li><Link to="/aktualnosci" className="link">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="col-4@xs">
                            <ul>
                                <li>Adres</li>
                                <li>Królewiecka 215</li>
                                <li>82-300, Elbląg</li>
                                <li><a className="link" href="tel: +48 609 534 950">+48 609 534 950 </a></li>
                                <li><a href="mailto:biuro@bbs-polska.com" className="link">biuro@bbs-polska.com</a></li>
                            </ul>
                        </div>
                        <div className="col-4@xs">
                            <ul>
                                <li>Social</li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/BBSPOLSKAHALESTALOWE/" className="link">Facebook</a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps?saddr=My+Location&daddr=BBS+POLSKA+SP.+Z+O.O." className="link">Google Maps</a></li>
                            </ul>
                        </div>
                    </div>
                    <br/><br/>
                    <small>© {new Date().getFullYear()}, wszelkie prawa zastrzeżone, <a href="/polityka-prywatnosci" className="link">Polityka prywatności</a> </small>
                </div>
            </div>

        </div>
    )
}

export default Footer
