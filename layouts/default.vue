<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <header class="fixed w-full top-0 z-50 bg-gray-100/95 backdrop-blur-sm shadow-md" role="banner">
      <nav class="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <NuxtLink
          v-motion
          to="/"
          class="text-xl md:text-2xl font-bold text-primary-600 flex items-center gap-2"
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
        >
          <NuxtImg
            src="/images/logo.png"
            alt="MV Landscaping Logo"
            class="h-8 md:h-10 w-auto"
            loading="eager"
            fetchpriority="high"
            format="webp"
            quality="95"
            provider="ipx"
          />
          MV Landscaping
        </NuxtLink>

        <div class="hidden md:flex space-x-8 text-lg">
          <NuxtLink
            v-for="(item, index) in navItems"
            :key="item"
            v-motion
            :to="'/#' + item.toLowerCase().replace(' ', '-')"
            class="text-gray-700 hover:text-primary-600 transition-colors relative group py-2"
            :initial="{ opacity: 0, y: -20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 * index } }"
          >
            {{ item }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
          </NuxtLink>
        </div>

        <button
          class="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          aria-label="Toggle Menu"
          @click="toggleMenu"
        >
          <div class="w-6 h-5 relative">
            <span
              class="absolute h-0.5 bg-current transform transition-all duration-300 rounded-full"
              :class="[
                'w-6',
                isMenuOpen ? 'rotate-45 top-2' : 'top-0'
              ]"
            />
            <span
              class="absolute h-0.5 w-6 bg-current top-2 transition-all duration-300 rounded-full"
              :class="[
                isMenuOpen ? 'opacity-0 translate-x-2' : 'opacity-100'
              ]"
            />
            <span
              class="absolute h-0.5 bg-current transform transition-all duration-300 rounded-full"
              :class="[
                'w-6',
                isMenuOpen ? '-rotate-45 top-2' : 'top-4'
              ]"
            />
          </div>
        </button>
      </nav>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-full"
      >
        <div v-show="isMenuOpen" class="fixed inset-0 z-40 md:hidden">
          <div class="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
          <nav class="relative z-50 h-screen w-[80%] ml-auto flex flex-col bg-gray-50 shadow-2xl" aria-label="Mobile menu">
            <div class="flex-1 px-4 pt-24 pb-6 space-y-2 overflow-y-auto">
              <NuxtLink
                v-for="(item, index) in navItems"
                :key="item"
                v-motion
                :to="'/#' + item.toLowerCase().replace(' ', '-')"
                class="block w-full text-center py-4 text-xl font-medium text-gray-800 hover:text-primary-600 transition-all duration-300 border-b border-gray-200 hover:bg-gray-100/80"
                :initial="{ opacity: 0, x: 20 }"
                :enter="{ opacity: 1, x: 0, transition: { delay: 100 * index } }"
                @click="closeMenu"
              >
                {{ item }}
              </NuxtLink>
            </div>
            <div class="p-4 bg-gray-100">
              <a
                href="#quote-form"
                class="block w-full py-3 px-4 text-center text-white bg-primary-600 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg"
                @click="closeMenu"
              >
                Get Free Quote
              </a>
            </div>
          </nav>
        </div>
      </Transition>
    </header>

    <main class="flex-grow pt-16 md:pt-20 bg-gray-100" role="main">
      <slot />
    </main>

    <footer id="contact" class="bg-gray-900 text-white py-6" role="contentinfo">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Company Info -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="100"
            :duration="600"
            :once="true"
            class="transform-gpu"
          >
            <div class="flex items-center gap-2 mb-1">
              <NuxtImg
                src="/images/logo.png"
                alt="MV Landscaping Logo"
                class="h-6 w-auto"
                loading="lazy"
                format="webp"
                quality="95"
                provider="ipx"
              />
              <h3 class="text-lg font-semibold">
                MV Landscaping
              </h3>
            </div>
            <p class="text-gray-300 text-sm">
              Professional landscaping services for your home and business.
              Creating beautiful outdoor spaces since 2005.
            </p>
          </div>

          <!-- Service Area -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="200"
            :duration="600"
            :once="true"
            class="transform-gpu"
          >
            <div class="text-gray-300 text-sm">
              <div class="flex items-center gap-2 mb-1">
                <i class="i-mdi-map-marker text-primary-500" />
                <span class="font-semibold">Service Area:</span>
                <span>Rhode Island, Massachusetts, Connecticut</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p class="text-sm">
            &copy; {{ new Date().getFullYear() }} MV Landscaping. All rights reserved.
          </p>
          <a
            href="https://dub.sh/cmejia-dev"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 mt-1 text-xs opacity-50 hover:opacity-100 transition-opacity group"
          >
            <i class="i-mdi-code-tags text-lg text-primary-500" />
            <span class="group-hover:text-primary-400 transition-colors">by cmejia.dev</span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

interface PageTitles {
  [key: string]: string
}

// Navigation items
const navItems = ['Services', 'Gallery'] as const

// Reactive state
const isMenuOpen = ref(false)
const willChange = ref(false)

// Animation optimization
const optimizeAnimation = () => {
  willChange.value = true
  setTimeout(() => {
    willChange.value = false
  }, 1000)
}

// Menu handlers
const toggleMenu = () => {
  optimizeAnimation()
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  optimizeAnimation()
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

// Intersection Observer options
const _observerOptions = {
  threshold: 0.5
}

// SEO and page titles
const route = useRoute()
const titles: PageTitles = {
  '/': 'Professional Landscaping & Junk Removal Services',
  '/services': 'Expert Landscaping Services & Property Cleanup',
  '/about-us': 'About Our Professional Landscaping Company',
  '/gallery': 'Our Landscaping Projects Portfolio',
  '/contact': 'Contact Us for Landscaping & Junk Removal'
}

const pageTitle = computed(() => {
  const base = 'MV Landscaping'
  return `${base} - ${titles[route.path] || titles['/']}`
})

// Schema.org structured data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MV Landscaping',
  image: '/images/logo.png',
  description: 'Professional landscaping and junk removal services in Rhode Island, Massachusetts & Connecticut. Expert lawn care, property cleanup, and outdoor space transformation since 2005.',
  '@id': 'https://mvlandscaping.com',
  url: 'https://mvlandscaping.com',
  telephone: '',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'RI, MA, CT',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '41.8240',
      longitude: '-71.4128'
    },
    geoRadius: '100000'
  },
  areaServed: ['Rhode Island', 'Massachusetts', 'Connecticut'],
  sameAs: [
    'https://facebook.com/mvlandscaping',
    'https://instagram.com/mvlandscaping'
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    opens: '07:00',
    closes: '18:00'
  },
  services: [
    {
      '@type': 'Service',
      name: 'Landscaping Services',
      description: 'Professional lawn care, maintenance, and landscape design'
    },
    {
      '@type': 'Service',
      name: 'Junk Removal',
      description: 'Property cleanup, debris removal, and waste management'
    }
  ]
} as const

// Head configuration
useHead({
  title: pageTitle,
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(structuredData)
    }
  ]
})

// Route change handler
watch(() => route.path, () => {
  document.title = pageTitle.value
})

// Lifecycle hooks
onMounted(() => {
  document.title = pageTitle.value
  document.body.style.overscrollBehavior = 'none'
})

onUnmounted(() => {
  document.body.style.overflow = ''
  document.body.style.overscrollBehavior = ''
})
</script>

<style>
.router-link-active {
  color: rgb(var(--color-primary-600));
}

.router-link-active .absolute {
  width: 100%;
}

/* Performance optimizations */
.will-change-transform {
  will-change: transform;
}

.will-change-opacity {
  will-change: opacity;
}

/* Use hardware acceleration for animations */
.transform-gpu {
  transform: translateZ(0);
}

/* Optimize animations */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Add subtle hover effects for better contrast */
.hover\:bg-gray-100\/80:hover {
  background-color: rgb(243 244 246 / 0.8);
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .bg-gray-100 {
    background-color: rgb(243 244 246);
  }

  .bg-gray-50 {
    background-color: rgb(249 250 251 / 0.95);
  }
}
</style>
