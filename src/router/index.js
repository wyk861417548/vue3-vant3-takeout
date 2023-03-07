import {createRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
  // hash模式：createWebHashHistory，history模式：createWebHistory
  history:createWebHashHistory(),
  routes: [
    {path:'/',component:()=>import('@/views/index.vue'),meta: {keepAlive:true}},
    {path:'/store',component:()=>import('@/views/store/index.vue'),meta: {title:"店铺",keepAlive:true}},
    {path:'/store/order',component:()=>import('@/views/store/order.vue'),meta:{title:'下单'}},
    {path:'/store/result',component:()=>import('@/views/store/result.vue'),meta:{title:'结果'}},
  ]
})

export default router;