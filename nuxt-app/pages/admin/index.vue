<template>
	<iframe :src="studioUrl" style="width: 100%; height: 100vh; border: none;"></iframe>
</template>

<script setup>
const studioUrl = 'http://localhost:3333'
</script>