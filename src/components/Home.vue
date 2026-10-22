<script setup>
import { ref } from 'vue'
// import heroImg from '../assets/hero.png'
// import viteLogo from '../assets/vite.svg'
// import vueLogo from '../assets/vue.svg'

const count = ref(0)
</script>

<template>
  <div class="home">
    <header>
      <div class="hero">
      <img :src="heroImg" alt="Hero Image" />
      <h1 class="text-3xl font-bold">Welcome to My Portfolio</h1>
      <p>This is a brief introduction about myself and my work.</p>
    </div>
    </header>
    
    <div class="logos">
      <img :src="viteLogo" alt="Vite Logo" />
      <img :src="vueLogo" alt="Vue Logo" />
    </div>
  </div>
</template>
