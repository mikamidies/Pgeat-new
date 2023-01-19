<template>
  <div class="page">
    <MainTop />
    <MainBlock1 :partners="partners" />
    <AppSliderBlock
      title-main="Endless facilities"
      title-secondary="with buying a house"
      subtitle="or apartment with our company in the UK.
      Live for your pleasure!"
      :link="sliderLink"
      :images="sliderImages"
    />
    <MainBlock2 />
  </div>
</template>

<script>
import MainTop from '@/views/Main/MainTop'
import MainBlock1 from '@/views/Main/MainBlock1'
import AppSliderBlock from '@/components/AppSliderBlock'
import MainBlock2 from '@/views/Main/MainBlock2'
import partnersApi from '@/api/partners'

export default {
  name: 'IndexPage',
  transition: 'fade',

  data() {
    return {
      sliderLink: {
        title: 'See our projects',
        to: '/projects',
      },

      sliderImages: [
        {
          id: 1,
          path: require('@/assets/img/gallery-3.jpg'),
        },
        {
          id: 2,
          path: require('@/assets/img/gallery-1.jpg'),
        },
        {
          id: 3,
          path: require('@/assets/img/gallery-2.jpg'),
        },
        {
          id: 4,
          path: require('@/assets/img/gallery-3.jpg'),
        },
        {
          id: 5,
          path: require('@/assets/img/gallery-1.jpg'),
        },
        {
          id: 6,
          path: require('@/assets/img/gallery-2.jpg'),
        },
      ],
    }
  },

  async asyncData({ $axios }) {
    const partners = await partnersApi.getPartners($axios)

    return {
      partners,
    }
  },

  components: {
    MainTop,
    MainBlock1,
    AppSliderBlock,
    MainBlock2,
  },

  head() {
    return {
      title: 'Phoenix | Home',
    }
  },
}
</script>
