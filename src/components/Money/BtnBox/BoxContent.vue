
<template>
  <div class="content">
    <ul class="box-flex">
      <li
        v-for="(item, index) in iconArray"
        :key="index"
        class="box"
        @click="addClass(index)"
        :class="{ iconclick: index === current }"
        v-if="item.icon != 'tianjia'"
      >
        <icon-font :icon="item.icon" :class="item.color" />
        <span>{{ item.name }}</span>
      </li>
      <li v-for="(item1, key) in iconArray" :key="key + '1'" v-if="item1.icon === 'tianjia'">
        <icon-font :icon="item1.icon" />
        <span>{{ item1.name }}</span>
      </li>
    </ul>
  </div>
</template>


<script lang='ts'>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
@Component
export default class BoxContent extends Vue {
  @Prop(Array) iconArray: [] | undefined
  current = 0
  addClass(index: number): number {
    return (this.current = index)
  }
}
</script>
<style lang='scss' scoped>
@import '~@/assets/style/helper.scss';
@import '~@/assets/style/iconcolor.scss';
.content {
  width: 100%;
  .box-flex {
    width: 86vw;
    // height: 30%;
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 33%;
      text-align: center;
      margin-top: 0.566667rem;
      color: $font;
    }
  }
}
.iconclick {
  background: $linear;
  border-radius: 0.666667rem;
  div {
    color: #ffffff;
  }
  span {
    color: #ffffff;
  }
}
</style>