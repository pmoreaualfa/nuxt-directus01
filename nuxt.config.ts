// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-directus','@nuxtjs/tailwindcss'],
  directus: {
    url: ""
  },
  tailwindcss: {
    // Options
  }
})
