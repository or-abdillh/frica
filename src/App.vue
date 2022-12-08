<template>
  <!-- <main class="bg-gray-50 dark:bg-slate-300 min-h-screen">
    <main class="w-full md:w-11/12 md:mx-auto p-5">
      <router-view></router-view>
    </main>
  </main> -->
  <!-- main layout -->
  <main class="flex">
    <!-- navigation on side -->
    <section class="md:w-2/12">
      <MainNavigation></MainNavigation>
    </section>
    <!-- end of navigation on side -->
    <!-- main content -->
    <main class="w-full md:w-8/12 bg-gray-100 min-h-screen">
    </main>
    <!-- end main content -->
    <!-- user profile on side -->
    <section class="hidden md:block w-2/12">
      <AsideProfileVue></AsideProfileVue>
    </section>
    <!-- end of user profile on side -->
  </main>
  <!-- end of main layout -->
</template>

<script setup>

import MainNavigation from '@component/base/MainNavigation.vue'
import AsideProfileVue from '@component/base/AsideProfile.vue'

</script>