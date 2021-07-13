<template>
  <div>
    <div class="numberPad">
      <slot />
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'numbers'
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