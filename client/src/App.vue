<template>
  <AppHeader />
  <main class="container">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
</script>
