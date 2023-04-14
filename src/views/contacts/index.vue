<template>
  <h1 class='contacts-title'>Отзывы</h1>
  <WrapperLayout
    :class-list-for-height="['contacts-title', 'menu', 18]"
    background-color='transparent'
    border-radius='0px'
    padding='12px 16px'
  >
    <template #content>
      TODO Layout contacts
    </template>
  </WrapperLayout>
</template>

<script>
import WrapperLayout from '../../components/Universal/WrapperLayout.vue'
import { ref } from 'vue'
export default {
  name: 'index',
  components: { WrapperLayout },
  setup() {
    const innerHeight = ref(window.innerHeight)
    return { innerHeight }
  }
}
</script>

<style lang='scss' scoped>
  .contacts {
    &-title {
      margin: 20px 0 20px 0;
      text-align: center;
    }
  }
</style>
