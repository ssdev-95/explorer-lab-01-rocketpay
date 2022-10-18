import { ref, Ref, watch } from 'vue'

import Visa from '../assets/visa.svg'
import Master from '../assets/master.svg'
import Elo from '../assets/elo.svg'
import Rocket from '../assets/rocket.svg'

const brandIcons = {
	master: Master,
	visa: Visa,
	elo: Elo,
	default: Rocket
}

const brand:Ref<'default'|'visa'|'master'|'elo'> = ref('default')

const colors = {
	default: ['#202024', '#121214'],
	visa: ['#436D99', '#2D57F2'],
	master: ['#C69347', '#DF6F29'],
	elo: ['#FFCB05', '#EF4123']
}

let ownerName:Ref<string> = ref('')
let cardNumber:Ref<string> = ref('')
let cvv:Ref<string> = ref('')
let expiration:Ref<string> = ref('')

watch(cardNumber, () => console.log(cardNumber))

export {
	ownerName,
	cardNumber,
	cvv,
	expiration,
	colors,
	brand,
	brandIcons
}
