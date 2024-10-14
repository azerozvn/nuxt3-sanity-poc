<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<template lang='pug'>

.posts
	card(v-for='post in posts || []' :key='post.id' :post='post')
	p(v-if='!posts?.length') There is no post

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script setup lang="ts">
import { type Post } from '/types/Post'

const query = groq`*[_type == "post"]`
const { data: posts } = await useSanityQuery<Post[]>(query)

</script>

<script lang="ts">
export default {
	name: 'Posts'
}
</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang="stylus" scoped>

</style>