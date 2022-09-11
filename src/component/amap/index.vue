<template>
  <div id="baiduMap"></div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
function initMap() {
  let map = new BMapGL.Map('baiduMap') // 创建Map实例
  map.centerAndZoom(new BMapGL.Point(116.28019, 40.049191), 19) // 初始化地图,设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
  let scaleCtrl = new BMapGL.ScaleControl() // 添加比例尺控件
  map.addControl(scaleCtrl)
  let zoomCtrl = new BMapGL.ZoomControl() // 添加缩放控件
  map.addControl(zoomCtrl)
  let cityCtrl = new BMapGL.CityListControl() // 添加城市列表控件
  map.addControl(cityCtrl)
  map.setHeading(64.5)
  let point = new BMapGL.Point(116.28019, 40.049191)
  let marker = new BMapGL.Marker(point) // 创建标注
  map.addOverlay(marker)
  // map.setTilt(73)
}

onMounted(() => {
  initMap()
})
</script>
<style lang="scss" scoped>
#baiduMap {
  width: 100%;
  height: 100%;
}
</style>
