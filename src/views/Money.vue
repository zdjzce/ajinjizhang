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
// import store from '@/store/index2'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component({
  components: { BtnBox, Numbers, Notes }
})
export default class Money extends Vue {
  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: {},
    notes: '',
    type: '-',
    amount: 0
  }
  // eslint-disable-next-line no-undef
  OnBoxUpdate(value: icon): void {
    this.record.tags = value
  }

  OnTypeUpdate(value: string): void {
    this.record.type = value
  }

  OnNoteUpdate(value: string): void {
    this.record.notes = value
  }
  created(): void {
    this.$store.commit('fetchRecords')
  }
  // eslint-disable-next-line no-undef
  saveRecord(value: number): void {
    this.record.amount = value
    this.$store.commit('createRecords', this.record)
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