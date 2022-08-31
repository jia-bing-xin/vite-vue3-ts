<template>
  <div class="visual">
    <div class="left">
      <div class="left-top">
        <Statistics />
      </div>
      <div class="left-center">left-center</div>
      <div class="left-bottom">left-bottom</div>
    </div>
    <div class="center">
      <div class="center-top">center-top</div>
      <div class="center-bottom">center-bottom</div>
    </div>
    <div class="right">
      <div class="right-top">right-top</div>
      <div class="right-center">left-center</div>
      <div class="right-bottom">left-bottom</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Statistics from './statistics/index.vue'

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
    }

    .left-center {
      height: 33%;
      box-shadow: 0 2px 6px 2px rgb(218, 209, 209);
    }

    .left-bottom {
      height: 33%;
      box-shadow: 0 2px 6px 2px rgb(218, 209, 209);
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
      height: 33%;
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
    }

    .right-center {
      height: 33%;
      box-shadow: 0 2px 6px 2px rgb(218, 209, 209);
    }

    .right-bottom {
      height: 33%;
      box-shadow: 0 2px 6px 2px rgb(218, 209, 209);
    }
  }
}
</style>