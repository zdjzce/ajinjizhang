<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入备注" v-model="value" />
    </label>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
@Component
export default class Notes extends Vue {
  value = ''
  @Watch('value')
  onUpdateNote(): void {
    this.$emit('noteupdate-value', this.value)
  }
}
</script>
<style lang='scss' scoped>
.notes {
  height: 2rem;
  font-size: 0.933333rem;
  background: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 7px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  margin-left: 1.133333rem;
  margin-right: 1.133333rem;
  .name {
    text-align: center;
    padding-left: 0.7rem;
    padding-right: 1rem;
    color: #857878;
  }
  input {
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 1.066667rem;
    height: 2.533333rem;
  }
}
</style>