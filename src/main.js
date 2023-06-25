import './assets/main.css'

import { createApp } from 'vue'
import { pinia } from './plugins/store'

import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(mdiVue, {
    icons: mdijs
})

app.mount('#app')
