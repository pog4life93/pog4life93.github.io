<script setup lang="ts">
defineProps({ centerText: Boolean });
</script>

<template>
  <div class="content" :class="{ 'center-text': centerText }">
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/css/main.less';

.content {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  padding: 10px;

  .phone({
    font-size: 0.9rem;
  });
}

.center-text {
  text-align: center;
  justify-content: center;
}
</style>
