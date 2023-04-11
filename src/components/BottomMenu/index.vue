<template>
  <div class='menu'>
    <router-link
      v-for="(item, index) in menu"
      :key="index"
      :to="item.url"
      class="menu-item"
    >
      <img  class="menu-item__image" :src='item.icon' />
      {{ item.title }}
    </router-link>
  </div>
</template>

<script>
import useMenuList from '../../utils/BottomMenu/index.js';
import { ref } from 'vue';
export default {
  name: 'index',
  setup() {

    const { getBottomListMenu } = useMenuList()
    const menu = ref(getBottomListMenu())

    return { menu }
  }
}
</script>

<style lang='scss' scoped>
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
    }
  }
</style>
