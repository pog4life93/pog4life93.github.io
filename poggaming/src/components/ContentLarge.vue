<script setup lang="ts"></script>

<template>
  <div class="content">
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
</style>
