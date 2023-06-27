<script setup lang="ts"></script>

<template>
  <div class="alert">
    We are steadily working to add content that will allow you a one-stop shop for your Elder
    Scrolls Online needs!!
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/css/main.less';
.alert {
  color: @white;
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  font-size: 1.8rem;
  background-color: @pog-light-blue;

  .phone({
    font-size: 0.9rem;
  });
}
</style>
