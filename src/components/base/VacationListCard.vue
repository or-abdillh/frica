<template>
    <!-- card wrapper -->
    <section @click="$router.push({ name: 'Vacation', params: { slug: props.slug } })" 
        class="md:w-[47%] cursor-pointer active:ring-viva-magenta hover:ring-4 ring-gray-200 dark:ring-slate-500 ring-offset-4 duration-300 flex justify-between gap-5 bg-white dark:bg-slate-700 rounded-xl overflow-hidden p-4 border border-gray-300">
        <section class="flex items-start gap-5">
            <!-- image -->
            <section class="w-2/12 place-self-center">
                <img src="/img/beach-picture.png" class="w-full rounded-xl" alt="Beach Picture">
            </section>
            <!-- description -->
            <section>
                <!-- title -->
                <h1 class="mb-2 text-viva-magenta font-medium">{{ props.title }}</h1>
                <!-- Location -->
                <span class="flex items-center gap-2 text-sm">
                    <i class="fa-solid fa-location-dot text-viva-magenta"></i>
                    <p class="text-gray-600 dark:text-gray-200">{{ props.location }}</p>
                </span>
            </section>
        </section>
        <!-- detail -->
        <section class="h-full grid place-items-center">
            <i class="fa-solid fa-chevron-right text-gray-500"></i>
        </section>
    </section>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        default: 'New Batakan Beach'
    },
    location: {
        type: String,
        default: 'Pelaihari'
    },
    slug: {
        type: String,
        required: true
    }
})

</script>