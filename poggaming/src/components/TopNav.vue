<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import M from 'materialize-css';

const isMobile = computed(() =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
);

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
</script>

<template>
  <!--Navigation bar-->
  <div v-if="!isMobile">
    <nav class="navigation">
      <div class="nav-wrapper">
        <ul class="right hide-on-med-and-down">
          <li>
            <RouterLink to="/" class="navigation-items dropdown-trigger" data-target="setdd">
              Sets
              <i class="material-icons right">arrow_drop_down</i>
            </RouterLink>
          </li>
          <li>
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
          </li>
        </ul>
      </div>
    </nav>
  </div>

  <!--Navigation sidebar mobile-->
  <div v-else>
    <nav class="mobile">
      <a href="#" data-target="mobile-demo" class="sidenav-trigger hamburger">
        <i class="material-icons">menu</i>
      </a>
      <ul class="sidenav" id="mobile-demo">
        <li>
          <a class="dropdown-trigger" href="AllSets/sets.html">
            Sets
            <i class="material-icons right">arrow_drop_down</i>
          </a>
        </li>
        <li><a href="AllSkills/skills.html">Skills</a></li>
        <li><a href="AllChampion/champ_pts.html">Champion Points</a></li>
        <li><a href="AllZone/zones.html">Zone Maps</a></li>
        <li><a href="AllCompanions/companion_corner.html">Companion Corner</a></li>
      </ul>
    </nav>
  </div>

  <!--Dropdowns FIXME: When creating dropdown for the mobile, it has to have a different id-->
  <ul id="setdd" class="dropdown-content">
    <li><a href="AllSets/craftable_sets.html">Craftable</a></li>
    <li><a href="AllSets/arena_sets.html">Arena</a></li>
    <li><a href="AllSets/dungeon_sets.html">Dungeon</a></li>
    <li><a href="AllSets/trial_sets.html">Trial</a></li>
  </ul>
  <ul id="skillsdd" class="dropdown-content">
    <li><a href="AllSkills/skills.html">Classes</a></li>
    <li><a href="AllSkills/skills.html">Alliance</a></li>
    <li><a href="AllSkills/skills.html">Armor</a></li>
    <li><a href="AllSkills/skills.html">Crafting</a></li>
    <li><a href="AllSkills/skills.html">Guild</a></li>
    <li><a href="AllSkills/skills.html">Racial</a></li>
    <li><a href="AllSkills/skills.html">Weapon</a></li>
    <li><a href="AllSkills/skills.html">World</a></li>
  </ul>
</template>

<style lang="less" scoped>
.navigation {
  display: flex;
  justify-content: center;
  background-color: #1f2334;
  font-family: 'Arial Narrow Bold';
  font-weight: 600;
}
.hamburger-left {
  margin-right: auto;
}
.hamburger {
  color: #278442;
}
.navigation-items {
  font-size: 1.5em;
  color: #ffffff;
  margin-left: 1vw;
  margin-right: 1vw;
  min-width: 120px;

  &:hover {
    color: #278442;
    background-color: #1f2334;
  }
}
.navigation-items:hover {
  color: #278442;
  background-color: #1f2334;
}

// Overrides to materialize's css for the hamburger menu
.mobile {
  box-shadow: none;
  background-color: none;
  width: auto;
  height: auto;
  line-height: auto;
  -webkit-box-shadow: none;
  display: initial;
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
