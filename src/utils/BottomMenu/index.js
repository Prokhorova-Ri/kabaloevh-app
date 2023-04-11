import dictMenu from './dict'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';

export default function useMenuList() {
  const route = useRoute()
  const menuList = ref(dictMenu) || []

  const checkSelectPageOnMounted = () => {
    menuList.value.forEach((item) => item.active = false)
    menuList.value.map((item) => {
      if(item.url === route.path) {
        return item.active = true
      }
    })
  }

  // ОТСЛЕЖИВАЮ РОУТИНГ ПРИ ЕГО ЗАМЕНЕ ВЫЗЫВАЮ ФУНКЦИЮ СМЕНЫ ТАБА В МЕНЮ
  watch(() => route.path, () => {
    checkSelectPageOnMounted()
  })

  return { menuList }
}
