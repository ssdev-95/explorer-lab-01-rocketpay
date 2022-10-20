import { ref, Ref, watch } from 'vue'
import { regexMatcher } from './regex'

import Visa from '../assets/visa.svg'
import Master from '../assets/master.svg'
import Elo from '../assets/elo.svg'
import Rocket from '../assets/rocket.svg'

export const brandIcons = {
	master: Master,
	visa: Visa,
	elo: Elo,
	rocket: Rocket,
	default: null
}

export const brand:Ref<'default'|'visa'|'master'|'elo'|'rocket'> = ref('default')

export const colors = {
	default: ['#202024', '#121214'],
	rocket: ['#39339F50', '#5151d5'],
	visa: ['#436D99', '#2D57F2'],
	master: ['#C69347', '#DF6F29'],
	elo: ['#FFCB05', '#EF4123']
}

export let ownerName:Ref<string> = ref('')
export let cardNumber:Ref<string> = ref('')
export let cvv:Ref<string> = ref('')
export let expiration:Ref<string> = ref('')

export let isLoading:Ref<boolean> = ref(false)
export let unavailableSubmitAction:Ref<boolean> = ref(true)

export let timeouts:number[] = []
export function handleSubmit(event:Event) {
	event.preventDefault()
	isLoading.value = true

	timeouts.push(setTimeout(() => {
		isLoading.value = false

  	ownerName.value = ''
  	cardNumber.value = ''
  	cvv.value = ''
  	expiration.value = ''
  	brand.value = 'default'

  	alert('Card successfully saved :D')
	}, 3000))
}

export function changeCCBrand(value:string) {
	if(value.length < 6) return

	const matchedBrand = regexMatcher(value)
	brand.value = matchedBrand
}

watch([ownerName, cardNumber, cvv, expiration], () => {
	if(!ownerName.value || !cardNumber.value || !cvv.value || !expiration.value) {
		unavailableSubmitAction.value = true
	} else {
		unavailableSubmitAction.value = false
	}
})
