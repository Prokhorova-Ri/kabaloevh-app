<template>
  <section v-if='item' class='card-review'>
    <div class='card-review-stars'>
      <img
        v-for='(index) in item.stars.user'
        :key='index'
        src='/src/assets/images/icons/star-full.svg'
      />
      <img
        v-for='(index) in starDefault'
        :key='index'
        src='/src/assets/images/icons/star.svg'>
    </div>
    <p v-if='item && item.name' class='card-review-name'>{{ item.name }}</p>
    <p v-if='item && item.date' class='card-review-date'>{{ item.date }}</p>
    <p v-if='item && item.text' class='card-review-text'>{{ item.text }}</p>
  </section>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Review',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    return {
      starDefault: props.item?.stars?.max - props.item?.stars?.user
    }
  }
}
</script>

<style lang='scss' scoped>
  .card-review {
    border-radius: 10px;
    padding: 11px 11px 11px 22px;
    background: rgba(255, 255, 255, 0.8);
    position: relative;
    margin: 0 0 23px 0;
    &:last-child {
      margin: 0 0 0 0;
    }
    &-stars {
      position: absolute;
      right: 15px;
      top: 11px;
      display: flex;
      gap: 5px;
    }
    &-name {
      font-weight: 600;
      font-size: 15px;
    }
    &-date {
      margin: 0 0 12px 0;
      font-weight: 400;
      font-size: 12px;
    }
    &-text {
      font-weight: 500;
      font-size: 14px;
    }
  }
</style>
