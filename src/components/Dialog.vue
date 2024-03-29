<template>
  <div v-if="visible" class="dialog">
    <div class="dialog__body">
      <!-- eslint-disable -->
      <div class="dialog__text" v-html="text.replace(/\n|\r/g, '<br>')" />
      <!-- eslint-enable -->
      <div class="dialog__action">
        <button
          v-if="type === DIALOG_TYPE.CONFIRM"
          ref="cancelBtn"
          class="dialog__btn dialog__btn--secondary"
        >
          {{ currentCancelLabel }}
        </button>
        <button
          ref="okBtn"
          class="dialog__btn dialog__btn--primary"
        >
          {{ currentOkLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const DIALOG_TYPE = {
  ALERT: 'alert',
  CONFIRM: 'confirm'
}

export default {
  props: {
    okLabel: {
      type: String,
      default: 'OK'
    },
    cancelLabel: {
      type: String,
      default: 'Cancel'
    }
  },

  data () {
    return {
      visible: false,
      text: '',
      type: '',
      currentOkLabel: '',
      currentCancelLabel: '',

      // const
      DIALOG_TYPE
    }
  },

  // 在Layout中 Dialog & Toast 這樣註冊，或參考 plugins/dialog.js 的方式安裝
  // import Vue from 'vue'
  // import Vuex from 'vuex'
  // mounted () {
  //   Vue.prototype.$alert = Vuex.Store.prototype.$alert = this.$refs.dialog.alert
  //   Vue.prototype.$confirm = Vuex.Store.prototype.$confirm = this.$refs.dialog.confirm
  // },

  mounted () {
    if (window) {
      window.addEventListener('popstate', this.hide)
    }
  },

  beforeDestroy () {
    if (window) {
      window.removeEventListener('popstate', this.hide)
    }
  },

  methods: {
    setLabelText (options = {}) {
      this.currentOkLabel = options.okLabel || this.okLabel
      this.currentCancelLabel = options.cancelLabel || this.cancelLabel
    },

    alert (text, options) {
      if (process.server) {
        return
      }

      return new Promise((resolve) => {
        this.setLabelText(options)
        this.text = text
        this.type = this.DIALOG_TYPE.ALERT
        this.visible = true

        this.$nextTick(() => {
          const onOK = () => {
            this.$refs.okBtn?.removeEventListener('click', onOK)

            this.visible = false
            resolve(true)
          }

          this.$refs.okBtn?.addEventListener('click', onOK)
        })
      })
    },

    confirm (text, options) {
      if (process.server) {
        return
      }

      return new Promise((resolve) => {
        this.setLabelText(options)
        this.text = text
        this.type = this.DIALOG_TYPE.CONFIRM
        this.visible = true

        this.$nextTick(() => {
          const onOK = () => {
            this.$refs.okBtn?.removeEventListener('click', onOK)

            this.visible = false
            resolve(true)
          }

          this.$refs.okBtn?.addEventListener('click', onOK)

          const onCancel = () => {
            this.$refs.cancelBtn?.removeEventListener('click', onCancel)

            this.visible = false
            resolve(false)
          }

          this.$refs.cancelBtn?.addEventListener('click', onCancel)
        })
      })
    },

    hide () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss">
.dialog {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 80000;
  display: flex;
  padding: 0 50px;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.2);

  &__body {
    min-width: 300px;
    max-width: 450px;
    padding: 20px 30px;
    background: #fff;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-radius: 5px;
    text-align: center;
  }

  &__text {
    max-height: 50vh;
    overflow-y: auto;
    margin-bottom: 20px;
  }

  &__btn {
    margin: 0 2px 5px 2px;
    padding: 10px 30px;
    -webkit-appearance: none;
    border: 1px solid #eee;
    background: #eee;
    border-radius: 3px;
    color: #333;
    cursor: pointer;
    outline: none;

    &:hover {
      filter: brightness(.95);
    }

    &:active {
      filter: brightness(.9);
    }
  }

  &__btn--primary {
    background: #ca9;
    border: 1px solid #ca9;
    color: #fff;
    font-weight: bold;
  }

  &__btn--secondary {
    background: #fff;
    border: 1px solid #ccc;
  }
}
</style>
