<template>
  <div class="main-block-1">
    <div class="container">
      <div class="main-block__inner">
        <div class="main-block__img" data-aos="fade-up" data-aos-duration="500">
          <div class="main-block__img-inner">
            <img src="@/assets/img/main-block-1.jpg" alt="" />
          </div>
        </div>
        <div class="main-block__body">
          <AppTitle
            title-main="Phoenix Global Estate & Travel"
            title-secondary="LLC"
            subtitle="Living spaces for creative people"
            class="main-block__title"
          />
          <p class="main-block__subtitle">
            Our company create interminable opportunities, if you are looking
            for a house, villa or apartment in the most accessible points of UK
            cities, our company will be proud to help you with this issue
          </p>
          <NuxtLink to="/projects" class="main-block__link ps-semibold">
            <img src="@/assets/img/m2.png" alt="" />
            <span>See our projects</span>
          </NuxtLink>
        </div>
      </div>
      <div class="main-block__slider">
        <div class="main-block__slider-container">
          <div
            class="main-block__slider-content-wrapper"
            :class="{ play: partners.length > 3 }"
          >
            <div class="main-block__slider-inner">
              <div
                v-for="partner in partners"
                :key="partner.id"
                class="main-block__slide"
              >
                <img :src="partner.img" alt="" />
              </div>
            </div>
            <div v-if="partners.length > 3" class="main-block__slider-inner">
              <div
                v-for="partner in partners"
                :key="partner.id"
                class="main-block__slide"
              >
                <img :src="partner.img" alt="" />
              </div>
            </div>
            <div v-if="partners.length > 3" class="main-block__slider-inner">
              <div
                v-for="partner in partners"
                :key="partner.id"
                class="main-block__slide"
              >
                <img :src="partner.img" alt="" />
              </div>
            </div>
            <div v-if="partners.length > 3" class="main-block__slider-inner">
              <div
                v-for="partner in partners"
                :key="partner.id"
                class="main-block__slide"
              >
                <img :src="partner.img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import AppTitle from '@/components/AppTitle'

export default {
  name: 'MainBlock1',

  props: {
    partners: {
      type: Array,
      required: true,
    },
  },

  components: {
    AppTitle,
  },

  mounted() {
    AOS.init({})
  },
}
</script>

<style scoped lang="scss">
.main-block-1 {
  max-width: 1920px;
  margin: 0 auto;
  background-image: url('@/assets/img/main-pattern.png');
  background-repeat: no-repeat;
  background-position: center left;
  padding-bottom: 140px;
}

.main-block-1 .main-block {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  &__img {
    background-color: var(--primary-color);
    width: 40%;
    height: 830px;
    position: relative;
    margin-top: -5%;
    z-index: 25;
  }

  &__img-inner {
    z-index: 20;
    position: relative;
    right: -15%;
    top: -10%;
    width: 100%;
    height: 100%;
    box-shadow: -35px 29px 65px rgba(0, 0, 0, 0.25);

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__body {
    padding: 16px 0;
    width: 48%;
  }

  &__title {
    margin-bottom: 30px;
  }

  &__subtitle {
    font-size: 25px;
    line-height: 38px;
    margin-bottom: 50px;
  }

  &__link {
    font-size: 25px;
    line-height: 38px;
    display: flex;
    align-items: center;

    img {
      width: 50px;
      margin-right: 30px;
    }
  }

  &__slider-container {
    overflow: hidden;
    white-space: nowrap;

    &:not(:last-of-type) {
      margin-bottom: 48px;
    }
  }

  &__slider-content-wrapper {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    position: relative;

    &.play {
      -webkit-animation: slide 20s linear infinite;
      animation: slide 20s linear infinite;
    }
  }

  &__slider-inner {
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    margin-right: -5px;
  }

  &__slider-inner:last-child {
    margin-right: 0;
  }

  &__slide {
    width: 280px;
    height: 80px;
    display: inline-flex;
    padding: 0 50px;
    outline: none;
    cursor: default;
    -webkit-transition: opacity 0.2s ease;
    transition: opacity 0.2s ease;
    margin-right: -5px;
    align-items: center;
    justify-content: center;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @keyframes slide {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-25%, 0, 0);
      -moz-transform: translate3d(-25%, 0, 0);
      -ms-transform: translate3d(-25%, 0, 0);
      transform: translate3d(-25%, 0, 0);
    }
  }
}

@media screen and (max-width: 1600px) {
  .main-block-1 .main-block {
    &__img {
      width: 35%;
      height: 600px;
    }

    &__body {
      width: 55%;
    }
  }
}

@media screen and (max-width: 1024px) {
  .main-block-1 .main-block {
    &__inner {
      margin-bottom: 70px;
    }

    &__img {
      width: 40%;
      height: 450px;
    }

    &__body {
      width: 50%;
    }

    &__title {
      margin-bottom: 16px;
    }

    &__subtitle {
      margin-bottom: 32px;
      font-size: 22px;
    }

    &__link {
      font-size: 22px;

      img {
        width: 50px;
        margin-right: 20px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .main-block-1 {
    background-image: none;
    padding-bottom: 60px;

    .container {
      padding: 0;
    }
  }

  .main-block-1 .main-block {
    &__inner {
      display: block;
    }

    &__img {
      height: 350px;
      width: 70%;
      margin: 0 auto;
      margin-top: -5%;
      transform: translateX(-10%);
      margin-bottom: 24px;
    }

    &__body {
      width: 100%;
      text-align: center;
      padding: 0 16px;
    }

    &__link {
      justify-content: center;
    }
  }
}

@media screen and (max-width: 576px) {
  .main-block-1 .main-block {
    &__inner {
      margin-bottom: 50px;
    }

    &__img {
      height: 300px;
      width: 80%;
    }

    &__subtitle {
      font-size: 17px;
      line-height: 26px;
    }

    &__slider-container {
      &:not(:last-of-type) {
        margin-bottom: 24px;
      }
    }

    &__slide {
      width: 240px;
      height: 50px;
      padding: 0 20px;
    }
  }
}
</style>
