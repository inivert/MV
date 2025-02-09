// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@vueuse/motion/nuxt'
  ],
  colorMode: {
    classSuffix: ''
  },
  image: {
    quality: 90,
    format: ['webp', 'avif', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    dir: 'public',
    staticFilename: '[name][ext]'
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'MV Landscaping - Professional Landscaping & Junk Removal Services',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Expert landscaping and junk removal services in Rhode Island, Massachusetts & Connecticut. Professional lawn care, property cleanup, and outdoor space transformation since 2005.'
        },
        // Primary keywords
        { name: 'keywords', content: 'landscaping, junk removal, lawn care, property cleanup, yard waste removal, Rhode Island landscaping, Massachusetts landscaping, Connecticut landscaping' },
        // Open Graph / Social
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'MV Landscaping - Professional Landscaping & Junk Removal Services' },
        { property: 'og:description', content: 'Expert landscaping and junk removal services in RI, MA & CT. Professional lawn care and property cleanup since 2005.' },
        { property: 'og:image', content: '/images/hero-bg.jpg' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'MV Landscaping - Professional Landscaping & Junk Removal' },
        { name: 'twitter:description', content: 'Expert landscaping and junk removal services in New England. Transform your outdoor space today.' },
        // Location
        { name: 'geo.region', content: 'US-RI,US-MA,US-CT' },
        // Additional SEO
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'MV Landscaping' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap'
        },
        { rel: 'canonical', href: 'https://mvlandscaping.com' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NODE_ENV === 'development'
        ? '/api'
        : 'http://n8n.codelumus.com'
    }
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://n8n.codelumus.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
