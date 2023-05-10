import { reactive, ref } from 'vue'
import {
  valueFormRequestSale,
  valueFormRequestReviews } from './dictInputs.js'

export default function() {

  const inputValuesData = reactive({
    review: valueFormRequestReviews,
    application: valueFormRequestSale
  })

  // Дописать полноценную валидацию input
  const checkInputValidate = (payload) => {
    if (typeof payload.answer === 'string') {
      payload.answer === '' ? payload.valid = true : payload.valid = false
    }
  }

  // Дописать полноценную валидацию input
  const checkAllValidateValue = (key) => {
    console.log('key', key)
    const status =
      (inputValuesData[key].every(value => value.answer !== "")) &&
      (inputValuesData[key].every(value => value?.valid !== true))
    if (!status) {
      inputValuesData[key].forEach((item) => {
        if (typeof item.answer === 'string') {
          item.valid = true
        }
      })
    }
    return status
  }

  return {
    reviewsValueInput: inputValuesData.review,
    applicationValueInput: inputValuesData.application,
    checkInputValidate,
    checkAllValidateValue
  }
}
