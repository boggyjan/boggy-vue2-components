<template>
  <span>
    {{ content.slice(0, Math.floor(textSliceCount)) }}
    <span class="cursor">_</span>
  </span>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    speed: {
      type: Number,
      default: 100
    },
    breath: {
      type: Number,
      default: 300
    },
    hold: {
      type: Number,
      default: 1000
    }
  },

  data () {
    return {
      textSliceCount: 0,
      breathHold: [' ', '　', '、', '。', '，', '？', '！', ',', '.', '?', '!']
    }
  },

  watch: {
    content: {
      immediate: true,
      handler () {
        this.textSliceCount = 0

        const increaseTextSliceCount = () => {
          this.textSliceCount++

          if (this.textSliceCount < this.content.length) {
            if (this.breathHold.includes(this.content[this.textSliceCount - 1])) {
              setTimeout(increaseTextSliceCount, this.breath)
            } else {
              setTimeout(increaseTextSliceCount, this.speed)
            }
          } else {
            setTimeout(() => {
              this.$emit('complete')
            }, this.hold)
          }
        }

        setTimeout(increaseTextSliceCount, this.speed)
      }
    }
  }
}
</script>

<style lang="scss">
.cursor {
  display: inline-block;
  width: 8px;
  animation: 0.6s cursor-animation infinite;
  font-weight: bold;
}

@keyframes cursor-animation {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
