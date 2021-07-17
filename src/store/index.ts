import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'
import iconArray from '@/models/iconListModel'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: iconArray
  },
  mutations: {
    fetchRecords(state): any {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[]
    },
    saveRecords(state): void {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList))
    },
    createRecords(state, record) {
      const record2 = clone(record)
      if (!record2.tags.name) {
        alert('请选择支出/收入下方的选项')
      } else {
        record2.createdAt = new Date()
        state.recordList.push(record2)
        store.commit('saveRecords')
      }
    },
    fetchTags(state): icon[] {
      const localStorageValue: string | null = window.localStorage.getItem('tagList')
      if (localStorageValue) {
        state.tagList = JSON.parse(localStorageValue)
      } else {
        state.tagList = iconArray
      }
      return state.tagList
    },
    saveTags(state): void {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
    }
    // createTags(state, list: icon): void {
    //   const names = state.tagList.map((item) => item.name)
    //   if (names.indexOf(list.name) >= 0) {
    //     window.alert('标签名重复了')
    //   } else {
    //     state.tagList.push(list)
    //     store.commit('saveTags')
    //     window.alert('添加成功')
    //   }
    // }
  }
})

export default store
