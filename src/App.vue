<template>
  <!--Динамический компонент-->
 <div class='app'>
<!--   <Hello v-if='statusLoading' @update='changeLoading'/>-->
   <component :is="layout">
     <router-view />
   </component>
 </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Hello from '/src/components/Hello/index.vue'
export default {
  components: {
    // Hello
  },
  setup() {
    const route = useRoute()
    const statusLoading = ref(true)
    const layout = route.meta.layout || 'default-layout'

    const changeLoading = () => {
      statusLoading.value = false
    }

    return { layout, statusLoading, changeLoading }
  }
}
</script>
