<template>
  <div class='form-review-item'>
    <input
      v-for='(index) in schema.max'
      :key='index'
      type="button"
      value="Start machine"
      accesskey="s"
    />
<!--    <img-->
<!--      v-for='(index) in schema.answer.user'-->
<!--      :key='index'-->
<!--      src='src/assets/images/icons/star-full.svg'-->
<!--    />-->
<!--    <img-->
<!--      v-for='(index) in schema.max'-->
<!--      :key='index'-->
<!--      src='src/assets/images/icons/star.svg'>-->
  </div>
</template>

<script>
export default {
  name: 'ReviewStars',
  props: {
    schema: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .form-review-item {
    display: flex;
    justify-content: space-evenly;
  }
</style>