<template>
  <section class="contact">
    <div class="container">
      <div class="contact__block" data-aos="fade-up" data-aos-duration="500">
        <AppTitle
          class="contact__block-title"
          light
          title-main="Phoenix Global Estate & Travel"
          title-secondary="Living Space"
          subtitle="Comfortable points for a great life around the UK"
        />
        <p class="contact__block-subtitle">
          If you are interested, just call us and get free consultation
        </p>
        <AppButton
          class="contact__block-btn"
          title="Shedule a visit"
          @click.native="updateModal(true)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppButton from '@/components/AppButton'

export default {
  name: 'TheContactBlock',

  inject: ['updateModal'],

  components: {
    AppTitle,
    AppButton,
  },
}
</script>

<style scoped lang="scss">
.contact {
  background-image: url('@/assets/img/contact-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 300px;

  &__block {
    background-color: #9f8054;
    max-width: 660px;
    padding: 110px 80px 90px 60px;
    box-shadow: -35px 45px 65px rgba(0, 0, 0, 0.25);
    position: relative;
    bottom: -120px;
  }

  &__block-title {
    margin-bottom: 30px;
  }

  &__block-subtitle {
    font-size: 25px;
    line-height: 38px;
    margin-bottom: 30px;
    color: #fff;
  }

  &__block-btn {
    width: 100%;
    max-width: 420px;
  }
}

@media screen and (max-width: 1024px) {
  .contact {
    margin-bottom: 400px;
  }
}

@media screen and (max-width: 768px) {
  .contact {
    &__block {
      text-align: center;
    }

    &__block-btn {
      margin: 0 auto;
    }
  }
}

@media screen and (max-width: 576px) {
  .contact {
    &__block {
      padding: 48px 24px 60px 24px;
    }

    &__block-title {
      margin-bottom: 20px;
    }

    &__block-subtitle {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
