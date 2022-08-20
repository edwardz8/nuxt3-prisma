import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    nitro: {
        preset: 'node-server'
    },
    modules: ['@nuxtjs/tailwindcss'],

    runtimeConfig: {
        jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
        jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
        // cloudinary
        cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
        cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
        cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    },

    build: {
        transpile: ['@heroicons/vue']
    }
})
