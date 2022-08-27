<!-- 选项式 切换login与register组件 -->
<template>
  <div class="bgUser">
    <Setting />
    <component :is="currentModule ? Login : Register" @handleChange="handleChange" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Login from './login/index.vue'
import Register from './register/index.vue'
import Setting from './setting/index.vue'
//切换登录注册组件功能
const currentModule = ref(true)
const handleChange = (val: string): void => {
  currentModule.value = (val === 'login' ? true : false)
}

</script>
<style scoped lang="scss">
.bgUser {
  width: 100%;
  height: 100vh;
  background: url('@/assets/picture/user/bg-user.png') no-repeat;
  background-size: 100% 100%;
}
</style>