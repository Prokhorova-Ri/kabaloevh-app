<template>
  <form @submit.prevent='sendFormReview'>
    <div class='form'>
      <div
        v-for='(item, index) in useSchemaForm'
        :key='index'
      >
        <div
          v-if='item.view.includes("stars")'
          class='form-rating'
        >
          <p>Рейтинг : </p>
          <SimpleRating
            :schema='item'
          />
        </div>
        <Input
          v-if='item.view.includes("input")'
          :schema='item'
          :key='item.key'
        />
        <TextArea
          v-if='item.view.includes("textarea")'
          :schema='item'
          :key='item.key'
        />
      </div>
    </div>
    <Button margin='10px 0 0 0px' text='Отправить' />
  </form>
</template>

<script>
import Button from '../Universal/Button.vue'
import useSchemaInputs from '../../utils/useSchemaInputs.js'
import Input from '../Universal/Inputs/Input.vue'
import TextArea from '../Universal/Inputs/TextArea.vue'
import SimpleRating from '../Universal/Inputs/SimpleRating.vue'
import { reactive, ref } from 'vue'
export default {
  name: 'RequestReviews',
  components: { SimpleRating, Button, Input, TextArea },
  setup() {

    const formValues = reactive({
      name: '',
      comment: '',
      star: 0
    })

    const useSchema = useSchemaInputs()

    const {
      reviewsValueInput,
      checkAllValidateValue
    } = useSchema

    const useSchemaForm = ref(reviewsValueInput)

    const sendFormReview = () => {
      if (checkAllValidateValue('review')) {
        useSchemaForm.value.forEach((item) => {
          formValues[item.key] = item.answer
        })
        console.log('Отправленно', formValues)
      }
    }

    return {
      useSchemaForm,
      sendFormReview
    }
  }
}
</script>

<style scoped>
  .form-rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 20px 0;
  }
</style>