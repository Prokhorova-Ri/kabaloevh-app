<template>
  <div ref='layoutToTop' class='layout-to-top'>
    <div class='layout-to-top-close' />
    <div class='layout-to-top-middle'>
      <slot name='content'>Передайте контент</slot>
    </div>
  </div>
</template>

<script>
import { watch, ref, onMounted } from 'vue'

export default {
  name: 'LayoutToTop',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const layoutToTop = ref()
    const layoutToTopWrapper = ref()

    watch(() => props?.active, () => {
      layoutToTop.value.classList.add('layout-to-top-wrapper-active')
    })

    let startY = null; // начальная позиция Y

    onMounted(() => {
      layoutToTop.value.addEventListener('touchstart', (event) => {
        if (event.touches.length === 1) { // если на экране один палец
          startY = event.touches[0].clientY; // сохраняем начальную позицию Y
        }
      });

      layoutToTop.value.addEventListener('touchmove', (event) => {
        if (startY !== null) { // если было зажатие пальца на экране
          const currentY = event.touches[0].clientY; // текущая позиция Y
          const deltaY = currentY - startY; // разница между начальной и текущей позицией Y
          if (deltaY > 100) { // если движение вниз
            console.log('Движение вниз');
            layoutToTop.value.classList.remove('layout-to-top-wrapper-active')
            layoutToTop.value.classList.add('layout-to-top-not-active')
            setTimeout(() => {
              layoutToTop.value.classList.remove('layout-to-top-not-active')
            }, 1000)
          }
        }
      });

      layoutToTop.value.addEventListener('touchend', () => {
        startY = null; // сбрасываем начальную позицию Y
      });
    })

    const closeModal = () => {
      console.log('Touch')
    }

    return { layoutToTop, layoutToTopWrapper, closeModal }
  }
}
</script>

<style lang='scss' scoped>
  .layout-to-top {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    &-close {
      width: 30px;
      height: 3px;
      border-radius: 10px;
      background: #333333;
      margin: 0 0 20px 0;
      position: relative;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &-active {
      animation: toTop .7s forwards;
    }
  }

  @keyframes toTop {
    0% {
      top: 20px;
      bottom: 0;
    }
    100% {
      top: 50%;
      padding: 20px 10px;
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