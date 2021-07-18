<template>
  <div>
    <ol class="show-flex">
      <li class="show-content" v-for="(group, index) in groupedList" :key="index">
        <div class="amount">
          <span class="date">7月17日</span>
          <div class="amount-number">
            <span>+1400</span>
            <span>-1400</span>
          </div>
        </div>
        <ol class="item-content">
          <li class="item" v-for="item in group.items" :key="item.id">
            <icon-font :icon="item.tags.icon" class="icon"></icon-font>
            <div class="name-note">
              <span>{{ item.tags.name }}</span>
              <span class="note">{{ item.notes }}</span>
            </div>
            <span class="price">{{ item.type + item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class Types extends Vue {
  get recordList() {
    return (this.$store.state as RootState).recordList
  }
  beforeCreate(): void {
    this.$store.commit('fetchRecords')
  }
  get groupedList() {
    const { recordList } = this
    // eslint-disable-next-line no-undef
    type Items = RecordItem[]
    type HashTableValue = { title: string; items: Items }
    const hashTable: { [key: string]: HashTableValue } = {}
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split('T')
      hashTable[date] = hashTable[date] || { title: date, items: [] }
      hashTable[date].items.push(recordList[i])
    }
    return hashTable
  }
}
</script>

<style lang='scss' scoped>
@import '~@/assets/style/helper.scss';
.show-flex {
  font-size: 14px;
  display: flex;
  flex-direction: cloumn;
  justify-content: center;
  flex-wrap: wrap;
  .show-content {
    margin-top: 1.35rem;
    width: 90%;
    background: white;
    border-radius: 0.666667rem;

    .amount {
      width: 100%;
      margin: 0.8rem 0;
      text-align: center;
      position: relative;
      .date {
        position: absolute;
        left: 1rem;
        font-size: 1rem;
        color: #9e9e9e;
      }
      .amount-number {
        display: inline-block;
        text-align: center;
        font-size: 1.133333rem;
        span {
          padding: 0.533333rem;
        }
        :nth-child(1) {
          color: #fd7f80;
        }
        :nth-child(2) {
          color: #31d19e;
        }
      }
    }
    .item-content {
      display: flex;
      flex-direction: cloumn;
      justify-content: center;
      flex-wrap: wrap;
      .item {
        width: 100%;
        margin-bottom: 0.833333rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          width: 2.5rem;
          height: 2.5rem;
          line-height: 3rem;
          border-radius: 50%;
          background: $linear;
          text-align: center;
          color: white;
          margin-left: 0.666667rem;
        }
        .name-note {
          width: 60%;
          margin-left: 0.8rem;
          span {
            display: block;
          }
          .note {
            font-size: 0.8rem;
            color: #8a8a8a;
            word-wrap: break-word;
          }
        }
        .price {
          font-size: 0.933333rem;
          text-align: center;
          word-wrap: break-word;
          width: 23%;
        }
      }
    }
  }
}
</style>

