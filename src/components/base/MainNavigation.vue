<template>
    <main class="sticky top-0 bottom-0 left-0 dark:bg-slate-900 md:min-h-screen md:p-6 md:border-r border-gray-200 dark:border-slate-500">
        <!-- header -->
        <header class="hidden md:flex justify-between items-center">
            <!-- logo -->
            <Frica></Frica>
            <!-- dark mode toggler -->
            <DarkModeTogglerVue></DarkModeTogglerVue>
        </header>
        <!-- navigation -->
        <nav class="fixed md:relative bottom-0 left-0 right-0 flex px-4 py-5 bg-white dark:bg-slate-900 border-t md:border-none border-gray-100 dark:border-slate-500 md:p-0 md:flex-col gap-4 mt-10">
            <template v-for="(link, x) in links" :key="x">
                <button @click="linkActive = link.name" 
                    :class="linkActive === link.name ? 'bg-viva-magenta text-gray-100 ring-red-200' : 'ring-gray-200 text-gray-700 hover:bg-gray-100'" 
                    class="w-full group flex gap-5 justify-center md:justify-start items-center py-3 px-4 rounded-full hover:ring duration-300">
                    <i :class="link.icon"></i>
                    <p class="hidden md:inline group-active:inline group-focus:inline text-sm md:text-base duration-300">{{ link.name }}</p>
                </button>
            </template>
        </nav>
    </main>
</template>

<script setup>

import { ref } from 'vue'
import Frica from '@component/Frica.vue'
import DarkModeTogglerVue from '@component/DarkModeToggler.vue'

const linkActive = ref('Explore')

const links = [
    { name: 'Explore', to: '/', icon: 'fa-solid fa-compass' },
    { name: 'Room', to: '/', icon: 'fa-solid fa-layer-group' },
    { name: 'Group', to: '/', icon: 'fa-solid fa-user-group' },
    { name: 'Bookmark', to: '/', icon: 'fa-solid fa-bookmark' },
]
</script>