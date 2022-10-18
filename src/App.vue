<script setup lang="ts">
  import Header from './components/header.vue'
	import Form from './components/form.vue'
	import Card from './components/card.vue'
</script>

<template>
  <main class="bg-zinc-700 rounded-sm py-8 px-14 mb:px-6 flex flex-col gap-9">
    <Header />

		<div class="flex-1 flex gap-8 mb:flex-col-reverse">
		  <Form />

			<Card />
		</div>
	</main>
</template>
