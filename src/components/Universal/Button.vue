<template>
  <button
    class='button'
    :style="`margin: ${margin}`"
    :type='type'
    @click='onClickButton'
  >
    {{ text }}
  </button>
</template>

<script>
import useSchemaInputs from '../../utils/useSchemaInputs'
export default {
  name: 'Button',
  emits: ['onClick'],
  props: {
    text: {
      type: String,
      default: 'Передайте текст'
    },
    margin: {
      type: String,
      default: '30px 0'
    },
    simple: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'submit'
    }
  },
  setup(props, context) {

    const useSchema = useSchemaInputs()

    const {
      clearAllError
    } = useSchema

    const onClickButton = () => {
      clearAllError()
      context.emit('onClick')
    }

    return { onClickButton }
  }
}
</script>

<style lang='scss' scoped>
@import "./src/assets/sass/variables.scss";
  .button {
    border: none;
    width: 100%;
    padding: 18px 0;
    //background: $btnbg;
    background: #4f9cf9;
    color: white;
    //box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    &-multi {
      &-close {
        background-color: red;
        color: #f0f0f0;
      }
      &-send {
        background-color: green;
        color: #f0f0f0;
      }
    }
  }
.multi-button-wrapper {
  display: grid;
  align-items: center;
  gap: 10px;
}
</style>
