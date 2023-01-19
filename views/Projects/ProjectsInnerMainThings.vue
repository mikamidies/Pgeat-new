<template>
  <div class="project-main">
    <div class="container">
      <AppTitle
        class="project-main__title"
        :title-main="title"
        title-secondary="Living Spaces"
        subtitle="Living Spaces"
      />
      <div class="project-main__items">
        <div v-for="item in items" :key="item.id" class="project-main__item">
          <img :src="item.icon" alt="" />
          <p class="ps-semibold">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'

export default {
  name: 'ProjectsInnerMainThings',

  props: {
    items: {
      type: Array,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },

  components: {
    AppTitle,
  },
}
</script>

<style scoped lang="scss">
.project-main {
  padding: 60px 0 108px 0;

  &__title {
    margin-bottom: 40px;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
  }

  &__item {
    width: calc(100% / 6 - 15px);
    margin-left: 15px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    padding: 20px 5px 20px 20px;
    font-size: 22px;
    line-height: 33px;
    text-transform: capitalize;
    border: 1px solid #ebcfa7;

    img {
      display: block;
      max-width: 45px;
      margin-right: 30px;
    }
  }
}

@media screen and (max-width: 1600px) {
  .project-main {
    &__item {
      font-size: 18px;
      line-height: 30px;

      img {
        margin-right: 20px;
      }
    }
  }
}

@media screen and (max-width: 1300px) {
  .project-main {
    &__item {
      width: calc(100% / 5 - 15px);
    }
  }
}

@media screen and (max-width: 1100px) {
  .project-main {
    &__item {
      width: calc(100% / 4 - 15px);
    }
  }
}

@media screen and (max-width: 900px) {
  .project-main {
    padding-top: 0;
    &__item {
      width: calc(100% / 3 - 15px);
    }
  }
}

@media screen and (max-width: 700px) {
  .project-main {
    padding-bottom: 50px;
    &__title {
      text-align: center;
    }

    &__item {
      width: calc(100% / 2 - 15px);
      font-size: 15px;
      line-height: 22px;
      padding: 15px 5px 15px 15px;

      img {
        max-width: 30px;
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .project-main {
    &__item {
      width: 100%;
      justify-content: center;
    }
  }
}
</style>
