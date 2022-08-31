<template>
  <div id="ageChart"></div>
</template>
<script setup lang="ts">
import { onMounted, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance() as any
const option = {
  tooltip: {
    trigger: 'item'
  },
  color: ['#ffd666', '#ffa39e', '#409EFF', '#69cbc2', '#d3adf7'],
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '70%',
      data: [
        { value: 1048, name: '清洁能源发电区' },
        { value: 735, name: '公共娱乐区域' },
        { value: 580, name: '生活区域' },
        { value: 484, name: '办公区域' },
        { value: 300, name: '绿植空地' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
onMounted(() => {
  // 获取挂载的组件实例
  const echarts = proxy.$ECharts
  //初始化挂载
  const echarts1 = echarts.init(document.getElementById('ageChart'))
  //添加配置
  echarts1.setOption(option)
  // 自适应
  window.onresize = function () {
    echarts1.resize()
  }

})

</script>
<style lang="scss" scoped>
#ageChart {
  width: 100%;
  height: 100%;
}
</style>