<template>
    <Breadcrumb :routes="routes"></Breadcrumb>
    <main class="mt-10 bg-cover bg-center bg-no-repeat" style="background-image: url('/img/vacations/vacation-10.png')">
        <main class="container bg-gray-800 bg-opacity-50 backdrop-blur-sm">
            <section class="mt-3 mb-12 md:mb-3 flex flex-col gap-6 md:flex-row justify-between md:items-start">
                <!-- title -->
                <section>
                    <p class="text-gray-300 font-medium mb-2 text-sm">
                        <i class="fa-solid fa-layer-group mr-1"></i>
                        Detail Channel
                    </p>
                    <p class="text-xl text-slate-200 font-semibold">{{ channelDetail.title }}</p>
                </section>
                <!-- end of title -->
                <!-- more detail -->
                <section class="flex flex-col gap-2">
                    <section class="flex gap-4 md:gap-6">
                        <!-- members -->
                        <span class="text-gray-300">
                            <i class="fa-solid fa-users text-sm mr-1"></i>
                            {{ channelDetail.members }}
                        </span>
                        <!-- trips -->
                        <span class="text-gray-300">
                            <i class="fa-solid fa-plane-departure mr-1"></i>
                            {{ channelDetail.trips }}
                        </span>
                        <!-- status -->
                        <span class="text-gray-300">
                            <i class="fa-solid fa-circle text-green-500 text-sm mr-1"></i>
                            {{ channelDetail.isActive ? 'Active' : 'Non active' }}
                        </span>
                    </section>
                    <!-- CTA -->
                    <button class="btn bg-viva-magenta text-gray-200">Follow</button>
                </section>
                <!-- end of more detail -->
            </section>
            <!-- description -->
            <section class="mb-3 text-gray-300">
                <!-- description -->
                <p>
                    <small><strong>Description</strong></small>
                    <br>
                    Proident nulla qui nulla aute ad culpa tempor aute veniam. Do do veniam qui elit est labore laboris do consectetur adipisicing velit sunt consectetur. Ipsum fugiat minim velit esse aliquip aliquip et duis laborum dolor deserunt.
                    Est aliquip ut cupidatat quis fugiat cupidatat ullamco laboris culpa anim tempor qui sint. Mollit ut officia nisi Lorem culpa ullamco id. Veniam sint est enim do. Dolore ex do fugiat aliquip non magna anim aute ut.
                </p>
            </section>
            <!-- end of description -->
        </main>
    </main>
</template>

<script setup>

import { useRoute } from 'vue-router'
import { useChannel } from '@store/channel/index.js'
import { computed } from 'vue'
import Breadcrumb from '@/components/base/Breadcrumb.vue'

const route = useRoute()
const Channel = useChannel()

const channelDetail = computed(() => Channel.getDetail( route.params.slug ))

const routes = [
    { title: 'Channel', path: '/channel', clickable: true },
    { title: route.params.slug, clickable: false }
]

</script>