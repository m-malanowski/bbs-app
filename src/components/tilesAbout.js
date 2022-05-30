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
                                <h3>Ponad <span>20</span> lat rzetelnej oraz sumiennej pracy sprawiło, że z roku na rok budujemy swoją pozycję i stajemy się uznaną marką w branży. Od kilku lat notujemy okres dynamicznego rozwoju, Inwestorzy wracają do nas po latach co jest najlepszą wizytówką firmy i motywacją do jeszcze cięższej pracy</h3>
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
                    <span className="tile__number">100 – 45 K</span>
                    <FadeInWhenVisible delay={0.8}>
                        <h5 className="tile__heading">Metrów kwadratowych</h5>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={1.1}>
                        <p>Powierzchnia obiektu nie ma dla nas znaczenia, podejmujemy się każdej realizacji, dzisiaj 100 m2 jutro kilka tysięcy...</p>
                    </FadeInWhenVisible>

                </div>
            </div>
        </section>
    )
}

export default Tiles
