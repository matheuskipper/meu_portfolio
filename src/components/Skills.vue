<script setup>
const skills = [
  { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain' },
  { name: 'Express', icon: 'devicon-express-original' },
  { name: 'HTML5', icon: 'devicon-html5-plain' },
  { name: 'CSS3', icon: 'devicon-css3-plain' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'FileZilla', icon: 'devicon-filezilla-plain' },
  { name: 'Bitbucket', icon: 'devicon-bitbucket-original' },
  { name: 'GitHub', icon: 'devicon-github-original' },
]
</script>

<template>
  <section aria-labelledby="skills-title">
    <h1 id="skills-title" class="font-geist text-3xl font-bold mb-4"><span class="text-red-400">[</span> skills <span class="text-red-400">]</span></h1>
    <!-- Borda inferior -->
    <div class="border-b border-red-400 mb-8"></div>

    <ul class="grid grid-cols-1 gap-3 xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
      <li
        v-for="skill in skills"
        :key="skill.name"
        class="cursor-default font-geist group flex items-center gap-3 border border-slate-700 px-4 py-3 text-lg text-slate-400 transition-colors duration-200 hover:border-red-400 hover:text-red-400"
      >
        <i
          :class="skill.icon"
          aria-hidden="true"
          class="text-xl transition-colors duration-200"
        />
        <span>{{ skill.name }}</span>
      </li>
    </ul>
  </section>
  
</template>