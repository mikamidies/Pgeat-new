<template>
  <div class="project-variants">
    <div class="container">
      <div class="project-variants__inner">
        <div class="project-variants__left">
          <AppTitle
            class="project-variants__title"
            :title-main="activeApartment && activeApartment.name"
            title-secondary="Living Spaces"
            subtitle="Decorated Flats"
          />
          <p
            class="project-variants__subtitle"
            v-html="activeApartment && activeApartment.about"
          ></p>
          <div class="project-variants__left-tabs">
            <button
              v-for="item in apartments"
              :key="item.id"
              class="project-variants__left-tab ps-semibold"
              :class="{
                'project-variants__left-tab--active': activeTab === item.id,
              }"
              @click="activeTab = item.id"
            >
              {{ item.title }}
            </button>
          </div>
          <div class="project-variants__lists">
            <ul class="project-variants__list">
              <li
                v-for="item in activeApartment && activeApartment.details"
                :key="item.id"
                class="ps-semibold"
              >
                {{ item.name }}
              </li>
            </ul>
            <ul class="project-variants__list">
              <li
                v-for="item in activeApartment && activeApartment.details"
                :key="item.id"
              >
                {{ item.value }}
              </li>
            </ul>
          </div>
        </div>
        <div
          v-if="activeApartment && activeApartment.floors.length"
          class="project-variants__right"
        >
          <div>
            <Tabs :key="activeApartment.id" :theme="theme">
              <TabItem
                v-for="floor in activeApartment.floors"
                :key="floor.id"
                :name="`${floor.number}-floor`"
              >
                <div class="project-variants__right-img">
                  <img :src="floor.plan" alt="" />
                </div>
              </TabItem>
            </Tabs>
          </div>
        </div>
        <div class="project-variants__lists project-variants__lists--mobile">
          <ul class="project-variants__list">
            <li class="ps-semibold">Total Area</li>
            <li class="ps-semibold">Total Floor</li>
            <li class="ps-semibold">Parking Lot</li>
            <li class="ps-semibold">Social Area</li>
          </ul>
          <ul class="project-variants__list">
            <li>680 metre square</li>
            <li>24 Floor</li>
            <li>5 Large</li>
            <li>860 m2</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs, TabItem } from 'vue-material-tabs'
import AppTitle from '@/components/AppTitle'

export default {
  name: 'ProjectsInnerVariants',
  components: {
    AppTitle,
    Tabs,
    TabItem,
  },

  props: {
    apartments: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      theme: {
        navItem: '#000 ',
        navActiveItem: '#000',
        slider: '#000',
        arrow: '#000',
      },
      activeTab: 1,
    }
  },

  computed: {
    activeApartment() {
      return this.apartments.find(
        (apartment) => apartment.id === this.activeTab
      )
    },
  },

  mounted() {
    this.activeTab = this.apartments[0].id
  },
}
</script>

<style scoped lang="scss">
.project-variants {
  max-width: 1920px;
  margin: 0 auto;
  background-image: url('@/assets/img/main-pattern.png');
  background-repeat: no-repeat;
  background-position: -200px center;
  padding: 110px 0;

  &__inner {
    display: flex;
  }

  &__left,
  &__right {
    width: 50%;
  }

  &__left {
    padding-right: 60px;
    // min-height: 650px;
  }

  &__title {
    margin-bottom: 45px;
  }

  &__subtitle {
    font-size: 25px;
    line-height: 38px;
    margin-bottom: 36px;
  }

  &__left-tabs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 59px;
  }

  &__left-tab {
    width: 140px;
    font-size: 20px;
    line-height: 30px;
    padding: 20px 0;
    border: 2px solid #bf9f71;
    outline: none;
    color: #bf9f71;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 15px;

    &:not(:last-child) {
      margin-right: 22px;
    }

    &:hover,
    &--active {
      background-color: #bf9f71;
      color: #fff;
    }
  }

  &__lists {
    display: flex;
    align-items: center;
  }

  &__lists--mobile {
    display: none;
  }

  &__list {
    &:first-child {
      margin-right: 75px;
      font-size: 25px;
      line-height: 38px;
      color: #bf9f71;
    }

    &:last-child {
      font-size: 25px;
      line-height: 38px;
    }

    li {
      margin-bottom: 30px;
    }
  }

  &__right-img {
    padding-top: 60px;
    img {
      display: block;
      max-width: 100%;
    }
  }
}

@media screen and (max-width: 1024px) {
  .project-variants {
    background-image: none;

    &__inner {
      display: block;
    }

    &__left {
      width: 100%;
      text-align: center;
      padding-right: 0;
    }

    &__left-tabs {
      justify-content: center;
    }

    &__lists {
      display: none;
    }

    &__lists--mobile {
      display: flex;
      justify-content: space-between;
    }

    &__list:last-child {
      text-align: right;
    }

    &__right {
      width: 100%;
      margin-bottom: 36px;
    }

    &__right-img img {
      margin: 0 auto;
    }
  }
}

@media screen and (max-width: 768px) {
  .project-variants {
    &__list {
      &:first-child {
        font-size: 20px;
        line-height: 34px;
      }

      &:last-child {
        font-size: 20px;
        line-height: 34px;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .project-variants {
    padding: 50px 0;

    &__title {
      margin-bottom: 36px;
    }

    &__left-tabs {
      margin-bottom: 40px;
    }

    &__left-tab {
      width: 85px;
      padding: 7px;
      font-size: 12px;
      line-height: 18px;

      &:not(:last-child) {
        margin-right: 14px;
      }
    }

    &__subtitle {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 30px;
    }

    &__right-img {
      padding-top: 40px;
    }

    &__list {
      &:first-child {
        font-size: 16px;
        line-height: 24px;
      }

      &:last-child {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}
</style>

<style lang="scss">
.project-variants {
  .vmt__nav__item {
    font-weight: 600 !important;
    letter-spacing: 0px !important;
    text-transform: initial !important;
    font-size: 20px;
    line-height: 30px;
    padding-bottom: 10px !important;
    white-space: nowrap !important;
    &:not(:last-child) {
      margin-right: 30px !important;
    }
  }

  .vmt__nav__item.active {
    color: #000 !important;
  }
}

@media screen and (max-width: 576px) {
  .project-variants {
    .vmt__nav__item {
      font-size: 11px !important;
      line-height: 16px !important;

      &:not(:last-child) {
        margin-right: 10px !important;
      }
    }
  }
}
</style>
