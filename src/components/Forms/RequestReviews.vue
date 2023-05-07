<template>
  <form @submit.prevent='sendFormReviews'>
    <div class='form'>
      <div
        v-for='(item, index) in valueFormRequestReviews'
        :key='index'
      >
        <Input
          v-if='item.view.includes("input")'
          :schema='item'
        />
        <TextArea
          v-if='item.view.includes("textarea")'
          :schema='item'
        />
      </div>
    </div>
    <Button margin='15px 0' text='Отправить' />
  </form>
</template>

<script>
import Button from '../Universal/Button.vue'
import { valueFormRequestReviews } from '../../utils/SchemaInputs/dicts.js'
import Input from '../../components/Universal/StandartInput.vue'
import TextArea from '../../components/Universal/StandartTextArea.vue'
import { reactive } from 'vue'
export default {
  name: 'RequestReviews',
  components: { Button, Input, TextArea },
  setup() {

    const formValues = reactive({
      name: '',
      comment: ''
    })

    const sendFormReviews = () => {
      valueFormRequestReviews.forEach((item) => {
        formValues[item.key] = item.answer
      })
      console.log('sendFormReviews', formValues)
    }

    return {
      valueFormRequestReviews,
      sendFormReviews
    }
  }
}
</script>

<style scoped>

</style>