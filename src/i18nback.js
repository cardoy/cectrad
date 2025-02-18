import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: require('./locales/pt.json') },
      es: { translation: require('./locales/es.json') },
    },
    lng: 'pt', // Idioma padrão
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
