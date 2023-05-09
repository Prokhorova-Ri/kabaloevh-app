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

  const getValuesFromReview = () => {
    return reviewsValueInput
  }

  const checkInputValidate = () => {
    reviewsValueInput.value.forEach((item) => {
      console.log('item', item)
    })
  }

  return {
    getValuesFromReview,
    checkInputValidate
  }
}
