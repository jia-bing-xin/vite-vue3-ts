<template>
  <div class="administrator" ref="administratorRef">
    <div class="menu">
      <Menu :parentRef="administratorRef" :menuData="menuData" />
    </div>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup lang="ts">
import Menu from '@/components/Menu/index.vue'
import { Document, Setting } from '@element-plus/icons-vue'
import { ref } from 'vue'
const administratorRef = ref<HTMLElement>()
const menuData = [
  {
    name: '用户管理',
    path: '/administrator/user',
    icon: Setting,
  },
  {
    name: '用户日志',
    path: '/administrator/userLog',
    icon: Document,
  },
]
</script>
<style lang="scss" scoped>
.administrator {
  display: flex;

  .menu {
    height: calc(100vh - 80px);
    border-right: 2px solid #dcdfe6;
    padding-right: 2vw;
  }

  .content {
    flex: 1;
    margin-left: 20px;
  }
}
</style>
