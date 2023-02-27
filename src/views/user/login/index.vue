<template>
  <div class="login">
    <h1 class="title">{{ t('login.login') }}</h1>
    <el-form :model="loginForm" class="login-form">
      <el-form-item :label="t('login.username')">
        <el-input v-model="loginForm.user" :placeholder="t('login.usernameText')" />
      </el-form-item>
      <el-form-item :label="t('login.password')">
        <el-input v-model="loginForm.password" :placeholder="t('login.passwordText')" />
      </el-form-item>
      <el-form-item>
        <div class="func-btn">
          <el-button type="primary" @click="goHome" size="large">{{ t('login.login') }}
          </el-button>
          <el-button class="register-btn" @click="goRegister" size="large">{{ t('login.register')
          }}</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
const router = useRouter()
const { t } = useI18n()
//表单数据
const loginForm = reactive({
  user: '',
  password: ''
})
//切换到注册
const emit = defineEmits(['handleChange']);
const goRegister = () => {
  emit('handleChange', 'register')
  router.push('/register')
}
//切换到首页
const goHome = () => {
  router.push('/home')
}
</script>
<style lang="scss" scoped>
.login {
  .title {
    width: 100%;
    text-align: center;
    Letter-spacing: 10px;
    margin-top: 10%;
    font-size: 40px;
  }

  .login-form {
    .el-form-item {
      margin: 40px 30px;

      :deep(.el-form-item__label) {
        justify-content: flex-start;
        width: 56px;
        padding: 6px 0;
        font-size: 18px;
      }

      .el-input {
        margin-left: 30px;
        width: 230px;
        height: 46px;
      }

      .func-btn {
        width: 100%;
        display: flex;
        justify-content: center;

        .register-btn {
          margin-left: 22px;
        }
      }
    }
  }
}
</style>