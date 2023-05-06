<template>
  <div ref='layoutToTop' class='layout-to-top'>
    <div class='layout-to-top-close' />
    <div class='layout-to-top-middle'>
      <WrapperLayout
        :class-list-for-height="['select-params', 'form']"
        background-color='white'
        border-radius='0'
        @updateHeight='setNewHeight'
        padding='10px 15px'
      >
        <template #content>
          <slot name='content'>Передайте контент</slot>
        </template>
      </WrapperLayout>
    </div>
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
  setup(props) {
    const layoutToTop = ref()
    const layoutToTopWrapper = ref()
    let height = ref('0px')

    watch(() => props?.active, () => {
      // layoutToTop.value.style.height = `${height.value}px`
      layoutToTop.value.style.bottom = `${height.value}px`
      layoutToTop.value.classList.add('layout-to-top-active')
    })

    let startY = null; // начальная позиция Y

    onMounted(() => {
      // layoutToTop.value.addEventListener('touchstart', (event) => {
      //   if (event.touches.length === 1) { // если на экране один палец
      //     startY = event.touches[0].clientY; // сохраняем начальную позицию Y
      //   }
      // });
      //
      // layoutToTop.value.addEventListener('touchmove', (event) => {
      //   if (startY !== null) { // если было зажатие пальца на экране
      //     const currentY = event.touches[0].clientY; // текущая позиция Y
      //     const deltaY = currentY - startY; // разница между начальной и текущей позицией Y
      //     if (deltaY > 100) { // если движение вниз
      //       console.log('Движение вниз');
      //       layoutToTop.value.classList.remove('layout-to-top-active')
      //       layoutToTop.value.classList.add('layout-to-top-not-active')
      //       setTimeout(() => {
      //         layoutToTop.value.classList.remove('layout-to-top-not-active')
      //       }, 5000)
      //     }
      //   }
      // });
      //
      // layoutToTop.value.addEventListener('touchend', () => {
      //   startY = null; // сбрасываем начальную позицию Y
      // });
    })

    const closeModal = () => {
      console.log('Touch')
    }

    const setNewHeight = ($height) => {
      height.value = $height
    }

    return {
      layoutToTop,
      layoutToTopWrapper,
      closeModal,
      setNewHeight
    }
  }
}
</script>

<style lang='scss' scoped>
  .layout-to-top {
    position: absolute;
    left: 0;
    right: 0;
    background: white;
    z-index: 99;
    overflow: auto;

    &-close {
      width: 30px;
      height: 3px;
      border-radius: 10px;
      background: #333333;
      margin: 20px 0;
      position: relative;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &-active {
      animation: toTop .7s;
    }
  }

  @keyframes toTop {
    0% {
      bottom: 0;
    }
    100% {
      bottom: 50%;
    }
  }

  @keyframes toBottom {
    0% {
      padding: 20px 10px;
      top: 20px;
    }
    100% {
      padding: 0 0;
      top: 100%;
      display: none;
    }
  }
</style>