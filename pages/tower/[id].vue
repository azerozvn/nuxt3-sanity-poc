<template lang='pug'>

.tower
	h1 This is a tower page

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script setup>

name: 'Tower'
const query = groq`*[_type == "post"]`
const { data } = await useSanityQuery(query)

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->
