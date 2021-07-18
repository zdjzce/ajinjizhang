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
  createdAt?: string
}
type RootState = {
  recordList: RecordItem[]
  tagList: icon[]
}

type IconListModel = {
  data: icon[]
  fetch: () => icon[]
  save: () => void
  create?: (list: icon) => 'success' | 'duplicated'
}
