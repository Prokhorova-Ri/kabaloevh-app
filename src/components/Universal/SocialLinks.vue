<template>
  <section class='social-links'>
    <a
      v-for='(item, index) in dict'
      :key='index'
      target='_blank'
      class='social-links-item'
      :href="item.link === '+79118293155' ? 'tel:+79118293155' : item.link">
      <img :src='item.image' />
    </a>
  </section>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { RouterLink } from 'vue-router'
export default defineComponent({
  name: 'SocialLinks',
  components: {
    RouterLink
  },
  setup() {

    const dict = reactive([
      { id: 0, link: 'https://vk.com/kabaloevt', image: 'src/assets/images/icons/social/vk.svg'},
      { id: 1, link: 'https://wa.me/79118293155', image: 'src/assets/images/icons/social/whatsapp.svg'},
      { id: 2, link: 'https://t.me/+79118293155', image: 'src/assets/images/icons/social/telegram.svg'},
      { id: 3, link: '+79118293155', image: 'src/assets/images/icons/social/telephone-call.svg'},
    ])

    return { dict }
  }
})
</script>

<style lang='scss' scoped>
  .social {
    &-links {
      display: flex;
      justify-content: space-between;
      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;
        background-color: #32956B;
        border-radius: 10px;
      }
    }
  }
</style>