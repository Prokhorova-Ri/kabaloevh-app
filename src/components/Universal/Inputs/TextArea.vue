<template>
  <textarea
    v-model='schema.answer'
    :placeholder='schema.placeholder'
    class='textarea'
  />
</template>

<script>
export default {
  name: 'StandartTextArea',
  props: {
    schema: {
      type: Object,
      default: () => {}
    }
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
}
</style>