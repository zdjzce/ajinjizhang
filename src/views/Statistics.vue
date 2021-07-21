<template>
  <div class="">
    <lay-out></lay-out>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import groupList from '@/store/groupList'
@Component({})
export default class Statistics extends Vue {
  showlist = {}
  created() {
    this.$store.commit('fetchRecords')
    this.showlist = groupList.groupYearMounth(this.$store.state.recordList)
  }
}
</script>
<style lang='scss' scoped>
</style>