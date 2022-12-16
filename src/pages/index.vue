<template>
    <main class="container">
        <section class="flex items-center justify-between mb-12">
            <!-- wellcome -->
            <section class="w-8/12">
                <h1 class="text-2xl md:text-3xl text-gray-900 dark:text-gray-100 font-medium">
                    <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-1">Wellcome Back,</p>
                    Johnathan Doe <span>&#128075;&#127996;</span>
                </h1>
            </section>
            <!-- profile, notification, and etc -->
            <Header class="hidden md:block"></Header>
        </section>
        <!-- popular place -->
        <section class="mb-6">
            <section class="flex justify-between items-center mb-3">
                <h1 class="section-title">Popular Place</h1>
                <i class="text-viva-magenta fa-solid fa-chevron-right"></i>
            </section>
            <!-- cards wrapper -->
            <section class="flex pr-4 py-4 gap-6 overflow-x-scroll no-ruler">
                <template v-for="card in 6" :key="card">
                    <PopularCard class="min-w-[75%] md:min-w-[30%]"></PopularCard>
                </template>
            </section>
        </section>
        <!-- all category -->
        <section class="mb-10">
            <section class="flex justify-between items-center mb-3">
                <h1 class="section-title">Category</h1>
                <i class="text-viva-magenta fa-solid fa-chevron-right"></i>
            </section>
            <!-- categories wrapper -->
            <section class="flex flex-wrap justify-between md:flex-nowrap gap-3 overflow-x-scroll no-ruler pr-4 pl-1 py-4">
                <template v-for="item in categories" :key="item.id">
                    <button @click="category = item.title" 
                        :class="category == item.title ? 'bg-viva-magenta text-gray-100' : 'bg-gray-200 dark:bg-slate-700 text-gray-500 dark:text-gray-400'" 
                        class="w-[48%] md:w-3/12 hover:ring ring-gray-300 dark:ring-slate-500 duration-300 flex justify-start gap-4 md:gap-6 items-center py-4 px-8 rounded-full border border-gray-300">
                        <i class="fa-solid fa-map"></i>
                        {{ item.title }}
                    </button>
                </template>
            </section>
        </section>
        <!-- search bar -->
        <section class="mb-6">
            <p class="font-medium text-2xl md:text-3xl text-viva-magenta dark:text-gray-100 mb-4">
                Find your dream vacation
            </p>
            <!-- search bar -->
            <section class="w-full mb-6 rounded-full overflow-hidden flex border border-gray-300">
                <input v-model="keyword" class="w-10/12 md:w-11/12 p-4 bg-gray-50 dark:bg-slate-700 outline-viva-magenta rounded-l-full" placeholder="Type your place" type="search">
                <button class="w-2/12 md:w-1/12 bg-viva-magenta text-gray-100"><i class="fa-solid fa-search"></i></button>
            </section>
            <!-- end of search bar -->
            <!-- vacation list cards -->
            <section class="w-full flex flex-wrap justify-between gap-4">
                <template v-if="vacations.length > 0" v-for="vacation in vacations" :key="vacation">
                    <VacationListCard :title="vacation.title" :location="vacation.location" :slug="Vacation.getSlug( vacation.id )"></VacationListCard>
                </template>
                <section v-else class="w-full grid place-content-center text-center p-8">
                    <h1 class="text-lg">Sorry, we cannot find what do you want</h1>
                    <small>please try with another keyword again</small>
                </section>
            </section>
            <!-- end of vacation list cards -->
        </section>
    </main>
</template>

<script setup>

import { ref, computed } from 'vue'
import { useVacation } from '@/stores/vacation'
import PopularCard from '@component/base/PopularCard.vue'
import VacationListCard from '@component/base/VacationListCard.vue'
import Header from '@component/base/Header.vue'

// init store
const Vacation = useVacation()

const keyword = ref('')
const category = ref('All')
const vacations = computed(() => Vacation.filter(keyword.value, category.value))

const categories = [
    { title: 'All', id: 1 },
    { title: 'Beach', id: 2 },
    { title: 'River', id: 3 },
    { title: 'Mountain', id: 4 },
    { title: 'Garden', id: 5 },
    { title: 'Historical', id: 6 },
    { title: 'Island', id: 7 },
]

</script>