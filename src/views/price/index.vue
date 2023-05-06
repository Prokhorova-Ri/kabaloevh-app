<template>
  <div class='price'>
    <h1 class='price-title'>Прайс</h1>
    <WrapperLayout
      :class-list-for-height="['price-title', 'button', 'menu']"
      background-color='transparent'
      border-radius='10px'
      padding='15px 16px'
    >
      <template #content>
        <div
          v-for='item in dictPrice'
          :key='item.id'
          class='price-city'>
          <p class='price-city-name'>{{ item.city }}</p>
          <div
            v-for='(type, index) in item.type'
            :key='index'
            class='price-city-type'>
            <p class='price-city-type-title'>{{ type.title }}</p>
            <div
              v-for='(tires, indexTires) in type.tires'
              :key='indexTires'
            >
              <div class='price-city-type-tires-layout'>
                <p class='price-city-type-tires-item'>{{ tires.size }}</p>
                <span class='price-city-type-tires-dot'>........................................</span>
                <p class='price-city-type-tires-item'>{{ tires.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </WrapperLayout>
    <Button text='Оставить заявку'  @onClick='openFormRequest(true)' />
    <LayoutToTop @updateActive='openFormRequest' :active='isForm'>
      <template #content>
        <WrapperLayout
          :class-list-for-height="['form', -'layout-to-top-close']"
          background-color='white'
          border-radius='0'
          padding='10px 15px'
        >
          <template #content>
            <RequestForm>
              <template #name>
                <h2>name</h2>
              </template>
              <template #inputs>
                <StandartInput :schemas='valueFromRequest'/>
              </template>
              <template #buttons>
                <Button :simple='isForm' text='Получить скидку'/>
              </template>
            </RequestForm>
          </template>
        </WrapperLayout>
      </template>
    </LayoutToTop>
  </div>
</template>

<script>
import Button from '../../components/Universal/Button.vue'
import WrapperLayout from '../../components/Universal/WrapperLayout.vue'
import usePriceFilter from '../../../src/utils/FiltersCore/index.js'
import { valueFromRequest } from '../../utils/Inputs/dictInputs'
import StandartInput from '../../../src/utils/inputs/standartInput.vue'

import LayoutToTop from '../../components/Universal/LayoutToTop.vue'
import RequestForm from '../../components/Universal/RequestForm.vue'
import { ref } from 'vue'
export default {
  name: 'index',
  components: { WrapperLayout, Button, LayoutToTop, RequestForm, StandartInput },
  setup() {
    const isForm = ref(false)
    const openFormRequest = (status) => {
      // ФОРМИЮ СПИСОК ВЫБРАННЫХ В МАССИВ
      console.log('openFormRequest')
      isForm.value = status
    }
    const { dictPrice } = usePriceFilter()
    return {
      valueFromRequest,
      dictPrice,
      openFormRequest,
      isForm
    }

  }
}
</script>

<style lang='scss' scoped>
@import "./src/assets/sass/variables.scss";
  .price {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &-title {
      margin: 20px 0;
      text-align: center;
    }
    &-city {
      margin: 0 0 31px 0;
      &:last-child {
        margin: 0 0 0 0;
      }
      &-name {
        font-weight: 700;
        font-size: 18px;
        margin: 0 0 14px 0;
      }
      &-type {
        &-title {
          font-weight: 600;
          font-size: 16px;
          margin: 0 0 10px 0;
        }
        &-tires {
          &-layout {
            display: flex;
            justify-content: space-between;
            margin: 0 0 9px 0;
            &:last-child {
              margin: 0 0 0 0;
            }
          }
          &-item {
            font-weight: 600;
            font-size: 14px;
            &:last-child {
              margin: 0 0 0 0;
            }
          }
        }
      }
    }
  }
</style>
