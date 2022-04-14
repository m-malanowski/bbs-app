import * as React from "react"
import logoFooter from "../images/logo-footer.svg"
import {Link} from "gatsby";


const Footer = () => {
    return(
        <div className="footer">

            <div className="grid">
                <div className="col-6@md">
                    <img src={logoFooter} alt="BBS" className="footer__image"/>
                </div>
                <div className="col-6@md">
                    <div className="grid footer__links">
                        <div className="col-4@xs">
                            <ul>
                                <li>Sitemap</li>
                                <li><Link to="/o-nas" className="link">O nas</Link></li>
                                <li><a href="" className="link">Usługi</a></li>
                                <li><a href="" className="link">Realizacje</a></li>
                                <li><a href="" className="link">Kontakt</a></li>
                                <li><a href="" className="link">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-4@xs">
                            <ul>
                                <li>Adres</li>
                                <li>Królewiecka 214</li>
                                <li>82-300, Elbląg</li>
                                <li>T (215) 525-4510</li>
                                <li><a href="" className="link">info@bbs.com</a></li>
                            </ul>
                        </div>
                        <div className="col-4@xs">
                            <ul>
                                <li>Social</li>
                                <li><a href="" className="link">Facebook</a></li>
                                <li><a href="" className="link">Google Maps</a></li>
                            </ul>
                        </div>
                    </div>
                    <br/><br/>
                    <small>© {new Date().getFullYear()}, wszelkie prawa zastrzeżone </small>
                </div>
            </div>

        </div>
    )
}

export default Footer
