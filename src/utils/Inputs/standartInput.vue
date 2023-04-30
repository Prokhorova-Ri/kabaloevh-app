<template>
  <input
    v-for='(item, index) in schemas'
    :key='index'
    :placeholder='item.placeholder'
    class='input'
  />
<!--  {{schemas}}-->
</template>

<script>
export default {
  name: 'standartInput',
  props: {
    schemas: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang='scss' scoped>
  .input {
    width: 100%;
    padding: 15px 0 15px 15px;
    border-radius: 8px;
    border: none;
    margin: 0 0 5px 0;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
</style>