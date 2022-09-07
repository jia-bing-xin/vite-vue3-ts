<template>
  <div class="visual">
    <div class="left">
      <div class="left-top">
        <h1>注册增长分析</h1>
        <increaseUserEchart />
      </div>
      <div class="left-center">
        <h1>年龄分布百分比</h1>
        <ageChart />
      </div>
      <div class="left-bottom">
        <h1>技术喜爱对比</h1>
        <scoreChart />
      </div>
    </div>
    <div class="center">
      <div class="center-top">
        <mapEchart />
      </div>
      <div class="center-bottom">
        <tableNum />
      </div>
    </div>
    <div class="right">
      <div class="right-top">
        <h1>用户情况分析</h1>
        <brokenUser />
      </div>
      <div class="right-center">
        <h1>性别分布百分比</h1>
        <sexChart />
      </div>
      <div class="right-bottom">
        <h1>资料完成度</h1>
        <informationEchart />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import mapEchart from './mapEchart/index.vue'
import brokenUser from './brokenUser/index.vue'
import scoreChart from './scoreChart/index.vue'
import increaseUserEchart from './increaseUserEchart/index.vue'
import informationEchart from './informationEchart/index.vue'
import ageChart from './ageChart/index.vue'
import tableNum from './tableNum/index.vue'
import sexChart from './sexChart/index.vue'
</script>
<style lang="scss" scoped>
.visual {
  height: calc(100vh - 76px);
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20vw;

    .left-top {
      height: 33%;
      box-shadow: 0 2px 6px 2px rgb(218, 209, 209);
      h1 {
        font-size: 1vw;
        text-align: center;
      }
    }

    .left-center {
      height: 33%;
      box-shadow: 0 2px 6px 2px rgb(218, 209, 209);

      h1 {
        font-size: 1vw;
        text-align: center;
      }
    }

    .left-bottom {
      height: 33%;
      box-shadow: 0 2px 6px 2px rgb(218, 209, 209);
    }
    h1 {
      font-size: 1vw;
      text-align: center;
    }
  }

  .center {
    flex: 1;
    margin: 0 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 2px 6px 2px rgb(218, 209, 209);

    .center-top {
      height: 66.4%;
      box-shadow: 0 2px 6px 2px rgb(218, 209, 209);
    }

    .center-bottom {
      position: relative;
      height: 32.6%;
      box-shadow: 0 2px 6px 2px rgb(218, 209, 209);
    }
  }

  .right {
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 2px 2px 6px rgb(218, 209, 209);

    .right-top {
      height: 33%;
      box-shadow: 0 2px 6px 2px rgb(218, 209, 209);
      h1 {
        font-size: 1vw;
        text-align: center;
      }
    }

    .right-center {
      height: 33%;
      box-shadow: 0 2px 6px 2px rgb(218, 209, 209);
      h1 {
        font-size: 1vw;
        text-align: center;
      }
    }

    .right-bottom {
      height: 33%;
      box-shadow: 0 2px 6px 2px rgb(218, 209, 209);
      h1 {
        font-size: 1vw;
        text-align: center;
      }
    }
  }
}
</style>
