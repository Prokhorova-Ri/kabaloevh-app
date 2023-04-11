<template>
  <section class="content">
    <slot/>
  </section>
  <BottomMenu />
</template>

<script>
import BottomMenu from '@/components/BottomMenu/index.vue'
export default {
  name: 'default',
  components: { BottomMenu }
}
</script>
