<template>
  <div class="top">
    <div class="container">
      <div class="top__inner">
        <h1
          v-for="title in title"
          :key="title.title"
          class="top__title aa-regular"
        >
          {{ title.title }}
        </h1>
        <p
          v-for="subtitle in subtitle"
          :key="subtitle.subtitle"
          class="top__subtitle"
        >
          {{ subtitle.subtitle }}
        </p>
        <ul class="top__breadcrumb">
          <li>
            <NuxtLink class="top__link ps-medium" to="/">Home</NuxtLink>
          </li>
          <li v-for="link in links" :key="link.title">
            <NuxtLink
              v-if="link.to"
              class="top__link ps-medium"
              :to="link.to"
              >{{ link.title }}</NuxtLink
            >
            <p v-else class="top__link ps-medium">{{ link.title }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTop',

  props: {
    links: {
      type: Array,
      required: true,
    },
    title: {
      type: Array,
      required: true,
    },
    subtitle: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.top {
  height: 100%;
  background-image: url('@/assets/img/main-bg.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
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

  .container {
    height: 100%;
  }

  &__inner {
    padding-top: 325px;
    padding-bottom: 120px;
    position: relative;
    z-index: 5;
    height: 100%;
  }

  &__title {
    font-size: 100px;
    line-height: 118px;
    color: var(--primary-color);
    margin-bottom: 15px;
  }

  &__subtitle {
    font-size: 25px;
    line-height: 38px;
    color: #fff;
    max-width: 70%;
  }

  &__breadcrumb {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(50%);
    max-width: 1210px;
    background-color: #bf9f71;
    color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 56px 74px;

    li {
      &:not(:first-child) {
        padding-left: 50px;
      }

      &:not(:last-child) {
        padding-right: 63px;
        position: relative;

        &::after {
          content: '';
          width: 13px;
          height: 13px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          background-image: url('@/assets/img/circle.svg');
          background-size: contain;
          background-position: center center;
          background-repeat: no-repeat;
        }
      }
    }
  }

  &__link {
    font-size: 25px;
    line-height: 38px;
  }
}

@media screen and (max-width: 768px) {
  .top {
    text-align: center;

    &__inner {
      padding-top: 250px;
    }

    &__title {
      font-size: 70px;
      line-height: 90px;
    }

    &__subtitle {
      font-size: 20px;
      line-height: 30px;
      margin: 0 auto;
    }

    &__breadcrumb {
      padding: 40px 50px;
    }
  }
}

@media screen and (max-width: 576px) {
  .top {
    &__title {
      font-size: 50px;
      line-height: 55px;
    }

    &__subtitle {
      font-size: 16px;
      line-height: 24px;
    }

    &__breadcrumb {
      padding: 14px 21px;

      li {
        &:not(:first-child) {
          padding-left: 10px;
        }

        &:not(:last-child) {
          padding-right: 14px;

          &::after {
            width: 4px;
            height: 4px;
          }
        }
      }
    }

    &__link {
      font-size: 12px;
      line-height: 18px;
    }
  }
}
</style>
