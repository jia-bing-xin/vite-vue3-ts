<template>
  <div class="menu">
    <el-menu :default-active="$route.path" :collapse="isCollapse" router>
      <template v-for="item in porps.menuData">
        <el-menu-item v-if="!item.children" :index="item.path">
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <template #title>{{ $t(`${item.name}`) }}</template>
        </el-menu-item>
        <el-sub-menu v-if="item.children" :index="item.path">
          <template #title>
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <span>{{ $t(`${item.name}`) }}</span>
          </template>
          <el-menu-item :index="item.path" v-for="i in item.children">
            <el-icon v-if="i.icon">
              <component :is="i.icon" />
            </el-icon>
            <template #title>{{ $t(`${i.name}`) }}</template></el-menu-item
          >
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import Component from '@/views/component/index.vue'
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()

//是否缩小菜单
const porps = defineProps<{
  parentRef: HTMLElement | undefined
  menuData: {
    name: string
    path: string
    icon: any
    children?: { name: string; path: string; icon?: any }[]
  }[]
}>()
const isCollapse = ref(porps.parentRef?.clientWidth! <= 810)
const getisCollapse = () => {
  isCollapse.value = porps.parentRef?.clientWidth! <= 810
}
onMounted(() => {
  getisCollapse()
})
window.addEventListener('resize', getisCollapse)
</script>
<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 100%;
  .el-menu {
    border: 0;
    .el-menu-item:hover {
      background-color: #fff;
    }
    .el-sub-menu {
      width: 160px;
    }
  }
}
</style>
