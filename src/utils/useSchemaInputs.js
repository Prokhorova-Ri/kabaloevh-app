export const valueFormRequestSale = [
  {
    view: 'input',
    placeholder: 'Укажите адрес',
    type: 'text',
    key: 'address',
    answer: '',
  },
  {
    view: 'input',
    placeholder: 'Имя',
    type: 'text',
    key: 'name',
    answer: '',
  },
  {
    view: 'input',
    placeholder: 'Номер телефона',
    type: 'text',
    key: 'number',
    answer: ''
  }
]

export const valueFormRequestReviews = [
  {
    view: 'stars',
    key: 'star',
    max: 5,
    answer: 0,
    valid: false
  },
  {
    view: 'input',
    placeholder: 'Имя',
    type: 'text',
    key: 'name',
    answer: '',
    valid: false
  },
  {
    view: 'textarea',
    placeholder: 'Комментарий',
    type: 'text',
    key: 'comment',
    answer: '',
    valid: false
  }
]

import { ref } from 'vue'
export default function() {

  const reviewsValueInput = ref(valueFormRequestReviews)

  const checkInputValidate = (payload) => {
    if (typeof payload.answer === 'string') {
      payload.answer === '' ? payload.valid = true : payload.valid = false
    }
    if (typeof payload.answer === 'number') {
      payload.answer <= 0 ? payload.valid = true : payload.valid = false
    }
  }

  const checkAllValidateValue = () => {
    const status =
      reviewsValueInput.value.every(value => value.answer !== "") &&
      reviewsValueInput.value.every(value => value.valid === false)
    if (!status) {
      reviewsValueInput.value.forEach((item) => {
        item.valid = true
      })
    }
    return status
  }

  return {
    reviewsValueInput,
    checkInputValidate,
    checkAllValidateValue
  }
}
