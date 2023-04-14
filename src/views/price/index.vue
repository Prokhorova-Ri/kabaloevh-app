<template>
  <div class='price'>
    <h1 class='price-title'>Прайс</h1>
    <WrapperLayout />
    <Button text='Оставить заявку' @onClickButton='test'/>
  </div>
</template>

<script>
import Button from '../../components/Universal/Button.vue'
import WrapperLayout from '../../components/Universal/WrapperLayout.vue'
export default {
  name: 'index',
  components: { WrapperLayout, Button },
  setup() {

    const test = () => {
      console.log('+++++++++++++')
    }

    return { test }
  }
}
</script>

<style scoped></style>
