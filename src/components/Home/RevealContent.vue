<template>
  <div>
    <noting-for-create v-if="!list"></noting-for-create>
    <ol class="show-flex" v-else>
      <li class="show-content" v-for="(group, index) in list" :key="index">
        <div class="amount">
          <span class="date">{{ beautify(list[index].title) + '' }}</span>
          <div class="amount-number">
            <span>{{ '+' + inSumAndOutSum(index, '+') }}</span>
            <span>{{ '-' + inSumAndOutSum(index, '-') }}</span>
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
import { Component, Prop } from 'vue-property-decorator'
import clone from '@/lib/clone'
import NotingForCreate from '@/components/Home/NotingForCreate.vue'
@Component({
  components: { NotingForCreate }
})
export default class Types extends Vue {
  @Prop(String) select!: string
  get list() {
    this.$emit('update:list', this.groupYearMounth[this.select])
    return this.groupYearMounth[this.select]
  }
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
    if (newList.length === 0) {
      return []
    }
    const result = [{ title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]] }]
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
  get groupYearMounth(): any {
    type group = {
      [key: string]: any
    }
    let result = {} as group
    const groupList = clone(this.groupedList)
    if (groupList.length === 0) {
      return []
    }
    for (let i = 0; i < groupList.length; i++) {
      let YearMounth = dayjs(groupList[i].title).format('YYYY-MM')
      result[YearMounth] = groupList.filter((a) => {
        return dayjs(a.title).format('YYYY-MM') === YearMounth
      })
    }
    return result
  }

  inSumAndOutSum(index: number, type: string): number {
    const items = this.list[index].items
    const SumList = items.filter((a: any) => a.amount && a.type === type)
    const Sum: number = eval(SumList.map((a: any) => a.amount).join('+'))
    return Sum || 0
  }
  beautify(string: string): string {
    const ChineseDay = ['日', '一', '二', '三', '四', '五', '六']
    const day = dayjs(string)
    const WeekDay = '周' + ChineseDay[day.get('day')]
    const now = dayjs()
    if (day.isSame(now, 'day')) {
      return '今天 ' + WeekDay
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天 ' + WeekDay
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天 ' + WeekDay
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日 ') + WeekDay
    } else {
      return day.format('YYYY/M/D ') + WeekDay
    }
  }
}
</script>

<style lang='scss' scoped>
@import '/RevealStyle.scss';
</style>