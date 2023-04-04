<template>
  <div class="crumbs">
    <router-link to="/home">首页</router-link>
    <i class="iconfont iconxiangyoujiantou"></i>
    <transition name="crumbs">
      <a v-if="routeName === 'sub' || routeName === 'product'" @click="toCategory('category',categorySubData.parentId as string)">{{
        categorySubData.parentName || layer1Name }}</a>
      <p v-else :key="categoryData.id">{{ categoryData.name }}</p>
    </transition>
    <div v-if="routeName === 'sub' || routeName === 'product'">
      <i class="iconfont iconxiangyoujiantou"></i>
      <transition name="crumbs">
        <a v-if="routeName === 'product'" @click="toCategory('sub',categories?.id as string)">{{ categories?.name }}</a>
        <p v-else :key="categorySubData.id">{{ categorySubData.name }}</p>
      </transition>
    </div>
    <div v-if="routeName === 'product'">
      <i class="iconfont iconxiangyoujiantou"></i>
      <transition name="crumbs">
        <p v-if="goodsId === goodsDetail?.id">{{ goodsDetail?.name }}</p>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch,getCurrentInstance } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { useCategoryStore } from '@/store/category'
import { storeToRefs } from 'pinia'
import { useHeaderStore } from '@/store/header';
import goodsApi, { GoodsDetaiData } from '@/api/product'
import { ElMessage } from 'element-plus';
import type { SubCategoriesData } from '@/api/category'
// 
const instance = getCurrentInstance()
const goodsId = ref('')
const route = useRoute()
const router = useRouter()
const categoryStore = useCategoryStore()
const { categoryData } = storeToRefs(categoryStore)
const { categorySubData } = storeToRefs(categoryStore)
const headerStore = useHeaderStore()
const routeName = route.name
const emits = defineEmits(['goodsInfo'])
const goodsDetail = ref<GoodsDetaiData>()
// 在商品详情页获取的商品分类数据
const categories = ref<SubCategoriesData>()
const layer1Name = computed(() => {
  return (categories.value?.parent || undefined)?.name
})
// 如果点击的首页
watch(() => router.currentRoute.value.path, (newValue, oldValue) => {
  if (router.currentRoute.value.name === 'home') {
    headerStore.reqHeaderStoreData()
  }
}, { immediate: true })
// 根据跳转的不同路由，请求对应数据
const routeUpdated = async (routeName:string,params:string) => {
  switch (routeName) {
    case 'category':
      categoryStore.reqCategoryStoreData(params)
      break;
    case 'sub':
      categoryStore.reqCategorySubStoreData(params)
      break;
    case 'product':
      goodsId.value = params
      try {
        goodsDetail.value = await goodsApi.reqGoodsDetailData(goodsId.value)
        categories.value = goodsDetail.value.categories.find((item: any) => item.layer === 2)
        emits('goodsInfo',goodsDetail.value)
        instance?.proxy?.$Bus.emit('goodsDetail',goodsDetail.value)
      } catch (error) {
        ElMessage.error('请求获取商品详情数据失败')
      }
      break;
  }
}
// 利用导航守卫，路由更新时触发，点击导航路由变更时，请求对应分类数据，要结合onMounted使用
onBeforeRouteUpdate(to => {
  routeUpdated(to.name as string,to.params.id as string)
})
// 从其他页面跳转到分类页时先发一次请求
onMounted(() => {
  routeUpdated(routeName as string,route.params.id as string)
})
// 点击去商品分类页
const toCategory = (name:string,id:string) => {
  router.push({
    name,
    params: { id }
  })
}
</script>

<style lang="less" scoped>
div {
  display: flex;
  align-items: center;
}

// 面包屑导航
.crumbs {
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
    padding-top: 3px;
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