// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  ignore: [
    'pages/**/*.ts',
    'components/**/*.ts',
  ],
  extensions: ['.vue']
})
