import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const windowGlobal = typeof window !== 'undefined' && window

// window.setTimeout('console.log(document.documentElement.lang)', 500);
//
// setTimeout(() => {
//     console.log('you can see me after 2 seconds')
// }, 2000);

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    pl: {
        translation: {
            "Investition": "Twoja Inwestycja z"
        }
    },
    en: {
        translation: {
            "Investition": "Your investition with"
        }
    }
};


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        // lng: (document.documentElement.lang) || 'pl',
        lng: 'pl',
        // lng: windowGlobal.localStorage.getItem("lang") || 'pl',
        // lng: localStorage.getItem("lang"),

        fallbackLng: 'pl',
        keySeparator: '.', // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;