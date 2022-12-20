<template>
    <Breadcrumb :routes="routes"></Breadcrumb>
    <main class="container">
        <Galleries></Galleries>
        <section class="mt-8 mb-16 text-gray-600">
            <!-- title -->
            <h1 class="text-2xl font-medium text-gray-800 mb-3">{{ Slug.extract( $route.params.slug || 'random-slug' ) }}</h1>
            <!-- description -->
            <p class="mb-2">Anim Lorem enim aliquip ipsum ea mollit do Lorem deserunt cillum adipisicing. Consectetur consequat cillum cupidatat magna fugiat deserunt reprehenderit esse. Fugiat veniam magna sunt ad ex consequat irure. Veniam consectetur exercitation excepteur incididunt commodo ad consequat minim ad qui elit velit reprehenderit nostrud.</p>
            <p>Elit qui pariatur dolore aliqua velit qui in duis eu incididunt laboris cillum officia. Tempor cillum voluptate labore consequat occaecat eiusmod magna ex. Aliquip ullamco dolor labore esse reprehenderit aute nisi duis ut ea. Ipsum duis cillum incididunt culpa. Sint in adipisicing exercitation velit minim. Nostrud sint fugiat occaecat id quis.</p>
        </section>
        <!-- Recomendation channel -->
        <section class="bg-white p-8 rounded-xl">
            <!-- title -->
            <h1 class="text-2xl font-medium text-viva-magenta mb-3">
                <i class="fa-solid fa-layer-group mr-2"></i>
                Recommended channel for your trip!
            </h1>
            <p>You want to vacation to this place? let's find holiday friends this time</p>
            <!-- Channel List -->
            <section class="flex flex-wrap justify-between gap-4 mt-12">
                <template v-for="channel in Channel.channels" :key="channel">
                    <ChannelListCard :title="channel.title" :members="channel.members" :isActive="channel.isActive" class="w-full md:w-[30%]"></ChannelListCard>
                </template>
                <router-link to="/channel">See all channels</router-link>
            </section>
        </section>
    </main>
</template>

<script setup>

import { useRoute } from 'vue-router'
import { useChannel } from '@store/channel'
import Slug from '@/helpers/Slug'
import Galleries from '@/components/Galleries.vue'
import Breadcrumb from '@/components/base/Breadcrumb.vue'
import ChannelListCard from '@/components/base/ChannelListCard.vue'

const Channel = useChannel()
const route = useRoute()

const routes = [
    { title: route.params.slug, clickable: false }
]

</script>