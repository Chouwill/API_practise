<script setup>
// import apiTest from './views/ApiTest.vue';
</script>

<template>
  <ul class="nav">
    <li>
      <router-link to="/">Gift_ShopAPI</router-link>
    </li>
    <li>
      <router-link to="/pokemonapi">pokemonapi</router-link>
    </li>
    <li>
      <router-link to="/time">Time</router-link>
    </li>
  </ul>
  <!-- <apiTest /> -->

  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.nav {
  width: 500px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  border: 5px solid firebrick;
}
.nav li{
  margin: 10px;
  border: 5px solid rgb(39, 34, 178);
}
</style>
