import { reactive, ref } from 'vue'
import dictPrice from './dict.js'

export default function usePriceFilter() {
  const dict = ref(dictPrice) || []
  const selectedCite = ref('г.Никольское')
  const filterParamsFromDict = reactive({
    cites: [],
    typeTitle: [],
    typeTires: [],
    anotherCite: []
  })


  const getFirstFilterForCity = (city = 'г.Никольское') => {
    dict.value.forEach((item) => {
      filterParamsFromDict.cites = [...filterParamsFromDict.cites, item.name]
      if (city === item.name) {
        item.type.forEach((type) => {
          filterParamsFromDict.typeTitle = [...filterParamsFromDict.typeTitle, { title: type.title, code: city }]
          type.tires.forEach((tires) => {
            filterParamsFromDict.typeTires = [...filterParamsFromDict.typeTires, tires.size]
          })
        })
      } else {
        filterParamsFromDict.anotherCite = item
      }
    })
  }

  //ПЕРЕПИСАТЬ ЕСЛИ БУДЕТ МАССИВ ГОРОДОВ
  const setNewParamsFilterForCity = (params) => {
    if (filterParamsFromDict.anotherCite.name === params) {
      filterParamsFromDict.anotherCite = dict.value.find((item) => item.name !== params)
    } else {
      console.log('есть')
    }
    console.log('filterParamsFromDict.anotherCite', filterParamsFromDict.anotherCite)
  }

  return {
    dict: dict.value,
    filterParamsFromDict,
    selectedCite,
    getFirstFilterForCity,
    setNewParamsFilterForCity
  }
}