<template>
  <h2 class='home'>Приветствуем вас в приложении "Мобильный шиномонтаж"!</h2>
  <form class='home_form'>
    <h2 class='home_form__title'>Расчитать стоимость</h2>
  </form>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang='scss' scoped>
.home {
  margin: 0 auto;
  padding: 40px 17px 0 17px;
  display: flex;
  text-align: center;
  &_form {
    background-color: rgba(50, 149, 107, 0.8);
    border-radius: 10px;
    height: 300px;
    width: 340px;
  }
}

</style>