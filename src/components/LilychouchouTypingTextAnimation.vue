<template>
  <span>
    {{ content.slice(0, Math.floor(textSliceCount)) }}<span v-if="showRandom" class="random">{{ randomText }}</span>
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
      default: 200
    },
    hold: {
      type: Number,
      default: 1000
    }
  },

  data () {
    return {
      textSliceCount: 0,
      random: ['＆', 'ー', '。', '＞', '〜', '＠', '１', '８', 'Ａ', 'ｂ', 'ｃ', 'Ｄ', 'ｅ', 'ｆ', 'Ｇ', 'ｈ', 'ｉ', 'ｊ', 'Ｋ', 'Ｌ', 'Ｍ', 'ｎ', 'ｏ', 'よ', 'あ', 'そ', 'び', 'に', 'い', 'っ', 'ち', 'ゃ', 'た', 'フ', 'リ', 'ソ', 'ぐ', '忘', '了', '說', 'ㄅ', 'ㄔ', 'ㄐ', ''],
      randomText: ''
    }
  },

  computed: {
    showRandom () {
      return this.textSliceCount < this.content.length
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
            setTimeout(increaseTextSliceCount, this.speed)
          } else {
            setTimeout(() => {
              this.$emit('complete')
            }, this.hold)
          }
        }

        setTimeout(increaseTextSliceCount, this.speed)
      }
    }
  },

  mounted () {
    this.interval = setInterval(this.refreshRandomText, 75)
  },

  beforeDestroy () {
    clearInterval(this.interval)
  },

  methods: {
    refreshRandomText () {
      this.randomText = this.random[Math.floor(Math.random() * this.random.length)]
    }
  }
}
</script>

<style lang="scss">
.random {
  text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 20px #fff;
}
</style>
