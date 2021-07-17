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

type IconListModel = {
  data: icon[]
  fetch: () => icon[]
  save: () => void
  create?: (list: icon) => 'success' | 'duplicated'
}

// type IconListModel = {
//   data: icon[]
//   fetch: () => icon[]
//   save: () => void
//   create?: (list: icon) => 'success' | 'duplicated'
// }
