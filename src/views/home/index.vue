<template>
  <div>
    首页
    <el-button type="primary">去登录</el-button>
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
</script>
<style lang="scss" scoped>
</style>