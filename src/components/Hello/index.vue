<template>
  <div class='hello-wrapper'>
    <h1 class='hello-wrapper-title'>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    text: {
      type: String,
      default: 'Добро пожаловать 👋'
    }
  },
  emits: ['update'],
  setup(props, context) {
    setTimeout(function() {
      context.emit('update', false)
    }, 3000);
  }
}
</script>

<style lang='scss' scoped>
  .hello-wrapper {
    background-color: inherit;
    color: #1C1E58;
    font-size: 14px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    animation: fade-in-out 3s ease-in-out forwards;
  }

  @keyframes fade-in-out {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
