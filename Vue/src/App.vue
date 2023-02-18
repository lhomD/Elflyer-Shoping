<template>
  <div class="min-h-screen bg-slate-50">
    <header-section />
    <router-view />
    <footer-section />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import HeaderSection from "./components/HeadeSection.vue";
import FooterSection from "./components/FooterSection.vue";
</script>
