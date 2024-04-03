import App from './App.vue'

import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useCounterStore } from './stores/counter'

const app = createApp(App)
app.use(createPinia())
const counterStore = useCounterStore()
console.log('main.js', counterStore.count)

app.mount('#app')
