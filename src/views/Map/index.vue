<template>
  <div class="map" ref="map">
    <amap />
  </div>
</template>
<script setup lang="ts">
import amap from '@/components/amap/index.vue'
import { ref, onMounted } from 'vue'
const map = ref(null) // 通过 ref 绑定子组件
const getSonComponent = () => {
  console.log(map.value)
}
onMounted(() => {
  getSonComponent()
})
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: calc(100vh - 90px);
}
</style>
