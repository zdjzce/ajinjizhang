<template>
  <div class="layout-wrapper">
    <div class="content">
      <slot />
    </div>
    <nav-bottom />
  </div>
</template>

<script lang='ts'>
export default {}
</script>
<style lang='scss' scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 93vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>