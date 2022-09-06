<template>
  <div id="brokenUser"></div>
</template>
<script setup lang="ts">
import { onMounted, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance() as any
const getFontSize = (): Number => document.body.offsetWidth / 160
const option = {
  tooltip: {
    trigger: 'axis',
  },
  legend: {},
  // toolbox: {
  //   show: true,
  //   feature: {
  //     dataZoom: {
  //       yAxisIndex: 'none',
  //     },
  //     dataView: { readOnly: false },
  //     magicType: { type: ['line', 'bar'] },
  //     restore: {},
  //     saveAsImage: {},
  //   },
  // },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['第一季度', '第二季度', '第三季度', '第四季度'],
  },
  yAxis: {
    type: 'value',
    // axisLabel: {
    //   formatter: '{value} °C',
    // },
  },
  series: [
    {
      name: '访问量',
      type: 'line',
      data: [599, 100, 56, 260],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' },
        ],
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }],
      },
    },
    {
      name: '注册量',
      type: 'line',
      data: [260, 560, 20, 600],
      markPoint: {
        data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }],
      },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          [
            {
              symbol: 'none',
              x: '90%',
              yAxis: 'max',
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max',
              },
              type: 'max',
              name: '最高点',
            },
          ],
        ],
      },
    },
  ],
}
onMounted(() => {
  // 获取挂载的组件实例
  const echarts = proxy.$ECharts
  //初始化挂载
  const echarts5 = echarts.init(document.getElementById('brokenUser'))
  //添加配置
  echarts5.setOption(option)
  // 自适应
  window.addEventListener('resize', function () {
    echarts5.resize()
  })
})
</script>
<style lang="scss" scoped>
#brokenUser {
  width: 100%;
  height: 100%;
}
</style>
