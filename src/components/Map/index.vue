<template>
  <div :id="`map-container-${id}`" class="map-container" :style="`border-radius: ${borderRadius}`"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
export default {
  name: "index",
  props: {
    borderRadius: {
      type: String,
      default: '0px'
    },
    id: {
      type: String,
      default: 'empty'
    },
    coordinates: {
      type: [Array, Object],
      default: () => [59.704574, 30.786810]
    },
    zoom: {
      type: Number,
      default: 20
    }
  },
  setup (props) {
    const map = ref()
    const setParamsMap = () => {
      console.log('props?.zoom', props?.zoom)
      map.value = L.map(`map-container-${props.id}`).setView(props?.coordinates, 14);
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map.value);
      L.marker([59.704574, 30.786810]).addTo(map.value);
    }
    onMounted(() => {
      setParamsMap()
    })
    onBeforeUnmount(() => {
      if (map.value) {
        map.value.remove();
      }
    })
    watch(() => props.coordinates, () => {
      map.value.remove();
      setParamsMap()
    })
    return { map }
  }
}
</script>
<style scoped>
.map-container {
  position: absolute;
  bottom: 20px;
  border-radius: 20px;
  width: 333px;
  height: 240px;
}
.map-container > * {
  width: inherit;
}
</style>
