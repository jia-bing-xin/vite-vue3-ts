<template>
  <div class="login">
    <h1 class="title">{{ $t('login.title') }}</h1>
    <el-button type="primary" @click="goRegister">注册</el-button>
    <el-button type="primary" @click="goHome">登录</el-button>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
const router = useRouter()
const { locale, t } = useI18n()
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
  position: absolute;
  top: 40%;
  left: 46%;
  transform: translate(-50%, -50%);
  opacity: 0.6;
  width: $login-height;
  height: $login-width;
  background-color: $login-bg-color;
  border-radius: $login-bd-radius;

  .title {
    text-align: center;
    Letter-spacing: 10px;
    margin: 10% 0 0 50%;
    font-size: 40px;
    transform: translateX(-50%);
  }
}
</style>