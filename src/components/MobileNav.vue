<script setup lang="ts">
const emit = defineEmits(['link-clicked']);
</script>

<template>
  <div class="mobile-nav">
    <RouterLink to="/" class="link" @click="emit('link-clicked')">Home</RouterLink>
    <RouterLink to="/sets" class="link" @click="emit('link-clicked')">Sets</RouterLink>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/css/main.less';
.mobile-nav {
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 60vw;
  height: 100vh;
  background-color: @pog-dark-blue;
  z-index: 10;
}

.link {
  display: block;
  width: 100%;
  height: 50px;
  padding: 8px 0px 3px 15px;
  font-size: 20px;
  font-family: 'Arial Narrow Bold';
  font-weight: 600;
  color: @white;

  &:hover {
    color: @pog-green;
  }

  &:active {
    color: @white;
  }
}

.sub-link {
  display: block;
  z-index: 10;
}
</style>
