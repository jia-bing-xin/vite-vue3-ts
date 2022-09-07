<template>
  <div id="scoreEchart"></div>
</template>
<script setup lang="ts">
import { onMounted, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance() as any
const option = {
  legend: {
    orient: 'vertical',
    padding: [20, 0, 0, 20],
    itemWidth: 10,
    itemHeight: 10,
    x: 'left',
    y: 'top',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {c} ({d}%)',
  },
  series: [
    {
      type: 'pie',
      radius: ['18%', '90%'],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8,
      },
      label: {
        show: false,
      },
      data: [
        { value: 40, name: 'HTML' },
        { value: 38, name: 'CSS' },
        { value: 32, name: 'TypeScript' },
        { value: 30, name: 'Vue' },
        { value: 28, name: 'vite' },
        { value: 26, name: 'Node' },
        { value: 22, name: 'Koa' },
        { value: 18, name: 'React' },
      ],
    },
  ],
}
onMounted(() => {
  // 获取挂载的组件实例
  const echarts = proxy.$ECharts
  //初始化挂载
  const echarts3 = echarts.init(document.getElementById('scoreEchart'))
  //添加配置
  echarts3.setOption(option)
  // 自适应
  window.addEventListener('resize', function () {
    echarts3.resize()
  })
})
</script>
<style lang="scss" scoped>
#scoreEchart {
  width: 100%;
  height: calc(100% - 1vw);
  // background-color: #41d47e60;
}
</style>
