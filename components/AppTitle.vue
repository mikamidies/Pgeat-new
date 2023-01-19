<template>
  <div class="title" :class="{ 'title-light': light }">
    <h3 class="title__main aa-regular">
      {{ titleMain }}
      <span>{{ titleSecondary }}</span>
    </h3>
    <h4 class="title__subtitle ps-semibold">{{ subtitle }}</h4>
  </div>
</template>

<script>
export default {
  name: 'AppTitle',

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

    light: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
.title {
  &-light {
    .title__main {
      color: #ebcfa7;
      margin-bottom: 20px;
      span {
        color: #fff;
      }
    }

    .title__subtitle {
      color: #fff;
      line-height: 47px;
    }
  }

  &__main {
    font-size: 40px;
    line-height: 47px;
    color: #bf9f71;
    margin-bottom: 5px;

    span {
      color: #000;
    }
  }

  &__subtitle {
    font-size: 40px;
    line-height: 60px;
    color: #000;
  }
}

@media screen and (max-width: 1024px) {
  .title {
    &__main {
      font-size: 30px;
      line-height: 40px;
    }

    &__subtitle {
      font-size: 30px;
      line-height: 40px;
    }
  }
}

@media screen and (max-width: 576px) {
  .title {
    &__main {
      font-size: 25px;
      line-height: 30px;
      margin-bottom: 15px;
    }

    &__subtitle {
      font-size: 25px;
      line-height: 28px !important;
    }
  }
}
</style>
