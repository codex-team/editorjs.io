/**
 * https://v3.nuxtjs.org/api/configuration/nuxt-config
 */
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
  postcss: {
    plugins: {
      'postcss-preset-env': {},
      'postcss-nested': {},
      'postcss-apply': {}
    }
  },
  css: [
    'modern-css-reset',
    '~/assets/styles/vars.pcss'
  ],
  modules: [
    '@codexteam/nuxt-icons',
    '~/modules/amplitude/index.ts',
    'yandex-metrika-module-nuxt3'
  ],
  runtimeConfig: {
    BASE_URL: process.env.BASE_URL,
    yandexMetrika: {
      id: process.env.YANDEX_METRIKA_ID,
    }
  },
})
