<template>
  <div class="toastItem">
    <div class="toastItem__body">
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {
          text: 'no content'
        }
      }
    },

    countdown: {
      type: Number,
      default: 3000
    }
  },

  data () {
    return {
      interval: null
    }
  },

  beforeMount () {
    clearInterval(this.interval)
  },

  mounted () {
    this.interval = setTimeout(() => {
      this.$emit('complete', this.item)
    }, this.countdown)
  }
}
</script>

<style lang="scss">
.toastItem {
  margin-bottom: 10px;
  cursor: pointer;

  &__body {
    display: inline-block;
    padding: 8px 30px;
    background: #ca9;
    border-radius: 3px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    color: #fff;
    width: fit-content;
  }
}
</style>
