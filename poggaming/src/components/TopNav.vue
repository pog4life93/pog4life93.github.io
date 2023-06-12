<script setup lang="ts">
import M from 'materialize-css'

initialize()

function initialize() {
  document.addEventListener('DOMContentLoaded', () => {
		let elems = document.querySelectorAll('.sidenav');
		let options = {edge: 'left'};
		let instances = M.Sidenav.init(elems, options);

		let dropdownTrigger = document.querySelectorAll('.dropdown-trigger');
		let dropdownOptions = {coverTrigger: false, hover: true};
		let dropdownInstance = M.Dropdown.init(dropdownTrigger, dropdownOptions);
	});
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ 'Hello world' }}</h1>

  </div>
</template>

<style lang="less" scoped>

</style>
