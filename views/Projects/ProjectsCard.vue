<template>
  <div class="card">
    <router-link :to="`/projects/${data.id}`">
      <div style="position: relative">
        <div class="card__img">
          <img
            :src="
              data.main_photo
                ? data.main_photo
                : require('@/assets/img/not-found.jpg')
            "
            alt=""
          />
          <div class="card__btn">
            <svg
              width="34"
              height="26"
              viewBox="0 0 34 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7503 13C21.7503 15.6233 19.6237 17.75 17.0003 17.75C14.377 17.75 12.2503 15.6233 12.2503 13C12.2503 10.3766 14.377 8.24996 17.0003 8.24996C19.6237 8.24996 21.7503 10.3766 21.7503 13Z"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.89258 12.9999C3.91018 6.57618 9.91146 1.91663 17.001 1.91663C24.0907 1.91663 30.092 6.57624 32.1095 13C30.0919 19.4237 24.0907 24.0833 17.0011 24.0833C9.91146 24.0833 3.91015 19.4237 1.89258 12.9999Z"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <h6 class="card__title ps-semibold">{{ data.name }}</h6>
      <p class="card__text line-clamp-2">
        {{ data.sub_name }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    console.log(this.data)
  },
}
</script>

<style scoped lang="scss">
.card {
  &__img {
    overflow: hidden;
    height: 325px;
    margin-bottom: 22px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease;
    }
  }

  &:hover &__img {
    img {
      transform: scale(1.2);
    }
  }

  &__btn {
    position: absolute;
    right: 34px;
    bottom: 0;
    transform: translateY(50%);
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: #bf9f71;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-size: 30px;
    line-height: 45px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  &__text {
    font-size: 14px;
    line-height: 21px;
  }
}

@media screen and (max-width: 1200px) {
  .card {
    &__img {
      height: 250px;
    }
  }
}

@media screen and (max-width: 576px) {
  .card {
    &__img {
      height: 200px;
    }

    &__btn {
      right: 24px;
      width: 54px;
      height: 54px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    &__title {
      font-size: 25px;
      line-height: 38px;
    }

    &__text {
      font-size: 14px;
      line-height: 21px;
    }
  }
}
</style>
