<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import { defineComponent } from '@vue/runtime-core'
import router from './router';
</script>

<template>
  <Header v-if="!router.currentRoute.value.meta.isHidden"></Header>
  <router-view></router-view>
  <Footer v-if="!router.currentRoute.value.meta.isHidden"></Footer>
</template>

<style lang="less" scoped></style>

