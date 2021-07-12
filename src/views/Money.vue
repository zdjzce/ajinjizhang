<template>
  <div class="money">
    <top-nav>
      <span>记账</span>
      <template v-slot:cancel-slot>
        <router-link to="/" class="cancel-color">取消</router-link>
      </template>
    </top-nav>
    <main></main>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'money',
  components: {}
}
</script>
<style lang='scss' scoped>
.cancel-color {
  color: white;
}
</style>