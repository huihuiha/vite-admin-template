<template>
  <div class="login-page">
    <div class="login-wrap">
      <el-form :model="form" label-width="70px">
        <el-form-item label="用户名：">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="密码：">
          <el-input
            v-model="form.password"
            :type="isShowPas ? 'text' : 'password'"
          />
          <!-- TODO: -->
          <div class="password-eye" @click="hanleShowPas">
            密码是否可见： {{ isShowPas ? '可见' : '不可见' }}
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
// 表单信息
const form = reactive({
  name: '',
  password: '',
});

// 密码是否可见
const isShowPas = ref(false);
const hanleShowPas = () => {
  isShowPas.value = !isShowPas.value;
};

const router = useRouter();
const onSubmit = () => {
  if (form.name === 'huihui' && form.password === '123456') {
    router.push({
      name: 'Index',
    });
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100vw;
  height: 100vh;

  .login-wrap {
    margin-top: 50px;
    padding: 10px 10px;
    width: 500px;
    height: min-content;
    border: 1px solid #ccc;
  }

  .password-eye {
    border: 1px solid #ccc;
  }
}
</style>
