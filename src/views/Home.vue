<template>
  <div class="home">
    <top-nav>
      <span>概览</span>
    </top-nav>
    <lay-out>
      <div class="block">
        <el-date-picker v-model="selectYearMounth" type="month" placeholder="选择月" value-format="yyyy-MM">
        </el-date-picker>
      </div>
      <reveal-content :select="selectYearMounth" />
    </lay-out>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Calendar from '@/components/Calendar.vue'
import RevealContent from '@/components/Home/RevealContent.vue'
import dayjs from 'dayjs'
@Component({
  components: { RevealContent, Calendar }
})
export default class Home extends Vue {
  selectYearMounth = dayjs(new Date()).format('YYYY-MM')
}
</script>

<style lang='scss' scoped>
</style>