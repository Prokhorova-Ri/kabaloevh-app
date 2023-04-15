<template>
  <button
    class='button'
    :style="`margin: ${margin}`"
    @click='onClick'
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  emits: ['onClickButton'],
  props: {
    text: {
      type: String,
      default: 'Передайте текст'
    },
    margin: {
      type: String,
      default: '30px 0'
    }
  },
  setup(props, context) {

    const onClick = () => {
      context.emit('onClickButton')
    }

    return { onClick }
  }
}
</script>

<style lang='scss' scoped>
@import "./src/assets/sass/variables.scss";
  .button {
    border: none;
    width: 100%;
    padding: 13px 0;
    background: $btnbg;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
</style>
