// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    // Module Options
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
      {
        code: "nl",
        iso: "nl",
        name: "Dutch",
        file: "nl.json",
      },
      {
        code: "tr",
        iso: "tr",
        name: "Turkish",
        file: "tr.json",
      },
    ],
    defaultLocale: "en-US", // Default Language
  },

  modules: ['@pinia/nuxt', "@nuxt/image", '@nuxtjs/i18n'],

  compatibilityDate: '2024-07-28',
})