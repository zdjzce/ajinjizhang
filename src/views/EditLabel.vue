<template>
  <div class="">
    <top-nav>
      <span>编辑</span>
      <template v-slot:cancel-slot>
        <router-link to="/" class="cancel-color">取消</router-link>
      </template>
    </top-nav>
    <div class="edit">
      <div>
        <icon-font :icon="tagitem.tags.icon" :class="tagitem.tags.color"></icon-font>
        <span>{{ tagitem.tags.name }}</span>
      </div>
      <div>
        <span>日期</span>
        <calendar :value.sync="creatDate" class="date"></calendar>
      </div>
      <div><span>金额</span><input type="text" placeholder="修改金额" v-model="amount" /></div>
      <div><span>备注</span><input type="text" placeholder="修改备注" v-model="notes" /></div>
      <div class="button">
        <button @click="saveRecord">完成</button>
        <button class="remove" @click="removeRecord">删除</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Calendar from '@/components/Money/Calendar.vue'
import clone from '@/lib/clone'
import dayjs from 'dayjs'
import { Message } from 'element-ui'
@Component({
  components: { Calendar }
})
export default class Types extends Vue {
  tagitem: any = {}
  creatDate = null
  notes = null
  amount = null
  id = this.$route.params.id
  saveRecord() {
    let CloneTag = clone(this.tagitem)
    CloneTag = { ...CloneTag, createdAt: this.creatDate, notes: this.notes, amount: this.amount }
    this.$store.state.recordList.forEach((recordItem: RecordItem, index: number) => {
      if (recordItem.id === Number(this.id)) {
        this.$store.state.recordList.splice(index, 1, CloneTag)
      }
    })
    Message.success({ message: '修改成功!', center: true, duration: 1000, customClass: '.tips' })
    this.$store.commit('saveRecords')
  }
  removeRecord() {
    this.$store.state.recordList.forEach((item: any, index: any) => {
      if (item.id === Number(this.id)) {
        this.$store.state.recordList.splice(index, 1)
        this.$store.commit('saveRecords')
        Message.success({ message: '删除成功!', center: true, duration: 1000, customClass: '.tips' })
        this.$router.push('/')
      }
    })
  }
  created(): void {
    const id = this.$route.params.id
    this.$store.commit('fetchRecords')
    const recordList = this.$store.state.recordList
    const tagitem = recordList.filter((a: RecordItem) => {
      return a.id === Number(id)
    })[0]
    this.tagitem = tagitem
    this.creatDate = tagitem.createdAt
    this.notes = tagitem.notes
    this.amount = tagitem.amount
  }
}
</script>
<style lang='scss' scoped>
@import '~@/assets/style/iconcolor.scss';
.edit {
  width: 90vw;
  height: 60vh;
  background: #ffffff;
  margin: 0 auto;
  border-radius: 0.666667rem;
  font-size: 1rem;
  color: #181818;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    .date {
      margin-top: 0.666667rem;
    }
    span {
      margin-top: 0.666667rem;
    }
    input {
      width: 65%;
      padding: 5px;
      height: 30px;
      margin-top: 1rem;
      border: 1px solid #dcdfe6;
      border-radius: 3px;
    }
  }
  .button {
    display: flex;
    flex-direction: row;
    button {
      border: none;
      background: #ffb382;
      color: white;
      height: 2.5rem;
      width: 4rem;
      margin: 3.333333rem 1rem 0px 1rem;
      border-radius: 0.666667rem;
      // margin-top: 0.666667rem;
    }
    .remove {
      background: #f56c6c;
    }
  }
}
.cancel-color {
  color: white;
}
</style>