<template>
  <h2 class="home-title">Приветствуем вас в приложении "Мобильный шиномонтаж"!</h2>
  <WrapperLayout
    :class-list-for-height="['home-title', 'button', 'menu']"
    background-color='transparent'
    border-radius='0'
    padding='12px 16px'
  >
    <template #content>
      <div class='home-filter'>
        <p class='home-filter-title'>Расчитать стоимость</p>
        <div class='home-filter-input'>
          <VSelect
            v-model="selectFilter"
            :options='test'
            label="Выберете ваш город" />
        </div>
        <div>
          Рассчет стоимости:
        </div>
      </div>
      <div class='home-offer'>
        <div class='home-offer-item'>
          <p class='home-offer-item-title'>Выезд мастера в удобное время и место</p>
        </div>
        <div class='home-offer-item'>
          <p class='home-offer-item-title'>Самое современное оборудование и материалы</p>
        </div>
        <div class='home-offer-item'>
          <p class='home-offer-item-title'>Качество услуг шиномонтажа без переплат</p>
        </div>
      </div>
    </template>
  </WrapperLayout>
  <Button text='Получить скидку' />
</template>

<script>
import Button from '../components/Universal/Button.vue'
import WrapperLayout from '../components/Universal/WrapperLayout.vue'
import usePriceFilter from '../../src/utils/FiltersCore/index.js'
import { ref } from 'vue'
export default {
  name: 'Home',
  components: { WrapperLayout, Button },
  setup() {
    const filter = usePriceFilter()
    const selectFilter = ref()
    const test = ref(filter.getCitysFromData())
    const getSelectCity = filter.getCityFromCode('nikolskoe')
    selectFilter.value = getSelectCity.name
    return { selectFilter, test }
  }
}
</script>

<style lang="scss" scoped>
.home {
  &-title {
    margin: 20px 0 20px 0;
    text-align: center;
  }
  &-filter {
    padding: 39px 15px;
    background: rgba(131, 134, 214, 0.8);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 0 0 40px 0;
    &-title {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      margin: 0 0 20px 0;
    }
    &-input {
      margin: 0 0 20px 0;
    }
  }
  &-offer {
    display: flex;
    justify-content: space-between;
    //gap: 21px;
    &-item {
      padding: 6px;
      background: #FFFFFF;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      width: 100px;
      &-title {
        font-weight: 600;
        font-size: 12px;
        text-align: center;
      }
    }
  }
}
</style>
