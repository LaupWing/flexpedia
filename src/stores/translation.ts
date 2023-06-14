import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useTranslationStore = defineStore("translation", () => {
   const lang = ref(0)
   
   const getSupportedLocales = () => {
      return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
   }


   return { lang, getSupportedLocales }
})