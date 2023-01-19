<template>
  <div class="footer-items">
    <div class="container">
      <div class="footer-items__inner">
        <div class="footer__item" data-aos="fade-up" data-aos-duration="400">
          <div class="footer__item-img">
            <img src="@/assets/img/footer-item-1.png" alt="" />
          </div>
          <div>
            <h5 class="footer__item-title aa-regular">
              Safe location for a marvellous life
            </h5>
            <p class="footer__item-text">
              Our company offers only those houses, which are situated only in
              the safe location
            </p>
          </div>
        </div>
        <div class="footer__item" data-aos="fade-up" data-aos-duration="800">
          <div class="footer__item-img">
            <img src="@/assets/img/footer-item-2.png" alt="" />
          </div>
          <div>
            <h5 class="footer__item-title aa-regular">
              Convenient location for your work
            </h5>
            <p class="footer__item-text">
              If you are working in any city of UK, we will try to find a house
              near your workplace
            </p>
          </div>
        </div>
        <div class="footer__item" data-aos="fade-up" data-aos-duration="1200">
          <div class="footer__item-img">
            <img src="@/assets/img/footer-item-3.png" alt="" />
          </div>
          <div>
            <h5 class="footer__item-title aa-regular">
              Doing sport is important in your lifestyle
            </h5>
            <p class="footer__item-text">
              We select only the best locations for doing sport and other
              activities
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooterItems',
}
</script>

<style scoped lang="scss">
.footer-items {
  transform: translateY(-50%);
  &__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #bf9f71;
    color: #fff;
    padding: 50px;
  }
}

.footer__item {
  width: calc(100% / 3 - 60px);
  display: flex;
  align-items: center;

  &-img {
    width: 110px;
    height: 110px;
    margin-right: 50px;
    flex-shrink: 0;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &-title {
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 10px;
  }

  &-text {
    font-size: 16px;
    line-height: 24px;
  }
}

@media screen and (max-width: 1500px) {
  .footer__item {
    width: calc(100% / 3 - 20px);

    &-img {
      width: 70px;
      height: 70px;
      margin-right: 20px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .footer__item {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 30px;
    }

    &-img {
      width: 50px;
      height: 50px;
      margin-right: 30px;
    }

    &-title {
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 10px;
    }

    &-text {
      font-size: 10px;
      line-height: 15px;
    }
  }
}
</style>
