<template>
  <div
    :id="`map-container-${id}`"
    class="map-container"
    :style="`border-radius: ${borderRadius};height: ${height}`"
  ></div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
export default {
  name: 'index',
  props: {
    borderRadius: {
      type: String,
      default: '0px'
    },
    height: {
      type: String,
      default: '0px'
    },
    id: {
      type: String,
      default: 'empty'
    },
    coordinates: {
      type: [Array, Object],
      default: () => [59.704574, 30.78681]
    },
    zoom: {
      type: Number,
      default: 20
    }
  },
  setup(props) {
    const map = ref()
    const setParamsMap = () => {
      console.log('props?.zoom', props?.zoom)
      map.value = L.map(`map-container-${props.id}`).setView(props?.coordinates, 14)
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map.value)
      L.marker([59.704574, 30.78681]).addTo(map.value)
    }
    onMounted(() => {
      setParamsMap()
    })
    onBeforeUnmount(() => {
      if (map.value) {
        map.value.remove()
      }
    })
    return { map }
  }
}
</script>
<style lang='scss'>
.map-container {
  bottom: 20px;
}
//.map-container > * {
//  width: inherit;
//}

.leaflet-bottom {
  display: none;
}
</style>
