<template>
  <form @submit.prevent='sendFormApplicationSale' class='form'>
    <div
      v-for='(item, index) in valueFormRequestSale'
      :key='index'
    >
      <Input
        v-if='item.view.includes("input")'
        :schema='item'
      />
    </div>
    <Button margin='10px 0 0 0px' text='Отправить'/>
  </form>
</template>

<script>
import { valueFormRequestSale } from '../../utils/useSchemaInputs'
import Input from '../Universal/Inputs/Input.vue'
import Button from '../Universal/Button.vue'
import { reactive } from 'vue'
export default {
  name: 'RequestApplicationSale',
  components: { Button, Input },
  setup () {

    const formValues = reactive({
      address: '',
      name: '',
      number: ''
    })

    const sendFormApplicationSale = () => {
      valueFormRequestSale.forEach((item) => {
        formValues[item.key] = item.answer
      })
      console.log('sendFormApplicationSale', formValues)
    }

    return {
      valueFormRequestSale,
      sendFormApplicationSale
    }
  }
}
</script>

<style scoped>

</style>