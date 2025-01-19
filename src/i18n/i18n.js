import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import it from './it.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        it: { translation: it },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: { escapeValue: false }, // Already protected by XSS attacks
});

export default i18n;
