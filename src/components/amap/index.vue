<template>
  <div id="baiduMap"></div>
  <div class="tools">
    <el-checkbox-group v-model="checkedCities" @change="changeShow">
      <el-checkbox v-for="item in showFunction" :key="item" :label="item">{{
        item
      }}</el-checkbox>
    </el-checkbox-group>
  </div>
  <div class="tools_2" v-if="false">
    <el-checkbox v-model="checked1">描点</el-checkbox>

    <el-checkbox v-model="checked1">划线</el-checkbox>

    <el-checkbox v-model="checked1">划圆</el-checkbox>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'
const checkedCities = ref(['城市列表', '缩放控件'])
const showFunction = ['城市列表', '比例尺', '缩放控件', '滚轮缩放']
let map = undefined
const cityCtrl = new BMapGL.CityListControl() // 添加城市列表控件
const scaleCtrl = new BMapGL.ScaleControl() // 添加比例尺控件
const zoomCtrl = new BMapGL.ZoomControl() // 添加缩放控件
function initMap(val) {
  let point = new BMapGL.Point(116.28019, 40.049191)
  map = new BMapGL.Map('baiduMap') // 创建Map实例
  map.centerAndZoom(point, 19) // 初始化地图,设置中心点坐标和地图级别
  map.setHeading(64.5)
  let marker = new BMapGL.Marker(point) // 创建标注
  map.addOverlay(marker)
  if (val.indexOf('城市列表') !== -1) {
    map.addControl(cityCtrl)
  }
  if (val.indexOf('比例尺') !== -1) {
    map.addControl(scaleCtrl)
  }
  if (val.indexOf('缩放控件') !== -1) {
    map.addControl(zoomCtrl)
  }
  if (val.indexOf('滚轮缩放') !== -1) {
    map.enableScrollWheelZoom() //开启鼠标滚轮缩放
  }
}
const changeShow = (val: string[]) => {
  if (val.indexOf('城市列表') !== -1) {
    map.addControl(cityCtrl)
  } else {
    map.removeControl(cityCtrl)
  }
  if (val.indexOf('比例尺') !== -1) {
    map.addControl(scaleCtrl)
  } else {
    map.removeControl(scaleCtrl)
  }
  if (val.indexOf('缩放控件') !== -1) {
    map.addControl(zoomCtrl)
  } else {
    map.removeControl(zoomCtrl)
  }
  if (val.indexOf('滚轮缩放') !== -1) {
    map.enableScrollWheelZoom()
  } else {
    map.disableScrollWheelZoom()
  }
}
onMounted(() => {
  initMap(checkedCities.value)
})
const checked1 = ref(true)
</script>
<style lang="scss" scoped>
#baiduMap {
  width: 100%;
  height: 100%;
}

.tools {
  padding: 10px 20px;
  position: absolute;
  z-index: 99;
  top: 66px;
  right: 5vw;
  background-color: rgb(110, 105, 105, 0.6);

  .el-checkbox-group {
    &:deep(.el-checkbox__label) {
      color: #fff;
    }
  }
}

.tools_2 {
  padding: 10px 0px 10px 30px;
  position: absolute;
  z-index: 99;
  top: calc(50% - 66px);
  right: 5vw;
  transform: translateY(-50%);
  background-color: rgb(110, 105, 105, 0.6);
  display: flex;
  flex-direction: column;

  &:deep(.el-checkbox__label) {
    color: #fff;
  }
}
</style>
