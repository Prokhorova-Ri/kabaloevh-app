<template>
  <div style='display: flex; gap: 9px; position: relative'>
    <div
      ref='listStar'
      v-for='(item) in schema.max'
      :key='item'
      class='simple-rating__simple'
      @click='setStarCount(item)'
    >
      <img src='src/assets/images/icons/star.png' />
    </div>
  </div>
</template>

<script>
import Button from '../Button.vue'
import { ref } from 'vue'
export default {
  name: 'SimpleRating',
  components: { Button },
  props: {
    schema: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const listStar = ref()

    const setStarCount = (count) => {
      listStar.value.forEach((item, index) => {
        if (count > index) {
          item.classList.add('simple-rating__full')
        } else {
          item.classList.remove('simple-rating__full')
        }
      })
      props.schema.answer = count || 0
      console.log('props.schema', props.schema)
    }

    return {
      listStar,
      setStarCount
    }
  }
}
</script>

<style lang='scss'>
  .simple-rating {
    &__full {
      position: relative;
      animation: active-bg-in .7s forwards;
      &::after {
        content: url("src/assets/images/icons/star-full.png");
        position: absolute;
        left: 0;
        right: 0;
      }
    }
  }

  @keyframes active-bg-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>