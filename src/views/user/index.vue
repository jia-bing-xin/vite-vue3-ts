<!-- 选项式 切换login与register组件 -->
<template>
  <div class="bgUser">
    <div class="change-lang">
      <el-select v-model="selected" size="large" @change="handleChangeSelect">
        <el-option :label="$t('lang.zh')" value="zh_CN" />
        <el-option :label="$t('lang.en')" value="en" />
      </el-select>
    </div>
    <component :is="currentModule ? Login : Register" @handleChange="handleChange"></component>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Login from './login/index.vue'
import Register from './register/index.vue'
import { useI18n } from 'vue-i18n'
//切换语言功能
const { locale, t } = useI18n()
const selected = ref(localStorage.getItem('lang') || 'zh_CN')
const handleChangeSelect = (val: String): void => {
  locale.value = selected.value as string
  localStorage.setItem('lang', selected.value as string)
}
//切换登录注册组件功能
const currentModule = ref(true)
const handleChange = (val: string): void => {
  console.log(222)
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