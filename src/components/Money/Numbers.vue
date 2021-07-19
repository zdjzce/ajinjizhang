<template>
  <div>
    <div class="numberPad">
      <slot />
      <div class="output">{{ output }}</div>
      <div class="buttons">
        <button @click="inputContent">1</button>
        <button @click="inputContent">2</button>
        <button @click="inputContent">3</button>
        <button @click="remove">删除</button>
        <button @click="inputContent">4</button>
        <button @click="inputContent">5</button>
        <button @click="inputContent">6</button>
        <button @click="clear">清空</button>
        <button @click="inputContent">7</button>
        <button @click="inputContent">8</button>
        <button @click="inputContent">9</button>
        <button @click="ok" class="ok">OK</button>
        <button @click="inputContent" class="zero">0</button>
        <button @click="inputContent">.</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class Numbers extends Vue {
  value = 0
  output = this.value.toString()
  inputContent(event: MouseEvent): void {
    const button = event.target as HTMLButtonElement
    const input = button.textContent!
    if (this.output.length === 16) {
      return
    }
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input
      } else {
        this.output += input
      }
      return
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {
      return
    }
    this.output += input
  }
  remove(): void {
    if (this.output.length === 1) {
      this.output = '0'
    } else {
      this.output = this.output.slice(0, -1)
    }
  }
  clear(): void {
    this.output = '0'
  }
  ok(): void {
    this.$emit('submit', Number(this.output))
    this.output = '0'
  }
}
</script>
<style lang='scss' scoped>
@import '~@/assets/style/helper.scss';
.numberPad {
  position: absolute;
  min-width: 100%;
  bottom: 0;
  .output {
    text-align: right;
    padding: 0.1rem 0.733333rem;
    font-size: 2.2rem;
    background: #f7f8f8;
    color: #656565;
    border-radius: 7px;
  }
  .buttons {
    @extend %clearFix;
    > button {
      width: 25%;
      height: 3rem;
      float: left;
      background: white;
      font-size: 0.933333rem;
      border: none;
      border-top: 1px solid rgba($color: $font, $alpha: 0.2);
      border-right: 1px solid rgba($color: $font, $alpha: 0.2);
      &.ok {
        height: 6rem;
        float: right;
      }
      &.zero {
        width: 25% * 2;
      }
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        border-top: none;
      }
      &:nth-child(4),
      &:nth-child(8),
      &:nth-child(12) {
        border-right: none;
      }
    }
  }
}
</style>