/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MY_API_KEY: process.env.MY_API_KEY
    },
    images: {
        domains: ['m.media-amazon.com']
    }
}

module.exports = nextConfig
