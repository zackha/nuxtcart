// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  future: { compatibilityVersion: 4 },

  modules: ['nuxt-graphql-request'],

  graphql: {
    clients: {
      default: {
        endpoint: process.env.GQL_HOST || 'http://localhost:4000/graphql',
      },
    },
  },

  devtools: { enabled: true },
});
