interface icon {
  name?: string
  icon?: string
  color?: string
}
type RecordItem = {
  id: number
  tags: icon
  notes: string
  type: string
  amount: number
  createdAt: string
}
type RootState = {
  recordList: RecordItem[]
  tagList: icon[]
  groupedList?: GroupedList
  showList?: YearMounthList
}
type group = {
  [key: string]: any
}
type GroupedList = {
  title: string
  items: RecordItem[]
  intotal?: any
  outtotal?: any
}[]
type YearMounthList = {
  [key: string]: GroupedList
}

type IconListModel = {
  data: icon[]
  fetch: () => icon[]
  save: () => void
  create?: (list: icon) => 'success' | 'duplicated'
}
