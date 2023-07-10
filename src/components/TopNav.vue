<script setup lang="ts">
import { RouterLink } from 'vue-router';
import M from 'materialize-css';

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
  <nav class="navigation">
    <div class="nav-wrapper">
      <RouterLink to="#" data-target="mobile-demo" class="sidenav-trigger hamburger">
        <i class="material-icons">menu</i>
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
  <ul class="sidenav" id="mobile-demo">
    <li><RouterLink to="/">Home</RouterLink></li>
    <li>
      <RouterLink to="/sets" class="dropdown-trigger">
        Sets
        <i class="material-icons right">arrow_drop_down</i>
      </RouterLink>
    </li>
    <!-- <li><a href="/skills">Skills</a></li> -->
    <!-- <li><a href="AllChampion/champ_pts.html">Champion Points</a></li>
    <li><a href="AllZone/zones.html">Zone Maps</a></li>
    <li><a href="AllCompanions/companion_corner.html">Companion Corner</a></li> -->
  </ul>

  <!--Dropdowns FIXME: When creating dropdown for the mobile, it has to have a different id-->
  <ul id="setdd" class="dropdown-content">
    <li><RouterLink to="/sets/crafted-sets">Craftable</RouterLink></li>
    <!-- <li><a href="AllSets/arena_sets.html">Arena</a></li>
    <li><a href="AllSets/dungeon_sets.html">Dungeon</a></li>
    <li><a href="AllSets/trial_sets.html">Trial</a></li> -->
  </ul>
  <!-- <ul id="skillsdd" class="dropdown-content">
    <li><a href="AllSkills/skills.html">Classes</a></li>
    <li><a href="AllSkills/skills.html">Alliance</a></li>
    <li><a href="AllSkills/skills.html">Armor</a></li>
    <li><a href="AllSkills/skills.html">Crafting</a></li>
    <li><a href="AllSkills/skills.html">Guild</a></li>
    <li><a href="AllSkills/skills.html">Racial</a></li>
    <li><a href="AllSkills/skills.html">Weapon</a></li>
    <li><a href="AllSkills/skills.html">World</a></li>
  </ul> -->
</template>

<style lang="less" scoped>
@import '@/assets/css/main.less';

.navigation {
  display: flex;
  // justify-content: center; TODO: Once Nav is fully set up, center it using this
  background-color: @pog-dark-blue;
  font-family: 'Arial Narrow Bold';
  font-weight: 600;

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
