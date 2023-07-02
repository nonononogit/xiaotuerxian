<template>
  <div>
    <el-breadcrumb :separator-icon="ArrowRight">
      <TransitionGroup name="crumbs" mode="out-in">
        <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">
          <router-link v-if="item.path" :to="item.id ? `${item.path}/${item.id}` : item.path">{{ item.title
          }}</router-link>
          <span v-else>{{ item.title }}</span>
        </el-breadcrumb-item>
      </TransitionGroup>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, watch } from 'vue';
import type { BreadItem } from '@/types/BreadItem'
const props = defineProps<{
  breadItemList: Array<BreadItem>
}>()
let breadList = ref([
  {
    path: '/',
    title: '首页',
    id: '',
    layer: 0
  }
])
watch(() => props, () => {
  breadList.value = breadList.value.concat(props.breadItemList)
}, { deep: true })
</script>

<style lang="less" scoped>
:deep(.el-breadcrumb) {
  padding: 25px 10px;
  color:#666;
  a,.is-link {
    color:#666;
    font-weight: normal;
  }
  i,span{
    color:#000;
  }
  a:hover {
    color: @bgColor;
  }
}
</style>