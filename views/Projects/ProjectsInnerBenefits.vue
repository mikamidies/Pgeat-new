<template>
  <div class="projects-benefits">
    <div class="container">
      <AppTitle
        class="projects-benefits__title"
        :title-main="title"
        title-secondary="Property"
        subtitle="Benefits living in our place "
      />
      <div class="projects-benefits__slider swiper" ref="slider">
        <div class="swiper-wrapper">
          <div
            v-for="benefit in benefits"
            :key="benefit.id"
            class="projects-benefits__slide swiper-slide"
          >
            <div class="projects-benefits__slide-inner">
              <div class="projects-benefits__slide-icon">
                <img :src="benefit.icon" alt="" />
              </div>
              <p class="projects-benefits__slide-title ps-semibold">
                {{ benefit.name }}
              </p>
              <p class="projects-benefits__slide-value ps-semibold">
                {{ benefit.number }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

import AppTitle from '@/components/AppTitle'

export default {
  name: 'ProjectsInnerBenefits',

  props: {
    title: {
      type: String,
      required: true,
    },

    benefits: {
      type: Array,
      required: true,
    },
  },

  components: {
    AppTitle,
  },

  mounted() {
    new Swiper(this.$refs.slider, {
      autoplay: true,
      spaceBetween: 0,
      freeMode: true,
      breakpoints: {
        1024: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 4,
        },
        576: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
          freeMode: false,
        },
      },
    })
  },
}
</script>

<style scoped lang="scss">
.projects-benefits {
  background-color: #f4f4f4;
  padding: 88px 0 150px 0;

  &__title {
    text-align: center;
    margin-bottom: 56px;
  }

  &__slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 80px;
    text-align: center;

    &:not(:last-child) {
      border-right: 0.5px solid #afafaf;
    }

    &:nth-child(even) {
      .projects-benefits__slide-inner {
        transform: translateY(50px);
      }
    }
  }

  &__slide-icon {
    margin-bottom: 25px;
    img {
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }
  }

  &__slide-title {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 13px;
  }

  &__slide-value {
    font-size: 50px;
    line-height: 75px;
  }
}

@media screen and (max-width: 1024px) {
  .projects-benefits {
    &__slide-value {
      font-size: 35px;
      line-height: 45px;
    }
  }
}

@media screen and (max-width: 576px) {
  .projects-benefits {
    padding: 60px 0 30px 0;

    &__slide {
      border-right: 0 !important;

      &:nth-child(even) {
        .projects-benefits__slide-inner {
          transform: none;
        }
      }
    }
  }
}
</style>
