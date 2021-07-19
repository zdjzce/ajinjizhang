import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'
import createId from '@/lib/createId'
import iconArray from '@/models/iconListModel'
import dayjs from 'dayjs'
Vue.use(Vuex)
import { Message } from 'element-ui'
const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: iconArray
  } as RootState,
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
        Message.error({ message: '请选择支出/收入下方的选项', center: true, duration: 1500, customClass: '.tips' })
      } else if (record2.amount === 0) {
        Message.error({ message: '金额不能为0', center: true, duration: 1000, customClass: '.tips' })
      } else {
        record2.id = createId()
        record2.createdAt = new Date().toISOString()
        state.recordList.push(record2)
        store.commit('saveRecords')
        Message.success({ message: '添加成功!', center: true, duration: 1000, customClass: '.tips' })
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
  }
})

export default store
