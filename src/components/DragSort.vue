<template>
  <component :is="tag">
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
    list: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      dragIdx: null
    }
  },

  mounted () {
    const slots = this.$scopedSlots.default()

    slots.forEach((slot) => {
      slot.elm.draggable = true
      slot.elm.addEventListener('dragstart', this.dragstart)
      slot.elm.addEventListener('dragover', this.dragover)
      slot.elm.addEventListener('drop', this.drop)
      slot.elm.addEventListener('dragend', this.drop)
    })
  },

  methods: {
    dragstart ($event) {
      const ele = $event.currentTarget
      const idx = [...ele.parentNode.children].indexOf(ele)

      this.dragIdx = idx

      // allow drop
      $event.dataTransfer.setData('text/plain', null)
    },

    dragover ($event) {
      $event.preventDefault()

      const ele = $event.currentTarget
      const idx = [...ele.parentNode.children].indexOf(ele)

      const list = this.list

      if (!Number.isInteger(this.dragIdx) || this.dragIdx === idx) {
        return
      }

      // swap
      [list[this.dragIdx], list[idx]] = [list[idx], list[this.dragIdx]]
      this.dragIdx = idx
      list.push()
    },

    drop ($event) {
      $event.preventDefault()

      this.dragIdx = null
    }
  }
}
</script>
