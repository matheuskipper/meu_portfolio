<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
const experiences = [
  {
    company: 'Lefisc Legislação Fiscal',
    statusKey: 'experience.status.current',
    isCurrent: true, // Controla a cor do status
    titleKey: 'experience.jobs.junior.title',
    type: 'CLT',
    periodKey: 'experience.jobs.junior.period',
    descriptionKey: 'experience.jobs.junior.description',
    tags: ['Vue.js', 'React', 'Tailwind', 'TypeScript', 'SQL DBX', 'Node.js', 'Bitbucket'],
  },
  {
    company: 'Lefisc Legislação Fiscal',
    statusKey: 'experience.status.completed',
    isCurrent: false,
    titleKey: 'experience.jobs.trainee.title',
    type: 'CLT',
    periodKey: 'experience.jobs.trainee.period',
    descriptionKey: 'experience.jobs.trainee.description',
    tags: ['Vue.js', 'Tailwind', 'SQL DBX', 'Bitbucket'],
  },
  {
    company: 'Lefisc Legislação Fiscal',
    statusKey: 'experience.status.completed',
    isCurrent: false,
    titleKey: 'experience.jobs.tech.title',
    type: 'CLT',
    periodKey: 'experience.jobs.tech.period',
    descriptionKey: 'experience.jobs.tech.description',
    tags: ['Dreamweaver', 'SQL DBX', 'HTML', 'Atendimento ao cliente'],
  },
  {
    company: 'Lefisc Legislação Fiscal',
    statusKey: 'experience.status.completed',
    isCurrent: false,
    titleKey: 'experience.jobs.aux.title',
    type: 'CLT',
    periodKey: 'experience.jobs.aux.period',
    descriptionKey: 'experience.jobs.aux.description',
    tags: ['Dreamweaver', 'HTML', 'Tickets', 'Atendimento ao cliente'],
  },
]
</script>

<template>
  <section aria-labelledby="experience-title">
    <h1 id="experience-title" class="mb-4 font-geist text-3xl font-bold">
      <span class="text-red-400">[</span> {{ t('experience.title') }} <span class="text-red-400">]</span>
    </h1>
    <div class="mb-8 border-b border-red-400"></div>

    <div class="grid gap-4 md:grid-cols-2">
      <article
        v-for="experience in experiences"
        :key="`${experience.company}-${experience.titleKey}`"
        class="group flex h-full flex-col border border-slate-700 bg-slate-950/20 p-4 transition duration-300 hover:border-red-400 hover:bg-slate-900/40 sm:p-5"
      >
        <div class="mb-3 flex items-start justify-between gap-4">
          <h2 class="font-geist text-sm font-bold text-red-400">
            {{ experience.company }}
          </h2>
          <span
            class="shrink-0 text-[10px] uppercase tracking-wide"
            :class="experience.isCurrent ? 'text-red-400' : 'text-slate-500'"
          >
            <span aria-hidden="true">●</span> {{ t(experience.statusKey) }}
          </span>
        </div>

        <h3 class="font-geist text-lg font-bold text-slate-100">
           {{ t(experience.titleKey) }} - <span class="border border-slate-800 px-2 py-1 text-xs text-gray-300 font-code">{{ experience.type }}</span>
        </h3>
        <p class="mt-2 font-mono text-[12px] text-slate-400">
          {{ t(experience.periodKey) }}
        </p>
        <p class="mt-5 flex-1 font-geist text-xs leading-relaxed text-slate-400 text-justify">
          {{ t(experience.descriptionKey) }}
        </p>

        <ul class="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias e competências">
          <li
            v-for="tag in experience.tags"
            :key="tag"
            class="border border-slate-800 px-2 py-1 font-geist text-[10px] text-slate-400"
          >
            {{ tag }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
