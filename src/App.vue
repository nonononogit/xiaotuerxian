<script setup lang="ts">
import Header from '@/layout/Header/index.vue'
import Footer from '@/layout/Footer/index.vue'
import { computed, } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
// 给router-view绑定key，解决在product页点击相同路由跳转，页面不更新的问题
const key = computed(() => {
  return router.currentRoute.value.path + Date.now()
})
</script>

<template>
  <Header v-if="!router.currentRoute.value.meta.isHidden"></Header>
  <router-view :key="key"></router-view>
  <Footer v-if="!router.currentRoute.value.meta.isHidden"></Footer>
</template>

<style lang="less">
.diy-popper {
  padding: 0 !important;

  .diy-popper-table {
    height: 310px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #f8f8f8;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: #eee;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #ccc;
    }
  }

  .settle-accounts {
    position: sticky;
    left: 0;
    bottom: 0;
    height: 70px;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background: #f8f8f8;
    align-items: center;

    .total-price {
      padding-left: 10px;
      color: #999;

      p:last-child {
        font-size: 18px;
        color: #cf4444;
      }
    }

    .btn {
      line-height: 50px;
      color: #27ba9b;
      background: #e6faf6;
      width: 180px;
      height: 50px;
      font-size: 16px;
      text-align: center;
      border: 1px solid #27ba9b;
      border-radius: 4px;
    }
  }
}
</style>

