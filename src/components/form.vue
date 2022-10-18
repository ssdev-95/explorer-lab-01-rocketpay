<script setup lang="ts">
  import { ownerName, cardNumber, expiration, cvv } from '../composables/brands'
</script>

<template>
  <form class="flex-1 max-w-[500px] text-zinc-100 flex flex-col gap-5">
	  <label class="flex flex-col gap-2">
		  <p class="text-sm">CARD NUMBER</p>

			<input
			  class="bg-zinc-900 w-full rounded ring-1 ring-zinc-500 focus:ring-zinc-100 px-3 py-2"
				v-model="cardNumber"
				placeholder="xxxx xxxx xxxx"
			  name="cardNumber"
			/>
		</label>

		<label class="flex flex-col gap-2">
		  <p class="text-sm">OWNER NAME</p>

			<input
			  class="bg-zinc-900 w-full border-0 rounded ring-1 ring-zinc-500 focus:ring-zinc-100 px-3 py-2"
				v-model="ownerName"
				placeholder="Salompas Senpai"
			  name="ownerName"
			/>
		</label>

    <div class="w-full flex gap-5">
  		<label class="flex flex-col gap-2">
	  	  <p class="text-sm">EXPIRATION</p>

		  	<input
				  class="bg-zinc-900 w-full rounded ring-1 ring-zinc-500 focus:ring-zinc-100 px-3 py-2"
					v-model="expiration"
					placeholder="12/2077"
					name="expiration"
  			/>
  		</label>

  		<label class="flex flex-col gap-2">
  		  <p class="text-sm">CVV</p>

  			<input
  			  class="bg-zinc-900 w-full rounded ring-1 ring-zinc-500 focus:ring-zinc-100 px-3 py-2"
					v-model="cvv"
					placeholder="666"
	  			name="cvv"
			  />
  		</label>
		</div>

		<button class="bg-cyan-500 p-3 rounded text-zinc-900 font-semibold">
		  REGISTER CARD
		</button>
	</form>
</template>
