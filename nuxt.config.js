export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'noshi design consulting', //process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'noshi is a two person, los angeles based, design studio focused on developing digital products', //process.env.npm_package_description || '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon-',
        href: '/favicon/favicon-32x32.png',
      },
    ],
    script: [
      //gsap
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js' },
      //motionpath
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/MotionPathPlugin.min.js',
      },
      //text plugin for typwriter
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/TextPlugin.min.js',
      },
      //scroll trigger!
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js',
      },
    ],
  },
  pwa: {
    // icon: {
    //   src: '/favicon/favicon-32x32.png',
    // },

    manifest: {
      name: 'noshi design studio',
      short_name: 'noshi design studio',
      lang: 'en',
      description:
        'noshi is a two person, los angeles based, design studio focused on developing digital products',
      icons: [
        {
          src: '/favicon/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: '/favicon/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          src: '/favicon/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: '/favicon/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: '/favicon/mstile-150x150.png',
          sizes: '150x150',
          type: 'image/png',
        },
        {
          src: '/favicon/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/favicon/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
  sitemap: {
    hostname: 'https://www.noshi.cx',
    // gzip: true,
    exclude: ['/admin/**'],
    routes: ['/work/ux-design-dinosaur-toolkit', '/work/nfl-verizon-20201028'],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', { icon: false }],
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/markdownit',
    'nuxt-clipboard2',
    '@nuxtjs/sitemap',
    // 'smoothscroll-polyfill',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    html: true,
    use: ['markdown-it-div', 'markdown-it-attrs'],
    injected: true,
  },
  router: {
    middleware: 'pages',
  },
}
