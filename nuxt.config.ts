import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    { src: '~/assets/css/index.css', lang: 'css' },
    { src: '~/assets/css/personal.component.css', lang: 'css' },
    { src: '~/assets/css/projects.css', lang: 'css' },
    { src: '~/assets/css/navbar.component.css', lang: 'css' },
    { src: '~/assets/css/app.css', lang: 'css' }
  ],
  build: {
    extractCSS: true
  }
})
