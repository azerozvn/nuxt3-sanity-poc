<template lang='pug'>

.tower
	h1 This is a tower page
	h2 {{ data[0].title }}


</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script setup>

name: 'Tower'
const query = groq`*[_type == "post"]`
const { data } = await useSanityQuery(query)

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->
