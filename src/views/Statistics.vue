<template>
  <div class="">
    <top-nav>
      <span>记账</span>
    </top-nav>
    <lay-out>
      <pick-date :value.sync="selectYearMounth" class="date-content" />
      <chart :options="options"></chart>
      <sort-in-come :selectYearMounth="selectYearMounth" :recordList="recordList" />
    </lay-out>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import groupList from '@/store/groupList'
import PickDate from '@/components/PickDate.vue'
import Chart from '@/components/Statistics/Chart.vue'
import SortInCome from '@/components/Statistics/SortInCome.vue'
import dayjs from 'dayjs'
import _ from 'lodash'
@Component({
  components: { PickDate, Chart, SortInCome }
})
export default class Statistics extends Vue {
  recordList = {} as RecordItem[]
  selectYearMounth = dayjs(new Date()).format('YYYY-MM')
  created() {
    this.$store.commit('fetchRecords')
    this.recordList = this.$store.state.recordList
  }
  get showlist(): GroupedList {
    return groupList.groupYearMounth(this.recordList)[this.selectYearMounth]
  }
  // [date:'',amount:'']
  get keyValueList() {
    const inArray = []
    const outArray = []
    const daysInMounth = dayjs(this.selectYearMounth).daysInMonth()
    for (let i = 1; i < daysInMounth + 1; i++) {
      const dateString = dayjs(this.selectYearMounth).date(i).format('YYYY-MM-DD')
      const found = _.find(this.showlist, {
        title: dateString
      })
      inArray.push({
        key: dateString,
        value: found ? found.intotal : 0
      })
      outArray.push({
        key: dateString,
        value: found ? found.outtotal : 0
      })
    }
    return { inArray, outArray }
  }
  get options() {
    // title: {
    //   text: '收入与支出'
    // },
    const keys = this.keyValueList.inArray.map((item) => item.key)
    const invalues = this.keyValueList.inArray.map((item) => item.value)
    const outvalues = this.keyValueList.outArray.map((item) => item.value)

    const inmax = Math.max.apply(null, invalues)
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          },
          label: {
            precision: 0
          }
        }
      },
      toolbox: {
        itemSize: 18,
        itemGap: 15,
        right: 14,
        feature: {
          magicType: {
            type: ['line']
          },
          restore: { show: true }
        }
      },
      legend: {
        data: ['收入', '支出'] //对应的是name
      },
      grid: {
        left: '10%', //设置canvas图距左的距离
        top: '15%'
      },
      xAxis: {
        //坐标轴类型
        type: 'category',
        data: keys,
        axisPointer: {
          show: true,
          type: 'shadow'
        },
        axisLabel: {
          formatter: function (value: string, index: number) {
            return value.substr(8)
          }
        }
      },
      yAxis: [
        {
          // show: false,
          type: 'value',
          name: '金额',
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              fontSize: 8
            }
          },
          scale: true
        }
      ],
      //系列列表。
      series: [
        {
          name: '收入',
          type: 'bar',
          data: invalues,
          itemStyle: {
            color: '#F68D8B'
          }
        },
        {
          name: '支出',
          type: 'line',
          data: outvalues
        }
      ],
      color: ['#FFB382', '#F07590', '#F07590']
    }
  }
}
</script>
<style lang='scss' scoped>
.date-content {
  background: white;
  // width: 100vw;
}
</style>