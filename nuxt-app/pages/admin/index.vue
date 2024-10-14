<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<template lang="pug">
	iframe(:src="studioUrl" style="width: 100%; height: 100vh; border: none;")
</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script setup>
const studioUrl = 'http://localhost:3333'
</script>