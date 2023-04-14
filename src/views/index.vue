<template>
  <h2 class="home-title">Приветствуем вас в приложении "Мобильный шиномонтаж"!</h2>
  <WrapperLayout
    :class-list-for-height="['home-title', 'button', 'menu']"
    background-color='#32956B'
    border-radius='10px'
    padding='12px 16px'
  >
    <template #content>
      TODO Layout main
    </template>
  </WrapperLayout>
  <Button text='Получить скидку' />
</template>

<script>
import Button from '../components/Universal/Button.vue'
import WrapperLayout from '../components/Universal/WrapperLayout.vue'
export default {
  name: 'Home',
  components: { WrapperLayout, Button },
}
</script>

<style lang="scss" scoped>
.home {
  &-title {
    margin: 20px 0 20px 0;
    text-align: center;
  }
  //margin: 0 auto;
  //padding: 40px 17px 0 17px;
  //display: flex;
  //text-align: center;
  //&_form {
  //  background-color: rgba(50, 149, 107, 0.8);
  //  border-radius: 10px;
  //  height: 300px;
  //  width: 340px;
  //}
}
</style>
