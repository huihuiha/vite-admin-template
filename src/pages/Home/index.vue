<template>
  <Header></Header>
  <button
    class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer"
    @click="add"
  >
    {{ count }} -----------
  </button>
  <i class="i-ic-baseline-edit p-3"></i>

  <img :src="logoSrc" />12312512545555666

  <el-button type="primary" @click="handleClick">Primary</el-button>

  <div class="box" @click="countStore.increment">
    {{ countStore.count }}
    <div class="box-child" @click="toggleLocales">
      {{ t('language') }}
      <i class="i-fluent-local-language-zi-24-filled p-3 mx-2"></i>
    </div>
  </div>

  <Dark></Dark>

  <div class="box2">
    <svg-icon class="svg" color="red" name="video" />
  </div>
</template>

<script lang="ts" setup>
// 导入图片
import logoSrc from '@assets/imgs/logo.png';

// store
import { useCounterStore } from '@/stores/user';

const countStore = useCounterStore();

const count = ref(0);
const add = () => {
  count.value = count.value + 1;
};

const handleClick = () => {
  alert('click');
};

// i18n
const { t, availableLocales, locale } = useI18n();

const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
//
// const msg = ref('msg');
</script>

<style scoped lang="scss">
.box {
  width: 100px;
  height: 100px;
  background-color: aqua;
  .box-child {
    color: yellow;
  }
}

.box2 {
  width: 200px;
  height: 200px;
  background-color: antiquewhite;

  .svg {
    color: green;
    width: 300px;
    height: 300px;
  }
}
</style>
