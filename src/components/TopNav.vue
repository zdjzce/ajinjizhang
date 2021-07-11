<template>
  <div class="header">
    <div class="title">
      <slot />
    </div>
  </div>
</template>
<script lang='ts'>
export default {}
</script>
<style lang='scss' scoped>
.header {
  // eslint-disable-next-line prettier/prettier
  min-width: 100%;
  background: linear-gradient(222.7deg, #ffb382 -6.37%, #f07590 84.84%);
  box-shadow: 0px 0.277778rem 0.833333rem rgba(209, 212, 226, 0.501217);
  top: 0;
  left: 0;
  color: white;
  padding: 0.533333rem 10.533333rem;
  .title {
    text-align: center;
    font-size: 1.111111rem;
  }
}
</style>