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
            class="flex flex-col items-center gap-y-1" 
            to="/"
         >
            <IconHome />
            Home
         </RouterLink>
         <RouterLink 
            class="flex flex-col items-center gap-y-1" 
            to="/about"
         >
            <IconInfo />
            About
         </RouterLink>
      </nav>
   </header>
   <div class="flex-1 p-4 flex">
      <RouterView />
   </div>
</template>


<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import IconHome from "./components/icons/IconHome.vue"
import IconInfo from "./components/icons/IconInfo.vue"
</script>


<style scoped>

</style>
