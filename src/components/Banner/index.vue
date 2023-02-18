<template>
    <!-- 主轮播图-->
    <div class="banner">
      <el-carousel height="500px" trigger="click">
        <el-carousel-item v-for="banner in bannerData" :key="banner.id">
          <img :src="banner.imgUrl" class="bannerImg">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useHomeStore } from '@/store/home'
import { storeToRefs } from 'pinia'
const homeStore = useHomeStore()
// 从store中获取头部数据和品牌数据
let { bannerData } = storeToRefs(homeStore)
onMounted(() => {
  // 请求获取banner数据
  homeStore.reqBannerStoreData()
})
</script>

<style lang="less" scoped>

</style>