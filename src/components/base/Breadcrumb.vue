<template>
    <section class="w-full p-5 md:p-8 pb-0 md:pb-0">
        <ul class="flex gap-3 text-viva-magenta font-light">
            <li>
                <router-link to="/">
                    <i class="fa-solid fa-home mr-1"></i>
                    <span class="hidden md:inline">Let's to explore</span>
                </router-link>
                <i class="fa-solid fa-chevron-right text-xs ml-2"></i>
            </li>
            <!-- current route -->
            <template v-for="(route, x) in props.routes" :key="x">
                <li>
                    <router-link v-if="route.clickable" :to="route.path">
                        {{ route.title }}
                        <i v-if="x !== props.routes.length - 1" class="fa-solid fa-chevron-right text-xs ml-2"></i>
                    </router-link>
                    <span v-else class="text-gray-800">
                        {{ route.title }}
                        <i v-if="x !== props.routes.length - 1" class="fa-solid fa-chevron-right text-xs ml-2"></i>
                    </span>
                </li>
            </template>
        </ul>
    </section>
</template>

<script setup>

const props = defineProps({
    routes: {
        type: Array,
        default: [
            { title: 'Route One', clickable: true, path: '/' },
            { title: 'Route Two', clickable: false },
        ]
    }
})

</script>