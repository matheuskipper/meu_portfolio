<script setup>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-[#16171d] flex flex-col">
    <Header />
    <main class="flex-1">
    <Home />
    </main>
    <Footer />
  </div>
  
</template>
