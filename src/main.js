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

/** 
 * 页面跳转  
 *    如果设置data-url 使用路由地址跳转 （this.$route.query接受参数，地址栏上可见参数）
 *     params 是可以
 * */
app.config.globalProperties.$skip = (url,params)=>{
  if(!url)return;
  router.push({path:url,query:params});
}


app.use(createPinia());
app.use(router)
app.use(plugins)
app.mount('#app')
