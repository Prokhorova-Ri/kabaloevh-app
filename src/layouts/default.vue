<template>
  <section class="content">
    <slot />
  </section>
<!--  <PreLoader />-->
  <BottomMenu />
</template>

<script>
import BottomMenu from '@/components/BottomMenu/index.vue'
import PreLoader from '../components/PreLoader/index.vue'
export default {
  name: 'default',
  components: { BottomMenu, PreLoader }
}
</script>
