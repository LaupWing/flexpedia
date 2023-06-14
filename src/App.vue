<template>
   <header class="flex flex-col text-main">
      <div class="px-4 py-2">
         <img 
            class="w-20" 
            src="https://www.flexpedia.nl/wp-content/uploads/2022/05/logo.svg" 
            alt=""
         >
      </div>
      <nav class="flex flex-col my-auto gap-y-10 text-sm">
         <RouterLink 
            class="flex flex-col items-center gap-y-1 relative py-2 justify-center opacity-30"
            v-for="(link, index) in links"
            :key="index"
            :to="link.href"
         >
            <component :is="link.icon"/>
            {{ link.text }}
         </RouterLink>
      </nav>
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

const links:Array<{
   href: string,
   icon: any,
   text: string
}> = [
   {
      href: "/",
      icon: IconHome,
      text: "Home"
   },
   {
      href: "/about",
      icon: IconInfo,
      text: "About"
   },
   {
      href: "/secret",
      icon: IconLock,
      text: "Secret"
   }
]
</script>

<style scoped>
.router-link-active {
   opacity: 100%!important;
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