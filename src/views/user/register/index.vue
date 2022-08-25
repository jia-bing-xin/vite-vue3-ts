<template>
  <div>
    注册页
    <el-button type="primary" @click="goLogin">返回登录</el-button>
    <el-button type="primary" @click="goHome">首页</el-button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
//切换到登录
const emit = defineEmits(['handleChange']);
const goLogin = () => {
  emit('handleChange', 'login')
  router.push('/login')
}
//切换到首页
const goHome = () => {
  router.push('/home')
}
</script>
<style lang="scss" scoped>
</style>