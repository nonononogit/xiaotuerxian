import { createRouter, createWebHashHistory } from 'vue-router';
import { useUserStore } from '@/store/userInfo';
import routes from './routes'
import pinia from '@/store';
const router = createRouter({
  history: createWebHashHistory(),
  routes,  
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
})
const userStore = useUserStore(pinia)
// 前置导航守卫
router.beforeEach((to, from, next) => {
  // // 需要登录的路由：地址是以 /member 开头
  // const profile  = useUserStore(pinia).userInfo
  // if (!profile.token && to.path.startsWith('/member')) {
  //   return next('/login?redirectUrl=' + encodeURIComponent(to.fullPath))
  // }
  // next()
  const token = userStore.userInfo.token
  if (token) {
    if (to.name === 'login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (!to.path.startsWith('/cart')) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})
export default router