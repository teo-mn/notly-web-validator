import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { Translation as En } from './en';
import { Translation as Mn } from './mn';

i18n
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('language') || 'mn',
    fallbackLng: localStorage.getItem('language') || 'mn',
    // debug: true,
    
    resources: {
      en: {
        translation: En,
      },
      mn: {
        translation: Mn,
      },
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
  .then();

export default i18n;
