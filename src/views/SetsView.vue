<script setup lang="ts"></script>

<template>
  <div class="sets">
    <RouterLink to="/sets/crafted-sets">
      <button class="button-crafted">Crafted</button>
    </RouterLink>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/css/main.less';
.button {
  &-crafted {
    width: 300px;
    padding: 20px;
    vertical-align: middle;
    text-align: center;
    color: @white;
    font-size: 3rem;
    font-weight: 600;
    border-radius: 20px;
    border: 1px solid @pog-light-blue;
    background-color: @pog-light-blue;

    &:hover {
      cursor: pointer;
      color: @pog-dark-blue;
    }
    .phone({
      width: 250px;
      font-size: 2rem;
      border-radius: 15px;
    });
  }
}

.sets {
  display: flex;

  .phone({
    justify-content: center;
  });
}
</style>
