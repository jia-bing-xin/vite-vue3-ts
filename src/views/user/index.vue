<!-- 选项式 切换login与register组件 -->
<template>
  <div>
    <component :is="currentModule" @handleChange="handleChange"></component>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Login from './login/index.vue'
import Register from './register/index.vue'
export default defineComponent({
  data() {
    return {
      currentModule: 'Login'
    }
  },
  components: {
    Login,
    Register
  },
  methods: {
    handleChange(val: string): void {
      this.currentModule = val
    }
  }
})
</script>
<style lang="scss" scoped>
</style>