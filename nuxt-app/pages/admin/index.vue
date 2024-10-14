<template>
  <iframe :src="studioUrl" style="width: 100%; height: 100vh; border: none;"></iframe>
</template>

<script setup>
const studioUrl = 'https://nuxt-sanity-demo.sanity.studio/'
</script>