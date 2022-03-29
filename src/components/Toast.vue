<template>
  <div class="toast">
    <transition-group name="toast-animation" tag="div">
      <ToastItem
        v-for="item in list.slice().reverse()"
        :key="item.id"
        :item="item"
        :countdown="countdown"
        @click.native="itemComplete($event)"
        @complete="itemComplete($event)"
      />
    </transition-group>
  </div>
</template>

<script>
// import Vue from 'vue'
// import Vuex from 'vuex'
import ToastItem from './components/ToastItem'

export default {
  components: {
    ToastItem
  },

  props: {
    countdown: {
      type: Number,
      default: 3000
    }
  },

  data () {
    return {
      list: [],
      idx: 0
    }
  },

  // 在Layout中 Dialog & Toast 這樣註冊
  // mounted () {
  //   Vue.prototype.$alert = Vuex.Store.prototype.$alert = this.$refs.dialog.alert
  //   Vue.prototype.$confirm = Vuex.Store.prototype.$confirm = this.$refs.dialog.confirm
  //   Vuex.Store.prototype.$toast = Vuex.Store.prototype.$toast = this.$refs.toast.toast
  // },

  methods: {
    toast (text) {
      this.list.push({
        text,
        id: 'toast_' + this.idx
      })
      //
      this.idx += 1
    },
    itemComplete ($event) {
      const idx = this.list.indexOf($event)
      this.list.splice(idx, 1)
    }
  }
}
</script>

<style lang="scss">
.toast {
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 70000;
  text-align: right;
}

//
// transition
//
.toast-animation-item {
  display: inline-block;
  margin-right: 10px;
}

.toast-animation-enter-active,
.toast-animation-leave-active {
  transition: all .3s;
}

.toast-animation-enter,
.toast-animation-leave-to
/* .toast-animation-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(150px);
}
</style>
