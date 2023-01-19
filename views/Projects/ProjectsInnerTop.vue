<template>
  <div class="projects-top" :style="{ 'background-image': `url(${image})` }">
    <div class="container">
      <div class="projects-top__inner">
        <h1 class="projects-top__title aa-regular">{{ title }}</h1>
        <p class="projects-top__subtitle ps-bold">We build your dream house</p>
        <AppButton
          class="main-top__slide-btn"
          title="GET A CONSULTATION"
          light
          @click.native="handleClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'ProjectsInnerTop',

  inject: ['updateModal'],

  props: {
    image: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },

  components: {
    AppButton,
  },

  methods: {
    handleClick() {
      this.updateModal(true)
    },
  },
}
</script>

<style scoped lang="scss">
.projects-top {
  height: 100vh;
  max-height: 1080px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container,
  &__inner {
    height: 100%;
  }

  &__inner {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 8%;
  }

  &__title {
    font-size: 100px;
    line-height: 118px;
    color: #ebcfa7;
    margin-bottom: 22px;
  }

  &__subtitle {
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 46px;
    color: #fff;
  }

  &__btn {
    width: 100%;
    max-width: 526px;
  }
}

@media screen and (max-width: 768px) {
  .projects-top {
    &__title {
      font-size: 70px;
      line-height: 90px;
    }
  }
}

@media screen and (max-width: 676px) {
  .projects-top {
    &__title {
      font-size: 35px;
      line-height: 45px;
      margin-bottom: 20px;
    }

    &__subtitle {
      font-size: 18px;
      line-height: 27px;
      margin-bottom: 20px;
    }

    &__btn {
      max-width: 268px;
    }
  }
}
</style>
