<script setup>
const projects = [
    {
    projectName: 'Consulta de CEP e Cálculo de Frete',
    stack: 'Backend',
    linkGh: 'https://github.com/matheuskipper/API_frete_sistemas_distribuidos',
    description: 'Aplicação desenvolvida para implementação de microsserviços e sistemas distribuídos. O projeto consulta os dados de um endereço a partir de um CEP e calcula o valor do frete com base em regras de negócio internas.',
    tags: ['Node.js', 'Express', 'Fetch API', 'JSON'],
    },
    {
    projectName: 'Gerador de Senhas',
    stack: 'FrontEnd',
    linkGh: 'https://github.com/matheuskipper/GeradorSenhasVue',
    description: 'Projeto de um gerador de senhas dinâmico, utilizando o framework Vue.js e estilização com Tailwind CSS, além de utilziar bibliotecas como a generate-password-browser e a toastify-js.',
    tags: ['Vue.js', 'Tailwind CSS', 'Bibliotecas'],
    },
    {
    projectName: 'Contas e Despesas',
    stack: 'FrontEnd',
    linkGh: 'https://github.com/matheuskipper/Controle-contas-despesas',
    description: 'Uma ferramenta simples e intuitiva para gerenciar suas finanças pessoais. Adicione e visualize suas contas e despesas diárias de forma fácil, mantendo um controle total sobre seus gastos.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    },
]
</script>


<template>
    <div class="flex justify-between">
    <h1 class="font-geist text-3xl font-bold mb-4"><span class="text-red-400">[</span> projetos <span class="text-red-400">]</span></h1>
    <a 
    href="https://github.com/matheuskipper"
    target="_blank"
    class="p-3 mb-4 rounded-full border border-red-400 hover:bg-red-400 hover:text-gray-200 transition duration-400"
    >Acessar todos
    </a>
    </div>
    <div class="border-b border-red-400 mb-8"></div>

    <div class="grid gap-7 md:grid-cols-1 cursor-default">
        <article 
        v-for="project in projects" 
        :key="`${project.projectName}`"
        class="group flex h-full flex-col border border-slate-700 bg-slate-950/20 p-4 transition duration-300 hover:border-red-400 hover:bg-slate-900/40 sm:p-5"
        >
        <div class="mb-3 flex items-start justify-between gap-4">
          <h2 class="font-geist text-xl font-bold text-red-400">
            {{ project.projectName }}  <span class="border border-slate-800 px-2 py-1 text-xs text-gray-300 font-code">{{ project.stack }}</span>
          </h2>
        </div>


        <h3 class="font-geist text-base font-bold text-slate-400 mb-2 max-w-4xl">
          {{ project.description }}  
          
        </h3>
        <p class="mt-5 flex-1 font-geist text-xs leading-relaxed text-slate-400">
          <a
          :href="project.linkGh" 
          target="_blank"
          class="p-3 rounded-full text-sm border border-red-400 hover:bg-red-400 hover:text-gray-200 transition duration-400 cursor-pointer">Clique para acessar o projeto
          </a>
        
        </p>

        <ul class="mt-10 flex flex-wrap gap-2" aria-label="Tecnologias e competências">
          <li
            v-for="tag in project.tags"
            :key="tag"
            class="border border-slate-800 px-2 py-1 font-code text-md text-slate-400"
          >
            {{ tag }}
          </li>
        </ul>

        </article>
    </div>
</template>