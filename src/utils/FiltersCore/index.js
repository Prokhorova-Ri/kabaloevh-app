import { reactive, ref } from 'vue'
import dictPrice from './dict.js'

export default function usePriceFilter() {
  const dict = ref(dictPrice) || []

  const select = reactive({
    city: { name: '', title: 'Город', code: 'city' },
    service: { name: '', title: 'Тип услуг', code: 'service' },
    tyres: { name: '', title: 'Размер шин', code: 'tyres' },
    price: { name: '', title: 'Цена', code: 'price' }
  })

  const newFilterParamsFromDict = reactive({
    cites: [],
    typeTitle: [],
    typeTires: []
  })


  const unMountedFormationFiltersParams = (city = 'г.Никольское') => {
    dict.value.forEach((item) => {
      select.city.name = dict.value[0].name
      newFilterParamsFromDict.cites = [...newFilterParamsFromDict.cites, item.name]
      if (city === item.name) {
        item.type.forEach((type) => {
          select.service.name = item.type[0].title
          newFilterParamsFromDict.typeTitle = [...newFilterParamsFromDict.typeTitle, type.title]
          type.tires.forEach((tires) => {
            select.tyres.name = type.tires[0].size
            select.price.name = type.tires[0].price
            newFilterParamsFromDict.typeTires = [...newFilterParamsFromDict.typeTires, tires.size]
          })
        })
      }
    })
  }

  // ФИЛЬТРУЕМ ТИПЫ УСЛУГ
  const setNewParamsFilterForType = (params) => {
    select.city.name = params
    newFilterParamsFromDict.typeTitle = dict.value
      .filter((city) => city.name === select.city.name)
      .map((city) => city.type.map((type) => {
        select.service.name = city.type[0].title
        return type.title
      }))
      .flat()
      .filter((title) => title !== undefined)
    setNewParamsFilterForTyres(select.service.name)
  }

  // ФИЛЬТРУЕМ ТИПЫ ШИН ПОСЛЕ ВЫБРАНОГО ТИП УСЛУГ
  const setNewParamsFilterForTyres = (params) => {
    newFilterParamsFromDict.typeTires = dict.value
      .filter((city) => city.name === select.city.name)
      .map((city) => {
        const selectedType = city.type.find((type) => type.title === params)
        select.service.name = selectedType.title
        if (selectedType) {
          return selectedType.tires.map((tires) => {
            select.tyres.name = selectedType.tires[0].size
            return tires.size
          })
        }
        return []
      })
      .flat()
      .filter((title) => title !== undefined)
    setNewParamsFilterForPrice(select.tyres.name)
  }

  // ФИЛЬТРУЕМ НОВЫЙ ЦЕННИК
  const setNewParamsFilterForPrice = (params) => {
    const selectedCity = dict.value.find((type) => type.name === select.city.name)
    const selectType = selectedCity.type.find((type) => type.title === select.service.name)
    const selectTires = selectType.tires.find((type) => type.size === params)
    if (selectTires) select.price.name = selectTires.price
  }


  return {
    dict,
    dictPrice,
    newFilterParamsFromDict,
    select,
    unMountedFormationFiltersParams,
    setNewParamsFilterForType,
    setNewParamsFilterForTyres,
    setNewParamsFilterForPrice
  }
}
