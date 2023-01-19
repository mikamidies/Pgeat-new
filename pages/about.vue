<template>
  <div class="page">
    <AppTop :title="title" :subtitle="subtitle" :links="links" />
    <div class="about">
      <div class="container">
        <h2 class="about__title aa-regular">
          Phoenix <span>estate and traveling</span>
        </h2>
        <h6 class="about__subtitle">
          Looking for the best locations only for your comfortable life
        </h6>
        <div class="about__texts hundred">
          <p class="about__text fifty">
            Our company looks for houses, apartments and villas with great
            prices in a comfortable location only for your marvellous life. It's
            clear that, finding a good house with friendly neighborhood where
            school, and kindergarten nearby in the UK,
          </p>
          <p class="about__text fifty">
            in a good district is a little bit difficult than it seems,
            therefore we created a company, which helps and will help you with
            solving this poser. Call us and we will give you a free consultation
            with finding an area for living that meets your needs the best.
          </p>
        </div>
        <div class="about__img">
          <img src="@/assets/img/about.jpg" alt="" />
        </div>
        <h6 class="about__subtitle">
          Rent a luxury house in the middle of the city
        </h6>
        <p class="about__text">
          You can also rent a villa or a luxury house for your whole family. Our
          company will definitely try to find you an excellent location for a
          pleasant pastime.
        </p>
        <div class="about__lists">
          <div class="about__list">
            <h6 class="about__subtitle">
              1)Advantages of dealing with "Phoenix estate and traveling"
            </h6>
            <ul class="about__list-inner about__text">
              <li>Large selection of apartments and villas</li>
              <li>
                We choose only perfect locations for your comfortable stay
              </li>
              <li>Fresh air and excellent rest are provided by our company</li>
              <li>
                We offer apartments and villas only with attractive prices
              </li>
              <!-- <li>
                Ut in ante et quam malesuada gravida. Morbi tempus, odio
                suscipit
              </li>
              <li>
                Sed lectus vehicula mollis. Ut in ante et quam malesuada
                gravida.
              </li> -->
            </ul>
          </div>
          <div class="about__list">
            <h6 class="about__subtitle">
              Major advantages of staying and living in England
            </h6>
            <ul class="about__list-inner about__text">
              <li>Kind and friendly neighbours</li>
              <li>Comfortable apartments and villas</li>
              <li>High salaries</li>
              <li>Country with speedest economic development in Europe</li>
              <li>Marvellous nature</li>
              <!-- <li>
                Sed lectus vehicula mollis. Ut in ante et quam malesuada
                gravida.
              </li> -->
            </ul>
          </div>
        </div>
        <div class="about__img">
          <img src="@/assets/img/about.jpg" alt="" />
        </div>
        <p class="about__text">
          Endless facilities with buying a house or apartment. Live for your
          pleasure!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */

import AOS from 'aos'
import 'aos/dist/aos.css'

import AppTop from '@/components/AppTop'

export default {
  name: 'AboutPage',
  transition: 'fade',

  mounted() {
    AOS.init({})
  },

  data() {
    return {
      links: [
        {
          title: 'About Us',
        },
      ],
      title: [
        {
          title: 'About Us',
        },
      ],
      subtitle: [
        {
          subtitle:
            'We provide a wide range of developments, from conventional family homes in the countryside to thriving mixed-use complexes in the city, providing exciting options for everyone.',
        },
      ],
    }
  },

  components: {
    AppTop,
  },

  head() {
    return {
      title: 'Phoenix | About',
    }
  },
}
</script>

<style scoped lang="scss">
.fifty {
  width: 50% !important;
}
.about {
  padding-top: 150px;
  padding-bottom: 85px;

  &__title {
    font-size: 70px;
    line-height: 82px;
    color: #bf9f71;
    margin-bottom: 15px;

    span {
      color: #000;
    }
  }

  &__subtitle {
    font-size: 30px;
    line-height: 45px;
    color: #000;
    margin-bottom: 20px;
  }

  &__text {
    font-size: 20px;
    line-height: 30px;
    color: #000;
    margin-bottom: 50px;
  }

  &__texts {
    display: flex;
    margin-bottom: 72px;

    .about__text {
      &:first-child {
        width: 65%;
        padding-right: 34px;
      }
      &:last-child {
        width: 35%;
      }
    }
  }

  &__img {
    margin-bottom: 60px;
    img {
      display: block;
      max-width: 100%;
    }
  }

  &__lists {
    display: flex;
    justify-content: space-between;
  }

  &__list-inner {
    list-style: unset;
    padding-left: 20px;

    li {
      list-style: unset;
    }
  }
}

@media screen and (max-width: 1024px) {
  .about {
    &__title {
      font-size: 55px;
      line-height: 70px;
    }

    &__text {
      margin-bottom: 30px;
    }

    &__texts {
      display: block;
      margin-bottom: 50px;

      .about__text {
        width: 100% !important;
        padding: 0 !important;
      }
    }

    &__img {
      margin-bottom: 40px;
    }
  }
}

@media screen and (max-width: 768px) {
  .about {
    padding-bottom: 40px;

    &__title {
      font-size: 40px;
      line-height: 55px;
    }

    &__subtitle {
      font-size: 25px;
      line-height: 35px;
    }

    &__lists {
      display: block;
    }
  }
}

@media screen and (max-width: 576px) {
  .about {
    padding-top: 50px;
    padding-bottom: 20px;

    &__title {
      font-size: 22px;
      line-height: 29px;
      text-align: center;
      margin-bottom: 30px;
    }

    &__subtitle {
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 30px;
      text-align: center;
    }

    &__text {
      font-size: 18px;
      line-height: 27px;
    }

    &__img {
      height: 250px;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
