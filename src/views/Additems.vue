<template>
  <div>
    <top-nav>
      <span>添加类别</span>
      <template v-slot:cancel-slot>
        <router-link to="/money" class="cancel-color">取消</router-link>
      </template>
    </top-nav>
    <div class="additem">
      <items-content :iconArray="iconArray1" class="item-content" @update-value="saveIcon"></items-content>
      <button class="btn-add" @click="iconSelected(iconValue)">完成</button>
    </div>
  </div>
</template>

<script lang='ts'>
import ItemsContent from '@/components/Additems/ItemsContent.vue'
import addItemModel from '@/components/Additems/addItemModel'
import Vue from 'vue'

const iconArray1 = addItemModel
import { Component } from 'vue-property-decorator'
@Component({
  components: { ItemsContent }
})
export default class Additems extends Vue {
  iconArray1 = iconArray1
  iconValue = {}
  get taglist() {
    return this.$store.state.tagList
  }
  // eslint-disable-next-line no-undef
  saveIcon(value: icon): void {
    this.iconValue = value
  }
  iconSelected(value: any): void {
    if (!value.name || !value.icon || !value.color) {
      window.alert('没有选择标签')
    } else {
      const names = this.$store.state.tagList.map((item: { name: any }) => item.name)
      if (names.indexOf(value.name) >= 0) {
        window.alert('标签名重复了')
      } else {
        this.taglist.push(value)
        this.$store.commit('saveTags')
        window.alert('添加成功')
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.additem {
  display: flex;
  flex-direction: column;
  align-items: center;
  .item-content {
    margin-top: 1rem;
    width: 90vw;
    height: 80vh;
    background: #ffffff;
    flex-grow: 1;
    border-radius: 0.666667rem;
    box-shadow: 0px 0.8rem 0.933333rem rgba(209, 212, 226, 0.4);
  }
  .btn-add {
    margin-top: 0.666667rem;
    cursor: pointer;
    color: #ffffff;
    width: 40vw;
    padding: 0.333333rem;
    border: none;
    font-size: 1.2rem;
    border-radius: 1.666667rem;
    background: linear-gradient(222.7deg, #ffb382 -6.37%, #f07590 84.84%);
  }
}
.cancel-color {
  color: #ffffff;
}
</style>