import * as React from "react"


const Tiles = () => {
    return (
        <section>
            <div>
                <div className="grid ">
                    <div className="col-6@md tiles tiles--about">
                        <div className="tile tile--single">
                            <h5 className="tile__heading">Usługi projektowe</h5>
                            <p className="tile__description">Świadczymy usługi na wykonanie projektu budowlanego, wykonawczego, branżowego, rozwiązań indywidualnych.</p>
                        </div>
                        <div className="tile tile--single">
                            <h5 className="tile__heading">Prefabrykacja konstrukcji</h5>
                            <p className="tile__description">Oferujemy dostawę konstrukcji stalowej obiektu, zgodnie z wydaną dokumentacją techniczną.</p>
                        </div>
                    </div>
                    <div className="col-6@md">
                        <div className="grid  padding-xl">
                            <h3>Oferowane usługi:</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tiles tiles--services">
                <div className="tile">
                    <h5 className="tile__heading">Montaż konstrukcji</h5>
                    <p className="tile__description">Zapewniamy kompleksowy montaż konstrukcji stalowych. Posiadamy własne brygady montażowe z wieloletnim doświadczeniem.</p>
                </div>
                <div className="tile">
                    <h5 className="tile__heading">Nadzór Inwestycyjny</h5>
                    <p className="tile__description">Świadczymy usługi indywidualne związane z nadzorem technicznym oraz kontrolą budżetu budowanych obiektów. </p>
                </div>

                <div className="tile">
                    <h5 className="tile__heading">Dachy płaskie</h5>
                    <p>Posiadamy wieloletnie doświadczenie w montażu dachów płaskich z technologii membran PVC.Posiadamy wieloletnie doświadczenie w montażu dachów płaskich z technologii membran PVC.</p>
                </div>

                <div className="tile">
                    <h5 className="tile__heading">Przeglądy okresowe</h5>
                    <p>Wykonujemy przeglądy okresowe obiektów budowlanych - zgodnie z wymaganiami i obowiązującymi przepisami.</p>
                </div>
            </div>
        </section>
    )
}

export default Tiles
