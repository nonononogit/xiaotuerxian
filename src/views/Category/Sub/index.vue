<template>
  <Bread>
    <BreadItem to="/">首页</BreadItem>
    <BreadItem :to="`/category/${categorySubData.parentId}`">{{ categorySubData.parentName }}</BreadItem>
    <transition name="crumbs" mode="out-in">
      <BreadItem :key="categorySubData.id">{{ categorySubData.name }}</BreadItem>
    </transition>
  </Bread>
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
const route = useRoute()
const categoryStore = useCategoryStore()
const { categorySubData } = storeToRefs(categoryStore)
onBeforeRouteUpdate(to => {
  categoryStore.reqCategorySubStoreData(to.params.id as string)
})

onMounted(() => {
  categoryStore.reqCategorySubStoreData(route.params.id as string)
})

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