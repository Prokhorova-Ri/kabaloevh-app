<template>
  <h1 class='contacts-title main-title'>Контакты</h1>
  <div class='main-layout'>
    <WrapperLayout
      :class-list-for-height="['contacts-title', 'menu', 'social-links', -20]"
      padding='20px 0'
    >
      <template #content>
        <div class='contacts-content-work main-layout-parent'>
          <p class='contacts-content-work-title'>Часы работы</p>
          <div style='height: 236px;
          display: flex;
          flex-direction: column;
          gap: 6px;'>
            <div
              v-for='item in dict'
              :key='item.id'
              class='contacts-content-work-item'>
              <p class='contacts-content-work-item-hour'>{{ item.day }}</p>
              <div class='contacts-content-work-item-hour-layout'>
                <p class='contacts-content-work-item-hour'>{{ item.at }}</p>
                -
                <p class='contacts-content-work-item-hour'>{{ item.from }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class='contacts-content-map'>
          <LeafletMap border-radius='20px' height="280px" />
        </div>
      </template>
    </WrapperLayout>
    <SocialLinks />
  </div>
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
    const heightMap = ref(0)
    const dict = reactive([
      { id: 0, day: 'Понедельник', at: '9:00', from: '20:00'},
      { id: 1, day: 'Вторник', at: '9:00', from: '20:00'},
      { id: 2, day: 'Среда', at: '9:00', from: '20:00'},
      { id: 3, day: 'Четверг', at: '9:00', from: '20:00'},
      { id: 4, day: 'Пятница', at: '9:00', from: '20:00'},
      { id: 5, day: 'Суббота', at: '9:00', from: '20:00'},
      { id: 6, day: 'Воскресенье', at: '9:00', from: '20:00'}
    ])

    const setHeight = (height) => {
      heightMap.value = height
    }

    return { dict, heightMap, setHeight }
  }
}
</script>

<style lang='scss' scoped>
@import "./src/assets/sass/variables.scss";
  .contacts {
    &-title {
      margin: 20px 0 20px 0;
      text-align: center;
    }
    &-content {
      &-work {
        //background-color: transparent;
        //border-radius: 10px;
        margin: 0 0 40px 0;
        height: 234px;
        &-title {
          font-size: 18px;
          margin: 0 0 10px 0;
        }
        &-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &-hour {
            font-size: 16px;
            &-layout {
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }
</style>
