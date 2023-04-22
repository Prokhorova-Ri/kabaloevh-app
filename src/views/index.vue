<template>
  <div>
    <h2 class="home-title ">Приветствуем вас в приложении "Мобильный шиномонтаж"!</h2>
    <WrapperLayout
      :class-list-for-height="['home-title', 'button', 'menu']"
      background-color='transparent'
      border-radius='0'
    >
      <template #content>
        <div class='home-filter'>
          <p class='home-filter-title'>Расчитать стоимость</p>
          <div class='home-filter-input'>
            <VSelect
              :options='newFilterParamsFromDict.cites'
              :placeholder="select.city"
              @option:selected="setNewParamsFilterForType"
              class='home-filter-select'
            />
            <VSelect
              :options='newFilterParamsFromDict.typeTitle'
              :placeholder="select.service"
              @option:selected="setNewParamsFilterForTyres"
              class='home-filter-select'
            />
            <VSelect
              :options='newFilterParamsFromDict.typeTires'
              :placeholder="select.tyres"
              @option:selected="setNewParamsFilterForPrice"
              class='home-filter-select'
            />
          </div>
          <div>
            Рассчет стоимости: {{ select.price.toLocaleString() }} руб
          </div>
        </div>
        <div class='home-offer'>
          <div class='home-offer-item'>
            <img src='/src/assets/images/icons/check.svg'>
            <p class='home-offer-item-title'>Выезд мастера в удобное время и место.</p>
          </div>
          <div class='home-offer-item'>
            <img src='/src/assets/images/icons/check.svg'>
            <p class='home-offer-item-title'>Самое современное оборудование и материалы.</p>
          </div>
          <div class='home-offer-item'>
            <img src='/src/assets/images/icons/check.svg'>
            <p class='home-offer-item-title'>Качество услуг шиномонтажа без переплат.</p>
          </div>
        </div>
      </template>
    </WrapperLayout>
    <Button text='Получить скидку' />
  </div>
</template>

<script>
import Button from '../components/Universal/Button.vue'
import WrapperLayout from '../components/Universal/WrapperLayout.vue'
import usePriceFilter from '../../src/utils/FiltersCore/index.js'
import { onMounted } from 'vue'
export default {
  name: 'Home',
  components: { WrapperLayout, Button },
  setup() {
    const filter = usePriceFilter()
    const {
      newFilterParamsFromDict,
      select,
      unMountedFormationFiltersParams,
      setNewParamsFilterForType,
      setNewParamsFilterForTyres,
      setNewParamsFilterForPrice
    } = filter

    onMounted(() => {
      unMountedFormationFiltersParams()
    })

    return {
      select,
      newFilterParamsFromDict,
      setNewParamsFilterForType,
      setNewParamsFilterForPrice,
      setNewParamsFilterForTyres
    }
  }
}
</script>

<style lang="scss">
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
    &-select {
      margin: 0 0 10px 0;
    }
  }
  &-offer {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    padding: 11px 15px;
    &-item {
      display: grid;
      align-items: center;
      grid-template-columns: 40px 1fr;
      margin: 0 0 11px 0;
      gap: 16px;
      width: 100%;
      &:last-child {
        margin: 0 0 0 0;
      }
      &-title {
        font-weight: 600;
        font-size: 16px;
        text-align: left;
        color: #1C1E58;
      }
    }
  }
}

</style>
