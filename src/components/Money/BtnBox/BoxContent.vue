
<template>
  <div class="content">
    <ul class="box-flex">
      <li
        v-for="(item, index) in iconArray"
        :key="index"
        class="box"
        @click="addClass(index)"
        :class="{ iconclick: index === current }"
      >
        <icon-font :icon="item.icon" :class="item.color" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'boxcontent',
  props: ['iconArray'],
  data() {
    return {
      current: 0
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    addClass(index: number) {
      this.current = index
    }
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