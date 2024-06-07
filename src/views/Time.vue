<template>
  <h2>setInterval</h2>

  <h2>{{ timeNum }}</h2>

  <div class="model_box">
    <h2>v-model雙向綁定</h2>
    <input type="text" v-model="input" />
    <button @click="sendBtn">送出</button>
  </div>
  <p class="output">{{ output }}</p>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const timeNum = ref(0);
const time = ref("");

onMounted(() => {
  time.value = setInterval(() => {
    timeNum.value++;
    console.log(timeNum.value);
    if (timeNum.value >= 5) {
      // clearInterval(time.value);
      timeNum.value = 0;
      //可以想詢問一下，未達條件5就重新計
      //流程秒數 1234  => 0
    }
  }, 1000);
});
// -----------------------------

const input = ref("");
const output = ref("");
const sendBtn = () => {
  console.log(input.value);
  output.value = `${input.value}`;   //這裡一定.value嗎
};
</script>

<style>
.model_box {
  border: 5px solid red;
}
</style>
