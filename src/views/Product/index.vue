<template>
  <div class="container">
    <ProductHeader></ProductHeader>
    <ProductKind :goodsId="router.currentRoute.value.params.id"></ProductKind>
    <ProductDetail :goodsId="router.currentRoute.value.params.id"></ProductDetail>
  </div>
</template>
<script setup lang="ts">
import ProductHeader from '@/views/Product/components/Product-Header.vue'
import ProductKind from '@/views/Product/components/Product-Kind.vue'
import ProductDetail from '@/views/Product/components/Product-Detail.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<style lang="less" scoped></style>