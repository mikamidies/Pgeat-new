<template>
  <div class="main-top">
    <div class="main-top__slider swiper" ref="slider">
      <div class="swiper-wrapper">
        <div
          class="main-top__slide swiper-slide"
          :style="{
            'background-image': `url(${require('@/assets/img/main-bg.jpg')})`,
          }"
        >
          <div class="main-top__slide-body container">
            <h1 class="main-top__slide-title aa-regular">
              Oxiform Luxury Residence
            </h1>
            <p class="main-top__slide-subtitle ps-bold">
              We build your dream house
            </p>
          </div>
        </div>
        <div
          class="main-top__slide swiper-slide"
          :style="{
            'background-image': `url(${require('@/assets/img/main-bg-2.jpeg')})`,
          }"
        >
          <div class="main-top__slide-body container">
            <h1 class="main-top__slide-title aa-regular">
              Oxiform Luxury Residence
            </h1>
            <p class="main-top__slide-subtitle ps-bold">
              We build your dream house
            </p>
          </div>
        </div>
        <div
          class="main-top__slide swiper-slide"
          :style="{
            'background-image': `url(${require('@/assets/img/main-bg-3.jpeg')})`,
          }"
        >
          <div class="main-top__slide-body container">
            <h1 class="main-top__slide-title aa-regular">
              Oxiform Luxury Residence
            </h1>
            <p class="main-top__slide-subtitle ps-bold">
              We build your dream house
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="main-top__wrapper">
      <div class="container">
        <div class="main-top__inner">
          <div class="main-top__social">
            <p class="main-top__social-title ps-bold">SOCIAL MEDIA</p>
            <div class="main-top__social-border"></div>
            <div class="main-top__social-items">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="main-top__social-item"
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 14.991 3.657 19.128 8.438 19.878V12.891H5.898V10H8.438V7.797C8.438 5.291 9.93 3.907 12.215 3.907C13.309 3.907 14.453 4.102 14.453 4.102V6.562H13.193C11.95 6.562 11.563 7.333 11.563 8.124V10H14.336L13.893 12.89H11.563V19.878C16.343 19.128 20 14.991 20 10Z"
                    fill="white"
                  /></svg
              ></a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                class="main-top__social-item"
              >
                <img src="@/assets/img/elon-musk.svg" alt="" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                class="main-top__social-item"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.315 2C14.745 2 15.099 2.013 16.123 2.06C17.187 2.109 17.914 2.278 18.55 2.525C19.2175 2.77587 19.8222 3.16936 20.322 3.678C20.8306 4.17777 21.2241 4.7825 21.475 5.45C21.722 6.086 21.891 6.813 21.94 7.877C21.988 8.944 22 9.284 22 12V12.08C22 14.723 21.988 15.067 21.94 16.123C21.891 17.187 21.722 17.914 21.475 18.55C21.2241 19.2175 20.8306 19.8222 20.322 20.322C19.8222 20.8306 19.2175 21.2241 18.55 21.475C17.914 21.722 17.187 21.891 16.123 21.94C15.056 21.988 14.716 22 12 22H11.92C9.277 22 8.933 21.988 7.877 21.94C6.813 21.891 6.086 21.722 5.45 21.475C4.7825 21.2241 4.17777 20.8306 3.678 20.322C3.16936 19.8222 2.77587 19.2175 2.525 18.55C2.278 17.914 2.109 17.187 2.06 16.123C2.013 15.099 2 14.744 2 12.315V11.685C2 9.255 2.013 8.901 2.06 7.877C2.109 6.813 2.278 6.086 2.525 5.45C2.77587 4.7825 3.16936 4.17777 3.678 3.678C4.17777 3.16936 4.7825 2.77587 5.45 2.525C6.086 2.278 6.813 2.109 7.877 2.06C8.901 2.013 9.256 2 11.685 2H12.315ZM12.234 3.802H11.766C9.31 3.802 8.982 3.813 7.959 3.86C6.984 3.905 6.455 4.067 6.102 4.204C5.635 4.386 5.302 4.602 4.952 4.952C4.602 5.302 4.386 5.635 4.204 6.102C4.067 6.455 3.904 6.984 3.86 7.959C3.813 8.982 3.802 9.31 3.802 11.766V12.234C3.802 14.69 3.813 15.018 3.86 16.041C3.905 17.016 4.067 17.545 4.204 17.898C4.386 18.364 4.603 18.698 4.952 19.048C5.302 19.398 5.635 19.614 6.102 19.796C6.455 19.933 6.984 20.096 7.959 20.14C9.013 20.188 9.329 20.198 12 20.198H12.08C14.677 20.198 14.997 20.188 16.04 20.14C17.016 20.095 17.545 19.933 17.898 19.796C18.364 19.614 18.698 19.398 19.048 19.048C19.398 18.698 19.614 18.365 19.796 17.898C19.933 17.545 20.096 17.016 20.14 16.041C20.188 14.986 20.198 14.671 20.198 12V11.92C20.198 9.323 20.188 9.003 20.14 7.96C20.095 6.984 19.933 6.455 19.796 6.102C19.6358 5.66757 19.3802 5.2746 19.048 4.952C18.7254 4.61986 18.3324 4.36426 17.898 4.204C17.545 4.067 17.016 3.904 16.041 3.86C15.018 3.813 14.69 3.802 12.234 3.802ZM12 6.865C12.6743 6.865 13.3421 6.99782 13.9651 7.25588C14.5881 7.51394 15.1542 7.89218 15.631 8.36901C16.1078 8.84584 16.4861 9.41191 16.7441 10.0349C17.0022 10.6579 17.135 11.3257 17.135 12C17.135 12.6743 17.0022 13.3421 16.7441 13.9651C16.4861 14.5881 16.1078 15.1542 15.631 15.631C15.1542 16.1078 14.5881 16.4861 13.9651 16.7441C13.3421 17.0022 12.6743 17.135 12 17.135C10.6381 17.135 9.33201 16.594 8.36901 15.631C7.40601 14.668 6.865 13.3619 6.865 12C6.865 10.6381 7.40601 9.33201 8.36901 8.36901C9.33201 7.40601 10.6381 6.865 12 6.865ZM12 8.667C11.116 8.667 10.2683 9.01815 9.64321 9.64321C9.01815 10.2683 8.667 11.116 8.667 12C8.667 12.884 9.01815 13.7317 9.64321 14.3568C10.2683 14.9818 11.116 15.333 12 15.333C12.884 15.333 13.7317 14.9818 14.3568 14.3568C14.9818 13.7317 15.333 12.884 15.333 12C15.333 11.116 14.9818 10.2683 14.3568 9.64321C13.7317 9.01815 12.884 8.667 12 8.667ZM17.338 5.462C17.6563 5.462 17.9615 5.58843 18.1865 5.81347C18.4116 6.03852 18.538 6.34374 18.538 6.662C18.538 6.98026 18.4116 7.28548 18.1865 7.51053C17.9615 7.73557 17.6563 7.862 17.338 7.862C17.0197 7.862 16.7145 7.73557 16.4895 7.51053C16.2644 7.28548 16.138 6.98026 16.138 6.662C16.138 6.34374 16.2644 6.03852 16.4895 5.81347C16.7145 5.58843 17.0197 5.462 17.338 5.462Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="main-top__slider-btns">
            <button
              class="main-top__slider-btn main-top__slider-btn-prev ps-bold"
            >
              prev
            </button>
            <div class="main-top__social-border"></div>
            <button
              class="main-top__slider-btn main-top__slider-btn-next ps-bold"
            >
              next
            </button>
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

export default {
  name: 'MainTop',

  inject: ['updateModal'],

  components: {},

  mounted() {
    new Swiper(this.$refs.slider, {
      autoplay: true,
      slidesPerView: 1,
      allowTouchMove: false,
      direction: 'vertical',
      navigation: {
        nextEl: '.main-top__slider-btn-next',
        prevEl: '.main-top__slider-btn-prev',
      },
    })
  },

  methods: {
    handleClick() {
      this.updateModal(true)
    },
  },
}
</script>

<style scoped lang="scss">
.main-top {
  height: 100vh;
  min-height: 700px;
  max-height: 1080px;
  position: relative;

  &__slider {
    min-height: 700px;
    height: 100vh;
    max-height: 1080px;
    position: relative;
    // z-index: 10;
  }

  &__slide {
    width: 100%;
    min-height: 700px;
    max-height: 1080px;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  &__slide-body {
    position: relative;
    z-index: 10;
    width: 100%;
    padding-left: 140px;
  }

  &__slide-title {
    color: var(--primary-color);
    font-size: 100px;
    line-height: 118px;
    margin-bottom: 22px;
  }

  &__slide-subtitle {
    color: #fff;
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 45px;
  }

  &__slide-btn {
    width: 100%;
    max-width: 525px;
  }

  &__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    min-height: 700px;
    height: 100vh;
    max-height: 1080px;
    pointer-events: none;
  }

  &__inner {
    position: relative;
    height: 100vh;
    min-height: 700px;
    max-height: 1080px;
  }

  &__social {
    display: flex;
    align-items: center;
    position: absolute;
    left: -10%;
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
    pointer-events: all;
  }

  &__social-title {
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }

  &__social-border {
    height: 0.5px;
    background-color: #fff;
    width: 50px;
    margin: 0 20px;
  }

  &__social-items {
    display: flex;
  }

  &__social-item {
    display: block;
    transform: rotate(-90deg);

    & + & {
      margin-left: 20px;
    }
  }

  &__slider-btns {
    display: flex;
    align-items: center;
    position: absolute;
    right: -5%;
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
    pointer-events: all;
  }

  &__slider-btn {
    background-color: transparent;
    outline: none;
    border: none;
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    cursor: pointer;
  }
}

@media screen and (max-width: 1600px) {
  .main-top {
    &__slide-title {
      font-size: 70px;
      line-height: 90px;
      margin-bottom: 16px;
    }
    &__slide-subtitle {
      font-size: 24px;
    }
    &__slide-btn {
      width: 420px;
      padding: 14px;
    }
  }
}

@media screen and (max-width: 1400px) {
  .main-top {
    &__slide-title {
      font-size: 80px;
      line-height: 100px;
    }

    &__social {
      left: -13%;
    }
  }
}

@media screen and (max-width: 1024px) {
  .main-top {
    &__slide-title {
      font-size: 65px;
      line-height: 80px;
    }
    &__social {
      left: -15%;
    }
  }
}

@media screen and (max-width: 768px) {
  .main-top {
    &__social {
      display: none;
    }

    &__slide-body {
      padding-left: 24px;
    }

    &__slider-btns {
      top: initial;
      right: auto;
      bottom: 15%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

@media screen and (max-width: 576px) {
  .main-top {
    &__slide-title {
      font-size: 40px;
      line-height: 50px;
    }

    &__slide-subtitle {
      font-size: 18px;
      line-height: 27px;
    }

    &__slide-btn {
      width: 268px;

      ::v-deep svg {
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>
