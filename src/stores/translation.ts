import { ref } from "vue"
import { defineStore } from "pinia"
// @ts-ignore
import i18n from "vue-i18n"

export const useTranslationStore = defineStore("translation", () => {
   const lang = ref<string>("")
   
   const getSupportedLocales = () => {
      return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
   }

   const getDefaultLocale = () => {
      return import.meta.env.VITE_DEFAULT_LOCALE
   }

   const guessDefaultLocale = () => {

   }

   const switchLocale = (isEng: boolean) => {
      const newLocale = isEng ? "en" : "nl"
      document.querySelector("html")?.setAttribute("lang", newLocale)
      localStorage.setItem("user-locale", newLocale)
   }  

   return { lang, getSupportedLocales, switchLocale, getDefaultLocale }
})