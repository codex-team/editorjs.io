import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    ]
})
