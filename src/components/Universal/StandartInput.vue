<template>
  <input
    v-model='schema.answer'
    :placeholder='schema.placeholder'
    :type='schema.type'
    class='input'
  />
</template>

<script>
export default {
  name: 'standartInput',
  props: {
    schema: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang='scss' scoped>
  .input {
    width: 100%;
    padding: 15px 0 15px 15px;
    border-radius: 10px;
    border: none;
    margin: 0 0 8px 0;
    font-size: 14px;
    &:focus {
      outline: none;
    }
  }
</style>