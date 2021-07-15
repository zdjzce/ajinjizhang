<template>
  <div class="money">
    <top-nav>
      <span>记账</span>
      <template v-slot:cancel-slot>
        <router-link to="/" class="cancel-color">取消</router-link>
      </template>
    </top-nav>
    <btn-box @Boxupdate-value="OnBoxUpdate" @Typeupdate-value="OnTypeUpdate" />
    <numbers @submit="saveRecord">
      <notes @noteupdate-value="OnNoteUpdate"></notes>
    </numbers>
  </div>
</template>

<script lang ='ts'>
import BtnBox from '@/components/Money/BtnBox.vue'
import Numbers from '@/components/Money/Numbers.vue'
import Notes from '@/components/Money/Notes.vue'
import recordListModel from '@/models/recordListModel'
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
const recordList = recordListModel.fetch()
interface icon {
  name?: string
  icon?: string
  color?: string
}
type Record = {
  tags: icon
  notes: string
  type: string
  amount: number
  createdAt?: Date
}
@Component({
  components: { BtnBox, Numbers, Notes }
})
export default class Money extends Vue {
  recordList: Record[] = recordList
  record: Record = {
    tags: {},
    notes: '',
    type: '-',
    amount: 0
  }
  OnBoxUpdate(value: any): void {
    this.record.tags = value
  }

  OnTypeUpdate(value: string): void {
    this.record.type = value
  }

  OnNoteUpdate(value: string): void {
    this.record.notes = value
  }

  saveRecord(value: any): void {
    this.record.amount = value
    // 如果直接push record 每次都会更改原来的地址 所以深拷贝保存的record
    const record2: Record = recordListModel.clone(this.record)
    record2.createdAt = new Date()
    this.recordList.push(record2)
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList)
  }
}
</script>
<style lang='scss' scoped>
.money {
  display: flex;
  flex-direction: column;
  .cancel-color {
    color: white;
  }
}
</style>