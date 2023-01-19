<template>
  <div class="contacts-map">
    <div class="container">
      <div class="contacts-map__inner">
        <div class="contacts-map__left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.3237024266746!2d-0.08362530000000001!3d51.525622399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca55fcfa5e5%3A0x18b5f6c296424be2!2sOFFICE%2086%2C%2090%20Paul%20St%2C%20London%20EC2A%204NE%2C%20UK!5e0!3m2!1sen!2s!4v1656768879582!5m2!1sen!2s"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form class="contacts-map__form" @submit.prevent="onSubmit">
          <div class="contacts-map__form-group">
            <label for="name" class="contacts-map__form-label ps-semibold"
              >Your Name</label
            >
            <input
              v-model="name"
              required
              placeholder="Your Name"
              type="text"
              class="ps-regular"
              id="name"
            />
          </div>
          <div class="contacts-map__form-group">
            <label for="email" class="contacts-map__form-label ps-semibold"
              >Your Email</label
            >
            <input
              v-model="email"
              required
              placeholder="Your Email"
              type="email"
              class="ps-regular"
              id="email"
            />
          </div>
          <div class="contacts-map__form-group">
            <label for="message" class="contacts-map__form-label ps-semibold"
              >Comments</label
            >
            <textarea
              required
              v-model="message"
              placeholder="Your comments..."
              type="text"
              class="ps-regular"
              id="message"
            />
          </div>
          <AppButton
            title="Send message"
            fill
            class="contacts-map__form-btn"
            type="submit"
            :loading="loading"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import applicationsApi from '@/api/applications'

export default {
  name: 'ContactsMap',

  components: {
    AppButton,
  },

  data() {
    return {
      name: '',
      email: '',
      message: '',
      loading: false,
    }
  },

  methods: {
    async onSubmit() {
      this.loading = true

      const formData = {
        name: this.name,
        email: this.email,
        message: this.message,
      }

      const res = await applicationsApi.submitApplication(formData)
      this.loading = false

      if (res.status === 200) {
        this.$toast.success('Successfully sent')
      }

      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
}
</script>

<style scoped lang="scss">
.contacts-map {
  max-width: 1920px;
  position: relative;
  margin: 0 auto;
  min-height: 676px;
  padding-bottom: 140px;

  &__left {
    position: absolute;
    top: 0;
    left: 0;
    width: 660px;
    height: 676px;
    background-color: #ebcfa7;

    iframe {
      box-shadow: -35px 29px 65px rgba(0, 0, 0, 0.25);
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      top: -10%;
      right: -10%;
      border: 2px solid red;
    }
  }

  &__form {
    width: 50%;
    margin-left: auto;

    input,
    textarea {
      width: 100%;
      display: block;
      padding: 25px;
      font-size: 18px;
      line-height: 20px;
      color: #374151;
      border: 1px solid #d1d5db;
      border-radius: 5px;
    }

    textarea {
      height: 180px;
      resize: vertical;
    }
  }

  &__form-group {
    margin-bottom: 30px;
  }

  &__form-label {
    font-size: 20px;
    line-height: 20px;
    color: #374151;
    margin-bottom: 15px;
    display: block;
  }

  &__form-btn {
    margin-left: auto;
    width: 100%;
    max-width: 350px;
  }
}

@media screen and (max-width: 1600px) {
  .contacts-map {
    &__left {
      width: 40%;
      height: 550px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .contacts-map {
    &__left {
      width: 40%;
      height: 480px;
    }
  }
}

@media screen and (max-width: 768px) {
  .contacts-map {
    padding-bottom: 70px;

    &__left {
      margin: 0 auto;
      position: static;
      width: 88%;
      margin-bottom: 50px;
      height: 400px;

      iframe {
        top: -15%;
        left: 0;
        transform: scale(1.1);
      }
    }

    &__form {
      width: 100%;

      input,
      textarea {
        padding: 12px 20px;
        font-size: 15px;
        line-height: 20px;
      }
    }

    &__form-group {
      margin-bottom: 20px;
    }

    &__form-label {
      font-size: 18px;
      line-height: 20px;
    }

    &__form-btn {
      max-width: 220px;
      margin: 0 auto;
    }
  }
}

@media screen and (max-width: 576px) {
  .contacts-map {
    &__left {
      height: 220px;
      width: 92%;
    }
  }
}
</style>
