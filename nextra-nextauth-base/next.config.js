const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
}

module.exports = withNextra(nextConfig)