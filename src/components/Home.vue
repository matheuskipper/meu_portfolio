<script setup>
import { ref, onMounted } from 'vue'
import About from './About.vue'
import Experience from './Experience.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'

const menuItems = [
  { id: 'about', label: 'sobre', component: About },
  { id: 'experience', label: 'experiência', component: Experience },
  { id: 'projects', label: 'projetos', component: Projects },
  { id: 'contact', label: 'contato', component: Contact },
]

const activeItem = ref('about');

const fraseBoasVindas = 'Bem-vindo ao meu portfólio!';
const textoExibido = ref('');
const mostrarCursor = ref(true);
const velocidade = 100

const digitar = () => {
  let i = 0;
  const intervalo = setInterval(() => {
  if (i < fraseBoasVindas.length) {
      textoExibido.value += fraseBoasVindas.charAt(i)
      i++
    } else {
      clearInterval(intervalo);
      mostrarCursor.value = false;
    }
  }, velocidade)
}

onMounted(() => {
  digitar();
})

</script>

<template>
  <div class="mt-9 mb-4 text-center text-4xl font-tech font-bold text-gray-800">
    <span class="text-gray-300">{{ textoExibido }}</span>
    <span v-if="mostrarCursor" class="text-red-400">|</span>
  </div>
  <main class="mx-auto max-w-6xl px-4 py-6 text-gray-300 sm:px-6 lg:px-8">
    <div class="flex gap-6 justify-center mb-10">
      <a 
      href="/arquivos/cv-ptbr-matheusipper.pdf"  
      target="_blank" 
      class="p-2 font-geist text-sm rounded-full border border-red-400 hover:bg-red-400 transition duration-300">
        Resumo • PT
      </a>
      <a 
      href="/arquivos/cv-en-matheuskipper.pdf" 
      target="_blank" 
      class="p-2 font-geist text-sm rounded-full border border-red-400 hover:bg-red-400 transition duration-300">
        Resume • EN
      </a>
    </div>
    <nav
      aria-label="Portfolio sections"
      class="border-b border-slate-800"
    >
      <ul class="flex flex-wrap gap-x-8 justify-center">
        <li
          v-for="item in menuItems"
          :key="item.id"
        >
          <button
            type="button"
            :aria-current="activeItem === item.id ? 'page' : undefined"
            class="cursor-pointer relative px-2 pb-4 font-code text-sm tracking-wide transition-colors duration-200"
            :class="activeItem === item.id
              ? 'text-red-400'
              : 'text-slate-600 hover:text-slate-300'"
            @click="activeItem = item.id"
          >
            <{{ item.label }}/>
            <span
              v-if="activeItem === item.id"
              class="absolute inset-x-0 bottom-0 h-px bg-red-500"
            />
          </button>
        </li>
      </ul>
    </nav>

    <section class="mt-8 border border-slate-800 p-6 sm:p-8">
      <component
        :is="menuItems.find((item) => item.id === activeItem).component"
      />
    </section>
  </main>
</template>