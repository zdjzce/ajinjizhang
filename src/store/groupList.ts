import clone from '@/lib/clone'
import dayjs from 'dayjs'
export default {
  groupedList(recordList: RecordItem[]): GroupedList {
    const ListClone = clone(recordList)
    const newList = ListClone.sort((a, b) => {
      return dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
    })
    if (newList.length === 0) {
      return []
    }
    const result = [{ title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]] }] as GroupedList
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i]
      const last = result[result.length - 1]
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current)
      } else {
        result.push({ title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current] })
      }
    }
    result.map((group) => {
      // // eslint-disable-next-line no-undef
      const inList: RecordItem[] = group.items.filter((a) => {
        return a.type === '+'
      })
      group.intotal = inList.reduce((sum: number, item: any) => {
        return sum + Number(item.amount)
      }, 0)
      const outList: RecordItem[] = group.items.filter((a) => {
        return a.type === '-'
      })
      group.outtotal = outList.reduce((sum: number, item: any) => {
        return sum + Number(item.amount)
      }, 0)
    })
    return result
  },
  groupYearMounth(recordlist: RecordItem[]): YearMounthList {
    const result = {} as YearMounthList
    const groupList = clone(this.groupedList(recordlist))
    // if (groupList.length === 0) {
    //   // return {}
    // }
    for (let i = 0; i < groupList.length; i++) {
      const YearMounth = dayjs(groupList[i].title).format('YYYY-MM')
      result[YearMounth] = groupList.filter((a) => {
        return dayjs(a.title).format('YYYY-MM') === YearMounth
      })
    }
    return result
  }
}
