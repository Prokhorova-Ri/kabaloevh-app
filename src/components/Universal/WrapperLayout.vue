<template>
  <div
    class='wrapper-layout'
    :style="
    `height: ${height}px;
    border-radius: ${borderRadius};
    background-color: ${backgroundColor};
    padding: ${padding};
    display: ${display};
    justify-content: ${justifyContent}
    `
    "
  >
    <slot name='content' />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  name: 'WrapperLayout',
  props: {
    classListForHeight: {
      type: Array,
      default: () => ([])
    },
    borderRadius: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    padding: {
      type: String,
      default: ''
    },
    display: {
      type: String,
      default: 'block'
    },
    justifyContent: {
      type: String,
      default: 'space-around'
    }
  },
  emits: ['updateHeight'],
  setup (props, context) {
    const height = ref(0)
    const innerHeight = ref(window.innerHeight)

    const createSummHeightElements = () => {
      let elements = []
      props.classListForHeight.forEach((item) => {
        if (typeof item === 'number') {
          elements = [...elements, item]
        } else {
        const element = document.querySelector(`.${item}`)
        const styles = getComputedStyle(element);
        elements = [
          ...elements,
          element.offsetHeight,
          parseInt(styles.marginTop),
          parseInt(styles.marginBottom)
        ]
        }
      })
      const sumOffsetHeight = elements.reduce((accumulator, currentValue) => accumulator + currentValue);
      height.value = innerHeight.value - sumOffsetHeight
      context.emit('updateHeight', height.value)
    }

    onMounted(() => {
      createSummHeightElements()
    })

    return { height }
  }
})
</script>

<style lang='scss' scoped>
  .wrapper-layout {
    min-height: 95%;
    overflow-y: scroll;
    flex-direction: column;
  }
</style>
