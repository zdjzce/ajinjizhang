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
  height: 81vh;
  width: 100%;
  @media screen and(min-width: 375px) {
    height: 84vh;
  }
  @media screen and(min-width: 401px) {
    height: 86vh;
  }
  @media screen and(min-height:640px) {
    height: 83vh;
  }
  @media screen and(min-height: 800px) {
    height: 87vh;
  }
  @media screen and(min-height: 1000px) {
    height: 88vh;
  }
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>