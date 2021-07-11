<template>
  <div class="nav-content">
    <nav class="nav-bottom">
      <span>
        <router-link to="/home">概览</router-link>
      </span>
      <span><router-link to="/money">记账</router-link></span>
      <span><router-link to="/statistics">图表</router-link></span>
    </nav>
  </div>
</template>

<script lang='ts'>
export default {
  // eslint-disable-next-line prettier/prettier
  name: 'navbottom'
}
</script>
<style lang='scss' scoped>
.nav-bottom {
}
</style>