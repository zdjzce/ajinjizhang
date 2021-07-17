const localStorageKeyname = 'recordList'
const recordStore = {
  recordList: [] as RecordItem[],
  cloneRecords(data: RecordItem[] | RecordItem): RecordItem {
    return JSON.parse(JSON.stringify(data))
  },
  fetchRecords(): any {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyname) || '[]')
    return this.recordList
  },
  saveRecords(data: RecordItem[]): void {
    window.localStorage.setItem(localStorageKeyname, JSON.stringify(data))
  },
  createRecords(record: RecordItem): void {
    const record2: RecordItem = this.cloneRecords(record)
    if (!record2.tags.name) {
      alert('请选择支出/收入下方的选项')
    } else {
      record2.createdAt = new Date()
      this.recordList.push(record2)
      this.saveRecords(this.recordList)
    }
  }
}
recordStore.fetchRecords()
export default recordStore
