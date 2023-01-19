<template>
  <div class="div">
    <header class="header" ref="header">
      <div class="container">
        <div class="header__top" ref="headerTop">
          <button
            class="header__burger"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg
              width="26"
              height="19"
              viewBox="0 0 26 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M25.4483 1H0" stroke="white" />
              <path d="M25.4483 9.77441H0" stroke="white" />
              <path d="M9.16138 18H0" stroke="white" />
              <path d="M21.8855 18H12.7241" stroke="white" />
            </svg>
          </button>
          <NuxtLink class="header__logo" to="/">
            <img src="@/assets/img/logo.png" alt="" />
          </NuxtLink>
          <div class="header__right">
            <div class="no-flex">
              <a href="tel:+447488864715" class="header__phone ps-bold"
                >+44 7488864715</a
              >
              <a
                href="mailto:pgeat@outlook.com"
                class="header__email ps-regular"
                >pgeat@outlook.com</a
              >
            </div>
            <img src="@/assets/img/phone.png" alt="" />
          </div>
        </div>
        <div class="header__bottom" ref="headerBottom">
          <button
            class="header__burger"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg
              width="26"
              height="19"
              viewBox="0 0 26 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M25.4483 1H0" stroke="white" />
              <path d="M25.4483 9.77441H0" stroke="white" />
              <path d="M9.16138 18H0" stroke="white" />
              <path d="M21.8855 18H12.7241" stroke="white" />
            </svg>
          </button>
          <NuxtLink class="header__logo header__logo--bottom" to="/">
            <img src="@/assets/img/logo-black.png" alt="" />
          </NuxtLink>
          <div
            v-if="isMobileMenuOpen"
            class="header__menu-bg"
            @click="isMobileMenuOpen = false"
          ></div>
          <nav
            class="header__menu"
            :class="{ 'header__menu-open': isMobileMenuOpen }"
          >
            <button
              class="header__menu-close"
              @click="isMobileMenuOpen = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="#fff"
                  d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                />
              </svg>
            </button>
            <ul class="header__list">
              <li>
                <NuxtLink to="/" class="header__link ps-bold">HOME</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="header__link ps-bold"
                  >ABOUT</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/projects" class="header__link ps-bold"
                  >OUR PROJECTS</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/contacts" class="header__link ps-bold"
                  >CONTACT</NuxtLink
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',

  data() {
    return {
      isMobileMenuOpen: false,
    }
  },

  watch: {
    $route() {
      this.isMobileMenuOpen = false
    },
  },

  mounted() {
    this.fixHeader()
    window.addEventListener('scroll', this.fixHeader)
  },

  methods: {
    fixHeader() {
      const header = this.$refs.header
      const headerTop = this.$refs.headerTop

      // if (window.pageYOffset > headerTop.offsetHeight) {
      if (window.pageYOffset > headerTop.offsetHeight) {
        header.classList.add('sticky')
      } else {
        header.classList.remove('sticky')
      }
    },
  },
}
</script>

<style scoped lang="scss">
.no-flex {
  display: flex;
  flex-direction: column;
}
.nuxt-link-exact-active {
  opacity: 1 !important;
}
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  transition: 0.3s ease;
  z-index: 50;

  &__link {
    transition: 0.3s;
    opacity: 0.6;
  }

  &__link:hover {
    opacity: 1;
  }

  &.sticky {
    position: fixed;

    border-bottom: 0.5px solid #afafaf;
    color: #000;

    background-color: #fff;

    .header__top {
      position: absolute;
      left: 0;
      bottom: 100%;
    }

    .header__logo--bottom {
      opacity: 1;
      visibility: visible;
    }

    .header__link {
      color: #000;
      opacity: 0.5;
      transition: 0.3s;
    }

    .header__link:hover {
      opacity: 1;
    }
  }

  &__burger {
    display: none;
  }

  &__top {
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 22px;
    border-bottom: 0.5px solid #afafaf;
  }

  &__logo {
    width: 305px;
    img {
      display: block;
      max-width: 100%;
    }
  }

  &__logo--bottom {
    width: 260px;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease;
  }

  &__right {
    display: flex;
    align-items: center;
    text-align: right;

    img {
      margin-left: 12px;
    }
  }

  &__phone {
    font-size: 25px;
    line-height: 38px;
  }

  &__email {
    font-size: 15px;
    line-height: 22px;
    opacity: 0.5;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header__burger {
      display: none;
    }
  }

  &__menu-close {
    display: none;
  }

  &__menu-bg {
    display: none;
  }

  &__list {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
      flex-shrink: 0;
    }

    li + li {
      margin-left: 50px;
    }
  }

  &__link {
    display: block;
    padding: 40px 0;
    color: #fff;
  }
}

@media screen and (max-width: 1600px) {
  .header {
    &__logo {
      width: 270px;
    }

    &__top {
      padding-top: 24px;
    }

    &__link {
      padding: 40px 0;
    }
  }
}

@media screen and (max-width: 1024px) {
  .header {
    &__list {
      li + li {
        margin-left: 16px;
      }
    }

    &__logo--bottom {
      width: 175px;
    }

    &__link {
      padding: 32px 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .header {
    &.sticky {
      .header__link {
        color: #fff;
      }

      .header__burger {
        display: block;
      }
    }

    &__burger {
      display: block;
      position: relative;
      background-color: transparent;
      border: none;
      outline: none;
      position: absolute;
      left: 0;
    }

    &__top {
      border-bottom: 0px;
      transition: all 0.3s ease;
      position: relative;
    }

    &__right {
      display: none;
    }

    &__logo {
      width: 170px;
      margin: 0 auto;
    }

    &__bottom {
      padding: 16px 0;
      position: relative;

      .header__burger path {
        stroke: #000;
      }
    }

    &__menu {
      position: fixed;
      top: 0;
      left: -100%;
      right: 100%;
      width: 80%;
      min-width: 270px;
      height: 100%;
      background-color: #6b7280;
      padding: 24px;
      transition: all 0.3s ease;
      overflow: auto;
      z-index: 10;
    }

    &__menu-bg {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #130f4066;
      z-index: 1;
    }

    &__menu-open {
      left: 0;
      right: auto;
    }

    &__menu-close {
      display: block;
      background-color: transparent;
      border: none;
      outline: none;
      padding: 0;
    }

    &__list {
      display: block;

      li + li {
        margin-left: 0px;
      }
    }

    &__link {
      padding: 20px 0;
    }
  }
}
</style>
