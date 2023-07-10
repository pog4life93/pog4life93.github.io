<script setup lang="ts">
import { CraftedSets } from '@/constants/CraftedSets';
import SetContainer from '@/components/SetContainer.vue';
</script>

<template>
  <div v-for="craftedSet in CraftedSets" :key="craftedSet.Name" class="border">
    <SetContainer :set="craftedSet" />
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/css/main.less';
.border {
  border-bottom: 1px solid @white;
  padding-bottom: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
}
</style>
