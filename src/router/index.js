import {createRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
  // hash模式：createWebHashHistory，history模式：createWebHistory
  history:createWebHashHistory(),
  routes: [
    {path:'/',component:()=>import('@/views/home/index.vue')},
    {path:'/home',component:()=>import('@/views/home/index.vue')},
    {path:'/cart',component:()=>import('@/views/cart/index.vue')},
    {path:'/mine',component:()=>import('@/views/mine/index.vue')},
    {path:'/order',component:()=>import('@/views/order/index.vue')},
  ]
})

export default router;