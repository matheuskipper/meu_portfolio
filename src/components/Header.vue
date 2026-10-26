<script setup>
import FotoHeader from '../assets/fotoMatheus2.jpeg'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentLocale = computed(() => locale.value)

const toggleLanguage = () => {
  const newLocale = locale.value === 'pt' ? 'en' : 'pt'
  locale.value = newLocale
  localStorage.setItem('user-locale', newLocale)
}


</script>

<template>
    <div class="flex w-full flex-col items-center justify-center gap-7 border-b border-red-400 p-9 text-center text-slate-400 sm:flex-row sm:text-left">
      <button 
        @click="toggleLanguage"
        class="absolute right-4 top-4 rounded bg-gray-800 px-4 py-2
             text-sm text-white transition border border-gray-600 cursor-pointer
             hover:border-red-400 hover:text-red-400 hover:border sm:right-6 sm:top-6"
      >
        {{ currentLocale === 'pt' ? 'EN 🇺🇸' : 'PT 🇧🇷' }}
      </button>
        <div class="border-2 border-red-400 p-1 rounded-full"><img 
            :src="FotoHeader" 
            alt="foto matheus" 
            class="w-40 rounded-full border-2 border-gray-400" /></div>
        <div>
            <h2 class="font-code text-sm"><span class="font-geist text-red-400 text-xs">{{'</> '}}</span>{{ $t('header.ocupation') }}</h2>    
            <h1 class="text-5xl mt-3 mb-3 font-tech font-bold text-slate-300"><span class="font-geist text-red-400"><</span>{{$t('header.name')}} <span class="font-geist text-red-400">/></span>
            <span class="animate-blink text-red-400 font-code font-bold">_</span>
            </h1>
            <p class="mb-5 max-w-xl text-pretty font-geist text-sm">{{$t('header.description')}}
            </p>
            <p class="font-code text-xs"><i class="bi bi-geo-alt-fill"></i> {{$t('header.location')}}</p>
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