<template>
  <div class="home">
    <top-nav>
      <span>概览</span>
    </top-nav>
    <lay-out>
      <!-- <home-total :value.sync="selectYearMounth" :list="list" /> -->
      <home-total :value.sync="selectYearMounth" />
      <!-- <reveal-content :select="selectYearMounth" @update:list="getList" /> -->
      <reveal-content :select="selectYearMounth" />
    </lay-out>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import RevealContent from '@/components/Home/RevealContent.vue'
import HomeTotal from '@/components/Home/HomeTotal.vue'
import dayjs from 'dayjs'
@Component({
  components: { RevealContent, HomeTotal }
})
export default class Home extends Vue {
  selectYearMounth = dayjs(new Date()).format('YYYY-MM')
  MounthYearList = []
  // get list() {
  //   return this.MounthYearList
  // }
  // getList(value: any) {
  //   this.MounthYearList = value
  // }
}
</script>

<style lang='scss' scoped>
</style>