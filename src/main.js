import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/common.css'
import router from './router'
import plugins from "@/utils/plugins.js";// 各种插件引入
import 'amfe-flexible'

const app = createApp(App)

app.use(router)
app.use(plugins)
app.mount('#app')
