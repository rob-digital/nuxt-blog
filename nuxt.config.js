export default {
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'maximillian-nuxt-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cool website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' },
    ]
  },
  // customise loading bar
  loading: {
    color: 'blue',
    height: '5px',
    throttle: 0
   },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // eg. ~assets/styles/main.css
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  // run before your app starts
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  // extends functionality
  modules: [
    '@nuxtjs/axios',
  ],
  // axios: {
  //   baseURL: process.env.BASE_URL || 'https://nuxt-blog-d4e8e-default-rtdb.europe-west1.firebasedatabase.app'
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-d4e8e-default-rtdb.europe-west1.firebasedatabase.app'
  },
  transition: {
    name: 'fade', // 'fade' - this is the first part of the transition name from '~assets/styles/main.css'
    mode: 'out-in'
  }
}
