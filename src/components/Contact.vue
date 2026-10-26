<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
</script>

<template>
    <h1 class="font-geist text-3xl font-bold mb-4"><span class="text-red-400">[</span> {{ t('contact.mainTitle') }} <span class="text-red-400">]</span></h1>
    <!-- Borda inferior -->
    <div class="border-b border-red-400 mb-8"></div>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-3">

        <a href="mailto:matheuskipper9@gmail.com" target="_blank" class="h-full">
            <div class="h-full bg-slate-950/20 border border-slate-800 text-slate-400 p-5 transition-colors duration-500 hover:border-red-400 hover:text-red-400">
                <p class="font-code text-md">Email</p> 
                <div class="mt-15">
                <i class="bi bi-envelope-at-fill text-2xl"></i>
                <p class="font-geist text-sm mt-1">matheuskipper9@gmail.com</p>
                </div>
            </div>
        </a>
        
        <a href="https://wa.me/5551981412810" target="_blank" class="h-full">
            <div class="h-full bg-slate-950/20 border border-slate-800 text-slate-400 p-5 transition-colors duration-500 hover:border-red-400 hover:text-red-400">
                <p class="font-code text-md">WhatsApp</p>
                <div class="mt-15">
                <i class="bi bi-whatsapp text-2xl"></i>
                <p class="font-code text-sm mt-2">(51) 981412810</p>
                </div>
            </div>
        </a>
         
        <a href="https://www.linkedin.com/in/matheus-kipper/" target="_blank" class="h-full">
            <div class="h-full bg-slate-950/20 border border-slate-800 text-slate-400 p-5 transition-colors duration-500 hover:border-red-400 hover:text-red-400">
                <p class="font-code text-md">LinkedIn</p>
                <div class="mt-15">
                <i class="devicon-linkedin-plain text-2xl"></i>
                <p class="font-geist text-sm mt-1">matheus-kipper</p>
                </div>
            </div>
        </a>
    </div>
    <div class="mt-10">
        <h1 class="font-geist text-2xl font-bold mb-4 text-red-400"><span class="text-gray-300">[</span> {{ t('contact.secondaryTitle') }} <span class="text-gray-300">]</span> :</h1>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
            <a href="https://github.com/matheuskipper" target="_blank" class="h-full">
                <div class="h-full bg-slate-950/20 border border-slate-800 text-slate-400 p-5 transition-colors duration-500 hover:border-red-400 hover:text-red-400">
                    <p class="font-code text-md">GitHub</p>
                    <div class="mt-15">
                    <i class="devicon-github-plain text-2xl"></i>
                    <p class="font-geist text-sm mt-1">matheuskipper</p>
                    </div>
                </div>
            </a>

            <a href="https://www.instagram.com/matheuskppr/" target="_blank" class="h-full">
                <div class="h-full bg-slate-950/20 border border-slate-800 text-slate-400 p-5 transition-colors duration-500 hover:border-red-400 hover:text-red-400">                    
                    <p class="font-code text-md">Instagram</p>
                    <div class="mt-15">
                    <i class="bi bi-instagram text-2xl"></i>
                    <p class="font-geist text-sm mt-1">@matheuskppr</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>