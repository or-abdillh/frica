<template>
  <!-- Navigation Bar -->
  <NavigationBar></NavigationBar>
  <!-- End of Navigation Bar -->
  <main class="bg-gray-50 min-h-screen">
    <main class="w-full md:w-11/12 md:mx-auto p-5">
      <router-view></router-view>
    </main>
  </main>
</template>

<script setup>

import NavigationBar from '@component/base/NavigationBar.vue'

</script>