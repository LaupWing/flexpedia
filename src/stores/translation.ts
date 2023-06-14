import { ref } from "vue"
import { defineStore } from "pinia"
// @ts-ignore
import i18n from "vue-i18n"

export const useTranslationStore = defineStore("translation", () => {
   const lang = ref<string>("")
   
   const getSupportedLocales = () => {
      return import.meta.env.VITE_SUPPORTED_LOCALES.split(",") as Array<string>
   }

   const getDefaultLocale = () => {
      return import.meta.env.VITE_DEFAULT_LOCALE
   }

   const isSupported = (locale: string) => {
      return getSupportedLocales().includes(locale)
   }

   const getUserLocale = () => {
      const locale = window.navigator.language || getDefaultLocale()
      return locale
   }

   const guessDefaultLocale = () => {
      const persistedLocale = getPersistedLocale()

      if (persistedLocale){
         return persistedLocale
      }
   }

   const getPersistedLocale = () => {
      const persistedLocale = localStorage.getItem("user-locale")
      
      if(!persistedLocale){
         return null
      }
      if(isSupported(persistedLocale)){
         return persistedLocale
      } else {
         return null
      }
   }

   const switchLocale = (isEng: boolean) => {
      const newLocale = isEng ? "en" : "nl"
      document.querySelector("html")?.setAttribute("lang", newLocale)
      localStorage.setItem("user-locale", newLocale)
   }  

   return { 
      lang, 
      getSupportedLocales, 
      switchLocale, 
      getDefaultLocale,
      getPersistedLocale,
      isSupported
   }
})