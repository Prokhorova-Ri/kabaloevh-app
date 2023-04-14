<template>
  <div class='price'>
    <h1 class='price-title'>Прайс</h1>
    <WrapperLayout
      :class-list-for-height="['price-title', 'button', 'menu']"
      background-color='#32956B'
      border-radius='10px'
      padding='12px 16px'
    >
      <template #content>
        TODO Layout price
      </template>
    </WrapperLayout>
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

<style lang='scss' scoped>
  .price {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &-title {
      margin: 20px 0;
      text-align: center;
    }
  }
</style>
