<template>
  <div class="projects-about">
    <div class="container">
      <div class="projects-about__inner">
        <div class="projects-about__img">
          <div class="projects-about__img-inner">
            <img
              :src="foto ? foto : require('@/assets/img/not-found.jpg')"
              alt=""
            />
          </div>
        </div>
        <div class="projects-about__body">
          <ul class="projects-about__list">
            <li v-for="detail in details" :key="detail.id">
              {{ detail.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsInnerAbout',

  props: {
    foto: {
      type: String,
      required: false,
      default: '',
    },

    details: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="scss">
.projects-about {
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 200px;
  padding-bottom: 150px;
  background-image: url('@/assets/img/main-pattern.png');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 600px;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__img {
    background-color: var(--primary-color);
    width: 40%;
    height: 676px;
    position: relative;
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
    width: 50%;
  }

  &__list {
    li {
      list-style-type: disc;
    }
    list-style-type: disc;
    font-size: 21px;
    line-height: 67px;
  }
}

@media screen and (max-width: 1600px) {
  .projects-about {
    &__img {
      width: 35%;
      height: 500px;
    }

    &__body {
      width: 55%;
    }

    &__list {
      line-height: 40px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .projects-about {
    padding-top: 100px;
    padding-bottom: 100px;

    &__img {
      height: 300px;
    }
  }
}

@media screen and (max-width: 768px) {
  .projects-about {
    &__inner {
      display: block;
    }

    &__img {
      margin: 0 auto;
      width: 80%;
      transform: translateX(-8%);
      margin-bottom: 20px;
    }

    &__body {
      width: 100%;
      padding-left: 30px;
    }
  }
}

@media screen and (max-width: 576px) {
  .projects-about {
    padding-bottom: 70px;
    &__img {
      height: 250px;
    }

    &__body {
      padding-left: 15px;
    }

    &__list {
      font-size: 18px;
      line-height: 28px;
    }
  }
}
</style>
