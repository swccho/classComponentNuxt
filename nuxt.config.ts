// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    '~/assets/css/tailwind.css',
  ],


  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-10-24',
});
