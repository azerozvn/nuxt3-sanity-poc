<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<template lang='pug'>

header.header
	h2 Nuxt + Sanity
	nav
		ul
			li: nuxt-link(to='/') Home
			li: nuxt-link(to='/about') About
			li: nuxt-link(to='/post') Post
			li: nuxt-link(to='/admin') Admin

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script setup lang="ts">
const route = useRoute()
</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang="stylus" scoped>

</style>