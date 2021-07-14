<template>
  <div class="income-expend">
    <button @click="expendClick" :class="{ btnclick: expendIsClick }">支出</button>
    <button @click="inComeClick" :class="{ btnclick: inComeIsClick }">收入</button>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component, Prop, Emit } from 'vue-property-decorator'
@Component
export default class Types extends Vue {
  @Prop(Boolean) expendIsClick!: boolean
  @Prop(Boolean) inComeIsClick!: boolean
  inComeClick() {
    this.$emit('update:inComeIsClick', true)
    this.$emit('update:expendIsClick', false)
  }
  expendClick() {
    this.$emit('update:expendIsClick', true)
    this.$emit('update:inComeIsClick', false)
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