<template>
   <header class="flex flex-col text-main">
      <div class="px-4 py-2">
         <img 
            class="w-20" 
            src="https://www.flexpedia.nl/wp-content/uploads/2022/05/logo.svg" 
            alt=""
         >
      </div>
      <nav class="flex flex-col my-auto">
         <RouterLink to="/">Home</RouterLink>
         <RouterLink to="/about">About</RouterLink>
      </nav>
   </header>
   <div class="flex-1 p-4 flex">
      <RouterView />
   </div>
</template>


<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>


<style scoped>

</style>
