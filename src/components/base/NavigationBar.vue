<template>
    <!-- wrapper -->
    <nav class="sticky top-0 left-0 right-0 bg-white dark:bg-slate-900 bg-opacity-60 backdrop-blur border-b border-gray-100 dark:border-slate-600">
        <!-- content -->
        <main class="p-5 w-full flex items-center justify-between">
            <!-- logo -->
            <section>
                <Frica></Frica>
            </section>
            <!-- sidebar toggler -->
            <section class="md:hidden">
                <button class="btn text-orange-600 dark:text-gray-200" @click="(sidebarActive = true)"><i class="fa-solid fa-bars"></i></button>
            </section>
            <!-- sidebar -->
            <section :class="sidebarActive ? 'right-0' : '-right-full md:right-0'" 
                class="w-8/12 duration-300 fixed md:relative top-0 min-h-screen md:min-h-fit bg-white dark:bg-slate-900 md:bg-none py-10 md:py-0 md:shadow-none shadow-md flex flex-col md:flex-row items-center md:justify-between gap-10">
                <!-- links -->
                <section>
                    <ul class="flex flex-col md:flex-row items-end gap-6">
                        <!-- close sidebar -->
                        <li class="md:hidden"><button @click="(sidebarActive = false)" class="btn"><i class="fa-solid fa-times text-orange-600 dark:text-gray-200"></i></button></li>
                        <!-- link -->
                        <template v-for="link in links" :key="link.name">
                            <li :class="($route.name === link.name) ? 'text-gray-500 dark:text-gray-200 font-semibold' : 'font-light text-gray-400 dark:text-gray-300'" 
                            class="hover:text-orange-600 duration-300">
                                <router-link to="/">{{ link.name }}</router-link>
                            </li>
                        </template>
                    </ul>
                </section>
                <!-- CTA -->
                <section>
                    <ul class="flex flex-col md:flex-row items-end gap-3">
                        <!-- login -->
                        <li class="btn border border-orange-600 text-orange-600"><router-link to="/">Sign In</router-link></li>
                        <!-- Register -->
                        <li class="btn border bg-orange-600 text-gray-100 md:mr-4"><router-link to="/">Create Account</router-link></li>
                        <!-- Dark Mode Toggler -->
                        <li><DarkModeToggler></DarkModeToggler></li>
                    </ul>
                </section>
            </section>
            <!-- end of sidebar  -->
        </main>
        <!-- end of content -->
    </nav>
    <!-- end of wrapper -->
</template>

<script setup>

import { ref } from 'vue'
import Frica from '@component/Frica.vue'
import DarkModeToggler from '@component/DarkModeToggler.vue'

const sidebarActive = ref(false)

const links = [
    { name: 'Home', to: '/' },
    { name: 'Available Vacation', to: '/' },
    { name: 'Grup Vacation', to: '/' },
    { name: 'Profile', to: '/' },
]

</script>