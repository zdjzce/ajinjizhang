<template>
  <div class="echart-f">
    <div class="echart" id="main"></div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import * as echarts from 'echarts'
@Component
export default class Echars extends Vue {
  @Prop() options: any
  myChart?: any
  mounted() {
    if (this.options === undefined) {
      return console.error('options为空')
    }
    this.myChart = echarts.init(document.getElementById('main') as HTMLDivElement)
    this.myChart.setOption(this.options)
    window.onresize = this.myChart.resize
    // window.onresize = function () {
    //   myChart.resize()
    // }
  }
  @Watch('options')
  onOptionsChange(newvalue: any) {
    this.myChart.setOption(newvalue)
  }
}
</script>
<style lang='scss' scoped>
.echart-f {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  .echart {
    width: 100vw;
    height: 55vh;
  }
}
</style>