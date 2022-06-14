import React from "react"
import {useTranslation} from "gatsby-plugin-react-i18next";
// import {Link} from "gatsby";
// import FormStyles from "./Form.module.scss"


const Form = () => {
    const { t } = useTranslation();

    return (
        <div className="contact-form" >
            <form name="contact" action="https://formspree.io/f/mgedpbwb"  method="post"  data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-contact" value="contact" />
                <div>
                    <input
                        type="text"
                        name="imię"
                        autoComplete="off"
                        required/>
                    <label htmlFor="name">
                        <span>{ t('form.name') }</span>
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

                <div>
                    <input
                        type="text"
                        name="telefon"
                        autoComplete="off"
                        required />
                    <label htmlFor="phone">
                        <span>{ t('form.phone') }</span>
                    </label>
                </div>
                <small>{ t('form.agreements') }</small>

                <div className="message-div">
                        <textarea
                            type="text"
                            name="wiadomość"
                            autoComplete="off"
                            required
                            rows="10" />
                    <label htmlFor="message">
                        <span>{ t('form.message') }</span>
                    </label>
                </div>
                <button type="submit"  className="btn">{ t('form.send') }</button>
            </form>
        </div>
    )
}
export default Form