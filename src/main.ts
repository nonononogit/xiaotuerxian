import { createApp } from 'vue'
import './style.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import pinia from './store'


import mitt from 'mitt'
const Mit = mitt()
//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}

const app = createApp(App)
app.use(router)
app.use(pinia)
//Vue3挂载全局API
app.config.globalProperties.$Bus = Mit

app.mount('#app')

