<template>
  <section class="main-block-2">
    <div class="container">
      <div class="main-block__inner">
        <div class="main-block__img" data-aos="fade-up" data-aos-duration="500">
          <div class="main-block__img-inner">
            <img src="@/assets/img/main-block-2.jpg" alt="" />
          </div>
        </div>
        <div class="main-block__body">
          <AppTitle
            title-main="Attractive prices,"
            title-secondary="great location"
            subtitle="and friendly neighbors"
            class="main-block__title"
          />
          <p class="main-block__subtitle">
            are the most important factors for a comfortable life
          </p>
          <NuxtLink to="/projects" class="main-block__link ps-semibold">
            <img src="@/assets/img/m2.png" alt="" />
            <span>See our projects</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppTitle from '@/components/AppTitle'

export default {
  name: 'MainBlock2',

  components: {
    AppTitle,
  },
}
</script>

<style scoped lang="scss">
.main-block-2 {
  max-width: 1920px;
  margin: 0 auto;
  padding-bottom: 300px;
  margin-top: 150px;
  position: relative;
}

.main-block-2 .main-block {
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
    // position: relative;
    z-index: 25;
    position: absolute;
    top: 0;
    left: 0;
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
    padding: 80px 0;
    width: 48%;
    margin-left: auto;
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
      width: 40px;
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
      -webkit-transform: translate3d(-50%, 0, 0);
      -moz-transform: translate3d(-50%, 0, 0);
      -ms-transform: translate3d(-50%, 0, 0);
      transform: translate3d(-50%, 0, 0);
    }
  }
}

@media screen and (max-width: 1600px) {
  .main-block-2 {
    padding-bottom: 140px;
  }

  .main-block-2 .main-block {
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
  .main-block-2 {
    margin-top: 150px;
  }

  .main-block-2 .main-block {
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
  .main-block-2 {
    background-image: none;
    padding-bottom: 40px;

    .container {
      padding: 0;
    }
  }

  .main-block-2 .main-block {
    &__inner {
      display: block;
    }

    &__img {
      position: static;
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
  .main-block-2 .main-block {
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
