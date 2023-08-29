<script setup lang="ts"></script>

<template>
  <div class="champion">
    <RouterLink to="/cp/green-cp">
      <button class="button-green">Green CP</button>
    </RouterLink>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/css/main.less';
.button {
  &-green {
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

.champion {
  display: flex;

  .phone({
    justify-content: center;
  });
}
</style>
