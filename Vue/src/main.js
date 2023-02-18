import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'
import { library } from '../node_modules/@fortawesome/fontawesome-svg-core'
import { faBars, faChevronDown, faChevronUp, faMagnifyingGlass, faShoppingCart, faUser, faChevronLeft, faChevronRight, faClose } from '../node_modules/@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'

import './assets/index.css'

const app = createApp(App)

library.add(faBars, faChevronDown, faChevronUp, faMagnifyingGlass, faShoppingCart, faUser, faChevronLeft, faChevronRight, faClose);

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
