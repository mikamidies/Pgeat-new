<template>
  <div class="modal" :class="{ 'modal--active': modal.value }">
    <div class="modal__bg" :class="{ 'modal__bg--active': modal.value }"></div>
    <div
      class="modal__wrapper"
      :class="{ 'modal__wrapper--active': modal.value }"
      @click="updateModal(false)"
    >
      <div class="modal__inner" @click.stop="">
        <button class="modal__close" @click="updateModal(false)">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.11133 1.07666L18.888 18.85M1.11133 18.85L18.888 1.07666"
              stroke="#374151"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <form class="modal__form" @submit.prevent="onSubmit">
          <div class="modal__form-group">
            <label for="name" class="modal__form-label ps-semibold"
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
          <div class="modal__form-group">
            <label for="email" class="modal__form-label ps-semibold"
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
          <div class="modal__form-group">
            <label for="message" class="modal__form-label ps-semibold"
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
            class="modal__form-btn"
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
  name: 'ModalForm',

  data() {
    return {
      name: '',
      email: '',
      message: '',
      loading: false,
    }
  },

  inject: ['modal', 'updateModal'],

  components: {
    AppButton,
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
        this.updateModal(false)
      }

      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;

  &--active {
    pointer-events: all;
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__bg--active {
    display: block;
  }

  &__wrapper {
    position: absolute;
    top: 0;
    right: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: right 0.5s ease;
  }

  &__wrapper--active {
    right: 0;
  }

  &__inner {
    background-color: #fff;
    padding: 110px 120px 70px 120px;
    position: relative;
    width: 100%;
    max-width: 1150px;
    overflow: auto;
    max-height: 100vh;
  }

  &__close {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 40px;
    right: 40px;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }

  &__form {
    width: 100%;
    max-width: 930px;
    margin: 0 auto;

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
  .modal {
    &__inner {
      padding: 70px 70px 50px 70px;
      max-width: 1000px;
    }

    &__form {
      input,
      textarea {
        padding: 20px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .modal {
    padding-bottom: 70px;

    &__close {
      top: 20px;
      right: 20px;
    }

    &__inner {
      padding: 40px 30px 20px 30px;
    }

    &__form {
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
  }
}

@media screen and (max-width: 576px) {
  .modal {
    &__form-btn {
      max-width: 220px;
      margin: 0 auto;
    }
  }
}
</style>
