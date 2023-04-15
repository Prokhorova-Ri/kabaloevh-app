import { ref } from 'vue'
import dictPrice from './dict.js'

export default function usePriceFilter() {
  const dict = ref(dictPrice) || []
  const citys =ref([])

  const getCityFromCode = (code) => {
    let result = dict.value.find((item) => item.code === code)
    return result
  }

  const getCitysFromData = () => {
   let result = []
   dict.value.forEach((item) => {
     result = item.name
   })
   return result
  }


  return {
    dict: dict.value,
    getCityFromCode,
    getCitysFromData
  }
}