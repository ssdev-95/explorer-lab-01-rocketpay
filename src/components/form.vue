<template>
  <form class="flex-1 max-w-[500px] text-zinc-100 flex flex-col gap-5">
	  <label class="flex flex-col gap-2">
		  <p class="text-sm">CARD NUMBER</p>

			<input
			  class="bg-zinc-900 w-full rounded-sm ring-1 ring-zinc-500 focus:ring-zinc-100 px-3 py-2"
			  name="cardNumber"
				type="number"
			/>
		</label>

		<label class="flex flex-col gap-2">
		  <p class="text-sm">OWNER NAME</p>

			<input
			  class="bg-zinc-900 w-full border-0 rounded-sm ring-1 ring-zinc-500 focus:ring-zinc-100 px-3 py-2"
			  name="ownerName"
				type="text"
			/>
		</label>

    <div class="w-full flex gap-5">
  		<label class="flex flex-col gap-2">
	  	  <p class="text-sm">EXPIRATION</p>

		  	<input
				  class="bg-zinc-900 w-full rounded-sm ring-1 ring-zinc-500 focus:ring-zinc-100 px-3 py-2"
					name="expiration"
				  type="text"
  			/>
  		</label>

  		<label class="flex flex-col gap-2">
  		  <p class="text-sm">CVV</p>

  			<input
  			  class="bg-zinc-900 w-full rounded-sm ring-1 ring-zinc-500 focus:ring-zinc-100 px-3 py-2"
	  			name="cvv"
		  		type="number"
			  />
  		</label>
		</div>

		<button class="bg-cyan-500 p-3 rounded-md text-zinc-900 font-semibold">
		  REGISTER CARD
		</button>
	</form>
</template>
