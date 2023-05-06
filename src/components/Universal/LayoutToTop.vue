<template>
  <div
    v-if='show'
    class='layout-to-top-wrapper-bg'
    @click.stop='closeModal'
  />
    <div ref='layoutToTop' class='layout-to-top' >
      <template v-if='show'>
        <div class='layout-to-top-close' />
        <div class='layout-to-top-middle'>
          <WrapperLayout
            :class-list-for-height="['home-title', 'home-offer']"
            background-color='white'
            border-radius='0'
            padding='10px 15px'
          >
            <template #content>
              <slot name='content'>Передайте контент</slot>
            </template>
          </WrapperLayout>
        </div>
      </template>
    </div>
</template>

<script>
import { watch, ref, onMounted } from 'vue'
import WrapperLayout from '../../components/Universal/WrapperLayout.vue'
export default {
  name: 'LayoutToTop',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  components: { WrapperLayout },
  emits:['updateActive'],
  setup(props, context) {
    const layoutToTop = ref()
    const show = ref(props?.active)

    watch(() => props?.active, (newActive) => {
      if (newActive) {
        show.value = newActive
        layoutToTop.value.classList.add('layout-to-top-active')
      }
    })

    const closeModal = () => {
      show.value = false
      context.emit('updateActive', false)
      layoutToTop.value.classList.remove('layout-to-top-active')
    }

    return {
      layoutToTop,
      show,
      closeModal
    }
  }
}
</script>

<style lang='scss' scoped>
  .layout-to-top {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
    transition: transform 1s ease;
    z-index: 99;
    &-active {
      transform: translateY(0);
      transition: transform 1s ease;
    }
    &-close {
      width: 30px;
      height: 3px;
      border-radius: 10px;
      background: white;
      margin: 20px 0;
      position: relative;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &-wrapper-bg {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: flex-end;
      background: rgba(0,0,0, 0.3);
    }
  }

  @keyframes toBottom {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }

  //.layout-to-top {
  //  position: absolute;
  //  left: 0;
  //  right: 0;
  //  background: white;
  //  z-index: 99;
  //  overflow: auto;
  //
  //
  //  &-active {
  //    animation: toTop .7s;
  //  }
  //}
  //
  //@keyframes toTop {
  //  0% {
  //    bottom: 0;
  //  }
  //  100% {
  //    bottom: 50%;
  //  }
  //}
  //
  //@keyframes toBottom {
  //  0% {
  //    padding: 20px 10px;
  //    top: 20px;
  //  }
  //  100% {
  //    padding: 0 0;
  //    top: 100%;
  //    display: none;
  //  }
  //}
</style>