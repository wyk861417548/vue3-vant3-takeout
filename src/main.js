import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/common.css'
import router from './router'
import plugins from "@/utils/plugins.js";// 各种插件引入
import { createPinia } from "pinia";
import config from '@/utils/config.js'
import 'amfe-flexible'

// 执行mockjs文件
import '@/mock/store.js'

const app = createApp(App)
app.config.globalProperties.$config = config;

app.use(createPinia());
app.use(router)
app.use(plugins)
app.mount('#app')
