<template>
  <div class="income-expend">
    <button @click="selectType('-')" :class="{ btnclick: value === '-' }">支出</button>
    <button @click="selectType('+')" :class="{ btnclick: value === '+' }">收入</button>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
@Component
export default class Types extends Vue {
  @Prop(String) value!: string
  selectType(type: string): void {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknow')
    }
    this.$emit('update:value', type)
  }
}
</script>
<style lang='scss' scoped>
@import '~@/assets/style/helper.scss';
.income-expend {
  margin-top: 0.4rem;
  button {
    border: 1px solid #d2d2d2;
    background: transparent;
    margin: 0.133333rem 0.666667rem;
    padding: 0.333333rem 1.333333rem;
    border-radius: 8px;
    color: $font;
  }
  .btnclick {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
}
</style>