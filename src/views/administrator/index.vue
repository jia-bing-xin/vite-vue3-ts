<template>
  <div class="administrator" ref="currentRef">
    <div class="menu">
      <Menu :parentRef="currentRef" :menuData="menuData" />
    </div>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup lang="ts">
import Menu from '@/component/Menu/index.vue'
import { Document, Setting } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
const currentRef = ref<HTMLElement>()
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
