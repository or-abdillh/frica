<template>
  <!-- main layout -->
  <main class="flex">
    <!-- profile, notification, and etc -->
    <Header class="md:hidden"></Header>
    <!-- navigation on side -->
    <section class="md:w-3/12 lg:w-2/12">
      <MainNavigation></MainNavigation>
    </section>
    <!-- end of navigation on side -->
    <!-- main content -->
    <main class="w-full md:w-7/12 lg:w-8/12 bg-gray-100 dark:bg-slate-800 min-h-screen py-16 md:py-0">
      <!-- end of breadcrumb -->
      <router-view></router-view>
    </main>
    <!-- end main content -->
    <!-- user profile on side -->
    <section class="hidden md:block md:w-3/12 lg:w-2/12">
      <AsideProfileVue></AsideProfileVue>
    </section>
    <!-- end of user profile on side -->
  </main>

  <!-- end of main layout -->
</template>

<script setup>

import MainNavigation from '@component/base/MainNavigation.vue'
import AsideProfileVue from '@component/base/AsideProfile.vue'
import Header from '@component/base/Header.vue'


</script>