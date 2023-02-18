<template>
  <div class="sub-attr">
    <div class="sub-attr-item" v-for="saleProperties in categorySubData.saleProperties" :key="saleProperties.id">
      <div class="left-tilte">
        {{ saleProperties.name }}:
      </div>
      <div class="middle-all">
        <a href="javascript:;">全部</a>
      </div>
      <ul class="right-attr" ref="propertiesGoods">
        <li v-for="properties in saleProperties.properties" :key="properties.id">
          <a href="javascript:;">{{ properties.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCategoryStore, } from '@/store/category'
import { storeToRefs } from 'pinia'
const categoryStore = useCategoryStore()
const { categorySubData} = storeToRefs(categoryStore)
</script>

<style lang="less" scoped>
// 属性筛选
.sub-attr {

padding: 25px;
background-color: white;
font-size: 14px;

.sub-attr-item {
  display: flex;
  justify-content: flex-start;
  // flex-wrap: wrap;

  .left-tilte {
    width: 80px;
    line-height: 40px;
    color: #999999;
  }

  .middle-all {
    line-height: 40px;
    margin-right: 35px;

    a {
      width: 28px;
      color: #27ba9b;
    }
  }

  .right-attr {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    line-height: 40px;

    a {
      width: 100px;
      display: block;
      margin-right: 35px;
      color: black;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    a:hover {
      color: #27ba9b;
    }
  }
}
}
</style>