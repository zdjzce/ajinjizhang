<template>
  <div>
    <svg class="icon myIcon" aria-hidden="true">
      <use :xlink:href="'#icon-' + icon"></use>
    </svg>
    <!-- <i class="iconfont icon-zhangdan" icon-sel></i> -->
  </div>
</template>

<script lang='ts'>
export default {
  props: ['icon'],
  name: 'IconFont'
}
</script>
<style lang='scss' scoped>
.icon {
  width: 1.4rem;
  height: 1.4rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>