import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// import '../src/assets/style/bootstrap5.scss'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
// Bootstrap5 JS
// import * as bootstrap from 'bootstrap'

createApp(App).use(pinia).mount('#app')
