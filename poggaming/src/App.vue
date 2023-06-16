<script setup lang="ts">
import { computed } from 'vue';
import { RouterView } from 'vue-router';
import TopNav from '@/components/TopNav.vue';
import AlertBanner from '@/components/AlertBanner.vue';
import SideBar from '@/components/SideBar.vue';

const isMobile = computed(() =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
);
</script>

<template>
  <div class="lvl1">
    <div class="lvl2">
      <header class="lvl3">
        <div class="hamburger-icon-position">
          <TopNav v-if="isMobile" />
        </div>
        <div class="heroimage"><a href="index.html" /></div>

        <TopNav v-if="!isMobile" />
        <AlertBanner />
      </header>
      <div class="lvl4">
        <div class="main">
          <RouterView />
        </div>
        <div class="sidebar">
          <SideBar v-if="!isMobile" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import '@/assets/css/main.less';

html {
  color: @white;
  background-color: @pog-grey;
  background-image: url('@/assets/images/background.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

/*Overriding webkit*/
*:focus-visible {
  outline-offset: 0px;
  outline: 0px;
}
</style>

<style lang="less" scoped>
@import '@/assets/css/main.less';
.lvl1 {
  display: flex;
  justify-content: center;
}
.lvl2 {
  flex-flow: column;
  width: 1000px;
  min-height: 100vh;
  display: flex;
  background: rgba(26, 26, 26, 0.95);

  .phone({
    width: 100%;
  });
}
.lvl3 {
  display: flex;
  flex-flow: column;
  height: fit-content;
}
.lvl4 {
  display: flex;
  flex-flow: row;
  padding: 10px;
}
.heroimage {
  display: flex;
  width: 100%;
  justify-content: center;
  line-height: 0;

  &::before {
    content: url('@/assets/images/heroImage.jpg');
  }

  .phone(
    {
      content: url('@/assets/images/heroImage.jpg');
    }
  );
}
.main {
  display: flex;
  flex-flow: column;
  width: 70%;
  margin: 10px 0px 0px 5px;

  .phone({
    width: 100%;
    margin: 10px 0 0 0;
  });
}
.sidebar {
  display: flex;
  width: 30%;
  margin: 10px 5px 0px 0px;
  flex-direction: column;
  text-align: center;
}

.hamburger-icon-position {
  position: absolute;
  z-index: 1;
}
</style>
