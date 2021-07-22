<template>
  <div class="show-flex">
    <div v-if="outComeList.length === 0" class="nothing">当前月份无记录,快去记一笔吧</div>
    <div v-else class="show-content">
      <h4>支出排行榜</h4>
      <ol class="item-content">
        <li class="item" v-for="item in sortOutCome" :key="item.id">
          <icon-font :icon="item.tags.icon" class="icon"></icon-font>
          <div class="name-note">
            <span>{{ item.tags.name }}</span>
            <span class="note">{{ item.notes }}</span>
          </div>
          <span class="price">{{ '-' + item.amount }}</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import dayjs from 'dayjs'
@Component
export default class SortInCome extends Vue {
  @Prop(String) selectYearMounth!: string
  //  [{tags:{},amount:''}]
  @Prop(Array) recordList!: RecordItem[]
  get outComeList() {
    const outComeList = this.recordList.filter(
      (a) => a.type === '-' && dayjs(a.createdAt).format('YYYY-MM') === this.selectYearMounth
    )
    return outComeList
  }
  get sortOutCome() {
    const outTagsAmount = this.outComeList.map((group) => {
      return { tags: group.tags, amount: group.amount }
    })
    const tags: string[] = []
    let result: { tags: RecordItem; amount: number }[] = []
    let r: any
    for (r of outTagsAmount) {
      const index = tags.indexOf(r.tags.name!)
      if (index < 0) {
        tags.push(r.tags.name!)
        result.push({ tags: r.tags, amount: r.amount })
      } else {
        result[index].amount += r.amount
      }
    }
    result = result.sort((b, a) => a.amount - b.amount)
    return result
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
    margin-top: -10px;
    width: 90%;
    background: white;
    border-radius: 0.666667rem;
    box-shadow: 0px 0.8rem 0.933333rem rgba(209, 212, 226, 0.4);
    box-shadow: 0px -0.5rem 1rem 0px rgb(209 212 226 / 20%);
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
          padding: 0rem 0.533333rem 0 0.533333rem;
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
.show-content {
  h4 {
    text-align: center;
    margin-top: 0.666667rem;
    margin-bottom: 0.666667rem;
  }
}
.nothing {
  width: 90%;
  text-align: center;
  font-size: 1.133333rem;
  background: white;
  padding: 0.666667rem 0.666667rem;
  border-radius: 0.666667rem;
  color: #585858;
  box-shadow: 0px -0.5rem 1rem 0px rgb(209 212 226 / 20%);
}
</style>