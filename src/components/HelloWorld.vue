<template>
  <el-select v-model="selected" class="m-2" placeholder="Select" size="large" @change="handleChange">
    <el-option :label="$t('header.zh')" value="zh_CN" />
    <el-option :label="$t('header.en')" value="en" />
  </el-select>
  <div class="login">6546546614352</div>
  <h1>{{ msg }}-{{ $t('header.home') }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
const selected = ref(localStorage.getItem('lang'))
defineProps<{ msg: string }>()

const count = ref(0)
function handleChange(val: String): void {
  locale.value = selected.value as string
  localStorage.setItem('lang', selected.value as string)
  console.log(localStorage.getItem('lang'))
}
</script>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
</style>
