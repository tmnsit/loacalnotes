export default {


  serverMiddleware: [
  ],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtfront',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=B612+Mono|Cabin:400,700&display=swap' },
    ]
  },
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: ''
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/fonts/icomoon/style.css',
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/jquery-ui.css',
    '@/assets/css/owl.carousel.min.css',
    '@/assets/css/owl.theme.default.min.css',
    '@/assets/css/jquery.fancybox.min.css',
    '@/assets/css/bootstrap-datepicker.css',
    '@/assets/fonts/flaticon/font/flaticon.css',
    '@/assets/css/aos.css',
    '@/assets/css/jquery.mb.YTPlayer.min.css',
    '@/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  telemetry: false,

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { "loose": true }]]
    }
  }
}
