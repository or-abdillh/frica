<template>
    <section class="z-30 fixed md:relative flex p-4 justify-between items-center bg-gray-100 dark:bg-slate-800 md:bg-opacity-0 bg-opacity-75 backdrop-blur top-0 right-0 left-0">
        <Frica class="md:hidden"></Frica>
        <ul class="flex justify-end items-center gap-2 text-xl">
            <li>
                <button title="Notification"><i class="text-orange-600 fa-solid fa-bell"></i></button>
            </li>
            <li class="md:hidden">
                <DarkModeToggler></DarkModeToggler>
            </li>
            <li class="md:hidden w-2/12">
                <router-link to="/profile">
                    <img src="/img/user-profile.png" class="rounded-full ring ring-offset-2 ring-orange-100 dark:ring-slate-400 mx-auto">
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script setup>

import Frica from '@component/Frica.vue'
import DarkModeToggler from '@component/DarkModeToggler.vue'

</script>