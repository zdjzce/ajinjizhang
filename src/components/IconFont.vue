
<template>
  <div>
    <svg class="icon">
      <use :xlink:href="'#' + icon" />
    </svg>
    <!-- <i class="iconfont icon-zhangdan" icon-sel></i> -->
  </div>
</template>

<script lang='ts'>
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../assets/icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}

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