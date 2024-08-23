// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  future: { compatibilityVersion: 4 },

  modules: ['nuxt-graphql-request'],

  graphql: {
    clients: {
      default: {
        endpoint: 'https://host.zackha.com/graphql',
      },
    },
  },

  devtools: { enabled: true },
});
