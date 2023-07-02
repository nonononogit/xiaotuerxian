<template>
  <el-cascader v-model="defaultOption" ref="cascader" :options="options" @change="handleChange" placeholder="请选择所在地区" />
</template> 

<script setup lang="ts">
import { AddAddressData, AreaData } from '@/api/member';
import { regionData } from 'element-china-area-data'
import { ref } from 'vue';
const props = defineProps<{
  defaultAddress?: AddAddressData
}>()
const emits = defineEmits(['area'])
const options = ref(regionData)
const addressInfo = reactive<AreaData>({
  provinceCode: "",
  cityCode: "",
  countyCode: "",
  fullLocation: "",
})
const defaultOption = ref()
const cascader = ref()
const handleChange = (optionValue: any) => {
  let value = cascader.value.getCheckedNodes()[0]
  addressInfo.fullLocation = value.pathLabels.join(' ')
  Object.keys(addressInfo).forEach((item: string, index: number) => {
    if (item !== 'fullLocation') {
      (addressInfo as any)[item] = value.pathValues[index]
    }
  })
  emits('area', addressInfo)
}
watch(() => props.defaultAddress, (newVal, oldVal) => {
  defaultOption.value = (props?.defaultAddress?.provinceCode + ' ' + props?.defaultAddress?.cityCode + ' ' + props?.defaultAddress?.countyCode).split(' ')
}, { immediate: true, deep: true })
</script>

<style lang="less" scoped></style>