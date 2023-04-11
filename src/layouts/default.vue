<template>
  <div>
    <section class="content">
      <slot/>
    </section>
    <BottomMenu />
  </div>
</template>

<script>
import BottomMenu from '@/components/BottomMenu/index.vue'
export default {
  name: 'default',
  components: { BottomMenu }
}
</script>
