import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'

// import '../src/assets/style/bootstrap5.scss'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 待修改
// 全局前置守卫， 前置中间件
router.beforeEach((to, from, next) => {
    console.log("to", to)
    console.log("from", from)
    next()

    /* if(to.name == 'member'){
    //     next(false)
    // }else{
    //     next()
     }*/   //member页拦截

     //定义一个别名，就能把它拦截下来
    //  if(to.name == 'neirong'){
    //      next(false)
    //  }else{
    //      next()
    //  }           
})
// Bootstrap5 JS
// import * as bootstrap from 'bootstrap'

createApp(App).use(pinia).use(router).mount('#app')
