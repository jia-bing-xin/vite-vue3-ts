<template>
  <div id="mapEchart"></div>
</template>
<script setup lang="ts">
import {
  ref,
  reactive,
  onMounted,
  getCurrentInstance,
  provide,
  inject,
} from 'vue'
import chinaJSON from './中华人民共和国.json'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()
const { proxy } = getCurrentInstance() as any
const option = {
  geo: {
    map: 'china',
    roam: false, //是否允许缩放，拖拽
    zoom: 1.24, //初始化大小
    label: {
      show: true,
      fontSize: 12,
    },
  },
  // tooltip: {
  //   formatter: function (params: any) {
  //     console.log(params)
  //     return params
  //   },
  // },
}
onMounted(() => {
  // 获取挂载的组件实例
  const echarts = proxy.$ECharts
  //初始化挂载
  const echarts4 = echarts.init(document.getElementById('mapEchart'))
  echarts.registerMap('china', chinaJSON)
  //添加配置
  echarts4.setOption(option)
  echarts4.on('click', function (params: any) {
    store.commit('getMapEchartData', params)
    router.push('/map')
  })
  // 自适应
  window.addEventListener('resize', function () {
    echarts4.resize()
  })
})
</script>
<style lang="scss" scoped>
#mapEchart {
  width: 100%;
  height: calc(100% - 1vw);
}
</style>
