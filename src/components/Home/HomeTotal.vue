<template>
  <div class="total-box">
    <main class="box">
      <pick-date :value.sync="selectYearMounth"></pick-date>
      <div class="total-inout">
        <div class="inandout">
          <span>总收入</span>
          <span>{{ '+' + inSumAndOutSum('+') }}</span>
        </div>
        <div class="inandout">
          <span>总支出</span>
          <span class="out">{{ '-' + inSumAndOutSum('-') }}</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import PickDate from '@/components/PickDate.vue'
import dayjs from 'dayjs'
@Component({
  components: { PickDate }
})
export default class HomeTotal extends Vue {
  @Prop(Array) list!: any
  selectYearMounth = dayjs(new Date()).format('YYYY-MM')
  @Watch('selectYearMounth')
  updateYearMounth() {
    this.$emit('update:value', this.selectYearMounth)
  }
  inSumAndOutSum(type: string): number {
    let count = 0
    if (!this.list) {
      return 0
    }
    for (let i = 0; i < this.list.length; i++) {
      const items = this.list[i].items
      let SumList = items.filter((a: any) => a.amount && a.type === type)
      if (SumList.length === 0) {
        SumList = 0
      } else {
        const Sum: number = eval(SumList.map((a: any) => a.amount).join('+'))
        count += Sum
      }
    }
    return count
  }
}
</script>
<style lang='scss' scoped>
.total-box {
  width: 90vw;
  margin: 0 auto;
  .box {
    margin-top: 1rem;
    background: white;
    border-radius: 10px;
    .selecdate {
      display: flex;
      justify-content: center;
      padding: 1.3rem 0;
    }
    .total-inout {
      padding: 0 0 0.6rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .inandout {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        :nth-child(1) {
          color: #8a8a8a;
          font-size: 12px;
        }
        :nth-child(2) {
          margin-top: 5px;
          color: #fd7f80;
          font-size: 20px;
        }
        .out {
          color: #31d19e;
        }
      }
    }
  }
}
</style>