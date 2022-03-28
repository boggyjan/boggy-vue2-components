<template>
  <span>
    {{ content.slice(0, Math.floor(textSliceCount)) }}<span v-if="showRandom" class="random">{{ random[Math.floor(Math.random() * random.length)] }}</span>
  </span>
</template>

<script>
import { TweenMax, SteppedEase } from 'gsap'

export default {
  data () {
    return {
      tween: null,
      textSliceCount: 0,
      random: ['＆', 'ー', '。', '＞', '〜', '＠', '１', '８', 'Ａ', 'ｂ', 'ｃ', 'Ｄ', 'ｅ', 'ｆ', 'Ｇ', 'ｈ', 'ｉ', 'ｊ', 'Ｋ', 'Ｌ', 'Ｍ', 'ｎ', 'ｏ', 'よ', 'あ', 'そ', 'び', 'に', 'い', 'っ', 'ち', 'ゃ', 'た', 'フ', 'リ', 'ソ', 'ぐ', '忘', '了', '說', 'ㄅ', 'ㄔ', 'ㄐ', '']
    }
  },

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

  computed: {
    showRandom () {
      return Math.floor(this.textSliceCount) !== this.content.length
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
          ease: SteppedEase.config(this.content.length * 2.5),
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
.random {
  text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 20px #fff;
}
</style>
