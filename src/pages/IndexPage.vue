<template>
  <q-page class="flex">
    <HomePage @logo-updated="updateLogo"></HomePage>
    <SystemHeader :logoSrc="logoSrc"></SystemHeader>
  </q-page>
</template>

<script setup>
import HomePage from "src/components/HomePage.vue";
import SystemHeader from "src/components/SystemHeader.vue";
import { ref } from "vue";
import imgLogo from "../assets/logo.png";

const logoSrc = ref(imgLogo);

const updateLogo = (newLogoSrc) => {
  logoSrc.value = newLogoSrc;
};
</script>
<style></style>
