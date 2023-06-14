import { ref } from "vue"
import { defineStore } from "pinia"
// @ts-ignore
import i18n from "vue-i18n"
const supportedLocale =  import.meta.env.VITE_SUPPORTED_LOCALES.split(",") as Array<string>
const defaultLocale = import.meta.env.VITE_DEFAULT_LOCALE
const userLocale =  window.navigator.language || defaultLocale

export const useTranslationStore = defineStore("translation", () => {
   const lang = ref<string>(guessDefaultLocale())
   

   function isSupported(locale: string){
      return supportedLocale.includes(locale)
   }

   function guessDefaultLocale() {
      const persistedLocale = getPersistedLocale()
      if (persistedLocale){
         return persistedLocale
      }
      if(isSupported(userLocale)){
         return userLocale
      }
      return defaultLocale
   }

   function getPersistedLocale(){
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
      supportedLocale, 
      switchLocale, 
      defaultLocale,
      getPersistedLocale,
      isSupported,
      userLocale
   }
})