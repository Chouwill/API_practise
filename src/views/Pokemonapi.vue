<template>
  <h2>9666</h2>
   <div v-for="item in data.value.game_indices" :key="item.game_index">
   </div> 
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import axios from "axios";

const data = ref("");
onMounted(() => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`).then((res) => {
    console.log(res.data);
    // data.value = res.data;
    // console.log(data.value);
    // console.log(res);
  });
});
</script>
