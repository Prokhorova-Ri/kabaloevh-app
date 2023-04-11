<template>
  <!--Динамический компонент-->
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const layout = route.meta.layout || 'default-layout'
    return { layout }
  }
}
</script>
