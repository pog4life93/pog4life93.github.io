<script setup lang="ts">
import '@/assets/css/brands.css';
import '@/assets/css/fontawesome.css';
import '@/assets/css/solid.css';
</script>

<template>
  <!--Footer-->
  <div class="SocialNav">
    <a href="https://twitter.com/PogLife6" title="Twitter" target="_blank">
      <i class="fa-brands fa-twitter icons"></i>
    </a>
    <a href="https://discord.gg/kwxEWQaNXf" title="Discord" target="_blank">
      <i class="fa-brands fa-discord icons"></i>
    </a>
    <a href="https://www.etsy.com/shop/SavageDuo" title="Merchandise" target="_blank">
      <i class="fa-brands fa-etsy icons"></i>
    </a>
    <a href="https://www.twitch.tv/xpog4lifex" title="Twitch" target="_blank">
      <i class="fa-brands fa-twitch icons"></i>
    </a>
    <a href="https://www.youtube.com/c/POG4LIFE" title="YouTube" target="_blank">
      <i class="fa-brands fa-youtube icons"></i>
    </a>
    <RouterLink to="/contact" title="Contact">
      <i class="fa-solid fa-comments icons"></i>
    </RouterLink>
  </div>
  <div class="DisclaimerNote">
    The Elder Scrolls®️ Online is developed by ZeniMax Online Studios LLC, a ZeniMax Media company.
    ZeniMax, The Elder Scrolls, ESO, Bethesda, Bethesda Softworks and related logos are registered
    trademarks or trademarks of ZeniMax Media Inc. in the US and other countries.
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/css/main.less';
.SocialNav {
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  text-align: center;
  font-weight: 300;
  font-size: 0.9rem;
  background-color: @pog-light-blue;

  .icons {
    padding: 0px 20px;
    font-size: 2em;
    color: #ffffff;
  }
  .icons:hover {
    color: #1f2334;
  }

  .phone({
    font-size: 2.5vw;
  });
}
.DisclaimerNote {
  color: @white;
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  text-align: center;
  font-weight: 200;
  font-size: small;
  background-color: @pog-light-blue;

  .phone({
    font-size: 0.9rem;
  });
}
</style>
