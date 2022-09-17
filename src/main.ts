import { createApp } from 'vue'
import './style.css'
import 'swiper/css';
import 'swiper/css/navigation';
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

