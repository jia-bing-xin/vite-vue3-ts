<template>
  <div id="ageChart"></div>
</template>
<script setup lang="ts">
import { onMounted, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance() as any
const option = {
  // color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },

  legend: {
    bottom: "10%",
    // 修改小图标的大小
    itemWidth: 10,
    itemHeight: 10,
    // 修改图例组件的文字为 12px
    textStyle: {
      // color: "rgba(0,0,255)",
      fontSize: "12"
    }
  },
  series: [
    {
      name: "年龄分布",
      type: "pie",
      // 这个radius可以修改饼形图的大小
      // radius 第一个值是内圆的半径 第二个值是外圆的半径
      radius: ["40%", "60%"],
      center: ["50%", "45%"],
      avoidLabelOverlap: false,
      // 图形上的文字
      label: {
        show: false,
        position: "center"
      },
      // 链接文字和图形的线是否显示
      labelLine: {
        show: false
      },
      data: [
        { value: 1, name: "0岁以下" },
        { value: 4, name: "20-29岁" },
        { value: 2, name: "30-39岁" },
        { value: 2, name: "40-49岁" },
        { value: 1, name: "50岁以上" }
      ]
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
  height: calc(100% - 1vw);
}
</style>