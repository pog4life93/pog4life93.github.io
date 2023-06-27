<script setup lang="ts">
defineProps({ centerText: Boolean });
</script>

<template>
  <div class="header" :class="{ 'center-text': centerText }">
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/css/main.less';

.header {
  color: @white;
  width: 100%;
  font-size: 1.8rem;
  font-family: 'Arial Narrow Bold';
  font-weight: 600;
  display: flex;
  border-bottom: 1px solid @pog-light-grey;

  .phone({
      font-family: 'Arial';
      font-size: 0.9rem;
    });
}

.center-text {
  text-align: center;
  justify-content: center;
}
</style>
