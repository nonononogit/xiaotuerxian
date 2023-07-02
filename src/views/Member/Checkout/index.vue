<template>
  <div class="container">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/cart' }">购物车</el-breadcrumb-item>
      <Transition name="crumbs" mode="out-in">
        <el-breadcrumb-item>填写订单</el-breadcrumb-item>
      </Transition>
    </el-breadcrumb>
    <main>
      <Address></Address>
      <GoodsInfo></GoodsInfo>
      <TimeAndPay></TimeAndPay>
      <Money></Money>
      <div class="submit">
        <button>提交订单</button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import Address from './Address/index.vue'
import GoodsInfo from './GoodsInfo/index.vue'
import TimeAndPay from './TimeAndPay/index.vue'
import Money from './Money/index.vue'
import { useMemberStore } from '@/store/member'
const memberStore = useMemberStore()
memberStore.getOrder()
</script>

<style lang="less" scoped>
:deep(.el-breadcrumb) {
  padding: 25px 10px;

  .is-link {
    font-weight: normal;
  }

  .is-link:hover {
    color: @bgColor;
  }
}

main {
  padding: 0 20px;
  background-color: white;

  :deep(.title) {
    font-size: 16px;
    font-weight: 400;
    padding-left: 10px;
    line-height: 70px;
    border-bottom: 1px solid #f5f5f5;
  }

  .submit {
    text-align: right;
    padding: 60px;
    border-top: 1px solid #f5f5f5;

    button {
      background: #27ba9b;
      color: #fff;
      width: 180px;
      height: 50px;
      font-size: 16px;
      text-align: center;
      border: 1px solid transparent;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
</style>