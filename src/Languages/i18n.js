import { createI18n } from 'vue-i18n';
import { ref, watch } from 'vue'; // Import ref and watch from vue

import en from './eng.json';
import sv from './sv.json';

const locale = ref('sv'); // Use a ref to store the locale

const i18n = createI18n({
  legacy: false, // Set to false to use Vue 3 composition API
  locale: locale.value,
  messages: {
    en: en,
    sv: sv,
  },
});

// Use watch to update i18n locale whenever the locale ref changes
watch(locale, (newVal) => {
  i18n.global.locale = newVal;
});

// Add a function to directly set the locale
function setI18nLocale(localeValue) {
  locale.value = localeValue;
}

export { i18n, locale, setI18nLocale }; // Export the i18n instance, the locale ref, and the setI18nLocale function
export default i18n;
