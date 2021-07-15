interface icon {
  name?: string
  icon?: string
  color?: string
}
const iconArray: icon[] = [
  { name: '旅游', icon: 'feiji', color: 'feiji' },
  { name: '汉堡', icon: 'hanbao', color: 'hanbao' },
  { name: '住房', icon: 'house', color: 'zhufang' },
  { name: '话费', icon: 'huafei', color: 'huafei' },
  { name: '购物', icon: 'gouwu', color: 'gouwu' },
  { name: '交通', icon: 'jiaotong', color: 'jiaotong' },
  { name: '酒水', icon: 'jiushui', color: 'jiushui' },
  { name: '看病', icon: 'kanbing', color: 'kanbing' },
  { name: '健身', icon: 'run', color: 'jianshen' },
  { name: '蔬菜', icon: 'shucai', color: 'huafei' },
  { name: '娱乐', icon: 'yule', color: 'gouwu' },
  { name: '其他', icon: 'qitashouru', color: 'jiaotong' },
  { name: '添加', icon: 'tianjia' }
]
type IconListModel = {
  data: icon[]
  fetch: () => icon[]
  save: () => void
  create: (list: icon) => 'success' | 'duplicated'
}
const localStorageKeyname = 'iconListModel'
const iconListModel: IconListModel = {
  data: iconArray,
  fetch() {
    const localStorageValue: string | null = window.localStorage.getItem(localStorageKeyname)
    if (localStorageValue) {
      this.data = JSON.parse(localStorageValue)
    } else {
      this.data = iconArray
    }
    return this.data
  },
  save() {
    window.localStorage.setItem(localStorageKeyname, JSON.stringify(this.data))
  },
  create(list: icon) {
    const names = this.data.map((item) => item.name)
    if (names.indexOf(list.name) >= 0) {
      return 'duplicated'
    }
    this.data.push(list)
    this.save()
    return 'success'
  }
}

export default iconListModel
