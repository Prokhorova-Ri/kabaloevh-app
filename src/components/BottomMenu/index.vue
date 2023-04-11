<template>
  <div class="menu">
    <router-link
      v-for="(item, index) in menuList"
      :key="index"
      :to="item.url"
      :style="item.active ? 'color: black;' : 'color: white'"
      class="menu-item"
    >
      <img class="menu-item__image menu-item__active" :src="item.icon" />
      {{ item.title }}
    </router-link>
  </div>
</template>

<script>
import useMenuList from '../../utils/BottomMenu/index.js'
export default {
  name: 'index',
  setup() {
    const { menuList } = useMenuList()

    return {
      menuList
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 10px 13px;
  display: flex;
  justify-content: space-between;
  background: rgba(50, 149, 107, 0.8);
  &-item {
    color: white;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 6px;
    &__image {
      width: 24px;
      height: 24px;
    }
    &__active {
      fill: black;
    }
  }
}
</style>
