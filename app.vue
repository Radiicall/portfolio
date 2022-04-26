<script setup>
useHead({
  titleTemplate: 'Portfolio - %s',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My portfolio website' }
  ]
})
</script>

<template>
  <div id='app'>
    <NuxtPage />
  </div>
</template>
