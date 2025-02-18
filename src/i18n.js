import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt.json';
import es from './locales/es.json';

i18n
  .use(initReactI18next) // Passa i18n para o React
  .init({
    resources: {
      pt: { translation: pt },
      es: { translation: es },
    },
    lng: 'pt', // Define o idioma padrão
    fallbackLng: 'pt', // Idioma de fallback se o idioma atual não estiver disponível
    interpolation: {
      escapeValue: false, // Não precisa de escape para o React
    },
  });

export default i18n;
