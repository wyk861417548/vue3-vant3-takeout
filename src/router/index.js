import {createRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
  // hash模式：createWebHashHistory，history模式：createWebHistory
  history:createWebHashHistory(),
  routes: [
    {path:'/',component:()=>import('@/views/index.vue')},
    {path:'/store',component:()=>import('@/views/store/index.vue')},
  ]
})

export default router;