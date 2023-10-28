import '@/assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-teal/theme.css'
import 'primeicons/primeicons.css'
import './plugins/api'

import App from './App.vue'
import router from './router'

import Button from 'primevue/button'
import Fieldset from 'primevue/fieldset'
import InputText from 'primevue/inputtext'
import Divider from 'primevue/divider'

const app = createApp(App)

app.component('Button', Button)
app.component('Fieldset', Fieldset)
app.component('InputText', InputText)
app.component('Divider', Divider)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
