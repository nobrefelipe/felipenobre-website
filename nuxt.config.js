
const shrinkRay = require('shrink-ray-current');

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    "@/assets/scss/main.scss"
  ],

  render: {

    compressor: shrinkRay(),

    bundleRenderer: {

      // shouldPrefetch: (file, type) => {
      //     return ['script', 'style'].includes(type)
      // }

    },

    http2: {
      push: true
    },

    static: {
      maxAge: "1y",
    }

  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/ga.js', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
