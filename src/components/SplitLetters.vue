<template>
  <component :is="tag" v-html="html" />
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    spanClass: {
      type: String,
      default: 'active'
    },
    textContent: {
      type: String,
      default: ''
    }
  },

  computed: {
    html () {
      return this.textContent.trim()
        .split('')
        .map((letter, i) => {
          const beginTag = `<span class="${this.spanClass}" style="--i: ${i}">`
          const endTag = '</span>'
          return beginTag + letter + endTag
        })
        .join('')
    }
  }
}
</script>
