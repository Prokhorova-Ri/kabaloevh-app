<template>
  <h1 class='contacts-title'>Отзывы</h1>
  <WrapperLayout
    :class-list-for-height="['contacts-title', 'menu', 18]"
    background-color='transparent'
    border-radius='0px'
    padding='12px 16px'
  >
    <template #content>
      <div class='contacts-content'>
        <div class='contacts-content-work'>
          <div
            v-for='item in dict'
            :key='item.id'
            class='contacts-content-work-item'>
            <p class='contacts-content-work-item-hour'>{{ item.day }}</p>
            <p class='contacts-content-work-item-hour'>{{ item.at }}</p>
            <p class='contacts-content-work-item-hour'>{{ item.from }}</p>
          </div>
        </div>
        <div class='contacts-content-map'>
          <LeafletMap border-radius='10px' height='391px' />
        </div>
        <SocialLinks />
      </div>
    </template>
  </WrapperLayout>
</template>

<script>
import WrapperLayout from '../../components/Universal/WrapperLayout.vue'
import SocialLinks from '../../components/Universal/SocialLinks.vue'
import LeafletMap from '../../components/Map/index.vue';
import { ref, reactive } from 'vue'
export default {
  name: 'index',
  components: { WrapperLayout, LeafletMap, SocialLinks },
  setup() {

    const dict = reactive([
      { id: 0, day: 'Понедельник', at: '9:00', from: '20: 00'},
      { id: 1, day: 'Вторник', at: '9:00', from: '20: 00'},
      { id: 2, day: 'Среда', at: '9:00', from: '20: 00'},
      { id: 3, day: 'Четверг', at: '9:00', from: '20: 00'},
      { id: 4, day: 'Пятница', at: '9:00', from: '20: 00'},
      { id: 5, day: 'Суббота', at: '9:00', from: '20: 00'},
      { id: 6, day: 'Воскресенье', at: '9:00', from: '20: 00'}
    ])

    const innerHeight = ref(window.innerHeight)
    return { dict, innerHeight }
  }
}
</script>

<style lang='scss' scoped>
  .contacts {
    &-title {
      margin: 20px 0 20px 0;
      text-align: center;
    }
    &-content {
      &-work {
        &-item {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>
