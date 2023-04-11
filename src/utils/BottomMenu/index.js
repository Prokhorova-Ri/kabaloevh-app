import dictMenu from './dict'

export default function useMenuList() {

  const getBottomListMenu = () => {
    return dictMenu || []
  }

  return { getBottomListMenu }
}
