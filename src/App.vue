<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import { defineComponent } from '@vue/runtime-core'
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style lang="less" scoped>

</style>

