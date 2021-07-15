<template>
  <div class="content">
    <ul class="box-flex">
      <li
        v-for="(item, index) in iconArray"
        :key="index"
        @click="addClass(index)"
        :class="{ iconclick: selected.name === item.name }"
        v-if="item.icon != 'tianjia'"
      >
        <icon-font :icon="item.icon" :class="item.color" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>


<script lang='ts'>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
interface icon {
  name?: string
  icon?: string
  color?: string
}
@Component
export default class ItemsContent extends Vue {
  @Prop(Array) iconArray!: []
  selected: icon = {}
  addClass(index: number) {
    this.selected = {}
    let select: string = this.iconArray[index]
    Object.assign(this.selected, select)
    this.$emit('update-value', this.selected)
  }
}
</script>
<style lang='scss' scoped>
@import '~@/assets/style/helper.scss';
@import '~@/assets/style/iconcolor.scss';
.content {
  width: 100%;
  overflow: scroll;
  .box-flex {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 25%;
      text-align: center;
      margin-top: 1.266667rem;
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