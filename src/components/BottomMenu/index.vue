<template>
  <div class="menu">
    <div
      v-for="(item, index) in menuList"
      :key="index"
      :class="item.active ? 'menu-item__active' : ''">
      <router-link
        :to="item.url"
        class="menu-item"
      >
        <img class="menu-item__image" :src="item.icon" />
        {{ item.title }}
      </router-link>
    </div>
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(50, 149, 107, 0.8);
  &-item {
    padding: 9px 10px;
    color: white;
    font-size: 12px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 6px;
    &__image {
      width: 20px;
      height: 20px;
    }
    &__active {
      background-color: #FF7A00;
      transition: all 4ms ease-in;
      //-webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
      //-moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
      //box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    }
  }
}
</style>
