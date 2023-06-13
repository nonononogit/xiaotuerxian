<template>
  <dl class="sku" v-for="specs in goods?.specs" :key="specs.name">
    <dt>{{ specs.name }}</dt>
    <dd>
      <template v-for="values in specs.values" :key="values.name">
        <img :class="{ active: values.selected }" v-if="values.picture" :src="values.picture" :alt="values.name"
          @click="selectAttr(specs, values)">
        <span :class="{ active: values.selected }" v-else @click="selectAttr(specs, values)">{{ values.name
        }}</span>
      </template>
    </dd>
  </dl>
</template>

<script setup lang="ts">
import { SkuData, SpecsData, SpecsValuesData } from '@/api/product'
const props = defineProps(['goods', 'skuId','attrsText'])
const emit = defineEmits(['changeAttr'])
const arr = ref<Array<{ name: string, valueName: string }>>([])
// 点击选择商品属性
const selectAttr = (specs: SpecsData, values: SpecsValuesData) => {
  let index = arr.value?.findIndex(item => item.name === specs.name)
  if (values.selected) {
    values.selected = false
    arr.value.splice(index, 1)
    return
  }
  specs.values.forEach(item => {
    item.selected = false
  })
  values.selected = !values.selected
  // 选择的商品属性是否重复
  let isRepeat = arr.value?.some(item => {
    if (item.name === specs.name && item.valueName === values.name) {
      return true
    }
  })
  // 如果时重复的直接return
  if (isRepeat) return
  // 如果不是重复的，找出商品规格索引
  if (index === -1) {
    // 如果找不到则说明该规格没有选择过，直接添加
    arr.value.push({ name: specs.name, valueName: values.name })
  } else {
    // 如果可以找到，说明该规格选择过，但替换到之前的规格
    arr.value.splice(index, 1, { name: specs.name, valueName: values.name })
  }
  changeAttr()
}
// 找到默认选中的属性
watch(() => [props.goods.specs], () => {
  if(props.goods.skus?.length){
    arr.value = props.goods.skus.find((item:SkuData)=>item.skuCode == props.skuId).specs
    changeAttr()
  }
  if (props.attrsText) {
    props.goods.specs.forEach((item: SpecsData) => {
      item.values.forEach((item2: SpecsValuesData) => {
        if (props.attrsText.includes(item2.name)) {
          item2.selected = true
        }
      })
    })
  }
}, { immediate: true })

// 传给父组件选好的属性
const changeAttr = () => {
  emit('changeAttr', arr.value)
}
</script>

<style lang="less" scoped>
.sku {
  display: flex;
  align-items: center;
  padding: 0 0 10px 0px;
  color: #999;

  dt {
    width: 50px;
  }

  dd {
    flex: 1;
    line-height: 40px;

    img {
      width: 50px;
      height: 50px;
      margin: 0 10px 5px 0;
      border: 1px solid #e4e4e4;
      cursor: pointer;
    }

    .active {
      border: 1px solid #27ba9b;
    }

    span {
      display: inline-block;
      height: 30px;
      line-height: 28px;
      padding: 0 20px;
      border: 1px solid #e4e4e4;
      margin-right: 10px;
      user-select: none;
      cursor: pointer;
    }
  }
}
</style>