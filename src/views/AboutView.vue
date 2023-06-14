<template>
   <main class="custom-container">
      <h1 class="text-4xl">{{ t("home.greeting") }}</h1>
   </main>
</template>

<script setup lang="ts">
// @ts-ignore
import { useI18n } from "vue-i18n"

const {t} = useI18n()
</script>