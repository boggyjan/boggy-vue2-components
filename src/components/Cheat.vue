<template>
  <div v-if="false" />
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      tempCode: '',
      ignoreKey: ['Shift', 'Meta', 'Alt', 'Control', 'CapsLock', 'Tab']
    }
  },

  mounted () {
    document.addEventListener('keydown', this.keydown)
  },

  beforeDestroy () {
    document.removeEventListener('keydown', this.keydown)
  },

  methods: {
    keydown ($event) {
      // 若不在ignore裡面就加到tempCode後面
      if (!this.ignoreKey.includes($event.key)) {
        // 在後面加上逗點
        if (this.tempCode.length) {
          this.tempCode += ','
        }

        this.tempCode += $event.key
      }

      // 若tempCode等於code就發出complete事件
      if (this.code === this.tempCode) {
        this.$emit('complete')
        this.tempCode = ''
        return
      }

      // 如果this.code不包含this.tempCode（tempCode已經無法等於code）時，就清空tempCode，賦予值為目前的key
      if (!this.code.includes(this.tempCode)) {
        this.tempCode = $event.key
      }
    }
  }
}
</script>
