<template lang='pug'>

.default-layout
	main#main
		NuxtPage.page
</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='ts'>
export default {
	name: 'DefaultLayout',

	data: function() {
		return {
			isMobileApp: false
		};
	},

	mounted: function() {
		// Log SSG rendered
		return console.debug('SSG rendered');
	}
};

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->


