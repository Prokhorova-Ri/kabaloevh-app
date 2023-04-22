<template>
  <div class='pre-loader'>
<!--    <img class='pre-loader-image' src='/public/icon3.png'>-->
  </div>
</template>

<script>
export default {
  name: 'index',
  setup() {
    // setTimeout(function() {}, 2000)
    return {}
  }
}
</script>

<style lang='scss' scoped>
  .pre-loader {
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 59px;
    z-index: 99999;
    display: flex;
    align-items: center;
    animation: progress 3s forwards;
    &-image {
      position: absolute;
      width: 75px;
      height: 75px;
      animation: car .7s forwards;
    }
  }

  @keyframes car {
    0% {
      left: 20%;
    }
    100% {
      display: none;
      left: 100%
    }

  }


  @keyframes progress {
    0% { width: 0; }
    50% { width: 100%; }
    50% {
      left: 0;
      width: 100%;
    }
    75% {
      background-color: #464888;
    }
    100% {
      left: 100%;
      right: 0;
      width: 0;
    }
  }
</style>
