import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSelect from "vue-select";

import App from './App.vue'
import router from './router'
import DefaultLayout from './layouts/default.vue'
import "vue-select/dist/vue-select.css";

import '/src/assets/global.scss'

const app = createApp(App)
app.component('VSelect', VueSelect)
app.component('default-layout', DefaultLayout)
app.use(createPinia())
app.use(router)

app.mount('#app')
