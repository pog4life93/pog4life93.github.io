<script setup lang="ts">
import { computed } from 'vue';
const isMobile = computed(() => (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)));
</script>

<template>
<div class="header">Twitch</div>
  <div class="video-embeds">
    <iframe
      src="https://player.twitch.tv/?channel=xpog4lifex&parent=poggaming.com&muted=true&autoplay=true"
      height="385px"
      width="686px"
      >
    </iframe>
  </div>

  <div class="header">YouTube</div>
  <div class="video-embeds">
    <iframe width="686px" height="385px" src="https://www.youtube.com/embed/Ne54t-eMk40" title="POGGaming" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
  </div>

  <div class="header">Welcome In!!</div>
  <div class="content">
    This website is being created in order to give everyone who loves (or has a complicated relationship with) The Elder Scrolls Online a nice location to get all of their needed information. If you're interested in providing content, ideas, or have any questions, please email me at pog4life93@gmail.com.
    <br><br>
  </div>
  <div class="header">A little about me:</div>
  <div class="content">
    My name is POG4Life. I'm an Elder Scrolls Online Content creator, a full-time father, husband, and college student. My name come from the Marine Corps where I was lucky enough to serve 8.5 years before I was medically discharged due to a shoulder injury I sustained in Iraq. I began creating content on YouTube for others in February of 2022. I began streaming on Twitch May of 2022.
    <br><br>
    I am developing this website, my YouTube channel, and my Twitch channel as a means of improving the community, having some fun, and getting an opportunity to learn more. If you're interested in helping, have questions, or have specific content requests, let me know via email at pog4life93@gmail.com. 
    <br><br>
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
      font-size: .9rem;
    })
}
.content {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    padding: 10px;

    .phone({
      font-size: .9rem;
    })
}
.video-embeds {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
</style>