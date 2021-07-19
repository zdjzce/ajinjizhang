
<template>
  <div class="content">
    <ul class="box-flex">
      <li
        class="items"
        v-for="(item, index) in iconArray"
        :key="index"
        @click="addClass(index)"
        :class="{ iconclick: selected.name === item.name }"
        v-if="item.icon != 'tianjia'"
      >
        <icon-font :icon="item.icon" :class="item.color" />
        <span>{{ item.name }}</span>
      </li>
      <router-link class="items" to="/additem">
        <li v-for="(item1, key) in iconArray" :key="key + '1'" v-if="item1.icon === 'tianjia'">
          <icon-font :icon="item1.icon" />
          <span> {{ item1.name }}</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>


<script lang='ts'>
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
@Component
export default class BoxContent extends Vue {
  @Prop(Array) iconArray!: []
  @Prop(String) btnselected!: string
  // eslint-disable-next-line no-undef
  selected: icon = {}
  addClass(index: number): void {
    this.selected = {}
    let select: string = this.iconArray[index]
    Object.assign(this.selected, select)
    this.$emit('update:value', this.selected)
  }
  @Watch('btnselected')
  typeChangeClearSelec(): void {
    this.selected = {}
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

    .items {
      width: 25%;
      text-align: center;
      margin-top: 0.866667rem;
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