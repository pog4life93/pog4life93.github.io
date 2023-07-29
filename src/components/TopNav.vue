<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import M from 'materialize-css';
import MobileNav from './MobileNav.vue';

const mobileOpen = ref(false);

initialize();

function initialize() {
  document.addEventListener('DOMContentLoaded', () => {
    let elems = document.querySelectorAll('.sidenav');
    let options = { edge: 'left' };
    M.Sidenav.init(elems, options);

    let dropdownTrigger = document.querySelectorAll('.dropdown-trigger');
    let dropdownOptions = { coverTrigger: false, hover: true };
    M.Dropdown.init(dropdownTrigger, dropdownOptions);
  });
}

function openMenu() {
  mobileOpen.value = true;
  setTimeout(() => {
    document.addEventListener('click', handleClickOutside);
  }, 500);
}

const handleClickOutside = (event: any) => {
  const nav = document.querySelector('.mobile-nav');

  if (nav && !nav.contains(event.target.parentNode)) {
    mobileOpen.value = false;
    document.removeEventListener('click', handleClickOutside);
  }
};

function closeMenu() {
  mobileOpen.value = false;
  document.removeEventListener('click', handleClickOutside);
}
</script>

<template>
  <!--Navigation bar-->
  <nav class="navigation">
    <div class="nav-wrapper">
      <RouterLink to="#" data-target="mobile-demo" class="sidenav-trigger hamburger">
        <i class="material-icons" @click="openMenu">menu</i>
      </RouterLink>
      <ul class="right hide-on-med-and-down">
        <li>
          <RouterLink to="/" class="navigation-items">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/sets" class="navigation-items dropdown-trigger" data-target="setdd">
            Sets
            <i class="material-icons right">arrow_drop_down</i>
          </RouterLink>
        </li>
        <!-- <li>
          <RouterLink
            to="/contact"
            class="navigation-items dropdown-trigger"
            data-target="skillsdd">
            Skills
            <i class="material-icons right">arrow_drop_down</i>
          </RouterLink>
        </li>
        <li><a href="AllChampion/champ_pts.html" class="navigation-items">Champion Points</a></li>
        <li><a href="AllZone/zones.html" class="navigation-items">Zone Maps</a></li>
        <li>
          <a href="AllCompanions/companion_corner.html" class="navigation-items">
            Companion Corner
          </a>
        </li> -->
      </ul>
    </div>
  </nav>

  <!--Navigation sidebar mobile-->
  <MobileNav v-if="mobileOpen" @link-clicked="closeMenu"/>
</template>

<style lang="less" scoped>
@import '@/assets/css/main.less';

.navigation {
  display: flex;
  // justify-content: center; TODO: Once Nav is fully set up, center it using this
  background-color: @pog-dark-blue;
  font-family: 'Arial Narrow Bold';
  font-weight: 600;
  z-index: 1;

  .laptop({
    box-shadow: none;
    background-color: none;
    width: auto;
    height: auto;
    line-height: auto;
    -webkit-box-shadow: none;
    display: initial;
  });
}
.hamburger {
  color: @white;
}
.navigation-items {
  font-size: 1.5em;
  color: #ffffff;
  margin-left: 1vw;
  margin-right: 1vw;
  min-width: 120px;

  &:hover {
    color: @pog-green;
    background-color: @pog-dark-blue;
  }
}
.navigation-items:hover {
  color: @pog-green;
  background-color: @pog-dark-blue;
}

.sidenav-trigger {
  height: 0;
  margin: 0 0;

  i {
    height: 0;
    line-height: initial;
  }
}
</style>
