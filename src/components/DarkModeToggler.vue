<template>
	<button title="Dark Mode"
		@click="togglerHandler"
		class="active:scale-90 duration-300 rounded-full btn text-viva-magenta">
		<i v-if="!isDarkToggle" class="fas fa-sun"></i>
		<i v-else class="fas fa-moon"></i>
	</button>
</template>

<script setup>

import { onMounted, ref } from 'vue'

const getLocalStorage = () => {
	return Boolean( parseInt( localStorage.getItem('frica:dark-mode') ) | 0 )
}

const setLocalStroge = () => {
	localStorage.setItem('frica:dark-mode', Number( !isDarkToggle.value ))
}

const htmlToggler = () => document.querySelector('html').classList.toggle('dark')

const togglerHandler = () => {
	setTimeout(() => {
		setLocalStroge()
		isDarkToggle.value = !isDarkToggle.value
		htmlToggler()
	}, 300)
}

const isDarkToggle = ref(getLocalStorage())

onMounted(() => {
	if ( getLocalStorage() ) document.querySelector('html').classList.add('dark')
})

</script>