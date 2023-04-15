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
      { id: 0, link: 'https://vk.com/kabaloevt', image: 'src/assets/images/icons/social/vk.png'},
      { id: 1, link: 'https://wa.me/79118293155', image: 'src/assets/images/icons/social/whatsapp.png'},
      { id: 2, link: 'https://t.me/+79118293155', image: 'src/assets/images/icons/social/telegram.png'},
      { id: 3, link: '+79118293155', image: 'src/assets/images/icons/social/telephone.png'},
    ])

    return { dict }
  }
})
</script>

<style lang='scss' scoped>
@import "./src/assets/sass/variables.scss";
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
        background-color: $btnbg;
        border-radius: 10px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }
</style>