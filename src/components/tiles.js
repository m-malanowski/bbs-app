import * as React from "react"
import icon1 from "../images/icon1.svg"
import icon2 from "../images/icon2.svg"
import icon3 from "../images/icon3.svg"


const Tiles = () => {
    return (
        <section className="tiles tiles--index">
            <div className="tile"></div>
            <div className="tile">
                <img src={icon1} alt="BBS" className="tile__icon"/>
                <h5 className="tile__heading">EQUITY ENGAGEMENT</h5>
                <p className="tile__description">System audits and consulting with experts with deep industry knowledge</p>
            </div>

            <div className="tile">
                <img src={icon2} alt="BBS" className="tile__icon"/>
                <h5>EQUITY ENGAGEMENT</h5>
                <p>System audits and consulting with experts with deep industry knowledge</p>
            </div>

            <div className="tile">
                <img src={icon3} alt="BBS" className="tile__icon"/>
                <h5>EQUITY ENGAGEMENT</h5>
                <p>System audits and consulting with experts with deep industry knowledge</p>
            </div>
        </section>
    )
}

export default Tiles
