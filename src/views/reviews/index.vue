<template>
  <h1 class='reviews-title main-title'>Отзывы</h1>
  <div class='main-layout'>
    <WrapperLayout
      :class-list-for-height="['reviews-title', 'button', 'menu']"
      background-color='transparent'
      border-radius='10px'
      padding='12px 16px'
    >
      <template #content>
        <Card v-for='review in reviews' :key='review.id' :item='review'/>
      </template>
    </WrapperLayout>
    <Button text='Отправить отзыв' @onClick='openFormRequest(true)'/>
  </div>
  <LayoutToTop @updateActive='openFormRequest' :active='isForm'>
    <template #content>
      <WrapperLayout
        :class-list-for-height="['form', -'layout-to-top-close']"
        background-color='white'
        border-radius='0'
        padding='10px 15px'
      >
        <template #content>
          <FormRequestReview />
        </template>
      </WrapperLayout>
    </template>
  </LayoutToTop>
</template>

<script>
import Button from '../../components/Universal/Button.vue'
import WrapperLayout from '../../components/Universal/WrapperLayout.vue'
import Card from '../../components/Cards/Review.vue'
import StandartInput from '../../components/Universal/Inputs/Input.vue'
import LayoutToTop from '../../components/Universal/LayoutToTop.vue'
import FormRequestReview from '../../components/Forms/RequestReviews.vue'
import { reactive, ref } from 'vue'
export default {
  name: 'index',
  components: { FormRequestReview, StandartInput, LayoutToTop, WrapperLayout, Button, Card },
  setup () {
    const isForm = ref(false)
    const reviews = reactive([
      { id: 0, name: 'Олег П.', date: '04.03.2023', stars: { user: 3, max: 5 }, text: 'Ну я даже хуй знает, такое себе. 0 из 10' },
      { id: 1, name: 'Илья Лесунов', date: '02.04.2023', stars: { user: 5, max: 5 }, text: 'Порядочные люди работают. Забыл взять сдачи и уехал, не маленькая сумма. Позже приехал, дали сдачи и извинились даже. Последние 10 лет только здесь обслуживаюсь.' },
      { id: 2, name: 'Вася Пупкин', date: '14.04.2023', stars: { user: 1, max: 5 }, text: 'Все очень плохо. За работу берут хорошие деньги а результат нулевой . Раныше хорошо делали , сейчас ооочень плохо . Наверно зажрались . Общем не буду к ним ездить' },
      { id: 3, name: 'Вася Пупкин', date: '14.04.2023', stars: { user: 1, max: 5 }, text: 'Все очень плохо. За работу берут хорошие деньги а результат нулевой . Раныше хорошо делали , сейчас ооочень плохо . Наверно зажрались . Общем не буду к ним ездить' },
      { id: 4, name: 'Вася Пупкин', date: '14.04.2023', stars: { user: 1, max: 5 }, text: 'Все очень плохо. За работу берут хорошие деньги а результат нулевой . Раныше хорошо делали , сейчас ооочень плохо . Наверно зажрались . Общем не буду к ним ездить' },
      { id: 5, name: 'Вася Пупкин', date: '14.04.2023', stars: { user: 1, max: 5 }, text: 'Все очень плохо. За работу берут хорошие деньги а результат нулевой . Раныше хорошо делали , сейчас ооочень плохо . Наверно зажрались . Общем не буду к ним ездить' },
    ])

    const openFormRequest = (status) => {
      // ФОРМИЮ СПИСОК ВЫБРАННЫХ В МАССИВ
      console.log('openFormRequest')
      isForm.value = status
    }

    return { reviews, isForm, openFormRequest }
  }
}
</script>

<style lang='scss' scoped>
@import "./src/assets/sass/variables.scss";
  .reviews {
    &-title {
      margin: 20px 0;
      text-align: center;
      color: white;
    }
  }
</style>
