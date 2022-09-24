import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
export const useLazyData = (apiFn:any) => {
  // target表示组件的最外层div元素
  const target = ref(null)
  // 监听组件是否进入可视区
  const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
    // 如果target对应的DOM进入可视区，那么该回调函数就触发
    if (isIntersecting) {
      // 被监听的DOM进入了可视区:此时调用接口获取数据；停止继续监听
      stop()
      apiFn()
    }
  })
  // target表示被监听的DOM元素，需要在模板中被ref属性绑定
  return target   
}