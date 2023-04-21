import { computed, reactive, ref } from 'vue'
import dictPrice from './dict.js'

export default function usePriceFilter() {
  const dict = ref(dictPrice) || []

  const select = reactive({
    city: '',
    service: '',
    tyres: '',
    price: ''
  })

  const filterParamsFromDict = reactive({
    cites: [],
    typeTitle: [],
    typeTires: []
  })


  const getFirstFilterForCity = (city = 'г.Никольское') => {
    dict.value.forEach((item) => {
      select.city = dict.value[0].name
      filterParamsFromDict.cites = [...filterParamsFromDict.cites, item.name]
      if (city === item.name) {
        item.type.forEach((type) => {
          select.service = item.type[0].title
          filterParamsFromDict.typeTitle = [...filterParamsFromDict.typeTitle, type.title]
          type.tires.forEach((tires) => {
            select.tyres = type.tires[0].size
            select.price = type.tires[0].price
            filterParamsFromDict.typeTires = [...filterParamsFromDict.typeTires, tires.size]
          })
        })
      }
    })
  }

  // ФИЛЬТРУЕМ ТИПЫ УСЛУГ
  const setNewParamsFilterForType = (params) => {
    select.city = params
    filterParamsFromDict.typeTitle = dict.value
      .filter((city) => city.name === select.city)
      .map((city) => city.type.map((type) => {
        select.service = city.type[0].title
        return type.title
      }))
      .flat()
      .filter((title) => title !== undefined)
  }

  // ФИЛЬТРУЕМ ТИПЫ ШИН ПОСЛЕ ВЫБРАНОГО ТИП УСЛУГ
  const setNewParamsFilterForTyres = (params) => {
    filterParamsFromDict.typeTires = dict.value
      .filter((city) => city.name === select.city)
      .map((city) => {
        const selectedType = city.type.find((type) => type.title === params)
        select.tyres = selectedType.title
        if (selectedType) {
          return selectedType.tires.map((tires) => tires.size)
        }
        return []
      })
      .flat()
      .filter((title) => title !== undefined)
  }

  const setNewParamsFilterForPrice = (params) => {
    const selectedCity = dict.value.find((type) => type.name === select.city)
    const selectType = selectedCity.type.find((type) => type.title === select.service)
    const selectTires = selectType.tires.find((type) => type.size === params)
    if (selectTires) select.price = selectTires.price
  }

  return {
    dict: dict.value,
    filterParamsFromDict,
    select,
    getFirstFilterForCity,
    setNewParamsFilterForType,
    setNewParamsFilterForTyres,
    setNewParamsFilterForPrice
  }
}
