import { createApp } from 'vue'
import App from './App.vue'
import {store} from './store'
import {router} from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// import Vuex from 'vuex'

// import Vue from 'vue'

// Vue.use(ElementPlus)

// new Vue({
//     el: '#app',
//     // router,
//     // store,
//     render: (h) => h(App),
//   })
createApp(App)
    .use(ElementPlus)
    .use(store)
    .use(router)
    .mount('#app')
// const app = createApp(App)
// app.use(store)
// app.mount('#app')
