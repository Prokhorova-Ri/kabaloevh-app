export const valueFormRequestSale = [
  {
    view: 'input',
    placeholder: 'Укажите адрес',
    type: 'text',
    key: 'address',
    answer: '',
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
    view: 'input',
    placeholder: 'Номер телефона',
    type: 'text',
    key: 'number',
    answer: '',
    valid: false
  }
]

export const valueFormRequestReviews = [
  {
    view: 'stars',
    key: 'star',
    max: 5,
    answer: 0
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