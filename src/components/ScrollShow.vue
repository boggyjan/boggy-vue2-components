<template>
  <component
    :is="tag"
    ref="anchorPoint"
    :style="active ? '' : 'visibility: hidden'"
    :class="active ? activeClass : ''"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },

    activeClass: {
      type: String,
      default: 'active'
    },

    once: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      active: false,
      observer: null
    }
  },

  mounted () {
    this.observer = new IntersectionObserver((entries) => {
      const active = entries[0].isIntersecting === true

      if (this.active !== active) {
        this.active = active

        if (active) {
          this.$emit('show')

          if (this.once) {
            this.destroyObserver()
          }
        }
      }
    })

    this.observer.observe(this.$refs.anchorPoint)
  },

  beforeDestroy () {
    this.destroyObserver()
  },

  methods: {
    destroyObserver () {
      if (this.observer) {
        this.observer.disconnect()
        delete this.observer
      }
    }
  }
}
</script>
