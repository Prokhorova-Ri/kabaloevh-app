<template>
  <div class='pre-loader'>
    <img class='pre-loader-image' src='/public/icon3.png'>
  </div>
</template>

<script>
export default {
  name: 'index',
  setup() {
    setTimeout(function() {}, 2000)
    return {}
  }
}
</script>

<style lang='scss' scoped>
  .pre-loader {
    background-color: #1C1E58;
    position: absolute;
    top: 0;
    bottom: 59px;
    width: 50%;
    z-index: 99999;
    display: flex;
    align-items: center;
    animation: progress 4s forwards;
    &-image {
      position: absolute;
      margin: 0 0 0 10px;
      width: 75px;
      height: 75px;
      //position: relative;
      //left: 7%;
      animation: car .7s forwards;
    }
  }

  @keyframes car {
    0% {
      left: 20%;
    }
    100% { left: 100% }

  }


  @keyframes progress {
    0% { width: 0; }
    50% { width: 100%; }
    50% {
      left: 0;
      width: 100%;
    }
    75% {
      background-color: white;
    }
    100% {
      left: 100%;
      right: 0;
      width: 0;
    }
  }
</style>
