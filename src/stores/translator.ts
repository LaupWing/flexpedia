import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useTranslatorStore = defineStore("translator", () => {
   const totallyNotSafeSecret = "flexpedia"
  
   return { 
      totallyNotSafeSecret 
   }
})