<script setup lang="ts"></script>

<template>
  <div class="header">
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
</style>
