<script setup>
import { i18n } from '../i18n.js'
const { t } = i18n.global;

const projects = [
    {
    projectName: 'projects.titleProject1',
    stack: 'Backend',
    linkGh: 'https://github.com/matheuskipper/API_frete_sistemas_distribuidos',
    description: 'projects.descriptionProject1',
    tags: ['Node.js', 'Express', 'API', 'JSON', 'microsserviços'],
    },
    {
    projectName: 'projects.titleProject2',
    stack: 'FrontEnd',
    linkGh: 'https://github.com/matheuskipper/GeradorSenhasVue',
    description: 'projects.descriptionProject2',
    tags: ['Vue.js', 'Tailwind CSS', 'projects.tagLibraryProject2'],
    },
    {
    projectName: 'projects.titleProject3',
    stack: 'FrontEnd',
    linkGh: 'https://github.com/matheuskipper/Controle-contas-despesas',
    description: 'projects.descriptionProject3',
    tags: ['JavaScript', 'HTML', 'CSS'],
    },
]
</script>


<template>
    <div class="flex justify-between">
    <h1 class="font-geist text-3xl font-bold mb-4"><span class="text-red-400">[</span> {{ t('projects.mainTitle') }} <span class="text-red-400">]</span></h1>
    <a 
    href="https://github.com/matheuskipper"
    target="_blank"
    class="p-3 mb-4 rounded-full border border-red-400 hover:bg-red-400 hover:text-gray-200 transition duration-400"
    >{{ t('projects.mainButton') }}
    </a>
    </div>
    <div class="border-b border-red-400 mb-8"></div>

    <div class="grid gap-7 md:grid-cols-2 cursor-default">
        <article 
        v-for="project in projects" 
        :key="`${project.projectName}`"
        class="group flex h-full flex-col border border-slate-700 bg-slate-950/20 p-4 transition duration-300 hover:border-red-400 hover:bg-slate-900/40 sm:p-5"
        >
        <div class="mb-3 flex items-start justify-between gap-4">
          <h2 class="font-geist text-xl font-bold text-red-400">
              {{ t(project.projectName) }}  <span class="border border-slate-800 px-2 py-1 text-xs text-gray-300 font-code">{{ project.stack }}</span>
          </h2>
        </div>


        <h3 class="font-geist text-sm font-bold text-slate-400 mb-2 max-w-4xl text-justify">
            {{ t(project.description) }}
          
        </h3>
        <p class="mt-5 flex-1 font-geist text-xs leading-relaxed text-slate-400">
          <a
          :href="project.linkGh" 
          target="_blank"
          class="p-3 rounded-full text-sm border border-red-400 hover:bg-red-400 hover:text-gray-200 transition duration-400 cursor-pointer">{{ t('projects.buttonProject') }}
          </a>
        
        </p>

        <ul class="mt-10 flex flex-wrap gap-2" aria-label="Tecnologias e competências">
          <li
            v-for="tag in project.tags"
            :key="tag"
            class="border border-slate-800 px-1 py-1 font-geist lowercase text-sm text-slate-400"
          >
            <span class="text-red-400 font-code text-xs"><</span>{{ t(tag) }}<span class="text-red-400 font-code text-xs">/></span>
          </li>
        </ul>

        </article>
    </div>
</template>