<template>
  <div class="header">
    <div class="title">
      <slot />
    </div>
    <div class="cancel">
      <slot name="cancel-slot" />
    </div>
  </div>
</template>
<script lang='ts'>
export default {}
</script>
<style lang='scss' scoped>
.header {
  // eslint-disable-next-line prettier/prettier
  @import '~@/assets/style/helper.scss';
  top: 0;
  left: 0;
  min-width: 100%;
  background: $linear;
  box-shadow: 0px 0.277778rem 0.833333rem rgba(209, 212, 226, 0.501217);
  color: white;
  height: 2.866667rem;
  position: relative;
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1.111111rem;
    transform: translate(-50%, -50%);
  }
  .cancel {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>