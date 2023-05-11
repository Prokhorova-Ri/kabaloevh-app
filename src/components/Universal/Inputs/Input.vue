<template>
  <input
    v-model='schema.answer'
    :placeholder='schema.placeholder'
    :type='schema.type'
    class='input'
  />
  <p v-if='schema.valid' class='input-error'>*Поле не должно быть пустым</p>
</template>

<script>
import { watch } from 'vue'
import useSchemaInputs from '../../../utils/useSchemaInputs'
export default {
  name: 'standartInput',
  props: {
    schema: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {

    const useSchema = useSchemaInputs()
    const { checkInputValidate } = useSchema

    watch(() => props.schema, (value) => {
      checkInputValidate(value)
    }, { deep: true })

    return {}
  }
}
</script>

<style lang='scss' scoped>
  .input {
    width: 100%;
    padding: 20px 0 20px 15px;
    border-radius: 10px;
    border: none;
    margin: 0 0 8px 0;
    font-size: 16px;
    &:focus {
      outline: none;
    }
    &-error {
      font-size: 15px;
      margin: 2px 0 10px 10px;
      color: #ce4040;
    }
  }
</style>