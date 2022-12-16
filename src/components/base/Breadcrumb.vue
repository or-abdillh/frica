<template>
    <section class="w-full p-5 md:p-8 pb-0 md:pb-0">
        <ul class="flex gap-3">
            <li class="text-gray-700">
                <router-link to="/">
                    <i class="fa-solid fa-home mr-1"></i>
                    <span class="hidden md:inline">Let's to explore</span>
                </router-link>
                <i class="fa-solid fa-chevron-right text-xs ml-2"></i>
            </li>
            <!-- current route -->
            <li class="text-gray-400">
                {{ $route.params.slug || $route.meta.titile || 'Current page' }}
            </li>
        </ul>
    </section>
</template>