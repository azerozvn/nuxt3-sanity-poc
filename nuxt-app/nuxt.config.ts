import { locales } from './nuxt-app-2.6/data/locales'
import { appDir } from './nuxt-app-2.6/data/settings'
import { isTrue } from './nuxt-app-2.6/lib/helpers'

export default defineNuxtConfig({
	devtools: { enabled: true },
	compatibilityDate: '2024-10-06',

	runtimeConfig: {
		// App env
		APP_ENV: process.env.APP_ENV,
		ALGOLIA_APP_ENV: process.env.ALGOLIA_APP_ENV,
		ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
		ALGOLIA_SEARCH_KEY: process.env.ALGOLIA_SEARCH_KEY,
		SITE_CATEGORY: process.env.SITE_CATEGORY,
		BASE_DIRECTORY: process.env.BASE_DIRECTORY,
		CIIC_MODE: process.env.CIIC_MODE,

		SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
		SANITY_DATASET: process.env.SANITY_DATASET,
		// Never use CMS_SITE from .env. Instead, rely on `set-locale` to determine this from the i18n package.
		// CMS_SITE: null,

		// Public config data
		public: {
			allowGuestAuth: isTrue(process.env.ALLOW_GUEST_AUTH),
			mixpanel: {
				prodToken: process.env.MIXPANEL_TOKEN,
				devToken: process.env.MIXPANEL_TOKEN_DEV,
			},
			isWorkHub: process.env.SITE_CATEGORY == 'work-hub',
			isEssentials: process.env.SITE_CATEGORY == 'essentials',
			isCIIC: isTrue(process.env.CIIC_MODE)
		},
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
	// Need to update pointing to an index entry file
	// instead of directory
	modules: [
		'@nuxtjs/sanity'
	// 	'vue-ssr-carousel/nuxt',
	// 	'~/modules/ssg-i18n-routes',
	// 	'~/modules/ssg-work-hub-homepages',
	// 	'@cloak-app/boilerplate',
	// 	'@cloak-app/i18n',
	// 	'@cloak-app/craft',
	// 	'@cloak-app/copy',
	// 	'@cloak-app/visual',
	// 	'@nuxtjs/firebase',
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

	// Does not take a function to return conditional plugins
	plugins: [
		'~/plugins/sanity/sanity-image'
		// getPlugins(isTrue(process.env.CIIC_MODE)),
	],

	build: {
		// Transpile instantsearch to JS/ES6
		transpile: ['instantsearch'] 
	},

	routeRules: {
		'/admin/**': { ssr: false }
	},

 // Need to understand how nitro replace generate
	// Need to config Netlify appDir
	// If SSR remove this entirely
	// router: {
	// 	base: `${appDir}/`
	// },
	// From https://github.com/BKWLD/vue-routing-anchor-parser
	// might be removable
	// anchorParser: {
	// 	internalUrls: [/^https?:\/\/lyra-essentials\.([^\.]+\.)?bukwild\.com/],
	// 	externalPaths: [ /\/search\-care/ ]
	// },
	// See https://vuefire.vuejs.org/nuxt/getting-started.html
	// firebase: {
	// 	config: {
	// 		apiKey: process.env.FIREBASE_API_KEY,
	// 		authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	// 		projectId: process.env.FIREBASE_PROJECT_ID,
	// 		storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	// 		messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	// 		appId: process.env.FIREBASE_APP_ID
	// 	},
	// 	services: {
	// 		auth: true,
	// 		firestore: true
	// 	}
	// },
	// Update cloak to support Nuxt3
	// cloak: {
	// 	boilerplate: {
	// 		siteName: 'Essentials',
	// 		excludedModules: [
	// 			'credits',
	// 			'gtm',
	// 			'pwa',
	// 			'robots',
	// 			'sitemap',
	// 		]
	// 	},
	// 	craft: {
	// 		generatePages: false,
	// 		pageTypenames: getPageTypenames(isTrue(process.env.CIIC_MODE)),
	// 	},
	// 	visual: {
	// 		placeholderColor: '#ffffff',
	// 		srcsetWidths: [ 3840, 1920, 1440, 1024, 768, 425, 210 ],
	// 	},
	// 	i18n: {
	// 		currentCode: 'en',
	// 		locales,
	// 		generateJson: true,
	// 		craft: {
	// 			categories: [
	// 				'Articles',
	// 				'Audio Player',
	// 				'Courses',
	// 				'Events',
	// 				'Filters',
	// 				'General',
	// 				'Navigation',
	// 				'Search',
	// 				'Tools',
	// 				'Topics',
	// 				'Units',
	// 				'Users',
	// 			]
	// 		}
	// 	}
	// },
	// image: {
	// 	provider: 'imgix',
	// 	domains: ['assets.cdn.lyra-essentials.bukwild.com'],
	// 	imgix: {
	// 		baseURL: 'https://lyra-essentials.imgix.net',
	// 	},
	// 	presets: {
	// 		imgix: {
	// 			modifiers: {
	// 				q: 90
	// 			}
	// 		}
	// 	}
	// },
	// i18n: {
	// 	differentDomains: false,
	// 	strategy: 'prefix_except_default',
	// }
	nitro: {
		output: {
			dir: `dist${appDir}`
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

function getPageTypenames(ciicMode: boolean) {
	var pageTypeNames: string[] = []
	if (!ciicMode) {
		pageTypeNames = [
			'towers_towers_Entry',
			'categories_categories_Entry',
			'courses_courses_Entry',
			'events_events_Entry',
		]
	}
	return [
		...pageTypeNames,
		'articles_articles_Entry'
	]
}

function getPlugins(ciicMode: boolean) {
	if (!ciicMode) {
		return [
			{ src: 'plugins/set-locale' },
			{ src: 'plugins/support-rtl', mode: 'client' },
			{ src: 'plugins/apply-site-category' },
			{ src: 'plugins/apply-window-vars', mode: 'client'},
			{ src: 'plugins/hydrate-user', mode: 'client' },
			{ src: 'plugins/mixpanel', mode: 'client' },
			{ src: 'plugins/helper' },
			{ src: 'plugins/instantsearch' },
			{ src: 'plugins/interaction-handlers', mode: 'client' },
			{ src: 'plugins/route-change', mode: 'client' }
		]
	} else {
		return [
			{ src: 'plugins/set-locale' },
			{ src: 'plugins/support-rtl', mode: 'client' },
			{ src: 'plugins/apply-site-category' },
			{ src: 'plugins/hydrate-user', mode: 'client' },
			{ src: 'plugins/helper' },
			{ src: 'plugins/interaction-handlers', mode: 'client' },
			{ src: 'plugins/route-change', mode: 'client' },
		]
	}
}