<script setup>
  useHead({
    titleTemplate: '%s - Radical.fun',
    viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'Portfolio website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }    
    ]
  })
</script>

<template>
  <link rel="stylesheet" href="assets/css/app.css"> 
  <div id='app'>
    <br/>
    <br/>
    <NuxtPage />
  </div>
</template>
