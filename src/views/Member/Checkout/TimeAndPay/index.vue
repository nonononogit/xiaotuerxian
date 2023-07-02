<template>
  <h3 class="title">配送时间</h3>
  <ul>
    <li>不限送货时间：周一至之日</li>
    <li>工作日送货：周一至周五</li>

    <li>双休日、假日送货：周六至周日</li>
  </ul>
  <h3 class="title">支付方式</h3>
  <ul>
    <li>在线支付</li>
    <li>货到付款</li>
    <li class="hint">*货到付款需付5元手续费</li>
  </ul>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
ul {
  display: flex;
  padding: 20px;

  li {
    width: 228px;
    height: 50px;
    border: 1px solid #e4e4e4;
    text-align: center;
    line-height: 48px;
    margin-right: 25px;
    color: #666;
    cursor: pointer;
    font-size: 14px;
    &:hover{
      border-color:#27ba9b;
    }
  }

  .hint {
    border: none;
    color: red;
    text-align: left;
    font-size: 10px;
  }
}
</style>