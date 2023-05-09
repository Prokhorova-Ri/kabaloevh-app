<template>
  <div>
    <img
      v-for='(index) in starsCount'
      :key='index'
      src='src/assets/images/icons/star.png'
      @click.stop='setStarsAnswer(index)'
    />
    <img
      v-for='(index) in selectStarCount'
      :key='index'
      src='src/assets/images/icons/star-full.png'
      @click.stop='setStarsAnswer(index)'
    />
<!--    <img-->
<!--      v-for='(index) in starDefault'-->
<!--      :key='index'-->
<!--      src='src/assets/images/icons/star.png'>-->
  </div>
<!--  <div class='simple-rating'>-->
<!--   <div class='simple-rating__items'>-->
<!--     <div v-for='(item, index) in starView' :key='index'>-->
<!--       <input-->
<!--         :id='`simple-rating-${item}`'-->
<!--         type='radio'-->
<!--         :value='item'-->
<!--         class='simple-rating__item'-->
<!--         name='simple-rating'-->
<!--       >-->
<!--       <label-->
<!--         :for='`simple-rating-${item}`'-->
<!--         class='simple-rating__label'-->
<!--       >-->
<!--       </label>-->
<!--     </div>-->
<!--   </div>-->
<!--  </div>-->
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

    const starsCount = ref(props?.schema?.max)
    const selectStarCount = ref(props?.schema?.answer)

    const setStarsAnswer = (index) => {
      selectStarCount.value = index
      props.schema.answer = index
      console.log('starsCount', starsCount.value)
    }

    console.log('starsCount', starsCount.value)

    return {
      starsCount,
      selectStarCount,
      setStarsAnswer
    }
  }
}
</script>

<style lang='scss' scoped>
  //.simple-rating {
  //  position: relative;
  //  font-size: 33px;
  //  display: inline-block;
  //  &:before {
  //    content: "★★★★★";
  //    display: block;
  //  }
  //  &__items {
  //    position: absolute;
  //    width: 100%;
  //    height: 100%;
  //    top: 0;
  //    left: 0;
  //    display: flex;
  //    flex-direction: row-reverse;
  //    overflow: hidden;
  //  }
  //  &__item {
  //    position: absolute;
  //    width: 0;
  //    height: 0;
  //    top: 0;
  //    left: 0;
  //    opacity: 0;
  //    visibility: hidden;
  //  }
  //  &__label {
  //    flex: 0 0 20%;
  //    height: 100%;
  //    cursor: pointer;
  //    color: white;
  //    &:before {
  //      content: "★";
  //      display: block;
  //      transition: color 0.3s ease 0s;
  //    }
  //  }
  //}
  //.simple-rating__item:checked {
  //  color: #F2CC6A;
  //}
  //.simple-rating__item:checked ~ .simple-rating__label {
  //  color: #F2CC6A;
  //}
  //.simple-rating:hover,
  //.simple-rating:hover ~ .simple-rating__label,
  //.simple-rating:checked ~ .simple-rating__label:hover {
  //  color: red;
  //}
</style>