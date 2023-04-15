<template>
  <h1 class='reviews-title'>Отзывы</h1>
  <WrapperLayout
    :class-list-for-height="['reviews-title', 'button', 'menu']"
    background-color='transparent'
    border-radius='10px'
    padding='12px 16px'
  >
    <template #content>
      TODO Layout reviews
    </template>
  </WrapperLayout>
  <Button text='Отправить отзыв' />
</template>

<script>
import Button from '../../components/Universal/Button.vue'
import WrapperLayout from '../../components/Universal/WrapperLayout.vue'
export default {
  name: 'index',
  components: { WrapperLayout, Button },
}
</script>

<style lang='scss' scoped>
@import "./src/assets/sass/variables.scss";
  .reviews {
    &-title {
      margin: 20px 0;
      text-align: center;
    }
  }
</style>
