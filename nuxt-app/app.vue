<template lang='pug'>

  .container
    header.header
      h2 Nuxt + Sanity
      nav
        ul
          li: nuxt-link(to='/') Home
          li: nuxt-link(to='/about') About
          li: nuxt-link(to='/post') Post
    
    main: nuxt-page
</template>

<script setup lang="ts">
const route = useRoute()
const { enabled: previewEnabled, inFrame } = useSanityVisualEditingState()
</script>

<style>

</style>
