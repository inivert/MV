<template>
  <div>
    <!-- Hero Section: Full-width banner with background image and text overlay -->
    <section
      v-motion
      class="relative text-white pt-12 md:pt-24 min-h-[60vh]"
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0 }"
    >
      <!-- Background Container: Holds the hero image and color overlay -->
      <div class="absolute inset-0 z-0 overflow-hidden bg-gray-900">
        <!-- Hero Background Image -->
        <img
          src="/images/hero-bg.jpg"
          alt="Beautiful lawn"
          class="absolute inset-0 w-full h-full object-cover"
        >
        <!-- Semi-transparent overlay to ensure text readability -->
        <div class="absolute inset-0 bg-primary-600/60 mix-blend-multiply backdrop-brightness-75" />
      </div>

      <!-- Hero Content Container: Centers the main heading and CTA -->
      <div class="container mx-auto px-4 pb-16 md:pb-24 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <!-- Main Heading with animation -->
          <h1
            v-motion
            class="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight font-heading"
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          >
            Transform Your Outdoor Space
          </h1>
          <!-- Experience Badge -->
          <div
            v-motion
            class="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 md:mb-6"
            :initial="{ opacity: 0, scale: 0.95 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 300 } }"
          >
            <span class="text-white font-semibold">Two Decades of Excellence in Landscaping</span>
          </div>
          <!-- Subheading with animation -->
          <p
            v-motion
            class="text-lg md:text-xl mb-6 md:mb-8 text-white/90"
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 400 } }"
          >
            Expert landscaping services tailored to your needs. With over 20 years of experience, get the garden of your dreams at an affordable price.
          </p>
          <!-- CTA Button with hover effects -->
          <a
            v-motion
            href="#quote-form"
            class="inline-block bg-white text-primary-600 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            :initial="{ opacity: 0, scale: 0.95 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 600 } }"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>

      <!-- Decorative Wave Animation: Creates a smooth transition between sections -->
      <div class="absolute bottom-0 left-0 right-0">
        <div class="waves h-[150px] w-full relative overflow-hidden">
          <div class="wave-parallax">
            <!-- Three layered waves with different opacities for depth -->
            <div class="wave wave1" />
            <div class="wave wave2" />
            <div class="wave wave3" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section: Grid of service cards -->
    <section id="services" class="py-12 md:py-20 bg-white">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <h2
          v-motion
          class="text-2xl md:text-3xl font-bold text-center mb-3 font-heading"
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          Our Services
        </h2>
        <p
          v-motion
          class="text-gray-600 text-center max-w-2xl mx-auto mb-8 md:mb-12 text-base md:text-lg"
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 200 } }"
        >
          We offer comprehensive landscaping solutions to create and maintain your perfect outdoor space
        </p>

        <!-- Services Grid: Responsive grid layout for service cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <!-- Individual Service Card with image, icon, and description -->
          <div
            v-for="(service, index) in services"
            :key="service.title"
            v-motion
            class="group relative overflow-hidden rounded-xl bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px] hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 * index } }"
          >
            <!-- Service Image Container with gradient overlay -->
            <div class="relative h-56 md:h-64">
              <NuxtImg
                :src="service.image"
                :alt="service.title"
                class="w-full h-full object-cover"
                loading="lazy"
                placeholder
                sizes="sm:100vw md:33vw lg:33vw"
                format="webp"
                quality="95"
                fit="outside"
                width="800"
                height="600"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <!-- Service Content -->
            <div class="p-4 md:p-6 flex-1 flex flex-col">
              <div class="flex items-center mb-3">
                <component :is="service.icon" class="w-5 h-5 md:w-6 md:h-6 text-primary-600 flex-shrink-0" />
                <h3 class="text-lg md:text-xl font-semibold ml-2 text-gray-900 font-heading">
                  {{ service.title }}
                </h3>
              </div>
              <p class="text-gray-600 text-sm md:text-base flex-1">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Showcase -->
    <section id="gallery" class="py-12 md:py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2
          v-motion
          class="text-2xl md:text-3xl font-bold text-center mb-3 font-heading"
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          Our Recent Work
        </h2>
        <p
          v-motion
          class="text-gray-600 text-center max-w-2xl mx-auto mb-8 md:mb-12 text-base md:text-lg"
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 200 } }"
        >
          Browse through our portfolio of completed projects
        </p>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          <div
            v-for="(project, index) in projects"
            :key="index"
            v-motion
            class="group relative overflow-hidden rounded-xl aspect-square bg-gray-200 shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px] hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:-translate-y-1 transition-all duration-300"
            :initial="{ opacity: 0, scale: 0.95 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 100 * index } }"
          >
            <NuxtImg
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover"
              loading="lazy"
              placeholder
              sizes="sm:50vw md:33vw lg:33vw"
              format="webp"
              quality="90"
              fit="cover"
              provider="ipx"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div class="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p class="text-white text-sm md:text-base font-medium mb-1">
                  {{ project.title }}
                </p>
                <p class="text-primary-200 text-xs md:text-sm">
                  {{ project.category }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Request Form: Interactive contact form with visual feedback -->
    <section id="quote-form" class="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <h2
            v-motion
            class="text-2xl md:text-3xl font-bold text-center mb-3 font-heading"
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
          >
            Request a Free Quote
          </h2>
          <p
            v-motion
            class="text-center text-gray-600 mb-8 text-base md:text-lg"
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 200 } }"
          >
            Fill out the form below and we'll get back to you within 24 hours.
          </p>

          <!-- Enhanced Form with better visual hierarchy and feedback -->
          <form
            v-motion
            class="space-y-6 md:space-y-8 bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100"
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
            @submit.prevent="submitForm"
          >
            <!-- Name Fields Group -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="form-group">
                <label for="firstName" class="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 hover:border-gray-300"
                  placeholder="John"
                >
              </div>

              <div class="form-group">
                <label for="lastName" class="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 hover:border-gray-300"
                  placeholder="Doe"
                >
              </div>
            </div>

            <!-- Contact Information Group -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="form-group">
                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 hover:border-gray-300"
                  placeholder="john@example.com"
                >
              </div>

              <div class="form-group">
                <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 hover:border-gray-300"
                  placeholder="(123) 456-7890"
                >
              </div>
            </div>

            <!-- Service Selection -->
            <div class="form-group">
              <label for="service" class="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
              <select
                id="service"
                v-model="form.service"
                required
                class="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 hover:border-gray-300 appearance-none"
              >
                <option value="" disabled>
                  Select the service you need
                </option>
                <option v-for="service in serviceOptions" :key="service" :value="service">
                  {{ service }}
                </option>
              </select>
            </div>

            <!-- Project Details -->
            <div class="form-group">
              <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 hover:border-gray-300 resize-none"
                placeholder="Tell us about your project and any specific requirements..."
              />
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-primary-600 text-white font-semibold py-4 rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 relative overflow-hidden group"
            >
              <span class="relative z-10">
                {{ isSubmitting ? 'Sending...' : 'Get Your Free Quote' }}
              </span>
              <div class="absolute inset-0 bg-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>

            <!-- Form Status Message -->
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="transform -translate-y-2 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform -translate-y-2 opacity-0"
            >
              <p
                v-if="submitStatus"
                :class="[
                  'text-center py-3 px-4 rounded-lg text-sm font-medium',
                  submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                ]"
              >
                {{ submitStatus.message }}
              </p>
            </Transition>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import anime from 'animejs'
import { onMounted, ref, reactive } from 'vue'

// Service Cards Data: Defines the content for each service card
const services = [
  {
    title: 'Lawn Care & Maintenance',
    description: 'Complete lawn care services including mowing, aeration, overseeding, edging, and trimming to keep your lawn healthy and beautiful.',
    icon: 'i-mdi-grass',
    image: '/images/services/lawncare.jpeg'
  },
  {
    title: 'Landscaping & Installation',
    description: 'Professional installation services including sod laying, planting, mulching, and stone work to enhance your outdoor space.',
    icon: 'i-mdi-shovel',
    image: '/images/services/sodinstall.jpeg'
  },
  {
    title: 'Property Cleanup & Junk Removal',
    description: 'Comprehensive cleanup services including seasonal maintenance, debris removal, junk hauling, and property clearing to maintain a pristine appearance.',
    icon: 'i-mdi-truck',
    image: '/images/services/junkremoval.jpeg'
  }
]

// Project Gallery Data: Defines the content for each project showcase
const projects = [
  {
    title: 'Custom Fire Pit Installation',
    image: '/images/projects/firepit.jpeg',
    category: 'Hardscaping'
  },
  {
    title: 'Stone Walkway Design',
    image: '/images/projects/walkway.png',
    category: 'Pathways'
  },
  {
    title: 'Professional Mulch Installation',
    image: '/images/projects/laid-mulch.jpeg',
    category: 'Landscaping'
  },
  {
    title: 'Decorative Gravel Design',
    image: '/images/projects/gravel.jpeg',
    category: 'Ground Cover'
  },
  {
    title: 'Landscape Edging',
    image: '/images/projects/edging.jpeg',
    category: 'Maintenance'
  },
  {
    title: 'Property Restoration',
    image: '/images/projects/restauration.jpeg',
    category: 'Restoration'
  }
]

// Available Services List: Used in the quote form dropdown
const serviceOptions = [
  'Lawn Mowing',
  'Sod Installation',
  'Shrub Trimming',
  'Weeding',
  'Lawn Aeration',
  'Overseeding',
  'Edging & Trimming',
  'Spring Cleanup',
  'Fall Cleanup',
  'Pruning',
  'Planting',
  'Mulching',
  'Loam Installation',
  'Stone Work',
  'Dethatching',
  'Junk Removal',
  'Property Clearing',
  'Construction Debris Removal',
  'Yard Waste Removal',
  'Furniture Removal',
  'Other (Please specify in message)'
]

// Form State Management
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null)

// Form Submission Handler
async function submitForm () {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    const response = await fetch('http://n8n.codelumus.com/webhook/quote-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    let responseData
    try {
      responseData = await response.text()
      responseData = responseData ? JSON.parse(responseData) : null
      console.log('Response data:', responseData)
    } catch (e) {
      console.error('Error parsing response:', e)
    }

    if (!response.ok) {
      console.error('Response status:', response.status)
      console.error('Response data:', responseData)
      throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`)
    }

    submitStatus.value = {
      type: 'success',
      message: responseData?.message || 'Thank you! We will contact you soon with your free quote.'
    }

    // Reset form
    Object.keys(form).forEach((key) => {
      form[key] = ''
    })
  } catch (error) {
    console.error('Form submission error:', error)
    submitStatus.value = {
      type: 'error',
      message: 'Sorry, there was an error submitting your request. Please try again later.'
    }
  } finally {
    isSubmitting.value = false
  }
}

// Wave Animation Setup
onMounted(() => {
  // Random start position generator for wave animation
  const getRandomStart = () => Math.random() * -50

  // Device detection for responsive animations
  const isMobile = window.innerWidth < 768

  // Animation speed configuration for different devices
  const speeds = {
    mobile: {
      wave1: 4000,
      wave2: 4500,
      wave3: 5000
    },
    desktop: {
      wave1: 12000,
      wave2: 14000,
      wave3: 16000
    }
  }

  // Wave animation creator function
  const createWaveAnimation = (waveClass, speed) => {
    const timeline = anime.timeline({
      loop: true,
      direction: 'alternate'
    })

    timeline
      .add({
        targets: waveClass,
        translateX: [getRandomStart(), '-50%'],
        easing: 'easeInOutSine',
        duration: speed,
        delay: Math.random() * 200
      })
      .add({
        targets: waveClass,
        translateX: ['0%'],
        easing: 'easeInOutSine',
        duration: speed
      })
  }

  // Initialize animations with device-specific speeds
  const currentSpeeds = isMobile ? speeds.mobile : speeds.desktop
  createWaveAnimation('.wave1', currentSpeeds.wave1)
  createWaveAnimation('.wave2', currentSpeeds.wave2)
  createWaveAnimation('.wave3', currentSpeeds.wave3)

  // Responsive animation handler
  let resizeTimeout
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      const newIsMobile = window.innerWidth < 768
      const newSpeeds = newIsMobile ? speeds.mobile : speeds.desktop
      createWaveAnimation('.wave1', newSpeeds.wave1)
      createWaveAnimation('.wave2', newSpeeds.wave2)
      createWaveAnimation('.wave3', newSpeeds.wave3)
    }, 250)
  })
})

// Navigation items
const _navItems = ['Services', 'Gallery'] as const
</script>

<style scoped>
/* Wave Animation Styles */
.waves {
  position: relative;
  width: 100%;
  height: 150px;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;
  transform: translateZ(0);
}

/* Wave Container Styles */
.wave-parallax {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
}

/* Individual Wave Styles */
.wave {
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat-x;
  background-position: 0 bottom;
  transform-origin: center bottom;
  will-change: transform;
}

/* Wave Layer Specific Styles */
.wave1 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23ffffff'/%3E%3C/svg%3E");
  z-index: 3;
  opacity: 1;
}

.wave2 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23ffffff'/%3E%3C/svg%3E");
  z-index: 2;
  opacity: 0.75;
}

.wave3 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23ffffff'/%3E%3C/svg%3E");
  z-index: 1;
  opacity: 0.5;
}

/* Mobile-specific Adjustments */
@media (max-width: 640px) {
  input, select, textarea {
    font-size: 16px !important; /* Prevents iOS zoom on focus */
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h1 {
    font-size: 2rem !important;
    line-height: 1.2 !important;
  }

  p {
    font-size: 1rem !important;
  }
}

/* Enhanced Shadow Effects */
.shadow-3d {
  box-shadow:
    rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px,
    rgba(17, 17, 26, 0.1) 0px 24px 80px;
}

.shadow-3d:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  transform: translateY(-4px);
}
</style>
