<template>
    <Breadcrumb></Breadcrumb>
    <main class="container">
        <Galleries></Galleries>
        <section class="mt-8 text-gray-600">
            <!-- title -->
            <h1 class="text-2xl font-medium text-gray-800 mb-3">{{ Vacation.extractSlug( $route.params.slug || 'random-slug' ) }}</h1>
            <!-- description -->
            <p class="mb-2">Anim Lorem enim aliquip ipsum ea mollit do Lorem deserunt cillum adipisicing. Consectetur consequat cillum cupidatat magna fugiat deserunt reprehenderit esse. Fugiat veniam magna sunt ad ex consequat irure. Veniam consectetur exercitation excepteur incididunt commodo ad consequat minim ad qui elit velit reprehenderit nostrud.</p>
            <p>Elit qui pariatur dolore aliqua velit qui in duis eu incididunt laboris cillum officia. Tempor cillum voluptate labore consequat occaecat eiusmod magna ex. Aliquip ullamco dolor labore esse reprehenderit aute nisi duis ut ea. Ipsum duis cillum incididunt culpa. Sint in adipisicing exercitation velit minim. Nostrud sint fugiat occaecat id quis.</p>
        </section>
    </main>
</template>

<script setup>

import { useVacation } from '@/stores/vacation'
import Galleries from '@/components/Galleries.vue'
import Breadcrumb from '@/components/base/Breadcrumb.vue'

const Vacation = useVacation()

</script>