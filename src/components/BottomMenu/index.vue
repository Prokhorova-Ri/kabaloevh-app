<template>
  <div>
    <router-link
      v-for="(item, index) in menu"
      :key="index"
      :to="item.url"
      class="text-sm font-bold"
    >
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

<style scoped>

</style>
