<template>
  <div class="min-h-screen bg-gray-50">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    </Head>
    <NuxtLayout>
      <NuxtPage />
      <Analytics />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { Analytics } from '@vercel/analytics/react'
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  @apply text-base text-gray-800;
  -webkit-text-size-adjust: 100%;
}
</style>
