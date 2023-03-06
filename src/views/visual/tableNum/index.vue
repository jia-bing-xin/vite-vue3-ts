<template>
  <div ref="boxRef" class="table-box">
    <el-table :data="tableData" :style="{ width: tableWidth }" :height="tableHeight">
      <el-table-column prop="date" label="Date" align="center" :show-overflow-tooltip="true" />
      <el-table-column prop="name" label="Name" align="center" :show-overflow-tooltip="true" />
      <el-table-column prop="address" label="Address" align="center" :show-overflow-tooltip="true" />
    </el-table>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
//table表格宽高自适应
const boxRef = ref<HTMLElement>()
const tableHeight = ref(boxRef.value?.clientHeight)
const tableWidth = ref(boxRef.value?.clientWidth)
const getHeight = () => {
  tableHeight.value = boxRef.value?.clientHeight
  tableWidth.value = boxRef.value?.clientWidth
}
onMounted(() => {
  tableHeight.value = boxRef.value?.clientHeight
  tableWidth.value = boxRef.value?.clientWidth
})
window.addEventListener('resize', getHeight)
//表格数据
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])
</script>
<style lang="scss" scoped>
.table-box {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
