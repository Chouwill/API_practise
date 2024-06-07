<template>
  <h2>666666</h2>
  <div v-if="data">
    <div class="products" v-for="item in data.products" :key="item.id">
      <p>商品名稱:{{ item.title }}</p>
      <p>價格:{{ item.price }}</p>
      <p>lore</p>
      <img :src="item.imageUrl" alt="" />
    </div>
  </div>
  <div v-else>loading...</div>
</template>
<script setup>
// 引入 axios
import axios from "axios";
import { onMounted, ref } from "vue";

const data = ref();

onMounted(() => {
  axios
    .get(`https://vue3-course-api.hexschool.io/api/will92068myproject/products`)
    .then((res) => {
      console.log(res);
      data.value = res.data; // 選擇的取得資料.products
      console.log(data.value);
    });
});
</script>

<style>
.products img {
  width: 20%;
  height: 20%;
}
</style>


<!-- <template>
    <h2>666666</h2>
    <div>
      <div class="products" v-for="item in data?.products" :key="item?.id">
        <p>商品名稱:{{ item?.title }}</p>
        <p>價格:{{ item?.price }}</p>
        <img :src="item?.imageUrl" alt="" />
      </div>
      <div v-if="!data">loading...</div>
    </div>
  </template>
  <script setup>
  // 引入 axios
  import axios from "axios";
  import { onMounted, ref } from "vue";
  
  const data = ref();
  
  onMounted(() => {
    axios
      .get(`https://vue3-course-api.hexschool.io/api/will92068myproject/products`)
      .then((res) => {
        console.log(res);
        data.value = res.data; // 選擇的取得資料.products
        console.log(data.value);
      });
  });
  </script>
  
  <style>
  .products img {
    width: 20%;
    height: 20%;
  }
  </style> -->
