const localStorageKeyname = 'iconListModel2'
interface icon {
  name?: string
  icon?: string
  color?: string
}

const iconArray2: icon[] = [
  { name: '工资', icon: 'gongzi', color: 'jiaotong' },
  { name: '兼职', icon: 'jianzhi', color: 'jiushui' },
  { name: '理财', icon: 'licai', color: 'kanbing' },
  { name: '礼金', icon: 'lijin', color: 'jianshen' },
  { name: '其他', icon: 'qitashouru', color: 'huafei' }
]

type IconListModel2 = {
  data: icon[]
  fetch: () => icon[]
  save: () => void
  create?: (list: icon) => 'success' | 'duplicated'
}

const iconListModel2: IconListModel2 = {
  data: iconArray2,
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyname) || '[]')
    return this.data
  },
  save() {
    window.localStorage.setItem(localStorageKeyname, JSON.stringify(this.data))
  }
}

export default iconListModel2
