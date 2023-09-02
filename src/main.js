import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'

import App from './App.vue'
import router from './router'
import store from './store'

import 'view-ui-plus/dist/styles/viewuiplus.css'

// import "./assets/scss/reset.scss"

const vueApp = createApp(App)
vueApp.use(store)
    .use(router)
    .use(ViewUIPlus)
    .mount('#app')
