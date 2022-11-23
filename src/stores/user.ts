import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  function increment() {
    console.log(111)
    count.value++;
  }

  return { count, increment };
});
