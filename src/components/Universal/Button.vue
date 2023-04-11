<template>
  <button @click='onClick' class='button'>
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
  .button {
    width: 100%;
    padding: 13px 0;
    background: #E5DDC9;
    border: 2px solid #FF7A00;
    border-radius: 10px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
</style>
