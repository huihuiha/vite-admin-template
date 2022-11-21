<template>
  <button
    class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer"
    @click="add"
  >
    {{ count }}
  </button>
  <i class="i-ic-baseline-edit p-3"></i>

  <img :src="logoSrc" />12312512545555666222521512345

  <div class="box"></div>
</template>

<script lang="ts" setup>
// 1. 导入图片
import logoSrc from "@assets/imgs/logo.png";

import { ref } from "vue";

const count = ref(0);
const add = () => {
  count.value = count.value + 1;
};
</script>

<style scoped lang="scss">
.box {
  width: 100px;
  height: 100px;
  background-color: aqua;
}
</style>
