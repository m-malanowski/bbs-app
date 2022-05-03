import * as React from "react"
import Counter from "./counter";
import FadeInWhenVisible from "./fadeWhenVisible";

const Tiles = () => {
    return (
        <section>
            <div>
                <div className="grid ">
                    <div className="col-6@md tiles tiles--top">
                        <div className="tile tile--single">
                                <span className="tile__number">20</span>

                            <FadeInWhenVisible delay={0.1}>
                                <h5 className="tile__heading">Lat doświadczenia</h5>
                            </FadeInWhenVisible>

                            <FadeInWhenVisible delay={0.4}>
                                <p className="tile__description">W tym czasie zdążyliśmy poznać rynek od podszewki i śmiało możemy nazwać się ekspertami</p>
                            </FadeInWhenVisible>
                        </div>
                        <div className="tile tile--single"></div>
                    </div>
                    <div className="col-6@md">
                        <div className="grid  padding-xl">
                            <FadeInWhenVisible delay={0.1}>
                                <h3>Ponad <span>20 lat</span> rzetelnej oraz sumiennej pracy sprawiło, że stajemy się uznaną marką w branży. Od kilku lat notujemy okres  dynamicznego rozwoju, zatrudniamy już ponad <span>X</span> pracowników</h3>
                            </FadeInWhenVisible>
                            <br/>
                            <FadeInWhenVisible delay={0.4}>
                                <h3><span>BBS </span>Polska w liczbach:</h3>
                            </FadeInWhenVisible>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tiles tiles--services">
                <div className="tile">
                        <span className="tile__number">284</span>
                    <FadeInWhenVisible delay={0.5}>
                        <h5 className="tile__heading">Zakończonych projektów</h5>
                    </FadeInWhenVisible>

                    <FadeInWhenVisible delay={0.8}>
                        <p className="tile__description">Dzięki swojemu zaangażowaniu
                            i współpracy, osiągamy wyjątkowe rezultaty.</p>
                    </FadeInWhenVisible>

                </div>
                <div className="tile">

                        <span className="tile__number">30</span>
                    <FadeInWhenVisible delay={0.6}>
                        <h5 className="tile__heading">Wykwalifikowanych monterów</h5>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={0.9}>
                        <p className="tile__description">Zatrudniające obecnie ponad 30 wysoko wykwalifikowanych pracowników.</p>
                    </FadeInWhenVisible>

                </div>

                <div className="tile">

                        <span className="tile__number">427</span>
                    <FadeInWhenVisible delay={0.7}>
                        <h5 className="tile__heading">Zadowolonych klientów</h5></FadeInWhenVisible>
                    <FadeInWhenVisible delay={1.0}>
                        <p>Referencje, otrzymane od naszych klientów potwierdzają wysoką jakość świadczonych przez nas usług.</p>
                    </FadeInWhenVisible>

                </div>

                <div className="tile">
                        <Counter from={0} to={6}></Counter>
                    <FadeInWhenVisible delay={0.8}>
                        <h5 className="tile__heading">Kraje, w których realizowaliśmy projekty</h5>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={1.1}>
                        <p>Posiadamy rozbudowane zaplecze logistyczne</p>
                    </FadeInWhenVisible>

                </div>
            </div>
        </section>
    )
}

export default Tiles
