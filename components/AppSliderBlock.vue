<template>
  <section class="slider-block">
    <div class="container">
      <div class="slider-block__inner">
        <div class="slider-block__body">
          <AppTitle
            class="slider-block__title"
            :title-main="titleMain"
            :title-secondary="titleSecondary"
            :subtitle="subtitle"
          />
          <p v-if="text" v-html="text" class="slider-block__text"></p>
          <a
            v-if="link.type == 'external'"
            :href="link.to"
            target="_blank"
            download
            class="slider-block__link ps-semibold"
            >{{ link.title }}</a
          >
          <NuxtLink
            v-else
            :to="link.to || '/'"
            class="slider-block__link ps-semibold"
          >
            <span>{{ link.title }}</span>
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.5L0.749999 12.9952L0.75 0.00480889L12 6.5Z"
                fill="black"
              />
            </svg>
          </NuxtLink>
        </div>
        <div class="slider-block__slider swiper" ref="slider">
          <div class="swiper-wrapper">
            <a
              v-for="image in images"
              :key="image.id"
              data-fslightbox="gallery"
              :href="image.path"
              target="_blank"
              class="slider-block__slide swiper-slide"
            >
              <img :src="image.path" alt="" />
            </a>
          </div>
        </div>
        <div style="display: flex; justify-content: center">
          <a
            v-if="link.type === 'external'"
            :href="link.to"
            target="_blank"
            download
            class="slider-block__link slider-block__link--mobile ps-semibold"
            >{{ link.title }}</a
          >
          <NuxtLink
            v-else
            :to="link.to || '/'"
            class="slider-block__link slider-block__link--mobile ps-semibold"
          >
            <span>{{ link.title }}</span>
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.5L0.749999 12.9952L0.75 0.00480889L12 6.5Z"
                fill="black"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'
import FsLightbox from 'fslightbox-vue'

import AppTitle from '@/components/AppTitle'

export default {
  name: 'AppSliderBlock',

  components: {
    AppTitle,
    FsLightbox,
  },

  data() {
    return {
      toggler: false,
    }
  },

  props: {
    titleMain: {
      type: String,
      required: true,
    },

    titleSecondary: {
      type: String,
      required: false,
      default: '',
    },

    subtitle: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: false,
      default: '',
    },

    link: {
      type: Object,
      required: true,
    },

    images: {
      type: Array,
      required: true,
    },

    text: {
      type: String,
      required: false,
      default: '',
    },
  },

  mounted() {
    new Swiper(this.$refs.slider, {
      autoplay: true,
      spaceBetween: 20,
      freeMode: true,
      breakpoints: {
        1024: {
          slidesPerView: 2.5,
        },

        320: {
          slidesPerView: 1.5,
          spaceBetween: 16,
        },
      },
    })
  },
}
</script>

<style scoped lang="scss">
.slider-block {
  position: relative;
  max-width: 1920px;
  margin: 0 auto;

  &__body {
    width: 50%;
    padding: 100px 0;
  }

  &__slider {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 490px;
    width: 50%;
  }

  &__title {
    margin-bottom: 20px;
  }

  &__slide {
    height: 100%;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:nth-child(odd) {
      padding-top: 90px;
    }

    &:nth-child(even) {
      padding-bottom: 90px;
    }
  }

  &__link {
    margin-top: 30px;
    display: flex;
    align-items: center;
    font-size: 25px;
    line-height: 38px;
    text-transform: uppercase;
    padding-bottom: 15px;
    position: relative;
    display: inline-block;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 140px;
      height: 1.5px;
      background-color: #000;
      transition: width 0.3s ease;
    }

    &:hover::before {
      width: 100%;
    }

    svg {
      margin-left: 23px;
    }
  }

  &__link--mobile {
    display: none;
  }

  &__text {
    font-size: 25px;
    line-height: 38px;
    padding-right: 80px;
  }
}

@media screen and (max-width: 1600px) {
  .slider-block {
    &__slider {
      height: 400px;
    }

    &__text {
      font-size: 22px;
      line-height: 35px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .slider-block {
    &__slider {
      height: 350px;
    }

    &__slide {
      &:nth-child(odd) {
        padding-top: 60px;
      }

      &:nth-child(even) {
        padding-bottom: 60px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .slider-block {
    .container {
      padding: 0;
    }

    &__title {
      font-size: 30px;
    }

    &__body {
      width: 100%;
      text-align: center;
      padding: 40px 15px;
    }

    &__slider {
      position: static;
      width: 100%;
      transform: none;
    }

    &__link {
      display: none;
    }

    &__link--mobile {
      display: inline-flex;
      margin-top: 40px;
    }

    &__slider {
      height: 300px;
    }

    &__text {
      padding-right: 0;
      text-align: left;
      font-size: 18px;
      line-height: 27px;
    }
  }
}

@media screen and (max-width: 576px) {
  .slider-block {
    &__link {
      font-size: 20px;
      padding-bottom: 8px;
    }
  }
}
</style>
