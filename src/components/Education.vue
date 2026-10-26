<script setup>
import LogoSenac from '../assets/senac-logo.png'
import LogoUniritter from '../assets/logo-uniritter-branco.png'
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
</script>

<template>
  <section aria-labelledby="education-title">
    <h1 id="education-title" class="mb-4 font-geist text-3xl font-bold"><span class="text-red-400">[</span> {{t('education.title')}} <span class="text-red-400">]</span></h1>
    <div class="mb-8 border-b border-red-400"></div>

    <div class="grid gap-4 md:grid-cols-2 cursor-default">
      <article
        class="group relative flex h-full flex-col overflow-hidden border border-slate-800 bg-slate-900/20 p-5 transition duration-300 hover:border-red-400 hover:bg-slate-900/40"
      >
        <div class="absolute transition duration-300 group-hover:bg-red-400" />
        <div class="mb-6 flex items-start justify-between gap-4">
          <span class="border border-red-400 px-2 py-1 font-geist text-xs tracking-wider text-red-400">
            {{t('education.ongoing')}}
          </span>
        </div>

        <div class="flex flex-1 flex-col">
          <p class="mb-2 font-geist text-lg text-slate-500">{{t('education.postgraduate')}}</p>
          <h2 class="font-geist text-2xl font-bold leading-snug text-slate-100">
            {{t('education.postgraduateTitle')}}
          </h2>
          <p class="mt-3 font-geist text-sm text-slate-400">SENAC</p>
          <p class="mt-1 font-mono text-xs text-red-400">2026 — 2027</p>
        </div>

        <div class="mt-8 flex h-16 items-center border-t border-slate-800 pt-4">
          <img :src="LogoSenac" alt="Logo SENAC" class="max-h-20 w-auto object-contain" />
        </div>
      </article>

      <article
        class="group relative flex h-full flex-col overflow-hidden border border-slate-800 bg-slate-900/20 p-5 transition duration-300 hover:border-red-400 hover:bg-slate-900/40"
      >
        <div class="absolute transition duration-300 group-hover:bg-red-400" />
        <div class="mb-6 flex items-start justify-between gap-4">
          <span class="border border-slate-700 px-2 py-1 font-geist text-xs tracking-wider text-slate-400">
            {{t('education.completed')}}
          </span>
        </div>

        <div class="flex flex-1 flex-col">
          <p class="mb-2 font-geist text-lg text-slate-500">{{t('education.graduation')}}</p>
          <h2 class="font-geist text-2xl font-bold leading-snug text-slate-100">
            {{t('education.graduationTitle')}}
          </h2>
          <p class="mt-3 font-geist text-sm text-slate-400">UniRitter</p>
          <p class="mt-1 font-mono text-xs text-red-400">2023 — 2025</p>
        </div>

        <div class="mt-8 flex h-16 items-center border-t border-slate-800 pt-4">
          <img :src="LogoUniritter" alt="Logo UniRitter" class="max-h-8 w-auto object-contain" />
        </div>
      </article>
    </div>
  </section>
</template>