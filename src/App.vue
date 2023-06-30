<script setup lang="ts">
import { RouterView } from 'vue-router';
// import TopNav from '@/components/TopNav.vue';
import AlertBanner from '@/components/AlertBanner.vue';
import SideBar from '@/components/SideBar.vue';
import SocialNav from '@/components/FooterNav.vue';
</script>

<template>
  <div class="lvl1">
    <div class="lvl2">
      <header class="lvl3">
        <div class="lvl4">
          <!-- <div class="navigation"><TopNav /></div> -->
          <div class="heroimage"><a href="index.html" /></div>
        </div>

        <AlertBanner />
      </header>
      <div class="lvl5">
        <div class="main">
          <RouterView />
        </div>
        <div class="sidebar">
          <SideBar />
        </div>
      </div>
      <div class="lvl3">
        <SocialNav />
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
  width: 100%;
  max-width: 1000px;
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
  flex-flow: column;
  height: fit-content;

  .desktop({
    flex-flow: column-reverse;
  });
}
.lvl5 {
  display: flex;
  flex-flow: row;
  padding: 10px;
  flex: 1 0 auto;

  .laptop({
    flex-flow: column-reverse;
    justify-content: flex-end;
  });
}
.heroimage {
  display: flex;
  width: 100%;
  justify-content: center;
  line-height: 0;

  content: url('@/assets/images/heroImage.jpg');
}
.main {
  display: flex;
  flex-flow: column;
  width: 70%;
  margin: 10px 0px 0px 5px;

  .laptop({
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

  .laptop({
    width: 100%;
  });

  .phone({
    display: none;
  });
}

.navigation {
  display: flex;

  .laptop({
    display: block;
    position: absolute;
    z-index: 1;
  });
}
</style>
