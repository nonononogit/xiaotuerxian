<template>
  <!-- <div class="crumbs">
    <router-link to="/home">首页</router-link>
    <i class="iconfont iconxiangyoujiantou"></i>
    <a @click="toCategory(categorySubData.parentId as string)">{{ categorySubData.parentName }}</a>
    <i class="iconfont iconxiangyoujiantou"></i>
    让面包屑导航切换的时候，有过渡效果
    <transition name="crumbs">
      <p v-if="category2Id === categorySubData.id">{{ categorySubData.name }}</p>
    </transition>
  </div> -->
  <Crumbs></Crumbs>
  <Attr></Attr>
  <Goods></Goods>
</template>
<script lang="ts">
import Attr from './Attr/index.vue'
import Goods from './Goods/index.vue'
import { ref, onMounted, defineComponent } from 'vue';
import { useRoute, onBeforeRouteUpdate, useRouter } from 'vue-router'
import { useCategoryStore, } from '@/store/category'
import { storeToRefs } from 'pinia'
export default defineComponent({
  name: 'Sub-Goods'
})
</script>

<script setup lang="ts">
// const route = useRoute()
// const router = useRouter()
// const category2Id = ref('')
// const categoryStore = useCategoryStore()
// const { categorySubData } = storeToRefs(categoryStore)
// // 方式二：利用导航守卫，路由更新时触发，点击导航路由变更时，请求对应分类数据
// onBeforeRouteUpdate(to => {
//   if (to.name === 'sub') {
//     category2Id.value = to.params.id as string
//     categoryStore.reqCategorySubStoreData(to.params.id as string)
//   }
// })
// // 从其他页面跳转到分类页时先发一次请求
// onMounted(() => {
//   categoryStore.reqCategorySubStoreData(route.params.id as string)
//   category2Id.value = route.params.id as string
// })
// // 跳转至category页面
// const toCategory = (id: string) => {
//   router.push({
//     name: 'category',
//     params: { id }
//   })
// }
</script>

<style lang="less" scoped>
// 面包屑导航
.crumbs {
  display: flex;
  align-items: center;
  margin: 25px 0 25px 10px;
  font-size: 14px;

  a {
    color: #666666;
    transition: all .5s ease;
  }

  a:hover {
    color: #27ba9b;
  }

  .iconfont {
    margin: 0 5px;
    font-size: 12px;
  }
}

// 面包屑导航过渡效果
.crumbs-enter-active,
.crumbs-leave-active {
  transition: all 0.5s ease;
}

.crumbs-enter-from,
.crumbs-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>