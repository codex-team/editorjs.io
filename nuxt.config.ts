import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {rel: 'icon', type: 'image/png', href: 'favicon.png'}
      ],
      title: 'Editor.js'
    }
  },
  typescript: {
    typeCheck: true
  },
  build: {
    transpile: ['@codexteam/icons']
  },
  postcss: {
    plugins: {
      'postcss-preset-env': {},
      'postcss-nested': {}
    }
  },
  css: [
    'modern-css-reset',
    '~/assets/styles/vars.pcss'
  ],
})
