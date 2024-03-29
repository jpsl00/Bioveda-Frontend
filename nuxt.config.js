export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Bioveda: Ayurveda e Bem-Estar',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1.0',
      },
      {
        name: 'title',
        content: 'Bioveda',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Bioveda: Ayurveda e Bem-Estar',
      },

      {
        name: 'og:title',
        content: 'Bioveda',
      },
      {
        name: 'og:description',
        content: 'Bioveda: Ayurveda e Bem-Estar',
      },
      {
        name: 'og:image',
        content: '~/assets/bioveda-logo.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.15.1/css/all.css',
      },
    ],
    script: [
      /* { src: '/js/navbar.js' } */
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/axios-accessor' },
    { src: '@/plugins/vuex-persist', mode: 'client' },
    { src: '@/plugins/vee-validate', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',

    // Font Awesome
    /* '@nuxtjs/fontawesome', */

    'nuxt-compress',

    /* '@nuxtjs/composition-api', */
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL:
      'http://localhost:7000' /* 'https://ies300-backend.herokuapp.com/', */,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vee-validate/dist/rules'],
    extend(config, { isClient }) {
      if (isClient) config.optimization.splitChunks.maxSize = 200000
    },
    /* extractCSS: true, */
    parallel: true,
  },

  // Buefy Configuration
  buefy: {
    css: false,
    materialDesignIcons: false,
    defaultIconPack: 'fas',
  },

  // Font Awesome Config
  fontawesome: {
    icons: {
      solid: true,
    },
  },

  // Nuxt-Compress Config
  'nuxt-compress': {
    gzip: {
      cache: true,
    },
    brotli: {
      threshold: 1024,
    },
  },

  loadingIndicator: {
    name: 'circle',
    color: '#532F9B',
    background: 'white',
  },

  // ! Workaround for nuxt-compose issue
  // * https://github.com/nuxt-community/composition-api/issues/44
  /* generate: {
    interval: 2000,
  }, */
}
