<template>
  <form @submit.prevent='sendFormApplication' class='form'>
    <div
      v-for='(item, index) in useSchemaForm'
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
import useSchemaInputs from '../../utils/useSchemaInputs.js'
import Input from '../Universal/Inputs/Input.vue'
import Button from '../Universal/Button.vue'
import { reactive, ref } from 'vue'
export default {
  name: 'RequestApplicationSale',
  components: { Button, Input },
  setup () {

    const formValues = reactive({
      address: '',
      name: '',
      number: ''
    })

    const useSchema = useSchemaInputs()

    const {
      applicationValueInput,
      checkAllValidateValue
    } = useSchema

    const useSchemaForm = ref(applicationValueInput)

    const sendFormApplication = () => {
      if (checkAllValidateValue('application')) {
        useSchemaForm.value.forEach((item) => {
          formValues[item.key] = item.answer
        })
        console.log('Отправленно', formValues)
      }
    }

    return {
      useSchemaForm,
      sendFormApplication
    }
  }
}
</script>

<style scoped>

</style>