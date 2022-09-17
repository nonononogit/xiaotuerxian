import type {RouteRecordRaw} from "vue-router"
const routes:RouteRecordRaw[] = [
  {
    path:'/home',
    component:()=>import('@/views/Home/index.vue')
  },
  {
    path:'/',
    redirect:'/home'
  }
]
export default routes