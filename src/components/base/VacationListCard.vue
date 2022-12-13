<template>
    <!-- card wrapper -->
    <section class="md:w-[47%] cursor-pointer active:ring-viva-magenta hover:ring-4 ring-gray-200 ring-offset-4 duration-300 flex justify-between gap-5 bg-white rounded-xl overflow-hidden p-4 border border-gray-300">
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
                    <p class="text-gray-600">{{ props.location }}</p>
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
    }
})

</script>