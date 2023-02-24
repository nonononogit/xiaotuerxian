<template>
  <div class="sub-attr">
    <div class="sub-attr-item" v-for="saleProperties in categorySubData.saleProperties" :key="saleProperties.id">
      <div class="left-tilte">
        {{ saleProperties.name }}:
      </div>
      <div class="middle-all">
        <a href="javascript:;" :class="{ active: saleProperties.select === '1' }"
          @click="selectAll(saleProperties)">全部</a>
      </div>
      <ul class="right-attr" ref="propertiesGoods">
        <li v-for="properties in saleProperties.properties" :key="properties.id">
          <a href="javascript:;" :class="{ active: properties.select === properties.id }"
            @click="selectProperties(properties, saleProperties)">{{ properties.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { AttrsParams, SalePropertiesItemData, SubSalePropertiesData } from '@/api/category';
import { useCategoryStore, } from '@/store/category'
import { storeToRefs } from 'pinia'
import { defineComponent, ref, getCurrentInstance } from 'vue';
export default defineComponent({
  name: 'Sub-Attr'
})
</script>
<script setup lang="ts">
const categoryStore = useCategoryStore()
const { categorySubData } = storeToRefs(categoryStore)
const instance = getCurrentInstance()
const attrs = ref<AttrsParams[]>([])
// 点击选择销售属性
const selectProperties = (properties: SalePropertiesItemData, saleProperties: SubSalePropertiesData) => {
  // 排他思想，给点击的那个属性赋值id，其他都全部置为空串
  saleProperties.properties.forEach(item => {
    item.select = ''
  })
  properties.select = properties.id
  saleProperties.select = '0'
  // 收集请求参数
  let obj = {
    groupName: saleProperties.name,
    propertyName: properties.name
  }
  // 判断点击的是不是同一个销售属性类目下的，如果点击的同一个销售属性类目，则直接替换
  let index = attrs.value.findIndex(item => item.groupName === obj.groupName)
  if (index !== -1) {
    attrs.value.splice(index, 1, obj)
  } else {
    attrs.value.push(obj)
  }
  // 第二种写法：
  // if (attrs.value.some(item => item.groupName === obj.groupName)) {
  //   attrs.value.splice(attrs.value.findIndex(item=>item.groupName===obj.groupName),1,obj)
  // }else{
  //   attrs.value.push(obj)
  // }
  // 将选择好的销售属性列表数据传给兄弟组件请求最新的数据
  instance?.proxy?.$Bus.emit('attr', attrs.value)
}
// 点击销售属性全部
const selectAll = (saleProperties: SubSalePropertiesData) => {
  // 排他思想，给“全部”按钮赋值，将其他属性按钮全部置为空串
  saleProperties.select = '1'
  saleProperties.properties.forEach(item => {
    item.select = ''
  })
  // 过滤出已经选择全部的销售属性类
  let tempAttrs = attrs.value.filter(item => item.groupName !== saleProperties.name)
  attrs.value = tempAttrs
  // 将选择好的销售属性列表数据传给兄弟组件请求最新的数据
  instance?.proxy?.$Bus.emit('attr', attrs.value)
}


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
        color: black;
      }

      .active {
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

      .active {
        color: #27ba9b;
      }
    }


  }
}
</style>