<template>
  <div class="header-nav">
    <Header />
  </div>
  <div class="main">
    <router-view />
  </div>
</template>
<script setup lang="ts">
import Header from '@/views/header/index.vue'
</script>
<style lang="scss" scoped>
.header-nav {
  height: 54px;
  line-height: 54px;
  margin-bottom: 10px;
  border-bottom: 2px solid rgb(226, 210, 210);
}

.main {
  width: 90vw;
  height: calc(100% - 56px);
  margin: 10px auto 0;
}
</style>