import en from "../translations/en.json"
import nl from "../translations/nl.json"
// @ts-ignore
import { createI18n } from "vue-i18n"

export default createI18n({
   locale: import.meta.env.VITE_DEFAULT_LOCALE,
   fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
   legacy: false,
   messages:{
      en,
      nl
   }
})