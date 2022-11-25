import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import jaTranslation from "./locales/ja/translations.json";

const resources = {
  ja: {
    translation: jaTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const t: (text: string) => string = i18n.t.bind(i18n);
