<template>
  <div
    class="three-d-box"
    :style="`--l: ${length}; --w: ${width}; --h: ${height};`"
  >
    <div class="shape-group box">
      <div class="shape left">
        <slot name="left" />
      </div>
      <div class="shape right">
        <slot name="right" />
      </div>
      <div class="shape top">
        <slot name="top" />
        <div class="shape back">
          <slot name="back" />
        </div>
      </div>
      <div class="shape bottom">
        <slot name="bottom" />
      </div>
      <div class="shape front">
        <slot name="front" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100px'
    },
    height: {
      type: String,
      default: '100px'
    },
    length: {
      type: String,
      default: '100px'
    }
  }
}
</script>

<style lang="scss" scoped>
.three-d-box {
  width: var(--w);
  height: var(--h);
  box-sizing: border-box;

  // have to set perspective to parent container
  // ex: perspective: 1000px;
  transform-style: preserve-3d;
  transform-origin: center center calc(var(--w) * -0.5);

  .shape-group,
  .shape {
    transform-style: preserve-3d;
    box-sizing: border-box;
  }

  .shape-group {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .shape {
    position: absolute;
    left: 0;
    top: 0;
  }

  .box .front,
  .box .back {
    width: var(--w);
    height: var(--h);
  }

  .box .front {
    position: static;
  }

  .box .left,
  .box .right {
    width: var(--l);
    height: var(--h);
  }

  .box .top,
  .box .bottom {
    width: var(--w);
    height: var(--l);
  }

  .box .left {
    transform-origin: left center;
    transform: rotateY(90deg);

    & > * {
      transform: rotateY(180deg);
    }
  }

  .box .right {
    transform-origin: right center;
    transform: rotateY(-90deg);

    & > * {
      transform: rotateY(180deg);
    }
  }

  .box .top {
    transform-origin: center top;
    transform: rotateX(-90deg);

    & > * {
      transform: rotateX(180deg);
    }

    .back {
      transform-origin: top center;
      transform: rotateX(90deg) rotateY(180deg);
      top: 100%;
    }
  }

  .box .bottom {
    transform-origin: center top;
    transform: translateY(var(--h)) rotateX(-90deg);
  }
}
</style>
