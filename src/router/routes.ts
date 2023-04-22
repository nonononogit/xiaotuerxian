import type {RouteRecordRaw} from "vue-router"
const routes:RouteRecordRaw[] = [
  {
    path:'/home',
    name:'home',
    component:()=>import('@/views/Home/index.vue')
  },
  {
    // 如果想要路由跳转直接显示某个子路由界面，父路由不需要命名，给想要跳转的子路由命名
    // id设置可传可不传，否则面包屑导航提示点击上一级路由时，会警告路径错误
    path:'/category/:id?',
    component:()=>import('@/views/Category/index.vue'),
    children:[
      {
        path:'/category/sub/:id?',
        name:'sub',
        component:()=>import('@/views/Category/Sub/index.vue')
      },
      {
        path:'',
        name:'category',
        component:()=>import('@/views/Category/CategoryHome/index.vue')
      },
    ]
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/Login/index.vue'),
    meta:{
      isHidden:true
    }
  },
  {
    path:'/product/:id?',
    name:'product',
    component:()=>import('@/views/Product/index.vue')
  },
  {
    path:'/',
    redirect:'/home'
  }
]
export default routes