<template>
  <textarea
    v-model='schema.answer'
    :placeholder='schema.placeholder'
    class='textarea'
  />
  <p v-if='schema.valid' class='textarea-error'>*Поле не должно быть пустым</p>
</template>

<script>
import useSchemaInputs from '../../../utils/useSchemaInputs'
import { watch } from 'vue'

export default {
  name: 'StandartTextArea',
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
.textarea {
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: none;
  margin: 0 0 8px 0;
  font-size: 14px;
  height: 150px;
  &:focus {
    outline: none;
  }
  &-error {
    font-size: 14px;
    margin: 2px 0 10px 0;
    color: #ce4040;
  }
}
</style>