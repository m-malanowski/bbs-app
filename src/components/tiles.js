import * as React from "react"
import punctuality from "../images/icon3.svg"
import precision from "../images/icon2.svg"
import credibility from "../images/icon1.svg"


const Tiles = () => {
    return (
        <section className="tiles tiles--index">
            <div className="tile"></div>
            <div className="tile">
                <img src={punctuality} alt="BBS" className="tile__icon"/>
                <h5 className="tile__heading">Terminowość</h5>
                <p className="tile__description">Harmonogramam prac uzgadniamy z klientem i na bieżąco go monitorujemy.</p>
            </div>

            <div className="tile">
                <img src={credibility} alt="BBS" className="tile__icon"/>
                <h5 className="tile__heading">Wiarygodność</h5>
                <p>Ciągły dialog z klientem oraz wychodzenie naprzeciw wymaganiom każdego inwestora to elementy, które wyróżniają nas na rynku. </p>
            </div>

            <div className="tile">
                <img src={precision} alt="BBS" className="tile__icon"/>
                <h5 className="tile__heading">Precyzja</h5>
                <p>Precyzja w konstrukcji stalowej to podstawa.</p>
            </div>
        </section>
    )
}

export default Tiles
