<template>
  <div class='select-params main-layout-parent'>
      <h2 class='select-params-title'>Заявка на услугу:</h2>
      <div
        v-for='(item, index) in Object.values(selectFiltersList)'
        :key='index'
        class='select-params-wrapper'
      >
        <p v-if='item.code === "price"' style='text-decoration: line-through'>Цена без скидки:</p>
        <p v-else class='select-params-price' >{{ item.title }}:</p>
        <span v-if='item.code === "price"' style='text-decoration: line-through'>{{ item.name }}</span>
        <span v-else>{{ item.name }}</span>
      </div>
    <div
      class='select-params-wrapper'
    >
      <p class='select-params-price select-params-price__sale'>Цена со скидкой:</p>
      <span class='select-params-price__sale'>{{ discount }}</span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'index',
  props: {
    selectFiltersList: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    // ФОРМИРУЕМ ЦЕНУ С УЧЕТОМ СКИДКИ
    return {
      discount: computed(() => {
        const discount = props.selectFiltersList.price.name * 0.1;
        const discountedPrice = props.selectFiltersList.price.name - discount;
        return discountedPrice
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  .select-params {
    //padding: 15px 10px 15px 10px;
    //background: rgba(131, 134, 214, 0.8);
    //box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin: 20px 0 10px 0;
    &-wrapper {
      display: flex;
      justify-content: space-between;
      margin: 0 0 7px 0;
      &:last-child {
        margin: 0 0 0 0;
      }
    }
    &-price {
      &__sale {
        color: #ce4040;
      }
    }
    &-title {
      font-size: 18px;
      margin: 0 0 20px 0;
    }
  }
</style>