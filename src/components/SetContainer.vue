<script setup lang="ts">
import type { PropType } from 'vue';
import type Set from '@/models/Set';

defineProps({ set: Object as PropType<Set> });
</script>

<template>
  <div class="set">
    <div class="info">
      <div class="name">{{ set?.Name }}</div>
      <div class="type">{{ 'Type: ' + set?.Type }}</div>
      <div class="zone">{{ 'Zone: ' + set?.Zone }}</div>
    </div>
    <div class="attributes">
      <div v-for="attribute in set?.Attributes" :key="attribute" class="trait">{{ attribute }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/css/main.less';
.set {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;

  .phone({
    flex-flow: column;
  });
}
.info {
  display: flex;
  width: 30%;
  flex-flow: column;
  padding-right: 8px;

  .phone({
    width: 100%;
  });
}
.name {
  display: flex;
  font-size: 1.5em;
  font-weight: 675;
  color: @pog-gold;

  .phone({
    justify-content: center;
  });
}

.type {
  display: flex;
  font-size: 1.2em;

  .phone({
    justify-content: center;
  });
}

.zone {
  display: flex;
  font-size: 1.2em;

  .phone({
    justify-content: center;
    padding-bottom: 12px;
  });
}
.attributes {
  display: flex;
  flex-flow: column;
  width: 70%;

  .phone({
    width: 100%;
    text-align: center;
  });
}
</style>
