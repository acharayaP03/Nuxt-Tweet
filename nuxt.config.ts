// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig:{
        accessToken: process.env.ACCESS_TOKEN_SECRET,
        refreshToken: process.env.REFRESH_TOKEN_SECRET,
        cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
        cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
        cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET
    }
})
