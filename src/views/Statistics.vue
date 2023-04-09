<template>
  <div class="">
    <top-nav>
      <span>记账</span>
    </top-nav>
    <lay-out>
      <pick-date :value.sync="selectYearMounth" />
      <chart></chart>
    </lay-out>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import groupList from '@/store/groupList'
import PickDate from '@/components/PickDate.vue'
import Chart from '@/components/Statistics/chart.vue'
import dayjs from 'dayjs'
@Component({
  components: { PickDate, Chart }
})
export default class Statistics extends Vue {
  showlist = {}
  selectYearMounth = dayjs(new Date()).format('YYYY-MM')
  created() {
    this.$store.commit('fetchRecords')
    this.showlist = groupList.groupYearMounth(this.$store.state.recordList)
  }
}
</script>
<style lang='scss' scoped>
</style>