<template>
  <div class='price'>
    <h1 class='price-title'>Прайс</h1>
    <WrapperLayout
      :class-list-for-height="['price-title', 'button', 'menu']"
      background-color='#32956B'
      border-radius='10px'
      padding='15px 16px'
      display='flex'
    >
      <template #content>
        <div
          v-for='item in dict'
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
    <Button text='Оставить заявку' />
  </div>
</template>

<script>
import Button from '../../components/Universal/Button.vue'
import WrapperLayout from '../../components/Universal/WrapperLayout.vue'
import { reactive } from 'vue'
export default {
  name: 'index',
  components: { WrapperLayout, Button },
  setup() {

    const dict = reactive([
      {
        id: 0,
        city: 'Цены по городу Никольское:',
        type: [
          {
            title: 'Сезонная замена 4x колес',
            tires: [
              { size: 'R-13', price: '1000' },
              { size: 'R-14', price: '1200' },
              { size: 'R-15', price: '1300' },
              { size: 'R-16', price: '1400' },
              { size: 'R-17', price: '1800' },
              { size: 'R-18', price: '1900' },
              { size: 'R-19', price: '2000' },
              { size: 'R-20', price: '2200' },
            ]
          }
        ]
      },
      {
        id: 1,
        city: 'Цены по Лен.Области:',
        type: [
          {
            title: 'Сезонная замена 4x колес',
            tires: [
              { size: 'R-13', price: '1500' },
              { size: 'R-14', price: '1700' },
              { size: 'R-15', price: '1800' },
              { size: 'R-16', price: '1900' },
              { size: 'R-17', price: '2200' },
              { size: 'R-18', price: '2400' },
              { size: 'R-19', price: '2500' },
              { size: 'R-20', price: '2700' },
            ]
          }
        ]
      }
    ])

    return { dict }
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
