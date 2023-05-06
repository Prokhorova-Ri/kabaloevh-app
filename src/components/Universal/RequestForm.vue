<template>
  <form class='form'>
    <div>
      <slot name='name' />
    </div>
    <div class='form-inputs'>
      <slot name='inputs' />
    </div>
    <div class='form-buttons'>
      <slot name='buttons' />
    </div>
  </form>
</template>

<script>
export default {
  name: 'RequestForm'
}
</script>

<style scoped>

</style>