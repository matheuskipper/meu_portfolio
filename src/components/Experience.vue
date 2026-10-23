<script setup>
const experiences = [
  {
    company: 'Lefisc Legislação Fiscal',
    status: 'Atual',
    title: 'Desenvolvedor Web Junior',
    type: 'CLT',
    period: 'Dezembro 2025 — Atual',
    description: 'Desenvolvimento e manutenção de interfaces frontend e backend, utilizando principalmente Vue.js e React para front-end, e Node.js para backend. Realização de ajustes, melhorias e suporte contínuo em projetos já existentes.',
    tags: ['Vue.js', 'React', 'Tailwind', 'TypeScript', 'SQL DBX', 'Node.js', 'Bitbucket'],
  },
  {
    company: 'Lefisc Legislação Fiscal',
    status: 'Concluído',
    title: 'Desenvolvedor Web Trainee',
    type: 'CLT',
    period: 'Maio 2025 — Dezembro 2025',
    description: 'Desenvolvimento e manutenção de interfaces front-end utilizando principalmente o framework Vue.js. Realização de ajustes, melhorias e suporte contínuo em projetos já existentes.',
    tags: ['Vue.js', 'Tailwind', 'SQL DBX', 'Bitbucket'],
  },
  {
    company: 'Lefisc Legislação Fiscal',
    status: 'Concluído',
    title: 'Técnico de Informática',
    type: 'CLT',
    period: 'Junho 2024 — Maio 2025',
    description: 'Montagem e manutenção de computadores, suporte aos clientes e colaboradores, atualizações e cadastro de novos conteúdos na plataforma da empresa.',
    tags: ['Dreamweaver', 'SQL DBX', 'HTML', 'Atendimento ao cliente'],
  },
  {
    company: 'Lefisc Legislação Fiscal',
    status: 'Concluído',
    title: 'Auxiliar de Informática',
    type: 'CLT',
    period: 'Dezembro 2023 — Junho 2024',
    description: 'Suporte aos clientes e colaboradores via telefone ou acesso remoto, atualizações e cadastro de novos conteúdos na plataforma da empresa.',
    tags: ['Dreamweaver', 'HTML', 'Tickets', 'Atendimento ao cliente'],
  },

]
</script>

<template>
  <section aria-labelledby="experience-title">
    <h1 id="experience-title" class="mb-4 font-geist text-3xl font-bold">
      <span class="text-red-400">[</span> experiência <span class="text-red-400">]</span>
    </h1>
    <div class="mb-8 border-b border-red-400"></div>

    <div class="grid gap-4 md:grid-cols-2">
      <article
        v-for="experience in experiences"
        :key="`${experience.company}-${experience.title}`"
        class="group flex h-full flex-col border border-slate-700 bg-slate-950/20 p-4 transition duration-300 hover:border-red-400 hover:bg-slate-900/40 sm:p-5"
      >
        <div class="mb-3 flex items-start justify-between gap-4">
          <h2 class="font-geist text-sm font-bold text-red-400">
            {{ experience.company }}
          </h2>
          <span
            class="shrink-0 text-[10px] uppercase tracking-wide"
            :class="experience.status === 'Atual' ? 'text-red-400' : 'text-slate-500'"
          >
            <span aria-hidden="true">●</span> {{ experience.status }}
          </span>
        </div>

        <h3 class="font-geist text-lg font-bold text-slate-100">
          {{ experience.title }} - <span class="border border-slate-800 px-2 py-1 text-xs text-gray-300 font-code">{{ experience.type }}</span>
        </h3>
        <p class="mt-2 font-mono text-[12px] text-slate-400">
          {{ experience.period }}
        </p>
        <p class="mt-5 flex-1 font-geist text-xs leading-relaxed text-slate-400 text-justify">
          {{ experience.description }}
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
