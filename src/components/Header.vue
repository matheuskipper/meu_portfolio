<script setup>
import FotoHeader from '../assets/foto_matheus2.jpeg'

</script>

<template>
    <div class="flex items-center gap-7 border border-red-800 max-w-6xl center mx-auto p-9 rounded-xs text-gray-300">
        <img 
            :src="FotoHeader" 
            alt="foto matheus" 
            class="w-35 rounded-full" />
        <div>
            <h2>Web Developer</h2>    
            <h1 class="text-3xl mt-3 mb-3"><span><</span>Matheus Kipper <span>/></span></h1>
            <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Beatae ad corrupti repellendus esse.
            </p>
            <p>Porto Alegre, RS</p>
        </div>
        
    </div>
</template>