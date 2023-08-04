
import { createI18n } from 'vue-i18n';

import en from './eng.json';
import sv from './sv.json';

const i18n = createI18n({
  locale: 'sv', // Default locale
  messages: {
    en: en,
    sv: sv,
  },
});

export default i18n;
