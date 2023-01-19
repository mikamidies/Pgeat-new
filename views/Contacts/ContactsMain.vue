<template>
  <div class="contacts-main">
    <div class="container">
      <div class="contacts-main__inner">
        <!-- <AppTitle
          class="CONTACT OUR TEAM"
          title-main="FOR PRODUCT-RELATED QUESTIONS"
          title-secondary="Living Spaces"
          subtitle="AND INQUIRIES"
        /> -->
        <div class="texto">
          <p class="text">
            CONTACT OUR TEAM FOR PRODUCT-RELATED QUESTIONS AND INQUIRIES.
          </p>
        </div>
        <div class="contacts-main__right">
          <div class="contacts-main__item">
            <h6 class="ps-semibold">Visit Us</h6>
            <p class="ps-regular">
              Address-86-90 Paul street EC2A 4NE, London, United Kingdom.
            </p>
          </div>
          <!-- <div class="contacts-main__item">
            <h6 class="ps-semibold">Visit Us</h6>
            <p class="ps-regular">
              Kristiatik 15th Street, Floot 17 Kiev, Ukraine 78692
            </p>
          </div>
          <div class="contacts-main__item">
            <h6 class="ps-semibold">Visit Us</h6>
            <p class="ps-regular">
              Kristiatik 15th Street, Floot 17 Kiev, Ukraine 78692
            </p>
          </div>
          <div class="contacts-main__item">
            <h6 class="ps-semibold">Visit Us</h6>
            <p class="ps-regular">
              Kristiatik 15th Street, Floot 17 Kiev, Ukraine 78692
            </p>
          </div>
          <div class="contacts-main__item">
            <h6 class="ps-semibold">Visit Us</h6>
            <p class="ps-regular">
              Kristiatik 15th Street, Floot 17 Kiev, Ukraine 78692
            </p>
          </div>
          <div class="contacts-main__item">
            <h6 class="ps-semibold">Visit Us</h6>
            <p class="ps-regular">
              Kristiatik 15th Street, Floot 17 Kiev, Ukraine 78692
            </p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import AppTitle from '@/components/AppTitle'

export default {
  name: 'ContactsMain',
  components: {
    // AppTitle,
  },
}
</script>

<style scoped lang="scss">
.texto {
  width: 50%;
}
.text {
  font-size: 28px;
  font-weight: 500;
  line-height: 150%;
  max-width: 80%;
}
.contacts-main {
  padding: 200px 0;

  &__inner {
    display: flex;
    justify-content: space-between;
  }

  &__right {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    justify-content: space-between;
  }

  &__item {
    width: calc(50% - 15px);
    max-width: 360px;
    margin-bottom: 25px;

    h6 {
      font-size: 25px;
      line-height: 38px;
      margin-bottom: 4px;
    }

    p {
      font-size: 24px;
      line-height: 36px;
      max-width: 320px;
    }
  }
}

@media screen and (max-width: 1600px) {
  .contacts-main {
    &__item {
      h6 {
        font-size: 23px;
        line-height: 35px;
      }

      p {
        font-size: 22px;
        line-height: 34px;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .contacts-main {
    &__item {
      h6 {
        font-size: 20px;
        line-height: 35px;
      }

      p {
        font-size: 18px;
        line-height: 34px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .contacts-main {
    &__inner {
      flex-direction: column;
    }

    &__title {
      margin-bottom: 40px;
    }

    &__right {
      width: 100%;
    }
  }
}

@media screen and (max-width: 576px) {
  .contacts-main {
    padding: 80px 0;

    &__title {
      text-align: center;
    }

    &__right {
      justify-content: center;
    }

    &__item {
      width: 100%;
      text-align: center;

      h6 {
        line-height: 30px;
      }

      p {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }
}
</style>
