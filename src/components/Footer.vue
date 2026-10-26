<template>
  <footer class="mt-10 mb-5 border-t border-red-400 pt-5 text-center text-slate-400">
    <p class="font-code text-xs">&copy; {{currentYear}} Matheus Kipper. {{ t('footer.text') }}</p>
    <!-- social media icons -->
     <div class="mt-4">
        <a href="https://github.com/matheuskipper" target="_blank" class="mx-2 transition-colors duration-200 hover:border-red-400 hover:text-red-400">
            <i class="devicon-github-plain text-xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/matheus-kipper/" target="_blank" class="mx-2 transition-colors duration-200 hover:border-red-400 hover:text-red-400">
            <i class="devicon-linkedin-plain text-xl"></i>
        </a>
        <a href="https://www.instagram.com/matheuskppr/" target="_blank" class="mx-2 transition-colors duration-200 hover:border-red-400 hover:text-red-400">
            <i class="bi bi-instagram text-xl"></i>
        </a>
     </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>