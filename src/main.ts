import { createApp } from 'vue'

import eruda from 'eruda'
import erudaDOM from 'eruda-dom'

import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

if(
	window &&
	(window.innerWidth <= 869) &&
  import.meta.env.DEV
) {
	eruda.init()
	eruda.add(erudaDOM)
}
