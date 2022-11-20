<template>
  <button
    class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer"
    @click="add"
  >
    {{ count }}
  </button>
  <i class="i-ic-baseline-edit p-3"></i>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);
const add = () => {
  count.value = count.value + 1;
};
</script>
