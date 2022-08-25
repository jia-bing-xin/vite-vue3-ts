<template>
  <div>
    登录页
    <el-button type="primary" @click="goRegister">去注册</el-button>
    <el-button type="primary" @click="goHome">首页</el-button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
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
</style>