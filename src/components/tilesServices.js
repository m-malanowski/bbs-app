import * as React from "react"
import icon1 from "../images/icon1.svg"
import icon2 from "../images/icon2.svg"
import icon3 from "../images/icon3.svg"


const Tiles = () => {
    return (
        <section>
            <div>
                <div className="grid gap-xxl">
                    <div className="col-6">
                        <div className="tile tile--single">
                            <img src={icon1} alt="BBS" className="tile__icon"/>
                            <h5 className="tile__heading">EQUITY ENGAGEMENT</h5>
                            <p className="tile__description">System audits and consulting with experts with deep
                                industry knowledge
                            </p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="grid padding-x-md padding-y-xl">
                            <h3>By harnessing the power of smart meters, big data, and machine learning, we raise the IQ
                                of your energy assets and allow you to buy or sell electricity from the palm of your
                                hand.
                                Join us today as we illuminate a path to an affordable, clean, energy future.</h3>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tiles tiles--services">
                <div className="tile">
                    <img src={icon1} alt="BBS" className="tile__icon"/>
                    <h5 className="tile__heading">EQUITY ENGAGEMENT</h5>
                    <p className="tile__description">System audits and consulting with experts with deep industry
                        knowledge</p>
                </div>
                <div className="tile">
                    <img src={icon1} alt="BBS" className="tile__icon"/>
                    <h5 className="tile__heading">EQUITY ENGAGEMENT</h5>
                    <p className="tile__description">System audits and consulting with experts with deep industry
                        knowledge</p>
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
            </div>
        </section>
    )
}

export default Tiles
