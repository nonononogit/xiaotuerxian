<template>
  <div class="bread-item">
    <router-link v-if="props.to" :to="props.to">
      <slot />
    </router-link>
    <span v-else>
      <slot />
    </span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  to: {
    type: [String, Object],
    default: ''
  }
})
</script>
