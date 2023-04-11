<template>
  <div>
    TODO LAYOUT PRICE
    <Button text='Оставить заявку' @onClickButton='test'/>
  </div>
</template>

<script>
import Button from '../../components/Universal/Button.vue'
export default {
  name: 'index',
  components: { Button },
  setup() {

    const test = () => {
      console.log('+++++++++++++')
    }

    return { test }
  }
}
</script>

<style scoped></style>
