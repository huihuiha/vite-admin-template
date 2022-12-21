<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="用户名：">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="密码：">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  password: '',
});

const router = useRouter();
const onSubmit = () => {
  if (form.name === 'huihui' && form.password === '123456') {
    router.push({
      name: 'Index',
    });
  }
};
</script>
