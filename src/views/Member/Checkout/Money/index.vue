<template>
  <h3 class="title">金额明细</h3>
  <div class="amount-detail-container">
    <dl>
      <dt>商品件数：</dt>
      <dd>{{ checkoutData?.summary?.goodsCount }}件</dd>
    </dl>
    <dl>
      <dt>商品总价：</dt>
      <dd>¥{{ checkoutData?.summary?.totalPrice }}</dd>
    </dl>
    <dl>
      <dt>运&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;费：</dt>
      <dd>¥{{checkoutData?.summary?.postFee}}</dd>
    </dl>
    <dl>
      <dt>应付总额：</dt>
      <dd class="amount-total">¥{{checkoutData?.summary?.totalPayPrice}}</dd>
    </dl>
  </div>
  
</template>

<script setup lang="ts">
import {useMemberStore} from '@/store/member'
import { storeToRefs } from 'pinia';
const memberStore = useMemberStore()
const {checkoutData} = storeToRefs(memberStore)
</script>

<style lang="less" scoped>
.amount-detail-container {
  padding: 20px 0;

  dl {
    display: flex;
    justify-content: flex-end;
    line-height: 50px;

    dd {
      width: 240px;
      text-align: right;
      padding-right: 70px;
    }

    .amount-total {
      font-size: 20px;
      color: #cf4444;
    }
  }
}
</style>