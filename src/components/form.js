import React from "react"
import {Link} from "gatsby";
// import FormStyles from "./Form.module.scss"


const Form = () => {
    return (
        <div className="contact-form" >
            <form name="contact" action="https://formspree.io/f/xrgowgrw"  method="post"  data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-contact" value="contact" />
                <div>
                    <input
                        type="text"
                        name="imię"
                        autoComplete="off"
                        required/>
                    <label htmlFor="name">
                        <span>Imię i Nazwisko</span>
                    </label>
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        required />
                    <label htmlFor="email">
                        <span>Email</span>
                    </label>
                </div>

                {/*<div>*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        name="telefon"*/}
                {/*        autoComplete="off"*/}
                {/*        required />*/}
                {/*    <label htmlFor="phone">*/}
                {/*        <span>Telefon</span>*/}
                {/*    </label>*/}
                {/*</div>*/}

                <div>
                    <input
                        type="text"
                        name="telefon"
                        autoComplete="off"
                        required />
                    <label htmlFor="phone">
                        <span>Telefon</span>
                    </label>
                </div>
                <small>Używając tego formularza zgadzam się na przetwarzanie przekazywanych danych <br/> w celu przygotowania i prezentacji oferty oraz akceptuję politykę prywatności.</small>

                <div className="message-div">
                        <textarea
                            type="text"
                            name="wiadomość"
                            autoComplete="off"
                            required
                            rows="10" />
                    <label htmlFor="message">
                        <span>Wiadomość</span>
                    </label>
                </div>


                {/*<button type="submit">Wyślij zapytanie</button>*/}
                <button type="submit"  className="btn">Wyślij wiadomość</button>

            </form>

        </div>
    )
}
export default Form