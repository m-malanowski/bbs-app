import * as React from "react"
import icon1 from "../images/icon1.svg"
import icon2 from "../images/icon2.svg"
import icon3 from "../images/icon3.svg"
import Counter from "./counter";


const Tiles = () => {
    return (
        <section>
            <div>
                <div className="grid ">
                    <div className="col-6@md tiles tiles--top">
                        <div className="tile tile--single">
                            {/*<img src={icon1} alt="BBS" className="tile__icon"/>*/}
                            <span className="tile__number">20</span>
                            <h5 className="tile__heading">Lat doświadczenia</h5>
                            <p className="tile__description">W tym czasie zdążyliśmy poznać rynek od podszewki i śmiało możemy nazwać się ekspertami</p>
                        </div>
                        <div className="tile tile--single"></div>
                    </div>
                    <div className="col-6@md">
                        <div className="grid  padding-xl">
                            <h3>Ponad <span>20 lat</span> rzetelnej oraz sumiennej pracy sprawiło, że stajemy się uznaną marką w branży. Od kilku lat notujemy okres  dynamicznego rozwoju, zatrudniamy już ponad <span>X</span> pracowników</h3>
                            <br/>
                            <h3><span>BBS </span>Polska w liczbach:</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tiles tiles--services">
                <div className="tile">
                    <span className="tile__number">284</span>
                    <h5 className="tile__heading">Zakończonych projektów</h5>
                    <p className="tile__description">Dzięki swojemu zaangażowaniu
                        i współpracy, osiągamy wyjątkowe rezultaty.</p>
                </div>
                <div className="tile">
                    <span className="tile__number">30</span>
                    <h5 className="tile__heading">Wykwalifikowanych monterów</h5>
                    <p className="tile__description">Zatrudniające obecnie ponad 30 wysoko wykwalifikowanych pracowników.</p>
                </div>

                <div className="tile">
                    <span className="tile__number">427</span>
                    <h5 className="tile__heading">Zadowolonych klientów</h5>
                    <p>Referencje, otrzymane od naszych klientów potwierdzają wysoką jakość świadczonych przez nas usług.</p>
                </div>

                <div className="tile">
                    <Counter from={0} to={6}></Counter>
                    <h5 className="tile__heading">Kraje, w których realizowaliśmy projekty</h5>
                    <p>Posiadamy rozbudowane zaplecze logistyczne</p>
                </div>
            </div>
        </section>
    )
}

export default Tiles
