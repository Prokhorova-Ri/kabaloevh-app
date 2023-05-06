<template>
  <div class="container">
    <button id="toggleBtn">Открыть меню</button>
    <ul id="menu">
      <li>Пункт 1</li>
      <li>Пункт 2</li>
      <li>Пункт 3</li>
    </ul>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'Test',
  setup() {
    onMounted(() => {

    })
  }
}
</script>

<style scoped>
.container {
  position: relative;
}

#menu {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

#menu.show {
  transform: translateY(0);
}
</style>