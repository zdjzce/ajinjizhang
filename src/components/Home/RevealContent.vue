<template>
  <div>
    <ol class="show-flex">
      <li class="show-content" v-for="(group, index) in groupedList" :key="index">
        <div class="amount">
          <span class="date">{{ beautify(groupedList[index].title) }}</span>
          <div class="amount-number">
            <span>{{ '-' + inSumAndOutSum(index, '-') }}</span>
            <span>{{ '+' + inSumAndOutSum(index, '+') }}</span>
          </div>
        </div>
        <ol class="item-content">
          <li class="item" v-for="item in group.items" :key="item.id">
            <icon-font :icon="item.tags.icon" class="icon"></icon-font>
            <div class="name-note">
              <span>{{ item.tags.name }}</span>
              <span class="note">{{ item.notes }}</span>
            </div>
            <span class="price">{{ item.type + item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import dayjs from 'dayjs'
import { Component } from 'vue-property-decorator'
import clone from '@/lib/clone'
@Component
export default class Types extends Vue {
  // eslint-disable-next-line no-undef
  get recordList(): RecordItem[] {
    return (this.$store.state as RootState).recordList
  }
  beforeCreate(): void {
    this.$store.commit('fetchRecords')
  }
  get groupedList() {
    const ListClone = clone(this.recordList)
    const newList = ListClone.sort((a, b) => {
      return dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
    })
    const result = [{ title: dayjs(newList[0].createdAt).format(), items: [newList[0]] }]
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i]
      const last = result[result.length - 1]
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current)
      } else {
        result.push({ title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current] })
      }
    }
    return result
  }
  inSumAndOutSum(index: number, type: string): number {
    const items = this.groupedList[index].items
    const SumList = items.filter((a) => a.amount && a.type === type)
    const Sum: number = eval(SumList.map((a) => a.amount).join('+'))
    return Sum || 0
  }
  beautify(string: string): string {
    const day = dayjs(string)
    const now = dayjs()
    if (day.isSame(now, 'day')) {
      return '今天'
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天'
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天'
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日')
    } else {
      return day.format('YYYY年M月D日')
    }
  }
}
</script>

<style lang='scss' scoped>
@import '/RevealStyle.scss';
</style>

