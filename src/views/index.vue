<template>
  <div>
    <h2 class="home-title main-title">Главная</h2>
    <div class='main-layout'>
      <WrapperLayout
        :class-list-for-height="['home-title', 'button', 'menu']"
      >
        <template #content>
          <div class='home-filter main-layout-parent'>
            <p class='home-filter-title'>Расчитать стоимость</p>
            <div class='home-filter-input'>
              <VSelect
                :options='newFilterParamsFromDict.cites'
                :placeholder="select.city.name"
                @option:selected="setNewParamsFilterForType"
                class='home-filter-select'
              />
              <VSelect
                :options='newFilterParamsFromDict.typeTitle'
                :placeholder="select.service.name"
                @option:selected="setNewParamsFilterForTyres"
                class='home-filter-select'
              />
              <VSelect
                :options='newFilterParamsFromDict.typeTires'
                :placeholder="select.tyres.name"
                @option:selected="setNewParamsFilterForPrice"
                class='home-filter-select'
              />
            </div>
            <div>
              Рассчет стоимости: {{ select.price.name.toLocaleString() }} руб
            </div>
          </div>
          <div class='home-offer main-layout-parent'>
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
      <Button margin='30px 0 35px 0' :simple='isForm' text='Получить скидку' @onClick='openFormRequest(true)'/>
    </div>
    <LayoutToTop @updateActive='openFormRequest' :active='isForm'>
      <template #content>
        <WrapperLayout
          :class-list-for-height="['select-params', -'layout-to-top-close']"
          background-color='white'
          padding='20px 15px 10px 15px'
          border-radius='20px'
        >
          <template #content>
            <div style='margin: 0 0 20px 0'>
              <SelectParamsLayout :select-filters-list='select'/>
            </div>
            <FormRequestApplicationSale />
          </template>
        </WrapperLayout>
      </template>
    </LayoutToTop>
  </div>
</template>

<script>
import Button from '../components/Universal/Button.vue'
import WrapperLayout from '../components/Universal/WrapperLayout.vue'
import SelectParamsLayout from '../components/SelectParamsLayout/index.vue'
import usePriceFilter from '../../src/utils/FiltersCore/index.js'
import StandartInput from '../components/Universal/Inputs/Input.vue'
import { onMounted, ref } from 'vue'
import LayoutToTop from '../components/Universal/LayoutToTop.vue'
import FormRequestApplicationSale from '../components/Forms/RequestApplication.vue'
export default {
  name: 'Home',
  components: { FormRequestApplicationSale, LayoutToTop, WrapperLayout, Button,  StandartInput, SelectParamsLayout },
  setup() {
    const isForm = ref(false)
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

    const openFormRequest = (status) => {
      // ФОРМИЮ СПИСОК ВЫБРАННЫХ В МАССИВ
      console.log('openFormRequest')
      isForm.value = status
    }

    return {
      select,
      newFilterParamsFromDict,
      isForm,
      setNewParamsFilterForType,
      setNewParamsFilterForPrice,
      setNewParamsFilterForTyres,
      openFormRequest
    }
  }
}
</script>

<style lang="scss">
.home {
  &-title {
    margin: 20px 0 20px 0;
    text-align: center;
    color: white;
  }
  &-filter {
    &-title {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      margin: 0 0 20px 0;
    }
    &-select {
      margin: 0 0 10px 0;
      &:last-child {
        margin: 0 0 20px 0;
      }
    }
  }
  &-offer {
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    height: 207px;
    justify-content: inherit;
    gap: 15px;
    &-item {
      display: grid;
      align-items: center;
      grid-template-columns: 40px 1fr;
      //margin: 0 0 11px 0;
      gap: 16px;
      width: 100%;
      &:last-child {
        margin: 0 0 0 0;
      }
      &-title {
        font-weight: 600;
        font-size: 16px;
        text-align: left;
        color: black;
      }
    }
  }
}

</style>
