import clone from '@/lib/clone'
import dayjs from 'dayjs'
export default {
  groupedList(recordlist: RecordItem[]): GroupedList {
    const ListClone = clone(recordlist)
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
