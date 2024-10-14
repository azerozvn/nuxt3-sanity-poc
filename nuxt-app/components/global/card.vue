<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<template lang="pug">

	nuxt-link.card(:to='`/post/${post.slug.current}`')
		img.card__cover(
			v-if='post.mainImage' alt='Cover Image'
			:src='$urlFor(post.mainImage).width(500).height(300).url()')
		.card__cover--none(v-else)

		.card__container
			h3.card__title {{ post.title }}
			p.card__excerpt {{ post.excerpt }}
			p.card__date {{ formatDate(post._createdAt) }}

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang="ts" setup>
import type { Post } from '~/types/Post'

defineProps<{ post: Post }>()

function formatDate(date: string) {
	return new Date(date).toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	})
}
</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang="stylus" scoped>

.card 
	display flex
	flex-direction column
	padding var(--space-2)
	padding 9px
	position relative
	border-bottom 1px solid #ced2d9
	color var(--black)
	text-decoration none

	& .card__container
		margin 0 var(--space-1) 0

	& .card__cover
		width 100%
		height 231px
		object-fit cover

	& .card__cover--none
		width 100%
		height 231px
		background var(--black)

	& .card__title
		font-family var(--font-family-sans)
		font-weight 800
		font-size var(--font-size-7)
		line-height var(--line-height-6)
		letter-spacing -0.025em
		margin var(--space-3) 0

	& .card__excerpt
		font-family var(--font-family-serif)
		font-weight 400
		font-size var(--font-size-4)
		line-height var(--line-height-3)
		margin-top 0

	& .card__date
		font-weight 600
		font-family var(--font-family-sans)
		font-size var(--font-size-1)
		margin-top calc(var(----space-4) + 7)

	&hover .card__title
		opacity 0.8
		transition 0.2s

	&first-child
		border-top-left-radius 3px
		border-top-right-radius 3px

	&last-child
		border-bottom-left-radius 3px
		border-bottom-right-radius 3px

@media (min-width 575px)
	.card
		border 1px solid #ced2d9
		border-bottom none

		& .card__title
			margin-top var(--space-4)

		&last-child
			border-bottom 1px solid #ced2d9

@media (min-width 800px)
	.card
		flex-direction row

		& .card__container
			margin 0 var(--space-4) 0

		& .card__cover,
		& .card__cover--none
			min-width 366.5px
			max-width 366.5px
			max-height 231px
</style>
