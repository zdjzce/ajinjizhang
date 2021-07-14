<template>
  <div class="money">
    <top-nav>
      <span>记账</span>
      <template v-slot:cancel-slot>
        <router-link to="/" class="cancel-color">取消</router-link>
      </template>
    </top-nav>
    <btn-box />
    <numbers>
      <notes></notes>
    </numbers>
  </div>
</template>

<script>
import BtnBox from '@/components/Money/BtnBox.vue'

import Numbers from '@/components/Money/Numbers.vue'
import Notes from '@/components/Money/Notes.vue'

export default {
  name: 'money',
  components: { BtnBox, Numbers, Notes }
}
</script>
<style lang='scss' scoped>
.money {
  display: flex;
  flex-direction: column;
  .cancel-color {
    color: white;
  }
}
</style>