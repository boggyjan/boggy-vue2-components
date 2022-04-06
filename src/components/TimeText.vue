<template>
  <component :is="tag">
    <!--
      剛剛
      5分鐘前
      10分鐘前
      15分鐘前
      20分鐘前
      25分鐘前
      30分鐘前
      同日：顯示時間時間 (17:14)
      非同日：顯示日期 (2020/12/12)
    -->
    {{ displayText }}
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    justNow: {
      type: String,
      default: 'Now'
    },
    minutesLater: {
      type: String,
      default: '%{n} Minutes later'
    },
    timestamp: {
      type: Number,
      default: 0
    }
  },

  computed: {
    displayText () {
      return this.time(this.timestamp)
    }
  },

  methods: {
    time (timestamp) {
      const now = new Date()
      const date = new Date(timestamp)
      const timeDiff = now.getTime() - timestamp

      // 小於30分鐘的話，顯示為5n分鐘前
      if (timeDiff < 1800000 && timeDiff >= 0) {
        // 5(min) multiplier
        const fiveMinMultiplier = Math.floor(timeDiff / 300000)

        if (fiveMinMultiplier < 1) {
          // 剛剛
          return this.justNow
        } else {
          // n分鐘前
          const text = this.minutesLater.replace(/%\{n\}/g, 5 * fiveMinMultiplier)
          return text
        }
      } else if (this.isSameDate(now, timestamp)) {
        // 大於等於30分，並且為同一天，顯示時間
        return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
      } else {
        // 非同一天顯示日期
        return `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`
      }
    },
    isSameDate (timestempA, timestempB) {
      const dateA = new Date(timestempA)
      const dateB = new Date(timestempB)
      return dateA.getFullYear() === dateB.getFullYear() &&
        dateA.getMonth() === dateB.getMonth() &&
        dateA.getDate() === dateB.getDate()
    }
  }
}
</script>
