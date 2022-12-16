<template>
    <!-- wrapper -->
    <main>
        <!-- Main poster -->
        <section class="w-full duration-300 p-[10rem] shadow rounded-xl bg-cover bg-center bg-no-repeat mb-4" :style="`background-image: url('${ currentPoster }')`"></section>
        <!-- thumbnails -->
        <section class="flex overflow-x-scroll no-ruler gap-3 w-full">
            <template v-for="thumb in 12" :key="thumb">
                <button @click="changePoster(thumb)"
                    class="relative rounded-lg overflow-hidden min-w-[20%] md:min-w-[5%] active:scale-95 duration-300">
                    <img :src="`/img/vacations/vacation-${ thumb }.png`" alt="">
                    <!-- layer hovering -->
                    <section class="bg-none opacity-0 hover:opacity-100 inset-0 bg-gray-800 backdrop-blur text-gray-200 duration-300 absolute bg-opacity-70 grid place-items-center">
                        Tap
                    </section>
                </button>
            </template>
        </section>
    </main>
</template>

<script setup>

import { ref } from 'vue'

const currentPoster = ref('/img/vacations/vacation-1.png')

const posterStyle = {
    backgroundImage: `url('${ currentPoster.value }')`
}

const changePoster = num => currentPoster.value = `/img/vacations/vacation-${ num }.png`

</script>