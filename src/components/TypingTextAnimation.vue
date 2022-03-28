<template>
  <span>
    {{ content.slice(0, Math.floor(textSliceCount)) }}
    <span class="cursor">_</span>
  </span>
</template>

<script>
import { TweenMax, SteppedEase } from 'gsap'

export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    speed: {
      type: Number,
      default: 5
    }
  },

  data () {
    return {
      tween: null,
      textSliceCount: 0
    }
  },

  watch: {
    content: {
      immediate: true,
      handler () {
        this.textSliceCount = 0

        if (this.tween) {
          this.tween.kill()
        }

        this.tween = TweenMax.to(this, this.content.length / this.speed, {
          textSliceCount: this.content.length,
          ease: SteppedEase.config(this.content.length),
          onComplete: () => {
            setTimeout(() => {
              this.$emit('complete')
            }, 1000)
          }
        })
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
