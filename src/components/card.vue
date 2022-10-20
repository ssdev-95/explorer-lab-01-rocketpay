<script setup lang="ts">
  import Mask from './mask.vue'
	import { ownerName, cardNumber, expiration, cvv, brandIcons, brand } from '../composables/brands'
</script>
<template>
  <div class="relative flex-none border border-zinc-200 h-fit w-[375px] max-w-[95vw] flex flex-col gap-6 bg-glass p-5 rounded-xl text-zinc-100 overflow-hidden mb:mx-auto">
	  <Mask />
	  <header class="z-20 flex items-center justify-between">
		  <img src="../assets/subtract.svg" alt="" />

			<img
			  v-if="brand !== 'default'"
				:src="brandIcons[brand]"
				alt=""
			/>
		</header>

		<div class="z-20 flex flex-col gap-5">
		  <strong class="text-2xl">
			  {{cardNumber ? cardNumber : '----------------------------'}}
			</strong>

			<p class="text-sm leading-normal">
			  Onwer

				<strong class="text-lg block uppercase">
				  {{ownerName ? ownerName : '-------------------'}}
				</strong>
			</p>

			<div class="w-full flex items-center justify-between">
			  <p class="text-sm leading-normal">
				  Expiration

					<strong class="block ">
					  {{expiration ? expiration : '--/--'}}
					</strong>
				</p>

				<p class="text-sm leading-normal">
				  CVV

					<strong class="block">
					  {{cvv ? cvv : '------'}}
					</strong>
				</p>

				<img src="../assets/chip.svg" alt="" />
			</div>
		</div>
	</div>
</template>
