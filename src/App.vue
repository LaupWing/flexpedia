<template>
   <header class="flex flex-col text-main">
      <div class="px-4 py-2">
         <img class="w-20" src="https://www.flexpedia.nl/wp-content/uploads/2022/05/logo.svg" alt="">
      </div>
      <nav class="flex flex-col my-auto gap-y-10 text-sm">
         <RouterLink 
            class="flex flex-col items-center gap-y-1 relative py-2 justify-center opacity-30" v-for="(link, index) in links" 
            :key="index" 
            :to="link.href"
         >
            <component :is="link.icon" />
            {{ t(link.text) }}
         </RouterLink>
      </nav>
      <label class="relative inline-flex items-center cursor-pointer mx-auto mb-6">
         <input 
            type="checkbox" 
            :checked="isEnglish" 
            @change="handleChange"
            class="sr-only peer"
         >
         <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400"></div>
         <span class="ml-3 text-sm font-medium text-main">EN</span>
      </label>
   </header>
   <div class="flex-1 p-4 pl-0 flex">
      <RouterView />
   </div>
</template>


<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import IconHome from "./components/icons/IconHome.vue"
import IconInfo from "./components/icons/IconInfo.vue"
import IconLock from "./components/icons/IconLock.vue"
// @ts-ignore
import { useI18n } from "vue-i18n"
import {useTranslationStore} from "./stores/translation"
import { computed } from "vue"

const translationStore = useTranslationStore()
const {t} = useI18n()

const handleChange = (e: Event) => {
   console.log((e.target as HTMLInputElement).checked)
}

const isEnglish = computed(() => {
   return translationStore.lang === "en"
})

const links: Array<{
   href: string,
   icon: any,
   text: string
}> = [
      {
         href: "/",
         icon: IconHome,
         text: "nav.home"
      },
      {
         href: "/about",
         icon: IconInfo,
         text: "nav.about"
      },
      {
         href: "/secret",
         icon: IconLock,
         text: "nav.secret"
      }
   ]
</script>

<style scoped>
.router-link-active {
   opacity: 100% !important;
}

.router-link-active::after {
   content: "";
   width: 5px;
   height: 100%;
   background-color: white;
   position: absolute;
   right: 0;
   border-radius: 3px 0 0 3px;
}
</style>