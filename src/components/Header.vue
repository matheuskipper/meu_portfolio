<script setup>
import FotoHeader from '../assets/fotoMatheus2.jpeg'

</script>

<template>
    <div class="flex w-full flex-col items-center justify-center gap-7 border-b border-red-400 p-9 text-center text-slate-400 sm:flex-row sm:text-left">
        <div class="border-2 border-red-400 p-1 rounded-full"><img 
            :src="FotoHeader" 
            alt="foto matheus" 
            class="w-45 rounded-full border-2 border-gray-400" /></div>
        <div>
            <h2 class="font-code text-sm"><span class="font-geist text-red-400 text-xs">{{'</> '}}</span>Web Developer</h2>    
            <h1 class="text-4xl mt-3 mb-3 font-tech font-bold text-slate-300"><span class="font-geist text-red-400"><</span>Matheus Kipper <span class="font-geist text-red-400">/></span>
            <span class="animate-blink text-red-400 font-code font-bold">_</span>
            </h1>
            <p class="mb-5 max-w-xl text-pretty font-geist text-sm">Desenvolvedor Web com foco em frameworks como Vue.js e React, ambos com Tailwind CSS. Utilizo Node.js com Express para backend.
            </p>
            <p class="font-code text-xs"><i class="bi bi-geo-alt-fill"></i> Porto Alegre, RS</p>
        </div>
        
    </div>
</template>

<style scoped>
.animate-blink {
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>