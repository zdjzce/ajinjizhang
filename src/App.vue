<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang='ts'>
export default {}
</script>
<style lang='scss' scoped>
@import '~@/assets/style/helper.scss';
#app {
  height: 100vh;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  position: relative;
  overflow: hidden;
}
</style>