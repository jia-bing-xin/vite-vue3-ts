<template>
  <div id="baiduMap"></div>
  <div class="tools">
    <el-checkbox-group v-model="checkedCities" @change="changeShow">
      <el-checkbox v-for="item in showFunction" :key="item" :label="item">{{
        item
      }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script setup lang="ts">
import { onMounted, inject } from 'vue'
import { useStore } from 'vuex'
import { ref } from 'vue'
import { indexOf } from 'lodash'
const checkedCities = ref(['城市列表', '缩放控件'])
const showFunction = ['城市列表', '比例尺', '缩放控件', '滚轮缩放']
let map = undefined
const store = useStore()
function initMap(val) {
  let point = new BMapGL.Point(116.28019, 40.049191)
  map = new BMapGL.Map('baiduMap') // 创建Map实例
  map.centerAndZoom(point, 19) // 初始化地图,设置中心点坐标和地图级别
  // map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
  // let scaleCtrl = new BMapGL.ScaleControl() // 添加比例尺控件
  // map.addControl(scaleCtrl)
  // let zoomCtrl = new BMapGL.ZoomControl() // 添加缩放控件
  // map.addControl(zoomCtrl)
  // let cityCtrl = new BMapGL.CityListControl() // 添加城市列表控件
  // map.addControl(cityCtrl)
  map.setHeading(64.5)
  let marker = new BMapGL.Marker(point) // 创建标注
  map.addOverlay(marker)
  // map.setTilt(73)// 创建Map实例,GL版命名空间为BMapGL(鼠标右键控制倾斜角度)
  // let styleOptions = {
  //   strokeColor: '#5E87DB', // 边线颜色
  //   fillColor: '#5E87DB', // 填充颜色。当参数为空时，圆形没有填充颜色
  //   strokeWeight: 2, // 边线宽度，以像素为单位
  //   strokeOpacity: 1, // 边线透明度，取值范围0-1
  //   fillOpacity: 0.2, // 填充透明度，取值范围0-1
  // }
  // let labelOptions = {
  //   borderRadius: '2px',
  //   background: '#FFFBCC',
  //   border: '1px solid #E1E1E1',
  //   color: '#703A04',
  //   fontSize: '12px',
  //   letterSpacing: '0',
  //   padding: '5px',
  // }

  // 实例化鼠标绘制工具鼠标滚轮
  // let drawingManager = new BMapGLLib.DrawingManager(map, {
  //   // isOpen: true,        // 是否开启绘制模式
  //   enableCalculate: false, // 绘制是否进行测距测面
  //   enableSorption: true, // 是否开启边界吸附功能
  //   sorptiondistance: 20, // 边界吸附距离
  //   circleOptions: styleOptions, // 圆的样式
  //   polylineOptions: styleOptions, // 线的样式
  //   polygonOptions: styleOptions, // 多边形的样式
  //   rectangleOptions: styleOptions, // 矩形的样式
  //   labelOptions: labelOptions, // label样式
  // })

  // function draw(e) {
  //   var arr = document.getElementsByClassName('bmap-btn')
  //   for (var i = 0; i < arr.length; i++) {
  //     arr[i].style.backgroundPositionY = '0'
  //   }
  //   e.style.backgroundPositionY = '-52px'
  //   switch (e.id) {
  //     case 'marker': {
  //       var drawingType = BMAP_DRAWING_MARKER
  //       break
  //     }
  //     case 'polyline': {
  //       var drawingType = BMAP_DRAWING_POLYLINE
  //       break
  //     }
  //     case 'rectangle': {
  //       var drawingType = BMAP_DRAWING_RECTANGLE
  //       break
  //     }
  //     case 'polygon': {
  //       var drawingType = BMAP_DRAWING_POLYGON
  //       break
  //     }
  //     case 'circle': {
  //       var drawingType = BMAP_DRAWING_CIRCLE
  //       break
  //     }
  //   }
  //   // 进行绘制
  //   if (
  //     drawingManager._isOpen &&
  //     drawingManager.getDrawingMode() === drawingType
  //   ) {
  //     drawingManager.close()
  //   } else {
  //     drawingManager.setDrawingMode(drawingType)
  //     drawingManager.open()
  //   }
  // }
}
// const showFunction = ['城市列表', '比例尺', '缩放控件', '']
const changeShow = (val: string[]) => {
  console.log(val, val.indexOf('缩放控件') !== -1)
  if (val.indexOf('城市列表') !== -1) {
    let cityCtrl = new BMapGL.CityListControl() // 添加城市列表控件
    map.addControl(cityCtrl)
  }
  if (val.indexOf('比例尺') !== -1) {
    let scaleCtrl = new BMapGL.ScaleControl() // 添加比例尺控件
    map.addControl(scaleCtrl)
  }
  if (val.indexOf('缩放控件') !== -1) {
    let zoomCtrl = new BMapGL.ZoomControl() // 添加缩放控件
    map.addControl(zoomCtrl)
  }
  if (val.indexOf('滚轮缩放') !== -1) {
    map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
  }
  if (val.indexOf('滚轮缩放') === -1) {
    map.enableScrollWheelZoom(false) //开启鼠标滚轮缩放
  }
}
onMounted(() => {
  let name = store.state.mapEchartData
  console.log(name, 'amap')
  initMap(checkedCities.value)
})
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
</style>
