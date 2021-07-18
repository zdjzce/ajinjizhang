<template>
  <div class="home">
    <top-nav>
      <span>概览</span>
    </top-nav>
    <lay-out>
      <reveal-content></reveal-content>
    </lay-out>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import RevealContent from '@/components/Home/RevealContent.vue'
@Component({
  components: { RevealContent }
})
export default class Home extends Vue {}
</script>

<style lang='scss' scoped>
</style>