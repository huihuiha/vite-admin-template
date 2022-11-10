<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Header from "@/components/Header";

const count = ref(0);
const add = () => {
  count.value++;
};
</script>
