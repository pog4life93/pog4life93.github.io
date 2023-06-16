<script setup lang="ts">
import { computed } from 'vue';

import HeaderLarge from '@/components/HeaderLarge.vue';
import ContentLarge from '@/components/ContentLarge.vue';

const isMobile = computed(() =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
);
</script>

<template>
  <HeaderLarge>Twitch</HeaderLarge>
  <div class="video-embeds">
    <iframe
      src="https://player.twitch.tv/?channel=xpog4lifex&parent=poggaming.com&muted=true&autoplay=true"
      class="video"></iframe>
  </div>

  <HeaderLarge>YouTube</HeaderLarge>
  <div class="video-embeds">
    <iframe
      src="https://www.youtube.com/embed/Ne54t-eMk40"
      title="POGGaming"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      class="video"></iframe>
  </div>

  <HeaderLarge>Welcome In!!</HeaderLarge>
  <ContentLarge>
    This website is being created in order to give everyone who loves (or has a complicated
    relationship with) The Elder Scrolls Online a nice location to get all of their needed
    information. If you're interested in providing content, ideas, or have any questions, please
    email me at pog4life93@gmail.com.
  </ContentLarge>

  <HeaderLarge>A little about me:</HeaderLarge>
  <ContentLarge>
    My name is POG4Life. I'm an Elder Scrolls Online Content creator, a full-time father, husband,
    and college student. My name come from the Marine Corps where I was lucky enough to serve 8.5
    years before I was medically discharged due to a shoulder injury I sustained in Iraq. I began
    creating content on YouTube for others in February of 2022. I began streaming on Twitch May of
    2022.
    <br />
    <br />
    I am developing this website, my YouTube channel, and my Twitch channel as a means of improving
    the community, having some fun, and getting an opportunity to learn more. If you're interested
    in helping, have questions, or have specific content requests, let me know via email at
    pog4life93@gmail.com.
  </ContentLarge>
</template>

<style lang="less" scoped>
@import '@/assets/css/main.less';

@video-width: 686px;
@phone-video-width: 368px;
.video-embeds {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.video {
  width: @video-width;
  height: calc(@video-width * 0.56);

  .phone({
    width: @video-width;
    height: calc(@phone-video-width * 0.56);
  });
}
</style>
