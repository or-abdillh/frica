<template>
    <main @click="$router.push({ name: 'ChannelDetail', params: { slug: Slug.generate( props.title ) } })" class="flex gap-3 items-center border-b pb-5 cursor-pointer active:scale-95 duration-300">
        <!-- thumbnail -->
        <section class="w-4/12">
            <div class="h-20 w-20 rounded-full overflow-hidden grid place-items-center text-gray-200 bg-viva-magenta">
                <img src="/img/vacations/vacation-10.png" alt="Channel Logo">
            </div>
        </section>
        <!-- Detail -->
        <section>
            <h2 class="font-medium">{{ props.title }}</h2>
            <!-- members -->
            <span class="text-sm mr-3">
                <i class="text-xs fa-solid fa-users text-gray-500"></i>
                {{ props.members }}
            </span>
            <!-- status -->
            <span class="text-sm">
                <i class="text-xs fa-solid fa-circle text-green-500"></i>
                {{ props.isActive ? 'Active' : 'Non Active' }}
            </span>
        </section>
    </main>
</template>

<script setup>

import Slug from '@/helpers/Slug.js'

const props = defineProps({
    title: {
        type: String,
        default: 'Channel Title Here'
    },
    members: {
        type: Number,
        default: 23
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

</script>