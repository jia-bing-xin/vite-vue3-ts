<template>
  <div id="increaseUserEchart"></div>
</template>
<script setup lang="ts">
import { onMounted, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance() as any
const getFontSize = (): Number => document.body.offsetWidth / 160
const option = {
  color: ['#2f89cf'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  // 修改图表的大小
  grid: {
    left: '0%',
    top: '10%',
    right: '0%',
    bottom: '14%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ['第一季度', '第二季度', '第三季度', '第四季度'],
      axisTick: {
        alignWithLabel: true,
      },
      // 修改刻度标签 相关样式
      axisLabel: {
        color: '#000',
        fontSize: getFontSize(),
      },
      // 不显示x坐标轴的样式
      axisLine: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      // 修改刻度标签 相关样式
      axisLabel: {
        color: '#000',
        fontSize: 12,
      },
      // y轴的线条改为了 2像素
      axisLine: {
        lineStyle: {
          color: '#000',
          width: 2,
        },
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          // color: 'rgba(255,255,255,.1)',
        },
      },
    },
  ],
  series: [
    {
      name: '直接访问',
      type: 'bar',
      barWidth: '35%',
      data: [200, 300, 300, 900],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5,
      },
    },
  ],
}
onMounted(() => {
  // 获取挂载的组件实例
  const echarts = proxy.$ECharts
  //初始化挂载
  const echarts1 = echarts.init(document.getElementById('increaseUserEchart'))
  //添加配置
  echarts1.setOption(option)
  // 自适应
  window.onresize = function () {
    echarts1.resize()
  }
})
</script>
<style lang="scss" scoped>
#increaseUserEchart {
  width: 100%;
  height: 100%;
}
</style>
