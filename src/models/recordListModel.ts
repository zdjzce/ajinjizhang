interface icon {
  name?: string
  icon?: string
  color?: string
}
type RecordItem = {
  tags: icon
  notes: string
  type: string
  amount: number
  createdAt?: Date
}

const localStorageKeyname = 'recordList'
const recordListModel = {
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data))
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyname) || '[]')
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKeyname, JSON.stringify(data))
  }
}

export default recordListModel
