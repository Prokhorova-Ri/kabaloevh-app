import { computed, reactive, ref } from 'vue'
import dictPrice from './dict.js'

export default function usePriceFilter() {
  const dict = ref(dictPrice) || []
  const selectCite = ref('')
  const selectTypeTitle = ref('')
  const selectTypeTyres = ref('')
  const selectPrice = ref('')
  const filterParamsFromDict = reactive({
    cites: [],
    typeTitle: [],
    typeTires: []
  })


  const getFirstFilterForCity = (city = 'г.Никольское') => {
    dict.value.forEach((item) => {
      selectCite.value = dict.value[0].name
      filterParamsFromDict.cites = [...filterParamsFromDict.cites, item.name]
      if (city === item.name) {
        item.type.forEach((type) => {
          selectTypeTitle.value = item.type[0].title
          filterParamsFromDict.typeTitle = [...filterParamsFromDict.typeTitle, type.title]
          type.tires.forEach((tires) => {
            selectTypeTyres.value = type.tires[0].size
            selectPrice.value = type.tires[0].price
            filterParamsFromDict.typeTires = [...filterParamsFromDict.typeTires, tires.size]
          })
        })
      }
    })
  }

  // ФИЛЬТРУЕМ ТИПЫ УСЛУГ
  const setNewParamsFilterForType = (params) => {
    selectCite.value = params
    filterParamsFromDict.typeTitle = dict.value
      .filter((city) => city.name === selectCite.value)
      .map((city) => city.type.map((type) => {
        selectTypeTitle.value = city.type[0].title
        return type.title
      }))
      .flat()
      .filter((title) => title !== undefined)
  }

  // ФИЛЬТРУЕМ ТИПЫ ШИН ПОСЛЕ ВЫБРАНОГО ТИП УСЛУГ
  const setNewParamsFilterForTyres = (params) => {
    filterParamsFromDict.typeTires = dict.value
      .filter((city) => city.name === selectCite.value)
      .map((city) => {
        const selectedType = city.type.find((type) => type.title === params)
        selectTypeTyres.value = selectedType.title
        console.log('selectedType', selectedType)
        if (selectedType) {
          return selectedType.tires.map((tires) => tires.size)
        }
        return []
      })
      .flat()
      .filter((title) => title !== undefined)
  }

  return {
    dict: dict.value,
    filterParamsFromDict,
    selectCite,
    selectTypeTitle: computed(() => selectTypeTitle.value),
    selectTypeTyres,
    selectPrice,
    getFirstFilterForCity,
    setNewParamsFilterForType,
    setNewParamsFilterForTyres
  }
}