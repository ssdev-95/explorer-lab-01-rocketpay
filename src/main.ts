import { createApp } from 'vue'
import { IMaskComponent } from 'vue-imask'

import eruda from 'eruda'
import erudaDOM from 'eruda-dom'

import './style.css'
import App from './App.vue'

createApp(App).component('mask-input', IMaskComponent).mount('#app')

if(
	window &&
	(window.innerWidth <= 869) &&
  import.meta.env.DEV
) {
	eruda.init()
	eruda.add(erudaDOM)
}
