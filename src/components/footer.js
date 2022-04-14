import * as React from "react"
import logoFooter from "../images/logo-footer.svg"
import {Link} from "gatsby";


const Footer = () => {
    return(
        <div className="footer">

            <div className="grid">
                <div className="col-6">
                    <img src={logoFooter} alt="BBS" className="footer__image"/>
                </div>
                <div className="col-6">
                    <div className="grid padding-left-xl">
                        <div className="col-4">
                            <ul>
                                <li>Sitemap</li>
                                <li><Link to="/o-nas" className="link">O nas</Link></li>
                                <li><a href="" className="link">Usługi</a></li>
                                <li><a href="" className="link">Realizacje</a></li>
                                <li><a href="" className="link">Kontakt</a></li>
                                <li><a href="" className="link">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                <li>Adres</li>
                                <li>Królewiecka 214</li>
                                <li>82-300, Elbląg</li>
                                <li>T (215) 525-4510</li>
                                <li><a href="" className="link">info@bbs.com</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                <li>Social</li>
                                <li><a href="" className="link">Facebook</a></li>
                                <li><a href="" className="link">Google Maps</a></li>
                            </ul>
                        </div>
                    </div>
                    <br/><br/>
                    <small className="padding-left-xl">© {new Date().getFullYear()}, wszelkie prawa zastrzeżone </small>
                </div>
            </div>

        </div>
    )
}

export default Footer
