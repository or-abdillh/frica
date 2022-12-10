<template>
    <section class="relative cursor-pointer active:ring ring-offset-4 ring-gray-400 duration-300 rounded-xl overflow-hidden">
        <!-- like button -->
        <button @click="isBookmarked = !isBookmarked" 
            class="text-gray-100 absolute z-20 top-5 right-5 h-10 w-10 grid place-items-center border border-gray-400 active:scale-90 hover:ring ring-gray-500 duration-300 bg-gray-600 bg-opacity-70 backdrop-blur rounded-full">
            <i v-if="isBookmarked" class="fa-solid fa-bookmark"></i>
            <i v-else class="fa-regular fa-bookmark"></i>
        </button>
        <!-- image -->
        <img class="z-10 hover:scale-150 hover:brightness-75 duration-300" src="/img/beach-picture.png" alt="Beach Picture">
        <!-- bottom layer -->
        <section class="absolute bottom-0 left-0 right-0 px-4 py-6 text-center bg-orange-100 dark:bg-slate-600 bg-opacity-25 dark:bg-opacity-25 backdrop-blur">
            <h1 class="text-gray-100 font-medium tracking-wider">New Batakan Beach</h1>
        </section>
    </section>
</template>

<script setup>

import { ref } from 'vue'

const isBookmarked = ref(false)

</script>