export default defineNuxtConfig({
	devtools: { enabled: true },
	compatibilityDate: '2024-10-01',

	runtimeConfig: {
		// App env
		APP_ENV: process.env.APP_ENV,
		SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
		SANITY_DATASET: process.env.SANITY_DATASET,
	},

 app: {
		head: {
			meta: [
				{
					hid: 'robots',
					name: 'robots',
					content: 'noindex'
				},
				{
					hid: 'viewport',
					name: 'viewport',
					content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				}
			]
		}
	},

	// Move all buildModules to modules
	modules: [
		'@nuxtjs/sanity'
	],

	sanity: {
		projectId: process.env.SANITY_PROJECT_ID,
		dataset: process.env.SANITY_DATASET,
		useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: process.env.SANITY_API_VERSION || '2024-03-15',
    visualEditing: {
      studioUrl: process.env.SANITY_STUDIO_URL || 'http://localhost:3333',
      token: process.env.SANITY_API_READ_TOKEN,
      stega: true,
    },
	},

	plugins: [
		'~/plugins/sanity/sanity-image'
	],

	routeRules: {
		'/admin/**': { ssr: false }
	},

	nitro: {
		output: {
			dir: `dist`
		}
	},

	vite: {
		css: {
			preprocessorOptions: {
				stylus: {}
			}
		}
	}
})

// Cast values to boolan
function isTrue(val) {
	switch (val) {
		case 1:
		case '1':
		case true:
		case 'true':
			return true
		default:
			return false
	}
}